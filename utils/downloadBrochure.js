import { project } from "@/data/project";

/**
 * Triggers the Embassy Riverine brochure download.
 * Used after a lead is captured, and by the sticky brochure button once unlocked.
 */
export function downloadBrochure() {
  if (typeof document === "undefined") return;

  const link = document.createElement("a");
  link.href = project.brochure;
  link.setAttribute("download", "Embassy-Riverine-Brochure.pdf");
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/** Remembers that this visitor has already given us their details. */
export function markLeadCaptured() {
  try {
    localStorage.setItem("plansUnlocked", "true");
    localStorage.setItem("formSubmitted", "true");
  } catch {
    /* private mode / storage blocked — non-fatal */
  }
}

export function hasLeadCaptured() {
  try {
    return localStorage.getItem("plansUnlocked") === "true";
  } catch {
    return false;
  }
}
