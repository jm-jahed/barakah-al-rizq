export interface NexoraService {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  timeline: string;
  iconName: string;
}

export interface NexoraSetupOption {
  id: string;
  name: string;
  bestFor: string;
  startingFeeAED: number;
  features: string[];
  isPopular?: boolean;
}

export interface NexoraIndustry {
  id: string;
  name: string;
  icon: string;
  challenge: string;
  recommendedService: string;
  uaeOpportunity: string;
  clientResult: string;
}

export interface NexoraLeader {
  name: string;
  role: string;
  experience: string;
  specialization: string;
  image: string;
  bio: string;
}

export interface NexoraArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  snippet: string;
}

export const NEXORA_BRAND = {
  name: 'NEXORA BUSINESS',
  tagline: 'Build Smarter. Grow Further.',
  positioning: 'Premium UAE Business Consultancy & Corporate Advisory',
  whatsapp: 'https://wa.me/971509988440?text=Hello%20NEXORA%20Advisor,%20I%20would%20like%20to%20book%20a%20UAE%20business%20consultation.',
  phone: '+971 4 399 8200',
  email: 'advisory@nexorabusiness.ae',
  dubaiAddress: 'Level 38, ICD Brookfield Place, DIFC, Dubai, UAE',
  abuDhabiAddress: 'Level 14, Rosewood Tower, Al Maryah Island, Abu Dhabi, UAE'
};

export const NEXORA_TRUST_STATS = [
  { label: 'Businesses Advised', value: '250+' },
  { label: 'Client Value Supported', value: 'AED 2.4B+' },
  { label: 'Client Retention Rate', value: '98%' },
  { label: 'UAE Market Practice', value: '15+ Yrs' }
];

export const NEXORA_LOGOS = [
  'NOVA GROUP',
  'ALTA HOLDINGS',
  'ORBIT TECH',
  'VANTAGE RETAIL',
  'MERIDIAN CAPITAL',
  'LUMEN INDUSTRIES'
];

export const NEXORA_SETUP_TIERS: NexoraSetupOption[] = [
  {
    id: 'mainland',
    name: 'MAINLAND SETUP',
    bestFor: '100% Direct UAE Local & B2B Market Access',
    startingFeeAED: 12500,
    features: [
      'Commercial / Industrial License Advisory',
      'Economic Development (DED) Coordination',
      'Corporate Banking Dossier Preparation',
      'Physical & Virtual Office Solutions',
      'Unlimited Visa Quotas & PRO Coordination'
    ],
    isPopular: true
  },
  {
    id: 'freezone',
    name: 'FREE ZONE SETUP',
    bestFor: '100% Foreign Ownership & Tax Optimization',
    startingFeeAED: 8900,
    features: [
      'Top-Tier UAE Free Zone Selection (IFZA/DMCC/ADGM)',
      '100% Capital & Profit Repatriation',
      'Flexi-Desk / Smart Office Package',
      'Fast-Track Residence Visa Processing',
      '0% Import/Export Tariff Structuring'
    ]
  },
  {
    id: 'corporate',
    name: 'CORPORATE STRUCTURING',
    bestFor: 'Established Groups, Holding Entities & M&A',
    startingFeeAED: 24000,
    features: [
      'Multi-Entity Holding Company Structuring',
      'DIFC / ADGM Foundation Registration',
      'Asset Protection & Family Office Setup',
      'Corporate Governance Frameworks',
      'Dedicated Partner-Level Lead Advisory'
    ]
  }
];

export const NEXORA_SERVICES: NexoraService[] = [
  {
    id: 'business-setup',
    number: '01',
    title: 'Business Setup & Formation',
    subtitle: 'Mainland, Free Zone & Offshore Company Licensing',
    description: 'End-to-end guidance through activity selection, jurisdiction mapping, trade license issuance, and corporate banking readiness.',
    outcomes: ['Optimized license scope', 'Fast-track visa clearance', 'Bank account approval readiness'],
    timeline: '5 to 10 Working Days',
    iconName: 'Building2'
  },
  {
    id: 'corporate-advisory',
    number: '02',
    title: 'Corporate Structuring & Holding',
    subtitle: 'Asset Protection, Foundations & Governance',
    description: 'Designing resilient corporate ownership structures across DIFC, ADGM, and international hubs for asset protection and tax efficiency.',
    outcomes: ['Ring-fenced liability', 'Inter-company transfer agreements', 'Inheritance & estate planning'],
    timeline: '2 to 4 Weeks',
    iconName: 'ShieldCheck'
  },
  {
    id: 'market-entry',
    number: '03',
    title: 'UAE Market Entry & Strategy',
    subtitle: 'Feasibility, Go-to-Market & Competitor Mapping',
    description: 'Comprehensive market sizing, regulatory compliance auditing, and strategic launch roadmaps for multinationals expanding to the GCC.',
    outcomes: ['Clear regulatory roadmap', 'Local partnership vetting', 'Go-to-market execution plan'],
    timeline: '3 to 6 Weeks',
    iconName: 'Globe2'
  },
  {
    id: 'business-strategy',
    number: '04',
    title: 'Business Strategy & Scaling',
    subtitle: 'Operational Restructuring & Revenue Acceleration',
    description: 'C-suite level advisory identifying operational bottlenecks, optimizing margin structures, and driving top-line UAE growth.',
    outcomes: ['+30% operational efficiency', 'Optimized sales channels', 'Unit economics refinement'],
    timeline: 'Ongoing Advisory',
    iconName: 'TrendingUp'
  },
  {
    id: 'financial-advisory',
    number: '05',
    title: 'Financial & Capital Advisory',
    subtitle: 'Cash Flow Modeling, Valuation & Debt Structuring',
    description: 'Strategic CFO support, working capital optimization, valuation reports, and debt/equity fundraising readiness.',
    outcomes: ['Bankable financial models', 'Refinanced credit lines', 'Investor deck validation'],
    timeline: '2 to 4 Weeks',
    iconName: 'DollarSign'
  },
  {
    id: 'tax-compliance',
    number: '06',
    title: 'Tax & Compliance Advisory',
    subtitle: 'UAE Corporate Tax, VAT & Economic Substance',
    description: 'Navigating the 9% UAE Corporate Tax regime, VAT registration, ESR filing, and Anti-Money Laundering (AML) compliance.',
    outcomes: ['Zero tax penalty audit', 'Clean Corporate Tax classification', 'Automated ESR reporting'],
    timeline: 'Ongoing Compliance',
    iconName: 'FileCheck'
  },
  {
    id: 'pro-services',
    number: '07',
    title: 'Corporate PRO & Government Services',
    subtitle: 'Visa Clearances, MoRE, Immigration & Attestation',
    description: 'Dedicated government relations management handling Investor Visas, Golden Visas, Ministry approvals, and legal translations.',
    outcomes: ['Fast-track VIP processing', '100% document compliance', 'Dedicated PRO account lead'],
    timeline: '24-48 Hour VIP Turnaround',
    iconName: 'Award'
  },
  {
    id: 'growth-expansion',
    number: '08',
    title: 'M&A & Investor Advisory',
    subtitle: 'Mergers, Acquisitions & Venture Investments',
    description: 'Buy-side and sell-side transaction support, financial due diligence, deal negotiation, and post-merger integration.',
    outcomes: ['Maximized deal valuation', 'Thorough risk due diligence', 'Seamless entity consolidation'],
    timeline: '4 to 12 Weeks',
    iconName: 'Briefcase'
  }
];

export const NEXORA_INDUSTRIES: NexoraIndustry[] = [
  {
    id: 'tech',
    name: 'Technology & SaaS',
    icon: 'Cpu',
    challenge: 'Navigating IP protection, cross-border payments, and DIFC/ADGM tech sandbox licenses.',
    recommendedService: 'DIFC Innovation License & ADGM Holding Setup',
    uaeOpportunity: 'Massive VC ecosystem access & 0% personal/capital gains tax incentives.',
    clientResult: 'Raised AED 18M Series A following ADGM holding entity restructuring.'
  },
  {
    id: 'realestate',
    name: 'Real Estate & PropTech',
    icon: 'Building',
    challenge: 'Securing RERA approvals, joint venture structuring, and escrow account setups.',
    recommendedService: 'Corporate Structuring & DED Brokerage Licensing',
    uaeOpportunity: 'Booming Dubai residential/commercial transaction volume (AED 400B+ annual).',
    clientResult: 'Structured AED 120M multi-asset real estate fund entity.'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce & Retail',
    icon: 'ShoppingBag',
    challenge: 'GCC cross-border logistics tariffs, payment gateway integration, and VAT compliance.',
    recommendedService: 'Mainland Fulfillment License & Corporate Tax Advisory',
    uaeOpportunity: 'Highest digital penetration rate in MENA with rapid consumer spending growth.',
    clientResult: 'Reduced operational overhead by 43% for VANTA Retail Group.'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Pharma',
    icon: 'HeartPulse',
    challenge: 'Complex DHA / MOHAP medical facility licensing and practitioner approvals.',
    recommendedService: 'Specialized Healthcare Licensing & PRO Coordination',
    uaeOpportunity: 'Surging demand for private specialist clinics and medical tourism.',
    clientResult: 'Secured full DHA licensing for 3 Dubai medical centers in 45 days.'
  },
  {
    id: 'construction',
    name: 'Construction & EPC',
    icon: 'HardHat',
    challenge: 'Classification licensing, municipal bonding, and subcontractor liability ringfencing.',
    recommendedService: 'Mainland Contracting Setup & Joint Venture Structuring',
    uaeOpportunity: 'Billions in mega-infrastructure and luxury residential projects across UAE.',
    clientResult: 'Structured joint-venture framework for AED 85M infrastructure tender.'
  },
  {
    id: 'hospitality',
    name: 'Hospitality & F&B',
    icon: 'Utensils',
    challenge: 'Food safety approvals, liquor licensing, and high lease liability negotiation.',
    recommendedService: 'DED Restaurant Licensing & Lease Due Diligence',
    uaeOpportunity: 'World-renowned culinary hub attracting millions of international tourists.',
    clientResult: 'Launched 4 luxury dining venues under a unified holding umbrella.'
  },
  {
    id: 'logistics',
    name: 'Logistics & Trade',
    icon: 'Truck',
    challenge: 'Customs code registration, dual-licensing, and warehouse lease compliance.',
    recommendedService: 'Free Zone Trading License & Customs Code Registration',
    uaeOpportunity: 'Strategic location linking Asia, Europe, and Africa via world-class ports.',
    clientResult: 'Reduced import tariff costs by 18% with smart free zone staging.'
  },
  {
    id: 'professional',
    name: 'Professional Services',
    icon: 'Users',
    challenge: 'Professional body registration, PII insurance setup, and client trust accounts.',
    recommendedService: 'Mainland Professional License & Corporate Banking Prep',
    uaeOpportunity: 'Thriving corporate hub requiring specialized advisory, legal, and engineering skills.',
    clientResult: 'Onboarded 25+ expatriate consultants with fast-track Golden Visas.'
  }
];

export const NEXORA_CASE_STUDY = {
  clientName: 'VANTA Retail Group',
  industry: 'E-Commerce & Omnichannel Retail',
  challenge: 'Rapid UAE expansion across Dubai & Abu Dhabi created fragmented operational units, redundant legal fees, and high tax exposure across 3 separate entities.',
  beforeStats: {
    revenue: 'AED 18M Annual',
    overhead: '42% Operational Overhead',
    entities: '3 Separate Fragmented Licenses'
  },
  afterStats: {
    revenue: 'AED 31M Annual',
    overhead: '24% Operational Overhead',
    entities: 'Unified Single Holding Structure'
  },
  metrics: [
    { label: 'Revenue Growth', value: '+72%' },
    { label: 'Operational Complexity', value: '-43%' },
    { label: 'Admin & Legal Expenses', value: '-31%' }
  ],
  quote: 'NEXORA gave us strategic clarity from day one. They did not just sell us a setup package; they restructured our entire UAE operation into a lean holding model that saved us hundreds of thousands of Dirhams.',
  author: 'Omar Rahman, CEO of VANTA Retail Group'
};

export const NEXORA_LEADERS: NexoraLeader[] = [
  {
    name: 'Tariq Al-Mansoori',
    role: 'Managing Partner & Founder',
    experience: '18+ Years Corporate Advisory',
    specialization: 'Government Relations, Sovereign Deals & DIFC/ADGM Structuring',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    bio: 'Former senior advisor at Dubai Development Authority, Tariq has advised over 150 international companies entering the GCC market.'
  },
  {
    name: 'Elena Rostova',
    role: 'Director of Corporate Strategy',
    experience: '14+ Years Strategy Consulting',
    specialization: 'M&A Due Diligence, Market Entry & Revenue Acceleration',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    bio: 'Ex-McKinsey strategy consultant specializing in commercial transformations and cross-border M&A transactions across Europe and the Middle East.'
  },
  {
    name: 'Faisal Al-Hashimi',
    role: 'Head of Tax & Regulatory Compliance',
    experience: '12+ Years Tax Advisory',
    specialization: 'UAE Corporate Tax, VAT & International Economic Substance',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    bio: 'Certified Tax Agent overseeing Corporate Tax filings and ESR reporting for high-net-worth family offices and corporate groups.'
  },
  {
    name: 'Sarah Jenkins',
    role: 'UAE Market Entry Director',
    experience: '10+ Years International Business',
    specialization: 'Free Zone & Mainland Company Formation & Banking Support',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    bio: 'Has successfully guided over 100 Western startups and tech companies through seamless UAE entity setup and VIP banking onboarding.'
  }
];

export const NEXORA_ARTICLES: NexoraArticle[] = [
  {
    id: 'art-1',
    title: 'UAE Business Setup 2026: Mainland vs. Free Zone Comparison Guide',
    category: 'Corporate Structuring',
    readTime: '6 min read',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    snippet: 'Analyze 100% foreign ownership rules, DED commercial advantages, tax classifications, and office requirements before choosing your jurisdiction.'
  },
  {
    id: 'art-2',
    title: 'Structuring a DIFC / ADGM Holding Foundation for UAE Assets',
    category: 'Wealth Protection',
    readTime: '8 min read',
    date: 'July 2026',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
    snippet: 'How family offices and international investors utilize common law financial centers in Dubai and Abu Dhabi to ring-fence global capital.'
  },
  {
    id: 'art-3',
    title: 'UAE Corporate Tax Preparation Checklist for SMEs (9% Threshold)',
    category: 'Tax & Compliance',
    readTime: '5 min read',
    date: 'June 2026',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    snippet: 'Key accounting rules, qualifying free zone person statuses, and transfer pricing requirements to avoid Federal Tax Authority penalties.'
  }
];

export const NEXORA_LOCATIONS = [
  {
    city: 'DUBAI (HEADQUARTERS)',
    building: 'ICD Brookfield Place, Level 38',
    district: 'DIFC Financial District, Dubai, UAE',
    hours: 'Mon – Fri: 8:30 AM – 6:00 PM',
    phone: '+971 4 399 8200',
    type: 'Executive Advisory HQ'
  },
  {
    city: 'ABU DHABI',
    building: 'Rosewood Tower, Level 14',
    district: 'Al Maryah Island, Abu Dhabi, UAE',
    hours: 'Mon – Fri: 8:30 AM – 6:00 PM',
    phone: '+971 2 688 9100',
    type: 'Capital & Sovereign Advisory'
  },
  {
    city: 'SHARJAH',
    building: 'Sharjah Media City Tower B',
    district: 'Al Messaned, Sharjah, UAE',
    hours: 'Mon – Fri: 9:00 AM – 5:00 PM',
    phone: '+971 6 550 4400',
    type: 'SME & Creative Hub'
  },
  {
    city: 'RAS AL KHAIMAH',
    building: 'RAKEZ Compass Coworking HQ',
    district: 'Al Hamra Industrial Zone, RAK, UAE',
    hours: 'Mon – Fri: 9:00 AM – 5:00 PM',
    phone: '+971 7 204 1100',
    type: 'Industrial & Free Zone Hub'
  }
];

export const NEXORA_FAQS = [
  {
    question: 'How long does UAE business setup typically take with NEXORA?',
    answer: 'Free Zone company formation generally takes 3 to 7 working days, while Mainland (DED) company licenses are executed within 5 to 10 working days. Corporate bank account onboarding typically takes 2 to 4 weeks depending on corporate background complexity.'
  },
  {
    question: 'Mainland or Free Zone — which is better for my business?',
    answer: 'Mainland licenses allow unrestricted direct trading across the UAE market and government contracting. Free Zones offer 100% foreign ownership, 0% import/export tariffs, and streamlined setup. NEXORA conducts a strategic jurisdiction assessment to recommend the optimal path.'
  },
  {
    question: 'Do your estimated fee quotes include government fees?',
    answer: 'Our transparent quotes explicitly separate NEXORA Professional Advisory & PRO Fees from official UAE Government / License Issuer fees. Government fees vary based on business activities, visa quotas, and office space selection.'
  },
  {
    question: 'Can NEXORA assist with corporate banking preparation?',
    answer: 'Yes! Corporate bank account rejection is a major bottleneck in the UAE. We prepare institutional-grade compliance dossiers, business plans, proof of funds documentation, and introduce your team directly to senior relationship managers at top UAE banks (ENBD, FAB, Mashreq, Wio).'
  },
  {
    question: 'How do you handle the 9% UAE Corporate Tax compliance?',
    answer: 'Our tax advisory team evaluates your revenue streams to determine Qualifying Free Zone Person (QFZP) status, small business relief eligibility, transfer pricing documentation, and ensures seamless FTA tax return filings.'
  },
  {
    question: 'Can international founders setup a company without visiting Dubai immediately?',
    answer: 'Yes. Company incorporation documents and trade licenses can be processed remotely via digital signature and video verification. A physical visit is only required for medical fitness tests during Emirates ID residence visa processing.'
  }
];
