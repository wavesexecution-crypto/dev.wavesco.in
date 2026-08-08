export type PreviewVariant =
  | "commerce"
  | "saas"
  | "studio"
  | "fintech"
  | "restaurant"
  | "webapp";

export type Project = {
  id: string;
  title: string;
  industry: string;
  description: string;
  variant: PreviewVariant;
  year: string;
  summary: string;
  approach: string[];
  deliverables: string[];
};

export const projects: Project[] = [
  {
    id: "commerce-storefront",
    title: "Commerce storefront",
    industry: "E-commerce",
    description:
      "A calm, focused storefront for a fashion label — built to sell without shouting.",
    variant: "commerce",
    year: "2025",
    summary:
      "The client sold premium clothing but their site felt like a spreadsheet. We rebuilt it around the product: generous imagery, confident typography and a checkout flow with zero dead ends.",
    approach: [
      "Started with a content audit — most pages were doing nothing.",
      "Rebuilt the page hierarchy so product comes first.",
      "Designed a type and spacing system that feels editorial, not templated.",
      "Shipped a fast, responsive storefront that loads light and feels instant.",
    ],
    deliverables: ["Design system", "Storefront UI", "Checkout flows", "Deployment"],
  },
  {
    id: "saas-marketing",
    title: "SaaS marketing site",
    industry: "Software",
    description:
      "A single-focus landing experience for a developer tool — clear, credible, fast.",
    variant: "saas",
    year: "2025",
    summary:
      "One page, one job: explain what the product does and let someone try it. We stripped every feature bullet that didn't survive a five-second test and let the interface speak.",
    approach: [
      "Wrote the page around a single clear promise.",
      "Removed the noise — no carousels, no stock illustration.",
      "Designed the product itself as the hero.",
      "Optimised for speed and accessibility from the first commit.",
    ],
    deliverables: ["Landing page", "Component library", "CMS wiring", "Deployment"],
  },
  {
    id: "editorial-portfolio",
    title: "Editorial portfolio",
    industry: "Creative",
    description:
      "A typography-led portfolio for a creative studio — work first, everything else second.",
    variant: "studio",
    year: "2024",
    summary:
      "Creative portfolios die in templates. We designed a layout where scale and whitespace do the talking and every piece of work gets room to breathe.",
    approach: [
      "Led with type — oversized headings as the visual identity.",
      "Asymmetric grids that make every project feel considered.",
      "No decoration that isn't earned by the work itself.",
      "Built so the studio can publish new work without touching code.",
    ],
    deliverables: ["Art direction", "Portfolio UI", "CMS", "Deployment"],
  },
  {
    id: "fintech-brand",
    title: "Fintech brand site",
    industry: "Finance",
    description:
      "A calm, credible website for a financial services firm — trust through restraint.",
    variant: "fintech",
    year: "2024",
    summary:
      "Finance sites default to corporate sludge. We went the other way: quiet layouts, precise data presentation and a visual system that reads as dependable.",
    approach: [
      "Mapped the customer journey before a single screen was designed.",
      "Made data legible — numbers presented cleanly, never buried.",
      "Chose restraint over decoration to signal trust.",
      "Delivered a site that works as hard on mobile as on desktop.",
    ],
    deliverables: ["Brand site", "Data UI", "Content system", "Deployment"],
  },
  {
    id: "restaurant-reservations",
    title: "Restaurant & reservations",
    industry: "Hospitality",
    description:
      "A warm website that turns visitors into guests — appetite before interface.",
    variant: "restaurant",
    year: "2024",
    summary:
      "The menu was great; the website wasn't. We designed a site that makes people hungry first and books a table second, with one clear action everywhere.",
    approach: [
      "Photography led — the food does the selling.",
      "A single, repeated call to action: reserve.",
      "Menu as a designed document, not a PDF.",
      "Fast-loading and mobile-first, where most visitors arrive.",
    ],
    deliverables: ["Website", "Menu system", "Booking integration", "Deployment"],
  },
  {
    id: "product-webapp",
    title: "Product web app",
    industry: "Product",
    description:
      "A fast, focused interface for a daily-use product — built for real workflows.",
    variant: "webapp",
    year: "2023",
    summary:
      "The product was powerful but the interface was fighting the users. We redesigned the core screens around the tasks people actually repeat every day.",
    approach: [
      "Interviewed users to find the 20% of features used 80% of the time.",
      "Rebuilt navigation around tasks, not features.",
      "Designed a calm data-dense interface with clear hierarchy.",
      "Shipped incrementally with the engineering team.",
    ],
    deliverables: ["UX research", "Product UI", "Design system", "Frontend"],
  },
];
