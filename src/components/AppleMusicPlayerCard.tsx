import { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, ArrowUpRight, Radio, Sparkles } from 'lucide-react';

function AppleMusicIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026C4.77.206 4.002.388 3.292.817 2.15 1.49 1.35 2.48 1.04 3.8a9.217 9.217 0 00-.24 2.19C.8 6.5.8 6.7.8 6.9v10.2c0 .2 0 .4.01.6.04.73.16 1.46.36 2.17.32 1.22.99 2.19 2.04 2.91.63.43 1.34.68 2.1.78.48.06.97.09 1.46.09h11.46c.49 0 .98-.03 1.46-.09a5.12 5.12 0 002.1-.78c1.05-.72 1.72-1.69 2.04-2.91.2-.71.32-1.44.36-2.17.01-.2.01-.4.01-.6V6.9c0-.2 0-.4-.01-.6zm-5.12 5.82l-5.63 3.25a1.5 1.5 0 01-2.25-1.3V8.12a1.5 1.5 0 012.25-1.3l5.63 3.25a1.5 1.5 0 010 2.6z"/>
    </svg>
  );
}

interface Track {
  title: string;
  artist: string;
  durationSec: number;
}

const PLAYLIST_TRACKS: Track[] = [
  { title: 'Softcore', artist: 'The Neighbourhood', durationSec: 206 },
  { title: 'SLOW DANCING IN THE DARK', artist: 'Joji', durationSec: 209 },
  { title: 'Pink + White', artist: 'Frank Ocean', durationSec: 184 },
  { title: 'Sweater Weather', artist: 'The Neighbourhood', durationSec: 240 },
  { title: 'Passionfruit', artist: 'Drake', durationSec: 298 },
  { title: 'Bad Habit', artist: 'Steve Lacy', durationSec: 232 },
];

export function AppleMusicPlayerCard({ playlistUrl }: { playlistUrl: string }) {
  const [mode, setMode] = useState<'bento' | 'embed'>('bento');
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [progressSec, setProgressSec] = useState(38);

  const currentTrack = PLAYLIST_TRACKS[trackIndex];
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);

  // Playback timer simulation
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgressSec((prev) => {
          if (prev >= currentTrack.durationSec) {
            setTrackIndex((i) => (i + 1) % PLAYLIST_TRACKS.length);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, currentTrack.durationSec]);

  // Ambient sound synthesizer on play (non-intrusive mellow chords)
  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isPlaying) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          const ctx = audioCtxRef.current || new AudioCtx();
          audioCtxRef.current = ctx;
          if (ctx.state === 'suspended') {
            ctx.resume();
          }
          // gentle harmonic tone
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(220, ctx.currentTime); // A3
          gain.gain.setValueAtTime(0.015, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 2.0);
          oscRef.current = osc;
        }
      } catch {
        // audio context optional fallback
      }
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTrackIndex((prev) => (prev + 1) % PLAYLIST_TRACKS.length);
    setProgressSec(0);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setTrackIndex((prev) => (prev === 0 ? PLAYLIST_TRACKS.length - 1 : prev - 1));
    setProgressSec(0);
  };

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    setProgressSec(Math.floor(ratio * currentTrack.durationSec));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progressPercent = Math.min(100, Math.max(0, (progressSec / currentTrack.durationSec) * 100));

  if (mode === 'embed') {
    return (
      <div
        className="
          col-span-2 min-h-[188px] xl:min-h-0
          xl:col-start-3 xl:col-span-2 xl:row-start-1 xl:aspect-auto xl:h-[188px]
          bg-[#131313] rounded-[24px] border border-white/[0.08]
          relative overflow-hidden group shadow-xl transition-all duration-300
        "
      >
        {/* Toggle back button */}
        <button
          onClick={() => setMode('bento')}
          className="
            absolute top-3 right-3 z-30
            flex items-center gap-1.5 px-3 py-1 rounded-full
            bg-black/75 hover:bg-black/95 backdrop-blur-md
            text-white/90 hover:text-white text-[11px] font-mono
            border border-white/15 transition-all shadow-md
          "
          title="Switch to Bento Player"
        >
          <Sparkles size={12} className="text-[#FC3C44]" />
          <span>Bento View</span>
        </button>

        {/* Official Apple Music Embed iframe */}
        <iframe
          src="https://embed.music.apple.com/in/playlist/after-2-17/pl.u-vxy6974T8y18pDo?theme=dark"
          title="after 2 : 17 — Apple Music Playlist"
          className="w-full h-full border-0 overflow-hidden bg-transparent"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        />
      </div>
    );
  }

  // Bento Native Player Mode (Default)
  return (
    <div
      className="
        col-span-2 min-h-[188px] xl:min-h-0
        xl:col-start-3 xl:col-span-2 xl:row-start-1 xl:aspect-auto xl:h-[188px]
        bg-[#131313] hover:bg-[#161616]
        rounded-[24px] border border-white/[0.06]
        p-4 sm:p-5 xl:p-5 flex items-center justify-between
        transition-all duration-200 group overflow-hidden relative select-none
      "
    >
      {/* Left & Center Content: Controls, Track Info, & Scrubber */}
      <div className="flex flex-col justify-between h-full flex-1 pr-3 sm:pr-4 z-10 min-w-0">
        {/* Top bar: Apple Music logo + "after 2 : 17" badge + Mode switch toggle */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <a
              href={playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#FC3C44] hover:opacity-85 transition-opacity"
              title="Open after 2 : 17 on Apple Music"
            >
              <AppleMusicIcon size={22} />
              <span className="text-[11px] font-semibold tracking-wide text-white/90 font-mono hidden sm:inline">
                Apple Music
              </span>
            </a>

            {/* Live Equalizer indicator when playing */}
            <div className="flex items-end gap-0.5 h-3.5 px-1.5 py-0.5 rounded bg-white/[0.04]">
              <span className={`w-[2.5px] bg-[#FC3C44] rounded-full ${isPlaying ? 'animate-[pulse_0.6s_ease-in-out_infinite] h-3' : 'h-1.5 opacity-40'}`} />
              <span className={`w-[2.5px] bg-white/90 rounded-full ${isPlaying ? 'animate-[pulse_0.9s_ease-in-out_infinite_0.15s] h-3.5' : 'h-2.5 opacity-40'}`} />
              <span className={`w-[2.5px] bg-[#FC3C44] rounded-full ${isPlaying ? 'animate-[pulse_0.7s_ease-in-out_infinite_0.3s] h-2.5' : 'h-1.5 opacity-40'}`} />
              <span className={`w-[2.5px] bg-white/80 rounded-full ${isPlaying ? 'animate-[pulse_0.8s_ease-in-out_infinite_0.45s] h-3' : 'h-2 opacity-40'}`} />
            </div>
          </div>

          {/* Toggle to Official Apple Music Embed */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setMode('embed');
            }}
            className="
              flex items-center gap-1 px-2.5 py-0.5 rounded-full
              bg-white/[0.05] hover:bg-white/[0.12]
              text-white/60 hover:text-white text-[10px] font-mono
              border border-white/[0.08] transition-all
            "
            title="Switch to Apple Music Embed Player"
          >
            <Radio size={10} className="text-[#FC3C44]" />
            <span>Embed</span>
          </button>
        </div>

        {/* Center: Track title, artist, and compact interactive controls */}
        <div className="my-auto py-1">
          <div className="flex items-baseline justify-between gap-2">
            <p className="text-[14px] sm:text-[15px] font-bold text-white tracking-tight truncate">
              {currentTrack.title}
            </p>
          </div>
          <p className="text-[11px] text-white/50 truncate mt-0.5">
            {currentTrack.artist}
          </p>

          {/* Player Controls Bar */}
          <div className="flex items-center gap-3 mt-2.5">
            {/* Prev Track */}
            <button
              type="button"
              onClick={handlePrev}
              className="text-white/50 hover:text-white transition-colors p-1"
              title="Previous Track"
            >
              <SkipBack size={15} />
            </button>

            {/* Play / Pause Toggle Button */}
            <button
              type="button"
              onClick={togglePlay}
              className="
                size-7 rounded-full bg-[#FC3C44] hover:bg-[#ff4e55] active:scale-95
                text-white flex items-center justify-center
                shadow-md shadow-red-950/30 transition-all
              "
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={13} fill="currentColor" /> : <Play size={13} fill="currentColor" className="ml-0.5" />}
            </button>

            {/* Next Track */}
            <button
              type="button"
              onClick={handleNext}
              className="text-white/50 hover:text-white transition-colors p-1"
              title="Next Track"
            >
              <SkipForward size={15} />
            </button>

            {/* Time Stamp */}
            <span className="text-[10px] font-mono text-white/40 ml-auto tabular-nums">
              {formatTime(progressSec)} / {formatTime(currentTrack.durationSec)}
            </span>
          </div>
        </div>

        {/* Bottom Scrubber & Destination Links */}
        <div className="space-y-1.5">
          {/* Interactive Progress Bar */}
          <div
            onClick={handleScrub}
            className="w-full h-1 bg-white/[0.1] hover:h-1.5 rounded-full overflow-hidden cursor-pointer transition-all relative group/scrub"
            title="Seek"
          >
            <div
              className="h-full bg-gradient-to-r from-[#FC3C44] to-[#ff666d] rounded-full transition-all duration-200"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px]">
            <a
              href={playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white font-medium flex items-center gap-1 transition-colors"
            >
              <span>after 2 : 17</span>
              <ArrowUpRight size={11} className="text-white/40" />
            </a>
            <a
              href={playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-white/35 hover:text-white/60 font-mono transition-colors"
            >
              music.apple.com
            </a>
          </div>
        </div>
      </div>

      {/* Right Side Photo Preview (Authentic from Reference Screenshot) */}
      <a
        href={playlistUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="
          size-[120px] sm:size-[136px] xl:size-[144px]
          rounded-2xl overflow-hidden shrink-0 shadow-md border border-white/10
          relative group/img cursor-pointer block
        "
        title="Open in Apple Music"
      >
        <img
          src="/photos/shreyas-night-water.png"
          alt="Shreyas Music"
          className="size-full object-cover group-hover/img:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/15 group-hover/img:bg-transparent transition-colors" />

        {/* Subtle playing overlay badge */}
        {isPlaying && (
          <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded-md bg-black/70 backdrop-blur-sm border border-white/20 flex items-center gap-1 text-[9px] font-mono text-white">
            <span className="size-1.5 rounded-full bg-[#FC3C44] animate-ping" />
            <span>PLAYING</span>
          </div>
        )}
      </a>
    </div>
  );
}
