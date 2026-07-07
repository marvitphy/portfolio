"use client";

import Image from "next/image";
import { Reveal } from "./motion-primitives";
import { useI18n } from "./language-provider";

export function About() {
  const { t } = useI18n();
  const a = t.about;

  return (
    <section id="sobre" className="px-6 md:px-12 py-24 md:py-36 border-t border-line">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <div className="relative mx-auto w-full max-w-[26rem] lg:mx-0">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 rounded-full opacity-[0.1] blur-[100px]"
              style={{ background: "var(--accent)" }}
            />
            <div className="portrait-bleed relative">
              <Image
                src="/shots/me/marcos.png"
                alt={a.portraitAlt}
                width={1022}
                height={1539}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal delay={0.05}>
            <span className="eyebrow">{a.eyebrow}</span>
            <h2
              className="mt-5 font-semibold tracking-tight leading-[1.05]"
              style={{ fontSize: "clamp(1.9rem, 3.6vw, 3.1rem)" }}
            >
              {a.lead}
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5 border-t border-line pt-8">
            {a.body.map((para, i) => (
              <Reveal key={i} delay={0.1 + i * 0.06}>
                <p className="max-w-[54ch] text-[15px] leading-relaxed text-ink-dim md:text-lg">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
