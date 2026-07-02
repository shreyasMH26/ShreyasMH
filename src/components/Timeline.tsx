import { useInView } from '../hooks/useInView';

const milestones = [
  {
    year: '2025',
    title: 'Started Computer Science Engineering',
    desc: 'Began the formal academic foundation in algorithms, system structures, and software engineering methodologies.',
  },{
  year: '2025',
  title: 'Co-Founded XTICH',
  desc: 'Co-founded XTICH, a student-focused apparel and branding startup. Leading product strategy, brand development, website presence, and student community growth.',
  isHighlight: true,
},
{
  year: '2025',
  title: 'Launched XTICH Website',
  desc: 'Designed and launched xtich.in to establish the brand’s online presence and connect with students across campuses.',
},
  {
    year: '2025',
    title: 'Built Multiple Web Development Projects',
    desc: 'Learned HTML, CSS, JavaScript, and React to create responsive and modern web interfaces.',
  },
  {
    year: '2025',
    title: 'Created SecureVault Password Manager',
    desc: 'Designed an interactive security dashboard for managing passwords locally with cryptographic tools and local storage.',
  },
  {
    year: '2025',
    title: 'Developed IoT Laser Security System',
    desc: 'Integrated ESP8266, laser modules, and physical sensors with the Telegram Bot API for real-time remote alerts.',
  },
  {
    year: '2025',
    title: 'Built Premium Personal Portfolio',
    desc: 'Created an agency-inspired cinematic portfolio with React, TypeScript, Vite, and video interaction mechanics.',
  },
  {
    year: '2025',
    title: 'Started Learning Artificial Intelligence & Machine Learning',
    desc: 'Began training models, studying deep learning frameworks, neural networks, data analysis pipelines, and TensorFlow.',
  },
  {
    year: 'Future',
    title: 'AI/ML Engineer',
    desc: 'Aspiring to bridge machine learning theory and software development to build smart products and automate solutions.',
    isFuture: true,
  },
];

export default function Timeline() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      id="timeline"
      className={`relative z-20 bg-[#060606] text-white py-24 px-5 sm:px-8 md:px-12 flex items-center section-reveal ${
        isInView ? 'visible' : ''
      }`}
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Title */}
        <div className="text-zinc-500 font-medium tracking-widest text-xs uppercase mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          04 // Timeline
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-16" style={{ fontFamily: 'var(--font-heading)' }}>
          My <span className="gradient-text">Journey</span>.
        </h2>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-10">
          
          {milestones.map((item, index) => {
            // Future goal item
            if (item.isFuture) {
              return (
                <div
                  key={index}
                  className="relative opacity-70 hover:opacity-100 transition-opacity duration-300"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-dashed border-indigo-400 bg-[#060606]">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  </span>
                  <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.005] border border-dashed border-white/10 hover:border-indigo-500/20 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2.5 py-0.5 rounded">
                          {item.year}
                        </span>
                        <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-zinc-500 text-xs sm:text-[13.5px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            }

            // ✦ Key Milestone — visually highlighted
            if (item.isHighlight) {
              return (
                <div
                  key={index}
                  className="relative"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {/* Gold star dot */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 shadow-[0_0_10px_2px_rgba(245,158,11,0.5)]">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </span>

                  <div className="p-5 sm:p-7 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20 hover:border-amber-500/35 hover:bg-amber-500/[0.07] transition-all duration-300 shadow-[0_0_30px_-8px_rgba(245,158,11,0.12)]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest bg-amber-500/15 px-2.5 py-0.5 rounded">
                          {item.year}
                        </span>
                        <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                          {item.title}
                        </h3>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-bold uppercase tracking-wider flex-shrink-0">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        Key Milestone
                      </span>
                    </div>
                    <p className="text-zinc-300 text-xs sm:text-[14px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            }

            // Standard milestone
            return (
              <div
                key={index}
                className="relative"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500" />
                </span>
                <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.015] border border-white/5 hover:border-emerald-500/15 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                        {item.title}
                      </h3>
                    </div>
                  </div>
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
