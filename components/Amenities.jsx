"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaSwimmingPool,
  FaDumbbell,
  FaSpa,
  FaTableTennis,
  FaBook,
  FaGlassMartiniAlt,
  FaUsers,
  FaTree,
  FaShieldAlt,
  FaLeaf,
  FaWater,
  FaChargingStation,
} from "react-icons/fa";

import clubhouse from "@/assets/clubhouse.webp";
import tennis from "@/assets/tennis-court.webp";
import kids from "@/assets/kids-play.webp";
import trail from "@/assets/jogging-trail.webp";

import Reveal from "./Reveal";
import { useModal } from "./ModalContext";
import { amenityGroups } from "@/data/project";

/** Tab chrome for each amenity group in data/project.ts (matched by id). */
const TAB_META = {
  clubhouse: {
    label: "Clubhouse",
    note: "40,000 sq ft",
    image: clubhouse,
    alt: "The 40,000 sq ft Embassy Riverine clubhouse at Embassy Origins",
  },
  sport: {
    label: "Sport",
    note: "Courts & greens",
    image: tennis,
    alt: "Floodlit tennis court at Embassy Riverine",
  },
  family: {
    label: "Family & Outdoors",
    note: "Lake & trails",
    image: kids,
    alt: "Adventure play park at Embassy Riverine",
  },
  estate: {
    label: "Estate",
    note: "Infrastructure",
    image: trail,
    alt: "Riparian jogging and cycling trail through the Embassy Origins estate",
  },
};

/** Picks an icon for an amenity from the words in its name. */
const ICON_RULES = [
  [/pool/i, FaSwimmingPool],
  [/gym|yoga/i, FaDumbbell],
  [/spa|sauna/i, FaSpa],
  [/court|squash|nets|putting|skating|tennis/i, FaTableTennis],
  [/library|lounge and|business/i, FaBook],
  [/bar|cafe|café/i, FaGlassMartiniAlt],
  [/lake|water|sewage|rainwater/i, FaWater],
  [/security|cctv|cabling/i, FaShieldAlt],
  [/ev |charging|power|solar/i, FaChargingStation],
  [/kids|family|banquet|games|amphitheatre|senior|barbecue|pavilion/i, FaUsers],
  [/trail|tree|walk|park|lawn|garden|open space/i, FaTree],
];
const iconFor = (text) => (ICON_RULES.find(([re]) => re.test(text)) || [null, FaLeaf])[1];

const DEFAULT_INTRO = (
  <p className="text-sm md:text-base leading-relaxed text-[#F6F2E8]/80 text-center max-w-3xl mx-auto">
    The clubhouse anchors the centre of the villa precinct, beside the central lake and
    within walking distance of every cluster. Everything below is inside the gates.
  </p>
);

/**
 * Amenities by group, as tabs. Every panel is rendered (inactive ones are
 * `hidden`), so the full list is in the page HTML. The heading props default to
 * the original copy; the home page passes the SEO copy.
 *
 * @param {{
 *   eyebrow?: string | null,
 *   title?: string,
 *   intro?: import("react").ReactNode,
 *   footer?: import("react").ReactNode,
 *   cta?: string | null,
 * }} props
 */
export default function Amenities({
  eyebrow = "Luxurious Amenities",
  title = "A Clubhouse, Eleven Courts and Nineteen Acres You Never Have to Leave",
  intro = DEFAULT_INTRO,
  footer = null,
  cta = "Get the Full Amenity List",
}) {
  const { openModal } = useModal();
  const [active, setActive] = useState(0);
  const tabs = amenityGroups.map((g) => ({ ...g, ...(TAB_META[g.id] || {}) }));
  const tab = tabs[active] || tabs[0];

  return (
    <section
      id="amenities"
      className="w-full bg-[#12302a] py-16 md:py-20 px-6 md:px-12 lg:px-20 text-[#F6F2E8] relative overflow-hidden"
    >
      {/* soft riverine glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-[#C8A24A]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-24 h-[24rem] w-[24rem] rounded-full bg-[#4E8C9E]/10 blur-3xl"
      />

      <div className="max-w-5xl mx-auto flex flex-col gap-10 relative">
        {/* Heading */}
        <Reveal variant="up" className="text-center flex flex-col gap-5">
          <div>
            {eyebrow ? (
              <p className="text-[#C8A24A] uppercase mb-4 tracking-[0.22em] text-xs font-semibold">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-[#F6F2E8] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
              {title}
            </h2>
          </div>
          {intro}
        </Reveal>

        {/* Tabs */}
        <Reveal variant="up" delay={100}>
          <div
            role="tablist"
            aria-label="Amenity categories"
            className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1 justify-start lg:justify-center"
          >
            {tabs.map((t, i) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`amenity-tab-${t.id}`}
                aria-selected={i === active}
                aria-controls={`amenity-panel-${t.id}`}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.13em] transition-all duration-300 border cursor-pointer ${
                  i === active
                    ? "bg-[#C8A24A] border-[#C8A24A] text-white shadow-lg shadow-[#C8A24A]/20"
                    : "border-white/20 text-[#F6F2E8]/70 hover:border-[#C8A24A]/60 hover:text-[#F6F2E8]"
                }`}
              >
                {t.label || t.title}
                {t.note ? (
                  <span className="ml-2 hidden sm:inline text-[10px] opacity-70 normal-case tracking-normal">
                    {t.note}
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
          {/* Left: one panel per group; inactive panels stay in the HTML */}
          <div className="flex-1 w-full">
            {tabs.map((t, ti) => (
              <div
                key={t.id}
                role="tabpanel"
                id={`amenity-panel-${t.id}`}
                aria-labelledby={`amenity-tab-${t.id}`}
                hidden={ti !== active}
                className="flex flex-col gap-5"
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#F6F2E8]">{t.title}</h3>
                <ul className="flex flex-col gap-[14px]">
                  {t.items.map((item, i) => {
                    const Icon = iconFor(item);
                    return (
                      <li
                        key={item}
                        className="hero-rise flex items-center gap-4"
                        style={{ "--d": `${i * 55}ms` }}
                      >
                        <span className="flex-shrink-0 grid place-items-center w-9 h-9 rounded-full bg-[#C8A24A]/12 text-[#C8A24A] text-base">
                          <Icon aria-hidden="true" />
                        </span>
                        <span className="text-sm md:text-base">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            {footer ? (
              <div className="mt-7 text-sm md:text-base leading-relaxed text-[#F6F2E8]/80">
                {footer}
              </div>
            ) : null}

            {cta ? (
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="btn-sheen inline-block bg-[#C8A24A] text-white text-xs rounded font-bold uppercase tracking-[0.18em] px-7 py-3.5 cursor-pointer hover:bg-[#A8822E] transition"
                >
                  {cta}
                </button>
              </div>
            ) : null}
          </div>

          {/* Right: image */}
          <Reveal
            variant="zoom"
            className="w-full lg:w-[48%] h-[260px] sm:h-[340px] md:h-[480px] flex-shrink-0 relative rounded-lg overflow-hidden shadow-2xl"
          >
            {tabs.map((t, i) =>
              t.image ? (
                <Image
                  key={t.id}
                  src={t.image}
                  alt={t.alt || t.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  quality={78}
                  className={`object-cover transition-all duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] ${
                    i === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                  aria-hidden={i !== active}
                />
              ) : null
            )}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#0b1f1a]/70 via-transparent to-transparent"
            />
            <p className="absolute bottom-4 left-5 right-5 text-[#F6F2E8] text-xs uppercase tracking-[0.18em]">
              {tab.label || tab.title}
              {tab.note ? ` · ${tab.note}` : ""}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
