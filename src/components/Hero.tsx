import Button from './Button';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

export default function Hero() {
  const [ref, isInView] = useInViewAnimation<HTMLDivElement>(0.05);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative w-full min-h-[660px] md:min-h-[740px] pt-16 md:pt-24 pb-20 md:pb-28 flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero-bg.png')",
      }}
    >
      {/* Dark cinematic vignette overlay for contrast and legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80 backdrop-blur-[1px] pointer-events-none" />

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
          className={`flex flex-col gap-4 md:gap-5 text-sm md:text-base text-zinc-200 leading-relaxed text-center drop-shadow-sm ${
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
          <p className="font-medium text-white">
            I like turning ideas into things that actually ship.
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

      {/* Smooth bottom fade into the white canvas */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
