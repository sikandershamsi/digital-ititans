import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/data/site";
import { getServicesByCategory } from "@/data/services";

export function Footer() {
  const serviceGroups = getServicesByCategory();

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo variant="footer" href="/" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Full-service performance marketing and AI automation from Frisco, Texas. We turn
              traffic into revenue and manual work into automated systems.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-white/70">
              <a href={site.phoneHref} className="w-fit transition hover:text-amber">
                {site.phone}
              </a>
              <a href={site.emailHref} className="w-fit transition hover:text-amber">
                {site.email}
              </a>
              <p>{site.location}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Agency
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-shift transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Services
            </h3>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {serviceGroups.map((group) => (
                <div key={group.category}>
                  <p className="text-xs font-medium uppercase tracking-[0.1em] text-white/35">
                    {group.category}
                  </p>
                  <ul className="mt-2.5 space-y-2.5 text-sm text-white/70">
                    {group.services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="link-shift transition hover:text-white"
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/45 sm:mt-14 sm:pt-8 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="transition hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
