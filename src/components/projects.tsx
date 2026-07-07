"use client";

import Image from "next/image";
import { Reveal } from "./motion-primitives";
import { useI18n } from "./language-provider";

export function Projects() {
  const { t } = useI18n();
  const p = t.projects;

  return (
    <section id="projetos" className="px-6 md:px-12 py-24 md:py-36 border-t border-line">
      <Reveal>
        <div className="flex items-baseline justify-between border-b border-line pb-6 mb-16">
          <h2 className="eyebrow">{p.eyebrow}</h2>
          <span className="display-lg leading-none">{p.lead}</span>
        </div>
      </Reveal>

      <div className="space-y-28 md:space-y-40">
        {p.items.map((proj, i) => (
          <article key={proj.id} className="relative">
            {i === 0 && (
              <div
                aria-hidden
                className="pointer-events-none absolute -top-10 -left-[8%] h-[40vh] w-[40vh] rounded-full opacity-[0.08] blur-[130px]"
                style={{ background: "var(--accent)" }}
              />
            )}

            <div className="grid gap-y-8 lg:grid-cols-[auto_1fr] lg:gap-x-16">
              <div className="lg:w-[22rem]">
                <Reveal>
                  <span className="font-mono text-[13px]" style={{ color: "var(--accent)" }}>
                    {proj.id}
                  </span>
                  <h3
                    className="mt-3 font-semibold tracking-tight leading-none"
                    style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.75rem)" }}
                  >
                    {proj.name}
                  </h3>
                  <p className="eyebrow mt-4 max-w-[26ch]" style={{ letterSpacing: "0.1em" }}>
                    {proj.kind}
                  </p>
                </Reveal>
              </div>

              <div>
                <Reveal delay={0.05}>
                  <p className="max-w-[60ch] text-lg leading-relaxed text-ink-dim">{proj.desc}</p>
                </Reveal>

                {proj.metrics.length > 0 && (
                  <Reveal delay={0.1}>
                    <div className="mt-10 flex flex-wrap gap-x-14 gap-y-6">
                      {proj.metrics.map((m) => (
                        <div key={m.label} className="flex flex-col gap-1.5">
                          <span className="font-mono font-medium tracking-tighter leading-none tabular-nums" style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)" }}>
                            {m.value}
                          </span>
                          <span className="eyebrow" style={{ fontSize: "0.66rem" }}>{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                )}

                {proj.shots.length > 0 && <ProjectGallery shots={proj.shots} priority={i === 0} />}

                <div className="mt-12 border-t border-line">
                  {proj.cases.map((c, ci) => (
                    <Reveal key={c.title} delay={ci * 0.05}>
                      <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-1 md:gap-6 py-5 border-b border-line">
                        <h4 className="text-[15px] font-semibold tracking-tight">{c.title}</h4>
                        <p className="text-[14px] leading-relaxed text-ink-dim">{c.desc}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>

                <Reveal delay={0.1}>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {proj.stack.map((s) => (
                      <li
                        key={s}
                        className="font-mono text-[12px] px-2.5 py-1 rounded-md text-ink-dim"
                        style={{ background: "var(--bg-elev)", border: "1px solid var(--line)" }}
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

type Shot = { src: string; caption: string };

function ProjectGallery({ shots, priority }: { shots: Shot[]; priority: boolean }) {
  const [lead, ...rest] = shots;

  return (
    <div className="mt-12 space-y-4">
      <Reveal delay={0.08}>
        <ShotFrame shot={lead} priority={priority} sizes="(min-width: 1024px) 60vw, 100vw" />
      </Reveal>
      {rest.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          {rest.map((shot, i) => (
            <Reveal key={shot.src} delay={0.12 + i * 0.06}>
              <ShotFrame shot={shot} sizes="(min-width: 1024px) 30vw, 50vw" />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}

function ShotFrame({ shot, priority, sizes }: { shot: Shot; priority?: boolean; sizes: string }) {
  return (
    <figure className="group">
      <div
        className="relative overflow-hidden rounded-xl"
        style={{ border: "1px solid var(--line)", background: "var(--bg-elev)" }}
      >
        <Image
          src={shot.src}
          alt={shot.caption}
          width={1920}
          height={1080}
          priority={priority}
          sizes={sizes}
          className="h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ boxShadow: "inset 0 0 0 1px var(--accent)", borderRadius: "inherit" }}
        />
      </div>
      <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
        {shot.caption}
      </figcaption>
    </figure>
  );
}
