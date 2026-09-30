/**
 * mdx-components.tsx
 */

import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import React from "react";

export { Link };

/* ─────────────────────────────────────────────
   TYPES
───────────────────────────────────────────── */

type StatItem = { value: string; label: string };
type ConnItem = { label: string; dist: string };
type GridCard = { title: string; body: string };
type PriceRow = { config: string; size: string; price: string; rate: string };
type FAQItem = { q: string; a: string };
type AngleCard = { icon: string; title: string; body: string; tags: string[] };
type RentalCard = { title: string; range: string; note: string };








/* ─────────────────────────────────────────────
   TAG CHIP
───────────────────────────────────────────── */

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-emerald-50 text-emerald-900 text-[10.5px] font-medium px-2.5 py-0.5 rounded-full mr-1.5 mb-1 font-sans">
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────
   CALLOUT / ALERT
───────────────────────────────────────────── */

export function Callout({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "success" | "note";
}) {
  const styles = {
    info: "bg-blue-50 border-blue-100 text-blue-900",
    warning: "bg-amber-50 border-amber-100 text-amber-900",
    success: "bg-emerald-50 border-emerald-100 text-emerald-900",
    note: "bg-gray-50 border-gray-200 text-gray-900",
  };

  const icons = {
    info: "ℹ️",
    warning: "⚠️",
    success: "✅",
    note: "📝",
  };

  return (
    <div className={`flex gap-4 p-5 rounded-xl border my-8 ${styles[type]}`}>
      <span className="text-xl flex-shrink-0">{icons[type]}</span>
      <div className="text-[15px] leading-relaxed font-light">
        {children}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   YOUTUBE
───────────────────────────────────────────── */

export function YouTube({ id, title }: { id: string; title?: string }) {
  return (
    <div className="my-10 overflow-hidden rounded-2xl shadow-xl aspect-video bg-gray-100 border border-gray-100">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title ?? "YouTube video player"}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   LEAD PARAGRAPH
───────────────────────────────────────────── */

export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[1.2rem] md:text-[1.35rem] leading-relaxed text-gray-700 font-light mb-10 border-b border-gray-50 pb-8">
      {children}
    </p>
  );
}

/* ─────────────────────────────────────────────
   FLEX GRID
───────────────────────────────────────────── */

export function Grid({ children, cols = 2 }: { children: React.ReactNode; cols?: number }) {
  const colMap: Record<number, string> = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };
  return (
    <div className={`grid grid-cols-1 ${colMap[cols] || "md:grid-cols-2"} gap-6 my-10`}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   TYPOGRAPHY / HEADINGS
───────────────────────────────────────────── */

export function H1({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className="font-serif text-[2.5rem] md:text-[3.2rem] leading-tight font-bold text-gray-900 mb-8 tracking-tight"
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className="font-serif text-[1.8rem] md:text-[2.1rem] leading-snug font-semibold text-gray-900 mt-16 mb-6 pb-3 border-b-2 border-emerald-600/20 relative group scroll-mt-24"
      {...props}
    >
      <span className="absolute -left-0 bottom-[-2px] w-16 h-[2px] bg-emerald-600 transition-all duration-300 group-hover:w-24"></span>
      {children}
    </h2>
  );
}

export function H3({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className="font-serif text-[1.4rem] md:text-[1.6rem] leading-relaxed font-semibold text-gray-800 mt-12 mb-5 scroll-mt-24"
      {...props}
    >
      {children}
    </h3>
  );
}

export function H4({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className="font-sans text-[1.1rem] uppercase tracking-widest font-bold text-emerald-800 mt-10 mb-4"
      {...props}
    >
      {children}
    </h4>
  );
}

export function H5({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      className="text-lg font-serif italic text-emerald-700 mt-10 mb-4"
      {...props}
    >
      {children}
    </h5>
  );
}

export function H6({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h6
      className="text-sm font-sans uppercase tracking-[0.2em] font-medium text-gray-400 mt-8 mb-4"
      {...props}
    >
      {children}
    </h6>
  );
}

/* ─────────────────────────────────────────────
   HERO BAND
───────────────────────────────────────────── */

export function HeroBand({
  label,
  title,
  isH1=true,
  sub,
  tags = [],
}: {
  label: string;
  title: string;
  isH1:Boolean;
  sub: string;
  tags?: string[];
}) {
  return (
    <div className="relative bg-gray-50 rounded-xl px-8 pt-8 pb-7 mb-10 overflow-hidden border-l-4 border-emerald-600">
      <p className="text-[10.5px] tracking-widest uppercase text-emerald-600 font-medium mb-2">
        {label}
      </p>
      {isH1 ?(<h1 className="font-serif text-[2rem] leading-snug font-semibold text-gray-900 mb-3">
        {title}
      </h1>):( <h2 className="font-serif text-[2rem] leading-snug font-semibold text-gray-900 mb-3">
        {title}
      </h2>)
      }
      
      <p className="text-[0.95rem] text-gray-500 font-light leading-relaxed">
        {sub}
      </p>
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   TABLE OF CONTENTS
───────────────────────────────────────────── */

export function TOC({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="border border-gray-200 rounded-xl px-6 py-5 mb-10">
      <p className="text-[11px] uppercase tracking-widest text-gray-400 font-medium mb-3">
        Contents
      </p>
      <ol className="list-decimal list-inside space-y-1">
        {items.map((item) => (
          <li key={item.href} className="text-sm text-gray-500">
            <Link href={item.href} className="text-emerald-600 hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STAT GRID
───────────────────────────────────────────── */

export function StatGrid({ items }: { items: StatItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 my-7">
      {items.map((s) => (
        <div
          key={s.label}
          className="bg-gray-50 rounded-lg px-4 py-3.5 text-center"
        >
          <div className="font-serif text-2xl text-emerald-600 font-semibold">
            {s.value}
          </div>
          <div className="text-[10.5px] uppercase tracking-wide text-gray-400 mt-1">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   PULL QUOTE
───────────────────────────────────────────── */

export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-[3px] border-emerald-500 pl-5 pr-4 py-3.5 my-7 bg-gray-50 rounded-r-lg">
      <div className="font-serif text-[1.1rem] italic text-gray-700 font-normal m-0">
        {children}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PRICE TABLE
───────────────────────────────────────────── */

export function PriceTable({ rows }: { rows: PriceRow[] }) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {["Configuration", "Size Range", "Price Range", "Avg. Rate/sq. ft."].map((h) => (
              <th
                key={h}
                className="bg-emerald-800 text-white px-3.5 py-2.5 text-left font-medium text-[0.82rem]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-gray-50" : "bg-white"}>
              <td className="px-3.5 py-2.5 border-b border-gray-100 font-normal text-gray-800">
                {row.config}
              </td>
              <td className="px-3.5 py-2.5 border-b border-gray-100 font-light text-gray-600">
                {row.size}
              </td>
              <td className="px-3.5 py-2.5 border-b border-gray-100 font-light text-gray-600">
                {row.price}
              </td>
              <td className="px-3.5 py-2.5 border-b border-gray-100 font-light text-gray-600">
                {row.rate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-[0.75rem] text-gray-400 mt-2">
        Prices are indicative based on resale market data, April 2026.
        Golf-facing and corner villas carry a 5–10% premium.
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   INFO GRID
───────────────────────────────────────────── */

export function InfoGrid({ cards }: { cards: GridCard[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-5">
      {cards.map((c) => (
        <div
          key={c.title}
          className="bg-gray-50 rounded-lg px-4 py-3.5 text-sm text-gray-500 font-light"
        >
          <strong className="block text-gray-900 font-medium mb-1 text-[0.9rem]">
            {c.title}
          </strong>
          {c.body}
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   CONNECTIVITY LIST
───────────────────────────────────────────── */

export function ConnList({ items }: { items: ConnItem[] }) {
  return (
    <div className="border border-gray-200 rounded-lg px-4 py-3 my-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={`flex items-start gap-3 py-2.5 ${i < items.length - 1 ? "border-b border-gray-100" : ""
            }`}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5" />
          <span className="flex-1 text-sm text-gray-800">{item.label}</span>
          <span className="text-[0.8rem] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded-full flex-shrink-0">
            {item.dist}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   ANGLE CARDS
───────────────────────────────────────────── */

export function AngleGrid({ cards }: { cards: AngleCard[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
      {cards.map((c) => (
        <div
          key={c.title}
          className="border border-gray-200 rounded-xl p-5"
        >
          <div className="text-2xl mb-2">{c.icon}</div>
          <h3 className="text-[0.975rem] font-medium text-gray-900 mb-2 mt-0">
            {c.title}
          </h3>
          <p className="text-sm text-gray-500 font-light leading-relaxed mb-3 mt-0">
            {c.body}
          </p>
          <div className="flex flex-wrap gap-1">
            {c.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   RENTAL GRID
───────────────────────────────────────────── */

export function RentalGrid({ cards }: { cards: RentalCard[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-5">
      {cards.map((c) => (
        <div
          key={c.title}
          className="bg-gray-50 rounded-lg px-4 py-3.5 text-sm"
        >
          <strong className="block text-gray-900 font-medium mb-1">
            {c.title}
          </strong>
          <span className="text-gray-700">{c.range}</span>
          <br />
          <span className="text-[0.8rem] text-gray-400">{c.note}</span>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   FAQ ACCORDION
───────────────────────────────────────────── */

export function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="space-y-2 my-4">
      {items.map((item, i) => (
        <details
          key={i}
          className="border border-gray-200 rounded-lg overflow-hidden group"
        >
          <summary className="flex justify-between items-center px-4 py-3.5 text-sm font-medium text-gray-900 cursor-pointer bg-gray-50 hover:bg-white list-none select-none">
            {item.q}
            <span className="text-gray-400 text-xs ml-3 flex-shrink-0 transition-transform group-open:rotate-180">
              ▾
            </span>
          </summary>
          <div className="px-4 py-3 text-sm text-gray-500 font-light leading-relaxed bg-white">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   CTA BOX
───────────────────────────────────────────── */

export function CTABox({
  title,
  sub,
  buttonLabel,
  href,
}: {
  title: string;
  sub: string;
  buttonLabel: string;
  href: string;
}) {
  return (
    <div className="bg-emerald-800 rounded-xl px-8 py-7 my-10 text-center">
      <h3 className="font-serif text-2xl text-white font-semibold mb-2">
        {title}
      </h3>
      <p className="text-white/80 text-sm mb-5 leading-relaxed">{sub}</p>
      <Link
        href={href}
        className="inline-block bg-white text-emerald-800 text-sm font-medium px-6 py-2.5 rounded-md hover:bg-emerald-50 transition-colors"
      >
        {buttonLabel}
      </Link>
    </div>
  );
}

/* ─────────────────────────────────────────────
   DISCLAIMER
───────────────────────────────────────────── */

export function Disclaimer({ description }: { description: string }) {
  return (
    <div className="text-[0.75rem] text-gray-400 text-center mt-6 leading-relaxed">
      {description}
    </div>
  );
}


/* ─────────────────────────────────────────────
   OPTIMISED IMAGE WRAPPER
───────────────────────────────────────────── */

function MDXImage(props: ImageProps) {
  return (
    <Image
      {...props}
      alt={props.alt ?? ""}
      className="rounded-xl w-full h-auto"
    />
  );
}

/* ─────────────────────────────────────────────
   NEWS SPECIFIC COMPONENTS (HTML REPLICATION)
───────────────────────────────────────────── */

export function ArticleWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[680px] mx-auto py-6 md:py-12 px-4 md:px-0" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
      {children}
    </div>
  );
}

export function NewsCategory({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-[#1a3a2a] text-[#a8d5b5] text-[11px] font-medium tracking-[0.08em] uppercase px-[10px] py-[4px] rounded-[3px] mb-4 font-sans">
      {children}
    </span>
  );
}

export function NewsHeadline({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-[30px] font-[900] leading-[1.18] text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
      {children}
    </h1>
  );
}

export function NewsSubhead({ children }: { children: React.ReactNode }) {
  return (
    <div className="italic text-[16px] font-[300] text-gray-500 leading-[1.6] mb-4 pl-4 border-l-[3px] border-[#2e7d52]" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
      {children}
    </div>
  );
}

export function NewsMeta({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 py-3 border-t-[0.5px] border-b-[0.5px] border-gray-200 mb-6 flex-wrap text-[12px] text-gray-500 font-sans">
      {children}
    </div>
  );
}

export function NewsStatGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-[10px] my-6">
      {children}
    </div>
  );
}

export function NewsStatCard({ num, label }: { num: string; label: string }) {
  return (
    <div className="bg-gray-50 border-[0.5px] border-gray-200 rounded-lg p-4 text-center">
      <span className="text-[26px] font-[700] text-[#2e7d52] block leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif" }}>
        {num}
      </span>
      <span className="font-sans text-[11px] text-gray-400 mt-1 block leading-[1.4]">
        {label}
      </span>
    </div>
  );
}


export function NewsPullQuote({ quote, cite }: { quote: string; cite: string }) {
  return (
    <div className="my-6 p-5 md:p-6 bg-gray-50 border-l-4 border-[#2e7d52] rounded-r-lg">
      <p className="italic text-[18px] text-gray-800 mb-2 leading-[1.5]" style={{ fontFamily: "'Playfair Display', serif" }}>
        "{quote}"
      </p>
      {cite && (
        <cite className="font-sans text-[12px] text-gray-400 not-italic">
          — {cite}
        </cite>
      )}
    </div>
  );
}

export function NewsHighlightBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-[#f0faf4] border-[0.5px] border-[#a8d5b5] rounded-lg p-5 md:p-6 my-6">
      <h4 className="font-sans text-[12px] font-[500] uppercase tracking-[0.06em] text-[#2e7d52] mb-3">
        {title}
      </h4>
      <ul className="list-disc pl-5 space-y-1">
        {items.map((item, i) => (
          <li key={i} className="text-[14px] leading-[1.7] text-gray-800" style={{ fontFamily: "'Source Serif 4', Georgia, serif" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function NewsCTAStrip({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4 my-10 flex-wrap items-center">
      {children}
    </div>
  );
}
export function NewsButton({
  href,
  title,
  variant = "primary",
}: {
  href: string;
  title: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link
      href={href}
      className={`
        group relative inline-flex items-center justify-center
        px-6 py-2 text-sm font-medium tracking-wide
        transition-all duration-300 ease-out
        rounded-[2px]
        ${variant === "primary"
          ? "bg-[#1a3a2a] text-white shadow-sm hover:shadow-md hover:bg-[#224d38] active:scale-[0.98]"
          : "bg-transparent text-[#1a3a2a] border border-[#1a3a2a]/40 hover:border-[#1a3a2a] hover:bg-[#f5f5f5] active:scale-[0.98]"
        }
      `}
    >
      {title}
    </Link>
  );
}


/* ─────────────────────────────────────────────
   EXPORT — useMDXComponents
───────────────────────────────────────────── */

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,

    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,

    p: ({ children }) => (
      <p className="text-[17.5px] leading-[1.85] text-gray-600 font-light mb-6">
        {children}
      </p>
    ),



    strong: ({ children }) => (
      <strong className="font-medium text-gray-900">
        {children}
      </strong>
    ),

    ul: ({ children }) => (
      <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 text-[15.5px]">
        {children}
      </ul>
    ),

    ol: ({ children }) => (
      <ol className="list-decimal pl-5 space-y-2 mb-6 text-gray-600 text-[15.5px]">
        {children}
      </ol>
    ),

    li: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),

    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 my-6">
        {children}
      </blockquote>
    ),


    img: (props) => <MDXImage {...(props as ImageProps)} />,
    a: ({ href, children, ...rest }) => (
      <Link
        href={href ?? "#"}
        className="text-[#2e7d52] font-medium underline underline-offset-4 decoration-emerald-200 hover:decoration-[#2e7d52] transition-colors"
        {...rest}
      >
        {children}
      </Link>
    ),
    hr: () => <hr className="border-none border-t border-gray-200 my-8" />,

    HeroBand,
    TOC,
    StatGrid,
    PullQuote,
    PriceTable,
    InfoGrid,
    ConnList,
    AngleGrid,
    RentalGrid,
    FAQ,
    CTABox,
    Disclaimer,
    Tag,

    /* News Components */
    ArticleWrap,
    NewsCategory,
    NewsHeadline,
    NewsSubhead,
    NewsMeta,
    NewsStatGrid,
    NewsStatCard,
    NewsPullQuote,
    NewsHighlightBox,
    NewsCTAStrip,
    NewsButton,
    Link,

    Callout,
    YouTube,
    Lead,
    Grid,
  };
}