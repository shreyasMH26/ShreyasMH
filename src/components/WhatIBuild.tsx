import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Laptop, Cpu, Rocket, Wrench } from 'lucide-react';

const pillars = [
  {
    num: '01',
    title: 'Software',
    description: 'Web applications, developer tools and digital products built with focus on clean architecture and real usability.',
    icon: Laptop,
  },
  {
    num: '02',
    title: 'AI',
    description: 'AI/ML experiments, intelligent systems, local model execution, voice interfaces, and autonomous agent workflows.',
    icon: Cpu,
  },
  {
    num: '03',
    title: 'Startups',
    description: 'Co-founding XTICH from the ground up, scaling direct-to-consumer digital commerce, product strategy, and brand operations.',
    icon: Rocket,
  },
  {
    num: '04',
    title: 'Experiments',
    description: 'Hardware, automation, unconventional projects and things I build just to see if they work.',
    icon: Wrench,
  },
];

export default function WhatIBuild() {
  const [ref, isInView] = useInViewAnimation<HTMLDivElement>(0.1);

  return (
    <section
      ref={ref}
      id="what-i-build"
      className="w-full bg-white py-16 md:py-24 px-6 border-t border-black/[0.05]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <span
            className={`text-xs md:text-sm font-mono uppercase tracking-widest text-[#273C46] mb-3 inline-block font-semibold ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            Capabilities
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#0D212C] ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            What I <span className="font-serif italic font-normal">build</span>
          </h2>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className={`p-7 sm:p-8 rounded-2xl bg-zinc-50/70 border border-black/[0.04] hover:border-black/[0.12] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between ${
                  isInView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-sm font-semibold text-[#273C46]">
                      {item.num}
                    </span>
                    <div className="size-9 rounded-full bg-white border border-black/[0.06] flex items-center justify-center text-[#051A24] group-hover:scale-110 transition-transform">
                      <Icon size={16} />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#051A24] mb-3">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-[#273C46] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
