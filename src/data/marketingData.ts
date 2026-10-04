export interface MarketingService {
  id: string;
  slug: string;
  num: string;
  name: string;
  category: 'Performance Marketing' | 'SEO & Organic' | 'Creative & Brand' | 'Automation & CRO';
  shortDescription: string;
  fullDescription: string;
  startingPrice: number;
  priceUnit: string;
  timeline: string;
  icon: string;
  deliverables: string[];
  workflow: string[];
  recommendedTools: string[];
  faqs: { q: string; a: string }[];
}

export interface MarketingCampaign {
  id: string;
  title: string;
  clientIndustry: string;
  objective: string;
  image: string;
  tags: string[];
  metrics: {
    roas: string;
    ctr: string;
    cpc: string;
    growth: string;
  };
  challenge: string;
  strategy: string;
  outcome: string;
  sampleNotice: string;
}

export interface MarketingInsight {
  id: string;
  title: string;
  category: 'SEO' | 'Paid Ads' | 'Social' | 'AI' | 'CRO' | 'Strategy';
  readTime: string;
  author: string;
  date: string;
  excerpt: string;
  content: string[];
  image: string;
}

export interface MarketingTeamMember {
  id: string;
  name: string;
  role: string;
  experienceYears: number;
  specialty: string;
  image: string;
  bio: string;
}

export interface MarketingPackage {
  id: string;
  name: string;
  priceMonthly: number;
  tagline: string;
  isPopular?: boolean;
  features: string[];
  channelsIncluded: string;
  reportingFrequency: string;
  adSpendManaged: string;
}

export interface MarketingFaq {
  id: string;
  question: string;
  answer: string;
}

export interface ContentCalendarItem {
  id: string;
  day: string;
  platform: 'Instagram' | 'LinkedIn' | 'Blog' | 'Email' | 'Shorts';
  title: string;
  hook: string;
  format: string;
  targetAudience: string;
  callToAction: string;
}

export const MARKETING_BRAND_INFO = {
  name: "NEXUS GROWTH ATELIER",
  tagline: "Performance Marketing, Digital Strategy & AI Automation",
  phone: "+971 4 900 8820",
  whatsapp: "https://wa.me/971500000000?text=Hello%20Nexus%20Growth,%20I%20want%20to%20book%20a%20strategy%20call.",
  email: "growth@nexus-atelier.ae",
  address: "DIFC Gate Precinct 4, Level 5, Dubai, UAE",
  conceptNotice: "CONCEPT PROJECT — Premium AED 2,499 Package Marketing Agency Demo",
  sampleBuildBadge: "Sample Build #07",
};

export const MARKETING_SERVICES: MarketingService[] = [
  {
    id: "seo-growth",
    slug: "seo-growth",
    num: "01",
    name: "SEO & Organic Search Growth",
    category: "SEO & Organic",
    shortDescription: "High-intent keyword dominance, technical audits, on-page optimization, and authority link acquisition.",
    fullDescription: "Engineering organic search dominance across Google UAE & GCC markets. We optimize technical core web vitals, execute semantic content strategies, and secure authoritative backlink placements to capture high-converting commercial intent.",
    startingPrice: 799,
    priceUnit: "per month",
    timeline: "3–6 Month Growth Ramp",
    icon: "Search",
    deliverables: [
      "Technical Core Web Vitals & Crawl Audit",
      "Semantic Commercial Keyword Architecture",
      "Monthly On-Page & Schema Markup Optimization",
      "Authority Digital PR & Backlink Strategy",
      "Google Business Profile Local SEO Domination",
      "Real-Time GA4 & Search Console KPI Dashboard"
    ],
    workflow: [
      "Deep Technical & Competitor Gap Analysis",
      "Keyword Intent Mapping & Content Sprints",
      "On-Page Optimization & Schema Implementation",
      "Monthly Authority Link Building & Telemetry Review"
    ],
    recommendedTools: ["Ahrefs", "SEMrush", "Google Search Console", "Screaming Frog", "GA4"],
    faqs: [
      { q: "How long until we see SEO results in Dubai?", a: "Initial technical indexation fixes show momentum within 30-45 days, while major commercial keyword ranking gains typically mature within 3 to 6 months." },
      { q: "Do you optimize for Arabic search queries?", a: "Yes, we execute bilingual English & Arabic SEO strategies tailored for UAE and GCC consumer search patterns." }
    ]
  },
  {
    id: "google-ads-ppc",
    slug: "google-ads-ppc",
    num: "02",
    name: "Google Ads & PPC Campaigns",
    category: "Performance Marketing",
    shortDescription: "High-converting Search, Performance Max, Display, and Remarketing campaign architectures.",
    fullDescription: "Stop wasting ad spend on low-intent clicks. We build laser-focused Google Search and Performance Max campaigns targeting ready-to-buy consumers across Dubai and global export markets.",
    startingPrice: 599,
    priceUnit: "monthly management",
    timeline: "Instant Traffic (48 Hours)",
    icon: "Target",
    deliverables: [
      "Account Structure & Negative Keyword Silos",
      "High-Converting Ad Copy & Extension Suite",
      "Performance Max Asset Group Production",
      "Server-Side Conversion Tracking & Enhanced Conversions",
      "Bid Management & Automated Smart Bidding",
      "Weekly ROAS & Cost-Per-Acquisition Optimization"
    ],
    workflow: [
      "Audience Intent Research & Bidding Strategy",
      "Campaign Setup & Negative Keyword Siloing",
      "Conversion Tracking & GTM Calibration",
      "Daily Bid & ROAS Optimization"
    ],
    recommendedTools: ["Google Ads Editor", "Google Tag Manager", "GA4", "Optmyzr", "SpyFu"],
    faqs: [
      { q: "What monthly ad budget do you recommend?", a: "We recommend starting with a minimum media spend of AED 2,500/mo to ensure sufficient data volume for Google AI bidding algorithms." }
    ]
  },
  {
    id: "meta-ads-paid-social",
    slug: "meta-ads-paid-social",
    num: "03",
    name: "Meta Ads (Instagram & Facebook)",
    category: "Performance Marketing",
    shortDescription: "Scroll-stopping UGC video ads, dynamic product carousels, and high-ROAS Retargeting funnels.",
    fullDescription: "Captivate high-value audiences across Instagram and Facebook. We combine thumb-stopping motion creative with Conversions API (CAPI) tracking to scale lead generation and direct e-commerce sales.",
    startingPrice: 699,
    priceUnit: "monthly management",
    timeline: "Continuous Ad Scale",
    icon: "Share2",
    deliverables: [
      "Creative Ad Angles & Motion Graphic Scripts",
      "Custom Lookalike & Interest Audience Stacks",
      "Meta Conversions API (CAPI) Integration",
      "Full-Funnel Campaign Setup (Cold -> Consideration -> Retargeting)",
      "A/B Creative Split Testing Protocol",
      "Bi-Weekly ROAS Reporting & Creative Iteration"
    ],
    workflow: [
      "Creative Briefing & Asset Production",
      "Audience Layering & Campaign Setup",
      "Conversions API Telemetry Testing",
      "Scale High-Performing Ad Sets"
    ],
    recommendedTools: ["Meta Ads Manager", "Figma", "CapCut Pro", "Hyros", "Triple Whale"],
    faqs: [
      { q: "Do you handle ad creative production?", a: "Yes, our team scripts, edits, and designs high-converting video and static ad creative." }
    ]
  },
  {
    id: "social-media-growth",
    slug: "social-media-growth",
    num: "04",
    name: "Social Media Growth & Content",
    category: "Creative & Brand",
    shortDescription: "Editorial Instagram feeds, short-form Reels/TikToks, LinkedIn thought leadership, and community management.",
    fullDescription: "Transform social channels into brand equity assets. We plan, design, script, and publish premium grid aesthetic content, high-engagement Reels, and LinkedIn executive profiles.",
    startingPrice: 799,
    priceUnit: "per month",
    timeline: "Ongoing Brand Building",
    icon: "Megaphone",
    deliverables: [
      "Monthly Content Calendar & Visual Grid Aesthetics",
      "12–16 High-Quality Carousels & Motion Graphic Posts",
      "Short-Form Video Scripting & Editing (Reels/TikTok)",
      "Professional Copywriting & Localized Hashtag Stacks",
      "Active Community Moderation & DMs Response",
      "Monthly Engagement & Reach Analytics Report"
    ],
    workflow: [
      "Brand Voice & Aesthetic Alignment",
      "Monthly Content Batch Planning & Client Review",
      "Scheduling & Community Engagement",
      "Monthly Performance Strategy Audit"
    ],
    recommendedTools: ["Later", "Buffer", "Adobe Premiere", "Figma", "Sprout Social"],
    faqs: [
      { q: "How many posts per week are included?", a: "Our core growth package includes 3 to 4 premium feeds/reels per week." }
    ]
  },
  {
    id: "content-strategy-copy",
    slug: "content-strategy-copy",
    num: "05",
    name: "Content Strategy & Copywriting",
    category: "SEO & Organic",
    shortDescription: "Authority blog articles, whitepapers, landing page copy, and brand storytelling.",
    fullDescription: "Words that inform, inspire, and convert. We write strategic long-form articles, conversion-focused landing page copy, and executive thought leadership pieces.",
    startingPrice: 499,
    priceUnit: "per campaign sprint",
    timeline: "Weekly Deliverables",
    icon: "Compass",
    deliverables: [
      "Topic Clustering & Keyword Alignment Plan",
      "4 High-Intent SEO Articles (1,200+ words each)",
      "Landing Page Sales Copywriting",
      "Lead Magnet PDF / E-Book Production",
      "Tone of Voice & Brand Messaging Guide"
    ],
    workflow: [
      "Subject Matter Research & Outline Approval",
      "Draft Copywriting & Internal Fact-Check",
      "Client Feedback & Polishing",
      "Publishing & Technical SEO Formatting"
    ],
    recommendedTools: ["SurferSEO", "Grammarly", "Notion", "Clearscope", "Jasper"],
    faqs: [
      { q: "Are articles optimized for search engines?", a: "Yes, every article is built around NLP keyword entity maps and SurferSEO scoring." }
    ]
  },
  {
    id: "email-marketing-automation",
    slug: "email-marketing-automation",
    num: "06",
    name: "Email Marketing & Klaviyo Flows",
    category: "Automation & CRO",
    shortDescription: "Automated welcome series, abandoned cart recovery, VIP loyalty flows, and weekly newsletters.",
    fullDescription: "Maximize customer lifetime value with automated lifecycle email marketing. We build high-converting email flows and broadcast campaigns in Klaviyo and HubSpot.",
    startingPrice: 399,
    priceUnit: "per month",
    timeline: "Setup + Monthly Broadcasts",
    icon: "Send",
    deliverables: [
      "Klaviyo / Mailchimp Account Architecture",
      "5 Core Automated Flows (Welcome, Cart, Post-Purchase, Re-Engagement)",
      "Custom HTML Brand Email Templates",
      "Weekly Segmented Broadcast Campaigns",
      "Deliverability & SPF/DKIM Authentication",
      "Revenue Attribution Telemetry Reporting"
    ],
    workflow: [
      "Flow Strategy & Mapping",
      "Copywriting & Responsive Design",
      "Trigger Testing & Segment Setup",
      "Monthly Revenue Performance Review"
    ],
    recommendedTools: ["Klaviyo", "HubSpot", "Mailchimp", "Figma", "Litmus"],
    faqs: [
      { q: "What return on investment can email marketing generate?", a: "E-commerce brands often see email account for 20% to 30% of total monthly revenue." }
    ]
  },
  {
    id: "cro-landing-pages",
    slug: "cro-landing-pages",
    num: "07",
    name: "Conversion Rate Optimization (CRO)",
    category: "Automation & CRO",
    shortDescription: "Heatmap analysis, A/B landing page testing, UX friction removal, and checkout speed optimization.",
    fullDescription: "Double your sales from existing traffic. We run Hotjar heatmap studies, conduct UX usability audits, and deploy high-converting A/B landing pages.",
    startingPrice: 599,
    priceUnit: "per audit / test sprint",
    timeline: "30-Day Testing Sprints",
    icon: "TrendingUp",
    deliverables: [
      "Hotjar Heatmap & Session Recording Analysis",
      "UX Usability & Checkout Friction Audit",
      "High-Converting Unbounce / VWO Landing Page Build",
      "A/B Split Test Execution & Statistical Analysis",
      "Mobile Speed & Checkout Micro-Interactions",
      "Conversion Rate Uplift Report"
    ],
    workflow: [
      "Qualitative & Quantitative User Research",
      "Hypothesis Creation & Prototype Design",
      "A/B Test Deployment & Traffic Splitting",
      "Winner Implementation & Next Sprint Planning"
    ],
    recommendedTools: ["Hotjar", "VWO", "Unbounce", "Google Optimize", "Figma"],
    faqs: [
      { q: "Do you redesign existing websites for CRO?", a: "We build dedicated landing pages and optimize existing templates without breaking live code." }
    ]
  },
  {
    id: "branding-creative-system",
    slug: "branding-creative-system",
    num: "08",
    name: "Branding & Creative Identity",
    category: "Creative & Brand",
    shortDescription: "Luxury logo systems, brand guidelines, typography standards, and digital visual identity.",
    fullDescription: "Craft an unmistakable brand presence. We design visual identity systems, typography rules, color tokens, and collateral templates that resonate with discerning UAE consumers.",
    startingPrice: 899,
    priceUnit: "one-time project",
    timeline: "2–3 Weeks Delivery",
    icon: "Crown",
    deliverables: [
      "Primary & Secondary Logo Architecture",
      "Brand Identity Guidelines PDF Book",
      "Color Palette Tokens & Typography Hierarchy",
      "Social Media Templates & Stationery Assets",
      "Iconography & Pattern System",
      "Brand Voice & Tagline Playbook"
    ],
    workflow: [
      "Discovery Workshop & Moodboard Concept",
      "Logo & Typography Exploration",
      "Asset Refinement & Guidelines Documentation",
      "Final Vector & Web Delivery Package"
    ],
    recommendedTools: ["Illustrator", "Figma", "Photoshop", "InDesign"],
    faqs: [
      { q: "What vector formats will we receive?", a: "Full commercial ownership with SVG, EPS, PNG, PDF, and Figma design tokens." }
    ]
  },
  {
    id: "web-design-dev",
    slug: "web-design-dev",
    num: "09",
    name: "Web Design & Performance Dev",
    category: "Creative & Brand",
    shortDescription: "Ultra-fast Next.js, React, and Tailwind websites engineered for lead conversion and 95+ Lighthouse speed.",
    fullDescription: "State-of-the-art agency web applications built with Next.js, React, and Framer Motion. Exceptional UI aesthetic, responsive mobile navigation, and seamless API integrations.",
    startingPrice: 1499,
    priceUnit: "one-time project",
    timeline: "2–4 Weeks Delivery",
    icon: "Activity",
    deliverables: [
      "Custom Next.js App Router Architecture",
      "Responsive Glassmorphism & Framer Motion Animations",
      "SEO Metadata & OpenGraph Social Sharing",
      "WhatsApp & Direct Lead Form Integration",
      "95+ Google Lighthouse Speed Score Guarantee",
      "Vercel Edge Hosting & Security Setup"
    ],
    workflow: [
      "Wireframing & UI Prototype Design",
      "Frontend Next.js & Tailwind Implementation",
      "Performance & Cross-Browser QA Testing",
      "Deployment & Domain Launch"
    ],
    recommendedTools: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    faqs: [
      { q: "Is the site mobile-friendly?", a: "Fully optimized for all viewports from 320px mobile screens to 4K desktop displays." }
    ]
  },
  {
    id: "ai-marketing-automation",
    slug: "ai-marketing-automation",
    num: "10",
    name: "AI Marketing Automation & Bots",
    category: "Automation & CRO",
    shortDescription: "Custom AI chat agents, lead scoring bots, auto-CRM syncing, and WhatsApp automated funnels.",
    fullDescription: "Streamline customer acquisition with autonomous AI agents. We train custom OpenAI RAG bots, deploy 24/7 WhatsApp auto-responders, and automate CRM lead distribution.",
    startingPrice: 799,
    priceUnit: "per month",
    timeline: "1–2 Weeks Setup",
    icon: "Bot",
    deliverables: [
      "Custom Trained OpenAI Assistant Agent",
      "24/7 WhatsApp Automated Lead Qualification Bot",
      "HubSpot / Salesforce Auto-Lead Syncing (Make/Zapier)",
      "Instant Quote Calculator Widget Build",
      "Multi-Language Customer Support Fallback",
      "Monthly Bot Accuracy & Lead Quality Analytics"
    ],
    workflow: [
      "Knowledge Base Ingestion & Bot Training",
      "Workflow & API Integration Setup",
      "Live Testing & Edge Case Tuning",
      "Deployment & Continuous Model Optimization"
    ],
    recommendedTools: ["OpenAI API", "Make.com", "Zapier", "Twilio WhatsApp", "Pinecone"],
    faqs: [
      { q: "Can the AI bot answer questions in Arabic?", a: "Yes, our AI agents seamlessly handle multi-lingual conversations in English, Arabic, and 20+ languages." }
    ]
  }
];

export const MARKETING_CAMPAIGNS: MarketingCampaign[] = [
  {
    id: "camp-real-estate",
    title: "Luxury Waterfront Real Estate Lead Engine",
    clientIndustry: "Real Estate Development",
    objective: "Qualified Villa Inquiry Generation",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
    tags: ["Google Ads", "Meta CAPI", "Landing Page CRO", "WhatsApp Bot"],
    metrics: {
      roas: "4.8x ROAS",
      ctr: "4.2% CTR",
      cpc: "AED 3.80",
      growth: "+240% Qualified Inquiries"
    },
    challenge: "High cost-per-lead and low lead qualification rate from generic social media forms.",
    strategy: "Deployed targeted Google Search keywords alongside an interactive property matcher landing page connected to WhatsApp instant qualification.",
    outcome: "Generated 380+ verified high-net-worth investor inquiries at 42% lower cost per lead.",
    sampleNotice: "Concept Campaign — Sample Build #07"
  },
  {
    id: "camp-restaurant",
    title: "DIFC Fine Dining Sunset Lounge Launch",
    clientIndustry: "Hospitality & Dining",
    objective: "Table Reservation & Private Dining Scaling",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    tags: ["Instagram Reels", "Influencer PR", "Google Local SEO"],
    metrics: {
      roas: "5.4x ROAS",
      ctr: "5.1% CTR",
      cpc: "AED 1.90",
      growth: "94% Table Occupancy"
    },
    challenge: "New restaurant launch in competitive DIFC district requiring rapid brand exposure.",
    strategy: "Cinematic short-form video ads showcasing signature dishes combined with Google Maps local SEO dominance.",
    outcome: "Achieved full weekend reservation coverage within 3 weeks of campaign launch.",
    sampleNotice: "Concept Campaign — Sample Build #07"
  },
  {
    id: "camp-ecommerce",
    title: "Luxury Perfume & Oud E-Commerce Scaling",
    clientIndustry: "E-Commerce / Beauty",
    objective: "Direct GCC Online Store Revenue",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    tags: ["Meta Catalog Ads", "Klaviyo Email", "Shopify CRO"],
    metrics: {
      roas: "6.2x ROAS",
      ctr: "3.9% CTR",
      cpc: "AED 1.45",
      growth: "+310% Online Revenue"
    },
    challenge: "Low customer repeat purchase rate and cart abandonment across UAE & KSA online shoppers.",
    strategy: "Implemented Klaviyo abandoned cart flows, UGC Instagram video ads, and sub-second Shopify checkout optimization.",
    outcome: "Scaled monthly store revenue by 3.1x while improving email contribution to 28% of sales.",
    sampleNotice: "Concept Campaign — Sample Build #07"
  },
  {
    id: "camp-salon",
    title: "Jumeirah Luxury Hair & Aesthetic Studio",
    clientIndustry: "Beauty & Wellness",
    objective: "Recurring VIP Membership Acquisition",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200&auto=format&fit=crop",
    tags: ["Meta Ads", "Smart Matcher Wizard", "Local SEO"],
    metrics: {
      roas: "4.1x ROAS",
      ctr: "3.5% CTR",
      cpc: "AED 2.10",
      growth: "+180% New Bookings"
    },
    challenge: "High reliance on walk-in clients with minimal advance booking predictability.",
    strategy: "Launched an interactive 'Smart Hair Consultation' wizard ad funnel offering instant treatment matching.",
    outcome: "Filled 85% of weekday stylist appointment slots with pre-booked clients.",
    sampleNotice: "Concept Campaign — Sample Build #07"
  },
  {
    id: "camp-saas",
    title: "B2B Logistics SaaS Platform Acceleration",
    clientIndustry: "Software & Technology",
    objective: "Enterprise Demo Bookings",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    tags: ["LinkedIn Ads", "SEO Content", "HubSpot Automation"],
    metrics: {
      roas: "3.9x ROAS",
      ctr: "2.8% CTR",
      cpc: "AED 12.50",
      growth: "+160% Qualified Demos"
    },
    challenge: "Long 90-day sales cycle for supply chain software in Middle East region.",
    strategy: "Targeted LinkedIn Sponsored Content to Supply Chain VPs paired with automated email nurture drips.",
    outcome: "Secured 45 enterprise demo requests in 60 days with a 22% close rate.",
    sampleNotice: "Concept Campaign — Sample Build #07"
  },
  {
    id: "camp-home-services",
    title: "Villa Home Maintenance Emergency Funnel",
    clientIndustry: "Home Maintenance",
    objective: "24/7 AC Repair & Contract Subscriptions",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
    tags: ["Google Search Ads", "WhatsApp Dispatch", "Instant Calculator"],
    metrics: {
      roas: "5.8x ROAS",
      ctr: "6.4% CTR",
      cpc: "AED 2.80",
      growth: "+290% Callouts"
    },
    challenge: "Summer AC emergency calls going unanswered during peak heat months.",
    strategy: "High-intent Google Search campaigns triggering direct 24/7 WhatsApp dispatch wizard.",
    outcome: "Generated over 520 emergency service bookings during peak summer period.",
    sampleNotice: "Concept Campaign — Sample Build #07"
  }
];

export const MARKETING_INSIGHTS: MarketingInsight[] = [
  {
    id: "insight-1",
    title: "How to Scale Meta Ads ROAS in the UAE & GCC Market",
    category: "Paid Ads",
    readTime: "5 min read",
    author: "Zayd Al-Mansoor",
    date: "Aug 2026",
    excerpt: "Why traditional broad targeting fails in Dubai and how Conversions API + UGC motion assets drive lower customer acquisition costs.",
    content: [
      "In the competitive GCC digital landscape, reliance on basic interest targeting yields diminishing returns. Consumer behavior in Dubai and Abu Dhabi demands authentic, localized video content combined with technical Conversions API telemetry.",
      "By feeding server-side conversion data directly back into Meta AI bidding models, brands reduce acquisition costs by an average of 34% while maintaining high average order values."
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "insight-2",
    title: "Google Search vs Performance Max: Allocating Ad Spend in 2026",
    category: "Paid Ads",
    readTime: "6 min read",
    author: "Elena Rostova",
    date: "Aug 2026",
    excerpt: "A tactical guide to siloing high-intent search keywords while leveraging Performance Max for visual retargeting.",
    content: [
      "Performance Max offers massive reach, but without strict brand exclusion rules and negative keyword silos, it frequently cannibalizes branded search traffic.",
      "We recommend maintaining dedicated Search campaigns for high-intent commercial keywords while deploying Performance Max exclusively with high-quality video and lifestyle imagery."
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "insight-3",
    title: "The 95+ Lighthouse Advantage: Why Speed Equals Conversion Rate",
    category: "CRO",
    readTime: "4 min read",
    author: "Marcus Vance",
    date: "Jul 2026",
    excerpt: "Every 100ms latency delay drops mobile conversion rates by 7%. How Next.js App Router restores lost revenue.",
    content: [
      "Heavy WordPress templates with unoptimized plugins slow mobile page loads to 4+ seconds over 4G connections. UAE mobile shoppers bounce instantly.",
      "Migrating to headless Next.js architecture drops page load times below 800ms, yielding immediate 20% to 35% lifts in checkout conversion rates."
    ],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "insight-4",
    title: "AI Chatbots & WhatsApp Automation for High-Ticket Lead Gen",
    category: "AI",
    readTime: "7 min read",
    author: "Tariq Rahim",
    date: "Jul 2026",
    excerpt: "How automated OpenAI qualification bots turn casual web visitors into scheduled sales calls in under 60 seconds.",
    content: [
      "Lead decay occurs exponentially within 5 minutes of form submission. By embedding intelligent WhatsApp AI qualification bots, inquiries receive immediate personalized responses 24/7.",
      "This immediate responsiveness increases appointment attendance rates from 45% to over 82% across high-ticket real estate and B2B services."
    ],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "insight-5",
    title: "Bilingual SEO Strategy: Ranking for English & Arabic Commercial Queries",
    category: "SEO",
    readTime: "5 min read",
    author: "Zayd Al-Mansoor",
    date: "Jun 2026",
    excerpt: "Navigating hreflang tags, Arabic NLP keyword nuances, and localized schema structures for UAE Google rankings.",
    content: [
      "Direct translation of English keywords into Arabic rarely reflects real GCC search behavior. Arabic searchers use distinct colloquial terminology for services.",
      "Implementing native Arabic semantic copywriting alongside correct hreflang technical setup opens up untapped search volume with lower competition."
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "insight-6",
    title: "Building a High-ROI Content Engine for B2B Thought Leadership",
    category: "Strategy",
    readTime: "6 min read",
    author: "Elena Rostova",
    date: "Jun 2026",
    excerpt: "How to repurpose one executive interview into 12 LinkedIn posts, 2 YouTube shorts, and an SEO-focused article.",
    content: [
      "Busy executives don't have time to write daily posts. Our 'One-to-Many' content extraction model captures 30 minutes of monthly audio/video and transforms it into a full month of omni-channel authority content.",
      "This consistency builds strong brand recall among corporate decision-makers."
    ],
    image: "https://images.unsplash.com/photo-1542744094-3a3172720177?q=80&w=800&auto=format&fit=crop"
  }
];

export const MARKETING_TEAM: MarketingTeamMember[] = [
  {
    id: "team-1",
    name: "Zayd Al-Mansoor",
    role: "Managing Director & Growth Strategist",
    experienceYears: 12,
    specialty: "Omnichannel Acquisition, Brand Positioning & Unit Economics",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    bio: "Former performance lead managing AED 15M+ annual ad budgets across UAE real estate, luxury retail, and tech startups."
  },
  {
    id: "team-2",
    name: "Elena Rostova",
    role: "Head of Performance Marketing (PPC & Meta)",
    experienceYears: 9,
    specialty: "Google Search, Meta CAPI Telemetry & Scale Mechanics",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    bio: "PPC specialist certified in Google Ads and Meta Conversions API. Focused strictly on return-on-ad-spend (ROAS) and CPA reduction."
  },
  {
    id: "team-3",
    name: "Marcus Vance",
    role: "Director of Digital Creative & Web UX",
    experienceYears: 10,
    specialty: "Next.js UI Design, Framer Motion & Conversion Systems",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    bio: "Award-winning designer obsessed with sub-second page speeds, editorial typography, and high-converting landing page layouts."
  },
  {
    id: "team-4",
    name: "Tariq Rahim",
    role: "AI Marketing & Automation Lead",
    experienceYears: 8,
    specialty: "OpenAI RAG Agents, Zapier/Make Pipelines & WhatsApp Bots",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    bio: "Pioneer in training LLM agents for automated lead qualification, CRM synchronization, and multi-language customer funnels."
  }
];

export const MARKETING_PACKAGES: MarketingPackage[] = [
  {
    id: "pkg-starter",
    name: "Starter Package",
    priceMonthly: 799,
    tagline: "Essential growth foundation for small UAE businesses needing core SEO & social presence.",
    features: [
      "Core SEO Technical Audit & On-Page Optimization",
      "Google Business Profile & Local Map Pack Management",
      "Social Media Content (2 Feed Posts / week)",
      "Basic Google Ads or Meta Ads Campaign Setup",
      "Monthly Growth Telemetry & KPI Report",
      "WhatsApp Strategy Support"
    ],
    channelsIncluded: "SEO + 1 Ad Channel",
    reportingFrequency: "Monthly Report",
    adSpendManaged: "Up to AED 3,000/mo spend"
  },
  {
    id: "pkg-growth",
    name: "Growth Package",
    priceMonthly: 1499,
    tagline: "Our most popular multi-channel engine for scaling leads, sales, and online market share.",
    isPopular: true,
    features: [
      "Advanced Bilingual SEO & Content Sprints (2 Articles / mo)",
      "Multi-Channel Paid Ads (Google Search + Instagram/FB Meta Ads)",
      "Social Media Management (4 Posts / week + Reels)",
      "Klaviyo / Email Marketing Automation Setup (2 Flows)",
      "Custom High-Converting Landing Page Build",
      "Weekly ROAS & CPA Optimization Sprint",
      "Priority WhatsApp & Slack Support"
    ],
    channelsIncluded: "SEO + Google Ads + Meta Ads + Email",
    reportingFrequency: "Bi-Weekly Review + Live Dashboard",
    adSpendManaged: "Up to AED 10,000/mo spend"
  },
  {
    id: "pkg-scale",
    name: "Scale Package",
    priceMonthly: 2499,
    tagline: "Full-service digital growth consultancy & AI marketing automation for ambitious brands.",
    features: [
      "Aggressive Commercial SEO & Authority Link Building",
      "Full Performance Marketing Suite (Google, Meta, TikTok, LinkedIn)",
      "Daily Ad Optimization & A/B Creative Testing",
      "Custom AI Lead Qualification & WhatsApp Chatbot Setup",
      "Complete Klaviyo Lifecycle Email & SMS Automation Engine",
      "Next.js High-Performance Landing Page Architecture",
      "Dedicated Senior Growth Director Assigned",
      "Weekly Strategy Calls & 24/7 Dedicated Concierge"
    ],
    channelsIncluded: "Omnichannel All-Inclusive",
    reportingFrequency: "Weekly Call + Real-Time Custom Dashboard",
    adSpendManaged: "Unlimited Media Spend"
  }
];

export const MARKETING_FAQS: MarketingFaq[] = [
  {
    id: "faq-1",
    question: "How much does digital marketing cost with your agency?",
    answer: "Our structured agency plans start at AED 799/month for Starter growth, AED 1,499/month for full multi-channel Growth, and AED 2,499/month for enterprise Scale & AI automation. Media spend (Google/Meta ad budget) is paid directly to platforms."
  },
  {
    id: "faq-2",
    question: "How long does SEO take to produce measurable leads in Dubai?",
    answer: "Technical Core Web Vital fixes and Google Maps local SEO produce immediate rank movement within 30 days. Commercial high-intent keyword rankings mature steadily over 3 to 6 months."
  },
  {
    id: "faq-3",
    question: "Do you handle creative video production and ad copywriting?",
    answer: "Yes. Our team handles complete end-to-end creative scripting, graphic design, motion editing, and localized English/Arabic copywriting."
  },
  {
    id: "faq-4",
    question: "Can you manage both Google Ads and Meta Ads simultaneously?",
    answer: "Yes, our Growth and Scale packages specialize in multi-channel attribution, capturing high-intent searchers on Google while driving visual demand on Instagram and Facebook."
  },
  {
    id: "faq-5",
    question: "How do you track and report campaign return on ad spend (ROAS)?",
    answer: "We set up server-side Conversions API (CAPI) and GA4 telemetry dashboards so you see exact leads, cost-per-acquisition (CPA), and attributed revenue in real time."
  },
  {
    id: "faq-6",
    question: "Do you offer contract-free or flexible monthly retainers?",
    answer: "Yes, our retainer models operate on transparent monthly terms with zero long-term lock-ins, because our performance retains clients naturally."
  },
  {
    id: "faq-7",
    question: "What is AI Marketing Automation and how does it help my business?",
    answer: "AI marketing automation connects OpenAI agents to your website and WhatsApp to qualify incoming inquiries instantly, answer FAQs in 20+ languages, and schedule appointments without human delays."
  },
  {
    id: "faq-8",
    question: "Can you design custom landing pages for ad campaigns?",
    answer: "Yes, we build sub-second Next.js and Tailwind landing pages engineered specifically for high conversion rates and 95+ Google Lighthouse speed scores."
  },
  {
    id: "faq-9",
    question: "Do you provide services in both English and Arabic?",
    answer: "Yes, all campaign assets, copywriting, SEO keywords, and ad creatives are produced natively in both English and Arabic."
  },
  {
    id: "faq-10",
    question: "How quickly can a new ad campaign be launched?",
    answer: "Once onboarding assets and strategy alignment are complete, new Google & Meta campaigns launch within 48 to 72 hours."
  }
];

export const CONTENT_CALENDAR_SAMPLES: ContentCalendarItem[] = [
  {
    id: "content-1",
    day: "Monday",
    platform: "Instagram",
    title: "Behind-the-Scenes: 95+ Speed Score Breakdown",
    hook: "Why 80% of Dubai Shopify stores lose 30% of sales to 3-second load delays.",
    format: "Carousel (5 Slides) + Audio",
    targetAudience: "E-Commerce Founders & Marketers",
    callToAction: "Comment SPEED to get our free performance checklist."
  },
  {
    id: "content-2",
    day: "Tuesday",
    platform: "LinkedIn",
    title: "Unit Economics of UAE Performance Marketing in 2026",
    hook: "Stop scaling ad spend before your CAPI telemetry is verified.",
    format: "Thought Leadership Article + Graphic",
    targetAudience: "CMOs, VPs & Real Estate Developers",
    callToAction: "Read full analysis link in bio."
  },
  {
    id: "content-3",
    day: "Wednesday",
    platform: "Shorts",
    title: "3 Google Ads Negative Keyword Mistakes Costing You AED 1,000s",
    hook: "Check your match types before turning on Performance Max!",
    format: "30-Sec Talking Head + Motion Captions",
    targetAudience: "Small Business Owners & Media Buyers",
    callToAction: "Save this reel for your next campaign setup."
  },
  {
    id: "content-4",
    day: "Thursday",
    platform: "Email",
    title: "The 60-Second AI Audit Method for High-Ticket Services",
    hook: "Is your website leaking leads to competitors?",
    format: "Segmented Klaviyo HTML Broadcast",
    targetAudience: "Email Newsletter Subscribers",
    callToAction: "Click to run your instant growth audit."
  },
  {
    id: "content-5",
    day: "Friday",
    platform: "Blog",
    title: "Bilingual SEO Blueprint: Ranking #1 in Dubai Google Search",
    hook: "Step-by-step guide to hreflang, Arabic NLP entities & schema.",
    format: "1,500-Word In-Depth Guide",
    targetAudience: "Organic Search Managers & Founders",
    callToAction: "Download our PDF SEO cheat sheet."
  }
];

export const DEMO_ANALYTICS_DATA = {
  monthlyTraffic: "148,500",
  monthlyLeads: "2,420",
  avgConversionRate: "3.85%",
  avgRoas: "4.8x",
  cpcAvg: "AED 1.85",
  organicGrowth: "+185%",
};
