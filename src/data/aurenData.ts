export interface AurenService {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  clientProfile: string;
  iconName: string;
  engagementStyle: string;
}

export interface AurenClientProfile {
  id: string;
  name: string;
  description: string;
  priorities: string[];
  relevantServices: string[];
  engagement: string;
  discretionNote: string;
}

export interface AurenLeader {
  name: string;
  role: string;
  experience: string;
  specialization: string;
  image: string;
  bio: string;
}

export interface AurenArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  summary: string;
  content: string;
}

export const AUREN_BRAND = {
  name: 'AUREN CAPITAL',
  tagline: 'Wealth, Structured With Intention.',
  positioning: 'Premium UAE Private Wealth & Financial Advisory',
  whatsapp: 'https://wa.me/971509988440?text=Hello%20AUREN%20CAPITAL,%20I%20would%20like%20to%20request%20a%20private%20wealth%20advisory%20consultation.',
  phone: '+971 4 388 9000',
  email: 'private@aurencapital.ae',
  difcAddress: 'Gate Precinct 4, Level 7, DIFC, Dubai, UAE',
  adgmAddress: 'Al Sila Tower, Level 15, ADGM Square, Abu Dhabi, UAE'
};

export const AUREN_STATS = [
  { label: 'Private Client Assets Advised', value: 'AED 4.6B+' },
  { label: 'Private Clients & Families', value: '140+' },
  { label: 'Family Office Advisory Experience', value: '3 Generations' },
  { label: 'UAE Financial Hubs', value: 'DIFC • ADGM' }
];

export const AUREN_LOGOS = [
  'NOVA GROUP',
  'ALTA HOLDINGS',
  'ORBIT TECH',
  'VANTAGE RETAIL',
  'MERIDIAN CAPITAL',
  'LUMEN INDUSTRIES'
];

export const AUREN_SERVICES: AurenService[] = [
  {
    id: 'wealth-management',
    number: '01',
    title: 'Wealth Management Advisory',
    subtitle: 'Holistic Wealth Preservation, Liquidity Architecture & Asset Structuring',
    description: 'Discreet, bespoke wealth management aligning multi-asset portfolios, liquidity reserves, and generational goals under institutional governance.',
    outcomes: ['Integrated Multi-Asset Portfolio Architecture', 'Liquidity & Cash Reserve Management', 'Capital Preservation & Tail-Risk Protection', 'Quarterly Consolidated Performance Reviews'],
    clientProfile: 'High-Net-Worth Individuals & Successful Entrepreneurs',
    iconName: 'Shield',
    engagementStyle: 'Comprehensive Retainer Advisory'
  },
  {
    id: 'portfolio-structuring',
    number: '02',
    title: 'Investment Portfolio Structuring',
    subtitle: 'Asset Allocation, Multi-Asset Diversification & Manager Selection',
    description: 'Constructing resilient, globally diversified investment portfolios optimized for long-term growth, downside risk mitigation, and currency stability.',
    outcomes: ['Global Multi-Asset Allocation Model', 'Independent Third-Party Manager Due Diligence', 'Tailored Risk-Adjusted Return Framework', 'Currency & Inflation Hedging Strategy'],
    clientProfile: 'Investors seeking disciplined long-term capital growth',
    iconName: 'PieChart',
    engagementStyle: 'Advisory Portfolio Mandate'
  },
  {
    id: 'succession-planning',
    number: '03',
    title: 'Retirement & Succession Planning',
    subtitle: 'Generational Wealth Transfer, Estate Governance & DIFC / ADGM Wills',
    description: 'Structuring clear, legally robust succession frameworks ensuring seamless transfer of wealth, business ownership, and family values to the next generation.',
    outcomes: ['Multi-Generational Wealth Transfer Framework', 'DIFC / ADGM Foundations & Trust Structuring', 'Family Governance & Charter Documentation', 'Estate Liquidity & Tax Efficiency Review'],
    clientProfile: 'Family business owners and multi-generational patriarchs/matriarchs',
    iconName: 'Compass',
    engagementStyle: 'Strategic Legacy Project Mandate'
  },
  {
    id: 'family-office',
    number: '04',
    title: 'Family Office Advisory',
    subtitle: 'Single & Multi-Family Office Setup, Governance & Consolidated Reporting',
    description: 'Designing bespoke Family Office structures in DIFC and ADGM, providing aggregated financial reporting, philanthropic structuring, and operational oversight.',
    outcomes: ['DIFC / ADGM Family Office Entity Setup', 'Consolidated Multi-Custodian Wealth Reporting', 'Family Council Governance Framework', 'Next-Gen Financial Education & Onboarding'],
    clientProfile: 'Ultra-High-Net-Worth Families (AED 50M+ Net Worth)',
    iconName: 'Building',
    engagementStyle: 'Retained Family Office Advisory'
  },
  {
    id: 'corporate-finance',
    number: '05',
    title: 'Corporate Finance Advisory',
    subtitle: 'Business Exit Planning, M&A Advisory & Liquidity Event Structuring',
    description: 'Guiding business founders and shareholder groups through pre-sale valuation enhancement, exit structuring, M&A negotiations, and post-sale wealth reinvestment.',
    outcomes: ['Pre-Exit Business Valuation & Margin Audit', 'Transaction Structuring & Shareholder Terms', 'Post-Sale Liquidity Allocation Strategy', 'Founder Tax & Residency Alignment'],
    clientProfile: 'Entrepreneurs planning business sale or partial equity exit within 1–5 years',
    iconName: 'Briefcase',
    engagementStyle: 'Transaction Advisory Mandate'
  },
  {
    id: 'risk-insurance',
    number: '06',
    title: 'Risk & Insurance Planning',
    subtitle: 'Keyperson Protection, High-Limit Life Assurance & Asset Protection',
    description: 'Evaluating balance sheet vulnerabilities, keyperson risks, corporate buy-sell insurance agreements, and high-limit international life coverage.',
    outcomes: ['Comprehensive Asset Vulnerability Audit', 'Keyperson & Shareholder Buy-Sell Coverage', 'Universal Life & Jumbo Asset Protection', 'Cross-Border Creditor Protection Review'],
    clientProfile: 'C-Suite Executives, Business Partners & Asset Owners',
    iconName: 'Lock',
    engagementStyle: 'Risk Audit & Placement Advisory'
  },
  {
    id: 'real-estate-advisory',
    number: '07',
    title: 'Real Estate Investment Advisory',
    subtitle: 'Dubai & Global Commercial Property Allocation & Yield Optimization',
    description: 'Advising on institutional prime residential, commercial office, and industrial real estate allocations, debt financing, and portfolio yield enhancement.',
    outcomes: ['Prime Property Portfolio Yield Audit', 'Commercial SPV Holding Structuring', 'Debt Refinancing & LTV Optimization', 'International Real Estate Tax Efficiency'],
    clientProfile: 'Real Estate Investors & Private Landlords',
    iconName: 'Building2',
    engagementStyle: 'Property Advisory & Advisory Retainer'
  },
  {
    id: 'cross-border-wealth',
    number: '08',
    title: 'Cross-Border Wealth Structuring',
    subtitle: 'Dual-Residency Wealth Alignment, GCC / International Tax & Mobility',
    description: 'Harmonizing multi-jurisdictional assets, Golden Visa residency advantages, and cross-border tax considerations for global families living in the UAE.',
    outcomes: ['Cross-Border Asset Harmonization Plan', 'UAE Golden Visa Wealth Alignment', 'Dual-Tax Residency Protection Review', 'Offshore SPV & Foundation Integration'],
    clientProfile: 'Global Investors, Expat Entrepreneurs & International Families',
    iconName: 'Globe',
    engagementStyle: 'Cross-Border Advisory Project'
  }
];

export const AUREN_CLIENT_PROFILES: AurenClientProfile[] = [
  {
    id: 'entrepreneurs',
    name: 'Entrepreneurs & Business Owners',
    description: 'Business founders preparing for equity liquidation, dividend optimization, and converting corporate cash flow into long-term personal wealth.',
    priorities: ['Pre-exit business valuation enhancement', 'Post-sale liquidity diversification', 'Shareholder buy-sell agreement protection'],
    relevantServices: ['Corporate Finance Advisory', 'Wealth Management Advisory', 'Succession Planning'],
    engagement: 'Collaborative transaction and retained personal wealth advisory',
    discretionNote: 'All advisory engagements strictly governed by non-disclosure agreements.'
  },
  {
    id: 'family-offices',
    name: 'Family Offices & Multi-Gen Families',
    description: 'Prominent regional families requiring consolidated multi-custodian reporting, formal governance charters, and next-generation stewardship.',
    priorities: ['DIFC / ADGM Family Office entity establishment', 'Consolidated global asset reporting', 'Generational succession & family charters'],
    relevantServices: ['Family Office Advisory', 'Retirement & Succession Planning', 'Cross-Border Wealth Structuring'],
    engagement: 'Retained senior advisory presence on family investment committees',
    discretionNote: 'Complete institutional confidentiality across all family branch assets.'
  },
  {
    id: 'executives',
    name: 'Executives & Senior Professionals',
    description: 'C-Suite leaders managing executive stock options, multi-currency compensation, international pension transfers, and wealth preservation.',
    priorities: ['Executive stock option & equity strategy', 'Global tax-efficient wealth accumulation', 'Retirement income modeling'],
    relevantServices: ['Wealth Management Advisory', 'Investment Portfolio Structuring', 'Risk & Insurance Planning'],
    engagement: 'Personalized private banking style advisory retainer',
    discretionNote: 'Flexible quarterly reviews structured around executive travel schedules.'
  },
  {
    id: 'real-estate-investors',
    name: 'Real Estate Investors & SPV Owners',
    description: 'High-net-worth property investors seeking yield optimization, commercial debt refinancing, and SPV holding structures in DIFC or ADGM.',
    priorities: ['Prime real estate yield optimization', 'DIFC / ADGM property SPV holding setups', 'Mortgage debt structuring & LTV management'],
    relevantServices: ['Real Estate Investment Advisory', 'Cross-Border Wealth Structuring', 'Investment Portfolio Structuring'],
    engagement: 'Project-based property portfolio audit and ongoing advisory',
    discretionNote: 'Strict privacy on property ownership and asset valuation records.'
  },
  {
    id: 'heirs',
    name: 'Next-Generation Heirs & Beneficiaries',
    description: 'Next-gen family members assuming leadership of inherited wealth, seeking independent guidance on sustainable growth and modern portfolio strategies.',
    priorities: ['Financial education & portfolio literacy', 'ESG / Impact investment integration', 'Independent second opinion on family assets'],
    relevantServices: ['Investment Portfolio Structuring', 'Wealth Management Advisory', 'Family Office Advisory'],
    engagement: 'Mentorship-focused collaborative financial advisory',
    discretionNote: 'Discreet, objective advice tailored to modern global investment standards.'
  }
];

export const AUREN_CASE_STUDY = {
  clientName: 'A Private UAE Family Office',
  confidentialityNote: 'Name Withheld for Absolute Discretion',
  industry: 'Multi-Generational Real Estate & Trading Family',
  challenge: 'Fragmented wealth across 5 disconnected investment vehicles, zero formal succession documentation, and lack of consolidated reporting created family governance friction.',
  beforeStats: {
    structures: '5 Disconnected Investment Vehicles',
    succession: 'No Formal Succession Framework',
    reporting: 'Fragmented Quarterly Statements'
  },
  afterStats: {
    structures: '1 Unified DIFC Family Office Structure',
    succession: '100% Formal Succession Plan & Charter',
    reporting: 'Consolidated Monthly Dashboard'
  },
  metrics: [
    { label: 'Unified Strategic Architecture', value: '1 Master Plan' },
    { label: 'Family Charter & Succession Coverage', value: '100%' },
    { label: 'Consolidated Performance Reporting', value: 'Monthly' }
  ],
  quote: 'AUREN brought a level of structure and quiet institutional discipline to our family’s wealth that we had not found elsewhere — thoughtful, discreet, and genuinely long-term.',
  author: 'Managing Trustee, Private Family Office (Dubai)'
};

export const AUREN_LEADERS: AurenLeader[] = [
  {
    name: 'Julian Vance-Chatham',
    role: 'Managing Partner & Senior Advisory Director',
    experience: '22+ Years Institutional Wealth Advisory',
    specialization: 'Private Banking Governance, Multi-Asset Allocation & Family Office Advisory',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    bio: 'Former head of private wealth management at a major Zurich private bank, Julian has advised prominent GCC family offices and HNW individuals across Switzerland, Dubai, and Singapore for over two decades.'
  },
  {
    name: 'Amira Al-Husseini',
    role: 'Head of Family Office Advisory & Succession',
    experience: '18+ Years Family Governance',
    specialization: 'DIFC & ADGM Family Office Setup, Family Charters & Cross-Border Wealth',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    bio: 'Specialist in UAE family business succession and DIFC foundation structuring. Amira has drafted over 40 family governance charters and guided multi-generational asset transitions across the Middle East.'
  },
  {
    name: 'Devon Montgomery, CFA',
    role: 'Head of Investment Strategy & Asset Allocation',
    experience: '19+ Years Portfolio Management',
    specialization: 'Global Multi-Asset Portfolios, Risk Mitigation & Private Market Illiquidity',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    bio: 'Chartered Financial Analyst overseeing macro asset allocation, manager selection, and downside risk hedging for HNW private client portfolios in DIFC and ADGM.'
  },
  {
    name: 'Elena Rostova',
    role: 'Head of Corporate Finance & Business Exit Advisory',
    experience: '16+ Years M&A & Private Equity',
    specialization: 'Pre-Exit Business Valuation, Founder Liquidity & Corporate Structuring',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    bio: 'Advises UAE business founders on pre-sale financial optimization, M&A negotiation terms, and post-transaction capital allocation to preserve liquidity across generations.'
  }
];

export const AUREN_ARTICLES: AurenArticle[] = [
  {
    id: 'art-1',
    title: 'Building a Multi-Generational Wealth Strategy in the UAE',
    category: 'Family Office',
    readTime: '6 min read',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    summary: 'Key considerations for establishing a DIFC or ADGM family office structure to protect capital and align multi-generational objectives.',
    content: 'Transitioning wealth from first-generation founders to second and third generations requires more than investment returns — it demands formal governance charters, clear liquidity rules, and institutional entity structures...'
  },
  {
    id: 'art-2',
    title: 'Structuring Wealth Across UAE and International Jurisdictions',
    category: 'Cross-Border',
    readTime: '5 min read',
    date: 'July 2026',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
    summary: 'Harmonizing global real estate holdings, offshore trusts, and UAE Golden Visa wealth advantages into a unified legal framework.',
    content: 'Global families living in Dubai or Abu Dhabi often face fragmented asset reporting across Europe, Asia, and North America. Harmonizing these assets under UAE financial hubs ensures tax efficiency and clarity...'
  },
  {
    id: 'art-3',
    title: 'When Should a Business Founder Prepare for a Liquidity Exit?',
    category: 'Corporate Exit',
    readTime: '7 min read',
    date: 'June 2026',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    summary: 'Why pre-exit financial structuring 24 months prior to a sale maximizes enterprise valuation and founder net proceeds.',
    content: 'Successful business exits are planned years in advance. Auditing working capital, clearing balance sheet liabilities, and structuring shareholder agreements well before M&A negotiations prevents costly transaction friction...'
  }
];

export const AUREN_LOCATIONS = [
  {
    city: 'DUBAI — DIFC',
    building: 'Gate Precinct 4, Level 7',
    district: 'Dubai International Financial Centre, Dubai, UAE',
    purpose: 'Private Wealth Advisory, Family Office & Investment Strategy',
    hours: 'Mon – Fri: 9:00 AM – 6:00 PM (By Private Appointment)',
    phone: '+971 4 388 9000'
  },
  {
    city: 'ABU DHABI — ADGM',
    building: 'Al Sila Tower, Level 15',
    district: 'Abu Dhabi Global Market Square, Al Maryah Island, Abu Dhabi, UAE',
    purpose: 'ADGM Foundation Structuring, Corporate Finance & Governance',
    hours: 'Mon – Fri: 9:00 AM – 6:00 PM (By Private Appointment)',
    phone: '+971 2 688 8000'
  }
];

export const AUREN_FAQS = [
  {
    question: 'Who does AUREN CAPITAL typically advise?',
    answer: 'We advise high-net-worth individuals, multi-generational family offices, successful business entrepreneurs preparing for exit, C-suite executives, and institutional real estate investors seeking discreet, independent private financial advisory.'
  },
  {
    question: 'Is my financial information kept completely confidential?',
    answer: 'Absolute discretion is our core pillar. All discussions, financial statements, and client engagements are protected by comprehensive non-disclosure protocols and private banking level data security standards.'
  },
  {
    question: 'Does AUREN CAPITAL manage investments directly or provide advisory services?',
    answer: 'We provide independent, conflict-free financial and strategic wealth advisory. We assist clients in designing portfolio asset allocation models, evaluating third-party managers, structuring family offices, and executing succession frameworks.'
  },
  {
    question: 'Can you assist in establishing a DIFC or ADGM Family Office structure?',
    answer: 'Yes. We guide families through the regulatory, governance, and legal structuring required to establish Single Family Offices (SFO) or Multi-Family Office platforms in DIFC or ADGM.'
  },
  {
    question: 'How does AUREN CAPITAL assist business owners planning an exit?',
    answer: 'We provide pre-exit corporate valuation audits, shareholder agreement reviews, liquidity planning, and post-sale multi-asset investment structuring to ensure your hard-earned business equity is preserved across generations.'
  },
  {
    question: 'How do I begin a private conversation with a senior advisor?',
    answer: 'You can request a private consultation through our secure online form or contact our Advisory Desk on WhatsApp (+971 50) for a confidential, no-obligation discussion with a Managing Partner.'
  }
];
