"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealVariant = "up" | "down" | "left" | "right" | "zoom" | "blur";

type RevealProps = {
  children: ReactNode;
  /** Element to render. Defaults to a div. */
  as?: ElementType;
  variant?: RevealVariant;
  /** Stagger in milliseconds. */
  delay?: number;
  threshold?: number;
  /** Reveal once (default) or re-hide when scrolled out. */
  once?: boolean;
  className?: string;
  style?: CSSProperties;
  // anything else (href, id, target…) is forwarded to the rendered element
  [key: string]: unknown;
};

/**
 * Scroll-triggered reveal. Adds [data-shown] the first time the element
 * crosses into view; the transition itself lives in globals.css so nothing
 * flashes before hydration.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  threshold = 0.15,
  once = true,
  className = "",
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver, or the visitor prefers reduced motion: show at rest.
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      data-shown={shown ? "" : undefined}
      className={className}
      style={{ "--reveal-delay": `${delay}ms`, ...style } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
}
