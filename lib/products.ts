export type DevProduct = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  features: string[];
  workflow: string[];
  architecture: string;
  status: string;
  href: string;
};

export const DEV_PRODUCTS: DevProduct[] = [
  {
    slug: "wavesos",
    name: "WavesOS",
    tagline: "The Operating System for Scale",
    description:
      "WavesOS is the 3-layer framework that decouples the founder from the day-to-day. Core Logic maps what drives revenue, Execution Engine builds repeatable paths, Governance creates KPIs and loops.",
    highlights: ["Layer 1: Core Logic", "Layer 2: Execution Engine", "Layer 3: Governance"],
    features: [
      "Founder dependency audit",
      "Decision rights matrix (Tier 1/2/3)",
      "Handoff & escalation rules",
      "Daily briefs, weekly reviews, monthly retros",
      "Exception surfacing",
      "One-page founder brief",
    ],
    workflow: ["Intake → Dependency audit", "Architecture → OS design", "Install → System connect", "Verification → Independence test"],
    architecture: "Built on the same install method we use for clients: intake, architecture, install, verification. No custom infrastructure — uses the tools the business already pays for.",
    status: "Available — install via Architecture Review",
    href: "/products/wavesos",
  },
  {
    slug: "acquisition-os",
    name: "Acquisition OS",
    tagline: "Lead generation, qualification & outreach",
    description:
      "Automated discovery, verification, scoring and outreach. From lead to qualified pipeline without manual follow-ups. Integrates with the existing lead corpus and outreach pipeline.",
    highlights: ["LinkedIn + Cold Email", "Lead Qualification Bots", "Automated CRM Entry", "Verification & Scoring"],
    features: [
      "Custom scrapers for discovery",
      "Email domain warm-up",
      "AI-driven outreach (personalized)",
      "Lead scoring and tiering (A/B/C)",
      "Verification (email status)",
      "CRM sync (HubSpot, Salesforce, Pipedrive)",
    ],
    workflow: ["Discovery → Dedupe", "Deep research → Verification", "Website probe → Scoring", "AI enrichment → PDF/Excel", "Outreach → Approval Queue"],
    architecture: "Runs on the existing Lead Engine (D:\\wavesco-lead-engine) via HTTP API in production (LEAD_ENGINE_MODE=remote). No direct provider calls from the web app.",
    status: "Live — 92 leads, A40 B11 C41",
    href: "/products/acquisition-os",
  },
  {
    slug: "client-os",
    name: "Client OS",
    tagline: "Delivery, projects & operations",
    description:
      "Client delivery, project intake, and task orchestration. Every task has an owner, every handoff is tracked, every escalation is routed.",
    highlights: ["Project Intake → Delivery", "Task Ownership & Escalation", "Client Status Reporting", "Founder-load dashboard"],
    features: [
      "Lead routing + qualification",
      "Project intake → delivery workflow",
      "Client status reporting",
      "Task assignment and reminders",
      "Escalation rules",
      "Daily ops brief",
    ],
    workflow: ["Intake → Qualification", "Assignment → Ownership", "Execution → Review", "Reporting → Brief"],
    architecture: "Part of the WavesCo platform/business system. Uses the same tenant-isolated DB, approval gates, and Waves AI Gateway as the rest of the platform.",
    status: "Live — delivery via Client OS workspace",
    href: "/products/client-os",
  },
];
