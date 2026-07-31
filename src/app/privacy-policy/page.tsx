import type { Metadata } from "next";
import { privacyPolicy } from "@/data/legal";

export const metadata: Metadata = {
  title: privacyPolicy.metaTitle.replace(" | How iTitans Digital Protects Your Data", ""),
  description: privacyPolicy.metaDescription,
};

export default function PrivacyPolicyPage() {
  return (
    <article className="bg-paper pb-24 pt-32 md:pt-40">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep">Legal</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-slate">
          Effective Date: {privacyPolicy.effectiveDate} · Last Updated: {privacyPolicy.effectiveDate}
        </p>
        <p className="mt-8 text-base leading-relaxed text-slate">
          Your trust runs our business. This Privacy Policy explains exactly what we collect, why we
          collect it, who we share it with, and how you take control of it at any time. When you
          browse ititansdigital.com, submit a form, or hire us for a project, you accept the
          practices described below.
        </p>
        <div className="mt-12 space-y-10">
          {privacyPolicy.sections.map((section) => (
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
