"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/section-heading";
import { Concept } from "@/components/concepts/concept";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-28 md:py-36">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="max-w-2xl text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Six concepts, six industries.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Concept builds showing the range of websites we design —
              e-commerce, SaaS, restaurants, apps, gyms and cafés.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={0.05 * (i % 2)}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-line bg-card group-hover:scale-[1.015] group-hover:border-zinc-700">
                  <div className="pointer-events-none aspect-[4/3] w-full overflow-hidden">
                    <div className="w-[250%] origin-top-left scale-[0.4]">
                      <Concept concept={project.concept} preview />
                    </div>
                  </div>
                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-300 backdrop-blur">
                    Concept
                  </span>
                  <div className="project-card-arrow absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="flex flex-col gap-2 px-1 pt-5 pb-2">
                  <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                    <span>{project.category}</span>
                    <span className="h-px w-6 bg-line" />
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-[13px] font-medium text-accent-text">
                      View Build
                    </span>
                    <span className="text-faint">
                      <ArrowUpRight className="project-arrow-nudge h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
