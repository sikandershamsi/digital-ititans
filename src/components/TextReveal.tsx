"use client";

import { useEffect, useRef } from "react";

export function TextReveal({
  text,
  className = "",
  as: Tag = "span",
  stagger = 45,
}: {
  text: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "p";
  stagger?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.querySelectorAll(".word-reveal").forEach((node) => node.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.querySelectorAll(".word-reveal").forEach((node) => node.classList.add("visible"));
        observer.disconnect();
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="word-reveal mr-[0.28em] last:mr-0"
          style={{ transitionDelay: `${i * stagger}ms` }}
        >
          <span>{word}</span>
        </span>
      ))}
    </Tag>
  );
}
