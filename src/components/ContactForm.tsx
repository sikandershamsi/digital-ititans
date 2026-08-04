"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { site } from "@/data/site";
import { normalizeWebsiteUrl } from "@/components/WebsiteCta";

export function ContactForm({ source = "Contact" }: { source?: string }) {
  const searchParams = useSearchParams();
  const addressParam = searchParams.get("address") ?? searchParams.get("website") ?? "";
  const initialWebsite = addressParam ? normalizeWebsiteUrl(addressParam) : "";
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-teal/30 bg-teal/10 p-8 text-center">
        <p className="font-display text-2xl font-semibold text-ink">Thanks — we got it.</p>
        <p className="mt-3 text-slate">
          A strategist will review your request and follow up shortly. Prefer to talk now? Call{" "}
          <a href={site.phoneHref} className="font-semibold text-teal">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-3xl border border-line bg-paper-elevated p-6 md:p-8">
      <input type="hidden" name="source" value={source} />
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Work email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <Field
          label="Company website"
          name="website"
          placeholder="https://"
          defaultValue={initialWebsite}
        />
      </div>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">How can we help?</span>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full rounded-2xl border border-line bg-paper px-4 py-3 text-ink outline-none transition focus:border-teal"
          placeholder="Tell us about your goals, channels, or bottlenecks…"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-amber px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-amber-deep md:w-auto"
      >
        Get My Free Growth Plan →
      </button>
      <p className="text-xs text-slate">
        No obligation. We typically respond within one business day.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="w-full rounded-2xl border border-line bg-paper px-4 py-3 text-ink outline-none transition focus:border-teal"
      />
    </label>
  );
}
