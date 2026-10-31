import React from 'react';

interface StartScreenProps {
  onStart: () => void;
  onBack: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart, onBack }) => {
  return (
    <div className="absolute inset-0 z-30 flex flex-col items-center justify-between p-6 sm:p-8 bg-black/85 backdrop-blur-md text-white select-none overflow-y-auto">
      {/* Top Bar: Back to Portfolio */}
      <div className="w-full flex justify-between items-center max-w-2xl">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono tracking-wider transition-all active:scale-95 border border-white/20"
        >
          ← BACK TO PORTFOLIO
        </button>
        <span className="text-[10px] sm:text-xs font-mono tracking-widest text-white/40 uppercase">
          VTU ENG. EDITION · V1.0
        </span>
      </div>

      {/* Center Cinematic Content */}
      <div className="flex flex-col items-center text-center my-auto py-6 max-w-lg">
        {/* Presenter Subtitle */}
        <p className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.3em] text-orange-500 uppercase mb-3 animate-pulse">
          SHREYAS MH PRESENTS
        </p>

        {/* Main Title: ESCAPE THE VTU 💀 */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2 font-mono drop-shadow-[0_0_20px_rgba(249,115,22,0.4)]">
          ESCAPE THE VTU 💀
        </h1>

        {/* Tagline */}
        <p className="text-xs sm:text-sm font-mono tracking-wider text-white/70 uppercase max-w-md mb-6 leading-relaxed">
          FOUR YEARS OF ENGINEERING.<br />
          <span className="text-orange-400 font-bold">INFINITE SUFFERING.</span>
        </p>

        {/* Animated Pixel Student Running in place */}
        <div className="size-20 my-2 relative flex items-center justify-center">
          <img
            src="/icons/dock/arcade.png"
            alt="Escape the VTU"
            className="size-16 object-contain rounded-2xl shadow-[0_0_25px_rgba(249,115,22,0.3)] border border-white/20 animate-bounce"
          />
        </div>

        {/* Meme Sticker Teaser */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 my-1 shadow-sm">
          <img
            src="/memes/ah-shit-here-we-go-again.jpg"
            alt="GTA meme"
            className="h-5 w-auto object-contain rounded"
          />
          <span className="text-[10px] font-mono text-white/60">Sem 1 Edition · Enter at your own risk</span>
        </div>

        {/* [ START SUFFERING ] Action Button */}
        <button
          onClick={onStart}
          className="mt-6 px-8 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-mono font-bold text-sm sm:text-base tracking-widest uppercase shadow-[0_0_30px_rgba(234,88,12,0.6)] border border-orange-400 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          [ START SUFFERING ]
        </button>

        <p className="text-[11px] text-white/40 font-mono mt-3">
          Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded border border-white/20 text-white">SPACE</kbd> or click to begin
        </p>
      </div>

      {/* Bottom Controls Cheat Sheet */}
      <div className="w-full max-w-xl bg-neutral-900/80 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
        <p className="text-[10px] font-mono tracking-widest text-white/40 uppercase mb-2 text-center">
          CONTROLS MANUAL
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-xs font-mono">
          <div className="p-2 rounded-lg bg-black/50 border border-white/5">
            <span className="text-orange-400 font-bold block">SPACE / ↑</span>
            <span className="text-[11px] text-white/60">JUMP OVER OBSTACLE</span>
          </div>
          <div className="p-2 rounded-lg bg-black/50 border border-white/5">
            <span className="text-orange-400 font-bold block">↓ ARROW</span>
            <span className="text-[11px] text-white/60">SLIDE UNDER BANNER</span>
          </div>
          <div className="p-2 rounded-lg bg-black/50 border border-white/5 col-span-2 sm:col-span-1">
            <span className="text-orange-400 font-bold block">TOUCH / SWIPE</span>
            <span className="text-[11px] text-white/60">TAP JUMP / SWIPE DOWN</span>
          </div>
        </div>
      </div>
    </div>
  );
};
