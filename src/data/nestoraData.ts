export interface NestoraService {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  clientProfile: string[];
  iconName: string;
  feeStructure: string;
}

export interface NestoraCommunity {
  id: string;
  name: string;
  city: string;
  avgYield: string;
  occupancyRate: string;
  description: string;
  topFeatures: string[];
  popularLayouts: string;
  landlordInsight: string;
}

export interface NestoraLeader {
  name: string;
  role: string;
  experience: string;
  specialization: string;
  image: string;
  bio: string;
}

export interface NestoraArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  summary: string;
  content: string;
}

export const NESTORA_BRAND = {
  name: 'NESTORA',
  tagline: 'Your Property. Managed With Precision.',
  positioning: 'Premium UAE Property Management & Landlord Advisory',
  whatsapp: 'https://wa.me/971509988440?text=Hello%20NESTORA,%20I%20would%20like%20to%20request%20a%20free%20property%20management%20assessment.',
  phone: '+971 4 488 2000',
  email: 'landlords@nestora.ae',
  dubaiAddress: 'Level 24, Vision Tower, Business Bay, Dubai, UAE',
  abuDhabiAddress: 'Level 14, Sky Tower, Al Reem Island, Abu Dhabi, UAE'
};

export const NESTORA_STATS = [
  { label: 'UAE Units Under Management', value: '450+' },
  { label: 'Landlord Portfolio Value', value: 'AED 1.2B+' },
  { label: 'Average Portfolio Occupancy', value: '97.4%' },
  { label: 'On-Time Rent Collection Rate', value: '99.1%' }
];

export const NESTORA_LOGOS = [
  'EMAAR PROPERTIES',
  'DAMAC HOLDINGS',
  'SOBHA REALTY',
  'AL DAR ADGM',
  'MERAAS HOLDINGS',
  'SELECT GROUP'
];

export const NESTORA_SERVICES: NestoraService[] = [
  {
    id: 'full-management',
    number: '01',
    title: 'Full Landlord Property Management',
    subtitle: 'End-to-End Leasing, Maintenance, Rent Collection & Ejari',
    description: 'Complete hands-off property management for resident and overseas landlords. We handle tenant sourcing, Ejari, rent cheques, maintenance, and annual renewals.',
    deliverables: ['Tenant Vetting & Background Checks', 'Ejari Registration & Contract Execution', 'Automated Cheque & Wire Rent Escrow', 'Bi-Annual Technical Property Inspections'],
    clientProfile: ['Overseas Investors', 'HNW Multi-Unit Landlords', 'SPV Real Estate Entities'],
    iconName: 'Building2',
    feeStructure: '8% Fixed Annual Management Fee'
  },
  {
    id: 'tenant-sourcing',
    number: '02',
    title: 'Tenant Screening & Placement',
    subtitle: 'High-Credit Tenant Matching, Background Audits & Lease Execution',
    description: 'Marketing your property on top portals (Property Finder/Bayut) to place corporate tenants, expats, and high-credit families within 14 days.',
    deliverables: ['Professional HD Property Photography', 'Al Etihad Credit Bureau Screening', 'AECB Salary & Employment Verification', 'Digital Tenancy Contract Execution'],
    clientProfile: ['Individual Villa & Apartment Owners'],
    iconName: 'Users',
    feeStructure: '5% Placement Commission'
  },
  {
    id: 'ejari-compliance',
    number: '03',
    title: 'Ejari & RERA Compliance Management',
    subtitle: 'Official Ejari Online Filings, Rental Index Audits & Dispute Resolution',
    description: 'Navigating Dubai REST / Ejari system registration, DLD tenancy compliance, RERA Rent Calculator increases, and dispute tribunal representation.',
    deliverables: ['Official Ejari Certificate Generation', 'RERA Rental Index Increase Audit', 'Landlord Legal Representation', 'Eviction & Renewal Notice Drafting'],
    clientProfile: ['All Dubai & Abu Dhabi Property Landlords'],
    iconName: 'FileCheck',
    feeStructure: 'Flat AED 750 / Contract Renewal'
  },
  {
    id: 'rent-collection',
    number: '04',
    title: 'Rent Collection & Cheque Escrow',
    subtitle: 'PDC Cheque Storage, Direct Debit Integration & Landlord Portal',
    description: 'Secure post-dated cheque bank vault storage, direct debit rent transfers, prompt payout disbursement, and online landlord ledger reporting.',
    deliverables: ['Bank Vault PDC Cheque Management', 'Direct Debit Rent Transfer Setup', 'Monthly Owner Disbursement Statements', 'Bounced Cheque Recovery Guarantee'],
    clientProfile: ['Multi-Property Investors & SPVs'],
    iconName: 'Wallet',
    feeStructure: 'Included in Full Management'
  },
  {
    id: 'maintenance-inspections',
    number: '05',
    title: '24/7 Facility Maintenance & Inspections',
    subtitle: 'Emergency MEP Plumbing, HVAC Servicing & Digital Move-In Audits',
    description: 'In-house maintenance team providing 24/7 emergency response for air conditioning, plumbing, electrical, and detailed move-in/move-out condition reports.',
    deliverables: ['24/7 Emergency Technician Dispatch', 'Bi-Annual HVAC & MEP Inspections', 'Digital Move-In Photo Condition Audits', 'Transparent Contractor Repair Invoicing'],
    clientProfile: ['Luxury Villa & High-End Apartment Owners'],
    iconName: 'Wrench',
    feeStructure: 'Cost + 0% Markup (Preferred Contractor Rates)'
  },
  {
    id: 'holiday-homes',
    number: '06',
    title: 'Short-Term Holiday Home Management',
    subtitle: 'DTCM License Approval, Airbnb / Booking.com Yield Maximization',
    description: 'Converting prime residential units into licensed Dubai Tourism (DTCM) short-term rentals, maximizing net yield by up to 35% higher than long-term leases.',
    deliverables: ['DTCM Short-Term Rental Permit Licensing', 'Dynamic Daily Price Optimization Engine', '5-Star Hotel Housekeeping & Linen Service', 'Guest Check-In & Concierge Desk'],
    clientProfile: ['Prime Location Units (Downtown, Marina, Palm)'],
    iconName: 'Palmtree',
    feeStructure: '15% – 20% Net Revenue Share'
  },
  {
    id: 'handover-snagging',
    number: '07',
    title: 'Developer Handover & Architectural Snagging',
    subtitle: 'Off-Plan Handover Inspections, Thermal Leak Audits & Defect Reports',
    description: 'Conducting rigorous architectural snagging inspections on new off-plan handovers (Emaar/Sobha/Nakheel) prior to final developer key handover.',
    deliverables: ['200-Point Architectural & MEP Snag Audit', 'Infrared Thermal Moisture Leak Testing', 'Developer Defect Rectification Liaison', 'Key Collection & Meter Registration'],
    clientProfile: ['Off-Plan Investors Handing Over Units'],
    iconName: 'CheckSquare',
    feeStructure: 'AED 1,500 – AED 3,500 / Property'
  },
  {
    id: 'renovation-staging',
    number: '08',
    title: 'Property Renovation & Home Staging',
    subtitle: 'Interior Refurbishment, Furniture Packages & Rental Yield Elevation',
    description: 'Upgrading older properties with modern interior staging, kitchen refurbishments, and furniture packages to increase rental value by 15% – 25%.',
    deliverables: ['3D Interior Design Renderings', 'Turnkey Luxury Furniture Fitting', 'Bathroom & Kitchen Refurbishment', 'Property Listing Photography Enhancement'],
    clientProfile: ['Older Residential Unit Owners (10+ Yrs Old)'],
    iconName: 'ShieldCheck',
    feeStructure: 'Project Turnkey Quote'
  }
];

export const NESTORA_COMMUNITIES: NestoraCommunity[] = [
  {
    id: 'dubai-marina',
    name: 'Dubai Marina & JBR',
    city: 'Dubai',
    avgYield: '7.2% Gross Yield',
    occupancyRate: '98.1%',
    description: 'High-density waterfront residential hub offering robust rental demand from corporate expats, sea-view penthouses, and high short-term holiday home conversion potential.',
    topFeatures: ['High expat tenant demand', 'Walkable waterfront promenade', 'Strong short-term rental yields'],
    popularLayouts: '1-Bed & 2-Bed Apartments (750 – 1,400 sq ft)',
    landlordInsight: 'Short-term DTCM holiday home conversions yield 25% higher annual net returns than standard 1-cheque annual leases in prime marina towers.'
  },
  {
    id: 'downtown-dubai',
    name: 'Downtown Dubai',
    city: 'Dubai',
    avgYield: '6.8% Gross Yield',
    occupancyRate: '97.5%',
    description: 'Dubai flagship luxury district surrounding Burj Khalifa and Dubai Mall. Premium rental rates, corporate tenant profiles, and capital appreciation resilience.',
    topFeatures: ['Burj Khalifa & Fountain views', 'High-profile corporate executives', 'Premium rental rates per sq ft'],
    popularLayouts: 'Luxury 1-Bed & 3-Bed Penthouses',
    landlordInsight: 'High tenant retention (average stay 2.8 years). Corporate executives prioritize prompt maintenance response times over minor rent adjustments.'
  },
  {
    id: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    city: 'Dubai',
    avgYield: '6.5% Gross Yield',
    occupancyRate: '96.8%',
    description: 'Iconic luxury beachfront fronds and luxury resort residences. High rental price stability, elite HNW tenant demographics, and luxury villa demand.',
    topFeatures: ['Private beach access', 'Ultra-luxury frond villas', 'Resort-style luxury living'],
    popularLayouts: '4-Bed & 5-Bed Frond Villas / Luxury Beach Apartments',
    landlordInsight: 'High-net-worth tenants require immaculate preventive maintenance records and formal Ejari compliance for corporate housing allowances.'
  },
  {
    id: 'dubai-hills',
    name: 'Dubai Hills Estate',
    city: 'Dubai',
    avgYield: '7.8% Gross Yield',
    occupancyRate: '98.6%',
    description: 'Premier master-planned family community featuring championship 18-hole golf course, expansive parks, King’s College Hospital, and top international schools.',
    topFeatures: ['Championship Golf Course', 'Top international schools nearby', 'High family tenant retention'],
    popularLayouts: '3-Bed & 4-Bed Townhouses & Parkside Apartments',
    landlordInsight: 'Family tenants stay an average of 3.4 years. High demand for long-term multi-year lease agreements with 2–4 cheque flexibility.'
  },
  {
    id: 'jvc',
    name: 'Jumeirah Village Circle (JVC)',
    city: 'Dubai',
    avgYield: '8.4% Gross Yield',
    occupancyRate: '98.9%',
    description: 'Top gross rental yield community in Dubai, popular among young working professionals seeking affordable modern living near Al Khail Road.',
    topFeatures: ['Highest gross rental yields', 'Rapid tenant placement (<10 days)', 'Strong affordable entry price'],
    popularLayouts: 'Studios, 1-Bed & 2-Bed Modern Apartments',
    landlordInsight: 'Zero vacancy turnaround when priced at market RERA rates. Cloud bookkeeping & automated cheque processing ensure seamless portfolio management.'
  },
  {
    id: 'yas-island',
    name: 'Yas Island & Saadiyat',
    city: 'Abu Dhabi',
    avgYield: '7.1% Gross Yield',
    occupancyRate: '97.2%',
    description: 'Abu Dhabi capital prime residential destinations combining Yas Bay entertainment, Ferrari World, and Saadiyat Cultural District luxury beach apartments.',
    topFeatures: ['Abu Dhabi government & tech tenants', 'Cultural District proximity', 'High capital appreciation'],
    popularLayouts: '2-Bed Beach Apartments & 4-Bed Luxury Villas',
    landlordInsight: 'High government and semi-government employee tenant base. Corporate leases backed by employer direct bank transfers.'
  }
];

export const NESTORA_CASE_STUDY = {
  clientName: 'Serenity Tower Portfolio',
  location: 'Dubai Marina & Downtown (12 Units)',
  industry: 'Overseas Private Landlord Group (UK & GCC)',
  challenge: 'Prior local agency had 35% portfolio vacancy, 4 months backlogged rent collections, uncollected maintenance fees, and tenant Ejari disputes.',
  beforeStats: {
    occupancy: '65% Portfolio Occupancy',
    rentCollection: '4 Months Delayed Cheques',
    netYield: '4.2% Net Annual Yield'
  },
  afterStats: {
    occupancy: '98% Full Occupancy Achieved',
    rentCollection: '100% On-Time Rent Disbursement',
    netYield: '7.8% Net Annual Yield'
  },
  metrics: [
    { label: 'Portfolio Occupancy Rate', value: '98%' },
    { label: 'Net Annual Yield Improvement', value: '+18%' },
    { label: 'Bounced Cheque / Ejari Disputes', value: '0' }
  ],
  quote: 'NESTORA turned our 12 Dubai apartments from a stressful headache into a smooth, hands-free income machine. Their quarterly owner reports are second to none.',
  author: 'Arthur Pendelton, Private Landlord (London & Dubai)'
};

export const NESTORA_LEADERS: NestoraLeader[] = [
  {
    name: 'Tariq Al-Rashid',
    role: 'Managing Director & Head of Asset Management',
    experience: '17+ Years UAE Real Estate',
    specialization: 'Landlord Asset Optimization, Multi-Unit Building Management & RERA Compliance',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    bio: 'Former senior asset manager at Emaar Properties, Tariq oversees a portfolio of 450+ residential apartments and luxury villas across Dubai and Abu Dhabi.'
  },
  {
    name: 'Chloe Bennett',
    role: 'Head of Tenant Operations & Leasing',
    experience: '12+ Years UAE Leasing',
    specialization: 'High-Credit Tenant Placement, Background Audits & Short-Term DTCM Holiday Homes',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    bio: 'Leads our tenant placement team, achieving an average 12-day property fill rate while maintaining strict credit background checks.'
  },
  {
    name: 'Faisel Al-Khoury',
    role: 'Head of Facilities & Maintenance Engineering',
    experience: '15+ Years MEP Engineering',
    specialization: '24/7 HVAC Servicing, Architectural Snagging & Preventive Property Care',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    bio: 'Chartered facilities engineer directing our in-house 24/7 emergency repair technicians and property inspection audits.'
  },
  {
    name: 'Nadia Al-Suwaidi',
    role: 'Head of Legal, Ejari & RERA Compliance',
    experience: '11+ Years UAE Property Law',
    specialization: 'Ejari Portal Registration, RERA Rent Calculator Appeals & Dispute Tribunals',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    bio: 'Specialist in Dubai Land Department (DLD) regulations, ensuring 100% legal tenancy compliance and zero landlord exposure.'
  }
];

export const NESTORA_ARTICLES: NestoraArticle[] = [
  {
    id: 'art-1',
    title: 'Understanding the Dubai RERA Rental Index Increase Rules',
    category: 'RERA Compliance',
    readTime: '6 min read',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
    summary: 'How landlords can legally calculate allowable rent increases upon tenancy renewal using the official RERA Smart Calculator.',
    content: 'The Dubai Real Estate Regulatory Agency (RERA) regulates rental increases based on how a property’s rent compares to the community average. Understanding the 5% to 20% increase tiers prevents costly tenant disputes...'
  },
  {
    id: 'art-2',
    title: 'Short-Term Holiday Homes vs Long-Term Leases: Maximizing Yield',
    category: 'Rental Yield',
    readTime: '5 min read',
    date: 'July 2026',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop',
    summary: 'Comparing net rental returns between licensed DTCM Airbnb holiday homes and annual 1-cheque residential leases in Downtown Dubai.',
    content: 'While short-term rentals in prime tourism spots like Downtown or Marina can boost gross revenue by 30%, landlords must factor in utility bills, cleaning fees, and DTCM licensing costs to evaluate true net yields...'
  },
  {
    id: 'art-3',
    title: 'Top 5 Vetting Checks Before Signing a UAE Tenancy Agreement',
    category: 'Tenant Screening',
    readTime: '7 min read',
    date: 'June 2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    summary: 'Essential background verification steps including AECB credit checks, employment verification, and cheque authorization.',
    content: 'Placing a high-credit tenant is the single most important factor in protecting your UAE real estate investment. Verifying employer salary letters and AECB credit scores ensures on-time rent cheque clearings...'
  }
];

export const NESTORA_LOCATIONS = [
  {
    city: 'DUBAI (HEADQUARTERS)',
    building: 'Vision Tower, Level 24',
    district: 'Business Bay, Dubai, UAE',
    purpose: 'Full Property Management, Ejari Desk & Landlord Relations',
    hours: 'Mon – Fri: 8:30 AM – 6:00 PM',
    phone: '+971 4 488 2000'
  },
  {
    city: 'ABU DHABI',
    building: 'Sky Tower, Level 14',
    district: 'Al Reem Island, Abu Dhabi, UAE',
    purpose: 'Abu Dhabi Property Leasing, Maintenance & Tenant Operations',
    hours: 'Mon – Fri: 9:00 AM – 6:00 PM',
    phone: '+971 2 688 4000'
  }
];

export const NESTORA_FAQS = [
  {
    question: 'How much does NESTORA charge for full property management?',
    answer: 'We charge a transparent, fixed 8% annual management fee on collected rent for full management. There are zero hidden markups on maintenance or tenant renewals.'
  },
  {
    question: 'Can you manage my property if I live outside the UAE?',
    answer: 'Yes. Over 60% of our landlords reside overseas (UK, Europe, Asia, Americas). We manage the entire process remotely, transferring rent directly to your international bank account with monthly owner statements.'
  },
  {
    question: 'How quickly can NESTORA find a tenant for my vacant unit?',
    answer: 'Our average tenant placement turnaround is 12 days. We list your property with premium placement on Property Finder and Bayut, handle viewings, perform credit checks, and finalize Ejari contracts.'
  },
  {
    question: 'How do you handle maintenance repairs and tenant emergencies?',
    answer: 'We operate an in-house 24/7 maintenance desk. Minor repairs under a pre-agreed threshold (e.g. AED 500) are resolved instantly. Major repairs require landlord photo approval prior to contractor dispatch.'
  },
  {
    question: 'What happens if a tenant’s post-dated cheque bounces?',
    answer: 'Under modern UAE law, bounced cheques are subject to fast-track legal execution. We handle legal notice serving, landlord representation, and cheque recovery with zero administrative stress for you.'
  },
  {
    question: 'Do you register the Ejari contract with Dubai Land Department?',
    answer: 'Yes. We process official Ejari registration online within 24 hours of lease execution, ensuring complete DLD legal compliance.'
  }
];
