"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import Image, { type StaticImageData } from "next/image";

import plan4 from "@/assets/plan-4bhk.webp";
import plan45 from "@/assets/plan-45bhk.webp";
import plan5 from "@/assets/plan-5bhk.webp";
import masterPlan from "@/assets/master-plan.webp";

import { useModal } from "./ModalContext";
import { project } from "@/data/project";
import { hasLeadCaptured } from "@/utils/downloadBrochure";

/**
 * Lead-gated floor plan viewer for /floor-plans.
 *
 * The page (a server component) owns the copy and wraps it in <FloorPlanViewer>.
 * <FloorPlanImage> and <MasterPlanTile> sit inside the copy wherever a drawing
 * belongs: blurred until the visitor has shared their details, then they open
 * the drawing in a lightbox.
 */

export type PlanId = "4bhk" | "45bhk" | "5bhk";

const planImages: Record<PlanId, StaticImageData> = {
  "4bhk": plan4,
  "45bhk": plan45,
  "5bhk": plan5,
};

type PlanDetail = {
  id: PlanId;
  /** Lightbox heading. */
  title: string;
  /** Figures line under the heading. */
  subtitle?: string;
  /** What the drawing contains. */
  detail?: string;
  alt: string;
};

type ViewerContextValue = {
  isUnlocked: boolean;
  openPlan: (plan: PlanDetail) => void;
  openMaster: () => void;
};

const ViewerContext = createContext<ViewerContextValue | null>(null);

function useViewer() {
  const ctx = useContext(ViewerContext);
  if (!ctx) throw new Error("FloorPlanImage and MasterPlanTile must sit inside <FloorPlanViewer>.");
  return ctx;
}

/* The unlock flag lives in localStorage (see utils/downloadBrochure). */
function subscribeToStorage(onChange: () => void) {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
}
const serverUnlocked = () => false;

export default function FloorPlanViewer({ children }: { children: ReactNode }) {
  const { openModal, isLeadSubmitted } = useModal();
  const storedUnlocked = useSyncExternalStore(subscribeToStorage, hasLeadCaptured, serverUnlocked);
  const isUnlocked = Boolean(isLeadSubmitted) || storedUnlocked;

  const [active, setActive] = useState<PlanDetail | null>(null);
  const [isMasterOpen, setIsMasterOpen] = useState(false);

  // Remember the unlock for later visits.
  useEffect(() => {
    if (!isLeadSubmitted) return;
    try {
      localStorage.setItem("plansUnlocked", "true");
    } catch {
      /* storage blocked */
    }
  }, [isLeadSubmitted]);

  // Escape closes the lightbox; lock page scroll while one is open.
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

  const value: ViewerContextValue = {
    isUnlocked,
    openPlan: (plan) => (isUnlocked ? setActive(plan) : openModal()),
    openMaster: () => (isUnlocked ? setIsMasterOpen(true) : openModal()),
  };

  return (
    <ViewerContext.Provider value={value}>
      {children}

      {active && (
        <Lightbox onClose={() => setActive(null)} title={active.title} subtitle={active.subtitle}>
          <Image
            src={planImages[active.id]}
            alt={active.alt}
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, 900px"
          />
          {active.detail ? (
            <p className="mt-3 text-left text-sm text-gray-600 leading-relaxed">{active.detail}</p>
          ) : null}
        </Lightbox>
      )}

      {isMasterOpen && (
        <Lightbox
          onClose={() => setIsMasterOpen(false)}
          title="Embassy Origins Master Plan"
          subtitle="85 acres · 217 villas · 19 acres of open space"
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
              className="bg-[#F6F2E8] text-[#12302a] text-xs font-bold px-6 py-3 rounded uppercase tracking-[0.16em] hover:bg-[#e8dfc8] transition-colors cursor-pointer"
            >
              Request Full Details
            </button>
          </div>
        </Lightbox>
      )}
    </ViewerContext.Provider>
  );
}

function LockOverlay({ label = "Unlock to view" }: { label?: string }) {
  return (
    <span className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-[#0b1f1a]/55 text-white">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
      <span className="text-[11px] uppercase tracking-[0.18em]">{label}</span>
    </span>
  );
}

/** One format's drawing: blurred until unlocked, then opens in the lightbox. */
export function FloorPlanImage({
  id,
  label,
  alt,
  title,
  subtitle,
  detail,
  className = "",
  sizes = "(max-width: 768px) 100vw, 480px",
}: PlanDetail & { label: string; className?: string; sizes?: string }) {
  const { isUnlocked, openPlan } = useViewer();

  return (
    <button
      type="button"
      onClick={() => openPlan({ id, title, subtitle, detail, alt })}
      aria-label={isUnlocked ? `View the ${label} floor plan` : `Unlock the ${label} floor plan`}
      className={`group relative block w-full overflow-hidden bg-[#F6F2E8] cursor-pointer ${className}`}
    >
      <Image
        src={planImages[id]}
        alt={alt}
        fill
        sizes={sizes}
        className={`object-contain transition duration-500 ${
          isUnlocked ? "group-hover:scale-105" : "blur-[5px] scale-105"
        }`}
      />
      {isUnlocked ? (
        <span className="absolute bottom-3 right-3 bg-white/90 text-[#12302a] text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-[0.12em] shadow-sm">
          View plan
        </span>
      ) : (
        <LockOverlay />
      )}
      <span className="absolute top-3 left-3 bg-[#C8A24A] text-white text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-[0.12em]">
        {label}
      </span>
    </button>
  );
}

/** The Embassy Origins master plan tile, gated the same way. */
export function MasterPlanTile({ className = "" }: { className?: string }) {
  const { isUnlocked, openMaster } = useViewer();

  return (
    <button
      type="button"
      onClick={openMaster}
      aria-label={isUnlocked ? "View the Embassy Origins master plan" : "Unlock the Embassy Origins master plan"}
      className={`group relative block w-full rounded-xl overflow-hidden shadow-lg cursor-pointer border border-[#e5dcc5] ${className}`}
    >
      <Image
        src={masterPlan}
        alt="Embassy Origins master plan — 85 acres, 217 villas, 19 acres of open space"
        className={`w-full h-[240px] sm:h-[300px] md:h-[340px] object-cover transition duration-500 ${
          isUnlocked ? "group-hover:scale-[1.03]" : "blur-[4px] scale-105"
        }`}
        sizes="(max-width: 768px) 100vw, 560px"
      />
      <span className="absolute inset-0 flex flex-col items-center justify-center bg-[#0b1f1a]/55 text-white px-4 text-center">
        <span className="text-lg font-semibold">Embassy Origins Master Plan</span>
        <span className="text-sm mt-1 text-white/80">
          {isUnlocked ? "Click to view and download" : "Unlock to access"}
        </span>
        <span className="mt-4 bg-[#C8A24A] text-white text-[11px] px-6 py-2.5 rounded uppercase tracking-[0.16em] font-bold">
          {isUnlocked ? "Open the Drawing" : "Unlock Now"}
        </span>
      </span>
    </button>
  );
}

function Lightbox({
  children,
  onClose,
  title,
  subtitle,
}: {
  children: ReactNode;
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
          className="absolute top-3 right-3 z-10 grid place-items-center w-9 h-9 rounded-full bg-[#F6F2E8] text-[#12302a] hover:bg-[#C8A24A] hover:text-white transition-colors text-lg cursor-pointer"
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
