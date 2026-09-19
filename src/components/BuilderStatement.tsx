import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Quote } from 'lucide-react';

export default function BuilderStatement() {
  const [ref, isInView] = useInViewAnimation<HTMLDivElement>(0.1);

  return (
    <section
      ref={ref}
      id="builder-statement"
      className="w-full bg-white py-20 md:py-32 px-6 border-t border-black/[0.05]"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Quote Icon */}
        <div
          className={`size-12 rounded-full bg-zinc-50 border border-black/[0.06] flex items-center justify-center mx-auto mb-8 text-[#051A24] ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          <Quote size={20} className="fill-[#051A24]" />
        </div>

        {/* Section Label */}
        <span
          className={`text-xs md:text-sm font-mono uppercase tracking-widest text-[#273C46] mb-4 inline-block font-semibold ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.15s' }}
        >
          What I'm building toward
        </span>

        {/* Large Quote */}
        <blockquote
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#0D212C] leading-[1.25] mb-8 select-none ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.25s' }}
        >
          "I want to keep building things that are{' '}
          <span className="font-serif italic font-normal">useful</span>,{' '}
          <span className="font-serif italic font-normal">interesting</span>, and a little{' '}
          <span className="font-serif italic font-normal">different</span>."
        </blockquote>

        {/* Author */}
        <p
          className={`text-base font-serif italic text-[#051A24] mb-4 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.35s' }}
        >
          Shreyas MH
        </p>

        {/* Pillar Tags */}
        <div
          className={`flex items-center justify-center gap-3 text-xs font-mono text-[#273C46] ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.45s' }}
        >
          <span>Software</span>
          <span className="size-1 rounded-full bg-zinc-300" />
          <span>AI</span>
          <span className="size-1 rounded-full bg-zinc-300" />
          <span>Startups</span>
        </div>
      </div>
    </section>
  );
}
