"use client";

import { Reveal, Magnetic } from "./motion-primitives";
import { useI18n } from "./language-provider";

const SOCIALS = [
  { label: "WhatsApp", href: "https://wa.me/5599981264182" },
  { label: "Email", href: "mailto:marcovito.dev@gmail.com" },
  { label: "GitHub", href: "https://github.com/marvitphy" },
  { label: "Instagram", href: "https://instagram.com/marcovitodev" },
];

export function Contact() {
  const { t } = useI18n();
  const c = t.contact;

  return (
    <footer id="contato" className="relative px-6 md:px-12 pt-28 md:pt-40 pb-10 border-t border-line overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[15%] right-0 h-[45vh] w-[45vh] rounded-full opacity-[0.09] blur-[130px]"
        style={{ background: "var(--accent)" }}
      />

      <Reveal>
        <span className="eyebrow">{c.eyebrow}</span>
      </Reveal>

      <Reveal delay={0.05}>
        <Magnetic strength={0.12} className="inline-block mt-6">
          <a href="https://wa.me/5599981264182" target="_blank" rel="noopener noreferrer" className="group inline-flex items-baseline gap-4 md:gap-6">
            <span className="display-lg transition-colors duration-300 group-hover:text-accent">
              {c.cta}
            </span>
            <span
              className="text-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 group-hover:-translate-y-2"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
            >
              ↗
            </span>
          </a>
        </Magnetic>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-8 max-w-[44ch] text-base md:text-lg leading-relaxed text-ink-dim">
          {c.sub}
        </p>
      </Reveal>

      <div className="mt-20 md:mt-28 flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-t border-line pt-8">
        <ul className="flex flex-wrap gap-1 -ml-4">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <Magnetic strength={0.2}>
                <a
                  href={s.href}
                  {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="block px-4 py-2 font-mono text-[12px] uppercase tracking-[0.12em] text-ink-dim hover:text-accent transition-colors"
                >
                  {s.label}
                </a>
              </Magnetic>
            </li>
          ))}
        </ul>

        <p className="font-mono text-[11px] text-ink-faint">
          © {new Date().getFullYear()} Marcos Vitor · Imperatriz, MA · Brasil
        </p>
      </div>
    </footer>
  );
}
