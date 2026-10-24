import { useInViewAnimation } from '../hooks/useInViewAnimation';
import Button from './Button';

export default function PartnerSection() {
  const [ref, isInView] = useInViewAnimation<HTMLDivElement>(0.1);

  return (
    <section id="collaborate" className="w-full bg-white py-12 md:py-20 px-4 sm:px-6">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto py-24 sm:py-32 md:py-44 px-6 sm:px-12 rounded-[32px] sm:rounded-[40px] border border-black/[0.06] shadow-card bg-zinc-50/70 text-center relative overflow-hidden select-none ${
          isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-xs md:text-sm font-mono uppercase tracking-widest text-[#273C46] mb-4 inline-block font-semibold">
            Collaboration
          </span>

          <h2 className="font-serif text-[44px] sm:text-[60px] md:text-[76px] lg:text-[84px] font-semibold text-[#0D212C] leading-[1.08] tracking-tight mb-6 sm:mb-8">
            Let's build <span className="italic font-normal">something</span>.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#273C46] max-w-xl mx-auto leading-relaxed mb-10 sm:mb-12">
            Have an idea, project, collaboration, or something worth building? Let's talk.
          </p>

          <div className="flex justify-center">
            <Button variant="primary" href="#contact" className="text-base px-9 py-4">
              Start a conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
