import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Button } from "@/components/Button";
import { CTABand } from "@/components/CTABand";
import { FAQ } from "@/components/FAQ";
import { FeatureLoveSection } from "@/components/FeatureLoveSection";
import { HeroVisual } from "@/components/HeroVisual";
import { LoopGif } from "@/components/LoopGif";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { SpotlightCard } from "@/components/SpotlightCard";
import { TextReveal } from "@/components/TextReveal";
import { homeFaqs, industries, processSteps, testimonials } from "@/data/about";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden text-white">
        <div className="absolute inset-0 hero-atmosphere" />
        <div className="absolute inset-0 hero-grid opacity-70" />
        <div className="absolute inset-0 noise" />
        <div
          className="absolute inset-y-0 right-0 hidden w-[46%] enter lg:block"
          style={{ ["--enter-delay" as string]: "220ms" }}
        >
          <HeroVisual />
        </div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-24 pt-28 md:px-8 md:pb-28 md:pt-32">
          <p
            className="enter text-sm font-semibold uppercase tracking-[0.22em] text-amber"
            style={{ ["--enter-delay" as string]: "60ms" }}
          >
            iTitans Digital
            <span className="title-accent title-accent-enter" />
          </p>
          <TextReveal
            as="h1"
            text="Full-Service Performance Marketing Agency and AI Automation Partner"
            className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]"
            stagger={38}
          />
          <p
            className="enter mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
            style={{ ["--enter-delay" as string]: "160ms" }}
          >
            We turn traffic into revenue and manual work into automated systems. Performance
            marketing, custom development, and business AI automation under one accountable team.
          </p>
          <div
            className="enter mt-9 flex cta-stack flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            style={{ ["--enter-delay" as string]: "240ms" }}
          >
            <Button href="/contact">
              Get My Free Growth Plan
            </Button>
            <Button href="/contact" variant="ghost">
              Talk to a Strategist
            </Button>
          </div>
        </div>
      </section>

      <div className="marquee-track overflow-hidden border-y border-ink/10 bg-ink-soft py-4 text-white">
        <div className="flex w-max gap-10 marquee whitespace-nowrap px-4 text-sm font-medium tracking-wide text-white/70">
          {[...site.trustBar, ...site.trustBar].map((item, i) => (
            <span key={`${item}-${i}`} className="inline-flex items-center gap-10">
              <span className="soft-blink text-amber">●</span> {item}
            </span>
          ))}
        </div>
      </div>

      <section className="section-wash py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <Reveal variant="clip">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-deep sm:text-sm">
              Why iTitans Digital
            </p>
            <span className="title-accent" />
            <h2 className="mt-3 max-w-3xl font-display text-2xl font-semibold tracking-tight sm:mt-4 sm:text-3xl md:text-5xl">
              Marketing That Performs. Automation That Compounds.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate">
              Most agencies sell you channels. We sell you outcomes, then build the infrastructure
              that protects them. Our strategists acquire demand through SEO, paid search, paid
              social, and email. Our engineers build the websites that convert. Our automation team
              removes the bottlenecks behind the scenes.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="light">
                See How We Work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-deep sm:text-sm">
                  Services
                </p>
                <span className="title-accent" />
                <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold tracking-tight sm:mt-4 sm:text-3xl md:text-5xl">
                  Performance Marketing and AI Services Built for Revenue
                </h2>
              </div>
              <Button href="/services" variant="light" className="w-full sm:w-auto">
                View All Services
              </Button>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 55} variant="scale">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FeatureLoveSection />

      <section className="bg-ink py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">Results</p>
            <span className="title-accent" />
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Numbers Our Clients Care About
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 80} variant="scale">
                <SpotlightCard className="stat-glow card-rise rounded-3xl border border-white/10 bg-white/5 p-7">
                  <p className="font-display text-4xl font-semibold text-amber md:text-5xl">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{stat.label}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wash py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep">Process</p>
            <span className="title-accent" />
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
              A Clear Path From Audit to Scalable Growth
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 50} className="process-card">
                <SpotlightCard className="card-rise h-full rounded-3xl border border-line bg-paper-elevated p-7">
                  <span className="font-display text-sm font-semibold text-teal-deep">
                    Step {step.step}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{step.description}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep">
              Who We Serve
            </p>
            <span className="title-accent" />
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              We Grow Ambitious American Businesses
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              Our clients range from funded startups to established multi-location operators across
              the United States. The channel mix changes by industry. The accountability does not.
            </p>
            <ul className="mt-8 space-y-3">
              {industries.map((item, i) => (
                <Reveal key={item} delay={i * 40}>
                  <li className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                    <span className="text-teal">▸</span>
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/contact" variant="light">
                Request an Industry-Specific Proposal
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120} variant="scale">
            <SpotlightCard className="relative overflow-hidden rounded-[2rem] border border-line bg-ink p-8 text-white md:p-10">
              <div className="absolute inset-0 hero-atmosphere opacity-60" />
              <div className="absolute -right-4 -top-2 h-36 w-36 opacity-80">
                <LoopGif variant="chat" className="h-full w-full" />
              </div>
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                  Put Your Back Office on Autopilot
                </p>
                <h3 className="mt-4 max-w-[18ch] font-display text-2xl font-semibold md:text-3xl">
                  AI stops being a novelty the moment it removes a bottleneck you feel every week.
                </h3>
                <ul className="mt-6 space-y-3 text-sm text-white/70">
                  <li>Inbound lead capture, enrichment, scoring, and CRM routing</li>
                  <li>AI chat agents that answer, qualify, and book appointments</li>
                  <li>Quote, proposal, and reporting automation</li>
                  <li>Support triage drawn from your own documentation</li>
                </ul>
                <div className="mt-8">
                  <Button href="/services/ai-chatbot">Book a Free Automation Audit</Button>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist/40 py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep">
              Testimonials
            </p>
            <span className="title-accent" />
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              What Our Clients Say
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.author} delay={index * 80} variant="scale">
                <SpotlightCard className="card-rise flex h-full flex-col rounded-3xl border border-line bg-paper-elevated p-7">
                  <p className="flex-1 text-base leading-relaxed text-ink-muted">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <footer className="mt-6 border-t border-line pt-5">
                    <p className="font-semibold text-ink">{item.author}</p>
                    <p className="text-sm text-slate">{item.detail}</p>
                  </footer>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wash py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-5 md:px-8">
          <Reveal>
            <p className="text-center text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep">
              FAQ
            </p>
            <h2 className="mt-4 text-center font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="mt-12">
            <FAQ items={homeFaqs} />
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
