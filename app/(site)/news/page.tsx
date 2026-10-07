import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import FaqAccordion from "@/components/FaqAccordion";
import ContactBlock from "@/components/ContactBlock";
import Reveal from "@/components/Reveal";
import StickyDownloadButton from "@/components/StickyButton";
import BlogsIndexTopicGrid, {
  type IndexPost,
  type IndexTopic,
} from "@/components/BlogsIndexTopicGrid";
import NewsData from "@/data/newsData";
import { breadcrumb, projectSchema } from "@/data/project";

const META_TITLE = "Embassy Riverine News | New Launch, RERA & Site Updates";
const META_DESCRIPTION =
  "Embassy Riverine new launch news: RERA registration, launch date, price revisions, booking windows, construction progress and North Bangalore updates.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: "/news" },
  keywords: [
    "Embassy Riverine news",
    "Embassy Riverine new launch",
    "Embassy Riverine RERA number",
    "Embassy Riverine launch offer",
    "Embassy Riverine possession date",
    "Embassy Riverine price list",
    "Embassy Riverine EOI",
    "Embassy Origins launch",
    "new launch projects in North Bangalore",
    "Embassy Group new launch villas",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/news",
    siteName: "Embassy Riverine",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-cover.webp",
        width: 1200,
        height: 630,
        alt: "Embassy Riverine — luxury villas at Embassy Origins, North Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: ["/og-cover.webp"],
  },
};

const linkCls = "text-[#A8822E] font-semibold link-wipe";

/** "Categories", as listed in the doc. */
const categories: IndexTopic[] = [
  { name: "Launch News", description: "the launch, phases, EOI and booking windows" },
  { name: "RERA and Approvals", description: "registrations, filings, completion dates" },
  {
    name: "Price and Booking",
    description: "price list revisions, launch offers, payment plan changes",
  },
  { name: "Construction Updates", description: "site progress against the RERA schedule" },
  { name: "Infrastructure", description: "airport, metro, road and corridor news" },
];

/** "Latest" card copy from the doc, keyed by story slug. */
const storyCopy: Record<string, { blurb: string; cta: string }> = {
  "embassy-origins-launch-north-bangalore-2026": {
    blurb:
      "Embassy Developments Limited opened Embassy Origins on 15 September 2026, six days after RERA registration: 85 acres north of Yelahanka planned around an open stream corridor, with the Embassy Riverine villa precinct of 217 homes on about 50 acres. The launch price list, the three villa & configuration options and the possession timeline.",
    cta: "Read the launch story",
  },
};

const stories: IndexPost[] = [...NewsData]
  .sort((a, b) => b.date.localeCompare(a.date))
  .map((n) => {
    const copy = storyCopy[n.slug];
    return {
      slug: n.slug,
      title: n.title,
      image: n.image,
      alt: n.altText || n.title,
      topic: n.category,
      date: n.date,
      blurb: copy?.blurb ?? n.excerpt,
      cta: copy?.cta ?? "Read the story",
    };
  });

/** "Where Things Stand" table, verbatim from the doc. */
const standing: { item: string; position: string; asOf: string }[] = [
  {
    item: "RERA",
    position:
      "Embassy Riverine PRM/KA/RERA/1251/309/PR/090926/008924 · Embassy South Reserve …008925 · registered 9 September 2026",
    asOf: "Launch",
  },
  { item: "Launch", position: "Embassy Origins launched 15 September 2026", asOf: "Launch" },
  {
    item: "Price list",
    position:
      "4 BHK Rs 14.10 – 14.97 Cr · 4.5 BHK Rs 17.43 – 19.87 Cr · 5 BHK on request · ~Rs 33,100 – 37,700 per sq ft built-up",
    asOf: "Launch",
  },
  {
    item: "Inventory at launch",
    position: "48 × 4 BHK · 137 × 4.5 BHK · 32 × 5 BHK",
    asOf: "Launch",
  },
  {
    item: "Booking",
    position: "About 10% on booking, construction-linked plan; EOI windows vary by release",
    asOf: "Launch",
  },
  {
    item: "Launch offer",
    position: "None confirmed in writing; ask before you book",
    asOf: "Launch",
  },
  {
    item: "Possession",
    position:
      "RERA-filed completion 30 September 2032; phased handover indicated from 2030",
    asOf: "Launch",
  },
  {
    item: "Metro",
    position:
      "Blue Line Phase 2B, Doddajala nearest alignment point at 7.5 km; status to be confirmed",
    asOf: "Launch",
  },
];

const willReport: { label: string; body: ReactNode }[] = [
  {
    label: "Price revisions.",
    body: (
      <>
        Developers revise in phases. When the{" "}
        <Link href="/price" className={linkCls}>
          Embassy Riverine price list
        </Link>{" "}
        moves, the old and new figures go up side by side.
      </>
    ),
  },
  {
    label: "EOI and booking windows.",
    body: (
      <>
        Which{" "}
        <Link href="/villas-configurations" className={linkCls}>
          villa &amp; configuration
        </Link>{" "}
        is open, what the Embassy Riverine EOI amount is for that release, and when it
        closes.
      </>
    ),
  },
  {
    label: "Launch offers.",
    body: "If the developer runs an Embassy Riverine launch offer, the terms and the deadline, in writing. If there is none, we say so rather than imply one.",
  },
  {
    label: "Construction updates.",
    body: "Site progress against the RERA-filed schedule, including the Embassy Riverine possession date if the developer revises its handover indication.",
  },
  {
    label: "RERA filings.",
    body: (
      <>
        Any change to the registered particulars, the sanctioned{" "}
        <Link href="/master-plan" className={linkCls}>
          master plan
        </Link>{" "}
        or the specification annexure.
      </>
    ),
  },
  {
    label: "South Reserve.",
    body: "News on the apartment phase, since it shares the township, the gates and the infrastructure.",
  },
  {
    label: "Corridor infrastructure.",
    body: "Blue Line metro status, NH-44 and IVC Road works, airport expansion, new schools and hospitals in the belt.",
  },
  {
    label: "The wider market.",
    body: "New launch projects in North Bangalore and Embassy Group new launch villas elsewhere in the city, where they change the comparison for a Riverine buyer.",
  },
];

const newsFaqs = [
  {
    question: "Is Embassy Riverine a new launch?",
    answer:
      "Yes. It was registered with Karnataka RERA on 9 September 2026 and launched on 15 September 2026 as the villa precinct of Embassy Origins. The pre launch stage is over; current pricing is launch pricing.",
  },
  {
    question: "What is the Embassy Riverine RERA number?",
    answer:
      "PRM/KA/RERA/1251/309/PR/090926/008924 for the villas; PRM/KA/RERA/1251/309/PR/090926/008925 for the Embassy South Reserve apartments. Verify both at rera.karnataka.gov.in.",
  },
  {
    question: "Is there an Embassy Riverine launch offer?",
    answer:
      "None confirmed in writing at the time of launch. Offers, when they run, are tied to specific releases and booking windows; this page will carry the terms and the deadline.",
  },
  {
    question: "What is the Embassy Riverine possession date?",
    answer:
      "The RERA-filed completion date is 30 September 2032. The developer has indicated phased handover from 2030. The RERA date is the enforceable one; construction updates here will track progress against it.",
  },
  {
    question: "Has the price changed since launch?",
    answer:
      "Not at the time of writing. The launch price list is Rs 14.10 Cr onwards for the 4 BHK and Rs 17.43 Cr onwards for the 4.5 BHK, with the 5 BHK on request. Any revision will be posted with the date.",
  },
  {
    question: "How do I get updates before they are posted here?",
    answer:
      "Contact us on +91 63566 63535 by call or WhatsApp and ask to be added to the update list. Price-list changes and booking windows reach the list the same day we have them in writing.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    projectSchema,
    {
      "@type": "FAQPage",
      mainEntity: newsFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "News", path: "/news" },
    ]),
  ],
};

export default function NewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageBanner
        eyebrow="News & Updates"
        title="Embassy Riverine News – New Launch, RERA, Construction and North Bangalore Updates"
        subtitle={null}
      />

      {/* Intro */}
      <section className="w-full bg-white py-14 md:py-16 px-6">
        <Reveal
          variant="up"
          className="max-w-5xl mx-auto space-y-5 text-[17px] leading-relaxed text-gray-700"
        >
          <p>
            <Link href="/" className={linkCls}>
              Embassy Riverine
            </Link>{" "}
            is the new launch of 2026: 217 villas inside the 85-acre Embassy Origins township
            at Tarahunise, registered with Karnataka RERA on 9 September 2026 and launched on
            15 September. This page is the running record from that date on. Price list
            revisions, EOI and booking windows, launch offers when the developer runs them,
            construction progress, RERA filings, and the infrastructure news that moves this
            corridor: the airport, the Blue Line metro, the roads.
          </p>
          <p className="bg-[#FAF8F3] border-l-[3px] border-[#C8A24A] rounded-r-lg p-5 sm:p-6 text-[15px]">
            <strong className="text-[#12302a]">One rule for everything posted here:</strong>{" "}
            it comes from the brochure, the RERA portal or a developer announcement, with a
            date on it. No portal rumours, no &quot;sources say&quot;. If we cannot confirm
            it, it does not go up. For the project itself, the{" "}
            <Link href="/price" className={linkCls}>
              price
            </Link>
            ,{" "}
            <Link href="/villas-configurations" className={linkCls}>
              villa &amp; configuration
            </Link>
            ,{" "}
            <Link href="/floor-plans" className={linkCls}>
              floor plan
            </Link>
            ,{" "}
            <Link href="/master-plan" className={linkCls}>
              master plan
            </Link>
            ,{" "}
            <Link href="/amenities" className={linkCls}>
              amenities
            </Link>{" "}
            and{" "}
            <Link href="/location-connectivity" className={linkCls}>
              location
            </Link>{" "}
            pages carry the current figures; news is what changed and when.
          </p>
        </Reveal>
      </section>

      {/* Categories + Latest (category cards filter the stories) */}
      <BlogsIndexTopicGrid
        topicsHeading="Categories"
        topicsId="categories"
        postsHeading="Latest"
        postsId="latest"
        topics={categories}
        posts={stories}
        basePath="/news"
        noun={["story", "stories"]}
      />

      {/* Where Things Stand */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="where-things-stand"
      >
        <Reveal variant="up" className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-3">
            Where Things Stand
          </h2>
          <p className="text-[15px] text-gray-700 leading-relaxed mb-6">
            A short, dated summary so you do not have to read every post. Updated whenever a
            post changes it.
          </p>

          <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm bg-white">
            <table className="w-full text-sm text-left min-w-[560px]">
              <caption className="sr-only">
                Where things stand: the current position on RERA, launch, price list,
                inventory, booking, launch offer, possession and metro, with the date of each
              </caption>
              <thead className="bg-[#F6F2E8] text-[#A8822E] uppercase text-[11px] tracking-[0.12em]">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">Item</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Position</th>
                  <th scope="col" className="px-5 py-4 font-semibold">As of</th>
                </tr>
              </thead>
              <tbody>
                {standing.map((row) => (
                  <tr
                    key={row.item}
                    className="border-t border-[#e5dcc5] hover:bg-[#FAF8F3] transition-colors align-top"
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 font-semibold text-[#12302a] text-left whitespace-nowrap"
                    >
                      {row.item}
                    </th>
                    <td className="px-5 py-4 text-gray-700 leading-relaxed break-words">
                      {row.position}
                    </td>
                    <td className="px-5 py-4 text-gray-600 whitespace-nowrap">{row.asOf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[15px] text-gray-700 leading-relaxed mt-6">
            The project pages carry the detail: Embassy Riverine price and the worked cost
            example on the{" "}
            <Link href="/price" className={linkCls}>
              Price page
            </Link>
            , the three formats on the{" "}
            <Link href="/villas-configurations" className={linkCls}>
              villa &amp; configuration page
            </Link>
            , the layouts on the{" "}
            <Link href="/floor-plans" className={linkCls}>
              floor plan page
            </Link>
            , the drawing on the{" "}
            <Link href="/master-plan" className={linkCls}>
              master plan page
            </Link>
            , the clubhouse on the{" "}
            <Link href="/amenities" className={linkCls}>
              amenities page
            </Link>
            , and the map and distances on the{" "}
            <Link href="/location-connectivity" className={linkCls}>
              location page
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* What We Will Report */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="what-we-will-report">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-8">
              What We Will Report
            </h2>
          </Reveal>

          <ul className="grid sm:grid-cols-2 gap-5">
            {willReport.map((item, i) => (
              <Reveal
                as="li"
                key={item.label}
                variant="up"
                delay={(i % 2) * 70}
                className="bg-[#FAF8F3] rounded-lg p-6 border-l-[3px] border-[#C8A24A] text-gray-700 text-[15px] leading-relaxed"
              >
                <strong className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#A8822E] mb-2">
                  {item.label}
                </strong>
                {item.body}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FaqAccordion
        faqs={newsFaqs}
        title="Frequently Asked Questions"
        eyebrow="FAQ"
        className="bg-[#FAF8F3] border-y border-[#e5dcc5]"
      />

      <ContactBlock
        className="bg-white"
        cta="Book a Site Visit"
        intro={
          <p>
            Real Revenue is an authorised channel partner for Embassy Riverine. Contact us for
            the current{" "}
            <Link href="/price" className={linkCls}>
              price list
            </Link>{" "}
            and cost sheet, open EOI and booking windows by villa &amp; configuration, the{" "}
            <Link href="/floor-plans" className={linkCls}>
              floor plan
            </Link>{" "}
            and{" "}
            <Link href="/master-plan" className={linkCls}>
              master plan
            </Link>{" "}
            set, an Embassy Riverine site visit on any day of the week with pickup from Hebbal
            or Yelahanka, and home-loan comparison across lenders.
          </p>
        }
      />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
