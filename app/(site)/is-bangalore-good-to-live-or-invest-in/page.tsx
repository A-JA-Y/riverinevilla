import type { Metadata } from "next";
import GuideLayout, { guideSchema, type GuidePhotoCredit } from "@/components/GuideLayout";
import { guideMdxComponents } from "@/components/GuideContent";
import GuideBody from "@/content/guides/is-bangalore-good-to-live-or-invest-in.mdx";
import { getGuide } from "@/data/guideData";
import { bangaloreLiveOrInvestFaqs } from "@/data/guideFaqs";
import { photoCredits } from "@/data/photoCredits";

/* URL, title, date and hero come from data/guideData.ts, which the article
   listings (/blogs, the home page, "Recent Stories") read too. */
const guide = getGuide("is-bangalore-good-to-live-or-invest-in");
const PATH = guide.href;
const META_TITLE = "Is Bangalore Good to Live or Invest In? 2026 Data & Verdict";
const META_DESCRIPTION =
  "Is Bangalore good to live or invest in? 2026 prices, rental yields, unsold stock, best areas to invest in Bangalore and the honest trade-offs, in one guide.";
const TITLE = guide.title;
const PUBLISHED = guide.published;
const hero = guide.hero;

/** Creative Commons photos on this page, credited at the foot of the page. */
const credits: GuidePhotoCredit[] = [
  { subject: "Manyata Embassy Business Park", credit: photoCredits.manyataBusinessPark },
  { subject: "Hebbal Road", credit: photoCredits.hebbalRoadTraffic },
  { subject: "Varthur skyline", credit: photoCredits.varthurSkyline },
  { subject: "MG Road metro", credit: photoCredits.mgRoadMetro },
  { subject: "Kempegowda Airport Terminal 2", credit: photoCredits.kempegowdaTerminal2 },
];

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
      photoCredits={credits}
    >
      <GuideBody components={guideMdxComponents} />
    </GuideLayout>
  );
}
