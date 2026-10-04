export interface VantageProject {
  id: string;
  name: string;
  location: string;
  city: 'Dubai' | 'Abu Dhabi';
  status: 'Off-Plan' | 'Under Construction' | 'Ready';
  type: 'Apartments' | 'Villas' | 'Mixed-Use';
  startingPriceAED: number;
  handover: string;
  unitTypes: string;
  heroImage: string;
  galleryImages: string[];
  description: string;
  amenities: string[];
  paymentPlan: string;
  positioning: string;
  constructionProgress: number; // percentage
}

export interface VantageCommunity {
  id: string;
  name: string;
  category: 'Waterfront' | 'Urban' | 'Villa' | 'Mixed-Use';
  lifestyle: string;
  amenities: string[];
  buyerProfile: string;
  representativeProject: string;
  locationContext: string;
}

export interface VantageLeader {
  name: string;
  role: string;
  experience: string;
  specialization: string;
  image: string;
  bio: string;
}

export interface VantageArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  summary: string;
  content: string;
}

export const VANTAGE_BRAND = {
  name: 'VANTAGE DEVELOPMENTS',
  tagline: "Building Tomorrow's Landmarks.",
  positioning: 'Premium UAE Real Estate Developer',
  whatsapp: 'https://wa.me/971509988440?text=Hello%20VANTAGE%20DEVELOPMENTS,%20I%20would%20like%20to%20register%20my%20interest%20in%20your%20flagship%20developments.',
  phone: '+971 4 588 3000',
  email: 'sales@vantagedevelopments.ae',
  dubaiAddress: 'Vantage Sales Gallery, Level 30, Vision Tower, Business Bay, Dubai, UAE',
  abuDhabiAddress: 'Vantage Sales Suite, Level 18, Addax Tower, Al Reem Island, Abu Dhabi, UAE'
};

export const VANTAGE_STATS = [
  { label: 'Total Development Value', value: 'AED 6.2B+' },
  { label: 'Landmark UAE Projects', value: '8 Flagships' },
  { label: 'Residential Units Delivered', value: '3,400+' },
  { label: 'On-Time Handover Record', value: '100%' }
];

export const VANTAGE_LOGOS = [
  'EMAAR PARTNERS',
  'DAMAC STRUCTURAL',
  'SOBHA CONTRACTING',
  'AL DAR ADGM LEASING',
  'MERAAS INFRASTRUCTURE',
  'SELECT GROUP ADVISORY'
];

export const VANTAGE_PROJECTS: VantageProject[] = [
  {
    id: 'vantage-horizon',
    name: 'VANTAGE HORIZON',
    location: 'Dubai Marina waterfront',
    city: 'Dubai',
    status: 'Off-Plan',
    type: 'Apartments',
    startingPriceAED: 1850000,
    handover: 'Q4 2028',
    unitTypes: 'Studio, 1BR, 2BR & 3BR Sky Residences',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'An architectural masterwork rising 64 stories above Dubai Marina, featuring private infinity pools, floor-to-ceiling panoramic sea views, and smart home technology.',
    amenities: ['Infinity Sky Pool', 'Private Yacht Berth Access', 'Hydrotherapy Spa & Wellness Center', '24/7 Valet & Executive Concierge'],
    paymentPlan: '60/40 (20% Booking, 40% Construction, 40% Handover)',
    positioning: 'Ultra-luxury waterfront living for investors seeking high capital growth & short-term DTCM rental returns.',
    constructionProgress: 15
  },
  {
    id: 'vantage-crest-villas',
    name: 'VANTAGE CREST VILLAS',
    location: 'Dubai Hills Estate',
    city: 'Dubai',
    status: 'Under Construction',
    type: 'Villas',
    startingPriceAED: 6800000,
    handover: 'Q2 2027',
    unitTypes: '4BR, 5BR & 6BR Golf Course Villas',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'A private enclave of 48 architectural mansions overlooking the championship Dubai Hills Golf Course, featuring double-height marble lobbies, private elevators, and basement showroom garages.',
    amenities: ['Direct Golf Course Access', 'Private Infinity Edge Garden Pool', 'Custom German Kitchen Appliances', 'Private Basement 4-Car Showroom'],
    paymentPlan: '70/30 (20% Booking, 50% Construction, 30% Handover)',
    positioning: 'Exclusive luxury mansions designed for high-net-worth family end-users and long-term asset preservation.',
    constructionProgress: 60
  },
  {
    id: 'vantage-bay-residences',
    name: 'VANTAGE BAY RESIDENCES',
    location: 'Business Bay canal front',
    city: 'Dubai',
    status: 'Ready',
    type: 'Mixed-Use',
    startingPriceAED: 1450000,
    handover: 'Ready to Move In (Delivered Q1 2025)',
    unitTypes: '1BR, 2BR & Duplex Penthouses',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Our flagship canal-front mixed-use landmark featuring retail dining piazzas, executive co-working lounges, and immediate rental income generating apartments.',
    amenities: ['Dubai Water Canal Boardwalk Access', 'Executive Co-Working Business Lounge', 'Olympic-Length Heated Lap Pool', 'Technogym Equipped Wellness Club'],
    paymentPlan: 'Ready Cash / Bank Mortgage Financing Available',
    positioning: 'Immediate 7.8% net rental yield for property investors wanting zero construction risk.',
    constructionProgress: 100
  },
  {
    id: 'vantage-reem-towers',
    name: 'VANTAGE REEM TOWERS',
    location: 'Al Reem Island waterfront',
    city: 'Abu Dhabi',
    status: 'Off-Plan',
    type: 'Apartments',
    startingPriceAED: 1150000,
    handover: 'Q3 2028',
    unitTypes: '1BR, 2BR & 3BR Sea View Apartments',
    heroImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Twin high-rise residential towers on Al Reem Island Abu Dhabi, combining waterfront tranquility with immediate access to ADGM financial square.',
    amenities: ['Private Beach Promenade', 'Children’s Splash Park & Play Lounge', 'Tennis & Padel Courts', 'Smart Security & Automated Keyless Access'],
    paymentPlan: '60/40 (10% Booking, 50% Construction, 40% Handover)',
    positioning: 'Prime Abu Dhabi capital investment targeted at ADGM professionals and long-term capital growth.',
    constructionProgress: 20
  }
];

export const VANTAGE_COMMUNITIES: VantageCommunity[] = [
  {
    id: 'waterfront',
    name: 'Waterfront Living District',
    category: 'Waterfront',
    lifestyle: 'High-energy luxury waterfront living with private yacht access, boardwalk dining, and unobstructed sea views.',
    amenities: ['Private Marina Berths', 'Infinity Lagoon Pools', 'Waterfront Dining Piazzas'],
    buyerProfile: 'International HNW investors, short-term rental holiday home operators, and luxury expat residents.',
    representativeProject: 'VANTAGE HORIZON (Dubai Marina)',
    locationContext: 'Dubai Marina & Al Reem Island Abu Dhabi'
  },
  {
    id: 'urban',
    name: 'Urban Metropolis Residences',
    category: 'Urban',
    lifestyle: 'Dynamic executive living steps from DIFC financial district, Dubai Mall, and downtown business hubs.',
    amenities: ['Executive Business Lounges', 'Direct Canal Boardwalk Access', 'Concierge & Valet Service'],
    buyerProfile: 'C-Suite corporate executives, finance professionals, and buy-to-let rental yield investors.',
    representativeProject: 'VANTAGE BAY RESIDENCES (Business Bay)',
    locationContext: 'Business Bay & Downtown Dubai'
  },
  {
    id: 'villa',
    name: 'Golf & Sanctuary Villa Enclaves',
    category: 'Villa',
    lifestyle: 'Serene private sanctuary living amidst 18-hole golf greens, landscaped parks, and top international schools.',
    amenities: ['Championship Golf Access', 'Private Showroom Garages', 'Gated 24/7 Security'],
    buyerProfile: 'Multi-generational families, long-term UAE residents, and high-net-worth estate buyers.',
    representativeProject: 'VANTAGE CREST VILLAS (Dubai Hills Estate)',
    locationContext: 'Dubai Hills Estate & Palm Jumeirah Fronds'
  },
  {
    id: 'mixed-use',
    name: 'Mixed-Use Landmark Hubs',
    category: 'Mixed-Use',
    lifestyle: 'Self-contained integrated destinations combining boutique luxury retail, Michelin-star dining, and luxury penthouses.',
    amenities: ['Boutique Retail Piazzas', 'Panoramic Rooftop Lounges', 'Wellness & Hydrotherapy Spas'],
    buyerProfile: 'Institutional real estate funds, family office portfolios, and luxury lifestyle seekers.',
    representativeProject: 'VANTAGE HORIZON MASTERPLAN',
    locationContext: 'Prime Central Dubai Landmarks'
  }
];

export const VANTAGE_CASE_STUDY = {
  projectName: 'VANTAGE BAY RESIDENCES',
  location: 'Business Bay Canal Front, Dubai',
  deliveryDate: 'Q1 2025 (Delivered 100% On-Time)',
  unitsCount: '380 Residences & Retail Units',
  metrics: [
    { label: 'On-Time Handover Execution', value: '100%' },
    { label: 'Pre-Handover Off-Plan Sales', value: '94%' },
    { label: 'Post-Handover Capital Appreciation', value: '+18%' }
  ],
  summary: 'Delivered in early 2025, Vantage Bay Residences achieved a 94% sold-out status prior to handover. Investors experienced an average +18% capital appreciation upon key delivery.',
  quote: 'VANTAGE delivered our penthouse 2 weeks ahead of scheduled handover. The architectural finishing, marble work, and canal views exceeded all developer promises.'
};

export const VANTAGE_LEADERS: VantageLeader[] = [
  {
    name: 'Tariq Al-Vantage',
    role: 'Managing Director & Founder',
    experience: '24+ Years UAE Real Estate Development',
    specialization: 'Masterplan Architectures, Government Alignment & Capital Allocation',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    bio: 'Former senior executive at major UAE master developers, Tariq has directed over AED 12 Billion in landmark residential and commercial projects across Dubai and Abu Dhabi.'
  },
  {
    name: 'Victoria Sterling',
    role: 'Head of Development & Architecture',
    experience: '18+ Years High-Rise Architecture',
    specialization: 'Architectural Innovation, Structural Engineering & Luxury Interior Finishing',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    bio: 'Chartered architect overseeing masterplan aesthetics, German kitchen engineering integrations, and LEED-certified sustainable construction standards.'
  },
  {
    name: 'Faisel Al-Hashemi',
    role: 'Head of Sales & Investor Relations',
    experience: '16+ Years Off-Plan Investment',
    specialization: 'Off-Plan Payment Plan Structuring, HNW Investor Sales & Global Roadshows',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    bio: 'Directs global off-plan sales teams across Dubai, Abu Dhabi, London, and Singapore, securing over AED 4.5 Billion in private client bookings.'
  },
  {
    name: 'Nadia Al-Mansoor',
    role: 'Head of Construction & Handover Quality',
    experience: '15+ Years Civil Contracting',
    specialization: 'Contractor Oversight, 100% On-Time Handover Execution & DLD Compliance',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    bio: 'Manages tier-one contractor execution, milestone auditing, and Dubai Land Department (DLD) final building completion certifications.'
  }
];

export const VANTAGE_ARTICLES: VantageArticle[] = [
  {
    id: 'art-1',
    title: 'Off-Plan vs Ready Property: What UAE Investors Should Know',
    category: 'Off-Plan Guide',
    readTime: '6 min read',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
    summary: 'Evaluating capital appreciation during construction vs immediate rental cash flows in prime Dubai & Abu Dhabi masterplans.',
    content: 'Off-plan properties allow investors to lock in initial launching prices with flexible 60/40 payment plans, capturing significant capital growth upon project completion...'
  },
  {
    id: 'art-2',
    title: 'Understanding Dubai Off-Plan Payment Plans (60/40 vs 70/30)',
    category: 'Payment Plans',
    readTime: '5 min read',
    date: 'July 2026',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    summary: 'How construction-linked payment milestones work, escrow account safeguards under DLD, and handover balance options.',
    content: 'Dubai Land Department regulations require developer escrow accounts for off-plan payments. Construction-linked installments ensure capital is disbursed only upon verified engineering milestones...'
  },
  {
    id: 'art-3',
    title: 'Why Waterfront Communities Continue to Outperform in Dubai',
    category: 'Market Trends',
    readTime: '7 min read',
    date: 'June 2026',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    summary: 'Analyzing tenant demand, capital growth resilience, and short-term DTCM rental yield advantages in Dubai Marina and Palm Jumeirah.',
    content: 'Waterfront real estate in Dubai retains high scarcity value. Limited sea-view land parcels drive robust secondary resale premiums and higher average rental occupancy rates...'
  }
];

export const VANTAGE_OFFICES = [
  {
    city: 'DUBAI (HEADQUARTERS & SALES GALLERY)',
    building: 'Vision Tower, Level 30',
    district: 'Business Bay, Dubai, UAE',
    purpose: 'Flagship Sales Gallery, Architectural Models & Executive Suites',
    hours: 'Mon – Sat: 9:00 AM – 7:00 PM',
    phone: '+971 4 588 3000'
  },
  {
    city: 'ABU DHABI (SALES OFFICE)',
    building: 'Addax Tower, Level 18',
    district: 'Al Reem Island, Abu Dhabi, UAE',
    purpose: 'Abu Dhabi Off-Plan Sales, Contract Registration & Consultations',
    hours: 'Mon – Sat: 9:00 AM – 6:00 PM',
    phone: '+971 2 688 9000'
  }
];

export const VANTAGE_FAQS = [
  {
    question: 'How do off-plan payment plans work with VANTAGE DEVELOPMENTS?',
    answer: 'Our off-plan projects offer flexible payment plans such as 60/40 or 70/30. You pay a 20% down payment at booking, construction-linked installments during building, and the remaining balance upon final handover.'
  },
  {
    question: 'Are investor funds protected during off-plan construction?',
    answer: 'Yes. In strict compliance with Dubai Land Department (DLD) and Abu Dhabi DED regulations, all buyer payments are deposited directly into project-specific Escrow Accounts released only upon certified construction milestones.'
  },
  {
    question: 'What is the expected capital appreciation for VANTAGE off-plan developments?',
    answer: 'While market conditions vary, our flagship developments historically capture 15% – 25% capital appreciation from off-plan launch pricing to final handover completion.'
  },
  {
    question: 'Can overseas international buyers purchase VANTAGE properties?',
    answer: 'Yes. All VANTAGE developments are located in designated freehold zones in Dubai and Abu Dhabi, allowing 100% foreign ownership for international buyers and eligibility for UAE Golden Visas.'
  },
  {
    question: 'Do VANTAGE properties qualify for the UAE Golden Visa?',
    answer: 'Yes. Properties with a purchase value of AED 2,000,000 or above qualify buyers and their families for the 10-Year UAE Golden Residence Visa, subject to federal immigration rules.'
  },
  {
    question: 'How can I register my interest or reserve a unit?',
    answer: 'You can register your interest online via our contact form, contact our Sales Team on WhatsApp (+971 50), or visit our flagship Sales Gallery in Business Bay Dubai.'
  }
];

export * from './vantageCatalogData';

