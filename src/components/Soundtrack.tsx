import { useInViewAnimation } from '../hooks/useInViewAnimation';
import Button from './Button';
import { ArrowUpRight } from 'lucide-react';

function AppleLogo({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.05-.03.07-.42 1.44-1.38 2.82M15.97 6.37c.62-.75 1.04-1.8 1.01-2.87-.96.04-2.13.65-2.82 1.45-.61.7-.95 1.77-.92 2.82 1.08.08 2.11-.65 2.73-1.4z" />
    </svg>
  );
}

export default function Soundtrack() {
  const [ref, isInView] = useInViewAnimation<HTMLDivElement>(0.1);
  const playlistUrl = 'https://music.apple.com/in/playlist/after-2-17/pl.u-vxy6974T8y18pDo';

  return (
    <section
      ref={ref}
      id="soundtrack"
      className="w-full bg-white py-16 md:py-24 px-6 border-t border-black/[0.05]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-10 md:mb-14">
          <span
            className={`text-xs md:text-sm font-mono uppercase tracking-widest text-[#273C46] mb-3 inline-block font-semibold ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            Soundtrack
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#0D212C] mb-3 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            What I listen to <span className="font-serif italic font-normal">after 2:17</span>.
          </h2>
          <p
            className={`text-base sm:text-lg text-[#273C46] max-w-xl ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            Curated playlist powering late-night coding sessions, building XTICH, deep work, and designing new products.
          </p>
        </div>

        {/* Content Grid: Curated Info Card + Apple Music Player */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Playlist Card & Vibe */}
          <div
            className={`lg:col-span-5 p-8 rounded-3xl bg-zinc-50 border border-black/[0.06] flex flex-col justify-between h-full space-y-6 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.35s' }}
          >
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-black/[0.06] shadow-sm mb-6 text-xs font-mono text-[#051A24]">
                <AppleLogo size={14} className="text-[#FA243C]" />
                <span>Apple Music</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FA243C] animate-pulse" />
              </div>

              {/* Title & Curator */}
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#0D212C] tracking-tight mb-2">
                after 2 : 17
              </h3>
              <p className="text-sm font-mono text-[#273C46] mb-5">
                Curated by Shreyas MH
              </p>

              {/* Animated Sound Equalizer Bars */}
              <div className="flex items-end gap-1.5 h-6 mb-6">
                <span className="w-1 bg-[#FA243C] rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3" />
                <span className="w-1 bg-[#051A24] rounded-full animate-[pulse_0.6s_ease-in-out_infinite_0.2s] h-5" />
                <span className="w-1 bg-[#FA243C] rounded-full animate-[pulse_1s_ease-in-out_infinite_0.4s] h-6" />
                <span className="w-1 bg-[#051A24] rounded-full animate-[pulse_0.7s_ease-in-out_infinite_0.1s] h-4" />
                <span className="w-1 bg-[#FA243C] rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.3s] h-5" />
                <span className="w-1 bg-[#051A24] rounded-full animate-[pulse_1.1s_ease-in-out_infinite_0.5s] h-3" />
                <span className="text-xs font-mono text-[#273C46] ml-2 self-center">
                  Late-Night Focus
                </span>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#273C46] leading-relaxed">
                A selection of atmospheric melodies, ambient beats, indie rhythms, and nocturnal focus tracks. The exact sonic backdrop behind every feature, git commit, and sprint.
              </p>
            </div>

            {/* Listen Button */}
            <div className="pt-2">
              <Button
                variant="primary"
                href={playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#051A24] hover:bg-[#0D212C] text-white py-3 px-6 shadow-md"
              >
                <AppleLogo size={16} />
                <span>Listen on Apple Music</span>
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </div>

          {/* Right Column: Embedded Apple Music Player */}
          <div
            className={`lg:col-span-7 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.45s' }}
          >
            <div className="rounded-3xl overflow-hidden border border-black/[0.08] shadow-lg bg-zinc-950">
              <iframe
                src="https://embed.music.apple.com/in/playlist/after-2-17/pl.u-vxy6974T8y18pDo"
                title="after 2 : 17 — Apple Music Playlist by Shreyas MH"
                height="450"
                className="w-full border-0 overflow-hidden bg-transparent"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
