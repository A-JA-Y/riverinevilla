"use client";

import Image from "next/image";
import Link from "next/link";
import { blogData } from "@/data/blogData";
import Reveal from "./Reveal";

export default function BlogSection() {
  const latest = [...blogData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="w-full bg-white py-16 md:py-20 px-6" id="blog">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <Reveal variant="up" className="text-center">
          <p className="uppercase text-xs font-semibold tracking-[0.22em] text-[#A8822E] mb-3">
            Our Blog
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">
            Insights &amp; Investment Guides
          </h2>
        </Reveal>

        {/* flex-wrap + centre, so one or two cards sit in the middle rather than
            leaving empty columns on the right */}
        <div className="flex flex-wrap justify-center gap-6">
          {latest.map((item, i) => (
            <Reveal
              as="article"
              key={item.id}
              variant="up"
              delay={i * 110}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc((100%-48px)/3)] card-lift bg-[#FAF8F3] rounded-xl overflow-hidden border border-[#e5dcc5] shadow-sm group"
            >
              <Link href={`/blogs/${item.slug}`} className="block">
                <div className="relative h-[190px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.altText || item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    quality={74}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#A8822E] font-semibold mb-2">
                    {item.category}
                    {item.readTime ? ` · ${item.readTime}` : ""}
                  </p>
                  <h3 className="font-semibold text-[#12302a] mb-2 leading-snug group-hover:text-[#A8822E] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                  <span className="inline-block mt-3 text-xs font-semibold text-[#A8822E] link-wipe">
                    Read more →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal variant="up" className="text-center mt-2">
          <Link
            href="/blogs"
            className="btn-sheen inline-block px-7 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white bg-[#C8A24A] rounded hover:bg-[#A8822E] transition-colors"
          >
            Read More Articles
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
