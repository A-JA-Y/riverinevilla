// Google Ads conversion action: "Submit lead form (1)"
export const LEAD_CONVERSION_ID = "AW-18344445987/zir2CNKC19UcEKOQqKtE";

/**
 * Fires the Google Ads lead conversion and resolves once the beacon is away
 * (or after `timeout` ms, so navigation is never blocked by a blocked/slow tag).
 * Safe to await when gtag is missing — e.g. an ad blocker stripped it.
 */
export function reportLeadConversion({ timeout = 1000 } = {}) {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      resolve();
      return;
    }

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;
      resolve();
    };

    setTimeout(finish, timeout);

    window.gtag("event", "conversion", {
      send_to: LEAD_CONVERSION_ID,
      event_callback: finish,
    });
  });
}
