interface MarqueeCardData {
  title: string;
  category: string;
  badge: string;
  bgGradient: string;
  textColor: string;
  accent: string;
  description: string;
  image?: string;
}

const marqueeItems: MarqueeCardData[] = [
  {
    title: 'XTICH',
    category: 'B2C Clothing Brand',
    badge: 'Co-Founder & COO',
    bgGradient: 'from-[#051A24] via-[#0D212C] to-[#122b3a]',
    textColor: 'text-white',
    accent: '#34d399',
    description: 'Contemporary student apparel brand designed for university culture and everyday confidence.',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'EchoVerse',
    category: 'AI Knowledge Operating System',
    badge: 'AI Exploration',
    bgGradient: 'from-[#0d1b2a] via-[#1b263b] to-[#415a77]',
    textColor: 'text-white',
    accent: '#818cf8',
    description: 'Personal memory and knowledge graph system using vector search and autonomous agents.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'Versity',
    category: 'B2B Uniform Solutions',
    badge: 'Co-Building',
    bgGradient: 'from-[#0b1d28] via-[#102d3f] to-[#1a415a]',
    textColor: 'text-white',
    accent: '#38bdf8',
    description: 'Modernizing student uniforms for educational institutions through contemporary apparel design.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'MH AI Steering Wheel',
    category: 'Personal AI Operating Layer',
    badge: 'AI Experiment',
    bgGradient: 'from-[#1a1423] via-[#2d1e38] to-[#3d2645]',
    textColor: 'text-white',
    accent: '#f472b6',
    description: 'Experimental desktop intelligence layer combining local LLMs, speech control, and macOS automation.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'SecureVault',
    category: 'Local-First Password Manager',
    badge: 'Shipped Tool',
    bgGradient: 'from-[#0f1d18] via-[#162e26] to-[#1e4237]',
    textColor: 'text-white',
    accent: '#4ade80',
    description: 'Client-side encrypted vault with password generator, categorisation, and local persistence.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'IoT Laser Security',
    category: 'Hardware & Embedded IoT',
    badge: 'Hardware Build',
    bgGradient: 'from-[#24130d] via-[#3d1f14] to-[#592d1c]',
    textColor: 'text-white',
    accent: '#fb923c',
    description: 'ESP8266 microcontroller intrusion detection rig with laser tripwire and Telegram notifications.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
  },
  {
    title: 'Doubt System',
    category: 'Student Academic Platform',
    badge: 'Shipped App',
    bgGradient: 'from-[#0a1a1f] via-[#102932] to-[#173b47]',
    textColor: 'text-white',
    accent: '#2dd4bf',
    description: 'Academic doubt exchange enabling students to submit and resolve queries with zero friction.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
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
            className="w-[280px] sm:w-[340px] md:w-[420px] lg:w-[460px] h-[340px] sm:h-[420px] md:h-[500px] shrink-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-card border border-black/[0.05] relative group flex flex-col justify-between p-6 md:p-8 bg-[#051A24]"
          >
            {/* Background image preview with dark gradient overlay */}
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 size-full object-cover opacity-35 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700 pointer-events-none"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#051A24] via-[#051A24]/70 to-transparent pointer-events-none" />

            {/* Top Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[11px] md:text-xs font-mono font-medium tracking-wider uppercase px-3 py-1 rounded-full bg-white/10 text-white/90 backdrop-blur-md border border-white/10">
                {item.badge}
              </span>
              <span className="size-2 rounded-full" style={{ backgroundColor: item.accent }} />
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 mt-auto">
              <span className="text-[11px] md:text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                {item.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-2 line-clamp-2 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
