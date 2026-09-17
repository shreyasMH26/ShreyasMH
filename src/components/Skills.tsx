import { useInView } from '../hooks/useInView';

const skillCategories = [
  {
    title: 'Building',
    subtitle: 'What I make',
    skills: ['Software Development', 'Full Stack Engineering', 'Frontend Engineering', 'AI Applications', 'Web Products', 'Automation'],
    color: 'indigo',
    featured: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: 'AI / ML',
    subtitle: 'Exploring',
    skills: ['Machine Learning', 'Deep Learning', 'LLM Applications', 'AI Agents', 'Embeddings', 'Knowledge Graphs'],
    color: 'rose',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Technology',
    subtitle: 'Tools I use',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C', 'React', 'Tailwind CSS', 'Node.js', 'Git', 'GitHub', 'Vite'],
    color: 'emerald',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Hardware',
    subtitle: 'Physical layer',
    skills: ['ESP8266', 'ESP32', 'Arduino', 'IoT', 'Telegram Bot API'],
    color: 'amber',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'Product / Business',
    subtitle: 'XTICH experience',
    skills: ['Product Development', 'Brand Strategy', 'Branding', 'Business Development', 'Entrepreneurship', 'Creative Direction'],
    color: 'violet',
    featured: true,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const getColorStyles = (color: string) => {
  switch (color) {
    case 'indigo':
      return { badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20 hover:bg-indigo-500/25', text: 'text-indigo-400', glow: 'border-indigo-500/15 hover:border-indigo-500/40 group-hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.2)]' };
    case 'emerald':
      return { badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/25', text: 'text-emerald-400', glow: 'border-emerald-500/10 hover:border-emerald-500/35 group-hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.15)]' };
    case 'amber':
      return { badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20 hover:bg-amber-500/25', text: 'text-amber-400', glow: 'border-amber-500/10 hover:border-amber-500/35 group-hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.15)]' };
    case 'violet':
      return { badge: 'bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/25', text: 'text-violet-400', glow: 'border-violet-500/20 hover:border-violet-500/40 group-hover:shadow-[0_0_35px_-5px_rgba(139,92,246,0.25)]' };
    case 'rose':
    default:
      return { badge: 'bg-rose-500/10 text-rose-300 border-rose-500/20 hover:bg-rose-500/25', text: 'text-rose-400', glow: 'border-rose-500/10 hover:border-rose-500/35 group-hover:shadow-[0_0_25px_-5px_rgba(244,63,94,0.15)]' };
  }
};

export default function Skills() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      id="skills"
      className={`relative z-20 bg-[#060606] text-white py-24 px-5 sm:px-8 md:px-12 section-reveal ${isInView ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto w-full">

        <div className="text-zinc-500 font-medium tracking-widest text-xs uppercase mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          02 // Toolkit
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
            I use technology to <span className="gradient-text">build things</span>.
          </h2>
          <p className="text-zinc-500 text-[14px] max-w-xs md:text-right leading-relaxed">
            Technology is the tool. Building is the story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const styles = getColorStyles(category.color);
            return (
              <div
                key={category.title}
                className={`group p-6 rounded-2xl bg-white/[0.015] border transition-all duration-300 hover:bg-white/[0.03] ${styles.glow}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {category.featured && (
                  <div
                    className="absolute -top-px left-4 right-4 h-[2px] rounded-full"
                    style={{ background: 'linear-gradient(90deg, #818cf8, #34d399)' }}
                  />
                )}

                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-lg bg-white/[0.02] border border-white/5 transition-all duration-300 group-hover:scale-110 ${styles.text}`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[15px]" style={{ fontFamily: 'var(--font-heading)' }}>
                      {category.title}
                    </h3>
                    {category.subtitle && (
                      <p className="text-zinc-600 text-[11px] uppercase tracking-wider">{category.subtitle}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className={`text-xs font-semibold px-3 py-1.5 rounded-md border transition-all duration-200 select-none ${styles.badge}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
