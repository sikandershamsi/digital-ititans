"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { site } from "@/data/site";
import { getServicesByCategory } from "@/data/services";

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const serviceGroups = getServicesByCategory();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-ink/95 backdrop-blur-xl shadow-lg shadow-black/20"
          : "border-b border-transparent bg-ink/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-[68px] sm:px-5 md:px-8">
        <Logo priority />

        <nav className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) =>
            item.label === "Services" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className="nav-link rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  Services
                </Link>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full z-50 w-[min(880px,calc(100vw-2rem))] -translate-x-1/2 pt-3">
                    <div className="menu-pop grid max-h-[75vh] grid-cols-3 gap-2 overflow-y-auto rounded-2xl border border-white/10 bg-ink-soft/95 p-4 shadow-2xl backdrop-blur-xl">
                      {serviceGroups.map((group) => (
                        <div key={group.category}>
                          <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                            {group.category}
                          </p>
                          <div className="flex flex-col">
                            {group.services.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="rounded-xl px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-white hover:translate-x-0.5"
                              >
                                {service.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-amber-deep"
          >
            Get My Free Growth Plan
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/15 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-white/10 bg-ink px-4 pb-8 sm:max-h-[calc(100dvh-72px)] sm:px-5 lg:hidden">
          <div className="flex flex-col gap-1 pt-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3.5 text-base font-medium text-white/90"
              >
                {item.label}
              </Link>
            ))}
            {serviceGroups.map((group) => (
              <div key={group.category}>
                <p className="mt-4 px-3 text-xs uppercase tracking-[0.2em] text-white/40">
                  {group.category}
                </p>
                {group.services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm text-white/70"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            ))}
            <a
              href={site.phoneHref}
              className="mt-4 rounded-xl px-3 py-3 text-sm font-medium text-amber"
            >
              {site.phone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-amber px-5 py-3.5 text-center text-sm font-semibold text-ink"
            >
              Get My Free Growth Plan
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
