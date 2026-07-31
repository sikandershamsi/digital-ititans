import { Button } from "./Button";
import { site } from "@/data/site";

export function CTABand({
  title = "Ready to Grow Faster With Improved Efficiency?",
  body = "Send us your website and your biggest bottleneck. A senior strategist will review your search visibility, ad efficiency, conversion path, and automation potential on a 30-minute call.",
  primary = "Get My Free Growth Plan",
  primaryHref = "/contact",
}: {
  title?: string;
  body?: string;
  primary?: string;
  primaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 hero-atmosphere opacity-80" />
      <div className="pointer-events-none absolute inset-0 noise" />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          {body}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={primaryHref}>{primary}</Button>
          <Button href={site.phoneHref} variant="ghost">
            Call {site.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
