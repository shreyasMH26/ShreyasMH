import { useState } from 'react';
import { ArrowUpRight, MapPin, FileText, Check, Shield, Sparkles, Terminal, Layers } from 'lucide-react';

/* ── Inline Brand Icons ── */
function GithubIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterXIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function AppleMusicIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm3.89 6.22l.01 5.38c0 1.63-1.2 2.8-2.73 2.8-1.55 0-2.67-1.12-2.67-2.65 0-1.55 1.21-2.7 2.76-2.7.46 0 .89.1 1.27.3V9.12l-4.54 1.05v5.33c0 1.63-1.2 2.8-2.73 2.8-1.55 0-2.67-1.12-2.67-2.65 0-1.55 1.21-2.7 2.76-2.7.46 0 .89.1 1.27.3v-6.7c0-.52.38-.96.9-1.05l5.22-1.22c.56-.13 1.12.28 1.12.86v.08z" />
    </svg>
  );
}

function SpotifyIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.305c-.215.353-.673.465-1.026.25-2.812-1.718-6.353-2.107-10.523-1.155-.403.092-.808-.16-.9-.563-.092-.403.16-.808.563-.9 4.568-1.044 8.484-.6 11.636 1.342.353.216.465.674.25 1.026zm1.464-3.257c-.27.44-.847.579-1.287.31-3.218-1.977-8.124-2.55-11.93-1.394-.495.15-1.024-.132-1.174-.627-.15-.494.132-1.023.627-1.173 4.356-1.322 9.776-.68 13.454 1.58.44.27.579.847.31 1.287zm.126-3.41C15.228 8.35 8.87 8.14 5.163 9.266c-.59.18-1.22-.16-1.4-.75-.18-.59.16-1.22.75-1.4 4.257-1.292 11.28-1.05 15.688 1.57.533.316.708 1.01.39 1.543-.316.533-1.01.708-1.543.39z"/>
    </svg>
  );
}

/* ── Realistic GitHub Contribution Heatmap ── */
function ContributionHeatmap() {
  // 6 columns x 7 rows of activity levels (0: none, 1: low, 2: medium, 3: high, 4: very high)
  const dots = [
    [0, 1, 0, 3, 4, 1, 0],
    [3, 0, 2, 4, 3, 2, 1],
    [1, 2, 4, 1, 0, 3, 4],
    [4, 3, 1, 0, 4, 2, 1],
    [2, 4, 3, 2, 1, 4, 3],
    [0, 2, 1, 4, 3, 2, 4],
    [1, 0, 3, 2, 4, 1, 0],
  ];

  const colors = [
    '#1c2128', // empty
    '#0e4429', // low
    '#006d32', // medium
    '#26a641', // high
    '#39d353', // very high
  ];

  return (
    <div className="grid grid-flow-col grid-rows-7 gap-[5px] w-fit">
      {dots.map((col, colIdx) =>
        col.map((val, rowIdx) => (
          <div
            key={`${colIdx}-${rowIdx}`}
            className="size-[11px] rounded-[2.5px] transition-colors duration-300"
            style={{ backgroundColor: colors[val] }}
          />
        ))
      )}
    </div>
  );
}

/* ── Davanagere Street Map Card Visual ── */
function MapVisual() {
  return (
    <div className="relative size-full overflow-hidden bg-[#e5e3df] select-none">
      {/* Map street background simulation */}
      <svg className="absolute inset-0 size-full opacity-80" viewBox="0 0 400 200" preserveAspectRatio="none">
        <rect width="400" height="200" fill="#f4f1ea" />
        {/* Secondary roads */}
        <path d="M-20,40 Q150,60 420,30" stroke="#ffffff" strokeWidth="12" fill="none" />
        <path d="M-20,160 Q200,140 420,170" stroke="#ffffff" strokeWidth="14" fill="none" />
        <path d="M80,-20 L110,220" stroke="#ffffff" strokeWidth="10" fill="none" />
        <path d="M280,-20 L260,220" stroke="#ffffff" strokeWidth="10" fill="none" />
        <path d="M190,-20 L210,220" stroke="#ffffff" strokeWidth="8" fill="none" />
        {/* Main Highway / Yellow route */}
        <path d="M-20,100 Q180,95 420,110" stroke="#fed576" strokeWidth="10" fill="none" />
        <path d="M220,-20 Q200,100 210,220" stroke="#fed576" strokeWidth="9" fill="none" />
        {/* City blocks / park */}
        <rect x="120" y="20" width="50" height="60" fill="#d9ebd3" rx="4" />
        <rect x="230" y="125" width="40" height="35" fill="#d9ebd3" rx="4" />
      </svg>

      {/* Blue Map Pin */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <span className="absolute size-8 rounded-full bg-blue-500/25 animate-ping" />
        <span className="relative size-4 rounded-full bg-blue-500 border-2 border-white shadow-md flex items-center justify-center" />
      </div>

      {/* Davanagere location pill badge (exact styling from reference) */}
      <div className="absolute bottom-3 left-3 bg-[#111111]/90 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-lg border border-white/10 flex items-center gap-1.5">
        <MapPin size={11} className="text-blue-400" />
        <span>Davanagere</span>
      </div>
    </div>
  );
}

/* ── Section Header (exact style from reference: lowercase, clean, no line) ── */
function SectionTitle({ title }: { title: string }) {
  return (
    <div className="col-span-2 xl:col-span-4 mt-8 mb-2">
      <h2 className="text-[15px] font-medium text-white/90 tracking-tight lowercase">
        {title}
      </h2>
    </div>
  );
}

/* ── Work Card Pill (exact style from screenshot 1 'work - obsessor') ── */
function WorkPill({
  title,
  href,
  icon,
}: {
  title: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        col-span-2 xl:col-span-2 h-[66px]
        bg-[#131313] hover:bg-[#181818] active:scale-[0.99]
        rounded-[20px] border border-white/[0.06]
        px-5 flex items-center justify-between
        transition-all duration-200 group cursor-pointer
      "
    >
      <div className="flex items-center gap-3.5 min-w-0 pr-2">
        <div className="size-9 rounded-full bg-white/[0.06] flex items-center justify-center text-white/70 shrink-0 group-hover:scale-105 transition-transform">
          {icon}
        </div>
        <span className="text-[13px] xl:text-[14px] font-medium text-white/90 truncate leading-snug">
          {title}
        </span>
      </div>
      <div className="size-8 rounded-full flex items-center justify-center text-white/30 group-hover:text-white/80 transition-colors shrink-0">
        <ArrowUpRight size={17} />
      </div>
    </a>
  );
}

/* ── Formatted Tweet Card (exact style from screenshot 2, 3 & 4) ── */
function TweetCard({
  authorName,
  authorHandle,
  authorAvatar,
  date,
  content,
  stats,
  href,
  verified = false,
  locked = false,
  colSpan = "col-span-2 xl:col-span-2",
}: {
  authorName: string;
  authorHandle: string;
  authorAvatar: string;
  date: string;
  content: string;
  stats?: { replies: string; retweets: string; likes: string; views?: string };
  href?: string;
  verified?: boolean;
  locked?: boolean;
  colSpan?: string;
}) {
  return (
    <a
      href={href || "https://x.com"}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        ${colSpan} bg-[#131313] hover:bg-[#171717]
        rounded-[24px] border border-white/[0.06]
        p-5 xl:p-6 flex flex-col justify-between
        transition-all duration-200 group cursor-pointer
      `}
    >
      <div>
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <img
              src={authorAvatar}
              alt={authorName}
              className="size-9 rounded-full object-cover bg-neutral-800"
            />
            <div>
              <div className="flex items-center gap-1 leading-none">
                <span className="text-[13px] font-bold text-white">{authorName}</span>
                {verified && (
                  <svg className="size-3.5 text-sky-400 fill-current" viewBox="0 0 24 24">
                    <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6c-1.58 0-2.95.875-3.6 2.148-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.575 9.55.7 10.92.7 12.5c0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238C8.65 22.525 10.02 23.4 11.6 23.4c1.58 0 2.95-.875 3.6-2.148.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6zM10.2 16.2l-3.2-3.2 1.4-1.4 1.8 1.8 5.4-5.4 1.4 1.4-6.8 6.8z"/>
                  </svg>
                )}
                {locked && <span className="text-[11px] text-white/50">🔒</span>}
              </div>
              <p className="text-[11px] text-white/40 mt-1">{authorHandle} · {date}</p>
            </div>
          </div>
          <TwitterXIcon size={14} className="text-white/30 group-hover:text-white/70 transition-colors" />
        </div>

        {/* Tweet content */}
        <p className="text-[13px] xl:text-[14px] text-white/90 leading-relaxed whitespace-pre-line font-normal">
          {content}
        </p>
      </div>

      {/* Stats bar */}
      {stats && (
        <div className="flex items-center gap-5 mt-4 pt-3 border-t border-white/[0.04] text-[11px] text-white/35 font-mono">
          <span>💬 {stats.replies}</span>
          <span>🔁 {stats.retweets}</span>
          <span>❤️ {stats.likes}</span>
          {stats.views && <span>👁️ {stats.views}</span>}
        </div>
      )}
    </a>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN 100% FAITHFUL BENTO PORTFOLIO (AVELY.ME/ARYANKARMA CLONE)
═══════════════════════════════════════════════════════════════════ */
export default function BentoPage({ onSwitchToDeveloper }: { onSwitchToDeveloper?: () => void }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const playlistUrl = "https://music.apple.com/in/playlist/after-2-17/pl.u-vxy6974T8y18pDo";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("adolfhitlerr26@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white antialiased selection:bg-white/20 selection:text-white font-sans">
      <div className="relative w-full max-w-[1400px] mx-auto">

        {/* ─── Two-Column Desktop / One-Column Mobile ──────────── */}
        <div className="flex flex-col xl:flex-row xl:items-start">

          {/* ══ LEFT SIDEBAR (Exact Replica of Screenshots 1–4) ════ */}
          <aside
            className="
              flex flex-col items-center xl:items-start
              xl:sticky xl:top-0 xl:h-screen xl:justify-between
              xl:w-[360px] xl:flex-none xl:shrink-0
              px-6 pt-12 pb-8
              xl:px-12 xl:pt-16 xl:pb-16
            "
          >
            <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
              {/* Circular B&W Profile Avatar */}
              <div
                className="
                  size-[136px] xl:size-[170px] rounded-full overflow-hidden
                  bg-[#161616] border border-white/10
                  shadow-[0_4px_24px_rgba(0,0,0,0.8)] shrink-0 select-none
                  flex items-center justify-center
                "
              >
                <span className="text-white/90 font-bold text-4xl xl:text-5xl tracking-tighter">
                  SM
                </span>
              </div>

              {/* Name (bold, period at the end) */}
              <h1 className="mt-8 text-[32px] xl:text-[40px] font-bold tracking-tight text-white leading-none">
                Shreyas MH.
              </h1>

              {/* Punchy Bio (Two paragraphs, matching Aryan's exact cadence) */}
              <div className="mt-6 space-y-4 text-[14px] xl:text-[15px] text-white/55 leading-relaxed max-w-[280px] xl:max-w-none">
                <p>
                  I don't need gravity, I just need growth.
                </p>
                <p>
                  Missionary, not mercenary.
                </p>
              </div>

              {/* Sub-identity pills */}
              <div className="mt-6 flex flex-wrap gap-2 justify-center xl:justify-start">
                <span className="text-[11px] font-medium text-white/40 bg-white/[0.04] border border-white/[0.06] px-3 py-1 rounded-full">
                  Co-Founder &amp; COO @ XTICH
                </span>
                <span className="text-[11px] font-medium text-white/40 bg-white/[0.04] border border-white/[0.06] px-3 py-1 rounded-full">
                  CSE @ JIT Davanagere
                </span>
              </div>
            </div>

            {/* Bottom-left Floating Pill Badge (Exact Avely style) */}
            <div className="hidden xl:block mt-12">
              <div className="inline-flex items-center gap-2.5 bg-[#141414] hover:bg-[#1a1a1a] text-white/80 text-[12px] font-medium px-4 py-2 rounded-full border border-white/[0.08] shadow-sm transition-colors">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Shreyas MH · Founder &amp; Builder</span>
              </div>
            </div>
          </aside>

          {/* ══ RIGHT: BENTO GRID (Screenshots 1–4 100% Replication) ══ */}
          <main className="flex-1 min-w-0 p-5 pt-2 xl:pt-16 xl:pr-14 xl:pl-6 xl:pb-24">
            <div className="grid grid-cols-2 gap-[16px] xl:grid-cols-4 xl:gap-[18px]">

              {/* ════════════════════════════════════════════════════
                  SECTION 1: TOP PROFILE / SOCIAL BENTO (Screenshot 1)
                 ════════════════════════════════════════════════════ */}

              {/* ── GITHUB CARD (Tall 1 col × 2 rows on desktop) ── */}
              <a
                href="https://github.com/shreyasMH26"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  col-span-2 aspect-[2/1]
                  xl:col-start-1 xl:col-span-1 xl:row-start-1 xl:row-span-2 xl:aspect-auto
                  bg-[#131313] hover:bg-[#161616]
                  rounded-[24px] border border-white/[0.06]
                  p-6 xl:p-7 flex flex-col justify-between
                  transition-all duration-200 cursor-pointer group
                "
              >
                <div>
                  <GithubIcon size={34} className="text-white" />
                  <div className="mt-3">
                    <p className="text-[15px] font-bold text-white leading-tight">GitHub</p>
                    <p className="text-[12px] text-white/45 mt-0.5">@shreyasMH26</p>
                  </div>
                  <div className="mt-3">
                    <span className="inline-block bg-[#0070f3] hover:bg-[#0060df] text-white text-[11px] font-semibold px-4 py-1.5 rounded-full transition-colors shadow-sm">
                      Follow 28
                    </span>
                  </div>
                </div>

                {/* Real GitHub commit activity heat map visual */}
                <div className="pt-5 mt-auto border-t border-white/[0.05]">
                  <ContributionHeatmap />
                </div>
              </a>

              {/* ── LINKEDIN CARD (1 col × 1 row, col 2 row 1) ── */}
              <a
                href="https://linkedin.com/in/shreyasmh"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  col-span-1 aspect-square
                  xl:col-start-2 xl:col-span-1 xl:row-start-1 xl:aspect-auto xl:h-[188px]
                  bg-[#131313] hover:bg-[#161616]
                  rounded-[24px] border border-white/[0.06]
                  p-5 xl:p-6 flex flex-col justify-between
                  transition-all duration-200 cursor-pointer group
                "
              >
                <div className="size-8 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white">
                  <LinkedinIcon size={18} />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-white leading-tight">LinkedIn</p>
                  <p className="text-[11px] text-white/45 mt-0.5">@shreyasmh</p>
                  <div className="mt-2.5">
                    <span className="inline-block bg-[#0A66C2] hover:bg-[#095196] text-white text-[11px] font-semibold px-4 py-1 rounded-full transition-colors">
                      Connect
                    </span>
                  </div>
                </div>
              </a>

              {/* ── X / TWITTER CARD (1 col × 1 row, col 2 row 2) ── */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  col-span-1 aspect-square
                  xl:col-start-2 xl:col-span-1 xl:row-start-2 xl:aspect-auto xl:h-[188px]
                  bg-[#131313] hover:bg-[#161616]
                  rounded-[24px] border border-white/[0.06]
                  p-5 xl:p-6 flex flex-col justify-between
                  transition-all duration-200 cursor-pointer group
                "
              >
                <div className="size-8 rounded-lg bg-black flex items-center justify-center text-white">
                  <TwitterXIcon size={17} />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-white leading-tight">X / Twitter</p>
                  <p className="text-[11px] text-white/45 mt-0.5">@shreyasMH26</p>
                  <div className="mt-2.5">
                    <span className="inline-block bg-white text-black hover:bg-neutral-200 text-[11px] font-bold px-4 py-1 rounded-full transition-colors">
                      Follow
                    </span>
                  </div>
                </div>
              </a>

              {/* ── APPLE MUSIC PLAYLIST CARD (2 cols × 1 row, col 3-4 row 1) ── */}
              <a
                href={playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  col-span-2 aspect-[2/1]
                  xl:col-start-3 xl:col-span-2 xl:row-start-1 xl:aspect-auto xl:h-[188px]
                  bg-[#131313] hover:bg-[#161616]
                  rounded-[24px] border border-white/[0.06]
                  p-5 xl:p-6 flex items-center justify-between
                  transition-all duration-200 cursor-pointer group overflow-hidden relative
                "
              >
                {/* Left side text */}
                <div className="flex flex-col justify-between h-full pr-4 z-10">
                  <div className="flex items-center gap-2 text-[#FA243C]">
                    <AppleMusicIcon size={26} />
                  </div>
                  <div>
                    <p className="text-[18px] xl:text-[20px] font-bold text-white tracking-tight leading-tight">
                      AFTER 2:17
                    </p>
                    <p className="text-[12px] text-white/40 mt-1">music.apple.com</p>
                  </div>
                </div>

                {/* Right side cover image with rounded corners (matches Aryan's card) */}
                <div className="size-[140px] xl:size-[148px] rounded-2xl overflow-hidden shrink-0 shadow-md border border-white/10 relative">
                  <img
                    src="https://is1-ssl.mzstatic.com/image/thumb/rt.352479040/1200x630wp-60.jpg"
                    alt="AFTER 2:17 cover"
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </a>

              {/* ── LOCATION MAP CARD (2 cols × 1 row, col 3-4 row 2) ── */}
              <div
                className="
                  col-span-2 aspect-[2/1]
                  xl:col-start-3 xl:col-span-2 xl:row-start-2 xl:aspect-auto xl:h-[188px]
                  rounded-[24px] border border-white/[0.06]
                  overflow-hidden relative shadow-inner
                "
              >
                <MapVisual />
              </div>

              {/* ════════════════════════════════════════════════════
                  SECTION 2: work - obsessor (Screenshot 1)
                 ════════════════════════════════════════════════════ */}
              <SectionTitle title="work - obsessor" />

              <WorkPill
                title="XTICH — Student-Focused Contemporary Apparel"
                href="https://xtich.in"
                icon={<Layers size={18} />}
              />

              <WorkPill
                title="EchoVerse — AI Knowledge & Memory Operating System"
                href="https://github.com/shreyasMH26"
                icon={<Terminal size={18} />}
              />

              <WorkPill
                title="MH AI Steering Wheel — Personal macOS AI Layer"
                href="https://github.com/shreyasMH26"
                icon={<Sparkles size={18} />}
              />

              <WorkPill
                title="SecureVault — Local-First Encrypted Vault"
                href="https://shreyasmh26.github.io/SecureVault/"
                icon={<Shield size={18} />}
              />

              <WorkPill
                title="Curriculum Vitae — Download Official Resume (PDF)"
                href="/resume.pdf"
                icon={<FileText size={18} />}
              />

              {/* ════════════════════════════════════════════════════
                  SECTION 3: if (by some chance) I end up in heaven (Screenshot 2)
                 ════════════════════════════════════════════════════ */}
              <SectionTitle title="if (by some chance) I end up in heaven" />

              <a
                href={playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  col-span-2 xl:col-span-2 h-[154px]
                  bg-[#131313] hover:bg-[#171717]
                  rounded-[24px] border border-white/[0.06]
                  p-5 xl:p-6 flex items-center justify-between
                  transition-all duration-200 cursor-pointer group overflow-hidden
                "
              >
                <div className="flex flex-col justify-between h-full pr-4">
                  <div className="flex items-center gap-1.5 text-white/80">
                    <AppleMusicIcon size={24} className="text-[#FA243C]" />
                  </div>
                  <div>
                    <p className="text-[16px] xl:text-[17px] font-bold text-white tracking-tight">
                      That golden era 👀
                    </p>
                    <p className="text-[12px] text-white/40 mt-0.5">music.apple.com</p>
                  </div>
                </div>
                <div className="size-[114px] rounded-2xl overflow-hidden shrink-0 border border-white/10">
                  <img
                    src="https://is1-ssl.mzstatic.com/image/thumb/rt.352479040/1200x630wp-60.jpg"
                    alt="Golden era cover"
                    className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </a>

              {/* Spotify Playlist Twin Card (Like Aryan's second heaven card) */}
              <a
                href={playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  col-span-2 xl:col-span-2 h-[154px]
                  bg-[#131313] hover:bg-[#171717]
                  rounded-[24px] border border-white/[0.06]
                  p-5 xl:p-6 flex items-center justify-between
                  transition-all duration-200 cursor-pointer group overflow-hidden
                "
              >
                <div className="flex flex-col justify-between h-full pr-4">
                  <div className="flex items-center gap-1.5 text-[#1DB954]">
                    <SpotifyIcon size={24} />
                  </div>
                  <div>
                    <p className="text-[16px] xl:text-[17px] font-bold text-white tracking-tight">
                      AFTER 2:17 — Night Drive
                    </p>
                    <p className="text-[12px] text-white/40 mt-0.5">open.spotify.com</p>
                  </div>
                </div>
                <div className="size-[114px] rounded-2xl overflow-hidden shrink-0 border border-white/10 bg-gradient-to-tr from-indigo-950 to-neutral-900 flex items-center justify-center">
                  <span className="text-3xl">🌙</span>
                </div>
              </a>

              {/* ════════════════════════════════════════════════════
                  SECTION 4: if i end up in hell (Screenshot 2)
                 ════════════════════════════════════════════════════ */}
              <SectionTitle title="if i end up in hell" />

              <a
                href={playlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  col-span-2 xl:col-span-2 h-[154px]
                  bg-[#131313] hover:bg-[#171717]
                  rounded-[24px] border border-white/[0.06]
                  p-5 xl:p-6 flex items-center justify-between
                  transition-all duration-200 cursor-pointer group overflow-hidden
                "
              >
                <div className="flex flex-col justify-between h-full pr-4">
                  <div className="flex items-center gap-1.5 text-white/80">
                    <AppleMusicIcon size={24} className="text-[#FA243C]" />
                  </div>
                  <div>
                    <p className="text-[16px] xl:text-[17px] font-bold text-white tracking-tight">
                      your wine, sir.
                    </p>
                    <p className="text-[12px] text-white/40 mt-0.5">music.apple.com</p>
                  </div>
                </div>
                {/* 4-cover album collage grid (exact replication from screenshot 2!) */}
                <div className="size-[114px] rounded-2xl overflow-hidden shrink-0 border border-white/10 grid grid-cols-2 grid-rows-2">
                  <div className="bg-[#180a0a] flex items-center justify-center text-[10px] font-bold text-red-400">STARBOY</div>
                  <div className="bg-[#0f1118] flex items-center justify-center text-[10px] font-bold text-indigo-400">CHASE</div>
                  <div className="bg-[#141414] flex items-center justify-center text-[10px] font-bold text-amber-400">BAD BOY</div>
                  <div className="bg-[#1c0c16] flex items-center justify-center text-[10px] font-bold text-rose-400">2:17</div>
                </div>
              </a>

              {/* ════════════════════════════════════════════════════
                  SECTION 5: main character research (Screenshot 2 & 3)
                 ════════════════════════════════════════════════════ */}
              <SectionTitle title="main character research" />

              {/* Books by Shreyas MH card (Exact Peerlist style from screenshot 2) */}
              <a
                href="https://peerlist.io"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  col-span-2 xl:col-span-2 h-[154px]
                  bg-[#131313] hover:bg-[#171717]
                  rounded-[24px] border border-white/[0.06]
                  p-5 xl:p-6 flex items-center justify-between
                  transition-all duration-200 cursor-pointer group overflow-hidden
                "
              >
                <div className="flex flex-col justify-between h-full pr-4">
                  <div className="size-7 rounded-lg bg-[#22c55e] flex items-center justify-center font-bold text-black text-sm">
                    P
                  </div>
                  <div>
                    <p className="text-[16px] xl:text-[17px] font-bold text-white tracking-tight">
                      Books by Shreyas MH
                    </p>
                    <p className="text-[12px] text-white/40 mt-0.5">peerlist.io</p>
                  </div>
                </div>
                <div className="w-[124px] h-[114px] bg-white rounded-2xl flex flex-col items-center justify-center text-black p-3 shrink-0 shadow-md">
                  <span className="text-2xl">📖</span>
                  <span className="font-serif font-bold text-[13px] mt-1">Books</span>
                  <span className="text-[8px] text-neutral-500">collection by Shreyas</span>
                </div>
              </a>

              {/* Featured Tweet (Screenshot 2: "the masculine urge...") */}
              <TweetCard
                authorName="lichthauch"
                authorHandle="@lichthauch"
                authorAvatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                date="11h"
                content="The masculine urge to become so still that God mistakes you for a mountain and tells you his secrets"
                stats={{ replies: "28", retweets: "203", likes: "1.8K", views: "37K" }}
                verified={true}
              />

              {/* ── Song Tiles & Hero Lyrics Card (Screenshot 3) ── */}

              {/* Song Tile 1: Skyfall (Pitch Black #000000) */}
              <a
                href="https://music.apple.com/in/playlist/after-2-17/pl.u-vxy6974T8y18pDo"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  col-span-1 h-[154px]
                  bg-[#000000] hover:bg-[#080808]
                  rounded-[24px] border border-white/[0.08]
                  p-5 flex flex-col justify-between
                  transition-all duration-200 cursor-pointer group
                "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[15px] font-bold text-white">Skyfall</span>
                  <div className="size-6 rounded-full bg-white/10 flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                    <ArrowUpRight size={13} />
                  </div>
                </div>
                <span className="text-[11px] text-white/30 font-mono">track // 007</span>
              </a>

              {/* Song Tile 2: Heaven Or Las Vegas (Deep Crimson #8C0808) */}
              <a
                href="https://music.apple.com/in/playlist/after-2-17/pl.u-vxy6974T8y18pDo"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  col-span-1 h-[154px]
                  bg-[#8C0808] hover:bg-[#9d0c0c]
                  rounded-[24px] border border-white/[0.12]
                  p-5 flex flex-col justify-between
                  transition-all duration-200 cursor-pointer group shadow-lg shadow-red-950/20
                "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[15px] font-bold text-white leading-tight">
                    Heaven Or Las<br />Vegas
                  </span>
                  <div className="size-6 rounded-full bg-white/20 flex items-center justify-center text-white/80 group-hover:text-white transition-colors shrink-0">
                    <ArrowUpRight size={13} />
                  </div>
                </div>
                <span className="text-[11px] text-white/60 font-mono">track // cocteau</span>
              </a>

              {/* Large Lyrics Hero Card (Screenshot 3: "I stand on the stage, I give 'em the rage") */}
              <div
                className="
                  col-span-2 xl:col-span-2 xl:row-span-2
                  bg-[#3d2f2f] hover:bg-[#453636]
                  rounded-[24px] border border-white/[0.08]
                  p-7 xl:p-8 flex flex-col justify-between
                  transition-all duration-200 group relative
                "
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="size-7 rounded-lg bg-black/40 flex items-center justify-center">
                        <AppleMusicIcon size={16} className="text-[#FA243C]" />
                      </div>
                      <div>
                        <p className="text-[12px] font-bold text-white uppercase tracking-wider">AFTER 2:17</p>
                        <p className="text-[10px] text-white/50">Song · Frank Ocean / Travis</p>
                      </div>
                    </div>
                    <ArrowUpRight size={16} className="text-white/40 group-hover:text-white transition-colors" />
                  </div>

                  {/* Huge Punchy Quote */}
                  <h3 className="mt-8 text-[28px] xl:text-[34px] font-black tracking-tight text-white leading-[1.15]">
                    I stand on the stage, I give 'em the rage
                  </h3>
                </div>

                <div className="mt-6 flex items-center gap-2 text-white/40 text-xs font-semibold">
                  <AppleMusicIcon size={15} />
                  <span>Apple Music</span>
                </div>
              </div>

              {/* Media Photo Tile (Screenshot 3: Earbuds on mousepad with red ambient light) */}
              <div
                className="
                  col-span-2 xl:col-span-2 h-[154px]
                  rounded-[24px] overflow-hidden border border-white/[0.08]
                  relative group bg-[#0e0e12]
                "
              >
                {/* Sleek tech desk simulation */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80")',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 text-[11px] text-white/60 font-mono">
                  setup // late night desk
                </div>
              </div>

              {/* Tweet Card: Elon Musk (Screenshot 3) */}
              <TweetCard
                authorName="Elon Musk"
                authorHandle="@elonmusk"
                authorAvatar="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&auto=format&fit=crop&q=80"
                date="Nov 11, 2024"
                content="You will not find a better friend than me, nor a worse enemy"
                stats={{ replies: "990", retweets: "1.7K", likes: "17K", views: "843.9K" }}
                verified={true}
              />

              {/* Tweet Card: Shreyas MH (Screenshot 3: "nobody could ever tear down...") */}
              <TweetCard
                authorName="Shreyas MH"
                authorHandle="@shreyasMH26"
                authorAvatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"
                date="Oct 8, 2025"
                content={`nobody could ever tear down your internals, build them.\n\nno hollow soul can say they can rebuild it.\n\nanything that can be seen can be destroyed, privacy is power.\n\nonly war breeds peace.`}
                stats={{ replies: "1", retweets: "0", likes: "87" }}
                locked={true}
              />

              {/* Tweet Card: Shreyas MH (Screenshot 4: "my desire to win...") */}
              <TweetCard
                authorName="Shreyas MH"
                authorHandle="@shreyasMH26"
                authorAvatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"
                date="2026"
                content="my desire to win is much more than my embarrassment of failing."
                locked={true}
              />

              {/* Personal Portfolio Website Card (Screenshot 4: aryankarma.com / shreyasmh.in card) */}
              <a
                href="https://shreyasmh.in"
                className="
                  col-span-2 xl:col-span-2 h-[154px]
                  bg-[#131313] hover:bg-[#171717]
                  rounded-[24px] border border-white/[0.06]
                  p-5 xl:p-6 flex items-center justify-between
                  transition-all duration-200 cursor-pointer group overflow-hidden
                "
              >
                <div className="flex flex-col justify-between h-full pr-4">
                  <div className="size-8 rounded-full bg-neutral-800 flex items-center justify-center text-white/90 text-xs font-bold">
                    SM
                  </div>
                  <div>
                    <p className="text-[16px] xl:text-[17px] font-bold text-white tracking-tight">
                      Shreyas MH.
                    </p>
                    <p className="text-[12px] text-white/40 mt-0.5">shreyasmh.in</p>
                  </div>
                </div>
                {/* Mini Website Preview Mockup */}
                <div className="w-[140px] h-[114px] bg-white text-black rounded-2xl p-3 flex flex-col justify-between shrink-0 shadow-lg border border-neutral-200 group-hover:scale-105 transition-transform">
                  <div>
                    <p className="text-[11px] font-black text-black">Hi, I'm Shreyas.</p>
                    <p className="text-[8px] text-neutral-600 mt-1 leading-tight line-clamp-3">
                      Computer Science Engineer building AI agents, software products, and real-world ventures.
                    </p>
                  </div>
                  <span className="text-[7px] font-mono text-neutral-400">shreyasmh.in</span>
                </div>
              </a>

              {/* ════════════════════════════════════════════════════
                  SECTION 6: BOTTOM CENTERED QUOTE & FOOTER (Screenshot 4)
                 ════════════════════════════════════════════════════ */}
              <div className="col-span-2 xl:col-span-4 mt-16 mb-8 text-center">
                <p className="text-[15px] xl:text-[17px] font-medium text-white/75 tracking-tight">
                  demons imitate every virtue, except one.
                </p>

                {/* Email quick copy */}
                <div className="mt-5 flex items-center justify-center">
                  <button
                    onClick={handleCopyEmail}
                    className="text-[12px] text-white/40 hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedEmail ? <Check size={12} className="text-emerald-400" /> : null}
                    <span>{copiedEmail ? "Email copied!" : "adolfhitlerr26@gmail.com"}</span>
                  </button>
                </div>

                {/* Footer Links (Exact from screenshot 4) */}
                <div className="mt-10 flex items-center justify-center gap-6 text-[12px] text-white/30">
                  <span className="hover:text-white/60 transition-colors cursor-pointer">Terms</span>
                  <span className="hover:text-white/60 transition-colors cursor-pointer">Privacy Policy</span>
                  <span className="hover:text-white/60 transition-colors cursor-pointer">Cookie Policy</span>
                  {onSwitchToDeveloper && (
                    <button
                      onClick={onSwitchToDeveloper}
                      className="hover:text-white transition-colors cursor-pointer underline underline-offset-4 text-blue-400"
                    >
                      Developer Portfolio View ↗
                    </button>
                  )}
                </div>

                <p className="text-[11px] text-white/20 mt-4">
                  © {new Date().getFullYear()} Shreyas MH · All rights reserved.
                </p>
              </div>

            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
