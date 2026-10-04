import { SALON_TREATMENTS_CATALOG, SalonTreatment as CatalogSalonTreatment } from './salonCatalogData';

export type SalonTreatment = CatalogSalonTreatment;
export type SalonService = SalonTreatment;

export interface BeautyCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  heroImage: string;
  treatmentCount: number;
  startingPriceAED: number;
  brandHighlight: string;
}

export interface SalonStylist {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  image: string;
  signatureService: string;
  conceptNotice?: string;
}

export interface SalonPackage {
  id: string;
  name: string;
  tagline: string;
  startingPrice: number;
  currency: string;
  includedServices: string[];
  popular?: boolean;
  sampleNotice: string;
}

export const SALON_BRAND_INFO = {
  name: 'VELVET BEAUTY ATELIER & VIP SPA',
  brandName: 'VELVET ATELIER',
  tagline: 'Haute Aesthetics & Sovereign Beauty Rituals',
  phone: '+971 4 392 8600',
  whatsapp: '+971 50 882 1944',
  email: 'concierge@velvetbeauty.ae',
  address: 'Building 4, Level 3, Dubai Design District (d3) & Jumeirah 1 Flagship',
  workingHours: 'Mon - Sun: 9:00 AM - 10:00 PM GST (Private VIP After-Hours by Request)',
  municipalityLicense: 'DM-HEALTH-84920',
  conceptNotice: 'VELVET BEAUTY ATELIER — Flagship Luxury Salon & VIP Aesthetic Studio Experience.',
  samplePricingNotice: 'Guaranteed Transparent Pricing in UAE Dirhams (AED) • 100% Genuine Certified European Products',
};

export const BEAUTY_CATEGORIES: BeautyCategory[] = [
  {
    id: 'haute-coiffure',
    name: 'Haute Coiffure & Bespoke Color',
    subtitle: 'French Balayage, Kérastase & Precision Shears',
    description: 'Master colorists trained in Paris & London delivering customized seamless balayage, gloss glazes, and botanical hair restructuring.',
    heroImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    treatmentCount: 20,
    startingPriceAED: 650,
    brandHighlight: 'Kérastase Chronologiste & Oribe Luxury'
  },
  {
    id: 'facial-aesthetics',
    name: '24K Gold, Caviar & Cellular Facials',
    subtitle: 'Biologique Recherche & Valmont Swiss Anti-Aging',
    description: 'Clinical grade European non-invasive aesthetic treatments restoring firm dermal contours, instant red-carpet glow, and deep cellular hydration.',
    heroImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    treatmentCount: 20,
    startingPriceAED: 950,
    brandHighlight: 'Biologique Recherche P50 & Valmont Cellular'
  },
  {
    id: 'nail-architecture',
    name: 'Russian Manicure & Nail Couture',
    subtitle: 'Dry E-File Cuticle Precision & BIAB Builder Gel',
    description: 'Flawless 4-week dry hardware manicures with diamond bits, cuticle deep cleaning, and bespoke Swarovski nail couture art.',
    heroImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80',
    treatmentCount: 20,
    startingPriceAED: 350,
    brandHighlight: 'Russian Hardware & Luxio Gel Couture'
  },
  {
    id: 'royal-hammam-spa',
    name: 'Royal Moroccan Hammam & Hydrotherapy',
    subtitle: 'Beldi Black Soap, Eucalyptus Steam & Rose Clay',
    description: 'Private heated marble slabs, Kessa glove exfoliation, and pure organic Argan oil massage in an authentic Andalusian sanctuary.',
    heroImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80',
    treatmentCount: 20,
    startingPriceAED: 750,
    brandHighlight: 'Les Sens de Marrakech & Pure Amber Oils'
  },
  {
    id: 'lash-brow-sculpting',
    name: 'Lash Architecture & Brow Lamination',
    subtitle: 'Cashmere Russian Volume & Micro-Feather Tinting',
    description: 'Weightless cashmere lash extensions and bespoke brow mapping framing your natural facial symmetry.',
    heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
    treatmentCount: 20,
    startingPriceAED: 400,
    brandHighlight: 'Cashmere Ultra-Light & HD Brow Couture'
  },
  {
    id: 'bridal-gala-glamour',
    name: 'Bridal Couture & Red Carpet Artistry',
    subtitle: 'Airbrush High-Definition & Editorial Hair Styling',
    description: 'End-to-end royal wedding and red carpet glam squads with 16-hour sweat-proof airbrush makeup and bespoke hair pieces.',
    heroImage: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=80',
    treatmentCount: 20,
    startingPriceAED: 2200,
    brandHighlight: 'Dior Backstage & Charlotte Tilbury Pro'
  },
  {
    id: 'body-contouring',
    name: 'Lymphatic Drainage & Body Sculpting',
    subtitle: 'Brazilian Sculpting Technique & Radio-Frequency',
    description: 'Targeted water retention relief, waist cinching, and muscle toning using certified Brazilian lymphatic massage and wood therapy.',
    heroImage: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80',
    treatmentCount: 20,
    startingPriceAED: 650,
    brandHighlight: 'Renata França Certified & Radio Frequency'
  },
  {
    id: 'vip-private-suite',
    name: 'Private VIP Champagne Suites',
    subtitle: 'Discreet Valet Entry, Private Stylist & Caviar',
    description: 'Ultra-private soundproof suites for high-profile clients, royal family members, and private party pampering sessions.',
    heroImage: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80',
    treatmentCount: 20,
    startingPriceAED: 1850,
    brandHighlight: 'Private 4-Handed Service & Chauffeur'
  }
];

export const SALON_STYLISTS: SalonStylist[] = [
  {
    id: 'stylist-1',
    name: 'Genevieve Laurent',
    title: 'Creative Hair Director',
    specialty: 'Paris Balayage & Precision Bob Cutting',
    experience: '14+ Yrs Paris & Dubai Fashion Week',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=600&q=80',
    signatureService: 'French Balayage & Gloss Glaze Architecture'
  },
  {
    id: 'stylist-2',
    name: 'Anastasia Volkova',
    title: 'Master Nail Artist',
    specialty: 'Russian Dry E-File & BIAB Architecture',
    experience: '10+ Yrs International Master Instructor',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    signatureService: 'Russian Hardware Diamond Manicure'
  },
  {
    id: 'stylist-3',
    name: 'Nour Al-Sabah',
    title: 'Senior Medical Aesthetician',
    specialty: 'Biologique Recherche & 24K Gold Facialist',
    experience: '12+ Yrs Swiss Cellular Skin Therapy',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    signatureService: '24K Pure Gold Infusion Facial'
  }
];

export const SALON_PACKAGES: SalonPackage[] = [
  {
    id: 'red-carpet-radiance',
    name: 'Red Carpet Radiance Pass',
    tagline: 'Gala & Event Complete Transformation.',
    startingPrice: 1250,
    currency: 'AED',
    includedServices: [
      'Biologique Recherche Oxygen Glow Facial',
      'Editorial Signature Blowout & Thermal Set',
      'Russian Express Gel Manicure',
      'Glass of Vintage Champagne & Valet'
    ],
    popular: true,
    sampleNotice: 'Includes complimentary touch-up kit'
  },
  {
    id: 'royal-bridal-sanctuary',
    name: 'Imperial Royal Bridal Experience',
    tagline: 'Full-Day Private Suite Indulgence.',
    startingPrice: 3800,
    currency: 'AED',
    includedServices: [
      'Royal Moroccan Hammam & Amber Body Polish',
      'Valmont Cellular Hydrating Facial',
      'Swarovski Crystal Nail Architecture',
      'HD Airbrush Bridal Makeup & Crown Hair Trial',
      'Dedicated Private Suite & Personal Butler'
    ],
    sampleNotice: 'Discreet private suite entrance with chauffeur pickup'
  }
];

export const TRUST_POINTS = [
  {
    title: '100% Authentic European Formulations',
    desc: 'Authorized clinic partner for Biologique Recherche Paris, Valmont Switzerland, and Kérastase Luxury.',
    icon: 'Award'
  },
  {
    title: 'Dubai Municipality Health Certified',
    desc: 'Hospital-grade autoclave sterilization for all metal instruments with sterile individual pouching.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Private VIP Suites with Discreet Entry',
    desc: 'Dedicated private suites with direct subterranean elevator access for complete anonymity.',
    icon: 'Lock'
  },
  {
    title: 'Chauffeur & Mobile At-Home Service',
    desc: 'Mercedes-Maybach chauffeur transfer or private beauty squad dispatch to your villa or hotel suite.',
    icon: 'Car'
  }
];

export { SALON_TREATMENTS_CATALOG, SALON_TREATMENTS_CATALOG as SALON_SERVICES, SALON_TREATMENTS_CATALOG as ALL_SERVICES };
