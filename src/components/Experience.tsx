import { useInView } from '../hooks/useInView';

/* ─── XTICH data ─────────────────────────────────────────────── */
const xticResponsibilities = [
  'Co-founded XTICH from the ground up',
  'Product development and planning',
  'Brand strategy and creative direction',
  'Website and digital experiences',
  'Business experimentation and operations',
  'Student-focused product development',
];

const xtichSkills = [
  'Product Development',
  'Brand Strategy',
  'Creative Direction',
  'Web Development',
  'Business Development',
  'Entrepreneurship',
];

/* ─── Versity data ───────────────────────────────────────────── */
const versityResponsibilities = [
  'Co-leading Versity — a student-wear direction under XTICH',
  'Reimagining traditional college uniforms through contemporary product design',
  'Product planning and apparel development',
  'Brand and product strategy',
  'Digital product and website development',
  'Student-focused design and community engagement',
];

const versitySkills = [
  'Product Design',
  'Apparel',
  'Brand Strategy',
  'Web Development',
  'Student Commerce',
];

/* ─── Shared card component ──────────────────────────────────── */
interface ExperienceCardProps {
  emoji: string;
  badge: string;
  role: string;
  company: string;
  companyHref?: string;
  subtitle: string;
  period: string;
  siteLabel?: string;
  siteHref?: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  ctaLabel: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  onContactClick: () => void;
}

function ExperienceCard({
  emoji,
  badge,
  role,
  company,
  companyHref,
  subtitle,
  period,
  siteLabel,
  siteHref,
  description,
  responsibilities,
  skills,
  ctaLabel,
  ctaHref,
  onCtaClick,
  onContactClick,
}: ExperienceCardProps) {
  return (
    <div
      className="relative rounded-3xl overflow-hidden group transition-all duration-500 hover:-translate-y-1"
      style={{
        background: 'linear-gradient(135deg, rgba(129,140,248,0.06) 0%, rgba(52,211,153,0.04) 100%)',
        border: '1px solid rgba(129,140,248,0.25)',
        boxShadow: '0 0 60px -15px rgba(129,140,248,0.2)',
      }}
    >
      {/* Gradient top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(90deg, #818cf8 0%, #34d399 100%)' }}
      />

      {/* Ambient glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl"
        style={{ background: 'radial-gradient(ellipse at 30% 40%, rgba(129,140,248,0.08) 0%, transparent 60%)' }}
      />

      <div className="relative p-8 sm:p-10 lg:p-12">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10">
          <div className="flex items-start gap-5">
            {/* Icon */}
            <div
              className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(129,140,248,0.15) 0%, rgba(52,211,153,0.15) 100%)',
                border: '1px solid rgba(129,140,248,0.25)',
              }}
            >
              {emoji}
            </div>

            <div>
              {/* Badge */}
              <span
                className="inline-block text-[9px] font-black tracking-[0.18em] uppercase px-3 py-1 rounded-full mb-3"
                style={{
                  background: 'linear-gradient(135deg, rgba(129,140,248,0.2), rgba(52,211,153,0.2))',
                  border: '1px solid rgba(129,140,248,0.35)',
                  color: '#a5b4fc',
                }}
              >
                {badge}
              </span>

              {/* Role @ Company */}
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {role} @{' '}
                {companyHref ? (
                  <a
                    href={companyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gradient-text hover:opacity-80 transition-opacity"
                  >
                    {company}
                  </a>
                ) : (
                  <span className="gradient-text">{company}</span>
                )}
              </h3>

              <p className="text-zinc-400 text-[15px]">{subtitle}</p>
            </div>
          </div>

          {/* Period + site link */}
          <div className="flex flex-col items-start lg:items-end gap-2 lg:flex-shrink-0">
            <span
              className="text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-lg"
              style={{
                background: 'rgba(52,211,153,0.08)',
                border: '1px solid rgba(52,211,153,0.2)',
                color: '#34d399',
              }}
            >
              {period}
            </span>
            {siteLabel && siteHref && (
              <a
                href={siteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-zinc-500 hover:text-indigo-400 transition-colors underline underline-offset-2"
              >
                {siteLabel} ↗
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-zinc-300 text-[15px] sm:text-[16px] leading-relaxed mb-10 max-w-3xl">
          {description}
        </p>

        {/* Two-column: Responsibilities + Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

          {/* Responsibilities */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 mb-4">
              Responsibilities
            </h4>
            <ul className="space-y-2.5">
              {responsibilities.map((r) => (
                <li key={r} className="flex items-center gap-2.5 text-[14px] text-zinc-300">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #818cf8, #34d399)' }}
                  />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 mb-4">
              Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-[12px] font-semibold px-3 py-1.5 rounded-md transition-all duration-200 select-none"
                  style={{
                    background: 'rgba(129,140,248,0.08)',
                    border: '1px solid rgba(129,140,248,0.2)',
                    color: '#a5b4fc',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {ctaHref ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold text-black bg-white hover:bg-zinc-100 transition-all duration-200 shadow-md"
            >
              {ctaLabel}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          ) : (
            <button
              onClick={onCtaClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold text-black bg-white hover:bg-zinc-100 transition-all duration-200 shadow-md"
            >
              {ctaLabel}
            </button>
          )}

          <button
            onClick={onContactClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[14px] font-semibold text-white transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.08)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.03)'; }}
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────── */
export default function Experience() {
  const [ref, isInView] = useInView();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      id="experience"
      className={`relative z-20 bg-[#080808] text-white py-24 px-5 sm:px-8 md:px-12 section-reveal ${isInView ? 'visible' : ''}`}
    >
      <div className="max-w-5xl mx-auto w-full">

        {/* Section label */}
        <div
          className="text-zinc-500 font-medium tracking-widest text-xs uppercase mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          06 // Featured Experience
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-16"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Where Building <span className="gradient-text">Became Real</span>.
        </h2>

        {/* Cards stacked vertically */}
        <div className="flex flex-col gap-8">

          {/* Card 1 — XTICH */}
          <ExperienceCard
            emoji="🚀"
            badge="★ Primary Venture · Active"
            role="Co-Founder & COO"
            company="XTICH"
            companyHref="https://xtich.in"
            subtitle="Student-focused apparel and branding · 2025 – Present"
            period="2025 – Present"
            siteLabel="xtich.in"
            siteHref="https://xtich.in"
            description="XTICH is where product, brand, technology and business first intersected for me. I co-founded it, and it became the place where building stopped being theoretical. My work spans product development, brand strategy, digital experiences, creative direction and business operations — while pursuing my Computer Science Engineering degree."
            responsibilities={xticResponsibilities}
            skills={xtichSkills}
            ctaLabel="Visit XTICH"
            ctaHref="https://xtich.in"
            onContactClick={() => handleScrollTo('contact')}
          />

          {/* Card 2 — Versity by XTICH */}
          <ExperienceCard
            emoji="🎓"
            badge="★ Active · Under XTICH"
            role="Co-Founder & COO"
            company="Versity by XTICH"
            subtitle="A student-wear direction under XTICH · Contemporary College Uniforms"
            period="2025 – Present"
            description="Versity is a student-wear direction under XTICH, focused on reimagining traditional college uniforms through contemporary design, product thinking, and student-centric apparel. As Co-Founder & COO, I co-lead product strategy, brand development, and digital execution for Versity."
            responsibilities={versityResponsibilities}
            skills={versitySkills}
            ctaLabel="Learn About Versity"
            onCtaClick={() => handleScrollTo('contact')}
            onContactClick={() => handleScrollTo('contact')}
          />

        </div>
      </div>
    </section>
  );
}
