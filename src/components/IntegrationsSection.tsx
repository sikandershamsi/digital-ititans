import { integrationPartners } from "@/data/home";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

function IntegrationNetwork() {
  return (
    <svg viewBox="0 0 640 400" className="absolute inset-0 h-full w-full opacity-40" aria-hidden>
      <g fill="none" stroke="rgba(110,193,228,0.35)" strokeWidth="1">
        <path className="dash-flow" d="M320 200 L120 80" />
        <path className="dash-flow" d="M320 200 L220 60" style={{ animationDelay: "0.4s" }} />
        <path className="dash-flow" d="M320 200 L420 55" style={{ animationDelay: "0.8s" }} />
        <path className="dash-flow" d="M320 200 L520 90" style={{ animationDelay: "1.2s" }} />
        <path className="dash-flow" d="M320 200 L100 200" style={{ animationDelay: "0.2s" }} />
        <path className="dash-flow" d="M320 200 L540 200" style={{ animationDelay: "0.6s" }} />
        <path className="dash-flow" d="M320 200 L130 320" style={{ animationDelay: "1s" }} />
        <path className="dash-flow" d="M320 200 L320 340" style={{ animationDelay: "1.4s" }} />
        <path className="dash-flow" d="M320 200 L500 320" style={{ animationDelay: "0.3s" }} />
      </g>
      <circle cx="320" cy="200" r="28" fill="#6ec1e4" />
      <text
        x="320"
        y="206"
        textAnchor="middle"
        fill="#03031c"
        fontSize="12"
        fontWeight="700"
        style={{ fontFamily: "var(--font-display), system-ui" }}
      >
        iT
      </text>
    </svg>
  );
}

export function IntegrationsSection() {
  return (
    <section className="bg-paper py-14 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-deep sm:text-sm">
            Integrations
          </p>
          <span className="title-accent" />
          <h2 className="mt-3 max-w-3xl font-display text-2xl font-semibold tracking-tight sm:mt-4 sm:text-3xl md:text-5xl">
            iTitans Digital provides integrations
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate md:text-lg">
            Connect ads, analytics, CRM, commerce, and messaging so campaigns, websites, and AI
            automations share one source of truth.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-[1.4fr_1fr] lg:items-stretch">
          <Reveal variant="scale">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink p-6 text-white sm:p-8 md:min-h-[420px]">
              <div className="pointer-events-none absolute inset-0 hero-atmosphere opacity-70" />
              <IntegrationNetwork />
              <div className="relative z-[1]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
                  Your growth stack
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-5 sm:gap-4">
                  {integrationPartners.map((name, i) => (
                    <div
                      key={name}
                      className="integration-tile flex aspect-square flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-2 text-center backdrop-blur-sm"
                      style={{ animationDelay: `${(i % 5) * 0.15}s` }}
                    >
                      <span className="font-display text-sm font-semibold text-white sm:text-base">
                        {name
                          .split(" ")
                          .map((w) => w[0])
                          .join("")
                          .slice(0, 2)}
                      </span>
                      <span className="mt-1 line-clamp-2 text-[9px] leading-tight text-white/55 sm:text-[10px]">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex h-full flex-col justify-center rounded-3xl border border-line bg-paper-elevated p-7 sm:p-9">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Connected to the tools your team already runs
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate">
                From Google Ads and Meta to HubSpot, Shopify, and Zapier, we wire tracking,
                automations, and reporting into the stack you already trust—so growth compounds
                without tool sprawl.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-ink-muted">
                <li className="flex gap-2">
                  <span className="text-teal">▸</span>
                  Pixel, CAPI, and CRM event hygiene
                </li>
                <li className="flex gap-2">
                  <span className="text-teal">▸</span>
                  Chatbot and form routing into your pipeline
                </li>
                <li className="flex gap-2">
                  <span className="text-teal">▸</span>
                  Dashboards your leadership will actually open
                </li>
              </ul>
              <div className="mt-8">
                <Button href="/contact" variant="light">
                  Map My Stack
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
