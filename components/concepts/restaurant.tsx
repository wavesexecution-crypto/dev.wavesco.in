import Image from "next/image";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { imgs } from "./images";
import type { ConceptProps } from "./concept";

const dishes = [
  { img: imgs.restaurant.d1, name: "Seasonal roots", line: "Roasted roots, brown butter, pickled alliums" },
  { img: imgs.restaurant.d2, name: "Wood-fired pizza", line: "48-hour dough, San Marzano, basil" },
  { img: imgs.restaurant.d3, name: "Day-boat fish", line: "Market fish, citrus, fennel pollen" },
];

export function RestaurantConcept({ preview = false }: ConceptProps) {
  return (
    <div className={"bg-[#151009] font-sans text-[#f3e9d8]" + (preview ? " min-h-[1150px]" : "")}>
      <header className="flex h-14 items-center justify-between border-b border-[#f3e9d8]/10 px-5 md:px-10">
        <span className="font-serif text-lg tracking-[0.3em]">SAISON</span>
        <nav className="hidden items-center gap-8 text-[13px] text-[#f3e9d8]/70 md:flex">
          <span>Menu</span>
          <span>Reservations</span>
          <span>Journal</span>
          <span>Contact</span>
        </nav>
        <span className="rounded-full bg-[#c99b4a] px-4 py-1.5 text-xs font-medium text-[#151009]">
          Reserve
        </span>
      </header>

      <section className="relative flex h-[520px] items-end md:h-[600px]">
        <Image
          src={imgs.restaurant.hero}
          alt=""
          fill
          priority={!preview}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#151009] via-[#151009]/30 to-transparent" />
        <div className="relative px-5 pb-14 md:px-10 md:pb-20">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.35em] text-[#c99b4a]">
            Est. 2019 — Seasonal kitchen
          </p>
          <h1 className="font-serif text-4xl leading-[1.02] md:text-6xl">
            Seasonal. Simple.
            <br />
            Memorable.
          </h1>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#c99b4a] px-6 py-3 text-sm font-medium text-[#151009]">
              Book a table <ArrowRight className="h-4 w-4" />
            </span>
            <span className="inline-flex items-center rounded-full border border-[#f3e9d8]/30 px-6 py-3 text-sm text-[#f3e9d8]/90">
              View the menu
            </span>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 md:px-10 md:py-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-serif text-2xl md:text-3xl">Signature dishes</h2>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.25em] text-[#f3e9d8]/40 sm:block">
            Chef&apos;s selection
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 md:gap-6">
          {dishes.map((d) => (
            <div key={d.name} className="group overflow-hidden rounded-2xl border border-[#f3e9d8]/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src={d.img}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <p className="font-serif text-lg">{d.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#f3e9d8]/50">{d.line}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {!preview && (
        <>
          <section className="grid md:grid-cols-2">
            <div className="relative h-72 md:h-[440px]">
              <Image
                src={imgs.restaurant.interior}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 px-5 py-12 md:px-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#c99b4a]">
                The room
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">
                Forty covers, no noise.
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-[#f3e9d8]/60">
                A small dining room in the old town, open kitchen, produce from
                the market two streets away. Reserve ahead — we rarely have a
                spare table on a Friday.
              </p>
              <div className="mt-2 flex flex-col gap-3 text-sm text-[#f3e9d8]/80">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#c99b4a]" /> 12 Harbour Lane, old town
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#c99b4a]" /> Tue–Sun · 5pm–11pm
                </span>
              </div>
            </div>
          </section>

          <footer className="flex flex-col items-center gap-2 border-t border-[#f3e9d8]/10 px-5 py-10 text-center">
            <p className="font-serif text-xl tracking-[0.3em]">SAISON</p>
            <p className="max-w-xs text-xs leading-relaxed text-[#f3e9d8]/40">
              Concept restaurant site by WavesCo — not a live client website.
            </p>
          </footer>
        </>
      )}
    </div>
  );
}
