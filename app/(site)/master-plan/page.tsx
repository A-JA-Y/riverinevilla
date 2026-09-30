import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import KeyHighlights from "@/components/KeyHighlights";
import CtaBand from "@/components/CtaBand";
import StickyDownloadButton from "@/components/StickyButton";
import masterPlan from "@/assets/master-plan.webp";
import { projectSchema, breadcrumb, project } from "@/data/project";

export const metadata: Metadata = {
  title: "Embassy Origins Master Plan | 85 Acres, 217 Villas, North Bangalore",
  description:
    "The Embassy Origins master plan — an 85-acre township split by a protected riparian corridor, with 19 acres of reserved open space and a 40,000 sq ft clubhouse.",
  alternates: { canonical: "/master-plan" },
  keywords: [
    "Embassy Origins master plan",
    "Embassy Riverine master plan",
    "Embassy Origins layout",
  ],
};

const zones = [
  {
    title: "The riparian corridor",
    body: "A natural watercourse splits the 85 acres in two. Rather than culvert it, the master plan holds it as the spine of the development and arranges the villas on either side.",
  },
  {
    title: "Villa precinct — about 50 acres",
    body: "Embassy Riverine takes the protected inner ground. 217 villas at fewer than 4.5 homes per acre, which is what makes the tree cover and open sightlines possible.",
  },
  {
    title: "Apartment parcel — about 14 acres",
    body: "Embassy South Reserve sits on the outer edge, where it doubles as an acoustic and visual buffer against NH-44 traffic, leaving the villa enclave the quiet core.",
  },
  {
    title: "Commercial at the gates",
    body: "Offices and retail sit near the township entrances, so residential traffic and visitor traffic never share the same internal roads.",
  },
  {
    title: "The 80-foot primary spine",
    body: "One arterial road carries circulation through the township. Villa streets branch off it as short stubs that terminate rather than connect — no through-traffic incentive, so residential roads carry only the homes on them.",
  },
  {
    title: "19 acres of reserved landscape",
    body: "Not consolidated into one park. Threaded through the street network as linear greens, pocket gardens and the riparian trail system, so most villas open onto planting rather than a neighbour's compound wall.",
  },
  {
    title: "The clubhouse and central lake",
    body: "The 40,000 sq ft clubhouse anchors the centre of the villa precinct, beside the central lake and within walking distance of every cluster.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    projectSchema,
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Master Plan", path: "/master-plan" },
    ]),
  ],
};

export default function MasterPlanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageBanner
        eyebrow="The Layout"
        title="Embassy Origins Master Plan"
        subtitle="85 acres at Tarahunise, planned around a protected watercourse rather than over it — 217 villas, 19 acres of reserved open space and about 4,000 trees."
      />

      {/* The drawing */}
      <section className="w-full bg-white py-14 md:py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="zoom">
            <figure className="rounded-xl overflow-hidden border border-[#e5dcc5] shadow-lg">
              <Image
                src={masterPlan}
                alt="Embassy Origins master plan — 85-acre township showing the riparian corridor, villa precinct, central lake, clubhouse, apartment parcel and the 80-foot primary spine"
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 1000px"
                priority
              />
              <figcaption className="text-[12px] text-gray-500 bg-[#FAF8F3] px-5 py-3 leading-relaxed border-t border-[#e5dcc5]">
                Indicative master plan, drawn to illustrate the zoning described below. Not
                to scale. Refer to the RERA-registered particulars and the sanctioned plan
                for the authoritative layout.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal variant="up" className="text-center mt-8">
            <a
              href={project.brochure}
              download
              className="btn-sheen inline-block bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs font-bold px-8 py-4 rounded uppercase tracking-[0.16em] transition-colors"
            >
              Download the Brochure
            </a>
          </Reveal>
        </div>
      </section>

      {/* Zone-by-zone */}
      <section className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]">
        <div className="max-w-4xl mx-auto">
          <Reveal variant="up" className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] leading-tight">
              How the 85 acres are divided
            </h2>
          </Reveal>

          <dl className="grid sm:grid-cols-2 gap-5">
            {zones.map((z, i) => (
              <Reveal
                key={z.title}
                variant="up"
                delay={i * 70}
                className={`bg-white rounded-lg p-6 border-l-[3px] border-[#C8A24A] shadow-sm ${
                  i === zones.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <dt className="text-base font-bold text-[#12302a] mb-2">{z.title}</dt>
                <dd className="text-gray-700 text-sm leading-relaxed">{z.body}</dd>
              </Reveal>
            ))}
          </dl>

          <Reveal variant="up" className="text-center mt-10">
            <p className="text-sm text-gray-600">
              See how each format sits within it on the{" "}
              <Link href="/floor-plans" className="text-[#A8822E] font-semibold link-wipe">
                floor plans page
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <KeyHighlights />
      <CtaBand variant="visit" />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
