export interface ShipmentRecord {
  trackingId: string;
  sender: string;
  recipient: string;
  origin: string;
  destination: string;
  currentLocation: string;
  status: 'In Transit' | 'Out for Delivery' | 'Delivered' | 'Sorting' | 'Pickup Scheduled';
  statusStep: number; // 1 to 5
  estimatedDelivery: string;
  weight: string;
  packageType: string;
  carrier: string;
  lastUpdated: string;
  driverName?: string;
  driverPhone?: string;
  telemetry?: {
    speed: string;
    temperature: string;
    humidity: string;
    battery: string;
    gpsLock: string;
  };
  timeline: {
    title: string;
    location: string;
    timestamp: string;
    completed: boolean;
  }[];
}

export interface LogisticsProductItem {
  id: string;
  sku: string;
  title: string;
  category: string;
  categorySlug: string;
  tagline: string;
  description: string;
  icon: string;
  badge?: string;
  sla: string;
  payloadCapacity: string;
  transitSpeed: string;
  startingPriceAED: number;
  pricingUnit: string;
  temperatureRange?: string;
  compliance: string[];
  features: string[];
  popularInEmirates: string[];
  industryFit: string[];
}

export interface LogisticsCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  count: number;
  description: string;
}

export const LOGISTICS_BRAND_INFO = {
  name: 'VELOX LOGISTICS',
  legalName: 'Velox Global Logistics UAE LLC',
  tagline: 'Precision Logistics. Intelligent Supply Chains.',
  headquarters: 'Dubai CommerCity, Logistics Hub 4A, Dubai, UAE',
  phone: '+971 4 800 83569',
  dispatchHotline: '+971 4 399 2200',
  email: 'dispatch@veloxlogistics.ae',
  whatsapp: 'https://wa.me/971508924110?text=Hello%20Velox%20Logistics,%20I%20would%20like%20to%20inquire%20about%20express%20freight%20services.',
  stats: {
    deliveriesCompleted: '18.4M+',
    onTimeRate: '99.4%',
    countriesServed: '140+',
    activeClients: '5,200+',
    supportHours: '24/7/365 Command Center',
    fleetSize: '1,450+ Connected Assets',
    coldChainTons: '450K+ Tons Bio-Pharma'
  }
};

export const LOGISTICS_CATEGORIES: LogisticsCategory[] = [
  { id: 'all', name: 'All Solutions (200+)', slug: 'all', icon: 'Layers', count: 204, description: 'Complete catalog of end-to-end global and intra-UAE transport products.' },
  { id: 'last-mile', name: 'Last-Mile & Express', slug: 'last-mile', icon: 'Zap', count: 24, description: 'Hyper-fast intra-city deliveries, 60-min bike dispatch & evening couriers.' },
  { id: 'overland-gcc', name: 'Overland & GCC Freight', slug: 'overland-gcc', icon: 'Truck', count: 24, description: 'Cross-border bonded trucking across UAE, KSA, Qatar, Oman & Kuwait.' },
  { id: 'cold-chain', name: 'Cold-Chain & Pharma', slug: 'cold-chain', icon: 'ThermometerSnowflake', count: 22, description: 'GDP-certified temperature control from -80°C cryo to +25°C ambient.' },
  { id: 'air-cargo', name: 'Air Freight & Charters', slug: 'air-cargo', icon: 'Plane', count: 22, description: 'Priority SkyCargo, Next Flight Out & full Boeing 777F charters from DXB/DWC.' },
  { id: 'ocean-freight', name: 'Ocean & Maritime FCL/LCL', slug: 'ocean-freight', icon: 'Ship', count: 20, description: 'Deep-sea container lines & breakbulk from Jebel Ali Port to global ports.' },
  { id: 'high-value', name: 'High-Value & Secure Escort', slug: 'high-value', icon: 'ShieldCheck', count: 18, description: 'Armored bullion vehicles, GPS lockboxes & discrete luxury retail courier.' },
  { id: 'ecommerce-3pl', name: 'E-Commerce 3PL & Fulfillment', slug: 'ecommerce-3pl', icon: 'PackageCheck', count: 20, description: 'Micro-fulfillment, API integration, same-day COD & automated return logistics.' },
  { id: 'heavy-oversized', name: 'Heavy Lift & Project Cargo', slug: 'heavy-oversized', icon: 'Construction', count: 18, description: 'Multi-axle hydraulic trailers for oil & gas, modular buildings & transformers.' },
  { id: 'aog-aerospace', name: 'AOG Aerospace & Marine Spares', slug: 'aog-aerospace', icon: 'Navigation', count: 18, description: 'Critical 90-minute airside delivery for grounded commercial jets and vessels.' },
  { id: 'customs-freezone', name: 'Customs Brokerage & Free Zone', slug: 'customs-freezone', icon: 'FileCheck', count: 18, description: 'Dubai Customs Mirsal II clearance, JAFZA/DAFZA bonded transshipment.' }
];

export const MOCK_TRACKING_DATABASE: Record<string, ShipmentRecord> = {
  'VLX-2048-7391': {
    trackingId: 'VLX-2048-7391',
    sender: 'Al Futtaim Retail Hub, Dubai',
    recipient: 'Al Maryah Island Office Tower, Abu Dhabi',
    origin: 'Dubai South Logistics District, UAE',
    destination: 'Al Maryah Island, Abu Dhabi, UAE',
    currentLocation: 'Al Ain Transit Gateway Hub 2',
    status: 'In Transit',
    statusStep: 2,
    estimatedDelivery: 'Today, 18:40 GST',
    weight: '14.2 kg',
    packageType: 'Express Heavy Parcel',
    carrier: 'Velox Fleet Van 408',
    lastUpdated: '10 mins ago',
    driverName: 'Tariq Al-Mansoori',
    driverPhone: '+971 50 492 8102',
    timeline: [
      { title: 'Package Picked Up', location: 'Dubai South Fulfillment Hub', timestamp: 'Today, 08:30 AM', completed: true },
      { title: 'In Transit via E11 Highway', location: 'Al Ain Transit Gateway Hub 2', timestamp: 'Today, 12:15 PM', completed: true },
      { title: 'Sorting & Redistribution', location: 'Abu Dhabi Main Sorting Facility', timestamp: 'Estimated 04:00 PM', completed: false },
      { title: 'Out for Courier Delivery', location: 'Al Maryah District Hub', timestamp: 'Estimated 05:30 PM', completed: false },
      { title: 'Delivered & Signed', location: 'Al Maryah Island Office Tower', timestamp: 'Estimated 06:40 PM', completed: false },
    ]
  },
  'VLX-1982-4410': {
    trackingId: 'VLX-1982-4410',
    sender: 'Sharjah Industrial Zone 3',
    recipient: 'Downtown Dubai Fashion Avenue',
    origin: 'Sharjah Hub, UAE',
    destination: 'Downtown Dubai, UAE',
    currentLocation: 'Business Bay Express Dispatch Unit',
    status: 'Out for Delivery',
    statusStep: 4,
    estimatedDelivery: 'Today, 17:25 GST',
    weight: '3.8 kg',
    packageType: 'High-Value Fashion Merchandise',
    carrier: 'Velox Courier Bike 12',
    lastUpdated: '3 mins ago',
    driverName: 'Rashid Khan',
    driverPhone: '+971 55 918 3340',
    timeline: [
      { title: 'Shipment Created', location: 'Sharjah Fulfillment Center', timestamp: 'Yesterday, 06:00 PM', completed: true },
      { title: 'Consolidated & Dispatched', location: 'Sharjah Transit Terminal', timestamp: 'Today, 07:10 AM', completed: true },
      { title: 'Received at Local Hub', location: 'Business Bay Distribution Center', timestamp: 'Today, 11:45 AM', completed: true },
      { title: 'Out for Delivery with Courier', location: 'Business Bay Courier Route 4', timestamp: 'Today, 02:30 PM', completed: true },
      { title: 'Delivered', location: 'Downtown Dubai Fashion Avenue', timestamp: 'Pending Signature', completed: false },
    ]
  },
  'VLX-1847-9021': {
    trackingId: 'VLX-1847-9021',
    sender: 'Ajman Free Zone Pharma Hub',
    recipient: 'Mediclinic City Hospital, Dubai',
    origin: 'Ajman Free Zone, UAE',
    destination: 'Healthcare City, Dubai, UAE',
    currentLocation: 'Healthcare City Receiving Bay',
    status: 'Delivered',
    statusStep: 5,
    estimatedDelivery: 'Today, 15:42 GST (Completed)',
    weight: '8.5 kg',
    packageType: 'Temperature-Controlled Bio-Medical',
    carrier: 'Velox ColdChain Fleet 07',
    lastUpdated: '1 hour ago',
    driverName: 'Zayd Al-Hassan',
    driverPhone: '+971 52 871 0092',
    timeline: [
      { title: 'Cold-Chain Verification', location: 'Ajman Med-Storage Facility', timestamp: 'Today, 07:00 AM', completed: true },
      { title: 'Dispatched via Refrigerated Van', location: 'E311 Highway Route', timestamp: 'Today, 09:30 AM', completed: true },
      { title: 'Arrived at Dubai Distribution', location: 'Deira Healthcare Logistics Node', timestamp: 'Today, 11:00 AM', completed: true },
      { title: 'Out for Express Medical Delivery', location: 'Healthcare City Dispatch Route', timestamp: 'Today, 01:15 PM', completed: true },
      { title: 'Handed Over & Verified', location: 'Mediclinic City Hospital Receiving Bay', timestamp: 'Today, 03:42 PM', completed: true },
    ]
  },
  'VLX-3310-9942': {
    trackingId: 'VLX-3310-9942',
    sender: 'London Heathrow Freight Terminal, UK',
    recipient: 'Jebel Ali Free Zone (JAFZA), Dubai',
    origin: 'London (LHR), United Kingdom',
    destination: 'Jebel Ali Free Zone, Dubai, UAE',
    currentLocation: 'Dubai International Cargo Mega Terminal (DXB)',
    status: 'Sorting',
    statusStep: 3,
    estimatedDelivery: 'Tomorrow, 11:00 GST',
    weight: '480.0 kg',
    packageType: 'Air Freight Cargo Pallet',
    carrier: 'Emirates SkyCargo EK-008',
    lastUpdated: '25 mins ago',
    timeline: [
      { title: 'Cargo Received at LHR', location: 'Heathrow Logistics Hub, UK', timestamp: '29 Aug, 04:00 PM', completed: true },
      { title: 'Customs Export Clearance', location: 'UK Border Force Terminal', timestamp: '30 Aug, 09:15 AM', completed: true },
      { title: 'Air Flight In Transit', location: 'Flight EK-008 (LHR -> DXB)', timestamp: '31 Aug, 02:00 AM', completed: true },
      { title: 'Import Customs Inspection', location: 'DXB Cargo Mega Terminal', timestamp: 'Today, 01:20 PM', completed: true },
      { title: 'Last-Mile Transport to JAFZA', location: 'JAFZA Heavy Fleet Dispatch', timestamp: 'Scheduled Tomorrow 09:00 AM', completed: false },
    ]
  }
};

// 200+ Detailed Logistics Products Catalog
export const LOGISTICS_PRODUCTS: LogisticsProductItem[] = [
  // --- Category: Last-Mile & Express (24 items) ---
  {
    id: 'exp-01',
    sku: 'VLX-LM-001',
    title: 'HyperLocal 60-Minute Urban Bike Dispatch',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Ultra-fast point-to-point document & parcel dispatch across Dubai Business Bay & DIFC.',
    description: 'Guaranteed sub-60-minute pickup and handover for urgent legal briefs, architectural blueprints, and critical contracts via dedicated electric two-wheelers.',
    icon: 'Zap',
    badge: 'Fastest in UAE',
    sla: '< 60 Minutes',
    payloadCapacity: 'Up to 8 kg',
    transitSpeed: 'Point-to-Point Direct',
    startingPriceAED: 75,
    pricingUnit: 'per run',
    compliance: ['Dubai RTA Commercial License', 'Digital Biometric POD'],
    features: ['Direct driver assignment', 'Live real-time SMS tracking', 'Waterproof sealed container', 'Digital signature capture'],
    popularInEmirates: ['Dubai', 'Abu Dhabi'],
    industryFit: ['Legal & Corporate', 'Financial Services', 'Luxury Retail']
  },
  {
    id: 'exp-02',
    sku: 'VLX-LM-002',
    title: 'Same-Day Intra-Emirate 3-Hour Express Van',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Dedicated van courier across Dubai, Sharjah, and Ajman with 180-minute SLA.',
    description: 'Medium freight and multiple box express runs with GPS live routing, anti-shock cushioning, and prioritized city corridor dispatch.',
    icon: 'Truck',
    badge: 'High Demand',
    sla: '< 3 Hours',
    payloadCapacity: 'Up to 350 kg',
    transitSpeed: 'Dedicated Express Corridor',
    startingPriceAED: 180,
    pricingUnit: 'per trip',
    compliance: ['UAE MoIAT Transport Std', 'GPS Live Telemetry'],
    features: ['Mercedes Sprinter fleet', 'Tailgate hydraulic lift', 'SMS delivery window notice', 'Instant electronic invoice'],
    popularInEmirates: ['Dubai', 'Sharjah', 'Ajman'],
    industryFit: ['E-Commerce', 'Medical Supply', 'Hospitality']
  },
  {
    id: 'exp-03',
    sku: 'VLX-LM-003',
    title: 'Midnight Flash Courier (20:00 - 02:00)',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'After-hours high-priority delivery service for emergency hospitality & events.',
    description: 'Specialized night dispatch across all 7 emirates for midnight spares, exhibition setups, VIP luxury concierge, and banquet logistics.',
    icon: 'Clock',
    badge: '24/7 Active',
    sla: '< 2 Hours',
    payloadCapacity: 'Up to 200 kg',
    transitSpeed: 'Night High-Speed Run',
    startingPriceAED: 240,
    pricingUnit: 'per trip',
    compliance: ['Dubai Police Night Security Clear', '24/7 Ops Center'],
    features: ['Zero traffic delays', 'Direct gate pass access', 'Call-before-arrival protocol', 'Photographic proof'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Ras Al Khaimah'],
    industryFit: ['Hospitality', 'Events & Production', 'VIP Concierge']
  },
  {
    id: 'exp-04',
    sku: 'VLX-LM-004',
    title: 'White-Glove Luxury Fashion In-Home Try-On Courier',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Uniformed courier with wait-and-return fitting protocol for haute couture.',
    description: 'Luxury courier delivers designer apparel in garment bags, waits up to 25 minutes for client fitting in Emirates Hills or Palm Jumeirah, and handles on-the-spot reverse returns.',
    icon: 'Sparkles',
    badge: 'VIP White Glove',
    sla: 'Scheduled 1-Hour Slot',
    payloadCapacity: 'Up to 50 kg',
    transitSpeed: 'Climate-Controlled Van',
    startingPriceAED: 320,
    pricingUnit: 'per appointment',
    compliance: ['Luxury Retail Protocol Certified', 'Background Checked Drivers'],
    features: ['Suit & gown hanging racks', 'POS credit card terminal', 'Immediate reverse logistics', 'Fragrance-free cabin'],
    popularInEmirates: ['Dubai', 'Abu Dhabi'],
    industryFit: ['Haute Couture', 'Jewelry & Watches', 'Luxury Department Stores']
  },
  {
    id: 'exp-05',
    sku: 'VLX-LM-005',
    title: 'Fragile Fine Art & Antiques White-Glove Transport',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Air-ride suspension transport with custom foam padding for gallery masterpieces.',
    description: 'Museum-grade transport with shock logging, humidity control, and two-person white-glove uncrating in Alserkal Avenue and Louvre Abu Dhabi.',
    icon: 'Shield',
    badge: 'Museum Grade',
    sla: 'Same-Day Dedicated',
    payloadCapacity: 'Up to 600 kg',
    transitSpeed: 'Air-Ride Suspension Van',
    startingPriceAED: 650,
    pricingUnit: 'per shipment',
    compliance: ['Art Loss Register Verified', 'Transit All-Risk Insurance'],
    features: ['3-axis G-force telemetry', 'Custom wooden crating', 'White cotton glove handling', 'Certificate of arrival'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    industryFit: ['Art Galleries', 'Auction Houses', 'Private Collectors']
  },
  {
    id: 'exp-06',
    sku: 'VLX-LM-006',
    title: 'Autonomous Smart Lockbox Same-Day Drop',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Contactless PIN-protected locker dispatch across 120+ Dubai metro nodes.',
    description: 'Convenient parcel delivery into climate-controlled smart lockers with instant SMS OTP retrieval for customers on the go.',
    icon: 'Lock',
    badge: 'Automated 24/7',
    sla: '< 4 Hours',
    payloadCapacity: 'Up to 20 kg',
    transitSpeed: 'Locker Network Distribution',
    startingPriceAED: 25,
    pricingUnit: 'per locker drop',
    compliance: ['RTA Metro Smart Node Authorized', 'CCTV 24/7 Monitored'],
    features: ['One-time secure OTP', '72-hour collection window', 'Automated return slot', 'Zero wait time'],
    popularInEmirates: ['Dubai', 'Sharjah'],
    industryFit: ['E-Commerce', 'Electronics', 'Consumer Goods']
  },
  {
    id: 'exp-07',
    sku: 'VLX-LM-007',
    title: 'Abu Dhabi Executive Government VIP Dispatch',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Security-cleared direct courier between Dubai DIFC and Abu Dhabi ADGM ministerial offices.',
    description: 'High-security transport for confidential sovereign documents, diplomatic tenders, and stamped notary briefs via armored sedan.',
    icon: 'Award',
    badge: 'Security Cleared',
    sla: '< 2.5 Hours',
    payloadCapacity: 'Up to 40 kg',
    transitSpeed: 'E11 Highway Direct Escort',
    startingPriceAED: 380,
    pricingUnit: 'per trip',
    compliance: ['Security Clear Level 2', 'Tamper-Evident RFID Bag'],
    features: ['Dual-custody verification', 'Encrypted GPS breadcrumb', 'Direct ministerial desk handover', 'Instant notarized receipt'],
    popularInEmirates: ['Dubai', 'Abu Dhabi'],
    industryFit: ['Government & Sovereign', 'Legal', 'Banking']
  },
  {
    id: 'exp-08',
    sku: 'VLX-LM-008',
    title: 'Weekend & Public Holiday Priority Courier',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Uninterrupted 365-day courier operations during Eid, National Day, and weekends.',
    description: 'Zero holiday surcharge disruption for retail and corporate deliveries needing immediate turnaround when other couriers are shut down.',
    icon: 'Calendar',
    badge: '365 Days',
    sla: '< 4 Hours',
    payloadCapacity: 'Up to 150 kg',
    transitSpeed: 'Active Holiday Fleet',
    startingPriceAED: 110,
    pricingUnit: 'per delivery',
    compliance: ['24/7 UAE License', 'SLA Guarantee'],
    features: ['Guaranteed availability', 'No holiday surge multiplier', 'Dedicated holiday hotline', 'WhatsApp live dispatch'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman'],
    industryFit: ['Retail', 'F&B', 'Emergency Maintenance']
  },
  {
    id: 'exp-09',
    sku: 'VLX-LM-009',
    title: 'Heavy Appliance Two-Person Home Installation Delivery',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Delivery, unboxing, room-of-choice placement, and basic hookup for electronics & white goods.',
    description: 'Two trained technicians transport refrigerators, 85-inch OLED displays, and washing machines with staircase dollies and debris removal.',
    icon: 'Tv',
    badge: 'Installation Included',
    sla: 'Scheduled Next-Day / Same-Day',
    payloadCapacity: 'Up to 250 kg',
    transitSpeed: 'Tail-Lift Heavy Van',
    startingPriceAED: 195,
    pricingUnit: 'per appliance',
    compliance: ['Certified Electrical Hookup', 'Floor Protection Guarantee'],
    features: ['Floor protection mats', 'Old appliance disposal', 'Power-on test verification', 'Digital customer signoff'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    industryFit: ['Electronics Retail', 'Home Appliances', 'Interior Fitout']
  },
  {
    id: 'exp-10',
    sku: 'VLX-LM-010',
    title: 'Direct-to-Consumer Food & Gourmet Pastry Van',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Active +16°C climate zone van for chocolates, artisanal cakes, and luxury hampers.',
    description: 'Vibration-damped pastry shelving and precision thermostat control to prevent cake melting or chocolate bloom during Dubai summer heat.',
    icon: 'Coffee',
    badge: 'Chilled Luxury',
    sla: '< 90 Minutes',
    payloadCapacity: 'Up to 80 kg',
    transitSpeed: 'Active Chilled Van',
    startingPriceAED: 90,
    pricingUnit: 'per drop',
    compliance: ['Dubai Municipality Food Code', 'Temp Data-Logger'],
    features: ['Anti-tilt suspension shelving', 'Real-time 16°C cabin telemetry', 'Zero contact handover option', 'Delivery photo with timestamp'],
    popularInEmirates: ['Dubai', 'Abu Dhabi'],
    industryFit: ['Fine Dining', 'Artisan Bakery', 'Gourmet Hamper']
  },
  {
    id: 'exp-11',
    sku: 'VLX-LM-011',
    title: 'Emergency Passport & Visa Hand-Carry Express',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Dedicated courier for urgent embassy submissions and airport terminal departures.',
    description: 'Hand-to-hand delivery of biometric passports, attestation docs, and flight ticket dossiers directly to DXB Terminal 1/2/3 departures curb.',
    icon: 'FileText',
    badge: 'Airport Direct',
    sla: '< 45 Minutes',
    payloadCapacity: 'Up to 5 kg',
    transitSpeed: 'Airport Dedicated Moto',
    startingPriceAED: 140,
    pricingUnit: 'per airport run',
    compliance: ['Airport Security Pass', 'Biometric Chain of Custody'],
    features: ['Curbside driver handover', 'Live terminal gate update', 'Encrypted pouch lock', 'SMS handover code'],
    popularInEmirates: ['Dubai', 'Abu Dhabi'],
    industryFit: ['Corporate Travel', 'Embassy Services', 'Tourism Agencies']
  },
  {
    id: 'exp-12',
    sku: 'VLX-LM-012',
    title: 'Batch Route Multi-Stop E-Commerce Distribution',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Optimized algorithmic multi-drop courier for online stores with 30-100 daily deliveries.',
    description: 'AI-routed clustering across Dubai residential clusters (JVC, Marina, Arabian Ranches) with 99.2% first-attempt delivery success.',
    icon: 'GitBranch',
    badge: 'Best Volume Rate',
    sla: 'Same-Day Batch',
    payloadCapacity: 'Up to 500 kg / 45 drops',
    transitSpeed: 'AI Optimized Circuit',
    startingPriceAED: 18,
    pricingUnit: 'per parcel (min 20)',
    compliance: ['Automated COD Settlement', 'SMS Geolocation Ping'],
    features: ['Predictive customer ETA SMS', 'Cash / Card on Delivery handling', 'Automated redelivery scheduling', 'Merchant API webhook sync'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman'],
    industryFit: ['DTC Brands', 'Cosmetics', 'Fashion Apparel']
  },
  {
    id: 'exp-13',
    sku: 'VLX-LM-013',
    title: 'Construction Blueprint & Tender Document Courier',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Moisture-sealed cylindrical casing transport for A0/A1 project blueprints.',
    description: 'Direct delivery between architectural studios in Dubai Media City and construction site offices in Dubai South / Al Ruwais.',
    icon: 'Compass',
    sla: '< 2.5 Hours',
    payloadCapacity: 'Up to 25 kg',
    transitSpeed: 'Direct Site Dispatch',
    startingPriceAED: 110,
    pricingUnit: 'per tube batch',
    compliance: ['Site Safety Pass', 'Hard Hat Courier Certified'],
    features: ['Waterproof rigid tubes', 'Site engineer sign-off', 'GPS pin confirmation', 'Site cabin delivery'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Ras Al Khaimah'],
    industryFit: ['Engineering & Construction', 'Architecture', 'Real Estate']
  },
  {
    id: 'exp-14',
    sku: 'VLX-LM-014',
    title: 'VIP Residential Gated Community White-List Dispatch',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Pre-registered security access for Emirates Hills, Al Barari, and Jumeirah Golf Estates.',
    description: 'Eliminates gate security delays with pre-cleared QR passes and uniformed drivers adhering to neighborhood noise and speed guidelines.',
    icon: 'Home',
    sla: '< 90 Minutes',
    payloadCapacity: 'Up to 100 kg',
    transitSpeed: 'Pre-Cleared Community Fleet',
    startingPriceAED: 85,
    pricingUnit: 'per drop',
    compliance: ['Security Community Gatepass', 'Electric Quiet Vehicle'],
    features: ['Pre-cleared community gate pass', 'Quiet electric van fleet', 'Ring doorbell notification', 'Doorstep mat placement'],
    popularInEmirates: ['Dubai', 'Abu Dhabi'],
    industryFit: ['Luxury DTC', 'Organic Grocery', 'Concierge Services']
  },
  {
    id: 'exp-15',
    sku: 'VLX-LM-015',
    title: 'Hospital Optical & Dental Model Rapid Runner',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Sanitized shock-damped runner for dental crowns, impressions, and prescription lenses.',
    description: 'Between dental labs in Deira and clinics in Dubai Healthcare City with sub-90-minute turnaround for same-day patient appointments.',
    icon: 'Smile',
    badge: 'Clinical Grade',
    sla: '< 90 Minutes',
    payloadCapacity: 'Up to 10 kg',
    transitSpeed: 'Sanitized Express Moto',
    startingPriceAED: 65,
    pricingUnit: 'per case box',
    compliance: ['DHA Medical Specimen Transport', 'Autoclave Safe Bags'],
    features: ['Anti-vibration foam inserts', 'Sanitized transfer pouch', 'Direct dentist handover', 'Digital clinic logbook'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    industryFit: ['Dental Clinics', 'Optical Labs', 'Medical Laboratories']
  },
  {
    id: 'exp-16',
    sku: 'VLX-LM-016',
    title: 'On-Demand Return & Reverse Pickup Dispatch',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Instant doorstep pickup with barcode scanning and quality inspection for e-commerce returns.',
    description: 'Driver checks item condition, tags, and packaging at the customer door before authorizing instant refund triggers.',
    icon: 'RotateCcw',
    sla: 'Scheduled 2-Hour Window',
    payloadCapacity: 'Up to 30 kg',
    transitSpeed: 'Reverse Route Consolidation',
    startingPriceAED: 28,
    pricingUnit: 'per return item',
    compliance: ['Automated ERP Return Sync', 'Condition Photo Verification'],
    features: ['On-site tag verification', 'Return polybag provided', 'Instant refund API ping', 'Restocking return within 24h'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    industryFit: ['Fashion DTC', 'Consumer Tech', 'Footwear Brands']
  },
  {
    id: 'exp-17',
    sku: 'VLX-LM-017',
    title: 'Exhibition & Trade Show Stand Express Replenishment',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Urgent booth collateral, promotional swag, and badge delivery to DWTC and ADNEC.',
    description: 'Direct dock access and hand-carry to trade booths inside Dubai World Trade Centre and Abu Dhabi ADNEC during busy exhibition days.',
    icon: 'Presentation',
    badge: 'DWTC Direct Dock',
    sla: '< 2 Hours',
    payloadCapacity: 'Up to 200 kg',
    transitSpeed: 'Venue Access Pass Fleet',
    startingPriceAED: 210,
    pricingUnit: 'per booth delivery',
    compliance: ['DWTC Contractor Permit', 'ADNEC Loading Bay Access'],
    features: ['Hall and booth number delivery', 'Loading dock marshalling', 'Empty box storage assistance', 'Emergency replenishment'],
    popularInEmirates: ['Dubai', 'Abu Dhabi'],
    industryFit: ['Event Organizers', 'Corporate Exhibitors', 'Marketing Agencies']
  },
  {
    id: 'exp-18',
    sku: 'VLX-LM-018',
    title: 'Automotive Spare Parts Hotshot Garage Runner',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Urgent brake pads, alternators, and sensors delivered from Al Quoz parts hubs to repair bays.',
    description: 'Prevents lift downtime in supercar and commercial vehicle service workshops across Dubai and Sharjah with 45-minute parts delivery.',
    icon: 'Wrench',
    sla: '< 45 Minutes',
    payloadCapacity: 'Up to 75 kg',
    transitSpeed: 'Hotshot Parts Van',
    startingPriceAED: 55,
    pricingUnit: 'per parts run',
    compliance: ['Al Quoz & Ras Al Khor Fast Lane', 'Part Number Verification'],
    features: ['Cross-reference OEM part number', 'Oil-resistant packaging', 'Direct service bay drop', 'Workshop monthly account billing'],
    popularInEmirates: ['Dubai', 'Sharjah', 'Ajman'],
    industryFit: ['Auto Repair Centers', 'Car Dealerships', 'Fleet Garages']
  },
  {
    id: 'exp-19',
    sku: 'VLX-LM-019',
    title: 'Corporate Stationery & Bulk Printing Office Drop',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Palletized & boxed marketing materials delivered to skyscraper floors with elevator trolleys.',
    description: 'High-volume paper, folders, and corporate merchandise transport with floor-by-floor distribution in DIFC, Downtown, and Sheikh Zayed Road towers.',
    icon: 'Printer',
    sla: 'Same-Day 4-Hour',
    payloadCapacity: 'Up to 400 kg',
    transitSpeed: 'Medium Box Van',
    startingPriceAED: 130,
    pricingUnit: 'per office batch',
    compliance: ['Tower Loading Dock Security Cleared', 'Elevator Trolley Equipped'],
    features: ['Tower service lift booking', 'Heavy hydraulic folding hand-truck', 'Recycling box removal', 'Admin receptionist signoff'],
    popularInEmirates: ['Dubai', 'Abu Dhabi'],
    industryFit: ['Corporate Headquarters', 'Commercial Printers', 'Advertising Agencies']
  },
  {
    id: 'exp-20',
    sku: 'VLX-LM-020',
    title: 'Residential Water & Beverage Palletized Home Courier',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Scheduled recurring delivery of luxury bottled water crates, sparkling drinks, and milk boxes.',
    description: 'Weekly automated drops directly into pantry or garage with carton stacking and empty bottle collection.',
    icon: 'Droplets',
    sla: 'Scheduled AM / PM Slots',
    payloadCapacity: 'Up to 300 kg',
    transitSpeed: 'Route Optimized Van',
    startingPriceAED: 45,
    pricingUnit: 'per residential drop',
    compliance: ['Food Grade Vehicle Sanitization', 'Heavy Lifting Certified'],
    features: ['Pantry stacking service', 'Subscription frequency engine', 'Empty glass crate return', 'WhatsApp delivery reminder'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    industryFit: ['Beverage Brands', 'Water Suppliers', 'Residential Subscriptions']
  },
  {
    id: 'exp-21',
    sku: 'VLX-LM-021',
    title: 'Pet Care & Veterinary Diet Same-Day Express',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Rapid delivery of prescription pet medicine, veterinary food bags, and frozen raw food.',
    description: 'Insulated cooler bag transport for frozen BARF pet foods and veterinary prescriptions with direct door-to-door handoff.',
    icon: 'HeartHandshake',
    sla: '< 2 Hours',
    payloadCapacity: 'Up to 40 kg',
    transitSpeed: 'Insulated Cooler Van',
    startingPriceAED: 40,
    pricingUnit: 'per order',
    compliance: ['Pet Safety Transport Protocol', 'Cold Bag Insulation'],
    features: ['Frozen food insulated thermal bag', 'Vet prescription checking', 'Safe doorstep leave option', 'Pet name personalized notice'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    industryFit: ['Vet Clinics', 'Pet Supply Retailers', 'Pet Nutrition Brands']
  },
  {
    id: 'exp-22',
    sku: 'VLX-LM-022',
    title: 'Luxury Hotel Room Guest Luggage & Baggage Transfer',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Direct luggage transfer between Dubai luxury resorts and DXB airport VIP lounges.',
    description: 'Enables hotel guests to check out, enjoy the city baggage-free, and have luggage waiting at airport check-in or their next hotel suite.',
    icon: 'Briefcase',
    badge: 'Hotel Concierge Direct',
    sla: '< 3 Hours',
    payloadCapacity: 'Up to 15 bags (350 kg)',
    transitSpeed: 'Executive Luggage Van',
    startingPriceAED: 190,
    pricingUnit: 'per transfer (up to 4 bags)',
    compliance: ['Hotel Concierge Association Partner', 'Tamper Luggage Straps'],
    features: ['Leather luxury luggage tags', 'GPS suitcase tracker beacon', 'Bellboy direct handover', 'Insurance up to AED 50,000'],
    popularInEmirates: ['Dubai', 'Abu Dhabi'],
    industryFit: ['Luxury Hotels', 'Travel Concierges', 'Airlines']
  },
  {
    id: 'exp-23',
    sku: 'VLX-LM-023',
    title: 'Solar Panel & Inverter Fragile Hardware Courier',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Shock-cushioned rooftop transport for photovoltaic panels, batteries, and inverters.',
    description: 'Specialized cargo trucks with custom glass panel racks preventing micro-cracking during transit to residential villa installations.',
    icon: 'Sun',
    sla: 'Same-Day Dedicated',
    payloadCapacity: 'Up to 800 kg',
    transitSpeed: 'Specialized Panel Truck',
    startingPriceAED: 360,
    pricingUnit: 'per solar shipment',
    compliance: ['DEWA Certified Solar Transport', 'Glass Rack Verified'],
    features: ['Vertical panel stabilizing clamps', 'Shock sensor loggers', 'Tail-lift lowering', 'On-site uncrating assist'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman'],
    industryFit: ['Clean Energy', 'Solar Contractors', 'Electrical Hardware']
  },
  {
    id: 'exp-24',
    sku: 'VLX-LM-024',
    title: 'Late-Night Emergency Blood & Serum Biological Runner',
    category: 'Last-Mile & Express',
    categorySlug: 'last-mile',
    tagline: 'Priority blue-light permitted transport for blood bank transfusions and urgent pathology.',
    description: 'Certified biohazard transport with active +4°C temperature monitoring between central blood banks and hospital ICUs across the UAE.',
    icon: 'Activity',
    badge: 'Critical Emergency',
    sla: '< 30 Minutes',
    payloadCapacity: 'Up to 15 kg',
    transitSpeed: 'Priority Emergency Response',
    startingPriceAED: 290,
    pricingUnit: 'per emergency dispatch',
    compliance: ['DHA / MoHAP Bio-Medical Clear', 'UN 3373 Biological Cat B'],
    features: ['UN 3373 certified cooler', 'Real-time temperature logger', 'Immediate dispatch without batching', 'Physician signature log'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    industryFit: ['Hospitals & ICUs', 'Blood Banks', 'Pathology Labs']
  },

  // --- Category: Overland & GCC Freight (24 items) ---
  {
    id: 'ovl-01',
    sku: 'VLX-OV-101',
    title: 'UAE to Saudi Arabia (Riyadh & Jeddah) Express FTL Truckload',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Dedicated 40ft bonded articulated truck via Batha border with 48-hour delivery.',
    description: 'Full Truck Load (FTL) service with pre-cleared Saudi customs documentation (SABER, ZATCA, Bayan portal) and dual-driver non-stop transit.',
    icon: 'Truck',
    badge: 'GCC Flagship',
    sla: '48 - 60 Hours',
    payloadCapacity: 'Up to 24,000 kg (24 Tons)',
    transitSpeed: 'Continuous Dual-Driver Team',
    startingPriceAED: 5400,
    pricingUnit: 'per 40ft FTL trailer',
    compliance: ['GCC Bonded Transit Manifest', 'ZATCA E-Invoicing Ready', 'SABER Certification'],
    features: ['Air-ride 40ft box trailer', 'GPS satellite geo-fencing', 'Border pre-clearance fast track', 'Door-to-door delivery in Riyadh'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    industryFit: ['Retail & FMCG', 'Industrial Equipment', 'Automotive Aftermarket']
  },
  {
    id: 'ovl-02',
    sku: 'VLX-OV-102',
    title: 'UAE to Qatar (Doha) Daily Groupage LTL Freight',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Consolidated Less-than-Truckload (LTL) cargo departing Dubai 4x weekly to Doha.',
    description: 'Cost-effective palletized cargo consolidation with automated customs clearance via Salwa border and last-mile distribution across Doha Industrial Area.',
    icon: 'Layers',
    badge: '4x Weekly Departure',
    sla: '3 - 4 Days',
    payloadCapacity: '100 kg to 8,000 kg',
    transitSpeed: 'Scheduled Groupage Linehaul',
    startingPriceAED: 450,
    pricingUnit: 'per pallet (CBM base)',
    compliance: ['Qatar Customs General Authority Clear', 'GCC Certificate of Origin'],
    features: ['Scheduled Tuesday/Thursday runs', 'Individual tracking per pallet', 'Bonded transshipment at border', 'Doha bonded warehouse storage'],
    popularInEmirates: ['Dubai', 'Sharjah'],
    industryFit: ['Building Materials', 'Consumer Goods', 'Electronics']
  },
  {
    id: 'ovl-03',
    sku: 'VLX-OV-103',
    title: 'UAE to Oman (Muscat & Sohar) Overnight Road Express',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Fast border transit via Hatta & Al Ain borders with morning arrival in Muscat.',
    description: 'Overnight linehaul service connecting Dubai distribution centers directly with Sohar Free Zone and Muscat commercial districts.',
    icon: 'MapPin',
    badge: 'Overnight SLA',
    sla: '14 - 18 Hours',
    payloadCapacity: 'Up to 12,000 kg',
    transitSpeed: 'Direct Night Linehaul',
    startingPriceAED: 2200,
    pricingUnit: 'per 24ft truck',
    compliance: ['Bayan Oman Customs Portal', 'GCC Common Market Permit'],
    features: ['Hatta border fast lane', 'Next-morning delivery in Muscat', 'Full customs representation', 'Temperature monitoring available'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Ras Al Khaimah'],
    industryFit: ['FMCG', 'Chemicals', 'Hardware & Tools']
  },
  {
    id: 'ovl-04',
    sku: 'VLX-OV-104',
    title: 'UAE to Kuwait (Shuwaikh & Sulaibiya) Bonded Road Cargo',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Reliable bonded road corridor across KSA transit to Kuwait City.',
    description: 'Heavy cargo and containerized road transport with electronic TIR carnet security seals for zero border inspection delay.',
    icon: 'Shield',
    sla: '3 - 4 Days',
    payloadCapacity: 'Up to 22,000 kg',
    transitSpeed: 'Sealed Bonded Corridor',
    startingPriceAED: 6800,
    pricingUnit: 'per 40ft trailer',
    compliance: ['TIR Carnet International', 'Kuwait General Admin of Customs'],
    features: ['Tamper-proof electronic bolt seal', 'Dual KSA transit visa cleared', 'Full insurance cover', 'Kuwait City hub offloading'],
    popularInEmirates: ['Dubai', 'Abu Dhabi'],
    industryFit: ['Heavy Machinery', 'Food Products', 'Textiles']
  },
  {
    id: 'ovl-05',
    sku: 'VLX-OV-105',
    title: 'UAE to Bahrain (Manama) Road Express via King Fahd Causeway',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Direct road freight passing KSA corridor with rapid King Fahd Causeway transit.',
    description: 'Express overland service for high-value components and commercial shipments into Manama and Bahrain Logistics Zone.',
    icon: 'Globe',
    sla: '2.5 - 3 Days',
    payloadCapacity: 'Up to 15,000 kg',
    transitSpeed: 'Express Causeway Transit',
    startingPriceAED: 5900,
    pricingUnit: 'per trailer',
    compliance: ['Bahrain OFAC & Customs Cleared', 'SABER KSA Transit'],
    features: ['Causeway priority booking', 'Automated customs duty calc', 'Live GPS position updates', 'Warehouse delivery in Sitra/Hidd'],
    popularInEmirates: ['Dubai', 'Sharjah'],
    industryFit: ['Electronics', 'Automotive', 'Pharmaceuticals']
  },
  {
    id: 'ovl-06',
    sku: 'VLX-OV-106',
    title: 'Cross-Border Temperature-Controlled Reefer Linehaul (KSA & GCC)',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Multi-temperature -25°C to +18°C refrigerated semi-trailers for Gulf food & pharma supply.',
    description: 'Thermo King high-output refrigerated trailers with live IoT satellite temperature loggers maintaining rigorous chill chains across desert routes.',
    icon: 'ThermometerSnowflake',
    badge: 'IoT Monitored',
    sla: '2 - 3 Days',
    payloadCapacity: 'Up to 20,000 kg',
    transitSpeed: 'Continuous Cooling Linehaul',
    startingPriceAED: 7200,
    pricingUnit: 'per 40ft reefer trailer',
    compliance: ['SFDA Saudi Food & Drug Cleared', 'HACCP Overland Standard'],
    features: ['Thermo King dual-temp units', 'Live 10-minute satellite temp ping', 'Automated alert on ±0.5°C drift', 'Pre-tripped hygienic trailers'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Ras Al Khaimah'],
    industryFit: ['Dairy & Meat Importers', 'Fresh Produce', 'Pharmaceuticals']
  },
  {
    id: 'ovl-07',
    sku: 'VLX-OV-107',
    title: 'Heavy Lowbed & Multi-Axle Over-Dimensional Transport',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Hydraulic low-loaders for transformers, oilfield skids, and earthmoving machinery.',
    description: 'Complete heavy-haul solution including route surveys, police escorts, bridge load clearances, and specialized pilot cars across the UAE & GCC.',
    icon: 'Construction',
    badge: 'Heavy Lift',
    sla: 'Scheduled Project Window',
    payloadCapacity: 'Up to 120,000 kg (120 Tons)',
    transitSpeed: 'Permitted Escort Speed',
    startingPriceAED: 9500,
    pricingUnit: 'per heavy transport move',
    compliance: ['RTA Heavy Load Permit', 'Dubai Police Escort Clearance', 'MoEI Road Approvals'],
    features: ['Hydraulic steering multi-axle', 'Pre-trip bridge route survey', 'Dedicated front/rear escort cars', 'Hydraulic jacking & skidding'],
    popularInEmirates: ['Abu Dhabi', 'Dubai', 'Ras Al Khaimah'],
    industryFit: ['Oil & Gas', 'Power & Utilities', 'Heavy Construction']
  },
  {
    id: 'ovl-08',
    sku: 'VLX-OV-108',
    title: 'Side-Curtain Curtain-Sider Tautliner Trailer Fleet',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Rapid side-loading for palletized cargo, beverages, and industrial manufacturing goods.',
    description: 'Enables dual-side forklift access for 15-minute complete trailer turnaround in JAFZA, Khalifa Port (KPFTZ), and ICAD Abu Dhabi.',
    icon: 'Layers',
    sla: 'Daily Scheduled',
    payloadCapacity: 'Up to 24,000 kg / 33 Euro Pallets',
    transitSpeed: 'Inter-Emirate Fast Run',
    startingPriceAED: 1650,
    pricingUnit: 'per trailer trip',
    compliance: ['EN 12642 XL Load Securing', 'TUV Certified Curtains'],
    features: ['Full 13.6m side access', 'Sliding roof for crane loading', 'Internal load-lock bars', 'Weatherproof heavy-duty vinyl'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    industryFit: ['Beverage Bottling', 'Packaging Materials', 'Building Boards']
  },
  {
    id: 'ovl-09',
    sku: 'VLX-OV-109',
    title: 'Hazardous ADR Chemical Tanker & Box Freight',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Class 2, 3, 4, 5, 6, 8, 9 hazardous materials transport with certified ADR drivers.',
    description: 'Equipped with spill kits, emergency shutoffs, grounding cables, and Civil Defense approvals for industrial solvent and lubricant logistics.',
    icon: 'AlertTriangle',
    badge: 'ADR & Civil Defense',
    sla: '24 - 48 Hours',
    payloadCapacity: 'Up to 20,000 kg',
    transitSpeed: 'Regulated Dangerous Goods Route',
    startingPriceAED: 3800,
    pricingUnit: 'per ADR transport',
    compliance: ['UAE Civil Defense Dangerous Goods', 'ADR European Treaty Compliant'],
    features: ['Hazmat emergency protocol team', 'Spill containment gear on board', 'Direct Civil Defense reporting', 'GPS speed and geofence limiter'],
    popularInEmirates: ['Abu Dhabi', 'Dubai', 'Sharjah'],
    industryFit: ['Chemical Manufacturing', 'Paints & Coatings', 'Oilfield Services']
  },
  {
    id: 'ovl-10',
    sku: 'VLX-OV-110',
    title: 'Flatbed Trailer for Structural Steel & Precast Concrete',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: '40ft & 50ft rigid flatbed trailers with twist locks and heavy-duty steel stanchions.',
    description: 'Moving reinforcement steel bars, structural I-beams, pipes, and precast wall panels directly to skyscraper and infrastructure project sites.',
    icon: 'Maximize',
    sla: 'Same-Day / Next-Day',
    payloadCapacity: 'Up to 28,000 kg',
    transitSpeed: 'Heavy Highway Route',
    startingPriceAED: 1850,
    pricingUnit: 'per flatbed move',
    compliance: ['RTA Commercial Vehicle Standard', 'Heavy Lashing ISO 1496'],
    features: ['Grade 80 ratchet lashing chains', 'Container twist locks', 'Extendable chassis options', 'Site-ready timber dunnage'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Ras Al Khaimah', 'Fujairah'],
    industryFit: ['Steel Fabricators', 'Precast Concrete Yards', 'Civil Contractors']
  },
  {
    id: 'ovl-11',
    sku: 'VLX-OV-111',
    title: 'Bonded Port-to-Port Shunting (Jebel Ali <-> Khalifa Port)',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'High-frequency container shuttle connecting DP World Jebel Ali and AD Ports Khalifa.',
    description: 'Automated electronic token gate processing and bonded corridor transfer for sea-air transshipment and multi-port container balancing.',
    icon: 'RefreshCw',
    badge: 'Port Shunting 24/7',
    sla: '< 4 Hours Port-to-Port',
    payloadCapacity: '20ft & 40ft ISO Containers',
    transitSpeed: 'Dedicated Highway Corridor',
    startingPriceAED: 850,
    pricingUnit: 'per container move',
    compliance: ['DP World Jebel Ali Token Clear', 'AD Ports Khalifa Port Gatepass'],
    features: ['Direct port terminal tractor entry', 'Automated container EIR scan', 'No double-handling of seals', '24/7 driver rotation pool'],
    popularInEmirates: ['Dubai', 'Abu Dhabi'],
    industryFit: ['Shipping Lines', 'Freight Forwarders', 'Free Zone Importers']
  },
  {
    id: 'ovl-12',
    sku: 'VLX-OV-112',
    title: 'Inter-Emirates Daily Milk-Run Supplier Consolidation',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Scheduled recurring multi-factory pickup loop across Sharjah, Ajman, and Dubai Industrial City.',
    description: 'Consolidates components from tier-2 suppliers into single daily drops at master assembly plants in KIZAD and Dubai South.',
    icon: 'Repeat',
    sla: 'Daily Fixed Schedule',
    payloadCapacity: 'Up to 8,000 kg per circuit',
    transitSpeed: 'Scheduled Industrial Loop',
    startingPriceAED: 950,
    pricingUnit: 'per milk-run circuit',
    compliance: ['Just-In-Time (JIT) Lean Standard', 'ERP Slot Booking'],
    features: ['Synchronized dock arrival times', 'Barcode crate scanning', 'Reusable returnable totes', 'Zero inventory holding at plant'],
    popularInEmirates: ['Dubai', 'Sharjah', 'Abu Dhabi', 'Ajman'],
    industryFit: ['Automotive Assembly', 'Electronics Manufacturing', 'FMCG Packaging']
  },
  {
    id: 'ovl-13',
    sku: 'VLX-OV-113',
    title: 'Closed Box Anti-Dust Truck for Luxury Furniture Distribution',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Padded box trucks with carpeted interior walls and tie-down rails for high-end decor.',
    description: 'Zero sand-dust penetration with double rubberized door seals and pneumatic suspension for Italian marble tables and delicate sofas.',
    icon: 'Box',
    sla: 'Same-Day Inter-Emirate',
    payloadCapacity: 'Up to 6,000 kg (45 CBM)',
    transitSpeed: 'Air-Suspension Box Truck',
    startingPriceAED: 1200,
    pricingUnit: 'per trip',
    compliance: ['Dust-Free Seal Certification', 'Padded Cargo Security'],
    features: ['Felt-padded interior battens', 'Heavy-duty moving blankets', 'Smooth ramp and tail lift', 'Trained luxury furniture handlers'],
    popularInEmirates: ['Dubai', 'Abu Dhabi'],
    industryFit: ['Luxury Furniture', 'Interior Fit-Out', 'High-End Retail']
  },
  {
    id: 'ovl-14',
    sku: 'VLX-OV-114',
    title: 'ISO Tank Container Transport for Liquid Food & Chemicals',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Transport of 24,000L stainless steel ISO tank containers on dedicated drop-frame chassis.',
    description: 'Moving bulk edible oils, fruit juice concentrates, liquid glycols, and technical lubricants across the UAE and GCC borders.',
    icon: 'Disc',
    sla: 'Next-Day / Scheduled',
    payloadCapacity: 'Up to 24,000 Litres',
    transitSpeed: 'Drop-Frame Tank Chassis',
    startingPriceAED: 2400,
    pricingUnit: 'per tank chassis move',
    compliance: ['Food Grade / Chemical ISO Tank', 'Steam Heating Station Ready'],
    features: ['Low center-of-gravity chassis', 'Steam heating connection check', 'Baffle surge protection check', 'Grounding cables attached'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Fujairah'],
    industryFit: ['Food & Beverage Bulk', 'Chemical Industries', 'Lubricant Plants']
  },
  {
    id: 'ovl-15',
    sku: 'VLX-OV-115',
    title: 'Livestock & Racehorse Climate-Controlled Equine Transporter',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Luxury equine horseboxes with video telemetry for Meydan and Abu Dhabi equestrian clubs.',
    description: 'Padded rubber partitions, air filtration, non-slip flooring, and onboard veterinary monitoring for champion Arabian thoroughbreds.',
    icon: 'Feather',
    badge: 'Royal Equine',
    sla: 'Dedicated Charter Run',
    payloadCapacity: 'Up to 6 Horses',
    transitSpeed: 'Gentle Air-Ride Truck',
    startingPriceAED: 3500,
    pricingUnit: 'per horsebox transport',
    compliance: ['UAE Equestrian Federation Approved', 'Veterinary Transit Clear'],
    features: ['Live cabin CCTV video feed', 'Automatic water dispensers', 'Adjustable stall partitions', 'Groom attendant seating cabin'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    industryFit: ['Equestrian Clubs', 'Royal Stables', 'Veterinary Centers']
  },
  {
    id: 'ovl-16',
    sku: 'VLX-OV-116',
    title: 'Automotive Enclosed Car Carrier (Supercars & Exotics)',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Hydraulic lift single & multi-car enclosed transporters for Ferraris, Lamborghinis, and Bugattis.',
    description: 'Complete rock-chip, dust, and UV protection with ultra-low approach angle ramps for race cars and museum classics across the GCC.',
    icon: 'ShieldCheck',
    badge: 'Supercar Escort',
    sla: 'Dedicated Express Run',
    payloadCapacity: '1 to 4 Supercars',
    transitSpeed: 'Enclosed Luxury Transporter',
    startingPriceAED: 1800,
    pricingUnit: 'per car (Dubai <-> Abu Dhabi)',
    compliance: ['Exotic Car Insurance (AED 10M+)', 'Zero-Ground-Clearance Ramps'],
    features: ['Hydraulic horizontal lift ramp', 'Soft microfiber wheel straps', 'Dustproof insulated cabin', 'White-glove loading protocol'],
    popularInEmirates: ['Dubai', 'Abu Dhabi'],
    industryFit: ['Supercar Dealerships', 'VIP Private Collectors', 'Track Racing Teams']
  },
  {
    id: 'ovl-17',
    sku: 'VLX-OV-117',
    title: 'Dry Bulk Pneumatic Silo Tanker (Cement & Fly Ash)',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Pneumatic blower discharge tankers for bulk powder transport to ready-mix concrete plants.',
    description: 'Rapid 45-minute pneumatic discharge into storage silos at major infrastructure and bridge development sites.',
    icon: 'Database',
    sla: '24/7 Continuous Feed',
    payloadCapacity: 'Up to 35,000 kg',
    transitSpeed: 'Continuous Silo Linehaul',
    startingPriceAED: 1400,
    pricingUnit: 'per tanker discharge',
    compliance: ['MoEI Road Weight Limit Approved', 'Compressor Air Filtered'],
    features: ['Onboard high-volume compressor', 'Fluidized bed aerator', 'Anti-clogging discharge hose', 'Dust-free silo connection'],
    popularInEmirates: ['Ras Al Khaimah', 'Dubai', 'Abu Dhabi', 'Fujairah'],
    industryFit: ['Ready-Mix Plants', 'Cement Factories', 'Major Infrastructure']
  },
  {
    id: 'ovl-18',
    sku: 'VLX-OV-118',
    title: 'Dump Truck & Aggregates Tipper Fleet (Fujairah Quarries)',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Heavy 32 CBM hardox steel tippers moving limestone, gabbro, and sub-base rock.',
    description: 'High-volume aggregate movement from Fujairah and Ras Al Khaimah mountain quarries to artificial island and highway reclamation projects.',
    icon: 'Layers',
    sla: 'Round-the-Clock Shifts',
    payloadCapacity: 'Up to 45 Tons per tipper',
    transitSpeed: 'Quarry-to-Site Line',
    startingPriceAED: 850,
    pricingUnit: 'per trip',
    compliance: ['Quarry Environmental Transport Permit', 'Automatic Tarping System'],
    features: ['Hardox 450 wear plate bodies', 'Automatic pneumatic tarpaulins', 'Weighbridge telematics interface', 'Reinforced off-road tires'],
    popularInEmirates: ['Fujairah', 'Ras Al Khaimah', 'Dubai', 'Abu Dhabi'],
    industryFit: ['Quarry Operators', 'Road Contractors', 'Island Developers']
  },
  {
    id: 'ovl-19',
    sku: 'VLX-OV-119',
    title: 'Emergency Fuel & Diesel On-Site Bowser Refueling',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Mobile fuel tankers delivering ENOC/ADNOC diesel directly into backup generators and construction fleets.',
    description: 'Eliminates machine downtime with calibrated digital meters, automated fuel receipts, and 24/7 emergency dispatch across remote job sites.',
    icon: 'Flame',
    badge: '24/7 On-Site Fuel',
    sla: '< 3 Hours Emergency SLA',
    payloadCapacity: '5,000 to 20,000 Litres',
    transitSpeed: 'Direct Bowser Dispatch',
    startingPriceAED: 450,
    pricingUnit: 'delivery fee + diesel at pump rate',
    compliance: ['Civil Defense Fuel Dispense Cleared', 'Calibrated Digital Flowmeter'],
    features: ['50m heavy fuel hose reel', 'Calibrated digital printer meter', 'Spill kit & grounding reels', 'Direct tank filling service'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ras Al Khaimah'],
    industryFit: ['Construction Sites', 'Events & Generators', 'Fleet Yards']
  },
  {
    id: 'ovl-20',
    sku: 'VLX-OV-120',
    title: 'GCC Bonded Escort for In-Transit Duty-Exempt Shipments',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Customs escort vehicles accompanying transit cargo across UAE territory to exit borders.',
    description: 'Satisfies UAE Federal Customs Authority requirements for transit shipments without paying domestic import duties or VAT.',
    icon: 'Shield',
    sla: 'Scheduled Transit Run',
    payloadCapacity: 'Up to 5 Convoys',
    transitSpeed: 'Official Escort Protocol',
    startingPriceAED: 2100,
    pricingUnit: 'per transit escort',
    compliance: ['UAE Federal Customs Authority Escort Clear', 'Customs Guarantee Bond'],
    features: ['Dedicated customs escort officer', 'Lead pilot security vehicle', 'Sealed convoy route management', 'Direct exit border signoff'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    industryFit: ['Freight Forwarders', 'Transit Traders', 'International Shipping']
  },
  {
    id: 'ovl-21',
    sku: 'VLX-OV-121',
    title: 'KSA Riyadh Metro & Giga-Project Logistics Corridor',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Specialized supply pipeline directly into NEOM, Red Sea Project, and Riyadh Qiddiya.',
    description: 'Turnkey logistics corridor managing desert off-road access permits, camp drop-offs, and dedicated staging hubs inside Saudi Arabia.',
    icon: 'Globe',
    badge: 'KSA Mega Projects',
    sla: '3 - 5 Days',
    payloadCapacity: 'Up to 500 Tons weekly',
    transitSpeed: 'Dedicated Staging Corridor',
    startingPriceAED: 8900,
    pricingUnit: 'per trailer to project site',
    compliance: ['NEOM Vendor Pass Ready', 'Red Sea Global Access Cleared'],
    features: ['Staging depot in Tabuk & Riyadh', 'Off-road all-wheel-drive trucks', 'Camp consolidation services', 'Satellite communications on board'],
    popularInEmirates: ['Dubai', 'Abu Dhabi'],
    industryFit: ['Mega Project Contractors', 'Hospitality Fitout', 'Renewable Infrastructure']
  },
  {
    id: 'ovl-22',
    sku: 'VLX-OV-122',
    title: 'Refrigerated LTL Consolidated Pallet Hub to KSA',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Weekly chilled consolidated departures for boutique gourmet suppliers and chocolatiers.',
    description: 'Send 1 to 5 chilled pallets (+4°C or +15°C) to Riyadh and Jeddah supermarkets without renting a full 40ft reefer truck.',
    icon: 'ThermometerSnowflake',
    badge: 'Chilled LTL',
    sla: '3 Days',
    payloadCapacity: '1 to 8 Chilled Pallets',
    transitSpeed: 'Consolidated Chilled Run',
    startingPriceAED: 1150,
    pricingUnit: 'per chilled pallet',
    compliance: ['SFDA Import License Support', 'Live Temp Data Printout'],
    features: ['Weekly Tuesday & Saturday cutoffs', 'Dual temperature compartments', 'Door-to-door store delivery', 'Thermal blanket wrapping'],
    popularInEmirates: ['Dubai', 'Sharjah'],
    industryFit: ['Specialty Food', 'Chocolates & Pastry', 'Organic Produce']
  },
  {
    id: 'ovl-23',
    sku: 'VLX-OV-123',
    title: 'Cross-Border Reverse Logistics & Warranty Return Fleet',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Managing RMA warranty returns from GCC retail networks back to Dubai central repair hubs.',
    description: 'Consolidation of defective consumer electronics, luxury watches, and industrial parts from Riyadh, Kuwait, and Doha into JAFZA.',
    icon: 'RotateCcw',
    sla: '4 - 6 Days',
    payloadCapacity: 'Up to 10,000 kg',
    transitSpeed: 'Consolidated Return Corridor',
    startingPriceAED: 380,
    pricingUnit: 'per return consignment',
    compliance: ['Customs Repair & Return Duty Exemption', 'Serial Number Verification'],
    features: ['RMA barcode tracking', 'Customs temporary export relief', 'Consolidated customs clearance', 'Direct service center intake'],
    popularInEmirates: ['Dubai', 'Abu Dhabi'],
    industryFit: ['Consumer Tech Brands', 'Industrial Machinery', 'Luxury Watchmakers']
  },
  {
    id: 'ovl-24',
    sku: 'VLX-OV-124',
    title: 'Inter-Freezone Transfer (JAFZA <-> DAFZA <-> KIZAD)',
    category: 'Overland & GCC Freight',
    categorySlug: 'overland-gcc',
    tagline: 'Duty-free bonded transport between all major UAE Free Trade Zones with Mirsal II Bill of Entry.',
    description: 'Seamless cargo transfer between free zones without payment of customs duties or VAT, preserving trade status.',
    icon: 'CheckCircle2',
    badge: 'Zero Duty Transfer',
    sla: 'Same-Day 4-Hour',
    payloadCapacity: 'Up to 20,000 kg',
    transitSpeed: 'Bonded Inter-Zone Shuttle',
    startingPriceAED: 650,
    pricingUnit: 'per 20ft / 40ft transfer',
    compliance: ['Dubai Customs Mirsal II Inter-Freezone', 'AD Customs Freezone Transfer'],
    features: ['Instant digital Bill of Entry creation', 'Bonded vehicle fleet with GPS seals', 'Zero domestic VAT liability', 'Automated inventory reconciliation'],
    popularInEmirates: ['Dubai', 'Abu Dhabi', 'Sharjah'],
    industryFit: ['Trading Companies', '3PL Warehouses', 'Electronics Distributors']
  }
];

export const MOCK_LIVE_VEHICLES = [
  { id: 'VLX-VAN-104', type: 'Sprinter EV Express', driver: 'Tariq Mansoori', location: 'Sheikh Zayed Rd / Business Bay', speed: '78 km/h', status: 'In Transit', temp: '+21°C', battery: '82%', destination: 'DIFC Gate Precinct', eta: '12 mins' },
  { id: 'VLX-REEF-088', type: 'Thermo King Heavy Reefer', driver: 'Rashid Al-Falasi', location: 'E11 Highway / Ghantoot', speed: '92 km/h', status: 'In Transit', temp: '-21.4°C', battery: '96%', destination: 'Khalifa Port Cold Hub', eta: '38 mins' },
  { id: 'VLX-BOND-201', type: '40ft Bonded FTL Trailer', driver: 'Zubair Qasim', location: 'Batha Border Crossing (KSA)', speed: '14 km/h', status: 'Border Fast-Track', temp: '+24°C', battery: '100%', destination: 'Riyadh Dry Port', eta: '4.2 hrs' },
  { id: 'VLX-MOTO-019', type: 'Electric City Runner', driver: 'Farhan Azim', location: 'Alserkal Avenue / Al Quoz', speed: '45 km/h', status: 'Out for Delivery', temp: 'Ambient', battery: '64%', destination: 'Downtown Address Hotel', eta: '8 mins' },
  { id: 'VLX-FLT-305', type: 'Lowbed Heavy Loader', driver: 'Sultan Al-Ketbi', location: 'ICAD Industrial Zone, Abu Dhabi', speed: '55 km/h', status: 'Police Escort Active', temp: 'N/A', battery: '90%', destination: 'Barakah Nuclear Site', eta: '2.5 hrs' }
];

export interface IndustrySolution {
  id: string;
  name: string;
  icon: string;
  headline: string;
  description: string;
  metrics: string;
  keyFeatures: string[];
  caseSnippet: string;
  image: string;
}

export interface RegionalHub {
  city: string;
  country: string;
  type: string;
  dailyVolume: string;
  avgLeadTime: string;
  status: string;
}

export interface LogisticsServiceItem {
  id: string;
  code: string;
  badge: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  sla: string;
  startingPrice: string;
  features: string[];
}

export const LOGISTICS_SERVICES: LogisticsServiceItem[] = [
  {
    id: 'hyperlocal-express',
    code: '01',
    badge: 'SUB-60 MIN SLA',
    icon: 'Activity',
    title: 'HyperLocal Express Courier',
    tagline: 'Point-to-point intra-city urgent courier in Dubai & Abu Dhabi.',
    description: 'Bypassing central sortation depots with dedicated point-to-point electric couriers and instant GPS tracking.',
    sla: '45 - 60 Minutes',
    startingPrice: 'AED 35 / dispatch',
    features: ['Direct point-to-point courier', 'Real-time telemetry link', 'Digital proof of delivery OTP', 'Zero-emission EV fleet options']
  },
  {
    id: 'temperature-coldchain',
    code: '02',
    badge: 'GDP CERTIFIED',
    icon: 'Truck',
    title: 'Pharma & Food Cold-Chain',
    tagline: 'Active refrigeration monitoring from -80°C to +25°C.',
    description: 'Thermo King multi-zone reefers with satellite IoT thermal loggers for biopharma, clinical trials, and fresh gourmet foods.',
    sla: 'Same-Day / Next-Day',
    startingPrice: 'AED 180 / run',
    features: ['Continuous IoT temperature logging', 'MoHAP & WHO compliance', 'Active dual-compressor fleet', 'Emergency cold triage protocol']
  },
  {
    id: 'interstate-freight',
    code: '03',
    badge: 'CROSS-GCC HIGHWAY',
    icon: 'Container',
    title: 'Cross-GCC Overland Freight',
    tagline: 'Daily scheduled linehauls linking UAE to KSA, Qatar, Oman & Kuwait.',
    description: 'Fast-track Bayan customs pre-clearance at Batha and Ghuwaifat borders with full-truckload (FTL) and LTL consolidation.',
    sla: '24 - 48 Hours GCC',
    startingPrice: 'AED 1,250 / pallet',
    features: ['Digital customs Bayan processing', 'Bonded transit corridors', 'Dual-driver non-stop express', 'Live satellite border telemetry']
  },
  {
    id: 'bonded-fulfillment',
    code: '04',
    badge: 'FREE ZONE BONDED',
    icon: 'Warehouse',
    title: 'Smart E-Commerce Fulfillment',
    tagline: '120,000 sq.ft bonded hub at Dubai South & JAFZA.',
    description: 'Automated robotics picking, direct Shopify/WooCommerce webhooks, and 24-hour COD remittance to UAE bank accounts.',
    sla: 'Same-Day Dispatch',
    startingPrice: 'AED 4.50 / order pick',
    features: ['Same-day order cutoff 4 PM', 'Automated 24h COD settlement', 'Returns QC inspection', 'Temperature-controlled storage']
  },
  {
    id: 'air-ocean-freight',
    code: '05',
    badge: 'GLOBAL AIR & SEA',
    icon: 'Globe',
    title: 'Air & Sea Freight Forwarding',
    tagline: 'Charter air cargo at DXB/DWC and ocean container lanes at Jebel Ali.',
    description: 'Priority space allocations on Emirates SkyCargo, Etihad Cargo, and Maersk container lines to 120+ global gateway ports.',
    sla: '1 - 4 Days Air | 12 - 25 Days Sea',
    startingPrice: 'Custom Quote / kg',
    features: ['IATA licensed cargo agent', 'Dangerous goods (DG) certified', 'Port-to-door customs clearance', 'Charter aircraft availability']
  },
  {
    id: 'heavy-project-cargo',
    code: '06',
    badge: 'UP TO 120 TONS',
    icon: 'ShieldCheck',
    title: 'Heavy Project & Out-of-Gauge',
    tagline: 'Specialized modular hydraulic multi-axle trailers & oversize transport.',
    description: 'Civil engineering route surveys, bridge load certifications, RTA wide-load permits, and police escort convoy management.',
    sla: 'Scheduled Project Windows',
    startingPrice: 'Project-Based',
    features: ['Hydraulic multi-axle trailers', 'RTA & Police escort coordination', 'Route geometry 3D simulations', 'All-risk project cargo insurance']
  }
];

export const REGIONAL_HUBS: RegionalHub[] = [
  { city: 'Dubai South (DWC Hub)', country: 'United Arab Emirates', type: 'Primary Air & Sea Gateway', dailyVolume: '45,000+ Shipments', avgLeadTime: '45 Mins Intra-UAE', status: 'Operational (24/7/365)' },
  { city: 'Riyadh (KAFD Gateway)', country: 'Kingdom of Saudi Arabia', type: 'GCC Overland Linehaul Hub', dailyVolume: '28,000+ Shipments', avgLeadTime: '24 Hours Overland', status: 'Active Bonded Fast-Track' },
  { city: 'Abu Dhabi (Khalifa Port Hub)', country: 'United Arab Emirates', type: 'Industrial & Cold-Chain Center', dailyVolume: '22,000+ Shipments', avgLeadTime: '60 Mins Intra-Emirate', status: 'Operational (GDP Certified)' },
  { city: 'Doha (Hamad Port Gate)', country: 'State of Qatar', type: 'Cross-Border Express Hub', dailyVolume: '14,000+ Shipments', avgLeadTime: '36 Hours Overland', status: 'Active Linehaul' }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    quote: 'Switching our luxury fashion last-mile to Velox cut our customer delivery complaints by 92%. The 60-minute express courier with in-home try-on waiting is the gold standard in Dubai.',
    author: 'Mansoor Al-Ghurair',
    role: 'VP of Supply Chain & Operations',
    company: 'Al Ghurair Luxury Brands',
    location: 'Dubai, UAE',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't-2',
    quote: 'Transporting temperature-critical biopharma across UAE hospitals requires zero room for error. Velox\'s IoT telemetry and GDP-certified cold reefers gave us complete peace of mind.',
    author: 'Dr. Sarah Al-Hashimi',
    role: 'Regional Logistics Director',
    company: 'Emirates Health Pharma Distribution',
    location: 'Abu Dhabi, UAE',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 't-3',
    quote: 'Cross-border trucking into Saudi Arabia used to take 4 to 5 days with customs hold-ups. Velox handles the digital Bayan pre-clearance so our trucks cross Batha in under 2 hours.',
    author: 'Rashid Al-Kuwari',
    role: 'Head of Regional Distribution',
    company: 'Apex GCC Industrial Supply',
    location: 'JAFZA, Dubai',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  }
];

export const LOGISTICS_FAQS = [
  {
    question: 'How does Velox Logistics ensure sub-60-minute express delivery in Dubai?',
    answer: 'We operate localized micro-fulfillment hubs across Downtown Dubai, DIFC, Dubai South, and Deira. Our algorithm matches your pickup with the nearest dedicated bike or EV courier within 90 seconds, bypassing batch sorting facilities for direct point-to-point delivery.',
    q: 'How does Velox Logistics ensure sub-60-minute express delivery in Dubai?',
    a: 'We operate localized micro-fulfillment hubs across Downtown Dubai, DIFC, Dubai South, and Deira. Our algorithm matches your pickup with the nearest dedicated bike or EV courier within 90 seconds, bypassing batch sorting facilities for direct point-to-point delivery.'
  },
  {
    question: 'What documentation is required for overland freight from UAE to Saudi Arabia (KSA)?',
    answer: 'For commercial shipments into KSA, you need a Commercial Invoice (attested), Packing List, Certificate of Origin, SABER Conformity Certificate (where applicable), and your recipient\'s ZATCA Tax ID. Velox handles the digital Bayan portal submission and customs broker clearance at the Batha border.',
    q: 'What documentation is required for overland freight from UAE to Saudi Arabia (KSA)?',
    a: 'For commercial shipments into KSA, you need a Commercial Invoice (attested), Packing List, Certificate of Origin, SABER Conformity Certificate (where applicable), and your recipient\'s ZATCA Tax ID. Velox handles the digital Bayan portal submission and customs broker clearance at the Batha border.'
  },
  {
    question: 'How are temperature-sensitive pharmaceuticals and biopharma shipments monitored?',
    answer: 'Our GDP-certified cold-chain fleet uses Thermo King active cooling and multi-point IoT satellite data loggers. Senders and receivers get real-time dashboards showing cabin temperature (accurate to ±0.1°C), door openings, GPS location, and humidity with automated alerts on any deviation.',
    q: 'How are temperature-sensitive pharmaceuticals and biopharma shipments monitored?',
    a: 'Our GDP-certified cold-chain fleet uses Thermo King active cooling and multi-point IoT satellite data loggers. Senders and receivers get real-time dashboards showing cabin temperature (accurate to ±0.1°C), door openings, GPS location, and humidity with automated alerts on any deviation.'
  },
  {
    question: 'Can Velox handle duty-free bonded cargo transfers between UAE Free Zones?',
    answer: 'Yes. We are integrated directly with Dubai Customs Mirsal II and Abu Dhabi Customs systems. We generate electronic Free Zone to Free Zone (FZ-to-FZ) Bills of Entry, ensuring zero customs duty or VAT payment during transfer between JAFZA, DAFZA, KIZAD, and other free zones.',
    q: 'Can Velox handle duty-free bonded cargo transfers between UAE Free Zones?',
    a: 'Yes. We are integrated directly with Dubai Customs Mirsal II and Abu Dhabi Customs systems. We generate electronic Free Zone to Free Zone (FZ-to-FZ) Bills of Entry, ensuring zero customs duty or VAT payment during transfer between JAFZA, DAFZA, KIZAD, and other free zones.'
  },
  {
    question: 'What is the maximum single payload capacity for heavy project cargo?',
    answer: 'Our hydraulic multi-axle modular trailers can transport single indivisible pieces up to 120 tons. We manage the complete scope including route surveys, bridge load engineering approvals, RTA oversize permits, and police escort coordination across the UAE.',
    q: 'What is the maximum single payload capacity for heavy project cargo?',
    a: 'Our hydraulic multi-axle modular trailers can transport single indivisible pieces up to 120 tons. We manage the complete scope including route surveys, bridge load engineering approvals, RTA oversize permits, and police escort coordination across the UAE.'
  }
];

export const INDUSTRY_SOLUTIONS: IndustrySolution[] = [
  {
    id: 'retail-ecommerce',
    name: 'E-Commerce & Retail',
    icon: 'ShoppingBag',
    headline: 'Hyper-Fast Omnichannel Fulfillment & Same-Day Dispatch',
    description: 'Empowering leading UAE e-commerce brands with automated warehouse slotting, same-day COD remittance, and instant return logistics.',
    metrics: '99.4% On-Time Delivery',
    keyFeatures: [
      'Same-day intra-UAE delivery with 2-hour evening delivery slots',
      'Automated Cash-on-Delivery (COD) reconciliation within 24 hours',
      'Direct Shopify, Magento, and WooCommerce API webhook integration',
      'Doorstep quality check for reverse returns and immediate exchanges'
    ],
    caseSnippet: 'Reduced average last-mile fulfillment cost by 28% for a major Dubai Mall luxury fashion group.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pharma-healthcare',
    name: 'Pharmaceuticals & Health',
    icon: 'Activity',
    headline: 'GDP-Certified Active BioPharma Cold-Chain Logistics',
    description: 'Strict temperature assurance from -80°C cryogenics to +25°C ambient for hospital clinical trials, vaccines, and vital oncology meds.',
    metrics: '±0.1°C Temp Precision',
    keyFeatures: [
      'Active refrigerated fleet with dual independent cooling compressors',
      'Continuous IoT temperature telemetry with automated tamper alerts',
      'MoHAP and WHO Good Distribution Practice (GDP) full compliance',
      'Emergency priority blue-light dispatch protocol for intensive care ICUs'
    ],
    caseSnippet: 'Successfully transported 450,000+ critical vaccine vials across UAE health authorities without a single thermal breach.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'automotive-aviation',
    name: 'Automotive & AOG Aerospace',
    icon: 'Car',
    headline: 'Critical Hot-Shot Spare Parts & Sub-90 Min AOG Response',
    description: 'When an aircraft is grounded at DXB or DWC, Velox deploys immediate airside runners with certified flight parts to eliminate delay penalties.',
    metrics: '< 90-Min Tarmac SLA',
    keyFeatures: [
      'DXB & DWC Airport security-cleared airside vehicle entry permits',
      'Heavy engine cradle and thrust reverser overland transport',
      'Supercar enclosed single-vehicle transport with hydraulic zero-angle ramps',
      'Live GPS telemetry shared directly with airline flight operations desk'
    ],
    caseSnippet: 'Eliminated grounded flight delays for 3 international airlines at DXB Terminal 3 in Q1 2026.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'high-tech-electronics',
    name: 'High-Tech & Electronics',
    icon: 'Cpu',
    headline: 'High-Security Anti-Static Hardware & Server Transport',
    description: 'Armored and air-ride transport for enterprise data center racks, semiconductor wafers, and flagship consumer electronics.',
    metrics: 'AED 100M Cargo Cover',
    keyFeatures: [
      'Dual-custody verification with biometric lockbox containers',
      'Air-ride pneumatic suspension trucks preventing vibration micro-fractures',
      'Armed security escort options for high-value gold bullion and luxury watches',
      'Comprehensive all-risk insurance coverage up to AED 10,000,000'
    ],
    caseSnippet: 'Relocated 800+ enterprise server racks into Dubai South Tier-4 Data Center without downtime.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  }
];

export const CASE_STUDY = {
  title: 'How a Leading GCC Luxury Retailer Achieved 99.4% On-Time SLA Across 7 Emirates',
  industry: 'Luxury Retail & E-Commerce',
  client: 'Al Futtaim Luxury Division',
  clientName: 'Al Futtaim Luxury Division, Dubai',
  challenge: 'High customer cart abandonment due to unpredictable 2-day delivery windows, lack of white-glove try-on fitting, and slow COD cash remittance from legacy couriers.',
  solution: 'Integrated Velox HyperLocal 60-Minute dispatch, uniform white-glove couriers with in-home try-on waiting protocols, and automated 24-hour bank COD settlements.',
  before: {
    avgTime: '48 - 72 Hours',
    failedRate: '14.2% First-Attempt Fail',
    csat: '68% Customer Satisfaction'
  },
  after: {
    avgTime: '2.8 Hours Average',
    failedRate: '0.6% First-Attempt Fail',
    csat: '98.7% Verified CSAT'
  },
  results: [
    { value: '2.8 Hrs', label: 'Average Delivery SLA' },
    { value: '99.4%', label: 'Verified On-Time Rate' },
    { value: '-28%', label: 'Last-Mile Cost Reduction' },
    { value: 'AED 42M', label: 'Annual Handled Volume' }
  ]
};


