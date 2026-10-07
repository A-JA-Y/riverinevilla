import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import EmiCalculator from "@/components/EmiCalculator";
import EnquiryButton from "@/components/EnquiryButton";
import FaqAccordion from "@/components/FaqAccordion";
import ContactBlock from "@/components/ContactBlock";
import Reveal from "@/components/Reveal";
import StickyDownloadButton from "@/components/StickyButton";
import { configurations, breadcrumb, projectSchema } from "@/data/project";

const META_TITLE = "Embassy Riverine Price | 4, 4.5 & 5 BHK Price List 2026";
const META_DESCRIPTION =
  "Embassy Riverine price starts at Rs 14.10 Cr (4 BHK, 4,200 sq ft). 2026 price list, rate per sq ft, taxes, booking amount and payment plan explained.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: "/price" },
  keywords: [
    "Embassy Riverine price",
    "Embassy Riverine price list",
    "Embassy Riverine price per sq ft",
    "Embassy Riverine 4 BHK villa price",
    "Embassy Riverine 4.5 BHK villa price",
    "Embassy Riverine 5 BHK villa price",
    "Embassy Riverine payment plan",
    "Embassy Riverine booking amount",
    "Embassy Riverine launch offer",
    "Embassy Riverine pre launch price",
    "villa price in Bangalore",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/price",
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

/** Doc copy per format; plot, built-up, units and car parks come from data/project.ts. */
const formatCopy: Record<string, { label: string; price: string; body: string }> = {
  "4bhk": {
    label: "Embassy Riverine 4 BHK villa price",
    price: "Rs 14.10 – 14.97 Cr",
    body: "4,200 sq ft built-up on a 2,400 sq ft plot, 3 car parks, 48 units. The entry point to the precinct and the fastest-moving format.",
  },
  "45bhk": {
    label: "Embassy Riverine 4.5 BHK villa price",
    price: "Rs 17.43 – 19.87 Cr",
    body: "5,200 sq ft built-up on a 3,500 sq ft plot, 4 car parks, 137 units. The widest choice of plot positions, which is also why the price band is the widest.",
  },
  "5bhk": {
    label: "Embassy Riverine 5 BHK villa price",
    price: "On request",
    body: "6,800 sq ft built-up on a 5,400 sq ft plot, 6 car parks, 32 units only. Priced plot by plot; ask us for the current working.",
  },
};

const extraCharges = [
  "GST at 5% on the under-construction value",
  "Karnataka stamp duty of around 5–6% on the agreement value",
  "Registration at 1%",
  "Khata and municipal transfer charges",
  "Infrastructure and development charges",
  "Water, electricity and sewerage deposits",
  "Corpus fund and maintenance advance",
  "Clubhouse membership, where applicable",
  "Corner, end-unit, view or facing premium on specific plots",
  "Additional car parking, if you want more than the allotted bays",
];

/** Worked example exactly as given in the price copy (stamp duty at 5.5%). */
const workedExample = [
  { label: "Base price", four: "Rs 14,10,00,000", fourHalf: "Rs 17,43,00,000" },
  { label: "GST at 5%", four: "Rs 70,50,000", fourHalf: "Rs 87,15,000" },
  { label: "Stamp duty at 5.5%", four: "Rs 77,55,000", fourHalf: "Rs 95,86,500" },
  { label: "Registration at 1%", four: "Rs 14,10,000", fourHalf: "Rs 17,43,000" },
];
const workedTotal = {
  label: "Indicative total before deposits",
  four: "Rs 15,72,15,000",
  fourHalf: "Rs 19,43,44,500",
};

const priceBuys: { label: string; body: ReactNode }[] = [
  {
    label: "Location",
    body: (
      <>
        Chapparkallu Road, Tarahunise, just off NH-44; 15 km and 20 to 25 minutes to
        Kempegowda International Airport, 2.5 km to Stonehill International School. See the
        full{" "}
        <Link href="/location-connectivity" className={linkCls}>
          location
        </Link>{" "}
        page.
      </>
    ),
  },
  {
    label: "Master plan",
    body: (
      <>
        an 85-acre township with the villa precinct on about 50 acres, the stream kept open
        as the green spine, 19 acres of reserved open space and 4,000 trees. See the{" "}
        <Link href="/master-plan" className={linkCls}>
          master plan
        </Link>{" "}
        page.
      </>
    ),
  },
  {
    label: "Amenities",
    body: (
      <>
        a 40,000 sq ft clubhouse with a heated indoor pool, spa, squash court and banquet
        hall; outdoor pool, central lake, floodlit tennis, padel and pickleball, cricket nets,
        putting green, riparian trails and a sky walk. See the{" "}
        <Link href="/amenities" className={linkCls}>
          amenities
        </Link>{" "}
        page.
      </>
    ),
  },
  {
    label: "Floor plan",
    body: (
      <>
        independent{" "}
        <Link href="/villas-configurations" className={linkCls}>
          villas
        </Link>{" "}
        with 3.4 m floor-to-floor height, 2.9 m finished ceilings, marble and engineered
        wood flooring, Grohe, Kohler or TOTO fittings. See the{" "}
        <Link href="/floor-plans" className={linkCls}>
          floor plan
        </Link>{" "}
        page.
      </>
    ),
  },
];

const priceFaqs = [
  {
    question: "What is the Embassy Riverine price?",
    answer:
      "Rs 14.10 to 14.97 Cr for the 4 BHK villa, Rs 17.43 to 19.87 Cr for the 4.5 BHK villa, and on request for the 5 BHK villa. All figures are base prices, exclusive of GST, stamp duty, registration and deposits.",
  },
  {
    question: "What is the Embassy Riverine price per sq ft?",
    answer:
      "Roughly Rs 33,100 to Rs 37,700 per sq ft on built-up area, depending on the configuration and plot.",
  },
  {
    question: "Is there an Embassy Riverine villa at Rs 10 or 11 Cr?",
    answer:
      "Not on the current price list. Figures of Rs 10 to 11 Cr on some portals are pre-launch indications that predate the cost sheet. The launch price list starts at Rs 14.10 Cr for the 4 BHK.",
  },
  {
    question: "What is the Embassy Riverine 5 BHK villa price?",
    answer:
      "On request. There are only 32 five-bedroom villas, each on a 5,400 sq ft plot with 6,800 sq ft built-up and 6 car parks, and they are priced individually.",
  },
  {
    question: "What is the booking amount and payment plan?",
    answer:
      "About 10% at booking on a construction-linked plan, with the balance paid against milestones. EOI amounts and allotment windows vary by release.",
  },
  {
    question: "Which charges are extra over the base price?",
    answer:
      "GST at 5%, stamp duty of around 5–6%, registration at 1%, khata and transfer charges, infrastructure and development charges, utility deposits, corpus and maintenance advance, clubhouse membership where applicable, and plot premiums.",
  },
  {
    question: "Is a home loan available for Embassy Riverine?",
    answer:
      "Yes, leading banks and housing finance companies are expected to approve the project. We compare offers across lenders and arrange pre-approval at no cost.",
  },
  {
    question: "Is there an Embassy Riverine launch offer or pre launch price?",
    answer:
      "The pre launch stage is over; the price list on this page is launch pricing. Offers, when the developer runs them, are tied to specific releases. Ask us what is live before you book.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    projectSchema,
    {
      "@type": "FAQPage",
      mainEntity: priceFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Price", path: "/price" },
    ]),
  ],
};

function Dot() {
  return (
    <span
      aria-hidden="true"
      className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C8A24A] flex-shrink-0"
    />
  );
}

export default function PricePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageBanner
        eyebrow="Investment"
        title="Embassy Riverine Price – 4, 4.5 & 5 BHK Villa Price List 2026"
        subtitle={
          <>
            Embassy Riverine price starts at{" "}
            <strong className="text-[#12302a]">Rs 14.10 Cr</strong> for the 4 BHK villa and{" "}
            <strong className="text-[#12302a]">Rs 17.43 Cr</strong> for the 4.5 BHK villa. The
            5 BHK villa price is shared on request. These are indicative launch figures for
            the 217{" "}
            <Link href="/villas-configurations" className={linkCls}>
              villas
            </Link>{" "}
            at Embassy Origins, Tarahunise, and they exclude GST, stamp duty, registration and
            deposits.
          </>
        }
      />

      {/* Intro */}
      <section className="w-full bg-white pt-14 md:pt-16 pb-4 px-6">
        <Reveal variant="up" className="max-w-5xl mx-auto space-y-5">
          <p className="text-[17px] leading-relaxed text-gray-700">
            The developer revises pricing in phases, and the final number for a specific villa
            depends on its plot: corner, end-unit and view premiums apply. Use the price list
            below to shortlist, then ask us for the written cost sheet before you decide.
          </p>
          <div className="pt-2">
            <EnquiryButton>Request the Current Cost Sheet</EnquiryButton>
          </div>
        </Reveal>
      </section>

      {/* Price */}
      <section className="w-full bg-white py-12 md:py-14 px-6" id="price-list">
        <Reveal variant="up" className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-2">Price</h2>
          <h3 className="text-base md:text-lg font-semibold text-[#A8822E] mb-6">
            Embassy Riverine price list (indicative, base price)
          </h3>
          <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm">
            <table className="w-full text-sm text-left min-w-[640px]">
              <caption className="sr-only">
                Embassy Riverine price list (indicative, base price): villa &amp;
                configuration, plot area, built-up area, units, car parks and price
              </caption>
              <thead className="bg-[#F6F2E8] text-[#A8822E] uppercase text-[11px] tracking-[0.12em]">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Villa &amp; configuration
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold">Plot area</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Built-up area</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Units</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Car parks</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                {configurations.map((c) => (
                  <tr
                    key={c.id}
                    className="border-t border-[#e5dcc5] hover:bg-[#FAF8F3] transition-colors"
                  >
                    <th scope="row" className="px-5 py-4 font-semibold text-[#12302a] text-left">
                      {c.type}
                    </th>
                    <td className="px-5 py-4 text-gray-600">{c.plot}</td>
                    <td className="px-5 py-4 text-gray-600">{c.builtUp}</td>
                    <td className="px-5 py-4 text-gray-600">{c.units}</td>
                    <td className="px-5 py-4 text-gray-600">{c.parking}</td>
                    <td className="px-5 py-4 text-[#12302a] font-semibold whitespace-nowrap">
                      {formatCopy[c.id]?.price ?? c.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed italic mt-4">
            Base price only. GST, stamp duty, registration and deposits are extra and worked
            out{" "}
            <a href="#additional-charges" className={linkCls}>
              further down
            </a>
            .
          </p>
        </Reveal>
      </section>

      {/* Price by Villa & Configuration */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="price-by-configuration"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-8">
              Price by Villa &amp; Configuration
            </h2>
          </Reveal>

          <ul className="grid md:grid-cols-3 gap-5">
            {configurations.map((c, i) => {
              const copy = formatCopy[c.id];
              if (!copy) return null;
              return (
                <Reveal
                  as="li"
                  key={c.id}
                  variant="up"
                  delay={i * 90}
                  className="bg-white rounded-xl p-6 border-t-[3px] border-[#C8A24A] shadow-sm"
                >
                  <h3 className="mb-4">
                    <span className="block text-sm font-semibold text-[#12302a] leading-snug">
                      {copy.label}
                      <span className="sr-only">: </span>
                    </span>
                    <span className="block text-2xl md:text-xl lg:text-2xl font-bold text-[#A8822E] mt-1.5">
                      {copy.price}
                    </span>
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{copy.body}</p>
                </Reveal>
              );
            })}
          </ul>

          <Reveal variant="up">
            <p className="text-[15px] text-gray-700 leading-relaxed mt-8">
              The spread inside each band is plot premium. The entry rate for the 4 BHK and
              4.5 BHK is almost identical per sq ft; a river-facing or corner plot is what
              takes the villa &amp; configuration you choose towards the top of its band.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Price per Sq Ft */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="price-per-sq-ft">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <Reveal variant="up" className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-5">
              Embassy Riverine Price per Sq Ft
            </h2>
            <p className="text-[15px] text-gray-700 leading-relaxed">
              On built-up area,{" "}
              <Link href="/about-embassy-riverine" className={linkCls}>
                Embassy Riverine
              </Link>{" "}
              price per sq ft works out to roughly{" "}
              <strong className="text-[#12302a]">Rs 33,100 to Rs 37,700</strong>. That puts it
              at the top of villa price in Bangalore&apos;s northern belt, and above every
              other villa project in the airport corridor on a per sq ft basis. What the
              premium pays for is land per home: fewer than 4.5 villas an acre, 19 acres of
              open space and the stream corridor kept open through the{" "}
              <Link href="/master-plan" className={linkCls}>
                master plan
              </Link>
              . Compare rates only on the same basis; some portals quote saleable area, which
              inflates the size and deflates the rate.
            </p>
          </Reveal>

          <Reveal
            variant="zoom"
            delay={100}
            className="md:col-span-2 bg-[#F6F2E8] border border-[#e0d6bd] rounded-xl p-6 sm:p-8 text-center"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A8822E] mb-3">
              Per sq ft, built-up
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-[#12302a] leading-tight">
              Rs 33,100 – 37,700
            </p>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Fewer than 4.5 villas an acre
            </p>
          </Reveal>
        </div>
      </section>

      {/* Additional Charges */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5] scroll-mt-24"
        id="additional-charges"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-3">
              Additional Charges
            </h2>
            <p className="text-[15px] text-gray-700 leading-relaxed mb-6">
              The base price is not the cheque you write. Budget for these on top:
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
              {extraCharges.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-gray-700 text-[15px]">
                  <Dot />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="up" className="mt-12">
            <h3 className="text-xl md:text-2xl font-bold text-[#12302a] mb-5">
              Worked example at Karnataka rates (stamp duty taken at 5.5%)
            </h3>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm bg-white">
              <table className="w-full text-sm text-left min-w-[520px]">
                <caption className="sr-only">
                  Worked example of the all-in cost of a 4 BHK at Rs 14.10 Cr and a 4.5 BHK at
                  Rs 17.43 Cr at Karnataka rates
                </caption>
                <thead className="bg-[#F6F2E8] text-[#A8822E] uppercase text-[11px] tracking-[0.12em]">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-semibold">
                      <span className="sr-only">Component</span>
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-right">
                      4 BHK at Rs 14.10 Cr
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold text-right">
                      4.5 BHK at Rs 17.43 Cr
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {workedExample.map((row) => (
                    <tr key={row.label} className="border-t border-[#e5dcc5]">
                      <th
                        scope="row"
                        className="px-5 py-3.5 text-left font-normal text-gray-700"
                      >
                        {row.label}
                      </th>
                      <td className="px-5 py-3.5 text-right whitespace-nowrap tabular-nums text-gray-600">
                        {row.four}
                      </td>
                      <td className="px-5 py-3.5 text-right whitespace-nowrap tabular-nums text-gray-600">
                        {row.fourHalf}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-[#e5dcc5] bg-[#F6F2E8]">
                    <th scope="row" className="px-5 py-4 text-left font-bold text-[#12302a]">
                      {workedTotal.label}
                    </th>
                    <td className="px-5 py-4 text-right whitespace-nowrap tabular-nums font-bold text-[#12302a]">
                      {workedTotal.four}
                    </td>
                    <td className="px-5 py-4 text-right whitespace-nowrap tabular-nums font-bold text-[#12302a]">
                      {workedTotal.fourHalf}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <p className="text-sm text-gray-600 italic mt-4 leading-relaxed">
              Khata, infrastructure, corpus and maintenance deposits are charged separately
              under the agreement and are not in the table. Treat these as a guide; the cost
              sheet from the sales office is the figure that counts.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Payment Plan */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="payment-plan">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12 items-start">
          <Reveal
            variant="up"
            className="md:col-span-3 space-y-4 text-[15px] text-gray-700 leading-relaxed"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-2">
              Payment Plan
            </h2>
            <p>
              The Embassy Riverine payment plan is construction-linked. The{" "}
              <Link href="/about-embassy-riverine" className={linkCls}>
                Embassy Riverine
              </Link>{" "}
              booking amount is{" "}
              <strong className="text-[#12302a]">about 10% of the villa price</strong>, with
              the balance released against construction milestones up to handover. EOI amounts
              and priority-allotment windows change with each release, so ask what is open now.
            </p>
            <p>
              There is no separate pre launch price any more: the project is RERA-registered
              and launched, and the price list on this page is the launch pricing. Launch
              offers, where the developer runs them, are release-specific and usually tied to
              the booking window; we will tell you plainly whether one is running.
            </p>
            <div className="pt-3">
              <EnquiryButton>Get the Payment Schedule</EnquiryButton>
            </div>
          </Reveal>

          <Reveal
            variant="up"
            delay={100}
            className="md:col-span-2 bg-[#FAF8F3] border-l-[3px] border-[#C8A24A] rounded-r-lg p-6"
          >
            <p className="text-[15px] text-gray-700 leading-relaxed">
              <strong className="text-[#12302a]">Possession:</strong> the RERA-filed
              completion date is{" "}
              <strong className="text-[#12302a]">30 September 2032</strong>. The developer has
              indicated phased handover from 2030. Plan your payment schedule around the RERA
              date, which is the enforceable one.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Home Loan and EMI */}
      <section
        className="w-full bg-white pb-16 md:pb-20 px-6"
        id="home-loan"
      >
        <div className="max-w-5xl mx-auto border-t border-[#e5dcc5] pt-16 md:pt-20">
          <Reveal variant="up" className="space-y-4 text-[15px] text-gray-700 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-2">
              Home Loan and EMI
            </h2>
            <p>
              Leading banks and housing finance companies are expected to approve{" "}
              <Link href="/about-embassy-riverine" className={linkCls}>
                Embassy Riverine
              </Link>{" "}
              for home loans. We arrange pre-approval and compare offers across lenders at no
              cost to you, which matters at this ticket size: a quarter-point on a Rs 10 Cr
              loan is real money over 20 years.
            </p>
            <div className="bg-[#FAF8F3] border border-[#e5dcc5] rounded-lg p-5 sm:p-6">
              <p>
                For a rough sense of scale: on a 4 BHK at Rs 14.10 Cr with 25% down, a loan of
                about Rs 10.58 Cr at 8.5% over 20 years comes to an EMI in the region of{" "}
                <strong className="text-[#12302a]">Rs 9.2 lakh a month</strong>. Taxes, stamp
                duty and deposits are over and above this and are paid upfront, not financed.
                Your lender sets the actual rate and tenure.
              </p>
            </div>
            <div className="pt-3">
              <a
                href="#emi"
                className="inline-flex items-center justify-center gap-2 border border-[#C8A24A] text-[#12302a] hover:bg-[#C8A24A] hover:text-white text-xs font-bold uppercase tracking-[0.16em] px-7 py-4 rounded transition-colors"
              >
                Use the EMI Calculator
                <svg width="12" height="12" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                  <path
                    d="M5.5 1.5v8M2 6l3.5 3.5L9 6"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <EmiCalculator />

      {/* What the Price Buys */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="what-the-price-buys">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-3">
              What the Price Buys
            </h2>
            <p className="text-[15px] text-gray-700 leading-relaxed mb-8">
              A price page only makes sense next to what it pays for. The short version:
            </p>
          </Reveal>

          <ul className="grid sm:grid-cols-2 gap-5">
            {priceBuys.map((item, i) => (
              <Reveal
                as="li"
                key={item.label}
                variant="up"
                delay={i * 70}
                className="bg-[#FAF8F3] rounded-lg p-6 border-l-[3px] border-[#C8A24A] text-gray-700 text-[15px] leading-relaxed"
              >
                <strong className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#A8822E] mb-2">
                  {item.label}:
                </strong>
                {item.body}
              </Reveal>
            ))}
          </ul>

          <Reveal variant="up" className="mt-10">
            <p className="text-lg md:text-xl font-semibold text-[#12302a] leading-snug text-center max-w-3xl mx-auto">
              At Rs 33,100 to 37,700 per sq ft you are not paying for the tallest clubhouse in
              North Bangalore. You are paying for the lowest density.
            </p>
          </Reveal>
        </div>
      </section>

      <FaqAccordion
        faqs={priceFaqs}
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
            the live price list and cost sheet in writing, the current inventory by villa
            &amp; configuration, the floor plan and{" "}
            <Link href="/master-plan" className={linkCls}>
              master plan
            </Link>{" "}
            set, a site visit on any day of the week with pickup from Hebbal or Yelahanka,
            home-loan comparison across lenders, and NRI documentation and power of attorney
            support.
          </p>
        }
      />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
