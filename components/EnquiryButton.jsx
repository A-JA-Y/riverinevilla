"use client";

import { useModal } from "./ModalContext";

const styles = {
  solid:
    "btn-sheen inline-flex items-center justify-center gap-2 bg-[#C8A24A] hover:bg-[#A8822E] text-white text-xs font-bold uppercase tracking-[0.16em] px-7 py-4 rounded transition-colors cursor-pointer",
  outline:
    "inline-flex items-center justify-center gap-2 border border-[#C8A24A] text-[#12302a] hover:bg-[#C8A24A] hover:text-white text-xs font-bold uppercase tracking-[0.16em] px-7 py-4 rounded transition-colors cursor-pointer",
  link: "inline-flex items-center gap-1.5 text-[#A8822E] font-semibold link-wipe cursor-pointer",
};

/**
 * Opens the enquiry modal. Lets server-rendered pages carry the in-copy CTAs
 * ("Get the Price Sheet", "Request Floor Plans", ...) without becoming client
 * components themselves.
 */
export default function EnquiryButton({ children, variant = "solid", className = "" }) {
  const { openModal } = useModal();

  return (
    <button
      type="button"
      onClick={() => openModal()}
      className={`${styles[variant] ?? styles.solid} ${className}`}
    >
      {children}
      <svg width="12" height="12" viewBox="0 0 11 11" fill="none" aria-hidden="true">
        <path
          d="M1.5 5.5h8M6 2l3.5 3.5L6 9"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
