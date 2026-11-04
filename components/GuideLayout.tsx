import type { ReactNode } from "react";
import Image from "next/image";
import PageBanner from "./PageBanner";
import FaqAccordion from "./FaqAccordion";
import ContactBlock from "./ContactBlock";
import PhotoCredit from "./PhotoCredit";
import StickyDownloadButton from "./StickyButton";
import { SITE_URL, breadcrumb } from "@/data/project";
import type { GuideFaq } from "@/data/guideFaqs";
import type { PhotoCreditInfo } from "@/data/photoCredits";

export type GuideHero = {
  /** A file in public/, so the same URL serves the page and the share card. */
  src: string;
  width: number;
  height: number;
  alt: string;
  credit?: PhotoCreditInfo;
};

/** Article + FAQPage + breadcrumb graph for a guide page. */
export function guideSchema({
  path,
  title,
  description,
  hero,
  published,
  faqs,
  crumb,
}: {
  path: string;
  title: string;
  description: string;
  hero: GuideHero;
  published: string;
  faqs: GuideFaq[];
  crumb: string;
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: title,
        description,
        image: `${SITE_URL}${hero.src}`,
        datePublished: published,
        dateModified: published,
        author: { "@type": "Organization", name: "Real Revenue" },
        publisher: {
          "@type": "Organization",
          name: "Real Revenue",
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.webp` },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${path}` },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      breadcrumb([
        { name: "Home", path: "/" },
        { name: crumb, path },
      ]),
    ],
  };
}

/**
 * Shell for the long-form guide pages: title band, hero photo, the guide body
 * (MDX, rendered by the page), the FAQ and a closing contact block.
 */
export default function GuideLayout({
  schema,
  eyebrow,
  title,
  subtitle,
  hero,
  children,
  faqs,
  contactIntro,
}: {
  schema: object;
  eyebrow: string;
  title: string;
  subtitle: ReactNode;
  hero: GuideHero;
  children: ReactNode;
  faqs: GuideFaq[];
  contactIntro?: ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageBanner eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <section className="w-full bg-white pt-12 md:pt-14 px-6">
        <figure className="max-w-5xl mx-auto">
          <Image
            src={hero.src}
            width={hero.width}
            height={hero.height}
            alt={hero.alt}
            priority
            sizes="(max-width: 1100px) 100vw, 1024px"
            className="w-full h-auto rounded-xl border border-[#e5dcc5]"
          />
          {hero.credit ? (
            <figcaption className="mt-2 text-right text-[11.5px] text-gray-400">
              <PhotoCredit credit={hero.credit} />
            </figcaption>
          ) : null}
        </figure>
      </section>

      {children}

      <FaqAccordion
        faqs={faqs}
        title="Frequently Asked Questions"
        eyebrow="FAQ"
        className="bg-[#FAF8F3] border-y border-[#e5dcc5]"
      />

      <ContactBlock intro={contactIntro} className="bg-white" />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
