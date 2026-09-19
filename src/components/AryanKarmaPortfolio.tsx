import { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Code2, 
  Home, 
  Layers, 
  Music,
  LayoutGrid
} from 'lucide-react';

/* ── Inline Brand Icons ── */
function GithubIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterXIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* ── Live Age Counter (Matches aryankarma.com "been here for 22.xxxxxx years") ── */
function useAge() {
  const [age, setAge] = useState<string>("20.000000000");

  useEffect(() => {
    // Reference birth date (approx 2005 for CSE undergrad)
    const birthDate = new Date("2005-06-26T00:00:00Z").getTime();
    
    const updateAge = () => {
      const now = Date.now();
      const diffYears = (now - birthDate) / (1000 * 60 * 60 * 24 * 365.2425);
      setAge(diffYears.toFixed(9));
    };

    updateAge();
    const interval = setInterval(updateAge, 50);
    return () => clearInterval(interval);
  }, []);

  return age;
}

/* ── GitHub Heatmap (Full Width as in aryankarma.com) ── */
function GitHubActivityGraph() {
  const months = ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  
  // 36 weeks of activity data (7 days per week)
  const weeks = Array.from({ length: 36 }, (_, w) => 
    Array.from({ length: 7 }, (_, d) => {
      // Deterministic activity pattern
      const pseudo = Math.sin(w * 13 + d * 7) * 10000;
      const seed = Math.abs(pseudo - Math.floor(pseudo));
      if (seed < 0.25) return 0;
      if (seed < 0.55) return 1;
      if (seed < 0.75) return 2;
      if (seed < 0.90) return 3;
      return 4;
    })
  );

  const colors = [
    '#161b22', // 0: empty
    '#0e4429', // 1: low
    '#006d32', // 2: medium
    '#26a641', // 3: high
    '#39d353', // 4: very high
  ];

  return (
    <div className="w-full bg-[#111113] border border-white/[0.08] rounded-2xl p-5 overflow-hidden">
      {/* Months header */}
      <div className="flex justify-between text-[11px] text-zinc-500 font-mono mb-2 px-1">
        {months.map((m, i) => (
          <span key={i}>{m}</span>
        ))}
      </div>

      {/* Grid */}
      <div className="overflow-x-auto pb-1">
        <div className="flex gap-[3.5px] justify-between min-w-[560px]">
          {weeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-[3.5px]">
              {week.map((level, dIdx) => (
                <div
                  key={`${wIdx}-${dIdx}`}
                  className="size-[10.5px] rounded-[2px] transition-colors"
                  style={{ backgroundColor: colors[level] }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer stats */}
      <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono mt-3 pt-3 border-t border-white/[0.06]">
        <span>1,842 contributions in the last year</span>
        <div className="flex items-center gap-1.5 text-zinc-500 text-[10px]">
          <span>Less</span>
          {colors.map((c, i) => (
            <span key={i} className="size-[9px] rounded-[2px]" style={{ backgroundColor: c }} />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}

/* ── Work Experience Item ── */
function ExperienceRow({
  logo,
  company,
  role,
  period,
  description,
  href
}: {
  logo: string;
  company: string;
  role: string;
  period: string;
  description: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4 group py-2">
      <div className="size-11 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden shrink-0 mt-0.5">
        <img src={logo} alt={company} className="size-full object-cover p-1" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-[15px] font-semibold text-white group-hover:text-zinc-200 transition-colors">
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                {company} <ArrowUpRight size={13} className="text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ) : company}
          </h3>
          <span className="text-[12px] text-zinc-500 font-mono shrink-0">{period}</span>
        </div>
        <p className="text-[13px] text-zinc-400 mt-0.5">{role}</p>
        <p className="text-[12px] text-zinc-500 mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/* ── Project Card (2-Column Grid as in aryankarma.com) ── */
function ProjectCardItem({
  title,
  description,
  tags,
  href,
  image,
  isLive = true
}: {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
  isLive?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#111113] hover:bg-[#151518] rounded-2xl border border-white/[0.08] overflow-hidden flex flex-col justify-between transition-all duration-200 group cursor-pointer"
    >
      <div>
        {/* Project preview header image */}
        <div className="relative h-[160px] sm:h-[180px] w-full overflow-hidden bg-zinc-950 border-b border-white/[0.06]">
          <img
            src={image}
            alt={title}
            className="size-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
          />
          {isLive && (
            <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-[16px] font-bold text-white group-hover:text-zinc-200 transition-colors">
              {title}
            </h3>
            <ArrowUpRight size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
          </div>
          <p className="text-[13px] text-zinc-400 mt-2 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Tech Tags */}
      <div className="px-5 pb-5 pt-1 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-mono text-zinc-400 bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

/* ── Timeline Node for Hackathons / Milestones ── */
function TimelineItem({
  period,
  title,
  location,
  description
}: {
  period: string;
  title: string;
  location: string;
  description: string;
}) {
  return (
    <div className="relative pl-10 pb-8 group last:pb-0">
      {/* Connecting vertical line */}
      <div className="absolute left-[15px] top-6 bottom-0 w-px bg-zinc-800" />
      
      {/* Node circle */}
      <div className="absolute left-0 top-1 size-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-colors shadow-sm">
        <Code2 size={14} />
      </div>

      <div>
        <span className="text-[11px] font-mono text-zinc-500">{period}</span>
        <h4 className="text-[15px] font-bold text-white mt-0.5 leading-snug">{title}</h4>
        <p className="text-[12px] text-zinc-400 font-medium mt-0.5">{location}</p>
        <p className="text-[13px] text-zinc-400 mt-2 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN ARYANKARMA.COM PORTFOLIO COMPONENT
═══════════════════════════════════════════════════════════════════ */
export default function AryanKarmaPortfolio({ onSwitchToBento }: { onSwitchToBento?: () => void }) {
  const age = useAge();

  const skills = [
    'React.js', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS',
    'Postgres', 'Docker', 'C++', 'Git / GitHub', 'JavaScript', 'Shadcn UI',
    'Local LLMs', 'Vector DB', 'Arduino / ESP8266', 'Product Design', 'Brand Strategy'
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-white/20 selection:text-white font-sans antialiased pb-28">
      {/* Main Centered Column Container (Exact width as in aryankarma.com) */}
      <main className="max-w-[720px] mx-auto px-5 sm:px-6 pt-16 sm:pt-20">

        {/* ── 1. HERO SECTION ── */}
        <section id="hero" className="space-y-6">
          {/* Live Age Ticker */}
          <p className="text-[12px] font-mono text-zinc-500 select-none">
            been here for {age} years
          </p>

          <div className="flex items-start justify-between gap-6">
            <div className="space-y-4 max-w-lg">
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Hi, I'm Shreyas.
              </h1>
              <p className="text-[15px] sm:text-[16px] text-zinc-400 leading-relaxed">
                Computer Science Engineering student, founder, and builder building software, AI agents, and real-world products. Co-Founder &amp; COO at XTICH.
              </p>
            </div>

            {/* Circular Avatar */}
            <div className="size-24 sm:size-28 rounded-full overflow-hidden bg-zinc-900 border border-white/10 shrink-0 shadow-lg flex items-center justify-center">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white/90">
                SM
              </span>
            </div>
          </div>
        </section>

        {/* ── 2. ABOUT SECTION ── */}
        <section id="about" className="mt-14 space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight">About</h2>
          <p className="text-[14px] sm:text-[15px] text-zinc-400 leading-relaxed">
            Computer Science Engineering student at{' '}
            <span className="text-zinc-200 underline underline-offset-4 decoration-zinc-600">
              Jain Institute of Technology, Davanagere
            </span>
            . Co-founded{' '}
            <a
              href="https://xtich.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-200 underline underline-offset-4 decoration-zinc-600 hover:text-white"
            >
              XTICH
            </a>
            , leading product development, brand identity, digital experiences, and operations. Also building{' '}
            <span className="text-zinc-200 underline underline-offset-4 decoration-zinc-600">
              Versity
            </span>
            , modernizing institutional uniform solutions. I explore software, AI, automation, and physical systems to turn ideas into real-world builds.
          </p>
        </section>

        {/* ── 3. GITHUB ACTIVITY SECTION ── */}
        <section id="github" className="mt-14 space-y-4">
          <h2 className="text-lg font-bold text-white tracking-tight">GitHub Activity</h2>
          <GitHubActivityGraph />
        </section>

        {/* ── 4. WORK EXPERIENCE SECTION ── */}
        <section id="experience" className="mt-14 space-y-5">
          <h2 className="text-lg font-bold text-white tracking-tight">Work Experience</h2>
          <div className="space-y-3">
            <ExperienceRow
              logo="/xtich-logo.png"
              company="XTICH"
              role="Co-Founder & COO"
              period="2025 - Present"
              description="Contemporary student apparel brand. Co-founded the venture, leading brand strategy, product design, website and digital presence, and day-to-day business operations."
              href="https://xtich.in"
            />
            <ExperienceRow
              logo="/versity-logo.png"
              company="Versity by XTICH"
              role="Co-Founder & COO"
              period="2025 - Present"
              description="B2B uniform solution modernizing traditional student apparel for schools and PU colleges through contemporary apparel design and supply chain."
              href="https://xtich.in"
            />
          </div>
        </section>

        {/* ── 5. EDUCATION SECTION ── */}
        <section id="education" className="mt-14 space-y-4">
          <h2 className="text-lg font-bold text-white tracking-tight">Education</h2>
          <div className="flex items-start justify-between gap-4 py-2">
            <div className="flex items-start gap-4">
              <div className="size-11 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden shrink-0">
                <span className="font-bold text-xs text-zinc-300">JIT</span>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white">Jain Institute of Technology, Davanagere</h3>
                <p className="text-[13px] text-zinc-400 mt-0.5">Bachelor of Engineering — Computer Science Engineering</p>
              </div>
            </div>
            <span className="text-[12px] text-zinc-500 font-mono shrink-0">2025 - 2029</span>
          </div>
        </section>

        {/* ── 6. SKILLS SECTION ── */}
        <section id="skills" className="mt-14 space-y-4">
          <h2 className="text-lg font-bold text-white tracking-tight">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-[12px] font-medium text-zinc-300 bg-[#131315] border border-white/[0.08] px-3 py-1.5 rounded-lg hover:border-white/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* ── 7. PROJECTS SECTION ── */}
        <section id="projects" className="mt-20 space-y-4">
          <div className="text-center space-y-2 mb-8">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-zinc-400 bg-white/[0.05] border border-white/[0.08] px-3.5 py-1 rounded-full">
              My Projects
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Check out my latest work
            </h2>
            <p className="text-[14px] text-zinc-400 max-w-md mx-auto">
              I've worked on a variety of projects, from simple websites to complex AI software systems and hardware builds.
            </p>
          </div>

          {/* 2-Column Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProjectCardItem
              title="XTICH"
              description="Student-focused contemporary apparel brand. Digital commerce, brand positioning, and community operations."
              tags={['E-Commerce', 'Brand Strategy', 'Web Dev', 'Operations']}
              href="https://xtich.in"
              image="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop&q=80"
            />
            <ProjectCardItem
              title="EchoVerse"
              description="Exploration into AI-powered personal memory and knowledge systems using vector search, embeddings, and autonomous agents."
              tags={['Python', 'LLMs', 'Vector DB', 'Embeddings']}
              href="https://github.com/shreyasMH26"
              image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80"
              isLive={false}
            />
            <ProjectCardItem
              title="MH AI Steering Wheel"
              description="Personal AI operating layer. Voice interaction, computer automation, tool calling, and macOS workflow automation."
              tags={['Python', 'Local LLMs', 'macOS', 'Automation']}
              href="https://github.com/shreyasMH26"
              image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80"
              isLive={false}
            />
            <ProjectCardItem
              title="SecureVault"
              description="Password management web application with client-side encryption, category organization, search, and local persistence."
              tags={['HTML', 'CSS', 'JavaScript', 'LocalStorage']}
              href="https://shreyasmh26.github.io/SecureVault/"
              image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80"
            />
            <ProjectCardItem
              title="IoT Laser Security"
              description="ESP8266-based intrusion detection hardware system transmitting real-time alerts via Telegram Bot API when interrupted."
              tags={['ESP8266', 'Arduino IDE', 'Telegram API', 'Hardware']}
              href="https://github.com/shreyasMH26"
              image="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80"
              isLive={false}
            />
            <ProjectCardItem
              title="Doubt System"
              description="Academic collaboration platform connecting students to resolve subject doubts with fast and streamlined navigation."
              tags={['HTML', 'CSS', 'JavaScript']}
              href="https://shreyasmh26.github.io/doubt-system/"
              image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80"
            />
          </div>
        </section>

        {/* ── 8. SOUNDTRACK SECTION (Apple Music AFTER 2:17) ── */}
        <section id="music" className="mt-20 space-y-4">
          <div className="text-center space-y-2 mb-6">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#FA243C] bg-[#FA243C]/10 border border-[#FA243C]/20 px-3.5 py-1 rounded-full">
              Soundtrack
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              AFTER 2:17
            </h2>
            <p className="text-[13px] text-zinc-400">
              Late night coding &amp; building playlist curated by Shreyas MH on Apple Music.
            </p>
          </div>

          <div className="bg-[#111113] rounded-2xl border border-white/[0.08] p-3 overflow-hidden">
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameBorder="0"
              height="175"
              style={{
                width: '100%',
                maxWidth: '100%',
                overflow: 'hidden',
                borderRadius: '12px',
                border: 'none',
              }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/in/playlist/after-2-17/pl.u-vxy6974T8y18pDo"
              title="AFTER 2:17 on Apple Music"
            />
          </div>
        </section>

        {/* ── 9. HACKATHONS / JOURNEY SECTION ── */}
        <section id="hackathons" className="mt-20 space-y-4">
          <div className="text-center space-y-2 mb-10">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-zinc-400 bg-white/[0.05] border border-white/[0.08] px-3.5 py-1 rounded-full">
              Building Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              I like building things
            </h2>
            <p className="text-[14px] text-zinc-400 max-w-md mx-auto">
              From early software experiments to founding real-world ventures and testing emerging AI models, here is what I've shipped.
            </p>
          </div>

          <div className="border-l border-transparent ml-2">
            <TimelineItem
              period="2026"
              title="MH AI Steering Wheel & Local AI Layer"
              location="Davanagere, Karnataka, India"
              description="Developed personal macOS AI operating layer investigating tool calling, speech interaction, and local LLM execution."
            />
            <TimelineItem
              period="2025"
              title="Co-Founded XTICH & Versity"
              location="Davanagere, Karnataka, India"
              description="Co-founded XTICH contemporary clothing brand, building e-commerce infrastructure, brand identity, and student community operations."
            />
            <TimelineItem
              period="2025"
              title="EchoVerse Knowledge Operating System"
              location="Davanagere, Karnataka, India"
              description="Architected personal knowledge platform leveraging vector databases, semantic search, and retrieval pipelines."
            />
            <TimelineItem
              period="2025"
              title="IoT Laser Security Hardware"
              location="Davanagere, Karnataka, India"
              description="Constructed hardware intrusion alert rig combining ESP8266 microcontrollers with cloud messaging bots."
            />
            <TimelineItem
              period="2025"
              title="Commenced Computer Science Engineering"
              location="Jain Institute of Technology, Davanagere"
              description="Began undergraduate studies in Computer Science and Engineering with a primary focus on software systems and artificial intelligence."
            />
          </div>
        </section>

        {/* ── 10. CONTACT SECTION (Textured Banner Card) ── */}
        <section id="contact" className="mt-20">
          <div className="text-center space-y-2 mb-8">
            <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-zinc-400 bg-white/[0.05] border border-white/[0.08] px-3.5 py-1 rounded-full">
              Contact
            </span>
          </div>

          <div
            className="rounded-2xl border border-white/[0.1] p-8 sm:p-12 text-center relative overflow-hidden bg-[#0d0d10]"
            style={{
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          >
            <div className="relative z-10 max-w-md mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Get in Touch
              </h2>
              <p className="text-[14px] text-zinc-400 leading-relaxed">
                Wanna chat? Let's talk products, AI, or collaborations! Drop an{' '}
                <a
                  href="mailto:adolfhitlerr26@gmail.com"
                  className="text-white font-semibold underline underline-offset-4 hover:text-blue-400 transition-colors"
                >
                  email
                </a>
                .
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* ── 11. FLOATING BOTTOM DOCK (Magic UI Style) ── */}
      <nav
        aria-label="Floating navigation dock"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 rounded-full bg-[#161619]/90 backdrop-blur-xl border border-white/[0.12] shadow-2xl"
      >
        {/* Home */}
        <a
          href="#hero"
          aria-label="Home"
          className="size-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
        >
          <Home size={17} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/shreyasMH26"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="size-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
        >
          <GithubIcon size={17} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/shreyasmh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="size-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
        >
          <LinkedinIcon size={17} />
        </a>

        {/* Twitter/X */}
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter / X"
          className="size-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
        >
          <TwitterXIcon size={17} />
        </a>

        {/* Projects */}
        <a
          href="#projects"
          aria-label="Projects"
          className="size-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
        >
          <Layers size={17} />
        </a>

        {/* Apple Music */}
        <a
          href="https://music.apple.com/in/playlist/after-2-17/pl.u-vxy6974T8y18pDo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Apple Music Playlist"
          className="size-9 rounded-full flex items-center justify-center text-[#FA243C] hover:bg-white/[0.08] transition-colors"
        >
          <Music size={17} />
        </a>

        <div className="w-px h-4 bg-white/10 mx-0.5" />

        {/* Bento Grid Switcher */}
        {onSwitchToBento && (
          <button
            onClick={onSwitchToBento}
            aria-label="Switch to Bento Grid View"
            title="Switch to Bento Grid Profile View"
            className="size-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            <LayoutGrid size={17} />
          </button>
        )}
      </nav>
    </div>
  );
}
