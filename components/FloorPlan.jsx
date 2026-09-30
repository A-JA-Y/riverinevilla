"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import plan4 from "@/assets/plan-4bhk.webp";
import plan45 from "@/assets/plan-45bhk.webp";
import plan5 from "@/assets/plan-5bhk.webp";
import masterPlan from "@/assets/master-plan.webp";

import Reveal from "./Reveal";
import { useModal } from "./ModalContext";
import { configurations, project } from "@/data/project";

const planImages = { "4bhk": plan4, "45bhk": plan45, "5bhk": plan5 };

export default function PlansSection() {
  const { openModal, isLeadSubmitted } = useModal();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activePlan, setActivePlan] = useState(null);
  const [isMasterOpen, setIsMasterOpen] = useState(false);

  useEffect(() => {
    if (isLeadSubmitted) {
      setIsUnlocked(true);
      try {
        localStorage.setItem("plansUnlocked", "true");
      } catch {
        /* storage blocked — unlock for this session only */
      }
    } else {
      try {
        if (localStorage.getItem("plansUnlocked") === "true") setIsUnlocked(true);
      } catch {
        /* ignore */
      }
    }
  }, [isLeadSubmitted]);

  /* Close whichever lightbox is open on Escape. */
  useEffect(() => {
    if (!activePlan && !isMasterOpen) return;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setActivePlan(null);
      setIsMasterOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activePlan, isMasterOpen]);

  return (
    <section className="w-full py-16 md:py-20 px-6 bg-white" id="plans">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <Reveal variant="up" className="text-center">
          <h6 className="uppercase text-xs font-semibold tracking-[0.22em] text-[#A8822E] mb-3">
            Floor Plans
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold text-[#12302a] leading-tight">
            Three Layouts, No Towers
          </h2>
          <p className="text-gray-600 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
            Every home at Embassy Riverine is an independent villa. Plot, built-up area and
            car parks are fixed per format — the only thing that varies is where in the
            precinct it sits.
          </p>
        </Reveal>

        {/* Configuration cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {configurations.map((c, i) => (
            <Reveal
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
                    ? `View the ${c.type} floor plan`
                    : `Unlock the ${c.type} floor plan`
                }
              >
                <div className="relative h-44 overflow-hidden bg-[#F6F2E8]">
                  <Image
                    src={planImages[c.id]}
                    alt={`${c.type} floor plan — ${c.plot} plot, ${c.builtUp} built-up`}
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
                  <h3 className="text-base font-bold text-[#12302a]">{c.type}</h3>
                  <p className="text-[13px] text-[#A8822E] font-semibold mt-0.5">
                    {c.builtUp} · {c.priceFrom}
                  </p>
                  <dl className="grid grid-cols-3 gap-2 mt-3 text-center">
                    {[
                      ["Plot", c.plot],
                      ["Units", String(c.units)],
                      ["Parks", String(c.parking)],
                    ].map(([k, v]) => (
                      <div key={k} className="bg-[#F6F2E8] rounded py-2 border border-[#e8dfc8]">
                        <dt className="text-[9px] uppercase tracking-[0.1em] text-[#8a9690]">{k}</dt>
                        <dd className="text-[12px] font-semibold text-[#12302a] mt-0.5">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Master plan */}
        <Reveal variant="up" className="flex flex-col items-center text-center mt-2">
          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#A8822E]">Master Plan</h3>
          <p className="text-gray-600 text-sm mb-6 max-w-lg leading-relaxed">
            The riparian corridor, the 80-foot spine, the 19 acres of reserved open space
            and where each villa cluster sits within them.
          </p>

          <button
            type="button"
            onClick={() => (isUnlocked ? setIsMasterOpen(true) : openModal())}
            className="relative w-full md:w-[78%] rounded-xl overflow-hidden shadow-lg cursor-pointer group border border-[#e5dcc5]"
          >
            <Image
              src={masterPlan}
              alt="Embassy Origins master plan — 85 acres, 217 villas, 19 acres of open space"
              className={`w-full h-[240px] md:h-[360px] object-cover transition duration-500 ${
                isUnlocked ? "group-hover:scale-[1.03]" : "blur-[4px] scale-105"
              }`}
              sizes="(max-width: 768px) 100vw, 860px"
            />
            <span className="absolute inset-0 flex flex-col items-center justify-center bg-[#0b1f1a]/55 text-white">
              <span className="text-lg font-semibold">Embassy Origins Master Plan</span>
              <span className="text-sm mt-1 text-white/80">
                {isUnlocked ? "Click to view and download" : "Unlock to access"}
              </span>
              <span className="mt-4 bg-[#C8A24A] text-white text-[11px] font-bold px-6 py-2.5 rounded uppercase tracking-[0.16em]">
                {isUnlocked ? "View Plan" : "Unlock Now"}
              </span>
            </span>
            <span className="absolute top-3 left-3 bg-[#C8A24A] text-white text-[10px] px-2.5 py-1 rounded uppercase tracking-[0.12em] font-bold">
              Premium
            </span>
          </button>
        </Reveal>
      </div>

      {/* Floor-plan lightbox */}
      {activePlan && (
        <Lightbox
          onClose={() => setActivePlan(null)}
          title={`${activePlan.type} — ${activePlan.plot} plot`}
          subtitle={`${activePlan.builtUp} built-up · ${activePlan.parking} car parks · ${activePlan.priceFrom}`}
        >
          <Image
            src={planImages[activePlan.id]}
            alt={`${activePlan.type} floor plan`}
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

      {/* Master-plan lightbox */}
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
          <a
            href={project.brochure}
            download
            className="inline-block bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs font-bold px-6 py-3 rounded uppercase tracking-[0.16em] transition-colors"
          >
            Download the Brochure
          </a>
        </Lightbox>
      )}
    </section>
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
          <h3 className="text-lg font-bold text-[#12302a]">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
        </div>

        {children}
      </div>
    </div>
  );
}
