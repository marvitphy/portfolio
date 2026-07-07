"use client";

import { motion } from "motion/react";
import { Magnetic } from "./motion-primitives";
import { useI18n } from "./language-provider";

export function Nav() {
  const { t, lang, setLang } = useI18n();

  const links = [
    { label: t.nav.sobre, href: "#sobre" },
    { label: t.nav.projetos, href: "#projetos" },
    { label: t.nav.stack, href: "#stack" },
    { label: t.nav.decisoes, href: "#decisoes" },
    { label: t.nav.contato, href: "#contato" },
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <nav className="mx-auto max-w-[1600px] px-6 md:px-12 h-20 flex items-center justify-between">
        <a href="#top" className="font-mono text-[13px] tracking-tight text-ink hover:text-accent transition-colors">
          MV<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-4 md:gap-6">
          <ul className="hidden sm:flex items-center gap-1 md:gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <Magnetic strength={0.25}>
                  <a
                    href={l.href}
                    className="block px-3 md:px-4 py-2 font-mono text-[12px] uppercase tracking-[0.12em] text-ink-dim hover:text-ink transition-colors"
                  >
                    {l.label}
                  </a>
                </Magnetic>
              </li>
            ))}
          </ul>

          {/* seletor de idioma */}
          <div className="flex items-center gap-1 font-mono text-[12px]">
            {(["pt", "en"] as const).map((l, i) => (
              <span key={l} className="flex items-center gap-1">
                {i > 0 && <span className="text-ink-faint">/</span>}
                <button
                  onClick={() => setLang(l)}
                  className="uppercase tracking-widest transition-colors"
                  style={{ color: lang === l ? "var(--accent)" : "var(--ink-faint)" }}
                >
                  {l}
                </button>
              </span>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
