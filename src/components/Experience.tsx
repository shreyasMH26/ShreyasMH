import { useInView } from '../hooks/useInView';

interface ExperienceEntry {
  id: string;
  logoLetter: string;
  logoImage?: string;
  logoFrom: string;
  logoTo: string;
  role: string;
  company: string;
  companyNote?: string;
  date: string;
  websiteUrl?: string;
  websiteLabel?: string;
  description: string;
  responsibilities: string[];
  tags: string[];
}

const experiences: ExperienceEntry[] = [
  {
    id: 'xtich',
    logoLetter: 'X',
    logoImage: '/xtich-logo.png',
    logoFrom: 'from-zinc-700',
    logoTo: 'to-zinc-900',
    role: 'Co-Founder',
    company: 'XTICH',
    date: '2025 — Present',
    websiteUrl: 'https://xtich.in',
    websiteLabel: 'xtich.in ↗',
    description:
      'XTICH is a clothing brand focused on contemporary apparel for students and young communities. As Co-Founder & COO, I contribute to product development, brand strategy, digital presence, and overall business growth.',
    responsibilities: [
      'Co-founded XTICH',
      'Product planning and development',
      'Brand strategy and identity',
      'Website and digital presence',
      'Student-focused apparel and community engagement',
    ],
    tags: ['Entrepreneurship', 'Brand Strategy', 'Product Design', 'Web Development', 'Apparel'],
  },
  {
    id: 'versity',
    logoLetter: 'V',
    logoFrom: 'from-zinc-600',
    logoTo: 'to-zinc-800',
    role: 'Co-Founder & COO',
    company: 'Versity',
    companyNote: 'Sub-brand of XTICH',
    date: '2025 — Present',
    description:
      'Versity is a sub-brand of XTICH focused on modernizing traditional college uniforms through contemporary design, functionality, and student-centric apparel. As Co-Founder & COO, I lead the development of Versity, from product design to brand strategy, while ensuring it aligns with XTICH\'s vision.',
    responsibilities: [
      'Co-leading the development of Versity under XTICH',
      'Modernizing traditional college uniforms',
      'Product planning and apparel development',
      'Brand and product strategy',
      'Digital product and website development',
      'Student-focused design and community engagement',
    ],
    tags: ['Product Design', 'Apparel', 'Brand Strategy', 'Web Development', 'Student Commerce'],
  },
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

        {/* Experience Cards — stacked vertically */}
        <div className="flex flex-col gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative rounded-3xl border border-white/[0.07] bg-white/[0.018] p-7 sm:p-9 transition-all duration-500 hover:bg-white/[0.028] hover:border-emerald-500/20 hover:-translate-y-0.5 overflow-hidden"
            >
              {/* Ambient hover glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-emerald-500/[0.04] via-transparent to-transparent" />

              {/* ── Header Row ── */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5 mb-6">

                {/* Left: Logo + Role + Company + Date */}
                <div className="flex items-center gap-4">
                  {/* Logotype icon */}
                  <div
                    className={`relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${exp.logoFrom} ${exp.logoTo} border border-white/10 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300 overflow-hidden`}
                  >
                    {exp.logoImage ? (
                      <img
                        src={exp.logoImage}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-cover select-none"
                      />
                    ) : (
                      <span
                        className="text-white font-extrabold select-none leading-none"
                        style={{
                          fontSize: '20px',
                          letterSpacing: '-0.04em',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        {exp.logoLetter}
                      </span>
                    )}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div>
                    <h3
                      className="text-lg sm:text-xl font-bold leading-tight"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                      <p className="text-zinc-200 text-[14px] font-semibold">{exp.company}</p>
                      {exp.companyNote && (
                        <span className="text-zinc-500 text-[11px] font-medium px-2 py-0.5 rounded-full border border-white/[0.07] bg-white/[0.03]">
                          {exp.companyNote}
                        </span>
                      )}
                    </div>
                    <p className="text-zinc-500 text-[12px] mt-1">{exp.date}</p>
                  </div>
                </div>

                {/* Right: Active badge + Website link */}
                <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 flex-shrink-0">
                  {/* Active badge */}
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold uppercase tracking-wider">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    Active
                  </span>

                  {/* Website button (only if URL provided) */}
                  {exp.websiteUrl && (
                    <a
                      href={exp.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.09] text-zinc-300 text-[12px] font-semibold hover:bg-white hover:text-black hover:border-white transition-all duration-200"
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      {exp.websiteLabel}
                    </a>
                  )}
                </div>
              </div>

              {/* ── Divider ── */}
              <div className="border-t border-white/[0.055] mb-6" />

              {/* ── Description ── */}
              <p className="text-zinc-300 text-[14.5px] sm:text-[15px] leading-relaxed mb-7">
                {exp.description}
              </p>

              {/* ── Responsibilities ── */}
              <div className="mb-7">
                <div className="text-zinc-500 text-[10.5px] uppercase tracking-widest font-bold mb-3.5">
                  Responsibilities
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-zinc-300 text-[13.5px]">
                      <span className="mt-[7px] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── Tags ── */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold text-zinc-400 bg-white/[0.03] border border-white/[0.07] px-3 py-1 rounded-md hover:border-emerald-500/20 hover:text-emerald-300 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}