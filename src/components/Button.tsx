"use client";

import Link from "next/link";
import { useCallback, useRef } from "react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
};

const variants = {
  primary:
    "bg-amber text-ink hover:bg-amber-deep shadow-[0_10px_30px_rgba(110,193,228,0.35)]",
  secondary:
    "bg-teal text-white hover:bg-teal-deep shadow-[0_10px_30px_rgba(76,7,107,0.35)]",
  ghost:
    "border border-white/25 bg-white/5 text-white hover:border-white/50 hover:bg-white/10",
  light:
    "border border-ink/15 bg-white text-ink hover:border-teal hover:text-teal-deep",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const reset = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", "0px");
    el.style.setProperty("--my", "0px");
    el.style.setProperty("--ix", "0px");
    el.style.setProperty("--iy", "0px");
  }, []);

  const onMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.setProperty("--mx", `${x * 0.22}px`);
    el.style.setProperty("--my", `${y * 0.22}px`);
    el.style.setProperty("--ix", `${x * 0.08}px`);
    el.style.setProperty("--iy", `${y * 0.08}px`);
  }, []);

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`magnetic-btn btn-sheen min-h-11 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-300 sm:px-6 sm:py-3.5 ${variants[variant]} ${className}`}
    >
      <span className="magnetic-inner relative z-[1] text-center">
        {children}
        <span aria-hidden className="transition-transform duration-300">
          →
        </span>
      </span>
    </Link>
  );
}
