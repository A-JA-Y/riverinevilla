import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Amenities from "@/components/Amenities";
import Reveal from "@/components/Reveal";
import EnclaveGallery from "@/components/EnclaveGallery";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBand from "@/components/CtaBand";
import StickyDownloadButton from "@/components/StickyButton";
import clubhouse from "@/assets/clubhouse.webp";
import { amenityGroups, faqs, projectSchema, breadcrumb } from "@/data/project";

export const metadata: Metadata = {
  title: "Embassy Riverine Amenities | 40,000 Sq Ft Clubhouse, North Bangalore",
  description:
    "Embassy Riverine amenities — a 40,000 sq ft clubhouse with heated indoor pool, spa and squash, plus tennis, padel, pickleball and 19 acres of reserved open space.",
  alternates: { canonical: "/amenities" },
  keywords: [
    "Embassy Riverine amenities",
    "Embassy Riverine clubhouse",
    "Embassy Origins amenities",
  ],
};

const amenityFaqs = faqs.filter((f) => /clubhouse|amenit|density|school/i.test(f.question));

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    projectSchema,
    {
      "@type": "FAQPage",
      mainEntity: amenityFaqs.map((f) => ({
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

export default function AmenitiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero banner */}
      <section className="relative w-full h-[340px] md:h-[440px] flex items-center justify-center overflow-hidden">
        <Image
          src={clubhouse}
          alt="The 40,000 sq ft Riverine clubhouse at Embassy Origins, North Bangalore"
          fill
          priority
          sizes="100vw"
          quality={76}
          className="object-cover object-center animate-drift"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#06140f]/62" />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <p className="hero-rise text-[#e7ce92] text-[11px] uppercase tracking-[0.24em] font-semibold mb-3">
            Lifestyle
          </p>
          <h1
            className="hero-rise text-[clamp(1.9rem,5.6vw,3.4rem)] font-bold mb-4 leading-[1.1]"
            style={{ "--d": "100ms" } as CSSProperties}
          >
            Embassy Riverine Amenities
          </h1>
          <p
            className="hero-rise text-sm md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed"
            style={{ "--d": "200ms" } as CSSProperties}
          >
            A 40,000 sq ft clubhouse, eleven courts and greens, and nineteen acres of
            reserved landscape — all inside the gates.
          </p>
        </div>
      </section>

      <Amenities />

      {/* Intro copy */}
      <section className="w-full py-16 md:py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-5">
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] leading-tight">
              Amenities that had land set aside for them
            </h2>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <p className="text-[15px] leading-relaxed text-gray-700">
              At a density of fewer than 4.5 villas per acre, Embassy Riverine has room its
              competitors do not. Nineteen of the 85 acres are held as reserved open space,
              and they are not consolidated into a single show park — they are threaded
              through the street network as linear greens, pocket gardens and the riparian
              trail system.
            </p>
          </Reveal>
          <Reveal variant="up" delay={140}>
            <p className="text-[15px] leading-relaxed text-gray-700">
              The clubhouse anchors the centre of the villa precinct, beside the central
              lake and within walking distance of every cluster. Around 4,000 trees across
              100 to 120 species are being retained and planted through the site, so the
              tree walk and the jogging trails run under real canopy rather than new
              saplings.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Full amenity list */}
      <section className="w-full py-16 md:py-20 px-6 bg-[#FAF8F3] border-y border-[#e5dcc5]">
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up" className="text-center mb-12">
            <h6 className="uppercase text-xs font-semibold tracking-[0.22em] text-[#A8822E] mb-3">
              The Complete List
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">
              Every Amenity, by Cluster
            </h2>
          </Reveal>

          <div className="space-y-6">
            {amenityGroups.map((group, i) => (
              <Reveal
                key={group.title}
                variant="up"
                delay={i * 80}
                className="bg-white rounded-xl p-6 md:p-8 border border-[#e5dcc5] shadow-sm"
              >
                <h3 className="text-lg md:text-xl font-bold text-[#12302a] mb-2">
                  {group.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{group.intro}</p>

                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[#3d4f49] text-sm">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C8A24A] flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/master-plan"
              className="px-7 py-3.5 bg-[#C8A24A] text-white rounded text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#A8822E] transition-colors"
            >
              See the Master Plan
            </Link>
            <Link
              href="/floor-plans"
              className="px-7 py-3.5 border-2 border-[#C8A24A] text-[#A8822E] rounded text-xs font-bold uppercase tracking-[0.16em] hover:bg-[#C8A24A] hover:text-white transition-colors"
            >
              Explore Floor Plans
            </Link>
          </Reveal>
        </div>
      </section>

      <EnclaveGallery />
      <FaqAccordion faqs={amenityFaqs} title="Amenity Questions" eyebrow="FAQ" />
      <CtaBand variant="visit" />

      <div className="relative">
        <StickyDownloadButton />
      </div>
    </>
  );
}
