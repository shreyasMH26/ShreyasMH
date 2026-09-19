import Button from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export default function Hero() {
  const [ref, isInView] = useInViewAnimation<HTMLDivElement>(0.05);

  return (
    <section
      ref={ref}
      id="hero"
      className="w-full bg-white pt-12 md:pt-20 pb-12 flex flex-col items-center justify-center text-center px-6"
    >
      <div className="w-full max-w-[440px] mx-auto flex flex-col items-center">
        {/* 1. Logo / Name */}
        <h1
          className={`font-serif text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-[#051A24] tracking-tight mb-2 select-none ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          Shreyas MH
        </h1>

        {/* 2. Tagline (Monospace) */}
        <p
          className={`font-mono text-xs md:text-sm text-[#051A24] tracking-wide mb-6 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          CSE Student · Co-Founder @ XTICH
        </p>

        {/* 3. Main Heading */}
        <div
          className={`text-[32px] md:text-[40px] lg:text-[44px] leading-[1.15] text-[#0D212C] tracking-tight font-sans font-medium mb-6 select-none ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.3s' }}
        >
          <div>
            Build <span className="font-serif font-normal italic">things</span>,
          </div>
          <div className="whitespace-nowrap">
            the <span className="font-serif font-normal italic">bold way</span>.
          </div>
        </div>

        {/* 4. Description (Three Paragraphs) */}
        <div
          className={`flex flex-col gap-4 md:gap-5 text-sm md:text-base text-[#051A24] leading-relaxed text-center ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <p>
            I'm a Computer Science Engineering student building software, AI projects, and real-world products.
          </p>
          <p>
            I'm also a Co-Founder at XTICH, a B2C premium clothing brand, and I'm building Versity, a B2B venture focused on modernizing uniform solutions.
          </p>
          <p className="font-medium text-[#0D212C]">
            I like turning ideas into things that actually ship.
          </p>
        </div>

        {/* 5. CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-7 md:mt-8 w-full ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.5s' }}
        >
          <Button variant="primary" href="#projects" className="w-full sm:w-auto">
            View my work
          </Button>
          <Button variant="secondary" href="#contact" className="w-full sm:w-auto">
            Let's talk
          </Button>
        </div>
      </div>
    </section>
  );
}
