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
];
