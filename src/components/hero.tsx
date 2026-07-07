"use client";

import { motion } from "motion/react";
import { Magnetic } from "./motion-primitives";
import { useI18n } from "./language-provider";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const { t } = useI18n();
  const h = t.hero;

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-16 pt-28 md:px-12 md:pb-20 md:pt-32"
    >
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0 opacity-[0.5]" />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[30%] -left-[12%] h-[60vh] w-[60vh] rounded-full opacity-[0.13] blur-[140px]"
        style={{ background: "var(--accent)" }}
      />

      <div className="relative w-full max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
          className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-2 md:mb-10"
        >
          <span className="eyebrow">{h.role}</span>
          <span aria-hidden className="hidden h-3 w-px bg-line sm:inline-block" />
          <span className="eyebrow text-ink-faint">{h.base}</span>
        </motion.div>

        <h1 className="display-xl">
          <span className="block overflow-hidden">
            <motion.span
              className="block text-ink"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, ease: EASE, delay: 0.15 }}
            >
              {h.name}
              <span style={{ color: "var(--accent)" }}>.</span>
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}
          className="mt-6 font-display text-xl font-medium tracking-tight text-ink-dim md:mt-8 md:text-2xl"
        >
          {h.title[0]} {h.title[1].replace(/\.$/, "")}
          <span style={{ color: "var(--accent)" }}>.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
          className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-ink-dim md:mt-6 md:text-lg"
        >
          {h.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-12"
        >
          <Magnetic strength={0.2} className="w-full sm:w-auto">
            <a
              href="#projetos"
              className="group flex h-12 w-full items-center justify-center gap-2.5 rounded-full px-7 text-[14px] font-medium tracking-tight text-bg transition-colors sm:w-auto"
              style={{ background: "var(--accent)" }}
            >
              {h.ctaPrimary}
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </Magnetic>

          <a
            href="#contato"
            className="group flex h-12 w-full items-center justify-center gap-2.5 rounded-full px-7 text-[14px] font-medium tracking-tight text-ink transition-colors hover:text-accent sm:w-auto"
            style={{ border: "1px solid var(--line-strong)" }}
          >
            {h.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#projetos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: EASE, delay: 1.15 }}
        className="group absolute bottom-9 right-6 hidden items-center gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint transition-colors hover:text-ink md:right-12 md:inline-flex"
      >
        {h.scroll}
        <span className="inline-block h-px w-8 bg-ink-faint transition-all duration-300 group-hover:w-14 group-hover:bg-accent" />
      </motion.a>
    </section>
  );
}
