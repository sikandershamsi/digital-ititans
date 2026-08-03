import { aiChatbot } from "./ai-chatbot";
import { contentMarketing } from "./content-marketing";
import { localMapOptimization } from "./local-map-optimization";
import { localSeo } from "./local-seo";
import { ppcManagement } from "./ppc-management";
import { seo } from "./seo";
import { socialMediaMarketing } from "./social-media-marketing";
import { websiteDesignDevelopment } from "./website-design-development";
import { seoByIndustry } from "./seo-by-industry";
import { b2bSeo } from "./b2b-seo";
import { googleAdsManagement } from "./google-ads-management";
import { seoServices } from "./seo-services";
import { ecommerceSeo } from "./ecommerce-seo";
import { enterpriseSeo } from "./enterprise-seo";
import { saasSeo } from "./saas-seo";
import { leadGenSeo } from "./lead-gen-seo";
import { technicalSeo } from "./technical-seo";
import { seoAudits } from "./seo-audits";
import { seoPackages } from "./seo-packages";
import { seoConsulting } from "./seo-consulting";
import { seoCopywriting } from "./seo-copywriting";
import { aiSeo } from "./ai-seo";
import type { Service, ServiceCategory } from "./types";

export type { Service, ServiceCategory } from "./types";

export const services: Service[] = [
  localMapOptimization,
  ppcManagement,
  contentMarketing,
  aiChatbot,
  seo,
  socialMediaMarketing,
  localSeo,
  websiteDesignDevelopment,
  seoByIndustry,
  b2bSeo,
  googleAdsManagement,
  seoServices,
  ecommerceSeo,
  enterpriseSeo,
  saasSeo,
  leadGenSeo,
  technicalSeo,
  seoAudits,
  seoPackages,
  seoConsulting,
  seoCopywriting,
  aiSeo,
];

export const serviceCategoryOrder: ServiceCategory[] = [
  "Core Services",
  "SEO Services & Specialties",
  "Paid Advertising",
  "Website Design",
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs() {
  return services.map((s) => s.slug);
}

export function getServicesByCategory() {
  return serviceCategoryOrder
    .map((category) => ({
      category,
      services: services.filter((s) => s.category === category),
    }))
    .filter((group) => group.services.length > 0);
}
