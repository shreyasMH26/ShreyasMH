import BackgroundVideo from './components/BackgroundVideo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-[#080808]">
      {/* Layer 0: Background video (fixed, only visible through hero) */}
      <BackgroundVideo />

      {/* Layer 100: Fixed Navbar */}
      <Navbar />

      {/* Scrollable Layout Content */}
      <div className="relative z-10 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Experience />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}
