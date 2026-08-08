"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/section-heading";
import { site } from "@/lib/site";

const services = [
  {
    num: "01",
    title: "Website Design",
    line: "A website designed around your business — not a template with your logo pasted on top. Typography, layout and content working together.",
  },
  {
    num: "02",
    title: "Website Redesign",
    line: "Your current site isn't selling. We rebuild it with a clear message, a clear structure and a design that finally matches your standards.",
  },
  {
    num: "03",
    title: "Deployment",
    line: "Design is only half the job. We ship fast, accessible, well-coded sites and handle the launch — hosting, domain, the lot.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-line/70 py-28 md:py-36">
      <Container>
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="max-w-2xl text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Three things. Done properly.
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col">
          {services.map((service, i) => (
            <Reveal key={service.num} delay={0.05 * i}>
              <motion.a
                href={`#contact`}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-start gap-6 border-t border-line py-8 transition-colors last:border-b md:gap-10 md:py-10"
              >
                <span className="mt-1.5 font-mono text-xs text-faint md:text-sm">
                  {service.num}
                </span>
                <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-8">
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent-text md:text-4xl">
                    {service.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-muted md:text-[15px]">
                    {service.line}
                  </p>
                </div>
                <ArrowUpRight className="mt-2 h-5 w-5 shrink-0 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-text" />
              </motion.a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <p className="text-sm text-muted">
            Want to talk it through?{" "}
            <a
              href={site.booking.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-text underline-offset-4 transition-colors hover:text-accent-text-hover hover:underline"
            >
              Book a call
            </a>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
