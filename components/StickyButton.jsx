"use client";

import { FaDownload } from "react-icons/fa";
import { useModal } from "./ModalContext";
import { downloadBrochure, hasLeadCaptured } from "@/utils/downloadBrochure";

export default function StickyDownloadButton() {
  const { openModal } = useModal();

  const handleClick = () => {
    if (hasLeadCaptured()) downloadBrochure();
    else openModal();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Download the Embassy Riverine brochure"
      className="
        fixed bottom-56 right-0 z-[1000]
        hidden sm:flex flex-col items-center justify-center
        bg-[#C8A24A] hover:bg-[#A8822E] text-white font-semibold
        shadow-lg transition-colors duration-200
        px-2 py-2.5
        rounded-l-md rounded-r-none
      "
    >
      <FaDownload size={15} aria-hidden="true" />
      <span className="mt-1.5 flex flex-col items-center text-[11px] font-semibold leading-[1.15] tracking-wide">
        {"Brochure".split("").map((char, i) => (
          <span key={i}>{char}</span>
        ))}
      </span>
    </button>
  );
}
