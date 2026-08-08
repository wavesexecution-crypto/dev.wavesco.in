"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/section-heading";

const steps = [
  {
    num: "01",
    title: "Discovery",
    line: "We listen first. What you do, who it's for, and what the site needs to achieve.",
  },
  {
    num: "02",
    title: "Design",
    line: "Every screen designed deliberately — typography, layout and content treated as one.",
  },
  {
    num: "03",
    title: "Development",
    line: "Clean, fast, accessible code. Built to look identical to the design, on every device.",
  },
  {
    num: "04",
    title: "Deployment",
    line: "We ship it, wire the domain and make sure everything is live and working.",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 py-28 md:py-36">
      <Container>
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="max-w-2xl text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            A process with no surprises.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={0.07 * i}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group flex h-full flex-col gap-4 rounded-2xl border border-line bg-card p-6 transition-colors duration-300 hover:border-zinc-700"
              >
                <span className="font-mono text-xs text-faint transition-colors group-hover:text-accent-text">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.line}</p>
                </div>
                <div className="mt-auto flex items-center gap-2">
                  <div className="h-px flex-1 bg-line transition-colors group-hover:bg-accent/50" />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
