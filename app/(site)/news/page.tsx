"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import NewsData from "@/data/newsData";
import StickyDownloadButton from "@/components/StickyButton";

type News = {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  excerpt: string;
  date: string;
};

export default function NewsPage() {
  const sorted: News[] = useMemo(
    () =>
      [...NewsData].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  );

  const featured = sorted[0];
  const rest = sorted.slice(1);

  const categories = ["All", ...Array.from(new Set(NewsData.map((n) => n.category)))];
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? rest : rest.filter((n) => n.category === active);

  if (!featured) return null;

  return (
    <section className="w-full min-h-screen bg-white">

      {/* ── HERO ── */}
      <div className="bg-gray-50 border-b border-gray-100 px-6 pt-12 pb-8">
        <div className="max-w-5xl mx-auto">

          <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
            News &amp; Updates
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8 leading-tight">
            What&apos;s happening
          </h1>

          {/* Featured */}
          <Link href={`/news/${featured.slug}`}>
            <div className="grid md:grid-cols-2 gap-0 rounded-2xl border border-gray-100 overflow-hidden group hover:border-gray-200 transition-colors bg-white">
              <div className="relative w-full h-56 md:h-auto bg-gradient-to-br from-indigo-50 to-blue-100">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-center">
                <span className="inline-block text-xs font-semibold tracking-wide text-blue-600 bg-blue-50 rounded-full px-3 py-1 mb-4 w-fit">
                  {featured.category}
                </span>

                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug group-hover:text-gray-600 transition-colors mb-3">
                  {featured.title}
                </h2>

                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  {featured.excerpt}
                </p>

                <p className="text-xs text-gray-400">
                  {new Date(featured.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </Link>

          {/* ── FILTERS ── */}
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-sm px-4 py-1.5 rounded-full border transition-all ${active === cat
                    ? "bg-gray-900 text-white border-gray-900"
                    : "border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* ── GRID ── */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <p className="text-sm text-gray-400 mb-6">
          {filtered.length} {filtered.length === 1 ? "story" : "stories"}
          {active !== "All" && ` in ${active}`}
        </p>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-16">No stories in this category yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((news) => (
              <Link key={news.id} href={`/news/${news.slug}`}>
                <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-colors h-full flex flex-col">
                  <div className="relative w-full h-40 bg-gradient-to-br from-purple-50 to-indigo-100">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-500 mb-2">
                      {news.category}
                    </p>

                    <h3 className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-gray-600 transition-colors mb-2 flex-1">
                      {news.title}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                      {news.excerpt}
                    </p>

                    <p className="text-xs text-gray-400 mt-3">
                      {new Date(news.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="relative">
        <StickyDownloadButton />
      </div>

    </section>
  );
}

