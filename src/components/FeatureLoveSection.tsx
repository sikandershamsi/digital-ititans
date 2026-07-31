"use client";

import { loveFeatures } from "@/data/home";
import { Reveal } from "@/components/Reveal";

function NetworkVisual() {
  return (
    <svg
      viewBox="0 0 520 220"
      className="mx-auto mt-6 w-full max-w-md"
      aria-hidden
    >
      <g className="network-lines" fill="none" stroke="currentColor" strokeWidth="1.25">
        <path d="M80 110 H440" className="text-teal/25" />
        <path d="M160 40 L260 110 L360 40" className="text-amber/30" />
        <path d="M160 180 L260 110 L360 180" className="text-teal/30" />
        <path d="M80 110 L160 40" className="text-teal/20" />
        <path d="M80 110 L160 180" className="text-amber/20" />
        <path d="M440 110 L360 40" className="text-teal/20" />
        <path d="M440 110 L360 180" className="text-amber/20" />
      </g>
      {[
        [80, 110],
        [160, 40],
        [160, 180],
        [260, 110],
        [360, 40],
        [360, 180],
        [440, 110],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="14" className="fill-paper-elevated stroke-line" strokeWidth="1" />
          <circle
            cx={cx}
            cy={cy}
            r="5"
            className={`fill-teal node-pulse-dot`}
            style={{ animationDelay: `${i * 0.25}s` }}
          />
        </g>
      ))}
    </svg>
  );
}

function GaugeVisual() {
  return (
    <div className="relative mx-auto mt-2 h-28 w-36" aria-hidden>
      <svg viewBox="0 0 140 90" className="h-full w-full">
        <path
          d="M18 78 A52 52 0 0 1 122 78"
          fill="none"
          stroke="currentColor"
          strokeWidth="10"
          className="text-mist"
          strokeLinecap="round"
        />
        <path
          d="M18 78 A52 52 0 0 1 108 40"
          fill="none"
          stroke="url(#gaugeGrad)"
          strokeWidth="10"
          className="gauge-arc"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4c076b" />
            <stop offset="100%" stopColor="#6ec1e4" />
          </linearGradient>
        </defs>
        <g className="gauge-needle origin-center" style={{ transformOrigin: "70px 78px" }}>
          <line x1="70" y1="78" x2="70" y2="28" stroke="#03031c" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="70" cy="78" r="5" fill="#03031c" />
        </g>
      </svg>
      <p className="absolute inset-x-0 bottom-0 text-center font-display text-lg font-semibold text-ink">
        92
      </p>
    </div>
  );
}

function DialerVisual() {
  return (
    <div className="relative mx-auto mt-4 flex h-36 w-36 items-center justify-center" aria-hidden>
      <div className="spin-ring-slow absolute inset-0 rounded-full border border-dashed border-white/45" />
      <div className="spin-ring-rev absolute inset-3 rounded-full border border-dashed border-amber/50" />
      <div className="relative z-[1] grid h-16 w-16 place-items-center rounded-2xl bg-white/10 font-display text-2xl text-amber">
        ◈
      </div>
      <div className="absolute -bottom-1 -right-2 w-[5.5rem] overflow-hidden rounded-lg bg-white p-1.5 shadow-lg">
        <p className="px-1 text-[7px] font-bold uppercase tracking-wide text-ink">Leaderboard</p>
        <div className="leaderboard-scroll mt-1 space-y-1">
          {["ROAS 4.8×", "CPA −32%", "CVR 6.1%"].map((row) => (
            <div
              key={row}
              className="rounded bg-mist/80 px-1.5 py-1 text-[8px] font-semibold text-ink-muted"
            >
              {row}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChatVisual() {
  return (
    <div className="relative mx-auto mt-2 h-40 w-40" aria-hidden>
      <div className="absolute inset-4 rounded-full bg-white/10" />
      <div className="pulse-ring absolute inset-2 rounded-full border border-amber/40" />
      <div className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-amber font-display text-2xl text-ink">
        ◉
      </div>
      <div className="float-slow absolute left-2 top-8 max-w-[5.5rem] rounded-xl bg-white/95 px-2 py-1.5 text-[9px] font-medium text-ink shadow">
        New lead scored
      </div>
      <div className="float-medium absolute bottom-6 right-1 max-w-[5.5rem] rounded-xl bg-white/95 px-2 py-1.5 text-[9px] font-medium text-ink shadow">
        Call booked ✓
      </div>
    </div>
  );
}

function WebVisual() {
  return (
    <div className="mx-auto mt-4 w-full max-w-[13rem] overflow-hidden rounded-xl border border-line bg-paper" aria-hidden>
      <div className="flex gap-1 border-b border-line bg-mist/60 px-2 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-teal/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-amber/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
      </div>
      <div className="space-y-2 p-3">
        <div className="h-2 w-3/5 rounded bg-ink/15" />
        <div className="h-2 w-full rounded bg-ink/10" />
        <div className="h-2 w-4/5 rounded bg-ink/10" />
        <div className="mt-3 h-7 w-24 rounded-full bg-amber" />
      </div>
    </div>
  );
}

function HandoffVisual() {
  return (
    <div className="relative mx-auto mt-4 flex max-w-lg items-center justify-center gap-4" aria-hidden>
      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-2xl text-amber">◉</div>
      <div className="handoff-beam h-px flex-1 max-w-40 bg-gradient-to-r from-amber via-white to-teal" />
      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-amber text-lg font-bold text-ink">
        iT
      </div>
    </div>
  );
}

function FeatureVisual({ id }: { id: string }) {
  switch (id) {
    case "crm":
      return <NetworkVisual />;
    case "speech":
      return <ChatVisual />;
    case "analytics":
      return <GaugeVisual />;
    case "optimize":
      return <DialerVisual />;
    case "web":
      return <WebVisual />;
    case "handoff":
      return <HandoffVisual />;
    default:
      return null;
  }
}

const toneClass = {
  light: "border-line bg-paper-elevated text-ink",
  brand: "border-teal/30 bg-teal text-white",
  dark: "border-white/10 bg-ink text-white",
  media: "border-white/10 bg-[linear-gradient(145deg,#1a0b2e_0%,#03031c_55%,#0a2030_100%)] text-white",
} as const;

export function FeatureLoveSection() {
  return (
    <section className="section-wash py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-deep sm:text-sm">
            Unique features
          </p>
          <span className="title-accent" />
          <h2 className="mt-3 max-w-3xl font-display text-2xl font-semibold tracking-tight sm:mt-4 sm:text-3xl md:text-5xl">
            Features you&apos;ll absolutely love
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate md:text-lg">
            iTitans Digital pairs performance marketing with AI automation so acquisition, conversion,
            and operations move as one system.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {loveFeatures.map((feature, index) => (
            <Reveal
              key={feature.id}
              delay={index * 60}
              variant="scale"
              className={feature.span === "wide" ? "xl:col-span-2" : ""}
            >
              <article
                className={`card-rise feature-bento flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl border p-6 sm:min-h-[320px] sm:rounded-3xl sm:p-7 ${toneClass[feature.tone]}`}
              >
                <div className="text-center">
                  <h3
                    className={`font-display text-lg font-semibold sm:text-xl ${
                      feature.tone === "light" ? "text-ink" : "text-white"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-relaxed ${
                      feature.tone === "light" ? "text-slate" : "text-white/75"
                    }`}
                  >
                    {feature.body}
                  </p>
                </div>
                <div className="mt-auto pt-2">
                  <FeatureVisual id={feature.id} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
