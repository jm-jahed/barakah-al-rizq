// scripts/generateMaintenanceCatalog.js
const fs = require('fs');
const path = require('path');

const DISCIPLINES = [
  {
    id: 'hvac-vrv-chiller',
    name: 'Precision HVAC, Chiller & VRV Overhaul',
    categoryName: 'Precision HVAC, Chiller & VRV Overhaul',
    serviceType: 'Preventative & Emergency Climate MEP',
    basePriceAED: 850,
    responseTime: '30 - 45 Mins Rapid Dispatch',
    certifiedStandards: ['Daikin VRV Master Certified', 'Carrier Pro', 'Dubai Municipality Clean Air Code', 'DEWA Energy Efficiency']
  },
  {
    id: 'electrical-thermal-db',
    name: 'High-Voltage Electrical & Thermal Diagnostics',
    categoryName: 'High-Voltage Electrical & Thermal Diagnostics',
    serviceType: 'Diagnostic & Remediation Protocol',
    basePriceAED: 650,
    responseTime: '30 - 60 Mins',
    certifiedStandards: ['DEWA Approved Master Electricians', 'FLIR Thermal Imaging Audit', 'Schneider Electric Partner']
  },
  {
    id: 'plumbing-water-sterilization',
    name: 'Sanitary Plumbing & Tank Sterilization',
    categoryName: 'Sanitary Plumbing & Tank Sterilization',
    serviceType: 'Hygiene & High-Pressure Plumbing',
    basePriceAED: 950,
    responseTime: '45 Mins',
    certifiedStandards: ['Dubai Municipality DM-HEALTH-7721', 'Grohe & Hansgrohe Master Certified', 'Acoustic Ultrasonic Leak Radar']
  },
  {
    id: 'villa-amc-retainers',
    name: 'Ultra-Luxury Villa Annual Contracts (AMC)',
    categoryName: 'Ultra-Luxury Villa Annual Contracts (AMC)',
    serviceType: 'Comprehensive Full-Year Retainer',
    basePriceAED: 8500,
    responseTime: 'VIP Priority Unlimited 24/7',
    certifiedStandards: ['100% Parts & Labor Coverage', 'Dedicated Mobile Workshop Van', 'Quarterly Deep Sanitization']
  },
  {
    id: 'emergency-rapid-dispatch',
    name: 'Emergency Rapid Response Van Dispatch',
    categoryName: 'Emergency Rapid Response Van Dispatch',
    serviceType: 'Critical Incident Rapid Resolution',
    basePriceAED: 450,
    responseTime: 'Under 30 Mins Guaranteed',
    certifiedStandards: ['GPS Tracked Fleet in Palm/Emirates Hills', 'Onboard Spare Parts Vault', 'Certified MEP Technicians']
  },
  {
    id: 'smart-iot-irrigation',
    name: 'Smart Home IoT & Automatic Irrigation',
    categoryName: 'Smart Home IoT & Automatic Irrigation',
    serviceType: 'Automation & Water Optimization',
    basePriceAED: 750,
    responseTime: 'Same-Day Dispatch',
    certifiedStandards: ['KNX & Crestron Certified', 'Hunter Smart Weather Matrix', 'Rain Bird Flow Monitoring']
  },
  {
    id: 'pool-chiller-maintenance',
    name: 'Swimming Pool Chemistry & Heat-Pump Servicing',
    categoryName: 'Swimming Pool Chemistry & Heat-Pump Servicing',
    serviceType: 'Aquatic Sanitation & Mechanical MEP',
    basePriceAED: 1100,
    responseTime: 'Bi-Weekly or On-Demand',
    certifiedStandards: ['Spectrophotometer Water Analysis', 'Pentair & Hayward Certified', 'Ozone & UV Sterilization']
  },
  {
    id: 'facade-masonry-pressure',
    name: 'Exterior Façade, Grout & High-Pressure Wash',
    categoryName: 'Exterior Façade, Grout & High-Pressure Wash',
    serviceType: 'Architectural Exterior Restoration',
    basePriceAED: 1450,
    responseTime: 'Scheduled 48h Window',
    certifiedStandards: ['Kärcher Industrial 350-Bar Units', 'Lithofin Nano-Sealers', 'Rope Access IRATA Level-3']
  }
];

const COMMUNITIES = [
  'Palm Jumeirah Signature Villas & Fronds',
  'Emirates Hills & Montgomerie Mansions',
  'Al Barari Botanical Reserve Villas',
  'Dubai Hills Estate Fairway Mansions',
  'Downtown Dubai Luxury Sky Penthouses',
  'Jumeirah Golf Estates & Whispering Pines',
  'Jumeirah Bay Island Waterfront Residences',
  'Saadiyat Beach Villas, Abu Dhabi',
  'Pearl Jumeirah Waterfront Estates',
  'Meadows & Lakes Executive Residences'
];

const IMAGES = [
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=80'
];

const catalog = [];
let idCounter = 1;

DISCIPLINES.forEach((disc) => {
  for (let i = 1; i <= 20; i++) {
    const paddedId = String(idCounter).padStart(3, '0');
    const id = `AM-${paddedId}`;
    const community = COMMUNITIES[(idCounter + i) % COMMUNITIES.length];
    const imgIndex = (idCounter + i) % IMAGES.length;

    let customTitle = '';
    if (disc.id === 'hvac-vrv-chiller') {
      const types = [
        'Complete Hydro-Coil Deep Pressure Wash & Antibacterial Sanitization',
        'Freon R410A Eco-Recharge & Compressor Efficiency Tune-Up',
        'Smart Thermostat Digital Calibration & Air Duct Endoscopy',
        'Central Chiller Heat-Exchanger Descaling & Chemical Flush',
        'Emergency Blower Motor Replacement & Vibration Balancing'
      ];
      customTitle = `${types[i % types.length]} (${community.split(' ')[0]})`;
    } else if (disc.id === 'electrical-thermal-db') {
      const types = [
        'FLIR Thermal Infrared Distribution Board Load Diagnostics',
        'DEWA Meter Load Balancing & Earth Leakage Relay Calibration',
        'Whole-Villa Surge Protection & Harmonic Filter Installation',
        'Smart Lighting Scene Recalibration & LED Driver Replacement',
        'Underground Cable Fault Radar Locating & Waterproof Splice'
      ];
      customTitle = `${types[i % types.length]} for ${community.split(' ')[0]}`;
    } else if (disc.id === 'plumbing-water-sterilization') {
      const types = [
        'Dubai Municipality Approved Water Tank High-Pressure Bio-Wash',
        'Acoustic Ultrasonic Non-Invasive Concealed Pipe Leak Detection',
        'High-Pressure Booster Pump Overhaul & Pressure Vessel Calibration',
        'Whole-Villa 5-Stage Water Filtration & Softener Media Refresh',
        'Italian Luxury Sanitaryware Faucet Cartridge & Valve Service'
      ];
      customTitle = `${types[i % types.length]} — ${community.split(' ')[0]}`;
    } else if (disc.id === 'villa-amc-retainers') {
      const types = [
        'Imperial Sovereign Villa 365-Day Unlimited All-Inclusive AMC',
        'Diamond Tier 5-Bedroom Mansions Preventative MEP Contract',
        'Platinum 4-Bedroom Waterfront Villa Comprehensive Care Contract',
        'Sky Penthouse Priority VIP Climate & Electrical Retainer',
        'Bespoke Family Office Estate Facility Management Contract'
      ];
      customTitle = `${types[i % types.length]} (${community.split(' ')[0]})`;
    } else if (disc.id === 'emergency-rapid-dispatch') {
      const types = [
        'Sub-30 Min Emergency Total Power Blackout Rapid Response',
        'Critical Burst Water Pipe & Major Flooding Extraction Squad',
        'Complete AC Failure Emergency Chiller Compressor Bypass',
        'Smart Lockout & Biometric Access Override Rapid Dispatch',
        'Emergency Sewage Backup High-Pressure Jetting Squad'
      ];
      customTitle = `${types[i % types.length]} [${community.split(' ')[0]}]`;
    } else if (disc.id === 'smart-iot-irrigation') {
      const types = [
        'Hunter Smart Solar-Sync Irrigation Controller Reconfiguration',
        'Solenoid Valve Replacement & Sub-Surface Drip Pressure Check',
        'KNX Smart Automation Hub Firmware Sync & Logic Audit',
        'Automated Motorized Curtain Track & Sensor Tuning',
        'Outdoor Garden Architectural Lighting Repair & Transformer Fix'
      ];
      customTitle = `${types[i % types.length]} for ${community.split(' ')[0]}`;
    } else if (disc.id === 'pool-chiller-maintenance') {
      const types = [
        'Infinity Pool Dual Heat-Cool Inverter Chiller Overhaul',
        'Automated Chemical Dosing & Salt Chlorinator Cell Acid Bath',
        'Sand Filter Media Replacement with Grade-1 Activated AFM Glass',
        'Underground Pool Pipe Hydrostatic Pressure Leak Test',
        'Underwater LED Lighting Replacement & Transformer Waterproofing'
      ];
      customTitle = `${types[i % types.length]} — ${community.split(' ')[0]}`;
    } else {
      const types = [
        'Travertine & Limestone Exterior Façade 350-Bar Rotary Clean',
        'Interlock Paver Hydro-Blast & Polymeric Sand Joint Sealing',
        'Bioclimatic Pergola Motor Mechanism Lubrication & Seal Refresh',
        'Teak Decking Chemical Stripping & Marine-Grade UV Oil Coating',
        'Exterior Window Nano-Ceramic Hydrophobic Coating Application'
      ];
      customTitle = `${types[i % types.length]} (${community.split(' ')[0]})`;
    }

    const priceAED = disc.id === 'villa-amc-retainers'
      ? disc.basePriceAED + (i * 950)
      : disc.basePriceAED + (i * 75);
    const originalPriceAED = Math.round(priceAED * 1.25);
    const durationHours = disc.id === 'villa-amc-retainers' ? '12-Month Annual Contract' : `${2 + (i % 4)} Hours`;

    catalog.push({
      id,
      title: customTitle,
      slug: `${disc.id}-${id.toLowerCase()}`,
      categoryId: disc.id,
      categoryName: disc.categoryName,
      communityTarget: community,
      serviceType: disc.serviceType,
      responseTime: disc.responseTime,
      durationHours,
      priceAED,
      originalPriceAED,
      heroImage: IMAGES[imgIndex],
      description: `Executed by certified Grade-1 MEP engineers and Master technicians using GPS-dispatched mobile workshop vans fully stocked with genuine European parts.`,
      deliverables: [
        `Comprehensive digital diagnostic report with before/after FLIR thermal imagery`,
        `Direct dispatch of licensed technician team in branded mobile service van`,
        `100% genuine replacement parts with 12-month manufacturer warranty`,
        `Dubai Municipality health & safety compliance checklist sign-off`,
        `Real-time GPS tracking link sent via SMS and WhatsApp upon dispatch`
      ],
      certifiedStandards: disc.certifiedStandards,
      warrantyNotice: '100% First-Time Fix SLA Guarantee • 12-Month Warranty on All Installed Parts'
    });

    idCounter++;
  }
});

const fileContent = `// Auto-generated 160+ Enterprise Facility Management & MEP Scopes for AURA MAINTENANCE UAE
export interface MaintenanceScope {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  categoryName: string;
  communityTarget: string;
  serviceType: string;
  responseTime: string;
  durationHours: string;
  priceAED: number;
  originalPriceAED?: number;
  heroImage: string;
  description: string;
  deliverables: string[];
  certifiedStandards: string[];
  warrantyNotice: string;
}

export const MAINTENANCE_SCOPES_CATALOG: MaintenanceScope[] = ${JSON.stringify(catalog, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/maintenanceCatalogData.ts'), fileContent, 'utf8');
console.log(`Successfully generated ${catalog.length} maintenance scopes in src/data/maintenanceCatalogData.ts!`);
