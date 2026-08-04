import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTABand } from "@/components/CTABand";
import { PricingCard } from "@/components/PricingCard";
import { Reveal } from "@/components/Reveal";
import { WebsiteCta } from "@/components/WebsiteCta";
import {
  appPricing,
  dedicatedTeam,
  ecommercePackages,
  marketingPricing,
  planIncludes,
  pricingIntro,
  seoPackages,
  websitePackages,
} from "@/data/pricing";

export const metadata: Metadata = {
  title: "Pricing | Web Design, SEO & App Development Packages",
  description:
    "See transparent pricing for website development, Shopify, SEO, and mobile app packages. Fixed-scope plans for US businesses. No hidden fees.",
};

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-14 pt-28 text-white sm:pb-20 sm:pt-32 md:pb-28 md:pt-40">
        <div className="absolute inset-0 hero-atmosphere" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">Pricing</p>
          <h1 className="mt-4 max-w-4xl font-display text-[1.75rem] font-semibold tracking-tight sm:text-4xl md:text-6xl">
            {pricingIntro.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            {pricingIntro.summary}
          </p>
          <div className="mt-8 max-w-xl">
            <WebsiteCta buttonLabel="Get a Free Quote" variant="dark" />
            <div className="mt-4">
              <Button href="/contact" variant="ghost" className="w-full sm:w-auto">
                Book a Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wash py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              What Every iTitans Plan Includes
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {planIncludes.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-line bg-paper-elevated px-5 py-4 text-sm text-ink-muted"
              >
                <span className="text-teal">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <PackageSection
        title="Website Design & Development"
        description="Responsive design, on-page SEO setup, analytics configuration, and launch support on WordPress and custom stacks."
        packages={websitePackages}
      />

      <PackageSection
        title="Ecommerce & Shopify Development"
        description="Stores that convert browsers into buyers—with migration included at every tier."
        packages={ecommercePackages}
        tint
      />

      <PackageSection
        title="SEO & AI Search Optimization"
        description="Technical health, content, authority building, and visibility inside AI Overviews and assistant answers."
        packages={seoPackages}
      />

      <section className="bg-mist/40 py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Digital Marketing & Paid Media
            </h2>
            <p className="mt-4 max-w-2xl text-slate">
              Management fees exclude ad spend, which you pay directly to the platform.
            </p>
          </Reveal>
          <div className="mt-10 overflow-hidden rounded-3xl border border-line bg-paper-elevated">
            <div className="hidden grid-cols-[1.2fr_1fr_1.4fr] gap-4 border-b border-line bg-ink px-6 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/50 md:grid">
              <span>Service</span>
              <span>Starting Price</span>
              <span>What You Get</span>
            </div>
            {marketingPricing.map((row) => (
              <div
                key={row.service}
                className="grid gap-2 border-b border-line px-6 py-5 last:border-0 md:grid-cols-[1.2fr_1fr_1.4fr] md:gap-4"
              >
                <p className="font-semibold text-ink">{row.service}</p>
                <p className="text-sm font-medium text-teal-deep">{row.price}</p>
                <p className="text-sm text-slate">{row.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Mobile App Development
            </h2>
            <p className="mt-4 max-w-2xl text-slate">
              We scope every app in a paid discovery sprint first, then quote a fixed price for the
              build. Ongoing maintenance from $1,200/month.
            </p>
          </Reveal>
          <div className="mt-10 overflow-hidden rounded-3xl border border-line">
            {appPricing.map((row) => (
              <div
                key={row.tier}
                className="grid gap-3 border-b border-line bg-paper-elevated px-6 py-6 last:border-0 md:grid-cols-4"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate">Tier</p>
                  <p className="mt-1 font-semibold text-ink">{row.tier}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate">Investment</p>
                  <p className="mt-1 font-semibold text-teal-deep">{row.investment}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate">Timeline</p>
                  <p className="mt-1 font-medium text-ink">{row.timeline}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate">Scope</p>
                  <p className="mt-1 text-sm text-slate">{row.scope}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wash py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Prefer a Dedicated Team?
            </h2>
            <p className="mt-4 max-w-2xl text-slate">
              Hire our engineers, designers, and marketers as an extension of your in-house team.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dedicatedTeam.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-line bg-paper-elevated p-6 text-center"
              >
                <p className="text-sm text-slate">{item.label}</p>
                <p className="mt-2 font-display text-xl font-semibold text-ink">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Get a Price for Your Exact Project"
        body="Send us your requirements and receive a written quote within two business days, with a clear scope and a firm number attached."
        primary="Get My Free Quote"
      />
    </>
  );
}

function PackageSection({
  title,
  description,
  packages,
  tint,
}: {
  title: string;
  description: string;
  packages: typeof websitePackages;
  tint?: boolean;
}) {
  return (
    <section className={`${tint ? "bg-mist/40" : "bg-paper"} py-14 sm:py-20 md:py-28`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-slate">{description}</p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <Reveal key={pkg.name} delay={index * 70}>
              <PricingCard pkg={pkg} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
