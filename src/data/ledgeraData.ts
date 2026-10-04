export interface LedgeraService {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  clientTypes: string[];
  iconName: string;
  timeline: string;
}

export interface LedgeraIndustry {
  id: string;
  name: string;
  description: string;
  challenges: string[];
  relevantServices: string[];
  reportingNeeds: string;
  suggestedModel: string;
}

export interface LedgeraLeader {
  name: string;
  role: string;
  experience: string;
  specialization: string;
  image: string;
  bio: string;
}

export interface LedgeraArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  summary: string;
  content: string;
}

export const LEDGERA_BRAND = {
  name: 'LEDGERA',
  tagline: 'Numbers You Can Trust.',
  positioning: 'Premium UAE Accounting, Bookkeeping & Corporate Tax Advisory',
  whatsapp: 'https://wa.me/971509988440?text=Hello%20LEDGERA,%20I%20would%20like%20to%20schedule%20an%20accounting%20and%20corporate%20tax%20consultation.',
  phone: '+971 4 399 7000',
  email: 'advisory@ledgera.ae',
  dubaiAddress: 'Level 18, Vision Tower, Business Bay, Dubai, UAE',
  abuDhabiAddress: 'Level 12, Al Khatem Tower, ADGM Square, Abu Dhabi, UAE'
};

export const LEDGERA_STATS = [
  { label: 'UAE Businesses Supported', value: '300+' },
  { label: 'Tax & Bookkeeping Managed', value: 'AED 1.8B+' },
  { label: 'On-Time Filing Compliance', value: '100%' },
  { label: 'Combined Practice Practice', value: '12+ Yrs' }
];

export const LEDGERA_LOGOS = [
  'NOVA GROUP',
  'ALTA HOLDINGS',
  'ORBIT TECH',
  'VANTAGE RETAIL',
  'MERIDIAN CAPITAL',
  'LUMEN INDUSTRIES'
];

export const LEDGERA_SERVICES: LedgeraService[] = [
  {
    id: 'bookkeeping-accounting',
    number: '01',
    title: 'Bookkeeping & Accounting',
    subtitle: 'Monthly Reconciliations, Ledger Maintenance & Financial Statements',
    description: 'Structured bookkeeping utilizing cloud accounting (Xero / QuickBooks / Zoho Books) aligned with IFRS standards for complete financial visibility.',
    deliverables: ['Monthly Profit & Loss & Balance Sheet', 'Bank & Credit Card Reconciliation', 'Accounts Payable & Receivable Aging', 'Fixed Asset Register Maintenance'],
    clientTypes: ['UAE SMEs', 'Free Zone Enterprises', 'Trading Companies'],
    iconName: 'FileSpreadsheet',
    timeline: 'Monthly Retainer (Monthly Close by 5th)'
  },
  {
    id: 'corporate-tax',
    number: '02',
    title: 'Corporate Tax Advisory (9%)',
    subtitle: 'FTA Registration, Qualifying Free Zone Person (QFZP) Audit & Tax Filings',
    description: 'Guiding corporate entities through the UAE 9% Corporate Tax framework, taxable income calculations, Small Business Relief, and annual FTA return filings.',
    deliverables: ['Corporate Tax Registration & TRN', 'Impact Assessment & Taxable Net Income Calculation', 'Qualifying Free Zone Person (QFZP) Review', 'Annual Corporate Tax Return Filing'],
    clientTypes: ['Mainland LLCs', 'Free Zone Companies', 'Holding Groups'],
    iconName: 'Building2',
    timeline: 'Annual Return / Ongoing Compliance'
  },
  {
    id: 'vat-compliance',
    number: '03',
    title: 'VAT Registration & Filings',
    subtitle: 'Quarterly VAT Returns, Input Tax Recovery & Voluntary Disclosures',
    description: 'Managing mandatory (AED 375k) and voluntary (AED 187.5k) UAE VAT registration, input tax optimization, quarterly filings, and FTA audit defense.',
    deliverables: ['VAT Registration & Certificate', 'Quarterly VAT 201 Return Calculations', 'Input Tax Deduction Audit', 'Voluntary Disclosure (VD) Support'],
    clientTypes: ['Retail Stores', 'E-Commerce Brands', 'Service Providers'],
    iconName: 'Calculator',
    timeline: 'Quarterly Filing Cycle'
  },
  {
    id: 'audit-assurance',
    number: '04',
    title: 'Audit & Assurance Support',
    subtitle: 'External Audit Readiness, Stock Count Verification & Financial Due Diligence',
    description: 'Preparing bulletproof audit files, trial balances, and supporting schedules for free zone authority and bank license renewal audits.',
    deliverables: ['Audit File & Lead Schedule Preparation', 'Inventory & Fixed Asset Physical Audit', 'Bank Confirmation Requests', 'Independent Audit Liaison'],
    clientTypes: ['DMCC / DAFZA / JAFZA Entities', 'Bank Loan Applicants'],
    iconName: 'CheckSquare',
    timeline: 'Annual Audit Cycle (2–3 Weeks Preparation)'
  },
  {
    id: 'payroll-wps',
    number: '05',
    title: 'Payroll & WPS Processing',
    subtitle: 'Wage Protection System (WPS) Compliance, SIF File Generation & End of Service',
    description: 'Automating monthly staff salary processing, MoHRE WPS SIF file generation, leave salary accruals, and End of Service Gratuity (EOSG) calculations.',
    deliverables: ['Monthly WPS SIF File Generation', 'Pay Slip Distribution', 'MoHRE Labor Compliance Audit', 'End of Service Gratuity Settlement'],
    clientTypes: ['Companies with 5–500 Employees', 'Multi-Branch Operations'],
    iconName: 'Users',
    timeline: 'Monthly Payroll Run (25th of Month)'
  },
  {
    id: 'financial-reporting',
    number: '06',
    title: 'Management Financial Reporting',
    subtitle: 'C-Suite Dashboards, Cash Flow Forecasting & KPI Analysis',
    description: 'Executive monthly management packs highlighting gross margins, burn rates, working capital, and customized board-level KPI metrics.',
    deliverables: ['Monthly Management Deck (PDF/Excel)', 'Rolling 12-Month Cash Flow Forecast', 'Variance Analysis (Actual vs Budget)', 'Departmental Cost Breakdown'],
    clientTypes: ['Growth Founders', 'Board Directors', 'Investor-Backed Ventures'],
    iconName: 'BarChart3',
    timeline: 'Monthly Delivery'
  },
  {
    id: 'esr-advisory',
    number: '07',
    title: 'Economic Substance (ESR) & UBO',
    subtitle: 'Relevant Activity Assessment, ESR Notifications & Ultimate Beneficial Owner Filings',
    description: 'Ensuring strict compliance with UAE Economic Substance Regulations (ESR) and Ministry of Economy Ultimate Beneficial Owner (UBO) register mandates.',
    deliverables: ['ESR Relevant Activity Screening', 'Annual ESR Notification & Economic Substance Report', 'UBO Register Documentation', 'FTA Penalty Appeal Support'],
    clientTypes: ['Distribution & Service Centers', 'Headquarter Businesses', 'Intellectual Property Entities'],
    iconName: 'ShieldAlert',
    timeline: 'Annual Regulatory Deadline'
  },
  {
    id: 'cfo-advisory',
    number: '08',
    title: 'Fractional CFO Advisory',
    subtitle: 'Strategic Financial Planning, Capital Allocation & Banking Relationships',
    description: 'On-demand senior CFO leadership for budgeting, corporate debt restructuring, bank account opening support, and valuation reviews.',
    deliverables: ['Quarterly Board Advisory Meetings', 'Bank Credit Facility Negotiations', 'Commercial Contract Margin Audits', 'Entity Structuring Financial Models'],
    clientTypes: ['Scaling Enterprises', 'High-Growth Tech Founders'],
    iconName: 'TrendingUp',
    timeline: 'Monthly Executive Retainer'
  }
];

export const LEDGERA_INDUSTRIES: LedgeraIndustry[] = [
  {
    id: 'e-commerce',
    name: 'E-Commerce & Digital Brands',
    description: 'Managing high-volume online transaction reconciliations, payment gateway fees (Stripe/Checkout), multi-currency conversions, and cross-border GCC VAT.',
    challenges: ['Payment gateway fee reconciliation', 'Cross-border GCC customer VAT rules', 'High inventory turnover valuation'],
    relevantServices: ['Bookkeeping & Accounting', 'VAT Registration & Filings', 'Management Financial Reporting'],
    reportingNeeds: 'Weekly COGS, Gross Margin per SKU, Gateway Fee Audit',
    suggestedModel: 'Monthly Cloud Accounting + Quarterly VAT Retainer'
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Property Investment',
    description: 'Accounting for rental income yields, developer escrow releases, property acquisition VAT recovery, and SPV holding company structures.',
    challenges: ['Specialized VAT treatment on commercial vs residential', 'Service charge reconciliation', 'Multi-property asset depreciation'],
    relevantServices: ['Corporate Tax Advisory (9%)', 'Audit & Assurance Support', 'Bookkeeping & Accounting'],
    reportingNeeds: 'Net Yield per Property, Escrow Account Statements, Corporate Tax Liability',
    suggestedModel: 'Quarterly Financial & Tax Advisory Package'
  },
  {
    id: 'construction',
    name: 'Construction & Engineering',
    description: 'Tracking job costing, sub-contractor retention payables, progress billing milestone VAT, and WPS payroll for large site workforces.',
    challenges: ['Progress billing milestone VAT timing', 'WPS compliance for 50+ site laborers', 'Subcontractor retention accounting'],
    relevantServices: ['Payroll & WPS Processing', 'VAT Compliance', 'Bookkeeping & Accounting'],
    reportingNeeds: 'Project COGS, Job Profitability, WPS Audit Logs',
    suggestedModel: 'Dedicated Monthly Accounting & Payroll Desk'
  },
  {
    id: 'retail',
    name: 'Retail & Physical Stores',
    description: 'Synchronizing POS store registers with central accounting ledgers, daily cash counts, landlord turnover rent audits, and inventory shrinkage.',
    challenges: ['POS register to Xero automated sync', 'Daily cash drawer reconciliation', 'Landlord turnover rent reporting'],
    relevantServices: ['Bookkeeping & Accounting', 'VAT Compliance', 'Payroll & WPS'],
    reportingNeeds: 'Daily Sales Flash Report, Store Margin Analysis, Stock Shrinkage',
    suggestedModel: 'Full Monthly Accounting & Tax Management'
  },
  {
    id: 'services',
    name: 'Professional Services & Consultancies',
    description: 'Time-tracking billable hour utilization, retainer invoice automation, partner profit share allocations, and Corporate Tax optimization.',
    challenges: ['Unbilled work-in-progress (WIP) tracking', 'Partner draw vs dividend tax treatment', 'WPS compliance for C-suite'],
    relevantServices: ['Corporate Tax Advisory', 'Bookkeeping & Accounting', 'Fractional CFO'],
    reportingNeeds: 'Billable Utilization Rate, Client Profitability, Tax Liability',
    suggestedModel: 'Monthly Advisory & Tax Retainer'
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Restaurants',
    description: 'Managing food & beverage COGS ratios, aggregator delivery payouts (Talabat/Deliveroo), tip allocations, and Municipality tax compliance.',
    challenges: ['Food wastage COGS variances', 'Delivery app commission deductions', 'Staff service charge distribution'],
    relevantServices: ['Bookkeeping & Accounting', 'VAT Compliance', 'Payroll & WPS'],
    reportingNeeds: 'Prime Cost (Food + Labor %), Daily Covers, Delivery Net Payouts',
    suggestedModel: 'Monthly Full Accounting & Tax Outsourcing'
  },
  {
    id: 'trading',
    name: 'General Trading & Wholesale',
    description: 'Handling import/export customs duty adjustments, free zone transit goods VAT zero-rating, letter of credit (LC) accounting, and FX hedging.',
    challenges: ['Customs VAT reverse charge mechanism', 'Free Zone to Mainland goods clearance', 'Foreign currency gain/loss ledgers'],
    relevantServices: ['Corporate Tax Advisory', 'VAT Compliance', 'ESR Advisory'],
    reportingNeeds: 'Gross Margin per Trade Route, Customs Clearance Logs, FX Variance',
    suggestedModel: 'Enterprise Monthly Financial & Tax Advisory'
  }
];

export const LEDGERA_CASE_STUDY = {
  clientName: 'Orbit Tech FZ',
  industry: 'Technology / Free Zone',
  challenge: 'Disorganized 3-month backlogged bookkeeping, unfiled quarterly VAT returns, and risk of severe FTA penalties created investor audit failure exposure.',
  beforeStats: {
    backlog: '3 Months Unreconciled Ledgers',
    filings: '2 Missed VAT Return Deadlines',
    penalties: 'AED 45,000 Estimated FTA Penalty Exposure'
  },
  afterStats: {
    backlog: 'Fully Reconciled & Up-to-Date Books',
    filings: '100% On-Time VAT & Corporate Tax Filings',
    penalties: 'AED 0 Penalties Incurred'
  },
  metrics: [
    { label: 'On-Time Compliance Filings', value: '100%' },
    { label: 'Monthly Close Acceleration', value: '-70%' },
    { label: 'Filing Penalties Since Onboarding', value: 'AED 0' }
  ],
  quote: 'LEDGERA took our books from total chaos to absolute clarity in under two months. We have never missed a VAT or Corporate Tax filing since partner onboarding.',
  author: 'Fatima Al Suwaidi, Founder of Orbit Tech FZ'
};

export const LEDGERA_LEADERS: LedgeraLeader[] = [
  {
    name: 'Tariq Al-Mansoor, CPA',
    role: 'Managing Partner & Executive Advisory',
    experience: '18+ Years GCC Practice',
    specialization: 'Corporate Governance, Group Accounting & IFRS Financial Reporting',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    bio: 'Former senior auditor at a Big 4 accounting firm in Dubai, Tariq has advised over 300 UAE enterprises on financial restructuring, IFRS compliance, and audit readiness.'
  },
  {
    name: 'Sarah Jenkins, CTA',
    role: 'Head of Corporate Tax & VAT Advisory',
    experience: '14+ Years Tax Advisory',
    specialization: 'UAE Corporate Tax (9%), Free Zone QFZP Rules & VAT Compliance',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    bio: 'Chartered Tax Adviser specializing in UAE 9% Corporate Tax structuring, Free Zone qualifying income audits, and complex cross-border VAT filings.'
  },
  {
    name: 'Faisal Al-Hashimi, FCA',
    role: 'Head of Audit & Assurance',
    experience: '15+ Years Financial Audit',
    specialization: 'Free Zone Authority Audits, Bank Credit Assurance & Internal Control Audits',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    bio: 'Fellow Chartered Accountant overseeing external audit readiness for DMCC, DAFZA, JAFZA, and mainland commercial entities across the 7 Emirates.'
  },
  {
    name: 'Nadia Al-Maktoum',
    role: 'Head of Client Accounts & Payroll (WPS)',
    experience: '12+ Years Client Operations',
    specialization: 'Cloud Accounting Implementation (Xero / QuickBooks), WPS SIF & Payroll',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    bio: 'Leads a team of senior chartered accountants handling monthly bookkeeping, accounts reconciliation, WPS payroll processing, and management reporting packs.'
  }
];

export const LEDGERA_ARTICLES: LedgeraArticle[] = [
  {
    id: 'art-1',
    title: 'UAE Corporate Tax: A Practical 9% Compliance Guide for SMEs',
    category: 'Corporate Tax',
    readTime: '6 min read',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    summary: 'Essential steps for UAE mainland and free zone businesses to calculate taxable net income, apply Small Business Relief, and meet FTA return deadlines.',
    content: 'The UAE Corporate Tax regime imposes a baseline 9% tax rate on taxable business profits exceeding AED 375,000. Managing tax registration, qualifying free zone person (QFZP) exemptions, and deductible expense documentation is critical to preventing severe administrative penalties...'
  },
  {
    id: 'art-2',
    title: '5 Costly VAT Filing Mistakes UAE Businesses Should Avoid',
    category: 'VAT Compliance',
    readTime: '5 min read',
    date: 'July 2026',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
    summary: 'Common pitfalls in input tax recovery, reverse charge mechanism calculations, and invoice formatting that trigger FTA tax audits.',
    content: 'Many UAE business owners inadvertently claim input VAT on entertainment expenses or non-compliant tax invoices lacking TRN details. Reviewing input tax eligibility prior to quarterly VAT 201 submissions safeguards your firm against voluntary disclosure fines...'
  },
  {
    id: 'art-3',
    title: 'Bookkeeping Best Practices for Free Zone & Mainland Entities',
    category: 'Bookkeeping',
    readTime: '7 min read',
    date: 'June 2026',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    summary: 'Why maintain cloud ledgers (Xero/QuickBooks) is essential for bank account compliance and annual external audit certification.',
    content: 'Under federal UAE Commercial Companies Law, all business entities are required to maintain proper accounting records for a minimum of 5 years. Transitioning to cloud accounting ensures real-time cash flow tracking and seamless audit compliance...'
  }
];

export const LEDGERA_LOCATIONS = [
  {
    city: 'DUBAI (HEADQUARTERS)',
    building: 'Vision Tower, Level 18',
    district: 'Business Bay, Dubai, UAE',
    purpose: 'Accounting, Corporate Tax & Executive Financial Advisory',
    hours: 'Mon – Fri: 8:30 AM – 6:00 PM',
    phone: '+971 4 399 7000'
  },
  {
    city: 'ABU DHABI',
    building: 'Al Khatem Tower, Level 12',
    district: 'ADGM Square, Al Maryah Island, Abu Dhabi, UAE',
    purpose: 'ADGM SPV Audit, ESR & Financial Reporting',
    hours: 'Mon – Fri: 8:30 AM – 6:00 PM',
    phone: '+971 2 699 5000'
  },
  {
    city: 'SHARJAH',
    building: 'Sharjah Financial Center, Tower B',
    district: 'Al Majaz Business District, Sharjah, UAE',
    purpose: 'SME Bookkeeping, Payroll (WPS) & VAT Support',
    hours: 'Mon – Fri: 9:00 AM – 5:30 PM',
    phone: '+971 6 512 3000'
  }
];

export const LEDGERA_FAQS = [
  {
    question: 'Is my business required to register for UAE Corporate Tax?',
    answer: 'Yes. All UAE businesses (mainland and free zone) carrying on a business or commercial activity are required to obtain a Corporate Tax Registration Number (TRN) from the FTA, regardless of revenue level.'
  },
  {
    question: 'Do you handle both VAT registration and quarterly filing returns?',
    answer: 'Yes. We handle mandatory VAT registration (revenue > AED 375k), voluntary registration (revenue > AED 187.5k), monthly/quarterly return calculations, input tax deduction verification, and submission to the Federal Tax Authority portal.'
  },
  {
    question: 'Can LEDGERA manage monthly bookkeeping remotely on cloud accounting software?',
    answer: 'We deploy cloud accounting platforms (Xero, QuickBooks Online, Zoho Books) to manage your daily transactions, bill scanning, bank feeds, and monthly closing reports completely remotely with zero disruption to your daily operations.'
  },
  {
    question: 'Do you process Wage Protection System (WPS) payroll for UAE companies?',
    answer: 'Yes. We generate monthly WPS SIF files for MoHRE compliance, process staff pay slips, calculate leave salary accruals, and handle End of Service Gratuity (EOSG) settlements.'
  },
  {
    question: 'What happens if a business misses a Corporate Tax or VAT filing deadline?',
    answer: 'Missing an FTA filing deadline results in mandatory administrative fines (e.g. AED 10,000 for late tax registration, plus monthly recurring penalties). Our team maintains an automated compliance calendar to ensure zero late filings for all managed clients.'
  },
  {
    question: 'Do you provide audit preparation for DMCC, DAFZA, JAFZA, and ADGM free zone audits?',
    answer: 'Yes. We prepare full audit lead schedules, trial balances, inventory reconciliation statements, and liaise directly with approved external auditors to ensure rapid annual license renewal clearance.'
  }
];
