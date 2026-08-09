import Image from "next/image";
import { ArrowRight, Search, ShoppingBag } from "lucide-react";
import { imgs } from "./images";
import type { ConceptProps } from "./concept";

const products = [
  { img: imgs.commerce.p1, name: "Essential tee", price: "£48" },
  { img: imgs.commerce.p2, name: "Court runner", price: "£120" },
  { img: imgs.commerce.p3, name: "Selvedge jean", price: "£160" },
  { img: imgs.commerce.p4, name: "Wool overshirt", price: "£140" },
];

export function CommerceConcept({ preview = false }: ConceptProps) {
  return (
    <div className={"bg-[#f7f4ef] font-sans text-[#201d1a]" + (preview ? " min-h-[1150px]" : "")}>
      <header className="flex h-14 items-center justify-between border-b border-[#201d1a]/10 px-5 md:px-10">
        <span className="font-serif text-lg tracking-[0.28em]">MAISON</span>
        <nav className="hidden items-center gap-8 text-[13px] md:flex">
          <span>Shop</span>
          <span>Lookbook</span>
          <span>Journal</span>
          <span>About</span>
        </nav>
        <div className="flex items-center gap-5">
          <Search className="h-4 w-4" />
          <ShoppingBag className="h-4 w-4" />
          <span className="hidden rounded-full bg-[#201d1a] px-4 py-1.5 text-xs text-[#f7f4ef] sm:block">
            Cart (0)
          </span>
        </div>
      </header>

      <section className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center gap-5 px-5 py-14 md:px-10 md:py-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#201d1a]/50">
            Autumn — Vol. 04
          </p>
          <h1 className="font-serif text-4xl leading-[0.98] md:text-6xl">
            Slow clothes for fast seasons.
          </h1>
          <p className="max-w-sm text-sm leading-relaxed text-[#201d1a]/60">
            Natural fabrics, honest cuts, nothing seasonal that isn&apos;t meant
            to last. Made in small batches, priced to keep.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#201d1a] px-6 py-3 text-sm text-[#f7f4ef]">
              Shop the edit <ArrowRight className="h-4 w-4" />
            </span>
            <span className="inline-flex items-center rounded-full border border-[#201d1a]/30 px-6 py-3 text-sm">
              Explore lookbook
            </span>
          </div>
        </div>
        <div className="relative h-72 md:h-[540px]">
          <Image
            src={imgs.commerce.hero}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="px-5 py-12 md:px-10 md:py-16">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-serif text-2xl md:text-3xl">This week&apos;s edit</h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#201d1a]/50">
            04 pieces
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {products.map((p) => (
            <div key={p.name} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#eae5dc]">
                <Image
                  src={p.img}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <p className="mt-3 text-sm">{p.name}</p>
              <p className="font-mono text-xs text-[#201d1a]/60">{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      {!preview && (
        <>
          <section className="grid md:grid-cols-2">
            <div className="relative h-72 md:h-[420px]">
              <Image
                src={imgs.commerce.editorial}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 px-5 py-12 md:px-12">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#201d1a]/50">
                Journal
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">
                Made to be worn, not watched.
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-[#201d1a]/60">
                A note on why we cut garments the way we do — roomier than
                trends, better than fast fashion, built to be repaired.
              </p>
              <span className="mt-2 inline-flex items-center gap-2 text-sm underline underline-offset-4">
                Read the journal <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </section>

          <footer className="flex flex-col items-center gap-2 border-t border-[#201d1a]/10 px-5 py-10 text-center">
            <p className="font-serif text-xl tracking-[0.28em]">MAISON</p>
            <p className="max-w-xs text-xs leading-relaxed text-[#201d1a]/50">
              Concept storefront design by WavesCo — not a live client site.
            </p>
          </footer>
        </>
      )}
    </div>
  );
}
