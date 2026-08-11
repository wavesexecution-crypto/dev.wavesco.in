export type EngagementStatus = "live" | "installing" | "intake" | "placeholder";

export type Engagement = {
  slug: string;
  client: string;
  /** Industry vertical — for cross-link to wavesco.in ICP. */
  vertical: string;
  year: number;
  /** What we installed, not what we "designed". */
  systemsInstalled: ReadonlyArray<string>;
  /** One-line outcome, in business terms, not tech terms. */
  outcome: string;
  /** Honest flag — real client work is flagged; placeholders are clearly labelled. */
  status: EngagementStatus;
};

/**
 * Build log — engagements where WavesCo installed an operating system
 * for a founder-led company. Listed newest first.
 *
 * IMPORTANT: entries marked `status: "placeholder"` are NOT real clients.
 * They illustrate the *type* of engagement we do, never a fake client name.
 * When a real engagement goes live, add it with `status: "live"`.
 */
export const engagements: ReadonlyArray<Engagement> = [
  {
    slug: "vidya-sindhu-foundation",
    client: "Vidya Sindhu Foundation",
    vertical: "NGO / Donor operations",
    year: 2025,
    systemsInstalled: [
      "Donor intake system",
      "Razorpay payment + receipt workflow",
      "80G certificate generation",
      "Supabase auth for staff and volunteers",
    ],
    outcome:
      "Founder no longer personally issues receipts or reconciles donations against spreadsheets.",
    status: "live",
  },
  {
    slug: "cafe-chain-os",
    client: "Regional cafe chain (Navi Mumbai)",
    vertical: "F&B / multi-location",
    year: 2025,
    systemsInstalled: [
      "WhatsApp lead capture → CRM",
      "Auto-follow-up sequence",
      "Daily ops brief for floor managers",
      "Centralised inventory across 4 locations",
    ],
    outcome:
      "Owner stopped receiving operational WhatsApps after 9 PM. Decisions route to the right person automatically.",
    status: "live",
  },
  {
    slug: "service-agency-os",
    client: "Boutique marketing agency",
    vertical: "Services / 12-person team",
    year: 2024,
    systemsInstalled: [
      "Lead routing + qualification",
      "Project intake → delivery workflow",
      "Client status reporting",
      "Founder-load dashboard",
    ],
    outcome:
      "Founder took a 14-day vacation for the first time in two years without a single client escalation.",
    status: "live",
  },
  {
    slug: "fitness-studio-os",
    client: "Independent fitness studio",
    vertical: "Fitness / membership",
    year: 2024,
    systemsInstalled: [
      "Membership renewal automation",
      "Class booking + reminder system",
      "Trainer schedule orchestration",
    ],
    outcome:
      "Renewal follow-ups stopped depending on the owner remembering which member was due.",
    status: "placeholder",
  },
  {
    slug: "local-retail-os",
    client: "Multi-store retail brand",
    vertical: "Retail / 3 outlets",
    year: 2024,
    systemsInstalled: [
      "Daily reconciliation workflow",
      "Vendor ordering automation",
      "Store-to-store transfer system",
    ],
    outcome:
      "Founder stopped reconciling books at midnight; the system posts and flags exceptions.",
    status: "placeholder",
  },
];

/**
 * The four-phase installation method. Replaces the old
 * "Design / Redesign / Deployment" framing with the actual OS install lifecycle.
 */
export const installationPhases = [
  {
    n: "01",
    code: "INTAKE",
    title: "Dependency audit",
    detail:
      "We map where work currently flows, what still lives in the founder's head, and which decisions are stuck waiting for one person.",
  },
  {
    n: "02",
    code: "ARCHITECTURE",
    title: "OS design",
    detail:
      "Roles, decision rights, handoffs, review loops, and escalation rules — designed for how the business actually moves, not how a template says it should.",
  },
  {
    n: "03",
    code: "INSTALL",
    title: "System install",
    detail:
      "We connect the tools the business already uses — WhatsApp, sheets, CRM, payments — into one operating system the team can trust.",
  },
  {
    n: "04",
    code: "VERIFICATION",
    title: "Independence test",
    detail:
      "We run the business on the new system and watch what breaks. Iterate until the founder can take a week off without exceptions piling up.",
  },
] as const;

/**
 * Cross-domain links — surface the 3-site structure so prospects understand
 * where dev.wavesco.in sits in the WavesCo architecture.
 */
export const siteLinks = {
  marketing: "https://wavesco.in",
  buildStudio: "https://dev.wavesco.in",
  clientApp: "https://app.wavesco.in",
  booking: "https://cal.com/wavesco.in/booking-call",
  email: "waves.execution@gmail.com",
} as const;
