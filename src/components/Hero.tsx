import { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const TYPEWRITER_TEXT =
  'I build products, experiment with technology, and turn ideas into real-world ventures.';

export default function Hero() {
  const { displayed, done } = useTypewriter({
    text: TYPEWRITER_TEXT,
    speed: 26,
    startDelay: 600,
  });

  const [pillsVisible, setPillsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPillsVisible(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative z-[1] h-screen flex flex-col justify-end md:justify-center pb-20 md:pb-0 px-5 sm:px-8 md:px-10 overflow-hidden"
      aria-label="Hero"
    >
      <div className="max-w-2xl relative z-10">
        {/* Name Heading */}
        <h1
          className="text-black mb-3 select-none leading-none tracking-tight animate-[fadeSlideUp_0.5s_ease_out]"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(44px, 8vw, 84px)',
            fontWeight: 800,
          }}
        >
          Hi, I'm Shreyas MH.
        </h1>

        {/* Blurred identity lines */}
        <div
          className="pointer-events-none select-none mb-5 sm:mb-6 space-y-1"
          style={{
            fontSize: 'clamp(13px, 2.2vw, 17px)',
            lineHeight: 1.4,
            fontWeight: 500,
            filter: 'blur(4px)',
          }}
          aria-hidden="true"
        >
          <div className="text-black">Founder · Builder · Computer Science Engineer</div>
          {/* XTICH highlight — visible even through blur */}
          <div
            style={{
              background: 'linear-gradient(135deg, #818cf8 0%, #34d399 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 700,
              fontSize: 'clamp(14px, 2.5vw, 19px)',
            }}
          >
            Co-Founder & COO @ XTICH
          </div>
        </div>

        {/* Typewriter text */}
        <p
          className="text-black mb-6 sm:mb-8 font-medium"
          style={{
            fontSize: 'clamp(16px, 3.5vw, 21px)',
            lineHeight: 1.4,
            minHeight: '64px',
          }}
          aria-label={TYPEWRITER_TEXT}
        >
          {displayed}
          {!done && (
            <span
              className="cursor-blink inline-block w-[2px] bg-black align-middle ml-[2px]"
              style={{ height: '1.1em' }}
              aria-hidden="true"
            />
          )}
        </p>

        {/* Action pill buttons */}
        <div
          className="flex flex-wrap gap-2 items-center"
          style={{
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          <button
            onClick={() => handleScrollTo('projects')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[14px] px-5 py-2 whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-sm font-semibold"
          >
            View Projects
          </button>

          <button
            onClick={() => handleScrollTo('resume')}
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[14px] px-5 py-2 whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-sm font-semibold"
          >
            Download Resume
          </button>

          <a
            href="https://github.com/shreyasMH26"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[14px] px-5 py-2 whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-sm font-semibold"
          >
            GitHub ↗
          </a>

          <button
            onClick={() => handleScrollTo('contact')}
            className="inline-flex items-center justify-center text-white bg-black/85 border border-black/15 rounded-full text-[13px] sm:text-[14px] px-5 py-2 whitespace-nowrap hover:bg-white hover:text-black hover:border-black/20 transition-all duration-200 cursor-pointer shadow-md font-semibold"
          >
            Let's Build
          </button>
        </div>
      </div>

      {/* Fade overlay → dark sections */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-t from-[#080808] to-transparent z-10"
      />
    </section>
  );
}
