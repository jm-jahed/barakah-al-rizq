export interface AgencyService {
  id: string;
  tag: string;
  title: string;
  description: string;
  pricingTag: string;
  features: string[];
  icon: string;
}

export interface ProjectItem {
  id: string;
  projectNumber: number;
  title: string;
  category: string;
  description: string;
  image: string;
  metrics: string;
  technologies: string[];
  client: string;
  slug?: string;
  featured?: boolean;
  featuredRank?: number;
  published?: boolean;
  thumbnail?: string;
  priority?: number;
  meta?: { market?: string; role?: string; year?: string };
  liveUrl?: string;
}
export type PortfolioProject = ProjectItem;

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  challenge: string;
  strategy: string;
  solution: string;
  technologies: string[];
  outcome: string;
  metrics: { label: string; value: string }[];
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  price: string;
  numericPrice?: number;
  featured?: boolean;
  features: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  company: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const AGENCY_BUSINESS = {
  name: "WEBSTUDIO AE",
  domain: "WebStudioAE.com",
  agencyTitle: "UAE Premium Digital & Product Engineering Studio",
  tagline: "We Build Digital Experiences That Grow Businesses.",
  subheading: "Premium websites, AI systems, e-commerce platforms, and enterprise digital products engineered for growth across UAE and worldwide.",
  location: "Dubai & Abu Dhabi, UAE",
  whatsappDisplay: "+971 56 618 4509",
  whatsapp: "https://wa.me/971566184509?text=Hello%20WEBSTUDIO%20AE,%20I%20would%20like%20to%20discuss%20a%20new%20digital%20project.",
  email: "contact@webstudioae.com",
  socials: {
    facebook: "https://web.facebook.com/webstudioae",
    
    linkedin: 'https://www.linkedin.com/company/webstudioae',
  }
};

export const TECH_TRUST_LOGOS = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "UI Engine" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Runtime" },
  { name: "Python", category: "AI & Data" },
  { name: "OpenAI", category: "AI Intelligence" },
  { name: "Shopify", category: "E-Commerce" },
  { name: "AWS", category: "Cloud Infrastructure" },
  { name: "Vercel", category: "Edge Delivery" },
  { name: "PostgreSQL", category: "Database" },
];

export const AGENCY_SERVICES: AgencyService[] = [
  {
    id: "digital-marketing",
    tag: "01",
    title: "Digital Marketing",
    description: "Data-driven performance campaigns, SEO optimization, and hyper-targeted conversion funnels engineered to capture market share.",
    pricingTag: "Custom Quote",
    features: ["PPC & Performance Ads", "Omnichannel Growth Strategy", "Conversion Rate Optimization (CRO)", "ROI Analytics Dashboards"],
    icon: "Megaphone"
  },
  {
    id: "web-development",
    tag: "02",
    title: "Web Development",
    description: "Bespoke high-performance web applications built on Next.js, React, and TypeScript with sub-second page load speeds.",
    pricingTag: "Starting from AED 799",
    features: ["Custom Next.js & React Architecture", "Headless CMS Integration", "95+ Lighthouse Score Guarantee", "Enterprise Security & Speed"],
    icon: "Code"
  },
  {
    id: "ai-bot-agent",
    tag: "03",
    title: "AI Bot & Agent",
    description: "Autonomous LLM agents, custom RAG search engines, and intelligent customer automation systems tailored to business workflows.",
    pricingTag: "Custom Quote",
    features: ["Custom Trained LLMs & OpenAI RAG", "24/7 Multi-Language Chat Agents", "CRM & ERP Workflow Automation", "Internal Knowledge Retrieval"],
    icon: "Bot"
  },
  {
    id: "social-media",
    tag: "04",
    title: "Social Media",
    description: "High-end content production, brand storytelling, and strategic community management designed for premium brand positioning.",
    pricingTag: "Starting from AED 999/mo",
    features: ["Video & Motion Graphics Production", "Strategic Content Calendar", "Influencer & Community Outreach", "Brand Identity Consistency"],
    icon: "Share2"
  },
  {
    id: "cloud-devops",
    tag: "05",
    title: "Cloud & DevOps",
    description: "Resilient serverless architecture, CI/CD pipeline automation, and multi-region AWS/Vercel cloud infrastructure setup.",
    pricingTag: "Custom Quote",
    features: ["AWS & Cloudflare Edge Routing", "Zero-Downtime CI/CD Pipelines", "Automated Scalability & Backups", "24/7 Infrastructure Monitoring"],
    icon: "Cloud"
  },
  {
    id: "saas-development",
    tag: "06",
    title: "SaaS Development",
    description: "End-to-end multi-tenant SaaS engineering from prototype validation to scalable enterprise microservice systems.",
    pricingTag: "Custom Quote",
    features: ["Multi-Tenant Architecture", "Stripe & Automated Billing", "Role-Based Security (RBAC)", "Real-time Telemetry & Logs"],
    icon: "Layers"
  },
  {
    id: "ux-ui-strategy",
    tag: "07",
    title: "UX/UI Strategy",
    description: "Human-centered digital design systems, Figma interactive prototypes, and conversion UX crafted with luxury precision.",
    pricingTag: "Starting from AED 599",
    features: ["Figma Design Tokens & Systems", "User Research & Journey Mapping", "Interactive Motion Prototypes", "Accessibility (WCAG AA) Compliance"],
    icon: "Palette"
  },
  {
    id: "data-analytics",
    tag: "08",
    title: "Data & Analytics",
    description: "Executive BI dashboards, event tracking pipelines, and predictive analytics that transform raw traffic into actionable revenue insights.",
    pricingTag: "Starting from AED 899",
    features: ["GA4 & Custom Telemetry", "PostgreSQL Data Warehousing", "Executive KPI Dashboards", "Predictive Customer Lifetime Value"],
    icon: "BarChart3"
  },
  {
    id: "headless-ecommerce",
    tag: "09",
    title: "Headless E-Commerce",
    description: "Ultra-fast headless online stores powered by Shopify Plus, Storefront API, Stripe, and global CDN delivery.",
    pricingTag: "Starting from AED 2,499",
    features: ["Shopify Storefront GraphQL API", "Custom Checkout & Stripe Integration", "Sub-second Mobile Shopping", "Global Multi-Currency & Tax"],
    icon: "ShoppingBag"
  }
];

export const SELECTED_WORK: ProjectItem[] = [
  {
    id: 'real-estate-lead-platform',
    projectNumber: 1,
    title: 'LUXESTATE UAE — Luxury Real Estate Lead Platform',
    category: 'Real Estate & PropTech',
    description: 'High-conversion lead capture and property showcase for UAE luxury real estate brokers.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    metrics: 'AED 45M+ Leads Generated',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Framer Motion', 'Lead Funnel'],
    client: 'LUXESTATE UAE',
  },
  {
    id: 'cleaning-company',
    projectNumber: 2,
    title: 'Commercial & Residential Cleaning Services Platform',
    category: 'Facility Management & Cleaning',
    description: 'On-demand cleaning booking engine and service customization portal.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    metrics: '15,000+ Bookings Managed',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Booking System', 'WhatsApp Integration'],
    client: 'FRESHAURA CLEANING DUBAI',
  },
  {
    id: 'car-rental',
    projectNumber: 3,
    title: 'Luxury & Exotic Car Rental Booking Engine',
    category: 'Automotive & Luxury Rentals',
    description: 'Real-time vehicle availability, daily rate calculator & instant reservation system.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    metrics: '98.4% Fleet Utilization',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Fleet Booking', 'AED Currency Engine'],
    client: 'EXOTIC RENTALS DUBAI',
  },
  {
    id: 'salon-beauty-studio',
    projectNumber: 4,
    title: 'Luxury Salon & Beauty Studio Booking Experience',
    category: 'Beauty & Personal Care',
    description: 'Interactive treatment catalog, stylist scheduling, and instant WhatsApp booking.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    metrics: '3,200+ Monthly Appointments',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Stylist Scheduler', 'Service Catalog'],
    client: 'VELVET BEAUTY LOUNGE',
  },
  {
    id: 'digital-marketing-agency',
    projectNumber: 5,
    title: 'Performance Marketing & Digital Growth Platform',
    category: 'Marketing & Advertising Services',
    description: 'Comprehensive digital agency portal with ROI calculator and client campaign dashboards.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    metrics: '+240% Average Client ROI',
    technologies: ['Next.js 16', 'Tailwind CSS', 'ROI Calculator', 'Interactive Pitch Deck'],
    client: 'NEXORA MEDIA DUBAI',
  },
  {
    id: 'construction-interior',
    projectNumber: 6,
    title: 'Luxury Construction & Fit-Out Contracting Portal',
    category: 'Construction & Interior Design',
    description: '3D project showcase, interior estimator tool, and corporate portfolio.',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
    metrics: 'AED 120M+ Contracts Signed',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Fit-Out Estimator', '3D Showcase'],
    client: 'VERTEX CONTRACTING UAE',
  },
  {
    id: 'home-maintenance',
    projectNumber: 7,
    title: 'On-Demand Home Maintenance & Handyman Platform',
    category: 'Facility & Maintenance Services',
    description: 'Emergency plumbing, electrical, and HVAC repair booking platform.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    metrics: '45-Min Average Dispatch',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Emergency Dispatch', 'WhatsApp Direct'],
    client: 'FIXPRO UAE',
  },
  {
    id: 'restaurant-cafe',
    projectNumber: 8,
    title: 'AL SULTAN CUISINE & ROYAL MAJLIS — Haute Gastronomy & Private Dining',
    category: 'Haute Gastronomy & Royal Dining',
    description: '18-Hour Royal Emirati Banquets, French Black Truffle Gastronomy & Japanese A5 Wagyu Omakase across 160 bespoke culinary creations in DIFC, Palm Jumeirah and Downtown Dubai.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    metrics: '160+ Master Dishes • 3 Dubai Salons',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Private Banqueting Simulator', 'VIP Reservation Flow'],
    client: 'AL SULTAN CUISINE DUBAI',
  },
  {
    id: 'perfume-fragrance',
    projectNumber: 9,
    title: 'OUD ROYALE PARIS • DUBAI — Haute Parfumerie & Dehn Al Oud',
    category: 'Haute Parfumerie & Luxury E-Commerce',
    description: '30-Year Vintage Kalakassi Dehn Al Oud, 40% French Extraits, Taif Rose Attars & Bespoke 24K Gold Inscribed Master Coffrets in Dubai Mall and Mall of the Emirates.',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80',
    metrics: '160+ Sovereign Flacons • 40% Extrait',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Bespoke Coffret Builder', 'Olfactory Comparator'],
    client: 'OUD ROYALE PARIS • DUBAI',
  },
  {
    id: 'fitness-gym',
    projectNumber: 10,
    title: 'Premium Fitness & Wellness Club Portal',
    category: 'Fitness & Health Clubs',
    description: 'Class schedule builder, personal trainer booking, and membership calculator.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    metrics: '2,800 Active Members',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Class Scheduler', 'Membership Portal'],
    client: 'PULSE FITNESS DUBAI',
  },
  {
    id: 'luxury-jewelry',
    projectNumber: 11,
    title: 'Haute Joaillerie & Diamond Watch Atelier',
    category: 'Luxury Jewelry & Watches',
    description: 'Private VIP appointment booking, 360 diamond viewer, and custom design request.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
    metrics: 'AED 8.5M Custom Orders',
    technologies: ['Next.js 16', 'Tailwind CSS', 'VIP Booking', 'High-Res Viewer'],
    client: 'AUREN JEWELERS',
  },
  {
    id: 'bakery-cake-studio',
    projectNumber: 12,
    title: 'Artisanal Bakery & Custom Cake Design Studio',
    category: 'Food & Beverage',
    description: '3D cake builder tool, wedding cake consultation, and fresh bakery ordering.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
    metrics: '500+ Custom Cakes / Mo',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Cake Builder', 'Consultation Form'],
    client: 'FLOUR & GOLD STUDIO',
  },
  {
    id: 'fashion-boutique',
    projectNumber: 13,
    title: 'High-Fashion & Luxury Apparel Boutique',
    category: 'E-Commerce & Apparel',
    description: 'Lookbook collection, virtual sizing guide, and exclusive product drops.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    metrics: '68% Repeat Customer Rate',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Lookbook Gallery', 'Cart Engine'],
    client: 'NOIR BOUTIQUE DUBAI',
  },
  {
    id: 'sneaker-streetwear',
    projectNumber: 14,
    title: 'Limited Edition Sneaker & Streetwear Marketplace',
    category: 'E-Commerce & Culture',
    description: 'Raffle release system, authenticity check tool, and streetwear catalog.',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=80',
    metrics: '12,000 Verified Drop Sales',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Raffle System', 'Product Authenticator'],
    client: 'SOLE VAULT DUBAI',
  },
  {
    id: 'luxury-perfume',
    projectNumber: 15,
    title: 'Royal Oud & Niche Luxury Fragrance House',
    category: 'Luxury Goods & Perfumery',
    description: 'Interactive scent profile finder, bespoke gift packaging, and international shipping.',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80',
    metrics: 'AED 3.2M Annual Online Rev',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Scent Profile Quiz', 'Curated Gifts'],
    client: 'AL MAJESTY PERFUMES',
  },
  {
    id: 'wellness-yoga',
    projectNumber: 16,
    title: 'Holistic Wellness & Mindful Yoga Sanctuary',
    category: 'Health, Wellness & Spa',
    description: 'Retreat booking system, class pass subscription, and holistic wellness blog.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80',
    metrics: '1,400 Monthly Attendees',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Retreat Booking', 'Class Pass System'],
    client: 'PRANA SANCTUARY DUBAI',
  },
  {
    id: 'private-medical-clinic',
    projectNumber: 17,
    title: 'Multi-Specialty Private Medical Clinic Portal',
    category: 'Healthcare & Medical',
    description: 'Doctor schedule search, HIPAA-compliant patient inquiry, and Telehealth info.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    metrics: '8,500 Patient Consultations',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Doctor Search', 'Patient Booking'],
    client: 'APEX HEALTHCARE DUBAI',
  },
  {
    id: 'dental-clinic',
    projectNumber: 18,
    title: 'Advanced Cosmetic & Implant Dentistry Clinic',
    category: 'Dental Healthcare',
    description: 'Smile transformation gallery, 3D dental implant info, and instant appointment booking.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
    metrics: '1,200+ Smile Makeovers',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Smile Gallery', 'Appointment Engine'],
    client: 'PEARL DENTAL CLINIC',
  },
  {
    id: 'eye-care-optical',
    projectNumber: 19,
    title: 'Premium Eye Care & Luxury Optical Boutique',
    category: 'Healthcare & Eyewear',
    description: 'Virtual try-on framework, optometrist booking, and luxury eyewear catalog.',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1200&q=80',
    metrics: '4,100 Eye Tests Conducted',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Eyewear Showcase', 'Optometrist Booking'],
    client: 'VISIONPLUS OPTICAL',
  },
  {
    id: 'barber-grooming',
    projectNumber: 20,
    title: 'Gentlemen’s Executive Barber & Grooming Lounge',
    category: 'Grooming & Men’s Services',
    description: 'Barber seat selection, executive grooming package booking, and product shop.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80',
    metrics: '2,100 Monthly Grooms',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Barber Selector', 'Service Packages'],
    client: 'THE BARON BARBER DUBAI',
  },
  {
    id: 'pet-care-veterinary',
    projectNumber: 21,
    title: '24/7 Veterinary Hospital & Pet Care Sanctuary',
    category: 'Pet Care & Veterinary Services',
    description: 'Emergency vet contact, grooming appointment booking, and pet boarding portal.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=80',
    metrics: '5,000+ Pets Treated',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Emergency Hotline', 'Boarding Booking'],
    client: 'PAWS & CLAWS CLINIC',
  },
  {
    id: 'corporate-enterprise',
    projectNumber: 22,
    title: 'VANGUARD HOLDINGS — Sovereign Enterprise Holding & Capital Advisory',
    category: 'Corporate & Enterprise Advisory',
    description: 'Sovereign capital deployment, cross-border M&A mandates, clean energy real assets, and enterprise AI transformation.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    metrics: 'AED 18.5B+ Assets Under Advisory • 42+ Sovereign Mandates • DFSA & FSRA Tier-1',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Framer Motion', 'Mandate Simulator', 'DFSA Compliance', 'Executive RFP Portal'],
    client: 'VANGUARD HOLDINGS DIFC & ADGM',
  },
  {
    id: 'logistics-delivery',
    projectNumber: 23,
    title: 'Global Freight Forwarding & Express Delivery System',
    category: 'Logistics & Supply Chain',
    description: 'Live shipment tracker simulation, freight rate calculator, and warehouse locator.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    metrics: '150,000+ Shipments Moved',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Tracking Simulation', 'Rate Calculator'],
    client: 'EXPRESSLOG UAE',
  },
  {
    id: 'moving-relocation',
    projectNumber: 24,
    title: 'International & Domestic Corporate Relocation Agency',
    category: 'Relocation & Moving',
    description: 'Volume estimation tool, instant moving quote generator, and packing guide.',
    image: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?auto=format&fit=crop&w=1200&q=80',
    metrics: '3,400 Successful Moves',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Moving Estimator', 'Relocation Quote'],
    client: 'MOVEFAST UAE',
  },
  {
    id: 'boutique-luxury-hotel',
    projectNumber: 25,
    title: '5-Star Resort & Boutique Luxury Hotel Experience',
    category: 'Hospitality & Luxury Hotels',
    description: 'Suite room selector, spa reservation, and fine dining concierge.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    metrics: '94% Peak Season Occupancy',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Suite Selector', 'Hotel Reservation'],
    client: 'THE OASIS RESORT DUBAI',
  },
  {
    id: 'fast-food-restaurant',
    projectNumber: 26,
    title: 'Modern QSR & Gourmet Burger Chain Website',
    category: 'Quick Service Restaurants',
    description: 'Online food ordering engine, store locator, and promotional meal deals.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80',
    metrics: '25,000 Orders Processed',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Online Ordering', 'Branch Finder'],
    client: 'BURGERCRAFT DUBAI',
  },
  {
    id: 'abaya-fashion',
    projectNumber: 27,
    title: 'Haute Couture Abaya & Modest Fashion Atelier',
    category: 'Modest Fashion & E-Commerce',
    description: 'Bespoke tailoring request, embroidery customization, and seasonal lookbook.',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80',
    metrics: 'AED 2.4M Couture Sales',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Lookbook Gallery', 'Bespoke Tailoring'],
    client: 'NOURA ABAYA ATELIER',
  },
  {
    id: 'resort-holiday-booking',
    projectNumber: 28,
    title: 'Desert Oasis & Beachfront Villa Rental Platform',
    category: 'Hospitality & Holiday Homes',
    description: 'Interactive map availability, villa amenities preview, and seasonal booking.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    metrics: '85% Annual Occupancy',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Villa Preview', 'Direct Booking'],
    client: 'PALM STAYS DUBAI',
  },
  {
    id: 'business-consultancy',
    projectNumber: 29,
    title: 'UAE Market Entry & Corporate Advisory Consultancy',
    category: 'Business Consulting Services',
    description: 'Company setup fee calculator, trade license selector, and consultation booking.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    metrics: '450+ UAE Businesses Formed',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Setup Calculator', 'Advisory Booking'],
    client: 'VANTAGE CONSULTING UAE',
  },
  {
    id: 'corporate-law-firm',
    projectNumber: 30,
    title: 'VALOR LEGAL — Corporate Law & Commercial Arbitration',
    category: 'Legal & Corporate Practice',
    description: 'Practice area overview, attorney directory, and legal consultation portal.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    metrics: 'AED 500M+ Cases Handled',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Attorney Directory', 'Consultation Form'],
    client: 'VALOR LEGAL UAE',
  },
  {
    id: 'accounting-tax-consultancy',
    projectNumber: 31,
    title: 'Corporate Tax, VAT & Audit Consultancy Firm',
    category: 'Accounting & Tax Advisory',
    description: 'Corporate tax impact calculator, VAT audit request, and monthly retainer plans.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    metrics: '300+ Tax Returns Filed',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Tax Calculator', 'Audit Request'],
    client: 'LEDGERA TAX ADVISORS',
  },
  {
    id: 'financial-advisory',
    projectNumber: 32,
    title: 'Wealth Management & Private Equity Advisory',
    category: 'Wealth Management & Finance',
    description: 'Investment portfolio simulator, private wealth consultation, and market insights.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80',
    metrics: 'AED 1.2B Assets Advised',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Portfolio Simulator', 'Private Advisory'],
    client: 'CROWN WEALTH UAE',
  },
  {
    id: 'property-management',
    projectNumber: 33,
    title: 'NESTORA — UAE Institutional Property Management & Landlord Asset Stewardship',
    category: 'Property Management & Real Estate Assets',
    description: 'Comprehensive property asset management platform featuring 222+ granular mandates catalog across 8 disciplines, interactive Rental Yield & 5-Year ROI Simulator, official RERA Decree No. 43 Rent Increase Engine, 24/7 emergency maintenance helpdesk, and institutional portfolio reporting across Dubai and Abu Dhabi.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    metrics: '222+ Mandates • 1,800+ Units Managed • AED 2.8B+ Asset AUM',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Framer Motion', '222-Mandates Catalog Matrix', 'Rental Yield & ROI Simulator', 'RERA Decree 43/2013 Engine', '24/7 Emergency Dispatch Portal', 'Mollak Service Fee Auditor'],
    client: 'NESTORA PROPERTY MANAGEMENT UAE',
  },
  {
    id: 'property-development',
    projectNumber: 34,
    title: 'Off-Plan Luxury Real Estate Developer Portal',
    category: 'Real Estate Development',
    description: 'Interactive masterplan viewer, floorplan download, and launch VIP registration.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    metrics: 'AED 850M Off-Plan Sold',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Masterplan Viewer', 'VIP Registration'],
    client: 'AZURE DEVELOPMENTS',
  },
  {
    id: 'womens-abaya',
    projectNumber: 35,
    title: 'NOURA ABAYA — Arabian Haute Couture & Modestwear Atelier',
    category: 'Modest Fashion & Haute Couture',
    description: 'Flagship Arabian luxury haute couture atelier and e-commerce experience featuring 248+ authentic handcrafted abayas, interactive 3D cloth material customizer, digital lookbook drawer, VIP atelier booking concierge, size recommendation guide, and express UAE delivery across Dubai, Abu Dhabi, and the GCC.',
    image: '/images/noura-abaya/editorial-1.jpg',
    metrics: '248+ Couture Pieces • Handcrafted Nida & Silk • Same-Day UAE VIP Delivery',
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Framer Motion', '248+ Item Scraped Catalog', 'Interactive 3D Customizer', 'Editorial Lookbook Drawer', 'Atelier Booking Concierge', 'Express UAE Checkout'],
    client: 'NOURA ABAYA ATELIER DUBAI',
    slug: 'womens-abaya',
    featured: true,
    featuredRank: 3,
    published: true,
    liveUrl: '/work/womens-abaya',
    meta: { market: 'United Arab Emirates & GCC', role: 'Flagship Modest Fashion Atelier', year: '2026' },
  },
  {
    id: 'fresh-fruits-vegetables',
    projectNumber: 36,
    title: 'Farm-Fresh Organic Produce Delivery Marketplace',
    category: 'Grocery & E-Commerce',
    description: 'Weekly farm box subscription, fresh produce catalog, and express delivery.',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1200&q=80',
    metrics: '8,000+ Farm Boxes Delivered',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Subscription Engine', 'Produce Catalog'],
    client: 'GREENHARVEST UAE',
  },
  {
    id: 'holiday-home-management',
    projectNumber: 37,
    title: 'STAYORA — Holiday Homes & Rental Management',
    category: 'Hospitality & Real Estate',
    description: 'Revenue projection calculator, Airbnb license management, and owner portal.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    metrics: '35% Higher Rental Yields',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Revenue Estimator', 'Owner Portal'],
    client: 'STAYORA UAE',
  },
  {
    id: 'auto-service-repair',
    projectNumber: 38,
    title: 'German & Exotic Auto Repair & Maintenance Hub',
    category: 'Automotive Repairs',
    description: 'Diagnostic appointment scheduler, service estimator, and towing request.',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
    metrics: '6,500 Cars Serviced',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Service Estimator', 'Appointment Scheduler'],
    client: 'AUTOTAUCH DUBAI',
  },
  {
    id: 'car-detailing-ceramic-coating',
    projectNumber: 39,
    title: 'AURELIS AUTO CARE — Premium Car Wash & Auto Detailing Platform',
    category: 'Premium Automotive Care & Detailing',
    description: 'Dubai Al Quoz & Abu Dhabi Al Reem detailing studio for 9H ceramic coating, XPEL PPF wraps, deep interior steam spa, and VIP mobile car wash dispatch.',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80',
    metrics: '1,800+ Vehicles Serviced • 9H Ceramic Certified • Mobile Van Dispatch',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Dynamic Pricing Calculator', '7-Step Booking Flow', 'Before/After Slider', 'Vehicle Category Selector'],
    client: 'AURELIS AUTO CARE DUBAI & ABU DHABI',
  },
  {
    id: 'car-recovery-roadside-assistance',
    projectNumber: 40,
    title: '24/7 Roadside Assistance & Flatbed Towing Dispatch',
    category: 'Automotive Emergency Services',
    description: 'GPS location dispatch request, flatbed recovery booking, and battery service.',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    metrics: '20-Min Avg Response',
    technologies: ['Next.js 16', 'Tailwind CSS', 'GPS Location Dispatch', 'Emergency Call'],
    client: 'RECOVERYNOW UAE',
  },
  {
    id: 'yacht-charter',
    projectNumber: 41,
    title: 'Luxury Superyacht Charter & VIP Marina Experience',
    category: 'Maritime & Luxury Charters',
    description: 'Yacht fleet showcase, catering customization, and online cruise booking.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80',
    metrics: '1,500 VIP Charters Completed',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Fleet Showcase', 'Cruise Booking'],
    client: 'ROYAL YACHTS DUBAI',
  },
  {
    id: 'desert-safari-adventure',
    projectNumber: 42,
    title: 'Premium Dune Bashing & VIP Desert Camp Safari',
    category: 'Tourism & Experiences',
    description: 'Safari package selector, quad bike add-ons, and instant ticket booking.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    metrics: '45,000 Tourists Hosted',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Package Booking', 'WhatsApp Tickets'],
    client: 'DESERT LEGENDS UAE',
  },
  {
    id: 'private-jet-charter',
    projectNumber: 43,
    title: 'Global Private Aviation & Aircraft Charter Broker',
    category: 'Aviation & VIP Travel',
    description: 'Flight distance & cost estimator, jet fleet selector, and charter desk.',
    image: 'https://images.unsplash.com/photo-1519074069444-1ba4eff56024?auto=format&fit=crop&w=1200&q=80',
    metrics: 'AED 65M Charter Flights',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Flight Estimator', 'VIP Charter Desk'],
    client: 'SKYLINE JETS DUBAI',
  },
  {
    id: 'executive-aviation',
    projectNumber: 44,
    title: 'FBO Operations & Executive Aircraft Management',
    category: 'Aviation Operations',
    description: 'Hangarage reservation, ground handling request, and crew services portal.',
    image: 'https://images.unsplash.com/photo-1519074069444-1ba4eff56024?auto=format&fit=crop&w=1200&q=80',
    metrics: '800 Aircraft Handled',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Ground Handling', 'Hangar Booking'],
    client: 'APEX AVIATION UAE',
  },
  {
    id: 'foodstuff-trading',
    projectNumber: 45,
    title: 'Global Foodstuff Import, Export & Wholesale Trading',
    category: 'Foodstuff & Commodities',
    description: 'Bulk commodity catalog, container quote request, and trade compliance info.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    metrics: '50,000 Tons Traded / Yr',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Commodity Catalog', 'Container Quote'],
    client: 'GLOBALFOOD UAE',
  },
  {
    id: 'business-center-serviced-offices',
    projectNumber: 46,
    title: 'NEXUS WORKSPACE — Serviced Offices & Business Centers',
    category: 'Commercial Real Estate / Serviced Offices',
    description: 'Fully furnished, trade-license-ready serviced offices across premier UAE business districts.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    metrics: '220+ Businesses • 6 Business Centers • 48-Hour Move-In',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Office Calculator', 'Booking Engine'],
    client: 'NEXUS WORKSPACE UAE',
  },
  {
    id: 'training-education-institute',
    projectNumber: 47,
    title: 'EDUVANTA — Training & Education Institute',
    category: 'Education & Professional Training',
    description: 'Professional certification and corporate training programs designed for the UAE job market.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    metrics: '12,000+ Trained • 94% Completion Rate • 40+ Certifications',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Course Finder', 'Corporate L&D'],
    client: 'EDUVANTA UAE',
  },
  {
    id: 'coding-tech-academy',
    projectNumber: 48,
    title: 'CODEFORGE UAE — Coding & Tech Bootcamp',
    category: 'Tech Education & Bootcamps',
    description: 'Intensive coding and tech bootcamps built to launch careers in the UAE’s fastest-growing industries.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
    metrics: '2,400+ Graduates • 87% Placement Rate • 5 Tracks',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Program Matcher', 'Tech Careers'],
    client: 'CODEFORGE UAE',
  },
  {
    id: 'premium-nursery-preschool',
    projectNumber: 49,
    title: 'LITTLE HORIZON — Premium Nursery & Preschool',
    category: 'Early Years Education',
    description: 'A nurturing, premium early-years environment where curiosity is celebrated every day.',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80',
    metrics: '800+ Children • 1:6 Teacher Ratio • 3 Campuses',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Day Timeline', 'Tour Scheduler'],
    client: 'LITTLE HORIZON UAE',
  },
  {
    id: 'private-school',
    projectNumber: 50,
    title: 'ALTAIR ACADEMY — K-12 Private School',
    category: 'Private K-12 Schooling',
    description: 'A premium K-12 learning environment combining academic excellence and global university pathways.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    metrics: '1,600+ Students • 96% University Acceptance • 35+ Nationalities',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Tuition Estimator', 'Admissions Journey'],
    client: 'ALTAIR ACADEMY UAE',
  },
  {
    id: 'photography-creative-studio',
    projectNumber: 51,
    title: 'FRAMEHAUS — Commercial Photography Studio',
    category: 'Creative Media & Photography',
    description: 'Premium commercial and creative photography for brands, developers and individuals across the UAE.',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80',
    metrics: '1,200+ Projects • 150+ Brands • 4.9 Rating',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Package Builder', 'Editorial Gallery'],
    client: 'FRAMEHAUS UAE',
  },
  {
    id: 'longevity-bio-clinic',
    projectNumber: 52,
    title: 'VITA CELL — Sovereign Longevity & Cellular Bio-Clinic',
    category: 'Healthcare & Regenerative Bio-Tech',
    description: 'DIFC-based elite longevity sanctuary specializing in autologous stem cell therapy, NAD+ resuscitation, and biological age reversal.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    metrics: 'AED 38M+ Bio-Tech Therapies • -6.4 Yrs Avg Age Reversal',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Bio-Age Calculator', 'VIP Concierge Scheduler'],
    client: 'VITA CELL LONGEVITY DUBAI',
  },
  {
    id: 'hypercar-coachbuilding',
    projectNumber: 53,
    title: 'VALKYRIE HYPERCARS — Bespoke Coachbuilding & Carbon Tuning',
    category: 'Automotive Engineering & Luxury Performance',
    description: 'Dubai Autodrome motorsport studio specializing in dry carbon fiber bodywork, Stage 3 twin-turbo upgrades, and VIP track calibration.',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    metrics: 'AED 65M+ Hypercar Builds • 1,400+ HP Dyno Tunes',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Tuning Configurator', 'Autodrome Dyno Slot Scheduler'],
    client: 'VALKYRIE HYPERCARS DUBAI',
  },
  {
    id: 'clean-energy-hydrogen',
    projectNumber: 54,
    title: 'SOLARIS HYDROGEN — Utility Solar & Green Hydrogen Infrastructure',
    category: 'Clean Energy & Utility Infrastructure',
    description: 'Abu Dhabi Masdar City EPC contractor for gigawatt solar farms, green hydrogen electrolyser plants, and GWh grid BESS storage.',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    metrics: '3.2 GW Active Solar • 120k Tons H2/Yr • AED 4.2B Infrastructure',
    technologies: ['Next.js 16', 'Tailwind CSS', 'CAPEX Estimator', 'Full Contact Hub'],
    client: 'SOLARIS CLEAN ENERGY ABU DHABI',
  },
  {
    id: 'sovereign-cybersecurity',
    projectNumber: 55,
    title: 'CYBERFORTRESS — Sovereign AI SOC & Critical Infrastructure Defense',
    category: 'Cybersecurity & Defense Tech',
    description: 'DIFC Gate Avenue 24/7 AI-driven Security Operations Center protecting UAE banks, central government portals, and energy grids.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    metrics: '1.4B+ Attacks Blocked • <45s SOC SLA • AED 15B+ Assets Protected',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Risk Estimator', 'Full Emergency SOC Hub'],
    client: 'CYBERFORTRESS DEFENSE DUBAI',
  },
  {
    id: 'royal-falconry-sanctuary',
    projectNumber: 56,
    title: 'ROYAL FALCONRY — Elite UAE Falcon Genetics & Avian Hospital',
    category: 'Royal Heritage & Avian Bio-Tech',
    description: 'Dubai Al Marmoom sanctuary for Gyrfalcon pedigree breeding, solar-powered GPS satellite telemetry, and micro-surgical avian care.',
    image: 'https://images.unsplash.com/photo-1555543451-8408f654b9f2?auto=format&fit=crop&w=1200&q=80',
    metrics: '395 km/h Dive Speed • 100% Pedigree DNA Barcoded • AED 280k Top Value',
    technologies: ['Next.js 16', 'Tailwind CSS', '3D Genetic Configurator', 'Live GPS Dashboard', '3-Step Vet Flow'],
    client: 'ROYAL FALCONRY SANCTUARY DUBAI',
  },
  {
    id: 'institutional-crypto-vault',
    projectNumber: 57,
    title: 'FINTECH NEXUS — Institutional Digital Asset Vault & OTC Liquidity Desk',
    category: 'Institutional FinTech & Digital Assets',
    description: 'DIFC Innovation One VARA-licensed MPC cold custody vault, AED 8.4B assets under custody, and instant bank wire OTC liquidity settlement.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
    metrics: 'AED 8.4B Custody Assets • VARA License #90481 • $250M Insured Vault',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Staking Yield Engine', 'OTC Quote Engine', 'MPC Key Configurator'],
    client: 'NEXUS DIGITAL VAULT DUBAI',
  },
  {
    id: 'luxury-villa-automation',
    projectNumber: 58,
    title: 'AURA SMART HOMES — Luxury Villa Automation & Audio Atelier',
    category: 'Smart Home & Architectural Audio',
    description: 'Dubai Design District (d3) luxury villa studio for KNX adaptive lighting, Sonance 100% invisible drywall speakers, and 4K Dolby Atmos private cinemas.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    metrics: '180+ Luxury Villas • 100% Invisible Speakers • AED 45M+ Systems',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Villa CAPEX Estimator', 'Scene Simulator', '3-Step d3 Booking'],
    client: 'AURA SMART HOMES DUBAI',
  },
  {
    id: 'executive-jet-charter',
    projectNumber: 59,
    title: 'VELOCITY AVIATION — Executive Jet Charter & Aircraft Management',
    category: 'Private Aviation & Executive Jet Charter',
    description: 'Dubai DWC & Abu Dhabi AZI FBO operator for ultra-long-range Gulfstream & Bombardier jets, jet card memberships, and empty-leg charters.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
    metrics: '14 Long-Range Jets • <30 Min FBO Boarding • 4,800+ Airports',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Charter Flight Quote Engine', 'Fleet Matrix', 'Jet Card Calculator', 'Multi-Step Dispatch'],
    client: 'VELOCITY AVIATION DUBAI',
  },
  {
    id: 'superyacht-charter',
    projectNumber: 60,
    title: 'NERO MARINE — Superyacht Charter, Yacht Management & Marine Luxury',
    category: 'Superyacht Charter & Marine Luxury',
    description: 'Dubai Harbour & Abu Dhabi Yas Marina operator for mega-yacht charters, sales brokerage, yacht management, and private island itineraries.',
    image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1200&q=80',
    metrics: '24 Mega-Yachts Fleet • 185 ft Max Vessel Length • 100% Custom Itineraries',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Charter Cost Calculator', 'Yacht Fleet Matrix', 'Itinerary Builder', 'Multi-Step Dispatch'],
    client: 'NERO MARINE DUBAI',
  },
  {
    id: 'private-island-resort',
    projectNumber: 61,
    title: 'SOLARIA PRIVATE ISLAND — Ultra-Luxury Private Island Resort & Retreat',
    category: 'Ultra-Luxury Hospitality & Private Island Resort',
    description: 'Exclusive Indian Ocean private island sanctuary with overwater infinity pool villas, 24/7 personal butler service, and private seaplane transfers.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    metrics: '12 Overwater Villas • 100% Private Pools • 24/7 Dedicated Butler',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Stay Cost Calculator', 'Villa Matrix', 'Experience Builder', 'Multi-Step Reservation'],
    client: 'SOLARIA PRIVATE ISLAND MALDIVES & DUBAI',
  },
  {
    id: 'private-gastronomy-atelier',
    projectNumber: 62,
    title: 'MAISON ÉCLAT — Private Gastronomy Atelier & Michelin Residencies',
    category: 'Ultra-Luxury Culinary & Private Gastronomy',
    description: 'DIFC Gate Village private dining atelier, 3-Michelin star chef residencies, royal household banqueting, and superyacht gastronomy.',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    metrics: '12 Master Chefs • 100% Bespoke Menus • 24/7 Culinary Concierge',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Dining Calculator', 'Chef Directory (12)', 'Menu Configurator', 'Multi-Step Proposal'],
    client: 'MAISON ÉCLAT DUBAI & ABU DHABI',
  },
  {
    id: 'luxury-real-estate-development',
    projectNumber: 63,
    title: 'AURELIA ESTATES — Ultra-Luxury Private Residences & Property Development',
    category: 'Luxury Real Estate Development & Private Residences',
    description: 'DIFC Gate Village & Abu Dhabi Al Maryah Island developer of ultra-prime private villas, branded residences, beachfront compounds, and trophy penthouses.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
    metrics: 'AED 1.8B+ BUA • 12 Signature Estates • 100% Prime Addresses',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Estate Capital Calculator', 'Residence Matrix (12)', 'Home Configurator', 'Multi-Step Dispatch'],
    client: 'AURELIA ESTATES DUBAI & ABU DHABI',
  },
  {
    id: 'al-mirqab-logistics',
    projectNumber: 64,
    title: 'AL MIRQAB LOGISTICS — Cross-Border GCC Freight & Fleet Operations',
    category: 'Logistics & Heavy Fleet Transport',
    description: 'Dubai Industrial City & Abu Dhabi ICAD cross-border freight dispatch, real-time GPS fleet telemetry, customs clearance gateway, and heavy machinery transport.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    metrics: '450+ Active Fleet Trucks • GCC Cross-Border • 99.4% On-Time Delivery',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Fleet Telemetry Radar', 'Freight Rate Estimator', 'Customs Clearance Wizard', 'Live GPS Tracking'],
    client: 'AL MIRQAB LOGISTICS LLC DUBAI',
  },
  {
    id: 'wedding-planning',
    projectNumber: 65,
    title: 'EVERA WEDDINGS — Premium UAE Luxury Wedding Planning & Design',
    category: 'Luxury Wedding Planning & Event Architecture',
    description: 'Dubai Jumeirah & Abu Dhabi Al Reem atelier for full-service wedding design, beachfront & desert destination planning, and budget architecture.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    metrics: '320+ Weddings Planned • AED 95M+ Managed • 5.0★ Rating',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Budget Calculator', 'Real Weddings Gallery', '8 Service Modules', 'Consultation Dispatch'],
    client: 'EVERA WEDDINGS DUBAI & ABU DHABI',
  },
  {
    id: 'fintech-payments',
    projectNumber: 66,
    title: 'NEXORA PAY — B2B Global Payments & Financial Infrastructure',
    category: 'FinTech & Payment Infrastructure',
    description: 'Dubai DIFC & global payment engine for 190+ markets, 9H fraud scoring, instant multi-currency IBAN payouts, Nexora Black virtual cards, and developer API SDKs.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    metrics: '$48.7B+ Processed • 190+ Markets • 99.99% Uptime',
    technologies: ['Next.js 16', 'Tailwind CSS', 'OS Dashboard Preview', 'Transaction Router', 'Fee Savings Engine', 'Nexora Black Cards', 'Developer SDK Terminal'],
    client: 'NEXORA PAY FINANCIAL TECHNOLOGIES',
  },
  {
    id: 'money-exchange-remittance',
    projectNumber: 67,
    title: 'NOVA REMIT — UAE Global Money Exchange & Cross-Border Remittance',
    category: 'Money Exchange & International Remittance',
    description: 'Dubai DIFC & Abu Dhabi ADGM exchange platform for instant AED remittance to 190+ countries, bKash/GCash/UPI mobile payouts, locked FX rates, and 5 UAE branch pavilions.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    metrics: '190+ Countries • Sub-60s Instant Wallet Payouts • 0 Hidden Fees',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Live Remittance Widget', '135+ FX Rates Matrix', '4-Step Transfer Wizard', 'Live Tracker', 'Branch Locator'],
    client: 'NOVA REMIT FINANCIAL EXCHANGE UAE',
  },
  {
    id: 'artificial-intelligence',
    projectNumber: 68,
    title: 'TENSORIS — Enterprise Cognitive AI Platform & Autonomous Agent Matrix',
    category: 'Enterprise Artificial Intelligence & Sovereign Neural Systems',
    description: 'Dubai DIFC & Abu Dhabi sovereign AI intelligence infrastructure for real-time neural reasoning, multi-agent workflow orchestration, enterprise knowledge graphs, and predictive decision engines.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    metrics: '850M+ Tensor Inferences • 94.2% Decision Velocity • UAE Sovereign AI Stack',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Neural Matrix OS', 'Agent Simulator', 'Live Command Center', 'UAE AI ROI Calculator'],
    client: 'TENSORIS COGNITIVE TECHNOLOGIES DUBAI',
  },
  {
    id: 'desert-tourism',
    projectNumber: 69,
    title: 'DESERT MIRAGE SAFARIS — Luxury Desert Expeditions • Dubai, UAE',
    category: 'Desert Tourism & Luxury Expeditions',
    description: 'Bespoke Arabian desert expeditions in Dubai featuring private Range Rover off-road navigation, royal falconry, Michelin-calibre sand gastronomy, and stargazing retreats.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    metrics: '100% Private Dunes • 6 Expeditions • Michelin Chef Dining',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Expedition Configurator', 'Route Visualizer', 'AED Price Engine', 'Stargazing Guide'],
    client: 'DESERT MIRAGE SAFARIS DUBAI',
  },
  {
    id: 'cloud-computing',
    projectNumber: 70,
    title: 'STRATOSYN — Distributed Cloud Infrastructure & Global Compute Fabric',
    category: 'Cloud Computing & Distributed Infrastructure',
    description: 'Dubai DIFC & global sovereign cloud platform engineered for distributed micro-enclaves, real-time BGP Anycast routing, multi-region active-active replication, and autonomous workload orchestration.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    metrics: '142.8 Tbps Global Mesh • 7 Sovereign Fabrics • Sub-5ms Edge Latency',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Live Simulation Dashboard', 'Global Fabric Map', 'Adaptive Orchestration Engine', 'Zero-Trust Security Stack', 'Workload Sizer'],
    client: 'STRATOSYN CLOUD TECHNOLOGIES',
  },
  {
    id: 'water-supply',
    projectNumber: 71,
    title: 'AQUAVANTA — Intelligent Water Infrastructure & Smart Utility Twin',
    category: 'Water Supply & Smart Water Infrastructure',
    description: 'Autonomous water infrastructure platform engineered for subterranean hydraulic digital twins, real-time pressure management, acoustic leak intelligence, and WHO-standard water quality monitoring.',
    image: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1200&q=80',
    metrics: '99.98% Purity Index • -34% Non-Revenue Water • 14,200 Sensors',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Hydraulic Digital Twin', 'Live Sensor Telemetry', 'Acoustic Leak Radar', 'Reservoir Management', 'Smart Water Configurator'],
    client: 'AQUAVANTA UTILITY INFRASTRUCTURE',
  },
  {
    id: 'medical-diagnostics',
    projectNumber: 72,
    title: 'VIRELIS — Diagnostic Intelligence Platform & Connected Medical Workflows',
    category: 'Medical Diagnostics & Diagnostic Intelligence',
    description: 'Diagnostic intelligence platform bringing laboratory automation, 3T MRI/spectral CT imaging coordination, multi-modal biomarker synthesis, and clinician-supervised decision support into one unified experience.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',
    metrics: '14.2 min STAT Turnaround • 94.8% Auto-Verification • Full Evidence Trail',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Diagnostic Command Center', 'DICOM Imaging Pipeline', 'Delta-Check Engine', 'MDT Tumor Board Hub', 'Traceability Matrix'],
    client: 'VIRELIS DIAGNOSTIC TECHNOLOGIES',
  },
  {
    id: 'medicine-supply',
    projectNumber: 73,
    title: 'MEDIVANTA — Intelligent Medicine Delivery Network & Healthcare Logistics',
    category: 'Healthcare / Medicine Supply & Delivery',
    description: 'Connected medicine supply and door-to-door healthcare logistics platform engineered for digital prescriptions, robotic micro-fulfillment, cold-chain telemetry, and sub-30 minute metro dispatch.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
    metrics: 'Sub-30 Min Metro Transit • 100% Licensed Rx Review • 2°C – 8°C Cold-Vault',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Live Tracking Radar', 'Prescription OCR Ingestion', 'Cold-Chain Telemetry', 'Smart Stock Engine', 'Doorstep OTP Verification'],
    client: 'MEDIVANTA HEALTHCARE LOGISTICS',
  },
  {
    id: 'flight-hotel-booking',
    projectNumber: 74,
    title: 'AEROVIA — Intelligent Global Travel Platform & Flight/Hotel Booking',
    category: 'Travel / Flight & Hotel Booking',
    description: 'Connected flight search, curated luxury hotel discovery, dynamic multi-city journey composition, and digital itinerary management engineered in AED.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    metrics: '< 450ms Multi-GDS Query • 100% 5-Star Portfolio • 72-Hour Fare Lock',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Multi-GDS Flight Aggregator', 'Hotel Discovery Engine', 'Dynamic Journey Composer', 'Digital Itinerary Sync', 'Global Flight Route Map'],
    client: 'AEROVIA TRAVEL TECHNOLOGIES',
  },
  {
    id: 'luxury-spa-wellness',
    projectNumber: 75,
    title: 'VELORA — Private Wellness & Recovery Sanctuary',
    category: 'Luxury Spa / Wellness',
    description: 'Ultra-luxury digital sanctuary and restorative wellness retreat featuring sensory intention selectors, 20+ specialized rituals, 7-stage unhurried journeys, private 145m² wellness pavilions, and bespoke thermal progression engineered in AED.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    metrics: '145m² Private Pavilions • 100% Acoustic Stillness • 5 Calibrated Thermal Stages',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Framer Motion', 'Intention Curation Engine', '5-Step Sovereign Reservation Flow', 'Architectural Hydrotherapy Journey', 'Smart Wellness Match Engine', 'Member Sanctuary Portal'],
    client: 'VELORA SANCTUARY & RETREATS',
  },
  {
    id: 'cold-storage-warehousing',
    projectNumber: 76,
    title: 'FROSTVAULT — Intelligent Cold Chain Infrastructure & Smart Warehouse Management',
    category: 'Cold Storage & Warehousing',
    description: 'Sub-zero multi-zone cold storage and intelligent warehouse operating platform featuring digital twin floor mapping, NIST multi-sensor mesh telemetry, automated AGV retrieval, and predictive anomaly tripwires.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    metrics: '±0.2°C Thermal Stability • 25,000 Pallet Slots • 99.98% Telemetry Uptime',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Framer Motion', 'Digital Twin Floor Map', 'Live Operations Telemetry', 'Smart Anomaly Alert Engine', '20+ SKU Lot Tracking', 'Multi-Step Capacity Quoting'],
    client: 'FROSTVAULT COLD LOGISTICS',
  },
  {
    id: 'printing-company',
    projectNumber: 77,
    title: 'PRESSORA — Precision Print & Brand Production',
    category: 'Printing & Packaging',
    description: 'Commercial print manufacturing and brand collateral platform featuring interactive 3D box configurators, carbonless NCR book generators, automated vector preflight verification, and UAE-wide production dispatch.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80',
    metrics: '24 Custom Products • 450k Impressions/day • < 1.5 ΔE Color Precision',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Framer Motion', '3D Packaging Studio', 'Interactive Preflight Engine', 'Dynamic Pricing Matrix', '24 Product Catalog', '4-Step Commercial Checkout'],
    client: 'PRESSORA PRINT LABS',
  },
  {
    id: 'glamping-camping',
    projectNumber: 78,
    title: 'EMBERWILD — Luxury Wilderness Stays & Outdoor Experiences',
    category: 'Glamping & Camping',
    description: 'Curated luxury wilderness booking ecosystem featuring 24 architectural geodesic domes, cedar cabins, and desert pavilions across the UAE with interactive 3D stay showroom, escape itinerary planner, and offline digital trip pass.',
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80',
    metrics: '24 Unique Wilderness Stays • 1,400m Altitude Escapes • 100% Off-Grid Solar',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Framer Motion', 'The Wild Finder Discovery', 'Interactive Stay Cross-Section', 'Experience Builder', 'Offline Digital Trip Pass', 'Closable Trip Bag Drawer'],
    client: 'EMBERWILD HOSPITALITY',
  },
  {
    id: 'gaming',
    projectNumber: 79,
    title: 'NEXARA — The Next Generation Gaming Universe',
    category: 'Gaming & Esports',
    description: 'Connected digital gaming ecosystem and competitive platform featuring 24 cross-platform titles, unified player identity and XP progression, tournament arena with AED 1,000,000+ prize pools, live match center simulation, and demo digital store.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
    metrics: '24 Connected Games • 20+ Active Tournaments • 4.2ms Dubai Cloud Ping',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Framer Motion', 'Nexara Gate World Portal', 'Player Progression & Level 42 XP', 'Live Match Center Simulation', '20+ Global Leaderboard', 'Loadout Digital Market'],
    client: 'NEXARA STUDIOS',
  },
  {
    id: 'artisan-bakery',
    projectNumber: 80,
    title: 'FLAME & FLOUR — Artisan Baking House & Digital Bakery Experience',
    category: 'Artisan Bakery',
    description: 'Slow-fermentation culinary commerce platform with 24 handcrafted sourdough, viennoiserie, and cake records, 6-step interactive box builder, custom cake atelier configurator, and live stone hearth oven telemetry simulation in Dubai & Abu Dhabi, UAE.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    metrics: '24 Crafted Bakes • 36-Hr Cold Fermentation • 245°C Refractory Hearth',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Framer Motion', 'Digital Bakery Counter', '6-Step Box Builder', 'Custom Cake Studio', 'Inside The Oven Telemetry', 'Live Bake Tracker FF-2084'],
    client: 'FLAME & FLOUR ATELIER',
  },
  {
    id: 'consumer-electronics',
    projectNumber: 81,
    title: 'AETHERA — Luxury Consumer Electronics & Gadgets Atelier',
    category: 'Consumer Electronics & Luxury Gadgets',
    description: 'Cinematic digital commerce and technology showroom featuring 210+ unique flagship gadgets across 40 categories, interactive 3D product showcase, ecosystem setup builder, instant filter matrix, and UAE luxury express delivery in Dubai & Abu Dhabi, UAE.',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1200&q=80',
    metrics: '210+ Flagship Gadgets • 40 Tech Categories • 2-Year UAE VIP Warranty',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Framer Motion', 'Living Showcase 3D', '40-Category Matrix', 'Ecosystem Setup Builder', 'Side-by-Side Comparator', 'Express UAE Checkout'],
    client: 'AETHERA CONSUMER ELECTRONICS DUBAI',
  },
  {
    id: 'luxury-furniture',
    projectNumber: 82,
    title: 'FORMA ATELIER — Luxury Furniture & Architectural Living',
    category: 'Luxury Furniture & Interior Living',
    description: 'Cinematic architectural furniture showroom and digital commerce platform featuring 216+ unique heirloom furniture pieces across 62 categories, interactive Before/After room transformation slider, material explorer, bespoke customizer studio, and UAE white-glove delivery in Dubai & Abu Dhabi, UAE.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    metrics: '216+ Unique Furniture Works • 62 Categories • 5-Year UAE Structural Warranty',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Framer Motion', 'Before/After Slider', 'Material Matrix Studio', 'Digital Showroom Explorer', 'Bespoke Customizer', 'UAE White-Glove Checkout'],
    client: 'FORMA ATELIER DUBAI & ABU DHABI',
  },
  {
    id: 'security-guard-services',
    projectNumber: 83,
    title: 'AEGIS SOVEREIGN — Security & Guard Services Operations Platform',
    category: 'Security & Guard Services',
    description: 'Cinematic next-generation security command center and executive protection platform featuring live SOC operations console, 10 SIRA-certified service scopes, 4-step risk assessment wizard, UAE emirate coverage matrix, and 24/7 day-to-night surveillance cycle across Dubai, Abu Dhabi, and Northern Emirates.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    metrics: '10 Security Disciplines • SIRA Grade-A Certified • 99.98% SLA Uptime',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Framer Motion', 'Interactive Radar HUD', 'Live SOC Command Console', '4-Step Risk Assessment', '7 Emirates Coverage Matrix', 'Day-to-Night Transition'],
    client: 'AEGIS SOVEREIGN SECURITY DUBAI',
  },
  {
    id: 'typing-center-government-services',
    projectNumber: 84,
    title: 'SANAD — UAE Government Services & Digital Typing Hub',
    category: 'Government Services & Typing Center',
    description: 'Cinematic next-generation UAE government services digital platform featuring full bilingual EN/AR RTL support, live application tracking desk, transparent fee calculator (Statutory Gov Fees vs Typing Fees), 4-step smart service finder wizard, interactive document checker, dedicated Emirates ID & Tasheel labour modules, and B2B corporate PRO operations console across all 7 Emirates.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    metrics: '25+ Certified Services • Full EN/AR RTL • 100% Fee Transparency',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Framer Motion', 'Bilingual EN/AR RTL Engine', 'Live Application Tracker Desk', 'Transparent Gov/Typing Fee Calculator', 'Smart Service Wizard', 'Corporate PRO Dashboard'],
    client: 'SANAD GOVERNMENT SERVICES DUBAI & ABU DHABI',
  },
  {
    id: 'flavors',
    projectNumber: 85,
    title: 'FLAVORS — Premium Sweets & Bakers Bangladesh',
    category: 'Food & Beverage E-Commerce',
    description: 'Full-stack premium food-commerce platform for FLAVORS — Bangladesh\'s leading sweets & bakery brand. Features 15-branch selector, 200+ products, Custom Cake Builder, Delivery & Pickup system, Corporate ordering, BDT pricing, and cinematic brand storytelling across a fully animated Next.js experience.',
    image: 'https://loremflickr.com/1200/800/cake,pastry?lock=200',
    metrics: '15 Branches • 200+ Products • Full Commerce System',
    technologies: ['Next.js 16', 'TypeScript', 'Framer Motion', 'Branch Selector System', 'Custom Cake Builder', 'BDT Currency', 'Cart & Checkout', 'Corporate Orders'],
    client: 'FLAVORS PREMIUM SWEETS & BAKERS BANGLADESH',
    slug: 'flavors',
    featured: true,
    featuredRank: 9,
    published: true,
    liveUrl: '/projects/flavors',
    meta: { market: 'Bangladesh', role: 'Full Commerce Platform', year: '2026' },
  },
  {
    id: 'dubai-gcc-reefer-logistics',
    projectNumber: 86,
    title: 'KHALEEJ REEFER — Dubai to GCC 25-Ton Reefer Logistics Platform',
    category: 'Cold-Chain & Reefer Logistics',
    description: 'Cinematic B2B logistics infrastructure platform for 25-Ton refrigerated road transport from Dubai (Al Aweer & JAFZA) to Saudi Arabia, Qatar, Kuwait, Bahrain, Oman, and Syria. Features live satellite telemetry console, interactive -18°C to +4°C temperature simulator, 20-unit dedicated fleet matrix, visual border crossing timeline, interactive route scheduler, and transport quote configurator.',
    image: '/images/reefer/hero-truck.jpg',
    metrics: '20 Dedicated Units • 25-Ton Capacity • -18°C → +4°C Dual-Temp',
    technologies: ['Next.js 16', 'Tailwind CSS', 'Framer Motion', 'Carrier Transicold Telemetry', 'Dual-Zone Thermal Simulator', 'GCC Border Crossing Engine', 'Interactive 20-Unit Fleet Matrix', 'Instant Rate Configurator'],
    client: 'KHALEEJ REEFER LOGISTICS DUBAI',
    slug: 'dubai-gcc-reefer-logistics',
    featured: true,
    featuredRank: 10,
    published: true,
    liveUrl: '/work/dubai-gcc-reefer-logistics',
    meta: { market: 'UAE & GCC', role: 'B2B Logistics Infrastructure Platform', year: '2026' },
  },
  {
    id: 'frozen-supply',
    projectNumber: 87,
    title: 'FROZEN SUPPLY CO. — UAE Commercial Cold-Chain & Foodservice Platform',
    category: 'Cold-Chain & Foodservice Supply',
    description: 'Cinematic B2B cold-chain procurement and commercial foodservice platform with 216+ certified frozen food SKUs across 8 categories, interactive 6-stage cold-chain temperature telemetry (-25°C to -18°C), multi-location B2B supply request builder, instant bulk pricing engine, side-by-side product comparator, and dedicated delivery routes across Dubai, Abu Dhabi, and Northern Emirates.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    metrics: '216+ Commercial SKUs • -25°C to -18°C Telemetry • 2-Hour UAE Metro Dispatch',
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Framer Motion', '216+ Item B2B Catalog', 'Cold-Chain Telemetry Simulator', 'Multi-SKU Request Builder', 'Product Comparison Matrix', 'GCC Cold-Vault Dispatch'],
    client: 'FROZEN SUPPLY CO. UAE',
    slug: 'frozen-supply',
    featured: true,
    featuredRank: 1,
    published: true,
    liveUrl: '/work/frozen-supply',
    meta: { market: 'UAE & GCC', role: 'Commercial Cold-Chain & Foodservice Platform', year: '2026' },
  },
  {
    id: 'uae-supermarket',
    projectNumber: 88,
    title: 'AL MIRQAB HYPERMARKET — 2,530+ Products UAE Digital Hypermarket Platform',
    category: 'E-Commerce & Digital Hypermarket',
    description: 'Production-quality flagship UAE digital hypermarket inspired by GCC commercial retail benchmarks, combining 2,530+ product discovery across 40 aisles, full English & Arabic bilingual RTL architecture, AED affordable everyday pricing, multi-step express cold-chain delivery checkout, family value packs, live search autocomplete, and intelligent price filters.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    metrics: '2,530+ Products • 40 Aisles • 45-60 Min Express Delivery • Full EN/AR RTL',
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Bilingual EN/AR RTL Engine', '2,530+ Item JSON Catalog', 'Live Search Autocomplete', 'Free Shipping Threshold Meter', 'Multi-Step UAE Checkout', 'Tabby & Apple Pay'],
    client: 'AL MIRQAB HYPERMARKET UAE',
    slug: 'uae-supermarket',
    featured: true,
    featuredRank: 2,
    published: true,
    liveUrl: '/work/uae-supermarket',
    meta: { market: 'United Arab Emirates', role: 'Flagship Digital Hypermarket Platform', year: '2026' },
  },
  {
    id: 'invoice-generator',
    projectNumber: 89,
    title: 'UAE Multi-Industry Invoicing ERP & FTA Tax Billing Platform',
    category: 'Corporate & Legal',
    description: 'Enterprise UAE FTA-compliant bilingual tax invoice generator and business receivables ERP with automated Arabic & English Tafqeet amount-in-words converter, pixel-perfect 1:1 printed tax invoice engine, dual-mode PIN security, dynamic payment reconciliations, customer ledgers, and instant PDF/Print export.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    metrics: 'FTA Compliant • Multi-Industry Dataset • Dynamic Tafqeet • Aging Ledger • Dual PIN Auth',
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'FTA UAE Tax Standard', 'Arabic Tafqeet Engine', 'PDF Generation', 'PIN Security', 'Receivables Ledger'],
    client: 'UAE Commercial Enterprises (B2B SaaS)',
    slug: 'invoice-generator',
    featured: true,
    featuredRank: 3,
    published: true,
    liveUrl: '/projects/invoice-generator',
    meta: { market: 'United Arab Emirates', role: 'Flagship Tax Invoicing & ERP Platform', year: '2026' },
  },
  {
    id: 'restaurant-instant-bill',
    projectNumber: 90,
    title: 'RESTAURANT INSTANT BILL — UAE Commercial Touchscreen POS & High-Speed Billing Platform',
    category: 'Food & Beverage & Hospitality POS',
    description: 'Commercial UAE restaurant point-of-sale and instant billing engine designed for high-volume restaurants, cafes, and hospitality venues. Featuring 105+ authentic Arabic & English menu items, real-time 16-table visual floor plan, live Kitchen Display System (KDS), FTA-compliant Simplified Tax Invoices with ZATCA/FTA QR code, instant change calculator, partial payments, dual-language RTL switching, and thermal 80mm/PDF printing.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    metrics: '105+ Dishes • 16 Tables • Instant KDS • 80mm Thermal Receipt • Native EN/AR RTL • FTA Compliant',
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Native Arabic RTL', 'FTA Simplified Tax Invoice', 'Kitchen Display KDS', 'Table Visualizer', 'Thermal Receipt Engine', 'AED Multi-Tender'],
    client: 'AL DIWAN RESTAURANT & HOSPITALITY GROUP (DUBAI)',
    slug: 'restaurant-instant-bill',
    featured: true,
    featuredRank: 2,
    published: true,
    liveUrl: '/work/restaurant-instant-bill',
    meta: { market: 'United Arab Emirates', role: 'Commercial Restaurant POS & Billing Engine', year: '2026' },
  },
  {
    id: 'universal-invoice-billing',
    projectNumber: 91,
    title: 'UNIVERSAL INVOICE & BILLING — Classic Premium Financial Operations & Multi-Currency SaaS',
    category: 'Corporate & Legal',
    description: 'Enterprise UAE and Global Universal Invoice & Billing platform designed for CEOs, CFOs, and business owners. Featuring a Classic Premium private-banking dashboard, 14 international languages with vector SVG flags and native Arabic RTL, multi-currency ledger, instant A4 vector PDF generation, multi-channel WhatsApp/Email share, and live VAT compliance.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    metrics: '14 Languages (RTL) • Multi-Currency • Instant Vector A4 PDF • 4-KPI Luxury Matrix • VAT Compliance',
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Vector SVG Flags', 'Native Arabic RTL', 'Prisma ORM', 'A4 PDF Engine', 'WhatsApp API', 'Multi-Currency Ledger'],
    client: 'COMMERCIAL ENTERPRISES & SAAS TENANTS (UAE & GLOBAL)',
    slug: 'universal-invoice-billing',
    featured: true,
    featuredRank: 1,
    published: true,
    liveUrl: '/work/universal-invoice-billing',
    meta: { market: 'United Arab Emirates & Global', role: 'Enterprise Financial SaaS & Invoicing Platform', year: '2026' },
  },
  {
    id: 'retail-pos',
    projectNumber: 99,
    title: 'UNIVERSAL RETAIL POS — Premium Point of Sale & Management System',
    category: 'Retail & Point of Sale',
    description: 'A comprehensive, multi-lingual Retail POS system featuring a modern touch interface, dynamic inventory management, shift tracking, and integrated analytics for premium UAE retail operations.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
    metrics: 'Multi-Lingual (RTL) • Multi-Currency • Shift Management • Real-time Inventory • Receipt Printer',
    technologies: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Prisma ORM', 'React Context', 'Thermal Print Engine'],
    client: 'UNIVERSAL RETAIL UAE',
    slug: 'retail-pos',
    featured: true,
    featuredRank: 2,
    published: true,
    liveUrl: '/work/retail-pos',
    meta: { market: 'United Arab Emirates & GCC', role: 'Premium Point of Sale System', year: '2026' }
  }
];

// Top 20 Featured Projects Ranking Architecture
export const TOP_20_FEATURED_RANKS: Record<string, number> = {
  'universal-invoice-billing': 1,
  'retail-pos': 2,
  'restaurant-instant-bill': 3,
  'invoice-generator': 4,
  'frozen-supply': 5,
  'uae-supermarket': 6,
  'womens-abaya': 7,
  'real-estate-lead-platform': 8,
  'corporate-law-firm': 9,
  'artificial-intelligence': 10,
  'car-rental': 11,
  'restaurant-cafe': 12,
  'superyacht-charter': 13,
  'perfume-fragrance': 14,
  'luxury-real-estate-development': 15,
  'business-center-serviced-offices': 16,
  'holiday-home-management': 17,
  'car-detailing-ceramic-coating': 18,
  'training-education-institute': 19,
  'luxury-jewelry': 20,
};

// Decorate project items with slug, published status, and featured rank
SELECTED_WORK.forEach((project) => {
  project.slug = project.id;
  project.published = true;
  const rank = TOP_20_FEATURED_RANKS[project.id];
  if (rank !== undefined) {
    project.featured = true;
    project.featuredRank = rank;
  } else {
    project.featured = false;
  }
});

// Helper: Get Top flagship projects for the homepage
export function getFeaturedProjects(limit = 12): ProjectItem[] {
  const seen = new Set<string>();
  const result: ProjectItem[] = [];
  const sorted = SELECTED_WORK
    .filter((p) => p.published !== false && p.featured && p.featuredRank !== undefined)
    .sort((a, b) => (a.featuredRank ?? 999) - (b.featuredRank ?? 999));

  for (const project of sorted) {
    if (!seen.has(project.id)) {
      seen.add(project.id);
      result.push(project);
    }
    if (result.length === limit) break;
  }

  return result;
}

// Helper: Get Top 20 featured projects for the work archive
export function getTop20Projects(): ProjectItem[] {
  return SELECTED_WORK
    .filter((p) => p.published !== false && p.featured && p.featuredRank !== undefined)
    .sort((a, b) => (a.featuredRank ?? 999) - (b.featuredRank ?? 999))
    .slice(0, 20);
}

// Helper: Get all published projects, featured first
export function getAllProjects(): ProjectItem[] {
  return SELECTED_WORK
    .filter((p) => p.published !== false)
    .sort((a, b) => {
      const rankA = a.featuredRank ?? 999;
      const rankB = b.featuredRank ?? 999;
      if (rankA !== rankB) return rankA - rankB;
      return a.projectNumber - b.projectNumber;
    });
}

/**
 * Safely parses a search query to detect if it is an exact project number lookup.
 * Handles leading zeros ("069", "0069", "068"), optional "#" / "no." prefix ("#69", "#069"),
 * and leading/trailing whitespace ("  69  ").
 * Returns the parsed positive integer or null if query is normal text or invalid.
 */
export function parseProjectNumberQuery(rawQuery: string): number | null {
  if (!rawQuery) return null;
  const trimmed = rawQuery.trim();
  if (!trimmed) return null;

  // Strip optional '#' or 'no.' prefix: e.g., "#69", "#068", "no. 69", "No 69"
  const clean = trimmed.replace(/^(#|no\.?\s*)/i, '').trim();

  // Must consist purely of 1 or more numeric digits (no decimals, no letters)
  if (/^\d+$/.test(clean)) {
    const parsed = parseInt(clean, 10);
    if (!isNaN(parsed) && parsed > 0) {
      return parsed;
    }
  }

  return null;
}

// Helper: Find a single project by its exact project number
export function findProjectByNumber(num: number): ProjectItem | undefined {
  return SELECTED_WORK.find((p) => p.published !== false && p.projectNumber === num);
}

/**
 * Dynamic flagship shortcut item for navigation dropdowns and HUDs.
 */
export interface FlagshipShortcut {
  num: string;
  title: string;
  category: string;
  href: string;
  accent: string;
  tag: string;
}

const FLAGSHIP_ACCENTS = [
  'from-amber-500 to-orange-600',
  'from-emerald-500 to-teal-600',
  'from-blue-500 to-cyan-500',
  'from-sky-500 to-indigo-500',
  'from-purple-500 to-pink-500',
  'from-rose-500 to-amber-600',
];

/**
 * Returns dynamic flagship shortcuts derived from the newest published projects in SELECTED_WORK.
 * Automatically stays updated whenever a new project is added.
 */
export function getDynamicFlagshipShortcuts(limit = 4): FlagshipShortcut[] {
  const latest = [...SELECTED_WORK]
    .filter((p) => p.published !== false)
    .sort((a, b) => b.projectNumber - a.projectNumber)
    .slice(0, limit);

  return latest.map((p, index) => {
    const num = `#${p.projectNumber < 10 ? '0' + p.projectNumber : p.projectNumber}`;
    let title = p.title.split(/—|-|:/)[0].trim();
    if (title.length > 24) {
      title = title.slice(0, 22) + '...';
    }

    const cat = p.category.split('&')[0].trim();

    let tag = 'FLAGSHIP';
    if (index === 0) {
      tag = 'NEW FLAGSHIP';
    } else {
      const catLower = p.category.toLowerCase();
      if (catLower.includes('supermarket') || catLower.includes('commerce') || catLower.includes('bakery') || catLower.includes('sweets')) {
        tag = 'E-COMMERCE';
      } else if (catLower.includes('logistics') || catLower.includes('freight') || catLower.includes('reefer')) {
        tag = 'GCC LOGISTICS';
      } else if (catLower.includes('gaming') || catLower.includes('esports')) {
        tag = 'GAMING XP';
      } else if (catLower.includes('government') || catLower.includes('typing')) {
        tag = 'GOV TECH';
      } else if (catLower.includes('security') || catLower.includes('protection')) {
        tag = 'CYBER & OPS';
      } else if (catLower.includes('furniture') || catLower.includes('living')) {
        tag = 'LUXURY LIVING';
      } else if (catLower.includes('electronics') || catLower.includes('gadgets')) {
        tag = 'FLAGSHIP TECH';
      } else if (catLower.includes('aviation') || catLower.includes('jet')) {
        tag = 'ULTRA LUXURY';
      } else if (catLower.includes('real estate') || catLower.includes('proptech')) {
        tag = 'PROPTECH';
      } else {
        tag = cat.slice(0, 14).toUpperCase();
      }
    }

    return {
      num,
      title,
      category: p.category.length > 26 ? p.category.slice(0, 24) + '...' : p.category,
      href: p.liveUrl || `/work/${p.slug || p.id}`,
      accent: FLAGSHIP_ACCENTS[index % FLAGSHIP_ACCENTS.length],
      tag,
    };
  });
}

/**
 * Dynamic featured showcases for Hero Interactive Radar / Showcase Tab
 */
export interface HeroShowcaseItem {
  num: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  image: string;
  metrics: string;
  stack: string[];
  href: string;
}

export function getDynamicHeroShowcases(limit = 4): HeroShowcaseItem[] {
  const latest = [...SELECTED_WORK]
    .filter((p) => p.published !== false)
    .sort((a, b) => b.projectNumber - a.projectNumber)
    .slice(0, limit);

  return latest.map((p) => ({
    num: `#${p.projectNumber < 10 ? '0' + p.projectNumber : p.projectNumber}`,
    slug: p.slug || p.id,
    title: p.title.split(/—|-|:/)[0].trim(),
    tagline: p.description.split('.')[0].trim() || p.category,
    category: p.category,
    image: p.image || 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    metrics: p.metrics,
    stack: p.technologies.slice(0, 4),
    href: p.liveUrl || `/work/${p.slug || p.id}`,
  }));
}

export const WHY_WORK_WITH_US = [
  {
    icon: "Crown",
    title: "Premium by Design",
    description: "Every interface is crafted specifically for your brand. No generic templates or uninspired layouts."
  },
  {
    icon: "Activity",
    title: "Built for Speed",
    description: "Performance-first architecture engineered for sub-second page loads and 95+ Lighthouse benchmark scores."
  },
  {
    icon: "Cpu",
    title: "AI-Powered",
    description: "Intelligent automation and custom LLM agents designed around real business workflows to multiply efficiency."
  },
  {
    icon: "TrendingUp",
    title: "Conversion Focused",
    description: "Every UX element, copy rhythm, and call-to-action is engineered to convert visitors into high-value clients."
  },
  {
    icon: "ShieldCheck",
    title: "Scalable Technology",
    description: "Future-proof cloud architecture on Next.js, Node, and AWS that effortlessly scales with your company."
  },
  {
    icon: "Handshake",
    title: "Long-Term Partnership",
    description: "Launch is only the beginning. We provide ongoing engineering, performance tuning, and 24/7 support."
  }
];

export const DELIVERY_ENGINE_STEPS = [
  {
    number: "01",
    title: "Discovery & Alignment",
    subtitle: "Strategy, Specs & Scope",
    description: "We audit your business goals, target audience, technical requirements, and competitive landscape to build a precise project roadmap."
  },
  {
    number: "02",
    title: "UX & Figma Interface Design",
    subtitle: "High-Fidelity Interactive Wireframes",
    description: "Our design team crafts bespoke Figma design tokens, luxury visual layouts, and interactive prototypes for your review."
  },
  {
    number: "03",
    title: "Full-Stack Development",
    subtitle: "Next.js & API Engineering",
    description: "We write clean, modular, typed code backed by modern CI/CD automation, serverless infrastructure, and fast database queries."
  },
  {
    number: "04",
    title: "Testing, Launch & Support",
    subtitle: "QA, Security & Post-Launch Ops",
    description: "Rigorous cross-device QA, Lighthouse optimization, domain/SSL configuration, and 30-day post-launch engineering support."
  }
];

export const CORE_CAPABILITIES = [
  {
    number: "01",
    title: "Ultra Performance",
    description: "Static generation, edge caching, and image optimization for near-instantaneous global load times."
  },
  {
    number: "02",
    title: "Bespoke Aesthetics",
    description: "Tailored micro-interactions, dark mode glassmorphism, and editorial typography that convey prestige."
  },
  {
    number: "03",
    title: "Advanced AI Bots",
    description: "Custom OpenAI RAG integration to automate customer support, lead qualification, and internal ops."
  },
  {
    number: "04",
    title: "Security By Design",
    description: "Enterprise-grade SSL, sanitized data inputs, CORS protection, and secure OAuth/JWT authentication."
  },
  {
    number: "05",
    title: "ROI-Focused SEO",
    description: "Semantic HTML5 structure, structured JSON-LD schemas, OpenGraph meta, and speed optimization for top Google rankings."
  },
  {
    number: "06",
    title: "Bespoke Maintenance",
    description: "Continuous monitoring, proactive security updates, uptime guarantees, and monthly performance reports."
  }
];

export const RESULTS_METRICS = [
  { value: `${SELECTED_WORK.length}+`, label: "Projects Delivered", description: "Flagship UAE Platforms" },
  { value: "98+", label: "Performance Score", description: "Average Lighthouse Benchmark" },
  { value: "24/7", label: "Dedicated Support", description: "Engineering Response Commitment" },
  { value: "30-Day", label: "Post-Launch Warranty", description: "Complimentary Optimization" }
];

export const DETAILED_CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-1",
    title: "Sample Case Study: High-Density Supply Chain Dispatch Portal",
    client: "Concept Client A",
    challenge: "Sample challenge: Legacy portal suffered from slow page loads and fragmented tracking systems.",
    strategy: "Sample strategy: Architected a modular Next.js App Router frontend with real-time WebSocket telematics.",
    solution: "Sample solution: High-contrast dark dashboard with live status telematics and instant dispatch updates.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "WebSockets"],
    outcome: "Sample outcome: Reduced average page response time to <50ms with 99.99% uptime.",
    metrics: [
      { label: "Target Speed", value: "<50ms" },
      { label: "Efficiency", value: "+30%" },
      { label: "Lighthouse", value: "99/100" }
    ]
  },
  {
    id: "cs-2",
    title: "Sample Case Study: Global E-Commerce Storefront",
    client: "Concept Client B",
    challenge: "Sample challenge: Monolithic e-commerce platform had high checkout drop-offs on mobile.",
    strategy: "Sample strategy: Migrated to headless Next.js storefront powered by GraphQL Storefront API.",
    solution: "Sample solution: Sub-second checkout flow with localized multi-currency support.",
    technologies: ["Next.js", "GraphQL", "Shopify API", "Stripe", "Tailwind CSS"],
    outcome: "Sample outcome: Increased mobile conversion rate by 2.4x while lowering bounce rate.",
    metrics: [
      { label: "Conversion", value: "+240%" },
      { label: "Checkout", value: "<1.2s" },
      { label: "Score", value: "98/100" }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    quote: "Sample Testimonial: The digital experience transformed our customer acquisition completely. Exceptional speed and design quality.",
    clientName: "Alex Vance (Placeholder)",
    role: "VP of Product",
    company: "Concept Growth Group",
    rating: 5
  },
  {
    id: "t-2",
    quote: "Sample Testimonial: Their engineering team delivered our web app ahead of schedule with flawless Lighthouse performance scores.",
    clientName: "Elena Rostova (Placeholder)",
    role: "Chief Technology Officer",
    company: "Sample Enterprise Labs",
    rating: 5
  }
];

export const TECH_ECOSYSTEM = [
  {
    category: "Modern Web & Frontend",
    description: "Component-driven, ultra-performant client interfaces.",
    skills: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Modern Web Technologies"]
  },
  {
    category: "Backend, APIs & Node.js",
    description: "Robust server infrastructure and data pipelines.",
    skills: ["Node.js", "REST & GraphQL APIs", "Serverless Functions", "Edge Computing"]
  },
  {
    category: "AI & Intelligent Automation",
    description: "Cognitive capabilities integrated into business ops.",
    skills: ["OpenAI API", "Custom RAG Pipelines", "Autonomous AI Agents", "Workflow Automation"]
  },
  {
    category: "Cloud & Infrastructure",
    description: "Global low-latency delivery and UAE isolation.",
    skills: ["AWS Cloud", "Edge CDNs", "Sub-50ms Routing", "UAE Cloud Isolation"]
  },
  {
    category: "Databases & Data Layer",
    description: "Type-safe persistence and ultra-fast caching.",
    skills: ["PostgreSQL", "Prisma ORM", "Redis Cache", "Vector Embeddings"]
  },
  {
    category: "E-Commerce & CMS Systems",
    description: "Scalable commercial storefronts and backoffice tools.",
    skills: ["Headless E-Commerce", "Shopify Storefront API", "Custom CMS / Admin Systems", "Apple Pay & Stripe"]
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For small businesses & new brands seeking a high-converting digital presence.",
    price: "799 AED",
    numericPrice: 799,
    features: [
      "Custom 5-Page Next.js Website",
      "Responsive Mobile-First Architecture",
      "95+ Google Lighthouse Benchmark",
      "Basic SEO & Social Meta Configuration",
      "Contact & Lead Generation Forms",
      "14 Days Post-Launch Support"
    ],
    ctaText: "Choose Starter →"
  },
  {
    id: "business",
    name: "Business",
    tagline: "For growing companies needing advanced functionality & brand authority.",
    price: "1,499 AED",
    numericPrice: 1499,
    features: [
      "Custom 10+ Page Next.js Web App",
      "Bespoke Figma UX/UI Design System",
      "Headless Content Management (CMS)",
      "Interactive Product / Service Calculators",
      "Advanced SEO & Structured JSON-LD Data",
      "WhatsApp & CRM API Integrations",
      "30 Days Post-Launch Warranty"
    ],
    ctaText: "Choose Business →"
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "For companies requiring custom AI agents, automated workflows & e-commerce.",
    price: "2,499 AED",
    numericPrice: 2499,
    features: [
      "Full Headless Next.js + Shopify / Stripe",
      "Custom 24/7 AI Chatbot & Knowledge RAG",
      "Multi-Language Localization Support",
      "Enterprise AWS / Vercel Edge Setup",
      "Comprehensive Analytics & Telemetry",
      "Priority 24/7 Engineering Support",
      "60 Days Post-Launch Warranty"
    ],
    ctaText: "Choose Premium →"
  },
  {
    id: "custom",
    name: "Enterprise Custom",
    tagline: "For complex digital products, multi-tenant SaaS platforms & global brands.",
    price: "Custom Quote",
    features: [
      "Dedicated Full-Stack Engineering Team",
      "Bespoke Microservices Architecture",
      "Custom AI / ML Workflow Automation",
      "SOC-2 Level Security & Compliance",
      "SLA-Backed 99.99% Uptime Guarantee",
      "Continuous Dev & Monthly Retainer"
    ],
    ctaText: "Request Custom Quote"
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "How long does a website or web application project take?",
    answer: "Typical project timelines range from 2 to 4 weeks for Starter & Business applications, and 6 to 12 weeks for complex Enterprise SaaS or AI-integrated platforms. We operate in clear 1-week sprints with transparent milestones."
  },
  {
    id: "faq-2",
    question: "Do you provide domain, hosting, and cloud deployment?",
    answer: "Yes. We configure complete high-performance hosting on Vercel Enterprise, AWS, or Cloudflare Edge, complete with SSL certificates, automated DNS routing, CDN caching, and domain setup."
  },
  {
    id: "faq-3",
    question: "Can you redesign and modernize our existing legacy website?",
    answer: "Absolutely. We specialize in migrating outdated, slow legacy websites (WordPress, PHP, legacy builders) to ultra-fast modern Next.js and React architectures while preserving all existing SEO authority and backlinks."
  },
  {
    id: "faq-4",
    question: "Do you build custom AI agents and chatbots?",
    answer: "Yes. We engineer custom LLM assistants, 24/7 automated support agents, and internal Retrieval-Augmented Generation (RAG) search engines trained on your specific business documentation and CRM databases."
  },
  {
    id: "faq-5",
    question: "Do you provide search engine optimization (SEO)?",
    answer: "Yes. All our web applications are built with ROI-focused technical SEO: semantic HTML5 tags, instant page loads, structured JSON-LD schemas, automated sitemaps, and OpenGraph social previews out of the box."
  },
  {
    id: "faq-6",
    question: "Do you provide engineering support after launch?",
    answer: "Every project includes 14 to 60 days of complimentary post-launch warranty support. We also offer monthly retainer plans for ongoing feature development, security patches, and performance optimization."
  },
  {
    id: "faq-7",
    question: "Can you integrate Shopify, Stripe, CRMs, and custom APIs?",
    answer: "Yes. We build seamless integrations with Shopify Storefront API, Stripe payments, HubSpot, Salesforce, WhatsApp Business API, and any custom REST or GraphQL endpoint."
  },
  {
    id: "faq-8",
    question: "Do you work with international clients outside the UAE?",
    answer: "Yes. We partner with ambitious clients across the GCC, Europe, North America, and worldwide."
  }
];
