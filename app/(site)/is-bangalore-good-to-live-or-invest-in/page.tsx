import type { Metadata } from "next";
import GuideLayout, { guideSchema, type GuideHero } from "@/components/GuideLayout";
import { guideMdxComponents } from "@/components/GuideContent";
import GuideBody from "@/content/guides/is-bangalore-good-to-live-or-invest-in.mdx";
import { bangaloreLiveOrInvestFaqs } from "@/data/guideFaqs";
import { photoCredits } from "@/data/photoCredits";

const PATH = "/is-bangalore-good-to-live-or-invest-in";
const META_TITLE = "Is Bangalore Good to Live or Invest In? 2026 Data & Verdict";
const META_DESCRIPTION =
  "Is Bangalore good to live or invest in? 2026 prices, rental yields, unsold stock, best areas to invest in Bangalore and the honest trade-offs, in one guide.";
const TITLE = "Is Bangalore Good to Live or Invest In? A 2026 Answer With the Numbers";
const PUBLISHED = "2026-11-04";

const hero: GuideHero = {
  src: "/guides/bangalore-live-or-invest.webp",
  width: 1600,
  height: 840,
  alt: "Manyata Embassy Business Park and the North Bangalore skyline at sunset",
  credit: photoCredits.manyataBusinessPark,
};

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: PATH },
  keywords: [
    "is Bangalore good to live or invest in",
    "Bangalore real estate investment",
    "best areas to invest in Bangalore",
    "rental yield in Bangalore",
    "Bangalore property prices 2026",
    "North Bangalore real estate",
    "cost of living in Bangalore",
    "villas near Bangalore airport",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: PATH,
    siteName: "Embassy Riverine",
    type: "article",
    publishedTime: PUBLISHED,
    locale: "en_IN",
    images: [{ url: hero.src, width: hero.width, height: hero.height, alt: hero.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [hero.src],
  },
};

const schema = guideSchema({
  path: PATH,
  title: TITLE,
  description: META_DESCRIPTION,
  hero,
  published: PUBLISHED,
  faqs: bangaloreLiveOrInvestFaqs,
  crumb: "Is Bangalore Good to Live or Invest In?",
});

export default function BangaloreLiveOrInvestPage() {
  return (
    <GuideLayout
      schema={schema}
      eyebrow="Market Guide · Bangalore 2026"
      title={TITLE}
      subtitle="2026 prices, rental yields, unsold stock, best areas to invest in Bangalore and the honest trade-offs, in one guide."
      hero={hero}
      faqs={bangaloreLiveOrInvestFaqs}
    >
      <GuideBody components={guideMdxComponents} />
    </GuideLayout>
  );
}
