import { useInViewAnimation } from '../hooks/useInViewAnimation';

const skillGroups = [
  {
    category: 'Development',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'Node.js'],
  },
  {
    category: 'Programming',
    items: ['Python', 'C'],
  },
  {
    category: 'AI & Intelligent Systems',
    items: ['Local LLMs', 'Vector Databases', 'Semantic Search', 'Embeddings', 'Prompt Engineering'],
  },
  {
    category: 'Hardware & Engineering Tools',
    items: ['Arduino', 'ESP8266', 'Git', 'GitHub', 'REST APIs', 'Telegram Bot API'],
  },
];

export default function Skills() {
  const [ref, isInView] = useInViewAnimation<HTMLDivElement>(0.1);

  return (
    <section
      ref={ref}
      id="skills"
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
            Technical Stack
          </span>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#0D212C] ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Core <span className="font-serif italic font-normal">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, idx) => (
            <div
              key={group.category}
              className={`p-6 sm:p-7 rounded-2xl bg-zinc-50/70 border border-black/[0.04] flex flex-col justify-between ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div>
                <span className="text-xs font-mono text-[#273C46] uppercase tracking-wider block mb-4 font-medium">
                  {group.category}
                </span>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono text-[#051A24] bg-white border border-black/[0.07] px-3 py-1.5 rounded-lg shadow-sm font-normal"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
