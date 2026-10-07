import Image from "next/image";
import Reveal from "./Reveal";
import { specifications } from "@/data/project";

import bedroom from "@/assets/spec-bedroom.webp";
import kitchen from "@/assets/spec-kitchen.webp";
import bathroom from "@/assets/spec-bathroom.webp";

const specImages = [
  { src: bedroom, alt: "Engineered wood flooring in an Embassy Riverine villa bedroom" },
  { src: kitchen, alt: "Kitchen with stone counter in an Embassy Riverine villa" },
  { src: bathroom, alt: "Master bathroom with rain shower in an Embassy Riverine villa" },
];

/** Home page — "Specifications": the six specification headings, as cards. */
export default function HomeSpecifications() {
  return (
    <section id="specifications" className="w-full bg-white py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal variant="up" className="max-w-3xl">
          <p className="uppercase text-xs font-semibold tracking-[0.22em] text-[#A8822E] mb-3">
            Interiors &amp; finish
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">
            Specifications
          </h2>
          <span className="rule-grow mt-3" data-shown="" />
        </Reveal>

        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {specifications.map((s, i) => (
            <Reveal
              key={s.title}
              variant="up"
              delay={(i % 3) * 90}
              className="card-lift bg-[#FAF8F3] rounded-xl p-6 border border-[#e5dcc5] border-t-[3px] border-t-[#C8A24A]"
            >
              <dt className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#A8822E]">
                {s.title}
              </dt>
              <dd className="text-gray-700 text-sm leading-relaxed mt-2">{s.body}</dd>
            </Reveal>
          ))}
        </dl>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-8">
          {specImages.map((img) => (
            <Reveal
              key={img.alt}
              variant="zoom"
              className="relative h-24 sm:h-36 md:h-44 rounded-lg overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 33vw, 320px"
                quality={72}
                className="object-cover"
              />
            </Reveal>
          ))}
        </div>

        <Reveal
          variant="up"
          className="mt-8 bg-[#FAF8F3] border-l-[3px] border-[#C8A24A] rounded-r p-5"
        >
          <p className="text-gray-700 text-sm leading-relaxed">
            Specifications are indicative. The annexure to your agreement to sell is the
            binding document; read it before you sign.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
