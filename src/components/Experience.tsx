import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    role: 'Co-Founder & COO',
    company: 'XTICH',
    period: '2025 — Present',
    badge: 'Venture',
    description:
      'Building a B2C premium clothing brand focused on student culture, product, branding and digital experiences. Leading brand strategy, e-commerce platform development, and business operations.',
    skills: ['Product Planning', 'Brand Strategy', 'Web Development', 'Digital Commerce', 'Operations'],
    link: 'https://xtich.in',
    logo: '/xtich-logo.png',
  },
  {
    role: 'Co-Building',
    company: 'Versity by XTICH',
    period: 'Current',
    badge: 'B2B Venture',
    description:
      'A B2B venture focused on modernizing uniform solutions for schools and PU colleges through contemporary apparel design, institutional fulfillment, and digital ordering.',
    skills: ['B2B Solutions', 'Apparel Design', 'Supply Chain', 'Institutional Sales'],
    link: 'https://xtich.in',
    logo: '/versity-logo.png',
  },
];

export default function Experience() {
  const [ref, isInView] = useInViewAnimation<HTMLDivElement>(0.1);

  return (
    <section
      ref={ref}
      id="experience"
      className="w-full bg-white py-16 md:py-24 px-6 border-t border-black/[0.05]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <span
            className={`text-xs md:text-sm font-mono uppercase tracking-widest text-[#273C46] mb-3 inline-block font-semibold ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            Track Record
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#0D212C] ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <span className="font-serif italic font-normal">Experience</span> &amp; Ventures
          </h2>
        </div>

        {/* Experience List */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={exp.company}
              className={`p-8 sm:p-10 rounded-2xl md:rounded-3xl bg-zinc-50/70 border border-black/[0.05] hover:border-black/[0.12] transition-all duration-300 group ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.2 + idx * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full overflow-hidden bg-white border border-black/[0.08] flex items-center justify-center p-1.5 shrink-0 shadow-sm">
                    <img src={exp.logo} alt={exp.company} className="size-full object-contain" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#273C46] uppercase tracking-wider block">
                      {exp.role}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#051A24] flex items-center gap-2">
                      {exp.company}
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#273C46] hover:text-[#051A24] transition-colors"
                          aria-label={`Visit ${exp.company} website`}
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      )}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3 md:self-center">
                  <span className="text-xs font-mono text-[#273C46] px-3 py-1 rounded-full bg-white border border-black/[0.06] shadow-sm">
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#273C46] leading-relaxed max-w-3xl mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-black/[0.04]">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono text-[#051A24] bg-white border border-black/[0.06] px-3 py-1 rounded-md"
                  >
                    {skill}
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
