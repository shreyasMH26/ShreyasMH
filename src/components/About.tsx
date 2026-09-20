import { useState } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Sparkles, MapPin, X } from 'lucide-react';

interface JournalPhoto {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  tag: string;
  aspect: string;
}

const JOURNAL_PHOTOS: JournalPhoto[] = [
  {
    id: 'editorial-bw',
    src: '/photos/shreyas-editorial-bw.jpg',
    title: 'channel ORANGE',
    subtitle: 'Editorial portrait · Frank Ocean tribute',
    tag: 'Archive 01',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'tree-night',
    src: '/photos/shreyas-tree-night.jpg',
    title: 'after 2 : 17',
    subtitle: 'Nocturnal focus · Apple Music cover',
    tag: 'Archive 02',
    aspect: 'aspect-square',
  },
  {
    id: 'river-cloud',
    src: '/photos/shreyas-river-cloud.jpg',
    title: 'Overcast Currents',
    subtitle: 'Contemplation by the weir rapids',
    tag: 'Archive 03',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'night-water',
    src: '/photos/shreyas-night-water.png',
    title: 'Waterfront Velocity',
    subtitle: 'Long exposure motion blur by the bay',
    tag: 'Archive 04',
    aspect: 'aspect-[16/10]',
  },
];

export default function About() {
  const [ref, isInView] = useInViewAnimation<HTMLDivElement>(0.1);
  const [activePhoto, setActivePhoto] = useState<JournalPhoto | null>(null);

  return (
    <section
      ref={ref}
      id="about"
      className="w-full bg-white py-16 md:py-28 px-4 sm:px-6 border-t border-black/[0.05]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header & Main Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 md:mb-24">
          {/* Left Column: Featured Editorial Portrait */}
          <div
            className={`lg:col-span-5 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.15s' }}
          >
            <div
              onClick={() => setActivePhoto(JOURNAL_PHOTOS[0])}
              className="relative aspect-[4/5] w-full max-w-sm sm:max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border border-black/[0.08] group cursor-pointer bg-zinc-900"
            >
              <img
                src="/photos/shreyas-editorial-bw.jpg"
                alt="Shreyas MH — Editorial Portrait"
                className="w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Top Film Stamp Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-mono shadow-md">
                <Sparkles size={13} className="text-[#FA243C]" />
                <span>SHREYAS MH</span>
                <span className="text-white/40">·</span>
                <span className="text-[#8EA3AD]">CSE & Founder</span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#FA243C] font-semibold mb-0.5">
                  Visual Archive
                </p>
                <p className="text-lg sm:text-xl font-serif font-semibold tracking-tight text-white drop-shadow">
                  Creative Director & Builder
                </p>
                <div className="flex items-center gap-1.5 text-xs text-white/70 font-mono mt-1">
                  <MapPin size={12} />
                  <span>Davanagere, Karnataka</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative Statement */}
          <div
            className={`lg:col-span-7 space-y-6 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.25s' }}
          >
            {/* Section Label */}
            <span className="text-xs md:text-sm font-mono uppercase tracking-widest text-[#273C46] inline-block font-semibold">
              About / Bio
            </span>

            {/* Main Statement */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#0D212C] leading-[1.15] select-none">
              I'm a CSE student who likes{' '}
              <span className="font-serif font-normal italic">building things</span>.
            </h2>

            {/* Narrative Body */}
            <div className="space-y-4 text-base sm:text-lg text-[#051A24] leading-relaxed max-w-2xl">
              <p>
                I build at the intersection of technology, AI, and creative entrepreneurship. From writing code to launching real-world products, I enjoy taking ideas from zero to something that actually ships.
              </p>
              <p className="text-[#273C46]">
                Beyond computer engineering, I co-founded{' '}
                <strong className="text-[#051A24] font-semibold">XTICH</strong> to build a contemporary student apparel brand from scratch — focusing on product design, university culture, and digital commerce architecture.
              </p>
              <p className="text-sm sm:text-base font-mono text-[#273C46] pt-2 border-t border-black/[0.06]">
                Always learning, exploring local AI runtimes, and engineering ideas that solve genuine problems.
              </p>
            </div>

            {/* Quick Metrics / Signature Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-zinc-50 border border-black/[0.05]">
                <p className="text-xs font-mono text-[#273C46] uppercase tracking-wider mb-1">Discipline</p>
                <p className="text-sm sm:text-base font-semibold text-[#051A24]">Computer Science</p>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-50 border border-black/[0.05]">
                <p className="text-xs font-mono text-[#273C46] uppercase tracking-wider mb-1">Venture</p>
                <p className="text-sm sm:text-base font-semibold text-[#051A24]">Co-Founder @ XTICH</p>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-50 border border-black/[0.05] col-span-2 sm:col-span-1">
                <p className="text-xs font-mono text-[#273C46] uppercase tracking-wider mb-1">Focus</p>
                <p className="text-sm sm:text-base font-semibold text-[#051A24]">AI & Systems</p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Journal / Editorial Photo Reel */}
        <div
          className={`pt-8 border-t border-black/[0.06] ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.35s' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#273C46] font-semibold block mb-1">
                Visual Journal
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#0D212C] tracking-tight">
                Off-screen <span className="font-normal italic">& perspectives</span>
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[#273C46]">
              4 Photographs · Curated by Shreyas MH
            </p>
          </div>

          {/* Responsive 4-Photo Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {JOURNAL_PHOTOS.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(photo)}
                className="group relative rounded-2xl overflow-hidden bg-zinc-950 border border-black/[0.08] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Tag Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/15">
                    {photo.tag}
                  </div>

                  {/* Bottom Text */}
                  <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                    <h4 className="text-sm font-serif font-semibold text-white tracking-tight drop-shadow">
                      {photo.title}
                    </h4>
                    <p className="text-[11px] font-sans text-white/70 line-clamp-1">
                      {photo.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal for Photo Inspection */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setActivePhoto(null)}
        >
          <button
            type="button"
            onClick={() => setActivePhoto(null)}
            className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/15 shadow-lg"
            aria-label="Close photo preview"
          >
            <X size={20} />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col bg-zinc-950"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activePhoto.src}
              alt={activePhoto.title}
              className="max-h-[75vh] w-auto object-contain select-none mx-auto"
            />
            <div className="p-4 sm:p-5 bg-zinc-950/90 border-t border-white/10 flex items-center justify-between gap-4 text-white">
              <div>
                <p className="text-xs font-mono text-[#FA243C] uppercase tracking-wider">
                  {activePhoto.tag}
                </p>
                <h4 className="text-base sm:text-lg font-serif font-semibold">
                  {activePhoto.title}
                </h4>
                <p className="text-xs text-white/60">{activePhoto.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="px-4 py-1.5 rounded-full text-xs font-mono bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all"
              >
                Close (ESC)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
