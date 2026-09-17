import { useState, FormEvent } from 'react';
import { useInView } from '../hooks/useInView';
import {
  Mail,
  MapPin,
  Send,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react';

/* ─── Inline brand icons (not in this lucide-react version) ─── */
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

/* ─── Types ──────────────────────────────────────────────────── */
type FormState = 'idle' | 'sending' | 'done';

/* ─── Corner accent ──────────────────────────────────────────── */
function PlusCorner({ className }: { className: string }) {
  return (
    <span
      className={`absolute w-4 h-4 pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <span className="absolute inset-x-0 top-1/2 -translate-y-px h-px bg-zinc-600" />
      <span className="absolute inset-y-0 left-1/2 -translate-x-px w-px bg-zinc-600" />
    </span>
  );
}

/* ─── Info row ───────────────────────────────────────────────── */
function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3 group/row">
      <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center bg-white/[0.03] border border-white/8 text-zinc-400 group-hover/row:text-indigo-400 transition-colors duration-200">
        <Icon size={15} strokeWidth={1.8} />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-600 mb-0.5">{label}</p>
        <p className="text-[13.5px] text-zinc-200 font-medium truncate group-hover/row:text-indigo-300 transition-colors duration-200">
          {value}
        </p>
      </div>
      {href && (
        <ArrowUpRight
          size={13}
          className="ml-auto flex-shrink-0 text-zinc-700 group-hover/row:text-indigo-400 transition-colors duration-200"
        />
      )}
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
export default function Contact() {
  const [ref, isInView] = useInView();
  const [formState, setFormState] = useState<FormState>('idle');
  const [copied, setCopied] = useState(false);

  const EMAIL = 'adolfhitlerr26@gmail.com';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback: do nothing */
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) return;

    // Open mailto — no fake backend
    const subject = encodeURIComponent(`Hey Shreyas — from ${name}`);
    const body = encodeURIComponent(`Hi Shreyas,\n\n${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    setFormState('sending');
    setTimeout(() => {
      setFormState('done');
      form.reset();
    }, 600);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className={`relative z-20 bg-[#080808] text-white py-24 px-5 sm:px-8 md:px-12 section-reveal ${
        isInView ? 'visible' : ''
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative">

        {/* Section label */}
        <div
          className="text-zinc-500 font-medium tracking-widest text-xs uppercase mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          08 // Contact
        </div>

        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-none"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Let's <span className="gradient-text">Build</span>.
        </h2>

        <p className="text-zinc-400 text-base sm:text-lg mb-14 max-w-xl leading-relaxed">
          Have an idea, project, collab, or just want to talk tech, startups, or building things?
          I'm always open to interesting conversations.
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">

          {/* ── Left: Identity + Info ───────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Identity card */}
            <div
              className="relative rounded-2xl p-6 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(129,140,248,0.06) 0%, rgba(52,211,153,0.04) 100%)',
                border: '1px solid rgba(129,140,248,0.2)',
              }}
            >
              {/* Gradient top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: 'linear-gradient(90deg, #818cf8, #34d399)' }}
              />

              {/* Corner plus marks */}
              <PlusCorner className="-top-2 -left-2" />
              <PlusCorner className="-top-2 -right-2" />
              <PlusCorner className="-bottom-2 -left-2" />
              <PlusCorner className="-bottom-2 -right-2" />

              <p className="text-[11px] font-black tracking-[0.18em] uppercase mb-4"
                style={{ color: '#a5b4fc' }}>
                ★ Open to connecting
              </p>

              <p
                className="text-2xl font-extrabold leading-tight mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Shreyas MH
              </p>
              <p className="text-zinc-400 text-[14px] mb-4 leading-snug">
                CSE Student · Founder · Builder
              </p>

              <div className="space-y-1 text-[13px] text-zinc-400 leading-relaxed">
                <p>
                  🚀{' '}
                  <a
                    href="https://xtich.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gradient-text font-semibold hover:opacity-80 transition-opacity"
                  >
                    Co-Founder @ XTICH
                  </a>
                  {' '}— premium student apparel
                </p>
                <p className="text-zinc-500 text-[12px] pl-5">
                  Versity by XTICH — modernising college uniform solutions
                </p>
              </div>
            </div>

            {/* Contact info rows */}
            <div
              className="rounded-2xl p-5 flex flex-col gap-4"
              style={{
                background: 'rgba(255,255,255,0.015)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <InfoRow
                icon={Mail}
                label="Email"
                value={EMAIL}
                href={`mailto:${EMAIL}`}
              />
              <div className="h-px bg-white/5" />
              <InfoRow
                icon={GithubIcon}
                label="GitHub"
                value="shreyasMH26"
                href="https://github.com/shreyasMH26"
              />
              <div className="h-px bg-white/5" />
              <InfoRow
                icon={LinkedinIcon}
                label="LinkedIn"
                value="Coming soon"
              />
              <div className="h-px bg-white/5" />
              <InfoRow
                icon={MapPin}
                label="Location"
                value="Davanagere, Karnataka, India"
              />
            </div>

            {/* Copy email quick action */}
            <button
              onClick={handleCopyEmail}
              type="button"
              className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-[13px] font-semibold transition-all duration-200 border"
              style={{
                background: copied ? 'rgba(52,211,153,0.08)' : 'rgba(255,255,255,0.02)',
                border: copied ? '1px solid rgba(52,211,153,0.25)' : '1px solid rgba(255,255,255,0.07)',
                color: copied ? '#34d399' : '#a1a1aa',
              }}
            >
              <span className="flex items-center gap-2">
                <Mail size={14} strokeWidth={2} />
                {copied ? 'Email copied!' : 'Copy email address'}
              </span>
              <ExternalLink size={12} className="opacity-40" />
            </button>
          </div>

          {/* ── Right: Contact Form ─────────────────────────── */}
          <div
            className="lg:col-span-3 relative rounded-2xl p-6 sm:p-8 overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.015)',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            {/* Corner plus marks */}
            <PlusCorner className="-top-2 -left-2" />
            <PlusCorner className="-top-2 -right-2" />
            <PlusCorner className="-bottom-2 -left-2" />
            <PlusCorner className="-bottom-2 -right-2" />

            {formState === 'done' ? (
              /* ── Success state ── */
              <div className="flex flex-col items-center justify-center h-full min-h-[320px] text-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2"
                  style={{
                    background: 'linear-gradient(135deg, rgba(129,140,248,0.15), rgba(52,211,153,0.15))',
                    border: '1px solid rgba(129,140,248,0.25)',
                  }}
                >
                  <Send size={22} className="text-indigo-400" />
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Email opened!
                </h3>
                <p className="text-zinc-400 text-[14px] max-w-xs leading-relaxed">
                  Your email client should have opened with a pre-filled message. Hit send whenever you're ready.
                </p>
                <button
                  type="button"
                  onClick={() => setFormState('idle')}
                  className="mt-2 text-[13px] text-zinc-500 hover:text-white transition-colors underline underline-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="mb-2">
                  <h3
                    className="text-[17px] font-bold mb-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Send a message
                  </h3>
                  <p className="text-zinc-500 text-[13px]">
                    Opens your email client — no tracking, no fake sends.
                  </p>
                </div>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-[11px] font-bold uppercase tracking-widest text-zinc-500"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    autoComplete="name"
                    className="w-full rounded-xl px-4 py-3 text-[14px] text-white placeholder-zinc-600 outline-none transition-all duration-200 focus:ring-1"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(129,140,248,0.4)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(129,140,248,0.08)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-[11px] font-bold uppercase tracking-widest text-zinc-500"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    autoComplete="email"
                    className="w-full rounded-xl px-4 py-3 text-[14px] text-white placeholder-zinc-600 outline-none transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(129,140,248,0.4)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(129,140,248,0.08)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-[11px] font-bold uppercase tracking-widest text-zinc-500"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your idea, project, or just say hi..."
                    className="w-full rounded-xl px-4 py-3 text-[14px] text-white placeholder-zinc-600 outline-none transition-all duration-200 resize-none"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(129,140,248,0.4)';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(129,140,248,0.08)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-[14px] font-semibold text-black bg-white hover:bg-zinc-100 active:scale-[0.98] transition-all duration-200 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {formState === 'sending' ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                      Opening email…
                    </>
                  ) : (
                    <>
                      <Send size={15} strokeWidth={2.2} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center text-zinc-600 text-[11px]">
                  This will open your default email client.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <span
              className="font-bold text-zinc-300 text-sm"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Shreyas MH
            </span>
            <span className="text-center">Founder · Builder · Computer Science Engineer</span>
            <span>© 2026 Shreyas MH. All rights reserved.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
