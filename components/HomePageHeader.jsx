"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navGroups, navHighlight } from "@/data/siteNav";
import { project } from "@/data/project";
import logo from "../assets/logo.webp";

const CLOSED = { id: null, path: null };

const Chevron = ({ open, className = "" }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    aria-hidden="true"
    className={`flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""} ${className}`}
  >
    <path d="M2 3.5 5 6.5l3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** One desktop dropdown: hover (mouse), click/tap and keyboard all open it. */
function NavDropdown({ group, open, active, isActive, onOpen, onClose, onToggle, onHoverEnd }) {
  const triggerRef = useRef(null);
  const pointerType = useRef("");
  const panelId = `nav-panel-${group.id}`;

  return (
    <div
      className="relative h-full flex items-center"
      onPointerEnter={(e) => e.pointerType === "mouse" && onOpen()}
      onPointerLeave={(e) => e.pointerType === "mouse" && onHoverEnd()}
      onBlur={(e) => {
        // Keyboard focus moved to something outside this dropdown.
        if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          e.stopPropagation();
          onClose();
          triggerRef.current?.focus();
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onPointerDown={(e) => (pointerType.current = e.pointerType)}
        onClick={() => {
          // A mouse has already opened it on hover, so a click keeps it open;
          // touch, pen and keyboard toggle.
          const viaMouse = pointerType.current === "mouse";
          pointerType.current = "";
          if (viaMouse) onOpen();
          else onToggle();
        }}
        className={`relative inline-flex items-center gap-1.5 px-3 xl:px-3.5 py-2 text-[12px] font-bold uppercase tracking-[0.12em] whitespace-nowrap transition-colors cursor-pointer
          ${active || open ? "text-[#A8822E]" : "text-[#4a5a54] hover:text-[#A8822E]"}
          ${active ? "after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:bg-[#C8A24A] after:rounded-full" : ""}`}
      >
        {group.label}
        <Chevron open={open} />
      </button>

      {/* pt-2 bridges the gap so the pointer can travel into the panel */}
      <div
        className={`absolute left-0 top-full pt-2 z-50 transition-[opacity,transform,visibility] duration-200
          ${open ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-1 pointer-events-none"}`}
      >
        <ul
          id={panelId}
          className="w-max min-w-[240px] bg-white rounded-lg border border-[rgba(200,162,74,0.25)] border-t-2 border-t-[#C8A24A]
                     shadow-[0_22px_44px_-20px_rgba(18,48,42,0.45)] p-2"
        >
          {group.items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`group/item flex items-center justify-between gap-6 rounded-md px-3.5 py-2.5 text-[13px] font-semibold whitespace-nowrap transition-colors
                  ${
                    isActive(item.href)
                      ? "text-[#A8822E] bg-[rgba(200,162,74,0.1)]"
                      : "text-[#3d4f49] hover:text-[#A8822E] hover:bg-[#F6F2E8] focus-visible:bg-[#F6F2E8]"
                  }`}
              >
                {item.label}
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  aria-hidden="true"
                  className="text-[#C8A24A] opacity-0 -translate-x-1 transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                >
                  <path d="M1.5 5.5h8M6 2l3.5 3.5L6 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function HomePageHeader() {
  const pathname = usePathname();

  // Both remember the route they were opened on, so navigating closes them
  // without an effect.
  const [drawerPath, setDrawerPath] = useState(null);
  const [menu, setMenu] = useState(CLOSED);
  const drawerOpen = drawerPath === pathname;
  const openMenu = menu.path === pathname ? menu.id : null;

  const [expanded, setExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);
  const closeTimer = useRef(null);
  const hamburgerRef = useRef(null);
  const drawerCloseRef = useRef(null);

  const isActive = (href) => {
    const base = href.split("#")[0];
    if (base === "/") return pathname === "/";
    return pathname === base || pathname.startsWith(`${base}/`);
  };
  const groupActive = (group) => group.items.some((item) => isActive(item.href));

  const openDropdown = (id) => {
    clearTimeout(closeTimer.current);
    setMenu({ id, path: pathname });
  };
  const closeDropdown = () => {
    clearTimeout(closeTimer.current);
    setMenu(CLOSED);
  };
  const closeDropdownSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenu(CLOSED), 160);
  };

  const openDrawer = () => {
    const current = navGroups.find(groupActive);
    setExpanded(current ? current.id : null);
    setDrawerPath(pathname);
  };
  const closeDrawer = () => setDrawerPath(null);

  /* Deepen the header shadow once the page scrolls. The header keeps a fixed
     height, so nothing inside it moves. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll while the drawer is open, and move focus into it. */
  useEffect(() => {
    if (!drawerOpen) return;
    document.body.style.overflow = "hidden";
    drawerCloseRef.current?.focus();
    const hamburger = hamburgerRef.current;
    return () => {
      document.body.style.overflow = "";
      hamburger?.focus({ preventScroll: true });
    };
  }, [drawerOpen]);

  /* Escape closes whatever is open. */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setDrawerPath(null);
      setMenu(CLOSED);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* A click or tap outside the desktop nav closes an open dropdown. */
  useEffect(() => {
    if (!openMenu) return;
    const onDown = (e) => {
      if (!navRef.current?.contains(e.target)) setMenu(CLOSED);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [openMenu]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  return (
    <>
      <header
        className={`w-full bg-white border-b border-[rgba(200,162,74,0.22)] fixed left-0 right-0 top-0 z-40
                    transition-shadow duration-300 ${scrolled ? "shadow-[0_6px_24px_-12px_rgba(18,48,42,0.35)]" : "shadow-sm"}`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-stretch h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Embassy Riverine — home"
            className="flex-shrink-0 flex items-center pr-4 sm:pr-6 lg:border-r border-[rgba(200,162,74,0.22)]"
          >
            <Image
              src={logo}
              alt="Embassy Riverine"
              priority
              className="h-[40px] w-auto"
              sizes="190px"
            />
          </Link>

          {/* Desktop nav — three dropdowns and the 5 BHK pill */}
          <nav
            ref={navRef}
            className="hidden lg:flex items-center flex-1 min-w-0 px-2 xl:px-4 gap-0.5 xl:gap-1 font-sans"
            aria-label="Primary"
          >
            {navGroups.map((group) => (
              <NavDropdown
                key={group.id}
                group={group}
                open={openMenu === group.id}
                active={groupActive(group)}
                isActive={isActive}
                onOpen={() => openDropdown(group.id)}
                onClose={closeDropdown}
                onHoverEnd={closeDropdownSoon}
                onToggle={() => (openMenu === group.id ? closeDropdown() : openDropdown(group.id))}
              />
            ))}

            <Link
              href={navHighlight.href}
              className="ml-2 xl:ml-3 rounded text-white bg-linear-to-r from-[#C8A24A] to-[#A8822E] hover:from-[#A8822E] hover:to-[#8F6E15] shadow-md
                         text-[12px] font-bold px-2.5 py-1.5 whitespace-nowrap tracking-[0.12em] uppercase transition-colors"
            >
              {navHighlight.short}
            </Link>
          </nav>

          {/* Enquire CTA */}
          <div className="hidden lg:flex items-center pl-5 border-l border-[rgba(200,162,74,0.22)] flex-shrink-0 gap-3">
            <a
              href={`tel:${project.phoneHref}`}
              className="hidden xl:inline text-[#12302a] text-[12px] font-semibold whitespace-nowrap hover:text-[#A8822E] transition-colors"
            >
              {project.phone}
            </a>
            <Link
              href="/contact-us"
              className="btn-sheen inline-flex items-center gap-2 bg-[#C8A24A] hover:bg-[#A8822E] text-white text-[10px] font-bold uppercase tracking-[0.18em] px-5 py-2.5 rounded transition-colors whitespace-nowrap"
            >
              Enquire Now
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                <path d="M1.5 5.5h8M6 2l3.5 3.5L6 9" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Mobile: call + hamburger */}
          <div className="lg:hidden ml-auto flex items-center gap-2">
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
              ref={hamburgerRef}
              type="button"
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              aria-controls="mobile-nav"
              className="flex items-center justify-center w-10 h-10 rounded flex-shrink-0 bg-[#C8A24A] hover:bg-[#A8822E] transition-colors"
              onClick={openDrawer}
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

      {/* Spacer — header (72px) + accent bar (2px) */}
      <div className="h-[74px]" />

      {/* Mobile drawer — above the z-[1000] call / WhatsApp bar so that bar
          cannot cover the drawer's own buttons */}
      <div
        id="mobile-nav"
        inert={!drawerOpen}
        className={`fixed top-0 left-0 h-[100svh] z-[1100] flex flex-col bg-white shadow-2xl lg:hidden duration-300 ${
          // visible straight away on open (so focus can land in it), hidden
          // only once the slide-out has finished
          drawerOpen
            ? "translate-x-0 visible transition-transform"
            : "-translate-x-full invisible transition-[transform,visibility]"
        }`}
        style={{ width: "min(90vw, 360px)" }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(200,162,74,0.22)]">
          <Link href="/" onClick={closeDrawer} aria-label="Embassy Riverine — home">
            <Image src={logo} alt="Embassy Riverine" className="h-[34px] w-auto" sizes="160px" />
          </Link>
          <button
            ref={drawerCloseRef}
            type="button"
            onClick={closeDrawer}
            aria-label="Close menu"
            className="text-[#6b7f77] hover:text-[#12302a] text-xl w-9 h-9 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto overscroll-contain flex flex-col font-sans" aria-label="Mobile">
          {navGroups.map((group) => {
            const isOpen = expanded === group.id;
            const panelId = `drawer-panel-${group.id}`;
            return (
              <div key={group.id} className="border-b border-[rgba(200,162,74,0.12)]">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setExpanded(isOpen ? null : group.id)}
                  className={`w-full flex items-center justify-between px-6 py-3.5 text-[14px] font-bold tracking-wide uppercase transition-colors ${
                    groupActive(group) || isOpen ? "text-[#A8822E]" : "text-[#3d4f49] hover:text-[#A8822E]"
                  }`}
                >
                  {group.label}
                  <Chevron open={isOpen} className="w-3 h-3" />
                </button>

                {/* grid-rows animates the height without measuring it */}
                <div
                  id={panelId}
                  inert={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <ul className="min-h-0 overflow-hidden">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={closeDrawer}
                          aria-current={isActive(item.href) ? "page" : undefined}
                          className={`block pl-9 pr-6 py-2.5 text-[14px] font-semibold transition-colors ${
                            isActive(item.href)
                              ? "text-[#A8822E] bg-[rgba(200,162,74,0.07)]"
                              : "text-[#4a5a54] hover:text-[#A8822E]"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                    <li aria-hidden="true" className="h-2" />
                  </ul>
                </div>
              </div>
            );
          })}

          <Link
            href={navHighlight.href}
            onClick={closeDrawer}
            className="px-6 py-3.5 text-[14px] font-bold tracking-wide uppercase text-white bg-linear-to-r from-[#C8A24A] to-[#A8822E]"
          >
            {navHighlight.label}
            <span className="ml-1.5 inline-block bg-red-600 text-white text-[8px] font-bold px-1 py-px rounded animate-pulse align-middle">
              NEW
            </span>
          </Link>
        </nav>

        <div className="p-5 border-t border-[rgba(200,162,74,0.22)] flex flex-col gap-2 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <a
            href={`tel:${project.phoneHref}`}
            className="flex justify-center items-center gap-2 py-3 border border-[#C8A24A] text-[#A8822E] text-sm font-semibold uppercase tracking-widest rounded"
          >
            {project.phone}
          </a>
          <Link
            href="/contact-us"
            onClick={closeDrawer}
            className="flex justify-center items-center gap-2 py-3 bg-[#C8A24A] hover:bg-[#A8822E] text-white text-sm font-semibold uppercase tracking-widest transition-colors rounded"
          >
            Enquire Now
          </Link>
        </div>
      </div>

      {drawerOpen && (
        <button
          type="button"
          aria-label="Close menu overlay"
          tabIndex={-1}
          className="fixed inset-0 bg-black/50 z-[1090] lg:hidden"
          onClick={closeDrawer}
        />
      )}
    </>
  );
}
