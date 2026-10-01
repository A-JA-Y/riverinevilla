"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 to `value` the first time it scrolls into view.
 * `value` may carry separators and decimals ("4,000", "5.37", "3.4");
 * anything non-numeric ("IGBC") is rendered as-is.
 *
 * The final value is also painted as an invisible ::before layer in the same
 * grid cell, so the box keeps its final width while the digits count up and
 * the unit beside it never shifts.
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

    // No observer, or the visitor prefers reduced motion: the final value is
    // already rendered, so there is nothing to animate.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
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

  const format = (n) =>
    grouped
      ? n.toLocaleString("en-IN", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })
      : n.toFixed(decimals);

  // Before the observer fires, render the final value so crawlers and
  // no-JS visitors still see the real number.
  return (
    <span
      ref={ref}
      data-final={format(numeric)}
      className={`inline-grid before:invisible before:col-start-1 before:row-start-1 before:content-[attr(data-final)] ${className}`}
    >
      <span className="col-start-1 row-start-1" suppressHydrationWarning>
        {format(display ?? numeric)}
      </span>
    </span>
  );
}
