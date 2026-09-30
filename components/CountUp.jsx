"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 to `value` the first time it scrolls into view.
 * `value` may carry separators and decimals ("4,000", "5.37", "3.4");
 * anything non-numeric ("IGBC") is rendered as-is.
 */
export default function CountUp({ value, duration = 1500, className = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(null);

  const raw = String(value);
  const numeric = Number(raw.replace(/,/g, ""));
  const isNumber = raw !== "" && Number.isFinite(numeric);
  const decimals = isNumber && raw.includes(".") ? raw.split(".")[1].length : 0;
  const grouped = raw.includes(",");

  useEffect(() => {
    if (!isNumber) return;
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(numeric);
      return;
    }

    let frame;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();

        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          // ease-out-cubic
          const eased = 1 - Math.pow(1 - t, 3);
          setDisplay(numeric * eased);
          if (t < 1) frame = requestAnimationFrame(tick);
          else setDisplay(numeric);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [numeric, isNumber, duration]);

  if (!isNumber) {
    return (
      <span ref={ref} className={className}>
        {raw}
      </span>
    );
  }

  // Before the observer fires, render the final value so crawlers and
  // no-JS visitors still see the real number.
  const n = display ?? numeric;
  const text = grouped
    ? n.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : n.toFixed(decimals);

  return (
    <span ref={ref} className={className} suppressHydrationWarning>
      {text}
    </span>
  );
}
