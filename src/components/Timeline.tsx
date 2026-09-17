import { useInView } from '../hooks/useInView';

const milestones = [
  {
    year: '2025',
    title: 'Started Computer Science Engineering',
    desc: 'Began formal academic training in algorithms, systems, and software engineering.',
    isFuture: false,
    isHighlight: false,
  },
  {
    year: '2025',
    title: 'Started Building Software',
    desc: 'Built first web projects — learning by doing, shipping early, and experimenting with different technologies.',
    isFuture: false,
    isHighlight: false,
  },
  {
    year: '2025',
    title: 'Built SecureVault',
    desc: 'A local-first password manager built with HTML, CSS and JavaScript — early experimentation with security and UX.',
    isFuture: false,
    isHighlight: false,
  },
  {
    year: '2025',
    title: 'Built IoT Laser Security System',
    desc: 'Integrated ESP8266, laser modules, and Telegram Bot API for real-time remote intrusion detection — hardware meets software.',
    isFuture: false,
    isHighlight: false,
  },
  {
    year: '🚀 2025',
    title: 'Co-Founded XTICH',
    desc: 'Co-founded XTICH — a student-focused apparel and branding startup. Product development, brand strategy, digital presence, and building from zero. The intersection of product, brand, technology and business became real here.',
    isFuture: false,
    isHighlight: true,
  },
  {
    year: '2025–Present',
    title: 'Building XTICH & Exploring Product Development',
    desc: 'Actively working on XTICH and Versity by XTICH — product planning, brand strategy, digital execution, and student-focused product development.',
    isFuture: false,
    isHighlight: false,
  },
  {
    year: '2026',
    title: 'Deepened Focus on AI & Machine Learning',
    desc: 'Shifted focus toward machine learning, deep learning, and AI systems — moving from building web software to building intelligent systems.',
    isFuture: false,
    isHighlight: false,
  },
  {
    year: '2026',
    title: 'Exploring AI-Powered Products & Agents',
    desc: 'Started experimenting with LLMs, embeddings, AI agents, and automation — exploring what products could emerge from these technologies.',
    isFuture: false,
    isHighlight: false,
  },
  {
    year: '2026',
    title: 'Building EchoVerse',
    desc: 'Exploring AI-powered personal memory and knowledge systems — an idea-stage product investigation using agents, embeddings and knowledge graphs.',
    isFuture: false,
    isHighlight: false,
  },
  {
    year: '2026',
    title: 'Building MH AI Steering Wheel',
    desc: 'Experimenting with a personal AI operating layer — local AI, voice interaction, computer automation and macOS workflows.',
    isFuture: false,
    isHighlight: false,
  },
  {
    year: 'Future',
    title: 'Building products at the intersection of technology and entrepreneurship',
    desc: 'Continue building products, experimenting with AI, and growing ventures — as a founder, builder and technologist.',
    isFuture: true,
    isHighlight: false,
  },
];

export default function Timeline() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      id="timeline"
      className={`relative z-20 bg-[#060606] text-white py-24 px-5 sm:px-8 md:px-12 section-reveal ${isInView ? 'visible' : ''}`}
    >
      <div className="max-w-4xl mx-auto w-full">

        <div className="text-zinc-500 font-medium tracking-widest text-xs uppercase mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          05 // Journey
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-16" style={{ fontFamily: 'var(--font-heading)' }}>
          How I've <span className="gradient-text">Built</span> so far.
        </h2>

        <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-8">
          {milestones.map((item, index) => {
            if (item.isHighlight) {
              return (
                <div key={index} className="relative" style={{ transitionDelay: `${index * 80}ms` }}>
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-500" />
                  </span>

                  <div
                    className="relative p-5 sm:p-6 rounded-2xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(129,140,248,0.05) 0%, rgba(52,211,153,0.05) 100%)',
                      border: '1px solid rgba(129,140,248,0.3)',
                      boxShadow: '0 0 40px -10px rgba(129,140,248,0.2)',
                    }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: 'linear-gradient(90deg, #818cf8, #34d399)' }} />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2.5 py-0.5 rounded">
                          {item.year}
                        </span>
                        <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          FEATURED
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                      <span className="gradient-text">Co-Founded XTICH</span>
                    </h3>
                    <p className="text-zinc-300 text-sm sm:text-[14px] leading-relaxed">{item.desc}</p>
                    <a
                      href="https://xtich.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      Visit XTICH ↗
                    </a>
                  </div>
                </div>
              );
            }

            if (item.isFuture) {
              return (
                <div key={index} className="relative opacity-65 hover:opacity-100 transition-opacity duration-300" style={{ transitionDelay: `${index * 80}ms` }}>
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-dashed border-indigo-400 bg-[#060606]">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  </span>
                  <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.005] border border-dashed border-white/10 hover:border-indigo-500/20 transition-all duration-300">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2.5 py-0.5 rounded">{item.year}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1.5" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                    <p className="text-zinc-500 text-xs sm:text-[13.5px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            }

            return (
              <div key={index} className="relative" style={{ transitionDelay: `${index * 80}ms` }}>
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500" />
                </span>
                <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.015] border border-white/5 hover:border-emerald-500/15 transition-all duration-300">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded">{item.year}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-1.5" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                  <p className="text-zinc-400 text-xs sm:text-[13.5px] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
