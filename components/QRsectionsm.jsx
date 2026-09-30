import { rera } from "@/data/project";

/** Compact RERA strip shown under the hero on mobile. */
export default function ReraStrip() {
  return (
    <div className="block md:hidden w-full bg-[#F6F2E8] border-b border-[#e0d6bd] px-5 py-3">
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A8822E]">
        Karnataka RERA
      </p>
      <p className="text-[11px] text-[#3d4f49] mt-1 break-all leading-relaxed">
        {rera.villas}
      </p>
      <a
        href={rera.portal}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] text-[#A8822E] font-semibold mt-1 inline-block"
      >
        Verify on the Karnataka RERA portal →
      </a>
    </div>
  );
}
