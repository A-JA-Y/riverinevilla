import Link from "next/link";
import Reveal from "./Reveal";
import EnquiryButton from "./EnquiryButton";
import { configurations } from "@/data/project";

/** Home page — "Villa & Configuration": the format table and the three formats. */
export default function HomeConfigurations() {
  return (
    <section id="configurations" className="w-full bg-white py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal variant="up" className="max-w-3xl">
          <p className="uppercase text-xs font-semibold tracking-[0.22em] text-[#A8822E] mb-3">
            217 villas · three formats
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">
            Villa &amp; Configuration
          </h2>
          <span className="rule-grow mt-3" data-shown="" />
          <p className="text-gray-700 text-[15px] md:text-base leading-relaxed mt-5">
            Embassy Riverine villas come in three formats. Plot, built-up area and car parks
            are fixed for each format; the only variable is where in the precinct the villa
            stands.
          </p>
        </Reveal>

        {/* Format table */}
        <Reveal variant="up" className="mt-10">
          <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm">
            <table className="w-full text-sm text-left min-w-[640px]">
              <caption className="sr-only">
                Embassy Riverine villa types with plot area, built-up area, units, car parks
                and indicative price
              </caption>
              <thead className="bg-[#F6F2E8] text-[#A8822E] uppercase text-[11px] tracking-[0.12em]">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">Villa type</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Plot area</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Built-up area</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Units</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Car parks</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Indicative price</th>
                </tr>
              </thead>
              <tbody>
                {configurations.map((c) => (
                  <tr
                    key={c.id}
                    className="border-t border-[#e5dcc5] hover:bg-[#FAF8F3] transition-colors"
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 font-semibold text-[#12302a] text-left whitespace-nowrap"
                    >
                      {c.type}
                    </th>
                    <td className="px-5 py-4 text-gray-600 whitespace-nowrap">{c.plot}</td>
                    <td className="px-5 py-4 text-gray-600 whitespace-nowrap">{c.builtUp}</td>
                    <td className="px-5 py-4 text-gray-600">{c.units}</td>
                    <td className="px-5 py-4 text-gray-600">{c.parking}</td>
                    <td className="px-5 py-4 text-[#12302a] font-semibold whitespace-nowrap">
                      {c.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* The three formats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {configurations.map((c, i) => (
            <Reveal
              key={c.id}
              id={`format-${c.id}`}
              variant="up"
              delay={i * 110}
              className="card-lift bg-[#FAF8F3] rounded-xl p-6 border border-[#e5dcc5] border-t-[3px] border-t-[#C8A24A]"
            >
              <h3 className="text-lg font-bold text-[#12302a]">{c.short} villa</h3>
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#A8822E] mt-1">
                <span className="whitespace-nowrap">{c.plot} plot</span> ·{" "}
                <span className="whitespace-nowrap">{c.builtUp} built-up</span>
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mt-3">{c.blurb}</p>
            </Reveal>
          ))}
        </div>

        {/* RERA carpet-area note */}
        <Reveal
          variant="up"
          className="mt-10 bg-[#FAF8F3] border-l-[3px] border-[#C8A24A] rounded-r p-5"
        >
          <p className="text-gray-700 text-sm leading-relaxed">
            The{" "}
            <Link
              href="/about-embassy-riverine"
              className="text-[#A8822E] font-semibold link-wipe"
            >
              Embassy Riverine
            </Link>{" "}
            villa sizes above are built-up areas from the brochure. Ask for the RERA carpet
            area of the villa &amp; configuration you shortlist before comparing it with
            other projects, as marketing area and RERA area are not the same figure.
          </p>
        </Reveal>

        <Reveal variant="up" className="mt-8">
          <EnquiryButton>Check Availability by Configuration</EnquiryButton>
        </Reveal>
      </div>
    </section>
  );
}
