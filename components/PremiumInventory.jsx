"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { configurations, specifications, neighbourhood } from "@/data/project";
import { useModal } from "./ModalContext";

import bedroom from "@/assets/spec-bedroom.webp";
import kitchen from "@/assets/spec-kitchen.webp";
import bathroom from "@/assets/spec-bathroom.webp";

const specImages = [
  { src: bedroom, alt: "Engineered wood flooring in an Embassy Riverine bedroom" },
  { src: kitchen, alt: "Kitchen with engineered stone counter at Embassy Riverine" },
  { src: bathroom, alt: "Master bathroom with rain shower at Embassy Riverine" },
];

export default function VillaFeatures() {
  const { openModal } = useModal();

  return (
    <section className="w-full py-14 md:py-16 px-4 sm:px-8 bg-[#F6F2E8]" id="investment-benefits">
      <div className="max-w-5xl mx-auto">
        <Reveal variant="up">
          <p className="text-center uppercase mb-3 text-[#A8822E] tracking-[0.22em] text-[11px] font-semibold">
            For the chosen few
          </p>
          <h2 className="text-center font-bold text-[#12302a] mb-10 text-[clamp(1.4rem,3.5vw,2rem)] leading-tight">
            Villa Formats &amp; Specification Highlights
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Card 1 — the three formats */}
          <Reveal
            variant="up"
            className="card-lift bg-white p-6 sm:p-7 rounded-lg border-t-[3px] border-[#C8A24A] shadow-sm"
          >
            <p className="text-[10px] font-semibold tracking-[0.18em] text-[#A8822E] uppercase mb-2">
              Formats
            </p>
            <h3 className="font-bold mb-4 text-base text-[#12302a]">Three villa types only</h3>

            <div className="flex gap-2 mb-4">
              {configurations.map((c) => (
                <a
                  key={c.id}
                  href={`/villas-configurations#${c.id}`}
                  className="flex-1 text-center py-3 bg-[#F6F2E8] border border-[#e0d6bd] rounded hover:border-[#C8A24A] transition-colors"
                >
                  <span className="block text-[15px] font-bold text-[#A8822E]">{c.short}</span>
                  <span className="block text-[11px] text-gray-500">{c.units} units</span>
                </a>
              ))}
            </div>

            <ul className="space-y-2">
              {[
                "Plots from 2,400 to 5,400 sq ft",
                "Built-up from 4,200 to 6,800 sq ft",
                "Three to six car parks per villa",
                "3.4 m floor-to-floor height",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="rounded-full flex-shrink-0 w-[5px] h-[5px] bg-[#C8A24A] inline-block" />
                  <span className="text-[13px] text-[#5c6b65]">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Card 2 — specification */}
          <Reveal
            variant="up"
            delay={110}
            className="card-lift bg-white p-6 sm:p-7 rounded-lg border-t-[3px] border-[#C8A24A] shadow-sm"
          >
            <p className="text-[10px] font-semibold tracking-[0.18em] text-[#A8822E] uppercase mb-2">
              Interiors &amp; Finish
            </p>
            <h3 className="font-bold mb-4 text-base text-[#12302a]">
              What is actually specified
            </h3>

            <ul className="space-y-2 mb-4">
              {specifications.slice(0, 5).map((s) => (
                <li key={s.title} className="flex items-start gap-2">
                  <span className="rounded-full flex-shrink-0 w-[5px] h-[5px] bg-[#C8A24A] inline-block mt-1.5" />
                  <span className="text-[13px] text-[#5c6b65]">
                    <strong className="text-[#12302a] font-semibold">{s.title}:</strong>{" "}
                    {/* first clause only — the full list is on the specifications section */}
                    {s.body.split(";")[0]}
                  </span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-1.5">
              {specImages.map((img) => (
                <div key={img.alt} className="relative h-14 rounded overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="90px"
                    quality={70}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>

          {/* Card 3 — social infrastructure */}
          <Reveal
            variant="up"
            delay={220}
            className="card-lift bg-white p-6 sm:p-7 rounded-lg border-t-[3px] border-[#C8A24A] shadow-sm"
          >
            <p className="text-[10px] font-semibold tracking-[0.18em] text-[#A8822E] uppercase mb-2">
              Social Infrastructure
            </p>
            <h3 className="font-bold mb-4 text-base text-[#12302a]">The corridor around it</h3>

            <div className="flex flex-col gap-3">
              {[
                ["Schools", neighbourhood.schools.slice(0, 3)],
                ["Healthcare", neighbourhood.healthcare.slice(0, 3)],
                ["Workplaces", neighbourhood.workplaces.slice(0, 3)],
              ].map(([label, items]) => (
                <div key={label}>
                  <p className="text-[11px] font-semibold text-[#8a9690] uppercase tracking-[0.1em] mb-1.5">
                    {label}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="text-[12px] text-[#5c6b65] bg-[#F6F2E8] px-2.5 py-1 rounded-full border border-[#e0d6bd]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal variant="up" delay={120} className="text-center mt-8">
          <button
            type="button"
            onClick={() => openModal()}
            className="btn-sheen inline-block bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs font-bold uppercase tracking-[0.18em] px-7 py-3.5 rounded transition-colors cursor-pointer"
          >
            Get the Full Specification Sheet
          </button>
        </Reveal>
      </div>
    </section>
  );
}
