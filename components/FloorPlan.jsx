"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";

import plan4 from "@/assets/plan-4bhk.webp";
import plan45 from "@/assets/plan-45bhk.webp";
import plan5 from "@/assets/plan-5bhk.webp";
import masterPlan from "@/assets/master-plan.webp";

import Reveal from "./Reveal";
import { useModal } from "./ModalContext";
import { configurations, project } from "@/data/project";

const planImages = { "4bhk": plan4, "45bhk": plan45, "5bhk": plan5 };
const STORAGE_KEY = "plansUnlocked";

/* localStorage as an external store, so the "unlocked" flag survives reloads
   without a setState-in-effect round trip. */
const subscribeStorage = (callback) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};
const readStoredUnlock = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false; // storage blocked
  }
};

/** Plans are unlocked once a lead has been submitted, now or on an earlier visit. */
function usePlansUnlocked() {
  const { isLeadSubmitted } = useModal();
  const stored = useSyncExternalStore(subscribeStorage, readStoredUnlock, () => false);

  useEffect(() => {
    if (!isLeadSubmitted) return;
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      /* storage blocked — unlocked for this session only */
    }
  }, [isLeadSubmitted]);

  return isLeadSubmitted || stored;
}

/** Locks page scroll and closes on Escape while a lightbox is open. */
function useLightbox(isOpen, close) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);
}

/** Home page — "Floor Plan": the three villa plans, unlocked after an enquiry. */
export default function PlansSection() {
  const { openModal } = useModal();
  const isUnlocked = usePlansUnlocked();
  const [activePlan, setActivePlan] = useState(null);
  const closePlan = useCallback(() => setActivePlan(null), []);
  useLightbox(Boolean(activePlan), closePlan);

  return (
    <section className="w-full py-16 md:py-20 px-6 bg-white" id="plans">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <Reveal variant="up" className="max-w-3xl">
          <p className="uppercase text-xs font-semibold tracking-[0.22em] text-[#A8822E] mb-3">
            Independent villas
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">
            Floor Plan
          </h2>
          <span className="rule-grow mt-3" data-shown="" />
          <p className="text-gray-700 text-[15px] md:text-base mt-5 leading-relaxed">
            Each Embassy Riverine{" "}
            <Link href="/floor-plans" className="text-[#A8822E] font-semibold link-wipe">
              floor plan
            </Link>{" "}
            is for an independent villa on its own plot, with 3.4 m floor-to-floor height
            and finished ceilings close to 2.9 m in the main living spaces. Double-glazed
            sliding systems open the living areas onto the garden.
          </p>
        </Reveal>

        {/* Plan cards */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {configurations.map((c, i) => (
            <Reveal
              as="li"
              key={c.id}
              variant="up"
              delay={i * 110}
              className="card-lift rounded-xl overflow-hidden border border-[#e5dcc5] bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => (isUnlocked ? setActivePlan(c) : openModal())}
                className="block w-full text-left cursor-pointer"
                aria-label={
                  isUnlocked
                    ? `View the ${c.short} floor plan`
                    : `Unlock the ${c.short} floor plan`
                }
              >
                <div className="relative h-44 overflow-hidden bg-[#F6F2E8]">
                  <Image
                    src={planImages[c.id]}
                    alt={`Embassy Riverine ${c.short} floor plan — ${c.plot} plot, ${c.builtUp} built-up`}
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className={`object-cover object-top transition duration-500 ${
                      isUnlocked ? "hover:scale-105" : "blur-[5px] scale-105"
                    }`}
                  />
                  {!isUnlocked && (
                    <span className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-[#0b1f1a]/55 text-white">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <rect x="3" y="11" width="18" height="11" rx="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      <span className="text-[11px] uppercase tracking-[0.18em]">Unlock</span>
                    </span>
                  )}
                  <span className="absolute top-3 left-3 bg-[#C8A24A] text-white text-[10px] font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded">
                    {c.short}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-[#12302a]">{c.short} floor plan</h3>
                  <p className="text-[13px] text-gray-700 mt-1.5 leading-relaxed">
                    {c.plot} plot · {c.builtUp} built-up · {c.parking} car parks
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </ul>

        <Reveal variant="up" className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
          <p className="text-gray-700 text-[15px] leading-relaxed flex-1">
            The full{" "}
            <Link href="/floor-plans" className="text-[#A8822E] font-semibold link-wipe">
              floor plan
            </Link>{" "}
            set and the Embassy Riverine brochure go out on WhatsApp or email the same day
            you ask.
          </p>
          <button
            type="button"
            onClick={() => openModal()}
            className="btn-sheen flex-shrink-0 inline-flex items-center justify-center gap-2 bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs font-bold uppercase tracking-[0.16em] px-7 py-4 rounded transition-colors cursor-pointer"
          >
            Request Floor Plans
            <svg width="12" height="12" viewBox="0 0 11 11" fill="none" aria-hidden="true">
              <path d="M1.5 5.5h8M6 2l3.5 3.5L6 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </Reveal>
      </div>

      {/* Floor-plan lightbox */}
      {activePlan && (
        <Lightbox
          onClose={closePlan}
          title={`${activePlan.type} — ${activePlan.plot} plot`}
          subtitle={`${activePlan.builtUp} built-up · ${activePlan.parking} car parks · ${activePlan.priceFrom}`}
        >
          <Image
            src={planImages[activePlan.id]}
            alt={`Embassy Riverine ${activePlan.short} floor plan`}
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, 860px"
          />
          <div className="mt-3 flex flex-wrap gap-2">
            {activePlan.features.map((f) => (
              <span key={f} className="text-xs bg-[#F6F2E8] text-[#5c6b65] px-2.5 py-1 rounded-full border border-[#e0d6bd]">
                {f}
              </span>
            ))}
          </div>
        </Lightbox>
      )}
    </section>
  );
}

/**
 * The Embassy Origins master-plan image. Locked behind an enquiry until a lead
 * has been submitted; then it opens full size with a brochure download.
 * `label` is the call-to-action text shown on the image.
 */
export function MasterPlanViewer({ label = "View the Master Plan" }) {
  const { openModal } = useModal();
  const isUnlocked = usePlansUnlocked();
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);
  useLightbox(isOpen, close);

  return (
    <>
      <button
        type="button"
        onClick={() => (isUnlocked ? setIsOpen(true) : openModal())}
        aria-label={isUnlocked ? label : `${label} (opens the enquiry form)`}
        className="relative block w-full rounded-xl overflow-hidden shadow-lg cursor-pointer group border border-[#e5dcc5]"
      >
        <Image
          src={masterPlan}
          alt="Embassy Origins master plan — 85 acres, 217 villas, 19 acres of open space"
          className={`w-full h-[240px] md:h-[340px] object-cover transition duration-500 ${
            isUnlocked ? "group-hover:scale-[1.03]" : "blur-[4px] scale-105"
          }`}
          sizes="(max-width: 768px) 100vw, 520px"
        />
        <span className="absolute inset-0 flex flex-col items-center justify-center bg-[#0b1f1a]/55 text-white px-4 text-center">
          <span className="text-lg font-semibold">Embassy Origins Master Plan</span>
          <span className="text-sm mt-1 text-white/80">
            {isUnlocked ? "Click to view and download" : "Unlock to access"}
          </span>
          <span className="mt-4 bg-[#C8A24A] text-white text-[11px] font-bold px-6 py-2.5 rounded uppercase tracking-[0.16em]">
            {label}
          </span>
        </span>
      </button>

      {isOpen && (
        <Lightbox
          onClose={close}
          title="Embassy Origins Master Plan"
          subtitle="85 acres · 217 villas · 19 acres reserved open space"
        >
          <Image
            src={masterPlan}
            alt="Embassy Origins master plan"
            className="w-full h-auto object-contain mb-4"
            sizes="(max-width: 768px) 100vw, 980px"
          />
          <a
            href={project.brochure}
            download
            className="inline-block bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs font-bold px-6 py-3 rounded uppercase tracking-[0.16em] transition-colors"
          >
            Download the Brochure
          </a>
        </Lightbox>
      )}
    </>
  );
}

function Lightbox({ children, onClose, title, subtitle }) {
  return (
    <div
      className="fixed inset-0 bg-[#06140f]/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <div
        className="relative bg-white p-4 rounded-xl max-w-4xl w-full max-h-[92vh] overflow-auto text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 grid place-items-center w-9 h-9 rounded-full bg-[#F6F2E8] text-[#12302a] hover:bg-[#C8A24A] hover:text-white transition-colors text-lg"
        >
          ✕
        </button>

        <div className="text-left mb-3 pr-12">
          <p className="text-lg font-bold text-[#12302a]">{title}</p>
          {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
        </div>

        {children}
      </div>
    </div>
  );
}
