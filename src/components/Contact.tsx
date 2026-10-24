import { useState } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';
import Button from './Button';
import { Mail, Check, ArrowUpRight } from 'lucide-react';

/* ── Inline Brand Icons ── */
function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Contact() {
  const [ref, isInView] = useInViewAnimation<HTMLDivElement>(0.1);
  const [copied, setCopied] = useState(false);

  const email = 'adolfhitlerr26@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="w-full bg-white py-20 md:py-28 px-6 border-t border-black/[0.05]"
    >
      <div className="max-w-[720px] mx-auto text-center">
        <span
          className={`text-xs md:text-sm font-mono uppercase tracking-widest text-[#273C46] mb-3 inline-block font-semibold ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.1s' }}
        >
          Connect
        </span>

        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#0D212C] mb-4 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          Get in <span className="font-serif italic font-normal">touch</span>
        </h2>

        <p
          className={`text-base sm:text-lg text-[#273C46] leading-relaxed mb-8 max-w-lg mx-auto ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.3s' }}
        >
          Have an idea or just want to talk about building something? Reach out directly.
        </p>

        {/* Buttons / Direct Actions */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <Button
            variant="primary"
            href={`mailto:${email}`}
            className="w-full sm:w-auto gap-2"
          >
            <Mail size={16} />
            <span>Send Email</span>
          </Button>

          <Button
            variant="secondary"
            onClick={handleCopy}
            className="w-full sm:w-auto gap-2"
          >
            {copied ? <Check size={16} className="text-emerald-600" /> : null}
            <span>{copied ? 'Copied to clipboard' : 'Copy email address'}</span>
          </Button>
        </div>

        {/* Social Links */}
        <div
          className={`flex items-center justify-center gap-4 text-sm font-mono text-[#051A24] ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.5s' }}
        >
          <a
            href="https://www.linkedin.com/in/shreyasmh/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-50 border border-black/[0.06] hover:bg-zinc-100 transition-colors"
          >
            <LinkedinIcon size={14} />
            <span>LinkedIn</span>
            <ArrowUpRight size={12} className="text-[#273C46]" />
          </a>

          <a
            href="https://github.com/shreyasMH26"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-50 border border-black/[0.06] hover:bg-zinc-100 transition-colors"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
            <ArrowUpRight size={12} className="text-[#273C46]" />
          </a>
        </div>
      </div>
    </section>
  );
}
