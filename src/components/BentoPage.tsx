import { ArrowUpRight, MapPin, Mail, Download, FileText, Globe } from 'lucide-react';

/* ── Inline brand icons (lucide-react version doesn't export these) ── */
function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterXIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* ── Section divider ─────────────────────────────────────────────── */
function SectionHeader({ label }: { label: string }) {
  return (
    <div className="col-span-2 xl:col-span-4 flex items-center gap-4 h-[48px]">
      <div className="h-px flex-1 bg-white/[0.07]" />
      <span className="text-[10px] text-white/25 uppercase tracking-[0.22em] font-medium whitespace-nowrap">
        {label}
      </span>
      <div className="h-px flex-1 bg-white/[0.07]" />
    </div>
  );
}

/* ── Slim project / link row card ────────────────────────────────── */
interface ProjectCardProps {
  title: string;
  sub: string;
  href: string;
  badge?: string;
  colSpan?: string; // tailwind col-span classes
}

function ProjectCard({ title, sub, href, badge, colSpan = 'col-span-2 xl:col-span-2' }: ProjectCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${colSpan} h-[90px] xl:h-[96px]
        bg-[#191919] rounded-2xl xl:rounded-3xl overflow-hidden relative
        border border-white/[0.06]
        hover:bg-[#202020] active:scale-[0.99]
        transition-all duration-200 cursor-pointer group
        flex items-center px-5 xl:px-6 gap-4`}
    >
      <div className="flex-1 min-w-0">
        <p className="text-[14px] xl:text-[15px] font-semibold text-white/90 leading-tight">{title}</p>
        <p className="text-[11px] xl:text-[12px] text-white/35 mt-0.5 truncate">{sub}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {badge && (
          <span className="text-[9px] xl:text-[10px] text-white/25 uppercase tracking-widest font-medium hidden sm:block">
            {badge}
          </span>
        )}
        <ArrowUpRight
          className="text-white/20 group-hover:text-white/55 transition-colors"
          size={16}
        />
      </div>
    </a>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════════════ */
export default function BentoPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white antialiased">
      <div className="relative w-full max-w-[1728px] mx-auto">

        {/* ─── Flex layout: sidebar + grid ──────────────────────── */}
        <div className="flex flex-col xl:flex-row xl:items-start">

          {/* ══ LEFT SIDEBAR ═══════════════════════════════════════ */}
          <aside
            className="
              flex flex-col items-center xl:items-start
              xl:sticky xl:top-0 xl:h-screen xl:overflow-y-auto
              xl:w-[300px] xl:flex-none xl:shrink-0
              px-6 pt-10 pb-6
              xl:px-12 xl:pt-14 xl:pb-16
            "
          >
            {/* Avatar — gradient initials */}
            <div
              className="
                shrink-0 size-[112px] xl:size-[172px] rounded-full
                bg-gradient-to-br from-indigo-500 via-violet-500 to-emerald-500
                flex items-center justify-center select-none
                shadow-[0_0_40px_-8px_rgba(99,102,241,0.4)]
              "
              role="img"
              aria-label="Shreyas MH avatar"
            >
              <span className="text-white font-bold text-[36px] xl:text-[52px] tracking-tight leading-none">
                SM
              </span>
            </div>

            {/* Name */}
            <div className="mt-6 xl:mt-8 w-full text-center xl:text-left">
              <h1 className="text-[26px] xl:text-[38px] font-bold tracking-tight leading-none text-white">
                Shreyas MH.
              </h1>

              {/* Bio */}
              <p className="mt-4 text-[13px] xl:text-[14px] text-white/45 leading-relaxed max-w-[280px] xl:max-w-none mx-auto xl:mx-0">
                I build software, run a clothing brand, and experiment with AI.
                <br /><br />
                Co-Founder &amp; COO at{' '}
                <a
                  href="https://xtich.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors underline underline-offset-2 decoration-white/20"
                >
                  XTICH
                </a>
                .{' '}CSE student at JIT, Davanagere.
              </p>

              {/* Quick links — visible only on sidebar at xl */}
              <div className="hidden xl:flex flex-col gap-3 mt-8">
                <a
                  href="https://github.com/shreyasMH26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[13px] text-white/35 hover:text-white/70 transition-colors"
                >
                  <GithubIcon size={14} />
                  <span>shreyasMH26</span>
                </a>
                <a
                  href="mailto:adolfhitlerr26@gmail.com"
                  className="flex items-center gap-2 text-[13px] text-white/35 hover:text-white/70 transition-colors"
                >
                  <Mail size={14} />
                  <span>adolfhitlerr26@gmail.com</span>
                </a>
                <div className="flex items-center gap-2 text-[13px] text-white/35">
                  <MapPin size={14} />
                  <span>Davanagere, India</span>
                </div>
              </div>
            </div>
          </aside>

          {/* ══ RIGHT: BENTO GRID ══════════════════════════════════ */}
          <main className="flex-1 min-w-0 p-5 pt-2 xl:pt-14 xl:pr-14 xl:pl-8 xl:pb-16">
            <div className="grid grid-cols-2 gap-[14px] xl:grid-cols-4 xl:gap-5">

              {/* ─── ROW 1–2: SOCIAL / IDENTITY CARDS ───────────── */}

              {/* GITHUB — mobile: 2×1 wide, desktop: 1col × 2rows tall */}
              <a
                href="https://github.com/shreyasMH26"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub — shreyasMH26"
                className="
                  col-span-2 aspect-[2/1]
                  xl:col-start-1 xl:col-span-1 xl:row-start-1 xl:row-span-2 xl:aspect-auto
                  bg-[#191919] rounded-2xl xl:rounded-3xl overflow-hidden relative
                  border border-white/[0.06]
                  hover:bg-[#202020] active:scale-[0.99]
                  transition-all duration-200 cursor-pointer group
                "
              >
                <div className="flex flex-col justify-between h-full p-6 xl:p-7">
                  {/* Icon */}
                  <div className="text-white/60 group-hover:text-white/90 transition-colors duration-200">
                    <GithubIcon size={34} />
                  </div>

                  {/* Content */}
                  <div>
                    <p className="text-[10px] text-white/25 uppercase tracking-[0.18em] mb-1.5 font-medium">
                      GitHub
                    </p>
                    <p className="text-[18px] xl:text-[20px] font-bold text-white/90 leading-tight">
                      shreyasMH26
                    </p>
                    <p className="text-[11px] xl:text-[12px] text-white/35 mt-1.5">
                      View my repositories
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  className="absolute top-5 right-5 text-white/20 group-hover:text-white/55 transition-colors"
                  size={16}
                />
              </a>

              {/* LINKEDIN — mobile: 1×1 half, desktop: col2 row1 */}
              <a
                href="https://linkedin.com/in/shreyasmh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  col-span-1 aspect-square
                  xl:col-start-2 xl:col-span-1 xl:row-start-1 xl:aspect-auto xl:h-[190px]
                  bg-[#191919] rounded-2xl xl:rounded-3xl overflow-hidden relative
                  border border-white/[0.06]
                  hover:bg-[#202020] active:scale-[0.99]
                  transition-all duration-200 cursor-pointer group
                "
              >
                <div className="flex flex-col justify-between h-full p-5 xl:p-6">
                  <div className="text-[#0A66C2]/80 group-hover:text-[#0A66C2] transition-colors duration-200">
                    <LinkedinIcon size={26} />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/25 uppercase tracking-[0.18em] font-medium">
                      LinkedIn
                    </p>
                    <p className="text-[12px] text-white/50 mt-0.5">Connect</p>
                  </div>
                </div>
                <ArrowUpRight
                  className="absolute top-4 right-4 text-white/15 group-hover:text-white/45 transition-colors"
                  size={14}
                />
              </a>

              {/* EMAIL — mobile: 1×1 half, desktop: col2 row2 */}
              <a
                href="mailto:adolfhitlerr26@gmail.com"
                aria-label="Send an email"
                className="
                  col-span-1 aspect-square
                  xl:col-start-2 xl:col-span-1 xl:row-start-2 xl:aspect-auto xl:h-[190px]
                  bg-[#191919] rounded-2xl xl:rounded-3xl overflow-hidden relative
                  border border-white/[0.06]
                  hover:bg-[#202020] active:scale-[0.99]
                  transition-all duration-200 cursor-pointer group
                "
              >
                <div className="flex flex-col justify-between h-full p-5 xl:p-6">
                  <Mail
                    className="text-white/45 group-hover:text-white/80 transition-colors duration-200"
                    size={26}
                  />
                  <div>
                    <p className="text-[10px] text-white/25 uppercase tracking-[0.18em] font-medium">
                      Email
                    </p>
                    <p className="text-[12px] text-white/50 mt-0.5">Say hi</p>
                  </div>
                </div>
                <ArrowUpRight
                  className="absolute top-4 right-4 text-white/15 group-hover:text-white/45 transition-colors"
                  size={14}
                />
              </a>

              {/* XTICH — mobile: 2×1 full, desktop: col3-4 row1 */}
              <a
                href="https://xtich.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="XTICH website"
                className="
                  col-span-2 aspect-[2/1]
                  xl:col-start-3 xl:col-span-2 xl:row-start-1 xl:aspect-auto xl:h-[190px]
                  bg-[#191919] rounded-2xl xl:rounded-3xl overflow-hidden relative
                  border border-white/[0.06]
                  hover:bg-[#202020] active:scale-[0.99]
                  transition-all duration-200 cursor-pointer group
                "
              >
                <div className="flex flex-col justify-between h-full p-6 xl:p-7">
                  <div>
                    <p className="text-[10px] text-white/25 uppercase tracking-[0.18em] mb-2 font-medium">
                      Co-Founder &amp; COO
                    </p>
                    <p className="text-[24px] xl:text-[30px] font-black text-white tracking-tight leading-none">
                      XTICH
                    </p>
                    <p className="text-[12px] xl:text-[13px] text-white/35 mt-1.5">
                      Student-focused clothing brand
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/35 group-hover:text-white/60 transition-colors">
                    <Globe size={12} />
                    <span className="text-[11px] xl:text-[12px]">xtich.in</span>
                  </div>
                </div>
                <ArrowUpRight
                  className="absolute top-5 right-5 text-white/20 group-hover:text-white/55 transition-colors"
                  size={16}
                />
              </a>

              {/* LOCATION — mobile: 2×1 full, desktop: col3-4 row2 */}
              <div
                className="
                  col-span-2 aspect-[2/1]
                  xl:col-start-3 xl:col-span-2 xl:row-start-2 xl:aspect-auto xl:h-[190px]
                  bg-[#191919] rounded-2xl xl:rounded-3xl overflow-hidden relative
                  border border-white/[0.06]
                "
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/12 via-transparent to-emerald-900/10 pointer-events-none" />
                <div className="relative flex flex-col justify-between h-full p-6 xl:p-7">
                  <MapPin className="text-white/30" size={22} />
                  <div>
                    <p className="text-[22px] xl:text-[26px] font-bold text-white/90 tracking-tight leading-none">
                      Davanagere
                    </p>
                    <p className="text-[13px] xl:text-[14px] text-white/35 mt-1.5">
                      Karnataka, India 🇮🇳
                    </p>
                  </div>
                </div>
              </div>

              {/* ─── SECTION: building ───────────────────────────── */}
              <SectionHeader label="building" />

              {/* SecureVault */}
              <ProjectCard
                title="SecureVault"
                sub="Password manager · HTML, CSS, JavaScript"
                href="https://shreyasmh26.github.io/SecureVault/"
              />

              {/* EchoVerse */}
              <ProjectCard
                title="EchoVerse"
                sub="AI memory system · Python, LLMs, Vector DB"
                href="https://github.com/shreyasMH26"
                badge="Exploring"
              />

              {/* MH AI Steering Wheel */}
              <ProjectCard
                title="MH AI Steering Wheel"
                sub="Personal AI layer · Python, Local LLMs, macOS"
                href="https://github.com/shreyasMH26"
                badge="Experimenting"
              />

              {/* IoT Laser Security */}
              <ProjectCard
                title="IoT Laser Security"
                sub="Intrusion detection · ESP8266, Arduino, Telegram"
                href="https://github.com/shreyasMH26"
                badge="Completed"
              />

              {/* Doubt System */}
              <ProjectCard
                title="Doubt System"
                sub="Student Q&A platform · HTML, CSS, JavaScript"
                href="https://shreyasmh26.github.io/doubt-system/"
              />

              {/* Versity */}
              <ProjectCard
                title="Versity by XTICH"
                sub="B2B · Modernising uniforms for schools & colleges"
                href="https://xtich.in"
                badge="Active"
              />

              {/* ─── SECTION: about ───────────────────────────────── */}
              <SectionHeader label="about me" />

              {/* Quote / philosophy card — full width */}
              <div
                className="
                  col-span-2 xl:col-span-4
                  bg-[#191919] rounded-2xl xl:rounded-3xl overflow-hidden relative
                  border border-white/[0.06]
                  p-6 xl:p-10 min-h-[140px] xl:min-h-[160px] flex flex-col justify-center
                "
              >
                <p className="text-[19px] xl:text-[26px] font-bold text-white/90 leading-snug tracking-tight max-w-[700px]">
                  "I learn by building. Software, AI, brands — if it can be built, I want to try."
                </p>
                <p className="text-[12px] xl:text-[13px] text-white/25 mt-3 xl:mt-4">
                  CSE Student · Co-Founder @ XTICH &amp; Versity · Davanagere, Karnataka, India
                </p>
              </div>

              {/* ─── SECTION: find me ─────────────────────────────── */}
              <SectionHeader label="find me" />

              {/* Resume card */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Shreyas_MH_Resume.pdf"
                aria-label="Download Resume"
                className="
                  col-span-2 xl:col-span-2 h-[150px] xl:h-[170px]
                  bg-[#191919] rounded-2xl xl:rounded-3xl overflow-hidden relative
                  border border-white/[0.06]
                  hover:bg-[#202020] active:scale-[0.99]
                  transition-all duration-200 cursor-pointer group
                  flex flex-col justify-between p-6 xl:p-7
                "
              >
                <FileText
                  className="text-white/40 group-hover:text-white/70 transition-colors duration-200"
                  size={28}
                />
                <div>
                  <p className="text-[17px] xl:text-[18px] font-semibold text-white/90">Resume</p>
                  <p className="text-[12px] text-white/35 mt-1 flex items-center gap-1.5">
                    <Download size={11} />
                    <span>Download PDF</span>
                  </p>
                </div>
                <ArrowUpRight
                  className="absolute top-5 right-5 text-white/20 group-hover:text-white/55 transition-colors"
                  size={16}
                />
              </a>

              {/* Twitter/X card */}
              <div
                className="
                  col-span-2 xl:col-span-2 h-[150px] xl:h-[170px]
                  bg-[#191919] rounded-2xl xl:rounded-3xl overflow-hidden relative
                  border border-white/[0.06]
                  flex flex-col justify-between p-6 xl:p-7
                "
              >
                <div className="text-white/45">
                  <TwitterXIcon size={26} />
                </div>
                <div>
                  <p className="text-[17px] xl:text-[18px] font-semibold text-white/90">Twitter / X</p>
                  <p className="text-[12px] text-white/30 mt-1">Coming soon</p>
                </div>
              </div>

              {/* ─── FOOTER ROW ───────────────────────────────────── */}
              <div className="col-span-2 xl:col-span-4 pt-4 pb-2 flex items-center justify-center">
                <p className="text-[11px] text-white/15 tracking-wide">
                  © {new Date().getFullYear()} Shreyas MH · Built with React + Vite
                </p>
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
