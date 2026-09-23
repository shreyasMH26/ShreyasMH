import { useState, useEffect } from "react";
import BentoPage from "./components/BentoPage";
import BottomNav from "./components/BottomNav";
import { IDCardLanyard } from "./components/ui/id-card-lanyard";
import Loader from "./components/ui/loader-6";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showIdCard, setShowIdCard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans antialiased relative selection:bg-white/20 selection:text-white">
      {/* Initial Page Loader (Loader 6) */}
      {loading && (
        <div 
          onClick={() => setLoading(false)}
          className="fixed inset-0 z-[100] bg-[#000000] flex flex-col items-center justify-center cursor-pointer transition-opacity duration-500"
        >
          <Loader />
          <span className="text-[11px] text-white/30 tracking-widest uppercase mt-4 font-mono">
            Loading Experience...
          </span>
        </div>
      )}

      {/* Floating Interactive Physics ID Card Lanyard - only shown when opened */}
      {showIdCard && (
        <IDCardLanyard onClose={() => setShowIdCard(false)} />
      )}

      {/* Exact Bento Portfolio (Cards and Sections from reference) */}
      <BentoPage />

      {/* Floating macOS Interactive Dock */}
      <BottomNav
        isIdCardOpen={showIdCard}
        onToggleIdCard={() => setShowIdCard((prev) => !prev)}
      />
    </div>
  );
}
