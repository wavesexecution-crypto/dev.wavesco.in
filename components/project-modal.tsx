"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import type { Project } from "@/lib/projects";

const modalItem = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} — build details`}
        >
          <motion.div
            variants={modalItem}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: 24, transition: { duration: 0.2 } }}
            className="max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-line bg-surface sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-line/70 bg-surface/90 px-6 py-4 backdrop-blur">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  {project.industry} · {project.year}
                </p>
                <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-card text-muted transition-colors hover:border-zinc-600 hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-col gap-8 p-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                  Overview
                </p>
                <p className="mt-3 text-base leading-relaxed text-foreground/90">
                  {project.summary}
                </p>
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                  Approach
                </p>
                <ul className="mt-3 flex flex-col gap-3">
                  {project.approach.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                  Delivered
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.deliverables.map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-line bg-card px-3.5 py-1.5 text-xs text-muted"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                onClick={onClose}
                className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-accent-text transition-colors hover:text-accent-text-hover"
              >
                Start a project like this
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
