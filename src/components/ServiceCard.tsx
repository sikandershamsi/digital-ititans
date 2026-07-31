import Link from "next/link";
import type { Service } from "@/data/services";

const icons: Record<string, string> = {
  "local-map-optimization": "◎",
  "ppc-management": "◈",
  "content-marketing": "✎",
  "ai-chatbot": "◉",
  seo: "◇",
  "social-media-marketing": "⬡",
  "local-seo": "◍",
  "website-design-development": "▣",
};

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative block overflow-hidden rounded-[1.75rem] border border-line bg-paper-elevated p-7 transition duration-500 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_24px_50px_rgba(15,159,138,0.12)]"
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-teal/5 transition group-hover:bg-teal/10" />
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-lg text-teal">
        {icons[service.slug] ?? "●"}
      </span>
      <h3 className="mt-6 font-display text-xl font-semibold text-ink">{service.title}</h3>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate">{service.summary}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal transition group-hover:gap-3">
        Explore service <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
