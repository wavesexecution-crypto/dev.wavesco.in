import Link from "next/link";

export const metadata = {
  title: "Products — WavesCo Build Studio",
  description: "Acquisition OS — lead generation, qualification, and outreach automation.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-paper text-foreground">
      <header className="border-b border-line">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Link href="/" className="font-mono text-xs tracking-wider text-accent hover:text-accent-hover">
            ← Back to studio
          </Link>
          <div className="font-mono text-xs tracking-widest uppercase text-muted mt-6 mb-2">products // catalog</div>
          <h1 className="text-4xl font-semibold text-navy mb-4">Products</h1>
          <p className="body-lg max-w-2xl">
            The systems we build, deployed as products. Proven in live engagements.
          </p>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <Link
          href="/products/acquisition-os"
          className="block bg-paper border border-line p-8 hover:bg-surface transition-colors group rounded-sm"
        >
          <div className="font-mono text-xs tracking-widest text-accent mb-2">product // 01</div>
          <h2 className="text-2xl font-semibold text-navy mb-3 group-hover:text-accent transition-colors">
            Acquisition OS
          </h2>
          <p className="text-sm text-body leading-relaxed mb-4">
            Lead generation, qualification, and outreach. Discover qualified prospects without manual research and verification. Recurring discovery, AI enrichment, human approval.
          </p>
          <ul className="text-sm text-body space-y-1 mb-6">
            <li className="flex gap-2">
              <span className="text-accent">→</span>Lead Discovery & Enrichment
            </li>
            <li className="flex gap-2">
              <span className="text-accent">→</span>Qualification & Segmentation
            </li>
            <li className="flex gap-2">
              <span className="text-accent">→</span>Campaign Workflow with Human Approval
            </li>
          </ul>
          <div className="font-mono text-xs tracking-wider text-accent">Explore →</div>
        </Link>
      </section>
    </main>
  );
}
