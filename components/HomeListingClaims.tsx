import Link from "next/link";
import Reveal from "./Reveal";
import { listingClaims, rera } from "@/data/project";

/**
 * Home page — "What the listings get wrong": the figures circulating on portals
 * against the RERA record. Rows come from `listingClaims` in data/project.ts.
 */
export default function HomeListingClaims() {
  return (
    <section
      id="listing-claims"
      className="w-full bg-white py-16 md:py-20 px-6 border-t border-[#e5dcc5]"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal variant="up" className="max-w-3xl">
          <p className="uppercase text-xs font-semibold tracking-[0.22em] text-[#A8822E] mb-3">
            Checked against the filing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">
            What the listings get wrong
          </h2>
          <span className="rule-grow mt-3" data-shown="" />
          <p className="text-gray-700 text-[15px] md:text-base leading-relaxed mt-5">
            Search for this project and you will find figures that contradict each other.
            Here is what the RERA record says, against what is circulating. We compiled this
            by reading the filing ourselves and checking it against the listings then ranking
            on page one.
          </p>
        </Reveal>

        <Reveal variant="up" className="mt-10">
          <div className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm">
            <table className="w-full text-sm text-left min-w-[640px]">
              <caption className="sr-only">
                Claims circulating about Embassy Riverine, where they appear, and what the
                RERA record shows
              </caption>
              <thead className="bg-[#F6F2E8] text-[#A8822E] uppercase text-[11px] tracking-[0.12em]">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Claim you will see
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Where
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    What the record shows
                  </th>
                </tr>
              </thead>
              <tbody>
                {listingClaims.map((row) => (
                  <tr
                    key={row.claim}
                    className="border-t border-[#e5dcc5] hover:bg-[#FAF8F3] transition-colors"
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 font-semibold text-[#12302a] text-left align-top"
                    >
                      {row.claim}
                    </th>
                    <td className="px-5 py-4 text-gray-600 align-top">{row.where}</td>
                    <td className="px-5 py-4 text-[#12302a] align-top">{row.record}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal
          variant="up"
          className="mt-8 bg-[#FAF8F3] border-l-[3px] border-[#C8A24A] rounded-r p-5"
        >
          <p className="text-gray-700 text-sm leading-relaxed">
            Every number on this page comes from the RERA registration{" "}
            <span className="font-semibold text-[#12302a] break-all">{rera.villas}</span>, from
            the current developer cost sheet, or from our own site visit — and we say which.
            Where a portal disagrees with the filing, the filing is the one to trust. Our{" "}
            <Link href="/blogs/embassy-riverine-north-bangalore-buyers-guide-2026" className="text-[#A8822E] font-semibold link-wipe">
              Embassy Riverine buyer&apos;s guide
            </Link>{" "}
            walks through what to check before you book, and the{" "}
            <Link href="/news" className="text-[#A8822E] font-semibold link-wipe">
              latest news
            </Link>{" "}
            tracks launch and pricing updates. Verify
            it yourself on the{" "}
            <a
              href={rera.portal}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A8822E] font-semibold link-wipe"
            >
              Karnataka RERA portal
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
