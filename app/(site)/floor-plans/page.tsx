import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import FloorPlanViewer, {
  FloorPlanImage,
  MasterPlanTile,
  type PlanId,
} from "@/components/FloorPageSection";
import EnquiryButton from "@/components/EnquiryButton";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import StickyDownloadButton from "@/components/StickyButton";
import { configurations, projectSchema, breadcrumb } from "@/data/project";

const META_TITLE = "Embassy Riverine Floor Plan | 4, 4.5 & 5 BHK Villa Plans PDF";
const META_DESCRIPTION =
  "Embassy Riverine floor plan for 4 BHK (4,200 sq ft), 4.5 BHK (5,200 sq ft) and 5 BHK (6,800 sq ft) on 2,400 to 5,400 sq ft plots. Plan PDF on request.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: "/floor-plans" },
  keywords: [
    "Embassy Riverine floor plan",
    "Embassy Riverine floor plan PDF",
    "4 BHK floor plan",
    "4.5 BHK floor plan",
    "5 BHK floor plan",
    "Embassy Riverine brochure PDF download",
    "Embassy Riverine villa sizes",
    "Embassy Riverine 4 BHK villa price",
    "luxury villas in North Bangalore",
    "independent villas in North Bangalore",
  ],
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: ["/og-cover.webp"],
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/floor-plans",
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
};

const linkCls = "text-[#A8822E] font-semibold link-wipe";

/** Doc copy per floor plan; plot, built-up, car parks and units come from data/project.ts. */
const planCopy: Record<
  PlanId,
  { heading: string; onPlan: string; body: ReactNode; cta: string }
> = {
  "4bhk": {
    heading: "4 BHK Floor Plan",
    onPlan: "4 bedrooms, study, private deck",
    body: (
      <>
        The tightest plan in the precinct and the only one under 5,000 sq ft. Four bedrooms, a
        study for the one person who works from home, and a private deck off the living area.
        Three car parks on the plot. Marble through the living and dining areas, engineered
        wood in the bedrooms, double-glazed sliding doors opening the main room to the garden.
        For a family moving up from a large apartment, the 4 BHK floor plan gives up nothing
        on the township and keeps the outlay closest to the entry price of{" "}
        <strong className="text-[#12302a]">Rs 14.10 Cr</strong>.
      </>
    ),
    cta: "Request the 4 BHK Plan",
  },
  "45bhk": {
    heading: "4.5 BHK Floor Plan",
    onPlan: "4 bedrooms, half suite, family lounge, garden deck",
    body: (
      <>
        The plan most of{" "}
        <Link href="/about-embassy-riverine" className={linkCls}>
          Embassy Riverine
        </Link>{" "}
        is built on. Four full bedrooms plus a half suite that is drawn without a wardrobe
        wall, so it works as a study, a second office, a guest room or a puja room. A family
        lounge on the bedroom level, and a garden deck on a plot big enough to add a plunge
        pool. Four car parks. The extra 1,100 sq ft of land over the 4 BHK is mostly garden,
        which is what the 4.5 BHK floor plan is really selling. Price from{" "}
        <strong className="text-[#12302a]">Rs 17.43 Cr</strong>.
      </>
    ),
    cta: "Request the 4.5 BHK Plan",
  },
  "5bhk": {
    heading: "5 BHK Floor Plan",
    onPlan: "5 bedrooms, double-height foyer, pool deck",
    body: (
      <>
        The largest plan and the smallest release. Five bedrooms, a double-height foyer at the
        entrance, and a pool deck on the biggest plots in the precinct. Six car parks, which is
        the number that tells you who this plan is for: a joint family, a household with staff
        and drivers, or an owner who hosts. Only 32 of the 217{" "}
        <Link href="/villas-configurations" className={linkCls}>
          villas
        </Link>{" "}
        use the 5 BHK floor plan, so it is the one to ask about first if you want it.{" "}
        <Link href="/price" className={linkCls}>
          Price
        </Link>{" "}
        on request.
      </>
    ),
    cta: "Request the 5 BHK Plan",
  },
};

const floorPlanFaqs = [
  {
    question: "How many floor plans does Embassy Riverine have?",
    answer:
      "Three: the 4 BHK (4,200 sq ft built-up), the 4.5 BHK (5,200 sq ft) and the 5 BHK (6,800 sq ft). Each is an independent villa on its own plot.",
  },
  {
    question: "What does the 4 BHK floor plan include?",
    answer:
      "Four bedrooms, a study and a private deck on a 2,400 sq ft plot, with three car parks.",
  },
  {
    question: "What is the difference between the 4 BHK and 4.5 BHK floor plan?",
    answer:
      "The 4.5 BHK adds a half suite, a family lounge and a garden deck, with 1,000 sq ft more built-up area and 1,100 sq ft more plot. It also carries four car parks against three.",
  },
  {
    question: "What does the 5 BHK floor plan include?",
    answer:
      "Five bedrooms, a double-height foyer and a pool deck on a 5,400 sq ft plot, with six car parks. Only 32 villas use this plan.",
  },
  {
    question: "Is the floor plan the same for every villa in a format?",
    answer:
      "Yes. The layout is fixed per format; the plot position and facing are what vary, and they set the premium.",
  },
  {
    question: "What is the ceiling height in the villas?",
    answer:
      "3.4 m floor-to-floor, with finished ceilings close to 2.9 m in the main living spaces.",
  },
  {
    question: "How do I get the Embassy Riverine floor plan PDF?",
    answer:
      "Share your name, phone number and preferred configuration through the form or on WhatsApp at +91 63566 63535. The brochure with all three floor plans and the price sheet goes out the same day.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    projectSchema,
    {
      "@type": "FAQPage",
      mainEntity: floorPlanFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Floor Plans", path: "/floor-plans" },
    ]),
  ],
};

export default function FloorPlansPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageBanner
        eyebrow="Floor Plans"
        title="Embassy Riverine Floor Plan – 4, 4.5 & 5 BHK Villa Floor Plans"
        subtitle={
          <>
            There are three{" "}
            <Link href="/about-embassy-riverine" className={linkCls}>
              Embassy Riverine
            </Link>{" "}
            floor plans, one per format, and every one of them is an independent{" "}
            <Link href="/villas-configurations" className={linkCls}>
              villa
            </Link>{" "}
            on its own plot. The 4 BHK sits on 2,400 sq ft of land with 4,200 sq ft built-up,
            the 4.5 BHK on 3,500 sq ft with 5,200 sq ft built-up, and the 5 BHK on 5,400 sq ft
            with 6,800 sq ft built-up. Car parks run from three to six, and every plan is drawn
            to a 3.4 m floor-to-floor height.
          </>
        }
      />

      <FloorPlanViewer>
        {/* Intro */}
        <section className="w-full bg-white pt-14 md:pt-16 pb-4 px-6">
          <Reveal variant="up" className="max-w-5xl mx-auto space-y-5">
            <p className="text-[17px] leading-relaxed text-gray-700">
              The dimensioned drawings are in the brochure PDF, which we send on request. This
              page tells you what each floor plan contains, how the three differ, how to read
              the numbers, and where the price, master plan,{" "}
              <Link href="/amenities" className={linkCls}>
                amenities
              </Link>{" "}
              and location pages pick up.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <EnquiryButton>Get the Floor Plan PDF</EnquiryButton>
              <nav aria-label="Jump to a floor plan" className="flex flex-wrap gap-2">
                {configurations.map((c) => (
                  <a
                    key={c.id}
                    href={`#${c.id}`}
                    className="text-[12px] font-semibold text-[#12302a] bg-[#F6F2E8] border border-[#e0d6bd] hover:border-[#C8A24A] rounded-full px-3.5 py-1.5 transition-colors"
                  >
                    {c.short}
                  </a>
                ))}
              </nav>
            </div>
          </Reveal>
        </section>

        {/* Floor Plan table */}
        <section className="w-full bg-white py-12 md:py-14 px-6" id="floor-plan-table">
          <Reveal variant="up" className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-6">Floor Plan</h2>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm">
              <table className="w-full text-sm text-left min-w-[640px]">
                <caption className="sr-only">
                  Embassy Riverine floor plans with plot area, built-up area, car parks and what
                  each plan contains
                </caption>
                <thead className="bg-[#F6F2E8] text-[#A8822E] uppercase text-[11px] tracking-[0.12em]">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-semibold">Floor plan</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Plot area</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Built-up area</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Car parks</th>
                    <th scope="col" className="px-5 py-4 font-semibold">On the plan</th>
                  </tr>
                </thead>
                <tbody>
                  {configurations.map((c) => (
                    <tr
                      key={c.id}
                      className="border-t border-[#e5dcc5] hover:bg-[#FAF8F3] transition-colors"
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 font-semibold text-[#12302a] text-left whitespace-nowrap"
                      >
                        <a href={`#${c.id}`} className="hover:text-[#A8822E] transition-colors">
                          {c.type}
                        </a>
                      </th>
                      <td className="px-5 py-4 text-gray-600 whitespace-nowrap">{c.plot}</td>
                      <td className="px-5 py-4 text-gray-600 whitespace-nowrap">{c.builtUp}</td>
                      <td className="px-5 py-4 text-gray-600">{c.parking}</td>
                      <td className="px-5 py-4 text-gray-700">
                        {planCopy[c.id as PlanId].onPlan}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] text-gray-700 leading-relaxed mt-5">
              The layout is fixed within a format. What changes between two 4.5 BHK villas is
              the plot they stand on and the way it faces, not the plan.
            </p>
          </Reveal>
        </section>

        {/* 4 / 4.5 / 5 BHK floor plans */}
        <section className="w-full bg-white pt-4 pb-16 md:pb-20 px-6">
          <div className="max-w-5xl mx-auto space-y-10">
            {configurations.map((c, i) => {
              const id = c.id as PlanId;
              const copy = planCopy[id];
              const figures = `${c.plot} plot · ${c.builtUp} built-up · ${c.parking} car parks · ${c.units} units`;
              return (
                <Reveal
                  key={c.id}
                  as="article"
                  id={c.id}
                  variant="up"
                  aria-labelledby={`${c.id}-title`}
                  className="scroll-mt-28 grid md:grid-cols-2 bg-[#FAF8F3] rounded-xl border border-[#e5dcc5] overflow-hidden"
                >
                  <div className={i % 2 ? "md:order-2" : ""}>
                    <FloorPlanImage
                      id={id}
                      label={c.short}
                      alt={`${copy.heading} at Embassy Riverine — ${figures}`}
                      title={`Embassy Riverine ${copy.heading}`}
                      subtitle={figures}
                      detail={`On the plan: ${copy.onPlan}.`}
                      className="aspect-[1400/1092] md:aspect-auto md:h-full md:min-h-[380px]"
                    />
                  </div>

                  <div className="p-6 md:p-8">
                    <h2
                      id={`${c.id}-title`}
                      className="text-2xl md:text-[1.7rem] font-bold text-[#12302a] mb-4"
                    >
                      {copy.heading}
                    </h2>

                    <dl className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-5">
                      {[
                        ["Plot", c.plot],
                        ["Built-up", c.builtUp],
                        ["Car parks", String(c.parking)],
                        ["Units", String(c.units)],
                      ].map(([k, v]) => (
                        <div
                          key={k}
                          className="bg-white rounded border border-[#e8dfc8] py-2.5 px-2 text-center"
                        >
                          <dt className="text-[10px] uppercase tracking-[0.1em] text-gray-500">{k}</dt>
                          <dd className="text-[13px] font-semibold text-[#12302a] mt-1">{v}</dd>
                        </div>
                      ))}
                    </dl>

                    <p className="text-gray-700 text-[15px] leading-relaxed mb-6">{copy.body}</p>

                    <EnquiryButton variant="outline">{copy.cta}</EnquiryButton>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* How to Read the Floor Plan */}
        <section className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]">
          <div className="max-w-5xl mx-auto">
            <Reveal variant="up">
              <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-3">
                How to Read the Floor Plan
              </h2>
              <p className="text-[15px] text-gray-700 leading-relaxed mb-8">
                Three figures sit on every plan, and buyers mix them up.
              </p>
            </Reveal>

            <ul className="grid md:grid-cols-3 gap-5">
              <Reveal
                as="li"
                variant="up"
                className="bg-white rounded-lg p-6 border-t-[3px] border-[#C8A24A] shadow-sm text-[15px] text-gray-700 leading-relaxed"
              >
                <strong className="text-[#12302a]">Plot area</strong> is the land registered to
                you. It includes the garden, the deck and the car parks.
              </Reveal>
              <Reveal
                as="li"
                variant="up"
                delay={90}
                className="bg-white rounded-lg p-6 border-t-[3px] border-[#C8A24A] shadow-sm text-[15px] text-gray-700 leading-relaxed"
              >
                <strong className="text-[#12302a]">Built-up area</strong> is the{" "}
                <Link href="/villas-configurations" className={linkCls}>
                  villa
                </Link>{" "}
                itself, measured to the outside of the walls. The Embassy Riverine villa sizes
                quoted on this site are built-up: 4,200, 5,200 and 6,800 sq ft.
              </Reveal>
              <Reveal
                as="li"
                variant="up"
                delay={180}
                className="bg-white rounded-lg p-6 border-t-[3px] border-[#C8A24A] shadow-sm text-[15px] text-gray-700 leading-relaxed"
              >
                <strong className="text-[#12302a]">Carpet area</strong>{" "}
                {"is the usable floor inside the walls, smaller than built-up, and it is the figure that goes into the RERA agreement. Ask for it per villa & configuration before you compare with another project."}
              </Reveal>
            </ul>

            <Reveal variant="up">
              <p className="text-[15px] text-gray-700 leading-relaxed mt-8">
                Two more things to check on the drawing. First, the ceiling:{" "}
                <strong className="text-[#12302a]">3.4 m floor-to-floor</strong> gives finished
                ceilings close to 2.9 m in the main rooms, higher than most villas in the
                corridor. Second, the facing. The plan is identical across a format, so the
                entry direction and the view are set by the plot. Ask us which plots of your
                chosen floor plan face the stream corridor or the lake, and which face internal
                roads, before you choose.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Floor Plan PDF and Brochure */}
        <section className="w-full bg-white py-16 md:py-20 px-6" id="brochure">
          <Reveal
            variant="up"
            className="max-w-5xl mx-auto bg-[#F6F2E8] rounded-xl p-6 md:p-10 border border-[#e0d6bd]"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-4">
              Floor Plan PDF and Brochure
            </h2>
            <div className="space-y-4 text-[15px] text-gray-700 leading-relaxed">
              <p>
                The{" "}
                <Link href="/about-embassy-riverine" className={linkCls}>
                  Embassy Riverine
                </Link>{" "}
                brochure carries the dimensioned floor plan for all three formats, the{" "}
                <Link href="/master-plan" className={linkCls}>
                  master plan
                </Link>
                , the villa &amp; configuration table, the specification annexure and the
                current{" "}
                <Link href="/price" className={linkCls}>
                  price
                </Link>{" "}
                sheet. Embassy Riverine brochure PDF download is on request: share your name,
                phone number and the format you are considering, and the file goes out on
                WhatsApp or email the same day.
              </p>
              <p>
                The specification annexure attached to your agreement to sell is the binding
                document, not the brochure. Read it before you sign.
              </p>
            </div>
            <div className="mt-7">
              <EnquiryButton>Email Me the Brochure PDF</EnquiryButton>
            </div>
          </Reveal>
        </section>

        {/* Master Plan */}
        <section className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <Reveal variant="up" className="text-[15px] text-gray-700 leading-relaxed">
              <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-4">Master Plan</h2>
              <p>
                A floor plan shows the house; the{" "}
                <Link href="/master-plan" className={linkCls}>
                  master plan
                </Link>{" "}
                shows where it stands. Embassy Origins is 85 acres with the villa precinct on
                about 50, laid out along a natural stream corridor that the master plan keeps
                open. The clubhouse and central lake sit in the middle, the 19 acres of open
                space run between the clusters, and the apartments buffer the NH-44 edge. Which
                cluster your floor plan sits in decides the premium. The full drawing and
                cluster map are on the master plan page.
              </p>
              <Link
                href="/master-plan"
                className="mt-7 inline-flex items-center justify-center gap-2 border border-[#C8A24A] text-[#12302a] hover:bg-[#C8A24A] hover:text-white text-xs font-bold uppercase tracking-[0.16em] px-7 py-4 rounded transition-colors"
              >
                View the Master Plan
                <svg width="12" height="12" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                  <path
                    d="M1.5 5.5h8M6 2l3.5 3.5L6 9"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </Reveal>

            <Reveal variant="zoom">
              <MasterPlanTile />
            </Reveal>
          </div>
        </section>
      </FloorPlanViewer>

      {/* Price by Floor Plan */}
      <section className="w-full bg-white py-16 md:py-20 px-6">
        <Reveal variant="up" className="max-w-5xl mx-auto text-[15px] text-gray-700 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-4">
            Price by Floor Plan
          </h2>
          <p>
            Embassy Riverine 4 BHK villa price is{" "}
            <strong className="text-[#12302a]">Rs 14.10 to 14.97 Cr</strong>, the 4.5 BHK villa
            price <strong className="text-[#12302a]">Rs 17.43 to 19.87 Cr</strong>, and the 5 BHK
            villa price on request, all at roughly Rs 33,100 to 37,700 per sq ft on built-up
            area. GST, stamp duty, registration and deposits are extra, and the booking amount
            is about 10% on a construction-linked plan. The full working, with a worked example,
            is on the{" "}
            <Link href="/price" className={linkCls}>
              Price
            </Link>{" "}
            page.
          </p>
        </Reveal>
      </section>

      {/* Amenities and Location */}
      <section className="w-full bg-white pb-16 md:pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-6">
              Amenities and Location
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            <Reveal
              variant="up"
              className="bg-[#FAF8F3] rounded-lg p-6 border border-[#e5dcc5] text-[15px] text-gray-700 leading-relaxed"
            >
              <p>
                Every floor plan shares the same{" "}
                <Link href="/amenities" className={linkCls}>
                  amenities
                </Link>
                : the 40,000 sq ft clubhouse with a heated indoor pool, spa, squash court and
                banquet hall, plus the outdoor pool, central lake, floodlit tennis, padel and
                pickleball courts, cricket nets, putting green, riparian trails, sky walk and
                pet park. Full list on the amenities page.
              </p>
            </Reveal>

            <Reveal
              variant="up"
              delay={100}
              className="bg-[#FAF8F3] rounded-lg p-6 border border-[#e5dcc5] text-[15px] text-gray-700 leading-relaxed"
            >
              <p>
                The{" "}
                <Link href="/location-connectivity" className={linkCls}>
                  location
                </Link>{" "}
                is common to all 217 villas as well: Chapparkallu Road, Tarahunise, just off
                NH-44, 15 km and 20 to 25 minutes from Kempegowda International Airport, 2.5 km
                from Stonehill International School. Among luxury villas in North Bangalore, few
                independent villas in North Bangalore of this size sit this close to the
                terminal. Distances and the map are on the{" "}
                <Link href="/location-connectivity" className={linkCls}>
                  location
                </Link>{" "}
                page.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqAccordion
        faqs={floorPlanFaqs}
        title="Frequently Asked Questions"
        eyebrow="FAQ"
        className="bg-[#FAF8F3] border-t border-[#e5dcc5]"
      />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
