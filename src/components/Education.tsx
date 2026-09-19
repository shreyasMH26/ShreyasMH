import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  const [ref, isInView] = useInViewAnimation<HTMLDivElement>(0.1);

  return (
    <section
      ref={ref}
      id="education"
      className="w-full bg-white py-14 md:py-20 px-6 border-t border-black/[0.05]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-8 md:mb-12">
          <span
            className={`text-xs md:text-sm font-mono uppercase tracking-widest text-[#273C46] mb-3 inline-block font-semibold ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            Academic
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#0D212C] ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <span className="font-serif italic font-normal">Education</span>
          </h2>
        </div>

        <div
          className={`p-8 sm:p-10 rounded-2xl md:rounded-3xl bg-zinc-50/70 border border-black/[0.05] flex flex-col md:flex-row md:items-center justify-between gap-6 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.3s' }}
        >
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-full bg-white border border-black/[0.08] flex items-center justify-center text-[#051A24] shrink-0 shadow-sm">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#051A24]">
                Jain Institute of Technology, Davanagere
              </h3>
              <p className="text-sm sm:text-base text-[#273C46] mt-1">
                Bachelor of Engineering — Computer Science Engineering
              </p>
              <p className="text-xs font-mono text-[#273C46] mt-2">
                Undergraduate Curriculum · Software Systems &amp; Computing
              </p>
            </div>
          </div>

          <div className="md:text-right shrink-0">
            <span className="text-xs font-mono font-medium text-[#051A24] bg-white border border-black/[0.08] px-4 py-1.5 rounded-full shadow-sm inline-block">
              Expected 2029
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
