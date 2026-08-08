"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/section-heading";
import { ProjectPreview } from "@/components/project-previews";
import { ProjectModal } from "@/components/project-modal";
import { projects, type Project } from "@/lib/projects";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-20 py-28 md:py-36">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="max-w-2xl text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Websites we design, redesign and deploy.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              A selection of recent builds — each one designed, built and
              deployed by the studio.
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
                onClick={() => setActive(project)}
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

                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-[13px] font-medium text-accent-text">
                      View Build
                    </span>
                    <span className="text-faint transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
