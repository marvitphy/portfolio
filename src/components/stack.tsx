"use client";

import { Reveal } from "./motion-primitives";
import { useI18n } from "./language-provider";

export function Stack() {
  const { t } = useI18n();
  const s = t.stack;

  return (
    <section id="stack" className="px-6 md:px-12 py-24 md:py-36 border-t border-line">
      <Reveal>
        <div className="flex items-baseline justify-between border-b border-line pb-6 mb-14">
          <h2 className="eyebrow">{s.eyebrow}</h2>
          <span className="display-lg leading-none">{s.lead}</span>
        </div>
      </Reveal>

      <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
        {s.groups.map((g, i) => (
          <Reveal key={g.label} delay={i * 0.08}>
            <div className="grid grid-cols-[auto_1fr] gap-x-8 items-baseline">
              <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-ink-faint w-28 shrink-0">
                {g.label}
              </span>
              <ul className="flex flex-wrap gap-x-5 gap-y-2.5">
                {g.items.map((item) => (
                  <li key={item} className="text-[15px] text-ink-dim">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
