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
    <SpotlightCard className="card-rise h-full rounded-2xl border border-line bg-paper-elevated sm:rounded-[1.75rem]">
      <Link href={`/services/${service.slug}`} className="group relative block h-full p-5 sm:p-7">
        <div className="absolute -right-2 top-2 hidden h-20 w-20 opacity-60 transition duration-500 sm:block sm:h-24 sm:w-24 sm:opacity-70 group-hover:opacity-100 group-hover:scale-110">
          <LoopGif variant={loops[service.slug] ?? "pulse"} className="h-full w-full" />
        </div>
        <span className="icon-bob relative grid h-11 w-11 place-items-center rounded-2xl bg-ink text-lg text-amber transition duration-300 sm:h-12 sm:w-12 group-hover:shadow-[0_0_24px_rgba(110,193,228,0.45)]">
          {icons[service.slug] ?? "●"}
        </span>
        <h3 className="mt-5 font-display text-lg font-semibold text-ink sm:mt-6 sm:text-xl">
          {service.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate sm:mt-3">
          {service.summary}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal transition sm:mt-6 group-hover:gap-3">
          Explore service <span aria-hidden className="arrow-nudge">→</span>
        </span>
      </Link>
    </SpotlightCard>
  );
}
