export type ConceptKey =
  | "commerce"
  | "saas"
  | "restaurant"
  | "webapp"
  | "fitness"
  | "cafe";

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  concept: ConceptKey;
};

// Portfolio demonstration builds — concepts showing the range of websites
// WavesCo designs and builds. None of these were shipped for a client.
export const projects: Project[] = [
  {
    id: "commerce-storefront",
    slug: "commerce",
    title: "Commerce storefront",
    category: "E-commerce",
    year: "2026",
    description:
      "A calm, editorial storefront concept for a fashion label — designed to sell without shouting.",
    concept: "commerce",
  },
  {
    id: "saas-marketing",
    slug: "saas",
    title: "SaaS marketing site",
    category: "Software",
    year: "2026",
    description:
      "A single-focus landing concept for a developer tool — clear, credible, fast.",
    concept: "saas",
  },
  {
    id: "restaurant-reservations",
    slug: "restaurant",
    title: "Restaurant & reservations",
    category: "Hospitality",
    year: "2026",
    description:
      "A warm restaurant concept that turns visitors into guests — appetite before interface.",
    concept: "restaurant",
  },
  {
    id: "product-webapp",
    slug: "webapp",
    title: "Product web app",
    category: "Product",
    year: "2026",
    description:
      "A focused interface concept for a daily-use product — built around real workflows.",
    concept: "webapp",
  },
  {
    id: "performance-studio",
    slug: "fitness",
    title: "Performance studio",
    category: "Fitness",
    year: "2026",
    description:
      "A bold gym concept for a performance studio — membership first, energy everywhere.",
    concept: "fitness",
  },
  {
    id: "coffee-bakery",
    slug: "cafe",
    title: "Coffee & bakery",
    category: "Hospitality",
    year: "2026",
    description:
      "A warm cafe & bakery concept — brewed slow, baked daily, neighbourhood energy.",
    concept: "cafe",
  },
];
