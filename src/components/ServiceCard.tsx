"use client";

import Link from "next/link";
import type { Service } from "@/data/services";
import { SpotlightCard } from "./SpotlightCard";
import { LoopGif } from "./LoopGif";

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

const loops: Record<string, "pulse" | "radar" | "chat" | "chart"> = {
  "local-map-optimization": "radar",
  "ppc-management": "chart",
  "content-marketing": "pulse",
  "ai-chatbot": "chat",
  seo: "chart",
  "social-media-marketing": "pulse",
  "local-seo": "radar",
  "website-design-development": "pulse",
};

export function ServiceCard({ service }: { service: Service; index?: number }) {
  return (
    <SpotlightCard className="h-full rounded-[1.75rem] border border-line bg-paper-elevated">
      <Link href={`/services/${service.slug}`} className="group relative block h-full p-7">
        <div className="absolute -right-2 top-2 h-24 w-24 opacity-70 transition duration-500 group-hover:opacity-100 group-hover:scale-110">
          <LoopGif variant={loops[service.slug] ?? "pulse"} className="h-full w-full" />
        </div>
        <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-ink text-lg text-amber transition duration-300 group-hover:shadow-[0_0_24px_rgba(110,193,228,0.45)]">
          {icons[service.slug] ?? "●"}
        </span>
        <h3 className="mt-6 font-display text-xl font-semibold text-ink">{service.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate">{service.summary}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal transition group-hover:gap-3">
          Explore service <span aria-hidden>→</span>
        </span>
      </Link>
    </SpotlightCard>
  );
}
