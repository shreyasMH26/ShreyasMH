import { Player } from './Player';
import { Obstacle } from './Obstacle';
import { Collectible } from './Collectible';
import {
  DifficultyTier,
  FloatingText,
  MemeToast,
  ObstacleType,
  Particle,
} from './types';
import { sounds } from './SoundEffects';

interface MemePreset {
  message: string;
  image?: string;
}

const MEME_PRESETS: MemePreset[] = [
  {
    message: 'Bro, assignment submission is TODAY! 💀',
    image: '/memes/ashish-haircut.jpg',
  },
  {
    message: 'Invigilator spotting you: "I saw that" 👀',
    image: '/memes/i-saw-that.jpg',
  },
  {
    message: 'Alakh Sir: Hello Bachhoooon! Engineering Physics pass karwa dunga!',
    image: '/memes/alakh-pandey.jpg',
  },
  {
    message: 'Studying syllabus at 3 AM the night before exam 💪🗿',
    image: '/memes/buff-mona-lisa.png',
  },
  {
    message: 'POV: External asks you to explain line 1 of your project 🫵😹',
    image: '/memes/screaming-cat.jpg',
  },
  {
    message: 'VTU Valuation passing you with exactly 35 marks! 😘',
    image: '/memes/ravi-kishan.jpg',
  },
  {
    message: 'Your attendance is 64%. Detained alert! 🚨',
    image: '/memes/ashish-haircut.jpg',
  },
  {
    message: 'M1 (Maths) has entered the chat. 💀',
    image: '/memes/screaming-cat.jpg',
  },
  {
    message: 'Surprise Internal Exam tomorrow. Good luck.',
    image: '/memes/i-saw-that.jpg',
  },
  {
    message: 'Ah shit... here we go again. Backlog edition.',
    image: '/memes/ah-shit-here-we-go-again.jpg',
  },
  {
    message: 'VTU servers are down again. (504 Gateway Timeout)',
    image: '/memes/screaming-cat.jpg',
  },
  {
    message: 'Fast-track re-evaluation fee: ₹1500 per subject 💸',
    image: '/memes/ravi-kishan.jpg',
  },
  {
    message: 'Degree progress: TO BE CONTINUED in 5th year! 💀',
    image: '/memes/to-be-continued.jpg',
  },
  {
    message: 'Photocopy shop line is 2 kilometres long outside college.',
    image: '/memes/ashish-haircut.jpg',
  },
  {
    message: 'One night before exam: "Guys which unit has 20 marks question?"',
    image: '/memes/alakh-pandey.jpg',
  },
  {
    message: 'Baburao: "Utha le re deva, is backlog wale ko utha le!" 💀',
    image: '/memes/baburao.jpg',
  },
  {
    message: 'Me in exam hall staring at question 1(a) for 45 minutes... 🤔',
    image: '/memes/thinking-monkey.jpg',
  },
  {
    message: 'HOD when you request 1% attendance concession to write exams 💀',
    image: '/memes/modi-pigtails.jpg',
  },
  {
    message: 'Chilling at college canteen while 4 assignments are due at 9 AM 🍟',
    image: '/memes/modi-lays.jpg',
  },
  {
    message: 'External: "Explain your exact contribution to this project" 🎤',
    image: '/memes/arjun-kapoor.jpg',
  },
];

const DIFFICULTY_TIERS: DifficultyTier[] = [
  { minScore: 0, maxScore: 100, name: 'First Semester', semester: 'Sem 1', baseSpeed: 6.2, spawnInterval: 95 },
  { minScore: 100, maxScore: 300, name: 'Assignment Pressure', semester: 'Sem 2', baseSpeed: 7.8, spawnInterval: 85 },
  { minScore: 300, maxScore: 500, name: 'Internal Exams', semester: 'Sem 3', baseSpeed: 9.4, spawnInterval: 76 },
  { minScore: 500, maxScore: 800, name: 'Semester Examination', semester: 'Sem 4', baseSpeed: 10.8, spawnInterval: 68 },
  { minScore: 800, maxScore: 1200, name: 'Backlog Era', semester: 'Sem 5', baseSpeed: 12.2, spawnInterval: 62 },
  { minScore: 1200, maxScore: Infinity, name: 'VTU Survival Mode 💀', semester: 'Sem 8', baseSpeed: 13.8, spawnInterval: 56 },
];

export class GameEngine {
  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;
  public width: number = 800;
  public height: number = 400;
  public groundY: number = 330;

  public player: Player;
  public obstacles: Obstacle[] = [];
  public collectibles: Collectible[] = [];
  public particles: Particle[] = [];
  public floatingTexts: FloatingText[] = [];

  // Game Progress
  public score: number = 0;
  public highScore: number = 0;
  public currentTier: DifficultyTier = DIFFICULTY_TIERS[0];
  public isRunning: boolean = false;
  public isPaused: boolean = false;
  public isGameOver: boolean = false;

  // Background Parallax
  private bgX1: number = 0;
  private bgX2: number = 0;
  private roadDashesX: number = 0;
  private clouds: { x: number; y: number; speed: number; width: number }[] = [];
  private stars: { x: number; y: number; size: number; alpha: number }[] = [];

  // Spawning & Timers
  private spawnCooldown: number = 70;
  private collectibleCooldown: number = 180;
  private memeCooldown: number = 220;
  public activeToast: MemeToast | null = null;

  // Screen Shake
  private shakeDuration: number = 0;
  private shakeMagnitude: number = 0;

  // Input States
  public isDownHeld: boolean = false;

  // Animation Frame
  private animationFrameId: number | null = null;

  // UI Event Callbacks
  private onScoreUpdate?: (score: number, highScore: number, tier: DifficultyTier) => void;
  private onGameOver?: (finalScore: number, highScore: number) => void;
  private onToast?: (toast: MemeToast | null) => void;

  constructor(
    canvas: HTMLCanvasElement,
    callbacks?: {
      onScoreUpdate?: (score: number, highScore: number, tier: DifficultyTier) => void;
      onGameOver?: (finalScore: number, highScore: number) => void;
      onToast?: (toast: MemeToast | null) => void;
    }
  ) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Could not get 2D canvas context');
    this.ctx = context;

    this.onScoreUpdate = callbacks?.onScoreUpdate;
    this.onGameOver = callbacks?.onGameOver;
    this.onToast = callbacks?.onToast;

    this.player = new Player();
    this.loadHighScore();
    this.initBackgroundElements();
    this.resize();
  }

  private loadHighScore() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('escape_vtu_high_score');
      if (saved) {
        this.highScore = parseInt(saved, 10) || 0;
      }
    }
  }

  private saveHighScore() {
    if (this.score > this.highScore) {
      this.highScore = Math.floor(this.score);
      if (typeof window !== 'undefined') {
        localStorage.setItem('escape_vtu_high_score', String(this.highScore));
      }
    }
  }

  private initBackgroundElements() {
    this.clouds = [
      { x: 50, y: 35, speed: 0.35, width: 64 },
      { x: 260, y: 55, speed: 0.25, width: 80 },
      { x: 520, y: 25, speed: 0.4, width: 72 },
      { x: 740, y: 65, speed: 0.3, width: 56 },
    ];

    this.stars = [];
    for (let i = 0; i < 40; i++) {
      this.stars.push({
        x: Math.random() * 800,
        y: Math.random() * 190,
        size: Math.random() < 0.3 ? 2 : 1,
        alpha: 0.3 + Math.random() * 0.7,
      });
    }
  }

  public resize() {
    const rect = this.canvas.parentElement?.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const displayWidth = rect ? Math.floor(rect.width) : 800;
    const displayHeight = rect ? Math.floor(rect.height) : 400;

    this.width = Math.max(displayWidth, 600);
    this.height = Math.max(displayHeight, 360);

    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.canvas.style.width = `${displayWidth}px`;
    this.canvas.style.height = `${displayHeight}px`;

    this.ctx.scale(dpr, dpr);
    this.ctx.imageSmoothingEnabled = false; // Authentic crisp 8-bit pixels!

    this.groundY = this.height - 65;
    this.player.init(this.groundY);
  }

  public start() {
    this.score = 0;
    this.isGameOver = false;
    this.isPaused = false;
    this.isRunning = true;
    this.obstacles = [];
    this.collectibles = [];
    this.particles = [];
    this.floatingTexts = [];
    this.activeToast = null;
    this.spawnCooldown = 60;
    this.collectibleCooldown = 150;
    this.currentTier = DIFFICULTY_TIERS[0];

    this.player.init(this.groundY);
    sounds.startMusic();

    this.showMemeToast('Sem 1: Ah shit, here we go again! 🏃‍♂️💨', 160, '/memes/ah-shit-here-we-go-again.jpg');
    if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
    this.loop();
  }

  public restart() {
    this.start();
  }

  public pause() {
    if (this.isGameOver) return;
    this.isPaused = !this.isPaused;
    if (this.isPaused) {
      sounds.stopMusic();
    } else {
      sounds.startMusic();
      this.loop();
    }
  }

  public jump() {
    if (!this.isRunning || this.isPaused || this.isGameOver) return;
    this.player.jump();
    this.addDustPuff(this.player.x + 10, this.groundY, 4);
  }

  public slide() {
    if (!this.isRunning || this.isPaused || this.isGameOver) return;
    this.isDownHeld = true;
    this.player.slide();
  }

  public releaseSlide() {
    this.isDownHeld = false;
    this.player.releaseSlide();
  }

  public shake(duration: number = 14, magnitude: number = 8) {
    this.shakeDuration = duration;
    this.shakeMagnitude = magnitude;
  }

  private loop = () => {
    if (!this.isRunning || this.isPaused) return;

    this.update();
    this.render();

    if (!this.isGameOver) {
      this.animationFrameId = requestAnimationFrame(this.loop);
    }
  };

  private update() {
    // Determine current difficulty tier
    const foundTier = DIFFICULTY_TIERS.find(
      (t) => this.score >= t.minScore && this.score < t.maxScore
    ) || DIFFICULTY_TIERS[DIFFICULTY_TIERS.length - 1];

    if (foundTier !== this.currentTier) {
      this.currentTier = foundTier;
      this.showMemeToast(`LEVEL UP: ${foundTier.name} (${foundTier.semester})! 💀`, 170);
    }

    // Dynamic speed based on tier + coffee multiplier
    let effectiveSpeed = this.currentTier.baseSpeed;
    if (this.player.coffeeTimer > 0) {
      effectiveSpeed *= 1.35; // Turbo boost!
    }

    // Score accumulation
    this.score += effectiveSpeed * 0.05;
    this.onScoreUpdate?.(Math.floor(this.score), this.highScore, this.currentTier);

    // Update Player
    this.player.update(this.isDownHeld);

    // Running dust particles
    if (this.player.isGrounded && this.player.state === 'RUNNING' && Math.random() < 0.28) {
      this.addDustPuff(this.player.x + 4, this.groundY, 1);
    }

    // Background Scroll
    this.bgX1 = (this.bgX1 - effectiveSpeed * 0.2) % this.width;
    this.bgX2 = (this.bgX2 - effectiveSpeed * 0.45) % this.width;
    this.roadDashesX = (this.roadDashesX - effectiveSpeed) % 40;

    // Clouds
    for (const cloud of this.clouds) {
      cloud.x -= cloud.speed;
      if (cloud.x + cloud.width < -20) {
        cloud.x = this.width + 40;
      }
    }

    // ── Spawning Obstacles ──
    this.spawnCooldown--;
    if (this.spawnCooldown <= 0) {
      this.spawnObstacle();
      const variation = Math.floor(Math.random() * 25) - 10;
      this.spawnCooldown = Math.max(38, this.currentTier.spawnInterval + variation);
    }

    // ── Spawning Collectibles ──
    this.collectibleCooldown--;
    if (this.collectibleCooldown <= 0) {
      this.spawnCollectible();
      this.collectibleCooldown = 150 + Math.floor(Math.random() * 120);
    }

    // ── Random Meme Toasts ──
    this.memeCooldown--;
    if (this.memeCooldown <= 0) {
      const preset = MEME_PRESETS[Math.floor(Math.random() * MEME_PRESETS.length)];
      this.showMemeToast(preset.message, 190, preset.image);
      this.memeCooldown = 300 + Math.floor(Math.random() * 200);
    }

    // Toast Timer
    if (this.activeToast) {
      this.activeToast.age++;
      if (this.activeToast.age >= this.activeToast.duration) {
        this.activeToast = null;
        this.onToast?.(null);
      }
    }

    // ── Update & Collide Obstacles ──
    const playerHitbox = this.player.getHitbox();

    for (const obs of this.obstacles) {
      obs.update(effectiveSpeed);

      // Check Collision
      if (!obs.passedPlayer && this.checkCollision(playerHitbox, obs.getHitbox())) {
        if (this.player.coffeeTimer > 0) {
          // Invincible during coffee boost: smash obstacle!
          obs.markedForRemoval = true;
          this.addExplosion(obs.x + obs.width / 2, obs.y + obs.height / 2, '#f97316');
          this.addFloatingText('+50 SMASH!', obs.x, obs.y, '#f97316');
          this.score += 50;
          sounds.playHit();
          this.shake(8, 4);
        } else {
          const lethal = this.player.hit();
          this.shake(20, 10);
          this.addExplosion(playerHitbox.x + playerHitbox.width / 2, playerHitbox.y + playerHitbox.height / 2, '#ef4444');

          if (lethal) {
            this.handleGameOver();
            return;
          }
        }
      }

      if (obs.x + obs.width < playerHitbox.x && !obs.passedPlayer) {
        obs.passedPlayer = true;
        if (obs.isOverhead && this.player.state === 'SLIDING' && Math.random() < 0.35) {
          this.showMemeToast('Invigilator peeking at your bench: "I saw that" 👀', 130, '/memes/i-saw-that.jpg');
        }
      }
    }

    this.obstacles = this.obstacles.filter((o) => !o.markedForRemoval);

    // ── Update & Collect Items ──
    for (const item of this.collectibles) {
      item.update(effectiveSpeed);

      if (this.checkCollision(playerHitbox, item.getHitbox())) {
        item.markedForRemoval = true;
        this.collectItem(item);
      }
    }

    this.collectibles = this.collectibles.filter((c) => !c.markedForRemoval);

    // ── Update Particles ──
    for (const p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.life++;
      p.opacity = 1 - p.life / p.maxLife;
    }
    this.particles = this.particles.filter((p) => p.life < p.maxLife);

    // ── Update Floating Texts ──
    for (const ft of this.floatingTexts) {
      ft.y += ft.vy;
      ft.life++;
      ft.opacity = 1 - ft.life / 45;
    }
    this.floatingTexts = this.floatingTexts.filter((ft) => ft.life < 45);

    // Screen Shake decay
    if (this.shakeDuration > 0) {
      this.shakeDuration--;
    }
  }

  private spawnObstacle() {
    const isOverheadAllowed = this.score > 120;
    const overheadProbability = isOverheadAllowed ? 0.35 : 0;
    const spawnOverhead = Math.random() < overheadProbability;

    let type: ObstacleType;
    if (spawnOverhead) {
      const overheadTypes: ObstacleType[] = ['attendance_notice', 'vtu_result', 'deadline'];
      type = overheadTypes[Math.floor(Math.random() * overheadTypes.length)];
    } else {
      const groundTypes: ObstacleType[] = [
        'assignment',
        'assignment',
        'professor',
        'exam',
        'calculator',
      ];
      if (this.score > 400) {
        groundTypes.push('backlog_monster');
      }
      type = groundTypes[Math.floor(Math.random() * groundTypes.length)];
    }

    const obs = new Obstacle(this.width + 40, this.groundY, type);
    this.obstacles.push(obs);
  }

  private spawnCollectible() {
    const types: ('coffee' | 'notes' | 'laptop' | 'attendance')[] = [
      'coffee',
      'notes',
      'notes',
      'attendance',
    ];
    if (!this.player.hasShield && Math.random() < 0.45) {
      types.push('laptop');
    }

    const selectedType = types[Math.floor(Math.random() * types.length)];
    // Spawn either at jump height or low slide height
    const atJumpHeight = Math.random() < 0.6;
    const yPos = atJumpHeight ? this.groundY - 80 : this.groundY - 35;

    const item = new Collectible(this.width + 30, yPos, selectedType);
    this.collectibles.push(item);
  }

  private collectItem(item: Collectible) {
    sounds.playCollect(item.type);

    if (item.type === 'coffee') {
      this.player.coffeeTimer = 240; // ~4 seconds of caffeine boost!
      this.addFloatingText('CAFFEINE RUSH! ⚡', item.x, item.y, '#f97316');
      this.showMemeToast('☕ 4 SECONDS OF INVINCIBLE SPEED!', 130, '/memes/buff-mona-lisa.png');
    } else if (item.type === 'notes') {
      this.score += 150;
      this.addFloatingText('+150 TOPPER NOTES!', item.x, item.y, '#facc15');
      this.showMemeToast('📚 Hello Bachhoooon! Engineering Notes Secured!', 130, '/memes/alakh-pandey.jpg');
    } else if (item.type === 'laptop') {
      this.player.hasShield = true;
      this.addFloatingText('STACKOVERFLOW SHIELD! 🛡️', item.x, item.y, '#38bdf8');
      this.showMemeToast('💻 SHIELD ACTIVATED: Absorbs 1 Backlog Hit!', 140, '/memes/buff-mona-lisa.png');
    } else if (item.type === 'attendance') {
      this.score += 200;
      this.addFloatingText('+200 (85% ATTENDANCE!)', item.x, item.y, '#4ade80');
      this.showMemeToast('🎓 ATTENDANCE 85%: Hall ticket secured! 😘', 130, '/memes/ravi-kishan.jpg');
    }

    this.addSparkles(item.x + 16, item.y + 16, 8);
  }

  private handleGameOver() {
    this.isGameOver = true;
    this.isRunning = false;
    this.saveHighScore();
    sounds.stopMusic();

    const finalScore = Math.floor(this.score);
    this.onGameOver?.(finalScore, this.highScore);
  }

  private checkCollision(a: { x: number; y: number; width: number; height: number }, b: { x: number; y: number; width: number; height: number }) {
    return (
      a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y
    );
  }

  public showMemeToast(message: string, duration: number = 180, image?: string) {
    this.activeToast = {
      id: Math.random().toString(),
      message,
      duration,
      age: 0,
      image,
    };
    this.onToast?.(this.activeToast);
  }

  private addDustPuff(x: number, y: number, count: number = 2) {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: x + Math.random() * 8,
        y: y - 2 - Math.random() * 4,
        vx: -1.5 - Math.random() * 1.5,
        vy: -0.5 - Math.random() * 0.8,
        size: 3 + Math.random() * 2,
        color: '#71717a',
        opacity: 0.7,
        life: 0,
        maxLife: 18 + Math.floor(Math.random() * 10),
      });
    }
  }

  private addSparkles(x: number, y: number, count: number = 8) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 2.5;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 2.5,
        color: '#fef08a',
        opacity: 1,
        life: 0,
        maxLife: 24,
      });
    }
  }

  private addExplosion(x: number, y: number, color: string) {
    for (let i = 0; i < 24; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 4.5;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 3 + Math.random() * 3,
        color,
        opacity: 1,
        life: 0,
        maxLife: 32,
      });
    }
  }

  public addFloatingText(text: string, x: number, y: number, color: string) {
    this.floatingTexts.push({
      id: Math.random().toString(),
      text,
      x,
      y,
      color,
      opacity: 1,
      vy: -1.2,
      life: 0,
    });
  }

  // ── Render Frame ──
  public render() {
    this.ctx.save();

    // Screen Shake Offset
    if (this.shakeDuration > 0) {
      const sx = (Math.random() - 0.5) * this.shakeMagnitude;
      const sy = (Math.random() - 0.5) * this.shakeMagnitude;
      this.ctx.translate(sx, sy);
    }

    // 1. Clear & Dark Retro Sky
    this.ctx.fillStyle = '#05070a'; // Deep OLED Black
    this.ctx.fillRect(0, 0, this.width, this.height);

    // 2. Pixel Stars
    this.ctx.fillStyle = '#ffffff';
    for (const star of this.stars) {
      this.ctx.globalAlpha = star.alpha;
      this.ctx.fillRect(star.x, star.y, star.size, star.size);
    }
    this.ctx.globalAlpha = 1.0;

    // 3. Moon (Retro Pixel Crescent Moon)
    this.drawMoon(this.width - 90, 40);

    // 4. Pixel Clouds
    this.drawClouds();

    // 5. Parallax Layer 1: Distant VTU Campus Skyline
    this.drawCampusSkyline(this.bgX1);

    // 6. Parallax Layer 2: Campus Lamp Posts & Trees
    this.drawCampusForeground(this.bgX2);

    // 7. Ground & Asphalt Track
    this.drawGround();

    // 8. Obstacles
    for (const obs of this.obstacles) {
      obs.draw(this.ctx);
    }

    // 9. Collectibles
    for (const item of this.collectibles) {
      item.draw(this.ctx);
    }

    // 10. Player Character
    this.player.draw(this.ctx);

    // 11. Particles
    for (const p of this.particles) {
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.opacity;
      this.ctx.fillRect(p.x, p.y, p.size, p.size);
    }
    this.ctx.globalAlpha = 1.0;

    // 12. Floating Texts
    for (const ft of this.floatingTexts) {
      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, ft.opacity);
      this.ctx.fillStyle = ft.color;
      this.ctx.font = 'bold 9px "Press Start 2P", monospace';
      this.ctx.fillText(ft.text, ft.x, ft.y);
      this.ctx.restore();
    }

    this.ctx.restore();
  }

  // Draw Pixel Moon
  private drawMoon(x: number, y: number) {
    this.ctx.fillStyle = '#fef08a';
    this.ctx.beginPath();
    this.ctx.arc(x, y, 16, 0, Math.PI * 2);
    this.ctx.fill();

    // Crater cut for crescent
    this.ctx.fillStyle = '#05070a';
    this.ctx.beginPath();
    this.ctx.arc(x - 5, y - 4, 14, 0, Math.PI * 2);
    this.ctx.fill();
  }

  // Draw Pixel Clouds
  private drawClouds() {
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
    for (const cloud of this.clouds) {
      const cx = cloud.x;
      const cy = cloud.y;
      this.ctx.fillRect(cx, cy + 6, cloud.width, 12);
      this.ctx.fillRect(cx + 8, cy, cloud.width - 24, 8);
      this.ctx.fillRect(cx + 16, cy - 4, cloud.width - 36, 6);
    }
  }

  // Parallax Layer 1: VTU Campus Skyline (Iconic Dome, Pillars, Towers)
  private drawCampusSkyline(offsetX: number) {
    this.ctx.fillStyle = '#0f172a'; // Dark slate silhouette

    const buildingPatternWidth = 600;
    const startX = offsetX;

    for (let x = startX - buildingPatternWidth; x < this.width + buildingPatternWidth; x += buildingPatternWidth) {
      // 1. VTU Administrative Central Dome (Matches Icon!)
      this.ctx.fillRect(x + 180, this.groundY - 110, 100, 110);
      // Triangular pediment
      this.ctx.beginPath();
      this.ctx.moveTo(x + 175, this.groundY - 110);
      this.ctx.lineTo(x + 230, this.groundY - 142);
      this.ctx.lineTo(x + 285, this.groundY - 110);
      this.ctx.fill();

      // VTU Sign on building
      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = 'bold 8px "Press Start 2P", monospace';
      this.ctx.fillText('VTU', x + 215, this.groundY - 118);
      this.ctx.fillStyle = '#0f172a';

      // Pillars
      for (let p = 0; p < 4; p++) {
        this.ctx.fillRect(x + 195 + p * 20, this.groundY - 80, 8, 80);
      }

      // Flag atop the dome
      this.ctx.fillStyle = '#f97316';
      this.ctx.fillRect(x + 230, this.groundY - 156, 12, 8);
      this.ctx.fillStyle = '#ffffff';
      this.ctx.fillRect(x + 228, this.groundY - 158, 2, 16);
      this.ctx.fillStyle = '#0f172a';

      // 2. Exam Hall Complex (Blocky buildings with lit windows)
      this.ctx.fillRect(x + 20, this.groundY - 85, 75, 85);
      this.ctx.fillRect(x + 105, this.groundY - 65, 60, 65);
      this.ctx.fillRect(x + 300, this.groundY - 95, 80, 95);
      this.ctx.fillRect(x + 395, this.groundY - 70, 70, 70);
      this.ctx.fillRect(x + 480, this.groundY - 105, 90, 105);

      // Random Yellow Exam Hall Windows (Students pulling all-nighters)
      this.ctx.fillStyle = '#fef08a';
      this.ctx.globalAlpha = 0.45;
      for (let w = 0; w < 3; w++) {
        this.ctx.fillRect(x + 32 + w * 18, this.groundY - 70, 8, 10);
        this.ctx.fillRect(x + 315 + w * 20, this.groundY - 80, 8, 10);
        this.ctx.fillRect(x + 500 + w * 22, this.groundY - 90, 8, 10);
      }
      this.ctx.globalAlpha = 1.0;
      this.ctx.fillStyle = '#0f172a';
    }
  }

  // Parallax Layer 2: Campus Lamp Posts & Trees
  private drawCampusForeground(offsetX: number) {
    const spacing = 280;
    for (let x = offsetX - spacing; x < this.width + spacing; x += spacing) {
      // Lamp Post
      this.ctx.fillStyle = '#27272a';
      this.ctx.fillRect(x + 40, this.groundY - 65, 4, 65);
      this.ctx.fillRect(x + 36, this.groundY - 68, 12, 3);
      // Lamp Glow
      this.ctx.fillStyle = '#facc15';
      this.ctx.globalAlpha = 0.5;
      this.ctx.beginPath();
      this.ctx.arc(x + 42, this.groundY - 62, 7, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.globalAlpha = 1.0;

      // Pixel Tree
      this.ctx.fillStyle = '#1c1917';
      this.ctx.fillRect(x + 160, this.groundY - 35, 6, 35); // Trunk
      this.ctx.fillStyle = '#14532d'; // Foliage
      this.ctx.fillRect(x + 148, this.groundY - 55, 30, 24);
      this.ctx.fillRect(x + 154, this.groundY - 65, 18, 14);
    }
  }

  // Draw Ground Track with Semesters Markers
  private drawGround() {
    const gy = this.groundY;

    // Ground Surface Base Line (White pixel border)
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillRect(0, gy, this.width, 2.5);

    // Dark Track Fill
    this.ctx.fillStyle = '#090d16';
    this.ctx.fillRect(0, gy + 2.5, this.width, this.height - gy);

    // Dashed road dashes
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
    for (let x = this.roadDashesX - 40; x < this.width + 40; x += 40) {
      this.ctx.fillRect(x, gy + 12, 20, 3);
    }

    // Distance Milestone / Semester Marker along road
    const semIndex = Math.floor(this.score / 200) + 1;
    const markerInterval = 800;
    const markerOffset = (this.width - (this.score * 4) % markerInterval);
    if (markerOffset > -100 && markerOffset < this.width + 100) {
      // Milestone Post
      this.ctx.fillStyle = '#f97316';
      this.ctx.fillRect(markerOffset, gy - 24, 18, 24);
      this.ctx.strokeStyle = '#ffffff';
      this.ctx.lineWidth = 1;
      this.ctx.strokeRect(markerOffset, gy - 24, 18, 24);
      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = 'bold 7px monospace';
      this.ctx.fillText(`S${Math.min(semIndex, 8)}`, markerOffset + 3, gy - 9);
    }
  }

  public destroy() {
    this.isRunning = false;
    sounds.stopMusic();
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }
}
