import { useInView } from '../hooks/useInView';

export default function Resume() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      id="resume"
      className={`relative z-20 bg-[#060606] text-white py-24 px-5 sm:px-8 md:px-12 flex items-center section-reveal ${
        isInView ? 'visible' : ''
      }`}
    >
      <div className="max-w-4xl mx-auto w-full text-center">

        <div
          className="text-zinc-500 font-medium tracking-widest text-xs uppercase mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          07 // Career Doc
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Resume.
        </h2>

        <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Download my latest resume to learn more about my education, technical skills,
          startup experience at XTICH.in, projects, and achievements.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">

          {/* Download Resume — links to /resume.pdf */}
          <a
            href="/resume.pdf"
            download="Shreyas_MH_Resume.pdf"
            className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center bg-white text-black border border-white rounded-full text-[15px] font-semibold px-6 py-3.5 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer shadow-md gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download Resume</span>
          </a>

          {/* View Resume — opens /resume.pdf in a new tab */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-w-[200px] inline-flex items-center justify-center bg-white/[0.02] text-white border border-white/10 rounded-full text-[15px] font-semibold px-6 py-3.5 hover:bg-white hover:text-black hover:border-white/20 transition-all duration-300 cursor-pointer gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>View Resume</span>
          </a>
        </div>

        <p className="text-zinc-600 text-xs mt-8">
          Place your PDF at <code className="text-zinc-400">public/resume.pdf</code> to activate these buttons.
        </p>
      </div>
    </section>
  );
}
