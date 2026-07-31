import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Digital Marketing & Development Services",
  description:
    "Explore iTitans Digital services: Local Map Optimization, PPC, Content Marketing, AI Chatbots, SEO, Social Media, Local SEO, and Website Design & Development.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-14 pt-28 text-white sm:pb-20 sm:pt-32 md:pb-28 md:pt-40">
        <div className="absolute inset-0 hero-atmosphere" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal">Services</p>
          <h1 className="mt-4 max-w-4xl font-display text-[1.75rem] font-semibold tracking-tight sm:text-4xl md:text-6xl">
            End-to-End Capability Across Acquisition, Conversion, and Operations
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Engage us for one service or run your entire digital program through a single accountable
            team.
          </p>
          <div className="mt-8">
            <Button href="/contact">Get My Free Growth Plan</Button>
          </div>
        </div>
      </section>

      <section className="section-wash py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 50}>
                <ServiceCard service={service} index={index} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
