import { useState, useEffect } from "react";
import BentoPage from "./components/BentoPage";
import BottomNav from "./components/BottomNav";
import LanyardBadge from "./components/ui/lanyard-badge";
import Loader from "./components/ui/loader-6";

// ── Shreyas MH card faces ────────────────────────────────────────────────────
const DISPLAY = '"Oswald","Bebas Neue","Arial Narrow",Impact,sans-serif';

function ShreyasFront() {
  return (
    <div
      className="relative h-full w-full flex flex-col overflow-hidden"
      style={{ background: "#0a0a0a", color: "#f0f0f0" }}
    >
      <div className="absolute" style={{ top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)" }} />
      <div className="absolute left-0 right-0" style={{ top: 0, height: 3, background: "linear-gradient(90deg,#fff 0%,rgba(255,255,255,0.2) 100%)" }} />
      <img src="/photos/shreyas-id-card.jpg" alt="Shreyas MH" className="absolute object-cover" style={{ right: 0, bottom: 0, width: "55%", height: "72%", objectPosition: "top" }} />
      <div className="absolute" style={{ inset: 0, background: "linear-gradient(90deg, #0a0a0a 38%, rgba(10,10,10,0.55) 70%, transparent 100%)" }} />
      <div className="relative z-10 px-5 pt-5">
        <div style={{ fontFamily: DISPLAY, fontSize: 11, letterSpacing: "0.22em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase" }}>Portfolio · 2026</div>
        <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 22, lineHeight: 1, color: "#fff", textTransform: "uppercase", marginTop: 4 }}>Shreyas MH</div>
        <div style={{ fontSize: 8, letterSpacing: "0.15em", color: "rgba(255,255,255,0.55)", marginTop: 5, textTransform: "uppercase" }}>Co-Founder &amp; COO @ XTICH</div>
      </div>
      <div className="relative z-10 px-5 mt-auto pb-5 flex gap-2">
        {["Design", "Code", "Ship"].map((p) => (
          <span key={p} style={{ fontFamily: DISPLAY, fontSize: 7, letterSpacing: "0.18em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 99, padding: "2px 8px", color: "rgba(255,255,255,0.7)" }}>{p}</span>
        ))}
      </div>
    </div>
  );
}

function ShreyasBack() {
  return (
    <div className="relative h-full w-full flex flex-col" style={{ background: "#f5f5f0", color: "#111" }}>
      <div className="absolute left-0 right-0 top-0" style={{ height: "38%", background: "#111" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)", backgroundSize: "8px 8px" }} />
      </div>
      <div className="absolute z-10" style={{ top: "24%", left: "50%", transform: "translateX(-50%)", width: 56, height: 56, borderRadius: "50%", overflow: "hidden", border: "3px solid #f5f5f0", boxShadow: "0 4px 16px rgba(0,0,0,0.25)" }}>
        <img src="/photos/shreyas-id-card.jpg" alt="" className="w-full h-full object-cover" style={{ objectPosition: "top" }} />
      </div>
      <div className="relative z-10 text-center mt-auto pt-6 pb-4 px-5">
        <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 16, letterSpacing: "0.03em", textTransform: "uppercase" }}>Shreyas MH</div>
        <div style={{ fontSize: 7.5, letterSpacing: "0.13em", color: "#555", textTransform: "uppercase", marginTop: 3 }}>Co-Founder &amp; COO · XTICH</div>
        <div style={{ fontSize: 7, color: "#888", marginTop: 8, letterSpacing: "0.08em" }}>Davanagere, India · shreyasmh.in</div>
        <div className="flex justify-center gap-3 mt-4">
          {[
            { href: "https://github.com/shreyasMH26", label: "GH" },
            { href: "https://www.linkedin.com/in/shreyasmh/", label: "LI" },
            { href: "https://www.instagram.com/shreyasm.h/", label: "IG" },
            { href: "https://x.com/shreyasMH26", label: "X" },
          ].map(({ href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ fontFamily: DISPLAY, fontSize: 7, fontWeight: 700, letterSpacing: "0.1em", color: "#111", border: "1px solid #ccc", borderRadius: 4, padding: "3px 6px", textDecoration: "none" }}>{label}</a>
          ))}
        </div>
        <div style={{ marginTop: 14, padding: "4px 0", borderTop: "1px solid #ddd", fontFamily: "monospace", fontSize: 6.5, letterSpacing: "0.15em", color: "#aaa" }}>SMH-2026 · VALID THRU 12/2029</div>
      </div>
    </div>
  );
}
// ────────────────────────────────────────────────────────────────────────────

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

      {/* Physics Lanyard Badge — full-screen overlay */}
      {showIdCard && (
        <div className="fixed inset-0 z-[90]">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowIdCard(false)} />
          <button
            onClick={() => setShowIdCard(false)}
            className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3 py-1.5 text-xs text-white/80 hover:bg-white/20 transition-colors backdrop-blur"
          >
            <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
            Close
          </button>
          <LanyardBadge
            front={<ShreyasFront />}
            back={<ShreyasBack />}
            strapColor="#111111"
            inkColor="#ffffff"
            strapText="shreyas mh · design · code · ship"
            strapLabel="XTICH 2026"
            cardWidth={260}
            height="100dvh"
            flipButton={true}
            className="relative z-10"
          />
        </div>
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
