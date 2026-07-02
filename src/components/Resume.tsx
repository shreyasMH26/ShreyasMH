import { useInView } from '../hooks/useInView';

export default function Resume() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      id="resume"
      className={`relative z-20 bg-[#080808] text-white py-24 px-5 sm:px-8 md:px-12 flex items-center section-reveal ${
        isInView ? 'visible' : ''
      }`}
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        {/* Section Label */}
        <div
          className="text-zinc-500 font-medium tracking-widest text-xs uppercase mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          05 // Career Doc
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Resume.
        </h2>

        <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto mb-3 leading-relaxed">
          A comprehensive overview of my education, technical skills, projects, and entrepreneurial experience.
        </p>
        <p className="text-zinc-600 text-sm max-w-lg mx-auto mb-12">
          Covering Computer Science Engineering · Web Development · AI/ML · IoT · Co-Founder @ XTICH
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2.5 bg-white text-black px-7 py-3.5 rounded-full font-semibold hover:bg-zinc-100 transition-colors duration-200 shadow-sm"
            id="resume-download-btn"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-white/20 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-200"
            id="resume-view-btn"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}