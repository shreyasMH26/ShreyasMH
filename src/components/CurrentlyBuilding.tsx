import { useInViewAnimation } from '../hooks/useInViewAnimation';

const activeBuilds = [
  {
    title: 'XTICH',
    status: 'BUILDING',
    statusColor: 'bg-emerald-500',
    description: 'B2C premium clothing brand focused on student culture, product design, and digital commerce.',
  },
  {
    title: 'EchoVerse',
    status: 'EXPLORING',
    statusColor: 'bg-indigo-500',
    description: 'Personal memory and knowledge graph system using embeddings, vector retrieval, and autonomous agents.',
  },
  {
    title: 'MH AI Steering Wheel',
    status: 'EXPERIMENT',
    statusColor: 'bg-amber-500',
    description: 'Personal macOS AI layer exploring local LLMs, speech control, and native computer automation.',
  },
  {
    title: 'AI / ML Experiments',
    status: 'EXPLORING',
    statusColor: 'bg-indigo-500',
    description: 'Investigating lightweight local models, agent tool execution, and contextual search pipelines.',
  },
];

export default function CurrentlyBuilding() {
  const [ref, isInView] = useInViewAnimation<HTMLDivElement>(0.1);

  return (
    <section
      ref={ref}
      id="currently-building"
      className="w-full bg-white py-16 md:py-24 px-6 border-t border-black/[0.05]"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10 md:mb-14">
          <span
            className={`text-xs md:text-sm font-mono uppercase tracking-widest text-[#273C46] mb-3 inline-block font-semibold ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            Live Radar
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#0D212C] ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Currently <span className="font-serif italic font-normal">building</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeBuilds.map((item, idx) => (
            <div
              key={item.title}
              className={`p-7 rounded-2xl bg-zinc-50/70 border border-black/[0.05] hover:border-black/[0.12] transition-all duration-300 flex flex-col justify-between ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <h3 className="text-xl font-serif font-semibold text-[#051A24]">
                    {item.title}
                  </h3>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono font-semibold uppercase px-2.5 py-0.5 rounded-full bg-white border border-black/[0.06] text-[#051A24] shadow-sm shrink-0">
                    <span className={`size-1.5 rounded-full ${item.statusColor} animate-pulse`} />
                    {item.status}
                  </span>
                </div>

                <p className="text-sm text-[#273C46] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
