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
  faqs,
  faqSchema,
  breadcrumb,
  atAGlance,
  SITE_URL,
} from "@/data/project";

/** Home-page meta, as in the SEO doc; openGraph and twitter come from the root layout. */
const META_TITLE = "Embassy Riverine Villas, North Bangalore | Rs 14.10 Cr Onwards";
const META_DESCRIPTION =
  "217 luxury 4, 4.5 & 5 BHK villas at Tharahunise, North Bangalore. Embassy Riverine price from Rs 14.10 Cr, RERA-verified. Book a site visit.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
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
const HomeVideo = dynamic(() => import("@/components/HomeVideo"));
const HomeListingClaims = dynamic(() => import("@/components/HomeListingClaims"));
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

// Page-level nodes only. The project, the villa formats, the channel partner and
// the Embassy organisations are emitted once site-wide from the root layout
// (data/seoSchema.ts), so this graph just references them by @id.
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["WebPage", "RealEstateListing"],
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: META_TITLE,
      description: META_DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#project` },
      primaryImageOfPage: `${SITE_URL}/og-cover.webp`,
      datePosted: "2026-09-15",
      dateModified: "2026-10-24",
      inLanguage: "en-IN",
      breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
    },
    // FAQPage built from the same `faqs` array the accordion below renders
    {
      ...faqSchema,
      "@id": `${SITE_URL}/#faq`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#project` },
    },
    {
      ...breadcrumb([{ name: "Home", path: "/" }]),
      "@id": `${SITE_URL}/#breadcrumb`,
    },
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
            precinct of Embassy Origins, an 85-acre township by{" "}
            <Link href="/about-embassy-group" className={linkCls}>
              Embassy Developments Limited
            </Link>{" "}
            at Tharahunise, in the Bettahalsur belt north of Yelahanka. A natural
            stream runs across the land. The{" "}
            <Link href="/master-plan" className={linkCls}>
              master plan
            </Link>{" "}
            keeps it open instead of piping it underground, and the villa clusters, the{" "}
            <Link href="/amenities" className={linkCls}>
              clubhouse and the walking trails
            </Link>{" "}
            are laid out along it — which is why some listings describe these as waterfront
            villas. On our last visit the stream was running and the trail alignment was already pegged out along the
            eastern clusters; it is a stream and a lake, not a waterfront, and you should
            walk it before you decide what that view is worth to you.
          </p>
          <p>
            That one decision explains the numbers. 217 villas on roughly 50 acres is fewer
            than 4.5 homes to the acre. 19 acres stay as reserved open space. Around 4,000
            trees of 100 to 120 species are being kept or planted through the site. Every
            home is an{" "}
            <Link href="/villas-configurations" className={linkCls}>
              independent villa
            </Link>{" "}
            on its own plot with its own car parks and garden —
            not a villament or a row-house format. There are no apartments inside the villa precinct; Embassy South Reserve, the
            apartment phase, sits on the outer edge of the township.
          </p>
          <p>
            You will also find this project listed as Embassy Knowledge Park Villas or EKP
            Villas North Bangalore. Embassy Origins sits within Embassy&apos;s wider Knowledge
            Park landholding at Tharahunise, and{" "}
            <Link href="/about-embassy-riverine" className={linkCls}>
              Riverine is the villa enclave
            </Link>{" "}
            at its centre.
            The RERA registration covers 50.8 acres; the 85-acre and 200-acre figures you see
            elsewhere refer to the township and the wider parcel.
          </p>
          <p>
            If you are comparing{" "}
            <Link href="/blogs/villa-projects-north-bangalore-2026" className={linkCls}>
              upcoming villa projects in North Bangalore
            </Link>
            , this one stands apart on two counts: land per home
            and ticket size. Everything a buyer usually asks about has its own page:{" "}
            <Link href="/villas-configurations" className={linkCls}>
              villa &amp; configuration
            </Link>
            ,{" "}
            <Link href="/price" className={linkCls}>
              price
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
            , the{" "}
            <Link href="/blogs/embassy-riverine-north-bangalore-buyers-guide-2026" className={linkCls}>
              buyer&apos;s guide
            </Link>
            , and how to{" "}
            <Link href="/contact-us" className={linkCls}>
              contact us
            </Link>{" "}
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

        <HomeVideo />

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
              centre on the clubhouse and the open land along the stream — walking and
              jogging trails, landscaped open space across 19 acres, and around 4,000 trees
              of 100 to 120 species retained or planted through the site.
            </p>
          }
          footer={
            <p>
              For a villa project this is the right order of priority: on a 2,400 to 5,400 sq
              ft plot, what you use daily is your own garden and the land immediately around
              your cluster, not a facility list. Ask for the clubhouse area and the{" "}
              <Link href="/amenities" className={darkLinkCls}>
                amenities
              </Link>{" "}
              schedule as filed, not as rendered — we will send both, and tell you which
              amenities are phase-one and which land later.
            </p>
          }
          cta="Get the Full Amenities List"
        />
        <EnclaveGallery />

        <HomeSpecifications />

        <HomeListingClaims />

        <LocationAdvantages
          eyebrow="Tharahunise, North Bangalore"
          title="Location"
          className="bg-[#FAF8F3] border-t border-[#e5dcc5]"
          intro={
            <p>
              Embassy Riverine{" "}
              <Link href="/location-connectivity" className={linkCls}>
                location
              </Link>
              : Chapparkallu Road, Tharahunise, Bettahalsur, Jala Hobli, Bengaluru 562157,
              just off NH-44 and close to IVC Road, in the North Yelahanka belt. On some
              portals the project appears as Embassy Riverine Tarahunise or Embassy Riverine
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
            airport, Embassy Riverine is the lowest-density option from a listed developer.
            See the full{" "}
            <Link href="/location-connectivity" className={linkCls}>
              connectivity and distance table
            </Link>
            . We have driven the terminal-to-gate route at both peak and off-peak — it runs 20
            to 25 minutes without entering city traffic, and the constraint is the NH-44
            service road turn, not the highway. For buyers who want villas near Yelahanka
            without the town&apos;s congestion, Yelahanka Junction is 12 km away. The Namma
            Metro Blue Line (Phase 2B), from Kasturi Nagar through Hebbal to the airport, has
            its nearest alignment point at Doddajala, 7.5 km from the gate.
          </p>
          <p className="mt-4">
            <strong className="text-[#12302a]">The honest caveat:</strong> this is still a
            developing belt. Daily retail and hospital access is thinner here than in
            Yelahanka town, and that is the trade you are making for the land. Drive it on a
            weekday evening before you commit.
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
            <>
              <p>
                Site visits at Tharahunise, seven days a week, by appointment.{" "}
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
                site visit with pickup from Hebbal or Yelahanka, home-loan comparison across
                lenders at no cost to you, and documentation and power of attorney support
                for NRI buyers.
              </p>
              <p>
                Real Revenue is an authorised channel partner for Embassy Riverine, a unit of
                Earlydays Innovations Private Limited. We are paid by the developer, not by
                you — our price to you is the developer&apos;s price.
              </p>
              <p>
                <strong className="text-[#F6F2E8]">
                  What you get when you call, before any site visit:
                </strong>{" "}
                the all-inclusive cost working for the villa you are considering, the RERA
                carpet area on that specific unit with the filing page attached, and live plot
                availability marked on the{" "}
                <Link href="/master-plan" className={darkLinkCls}>
                  master plan
                </Link>
                .
              </p>
            </>
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
