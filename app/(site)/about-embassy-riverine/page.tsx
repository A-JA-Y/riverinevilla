import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import AboutProject from "@/components/AboutProject";
import KeyHighlights from "@/components/KeyHighlights";
import TownshipSection from "@/components/TownshipSection";
import EnclaveGallery from "@/components/EnclaveGallery";
import CtaBand from "@/components/CtaBand";
import StickyDownloadButton from "@/components/StickyButton";
import { SITE_URL, projectSchema, breadcrumb } from "@/data/project";

export const metadata: Metadata = {
  title: "About Embassy Riverine | Villas at Embassy Origins, North Bangalore",
  description:
    "Embassy Riverine is the 217-villa precinct of the 85-acre Embassy Origins township at Tarahunise, North Bangalore — planned around a protected riparian corridor.",
  alternates: { canonical: "/about-embassy-riverine" },
  keywords: [
    "Embassy Riverine",
    "Embassy Origins Bangalore",
    "Embassy Riverine villas",
    "Tarahunise villas",
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    projectSchema,
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "About Embassy Riverine", path: "/about-embassy-riverine" },
    ]),
  ],
};

export default function AboutEmbassyRiverinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageBanner
        eyebrow="The Project"
        title="About Embassy Riverine"
        subtitle="217 villas of 4, 4.5 and 5 bedrooms, arranged around a protected riparian corridor inside the 85-acre Embassy Origins township at Tarahunise, North Bangalore."
      />

      <AboutProject heading={false} />
      <KeyHighlights />

      {/* Long-form overview */}
      <section className="w-full bg-white py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto prose-none text-gray-700 space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] leading-tight">
            A master plan built around what was already there
          </h2>
          <p className="text-[15px] leading-relaxed">
            A natural watercourse runs through the 85 acres at Tarahunise, north of
            Yelahanka. Rather than culvert it and build over the top, the master plan by
            Bhumiputra Architecture treats that corridor as the spine of the development.
            The villas sit on either side of it. Roughly 19 acres are held as reserved open
            space, and around 4,000 trees across 100 to 120 species are being retained and
            planted through the site.
          </p>
          <p className="text-[15px] leading-relaxed">
            The architects call the approach &ldquo;Natural Intelligence&rdquo;. In practice
            it means the most valuable land on the property was never sold.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] leading-tight pt-4">
            The villa precinct
          </h2>
          <p className="text-[15px] leading-relaxed">
            Embassy Riverine is the villa precinct of that township — 217 homes on
            approximately 50 acres, which works out to fewer than 4.5 villas per acre. That
            is a genuinely low density for Bangalore, and it is what makes the tree cover
            and the open sightlines possible rather than aspirational.
          </p>
          <p className="text-[15px] leading-relaxed">
            The villas come in three formats. The 4 BHK sits on a 2,400 sq ft plot with
            around 4,200 sq ft of built-up area and three car parks. The 4.5 BHK — the
            largest group at 137 homes — occupies a 3,500 sq ft plot with roughly 5,200 sq
            ft built and four car parks. The 5 BHK, of which there are only 32, takes a
            5,400 sq ft plot, about 6,800 sq ft of built area and six car parks.
            Floor-to-floor height runs to 3.4 metres, giving finished ceilings close to 2.9
            metres in the principal volumes.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] leading-tight pt-4">
            What else sits inside the township
          </h2>
          <p className="text-[15px] leading-relaxed">
            Embassy Origins also carries an apartment precinct, Embassy South Reserve — 855
            homes from studios to 3.5 BHK — positioned deliberately on the perimeter of the
            site so that the villa enclave keeps the protected core. Offices and retail sit
            near the township gates. Together the two precincts represent about 2.6 million
            sq ft and a gross development value of roughly Rs 4,500 crore for Phase 1.
          </p>
          <p className="text-[15px] leading-relaxed">
            The project was registered with Karnataka RERA on 9 September 2026 and launched
            publicly on 15 September 2026.
          </p>
        </div>
      </section>

      <TownshipSection />
      <EnclaveGallery />
      <CtaBand variant="visit" />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
