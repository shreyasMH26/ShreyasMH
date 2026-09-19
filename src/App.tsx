import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import WhatIBuild from './components/WhatIBuild';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BuilderStatement from './components/BuilderStatement';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import PartnerSection from './components/PartnerSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CopyrightBar from './components/CopyrightBar';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#051A24] font-sans antialiased relative selection:bg-[#051A24] selection:text-[#F6FCFF]">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Infinite Project Marquee */}
      <Marquee />

      {/* 3. About / Personal Statement */}
      <About />

      {/* 4. What I Build (4 Pillars) */}
      <WhatIBuild />

      {/* 5. Experience (XTICH & Versity) */}
      <Experience />

      {/* 6. Education */}
      <Education />

      {/* 7. Skills */}
      <Skills />

      {/* 8. Selected Projects */}
      <Projects />

      {/* 9. Builder Statement ("What I'm building toward") */}
      <BuilderStatement />

      {/* 10. Currently Building (Status radar) */}
      <CurrentlyBuilding />

      {/* 11. Partner / Collaboration CTA */}
      <PartnerSection />

      {/* 12. Contact Section */}
      <Contact />

      {/* 13. Footer */}
      <Footer />

      {/* 14. Copyright Bar */}
      <CopyrightBar />

      {/* 15. Fixed Floating Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
