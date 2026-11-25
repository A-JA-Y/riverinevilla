import Image from "next/image";
import credaiLogo from "@/assets/trust/credai.png";

// Regulator and industry-body marks for the footer. Each badge links to the
// official website so visitors can verify the project.
// K-RERA prints a text-only letterhead on its official documents, so it is
// shown by name with a neutral icon, not an imitation logo. The CREDAI logo is its own artwork.

const RERA = {
  short: "K-RERA",
  name: "Karnataka Real Estate Regulatory Authority",
  url: "https://rera.karnataka.gov.in/",
  host: "rera.karnataka.gov.in",
};

const CREDAI = {
  name: "CREDAI (Confederation of Real Estate Developers' Associations of India)",
  url: "https://credai.org/",
};

// Long registration IDs (e.g. PRM/KA/RERA/...) may only wrap after a slash.
const SlashBreaks = ({ text }) =>
  String(text)
    .split("/")
    .flatMap((part, i) => (i === 0 ? [part] : [<wbr key={i} />, "/" + part]));

export default function RegulatoryLogos({ registration, className = "" }) {
  const registrations = [].concat(registration || []).filter(Boolean);
  return (
    <div className={`flex flex-wrap items-stretch gap-3 ${className}`}>
      <a
        href={RERA.url}
        target="_blank"
        rel="noopener noreferrer"
        title={`${RERA.name}: verify the registration at ${RERA.host}`}
        className="flex min-h-14 items-center gap-3 rounded-lg bg-white px-3 py-2 text-left shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-9 w-9 shrink-0 text-neutral-800"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21h18M5 21V10M9.5 21V10M14.5 21V10M19 21V10M2 10l10-6 10 6H2z" />
        </svg>
        <span className="flex max-w-[15rem] flex-col text-[10px] leading-snug text-neutral-600">
          <span className="text-[11px] font-semibold text-neutral-900">{RERA.short}</span>
          {registrations.map((reg) => (
            <span key={reg} className="[overflow-wrap:anywhere]">
              Reg. No. <SlashBreaks text={reg} />
            </span>
          ))}
          <span>Verify at {RERA.host}</span>
        </span>
      </a>
      <a
        href={CREDAI.url}
        target="_blank"
        rel="noopener noreferrer"
        title={CREDAI.name}
        aria-label={CREDAI.name}
        className="flex min-h-14 items-center rounded-lg bg-white px-4 py-2 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
      >
        <Image src={credaiLogo} alt="CREDAI logo" className="h-7 w-auto" />
      </a>
    </div>
  );
}
