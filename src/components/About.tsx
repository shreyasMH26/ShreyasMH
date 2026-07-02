import { useInView } from '../hooks/useInView';

const personalityTraits = [
  'Curious learner',
  'Creative thinker',
  'Technology enthusiast',
  'Detail-oriented',
  'Fast learner',
  'Team player',
  'Consistent & self-motivated',
];

const interests = [
  'Artificial Intelligence',
  'Machine Learning',
  'Entrepreneurship',
'Startup Building',
'Brand Development',
'Product Strategy',
  'Software Development',
  'Full Stack Development',
  'Emerging Technologies',
  'Problem Solving',
  'UI/UX Design',
  'Automation',
  'IoT Projects',
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
        
        {/* Left Column (Bio & Goal) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="text-zinc-500 font-medium tracking-widest text-xs uppercase mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            01 // About Me
          </div>
          
         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
  Hi, I'm Shreyas MH. Building intelligent systems and student-first brands.
</h2>

          <div className="space-y-6 text-zinc-300 text-[16px] sm:text-[18px] leading-relaxed mt-8">
            <p>
              I'm Shreyas MH, a Computer Science Engineering student with a strong passion for building
              things that matter — from intelligent software systems to student-first brands. I work at
              the intersection of technology, creativity, and entrepreneurship.
            </p>

            <p>
              I enjoy building projects that combine creativity with technology — whether it's crafting
              clean web interfaces, experimenting with machine learning models, or building IoT systems
              that interact with the physical world.
            </p>

            <p className="flex flex-wrap items-center gap-2">
              Beyond software, I am the{' '}
              <a
                href="https://xtich.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 gradient-text font-bold hover:opacity-80 transition-opacity duration-200"
              >
                Co-Founder of XTICH
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold normal-case tracking-normal" style={{ background: 'none' }}>
                  ↗
                </span>
              </a>
              — a student-focused apparel and branding company helping communities express their identity
              through premium merchandise and custom branding solutions.
            </p>

            <p>
              Currently, I am focused on deepening my skills in React, TypeScript, Python, and AI/ML
              frameworks — with the long-term goal of building intelligent, impactful products that bridge
              technology and real-world needs.
            </p>
          </div>
        </div>

        {/* Right Column (Details, Skills/Interests tags) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
          
          {/* Mission & Education Details */}
          <div className="space-y-6">
            <div>
              <div className="text-zinc-500 text-[12px] uppercase tracking-widest font-semibold mb-1">Education</div>
              <p className="text-white text-[16px] font-medium">Bachelor of Engineering</p>
              <p className="text-zinc-400 text-[14px]">Computer Science Engineering</p>
            </div>

            <div>
              <div className="text-zinc-500 text-[12px] uppercase tracking-widest font-semibold mb-1">Location</div>
              <p className="text-white text-[16px] font-medium">Davanagere, Karnataka, India</p>
            </div>

            <div>
              <div className="text-zinc-500 text-[12px] uppercase tracking-widest font-semibold mb-1">Core Mission</div>
              <blockquote className="text-zinc-300 italic text-[15px] border-l border-zinc-700 pl-4 py-1">
               Build impactful technology products, grow XTICH into a recognized student brand, and create solutions that combine innovation, business, and technology.
              </blockquote>
            </div>
          </div>

          {/* Personality Traits */}
          <div>
            <div className="text-zinc-500 text-[12px] uppercase tracking-widest font-semibold mb-3">Personality</div>
            <div className="flex flex-wrap gap-2">
              {personalityTraits.map((trait) => (
                <span
                  key={trait}
                  className="bg-indigo-500/5 hover:bg-indigo-500/10 border border-indigo-500/10 hover:border-indigo-500/20 text-indigo-300 text-[13px] px-3.5 py-1.5 rounded-full transition-all duration-200 select-none"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <div className="text-zinc-500 text-[12px] uppercase tracking-widest font-semibold mb-3">Interests</div>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/10 hover:border-emerald-500/20 text-emerald-300 text-[13px] px-3.5 py-1.5 rounded-full transition-all duration-200 select-none"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
