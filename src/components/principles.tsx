"use client";

import { Reveal } from "./motion-primitives";
import { useI18n } from "./language-provider";

export function Principles() {
  const { t } = useI18n();
  const p = t.principles;

  return (
    <section id="decisoes" className="px-6 md:px-12 py-24 md:py-36 border-t border-line">
      <Reveal>
        <div className="flex items-baseline justify-between border-b border-line pb-6 mb-14">
          <h2 className="eyebrow">{p.eyebrow}</h2>
          <span className="hidden md:block font-mono text-[12px] text-ink-faint">{p.lead}</span>
        </div>
      </Reveal>

      <div className="space-y-px border border-line" style={{ background: "var(--line)" }}>
        {p.items.map((item, i) => (
          <Reveal key={item.case} delay={i * 0.06} className="bg-bg">
            <div className="grid gap-4 md:grid-cols-[0.9fr_1.5fr_auto] md:gap-10 items-start p-8 md:p-10">
              {/* a situação */}
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
                  {p.situationLabel}
                </span>
                <p className="mt-2 text-[15px] font-medium leading-snug text-ink">{item.case}</p>
              </div>
              {/* a decisão */}
              <p className="text-[15px] leading-relaxed text-ink-dim">{item.decision}</p>
              {/* a tag */}
              <span
                className="justify-self-start font-mono text-[11px] uppercase tracking-[0.1em] px-3 py-1.5 rounded-full whitespace-nowrap"
                style={{ color: "var(--accent)", background: "var(--bg-brand-popup, rgba(255,106,26,0.1))", border: "1px solid var(--line)" }}
              >
                {item.tag}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
