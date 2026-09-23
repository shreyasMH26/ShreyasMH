import { useState, useEffect } from 'react';
import MacOSDock, { DockApp } from './ui/mac-os-dock';

interface BottomNavProps {
  isIdCardOpen?: boolean;
  onToggleIdCard?: () => void;
}

const getPortfolioApps = (isIdCardOpen: boolean): DockApp[] => [
  {
    id: 'finder',
    name: 'Home',
    icon: '/icons/dock/finder.svg',
  },
  {
    id: 'xtich',
    name: 'XTICH Studios',
    icon: '/icons/dock/xtich.svg',
  },
  {
    id: 'projects',
    name: 'Vibe Coding',
    icon: '/icons/dock/terminal.svg',
  },
  {
    id: 'soundtrack',
    name: 'Apple Music (after 2 : 17)',
    icon: '/icons/dock/music.svg',
  },
  {
    id: 'resume',
    name: 'Resume (CV)',
    icon: '/icons/dock/resume.svg',
  },
  {
    id: 'mail',
    name: 'Chat on WhatsApp',
    icon: '/icons/dock/mail.svg',
  },
  {
    id: 'github',
    name: 'GitHub (@shreyasMH26)',
    icon: '/icons/dock/github.svg',
  },
  {
    id: 'id-card',
    name: isIdCardOpen ? 'Close ID Card' : 'ID Card Badge',
    icon: '/icons/dock/id-card.svg',
  },
];

export default function BottomNav({ isIdCardOpen = false, onToggleIdCard }: BottomNavProps) {
  const [openApps, setOpenApps] = useState<string[]>(['finder']);

  // Scroll spy to reflect active sections in the macOS dock
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 280;

      const sections = [
        { id: 'finder', el: document.getElementById('hero') },
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
    switch (appId) {
      case 'id-card': {
        onToggleIdCard?.();
        break;
      }
      case 'finder': {
        const heroEl = document.getElementById('hero');
        if (heroEl) {
          heroEl.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setOpenApps((prev) => (prev.includes('finder') ? prev : [...prev, 'finder']));
        break;
      }
      case 'xtich': {
        window.open('https://xtich.in', '_blank', 'noopener,noreferrer');
        break;
      }
      case 'projects': {
        const projEl = document.getElementById('projects');
        if (projEl) {
          projEl.scrollIntoView({ behavior: 'smooth' });
        }
        setOpenApps((prev) => (prev.includes('projects') ? prev : [...prev, 'projects']));
        break;
      }
      case 'soundtrack': {
        const musicEl = document.getElementById('soundtrack');
        if (musicEl) {
          musicEl.scrollIntoView({ behavior: 'smooth' });
        }
        setOpenApps((prev) => (prev.includes('soundtrack') ? prev : [...prev, 'soundtrack']));
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
      case 'github':
      case 'safari': {
        window.open('https://github.com/shreyasMH26', '_blank', 'noopener,noreferrer');
        break;
      }
      default:
        break;
    }
  };

  const apps = getPortfolioApps(isIdCardOpen);
  const effectiveOpenApps = isIdCardOpen
    ? Array.from(new Set([...openApps, 'id-card']))
    : openApps.filter((id) => id !== 'id-card');

  return (
    <nav
      aria-label="macOS Dock Navigation"
      className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-50 select-none max-w-[95vw]"
    >
      <MacOSDock
        apps={apps}
        onAppClick={handleAppClick}
        openApps={effectiveOpenApps}
        theme="dark"
      />
    </nav>
  );
}
