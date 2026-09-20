import { useState, useEffect } from 'react';
import MacOSDock, { DockApp } from './ui/mac-os-dock';

const portfolioApps: DockApp[] = [
  {
    id: 'finder',
    name: 'Finder (Home)',
    icon: '/icons/dock/finder.svg',
  },
  {
    id: 'about',
    name: 'About MH',
    icon: '/icons/dock/notes.svg',
  },
  {
    id: 'xtich',
    name: 'XTICH (Brand)',
    icon: '/icons/dock/xtich.svg',
  },
  {
    id: 'projects',
    name: 'Projects & Code',
    icon: '/icons/dock/terminal.svg',
  },
  {
    id: 'soundtrack',
    name: 'Soundtrack (after 2 : 17)',
    icon: '/icons/dock/music.svg',
  },
  {
    id: 'resume',
    name: 'Resume (CV)',
    icon: '/icons/dock/resume.svg',
  },
  {
    id: 'mail',
    name: 'Start a Chat (Mail)',
    icon: '/icons/dock/mail.svg',
  },
  {
    id: 'safari',
    name: 'GitHub / Social',
    icon: '/icons/dock/safari.svg',
  },
];

export default function BottomNav() {
  const [openApps, setOpenApps] = useState<string[]>(['finder']);

  // Scroll spy to reflect active sections in the macOS dock
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 280;

      const sections = [
        { id: 'finder', el: document.getElementById('hero') },
        { id: 'about', el: document.getElementById('about') },
        { id: 'xtich', el: document.getElementById('experience') },
        { id: 'projects', el: document.getElementById('projects') },
        { id: 'soundtrack', el: document.getElementById('soundtrack') },
        { id: 'mail', el: document.getElementById('contact') },
      ];

      let currentSectionId = 'finder';

      for (const sec of sections) {
        if (sec.el) {
          const top = sec.el.offsetTop;
          const height = sec.el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentSectionId = sec.id;
            break;
          }
        }
      }

      setOpenApps((prev) => {
        if (!prev.includes(currentSectionId)) {
          return [currentSectionId];
        }
        return prev;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAppClick = (appId: string) => {
    // Add to open apps
    setOpenApps((prev) => (prev.includes(appId) ? prev : [...prev, appId]));

    switch (appId) {
      case 'finder': {
        const heroEl = document.getElementById('hero') || document.body;
        heroEl.scrollIntoView({ behavior: 'smooth' });
        break;
      }
      case 'about': {
        const aboutEl = document.getElementById('about');
        if (aboutEl) aboutEl.scrollIntoView({ behavior: 'smooth' });
        break;
      }
      case 'xtich': {
        const expEl = document.getElementById('experience');
        if (expEl) expEl.scrollIntoView({ behavior: 'smooth' });
        break;
      }
      case 'projects': {
        const projEl = document.getElementById('projects');
        if (projEl) projEl.scrollIntoView({ behavior: 'smooth' });
        break;
      }
      case 'soundtrack': {
        const musicEl = document.getElementById('soundtrack');
        if (musicEl) musicEl.scrollIntoView({ behavior: 'smooth' });
        break;
      }
      case 'resume': {
        window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
        break;
      }
      case 'mail': {
        window.open('https://wa.me/917483794998?text=Hey%20Shreyas%2C%20I%20found%20your%20portfolio!', '_blank', 'noopener,noreferrer');
        break;
      }
      case 'safari': {
        window.open('https://github.com/shreyasMH26', '_blank', 'noopener,noreferrer');
        break;
      }
      default:
        break;
    }
  };

  return (
    <nav
      aria-label="macOS Dock Navigation"
      className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-50 select-none max-w-[95vw]"
    >
      <MacOSDock
        apps={portfolioApps}
        onAppClick={handleAppClick}
        openApps={openApps}
        theme="dark"
      />
    </nav>
  );
}
