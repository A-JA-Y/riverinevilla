import type { PhotoCreditInfo } from "@/data/photoCredits";

/**
 * "Photo: Author / Wikimedia Commons, CC BY-SA 4.0 (cropped)" — the attribution
 * line Creative Commons licences require, with the author linked to the file
 * page and the licence linked to its deed.
 */
export default function PhotoCredit({
  credit,
  className = "",
}: {
  credit: PhotoCreditInfo;
  className?: string;
}) {
  const linkCls = "underline decoration-current/40 underline-offset-2 hover:decoration-current";

  return (
    <span className={className}>
      Photo:{" "}
      {credit.source ? (
        <a href={credit.source} target="_blank" rel="noopener noreferrer" className={linkCls}>
          {credit.author}
        </a>
      ) : (
        credit.author
      )}
      {credit.via ? ` / ${credit.via}` : null},{" "}
      {credit.licenseUrl ? (
        <a href={credit.licenseUrl} target="_blank" rel="noopener noreferrer license" className={linkCls}>
          {credit.license}
        </a>
      ) : (
        credit.license
      )}
      {credit.note ? ` (${credit.note})` : null}
    </span>
  );
}
