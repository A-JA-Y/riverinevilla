import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import ModalWrapper from "@/components/ModalWrapper";
import HomePageHeader from "@/components/HomePageHeader";
import ScrollProgress from "@/components/ScrollProgress";
import HomeConfigurations from "@/components/HomeConfigurations";
import HomePrice from "@/components/HomePrice";
import HomeMasterPlan from "@/components/HomeMasterPlan";
import HomeSpecifications from "@/components/HomeSpecifications";
import HomeEmbassyGroup from "@/components/HomeEmbassyGroup";
import HomeRera from "@/components/HomeRera";
import {
  projectSchema,
  agentSchema,
  faqs,
  faqSchema,
  breadcrumb,
  atAGlance,
} from "@/data/project";
import { villaProductSchemas } from "@/data/seoSchema";

/** Home-page meta, as in the SEO doc; openGraph and twitter come from the root layout. */
export const metadata: Metadata = {
  title: "Embassy Riverine Villas | Price, Floor Plan, North Bangalore",
  description:
    "Embassy Riverine villas at Embassy Origins, North Bangalore. 217 RERA-approved 4, 4.5 & 5 BHK villas from Rs 14.10 Cr. Get price, floor plan & site visit.",
  alternates: { canonical: "/" },
};

// Lazy load below-the-fold client sections
const AboutProject = dynamic(() => import("@/components/AboutProject"));
const KeyHighlights = dynamic(() => import("@/components/KeyHighlights"));
const Amenities = dynamic(() => import("@/components/Amenities"));
const PlansSection = dynamic(() => import("@/components/FloorPlan"));
const EmiCalculator = dynamic(() => import("@/components/EmiCalculator"));
const LocationAdvantages = dynamic(() => import("@/components/LocationAdvantages"));
const EnclaveGallery = dynamic(() => import("@/components/EnclaveGallery"));
const FaqAccordion = dynamic(() => import("@/components/FaqAccordion"));
const BlogSection = dynamic(() => import("@/components/BlogSection"));
const NewsSection = dynamic(() => import("@/components/NewsSection"));
const EnquirySection = dynamic(() => import("@/components/EnquirySection"));
const StickyDownloadButton = dynamic(() => import("@/components/StickyButton"));
const Footer = dynamic(() => import("@/components/Footer"));
const FloatingActions = dynamic(() => import("@/components/FloatingActions"));

/** In-copy link styles: on light sections, and on the dark green ones. */
const linkCls = "text-[#A8822E] font-semibold link-wipe";
const darkLinkCls = "text-[#C8A24A] font-semibold link-wipe";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    projectSchema,
    ...villaProductSchemas,
    agentSchema,
    // FAQPage built from the same `faqs` array the accordion below renders
    faqSchema,
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "North Bangalore Villas", path: "/#location" },
      { name: "Embassy Riverine", path: "/#project" },
    ]),
  ],
};

export default function Home() {
  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <ScrollProgress />
      <HomePageHeader />
      {/* The hero carries the page's only <h1>. Lead capture lives inside it:
          right-hand column on desktop, below the copy on phones and tablets */}
      <Hero form={<ContactForm variant="stacked" />} />

      <main className="w-full">
        <ModalWrapper />

        {/* About Embassy Riverine */}
        <AboutProject heading={false} checklist={null}>
          <p>
            Embassy Riverine is the{" "}
            <Link href="/villas-configurations" className={linkCls}>
              villa
            </Link>{" "}
            precinct of Embassy Origins, an 85-acre township by Embassy Developments
            Limited at Tarahunise, in the Bettahalsur belt north of Yelahanka. A natural
            stream runs across the land. The master plan keeps it open instead of piping it
            underground, and the{" "}
            <Link href="/villas-configurations" className={linkCls}>
              villa
            </Link>{" "}
            clusters, the clubhouse and the walking trails are laid out along it.
          </p>
          <p>
            That one decision explains the numbers. 217 villas on roughly 50 acres is fewer
            than 4.5 homes to the acre. 19 acres stay as reserved open space. Around 4,000
            trees of 100 to 120 species are being kept or planted through the site. Every
            home is an independent villa on its own plot with its own car parks and garden.
            There are no apartments inside the villa precinct; Embassy South Reserve, the
            apartment phase, sits on the outer edge of the township.
          </p>
          <p>
            If you are comparing upcoming{" "}
            <Link href="/villas-configurations" className={linkCls}>
              villa
            </Link>{" "}
            projects in North Bangalore, this one stands apart on two counts: land per home
            and ticket size. Everything a buyer usually asks about is covered below:{" "}
            <a href="#configurations" className={linkCls}>
              villa &amp; configuration
            </a>
            ,{" "}
            <a href="#price" className={linkCls}>
              price
            </a>
            ,{" "}
            <a href="#plans" className={linkCls}>
              floor plan
            </a>
            ,{" "}
            <a href="#master-plan" className={linkCls}>
              master plan
            </a>
            ,{" "}
            <a href="#amenities" className={linkCls}>
              amenities
            </a>
            ,{" "}
            <a href="#location" className={linkCls}>
              location
            </a>
            , and how to{" "}
            <a href="#book-site-visit" className={linkCls}>
              contact us
            </a>{" "}
            for a site visit.
          </p>
        </AboutProject>

        {/* About Embassy Riverine → At a glance (h3) */}
        <KeyHighlights
          items={atAGlance}
          eyebrow={null}
          title="At a glance"
          titleAs="h3"
          id="at-a-glance"
        />

        <HomeConfigurations />

        <HomePrice />
        <EmiCalculator />

        <PlansSection />

        <HomeMasterPlan />

        <Amenities
          eyebrow="40,000 sq ft clubhouse"
          title="Amenities"
          intro={
            <p className="text-[15px] md:text-base leading-relaxed text-[#F6F2E8]/85 max-w-3xl mx-auto">
              Embassy Riverine{" "}
              <Link href="/amenities" className={darkLinkCls}>
                amenities
              </Link>{" "}
              centre on a 40,000 sq ft clubhouse and the open landscape around the lake, so
              the list below is spread across the precinct rather than stacked on one
              podium.
            </p>
          }
          footer={
            <p>
              Ask us for the item-by-item{" "}
              <Link href="/amenities" className={darkLinkCls}>
                amenities
              </Link>{" "}
              list as filed with RERA.
            </p>
          }
          cta="Get the Full Amenities List"
        />
        <EnclaveGallery />

        <HomeSpecifications />

        <LocationAdvantages
          eyebrow="Tarahunise, North Bangalore"
          title="Location"
          className="bg-[#FAF8F3] border-t border-[#e5dcc5]"
          intro={
            <p>
              Embassy Riverine{" "}
              <Link href="/location-connectivity" className={linkCls}>
                location
              </Link>
              : Chapparkallu Road, Tarahunise, Bettahalsur, Jala Hobli, Bengaluru 562157,
              just off NH-44 and close to IVC Road, north of Yelahanka. On some portals the
              project appears as Embassy Riverine Tharahunise or Embassy Riverine
              Bettahalsur; both refer to the same site. If you have been looking at villas
              for sale in Bettahalsur or villas for sale on IVC Road, Bangalore, this is the
              same belt.
            </p>
          }
          tableTitle={null}
          tableNote="Distances are measured by road from the project gate and are approximate. Check your own commute during an Embassy Riverine site visit."
          footer={
            <Link
              href="/location-connectivity"
              className="btn-sheen inline-flex items-center justify-center gap-2 bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs font-bold uppercase tracking-[0.16em] px-7 py-4 rounded transition-colors"
            >
              Open the Embassy Riverine Location Map
              <svg width="12" height="12" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                <path
                  d="M1.5 5.5h8M6 2l3.5 3.5L6 9"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          }
        >
          <p>
            <strong className="text-[#12302a]">Why this part of the city:</strong>{" "}
            the airport came first, then the aerospace and hardware parks, then the
            international schools, and the land around them is still largely open. That is
            why villas near Devanahalli airport now command a premium over the older villa
            belts of the east and south. Among the gated communities near Devanahalli
            airport, Embassy Riverine is the lowest-density option from a listed developer,
            20 to 25 minutes from the terminal without entering city traffic. For buyers who
            want villas near Yelahanka without the town&apos;s congestion, Yelahanka
            Junction is 12 km away. The Namma Metro Blue Line (Phase 2B), from Kasturi Nagar
            through Hebbal to the airport, has its nearest alignment point at Doddajala, 7.5
            km from the gate.
          </p>
        </LocationAdvantages>

        <HomeEmbassyGroup />

        <HomeRera />

        <FaqAccordion
          faqs={faqs}
          title="Frequently Asked Questions"
          eyebrow="FAQ"
          className="bg-[#FAF8F3]"
        />

        <BlogSection />
        <NewsSection />

        {/* Contact Us — the doc's close, beside the site-visit form */}
        <EnquirySection
          heading="Contact Us"
          showContactDetails
          intro={
            <p>
              Real Revenue is an authorised channel partner for Embassy Riverine.{" "}
              <Link href="/contact-us" className={darkLinkCls}>
                Contact us
              </Link>{" "}
              for the live cost sheet and inventory position, the{" "}
              <Link href="/floor-plans" className={darkLinkCls}>
                floor plan
              </Link>{" "}
              and{" "}
              <Link href="/master-plan" className={darkLinkCls}>
                master plan
              </Link>{" "}
              set, an{" "}
              <Link href="/about-embassy-riverine" className={darkLinkCls}>
                Embassy Riverine
              </Link>{" "}
              site visit on any day of the week with pickup from Hebbal or Yelahanka,
              home-loan comparison across lenders at no cost to you, and documentation and
              power of attorney support for NRI buyers.
            </p>
          }
        />
      </main>

      <StickyDownloadButton />
      <Footer />
      {/* after the footer: its mobile spacer sits under the fixed bottom bar */}
      <FloatingActions />
    </div>
  );
}
