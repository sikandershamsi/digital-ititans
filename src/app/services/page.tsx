import type { Metadata } from "next";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { WebsiteCta } from "@/components/WebsiteCta";
import { getServicesByCategory } from "@/data/services";

export const metadata: Metadata = {
  title: "Digital Marketing & Development Services",
  description:
    "Explore iTitans Digital services: Local Map Optimization, PPC, Content Marketing, AI Chatbots, SEO, Social Media, Local SEO, and Website Design & Development.",
};

export default function ServicesPage() {
  const serviceGroups = getServicesByCategory();

  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-14 pt-28 text-white sm:pb-20 sm:pt-32 md:pb-28 md:pt-40">
        <div className="absolute inset-0 hero-atmosphere" />
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <p className="enter text-sm font-semibold uppercase tracking-[0.22em] text-teal">
            Services
          </p>
          <h1
            className="enter mt-4 max-w-4xl font-display text-[1.75rem] font-semibold tracking-tight sm:text-4xl md:text-6xl"
            style={{ ["--enter-delay" as string]: "80ms" }}
          >
            End-to-End Capability Across Acquisition, Conversion, and Operations
          </h1>
          <p
            className="enter mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
            style={{ ["--enter-delay" as string]: "160ms" }}
          >
            Engage us for one service or run your entire digital program through a single accountable
            team.
          </p>
          <div className="enter mt-8 max-w-xl" style={{ ["--enter-delay" as string]: "240ms" }}>
            <WebsiteCta buttonLabel="Get a Free Quote" variant="dark" />
          </div>
        </div>
      </section>

      {serviceGroups.map((group) => (
        <section key={group.category} className="section-wash py-14 sm:py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                {group.category}
              </h2>
              <span className="title-accent" />
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {group.services.map((service, index) => (
                <Reveal key={service.slug} delay={index * 50} variant={index % 2 === 0 ? "up" : "scale"}>
                  <ServiceCard service={service} index={index} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTABand />
    </>
  );
}
