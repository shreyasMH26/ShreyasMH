import { ArrowUpRight, MapPin, Layers } from 'lucide-react';

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
      <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026C4.77.206 4.002.388 3.292.817 2.15 1.49 1.35 2.48 1.04 3.8a9.217 9.217 0 00-.24 2.19C.8 6.5.8 6.7.8 6.9v10.2c0 .2 0 .4.01.6.04.73.16 1.46.36 2.17.32 1.22.99 2.19 2.04 2.91.63.43 1.34.68 2.1.78.48.06.97.09 1.46.09h11.46c.49 0 .98-.03 1.46-.09a5.12 5.12 0 002.1-.78c1.05-.72 1.72-1.69 2.04-2.91.2-.71.32-1.44.36-2.17.01-.2.01-.4.01-.6V6.9c0-.2 0-.4-.01-.6zm-5.12 5.82l-5.63 3.25a1.5 1.5 0 01-2.25-1.3V8.12a1.5 1.5 0 012.25-1.3l5.63 3.25a1.5 1.5 0 010 2.6z"/>
    </svg>
  );
}

/* ── Realistic GitHub Contribution Heatmap ── */
function ContributionHeatmap() {
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
    '#1c2128',
    '#0e4429',
    '#006d32',
    '#26a641',
    '#39d353',
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

/* ── Map Card Visual ── */
function MapVisual() {
  return (
    <div className="relative size-full overflow-hidden bg-[#e5e3df] select-none">
      <svg className="absolute inset-0 size-full opacity-80" viewBox="0 0 400 200" preserveAspectRatio="none">
        <rect width="400" height="200" fill="#f4f1ea" />
        <path d="M-20,40 Q150,60 420,30" stroke="#ffffff" strokeWidth="12" fill="none" />
        <path d="M-20,160 Q200,140 420,170" stroke="#ffffff" strokeWidth="14" fill="none" />
        <path d="M80,-20 L110,220" stroke="#ffffff" strokeWidth="10" fill="none" />
        <path d="M280,-20 L260,220" stroke="#ffffff" strokeWidth="10" fill="none" />
        <path d="M190,-20 L210,220" stroke="#ffffff" strokeWidth="8" fill="none" />
        <path d="M-20,100 Q180,95 420,110" stroke="#fed576" strokeWidth="10" fill="none" />
        <path d="M220,-20 Q200,100 210,220" stroke="#fed576" strokeWidth="9" fill="none" />
        <rect x="120" y="20" width="50" height="60" fill="#d9ebd3" rx="4" />
        <rect x="230" y="125" width="40" height="35" fill="#d9ebd3" rx="4" />
      </svg>

      {/* Blue Map Marker Pin */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <span className="absolute size-8 rounded-full bg-blue-500/25 animate-ping" />
        <span className="relative size-4 rounded-full bg-blue-500 border-2 border-white shadow-md flex items-center justify-center" />
      </div>

      {/* Location Badge */}
      <div className="absolute bottom-3 left-3 bg-[#111111]/90 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-lg border border-white/10 flex items-center gap-1.5">
        <MapPin size={11} className="text-blue-400" />
        <span>Davangere</span>
      </div>
    </div>
  );
}

/* ── Section Title (exact lowercase style from screenshots 1, 2 & 3) ── */
function SectionTitle({ title, id }: { title: string; id?: string }) {
  return (
    <div id={id} className="col-span-2 xl:col-span-4 mt-8 mb-2 scroll-mt-8">
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

/* ── Formatted Tweet Card (exact style from screenshots 2 & 3) ── */
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
  stats?: { replies?: string; retweets?: string; likes?: string; views?: string };
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
          {stats.replies && <span>💬 {stats.replies}</span>}
          {stats.retweets && <span>🔁 {stats.retweets}</span>}
          {stats.likes && <span>❤️ {stats.likes}</span>}
          {stats.views && <span>👁️ {stats.views}</span>}
        </div>
      )}
    </a>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN 100% REPLICATION BENTO PAGE
═══════════════════════════════════════════════════════════════════ */
export default function BentoPage() {
  const whatsappUrl = "https://wa.me/917483794998?text=Hey%20Shreyas%2C%20I%20found%20your%20portfolio!";
  const playlistUrl = "https://music.apple.com/in/playlist/after-2-17/pl.u-vxy6974T8y18pDo";

  return (
    <div className="min-h-screen bg-[#000000] text-white antialiased selection:bg-white/20 selection:text-white font-sans">
      <div className="relative w-full max-w-[1400px] mx-auto">

        {/* Two-Column Desktop / One-Column Mobile */}
        <div className="flex flex-col xl:flex-row xl:items-start">

          {/* ══ LEFT SIDEBAR (Screenshot 1, 2, 3) ════ */}
          <aside
            id="hero"
            className="
              flex flex-col items-center xl:items-start
              xl:sticky xl:top-0 xl:h-screen xl:justify-between
              xl:w-[360px] xl:flex-none xl:shrink-0
              px-6 pt-12 pb-8
              xl:px-12 xl:pt-16 xl:pb-16
            "
          >
            <div id="about" className="flex flex-col items-center xl:items-start text-center xl:text-left scroll-mt-10">
              {/* Circular Avatar Photo */}
              <div
                className="
                  size-[136px] xl:size-[170px] rounded-full overflow-hidden
                  bg-[#161616] border border-white/10
                  shadow-[0_4px_24px_rgba(0,0,0,0.8)] shrink-0 select-none
                "
              >
                <img
                  src="/photos/shreyas-editorial-bw.jpg"
                  alt="Shreyas MH"
                  className="size-full object-cover"
                />
              </div>

              {/* Name */}
              <h1 className="mt-8 text-[32px] xl:text-[40px] font-bold tracking-tight text-white leading-none">
                Shreyas MH.
              </h1>

              {/* Punchy Bio (Exact cadence from screenshots) */}
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
                  CSE Undergrad
                </span>
              </div>
            </div>

            {/* Bottom-left Button: WhatsApp Contact */}
            <div className="mt-10 xl:mt-12">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#141414] hover:bg-[#1a1a1a] text-white/90 text-[13px] font-medium px-5 py-2.5 rounded-full border border-white/10 shadow-lg transition-all active:scale-[0.98]"
              >
                <span className="size-4 rounded-full bg-[#25D366] flex items-center justify-center text-[10px] font-bold text-black">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </aside>

          {/* ══ RIGHT: BENTO GRID ══ */}
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
                  xl:col-start-1 xl:col-span-1 xl:row-start-1 xl:row-span-2 xl:aspect-auto xl:h-[450px]
                  bg-[#131313] hover:bg-[#161616]
                  rounded-[24px] border border-white/[0.06]
                  p-6 xl:p-7 flex flex-col justify-between
                  transition-all duration-200 cursor-pointer group
                "
              >
                <div>
                  <GithubIcon size={32} className="text-white" />
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

                {/* Contribution matrix */}
                <div className="pt-5 mt-auto border-t border-white/[0.05]">
                  <ContributionHeatmap />
                </div>
              </a>

              {/* ── LINKEDIN CARD (1 col × 1 row) ── */}
              <a
                href="https://www.linkedin.com/in/shreyasmh/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  col-span-1 aspect-square
                  xl:col-start-2 xl:col-span-1 xl:row-start-1 xl:aspect-auto xl:h-[216px]
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

              {/* ── X / TWITTER CARD (1 col × 1 row) ── */}
              <a
                href="https://x.com/shreyasMH26"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  col-span-1 aspect-square
                  xl:col-start-2 xl:col-span-1 xl:row-start-2 xl:aspect-auto xl:h-[216px]
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

              {/* ── OFFICIAL APPLE MUSIC WIDGET (Approach B: Full Size 450px) ── */}
              <div
                className="
                  col-span-2
                  xl:col-start-3 xl:col-span-2 xl:row-start-1 xl:row-span-2
                  h-[450px]
                  bg-[#131313]
                  rounded-[24px] border border-white/[0.08]
                  overflow-hidden shadow-2xl relative
                "
              >
                <iframe
                  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                  height="450"
                  style={{
                    width: '100%',
                    height: '100%',
                    maxWidth: '100%',
                    overflow: 'hidden',
                    borderRadius: '24px',
                    border: 0,
                    background: 'transparent',
                  }}
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                  src="https://embed.music.apple.com/in/playlist/after-2-17/pl.u-vxy6974T8y18pDo?theme=dark"
                  title="after 2 : 17 — Official Apple Music Playlist by Shreyas MH"
                />
              </div>

              {/* ── LOCATION MAP CARD (Screenshot 1) ── */}
              <div
                className="
                  col-span-2 aspect-[2/1]
                  xl:col-span-4 xl:aspect-auto xl:h-[188px]
                  rounded-[24px] border border-white/[0.06]
                  overflow-hidden relative shadow-inner
                "
              >
                <MapVisual />
              </div>

              {/* ════════════════════════════════════════════════════
                  SECTION 2: work - obsessor (Screenshot 1)
                 ════════════════════════════════════════════════════ */}
              <SectionTitle id="projects" title="work - obsessor" />

              <WorkPill
                title="Snapsy - Your Dev Workflow,..."
                href="https://github.com/shreyasMH26"
                icon={
                  <div className="size-5 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-300 shadow-sm" />
                }
              />

              <WorkPill
                title="Kindlesuite"
                href="https://github.com/shreyasMH26"
                icon={<span className="font-serif font-black text-sm text-white/80">ki</span>}
              />

              <WorkPill
                title="IFactory — The Operating System for..."
                href="https://github.com/shreyasMH26"
                icon={<Layers size={17} />}
              />

              <WorkPill
                title="30 min meeting | Shreyas MH |..."
                href={whatsappUrl}
                icon={<span className="font-mono text-xs font-bold text-white/90">Cal</span>}
              />

              {/* ════════════════════════════════════════════════════
                  SECTION 4: if i end up in hell (Screenshot 2)
                 ════════════════════════════════════════════════════ */}
              <SectionTitle id="soundtrack" title="if i end up in hell" />

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
                    <AppleMusicIcon size={24} className="text-[#FC3C44]" />
                  </div>
                  <div>
                    <p className="text-[16px] xl:text-[17px] font-bold text-white tracking-tight">
                      your wine, sir.
                    </p>
                    <p className="text-[12px] text-white/40 mt-0.5">music.apple.com</p>
                  </div>
                </div>

                {/* 4-cover album collage grid (Screenshot 2 exact replica) */}
                <div className="size-[114px] rounded-2xl overflow-hidden shrink-0 border border-white/10 grid grid-cols-2 grid-rows-2">
                  <div className="bg-[#441111] flex items-center justify-center p-1 text-[8px] font-bold text-white/90">
                    STARBOY
                  </div>
                  <div className="bg-[#1a1a1a] flex items-center justify-center p-1 text-[8px] font-bold text-neutral-300 border-l border-white/10">
                    20 YEARS
                  </div>
                  <div className="bg-[#0b132b] flex items-center justify-center p-1 text-[8px] font-bold text-blue-400 border-t border-white/10">
                    STARBOY
                  </div>
                  <div className="bg-[#240000] flex items-center justify-center p-1 text-[8px] font-bold text-rose-400 border-t border-l border-white/10">
                    CHASE
                  </div>
                </div>
              </a>

              {/* ════════════════════════════════════════════════════
                  SECTION 5: main character research (Screenshot 2 & 3)
                 ════════════════════════════════════════════════════ */}
              <SectionTitle title="main character research" />

              {/* Books by Shreyas MH card (Screenshot 2) */}
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
                  <div className="size-7 rounded-lg bg-[#22c55e] flex items-center justify-center font-bold text-black text-sm shadow-sm">
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
                  <div className="flex items-center gap-1 mt-1 text-[8px] text-[#22c55e] font-bold">
                    <span>P Peerlist</span>
                  </div>
                </div>
              </a>

              {/* Tweet Card: The mountain quote (Screenshot 2) */}
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

              {/* Song Tile: Skyfall */}
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

              {/* Song Tile: Heaven Or Las Vegas */}
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

              {/* Media Photo Tile: Earbuds on mousepad with red ambient light (Screenshot 3) */}
              <div
                className="
                  col-span-2 xl:col-span-2 h-[154px]
                  rounded-[24px] overflow-hidden border border-white/[0.08]
                  relative group bg-[#0e0e12]
                "
              >
                <img
                  src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80"
                  alt="Tech setup"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 text-[11px] text-white/60 font-mono">
                  setup // late night desk
                </div>
              </div>

              {/* Giant Apple Music Lyrics Card: "I stand on the stage, I give 'em the rage" (Screenshot 3) */}
              <div
                className="
                  col-span-2 xl:col-span-2 xl:row-span-2
                  bg-[#735751] hover:bg-[#7d605a]
                  rounded-[24px] border border-white/[0.08]
                  p-7 xl:p-8 flex flex-col justify-between
                  transition-all duration-200 group relative
                "
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="size-8 rounded-lg bg-black/40 flex items-center justify-center text-white">
                        <AppleMusicIcon size={18} />
                      </div>
                      <div>
                        <p className="text-[12px] font-bold text-white uppercase tracking-wider">MY EYES</p>
                        <p className="text-[10px] text-white/60">Song · Travis Scott</p>
                      </div>
                    </div>
                    <ArrowUpRight size={16} className="text-white/40 group-hover:text-white transition-colors" />
                  </div>

                  {/* Huge Punchy Lyrics */}
                  <h3 className="mt-8 text-[28px] xl:text-[34px] font-black tracking-tight text-white leading-[1.15]">
                    I stand on the stage, I give 'em the rage
                  </h3>
                </div>

                <div className="mt-8 flex items-center gap-2 text-white/50 text-xs font-semibold">
                  <AppleMusicIcon size={15} />
                  <span>Apple Music</span>
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

              {/* Tweet Card: Shreyas MH (Screenshot 3) */}
              <TweetCard
                authorName="Shreyas MH"
                authorHandle="@shreyasMH26"
                authorAvatar="/photos/shreyas-editorial-bw.jpg"
                date="Oct 8, 2025"
                content={`nobody could ever tear down your internals, build them.\n\nno hollow soul can say they can rebuild it.\n\nanything that can be seen can be destroyed, privacy is power.\n\nonly war breeds peace.`}
                stats={{ replies: "0", retweets: "1", likes: "87" }}
                locked={true}
              />

              {/* ════════════════════════════════════════════════════
                  SECTION 6: BOTTOM FOOTER
                 ════════════════════════════════════════════════════ */}
              <div id="contact" className="col-span-2 xl:col-span-4 mt-16 mb-8 text-center">
                <p className="text-[15px] xl:text-[17px] font-medium text-white/75 tracking-tight">
                  demons imitate every virtue, except one.
                </p>

                {/* WhatsApp quick contact */}
                <div className="mt-5 flex items-center justify-center">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] text-white/40 hover:text-[#25D366] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    <span>+91 74837 94998</span>
                  </a>
                </div>

                {/* Footer Links */}
                <div className="mt-10 flex items-center justify-center gap-6 text-[12px] text-white/30">
                  <span className="hover:text-white/60 transition-colors cursor-pointer">Terms</span>
                  <span className="hover:text-white/60 transition-colors cursor-pointer">Privacy Policy</span>
                  <span className="hover:text-white/60 transition-colors cursor-pointer">Cookie Policy</span>
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
