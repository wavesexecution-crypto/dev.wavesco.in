import Link from "next/link";
import { engagements, installationPhases, siteLinks } from "@/lib/engagements";

export default function Page() {
  return (
    <main className="min-h-screen bg-paper text-foreground">
      {/* ============================================================
          NAV
          ============================================================ */}
      <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-line">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold tracking-tight text-navy"
          >
            <span className="inline-block w-2 h-2 bg-accent rounded-full" />
            <span>dev.wavesco.in</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider uppercase text-body">
            <Link href="#engagements" className="hover:text-navy transition-colors">
              Engagements
            </Link>
            <Link href="#method" className="hover:text-navy transition-colors">
              Method
            </Link>
            <Link href="#stack" className="hover:text-navy transition-colors">
              Stack
            </Link>
            <a
              href={siteLinks.marketing}
              className="hover:text-navy transition-colors"
              target="_blank"
              rel="noopener"
            >
              wavesco.in ↗
            </a>
            <a
              href={siteLinks.clientApp}
              className="hover:text-navy transition-colors"
              target="_blank"
              rel="noopener"
            >
              app.wavesco.in ↗
            </a>
          </div>
          <a
            href={siteLinks.booking}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-white text-sm font-medium rounded-sm hover:bg-navy-light transition-colors"
          >
            Book Architecture Review
          </a>
        </nav>
      </header>

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="border-b border-line">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-32 md:pt-28 md:pb-40">
          {/* system status strip */}
          <div className="flex items-center justify-between mb-12 font-mono text-xs tracking-widest uppercase text-muted">
            <div className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              <span>studio // active</span>
            </div>
            <span className="hidden md:inline">build.log — Q3 2025</span>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-9">
              <h1 className="display-xl">
                Where WavesCo <br />
                <span className="text-accent">installs operating systems</span>{" "}
                <br />
                for founder-led companies.
              </h1>
            </div>
            <div className="col-span-12 md:col-span-3 flex md:items-end">
              <p className="body-lg">
                The build studio behind every{" "}
                <a
                  href={siteLinks.marketing}
                  className="text-accent hover:text-accent-hover transition-colors"
                  target="_blank"
                  rel="noopener"
                >
                  wavesco.in
                </a>{" "}
                engagement. Engagements, install method, live deployments.
              </p>
            </div>
          </div>

          {/* bottom meta strip */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-line">
            <div>
              <div className="font-mono text-xs tracking-wider uppercase text-muted mb-2">
                engagements // live
              </div>
              <div className="font-mono text-3xl text-navy">
                {engagements.filter((e) => e.status === "live").length}
              </div>
            </div>
            <div>
              <div className="font-mono text-xs tracking-wider uppercase text-muted mb-2">
                install.method
              </div>
              <div className="font-mono text-3xl text-navy">
                {installationPhases.length} <span className="text-muted">phases</span>
              </div>
            </div>
            <div>
              <div className="font-mono text-xs tracking-wider uppercase text-muted mb-2">
                verticals
              </div>
              <div className="font-mono text-3xl text-navy">
                {
                  new Set(engagements.map((e) => e.vertical.split(" / ")[0]))
                    .size
                }
              </div>
            </div>
            <div>
              <div className="font-mono text-xs tracking-wider uppercase text-muted mb-2">
                studio.location
              </div>
              <div className="font-mono text-3xl text-navy">
                remote <span className="text-muted">/ global</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          POSITIONING — what's actually built here
          ============================================================ */}
      <section className="border-b border-line">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-xs tracking-widest uppercase text-muted">
                section // 01
              </div>
              <div className="font-mono text-xs tracking-widest uppercase text-muted mt-1">
                what is this
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="display-lg mb-8">
                We don't design websites. <br />
                <span className="text-muted">
                  We install the operating system behind your business.
                </span>
              </h2>
              <p className="body-lg max-w-3xl mb-12">
                A founder-led company runs on memory until it can't. Then it
                runs on the founder. We replace that with a system — clear
                roles, decision rights, handoffs, and review loops — so the
                team can run operations, make decisions, and keep standards
                without waiting for one person.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
                {[
                  {
                    code: "INT.01",
                    title: "Intake",
                    detail:
                      "Lead arrives anywhere — web form, WhatsApp, walk-in. Captured into one stream, qualified against the same rules.",
                  },
                  {
                    code: "SYS.02",
                    title: "Ownership",
                    detail:
                      "Every task has an owner. No 'someone should follow up' — the system assigns, reminds, escalates.",
                  },
                  {
                    code: "DEC.03",
                    title: "Decision rights",
                    detail:
                      "Tier 1 decisions run without approval. Tier 2 route to a named role. Tier 3 escalate to the founder.",
                  },
                  {
                    code: "EXE.04",
                    title: "Execution rhythm",
                    detail:
                      "Daily briefs, weekly reviews, monthly retros. The cadence the system runs on, not the calendar the founder keeps.",
                  },
                  {
                    code: "QC.05",
                    title: "Quality control",
                    detail:
                      "Exceptions surface automatically. The team knows about a problem before the customer tells them.",
                  },
                  {
                    code: "RP.06",
                    title: "Reporting",
                    detail:
                      "Founder gets a one-page daily brief. No more opening six tabs to know what happened yesterday.",
                  },
                ].map((block) => (
                  <div
                    key={block.code}
                    className="bg-paper p-6 hover:bg-surface transition-colors"
                  >
                    <div className="font-mono text-xs tracking-wider text-accent mb-3">
                      {block.code}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-navy">
                      {block.title}
                    </h3>
                    <p className="text-sm text-body leading-relaxed">
                      {block.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ENGAGEMENTS — the build log
          ============================================================ */}
      <section
        id="engagements"
        className="border-b border-line bg-surface"
      >
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-xs tracking-widest uppercase text-muted">
                section // 02
              </div>
              <div className="font-mono text-xs tracking-widest uppercase text-muted mt-1">
                build.log
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="display-lg mb-4">Engagements</h2>
              <p className="body-lg max-w-2xl">
                Where the OS is currently running. Placeholder entries
                illustrate the engagement type — real client work is marked
                live.
              </p>
            </div>
          </div>

          <div className="space-y-px bg-line">
            {engagements.map((e, i) => (
              <EngagementRow key={e.slug} engagement={e} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          METHOD — install phases
          ============================================================ */}
      <section id="method" className="border-b border-line">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-xs tracking-widest uppercase text-muted">
                section // 03
              </div>
              <div className="font-mono text-xs tracking-widest uppercase text-muted mt-1">
                install.method
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="display-lg mb-4">
                A disciplined path <br />
                <span className="text-muted">from dependency to autonomy.</span>
              </h2>
              <p className="body-lg max-w-2xl">
                Four phases. Each one has a defined output, a defined owner,
                and a defined exit condition. No ambiguity about when a phase
                is done.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
            {installationPhases.map((phase) => (
              <div
                key={phase.n}
                className="bg-paper p-8 hover:bg-surface transition-colors group"
              >
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-mono text-xs tracking-widest text-accent">
                    {phase.code}
                  </span>
                  <span className="font-mono text-xs tracking-wider text-muted">
                    phase {phase.n}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-navy">
                  {phase.title}
                </h3>
                <p className="text-sm text-body leading-relaxed">
                  {phase.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          STACK — what we actually use
          ============================================================ */}
      <section id="stack" className="border-b border-line bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-xs tracking-widest uppercase text-muted">
                section // 04
              </div>
              <div className="font-mono text-xs tracking-widest uppercase text-muted mt-1">
                install.stack
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="display-lg mb-4">
                What the OS is built on.
              </h2>
              <p className="body-lg max-w-2xl">
                The tools we connect, not the tools we replace. Most businesses
                already pay for half of this stack — they're just not talking
                to each other.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
            <StackRow
              layer="application"
              title="The client app"
              detail="Where the client sees their OS running. Their dashboard, their daily brief, their decision queue."
              chips={["Next.js", "Prisma 6.19", "Postgres (Neon)", "Vercel"]}
            />
            <StackRow
              layer="workflow"
              title="The automation layer"
              detail="Where work actually moves. Connects WhatsApp, CRM, sheets, payments, and the team's tools into one operating system."
              chips={["n8n", "Webhooks", "MCP", "Custom AI agents"]}
            />
            <StackRow
              layer="identity"
              title="Identity and access"
              detail="One login, one set of permissions, one audit trail. No more shared passwords in a Google Doc."
              chips={["Supabase auth", "OAuth integrations", "Row-level security"]}
            />
            <StackRow
              layer="payments"
              title="Money in, money out"
              detail="Invoices generated, receipts sent, payments reconciled — without the founder doing it at midnight."
              chips={["Razorpay", "Receipt automation", "80G certificates"]}
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-xs tracking-widest uppercase text-accent">
                section // 05
              </div>
              <div className="font-mono text-xs tracking-widest uppercase text-white/60 mt-1">
                start.engagement
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="display-lg mb-8 text-white">
                Ready to see what still depends on you?
              </h2>
              <p className="body-lg text-white/70 max-w-2xl mb-12">
                We start with a confidential intake review. 30 minutes. We
                tell you what we'd do, what it would take, and whether we're
                the right team for it. No deck, no commitment.
              </p>

              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href={siteLinks.booking}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-navy-dark font-semibold rounded-sm hover:bg-accent-hover transition-colors"
                >
                  Book Architecture Review
                  <span aria-hidden>→</span>
                </a>
                <a
                  href={siteLinks.marketing}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded-sm hover:bg-white/5 transition-colors"
                >
                  See wavesco.in <strong className="font-bold">positioning</strong> ↗
                </a>
                <a
                  href={siteLinks.clientApp}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded-sm hover:bg-white/5 transition-colors"
                >
                  See app.wavesco.in <strong className="font-bold">dashboard</strong> ↗
                </a>
              </div>

              <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs tracking-wider">
                <div>
                  <div className="text-white/40 uppercase mb-1">email</div>
                  <a
                    href={`mailto:${siteLinks.email}`}
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    {siteLinks.email}
                  </a>
                </div>
                <div>
                  <div className="text-white/40 uppercase mb-1">architecture</div>
                  <div className="text-white/80">
                    marketing {siteLinks.marketing}
                  </div>
                  <div className="text-white/80">
                    <strong className="font-bold">dashboard</strong> {siteLinks.clientApp}
                  </div>
                </div>
                <div>
                  <div className="text-white/40 uppercase mb-1">studio</div>
                  <div className="text-white/80">{siteLinks.buildStudio}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOOTER
          ============================================================ */}
      <footer className="border-t border-line">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="font-mono text-xs tracking-wider text-muted">
            © {new Date().getFullYear()} WavesCo. Build studio. All rights
            reserved.
          </div>
          <div className="font-mono text-xs tracking-wider text-muted flex gap-6">
            <a
              href={siteLinks.marketing}
              target="_blank"
              rel="noopener"
              className="hover:text-navy transition-colors"
            >
              wavesco.in
            </a>
            <a
              href={siteLinks.clientApp}
              target="_blank"
              rel="noopener"
              className="hover:text-navy transition-colors"
            >
              app.wavesco.in
            </a>
            <a
              href={siteLinks.booking}
              target="_blank"
              rel="noopener"
              className="hover:text-navy transition-colors"
            >
              cal.com/wavesco.in
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ============================================================
   Sub-components
   ============================================================ */

function EngagementRow({
  engagement,
  index,
}: {
  engagement: (typeof engagements)[number];
  index: number;
}) {
  const isPlaceholder = engagement.status === "placeholder";
  return (
    <article className="bg-paper p-8 md:p-10 group hover:bg-white transition-colors">
      <div className="grid grid-cols-12 gap-6 items-start">
        {/* index + status */}
        <div className="col-span-12 md:col-span-2">
          <div className="font-mono text-xs tracking-widest text-muted mb-2">
            ENG.{String(index).padStart(2, "0")}
          </div>
          <div
            className={`inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase ${
              isPlaceholder ? "text-muted" : "text-accent"
            }`}
          >
            <span
              className={`inline-block w-1.5 h-1.5 rounded-full ${
                isPlaceholder ? "bg-muted" : "bg-accent"
              }`}
            />
            {engagement.status}
          </div>
        </div>

        {/* client + vertical */}
        <div className="col-span-12 md:col-span-4">
          <h3 className="text-2xl font-semibold text-navy mb-2">
            {engagement.client}
          </h3>
          <div className="font-mono text-xs tracking-wider text-body">
            {engagement.vertical} · {engagement.year}
          </div>
        </div>

        {/* systems + outcome */}
        <div className="col-span-12 md:col-span-6">
          <div className="font-mono text-xs tracking-wider uppercase text-muted mb-2">
            systems installed
          </div>
          <ul className="text-sm text-navy space-y-1 mb-4">
            {engagement.systemsInstalled.map((s) => (
              <li key={s} className="flex gap-2">
                <span className="text-accent">→</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <div className="font-mono text-xs tracking-wider uppercase text-muted mb-1">
            outcome
          </div>
          <p className="text-sm text-body italic leading-relaxed">
            {engagement.outcome}
          </p>
        </div>
      </div>
    </article>
  );
}

function StackRow({
  layer,
  title,
  detail,
  chips,
}: {
  layer: string;
  title: string;
  detail: string;
  chips: string[];
}) {
  return (
    <div className="bg-paper p-8 md:p-10">
      <div className="font-mono text-xs tracking-widest uppercase text-accent mb-3">
        layer.{layer}
      </div>
      <h3 className="text-xl font-semibold text-navy mb-3">{title}</h3>
      <p className="text-sm text-body leading-relaxed mb-6">{detail}</p>
      <div className="flex flex-wrap gap-2">
        {chips.map((c) => (
          <span
            key={c}
            className="font-mono text-xs tracking-wider px-3 py-1 bg-card text-navy rounded-sm"
          >
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
