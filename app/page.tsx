import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import ReraStrip from "@/components/QRsectionsm";
import ContactForm from "@/components/ContactForm";
import ModalWrapper from "@/components/ModalWrapper";
import HomePageHeader from "@/components/HomePageHeader";
import ScrollProgress from "@/components/ScrollProgress";
import {
  SITE_URL,
  projectSchema,
  agentSchema,
  faqSchema,
  breadcrumb,
  configurations,
} from "@/data/project";

// Lazy load below-the-fold sections
const AboutProject = dynamic(() => import("@/components/AboutProject"));
const KeyHighlights = dynamic(() => import("@/components/KeyHighlights"));
const Amenities = dynamic(() => import("@/components/Amenities"));
const TownshipSection = dynamic(() => import("@/components/TownshipSection"));
const ReasonsToInvest = dynamic(() => import("@/components/ReasonToInvest"));
const VillaFeatures = dynamic(() => import("@/components/PremiumInventory"));
const PlansSection = dynamic(() => import("@/components/FloorPlan"));
const CtaBand = dynamic(() => import("@/components/CtaBand"));
const EmiCalculator = dynamic(() => import("@/components/EmiCalculator"));
const LocationAdvantages = dynamic(() => import("@/components/LocationAdvantages"));
const EnclaveGallery = dynamic(() => import("@/components/EnclaveGallery"));
const FaqAccordion = dynamic(() => import("@/components/FaqAccordion"));
const BlogSection = dynamic(() => import("@/components/BlogSection"));
const NewsSection = dynamic(() => import("@/components/NewsSection"));
const EnquirySection = dynamic(() => import("@/components/EnquirySection"));
const QRSection = dynamic(() => import("@/components/QRSections"));
const StickyDownloadButton = dynamic(() => import("@/components/StickyButton"));
const Footer = dynamic(() => import("@/components/Footer"));
const FloatingActions = dynamic(() => import("@/components/FloatingActions"));

/** Product nodes for the two configurations that carry a published price. */
const productSchemas = configurations
  .filter((c) => c.id !== "5bhk")
  .map((c) => ({
    "@type": "Product",
    name: `Embassy Riverine ${c.short} Villa`,
    description: `${c.short} villa on a ${c.plot} plot with ${c.builtUp} built-up area and ${c.parking} car parks at Embassy Riverine, North Bangalore.`,
    brand: { "@type": "Brand", name: "Embassy Developments Limited" },
    offers: {
      "@type": "Offer",
      price: c.id === "4bhk" ? "141000000" : "174300000",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/`,
    },
  }));

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    projectSchema,
    ...productSchemas,
    agentSchema,
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
      <h1 className="sr-only">
        Embassy Riverine — Luxury 4, 4.5 &amp; 5 BHK Villas at Embassy Origins, North
        Bangalore
      </h1>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <ScrollProgress />
      <HomePageHeader />
      <Hero />
      <ReraStrip />

      <main className="w-full">
        {/* Lead capture overlaps the hero on desktop, as in the original layout */}
        {/* z-20 keeps this above the hero's own z-10 content layer, which the
            card overlaps on desktop */}
        <section className="relative z-20 px-5 md:px-[30px] md:py-[45px] -mt-8 md:-mt-[98px]">
          <div className="max-w-5xl m-auto">
            <ContactForm />
          </div>
        </section>

        <ModalWrapper />

        <AboutProject heading={false} />
        <KeyHighlights />
        <Amenities />
        <TownshipSection />
        <CtaBand variant="scarcity" />
        <ReasonsToInvest />
        <VillaFeatures />
        <PlansSection />
        <EmiCalculator />
        <LocationAdvantages />
        <EnclaveGallery />
        <FaqAccordion />
        <BlogSection />
        <NewsSection />
        <CtaBand variant="visit" />
        <EnquirySection />
        <QRSection />
      </main>

      <StickyDownloadButton />
      <FloatingActions />
      <Footer />
    </div>
  );
}
