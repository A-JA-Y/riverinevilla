"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { faqs as allFaqs } from "@/data/project";

export default function FaqAccordion({
  faqs = allFaqs,
  title = "Frequently Asked Questions",
  eyebrow = "Good to Know",
  className = "bg-white",
}) {
  const [open, setOpen] = useState(0);

  return (
    <section className={`w-full py-16 md:py-20 px-6 ${className}`} id="faq">
      <div className="max-w-3xl mx-auto">
        <Reveal variant="up" className="text-center mb-10">
          {eyebrow && (
            <p className="uppercase text-xs font-semibold tracking-[0.22em] text-[#A8822E] mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">
            {title}
          </h2>
        </Reveal>

        <div className="divide-y divide-[#e5dcc5] border-y border-[#e5dcc5]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.question} variant="up" delay={i * 45}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-btn-${i}`}
                    className="w-full flex items-start justify-between gap-4 text-left py-5 group cursor-pointer"
                  >
                    <span
                      className={`text-[15px] font-semibold leading-snug transition-colors ${
                        isOpen ? "text-[#A8822E]" : "text-[#12302a] group-hover:text-[#A8822E]"
                      }`}
                    >
                      {f.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex-shrink-0 mt-0.5 grid place-items-center w-6 h-6 rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "bg-[#C8A24A] border-[#C8A24A] text-white rotate-45"
                          : "border-[#d9cfb5] text-[#A8822E] group-hover:border-[#C8A24A]"
                      }`}
                    >
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-gray-600 leading-relaxed pb-5 pr-9">
                      {f.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
