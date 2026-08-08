import { Logo } from "@/components/logo";
import { Container } from "@/components/container";
import { site } from "@/lib/site";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-line/70 pb-10 pt-16">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col gap-4">
            <a href="#top" aria-label={`${site.name} — home`} className="w-fit">
              <Logo />
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              A small studio designing, redesigning and deploying premium
              websites.
            </p>
          </div>

          <nav className="flex flex-col gap-2.5" aria-label="Footer">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="w-fit text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-line/60 pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.18em]">
            Design · Build · Deploy
          </p>
        </div>
      </Container>
    </footer>
  );
}
