import { aiChatbot } from "./ai-chatbot";
import { contentMarketing } from "./content-marketing";
import { localMapOptimization } from "./local-map-optimization";
import { localSeo } from "./local-seo";
import { ppcManagement } from "./ppc-management";
import { seo } from "./seo";
import { socialMediaMarketing } from "./social-media-marketing";
import { websiteDesignDevelopment } from "./website-design-development";
import type { Service } from "./types";

export type { Service } from "./types";

export const services: Service[] = [
  localMapOptimization,
  ppcManagement,
  contentMarketing,
  aiChatbot,
  seo,
  socialMediaMarketing,
  localSeo,
  websiteDesignDevelopment,
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs() {
  return services.map((s) => s.slug);
}
