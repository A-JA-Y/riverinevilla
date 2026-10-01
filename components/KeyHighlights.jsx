"use client";

import CountUp from "./CountUp";
import Reveal from "./Reveal";
import { highlights } from "@/data/project";

/** Section 4 — the twelve numbers that define the project. */
export default function KeyHighlights() {
  return (
    <section
      id="highlights"
      className="w-full bg-[#F6F2E8] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal variant="up" className="text-center mb-12">
          <h6 className="uppercase text-xs font-semibold tracking-[0.22em] text-[#A8822E] mb-3">
            Key Highlights
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">
            The Project in Twelve Numbers
          </h2>
        </Reveal>

        <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[#e0d6bd] rounded-xl overflow-hidden">
          {highlights.map((h, i) => (
            <Reveal
              key={`${h.value}-${h.unit}`}
              variant="up"
              delay={i * 55}
              className="group bg-white p-5 sm:p-6 flex flex-col gap-1 transition-colors duration-300 hover:bg-[#fffdf8]"
            >
              {/* flex-wrap: on narrow cells a long unit ("Sq Ft") drops below
                  the number as one piece instead of breaking mid-unit */}
              <dt className="flex flex-wrap items-baseline gap-x-1.5">
                <span className="text-2xl sm:text-3xl font-bold text-[#12302a] tabular-nums">
                  <CountUp value={h.value} />
                </span>
                <span className="whitespace-nowrap text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-[#A8822E]">
                  {h.unit}
                </span>
              </dt>
              <span
                aria-hidden="true"
                className="block h-[2px] w-6 bg-[#C8A24A]/40 group-hover:w-12 group-hover:bg-[#C8A24A] transition-all duration-500"
              />
              <dd className="text-[12px] sm:text-[13px] text-gray-600 leading-snug mt-1">
                {h.label}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
