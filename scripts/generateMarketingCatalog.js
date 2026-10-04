// scripts/generateMarketingCatalog.js
const fs = require('fs');
const path = require('path');

const DISCIPLINES = [
  {
    id: 'performance-ppc',
    name: 'Performance PPC & Omnichannel Media',
    categoryName: 'Performance PPC & Omnichannel Media',
    deliverableType: 'Paid Media Sprint & Retainer',
    startingPriceAED: 8500,
    minRoas: '4.5x - 8.2x',
    platforms: ['Google Search & PMax', 'Meta Ads', 'TikTok UAE', 'Snapchat GCC', 'LinkedIn Ads', 'Programmatic DSP']
  },
  {
    id: 'bilingual-seo',
    name: 'Enterprise Bilingual SEO & GCC Authority',
    categoryName: 'Enterprise Bilingual SEO & GCC Authority',
    deliverableType: 'SEO Architecture & PR Matrix',
    startingPriceAED: 7500,
    minRoas: '6.0x - 12.0x',
    platforms: ['Ahrefs Enterprise', 'SEMrush GCC', 'Google Search Console', 'Screaming Frog', 'Clearscope AI']
  },
  {
    id: 'cro-funnel',
    name: 'Conversion Rate Optimization (CRO) & Funnels',
    categoryName: 'Conversion Rate Optimization (CRO) & Funnels',
    deliverableType: 'CRO Audit & Neuro-Funnel',
    startingPriceAED: 6500,
    minRoas: '3.8x - 7.5x',
    platforms: ['Hotjar Heatmaps', 'VWO Enterprise', 'Google Optimize Pro', 'Unbounce Elite', 'Figma UX Engine']
  },
  {
    id: 'luxury-influencer',
    name: 'GCC Influencer Matrix & Luxury Social',
    categoryName: 'GCC Influencer Matrix & Luxury Social',
    deliverableType: 'Influencer Campaign & Management',
    startingPriceAED: 12000,
    minRoas: '5.0x - 10.5x',
    platforms: ['Grin Influencer OS', 'Upfluence GCC', 'Instagram Creator Pro', 'TikTok Creator Hub', 'CapCut Pro']
  },
  {
    id: 'crm-automation',
    name: 'WhatsApp Enterprise & CRM Automation',
    categoryName: 'WhatsApp Enterprise & CRM Automation',
    deliverableType: 'Automation Architecture',
    startingPriceAED: 5500,
    minRoas: '7.0x - 15.0x',
    platforms: ['HubSpot Enterprise', 'Salesforce Marketing Cloud', 'Klaviyo Elite', 'WhatsApp Cloud API', 'Make.com']
  },
  {
    id: 'creative-video-production',
    name: 'Cinematic 4K Commercials & 3D CGI Ads',
    categoryName: 'Cinematic 4K Commercials & 3D CGI Ads',
    deliverableType: 'Creative Production & Asset Suite',
    startingPriceAED: 15000,
    minRoas: '4.0x - 9.0x',
    platforms: ['RED Cinema 8K', 'DaVinci Resolve Studio', 'Blender 3D CGI', 'Adobe After Effects', 'DJI Inspire 3 Drone']
  },
  {
    id: 'ai-growth-intelligence',
    name: 'Custom AI Lead Scoring & Predictive Attribution',
    categoryName: 'Custom AI Lead Scoring & Predictive Attribution',
    deliverableType: 'AI Model & Analytics Pipeline',
    startingPriceAED: 11000,
    minRoas: '5.5x - 11.0x',
    platforms: ['OpenAI GPT-4o Enterprise', 'BigQuery ML', 'Looker Studio Pro', 'Segment CDP', 'Python PyTorch']
  },
  {
    id: 'brand-identity-launch',
    name: 'Corporate Brand Identity & UAE Market Launch',
    categoryName: 'Corporate Brand Identity & UAE Market Launch',
    deliverableType: 'Full Brand System & Collateral',
    startingPriceAED: 18000,
    minRoas: 'Brand Equity & Tier-1 Authority',
    platforms: ['Figma Design System', 'Adobe Illustrator Pro', 'Brandpad Guidelines', 'Cinema 4D Brand World']
  }
];

const INDUSTRIES = [
  'Dubai Luxury Real Estate & Off-Plan',
  'Private Wealth & DIFC Fintech',
  'Supercar Rental & Automotive Groups',
  'Haute Horlogerie & High Jewelry',
  'Luxury Hospitality & Fine Dining',
  'Bespoke Aesthetic Clinics & Wellness',
  'E-Commerce & High-Ticket Fashion',
  'Aviation & Private Jet Charters'
];

const IMAGES = [
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80'
];

const catalog = [];
let idCounter = 1;

DISCIPLINES.forEach((disc) => {
  for (let i = 1; i <= 20; i++) {
    const paddedId = String(idCounter).padStart(3, '0');
    const id = `NX-${paddedId}`;
    const industry = INDUSTRIES[(idCounter + i) % INDUSTRIES.length];
    const imgIndex = (idCounter + i) % IMAGES.length;

    const baseTitle = `${disc.name} — Phase ${i}`;
    let customTitle = '';
    
    if (disc.id === 'performance-ppc') {
      const types = [
        'Ultra-Targeted Google Search & High-Intent PMax Blitz',
        'Meta Ads Hyper-Segmented Dynamic Retargeting Architecture',
        'TikTok GCC High-Conversion Spark & In-Feed Funnel',
        'Snapchat UAE AR Lens & Story Conversion Engine',
        'LinkedIn Enterprise Account-Based Marketing (ABM) Suite',
        'Programmatic Connected TV & Luxury Display Network'
      ];
      customTitle = `${types[i % types.length]} for ${industry}`;
    } else if (disc.id === 'bilingual-seo') {
      const types = [
        'Arabic & English Top-1 Google Dominance Engine',
        'Dubai & Abu Dhabi High-Intent Local Maps Matrix',
        'Enterprise Technical Core Web Vitals Optimization',
        'GCC Tier-1 High-Authority Media PR & Editorial Backlinks',
        'Voice Search & Generative Search Engine (GEO/AI) Positioning'
      ];
      customTitle = `${types[i % types.length]} (${industry})`;
    } else if (disc.id === 'cro-funnel') {
      const types = [
        'Multi-Step High-Ticket Qualification Funnel & Lead Scoring',
        'Neuro-Psychology Landing Page Redesign & 40%+ Lift Protocol',
        'Dynamic Multi-Variant A/B Checkout Friction Eradicator',
        'Interactive Custom Price & Service Estimator Engine',
        'VIP Chauffeur & Concierge Lead Capture Architecture'
      ];
      customTitle = `${types[i % types.length]} — ${industry}`;
    } else if (disc.id === 'luxury-influencer') {
      const types = [
        'Emirati & GCC Macro-Influencer Brand Ambassador Squad',
        'Dubai Luxury Lifestyle Micro-Creator Viral Seeding Campaign',
        'Private VIP Tasting & Unboxing Experience Production',
        'B2B Industry Thought-Leader Video Podcast Series',
        'Exclusive Event Red-Carpet Live Coverage & Broadcast'
      ];
      customTitle = `${types[i % types.length]} (${industry})`;
    } else if (disc.id === 'crm-automation') {
      const types = [
        'Official Meta WhatsApp Cloud API High-Speed Lead Router',
        'HubSpot Enterprise Full-Funnel Lifecycle Pipeline',
        'Automated VIP Concierge Booking & SMS Reminder Dispatch',
        'Klaviyo High-LTV Predictive Churn Prevention Engine',
        'Salesforce Custom Lead Scoring & Multi-Office Sync'
      ];
      customTitle = `${types[i % types.length]} for ${industry}`;
    } else if (disc.id === 'creative-video-production') {
      const types = [
        'Cinematic 8K RED Camera Commercial & Drone Aerial Master',
        '3D CGI Photorealistic Product Reveal & Motion Billboard',
        'High-Converting Vertical UGC Ads Studio Production (30x Clips)',
        'Founder Cinematic Documentary & Brand Manifesto Film',
        'Virtual Showroom 360° Interactive Video Tour'
      ];
      customTitle = `${types[i % types.length]} — ${industry}`;
    } else if (disc.id === 'ai-growth-intelligence') {
      const types = [
        'Custom GPT-4o Real-Time Lead Qualification & WhatsApp Chatbot',
        'Multi-Touch Data Attribution & Cross-Channel ROI Predictor',
        'AI Dynamic Ad Copy & Creative Variant Generation Pipeline',
        'Predictive Customer Lifetime Value (pLTV) Machine Learning Model',
        'Automated Real-Time Competitor Ad Spend Intelligence Radar'
      ];
      customTitle = `${types[i % types.length]} (${industry})`;
    } else {
      const types = [
        'Sovereign Luxury Brand Identity & GCC Typography System',
        'Premium Packaging, Print Finishes & Gold Foil Collateral',
        'Bespoke Digital Design System & UI/UX Component Library',
        'Comprehensive 100-Page Corporate Brand Bible & Voice Matrix',
        'VIP Launch Event Holographic & Exhibition Visual Architecture'
      ];
      customTitle = `${types[i % types.length]} for ${industry}`;
    }

    const price = disc.startingPriceAED + (i * 450);
    const durationWeeks = 2 + (i % 6);

    catalog.push({
      id,
      title: customTitle,
      slug: `${disc.id}-${id.toLowerCase()}`,
      categoryId: disc.id,
      categoryName: disc.categoryName,
      industryFocus: industry,
      deliverableType: disc.deliverableType,
      techStack: disc.platforms.slice(0, 4),
      durationWeeks,
      priceAED: price,
      originalPriceAED: Math.round(price * 1.25),
      projectedRoas: disc.minRoas,
      leadVolumeEstimate: `${50 + (i * 15)} to ${180 + (i * 35)} High-Net-Worth Inquiries / mo`,
      heroImage: IMAGES[imgIndex],
      description: `Engineered specifically for the UAE market. Deploying ${disc.platforms.join(', ')} to scale qualified deal flow and brand authority across Dubai, Abu Dhabi, and GCC territories.`,
      deliverables: [
        `Custom strategy roadmap tailored to ${industry}`,
        `Full setup and integration across ${disc.platforms.slice(0, 2).join(' & ')}`,
        `Real-time executive Looker Studio dashboard with transparent cost-per-acquisition (CPA)`,
        `Dedicated UAE Senior Growth Director & bilingual copywriter`,
        `Bi-weekly performance sprint reviews and continuous optimization`
      ],
      guaranteeNotice: '100% Performance SLA Guarantee • Transparent Spend Directly into Client Ad Accounts'
    });

    idCounter++;
  }
});

const fileContent = `// Auto-generated 160+ Enterprise Marketing Solutions Catalog for NEXUS GROWTH ATELIER DUBAI
export interface MarketingSolution {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  categoryName: string;
  industryFocus: string;
  deliverableType: string;
  techStack: string[];
  durationWeeks: number;
  priceAED: number;
  originalPriceAED?: number;
  projectedRoas: string;
  leadVolumeEstimate: string;
  heroImage: string;
  description: string;
  deliverables: string[];
  guaranteeNotice: string;
}

export const MARKETING_SOLUTIONS_CATALOG: MarketingSolution[] = ${JSON.stringify(catalog, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/marketingCatalogData.ts'), fileContent, 'utf8');
console.log(`Successfully generated ${catalog.length} marketing solutions in src/data/marketingCatalogData.ts!`);
