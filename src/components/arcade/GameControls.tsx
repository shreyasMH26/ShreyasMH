import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface GameControlsProps {
  onJump: () => void;
  onSlideStart: () => void;
  onSlideEnd: () => void;
}

export const GameControls: React.FC<GameControlsProps> = ({
  onJump,
  onSlideStart,
  onSlideEnd,
}) => {
  return (
    <div className="sm:hidden absolute inset-x-0 bottom-4 px-6 flex justify-between items-center pointer-events-auto select-none z-20">
      {/* Slide Button (Left thumb) */}
      <button
        type="button"
        onTouchStart={(e) => {
          e.preventDefault();
          onSlideStart();
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          onSlideEnd();
        }}
        onMouseDown={onSlideStart}
        onMouseUp={onSlideEnd}
        className="size-16 rounded-2xl bg-neutral-900/90 border-2 border-white/20 active:border-orange-500 active:bg-orange-950/60 text-white flex flex-col items-center justify-center shadow-2xl backdrop-blur-md active:scale-95 transition-all"
        aria-label="Slide down"
      >
        <ArrowDown size={22} className="text-orange-400" />
        <span className="text-[9px] font-mono font-bold tracking-wider uppercase mt-0.5">SLIDE</span>
      </button>

      {/* Jump Button (Right thumb) */}
      <button
        type="button"
        onTouchStart={(e) => {
          e.preventDefault();
          onJump();
        }}
        onClick={onJump}
        className="size-16 rounded-2xl bg-neutral-900/90 border-2 border-white/20 active:border-orange-500 active:bg-orange-950/60 text-white flex flex-col items-center justify-center shadow-2xl backdrop-blur-md active:scale-95 transition-all"
        aria-label="Jump up"
      >
        <ArrowUp size={22} className="text-orange-400" />
        <span className="text-[9px] font-mono font-bold tracking-wider uppercase mt-0.5">JUMP</span>
      </button>
    </div>
  );
};
