import Link from "next/link";
import { DEV_PRODUCTS } from "@/lib/products";
import { siteLinks } from "@/lib/engagements";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return DEV_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = DEV_PRODUCTS.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.name} — WavesCo`, description: p.description };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = DEV_PRODUCTS.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <main className="min-h-screen bg-paper text-foreground">
      <header className="border-b border-line">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Link href="/products" className="font-mono text-xs tracking-wider text-accent hover:text-accent-hover">
            ← Products
          </Link>
          <div className="font-mono text-xs tracking-widest uppercase text-muted mt-6 mb-2">{p.tagline}</div>
          <h1 className="display-lg mb-4">{p.name}</h1>
          <p className="body-lg max-w-3xl">{p.description}</p>
          <div className="mt-4 font-mono text-xs tracking-wider text-muted">{p.status}</div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
        <div className="bg-paper p-8">
          <h2 className="text-xl font-semibold text-navy mb-4">Features</h2>
          <ul className="space-y-2 text-sm text-body">
            {p.features.map((f) => (
              <li key={f} className="flex gap-2"><span className="text-accent">→</span>{f}</li>
            ))}
          </ul>
        </div>
        <div className="bg-paper p-8">
          <h2 className="text-xl font-semibold text-navy mb-4">Workflow</h2>
          <ol className="space-y-2 text-sm text-body list-decimal list-inside">
            {p.workflow.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-surface border border-line p-8">
          <h2 className="text-lg font-semibold text-navy mb-3">Architecture</h2>
          <p className="text-sm text-body leading-relaxed">{p.architecture}</p>
        </div>
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <a href={siteLinks.booking} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-sm hover:bg-navy-light">
            Book Architecture Review →
          </a>
          <Link href="https://wavesco.in#products" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-line text-navy font-medium rounded-sm hover:bg-surface">
            See overview on wavesco.in ↗
          </Link>
          <Link href="/products" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-line text-navy font-medium rounded-sm hover:bg-surface">
            ← Back to products
          </Link>
        </div>
      </section>
    </main>
  );
}
