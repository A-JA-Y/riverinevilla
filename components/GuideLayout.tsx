import { Fragment, type ReactNode } from "react";
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
};

/** A photo that needs attribution (CC BY / BY-SA), and what it shows. */
export type GuidePhotoCredit = { subject: string; credit: PhotoCreditInfo };

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
 * Shell for the long-form guide pages: hero photo, title band, the guide body
 * (MDX, rendered by the page), the FAQ, a closing contact block and, at the
 * very end, the credits the Creative Commons photos require (kept off the
 * images themselves).
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
  photoCredits = [],
}: {
  schema: object;
  eyebrow: string;
  title: string;
  subtitle: ReactNode;
  hero: GuideHero;
  children: ReactNode;
  faqs: GuideFaq[];
  contactIntro?: ReactNode;
  photoCredits?: GuidePhotoCredit[];
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* hero photo first, above the page title */}
      <div className="relative w-full h-[240px] sm:h-[340px] md:h-[440px] lg:h-[500px] bg-[#0b1f1a]">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <PageBanner eyebrow={eyebrow} title={title} subtitle={subtitle} />

      {children}

      <FaqAccordion
        faqs={faqs}
        title="Frequently Asked Questions"
        eyebrow="FAQ"
        className="bg-[#FAF8F3] border-y border-[#e5dcc5]"
      />

      <ContactBlock intro={contactIntro} className="bg-white" />

      {photoCredits.length > 0 ? (
        <div className="w-full bg-white px-6 pb-10">
          <p className="max-w-5xl mx-auto border-t border-[#e5dcc5] pt-5 text-[11px] leading-relaxed text-gray-400">
            {photoCredits.map((c, i) => (
              <Fragment key={c.subject}>
                {i > 0 ? " · " : null}
                <PhotoCredit credit={c.credit} label={c.subject} />
              </Fragment>
            ))}
          </p>
        </div>
      ) : null}

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
