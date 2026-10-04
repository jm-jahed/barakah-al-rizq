export interface VeritasPracticeArea {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  typicalMatters: string[];
  clientTypes: string[];
  iconName: string;
  outcomes?: string[];
}

export interface VeritasIndustry {
  id: string;
  name: string;
  description: string;
  legalRisks: string[];
  relevantPractices: string[];
  exampleMatter: string;
  outcome: string;
}

export interface VeritasPartner {
  name: string;
  role: string;
  experience: string;
  specialization: string;
  image: string;
  bio: string;
  admissions: string;
}

export interface VeritasArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  summary: string;
  content: string;
}

export const VERITAS_BRAND = {
  name: 'VERITAS LEGAL',
  tagline: 'Precision in Every Clause.',
  positioning: 'Premium UAE Corporate Law Firm & Legal Advisory',
  whatsapp: 'https://wa.me/971509988440?text=Hello%20VERITAS%20LEGAL,%20I%20would%20like%20to%20schedule%20a%20corporate%20legal%20consultation.',
  phone: '+971 4 488 9000',
  email: 'counsel@veritaslegal.ae',
  difcAddress: 'Level 22, Al Fattan Currency House, DIFC, Dubai, UAE',
  adgmAddress: 'Level 16, Al Khatem Tower, ADGM Square, Abu Dhabi, UAE'
};

export const VERITAS_STATS = [
  { label: 'Corporate Clients Advised', value: '180+' },
  { label: 'Transactions Supported', value: 'AED 3.1B+' },
  { label: 'Client Retention Rate', value: '96%' },
  { label: 'Combined Practice Experience', value: '20+ Yrs' }
];

export const VERITAS_LOGOS = [
  'NOVA GROUP',
  'ALTA HOLDINGS',
  'ORBIT TECH',
  'VANTAGE RETAIL',
  'MERIDIAN CAPITAL',
  'LUMEN INDUSTRIES'
];

export const VERITAS_PRACTICE_AREAS: VeritasPracticeArea[] = [
  {
    id: 'corp-commercial',
    number: '01',
    title: 'Corporate & Commercial',
    subtitle: 'Joint Ventures, Commercial Contracts & Shareholder Agreements',
    description: 'Advising corporate groups and growth enterprises on entity structuring, joint venture agreements, supply chain contracts, and commercial operations across the UAE.',
    typicalMatters: ['Shareholders Agreements (SHA)', 'Joint Venture Formations', 'Distribution & Agency Contracts', 'Corporate Governance Frameworks'],
    clientTypes: ['Multinational Subsidiaries', 'UAE Commercial Enterprises', 'Family Offices'],
    iconName: 'Building2'
  },
  {
    id: 'ma-advisory',
    number: '02',
    title: 'Mergers & Acquisitions',
    subtitle: 'Buy-Side / Sell-Side Advisory & Legal Due Diligence',
    description: 'Guiding acquirers and target founders through cross-border M&A transactions, legal due diligence audits, SPA drafting, and post-closing integrations.',
    outcomes: ['Maximized transaction terms', 'Thorough liability discovery', 'Seamless completion'],
    typicalMatters: ['Share Purchase Agreements (SPA)', 'Asset Purchase Agreements (APA)', 'Vendor Legal Due Diligence', 'Cross-Border Mergers'],
    clientTypes: ['Private Equity Funds', 'Institutional Investors', 'Founders Exiting Business'],
    iconName: 'Scale'
  },
  {
    id: 'contract-drafting',
    number: '03',
    title: 'Contract Drafting & Review',
    subtitle: 'Bespoke Commercial Agreements & Risk Mitigation',
    description: 'Drafting airtight, enforceable commercial contracts under UAE Civil Code, DIFC Contract Law, and ADGM Common Law frameworks.',
    typicalMatters: ['Master Services Agreements (MSA)', 'NDAs & IP Transfer Agreements', 'SLA & Supplier Contracts', 'Executive Employment Contracts'],
    clientTypes: ['Tech Companies', 'Real Estate Firms', 'Service Enterprise Groups'],
    iconName: 'FileText'
  },
  {
    id: 'corp-structuring',
    number: '04',
    title: 'Corporate Structuring & Foundations',
    subtitle: 'DIFC / ADGM Foundations & Asset Ring-Fencing',
    description: 'Establishing sophisticated holding company structures, foundations, and offshore trusts to protect asset value and optimize inter-company legal governance.',
    typicalMatters: ['DIFC Foundation Registration', 'ADGM Holding Company Setup', 'Asset Ring-Fencing & Trusts', 'Estate & Succession Planning'],
    clientTypes: ['High-Net-Worth Families', 'Group Conglomerates', 'International Investors'],
    iconName: 'ShieldCheck'
  },
  {
    id: 'employment-law',
    number: '05',
    title: 'Employment & Labor Advisory',
    subtitle: 'UAE Labor Law Compliance, Restructuring & Dispute Resolution',
    description: 'Advising employers and C-suite executives on UAE Federal Labor Law compliance, non-compete covenants, severance disputes, and executive contracts.',
    typicalMatters: ['Executive Employment Contracts', 'Non-Compete Enforceability', 'Redundancy & Restructuring Advisory', 'Labor Dispute Defense'],
    clientTypes: ['Corporate Employers', 'C-Suite Executives', 'HR Operations Leads'],
    iconName: 'Users'
  },
  {
    id: 'dispute-resolution',
    number: '06',
    title: 'Dispute Resolution & Arbitration',
    subtitle: 'DIAC Arbitration, DIFC Courts & Commercial Litigation',
    description: 'Representing commercial clients in high-stakes DIAC arbitration, DIFC/ADGM Court litigation, and complex commercial dispute negotiations.',
    typicalMatters: ['DIAC Arbitration Proceedings', 'DIFC Court Commercial Disputes', 'Shareholder Deadlock Resolution', 'Breach of Contract Claims'],
    clientTypes: ['Corporate Claimants', 'Defense Litigants', 'Joint Venture Partners'],
    iconName: 'Gavel'
  },
  {
    id: 'real-estate-law',
    number: '07',
    title: 'Real Estate & Construction',
    subtitle: 'Property Conveyancing, Development Agreements & FIDIC Contracts',
    description: 'Counseling property developers, institutional buyers, and contractors on real estate acquisition, escrow compliance, and FIDIC construction disputes.',
    typicalMatters: ['FIDIC Construction Contracts', 'Commercial Lease Structuring', 'RERA Escrow Account Compliance', 'Property Acquisition Due Diligence'],
    clientTypes: ['Real Estate Developers', 'Institutional Buyers', 'EPC Contractors'],
    iconName: 'Building'
  },
  {
    id: 'banking-finance',
    number: '08',
    title: 'Banking & Financial Regulation',
    subtitle: 'Syndicated Loans, Facility Agreements & Central Bank Compliance',
    description: 'Advising borrowers and lenders on credit facility agreements, mortgage registration, debt restructuring, and DFSA/FSRA regulatory compliance.',
    typicalMatters: ['Syndicated Loan Facilities', 'Security & Mortgage Agreements', 'Fintech Regulatory Clearance', 'Debt Restructuring Counsel'],
    clientTypes: ['Financial Institutions', 'Corporate Borrowers', 'Fintech Startups'],
    iconName: 'DollarSign'
  },
  {
    id: 'intellectual-property',
    number: '09',
    title: 'Intellectual Property Protection',
    subtitle: 'GCC Trademark Registration, Licensing & Brand Enforcement',
    description: 'Securing trademarks, patents, and software copyrights across the 7 Emirates and GCC region, along with cease-and-desist enforcement.',
    typicalMatters: ['GCC Trademark Registration', 'Software & IP Licensing', 'Brand Infringement Enforcement', 'Trade Secret Protection'],
    clientTypes: ['E-Commerce Brands', 'Tech Developers', 'Franchise Operators'],
    iconName: 'Shield'
  },
  {
    id: 'regulatory-compliance',
    number: '10',
    title: 'Regulatory & AML Compliance',
    subtitle: 'UAE Corporate Tax, AML/CFT Regulations & ESR Filings',
    description: 'Assisting corporate entities in staying compliant with UAE Anti-Money Laundering (AML) mandates, Economic Substance Regulations (ESR), and FTA Tax laws.',
    typicalMatters: ['AML / KYC Compliance Policies', 'ESR Reporting & Filings', 'Corporate Governance Audits', 'Data Protection (DIFC DP Law)'],
    clientTypes: ['Financial Firms', 'Designated Non-Financial Businesses (DNFBP)', 'Holding Groups'],
    iconName: 'FileCheck'
  }
];

export const VERITAS_INDUSTRIES: VeritasIndustry[] = [
  {
    id: 'real-estate',
    name: 'Real Estate & Property',
    description: 'Structuring commercial development projects, joint venture land acquisitions, and FIDIC contractor dispute resolutions.',
    legalRisks: ['Escrow account regulatory compliance', 'Subcontractor delays and liquid damages claims', 'Commercial lease termination disputes'],
    relevantPractices: ['Real Estate & Construction', 'Dispute Resolution', 'Corporate & Commercial'],
    exampleMatter: 'Advised developer on AED 180M luxury residential joint venture contract in Dubai Maritime City.',
    outcome: 'Airtight escrow terms and zero litigation exposure across 24-month build phase.'
  },
  {
    id: 'tech',
    name: 'Technology & FinTech',
    description: 'Guiding SaaS companies, crypto/fintech ventures, and venture funds through DIFC/ADGM licensing, IP assignments, and Series A/B term sheets.',
    legalRisks: ['IP leakage in cross-border dev teams', 'DFSA/FSRA regulatory sandbox non-compliance', 'Shareholder vesting disagreements'],
    relevantPractices: ['Intellectual Property', 'Banking & Finance', 'Corporate Structuring'],
    exampleMatter: 'Structured ADGM holding entity and IP assignment framework for AI fintech enterprise.',
    outcome: 'Secured AED 22M institutional investment with complete IP protection.'
  },
  {
    id: 'finance',
    name: 'Financial Services & Funds',
    description: 'Advising fund managers, wealth offices, and private equity sponsors on DIFC/ADGM fund formation and regulatory filings.',
    legalRisks: ['AML/CFT non-compliance fines', 'Investor redemption dispute litigation', 'Cross-border tax reporting exposure'],
    relevantPractices: ['Banking & Finance', 'Regulatory Compliance', 'M&A Advisory'],
    exampleMatter: 'Established DIFC Qualifying Investor Fund structure for European asset management firm.',
    outcome: 'Full DFSA regulatory clearance within 60 days.'
  },
  {
    id: 'construction',
    name: 'Construction & Engineering',
    description: 'Drafting FIDIC contract suites, managing variation claims, and representing main contractors in DIAC arbitration.',
    legalRisks: ['Unapproved variation order disputes', 'Performance bond call risks', 'Joint venture liability exposure'],
    relevantPractices: ['Real Estate & Construction', 'Dispute Resolution & Arbitration'],
    exampleMatter: 'Defended main contractor in AED 45M DIAC arbitration regarding infrastructure delays.',
    outcome: 'Settled matter with 85% claim recovery and zero bond forfeiture.'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    description: 'Handling DHA/MOHAP regulatory approvals, medical malpractice liability structuring, and clinic acquisition SPA agreements.',
    legalRisks: ['DHA facility license suspension risks', 'Practitioner liability exposure', 'Patient data privacy violations'],
    relevantPractices: ['Regulatory Compliance', 'M&A Advisory', 'Contract Drafting'],
    exampleMatter: 'Represented healthcare group in acquiring 4 specialist surgical centers across Dubai.',
    outcome: 'Completed acquisition SPA with 100% regulatory transfer approval.'
  },
  {
    id: 'retail',
    name: 'Retail & E-Commerce',
    description: 'Drafting franchise agreements, cross-border distributor contracts, and GCC consumer protection compliance.',
    legalRisks: ['Commercial agency registration disputes', 'Counterfeit brand infringement', 'Cross-border customs delays'],
    relevantPractices: ['Intellectual Property', 'Contract Drafting', 'Corporate & Commercial'],
    exampleMatter: 'Negotiated GCC master franchise agreement for luxury European fashion brand.',
    outcome: 'Protected brand IP rights while securing 12 regional boutique locations.'
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Leisure',
    description: 'Advising hotel owners, restaurant groups, and entertainment venues on hotel management agreements (HMA) and venue leases.',
    legalRisks: ['Hotel management agreement termination penalties', 'Liquor & entertainment license breaches', 'Commercial lease forfeitures'],
    relevantPractices: ['Corporate & Commercial', 'Real Estate & Construction', 'Employment Law'],
    exampleMatter: 'Structured hotel management agreement for beachfront boutique resort in Ras Al Khaimah.',
    outcome: 'Favorable performance test clauses protecting owner yield.'
  }
];

export const VERITAS_JURISDICTIONS = [
  {
    name: 'DIFC (Dubai International Financial Centre)',
    type: 'Financial Free Zone (English Common Law)',
    useCases: 'Holding entities, private wealth foundations, venture capital funds, international arbitration.',
    ecosystem: 'Independent DIFC Courts, DFSA financial regulator, DIFC Data Protection Law.',
    considerations: 'Ideal for international investors seeking familiar Common Law principles and DIFC Court jurisdiction.'
  },
  {
    name: 'ADGM (Abu Dhabi Global Market)',
    type: 'Financial Free Zone (Direct English Common Law Application)',
    useCases: 'SPVs, holding structures, tech sandboxes, family offices, asset management.',
    ecosystem: 'ADGM Courts, FSRA regulator, English common law directly incorporated.',
    considerations: 'Cost-effective SPV structures and rapid digital registration processes.'
  },
  {
    name: 'UAE Onshore (Mainland DED)',
    type: 'Civil Law (UAE Federal Code & Local DED)',
    useCases: 'Direct B2B/B2C commercial trading, government contracting, physical retail/real estate within UAE.',
    ecosystem: 'UAE Federal Courts, Local Economic Departments, MoET regulations.',
    considerations: '100% foreign ownership available for most commercial activities under updated Commercial Companies Law.'
  }
];

export const VERITAS_CASE_STUDY = {
  clientName: 'Meridian Capital Holdings',
  industry: 'Financial Services & Investment',
  challenge: 'Uncoordinated entity structures across 3 UAE jurisdictions created conflicting liability risks, duplicate compliance expenses, and AED 1.2M in annual legal overhead.',
  beforeStats: {
    entities: '3 Unaligned Entities',
    liability: 'Unclear Personal & Corporate Risk',
    overhead: 'AED 1.2M Annual Legal & Admin Overhead'
  },
  afterStats: {
    entities: 'Unified 1 Holding Structure (DIFC Foundation)',
    liability: 'Ring-Fenced Asset Protection',
    overhead: 'AED 480K Streamlined Annual Overhead'
  },
  metrics: [
    { label: 'Compliance Overhead Reduction', value: '-60%' },
    { label: 'Regulatory Alignment', value: '100%' },
    { label: 'Entity Consolidation', value: '3 ➔ 1 Structure' }
  ],
  quote: 'VERITAS LEGAL restructured our entire holding setup with a level of precision we had not experienced with previous counsel. Their understanding of DIFC Common Law saved our board significant capital.',
  author: 'Khalid Mansoor, CFO of Meridian Capital Holdings'
};

export const VERITAS_PARTNERS: VeritasPartner[] = [
  {
    name: 'Edward Vance, KC',
    role: 'Managing Partner',
    experience: '22+ Years Corporate Practice',
    specialization: 'Cross-Border M&A, DIFC Foundations & Sovereign Structuring',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    bio: 'Former partner at a Magic Circle law firm in London and Dubai, Edward has advised on over AED 2B in GCC corporate transactions and DIFC Foundation setups.',
    admissions: 'Admitted in England & Wales (KC) & Registered DIFC Courts Practitioner'
  },
  {
    name: 'Amina Al-Hassani',
    role: 'Head of Corporate & M&A',
    experience: '16+ Years UAE Practice',
    specialization: 'UAE Commercial Companies Law, Joint Ventures & Private Equity',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    bio: 'Leading UAE corporate legal counsel specializing in complex multi-shareholder joint ventures, DED mainland restructuring, and cross-border M&A.',
    admissions: 'Licensed UAE Legal Consultant & ADGM Practitioner'
  },
  {
    name: 'Julian Thorne',
    role: 'Head of Dispute Resolution & Arbitration',
    experience: '18+ Years Litigation',
    specialization: 'DIAC Arbitration, DIFC Courts & Commercial Litigation',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    bio: 'Veteran arbitration practitioner having acted as counsel and arbitrator in over 70 DIAC, ICC, and DIFC Court commercial disputes.',
    admissions: 'Registered Advocate & DIFC / ADGM Courts Rights of Audience'
  },
  {
    name: 'Reem Al-Maktoum',
    role: 'Head of Regulatory & Tax Compliance',
    experience: '14+ Years Compliance',
    specialization: 'UAE Corporate Tax Law, ESR, AML & Financial Regulation',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    bio: 'Specialist regulatory counsel advising financial institutions and corporate groups on UAE Federal Tax Authority compliance and DFSA rules.',
    admissions: 'Licensed UAE Legal Consultant & Certified Tax Specialist'
  }
];

export const VERITAS_ARTICLES: VeritasArticle[] = [
  {
    id: 'art-1',
    title: 'Understanding DIFC vs. Onshore Jurisdiction for UAE Businesses',
    category: 'Corporate Structuring',
    readTime: '7 min read',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    summary: 'A detailed legal analysis comparing English Common Law application in DIFC with UAE Civil Code onshore for commercial entity setups.',
    content: 'When structuring a business in the UAE, choice of law and court jurisdiction is a primary risk management decision. DIFC offers an independent Common Law court system operating in English, ideal for shareholder dispute resolution and international investment funds...'
  },
  {
    id: 'art-2',
    title: 'Drafting Airtight Commercial Contracts Under UAE Law',
    category: 'Contract Law',
    readTime: '6 min read',
    date: 'July 2026',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    summary: 'Key clauses every UAE commercial contract must include regarding governing law, liquidated damages, and DIAC arbitration clauses.',
    content: 'Commercial contracts governed by UAE Civil Law require precise drafting regarding limitation of liability clauses, force majeure definitions, and dispute resolution venues to ensure full enforceability in local courts...'
  },
  {
    id: 'art-3',
    title: 'M&A in the UAE: Key Legal Due Diligence Checklists for Buyers',
    category: 'Mergers & Acquisitions',
    readTime: '8 min read',
    date: 'June 2026',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
    summary: 'Essential legal due diligence checks for foreign acquirers buying shares in UAE onshore or free zone companies.',
    content: 'Acquiring an established business in Dubai or Abu Dhabi involves auditing corporate trade licenses, labor ministry visa quotas, IP ownership, and corporate tax compliance histories to prevent undisclosed liabilities...'
  }
];

export const VERITAS_LOCATIONS = [
  {
    city: 'DUBAI (DIFC HEADQUARTERS)',
    building: 'Al Fattan Currency House, Level 22',
    district: 'DIFC Financial District, Dubai, UAE',
    purpose: 'Corporate Advisory, M&A & DIFC Litigation Chambers',
    hours: 'Mon – Fri: 8:30 AM – 6:30 PM',
    phone: '+971 4 488 9000'
  },
  {
    city: 'ABU DHABI (ADGM)',
    building: 'Al Khatem Tower, Level 16',
    district: 'ADGM Square, Al Maryah Island, Abu Dhabi, UAE',
    purpose: 'Financial Services Regulatory & ADGM SPV Advisory',
    hours: 'Mon – Fri: 8:30 AM – 6:30 PM',
    phone: '+971 2 699 4000'
  },
  {
    city: 'SHARJAH',
    building: 'Sharjah Executive Tower A',
    district: 'Al Majaz Waterfront, Sharjah, UAE',
    purpose: 'SME Commercial Contracts & Onshore Legal Support',
    hours: 'Mon – Fri: 9:00 AM – 5:00 PM',
    phone: '+971 6 511 2000'
  }
];

export const VERITAS_FAQS = [
  {
    question: 'Do you handle both DIFC/ADGM Common Law and UAE Onshore Civil Law matters?',
    answer: 'Yes. Our senior legal team includes practitioners registered with the DIFC and ADGM Courts as well as licensed UAE legal consultants capable of advising across both English Common Law financial zones and UAE Civil Code onshore jurisdictions.'
  },
  {
    question: 'Can VERITAS LEGAL assist international companies entering the UAE?',
    answer: 'We specialize in cross-border UAE market entry legal advisory. We assist foreign parent corporations in selecting appropriate entity structures, drafting shareholder agreements, and securing necessary commercial licensing clearances.'
  },
  {
    question: 'Do you offer fixed-fee arrangements for corporate legal matters?',
    answer: 'For structured matters such as contract drafting, M&A legal due diligence, DIFC Foundation setups, and corporate compliance audits, we frequently provide transparent fixed-fee engagements. Complex litigation or arbitration is conducted on tailored retainer schedules.'
  },
  {
    question: 'Do you represent clients in DIAC arbitration and DIFC Court litigation?',
    answer: 'Yes. Our dispute resolution partners routinely act as legal counsel in commercial arbitrations under DIAC (Dubai International Arbitration Centre) rules as well as litigation before the DIFC and ADGM Courts.'
  },
  {
    question: 'Is our initial legal consultation strictly confidential?',
    answer: 'All communications during your initial consultation are protected under legal professional privilege and strict attorney-client confidentiality rules.'
  },
  {
    question: 'Can you review urgent commercial contracts within 24–48 hours?',
    answer: 'Yes. We maintain an expedited corporate review desk for time-sensitive commercial contracts, term sheets, and injunction matters.'
  }
];
