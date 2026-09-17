import { useInView } from '../hooks/useInView';

const projects = [
  {
    title: 'EchoVerse',
    category: 'AI Exploration',
    status: 'Exploring',
    description: 'An exploration into AI-powered personal memory and knowledge systems. EchoVerse investigates how AI agents can understand, surface, and connect information in ways that feel meaningful — an idea with product potential.',
    features: ['AI agents', 'Personal knowledge systems', 'Semantic search', 'Embeddings', 'Knowledge graphs', 'Timeline generation', 'Contextual insights'],
    tech: ['Python', 'LLMs', 'Embeddings', 'Vector DB'],
    gradient: 'from-violet-500 to-indigo-400',
    githubUrl: 'https://github.com/shreyasMH26',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'MH AI Steering Wheel',
    category: 'AI Experiment',
    status: 'Experimenting',
    description: 'An experiment in building my own personal AI operating layer. Exploring local AI, voice interaction, computer automation and macOS workflows — a look at what personal computing could look like with AI as the interface.',
    features: ['Local AI', 'Voice interaction', 'Computer automation', 'macOS workflows', 'AI agents', 'Tool execution'],
    tech: ['Python', 'Local LLMs', 'macOS', 'Automation'],
    gradient: 'from-rose-500 to-pink-400',
    githubUrl: 'https://github.com/shreyasMH26',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'SecureVault',
    category: 'Software',
    description: 'A password management application with password generation, organization, search, and local storage. A software build focused on usability and local-first security.',
    features: ['Password generator', 'Password categories', 'Search & filtering', 'Local storage persistence', 'Responsive dashboard'],
    tech: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    gradient: 'from-indigo-500 to-sky-400',
    demoUrl: 'https://shreyasmh26.github.io/SecureVault/',
    githubUrl: 'https://github.com/shreyasMH26',
    icon: (
      <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'IoT Laser Security System',
    category: 'Hardware',
    status: 'Completed',
    description: 'An ESP8266-based intrusion detection system that sends real-time Telegram alerts when a laser beam is interrupted. An early experiment combining hardware, networking, and automation.',
    features: ['Real-time intrusion detection', 'Telegram bot integration', 'WiFi connectivity', 'Instant notifications', 'Continuous monitoring'],
    tech: ['ESP8266', 'Arduino IDE', 'Telegram Bot API'],
    gradient: 'from-amber-500 to-orange-400',
    githubUrl: 'https://github.com/shreyasMH26',
    icon: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: 'Doubt System',
    category: 'Web App',
    description: 'A student-focused platform for doubt-solving and academic collaboration. A web build exploring how simple interfaces can improve learning workflows.',
    features: ['Question submission system', 'Student-friendly interface', 'Responsive design', 'Fast navigation', 'Modern UI'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-emerald-500 to-teal-400',
    demoUrl: 'https://shreyasmh26.github.io/doubt-system/',
    githubUrl: 'https://github.com/shreyasMH26',
    icon: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Projects() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      id="projects"
      className={`relative z-20 bg-[#080808] text-white py-24 px-5 sm:px-8 md:px-12 flex items-center section-reveal ${
        isInView ? 'visible' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto w-full">

        <div className="text-zinc-500 font-medium tracking-widest text-xs uppercase mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          03 // Selected Builds
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Things I've <span className="gradient-text">Built</span>.
          </h2>
          <p className="text-zinc-400 text-[15px] max-w-sm mt-4 md:mt-0">
            From software to hardware to AI — ideas become real through building.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl bg-white/[0.015] border border-white/5 p-6 transition-all duration-300 hover:bg-white/[0.03] hover:border-white/10 hover:-translate-y-1 flex flex-col justify-between"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Highlight Gradient Hover Border */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${project.gradient} -z-10 blur-xl`} />

              <div>
                {/* Header */}
                <div className="flex justify-between items-start mb-5">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 px-2.5 py-1 rounded-full bg-white/[0.02] border border-white/5">
                    {project.status || project.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold mb-2.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all duration-300" style={{ fontFamily: 'var(--font-heading)' }}>
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-[13.5px] leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Features / Topics */}
                <div className="mb-5">
                  <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">
                    {project.status === 'Exploring' || project.status === 'Experimenting' ? 'Exploring' : 'Features'}
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center text-xs text-zinc-400 gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer / Tech & Links */}
              <div>
                <div className="flex flex-wrap gap-1 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10.5px] text-zinc-300 bg-white/[0.02] border border-white/5 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 border-t border-white/5 pt-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                    >
                      <span>Live Demo ↗</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-300 hover:text-indigo-400 transition-colors duration-200"
                    >
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
