import type { Metadata } from "next";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import LocationAdvantages from "@/components/LocationAdvantages";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBand from "@/components/CtaBand";
import StickyDownloadButton from "@/components/StickyButton";
import {
  project,
  neighbourhood,
  faqs,
  projectSchema,
  agentSchema,
  breadcrumb,
  SITE_URL,
} from "@/data/project";

import airport from "@/assets/loc-airport.webp";
import metro from "@/assets/loc-metro.webp";
import school from "@/assets/loc-school.webp";
import officePark from "@/assets/loc-office-park.webp";

export const metadata: Metadata = {
  title: "Embassy Riverine Location — Tarahunise, North Bangalore",
  description:
    "Embassy Riverine is on Chapparkallu Road at Tarahunise, off NH-44 north of Yelahanka — 15 km from Kempegowda International Airport and 2.5 km from Stonehill.",
  alternates: { canonical: "/location-connectivity" },
  keywords: [
    "Embassy Riverine location",
    "Embassy Origins location",
    "Tarahunise villas",
    "Bettahalsur North Bangalore",
  ],
};

const pillars = [
  {
    image: airport,
    title: "The airport corridor",
    body: "Kempegowda International Airport is roughly 15 km away, a 20 to 25 minute drive on NH-44 without entering city traffic. The airport anchored this corridor; the aerospace and hardware parks followed it, and the international schools followed the families.",
    alt: "Kempegowda International Airport terminal",
  },
  {
    image: metro,
    title: "The Metro Blue Line",
    body: "Namma Metro's Blue Line, Phase 2B, will run from Kasturi Nagar through Nagawara and Hebbal to the airport terminal. The Hebbal section is targeted for 2027, with the airport section following. Doddajala, the nearest alignment point to the township, sits roughly 6 to 7.5 km away.",
    alt: "Namma Metro train at a station",
  },
  {
    image: officePark,
    title: "The aerospace employment belt",
    body: "The east and south of Bangalore run on IT services. The north runs on aerospace, hardware, defence electronics, logistics and the airport economy — sectors less correlated with the software hiring cycle. Prestige Tech Cloud is 6.5 km away; the KIADB Aerospace Park and Devanahalli Business Park sit in the same belt.",
    alt: "Modern office park in North Bangalore",
  },
  {
    image: school,
    title: "Schools within the corridor",
    body: "Stonehill International School — run by Embassy Group itself — is 2.5 km away, a five to seven minute drive. Canadian International School, Vidyashilp Academy, Ryan International and Delhi Public School North also serve the corridor, as does the Padukone-Dravid Centre for Sports Excellence at 3 km.",
    alt: "International school campus in North Bangalore",
  },
];

const locationFaqs = faqs.filter((f) =>
  /located|airport|school|density/i.test(f.question)
);

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    projectSchema,
    agentSchema,
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/location-connectivity#faq`,
      mainEntity: locationFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Location & Connectivity", path: "/location-connectivity" },
    ]),
  ],
};

export default function LocationConnectivityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageBanner
        eyebrow="Location & Connectivity"
        title="Embassy Riverine Location — Tarahunise, North Bangalore"
        subtitle="On Chapparkallu Road in the Bettahalsur belt of Jala Hobli, north of Yelahanka and just off NH-44, the Bellary Road airport corridor."
      />

      {/* Address + why it matters */}
      <section className="w-full bg-white pt-14 md:pt-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal variant="up" className="grid md:grid-cols-[1fr_auto] gap-6 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-4 leading-tight">
                Where exactly is Embassy Riverine?
              </h2>
              <p className="text-[15px] text-gray-700 leading-relaxed mb-4">
                This is the stretch of Bangalore that changed character fastest in the last
                decade. What it buys you is simple: a twenty-minute run to the international
                airport without ever entering the city, and a genuinely quiet site, because
                the development coming here is low-density and institutional rather than
                dense mid-rise.
              </p>
              <p className="text-[15px] text-gray-700 leading-relaxed">
                A note on the address: some competitor microsites tag this project
                &ldquo;Devanahalli&rdquo; for search. It is not in Devanahalli, and it is
                not part of Embassy Springs. It sits at Tarahunise / Bettahalsur, north of
                Yelahanka off NH-44.
              </p>
            </div>

            <address className="not-italic bg-[#FAF8F3] border border-[#e5dcc5] rounded-lg p-5 text-sm md:min-w-[240px]">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#A8822E] mb-2">
                Project Address
              </p>
              <p className="text-[#12302a] font-semibold">Embassy Riverine</p>
              <p className="text-gray-600 leading-relaxed mt-1">
                Embassy Origins
                <br />
                {project.street}
                <br />
                {project.city}, {project.region} {project.postalCode}
              </p>
            </address>
          </Reveal>
        </div>
      </section>

      <LocationAdvantages />

      {/* Four pillars */}
      <section className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up" className="text-center mb-12">
            <h6 className="uppercase text-xs font-semibold tracking-[0.22em] text-[#A8822E] mb-3">
              The Corridor
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">
              What Makes This Address Work
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <Reveal
                key={p.title}
                variant="up"
                delay={i * 90}
                className="card-lift bg-white rounded-xl overflow-hidden border border-[#e5dcc5] shadow-sm group"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 420px"
                    quality={74}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#12302a] mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Neighbourhood lists */}
      <section className="w-full bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">
              The Neighbourhood
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["Schools", neighbourhood.schools],
              ["Healthcare", neighbourhood.healthcare],
              ["Workplaces", neighbourhood.workplaces],
              ["Retail & Leisure", neighbourhood.retail],
            ].map(([label, items], i) => (
              <Reveal
                key={label as string}
                variant="up"
                delay={i * 80}
                className="bg-[#FAF8F3] rounded-lg p-5 border-t-[3px] border-[#C8A24A]"
              >
                <h3 className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#A8822E] mb-3">
                  {label as string}
                </h3>
                <ul className="space-y-2">
                  {(items as string[]).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#3d4f49] text-[13px]">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C8A24A] flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion
        faqs={locationFaqs}
        title="Location Questions"
        eyebrow="FAQ"
        className="bg-[#FAF8F3] border-y border-[#e5dcc5]"
      />
      <CtaBand variant="visit" />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
