import { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const TYPEWRITER_TEXT =
  'Full Stack Developer & AI/ML Enthusiast • Co-Founder & COO at XTICH • Building Modern Apparel & Software • CSE Student';

export default function Hero() {
  const { displayed, done } = useTypewriter({
    text: TYPEWRITER_TEXT,
    speed: 24,
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
          Hi, I’m Shreyas MH.
        </h1>

        {/* Subtle Co-Founder Achievement Badge */}
        <div
          className="mb-4"
          style={{
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s',
          }}
        >
          <a
            href="https://xtich.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black/6 border border-black/12 text-black/75 rounded-full text-[12px] px-4 py-1.5 font-semibold hover:bg-black/10 hover:text-black transition-all duration-200 select-none"
            id="hero-xtich-badge"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Co-Founder &amp; COO @ XTICH ↗
          </a>
        </div>

        {/* 1. Blurred intro label / Subheading */}
        <div
          className="pointer-events-none select-none mb-5 sm:mb-6"
          style={{
            fontSize: 'clamp(14px, 2.5vw, 18px)',
            lineHeight: 1.35,
            fontWeight: 500,
            color: '#000',
            filter: 'blur(4px)',
          }}
          aria-hidden="true"
        >
          Shreyas M Holeyache • Full Stack Developer • Co-Founder &amp; COO at XTICH • AI/ML Enthusiast
        </div>

        {/* 2. Typewriter text */}
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

        {/* 3. Action pill buttons */}
        <div
          className="flex flex-wrap gap-2 items-center"
          style={{
            opacity: pillsVisible ? 1 : 0,
            transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.4s ease, transform 0.4s ease',
          }}
        >
          {/* Scroll Pills */}
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
            Contact Me
          </button>
        </div>
      </div>

      {/* Fade overlay at the bottom to transition to #080808 */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-t from-[#080808] to-transparent z-10"
      />
    </section>
  );
}
