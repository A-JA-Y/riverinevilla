import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import PhotoCredit from "./PhotoCredit";
import VideoFacade from "./VideoFacade";
import type { PhotoCreditInfo } from "@/data/photoCredits";

/**
 * Building blocks for the long-form guide pages. The guide copy lives in MDX
 * (content/guides); these give it the same look as the rest of the site:
 * full-width sections in alternating tones, site headings, gold links and the
 * site's table style.
 */

const linkCls = "text-[#A8822E] font-semibold link-wipe";

/** One band of the page. The prose sits in a reading-width column. */
export function GuideSection({
  tone = "white",
  children,
}: {
  tone?: "white" | "cream";
  children: ReactNode;
}) {
  return (
    <section
      className={`w-full py-14 md:py-16 px-6 ${
        tone === "cream" ? "bg-[#FAF8F3] border-y border-[#e5dcc5]" : "bg-white"
      }`}
    >
      <Reveal variant="up" className="max-w-3xl mx-auto">
        {children}
      </Reveal>
    </section>
  );
}

export function GuideToc({ items }: { items: { label: string; href: string }[] }) {
  return (
    <nav
      aria-label="In this guide"
      className="mt-10 rounded-lg border border-[#e5dcc5] bg-[#FAF8F3] px-5 py-5 sm:px-6"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A8822E] mb-3">
        In this guide
      </p>
      <ol className="list-decimal pl-5 space-y-1.5 marker:text-[#A8822E] marker:text-[13px]">
        {items.map((item) => (
          <li key={item.href} className="text-[14px] leading-snug">
            <a href={item.href} className="text-[#12302a] hover:text-[#A8822E] transition-colors">
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function GuideFigure({
  src,
  alt,
  caption,
  credit,
  priority = false,
}: {
  /** A static import, so the build knows the image's width and height. */
  src: StaticImageData;
  alt: string;
  caption?: ReactNode;
  credit?: PhotoCreditInfo;
  priority?: boolean;
}) {
  return (
    <figure className="my-9">
      <Image
        src={src}
        alt={alt}
        priority={priority}
        sizes="(max-width: 800px) 100vw, 768px"
        className="w-full h-auto rounded-lg border border-[#e5dcc5]"
      />
      {caption || credit ? (
        <figcaption className="mt-2.5 text-[13px] leading-relaxed text-gray-500">
          {caption}
          {credit ? (
            <PhotoCredit credit={credit} className="block mt-0.5 text-[11.5px] text-gray-400" />
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** The click-to-load YouTube player with a caption, for use mid-article. */
export function GuideVideo({
  id,
  title,
  caption,
}: {
  id: string;
  title: string;
  caption?: ReactNode;
}) {
  return (
    <figure className="my-9">
      <VideoFacade id={id} title={title} />
      {caption ? (
        <figcaption className="mt-2.5 text-[13px] leading-relaxed text-gray-500">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

/** Element styles for guide MDX, passed as the content's `components` prop. */
export const guideMdxComponents: MDXComponents = {
  h2: ({ children, ...rest }) => (
    <h2
      className="text-2xl md:text-3xl font-bold text-[#12302a] leading-tight mb-6 scroll-mt-28"
      {...rest}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...rest }) => (
    <h3 className="text-xl font-bold text-[#12302a] mt-8 mb-3 scroll-mt-28" {...rest}>
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-[15.5px] md:text-base leading-relaxed text-gray-700 mb-5 last:mb-0">
      {children}
    </p>
  ),
  strong: ({ children }) => <strong className="font-semibold text-[#12302a]">{children}</strong>,
  a: ({ href = "#", children }) =>
    href.startsWith("/") || href.startsWith("#") ? (
      <Link href={href} className={linkCls}>
        {children}
      </Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkCls}>
        {children}
      </a>
    ),
  ul: ({ children }) => (
    <ul className="list-disc pl-5 space-y-2.5 mb-6 text-[15.5px] md:text-base leading-relaxed text-gray-700 marker:text-[#C8A24A]">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-5 space-y-2.5 mb-6 text-[15.5px] md:text-base leading-relaxed text-gray-700 marker:text-[#A8822E] marker:font-semibold">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  /* the site's table style (see the price page); scrolls inside its box on phones */
  table: ({ children }) => (
    <div className="my-8 overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm bg-white">
      <table className="w-full min-w-[560px] text-sm text-left">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-[#F6F2E8] text-[#A8822E] uppercase text-[11px] tracking-[0.12em]">
      {children}
    </thead>
  ),
  th: ({ children }) => <th className="px-4 py-3.5 font-semibold align-top">{children}</th>,
  tr: ({ children }) => (
    <tr className="border-t border-[#e5dcc5] first:border-t-0 hover:bg-[#FAF8F3] transition-colors">
      {children}
    </tr>
  ),
  td: ({ children }) => <td className="px-4 py-3.5 text-gray-600 align-top">{children}</td>,
};
