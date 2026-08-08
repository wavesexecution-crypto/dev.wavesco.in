"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Eye } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/section-heading";
import { ProjectPreview } from "@/components/project-previews";
import { ProjectModal, type ModalMode } from "@/components/project-modal";
import { projects, type Project } from "@/lib/projects";

export function Projects() {
  const [active, setActive] = useState<{ project: Project; mode: ModalMode } | null>(null);

  return (
    <section id="projects" className="scroll-mt-20 py-28 md:py-36">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="max-w-2xl text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Websites we design, redesign and deploy.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              A selection of sample projects. Each one shows the full journey —
              from first screen to deployment.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={0.05 * (i % 2)}>
              <motion.article
                whileHover="hover"
                initial="rest"
                animate="rest"
                onClick={() => setActive({ project, mode: "case" })}
                className="group cursor-pointer"
              >
                <motion.div
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: 1.015 },
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative overflow-hidden rounded-2xl border border-line bg-card transition-colors duration-300 group-hover:border-zinc-700"
                >
                  <motion.div
                    variants={{
                      rest: { scale: 1.02 },
                      hover: { scale: 1.07 },
                    }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="origin-top"
                  >
                    <ProjectPreview variant={project.variant} />
                  </motion.div>

                  <motion.div
                    variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.div>

                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-300 backdrop-blur">
                    Sample
                  </span>
                </motion.div>

                <div className="flex flex-col gap-2 px-1 pt-5 pb-2">
                  <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                    <span>{project.industry}</span>
                    <span className="h-px w-6 bg-line" />
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    {project.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2.5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActive({ project, mode: "preview" });
                      }}
                      className="inline-flex h-9 items-center gap-2 rounded-full border border-line bg-surface px-4 text-[13px] text-foreground transition-colors hover:border-zinc-600"
                    >
                      <Eye className="h-3.5 w-3.5 text-muted" />
                      Live Preview
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActive({ project, mode: "case" });
                      }}
                      className="group/btn inline-flex h-9 items-center gap-2 rounded-full px-3 text-[13px] font-medium text-accent transition-colors hover:text-accent-hover"
                    >
                      Case Study
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>

      <ProjectModal
        project={active?.project ?? null}
        mode={active?.mode ?? "case"}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
