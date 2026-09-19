import { useInViewAnimation } from '../hooks/useInViewAnimation';

export default function About() {
  const [ref, isInView] = useInViewAnimation<HTMLDivElement>(0.1);

  return (
    <section
      ref={ref}
      id="about"
      className="w-full bg-white py-16 md:py-24 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Label */}
        <span
          className={`text-xs md:text-sm font-mono uppercase tracking-widest text-[#273C46] mb-4 inline-block font-semibold ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          About
        </span>

        {/* Main Statement */}
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#0D212C] leading-[1.2] mb-8 select-none ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          I'm a CSE student who likes{' '}
          <span className="font-serif font-normal italic">building things</span>.
        </h2>

        {/* Narrative */}
        <div
          className={`space-y-5 text-base sm:text-lg text-[#051A24] leading-relaxed max-w-2xl mx-auto ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.3s' }}
        >
          <p>
            I'm interested in software, AI, automation, startups, and the process of turning an idea into something people can actually use.
          </p>
          <p className="text-[#273C46]">
            Beyond writing code, I co-founded{' '}
            <strong className="text-[#051A24] font-semibold">XTICH</strong> to build a contemporary student apparel brand from scratch, focusing on product design, university culture, and direct-to-consumer digital commerce.
          </p>
          <p className="text-sm sm:text-base font-mono text-[#273C46]">
            Based in Davanagere, Karnataka, India · Always learning by building.
          </p>
        </div>
      </div>
    </section>
  );
}
