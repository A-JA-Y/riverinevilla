import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout, { guideSchema, type GuideHero } from "@/components/GuideLayout";
import { guideMdxComponents } from "@/components/GuideContent";
import GuideBody from "@/content/guides/3-bhk-or-4-bhk-which-is-better-to-live-in-bangalore.mdx";
import { bhkComparisonFaqs } from "@/data/guideFaqs";
import { photoCredits } from "@/data/photoCredits";

const PATH = "/3-bhk-or-4-bhk-which-is-better-to-live-in-bangalore";
const META_TITLE = "3 BHK or 4 BHK in Bangalore: Which Is Better to Live In?";
const META_DESCRIPTION =
  "3 BHK or 4 BHK in Bangalore? We compare size, the Rs 1 Cr price gap, EMI, maintenance, resale and where each is actually available, then give you a 5-minute test to decide.";
const TITLE = "3 BHK or 4 BHK: Which One Is Good to Live In Bangalore? (2026 Guide)";
const PUBLISHED = "2026-11-04";

const hero: GuideHero = {
  src: "/guides/3-bhk-or-4-bhk-bangalore.webp",
  width: 1600,
  height: 840,
  alt: "Apartment towers around the central park at Prestige Shantiniketan, Whitefield, Bangalore",
  credit: photoCredits.prestigeShantiniketanPark,
};

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: PATH },
  keywords: [
    "3 BHK or 4 BHK",
    "3 BHK vs 4 BHK Bangalore",
    "difference between 3 BHK and 4 BHK",
    "4 BHK apartments in Bangalore",
    "3 BHK flats in Bangalore",
    "upgrade from 3 BHK to 4 BHK",
    "4 BHK villa in Bangalore",
    "villa vs apartment in Bangalore",
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
  faqs: bhkComparisonFaqs,
  crumb: "3 BHK or 4 BHK in Bangalore",
});

export default function ThreeOrFourBhkPage() {
  return (
    <GuideLayout
      schema={schema}
      eyebrow="Buyer’s Guide · Bangalore 2026"
      title={TITLE}
      subtitle="We compare size, the Rs 1 Cr price gap, EMI, maintenance, resale and where each is actually available, then give you a 5-minute test to decide."
      hero={hero}
      faqs={bhkComparisonFaqs}
      contactIntro={
        <p>
          Still deciding between 3 BHK or 4 BHK, or between a 4 BHK flat and a villa?{" "}
          <Link href="/contact-us" className="text-[#A8822E] font-semibold link-wipe">
            Contact us
          </Link>{" "}
          and we will send the Embassy Riverine cost sheet, floor plans and live plot
          availability the same day, with the all-inclusive working beside the headline price.
        </p>
      }
    >
      <GuideBody components={guideMdxComponents} />
    </GuideLayout>
  );
}
