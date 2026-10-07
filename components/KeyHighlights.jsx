"use client";

import CountUp from "./CountUp";
import Reveal from "./Reveal";
import { highlights } from "@/data/project";

/**
 * The numbers that define the project, as a figure grid.
 * Defaults to the twelve-number "Key Highlights" band; the home page passes its
 * own `items` with `title="At a glance"` and `titleAs="h3"` so it reads as a
 * sub-section of About Embassy Riverine.
 *
 * @param {{
 *   items?: { value: string, unit: string, label: string }[],
 *   eyebrow?: string | null,
 *   title?: string,
 *   titleAs?: "h2" | "h3",
 *   id?: string,
 * }} props
 */
export default function KeyHighlights({
  items = highlights,
  eyebrow = "Key Highlights",
  title = "The Project in Twelve Numbers",
  titleAs: Title = "h2",
  id = "highlights",
}) {
  // An odd count leaves one empty cell in the two-column phone grid; let the
  // last figure span the row instead.
  const oddCount = items.length % 2 === 1;
  const lgCols = items.length % 4 === 0 ? "lg:grid-cols-4" : "lg:grid-cols-3";

  return (
    <section
      id={id}
      className="w-full bg-[#F6F2E8] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal variant="up" className="text-center mb-12">
          {eyebrow ? (
            <p className="uppercase text-xs font-semibold tracking-[0.22em] text-[#A8822E] mb-3">
              {eyebrow}
            </p>
          ) : null}
          <Title className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">
            {title}
          </Title>
        </Reveal>

        <dl
          className={`grid grid-cols-2 md:grid-cols-3 ${lgCols} gap-px bg-[#e0d6bd] rounded-xl overflow-hidden`}
        >
          {items.map((h, i) => (
            <Reveal
              key={`${h.value}-${h.unit}`}
              variant="up"
              delay={i * 55}
              className={`group bg-white p-5 sm:p-6 flex flex-col gap-1 transition-colors duration-300 hover:bg-[#fffdf8] ${
                oddCount && i === items.length - 1 ? "col-span-2 md:col-span-1" : ""
              }`}
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
