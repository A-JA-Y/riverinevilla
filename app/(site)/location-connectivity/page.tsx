import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGraduationCap, FaHospital, FaBriefcase, FaShoppingBag } from "react-icons/fa";
import PageBanner from "@/components/PageBanner";
import FaqAccordion from "@/components/FaqAccordion";
import ContactBlock from "@/components/ContactBlock";
import Reveal from "@/components/Reveal";
import StickyDownloadButton from "@/components/StickyButton";
import { project, projectSchema, agentSchema, breadcrumb, SITE_URL } from "@/data/project";

import airport from "@/assets/loc-airport.webp";
import metro from "@/assets/loc-metro.webp";

const META_TITLE = "Embassy Riverine Location Map | Tarahunise, North Bangalore";
const META_DESCRIPTION =
  "Embassy Riverine location: Chapparkallu Road, Tarahunise, off NH-44 north of Yelahanka. 15 km to the airport, 2.5 km to Stonehill. Map & distances.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: "/location-connectivity" },
  keywords: [
    "Embassy Riverine location",
    "Embassy Riverine location map",
    "Embassy Riverine Tharahunise",
    "Embassy Riverine Bettahalsur",
    "Embassy Riverine Yelahanka",
    "Embassy Riverine Devanahalli",
    "Embassy Riverine villas off Airport Road",
    "villas near Yelahanka",
    "villas in Devanahalli",
    "villas near Devanahalli airport",
    "best villa projects near Bangalore airport",
    "gated communities near Devanahalli airport",
    "villas for sale in Bettahalsur",
    "villas for sale on IVC Road, Bangalore",
    "luxury villas for sale in Yelahanka",
    "Embassy Riverine site visit",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/location-connectivity",
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

/** Map pin from data/project.ts (13.187, 77.596, as in the location copy). */
const MAP_PIN = `${project.lat}, ${project.lng}`;
const MAP_EMBED = `https://maps.google.com/maps?q=${project.lat},${project.lng}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${project.lat},${project.lng}`;

const placeNames: { name: string; rest: string }[] = [
  {
    name: "Tarahunise",
    rest: " (also spelt Tharahunise) is the village the land sits in. Embassy Riverine Tharahunise is the most precise name.",
  },
  {
    name: "Bettahalsur",
    rest: " is the belt along NH-44 that Tarahunise belongs to, and the name on most portals. Embassy Riverine Bettahalsur is the same address.",
  },
  {
    name: "Yelahanka",
    rest: " is the nearest established suburb, to the south. The project is north of Yelahanka town, about 12 km from Yelahanka Junction, which is why it turns up in searches for villas near Yelahanka and Embassy Riverine Yelahanka. It is not inside Yelahanka.",
  },
  {
    name: "Devanahalli",
    rest: " is the airport's taluk, to the north. Embassy Riverine Devanahalli is a search habit, not an address; the project is 15 km from the airport and is not part of Embassy Springs or any Devanahalli layout.",
  },
];

const connectivity = [
  {
    mode: "Road",
    body: "NH-44 is the spine. South it runs through Yelahanka to Hebbal flyover and the Outer Ring Road, 21 km away. North it runs to the airport trumpet. Chapparkallu Road takes you off the highway to the gate. IVC Road and the Bettahalsur stretch give a second way in from the west and the Doddaballapur side.",
  },
  {
    mode: "Metro",
    body: "The Namma Metro Blue Line, Phase 2B, runs from Kasturi Nagar through Nagawara and Hebbal to the airport terminal. Doddajala is the nearest alignment point, 7.5 km from the gate. Treat it as a park-and-ride station rather than a walk; check the current operating status before you build a daily commute around it.",
  },
  {
    mode: "Rail",
    body: "Yelahanka Junction is 12 km away for suburban and long-distance trains.",
  },
  {
    mode: "Air",
    body: "15 km, 20 to 25 minutes, without entering the city. For a household that flies every week, this is the number that justifies the address.",
  },
];

/** Distance table exactly as in the location copy (by road from the project gate). */
const distanceRows = [
  { destination: "Stonehill International School", distance: "2.5 km", time: "5–7 min" },
  {
    destination: "Padukone-Dravid Centre for Sports Excellence",
    distance: "3 km",
    time: "6–8 min",
  },
  { destination: "Prestige Tech Cloud office park", distance: "6.5 km", time: "12–15 min" },
  { destination: "Doddajala, proposed Metro Blue Line", distance: "7.5 km", time: "14–17 min" },
  { destination: "Manipal Hospital, Yelahanka", distance: "11.5 km", time: "22–27 min" },
  { destination: "Yelahanka Junction Railway Station", distance: "12 km", time: "24–28 min" },
  { destination: "Kempegowda International Airport", distance: "15 km", time: "20–25 min" },
  { destination: "Phoenix Mall of Asia", distance: "17 km", time: "30–35 min" },
  { destination: "Hebbal flyover and ORR gateway", distance: "21 km", time: "35–42 min" },
];

const neighbourhood: { title: string; icon: typeof FaGraduationCap; body: ReactNode }[] = [
  {
    title: "Schools",
    icon: FaGraduationCap,
    body: (
      <>
        Stonehill International School, run by Embassy Group, is 2.5 km from the gate. Canadian
        International School, Vidyashilp Academy, Ryan International School Yelahanka and Delhi
        Public School North all serve the corridor, and the Padukone-Dravid Centre for Sports
        Excellence is 3 km away for coaching that goes beyond what the township&apos;s own
        sports{" "}
        <Link href="/amenities" className={linkCls}>
          amenities
        </Link>{" "}
        offer.
      </>
    ),
  },
  {
    title: "Hospitals",
    icon: FaHospital,
    body: (
      <>
        Manipal Hospital Yelahanka is 11.5 km. Aster CMI and Columbia Asia at Hebbal, Sparsh
        Hospital Yelahanka and Cytecare Cancer Hospital cover the rest of the corridor.
      </>
    ),
  },
  {
    title: "Workplaces",
    icon: FaBriefcase,
    body: (
      <>
        Prestige Tech Cloud is 6.5 km. The KIADB Aerospace Park, Devanahalli Business Park,
        Manyata Tech Park and the Hebbal office cluster are the employment anchors on this side
        of the city. If your office is in Whitefield or Electronic City, this is not your
        location; if it is Hebbal, Manyata, the airport or the aerospace belt, it is.
      </>
    ),
  },
  {
    title: "Shopping and Weekends",
    icon: FaShoppingBag,
    body: (
      <>
        Phoenix Mall of Asia is 17 km. Elements Mall and Esteem Mall sit on the Yelahanka and
        Hebbal stretch of NH-44. Nandi Hills is the weekend drive north.
      </>
    ),
  },
];

const locationFaqs = [
  {
    question: "Where exactly is Embassy Riverine located?",
    answer:
      "On Chapparkallu Road at Tarahunise, in the Bettahalsur belt of Jala Hobli, Bengaluru North, just off NH-44. PIN 562157. It is the villa precinct of the 85-acre Embassy Origins township.",
  },
  {
    question: "Is Embassy Riverine in Bettahalsur or Yelahanka?",
    answer:
      "Both names are used. The village is Tarahunise, the belt is Bettahalsur, and Yelahanka is the nearest town, about 12 km south. It is not inside Yelahanka and not in Devanahalli.",
  },
  {
    question: "How far is Embassy Riverine from Kempegowda International Airport?",
    answer: "About 15 km, a 20 to 25 minute drive on NH-44 without entering the city.",
  },
  {
    question: "Which is the nearest metro station?",
    answer:
      "Doddajala on the Blue Line (Phase 2B), 7.5 km away, is the nearest alignment point. Confirm its operating status before relying on it.",
  },
  {
    question: "How far is Hebbal from Embassy Riverine?",
    answer: "About 21 km to the Hebbal flyover and ORR, 35 to 42 minutes by road.",
  },
  {
    question: "Which schools are near Embassy Riverine?",
    answer:
      "Stonehill International School at 2.5 km, with Canadian International School, Vidyashilp Academy, Ryan International Yelahanka and DPS North in the corridor.",
  },
  {
    question: "Which hospitals are near Embassy Riverine?",
    answer:
      "Manipal Hospital Yelahanka at 11.5 km, plus Aster CMI and Columbia Asia at Hebbal and Sparsh at Yelahanka.",
  },
  {
    question: "How do I reach the site for a visit?",
    answer:
      "Call or WhatsApp +91 63566 63535. We arrange pickup from Hebbal or Yelahanka seven days a week, walk the master plan on site and send the price sheet the same day.",
  },
];

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
        title="Embassy Riverine Location – Tarahunise, Bettahalsur, North Bangalore"
        subtitle={
          <>
            <Link href="/" className={linkCls}>
              Embassy Riverine
            </Link>{" "}
            location: Embassy Origins, Chapparkallu Road, Tarahunise, Bettahalsur, Jala Hobli,
            Bengaluru 562157. The site is just off NH-44, the airport road, north of Yelahanka
            and south of the airport, 15 km and 20 to 25 minutes from the Kempegowda
            International Airport terminal. Stonehill International School is 2.5 km away.
          </>
        }
      />

      {/* Intro */}
      <section className="w-full bg-white pt-14 md:pt-16 pb-4 px-6">
        <Reveal variant="up" className="max-w-5xl mx-auto space-y-5">
          <p className="text-[17px] leading-relaxed text-gray-700">
            That is the whole location argument in one line: airport side of the city, outside
            the dense part of it, on the highway that goes there. The rest of this page gives you
            the{" "}
            <Link href="/" className={linkCls}>
              Embassy Riverine
            </Link>{" "}
            location map, the distance table from the brochure, what the different place names
            mean, and what sits around the township for schools, hospitals, work and weekends.
          </p>
          <div className="pt-2">
            <a
              href="#location-map"
              className="btn-sheen inline-flex items-center justify-center gap-2 bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs font-bold uppercase tracking-[0.16em] px-7 py-4 rounded transition-colors"
            >
              Open the Embassy Riverine Location Map
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
      </section>

      {/* Location */}
      <section className="w-full bg-white py-12 md:py-14 px-6 scroll-mt-24" id="location-map">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-6">Location</h2>
          </Reveal>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
            <Reveal variant="up" className="lg:col-span-2">
              <dl className="bg-[#FAF8F3] border border-[#e5dcc5] rounded-lg p-5 sm:p-6 space-y-5 text-[15px] leading-relaxed">
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#A8822E] mb-1">
                    Address
                  </dt>
                  <dd className="text-[#12302a]">
                    <address className="not-italic">
                      Embassy Origins, Chapparkallu Road, Tarahunise, Bettahalsur, Jala Hobli,
                      Bengaluru North, Karnataka 562157
                    </address>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#A8822E] mb-1">
                    Map pin
                  </dt>
                  <dd>
                    <a
                      href={MAP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${linkCls} tabular-nums`}
                    >
                      {MAP_PIN}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#A8822E] mb-1">
                    Access
                  </dt>
                  <dd className="text-gray-700">
                    Chapparkallu Road, off NH-44 (Bellary Road, the airport highway), close to IVC
                    Road and Stonehill International School
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal variant="up" delay={90} className="lg:col-span-3">
              <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md border border-[#e5dcc5]">
                <iframe
                  src={MAP_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Embassy Riverine location map — Chapparkallu Road, Tarahunise, North Bangalore"
                />
              </div>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-[#A8822E] font-semibold link-wipe"
              >
                View on Google Maps →
              </a>
            </Reveal>
          </div>

          <Reveal variant="up" className="mt-8">
            <p className="text-[15px] text-gray-700 leading-relaxed">
              Distances on this page are measured by road from the township gate. Drive times are
              off-peak and will stretch in the evening; check your own commute hour on an{" "}
              <Link href="/" className={linkCls}>
                Embassy Riverine
              </Link>{" "}
              site visit, which we run seven days a week with pickup from Hebbal or Yelahanka.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tarahunise, Bettahalsur, Yelahanka or Devanahalli? */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="place-names"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-3">
              Tarahunise, Bettahalsur, Yelahanka or Devanahalli?
            </h2>
            <p className="text-[15px] text-gray-700 leading-relaxed mb-8">
              Four names appear in searches for this project and all four are the same place,
              seen from different distances.
            </p>
          </Reveal>

          <ul className="grid sm:grid-cols-2 gap-5">
            {placeNames.map((p, i) => (
              <Reveal
                as="li"
                key={p.name}
                variant="up"
                delay={(i % 2) * 80}
                className="bg-white rounded-lg p-6 border-l-[3px] border-[#C8A24A] shadow-sm text-[15px] text-gray-700 leading-relaxed"
              >
                <strong className="text-[#12302a]">{p.name}</strong>
                {p.rest}
              </Reveal>
            ))}
          </ul>

          <Reveal variant="up" className="mt-8">
            <p className="text-[15px] text-gray-700 leading-relaxed">
              So: if you have been searching{" "}
              <Link href="/villas-configurations" className={linkCls}>
                villas
              </Link>{" "}
              in Yelahanka or villas in Devanahalli, the site sits between the two, on the highway
              that links them.{" "}
              <strong className="text-[#12302a]">
                Embassy Riverine villas off Airport Road
              </strong>{" "}
              is the honest description.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Connectivity */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="connectivity">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-8">Connectivity</h2>
          </Reveal>

          <div className="grid md:grid-cols-5 gap-8 md:gap-10 items-start">
            <ul className="md:col-span-3 space-y-4">
              {connectivity.map((c, i) => (
                <Reveal
                  as="li"
                  key={c.mode}
                  variant="up"
                  delay={i * 60}
                  className="bg-[#FAF8F3] rounded-lg p-5 sm:p-6 border border-[#e5dcc5]"
                >
                  <h3 className="text-base font-bold text-[#12302a] mb-1.5">{c.mode}</h3>
                  <p className="text-[15px] text-gray-700 leading-relaxed">{c.body}</p>
                </Reveal>
              ))}
            </ul>

            <Reveal variant="zoom" delay={100} className="md:col-span-2">
              <div className="relative aspect-[4/3] md:aspect-[3/4] rounded-xl overflow-hidden border border-[#e5dcc5] shadow-sm">
                <Image
                  src={metro}
                  alt="Representative image of a metro station platform, for the Namma Metro Blue Line towards the airport"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  quality={74}
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Distances */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="distances"
      >
        <Reveal variant="up" className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-6">Distances</h2>
          <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm bg-white">
            <table className="w-full text-sm text-left min-w-[480px]">
              <caption className="sr-only">
                Distances and drive times by road from the Embassy Riverine project gate
              </caption>
              <thead className="bg-[#F6F2E8] text-[#A8822E] uppercase text-[11px] tracking-[0.12em]">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Destination
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Distance
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Drive time
                  </th>
                </tr>
              </thead>
              <tbody>
                {distanceRows.map((d) => (
                  <tr
                    key={d.destination}
                    className="border-t border-[#e5dcc5] hover:bg-[#FAF8F3] transition-colors"
                  >
                    <th scope="row" className="px-5 py-3.5 text-left font-normal text-[#12302a]">
                      {d.destination}
                    </th>
                    <td className="px-5 py-3.5 text-gray-600 whitespace-nowrap">{d.distance}</td>
                    <td className="px-5 py-3.5 text-gray-600 whitespace-nowrap">{d.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 italic mt-4 leading-relaxed">
            Approximate, by road from the project gate. Drive times vary with traffic.
          </p>
        </Reveal>
      </section>

      {/* The Airport Corridor */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="airport-corridor">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <Reveal
            variant="up"
            className="md:col-span-3 space-y-4 text-[15px] text-gray-700 leading-relaxed"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-2">
              The Airport Corridor
            </h2>
            <p>
              Most villa belts in Bangalore grew up around a tech park and then waited years for
              roads. This one grew around an airport that already had a six-lane highway, with
              the aerospace and hardware parks, the international schools and the hospitals
              arriving along it. For buyers comparing the best villa projects near Bangalore
              airport, three things set this location apart: the drive to the terminal does not
              touch city traffic, the employment around it is aerospace, hardware and
              airport-economy rather than IT services alone, and villa land this close to the
              airport is finite. Among the gated communities near Devanahalli airport, Embassy
              Riverine is the lowest-density one from a listed developer: 217{" "}
              <Link href="/villas-configurations" className={linkCls}>
                villas
              </Link>{" "}
              on about 50 acres.
            </p>
            <p>
              That scarcity is also why villas near Devanahalli airport now carry a premium over
              the older villa belts in the east and south, and why Embassy Riverine{" "}
              <Link href="/price" className={linkCls}>
                price
              </Link>{" "}
              per sq ft sits at the top of the North Bangalore range. The land is doing the work.
            </p>
          </Reveal>

          <Reveal variant="zoom" delay={100} className="md:col-span-2">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#e5dcc5] shadow-sm">
              <Image
                src={airport}
                alt="Representative image of aircraft at an airport apron, for Kempegowda International Airport 15 km from Embassy Riverine"
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                quality={74}
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Schools, Hospitals, Workplaces, Shopping and Weekends */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="neighbourhood"
      >
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-5">
          {neighbourhood.map((n, i) => {
            const Icon = n.icon;
            return (
              <Reveal
                key={n.title}
                variant="up"
                delay={(i % 2) * 80}
                className="bg-white rounded-xl p-6 sm:p-7 border-t-[3px] border-[#C8A24A] shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="grid place-items-center w-9 h-9 rounded-full bg-[#F6F2E8] text-[#A8822E] flex-shrink-0">
                    <Icon aria-hidden="true" size={16} />
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-[#12302a]">{n.title}</h2>
                </div>
                <p className="text-[15px] text-gray-700 leading-relaxed">{n.body}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Location and the Rest of the Project */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="location-and-the-project">
        <Reveal
          variant="up"
          className="max-w-5xl mx-auto space-y-4 text-[15px] text-gray-700 leading-relaxed"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-2">
            Location and the Rest of the Project
          </h2>
          <p>
            The location is the same for every villa &amp; configuration; what differs inside the
            gate is the plot. The{" "}
            <Link href="/master-plan" className={linkCls}>
              master plan
            </Link>{" "}
            shows where the 4, 4.5 and 5 BHK clusters sit against the stream corridor and the
            central lake, and which plots face the water. The{" "}
            <Link href="/floor-plans" className={linkCls}>
              floor plan
            </Link>{" "}
            page covers the three villa layouts, 4,200 to 6,800 sq ft built-up. The{" "}
            <Link href="/amenities" className={linkCls}>
              amenities
            </Link>{" "}
            page lists the 40,000 sq ft clubhouse and everything around it. Embassy Riverine{" "}
            <Link href="/price" className={linkCls}>
              price
            </Link>{" "}
            starts at <strong className="text-[#12302a]">Rs 14.10 Cr</strong> for the 4 BHK and{" "}
            <strong className="text-[#12302a]">Rs 17.43 Cr</strong> for the 4.5 BHK, with the 5
            BHK on request; the full working is on the{" "}
            <Link href="/price" className={linkCls}>
              Price
            </Link>{" "}
            page.
          </p>
          <p>
            If your search was villas for sale in Bettahalsur, villas for sale on IVC Road,
            Bangalore, or luxury villas for sale in Yelahanka, this is the project those searches
            point to; the{" "}
            <Link href="/villas-configurations" className={linkCls}>
              villa &amp; configuration table
            </Link>{" "}
            is the next thing to read.
          </p>
        </Reveal>
      </section>

      <FaqAccordion
        faqs={locationFaqs}
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
            for the location map with your plot marked, an Embassy Riverine site visit on any day
            of the week with pickup from Hebbal or Yelahanka, the master plan and{" "}
            <Link href="/floor-plans" className={linkCls}>
              floor plan
            </Link>{" "}
            set, availability by{" "}
            <Link href="/villas-configurations" className={linkCls}>
              villa &amp; configuration
            </Link>
            , the cost sheet in writing, and home-loan comparison across lenders.
          </p>
        }
      />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
