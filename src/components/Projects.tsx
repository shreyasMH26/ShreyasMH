import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { ArrowUpRight } from 'lucide-react';

/* ── Inline Github Icon ── */
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

interface ProjectData {
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  statusBadge?: string;
  badgeColor?: string;
}

const projectsList: ProjectData[] = [
  {
    number: '01',
    title: 'XTICH Website & Platform',
    category: 'E-Commerce / Brand Platform',
    description:
      'Digital storefront and brand platform for XTICH, a student-focused contemporary clothing brand. Designed for seamless product presentation, brand identity, and smooth community commerce with modern web architecture.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Digital Commerce', 'Brand Strategy'],
    liveUrl: 'https://xtich.in',
    statusBadge: 'Active Venture',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
  },
  {
    number: '02',
    title: 'EchoVerse',
    category: 'AI Knowledge Operating System',
    description:
      'An exploration into AI-powered personal memory and knowledge systems. EchoVerse investigates how autonomous AI agents can understand, surface, and connect information semantically through vector retrieval and intelligent graph structures.',
    tech: ['Python', 'LLMs', 'Embeddings', 'Vector DB', 'Semantic Search', 'Agent Workflows'],
    githubUrl: 'https://github.com/shreyasMH26',
    statusBadge: 'Exploring',
    badgeColor: 'bg-indigo-500/10 text-indigo-700 border-indigo-500/20',
  },
  {
    number: '03',
    title: 'MH AI Steering Wheel',
    category: 'Personal AI Operating Layer',
    description:
      'An experiment in building my own personal AI operating layer. Exploring local AI execution, voice interaction, computer automation, and macOS workflows — reimagining what personal computing feels like with AI as the central interaction paradigm.',
    tech: ['Python', 'Local LLMs', 'macOS Automation', 'Voice Interaction', 'Scripting'],
    githubUrl: 'https://github.com/shreyasMH26',
    statusBadge: 'Experiment',
    badgeColor: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
  },
  {
    number: '04',
    title: 'SecureVault',
    category: 'Local-First Security Software',
    description:
      'A password management application with password generation, categorization, search, and local storage persistence. A software build focused on usability, reliability, and local-first client encryption without third-party surveillance.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage', 'Client Encryption'],
    githubUrl: 'https://github.com/shreyasMH26',
    statusBadge: 'Shipped Tool',
    badgeColor: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
  },
  {
    number: '05',
    title: 'IoT Laser Security Rig',
    category: 'Hardware & Embedded IoT',
    description:
      'A physical security system built around an ESP8266 microcontroller and a laser tripwire sensor. Engineered to detect perimeter breaches and trigger instant automated alert notifications through a custom Telegram bot.',
    tech: ['ESP8266', 'C++', 'IoT Sensors', 'Telegram Bot API', 'Embedded Hardware'],
    githubUrl: 'https://github.com/shreyasMH26',
    statusBadge: 'Hardware Build',
    badgeColor: 'bg-orange-500/10 text-orange-700 border-orange-500/20',
  },
  {
    number: '06',
    title: 'Doubt System',
    category: 'Student Academic Platform',
    description:
      'A community question-and-answer platform for students to ask, answer, and discuss academic doubts collaboratively. Features question categorization, threaded answers, and a clean interface built to remove friction in peer learning.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    githubUrl: 'https://github.com/shreyasMH26',
    statusBadge: 'Shipped App',
    badgeColor: 'bg-teal-500/10 text-teal-700 border-teal-500/20',
  },
];

function ProjectCard({ project, index }: { project: ProjectData; index: number }) {
  const [ref, isInView] = useInViewAnimation<HTMLDivElement>(0.1);

  return (
    <div
      ref={ref}
      className={`p-8 sm:p-12 md:p-14 rounded-3xl bg-zinc-50/70 border border-black/[0.06] hover:border-black/[0.14] transition-all duration-300 ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      {/* Top Header: Index Number & Status Badge */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-6 border-b border-black/[0.05]">
        <span className="font-mono text-xs sm:text-sm text-[#273C46] tracking-wider font-semibold">
          {project.number} / {project.category}
        </span>

        {project.statusBadge && (
          <span
            className={`text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full border ${
              project.badgeColor || 'bg-black/5 text-[#051A24] border-black/10'
            }`}
          >
            {project.statusBadge}
          </span>
        )}
      </div>

      {/* Project Title */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold tracking-tight text-[#0D212C] mb-4">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-base sm:text-lg text-[#273C46] leading-relaxed max-w-3xl mb-8">
        {project.description}
      </p>

      {/* Bottom Bar: Tech Stack Tags & Action Links */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-black/[0.04]">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono text-[#051A24] bg-white border border-black/[0.08] px-3 py-1 rounded-md shadow-2xs"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 text-sm font-medium text-[#051A24]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:underline underline-offset-4 font-semibold text-[#051A24]"
            >
              <span>Live Platform</span>
              <ArrowUpRight size={15} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:underline underline-offset-4 text-[#273C46] hover:text-[#051A24]"
            >
              <GithubIcon size={15} />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [headerRef, isHeaderInView] = useInViewAnimation<HTMLDivElement>(0.1);

  return (
    <section
      id="projects"
      className="w-full bg-white py-16 md:py-28 px-6 border-t border-black/[0.05]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mb-14 md:mb-20 ${isHeaderInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <span className="text-xs md:text-sm font-mono uppercase tracking-widest text-[#273C46] mb-3 inline-block font-semibold">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#0D212C] mb-4">
            Selected <span className="font-serif italic font-normal">work</span>
          </h2>
          <p className="text-base sm:text-lg text-[#273C46] max-w-xl">
            Things I've built, shipped, experimented with, or am currently exploring.
          </p>
        </div>

        {/* Stack of Clean Editorial Project Cards */}
        <div className="space-y-8 md:space-y-10">
          {projectsList.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
