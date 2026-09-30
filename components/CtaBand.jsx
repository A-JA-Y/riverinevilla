"use client";

import Reveal from "./Reveal";
import { useModal } from "./ModalContext";

/**
 * Section 14 CTA blocks. `variant="scarcity"` is block A (mid-page),
 * `variant="visit"` is block B (pre-footer).
 */
export default function CtaBand({ variant = "scarcity" }) {
  const { openModal } = useModal();

  const copy =
    variant === "visit"
      ? {
          eyebrow: "Book a Site Visit",
          headline: "See the riverine corridor before it is landscaped.",
          body: "Site visits run seven days a week. We arrange pickup from Hebbal or Yelahanka, walk you through the master plan on site, and send the price sheet the same day.",
          button: "Book a Site Visit",
        }
      : {
          eyebrow: "Limited Release",
          headline: "Only 32 of the 217 villas are 5 BHK.",
          body: "The largest format at Embassy Riverine is also the smallest release. If that is the one you want, the conversation is worth having early.",
          button: "Check 5 BHK Availability",
        };

  return (
    <section className="w-full px-6 py-14 md:py-16 bg-[#F6F2E8] border-y border-[#e0d6bd]">
      <Reveal
        variant="up"
        className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center gap-6 md:gap-10 text-center md:text-left"
      >
        <div className="flex-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#A8822E] mb-2.5">
            {copy.eyebrow}
          </p>
          <h2 className="text-2xl md:text-[1.9rem] font-bold text-[#12302a] leading-tight">
            {copy.headline}
          </h2>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed max-w-xl md:max-w-none mx-auto">
            {copy.body}
          </p>
        </div>

        <button
          type="button"
          onClick={() => openModal()}
          className="btn-sheen flex-shrink-0 inline-flex items-center justify-center gap-2 bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs font-bold uppercase tracking-[0.16em] px-8 py-4 rounded transition-colors cursor-pointer"
        >
          {copy.button}
          <svg width="12" height="12" viewBox="0 0 11 11" fill="none" aria-hidden="true">
            <path d="M1.5 5.5h8M6 2l3.5 3.5L6 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </Reveal>
    </section>
  );
}
