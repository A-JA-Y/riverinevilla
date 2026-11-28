"use client";

import { useId } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { useModal } from "./ModalContext";
import { project } from "@/data/project";
import { downloadBrochure, hasLeadCaptured } from "@/utils/downloadBrochure";

/**
 * Call-to-action card for the blog posts and guides (used from their MDX).
 *
 * Each `kind` has its own copy and action, and `title` / `body` can be
 * overridden so a card picks up the section it sits in:
 * - price, floorPlans, availability, visit: open the enquiry form, which
 *   records the lead, fires the conversion, downloads the brochure and goes
 *   to the thank-you page.
 * - brochure: downloads it straight away for a visitor who has already sent
 *   the form, otherwise opens the form (the same as the sticky brochure tab).
 * - talk: WhatsApp, with a call as the second option.
 * The other kinds offer WhatsApp and a call as a lighter second option.
 *
 * Promises in the copy (same-day cost sheet, seven-day site visits, pickup)
 * are the ones the brochure and the rest of the site already make.
 */

export type ArticleCtaKind = "price" | "floorPlans" | "availability" | "visit" | "brochure" | "talk";

const COPY: Record<ArticleCtaKind, { eyebrow: string; title: string; body: string; button: string }> = {
  price: {
    eyebrow: "Price List",
    title: "Get the live Embassy Riverine cost sheet",
    body: "Base price, GST, stamp duty, registration and the payment plan for the 4, 4.5 and 5 BHK villas, sent the same day.",
    button: "Get the Cost Sheet",
  },
  floorPlans: {
    eyebrow: "Floor Plans",
    title: "See the 4, 4.5 and 5 BHK floor plans",
    body: "Room-by-room layouts with the plot area, built-up area and car parks of each villa format.",
    button: "Request Floor Plans",
  },
  availability: {
    eyebrow: "Live Availability",
    title: "Ask which villas are still open",
    body: "What is left in each format, and which plots sit on the stream corridor, the trails or near the clubhouse.",
    button: "Check Availability",
  },
  visit: {
    eyebrow: "Site Visit",
    title: "Walk the stream corridor before you decide",
    body: "Site visits run seven days a week. We arrange pickup from Hebbal or Yelahanka and send the price sheet the same day.",
    button: "Book a Site Visit",
  },
  brochure: {
    eyebrow: "Brochure",
    title: "Download the Embassy Riverine brochure",
    body: "Configurations and indicative prices, the master plan, specifications, amenities and location, in one PDF.",
    button: "Download Brochure",
  },
  talk: {
    eyebrow: "Questions?",
    title: "Talk to us on WhatsApp or call",
    body: "Ask about price, possession, the payment plan or anything in this article.",
    button: "WhatsApp Us",
  },
};

const MESSAGE =
  "Hi, I am interested in Embassy Riverine villas at Embassy Origins, North Bangalore. Please share the price sheet and availability.";
const waHref = `https://wa.me/${project.whatsapp}?text=${encodeURIComponent(MESSAGE)}`;
const telHref = `tel:${project.phoneHref}`;

const primaryCls =
  "btn-sheen inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs font-bold uppercase tracking-[0.16em] px-6 py-3.5 rounded transition-colors cursor-pointer";
const secondaryCls =
  "inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#12302a] hover:text-[#A8822E] transition-colors";

const Arrow = () => (
  <svg width="12" height="12" viewBox="0 0 11 11" fill="none" aria-hidden="true">
    <path d="M1.5 5.5h8M6 2l3.5 3.5L6 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ArticleCta({
  kind,
  title,
  body,
}: {
  kind: ArticleCtaKind;
  title?: string;
  body?: string;
}) {
  const { openModal } = useModal();
  const titleId = useId();
  const copy = COPY[kind];

  const onPrimary = () => {
    if (kind === "brochure" && hasLeadCaptured()) downloadBrochure();
    else openModal();
  };

  return (
    <aside
      aria-labelledby={titleId}
      className="not-prose my-10 rounded-lg border border-[#e0d6bd] border-l-4 border-l-[#C8A24A] bg-[#F6F2E8] px-5 py-6 sm:px-7"
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A8822E] mb-2">{copy.eyebrow}</p>
      <p id={titleId} className="text-xl font-bold leading-snug text-[#12302a]">
        {title ?? copy.title}
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{body ?? copy.body}</p>

      <div className="mt-5 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-6 gap-y-3">
        {kind === "talk" ? (
          <>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className={primaryCls}>
              <FaWhatsapp className="text-base" aria-hidden="true" />
              {copy.button}
            </a>
            <a href={telHref} className={secondaryCls}>
              <FaPhoneAlt className="text-[11px] text-[#A8822E]" aria-hidden="true" />
              Call {project.phone}
            </a>
          </>
        ) : (
          <>
            <button type="button" onClick={onPrimary} className={primaryCls}>
              {copy.button}
              <Arrow />
            </button>
            <span className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <a href={waHref} target="_blank" rel="noopener noreferrer" className={secondaryCls}>
                <FaWhatsapp className="text-base text-[#25D366]" aria-hidden="true" />
                WhatsApp
              </a>
              <a href={telHref} className={secondaryCls}>
                <FaPhoneAlt className="text-[11px] text-[#A8822E]" aria-hidden="true" />
                {project.phone}
              </a>
            </span>
          </>
        )}
      </div>
    </aside>
  );
}
