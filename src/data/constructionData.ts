export interface ConstructionService {
  id: string;
  slug: string;
  num: string;
  name: string;
  category: 'Architecture' | 'Interiors' | 'Renovation' | 'Turnkey & Fit-Out' | 'Smart & Outdoor';
  shortDescription: string;
  fullDescription: string;
  startingPrice: number;
  priceUnit: string;
  estimatedTimeline: string;
  deliverables: string[];
  materialsIncluded: string[];
  workflow: string[];
  faqs: { q: string; a: string }[];
}

export interface ConstructionProject {
  id: string;
  title: string;
  category: 'Villas' | 'Apartments' | 'Offices' | 'Retail' | 'Hospitality' | 'Renovation';
  location: string;
  areaSqFt: number;
  designStyle: string;
  completionStatus: 'Concept Completed' | 'In Progress (Demo)' | 'Design Approval';
  image: string;
  imageBefore?: string;
  challenge: string;
  solution: string;
  materialsUsed: string[];
  sampleBudgetRange: string;
  timelineMonths: string;
  sampleNotice: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  category: 'Marble' | 'Wood' | 'Stone' | 'Tiles' | 'Metal' | 'Glass' | 'Fabric' | 'Lighting';
  finish: string;
  origin: string;
  priceCategory: 'Standard' | 'Premium' | 'Ultra Luxury';
  recommendedSpaces: string[];
  image: string;
}

export interface DesignStyle {
  id: string;
  name: string;
  tagline: string;
  colorPalette: string[];
  keyMaterials: string[];
  furnitureDirection: string;
  lightingStyle: string;
  image: string;
}

export interface StudioTeamMember {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experienceYears: number;
  image: string;
  keyProjects: string[];
  sampleNotice: string;
}

export interface ConstructionFaq {
  id: string;
  question: string;
  answer: string;
}

export const CONSTRUCTION_BRAND_INFO = {
  name: "ATELIER ARCHITECTURE & INTERIORS",
  tagline: "Luxury Architectural Concepts, Interior Design & Turnkey Fit-Outs in Dubai",
  phone: "+971 4 800 7820",
  whatsapp: "https://wa.me/971500000000?text=Hello%20Atelier,%20I%20would%20like%20to%20book%20a%20design%20consultation.",
  email: "studio@atelier-architecture.ae",
  address: "Dubai Design District (d3), Building 07, Studio 302, Dubai, UAE",
  hours: "Monday – Saturday: 9:00 AM – 7:00 PM • Closed Sundays",
  conceptNotice: "CONCEPT PROJECT — Premium AED 2,499 Package Architecture Studio Demo",
  sampleBuildBadge: "Sample Build #10",
};

export const CONSTRUCTION_SERVICES: ConstructionService[] = [
  {
    id: "architectural-design",
    slug: "architectural-design",
    num: "01",
    name: "Architectural Planning & Villa Design",
    category: "Architecture",
    shortDescription: "Bespoke modern villa architecture, structural engineering approvals, and 3D exterior renderings.",
    fullDescription: "Transforming empty plots into iconic residential landmarks. We handle conceptual massing studies, floorplan zoning, Municipality structural approvals, and high-fidelity 3D exterior visualizations.",
    startingPrice: 4999,
    priceUnit: "per architectural package",
    estimatedTimeline: "4–8 Weeks",
    deliverables: [
      "Concept architectural floorplans & elevations",
      "Full 3D exterior lumion / V-Ray renderings",
      "Structural engineering & MEP load calculations",
      "Dubai Municipality & developer submission drawings",
      "Material specification schedules"
    ],
    materialsIncluded: ["Reinforced Concrete", "Thermally Insulated Glass", "Natural Travertine Cladding"],
    workflow: ["Plot Survey & Massing Study", "Schematic Architectural Drawings", "Municipal Approvals", "Detail Working Drawings"],
    faqs: [
      { q: "How long does architectural approval take in Dubai?", a: "Concept approval usually takes 2–3 weeks depending on master developer guidelines (Emaar, Nakheel, Dubai Holding)." }
    ]
  },
  {
    id: "interior-design-tasting",
    slug: "interior-design-tasting",
    num: "02",
    name: "Luxury Residential Interior Design",
    category: "Interiors",
    shortDescription: "Complete interior spatial design, custom joinery details, furniture selection, and lighting curation.",
    fullDescription: "Editorial interior design tailored to UHNW lifestyles. From Italian marble feature walls and custom walnut joinery to hand-blown Venetian glass chandeliers and bespoke acoustic paneling.",
    startingPrice: 2999,
    priceUnit: "starting conceptual fee",
    estimatedTimeline: "3–6 Weeks",
    deliverables: [
      "Full 3D interior renders for every room",
      "Reflected ceiling plans (RCP) & lighting layouts",
      "Detailed joinery & cabinetry workshop drawings",
      "FF&E (Furniture, Fixtures & Equipment) schedule",
      "Physical material moodboard presentation"
    ],
    materialsIncluded: ["Calacatta Gold Marble", "American Walnut Veneer", "Brushed Brass Accents"],
    workflow: ["Client Discovery & Moodboard", "Space Planning & Layout", "3D Photorealistic Rendering", "Material Board & FF&E Sign-off"],
    faqs: [
      { q: "What is included in the AED 2,999 initial design package?", a: "Full 3D interior renders for primary living areas, moodboard selection, and preliminary budget allocation." }
    ]
  },
  {
    id: "villa-construction",
    slug: "villa-construction",
    num: "03",
    name: "Turnkey Luxury Villa Construction",
    category: "Turnkey & Fit-Out",
    shortDescription: "Ground-up villa construction, structural MEP, luxury finishes, and project management.",
    fullDescription: "Seamless turnkey villa execution from foundation pouring to white-glove handover. We oversee site engineering, contractor coordination, quality audits, and timely handover.",
    startingPrice: 15000,
    priceUnit: "structural consultation deposit",
    estimatedTimeline: "10–18 Months",
    deliverables: [
      "Full structural groundwork & concrete shell",
      "MEP (Mechanical, Electrical, Plumbing) installation",
      "Premium exterior facade & glazing",
      "Complete interior finishing & joinery",
      "Landscaping, pool & boundary wall"
    ],
    materialsIncluded: ["High-Grade Steel", "Waterproof Bitumen Sheets", "Double-Glazed Aluminum"],
    workflow: ["Foundation & Core Structure", "MEP First Fix & Plastering", "Interior Fit-Out & Tiling", "Final Inspections & Key Handover"],
    faqs: [
      { q: "Do you handle main contractor management?", a: "Yes, our in-house project managers coordinate structural engineering, MEP sub-contractors, and authority sign-offs." }
    ]
  },
  {
    id: "apartment-renovation",
    slug: "apartment-renovation",
    num: "04",
    name: "Complete Apartment Renovation & Refresh",
    category: "Renovation",
    shortDescription: "Full interior transformation including wall re-layout, flooring, tiling, and smart lighting.",
    fullDescription: "Reimagining apartment layouts in Downtown, Dubai Marina, and Palm Jumeirah. We remove non-structural walls, replace old tiles with micro-cement or large-format porcelain, and fit custom kitchens.",
    startingPrice: 1499,
    priceUnit: "renovation planning deposit",
    estimatedTimeline: "6–10 Weeks",
    deliverables: [
      "Demolition & spatial re-configuration plans",
      "New porcelain tiling or parquet installation",
      "Custom kitchen & bathroom cabinetry",
      "Smart switch & recessed magnetic track lighting",
      "Developer NOC permit assistance"
    ],
    materialsIncluded: ["Large Format Porcelain Slabs", "Waterproof SPC Flooring", "Concealed LED Profiles"],
    workflow: ["NOC Permit Approval", "Demolition & Mucking Out", "Tiling & Ceiling Framing", "Joinery Installation & Final Paint"],
    faqs: [
      { q: "Do I need a developer NOC permit to renovate my apartment?", a: "Yes, we handle all NOC documentation for Emaar, Nakheel, Damac, and Select Group properties." }
    ]
  },
  {
    id: "kitchen-renovation",
    slug: "kitchen-renovation",
    num: "05",
    name: "Custom European Kitchen Design",
    category: "Interiors",
    shortDescription: "German mechanism hardware, quartz waterfalls, pocket doors, and integrated Miele appliances.",
    fullDescription: "Culinary spaces crafted for entertaining. Featuring Blum/Hettich soft-close hardware, quartz countertops, hidden pantry pocket doors, and ambient under-cabinet LED illumination.",
    startingPrice: 1999,
    priceUnit: "kitchen design package",
    estimatedTimeline: "3–4 Weeks",
    deliverables: [
      "Ergonomic kitchen layout & 3D renders",
      "Quartz or sintered stone countertop specification",
      "Custom lacquered or veneer cabinetry drawings",
      "Appliance integration plan",
      "Plumbing & electrical point diagram"
    ],
    materialsIncluded: ["Calacatta Quartz", "Lacquered Matte MDF", "Blum Soft-Close Hardware"],
    workflow: ["Ergonomic Layout Design", "3D Visualization", "Cabinet Factory Precision Cut", "On-Site Fitting & Countertop Install"],
    faqs: [
      { q: "What is the timeline for a custom kitchen installation?", a: "Production takes 3 weeks in the factory, followed by 3–4 days of on-site installation and appliance connection." }
    ]
  },
  {
    id: "bathroom-spa-renovation",
    slug: "bathroom-spa-renovation",
    num: "06",
    name: "Spa-Style Bathroom Transformation",
    category: "Renovation",
    shortDescription: "Freestanding tubs, rain showers, book-matched marble, and concealed Hansgrohe fixtures.",
    fullDescription: "Turn your master bathroom into a private wellness sanctuary. Incorporating thermostatic rain showers, heated towel rails, LED vanity mirrors, and anti-slip porcelain tiles.",
    startingPrice: 1299,
    priceUnit: "bathroom design package",
    estimatedTimeline: "2–3 Weeks",
    deliverables: [
      "3D bathroom concept renders",
      "Waterproofing & floor slope gradient plan",
      "Concealed mixer & sanitaryware schedule",
      "Custom floating vanity workshop drawings",
      "Niche lighting & mirror illumination layout"
    ],
    materialsIncluded: ["Book-Matched Porcelain", "Hansgrohe Matte Black Mixers", "Corian Seamless Basin"],
    workflow: ["Strip-Out & Waterproofing", "Concealed Plumbing & Electrical", "Precision Wall Tiling", "Sanitaryware Fitting"],
    faqs: [
      { q: "How do you prevent bathroom leaks after renovation?", a: "We apply 2 coats of elastomeric liquid waterproofing membrane followed by a 48-hour flood test before laying tiles." }
    ]
  },
  {
    id: "office-fitout",
    slug: "office-fitout",
    num: "07",
    name: "Commercial & Corporate Office Fit-Out",
    category: "Turnkey & Fit-Out",
    shortDescription: "DIFC & Business Bay commercial interiors, glass acoustic partitions, and executive suites.",
    fullDescription: "Corporate spaces engineered for productivity and brand prestige. We build acoustic glass meeting rooms, ergonomic open workspaces, executive boardrooms, and welcoming reception lounges.",
    startingPrice: 3499,
    priceUnit: "commercial design package",
    estimatedTimeline: "6–12 Weeks",
    deliverables: [
      "Space efficiency floorplan study",
      "Civil Defence & DCCA approval drawings",
      "Acoustic glass partitioning schedule",
      "Data cabling & server room layout",
      "Commercial carpet & ceiling tile specifications"
    ],
    materialsIncluded: ["Double-Glazed Acoustic Glass", "Commercial Modular Carpet", "Perforated Acoustic Ceilings"],
    workflow: ["Spatial Planning & DCCA Approval", "Glass & Drywall Framing", "Data & Electrical Containment", "Furniture Assembly"],
    faqs: [
      { q: "Do you handle DCCA and Civil Defence approvals for offices?", a: "Yes, our team submits all architectural and fire safety drawings to DCCA, Concordia, and Dubai Civil Defence." }
    ]
  },
  {
    id: "commercial-retail-restaurant",
    slug: "commercial-retail-restaurant",
    num: "08",
    name: "Retail Boutique & Restaurant Fit-Out",
    category: "Turnkey & Fit-Out",
    shortDescription: "High-impact retail storefronts, dining room ambiance, kitchen MEP, and brand joinery.",
    fullDescription: "Creating memorable retail and dining spaces in Dubai Mall, Mall of the Emirates, and DIFC. Complete MEP integration, specialized hood exhausts, display vitrines, and mood lighting.",
    startingPrice: 3999,
    priceUnit: "concept fit-out package",
    estimatedTimeline: "8–14 Weeks",
    deliverables: [
      "Storefront architectural facade design",
      "Commercial kitchen MEP & hood exhaust design",
      "Custom display counters & mannequin vitrines",
      "POS cash desk & acoustic ceiling design",
      "Mall management NOC approval package"
    ],
    materialsIncluded: ["Brushed Titanium Metal", "Tough Ultra-Clear Glass", "Fire-Rated Drywall"],
    workflow: ["Mall Concept Approval", "Night-Shift Demolition & Framing", "Commercial Kitchen MEP", "Custom Joinery & Signage"],
    faqs: [
      { q: "Can fit-out work be performed during mall night hours?", a: "Yes, our commercial installation teams work standard night shifts (10:00 PM – 6:00 AM) to comply with mall rules." }
    ]
  },
  {
    id: "landscape-pool-design",
    slug: "landscape-pool-design",
    num: "09",
    name: "Luxury Villa Landscape & Swimming Pool",
    category: "Smart & Outdoor",
    shortDescription: "Temperature-controlled swimming pools, sunken firepits, outdoor pergolas, and olive trees.",
    fullDescription: "Extend your interior living outdoors. Design and build infinity pools, motorized bioclimatic louvers, outdoor barbecue kitchens, travertine decking, and automated irrigation.",
    startingPrice: 2499,
    priceUnit: "landscape design package",
    estimatedTimeline: "6–10 Weeks",
    deliverables: [
      "3D landscape & pool masterplan render",
      "Swimming pool structural & filtration diagram",
      "Hardscape travertine decking layout",
      "Planting plan (mature palms, olive trees)",
      "Outdoor lighting & speaker layout"
    ],
    materialsIncluded: ["Travertine Decking", "Mosaic Pool Tiles", "Powder-Coated Aluminum Pergola"],
    workflow: ["3D Pool & Garden Renders", "Excavation & Pool Concrete Pour", "Pergola & Decking Fitting", "Planting & Irrigation"],
    faqs: [
      { q: "Are swimming pools heated and cooled?", a: "Yes, we install inverter heat/cool heat pumps maintaining 28°C water year-round." }
    ]
  },
  {
    id: "smart-home-architectural",
    slug: "smart-home-architectural",
    num: "10",
    name: "Architectural Smart Home Integration",
    category: "Smart & Outdoor",
    shortDescription: "KNX / Control4 automation, motorized architectural drapery, keyless access, and mood scenes.",
    fullDescription: "Discreet technology that enhances everyday living. Control lighting scenes, AC cooling zones, motorized curtains, audio, and security cameras from minimalist wall keypads or smartphones.",
    startingPrice: 1999,
    priceUnit: "smart home design plan",
    estimatedTimeline: "2–4 Weeks",
    deliverables: [
      "KNX / Control4 bus topology schematic",
      "Keypad engraving & button layout design",
      "Motorized curtain track conduit plan",
      "Multi-room audio speaker placement diagram",
      "App scene programming & user walkthrough"
    ],
    materialsIncluded: ["KNX Keypads", "Control4 Core Processor", "Origin Acoustics In-Ceiling Speakers"],
    workflow: ["Low-Voltage Conduit Wiring", "Smart Panel Termination", "App Scene Programming", "User Handover Walkthrough"],
    faqs: [
      { q: "Can smart home systems be retrofitted into existing villas?", a: "Yes, we use Zigbee wireless smart keypads that require zero wall rewiring." }
    ]
  }
];

export const CONSTRUCTION_PROJECTS: ConstructionProject[] = [
  {
    id: "proj-1",
    title: "Palm Jumeirah Signature Villa",
    category: "Villas",
    location: "Palm Jumeirah — Frond M (Sample Location)",
    areaSqFt: 7500,
    designStyle: "Modern Organic Luxury",
    completionStatus: "Concept Completed",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    imageBefore: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop",
    challenge: "Traditional Mediterranean layout with dark cellular rooms lacking natural light and sea view access.",
    solution: "Demolished central structural walls, installed 6-meter motorized floor-to-ceiling glass, and specified book-matched Calacatta marble floors.",
    materialsUsed: ["Calacatta Gold Marble", "American Walnut Joinery", "Minimal Frame Glazing"],
    sampleBudgetRange: "AED 1,200,000 – AED 1,800,000 (Demo Range)",
    timelineMonths: "10 Months",
    sampleNotice: "Concept Project — Sample Build #10"
  },
  {
    id: "proj-2",
    title: "Downtown Penthouse Transformation",
    category: "Apartments",
    location: "Downtown Dubai — Boulevard Heights (Sample Location)",
    areaSqFt: 3400,
    designStyle: "Minimalist Modern Concrete & Brass",
    completionStatus: "Concept Completed",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    imageBefore: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    challenge: "Outdated developer finishes with heavy beige tiles and cramped kitchen partition.",
    solution: "Created an open-concept living pavilion, micro-cement flooring, concealed German kitchen with pocket doors, and magnetic track lighting.",
    materialsUsed: ["Micro-Cement Flooring", "Lacquered Matte Black Cabinets", "Control4 Automation"],
    sampleBudgetRange: "AED 450,000 – AED 650,000 (Demo Range)",
    timelineMonths: "4 Months",
    sampleNotice: "Concept Project — Sample Build #10"
  },
  {
    id: "proj-3",
    title: "Dubai Hills Family Residence",
    category: "Villas",
    location: "Dubai Hills Estate — Parkway Vistas (Sample Location)",
    areaSqFt: 6200,
    designStyle: "Contemporary Warm Neutral",
    completionStatus: "In Progress (Demo)",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    imageBefore: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop",
    challenge: "Creating distinct living spaces for a large family while maintaining visual continuity and acoustic isolation.",
    solution: "Custom acoustic slat wood paneling, sunken formal majlis, floating travertine staircase, and smart climate zoning.",
    materialsUsed: ["Acoustic Oak Slats", "Navona Travertine", "Integrated Linear LED"],
    sampleBudgetRange: "AED 850,000 – AED 1,200,000 (Demo Range)",
    timelineMonths: "7 Months",
    sampleNotice: "Concept Project — Sample Build #10"
  },
  {
    id: "proj-4",
    title: "DIFC Executive Boardroom & Office",
    category: "Offices",
    location: "DIFC Gate Precinct 04 (Sample Location)",
    areaSqFt: 4200,
    designStyle: "Corporate Modern Industrial",
    completionStatus: "Concept Completed",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    imageBefore: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=800&auto=format&fit=crop",
    challenge: "Outdated cellular office partition layout restricting natural light to interior desks.",
    solution: "Full acoustic double-glazed partition system, custom 14-seat executive marble boardroom table, and DCCA fire compliance.",
    materialsUsed: ["Double Acoustic Glass", "Brushed Bronze Trim", "Executive Leather Wall Paneling"],
    sampleBudgetRange: "AED 550,000 – AED 800,000 (Demo Range)",
    timelineMonths: "3.5 Months",
    sampleNotice: "Concept Project — Sample Build #10"
  },
  {
    id: "proj-5",
    title: "Al Barari Eco-Luxe Sanctuary Villa",
    category: "Villas",
    location: "Al Barari — Seventh Heaven (Sample Location)",
    areaSqFt: 8800,
    designStyle: "Biophilic Japandi Luxury",
    completionStatus: "Concept Completed",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    imageBefore: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800&auto=format&fit=crop",
    challenge: "Integrating lush tropical botanical garden views directly into indoor living rooms without heat gain.",
    solution: "Low-E double glazing, internal courtyard garden with 100-year-old olive tree, travertine pool deck, and infinity pool.",
    materialsUsed: ["Low-E Solar Glazing", "Silver Travertine Decking", "Wabi-Sabi Lime Wash Paint"],
    sampleBudgetRange: "AED 1,800,000 – AED 2,500,000 (Demo Range)",
    timelineMonths: "12 Months",
    sampleNotice: "Concept Project — Sample Build #10"
  },
  {
    id: "proj-6",
    title: "Jumeirah Golf Estates Villa Refresh",
    category: "Renovation",
    location: "Jumeirah Golf Estates — Earth Course (Sample Location)",
    areaSqFt: 5400,
    designStyle: "Modern Arabic Fusion",
    completionStatus: "In Progress (Demo)",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    imageBefore: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    challenge: "Aging 15-year-old villa with water leaks near balcony and yellowed acrylic kitchen.",
    solution: "Complete roof waterproofing overhaul, open German kitchen fit-out, spa master bathroom, and smart lighting retrofit.",
    materialsUsed: ["German Lacquer Kitchen", "Hansgrohe Rain Shower", "KNX Smart Keypads"],
    sampleBudgetRange: "AED 380,000 – AED 550,000 (Demo Range)",
    timelineMonths: "3 Months",
    sampleNotice: "Concept Project — Sample Build #10"
  },
  {
    id: "proj-7",
    title: "Emirates Hills Grand Mansion",
    category: "Villas",
    location: "Emirates Hills — Sector E (Sample Location)",
    areaSqFt: 14000,
    designStyle: "Ultra-Luxury Classical Modern",
    completionStatus: "Design Approval",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
    imageBefore: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop",
    challenge: "Designing a 14,000 sq ft estate with private basement cinema, 8-car subterranean garage, and spa wing.",
    solution: "Complete architectural plan with underground hydraulic car lifts, acoustic 16-seat 4K Dolby Atmos theater, and 25m lap pool.",
    materialsUsed: ["Statuario Marble Slabs", "Custom Bronze Portals", "Dolby Atmos Acoustic Insulation"],
    sampleBudgetRange: "AED 3,500,000 – AED 5,000,000 (Demo Range)",
    timelineMonths: "18 Months",
    sampleNotice: "Concept Project — Sample Build #10"
  },
  {
    id: "proj-8",
    title: "City Walk Fashion Boutique Fit-Out",
    category: "Retail",
    location: "City Walk Dubai — Building 12 (Sample Location)",
    areaSqFt: 2200,
    designStyle: "Minimalist Sculptural Retail",
    completionStatus: "Concept Completed",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    imageBefore: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    challenge: "Cramped shell-and-core retail unit requiring maximum hanger capacity without feeling cluttered.",
    solution: "Sculptural curved micro-cement walls, brushed titanium hanging rails, hidden fitting room doors, and museum-grade spotlighting.",
    materialsUsed: ["Micro-Cement Plaster", "Brushed Titanium Steel", "Museum LED Spotlights"],
    sampleBudgetRange: "AED 280,000 – AED 400,000 (Demo Range)",
    timelineMonths: "2.5 Months",
    sampleNotice: "Concept Project — Sample Build #10"
  }
];

export const MATERIAL_ITEMS: MaterialItem[] = [
  {
    id: "mat-1",
    name: "Calacatta Gold Italian Marble",
    category: "Marble",
    finish: "Polished / Honed",
    origin: "Carrara, Italy",
    priceCategory: "Ultra Luxury",
    recommendedSpaces: ["Master Bathroom", "Living Room Feature Wall", "Kitchen Island"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mat-2",
    name: "American Black Walnut Veneer",
    category: "Wood",
    finish: "Deep Matte Lacquer",
    origin: "North America",
    priceCategory: "Premium",
    recommendedSpaces: ["Executive Office", "Master Bedroom Wardrobe", "Wall Paneling"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mat-3",
    name: "Roman Silver Travertine",
    category: "Stone",
    finish: "Cross-Cut Vein-Filled",
    origin: "Tivoli, Italy",
    priceCategory: "Premium",
    recommendedSpaces: ["Exterior Facade", "Pool Decking", "Foyer Entrance"],
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mat-4",
    name: "Large-Format Micro-Cement Slabs",
    category: "Tiles",
    finish: "Matte Smooth Wabi-Sabi",
    origin: "Spain",
    priceCategory: "Standard",
    recommendedSpaces: ["Penthouse Floors", "Minimal Kitchens", "Boutique Retail"],
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mat-5",
    name: "Brushed Champagne Bronze Alloy",
    category: "Metal",
    finish: "Anodized Satin",
    origin: "Germany",
    priceCategory: "Ultra Luxury",
    recommendedSpaces: ["Door Portals", "Partition Trims", "Custom Lighting"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mat-6",
    name: "Fluted Low-Iron Reeded Glass",
    category: "Glass",
    finish: "Textured Translucent",
    origin: "Austria",
    priceCategory: "Premium",
    recommendedSpaces: ["Shower Enclosures", "Office Partitions", "Cabinet Doors"],
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mat-7",
    name: "Bouclé Textured Wool Upholstery",
    category: "Fabric",
    finish: "Heavy Soft Touch",
    origin: "Belgium",
    priceCategory: "Premium",
    recommendedSpaces: ["Curved Sofas", "Armchairs", "Headboard Panels"],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "mat-8",
    name: "Magnetic Recessed Track LED Linear",
    category: "Lighting",
    finish: "Matte Black Anodized",
    origin: "Italy",
    priceCategory: "Standard",
    recommendedSpaces: ["Living Rooms", "Corridors", "Art Galleries"],
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop"
  }
];

export const DESIGN_STYLES: DesignStyle[] = [
  {
    id: "modern-organic",
    name: "Modern Organic Luxury",
    tagline: "Natural stone textures, warm wood tones, fluid curved furniture, and floor-to-ceiling glass.",
    colorPalette: ["#F5F2EC", "#D9CBB8", "#4A3B32", "#1C1C1C"],
    keyMaterials: ["Calacatta Marble", "Oak Slats", "Bouclé Fabric", "Bronze Metal"],
    furnitureDirection: "Low-profile sculptural curved seating & organic coffee tables",
    lightingStyle: "Concealed perimeter LED coves & blown amber glass pendants",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "minimalist-contemporary",
    name: "Minimalist Contemporary",
    tagline: "Uncluttered geometric lines, seamless micro-cement, pocket doors, and monochrome contrast.",
    colorPalette: ["#FFFFFF", "#E2E2E2", "#7A7A7A", "#0F0F0F"],
    keyMaterials: ["Micro-Cement", "Anodized Black Aluminum", "Low-Iron Glass"],
    furnitureDirection: "Minimalist modular sofas & frameless cantilevered tables",
    lightingStyle: "Recessed magnetic track spotlights & flush ceiling slots",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "arabic-modern-fusion",
    name: "Arabic Modern Fusion",
    tagline: "Reinterpreted mashrabiya geometric screens, travertine majlis seating, and warm gold brass accents.",
    colorPalette: ["#FAF6F0", "#C8A97E", "#8C6D46", "#141820"],
    keyMaterials: ["Roman Travertine", "Laser-Cut Brass Screens", "Linen Fabrics"],
    furnitureDirection: "Sunken majlis lounges & custom low walnut coffee tables",
    lightingStyle: "Geometric brass lanterns & ambient floor uplighting",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "biophilic-japandi",
    name: "Biophilic Japandi",
    tagline: "Wabi-sabi simplicity, internal courtyard gardens, natural clay plaster, and light ash timber.",
    colorPalette: ["#EBE8E1", "#CCC2B3", "#6E756B", "#2B2D2B"],
    keyMaterials: ["Clay Lime Wash", "Light Ash Wood", "Natural Tatami", "Raw Basalt"],
    furnitureDirection: "Handcrafted timber dining benches & woven paper cord chairs",
    lightingStyle: "Woven bamboo paper pendants & soft warm diffuse wash",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
  }
];

export const STUDIO_TEAM: StudioTeamMember[] = [
  {
    id: "member-1",
    name: "Architect Tariq Mansour",
    role: "Founding Creative Director — Sample Profile",
    specialization: "Ultra-Luxury Villa Architecture & Masterplanning",
    experienceYears: 20,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    keyProjects: ["Palm Jumeirah Villa M", "Emirates Hills Grand Estate"],
    sampleNotice: "Sample Architect Profile — Concept Build"
  },
  {
    id: "member-2",
    name: "Camilla Vane",
    role: "Head of Interior Design — Sample Profile",
    specialization: "Italian Furniture Curation & Material Moodboards",
    experienceYears: 15,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    keyProjects: ["Downtown Penthouse", "Al Barari Eco-Luxe Villa"],
    sampleNotice: "Sample Interior Designer Profile — Concept Build"
  },
  {
    id: "member-3",
    name: "Eng. Zayd Al-Hassan",
    role: "Senior Structural & MEP Manager — Sample Profile",
    specialization: "Municipality Approvals & DCCA Commercial Compliance",
    experienceYears: 16,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    keyProjects: ["DIFC Executive Office", "City Walk Boutique"],
    sampleNotice: "Sample Engineer Profile — Concept Build"
  },
  {
    id: "member-4",
    name: "Sofia Rossi",
    role: "Lead Lighting & Smart Home Designer — Sample Profile",
    specialization: "KNX Automation & Architectural Scene Programming",
    experienceYears: 11,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    keyProjects: ["Dubai Hills Residence", "Jumeirah Golf Refresh"],
    sampleNotice: "Sample Lighting Specialist Profile — Concept Build"
  }
];

export const CONSTRUCTION_FAQS: ConstructionFaq[] = [
  {
    id: "faq-1",
    question: "How much does interior design cost per square foot in Dubai?",
    answer: "Our preliminary conceptual interior design services range from AED 80–120/sq ft for basic apartment layouts up to AED 250–400+/sq ft for ultra-luxury bespoke villas including custom joinery and imported Italian marbles."
  },
  {
    id: "faq-2",
    question: "Do you manage Dubai Municipality, Emaar, and Nakheel approvals?",
    answer: "Yes, our in-house engineering desk handles complete NOC permit submissions to Emaar, Nakheel, Damac, Dubai Municipality, DCCA, Concordia, and Dubai Civil Defence."
  },
  {
    id: "faq-3",
    question: "How long does a complete villa interior renovation take?",
    answer: "A complete 5,000 sq ft villa interior renovation typically requires 3–4 months from initial design approval and permit issuance to final white-glove handover."
  },
  {
    id: "faq-4",
    question: "What is included in the AED 299 initial design consultation?",
    answer: "The AED 299 consultation includes a 60-minute site or studio meeting with a senior architect, spatial floorplan assessment, moodboard direction, and a preliminary budget breakdown."
  },
  {
    id: "faq-5",
    question: "Do you supply photorealistic 3D renders before construction?",
    answer: "Yes, every project receives photorealistic 3D renders covering material textures, lighting scenes, and custom joinery so you see the exact outcome prior to procurement."
  },
  {
    id: "faq-6",
    question: "Can I inspect physical material samples at your Dubai studio?",
    answer: "Yes, our studio in Dubai Design District (d3) houses over 300+ physical marble, wood veneer, acoustic fabric, travertine, and sanitaryware samples."
  },
  {
    id: "faq-7",
    question: "Do you provide turnkey construction services including MEP and pool?",
    answer: "Yes, we handle ground-up turnkey villa construction, including structural works, MEP, interior fit-out, swimming pool installation, and exterior landscaping."
  },
  {
    id: "faq-8",
    question: "Do you execute commercial office and restaurant fit-outs?",
    answer: "Yes, we execute corporate office fit-outs in DIFC and Business Bay, as well as retail and restaurant fit-outs in Dubai Mall and City Walk."
  },
  {
    id: "faq-9",
    question: "How do you handle project budget management?",
    answer: "We establish a fixed-itemized BOQ (Bill of Quantities) prior to work commencement. All material specifications and unit costs are approved in advance."
  },
  {
    id: "faq-10",
    question: "Can I request a consultation directly via WhatsApp?",
    answer: "Yes, click our WhatsApp Studio button to send your site floorplan or plot location for an instant design consultation."
  }
];

export const DEMO_CONSTRUCTION_METRICS = [
  { val: "10 Services", label: "Design & Build Offerings", sub: "Architecture, interiors & turnkey fit-out" },
  { val: "8 Projects", label: "Concept Case Studies", sub: "Palm Jumeirah, Downtown & DIFC" },
  { val: "7-Step Flow", label: "Delivery Protocol", sub: "Discovery to white-glove handover" },
  { val: "30+ Materials", label: "Studio Sample Library", sub: "Italian marble, walnut & travertine" },
];
