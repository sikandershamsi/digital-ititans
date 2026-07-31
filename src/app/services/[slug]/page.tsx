import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { CTABand } from "@/components/CTABand";
import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";
import { getAllServiceSlugs, getService, services } from "@/data/services";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle.replace(" | iTitans Digital", ""),
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <div className="absolute inset-0 hero-atmosphere" />
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">
            <Link href="/services" className="hover:text-white">
              Services
            </Link>{" "}
            / {service.shortTitle}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight md:text-6xl">
            {service.hero}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{service.summary}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">{service.primaryCta}</Button>
            <Button href="/pricing" variant="ghost">
              {service.secondaryCta}
            </Button>
          </div>
        </div>
      </section>

      <section className="section-wash py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Every Engagement Includes
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {service.includes.map((item, index) => (
              <Reveal key={item} delay={index * 30}>
                <div className="flex gap-3 rounded-2xl border border-line bg-paper-elevated px-5 py-4 text-sm text-ink-muted">
                  <span className="text-teal">✓</span>
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              What We Deliver
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {service.offerings.map((item, index) => (
              <Reveal key={item.title} delay={index * 40}>
                <article className="h-full rounded-3xl border border-line bg-paper-elevated p-7">
                  <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              How We Work
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {service.process.map((step, index) => (
              <Reveal key={step.step} delay={index * 50}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <span className="text-sm font-semibold text-teal">{step.step}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wash py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="mt-10">
            <FAQ items={service.faqs} />
          </div>
        </div>
      </section>

      <section className="bg-paper pb-8 pt-4 md:pb-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-display text-2xl font-semibold">Related Services</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="rounded-full border border-line bg-paper-elevated px-5 py-2.5 text-sm font-medium text-ink transition hover:border-teal hover:text-teal-deep"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand title={service.primaryCta} primary={service.primaryCta} />
    </>
  );
}
