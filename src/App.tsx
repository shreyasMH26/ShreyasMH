import { useEffect } from 'react';
import BentoPage from './components/BentoPage';
import BottomNav from './components/BottomNav';

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans antialiased relative selection:bg-white/20 selection:text-white">
      {/* Exact Bento Portfolio (Cards and Sections from reference) */}
      <BentoPage />

      {/* Floating macOS Interactive Dock */}
      <BottomNav />
    </div>
  );
}
