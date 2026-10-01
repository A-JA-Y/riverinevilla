"use client";

import { FaWhatsapp, FaPhoneAlt, FaDownload } from "react-icons/fa";
import { useModal } from "./ModalContext";
import { project } from "@/data/project";
import { downloadBrochure, hasLeadCaptured } from "@/utils/downloadBrochure";

const MESSAGE =
  "Hi, I am interested in Embassy Riverine villas at Embassy Origins, North Bangalore. Please share the price sheet and availability.";

const waHref = `https://wa.me/${project.whatsapp}?text=${encodeURIComponent(MESSAGE)}`;
const telHref = `tel:${project.phoneHref}`;

/**
 * Desktop: floating call + WhatsApp buttons on the right rail.
 * Mobile: a fixed bottom bar, which keeps the right edge clear and puts
 * the three conversion actions within thumb reach.
 */
export default function FloatingActions() {
  const { openModal } = useModal();

  const onBrochure = () => {
    if (hasLeadCaptured()) downloadBrochure();
    else openModal();
  };

  return (
    <>
      {/* ── Desktop rail ── */}
      <div className="hidden sm:flex flex-col gap-3 fixed bottom-6 right-5 z-[1000]">
        <a
          href={telHref}
          aria-label={`Call us at ${project.phone}`}
          title={project.phone}
          className="animate-pulse-ring grid place-items-center w-12 h-12 rounded-full bg-[#12302a] text-white shadow-xl hover:bg-[#C8A24A] hover:scale-110 transition-all duration-300"
        >
          <FaPhoneAlt size={18} aria-hidden="true" />
        </a>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with us on WhatsApp at ${project.phone}`}
          title={project.phone}
          className="animate-float grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#1ebe57] hover:scale-110 transition-all duration-300"
        >
          <FaWhatsapp size={30} aria-hidden="true" />
        </a>
      </div>

      {/* ── Mobile bottom bar ── */}
      <nav
        aria-label="Quick actions"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-[1000] grid grid-cols-3
                   bg-[#12302a]/97 backdrop-blur border-t border-[#C8A24A]/30
                   pb-[env(safe-area-inset-bottom)]"
      >
        <a
          href={telHref}
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-white active:bg-white/10 transition-colors"
        >
          <FaPhoneAlt size={16} aria-hidden="true" className="text-[#C8A24A]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.1em]">Call</span>
        </a>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-white border-x border-white/10 active:bg-white/10 transition-colors"
        >
          <FaWhatsapp size={18} aria-hidden="true" className="text-[#25D366]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.1em]">WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={onBrochure}
          className="flex flex-col items-center justify-center gap-1 py-2.5 text-white active:bg-white/10 transition-colors"
        >
          <FaDownload size={15} aria-hidden="true" className="text-[#C8A24A]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.1em]">Brochure</span>
        </button>
      </nav>

      {/* keeps the mobile bar from covering the end of the page — rendered
          after the footer (and in its colour) so it never shows as a gap */}
      <div
        aria-hidden="true"
        className="sm:hidden h-[calc(64px+env(safe-area-inset-bottom))] bg-[#0b1f1a]"
      />
    </>
  );
}
