import { useState, useEffect, useRef } from "react";
import BentoPage from "./components/BentoPage";
import BottomNav from "./components/BottomNav";
import LanyardBadge from "./components/ui/lanyard-badge";
import Loader from "./components/ui/loader-6";

const DISPLAY = '"Archivo", "Oswald", "Bebas Neue", "Arial Narrow", sans-serif';

// ── Mini 9x9 QR Code Component ──────────────────────────────────────────────
function MiniQR({ size = 36 }: { size?: number }) {
  const N = 9;
  const seedOn = new Set([
    0, 1, 2, 9, 10, 11, 18, 19, 20, // top-left square
    6, 7, 8, 15, 16, 17, 24, 25, 26, // top-right square
    54, 55, 56, 63, 64, 65, 72, 73, 74, // bottom-left square
  ]);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${N}, 1fr)`,
        gap: 1,
        width: size,
        height: size,
        background: "#ffffff",
        padding: 2.5,
        borderRadius: 4,
        flexShrink: 0,
        boxShadow: "0 0 0 1px rgba(255,255,255,0.15), 0 2px 4px rgba(0,0,0,0.3)",
      }}
    >
      {Array.from({ length: N * N }).map((_, i) => {
        const pseudoRandom = (i * 928371) % 97 < 48;
        const isOn = seedOn.has(i) || pseudoRandom;
        return (
          <span
            key={i}
            style={{
              background: isOn ? "#0f131a" : "transparent",
              borderRadius: 0.5,
            }}
          />
        );
      })}
    </div>
  );
}

// ── Realistic Barcode Heights ────────────────────────────────────────────────
const BARCODE_HEIGHTS = [
  100, 60, 85, 45, 100, 70, 55, 90, 100, 60, 40, 80, 100, 50, 75, 100, 65, 90,
  45, 100, 55, 80, 100, 70, 45, 90, 100, 60, 85, 50, 100, 70,
];

// ── Front Face: Obsidian Tactical Event ID Badge ────────────────────────────
function ShreyasCardFront() {
  return (
    <div
      className="relative h-full w-full flex flex-col overflow-hidden select-none"
      style={{
        background: "linear-gradient(165deg, #131722 0%, #0b0d13 100%)",
        color: "#ffffff",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), inset 0 0 0 1px rgba(255,255,255,0.08)",
        borderRadius: "inherit",
        padding: "12px 14px 10px",
      }}
    >
      {/* Top lanyard punch hole */}
      <div
        style={{
          width: 26,
          height: 6,
          background: "rgba(0,0,0,0.75)",
          borderRadius: 4,
          margin: "0 auto 6px",
          boxShadow: "inset 0 1px 2px rgba(0,0,0,0.9), 0 1px 0 rgba(255,255,255,0.12)",
          flexShrink: 0,
        }}
      />

      {/* Hologram foil strip on right edge */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 14,
          bottom: 14,
          right: 5,
          width: 5,
          borderRadius: 4,
          background:
            "repeating-linear-gradient(135deg, #a7bfe8 0%, #6190e8 15%, #fbc2eb 30%, #a18cd1 45%, #a7bfe8 60%)",
          backgroundSize: "250% 250%",
          animation: "idHoloFoil 6s linear infinite",
          opacity: 0.85,
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.25), 0 0 8px rgba(97,144,232,0.4)",
        }}
      />

      {/* Header: Brand & Pillars */}
      <div className="flex justify-between items-start mb-2" style={{ paddingRight: 8 }}>
        <div className="flex items-center gap-1.5">
          <span style={{ color: "#5b8cff", fontSize: 11, lineHeight: 1 }}>▲</span>
          <div className="flex flex-col">
            <span
              style={{
                fontFamily: DISPLAY,
                fontWeight: 800,
                fontSize: 11,
                letterSpacing: "0.06em",
                color: "#ffffff",
                lineHeight: 1.1,
              }}
            >
              XTICH
            </span>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: 5.5,
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.5)",
                textTransform: "uppercase",
              }}
            >
              Apparel &amp; Systems
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-0.5">
          {["DESIGN", "CODE", "SHIP"].map((pillar) => (
            <span
              key={pillar}
              style={{
                fontFamily: "monospace",
                fontSize: 5.5,
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {pillar}
            </span>
          ))}
          <div style={{ width: 14, height: 1.5, background: "#5b8cff", marginTop: 1 }} />
        </div>
      </div>

      {/* Photo Frame with Verified Badge */}
      <div
        className="relative overflow-hidden rounded-lg mb-2 flex-shrink-0"
        style={{
          height: 104,
          border: "1px solid rgba(255,255,255,0.14)",
          background: "#08090d",
          boxShadow: "inset 0 2px 8px rgba(0,0,0,0.6)",
          marginRight: 6,
        }}
      >
        <img
          src="/photos/shreyas-id-card.jpg"
          alt="Shreyas MH"
          className="w-full h-full object-cover block"
          style={{ objectPosition: "20% 32%" }}
        />
        {/* Verified Badge */}
        <div
          className="absolute flex items-center justify-center rounded-full"
          style={{
            bottom: 4,
            right: 4,
            width: 17,
            height: 17,
            background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
            boxShadow: "0 2px 6px rgba(0,0,0,0.6), 0 0 0 2px #0e1117",
          }}
        >
          <svg
            width={9}
            height={9}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </div>

      {/* Name & Title */}
      <div style={{ marginTop: 2, marginBottom: 5 }}>
        <h2
          style={{
            fontFamily: DISPLAY,
            fontWeight: 800,
            fontSize: 15,
            letterSpacing: "-0.01em",
            margin: 0,
            color: "#ffffff",
            lineHeight: 1.1,
          }}
        >
          SHREYAS MH
        </h2>
        <div
          style={{
            fontSize: 7.2,
            color: "rgba(255,255,255,0.65)",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginTop: 2,
          }}
        >
          CO-FOUNDER &amp; COO · XTICH
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          height: 1,
          background: "linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.04))",
          marginBottom: 6,
        }}
      />

      {/* ID info row + mini QR */}
      <div className="flex justify-between items-center" style={{ marginBottom: 4, paddingRight: 8 }}>
        <div className="flex flex-col gap-1" style={{ fontFamily: "monospace", fontSize: 6.8 }}>
          <div className="flex gap-2">
            <span style={{ color: "rgba(255,255,255,0.4)", width: 34 }}>ID</span>
            <b style={{ color: "#ffffff" }}>SMH-2026</b>
          </div>
          <div className="flex gap-2">
            <span style={{ color: "rgba(255,255,255,0.4)", width: 34 }}>LOC</span>
            <b style={{ color: "#ffffff" }}>Davanagere, IN</b>
          </div>
          <div className="flex gap-2">
            <span style={{ color: "rgba(255,255,255,0.4)", width: 34 }}>VALID</span>
            <b style={{ color: "#5b8cff" }}>12/2029</b>
          </div>
        </div>

        {/* Mini 9x9 QR Code Graphic */}
        <MiniQR size={34} />
      </div>

      {/* Footer */}
      <div
        className="mt-auto text-center"
        style={{
          fontFamily: "monospace",
          fontSize: 6,
          letterSpacing: "0.16em",
          color: "rgba(255,255,255,0.4)",
          paddingTop: 4,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          textTransform: "uppercase",
        }}
      >
        BUILD · SHIP · ITERATE
      </div>
    </div>
  );
}

// ── Back Face: Security Credentials & Portfolio QR ──────────────────────────
function ShreyasCardBack() {
  return (
    <div
      className="relative h-full w-full flex flex-col overflow-hidden select-none"
      style={{
        background: "linear-gradient(165deg, #131722 0%, #0b0d13 100%)",
        color: "#ffffff",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), inset 0 0 0 1px rgba(255,255,255,0.08)",
        borderRadius: "inherit",
        padding: "12px 14px 10px",
      }}
    >
      {/* Top lanyard hole */}
      <div
        style={{
          width: 26,
          height: 6,
          background: "rgba(0,0,0,0.75)",
          borderRadius: 4,
          margin: "0 auto 6px",
          boxShadow: "inset 0 1px 2px rgba(0,0,0,0.9), 0 1px 0 rgba(255,255,255,0.12)",
          flexShrink: 0,
        }}
      />

      {/* Hologram foil strip on right edge */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 14,
          bottom: 14,
          right: 5,
          width: 5,
          borderRadius: 4,
          background:
            "repeating-linear-gradient(135deg, #a7bfe8 0%, #6190e8 15%, #fbc2eb 30%, #a18cd1 45%, #a7bfe8 60%)",
          backgroundSize: "250% 250%",
          animation: "idHoloFoil 6s linear infinite",
          opacity: 0.85,
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.25), 0 0 8px rgba(97,144,232,0.4)",
        }}
      />

      {/* Magnetic stripe across top */}
      <div
        className="rounded mb-2"
        style={{
          height: 18,
          background: "repeating-linear-gradient(45deg, #181c26, #181c26 6px, #242938 6px, #242938 12px)",
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.8)",
          marginRight: 6,
        }}
      />

      {/* Serial row */}
      <div
        className="flex justify-between mb-1"
        style={{ fontFamily: "monospace", fontSize: 6.5, color: "rgba(255,255,255,0.7)", paddingRight: 6 }}
      >
        <span>NO. SMH-2026</span>
        <span>VALID 12/2029</span>
      </div>

      {/* Real Barcode Component */}
      <div
        className="flex items-end justify-between bg-white rounded p-1 mb-2 overflow-hidden"
        style={{ height: 22, marginRight: 6 }}
      >
        {BARCODE_HEIGHTS.map((h, i) => (
          <span
            key={i}
            style={{
              width: i % 4 === 0 ? 2 : 1.2,
              height: `${h}%`,
              background: "#0a0a0d",
              display: "inline-block",
            }}
          />
        ))}
      </div>

      {/* QR Code and Portfolio Link */}
      <div className="flex gap-2.5 items-center mb-2" style={{ paddingRight: 6 }}>
        <MiniQR size={44} />
        <div style={{ fontFamily: "monospace", fontSize: 6.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.35 }}>
          <b style={{ color: "#ffffff", display: "block", fontSize: 7.5, letterSpacing: "0.02em" }}>
            Scan for Portfolio
          </b>
          <span style={{ color: "#5b8cff" }}>shreyasmh.in</span>
          <br />
          Full case studies,
          <br />
          source &amp; credits.
        </div>
      </div>

      {/* Social Icons row (clickable with direct links) */}
      <div
        className="flex items-center justify-between mt-auto mb-1"
        style={{
          paddingTop: 5,
          borderTop: "1px solid rgba(255,255,255,0.12)",
          paddingRight: 6,
        }}
      >
        <span
          style={{
            fontFamily: "monospace",
            fontSize: 7,
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.55)",
            textTransform: "uppercase",
          }}
        >
          CONNECT
        </span>
        <div className="flex gap-1.5">
          {[
            {
              href: "https://github.com/shreyasMH26",
              label: "GitHub",
              icon: (
                <svg viewBox="0 0 24 24" width={10} height={10} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              ),
            },
            {
              href: "https://x.com/shreyasMH26",
              label: "X",
              icon: (
                <svg viewBox="0 0 24 24" width={10} height={10} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              ),
            },
            {
              href: "https://www.linkedin.com/in/shreyasmh/",
              label: "LinkedIn",
              icon: (
                <svg viewBox="0 0 24 24" width={10} height={10} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              ),
            },
            {
              href: "https://www.instagram.com/shreyasm.h/",
              label: "Instagram",
              icon: (
                <svg viewBox="0 0 24 24" width={10} height={10} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              ),
            },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full flex items-center justify-center transition-colors hover:bg-white/20 active:scale-95"
              style={{
                width: 20,
                height: 20,
                border: "1px solid rgba(255,255,255,0.22)",
                color: "rgba(255,255,255,0.85)",
                background: "rgba(255,255,255,0.08)",
              }}
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Signature */}
      <div style={{ marginTop: 2, paddingRight: 6 }}>
        <div
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 16,
            color: "#ffffff",
            lineHeight: 1,
            paddingLeft: 4,
          }}
        >
          Shreyas MH
        </div>
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 5.5,
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.4)",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 2,
            textTransform: "uppercase",
          }}
        >
          AUTHORIZED SIGNATURE · SECURE ID
        </div>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showIdCard, setShowIdCard] = useState(false);
  const flipCardRef = useRef<(() => void) | null>(null);

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

  // Prevent body scrolling when ID card overlay is active
  useEffect(() => {
    if (showIdCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showIdCard]);

  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans antialiased relative selection:bg-white/20 selection:text-white">
      {/* Global CSS for ID Card Hologram */}
      <style>{`
        @keyframes idHoloFoil {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
      `}</style>

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

      {/* Physics Lanyard Badge Overlay */}
      {showIdCard && (
        <div className="fixed inset-0 z-[90] flex flex-col items-center justify-center">
          {/* Backdrop click to dismiss */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setShowIdCard(false)}
          />

          {/* Top Control Bar */}
          <header className="absolute top-4 inset-x-4 z-30 flex items-center justify-between pointer-events-none">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowIdCard(false)}
              className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-3.5 py-1.5 text-xs font-mono tracking-wider text-white shadow-lg backdrop-blur-md transition-all active:scale-95"
            >
              <svg
                width={12}
                height={12}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              CLOSE
            </button>

            {/* Hint Badge */}
            <div className="hidden sm:inline-flex items-center gap-2 rounded-full bg-black/50 border border-white/10 px-3.5 py-1 text-[11px] font-mono tracking-wider text-white/70 backdrop-blur-md">
              <span>DRAG TO SWING</span>
              <span className="text-white/30">·</span>
              <span>TAP TO FLIP</span>
            </div>

            {/* Flip Button */}
            <button
              type="button"
              onClick={() => {
                if (flipCardRef.current) {
                  flipCardRef.current();
                } else if ((window as any).__flipLanyardCard) {
                  (window as any).__flipLanyardCard();
                }
              }}
              className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-3.5 py-1.5 text-xs font-mono tracking-wider text-white shadow-lg backdrop-blur-md transition-all active:scale-95"
            >
              <svg
                width={12}
                height={12}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
                <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                <path d="M16 16h5v5" />
              </svg>
              FLIP
            </button>
          </header>

          {/* Physics Lanyard Component */}
          <LanyardBadge
            front={<ShreyasCardFront />}
            back={<ShreyasCardBack />}
            strapColor="#0e1117"
            inkColor="#ffffff"
            strapText="shreyas mh · design · code · ship"
            strapLabel="XTICH 2026"
            cardWidth={224}
            height="100dvh"
            flipButton={false}
            className="relative z-10"
            onFlipRef={(fn) => {
              flipCardRef.current = fn;
            }}
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
