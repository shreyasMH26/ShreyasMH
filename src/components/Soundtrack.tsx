import { useState, useEffect, useRef } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import Button from './Button';
import { ArrowUpRight, Play, Pause, RotateCcw, Mic2, Music as MusicIcon } from 'lucide-react';

function AppleLogo({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.05-.03.07-.42 1.44-1.38 2.82M15.97 6.37c.62-.75 1.04-1.8 1.01-2.87-.96.04-2.13.65-2.82 1.45-.61.7-.95 1.77-.92 2.82 1.08.08 2.11-.65 2.73-1.4z" />
    </svg>
  );
}

interface TrackLyrics {
  id: string;
  title: string;
  artist: string;
  accentGradient: string;
  lyrics: string[];
}

const FEATURED_TRACKS: TrackLyrics[] = [
  {
    id: 'softcore',
    title: 'Softcore',
    artist: 'The Neighbourhood',
    accentGradient: 'from-indigo-900/60 via-purple-950/70 to-black',
    lyrics: [
      "Are you feeling nervous? Are you having fun?",
      "It's almost over, it's just begun",
      "Don't you dare look down, walk the wire",
      "Lighting matches in the pouring rain, fueling fire",
      "I've been in the dark too long to stop",
      "I've been playing it safe, but now I'm letting go",
      "Sharing beds with people I don't know",
      "Conversations with someone I don't care about",
      "I don't wanna cry, some days I do",
      "I don't wanna die, some days I do",
      "Too much on my mind, too much to lose",
      "I'm just holding on to what I knew",
      "If you're wondering what's been bothering me",
      "I'm too soft for all this reality",
    ],
  },
  {
    id: 'slow-dancing',
    title: 'SLOW DANCING IN THE DARK',
    artist: 'Joji',
    accentGradient: 'from-blue-950/70 via-slate-900/80 to-black',
    lyrics: [
      "I don't want a friend, I want my life in two",
      "Waiting to get there, waiting for you",
      "When I'm around slow dancing in the dark",
      "Don't follow me, you'll end up in my arms",
      "You done made your mind up? Did you make your mind up?",
      "Give me reasons we should be complete",
      "You should be with him, I can't compete",
      "You looked at me like I was someone else, oh well",
      "Can't you see? Fuck everyone he wants you to be",
      "Can't you see? I don't wanna slow dance",
      "In the dark, in the dark",
      "When you gotta run, just hear my voice in the quiet",
    ],
  },
  {
    id: 'pink-white',
    title: 'Pink + White',
    artist: 'Frank Ocean',
    accentGradient: 'from-pink-950/50 via-amber-950/40 to-black',
    lyrics: [
      "That's the way everyday goes",
      "Every time we have no control",
      "If the sky is pink and white",
      "If the ground is black and yellow",
      "It's the same way you showed me",
      "Nod my head, don't close my eyes",
      "Halfway on a forward roll",
      "It's all descending on the floor",
      "In the dark, in the dark",
      "Gimme glory, day and night",
      "You showed me love, glory from above",
      "Remembering everything you taught me in the stillness",
    ],
  },
  {
    id: 'bad-habit',
    title: 'Bad Habit',
    artist: 'Steve Lacy',
    accentGradient: 'from-emerald-950/60 via-teal-950/60 to-black',
    lyrics: [
      "I wish I knew you wanted me",
      "I wish I knew, I wish I knew you wanted me",
      "What you, ooh, what you do?",
      "Made a move that was a mistake",
      "I thought I had you in my hand",
      "Biting my tongue, waiting in the corner",
      "I wish I knew you wanted me",
      "Can I bite your tongue like you bite mine?",
      "It's you and me against the world tonight",
      "I wish I knew you wanted me",
      "Now you're playing games, but I still want you here",
    ],
  },
  {
    id: 'sweater-weather',
    title: 'Sweater Weather',
    artist: 'The Neighbourhood',
    accentGradient: 'from-zinc-900/80 via-neutral-900/80 to-black',
    lyrics: [
      "All I am is a man",
      "I want the world in my hands",
      "I hate the beach, but I stand in California with my toes in the sand",
      "Use the sleeves of my sweater, let's have an adventure",
      "Head in the clouds but my gravity's centered",
      "Touch my neck and I'll touch yours",
      "You in those little high waisted shorts, oh",
      "'Cause it's too cold for you here and now",
      "So let me hold both your hands in the holes of my sweater",
    ],
  },
  {
    id: 'passionfruit',
    title: 'Passionfruit',
    artist: 'Drake',
    accentGradient: 'from-orange-950/50 via-rose-950/50 to-black',
    lyrics: [
      "Hold on, talk to me",
      "See if you can focus on me",
      "Listen, I need you to be real with me",
      "Leaving you is the hardest thing that I could do",
      "Passionate from miles away",
      "Passive with the things you say",
      "Passin' up on my old ways",
      "I can't blame you, no, of course",
      "Callin' out your name at night",
      "Hopin' that you're by my side",
      "Listening to the city sounds while the code runs",
    ],
  },
];

export default function Soundtrack() {
  const [ref, isInView] = useInViewAnimation<HTMLDivElement>(0.1);
  const playlistUrl = 'https://music.apple.com/in/playlist/after-2-17/pl.u-vxy6974T8y18pDo';

  const [viewMode, setViewMode] = useState<'player' | 'lyrics'>('player');
  const [selectedTrackIdx, setSelectedTrackIdx] = useState(0);
  const [activeLineIdx, setActiveLineIdx] = useState(0);
  const [isPlayingLyrics, setIsPlayingLyrics] = useState(true);

  const activeTrack = FEATURED_TRACKS[selectedTrackIdx];
  const lyricsContainerRef = useRef<HTMLDivElement>(null);

  // Auto-advance lyrics karaoke style
  useEffect(() => {
    if (viewMode !== 'lyrics' || !isPlayingLyrics) return;

    const interval = setInterval(() => {
      setActiveLineIdx((prev) => (prev + 1) % activeTrack.lyrics.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [viewMode, isPlayingLyrics, activeTrack]);

  // Auto-scroll the active lyric line into view smoothly
  useEffect(() => {
    if (viewMode !== 'lyrics') return;
    const activeEl = document.getElementById(`lyric-line-${activeLineIdx}`);
    if (activeEl && lyricsContainerRef.current) {
      activeEl.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [activeLineIdx, viewMode]);

  return (
    <section
      ref={ref}
      id="soundtrack"
      className="w-full bg-white py-16 md:py-24 px-6 border-t border-black/[0.05]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
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
              Curated Apple Music playlist powering late-night coding sessions, building XTICH, deep work, and designing new products.
            </p>
          </div>

          {/* Mode Switcher: Player vs Live Lyrics */}
          <div
            className={`flex items-center p-1.5 rounded-full bg-zinc-100 border border-black/[0.06] shadow-sm self-start md:self-auto ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.35s' }}
          >
            <button
              type="button"
              onClick={() => setViewMode('player')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                viewMode === 'player'
                  ? 'bg-white text-[#051A24] shadow-sm'
                  : 'text-[#273C46] hover:text-[#051A24]'
              }`}
            >
              <MusicIcon size={15} className={viewMode === 'player' ? 'text-[#FA243C]' : ''} />
              <span>Player</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('lyrics')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                viewMode === 'lyrics'
                  ? 'bg-white text-[#051A24] shadow-sm'
                  : 'text-[#273C46] hover:text-[#051A24]'
              }`}
            >
              <Mic2 size={15} className={viewMode === 'lyrics' ? 'text-[#FA243C]' : ''} />
              <span>Live Lyrics</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FA243C] animate-pulse" />
            </button>
          </div>
        </div>

        {/* Content Grid: Curated Info Card + Player / Lyrics View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Playlist Card & Curation Details */}
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
                Curated by Shreyas MH · 31 Tracks
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
              <p className="text-sm sm:text-base text-[#273C46] leading-relaxed mb-4">
                A selection of atmospheric melodies, ambient beats, indie rhythms, and nocturnal focus tracks. Featuring The Neighbourhood, Joji, Frank Ocean, Steve Lacy, Drake, and Kanye West.
              </p>

              {/* Featured Tracks Pill Preview */}
              <div className="space-y-1.5 text-xs font-mono text-[#273C46]">
                <div className="flex items-center justify-between py-1 border-b border-black/[0.04]">
                  <span>01. Softcore</span>
                  <span className="text-black/40">The Neighbourhood</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-black/[0.04]">
                  <span>02. SLOW DANCING IN THE DARK</span>
                  <span className="text-black/40">Joji</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-black/[0.04]">
                  <span>03. Pink + White</span>
                  <span className="text-black/40">Frank Ocean</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                href={playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#051A24] hover:bg-[#0D212C] text-white py-3 px-6 shadow-md"
              >
                <AppleLogo size={16} />
                <span>Open in Apple Music</span>
                <ArrowUpRight size={16} />
              </Button>

              <button
                type="button"
                onClick={() => {
                  setViewMode(viewMode === 'lyrics' ? 'player' : 'lyrics');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium bg-white text-[#051A24] border border-black/[0.08] shadow-sm hover:bg-zinc-100 transition-all"
              >
                <Mic2 size={15} className="text-[#FA243C]" />
                <span>{viewMode === 'lyrics' ? 'Show Player' : 'View Lyrics'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: View (Apple Music Player OR Interactive Live Lyrics) */}
          <div
            className={`lg:col-span-7 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.45s' }}
          >
            {viewMode === 'player' ? (
              /* Option 1: Official Apple Music Embed Player */
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
            ) : (
              /* Option 2: Apple Music Style Kinetic Synced Lyrics Viewer */
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 text-white relative min-h-[450px] flex flex-col">
                {/* Dynamic Ambient Blur Background based on active song */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${activeTrack.accentGradient} opacity-90 transition-all duration-700 pointer-events-none`}
                />
                <div className="absolute inset-0 backdrop-blur-2xl pointer-events-none" />

                {/* Lyrics Header & Song Selector */}
                <div className="relative z-10 p-5 sm:p-6 border-b border-white/10 bg-black/30 backdrop-blur-md flex flex-col gap-4">
                  {/* Song Title & Controls */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono tracking-wider uppercase text-[#FA243C] font-semibold">
                          Now Reading Lyrics
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FA243C] animate-pulse" />
                      </div>
                      <h4 className="text-lg sm:text-xl font-medium text-white tracking-tight">
                        {activeTrack.title}
                      </h4>
                      <p className="text-xs text-white/50">{activeTrack.artist}</p>
                    </div>

                    {/* Controls: Play/Pause Auto-Scroll + Reset */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsPlayingLyrics(!isPlayingLyrics)}
                        title={isPlayingLyrics ? 'Pause Karaoke' : 'Play Karaoke'}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs text-white transition-colors"
                      >
                        {isPlayingLyrics ? <Pause size={13} /> : <Play size={13} />}
                        <span>{isPlayingLyrics ? 'Pause' : 'Play'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveLineIdx(0)}
                        title="Restart Lyrics"
                        className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors"
                      >
                        <RotateCcw size={13} />
                      </button>
                    </div>
                  </div>

                  {/* Horizontal Scrollable Song Selector */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
                    {FEATURED_TRACKS.map((t, idx) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => {
                          setSelectedTrackIdx(idx);
                          setActiveLineIdx(0);
                        }}
                        className={`whitespace-nowrap px-3 py-1.5 rounded-full transition-all flex-shrink-0 ${
                          idx === selectedTrackIdx
                            ? 'bg-white text-[#051A24] font-semibold shadow'
                            : 'bg-white/10 hover:bg-white/15 text-white/70'
                        }`}
                      >
                        {t.title}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Lyrics Scrolling Area (Apple Music Style Blurred & Animated) */}
                <div
                  ref={lyricsContainerRef}
                  className="relative z-10 flex-1 overflow-y-auto px-6 py-10 space-y-7 max-h-[340px] scroll-smooth"
                >
                  {activeTrack.lyrics.map((line, idx) => {
                    const isActive = idx === activeLineIdx;
                    return (
                      <p
                        key={idx}
                        id={`lyric-line-${idx}`}
                        onClick={() => setActiveLineIdx(idx)}
                        className={`cursor-pointer text-left transition-all duration-300 select-none ${
                          isActive
                            ? 'text-white text-xl sm:text-2xl md:text-[26px] font-bold tracking-tight scale-[1.02] drop-shadow-[0_4px_16px_rgba(255,255,255,0.35)] opacity-100'
                            : 'text-white/35 hover:text-white/75 text-lg sm:text-xl font-medium opacity-60'
                        }`}
                      >
                        {line}
                      </p>
                    );
                  })}
                  <div className="h-16" />
                </div>

                {/* Footer hint */}
                <div className="relative z-10 px-6 py-3 border-t border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-between text-xs text-white/50">
                  <span>Click any verse to jump</span>
                  <a
                    href={playlistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline flex items-center gap-1"
                  >
                    <span>Full 31 tracks on Apple Music</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
