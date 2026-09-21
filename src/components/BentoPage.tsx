import { useRef } from 'react';
import { ArrowUpRight, ArrowRight, MapPin, MessageCircleHeart } from 'lucide-react';
import { GithubIcon, type GithubIconHandle } from '@/components/ui/github-icon';
import { NewTwitterIcon, type NewTwitterIconHandle } from '@/components/ui/new-twitter-icon';

/* ── Inline Brand Icons ── */

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

function InstagramIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
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
      <h2 className="text-[15px] font-medium text-white/90 tracking-tight">
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
  const githubIconRef = useRef<GithubIconHandle>(null);
  const twitterIconRef = useRef<NewTwitterIconHandle>(null);
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

              {/* ── GITHUB CARD (1 col × 1 row) ── */}
              <a
                href="https://github.com/shreyasMH26"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => githubIconRef.current?.startAnimation()}
                onMouseLeave={() => githubIconRef.current?.stopAnimation()}
                className="
                  col-span-1 h-[172px]
                  xl:col-start-1 xl:col-span-1 xl:row-start-1 xl:h-[216px]
                  bg-[#131313] hover:bg-[#161616]
                  rounded-[24px] border border-white/[0.06]
                  p-5 xl:p-6 flex flex-col justify-between
                  transition-all duration-200 cursor-pointer group
                "
              >
                <div className="size-8 rounded-lg bg-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <GithubIcon ref={githubIconRef} size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-white leading-tight">GitHub</p>
                  <p className="text-[11px] text-white/45 mt-0.5">@shreyasMH26</p>
                  <div className="mt-2.5">
                    <span className="inline-block bg-[#0070f3] hover:bg-[#0060df] text-white text-[11px] font-semibold px-4 py-1 rounded-full transition-colors shadow-sm">
                      Follow 28
                    </span>
                  </div>
                </div>
              </a>

              {/* ── INSTAGRAM CARD (1 col × 1 row, beside GitHub) ── */}
              <a
                href="https://www.instagram.com/shreyasm.h/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  col-span-1 h-[172px]
                  xl:col-start-2 xl:col-span-1 xl:row-start-1 xl:h-[216px]
                  bg-[#131313] hover:bg-[#161616]
                  rounded-[24px] border border-white/[0.06]
                  p-5 xl:p-6 flex flex-col justify-between
                  transition-all duration-200 cursor-pointer group
                "
              >
                <div className="size-8 rounded-lg bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] flex items-center justify-center text-white shadow-md shadow-pink-950/30 group-hover:scale-105 transition-transform">
                  <InstagramIcon size={17} />
                </div>
                <div>
                  <p className="text-[14px] font-bold text-white leading-tight">Instagram</p>
                  <p className="text-[11px] text-white/45 mt-0.5">@shreyasm.h</p>
                  <div className="mt-2.5">
                    <span className="inline-block bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:opacity-90 text-white text-[11px] font-semibold px-4 py-1 rounded-full transition-opacity shadow-sm">
                      Follow
                    </span>
                  </div>
                </div>
              </a>

              {/* ── LINKEDIN CARD (1 col × 1 row) ── */}
              <a
                href="https://www.linkedin.com/in/shreyasmh/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  col-span-1 h-[172px]
                  xl:col-start-1 xl:col-span-1 xl:row-start-2 xl:h-[216px]
                  bg-[#131313] hover:bg-[#161616]
                  rounded-[24px] border border-white/[0.06]
                  p-5 xl:p-6 flex flex-col justify-between
                  transition-all duration-200 cursor-pointer group
                "
              >
                <div className="size-8 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white group-hover:scale-105 transition-transform">
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
                onMouseEnter={() => twitterIconRef.current?.startAnimation()}
                onMouseLeave={() => twitterIconRef.current?.stopAnimation()}
                className="
                  col-span-1 h-[172px]
                  xl:col-start-2 xl:col-span-1 xl:row-start-2 xl:h-[216px]
                  bg-[#131313] hover:bg-[#161616]
                  rounded-[24px] border border-white/[0.06]
                  p-5 xl:p-6 flex flex-col justify-between
                  transition-all duration-200 cursor-pointer group
                "
              >
                <div className="size-8 rounded-lg bg-black flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <NewTwitterIcon ref={twitterIconRef} size={18} className="text-white" />
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

              {/* ── Justin Bieber — Company Lyric Card ── */}
              <a
                href="https://music.apple.com/in/album/company/1440829460?i=1440829617"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  col-span-2 xl:col-span-2 min-h-[380px] xl:min-h-[460px] relative overflow-hidden
                  bg-gradient-to-br from-[#1c1c1e] via-[#141416] to-[#0d0d0f]
                  hover:from-[#222225] hover:via-[#18181b] hover:to-[#101012]
                  rounded-[24px] border border-white/[0.08]
                  p-6 sm:p-7 xl:p-8 flex flex-col justify-between
                  transition-all duration-300 cursor-pointer group shadow-xl shadow-black/50
                "
              >
                {/* Subtle blurred album background reflection */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-10 blur-2xl scale-125 pointer-events-none"
                  style={{ backgroundImage: `url('/photos/bieber-purpose.png')` }}
                />

                {/* Subtle ambient lighting glows */}
                <div className="absolute -top-10 -right-10 size-40 bg-white/[0.03] rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 size-40 bg-white/[0.02] rounded-full blur-2xl pointer-events-none" />

                {/* Top arrow */}
                <div className="absolute top-5 right-5 sm:top-6 sm:right-6 size-8 rounded-full bg-white/10 flex items-center justify-center text-white/40 group-hover:text-white transition-colors z-10">
                  <ArrowUpRight size={15} />
                </div>

                {/* Large Bold White Lyric Typography */}
                <div className="pr-10 relative z-10">
                  <h3 className="text-[24px] sm:text-[30px] xl:text-[36px] font-bold text-white leading-[1.1] tracking-tight">
                    Just wanna have<br />
                    a conversation<br />
                    Forget about<br />
                    the obligations<br />
                    Maybe we can<br />
                    stay in touch<br />
                    Oh, that ain&apos;t<br />
                    doin&apos; too much
                  </h3>
                </div>

                {/* Bottom Row: Album Artwork & Metadata */}
                <div className="mt-8 sm:mt-10 flex items-center gap-3 min-w-0 relative z-10">
                  <img
                    src="/photos/bieber-purpose.png"
                    alt="Purpose by Justin Bieber"
                    className="size-11 sm:size-12 rounded-[8px] object-cover shrink-0 border border-white/15 shadow-md"
                  />
                  <div className="flex flex-col min-w-0 leading-tight">
                    <span className="text-[13px] sm:text-[14px] font-bold text-white truncate">
                      Company
                    </span>
                    <span className="text-[11px] sm:text-[12px] text-white/60 font-medium truncate mt-0.5">
                      Justin Bieber
                    </span>
                    <span className="text-[10px] sm:text-[10.5px] text-white/40 font-medium flex items-center gap-1 mt-0.5">
                       Music
                    </span>
                  </div>
                </div>
              </a>

              <WorkPill
                title="come say hi."
                href={whatsappUrl}
                icon={<MessageCircleHeart size={18} className="text-white/80" />}
              />

              {/* ════════════════════════════════════════════════════
                  SECTION 4: Even in hell
                 ════════════════════════════════════════════════════ */}
              <SectionTitle id="soundtrack" title="Even in hell" />

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

              {/* Song Tile: Can't Tell Me Nothing (Kanye West) */}
              <a
                href="https://music.apple.com/in/album/cant-tell-me-nothing/1451901307?i=1451903287"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  col-span-2 xl:col-span-2 min-h-[220px] xl:h-[240px] relative overflow-hidden
                  bg-gradient-to-br from-[#2b1030] via-[#1a0c20] to-[#0d0512]
                  hover:from-[#35153b] hover:via-[#200f28] hover:to-[#120718]
                  rounded-[24px] border border-fuchsia-500/20
                  p-6 sm:p-7 flex flex-col justify-between
                  transition-all duration-300 cursor-pointer group shadow-xl shadow-purple-950/20
                "
              >
                {/* Subtle blurred album background reflection */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-10 blur-2xl scale-125 pointer-events-none"
                  style={{ backgroundImage: `url('/photos/kanye-graduation.png')` }}
                />

                {/* Subtle ambient artwork glow */}
                <div className="absolute -top-10 -right-10 size-48 bg-fuchsia-600/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 size-48 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

                {/* Top arrow */}
                <div className="absolute top-5 right-5 sm:top-6 sm:right-6 size-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 group-hover:text-white transition-colors z-10">
                  <ArrowUpRight size={15} />
                </div>

                {/* Lyrics Typography */}
                <div className="pr-10 relative z-10">
                  <h3 className="text-[22px] sm:text-[26px] xl:text-[28px] 2xl:text-[32px] font-bold text-white leading-[1.08] tracking-tight">
                    Let the champagne<br />
                    splash, let that man get cash<br />
                    Let that man get past
                  </h3>
                </div>

                {/* Track Metadata & Artwork Footer */}
                <div className="mt-6 flex items-center gap-3 min-w-0 relative z-10">
                  <img
                    src="/photos/kanye-graduation.png"
                    alt="Graduation by Kanye West"
                    className="size-10 sm:size-11 rounded-[8px] object-cover shrink-0 border border-white/15 shadow-md"
                  />
                  <div className="flex flex-col min-w-0 leading-tight">
                    <span className="text-[13px] sm:text-[14px] font-bold text-white truncate">Can&apos;t Tell Me Nothing</span>
                    <span className="text-[11px] sm:text-[12px] text-white/60 font-medium truncate mt-0.5">Kanye West</span>
                    <span className="text-[10px] text-white/40 font-medium truncate mt-0.5 flex items-center gap-1"> Music</span>
                  </div>
                </div>
              </a>

              {/* Song Tile: Sprinter (Dave & Central Cee) */}
              <a
                href="https://music.apple.com/in/album/sprinter/1839470018?i=1839470171"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  col-span-2 xl:col-span-2 min-h-[220px] xl:h-[240px] relative overflow-hidden
                  bg-gradient-to-br from-[#331e23] via-[#241419] to-[#140b0e]
                  hover:from-[#3e252b] hover:via-[#2b171d] hover:to-[#1a0e13]
                  rounded-[24px] border border-stone-600/20
                  p-6 sm:p-7 flex flex-col justify-between
                  transition-all duration-300 cursor-pointer group shadow-xl shadow-black/40
                "
              >
                {/* Subtle blurred album background reflection */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-10 blur-2xl scale-125 pointer-events-none"
                  style={{ backgroundImage: `url('/photos/sprinter-cover.png')` }}
                />

                {/* Subtle ambient lighting glows */}
                <div className="absolute -top-10 -right-10 size-48 bg-[#543440]/30 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 size-48 bg-[#422521]/30 rounded-full blur-3xl pointer-events-none" />

                {/* Top arrow */}
                <div className="absolute top-5 right-5 sm:top-6 sm:right-6 size-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 group-hover:text-white transition-colors z-10">
                  <ArrowUpRight size={15} />
                </div>

                {/* Lyrics Typography */}
                <div className="pr-10 relative z-10">
                  <h3 className="text-[20px] sm:text-[23px] xl:text-[25px] 2xl:text-[27px] font-bold text-white leading-[1.08] tracking-tight">
                    Before I give you my<br />
                    Insta&apos; password, I&apos;ll<br />
                    give you the pin to my<br />
                    AmEx, huh, alright
                  </h3>
                </div>

                {/* Track Metadata & Artwork Footer */}
                <div className="mt-6 flex items-center gap-3 min-w-0 relative z-10">
                  <img
                    src="/photos/sprinter-cover.png"
                    alt="Sprinter by Dave & Central Cee"
                    className="size-10 sm:size-11 rounded-[8px] object-cover shrink-0 border border-white/15 shadow-md"
                  />
                  <div className="flex flex-col min-w-0 leading-tight">
                    <span className="text-[13px] sm:text-[14px] font-bold text-white truncate">Sprinter</span>
                    <span className="text-[11px] sm:text-[12px] text-white/60 font-medium truncate mt-0.5">Dave &amp; Central Cee</span>
                    <span className="text-[10px] text-white/40 font-medium truncate mt-0.5 flex items-center gap-1"> Music</span>
                  </div>
                </div>
              </a>

              {/* Media Photo Tile: XTICH Night Waterfront */}
              <div
                className="
                  col-span-2 xl:col-span-4 h-[160px] sm:h-[180px]
                  rounded-[24px] overflow-hidden border border-white/[0.08]
                  relative group bg-[#0a0a0c]
                "
              >
                <img
                  src="/photos/shreyas-xtich-night.png"
                  alt="Shreyas XTICH"
                  className="size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* ── Giant Apple Music Lyrics Card: Starboy (The Weeknd) ── */}
              <a
                href="https://music.apple.com/in/album/starboy-feat-daft-punk/1440870373?i=1440870375"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  col-span-2 xl:col-span-2 xl:row-span-2 relative overflow-hidden
                  bg-gradient-to-r from-[#120816] via-[#1a0c1e] to-[#2a0e1c]
                  hover:from-[#170b1c] hover:via-[#200f26] hover:to-[#331223]
                  rounded-[24px] border border-rose-500/20
                  p-6 sm:p-7 xl:p-8 flex flex-col justify-between
                  transition-all duration-300 group cursor-pointer shadow-xl shadow-red-950/20
                "
              >
                {/* Subtle blurred album background reflection */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-10 blur-2xl scale-125 pointer-events-none"
                  style={{ backgroundImage: `url('/photos/the-weeknd-starboy.png')` }}
                />

                {/* Atmospheric lighting glows matching the reference */}
                <div className="absolute -top-12 -right-12 size-64 bg-gradient-to-bl from-rose-600/35 via-orange-600/25 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -right-8 size-60 bg-gradient-to-tl from-red-600/40 via-amber-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -top-10 left-1/4 size-48 bg-indigo-950/40 rounded-full blur-2xl pointer-events-none" />

                {/* Top-right subtle arrow icon */}
                <div className="absolute top-5 right-5 sm:top-6 sm:right-6 size-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 group-hover:text-white transition-colors z-10">
                  <ArrowUpRight size={16} />
                </div>

                {/* Large Bold White Lyric Typography */}
                <div className="pr-10 relative z-10">
                  <h3 className="text-[26px] sm:text-[32px] xl:text-[36px] font-extrabold tracking-tight text-white leading-[1.15]">
                    We don&apos;t pray for love,<br />
                    we just pray for cars
                  </h3>
                </div>

                {/* Bottom Row: Album Artwork & Metadata */}
                <div className="mt-8 sm:mt-10 flex items-center gap-3 min-w-0 relative z-10">
                  <img
                    src="/photos/the-weeknd-starboy.png"
                    alt="Starboy by The Weeknd"
                    className="size-11 sm:size-12 rounded-[8px] object-cover shrink-0 border border-white/15 shadow-md"
                  />
                  <div className="flex flex-col min-w-0 leading-tight">
                    <span className="text-[13px] sm:text-[14px] font-bold text-white truncate">
                      Starboy (feat. Daft Punk)
                    </span>
                    <span className="text-[11px] sm:text-[12px] text-white/60 font-medium truncate mt-0.5">
                      The Weeknd
                    </span>
                    <span className="text-[10px] text-white/40 font-medium flex items-center gap-1 mt-0.5">
                       Music
                    </span>
                  </div>
                </div>
              </a>

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



              {/* Development Humor Card (Exact replication from screenshot) */}
              <div
                onClick={() => {
                  console.log("%c🐛 Shhh... it's okay, bug. You're in console now.", "color: #ff385c; font-size: 14px; font-weight: bold;");
                }}
                className="
                  col-span-2 xl:col-span-2 min-h-[300px] xl:min-h-[320px]
                  bg-white hover:bg-neutral-50
                  rounded-[28px] border border-black/5
                  p-7 sm:p-9 xl:p-10 flex flex-col justify-between
                  shadow-xl text-black select-none transition-all duration-200
                  group cursor-pointer relative overflow-hidden
                "
              >
                <div>
                  <span className="text-[11px] font-mono tracking-[0.28em] text-neutral-400 font-semibold uppercase block mb-6">
                    D E V E L O P M E N T
                  </span>
                  <h3 className="text-[26px] sm:text-[32px] xl:text-[34px] font-bold text-neutral-950 leading-[1.14] tracking-tight">
                    How do you<br />comfort a<br />JavaScript<br />bug?
                  </h3>
                </div>

                <div className="flex items-end justify-between mt-8 sm:mt-10">
                  <p className="text-[26px] sm:text-[32px] xl:text-[34px] font-bold text-neutral-950 leading-tight tracking-tight">
                    You console it.
                  </p>
                  <div className="size-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-800 group-hover:translate-x-1 group-hover:bg-neutral-200 transition-all shrink-0 ml-4">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>

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
