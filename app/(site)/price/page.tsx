import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import EmiCalculator from "@/components/EmiCalculator";
import ReasonsToInvest from "@/components/ReasonToInvest";
import CtaBand from "@/components/CtaBand";
import FaqAccordion from "@/components/FaqAccordion";
import Reveal from "@/components/Reveal";
import StickyDownloadButton from "@/components/StickyButton";
import {
  configurations,
  workingRate,
  additionalCharges,
  faqs,
  breadcrumb,
  projectSchema,
} from "@/data/project";

export const metadata: Metadata = {
  title: "Embassy Riverine Price List 2026 | 4, 4.5 & 5 BHK Villa Prices",
  description:
    "Embassy Riverine price starts at Rs 14.10 Cr for the 4 BHK and Rs 17.43 Cr for the 4.5 BHK — roughly Rs 33,100 to Rs 37,700 per sq ft built-up. Full cost breakdown.",
  alternates: { canonical: "/price" },
  keywords: [
    "Embassy Riverine price",
    "Embassy Riverine price list",
    "Embassy Riverine villa cost",
    "Embassy Origins price",
  ],
};

/** Worked example on the entry 4 BHK. */
const BASE = 141000000;
const GST = BASE * 0.05;
const STAMP = BASE * 0.055;
const REG = BASE * 0.01;
const TOTAL = BASE + GST + STAMP + REG;

const inr = (n: number) =>
  `Rs ${n.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

const priceFaqs = faqs.filter((f) =>
  /price|possession|home loan|configurations/i.test(f.question)
);

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

export default function PricePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageBanner
        eyebrow="Investment"
        title="Embassy Riverine Price List 2026"
        subtitle="Indicative launch pricing for the 217 villas at Embassy Origins, Tarahunise — exclusive of GST, stamp duty, registration and statutory charges."
      />

      <section className="w-full bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-14">
          {/* Intro */}
          <Reveal variant="up" className="space-y-5">
            <p className="text-[17px] leading-relaxed text-gray-700">
              Embassy Riverine villa prices start at{" "}
              <strong className="text-[#12302a]">Rs 14.10 crore</strong> for the 4 BHK and{" "}
              <strong className="text-[#12302a]">Rs 17.43 crore</strong> for the 4.5 BHK.
              The 5 BHK is available on request. That works out to {workingRate}.
            </p>
            <p className="text-[15px] leading-relaxed text-gray-600">
              Prices are revised periodically by the developer, so the figures below are a
              guide for shortlisting. The confirmed price for a specific villa depends on
              its position within the precinct — corner, view and preferential-location
              premiums apply.
            </p>
            <Link href="/contact-us" className="inline-block text-[#A8822E] font-semibold link-wipe">
              Request the current price sheet →
            </Link>
          </Reveal>

          {/* Price table */}
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-6">
              Price &amp; Configuration Table
            </h2>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm mb-4">
              <table className="w-full text-sm text-left min-w-[640px]">
                <thead className="bg-[#F6F2E8] text-[#A8822E] uppercase text-[11px] tracking-[0.12em]">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-semibold">Type</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Plot Area</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Built-Up Area</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Units</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Car Parks</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Indicative Price</th>
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
                        {c.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed italic">
              Working rate: {workingRate}. Prices are indicative launch pricing and subject
              to revision by the developer without notice.
            </p>
          </Reveal>

          {/* Worked example */}
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-3">
              What a Rs 14.10 crore villa actually costs
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
              The headline price is not the cheque you write. Worked through on the entry 4
              BHK, at Karnataka rates:
            </p>

            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm">
              <table className="w-full text-sm text-left min-w-[480px]">
                <tbody>
                  {[
                    ["Base consideration (4 BHK, 4,200 sq ft)", inr(BASE), false],
                    ["GST at 5% on under-construction consideration", inr(GST), false],
                    ["Stamp duty at approximately 5.5%", inr(STAMP), false],
                    ["Registration at 1%", inr(REG), false],
                    ["Indicative all-in, before deposits", inr(TOTAL), true],
                  ].map(([label, value, strong]) => (
                    <tr
                      key={label as string}
                      className={`border-t border-[#e5dcc5] first:border-t-0 ${
                        strong ? "bg-[#F6F2E8]" : ""
                      }`}
                    >
                      <th
                        scope="row"
                        className={`px-5 py-3.5 text-left font-normal ${
                          strong ? "font-bold text-[#12302a]" : "text-gray-700"
                        }`}
                      >
                        {label as string}
                      </th>
                      <td
                        className={`px-5 py-3.5 text-right whitespace-nowrap tabular-nums ${
                          strong ? "font-bold text-[#12302a]" : "text-gray-600"
                        }`}
                      >
                        {value as string}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 italic mt-3 leading-relaxed">
              Khata, infrastructure, corpus and maintenance deposits are charged separately
              as per the agreement, and are not included above. Stamp duty in Karnataka runs
              at approximately 5% to 6% depending on the instrument — 5.5% used here for
              illustration.
            </p>
          </Reveal>

          {/* Additional charges + payment plan */}
          <div className="grid md:grid-cols-2 gap-10">
            <Reveal variant="up">
              <h2 className="text-xl md:text-2xl font-bold text-[#12302a] mb-4">
                Additional charges, as applicable
              </h2>
              <ul className="space-y-2.5">
                {additionalCharges.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-gray-700 text-sm">
                    <span className="text-[#C8A24A] mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C8A24A] flex-shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="up" delay={100}>
              <h2 className="text-xl md:text-2xl font-bold text-[#12302a] mb-4">
                Payment structure
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                A construction-linked plan with approximately{" "}
                <strong className="text-[#12302a]">10% payable on booking</strong>.
                Expression of Interest amounts and priority-allotment windows vary by
                release.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Home loans are expected to be approved by leading banks and housing finance
                companies. We can arrange pre-approval and compare offers across lenders at
                no cost to you — speak to the team for the current slab.
              </p>
              <div className="mt-5 bg-[#FAF8F3] border-l-[3px] border-[#C8A24A] p-4 rounded-r">
                <p className="text-[13px] text-gray-700 leading-relaxed">
                  <strong className="text-[#12302a]">Note:</strong> the RERA-filed
                  completion date is 30 September 2032, with phased handover indicated from
                  2030. The RERA date is the contractually enforceable one.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <EmiCalculator />
      <CtaBand variant="scarcity" />
      <ReasonsToInvest />
      <FaqAccordion faqs={priceFaqs} title="Pricing Questions" eyebrow="FAQ" className="bg-white" />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
