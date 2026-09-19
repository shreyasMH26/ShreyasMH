import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { useMouseTrail } from '../hooks/useMouseTrail';
import Button from './Button';

const trailImages = [
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&auto=format&fit=crop&q=80',
];

export default function PartnerSection() {
  const [ref, isInView] = useInViewAnimation<HTMLDivElement>(0.1);
  const { trail, handleMouseMove } = useMouseTrail(trailImages, 90);

  return (
    <section id="collaborate" className="w-full bg-white py-12 md:py-20 px-4 sm:px-6">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className={`max-w-7xl mx-auto py-24 sm:py-32 md:py-48 px-6 sm:px-12 rounded-[32px] sm:rounded-[40px] border border-black/[0.06] shadow-card bg-zinc-50/50 text-center relative overflow-hidden select-none ${
          isInView ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        {/* Floating cursor trail elements (desktop only) */}
        {trail.map((item) => (
          <div
            key={item.id}
            className="pointer-events-none absolute size-20 sm:size-24 rounded-xl overflow-hidden shadow-xl border border-white/60 z-0 transition-all duration-1000 ease-out animate-ping-once"
            style={{
              left: `${item.x - 48}px`,
              top: `${item.y - 48}px`,
              transform: `rotate(${item.rotation}deg) scale(0.95)`,
              opacity: 0.85,
            }}
          >
            <img src={item.image} alt="Build preview" className="size-full object-cover" />
          </div>
        ))}

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
