import React, { useEffect } from 'react';
import { GameCanvas } from './GameCanvas';
import { ArrowLeft, Gamepad2, Sparkles, Coffee, BookOpen, Laptop, Award } from 'lucide-react';

interface ArcadePageProps {
  onBackToPortfolio: () => void;
}

export const ArcadePage: React.FC<ArcadePageProps> = ({ onBackToPortfolio }) => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans antialiased selection:bg-orange-500/30 selection:text-white flex flex-col justify-between p-4 sm:p-6 md:p-8">
      {/* ── Top Navigation Bar ── */}
      <header className="max-w-5xl w-full mx-auto flex items-center justify-between mb-4 sm:mb-6">
        <button
          onClick={onBackToPortfolio}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono tracking-wider backdrop-blur border border-white/20 transition-all shadow-lg active:scale-95 cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>BACK TO PORTFOLIO</span>
        </button>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-950/60 border border-orange-500/30 text-orange-400 text-xs font-mono">
          <Gamepad2 size={14} />
          <span className="font-bold tracking-wider hidden sm:inline">ARCADE MODE</span>
          <span className="size-1.5 rounded-full bg-orange-500 animate-pulse" />
        </div>
      </header>

      {/* ── Main Game Section ── */}
      <main className="w-full max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center">
        <GameCanvas onBackToPortfolio={onBackToPortfolio} />

        {/* ── Game Lore & Field Guide ── */}
        <section className="w-full mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {/* Collectibles Field Guide */}
          <div className="p-5 rounded-2xl bg-neutral-950 border border-white/10 shadow-xl">
            <div className="flex items-center gap-2 mb-3 text-orange-400 font-mono text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} />
              <span>Survival Supplies</span>
            </div>
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-start gap-2.5">
                <Coffee size={16} className="text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold">Canteen Coffee: </span>
                  <span className="text-white/60">4 seconds of invincible turbo speed. Smashes obstacles!</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <BookOpen size={16} className="text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold">Topper Notes: </span>
                  <span className="text-white/60">+150 points immediately added to your semester score.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Laptop size={16} className="text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold">StackOverflow Laptop: </span>
                  <span className="text-white/60">Provides a cyan shield that absorbs 1 collision hit.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Award size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-bold">85% Attendance Card: </span>
                  <span className="text-white/60">+200 bonus score + guaranteed exam hall ticket.</span>
                </div>
              </div>
            </div>
          </div>

          {/* College Hazard Warnings */}
          <div className="p-5 rounded-2xl bg-neutral-950 border border-white/10 shadow-xl">
            <div className="flex items-center gap-2 mb-3 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
              <span>⚠️</span>
              <span>Engineering Hazards</span>
            </div>
            <div className="space-y-2.5 font-mono text-xs text-white/70">
              <p>
                <b className="text-white">Ground Hazards (JUMP):</b> Assignment stacks, angry professors with red pens, surprise internal exams, scientific calculators, and the dreaded M1 Backlog Monster!
              </p>
              <p>
                <b className="text-white">Overhead Hazards (SLIDE):</b> 75% Attendance Shortage banners, 11:59 PM submission deadlines, and vtu.ac.in 504 server crash popups!
              </p>
              <p className="pt-2 text-[11px] text-white/40 italic border-t border-white/5">
                * Based on actual engineering struggles at Visvesvaraya Technological University (VTU) affiliated institutions.
              </p>
            </div>
          </div>
        </section>

        {/* ── Engineering Meme Sticker Roll ── */}
        <section className="w-full mt-4 p-5 rounded-2xl bg-neutral-950 border border-white/10 shadow-xl text-left">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-orange-400 font-mono text-xs font-bold uppercase tracking-wider">
              <span>🎭</span>
              <span>VTU Survival Memes & Relics</span>
            </div>
            <span className="text-[10px] font-mono text-white/40 hidden sm:inline">In-Game Dynamic Easter Eggs</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { img: '/memes/alakh-pandey.jpg', name: 'Physics Wallah', trigger: 'Topper Notes' },
              { img: '/memes/i-saw-that.jpg', name: 'Invigilator', trigger: 'Slide Dodge' },
              { img: '/memes/buff-mona-lisa.png', name: 'Exam Prep Beast', trigger: 'Coffee Boost' },
              { img: '/memes/screaming-cat.jpg', name: 'Viva Examiner', trigger: 'Exam Detained' },
              { img: '/memes/ravi-kishan.jpg', name: 'Revaluation Pass', trigger: 'Attendance Card' },
              { img: '/memes/ah-shit-here-we-go-again.jpg', name: 'Here We Go Again', trigger: 'Restart Run' },
            ].map((m) => (
              <div key={m.name} className="flex flex-col items-center p-2.5 rounded-xl bg-neutral-900 border border-white/5 text-center">
                <img src={m.img} alt={m.name} className="h-12 w-12 object-contain rounded-lg border border-white/10 mb-1.5 bg-black/40" />
                <span className="text-[11px] font-mono font-bold text-white leading-tight line-clamp-1">{m.name}</span>
                <span className="text-[9px] font-mono text-orange-400/80">{m.trigger}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="max-w-5xl w-full mx-auto mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/40 gap-2">
        <p>ESCAPE THE VTU 💀 · Built by Shreyas MH</p>
        <p>100% Offline · Chrome Dino Inspired Indie Arcade</p>
      </footer>
    </div>
  );
};

export default ArcadePage;
