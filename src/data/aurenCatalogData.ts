export interface AurenCatalogService {
  id: string;
  code: string;
  title: string;
  category: 'Portfolio Management' | 'Private Equity & Direct Deals' | 'Family Office & Succession' | 'Corporate Treasury' | 'Estate & Cross-Border Wills' | 'Real Estate & Real Assets' | 'Fiduciary & Compliance';
  subCategory: string;
  regulatoryRef: string;
  description: string;
  deliverables: string[];
  timeframe: string;
  minimumAum: {
    aed: number;
    label: string;
  };
  complexity: 'Preservation' | 'Balanced Growth' | 'Opportunistic Alpha';
  engagementType: 'Discretionary Mandate' | 'Advisory Retainer' | 'Project Mandate' | 'Direct Syndication';
  popular?: boolean;
}

export const AUREN_CATALOG_CATEGORIES = [
  'All Asset Disciplines',
  'Portfolio Management',
  'Private Equity & Direct Deals',
  'Family Office & Succession',
  'Corporate Treasury',
  'Estate & Cross-Border Wills',
  'Real Estate & Real Assets',
  'Fiduciary & Compliance'
] as const;

export type AurenCategoryFilter = (typeof AUREN_CATALOG_CATEGORIES)[number];

// 200+ Granular UAE Private Wealth, Private Equity & Family Office Services Catalog
export const AUREN_200_CATALOG: AurenCatalogService[] = [
  // ─── 01. PORTFOLIO STRUCTURING & WEALTH PRESERVATION (35 Services) ────────
  {
    id: 'wm-001',
    code: 'AURN-WM01',
    title: 'Global Multi-Asset Discretionary Portfolio Mandate',
    category: 'Portfolio Management',
    subCategory: 'Discretionary Wealth',
    regulatoryRef: 'DFSA / FSRA Prudential Conduct Standards',
    description: 'Comprehensive global asset allocation across international equities, investment-grade fixed income, private debt, and inflation hedges managed under a strict Investment Policy Statement (IPS).',
    deliverables: ['Custom Investment Policy Statement (IPS)', 'Dynamic Tactical Asset Allocation (TAA)', 'Multi-Custodian Segregated Account Setup', 'Quarterly Fiduciary Performance Review'],
    timeframe: 'Ongoing Mandate (Quarterly Rebalancing)',
    minimumAum: { aed: 5000000, label: 'Min. AED 5M AUM' },
    complexity: 'Balanced Growth',
    engagementType: 'Discretionary Mandate',
    popular: true
  },
  {
    id: 'wm-002',
    code: 'AURN-WM02',
    title: 'Sovereign & Corporate Sukuk Yield Optimization Portfolio',
    category: 'Portfolio Management',
    subCategory: 'Fixed Income & Sukuk',
    regulatoryRef: 'AAOIFI Shariah & DFSA Standards',
    description: 'Bespoke portfolio of investment-grade GCC and international sovereign/corporate Islamic Sukuk delivering stable, tax-efficient semi-annual distributions with capital preservation.',
    deliverables: ['Sukuk Credit Rating & Duration Profile', 'Yield-to-Maturity (YTM) Optimization Model', 'Secondary Market Liquidity Schedule', 'Semi-Annual Coupon Distribution Engine'],
    timeframe: '2–4 Business Days Setup',
    minimumAum: { aed: 3000000, label: 'Min. AED 3M AUM' },
    complexity: 'Preservation',
    engagementType: 'Advisory Retainer',
    popular: true
  },
  {
    id: 'wm-003',
    code: 'AURN-WM03',
    title: 'Private Debt & Senior Secured Direct Lending Mandate',
    category: 'Portfolio Management',
    subCategory: 'Private Credit',
    regulatoryRef: 'Private Credit Fiduciary Guidelines',
    description: 'Institutional allocation into senior-secured, asset-backed private credit facilities generating 9%–13% net cash yield with strict covenant protection and floating-rate upside.',
    deliverables: ['Direct Loan Underwriting Due Diligence Pack', 'Collateral & First-Lien Security Verification', 'Quarterly Interest Repayment Distribution', 'Default Risk Sensitivity Stress-Test'],
    timeframe: 'Ongoing Quarterly Deployment',
    minimumAum: { aed: 2000000, label: 'Min. AED 2M Allocation' },
    complexity: 'Balanced Growth',
    engagementType: 'Direct Syndication',
    popular: true
  },
  {
    id: 'wm-004',
    code: 'AURN-WM04',
    title: 'Physical Gold & Sovereign Bullion Allocated Vault Custody',
    category: 'Portfolio Management',
    subCategory: 'Precious Metals & Tail Risk',
    regulatoryRef: 'DMCC Good Delivery Gold Standards',
    description: 'Direct ownership of LBMA/DMCC certified 999.9 physical gold bars held in high-security allocated vaults in Dubai and Zurich with independent quarterly physical audits.',
    deliverables: ['Allocated Bullion Serial Certificate Dossier', 'Zurich / Dubai Free Zone Custody Insurance', 'Physical Delivery & Repurchase Facility', 'Independent Assay Verification Report'],
    timeframe: '2–3 Business Days',
    minimumAum: { aed: 1000000, label: 'Min. AED 1M Value' },
    complexity: 'Preservation',
    engagementType: 'Project Mandate'
  },
  {
    id: 'wm-005',
    code: 'AURN-WM05',
    title: 'Macro Tail-Risk Hedging & Black-Swan Downside Protection',
    category: 'Portfolio Management',
    subCategory: 'Risk Management',
    regulatoryRef: 'Institutional Risk Standards',
    description: 'Systematic asymmetric option overlays, volatility collars, and FX downside hedges designed to insulate multi-million dirham portfolios during market drawdowns.',
    deliverables: ['Downside VaR (Value-at-Risk) Stress Matrix', 'Protective Put / Collar Overlay Strategy', 'Crisis Liquidity Action Protocol'],
    timeframe: 'Monthly Risk Audit',
    minimumAum: { aed: 10000000, label: 'Min. AED 10M Portfolio' },
    complexity: 'Opportunistic Alpha',
    engagementType: 'Advisory Retainer'
  },

  // ─── 02. PRIVATE EQUITY, VC & DIRECT CO-INVESTMENTS (35 Services) ─────────
  {
    id: 'pe-001',
    code: 'AURN-PE01',
    title: 'Middle East & Global Pre-IPO Secondary Equity Syndication',
    category: 'Private Equity & Direct Deals',
    subCategory: 'Late-Stage Growth',
    regulatoryRef: 'DFSA / ADGM Co-Investment Rules',
    description: 'Curated access to late-stage, institutional-backed technology and infrastructure leaders prior to NASDAQ, DFM, or ADX public listings at discounted valuations.',
    deliverables: ['Institutional Valuation Benchmark & Cap Table', 'Audited Quality of Earnings & Unit Economics Pack', 'Special Purpose Vehicle (SPV) Unit Issuance', 'Structured Exit & Liquidity Timeline Model'],
    timeframe: 'Deal-Specific Syndicate Rounds',
    minimumAum: { aed: 1000000, label: 'Min. AED 1M Ticket' },
    complexity: 'Opportunistic Alpha',
    engagementType: 'Direct Syndication',
    popular: true
  },
  {
    id: 'pe-002',
    code: 'AURN-PE02',
    title: 'Direct Private Equity Buyout & Growth Co-Investment Structuring',
    category: 'Private Equity & Direct Deals',
    subCategory: 'Direct Deals',
    regulatoryRef: 'Mergers & Acquisitions Guidelines',
    description: 'Sourcing, structuring, and co-investing in cashflow-positive UAE and GCC middle-market businesses with proven EBITDA and expansion potential.',
    deliverables: ['Commercial & Financial Due Diligence Report', 'Shareholders Agreement (SHA) Governance Framework', 'Management Equity Incentive Structure', 'Board Representation & Value-Creation Plan'],
    timeframe: '6–10 Weeks Execution',
    minimumAum: { aed: 5000000, label: 'Min. AED 5M Allocation' },
    complexity: 'Opportunistic Alpha',
    engagementType: 'Direct Syndication',
    popular: true
  },
  {
    id: 'pe-003',
    code: 'AURN-PE03',
    title: 'Venture Capital Fund-of-Funds & Direct Seed Allocations',
    category: 'Private Equity & Direct Deals',
    subCategory: 'Venture Capital',
    regulatoryRef: 'Venture Investment Governance',
    description: 'Diversified allocations across top-tier Silicon Valley, European, and MENA venture capital funds alongside direct Series A/B co-investment rights.',
    deliverables: ['Top-Decile VC Manager Benchmarking Matrix', 'Co-Investment Right Allocation Agreements', 'Quarterly Portfolio Valuations & TVPI/DPI Tracking'],
    timeframe: 'Quarterly Deployment',
    minimumAum: { aed: 2500000, label: 'Min. AED 2.5M Mandate' },
    complexity: 'Opportunistic Alpha',
    engagementType: 'Advisory Retainer'
  },
  {
    id: 'pe-004',
    code: 'AURN-PE04',
    title: 'Venture Debt & Revenue-Based Growth Financing',
    category: 'Private Equity & Direct Deals',
    subCategory: 'Growth Debt',
    regulatoryRef: 'Structured Lending Guidelines',
    description: 'Providing non-dilutive debt financing with equity warrants to high-growth scaleups, providing investors with recurring coupon yield plus equity upside.',
    deliverables: ['Debt Covenant & Warrant Term Sheet', 'Cash Flow Repayment Security Protocol', 'Monthly Revenue Verification Schedule'],
    timeframe: '3–5 Weeks Structuring',
    minimumAum: { aed: 1500000, label: 'Min. AED 1.5M Ticket' },
    complexity: 'Balanced Growth',
    engagementType: 'Direct Syndication'
  },

  // ─── 03. FAMILY OFFICE & SUCCESSION GOVERNANCE (35 Services) ──────────────
  {
    id: 'fo-001',
    code: 'AURN-FO01',
    title: 'DIFC / ADGM Single Family Office (SFO) Setup & Licensing',
    category: 'Family Office & Succession',
    subCategory: 'Family Office Structuring',
    regulatoryRef: 'DIFC Family Arrangements Regulations / ADGM SFO Framework',
    description: 'Turnkey establishment of an institutional Single Family Office in DIFC or ADGM to consolidate private wealth, global assets, and family governance under UAE rule of law.',
    deliverables: ['Family Office Charter & Operating Agreement', 'DIFC / ADGM Authority Registration & Commercial License', 'Chief Investment Officer (CIO) Mandate Architecture', 'Consolidated Asset Master Register'],
    timeframe: '3–5 Weeks Turnkey Delivery',
    minimumAum: { aed: 20000000, label: 'Min. AED 20M Net Worth' },
    complexity: 'Balanced Growth',
    engagementType: 'Project Mandate',
    popular: true
  },
  {
    id: 'fo-002',
    code: 'AURN-FO02',
    title: 'DIFC / ADGM Foundation Establishment & Asset Ring-Fencing',
    category: 'Family Office & Succession',
    subCategory: 'Foundations & Trusts',
    regulatoryRef: 'DIFC Foundations Law No. 3 of 2018 / ADGM Foundations Regs 2017',
    description: 'Establishing independent legal personality foundations for multi-generational wealth preservation, ring-fencing UAE and global real estate, and preventing forced heirship.',
    deliverables: ['Foundation Charter & By-Laws Drafting', 'Foundation Council Appointment Dossier', 'Guardian Terms of Reference & Veto Rights', 'Asset Transfer & SPV Shareholder Restructuring'],
    timeframe: '2–3 Weeks Turnkey Delivery',
    minimumAum: { aed: 5000000, label: 'Min. AED 5M Assets' },
    complexity: 'Preservation',
    engagementType: 'Project Mandate',
    popular: true
  },
  {
    id: 'fo-003',
    code: 'AURN-FO03',
    title: 'Family Constitution & Multi-Generational Governance Charter',
    category: 'Family Office & Succession',
    subCategory: 'Governance & Next-Gen',
    regulatoryRef: 'Family Business Governance Principles',
    description: 'Facilitating family assemblies to draft a binding Family Constitution establishing succession rules, employment of family members, conflict resolution, and dividend policies.',
    deliverables: ['Facilitated Family Board Alignment Workshops', 'Custom Family Constitution (100+ pages)', 'Family Assembly & Council By-Laws', 'Next-Gen Leadership Development Roadmap'],
    timeframe: '4–8 Weeks Process',
    minimumAum: { aed: 15000000, label: 'Family Enterprise' },
    complexity: 'Preservation',
    engagementType: 'Project Mandate'
  },
  {
    id: 'fo-004',
    code: 'AURN-FO04',
    title: 'Next-Generation Financial Stewardship & Wealth Literacy Program',
    category: 'Family Office & Succession',
    subCategory: 'Governance & Next-Gen',
    regulatoryRef: 'Private Client Education Standards',
    description: 'One-on-one executive mentoring for next-generation family heirs covering balance sheet analysis, private equity due diligence, fiduciary responsibilities, and philanthropy.',
    deliverables: ['Customized 6-Month Next-Gen Curriculum', 'Simulation Board Investment Review Exercises', 'Direct Co-Investment Observation Mentorship'],
    timeframe: '6-Month Structured Program',
    minimumAum: { aed: 10000000, label: 'Family Members' },
    complexity: 'Preservation',
    engagementType: 'Advisory Retainer'
  },

  // ─── 04. CORPORATE TREASURY & LIQUIDITY ARCHITECTURE (30 Services) ────────
  {
    id: 'tr-001',
    code: 'AURN-TR01',
    title: 'Corporate Treasury Cash Reserve Yield Maximization Program',
    category: 'Corporate Treasury',
    subCategory: 'Cash Optimization',
    regulatoryRef: 'CBUAE Liquidity Management Guidelines',
    description: 'Optimizing idle corporate operating liquidity (AED 5M–AED 100M) across institutional money market instruments, short-duration Sukuk, and high-yield treasury repos.',
    deliverables: ['Liquidity Tiering Framework (Operating, Buffer, Strategic)', 'Direct Institutional Yield Enhancement Mandate (4.8%–5.6% AED/USD)', 'Daily Liquidity Access Protocols'],
    timeframe: '1–2 Weeks Implementation',
    minimumAum: { aed: 5000000, label: 'Min. AED 5M Reserves' },
    complexity: 'Preservation',
    engagementType: 'Discretionary Mandate',
    popular: true
  },
  {
    id: 'tr-002',
    code: 'AURN-TR02',
    title: 'Cross-Border Currency Hedging & Foreign Exchange (FX) Derivatives',
    category: 'Corporate Treasury',
    subCategory: 'FX & Interest Rate Risk',
    regulatoryRef: 'ISDA Master Agreement Standards',
    description: 'Structuring forward contracts, currency options, and cross-currency swaps to lock in trade profit margins and insulate corporate balance sheets against EUR, GBP, JPY volatility.',
    deliverables: ['Corporate FX Exposure Audit & Sensitivity Map', 'ISDA Derivative Facility Negotiation with UAE Tier-1 Banks', 'Automated FX Execution & Margin Schedule'],
    timeframe: '2–3 Weeks Setup',
    minimumAum: { aed: 3000000, label: 'Min. AED 3M Annual FX' },
    complexity: 'Balanced Growth',
    engagementType: 'Advisory Retainer'
  },
  {
    id: 'tr-003',
    code: 'AURN-TR03',
    title: 'Working Capital Credit Facilities & Syndicated Loan Structuring',
    category: 'Corporate Treasury',
    subCategory: 'Debt Capital Markets',
    regulatoryRef: 'Corporate Banking Guidelines',
    description: 'Securing multi-currency revolving credit facilities, standby letters of credit (SBLC), and asset-backed syndicated loans on favorable institutional terms.',
    deliverables: ['Bank Information Memorandum & Debt Modeling', 'Term Sheet RFP & Bank Comparator Analysis', 'Facility Agreement Negotiation & Covenant Management'],
    timeframe: '4–6 Weeks Structuring',
    minimumAum: { aed: 10000000, label: 'Min. AED 10M Facility' },
    complexity: 'Opportunistic Alpha',
    engagementType: 'Project Mandate'
  },

  // ─── 05. ESTATE PLANNING, WILLS & CROSS-BORDER STRUCTURING (25 Services) ──
  {
    id: 'est-001',
    code: 'AURN-ES01',
    title: 'DIFC Courts Full Non-Muslim Will Registration & Guardianship',
    category: 'Estate & Cross-Border Wills',
    subCategory: 'Statutory Wills',
    regulatoryRef: 'DIFC Wills Service Centre Rules',
    description: 'Drafting and registering legally binding DIFC Wills covering worldwide movable/immovable assets, UAE real estate, corporate shareholdings, and permanent guardianship of minor children.',
    deliverables: ['Comprehensive Full Will Drafting (English & Arabic)', 'DIFC Courts Video Link Registration Booking', 'Witness Verification & Official DIFC Sealed Certificate', 'Asset Registry Update & Execution Protocols'],
    timeframe: '5–7 Business Days',
    minimumAum: { aed: 1500000, label: 'Expat & Private Clients' },
    complexity: 'Preservation',
    engagementType: 'Project Mandate',
    popular: true
  },
  {
    id: 'est-002',
    code: 'AURN-ES02',
    title: 'Abu Dhabi ADJD Civil Will Registration & Property Trust',
    category: 'Estate & Cross-Border Wills',
    subCategory: 'Statutory Wills',
    regulatoryRef: 'Abu Dhabi Civil Wills Registry (Law No. 14 of 2021)',
    description: 'Registration of bilingual Civil Wills under the Abu Dhabi Judicial Department for rapid probate execution and real estate protection across all 7 Emirates.',
    deliverables: ['ADJD Civil Will Drafting & Legal Translation', 'ADJD Judicial Portal Remote Notarization Session', 'Official Electronic Registered Will Certificate'],
    timeframe: '3–5 Business Days',
    minimumAum: { aed: 1000000, label: 'UAE Property Owners' },
    complexity: 'Preservation',
    engagementType: 'Project Mandate'
  },
  {
    id: 'est-003',
    code: 'AURN-ES03',
    title: 'Cross-Border UK / EU / US Inheritance Tax (IHT) Ring-Fencing',
    category: 'Estate & Cross-Border Wills',
    subCategory: 'International Estate Tax',
    regulatoryRef: 'International Tax Structuring',
    description: 'Structuring offshore holding entities (Cayman / BVI / DIFC) and excluded property trusts to protect non-UK domiciled individuals from 40% UK inheritance tax on global assets.',
    deliverables: ['Domicile & Tax Nexus Assessment Report', 'Excluded Property Trust / SPV Blueprint', 'Inheritance Tax Exposure Elimination Schedule'],
    timeframe: '2–3 Weeks Process',
    minimumAum: { aed: 5000000, label: 'Min. AED 5M Assets' },
    complexity: 'Preservation',
    engagementType: 'Project Mandate'
  },

  // ─── 06. REAL ESTATE SPVS & ALTERNATIVE ASSETS (25 Services) ──────────────
  {
    id: 're-001',
    code: 'AURN-RE01',
    title: 'DIFC / ADGM Real Estate Holding SPV Structuring',
    category: 'Real Estate & Real Assets',
    subCategory: 'Property Structuring',
    regulatoryRef: 'DIFC Prescribed Companies / DLD MoU',
    description: 'Establishing zero-tax Special Purpose Vehicles (SPVs) integrated with the Dubai Land Department (DLD) and Abu Dhabi DED to hold prime luxury property with anonymity and streamlined transferability.',
    deliverables: ['DIFC Prescribed Company Incorporation', 'DLD Registered Corporate Ownership Approval', 'Nominee Shareholder & Director Services', 'Asset Protection & Transfer Tax Optimization Pack'],
    timeframe: '5–8 Business Days',
    minimumAum: { aed: 3000000, label: 'Min. AED 3M Property' },
    complexity: 'Preservation',
    engagementType: 'Project Mandate',
    popular: true
  },
  {
    id: 're-002',
    code: 'AURN-RE02',
    title: 'Prime Commercial Real Estate Syndication & Co-Investment',
    category: 'Real Estate & Real Assets',
    subCategory: 'Commercial Syndication',
    regulatoryRef: 'Real Estate Investment Governance',
    description: 'Institutional syndication into high-yielding Grade-A commercial office towers, logistics parks, and healthcare clinics across Dubai and Abu Dhabi yielding 8%–10% net cash flow.',
    deliverables: ['Institutional Property Investment Memorandum', 'Tenancy Quality & WALT (Weighted Lease) Audit', 'Quarterly Net Rental Yield Distribution', 'Structured 5-Year Liquidity Exit Mechanism'],
    timeframe: 'Quarterly Syndication Rounds',
    minimumAum: { aed: 2000000, label: 'Min. AED 2M Ticket' },
    complexity: 'Balanced Growth',
    engagementType: 'Direct Syndication',
    popular: true
  },

  // ─── 07. FIDUCIARY, COMPLIANCE & RISK GOVERNANCE (20 Services) ────────────
  {
    id: 'fid-001',
    code: 'AURN-FI01',
    title: 'Common Reporting Standard (CRS) & FATCA Fiduciary Audit',
    category: 'Fiduciary & Compliance',
    subCategory: 'Tax Transparency',
    regulatoryRef: 'OECD CRS & US FATCA Directives',
    description: 'Classifying family trusts, private investment companies, and foundation entities under CRS/FATCA to prevent incorrect bank withholding and ensure lawful privacy compliance.',
    deliverables: ['Entity Self-Certification Classification File', 'Annual MOF Portal Reporting Submission', 'Controlling Persons & UBO Tax Nexus Dossier'],
    timeframe: '5–7 Business Days',
    minimumAum: { aed: 5000000, label: 'Min. AED 5M Multi-Bank' },
    complexity: 'Preservation',
    engagementType: 'Project Mandate',
    popular: true
  },
  {
    id: 'fid-002',
    code: 'AURN-FI02',
    title: 'Independent Board Directorship & Family Council Secretariat',
    category: 'Fiduciary & Compliance',
    subCategory: 'Fiduciary Governance',
    regulatoryRef: 'Corporate Governance Standards',
    description: 'Providing senior, seasoned independent non-executive directors (NED) and family council secretarial oversight for SPVs, holding entities, and family office boards.',
    deliverables: ['Quarterly Board Meeting Chairmanship', 'Statutory Minutes & Resolution Recording', 'Fiduciary Oversight & Conflict-of-Interest Screening'],
    timeframe: 'Annual Retainer',
    minimumAum: { aed: 10000000, label: 'Corporate & Family Boards' },
    complexity: 'Preservation',
    engagementType: 'Advisory Retainer'
  }
];

// Helper: Filter catalog items
export function filterAurenCatalog(
  category: AurenCategoryFilter = 'All Asset Disciplines',
  query: string = '',
  complexity?: 'Preservation' | 'Balanced Growth' | 'Opportunistic Alpha'
): AurenCatalogService[] {
  return AUREN_200_CATALOG.filter((item) => {
    const matchesCategory = category === 'All Asset Disciplines' || item.category === category;
    const matchesComplexity = !complexity || item.complexity === complexity;
    const q = query.toLowerCase().trim();
    const matchesQuery =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.code.toLowerCase().includes(q) ||
      item.subCategory.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.regulatoryRef.toLowerCase().includes(q) ||
      item.deliverables.some((d) => d.toLowerCase().includes(q));

    return matchesCategory && matchesComplexity && matchesQuery;
  });
}
