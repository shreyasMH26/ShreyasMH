import { useState, useEffect, useRef } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import Button from './Button';
import {
  ArrowUpRight,
  Play,
  Pause,
  RotateCcw,
  Mic2,
  Music as MusicIcon,
  Volume2,
  VolumeX,
  SkipForward,
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
  previewUrl: string;
  accentGradient: string;
  lyrics: string[];
}

const FEATURED_TRACKS: TrackLyrics[] = [
  {
    id: 'softcore',
    title: 'Softcore',
    artist: 'The Neighbourhood',
    artworkUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/fc/d0/89/fcd0899c-2236-a726-9ce2-ebb110e2204d/886447414545.jpg/300x300bb.jpg',
    previewUrl:
      'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/1b/08/9e/1b089e17-1084-d825-d576-66d46ae1e243/mzaf_11823295334220528749.plus.aac.p.m4a',
    accentGradient: 'from-indigo-950/70 via-purple-950/80 to-black',
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
    artworkUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/5b/6a/74/5b6a74ec-907a-e932-3337-f10b9da849c3/190296925573.jpg/300x300bb.jpg',
    previewUrl:
      'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/16/ff/a5/16ffa5ed-5129-571f-6269-7bcd85f7ecd3/mzaf_14530911028028938935.plus.aac.p.m4a',
    accentGradient: 'from-blue-950/80 via-slate-900/90 to-black',
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
    artworkUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/bb/45/68/bb4568f3-68cd-619d-fbcb-4e179916545d/BlondCover-Final.jpg/300x300bb.jpg',
    previewUrl:
      'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ba/11/dc/ba11dccd-16d2-9cd8-13f0-85b73acc0a09/mzaf_1304250511099243436.plus.aac.p.m4a',
    accentGradient: 'from-pink-950/60 via-amber-950/50 to-black',
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
    artworkUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/41/cf/77/41cf7744-535f-3679-0ca6-c1b8d3f98c8f/196874557266.jpg/300x300bb.jpg',
    previewUrl:
      'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fd/df/23/fddf23b3-bc0c-2a6c-b811-e9784e2e8fc2/mzaf_16866686323648484948.plus.aac.p.m4a',
    accentGradient: 'from-emerald-950/70 via-teal-950/70 to-black',
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
    artworkUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/28/71/00/287100fb-5c31-0195-5343-e6b3625886d0/886443969834.jpg/300x300bb.jpg',
    previewUrl:
      'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/8c/37/20/8c372047-2727-8054-9411-0e4867643dd8/mzaf_10169659262182214119.plus.aac.p.m4a',
    accentGradient: 'from-zinc-900/90 via-neutral-900/90 to-black',
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
    artworkUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/18/9d/b8/189db80b-bfa8-89d1-1514-5fcb7e5cf8f4/00602557611526.rgb.jpg/300x300bb.jpg',
    previewUrl:
      'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3d/b7/73/3db773ac-bade-82c1-c570-4a699945d1f6/mzaf_13103071700695768982.plus.aac.p.m4a',
    accentGradient: 'from-orange-950/60 via-rose-950/60 to-black',
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
  {
    id: 'reflections',
    title: 'Reflections',
    artist: 'The Neighbourhood',
    artworkUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/fc/d0/89/fcd0899c-2236-a726-9ce2-ebb110e2204d/886447414545.jpg/300x300bb.jpg',
    previewUrl:
      'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a2/ef/23/a2ef23f1-c1c9-beea-405c-c7090446f869/mzaf_13397780695955177862.plus.aac.p.m4a',
    accentGradient: 'from-purple-950/70 via-indigo-950/70 to-black',
    lyrics: [
      "Where have you been?",
      "Do you know if you're coming back?",
      "We were too close to the stars",
      "I never known somebody like you",
      "Somebody falling for me and my reflection",
      "We'd be driving through the night, no headlights",
      "Listening to our heartbeat speed up",
      "You looked in my eyes and said don't look back",
      "We were running out of time, running out of breath",
      "Now I see you in the mirror every time I sleep",
    ],
  },
  {
    id: 'father-stretch',
    title: 'Father Stretch My Hands Pt. 1',
    artist: 'Kanye West',
    artworkUrl:
      'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ec/fd/e0/ecfde04e-6db2-e55e-41fe-83c87a52b16e/00602547908339.rgb.jpg/300x300bb.jpg',
    previewUrl:
      'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/5b/db/28/5bdb28cc-696e-53f0-85bd-fcdfd5be8707/mzaf_8631042407972316120.plus.aac.p.m4a',
    accentGradient: 'from-amber-950/70 via-red-950/60 to-black',
    lyrics: [
      "You're the only power, you're the only power that can",
      "You're the only power that can heal",
      "Beautiful morning, you're the sun in my morning, babe",
      "Nothing unwanted",
      "Now if I drop this code, and the deployment goes clean",
      "From writing models to building machines",
      "I was high when I met her, we was up till dawn",
      "Building products from zero, keeping momentum on",
      "I just wanna feel liberated, I, I, I",
      "Father stretch my hands, lead the way",
    ],
  },
];

export default function Soundtrack() {
  const [ref, isInView] = useInViewAnimation<HTMLDivElement>(0.1);
  const playlistUrl = 'https://music.apple.com/in/playlist/after-2-17/pl.u-vxy6974T8y18pDo';

  const [viewMode, setViewMode] = useState<'player' | 'lyrics'>('player');
  const [selectedTrackIdx, setSelectedTrackIdx] = useState(0);
  const [activeLineIdx, setActiveLineIdx] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(30);
  const [isMuted, setIsMuted] = useState(false);

  const activeTrack = FEATURED_TRACKS[selectedTrackIdx];
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lyricsContainerRef = useRef<HTMLDivElement>(null);

  // When activeTrack changes, reload audio and reset line
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = activeTrack.previewUrl;
      audioRef.current.load();
      if (viewMode === 'lyrics' && isPlayingAudio) {
        audioRef.current.play().catch(() => setIsPlayingAudio(false));
      }
    }
    setActiveLineIdx(0);
    setCurrentTime(0);
  }, [selectedTrackIdx]);

  // Audio play/pause state synchronization
  const togglePlayAudio = () => {
    if (!audioRef.current) return;
    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlayingAudio(true))
        .catch(() => setIsPlayingAudio(false));
    }
  };

  // Sync lyrics line with audio currentTime
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const cur = audioRef.current.currentTime;
    const dur = audioRef.current.duration || 30;
    setCurrentTime(cur);
    setDuration(dur);

    if (dur > 0 && activeTrack.lyrics.length > 0) {
      const progressRatio = cur / dur;
      const targetIdx = Math.min(
        Math.floor(progressRatio * activeTrack.lyrics.length),
        activeTrack.lyrics.length - 1
      );
      if (targetIdx !== activeLineIdx) {
        setActiveLineIdx(targetIdx);
      }
    }
  };

  const handleAudioEnded = () => {
    // Advance to next song or loop
    setSelectedTrackIdx((prev) => (prev + 1) % FEATURED_TRACKS.length);
  };

  // Auto-scroll active lyric into view
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

  // When switching modes, stop HTML5 audio if switching back to player iframe
  const handleModeChange = (mode: 'player' | 'lyrics') => {
    if (mode === 'player' && isPlayingAudio && audioRef.current) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else if (mode === 'lyrics' && !isPlayingAudio && audioRef.current) {
      // Auto-start audio when switching into lyrics mode for instant playback!
      audioRef.current
        .play()
        .then(() => setIsPlayingAudio(true))
        .catch(() => {});
    }
    setViewMode(mode);
  };

  // Seeking audio when user clicks a specific lyric line
  const handleLineClick = (idx: number) => {
    setActiveLineIdx(idx);
    if (audioRef.current && duration > 0) {
      const seekTime = (idx / activeTrack.lyrics.length) * duration;
      audioRef.current.currentTime = seekTime;
      if (!isPlayingAudio) {
        audioRef.current.play().then(() => setIsPlayingAudio(true));
      }
    }
  };

  return (
    <section
      ref={ref}
      id="soundtrack"
      className="w-full bg-white py-16 md:py-24 px-6 border-t border-black/[0.05]"
    >
      {/* Hidden HTML5 Audio Element for Real Streaming Playback */}
      <audio
        ref={audioRef}
        src={activeTrack.previewUrl}
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleAudioEnded}
        onPause={() => setIsPlayingAudio(false)}
        onPlay={() => setIsPlayingAudio(true)}
      />

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
              onClick={() => handleModeChange('player')}
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
              onClick={() => handleModeChange('lyrics')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                viewMode === 'lyrics'
                  ? 'bg-white text-[#051A24] shadow-sm'
                  : 'text-[#273C46] hover:text-[#051A24]'
              }`}
            >
              <Mic2 size={15} className={viewMode === 'lyrics' ? 'text-[#FA243C]' : ''} />
              <span>Live Lyrics & Audio</span>
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

              {/* Animated Sound Equalizer Bars (Reacts to audio state) */}
              <div className="flex items-end gap-1.5 h-6 mb-6">
                <span
                  className={`w-1 bg-[#FA243C] rounded-full ${
                    isPlayingAudio ? 'animate-[pulse_0.8s_ease-in-out_infinite]' : 'h-2'
                  } h-3`}
                />
                <span
                  className={`w-1 bg-[#051A24] rounded-full ${
                    isPlayingAudio ? 'animate-[pulse_0.6s_ease-in-out_infinite_0.2s]' : 'h-3'
                  } h-5`}
                />
                <span
                  className={`w-1 bg-[#FA243C] rounded-full ${
                    isPlayingAudio ? 'animate-[pulse_1s_ease-in-out_infinite_0.4s]' : 'h-4'
                  } h-6`}
                />
                <span
                  className={`w-1 bg-[#051A24] rounded-full ${
                    isPlayingAudio ? 'animate-[pulse_0.7s_ease-in-out_infinite_0.1s]' : 'h-2'
                  } h-4`}
                />
                <span
                  className={`w-1 bg-[#FA243C] rounded-full ${
                    isPlayingAudio ? 'animate-[pulse_0.9s_ease-in-out_infinite_0.3s]' : 'h-3'
                  } h-5`}
                />
                <span
                  className={`w-1 bg-[#051A24] rounded-full ${
                    isPlayingAudio ? 'animate-[pulse_1.1s_ease-in-out_infinite_0.5s]' : 'h-2'
                  } h-3`}
                />
                <span className="text-xs font-mono text-[#273C46] ml-2 self-center">
                  {isPlayingAudio ? 'Now Playing' : 'Late-Night Focus'}
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
                <span>Open in Apple Music</span>
                <ArrowUpRight size={16} />
              </Button>

              <button
                type="button"
                onClick={() => handleModeChange(viewMode === 'lyrics' ? 'player' : 'lyrics')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium bg-white text-[#051A24] border border-black/[0.08] shadow-sm hover:bg-zinc-100 transition-all"
              >
                <Mic2 size={15} className="text-[#FA243C]" />
                <span>{viewMode === 'lyrics' ? 'Show Full Player' : 'Live Lyrics & Audio'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Embedded Apple Music Player OR Live Synced Lyrics with Real Audio */}
          <div
            className={`lg:col-span-7 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.45s' }}
          >
            {/* View 1: Apple Music Embed Player (Preserved in DOM so playback isn't destroyed) */}
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

            {/* View 2: Live Synced Lyrics with Real Streaming Audio Player */}
            {viewMode === 'lyrics' && (
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 text-white relative min-h-[480px] flex flex-col">
                {/* Dynamic Ambient Blur Background matching song */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${activeTrack.accentGradient} opacity-90 transition-all duration-700 pointer-events-none`}
                />
                <div className="absolute inset-0 backdrop-blur-2xl pointer-events-none" />

                {/* Lyrics Header & Real Player Bar */}
                <div className="relative z-10 p-5 sm:p-6 border-b border-white/10 bg-black/40 backdrop-blur-md flex flex-col gap-4">
                  {/* Song Meta + Real Audio Playback Controls */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Album Art with pulse wave */}
                      <div className="relative flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden shadow-md border border-white/10">
                        <img
                          src={activeTrack.artworkUrl}
                          alt={activeTrack.title}
                          className="w-full h-full object-cover"
                        />
                        {isPlayingAudio && (
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <span className="w-2 h-2 rounded-full bg-[#FA243C] animate-ping" />
                          </div>
                        )}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono tracking-wider uppercase text-[#FA243C] font-semibold">
                            {isPlayingAudio ? 'Playing Stream' : 'Live Lyrics'}
                          </span>
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isPlayingAudio ? 'bg-[#FA243C] animate-pulse' : 'bg-white/40'
                            }`}
                          />
                        </div>
                        <h4 className="text-base sm:text-lg font-medium text-white tracking-tight truncate">
                          {activeTrack.title}
                        </h4>
                        <p className="text-xs text-white/50 truncate">{activeTrack.artist}</p>
                      </div>
                    </div>

                    {/* Audio Controls (Play/Pause, Skip, Volume, Reset) */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        type="button"
                        onClick={togglePlayAudio}
                        title={isPlayingAudio ? 'Pause Audio' : 'Play Audio'}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FA243C] hover:bg-[#ff3b50] text-white text-xs font-semibold shadow-lg shadow-[#FA243C]/30 transition-all hover:scale-105 active:scale-95"
                      >
                        {isPlayingAudio ? <Pause size={14} /> : <Play size={14} className="fill-white" />}
                        <span className="hidden sm:inline">{isPlayingAudio ? 'Pause' : 'Play Song'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setSelectedTrackIdx((prev) => (prev + 1) % FEATURED_TRACKS.length);
                        }}
                        title="Next Track"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                      >
                        <SkipForward size={14} />
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (audioRef.current) audioRef.current.currentTime = 0;
                          setActiveLineIdx(0);
                        }}
                        title="Restart Track"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                      >
                        <RotateCcw size={14} />
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (audioRef.current) {
                            audioRef.current.muted = !isMuted;
                            setIsMuted(!isMuted);
                          }
                        }}
                        title={isMuted ? 'Unmute' : 'Mute'}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors hidden sm:block"
                      >
                        {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                      </button>
                    </div>
                  </div>

                  {/* Audio Progress Scrubber */}
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-white/50 w-8">
                      {Math.floor(currentTime)}s
                    </span>
                    <div
                      className="flex-1 h-1.5 bg-white/15 rounded-full overflow-hidden cursor-pointer relative group"
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        const pct = clickX / rect.width;
                        if (audioRef.current && duration > 0) {
                          audioRef.current.currentTime = pct * duration;
                        }
                      }}
                    >
                      <div
                        className="h-full bg-gradient-to-r from-[#FA243C] to-red-400 rounded-full transition-all duration-150"
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-mono text-white/50 w-8 text-right">
                      {Math.floor(duration)}s
                    </span>
                  </div>

                  {/* Horizontal Scrollable Track Picker */}
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
                    {FEATURED_TRACKS.map((t, idx) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => {
                          setSelectedTrackIdx(idx);
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

                {/* Lyrics Scrolling Area (Synced to Audio) */}
                <div
                  ref={lyricsContainerRef}
                  className="relative z-10 flex-1 overflow-y-auto px-6 py-10 space-y-7 max-h-[310px] scroll-smooth"
                >
                  {activeTrack.lyrics.map((line, idx) => {
                    const isActive = idx === activeLineIdx;
                    return (
                      <p
                        key={idx}
                        id={`lyric-line-${idx}`}
                        onClick={() => handleLineClick(idx)}
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
                  <span>Click any verse to jump audio & lyrics</span>
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
