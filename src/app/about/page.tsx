import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { about } from "@/data/about";

export const metadata: Metadata = {
  title: about.metaTitle,
  description: about.metaDescription,
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-14 pt-28 text-white sm:pb-20 sm:pt-32 md:pb-28 md:pt-40">
        <div className="absolute inset-0 hero-atmosphere" />
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">About</p>
          <h1 className="mt-4 max-w-4xl font-display text-[1.75rem] font-semibold tracking-tight sm:text-4xl md:text-6xl">
            {about.hero}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{about.intro}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">Book a Free Consultation</Button>
            <Button href="/services" variant="ghost">
              See Our Work
            </Button>
          </div>
        </div>
      </section>

      <section className="section-wash py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
              All-in-One Digital Partner for Growing Businesses
            </h2>
          </Reveal>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate md:text-lg">
            {about.story.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 32)}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
              The People Behind Every Successful Project
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate">{about.teamSize}</p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {about.expertise.map((item, index) => (
              <Reveal key={item.title} delay={index * 50}>
                <div className="h-full rounded-3xl border border-line bg-paper-elevated p-7">
                  <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
              The Leadership Behind iTitans Digital
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {about.leadership.map((person, index) => (
              <Reveal key={person.name} delay={index * 60}>
                <article className="rounded-3xl border border-white/10 bg-white/5 p-7">
                  <h3 className="font-display text-2xl font-semibold">{person.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-teal">{person.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">{person.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wash py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Why Businesses Choose iTitans Digital
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {about.whyChoose.map((item, index) => (
              <Reveal key={item.title} delay={index * 40}>
                <div className="rounded-3xl border border-line bg-paper-elevated p-6 md:p-7">
                  <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
              What We Stand For
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {about.values.map((value, index) => (
              <Reveal key={value.title} delay={index * 50}>
                <div className="rounded-3xl border border-line bg-mist/30 p-7">
                  <h3 className="font-display text-xl font-semibold text-ink">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Your Next Growth Opportunity Starts With One Conversation."
        body="Let's discuss your business, your goals, and where you want to be in the next 12 to 24 months—with complete transparency and zero obligation."
        primary="Talk With Our Team Today"
      />
    </>
  );
}
