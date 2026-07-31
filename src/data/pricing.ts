export const pricingIntro = {
  title: "Pricing Built for Clarity of Your Digital Authority",
  summary:
    "Get complete transparency of our pricing range and services designed for small to large scale enterprise businesses. You choose the tier that matches your stage, and we quote anything custom within 48 hours. No retainers you cannot exit. No surprise line items after launch.",
};

export const planIncludes = [
  "Fixed scope in writing before we start",
  "You own everything—code, design, domains, ad accounts",
  "US-based account management from Frisco, Texas",
  "Mobile-first and Core Web Vitals tested",
  "Plain-English reporting dashboards",
  "30 days of post-launch support",
];

export type Package = {
  name: string;
  price: string;
  note?: string;
  popular?: boolean;
  description: string;
  features: string[];
  cta: string;
};

export const websitePackages: Package[] = [
  {
    name: "Launch",
    price: "$1,199",
    note: "one time",
    description: "Best for new businesses and single-service providers.",
    features: [
      "5-page responsive website",
      "Mobile-first design across all devices",
      "On-page SEO setup and XML sitemap",
      "Contact form and Google Analytics 4 setup",
      "2 revision rounds",
      "14-day delivery",
    ],
    cta: "Start My Website",
  },
  {
    name: "Growth",
    price: "$2,499",
    note: "one time",
    popular: true,
    description: "Ideal for established SMBs that need a site to generate leads.",
    features: [
      "Up to 12 pages with custom UI/UX",
      "WordPress CMS for easy content edits",
      "Advanced on-page SEO plus schema markup",
      "Blog architecture and category structure",
      "Core Web Vitals speed optimization",
      "4 revision rounds",
      "30 days post-launch support",
    ],
    cta: "Choose Growth",
  },
  {
    name: "Scale",
    price: "From $4,999",
    note: "one time",
    description: "Best for multi-location brands and complex funnels.",
    features: [
      "25+ pages with a reusable design system",
      "Custom integrations: CRM, booking, payments",
      "Conversion tracking and event setup",
      "Multi-language ready architecture",
      "Priority support and quarterly reviews",
    ],
    cta: "Request a Custom Quote",
  },
];

export const ecommercePackages: Package[] = [
  {
    name: "Starter Store",
    price: "$1,799",
    note: "one time",
    description: "Up to 30 products, ready to sell.",
    features: [
      "Up to 30 products, uploaded and optimized",
      "Premium theme customization to your brand",
      "Payment, tax, and shipping configuration",
      "Product page SEO templates",
      "Launch checklist and staff training video",
    ],
    cta: "Start My Store",
  },
  {
    name: "Pro Store",
    price: "$3,499",
    note: "one time",
    popular: true,
    description: "Up to 200 products with conversion tooling.",
    features: [
      "Up to 200 products with variant logic",
      "Custom homepage and collection sections",
      "Abandoned cart recovery and email flows",
      "App integrations: reviews, upsells, subscriptions",
      "GA4 and Meta Pixel conversion tracking",
      "Speed tuning and mobile checkout optimization",
    ],
    cta: "Choose Pro Store",
  },
  {
    name: "Enterprise Store",
    price: "From $7,500",
    note: "one time",
    description: "Custom checkout and systems integration.",
    features: [
      "Custom or headless checkout experience",
      "ERP, POS, and inventory synchronization",
      "Full platform migration with URL mapping",
      "Multi-currency and multi-region setup",
      "Dedicated ecommerce strategist",
    ],
    cta: "Request Enterprise Quote",
  },
];

export const seoPackages: Package[] = [
  {
    name: "Local SEO",
    price: "$499",
    note: "per month",
    description: "Best for service businesses targeting one metro area.",
    features: [
      "10 target keywords",
      "Google Business Profile optimization and posting",
      "On-page fixes and technical cleanup",
      "Local citation building and NAP consistency",
      "Monthly ranking and traffic report",
    ],
    cta: "Start Local SEO",
  },
  {
    name: "Growth SEO",
    price: "$999",
    note: "per month",
    popular: true,
    description: "Best for regional brands in crowded categories.",
    features: [
      "25 target keywords across multiple service lines",
      "Full technical SEO audit and remediation",
      "4 optimized content pieces per month",
      "Ethical link acquisition",
      "AI search and answer-engine optimization",
      "Bi-weekly reporting and strategy calls",
    ],
    cta: "Choose Growth SEO",
  },
  {
    name: "National / Ecommerce SEO",
    price: "From $1,999",
    note: "per month",
    description: "Best for catalogs and multi-state operations.",
    features: [
      "50+ keywords and topic cluster strategy",
      "Content engine with editorial calendar",
      "Digital PR and high-authority link building",
      "Conversion rate optimization testing",
      "Dedicated strategist and custom dashboard",
    ],
    cta: "Request SEO Quote",
  },
];

export const marketingPricing = [
  {
    service: "Google Ads Management",
    price: "$649/mo or 12% of ad spend",
    detail: "Campaign build, keyword management, ad copy testing, conversion tracking, monthly reporting",
  },
  {
    service: "Social Media Marketing",
    price: "$799/month",
    detail: "3 platforms, 16 posts, community management, monthly content calendar, performance report",
  },
  {
    service: "Meta & LinkedIn Ads",
    price: "$749/mo or 12% of ad spend",
    detail: "Audience research, creative production, A/B testing, retargeting funnels",
  },
  {
    service: "Email Marketing",
    price: "$499/month",
    detail: "Flow automation, 4 campaigns, list segmentation, deliverability monitoring",
  },
  {
    service: "Content Marketing",
    price: "$899/month",
    detail: "6 SEO-optimized pieces, editorial calendar, internal linking strategy",
  },
];

export const appPricing = [
  {
    tier: "Discovery Sprint",
    investment: "$2,500",
    timeline: "2 weeks",
    scope: "Technical scope document, wireframes, clickable prototype, fixed-price build quote",
  },
  {
    tier: "MVP App",
    investment: "From $14,900",
    timeline: "6 to 10 weeks",
    scope: "Cross-platform build, 6–10 screens, authentication, core user flow, store submission",
  },
  {
    tier: "Growth App",
    investment: "$30,000–$70,000",
    timeline: "3 to 5 months",
    scope: "Full feature set, custom backend, payments, push notifications, admin panel, analytics",
  },
  {
    tier: "Custom Platform",
    investment: "From $85,000",
    timeline: "5+ months",
    scope: "Native iOS and Android, complex integrations, compliance, advanced QA, phased rollout",
  },
];

export const dedicatedTeam = [
  { label: "Hourly engagement", price: "From $35/hour" },
  { label: "Dedicated developer", price: "From $3,200/month" },
  { label: "Dedicated designer", price: "From $2,800/month" },
  { label: "Fractional marketing team", price: "From $2,400/month" },
];
