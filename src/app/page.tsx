import { Button } from "@/components/Button";
import { CTABand } from "@/components/CTABand";
import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { homeFaqs, industries, processSteps, testimonials } from "@/data/about";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden text-white">
        <div className="absolute inset-0 hero-atmosphere" />
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute inset-0 noise" />
        <div className="absolute inset-y-0 right-0 hidden w-[48%] lg:block">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-ink/40 to-ink" />
          <div className="float-slow absolute bottom-[18%] right-[12%] h-56 w-56 rounded-full border border-teal/30 bg-teal/10 blur-0" />
          <div className="absolute bottom-[22%] right-[16%] h-40 w-40 rounded-full bg-amber/20 blur-2xl" />
        </div>

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-24 pt-28 md:px-8 md:pb-28 md:pt-32">
          <p className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            iTitans <span className="text-teal">Digital</span>
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white/95 sm:text-4xl md:text-5xl">
            Full-Service Performance Marketing Agency and AI Automation Partner
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            We turn traffic into revenue and manual work into automated systems. Performance
            marketing, custom development, and business AI automation under one accountable team.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/contact">Get My Free Growth Plan</Button>
            <Button href="/contact" variant="ghost">
              Talk to a Strategist
            </Button>
          </div>
        </div>
      </section>

      <div className="border-y border-ink/10 bg-ink-soft py-4 text-white overflow-hidden">
        <div className="flex w-max gap-10 marquee whitespace-nowrap px-4 text-sm font-medium tracking-wide text-white/70">
          {[...site.trustBar, ...site.trustBar].map((item, i) => (
            <span key={`${item}-${i}`} className="inline-flex items-center gap-10">
              <span className="text-teal">●</span> {item}
            </span>
          ))}
        </div>
      </div>

      <section className="section-wash py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep">
              Why iTitans Digital
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Marketing That Performs. Automation That Compounds.
            </h2>
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

      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep">
                  Services
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
                  Performance Marketing and AI Services Built for Revenue
                </h2>
              </div>
              <Button href="/services" variant="light">
                View All Services
              </Button>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 60}>
                <ServiceCard service={service} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">Results</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              Numbers Our Clients Care About
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 80}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-7">
                  <p className="font-display text-4xl font-semibold text-amber md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wash py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep">Process</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
              A Clear Path From Audit to Scalable Growth
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 50}>
                <div className="h-full rounded-3xl border border-line bg-paper-elevated p-7">
                  <span className="font-display text-sm font-semibold text-teal-deep">
                    Step {step.step}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep">
              Who We Serve
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              We Grow Ambitious American Businesses
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate">
              Our clients range from funded startups to established multi-location operators across
              the United States. The channel mix changes by industry. The accountability does not.
            </p>
            <ul className="mt-8 space-y-3">
              {industries.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                  <span className="text-teal">▸</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/contact" variant="light">
                Request an Industry-Specific Proposal
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-ink p-8 text-white md:p-10">
              <div className="absolute inset-0 hero-atmosphere opacity-60" />
              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                  Put Your Back Office on Autopilot
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold md:text-3xl">
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
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-deep">
              Testimonials
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-5xl">
              What Our Clients Say
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.author} delay={index * 80}>
                <blockquote className="flex h-full flex-col rounded-3xl border border-line bg-paper-elevated p-7">
                  <p className="flex-1 text-base leading-relaxed text-ink-muted">&ldquo;{item.quote}&rdquo;</p>
                  <footer className="mt-6 border-t border-line pt-5">
                    <p className="font-semibold text-ink">{item.author}</p>
                    <p className="text-sm text-slate">{item.detail}</p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wash py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
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
