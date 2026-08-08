"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { useScrollLock } from "@/components/use-scroll-lock";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pendingHref = useRef<string | null>(null);

  useScrollLock(open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        pendingHref.current = null;
        setOpen(false);
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const closeAndNavigate = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    pendingHref.current = href;
    setOpen(false);
  };

  const closeMenu = () => {
    pendingHref.current = null;
    setOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
          scrolled
            ? "border-b border-line/80 bg-background/75 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Container className="flex h-16 items-center justify-between md:h-[72px]">
          <a
            href="#top"
            className="transition-opacity hover:opacity-80"
            aria-label={`${site.name} — home`}
          >
            <Logo />
          </a>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Primary"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-muted transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button
                href={site.booking.url}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
              >
                Book a Call
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-foreground transition-colors hover:border-zinc-600 md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence onExitComplete={() => {
        const href = pendingHref.current;
        pendingHref.current = null;
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }}>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9999] h-dvh overflow-y-auto overscroll-contain bg-background md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <Container className="flex min-h-dvh flex-col">
              <div className="flex h-16 items-center justify-between">
                <a
                  href="#top"
                  onClick={closeAndNavigate("#top")}
                  className="transition-opacity hover:opacity-80"
                  aria-label={`${site.name} — home`}
                >
                  <Logo />
                </a>
                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  autoFocus
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-foreground transition-colors hover:border-zinc-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col pt-6" aria-label="Mobile">
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeAndNavigate(link.href)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.07 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-line/70 py-5 text-3xl font-semibold tracking-tight text-foreground transition-colors hover:text-accent-text"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-auto pb-10 pt-8"
              >
                <Button
                  href={site.booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="w-full"
                >
                  Book a Call
                </Button>
              </motion.div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
