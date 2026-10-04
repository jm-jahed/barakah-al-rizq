import { CLEANING_CATALOG, CleaningService as CatalogCleaningService } from './cleaningCatalogData';

export type CleaningService = CatalogCleaningService;

export interface CleaningCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  heroImage: string;
  serviceCount: number;
  startingPriceAED: number;
  equipmentHighlight: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  startingPrice: number;
  currency: string;
  period: string;
  popular?: boolean;
  features: string[];
  sampleNotice: string;
}

export interface ServiceArea {
  name: string;
  city: string;
  deliveryTime: string;
  teamsAvailable: number;
  image: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

export const CLEANING_COMPANY_INFO = {
  name: 'PRISTINE UAE FACILITY SERVICES',
  brandName: 'PRISTINE UAE',
  tagline: 'Sovereign-Grade Cleaning & Architectural Detailing',
  phone: '+971 4 392 8400',
  whatsapp: '+971 50 882 1944',
  email: 'concierge@pristine.ae',
  address: 'Level 14, Al Saada Tower, DIFC & Dubai Marina Flagship Hub',
  workingHours: '24/7 Dispatch • 365 Days a Year',
  licenseNo: 'DM-PERMIT-94821',
  isoCertifications: ['ISO 9001:2015 Quality', 'ISO 14001:2015 Environmental', 'ISO 45001:2018 Health & Safety', 'BICSc Accredited Master Training'],
  conceptNotice: 'PRISTINE UAE — Flagship Ultra-Luxury Cleaning & Facility Management Platform.',
  samplePricingNotice: 'Guaranteed Transparent Pricing in UAE Dirhams (AED) • 0% Hidden Surcharges',
};

export const CLEANING_CATEGORIES: CleaningCategory[] = [
  {
    id: 'villa-deep-cleaning',
    name: 'Ultra-Luxury Villa Deep Clean',
    subtitle: '7-Phase Mansion & Estate Sanitization',
    description: 'Bespoke, deep sanitization for multi-story villas across Palm Jumeirah, Emirates Hills, and Saadiyat Island. Complete top-to-bottom bio-steam detailing.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    serviceCount: 20,
    startingPriceAED: 1850,
    equipmentHighlight: 'Thermoclean 180°C Dry Steam + Kärcher Industrial Scrubbers'
  },
  {
    id: 'move-in-out-handover',
    name: 'Move-In & Handover Detailing',
    subtitle: 'Ready-to-Occupy Landlord Guarantee',
    description: 'Ultra-thorough empty property restoration guaranteeing 100% landlord security deposit returns and immaculate tenant move-in readiness.',
    heroImage: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80',
    serviceCount: 20,
    startingPriceAED: 850,
    equipmentHighlight: 'HEPA Class H14 Air Scrubbers + Ozone Deodorization'
  },
  {
    id: 'post-construction',
    name: 'Post-Construction Bio-Sanitization',
    subtitle: 'Fine Silica Extraction & Grout De-Hazing',
    description: 'Eliminates microscopic construction silica, adhesive residue, paint splatters, and cement film without scratching delicate fixtures.',
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    serviceCount: 20,
    startingPriceAED: 2200,
    equipmentHighlight: 'Nilfisk Industrial Dust Extractors + Diamond Scrubbers'
  },
  {
    id: 'marble-crystallization',
    name: 'Marble Honing & Italian Diamond Polishing',
    subtitle: 'Klindex Precision Stone Restoration',
    description: 'Restores high-gloss mirror reflections on Statuario, Calacatta Oro, and Crema Marfil marble using non-acidic Italian crystallization compounds.',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    serviceCount: 20,
    startingPriceAED: 2400,
    equipmentHighlight: 'Klindex Levighetor 400-3000 Grit Resin Diamonds'
  },
  {
    id: 'chandelier-crystal',
    name: 'Chandelier & Crystal Restoration',
    subtitle: 'Ultrasonic Hand-Detailing',
    description: 'Piece-by-piece disassembly and ultrasonic steam cleansing for grand Swarovski, Murano glass, and Bohemian crystal chandeliers.',
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    serviceCount: 20,
    startingPriceAED: 1200,
    equipmentHighlight: 'Micro-Ultrasonic Jet Baths + Static-Free Cloths'
  },
  {
    id: 'upholstery-silk-carpet',
    name: 'Luxury Upholstery, Silk & Persian Rug Care',
    subtitle: 'Zero-Moisture & Thermal Steam Wash',
    description: 'pH-balanced restoration for Minotti, Poliform, and B&B Italia fabrics, velvet sofas, and heirloom Persian silk rugs.',
    heroImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    serviceCount: 20,
    startingPriceAED: 650,
    equipmentHighlight: 'Rotovac 360 Carpet Extractor + Moisture Blowers'
  },
  {
    id: 'hvac-air-duct',
    name: 'HVAC Air Duct & Air Quality Sanitization',
    subtitle: 'Robotic Rotary Brushing & Bio-Fogging',
    description: 'Clears desert sand, mold spores, and airborne allergens from AC ductwork and evaporator coils with Dubai Municipality certified fogging.',
    heroImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    serviceCount: 20,
    startingPriceAED: 1450,
    equipmentHighlight: 'Robotic Visual Duct Crawlers + EPA Bio-Foggers'
  },
  {
    id: 'commercial-clinic-fm',
    name: 'Corporate, Clinic & Retail Facility Management',
    subtitle: 'DHA-Sterilization & High-Traffic Protocols',
    description: 'Turnkey facility cleaning for DIFC corporate headquarters, Dubai Mall flagship boutiques, and DHA-licensed cosmetic surgery clinics.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    serviceCount: 20,
    startingPriceAED: 3200,
    equipmentHighlight: 'Electrostatic Disinfection Guns + Taski Auto-Scrubbers'
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: 'Palm Jumeirah & JBR',
    city: 'Dubai',
    deliveryTime: 'Within 25 Mins (Rapid Dispatch)',
    teamsAvailable: 14,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Emirates Hills & Dubai Hills',
    city: 'Dubai',
    deliveryTime: 'Within 30 Mins',
    teamsAvailable: 12,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Downtown Dubai & DIFC',
    city: 'Dubai',
    deliveryTime: 'Within 20 Mins',
    teamsAvailable: 16,
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Saadiyat & Al Maryah Island',
    city: 'Abu Dhabi',
    deliveryTime: 'Same-Day Fast Dispatch',
    teamsAvailable: 10,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Al Barari & Arabian Ranches',
    city: 'Dubai',
    deliveryTime: 'Within 35 Mins',
    teamsAvailable: 8,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Sharjah Al Majaz & Waterfront',
    city: 'Sharjah',
    deliveryTime: 'Scheduled VIP Dispatch',
    teamsAvailable: 6,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop',
  }
];

export const BEFORE_AFTER_SAMPLES: BeforeAfterItem[] = [
  {
    id: 'ba-1',
    title: 'Italian Statuario Marble Diamond Honing & Crystallization',
    category: 'Marble Restoration',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'Scratched and etched marble floor restored to flawless 95° mirror gloss reflection.'
  },
  {
    id: 'ba-2',
    title: 'Post-Construction Silica & Grout De-Hazing on Floor-to-Ceiling Glass',
    category: 'Post-Construction',
    beforeImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    description: 'Complete removal of mortar splatter, paint haze, and micro-dust without glass scratching.'
  },
  {
    id: 'ba-3',
    title: 'Minotti Velvet Sofa Deep Steam Extraction & Anti-Allergen Seal',
    category: 'Upholstery Care',
    beforeImage: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    description: 'Deep fiber stain extraction and biological sanitization restoring original velvet sheen.'
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'essential',
    name: 'Weekly Sovereign Maintenance',
    tagline: 'Ideal for ongoing villa & penthouse upkeep.',
    startingPrice: 650,
    currency: 'AED',
    period: '/ visit (25% Savings)',
    features: [
      'Dedicated primary British-trained team',
      'HEPA H14 fine dust vacuuming & mopping',
      'Kitchen degreasing & appliance wipe',
      'Restroom steam sterilization & mirror polish',
      'Eco-friendly non-toxic biocide formulas'
    ],
    sampleNotice: 'Includes dedicated account supervisor and keyholding insurance'
  },
  {
    id: 'deep-clean',
    name: 'Comprehensive 7-Phase Deep Clean',
    tagline: 'Top-to-bottom master sanitization refresh.',
    startingPrice: 1850,
    currency: 'AED',
    period: '/ property',
    popular: true,
    features: [
      'Full 6-8 hour complete property sanitization sweep',
      '180°C dry steam extraction on all tiles & grout',
      'Interior oven, fridge & hood deep degrease',
      'Inside cabinet, wardrobe & window track detail',
      'Air scrubbing & UVC surface sterilization',
      'White-glove UV audit sign-off checklist'
    ],
    sampleNotice: 'Guaranteed satisfaction or complimentary re-clean within 48 hours'
  },
  {
    id: 'commercial',
    name: 'Commercial & Clinic Protocol',
    tagline: 'High-standard compliance for DIFC offices & DHA clinics.',
    startingPrice: 3200,
    currency: 'AED',
    period: '/ month',
    features: [
      'After-hours discreet 7-day scheduled operations',
      'Electrostatic hospital-grade disinfection',
      'Restroom & pantry continuous hygiene maintenance',
      'High-traffic carpet hot-water extraction',
      'Monthly air quality & ATP swab microbial report'
    ],
    sampleNotice: 'Compliant with DHA, Dubai Municipality & ISO 9001 standards'
  }
];

export const TRUST_POINTS = [
  {
    title: 'BICSc Certified & British Trained',
    desc: 'All cleaners and field supervisors hold formal British Institute of Cleaning Science credentials and rigorous material handling training.',
    icon: 'Award'
  },
  {
    title: 'Dubai Municipality & ESMA Approved',
    desc: '100% non-toxic, pet-safe, biodegradable botanical biocides tested to protect delicate natural stone, luxury joinery, and indoor air.',
    icon: 'ShieldCheck'
  },
  {
    title: 'AED 5,000,000 Liability Insured',
    desc: 'Complete third-party property damage coverage and background-checked, vetted personnel with biometric clearance.',
    icon: 'Lock'
  },
  {
    title: 'Rapid 30-Minute Van Dispatch',
    desc: 'GPS-tracked fleet of specialized Mercedes Sprinter vans equipped with industrial steam generators and diamond grinders.',
    icon: 'Car'
  }
];

export { CLEANING_CATALOG, CLEANING_CATALOG as CLEANING_SERVICES, CLEANING_CATALOG as ALL_SERVICES };
