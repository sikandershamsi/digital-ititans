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

    const reveal = () => {
      el.querySelectorAll(".word-reveal").forEach((node) => node.classList.add("visible"));
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveal();
      return;
    }

    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      requestAnimationFrame(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        reveal();
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
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
