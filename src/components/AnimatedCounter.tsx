"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({
  value,
  className = "",
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const match = value.match(/^([\d,.]+)(.*)$/);
  const numeric = match ? Number(match[1].replace(/,/g, "")) : NaN;
  const suffix = match?.[2] ?? "";

  useEffect(() => {
    const el = ref.current;
    if (!el || Number.isNaN(numeric)) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      el.classList.add("visible");
      return;
    }

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        el.classList.add("visible");
        const start = performance.now();
        const duration = 1200;
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          const current = Math.round(numeric * eased);
          setDisplay(`${current.toLocaleString()}${suffix}`);
          if (t < 1) raf = requestAnimationFrame(tick);
          else setDisplay(value);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [numeric, suffix, value]);

  return (
    <span ref={ref} className={`stat-glow inline-block ${className}`}>
      {display}
    </span>
  );
}
