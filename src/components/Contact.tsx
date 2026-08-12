import { useState } from 'react';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const [ref, isInView] = useInView();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('shreyasmholeyache@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const contactInfo = [
    {
      label: 'GitHub',
      value: 'shreyasMH26',
      href: 'https://github.com/shreyasMH26',
      icon: (
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
          />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/shreyasmh',
      href: 'https://www.linkedin.com/in/shreyasmh',
      icon: (
        <svg
          className="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      label: 'XTICH',
      value: 'xtich.in',
      href: 'https://xtich.in',
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      label: 'Portfolio',
      value: 'shreyasmh.onrender.com',
      href: 'https://shreyasmh.onrender.com',
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      label: 'Location',
      value: 'Davanagere, Karnataka, India',
      href: null,
      icon: (
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className={`relative z-20 bg-[#080808] text-white py-32 px-5 sm:px-8 md:px-12 flex flex-col justify-between min-h-[80vh] section-reveal ${
        isInView ? 'visible' : ''
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto w-full flex-grow flex flex-col justify-center">
        <div
          className="text-zinc-500 font-medium tracking-widest text-xs uppercase mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          06 // Contact
        </div>

        <h2
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-none"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <span className="gradient-text">Let's Connect</span>.
        </h2>

        <p className="text-zinc-400 text-base sm:text-lg max-w-lg mb-12 leading-relaxed">
          I'm always open to internships, collaborations, project
          opportunities, hackathons, and conversations about technology.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            {/* Email */}
            <button
              onClick={handleCopyEmail}
              className="group inline-flex items-center justify-between w-full sm:max-w-sm bg-white text-black border border-white rounded-2xl text-[15px] font-semibold px-6 py-4 hover:bg-black hover:text-white transition-all duration-300 cursor-pointer gap-3"
            >
              <span className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>

                <span className="text-[13px] sm:text-[15px]">
                  {copied
                    ? 'Email Copied!'
                    : 'shreyasmholeyache@gmail.com'}
                </span>
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/shreyasMH26"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full sm:max-w-sm bg-white/[0.02] text-white border border-white/10 rounded-2xl text-[15px] font-semibold px-6 py-4 hover:bg-white hover:text-black hover:border-white/20 transition-all duration-300 cursor-pointer gap-3"
            >
              <span className="flex items-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>

                <span>github.com/shreyasMH26</span>
              </span>

              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shreyasmh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full sm:max-w-sm bg-white/[0.02] text-white border border-white/10 rounded-2xl text-[15px] font-semibold px-6 py-4 hover:bg-white hover:text-black hover:border-white/20 transition-all duration-300 cursor-pointer gap-3"
              id="contact-linkedin-link"
            >
              <span className="flex items-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>linkedin.com/in/shreyasmh</span>
              </span>

              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>

          {/* Contact Info Cards */}
          <div className="flex flex-col gap-4">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-200"
              >
                <div className="p-2.5 rounded-lg bg-white/[0.03] text-zinc-400">
                  {item.icon}
                </div>

                <div className="flex-grow overflow-hidden">
                  <p className="text-zinc-500 text-[10px] uppercase tracking-widest font-semibold mb-0.5">
                    {item.label}
                  </p>

                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-200 text-[14px] font-medium hover:text-indigo-400 transition-colors duration-200 truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-zinc-200 text-[14px] font-medium truncate">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full border-t border-white/5 pt-10 mt-20">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <span
            className="font-bold text-zinc-300 text-sm"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Shreyas MH
          </span>

          <span className="text-center">
            Co-Founder @ XTICH | CSE Student | AI/ML Enthusiast
          </span>

          <span>© 2026 Shreyas MH. All rights reserved.</span>
        </div>
      </div>
    </section>
  );
}
