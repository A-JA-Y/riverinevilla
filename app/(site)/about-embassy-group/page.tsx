import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import StickyDownloadButton from "@/components/StickyButton";
import logo from "@/assets/logo.webp";
import { SITE_URL, breadcrumb } from "@/data/project";

export const metadata: Metadata = {
  title: "Embassy Group — Developer Profile | Embassy Riverine",
  description:
    "Embassy Group was founded in 1993 in Bengaluru and has delivered roughly 85 to 100 million sq ft. Embassy Developments Limited is its listed residential arm.",
  alternates: { canonical: "/about-embassy-group" },
  keywords: ["Embassy Group Bangalore", "Embassy Developments Limited", "Embassy Office Parks REIT"],
};

const milestones = [
  { year: "1993", text: "Embassy Group founded in Bengaluru under Chairman and Managing Director Jitendra Virwani." },
  { year: "2019", text: "Sponsored Embassy Office Parks REIT — India's first listed REIT and Asia's largest office REIT by area." },
  { year: "Jan 2025", text: "Embassy Group took a 42.65% controlling stake in Embassy Developments Limited, effective 24 January 2025." },
  { year: "FY26", text: "Guided to six North Bengaluru launches representing roughly 5.6 million sq ft and Rs 10,300 crore of gross development value." },
  { year: "Sep 2026", text: "Embassy Origins announced on 15 September 2026 — the largest of those launches." },
];

const stats = [
  { value: "85–100 M", label: "sq ft delivered" },
  { value: "1993", label: "founded in Bengaluru" },
  { value: "42,000", label: "students across its schools" },
  { value: "8", label: "geographies, India and overseas" },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#developer`,
      name: "Embassy Developments Limited",
      parentOrganization: { "@type": "Organization", name: "Embassy Group" },
      foundingDate: "1993",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    },
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "About Embassy Group", path: "/about-embassy-group" },
    ]),
  ],
};

export default function AboutEmbassyGroupPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageBanner
        eyebrow="The Developer"
        title="Embassy Group"
        subtitle="Three decades of commercial office parks, residential, hospitality, industrial and education assets — and the sponsor of India's first listed REIT."
      />

      <section className="w-full bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          <Reveal variant="left" className="md:w-1/3 flex-shrink-0">
            <Image
              src={logo}
              alt="Embassy Riverine"
              className="h-12 w-auto mb-6"
              sizes="240px"
            />
            <dl className="grid grid-cols-2 md:grid-cols-1 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-[#C8A24A] pl-3">
                  <dt className="text-xl font-bold text-[#12302a]">{s.value}</dt>
                  <dd className="text-[12px] text-gray-500 leading-snug">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="flex-1 flex flex-col gap-4">
            <Reveal variant="up">
              <p className="text-gray-700 text-[15px] leading-relaxed">
                Embassy Group was founded in 1993 and is headquartered in Bengaluru, led by
                Chairman and Managing Director Jitendra Virwani. Over three decades it has
                built across commercial office parks, residential, hospitality, industrial
                and warehousing, retail, education and renewables, with a delivered
                footprint of roughly 85 to 100 million sq ft and operations in Bengaluru,
                Chennai, Hyderabad, Pune, Coimbatore, Trivandrum, Serbia and Malaysia.
              </p>
            </Reveal>

            <Reveal variant="up" delay={80}>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                The group&rsquo;s best-known work is commercial: Manyata Embassy Business
                Park, Embassy TechVillage, Embassy GolfLinks and Embassy Tech Zone in Pune.
                In 2019 it sponsored Embassy Office Parks REIT, India&rsquo;s first listed
                real estate investment trust and Asia&rsquo;s largest office REIT by area.
              </p>
            </Reveal>

            <Reveal variant="up" delay={140}>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                On the residential side the portfolio includes Embassy ONE with its Four
                Seasons hotel and private residences, Embassy Lake Terraces, Embassy
                Boulevard, and the 288-acre Embassy Springs township at Devanahalli.
              </p>
            </Reveal>

            <Reveal variant="up" delay={200}>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                Embassy Developments Limited is the group&rsquo;s listed residential arm,
                trading on the BSE and NSE. The group also runs Stonehill International
                School and Embassy Academy, serving around 42,000 students — Stonehill is
                2.5 km from Embassy Riverine.
              </p>
            </Reveal>

            <Reveal variant="up" delay={260} className="mt-2">
              <Link
                href="/about-embassy-riverine"
                className="btn-sheen inline-block bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs font-bold tracking-[0.16em] uppercase px-7 py-3.5 rounded transition-colors"
              >
                Explore Embassy Riverine
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full bg-[#F6F2E8] py-16 md:py-20 px-6 border-y border-[#e0d6bd]">
        <div className="max-w-3xl mx-auto">
          <Reveal variant="up" className="text-center mb-10">
            <h6 className="uppercase text-xs font-semibold tracking-[0.22em] text-[#A8822E] mb-3">
              Timeline
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">
              From 1993 to Embassy Origins
            </h2>
          </Reveal>

          <ol className="relative border-l-2 border-[#e0d6bd] ml-3 space-y-8">
            {milestones.map((m, i) => (
              <Reveal
                as="li"
                key={m.year}
                variant="left"
                delay={i * 90}
                className="pl-7 relative"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#C8A24A] ring-4 ring-[#F6F2E8]"
                />
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#A8822E]">
                  {m.year}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mt-1.5">{m.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand variant="visit" />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
