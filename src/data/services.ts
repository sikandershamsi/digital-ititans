export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  hero: string;
  summary: string;
  primaryCta: string;
  secondaryCta: string;
  includes: string[];
  offerings: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "local-map-optimization",
    title: "Local Map Optimization",
    shortTitle: "Local Maps",
    metaTitle: "Local Map Optimization Services | iTitans Digital",
    metaDescription:
      "Increase local visibility with Local Map Optimization Services. Improve Google Maps rankings, attract nearby customers, and generate qualified leads.",
    hero: "Local Map Optimization Services That Drive More Local Customers",
    summary:
      "At iTitans Digital, our Local Map Optimization Services help businesses improve Google Maps rankings, optimize their Google Business Profile, and strengthen their local search presence. By combining technical optimization, local SEO, reputation management, and ongoing performance improvements, we help businesses attract more qualified local customers and generate measurable growth.",
    primaryCta: "Get a Free Local SEO Audit",
    secondaryCta: "See Pricing",
    includes: [
      "Google Business Profile optimization",
      "Google Maps SEO improvements",
      "Local keyword targeting",
      "Business category optimization",
      "Citation & NAP management",
      "Review & reputation management",
      "Service area optimization",
      "Local landing page support",
      "Competitor analysis",
      "Ongoing performance optimization",
    ],
    offerings: [
      {
        title: "Google Business Profile Optimization",
        description:
          "We optimize every section of your profile—categories, services, photos, descriptions, attributes, and service areas—to improve relevance, engagement, and local search visibility.",
      },
      {
        title: "Google Business Profile Management",
        description:
          "Ongoing updates, post publishing, product and service maintenance, and continuous monitoring keep your listing accurate and competitive.",
      },
      {
        title: "Google Maps Optimization",
        description:
          "We strengthen the ranking signals that influence Maps and Local Pack visibility so nearby customers find you when they are ready to buy.",
      },
      {
        title: "Citation & NAP Consistency",
        description:
          "Accurate name, address, and phone data across directories reduces confusion for search engines and customers alike.",
      },
      {
        title: "Review & Reputation Management",
        description:
          "Structured review generation and response workflows improve trust signals and conversion rates from map listings.",
      },
      {
        title: "Local Landing Page Support",
        description:
          "Location and service pages reinforce map visibility with content that matches local search intent.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit & Opportunity Map",
        description:
          "We review your Google Business Profile, citations, reviews, and local competitors to quantify ranking gaps.",
      },
      {
        step: "02",
        title: "Profile Rebuild",
        description:
          "Categories, services, photos, and attributes are optimized for relevance and conversion.",
      },
      {
        step: "03",
        title: "Authority & Citations",
        description:
          "We clean NAP inconsistencies and build high-quality local citations in your service areas.",
      },
      {
        step: "04",
        title: "Ongoing Optimization",
        description:
          "Posts, reviews, Q&A, and ranking tracking keep momentum after the initial lift.",
      },
    ],
    faqs: [
      {
        q: "How long until map rankings improve?",
        a: "Most businesses see early movement within 30–60 days when foundational profile and citation issues are fixed. Competitive markets compound over three to six months.",
      },
      {
        q: "Do you manage reviews?",
        a: "Yes. We set up review request workflows, monitor new reviews, and help craft professional responses that strengthen trust.",
      },
    ],
  },
  {
    slug: "ppc-management",
    title: "PPC Management",
    shortTitle: "PPC",
    metaTitle: "PPC Management Services | Google Ads | iTitans Digital",
    metaDescription:
      "Increase qualified leads and maximize ROI with expert PPC management services. We manage Google Ads campaigns that deliver measurable business growth.",
    hero: "PPC Management Services Built to Maximize Every Advertising Dollar",
    summary:
      "We help businesses turn paid advertising into a predictable source of qualified leads and measurable revenue. Our PPC Management Services combine data-driven strategy, continuous optimization, and conversion-focused campaign management across Google Ads, Microsoft Ads, Shopping, Performance Max, and remarketing.",
    primaryCta: "Get a Free PPC Audit",
    secondaryCta: "Talk to a PPC Strategist",
    includes: [
      "Campaign strategy aligned to business goals",
      "High-intent keyword and audience targeting",
      "Continuous bid and creative optimization",
      "Accurate conversion tracking",
      "Negative keyword and waste reduction",
      "Landing page and funnel alignment",
      "Monthly performance reporting",
    ],
    offerings: [
      {
        title: "Google Ads Management",
        description:
          "Search, Performance Max, Shopping, and remarketing campaigns managed against profit targets rather than vanity clicks.",
      },
      {
        title: "Microsoft Ads",
        description:
          "Expanded reach on Bing and partner networks with shared learning from your Google account structure.",
      },
      {
        title: "Meta & LinkedIn Ads",
        description:
          "Audience research, creative testing, and retargeting funnels that support pipeline and ROAS goals.",
      },
      {
        title: "Account Restructures",
        description:
          "We rebuild wasteful accounts, tighten audience signals, and realign bidding around true cost per acquisition.",
      },
      {
        title: "Conversion Tracking",
        description:
          "GA4, platform pixels, and CRM integrations connect ad spend to leads and closed revenue.",
      },
      {
        title: "Creative & Copy Testing",
        description:
          "Ongoing A/B testing of ads, offers, and landing experiences to improve quality score and conversion rate.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Account & Funnel Audit",
        description:
          "We review spend efficiency, tracking gaps, and landing page friction before recommending changes.",
      },
      {
        step: "02",
        title: "Rebuild & Launch",
        description:
          "Campaign architecture, audiences, creatives, and conversion tracking are rebuilt for clarity.",
      },
      {
        step: "03",
        title: "Optimize Weekly",
        description:
          "Bids, negatives, creative winners, and budget allocation are refined against CPA and ROAS targets.",
      },
      {
        step: "04",
        title: "Scale What Works",
        description:
          "Winning campaigns expand into new keywords, audiences, and channels with controlled risk.",
      },
    ],
    faqs: [
      {
        q: "Are ad spend and management fees separate?",
        a: "Yes. Management fees start at $649/month or 12% of ad spend for Google Ads. You pay platforms directly for media spend.",
      },
      {
        q: "How quickly will paid media move?",
        a: "Most accounts show directional movement within 30 days once tracking and structure are corrected.",
      },
    ],
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    shortTitle: "Content",
    metaTitle: "Content Marketing Services | SEO Content | iTitans Digital",
    metaDescription:
      "Attract qualified buyers with SEO-driven content marketing. Strategy, writing, and optimization that connect search demand to measurable growth.",
    hero: "Content Marketing That Turns Search Demand Into Pipeline",
    summary:
      "Most businesses do not struggle because they publish too little—they struggle because they publish without a strategy. iTitans Digital combines SEO content marketing, search intent, audience research, and commercial insight to create content that attracts qualified buyers, builds topical authority, and supports measurable growth.",
    primaryCta: "Get Free Content Audit",
    secondaryCta: "Talk to a Content Strategist",
    includes: [
      "Search-demand-driven topic planning",
      "Buying-intent alignment across the funnel",
      "Topical authority and internal linking",
      "SEO blog and service page writing",
      "Content audits and gap analysis",
      "Distribution and content refresh",
    ],
    offerings: [
      {
        title: "Content Strategy Services",
        description:
          "Long-term roadmaps built around business goals, customer journey, competitive landscape, and search demand.",
      },
      {
        title: "Keyword & Search Intent Research",
        description:
          "Commercially valuable keywords organized into topical clusters that attract visitors more likely to convert.",
      },
      {
        title: "Content Audit & Gap Analysis",
        description:
          "We evaluate existing pages for keyword gaps, outdated information, and faster wins before writing new assets.",
      },
      {
        title: "SEO Blog Writing",
        description:
          "Research-backed articles written for people first and optimized for search—not keyword stuffing.",
      },
      {
        title: "Website & Service Page Content",
        description:
          "Homepage, service, landing, and location page copy that builds trust and guides action.",
      },
      {
        title: "Reporting & Content Refresh",
        description:
          "Rankings, traffic, and conversions monitored monthly with refreshes that protect long-term organic growth.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit & Opportunity Map",
        description:
          "We identify keyword gaps, underperforming pages, and content that can win faster with optimization.",
      },
      {
        step: "02",
        title: "Strategy & Clusters",
        description:
          "Topic clusters, editorial calendars, and intent mapping define what gets written and why.",
      },
      {
        step: "03",
        title: "Create & Optimize",
        description:
          "Writers and SEO specialists ship pages built for search visibility and conversion.",
      },
      {
        step: "04",
        title: "Distribute & Refresh",
        description:
          "Internal linking, promotion, and refreshes keep content earning after publish day.",
      },
    ],
    faqs: [
      {
        q: "How many pieces do you publish monthly?",
        a: "Our Content Marketing retainer starts at $899/month and typically includes six SEO-optimized pieces plus editorial planning and internal linking.",
      },
      {
        q: "Do you write for B2B buyers?",
        a: "Yes. We develop comparison pages, case studies, solution pages, and thought leadership for longer buying cycles.",
      },
    ],
  },
  {
    slug: "ai-chatbot",
    title: "AI Chatbot Integrations",
    shortTitle: "AI Chatbot",
    metaTitle: "AI Chatbot Integration Services | iTitans Digital",
    metaDescription:
      "Design, build, and integrate non-transactional AI chatbots that answer questions, qualify leads, and support customers around the clock.",
    hero: "AI Chatbot Integration Services That Support Customers and Capture Leads Around the Clock",
    summary:
      "We design, build, and integrate AI chatbots that answer customer questions, qualify leads, and provide instant support on your website—without asking anyone to wait on hold. Built for USA businesses that want faster response times, lower support costs, and more conversations that turn into customers. Focused on non-transactional chatbot integrations.",
    primaryCta: "Get My Free Chatbot Assessment",
    secondaryCta: "Talk to a Chatbot Strategist",
    includes: [
      "Built on real customer questions",
      "Connected to CRM, help desk & calendar",
      "Trained on your own content",
      "Human handoff when needed",
      "Full ownership of chatbot and data",
      "Multi-channel deployment options",
    ],
    offerings: [
      {
        title: "Chatbot Strategy & Use-Case Mapping",
        description:
          "We map the questions customers ask most and where an AI chatbot can take real work off your team's plate.",
      },
      {
        title: "Conversation & Dialogue Design",
        description:
          "Flows, tone, and response logic that sound like your brand—not a dead-end scripted menu.",
      },
      {
        title: "Website Chatbot Integration",
        description:
          "Embedded to match your site design so it feels native instead of bolted on.",
      },
      {
        title: "Knowledge Base Training",
        description:
          "Answers pull from your FAQs, policies, and product pages for accuracy you can trust.",
      },
      {
        title: "Lead Capture & Qualification",
        description:
          "Qualifying questions, contact capture, and real-time routing to sales so inquiries never sit unanswered.",
      },
      {
        title: "Human Handoff & Escalation",
        description:
          "Complex or sensitive conversations transfer to a live agent with full context attached.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description:
          "We audit customer questions, support volume, and tooling to define chatbot use cases.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "Conversation flows, escalation rules, and brand voice are documented before build.",
      },
      {
        step: "03",
        title: "Build & Integrate",
        description:
          "The chatbot is trained, embedded, and connected to CRM, help desk, and calendars.",
      },
      {
        step: "04",
        title: "Optimize",
        description:
          "Conversation analytics reveal drop-offs and unanswered questions for continuous improvement.",
      },
    ],
    faqs: [
      {
        q: "Are these transactional payment bots?",
        a: "No. We specialize in non-transactional chatbot integrations—support, FAQs, lead qualification, and appointment booking—not payment processing bots.",
      },
      {
        q: "Will we own the chatbot?",
        a: "Yes. Once approved, the chatbot, its content, and its data belong entirely to your business.",
      },
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    shortTitle: "SEO",
    metaTitle: "SEO Services | Search Engine Optimization | iTitans Digital",
    metaDescription:
      "Climb search rankings and convert organic traffic with technical SEO, content, and authority building—including AI search visibility.",
    hero: "Search Engine Optimization Built for Google and AI Discovery",
    summary:
      "Technical SEO, keyword strategy, on-page optimization, and off-page authority come together into one program built around how people search today—on Google and inside AI-powered results. We optimize for classic rankings and generative surfaces including AI Overviews, ChatGPT, and Perplexity.",
    primaryCta: "Get a Free SEO Audit",
    secondaryCta: "Talk to an SEO Strategist",
    includes: [
      "Real search-demand keyword targeting",
      "Technical health first",
      "On-page and content alignment",
      "White-hat authority building",
      "AI search / GEO optimization",
      "Reporting tied to traffic and revenue",
    ],
    offerings: [
      {
        title: "SEO Audits & Strategy",
        description:
          "Technical and competitive audits uncover crawl errors, content gaps, and keyword opportunities, then prioritize them into a roadmap.",
      },
      {
        title: "Keyword Research & Intent Mapping",
        description:
          "Commercial and informational keywords grouped by topic and intent so the right pages target the right queries.",
      },
      {
        title: "On-Page SEO & Content Optimization",
        description:
          "Titles, headers, internal links, and copy aligned with what searchers and search engines expect.",
      },
      {
        title: "Technical SEO",
        description:
          "Core Web Vitals, crawl efficiency, indexing, and structured data repaired so engines can reward your site.",
      },
      {
        title: "Off-Page SEO & Link Building",
        description:
          "Digital PR and high-authority placements without shortcuts that risk penalties.",
      },
      {
        title: "Analytics & Rank Tracking",
        description:
          "Plain-language monthly reporting connecting positions to organic traffic, leads, and closed business.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        description:
          "Technical, content, and competitive analysis establishes the baseline and fastest wins.",
      },
      {
        step: "02",
        title: "Strategy",
        description:
          "Keyword clusters, content priorities, and authority targets become a shared roadmap.",
      },
      {
        step: "03",
        title: "Execute",
        description:
          "Technical fixes, on-page work, content, and link acquisition ship in focused sprints.",
      },
      {
        step: "04",
        title: "Measure & Compound",
        description:
          "Rankings, traffic, and conversions guide the next cycle of optimization.",
      },
    ],
    faqs: [
      {
        q: "How long until SEO results show?",
        a: "SEO typically compounds over three to six months. Early technical and on-page wins can appear sooner.",
      },
      {
        q: "Do you optimize for AI search?",
        a: "Yes. Every SEO retainer includes visibility work for AI Overviews and assistant-generated answers alongside classic rankings.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortTitle: "Social",
    metaTitle: "Social Media Marketing Services | iTitans Digital",
    metaDescription:
      "Grow awareness, engagement, and leads with social media marketing that connects content, community, and paid amplification.",
    hero: "Social Media Marketing Built Around Measurable Growth",
    summary:
      "Posting consistently is not the same as marketing. iTitans Digital plans and runs social programs that combine platform strategy, original content, community management, and paid amplification to move people from casual scrollers to actual customers.",
    primaryCta: "Get a Free Social Media Audit",
    secondaryCta: "Talk to a Social Media Strategist",
    includes: [
      "Platform strategy from audience data",
      "Funnel-mapped content pillars",
      "Original creative—not templates",
      "Organic and paid working together",
      "Full ownership of accounts and assets",
      "Monthly reporting and optimization",
    ],
    offerings: [
      {
        title: "Social Media Strategy & Planning",
        description:
          "Platform-by-platform plans covering content pillars, cadence, channel priorities, and KPIs tied to leads and revenue.",
      },
      {
        title: "Content Creation & Design",
        description:
          "Original graphics, carousels, captions, and photography formatted natively for each platform.",
      },
      {
        title: "Short-Form Video Production",
        description:
          "Reels, TikToks, and Shorts scripted and edited to hold attention in the first three seconds.",
      },
      {
        title: "Community Management",
        description:
          "Comments, DMs, and mentions answered promptly and on-brand.",
      },
      {
        title: "Paid Social Advertising",
        description:
          "Meta, LinkedIn, and TikTok campaigns with precise targeting and continuous creative testing.",
      },
      {
        title: "Analytics & Optimization",
        description:
          "Monthly reporting on reach, engagement, growth, and conversions with ongoing format testing.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit & Research",
        description:
          "Existing accounts, competitors, and audience behavior reveal what to fix first.",
      },
      {
        step: "02",
        title: "Strategy",
        description:
          "Content pillars, calendar, and paid/organic mix are locked to business goals.",
      },
      {
        step: "03",
        title: "Create & Publish",
        description:
          "Creative production and community management run on a consistent cadence.",
      },
      {
        step: "04",
        title: "Amplify & Report",
        description:
          "Paid social scales winners while monthly reports show what moved pipeline.",
      },
    ],
    faqs: [
      {
        q: "What does the social retainer include?",
        a: "Starting at $799/month: three platforms, 16 posts, community management, a monthly content calendar, and a performance report.",
      },
      {
        q: "Do you handle paid social too?",
        a: "Yes. Meta and LinkedIn ads management starts at $749/month or 12% of ad spend.",
      },
    ],
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    shortTitle: "Local SEO",
    metaTitle: "Local SEO Services | Local SEO Agency | iTitans Digital",
    metaDescription:
      "Grow with expert Local SEO Services. Improve local rankings, attract qualified customers, and increase leads with proven strategies.",
    hero: "Local SEO Services That Help Your Business Get Found Where It Matters Most",
    summary:
      "When customers search for businesses like yours, showing up at the top of Google is how you win more business. Our Local SEO Services improve visibility across Google Search and Maps, attract high-intent local customers, and generate more calls, leads, and revenue through a strategy built around your goals—not generic checklists.",
    primaryCta: "Get a Free Local SEO Audit",
    secondaryCta: "Book a Strategy Call",
    includes: [
      "Local SEO strategy",
      "Google Business Profile optimization",
      "Local keyword research",
      "Website optimization",
      "Citation management",
      "Local content strategy",
      "Review management",
      "Technical SEO improvements",
      "Multi-location optimization",
      "Performance tracking",
    ],
    offerings: [
      {
        title: "Local SEO Strategy & Consulting",
        description:
          "Custom roadmaps from business, competitor, and search landscape analysis designed around measurable growth.",
      },
      {
        title: "Google Business Profile Optimization",
        description:
          "Categories, services, photos, attributes, and updates optimized for local relevance and engagement.",
      },
      {
        title: "Local Keyword Research",
        description:
          "Service-area and intent-focused keywords that match how nearby customers actually search.",
      },
      {
        title: "Citation Management",
        description:
          "Consistent NAP data across directories that reinforce local trust signals.",
      },
      {
        title: "Local Content Strategy",
        description:
          "Location and service pages that build relevance for the communities you serve.",
      },
      {
        title: "Multi-Location SEO",
        description:
          "Scalable frameworks for brands expanding across cities or managing dozens of locations.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Local Audit",
        description:
          "Maps, GBP, citations, on-page, and competitor gaps define the opportunity.",
      },
      {
        step: "02",
        title: "Foundation",
        description:
          "Profile, NAP, and technical fixes establish a clean local baseline.",
      },
      {
        step: "03",
        title: "Content & Authority",
        description:
          "Local pages, reviews, and citations compound visibility in your markets.",
      },
      {
        step: "04",
        title: "Track & Expand",
        description:
          "Ranking and lead reporting guide expansion into new service areas.",
      },
    ],
    faqs: [
      {
        q: "What does Local SEO pricing start at?",
        a: "Local SEO starts at $499/month for service businesses targeting one metro area, with Growth and National tiers available.",
      },
      {
        q: "Is Local SEO different from map optimization?",
        a: "Map optimization focuses heavily on Google Maps and GBP. Local SEO also covers website, citations, content, and broader local search visibility.",
      },
    ],
  },
  {
    slug: "website-design-development",
    title: "Website Design & Development",
    shortTitle: "Web Design",
    metaTitle: "Website Design & Development | iTitans Digital",
    metaDescription:
      "Custom website design and development built for speed, SEO, and conversions—WordPress, Shopify, and modern stacks.",
    hero: "Website Design & Development Built for Growth",
    summary:
      "We combine custom website design, modern development, SEO best practices, and conversion-focused UX to deliver websites that look professional and perform where it matters. Every project begins with understanding your business, customers, and objectives—then designers, developers, and SEO specialists work from the same plan.",
    primaryCta: "Get a Free Quote",
    secondaryCta: "View Pricing",
    includes: [
      "Business-focused website planning",
      "Custom UI/UX design",
      "Responsive development",
      "SEO-friendly architecture",
      "Mobile-first experience",
      "Conversion-focused layouts",
      "Core Web Vitals optimization",
      "CMS integration & scalability",
      "Security & performance",
      "Ongoing support",
    ],
    offerings: [
      {
        title: "Custom Website Design",
        description:
          "Fully customized sites that communicate your value, strengthen credibility, and guide visitors toward action.",
      },
      {
        title: "UI/UX Design & Wireframing",
        description:
          "User journeys and wireframes that improve navigation and reduce friction before development begins.",
      },
      {
        title: "WordPress Development",
        description:
          "Secure, high-performing WordPress builds your team can manage without calling a developer for every edit.",
      },
      {
        title: "Shopify & Ecommerce",
        description:
          "Stores engineered around checkout speed, product discovery, and conversion—not just theme cosmetics.",
      },
      {
        title: "Responsive & Performance",
        description:
          "Mobile-first builds tuned for Core Web Vitals, accessibility, and search performance.",
      },
      {
        title: "Analytics & Launch Support",
        description:
          "Clean analytics, conversion tracking, and post-launch support so the site earns from day one.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description:
          "Goals, audience, content readiness, and technical requirements shape the scope.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "Wireframes and UI designs validate the experience before engineering begins.",
      },
      {
        step: "03",
        title: "Build",
        description:
          "Development, CMS setup, SEO foundations, and tracking ship in clear milestones.",
      },
      {
        step: "04",
        title: "Launch & Support",
        description:
          "QA, launch, and 30 days of post-launch support keep performance stable.",
      },
    ],
    faqs: [
      {
        q: "What do website packages cost?",
        a: "Launch starts at $1,199, Growth at $2,499, and Scale from $4,999. Ecommerce and custom builds are quoted separately.",
      },
      {
        q: "Do we own the code?",
        a: "Always. Source code, design files, domains, and accounts stay in your name.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs() {
  return services.map((s) => s.slug);
}
