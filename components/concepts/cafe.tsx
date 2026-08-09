import Image from "next/image";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { imgs } from "./images";
import type { ConceptProps } from "./concept";

const menu = [
  ["Espresso", "£2.60"],
  ["Flat white", "£3.40"],
  ["Batch brew", "£2.90"],
  ["Cardamom bun", "£3.10"],
  ["Sourdough", "£4.20"],
  ["Butter croissant", "£3.40"],
];

const bakes = [
  { img: imgs.cafe.c2, name: "Almond croissant", line: "Baked before dawn, gone by noon." },
  { img: imgs.cafe.c3, name: "Seeded sourdough", line: "Three-day ferment, stone flour." },
  { img: imgs.cafe.c1, name: "House roast", line: "Single-origin, roasted weekly." },
];

export function CafeConcept({ preview = false }: ConceptProps) {
  return (
    <div className={"bg-[#f6efe4] font-sans text-[#3d2c22]" + (preview ? " min-h-[1150px]" : "")}>
      <header className="flex h-14 items-center justify-between border-b border-[#3d2c22]/10 px-5 md:px-10">
        <span className="font-serif text-lg tracking-[0.22em]">EMBER &amp; RYE</span>
        <nav className="hidden items-center gap-8 text-[13px] md:flex">
          <span>Menu</span>
          <span>Bakery</span>
          <span>Visit</span>
          <span>Wholesale</span>
        </nav>
        <span className="rounded-full bg-[#8a5a2b] px-4 py-1.5 text-xs font-medium text-[#f6efe4]">
          Order ahead
        </span>
      </header>

      <section className="grid md:grid-cols-2">
        <div className="relative h-72 md:h-[520px]">
          <Image
            src={imgs.cafe.hero}
            alt=""
            fill
            priority={!preview}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center gap-5 px-5 py-14 md:px-12 md:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#8a5a2b]">
            Corner of Elm &amp; Third
          </p>
          <h1 className="font-serif text-4xl leading-[1.02] md:text-5xl">
            Brewed slow.
            <br />
            Baked daily.
          </h1>
          <p className="max-w-md text-sm leading-relaxed text-[#3d2c22]/70">
            A neighbourhood coffee shop and bakery. Single-origin espresso,
            sourdough from our own starter, and a counter that smells like
            butter by nine.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#8a5a2b] px-6 py-3 text-sm font-medium text-[#f6efe4]">
              Order ahead <ArrowRight className="h-4 w-4" />
            </span>
            <span className="inline-flex items-center rounded-full border border-[#3d2c22]/25 px-6 py-3 text-sm">
              See the menu
            </span>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 md:px-10 md:py-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-serif text-2xl md:text-3xl">From the counter</h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#3d2c22]/50">
            Coffee · Bakes
          </span>
        </div>
        <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 md:grid-cols-3">
          {menu.map(([name, price]) => (
            <div key={name} className="flex items-baseline justify-between border-b border-[#3d2c22]/10 pb-2">
              <span className="text-sm">{name}</span>
              <span className="font-mono text-xs text-[#3d2c22]/60">{price}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-12 md:px-10 md:pb-16">
        <div className="grid gap-4 sm:grid-cols-3 md:gap-6">
          {bakes.map((b) => (
            <div key={b.name} className="group overflow-hidden rounded-2xl border border-[#3d2c22]/10 bg-white/50">
              <div className="relative aspect-[4/3]">
                <Image
                  src={b.img}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-medium">{b.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#3d2c22]/60">{b.line}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {!preview && (
        <>
          <section className="grid md:grid-cols-2">
            <div className="flex flex-col justify-center gap-4 px-5 py-12 md:px-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#8a5a2b]">
                Find us
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">Open from seven.</h2>
              <div className="flex flex-col gap-3 text-sm text-[#3d2c22]/80">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#8a5a2b]" /> 14 Elm Street, near the park
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#8a5a2b]" /> Mon–Fri 7–16 · Sat–Sun 8–15
                </span>
              </div>
              <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#8a5a2b] px-6 py-3 text-sm font-medium text-[#f6efe4]">
                Reserve a table
              </span>
            </div>
            <div className="relative h-72 md:h-[440px]">
              <Image
                src={imgs.cafe.interior}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </section>

          <footer className="flex flex-col items-center gap-2 border-t border-[#3d2c22]/10 px-5 py-10 text-center">
            <p className="font-serif text-xl tracking-[0.22em]">EMBER &amp; RYE</p>
            <p className="max-w-xs text-xs leading-relaxed text-[#3d2c22]/50">
              Concept cafe &amp; bakery website by WavesCo — not a live client site.
            </p>
          </footer>
        </>
      )}
    </div>
  );
}
