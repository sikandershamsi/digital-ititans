import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex">
              <Image
                src="/brand/ititans-digital-logo.png"
                alt="iTitans Digital"
                width={1920}
                height={662}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Full-service performance marketing and AI automation from Frisco, Texas. We turn
              traffic into revenue and manual work into automated systems.
            </p>
            <div className="mt-6 space-y-2 text-sm text-white/70">
              <a href={site.phoneHref} className="block transition hover:text-amber">
                {site.phone}
              </a>
              <a href={site.emailHref} className="block transition hover:text-amber">
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
                  <Link href={item.href} className="transition hover:text-white">
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
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 text-sm text-white/70">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
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
