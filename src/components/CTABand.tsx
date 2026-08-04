import { WebsiteCta } from "./WebsiteCta";
import { LoopGif } from "./LoopGif";
import { Button } from "./Button";
import { site } from "@/data/site";

export function CTABand({
  title = "Sound good? Let's get started.",
  body = "Enter your website and a senior strategist will review your search visibility, ad efficiency, conversion path, and automation potential.",
  primary = "Get a Free Quote",
}: {
  title?: string;
  body?: string;
  primary?: string;
  /** @deprecated Kept for call-site compatibility; website CTA always goes to /contact */
  primaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-14 text-white sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 hero-atmosphere opacity-80" />
      <div className="pointer-events-none absolute inset-0 noise" />
      <div className="pointer-events-none absolute -left-8 bottom-0 hidden h-44 w-44 opacity-50 sm:block md:h-56 md:w-56">
        <LoopGif variant="radar" className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute -right-6 top-4 hidden h-40 w-40 opacity-45 sm:block md:h-52 md:w-52">
        <LoopGif variant="chart" className="h-full w-full" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center cta-glow sm:px-5 md:px-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:mt-5 sm:text-base md:text-lg">
          {body}
        </p>
        <div className="mt-8">
          <WebsiteCta buttonLabel={primary} variant="dark" />
        </div>
        <div className="mt-6 flex justify-center">
          <Button href={site.phoneHref} variant="ghost" className="w-full sm:w-auto">
            Call {site.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
