import type { Metadata } from "next";
import { termsAndConditions } from "@/data/legal";

export const metadata: Metadata = {
  title: termsAndConditions.metaTitle.replace(" | iTitans Digital Services Agreement", ""),
  description: termsAndConditions.metaDescription,
};

export default function TermsPage() {
  return (
    <article className="bg-paper pb-24 pt-32 md:pt-40">
      <div className="mx-auto max-w-3xl px-4 sm:px-5 md:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep">Legal</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-slate">
          Effective Date: {termsAndConditions.effectiveDate} · Last Updated:{" "}
          {termsAndConditions.effectiveDate}
        </p>
        <div className="mt-12 space-y-10">
          {termsAndConditions.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-2xl font-semibold text-ink">{section.title}</h2>
              <div className="mt-4 space-y-3 text-base leading-relaxed text-slate">
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
