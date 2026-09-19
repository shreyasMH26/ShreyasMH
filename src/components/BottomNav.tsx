import Button from './Button';

export default function BottomNav() {
  return (
    <div
      aria-label="Floating Navigation"
      className="fixed bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 sm:gap-6 px-4 sm:px-7 py-2 rounded-full bg-white/95 backdrop-blur-xl border border-black/[0.06] shadow-dock select-none transition-all duration-300"
    >
      {/* Logo Monogram */}
      <a
        href="#hero"
        aria-label="Scroll to top"
        className="font-serif text-xl sm:text-2xl font-semibold text-[#051A24] tracking-tight hover:opacity-75 transition-opacity pr-1"
      >
        MH
      </a>

      <div className="w-px h-5 bg-black/[0.08]" />

      {/* Primary Action Button */}
      <Button
        variant="primary"
        href="mailto:adolfhitlerr26@gmail.com"
        className="text-xs sm:text-sm py-2 px-5 sm:px-6 shadow-sm"
      >
        Start a chat
      </Button>
    </div>
  );
}
