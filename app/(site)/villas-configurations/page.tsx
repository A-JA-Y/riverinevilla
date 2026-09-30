import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import ReasonsToInvest from "@/components/ReasonToInvest";
import VillaFeatures from "@/components/PremiumInventory";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import StickyDownloadButton from "@/components/StickyButton";
import {
  configurations,
  specifications,
  workingRate,
  additionalCharges,
  breadcrumb,
  projectSchema,
} from "@/data/project";

import plan4 from "@/assets/plan-4bhk.webp";
import plan45 from "@/assets/plan-45bhk.webp";
import plan5 from "@/assets/plan-5bhk.webp";

export const metadata: Metadata = {
  title: "Embassy Riverine Villas & Configurations | 4, 4.5 & 5 BHK",
  description:
    "Three villa formats at Embassy Riverine — 4 BHK (48 units), 4.5 BHK (137 units) and 5 BHK (32 units), from 4,200 to 6,800 sq ft built-up. Full specification.",
  alternates: { canonical: "/villas-configurations" },
  keywords: [
    "Embassy Riverine villas",
    "Embassy Riverine 5 BHK",
    "Embassy Riverine configurations",
    "5 BHK villas Yelahanka",
  ],
};

const planImages: Record<string, typeof plan4> = {
  "4bhk": plan4,
  "45bhk": plan45,
  "5bhk": plan5,
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    projectSchema,
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
        title="Villas & Configurations"
        subtitle="217 villas in three formats. No towers, no shared walls — every home at Embassy Riverine is an independent villa on its own plot."
      />

      <section className="w-full bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-14">
          {/* Comparison table */}
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-6">
              The three formats, compared
            </h2>
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm">
              <table className="w-full text-sm text-left min-w-[620px]">
                <thead className="bg-[#F6F2E8] text-[#A8822E] uppercase text-[11px] tracking-[0.12em]">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-semibold">Type</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Plot</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Built-Up</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Units</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Car Parks</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Indicative Price</th>
                  </tr>
                </thead>
                <tbody>
                  {configurations.map((c) => (
                    <tr key={c.id} className="border-t border-[#e5dcc5] hover:bg-[#FAF8F3] transition-colors">
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
            <p className="text-xs text-gray-500 italic mt-3 leading-relaxed">
              Working rate: {workingRate}. Indicative and exclusive of GST, stamp duty,
              registration and statutory charges.
            </p>
          </Reveal>

          {/* Per-configuration detail */}
          {configurations.map((c, i) => (
            <Reveal
              key={c.id}
              id={c.id}
              variant="up"
              className="scroll-mt-28 grid md:grid-cols-2 gap-8 items-center bg-[#FAF8F3] rounded-xl border border-[#e5dcc5] overflow-hidden"
            >
              <div className={`relative h-60 md:h-full min-h-[260px] ${i % 2 ? "md:order-2" : ""}`}>
                <Image
                  src={planImages[c.id]}
                  alt={`${c.type} floor plan at Embassy Riverine`}
                  fill
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover object-top"
                />
              </div>

              <div className="p-6 md:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A8822E] mb-2">
                  {c.units} units {c.id === "5bhk" ? "· limited release" : ""}
                </p>
                <h2 className="text-xl md:text-2xl font-bold text-[#12302a] mb-3">{c.type}</h2>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">{c.blurb}</p>

                <dl className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
                  {[
                    ["Plot", c.plot],
                    ["Built-up", c.builtUp],
                    ["Car parks", String(c.parking)],
                    ["From", c.priceFrom],
                  ].map(([k, v]) => (
                    <div key={k} className="bg-white rounded border border-[#e8dfc8] py-2.5 px-2 text-center">
                      <dt className="text-[9px] uppercase tracking-[0.1em] text-gray-400">{k}</dt>
                      <dd className="text-[12px] font-semibold text-[#12302a] mt-1">{v}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="flex flex-wrap gap-1.5 mb-5">
                  {c.features.map((f) => (
                    <li
                      key={f}
                      className="text-[12px] text-[#5c6b65] bg-white px-2.5 py-1 rounded-full border border-[#e0d6bd]"
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact-us"
                  className="inline-block text-[#A8822E] text-sm font-semibold link-wipe"
                >
                  Check {c.short} availability →
                </Link>
              </div>
            </Reveal>
          ))}

          {/* Specification */}
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-3">
              Specification
            </h2>
            <p className="text-[15px] text-gray-600 leading-relaxed mb-7">
              What is actually written into the specification at launch. The final annexure
              to the sale agreement is the binding document — always read it before signing.
            </p>

            <dl className="grid sm:grid-cols-2 gap-5">
              {specifications.map((s, i) => (
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
          </Reveal>

          {/* Costs to plan for */}
          <Reveal variant="up">
            <h2 className="text-xl md:text-2xl font-bold text-[#12302a] mb-4">
              Additional costs to plan for
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {additionalCharges.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-gray-700 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C8A24A] flex-shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mt-5">
              For a total-cost calculation on the villa you shortlist,{" "}
              <Link href="/contact-us" className="text-[#A8822E] font-semibold link-wipe">
                request a callback
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand variant="scarcity" />
      <VillaFeatures />
      <ReasonsToInvest />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
