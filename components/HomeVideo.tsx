"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const VIDEO_ID = "15bfrmFi1X8";
const VIDEO_TITLE = "Embassy Riverine Villas Price & Site Visit | North Bangalore 2026";

/**
 * Home page — "Video walkthrough". A click-to-load facade: only the thumbnail
 * loads with the page, and the YouTube player (and its scripts) is swapped in
 * when the visitor presses play.
 */
export default function HomeVideo() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="video"
      className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-t border-[#e5dcc5]"
    >
      <div className="max-w-5xl mx-auto">
        <Reveal variant="up" className="max-w-3xl">
          <p className="uppercase text-xs font-semibold tracking-[0.22em] text-[#A8822E] mb-3">
            Price &amp; site visit
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">
            Embassy Riverine Video Walkthrough
          </h2>
          <span className="rule-grow mt-3" data-shown="" />
          <p className="text-gray-700 text-[15px] md:text-base leading-relaxed mt-5">
            A walk through the site at Tharahunise, the villa formats and the current{" "}
            <Link href="/price" className="text-[#A8822E] font-semibold link-wipe">
              Embassy Riverine price
            </Link>
            . Watch it alongside the{" "}
            <Link href="/master-plan" className="text-[#A8822E] font-semibold link-wipe">
              master plan
            </Link>{" "}
            and the{" "}
            <Link href="/location-connectivity" className="text-[#A8822E] font-semibold link-wipe">
              location map
            </Link>
            , then{" "}
            <Link href="/contact-us" className="text-[#A8822E] font-semibold link-wipe">
              book a site visit
            </Link>{" "}
            to see it for yourself.
          </p>
        </Reveal>

        <Reveal variant="up" className="mt-10">
          <div className="relative aspect-video overflow-hidden rounded-xl border border-[#e5dcc5] shadow-sm bg-[#0b1f1a]">
            {playing ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title={VIDEO_TITLE}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={`Play video: ${VIDEO_TITLE}`}
                className="group absolute inset-0 w-full h-full cursor-pointer"
              >
                <Image
                  src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt={VIDEO_TITLE}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover"
                />
                <span className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#C8A24A] group-hover:bg-[#A8822E] text-white shadow-lg transition-colors">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8 5.5v13l11-6.5z" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
