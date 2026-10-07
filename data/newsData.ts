import { SITE_URL } from "./project";

export type NewsMeta = {
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
  featured?: boolean;
  tags?: string[];

  /* Extra */
  location?: string;
  newsType?: string;

  /* Structured Data */
  schemaMarkup?: Record<string, unknown>;
  faqSchema?: Record<string, unknown>;
};

const NewsData: NewsMeta[] = [
  {
    id: "news-1",

    /* SEO */
    title:
      "Embassy Origins Launched: 85-Acre Township with 217 Villas at Tarahunise, North Bangalore",
    slug: "embassy-origins-launch-north-bangalore-2026",
    excerpt:
      "Embassy Developments launched Embassy Origins on 15 September 2026 — an 85-acre township north of Yelahanka built around a protected riparian corridor.",
    metaTitle:
      "Embassy Origins Launch 2026 | 85-Acre Township, North Bangalore",
    metaDescription:
      "Embassy Developments launched the 85-acre Embassy Origins township at Tarahunise on 15 September 2026, with Embassy Riverine's 217 villas as its villa precinct.",
    keywords: [
      "Embassy Origins launch",
      "Embassy Riverine",
      "Embassy Developments new launch",
      "North Bangalore township",
      "Tarahunise",
    ],
    canonical: `${SITE_URL}/news/embassy-origins-launch-north-bangalore-2026`,

    /* Display */
    image: "/news-embassy-origins.webp",
    altText: "Aerial view of a villa with a private garden beside a stream",
    date: "2026-09-16",
    updatedAt: "2026-09-21",
    author: "Real Revenue",
    category: "Launch News",
    readTime: "5 min read",
    featured: true,
    tags: [
      "north bangalore",
      "embassy origins",
      "embassy riverine",
      "new launch",
      "airport corridor",
    ],

    /* Extra */
    location: "Tarahunise, North Bangalore",
    newsType: "Project Launch",

    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "Embassy Origins Launched: 85-Acre Township with 217 Villas at Tarahunise, North Bangalore",
      datePublished: "2026-09-16",
      dateModified: "2026-09-21",
      author: { "@type": "Organization", name: "Real Revenue" },
      publisher: {
        "@type": "Organization",
        name: "Real Revenue",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.webp` },
      },
      image: `${SITE_URL}/news-embassy-origins.webp`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/news/embassy-origins-launch-north-bangalore-2026`,
      },
    },
  },
];

export default NewsData;
