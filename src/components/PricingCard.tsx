import Link from "next/link";
import type { Package } from "@/data/pricing";

export function PricingCard({ pkg }: { pkg: Package }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-5 transition duration-300 sm:rounded-3xl sm:p-7 hover:-translate-y-1 ${
        pkg.popular
          ? "border-teal bg-ink text-white shadow-[0_24px_60px_rgba(7,17,31,0.25)]"
          : "border-line bg-paper-elevated text-ink"
      }`}
    >
      {pkg.popular && (
        <span className="absolute -top-3 left-5 rounded-full bg-amber px-3 py-1 text-xs font-semibold text-ink sm:left-7">
          Most Popular
        </span>
      )}
      <h3 className="font-display text-xl font-semibold sm:text-2xl">{pkg.name}</h3>
      <p className={`mt-2 text-sm ${pkg.popular ? "text-white/65" : "text-slate"}`}>
        {pkg.description}
      </p>
      <div className="mt-5 flex flex-wrap items-end gap-2 sm:mt-6">
        <span className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {pkg.price}
        </span>
        {pkg.note && (
          <span className={`pb-1 text-sm ${pkg.popular ? "text-white/55" : "text-slate"}`}>
            {pkg.note}
          </span>
        )}
      </div>
      <ul className="mt-8 flex-1 space-y-3">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm leading-relaxed">
            <span className={pkg.popular ? "text-teal" : "text-teal-deep"}>✓</span>
            <span className={pkg.popular ? "text-white/80" : "text-slate"}>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
          pkg.popular
            ? "bg-amber text-ink hover:bg-amber-deep"
            : "bg-ink text-white hover:bg-ink-soft"
        }`}
      >
        {pkg.cta} →
      </Link>
    </div>
  );
}
