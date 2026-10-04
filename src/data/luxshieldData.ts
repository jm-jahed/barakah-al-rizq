export interface LuxshieldService {
  id: string;
  turnaround?: string;
  tag: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  warranty: string;
  outcomes: string[];
  iconName: string;
}

export interface LuxshieldBeforeAfterCase {
  id: string;
  title: string;
  category: string;
  vehicleType: string;
  service: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export interface LuxshieldPackage {
  id: string;
  name: string;
  tagline: string;
  warrantyText: string;
  pricing: {
    sedan: string;
    suv: string;
    sports: string;
  };
  features: string[];
  recommendedFor: string;
  popular?: boolean;
}

export interface LuxshieldCaseStudy {
  clientTitle: string;
  location: string;
  vehicle: string;
  challenge: string;
  solution: string;
  metrics: {
    swirlRemoval: string;
    warrantyYears: string;
    glossLevel: string;
  };
  image: string;
}

export interface LuxshieldLeader {
  name: string;
  role: string;
  experience: string;
  specialization: string;
  image: string;
}

export interface LuxshieldInsight {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  image: string;
}

export interface LuxshieldLocation {
  city: string;
  area: string;
  description: string;
  address: string;
  phone: string;
  hours: string;
}

export const LUXSHIELD_BRAND = {
  name: "LUXSHIELD AUTO",
  tagline: "Protection Meets Perfection.",
  subheading: "Premium ceramic coating, paint protection film (PPF), paint correction, and luxury interior detailing engineered specifically for UAE extreme sun, sand, and heat exposure.",
  phone: "+971 4 388 9200",
  whatsapp: "https://wa.me/971523394001?text=Hello%20LUXSHIELD%20AUTO,%20I%20would%20like%20a%20detailing%20and%20ceramic%20coating%20quote%20for%20my%20car.",
  email: "studio@luxshield.ae",
  vehiclesCoatedCount: "5,000+",
  hardnessRating: "9H Hardness",
  maxWarranty: "Up to 7-Year Warranty",
  locationsCount: 2,
};

export const LUXSHIELD_BADGES = [
  { name: "LUXSHIELD CERAMIC", badge: "9H Hardness Formula" },
  { name: "CLIMATE SHIELD", badge: "UAE Heat & Sun Guard" },
  { name: "PAINT DEFENSE", badge: "Self-Healing PPF" },
  { name: "UV PROTECTION", badge: "100% Anti-Yellowing" },
  { name: "HYDROPHOBIC FINISH", badge: "Water-Beading Tech" },
  { name: "STUDIO GRADE", badge: "Dust-Free Environment" },
];

export const LUXSHIELD_SERVICES: LuxshieldService[] = [
  {
    id: "ceramic-coating",
    tag: "01",
    title: "Ceramic Coating",
    shortDescription: "Ultra-hydrophobic 9H nano-ceramic formulas engineered to protect paint against intense UAE UV rays, acid rain, and bird lime.",
    fullDescription: "Our signature 9H multi-layer ceramic coating bonds permanently at a molecular level with your vehicle's clear coat, creating a mirror-like high-gloss hydrophobic shield.",
    duration: "1 to 2 Days",
    warranty: "Up to 5-Year Warranty",
    outcomes: ["9H Pencil Hardness Shield", "Extreme Hydrophobic Water-Beading", "100% UV & Chemical Barrier"],
    iconName: "Shield"
  },
  {
    id: "paint-protection-film",
    tag: "02",
    title: "Paint Protection Film (PPF)",
    shortDescription: "Self-healing TPU transparent armor that shields your bumper, hood, and full body from UAE highway sandblasting and stone chips.",
    fullDescription: "Custom precision computer-cut PPF wrap that absorbs impacts and automatically self-heals swirl marks under ambient Dubai sunlight heat.",
    duration: "2 to 4 Days",
    warranty: "Up to 7-Year Warranty",
    outcomes: ["8 mil Heavy-Duty Self-Healing TPU", "Zero Yellowing & Sandblast Guard", "Computerized Precision Plotter Cuts"],
    iconName: "Maximize2"
  },
  {
    id: "interior-detailing",
    tag: "03",
    title: "Interior Detailing & Leather Shield",
    shortDescription: "Deep steam extraction cleaning, anti-bacterial cabin sanitization, and ceramic leather feeding against UAE heat cracking.",
    fullDescription: "Complete interior overhaul using gentle pH-balanced leather cleaners, steam extraction for carpet stains, and ceramic UV blockers on dashboard plastics.",
    duration: "4 to 6 Hours",
    warranty: "1-Year Interior Guard",
    outcomes: ["Leather Conditioning & UV Barrier", "Alcantara & Fabric Stain Proofing", "Full Medical-Grade Steam Purge"],
    iconName: "ShieldCheck"
  },
  {
    id: "exterior-detailing",
    tag: "04",
    title: "Exterior Detailing & Decontamination",
    shortDescription: "Multi-stage safe wash, iron fallout removal, clay bar decontamination, and high-gloss sealant application.",
    fullDescription: "Meticulous 21-step exterior process removing embedded desert dust, industrial fallout, and road tar without marring the clear coat finish.",
    turnaround: "4 to 6 Hours",
    duration: "4 to 6 Hours",
    warranty: "6-Month Gloss Guard",
    outcomes: ["Safe Two-Bucket Foam Wash", "Iron & Clay Decontamination", "Wheel Barrel & Brake Dust Purge"],
    iconName: "Sun"
  },
  {
    id: "paint-correction",
    tag: "05",
    title: "Paint Correction & Polish",
    shortDescription: "Multi-stage machine compounding and dual-action polishing to eliminate up to 95% of swirl marks, scratches, and oxidation.",
    fullDescription: "Using digital paint depth gauges, our master polishers restore clear coat clarity by safely levelling micro-scratches and dull sun oxidation.",
    duration: "1 to 2 Days",
    warranty: "Showroom Polish Finish",
    outcomes: ["Up to 95% Swirl Mark Elimination", "Paint Thickness Gauge Audit", "Optical Clarity & Deep Gloss"],
    iconName: "Layers"
  },
  {
    id: "window-tinting",
    tag: "06",
    title: "IR Heat-Rejection Window Tinting",
    shortDescription: "Nano-ceramic window tinting providing up to 99% UV radiation blocking and 85% infrared solar heat rejection.",
    fullDescription: "Keep your cabin cool during 50°C summer heatwaves. High-clarity ceramic window films compliant with UAE RTA darkness regulations.",
    duration: "2 to 3 Hours",
    warranty: "Up to 5-Year Warranty",
    outcomes: ["85% IR Heat Rejection", "99% UV Skin Protection", "RTA Compliant Optical Clarity"],
    iconName: "Eye"
  },
  {
    id: "headlight-restoration",
    tag: "07",
    title: "Headlight Restoration & UV Clear",
    shortDescription: "Wet-sanding yellowed headlight lenses back to crystal clarity, topped with a UV ceramic hard coat.",
    fullDescription: "Reverse foggy sand-pitted headlights. Restores maximum night illumination and passes annual RTA vehicle testing.",
    duration: "1.5 Hours",
    warranty: "2-Year Clarity Guarantee",
    outcomes: ["100% Optical Lens Transparency", "2-Step Wet Sanding & Polish", "UV Hard Coat Sealant"],
    iconName: "Activity"
  },
  {
    id: "mobile-detailing",
    tag: "08",
    title: "Mobile Detailing Unit",
    shortDescription: "Equipped mobile studio unit delivering premium detailing and maintenance washes directly to your home or office.",
    fullDescription: "Custom van equipped with de-ionized spot-free water, onboard generator, and master detailers servicing Dubai and Abu Dhabi residences.",
    duration: "3 to 4 Hours",
    warranty: "On-Location Service",
    outcomes: ["100% De-Ionized Spot-Free Water", "Self-Powered Mobile Bay", "Dubai & Abu Dhabi Direct"],
    iconName: "Truck"
  }
];

export const LUXSHIELD_BEFORE_AFTER_CASES: LuxshieldBeforeAfterCase[] = [
  {
    id: "case-1",
    title: "Porsche 911 GT3 — Swirl Correction & Ceramic",
    category: "Paint Correction",
    vehicleType: "Sports Coupe",
    service: "Signature Ceramic Package",
    description: "Heavy desert swirl marks and micro-scratches corrected with 2-stage compounding before applying a 5-year 9H ceramic coating.",
    beforeImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "case-2",
    title: "Range Rover Autobiography — Full Body PPF Wrap",
    category: "PPF",
    vehicleType: "Luxury SUV",
    service: "Ultimate Protection Package",
    description: "Complete 8 mil self-healing transparent TPU PPF wrap protecting Santorin Black metallic paint from Dubai sandstorms.",
    beforeImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "case-3",
    title: "Mercedes-AMG G63 — Gloss Restoration",
    category: "Ceramic Coating",
    vehicleType: "Luxury Off-Roader",
    service: "Signature Ceramic Package",
    description: "Restored dull sun-faded clear coat and sealed with 3-layer 9H ceramic coating for extreme gloss and water beading.",
    beforeImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "case-4",
    title: "Ferrari F8 Tributo — Front Bumper PPF",
    category: "PPF",
    vehicleType: "Supercar",
    service: "Custom Front End PPF",
    description: "Seamless computer-cut PPF applied to bumper, hood, fenders, and side mirrors against high-speed highway stone chips.",
    beforeImage: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "case-5",
    title: "Bentley Continental GT — Oxidation Removal",
    category: "Paint Correction",
    vehicleType: "Luxury Coupe",
    service: "2-Stage Paint Correction",
    description: "Removed heavy sun oxidation and etching from hood and trunk lid, restoring depth and clarity to Verdant Green paint.",
    beforeImage: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "case-6",
    title: "BMW M8 Competition — Full Detailing & Tinting",
    category: "Ceramic Coating",
    vehicleType: "Performance Sedan",
    service: "Signature Package + IR Tint",
    description: "Paint correction, 9H ceramic coating, IR ceramic window tint, and leather nourishment for total heat protection.",
    beforeImage: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
  }
];

export const LUXSHIELD_PACKAGES: LuxshieldPackage[] = [
  {
    id: "essential",
    name: "ESSENTIAL",
    tagline: "Single-Layer 9H Ceramic Protection",
    warrantyText: "Up to 2-Year Warranty",
    pricing: {
      sedan: "1,200",
      suv: "1,500",
      sports: "1,700"
    },
    features: [
      "1-Stage Light Paint Polish",
      "Single-Layer 9H Nano Ceramic Coating",
      "Wheel Face & Glass Hydrophobic Coat",
      "Exterior Wash & Decontamination",
      "Up to 2-Year Warranty Certificate"
    ],
    recommendedFor: "New vehicles & routine maintenance"
  },
  {
    id: "signature",
    name: "SIGNATURE",
    tagline: "Multi-Layer Ceramic + 2-Stage Paint Correction",
    warrantyText: "Up to 5-Year Warranty",
    pricing: {
      sedan: "2,800",
      suv: "3,300",
      sports: "3,600"
    },
    features: [
      "2-Stage Swirl & Scratch Paint Correction",
      "3-Layer 9H Ceramic Matrix Coating",
      "Full Rim Barrel & Brake Caliper Coating",
      "Interior Leather Steam & Ceramic Nourish",
      "Windshield & Glass Rain Repellent",
      "Up to 5-Year Warranty Certificate"
    ],
    recommendedFor: "Daily luxury vehicles & swirl restoration",
    popular: true
  },
  {
    id: "ultimate",
    name: "ULTIMATE",
    tagline: "Full TPU PPF Armor + Ceramic + Complete Interior",
    warrantyText: "Up to 7-Year Warranty",
    pricing: {
      sedan: "7,500",
      suv: "8,500",
      sports: "9,500"
    },
    features: [
      "Full Body 8 mil Self-Healing TPU PPF Wrap",
      "Top-Layer Ceramic Coating over PPF",
      "Complete Interior Leather & Alcantara Armor",
      "IR Ceramic Solar Heat Rejection Window Tint",
      "Engine Bay & Wheel Barrel Ceramic Seal",
      "Annual Complimentary Maintenance Wash",
      "Up to 7-Year Warranty Certificate"
    ],
    recommendedFor: "Supercars, exotic vehicles & high-value assets"
  }
];

export const LUXSHIELD_CASE_STUDY: LuxshieldCaseStudy = {
  clientTitle: "Porsche 911 Carrera S — 2-Year UAE Desert Recovery",
  location: "Downtown Dubai",
  vehicle: "Porsche 911 Carrera S (Jet Black Metallic)",
  challenge: "After 2 years of daily driving in Dubai, the vehicle suffered severe swirl marks from automated car washes, sun oxidation on the hood, and micro sand-pitting from Sheikh Zayed Road highway commuting.",
  solution: "Performed 2-stage machine compounding paint correction, applied Signature 3-layer 9H ceramic matrix coating, and wrapped high-impact front end in self-healing PPF.",
  metrics: {
    swirlRemoval: "95% Swirl Elimination",
    warrantyYears: "Up to 5-Year Warranty",
    glossLevel: "100 GU Showroom Reflection"
  },
  image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop"
};

export const LUXSHIELD_LEADERS: LuxshieldLeader[] = [
  {
    name: "Tariq Al-Farsi",
    role: "Founder & Master Detailer",
    experience: "16+ Yrs Luxury Detailing & Paint Restorations",
    specialization: "Certified Master Polisher (IDF Trained)",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Dominic Thorne",
    role: "Head of Ceramic Coating Applications",
    experience: "12+ Yrs Nano-Technology Chemical Coatings",
    specialization: "Ex-Maybach Studio Coating Specialist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Zaid Bin Rashid",
    role: "Head of PPF Installation",
    experience: "11+ Yrs Precision Film Plotting & Wrapping",
    specialization: "Wrapped 1,200+ Dubai Supercars",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Elena Vostova",
    role: "Studio Experience Manager",
    experience: "9+ Yrs High-End Automotive Client Concierge",
    specialization: "Quality Inspections & Warranty Audits",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  }
];

export const LUXSHIELD_INSIGHTS: LuxshieldInsight[] = [
  {
    id: "ceramic-vs-ppf",
    title: "Ceramic Coating vs PPF: What's the Difference?",
    category: "Protection Guide",
    readTime: "5 min read",
    summary: "Understanding chemical hydrophobic liquid shields vs physical self-healing film barriers to choose the right protection for your vehicle.",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "why-uae-cars-need-protection",
    title: "Why UAE Cars Need Extra Paint Protection",
    category: "UAE Climate",
    readTime: "4 min read",
    summary: "How extreme 50°C summer heat, UV radiation, humidity, and sand particles accelerate clear coat oxidation and paint fading.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "coating-lifespan",
    title: "How Long Does Ceramic Coating Really Last?",
    category: "Durability",
    readTime: "6 min read",
    summary: "Realistic durability expectations in desert environments and maintenance tips to preserve hydrophobic water-beading performance.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "preparing-for-appointment",
    title: "Preparing Your Car for a Detailing Appointment",
    category: "Owner Checklist",
    readTime: "3 min read",
    summary: "What to remove from your cabin and what to expect during the initial paint inspection at our Dubai or Abu Dhabi studio.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "signs-paint-needs-correction",
    title: "Signs Your Paint Needs Correction",
    category: "Paint Care",
    readTime: "5 min read",
    summary: "Identifying cobweb swirl marks, water spot etching, and holograms under bright LED studio lights.",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "interior-protection-uae-heat",
    title: "Interior Protection Tips for UAE Extreme Heat",
    category: "Interior Care",
    readTime: "5 min read",
    summary: "Preventing dashboard cracking, leather drying, and seam splitting with ceramic leather sealants and IR tinting.",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=600&auto=format&fit=crop"
  }
];

export const LUXSHIELD_LOCATIONS: LuxshieldLocation[] = [
  {
    city: "DUBAI",
    area: "Al Quoz Industrial 1 — Flagship Studio",
    description: "Climate-controlled 12-bay detailing studio equipped with dust-free coating booths, infrared curing lamps, and VIP lounge.",
    address: "Street 6, Al Quoz 1, Behind Times Square Center, Dubai, UAE",
    phone: "+971 4 388 9200",
    hours: "Sat - Thu: 9:00 AM - 8:00 PM | Fri: Closed"
  },
  {
    city: "ABU DHABI",
    area: "Mussafah M-14 — Detailing & PPF Studio",
    description: "State-of-the-art facility featuring Graphtec computerized PPF plotting, 9H ceramic booths, and enclosed car transport.",
    address: "Sector M-14, Mussafah Industrial Area, Abu Dhabi, UAE",
    phone: "+971 2 554 8100",
    hours: "Sat - Thu: 9:00 AM - 7:30 PM | Fri: Closed"
  }
];

export const LUXSHIELD_TESTIMONIALS = [
  {
    quote: "My car looks better than the day I bought it. The ceramic finish is unbelievable in this heat — dirt just slides off when washed.",
    clientName: "Rashid Al Nuaimi",
    vehicle: "Porsche 911 GT3",
    location: "Dubai",
    rating: 5
  },
  {
    quote: "The full PPF wrap saved my G63 bumper during a sandstorm trip to Abu Dhabi. Not a single stone chip or scratch on the original paint.",
    clientName: "Fahad Al-Maktoum",
    vehicle: "Mercedes-AMG G63",
    location: "Downtown Dubai",
    rating: 5
  },
  {
    quote: "AUTOVANTA level precision. They gave me a detailed digital report with before/after paint depth readings. 5-star studio work.",
    clientName: "Alexander Vance",
    vehicle: "Bentley Continental GT",
    location: "Dubai Marina",
    rating: 5
  },
  {
    quote: "The drag-slider before/after on their website convinced me. In person, the paint correction removed 95%+ of all swirl marks.",
    clientName: "Hamdan Al-Suwaidi",
    vehicle: "Ferrari F8 Tributo",
    location: "Abu Dhabi",
    rating: 5
  },
  {
    quote: "IR ceramic window tinting dropped my interior temperature by at least 15 degrees during July summer heat. Exceptional service.",
    clientName: "Sarah Jenkins",
    vehicle: "Range Rover Vogue",
    location: "Palm Jumeirah",
    rating: 5
  }
];

export const LUXSHIELD_FAQS = [
  {
    question: "How long does ceramic coating last in the UAE climate?",
    answer: "Depending on the selected package (Essential, Signature, or Ultimate), our 9H nano-ceramic coatings provide up to 2-year, 5-year, or 7-year warranty-backed protection against UV oxidation, chemical etching, and environmental sand dust."
  },
  {
    question: "What's the difference between Ceramic Coating and Paint Protection Film (PPF)?",
    answer: "Ceramic Coating is a liquid nano-polymer that bonds to your paint to deliver extreme gloss, UV defense, and hydrophobic water-beading. PPF is a thick 8 mil self-healing physical film that absorbs impacts from highway stone chips, road debris, and physical scratches."
  },
  {
    question: "How long does the application process take?",
    answer: "Minor detailing or tinting takes 3 to 6 hours. Signature multi-layer ceramic coating takes 1 to 2 days including surface decontamination and paint correction. Full body PPF wrapping takes 3 to 4 days inside our dust-free curing booth."
  },
  {
    question: "Do you offer mobile detailing service at my residence?",
    answer: "Yes! Our self-powered Mobile Detailing Van brings de-ionized spot-free water, steam extractors, and master detailers directly to your home or office in Dubai and Abu Dhabi."
  },
  {
    question: "Is there a warranty on your ceramic coating and PPF work?",
    answer: "Yes. Every application comes with an official warranty certificate: up to 2-year for Essential, up to 5-year for Signature, and up to 7-year for Ultimate PPF packages."
  },
  {
    question: "How should I maintain my car after ceramic coating?",
    answer: "We recommend washing with pH-neutral shampoo, using soft microfiber towels, and avoiding harsh automated brush car washes. We also provide a complimentary maintenance wash guide with every booking."
  },
  {
    question: "Do you work on all vehicle types?",
    answer: "Yes. We detail and protect everything from luxury sedans, SUVs, sports coupes, and exotic supercars to classic vintage restorations."
  },
  {
    question: "Can I combine PPF and Ceramic Coating together?",
    answer: "Yes! Our Ultimate Package applies self-healing PPF film to high-impact panels, topped with a hydrophobic ceramic coating across the entire vehicle body for the ultimate dual-layer protection."
  },
  {
    question: "Do you offer interior leather and fabric protection too?",
    answer: "Yes. Our interior detailing includes deep steam extraction, leather ceramic nourishment against UAE sun drying, and fabric hydrophobic stain proofing."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can use our online Package Calculator to estimate your vehicle pricing, fill out our booking form, or message our studio directly on WhatsApp."
  }
];