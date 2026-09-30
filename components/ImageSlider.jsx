"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Autoplaying gallery with swipe, keyboard and hover-pause.
 * `images` accepts either a bare static import or { src, alt }.
 */
export default function ImageSlider({ images = [], interval = 4200, className = "" }) {
  const slides = images.map((img) =>
    img && typeof img === "object" && "src" in img && img.alt !== undefined
      ? img
      : { src: img, alt: "" }
  );

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);
  const count = slides.length;

  const go = useCallback((n) => setCurrent((p) => (n + count) % count), [count]);
  const next = useCallback(() => go(current + 1), [go, current]);
  const prev = useCallback(() => go(current - 1), [go, current]);

  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setCurrent((p) => (p + 1) % count), interval);
    return () => clearInterval(id);
  }, [paused, count, interval]);

  if (!count) return null;

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  return (
    <div
      className={`relative w-full h-full overflow-hidden rounded-lg shadow-2xl group ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onKeyDown}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 45) (dx < 0 ? next : prev)();
        touchX.current = null;
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Project gallery"
      tabIndex={0}
    >
      {slides.map((slide, i) => (
        <Image
          key={i}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(max-width: 768px) 100vw, 560px"
          quality={78}
          priority={i === 0}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)]
            ${i === current ? "opacity-100 z-10 scale-100" : "opacity-0 scale-[1.04]"}`}
          aria-hidden={i !== current}
        />
      ))}

      {/* bottom scrim so controls stay readable over any photo */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 z-10 bg-gradient-to-t from-black/55 to-transparent pointer-events-none"
      />

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 grid place-items-center w-9 h-9 rounded-full bg-black/45 text-white text-lg leading-none backdrop-blur-sm hover:bg-[#C8A24A] transition-colors opacity-0 group-hover:opacity-100 focus-visible:opacity-100 md:opacity-0 max-md:opacity-100"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 grid place-items-center w-9 h-9 rounded-full bg-black/45 text-white text-lg leading-none backdrop-blur-sm hover:bg-[#C8A24A] transition-colors opacity-0 group-hover:opacity-100 focus-visible:opacity-100 md:opacity-0 max-md:opacity-100"
          >
            ›
          </button>

          <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to image ${i + 1} of ${count}`}
                aria-current={i === current}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === current ? "w-7 bg-[#C8A24A]" : "w-1.5 bg-white/65 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
