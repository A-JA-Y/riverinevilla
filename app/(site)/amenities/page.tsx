import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import EnquiryButton from "@/components/EnquiryButton";
import EnclaveGallery from "@/components/EnclaveGallery";
import FaqAccordion from "@/components/FaqAccordion";
import ContactBlock from "@/components/ContactBlock";
import Reveal from "@/components/Reveal";
import StickyDownloadButton from "@/components/StickyButton";
import { projectSchema, breadcrumb } from "@/data/project";

import loungeBar from "@/assets/lounge-bar.webp";
import outdoorPool from "@/assets/outdoor-pool.webp";
import petPark from "@/assets/pet-park.webp";
import townshipTrees from "@/assets/township-trees.webp";
import gymnasium from "@/assets/gymnasium.webp";
import spa from "@/assets/spa.webp";
import library from "@/assets/library.webp";
import banquetHall from "@/assets/banquet-hall.webp";
import tennisCourt from "@/assets/tennis-court.webp";
import padelCourt from "@/assets/padel-court.webp";
import townshipLake from "@/assets/township-lake.webp";
import joggingTrail from "@/assets/jogging-trail.webp";

const META_TITLE = "Embassy Riverine Amenities | 40,000 Sq Ft Clubhouse & Lake";
const META_DESCRIPTION =
  "Embassy Riverine amenities: 40,000 sq ft clubhouse with heated indoor pool, spa and squash, outdoor pool, tennis, padel, pickleball, trails and pet park.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: "/amenities" },
  keywords: [
    "Embassy Riverine amenities",
    "Embassy Riverine clubhouse",
    "40,000 sq ft clubhouse",
    "heated indoor pool",
    "padel and pickleball courts",
    "riparian jogging and cycling trails",
    "pet park",
    "senior citizens' zone",
    "best villa projects in North Bangalore",
    "luxury homes in Bangalore",
    "gated community near Devanahalli airport",
    "Embassy Riverine price per sq ft",
    "Embassy Riverine location",
    "Embassy Riverine site visit",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/amenities",
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

/** The four amenity groups, exactly as the amenities copy groups them. */
const amenityList: {
  title: string;
  items: string[];
  image: StaticImageData;
  alt: string;
}[] = [
  {
    title: "Clubhouse, 40,000 sq ft",
    items: [
      "Heated indoor swimming pool",
      "Gymnasium and yoga pavilion",
      "Spa with steam and sauna",
      "Squash court",
      "Business lounge and library",
      "Lounge bar and cafe",
      "Indoor games room",
      "Banquet hall with guest rooms",
    ],
    image: loungeBar,
    alt: "Representative image of a clubhouse lounge and lobby",
  },
  {
    title: "Sport and outdoors",
    items: [
      "Outdoor resort pool",
      "Central lake",
      "Floodlit tennis court",
      "Padel and pickleball courts",
      "Basketball and badminton courts",
      "Cricket practice nets",
      "Putting green",
      "Skating rink",
    ],
    image: outdoorPool,
    alt: "Representative image of an outdoor resort pool, one of the Embassy Riverine amenities",
  },
  {
    title: "Family and landscape",
    items: [
      "Kids' club and adventure play park",
      "Family pavilions and function lawn",
      "Barbecue pavilion and cabanas",
      "Open-air amphitheatre",
      "Riparian jogging and cycling trails",
      "Elevated sky walk and tree walk",
      "Pet park",
      "Senior citizens' zone",
    ],
    image: petPark,
    alt: "Representative image of residents walking dogs in a landscaped pet park",
  },
  {
    title: "Estate infrastructure",
    items: [
      "24x7 gated security with CCTV",
      "Fully underground cabling",
      "Power backup for essential circuits",
      "Sewage treatment with water reuse",
      "Rainwater harvesting of 5.37 crore litres",
      "EV charging provision",
      "Solar hot water",
      "Zero-discharge water planning",
    ],
    image: townshipTrees,
    alt: "Representative image of retained tree cover and a water channel across a landscaped estate",
  },
];

const introFigures = [
  { figure: "40,000 sq ft", label: "clubhouse beside the central lake" },
  { figure: "19 acres", label: "of reserved open space" },
  { figure: "217 villas", label: "on about 50 acres" },
  { figure: "Under 4.5", label: "homes to the acre" },
];

const clubhouseShots = [
  { src: gymnasium, caption: "Gymnasium", alt: "Representative image of a clubhouse gymnasium" },
  { src: spa, caption: "Spa", alt: "Representative image of a spa treatment room" },
  { src: library, caption: "Library", alt: "Representative image of a clubhouse library" },
  { src: banquetHall, caption: "Banquet hall", alt: "Representative image of a banquet hall set for a function" },
];

const sportShots = [
  { src: tennisCourt, caption: "Floodlit tennis", alt: "Representative image of a tennis court surface" },
  { src: padelCourt, caption: "Padel and pickleball", alt: "Representative image of a padel racquet and ball on a court" },
  { src: townshipLake, caption: "Central lake", alt: "Representative image of open water on the central lake" },
];

const estateFigures = [
  { figure: "24x7", label: "gated security with CCTV" },
  { figure: "5.37 crore litres", label: "rainwater harvesting storage" },
  { figure: "Underground", label: "cabling, no overhead lines" },
  { figure: "IGBC Gold", label: "certification targeted for the township" },
];

const wayYouLive = [
  {
    label: "Early mornings",
    body: "trails along the corridor, the gym, the heated indoor pool, the yoga pavilion.",
  },
  {
    label: "Working from home",
    body: "business lounge and library in the clubhouse, cafe for the calls you do not want in the study.",
  },
  {
    label: "Children",
    body: "kids' club, adventure play park, skating rink, cricket nets, basketball and badminton.",
  },
  {
    label: "Parents and grandparents",
    body: "senior citizens' zone, tree walk, putting green, family pavilions.",
  },
  {
    label: "Hosting",
    body: "banquet hall with guest rooms, function lawn, barbecue pavilion and cabanas, amphitheatre.",
  },
  {
    label: "Racquet sports",
    body: "floodlit tennis, padel, pickleball, squash, badminton.",
  },
  {
    label: "Pets",
    body: "pet park, and 19 acres of walking.",
  },
];

const locationFigures = [
  { figure: "15 km", label: "Kempegowda International Airport, 20 to 25 minutes" },
  { figure: "2.5 km", label: "Stonehill International School" },
  { figure: "3 km", label: "Padukone-Dravid Centre for Sports Excellence" },
];

/** `answer` is the plain text used in the FAQPage JSON-LD; `answerNode`, when set,
 *  is the on-page version carrying the same words with the copy's links. */
const amenitiesFaqs: { question: string; answer: string; answerNode?: ReactNode }[] = [
  {
    question: "What amenities does Embassy Riverine offer?",
    answer:
      "A 40,000 sq ft clubhouse with heated indoor pool, gym, yoga pavilion, spa, squash court, business lounge, library, bar, cafe, games room and banquet hall; an outdoor pool, central lake, floodlit tennis, padel, pickleball, basketball and badminton courts, cricket nets, putting green and skating rink; kids' club and play park, pavilions, function lawn, barbecue area, amphitheatre, trails, sky walk, tree walk, pet park and senior citizens' zone.",
  },
  {
    question: "How big is the Embassy Riverine clubhouse?",
    answer:
      "About 40,000 sq ft, placed at the centre of the villa precinct beside the central lake.",
  },
  {
    question: "Is the clubhouse shared with the apartments?",
    answer:
      "The brochure lists it under Embassy Riverine. Confirm with us whether it is reserved for the villas or shared with Embassy South Reserve before you book; it affects both crowding and maintenance.",
  },
  {
    question: "Is there a swimming pool?",
    answer:
      "Two: a heated indoor pool inside the clubhouse and an outdoor resort pool by the lake.",
  },
  {
    question: "Which sports facilities are there?",
    answer:
      "Floodlit tennis, padel, pickleball, basketball, badminton and squash courts, cricket practice nets, a putting green and a skating rink.",
  },
  {
    question: "Are there facilities for children and senior citizens?",
    answer:
      "Yes. A kids' club and adventure play park for children; a senior citizens' zone, tree walk and putting green for older residents.",
  },
  {
    question: "Is there a pet park?",
    answer: "Yes, a dedicated pet park, plus 19 acres of open space and trails.",
  },
  {
    question: "Do the amenities cost extra?",
    answer:
      "Clubhouse membership where applicable, the corpus fund and maintenance advance are charged over the base price, and monthly maintenance applies after handover. Ask for the rates in writing.",
    answerNode: (
      <>
        Clubhouse membership where applicable, the corpus fund and maintenance advance are
        charged over the base{" "}
        <Link href="/price" className={linkCls}>
          price
        </Link>
        , and monthly maintenance applies after handover. Ask for the rates in writing.
      </>
    ),
  },
];

/* On-page answers carry the doc's links; the JSON-LD below keeps the plain text. */
const faqItems = amenitiesFaqs.map((f) => ({
  question: f.question,
  answer: f.answerNode ?? f.answer,
}));

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    projectSchema,
    {
      "@type": "FAQPage",
      mainEntity: amenitiesFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Amenities", path: "/amenities" },
    ]),
  ],
};

function Dot({ className = "bg-[#C8A24A]" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${className}`}
    />
  );
}

export default function AmenitiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageBanner
        eyebrow="Lifestyle"
        title="Embassy Riverine Amenities – 40,000 Sq Ft Clubhouse, Lake, Courts and 19 Acres of Green"
        subtitle={
          <>
            Embassy Riverine amenities are built on more land than most{" "}
            <Link href="/villas-configurations" className={linkCls}>
              villa
            </Link>{" "}
            projects in the city have in total. The clubhouse is 40,000 sq ft and sits beside a
            central lake in the middle of the villa precinct. Around it are an outdoor resort
            pool, courts for tennis, padel, pickleball, basketball, badminton and squash, cricket
            nets, a putting green and a skating rink. Beyond those, 19 acres of reserved open
            space carry the jogging and cycling trails along the stream corridor, a sky walk and
            tree walk through the retained canopy, a pet park and a senior citizens&apos; zone.
          </>
        }
      />

      {/* Intro */}
      <section className="w-full bg-white py-14 md:py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up" className="space-y-5">
            <p className="text-[17px] leading-relaxed text-gray-700">
              Amenities are where most of the best villa projects in North Bangalore look alike
              on paper. What separates Embassy Riverine is the ground they sit on: 217 villas on
              about 50 acres, under 4.5 homes to the acre, so the facilities are spread through
              the precinct rather than stacked on a podium. The full list is below, grouped as
              the brochure groups it, followed by what each group means for the way you will
              actually live here.
            </p>
            <div className="pt-2">
              <EnquiryButton>Get the Full Amenities List</EnquiryButton>
            </div>
          </Reveal>

          <ul className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {introFigures.map((f, i) => (
              <Reveal
                as="li"
                key={f.figure}
                variant="up"
                delay={i * 70}
                className="bg-[#FAF8F3] border border-[#e5dcc5] rounded-lg p-4 sm:p-5 text-center"
              >
                <p className="text-xl sm:text-2xl font-bold text-[#12302a] leading-tight">
                  {f.figure}
                </p>
                <p className="text-xs sm:text-[13px] text-gray-600 mt-1.5 leading-snug">
                  {f.label}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Amenities */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="amenities-list"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-8">Amenities</h2>
          </Reveal>

          <ul className="grid md:grid-cols-2 gap-6">
            {amenityList.map((group, i) => (
              <Reveal
                as="li"
                key={group.title}
                variant="up"
                delay={(i % 2) * 90}
                className="bg-white rounded-xl overflow-hidden border border-[#e5dcc5] shadow-sm"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={group.image}
                    alt={group.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    quality={74}
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-bold text-[#12302a] mb-4">
                    {group.title}
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-gray-700 text-sm">
                        <Dot />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal variant="up" className="mt-8">
            <p className="bg-white border-l-[3px] border-[#C8A24A] rounded-r-lg p-5 text-[15px] text-gray-700 leading-relaxed">
              Ask us for the amenities list exactly as filed with RERA; that version is the one
              that binds the developer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Clubhouse */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="clubhouse">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <Reveal variant="up" className="space-y-4 text-[15px] text-gray-700 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-2">Clubhouse</h2>
            <p>
              The{" "}
              <Link href="/about-embassy-riverine" className={linkCls}>
                Embassy Riverine
              </Link>{" "}
              clubhouse is placed where the{" "}
              <Link href="/master-plan" className={linkCls}>
                master plan
              </Link>{" "}
              puts the most value: at the centre of the villa precinct, on the lake, within
              walking distance of every cluster. 40,000 sq ft is large for 217 homes, and the
              programme inside reflects that.
            </p>
            <p>
              The heated indoor pool is the headline, and it is still unusual among luxury homes
              in Bangalore; it makes the pool usable through the cooler months when outdoor pools
              in the city sit empty. The gymnasium and yoga pavilion, and the spa with steam and
              sauna, cover the daily routine. The squash court and indoor games room cover the
              evenings. The business lounge and library are the quiet floor for anyone who works
              from home and wants a desk that is not in the house. The lounge bar and cafe take
              the social side, and the banquet hall with attached guest rooms handles the family
              function and the overflow guests that come with it.
            </p>
            <p className="bg-[#FAF8F3] border-l-[3px] border-[#C8A24A] rounded-r-lg p-5">
              Ask one question before you book: whether the clubhouse is reserved for the villa
              precinct or shared with the Embassy South Reserve apartments. The answer changes
              how crowded it feels and how its upkeep is split.
            </p>
          </Reveal>

          <ul className="grid grid-cols-2 gap-3 md:gap-4">
            {clubhouseShots.map((shot, i) => (
              <Reveal
                as="li"
                key={shot.caption}
                variant="zoom"
                delay={i * 70}
                className="relative aspect-square rounded-lg overflow-hidden border border-[#e5dcc5]"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 240px"
                  quality={72}
                  className="object-cover"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0b1f1a]/75 via-transparent to-transparent"
                />
                <span className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs font-semibold">
                  {shot.caption}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Sport and Outdoors */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="sport-and-outdoors"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up" className="text-[15px] text-gray-700 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-4">
              Sport and Outdoors
            </h2>
            <p>
              The courts are outdoors and distributed through the precinct, so no cluster is far
              from one. Tennis is floodlit for evening play. Padel and pickleball are the two
              fastest-growing racquet sports in the city and are rarely both on one site.
              Basketball and badminton courts, cricket practice nets, a putting green and a
              skating rink round out the set, and the outdoor resort pool sits by the lake for
              the months the indoor pool is not needed. The central lake itself is the one
              amenity no other gated community near Devanahalli airport can copy; it is where the
              stream corridor widens, and the trails run around it.
            </p>
          </Reveal>

          <ul className="mt-10 grid sm:grid-cols-3 gap-4">
            {sportShots.map((shot, i) => (
              <Reveal
                as="li"
                key={shot.caption}
                variant="zoom"
                delay={i * 80}
                className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#e5dcc5]"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 320px"
                  quality={72}
                  className="object-cover"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0b1f1a]/75 via-transparent to-transparent"
                />
                <span className="absolute bottom-0 left-0 right-0 p-3 text-white text-xs font-semibold">
                  {shot.caption}
                </span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Family and Landscape */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="family-and-landscape">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal variant="zoom" className="order-2 md:order-1">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#e5dcc5] shadow-sm">
              <Image
                src={joggingTrail}
                alt="Representative image of a shaded jogging and cycling trail under mature trees"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                quality={74}
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal
            variant="up"
            className="order-1 md:order-2 space-y-4 text-[15px] text-gray-700 leading-relaxed"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-2">
              Family and Landscape
            </h2>
            <p>
              Nineteen acres of the 85 are reserved open space, and the master plan spreads them
              through the layout instead of walling them into one park. The riparian jogging and
              cycling trails follow the stream under around 4,000 retained and planted trees of
              100 to 120 species. The elevated sky walk and tree walk take you through the canopy
              rather than under it.
            </p>
            <p>
              For children there is a kids&apos; club and an adventure play park. For
              grandparents there is a senior citizens&apos; zone set away from the courts. For the
              household that hosts there are family pavilions, a function lawn, a barbecue
              pavilion with cabanas and an open-air amphitheatre. And for the one member of the
              family most villa projects forget, there is a pet park.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Estate Infrastructure */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="estate-infrastructure"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <Reveal
            variant="up"
            className="md:col-span-3 space-y-4 text-[15px] text-gray-700 leading-relaxed"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-2">
              Estate Infrastructure
            </h2>
            <p>
              This is the part of the amenities list nobody photographs and everyone depends on
              in year ten. Security is 24x7 and gated with CCTV. Cabling runs fully underground,
              so the streets have no overhead lines. Power backup covers essential circuits.
              Water is handled three ways: a sewage treatment plant with treated-water reuse,
              rainwater harvesting with{" "}
              <strong className="text-[#12302a]">5.37 crore litres</strong> of storage, and
              zero-discharge planning across the estate. Each villa has EV charging provision and
              solar hot water. IGBC Gold certification is targeted for the township.
            </p>
          </Reveal>

          <ul className="md:col-span-2 grid grid-cols-2 gap-3">
            {estateFigures.map((f, i) => (
              <Reveal
                as="li"
                key={f.figure}
                variant="zoom"
                delay={i * 70}
                className="bg-white border border-[#e0d6bd] rounded-lg p-4 text-center shadow-sm"
              >
                <p className="text-base sm:text-lg font-bold text-[#12302a] leading-tight">
                  {f.figure}
                </p>
                <p className="text-xs text-gray-600 mt-1.5 leading-snug">{f.label}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Amenities by the Way You Live */}
      <section
        className="w-full bg-[#12302a] py-16 md:py-20 px-6 text-[#F6F2E8]"
        id="amenities-by-the-way-you-live"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F6F2E8] mb-8">
              Amenities by the Way You Live
            </h2>
          </Reveal>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {wayYouLive.map((item, i) => (
              <Reveal
                as="li"
                key={item.label}
                variant="up"
                delay={(i % 3) * 70}
                className="rounded-lg border border-white/12 bg-white/[0.04] p-5 text-[15px] leading-relaxed text-[#F6F2E8]/85"
              >
                <strong className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#C8A24A] mb-2">
                  {item.label}:
                </strong>
                {item.body}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* What the Amenities Cost */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-b border-[#e5dcc5]"
        id="what-the-amenities-cost"
      >
        <Reveal variant="up" className="max-w-5xl mx-auto text-[15px] text-gray-700 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-4">
            What the Amenities Cost
          </h2>
          <p>
            Amenities are not free to run, and the brochure says so. Beyond the villa{" "}
            <Link href="/price" className={linkCls}>
              price
            </Link>
            , budget for clubhouse membership where applicable, the corpus fund and maintenance
            advance at purchase, and monthly maintenance after handover. Fewer homes sharing a
            40,000 sq ft facility means more space per family and a larger share of its upkeep,
            so ask for the maintenance rate per sq ft in writing before you book. Embassy
            Riverine price per sq ft, the full list of charges and a worked example are on the{" "}
            <Link href="/price" className={linkCls}>
              Price
            </Link>{" "}
            page.
          </p>
        </Reveal>
      </section>

      {/* Master Plan, Floor Plan and Villa & Configuration */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="master-plan-floor-plan">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up" className="text-[15px] text-gray-700 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-4">
              Master Plan, Floor Plan and Villa &amp; Configuration
            </h2>
            <p>
              The amenities only make sense on the drawing. The{" "}
              <Link href="/master-plan" className={linkCls}>
                master plan
              </Link>{" "}
              shows the clubhouse and lake at the centre, the corridor and trails running across
              the precinct, and the courts spread between the clusters; it also shows which plots
              of each villa &amp; configuration face the water. The{" "}
              <Link href="/floor-plans" className={linkCls}>
                floor plan
              </Link>{" "}
              page covers what is inside each villa: 4,200, 5,200 and 6,800 sq ft built-up with
              3.4 m floor-to-floor height, private decks, and a pool deck on the 5 BHK. Every{" "}
              <Link href="/villas-configurations" className={linkCls}>
                villa &amp; configuration
              </Link>{" "}
              shares the same amenities; the difference between formats is the house and the
              plot, not the club.
            </p>
          </Reveal>

          <Reveal variant="up" className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/master-plan"
              className="btn-sheen inline-flex items-center justify-center bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs font-bold uppercase tracking-[0.16em] px-7 py-4 rounded transition-colors"
            >
              See the Master Plan
            </Link>
            <Link
              href="/floor-plans"
              className="inline-flex items-center justify-center border border-[#C8A24A] text-[#12302a] hover:bg-[#C8A24A] hover:text-white text-xs font-bold uppercase tracking-[0.16em] px-7 py-4 rounded transition-colors"
            >
              Explore Floor Plans
            </Link>
          </Reveal>
        </div>
      </section>

      <EnclaveGallery />

      {/* Location */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="location">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up" className="text-[15px] text-gray-700 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-4">Location</h2>
            <p>
              Embassy Riverine{" "}
              <Link href="/location-connectivity" className={linkCls}>
                location
              </Link>
              : Chapparkallu Road, Tarahunise, in the Bettahalsur belt just off NH-44, 15 km and
              20 to 25 minutes from Kempegowda International Airport, 2.5 km from Stonehill
              International School and 3 km from the Padukone-Dravid Centre for Sports
              Excellence, which is worth knowing if the sports amenities inside the gates are not
              enough. Distances and the map are on the{" "}
              <Link href="/location-connectivity" className={linkCls}>
                location
              </Link>{" "}
              page.
            </p>
          </Reveal>

          <ul className="mt-8 grid sm:grid-cols-3 gap-4">
            {locationFigures.map((f, i) => (
              <Reveal
                as="li"
                key={f.figure}
                variant="up"
                delay={i * 70}
                className="bg-[#FAF8F3] rounded-lg p-5 border-t-[3px] border-[#C8A24A]"
              >
                <p className="text-2xl font-bold text-[#12302a] leading-tight">{f.figure}</p>
                <p className="text-sm text-gray-600 mt-1.5 leading-snug">{f.label}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FaqAccordion
        faqs={faqItems}
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
              Contact
            </Link>{" "}
            us for the amenities list as filed with RERA, clubhouse and maintenance terms, the{" "}
            <Link href="/master-plan" className={linkCls}>
              master plan
            </Link>{" "}
            and{" "}
            <Link href="/floor-plans" className={linkCls}>
              floor plan
            </Link>{" "}
            set, the cost sheet in writing, an Embassy Riverine site visit on any day of the week
            with pickup from Hebbal or Yelahanka, and home-loan comparison across lenders.
          </p>
        }
      />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
