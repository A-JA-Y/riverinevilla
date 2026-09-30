"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import plan4 from "@/assets/plan-4bhk.webp";
import plan45 from "@/assets/plan-45bhk.webp";
import plan5 from "@/assets/plan-5bhk.webp";
import masterPlan from "@/assets/master-plan.webp";

import Reveal from "./Reveal";
import { useModal } from "./ModalContext";
import { configurations, project, workingRate } from "@/data/project";

const planImages: Record<string, StaticImageData> = {
  "4bhk": plan4,
  "45bhk": plan45,
  "5bhk": plan5,
};

/** Which buyer each format actually suits. */
const guide = [
  {
    buyer: "Upgrading from a large apartment",
    villa: "4 BHK · from Rs 14.10 Cr",
    why: "The only format under 5,000 sq ft — the entry into the enclave without giving up the township.",
  },
  {
    buyer: "A family that wants a study and a guest room",
    villa: "4.5 BHK · from Rs 17.43 Cr",
    why: "The half suite absorbs the home office or the guest room without eating into the bedroom count.",
  },
  {
    buyer: "A multi-generational household",
    villa: "4.5 BHK · from Rs 17.43 Cr",
    why: "Largest release at 137 units, so there is real choice of position within the precinct.",
  },
  {
    buyer: "Wanting the largest plot and a pool deck",
    villa: "5 BHK · on request",
    why: "Only 32 units on 5,400 sq ft plots with six car parks. The format that runs out first.",
  },
];

export default function FloorPlanSection() {
  const { openModal, isLeadSubmitted } = useModal();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [active, setActive] = useState<(typeof configurations)[number] | null>(null);
  const [isMasterOpen, setIsMasterOpen] = useState(false);

  useEffect(() => {
    if (isLeadSubmitted) {
      setIsUnlocked(true);
      try {
        localStorage.setItem("plansUnlocked", "true");
      } catch {
        /* storage blocked */
      }
    } else {
      try {
        if (localStorage.getItem("plansUnlocked") === "true") setIsUnlocked(true);
      } catch {
        /* ignore */
      }
    }
  }, [isLeadSubmitted]);

  useEffect(() => {
    if (!active && !isMasterOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setActive(null);
      setIsMasterOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, isMasterOpen]);

  return (
    <section className="w-full py-16 md:py-20 px-6" id="floor-plans" aria-label="Embassy Riverine floor plans">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        {/* Intro */}
        <Reveal variant="up" className="text-center">
          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Embassy Riverine is a low-density villa enclave — every floor plan here is an
            independent standalone villa on its own plot, not an apartment unit. Three
            formats span 2,400 to 5,400 sq ft of plot and 4,200 to 6,800 sq ft of built-up
            area, at {workingRate}.
          </p>
          <button
            type="button"
            onClick={() => openModal()}
            className="btn-sheen mt-6 bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs px-8 py-3.5 rounded uppercase font-bold tracking-[0.16em] transition cursor-pointer"
          >
            Download Floor Plan PDF
          </button>
        </Reveal>

        {/* Plan cards */}
        <div>
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] text-center mb-8">
              The Three Floor Plans
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {configurations.map((c, i) => (
              <Reveal
                key={c.id}
                variant="up"
                delay={i * 110}
                className="card-lift bg-white rounded-xl shadow-sm overflow-hidden border border-[#e5dcc5]"
              >
                <button
                  type="button"
                  onClick={() => (isUnlocked ? setActive(c) : openModal())}
                  className="block w-full text-left cursor-pointer"
                  aria-label={isUnlocked ? `View the ${c.type} floor plan` : `Unlock the ${c.type} floor plan`}
                >
                  <div className="relative h-52 overflow-hidden bg-[#F6F2E8]">
                    <Image
                      src={planImages[c.id]}
                      alt={`${c.type} floor plan — ${c.plot} plot, ${c.builtUp} built-up, ${c.parking} car parks`}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
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
                        <span className="text-[11px] uppercase tracking-[0.18em]">Unlock to view</span>
                      </span>
                    )}
                    <span className="absolute top-3 left-3 bg-[#C8A24A] text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-[0.12em]">
                      {c.short}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-[#12302a]">{c.type}</h3>
                    <p className="text-[13px] text-[#A8822E] font-semibold mt-0.5">
                      {c.plot} plot · {c.builtUp} built-up
                    </p>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed line-clamp-3">
                      {c.blurb}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {c.features.slice(0, 3).map((f) => (
                        <span key={f} className="text-[10px] bg-[#F6F2E8] text-[#5c6b65] px-2 py-1 rounded border border-[#e8dfc8]">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Selection guide */}
        <div>
          <Reveal variant="up">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] text-center mb-8">
              Which Floor Plan Suits You
            </h2>
          </Reveal>

          <Reveal variant="up" className="overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm">
            <table className="w-full text-sm border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-[#12302a] text-white text-left">
                  <th scope="col" className="px-5 py-3.5 font-semibold">If you are…</th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Recommended</th>
                  <th scope="col" className="px-5 py-3.5 font-semibold">Why</th>
                </tr>
              </thead>
              <tbody>
                {guide.map((g, i) => (
                  <tr
                    key={g.buyer}
                    className={`border-t border-[#e5dcc5] hover:bg-[#FAF8F3] transition-colors ${
                      i % 2 ? "bg-[#fffdf8]" : "bg-white"
                    }`}
                  >
                    <th scope="row" className="px-5 py-3.5 font-medium text-[#12302a] text-left">
                      {g.buyer}
                    </th>
                    <td className="px-5 py-3.5 font-semibold text-[#A8822E] whitespace-nowrap">
                      {g.villa}
                    </td>
                    <td className="px-5 py-3.5 text-gray-600">{g.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>

        {/* Master plan */}
        <div>
          <Reveal variant="up" className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-4">
              Embassy Origins Master Plan
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm leading-relaxed">
              The township blueprint that surrounds every villa: the riparian corridor, the
              80-foot primary spine, the central lake, the 40,000 sq ft clubhouse, the 19
              acres of reserved open space and the apartment parcel buffering NH-44.
            </p>
          </Reveal>

          <Reveal variant="zoom">
            <button
              type="button"
              onClick={() => (isUnlocked ? setIsMasterOpen(true) : openModal())}
              className="relative w-full rounded-xl overflow-hidden shadow-lg cursor-pointer group max-w-4xl mx-auto block border border-[#e5dcc5]"
            >
              <Image
                src={masterPlan}
                alt="Embassy Origins master plan — 85 acres, 217 villas, 19 acres of open space"
                className={`w-full h-[260px] md:h-[380px] object-cover transition duration-500 ${
                  isUnlocked ? "group-hover:scale-[1.03]" : "blur-[4px] scale-105"
                }`}
                sizes="(max-width: 768px) 100vw, 900px"
              />
              <span className="absolute inset-0 flex flex-col items-center justify-center bg-[#0b1f1a]/55 text-white">
                <span className="text-lg font-semibold">Embassy Origins Master Plan</span>
                <span className="text-sm mt-1 text-white/80">
                  {isUnlocked ? "Click to view and download" : "Unlock to access"}
                </span>
                <span className="mt-4 bg-[#C8A24A] text-white text-[11px] px-6 py-2.5 rounded uppercase tracking-[0.16em] font-bold">
                  {isUnlocked ? "View Master Plan" : "Unlock Now"}
                </span>
              </span>
              <span className="absolute top-3 left-3 bg-[#C8A24A] text-white text-[10px] px-2.5 py-1 rounded uppercase tracking-[0.12em] font-bold">
                Premium
              </span>
            </button>
          </Reveal>
        </div>

        {/* PDF request */}
        <Reveal variant="up" className="bg-[#F6F2E8] rounded-xl p-6 md:p-10 text-center border border-[#e0d6bd]">
          <h2 className="text-2xl md:text-3xl font-bold text-[#12302a] mb-4">
            Floor Plan PDF — Download
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm mb-3 leading-relaxed">
            The Embassy Riverine brochure carries the dimensioned layouts for all three
            formats, the master plan, the configuration table and the specification
            annexure.
          </p>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
            Share your name, phone and preferred configuration and our team will email the
            latest PDF along with the current price sheet.
          </p>

          <button
            type="button"
            onClick={() => openModal()}
            className="btn-sheen bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs font-bold px-8 py-4 rounded uppercase tracking-[0.16em] transition cursor-pointer"
          >
            Email Me the Floor Plan PDF
          </button>

          <p className="text-sm text-gray-500 mt-6">
            For the latest price on any format, see the{" "}
            <Link href="/price" className="text-[#A8822E] font-semibold link-wipe">
              price page
            </Link>{" "}
            or request a callback from{" "}
            <Link href="/contact-us" className="text-[#A8822E] font-semibold link-wipe">
              contact us
            </Link>
            .
          </p>
        </Reveal>
      </div>

      {/* Lightboxes */}
      {active && (
        <Lightbox
          onClose={() => setActive(null)}
          title={`${active.type} — ${active.plot} plot`}
          subtitle={`${active.builtUp} built-up · ${active.parking} car parks · ${active.priceFrom}`}
        >
          <Image
            src={planImages[active.id]}
            alt={`${active.type} floor plan`}
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, 900px"
          />
          <div className="mt-3 flex flex-wrap gap-2">
            {active.features.map((f) => (
              <span key={f} className="text-xs bg-[#F6F2E8] text-[#5c6b65] px-2.5 py-1 rounded-full border border-[#e0d6bd]">
                {f}
              </span>
            ))}
          </div>
        </Lightbox>
      )}

      {isMasterOpen && (
        <Lightbox
          onClose={() => setIsMasterOpen(false)}
          title="Embassy Origins Master Plan"
          subtitle="85 acres · 217 villas · 19 acres reserved open space"
        >
          <Image
            src={masterPlan}
            alt="Embassy Origins master plan"
            className="w-full h-auto object-contain mb-4"
            sizes="(max-width: 768px) 100vw, 980px"
          />
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href={project.brochure}
              download
              className="bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs font-bold px-6 py-3 rounded uppercase tracking-[0.16em] transition-colors"
            >
              Download the Brochure
            </a>
            <button
              type="button"
              onClick={() => {
                setIsMasterOpen(false);
                openModal();
              }}
              className="bg-[#F6F2E8] text-[#12302a] text-xs font-bold px-6 py-3 rounded uppercase tracking-[0.16em] hover:bg-[#e8dfc8] transition-colors"
            >
              Request Full Details
            </button>
          </div>
        </Lightbox>
      )}
    </section>
  );
}

function Lightbox({
  children,
  onClose,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  onClose: () => void;
  title: string;
  subtitle?: string;
}) {
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
          <h3 className="text-lg font-bold text-[#12302a]">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
        </div>

        {children}
      </div>
    </div>
  );
}
