import { useState, useEffect, useRef } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import Button from './Button';
import {
  ArrowUpRight,
  Mic2,
  Music as MusicIcon,
  Play,
  Pause,
  RotateCcw,
} from 'lucide-react';

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
  artworkUrl: string;
  appleMusicUrl: string;
  accentGradient: string;
  sections: {
    label: string;
    lines: string[];
  }[];
}

const FEATURED_TRACKS: TrackLyrics[] = [
  {
    id: 'softcore',
    title: 'Softcore',
    artist: 'The Neighbourhood',
    artworkUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/fc/d0/89/fcd0899c-2236-a726-9ce2-ebb110e2204d/886447414545.jpg/300x300bb.jpg',
    appleMusicUrl: 'https://music.apple.com/in/album/softcore/1440871440?i=1440871450',
    accentGradient: 'from-indigo-950/80 via-purple-950/80 to-black',
    sections: [
      {
        label: 'Verse 1',
        lines: [
          'Are you feeling nervous? Are you having fun?',
          "It's almost over, it's just begun",
          "Don't you dare look down, walk the wire",
          'Lighting matches in the pouring rain, fueling fire',
        ],
      },
      {
        label: 'Pre-Chorus',
        lines: [
          "I've been in the dark too long to stop",
          "I've been playing it safe, but now I'm letting go",
          "Sharing beds with people I don't know",
          "Conversations with someone I don't care about",
        ],
      },
      {
        label: 'Chorus',
        lines: [
          "I don't wanna cry, some days I do",
          "I don't wanna die, some days I do",
          'Too much on my mind, too much to lose',
          "I'm just holding on to what I knew",
        ],
      },
      {
        label: 'Outro',
        lines: [
          "If you're wondering what's been bothering me",
          "I'm too soft for all this reality",
        ],
      },
    ],
  },
  {
    id: 'slow-dancing',
    title: 'SLOW DANCING IN THE DARK',
    artist: 'Joji',
    artworkUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5b/6a/74/5b6a74ec-907a-e932-3337-f10b9da849c3/190296925573.jpg/300x300bb.jpg',
    appleMusicUrl: 'https://music.apple.com/in/album/slow-dancing-in-the-dark/1435276686?i=1435276689',
    accentGradient: 'from-blue-950/90 via-slate-900/90 to-black',
    sections: [
      {
        label: 'Verse 1',
        lines: [
          "I don't want a friend, I want my life in two",
          'Waiting to get there, waiting for you',
          "When I'm around slow dancing in the dark",
          "Don't follow me, you'll end up in my arms",
        ],
      },
      {
        label: 'Chorus',
        lines: [
          'You done made your mind up? Did you make your mind up?',
          'Give me reasons we should be complete',
          "You should be with him, I can't compete",
          'You looked at me like I was someone else, oh well',
        ],
      },
      {
        label: 'Outro',
        lines: [
          "Can't you see? I don't wanna slow dance",
          'In the dark, in the dark',
        ],
      },
    ],
  },
  {
    id: 'pink-white',
    title: 'Pink + White',
    artist: 'Frank Ocean',
    artworkUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bb/45/68/bb4568f3-68cd-619d-fbcb-4e179916545d/BlondCover-Final.jpg/300x300bb.jpg',
    appleMusicUrl: 'https://music.apple.com/in/album/pink-white/1146195596?i=1146195603',
    accentGradient: 'from-pink-950/70 via-amber-950/60 to-black',
    sections: [
      {
        label: 'Chorus',
        lines: [
          "That's the way everyday goes",
          'Every time we have no control',
          'If the sky is pink and white',
          'If the ground is black and yellow',
          "It's the same way you showed me",
        ],
      },
      {
        label: 'Verse 1',
        lines: [
          "Nod my head, don't close my eyes",
          'Halfway on a forward roll',
          "It's all descending on the floor",
          'In the dark, in the dark',
        ],
      },
      {
        label: 'Outro',
        lines: [
          'Gimme glory, day and night',
          'You showed me love, glory from above',
        ],
      },
    ],
  },
  {
    id: 'bad-habit',
    title: 'Bad Habit',
    artist: 'Steve Lacy',
    artworkUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/41/cf/77/41cf7744-535f-3679-0ca6-c1b8d3f98c8f/196874557266.jpg/300x300bb.jpg',
    appleMusicUrl: 'https://music.apple.com/in/album/bad-habit/1631904092?i=1631904104',
    accentGradient: 'from-emerald-950/80 via-teal-950/80 to-black',
    sections: [
      {
        label: 'Chorus',
        lines: [
          'I wish I knew you wanted me',
          'I wish I knew, I wish I knew you wanted me',
          'What you, ooh, what you do?',
          'Made a move that was a mistake',
        ],
      },
      {
        label: 'Verse 1',
        lines: [
          'I thought I had you in my hand',
          'Biting my tongue, waiting in the corner',
          'I wish I knew you wanted me',
          'Can I bite your tongue like you bite mine?',
        ],
      },
      {
        label: 'Outro',
        lines: [
          "It's you and me against the world tonight",
          'I wish I knew you wanted me',
        ],
      },
    ],
  },
  {
    id: 'sweater-weather',
    title: 'Sweater Weather',
    artist: 'The Neighbourhood',
    artworkUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/28/71/00/287100fb-5c31-0195-5343-e6b3625886d0/886443969834.jpg/300x300bb.jpg',
    appleMusicUrl: 'https://music.apple.com/in/album/sweater-weather/635016635?i=635016731',
    accentGradient: 'from-zinc-900/90 via-neutral-900/90 to-black',
    sections: [
      {
        label: 'Verse 1',
        lines: [
          'All I am is a man',
          'I want the world in my hands',
          'I hate the beach, but I stand in California with my toes in the sand',
          "Use the sleeves of my sweater, let's have an adventure",
        ],
      },
      {
        label: 'Chorus',
        lines: [
          'Head in the clouds but my gravity centered',
          'Touch my neck and I will touch yours',
          'You in those little high waisted shorts, oh',
          "'Cause it's too cold for you here and now",
          'So let me hold both your hands in the holes of my sweater',
        ],
      },
    ],
  },
  {
    id: 'passionfruit',
    title: 'Passionfruit',
    artist: 'Drake',
    artworkUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/18/9d/b8/189db80b-bfa8-89d1-1514-5fcb7e5cf8f4/00602557611526.rgb.jpg/300x300bb.jpg',
    appleMusicUrl: 'https://music.apple.com/in/album/passionfruit/1440890708?i=1440890713',
    accentGradient: 'from-orange-950/70 via-rose-950/70 to-black',
    sections: [
      {
        label: 'Chorus',
        lines: [
          'Hold on, talk to me',
          'See if you can focus on me',
          'Listen, I need you to be real with me',
          'Leaving you is the hardest thing that I could do',
        ],
      },
      {
        label: 'Verse 1',
        lines: [
          'Passionate from miles away',
          'Passive with the things you say',
          "Passin' up on my old ways",
          "I can't blame you, no, of course",
          "Callin' out your name at night",
          "Hopin' that you're by my side",
        ],
      },
    ],
  },
  {
    id: 'reflections',
    title: 'Reflections',
    artist: 'The Neighbourhood',
    artworkUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/fc/d0/89/fcd0899c-2236-a726-9ce2-ebb110e2204d/886447414545.jpg/300x300bb.jpg',
    appleMusicUrl: 'https://music.apple.com/in/album/reflections/1440871440?i=1440871457',
    accentGradient: 'from-purple-950/80 via-indigo-950/80 to-black',
    sections: [
      {
        label: 'Verse 1',
        lines: [
          'Where have you been? Do you know if you are coming back?',
          'We were too close to the stars',
          'I never known somebody like you',
          'Somebody falling for me and my reflection',
        ],
      },
      {
        label: 'Chorus',
        lines: [
          "We'd be driving through the night, no headlights",
          'Listening to our heartbeat speed up',
          "You looked in my eyes and said don't look back",
          'We were running out of time, running out of breath',
        ],
      },
    ],
  },
  {
    id: 'father-stretch',
    title: 'Father Stretch My Hands Pt. 1',
    artist: 'Kanye West',
    artworkUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ec/fd/e0/ecfde04e-6db2-e55e-41fe-83c87a52b16e/00602547908339.rgb.jpg/300x300bb.jpg',
    appleMusicUrl: 'https://music.apple.com/in/album/father-stretch-my-hands-pt-1/1440841363?i=1440841372',
    accentGradient: 'from-amber-950/80 via-red-950/70 to-black',
    sections: [
      {
        label: 'Intro',
        lines: [
          "You're the only power, you're the only power that can",
          "You're the only power that can heal",
        ],
      },
      {
        label: 'Chorus',
        lines: [
          "Beautiful morning, you're the sun in my morning, babe",
          'Nothing unwanted',
          'Now if I drop this code, and the deployment goes clean',
          'From writing models to building machines',
          'I just wanna feel liberated, I, I, I',
          'Father stretch my hands, lead the way',
        ],
      },
    ],
  },
];

export default function Soundtrack() {
  const [ref, isInView] = useInViewAnimation<HTMLDivElement>(0.1);
  const playlistUrl = 'https://music.apple.com/in/playlist/after-2-17/pl.u-vxy6974T8y18pDo';

  const [viewMode, setViewMode] = useState<'player' | 'lyrics'>('player');
  const [selectedTrackIdx, setSelectedTrackIdx] = useState(0);
  const [selectedLineKey, setSelectedLineKey] = useState<string | null>(null);
  const [isAutoScroll, setIsAutoScroll] = useState(false);

  const activeTrack = FEATURED_TRACKS[selectedTrackIdx];
  const lyricsContainerRef = useRef<HTMLDivElement>(null);

  // Flatten lines for smooth reading auto-scroll
  const allLines: { key: string; text: string }[] = [];
  activeTrack.sections.forEach((sec, sIdx) => {
    sec.lines.forEach((line, lIdx) => {
      allLines.push({ key: `${sIdx}-${lIdx}`, text: line });
    });
  });

  // Smooth Reading Auto-Scroll effect (gentle pacing)
  useEffect(() => {
    if (viewMode !== 'lyrics' || !isAutoScroll) return;

    const interval = setInterval(() => {
      setSelectedLineKey((prev) => {
        const curIdx = allLines.findIndex((l) => l.key === prev);
        const nextIdx = (curIdx + 1) % allLines.length;
        const nextKey = allLines[nextIdx].key;

        const nextEl = document.getElementById(`lyric-${nextKey}`);
        if (nextEl) {
          nextEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return nextKey;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [viewMode, isAutoScroll, allLines]);

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

          {/* Mode Switcher: Player vs Lyrics View */}
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
              <span>Apple Music Player</span>
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
              <span>Song Lyrics</span>
            </button>
          </div>
        </div>

        {/* Content Grid: Curated Info Card + Player / Lyrics View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Playlist Card & Curation Details */}
          <div
            className={`lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-zinc-50 border border-black/[0.06] flex flex-col justify-between h-full space-y-6 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.35s' }}
          >
            <div>
              {/* Apple Music Playlist Cover Artwork */}
              <div className="relative aspect-square w-full max-w-[260px] sm:max-w-[300px] mx-auto mb-6 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-black/10 group bg-zinc-900">
                <img
                  src="/after-217-cover.jpg"
                  alt="after 2 : 17 — Apple Music Playlist Cover by Shreyas MH"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />

                {/* Apple Music Badge Floating Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-mono shadow-md">
                  <AppleLogo size={13} className="text-[#FA243C]" />
                  <span>Apple Music</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FA243C] animate-pulse" />
                </div>

                {/* Playlist Title & Curator Overlay at Bottom of Cover */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white pointer-events-none">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-white/70 mb-0.5">
                    Official Playlist
                  </p>
                  <p className="text-xl sm:text-2xl font-serif font-semibold tracking-tight text-white drop-shadow-md">
                    after 2 : 17
                  </p>
                </div>
              </div>

              {/* Title & Curator */}
              <div className="flex items-baseline justify-between gap-2 mb-1">
                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#0D212C] tracking-tight">
                  after 2 : 17
                </h3>
                <span className="text-xs font-mono text-[#FA243C] font-semibold">31 Tracks</span>
              </div>
              <p className="text-sm font-mono text-[#273C46] mb-5">
                Curated by Shreyas MH
              </p>

              {/* Sound Equalizer Indicator */}
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

              {/* Featured Tracks Preview */}
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
                <span>Listen on Apple Music</span>
                <ArrowUpRight size={16} />
              </Button>

              <button
                type="button"
                onClick={() => setViewMode(viewMode === 'lyrics' ? 'player' : 'lyrics')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium bg-white text-[#051A24] border border-black/[0.08] shadow-sm hover:bg-zinc-100 transition-all"
              >
                <Mic2 size={15} className="text-[#FA243C]" />
                <span>{viewMode === 'lyrics' ? 'Open Player' : 'View Lyrics'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Apple Music Player (Always Active) + Lyrics Viewer */}
          <div
            className={`lg:col-span-7 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.45s' }}
          >
            {/* 1. Official Apple Music Player (KEPT CONTINUOUSLY MOUNTED IN DOM) */}
            <div
              style={{ display: viewMode === 'player' ? 'block' : 'none' }}
              className="rounded-3xl overflow-hidden border border-black/[0.08] shadow-lg bg-zinc-950"
            >
              <iframe
                src="https://embed.music.apple.com/in/playlist/after-2-17/pl.u-vxy6974T8y18pDo"
                title="after 2 : 17 — Apple Music Playlist by Shreyas MH"
                height="450"
                className="w-full border-0 overflow-hidden bg-transparent"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              />
            </div>

            {/* 2. Apple Music Style Lyrics Viewer */}
            <div
              style={{ display: viewMode === 'lyrics' ? 'flex' : 'none' }}
              className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 text-white relative min-h-[450px] flex-col"
            >
              {/* Dynamic Ambient Blur Background matching song */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${activeTrack.accentGradient} opacity-90 transition-all duration-700 pointer-events-none`}
              />
              <div className="absolute inset-0 backdrop-blur-2xl pointer-events-none" />

              {/* Lyrics Header & Track Selector */}
              <div className="relative z-10 p-5 sm:p-6 border-b border-white/10 bg-black/40 backdrop-blur-md flex flex-col gap-4">
                <div className="flex items-center justify-between gap-3">
                  {/* Song Meta with Minimal Musical Badge */}
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 overflow-hidden shrink-0 shadow-sm">
                      <img src="/after-217-cover.jpg" alt="after 2 : 17 playlist" className="w-full h-full object-cover select-none" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-mono tracking-wider uppercase text-[#FA243C] font-semibold">
                          Lyrics
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FA243C] animate-pulse" />
                      </div>
                      <h4 className="text-base sm:text-lg font-medium text-white tracking-tight truncate">
                        {activeTrack.title}
                      </h4>
                      <p className="text-xs text-white/50 truncate">{activeTrack.artist}</p>
                    </div>
                  </div>

                  {/* Reading Controls: Auto-Scroll Toggle & Open in Apple Music */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => setIsAutoScroll(!isAutoScroll)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                        isAutoScroll
                          ? 'bg-white text-[#051A24] border-white shadow'
                          : 'bg-white/10 text-white border-white/15 hover:bg-white/20'
                      }`}
                      title={isAutoScroll ? 'Pause auto-scroll' : 'Start reading auto-scroll'}
                    >
                      {isAutoScroll ? <Pause size={12} /> : <Play size={12} />}
                      <span>Auto-scroll</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedLineKey(null);
                        if (lyricsContainerRef.current) {
                          lyricsContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }}
                      className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                      title="Scroll to top"
                    >
                      <RotateCcw size={13} />
                    </button>
                  </div>
                </div>

                {/* Horizontal Song Selector Bar */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
                  {FEATURED_TRACKS.map((t, idx) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => {
                        setSelectedTrackIdx(idx);
                        setSelectedLineKey(null);
                        if (lyricsContainerRef.current) {
                          lyricsContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                        }
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

              {/* Lyrics Scrollable Area */}
              <div
                ref={lyricsContainerRef}
                className="relative z-10 flex-1 overflow-y-auto px-6 sm:px-8 py-8 space-y-8 max-h-[310px] scroll-smooth"
              >
                {activeTrack.sections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#FA243C] font-semibold block">
                      {section.label}
                    </span>
                    <div className="space-y-3">
                      {section.lines.map((line, lIdx) => {
                        const lineKey = `${sIdx}-${lIdx}`;
                        const isSelected = selectedLineKey === lineKey;
                        return (
                          <p
                            key={lineKey}
                            id={`lyric-${lineKey}`}
                            onClick={() => setSelectedLineKey(lineKey)}
                            className={`cursor-pointer text-left transition-all duration-300 leading-relaxed select-none ${
                              isSelected
                                ? 'text-white text-xl sm:text-2xl font-bold tracking-tight scale-[1.01] drop-shadow-[0_4px_16px_rgba(255,255,255,0.4)] opacity-100'
                                : 'text-white/40 hover:text-white/80 text-lg sm:text-xl font-medium opacity-65'
                            }`}
                          >
                            {line}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                ))}
                <div className="h-12" />
              </div>

              {/* Bottom Quick-Bar with Play Link */}
              <div className="relative z-10 px-6 py-3 border-t border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-between text-xs text-white/50">
                <button
                  type="button"
                  onClick={() => setViewMode('player')}
                  className="text-white/80 hover:text-white hover:underline flex items-center gap-1 font-medium"
                >
                  <MusicIcon size={12} className="text-[#FA243C]" />
                  <span>Switch to Apple Music Player to listen</span>
                </button>

                <a
                  href={activeTrack.appleMusicUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Play {activeTrack.title} in Apple Music</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
