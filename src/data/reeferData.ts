export interface RouteDestination {
  id: string;
  country: string;
  flag: string;
  majorHubs: string[];
  distanceKm: number;
  borderPost: string;
  transitPermits: string;
  availability: 'Available Daily' | 'Scheduled Runs' | 'Express Border';
  typicalCargo: string[];
  tempRequirements: string;
  description: string;
}

export interface CargoType {
  id: string;
  name: string;
  category: string;
  temperatureRange: string;
  idealTemp: string;
  humidityControl: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface FleetTrailerUnit {
  id: string;
  unitCode: string;
  trailerModel: string;
  capacityTon: number;
  lengthMeter: number;
  coolingUnit: string;
  status: 'In Transit' | 'Loading JAFZA' | 'Loading Al Aweer' | 'Border Customs' | 'Pre-Trip Staged';
  currentRoute: string;
  liveTemp: string;
  location: string;
}

export const REEFER_ROUTES: RouteDestination[] = [
  {
    id: 'saudi-arabia',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    majorHubs: ['Riyadh Dry Port & Sulay', 'Jeddah Islamic Port', 'Dammam / Khobar Commercial Zone'],
    distanceKm: 980,
    borderPost: 'Al Ghuwaifat (UAE) / Al Batha (KSA)',
    transitPermits: 'ZATCA / Bayan / SABER Ready',
    availability: 'Available Daily',
    typicalCargo: ['Chilled Meat & Dairy', 'Fresh Produce', 'FMCG & Confectionery'],
    tempRequirements: '-18°C to +4°C dual-temp ready',
    description: 'Direct high-frequency cross-border arterial corridor connecting Dubai to Riyadh central distribution hubs and Eastern Province.'
  },
  {
    id: 'qatar',
    country: 'Qatar',
    flag: '🇶🇦',
    majorHubs: ['Doha Wholesale Market', 'Al Wakrah Logistics Park', 'Hamad Port Zone'],
    distanceKm: 650,
    borderPost: 'Salwa Transit Terminal',
    transitPermits: 'Abu Samra Border & GCC Transit Pass',
    availability: 'Available Daily',
    typicalCargo: ['Dairy & Fresh Poultry', 'HORECA Supplies', 'Frozen Gourmet Foods'],
    tempRequirements: '-18°C deep freeze & +2°C chill',
    description: 'Rapid cold-chain link for fresh food distributors, supermarket chains, and high-end hospitality sectors in Doha.'
  },
  {
    id: 'kuwait',
    country: 'Kuwait',
    flag: '🇰🇼',
    majorHubs: ['Kuwait City Cold Stores', 'Shuwaikh Industrial Area', 'Al Rai Food Depot'],
    distanceKm: 1250,
    borderPost: 'Nuwaiseeb Border Terminal',
    transitPermits: 'Saudi Transit Visa & Kuwait Customs Manifest',
    availability: 'Scheduled Runs',
    typicalCargo: ['Bulk Foodstuff', 'Frozen Food & Poultry', 'Beverages & Dairy'],
    tempRequirements: '-20°C frozen to +5°C controlled',
    description: 'Long-haul refrigerated freight corridor with dual-driver options for time-critical food imports into Kuwait.'
  },
  {
    id: 'bahrain',
    country: 'Bahrain',
    flag: '🇧🇭',
    majorHubs: ['Manama Central Market', 'Khalifa Bin Salman Port Freezone', 'Sitra Food Logistics'],
    distanceKm: 920,
    borderPost: 'King Fahd Causeway Customs',
    transitPermits: 'Bahrain Customs & Food Control Authority',
    availability: 'Available Daily',
    typicalCargo: ['Fresh Produce', 'Chilled Meat', 'Bakery Ingredients & Dairy'],
    tempRequirements: '+2°C to +4°C chilled produce',
    description: 'Seamless transit via Saudi overland corridor connecting directly into Bahrain over the King Fahd Causeway.'
  },
  {
    id: 'oman',
    country: 'Oman',
    flag: '🇴🇲',
    majorHubs: ['Muscat Central Market Mawaleh', 'Sohar Industrial Port', 'Salalah Food Gateway'],
    distanceKm: 420,
    borderPost: 'Hatta / Al Wajajah or Mezyad / Hafeet',
    transitPermits: 'Bayan Customs & Oman Agriculture Clearance',
    availability: 'Available Daily',
    typicalCargo: ['Fresh Fruits & Vegetables', 'Frozen Seafood', 'FMCG Products'],
    tempRequirements: '-18°C frozen & +4°C chilled',
    description: 'Fastest overland border connection with same-day and overnight temperature-guaranteed deliveries into Muscat.'
  },
  {
    id: 'syria',
    country: 'Syria',
    flag: '🇸🇾',
    majorHubs: ['Damascus Central Logistics', 'Aleppo Gateway Corridor', 'Industrial Freezones'],
    distanceKm: 2450,
    borderPost: 'Jordanian / Syrian Border Crossing',
    transitPermits: 'Regional Transit TIR Carnet & Arab League Transit',
    availability: 'Scheduled Runs',
    typicalCargo: ['Preserved Foodstuff', 'Bulk FMCG', 'Raw Food Ingredients'],
    tempRequirements: '+4°C chilled to +15°C regulated',
    description: 'Extended regional long-haul reefer transit managed with experienced cross-border convoys and pre-cleared customs routing.'
  }
];

export const CARGO_CATEGORIES: CargoType[] = [
  {
    id: 'fruits-vegetables',
    name: 'Fruits & Vegetables',
    category: 'Fresh Produce',
    temperatureRange: '+2°C to +6°C',
    idealTemp: '+3.5°C',
    humidityControl: '85% - 95% Controlled RH',
    description: 'Temperature-controlled transport for fresh produce from Al Aweer Wholesale Market directly to GCC supermarket shelves.',
    iconName: 'Apple',
    features: ['Ethylene ventilation', 'Airflow-calibrated floor grooving', 'Moisture-retention packing checks']
  },
  {
    id: 'dairy',
    name: 'Dairy',
    category: 'Cold-Chain Sensitive',
    temperatureRange: '0°C to +4°C',
    idealTemp: '+2.0°C',
    humidityControl: 'Strict Dry-Chill Environment',
    description: 'Cold-chain transportation for dairy products, fresh milk, yogurts, cheeses, and butter requiring non-stop thermal compliance.',
    iconName: 'Milk',
    features: ['Zero-break thermal audit', 'Pre-cooled trailers prior to loading', 'Sanitized food-grade interior']
  },
  {
    id: 'meat',
    name: 'Meat & Poultry',
    category: 'Protein & Halal Certified',
    temperatureRange: '-2°C (Chilled) / -18°C (Frozen)',
    idealTemp: '-18.0°C',
    humidityControl: 'Anti-condensation airflow',
    description: 'Temperature-controlled transportation for fresh chilled and deep-frozen meat, beef, lamb, and poultry across GCC borders.',
    iconName: 'Beef',
    features: ['Stainless steel meat hanging rails (optional)', 'Continuous datalogger printout', 'Veterinary health cert clearance']
  },
  {
    id: 'frozen-food',
    name: 'Frozen Food',
    category: 'Deep Freeze',
    temperatureRange: '-18°C to -25°C',
    idealTemp: '-20.5°C',
    humidityControl: 'Ultra-low moisture crystallization control',
    description: 'Deep-temperature transportation for frozen cargo, ice cream, packaged frozen meals, processed vegetables, and frozen pastry.',
    iconName: 'Snowflake',
    features: ['Heavy-duty Carrier Vector multi-temp units', 'High-density polyurethane walls', 'Secondary emergency cooling backup']
  },
  {
    id: 'foodstuff',
    name: 'Foodstuff',
    category: 'Ambient & Regulated',
    temperatureRange: '+12°C to +18°C',
    idealTemp: '+15.0°C',
    humidityControl: 'Dry ambient humidity control',
    description: 'Reliable regional movement of food products, confectionery, chocolates, bakery essentials, and specialty ingredients.',
    iconName: 'Package',
    features: ['Melt prevention in summer desert transit', 'Odor-isolated trailer chambers', 'Clean freight palletized securing']
  },
  {
    id: 'fmcg',
    name: 'FMCG & Cold Supply',
    category: 'Commercial Cold-Chain',
    temperatureRange: '+2°C to +8°C',
    idealTemp: '+4.0°C',
    humidityControl: 'Regulated atmospheric balance',
    description: 'Cold-chain support for temperature-sensitive FMCG shipments, cosmetics, biological concentrates, and premium retail products.',
    iconName: 'Boxes',
    features: ['Secure tamper-evident digital seals', 'Real-time door-open event sensors', 'Priority border clearance scheduling']
  }
];

export const FLEET_TRAILERS: FleetTrailerUnit[] = [
  { id: 'T-01', unitCode: 'DXB-RF-01', trailerModel: 'Schmitz Cargobull SKO-COOL 15M', capacityTon: 25, lengthMeter: 15, coolingUnit: 'Thermo King SLXi-400 Whisper', status: 'In Transit', currentRoute: 'Dubai → Riyadh', liveTemp: '-18.4°C', location: 'Saudi Border (Al Batha)' },
  { id: 'T-02', unitCode: 'DXB-RF-02', trailerModel: 'Chereau Inogam Multi-Temp 15M', capacityTon: 25, lengthMeter: 15, coolingUnit: 'Carrier Vector 1950 HE', status: 'Loading JAFZA', currentRoute: 'JAFZA → Doha', liveTemp: '+2.8°C', location: 'JAFZA Cold Warehouse Dock 14' },
  { id: 'T-03', unitCode: 'DXB-RF-03', trailerModel: 'Schmitz Cargobull SKO-COOL 15M', capacityTon: 25, lengthMeter: 15, coolingUnit: 'Thermo King SLXi-400 Whisper', status: 'In Transit', currentRoute: 'Dubai → Kuwait City', liveTemp: '-21.0°C', location: 'Hafr Al Batin Highway' },
  { id: 'T-04', unitCode: 'DXB-RF-04', trailerModel: 'Lamberet Heavy Cold 15M', capacityTon: 25, lengthMeter: 15, coolingUnit: 'Carrier Vector 1550', status: 'Loading Al Aweer', currentRoute: 'Al Aweer → Muscat', liveTemp: '+3.5°C', location: 'Al Aweer Central Fruit Market Block 4' },
  { id: 'T-05', unitCode: 'DXB-RF-05', trailerModel: 'Schmitz Cargobull SKO-COOL 15M', capacityTon: 25, lengthMeter: 15, coolingUnit: 'Thermo King SLXi-400 Whisper', status: 'Border Customs', currentRoute: 'Dubai → Manama', liveTemp: '+1.9°C', location: 'King Fahd Causeway Inspection Yard' },
  { id: 'T-06', unitCode: 'DXB-RF-06', trailerModel: 'Krone Cool Liner 15M', capacityTon: 25, lengthMeter: 15, coolingUnit: 'Carrier Vector 1950 HE', status: 'In Transit', currentRoute: 'Dubai → Riyadh', liveTemp: '-17.8°C', location: 'Al Kharj Expressway' },
  { id: 'T-07', unitCode: 'DXB-RF-07', trailerModel: 'Schmitz Cargobull SKO-COOL 15M', capacityTon: 25, lengthMeter: 15, coolingUnit: 'Thermo King SLXi-400 Whisper', status: 'Pre-Trip Staged', currentRoute: 'Dubai → Damascus', liveTemp: '+14.5°C', location: 'Al Aweer Depot Staging Bay 3' },
  { id: 'T-08', unitCode: 'DXB-RF-08', trailerModel: 'Lamberet Heavy Cold 15M', capacityTon: 25, lengthMeter: 15, coolingUnit: 'Carrier Vector 1950 HE', status: 'In Transit', currentRoute: 'Dubai → Doha', liveTemp: '-19.2°C', location: 'Salwa Transit Terminal' },
  { id: 'T-09', unitCode: 'DXB-RF-09', trailerModel: 'Schmitz Cargobull SKO-COOL 15M', capacityTon: 25, lengthMeter: 15, coolingUnit: 'Thermo King SLXi-400 Whisper', status: 'Loading JAFZA', currentRoute: 'JAFZA → Dammam', liveTemp: '+4.0°C', location: 'JAFZA South Gate 11' },
  { id: 'T-10', unitCode: 'DXB-RF-10', trailerModel: 'Chereau Inogam 15M', capacityTon: 25, lengthMeter: 15, coolingUnit: 'Carrier Vector 1550', status: 'In Transit', currentRoute: 'Dubai → Muscat', liveTemp: '+3.0°C', location: 'Al Wajajah Border Terminal' },
  { id: 'T-11', unitCode: 'DXB-RF-11', trailerModel: 'Schmitz Cargobull SKO-COOL 15M', capacityTon: 25, lengthMeter: 15, coolingUnit: 'Thermo King SLXi-400 Whisper', status: 'Pre-Trip Staged', currentRoute: 'Dubai Standby Fleet', liveTemp: '-18.0°C', location: 'Dubai Logistics City Base' },
  { id: 'T-12', unitCode: 'DXB-RF-12', trailerModel: 'Krone Cool Liner 15M', capacityTon: 25, lengthMeter: 15, coolingUnit: 'Carrier Vector 1950 HE', status: 'In Transit', currentRoute: 'Dubai → Riyadh', liveTemp: '-12.4°C', location: 'Ghuwaifat UAE Customs Scanner' },
  { id: 'T-13', unitCode: 'DXB-RF-13', trailerModel: 'Schmitz Cargobull SKO-COOL 15M', capacityTon: 25, lengthMeter: 15, coolingUnit: 'Thermo King SLXi-400 Whisper', status: 'Loading Al Aweer', currentRoute: 'Al Aweer → Kuwait City', liveTemp: '+2.4°C', location: 'Al Aweer Cold Storage 2B' },
  { id: 'T-14', unitCode: 'DXB-RF-14', trailerModel: 'Lamberet Heavy Cold 15M', capacityTon: 25, lengthMeter: 15, coolingUnit: 'Carrier Vector 1950 HE', status: 'Border Customs', currentRoute: 'Dubai → Shuwaikh', liveTemp: '-20.1°C', location: 'Al Nuwaiseeb Port Crossing' },
  { id: 'T-15', unitCode: 'DXB-RF-15', trailerModel: 'Schmitz Cargobull SKO-COOL 15M', capacityTon: 25, lengthMeter: 15, coolingUnit: 'Thermo King SLXi-400 Whisper', status: 'In Transit', currentRoute: 'Dubai → Jeddah', liveTemp: '-18.7°C', location: 'Taif Mountain Highway' },
  { id: 'T-16', unitCode: 'DXB-RF-16', trailerModel: 'Chereau Inogam 15M', capacityTon: 25, lengthMeter: 15, coolingUnit: 'Carrier Vector 1550', status: 'Loading JAFZA', currentRoute: 'JAFZA → Doha', liveTemp: '+1.5°C', location: 'JAFZA Logistics Bay 07' },
  { id: 'T-17', unitCode: 'DXB-RF-17', trailerModel: 'Schmitz Cargobull SKO-COOL 15M', capacityTon: 25, lengthMeter: 15, coolingUnit: 'Thermo King SLXi-400 Whisper', status: 'In Transit', currentRoute: 'Dubai → Manama', liveTemp: '+3.8°C', location: 'Khobar Expressway' },
  { id: 'T-18', unitCode: 'DXB-RF-18', trailerModel: 'Krone Cool Liner 15M', capacityTon: 25, lengthMeter: 15, coolingUnit: 'Carrier Vector 1950 HE', status: 'Pre-Trip Staged', currentRoute: 'Dubai Standby Fleet', liveTemp: '-18.0°C', location: 'Al Aweer Staging Bay 8' },
  { id: 'T-19', unitCode: 'DXB-RF-19', trailerModel: 'Schmitz Cargobull SKO-COOL 15M', capacityTon: 25, lengthMeter: 15, coolingUnit: 'Thermo King SLXi-400 Whisper', status: 'In Transit', currentRoute: 'Dubai → Sohar', liveTemp: '+2.1°C', location: 'Hatta Mountain Pass' },
  { id: 'T-20', unitCode: 'DXB-RF-20', trailerModel: 'Lamberet Heavy Cold 15M', capacityTon: 25, lengthMeter: 15, coolingUnit: 'Carrier Vector 1950 HE', status: 'Border Customs', currentRoute: 'Dubai → Riyadh', liveTemp: '-19.5°C', location: 'Al Batha KSA Customs Plaza' }
];

export const BORDER_CHECKPOINTS = [
  {
    step: '01',
    title: 'DUBAI ORIGIN DISPATCH',
    sub: 'Al Aweer / JAFZA Free Zone',
    action: 'Pre-cooling audit, temperature datalogger calibration, and container manifest verification.',
    status: 'Verified'
  },
  {
    step: '02',
    title: 'UAE OUTBOUND BORDER',
    sub: 'Al Ghuwaifat / Hatta Custom Clearance',
    action: 'Dubai Customs electronic clearance, X-ray scanning, weight bridge inspection (25-ton tare check).',
    status: 'Cleared'
  },
  {
    step: '03',
    title: 'GCC TRANSIT & CUSTOMS',
    sub: 'Bayan / ZATCA / SABER Protocols',
    action: 'Driver GCC commercial visa verification, food hygiene health certificate verification, import duty bond.',
    status: 'In Clearance'
  },
  {
    step: '04',
    title: 'REGIONAL ARTERIAL TRANSIT',
    sub: 'Highway Telemetry & Datalogging',
    action: 'Continuous GPS geofencing, dynamic speed control, Carrier telematics satellite check every 3 minutes.',
    status: 'En Route'
  },
  {
    step: '05',
    title: 'FINAL DESTINATION RECEIPT',
    sub: 'Consignee Cold Storage Gate',
    action: 'Dual temp-strip printout handover, door-seal breakage certification, dock unloading under sealed airflow.',
    status: 'Completed'
  }
];
