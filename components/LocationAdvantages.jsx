"use client";

import Reveal from "./Reveal";
import { distances, project } from "@/data/project";

const MAP_QUERY = "Embassy+Origins,+Chapparkallu+Road,+Tarahunise,+Bettahalsur,+Bengaluru";
const MAP_EMBED = `https://maps.google.com/maps?q=${MAP_QUERY}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${project.lat},${project.lng}`;

const highlights = [
  "Chapparkallu Road, Tarahunise — just off NH-44",
  "15 km to Kempegowda International Airport, without entering the city",
  "2.5 km to Stonehill International School",
  "3 km to the Padukone-Dravid Centre for Sports Excellence",
  "6.5 km to Prestige Tech Cloud office park",
  "Doddajala, the nearest Metro Blue Line alignment point, 7.5 km away",
  "North of Yelahanka, in the Bettahalsur belt of Jala Hobli",
];

export default function LocationAdvantages() {
  return (
    <section className="w-full bg-white py-16 md:py-20 px-6" id="location">
      <div className="max-w-5xl mx-auto">
        <Reveal variant="up">
          <p className="text-center text-xs font-semibold uppercase mb-4 text-[#A8822E] tracking-[0.22em]">
            Location &amp; Connectivity
          </p>
          <h2 className="text-center font-bold text-[#12302a] mb-4 text-3xl md:text-4xl leading-tight">
            Twenty Minutes to the Airport, Without Entering the City
          </h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-12 md:mb-14 leading-relaxed">
            Embassy Riverine sits on Chapparkallu Road at Tarahunise, north of Yelahanka
            and just off NH-44 — the stretch of Bangalore that changed character fastest in
            the last decade.
          </p>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
          {/* Left: highlights */}
          <Reveal variant="left" className="flex-1 w-full max-w-lg">
            <h3 className="font-bold text-[#12302a] mb-3 text-base">Strategic Connectivity</h3>
            <p className="text-gray-600 leading-relaxed mb-7 text-sm">
              The airport anchored this corridor, the aerospace and hardware parks followed,
              and the international schools followed the families. What it buys you is a
              quiet, low-density site with a twenty-minute run to the international
              terminal.
            </p>

            <ul className="space-y-3.5">
              {highlights.map((item, i) => (
                <Reveal
                  as="li"
                  key={item}
                  variant="up"
                  delay={i * 70}
                  className="flex items-start gap-3"
                >
                  <span className="text-[#C8A24A] mt-0.5 flex-shrink-0" aria-hidden="true">
                    <svg width="15" height="12" viewBox="0 0 18 14" fill="none">
                      <path d="M1.5 7L6.5 12L16.5 1.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[#3d4f49] text-sm">{item}</span>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          {/* Right: map */}
          <Reveal variant="right" className="flex-1 w-full">
            <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md border border-[#e5dcc5]">
              <iframe
                src={MAP_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Embassy Riverine location map — Tarahunise, North Bangalore"
              />
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-[#A8822E] font-semibold link-wipe"
            >
              View on Google Maps →
            </a>
          </Reveal>
        </div>

        {/* Distance table */}
        <Reveal variant="up" className="mt-14">
          <h3 className="font-bold text-[#12302a] text-lg mb-4">Distance snapshot</h3>
          <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm">
            <table className="w-full text-sm text-left min-w-[480px]">
              <caption className="sr-only">
                Distances and drive times from the Embassy Origins township gate
              </caption>
              <thead className="bg-[#F6F2E8] text-[#A8822E] uppercase text-[11px] tracking-[0.12em]">
                <tr>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Destination</th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Distance</th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Drive Time</th>
                </tr>
              </thead>
              <tbody>
                {distances.map((d, i) => (
                  <tr
                    key={d.destination}
                    className={`border-t border-[#e5dcc5] transition-colors hover:bg-[#FAF8F3] ${
                      i % 2 ? "bg-[#fffdf8]" : "bg-white"
                    }`}
                  >
                    <td className="px-5 py-3.5 text-[#12302a]">{d.destination}</td>
                    <td className="px-5 py-3.5 text-gray-600 whitespace-nowrap">{d.distance}</td>
                    <td className="px-5 py-3.5 text-gray-600 whitespace-nowrap">{d.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-gray-500 italic mt-3 leading-relaxed">
            Distances are approximate and measured from the township gate by road. Drive
            times vary with traffic conditions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
