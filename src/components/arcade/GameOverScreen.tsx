import React, { useMemo } from 'react';

interface GameOverScreenProps {
  score: number;
  highScore: number;
  onRestart: () => void;
  onBack: () => void;
}

const FAILURE_QUOTES = [
  'Better luck next semester.',
  'Your parents have been notified on WhatsApp.',
  'One more attempt bro.',
  'Congratulations! New backlog unlocked.',
  'Degree completion postponed by 6 months.',
  'Attendance shortage: Detention letter signed by HOD.',
  'Failed due to step-marking policy.',
  'Internal marks: 14/50. See you in supplementary.',
  'Even ChatGPT said "You are on your own bro".',
  'External examiner showed no mercy.',
];

export const GameOverScreen: React.FC<GameOverScreenProps> = ({
  score,
  highScore,
  onRestart,
  onBack,
}) => {
  const quote = useMemo(() => {
    return FAILURE_QUOTES[Math.floor(Math.random() * FAILURE_QUOTES.length)];
  }, []);

  const isNewHigh = score >= highScore && score > 0;

  return (
    <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 bg-black/90 backdrop-blur-md text-white select-none animate-fade-in">
      <div className="flex flex-col items-center text-center max-w-md w-full bg-neutral-950 border-2 border-red-500/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(239,68,68,0.3)]">
        {/* Skull Icon */}
        <div className="size-16 rounded-full bg-red-950/80 border border-red-500/40 flex items-center justify-center text-3xl mb-4 shadow-lg animate-pulse">
          💀
        </div>

        {/* Detained Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-mono text-red-500 uppercase mb-1 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]">
          YOU HAVE BEEN DETAINED.
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm font-mono tracking-widest text-red-400/80 uppercase font-bold mb-5">
          SEMESTER: EXTENDED
        </p>

        {/* Witty Quote */}
        <div className="w-full bg-red-950/30 border border-red-500/20 rounded-xl p-3 mb-6">
          <p className="text-xs font-mono text-neutral-300 italic">
            "{quote}"
          </p>
        </div>

        {/* Score Board */}
        <div className="grid grid-cols-2 gap-3 w-full mb-6 font-mono">
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

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
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

        <p className="text-[10px] text-white/30 font-mono mt-4">
          Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white">SPACE</kbd> or <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white">R</kbd> to retry immediately
        </p>
      </div>
    </div>
  );
};
