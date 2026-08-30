import Link from "next/link";
import { siteLinks } from "@/lib/engagements";

export const metadata = {
  title: "Acquisition OS — WavesCo",
  description: "Lead generation, qualification, and outreach automation. Discover qualified prospects without manual research and verification.",
};

export default function AcquisitionOSPage() {
  return (
    <main className="min-h-screen bg-paper text-foreground">
      <header className="border-b border-line">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Link href="/products" className="font-mono text-xs tracking-wider text-accent hover:text-accent-hover">
            ← Products
          </Link>
          <div className="font-mono text-xs tracking-widest uppercase text-muted mt-6 mb-2">lead generation & outreach</div>
          <h1 className="text-5xl font-semibold text-navy mb-4">Acquisition OS</h1>
          <p className="body-lg max-w-3xl">
            Automated discovery, verification, scoring and outreach — from lead to qualified pipeline without manual follow-ups.
          </p>
          <div className="mt-4 font-mono text-xs tracking-wider text-muted">92 leads • A40 B11 C41 • recurring every 2 days</div>
        </div>
      </header>

      {/* What It Is */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-b border-line">
        <h2 className="text-2xl font-semibold text-navy mb-6">What It Is</h2>
        <div className="space-y-4 text-sm text-body leading-relaxed max-w-3xl">
          <p>
            Acquisition OS is an operating system for customer acquisition. It solves a specific problem: discovering, verifying, and reaching qualified prospects requires manual research, verification across multiple sources, scoring decisions, and approval workflows—all before a single outreach email is sent.
          </p>
          <p>
            The system automates discovery and verification. It runs recurring research cycles (every 2 days), cross-references leads against multiple sources to eliminate duplicates, scores prospects based on brand strength and digital weakness, enriches each lead with AI-generated outreach angles, and routes candidates for human review before campaign deployment.
          </p>
          <p>
            Acquisition OS is for founder-led companies, agencies, and service businesses that acquire customers through direct outreach. It eliminates the 80% of acquisition work that is research and verification, leaving humans to focus on strategy and relationship-building.
          </p>
        </div>
      </section>

      {/* Lead Data */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-b border-line">
        <h2 className="text-2xl font-semibold text-navy mb-6">Lead Corpus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-sm text-body leading-relaxed mb-6">
              Acquisition OS maintains a persistent lead database. Every 2 days, it runs a discovery sweep across configured geographies, deduplicates against the existing database using fuzzy matching, and ranks all candidates (new and existing) by lead score.
            </p>
            <p className="text-sm text-body leading-relaxed">
              The current production database contains <strong>92 leads</strong> across three tiers:
            </p>
          </div>
          <div className="bg-surface border border-line p-6">
            <div className="space-y-3 text-sm font-mono">
              <div className="flex justify-between">
                <span className="text-accent">Tier A (High quality)</span>
                <span className="text-navy font-semibold">40 leads</span>
              </div>
              <div className="flex justify-between">
                <span className="text-accent">Tier B (Medium quality)</span>
                <span className="text-navy font-semibold">11 leads</span>
              </div>
              <div className="flex justify-between">
                <span className="text-accent">Tier C (Exploratory)</span>
                <span className="text-navy font-semibold">41 leads</span>
              </div>
              <div className="border-t border-line pt-3 flex justify-between">
                <span className="text-navy font-semibold">Total</span>
                <span className="text-navy font-semibold">92 leads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-b border-line">
        <h2 className="text-2xl font-semibold text-navy mb-6">Generation Pipeline</h2>
        <p className="text-sm text-body leading-relaxed mb-8 max-w-3xl">
          Every production cycle follows this verified pipeline, running every 2 days at 09:30 UTC:
        </p>
        <div className="space-y-3 bg-surface border border-line p-6 mb-8 font-mono text-sm">
          <div><span className="text-accent">1.</span> Discovery Sweep — Tavily + DuckDuckGo with rotating queries</div>
          <div><span className="text-accent">2.</span> Deduplication — Fuzzy match against SQLite lead database</div>
          <div><span className="text-accent">3.</span> Deep Research — Multi-source cross-check per business</div>
          <div><span className="text-accent">4.</span> Website Probe — Classification (none | placeholder | basic | good | excellent)</div>
          <div><span className="text-accent">5.</span> Scoring + Tiering — Lead score calculated, tier assigned (A/B/C)</div>
          <div><span className="text-accent">6.</span> AI Enrichment — GPT-4o-mini generates problem/opportunity/outreach angle</div>
          <div><span className="text-accent">7.</span> Persistence — Data stored in SQLite with metadata (first_discovered, previous_score, status)</div>
          <div><span className="text-accent">8.</span> Sheets Export — CSV + XLSX for manual review and CRM import</div>
          <div><span className="text-accent">9.</span> PDF Report — Formatted lead report for stakeholder review</div>
          <div><span className="text-accent">10.</span> Batch Record — Run metadata logged (timestamp, counts, paths, delivery status)</div>
        </div>
        <p className="text-sm text-body leading-relaxed">
          If any step fails, the entire run is logged as failed and no incomplete report is generated. Failure alerts are sent via Telegram.
        </p>
      </section>

      {/* Scoring */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-b border-line">
        <h2 className="text-2xl font-semibold text-navy mb-6">Lead Qualification & Scoring</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-navy mb-3">Scoring Model</h3>
            <div className="space-y-2 text-sm text-body font-mono bg-surface border border-line p-4">
              <p><span className="text-accent">Brand Strength (0–50):</span></p>
              <p className="pl-4">• Rating × 4 (normalized)</p>
              <p className="pl-4">• Log-scaled review count</p>
              <p className="pl-4">• Signals: premium location, mall presence, multi-branch</p>
              <p className="mt-3"><span className="text-accent">Digital Weakness (0–50):</span></p>
              <p className="pl-4">• No site: +46</p>
              <p className="pl-4">• Aggregator-only: ~42</p>
              <p className="pl-4">• Placeholder site: +41</p>
              <p className="pl-4">• Basic site: ~28</p>
              <p className="pl-4">• Good site: ~14</p>
              <p className="pl-4">• Excellent site: ~5</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-navy mb-3">Tier Assignments</h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="bg-surface border border-line p-4">
                <p className="text-accent font-semibold mb-2">Tier A</p>
                <p className="text-body">Lead Score ≥ 65</p>
                <p className="text-muted text-xs mt-2">High-intent, strong fit, ready for outreach</p>
              </div>
              <div className="bg-surface border border-line p-4">
                <p className="text-accent font-semibold mb-2">Tier B</p>
                <p className="text-body">Lead Score ≥ 40 and &lt; 65</p>
                <p className="text-muted text-xs mt-2">Medium-fit, exploratory outreach</p>
              </div>
              <div className="bg-surface border border-line p-4">
                <p className="text-accent font-semibold mb-2">Tier C</p>
                <p className="text-body">Lead Score &lt; 40</p>
                <p className="text-muted text-xs mt-2">Lower priority, research-needed candidates</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-paper border border-line p-6 text-sm text-body">
          <p className="mb-3"><strong>Score Calculation:</strong> lead_score = 0.55 × brand_strength + 0.45 × digital_weakness ± AI adjustment (±10)</p>
          <p><strong>Automatic Exclusions:</strong> Corporate chains and franchises are automatically excluded to focus on independent operators.</p>
        </div>
      </section>

      {/* Segmentation */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-b border-line">
        <h2 className="text-2xl font-semibold text-navy mb-6">Segmentation & Filtering</h2>
        <p className="text-sm text-body leading-relaxed mb-8 max-w-3xl">
          Acquisition OS supports segmentation across multiple facets for targeted campaign deployment:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface border border-line p-6">
            <h3 className="font-semibold text-navy mb-3 text-sm">Geography</h3>
            <ul className="space-y-1 text-sm text-body font-mono">
              <li>• Navi Mumbai</li>
              <li>• Mumbai (Central, South, West)</li>
              <li>• Pune</li>
              <li>• Configurable regional zones</li>
            </ul>
          </div>
          <div className="bg-surface border border-line p-6">
            <h3 className="font-semibold text-navy mb-3 text-sm">Business Category</h3>
            <ul className="space-y-1 text-sm text-body font-mono">
              <li>• Cafes & restaurants</li>
              <li>• Retail & boutiques</li>
              <li>• Services & salons</li>
              <li>• Gaming & entertainment</li>
              <li>• Gyms & fitness</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 bg-paper border border-line p-6 text-sm text-body">
          <p><strong>Export Format:</strong> Leads are exported as CSV and XLSX with all segmentation facets as filterable columns. Campaign managers can slice by tier, geography, category, lead score, or enrichment data.</p>
        </div>
      </section>

      {/* Campaign Workflow */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-b border-line">
        <h2 className="text-2xl font-semibold text-navy mb-6">Campaign Workflow</h2>
        <p className="text-sm text-body leading-relaxed mb-8 max-w-3xl">
          Acquisition OS automates candidate selection but requires human approval before outreach deployment. The complete workflow is:
        </p>
        <div className="space-y-2 bg-surface border border-line p-6 mb-8 font-mono text-sm">
          <div className="flex items-start gap-3">
            <span className="text-accent font-semibold min-w-fit">1. Discovery</span>
            <span className="text-body">Automated sweep runs every 2 days, finds new candidates in configured geographies</span>
          </div>
          <div className="border-t border-line pt-2">
            <span className="text-accent">↓</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent font-semibold min-w-fit">2. Qualification</span>
            <span className="text-body">Deep research, website analysis, lead scoring, tier assignment</span>
          </div>
          <div className="border-t border-line pt-2">
            <span className="text-accent">↓</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent font-semibold min-w-fit">3. Enrichment</span>
            <span className="text-body">AI generates outreach angle, problem statement, opportunity assessment</span>
          </div>
          <div className="border-t border-line pt-2">
            <span className="text-accent">↓</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent font-semibold min-w-fit">4. Selection</span>
            <span className="text-body">System identifies candidates matching campaign criteria (tier, geography, category)</span>
          </div>
          <div className="border-t border-line pt-2">
            <span className="text-accent">↓</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent font-semibold min-w-fit">5. Review & Approval</span>
            <span className="text-body"><strong>HUMAN GATE:</strong> Campaign manager reviews selected leads, adjusts filters if needed, approves outreach roster</span>
          </div>
          <div className="border-t border-line pt-2">
            <span className="text-accent">↓</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent font-semibold min-w-fit">6. Outreach Prep</span>
            <span className="text-body">Export approved roster as CSV/XLSX for CRM import or email platform integration</span>
          </div>
          <div className="border-t border-line pt-2">
            <span className="text-accent">↓</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-accent font-semibold min-w-fit">7. Deploy</span>
            <span className="text-body">Send cold emails via approved channels with personalized outreach angles</span>
          </div>
        </div>
        <p className="text-sm text-body leading-relaxed">
          <strong>Key constraint:</strong> Acquisition OS does not automatically send emails. It qualifies and routes candidates. Human review happens before any outreach is deployed.
        </p>
      </section>

      {/* Architecture */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-b border-line">
        <h2 className="text-2xl font-semibold text-navy mb-6">Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-navy mb-4 text-sm">System Components</h3>
            <div className="space-y-3 text-sm text-body font-mono bg-surface border border-line p-4">
              <p><span className="text-accent">Web Application</span></p>
              <p className="pl-4">Vercel (Next.js) — manages UI, campaign config, approval queue</p>
              <p className="mt-3"><span className="text-accent">Lead Engine</span></p>
              <p className="pl-4">Python service — handles discovery, research, scoring (runs independently)</p>
              <p className="mt-3"><span className="text-accent">Data Persistence</span></p>
              <p className="pl-4">SQLite database — maintains lead corpus, run history, tier assignments</p>
              <p className="mt-3"><span className="text-accent">AI Integration</span></p>
              <p className="pl-4">GPT-4o-mini via OpenAI API — enrichment only, scores adjusted per urgency</p>
              <p className="mt-3"><span className="text-accent">Research APIs</span></p>
              <p className="pl-4">Tavily (primary) + DuckDuckGo (fallback) — web search and business discovery</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-navy mb-4 text-sm">Data Flow & Integration</h3>
            <div className="space-y-4 text-sm">
              <div className="bg-paper border border-line p-4 font-mono">
                <p className="text-accent font-semibold mb-2">Production Mode</p>
                <p className="text-body text-xs leading-relaxed">
                  LEAD_ENGINE_MODE=remote
                </p>
                <p className="text-body text-xs mt-2">Vercel app → HTTP request → Lead Engine → Database</p>
              </div>
              <div className="bg-paper border border-line p-4 font-mono">
                <p className="text-accent font-semibold mb-2">Execution</p>
                <p className="text-body text-xs leading-relaxed">
                  Task Scheduler runs every 2 days at 09:30 UTC
                </p>
              </div>
              <div className="bg-paper border border-line p-4 font-mono">
                <p className="text-accent font-semibold mb-2">Outputs</p>
                <p className="text-body text-xs leading-relaxed">
                  PDF reports, XLSX exports, CSV mirrors, batch metadata
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface border border-line p-6 text-sm text-body leading-relaxed">
          <p className="mb-3">
            <strong>Architecture principle:</strong> The Lead Engine runs independently from the web application. Vercel does not make direct API calls to research services or LLMs. All research logic, scoring, and enrichment happens within the isolated Python service.
          </p>
          <p>
            This separation prevents rate-limiting issues, keeps credentials secure, and allows the system to handle long-running research tasks without web request timeouts.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-b border-line">
        <h2 className="text-2xl font-semibold text-navy mb-6">Key Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
          <div className="bg-paper p-6">
            <p className="text-sm text-body flex gap-2">
              <span className="text-accent min-w-fit">→</span>
              <span>Custom scrapers for discovery across configured geographies</span>
            </p>
          </div>
          <div className="bg-paper p-6">
            <p className="text-sm text-body flex gap-2">
              <span className="text-accent min-w-fit">→</span>
              <span>Lead scoring and tiering (A/B/C based on real scoring model)</span>
            </p>
          </div>
          <div className="bg-paper p-6">
            <p className="text-sm text-body flex gap-2">
              <span className="text-accent min-w-fit">→</span>
              <span>Verification (email status, website classification)</span>
            </p>
          </div>
          <div className="bg-paper p-6">
            <p className="text-sm text-body flex gap-2">
              <span className="text-accent min-w-fit">→</span>
              <span>AI-driven outreach (personalized angles per prospect)</span>
            </p>
          </div>
          <div className="bg-paper p-6">
            <p className="text-sm text-body flex gap-2">
              <span className="text-accent min-w-fit">→</span>
              <span>Multi-facet segmentation (geography, category, tier, score)</span>
            </p>
          </div>
          <div className="bg-paper p-6">
            <p className="text-sm text-body flex gap-2">
              <span className="text-accent min-w-fit">→</span>
              <span>Human approval gate before any outreach deployment</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href={siteLinks.booking}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-sm hover:bg-navy-light"
          >
            Book Architecture Review →
          </a>
          <Link
            href="https://wavesco.in#products"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-line text-navy font-medium rounded-sm hover:bg-surface"
          >
            See overview on wavesco.in ↗
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-line text-navy font-medium rounded-sm hover:bg-surface"
          >
            ← Back to products
          </Link>
        </div>
      </section>
    </main>
  );
}
