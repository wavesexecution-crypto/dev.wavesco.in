import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { imgs } from "./images";
import type { ConceptProps } from "./concept";

const programs = [
  { img: imgs.fitness.p1, name: "Strength", line: "Barbell & bodyweight — build a base that lasts." },
  { img: imgs.fitness.p2, name: "Conditioning", line: "Engine work. Intervals, sleds, real sweat." },
  { img: imgs.fitness.p3, name: "Mobility", line: "Move well first — joints, range, recovery." },
  { img: imgs.fitness.p4, name: "1:1 Coaching", line: "A coach, a plan, and accountability." },
];

const coaches = [
  { icon: "S", role: "Head of Strength", bio: "15 years coaching competitive powerlifting." },
  { icon: "C", role: "Conditioning Lead", bio: "Former national-level sprinter." },
  { icon: "R", role: "Mobility Specialist", bio: "Rehab background, movement-first approach." },
];

export function FitnessConcept({ preview = false }: ConceptProps) {
  return (
    <div className={"bg-[#0b0b0b] font-sans text-white" + (preview ? " min-h-[1150px]" : "")}>
      <header className="flex h-14 items-center justify-between border-b border-white/10 px-5 md:px-10">
        <span className="text-base font-bold uppercase tracking-[0.2em]">Forge</span>
        <nav className="hidden items-center gap-8 text-[13px] uppercase tracking-wide text-white/70 md:flex">
          <span>Training</span>
          <span>Coaches</span>
          <span>Schedule</span>
          <span>Membership</span>
        </nav>
        <span className="rounded-full bg-[#ff4d2e] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
          Start now
        </span>
      </header>

      <section className="relative flex h-[540px] items-center md:h-[620px]">
        <Image
          src={imgs.fitness.hero}
          alt=""
          fill
          priority={!preview}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b] via-[#0b0b0b]/60 to-transparent" />
        <div className="relative px-5 md:px-10">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.35em] text-[#ff4d2e]">
            Performance studio — Downtown
          </p>
          <h1 className="max-w-xl text-5xl font-bold uppercase leading-[0.9] tracking-tight md:text-7xl">
            Stronger
            <br />
            starts
            <br />
            here.
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            Small-group training, world-class coaching and a plan that actually
            fits your life. First session is on us.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#ff4d2e] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white">
              Claim free session <ArrowRight className="h-4 w-4" />
            </span>
            <span className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm text-white/90">
              View membership
            </span>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 md:px-10 md:py-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold uppercase tracking-tight md:text-3xl">
            Training programs
          </h2>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.25em] text-white/40 sm:block">
            4 tracks
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <div key={p.name} className="group overflow-hidden rounded-2xl border border-white/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src={p.img}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
              <div className="p-4">
                <p className="text-base font-bold uppercase tracking-wide">{p.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-white/50">{p.line}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {!preview && (
        <>
          <section className="border-t border-white/10 px-5 py-12 md:px-10 md:py-16">
            <h2 className="mb-8 text-2xl font-bold uppercase tracking-tight md:text-3xl">
              Coaches who show up
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {coaches.map((c) => (
                <div key={c.role} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff4d2e]/15 text-lg font-bold text-[#ff4d2e]">
                    {c.icon}
                  </span>
                  <p className="mt-4 text-sm font-bold uppercase tracking-wide">{c.role}</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/50">{c.bio}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#ff4d2e] p-8 md:flex-row md:items-center md:p-10">
              <div>
                <h3 className="text-2xl font-bold uppercase leading-none tracking-tight text-white">
                  First session free
                </h3>
                <p className="mt-2 max-w-md text-sm text-white/85">
                  Book a 60-minute intro — movement assessment, a mini workout,
                  and a plan. No obligation.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#0b0b0b] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white">
                <Clock className="h-4 w-4" /> Book your slot
              </span>
            </div>
          </section>

          <footer className="border-t border-white/10 px-5 py-10 text-center">
            <p className="text-xs text-white/40">
              Concept gym website by WavesCo — not a live client site.
            </p>
          </footer>
        </>
      )}
    </div>
  );
}
