export interface MaintenanceService {
  id: string;
  slug: string;
  num: string;
  name: string;
  category: 'AC & Climate' | 'Plumbing & Water' | 'Electrical' | 'Finishing & Painting' | 'Handyman & Smart';
  shortDescription: string;
  fullDescription: string;
  startingPrice: number;
  priceUnit: string;
  duration: string;
  icon: string;
  commonProblems: string[];
  inclusions: string[];
  exclusions: string[];
  workflow: string[];
  faqs: { q: string; a: string }[];
}

export interface MaintenanceProject {
  id: string;
  title: string;
  serviceCategory: string;
  propertyType: 'Apartment' | 'Villa' | 'Office' | 'Commercial';
  imageBefore: string;
  imageAfter: string;
  challenge: string;
  solution: string;
  materialsUsed: string[];
  durationHours: string;
  sampleNotice: string;
}

export interface TechnicianProfile {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experienceYears: number;
  rating: number;
  image: string;
  certifiedIn: string[];
  sampleNotice: string;
}

export interface MaintenancePackage {
  id: string;
  name: string;
  priceMonthly: number;
  tagline: string;
  isPopular?: boolean;
  features: string[];
  visitsIncluded: string;
  responseTime: string;
}

export interface ServiceArea {
  id: string;
  emirate: string;
  popularDistricts: string[];
  activeTechnicians: number;
  sampleNotice: string;
}

export interface MaintenanceFaq {
  id: string;
  question: string;
  answer: string;
}

export interface MaintenanceReminderItem {
  id: string;
  title: string;
  frequency: string;
  lastDone: string;
  nextDue: string;
  category: string;
}

export const MAINTENANCE_BRAND_INFO = {
  name: "FIXORA ATELIER",
  tagline: "Premium UAE Home Maintenance & Emergency Property Services",
  phone: "+971 4 800 3490",
  whatsapp: "https://wa.me/971500000000?text=Hello%20Fixora,%20I%20need%20a%20technician%20booking.",
  email: "concierge@fixora-atelier.ae",
  address: "Al Quoz Industrial Area 3, Dubai, UAE",
  workingHours: "24/7 Emergency Dispatch • Regular Hours: 7:00 AM – 10:00 PM",
  conceptNotice: "CONCEPT PROJECT — Premium AED 2,499 Package Home Maintenance Demo",
  sampleBuildBadge: "Sample Build #09",
};

export const MAINTENANCE_SERVICES: MaintenanceService[] = [
  {
    id: "ac-repair-maintenance",
    slug: "ac-repair-maintenance",
    num: "01",
    name: "AC Repair & Duct Deep Maintenance",
    category: "AC & Climate",
    shortDescription: "Complete coil sanitization, gas top-ups, thermostat calibration, and emergency cooling repairs.",
    fullDescription: "Ensure sub-zero cooling efficiency during hot summer months. Our certified HVAC specialists perform deep pressure washing of evaporator coils, antibacterial duct sanitization, R410A gas pressure checks, and digital thermostat calibration.",
    startingPrice: 149,
    priceUnit: "per AC unit",
    duration: "60–90 Mins",
    icon: "Flame",
    commonProblems: [
      "AC blowing warm or humid air",
      "Water leaking from indoor unit",
      "Foul odor or dust build-up in ducts",
      "Compressor tripping electrical breaker"
    ],
    inclusions: [
      "Evaporator & condenser coil pressure washing",
      "Drainage line flushing & vacuuming",
      "R410A refrigerant gas pressure check",
      "Thermostat & electrical wiring test",
      "Antibacterial duct spray treatment",
      "30-day workmanship guarantee"
    ],
    exclusions: ["Compressor unit replacement parts", "Full ductwork sheet metal redesign"],
    workflow: [
      "Digital Airflow & Temperature Differential Test",
      "Coil & Drain Line High-Pressure Clean",
      "Refrigerant Gas Level Adjustment",
      "Final Cooling Verification & Service Report"
    ],
    faqs: [
      { q: "How often should AC units be serviced in Dubai?", a: "We recommend quarterly preventative servicing (every 3 months) to prevent coil clogging and water leakage during peak summer." },
      { q: "What is included in the AED 149 AC Service?", a: "Complete coil washing, drain line flushing, gas check, filter sanitization, and electrical safety inspection." }
    ]
  },
  {
    id: "plumbing-services",
    slug: "plumbing-services",
    num: "02",
    name: "Emergency Plumbing & Pipe Repairs",
    category: "Plumbing & Water",
    shortDescription: "Burst pipe containment, water heater replacements, high-pressure drain jetting, and leak detection.",
    fullDescription: "Protect your property from costly water damage. Our master plumbers use acoustic leak detection and thermal imaging cameras to locate hidden pipe leaks inside walls and under tiles.",
    startingPrice: 99,
    priceUnit: "per callout visit",
    duration: "45–60 Mins",
    icon: "Droplets",
    commonProblems: [
      "Low water pressure across faucets",
      "Burst pipe or dripping ceiling leak",
      "Blocked main drainage or sink trap",
      "Water heater tripping power or no hot water"
    ],
    inclusions: [
      "Comprehensive leak & pressure inspection",
      "Minor pipe joint tightening & seal replacement",
      "Drain trap clearing & de-clogging",
      "Water pressure regulator adjustment",
      "Transparent parts replacement estimate"
    ],
    exclusions: ["Major underground main line excavation"],
    workflow: [
      "Acoustic & Thermal Leak Inspection",
      "Water Isolation & Pipe Repair",
      "Pressure Testing & Sanitation",
      "Customer Sign-Off & Warranty"
    ],
    faqs: [
      { q: "Do you handle emergency midnight water leaks?", a: "Yes, our 24/7 emergency dispatch team is active for urgent pipe bursts and water leaks across Dubai." }
    ]
  },
  {
    id: "electrical-services",
    slug: "electrical-services",
    num: "03",
    name: "Electrical Fault Inspection & DB Boards",
    category: "Electrical",
    shortDescription: "Short-circuit troubleshooting, DEWA trip resolution, DB board upgrades, and LED fixture wiring.",
    fullDescription: "Safe, licensed electrical diagnostics for residential villas and apartments. We isolate ground faults, replace faulty DEWA breakers, rebalance load circuits, and install energy-efficient LED systems.",
    startingPrice: 99,
    priceUnit: "per inspection visit",
    duration: "45–60 Mins",
    icon: "Activity",
    commonProblems: [
      "Main DB breaker tripping constantly",
      "Burnt odor near wall sockets or switches",
      "Flickering lights or voltage drops",
      "Power outlet dead in specific rooms"
    ],
    inclusions: [
      "DB board circuit load & breaker test",
      "Insulation resistance Earth leakage check",
      "Repair of up to 2 faulty switches or sockets",
      "Thermal inspection of breaker connections",
      "DEWA safety compliance report"
    ],
    exclusions: ["Complete villa rewiring materials"],
    workflow: [
      "DB Board Multimeter Load Diagnostics",
      "Circuit Fault Isolation & Wiring Repair",
      "Breaker Replacement & Torque Check",
      "Safety Verification & Earth Test"
    ],
    faqs: [
      { q: "Why does my breaker trip every time the AC turns on?", a: "This usually indicates a compressor short-circuit, weak breaker, or overloaded electrical phase." }
    ]
  },
  {
    id: "villa-apartment-painting",
    slug: "villa-apartment-painting",
    num: "04",
    name: "Premium Villa & Apartment Painting",
    category: "Finishing & Painting",
    shortDescription: "Jotun odorless washable paints, crack filling, damp treatment, and furniture protective masking.",
    fullDescription: "Revitalize your living spaces with precision interior and exterior painting. We apply Jotun premium low-VOC paints, execute flawless wall sanding, treat dampness, and leave zero mess.",
    startingPrice: 299,
    priceUnit: "per room / area",
    duration: "1–2 Days",
    icon: "Sliders",
    commonProblems: [
      "Peeling paint from humidity or dampness",
      "Visible wall cracks & nail holes",
      "Stained or discolored living room walls",
      "Move-out painting requirement"
    ],
    inclusions: [
      "Jotun Fenomastic / Lady Design washable paint",
      "Heavy plastic floor & furniture protection",
      "Wall crack filling, sanding & primer coat",
      "2 full coats of premium finish paint",
      "Post-painting deep cleanup"
    ],
    exclusions: ["Structural plaster rebuilding"],
    workflow: [
      "Color Matching & Furniture Masking",
      "Crack Putty Filling & Sanding",
      "Primer & Dual Coat Application",
      "Unmasking & Inspection Cleanup"
    ],
    faqs: [
      { q: "How long does a 2-bedroom apartment painting take?", a: "Our 3-man painter team completes a full 2-bedroom apartment within 24 to 36 hours." }
    ]
  },
  {
    id: "carpentry-furniture",
    slug: "carpentry-furniture",
    num: "05",
    name: "Custom Carpentry & Door Lock Repairs",
    category: "Finishing & Painting",
    shortDescription: "Door hinge alignment, kitchen cabinet fixes, custom shelving, and smart lock installations.",
    fullDescription: "Expert woodcraft for doors, cabinets, and custom furniture. We fix dragging doors, install Blum soft-close hinges, assemble complex flat-pack furniture, and build custom storage units.",
    startingPrice: 119,
    priceUnit: "per service visit",
    duration: "60 Mins",
    icon: "Wrench",
    commonProblems: [
      "Door sticking or dragging against floor",
      "Broken kitchen cabinet hinges or drawers",
      "Smart digital lock installation",
      "Wall-mounted TV & shelving placement"
    ],
    inclusions: [
      "Door hinge trimming & alignment",
      "Cabinet door catch & hinge replacement",
      "Heavy shelf & mirror wall mounting",
      "Hardware fitting & lubrication"
    ],
    exclusions: ["Custom solid wood furniture fabrication from scratch"],
    workflow: [
      "Measurement & Timber Inspection",
      "Precision Planing & Fitting",
      "Hardware Mounting & Anchoring",
      "Smooth Operation Testing"
    ],
    faqs: [
      { q: "Can you install digital smart locks on wooden doors?", a: "Yes, we install Yale, Samsung, and Nuki smart locks with precise mortise cutting." }
    ]
  },
  {
    id: "handyman-services",
    slug: "handyman-services",
    num: "06",
    name: "General Handyman & Property Fixing",
    category: "Handyman & Smart",
    shortDescription: "TV wall mounting, curtain rod hanging, picture frames, silicone sealants, and everyday fixes.",
    fullDescription: "One visit to solve all your home to-do items. From hanging heavy mirrors and installing curtain tracks to replacing silicone around bathtubs and fixing loose door handles.",
    startingPrice: 99,
    priceUnit: "per hour (Min 1hr)",
    duration: "1–2 Hours",
    icon: "Tool",
    commonProblems: [
      "Multiple small fixes piling up",
      "Curtains or blinds falling off wall",
      "Moldy silicone sealant in shower",
      "Loose door handles or towel racks"
    ],
    inclusions: [
      "Up to 3 small mounting tasks per hour",
      "Professional masonry drills & anchors",
      "High-grade anti-mold silicone application",
      "Cleanup of drilling dust"
    ],
    exclusions: ["Structural masonry demolition"],
    workflow: [
      "Task Checklist Review with Client",
      "Laser Leveling & Precision Anchoring",
      "Installation & Load Weight Check",
      "Workspace Cleanup"
    ],
    faqs: [
      { q: "Are tools and screws included?", a: "Yes, our handymen carry high-grade Fischer anchors, screws, drills, and spirit levels." }
    ]
  },
  {
    id: "appliance-repair",
    slug: "appliance-repair",
    num: "07",
    name: "Washing Machine & Refrigerator Repair",
    category: "Electrical",
    shortDescription: "Diagnostic troubleshooting for washing machines, dishwashers, fridges, and ovens.",
    fullDescription: "Extend the life of your household appliances. We diagnose heating element failures, washing machine drum vibration, refrigerator gas leaks, and oven thermostat faults.",
    startingPrice: 129,
    priceUnit: "per appliance inspection",
    duration: "60 Mins",
    icon: "Activity",
    commonProblems: [
      "Washing machine not draining or spinning",
      "Refrigerator not cooling or leaking water",
      "Dishwasher leaving water at the bottom",
      "Electric oven not heating evenly"
    ],
    inclusions: [
      "Full electronic & motor diagnostic",
      "Pump & belt inspection",
      "Refrigerant gas check",
      "Upfront spare part quote"
    ],
    exclusions: ["Obsolete appliance electronic boards"],
    workflow: [
      "Voltage & Motor Continuity Test",
      "Component Isolation & Replacement Quote",
      "Part Fitting & Calibration",
      "Cycle Run Test"
    ],
    faqs: [
      { q: "Do you use genuine spare parts?", a: "Yes, we source OEM parts for Bosch, Siemens, Samsung, LG, Whirlpool, and Miele." }
    ]
  },
  {
    id: "water-tank-cleaning",
    slug: "water-tank-cleaning",
    num: "08",
    name: "Water Tank Cleaning & Disinfection",
    category: "Plumbing & Water",
    shortDescription: "Municipality-approved tank de-sludging, high-pressure washing, and chlorine sterilization.",
    fullDescription: "Clean, safe water for your family. We drain, de-sludge, pressure wash, and disinfect GRP and concrete roof/ground water tanks according to UAE Municipality standards.",
    startingPrice: 249,
    priceUnit: "per villa tank",
    duration: "2–3 Hours",
    icon: "Droplets",
    commonProblems: [
      "Sediment or discolored water from taps",
      "Unpleasant odor in bathroom water",
      "Bacterial or algae growth in roof tank",
      "Annual municipality compliance"
    ],
    inclusions: [
      "Complete water pump isolation & tank draining",
      "Sediment & sludge removal",
      "High-pressure jet wash of interior walls",
      "Food-grade chlorine sterilization treatment",
      "Water quality clarity check"
    ],
    exclusions: ["Main booster pump motor rewinding"],
    workflow: [
      "Pump Shut-Off & Draining",
      "Manual Sludge Scraping & Jet Wash",
      "Disinfection & Refilling",
      "Water Flow Test"
    ],
    faqs: [
      { q: "How long is the water supply turned off during tank cleaning?", a: "Usually 2 to 3 hours while our team cleans and sterilizes the tank." }
    ]
  },
  {
    id: "waterproofing-roof-leak",
    slug: "waterproofing-roof-leak",
    num: "09",
    name: "Roof & Bathroom Waterproofing",
    category: "Plumbing & Water",
    shortDescription: "Combo roof waterproofing membranes, polyurethane sealants, and bathroom leak barriers.",
    fullDescription: "Stop rain and AC condensation leaks permanently. We apply liquid polyurethane membranes, bitumen torch-on sheets, and tile injection grouting for 100% leak protection.",
    startingPrice: 499,
    priceUnit: "per area treatment",
    duration: "1–3 Days",
    icon: "ShieldCheck",
    commonProblems: [
      "Ceiling dampness after heavy rain",
      "Water leaking through balcony tiles",
      "Peeling paint beneath bathroom floors",
      "Roof membrane cracking"
    ],
    inclusions: [
      "Surface cleaning & crack preparation",
      "Primer coat & reinforcing mesh",
      "Dual coat elastomeric polyurethane application",
      "Flood test verification",
      "5-year leak-free warranty"
    ],
    exclusions: ["Full roof structural re-concreting"],
    workflow: [
      "Moisture Detection & Surface Grind",
      "Polyurethane Layer Coat Application",
      "Reinforcing Fabric Embedding",
      "Water Flood Test"
    ],
    faqs: [
      { q: "Does waterproofing come with a warranty?", a: "Yes, our full roof waterproofing treatments carry a 5-year leak-free warranty." }
    ]
  },
  {
    id: "smart-home-automation",
    slug: "smart-home-automation",
    num: "10",
    name: "Smart Home Switches & Security Cam Setup",
    category: "Handyman & Smart",
    shortDescription: "Wi-Fi smart touch switches, Ring/Nest video doorbells, CCTV cameras, and Alexa integration.",
    fullDescription: "Transform your home into an intelligent living space. We install smart touch switches, motorized curtain modules, video doorbells, and outdoor security cameras connected to your smartphone.",
    startingPrice: 199,
    priceUnit: "per setup visit",
    duration: "1–2 Hours",
    icon: "Home",
    commonProblems: [
      "Wanting remote AC control while traveling",
      "Replacing old manual light switches with smart touch",
      "Video doorbell wiring issues",
      "Wi-Fi dead zones for smart devices"
    ],
    inclusions: [
      "Smart switch neutral wire check & installation",
      "Ring / Nest doorbell mounting & transformer wiring",
      "App configuration & scene creation",
      "Alexa / Google Home voice assistant pairing",
      "User training & walkthrough"
    ],
    exclusions: ["Structured CAT6 fiber cabling through conduits"],
    workflow: [
      "Wiring & Voltage Check",
      "Smart Switch & Doorbell Installation",
      "Wi-Fi App Pairing & Scene Automation",
      "Customer Demo"
    ],
    faqs: [
      { q: "Do smart light switches require neutral wires?", a: "We stock both Neutral and No-Neutral smart switches compatible with all UAE villa wiring." }
    ]
  }
];

export const MAINTENANCE_PROJECTS: MaintenanceProject[] = [
  {
    id: "proj-1",
    title: "Emirates Hills Villa AC Overhaul",
    serviceCategory: "AC & Climate",
    propertyType: "Villa",
    imageBefore: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop",
    challenge: "8 AC units blowing warm air during peak July summer heat due to clogged coils and low gas pressure.",
    solution: "Executed deep coil pressure washing, antibacterial duct sanitization, and R410A gas rebalancing across all 8 units.",
    materialsUsed: ["Jotun Antibacterial Spray", "R410A Refrigerant Gas", "Digital Thermostats"],
    durationHours: "6 Hours",
    sampleNotice: "Concept Project — Sample Build #09"
  },
  {
    id: "proj-2",
    title: "Dubai Marina Apartment Emergency Leak Fix",
    serviceCategory: "Plumbing & Water",
    propertyType: "Apartment",
    imageBefore: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop",
    challenge: "Hidden pipe burst behind bathroom wall causing water seepage to lower apartment floor.",
    solution: "Located leak with acoustic camera, cut minimal tile access, replaced damaged PPR joint, and waterproofed wall.",
    materialsUsed: ["PPR 25mm Pipe", "Thermal Leak Camera", "Polyurethane Grout"],
    durationHours: "3 Hours",
    sampleNotice: "Concept Project — Sample Build #09"
  },
  {
    id: "proj-3",
    title: "Palm Jumeirah Villa Interior Painting Refresh",
    serviceCategory: "Finishing & Painting",
    propertyType: "Villa",
    imageBefore: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    challenge: "Discolored 5-bedroom villa walls with hairline cracks and humidity dampness near windows.",
    solution: "Applied anti-damp primer, filled 120+ cracks, and applied 2 coats of Jotun Fenomastic matt paint.",
    materialsUsed: ["Jotun Fenomastic Washable Paint", "Anti-Mold Primer", "Fibre Mesh Tape"],
    durationHours: "2 Days",
    sampleNotice: "Concept Project — Sample Build #09"
  },
  {
    id: "proj-4",
    title: "Business Bay Office DB Board Overhaul",
    serviceCategory: "Electrical",
    propertyType: "Office",
    imageBefore: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=800&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    challenge: "Office DB board tripping repeatedly during peak work hours, cutting server room power.",
    solution: "Rebalanced electrical load across 3 phases, replaced 6 faulty Schneider breakers, and torque-tested wiring.",
    materialsUsed: ["Schneider Electric Breakers", "Copper Busbars", "Digital Load Meter"],
    durationHours: "4 Hours",
    sampleNotice: "Concept Project — Sample Build #09"
  },
  {
    id: "proj-5",
    title: "Jumeirah Golf Estates Water Tank Sterilization",
    serviceCategory: "Plumbing & Water",
    propertyType: "Villa",
    imageBefore: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    challenge: "Roof GRP water tank accumulated 5cm sediment layer causing tap water discoloration.",
    solution: "Drained tank, pressure-jet washed interior walls, de-sludged floor, and performed chlorine sterilization.",
    materialsUsed: ["High-Pressure Jet Washer", "Food-Grade Chlorine Sanitizer", "Submersible Draining Pump"],
    durationHours: "3 Hours",
    sampleNotice: "Concept Project — Sample Build #09"
  },
  {
    id: "proj-6",
    title: "Arabian Ranches Smart Home Automation Retrofit",
    serviceCategory: "Handyman & Smart",
    propertyType: "Villa",
    imageBefore: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    challenge: "Homeowner wanted smartphone AC and lighting control without rewiring existing villa conduits.",
    solution: "Installed 24 Smart Touch Light Switches, Nest Thermostat modules, and Ring Doorbell Pro.",
    materialsUsed: ["Smart Touch Glass Switches", "Nest Learning Thermostat", "Ring Video Doorbell"],
    durationHours: "5 Hours",
    sampleNotice: "Concept Project — Sample Build #09"
  }
];

export const TECHNICIAN_TEAM: TechnicianProfile[] = [
  {
    id: "tech-1",
    name: "Tariq Al-Najjar",
    role: "Senior HVAC Specialist",
    specialization: "AC Compressor Overhaul & Duct Sanitization",
    experienceYears: 11,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    certifiedIn: ["Daikin Certified", "Carrier HVAC Specialist", "R410A Gas Safety"],
    sampleNotice: "Sample Technician Profile — Concept Build"
  },
  {
    id: "tech-2",
    name: "Vikram Sharma",
    role: "Master Plumber & Leak Specialist",
    specialization: "Thermal Camera Leak Detection & Pressure Piping",
    experienceYears: 14,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    certifiedIn: ["Master Plumber License", "Thermal Leak Camera Certified", "PPR Heat Fusion"],
    sampleNotice: "Sample Technician Profile — Concept Build"
  },
  {
    id: "tech-3",
    name: "Hassan Raza",
    role: "Lead Electrical Engineer",
    specialization: "DEWA DB Boards, Short Circuits & Smart Switches",
    experienceYears: 10,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    certifiedIn: ["DEWA Approved Inspector", "Schneider Electric DB Certified", "Smart Home Automation"],
    sampleNotice: "Sample Technician Profile — Concept Build"
  },
  {
    id: "tech-4",
    name: "Youssef Al-Masri",
    role: "Finishing & General Maintenance Lead",
    specialization: "Jotun Painting, Carpentry & Smart Home Locks",
    experienceYears: 12,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    certifiedIn: ["Jotun Master Painter", "Yale Lock Specialist", "Safety First First Aid"],
    sampleNotice: "Sample Technician Profile — Concept Build"
  }
];

export const MAINTENANCE_PACKAGES: MaintenancePackage[] = [
  {
    id: "pkg-essential",
    name: "Essential Visit",
    priceMonthly: 99,
    tagline: "Single diagnostic visit & minor troubleshooting for emergency fixes.",
    features: [
      "Complete 20-Point Property Health Check",
      "Minor Electrical or Plumbing Diagnostics",
      "AC Temperature & Pressure Test",
      "Upfront Fixed Spare Part Quotes",
      "30-Day Workmanship Guarantee"
    ],
    visitsIncluded: "1 On-Demand Visit",
    responseTime: "Same-Day Priority"
  },
  {
    id: "pkg-homecare",
    name: "Home Care Package",
    priceMonthly: 399,
    tagline: "Comprehensive quarterly AC, plumbing, and electrical maintenance for apartments & villas.",
    isPopular: true,
    features: [
      "4 Preventative AC Servicings per year",
      "2 Water Tank & Plumbing Audits",
      "2 Electrical DB Board & Socket Checks",
      "Unlimited Emergency Callouts (Labor Included)",
      "15% Discount on Painting & Woodwork",
      "Dedicated WhatsApp Concierge Dispatch"
    ],
    visitsIncluded: "4 Scheduled + Unlimited Emergency",
    responseTime: "2-Hour Response Window"
  },
  {
    id: "pkg-accare",
    name: "AC Care Package",
    priceMonthly: 299,
    tagline: "Dedicated HVAC maintenance ensuring year-round sub-zero cooling efficiency.",
    features: [
      "3 Deep Coil Pressure Washings / year",
      "Drain Line Flushing & Vacuuming",
      "R410A Gas Pressure Adjustments",
      "Antibacterial Duct Spraying",
      "Free Emergency AC Breakdown Callouts"
    ],
    visitsIncluded: "3 Deep AC Services / year",
    responseTime: "Fast Track Summer Priority"
  },
  {
    id: "pkg-propertycare",
    name: "Property Care VIP",
    priceMonthly: 799,
    tagline: "Full-service annual property maintenance contract (AMC) for luxury villas.",
    features: [
      "Bi-Monthly Comprehensive Villa Audits",
      "6 Deep AC Pressure Servicings",
      "Annual Water Tank Sterilization",
      "Roof & Balcony Waterproofing Inspection",
      "Custom Handyman & Carpentry Hours Included",
      "Zero Labor Charges on All Emergency Calls",
      "Assigned Senior Maintenance Manager"
    ],
    visitsIncluded: "Bi-Monthly + Unlimited Emergency",
    responseTime: "60-Minute Emergency Dispatch"
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: "area-dubai",
    emirate: "Dubai",
    popularDistricts: ["Downtown Dubai", "Palm Jumeirah", "Dubai Marina", "Arabian Ranches", "DIFC", "Business Bay", "Jumeirah Golf Estates"],
    activeTechnicians: 18,
    sampleNotice: "Sample Coverage — Concept Build #09"
  },
  {
    id: "area-sharjah",
    emirate: "Sharjah",
    popularDistricts: ["Al Majaz", "Al Nahda", "Al Taawun", "Muwailih", "University City"],
    activeTechnicians: 8,
    sampleNotice: "Sample Coverage — Concept Build #09"
  },
  {
    id: "area-ajman",
    emirate: "Ajman",
    popularDistricts: ["Al Nuaimia", "Al Rashidiya", "Corniche Ajman", "Al Yasmeen"],
    activeTechnicians: 5,
    sampleNotice: "Sample Coverage — Concept Build #09"
  },
  {
    id: "area-abudhabi",
    emirate: "Abu Dhabi",
    popularDistricts: ["Al Reem Island", "Yas Island", "Saadiyat Island", "Al Raha", "Corniche Abu Dhabi"],
    activeTechnicians: 12,
    sampleNotice: "Sample Coverage — Concept Build #09"
  },
  {
    id: "area-alain",
    emirate: "Al Ain",
    popularDistricts: ["Al Jimi", "Al Foah", "Al Muwaiji", "Zakher"],
    activeTechnicians: 4,
    sampleNotice: "Sample Coverage — Concept Build #09"
  }
];

export const MAINTENANCE_FAQS: MaintenanceFaq[] = [
  {
    id: "faq-1",
    question: "How much does a technician callout visit cost in Dubai?",
    answer: "Our standard callout & diagnostic inspection fee is AED 99. If you approve the repair quote, the callout fee is waived against the total job cost."
  },
  {
    id: "faq-2",
    question: "How fast can an emergency AC or plumbing technician arrive?",
    answer: "For emergency requests submitted via WhatsApp or our 24/7 hotline, our nearest technician is dispatched immediately, typically arriving within 60 to 90 minutes."
  },
  {
    id: "faq-3",
    question: "What is included in the AED 149 AC Service?",
    answer: "The AED 149 AC service includes pressure washing the evaporator and condenser coils, drain line vacuuming, R410A gas level check, thermostat test, and antibacterial spray."
  },
  {
    id: "faq-4",
    question: "Do you offer Annual Maintenance Contracts (AMC) for villas?",
    answer: "Yes, our AMC plans start at AED 399/month (Home Care) and AED 799/month (Property Care VIP), offering unlimited emergency callouts, scheduled AC services, and water tank cleaning."
  },
  {
    id: "faq-5",
    question: "Can I book service appointments directly through WhatsApp?",
    answer: "Yes, click our WhatsApp Concierge button to send your property location, photos of the issue, and preferred time slot for instant confirmation."
  },
  {
    id: "faq-6",
    question: "Are spare parts and materials included in the service prices?",
    answer: "Service visit fees cover diagnostic labor and basic minor consumables. Any required major replacement parts (e.g. compressors, breakers, water heaters) are quoted upfront before installation."
  },
  {
    id: "faq-7",
    question: "Do you serve both apartments and luxury villas?",
    answer: "Yes, our teams carry equipment suitable for high-rise apartments in Dubai Marina/Downtown as well as multi-story villas in Palm Jumeirah and Arabian Ranches."
  },
  {
    id: "faq-8",
    question: "What warranty do you provide on home maintenance repairs?",
    answer: "All workmanship carries a standard 30-day guarantee. Major waterproofing treatments carry a 5-year leak-free warranty."
  },
  {
    id: "faq-9",
    question: "Do you offer water tank cleaning approved by UAE Municipality?",
    answer: "Yes, our water tank cleaning protocol uses food-grade chlorine sterilization and high-pressure jet washing compliant with local municipality standards."
  },
  {
    id: "faq-10",
    question: "Can I get an instant cost estimate before booking?",
    answer: "Yes, use our interactive Smart Quote Calculator on this page to select your property type, room count, and service requirements for an instant estimate."
  }
];

export const DEMO_MAINTENANCE_REMINDERS: MaintenanceReminderItem[] = [
  {
    id: "rem-1",
    title: "Quarterly AC Coil Pressure Wash & Gas Check",
    frequency: "Every 3 Months",
    lastDone: "May 2026",
    nextDue: "Sep 2026",
    category: "AC & Climate"
  },
  {
    id: "rem-2",
    title: "Annual Roof & Balcony Waterproofing Audit",
    frequency: "Every 12 Months",
    lastDone: "Oct 2025",
    nextDue: "Oct 2026",
    category: "Plumbing & Water"
  },
  {
    id: "rem-3",
    title: "Water Tank De-sludging & Disinfection",
    frequency: "Every 12 Months",
    lastDone: "Nov 2025",
    nextDue: "Nov 2026",
    category: "Plumbing & Water"
  },
  {
    id: "rem-4",
    title: "Electrical DB Board Terminal Torque Check",
    frequency: "Every 6 Months",
    lastDone: "Mar 2026",
    nextDue: "Sep 2026",
    category: "Electrical"
  }
];

export const DEMO_DASHBOARD_TELEMETRY = {
  activeRequests: 14,
  techniciansEnRoute: 6,
  avgResponseMins: "42 Mins",
  satisfactionRate: "99.4%",
  completedThisMonth: 184,
};

export const TECHNICIAN_PROFILES = TECHNICIAN_TEAM;
