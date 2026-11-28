import type { GuideHero } from "@/components/GuideLayout";

/**
 * The long-form guides that have their own pages at the site root
 * (/3-bhk-or-4-bhk-…, /is-bangalore-…) rather than under /blogs.
 *
 * Each guide page reads its URL, title, date and hero from here, and so do the
 * article listings: the /blogs page, the home page's blog section and the
 * "Recent Stories" sidebar (see data/articles.ts). A guide that is missing from
 * this list does not show up in any of them, only in the header menu.
 *
 * To add a guide: an entry here, its page at app/(site)/<slug>/page.tsx, and a
 * link in the Insights group of data/siteNav.js.
 */
export type GuideMeta = {
  slug: string;
  /** The page URL, at the site root. */
  href: string;
  /** The H1 on the page, and the card title in listings. */
  title: string;
  /** Card copy in the listings. */
  excerpt: string;
  /** One of the "Read by Topic" names on /blogs, so the topic filter finds it. */
  category: string;
  readTime: string;
  /** ISO date, YYYY-MM-DD. */
  published: string;
  /** The photo above the page title, also used for the share card. */
  hero: GuideHero;
  /** The hero at card size (960 × 504) for the listings. */
  cardImage: string;
};

export const guideData: GuideMeta[] = [
  {
    slug: "3-bhk-or-4-bhk-which-is-better-to-live-in-bangalore",
    href: "/3-bhk-or-4-bhk-which-is-better-to-live-in-bangalore",
    title: "3 BHK or 4 BHK: Which One Is Good to Live In Bangalore? (2026 Guide)",
    excerpt:
      "The real difference between 3 BHK and 4 BHK in Bangalore is not one bedroom. It is roughly Rs 1 crore, a bigger EMI, a thinner resale pool, and often a different part of the city.",
    category: "Buyer's Guide",
    readTime: "11 min read",
    published: "2026-11-04",
    hero: {
      src: "/guides/3-bhk-or-4-bhk-bangalore.webp",
      width: 1600,
      height: 840,
      alt: "Apartment towers around the central park at Prestige Shantiniketan, Whitefield, Bangalore",
    },
    cardImage: "/guides/3-bhk-or-4-bhk-bangalore-card.webp",
  },
  {
    slug: "is-bangalore-good-to-live-or-invest-in",
    href: "/is-bangalore-good-to-live-or-invest-in",
    title: "Is Bangalore Good to Live or Invest In? A 2026 Answer With the Numbers",
    excerpt:
      "Yes on both counts, with conditions that matter more than the yes. 2026 prices, rental yields, unsold stock and the best areas to invest, with the risks the developer blogs leave out.",
    category: "Location and Infrastructure",
    readTime: "11 min read",
    published: "2026-11-04",
    hero: {
      src: "/guides/bangalore-live-or-invest.webp",
      width: 1600,
      height: 840,
      alt: "Manyata Embassy Business Park and the North Bangalore skyline at sunset",
    },
    cardImage: "/guides/bangalore-live-or-invest-card.webp",
  },
];

/** The guide with this slug. Throws, failing the build, if it is not listed above. */
export function getGuide(slug: string): GuideMeta {
  const guide = guideData.find((g) => g.slug === slug);
  if (!guide) throw new Error(`No guide "${slug}" in data/guideData.ts`);
  return guide;
}
