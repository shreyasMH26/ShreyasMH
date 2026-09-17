import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Timeline', id: 'timeline' },
  { name: 'Experience', id: 'experience' },
  { name: 'Resume', id: 'resume' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const textClass = isScrolled ? 'text-white' : 'text-black';
  const logoTextClass = isScrolled ? 'text-white' : 'text-black';
  const bgClass = isScrolled
    ? 'bg-[#080808]/85 backdrop-blur-md border-b border-white/5 py-3 sm:py-4'
    : 'bg-transparent py-4 sm:py-5';
  const hamburgerBgClass = isScrolled ? 'bg-white' : 'bg-black';

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] flex flex-row justify-between items-center px-5 sm:px-8 transition-all duration-300 ${bgClass}`}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleScrollTo(e, 'hero')}
          className="flex flex-row items-center gap-2 cursor-pointer group"
        >
          <span
            className={`text-[21px] sm:text-[24px] tracking-tight transition-colors duration-300 select-none ${logoTextClass}`}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Shreyas MH
          </span>
          <span
            className={`text-[24px] sm:text-[28px] transition-transform duration-500 group-hover:rotate-[180deg] select-none ${logoTextClass}`}
            style={{ letterSpacing: '-0.02em' }}
            aria-hidden="true"
          >
            ✳︎
          </span>
        </a>

        {/* Desktop Nav Links (hidden below md) */}
        <div className="hidden md:flex flex-row items-center text-[16px] lg:text-[17px] font-medium">
          {navLinks.map((link, i) => (
            <span key={link.id} className={textClass}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className="hover:opacity-60 transition-all duration-200 px-1"
                id={`nav-link-${link.id}`}
              >
                {link.name}
              </a>
              {i < navLinks.length - 1 && (
                <span className="select-none opacity-30"> / </span>
              )}
            </span>
          ))}
        </div>

        {/* Desktop CTA (hidden below md) */}
        <a
          href="mailto:adolfhitlerr26@gmail.com"
          className={`hidden md:block text-[16px] lg:text-[17px] underline underline-offset-4 hover:opacity-60 transition-opacity duration-200 ${textClass}`}
          id="nav-cta-desktop"
        >
          Get in touch
        </a>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] p-1 z-50"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          id="mobile-menu-toggle"
        >
          <span
            className={`block w-6 h-[2px] transition-all duration-300 origin-center ${menuOpen ? 'bg-white' : hamburgerBgClass}`}
            style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
          />
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${menuOpen ? 'opacity-0 bg-white' : hamburgerBgClass}`}
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className={`block w-6 h-[2px] transition-all duration-300 origin-center ${menuOpen ? 'bg-white' : hamburgerBgClass}`}
            style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
          />
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div
        className="md:hidden fixed inset-0 bg-[#080808]/95 backdrop-blur-md z-[90] flex flex-col justify-center items-start px-8 gap-6 transition-opacity duration-300"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
        aria-hidden={!menuOpen}
        id="mobile-menu-overlay"
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="text-[26px] font-semibold text-white hover:text-indigo-400 transition-colors duration-200"
            onClick={(e) => handleScrollTo(e, link.id)}
            id={`mobile-nav-link-${link.id}`}
          >
            {link.name}
          </a>
        ))}
        <a
          href="mailto:adolfhitlerr26@gmail.com"
          className="text-[26px] font-semibold text-white underline underline-offset-4 hover:text-indigo-400 transition-colors duration-200 mt-2"
          onClick={() => setMenuOpen(false)}
          id="mobile-nav-cta"
        >
          Get in touch
        </a>
      </div>
    </>
  );
}
