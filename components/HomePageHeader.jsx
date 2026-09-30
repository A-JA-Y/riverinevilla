"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteNavLinks } from "@/data/siteNav";
import { project } from "@/data/project";
import logo from "../assets/logo.webp";

const GOLD = "#C8A24A";
const GOLD_HOVER = "#A8822E";

export default function HomePageHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    const base = href.split("#")[0];
    if (base === "/") return pathname === "/";
    return pathname === base || pathname.startsWith(`${base}/`);
  };

  /* Condense the header once the hero starts scrolling away. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll while the drawer is open. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Close the drawer on route change and on Escape. */
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const half = Math.ceil(siteNavLinks.length / 2);
  const row1 = siteNavLinks.slice(0, half);
  const row2 = siteNavLinks.slice(half);

  const linkClass = (item) =>
    `relative text-[12px] font-bold px-2.5 py-1.5 whitespace-nowrap tracking-[0.12em] uppercase transition-colors
     ${
       item.highlight
         ? "ml-1.5 rounded text-white bg-linear-to-r from-[#C8A24A] to-[#A8822E] hover:from-[#A8822E] hover:to-[#8F6E15] shadow-md"
         : isActive(item.href)
           ? "text-[#A8822E] after:absolute after:bottom-0 after:left-2.5 after:right-2.5 after:h-[2px] after:bg-[#C8A24A] after:rounded-full"
           : "text-[#4a5a54] hover:text-[#A8822E]"
     }`;

  return (
    <>
      <header
        className={`w-full bg-white border-b border-[rgba(200,162,74,0.22)] fixed left-0 right-0 top-0 z-40
                    transition-shadow duration-300 ${scrolled ? "shadow-[0_6px_24px_-12px_rgba(18,48,42,0.35)]" : "shadow-sm"}`}
      >
        <div
          className={`max-w-7xl mx-auto px-4 lg:px-8 flex items-stretch gap-0 transition-[height] duration-300
                      ${scrolled ? "h-[64px]" : "h-[72px]"}`}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Embassy Riverine — home"
            className="flex-shrink-0 flex items-center pr-4 sm:pr-6 xl:border-r border-[rgba(200,162,74,0.22)]"
          >
            <Image
              src={logo}
              alt="Embassy Riverine"
              priority
              className={`w-auto transition-[height] duration-300 ${scrolled ? "h-[34px]" : "h-[40px]"}`}
              sizes="190px"
            />
          </Link>

          {/* Desktop nav — two rows, fills remaining space */}
          <nav className="hidden xl:flex flex-col flex-1 min-w-0 justify-center px-3 font-sans" aria-label="Primary">
            <div className="flex items-center">
              {row1.map((item) => (
                <Link key={item.href} href={item.href} className={linkClass(item)}>
                  {item.short || item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center border-t border-dashed border-[rgba(200,162,74,0.2)]">
              {row2.map((item) => (
                <Link key={item.href} href={item.href} className={linkClass(item)}>
                  {item.short || item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Enquire CTA */}
          <div className="hidden xl:flex items-center pl-5 border-l border-[rgba(200,162,74,0.22)] flex-shrink-0 gap-3">
            <a
              href={`tel:${project.phoneHref}`}
              className="text-[#12302a] text-[12px] font-semibold whitespace-nowrap hover:text-[#A8822E] transition-colors"
            >
              {project.phone}
            </a>
            <Link
              href="/contact-us"
              className="btn-sheen inline-flex items-center gap-2 bg-[#C8A24A] hover:bg-[#A8822E] text-white text-[10px] font-bold uppercase tracking-[0.18em] px-5 py-2.5 rounded transition-colors"
            >
              Enquire Now
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                <path d="M1.5 5.5h8M6 2l3.5 3.5L6 9" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Mobile: call + hamburger */}
          <div className="xl:hidden ml-auto flex items-center gap-2">
            <a
              href={`tel:${project.phoneHref}`}
              aria-label={`Call ${project.phone}`}
              className="flex items-center justify-center w-10 h-10 rounded border border-[rgba(200,162,74,0.4)] text-[#A8822E] hover:bg-[#C8A24A]/10 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="flex items-center justify-center w-10 h-10 rounded flex-shrink-0 transition-colors"
              style={{ backgroundColor: GOLD }}
              onClick={() => setOpen(true)}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = GOLD_HOVER)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = GOLD)}
            >
              <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
                <line x1="0" y1="1" x2="20" y2="1" stroke="white" strokeWidth="2" />
                <line x1="0" y1="7" x2="20" y2="7" stroke="white" strokeWidth="2" />
                <line x1="0" y1="13" x2="20" y2="13" stroke="white" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>

        {/* Gold accent bar */}
        <div
          className="h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(200,162,74,0.4) 20%, #C8A24A 50%, rgba(200,162,74,0.4) 80%, transparent)",
          }}
        />
      </header>

      {/* Spacer */}
      <div className="h-[74px]" />

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`fixed top-0 left-0 h-[100svh] z-50 flex flex-col shadow-2xl transition-transform duration-300 xl:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "min(90vw, 360px)", backgroundColor: "#fff" }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(200,162,74,0.22)]">
          <Image src={logo} alt="Embassy Riverine" className="h-[34px] w-auto" sizes="160px" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-[#6b7f77] hover:text-[#12302a] text-xl w-9 h-9 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto flex flex-col font-sans" aria-label="Mobile">
          {siteNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`px-6 py-3.5 border-b border-[rgba(200,162,74,0.12)] text-[14px] font-bold tracking-wide uppercase transition-colors ${
                item.highlight
                  ? "text-white bg-linear-to-r from-[#C8A24A] to-[#A8822E]"
                  : isActive(item.href)
                    ? "text-[#A8822E] bg-[rgba(200,162,74,0.07)]"
                    : "text-[#3d4f49] hover:text-[#A8822E]"
              }`}
            >
              {item.label}
              {item.highlight && (
                <span className="ml-1.5 inline-block bg-red-600 text-white text-[8px] font-bold px-1 py-px rounded animate-pulse align-middle">
                  NEW
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="p-5 border-t border-[rgba(200,162,74,0.22)] flex flex-col gap-2">
          <a
            href={`tel:${project.phoneHref}`}
            className="flex justify-center items-center gap-2 py-3 border border-[#C8A24A] text-[#A8822E] text-sm font-semibold uppercase tracking-widest rounded"
          >
            {project.phone}
          </a>
          <Link
            href="/contact-us"
            onClick={() => setOpen(false)}
            className="flex justify-center items-center gap-2 py-3 bg-[#C8A24A] hover:bg-[#A8822E] text-white text-sm font-semibold uppercase tracking-widest transition-colors rounded"
          >
            Enquire Now
          </Link>
        </div>
      </div>

      {open && (
        <button
          type="button"
          aria-label="Close menu overlay"
          className="fixed inset-0 bg-black/50 z-40 xl:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
