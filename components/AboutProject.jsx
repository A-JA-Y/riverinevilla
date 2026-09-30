"use client";

import { FaCheck } from "react-icons/fa";
import ImageSlider from "./ImageSlider";
import Reveal from "./Reveal";

import villa1 from "../assets/villa-exterior-1.webp";
import villa2 from "../assets/villa-exterior-2.webp";
import corridor from "../assets/riparian-corridor.webp";
import aerial from "../assets/township-aerial.webp";
import living from "../assets/villa-living-room.webp";

import { useModal } from "./ModalContext";

const gallery = [
  { src: villa1, alt: "Embassy Riverine villa exterior at Embassy Origins, North Bangalore" },
  { src: corridor, alt: "The protected riparian corridor running through Embassy Origins" },
  { src: villa2, alt: "Embassy Riverine villa with private deck and pool" },
  { src: aerial, alt: "Aerial view of the 85-acre Embassy Origins township" },
  { src: living, alt: "Living volume inside an Embassy Riverine villa" },
];

const checklist = [
  "Villa precinct of the 85-acre Embassy Origins township",
  "217 villas on ~50 acres — under 4.5 homes per acre",
  "19 acres of reserved landscape and open space",
  "4,000 trees retained and planted across 100 to 120 species",
];

export default function AboutProject({ heading }) {
  const { openModal } = useModal();
  const Title = heading ? "h1" : "h2";

  return (
    <section
      id="overview"
      className="w-full bg-white py-16 md:py-[70px] px-6 md:px-[30px] md:min-h-[750px]"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 center-box">
        {/* Left: gallery */}
        <Reveal
          variant="left"
          className="hidden md:flex flex-col items-start relative w-full md:w-1/2 h-[500px]"
        >
          <ImageSlider images={gallery} />
        </Reveal>

        {/* Right: copy */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <Reveal variant="up">
            <h6 className="text-[#A8822E] font-semibold text-xs tracking-[0.22em] uppercase">
              For the buyer who reads the master plan first
            </h6>
          </Reveal>

          <Reveal variant="up" delay={80}>
            <Title className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">
              About Embassy Riverine
            </Title>
            <span className="rule-grow mt-3" data-shown="" />
          </Reveal>

          {/* Mobile gallery — sits between the heading and the body copy */}
          <Reveal variant="zoom" className="md:hidden w-full h-[260px] sm:h-[320px] my-2">
            <ImageSlider images={gallery} />
          </Reveal>

          <Reveal variant="up" delay={120}>
            <p className="text-gray-600 text-sm leading-relaxed">
              Most townships cut down what is in the way. Embassy Origins was planned
              around it. A natural watercourse runs through the 85 acres at Tarahunise,
              north of Yelahanka — and rather than culvert it and build over the top, the
              master plan treats that corridor as the spine of the development.
            </p>
          </Reveal>

          <Reveal variant="up" delay={180}>
            <p className="text-gray-600 text-sm leading-relaxed">
              Embassy Riverine is the villa precinct of that township — 217 homes on
              roughly 50 acres, which works out to fewer than 4.5 villas per acre. That is
              a genuinely low density for Bangalore, and it is what makes the tree cover
              and the open sightlines possible rather than aspirational.
            </p>
          </Reveal>

          <Reveal variant="up" delay={240}>
            <p className="text-gray-600 text-sm leading-relaxed">
              The architects call the approach &ldquo;Natural Intelligence&rdquo;. In
              practice it means the most valuable land on the property was never sold.
            </p>
          </Reveal>

          <ul className="flex flex-col gap-2 mt-1">
            {checklist.map((item, i) => (
              <Reveal
                as="li"
                key={item}
                variant="up"
                delay={280 + i * 70}
                className="flex items-start gap-2 text-gray-700 text-sm"
              >
                <FaCheck className="mt-0.5 text-[#C8A24A] flex-shrink-0 text-sm" />
                <span>{item}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal variant="up" delay={560} className="mt-4">
            <button
              type="button"
              onClick={() => openModal()}
              className="btn-sheen inline-block bg-[#C8A24A] text-white text-xs font-bold tracking-[0.18em] uppercase px-7 py-3.5 rounded hover:bg-[#A8822E] transition-colors duration-300 cursor-pointer"
            >
              Download Brochure
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
