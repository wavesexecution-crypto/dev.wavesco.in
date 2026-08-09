import { ArrowUpRight, Bell, Search } from "lucide-react";
import type { ConceptProps } from "./concept";

const navItems = [
  ["Overview", true],
  ["Projects", false],
  ["Invoices", false],
  ["Team", false],
  ["Reports", false],
  ["Automations", false],
  ["Settings", false],
] as const;

const metrics = [
  { label: "Monthly revenue", value: "$48,290", delta: "+12.4%" },
  { label: "Active projects", value: "128", delta: "+8" },
  { label: "Open invoices", value: "23", delta: "$9,120" },
  { label: "Team seats", value: "41", delta: "+3" },
];

const rows = [
  { name: "Northstar Studio", project: "Brand site", status: "Paid", amount: "$4,200", date: "Aug 08" },
  { name: "Harbor & Co.", project: "Storefront", status: "Pending", amount: "$2,800", date: "Aug 07" },
  { name: "Fieldnote", project: "SaaS landing", status: "Paid", amount: "$6,500", date: "Aug 06" },
  { name: "Juniper Labs", project: "Web app", status: "Draft", amount: "$9,000", date: "Aug 05" },
  { name: "Old Mill Works", project: "Cafe site", status: "Paid", amount: "$3,100", date: "Aug 04" },
];

export function WebAppConcept({ preview = false }: ConceptProps) {
  return (
    <div className={"flex bg-[#f6f6f8] font-sans text-zinc-800" + (preview ? " min-h-[1150px]" : " min-h-[600px]")}>
      <aside className="hidden w-56 shrink-0 flex-col bg-[#12121a] p-5 text-zinc-300 md:flex">
        <div className="mb-7 flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500 text-xs font-bold text-white">
            A
          </span>
          <span className="text-sm font-semibold text-white">Acmeflow</span>
        </div>
        {navItems.map(([name, active]) => (
          <span
            key={name}
            className={
              "mb-1 rounded-lg px-3 py-2 text-[13px] " +
              (active ? "bg-white/10 font-medium text-white" : "text-zinc-400")
            }
          >
            {name}
          </span>
        ))}
        <div className="mt-auto rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs font-medium text-white">Usage this month</p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[72%] rounded-full bg-indigo-400" />
          </div>
          <p className="mt-1.5 text-[11px] text-zinc-500">72% of 10k requests</p>
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <div className="flex h-14 items-center justify-between border-b border-zinc-200 bg-white px-5">
          <p className="text-sm font-medium">Overview</p>
          <div className="flex items-center gap-4">
            <span className="hidden rounded-full border border-zinc-200 px-3 py-1 font-mono text-[11px] text-zinc-500 sm:block">
              Last 30 days
            </span>
            <Search className="h-4 w-4 text-zinc-400" />
            <span className="relative">
              <Bell className="h-4 w-4 text-zinc-400" />
              <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-indigo-500" />
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-600">
              AK
            </span>
          </div>
        </div>

        <div className="p-5 md:p-7">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-2xl border border-zinc-200 bg-white p-4">
                <p className="text-xs text-zinc-500">{m.label}</p>
                <p className="mt-1 text-xl font-semibold tracking-tight">{m.value}</p>
                <p className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                  <ArrowUpRight className="h-3 w-3" /> {m.delta}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-medium">Revenue</p>
                <span className="font-mono text-[11px] text-zinc-500">vs. last period +18%</span>
              </div>
              <div className="flex h-36 items-end gap-2">
                {[34, 48, 40, 62, 55, 74, 68, 82, 76, 90, 84, 96].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-md bg-indigo-500/80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="mt-2 flex justify-between font-mono text-[10px] text-zinc-400">
                <span>Jan</span>
                <span>Mar</span>
                <span>May</span>
                <span>Jul</span>
                <span>Sep</span>
                <span>Nov</span>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="mb-4 text-sm font-medium">Quick actions</p>
              <div className="flex flex-col gap-2.5">
                {[
                  ["Create invoice", "Send a new invoice to a client"],
                  ["Add seat", "Invite a teammate"],
                  ["Run report", "Export monthly summary"],
                ].map(([t, s]) => (
                  <div
                    key={t}
                    className="flex items-center justify-between rounded-xl border border-zinc-200 px-4 py-3"
                  >
                    <div>
                      <p className="text-[13px] font-medium">{t}</p>
                      <p className="text-[11px] text-zinc-500">{s}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-zinc-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
            <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-3">
              <p className="text-sm font-medium">Recent invoices</p>
              <span className="text-xs text-indigo-600">View all</span>
            </div>
            <table className="w-full text-left text-[13px]">
              <thead>
                <tr className="border-b border-zinc-100 text-[11px] uppercase tracking-wide text-zinc-400">
                  <th className="px-5 py-2.5 font-medium">Client</th>
                  <th className="px-5 py-2.5 font-medium">Project</th>
                  <th className="hidden px-5 py-2.5 font-medium sm:table-cell">Status</th>
                  <th className="px-5 py-2.5 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.name} className="border-b border-zinc-100 last:border-0">
                    <td className="px-5 py-3">
                      <p className="font-medium">{r.name}</p>
                      <p className="text-[11px] text-zinc-400">{r.date}</p>
                    </td>
                    <td className="px-5 py-3 text-zinc-600">{r.project}</td>
                    <td className="hidden px-5 py-3 sm:table-cell">
                      <span
                        className={
                          "rounded-full px-2.5 py-1 text-[11px] " +
                          (r.status === "Paid"
                            ? "bg-emerald-50 text-emerald-600"
                            : r.status === "Pending"
                              ? "bg-amber-50 text-amber-600"
                              : "bg-zinc-100 text-zinc-500")
                        }
                      >
                        {r.status}
                      </span>
                    </td>
                    <td className="px-5 py-3 font-medium">{r.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {!preview && (
            <p className="mt-6 text-center text-xs text-zinc-400">
              Concept product UI by WavesCo — interface mockup, not a real client app.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
