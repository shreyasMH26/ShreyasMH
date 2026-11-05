import React, { useEffect, useRef, useState, useCallback } from 'react';
import { X, Play, RotateCcw, Zap } from 'lucide-react';

interface AgentSwarmOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Agent {
  id: number;
  name: string;
  color: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  speed: number;
  trail: { x: number; y: number; alpha: number }[];
  isOrbiting?: boolean;
  orbitAngle?: number;
  orbitRadius?: number;
}

interface InspectionBox {
  id: string;
  selector?: string;
  fallbackRect: { x: number; y: number; width: number; height: number };
  actualRect?: { x: number; y: number; width: number; height: number };
  label: string;
  activeFromLayer: number;
  activeToLayer: number;
  status: 'pending' | 'scanning' | 'active' | 'built';
  alignGuideX?: boolean;
  alignGuideY?: boolean;
}

const AGENT_COLORS = [
  '#00F0FF', // Cyan
  '#FF007F', // Hot Pink
  '#FFB800', // Amber
  '#8B5CF6', // Purple
  '#10B981', // Emerald
  '#F97316', // Orange
  '#3B82F6', // Blue
  '#EC4899', // Pink
  '#06B6D4', // Teal
  '#EAB308', // Yellow
  '#A855F7', // Violet
  '#14B8A6', // Turquoise
];

const AGENT_NAMES = [
  'Layout-Agent',
  'CSS-Grid',
  'DOM-Scanner',
  'Bento-Builder',
  'Hero-Align',
  'Style-Sync',
  'Font-Metric',
  'Flex-Agent',
  'Shader-Opt',
  'Asset-Linker',
  'Color-Map',
  'Node-Tree',
  'Physics-Rig',
  'Event-Bus',
  'Vite-Bundler',
  'Tailwind-JIT',
];

const TOTAL_LAYERS = 201;
const TOTAL_AGENTS = 44;

export const AgentSwarmOverlay: React.FC<AgentSwarmOverlayProps> = ({ isOpen, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [phase, setPhase] = useState<'scanning' | 'building' | 'complete'>('scanning');
  const [layerCount, setLayerCount] = useState<number>(0);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const animFrameRef = useRef<number | null>(null);
  const agentsRef = useRef<Agent[]>([]);
  const boxesRef = useRef<InspectionBox[]>([]);
  const startTimeRef = useRef<number>(0);
  const progressRef = useRef<number>(0);

  // Initialize Blueprint Inspection Targets from real page DOM
  const initInspectionTargets = useCallback(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const targetSelectors: { selector: string; label: string; fallback: { x: number; y: number; width: number; height: number }; alignX?: boolean; alignY?: boolean }[] = [
      { selector: '#hero, [data-section="hero"]', label: 'Hero Header Container', fallback: { x: vw * 0.1, y: 80, width: vw * 0.8, height: 260 }, alignX: true, alignY: true },
      { selector: 'h1', label: 'Typography · Name Display', fallback: { x: vw * 0.12, y: 110, width: Math.min(vw * 0.6, 520), height: 72 }, alignX: true },
      { selector: '#hero p, [data-hero-desc]', label: 'Hero Positioning Bio', fallback: { x: vw * 0.12, y: 190, width: Math.min(vw * 0.55, 480), height: 60 } },
      { selector: '[data-card="id-badge"], [aria-label*="Badge"], #lanyard', label: '3D Physics Lanyard Card', fallback: { x: vw * 0.68, y: 100, width: 220, height: 340 }, alignY: true },
      { selector: '#projects, [data-section="projects"]', label: 'Bento Grid System', fallback: { x: vw * 0.08, y: 380, width: vw * 0.84, height: 420 }, alignX: true, alignY: true },
      { selector: '[data-card="xtich"], [data-project="xtich"]', label: 'Venture · XTICH Studios', fallback: { x: vw * 0.1, y: 410, width: vw * 0.38, height: 180 }, alignX: true },
      { selector: '[data-card="arcade"], [data-project="arcade"]', label: 'Arcade Engine · Escape VTU', fallback: { x: vw * 0.52, y: 410, width: vw * 0.38, height: 180 } },
      { selector: '#soundtrack, [data-section="soundtrack"]', label: 'Audio · Apple Music Widget', fallback: { x: vw * 0.1, y: 610, width: vw * 0.38, height: 170 }, alignY: true },
      { selector: '#contact, [data-section="contact"]', label: 'Contact · Direct Channels', fallback: { x: vw * 0.52, y: 610, width: vw * 0.38, height: 170 } },
      { selector: 'nav[aria-label*="Dock"], [data-dock]', label: 'macOS Interactive Floating Dock', fallback: { x: vw * 0.5 - 240, y: vh - 90, width: 480, height: 68 }, alignX: true, alignY: true },
    ];

    const boxes: InspectionBox[] = targetSelectors.map((item, idx) => {
      let rect = { ...item.fallback };
      if (typeof document !== 'undefined') {
        const el = document.querySelector(item.selector);
        if (el) {
          const b = el.getBoundingClientRect();
          if (b.width > 20 && b.height > 20) {
            rect = {
              x: Math.max(10, b.left),
              y: Math.max(10, b.top),
              width: Math.min(vw - 20, b.width),
              height: Math.min(vh - 20, b.height),
            };
          }
        }
      }

      const step = TOTAL_LAYERS / targetSelectors.length;
      return {
        id: `box-${idx}`,
        selector: item.selector,
        fallbackRect: item.fallback,
        actualRect: rect,
        label: `${item.label} · ${Math.round(rect.width)} × ${Math.round(rect.height)}`,
        activeFromLayer: Math.floor(idx * step),
        activeToLayer: Math.floor((idx + 1.2) * step),
        status: 'pending',
        alignGuideX: item.alignX,
        alignGuideY: item.alignY,
      };
    });

    boxesRef.current = boxes;
  }, []);

  // Initialize the 44 Agents with swarm physics
  const initAgents = useCallback(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const agents: Agent[] = [];

    for (let i = 0; i < TOTAL_AGENTS; i++) {
      // Spawn around screen edges in a staggered formation
      const edge = i % 4; // 0: top, 1: right, 2: bottom, 3: left
      let x = 0;
      let y = 0;

      if (edge === 0) {
        x = Math.random() * vw;
        y = -30 - Math.random() * 80;
      } else if (edge === 1) {
        x = vw + 30 + Math.random() * 80;
        y = Math.random() * vh;
      } else if (edge === 2) {
        x = Math.random() * vw;
        y = vh + 30 + Math.random() * 80;
      } else {
        x = -30 - Math.random() * 80;
        y = Math.random() * vh;
      }

      agents.push({
        id: i,
        name: `${AGENT_NAMES[i % AGENT_NAMES.length]}-${String((i % 9) + 1).padStart(2, '0')}`,
        color: AGENT_COLORS[i % AGENT_COLORS.length],
        x,
        y,
        vx: 0,
        vy: 0,
        targetX: vw * 0.5 + (Math.random() - 0.5) * 300,
        targetY: vh * 0.5 + (Math.random() - 0.5) * 200,
        speed: 0.045 + Math.random() * 0.035,
        trail: [],
        orbitAngle: Math.random() * Math.PI * 2,
        orbitRadius: 20 + Math.random() * 40,
      });
    }

    agentsRef.current = agents;
  }, []);

  // Reset and restart animation
  const startTour = useCallback(() => {
    setPhase('scanning');
    setLayerCount(0);
    setElapsedSeconds(0);
    progressRef.current = 0;
    startTimeRef.current = performance.now();
    initInspectionTargets();
    initAgents();
  }, [initInspectionTargets, initAgents]);

  useEffect(() => {
    if (isOpen) {
      startTour();
    } else {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    }
  }, [isOpen, startTour]);

  // Handle ESC key to dismiss
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Main Canvas Render & Animation Loop
  useEffect(() => {
    if (!isOpen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let lastTimestamp = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const loop = (timestamp: number) => {
      const delta = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      if (!isPaused) {
        const effectiveDelta = delta * speedMultiplier;
        progressRef.current += effectiveDelta * 14; // progress step

        const currentProg = progressRef.current;
        const currentLayers = Math.min(TOTAL_LAYERS, Math.floor(currentProg));
        setLayerCount(currentLayers);

        const elapsed = (timestamp - startTimeRef.current) / 1000;
        setElapsedSeconds(Number(elapsed.toFixed(1)));

        // Phase State Transitions
        if (currentLayers < 15) {
          setPhase('scanning');
        } else if (currentLayers < TOTAL_LAYERS) {
          setPhase('building');
        } else {
          setPhase('complete');
        }

        // Update Boxes status based on current layer
        boxesRef.current.forEach((box) => {
          if (currentLayers < box.activeFromLayer) {
            box.status = 'pending';
          } else if (currentLayers >= box.activeFromLayer && currentLayers <= box.activeToLayer) {
            box.status = 'active';
          } else {
            box.status = 'built';
          }
        });

        // Assign Agents to active boxes or scanning patrol
        const activeBoxes = boxesRef.current.filter((b) => b.status === 'active' || b.status === 'scanning');

        agentsRef.current.forEach((agent, i) => {
          if (currentLayers >= TOTAL_LAYERS) {
            // Victory dispersion / smooth orbits around screen
            if (agent.orbitAngle !== undefined) {
              agent.orbitAngle += 0.03 * speedMultiplier;
              const cx = window.innerWidth * 0.5;
              const cy = window.innerHeight * 0.45;
              const r = 240 + (i % 6) * 50;
              agent.targetX = cx + Math.cos(agent.orbitAngle + i) * r;
              agent.targetY = cy + Math.sin(agent.orbitAngle + i * 0.5) * (r * 0.5);
            }
          } else if (activeBoxes.length > 0) {
            // Swarm target boxes
            const targetBox = activeBoxes[i % activeBoxes.length];
            const rect = targetBox.actualRect || targetBox.fallbackRect;

            // Pick a perimeter point or corner on the target box
            const cornerIdx = i % 4;
            let tx = rect.x;
            let ty = rect.y;

            if (cornerIdx === 1) tx += rect.width;
            if (cornerIdx === 2) {
              tx += rect.width;
              ty += rect.height;
            }
            if (cornerIdx === 3) ty += rect.height;

            // Add minor dynamic jitter to simulate active inspector typing/clicks
            tx += (Math.sin(timestamp * 0.005 + i) - 0.5) * 16;
            ty += (Math.cos(timestamp * 0.005 + i) - 0.5) * 16;

            agent.targetX = tx;
            agent.targetY = ty;
          } else {
            // Patrol scanning
            agent.targetX = window.innerWidth * (0.2 + (i / TOTAL_AGENTS) * 0.6);
            agent.targetY = window.innerHeight * (0.2 + ((i * 3) % 10) * 0.06);
          }

          // Physics integration: Spring easing toward target
          const dx = agent.targetX - agent.x;
          const dy = agent.targetY - agent.y;
          agent.vx = agent.vx * 0.82 + dx * agent.speed * speedMultiplier;
          agent.vy = agent.vy * 0.82 + dy * agent.speed * speedMultiplier;

          agent.x += agent.vx;
          agent.y += agent.vy;

          // Record cursor trails (last 5 positions)
          agent.trail.unshift({ x: agent.x, y: agent.y, alpha: 0.6 });
          if (agent.trail.length > 6) agent.trail.pop();
          agent.trail.forEach((t) => (t.alpha *= 0.85));
        });
      }

      // ── RENDER FRAME ──
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      ctx.clearRect(0, 0, vw, vh);

      // 1. Subtle Dark Blueprint Grid & Vignette
      ctx.save();
      ctx.fillStyle = 'rgba(0, 0, 0, 0.38)';
      ctx.fillRect(0, 0, vw, vh);

      // Fine grid dots
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      const gridSize = 40;
      for (let gx = 0; gx < vw; gx += gridSize) {
        for (let gy = 0; gy < vh; gy += gridSize) {
          ctx.fillRect(gx, gy, 1.5, 1.5);
        }
      }
      ctx.restore();

      // 2. Draw Inspection Blueprint Bounding Boxes & Dimension Badges
      boxesRef.current.forEach((box) => {
        if (box.status === 'pending') return;

        const rect = box.actualRect || box.fallbackRect;
        const isActive = box.status === 'active';
        const isBuilt = box.status === 'built';

        ctx.save();

        if (isActive) {
          // Neon Cyan / Blue Blueprint box
          ctx.strokeStyle = '#00F0FF';
          ctx.lineWidth = 1.5;
          ctx.fillStyle = 'rgba(0, 240, 255, 0.06)';
          ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
          ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);

          // 4 Corner Square Resize Handles (Figma style)
          const handleSize = 6;
          ctx.fillStyle = '#00F0FF';
          ctx.fillRect(rect.x - handleSize / 2, rect.y - handleSize / 2, handleSize, handleSize);
          ctx.fillRect(rect.x + rect.width - handleSize / 2, rect.y - handleSize / 2, handleSize, handleSize);
          ctx.fillRect(rect.x - handleSize / 2, rect.y + rect.height - handleSize / 2, handleSize, handleSize);
          ctx.fillRect(rect.x + rect.width - handleSize / 2, rect.y + rect.height - handleSize / 2, handleSize, handleSize);

          // Red Alignment Smart Guides (crosshairs across viewport)
          if (box.alignGuideX) {
            ctx.strokeStyle = 'rgba(239, 68, 68, 0.45)'; // Neon Red
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(0, rect.y);
            ctx.lineTo(vw, rect.y);
            ctx.stroke();
            ctx.setLineDash([]);
          }
          if (box.alignGuideY) {
            ctx.strokeStyle = 'rgba(239, 68, 68, 0.45)';
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(rect.x + rect.width, 0);
            ctx.lineTo(rect.x + rect.width, vh);
            ctx.stroke();
            ctx.setLineDash([]);
          }

          // Dimension Pill Badge (e.g. "Hero Container · 1040 × 480")
          ctx.font = '10px "JetBrains Mono", monospace';
          const textWidth = ctx.measureText(box.label).width;
          const badgeW = textWidth + 14;
          const badgeH = 18;
          const badgeX = Math.max(10, rect.x);
          const badgeY = Math.max(18, rect.y - badgeH - 3);

          ctx.fillStyle = 'rgba(0, 240, 255, 0.95)';
          ctx.beginPath();
          ctx.roundRect(badgeX, badgeY, badgeW, badgeH, 4);
          ctx.fill();

          ctx.fillStyle = '#000000';
          ctx.fillText(box.label, badgeX + 7, badgeY + 13);
        } else if (isBuilt) {
          // Subtle permanent blueprint border
          ctx.strokeStyle = 'rgba(59, 130, 246, 0.35)';
          ctx.lineWidth = 1;
          ctx.setLineDash([3, 3]);
          ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
          ctx.setLineDash([]);
        }

        ctx.restore();
      });

      // 3. Draw 44 Agent Cursors with Motion Trails
      agentsRef.current.forEach((agent) => {
        ctx.save();

        // Cursor Trail
        if (agent.trail.length > 1) {
          ctx.strokeStyle = agent.color;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(agent.x, agent.y);
          agent.trail.forEach((p) => {
            ctx.globalAlpha = p.alpha * 0.4;
            ctx.lineTo(p.x, p.y);
          });
          ctx.stroke();
          ctx.globalAlpha = 1.0;
        }

        // Draw Multiplayer Cursor Arrow (SVG Path on Canvas)
        ctx.translate(agent.x, agent.y);

        // Cursor Shadow
        ctx.shadowColor = agent.color;
        ctx.shadowBlur = 8;

        ctx.fillStyle = agent.color;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.2;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 16);
        ctx.lineTo(4.5, 12);
        ctx.lineTo(9, 19);
        ctx.lineTo(12, 17.5);
        ctx.lineTo(7.5, 10.5);
        ctx.lineTo(13.5, 10.5);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.shadowBlur = 0; // reset shadow

        // Agent Name Pill Tag
        ctx.font = 'bold 9px "JetBrains Mono", monospace';
        const nameW = ctx.measureText(agent.name).width + 8;
        ctx.fillStyle = agent.color;
        ctx.beginPath();
        ctx.roundRect(14, 12, nameW, 14, 3);
        ctx.fill();

        ctx.fillStyle = '#000000';
        ctx.fillText(agent.name, 18, 22);

        ctx.restore();
      });

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [isOpen, isPaused, speedMultiplier]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[120] pointer-events-none select-none overflow-hidden"
      aria-label="AI Agent Swarm Rebuild Overlay"
    >
      {/* ── Main High-Speed Render Canvas ── */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* ── Top Exit Helper ── */}
      <div className="absolute top-4 right-4 pointer-events-auto flex items-center gap-2">
        <button
          onClick={onClose}
          className="px-3 py-1.5 rounded-full bg-black/80 hover:bg-black text-white/70 hover:text-white border border-white/20 text-xs font-mono tracking-wider backdrop-blur-md shadow-lg transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
          title="Exit Tour (ESC)"
        >
          <span>EXIT ESC</span>
          <X size={13} />
        </button>
      </div>

      {/* ── Bottom Floating Inspection Dock Bar (1:1 with Video) ── */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 pointer-events-auto">
        <div className="flex items-center gap-2 sm:gap-3 px-4 py-2 sm:py-2.5 rounded-full bg-black/90 border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(0,240,255,0.2)] backdrop-blur-xl text-white font-mono text-xs max-w-[95vw]">
          {/* Phase 1: Scanning Mode */}
          {phase === 'scanning' && (
            <>
              <div className="flex items-center gap-2 pr-2 border-r border-white/10">
                <span className="size-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-white/80 tracking-wide font-bold">Scanning page...</span>
              </div>
              <div className="w-20 bg-white/10 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-cyan-400 h-full transition-all duration-150"
                  style={{ width: `${(layerCount / 20) * 100}%` }}
                />
              </div>
            </>
          )}

          {/* Phase 2: Building / Rebuilding Mode */}
          {phase === 'building' && (
            <>
              {/* Colorful Agent Dots */}
              <div className="flex items-center gap-1 pr-2 border-r border-white/10">
                <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="size-2 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: '150ms' }} />
                <span className="size-2 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: '300ms' }} />
                <span className="size-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '450ms' }} />
                <span className="text-white font-bold ml-1.5 text-[11px] sm:text-xs">
                  {TOTAL_AGENTS} agents
                </span>
              </div>

              {/* Live Layer Counter */}
              <div className="px-2 text-white/80 font-bold tracking-wider text-[11px] sm:text-xs">
                <span className="text-cyan-400">{layerCount}</span>
                <span className="text-white/40"> / {TOTAL_LAYERS} layers</span>
              </div>
            </>
          )}

          {/* Phase 3: Complete Celebration */}
          {phase === 'complete' && (
            <div className="flex items-center gap-2 pr-2 border-r border-white/10 text-emerald-400 font-bold">
              <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-white text-[11px] sm:text-xs">
                Rebuilt by <b className="text-cyan-400">{TOTAL_AGENTS} agents</b> in{' '}
                <b className="text-emerald-400">{elapsedSeconds}s</b>
              </span>
            </div>
          )}

          {/* Controls: Tour / Replay */}
          <div className="flex items-center gap-1.5 pl-2 border-l border-white/10">
            {phase === 'complete' ? (
              <button
                onClick={startTour}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-[10px] sm:text-[11px] transition-all active:scale-95 cursor-pointer font-bold"
                title="Replay Inspection Tour"
              >
                <RotateCcw size={11} />
                <span>Replay</span>
              </button>
            ) : (
              <button
                onClick={() => setIsPaused((prev) => !prev)}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white text-[10px] transition-all cursor-pointer"
                title={isPaused ? 'Resume' : 'Pause'}
              >
                <Play size={10} className={isPaused ? 'text-amber-400' : 'text-white/60'} />
                <span>{isPaused ? 'Resume' : 'Tour'}</span>
              </button>
            )}

            {/* Speed Toggle (1x / 2x) */}
            <button
              onClick={() => setSpeedMultiplier((prev) => (prev === 1 ? 2 : 1))}
              className={`px-2 py-0.5 rounded-full text-[10px] font-bold border transition-all cursor-pointer ${
                speedMultiplier === 2
                  ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50'
                  : 'bg-white/5 text-white/60 border-white/10 hover:text-white'
              }`}
              title="Toggle Speed"
            >
              <span className="flex items-center gap-0.5">
                {speedMultiplier === 2 && <Zap size={9} />}
                {speedMultiplier}x
              </span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all cursor-pointer ml-1"
              title="Close Rebuild"
              aria-label="Close"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentSwarmOverlay;
