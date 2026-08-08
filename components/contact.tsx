"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, Check } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/section-heading";
import { site } from "@/lib/site";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `New project inquiry\n\nName: ${name}\nEmail: ${email || "not provided"}\n\n${message}`
    );
    window.open(`https://wa.me/${site.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
    window.setTimeout(() => setSent(false), 4000);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-line bg-card p-6 md:p-7"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-name" className="text-xs font-medium text-muted">
          Name
        </label>
        <input
          id="cf-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          autoComplete="name"
          className="h-11 rounded-lg border border-line bg-surface px-3.5 text-sm text-foreground placeholder:text-faint focus:border-accent focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-email" className="text-xs font-medium text-muted">
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          autoComplete="email"
          className="h-11 rounded-lg border border-line bg-surface px-3.5 text-sm text-foreground placeholder:text-faint focus:border-accent focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="text-xs font-medium text-muted">
          Project details
        </label>
        <textarea
          id="cf-message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What are you building, and when do you want it live?"
          rows={4}
          className="resize-none rounded-lg border border-line bg-surface px-3.5 py-3 text-sm text-foreground placeholder:text-faint focus:border-accent focus:outline-none"
        />
      </div>

      <motion.button
        type="submit"
        whileTap={{ scale: 0.98 }}
        className="mt-1 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-accent text-sm font-medium text-white transition-colors hover:bg-accent-hover"
      >
        {sent ? (
          <>
            <Check className="h-4 w-4" />
            Opening WhatsApp…
          </>
        ) : (
          <>
            Send Message
            <Send className="h-4 w-4" />
          </>
        )}
      </motion.button>
      <p className="text-xs leading-relaxed text-faint">
        Your message opens in WhatsApp — no form data is stored on this site.
      </p>
    </form>
  );
}

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line/70 py-28 md:py-36">
      <Container>
        <Reveal className="flex max-w-3xl flex-col gap-5">
          <Eyebrow>Contact</Eyebrow>
          <h2 className="text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Let&apos;s build something worth visiting.
          </h2>
          <p className="text-base leading-relaxed text-muted md:text-lg">
            Tell us what you&apos;re building and we&apos;ll tell you honestly
            whether we can help. We reply within a day.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <Reveal className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-line bg-card">
              <div className="flex items-center justify-between border-b border-line/70 px-5 py-3.5">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  Book a call
                </p>
                <a
                  href={site.booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent-text transition-colors hover:text-accent-text-hover"
                >
                  Open in new tab ↗
                </a>
              </div>
              <iframe
                src={site.booking.url}
                title="Book a call with WavesCo"
                className="h-[560px] w-full"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${site.email}`}
                className="group flex flex-1 items-center gap-3 rounded-2xl border border-line bg-card px-5 py-4 transition-colors hover:border-zinc-700"
              >
                <Mail className="h-4 w-4 text-muted transition-colors group-hover:text-accent-text" />
                <div>
                  <p className="text-xs text-faint">Email</p>
                  <p className="text-sm font-medium text-foreground">{site.email}</p>
                </div>
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-1 items-center gap-3 rounded-2xl border border-line bg-card px-5 py-4 transition-colors hover:border-zinc-700"
              >
                <MessageCircle className="h-4 w-4 text-muted transition-colors group-hover:text-accent-text" />
                <div>
                  <p className="text-xs text-faint">WhatsApp</p>
                  <p className="text-sm font-medium text-foreground">Chat with us</p>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
