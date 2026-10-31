import React from 'react';
import { DifficultyTier, MemeToast } from './types';
import { Volume2, VolumeX, Pause, Play } from 'lucide-react';

interface GameHUDProps {
  score: number;
  highScore: number;
  tier: DifficultyTier;
  hasShield: boolean;
  coffeeTimer: number;
  toast: MemeToast | null;
  isMuted: boolean;
  isPaused: boolean;
  onToggleMute: () => void;
  onTogglePause: () => void;
}

export const GameHUD: React.FC<GameHUDProps> = ({
  score,
  highScore,
  tier,
  hasShield,
  coffeeTimer,
  toast,
  isMuted,
  isPaused,
  onToggleMute,
  onTogglePause,
}) => {
  const padScore = (num: number, size: number = 5) => {
    let s = String(Math.floor(num));
    while (s.length < size) s = '0' + s;
    return s;
  };

  return (
    <div className="absolute inset-x-0 top-0 p-3 sm:p-5 pointer-events-none select-none z-20 flex flex-col gap-2">
      {/* Top HUD Bar */}
      <div className="flex items-center justify-between gap-2">
        {/* Left: Semester Badge & Shield */}
        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-lg bg-black/80 border border-white/20 backdrop-blur-md shadow-md flex items-center gap-2">
            <span className="size-2 rounded-full bg-orange-500 animate-ping" />
            <span className="text-[10px] sm:text-[11px] font-mono font-bold text-white tracking-wider uppercase">
              {tier.semester}: {tier.name}
            </span>
          </div>

          {hasShield && (
            <div className="px-2.5 py-1.5 rounded-lg bg-sky-950/80 border border-sky-400/40 text-sky-300 text-[10px] font-mono font-bold flex items-center gap-1.5 backdrop-blur-md shadow-lg animate-pulse">
              <span>🛡️</span>
              <span className="hidden sm:inline">SHIELD</span>
            </div>
          )}
        </div>

        {/* Center / Right: Digital Score Counter & High Score */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 font-mono text-xs sm:text-sm bg-black/80 border border-white/20 px-3 py-1.5 rounded-lg backdrop-blur-md shadow-md">
            <span className="text-white/40 text-[10px] sm:text-xs tracking-wider">HI {padScore(highScore)}</span>
            <span className="text-white font-bold tracking-widest text-sm sm:text-base">
              {padScore(score)}
            </span>
          </div>

          {/* Sound & Pause Controls */}
          <div className="flex items-center gap-1.5 pointer-events-auto">
            <button
              onClick={onTogglePause}
              className="p-1.5 rounded-lg bg-black/80 border border-white/20 hover:border-white/40 text-white/80 hover:text-white backdrop-blur-md transition-all active:scale-95"
              aria-label={isPaused ? 'Resume Game' : 'Pause Game'}
              title="Pause (P)"
            >
              {isPaused ? <Play size={14} /> : <Pause size={14} />}
            </button>
            <button
              onClick={onToggleMute}
              className="p-1.5 rounded-lg bg-black/80 border border-white/20 hover:border-white/40 text-white/80 hover:text-white backdrop-blur-md transition-all active:scale-95"
              aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
              title="Mute Sound"
            >
              {isMuted ? <VolumeX size={14} className="text-red-400" /> : <Volume2 size={14} />}
            </button>
          </div>
        </div>
      </div>

      {/* Coffee Boost Progress Bar */}
      {coffeeTimer > 0 && (
        <div className="w-56 max-w-full bg-black/90 border border-orange-500/70 p-2 rounded-xl backdrop-blur-md shadow-[0_0_20px_rgba(249,115,22,0.3)] animate-pulse flex items-center gap-2.5">
          <img
            src="/memes/buff-mona-lisa.png"
            alt="Buff Mona Lisa"
            className="w-8 h-8 object-contain rounded-md border border-orange-400/40 bg-neutral-900 shrink-0"
          />
          <div className="flex-1">
            <div className="flex justify-between text-[9px] font-mono text-orange-400 font-bold mb-1">
              <span>☕ INVINCIBLE FOCUS</span>
              <span>{Math.ceil(coffeeTimer / 60)}s</span>
            </div>
            <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-400 to-orange-500 h-full transition-all duration-100"
                style={{ width: `${(coffeeTimer / 240) * 100}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Meme Toast Banner Notification */}
      {toast && (
        <div className="self-center mt-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-neutral-950/95 border-2 border-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.4)] backdrop-blur-md animate-bounce flex items-center gap-3 max-w-lg pointer-events-auto">
          {toast.image && (
            <img
              src={toast.image}
              alt="Meme alert"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-lg border border-white/20 bg-black/60 shrink-0 shadow-md"
            />
          )}
          <p className="text-[11px] sm:text-xs font-mono font-bold text-orange-400 tracking-wide text-left">
            {toast.message}
          </p>
        </div>
      )}
    </div>
  );
};
