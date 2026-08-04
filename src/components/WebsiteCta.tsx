"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useState } from "react";

type WebsiteCtaProps = {
  buttonLabel?: string;
  placeholder?: string;
  variant?: "dark" | "light";
  className?: string;
  showNoWebsiteLink?: boolean;
};

export function normalizeWebsiteUrl(raw: string) {
  const trimmed = raw.trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

export function contactHrefWithWebsite(website: string) {
  const value = normalizeWebsiteUrl(website);
  if (!value) return "/contact";
  return `/contact?address=${encodeURIComponent(value)}`;
}

export function WebsiteCta({
  buttonLabel = "Get a Free Quote",
  placeholder = "Enter Your Website",
  variant = "dark",
  className = "",
  showNoWebsiteLink = true,
}: WebsiteCtaProps) {
  const router = useRouter();
  const inputId = useId();
  const [website, setWebsite] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(contactHrefWithWebsite(website));
  }

  const isLight = variant === "light";

  return (
    <div className={`w-full ${className}`}>
      <form
        onSubmit={onSubmit}
        className={`mx-auto flex w-full max-w-xl flex-col overflow-hidden rounded-3xl border shadow-[0_10px_30px_rgba(3,3,28,0.12)] sm:flex-row sm:items-stretch sm:rounded-full ${
          isLight
            ? "border-ink/10 bg-white"
            : "border-white/15 bg-white"
        }`}
      >
        <label htmlFor={inputId} className="sr-only">
          Website URL
        </label>
        <input
          id={inputId}
          type="text"
          name="website"
          inputMode="url"
          autoComplete="url"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder={placeholder}
          className="min-h-12 flex-1 bg-transparent px-5 py-3.5 text-sm text-ink outline-none placeholder:text-slate/70 sm:px-6"
        />
        <button
          type="submit"
          className="min-h-12 shrink-0 bg-amber px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-amber-deep sm:px-7"
        >
          {buttonLabel}
        </button>
      </form>
      {showNoWebsiteLink ? (
        <p
          className={`mt-4 text-center text-sm ${
            isLight ? "text-slate" : "text-white/55"
          }`}
        >
          Don&apos;t have a website?{" "}
          <Link
            href="/contact"
            className={`font-semibold underline-offset-4 transition hover:underline ${
              isLight ? "text-teal-deep" : "text-amber"
            }`}
          >
            Go to the contact form
          </Link>
        </p>
      ) : null}
    </div>
  );
}
