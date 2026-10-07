import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import FaqAccordion from "@/components/FaqAccordion";
import ContactBlock from "@/components/ContactBlock";
import Reveal from "@/components/Reveal";
import StickyDownloadButton from "@/components/StickyButton";
import { SITE_URL, configurations, projectSchema, breadcrumb } from "@/data/project";

const META_TITLE = "About Embassy Group | Embassy Villas & Projects in Bangalore";
const META_DESCRIPTION =
  "Embassy Group, Bengaluru, est. 1993: 85–100 million sq ft built, sponsor of India's first REIT, and developer behind Embassy villas like Embassy Riverine.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: "/about-embassy-group" },
  keywords: [
    "Embassy Group",
    "Embassy villas",
    "Embassy Group villa projects in Bangalore",
    "Embassy villas for sale North Bangalore",
    "Embassy Group new launch villas",
    "Embassy Boulevard villas",
    "Embassy Origins villas price",
    "Embassy villas Bettahalsur",
    "Embassy Knowledge Park",
    "Embassy Developments Limited",
    "Embassy Office Parks REIT",
    "Embassy Springs",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/about-embassy-group",
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
  { label: "Founded", value: "1993, Bengaluru" },
  { label: "Chairman and Managing Director", value: "Jitendra Virwani" },
  { label: "Delivered", value: "roughly 85 to 100 million sq ft" },
  {
    label: "Sectors",
    value:
      "commercial office parks, residential, hospitality, industrial and warehousing, retail, education",
  },
  {
    label: "Markets",
    value: "Bengaluru, Chennai, Hyderabad, Pune, Coimbatore, Trivandrum, Serbia, Malaysia",
  },
  {
    label: "Best known for",
    value: "Manyata Embassy Business Park, Embassy TechVillage, Embassy GolfLinks",
  },
  {
    label: "REIT",
    value:
      "sponsor of Embassy Office Parks REIT (2019), India’s first listed REIT and Asia’s largest office REIT by area",
  },
  {
    label: "Residential company",
    value: "Embassy Developments Limited, listed on the BSE and NSE",
  },
  {
    label: "Education",
    value: "Stonehill International School and Embassy Academy, around 42,000 students",
  },
];

const edlFigures = [
  { value: "42.65%", label: "controlling stake taken by Embassy Group, January 2025" },
  { value: "6", label: "North Bengaluru launches guided for FY26" },
  { value: "Rs 10,300 crore", label: "combined gross development value of those launches" },
  { value: "70%", label: "of every rupee you pay held in a designated RERA account" },
];

const timeline = [
  { when: "1993", text: "Embassy Group founded in Bengaluru" },
  { when: "2019", text: "Sponsors Embassy Office Parks REIT, India’s first listed REIT" },
  { when: "January 2025", text: "Takes a controlling stake in Embassy Developments Limited" },
  { when: "FY26", text: "Six North Bengaluru launches guided, Rs 10,300 crore GDV" },
  {
    when: "9 September 2026",
    text: "Embassy Riverine and Embassy South Reserve registered with Karnataka RERA",
  },
  { when: "15 September 2026", text: "Embassy Origins launched" },
];

const groupFaqs = [
  {
    question: "Who is the developer of Embassy Riverine?",
    answer:
      "Embassy Developments Limited, the listed residential arm of Embassy Group, which was founded in Bengaluru in 1993.",
  },
  {
    question: "How many Embassy villa projects are there in Bangalore?",
    answer:
      "In North Bangalore, three that a villa buyer will compare: Embassy Boulevard at Yelahanka, the plots in Embassy Springs at Devanahalli, and Embassy Riverine at Tarahunise.",
  },
  {
    question: "Is Embassy Riverine better than Embassy Springs?",
    answer:
      "They are different products. Springs is a plotted township near the airport where you build; Riverine is finished independent villas with a fixed floor plan inside the Embassy Origins township. The blog compares them in detail.",
  },
  {
    question: "Is Embassy Group a listed company?",
    answer:
      "Embassy Developments Limited, which develops the group's residential projects including Embassy Riverine, is listed on the BSE and NSE. Embassy Office Parks REIT, which the group sponsored, is also listed.",
  },
  {
    question: "What has Embassy Group built in Bangalore?",
    answer:
      "Manyata Embassy Business Park, Embassy TechVillage and Embassy GolfLinks on the commercial side; Embassy ONE, Embassy Lake Terraces, Embassy Boulevard and Embassy Springs on the residential side.",
  },
  {
    question: "What is Embassy Origins?",
    answer:
      "An 85-acre township at Tarahunise launched on 15 September 2026, holding the Embassy Riverine villas and the Embassy South Reserve apartments.",
  },
  {
    question: "Is Embassy Riverine RERA approved?",
    answer:
      "Yes. PRM/KA/RERA/1251/309/PR/090926/008924, registered 9 September 2026, filed completion 30 September 2032.",
  },
  {
    question: "Does Embassy Group run Stonehill International School?",
    answer: "Yes. Stonehill is a group-run school 2.5 km from Embassy Riverine.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#developer`,
      name: "Embassy Developments Limited",
      description:
        "The listed residential arm of Embassy Group, listed on the BSE and NSE, and the developer named on the Embassy Riverine RERA certificate.",
      parentOrganization: {
        "@type": "Organization",
        name: "Embassy Group",
        foundingDate: "1993",
        foundingLocation: { "@type": "Place", name: "Bengaluru" },
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    },
    projectSchema,
    {
      "@type": "FAQPage",
      mainEntity: groupFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "About Embassy Group", path: "/about-embassy-group" },
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

export default function AboutEmbassyGroupPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageBanner
        eyebrow="The Developer"
        title="About Embassy Group – Embassy Villas and Villa Projects in Bangalore"
        subtitle={null}
      />

      {/* Intro */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="overview">
        <Reveal variant="up" className="max-w-5xl mx-auto space-y-5 text-gray-700 leading-relaxed">
          <p className="text-[17px] text-gray-800">
            Embassy Group is the Bengaluru developer behind{" "}
            <Link href="/" className={linkCls}>
              Embassy Riverine
            </Link>
            . Founded in 1993 and led by Chairman and Managing Director Jitendra Virwani, it
            has built roughly{" "}
            <strong className="text-[#12302a]">85 to 100 million sq ft</strong>{" "}
            across office parks, homes, hotels, industrial, retail and education assets in Bengaluru,
            Chennai, Hyderabad, Pune, Coimbatore and Trivandrum, with projects in Serbia and
            Malaysia. Most of that footprint is commercial, which matters: it is a landlord to
            much of the city&apos;s office market and sponsored India&apos;s first listed REIT
            in 2019.
          </p>
          <p className="text-[15px]">
            Embassy villas are a smaller, older line in the same portfolio: Embassy Boulevard
            at Yelahanka, the villa plots inside Embassy Springs at Devanahalli, and now{" "}
            <Link href="/about-embassy-riverine" className={linkCls}>
              Embassy Riverine
            </Link>
            , the 217-villa precinct of Embassy Origins at Tarahunise. This page is about the
            group, its listed residential company, its villa track record in North Bangalore,
            and what any of it should mean to you when you read the{" "}
            <Link href="/price" className={linkCls}>
              price sheet
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* Embassy Group at a Glance */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="at-a-glance"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-8">
              Embassy Group at a Glance
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

      {/* Embassy Developments Limited */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="embassy-developments-limited">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <Reveal
            variant="up"
            className="md:col-span-3 space-y-4 text-[15px] text-gray-700 leading-relaxed"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-2">
              Embassy Developments Limited
            </h2>
            <p>
              The developer named on the Embassy Riverine RERA certificate is Embassy
              Developments Limited, the group&apos;s listed residential arm. In January 2025
              Embassy Group took a 42.65% controlling stake in the company, which has since
              concentrated its pipeline on North Bengaluru. For FY26 it has guided to six
              launches there with a combined gross development value of Rs 10,300 crore;
              Embassy Origins, announced on 15 September 2026, is the largest of them.
            </p>
            <p>
              For a buyer, a listed developer means two things you can check rather than take
              on trust: quarterly disclosures on sales and collections, and the RERA escrow rule
              applying to a company with public shareholders watching it. Seventy per cent of
              every rupee you pay goes into a designated account under Section 4(2)(l)(D) of the
              RERA Act, released only against certified construction.
            </p>
          </Reveal>

          <Reveal variant="zoom" delay={100} className="md:col-span-2">
            <dl className="grid grid-cols-2 gap-px bg-[#e0d6bd] rounded-xl overflow-hidden border border-[#e0d6bd]">
              {edlFigures.map((f) => (
                <div key={f.value} className="bg-[#F6F2E8] p-4 sm:p-5 flex flex-col gap-1.5 min-w-0">
                  <dt className="text-lg sm:text-xl font-bold text-[#12302a] leading-tight">
                    {f.value}
                  </dt>
                  <span aria-hidden="true" className="block h-[2px] w-6 bg-[#C8A24A]/60" />
                  <dd className="text-[12px] sm:text-[13px] text-gray-600 leading-snug">
                    {f.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Embassy Villas in Bangalore */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="embassy-villas-in-bangalore"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-3">
              Embassy Villas in Bangalore
            </h2>
            <p className="text-[15px] text-gray-700 leading-relaxed mb-8">
              Among Embassy Group villa projects in Bangalore, three matter to a North Bangalore
              buyer.
            </p>
          </Reveal>

          <ul className="grid md:grid-cols-3 gap-5">
            <Reveal
              as="li"
              variant="up"
              className="bg-white rounded-xl p-6 border-t-[3px] border-[#C8A24A] shadow-sm text-[15px] text-gray-700 leading-relaxed"
            >
              <h3 className="text-lg font-bold text-[#12302a] leading-snug mb-3">
                Embassy Boulevard, Yelahanka
              </h3>
              <p>
                The group&apos;s established villa community north of the city and the one most
                Riverine buyers have already seen. Embassy Boulevard villas are a completed
                product; Riverine is the 2026 launch inside a far larger township with the
                stream corridor and a 40,000 sq ft clubhouse. The two are compared properly{" "}
                <Link href="/blogs/villa-projects-north-bangalore-2026" className={linkCls}>
                  on the blog
                </Link>
                .
              </p>
            </Reveal>

            <Reveal
              as="li"
              variant="up"
              delay={90}
              className="bg-white rounded-xl p-6 border-t-[3px] border-[#C8A24A] shadow-sm text-[15px] text-gray-700 leading-relaxed"
            >
              <h3 className="text-lg font-bold text-[#12302a] leading-snug mb-3">
                Embassy Springs, Devanahalli
              </h3>
              <p>
                A 288-acre township closer to the airport, sold largely as plots. If you want to
                build your own villa it is the Embassy option; if you want a finished{" "}
                <Link href="/villas-configurations" className={linkCls}>
                  villa &amp; configuration
                </Link>{" "}
                with a fixed{" "}
                <Link href="/floor-plans" className={linkCls}>
                  floor plan
                </Link>
                , it is not.
              </p>
            </Reveal>

            <Reveal
              as="li"
              variant="up"
              delay={180}
              className="bg-white rounded-xl p-6 border-t-[3px] border-[#C8A24A] shadow-sm text-[15px] text-gray-700 leading-relaxed"
            >
              <h3 className="text-lg font-bold text-[#12302a] leading-snug mb-3">
                Embassy Riverine, Tarahunise
              </h3>
              <p>
                The newest of the Embassy villas for sale North Bangalore has: 217 independent
                villas in 4, 4.5 and 5 BHK on 2,400 to 5,400 sq ft plots, inside the 85-acre
                Embassy Origins township, RERA registered September 2026. Embassy Origins villas
                price starts at <strong className="text-[#12302a]">Rs 14.10 Cr</strong>; the
                same project appears on some portals as Embassy Knowledge Park or as Embassy
                villas Bettahalsur, and the price is on the{" "}
                <Link href="/price" className={linkCls}>
                  Price page
                </Link>{" "}
                whichever name you searched.
              </p>
            </Reveal>
          </ul>

          <Reveal variant="up">
            <p className="text-[15px] text-gray-700 leading-relaxed mt-8">
              Among Embassy Group new launch villas, Riverine is the only one with a township of
              this scale behind it, which is why it is also the most expensive per sq ft.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why the Commercial Record Matters */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="why-the-commercial-record-matters">
        <Reveal variant="up" className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-5">
            Why the Commercial Record Matters
          </h2>
          <p className="text-[15px] text-gray-700 leading-relaxed">
            Villa buyers rarely look at a developer&apos;s office portfolio, and they should.
            Manyata, TechVillage and GolfLinks are multi-million sq ft campuses delivered and
            leased to global tenants, and the REIT that holds them reports to public investors
            every quarter. That is the balance sheet standing behind an 85-acre township where
            the villa precinct is 217 homes and the apartment phase is 855 more. A township{" "}
            <Link href="/master-plan" className={linkCls}>
              master plan
            </Link>{" "}
            with a 40,000 sq ft clubhouse, underground cabling, a sewage treatment plant and
            5.37 crore litres of rainwater storage is infrastructure, and infrastructure is what
            the group has built for thirty years.
          </p>
          <p className="mt-8 text-lg md:text-xl font-semibold text-[#12302a] leading-snug border-l-[3px] border-[#C8A24A] pl-5">
            The amenities on a brochure are only as good as the developer&apos;s record of
            finishing them.
          </p>
        </Reveal>
      </section>

      {/* Timeline */}
      <section
        className="w-full bg-[#F6F2E8] py-16 md:py-20 px-6 border-y border-[#e0d6bd]"
        id="timeline"
      >
        <div className="max-w-3xl mx-auto">
          <Reveal variant="up" className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] leading-tight">
              Timeline
            </h2>
          </Reveal>

          <ol className="relative border-l-2 border-[#e0d6bd] ml-3 space-y-8">
            {timeline.map((m, i) => (
              <Reveal
                as="li"
                key={m.when}
                variant="left"
                delay={i * 90}
                className="pl-7 relative"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#C8A24A] ring-4 ring-[#F6F2E8]"
                />
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#A8822E]">
                  <time>{m.when}</time>
                </p>
                <p className="text-gray-700 text-[15px] leading-relaxed mt-1.5">{m.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Stonehill International School */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="stonehill-international-school">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <Reveal variant="up" className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-5">
              Stonehill International School
            </h2>
            <p className="text-[15px] text-gray-700 leading-relaxed">
              The group runs Stonehill International School, 2.5 km from the Embassy Riverine
              gate, a five to seven minute drive. For families choosing a{" "}
              <Link href="/location-connectivity" className={linkCls}>
                location
              </Link>{" "}
              by school run, that is the shortest commute to an IB school in the corridor, and
              it is run by the same group that is building the township.
            </p>
          </Reveal>

          <Reveal
            variant="zoom"
            delay={100}
            className="md:col-span-2 bg-[#F6F2E8] border border-[#e0d6bd] rounded-xl p-6 sm:p-8 text-center"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A8822E] mb-3">
              From the Embassy Riverine gate
            </p>
            <p className="text-3xl font-bold text-[#12302a] leading-tight">2.5 km</p>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              a five to seven minute drive
            </p>
          </Reveal>
        </div>
      </section>

      {/* What This Means for a Riverine Buyer */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="what-this-means-for-a-riverine-buyer"
      >
        <Reveal
          variant="up"
          className="max-w-5xl mx-auto space-y-4 text-[15px] text-gray-700 leading-relaxed"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-2">
            What This Means for a Riverine Buyer
          </h2>
          <p>
            The case for the developer is specific: a listed company, a thirty-year commercial
            record, a REIT sponsor, RERA escrow, and a group that already runs a school on the
            next road. None of that replaces the checks you would make on any villa:
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 bg-white border border-[#e5dcc5] rounded-lg p-5 sm:p-6">
            <li className="flex items-start gap-2.5">
              <Dot />
              <span>
                the RERA carpet area of your{" "}
                <Link href="/villas-configurations" className={linkCls}>
                  villa &amp; configuration
                </Link>
                ,
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Dot />
              <span>
                the sanctioned{" "}
                <Link href="/master-plan" className={linkCls}>
                  master plan
                </Link>
                ,
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Dot />
              <span>the specification annexure to the agreement,</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Dot />
              <span>
                the maintenance terms for the{" "}
                <Link href="/amenities" className={linkCls}>
                  amenities
                </Link>
                ,
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Dot />
              <span>
                and the all-inclusive{" "}
                <Link href="/price" className={linkCls}>
                  cost sheet
                </Link>{" "}
                against the base price.
              </span>
            </li>
          </ul>
          <p className="font-semibold text-[#12302a]">
            A strong developer makes those checks easier to pass. It does not make them
            unnecessary.
          </p>
        </Reveal>
      </section>

      {/* Embassy Riverine */}
      <section className="w-full bg-white py-16 md:py-20 px-6" id="embassy-riverine">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-5">
              Embassy Riverine
            </h2>
            <p className="text-[15px] text-gray-700 leading-relaxed">
              Embassy Riverine price starts at Rs 14.10 Cr for the 4 BHK (4,200 sq ft built-up
              on a 2,400 sq ft plot) and Rs 17.43 Cr for the 4.5 BHK (5,200 sq ft on 3,500 sq
              ft), with the 5 BHK (6,800 sq ft on 5,400 sq ft) on request, at roughly Rs 33,100
              to 37,700 per sq ft. The location is Chapparkallu Road, Tarahunise, 15 km from the
              airport. The{" "}
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
              pages carry the detail; the{" "}
              <Link href="/price" className={linkCls}>
                Price page
              </Link>{" "}
              carries the worked cost example.
            </p>
          </Reveal>

          <ul className="grid sm:grid-cols-3 gap-4 mt-8">
            {configurations.map((c, i) => (
              <Reveal
                as="li"
                key={c.id}
                variant="up"
                delay={i * 80}
                className="bg-[#FAF8F3] rounded-lg border border-[#e5dcc5] p-5"
              >
                <p className="text-sm font-semibold text-[#12302a]">{c.type}</p>
                <p className="text-xl font-bold text-[#A8822E] mt-1">
                  {c.priceFrom.startsWith("Rs") ? `From ${c.priceFrom}` : c.priceFrom}
                </p>
                <p className="text-[13px] text-gray-600 mt-2 leading-snug">
                  {c.builtUp} built-up on a {c.plot} plot
                </p>
              </Reveal>
            ))}
          </ul>

          <Reveal variant="up" className="mt-8">
            <Link
              href="/about-embassy-riverine"
              className="btn-sheen inline-flex items-center justify-center gap-2 bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs font-bold tracking-[0.16em] uppercase px-7 py-4 rounded transition-colors"
            >
              Explore Embassy Riverine
            </Link>
          </Reveal>
        </div>
      </section>

      <FaqAccordion
        faqs={groupFaqs}
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
            for the brochure, the cost sheet in writing, availability by villa &amp;
            configuration, the floor plan and master plan set, an Embassy Riverine site visit
            on any day of the week with pickup from Hebbal or Yelahanka, and home-loan
            comparison across lenders.
          </p>
        }
      />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
