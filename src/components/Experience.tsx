import { useInView } from '../hooks/useInView';

const responsibilities = [
  'Co-founded the company from the ground up',
  'Product planning and go-to-market strategy',
  'Brand identity development and visual design',
  'Website design and digital presence management',
  'Student community engagement and outreach',
];

export default function Experience() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      id="experience"
      className={`relative z-20 bg-[#080808] text-white py-24 px-5 sm:px-8 md:px-12 section-reveal ${
        isInView ? 'visible' : ''
      }`}
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Label */}
        <div
          className="text-zinc-500 font-medium tracking-widest text-xs uppercase mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          02 // Experience
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-16"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Professional <span className="gradient-text">Experience</span>.
        </h2>

        {/* Featured Founder Card */}
        <div className="group relative rounded-3xl border border-white/8 bg-white/[0.018] p-8 sm:p-10 transition-all duration-500 hover:bg-white/[0.03] hover:border-emerald-500/20 hover:-translate-y-1 overflow-hidden">

          {/* Ambient glow on hover */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent" />

          {/* Top Row: Logo + Meta */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">

            {/* Left: Icon + Title */}
            <div className="flex items-center gap-5">
              {/* XTICH Logotype Icon */}
              <div className="relative flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-900 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <span
                  className="text-white font-extrabold tracking-tight select-none"
                  style={{ fontSize: '22px', letterSpacing: '-0.04em', fontFamily: 'var(--font-heading)' }}
                >
                  X
                </span>
                {/* Subtle corner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div>
                <h3
                  className="text-xl sm:text-2xl font-bold leading-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Co-Founder
                </h3>
                <p className="text-zinc-300 text-[15px] font-medium mt-0.5">XTICH</p>
                <p className="text-zinc-500 text-[13px] mt-0.5">2025 — Present</p>
              </div>
            </div>

            {/* Right: Badges + Link */}
            <div className="flex flex-col items-start sm:items-end gap-3">
              {/* Active Status Badge */}
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[12px] font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Active
              </span>

              {/* Website Button */}
              <a
                href="https://xtich.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-300 text-[13px] font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-250 group/btn"
                id="experience-xtich-link"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                xtich.in ↗
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/[0.06] mb-7" />

          {/* Company Description */}
          <p className="text-zinc-300 text-[15.5px] leading-relaxed mb-8 max-w-2xl">
            XTICH is a student-focused apparel and branding startup building modern college merchandise,
            custom clothing, and identity-driven products for students and communities. As Co-Founder,
            I lead strategy, brand development, and digital presence for the brand.
          </p>

          {/* Responsibilities */}
          <div className="mb-8">
            <div className="text-zinc-500 text-[11px] uppercase tracking-widest font-bold mb-4">
              Responsibilities
            </div>
            <ul className="space-y-2.5">
              {responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-zinc-300 text-[14px]">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech/Domain Tags */}
          <div className="flex flex-wrap gap-2">
            {['Entrepreneurship', 'Brand Strategy', 'Product Design', 'Web Development', 'Student Commerce'].map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-semibold text-emerald-300 bg-emerald-500/8 border border-emerald-500/15 px-3 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}