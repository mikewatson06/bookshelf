export type BookMotif =
  | "lattice"
  | "corrosion"
  | "efficiency"
  | "network"
  | "boom"
  | "organization"
  | "schematic"
  | "flight"
  | "circuit"
  | "orbit"
  | "branches"
  | "wave"
  | "runner"
  | "gather"
  | "maze"
  | "fracture"
  | "continuum"
  | "windows"
  | "steps";

export type CatalogBook = {
  id: string;
  title: string;
  shortTitle: string;
  author: string;
  description: string;
  quote: string;
  quoteBy: string;
  format: string;
  availability: string;
  url: string;
  amazonUrl: string;
  cover: string;
  accent: string;
  ink: string;
  motif: BookMotif;
  height: number;
  thickness: number;
  /**
   * Optional browser URL for contributor-owned front-cover art. Put local
   * images under `public/books/<id>/` and use a URL such as
   * `/books/<id>/cover.webp`.
   */
  coverImage?: string;
  linkLabel?: string;
  living?: boolean;
};

export const catalog: CatalogBook[] = ([
  {
    id: "2026-av-market-report",
    title: "2026 Antelope Valley Market Report",
    shortTitle: "2026 Market Report",
    author: "Mike Watson",
    description:
      "The definitive annual intelligence brief on Antelope Valley housing: closed sales, inventory, pricing power, absorption rates, and the local forces shaping the next twelve months.",
    quote: "Data without context is noise. Context without data is opinion.",
    quoteBy: "Mike Watson",
    format: "Hardcover · Annual Intelligence",
    availability: "2026 Edition · Digital + Print",
    url: "https://mikewatsonrealtor.com/shelf/2026-av-market-report",
    amazonUrl: "https://mikewatsonrealtor.com/shelf/2026-av-market-report",
    cover: "#1a2f4a",
    accent: "#c9a227",
    ink: "#f4efe6",
    motif: "efficiency",
    height: 2.22,
    thickness: 0.28,
    living: true,
  },
  {
    id: "lancaster-pricing-playbook",
    title: "Lancaster Pricing Playbook",
    shortTitle: "Lancaster Pricing",
    author: "Mike Watson",
    description:
      "A city-specific pricing strategy guide covering competitive sets, days-on-market thresholds, list-to-sale ratios, and the negotiation levers that actually move Lancaster inventory.",
    quote: "Price is the first story a listing tells.",
    quoteBy: "Mike Watson",
    format: "Hardcover · City Guides",
    availability: "2026 · Living document",
    url: "https://mikewatsonrealtor.com/shelf/lancaster-pricing-playbook",
    amazonUrl: "https://mikewatsonrealtor.com/shelf/lancaster-pricing-playbook",
    cover: "#3d2b1f",
    accent: "#d4a84b",
    ink: "#f7f0e4",
    motif: "schematic",
    height: 2.14,
    thickness: 0.24,
  },
  {
    id: "palmdale-quartz-hill",
    title: "Palmdale & Quartz Hill",
    shortTitle: "Palmdale & Quartz Hill",
    author: "Mike Watson",
    description:
      "Neighborhood-level intelligence for Palmdale and Quartz Hill: school boundaries, commute patterns, new construction pressure, and the micro-markets that still outperform the broader valley.",
    quote: "The valley is not one market. It is a dozen.",
    quoteBy: "Mike Watson",
    format: "Hardcover · Neighborhood Series",
    availability: "2026 Edition",
    url: "https://mikewatsonrealtor.com/shelf/palmdale-quartz-hill",
    amazonUrl: "https://mikewatsonrealtor.com/shelf/palmdale-quartz-hill",
    cover: "#2c4a3e",
    accent: "#c9a46a",
    ink: "#f3ece0",
    motif: "branches",
    height: 2.1,
    thickness: 0.23,
  },
  {
    id: "solar-energy-homes",
    title: "Solar + Energy Homes",
    shortTitle: "Solar + Energy",
    author: "Mike Watson",
    description:
      "How solar arrays, Powerwalls, heat pumps, and high-performance envelopes change appraisal, marketing, buyer motivation, and net ownership cost across the Antelope Valley.",
    quote: "Energy is becoming the fifth utility of real estate.",
    quoteBy: "Mike Watson",
    format: "Hardcover · Special Reports",
    availability: "2026 · Updated quarterly",
    url: "https://mikewatsonrealtor.com/shelf/solar-energy-homes",
    amazonUrl: "https://mikewatsonrealtor.com/shelf/solar-energy-homes",
    cover: "#1e3a5f",
    accent: "#e8b923",
    ink: "#f5f0e6",
    motif: "circuit",
    height: 2.08,
    thickness: 0.22,
    living: true,
  },
  {
    id: "first-time-buyer-handbook",
    title: "First-Time Buyer Handbook",
    shortTitle: "First-Time Buyer",
    author: "Mike Watson",
    description:
      "A practical field guide for first-time buyers in the Antelope Valley: financing paths, inspection priorities, contingency strategy, and the local realities that national checklists miss.",
    quote: "The first home is the hardest. The second is the smartest.",
    quoteBy: "Mike Watson",
    format: "Hardcover · Client Resources",
    availability: "2026 Edition",
    url: "https://mikewatsonrealtor.com/shelf/first-time-buyer-handbook",
    amazonUrl: "https://mikewatsonrealtor.com/shelf/first-time-buyer-handbook",
    cover: "#4a3728",
    accent: "#d4af37",
    ink: "#f8f1e3",
    motif: "steps",
    height: 2.06,
    thickness: 0.25,
  },
  {
    id: "sellers-playbook-2026",
    title: "Seller’s Playbook 2026",
    shortTitle: "Seller’s Playbook",
    author: "Mike Watson",
    description:
      "The complete pre-listing to close system used on high-performing Antelope Valley listings: preparation timeline, pricing bands, marketing sequence, and offer evaluation frameworks.",
    quote: "Preparation is the only free leverage a seller still owns.",
    quoteBy: "Mike Watson",
    format: "Hardcover · Strategy Series",
    availability: "2026 Edition",
    url: "https://mikewatsonrealtor.com/shelf/sellers-playbook-2026",
    amazonUrl: "https://mikewatsonrealtor.com/shelf/sellers-playbook-2026",
    cover: "#5c2a2a",
    accent: "#c9a227",
    ink: "#f4ebe0",
    motif: "organization",
    height: 2.12,
    thickness: 0.26,
  },
  {
    id: "neighborhood-guides",
    title: "Neighborhood Guides",
    shortTitle: "Neighborhood Guides",
    author: "Mike Watson",
    description:
      "Concise, field-tested profiles of the communities that define Antelope Valley living—from Acton and Leona Valley to Rosamond, Lake Hughes, and the Tehachapi corridor.",
    quote: "Every neighborhood has a rhythm. Learn it before you price it.",
    quoteBy: "Mike Watson",
    format: "Hardcover · Local Intelligence",
    availability: "Living series",
    url: "https://mikewatsonrealtor.com/shelf/neighborhood-guides",
    amazonUrl: "https://mikewatsonrealtor.com/shelf/neighborhood-guides",
    cover: "#2f3d2e",
    accent: "#b89b5e",
    ink: "#f2ebe0",
    motif: "windows",
    height: 2.04,
    thickness: 0.21,
  },
  {
    id: "closed-transactions-yearbook",
    title: "Closed Transactions Yearbook",
    shortTitle: "Closed Transactions",
    author: "Mike Watson",
    description:
      "A transparent record of results: volume, price bands, days on market, and the patterns that emerge when one agent closes hundreds of transactions across the same market year after year.",
    quote: "Track record is the only marketing that cannot be fabricated.",
    quoteBy: "Mike Watson",
    format: "Hardcover · Track Record",
    availability: "Annual",
    url: "https://mikewatsonrealtor.com/shelf/closed-transactions-yearbook",
    amazonUrl: "https://mikewatsonrealtor.com/shelf/closed-transactions-yearbook",
    cover: "#1c252e",
    accent: "#c9a46a",
    ink: "#f0e9dc",
    motif: "continuum",
    height: 2.18,
    thickness: 0.29,
    living: true,
  },
  {
    id: "prop-19-tax-strategies",
    title: "Prop 19 & Tax Strategies",
    shortTitle: "Prop 19 & Tax",
    author: "Mike Watson",
    description:
      "Practical guidance on California Proposition 19 base-year transfers, intergenerational planning, and the tax timing decisions that still reshape equity outcomes for Antelope Valley families.",
    quote: "Tax rules change. Equity does not forgive missed windows.",
    quoteBy: "Mike Watson",
    format: "Hardcover · Tax & Legal",
    availability: "2026 · Updated for current law",
    url: "https://mikewatsonrealtor.com/shelf/prop-19-tax-strategies",
    amazonUrl: "https://mikewatsonrealtor.com/shelf/prop-19-tax-strategies",
    cover: "#3a2f4a",
    accent: "#d4af37",
    ink: "#f5efe6",
    motif: "maze",
    height: 1.98,
    thickness: 0.2,
  },
  {
    id: "av-investment-properties",
    title: "AV Investment Properties",
    shortTitle: "Investment Properties",
    author: "Mike Watson",
    description:
      "Investor-focused analysis of cash-flow corridors, new construction yield, ADU potential, and the local constraints that separate durable Antelope Valley rentals from speculative noise.",
    quote: "Cash flow is local. Cap rates are national. Know the difference.",
    quoteBy: "Mike Watson",
    format: "Hardcover · Investor Series",
    availability: "2026 Edition",
    url: "https://mikewatsonrealtor.com/shelf/av-investment-properties",
    amazonUrl: "https://mikewatsonrealtor.com/shelf/av-investment-properties",
    cover: "#1f2a1f",
    accent: "#c9a227",
    ink: "#f3ece0",
    motif: "network",
    height: 2.16,
    thickness: 0.27,
  },
  {
    id: "home-energy-systems",
    title: "Home Energy Systems",
    shortTitle: "Home Energy Systems",
    author: "Mike Watson",
    description:
      "A technical-yet-practical tour of solar + storage, electrification pathways, utility rate structures, and the buyer education required when energy systems become part of the listing.",
    quote: "The house that produces power sells differently.",
    quoteBy: "Mike Watson",
    format: "Hardcover · Special Reports",
    availability: "Companion to Solar + Energy Homes",
    url: "https://mikewatsonrealtor.com/shelf/home-energy-systems",
    amazonUrl: "https://mikewatsonrealtor.com/shelf/home-energy-systems",
    cover: "#243447",
    accent: "#e0b84a",
    ink: "#f6f0e5",
    motif: "orbit",
    height: 2.0,
    thickness: 0.19,
  },
  {
    id: "the-watson-process",
    title: "The Watson Process",
    shortTitle: "The Watson Process",
    author: "Mike Watson",
    description:
      "How one individual top producer in the Antelope Valley structures intake, pricing, marketing, negotiation, and post-close service without a team layer between client and agent.",
    quote: "Process is what remains when the market gets noisy.",
    quoteBy: "Mike Watson",
    format: "Hardcover · About the Work",
    availability: "Living document",
    url: "https://mikewatsonrealtor.com/shelf/the-watson-process",
    amazonUrl: "https://mikewatsonrealtor.com/shelf/the-watson-process",
    cover: "#2a2118",
    accent: "#c9a46a",
    ink: "#f5efe2",
    motif: "lattice",
    height: 2.2,
    thickness: 0.25,
    living: true,
  },
] satisfies CatalogBook[]).sort(
  (left, right) => right.height - left.height,
);
