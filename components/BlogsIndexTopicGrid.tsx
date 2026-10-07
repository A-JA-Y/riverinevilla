"use client";

import { useMemo, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

/**
 * Topic filter + post grid for the listing pages (/blogs and /news).
 *
 * Renders two sections in the doc's order: the topic / category list (each
 * topic is a toggle that filters the posts) and the latest-posts grid. The
 * server page passes the copy in, so headings, topic descriptions and card
 * blurbs all come from the page's SEO doc.
 */

export type IndexTopic = {
  name: string;
  description: string;
};

export type IndexPost = {
  slug: string;
  title: string;
  image: string | StaticImageData;
  alt: string;
  /** Must match one of the topic names to be filterable. */
  topic: string;
  readTime?: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  blurb: string;
  /** Label of the "read" link, e.g. "Read the comparison". */
  cta: string;
};

type Props = {
  topicsHeading: string;
  topicsId: string;
  postsHeading: string;
  postsId: string;
  topics: IndexTopic[];
  posts: IndexPost[];
  basePath: "/blogs" | "/news";
  /** Singular and plural noun for the count line, e.g. ["guide", "guides"]. */
  noun: [string, string];
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** "2026-09-20" -> "20 September 2026", without time-zone drift. */
function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export default function BlogsIndexTopicGrid({
  topicsHeading,
  topicsId,
  postsHeading,
  postsId,
  topics,
  posts,
  basePath,
  noun,
}: Props) {
  const [active, setActive] = useState<string | null>(null);
  const postsRef = useRef<HTMLElement>(null);

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const p of posts) map[p.topic] = (map[p.topic] ?? 0) + 1;
    return map;
  }, [posts]);

  const filtered = active ? posts.filter((p) => p.topic === active) : posts;
  const single = filtered.length === 1;
  const countLabel = (n: number) => `${n} ${n === 1 ? noun[0] : noun[1]}`;

  const choose = (name: string) => {
    setActive((cur) => (cur === name ? null : name));
    // On phones the topic list is long: bring the results into view.
    const el = postsRef.current;
    if (el && el.getBoundingClientRect().top > window.innerHeight * 0.55) {
      const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Topics / categories */}
      <section
        id={topicsId}
        className="w-full bg-[#FAF8F3] py-16 md:py-20 px-6 border-y border-[#e5dcc5]"
      >
        <div className="max-w-5xl mx-auto">
          <Reveal variant="up" className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a]">{topicsHeading}</h2>
            <span aria-hidden="true" className="block h-[2px] w-12 bg-[#C8A24A] mt-4" />
          </Reveal>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((t, i) => {
              const isActive = active === t.name;
              const count = counts[t.name] ?? 0;
              return (
                <Reveal as="li" key={t.name} variant="up" delay={i * 60} className="h-full">
                  <button
                    type="button"
                    onClick={() => choose(t.name)}
                    aria-pressed={isActive}
                    aria-controls={postsId}
                    className={`w-full h-full text-left rounded-xl p-5 border transition-colors cursor-pointer ${
                      isActive
                        ? "bg-[#12302a] border-[#12302a]"
                        : "bg-white border-[#e5dcc5] hover:border-[#C8A24A]"
                    }`}
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span
                        className={`text-base font-semibold leading-snug ${
                          isActive ? "text-white" : "text-[#12302a]"
                        }`}
                      >
                        {t.name}
                      </span>
                      <span
                        className={`flex-shrink-0 mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${
                          isActive ? "text-[#E3C77E]" : "text-[#A8822E]"
                        }`}
                      >
                        {count ? countLabel(count) : `No ${noun[1]} yet`}
                      </span>
                    </span>
                    <span
                      className={`block mt-2 text-sm leading-relaxed ${
                        isActive ? "text-white/80" : "text-gray-600"
                      }`}
                    >
                      {t.description}
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Latest posts */}
      <section id={postsId} ref={postsRef} className="w-full bg-white py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal
            variant="up"
            className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a]">{postsHeading}</h2>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <p aria-live="polite">
                {countLabel(filtered.length)}
                {active ? ` in ${active}` : ""}
              </p>
              {active ? (
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="text-[#A8822E] font-semibold link-wipe cursor-pointer"
                >
                  Show all
                </button>
              ) : null}
            </div>
          </Reveal>

          {filtered.length === 0 ? (
            <p className="text-center text-gray-500 py-14 border border-dashed border-[#e5dcc5] rounded-xl">
              No {noun[1]} in {active} yet.
            </p>
          ) : (
            <div className={`grid gap-6 ${single ? "" : "md:grid-cols-2"}`}>
              {filtered.map((p, i) => {
                const href = `${basePath}/${p.slug}`;
                return (
                  <Reveal
                    as="article"
                    key={p.slug}
                    variant="up"
                    delay={i * 90}
                    className={`card-lift bg-[#FAF8F3] rounded-xl overflow-hidden border border-[#e5dcc5] shadow-sm group flex flex-col ${
                      single ? "md:flex-row" : ""
                    }`}
                  >
                    <div
                      className={`relative h-[210px] sm:h-[240px] overflow-hidden flex-shrink-0 ${
                        single ? "md:h-auto md:min-h-[300px] md:w-1/2" : ""
                      }`}
                    >
                      <Image
                        src={p.image}
                        alt={p.alt}
                        fill
                        sizes={single ? "(max-width: 768px) 100vw, 512px" : "(max-width: 768px) 100vw, 500px"}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className={`p-6 md:p-7 flex flex-col flex-1 ${single ? "md:justify-center" : ""}`}>
                      <p className="text-[11px] uppercase tracking-[0.14em] text-[#A8822E] font-semibold mb-3">
                        {p.topic}
                        {p.readTime ? ` · ${p.readTime}` : ""}
                        {" · "}
                        <time dateTime={p.date}>{formatDate(p.date)}</time>
                      </p>
                      <h3 className="text-lg md:text-xl font-semibold text-[#12302a] leading-snug mb-3">
                        <Link href={href} className="hover:text-[#A8822E] transition-colors">
                          {p.title}
                        </Link>
                      </h3>
                      <p className="text-[15px] text-gray-700 leading-relaxed flex-1">{p.blurb}</p>
                      <Link
                        href={href}
                        className="mt-5 inline-flex items-center gap-1.5 w-fit text-sm text-[#A8822E] font-semibold link-wipe"
                      >
                        {p.cta}
                        <svg width="12" height="12" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                          <path
                            d="M1.5 5.5h8M6 2l3.5 3.5L6 9"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
