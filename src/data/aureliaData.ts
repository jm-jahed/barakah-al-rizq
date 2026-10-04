export interface AureliaResidence {
  id: string;
  name: string;
  location: string;
  district: string;
  type: 'Waterfront Villa' | 'Signature Penthouse' | 'Private Compound' | 'Golf Estate' | 'Branded Residence' | 'Eco Luxury Estate';
  bedrooms: number;
  bathrooms: number;
  buaSqM: number;
  buaSqFt: number;
  plotSqM?: number;
  plotSqFt?: number;
  priceAed: number;
  priceFormatted: string;
  pool: string;
  elevator: string;
  garage: string;
  status: string;
  reraPermit: string;
  escrowAccount: string;
  image: string;
  gallery: string[];
  headlineFeature: string;
  architecturalHighlights: string[];
  floorPlanDetails: {
    level: string;
    description: string;
    features: string[];
  }[];
}

export interface AureliaService {
  id: string;
  title: string;
  category: 'Acquisition' | 'Development' | 'Architecture' | 'Interiors' | 'Engineering' | 'Security & Wellness' | 'Advisory & Legal';
  description: string;
  metrics: string;
}

export interface MaterialFinish {
  id: string;
  name: string;
  origin: string;
  category: 'Marble & Stone' | 'Metals & Glass' | 'Timber & Millwork' | 'Smart Automation';
  description: string;
  applications: string[];
  image: string;
}

export interface PrimeDistrict {
  id: string;
  name: string;
  emirate: 'Dubai' | 'Abu Dhabi';
  vibe: string;
  averagePsfAed: number;
  highlights: string[];
  coordinates: string;
}

export const AURELIA_BRAND = {
  name: 'AURELIA ESTATES',
  legalName: 'AURELIA LUXURY PROPERTY DEVELOPMENTS LLC',
  tagline: 'Private Addresses. Built Without Compromise.',
  difcHQ: {
    title: 'DIFC Private Client Gallery',
    address: 'Gate Village Building 3, Level 7, DIFC, Dubai, UAE',
    phone: '+971 4 362 8800',
    tollFree: '800-AURELIA (800-2873542)',
    email: 'private@aureliaestates.ae',
    hours: 'Mon–Sat: 09:00 – 20:00 (Private Appointment Only)'
  },
  abuDhabiDesk: {
    title: 'Abu Dhabi Al Maryah Island Office',
    address: 'Al Sila Tower, Level 22, ADGM Square, Abu Dhabi, UAE',
    phone: '+971 2 694 7700',
    email: 'adgm@aureliaestates.ae'
  },
  whatsapp: '+971 50 882 1122',
  regulatory: [
    { title: 'RERA Master Developer License', ref: 'RERA-DEV-2026-8812' },
    { title: 'Dubai Land Department Escrow', ref: 'DLD-ESCROW-AURELIA' },
    { title: 'DIFC Registered Entity', ref: 'DIFC-CL-7704' },
    { title: 'ADGM Corporate Member', ref: 'ADGM-RE-9921' }
  ]
};

export const AURELIA_RESIDENCES_DATA: AureliaResidence[] = [
  {
    id: 'res-1',
    name: 'Aurelia Palm Waterfront Estate',
    location: 'Frond N, Palm Jumeirah, Dubai',
    district: 'Palm Jumeirah',
    type: 'Waterfront Villa',
    bedrooms: 6,
    bathrooms: 8,
    buaSqM: 2200,
    buaSqFt: 23680,
    plotSqM: 2800,
    plotSqFt: 30138,
    priceAed: 145000000,
    priceFormatted: 'AED 145,000,000',
    pool: '22m Zero-Edge Saltwater Infinity Pool + Heated Spa',
    elevator: 'Private Glass Panoramic Elevator (All 3 Floors)',
    garage: 'Subterranean 6-Car Climate Showroom with Turntable',
    status: 'Ready for Handover',
    reraPermit: 'RERA-PERMIT-6601-PALM',
    escrowAccount: 'Emirates NBD Escrow #9941-8820',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80'
    ],
    headlineFeature: '30m Private Powder-White Beachfront & Deep-Water Superyacht Pontoon',
    architecturalHighlights: [
      'Book-matched Italian Calacatta Borghini marble throughout double-height grand foyer',
      'Minimalist floor-to-ceiling Schuco motorized sliding glass with solar thermal insulation',
      'Custom Boffi show kitchen & separate commercial chef prep kitchen with Sub-Zero/Gaggenau',
      'Private master suite wing spanning 300 sqm with dual walk-in dressing rooms and sea terrace'
    ],
    floorPlanDetails: [
      {
        level: 'Basement Level (Subterranean Wellness)',
        description: 'Private 12-seat Dolby Atmos screening room, 500-bottle glass wine vault, Moroccan hammam spa, fitness suite, and 6-car showroom.',
        features: ['Cinema Room', 'Wine Vault', 'Hammam Spa', 'Staff Quarters (3 Suites)']
      },
      {
        level: 'Ground Floor (Grand Living & Grounds)',
        description: 'Double-height formal receiving salon, formal dining atelier for 18, show kitchen, study office, and infinity pool deck.',
        features: ['Double-Height Salon', 'Boffi Kitchen', 'Infinity Deck', 'Private Beach Access']
      },
      {
        level: 'First Floor (Private Suites)',
        description: 'Primary master sanctuary with panoramic sea terrace, his & hers marble baths, and 5 oversized guest staterooms.',
        features: ['Master Suite 300 sqm', '5 Guest Suites', 'Family Sky Lounge']
      },
      {
        level: 'Rooftop Terrace',
        description: 'Al-fresco cocktail bar, teppanyaki outdoor kitchen, firepit lounge, and uninterrupted sunset views over the Dubai Marina skyline.',
        features: ['Rooftop Sky Bar', 'Teppanyaki Grill', 'Firepit Lounge']
      }
    ]
  },
  {
    id: 'res-2',
    name: 'The Meridian Sky Penthouse',
    location: 'DIFC Gateway Tower, Dubai',
    district: 'DIFC',
    type: 'Signature Penthouse',
    bedrooms: 5,
    bathrooms: 6,
    buaSqM: 1450,
    buaSqFt: 15607,
    priceAed: 98000000,
    priceFormatted: 'AED 98,000,000',
    pool: 'Private Cantilevered Sky Infinity Pool (Level 62)',
    elevator: 'Private Biometric Express High-Speed Elevator',
    garage: '4 Dedicated VIP Basement Parking Bays',
    status: 'Off-Plan (Q4 2027)',
    reraPermit: 'RERA-PERMIT-4402-DIFC',
    escrowAccount: 'ADCB Escrow #7721-0041',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80'
    ],
    headlineFeature: '360° Unobstructed Sky Views of Burj Khalifa, Arabian Gulf & DIFC Gate',
    architecturalHighlights: [
      'Double-height 7.5m ceilings in main gallery with frameless curved architectural glass',
      'Cantilevered private pool extending 4 meters beyond the building envelope over DIFC',
      'Integrated Bang & Olufsen acoustic engineering with invisible wall transducer panels',
      'Direct private lift opening into personal art gallery foyer with reinforced load capacity'
    ],
    floorPlanDetails: [
      {
        level: 'Lower Penthouse Level 61',
        description: 'Grand reception hall, dual living salons, formal dining for 14, chef kitchen, and 4 luxury guest suites.',
        features: ['Grand Reception', '4 En-Suite Bedrooms', 'Chef Kitchen', 'Service Quarters']
      },
      {
        level: 'Upper Penthouse Level 62',
        description: 'Duplex master suite with private sky pool, outdoor meditation deck, sommelier lounge, and executive boardroom.',
        features: ['Master Sanctuary', 'Sky Pool', 'Boardroom', 'Sommelier Bar']
      }
    ]
  },
  {
    id: 'res-3',
    name: 'Saadiyat Pearl Compound',
    location: 'Saadiyat Cultural District, Abu Dhabi',
    district: 'Saadiyat Island',
    type: 'Private Compound',
    bedrooms: 8,
    bathrooms: 11,
    buaSqM: 3100,
    buaSqFt: 33368,
    plotSqM: 4500,
    plotSqFt: 48437,
    priceAed: 185000000,
    priceFormatted: 'AED 185,000,000',
    pool: '25m Olympic Lap Pool + Private Spa Pavilion',
    elevator: 'Dual Service & Passenger Hydraulic Elevators',
    garage: '10-Car Air-Conditioned Showroom Complex',
    status: 'Under Construction (Q2 2027)',
    reraPermit: 'AD-DMT-PERMIT-8801',
    escrowAccount: 'First Abu Dhabi Bank Escrow #1109-8832',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80'
    ],
    headlineFeature: 'Adjacent to Louvre Abu Dhabi & Guggenheim with Private Sculpture Gardens',
    architecturalHighlights: [
      'Sculptural neo-Arabic travertine arches framing natural coastal mangrove vistas',
      'Separate Royal Guest Majlis building with independent security gatehouse',
      'Museum-grade climate-controlled private art gallery hall with UV-filtered skylights',
      'Private beach access with nesting sea turtle conservation zone buffer'
    ],
    floorPlanDetails: [
      {
        level: 'Main Residence (Ground & First)',
        description: '6 expansive family suites, dual double-height salons, commercial and family kitchens, and study.',
        features: ['6 Family Suites', 'Dual Salons', 'Family Kitchen', 'Library']
      },
      {
        level: 'Royal Guest Majlis Complex',
        description: 'Independent 2-bedroom luxury villa for visiting dignitaries with formal reception majlis for 40.',
        features: ['2 Dignitary Suites', 'Formal Majlis', 'Private Guard House']
      },
      {
        level: 'Wellness & Spa Pavilion',
        description: 'Olympic lap pool, Finnish cedar sauna, cryogenic cold plunge, and treatment rooms.',
        features: ['Lap Pool', 'Spa Pavilion', 'Cold Plunge', 'Gym Suite']
      }
    ]
  },
  {
    id: 'res-4',
    name: 'Crown Heights Sovereign Villa',
    location: 'Sector E, Emirates Hills, Dubai',
    district: 'Emirates Hills',
    type: 'Golf Estate',
    bedrooms: 7,
    bathrooms: 10,
    buaSqM: 2600,
    buaSqFt: 27986,
    plotSqM: 3200,
    plotSqFt: 34444,
    priceAed: 160000000,
    priceFormatted: 'AED 160,000,000',
    pool: 'Sunken Firepit Lagoon Pool + Cascading Waterfall',
    elevator: 'Custom Polished Bronze Elevator',
    garage: '8-Car Subterranean Showroom with Glass Ceiling View',
    status: 'Ready for Handover',
    reraPermit: 'RERA-PERMIT-5509-EH',
    escrowAccount: 'Mashreq Private Bank Escrow #4412-9901',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80'
    ],
    headlineFeature: 'Frontline Unobstructed Montgomerie Championship Golf Course Views',
    architecturalHighlights: [
      'Imported Portuguese Moleanos limestone facade with bronze laser-cut geometric screens',
      'Custom Poliform master dressing rooms with integrated Italian leather jewelry vaults',
      'Subterranean hypercar lounge viewable through a reinforced glass floor in the formal salon',
      'KNX full home automation controlling climate, security, acoustic zones, and motorized louvers'
    ],
    floorPlanDetails: [
      {
        level: 'Basement Entertainment Hub',
        description: '8-car gallery garage, private bowling alley, cigar lounge with negative air pressure, and cinema.',
        features: ['8-Car Garage', 'Cigar Lounge', 'Private Cinema', 'Wine Cellar']
      },
      {
        level: 'Ground Floor Grand Living',
        description: 'Triple-height entry atrium, formal receiving rooms, dining salon, and golf course terrace.',
        features: ['Triple-Height Foyer', 'Golf Terrace', 'Show Kitchen', 'Staff Quarters']
      },
      {
        level: 'First Floor Sanctuary',
        description: 'Master suite with private golf-view terrace and 6 ensuite bedroom suites with marble baths.',
        features: ['Master Wing', '6 Bedroom Suites', 'Family Pantry']
      }
    ]
  },
  {
    id: 'res-5',
    name: 'Azure Bay Branded Residence',
    location: 'Jumeirah Bay Island, Dubai',
    district: 'Jumeirah Bay Island',
    type: 'Branded Residence',
    bedrooms: 5,
    bathrooms: 7,
    buaSqM: 1800,
    buaSqFt: 19375,
    plotSqM: 2100,
    plotSqFt: 22604,
    priceAed: 125000000,
    priceFormatted: 'AED 125,000,000',
    pool: 'Overwater Infinity Deck with Glass Bottom Section',
    elevator: 'High-Speed Cylindrical Glass Elevator',
    garage: '5-Car Ground-Level Air-Conditioned Garage',
    status: 'Off-Plan (Q1 2028)',
    reraPermit: 'RERA-PERMIT-7711-JB',
    escrowAccount: 'Dubai Islamic Bank Escrow #8820-1124',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80'
    ],
    headlineFeature: 'Private Marina Mooring Berth for a 100ft Superyacht on Seahorse Island',
    architecturalHighlights: [
      'Designed in collaboration with Milanese couture interior architects',
      'Direct private marina berth adjacent to Bulgari Yacht Club',
      'Floor-to-ceiling Rimadesio glass sliding partitions and bespoke millwork',
      'Zero-threshold indoor-to-outdoor seamless travertine transitions'
    ],
    floorPlanDetails: [
      {
        level: 'Ground Level & Marina Berth',
        description: 'Open-concept waterfront living, formal dining, chef kitchen, and private yacht pontoon.',
        features: ['Marina Dock', 'Infinity Deck', 'Show Kitchen', 'VIP Guest Suite']
      },
      {
        level: 'Upper Floor & Sky Lounge',
        description: 'Primary master stateroom suite with panoramic sea views and 4 guest suites.',
        features: ['Master Stateroom', '4 Suites', 'Sky Lounge']
      }
    ]
  },
  {
    id: 'res-6',
    name: 'The Atelier Sanctuary House',
    location: 'Dubai Hills Parkway, Dubai',
    district: 'Dubai Hills',
    type: 'Waterfront Villa',
    bedrooms: 6,
    bathrooms: 8,
    buaSqM: 1950,
    buaSqFt: 20989,
    plotSqM: 2400,
    plotSqFt: 25833,
    priceAed: 110000000,
    priceFormatted: 'AED 110,000,000',
    pool: '18m Heated Lap Pool & Sunken Firepit Lounge',
    elevator: 'Private Internal Elevator',
    garage: '8-Car Subterranean Showroom Garage',
    status: 'Ready for Handover',
    reraPermit: 'RERA-PERMIT-3301-DH',
    escrowAccount: 'FAB Escrow #9910-4401',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80'
    ],
    headlineFeature: 'Parkland Sanctuary with Direct Access to Dubai Hills Golf Club',
    architecturalHighlights: [
      'Monolithic off-form concrete architecture balanced with warm smoked oak paneling',
      'Dual courtyards creating natural cross-ventilation and internal botanical gardens',
      'Professional Technogym wellness sanctuary with hydrotherapy shower and cryo chamber'
    ],
    floorPlanDetails: [
      {
        level: 'Basement Wellness & Garage',
        description: '8-car garage, wellness gym, cinema, wine cellar, and staff quarters.',
        features: ['8-Car Garage', 'Gym', 'Cinema', 'Wine Cellar']
      },
      {
        level: 'Ground & First Floors',
        description: 'Expansive entertaining living rooms, internal garden courtyard, and 6 bedroom suites.',
        features: ['Courtyard', '6 Suites', 'Formal Living', 'Kitchen']
      }
    ]
  },
  {
    id: 'res-7',
    name: 'Horizon Waterfront Mansion',
    location: 'Al Gurm, Abu Dhabi',
    district: 'Al Gurm',
    type: 'Private Compound',
    bedrooms: 7,
    bathrooms: 9,
    buaSqM: 2450,
    buaSqFt: 26371,
    plotSqM: 3800,
    plotSqFt: 40902,
    priceAed: 138000000,
    priceFormatted: 'AED 138,000,000',
    pool: 'Lagoon Swimming Pool with Natural Rock Waterfalls',
    elevator: 'Dual Elevators',
    garage: '6-Car Covered Garage',
    status: 'Ready for Handover',
    reraPermit: 'AD-DMT-PERMIT-4409',
    escrowAccount: 'ADIB Escrow #5541-0021',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80'
    ],
    headlineFeature: 'Protected Coastal Mangrove Reserve Sanctuary with Private Boat Dock',
    architecturalHighlights: [
      'Built over tranquil tidal lagoons with private water deck walkways',
      'Spectacular views of Abu Dhabi capital skyline across the mangrove conservation park'
    ],
    floorPlanDetails: [
      {
        level: 'Compound Grounds & Villa',
        description: 'Main mansion, guest house pavilion, boat slipway, and private wellness spa.',
        features: ['Main Mansion', 'Guest Pavilion', 'Boat Slipway', 'Spa']
      }
    ]
  },
  {
    id: 'res-8',
    name: 'Celeste Ocean Penthouse',
    location: 'Palm West Beach, Dubai',
    district: 'Palm Jumeirah',
    type: 'Signature Penthouse',
    bedrooms: 4,
    bathrooms: 5,
    buaSqM: 1100,
    buaSqFt: 11840,
    priceAed: 82000000,
    priceFormatted: 'AED 82,000,000',
    pool: 'Rooftop Glass Infinity Pool Overlooking Dubai Marina',
    elevator: 'Direct Keycard Biometric Lift',
    garage: '3 Dedicated Underground Bays',
    status: 'Off-Plan (Q3 2027)',
    reraPermit: 'RERA-PERMIT-1120-PWB',
    escrowAccount: 'CBD Escrow #3301-7788',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80'
    ],
    headlineFeature: 'Unrivaled Front-Row Sunset Sea Views & Private Building Helipad Access',
    architecturalHighlights: [
      'Custom Italian marble island kitchen and frameless sky balconies',
      'Full smart home integration with one-touch shading and lighting'
    ],
    floorPlanDetails: [
      {
        level: 'Penthouse Main & Terrace',
        description: '4 oversized bedroom suites, open living atelier, and wrap-around terrace pool.',
        features: ['4 Suites', 'Wrap-around Terrace', 'Sky Pool']
      }
    ]
  },
  {
    id: 'res-9',
    name: 'The Grand Courtyard Villa',
    location: 'Al Barari, Dubai',
    district: 'Al Barari',
    type: 'Eco Luxury Estate',
    bedrooms: 6,
    bathrooms: 8,
    buaSqM: 2100,
    buaSqFt: 22604,
    plotSqM: 3000,
    plotSqFt: 32291,
    priceAed: 105000000,
    priceFormatted: 'AED 105,000,000',
    pool: 'Courtyard Bio-Pool & Natural Cold Stream',
    elevator: 'Private Elevator',
    garage: '6-Car Basement Garage',
    status: 'Ready for Handover',
    reraPermit: 'RERA-PERMIT-9902-AB',
    escrowAccount: 'Emirates Islamic Escrow #6610-3321',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1000&q=80'
    ],
    headlineFeature: 'Botanical Glasshouse Conservatory & Private Organic Garden Estate',
    architecturalHighlights: [
      'Lush tropical landscaping with mature olive trees and streams',
      'Triple-glazed energy-efficient architecture with geothermal ground cooling'
    ],
    floorPlanDetails: [
      {
        level: 'Estate Main Levels',
        description: '6 suites, glass conservatory, bio-pool, and wellness pavilion.',
        features: ['6 Suites', 'Conservatory', 'Bio-Pool']
      }
    ]
  },
  {
    id: 'res-10',
    name: 'Aurelia Signature Royal Compound',
    location: 'Nad Al Sheba, Dubai',
    district: 'Nad Al Sheba',
    type: 'Private Compound',
    bedrooms: 10,
    bathrooms: 14,
    buaSqM: 4200,
    buaSqFt: 45208,
    plotSqM: 6000,
    plotSqFt: 64583,
    priceAed: 250000000,
    priceFormatted: 'AED 250,000,000',
    pool: '2x Resort-Sized Outdoor Pools + Indoor Spa Pavilion',
    elevator: '3x Hydraulic Passenger & Service Elevators',
    garage: '12-Car Subterranean Hypercar Showroom',
    status: 'Under Construction (Q4 2027)',
    reraPermit: 'RERA-PERMIT-0012-NAS',
    escrowAccount: 'Emirates NBD Escrow #1144-7790',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80'
    ],
    headlineFeature: 'Independent Royal Guest Majlis & Dedicated Armed Security Gatehouse Complex',
    architecturalHighlights: [
      'Monumental private palace compound engineered for royal families and state delegations',
      'Full ballistic protection rating, safe rooms, and subterranean command bunker'
    ],
    floorPlanDetails: [
      {
        level: 'Royal Compound Masterplan',
        description: 'Main palace villa, royal guest pavilion, sports club, and 12-car garage.',
        features: ['10 Palace Suites', 'Royal Majlis', '12-Car Showroom', 'Armed Security Gate']
      }
    ]
  },
  {
    id: 'res-11',
    name: 'Yas Bay Horizon Residence',
    location: 'Yas Island, Abu Dhabi',
    district: 'Yas Island',
    type: 'Waterfront Villa',
    bedrooms: 5,
    bathrooms: 7,
    buaSqM: 1650,
    buaSqFt: 17760,
    plotSqM: 2000,
    plotSqFt: 21527,
    priceAed: 92000000,
    priceFormatted: 'AED 92,000,000',
    pool: 'Infinity Deck Pool with Marina Canal Views',
    elevator: 'Private Glass Elevator',
    garage: '4-Car Garage',
    status: 'Ready for Handover',
    reraPermit: 'AD-DMT-PERMIT-3312',
    escrowAccount: 'FAB Escrow #8841-2299',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80'
    ],
    headlineFeature: 'Direct Yas Promenade Access & Private 80ft Yacht Berth',
    architecturalHighlights: [
      'Prime waterfront setting overlooking Yas Bay Marina and Etihad Arena'
    ],
    floorPlanDetails: [
      {
        level: 'Waterfront Villa Levels',
        description: '5 suites, private pool deck, yacht dock, and staff quarters.',
        features: ['5 Suites', 'Yacht Berth', 'Infinity Pool']
      }
    ]
  },
  {
    id: 'res-12',
    name: 'The Sovereign Hill Estate',
    location: 'Hills Grove, Dubai Hills, Dubai',
    district: 'Dubai Hills',
    type: 'Golf Estate',
    bedrooms: 7,
    bathrooms: 10,
    buaSqM: 2750,
    buaSqFt: 29600,
    plotSqM: 3500,
    plotSqFt: 37673,
    priceAed: 175000000,
    priceFormatted: 'AED 175,000,000',
    pool: '25m Lap Infinity Pool with Glass Overflow Channel',
    elevator: 'Custom Bronze Elevator',
    garage: '8-Car Subterranean Showroom',
    status: 'Off-Plan (Q2 2028)',
    reraPermit: 'RERA-PERMIT-4490-HG',
    escrowAccount: 'Mashreq Escrow #7733-1100',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80'
    ],
    headlineFeature: 'Private Screening Room, 600-Bottle Sommelier Vault & Thermal Wellness Spa',
    architecturalHighlights: [
      'Panoramic skyline view of Burj Khalifa across the lush green fairway'
    ],
    floorPlanDetails: [
      {
        level: 'Mansion Levels (Basement, Ground, First, Roof)',
        description: '7 staterooms, bowling alley, screening cinema, and private rooftop sky bar.',
        features: ['7 Suites', 'Cinema', 'Bowling Alley', 'Sky Bar']
      }
    ]
  }
];

export const AURELIA_SERVICES_DATA: AureliaService[] = [
  { id: 'serv-1', title: 'Private Residence Acquisition', category: 'Acquisition', description: 'Turnkey representation for acquiring ultra-prime off-market UAE estates.', metrics: 'AED 3.2B+ Transacted • 100% Confidential' },
  { id: 'serv-2', title: 'Off-Market Property Advisory', category: 'Advisory & Legal', description: 'Discreet access to confidential royal compounds and unlisted waterfront villas.', metrics: 'Exclusive Off-Market Directory' },
  { id: 'serv-3', title: 'Bespoke Mansion Development', category: 'Development', description: 'End-to-end architectural engineering and turnkey construction of custom mansions.', metrics: 'BUA 15,000 – 50,000 sq ft' },
  { id: 'serv-4', title: 'Branded Residence Structuring', category: 'Development', description: 'Structuring ultra-luxury branded residential developments with international fashion houses.', metrics: 'Global Luxury Brand Partnerships' },
  { id: 'serv-5', title: 'Prime Waterfront Plot Acquisition', category: 'Acquisition', description: 'Identifying rare waterfront plots on Palm Jumeirah, Jumeirah Bay, and Saadiyat.', metrics: '100% Freehold Title Deeds' },
  { id: 'serv-6', title: 'Architectural Master Planning', category: 'Architecture', description: 'Masterplanning residential compounds with Scandinavian and neo-Arabic principles.', metrics: 'Award-Winning Design Bureau' },
  { id: 'serv-7', title: 'Interior Architecture & Millwork', category: 'Interiors', description: 'Bespoke Italian marble installation, custom millwork, and lighting design.', metrics: 'Minotti & Poliform Specifications' },
  { id: 'serv-8', title: 'Landscape & Infinity Pool Engineering', category: 'Architecture', description: 'Designing resort-grade outdoor grounds, sunken firepits, and zero-edge pools.', metrics: 'Saltwater & Bio-Pool Systems' },
  { id: 'serv-9', title: 'KNX Smart Home & Audio Integration', category: 'Engineering', description: 'Automated lighting scenes, biometric access control, and invisible drywall audio.', metrics: 'Enterprise-Grade Telemetry' },
  { id: 'serv-10', title: 'Subterranean Showroom Garage Design', category: 'Engineering', description: 'Climate-controlled multi-car elevators and subterranean hypercar showrooms.', metrics: '6 to 12 Hypercar Capacity' },
  { id: 'serv-11', title: 'Private Security & Safe Room Planning', category: 'Security & Wellness', description: 'Ballistic glass installation, panic rooms, and 24/7 perimeter telemetry.', metrics: 'Sovereign-Grade Protection' },
  { id: 'serv-12', title: 'Moroccan Hammam & Private Spas', category: 'Security & Wellness', description: 'Custom thermal stone steam rooms, ice plunge pools, and treatment pavilions.', metrics: 'Hydrotherapy & Cryotherapy' },
  { id: 'serv-13', title: 'Climate-Controlled Wine Vaults', category: 'Interiors', description: 'Sommelier-grade glass-walled wine vaults with humidity and temperature lock.', metrics: '400 – 1,200 Bottle Capacity' },
  { id: 'serv-14', title: 'Private Dolby Atmos Screening Rooms', category: 'Engineering', description: 'Acoustically isolated 4K laser projection private cinemas.', metrics: '12 – 24 Reclining Leather Seats' },
  { id: 'serv-15', title: 'Royal Majlis Architectural Design', category: 'Architecture', description: 'Contemporary royal receiving halls blending traditional hospitality with modern luxury.', metrics: 'Dignitary Protocol Ready' },
  { id: 'serv-16', title: 'Turnkey Luxury Furnishing Atelier', category: 'Interiors', description: 'Curating custom furniture packages from Minotti, Poliform, and B&B Italia.', metrics: 'Complete White-Glove Staging' },
  { id: 'serv-17', title: 'Fine Art Collection Advisory', category: 'Interiors', description: 'Integrating museum-grade contemporary art into residential interiors.', metrics: 'Curated Sculpture & Canvases' },
  { id: 'serv-18', title: 'Private Financing & Escrow Coordination', category: 'Advisory & Legal', description: 'Navigating UAE banking, escrow accounts, and private wealth financing structures.', metrics: 'DLD Escrow Compliance' },
  { id: 'serv-19', title: '10-Year UAE Golden Visa Advisory', category: 'Advisory & Legal', description: 'Assisting UHNW global clients with 10-Year UAE Golden Visa property registration.', metrics: '100% Approval Rate' },
  { id: 'serv-20', title: '24/7 Sovereign Estate Management', category: 'Development', description: 'Dedicated estate managers providing ongoing maintenance, cleaning, and concierge.', metrics: 'Full Turnkey Aftercare' }
];

export const MATERIAL_PALETTE: MaterialFinish[] = [
  {
    id: 'mat-1',
    name: 'Calacatta Borghini Book-Matched Marble',
    origin: 'Carrara, Tuscany, Italy',
    category: 'Marble & Stone',
    description: 'Extraordinary pure white crystalline marble with dramatic golden and pewter veining, book-matched seamlessly across 7-meter high gallery walls.',
    applications: ['Double-Height Grand Foyers', 'Master En-Suite Baths', 'Waterfall Show Kitchen Islands'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mat-2',
    name: 'Travertino Navona Vein-Cut Stone',
    origin: 'Tivoli, Italy',
    category: 'Marble & Stone',
    description: 'Warm, porous architectural travertine with linear vein striations providing thermal cooling and timeless tactile elegance.',
    applications: ['Exterior Facade Cladding', 'Pool Decks', 'Sculptural Archways'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mat-3',
    name: 'Anodized Bronze Mashrabiya Screens',
    origin: 'Bespoke UAE / German Engineering',
    category: 'Metals & Glass',
    description: 'Precision laser-perforated architectural bronze panels delivering filtered solar shading, complete privacy, and dynamic geometric shadow play.',
    applications: ['External Shading Facades', 'Private Majlis Partitions', 'Balcony Balustrades'],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mat-4',
    name: 'Smoked Rovere Oak Architectural Millwork',
    origin: 'Brianza, Italy (Poliform & Rimadesio)',
    category: 'Timber & Millwork',
    description: 'Deep smoked Italian oak veneer with hand-rubbed wax finish and integrated bronze recessed LED reveals.',
    applications: ['Walk-in Dressing Suites', 'Sommelier Wine Vaults', 'Private Executive Studies'],
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80'
  }
];

export const PRIME_DISTRICTS_DATA: PrimeDistrict[] = [
  {
    id: 'dist-palm',
    name: 'Palm Jumeirah Waterfront Fronds',
    emirate: 'Dubai',
    vibe: 'Ultra-Prime Waterfront Living with Private Beachfronts',
    averagePsfAed: 6500,
    highlights: ['Private Beachfront Access', 'Deep-Water Superyacht Berthing', '24/7 Gated Security'],
    coordinates: '25.1124° N, 55.1390° E'
  },
  {
    id: 'dist-jumeirah-bay',
    name: 'Jumeirah Bay Island (Bulgari Island)',
    emirate: 'Dubai',
    vibe: 'Bespoke Billionaires Island with Private Marina',
    averagePsfAed: 11000,
    highlights: ['Bulgari Yacht Club Access', 'Ultra-Low Density Mansions', 'Exclusive Private Causeway'],
    coordinates: '25.2120° N, 55.2410° E'
  },
  {
    id: 'dist-emirates-hills',
    name: 'Emirates Hills Golf Enclave',
    emirate: 'Dubai',
    vibe: 'Gated Luxury Green Living Overlooking Montgomerie Golf',
    averagePsfAed: 5800,
    highlights: ['18-Hole Championship Golf Views', 'Large Acreage Plots', 'Discreet Gated Community'],
    coordinates: '25.0680° N, 55.1680° E'
  },
  {
    id: 'dist-saadiyat',
    name: 'Saadiyat Cultural District & Beach',
    emirate: 'Abu Dhabi',
    vibe: 'World-Class Museum Enclave & Turquoise Marine Sanctuary',
    averagePsfAed: 5200,
    highlights: ['Louvre & Guggenheim Proximity', 'Pristine Protected Beach', 'Turtle Sanctuary'],
    coordinates: '24.5338° N, 54.3982° E'
  }
];

export const FAQ_AURELIA = [
  {
    question: 'Are Aurelia Estates properties eligible for 100% Freehold Foreign Ownership?',
    answer: 'Yes. All Aurelia Estates developments in Dubai (Palm Jumeirah, Emirates Hills, Jumeirah Bay, Dubai Hills, Al Barari, Nad Al Sheba, DIFC) and Abu Dhabi (Saadiyat Island, Yas Island) are located in designated 100% Freehold investment zones. International buyers receive unconditional title deeds registered directly with the Dubai Land Department (DLD) or Abu Dhabi Department of Municipalities and Transport (DMT).'
  },
  {
    question: 'How are client funds safeguarded during construction?',
    answer: 'In strict compliance with RERA and UAE Central Bank regulations, 100% of off-plan buyer payments are deposited into government-regulated project Escrow accounts (held at Emirates NBD, First Abu Dhabi Bank, and ADCB). Funds are disbursed to the developer only upon certified technical audit milestones verified by independent DLD engineers.'
  },
  {
    question: 'Does buying an Aurelia residence qualify for the 10-Year UAE Golden Visa?',
    answer: 'Yes. All our residences significantly exceed the AED 2,000,000 minimum threshold for the 10-Year UAE Golden Visa. Our in-house legal team coordinates expedited VIP residency processing for the primary buyer, spouse, children, and domestic staff with zero government queue times.'
  },
  {
    question: 'Can we commission a bespoke custom villa build on a private plot?',
    answer: 'Absolutely. Aurelia Estates operates a bespoke development division where our Italian and Scandinavian architects work with clients to design, engineer, and construct custom mansions from 15,000 to 50,000 sq ft on your plot, or source an off-market beachfront/golf plot on your behalf.'
  },
  {
    question: 'What warranties and aftercare are provided upon handover?',
    answer: 'Every Aurelia Estate residence includes a comprehensive 10-Year Structural Defect Warranty, a 1-Year Full MEP & Cosmetic Defects Liability Warranty, and 12 months of complimentary 24/7 dedicated estate management.'
  }
];
