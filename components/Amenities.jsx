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
import indoorPool from "@/assets/indoor-pool.webp";
import gym from "@/assets/gymnasium.webp";
import spa from "@/assets/spa.webp";
import tennis from "@/assets/tennis-court.webp";
import padel from "@/assets/padel-court.webp";
import kids from "@/assets/kids-play.webp";
import lounge from "@/assets/lounge-bar.webp";
import library from "@/assets/library.webp";
import trail from "@/assets/jogging-trail.webp";
import amphi from "@/assets/amphitheatre.webp";

import Reveal from "./Reveal";
import { useModal } from "./ModalContext";

const TABS = [
  {
    id: "clubhouse",
    label: "Clubhouse",
    note: "40,000 sq ft",
    image: clubhouse,
    alt: "The 40,000 sq ft Riverine clubhouse at Embassy Origins",
    items: [
      { icon: <FaSwimmingPool />, text: "Heated indoor swimming pool" },
      { icon: <FaDumbbell />, text: "Fully equipped gymnasium" },
      { icon: <FaSpa />, text: "Spa with steam and sauna" },
      { icon: <FaTableTennis />, text: "Squash court" },
      { icon: <FaBook />, text: "Library and business lounge" },
      { icon: <FaGlassMartiniAlt />, text: "Lounge bar, café and games room" },
      { icon: <FaUsers />, text: "Banquet hall with attached guest rooms" },
    ],
    gallery: [indoorPool, gym, spa, library, lounge],
  },
  {
    id: "sport",
    label: "Sport",
    note: "11 courts & greens",
    image: tennis,
    alt: "Floodlit tennis court at Embassy Riverine",
    items: [
      { icon: <FaSwimmingPool />, text: "Outdoor resort-style swimming pool" },
      { icon: <FaWater />, text: "Central lake with landscaped edge" },
      { icon: <FaTableTennis />, text: "Floodlit tennis, padel and pickleball" },
      { icon: <FaUsers />, text: "Basketball and badminton courts" },
      { icon: <FaTableTennis />, text: "Cricket practice nets" },
      { icon: <FaLeaf />, text: "Putting green and skating rink" },
    ],
    gallery: [tennis, padel],
  },
  {
    id: "family",
    label: "Family",
    note: "Kids & social",
    image: kids,
    alt: "Adventure play park at Embassy Riverine",
    items: [
      { icon: <FaUsers />, text: "Kids' club and adventure play park" },
      { icon: <FaTree />, text: "Family pavilions and garden cabanas" },
      { icon: <FaLeaf />, text: "Function lawn and barbecue pavilion" },
      { icon: <FaUsers />, text: "Open-air amphitheatre" },
      { icon: <FaTree />, text: "Pet park and senior citizens' zone" },
    ],
    gallery: [kids, amphi],
  },
  {
    id: "landscape",
    label: "Landscape",
    note: "19 acres open",
    image: trail,
    alt: "Riparian jogging and cycling trail through the retained tree canopy",
    items: [
      { icon: <FaTree />, text: "19 acres of reserved open space" },
      { icon: <FaLeaf />, text: "Riparian jogging and cycling trails" },
      { icon: <FaTree />, text: "Elevated sky walk and tree walk" },
      { icon: <FaLeaf />, text: "4,000 trees across 100 to 120 species" },
      { icon: <FaWater />, text: "Themed landscaped gardens" },
    ],
    gallery: [trail, amphi],
  },
  {
    id: "estate",
    label: "Estate",
    note: "IGBC Gold",
    image: clubhouse,
    alt: "Embassy Origins estate infrastructure",
    items: [
      { icon: <FaShieldAlt />, text: "24x7 gated security with CCTV surveillance" },
      { icon: <FaChargingStation />, text: "EV charging provision and solar hot water" },
      { icon: <FaWater />, text: "Rainwater harvesting — 5.37 crore litre storage" },
      { icon: <FaLeaf />, text: "Sewage treatment with treated water reuse" },
      { icon: <FaShieldAlt />, text: "Fully underground cabling — no overhead lines" },
      { icon: <FaLeaf />, text: "IGBC Green Homes Gold certification targeted" },
    ],
    gallery: [clubhouse, trail],
  },
];

export default function Amenities() {
  const { openModal } = useModal();
  const [active, setActive] = useState(0);
  const tab = TABS[active];

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
        <Reveal variant="up" className="text-center">
          <h6 className="text-[#C8A24A] uppercase mb-4 tracking-[0.22em] text-xs font-semibold">
            Luxurious Amenities
          </h6>
          <h2 className="text-[#F6F2E8] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            A Clubhouse, Eleven Courts and Nineteen Acres You Never Have to Leave
          </h2>
        </Reveal>

        {/* Tabs */}
        <Reveal variant="up" delay={100}>
          <div
            role="tablist"
            aria-label="Amenity categories"
            className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1 justify-start lg:justify-center"
          >
            {TABS.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                id={`amenity-tab-${t.id}`}
                aria-selected={i === active}
                aria-controls={`amenity-panel-${t.id}`}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.13em] transition-all duration-300 border ${
                  i === active
                    ? "bg-[#C8A24A] border-[#C8A24A] text-white shadow-lg shadow-[#C8A24A]/20"
                    : "border-white/20 text-[#F6F2E8]/70 hover:border-[#C8A24A]/60 hover:text-[#F6F2E8]"
                }`}
              >
                {t.label}
                <span className="ml-2 hidden sm:inline text-[10px] opacity-70 normal-case tracking-normal">
                  {t.note}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
          {/* Left: list */}
          <div
            role="tabpanel"
            id={`amenity-panel-${tab.id}`}
            aria-labelledby={`amenity-tab-${tab.id}`}
            className="flex-1 flex flex-col gap-5 w-full"
          >
            <p className="text-sm md:text-base leading-relaxed text-[#F6F2E8]/80">
              The clubhouse anchors the centre of the villa precinct, beside the central
              lake and within walking distance of every cluster. Everything below is inside
              the gates.
            </p>

            <ul key={tab.id} className="flex flex-col gap-[14px]">
              {tab.items.map((item, i) => (
                <li
                  key={item.text}
                  className="hero-rise flex items-center gap-4"
                  style={{ "--d": `${i * 55}ms` }}
                >
                  <span className="flex-shrink-0 grid place-items-center w-9 h-9 rounded-full bg-[#C8A24A]/12 text-[#C8A24A] text-base">
                    {item.icon}
                  </span>
                  <span className="text-sm md:text-base">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-3">
              <button
                type="button"
                onClick={() => openModal()}
                className="btn-sheen inline-block bg-[#C8A24A] text-white text-xs rounded font-bold uppercase tracking-[0.18em] px-7 py-3.5 cursor-pointer hover:bg-[#A8822E] transition"
              >
                Get the Full Amenity List
              </button>
            </div>
          </div>

          {/* Right: image */}
          <Reveal
            variant="zoom"
            className="w-full lg:w-[48%] h-[260px] sm:h-[340px] md:h-[480px] flex-shrink-0 relative rounded-lg overflow-hidden shadow-2xl"
          >
            {TABS.map((t, i) => (
              <Image
                key={t.id}
                src={t.image}
                alt={t.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                quality={78}
                className={`object-cover transition-all duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] ${
                  i === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
                aria-hidden={i !== active}
              />
            ))}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#0b1f1a]/70 via-transparent to-transparent"
            />
            <p className="absolute bottom-4 left-5 right-5 text-[#F6F2E8] text-xs uppercase tracking-[0.18em]">
              {tab.label} · {tab.note}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
