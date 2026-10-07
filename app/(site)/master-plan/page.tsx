import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import EnquiryButton from "@/components/EnquiryButton";
import FaqAccordion from "@/components/FaqAccordion";
import ContactBlock from "@/components/ContactBlock";
import Reveal from "@/components/Reveal";
import StickyDownloadButton from "@/components/StickyButton";
import masterPlan from "@/assets/master-plan.webp";
import corridorImg from "@/assets/riparian-corridor.webp";
import treesImg from "@/assets/township-trees.webp";
import lakeImg from "@/assets/township-lake.webp";
import { configurations, rera, projectSchema, breadcrumb } from "@/data/project";

const META_TITLE = "Embassy Riverine Master Plan | 85-Acre Embassy Origins Map";
const META_DESCRIPTION =
  "Embassy Riverine master plan: 217 villas on ~50 acres of the 85-acre Embassy Origins township, stream corridor, 19 acres of green, lake & clubhouse.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: "/master-plan" },
  keywords: [
    "Embassy Riverine master plan",
    "Embassy Origins township",
    "Embassy Origins master plan",
    "Embassy Riverine clubhouse",
    "Embassy Riverine location",
    "Embassy Riverine location map",
    "Embassy Riverine price",
    "riverside villas in Bangalore",
    "waterfront villas for sale in Bangalore",
    "gated community near Devanahalli airport",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/master-plan",
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

/** "What the drawing shows, from the gate inward" — label in bold, sentence continues. */
const drawingKey: { label: string; rest: string }[] = [
  {
    label: "Township entrances",
    rest: " with commercial and retail parcels placed at the edges, so visitor and office traffic stays off the residential roads.",
  },
  {
    label: "The apartment parcel",
    rest: ", Embassy South Reserve, on the outer edge against NH-44, roughly 14 acres, acting as a sound and sight buffer for the villas behind it.",
  },
  {
    label: "The 80-foot primary spine",
    rest: ", the single arterial that carries circulation through the township.",
  },
  {
    label: "Villa streets",
    rest: " branching off the spine as short cul-de-sacs rather than through roads, so each street carries only the homes on it.",
  },
  {
    label: "The stream corridor",
    rest: " running across the site, kept open, with riparian jogging and cycling trails, an elevated sky walk and a tree walk along its length.",
  },
  {
    label: "The central lake and the 40,000 sq ft clubhouse",
    rest: " in the middle of the villa precinct, within walking distance of every cluster.",
  },
  {
    label: "19 acres of reserved open space",
    rest: " distributed as linear greens, pocket gardens and the corridor itself, not consolidated into one park at the back.",
  },
  {
    label: "The villa precinct",
    rest: ", about 50 acres, with 217 plots in three sizes: 2,400, 3,500 and 5,400 sq ft.",
  },
];

/** "What to check on the master plan" per format; plot, built-up and units come from data/project.ts. */
const plotChecks: Record<string, string> = {
  "4bhk": "Which clusters hold the 4 BHK plots and which of those back onto a green",
  "45bhk": "Widest spread across the precinct; corridor-facing versus internal",
  "5bhk": "Fewest plots; lake and corner positions go first",
};

const atAGlance: { figure: string; label: ReactNode }[] = [
  { figure: "85 acres", label: "Embassy Origins township" },
  { figure: "About 50 acres", label: "villa precinct, 217 villas, under 4.5 per acre" },
  { figure: "About 14 acres", label: "Embassy South Reserve apartments, NH-44 edge" },
  { figure: "19 acres", label: "reserved open space" },
  { figure: "4,000 trees", label: "100 to 120 species" },
  { figure: "40,000 sq ft", label: "clubhouse beside the central lake" },
  { figure: "80 ft", label: "primary spine road" },
  { figure: "5.37 crore litres", label: "rainwater harvesting storage" },
  { figure: "IGBC Gold", label: "targeted" },
  { figure: "RERA", label: <span className="break-all">{rera.villas}</span> },
];

const masterPlanFaqs = [
  {
    question: "What is Embassy Origins township?",
    answer:
      "An 85-acre gated township by Embassy Developments Limited at Tarahunise, North Bangalore, planned around a natural stream corridor. Embassy Riverine is its villa precinct of 217 homes on about 50 acres; Embassy South Reserve is the apartment phase on the outer edge.",
  },
  {
    question: "Who prepared the Embassy Riverine master plan?",
    answer:
      "Bhumiputra Architecture master-planned the township, including the landscape plan of around 4,000 trees along the corridor and through the villa clusters.",
  },
  {
    question: "Is there a flooding risk because of the stream?",
    answer:
      "The plan keeps the watercourse open as the township's natural drainage rather than building over it, and adds 5.37 crore litres of rainwater storage with zero-discharge planning. Ask for the storm-water drawings and the plinth level of your plot relative to the corridor during the site visit.",
  },
  {
    question: "How much of the master plan is open space?",
    answer:
      "19 of the 85 acres are reserved open space, spread through the layout as the corridor, the lake edge, lawns, pavilions and pocket greens, not gathered into one park.",
  },
  {
    question: "Where is the clubhouse on the master plan?",
    answer:
      "At the centre of the villa precinct beside the central lake, within walking distance of every villa cluster. It is 40,000 sq ft.",
  },
  {
    question: "Do all three villa formats sit together or in separate clusters?",
    answer:
      "Plots are grouped by format within clusters along the spine. Which clusters hold which format, and which plots face the corridor, is on the drawing; ask us to mark your shortlist on it.",
  },
  {
    question: "Is the master plan RERA approved?",
    answer:
      "The project is registered with Karnataka RERA under PRM/KA/RERA/1251/309/PR/090926/008924, registered 9 September 2026, with a filed completion date of 30 September 2032. The sanctioned plan is the authoritative layout; verify it on the RERA portal.",
  },
  {
    question: "How do I get the Embassy Riverine master plan drawing?",
    answer:
      "It is in the brochure, which we send on WhatsApp or email the same day with the floor plans and price sheet. Better still, walk it on a site visit; the corridor and the tree cover are already there.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    projectSchema,
    {
      "@type": "FAQPage",
      mainEntity: masterPlanFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
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
        title="Embassy Riverine Master Plan – 85-Acre Embassy Origins Township Layout"
        subtitle={
          <>
            The{" "}
            <Link href="/about-embassy-riverine" className={linkCls}>
              Embassy Riverine
            </Link>{" "}
            master plan starts with something most township plans erase: a natural stream
            running across the land. Embassy Origins is 85 acres at Tarahunise, north of
            Yelahanka, and instead of piping the watercourse underground and building over it,
            the plan leaves it open and uses it as the organising line for everything else. The
            217{" "}
            <Link href="/villas-configurations" className={linkCls}>
              villas
            </Link>{" "}
            of Embassy Riverine take the protected ground along that corridor, on about 50
            acres, at fewer than 4.5 homes to the acre.
          </>
        }
      />

      {/* Intro */}
      <section className="w-full bg-white pt-14 md:pt-16 pb-4 px-6">
        <Reveal variant="up" className="max-w-5xl mx-auto space-y-5">
          <p className="text-[17px] leading-relaxed text-gray-700">
            This page walks through the layout zone by zone: how the 85 acres are divided,
            where the villa clusters sit, what the 19 acres of open space actually are, and how
            plot position affects the{" "}
            <Link href="/price" className={linkCls}>
              price
            </Link>{" "}
            of each villa &amp; configuration. The master plan drawing is in the brochure; the
            explanation is here.
          </p>
          <div className="pt-2">
            <EnquiryButton>Download the Master Plan and Brochure</EnquiryButton>
          </div>
        </Reveal>
      </section>

      {/* Master Plan */}
      <section className="w-full bg-white py-12 md:py-14 px-6" id="master-plan-drawing">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-6">Master Plan</h2>
          </Reveal>

          <Reveal variant="zoom">
            <figure className="rounded-xl overflow-hidden border border-[#e5dcc5] shadow-lg">
              <Image
                src={masterPlan}
                alt="Embassy Riverine master plan — 85-acre Embassy Origins township showing the stream corridor, villa precinct, central lake, clubhouse, apartment parcel and the 80-foot primary spine"
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 1000px"
                priority
              />
              <figcaption className="text-[13px] text-gray-600 italic bg-[#FAF8F3] px-5 py-3 leading-relaxed border-t border-[#e5dcc5]">
                Indicative master plan drawing, not to scale. The sanctioned plan and the
                RERA-registered particulars are the authoritative layout.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal variant="up" className="mt-10">
            <p className="text-[15px] text-gray-700 leading-relaxed mb-6">
              What the drawing shows, from the gate inward:
            </p>
          </Reveal>

          <ol className="grid sm:grid-cols-2 gap-4">
            {drawingKey.map((item, i) => (
              <Reveal
                as="li"
                key={item.label}
                variant="up"
                delay={(i % 4) * 60}
                className="flex items-start gap-4 bg-[#FAF8F3] rounded-lg p-5 border border-[#e5dcc5]"
              >
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 grid place-items-center w-8 h-8 rounded-full bg-[#C8A24A] text-white text-xs font-bold tabular-nums"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong className="text-[#12302a]">{item.label}</strong>
                  {item.rest}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* How the 85 Acres Are Divided */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="how-the-85-acres-are-divided"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <Reveal
            variant="up"
            className="md:col-span-3 space-y-4 text-[15px] text-gray-700 leading-relaxed"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-2">
              How the 85 Acres Are Divided
            </h2>
            <p>
              Embassy Origins township is one gated holding with two residential products and
              a commercial edge. The split is deliberate. The villas get the inner ground along
              the water; the apartments take the highway side and shield them; the shops and
              offices sit at the gates where outside traffic arrives anyway.
            </p>
            <p>
              Inside the villa precinct the geometry is simple. One spine, short streets off
              it, and clusters of villas on those streets, each cluster backing onto either the
              corridor or a linear green. The result is that most villas open onto planting
              rather than onto the compound wall of the house behind.
            </p>
            <p>
              For buyers comparing a gated community near Devanahalli airport, that is the
              number to look at: about 50 acres for 217 homes. Most{" "}
              <Link href="/villas-configurations" className={linkCls}>
                villa
              </Link>{" "}
              launches in the corridor fit that many homes on a third of the land.
            </p>
          </Reveal>

          <Reveal
            variant="zoom"
            delay={100}
            className="md:col-span-2 bg-white border border-[#e0d6bd] rounded-xl p-6 sm:p-8 text-center shadow-sm"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A8822E] mb-3">
              The number to look at
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-[#12302a] leading-tight">
              About 50 acres for 217 homes
            </p>
            <span aria-hidden="true" className="block h-[2px] w-12 bg-[#C8A24A] mx-auto my-4" />
            <p className="text-sm text-gray-600 leading-relaxed">
              Fewer than 4.5 homes to the acre
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Stream Corridor */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="stream-corridor">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal variant="up" className="space-y-4 text-[15px] text-gray-700 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-2">
              The Stream Corridor
            </h2>
            <p>
              The watercourse is why the project is called Riverine, and why it is sold as
              riverside villas in Bangalore. In practice it is a natural stream corridor with a
              riparian buffer on both banks, not a river bank, and the central lake sits on it.
              The master plan keeps the corridor as the township&apos;s drainage spine, which
              is the opposite of the built-over storm-water channels that cause most of
              Bengaluru&apos;s flooding. On top of that the estate carries{" "}
              <strong className="text-[#12302a]">5.37 crore litres</strong> of rainwater
              harvesting storage, sewage treatment with water reuse, and zero-discharge water
              planning.
            </p>
            <p>
              The corridor is also where the premium plots are.{" "}
              <Link href="/villas-configurations" className={linkCls}>
                Villas
              </Link>{" "}
              that front the stream or the lake carry a view premium over internal plots of the
              same format, so the corridor on the drawing is also a{" "}
              <Link href="/price" className={linkCls}>
                price
              </Link>{" "}
              map. If waterfront villas for sale in Bangalore are what you are after, ask which
              plots in each format actually front the water; frontage is sold by plot, not by
              configuration.
            </p>
          </Reveal>

          <Reveal variant="zoom" delay={100}>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#e5dcc5] shadow-sm">
              <Image
                src={corridorImg}
                alt="A natural stream under tree cover, representative of the corridor the master plan keeps open"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Open Space and Trees */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="open-space-and-trees"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal variant="zoom" className="md:order-1 order-2">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#e5dcc5] shadow-sm">
              <Image
                src={treesImg}
                alt="A walking path through planted trees, representative of the open space and tree cover"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal
            variant="up"
            delay={100}
            className="md:order-2 order-1 space-y-4 text-[15px] text-gray-700 leading-relaxed"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-2">
              Open Space and Trees
            </h2>
            <p>
              <strong className="text-[#12302a]">19 of the 85 acres</strong> are reserved open
              space. Around <strong className="text-[#12302a]">4,000 trees</strong>{" "}
              of 100 to 120 species are being retained or planted across the site, with the existing
              canopy along the corridor kept rather than cleared. The open space is spread
              through the layout: the corridor and its trails, the lake edge, the function lawn
              and family pavilions, the amphitheatre, the kids&apos; adventure play park, the
              pet park and the senior citizens&apos; zone. IGBC Gold certification is targeted
              for the township.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Clubhouse and Central Lake */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="clubhouse-and-central-lake">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal variant="up" className="space-y-4 text-[15px] text-gray-700 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-2">
              Clubhouse and Central Lake
            </h2>
            <p>
              The Embassy Riverine clubhouse is placed at the centre of the{" "}
              <Link href="/villas-configurations" className={linkCls}>
                villa
              </Link>{" "}
              precinct beside the lake, not at the gate, so it is a walk from every cluster.{" "}
              <strong className="text-[#12302a]">40,000 sq ft</strong> with a heated indoor
              pool, gymnasium and yoga pavilion, spa, squash court, business lounge and library,
              lounge bar and cafe, indoor games room and a banquet hall with guest rooms. The
              outdoor resort pool, floodlit tennis court, padel and pickleball courts,
              basketball and badminton courts, cricket nets, putting green and skating rink sit
              around it. The full{" "}
              <Link href="/amenities" className={linkCls}>
                amenities
              </Link>{" "}
              list, with what is inside the clubhouse and what is outdoors, is on the{" "}
              <Link href="/amenities" className={linkCls}>
                amenities
              </Link>{" "}
              page.
            </p>
          </Reveal>

          <Reveal variant="zoom" delay={100}>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#e5dcc5] shadow-sm">
              <Image
                src={lakeImg}
                alt="Open water, representative of the central lake beside the clubhouse on the stream corridor"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Villa Clusters and Plot Positions */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="villa-clusters-and-plot-positions"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-4">
              Villa Clusters and Plot Positions
            </h2>
            <p className="text-[15px] text-gray-700 leading-relaxed mb-8">
              The master plan is where villa &amp; configuration meets{" "}
              <Link href="/price" className={linkCls}>
                price
              </Link>
              . Every 4 BHK shares one{" "}
              <Link href="/floor-plans" className={linkCls}>
                floor plan
              </Link>
              , every 4.5 BHK another, every 5 BHK a third, with plot, built-up area and car
              parks fixed per format. What the plan decides is which plot you get within that
              format, and that is what moves the number inside each price band.
            </p>
          </Reveal>

          <Reveal variant="up">
            <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm bg-white">
              <table className="w-full text-sm text-left min-w-[680px]">
                <caption className="sr-only">
                  Embassy Riverine villa formats with plot, built-up area, units and what to
                  check on the master plan
                </caption>
                <thead className="bg-[#F6F2E8] text-[#A8822E] uppercase text-[11px] tracking-[0.12em]">
                  <tr>
                    <th scope="col" className="px-5 py-4 font-semibold">
                      Villa &amp; configuration
                    </th>
                    <th scope="col" className="px-5 py-4 font-semibold">Plot</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Built-up</th>
                    <th scope="col" className="px-5 py-4 font-semibold">Units</th>
                    <th scope="col" className="px-5 py-4 font-semibold">
                      What to check on the master plan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {configurations.map((c) => (
                    <tr
                      key={c.id}
                      className="border-t border-[#e5dcc5] hover:bg-[#FAF8F3] transition-colors align-top"
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 font-semibold text-[#12302a] text-left whitespace-nowrap"
                      >
                        {c.short}
                      </th>
                      <td className="px-5 py-4 text-gray-600 whitespace-nowrap">{c.plot}</td>
                      <td className="px-5 py-4 text-gray-600 whitespace-nowrap">{c.builtUp}</td>
                      <td className="px-5 py-4 text-gray-600">{c.units}</td>
                      <td className="px-5 py-4 text-gray-700 leading-relaxed">
                        {plotChecks[c.id] ?? ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal variant="up">
            <p className="text-[15px] text-gray-700 leading-relaxed mt-8">
              Three things to settle on the drawing before you look at the cost sheet:{" "}
              <strong className="text-[#12302a]">facing</strong>,{" "}
              <strong className="text-[#12302a]">what the rear boundary touches</strong>, and{" "}
              <strong className="text-[#12302a]">
                how far the plot is from the clubhouse and the gate
              </strong>
              . The{" "}
              <Link href="/floor-plans" className={linkCls}>
                floor plan
              </Link>{" "}
              page covers what is inside each villa; this page covers what is outside it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Estate Infrastructure */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="estate-infrastructure">
        <Reveal variant="up" className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-5">
            Estate Infrastructure
          </h2>
          <div className="bg-[#FAF8F3] border-l-[3px] border-[#C8A24A] rounded-r-lg p-6 sm:p-7">
            <p className="text-[15px] text-gray-700 leading-relaxed">
              Below the landscape the master plan carries 24x7 gated security with CCTV, fully
              underground cabling, power backup for essential circuits, sewage treatment with
              water reuse, 5.37 crore litres of rainwater harvesting, EV charging provision,
              solar hot water and zero-discharge water planning. These are township systems,
              common to every{" "}
              <Link href="/villas-configurations" className={linkCls}>
                villa &amp; configuration
              </Link>
              , and they are part of what the infrastructure charges in the cost sheet pay for.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Location and Price */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="location-and-price"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-8">
              Location and Price
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            <Reveal
              variant="up"
              className="bg-white rounded-xl p-6 border-t-[3px] border-[#C8A24A] shadow-sm text-[15px] text-gray-700 leading-relaxed"
            >
              <p>
                Embassy Riverine{" "}
                <Link href="/location-connectivity" className={linkCls}>
                  location
                </Link>
                : Chapparkallu Road, Tarahunise, in the Bettahalsur belt just off NH-44,{" "}
                <strong className="text-[#12302a]">15 km and 20 to 25 minutes</strong> from
                Kempegowda International Airport, 2.5 km from Stonehill International School,
                with the nearest Metro Blue Line alignment point at Doddajala, 7.5 km away. The
                Embassy Riverine location map with distances is on the{" "}
                <Link href="/location-connectivity" className={linkCls}>
                  location
                </Link>{" "}
                page.
              </p>
            </Reveal>

            <Reveal
              variant="up"
              delay={100}
              className="bg-white rounded-xl p-6 border-t-[3px] border-[#C8A24A] shadow-sm text-[15px] text-gray-700 leading-relaxed"
            >
              <p>
                <Link href="/about-embassy-riverine" className={linkCls}>
                  Embassy Riverine
                </Link>{" "}
                price runs from <strong className="text-[#12302a]">Rs 14.10 Cr</strong> for the
                4 BHK and <strong className="text-[#12302a]">Rs 17.43 Cr</strong> for the 4.5
                BHK, with the 5 BHK on request, at roughly Rs 33,100 to 37,700 per sq ft on
                built-up area; corridor, lake and corner plots sit at the top of each band.
                Taxes and deposits are extra. The full breakdown is on the{" "}
                <Link href="/price" className={linkCls}>
                  Price
                </Link>{" "}
                page.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Master Plan at a Glance */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="at-a-glance">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-8">
              Master Plan at a Glance
            </h2>
          </Reveal>

          {/* Cell borders (not 1px grid gaps) so every divider survives fractional column widths;
              the -1px offsets tuck the outer right/bottom borders under the clipped frame. */}
          <div className="rounded-xl overflow-hidden border border-[#e0d6bd] bg-white">
            <dl className="grid grid-cols-2 lg:grid-cols-5 -mr-px -mb-px">
              {atAGlance.map((g, i) => (
                <Reveal
                  key={g.figure}
                  variant="up"
                  delay={(i % 5) * 55}
                  className="p-4 sm:p-5 flex flex-col gap-1.5 min-w-0 border-r border-b border-[#e0d6bd]"
                >
                  <dt className="text-lg sm:text-xl font-bold text-[#12302a] leading-tight">
                    {g.figure}
                    <span
                      aria-hidden="true"
                      className="block h-[2px] w-6 mt-1.5 bg-[#C8A24A]/60"
                    />
                  </dt>
                  <dd className="text-[12px] sm:text-[13px] text-gray-600 leading-snug">
                    {g.label}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <FaqAccordion
        faqs={masterPlanFaqs}
        title="Frequently Asked Questions"
        eyebrow="FAQ"
        className="bg-[#FAF8F3] border-y border-[#e5dcc5]"
      />

      <ContactBlock
        className="bg-white"
        cta="Book a Site Visit"
        intro={
          <p>
            Real Revenue is an authorised channel partner for Embassy Riverine.{" "}
            <Link href="/contact-us" className={linkCls}>
              Contact us
            </Link>{" "}
            for the master plan drawing and brochure, plot availability marked on the plan by{" "}
            <Link href="/villas-configurations" className={linkCls}>
              villa &amp; configuration
            </Link>
            , facing and frontage details, the{" "}
            <Link href="/floor-plans" className={linkCls}>
              floor plan
            </Link>{" "}
            set, the cost sheet in writing, an Embassy Riverine site visit on any day of the
            week with pickup from Hebbal or Yelahanka, and home-loan comparison across lenders.
          </p>
        }
      />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
