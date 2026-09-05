import { useInView } from '../hooks/useInView';

const projects = [
  {
  title: "XTICH",
  category: "Startup & Branding",
  description:
    "Student-focused apparel and branding startup co-founded to help students and communities build identity through premium merchandise and custom apparel.",
  features: [
    "Premium student merchandise",
    "Custom apparel solutions",
    "Brand identity development",
    "Website & digital presence"
  ],
  tech: ["React", "Branding", "Business Strategy", "Startup"],
  gradient: 'from-zinc-400 to-zinc-200',
  demoUrl: 'https://xtich.in',
  githubUrl: 'https://xtich.in',
  link: "https://xtich.in",
  featured: true,
  icon: (
    <img
      src="/xtich-logo.png"
      alt="XTICH logo"
      className="w-6 h-6 object-cover rounded-md select-none"
    />
  ),
},
{
    title: 'Doubt System',
    category: 'Educational Platform',
    description: 'A student-focused platform designed to simplify doubt-solving and academic collaboration. Built to help students ask questions, share knowledge, and improve learning efficiency through an intuitive interface.',
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
  {
    title: 'SecureVault Password Manager',
    category: 'Cybersecurity',
    description: 'A secure password management application that helps users generate, organize, and store passwords efficiently through a clean dashboard interface.',
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
    title: 'Personal Portfolio Website',
    category: 'Web Dev / UI Design',
    description: 'A premium interactive portfolio inspired by modern creative agencies. Features cinematic video interactions, smooth animations, responsive layouts, and a professional presentation of projects and skills.',
    features: ['Interactive hero section', 'Responsive design', 'Cinematic video background', 'Smooth animations', 'Modern UI/UX'],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    gradient: 'from-violet-500 to-purple-400',
    demoUrl: 'https://shreyasmh-portfolio-1.onrender.com',
    githubUrl: 'https://github.com/shreyasMH26',
    icon: (
      <svg className="w-6 h-6 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'IoT Laser Security System',
    category: 'IoT & Hardware',
    status: 'Completed Project',
    description: 'An ESP8266-based smart security solution capable of detecting laser beam interruptions and sending real-time Telegram alerts to users.',
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
    title: 'AI & Machine Learning Journey',
    category: 'Research & ML',
    status: 'Learning & Building',
    description: 'Currently exploring Artificial Intelligence and Machine Learning through hands-on projects, experimentation, and continuous learning.',
    features: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Data Analysis', 'TensorFlow'],
    tech: ['Python', 'TensorFlow', 'Scikit-Learn', 'Pandas'],
    gradient: 'from-rose-500 to-pink-400',
    githubUrl: 'https://github.com/shreyasMH26',
    icon: (
      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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
        
        {/* Title */}
        <div className="text-zinc-500 font-medium tracking-widest text-xs uppercase mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          03 // Portfolio
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            Featured <span className="gradient-text">Projects</span>.
          </h2>
          <p className="text-zinc-400 text-[15px] max-w-sm mt-4 md:mt-0">
            A selection of projects exploring IoT integration, AI/ML, and premium web design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl bg-white/[0.015] border border-white/5 p-6 transition-all duration-300 hover:bg-white/[0.03] hover:border-white/10 hover:-translate-y-1 flex flex-col justify-between"
              style={{
                transitionDelay: `${index * 120}ms`
              }}
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

                {/* Features list */}
                <div className="mb-5">
                  <h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">
                    {project.status === 'Learning & Building' ? 'Learning Topics' : 'Key Features'}
                  </h4>
                  <ul className="space-y-1">
                   {project.features?.map((feature) => (
                      <li key={feature} className="flex items-center text-xs text-zinc-400 gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/60" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer / Tech list & Action links */}
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

                {/* Link Buttons */}
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
