import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact iTitans Digital for a free growth plan. Call (972) 922-9234 or send your website and biggest bottleneck.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-16 pt-32 text-white md:pb-20 md:pt-40">
        <div className="absolute inset-0 hero-atmosphere" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">Contact</p>
          <h1 className="mt-4 max-w-3xl font-display text-[1.75rem] font-semibold tracking-tight sm:text-4xl md:text-6xl">
            Ready to Grow Faster With Improved Efficiency?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Send us your website and your biggest bottleneck. A senior strategist will walk you
            through a practical plan on a 30-minute call. No obligation and no pressure.
          </p>
        </div>
      </section>

      <section className="section-wash py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold text-ink">Talk to us directly</h2>
                <div className="mt-6 space-y-4 text-slate">
                  <a href={site.phoneHref} className="block text-lg font-semibold text-ink hover:text-teal">
                    {site.phone}
                  </a>
                  <a href={site.emailHref} className="block hover:text-teal">
                    {site.email}
                  </a>
                  <p>{site.address}</p>
                </div>
              </div>
              <div className="rounded-3xl border border-line bg-paper-elevated p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-deep">
                  What happens next
                </p>
                <ol className="mt-4 space-y-3 text-sm text-slate">
                  <li>1. Discovery call — about 20 minutes</li>
                  <li>2. Written proposal within 48 hours</li>
                  <li>3. Kickoff with a shared project board</li>
                  <li>4. Launch plus 30 days of support</li>
                </ol>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Suspense
              fallback={
                <div className="min-h-[28rem] animate-pulse rounded-3xl border border-line bg-paper-elevated" />
              }
            >
              <ContactForm source="Contact Page" />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </>
  );
}
