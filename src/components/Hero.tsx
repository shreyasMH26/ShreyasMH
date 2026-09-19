import Button from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export default function Hero() {
  const [ref, isInView] = useInViewAnimation<HTMLDivElement>(0.05);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative w-full min-h-[660px] md:min-h-[740px] pt-16 md:pt-24 pb-24 md:pb-32 flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-cover bg-[center_25%]"
      style={{
        backgroundImage: "url('/hero-bg.png')",
      }}
    >
      {/* Dark cinematic vignette overlay — balanced for photo richness and text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-[500px] mx-auto flex flex-col items-center">
        {/* 1. Logo / Name */}
        <h1
          className={`font-serif text-[34px] md:text-[42px] lg:text-[48px] font-semibold text-white tracking-tight mb-2 select-none drop-shadow-md ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          Shreyas MH
        </h1>

        {/* 2. Tagline (Monospace) */}
        <p
          className={`font-mono text-xs md:text-sm text-zinc-300 tracking-wide mb-6 drop-shadow-sm ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          CSE Student · Co-Founder @ XTICH
        </p>

        {/* 3. Main Heading */}
        <div
          className={`text-[32px] md:text-[42px] lg:text-[48px] leading-[1.15] text-white tracking-tight font-sans font-medium mb-6 select-none drop-shadow-md ${
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
          className={`flex flex-col gap-3.5 md:gap-4 text-sm md:text-base text-zinc-200 leading-relaxed text-center drop-shadow-sm ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <p>
            I build at the intersection of technology, AI, and entrepreneurship.
          </p>
          <p>
            Currently studying Computer Science Engineering while building XTICH and Versity.
          </p>
          <p className="font-medium text-white">
            From writing code to building businesses, I enjoy taking ideas from zero to something real.
          </p>
        </div>

        {/* 5. CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-8 md:mt-10 w-full ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.5s' }}
        >
          <Button
            variant="secondary"
            href="#projects"
            className="w-full sm:w-auto bg-white text-[#051A24] font-medium shadow-xl hover:bg-zinc-100"
          >
            View my work
          </Button>
          <Button
            variant="primary"
            href="#contact"
            className="w-full sm:w-auto bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 shadow-xl"
          >
            Let's talk
          </Button>
        </div>
      </div>

      {/* Smooth, feathered bottom fade into the white canvas */}
      <div className="absolute bottom-0 inset-x-0 h-28 md:h-36 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
    </section>
  );
}
