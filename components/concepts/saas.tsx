import { ArrowRight, GitBranch, ShieldCheck, Zap, Layers } from "lucide-react";
import type { ConceptProps } from "./concept";

const features = [
  {
    icon: Zap,
    title: "Deploys in seconds",
    line: "Push to main and your change is live. No pipelines to babysit.",
  },
  {
    icon: GitBranch,
    title: "Branch previews",
    line: "Every pull request gets its own URL. Review before you ship.",
  },
  {
    icon: ShieldCheck,
    title: "Built-in auth & edge",
    line: "Sessions, caching and rate limits handled at the edge.",
  },
  {
    icon: Layers,
    title: "One platform, all tools",
    line: "Storage, functions and analytics that talk to each other.",
  },
];

const prices = [
  { name: "Hobby", price: "Free", line: "For side projects" },
  { name: "Pro", price: "$20", line: "For serious teams" },
  { name: "Scale", price: "Custom", line: "For production at volume" },
];

function DashboardMock() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#12121c] p-5 text-left shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] text-emerald-300">
          ● All systems operational
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          ["Requests", "2.4M"],
          ["P95 latency", "38ms"],
          ["Deploys", "312"],
        ].map(([label, val]) => (
          <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[11px] text-zinc-500">{label}</p>
            <p className="mt-1 text-lg font-semibold text-white">{val}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <div className="mb-3 flex items-center justify-between text-[11px] text-zinc-500">
          <span>Traffic</span>
          <span>Last 7 days</span>
        </div>
        <div className="flex h-24 items-end gap-1.5">
          {[38, 55, 42, 70, 58, 84, 62, 90, 74, 96, 80, 100, 88, 68, 52, 76, 64, 92, 84, 60, 44, 72, 90, 78].map(
            (h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-indigo-400/70"
                style={{ height: `${h}%` }}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export function SaaSConcept({ preview = false }: ConceptProps) {
  return (
    <div className={"bg-[#0a0a12] font-sans text-zinc-100" + (preview ? " min-h-[1150px]" : "")}>
      <header className="flex h-14 items-center justify-between border-b border-white/10 px-5 md:px-10">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-500 text-[11px] font-bold text-white">
            V
          </span>
          <span className="text-sm font-semibold">Velocity</span>
        </div>
        <nav className="hidden items-center gap-8 text-[13px] text-zinc-400 md:flex">
          <span>Features</span>
          <span>Pricing</span>
          <span>Docs</span>
          <span>Changelog</span>
        </nav>
        <span className="rounded-full bg-indigo-500 px-4 py-1.5 text-xs font-medium text-white">
          Get started
        </span>
      </header>

      <section className="px-5 pb-10 pt-16 text-center md:px-10 md:pt-24">
        <p className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-indigo-300">
          <Zap className="h-3 w-3" /> Now with edge functions
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          Ship faster.
          <br />
          <span className="text-indigo-300">Sleep more.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
          The all-in-one platform for modern teams. Deploy globally in seconds,
          with previews, auth and edge compute built in.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-sm font-medium text-white">
            Start deploying <ArrowRight className="h-4 w-4" />
          </span>
          <span className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm text-zinc-200">
            View live demo
          </span>
        </div>
        <div className="mt-12 md:mt-16">
          <div className="mx-auto max-w-2xl">
            <DashboardMock />
          </div>
        </div>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">
          Designed for modern engineering teams
        </p>
      </section>

      <section className="border-t border-white/10 px-5 py-12 md:px-10 md:py-16">
        <div className="grid gap-4 md:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <f.icon className="h-5 w-5 text-indigo-300" />
              <h3 className="mt-3 text-sm font-semibold">{f.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-zinc-500">{f.line}</p>
            </div>
          ))}
        </div>
      </section>

      {!preview && (
        <>
          <section className="border-t border-white/10 px-5 py-12 md:px-10 md:py-16">
            <h2 className="mb-8 text-2xl font-semibold tracking-tight md:text-3xl">
              Simple, predictable pricing.
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {prices.map((p) => (
                <div
                  key={p.name}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <p className="text-sm text-zinc-400">{p.name}</p>
                  <p className="mt-2 text-3xl font-semibold">{p.price}</p>
                  <p className="mt-1 text-xs text-zinc-500">{p.line}</p>
                  <span className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-white/15 py-2.5 text-sm text-zinc-200">
                    Choose {p.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <footer className="border-t border-white/10 px-5 py-10 text-center">
            <p className="text-xs text-zinc-500">
              Concept landing page by WavesCo — not a live client site.
            </p>
          </footer>
        </>
      )}
    </div>
  );
}
