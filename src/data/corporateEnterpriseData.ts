export interface CorporateDivision {
  id: string;
  number: string;
  name: string;
  tagline: string;
  overview: string;
  aum: string;
  focusAreas: string[];
  metrics: { label: string; value: string }[];
  caseHighlight: string;
  iconName: string;
}

export interface CorporateLeader {
  id: string;
  name: string;
  title: string;
  division: string;
  bio: string;
  credentials: string[];
  boardRoles: string[];
  image: string;
  linkedin: string;
}

export interface CorporateCaseStudy {
  id: string;
  title: string;
  client: string;
  sector: string;
  dealSizeAED: string;
  jurisdiction: string;
  year: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  image: string;
  tags: string[];
}

export interface CorporateOffice {
  city: string;
  country: string;
  hub: string;
  address: string;
  phone: string;
  email: string;
  focus: string;
  coordinates: { x: number; y: number };
}

export interface CorporatePublication {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  author: string;
  downloadSize: string;
}

export const CORPORATE_DIVISIONS: CorporateDivision[] = [
  {
    id: 'capital-advisory',
    number: '01',
    name: 'Strategic Capital & M&A Advisory',
    tagline: 'Cross-border liquidity, sovereign restructuring, and private market capital formation.',
    overview: 'Advising GCC sovereigns, family conglomerates, and ultra-high-net-worth institutions on transformational mergers, divestitures, debt capital markets, and cross-border syndication.',
    aum: 'AED 8.4B Advising Volume',
    focusAreas: [
      'Bespoke M&A Mandates & Deal Structuring',
      'DIFC & ADGM Sovereign Debt Origination',
      'Family Conglomerate Succession & Consolidation',
      'Cross-Border GCC-Asia Investment Corridors'
    ],
    metrics: [
      { label: 'Deals Closed', value: '42+ Mandates' },
      { label: 'Avg Deal Size', value: 'AED 380M' },
      { label: 'Cross-Border Ratio', value: '68%' }
    ],
    caseHighlight: 'Orchestrated the AED 1.4B restructuring and strategic recapitalization of a premier UAE industrial conglomerate.',
    iconName: 'TrendingUp'
  },
  {
    id: 'enterprise-technology',
    number: '02',
    name: 'Sovereign AI & Digital Transformation',
    tagline: 'Enterprise-scale cloud architectures, autonomous systems, and predictive data ecosystems.',
    overview: 'Architecting next-generation cloud infrastructure, sovereign enterprise AI LLMs, and automated workflow orchestrations for national entities and Fortune 500 GCC subsidiaries.',
    aum: 'AED 3.2B Tech Infrastructure',
    focusAreas: [
      'Sovereign AI Integration & Private LLM Deployment',
      'Next.js & Cloud-Native Edge Infrastructure',
      'Zero-Trust Cybersecurity & Cryptographic Architecture',
      'Autonomous ERP & Predictive Supply Chain Systems'
    ],
    metrics: [
      { label: 'Compute Nodes', value: '1,200+ GPUs' },
      { label: 'Latency SLA', value: '< 24ms UAE' },
      { label: 'Cybersecurity SLA', value: '99.999% Uptime' }
    ],
    caseHighlight: 'Deployed a sovereign AI knowledge intelligence graph across 18 governmental & enterprise departments in Abu Dhabi.',
    iconName: 'Cpu'
  },
  {
    id: 'strategic-infrastructure',
    number: '03',
    name: 'Energy Transition & Real Assets',
    tagline: 'Decarbonization, critical utility corridors, and resilient multi-asset infrastructure.',
    overview: 'Direct investment and asset management across solar utility arrays, high-capacity cold storage corridors, and Grade-A institutional logistics parks aligned with the UAE Net-Zero 2050 charter.',
    aum: 'AED 5.1B Asset Portfolio',
    focusAreas: [
      'Grid-Scale Solar & Clean Energy Corridors',
      'Automated Port & Free Zone Logistics Parks',
      'Desalination & Water Security Assets',
      'Institutional Data Center Real Estate'
    ],
    metrics: [
      { label: 'Capacity Deployed', value: '650 MW Solar' },
      { label: 'Sq Ft Managed', value: '4.8M Sq Ft' },
      { label: 'Carbon Reduction', value: '380K MT/yr' }
    ],
    caseHighlight: 'Financed and commissioned a 250MW private industrial solar micro-grid in Dubai Industrial City.',
    iconName: 'Zap'
  },
  {
    id: 'global-trade',
    number: '04',
    name: 'Global Supply Chains & Commodities',
    tagline: 'Securing multi-national trade routes, trade finance, and maritime logistics.',
    overview: 'Financing, insuring, and operating vital maritime corridors connecting GCC deepwater ports with East African, South Asian, and European trade networks.',
    aum: 'AED 4.2B Annual Trade Flow',
    focusAreas: [
      'Maritime Chartering & Port Concessions',
      'Structured Commodity Trade Finance',
      'Cold-Chain Agricultural Strategic Reserves',
      'Customs Clearance & Single-Window Logistics'
    ],
    metrics: [
      { label: 'Annual Tonnage', value: '1.8M MT' },
      { label: 'Active Ports', value: '14 Deepwater' },
      { label: 'Customs Clearance', value: '< 4 Hours' }
    ],
    caseHighlight: 'Established a bilateral food-security supply corridor delivering 450,000 MT of grain reserves annually to the UAE.',
    iconName: 'Globe'
  }
];

export const CORPORATE_LEADERS: CorporateLeader[] = [
  {
    id: 'h-e-tariq-al-mansoori',
    name: 'H.E. Tariq Al-Mansoori',
    title: 'Group Chairman & Founding Partner',
    division: 'Executive Board',
    bio: 'Former senior sovereign wealth fund director with 28+ years leading GCC capital formation, national infrastructure investments, and international sovereign partnerships.',
    credentials: ['M.Sc. Finance, London Business School', 'Ex-ADIA Executive Committee Member', 'Fellow, UAE Sovereign Leadership Institute'],
    boardRoles: ['Chairman, Gulf Strategic Asset Fund', 'Board Director, Emirates Maritime Logistics'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'victoria-vanderbilt',
    name: 'Victoria Vanderbilt',
    title: 'Managing Director & Head of Capital Advisory',
    division: 'Strategic Capital & M&A',
    bio: 'Previously Senior Managing Director at Morgan Stanley London & DIFC, leading over $14B in EMEA cross-border mergers, syndicated debt, and sovereign balance sheet restructurings.',
    credentials: ['MBA, INSEAD (Fontainebleau)', 'B.A. Economics, University of Cambridge', 'Chartered Financial Analyst (CFA)'],
    boardRoles: ['Non-Executive Director, DIFC FinTech Hub', 'Advisory Council, MENA Private Equity Association'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'dr-faisal-al-hashemi',
    name: 'Dr. Faisal Al-Hashemi',
    title: 'Chief Technology & Transformation Officer',
    division: 'Sovereign AI & Digital Transformation',
    bio: 'Pioneering technologist and former AI research lead at MIT CSAIL. Architect of sovereign cloud governance systems and enterprise machine intelligence for national enterprises.',
    credentials: ['Ph.D. Computer Science & AI, MIT', 'B.Sc. Electrical Engineering, Stanford University', '14 International Patents in Distributed AI'],
    boardRoles: ['Governing Member, UAE Artificial Intelligence Council', 'Advisory Board, ADGM Digital Trust Framework'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'marcus-lindqvist',
    name: 'Marcus Lindqvist',
    title: 'Head of Energy Transition & Real Assets',
    division: 'Energy & Real Assets',
    bio: 'Over 20 years managing utility-scale renewable energy infrastructure and institutional real estate funds across the Nordics, Middle East, and North Africa.',
    credentials: ['M.Sc. Sustainable Energy Systems, KTH Stockholm', 'B.Sc. Industrial Economics, Stockholm School of Economics'],
    boardRoles: ['Member, World Energy Council UAE Committee', 'Steering Committee, MENA Clean Energy Alliance'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
    linkedin: 'https://linkedin.com'
  }
];

export const CORPORATE_CASE_STUDIES: CorporateCaseStudy[] = [
  {
    id: 'sovereign-clean-grid',
    title: 'AED 1.4B Sovereign Clean Energy & Micro-Grid Syndication',
    client: 'Confidential Gulf Energy Authority',
    sector: 'Renewable Infrastructure & Utilities',
    dealSizeAED: 'AED 1,400,000,000',
    jurisdiction: 'Abu Dhabi (ADGM) & Dubai Mainland',
    year: '2025 – 2026',
    challenge: 'A major municipal energy operator required non-recourse private debt syndication and sovereign tax-structured asset separation for a 350MW solar and battery energy storage initiative.',
    solution: 'Engineered a bespoke Sharia-compliant Ijara green Sukuk structure integrated with an ADGM Special Purpose Vehicle (SPV), syndicating across 6 premier international and GCC institutional lenders.',
    outcome: 'Completed financial close in under 90 days with 2.4x oversubscription, unlocking lowest blended cost of capital in regional utility benchmark history.',
    metrics: [
      { label: 'Capital Raised', value: 'AED 1.4B' },
      { label: 'Oversubscription', value: '240%' },
      { label: 'CO2 Reduction', value: '410,000 MT/yr' }
    ],
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80',
    tags: ['Green Sukuk', 'ADGM SPV', 'Renewable Energy', 'Sharia Compliant']
  },
  {
    id: 'fintech-consolidation',
    title: 'AED 850M Cross-Border FinTech Core & Payments Consolidation',
    client: 'MENA Digital Commerce Holdings',
    sector: 'Financial Technology & Digital Banking',
    dealSizeAED: 'AED 850,000,000',
    jurisdiction: 'Dubai (DIFC) & Singapore',
    year: '2025',
    challenge: 'Three independent payments gateways across UAE, Saudi Arabia, and Egypt required strategic amalgamation to establish the dominant GCC cross-border merchant acquire platform.',
    solution: 'Structured a multi-jurisdictional share-swap merger under DIFC DFSA oversight, backed by AED 320M institutional growth equity round led by Tier-1 sovereign venture funds.',
    outcome: 'Created the #1 merchant acquiring infrastructure in the GCC handling over AED 18B in annualized transaction volume, reducing cross-border clearing fees by 38%.',
    metrics: [
      { label: 'Consolidated Val', value: 'AED 1.85B' },
      { label: 'Annual Volume', value: 'AED 18B+' },
      { label: 'EBITDA Margin', value: '34%' }
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    tags: ['M&A Consolidation', 'DIFC DFSA', 'Payments Architecture', 'Cross-Border']
  },
  {
    id: 'logistics-megapark',
    title: 'AED 620M Automated Deepwater Port Logistics Hub',
    client: 'Emirates Global Maritime Consortium',
    sector: 'Supply Chain & Real Assets',
    dealSizeAED: 'AED 620,000,000',
    jurisdiction: 'KIZAD Abu Dhabi & JAFZA Dubai',
    year: '2024 – 2025',
    challenge: 'Development of an ultra-high-density 1.2M sq ft automated pharmaceutical and cold-chain distribution center with zero-emission temperature integrity.',
    solution: 'Formed a joint venture with European automated logistics operators, securing long-term concession rights and structured lease-backed project finance.',
    outcome: 'Delivered facility 4 months ahead of schedule with 100% pre-lease commitments from multinational pharmaceutical and perishable goods leaders.',
    metrics: [
      { label: 'Built Space', value: '1.2M Sq Ft' },
      { label: 'Pre-Leased', value: '100%' },
      { label: 'Throughput', value: '25,000 Pallets/day' }
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Port Concession', 'Cold-Chain', 'Infrastructure', 'Automated Logistics']
  }
];

export const CORPORATE_OFFICES: CorporateOffice[] = [
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    hub: 'Global Headquarters',
    address: 'Level 42, Gate Precinct Tower 4, DIFC, Dubai, UAE',
    phone: '+971 4 458 8900',
    email: 'executive@vanguardholdings.ae',
    focus: 'Capital Advisory, Corporate Governance & Sovereign Mandates',
    coordinates: { x: 55.2708, y: 25.2048 }
  },
  {
    city: 'Abu Dhabi',
    country: 'United Arab Emirates',
    hub: 'Sovereign & Energy Operations',
    address: 'Level 28, Al Khatem Tower, ADGM Square, Al Maryah Island, Abu Dhabi, UAE',
    phone: '+971 2 698 4200',
    email: 'adgm@vanguardholdings.ae',
    focus: 'Energy Transition, Infrastructure & Government Partnerships',
    coordinates: { x: 54.3773, y: 24.4539 }
  },
  {
    city: 'Riyadh',
    country: 'Kingdom of Saudi Arabia',
    hub: 'GCC Growth Center',
    address: 'Tower 3, King Abdullah Financial District (KAFD), Riyadh, KSA',
    phone: '+966 11 829 7000',
    email: 'riyadh@vanguardholdings.ae',
    focus: 'Vision 2030 Mandates & Cross-Border Industrial Investment',
    coordinates: { x: 46.6753, y: 24.7136 }
  },
  {
    city: 'London',
    country: 'United Kingdom',
    hub: 'European Capital Node',
    address: '14 Berkeley Square, Mayfair, London W1J 6BL, UK',
    phone: '+44 20 7946 0880',
    email: 'london@vanguardholdings.ae',
    focus: 'Institutional Liquidity & Cross-Border M&A Structuring',
    coordinates: { x: -0.1419, y: 51.5074 }
  }
];

export const CORPORATE_PUBLICATIONS: CorporatePublication[] = [
  {
    id: 'gcc-macro-outlook-2026',
    title: 'GCC Sovereign Capital Allocation & Private Credit Trajectory (2026–2030)',
    category: 'Macroeconomic Whitepaper',
    date: 'February 2026',
    readTime: '18 min read',
    summary: 'A definitive analysis of regional sovereign wealth deployment, private credit syndication models, and the restructuring of non-oil trade liquidity across Dubai, Abu Dhabi, and Riyadh.',
    author: 'Vanguard Global Advisory Committee',
    downloadSize: '4.8 MB PDF'
  },
  {
    id: 'ai-enterprise-governance',
    title: 'Sovereign AI Infrastructure: Data Sovereignty, Cryptographic Models & Board Oversight',
    category: 'Technology & Governance',
    date: 'January 2026',
    readTime: '14 min read',
    summary: 'Framework for enterprise boards navigating high-stakes AI integrations, data residency compliance under UAE federal law, and resilient zero-trust infrastructure.',
    author: 'Dr. Faisal Al-Hashemi',
    downloadSize: '3.2 MB PDF'
  },
  {
    id: 'uae-netzero-capital',
    title: 'Financing the UAE Net-Zero 2050 Transition: Sharia-Compliant Green Sukuk & Real Asset Valuation',
    category: 'Energy & ESG',
    date: 'December 2025',
    readTime: '22 min read',
    summary: 'Practical roadmap for structuring utility-scale clean energy debt and calculating real-asset residual yields under global decarbonization standards.',
    author: 'Marcus Lindqvist',
    downloadSize: '5.1 MB PDF'
  }
];

export const CORPORATE_GOVERNANCE_PILLARS = [
  {
    title: 'DFSA & FSRA Regulatory Precision',
    code: 'REG-DIFC-ADGM',
    description: 'Operating under the highest tier of international common-law financial regulation within DIFC and ADGM, ensuring absolute transparency, AML/CFT compliance, and fiduciary segregation.',
    status: 'Full Tier-1 Authorization'
  },
  {
    title: 'UAE Corporate Tax 9% & FTA Compliance',
    code: 'FTA-TAX-COMPLIANT',
    description: 'Fully aligned with Federal Decree-Law No. 47 on corporate taxation, economic substance regulations (ESR), and global OECD Pillar Two minimum tax standards.',
    status: 'Zero Non-Compliance Rating'
  },
  {
    title: 'Fiduciary Independence & Conflict Protocols',
    code: 'FIDUCIARY-INTEGRITY',
    description: 'Hermetic separation between advisory mandates, principal asset allocations, and client transaction execution governed by an independent audit and risk committee.',
    status: 'Strict Multi-Level Chinese Walls'
  },
  {
    title: 'Sovereign ESG & UAE Net-Zero 2050',
    code: 'ESG-NETZERO-2050',
    description: 'Direct institutional alignment with national sustainability directives, embedding measurable carbon reduction thresholds into every capital deployment thesis.',
    status: 'Verified Carbon Disclosure'
  }
];

export const CORPORATE_STATS = [
  {
    label: 'Total Assets Advised & Managed',
    value: 'AED 18.5B+',
    subtext: 'Across 42+ GCC Sovereign & Institutional Mandates',
    badge: 'Audited Metric',
    trend: '+28% YoY Growth'
  },
  {
    label: 'Institutional & Sovereign Partners',
    value: '48 Entities',
    subtext: 'Government Departments, Banks & Global Tier-1 Funds',
    badge: 'Global Network',
    trend: '100% Client Retention'
  },
  {
    label: 'Regulatory Compliance Track Record',
    value: '100.0%',
    subtext: 'DIFC DFSA, ADGM FSRA & UAE Central Bank Standards',
    badge: 'Flawless Record',
    trend: 'AA+ Sovereign Readiness'
  },
  {
    label: 'Average Mandate IRR Delivered',
    value: '22.4%',
    subtext: 'Across Real Assets, M&A & Private Equity Exits',
    badge: 'Superior Alpha',
    trend: 'Top 5% Regional Benchmark'
  }
];
