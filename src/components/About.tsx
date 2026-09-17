import { useInView } from '../hooks/useInView';

const traits = [
  'Builder',
  'Founder',
  'Experimenter',
  'Product thinker',
  'Technologist',
  'Self-starter',
  'Fast learner',
];

const focusAreas = [
  'Software Development',
  'AI & Automation',
  'Product Development',
  'Entrepreneurship',
  'Brand Strategy',
  'IoT & Hardware',
  'Full Stack Engineering',
  'LLM Applications',
];

export default function About() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      id="about"
      className={`relative z-20 min-h-screen bg-[#080808] text-white py-24 px-5 sm:px-8 md:px-12 flex items-center section-reveal ${
        isInView ? 'visible' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="text-zinc-500 font-medium tracking-widest text-xs uppercase mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            01 // About
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            I build <span className="gradient-text">products</span>,<br />
            not just <span className="gradient-text">code</span>.
          </h2>

          <div className="space-y-5 text-zinc-300 text-[16px] sm:text-[17px] leading-relaxed">
            <p>
              I'm Shreyas MH — a Computer Science Engineering student, founder, and builder interested in technology, products, and entrepreneurship.
            </p>

            <p>
              I started by building software and experimenting with technology. That curiosity expanded beyond code into product development, branding, business and entrepreneurship.
            </p>

            {/* XTICH founder card */}
            <div
              className="relative p-5 rounded-2xl border overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, rgba(129,140,248,0.04) 0%, rgba(52,211,153,0.04) 100%)',
                borderColor: 'rgba(129,140,248,0.2)',
                boxShadow: '0 0 30px -10px rgba(129,140,248,0.15)',
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: 'linear-gradient(135deg, rgba(129,140,248,0.06) 0%, rgba(52,211,153,0.06) 100%)' }}
              />
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">🚀</span>
                <div>
                  <p className="font-bold text-white mb-1">
                    Co-Founder & COO @{' '}
                    <a href="https://xtich.in" target="_blank" rel="noopener noreferrer"
                      className="gradient-text hover:opacity-80 transition-opacity">
                      XTICH
                    </a>
                  </p>
                  <p className="text-zinc-300 text-[15px]">
                    XTICH is where the intersection of product, brand, technology and business became real for me. I co-founded it, and today I lead product development, brand strategy, digital experiences and business operations.
                  </p>
                </div>
              </div>
            </div>

            <p>
              Today, I explore software, AI, automation and emerging technologies — while continuing to build products and ventures.
            </p>

            {/* Philosophy quote */}
            <blockquote
              className="border-l-2 pl-4 py-1 italic text-zinc-400 text-[15px]"
              style={{ borderColor: 'rgba(129,140,248,0.4)' }}
            >
              "Learn by building."
            </blockquote>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8">

          <div className="space-y-6">
            <div>
              <div className="text-zinc-500 text-[12px] uppercase tracking-widest font-semibold mb-1">Currently</div>
              <p className="text-white text-[16px] font-medium">Founder · Builder · CSE Student</p>
              <p className="text-zinc-400 text-[14px]">Building at the intersection of technology, AI & entrepreneurship</p>
            </div>

            <div>
              <div className="text-zinc-500 text-[12px] uppercase tracking-widest font-semibold mb-1">Venture</div>
              <a href="https://xtich.in" target="_blank" rel="noopener noreferrer"
                className="text-white text-[16px] font-medium hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                🚀 Co-Founder & COO @ XTICH ↗
              </a>
              <p className="text-zinc-400 text-[14px]">Student Apparel & Branding</p>
            </div>

            <div>
              <div className="text-zinc-500 text-[12px] uppercase tracking-widest font-semibold mb-1">Education</div>
              <p className="text-white text-[16px] font-medium">Bachelor of Engineering</p>
              <p className="text-zinc-400 text-[14px]">Computer Science Engineering</p>
            </div>

            <div>
              <div className="text-zinc-500 text-[12px] uppercase tracking-widest font-semibold mb-1">Location</div>
              <p className="text-white text-[16px] font-medium">Davanagere, Karnataka, India</p>
            </div>
          </div>

          {/* Traits */}
          <div>
            <div className="text-zinc-500 text-[12px] uppercase tracking-widest font-semibold mb-3">How I Work</div>
            <div className="flex flex-wrap gap-2">
              {traits.map((trait) => (
                <span
                  key={trait}
                  className="bg-indigo-500/5 hover:bg-indigo-500/10 border border-indigo-500/10 hover:border-indigo-500/20 text-indigo-300 text-[13px] px-3.5 py-1.5 rounded-full transition-all duration-200 select-none"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Focus Areas */}
          <div>
            <div className="text-zinc-500 text-[12px] uppercase tracking-widest font-semibold mb-3">Focus Areas</div>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/10 hover:border-emerald-500/20 text-emerald-300 text-[13px] px-3.5 py-1.5 rounded-full transition-all duration-200 select-none"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
