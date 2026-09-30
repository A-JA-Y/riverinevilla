"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { investmentCase, competitors } from "@/data/project";

export default function ReasonsToInvest() {
  return (
    <section className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6" id="investment">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <Reveal variant="up" className="text-center">
          <p className="uppercase text-xs font-semibold tracking-[0.22em] text-[#A8822E] mb-3">
            Why North Bangalore
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">
            Three Things Make the Airport Corridor Different
          </h2>
          <p className="text-gray-600 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
            Not the usual growth-corridor claims — the specific, checkable reasons this
            stretch of the city behaves differently from the rest of Bangalore.
          </p>
        </Reveal>

        <ol className="grid md:grid-cols-3 gap-6">
          {investmentCase.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              variant="up"
              delay={i * 110}
              className="card-lift bg-white rounded-xl p-6 border-t-[3px] border-[#C8A24A] shadow-sm"
            >
              <span className="block text-[#C8A24A]/35 text-4xl font-bold leading-none mb-3 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-bold text-[#12302a] mb-2.5 leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal variant="up" delay={120} className="bg-white rounded-xl p-6 md:p-8 border border-[#e5dcc5]">
          <h3 className="text-base font-bold text-[#12302a] mb-2">
            What else the same buyer is looking at
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Riverine is priced clearly above every one of these, on the strength of the
            township scale and the retained landscape. Worth knowing what you are comparing
            against:
          </p>
          <ul className="flex flex-wrap gap-2">
            {competitors.map((c) => (
              <li
                key={c}
                className="text-[12px] text-[#5c6b65] bg-[#F6F2E8] border border-[#e0d6bd] rounded-full px-3.5 py-1.5"
              >
                {c}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 text-sm leading-relaxed mt-5">
            For buyers this means a low-density enclave that is genuinely hard to
            replicate. For investors it is a bet on the corridor continuing to compress the
            gap with the traditional villa belts of Whitefield and Sarjapur.{" "}
            <Link href="/price" className="text-[#A8822E] font-semibold link-wipe">
              See the pricing
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
