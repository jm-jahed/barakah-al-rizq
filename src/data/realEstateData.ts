import { LUXURY_PROPERTIES_CATALOG } from './realEstateCatalogData';

export interface FloorPlan {
  level: string;
  areaSqft: number;
  description: string;
}

export interface PaymentMilestone {
  milestone: string;
  percentage: number;
  dueTiming: string;
}

export interface LuxuryProperty {
  id: string;
  title: string;
  slug: string;
  communityId: string;
  communityName: string;
  emirate: string;
  type: string;
  developer: string;
  status: string;
  priceAED: number;
  originalPriceAED?: number;
  pricePerSqftAED: number;
  bedrooms: number;
  bathrooms: number;
  builtUpAreaSqft: number;
  plotAreaSqft?: number;
  view: string;
  furnishing: string;
  parkingSpaces: number;
  goldenVisaEligible: boolean;
  dldEscrowSecured: boolean;
  serviceChargeSqftAED: number;
  completionDate: string;
  rentalYieldPct: number;
  capitalAppreciation1Yr: number;
  featured: boolean;
  isExclusive: boolean;
  isWaterfront: boolean;
  heroImage: string;
  gallery: string[];
  description: string;
  architecturalHighlights: string[];
  amenities: string[];
  assignedBroker: {
    name: string;
    phone: string;
    email: string;
    brn: string;
  };
  floorPlans: FloorPlan[];
  paymentPlan: PaymentMilestone[];
}

export interface CommunityArea {
  id: string;
  name: string;
  emirate: string;
  description: string;
  heroImage: string;
  avgSqftPrice: number;
  rentalYield: string;
  propertyCount: number;
}

export interface DeveloperPartner {
  id: string;
  name: string;
  established: number;
  ongoingProjects: number;
  flagshipProject: string;
  description: string;
  heroImage: string;
}

export interface RealEstateReport {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  summary: string;
  keyTakeaways: string[];
}

export interface ReraBroker {
  id: string;
  name: string;
  title: string;
  reraNumber: string;
  specialization: string;
  languages: string[];
  phone: string;
  whatsapp: string;
  email: string;
  image: string;
  dealsVolume: string;
}

export const PRIME_COMMUNITIES: CommunityArea[] = [
  {
    id: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    emirate: 'Dubai',
    description: 'Iconic beachfront living featuring custom signature villas on private fronds and ultra-luxury penthouses with infinite Arabian Gulf and skyline vistas.',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    avgSqftPrice: 3850,
    rentalYield: '7.2% Gross',
    propertyCount: 38
  },
  {
    id: 'emirates-hills',
    name: 'Emirates Hills',
    emirate: 'Dubai',
    description: 'Ultra-exclusive gated golf enclave surrounded by Montgomerie championship fairways, housing sovereign family estates and custom megamansions.',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    avgSqftPrice: 4200,
    rentalYield: '5.8% Gross',
    propertyCount: 24
  },
  {
    id: 'jumeirah-bay-island',
    name: 'Jumeirah Bay Island',
    emirate: 'Dubai',
    description: 'Home to the world-famed Bulgari Resort & Residences. Sculpted seahorse island with private superyacht berths and ultra-prime low-density mansions.',
    heroImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80',
    avgSqftPrice: 6500,
    rentalYield: '6.4% Gross',
    propertyCount: 18
  },
  {
    id: 'downtown-dubai',
    name: 'Downtown Dubai',
    emirate: 'Dubai',
    description: 'Sky-high duplexes and penthouses framing Burj Khalifa, Dubai Opera, and the world’s most prestigious fashion and cultural avenues.',
    heroImage: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80',
    avgSqftPrice: 3100,
    rentalYield: '8.1% Gross',
    propertyCount: 34
  },
  {
    id: 'dubai-hills-estate',
    name: 'Dubai Hills Estate',
    emirate: 'Dubai',
    description: 'Master-planned luxury community with an 18-hole championship golf course, King’s College Hospital, Dubai Hills Mall, and vast private parklands.',
    heroImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
    avgSqftPrice: 2450,
    rentalYield: '7.6% Gross',
    propertyCount: 32
  },
  {
    id: 'saadiyat-island',
    name: 'Saadiyat Island',
    emirate: 'Abu Dhabi',
    description: 'Abu Dhabi’s crown jewel combining Louvre Abu Dhabi, Guggenheim, pristine white turtle beaches, and Gary Player championship golf course.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    avgSqftPrice: 2800,
    rentalYield: '7.0% Gross',
    propertyCount: 26
  },
  {
    id: 'al-barari',
    name: 'Al Barari',
    emirate: 'Dubai',
    description: 'Over 80% dedicated green landscape with botanical streams, Mediterranean and Balinese themed gardens, and expansive wellness villa sanctuaries.',
    heroImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    avgSqftPrice: 2200,
    rentalYield: '6.9% Gross',
    propertyCount: 20
  },
  {
    id: 'difc',
    name: 'DIFC & Downtown Financial',
    emirate: 'Dubai',
    description: 'Ultra-prime branded residences, penthouses, and private family offices integrated into the premier financial district of the Middle East.',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    avgSqftPrice: 3400,
    rentalYield: '8.4% Gross',
    propertyCount: 22
  }
];

export const TOP_DEVELOPERS: DeveloperPartner[] = [
  {
    id: 'emaar',
    name: 'EMAAR PROPERTIES',
    established: 1997,
    ongoingProjects: 42,
    flagshipProject: 'Burj Khalifa & The Oasis',
    description: 'The master builder shaping Dubai’s modern skyline with globally celebrated master-planned integrated communities.',
    heroImage: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'omniyat',
    name: 'OMNIYAT ULTRA-LUXURY',
    established: 2005,
    ongoingProjects: 14,
    flagshipProject: 'The Lana & One at Palm Jumeirah',
    description: 'Transforming architectural art into bespoke residential masterpieces managed exclusively by world-renowned Dorchester Collection.',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'nakheel',
    name: 'NAKHEEL SIGNATURE',
    established: 2001,
    ongoingProjects: 28,
    flagshipProject: 'Palm Jebel Ali & Como Residences',
    description: 'Pioneering world-famous coastal and waterfront master communities adding hundreds of kilometers to Dubai’s coastline.',
    heroImage: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'aldar',
    name: 'ALDAR PROPERTIES',
    established: 2004,
    ongoingProjects: 35,
    flagshipProject: 'Saadiyat Cultural District & Nobu Residences',
    description: 'Abu Dhabi’s premier real estate developer leading transformative residential, cultural, and island living across the UAE capital.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'sobha',
    name: 'SOBHA REALTY',
    established: 1976,
    ongoingProjects: 19,
    flagshipProject: 'Sobha Hartland II & The S Tower',
    description: 'Renowned for backward integrated craftsmanship, precision German engineering, and ultra-prime finishes in Meydan.',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
  }
];

export const REAL_ESTATE_REPORTS: RealEstateReport[] = [
  {
    id: 'uae-golden-visa-2026',
    title: 'The UAE 10-Year Golden Visa: 2026 Real Estate Investor Blueprint',
    category: 'Golden Visa & Tax',
    author: 'Tariq Al Hashemi — Senior Legal Counsel',
    date: 'September 2026',
    readTime: '6 min read',
    summary: 'Everything global investors need to know about qualifying for the 10-Year UAE Golden Visa through AED 2,000,000+ real estate investments with 0% personal income and capital gains tax.',
    keyTakeaways: [
      'Minimum qualifying threshold AED 2,000,000 across ready or off-plan title deeds.',
      'Allows 100% bank mortgage financing with verified down payment.',
      'Extends to spouse, children of any age, and unlimited domestic personnel.'
    ]
  },
  {
    id: 'dubai-prime-yield-report-q3',
    title: 'Dubai Prime Property Yield Analysis Q3 2026: Capital Growth vs Rental ROI',
    category: 'Market Intelligence',
    author: 'Elena Rostova, CFA',
    date: 'August 2026',
    readTime: '8 min read',
    summary: 'A deep quantitative review of rental yields across Palm Jumeirah, Downtown Dubai, Dubai Hills, and Saadiyat Island, showcasing net yields reaching 7.5%–9.2%.',
    keyTakeaways: [
      'Dubai prime enclaves delivering 7.2% - 8.6% net rental returns.',
      'Palm Jumeirah luxury capital appreciation exceeding +16.4% YoY.',
      'Strongest institutional tenant absorption in 4 to 6-bedroom villa segment.'
    ]
  },
  {
    id: 'off-plan-escrow-security',
    title: 'Dubai Land Department (DLD) Escrow Law: How Investor Capital is 100% Protected',
    category: 'Off-Plan Advisory',
    author: 'Hamdan Al Maktoum — RERA Senior Advisor',
    date: 'July 2026',
    readTime: '5 min read',
    summary: 'How Dubai Law No. 8 of 2007 and RERA project monitoring systems safeguard international off-plan buyers through mandatory project-specific escrow accounts.',
    keyTakeaways: [
      '100% statutory escrow account protection governed by DLD and Central Bank.',
      'Milestone disbursements strictly linked to RERA on-site engineering audits.',
      'Complete legal security for international non-resident property investors.'
    ]
  }
];

export const RERA_BROKERS: ReraBroker[] = [
  {
    id: 'broker-01',
    name: 'Faris Al Mansoori',
    title: 'Managing Partner — Ultra-Prime Villas',
    reraNumber: 'BRN-49201',
    specialization: 'Palm Jumeirah & Emirates Hills Mansions',
    languages: ['Arabic', 'English', 'French'],
    phone: '+971 4 489 9000',
    whatsapp: '+971 50 882 9100',
    email: 'faris@luxestate.ae',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    dealsVolume: 'AED 1.4B+ Closed'
  },
  {
    id: 'broker-02',
    name: 'Svetlana Volkova',
    title: 'Director — Branded Penthouses & Downtown',
    reraNumber: 'BRN-38192',
    specialization: 'Bulgari, Dorchester & Downtown Duplexes',
    languages: ['English', 'Russian', 'German'],
    phone: '+971 4 489 9001',
    whatsapp: '+971 50 882 9101',
    email: 'svetlana@luxestate.ae',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    dealsVolume: 'AED 980M+ Closed'
  }
];

// Backward compatibility alias exports
export type RealEstateProperty = LuxuryProperty;
export const REAL_ESTATE_PROPERTIES = LUXURY_PROPERTIES_CATALOG;
export const REAL_ESTATE_AGENTS = RERA_BROKERS;
export const REAL_ESTATE_AREAS = PRIME_COMMUNITIES;

export const REAL_ESTATE_AGENCY = {
  name: 'LUXESTATE UAE PROPERTIES LLC',
  phone: '+971 4 392 8100',
  whatsapp: '+971 50 882 1944',
  email: 'concierge@luxestate.ae',
  address: 'Gate Precinct Building 4, Level 7, DIFC, Dubai, UAE',
  reraLicense: '84920'
};

export const REAL_ESTATE_SERVICES = [
  { title: 'Super-Prime Acquisitions', description: 'Confidential advisory for off-market mansions and island estates.' },
  { title: 'Golden Visa & Title Escrow', description: '10-Year residency and DLD legal structuring for international buyers.' },
  { title: 'Private Mortgage Financing', description: 'Direct underwriting with premier UAE central-bank institutions.' },
  { title: 'Family Office SPV Setup', description: 'DIFC and ADGM holding structuring for generational estate protection.' }
];

export const REAL_ESTATE_STATS = [
  { label: 'Portfolio Transacted', value: 'AED 8.4B+' },
  { label: 'Exclusive Private Listings', value: '216+' },
  { label: 'Client Satisfaction', value: '99.4%' },
  { label: 'RERA Compliance', value: '100% Escrow' }
];

export { LUXURY_PROPERTIES_CATALOG, LUXURY_PROPERTIES_CATALOG as ALL_LUXURY_PROPERTIES, LUXURY_PROPERTIES_CATALOG as ALL_PROPERTIES } from './realEstateCatalogData';

