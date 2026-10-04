export interface YachtVessel {
  id: string;
  name: string;
  tagline: string;
  builder: string;
  yearBuilt: number;
  refitYear?: number;
  lengthFeet: number;
  lengthMeters: number;
  beamMeters: number;
  draftMeters: number;
  grossTonnage: number;
  guestsSleep: number;
  guestsCruising: number;
  cabins: number;
  cabinConfig: string;
  crew: number;
  captain: string;
  cruisingSpeedKnots: number;
  maxSpeedKnots: number;
  rangeNm: number;
  hourlyRateAed: number;
  dailyRateAed: number;
  weeklyRateAed: number;
  apaRatePercentage: number;
  vatPercentage: number;
  homePort: string;
  berthLocation: string;
  helipad: boolean;
  helipadRating?: string;
  jacuzzi: boolean;
  beachClub: boolean;
  stabilizers: string;
  images: {
    hero: string;
    salon: string;
    masterCabin: string;
    sunDeck: string;
    beachClub: string;
  };
  description: string;
  deckPlans: {
    deckName: string;
    features: string[];
  }[];
  toys: string[];
  amenities: string[];
}

export interface MarineItinerary {
  id: string;
  title: string;
  duration: string;
  region: string;
  startPort: string;
  endPort: string;
  nauticalMiles: number;
  bestSeason: string;
  heroImage: string;
  summary: string;
  days: {
    dayNumber: number;
    title: string;
    coordinates: string;
    cruisingHours: string;
    highlights: string[];
    anchorage: string;
    diningExperience: string;
  }[];
}

export interface MarineService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  metrics: string;
  features: string[];
}

export const NERO_BRAND = {
  name: 'NERO MARINE',
  legalName: 'NERO MARINE LUXURY YACHTS LLC',
  tagline: 'Sovereign Marine & Superyacht Luxury',
  dubaiMarinaHQ: {
    title: 'Dubai Harbour Superyacht Basin',
    address: 'Berths A-12 to A-18, Dubai Harbour Marina, Dubai, UAE',
    phone: '+971 4 399 7700',
    tollFree: '800-NERO (800-6376)',
    email: 'charter@neromarine.ae',
    coordinates: '25.0924° N, 55.1438° E',
    vhfChannel: 'VHF Ch 68 / 16'
  },
  abuDhabiMarina: {
    title: 'Abu Dhabi Yas Marina Desk',
    address: 'Yas Marina Gate 3, Suite 12, Yas Island, Abu Dhabi, UAE',
    phone: '+971 2 677 3344',
    email: 'yas@neromarine.ae',
    coordinates: '24.4697° N, 54.6048° E',
    vhfChannel: 'VHF Ch 72 / 16'
  },
  bulgariDesk: {
    title: 'Bulgari Yacht Club Concierge',
    address: 'Jumeira Bay Island, Dubai, UAE',
    phone: '+971 4 777 5500',
    email: 'vip@neromarine.ae'
  },
  whatsapp: '+971 50 882 1122',
  licenses: [
    { title: 'DMCA Commercial Yacht License', ref: 'DMCA-CY-2026-9041' },
    { title: 'MYBA Corporate Member', ref: 'MYBA-CORP-#80912' },
    { title: 'UAE FTA Maritime Classification', ref: 'FTA-UAE-MAR-8820' },
    { title: 'Lloyds Register Superyacht Survey', ref: 'LR-SOV-2026' }
  ]
};

export const YACHT_FLEET_DATA: YachtVessel[] = [
  {
    id: 'nero-sovereign',
    name: 'M/Y NERO SOVEREIGN',
    tagline: '56m Custom Benetti Sovereign Mega-Yacht',
    builder: 'Benetti Custom Italy',
    yearBuilt: 2023,
    refitYear: 2025,
    lengthFeet: 185,
    lengthMeters: 56.4,
    beamMeters: 10.2,
    draftMeters: 2.8,
    grossTonnage: 890,
    guestsSleep: 12,
    guestsCruising: 35,
    cabins: 6,
    cabinConfig: '1 Duplex Master, 1 VIP Bridge Deck, 2 Doubles, 2 Convertibles',
    crew: 16,
    captain: 'Capt. Jonathan Vance (Master 3000 GT Unlimited)',
    cruisingSpeedKnots: 15,
    maxSpeedKnots: 18,
    rangeNm: 4500,
    hourlyRateAed: 45000,
    dailyRateAed: 110000,
    weeklyRateAed: 520000,
    apaRatePercentage: 30,
    vatPercentage: 5,
    homePort: 'Dubai Harbour Marina',
    berthLocation: 'Berth A-14 (Mega-Yacht Quay)',
    helipad: true,
    helipadRating: 'Touch-and-Go (EC135 / Bell 429 Certified)',
    jacuzzi: true,
    beachClub: true,
    stabilizers: 'Zero-Speed Gyro Stabilizers (CMC Marine)',
    images: {
      hero: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1200&q=85',
      salon: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      masterCabin: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
      sunDeck: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
      beachClub: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80'
    },
    description: 'The pinnacle of bespoke Mediterranean and Arabian Gulf charter. Engineered with an expansive multi-tier beach club, 8-person heated glass Jacuzzi on the sun deck, custom wine cellar holding 400 vintages, and a certified touch-and-go helipad for seamless VIP arrivals.',
    deckPlans: [
      {
        deckName: 'Sun Deck',
        features: ['8-Person Glass Jacuzzi', 'Touch-and-Go Helipad', 'Sunbathing Daybeds', 'Teak Wet Bar & Teppanyaki Grill', 'Outdoor Cinema with Dropdown 4K Screen']
      },
      {
        deckName: 'Bridge Deck',
        features: ['VIP Sky Lounge with Steinway Piano', 'Al-Fresco Dining for 16 Guests', 'Captain Navigation Bridge', 'Private Owner Terrace']
      },
      {
        deckName: 'Main Deck',
        features: ['Full-Beam Duplex Master Suite with Private Balcony', 'Main Salon & Formal Dining Atelier', 'Commercial Galley for 3-Star Chefs', 'Aft Cocktail Lounge']
      },
      {
        deckName: 'Lower Beach Club',
        features: ['Hydraulic Teak Swim Platform', 'Hamam Spa & Sauna', 'Water Toy Garage & Dive Center', '5 Guest Staterooms']
      }
    ],
    toys: [
      '2x Williams Dieseljet 625 Tenders (260 HP)',
      '3x Yamaha FX SVHO High-Output Waverunners',
      '2x Seabob F5S Underwater Propulsion Units',
      '2x Fliteboard PRO Electric Hydrofoils (eFoils)',
      '1x Inflatable Custom Yacht Water Slide (9m drop)',
      '4x Stand-Up Paddleboards & Inflatable Kayaks',
      'Full Mares Scuba Diving Locker (6 Sets) & Bauer Compressor',
      'Shimano Tiagra Deep-Sea Big Game Trolling Gear'
    ],
    amenities: [
      'Starlink Maritime Ultra-High-Speed Satellite Internet (350 Mbps)',
      'Bang & Olufsen Custom Marine Audio System across all decks',
      'Dedicated Onboard Michelin-Trained Executive Chef & Sous Chef',
      'Head Sommelier & 2 Silver-Service Chief Stewardesses',
      'Professional PADI Master Scuba Diver Trainer onboard',
      'Zero-Speed Gyroscopic & Fin Stabilization at anchor'
    ]
  },
  {
    id: 'majesty-regalia',
    name: 'M/Y MAJESTY REGALIA',
    tagline: '73m Gulf Craft Flagship Tri-Deck Mega-Yacht',
    builder: 'Majesty Yachts / Gulf Craft UAE',
    yearBuilt: 2024,
    lengthFeet: 240,
    lengthMeters: 73.2,
    beamMeters: 12.5,
    draftMeters: 3.4,
    grossTonnage: 1450,
    guestsSleep: 14,
    guestsCruising: 50,
    cabins: 7,
    cabinConfig: '1 Royal Master Suite, 2 VIP Staterooms, 4 Guest Suites',
    crew: 22,
    captain: 'Capt. Marcus Sterling (Master 3000 GT)',
    cruisingSpeedKnots: 14,
    maxSpeedKnots: 17,
    rangeNm: 5500,
    hourlyRateAed: 60000,
    dailyRateAed: 145000,
    weeklyRateAed: 690000,
    apaRatePercentage: 35,
    vatPercentage: 5,
    homePort: 'Dubai Harbour Marina',
    berthLocation: 'Berth A-12 (Flagship Quay)',
    helipad: true,
    helipadRating: 'Fully Certified D-Value 13 Helideck (Airbus H145 / AW109)',
    jacuzzi: true,
    beachClub: true,
    stabilizers: 'Quantum Zero-Speed Marine Stabilizers',
    images: {
      hero: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85',
      salon: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
      masterCabin: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
      sunDeck: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1000&q=80',
      beachClub: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80'
    },
    description: 'An architectural marvel built in the United Arab Emirates for royal delegations, international state visits, and ultra-high-net-worth island cruising. Boasts a 12-meter glass-bottom infinity pool, dedicated wellness salon, and certified commercial helideck.',
    deckPlans: [
      {
        deckName: 'Top Sun Deck',
        features: ['12m Glass-Bottom Infinity Pool', 'Fully Equipped Technogym Fitness Suite', 'Helideck Viewing Lounge']
      },
      {
        deckName: 'Bridge Deck',
        features: ['Royal Majlis & Sky Lounge', 'Private Helideck with Direct Elevator Access', 'Captain Bridge Suite']
      },
      {
        deckName: 'Main Deck',
        features: ['200 sqm Royal Master Suite with Private Jacuzzi', 'Formal Banquet Hall for 20', 'Grand Foyer with Glass Elevator']
      },
      {
        deckName: 'Lower Beach Club',
        features: ['Tri-Fold Hydraulic Balconies', 'Finnish Sauna & Cold Plunge', 'Custom Tender Garage with 2 Limo Tenders']
      }
    ],
    toys: [
      '2x Castoldi 25 Limousine Tenders',
      '4x Sea-Doo RXT-X 300 Jet Skis',
      '4x Seabob F5SR High-Performance Drones',
      '2x Awake Rävik S Electric Jet Surfboards',
      '1x SeaPool Anti-Jellyfish Ocean Enclosure (8x5m)',
      'Snorkeling Gear for 20 Guests'
    ],
    amenities: [
      'Commercial Certified Helideck for night operations',
      'Glass elevator serving all 4 passenger decks',
      'Cryotherapy chamber and massage treatment room',
      'Private cinema with 16 reclining leather seats',
      'Comprehensive hospital-grade medical station with AED & Oxygen'
    ]
  },
  {
    id: 'aura-horizon',
    name: 'M/Y AURA HORIZON',
    tagline: '46m Custom Line Italian Tri-Deck Superyacht',
    builder: 'Ferretti Group Custom Line',
    yearBuilt: 2023,
    lengthFeet: 150,
    lengthMeters: 45.7,
    beamMeters: 8.8,
    draftMeters: 2.3,
    grossTonnage: 499,
    guestsSleep: 10,
    guestsCruising: 25,
    cabins: 5,
    cabinConfig: '1 Master Suite, 2 VIP Doubles, 2 Twin Cabins with Pullmans',
    crew: 11,
    captain: 'Capt. Andrea Rossi (MCA Master 500 GT)',
    cruisingSpeedKnots: 16,
    maxSpeedKnots: 21,
    rangeNm: 3800,
    hourlyRateAed: 32000,
    dailyRateAed: 82000,
    weeklyRateAed: 385000,
    apaRatePercentage: 30,
    vatPercentage: 5,
    homePort: 'Abu Dhabi Yas Marina',
    berthLocation: 'Gate 3 Berth B-08',
    helipad: false,
    jacuzzi: true,
    beachClub: true,
    stabilizers: 'Side-Power Vector Fin Stabilizers',
    images: {
      hero: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=85',
      salon: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
      masterCabin: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80',
      sunDeck: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
      beachClub: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1000&q=80'
    },
    description: 'Award-winning Italian luxury with fluid exterior lines by Francesco Paszkowski. Floor-to-ceiling panoramic salon windows, oversized sun deck with cascading waterfall Jacuzzi, and extended hydraulic swim platform.',
    deckPlans: [
      {
        deckName: 'Sun Deck',
        features: ['Cascading Waterfall Jacuzzi', 'Wet Bar & Teak Barstools', 'Shaded Dining Area']
      },
      {
        deckName: 'Upper Sky Lounge',
        features: ['Media Room with 85-inch OLED', 'Aft Al-Fresco Cocktail Terrace']
      },
      {
        deckName: 'Main Deck',
        features: ['Main Salon with Minotti Furnishings', 'Forward Master Suite with His & Hers En-Suites']
      },
      {
        deckName: 'Lower Beach Deck',
        features: ['Full Beach Club with Lounge', '4 Guest Cabins with Marble Baths']
      }
    ],
    toys: [
      '1x Castoldi 21 Jet Tender (180 HP)',
      '2x Sea-Doo Spark Trixx Jet Skis',
      '2x Seabob F5S Units',
      '2x Stand-Up Paddleboards',
      'Inflatable Donut & Water Skis'
    ],
    amenities: [
      'Dual gyroscopic stabilizers for zero roll in anchorage',
      'Submersible swim platform for effortless ocean bathing',
      'Chef-curated Mediterranean farm-to-table dining'
    ]
  },
  {
    id: 'oceanic-pearl',
    name: 'M/Y OCEANIC PEARL',
    tagline: '37m Sanlorenzo SD118 Semi-Displacement Yacht',
    builder: 'Sanlorenzo Italy',
    yearBuilt: 2022,
    refitYear: 2024,
    lengthFeet: 120,
    lengthMeters: 36.5,
    beamMeters: 7.9,
    draftMeters: 2.1,
    grossTonnage: 290,
    guestsSleep: 8,
    guestsCruising: 20,
    cabins: 4,
    cabinConfig: '1 Master Suite, 1 VIP Stateroom, 2 Twin Cabins',
    crew: 7,
    captain: 'Capt. Tariq Mansoor (MCA Master 200 GT)',
    cruisingSpeedKnots: 14,
    maxSpeedKnots: 19,
    rangeNm: 2500,
    hourlyRateAed: 22000,
    dailyRateAed: 58000,
    weeklyRateAed: 275000,
    apaRatePercentage: 30,
    vatPercentage: 5,
    homePort: 'Dubai Harbour Marina',
    berthLocation: 'Berth B-04',
    helipad: false,
    jacuzzi: true,
    beachClub: true,
    stabilizers: 'CMC Marine Electric Stabilizer Fins',
    images: {
      hero: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85',
      salon: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
      masterCabin: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80',
      sunDeck: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
      beachClub: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80'
    },
    description: 'Impeccable Sanlorenzo asymmetry design with direct lateral opening terrace, forward bow pool relaxation deck, and low draft enabling easy navigation of shallow private lagoons in Dubai World Islands and Abu Dhabi mangroves.',
    deckPlans: [
      {
        deckName: 'Upper Flybridge',
        features: ['Forward Sunbathing Bed', 'Dining Table for 10', 'Hardtop Sunroof']
      },
      {
        deckName: 'Main Deck',
        features: ['Opening Sea Balcony Terrace', 'Full-Beam Master Stateroom', 'Contemporary Salon']
      },
      {
        deckName: 'Lower Deck',
        features: ['Fold-Down Transom Beach Club', '3 Guest Suites', 'Crew Quarters']
      }
    ],
    toys: [
      'Williams Sportjet 395 Tender',
      '2x Yamaha EX Deluxe Jet Skis',
      '1x Seabob F5',
      'Snorkel & Underwater Cameras'
    ],
    amenities: [
      'Fast semi-displacement hull for rapid island transfers',
      'Custom acoustic insulation for whisper-quiet cruising',
      'Nespresso & Caviar bar in main salon'
    ]
  },
  {
    id: 'velox-sport',
    name: 'M/Y VELOX SPORT',
    tagline: '29m Riva 96 Corsaro High-Speed Open Hardtop',
    builder: 'Riva Yachts / Ferretti Group',
    yearBuilt: 2023,
    lengthFeet: 96,
    lengthMeters: 29.2,
    beamMeters: 6.7,
    draftMeters: 1.9,
    grossTonnage: 175,
    guestsSleep: 6,
    guestsCruising: 16,
    cabins: 3,
    cabinConfig: '1 Master Suite, 2 VIP Doubles',
    crew: 5,
    captain: 'Capt. Lucas Beaumont',
    cruisingSpeedKnots: 24,
    maxSpeedKnots: 32,
    rangeNm: 1200,
    hourlyRateAed: 16000,
    dailyRateAed: 42000,
    weeklyRateAed: 195000,
    apaRatePercentage: 30,
    vatPercentage: 5,
    homePort: 'Dubai Marina & Bulgari Yacht Club',
    berthLocation: 'Bulgari Marina Berth 12',
    helipad: false,
    jacuzzi: false,
    beachClub: false,
    stabilizers: 'Seakeeper 35 Gyro Stabilizer',
    images: {
      hero: 'https://images.unsplash.com/photo-1621277224630-81a7494b8617?auto=format&fit=crop&w=1200&q=85',
      salon: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
      masterCabin: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
      sunDeck: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
      beachClub: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80'
    },
    description: 'Aggressive Riva sporting pedigree with twin MTU 2,638 HP engines capable of 32 knots. Engineered for high-speed day charters, VIP Grand Prix arrivals, and private sunset champagne hops.',
    deckPlans: [
      {
        deckName: 'Flybridge',
        features: ['Aero Helm Station', 'Wet Bar & Bimini Shade', 'U-Shaped Lounge']
      },
      {
        deckName: 'Main Deck',
        features: ['Forward Sunpad Lounge with Canopy', 'Teak Cockpit Lounge', 'Italian Leather Salon']
      },
      {
        deckName: 'Lower Deck',
        features: ['3 Luxury Ensuite Staterooms', 'Crew Quarters']
      }
    ],
    toys: [
      'Williams Turbojet 325',
      '1x Sea-Doo Spark Jet Ski',
      '1x Seabob F5S',
      'Towable Tube & Wakeboard'
    ],
    amenities: [
      'High-speed sprint capability across Dubai coastline',
      'Bulgari Marina priority dockage privileges',
      'Ultra-premium JL Audio Marine sound setup'
    ]
  },
  {
    id: 'celestial-blue',
    name: 'M/Y CELESTIAL BLUE',
    tagline: '50m Heesen Steel Displacement Superyacht',
    builder: 'Heesen Yachts Netherlands',
    yearBuilt: 2022,
    lengthFeet: 164,
    lengthMeters: 50.0,
    beamMeters: 9.0,
    draftMeters: 2.7,
    grossTonnage: 499,
    guestsSleep: 12,
    guestsCruising: 30,
    cabins: 6,
    cabinConfig: '1 Master Suite, 1 Full-Beam VIP, 2 Doubles, 2 Twins',
    crew: 13,
    captain: 'Capt. Sebastiaan van Dijk (Master 3000 GT)',
    cruisingSpeedKnots: 14,
    maxSpeedKnots: 16,
    rangeNm: 4000,
    hourlyRateAed: 38000,
    dailyRateAed: 95000,
    weeklyRateAed: 440000,
    apaRatePercentage: 30,
    vatPercentage: 5,
    homePort: 'Dubai Harbour Marina',
    berthLocation: 'Berth A-16',
    helipad: true,
    helipadRating: 'Touch-and-Go Heli-Lounge',
    jacuzzi: true,
    beachClub: true,
    stabilizers: 'Naiad Zero-Speed Roll Stabilizers',
    images: {
      hero: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
      salon: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      masterCabin: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
      sunDeck: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1000&q=80',
      beachClub: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80'
    },
    description: 'Pure Dutch craftsmanship by Heesen with steel displacement hull for unmatched seaworthiness and silence. Features an 85 sqm sun deck with custom mosaic spa pool, gym equipment, and al-fresco bar.',
    deckPlans: [
      {
        deckName: 'Sun Deck',
        features: ['Mosaic Heated Spa Pool', 'Gym Area', 'Sun Loungers', 'Bar']
      },
      {
        deckName: 'Upper Deck',
        features: ['Sky Lounge', 'Al-Fresco Dining for 12', 'Touch-and-Go Helipad']
      },
      {
        deckName: 'Main Deck',
        features: ['Full-Beam Owner Stateroom with Private Study', 'Main Salon & Formal Dining']
      },
      {
        deckName: 'Lower Beach Club',
        features: ['Beach Club with Bar', '5 Guest Staterooms', 'Tender Garage']
      }
    ],
    toys: [
      'Williams Dieseljet 565 Tender',
      '2x Yamaha Jet Skis',
      '2x Seabob F5SR',
      '2x E-Foils',
      'Inflatable Paddleboards'
    ],
    amenities: [
      'Dutch engineering with ultra-silent zero-vibration mounting',
      'Starlink Maritime Dual Antenna array',
      'Private wine room with rare vintage selection'
    ]
  }
];

export const MARINE_ITINERARIES: MarineItinerary[] = [
  {
    id: 'dubai-world-islands',
    title: 'Dubai Marina & World Islands Private Sanctuary',
    duration: '3 Days / 2 Nights',
    region: 'Dubai Coastline & Archipelago',
    startPort: 'Dubai Harbour Marina (Berth A-14)',
    endPort: 'Dubai Harbour Marina',
    nauticalMiles: 65,
    bestSeason: 'October to May (Optimal Seas)',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
    summary: 'A high-luxury coastal cruise witnessing Dubai’s world-famous architectural skyline from the water, anchoring in the secluded lagoons of The World Islands for private beach club parties, jet ski safaris, and Michelin starlight dining.',
    days: [
      {
        dayNumber: 1,
        title: 'Dubai Harbour Boarding & Sunset Burj Al Arab Anchorage',
        coordinates: '25.0924° N, 55.1438° E',
        cruisingHours: '2.5 Hours',
        highlights: [
          'VIP champagne welcome with chilled Beluga caviar on the sun deck',
          'Departure past Ain Dubai and the Palm Jumeirah West Crescent',
          'Sunset anchorage in front of the illuminated Burj Al Arab',
          '6-course seafood tasting dinner curated by the onboard executive chef'
        ],
        anchorage: 'Burj Al Arab Private Anchorage Zone (Calm Waters, 12m depth)',
        diningExperience: 'Al-Fresco Mediterranean Caviar & Grilled Langoustine Dinner'
      },
      {
        dayNumber: 2,
        title: 'The World Islands Private Lagoon & Water Sports Safari',
        coordinates: '25.2260° N, 55.1630° E',
        cruisingHours: '3.0 Hours',
        highlights: [
          'Morning cruise into the secluded inland lagoons of The World Islands',
          'Deployment of all water toys: Seabobs, eFoils, Yamaha Waverunners, and 9m water slide',
          'Private island beach BBQ with live seafood grill and mixologist bar',
          'Starlight open-air cinema screening on the bridge deck'
        ],
        anchorage: 'World Islands Sovereign Lagoon (Protected from open swell)',
        diningExperience: 'Royal Beach BBQ with Wagyu Tomahawk & Whole Gulf Hammour'
      },
      {
        dayNumber: 3,
        title: 'Palm Jumeirah Lagoon & Dubai Harbour Disembarkation',
        coordinates: '25.1124° N, 55.1390° E',
        cruisingHours: '2.0 Hours',
        highlights: [
          'Sunrise yoga session on the bow followed by a gourmet organic brunch',
          'Slow cruise through Dubai Marina canal and JBR beachfront',
          'VIP Rolls-Royce gangway escort transfer from Berth A-14'
        ],
        anchorage: 'Dubai Harbour Superyacht Berth A-14',
        diningExperience: 'Champagne & Truffle Eggs Royale Farewell Brunch'
      }
    ]
  },
  {
    id: 'abu-dhabi-sir-bani-yas',
    title: 'Abu Dhabi Yas Marina & Sir Bani Yas Wildlife Haven',
    duration: '5 Days / 4 Nights',
    region: 'Abu Dhabi Capital Coast & Western Islands',
    startPort: 'Dubai Harbour or Yas Marina',
    endPort: 'Abu Dhabi Yas Marina Gate 3',
    nauticalMiles: 195,
    bestSeason: 'November to April',
    heroImage: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80',
    summary: 'A regal royal passage traversing Abu Dhabi’s mangrove sanctuaries, docking at Yas Marina overlooking the F1 Grand Prix circuit, and cruising to the wild nature reserve of Sir Bani Yas Island for private gazelle safaris.',
    days: [
      {
        dayNumber: 1,
        title: 'Dubai to Yas Marina Capital Coastal Passage',
        coordinates: '24.4697° N, 54.6048° E',
        cruisingHours: '4.5 Hours',
        highlights: [
          'High-speed cruise down the Arabian Gulf coastline past Ghantoot',
          'Arrival at Yas Marina VIP berth directly beneath the illuminated Viceroy bridge',
          'Evening access to Yas Marina fine dining & Cipriani lounge'
        ],
        anchorage: 'Yas Marina VIP Superyacht Berth',
        diningExperience: 'Cipriani Yas Island Private Chef Collaboration'
      },
      {
        dayNumber: 2,
        title: 'Saadiyat Island Coral Reefs & Louvre Abu Dhabi Sea View',
        coordinates: '24.5338° N, 54.3982° E',
        cruisingHours: '3.0 Hours',
        highlights: [
          'Tender cruise to the water basin surrounding Jean Nouvel’s Louvre Abu Dhabi dome',
          'Snorkeling with sea turtles along the pristine Saadiyat marine sanctuary',
          'Sunset cocktail reception on the sun deck Jacuzzi'
        ],
        anchorage: 'Saadiyat Island Protected Marine Anchorage',
        diningExperience: 'Emirati Seafood Feast with Local Spices & Gulf Lobster'
      },
      {
        dayNumber: 3,
        title: 'Cruising to Sir Bani Yas Royal Nature Reserve',
        coordinates: '24.3167° N, 52.6000° E',
        cruisingHours: '6.0 Hours',
        highlights: [
          'Ocean passage across the turquoise western archipelago of Abu Dhabi',
          'Anchoring off the golden sandbars of Sir Bani Yas Island',
          'Private island excursion: 4x4 wildlife safari with Arabian Oryx and cheetahs'
        ],
        anchorage: 'Sir Bani Yas South Sandbar Lagoon',
        diningExperience: 'Bedouin-Style Candlelit Desert Dune Dinner Onshore'
      },
      {
        dayNumber: 4,
        title: 'Deep-Sea Game Fishing & Water Sports Expedition',
        coordinates: '24.2800° N, 52.5500° E',
        cruisingHours: '2.5 Hours',
        highlights: [
          'Early morning big game trolling for Kingfish, Cobia, and Queenfish',
          'Scuba diving the historic shipwreck dive sites with onboard PADI master',
          'Fresh catch prepared directly into sashimi and ceviche on deck'
        ],
        anchorage: 'Sir Bani Yas North Anchorage',
        diningExperience: 'Fresh Omakase Sashimi Bar from the Day’s Catch'
      },
      {
        dayNumber: 5,
        title: 'Return to Abu Dhabi & Helicopter Transfer',
        coordinates: '24.4697° N, 54.6048° E',
        cruisingHours: '5.0 Hours',
        highlights: [
          'Leisurely morning cruise back to Yas Marina',
          'Helicopter charter pick-up from the yacht helipad directly to Bateen Executive Airport'
        ],
        anchorage: 'Yas Marina Gate 3',
        diningExperience: 'Celebration Farewell Champagne Luncheon'
      }
    ]
  },
  {
    id: 'musandam-oman-fjords',
    title: 'Musandam Fjords & Straits of Hormuz Expedition',
    duration: '7 Days / 6 Nights',
    region: 'Musandam Peninsula, Oman & Arabian Sea',
    startPort: 'Dubai Harbour Marina',
    endPort: 'Dubai Harbour Marina (or Khasab Anchorage)',
    nauticalMiles: 280,
    bestSeason: 'October to May',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80',
    summary: 'The ultimate marine expedition through the dramatic limestone fjords of Musandam (the Norway of Arabia). Crystal-clear 30m visibility waters, playful wild dolphin pods in Khawr Sham, and undisturbed secluded mountain coves.',
    days: [
      {
        dayNumber: 1,
        title: 'Dubai to Ras Al Khaimah & Oman Border Clearance',
        coordinates: '25.8007° N, 55.9762° E',
        cruisingHours: '5.0 Hours',
        highlights: [
          'Northern coastal cruise past Sharjah, Ajman, and Marjan Island',
          'E-Clearance smooth marine transit with UAE and Oman maritime authorities',
          'Anchorage at the gateway to the Musandam Peninsula'
        ],
        anchorage: 'Ras Al Khaimah Marjan Marina / Border Passage',
        diningExperience: 'Fresh Omani Rock Lobster & Saffron Risotto'
      },
      {
        dayNumber: 2,
        title: 'Entry into Khawr Sham Fjord & Wild Dolphin Escort',
        coordinates: '26.2000° N, 56.2500° E',
        cruisingHours: '4.0 Hours',
        highlights: [
          'Entering the 16km fjord of Khawr Sham flanked by 1,000m cliffs',
          'Dozens of wild bottlenose and humpback dolphins swimming in the yacht’s bow wake',
          'Tender excursion to the historic Telegraph Island'
        ],
        anchorage: 'Telegraph Island Secluded Fjord Basin',
        diningExperience: 'Al-Fresco Mezze & Grilled Sea Bass under the Stars'
      },
      {
        dayNumber: 3,
        title: 'Khawr Najd Hidden Mountain Lagoon',
        coordinates: '26.1167° N, 56.3333° E',
        cruisingHours: '3.0 Hours',
        highlights: [
          'Anchoring in the emerald waters of Khawr Najd accessible only by sea',
          'Paddleboarding and eFoiling across mirror-flat fjord water',
          'Hiking up to the panoramic mountain pass viewing two oceans simultaneously'
        ],
        anchorage: 'Khawr Najd Protected Mountain Bay',
        diningExperience: 'Sunset BBQ on the Transom Swim Platform'
      },
      {
        dayNumber: 4,
        title: 'Kumzar Remote Village & Straits of Hormuz Passage',
        coordinates: '26.3333° N, 56.4167° E',
        cruisingHours: '4.5 Hours',
        highlights: [
          'Cruising past the ancient isolated fishing village of Kumzar',
          'Navigation through the iconic Straits of Hormuz international shipping lane',
          'Deep-water scuba diving along underwater cliff drop-offs (black coral and manta rays)'
        ],
        anchorage: 'Kumzar Outer Cove Anchorage',
        diningExperience: 'Japanese Robatayaki Grill on the Sun Deck'
      },
      {
        dayNumber: 5,
        title: 'Lima Bay & Sea Cave Exploration',
        coordinates: '25.9667° N, 56.4500° E',
        cruisingHours: '3.5 Hours',
        highlights: [
          'Tender and kayak navigation inside subterranean sea caves',
          'Spearfishing and deep jigging with the local Omani guides',
          'Sunset champagne tasting on the flybridge jacuzzi'
        ],
        anchorage: 'Lima Rock Anchorage',
        diningExperience: 'Freshly Speared Grouper & Yellowfin Tuna Tartare'
      },
      {
        dayNumber: 6,
        title: 'Fujairah East Coast Passage & Coral Reefs',
        coordinates: '25.1288° N, 56.3265° E',
        cruisingHours: '4.0 Hours',
        highlights: [
          'Passing Dibba Rock marine reserve for shark and sea turtle snorkeling',
          'Cruising along the UAE East Coast in the Gulf of Oman'
        ],
        anchorage: 'Fujairah International Marine Club Berth',
        diningExperience: 'Tasting Menu paired with Grand Cru Vintages'
      },
      {
        dayNumber: 7,
        title: 'Return to Dubai Harbour Marina',
        coordinates: '25.0924° N, 55.1438° E',
        cruisingHours: '5.5 Hours',
        highlights: [
          'Triumphant return into Dubai Harbour with water cannon salute option',
          'VIP customs clearance and Rolls-Royce chauffeur transfer'
        ],
        anchorage: 'Dubai Harbour Berth A-14',
        diningExperience: 'Grand Finale Royal Gala Luncheon'
      }
    ]
  }
];

export const MARINE_SERVICES: MarineService[] = [
  {
    id: 'charter-brokerage',
    title: 'Superyacht Charter & VIP Hospitality',
    subtitle: 'MYBA Standard Luxury Charters in Dubai & Worldwide',
    description: 'Bespoke private day charters, weeklong coastal expeditions, royal celebrations, and VIP Grand Prix hospitality with silver-service crew, onboard Michelin chefs, and full water toy fleets.',
    iconName: 'Anchor',
    metrics: '24 Managed Superyachts • 100% Bespoke Menus • 24/7 Concierge',
    features: [
      'DMCA licensed commercial charter operations',
      'MYBA charter contract framework with full client confidentiality',
      'VIP helicopter and Rolls-Royce gangway transfers',
      'Customized catering by Michelin-starred culinary teams'
    ]
  },
  {
    id: 'yacht-sales',
    title: 'Yacht Sales & New Build Brokerage',
    subtitle: 'Acquisitions, Custom Shipyard Builds & Surveys',
    description: 'Confidential advisory for purchasing pre-owned superyachts and commissioning custom new builds with world-renowned Italian and Dutch shipyards (Benetti, Sanlorenzo, Lürssen, Gulf Craft, Heesen).',
    iconName: 'Compass',
    metrics: 'AED 850M+ Transacted • 35 Shipyard Partnerships • Full Survey',
    features: [
      'Exclusive off-market superyacht listings across UAE & Monaco',
      'Shipyard contract negotiation and technical specification auditing',
      'Full flag state registration (UAE, Cayman Islands, Marshall Islands)',
      'Pre-purchase marine surveyor inspections and sea trials'
    ]
  },
  {
    id: 'yacht-management',
    title: 'Sovereign Yacht Management & Crew Manning',
    subtitle: 'Technical, Operational, Safety & Crew Administration',
    description: 'Turnkey operational management for yacht owners. We oversee ISM/ISPS safety compliance, class surveys, preventive maintenance, berth reservations, and international crew placement.',
    iconName: 'ShieldCheck',
    metrics: '18 Yachts Under Management • 99.4% Uptime • 0 Safety Incidents',
    features: [
      'Master 3000 GT certified captains and engineers placement',
      'Full financial accounting, transparent APA management, and budgeting',
      'Emergency 24/7 technical dispatch and shipyard dry-dock coordination',
      'Bunkering, customs clearances, and sovereign security protocols'
    ]
  },
  {
    id: 'f1-grand-prix',
    title: 'Abu Dhabi F1 Grand Prix VIP Trackside Berthing',
    subtitle: 'Exclusive Trackside Superyacht Hospitality at Yas Marina',
    description: 'Prime trackside superyacht mooring in Zones 1 & 2 of Yas Marina during the Abu Dhabi Formula 1 Etihad Airways Grand Prix. Front-row race views, celebrity after-parties, and Michelin gastronomy.',
    iconName: 'Award',
    metrics: '100% Trackside Views • VIP Paddock Access • Concert Tickets',
    features: [
      'Guaranteed Yas Marina trackside berths with VIP hospitality passes',
      'Live race broadcast on multi-deck outdoor video walls',
      'All-inclusive Dom Pérignon champagne bars and gourmet banquets',
      'Direct yacht-to-after-race concert VIP transfer access'
    ]
  }
];

export const LIVE_WEATHER_HUD = {
  station: 'Dubai Harbour Marine Meteorological Station',
  waterTemperatureC: 28.5,
  airTemperatureC: 31.0,
  windSpeedKnots: 11,
  windDirection: 'NNW (330°)',
  waveHeightMeters: 0.6,
  swellPeriodSec: 5.2,
  tideState: 'High Tide (Rising +1.4m)',
  visibilityNm: 12.0,
  barometerHpa: 1012.8,
  coastGuardClearance: 'Green / Open Seas (Full Clearance)',
  radarScanActive: true
};

export const FAQ_DATA = [
  {
    question: 'What is included in the NERO MARINE superyacht charter rate?',
    answer: 'All charter rates listed in AED include exclusive private hire of the yacht, a fully licensed master captain and professional crew (deckhands, stewardesses, engineers), fuel for standard cruising speeds, luxury towels, standard water sports equipment, and complimentary soft beverages and artisan coffees. Advanced Provisioning Allowance (APA 30-35%) covers custom fine wines, bespoke gourmet chef menus, berthing fees outside home port, and special marina dockage requests.'
  },
  {
    question: 'What is Advance Provisioning Allowance (APA) and how is it calculated?',
    answer: 'APA is the international standard superyacht provisioning deposit (typically 30% to 35% of the base charter rate). It is managed transparently by the yacht captain to purchase your customized foods, vintage champagnes, port mooring dues, and tender fuels. An itemized receipt ledger is provided at the conclusion of your voyage, and any unspent balance is returned immediately.'
  },
  {
    question: 'Can we embark or disembark from different marinas or private villas in the UAE?',
    answer: 'Yes. While our primary mega-yacht berths are at Dubai Harbour Marina and Yas Marina Abu Dhabi, we routinely coordinate embarkation and disembarkation from Bulgari Yacht Club (Jumeira Bay Island), Emirates Palace Marina, Dubai Marina, Dubai Creek, or private beachfront villa pontoons on Palm Jumeirah (subject to vessel draft and water depth).'
  },
  {
    question: 'How do you handle privacy, NDAs, and high-security delegations?',
    answer: 'NERO MARINE operates under strict non-disclosure agreements for royal families, state officials, and high-profile clients. All crew members undergo background security vetting and sign comprehensive privacy agreements. We can provide armed security escorts, encrypted satellite Starlink communications, and private anchorage seclusion.'
  },
  {
    question: 'What documents are required to confirm a superyacht charter in Dubai?',
    answer: 'In accordance with DMCA and UAE Coast Guard regulations, all guest passengers must present valid Emirates IDs (for UAE residents) or original Passports (for tourists) for maritime e-clearance before departure. The primary charterer signs a standard MYBA / NERO Charter Agreement.'
  }
];
