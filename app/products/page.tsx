import Link from "next/link";
import { DEV_PRODUCTS } from "@/lib/products";
import { siteLinks } from "@/lib/engagements";

export const metadata = {
  title: "Products — WavesCo Build Studio",
  description: "Full product showcase — WavesOS, Acquisition OS, Client OS. Features, workflows, architecture, and status.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-paper text-foreground">
      <header className="border-b border-line">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="font-mono text-xs tracking-widest uppercase text-muted mb-2">products // overview</div>
          <h1 className="display-lg mb-4">Products</h1>
          <p className="body-lg max-w-2xl">
            The same systems we install for founder-led companies — as products. Proven in live engagements, available via the build studio.
          </p>
          <div className="mt-6">
            <Link href="https://wavesco.in#products" className="font-mono text-xs tracking-wider text-accent hover:text-accent-hover">
              ← Back to wavesco.in overview
            </Link>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
        {DEV_PRODUCTS.map((p) => (
          <Link key={p.slug} href={p.href} className="bg-paper p-8 hover:bg-surface transition-colors group">
            <div className="font-mono text-xs tracking-widest text-accent mb-2">{p.tagline}</div>
            <h2 className="text-2xl font-semibold text-navy mb-3 group-hover:text-accent transition-colors">{p.name}</h2>
            <p className="text-sm text-body leading-relaxed mb-4">{p.description}</p>
            <ul className="text-sm text-body space-y-1 mb-6">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2"><span className="text-accent">→</span>{h}</li>
              ))}
            </ul>
            <div className="font-mono text-xs tracking-wider text-muted">{p.status}</div>
            <div className="mt-4 font-mono text-xs tracking-wider uppercase text-accent">Explore →</div>
          </Link>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-4">
          <a href={siteLinks.booking} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-sm hover:bg-navy-light">
            Book Architecture Review →
          </a>
          <Link href="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-line text-navy font-medium rounded-sm hover:bg-surface">
            ← Back to dev.wavesco.in
          </Link>
        </div>
      </section>
    </main>
  );
}
