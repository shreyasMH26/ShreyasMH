interface MarqueeCardData {
  title: string;
  category: string;
  badge: string;
  bgGradient: string;
  accent: string;
  description: string;
}

const marqueeItems: MarqueeCardData[] = [
  {
    title: 'XTICH',
    category: 'B2C Clothing Brand',
    badge: 'Co-Founder & COO',
    bgGradient: 'from-[#051A24] via-[#0D212C] to-[#163647]',
    accent: '#34d399',
    description: 'Contemporary student apparel brand designed for university culture and everyday confidence.',
  },
  {
    title: 'EchoVerse',
    category: 'AI Knowledge Operating System',
    badge: 'AI Exploration',
    bgGradient: 'from-[#0d1b2a] via-[#1b263b] to-[#2e4057]',
    accent: '#818cf8',
    description: 'Personal memory and knowledge graph system using vector search and autonomous agents.',
  },
  {
    title: 'Versity',
    category: 'B2B Uniform Solutions',
    badge: 'Co-Building',
    bgGradient: 'from-[#0b1d28] via-[#102d3f] to-[#1b435b]',
    accent: '#38bdf8',
    description: 'Modernizing student uniforms for educational institutions through contemporary apparel design.',
  },
  {
    title: 'MH AI Steering Wheel',
    category: 'Personal AI Operating Layer',
    badge: 'AI Experiment',
    bgGradient: 'from-[#1a1423] via-[#2d1e38] to-[#402a4d]',
    accent: '#f472b6',
    description: 'Experimental desktop intelligence layer combining local LLMs, speech control, and macOS automation.',
  },
  {
    title: 'SecureVault',
    category: 'Local-First Password Manager',
    badge: 'Shipped Tool',
    bgGradient: 'from-[#0f1d18] via-[#162e26] to-[#1f453a]',
    accent: '#4ade80',
    description: 'Client-side encrypted vault with password generator, categorisation, and local persistence.',
  },
  {
    title: 'IoT Laser Security',
    category: 'Hardware & Embedded IoT',
    badge: 'Hardware Build',
    bgGradient: 'from-[#24130d] via-[#3d1f14] to-[#542918]',
    accent: '#fb923c',
    description: 'ESP8266 microcontroller intrusion detection rig with laser tripwire and Telegram notifications.',
  },
  {
    title: 'Doubt System',
    category: 'Student Academic Platform',
    badge: 'Shipped App',
    bgGradient: 'from-[#0a1a1f] via-[#102932] to-[#18404d]',
    accent: '#2dd4bf',
    description: 'Academic doubt exchange enabling students to submit and resolve queries with zero friction.',
  },
];

export default function Marquee() {
  // Duplicate array to achieve seamless infinite loop
  const duplicatedItems = [...marqueeItems, ...marqueeItems];

  return (
    <section className="w-full overflow-hidden bg-white mt-8 md:mt-12 mb-16 md:mb-24 py-4 select-none">
      <div className="animate-marquee flex gap-5 md:gap-6 will-change-transform">
        {duplicatedItems.map((item, idx) => (
          <div
            key={`${item.title}-${idx}`}
            className={`w-[280px] sm:w-[340px] md:w-[400px] lg:w-[440px] h-[300px] sm:h-[360px] md:h-[400px] shrink-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-card border border-black/[0.06] relative group flex flex-col justify-between p-7 md:p-9 bg-gradient-to-br ${item.bgGradient} transition-transform duration-500 hover:-translate-y-1`}
          >
            {/* Top Bar: Badge & Accent Status Indicator */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[11px] md:text-xs font-mono font-medium tracking-wider uppercase px-3 py-1 rounded-full bg-white/10 text-white/90 backdrop-blur-md border border-white/10">
                {item.badge}
              </span>
              <span className="size-2.5 rounded-full shadow-sm" style={{ backgroundColor: item.accent }} />
            </div>

            {/* Bottom Content: Category, Title & Description */}
            <div className="relative z-10 mt-auto">
              <span className="text-[11px] md:text-xs font-mono text-zinc-300 uppercase tracking-wider block mb-1.5 font-medium">
                {item.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-2.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 line-clamp-3 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
