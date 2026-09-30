import { SITE_URL } from "./project";

export type BlogMeta = {
  id: string;

  /* SEO */
  title: string;
  slug: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonical: string;
  altText?: string;

  /* Display */
  image: string;
  date: string;
  updatedAt: string;
  author: string;
  category: string;
  readTime: string;
  tags: string[];
  featured: boolean;

  /* JSON-LD */
  schemaMarkup?: Record<string, unknown> | Record<string, unknown>[];
  faqSchema?: Record<string, unknown>;
};

const publisher = {
  "@type": "Organization",
  name: "Real Revenue",
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.webp`,
  },
};

export const blogData: BlogMeta[] = [
  {
    id: "blog-1",

    /* SEO */
    title: "Embassy Riverine North Bangalore: Complete Buyer's Guide 2026",
    slug: "embassy-riverine-north-bangalore-buyers-guide-2026",
    excerpt:
      "Prices, configurations, the master plan, the RERA position and the honest risks — everything you need before booking a villa at Embassy Riverine.",
    metaTitle:
      "Embassy Riverine Buyer's Guide 2026 | Price, Floor Plans & RERA",
    metaDescription:
      "A complete 2026 buyer's guide to Embassy Riverine — 217 villas at Embassy Origins, Tarahunise. Prices from Rs 14.10 Cr, configurations, master plan, RERA and risks.",
    keywords: [
      "Embassy Riverine",
      "Embassy Riverine buyers guide",
      "Embassy Riverine price",
      "Embassy Origins Bangalore",
      "luxury villas North Bangalore",
    ],
    canonical: `${SITE_URL}/blogs/embassy-riverine-north-bangalore-buyers-guide-2026`,

    /* Display */
    image: "/blog-1.webp",
    altText:
      "Luxury villa exterior representative of Embassy Riverine at Embassy Origins, North Bangalore",
    date: "2026-09-18",
    updatedAt: "2026-09-21",
    author: "Real Revenue",
    category: "Buyer's Guide",
    readTime: "11 min read",
    tags: ["north bangalore", "luxury villas", "embassy developments", "buyer guide"],
    featured: true,

    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Embassy Riverine North Bangalore: Complete Buyer's Guide 2026",
      datePublished: "2026-09-18",
      dateModified: "2026-09-21",
      author: { "@type": "Organization", name: "Real Revenue" },
      publisher,
      image: `${SITE_URL}/blog-1.webp`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/blogs/embassy-riverine-north-bangalore-buyers-guide-2026`,
      },
    },

    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the starting price at Embassy Riverine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Indicative launch pricing starts at Rs 14.10 crore for the 4 BHK and Rs 17.43 crore for the 4.5 BHK, which works out to roughly Rs 33,100 to Rs 37,700 per sq ft on built-up area, exclusive of GST, stamp duty and registration.",
          },
        },
        {
          "@type": "Question",
          name: "When is possession at Embassy Riverine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The RERA-filed completion date is 30 September 2032, with phased handover indicated from 2030 onwards. The RERA date is the contractually enforceable one.",
          },
        },
      ],
    },
  },

  {
    id: "blog-2",

    /* SEO */
    title:
      "Villa Projects in North Bangalore 2026: How Embassy Riverine Compares",
    slug: "villa-projects-north-bangalore-2026",
    excerpt:
      "Embassy Riverine against Embassy Boulevard, Total Environment's After the Rain, Sobha Lifestyle Legacy and Keya Life by the Lake — on density, land and price.",
    metaTitle:
      "Villa Projects in North Bangalore 2026 | Riverine vs the Alternatives",
    metaDescription:
      "A like-for-like comparison of villa projects in North Bangalore — Embassy Riverine, Embassy Boulevard, After the Rain, Sobha Lifestyle Legacy and Keya Life by the Lake.",
    keywords: [
      "villa projects in North Bangalore",
      "villa projects North Bangalore",
      "Embassy Riverine vs Embassy Boulevard",
      "luxury villas Yelahanka",
      "North Bangalore real estate 2026",
    ],
    canonical: `${SITE_URL}/blogs/villa-projects-north-bangalore-2026`,

    /* Display */
    image: "/blog-2.webp",
    altText:
      "Comparing villa projects in the North Bangalore airport corridor in 2026",
    date: "2026-09-20",
    updatedAt: "2026-09-21",
    author: "Real Revenue",
    category: "Market Comparison",
    readTime: "9 min read",
    tags: ["north bangalore", "comparison", "villa projects", "investment"],
    featured: false,

    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Villa Projects in North Bangalore 2026: How Embassy Riverine Compares",
      datePublished: "2026-09-20",
      dateModified: "2026-09-21",
      author: { "@type": "Organization", name: "Real Revenue" },
      publisher,
      image: `${SITE_URL}/blog-2.webp`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/blogs/villa-projects-north-bangalore-2026`,
      },
    },

    faqSchema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which is the most expensive villa project in North Bangalore?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "At a working rate of roughly Rs 33,000 to Rs 38,000 per sq ft on built-up area, Embassy Riverine is priced above every other villa project currently selling in the North Bangalore airport corridor.",
          },
        },
      ],
    },
  },
];

export default blogData;
