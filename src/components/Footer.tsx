import Button from './Button';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-black/[0.05] pt-12 pb-6 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-black/[0.04]">
        {/* Left Side */}
        <div>
          <Button variant="primary" href="mailto:adolfhitlerr26@gmail.com">
            Start a chat
          </Button>
        </div>

        {/* Right Side Columns */}
        <div className="flex flex-wrap gap-8 sm:gap-14 text-base text-[#051A24] font-medium">
          {/* Internal Links */}
          <div className="flex flex-col gap-2.5">
            <a href="#about" className="hover:opacity-70 transition-opacity">
              About
            </a>
            <a href="#experience" className="hover:opacity-70 transition-opacity">
              Experience
            </a>
            <a href="#projects" className="hover:opacity-70 transition-opacity">
              Projects
            </a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">
              Contact
            </a>
          </div>

          {/* External Links */}
          <div className="flex flex-col gap-2.5">
            <a
              href="https://github.com/shreyasMH26"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:opacity-70 transition-opacity"
            >
              <span>GitHub</span>
              <ArrowUpRight size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/shreyasmh/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:opacity-70 transition-opacity"
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={15} />
            </a>
            <a
              href="https://xtich.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:opacity-70 transition-opacity"
            >
              <span>XTICH</span>
              <ArrowUpRight size={15} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:opacity-70 transition-opacity"
            >
              <span>Resume</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
