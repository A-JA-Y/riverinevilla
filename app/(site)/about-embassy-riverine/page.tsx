import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import EnquiryButton from "@/components/EnquiryButton";
import AboutRiverineGallery from "@/components/AboutRiverineGallery";
import EnclaveGallery from "@/components/EnclaveGallery";
import FaqAccordion from "@/components/FaqAccordion";
import ContactBlock from "@/components/ContactBlock";
import Reveal from "@/components/Reveal";
import StickyDownloadButton from "@/components/StickyButton";
import corridorImg from "@/assets/riparian-corridor.webp";
import townshipImg from "@/assets/township-85-acres.webp";
import { configurations, rera, projectSchema, breadcrumb } from "@/data/project";

const META_TITLE = "About Embassy Riverine North Bangalore | Embassy Origins";
const META_DESCRIPTION =
  "About Embassy Riverine, North Bangalore: 217 villas on ~50 acres of the 85-acre Embassy Origins township at Tarahunise by Embassy Developments. RERA 2026.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: "/about-embassy-riverine" },
  keywords: [
    "Embassy Riverine",
    "Embassy Riverine North Bangalore",
    "Embassy Riverine Bangalore",
    "Embassy Origins township",
    "Embassy Riverine price",
    "Embassy Riverine location",
    "Embassy Riverine RERA number",
    "Embassy Riverine possession date",
    "Embassy Riverine site visit",
    "Embassy Riverine contact number",
    "Embassy Knowledge Park",
    "Embassy Riverine Knowledge Park",
    "luxury villas in North Bangalore",
    "RERA approved villas North Bangalore",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/about-embassy-riverine",
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
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: ["/og-cover.webp"],
  },
};

const linkCls = "text-[#A8822E] font-semibold link-wipe";

const atAGlance = [
  {
    label: "What",
    value: "217 independent villas, 4, 4.5 and 5 BHK, on 2,400 to 5,400 sq ft plots",
  },
  {
    label: "Where",
    value: "Embassy Origins, Chapparkallu Road, Tarahunise, Bettahalsur, Bengaluru 562157",
  },
  {
    label: "Land",
    value:
      "about 50 acres for the villa precinct within the 85-acre township; under 4.5 villas per acre",
  },
  {
    label: "Open space",
    value: "19 acres reserved; around 4,000 trees of 100 to 120 species",
  },
  { label: "Clubhouse", value: "40,000 sq ft, beside the central lake" },
  { label: "Developer", value: "Embassy Developments Limited (Embassy Group)" },
  { label: "Master planner", value: "Bhumiputra Architecture" },
  { label: "RERA", value: rera.villas },
  {
    label: "Price",
    value: "from Rs 14.10 Cr (4 BHK) and Rs 17.43 Cr (4.5 BHK); 5 BHK on request",
  },
  {
    label: "Possession",
    value: "RERA-filed completion 30 September 2032; phased handover indicated from 2030",
  },
  { label: "Certification", value: "IGBC Gold targeted" },
];

const insideClubhouse = [
  "Heated indoor pool",
  "Gym and yoga pavilion",
  "Spa",
  "Squash court",
  "Business lounge and library",
  "Bar",
  "Cafe",
  "Games room",
  "Banquet hall with guest rooms",
];

const outsideClubhouse = [
  "Resort pool",
  "Floodlit tennis, padel and pickleball courts",
  "Basketball",
  "Badminton",
  "Cricket nets",
  "Putting green",
  "Skating rink",
  "Riparian trails",
  "Sky walk and tree walk",
  "Pet park",
  "Senior citizens’ zone",
];

const distanceList = [
  { place: "Kempegowda International Airport", distance: "15 km", note: "20 to 25 minutes" },
  { place: "Stonehill International School", distance: "2.5 km" },
  { place: "Doddajala, nearest Metro Blue Line alignment point", distance: "7.5 km" },
  { place: "Yelahanka Junction", distance: "12 km" },
  { place: "Hebbal flyover", distance: "21 km" },
];

const reraTimeline = [
  { label: "Embassy Riverine RERA number", value: rera.villas },
  { label: "Embassy South Reserve", value: rera.apartments },
  { label: "Registered", value: rera.registered },
  { label: "Launched", value: "15 September 2026" },
  { label: "RERA-filed completion", value: rera.completion },
  {
    label: "Embassy Riverine possession date",
    value: "phased handover indicated from 2030; the RERA date is the enforceable one",
  },
  {
    label: "Escrow",
    value: "70% of collections held under Section 4(2)(l)(D) of the RERA Act, 2016",
  },
];

const isNot = [
  {
    title: "Not villaments or row houses.",
    body: "Every home is an independent villa on a registered plot of 2,400 to 5,400 sq ft.",
  },
  {
    title: "Not in Devanahalli, and not part of Embassy Springs.",
    body: "It is at Tarahunise, north of Yelahanka, 15 km from the airport.",
  },
  {
    title: "Not a Rs 10 Cr project.",
    body: "The launch price list starts at Rs 14.10 Cr. Lower figures circulating online are pre-launch indications that predate the cost sheet.",
  },
];

const aboutFaqs = [
  {
    question: "What is Embassy Riverine?",
    answer:
      "A community of 217 independent 4, 4.5 and 5 BHK villas by Embassy Developments Limited, forming the villa precinct of the 85-acre Embassy Origins township at Tarahunise, North Bangalore.",
  },
  {
    question: "What is Embassy Origins township?",
    answer:
      "An 85-acre gated township planned around an open stream corridor. It holds the Embassy Riverine villas on about 50 acres, the Embassy South Reserve apartments on the NH-44 edge, and commercial parcels at the gates.",
  },
  {
    question: "Is Embassy Riverine the same as Embassy Knowledge Park?",
    answer:
      "Embassy Knowledge Park is an earlier name some portals use for the township. The RERA-registered name is Embassy Riverine, Embassy Origins.",
  },
  {
    question: "Who is the developer?",
    answer:
      "Embassy Developments Limited, the listed residential arm of Embassy Group, founded in Bengaluru in 1993.",
  },
  {
    question: "Is Embassy Riverine RERA approved?",
    answer:
      "Yes. PRM/KA/RERA/1251/309/PR/090926/008924, registered 9 September 2026, with a filed completion date of 30 September 2032.",
  },
  {
    question: "When was it launched and when is possession?",
    answer:
      "Launched 15 September 2026. Phased handover is indicated from 2030; the RERA-filed completion date is 30 September 2032.",
  },
  {
    question: "How many villas are there?",
    answer:
      "217: 48 four-bedroom, 137 four-and-a-half-bedroom and 32 five-bedroom villas.",
  },
  {
    question: "Who designed the master plan?",
    answer:
      "Bhumiputra Architecture master-planned the township and its landscape of around 4,000 trees.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    projectSchema,
    {
      "@type": "FAQPage",
      mainEntity: aboutFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "About Embassy Riverine", path: "/about-embassy-riverine" },
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

export default function AboutEmbassyRiverinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageBanner
        eyebrow="The Project"
        title="About Embassy Riverine – Villas at Embassy Origins Township, North Bangalore"
        subtitle={null}
      />

      {/* Intro */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="overview">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <Reveal variant="up" className="space-y-5 text-[15px] md:text-base text-gray-700 leading-relaxed">
            <p className="text-[17px] text-gray-800">
              <Link href="/" className={linkCls}>
                Embassy Riverine
              </Link>{" "}
              North Bangalore is a community of{" "}
              <strong className="text-[#12302a]">217 independent villas</strong> by Embassy
              Developments Limited, the listed residential arm of Embassy Group. It forms the
              villa precinct of Embassy Origins, an{" "}
              <strong className="text-[#12302a]">85-acre township</strong> at Tarahunise in the
              Bettahalsur belt, north of Yelahanka and 15 km from Kempegowda International
              Airport. The project was registered with Karnataka RERA on 9 September 2026 and
              launched on 15 September 2026.
            </p>
            <p>
              The{" "}
              <Link href="/" className={linkCls}>
                home page
              </Link>{" "}
              gives you the numbers. This page gives you the project itself: what Embassy
              Origins township is, why the villas sit where they do, what Embassy Riverine is
              and is not, and how the{" "}
              <Link href="/price" className={linkCls}>
                price
              </Link>
              ,{" "}
              <Link href="/villas-configurations" className={linkCls}>
                villa &amp; configuration
              </Link>
              ,{" "}
              <Link href="/floor-plans" className={linkCls}>
                floor plan
              </Link>
              ,{" "}
              <Link href="/master-plan" className={linkCls}>
                master plan
              </Link>
              ,{" "}
              <Link href="/amenities" className={linkCls}>
                amenities
              </Link>{" "}
              and{" "}
              <Link href="/location-connectivity" className={linkCls}>
                location
              </Link>{" "}
              pages fit together.
            </p>
            <div className="pt-2">
              <EnquiryButton>Get the Brochure</EnquiryButton>
            </div>
          </Reveal>

          <Reveal variant="zoom" delay={100} className="w-full h-[260px] sm:h-[340px] md:h-[440px]">
            <AboutRiverineGallery />
          </Reveal>
        </div>
      </section>

      {/* The Project at a Glance */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="at-a-glance"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-8">
              The Project at a Glance
            </h2>
          </Reveal>

          <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {atAGlance.map((item, i) => (
              <Reveal
                key={item.label}
                variant="up"
                delay={(i % 3) * 60}
                className="bg-white rounded-lg border border-[#e5dcc5] border-t-[3px] border-t-[#C8A24A] p-5 min-w-0"
              >
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A8822E] mb-1.5">
                  {item.label}
                </dt>
                <dd className="text-[15px] text-[#12302a] leading-snug break-words">
                  {item.value}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Embassy Origins Township */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="embassy-origins-township">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <Reveal
            variant="up"
            className="md:col-span-3 space-y-4 text-[15px] text-gray-700 leading-relaxed"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-2">
              Embassy Origins Township
            </h2>
            <p>
              Embassy Origins is the township; Embassy Riverine is one part of it. The 85
              acres hold two residential products and a commercial edge. The villas take the
              inner ground along the stream. The apartments, Embassy South Reserve, 855 homes
              from studios to 3.5 BHK, sit on the outer edge against NH-44 and act as a
              buffer. Offices and retail are placed at the township gates so that outside
              traffic stays off the residential roads. Both residential phases were
              RERA-registered on the same day, under consecutive numbers.
            </p>
            <p>
              On some portals the township appears as Embassy Knowledge Park, and the villas
              as Embassy Riverine Knowledge Park. Those listings predate the launch name. The
              RERA-registered name is &quot;Embassy Riverine, Embassy Origins&quot;, and that
              is the one on this site.
            </p>
          </Reveal>

          <Reveal variant="zoom" delay={100} className="md:col-span-2">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#e5dcc5] shadow-sm">
              <Image
                src={townshipImg}
                alt="Aerial view of a villa with a private garden and pool beside the water"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Stream Corridor */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="stream-corridor"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <Reveal variant="zoom" className="md:col-span-2 order-last md:order-first">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#e5dcc5] shadow-sm">
              <Image
                src={corridorImg}
                alt="A natural stream with tree cover retained on both banks"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal
            variant="up"
            delay={100}
            className="md:col-span-3 space-y-4 text-[15px] text-gray-700 leading-relaxed"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-2">
              The Stream Corridor
            </h2>
            <p>
              What makes Embassy Riverine Bangalore&apos;s unusual villa project is a decision
              about water. A natural watercourse crosses the Tarahunise land. The usual move is
              to pipe it underground and build over the top; the master plan by Bhumiputra
              Architecture keeps it open, with a riparian buffer on both banks, and organises
              the villa clusters, the central lake, the clubhouse and the walking trails along
              it. The architects call the approach Natural Intelligence. The practical result
              is the density: <strong className="text-[#12302a]">217 homes on about 50
              acres</strong>, with <strong className="text-[#12302a]">19 acres</strong> held as
              open space and the existing tree cover retained rather than cleared.
            </p>
            <p>
              For a buyer, this is also the{" "}
              <Link href="/price" className={linkCls}>
                price
              </Link>{" "}
              map. Plots that front the corridor or the lake carry the premium within each
              villa &amp; configuration; internal plots sit at the lower end of the band.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Villas */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="the-villas">
        <Reveal variant="up" className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-3">The Villas</h2>
          <p className="text-[15px] text-gray-700 leading-relaxed mb-6">
            Three formats, every one an independent villa on its own registered plot, with no
            shared walls and no apartment-style stacking.
          </p>

          <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm">
            <table className="w-full text-sm text-left min-w-[520px]">
              <caption className="sr-only">
                Embassy Riverine villa formats: villa &amp; configuration, plot, built-up area,
                units and car parks
              </caption>
              <thead className="bg-[#F6F2E8] text-[#A8822E] uppercase text-[11px] tracking-[0.12em]">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Villa &amp; configuration
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold">Plot</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Built-up</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Units</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Car parks</th>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[15px] text-gray-700 leading-relaxed mt-6">
            All three carry a 3.4 m floor-to-floor height, finished ceilings close to 2.9 m in
            the main rooms, marble in the living and dining areas, engineered wood in the
            bedrooms, double-glazed sliding doors to the garden and Grohe, Kohler or TOTO
            fittings or equivalent. The{" "}
            <Link href="/floor-plans" className={linkCls}>
              floor plan
            </Link>{" "}
            page covers what each layout contains; the{" "}
            <Link href="/villas-configurations" className={linkCls}>
              villa &amp; configuration
            </Link>{" "}
            page covers which format suits which household.
          </p>
        </Reveal>
      </section>

      <EnclaveGallery />

      {/* Master Plan and Amenities */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="master-plan-and-amenities">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-3">
              Master Plan and Amenities
            </h2>
            <p className="text-[15px] text-gray-700 leading-relaxed mb-8">
              The master plan places the{" "}
              <strong className="text-[#12302a]">40,000 sq ft clubhouse</strong> and the
              central lake at the centre of the villa precinct, within walking distance of every
              cluster, and spreads the amenities through the layout rather than stacking them on
              a podium.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { label: "Inside the clubhouse", items: insideClubhouse },
              { label: "Outside", items: outsideClubhouse },
            ].map((group, i) => (
              <Reveal
                key={group.label}
                variant="up"
                delay={i * 90}
                className="bg-[#FAF8F3] rounded-lg p-6 border-l-[3px] border-[#C8A24A]"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#A8822E] mb-4">
                  {group.label}
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-gray-700 text-[15px]">
                      <Dot />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up">
            <p className="text-[15px] text-gray-700 leading-relaxed mt-8">
              The{" "}
              <Link href="/master-plan" className={linkCls}>
                master plan
              </Link>{" "}
              page has the drawing and the zoning; the{" "}
              <Link href="/amenities" className={linkCls}>
                amenities
              </Link>{" "}
              page has the full list.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Price */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="price"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <Reveal variant="up" className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-5">Price</h2>
            <p className="text-[15px] text-gray-700 leading-relaxed">
              Embassy Riverine price starts at{" "}
              <strong className="text-[#12302a]">Rs 14.10 Cr</strong> for the 4 BHK and{" "}
              <strong className="text-[#12302a]">Rs 17.43 Cr</strong> for the 4.5 BHK, with the
              5 BHK on request. On built-up area that is roughly Rs 33,100 to Rs 37,700 per sq
              ft, the top of the range among luxury villas in North Bangalore. GST, stamp duty,
              registration and deposits are extra; the booking amount is about 10% on a
              construction-linked plan. The{" "}
              <Link href="/price" className={linkCls}>
                Price page
              </Link>{" "}
              carries the worked example.
            </p>
          </Reveal>

          <Reveal
            variant="zoom"
            delay={100}
            className="md:col-span-2 bg-white border border-[#e0d6bd] rounded-xl p-6 sm:p-7"
          >
            <dl className="divide-y divide-[#e5dcc5]">
              {configurations.map((c) => (
                <div key={c.id} className="flex items-baseline justify-between gap-4 py-3 first:pt-0">
                  <dt className="text-sm font-semibold text-[#12302a]">{c.short}</dt>
                  <dd className="text-lg font-bold text-[#A8822E] whitespace-nowrap">
                    {c.priceFrom.startsWith("Rs") ? `From ${c.priceFrom}` : c.priceFrom}
                  </dd>
                </div>
              ))}
              <div className="pt-3">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A8822E]">
                  Per sq ft, built-up
                </dt>
                <dd className="text-lg font-bold text-[#12302a] mt-1">Rs 33,100 – 37,700</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Location */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="location">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12 items-start">
          <Reveal variant="up" className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-5">Location</h2>
            <p className="text-[15px] text-gray-700 leading-relaxed">
              Embassy Riverine location: Chapparkallu Road, Tarahunise, just off NH-44, 15 km
              and 20 to 25 minutes from the airport without entering the city, 2.5 km from
              Stonehill International School, 12 km from Yelahanka Junction and 21 km from
              Hebbal flyover. The nearest Metro Blue Line alignment point is Doddajala, 7.5 km
              away. The{" "}
              <Link href="/location-connectivity" className={linkCls}>
                location
              </Link>{" "}
              page has the map, the distance table and the place-name explanation (Tarahunise,
              Bettahalsur, Yelahanka, Devanahalli).
            </p>
          </Reveal>

          <Reveal variant="up" delay={100} className="md:col-span-2">
            <dl className="rounded-xl border border-[#e5dcc5] overflow-hidden divide-y divide-[#e5dcc5]">
              {distanceList.map((d) => (
                <div
                  key={d.place}
                  className="flex items-start justify-between gap-4 px-5 py-3.5 bg-white odd:bg-[#FAF8F3]"
                >
                  <dt className="text-sm text-gray-700 leading-snug min-w-0">{d.place}</dt>
                  <dd className="text-right flex-shrink-0">
                    <span className="block text-sm font-bold text-[#12302a] whitespace-nowrap">
                      {d.distance}
                    </span>
                    {d.note ? (
                      <span className="block text-[11px] text-gray-500 whitespace-nowrap">
                        {d.note}
                      </span>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* The Developer */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="the-developer"
      >
        <Reveal variant="up" className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-5">The Developer</h2>
          <div className="bg-white rounded-lg border-l-[3px] border-[#C8A24A] p-6 sm:p-8">
            <p className="text-[15px] text-gray-700 leading-relaxed">
              Embassy Group was founded in Bengaluru in 1993 and has built roughly 85 to 100
              million sq ft of office parks, homes, hotels and industrial and education assets,
              including Manyata Embassy Business Park, Embassy TechVillage and Embassy
              GolfLinks. It sponsored Embassy Office Parks REIT, India&apos;s first listed REIT,
              in 2019. Embassy Developments Limited is the listed residential company; Embassy
              Riverine is one of six North Bengaluru launches it has guided to for FY26. The
              group also runs Stonehill International School, 2.5 km from the project. The{" "}
              <Link href="/about-embassy-group" className={linkCls}>
                About Embassy Group
              </Link>{" "}
              page covers its villa track record in the city.
            </p>
          </div>
        </Reveal>
      </section>

      {/* RERA and Timeline */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="rera-and-timeline">
        <Reveal variant="up" className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-6">
            RERA and Timeline
          </h2>

          <dl className="rounded-lg border border-[#e5dcc5] overflow-hidden divide-y divide-[#e5dcc5]">
            {reraTimeline.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[minmax(0,1fr)] sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] gap-1 sm:gap-6 px-5 py-4 odd:bg-[#FAF8F3] bg-white"
              >
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#A8822E] sm:pt-0.5">
                  {row.label}
                </dt>
                <dd className="text-[15px] text-[#12302a] leading-snug break-words">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="text-[15px] text-gray-700 leading-relaxed mt-6">
            Among RERA approved villas North Bangalore has launched in 2026, this is the one
            with the largest township behind it. Verify the registration at{" "}
            <a
              href={rera.portal}
              target="_blank"
              rel="noopener noreferrer"
              className={linkCls}
            >
              rera.karnataka.gov.in
            </a>{" "}
            before you pay a booking amount.
          </p>
        </Reveal>
      </section>

      {/* What Embassy Riverine Is Not */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="what-embassy-riverine-is-not"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-3">
              What Embassy Riverine Is Not
            </h2>
            <p className="text-[15px] text-gray-700 leading-relaxed mb-8">
              Three things worth clearing up, because portals get them wrong.
            </p>
          </Reveal>

          <ul className="grid md:grid-cols-3 gap-5">
            {isNot.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                variant="up"
                delay={i * 90}
                className="bg-white rounded-xl p-6 border-t-[3px] border-[#C8A24A] shadow-sm text-[15px] text-gray-700 leading-relaxed"
              >
                <strong className="block text-[#12302a] font-bold mb-2 leading-snug">
                  {item.title}
                </strong>{" "}
                {item.body}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FaqAccordion
        faqs={aboutFaqs}
        title="Frequently Asked Questions"
        eyebrow="FAQ"
        className="bg-white"
      />

      <ContactBlock
        className="bg-[#FAF8F3] border-t border-[#e5dcc5]"
        cta="Book a Site Visit"
        intro={
          <p>
            Real Revenue is an authorised channel partner for Embassy Riverine.{" "}
            <Link href="/contact-us" className={linkCls}>
              Contact us
            </Link>{" "}
            for the brochure, the cost sheet in writing, availability by{" "}
            <Link href="/villas-configurations" className={linkCls}>
              villa &amp; configuration
            </Link>
            , the{" "}
            <Link href="/floor-plans" className={linkCls}>
              floor plan
            </Link>{" "}
            and{" "}
            <Link href="/master-plan" className={linkCls}>
              master plan
            </Link>{" "}
            set, an Embassy Riverine site visit on any day of the week with pickup from Hebbal
            or Yelahanka, home-loan comparison across lenders, and NRI documentation and power
            of attorney support.
          </p>
        }
      />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
