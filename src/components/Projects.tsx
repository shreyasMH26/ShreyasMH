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
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  statusBadge?: string;
}

const projectsList: ProjectData[] = [
  {
    title: 'XTICH Website & Platform',
    category: 'E-Commerce / Brand',
    description:
      'Digital storefront and brand platform for XTICH, a student-focused contemporary clothing brand. Designed for seamless product presentation, brand identity, and smooth community commerce.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Digital Commerce', 'Brand Strategy'],
    image: '/hero-bg.png',
    liveUrl: 'https://xtich.in',
    statusBadge: 'Active Venture',
  },
  {
    title: 'EchoVerse',
    category: 'AI Knowledge Operating System',
    description:
      'An exploration into AI-powered personal memory and knowledge systems. EchoVerse investigates how AI agents can understand, surface, and connect information in ways that feel meaningful — an idea with product potential.',
    tech: ['Python', 'LLMs', 'Embeddings', 'Vector DB', 'Semantic Search'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    githubUrl: 'https://github.com/shreyasMH26',
    statusBadge: 'Exploring',
  },
  {
    title: 'MH AI Steering Wheel',
    category: 'Personal AI Layer',
    description:
      'An experiment in building my own personal AI operating layer. Exploring local AI execution, speech interaction, computer automation and macOS workflows — a look at what personal computing could look like with AI as the interface.',
    tech: ['Python', 'Local LLMs', 'macOS', 'Voice Interaction', 'Automation'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&auto=format&fit=crop&q=80',
    githubUrl: 'https://github.com/shreyasMH26',
    statusBadge: 'Experiment',
  },
  {
    title: 'SecureVault',
    category: 'Security Software',
    description:
      'A password management application with password generation, categorization, search, and local storage persistence. A software build focused on usability and local-first security without third-party surveillance.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage', 'Client Encryption'],
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&auto=format&fit=crop&q=80',
    liveUrl: 'https://shreyasmh26.github.io/SecureVault/',
    githubUrl: 'https://github.com/shreyasMH26',
    statusBadge: 'Shipped',
  },
  {
    title: 'Doubt System',
    category: 'Academic Web App',
    description:
      'A student-focused platform for doubt-solving and academic collaboration. A web build exploring how simple interfaces can improve learning workflows and eliminate barriers between questions and answers.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&auto=format&fit=crop&q=80',
    liveUrl: 'https://shreyasmh26.github.io/doubt-system/',
    githubUrl: 'https://github.com/shreyasMH26',
    statusBadge: 'Shipped',
  },
  {
    title: 'IoT Laser Security System',
    category: 'Hardware & Automation',
    description:
      'An ESP8266-based intrusion detection system that sends real-time Telegram alerts when a laser beam is interrupted. An early experiment combining hardware microcontrollers, networking, and automation.',
    tech: ['ESP8266', 'Arduino IDE', 'Hardware', 'Telegram Bot API'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80',
    githubUrl: 'https://github.com/shreyasMH26',
    statusBadge: 'Completed',
  },
];

function ProjectItem({ project }: { project: ProjectData }) {
  const [ref, isInView] = useInViewAnimation<HTMLDivElement>(0.1);

  return (
    <div
      ref={ref}
      className={`space-y-6 transition-all duration-700 ${
        isInView ? 'animate-fade-in-up' : 'opacity-0'
      }`}
    >
      {/* Offset Text Block */}
      <div className="ml-0 sm:ml-8 md:ml-16 max-w-2xl">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-mono uppercase tracking-wider text-[#273C46]">
            {project.category}
          </span>
          {project.statusBadge && (
            <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-zinc-100 border border-black/[0.06] text-[#051A24]">
              {project.statusBadge}
            </span>
          )}
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#051A24] tracking-tight mb-3">
          {project.title}
        </h3>

        <p className="text-sm sm:text-base text-[#273C46] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack & Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs font-mono text-[#051A24] bg-zinc-50 border border-black/[0.06] px-2.5 py-1 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 text-sm font-medium text-[#051A24]">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline underline-offset-4"
              >
                <span>Live Project</span>
                <ArrowUpRight size={14} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:underline underline-offset-4 text-[#273C46] hover:text-[#051A24]"
              >
                <GithubIcon size={14} />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Full-width Image Card */}
      <div className="w-full h-[300px] sm:h-[420px] md:h-[520px] rounded-2xl md:rounded-3xl overflow-hidden shadow-card border border-black/[0.06] relative group bg-[#051A24]">
        <img
          src={project.image}
          alt={project.title}
          className="size-full object-cover group-hover:scale-102 transition-transform duration-700 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
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
          className={`mb-16 md:mb-24 ${isHeaderInView ? 'animate-fade-in-up' : 'opacity-0'}`}
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

        {/* Vertical Stack of Showcase Items */}
        <div className="space-y-20 md:space-y-32">
          {projectsList.map((project) => (
            <ProjectItem key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
