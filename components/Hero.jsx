"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import heroDesktop from "../assets/riverine-hero.webp";
import heroMobile from "../assets/riverine-hero-mobile.webp";
import { priceStrip, trustStrip } from "@/data/project";
import { useModal } from "./ModalContext";

export default function Hero() {
  const { openModal } = useModal();
  const layerRef = useRef(null);

  /* Gentle parallax on the hero image as the page scrolls away. */
  useEffect(() => {
    const el = layerRef.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      if (y < window.innerHeight * 1.2) {
        el.style.transform = `translate3d(0, ${y * 0.18}px, 0)`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0b1f1a]
                 min-h-[86svh] md:min-h-0 md:h-[78vh] flex items-end md:items-center"
      aria-label="Embassy Riverine — luxury villas at Embassy Origins, North Bangalore"
    >
      {/* ── Background ──
          Note: this layer must NOT use a negative z-index. The section is
          positioned but creates no stacking context, so -z-10 would drop the
          image behind the section's own background colour and hide it. */}
      <div ref={layerRef} className="absolute inset-0 z-0">
        <Image
          src={heroMobile}
          alt="Embassy Riverine luxury villa at Embassy Origins, North Bangalore"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={78}
          className="md:hidden object-cover object-center animate-drift"
          placeholder="blur"
        />
        <Image
          src={heroDesktop}
          alt="Embassy Riverine luxury villa at Embassy Origins, North Bangalore"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={80}
          className="hidden md:block object-cover object-center animate-drift"
          placeholder="blur"
        />
      </div>

      {/* Legibility scrim — heavier at the bottom where the copy sits */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-gradient-to-t
                   from-[#06140f]/93 via-[#06140f]/60 to-[#06140f]/25
                   md:from-[#06140f]/88 md:via-[#06140f]/45 md:to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] hidden md:block
                   bg-gradient-to-r from-[#06140f]/78 via-[#06140f]/25 to-transparent"
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-24 pt-28 md:py-12">
        <div className="max-w-2xl">
          {/* eyebrow */}
          <p
            className="hero-rise flex items-center gap-3 text-gold-soft text-[10px] sm:text-[11px]
                       font-semibold uppercase tracking-[0.22em]"
            style={{ "--d": "80ms" }}
          >
            <span className="h-px w-8 bg-[#c8a24a]" />
            New Launch · Embassy Origins, North Bangalore
          </p>

          <h2
            style={{ "--d": "180ms" }}
            className="hero-rise mt-4 text-white font-semibold leading-[1.08]
                       text-[clamp(2rem,6.4vw,4rem)]"
          >
            Where a River Decided
            <span className="block text-gold-soft">the Master Plan</span>
          </h2>

          <p
            style={{ "--d": "300ms" }}
            className="hero-rise mt-5 text-white/85 text-sm sm:text-base leading-relaxed max-w-xl"
          >
            Embassy Riverine — 217 villas of 4, 4.5 and 5 bedrooms, arranged around a
            protected riparian corridor inside the 85-acre Embassy Origins township.
          </p>

          {/* price strip */}
          <ul
            style={{ "--d": "410ms" }}
            className="hero-rise mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-3 border-y border-white/15 py-4"
          >
            {priceStrip.map((p) => (
              <li key={p.config} className="flex sm:flex-col items-baseline sm:items-start gap-2 sm:gap-0.5">
                <span className="text-gold-soft text-[11px] font-semibold uppercase tracking-[0.16em]">
                  {p.config}
                </span>
                <span className="text-white/55 text-[11px] sm:mt-0.5">{p.area}</span>
                <span className="text-white text-[13px] sm:text-sm font-semibold sm:mt-1 ml-auto sm:ml-0">
                  {p.price}
                </span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div
            style={{ "--d": "520ms" }}
            className="hero-rise mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <button
              type="button"
              onClick={() => openModal()}
              className="btn-sheen inline-flex items-center justify-center gap-2 rounded
                         bg-[#c8a24a] hover:bg-[#a8822e] text-white
                         text-xs font-bold uppercase tracking-[0.18em]
                         px-7 py-4 transition-colors cursor-pointer"
            >
              Request the Price Sheet
              <svg width="12" height="12" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                <path d="M1.5 5.5h8M6 2l3.5 3.5L6 9" stroke="currentColor" strokeWidth="1.4"
                      strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded border border-white/35
                         hover:border-[#c8a24a] hover:bg-[#c8a24a]/10 text-white
                         text-xs font-bold uppercase tracking-[0.18em]
                         px-7 py-4 transition-colors backdrop-blur-sm"
            >
              Schedule a Site Visit
            </Link>
          </div>

          {/* trust strip */}
          <ul
            style={{ "--d": "620ms" }}
            className="hero-rise mt-7 flex flex-wrap items-center gap-x-3 gap-y-2"
          >
            {trustStrip.map((t) => (
              <li
                key={t}
                className="text-white/75 text-[10px] sm:text-[11px] uppercase tracking-[0.14em]
                           border border-white/20 rounded-full px-3 py-1.5 backdrop-blur-sm"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* scroll hint — desktop only, the mobile form sits right below the fold */}
      <div
        aria-hidden="true"
        className="hidden md:flex absolute z-10 bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-white/45 text-[9px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative block h-9 w-[22px] rounded-full border border-white/30">
          <span className="animate-scroll-hint absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#c8a24a]" />
        </span>
      </div>
    </section>
  );
}
