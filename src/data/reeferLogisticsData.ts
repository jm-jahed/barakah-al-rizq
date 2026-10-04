export interface ReeferTrailer {
  id: string;
  unitCode: string;
  refrigerationUnit: string;
  capacityTon: number;
  trailerLengthMeters: number;
  tempRange: string;
  currentStatus: 'Ready' | 'In Transit' | 'Loading' | 'Pre-Cooling';
  currentLocation: string;
  destination?: string;
  currentTemp?: string;
  setpointTemp?: string;
  sensorMeshId: string;
  telematicsActive: boolean;
  calibrationDate: string;
}

export interface GCCRoute {
  id: string;
  country: string;
  flag: string;
  destinationHubs: string[];
  borderCrossing: string;
  customsCorridor: string;
  standardDistanceKm: number;
  transitHoursRange: string;
  reeferSpecs: string;
  tempRangeSupported: string;
  status: 'Daily Departures' | 'High Frequency' | 'Scheduled Runs' | 'Custom Dispatch';
  availability: 'Immediate Capacity' | 'Available Tomorrow' | 'Book in Advance';
  keyCommodities: string[];
  customsRequirements: string[];
  routeHighlights: string;
}

export interface CargoCategory {
  id: string;
  title: string;
  category: string;
  tempRange: string;
  humidityRange: string;
  airflowRequirement: string;
  description: string;
  icon: string;
  commonProducts: string[];
  handlingProtocols: string[];
  image: string;
}

export interface BorderStep {
  stepNumber: string;
  stage: string;
  location: string;
  description: string;
  operationalDetail: string;
  verificationBadge: string;
}

export interface ProcessWorkflowStep {
  step: string;
  title: string;
  action: string;
  description: string;
  duration: string;
  checkpoint: string;
  icon: string;
}

export interface TelematicsTelemetry {
  truckId: string;
  driverName: string;
  origin: string;
  destination: string;
  cargoType: string;
  setpoint: string;
  ambientTemp: string;
  supplyAirTemp: string;
  returnAirTemp: string;
  coreCargoTemp: string;
  humidity: string;
  doorStatus: 'Sealed & Locked' | 'Open' | 'Dock Airlock';
  fuelLevel: string;
  reeferMode: 'Continuous High Flow' | 'Start/Stop Eco Cycle';
  currentCoordinates: string;
  currentLocationName: string;
  progressPercent: number;
  eta: string;
  status: 'IN TRANSIT' | 'AT BORDER' | 'PRE-COOLING' | 'DELIVERED';
  speedKmH: number;
  batteryVoltage: string;
  lastSyncTime: string;
}

export const REEFER_COMPANY_INFO = {
  name: "TRANS-GCC REEFER LOGISTICS",
  shortName: "TRANS-GCC REEFER",
  subTitle: "Dubai to GCC 25-Ton Reefer Road Transport",
  headquarters: "JAFZA Logistics Corridor & Al Aweer Terminal, Dubai, UAE",
  originHubs: [
    {
      name: "Al Aweer Central Fruits & Vegetables Terminal",
      location: "Ras Al Khor / Al Aweer, Dubai",
      type: "Perishables, Fresh Produce & Foodstuff Staging Hub",
      dockCount: "24 Temperature-Controlled Docks"
    },
    {
      name: "JAFZA Cold Logistics Corridor",
      location: "Jebel Ali Free Zone South, Dubai",
      type: "Port Re-Export, Deep-Frozen & FMCG Consolidation Hub",
      dockCount: "32 Sub-Zero Airlock Docks"
    }
  ],
  phone: "+971 4 880 9900",
  mobile: "+971 50 892 4477",
  whatsapp: "https://wa.me/971508924477?text=Hello%20TRANS-GCC%20Reefer%20Logistics%20Team,%20I%20would%20like%20to%20request%20a%2025-Ton%20Reefer%20Transport%20Quote%20from%20Dubai.",
  email: "dispatch@transgcc-reefer.ae",
  workingHours: "24/7 Operations Desk & Border Dispatch"
};

export const REEFER_STATS = [
  { label: "DEDICATED REEFER TRAILERS", value: "20", highlight: "20 DEDICATED REEFER TRAILERS", detail: "Heavy-duty 15-meter tri-axle chassis" },
  { label: "PAYLOAD CAPACITY", value: "25 TON", highlight: "25-TON CAPACITY", detail: "Max road transport weight per trailer" },
  { label: "TRAILER LENGTH", value: "15 METERS", highlight: "15-METER TRAILERS", detail: "Standard 33/34 Euro-pallet capacity" },
  { label: "TEMPERATURE RANGE", value: "-18°C → +4°C", highlight: "-18°C → +4°C", detail: "Multi-temp chilled, frozen & ambient" },
  { label: "GCC COVERAGE", value: "6 NATIONS", highlight: "GCC CROSS-BORDER", detail: "KSA, Qatar, Kuwait, Bahrain, Oman, Syria" },
  { label: "GPS & NIST TELEMETRICS", value: "100%", highlight: "FULLY TRACKED", detail: "Real-time thermal & location loggers" }
];

export const FLEET_TRAILERS: ReeferTrailer[] = [
  {
    id: "reefer-01",
    unitCode: "TRUCK #AE-001",
    refrigerationUnit: "Thermo King SLXi-400 Whisper",
    capacityTon: 25,
    trailerLengthMeters: 15,
    tempRange: "-25°C to +25°C",
    currentStatus: "In Transit",
    currentLocation: "Batha Border Corridor (KSA Route)",
    destination: "Riyadh Logistics Park",
    currentTemp: "-18.2°C",
    setpointTemp: "-18.0°C",
    sensorMeshId: "NIST-TK400-901",
    telematicsActive: true,
    calibrationDate: "2026-08-15"
  },
  {
    id: "reefer-02",
    unitCode: "TRUCK #AE-002",
    refrigerationUnit: "Carrier Vector 1550 Multi-Temp",
    capacityTon: 25,
    trailerLengthMeters: 15,
    tempRange: "-25°C to +25°C",
    currentStatus: "Ready",
    currentLocation: "Al Aweer Central Terminal, Dubai",
    currentTemp: "+3.8°C",
    setpointTemp: "+4.0°C",
    sensorMeshId: "NIST-CV15-882",
    telematicsActive: true,
    calibrationDate: "2026-08-20"
  },
  {
    id: "reefer-03",
    unitCode: "TRUCK #AE-003",
    refrigerationUnit: "Thermo King SLXi-400 Spectrum",
    capacityTon: 25,
    trailerLengthMeters: 15,
    tempRange: "-25°C to +25°C",
    currentStatus: "In Transit",
    currentLocation: "Salwa Customs Corridor",
    destination: "Doha Industrial Zone, Qatar",
    currentTemp: "+2.1°C",
    setpointTemp: "+2.0°C",
    sensorMeshId: "NIST-TK400-771",
    telematicsActive: true,
    calibrationDate: "2026-08-10"
  },
  {
    id: "reefer-04",
    unitCode: "TRUCK #AE-004",
    refrigerationUnit: "Carrier Vector 1550 Single-Temp",
    capacityTon: 25,
    trailerLengthMeters: 15,
    tempRange: "-25°C to +25°C",
    currentStatus: "Loading",
    currentLocation: "JAFZA Cold Logistics Corridor, Dubai",
    destination: "Kuwait City Central Market",
    currentTemp: "-14.6°C",
    setpointTemp: "-18.0°C",
    sensorMeshId: "NIST-CV15-654",
    telematicsActive: true,
    calibrationDate: "2026-08-25"
  },
  {
    id: "reefer-05",
    unitCode: "TRUCK #AE-005",
    refrigerationUnit: "Thermo King SLXi-400 Whisper",
    capacityTon: 25,
    trailerLengthMeters: 15,
    tempRange: "-25°C to +25°C",
    currentStatus: "In Transit",
    currentLocation: "Khatmat Malaha Border",
    destination: "Muscat Central Market, Oman",
    currentTemp: "+4.2°C",
    setpointTemp: "+4.0°C",
    sensorMeshId: "NIST-TK400-432",
    telematicsActive: true,
    calibrationDate: "2026-08-18"
  },
  {
    id: "reefer-06",
    unitCode: "TRUCK #AE-006",
    refrigerationUnit: "Carrier Vector 1550 Multi-Temp",
    capacityTon: 25,
    trailerLengthMeters: 15,
    tempRange: "-25°C to +25°C",
    currentStatus: "Pre-Cooling",
    currentLocation: "Al Aweer Central Terminal, Dubai",
    currentTemp: "-5.0°C",
    setpointTemp: "-18.0°C",
    sensorMeshId: "NIST-CV15-321",
    telematicsActive: true,
    calibrationDate: "2026-08-12"
  },
  {
    id: "reefer-07",
    unitCode: "TRUCK #AE-007",
    refrigerationUnit: "Thermo King SLXi-400 Spectrum",
    capacityTon: 25,
    trailerLengthMeters: 15,
    tempRange: "-25°C to +25°C",
    currentStatus: "Ready",
    currentLocation: "JAFZA Staging Hub, Dubai",
    currentTemp: "+15.0°C",
    setpointTemp: "+15.0°C",
    sensorMeshId: "NIST-TK400-553",
    telematicsActive: true,
    calibrationDate: "2026-08-28"
  },
  {
    id: "reefer-08",
    unitCode: "TRUCK #AE-008",
    refrigerationUnit: "Carrier Vector 1550 Single-Temp",
    capacityTon: 25,
    trailerLengthMeters: 15,
    tempRange: "-25°C to +25°C",
    currentStatus: "In Transit",
    currentLocation: "King Fahd Causeway Transit Line",
    destination: "Manama Cold Hub, Bahrain",
    currentTemp: "+1.9°C",
    setpointTemp: "+2.0°C",
    sensorMeshId: "NIST-CV15-998",
    telematicsActive: true,
    calibrationDate: "2026-08-14"
  },
  {
    id: "reefer-09",
    unitCode: "TRUCK #AE-009",
    refrigerationUnit: "Thermo King SLXi-400 Whisper",
    capacityTon: 25,
    trailerLengthMeters: 15,
    tempRange: "-25°C to +25°C",
    currentStatus: "In Transit",
    currentLocation: "Al Ghuwaifat Highway KM 240",
    destination: "Dammam Cold Storage Hub, KSA",
    currentTemp: "-19.1°C",
    setpointTemp: "-18.0°C",
    sensorMeshId: "NIST-TK400-112",
    telematicsActive: true,
    calibrationDate: "2026-08-22"
  },
  {
    id: "reefer-10",
    unitCode: "TRUCK #AE-010",
    refrigerationUnit: "Carrier Vector 1550 Multi-Temp",
    capacityTon: 25,
    trailerLengthMeters: 15,
    tempRange: "-25°C to +25°C",
    currentStatus: "Ready",
    currentLocation: "Al Aweer Central Terminal, Dubai",
    currentTemp: "+4.0°C",
    setpointTemp: "+4.0°C",
    sensorMeshId: "NIST-CV15-447",
    telematicsActive: true,
    calibrationDate: "2026-08-30"
  },
  {
    id: "reefer-11",
    unitCode: "TRUCK #AE-011",
    refrigerationUnit: "Thermo King SLXi-400 Whisper",
    capacityTon: 25,
    trailerLengthMeters: 15,
    tempRange: "-25°C to +25°C",
    currentStatus: "In Transit",
    currentLocation: "Nuwaiseeb Border Checkpoint",
    destination: "Shuwaikh Port Distribution, Kuwait",
    currentTemp: "-17.8°C",
    setpointTemp: "-18.0°C",
    sensorMeshId: "NIST-TK400-884",
    telematicsActive: true,
    calibrationDate: "2026-08-16"
  },
  {
    id: "reefer-12",
    unitCode: "TRUCK #AE-012",
    refrigerationUnit: "Carrier Vector 1550 Single-Temp",
    capacityTon: 25,
    trailerLengthMeters: 15,
    tempRange: "-25°C to +25°C",
    currentStatus: "Loading",
    currentLocation: "Al Aweer Fruit & Veg Terminal, Dubai",
    destination: "Sohar Distribution Center, Oman",
    currentTemp: "+5.1°C",
    setpointTemp: "+4.0°C",
    sensorMeshId: "NIST-CV15-662",
    telematicsActive: true,
    calibrationDate: "2026-08-27"
  },
  {
    id: "reefer-13",
    unitCode: "TRUCK #AE-013",
    refrigerationUnit: "Thermo King SLXi-400 Spectrum",
    capacityTon: 25,
    trailerLengthMeters: 15,
    tempRange: "-25°C to +25°C",
    currentStatus: "Ready",
    currentLocation: "JAFZA Logistics Corridor, Dubai",
    currentTemp: "-18.0°C",
    setpointTemp: "-18.0°C",
    sensorMeshId: "NIST-TK400-239",
    telematicsActive: true,
    calibrationDate: "2026-08-19"
  },
  {
    id: "reefer-14",
    unitCode: "TRUCK #AE-014",
    refrigerationUnit: "Carrier Vector 1550 Multi-Temp",
    capacityTon: 25,
    trailerLengthMeters: 15,
    tempRange: "-25°C to +25°C",
    currentStatus: "In Transit",
    currentLocation: "Northern Regional Highway (Jordan Corridor)",
    destination: "Damascus Transit Logistics Center",
    currentTemp: "-12.4°C",
    setpointTemp: "-12.0°C",
    sensorMeshId: "NIST-CV15-115",
    telematicsActive: true,
    calibrationDate: "2026-08-08"
  },
  {
    id: "reefer-15",
    unitCode: "TRUCK #AE-015",
    refrigerationUnit: "Thermo King SLXi-400 Whisper",
    capacityTon: 25,
    trailerLengthMeters: 15,
    tempRange: "-25°C to +25°C",
    currentStatus: "Ready",
    currentLocation: "Al Aweer Central Terminal, Dubai",
    currentTemp: "+2.8°C",
    setpointTemp: "+3.0°C",
    sensorMeshId: "NIST-TK400-983",
    telematicsActive: true,
    calibrationDate: "2026-08-31"
  },
  {
    id: "reefer-16",
    unitCode: "TRUCK #AE-016",
    refrigerationUnit: "Carrier Vector 1550 Single-Temp",
    capacityTon: 25,
    trailerLengthMeters: 15,
    tempRange: "-25°C to +25°C",
    currentStatus: "Pre-Cooling",
    currentLocation: "JAFZA Staging Hub, Dubai",
    currentTemp: "+0.5°C",
    setpointTemp: "-18.0°C",
    sensorMeshId: "NIST-CV15-773",
    telematicsActive: true,
    calibrationDate: "2026-08-23"
  },
  {
    id: "reefer-17",
    unitCode: "TRUCK #AE-017",
    refrigerationUnit: "Thermo King SLXi-400 Spectrum",
    capacityTon: 25,
    trailerLengthMeters: 15,
    tempRange: "-25°C to +25°C",
    currentStatus: "In Transit",
    currentLocation: "Al Kharj Highway Route 10, KSA",
    destination: "Jeddah Central Cold Store, KSA",
    currentTemp: "-18.6°C",
    setpointTemp: "-18.0°C",
    sensorMeshId: "NIST-TK400-334",
    telematicsActive: true,
    calibrationDate: "2026-08-11"
  },
  {
    id: "reefer-18",
    unitCode: "TRUCK #AE-018",
    refrigerationUnit: "Carrier Vector 1550 Multi-Temp",
    capacityTon: 25,
    trailerLengthMeters: 15,
    tempRange: "-25°C to +25°C",
    currentStatus: "Ready",
    currentLocation: "Al Aweer Central Terminal, Dubai",
    currentTemp: "+4.0°C",
    setpointTemp: "+4.0°C",
    sensorMeshId: "NIST-CV15-559",
    telematicsActive: true,
    calibrationDate: "2026-08-29"
  },
  {
    id: "reefer-19",
    unitCode: "TRUCK #AE-019",
    refrigerationUnit: "Thermo King SLXi-400 Whisper",
    capacityTon: 25,
    trailerLengthMeters: 15,
    tempRange: "-25°C to +25°C",
    currentStatus: "Loading",
    currentLocation: "JAFZA Cold Logistics Corridor, Dubai",
    destination: "Doha Al Wakrah Logistics, Qatar",
    currentTemp: "-16.2°C",
    setpointTemp: "-18.0°C",
    sensorMeshId: "NIST-TK400-671",
    telematicsActive: true,
    calibrationDate: "2026-08-24"
  },
  {
    id: "reefer-20",
    unitCode: "TRUCK #AE-020",
    refrigerationUnit: "Carrier Vector 1550 Single-Temp",
    capacityTon: 25,
    trailerLengthMeters: 15,
    tempRange: "-25°C to +25°C",
    currentStatus: "Ready",
    currentLocation: "Al Aweer Central Terminal, Dubai",
    currentTemp: "+3.5°C",
    setpointTemp: "+4.0°C",
    sensorMeshId: "NIST-CV15-880",
    telematicsActive: true,
    calibrationDate: "2026-08-26"
  }
];

export const GCC_ROUTES: GCCRoute[] = [
  {
    id: "route-ksa",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    destinationHubs: ["Riyadh (Dry Port / Logistics Park)", "Jeddah (Islamic Port / Al Khumra)", "Dammam / Khobar (King Abdulaziz Port)", "Medina & Qassim"],
    borderCrossing: "Al Ghuwaifat (UAE) ⇄ Al Batha (KSA)",
    customsCorridor: "FASAH Digital Customs Pre-Clearance & Saber Platform Integration",
    standardDistanceKm: 980,
    transitHoursRange: "24 – 36 Hours (Riyadh) | 48 – 60 Hours (Jeddah)",
    reeferSpecs: "25-Ton Heavy Tri-Axle Reefer (15M / 33 Pallets)",
    tempRangeSupported: "-18°C Frozen to +4°C Chilled",
    status: "Daily Departures",
    availability: "Immediate Capacity",
    keyCommodities: ["Fresh Produce", "Dairy Products", "Frozen Poultry & Meat", "FMCG Food Items", "Chilled Confectionery"],
    customsRequirements: ["Saudi SFDA Clearance", "FASAH Transit Declaration", "Commercial Invoice & Certificate of Origin", "Phytosanitary / Halal Certificates"],
    routeHighlights: "High-frequency trunk line linking Dubai loading docks directly to Central and Western KSA cold distribution centers with zero cold-chain breaks."
  },
  {
    id: "route-qatar",
    country: "Qatar",
    flag: "🇶🇦",
    destinationHubs: ["Doha Industrial Area Logistics Park", "Al Wakrah Logistics City", "Hamad Port Free Zone"],
    borderCrossing: "Al Ghuwaifat (UAE) ⇄ Salwa (KSA Transit) ⇄ Abu Samra (Qatar)",
    customsCorridor: "Al Nadeem Single Window System & GCC Transit Protocol",
    standardDistanceKm: 690,
    transitHoursRange: "18 – 24 Hours",
    reeferSpecs: "25-Ton Heavy Tri-Axle Reefer (15M / 33 Pallets)",
    tempRangeSupported: "-18°C Frozen to +4°C Chilled",
    status: "Daily Departures",
    availability: "Immediate Capacity",
    keyCommodities: ["Fresh Fruits & Vegetables", "Ice Cream & Frozen Desserts", "Gourmet Dairy", "Packaged Perishables"],
    customsRequirements: ["Qatar Ministry of Public Health Clearance", "Al Nadeem Customs Bill", "Direct Consignment Seal Verification", "Bilingual Health Certificate"],
    routeHighlights: "Express transit corridor designed for high-turnover food retail chains and hotel supply partners across Greater Doha."
  },
  {
    id: "route-kuwait",
    country: "Kuwait",
    flag: "🇰🇼",
    destinationHubs: ["Kuwait City Central Logistics Zone", "Shuwaikh Industrial Area", "Sulaibiya Agricultural Wholesale Market", "Al Rai Cold Hubs"],
    borderCrossing: "Al Ghuwaifat (UAE) ⇄ Al Batha (KSA Transit) ⇄ Nuwaiseeb (Kuwait)",
    customsCorridor: "Kuwait General Administration of Customs & Public Authority for Food and Nutrition (PAFN)",
    standardDistanceKm: 1280,
    transitHoursRange: "32 – 44 Hours",
    reeferSpecs: "25-Ton Heavy Tri-Axle Reefer (15M / 33 Pallets)",
    tempRangeSupported: "-18°C Frozen to +4°C Chilled",
    status: "High Frequency",
    availability: "Available Tomorrow",
    keyCommodities: ["Imported Fresh Produce from Al Aweer", "Frozen Meats", "Dairy & Cheese", "Processed Foodstuff"],
    customsRequirements: ["Kuwait PAFN Food Release Permit", "Nuwaiseeb Border Transit Manifest", "Halal Slaughter Certificate for Meat", "NIST Temperature Log Verification"],
    routeHighlights: "Long-haul refrigerated corridor with dedicated two-driver relay options for rapid perishable delivery to Kuwait distribution hubs."
  },
  {
    id: "route-bahrain",
    country: "Bahrain",
    flag: "🇧🇭",
    destinationHubs: ["Manama Central Market", "Hidd Industrial Area & Logistics Park", "Sitra Cold Storage Facilities"],
    borderCrossing: "Al Ghuwaifat (UAE) ⇄ Al Batha (KSA Transit) ⇄ King Fahd Causeway (Bahrain)",
    customsCorridor: "OFOQ Single Window Customs & Bahrain Food Safety Directorate",
    standardDistanceKm: 990,
    transitHoursRange: "24 – 32 Hours",
    reeferSpecs: "25-Ton Heavy Tri-Axle Reefer (15M / 33 Pallets)",
    tempRangeSupported: "-18°C Frozen to +4°C Chilled",
    status: "Daily Departures",
    availability: "Immediate Capacity",
    keyCommodities: ["Fresh Berries & Exotic Vegetables", "Chilled Dairy", "Frozen Seafood", "Specialty Beverages"],
    customsRequirements: ["Bahrain OFOQ Customs Declaration", "Causeway Commercial Vehicle Permit", "Health & Phytosanitary Verification", "Calibrated Temp Certificate"],
    routeHighlights: "Seamless transit across the King Fahd Causeway with pre-scheduled customs inspections minimizing wait times."
  },
  {
    id: "route-oman",
    country: "Oman",
    flag: "🇴🇲",
    destinationHubs: ["Muscat (Al Mawaleh Central Market)", "Sohar Port & Freezone", "Nizwa Logistics Hub", "Salalah Free Zone (Southern Link)"],
    borderCrossing: "Khatmat Malaha / Al Wajajah / Hili (UAE ⇄ Oman)",
    customsCorridor: "Bayan Electronic Customs System & Ministry of Agriculture & Fisheries Inspection",
    standardDistanceKm: 450,
    transitHoursRange: "8 – 14 Hours (Muscat / Sohar) | 24 Hours (Salalah)",
    reeferSpecs: "25-Ton Heavy Tri-Axle Reefer (15M / 33 Pallets)",
    tempRangeSupported: "-18°C Frozen to +4°C Chilled",
    status: "Daily Departures",
    availability: "Immediate Capacity",
    keyCommodities: ["Fresh Fruits & Vegetables", "Chilled Poultry", "Frozen Meats & Fish", "Juices & Dairy"],
    customsRequirements: ["Bayan Customs Bayan Clearance", "GCC Unified Agricultural Certificate", "Omani Food Safety Release", "Direct Commercial Invoice"],
    routeHighlights: "Direct contiguous border connection from Dubai with same-day delivery options to Muscat supermarkets and food processors."
  },
  {
    id: "route-syria",
    country: "Syria",
    flag: "🇸🇾",
    destinationHubs: ["Damascus Central Logistics Terminal", "Homs Regional Interchange", "Aleppo Industrial Zone Transit Corridor"],
    borderCrossing: "UAE ⇄ KSA Transit ⇄ Jordan Corridor (Al Haditha / Jaber) ⇄ Nassib Border (Syria)",
    customsCorridor: "Arab Transit Accord & International TIR Carnet Customs Regime",
    standardDistanceKm: 2450,
    transitHoursRange: "72 – 96 Hours",
    reeferSpecs: "25-Ton Heavy Tri-Axle Reefer with Auxiliary Long-Range Fuel Tank & Dual Thermo Units",
    tempRangeSupported: "-18°C Frozen to +4°C Chilled",
    status: "Scheduled Runs",
    availability: "Book in Advance",
    keyCommodities: ["Commercial Foodstuff", "Essential Perishables", "FMCG Goods", "Re-Export Commodities from JAFZA"],
    customsRequirements: ["TIR Carnet Carnet de Passages", "Multi-Nation Transit Visas", "Unified Arab Food Consignment Manifest", "Continuous Sensor Satellite Log"],
    routeHighlights: "Specialized long-range regional corridor with experienced multi-country cross-border transit drivers and heavy insulated reefer bodies."
  }
];

export const CARGO_CATEGORIES: CargoCategory[] = [
  {
    id: "fruits-vegetables",
    title: "FRUITS & VEGETABLES",
    category: "Fresh Produce & Perishables",
    tempRange: "+2°C to +8°C",
    humidityRange: "85% – 95% RH",
    airflowRequirement: "High continuous air circulation to eliminate ethylene gas build-up",
    description: "Temperature-controlled road transport engineered for fresh produce loaded directly from Al Aweer Central Market or JAFZA cold stores.",
    icon: "Apple",
    commonProducts: ["Apples, Citrus & Stone Fruits", "Berries & Delicate Soft Fruits", "Leafy Greens & Tomatoes", "Potatoes, Onions & Tubers"],
    handlingProtocols: ["Pre-cooled trailer verification prior to loading", "Controlled ventilation damper management", "T-bar aluminum subfloor for uniform bottom-up airflow", "Pallet tie-down to prevent transit bruising"],
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "dairy",
    title: "DAIRY PRODUCTS",
    category: "Chilled Cold-Chain",
    tempRange: "+2°C to +4°C",
    humidityRange: "70% – 80% RH",
    airflowRequirement: "Uniform medium-velocity airflow to maintain constant envelope",
    description: "Strict cold-chain transportation for dairy products requiring precise sub-degree thermal stability across long-haul GCC highway transit.",
    icon: "Milk",
    commonProducts: ["Fresh Milk, Laban & Yogurts", "Specialty & Hard Cheeses", "Pasteurized Butter & Creams", "Infant Formula & Dairy Desserts"],
    handlingProtocols: ["Zero-tolerance threshold against temperature spikes above +4°C", "Sealed airlock loading docks in JAFZA / Al Aweer", "Multi-point NIST calibrated sensor logging", "Sanitized food-grade antimicrobial trailer interiors"],
    image: "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "meat",
    title: "FRESH & CHILLED MEAT",
    category: "Meat & Poultry",
    tempRange: "0°C to +2°C / -18°C Frozen",
    humidityRange: "80% – 90% RH",
    airflowRequirement: "Precision chill cycle ensuring surface moisture preservation",
    description: "Temperature-controlled transportation for premium fresh beef, lamb, poultry, and vacuum-packed carcasses moving to GCC retail & hospitality.",
    icon: "Beef",
    commonProducts: ["Hanging Carcasses & Primal Cuts", "Vacuum-Packed Chilled Beef & Lamb", "Fresh Poultry Trays", "Halal Certified Specialty Meats"],
    handlingProtocols: ["Halal integrity protocol & certified transport documentation", "Direct transfer from airport cargo & port cold facilities", "Continuous data logger download upon border crossing", "Sanitized stainless tie-bars & load dividers"],
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "frozen-food",
    title: "FROZEN FOOD",
    category: "Deep Sub-Zero Cargo",
    tempRange: "-18°C to -25°C",
    humidityRange: "Low Frost Environment",
    airflowRequirement: "Maximum forced-air sub-zero velocity to counter ambient heat soak",
    description: "Deep-temperature sub-zero transportation for frozen cargo, guaranteeing core temperature preservation even during 50°C summer desert crossings.",
    icon: "Snowflake",
    commonProducts: ["Frozen Poultry & Seafood", "Ice Cream & Frozen Confectionery", "Ready-to-Eat Frozen Meals", "Frozen Bakery & Pre-Proofed Dough"],
    handlingProtocols: ["Pre-chill trailer box down to -20°C before dock doors open", "Continuous Thermo King / Carrier high-output refrigeration", "Heavy-insulation polyurethane wall cores (100mm+)", "Dual thermal curtains over rear barn doors"],
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "foodstuff",
    title: "COMMERCIAL FOODSTUFF",
    category: "Processed & Ambient Food",
    tempRange: "+12°C to +18°C",
    humidityRange: "Controlled Dry 50% – 65% RH",
    airflowRequirement: "Gentle circulating envelope preventing moisture condensation",
    description: "Reliable regional movement of confectionery, chocolates, canned goods, premium oils, and dry bakery goods requiring climate control against heat.",
    icon: "Package",
    commonProducts: ["Fine Chocolates & Cocoa Products", "Specialty Pastas & Gourmet Condiments", "Flavored Syrups & Beverage Bases", "Bakery Mixes & Pastry Supplies"],
    handlingProtocols: ["Thermal stabilization preventing chocolate fat bloom & heat melting", "Dust-sealed rear door gasket verification", "Intermodal pallet consolidation & secure blocking", "Clean dry cargo inspection certificate"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "fmcg",
    title: "TEMPERATURE-SENSITIVE FMCG",
    category: "Fast-Moving Consumer Goods",
    tempRange: "+15°C to +25°C",
    humidityRange: "Standard Humidity Control",
    airflowRequirement: "Even ambient air temperature circulation throughout 15m trailer",
    description: "Cold-chain support for temperature-sensitive cosmetics, personal care, pharmaceutical syrups, nutritional supplements, and specialized FMCG cargo.",
    icon: "Sparkles",
    commonProducts: ["Cosmetics, Creams & Lipsticks", "Supplements & Probiotics", "Gourmet Beverages & Mineral Water", "High-Value Personal Care Goods"],
    handlingProtocols: ["GPS geo-fenced route monitoring", "Tamper-evident bolt seals & biometric locks", "Batch traceability matching customs packing lists", "Humidity-stabilized container atmosphere"],
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80"
  }
];

export const PROCESS_STEPS: ProcessWorkflowStep[] = [
  {
    step: "01",
    title: "BOOK",
    action: "Send Your Shipment Requirements",
    description: "Submit route (Dubai to KSA/Qatar/Kuwait/Bahrain/Oman/Syria), cargo type, required setpoint temp (-18°C to +4°C), and loading date.",
    duration: "Instant Quote Response",
    checkpoint: "Commercial Dispatch Desk",
    icon: "ClipboardCheck"
  },
  {
    step: "02",
    title: "LOAD",
    action: "Cargo Collected at Al Aweer / JAFZA",
    description: "Our 25-Ton Reefer arrives pre-cooled to exact target setpoint. Pallets are secured under sub-zero airlock docks in Dubai.",
    duration: "Pre-Cooling & Dock Loading",
    checkpoint: "Dubai Loading Docks",
    icon: "Truck"
  },
  {
    step: "03",
    title: "TRACK",
    action: "Monitor Transportation Progress",
    description: "Access live satellite telematics, including core temperature readings, ambient conditions, GPS coordinates, and estimated border ETA.",
    duration: "24/7 Live Monitoring",
    checkpoint: "Logistics Control Tower",
    icon: "Activity"
  },
  {
    step: "04",
    title: "CROSS BORDER",
    action: "Professional GCC Cross-Border Transit",
    description: "Experienced multi-entry drivers navigate customs checkpoints (Al Ghuwaifat / Batha / Salwa / Khatmat Malaha) with pre-filed manifests.",
    duration: "Rapid Transit Processing",
    checkpoint: "Customs & Inspection Port",
    icon: "ShieldCheck"
  },
  {
    step: "05",
    title: "DELIVER",
    action: "Destination Delivery in Controlled Conditions",
    description: "Cargo is safely discharged at the client's destination cold store or supermarket distribution center with unbroken thermal log proof.",
    duration: "Confirmed POD & Thermal Log",
    checkpoint: "Client Cold Warehouse",
    icon: "CheckCircle2"
  }
];

export const BORDER_TIMELINE: BorderStep[] = [
  {
    stepNumber: "STAGE 01",
    stage: "DUBAI ORIGIN",
    location: "Al Aweer Central Market / JAFZA Cold Hub",
    description: "Cargo loaded into pre-chilled 15M reefer trailer; commercial invoice, export manifest, health & phytosanitary certificates issued.",
    operationalDetail: "Trailer pre-cooled to setpoint; tamper-evident electronic bolt seal applied.",
    verificationBadge: "Dubai Customs & Municiaplity Certified"
  },
  {
    stepNumber: "STAGE 02",
    stage: "UAE BORDER",
    location: "Al Ghuwaifat Border Terminal (Abu Dhabi/KSA Border) / Hili (Oman Border)",
    description: "UAE export clearance through automated customs gates; vehicle weight bridge verification (25-ton payload limit check).",
    operationalDetail: "Driver transit visa validated; reefer engine telematics cross-checked.",
    verificationBadge: "Federal Customs Authority Clearance"
  },
  {
    stepNumber: "STAGE 03",
    stage: "CUSTOMS / TRANSIT",
    location: "Al Batha (KSA) / Salwa (Qatar) / Khatmat Malaha (Oman) Customs Plaza",
    description: "Entry customs inspection, SFDA / Food Authority random laboratory sampling (if applicable), transit manifest endorsement via FASAH / Bayan.",
    operationalDetail: "Continuous reefer unit operation in inspection bays without power interruption.",
    verificationBadge: "GCC Common Customs & Food Safety Approved"
  },
  {
    stepNumber: "STAGE 04",
    stage: "GCC ROUTE",
    location: "Trans-GCC Highway Arteries (Route 10 / Route 80 / Route 95)",
    description: "High-speed road transit across well-maintained GCC highway corridors with scheduled driver rest rotations at secure logistics truck stops.",
    operationalDetail: "Satellite geofence tracking active; alarms trigger on ±1.5°C thermal deviation.",
    verificationBadge: "24/7 Telematics NOC Surveillance"
  },
  {
    stepNumber: "STAGE 05",
    stage: "FINAL DESTINATION",
    location: "Riyadh, Jeddah, Doha, Kuwait City, Manama, Muscat or Damascus",
    description: "Direct dock arrival at client cold storage facility; seal integrity verified, data logger temp graph exported, delivery receipt signed.",
    operationalDetail: "Zero temperature spikes recorded; physical proof of delivery (POD) archived.",
    verificationBadge: "Unbroken Cold-Chain Proof of Delivery"
  }
];

export const SAMPLE_TELEMATICS_FEED: TelematicsTelemetry = {
  truckId: "TRUCK #AE-025",
  driverName: "Captain Tariq Al-Mansoor (14 Yrs GCC Reefer Exp)",
  origin: "Al Aweer Central Terminal, Dubai, UAE",
  destination: "Riyadh Logistics Park Phase II, Saudi Arabia",
  cargoType: "Fresh Produce & Gourmet Berries",
  setpoint: "+3.5°C",
  ambientTemp: "+43.8°C (Desert Highway)",
  supplyAirTemp: "+2.9°C",
  returnAirTemp: "+3.6°C",
  coreCargoTemp: "+3.4°C",
  humidity: "88% RH",
  doorStatus: "Sealed & Locked",
  fuelLevel: "94% (High-Capacity Tank)",
  reeferMode: "Continuous High Flow",
  currentCoordinates: "24.1287° N, 51.5843° E",
  currentLocationName: "Al Batha / Saudi Border Transit Corridor",
  progressPercent: 68,
  eta: "08:42 AM (Next Day Delivery)",
  status: "IN TRANSIT",
  speedKmH: 84,
  batteryVoltage: "13.8V Nominal",
  lastSyncTime: "Just now (Live IoT Stream)"
};

export const CONTRACT_OPTIONS = [
  {
    id: "spot-trip",
    title: "SPOT / TRIP BASIS",
    subtitle: "Immediate On-Demand Transportation",
    badge: "Maximum Flexibility",
    description: "Ideal for individual consignments, seasonal volume spikes, export surplus, and emergency cross-border cold-chain capacity.",
    features: [
      "Pay-per-trip transparent rates based on destination & cargo",
      "Immediate vehicle dispatch from Dubai within 12–24 hours",
      "Full 25-Ton / 15-Meter Reefer Trailer dedication (no shared cargo risk)",
      "Standard customs manifest assistance & border routing",
      "Live trip tracking link provided directly to cargo owner",
      "Flexible payment terms for registered corporate accounts"
    ],
    ctaText: "REQUEST A TRIP QUOTE",
    highlight: false
  },
  {
    id: "annual-contract",
    title: "FIXED ANNUAL CONTRACT",
    subtitle: "Dedicated Fleet Allocation & Guaranteed SLA",
    badge: "Enterprise Preferred",
    description: "Engineered for FMCG manufacturers, regional food distributors, and retail hypermarkets requiring guaranteed weekly refrigerated capacity.",
    features: [
      "Guaranteed dedicated trailer allocation from our 20-unit fleet",
      "Locked-in seasonal transport rates insulating against spot market surges",
      "Priority loading slots at Al Aweer and JAFZA consolidation hubs",
      "Dedicated Key Account Logistics Manager & customs expediter",
      "Multi-drop route optimization across Saudi Arabia, Qatar & Oman",
      "Enterprise EDI & automated API telematics data integration"
    ],
    ctaText: "DISCUSS AN ANNUAL CONTRACT",
    highlight: true
  }
];

export const WHY_CHOOSE_US_PILLARS = [
  {
    title: "DEDICATED FLEET",
    stat: "20",
    unit: "Reefer Trailers",
    description: "20 dedicated, company-owned heavy 15-meter reefer trailers built to rigorous GCC specifications, never subcontracted to unverified third parties."
  },
  {
    title: "GCC EXPERIENCE",
    stat: "6",
    unit: "Cross-Border Nations",
    description: "Years of operational familiarity navigating GCC customs corridors, bilateral freight treaties, and border crossing inspection procedures."
  },
  {
    title: "TEMPERATURE CONTROL",
    stat: "-18°C → +4°C",
    unit: "Precision Spectrum",
    description: "Calibrated Thermo King & Carrier sub-zero refrigeration equipment capable of maintaining frozen (-18°C) or chilled (+4°C) setpoints in +50°C UAE summers."
  },
  {
    title: "TRACKED TRANSPORT",
    stat: "100%",
    unit: "Satellite Telematics",
    description: "Continuous real-time IoT monitoring tracking trailer coordinates, supply air, return air, and door access with automated deviation alerts."
  },
  {
    title: "BORDER READY",
    stat: "100%",
    unit: "Permit Compliance",
    description: "Full fleet compliance: commercial transit visas, cross-border permits, valid GCC insurance, and phytosanitary handling certifications."
  },
  {
    title: "FLEXIBLE CAPACITY",
    stat: "25T",
    unit: "Spot or Annual",
    description: "Adaptable engagement models catering to both immediate single-trip movements and multi-year corporate distribution contracts."
  }
];

export const UAE_OPERATIONS_HUBS = [
  {
    title: "AL AWEER HUB",
    subtitle: "Dubai Central Fruit & Vegetable Terminal",
    location: "Ras Al Khor / Al Aweer Logistics Zone, Dubai",
    description: "Positioned directly beside Dubai's central wholesale produce and perishables exchange. Provides rapid loading for fresh fruits, vegetables, dairy, and local farm re-exports heading to Saudi Arabia, Oman, Qatar, and Kuwait.",
    stats: ["Immediate access to E44 & E311 highways", "Sub-zero and chilled pre-cooling staging bays", "Direct customs phytosanitary inspector proximity"]
  },
  {
    title: "JAFZA HUB",
    subtitle: "Jebel Ali Free Zone & Port Corridor",
    location: "JAFZA South Logistics Corridor, Dubai",
    description: "Strategically located inside the region's largest maritime freight hub. Enables rapid turnaround of maritime reefer container devanning into our 25-Ton road reefers for onward cross-border transit across the Arabian Peninsula.",
    stats: ["Bonded warehouse & free-zone re-export clearance", "Deep-freeze seafood and imported poultry cross-docking", "Heavy commercial vehicle access directly to E11 & E77"]
  }
];

export const REEFER_FAQS = [
  {
    question: "What is the exact payload and capacity of your reefer trucks?",
    answer: "Our fleet consists of 20 heavy tri-axle reefer trailers, each with a legal maximum road payload capacity of 25 metric tons (approx. 55,000 lbs). Each trailer measures 15 meters in internal length, accommodating up to 33/34 standard Euro-pallets (800x1200mm) or 26 standard industrial pallets (1000x1200mm)."
  },
  {
    question: "What temperature range can your refrigeration units maintain during high summer heat?",
    answer: "Our high-capacity Thermo King SLXi-400 and Carrier Vector refrigeration units maintain continuous temperature stability from -25°C (deep frozen) up to +25°C (controlled ambient). Even in peak UAE/GCC summer temperatures exceeding +50°C, the 100mm high-density polyurethane insulation and high-airflow evaporators ensure zero cold-chain degradation."
  },
  {
    question: "Which GCC and regional destinations do you service from Dubai?",
    answer: "We provide regular road transport from Dubai to all major GCC and regional destinations: Saudi Arabia (Riyadh, Jeddah, Dammam, Medina), Qatar (Doha, Al Wakrah), Kuwait (Kuwait City, Shuwaikh), Bahrain (Manama), Oman (Muscat, Sohar, Salalah), and scheduled transit corridors to Syria."
  },
  {
    question: "How do you handle border customs documentation?",
    answer: "Our operations desk handles and guides all necessary cross-border paperwork including commercial invoices, certificates of origin, SASO/SFDA declarations, FASAH & Bayan electronic manifest submissions, and phytosanitary/health certificates. Our drivers hold valid multi-entry transit visas and GCC commercial permits."
  },
  {
    question: "How is transport pricing calculated?",
    answer: "Pricing is transparent and customized based on: (1) Origin loading terminal (Al Aweer or JAFZA), (2) Exact destination city, (3) Cargo type and temperature setpoint requirement, (4) Shipment weight/tonnage, and (5) Service type (Spot trip vs. Annual volume contract). We do not show fake static rates — contact our desk for an accurate quotation."
  },
  {
    question: "Can I monitor the temperature and location of my cargo while in transit?",
    answer: "Yes. Every reefer trailer is equipped with dual NIST-calibrated satellite IoT data loggers. Clients receive periodic telemetry status updates and can request real-time location and temperature reports from our 24/7 central logistics dispatch desk."
  }
];
