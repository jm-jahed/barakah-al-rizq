export interface StorageZone {
  id: string;
  name: string;
  code: 'ZONE-A' | 'ZONE-B' | 'ZONE-C' | 'ZONE-D';
  type: 'Frozen' | 'Chilled' | 'Controlled' | 'Ambient';
  targetTemp: string;
  tempRange: string;
  currentTemp: string;
  humidity: string;
  capacityTotalPallets: number;
  capacityOccupiedPallets: number;
  occupancyRate: number;
  inventoryCountUnits: number;
  sensorsOnline: number;
  totalSensors: number;
  status: 'Nominal' | 'Optimal' | 'Active Monitoring' | 'Variance Controlled';
  recentActivity: string;
  colorTone: string;
}

export interface InventoryItem {
  id: string;
  product: string;
  brand: string;
  sku: string;
  category: 'Pharmaceutical' | 'Food & Beverage' | 'Fresh Produce' | 'Seafood' | 'Dairy & Poultry' | 'Specialty Chemical';
  quantityUnits: number;
  palletCount: number;
  storageZone: 'ZONE-A' | 'ZONE-B' | 'ZONE-C' | 'ZONE-D';
  targetTemp: string;
  currentTemp: string;
  batchNumber: string;
  expiryDate: string;
  arrivalDate: string;
  status: 'In Storage' | 'Pending Pick' | 'Quality Verified' | 'Staged for Dispatch';
  lotHealth: 'Optimal' | 'Under Observation' | 'Priority Dispatch';
  client: string;
}

export interface SmartAlert {
  id: string;
  title: string;
  type: 'TEMPERATURE VARIANCE' | 'DOOR EVENT' | 'CAPACITY WARNING' | 'SENSOR STATUS' | 'HUMIDITY SHIFT';
  zone: string;
  timestamp: string;
  severity: 'Critical' | 'Warning' | 'Advisory';
  details: string;
  currentMetric: string;
  thresholdMetric: string;
  status: 'Active' | 'Acknowledged' | 'Resolved';
  sensorId: string;
}

export interface FacilityType {
  id: string;
  title: string;
  tagline: string;
  tempRange: string;
  description: string;
  suitableFor: string[];
  capacityCubicMeters: string;
  iconName: string;
}

export interface IndustryUseCase {
  id: string;
  industry: string;
  headline: string;
  description: string;
  keyRequirements: string[];
  tempRequirement: string;
  monitoringProtocol: string;
}

export interface TelemetryPoint {
  timeLabel: string;
  zoneA: number;
  zoneB: number;
  zoneC: number;
  zoneD: number;
}

export const FROSTVAULT_METADATA = {
  name: 'FROSTVAULT',
  eyebrow: 'COLD CHAIN INFRASTRUCTURE',
  tagline: 'Precision at Every Degree.',
  positioning: 'Intelligent Cold Chain Infrastructure',
  subheading: 'Intelligent cold storage and warehouse infrastructure designed to protect products, optimize inventory, and keep every critical condition under control.',
  location: 'Dubai South & JAFZA Cold Hubs, UAE',
  simulationNotice: 'FROSTVAULT OPERATIONAL SIMULATION · Demonstration Telemetry · Fictional Portfolio Concept'
};

// -------------------------------------------------------------
// 4 STORAGE ZONES (Simulated)
// -------------------------------------------------------------
export const FROSTVAULT_ZONES: StorageZone[] = [
  {
    id: 'zone-a',
    name: 'Deep Frozen Vaults',
    code: 'ZONE-A',
    type: 'Frozen',
    targetTemp: '-25.0°C',
    tempRange: '-28°C to -22°C',
    currentTemp: '-24.8°C',
    humidity: '18% RH',
    capacityTotalPallets: 8500,
    capacityOccupiedPallets: 6970,
    occupancyRate: 82,
    inventoryCountUnits: 142800,
    sensorsOnline: 32,
    totalSensors: 32,
    status: 'Nominal',
    recentActivity: 'Automated retrieval pallet #F-4402 staged for blast tunnel transfer.',
    colorTone: '#38bdf8'
  },
  {
    id: 'zone-b',
    name: 'Chilled Pharma & Dairy Core',
    code: 'ZONE-B',
    type: 'Chilled',
    targetTemp: '+2.0°C',
    tempRange: '+2°C to +4°C',
    currentTemp: '+2.3°C',
    humidity: '42% RH',
    capacityTotalPallets: 6200,
    capacityOccupiedPallets: 4154,
    occupancyRate: 67,
    inventoryCountUnits: 89400,
    sensorsOnline: 28,
    totalSensors: 28,
    status: 'Optimal',
    recentActivity: 'Cold dock door 04 sealed. Batch #BIO-992 receiving verification complete.',
    colorTone: '#0ea5e9'
  },
  {
    id: 'zone-c',
    name: 'Controlled Biological Chamber',
    code: 'ZONE-C',
    type: 'Controlled',
    targetTemp: '+8.0°C',
    tempRange: '+6°C to +10°C',
    currentTemp: '+7.9°C',
    humidity: '50% RH',
    capacityTotalPallets: 4800,
    capacityOccupiedPallets: 2592,
    occupancyRate: 54,
    inventoryCountUnits: 51200,
    sensorsOnline: 22,
    totalSensors: 22,
    status: 'Optimal',
    recentActivity: 'Constant airflow recalibration executed across Aisle C3.',
    colorTone: '#22d3ee'
  },
  {
    id: 'zone-d',
    name: 'Ambient Dry Buffer Zone',
    code: 'ZONE-D',
    type: 'Ambient',
    targetTemp: '+18.0°C',
    tempRange: '+15°C to +22°C',
    currentTemp: '+18.2°C',
    humidity: '45% RH',
    capacityTotalPallets: 5500,
    capacityOccupiedPallets: 2365,
    occupancyRate: 43,
    inventoryCountUnits: 68100,
    sensorsOnline: 16,
    totalSensors: 16,
    status: 'Nominal',
    recentActivity: 'Inbound cross-dock transfer pallet #A-108 staged for staging bay 02.',
    colorTone: '#94a3b8'
  }
];

// -------------------------------------------------------------
// 22+ DISTINCT INVENTORY ITEMS (Deterministic Demo Data)
// -------------------------------------------------------------
export const FROSTVAULT_INVENTORY: InventoryItem[] = [
  {
    id: 'inv-01',
    product: 'Arctic Harvest Atlantic Salmon Fillets',
    brand: 'Arctic Harvest',
    sku: 'FV-SEA-8841',
    category: 'Seafood',
    quantityUnits: 4200,
    palletCount: 14,
    storageZone: 'ZONE-A',
    targetTemp: '-25.0°C',
    currentTemp: '-24.9°C',
    batchNumber: 'LOT-2026-AH99',
    expiryDate: '2027-08-15',
    arrivalDate: '2026-08-10',
    status: 'In Storage',
    lotHealth: 'Optimal',
    client: 'Nordic Marine Imports LLC (Dubai)'
  },
  {
    id: 'inv-02',
    product: 'VitaCore Recombinant Insulin Vials',
    brand: 'VitaCore Supply',
    sku: 'FV-MED-1049',
    category: 'Pharmaceutical',
    quantityUnits: 12500,
    palletCount: 6,
    storageZone: 'ZONE-B',
    targetTemp: '+2.0°C',
    currentTemp: '+2.1°C',
    batchNumber: 'LOT-2026-VC81',
    expiryDate: '2028-02-20',
    arrivalDate: '2026-08-28',
    status: 'In Storage',
    lotHealth: 'Optimal',
    client: 'Emirates Biopharma Logistics'
  },
  {
    id: 'inv-03',
    product: 'PureVale Organic Greek Yogurt Pails',
    brand: 'PureVale Foods',
    sku: 'FV-DAI-3301',
    category: 'Dairy & Poultry',
    quantityUnits: 3600,
    palletCount: 12,
    storageZone: 'ZONE-B',
    targetTemp: '+3.0°C',
    currentTemp: '+3.1°C',
    batchNumber: 'LOT-2026-PV44',
    expiryDate: '2026-10-18',
    arrivalDate: '2026-09-01',
    status: 'In Storage',
    lotHealth: 'Optimal',
    client: 'Gulf Gourmet Distribution FZCO'
  },
  {
    id: 'inv-04',
    product: 'Northline Hydroponic Butterhead Lettuce',
    brand: 'Northline Produce',
    sku: 'FV-VEG-9912',
    category: 'Fresh Produce',
    quantityUnits: 5800,
    palletCount: 16,
    storageZone: 'ZONE-C',
    targetTemp: '+7.0°C',
    currentTemp: '+7.2°C',
    batchNumber: 'LOT-2026-NL03',
    expiryDate: '2026-09-24',
    arrivalDate: '2026-09-04',
    status: 'Pending Pick',
    lotHealth: 'Priority Dispatch',
    client: 'Al Ain Fresh Farms LLC'
  },
  {
    id: 'inv-05',
    product: 'Ocean Crest Wild Jumbo Tiger Prawns',
    brand: 'Ocean Crest Frozen',
    sku: 'FV-SEA-5520',
    category: 'Seafood',
    quantityUnits: 2800,
    palletCount: 10,
    storageZone: 'ZONE-A',
    targetTemp: '-24.0°C',
    currentTemp: '-24.2°C',
    batchNumber: 'LOT-2026-OC12',
    expiryDate: '2027-11-30',
    arrivalDate: '2026-07-19',
    status: 'In Storage',
    lotHealth: 'Optimal',
    client: 'Red Sea Fishery Ventures'
  },
  {
    id: 'inv-06',
    product: 'BioShield Monoclonal Antibody Serums',
    brand: 'BioShield Therapeutics',
    sku: 'FV-MED-7711',
    category: 'Pharmaceutical',
    quantityUnits: 6400,
    palletCount: 4,
    storageZone: 'ZONE-B',
    targetTemp: '+4.0°C',
    currentTemp: '+3.9°C',
    batchNumber: 'LOT-2026-BS66',
    expiryDate: '2027-05-14',
    arrivalDate: '2026-08-15',
    status: 'Quality Verified',
    lotHealth: 'Optimal',
    client: 'Dubai Science Park Clinical Imports'
  },
  {
    id: 'inv-07',
    product: 'Alpine Valley Artisanal Gruyère Blocks',
    brand: 'Alpine Valley',
    sku: 'FV-DAI-2299',
    category: 'Dairy & Poultry',
    quantityUnits: 1800,
    palletCount: 8,
    storageZone: 'ZONE-B',
    targetTemp: '+4.0°C',
    currentTemp: '+4.2°C',
    batchNumber: 'LOT-2026-AV19',
    expiryDate: '2027-01-10',
    arrivalDate: '2026-08-01',
    status: 'In Storage',
    lotHealth: 'Optimal',
    client: 'Swiss Heritage Trading GCC'
  },
  {
    id: 'inv-08',
    product: 'SunGlade Hass Avocados Premium Grade',
    brand: 'SunGlade Orchards',
    sku: 'FV-FRU-4410',
    category: 'Fresh Produce',
    quantityUnits: 8200,
    palletCount: 22,
    storageZone: 'ZONE-C',
    targetTemp: '+8.0°C',
    currentTemp: '+8.1°C',
    batchNumber: 'LOT-2026-SG77',
    expiryDate: '2026-09-30',
    arrivalDate: '2026-09-02',
    status: 'In Storage',
    lotHealth: 'Optimal',
    client: 'Global AgriCorp UAE'
  },
  {
    id: 'inv-09',
    product: 'CryoCell Stem Cell Preservation Medium',
    brand: 'CryoCell BioTech',
    sku: 'FV-MED-9904',
    category: 'Pharmaceutical',
    quantityUnits: 3100,
    palletCount: 2,
    storageZone: 'ZONE-A',
    targetTemp: '-28.0°C',
    currentTemp: '-27.8°C',
    batchNumber: 'LOT-2026-CC01',
    expiryDate: '2028-12-31',
    arrivalDate: '2026-06-20',
    status: 'In Storage',
    lotHealth: 'Optimal',
    client: 'Middle East Regenerative Medicine'
  },
  {
    id: 'inv-10',
    product: 'PrimeCuts Angus Tenderloin Primal Cuts',
    brand: 'PrimeCuts Australia',
    sku: 'FV-MEA-6632',
    category: 'Food & Beverage',
    quantityUnits: 1950,
    palletCount: 9,
    storageZone: 'ZONE-A',
    targetTemp: '-22.0°C',
    currentTemp: '-22.4°C',
    batchNumber: 'LOT-2026-PC50',
    expiryDate: '2027-04-18',
    arrivalDate: '2026-07-25',
    status: 'Staged for Dispatch',
    lotHealth: 'Optimal',
    client: 'Luxury Hospitality Butchery LLC'
  },
  {
    id: 'inv-11',
    product: 'Nordic Berry Organic Wild Blueberries',
    brand: 'Nordic Berry Co',
    sku: 'FV-FRU-1190',
    category: 'Food & Beverage',
    quantityUnits: 6200,
    palletCount: 15,
    storageZone: 'ZONE-A',
    targetTemp: '-20.0°C',
    currentTemp: '-20.1°C',
    batchNumber: 'LOT-2026-NB33',
    expiryDate: '2027-10-05',
    arrivalDate: '2026-08-11',
    status: 'In Storage',
    lotHealth: 'Optimal',
    client: 'Superfoods Distribution ME'
  },
  {
    id: 'inv-12',
    product: 'NovaVax Pediatric Vaccine Ampoules',
    brand: 'NovaVax Lifesciences',
    sku: 'FV-MED-4422',
    category: 'Pharmaceutical',
    quantityUnits: 18000,
    palletCount: 5,
    storageZone: 'ZONE-B',
    targetTemp: '+3.0°C',
    currentTemp: '+3.0°C',
    batchNumber: 'LOT-2026-NV99',
    expiryDate: '2027-09-12',
    arrivalDate: '2026-09-03',
    status: 'Quality Verified',
    lotHealth: 'Optimal',
    client: 'National Health Supply Consortium'
  },
  {
    id: 'inv-13',
    product: 'DolceVita White Truffle Butter Jars',
    brand: 'DolceVita Culinary',
    sku: 'FV-DAI-8814',
    category: 'Dairy & Poultry',
    quantityUnits: 1400,
    palletCount: 3,
    storageZone: 'ZONE-B',
    targetTemp: '+4.0°C',
    currentTemp: '+4.1°C',
    batchNumber: 'LOT-2026-DV08',
    expiryDate: '2027-03-25',
    arrivalDate: '2026-08-30',
    status: 'In Storage',
    lotHealth: 'Optimal',
    client: 'Michelin Pantry Dubai'
  },
  {
    id: 'inv-14',
    product: 'Floridita Cold-Pressed Valencia Juices',
    brand: 'Floridita Citrus',
    sku: 'FV-BEV-5501',
    category: 'Food & Beverage',
    quantityUnits: 7200,
    palletCount: 18,
    storageZone: 'ZONE-B',
    targetTemp: '+2.0°C',
    currentTemp: '+2.4°C',
    batchNumber: 'LOT-2026-FC72',
    expiryDate: '2026-11-15',
    arrivalDate: '2026-08-25',
    status: 'In Storage',
    lotHealth: 'Under Observation',
    client: 'Clean Beverage Group FZE'
  },
  {
    id: 'inv-15',
    product: 'Kyoto Matcha Ceremonial Powder Tins',
    brand: 'Kyoto Tea Masters',
    sku: 'FV-AMB-9021',
    category: 'Food & Beverage',
    quantityUnits: 4500,
    palletCount: 7,
    storageZone: 'ZONE-D',
    targetTemp: '+16.0°C',
    currentTemp: '+16.2°C',
    batchNumber: 'LOT-2026-KM41',
    expiryDate: '2028-06-30',
    arrivalDate: '2026-07-10',
    status: 'In Storage',
    lotHealth: 'Optimal',
    client: 'Zenith Fine Beverages UAE'
  },
  {
    id: 'inv-16',
    product: 'Tasman Sea King Crab Legs Flash-Frozen',
    brand: 'Tasman Blue Seafood',
    sku: 'FV-SEA-3390',
    category: 'Seafood',
    quantityUnits: 1650,
    palletCount: 8,
    storageZone: 'ZONE-A',
    targetTemp: '-26.0°C',
    currentTemp: '-25.8°C',
    batchNumber: 'LOT-2026-TB88',
    expiryDate: '2027-12-15',
    arrivalDate: '2026-08-05',
    status: 'In Storage',
    lotHealth: 'Optimal',
    client: 'Pacific Apex Seafood Group'
  },
  {
    id: 'inv-17',
    product: 'BioGen Diagnostic Enzyme Reagents',
    brand: 'BioGen Diagnostics',
    sku: 'FV-MED-2209',
    category: 'Pharmaceutical',
    quantityUnits: 9800,
    palletCount: 4,
    storageZone: 'ZONE-B',
    targetTemp: '+4.0°C',
    currentTemp: '+4.0°C',
    batchNumber: 'LOT-2026-BG15',
    expiryDate: '2027-11-10',
    arrivalDate: '2026-08-18',
    status: 'In Storage',
    lotHealth: 'Optimal',
    client: 'Apex Diagnostics Laboratories'
  },
  {
    id: 'inv-18',
    product: 'Hollandia Royal Cut Orchid Flowers',
    brand: 'Hollandia Florals',
    sku: 'FV-FLO-7733',
    category: 'Fresh Produce',
    quantityUnits: 3200,
    palletCount: 11,
    storageZone: 'ZONE-C',
    targetTemp: '+9.0°C',
    currentTemp: '+8.9°C',
    batchNumber: 'LOT-2026-HF02',
    expiryDate: '2026-09-22',
    arrivalDate: '2026-09-05',
    status: 'Pending Pick',
    lotHealth: 'Priority Dispatch',
    client: 'Bloom & Petal Wholesale Dubai'
  },
  {
    id: 'inv-19',
    product: 'Valrhona Grand Cru Dark Chocolate Pellets',
    brand: 'Valrhona Chocolate',
    sku: 'FV-CON-6619',
    category: 'Food & Beverage',
    quantityUnits: 5100,
    palletCount: 13,
    storageZone: 'ZONE-D',
    targetTemp: '+18.0°C',
    currentTemp: '+18.1°C',
    batchNumber: 'LOT-2026-VC90',
    expiryDate: '2027-10-31',
    arrivalDate: '2026-07-30',
    status: 'In Storage',
    lotHealth: 'Optimal',
    client: 'Artisan Pastry Supplies UAE'
  },
  {
    id: 'inv-20',
    product: 'TheraCool Ophthalmic Solution Units',
    brand: 'TheraCool Pharma',
    sku: 'FV-MED-8874',
    category: 'Pharmaceutical',
    quantityUnits: 14200,
    palletCount: 5,
    storageZone: 'ZONE-B',
    targetTemp: '+5.0°C',
    currentTemp: '+5.2°C',
    batchNumber: 'LOT-2026-TC31',
    expiryDate: '2028-04-15',
    arrivalDate: '2026-08-22',
    status: 'In Storage',
    lotHealth: 'Optimal',
    client: 'Emirates Eye Hospital Supplies'
  },
  {
    id: 'inv-21',
    product: 'Canary Islands Extra Virgin Truffle Oil',
    brand: 'Canary Gold',
    sku: 'FV-AMB-1140',
    category: 'Food & Beverage',
    quantityUnits: 2900,
    palletCount: 6,
    storageZone: 'ZONE-D',
    targetTemp: '+19.0°C',
    currentTemp: '+18.8°C',
    batchNumber: 'LOT-2026-CG11',
    expiryDate: '2028-08-01',
    arrivalDate: '2026-06-15',
    status: 'In Storage',
    lotHealth: 'Optimal',
    client: 'Mediterranean Harvest FZCO'
  },
  {
    id: 'inv-22',
    product: 'GlacierSpring Culture Inoculants',
    brand: 'GlacierSpring Labs',
    sku: 'FV-MED-9988',
    category: 'Pharmaceutical',
    quantityUnits: 4100,
    palletCount: 3,
    storageZone: 'ZONE-A',
    targetTemp: '-27.0°C',
    currentTemp: '-26.9°C',
    batchNumber: 'LOT-2026-GS74',
    expiryDate: '2027-08-20',
    arrivalDate: '2026-07-02',
    status: 'In Storage',
    lotHealth: 'Optimal',
    client: 'Biotech Fermentation Gulf'
  }
];

// -------------------------------------------------------------
// SIMULATED SMART ALERTS
// -------------------------------------------------------------
export const FROSTVAULT_ALERTS: SmartAlert[] = [
  {
    id: 'alt-01',
    title: 'Temperature Variance in Cold Dock 04',
    type: 'TEMPERATURE VARIANCE',
    zone: 'ZONE-B (Chilled)',
    timestamp: '14 min ago',
    severity: 'Warning',
    details: 'Chamber ingress threshold shifted temporarily during dual truck discharge. Micro-chillers accelerated.',
    currentMetric: '+4.1°C',
    thresholdMetric: '+3.5°C Max',
    status: 'Active',
    sensorId: 'SN-B-08'
  },
  {
    id: 'alt-02',
    title: 'Airlock Door Extended Aperture Event',
    type: 'DOOR EVENT',
    zone: 'ZONE-A (Frozen Tunnel 02)',
    timestamp: '32 min ago',
    severity: 'Critical',
    details: 'Automated high-speed roll door open duration exceeded 120s limit during pallet retrieval #F-4402.',
    currentMetric: '02:18 Open',
    thresholdMetric: '01:00 Max',
    status: 'Acknowledged',
    sensorId: 'DR-A-04'
  },
  {
    id: 'alt-03',
    title: 'High Occupancy Warning: Frozen Chamber A3',
    type: 'CAPACITY WARNING',
    zone: 'ZONE-A (Deep Frozen)',
    timestamp: '1 hour ago',
    severity: 'Advisory',
    details: 'Storage density reached 82% threshold. Dynamic rerouting to buffer chamber A4 suggested.',
    currentMetric: '82% Occupied',
    thresholdMetric: '80% Soft Cap',
    status: 'Active',
    sensorId: 'SYS-CAP-01'
  },
  {
    id: 'alt-04',
    title: 'Sensor C-18 Telemetry Micro-Latency',
    type: 'SENSOR STATUS',
    zone: 'ZONE-C (Controlled Biological)',
    timestamp: '2 hours ago',
    severity: 'Advisory',
    details: 'Signal transmission delay exceeded 450ms. Backup Zigbee mesh channel activated smoothly.',
    currentMetric: '480ms Ping',
    thresholdMetric: '200ms Target',
    status: 'Resolved',
    sensorId: 'SN-C-18'
  }
];

// -------------------------------------------------------------
// TELEMETRY HISTORY DATA (For interactive charts)
// -------------------------------------------------------------
export const TELEMETRY_SERIES: Record<string, TelemetryPoint[]> = {
  '1H': [
    { timeLabel: '14:00', zoneA: -24.9, zoneB: 2.2, zoneC: 7.9, zoneD: 18.1 },
    { timeLabel: '14:15', zoneA: -24.8, zoneB: 2.5, zoneC: 8.0, zoneD: 18.2 },
    { timeLabel: '14:30', zoneA: -25.1, zoneB: 2.8, zoneC: 7.8, zoneD: 18.0 },
    { timeLabel: '14:45', zoneA: -24.7, zoneB: 2.4, zoneC: 8.1, zoneD: 18.3 },
    { timeLabel: '15:00', zoneA: -24.8, zoneB: 2.3, zoneC: 7.9, zoneD: 18.2 }
  ],
  '6H': [
    { timeLabel: '09:00', zoneA: -25.2, zoneB: 2.1, zoneC: 7.8, zoneD: 18.0 },
    { timeLabel: '10:30', zoneA: -24.7, zoneB: 2.4, zoneC: 8.1, zoneD: 18.4 },
    { timeLabel: '12:00', zoneA: -24.9, zoneB: 2.6, zoneC: 8.0, zoneD: 18.5 },
    { timeLabel: '13:30', zoneA: -25.0, zoneB: 2.3, zoneC: 7.9, zoneD: 18.2 },
    { timeLabel: '15:00', zoneA: -24.8, zoneB: 2.3, zoneC: 7.9, zoneD: 18.2 }
  ],
  '24H': [
    { timeLabel: 'Yesterday 15:00', zoneA: -25.0, zoneB: 2.0, zoneC: 7.9, zoneD: 18.0 },
    { timeLabel: 'Yesterday 21:00', zoneA: -25.3, zoneB: 2.1, zoneC: 7.8, zoneD: 17.9 },
    { timeLabel: 'Today 03:00', zoneA: -25.4, zoneB: 2.0, zoneC: 7.7, zoneD: 17.8 },
    { timeLabel: 'Today 09:00', zoneA: -24.8, zoneB: 2.4, zoneC: 8.0, zoneD: 18.3 },
    { timeLabel: 'Today 15:00', zoneA: -24.8, zoneB: 2.3, zoneC: 7.9, zoneD: 18.2 }
  ],
  '7D': [
    { timeLabel: 'Mon', zoneA: -25.1, zoneB: 2.2, zoneC: 7.9, zoneD: 18.1 },
    { timeLabel: 'Tue', zoneA: -24.9, zoneB: 2.3, zoneC: 8.0, zoneD: 18.2 },
    { timeLabel: 'Wed', zoneA: -25.2, zoneB: 2.1, zoneC: 7.8, zoneD: 18.0 },
    { timeLabel: 'Thu', zoneA: -25.0, zoneB: 2.4, zoneC: 8.1, zoneD: 18.3 },
    { timeLabel: 'Fri', zoneA: -24.8, zoneB: 2.2, zoneC: 7.9, zoneD: 18.1 },
    { timeLabel: 'Sat', zoneA: -25.3, zoneB: 2.0, zoneC: 7.7, zoneD: 17.9 },
    { timeLabel: 'Sun', zoneA: -24.8, zoneB: 2.3, zoneC: 7.9, zoneD: 18.2 }
  ]
};

// -------------------------------------------------------------
// FACILITY TYPES
// -------------------------------------------------------------
export const FROSTVAULT_FACILITIES: FacilityType[] = [
  {
    id: 'fac-frozen',
    title: 'Frozen Storage',
    tagline: 'Deep-temperature environments for frozen goods and biologics.',
    tempRange: '-28°C to -20°C',
    description: 'High-bay automated pallet storage with triple-redundant ammonia/CO2 cascade refrigeration systems.',
    suitableFor: ['Seafood & Marine Catch', 'Primal Meat Cuts', 'Cryopreserved Cell Cultures', 'Frozen Prepared Foods'],
    capacityCubicMeters: '45,000 m³',
    iconName: 'Snowflake'
  },
  {
    id: 'fac-chilled',
    title: 'Chilled Storage',
    tagline: 'Precision controlled environments for sensitive perishables.',
    tempRange: '+2°C to +4°C',
    description: 'Micro-calibrated laminar airflow chambers preventing hot-spots and preserving biological integrity.',
    suitableFor: ['Dairy Products', 'Vaccines & Biologics', 'Poultry & Fresh Meats', 'Artisan Delicacies'],
    capacityCubicMeters: '38,000 m³',
    iconName: 'ThermometerSnowflake'
  },
  {
    id: 'fac-pharma',
    title: 'Pharmaceutical Storage',
    tagline: 'GDP-compliant temperature-controlled clinical workflows.',
    tempRange: '+2°C to +8°C & -80°C Ultra',
    description: 'Autonomous multi-sensor validation with 21 CFR Part 11 electronic records and zero-tolerance alarms.',
    suitableFor: ['Injectables & Insulins', 'Oncology Therapeutics', 'Clinical Trial Supplies', 'Enzyme Reagents'],
    capacityCubicMeters: '22,000 m³',
    iconName: 'ShieldCheck'
  },
  {
    id: 'fac-food-bev',
    title: 'Food & Beverage',
    tagline: 'Perishable and temperature-sensitive culinary supply chain.',
    tempRange: '+4°C to +14°C',
    description: 'HACCP-certified hygienic storage with segregated allergen vaults and FIFO automated sequencing.',
    suitableFor: ['Cold-Pressed Juices', 'Confectionery & Chocolates', 'Craft Beverages', 'Specialty Sauces'],
    capacityCubicMeters: '30,000 m³',
    iconName: 'Utensils'
  },
  {
    id: 'fac-fresh-produce',
    title: 'Fresh Produce',
    tagline: 'Controlled humidity and ethylene-managed ripening chambers.',
    tempRange: '+6°C to +12°C',
    description: 'Ethylene scrubbers and relative humidity controls (85–95% RH) to preserve post-harvest freshness.',
    suitableFor: ['Hydroponic Greens', 'Exotic Stone Fruits', 'Avocados & Berries', 'Cut Floral Stems'],
    capacityCubicMeters: '28,000 m³',
    iconName: 'Leaf'
  },
  {
    id: 'fac-specialized',
    title: 'Specialized Storage',
    tagline: 'Customized environmental parameters for unique industrial inventory.',
    tempRange: 'Custom Defined Range',
    description: 'Modular isolated cleanrooms with specialized gas inerting, humidity suppression, and dark storage.',
    suitableFor: ['Electronic Photopolymers', 'Aromatherapeutic Extracts', 'High-Value Fragrance Oils', 'Specialty Resins'],
    capacityCubicMeters: '15,000 m³',
    iconName: 'Cpu'
  }
];

// -------------------------------------------------------------
// INDUSTRY USE CASES
// -------------------------------------------------------------
export const FROSTVAULT_INDUSTRIES: IndustryUseCase[] = [
  {
    id: 'ind-fb',
    industry: 'Food & Beverage',
    headline: 'Preserving Taste, Texture, and Safety at Scale',
    description: 'End-to-end cold storage safeguarding food purity across GCC retail and luxury hospitality channels.',
    keyRequirements: ['HACCP Protocol', 'Allergen Isolation', 'Real-time Lot Expiry Tracking'],
    tempRequirement: '-25°C to +8°C',
    monitoringProtocol: 'Continuous Airflow & Temperature Telemetry'
  },
  {
    id: 'ind-pharma',
    industry: 'Pharmaceuticals',
    headline: 'Protecting Life-Critical Biological Efficacy',
    description: 'Ultra-stable cold chain vaults engineered for vaccines, antibodies, and temperature-labile medicines.',
    keyRequirements: ['GDP Compliance', 'Audit Trail Logging', 'Redundant Power Backup'],
    tempRequirement: '+2°C to +8°C',
    monitoringProtocol: 'Calibrated NIST-Traceable Multi-Sensors'
  },
  {
    id: 'ind-healthcare',
    industry: 'Healthcare Supply',
    headline: 'Rapid Hospital & Clinic Replenishment',
    description: 'Strategically located near Dubai Healthcare City and Abu Dhabi medical corridors for sub-60 minute dispatch.',
    keyRequirements: ['Serial Tracking', 'Tamper Evident Seals', 'Emergency Dispatch Protocol'],
    tempRequirement: '+2°C to +15°C',
    monitoringProtocol: 'Active RFID Gate Tracking'
  },
  {
    id: 'ind-produce',
    industry: 'Fresh Produce',
    headline: 'Extending Freshness from Farm to Fork',
    description: 'High-humidity chambers with active atmospheric scrubbing to double post-harvest shelf life.',
    keyRequirements: ['Ethylene Extraction', '90% RH Humidity', 'Fast Cross-Dock Ingress'],
    tempRequirement: '+6°C to +12°C',
    monitoringProtocol: 'Automated Humidity & Gas Vapor Probes'
  },
  {
    id: 'ind-seafood',
    industry: 'Seafood & Aquaculture',
    headline: 'Sub-Zero Cryo-Freezing for Oceanic Catch',
    description: 'Flash-freezing chambers locking in ocean-fresh moisture and preventing ice crystallization in premium catch.',
    keyRequirements: ['Deep -28°C Cold', 'Odor Isolation', 'Fast Frozen Loading'],
    tempRequirement: '-28°C to -22°C',
    monitoringProtocol: 'Core Flesh Temperature Verification'
  },
  {
    id: 'ind-retail',
    industry: 'Retail & Supermarket Logistics',
    headline: 'High-Velocity Multi-Temp Distribution',
    description: 'Dynamic pallet picking and cross-dock sorting supporting daily replenishment across 250+ supermarket outlets.',
    keyRequirements: ['Automated Sorting', 'Wave Picking', 'Consolidated Temperature Manifests'],
    tempRequirement: 'Multi-Zone Tri-Temp',
    monitoringProtocol: 'WMS Automated Scan Verification'
  }
];

// -------------------------------------------------------------
// SMART WAREHOUSE JOURNEY (8 Stages)
// -------------------------------------------------------------
export const WAREHOUSE_JOURNEY_STAGES = [
  {
    step: '01',
    title: 'Arrival',
    subtitle: 'Cold Dock Ingress',
    description: 'Refrigerated transport docks seal directly against inflatable dock shelters to prevent outside ambient air ingress.'
  },
  {
    step: '02',
    title: 'Inspection',
    subtitle: 'Visual & Seal Audit',
    description: 'Digital manifests verified via barcode/RFID scans while tamper seals and pallet integrity are documented.'
  },
  {
    step: '03',
    title: 'Temperature Check',
    subtitle: 'Core Thermal Verification',
    description: 'Calibrated infrared and penetration probes verify core product temperature before acceptance.'
  },
  {
    step: '04',
    title: 'Receiving',
    subtitle: 'WMS Automated Ingestion',
    description: 'Pallets are assigned dynamic system lot IDs with batch tracking, expiry countdown, and storage coordinates.'
  },
  {
    step: '05',
    title: 'Storage',
    subtitle: 'Automated Aisle Allocation',
    description: 'Automated guided vehicles (AGVs) and narrow-aisle cranes transport inventory into pre-cooled racking bays.'
  },
  {
    step: '06',
    title: 'Monitoring',
    subtitle: '24/7 Sensor Mesh',
    description: 'Continuous thermal, humidity, and airflow monitoring with millisecond alert tripwires across every cubic meter.'
  },
  {
    step: '07',
    title: 'Picking',
    subtitle: 'Smart Wave Execution',
    description: 'Intelligent picking algorithms optimize retrieval routes in cold suits to minimize pallet exposure time.'
  },
  {
    step: '08',
    title: 'Dispatch',
    subtitle: 'Controlled Outbound Transit',
    description: 'Pre-cooled transport loading with data loggers activated and automated digital bills of lading generated.'
  }
];

// -------------------------------------------------------------
// COLD CHAIN WORKFLOW 6 PILLARS
// -------------------------------------------------------------
export const COLD_CHAIN_WORKFLOW = [
  { number: '01', title: 'Receive', desc: 'Goods enter the pre-cooled airlock staging facility without temperature break.' },
  { number: '02', title: 'Verify', desc: 'Condition, lot stamps, and core product temperatures are digitally logged.' },
  { number: '03', title: 'Store', desc: 'Inventory is assigned to the mathematically optimal storage chamber and rack.' },
  { number: '04', title: 'Monitor', desc: 'Environmental micro-climates are continuously simulated and stabilized.' },
  { number: '05', title: 'Optimize', desc: 'Warehouse activity, slotting, and energy efficiency are dynamically coordinated.' },
  { number: '06', title: 'Dispatch', desc: 'Products leave through sealed docks into verified refrigerated distribution fleets.' }
];

// -------------------------------------------------------------
// COLD CHAIN ARCHITECTURE 7 LAYERS
// -------------------------------------------------------------
export const COLD_CHAIN_ARCHITECTURE = [
  { layer: '01', name: 'Product', role: 'Perishable and biological inventory with critical thermal parameters.' },
  { layer: '02', name: 'Warehouse', role: 'Insulated structural envelope with multi-chamber thermal partitions.' },
  { layer: '03', name: 'Temperature Control', role: 'Cascade refrigeration, micro-chillers, and air diffusion systems.' },
  { layer: '04', name: 'Sensor Network', role: 'Wireless IoT mesh telemetry collecting temp, RH, and air velocity.' },
  { layer: '05', name: 'Inventory Intelligence', role: 'Real-time WMS tracking lot lifespans, FIFO priorities, and slot occupancy.' },
  { layer: '06', name: 'Operations Platform', role: 'Digital command center orchestrating picking routes, alerts, and dispatch.' },
  { layer: '07', name: 'Distribution', role: 'Cold chain transit coordination with active telemetry data loggers.' }
];
