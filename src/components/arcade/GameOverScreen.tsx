import React, { useMemo } from 'react';

interface GameOverScreenProps {
  score: number;
  highScore: number;
  onRestart: () => void;
  onBack: () => void;
}

interface FailureMeme {
  image: string;
  tag: string;
  caption: string;
}

const FAILURE_MEMES: FailureMeme[] = [
  {
    image: '/memes/screaming-cat.jpg',
    tag: 'EXAMINER REACTION',
    caption: 'External examiner watching you write Hindi song lyrics in the VTU answer sheet 🫵😹',
  },
  {
    image: '/memes/ashish-haircut.jpg',
    tag: 'ERP CHECKED',
    caption: 'POV: You open college ERP and see 14/50 in internal marks & 64% attendance 💀',
  },
  {
    image: '/memes/to-be-continued.jpg',
    tag: 'SUPPLEMENTARY',
    caption: 'Engineering Degree: TO BE CONTINUED in next year supplementary batch...',
  },
  {
    image: '/memes/i-saw-that.jpg',
    tag: 'SQUAD CAUGHT',
    caption: 'Squad flying inspection team: "I saw that micro-xerox inside your calculator cover" 👀',
  },
  {
    image: '/memes/alakh-pandey.jpg',
    tag: 'PHYSICS WALLAH',
    caption: 'Alakh Sir: "Hello Bachhooon... internal marks ke liye ab agle saal aana padega" 😭',
  },
  {
    image: '/memes/ravi-kishan.jpg',
    tag: 'REVALUATION',
    caption: 'VTU Revaluation committee taking your ₹1500 and giving 0 marks change 😘',
  },
];

export const GameOverScreen: React.FC<GameOverScreenProps> = ({
  score,
  highScore,
  onRestart,
  onBack,
}) => {
  const meme = useMemo(() => {
    return FAILURE_MEMES[Math.floor(Math.random() * FAILURE_MEMES.length)];
  }, []);

  const isNewHigh = score >= highScore && score > 0;

  return (
    <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md text-white select-none animate-fade-in overflow-y-auto">
      <div className="flex flex-col items-center text-center max-w-md w-full bg-neutral-950 border-2 border-red-500/50 rounded-3xl p-5 sm:p-7 shadow-[0_0_50px_rgba(239,68,68,0.3)] my-auto">
        {/* Skull Icon */}
        <div className="size-14 rounded-full bg-red-950/80 border border-red-500/40 flex items-center justify-center text-3xl mb-3 shadow-lg animate-pulse">
          💀
        </div>

        {/* Detained Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-mono text-red-500 uppercase mb-1 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">
          YOU HAVE BEEN DETAINED.
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm font-mono tracking-widest text-red-400/80 uppercase font-bold mb-4">
          SEMESTER: EXTENDED
        </p>

        {/* Dynamic Meme Failure Reaction Card */}
        <div className="w-full bg-neutral-900/90 border border-red-500/30 rounded-2xl p-3 mb-4 flex items-center gap-3 text-left shadow-lg">
          <img
            src={meme.image}
            alt="Detained meme"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-xl border border-red-400/40 bg-black/60 shrink-0 shadow-md"
          />
          <div className="flex-1">
            <span className="text-[9px] font-mono font-bold text-red-400 uppercase tracking-widest block mb-1">
              [ {meme.tag} ]
            </span>
            <p className="text-xs font-mono text-neutral-200 leading-snug">
              {meme.caption}
            </p>
          </div>
        </div>

        {/* Score Board */}
        <div className="grid grid-cols-2 gap-3 w-full mb-4 font-mono">
          <div className="p-3 rounded-xl bg-neutral-900 border border-white/10 text-center">
            <span className="text-[10px] text-white/40 uppercase block mb-1">Your Score</span>
            <span className="text-xl sm:text-2xl font-bold text-white tracking-widest">
              {Math.floor(score)}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-neutral-900 border border-white/10 text-center relative overflow-hidden">
            {isNewHigh && (
              <span className="absolute top-1 right-1 text-[8px] bg-amber-500 text-black font-bold px-1 rounded uppercase">
                NEW!
              </span>
            )}
            <span className="text-[10px] text-white/40 uppercase block mb-1">Best Score</span>
            <span className="text-xl sm:text-2xl font-bold text-amber-400 tracking-widest">
              {Math.floor(highScore)}
            </span>
          </div>
        </div>

        {/* Ah Shit Here We Go Again Badge */}
        <div className="flex items-center justify-center gap-2 mb-3 text-white/60 text-[11px] font-mono">
          <img
            src="/memes/ah-shit-here-we-go-again.jpg"
            alt="GTA San Andreas meme"
            className="h-6 w-auto object-contain rounded border border-white/20 shadow-sm"
          />
          <span>Ah shit, here we go again...</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5 w-full">
          <button
            onClick={onRestart}
            className="flex-1 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(239,68,68,0.5)] active:scale-95 cursor-pointer"
          >
            [ TRY AGAIN ]
          </button>
          <button
            onClick={onBack}
            className="flex-1 py-3 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white/80 hover:text-white border border-white/15 font-mono font-bold text-xs tracking-wider uppercase transition-all active:scale-95 cursor-pointer"
          >
            [ BACK TO PORTFOLIO ]
          </button>
        </div>

        <p className="text-[10px] text-white/30 font-mono mt-3">
          Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white">SPACE</kbd> or <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white">R</kbd> to retry immediately
        </p>
      </div>
    </div>
  );
};
