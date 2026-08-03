export type ServiceCategory =
  | "Core Services"
  | "SEO Services & Specialties"
  | "Paid Advertising"
  | "Website Design";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  metaTitle: string;
  metaDescription: string;
  hero: string;
  summary: string;
  primaryCta: string;
  secondaryCta: string;
  trustLine?: string;
  intro: {
    title: string;
    body: string[];
    points?: string[];
  };
  includes: string[];
  offeringsIntro: string;
  offerings: { title: string; description: string }[];
  midCta: { title: string; body: string; cta: string };
  processIntro: string;
  process: { step: string; title: string; description: string }[];
  benefitsIntro: string;
  benefits: { title: string; description: string }[];
  strategyCta: { title: string; body: string; cta: string };
  caseStudiesIntro?: string;
  caseStudies?: { title: string; description: string; results: string[] }[];
  audiencesIntro: string;
  audiences: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
  closing: { title: string; body: string; cta: string };
};
