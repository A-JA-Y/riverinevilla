"use client";

import Image from "next/image";
import Reveal from "./Reveal";

import acres from "@/assets/township-85-acres.webp";
import riverine from "@/assets/township-riverine.webp";
import trees from "@/assets/township-trees.webp";
import lake from "@/assets/township-lake.webp";
import club from "@/assets/township-clubhouse.webp";

const cards = [
  {
    title: "85-Acre Embassy Origins Township",
    note: "Master-planned by Bhumiputra Architecture",
    image: acres,
  },
  {
    title: "A Protected Riparian Corridor",
    note: "The watercourse became the spine, not a culvert",
    image: riverine,
  },
  {
    title: "4,000 Trees, 100–120 Species",
    note: "Retained and planted across the site",
    image: trees,
  },
  {
    title: "Central Lake & 19 Acres Open",
    note: "Threaded through the streets, not walled into one park",
    image: lake,
  },
  {
    title: "40,000 Sq Ft Riverine Clubhouse",
    note: "Walking distance from every cluster",
    image: club,
  },
];

export default function TownshipSection() {
  return (
    <section className="w-full bg-white py-16 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal variant="up">
          <p className="text-center uppercase mb-3 text-[#A8822E] tracking-[0.22em] text-xs font-semibold">
            The Township
          </p>
          <h2 className="text-center font-semibold text-[#12302a] mb-4 text-[clamp(1.75rem,4vw,2.6rem)] leading-tight">
            Embassy Origins
          </h2>
          <p className="text-center text-gray-500 mb-12 md:mb-14 max-w-2xl mx-auto text-sm leading-relaxed">
            Eighty-five acres at Tarahunise, split in two by the riparian corridor. The
            villa precinct takes the protected inner ground; the apartments sit on the
            outer edge as a buffer against NH-44.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
          {cards.map((card, i) => (
            <Reveal
              key={card.title}
              variant="up"
              delay={i * 90}
              className="card-lift relative h-60 sm:h-56 rounded-2xl overflow-hidden group shadow-md"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 240px"
                quality={76}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0b1f1a]/88 via-[#0b1f1a]/25 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-white text-sm font-semibold leading-snug">{card.title}</p>
                <p className="text-white/0 group-hover:text-white/75 text-[11px] leading-snug mt-1 max-h-0 group-hover:max-h-16 overflow-hidden transition-all duration-500">
                  {card.note}
                </p>
                <span className="mt-2 block h-[2px] w-0 group-hover:w-10 bg-[#C8A24A] transition-all duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
