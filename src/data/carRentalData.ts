import { EXOTIC_VEHICLES_CATALOG, ExoticVehicle as CatalogExoticVehicle } from './carRentalCatalogData';

export type ExoticVehicle = CatalogExoticVehicle;
export type Vehicle = ExoticVehicle;

export interface VehicleCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  heroImage: string;
  vehicleCount: number;
  startingPriceAED: number;
  speedHighlight: string;
}

export interface RentalPackage {
  id: string;
  name: string;
  tagline: string;
  discount: string;
  features: string[];
  sampleNotice: string;
}

export interface RentalLocation {
  name: string;
  city: string;
  address: string;
  deliveryTime: string;
  image: string;
}

export const CAR_RENTAL_COMPANY_INFO = {
  name: 'APEX EXOTIC MOTORS UAE',
  brandName: 'APEX MOTORS',
  tagline: 'Sovereign Supercar & Chauffeur Fleet Reserve',
  phone: '+971 4 392 8800',
  whatsapp: '+971 50 882 1944',
  email: 'concierge@apexmotors.ae',
  address: 'Level 4, Gate Village Building 2, DIFC & Dubai Harbour Marina',
  workingHours: '24/7 VIP Concierge & Tarmac Dispatch',
  rtaLicense: 'RTA-LUX-84920',
  conceptNotice: 'APEX MOTORS UAE — Flagship Supercar & Exotic Fleet Booking Experience.',
  samplePricingNotice: 'Guaranteed Transparent Pricing in UAE Dirhams (AED) • 0% Security Deposit Option',
};

export const VEHICLE_CATEGORIES: VehicleCategory[] = [
  {
    id: 'supercars',
    name: 'Supercars & Track Weapons',
    subtitle: 'Ferrari, Lamborghini, McLaren & Porsche GT',
    description: 'Breathtaking naturally aspirated V10s and twin-turbo V8s engineered for the open stretches of Sheikh Zayed Road and Dubai Autodrome.',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    vehicleCount: 24,
    startingPriceAED: 3600,
    speedHighlight: '0-100 in 2.8s • 750+ HP'
  },
  {
    id: 'ultra-luxury',
    name: 'Ultra-Luxury Limousines',
    subtitle: 'Rolls-Royce Phantom, Ghost & Maybach S680',
    description: 'The supreme expression of prestige and whisper-quiet motoring. Starlight headliners, refrigerated champagne salons, and private chauffeur options.',
    heroImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
    vehicleCount: 24,
    startingPriceAED: 3800,
    speedHighlight: 'V12 Twin-Turbo • Starlight Roof'
  },
  {
    id: 'performance-suv',
    name: 'High-Performance Luxury SUVs',
    subtitle: 'Lamborghini Urus, G63 AMG & Cullinan',
    description: 'Commanding road presence with unmatched supercar agility and all-terrain UAE desert luxury capability.',
    heroImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    vehicleCount: 24,
    startingPriceAED: 2600,
    speedHighlight: 'Twin-Turbo V8 • 580+ HP'
  },
  {
    id: 'hypercars-exotic',
    name: 'Hypercars & Sovereign Exotics',
    subtitle: 'Ferrari SF90, Revuelto & 750S Spider',
    description: '1000+ HP hybrid masterpieces and limited-production exotics delivering Formula 1-derived acceleration.',
    heroImage: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80',
    vehicleCount: 24,
    startingPriceAED: 6500,
    speedHighlight: '0-100 in 2.5s • 1000+ HP'
  },
  {
    id: 'convertibles',
    name: 'Convertible & Coastline Cruisers',
    subtitle: 'Ferrari Roma Spider, Bentley GTC & 911 Targa',
    description: 'Open-top motoring tailored for sunset cruising along Jumeirah Beach Road and the Palm Jumeirah crescent.',
    heroImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    vehicleCount: 24,
    startingPriceAED: 3200,
    speedHighlight: 'Acoustic Soft-Top • 600+ HP'
  },
  {
    id: 'executive-sedans',
    name: 'Executive & Diplomatic Sedans',
    subtitle: 'Mercedes S580, BMW 760Li & Audi S8',
    description: 'Tailored for DIFC business summits, diplomatic delegations, and executive airport transfers with high-speed 5G Wi-Fi.',
    heroImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    vehicleCount: 24,
    startingPriceAED: 1800,
    speedHighlight: 'Executive Recliner • First Class'
  },
  {
    id: 'chauffeur-vip',
    name: 'Chauffeur & VIP Tarmac Fleet',
    subtitle: 'Cadillac Escalade ESV, Maybach GLS & V-Class',
    description: 'Dedicated professional chauffeur services with direct private jet tarmac clearance at DXB Terminal 3 & Al Maktoum DWC.',
    heroImage: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80',
    vehicleCount: 24,
    startingPriceAED: 2200,
    speedHighlight: 'Direct Tarmac Access • 24/7 Crew'
  },
  {
    id: 'electric-hyper',
    name: 'Next-Gen Electric Performance',
    subtitle: 'Porsche Taycan Turbo S & Lotus Eletre',
    description: 'Instantaneous torque delivery, cutting-edge telemetry, and zero-emission luxury high-performance touring.',
    heroImage: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80',
    vehicleCount: 24,
    startingPriceAED: 2500,
    speedHighlight: '0-100 in 2.6s • Dual E-Motor'
  }
];

export const RENTAL_LOCATIONS: RentalLocation[] = [
  {
    name: 'Dubai International Airport (DXB VIP Terminal)',
    city: 'Dubai',
    address: 'VIP Terminal 3 & Private Aviation Center',
    deliveryTime: 'Within 15 Mins (Direct Tarmac Delivery)',
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Palm Jumeirah & Atlantis The Royal',
    city: 'Dubai',
    address: 'Crescent Road & Royal Residences Valet',
    deliveryTime: 'Within 20 Mins',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Downtown Dubai & DIFC Gate Precinct',
    city: 'Dubai',
    address: 'Burj Khalifa Boulevard & Gate Building',
    deliveryTime: 'Within 15 Mins',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Abu Dhabi Yas Marina & Saadiyat',
    city: 'Abu Dhabi',
    address: 'Yas Marina Circuit & Saadiyat Beach Club',
    deliveryTime: 'Same-Day Fast Dispatch',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  }
];

export const RENTAL_PACKAGES: RentalPackage[] = [
  {
    id: 'weekend-escape',
    name: 'Weekend Grand Prix Pass',
    tagline: 'Friday to Monday Unlimited Thrill.',
    discount: '15% Off Total Rate',
    features: [
      '750 Free KM Included with Rollover',
      'VIP Dubai Airport Delivery & Pickup',
      'Comprehensive Zero Excess CDW Insurance',
      '24/7 Dedicated Concierge WhatsApp Support'
    ],
    sampleNotice: 'Zero Security Deposit option with credit card pre-auth'
  },
  {
    id: 'weekly-executive',
    name: 'Weekly Sovereign Reserve',
    tagline: '7-Day Comprehensive Luxury Lease.',
    discount: '20% Off Daily Rate',
    features: [
      '1,750 Free KM Included',
      'Complimentary Mid-Week Vehicle Swap Option',
      'Chauffeur Ready Standby Service Available',
      'Complimentary Salik Toll Road Tag'
    ],
    sampleNotice: 'Includes doorstep detailing and fuel top-up'
  },
  {
    id: 'monthly-corporate',
    name: 'Monthly Corporate & Family Office',
    tagline: '30-Day Diplomatic & Executive Fleet.',
    discount: '40% Off Daily Rate',
    features: [
      '6,000 Free KM Allowance',
      'Dedicated Fleet Manager & Personal Chauffeur',
      'Free Replacement Vehicle During Service',
      'Full UAE & Oman Comprehensive Border Coverage'
    ],
    sampleNotice: 'Tailored for UAE residents and international business executives'
  }
];

export const TRUST_POINTS = [
  {
    title: 'Zero Security Deposit Guarantee',
    desc: 'Transparent leasing with zero mandatory cash deposit when booking via credit card pre-authorization or digital assets.',
    icon: 'ShieldCheck'
  },
  {
    title: 'RTA Licensed Luxury Fleet #84920',
    desc: 'Fully compliant with Dubai Roads and Transport Authority (RTA) luxury limousine and exotic vehicle rental regulations.',
    icon: 'Award'
  },
  {
    title: 'Doorstep Delivery in Under 30 Mins',
    desc: 'Flatbed transporter or concierge valet delivery directly to your hotel, private villa, or DXB airport tarmac gate.',
    icon: 'Car'
  },
  {
    title: 'Bespoke Chauffeur & Armored Escort',
    desc: 'Discreet, background-checked British and multilingual executive chauffeurs with close-protection security clearance.',
    icon: 'Lock'
  }
];

export { EXOTIC_VEHICLES_CATALOG, EXOTIC_VEHICLES_CATALOG as CAR_RENTAL_VEHICLES, EXOTIC_VEHICLES_CATALOG as ALL_VEHICLES };
