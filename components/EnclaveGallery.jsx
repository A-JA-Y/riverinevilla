"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { useModal } from "./ModalContext";

import villa1 from "@/assets/villa-exterior-1.webp";
import villa3 from "@/assets/villa-exterior-3.webp";
import corridor from "@/assets/riparian-corridor.webp";
import living from "@/assets/villa-living-room.webp";
import bedroom from "@/assets/spec-bedroom.webp";
import hall from "@/assets/spec-kitchen.webp";
import dining from "@/assets/spec-dining.webp";
import bathroom from "@/assets/spec-bathroom.webp";
import staircase from "@/assets/spec-staircase.webp";
import pool from "@/assets/outdoor-pool.webp";
import lake from "@/assets/township-lake.webp";
import yoga from "@/assets/yoga-pavilion.webp";

// Order matters: with tall frames at these positions the grid packs into full
// rows at both 2 and 4 columns (4 tall + 8 single = 16 cells).
const shots = [
  { src: villa1, alt: "Villa facade at Embassy Riverine", caption: "Villa facade", tall: true },
  { src: corridor, alt: "The protected riparian corridor", caption: "The riparian corridor" },
  { src: living, alt: "Living volume with 2.9 m finished ceilings", caption: "Living · 2.9 m ceilings" },
  { src: staircase, alt: "Villa staircase", caption: "Staircase", tall: true },
  { src: pool, alt: "Outdoor resort-style pool", caption: "Resort pool" },
  { src: hall, alt: "Marble-floored entrance hall and staircase", caption: "Entrance hall · marble" },
  { src: dining, alt: "Formal dining in premium marble", caption: "Dining · marble" },
  { src: bedroom, alt: "Bedroom with engineered wood flooring", caption: "Engineered wood floors", tall: true },
  { src: villa3, alt: "Villa street within the precinct", caption: "Villa street", tall: true },
  { src: bathroom, alt: "Master bathroom with rain shower", caption: "Master bath" },
  { src: lake, alt: "The central lake with a landscaped edge", caption: "Central lake" },
  { src: yoga, alt: "Yoga and meditation pavilion", caption: "Yoga pavilion" },
];

export default function EnclaveGallery() {
  const { openModal } = useModal();
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i + 1) % shots.length);
      if (e.key === "ArrowLeft") setOpen((i) => (i - 1 + shots.length) % shots.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6" id="gallery">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <Reveal variant="up" className="text-center">
          <p className="uppercase text-xs font-semibold tracking-[0.22em] text-[#A8822E] mb-3">
            The Gallery
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">
            Inside the Enclave
          </h2>
          <p className="text-gray-600 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            The corridor, the clubhouse and the volumes inside the villas. Tap any frame to
            open it full-size.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[130px] sm:auto-rows-[160px] md:auto-rows-[180px] gap-3 md:gap-4">
          {shots.map((shot, i) => (
            <Reveal
              key={shot.caption}
              variant="zoom"
              delay={(i % 4) * 80}
              className={`relative rounded-lg overflow-hidden group ${
                shot.tall ? "row-span-2" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="absolute inset-0 w-full h-full cursor-zoom-in"
                aria-label={`Open image: ${shot.caption}`}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 280px"
                  quality={74}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#0b1f1a]/80 via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <span className="absolute bottom-0 left-0 right-0 p-3 text-left">
                  <span className="block text-white text-[11px] sm:text-xs font-semibold translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                    {shot.caption}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" className="text-center">
          <p className="text-sm text-gray-600 mb-3">
            Want the full set, including the cost sheet and payment schedule?
          </p>
          <button
            type="button"
            onClick={() => openModal()}
            className="btn-sheen inline-block bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs font-bold px-7 py-3.5 rounded uppercase tracking-[0.18em] transition-colors cursor-pointer"
          >
            Get Full Details
          </button>
        </Reveal>
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#06140f]/92 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={shots[open].alt}
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute top-5 right-5 grid place-items-center w-11 h-11 rounded-full bg-white/10 hover:bg-[#C8A24A] text-white text-xl transition-colors"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((i) => (i - 1 + shots.length) % shots.length);
            }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 rounded-full bg-white/10 hover:bg-[#C8A24A] text-white text-2xl transition-colors"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((i) => (i + 1) % shots.length);
            }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 rounded-full bg-white/10 hover:bg-[#C8A24A] text-white text-2xl transition-colors"
          >
            ›
          </button>

          <figure
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={shots[open].src}
              alt={shots[open].alt}
              className="w-full h-auto max-h-[78vh] object-contain rounded-lg"
              sizes="100vw"
              priority
            />
            <figcaption className="text-center text-white/80 text-sm mt-4">
              {shots[open].caption}
              <span className="text-white/40 ml-2">
                {open + 1} / {shots.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
