import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import FaqAccordion from "@/components/FaqAccordion";
import ContactBlock from "@/components/ContactBlock";
import Reveal from "@/components/Reveal";
import StickyDownloadButton from "@/components/StickyButton";
import BlogsIndexTopicGrid, {
  type IndexPost,
  type IndexTopic,
} from "@/components/BlogsIndexTopicGrid";
import { blogData } from "@/data/blogData";
import { breadcrumb, projectSchema } from "@/data/project";

const META_TITLE = "Embassy Riverine Blog | Review, Price & Buyer Guides";
const META_DESCRIPTION =
  "Embassy Riverine review, buyer's guide, price guides and comparisons with Embassy Boulevard, Embassy Springs and other villa projects in North Bangalore.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  alternates: { canonical: "/blogs" },
  keywords: [
    "Embassy Riverine blog",
    "Embassy Riverine review",
    "Embassy Riverine buyer's guide",
    "Embassy Riverine price",
    "Embassy Riverine investment",
    "Embassy Riverine vs Embassy Boulevard",
    "Embassy Springs",
    "villa projects in North Bangalore",
    "villas in Yelahanka",
    "villas in Devanahalli",
  ],
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    url: "/blogs",
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

const BUYERS_GUIDE = "/blogs/embassy-riverine-north-bangalore-buyers-guide-2026";
const COMPARISON = "/blogs/villa-projects-north-bangalore-2026";

/** "Read by Topic", as listed in the doc. */
const topics: IndexTopic[] = [
  { name: "Buyer's Guide", description: "the full walkthrough before booking" },
  { name: "Price and Finance", description: "cost sheets, taxes, loans, EMI" },
  {
    name: "Comparisons",
    description: "Embassy Riverine against the projects on your shortlist",
  },
  {
    name: "Location and Infrastructure",
    description: "the airport corridor, metro, schools, flood and drainage questions",
  },
  { name: "Embassy Group", description: "the developer's villa projects and track record" },
];

/** Data categories that are listed under a different topic name in the doc. */
const topicAlias: Record<string, string> = {
  "Market Comparison": "Comparisons",
};

/** "Latest Guides" card copy from the doc, keyed by post slug. */
const guideCopy: Record<string, { topic: string; blurb: string; cta: string }> = {
  "villa-projects-north-bangalore-2026": {
    topic: "Comparisons",
    blurb:
      "Embassy Riverine set against Embassy Boulevard, Total Environment After the Rain, Sobha Lifestyle Legacy and Keya Life by the Lake on density, plot size and price per sq ft. Where Rs 33,100 to 37,700 per sq ft sits in the corridor, and what the premium actually buys.",
    cta: "Read the comparison",
  },
  "embassy-riverine-north-bangalore-buyers-guide-2026": {
    topic: "Buyer's Guide",
    blurb:
      "Price, villa & configuration, floor plan, master plan, amenities, location, the RERA number and the possession date in one read, followed by the questions to ask before you pay the booking amount and the risks a brochure will not list.",
    cta: "Read the buyer's guide",
  },
};

const posts: IndexPost[] = [...blogData]
  .sort((a, b) => b.date.localeCompare(a.date))
  .map((b) => {
    const copy = guideCopy[b.slug];
    return {
      slug: b.slug,
      title: b.title,
      image: b.image,
      alt: b.altText || b.title,
      topic: copy?.topic ?? topicAlias[b.category] ?? b.category,
      readTime: b.readTime,
      date: b.date,
      blurb: copy?.blurb ?? b.excerpt,
      cta: copy?.cta ?? "Read the guide",
    };
  });

const whereToStart: { label: string; body: ReactNode }[] = [
  {
    label: "Deciding whether to visit",
    body: (
      <>
        read the{" "}
        <Link href={BUYERS_GUIDE} className={linkCls}>
          buyer&apos;s guide
        </Link>
        , then the{" "}
        <Link href="/price" className={linkCls}>
          Price page
        </Link>{" "}
        for the worked cost example.
      </>
    ),
  },
  {
    label: "Deciding between projects",
    body: (
      <>
        read the{" "}
        <Link href={COMPARISON} className={linkCls}>
          North Bangalore comparison
        </Link>
        , then the{" "}
        <Link href="/master-plan" className={linkCls}>
          master plan page
        </Link>{" "}
        to see what 217 villas on 50 acres looks like on a drawing.
      </>
    ),
  },
  {
    label: "Deciding which villa",
    body: (
      <>
        the{" "}
        <Link href="/villas-configurations" className={linkCls}>
          villa &amp; configuration page
        </Link>{" "}
        for the three formats, the{" "}
        <Link href="/floor-plans" className={linkCls}>
          floor plan page
        </Link>{" "}
        for what is inside each, then{" "}
        <Link href="/contact-us" className={linkCls}>
          ask us
        </Link>{" "}
        which plots face the stream corridor.
      </>
    ),
  },
  {
    label: "Deciding whether it is an investment",
    body: (
      <>
        the Embassy Riverine investment guide below, once it is live; until then, the honest
        short answer is on the{" "}
        <Link href="/#faq" className={linkCls}>
          home page FAQ
        </Link>
        .
      </>
    ),
  },
];

const blogFaqs = [
  {
    question: "Is Embassy Riverine a good investment?",
    answer:
      "No return is promised by anyone, including us. The case rests on land: fewer than 4.5 villas an acre, 15 km from the airport, from a listed developer. Rental yield on a Rs 14 to 20 Cr villa is low; appreciation depends on villa land staying scarce in the corridor. The investment guide sets out both sides.",
  },
  {
    question: "How does Embassy Riverine compare with Embassy Boulevard?",
    answer:
      "Both are Embassy villas north of Yelahanka. Boulevard is the earlier, completed community; Riverine is the 2026 launch inside an 85-acre township with the stream corridor and a 40,000 sq ft clubhouse. The comparison post covers price per sq ft, plot sizes and possession.",
  },
  {
    question: "Is Embassy Riverine better than Embassy Springs?",
    answer:
      "Different products. Springs is a plotted township near Devanahalli; Riverine is built villas at Tarahunise. Which is better depends on whether you want to build or move in. The post covers both.",
  },
  {
    question: "Villas in Yelahanka or villas in Devanahalli: which belt should I look at?",
    answer:
      "Embassy Riverine sits between the two on NH-44. The locality guides compare prices, launches and commute for each belt so you can decide on the corridor before the project.",
  },
  {
    question: "Where is the Embassy Riverine price and floor plan?",
    answer:
      "On the project pages, not the blog. Price, floor plan, master plan, amenities and location each have their own page with brochure figures; the blog links to them rather than repeating them.",
  },
  {
    question: "Can I ask a question the guides do not answer?",
    answer:
      "Yes. Contact us on +91 63566 63535 by call or WhatsApp. If enough people ask the same thing, it becomes the next guide.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    projectSchema,
    {
      "@type": "FAQPage",
      mainEntity: blogFaqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blogs" },
    ]),
  ],
};

export default function BlogsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageBanner
        eyebrow="Insights & Guides"
        title="Embassy Riverine Blog – Reviews, Buyer's Guides and North Bangalore Villa Comparisons"
        subtitle={null}
      />

      {/* Intro */}
      <section className="w-full bg-white py-14 md:py-16 px-6">
        <Reveal
          variant="up"
          className="max-w-5xl mx-auto space-y-5 text-[17px] leading-relaxed text-gray-700"
        >
          <p>
            Everything on this site&apos;s project pages comes from the brochure:{" "}
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
            </Link>
            ,{" "}
            <Link href="/location-connectivity" className={linkCls}>
              location
            </Link>
            . The blog is where we go beyond it. An Embassy Riverine review that separates
            what the developer has committed to from what still needs verifying. A{" "}
            <Link href={BUYERS_GUIDE} className={linkCls}>
              buyer&apos;s guide
            </Link>{" "}
            that walks through the booking amount, the cost sheet and the RERA position.{" "}
            <Link href={COMPARISON} className={linkCls}>
              Comparisons with the other villa projects in North Bangalore
            </Link>{" "}
            the same buyer is looking at, on the numbers that matter: land per home, built-up
            area, price per sq ft and distance to the airport.
          </p>
          <p className="bg-[#FAF8F3] border-l-[3px] border-[#C8A24A] rounded-r-lg p-5 sm:p-6 text-[15px]">
            We are an authorised channel partner, so we have a stake in you buying. The guides
            are written on the assumption that you know that and would rather have the full
            picture, including the risks, before you contact us.
          </p>
        </Reveal>
      </section>

      {/* Read by Topic + Latest Guides (topic cards filter the guides) */}
      <BlogsIndexTopicGrid
        topicsHeading="Read by Topic"
        topicsId="topics"
        postsHeading="Latest Guides"
        postsId="latest-guides"
        topics={topics}
        posts={posts}
        basePath="/blogs"
        noun={["guide", "guides"]}
      />

      {/* Where to Start */}
      <section
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
        id="where-to-start"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-8">
              Where to Start
            </h2>
          </Reveal>

          <ul className="grid sm:grid-cols-2 gap-5">
            {whereToStart.map((item, i) => (
              <Reveal
                as="li"
                key={item.label}
                variant="up"
                delay={i * 70}
                className="bg-white rounded-lg p-6 border-l-[3px] border-[#C8A24A] shadow-sm text-gray-700 text-[15px] leading-relaxed"
              >
                <strong className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#A8822E] mb-2">
                  {item.label}:
                </strong>
                {item.body}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FaqAccordion
        faqs={blogFaqs}
        title="Questions These Guides Answer"
        eyebrow="FAQ"
        className="bg-white"
      />

      <ContactBlock
        cta="Book a Site Visit"
        intro={
          <p>
            Real Revenue is an authorised channel partner for Embassy Riverine. Contact us for
            the brochure and cost sheet, the{" "}
            <Link href="/floor-plans" className={linkCls}>
              floor plan
            </Link>{" "}
            and{" "}
            <Link href="/master-plan" className={linkCls}>
              master plan
            </Link>{" "}
            set, availability by{" "}
            <Link href="/villas-configurations" className={linkCls}>
              villa &amp; configuration
            </Link>
            , an Embassy Riverine site visit on any day of the week with pickup from Hebbal or
            Yelahanka, and home-loan comparison across lenders.
          </p>
        }
      />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
