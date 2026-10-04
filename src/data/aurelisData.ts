export interface VehicleCategory {
  id: string;
  name: string;
  multiplier: number;
  icon: string;
  example: string;
}

export interface AurelisService {
  id: string;
  title: string;
  category: 'Wash Services' | 'Detailing' | 'Paint Protection' | 'Specialized' | 'Mobile Care';
  duration: string;
  basePrice: number;
  image: string;
  description: string;
  included: string[];
}

export interface ServicePackage {
  name: string;
  price: number;
  duration: string;
  popular?: boolean;
  vehicleSuitability: string;
  features: string[];
}

export interface AddonOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface Testimonial {
  name: string;
  vehicle: string;
  service: string;
  rating: number;
  review: string;
  location: string;
}

export interface LocationInfo {
  city: string;
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
  bays: number;
  services: string[];
}

export const VEHICLES: VehicleCategory[] = [
  { id: 'sedan', name: 'Sedan / Saloon', multiplier: 1.0, icon: '🚗', example: 'BMW 5-Series, Mercedes E-Class, Audi A6' },
  { id: 'suv', name: 'Luxury SUV', multiplier: 1.2, icon: '🚙', example: 'Range Rover, Porsche Cayenne, G-Wagon' },
  { id: 'coupe', name: 'Coupe / Convertible', multiplier: 1.0, icon: '🏎️', example: 'Porsche 911, BMW M4, Mercedes AMG GT' },
  { id: 'sports', name: 'Sports Car', multiplier: 1.3, icon: '🏎️', example: 'Ferrari F8, Corvette Z06, Aston Martin' },
  { id: 'supercar', name: 'Supercar / Hypercar', multiplier: 1.5, icon: '⚡', example: 'Lamborghini Huracán, McLaren 720S, Bugatti' },
  { id: 'van', name: 'Executive Van / Bus', multiplier: 1.6, icon: '🚐', example: 'Mercedes V-Class, Lexus LM, Cadillac Escalade' }
];

export const SERVICES: AurelisService[] = [
  {
    id: 'express-wash',
    title: 'Express Exterior Wash',
    category: 'Wash Services',
    duration: '45 Mins',
    basePrice: 79,
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80',
    description: 'Fast high-pressure pH-neutral snow foam wash, two-bucket hand scrub, wheel face clean, microfiber towel dry, and streak-free glass wipe.',
    included: ['pH-Neutral Snow Foam Soak', 'Two-Bucket Hand Scrub', 'Wheel Face & Rim Wipe', 'Tire Dressing Gloss', 'Streak-Free Glass Clean']
  },
  {
    id: 'premium-wash',
    title: 'Signature Premium Detail Wash',
    category: 'Wash Services',
    duration: '90 Mins',
    basePrice: 149,
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive exterior paint decontamination, interior vacuuming, leather wipe-down, wheel barrel scrub, and spray wax sealant protection.',
    included: ['Iron & Tar Paint Decontamination', 'Full Interior Vacuum & Dust Clean', 'Leather & Dashboard Conditioning', 'Wheel Barrel Deep Scrub', 'Hydrophobic Spray Wax Sealant']
  },
  {
    id: 'full-detail',
    title: 'Full Studio Interior & Exterior Detail',
    category: 'Detailing',
    duration: '4 Hours',
    basePrice: 349,
    image: 'https://images.unsplash.com/photo-1507136566006-cfc505b114f6?auto=format&fit=crop&w=800&q=80',
    description: 'Deep steam carpet extraction, leather nourish treatment, single-stage gloss paint polish, engine bay wipe, and AC duct ozone sanitization.',
    included: ['Hot Water Carpet Steam Extraction', 'Leather Nourish & UV Shield', 'Single-Stage Paint Gloss Polish', 'Engine Compartment Surface Wipe', 'AC Duct Ozone Sanitization']
  },
  {
    id: 'interior-restoration',
    title: 'Deep Interior Spa & Leather Restoration',
    category: 'Detailing',
    duration: '3.5 Hours',
    basePrice: 299,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
    description: 'Anti-bacterial steam cleaning, stain extraction, Alcantara grooming, interior trim ceramic coating, and deep odor removal.',
    included: ['Stain & Odor Thermal Steam Removal', 'Alcantara Suede Fabric Grooming', 'Matte Leather Protection Sealant', 'Interior Trim UV Armor', 'Air Conditioning Ozone Purify']
  },
  {
    id: 'paint-correction',
    title: 'Multi-Stage Paint Correction',
    category: 'Paint Protection',
    duration: '1 Full Day',
    basePrice: 799,
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    description: 'Removal of up to 90% swirl marks, micro-scratches, and paint oxidation using dual-action rotary polishers and LED inspection lamps.',
    included: ['Digital Paint Thickness Audit', 'Heavy Cut Compound Correction', 'Fine Finishing Gloss Polish', 'Scratches & Swirl Removal', 'Isopropyl Surface Wipe']
  },
  {
    id: 'ceramic-coating',
    title: '9H Nano Ceramic Coating (5-Year Protection)',
    category: 'Paint Protection',
    duration: '2 Days',
    basePrice: 1499,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    description: 'Permanent 9H quartz ceramic matrix providing hydrophobic water-beading, UV fade resistance, chemical shield, and mirror sheen.',
    included: ['Includes Full Paint Correction', 'Dual-Layer 9H Body Coating', 'Wheel Face Ceramic Shield', 'Glass Hydrophobic Coating', '5-Year Warranty Certificate']
  },
  {
    id: 'ppf-protection',
    title: 'Self-Healing Paint Protection Film (PPF)',
    category: 'Paint Protection',
    duration: '3 Days',
    basePrice: 4999,
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80',
    description: 'XPEL Ultimate Plus optical clear self-healing TPU film protecting against sand abrasion, stone chips, and key scratches.',
    included: ['Computer Plotter Custom Templates', 'Self-Healing Heat Activation', 'Full Front Bumper, Hood & Mirrors', 'Hidden Edge Wrapping', '10-Year Anti-Yellowing Warranty']
  },
  {
    id: 'engine-detail',
    title: 'Engine Bay Detailing & Dressing',
    category: 'Specialized',
    duration: '60 Mins',
    basePrice: 199,
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
    description: 'Dry steam degreasing of sensitive engine compartments followed by satin non-greasy UV protective dressing.',
    included: ['Electrical Module Masking', 'Dry Steam Degreasing', 'Plastic & Rubber Hose Dressing', 'Anti-Corrosion Moisture Barrier']
  },
  {
    id: 'mobile-car-care',
    title: 'VIP Mobile Car Wash & Detailing',
    category: 'Mobile Care',
    duration: '90 Mins',
    basePrice: 199,
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    description: 'Fully self-contained mobile van equipped with de-ionized softened water, silent power generator, and studio-grade tools at your villa or office.',
    included: ['Zero Power/Water Needed From Client', 'Home, Villa, Office, or Hotel Delivery', 'Signature Detail Wash Included', 'Available Across Dubai, Abu Dhabi & Sharjah']
  }
];

export const PACKAGES: ServicePackage[] = [
  {
    name: 'ESSENTIAL',
    price: 79,
    duration: '45 Mins',
    popular: false,
    vehicleSuitability: 'Ideal for weekly maintenance cleaning',
    features: ['Exterior Snow Foam Wash', 'Wheel & Rim Deep Clean', 'Hand Microfiber Towel Dry', 'Tire Gloss Dressing', 'Glass Wipe Down']
  },
  {
    name: 'SIGNATURE',
    price: 149,
    duration: '90 Mins',
    popular: true,
    vehicleSuitability: 'Most popular bi-weekly complete refresh',
    features: ['All Essential Features', 'Full Interior Vacuuming', 'Dashboard & Door Card Wipe', 'Leather & Trim Condition', 'Hydrophobic Spray Wax']
  },
  {
    name: 'ELITE DETAIL',
    price: 349,
    duration: '4 Hours',
    popular: false,
    vehicleSuitability: 'Deep quarterly interior & exterior restoration',
    features: ['All Signature Features', 'Interior Carpet Steam Clean', 'Deep Leather Hydration Spa', 'Single-Stage Paint Gloss Polish', 'Engine Compartment Wipe']
  },
  {
    name: 'ULTIMATE PROTECTION',
    price: 1499,
    duration: '2 Days',
    popular: false,
    vehicleSuitability: 'Showroom ceramic defense with 5-year warranty',
    features: ['Multi-Stage Paint Correction', 'Dual-Layer 9H Ceramic Shield', 'Interior Leather Ceramic Guard', 'Glass Hydrophobic Treatment', '5-Year Warranty Certificate']
  }
];

export const ADDONS: AddonOption[] = [
  { id: 'carpet-steam', name: 'Hot Water Carpet Steam Extraction', price: 150, description: 'Deep thermal extraction removing stubborn sand & stains' },
  { id: 'wheel-ceramic', name: 'Wheel Barrel Ceramic Coating', price: 250, description: 'Brake dust repelling ceramic barrier on all 4 wheels' },
  { id: 'engine-bay', name: 'Engine Bay Steam Degrease', price: 200, description: 'Dry steam cleaning and satin protective engine dressing' },
  { id: 'pet-hair', name: 'Pet Hair Deep Extraction', price: 100, description: 'Specialized rubber brush & vacuum pet hair removal' },
  { id: 'ozone-odor', name: 'AC Duct & Ozone Odor Treatment', price: 150, description: 'Medical-grade ozone gas destroying bacteria & odor' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Tariq Al-Maktoum',
    vehicle: 'Porsche 911 GT3 RS',
    service: '9H Ceramic Coating',
    rating: 5,
    review: 'Aurelis applied 9H ceramic coating and paint correction to my GT3 RS. The depth of gloss is unbelievable and maintenance washes take 15 minutes now.',
    location: 'Emirates Hills, Dubai'
  },
  {
    name: 'Sarah Jenkins',
    vehicle: 'Range Rover Autobiography',
    service: 'Mobile Premium Wash',
    rating: 5,
    review: 'The mobile van came directly to my villa in Palm Jumeirah. Fully self-contained with softened water. Incredible convenience and perfectionist detailers.',
    location: 'Palm Jumeirah, Dubai'
  },
  {
    name: 'Faris Al-Nuaimi',
    vehicle: 'Lamborghini Huracán Tecnica',
    service: 'Full PPF Protection Film',
    rating: 5,
    review: 'Full XPEL PPF wrap completed in 3 days. Invisible edges and true self-healing protection against sandstorms on the Abu Dhabi highway.',
    location: 'Saadiyat Island, Abu Dhabi'
  },
  {
    name: 'Marcus Vance',
    vehicle: 'Mercedes-AMG S63',
    service: 'Interior Leather Spa',
    rating: 5,
    review: 'Brought my S63 interior back to factory matte condition. Removed all oil shine from the Nappa leather and restored the original aroma.',
    location: 'DIFC, Dubai'
  },
  {
    name: 'Rashid Al-Kaitoob',
    vehicle: 'BMW M4 Competition',
    service: 'Multi-Stage Paint Correction',
    rating: 5,
    review: 'Removed 95% of swirl marks left by cheap automatic car washes. The paint look like liquid black glass. Aurelis is the best in the UAE.',
    location: 'Al Zahia, Sharjah'
  }
];

export const LOCATIONS: LocationInfo[] = [
  {
    city: 'Dubai',
    name: 'Dubai Studio HQ',
    address: 'Al Quoz Industrial 3, Street 18, Dubai, UAE',
    phone: '+971 4 388 9911',
    whatsapp: '+971 50 449 8811',
    hours: 'Daily 8:00 AM – 10:00 PM',
    bays: 6,
    services: ['Climate-Controlled PPF Bay', '9H Ceramic Cleanrooms', 'Rupes Polish Studio', 'VIP Lounge']
  },
  {
    city: 'Abu Dhabi',
    name: 'Abu Dhabi Detailing Studio',
    address: 'Al Reem Island, Sector 2, Abu Dhabi, UAE',
    phone: '+971 2 677 4422',
    whatsapp: '+971 50 449 8811',
    hours: 'Daily 8:00 AM – 10:00 PM',
    bays: 4,
    services: ['XPEL Film Plotter', 'Steam Interior Spa', 'Ceramic Curing Lamps', 'Private Pick-Up Flatbed']
  },
  {
    city: 'Sharjah',
    name: 'Sharjah & Northern Emirates Fleet',
    address: 'University City Road, Sharjah, UAE',
    phone: '+971 6 522 3344',
    whatsapp: '+971 50 449 8811',
    hours: 'Daily 8:00 AM – 9:00 PM',
    bays: 3,
    services: ['Express Detailing', 'Mobile Van Dispatch', 'Fleet Contracts', 'Leather Restoration']
  }
];

export const PROCESS_STEPS = [
  { num: '01', title: 'INSPECT', desc: 'Digital paint depth gauge measurement and multi-angle LED light swirl inspection.' },
  { num: '02', title: 'PREPARE', desc: 'Iron fall-out decontamination bath, clay bar decontamination, and trim delicate masking.' },
  { num: '03', title: 'CLEAN', desc: 'pH-neutral snow foam wash, dual-bucket hand scrub, and hot water carpet steam extraction.' },
  { num: '04', title: 'DETAIL', desc: 'Multi-stage Rupes dual-action paint correction and anti-bacterial leather spa hydration.' },
  { num: '05', title: 'PROTECT', desc: 'Application of 9H quartz ceramic coating matrix or XPEL self-healing PPF wrap.' },
  { num: '06', title: 'DELIVER', desc: 'Final inspection under studio sun-simulation lamps, warranty certificate, and handover.' }
];

export const MEMBERSHIPS = [
  {
    name: 'SILVER CLUB',
    price: 199,
    period: 'month',
    washes: '2 Signature Washes / Month',
    features: ['2x Signature Washes Included', '15% Off All Detailing Services', 'Priority Online Booking Slots', 'Free Tire & Trim Conditioning']
  },
  {
    name: 'GOLD CLUB',
    price: 399,
    period: 'month',
    washes: '4 Signature Washes / Month',
    popular: true,
    features: ['4x Signature Washes Included', '1x Free Mobile Van Dispatch', '25% Off Ceramic & Paint Correction', 'Complimentary AC Ozone Sanitization', 'Dedicated Service Concierge']
  },
  {
    name: 'BLACK VIP',
    price: 799,
    period: 'month',
    washes: 'Unlimited Washes + Detailing',
    features: ['Unlimited Studio & Mobile Washes', '1x Full Interior Detail Included / Year', '35% Off PPF & Ceramic Coating', '24/7 Enclosed Flatbed Recovery', 'Personal Master Detailer Assigned']
  }
];
