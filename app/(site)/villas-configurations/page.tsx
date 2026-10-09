import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import EnquiryButton from "@/components/EnquiryButton";
import FaqAccordion from "@/components/FaqAccordion";
import ContactBlock from "@/components/ContactBlock";
import Reveal from "@/components/Reveal";
import StickyDownloadButton from "@/components/StickyButton";
import { configurations, breadcrumb, projectSchema } from "@/data/project";
import { villaProductSchemas } from "@/data/seoSchema";

import plan4 from "@/assets/plan-4bhk.webp";
import plan45 from "@/assets/plan-45bhk.webp";
import plan5 from "@/assets/plan-5bhk.webp";
import villaExterior from "@/assets/villa-exterior-2.webp";
import bedroom from "@/assets/spec-bedroom.webp";
import dining from "@/assets/spec-dining.webp";
import bathroom from "@/assets/spec-bathroom.webp";

const META_TITLE = "Embassy Riverine Villa Sizes | 4, 4.5 & 5 BHK Configurations";
const META_DESCRIPTION =
  "Embassy Riverine villa sizes: 4 BHK 4,200 sq ft, 4.5 BHK 5,200 sq ft, 5 BHK 6,800 sq ft on 2,400 to 5,400 sq ft plots. 217 independent villas, full spec.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: "/villas-configurations" },
  keywords: [
    "Embassy Riverine villa sizes",
    "Embassy Riverine villas and configurations",
    "Embassy Riverine 4 BHK villa price",
    "Embassy Riverine 4.5 BHK villa price",
    "Embassy Riverine 5 BHK villa price",
    "4 BHK villa for sale near Bangalore airport",
    "5 BHK villa for sale in North Bangalore",
    "independent villas in North Bangalore",
    "independent villas for sale near Kempegowda airport",
    "villas for sale in North Bangalore",
    "luxury villas in Bangalore for sale",
    "ultra luxury villas in Bangalore",
    "riverside villas in Bangalore",
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
    url: "/villas-configurations",
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

const planImages: Record<string, typeof plan4> = {
  "4bhk": plan4,
  "45bhk": plan45,
  "5bhk": plan5,
};

/** Doc copy per format; plot, built-up, units and car parks come from data/project.ts. */
const formatCopy: Record<
  string,
  { price: string; priceLine: string; body: string; cta: string }
> = {
  "4bhk": {
    price: "Rs 14.10 – 14.97 Cr",
    priceLine: "Embassy Riverine 4 BHK villa price Rs 14.10 – 14.97 Cr",
    body: "The entry format and the only one under 5,000 sq ft. Four bedrooms, a study, a private deck and three car parks. For a family moving out of a 3,000 sq ft apartment, it is the step into a township and a 40,000 sq ft clubhouse without the 5,000 sq ft outlay. Most searches for a 4 BHK villa for sale near Bangalore airport end at this configuration, and with 48 units it is also the first to thin out.",
    cta: "Check 4 BHK Availability",
  },
  "45bhk": {
    price: "Rs 17.43 – 19.87 Cr",
    priceLine: "Embassy Riverine 4.5 BHK villa price Rs 17.43 – 19.87 Cr",
    body: "The format most of the precinct is built on, so the choice of plot is widest here. Four full bedrooms plus a half suite that becomes a study, home office, guest room or puja room, a family lounge upstairs, and a garden deck on a 3,500 sq ft plot with room for a plunge pool. Four car parks. If the 4 BHK feels tight and the 5 BHK is more house than you will use, this is where buyers settle.",
    cta: "Check 4.5 BHK Availability",
  },
  "5bhk": {
    price: "On request",
    priceLine: "Embassy Riverine 5 BHK villa price on request",
    body: "Thirty-two homes on the largest plots in the precinct, with a double-height foyer, a pool deck and six car parks. Built for three generations under one roof, or for a household that hosts. A 5 BHK villa for sale in North Bangalore at this size exists in very few projects, and here there are 32 in total. It is the release that closes first; ask early.",
    cta: "Check 5 BHK Availability",
  },
};

const fitGuide = [
  {
    who: "Family of four, first villa",
    pick: "4 BHK",
    why: "Four bedrooms and a study cover the household, and the ticket is the lowest in the precinct.",
  },
  {
    who: "Working couple with parents who visit, or two home offices",
    pick: "4.5 BHK",
    why: "The half suite is the whole point.",
  },
  {
    who: "Joint family, staff, three or more cars",
    pick: "5 BHK",
    why: "Six car parks and 6,800 sq ft are not excess here; they are the brief.",
  },
  {
    who: "Holding for land value",
    pick: "4.5 BHK",
    why: "The largest format count means the broadest set of comparables when you sell.",
  },
  {
    who: "Want the water",
    pick: null,
    why: "Ask which plots in each format front the stream corridor or the lake. Frontage sets the premium, not the format.",
  },
];

const sizeTerms = [
  {
    term: "Plot area",
    body: "is the land registered in your name: 2,400, 3,500 or 5,400 sq ft.",
  },
  {
    term: "Built-up area",
    body: "is the constructed villa: 4,200, 5,200 or 6,800 sq ft. These are the Embassy Riverine villa sizes in the brochure and on this page.",
  },
  {
    term: "Carpet area",
    body: "under RERA is smaller than built-up and is the figure that goes into the agreement to sell. Ask us for it per villa & configuration before you compare with another project.",
  },
];

const specs = [
  {
    title: "Structure",
    body: "RCC frame with shear walls to IS code; 3.4 m floor-to-floor",
  },
  {
    title: "Flooring",
    body: "Premium marble in living, dining and formal areas; engineered wood in bedrooms over an acoustic underlay; anti-skid tiles in balconies and wet areas",
  },
  {
    title: "Doors and windows",
    body: "2.4 m doors with oak veneer; double-glazed panoramic sliding systems in heat-strengthened laminated glass; UPVC windows elsewhere",
  },
  {
    title: "Kitchen",
    body: "Stone counter with under-mount sink, tiled dado, points for chimney, hob, purifier and dishwasher",
  },
  {
    title: "Electrical",
    body: "Concealed copper wiring, modular switches, backup for essential circuits, EV-ready parking, home automation provision",
  },
  {
    title: "Bathrooms",
    body: "Grohe, Kohler or TOTO fittings or equivalent, rain shower in the master bath, solar-assisted hot water",
  },
];

/** Representative interiors (see the footer disclaimer), not the actual villas. */
const specImages = [
  { src: dining, alt: "Representative dining area with marble flooring" },
  { src: bedroom, alt: "Representative bedroom interior" },
  { src: bathroom, alt: "Representative bathroom with rain shower" },
];

const villaFaqs = [
  {
    question: "What configurations are available in Embassy Riverine?",
    answer:
      "Three: 4 BHK, 4.5 BHK and 5 BHK independent villas. There is no 3 BHK or smaller villa; the apartments at Embassy South Reserve are the smaller option inside the township.",
  },
  {
    question: "What are the Embassy Riverine villa sizes?",
    answer:
      "4 BHK: 4,200 sq ft built-up on a 2,400 sq ft plot. 4.5 BHK: 5,200 sq ft on 3,500 sq ft. 5 BHK: 6,800 sq ft on 5,400 sq ft. RERA carpet areas are smaller and are shared on request.",
  },
  {
    question: "How many villas are there, and how many of each type?",
    answer:
      "217 in total: 48 four-bedroom, 137 four-and-a-half-bedroom and 32 five-bedroom villas.",
  },
  {
    question: "Are these independent villas or villaments?",
    answer:
      "Independent villas. Each home sits on its own registered plot with no shared walls, its own car parks and its own garden.",
  },
  {
    question: "How many car parks does each villa get?",
    answer:
      "Three with the 4 BHK, four with the 4.5 BHK and six with the 5 BHK. Additional bays, where available, are charged separately.",
  },
  {
    question: "What does each configuration cost?",
    answer:
      "Rs 14.10 to 14.97 Cr for the 4 BHK, Rs 17.43 to 19.87 Cr for the 4.5 BHK, and on request for the 5 BHK, all exclusive of taxes and deposits. See the Price page for the full working.",
  },
  {
    question: "Is Embassy Riverine Vastu compliant?",
    answer:
      "The brochure does not publish Vastu details, and plot orientation varies across the precinct. Ask for the facing and entry direction of the specific plot you are considering.",
  },
  {
    question: "How do I buy a villa in Embassy Riverine?",
    answer:
      "Shortlist a villa & configuration, take the written cost sheet, visit the site, then block the plot with the booking amount. We handle the cost sheet, the site visit and the home-loan comparison.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    projectSchema,
    ...villaProductSchemas,
    {
      "@type": "FAQPage",
      mainEntity: villaFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Villas & Configurations", path: "/villas-configurations" },
    ]),
  ],
};

export default function VillasConfigurationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageBanner
        eyebrow="Residences"
        title="Embassy Riverine Villas & Configurations – 4, 4.5 & 5 BHK Villa Sizes"
        subtitle="Embassy Riverine has 217 independent villas in three formats: 4 BHK on 2,400 sq ft plots, 4.5 BHK on 3,500 sq ft plots and 5 BHK on 5,400 sq ft plots. No towers, no shared walls, no row houses. Every home stands on its own registered plot with its own car parks and garden, inside the 85-acre Embassy Origins township at Tarahunise, 15 km from Kempegowda International Airport."
      />

      {/* Intro */}
      <section className="w-full bg-white pt-14 md:pt-16 pb-4 px-6">
        <Reveal variant="up" className="max-w-5xl mx-auto space-y-5">
          <p className="text-[17px] leading-relaxed text-gray-700">
            This page covers each villa &amp; configuration, the Embassy Riverine villa sizes,
            what is fixed and what varies between plots, and which format fits which
            household. Price, floor plan, master plan, amenities and location have their own
            pages; the short version of each is further down.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
            <EnquiryButton>Get Availability by Configuration</EnquiryButton>
            <nav aria-label="Jump to a configuration" className="flex flex-wrap gap-2">
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

      {/* Villa & Configuration table */}
      <section className="w-full bg-white py-12 md:py-14 px-6" id="configurations">
        <Reveal variant="up" className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-6">
            Villa &amp; Configuration
          </h2>
          <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm">
            <table className="w-full text-sm text-left min-w-[640px]">
              <caption className="sr-only">
                Embassy Riverine villa types with plot area, built-up area, units, car parks
                and indicative price
              </caption>
              <thead className="bg-[#F6F2E8] text-[#A8822E] uppercase text-[11px] tracking-[0.12em]">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">Villa type</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Plot area</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Built-up area</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Units</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Car parks</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Indicative price</th>
                </tr>
              </thead>
              <tbody>
                {configurations.map((c) => (
                  <tr
                    key={c.id}
                    className="border-t border-[#e5dcc5] hover:bg-[#FAF8F3] transition-colors"
                  >
                    <th scope="row" className="px-5 py-4 font-semibold text-[#12302a] text-left">
                      <a href={`#${c.id}`} className="hover:text-[#A8822E] transition-colors">
                        {c.type}
                      </a>
                    </th>
                    <td className="px-5 py-4 text-gray-600">{c.plot}</td>
                    <td className="px-5 py-4 text-gray-600">{c.builtUp}</td>
                    <td className="px-5 py-4 text-gray-600">{c.units}</td>
                    <td className="px-5 py-4 text-gray-600">{c.parking}</td>
                    <td className="px-5 py-4 text-[#12302a] font-semibold whitespace-nowrap">
                      {formatCopy[c.id].price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[15px] text-gray-700 leading-relaxed mt-5">
            <strong className="text-[#12302a]">Fixed per format:</strong> plot area, built-up
            area, car parks and specification.{" "}
            <strong className="text-[#12302a]">Variable:</strong> where the plot sits.
            Stream-facing, lake-facing, corner and internal plots carry different premiums,
            which is why each{" "}
            <Link href="/price" className={linkCls}>
              price
            </Link>{" "}
            is a band and not a number. The villa sizes do not change from plot to plot; the
            view and the price do.
          </p>
        </Reveal>
      </section>

      {/* 4 / 4.5 / 5 BHK */}
      <section className="w-full bg-white pt-4 pb-16 md:pb-20 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          {configurations.map((c, i) => {
            const copy = formatCopy[c.id];
            return (
              <Reveal
                key={c.id}
                as="article"
                id={c.id}
                variant="up"
                aria-labelledby={`${c.id}-title`}
                className="scroll-mt-28 grid md:grid-cols-2 bg-[#FAF8F3] rounded-xl border border-[#e5dcc5] overflow-hidden"
              >
                <div
                  className={`relative aspect-[1400/1092] md:aspect-auto md:h-full md:min-h-[360px] bg-[#F6F2E8] ${
                    i % 2 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={planImages[c.id]}
                    alt={`${c.type} layout at Embassy Riverine — ${c.plot} plot, ${c.builtUp} built-up, ${c.parking} car parks`}
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-contain"
                  />
                </div>

                <div className="p-6 md:p-8">
                  <h2
                    id={`${c.id}-title`}
                    className="text-2xl md:text-[1.7rem] font-bold text-[#12302a] mb-4"
                  >
                    {c.type}
                  </h2>

                  <dl className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-3">
                    {[
                      ["Units", String(c.units)],
                      ["Plot", c.plot],
                      ["Built-up", c.builtUp],
                      ["Car parks", String(c.parking)],
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
                  <p className="text-[13px] font-semibold text-[#A8822E] mb-4">{copy.priceLine}</p>

                  <p className="text-gray-700 text-[15px] leading-relaxed mb-6">{copy.body}</p>

                  <EnquiryButton variant="outline">{copy.cta}</EnquiryButton>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Which Configuration Fits You */}
      <section className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-8">
              Which Configuration Fits You
            </h2>
          </Reveal>

          <ul className="grid sm:grid-cols-2 gap-5">
            {fitGuide.map((g, i) => (
              <Reveal
                as="li"
                key={g.who}
                variant="up"
                delay={i * 70}
                className={`bg-white rounded-lg p-6 border-l-[3px] border-[#C8A24A] shadow-sm ${
                  i === fitGuide.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <p className="text-base font-bold text-[#12302a] mb-2">{g.who}</p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {g.pick ? (
                    <>
                      <strong className="text-[#A8822E]">{g.pick}.</strong>{" "}
                    </>
                  ) : null}
                  {g.why}
                </p>
              </Reveal>
            ))}
          </ul>

          <Reveal variant="up">
            <p className="text-[15px] text-gray-700 leading-relaxed mt-8">
              If you are shortlisting luxury villas in Bangalore for sale by plot size rather
              than bedroom count, start with the plot column in the{" "}
              <a href="#configurations" className={linkCls}>
                table above
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Villa Sizes Explained */}
      <section className="w-full bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-3">
              Villa Sizes Explained
            </h2>
            <p className="text-[15px] text-gray-700 leading-relaxed mb-8">
              Three numbers matter, and portals mix them up.
            </p>
          </Reveal>

          <ul className="grid md:grid-cols-3 gap-5">
            {sizeTerms.map((t, i) => (
              <Reveal
                as="li"
                key={t.term}
                variant="up"
                delay={i * 90}
                className="bg-[#FAF8F3] rounded-lg p-6 border-t-[3px] border-[#C8A24A] text-gray-700 text-[15px] leading-relaxed"
              >
                <strong className="text-[#12302a]">{t.term}</strong> {t.body}
              </Reveal>
            ))}
          </ul>

          <Reveal variant="up" className="mt-8 space-y-4 text-[15px] text-gray-700 leading-relaxed">
            <p>
              Some portals quote saleable area instead, which comes out roughly 50 to 65 sq ft
              higher per villa. Compare on one basis only.
            </p>
            <p>
              Every villa has a <strong className="text-[#12302a]">3.4 m floor-to-floor</strong>{" "}
              height, with finished ceilings close to 2.9 m in the main rooms. Across the
              precinct that is 217 villas on about 50 acres, under 4.5 homes to the acre.
              Among villas for sale in North Bangalore, Riverine is unusual for how much of
              the{" "}
              <Link href="/price" className={linkCls}>
                price
              </Link>{" "}
              is land.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Independent Villas, Not Villaments */}
      <section className="w-full bg-[#F6F2E8] py-16 md:py-20 px-6 border-y border-[#e0d6bd]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <Reveal
            variant="up"
            className="md:col-span-3 space-y-4 text-[15px] text-gray-700 leading-relaxed"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-2">
              Independent Villas, Not Villaments
            </h2>
            <p>
              Among independent villas in North Bangalore, many launches in the airport
              corridor are row villas on compact plots. Embassy Riverine starts at 2,400 sq ft
              of land and goes to 5,400, inside an 85-acre township, which is rare this close
              to the terminal. For anyone searching independent villas for sale near
              Kempegowda airport, that plot size is the number to check first.
            </p>
            <p>
              It is also sold as riverside villas in Bangalore. In practice that means a
              natural stream corridor kept open through the precinct and a central lake at its
              heart, not a river bank; worth seeing on a site visit before you pay for
              frontage. At Rs 14 to 20 Cr the homes sit squarely among ultra luxury villas in
              Bangalore, and the specification below is written to match.
            </p>
            <p>
              Every Embassy Riverine villa for sale today is a primary allotment from the
              developer. The project registered with RERA in September 2026, so there is no
              Embassy Riverine resale inventory yet.
            </p>
          </Reveal>

          <Reveal variant="zoom" className="md:col-span-2">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-[400px] rounded-xl overflow-hidden border border-[#e0d6bd] shadow-sm">
              <Image
                src={villaExterior}
                alt="Embassy Riverine independent villa with its own car parks and garden"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Specifications */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="specifications">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-3">
              Specifications
            </h2>
            <p className="text-[15px] text-gray-700 leading-relaxed mb-7">
              Common to every villa &amp; configuration:
            </p>
          </Reveal>

          <dl className="grid sm:grid-cols-2 gap-5">
            {specs.map((s, i) => (
              <Reveal
                key={s.title}
                variant="up"
                delay={i * 70}
                className="bg-[#FAF8F3] rounded-lg p-5 border-l-[3px] border-[#C8A24A]"
              >
                <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#A8822E] mb-2">
                  {s.title}
                </dt>
                <dd className="text-gray-700 text-sm leading-relaxed">{s.body}</dd>
              </Reveal>
            ))}
          </dl>

          <Reveal variant="up" className="grid grid-cols-3 gap-2 sm:gap-4 mt-8">
            {specImages.map((img) => (
              <div
                key={img.alt}
                className="relative h-24 sm:h-40 md:h-48 rounded-lg overflow-hidden border border-[#e5dcc5]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 33vw, 320px"
                  className="object-cover"
                />
              </div>
            ))}
          </Reveal>

          <Reveal variant="up">
            <p className="text-sm text-gray-600 italic leading-relaxed mt-6">
              Specifications are indicative. The annexure to your agreement to sell is the
              binding document.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Price, Floor Plan and Master Plan */}
      <section className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]">
        <Reveal
          variant="up"
          className="max-w-5xl mx-auto space-y-4 text-[15px] text-gray-700 leading-relaxed"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-2">
            Price, Floor Plan and Master Plan
          </h2>
          <p>
            <Link href="/about-embassy-riverine" className={linkCls}>
              Embassy Riverine
            </Link>{" "}
            price runs from <strong className="text-[#12302a]">Rs 14.10 Cr</strong> (4 BHK) and{" "}
            <strong className="text-[#12302a]">Rs 17.43 Cr</strong> (4.5 BHK), with the 5 BHK on
            request, at roughly Rs 33,100 to 37,700 per sq ft on built-up area. Taxes,
            registration and deposits are extra, and the booking amount is about 10% on a
            construction-linked plan. The full breakdown, with a worked example, is on the{" "}
            <Link href="/price" className={linkCls}>
              Price
            </Link>{" "}
            page.
          </p>
          <p>
            Each format has its own{" "}
            <Link href="/floor-plans" className={linkCls}>
              floor plan
            </Link>
            : 4 BHK, 4.5 BHK and 5 BHK layouts are fixed, with plot position the only
            variable. The{" "}
            <Link href="/master-plan" className={linkCls}>
              master plan
            </Link>{" "}
            shows where each cluster sits against the stream corridor, the central lake and
            the clubhouse. Both sets go out on WhatsApp the same day you ask.
          </p>
          <div className="pt-3">
            <EnquiryButton>Request Floor Plans and the Master Plan</EnquiryButton>
          </div>
        </Reveal>
      </section>

      {/* Amenities and Location */}
      <section className="w-full bg-white py-16 md:py-20 px-6">
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
                Every villa &amp; configuration shares the same{" "}
                <Link href="/amenities" className={linkCls}>
                  amenities
                </Link>
                : the 40,000 sq ft clubhouse with heated indoor pool, spa, squash court and
                banquet hall, plus the outdoor pool, central lake, floodlit tennis, padel and
                pickleball courts, cricket nets, putting green, riparian trails, sky walk and
                pet park. Full list on the{" "}
                <Link href="/amenities" className={linkCls}>
                  amenities
                </Link>{" "}
                page.
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
                is the same for all 217 homes too:{" "}
                <Link href="/about-embassy-riverine" className={linkCls}>
                  Embassy Riverine
                </Link>{" "}
                villas off Airport Road (NH-44) at Chapparkallu Road, Tarahunise, 15 km and 20
                to 25 minutes from the airport, 2.5 km from Stonehill International School.
                Distances and the map are on the{" "}
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
        faqs={villaFaqs}
        title="Frequently Asked Questions"
        eyebrow="FAQ"
        className="bg-[#FAF8F3] border-t border-[#e5dcc5]"
      />

      <ContactBlock
        className="bg-white border-t border-[#e5dcc5]"
        intro={
          <p>
            Real Revenue is an authorised channel partner for{" "}
            <Link href="/about-embassy-riverine" className={linkCls}>
              Embassy Riverine
            </Link>
            . Contact us for live availability by villa &amp; configuration, the RERA carpet
            areas, the{" "}
            <Link href="/floor-plans" className={linkCls}>
              floor plan
            </Link>{" "}
            and{" "}
            <Link href="/master-plan" className={linkCls}>
              master plan
            </Link>{" "}
            set, the cost sheet in writing, a site visit any day of the week with pickup from
            Hebbal or Yelahanka, home-loan comparison across lenders, and NRI documentation
            and power of attorney support.
          </p>
        }
        cta="Book a Site Visit"
      />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
