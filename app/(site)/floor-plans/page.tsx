import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import FloorPlanSection from "@/components/FloorPageSection";
import CtaBand from "@/components/CtaBand";
import StickyDownloadButton from "@/components/StickyButton";
import { projectSchema, breadcrumb } from "@/data/project";

export const metadata: Metadata = {
  title: "Embassy Riverine Floor Plans — 4, 4.5 & 5 BHK Villas | PDF",
  description:
    "Explore Embassy Riverine floor plans — 4 BHK (2,400 sq ft plot), 4.5 BHK (3,500 sq ft) and 5 BHK (5,400 sq ft) villas at Embassy Origins, North Bangalore.",
  alternates: { canonical: "/floor-plans" },
  keywords: [
    "Embassy Riverine floor plan",
    "Embassy Riverine villas floor plan",
    "Embassy Riverine 4 BHK floor plan",
    "Embassy Riverine 5 BHK floor plan",
  ],
  openGraph: {
    title: "Embassy Riverine Floor Plans — 4, 4.5 & 5 BHK Villas",
    description:
      "Three villa formats from 4,200 to 6,800 sq ft built-up at Embassy Origins, North Bangalore. Download the plan PDF.",
    url: "/floor-plans",
    type: "website",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    projectSchema,
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Floor Plans", path: "/floor-plans" },
    ]),
  ],
};

export default function FloorPlansPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <PageBanner
        eyebrow="Floor Plans"
        title="Embassy Riverine Floor Plans"
        subtitle="Three villa layouts — 4, 4.5 and 5 BHK — plus the Embassy Origins master plan for the 85-acre township at Tarahunise, North Bangalore."
      />

      <FloorPlanSection />
      <CtaBand variant="scarcity" />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
