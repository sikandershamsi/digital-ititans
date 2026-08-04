import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { CTABand } from "@/components/CTABand";
import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";
import { WebsiteCta } from "@/components/WebsiteCta";
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
    title: service.metaTitle.replace(/ \| .*$/, "").replace(/ – .*$/, "").replace(/ - .*$/, ""),
    description: service.metaDescription,
  };
}

function MidCta({
  title,
  body,
  cta,
  tone = "light",
}: {
  title: string;
  body: string;
  cta: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <Reveal>
      <div
        className={`rounded-[2rem] border px-6 py-10 sm:px-10 md:px-14 md:py-12 ${
          dark
            ? "border-white/10 bg-white/5 text-white"
            : "border-line bg-paper-elevated text-ink"
        }`}
      >
        <h2
          className={`font-display text-2xl font-semibold tracking-tight sm:text-3xl ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
        <span className="title-accent" />
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed ${
            dark ? "text-white/70" : "text-slate"
          }`}
        >
          {body}
        </p>
        <div className="mt-7 max-w-xl">
          <WebsiteCta buttonLabel={cta} variant={dark ? "dark" : "light"} />
        </div>
      </div>
    </Reveal>
  );
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-14 pt-28 text-white sm:pb-20 sm:pt-32 md:pb-28 md:pt-40">
        <div className="absolute inset-0 hero-atmosphere" />
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <p className="enter text-sm font-semibold uppercase tracking-[0.22em] text-teal">
            <Link href="/services" className="link-shift hover:text-white">
              Services
            </Link>{" "}
            / {service.shortTitle}
          </p>
          <h1
            className="enter mt-4 max-w-4xl font-display text-[1.75rem] font-semibold tracking-tight sm:text-4xl md:text-6xl"
            style={{ ["--enter-delay" as string]: "80ms" }}
          >
            {service.hero}
          </h1>
          <p
            className="enter mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
            style={{ ["--enter-delay" as string]: "160ms" }}
          >
            {service.summary}
          </p>
          {service.trustLine ? (
            <p
              className="enter mt-4 text-sm text-white/45"
              style={{ ["--enter-delay" as string]: "220ms" }}
            >
              {service.trustLine}
            </p>
          ) : null}
          <div
            className="enter mt-8 max-w-xl"
            style={{ ["--enter-delay" as string]: "260ms" }}
          >
            <WebsiteCta buttonLabel={service.primaryCta} variant="dark" />
            <div className="mt-4">
              <Button href="/pricing" variant="ghost" className="w-full sm:w-auto">
                {service.secondaryCta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wash py-14 sm:py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-5 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:gap-14">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              {service.intro.title}
            </h2>
            <span className="title-accent" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate">
              {service.intro.body.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
            {service.intro.points?.length ? (
              <ul className="mt-8 space-y-3">
                {service.intro.points.map((point, index) => (
                  <li key={point.slice(0, 40)}>
                    <Reveal
                      delay={index * 60}
                      className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                    >
                      <span className="mt-1 text-teal" aria-hidden>
                        ●
                      </span>
                      <span>{point}</span>
                    </Reveal>
                  </li>
                ))}
              </ul>
            ) : null}
          </Reveal>
          <Reveal delay={80} variant="scale">
            <div className="rounded-[2rem] border border-line bg-paper-elevated p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                Every Engagement Includes
              </p>
              <ul className="mt-6 space-y-3">
                {service.includes.map((item, index) => (
                  <li key={item}>
                    <Reveal
                      delay={80 + index * 60}
                      className="flex gap-3 text-sm text-ink-muted"
                    >
                      <span className="text-teal">✓</span>
                      {item}
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              What We Deliver
            </h2>
            <span className="title-accent" />
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate">
              {service.offeringsIntro}
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {service.offerings.map((item, index) => (
              <Reveal key={item.title} delay={index * 40}>
                <article className="tile-lift h-full rounded-3xl border border-line bg-paper-elevated p-7">
                  <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wash py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <MidCta {...service.midCta} />
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              How We Work
            </h2>
            <span className="title-accent" />
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/65">
              {service.processIntro}
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {service.process.map((step, index) => (
              <Reveal key={step.step} delay={index * 50}>
                <div className="process-card h-full rounded-3xl border border-white/10 bg-white/5 p-6">
                  <span className="text-sm font-semibold text-teal">{step.step}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wash py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Why Choose iTitans Digital
            </h2>
            <span className="title-accent" />
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate">
              {service.benefitsIntro}
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {service.benefits.map((item, index) => (
              <Reveal key={item.title} delay={index * 35}>
                <div className="benefit-row flex gap-4 rounded-2xl border border-line bg-paper-elevated px-5 py-5">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal" aria-hidden />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <MidCta {...service.strategyCta} />
          </div>
        </div>
      </section>

      {service.caseStudies?.length ? (
        <section className="bg-paper py-14 sm:py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
            <Reveal>
              <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Results & Proof
              </h2>
              <span className="title-accent" />
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate">
                {service.caseStudiesIntro}
              </p>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {service.caseStudies.map((item, index) => (
                <Reveal key={item.title} delay={index * 45} variant="blur">
                  <article className="tile-lift h-full rounded-3xl border border-line bg-paper-elevated p-7">
                    <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate">{item.description}</p>
                    <ul className="mt-5 space-y-2">
                      {item.results.map((result) => (
                        <li key={result} className="flex gap-2 text-sm text-ink-muted">
                          <span className="text-teal">→</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-wash py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Built for Your Business Model
            </h2>
            <span className="title-accent" />
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate">
              {service.audiencesIntro}
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {service.audiences.map((item, index) => (
              <Reveal key={item.title} delay={index * 40} variant="scale">
                <article className="audience-card h-full rounded-3xl border border-line bg-paper-elevated p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-5 md:px-8">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Frequently Asked Questions
            </h2>
            <span className="title-accent mx-auto" />
          </Reveal>
          <div className="mt-10">
            <FAQ items={service.faqs} />
          </div>
        </div>
      </section>

      <section className="section-wash pb-10 pt-4 md:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <MidCta {...service.closing} />
        </div>
      </section>

      <section className="bg-paper pb-8 pt-4 md:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <h2 className="font-display text-2xl font-semibold">Related Services</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 60} variant="scale">
                <Link
                  href={`/services/${item.slug}`}
                  className="related-chip rounded-full border border-line bg-paper-elevated px-5 py-2.5 text-sm font-medium text-ink"
                >
                  {item.title}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title={service.primaryCta} primary={service.primaryCta} />
    </>
  );
}
