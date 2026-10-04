export interface MedicineItem {
  id: string;
  name: string;
  genericName: string;
  category: 'Everyday Medicines' | 'Chronic Care' | 'Wellness & Immunity' | 'First Aid' | 'Vitamins & Supplements' | 'Family Care';
  dosage: string;
  packSize: string;
  priceAED: number;
  prescriptionRequired: boolean;
  inStock: boolean;
  temperatureControlled: boolean;
  tempRange: string;
  description: string;
  leadTimeMinutes: number;
}

export interface DeliveryTimelineStep {
  step: string;
  title: string;
  subtitle: string;
  status: 'completed' | 'in_progress' | 'pending';
  timestamp?: string;
  facility: string;
  telemetry: string;
  description: string;
}

export interface JourneyStage {
  stepNumber: string;
  name: string;
  title: string;
  summary: string;
  operationalDetail: string;
  icon: string;
  metricLabel: string;
  metricValue: string;
}

export interface MedivantaCapability {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  impactMetric: string;
  features: string[];
  operationalLayer: string;
}

export interface InventoryNode {
  id: string;
  hubName: string;
  location: string;
  temperatureZone: string;
  skuCount: number;
  coldChainIntegrity: number;
  dispatchReadiness: string;
  capacityUtilization: number;
  activeCouriers: number;
}

// -------------------------------------------------------------
// 1. MEDICINE CATALOG (DEMO DATA)
// -------------------------------------------------------------
export const MEDIVANTA_MEDICINES: MedicineItem[] = [
  {
    id: 'med-01',
    name: 'CardioFlow XR',
    genericName: 'Amlodipine Besylate & Valsartan',
    category: 'Chronic Care',
    dosage: '10mg / 160mg',
    packSize: '28 Film-Coated Tablets',
    priceAED: 145,
    prescriptionRequired: true,
    inStock: true,
    temperatureControlled: true,
    tempRange: '15°C – 25°C',
    description: 'Dual-action cardiovascular blood pressure maintenance. Batch RFID tracked with sealed tamper verification.',
    leadTimeMinutes: 22
  },
  {
    id: 'med-02',
    name: 'GlucoPrecision ER',
    genericName: 'Metformin Hydrochloride Extended Release',
    category: 'Chronic Care',
    dosage: '1000mg',
    packSize: '60 Extended-Release Tablets',
    priceAED: 88,
    prescriptionRequired: true,
    inStock: true,
    temperatureControlled: false,
    tempRange: 'Room Temperature',
    description: 'First-line glycemic regulation. Synchronized with automated monthly refill reminders.',
    leadTimeMinutes: 18
  },
  {
    id: 'med-03',
    name: 'ImmunoCore Plus',
    genericName: 'Liposomal Vitamin C + Zinc Chelate + Elderberry',
    category: 'Vitamins & Supplements',
    dosage: '1000mg / 25mg',
    packSize: '30 Single-Dose Sachets',
    priceAED: 110,
    prescriptionRequired: false,
    inStock: true,
    temperatureControlled: false,
    tempRange: 'Ambient',
    description: 'High-absorption micronutrient complex supporting respiratory and immune vitality.',
    leadTimeMinutes: 15
  },
  {
    id: 'med-04',
    name: 'RespiClear Inhaler',
    genericName: 'Fluticasone Propionate & Salmeterol',
    category: 'Everyday Medicines',
    dosage: '125mcg / 25mcg',
    packSize: '120 Actuations',
    priceAED: 195,
    prescriptionRequired: true,
    inStock: true,
    temperatureControlled: true,
    tempRange: '2°C – 8°C Pre-Activation',
    description: 'Targeted airway maintenance with Bluetooth-enabled smart dose tracking cap.',
    leadTimeMinutes: 25
  },
  {
    id: 'med-05',
    name: 'DermaProtect Soothing Gel',
    genericName: 'Sterile Hydrogel with Ceramide Complex',
    category: 'First Aid',
    dosage: '100g Tube',
    packSize: '1 Unit',
    priceAED: 65,
    prescriptionRequired: false,
    inStock: true,
    temperatureControlled: false,
    tempRange: 'Ambient',
    description: 'Hospital-grade barrier restoration for acute epidermal abrasions, burns, and dry micro-fissures.',
    leadTimeMinutes: 15
  },
  {
    id: 'med-06',
    name: 'NeuroCalm Night',
    genericName: 'Magnesium L-Threonate & Apigenin Complex',
    category: 'Wellness & Immunity',
    dosage: '500mg',
    packSize: '60 Vegan Capsules',
    priceAED: 160,
    prescriptionRequired: false,
    inStock: true,
    temperatureControlled: false,
    tempRange: 'Ambient',
    description: 'Bioavailable neurological relaxation compound promoting restorative circadian sleep architecture.',
    leadTimeMinutes: 20
  }
];

// -------------------------------------------------------------
// 2. THE MEDICINE JOURNEY (7 STAGES)
// -------------------------------------------------------------
export const MEDIVANTA_JOURNEY_STAGES: JourneyStage[] = [
  {
    stepNumber: '01',
    name: 'PRESCRIPTION',
    title: 'Digital Ingestion & Prescription Optical Capture',
    summary: 'Prescriptions uploaded via smartphone or sent electronically from clinics are securely ingested into the platform.',
    operationalDetail: 'Optical Character Recognition (OCR) isolates doctor credentials, active molecules, dosages, and dosage frequencies.',
    icon: 'FileText',
    metricLabel: 'Ingestion Speed',
    metricValue: '< 1.8 sec'
  },
  {
    stepNumber: '02',
    name: 'VERIFICATION',
    title: 'Pharmacist Clinical Review & Drug-Drug Interaction Check',
    summary: 'Licensed clinical pharmacists review dosage validity, contraindications, and patient allergy profiles in real-time.',
    operationalDetail: 'Cross-checked against national pharmaceutical registries and real-time clinical interaction databases.',
    icon: 'ShieldCheck',
    metricLabel: 'Verification Accuracy',
    metricValue: '100% Licensed Sign-Off'
  },
  {
    stepNumber: '03',
    name: 'FULFILLMENT',
    title: 'Robotic Dispensing & RFID Batch Serialization',
    summary: 'Automated fulfillment micro-hubs retrieve verified medications with zero cross-contamination risk.',
    operationalDetail: 'Each blister pack or vial receives an encrypted 2D DataMatrix code linked to the patient’s digital order.',
    icon: 'Cpu',
    metricLabel: 'Dispense Latency',
    metricValue: '4.2 min average'
  },
  {
    stepNumber: '04',
    name: 'QUALITY CHECK',
    title: 'Multi-Point Optical Inspection & Cold-Chain Sealing',
    summary: 'Computer-vision cameras verify seal integrity, expiration date, and label legibility before insulated packaging.',
    operationalDetail: 'Temperature-sensitive pharmaceuticals are packed with calibrated PCM coolants and active thermal logging chips.',
    icon: 'ShieldCheck',
    metricLabel: 'Packaging Standard',
    metricValue: 'Tamper-Evident Sealed'
  },
  {
    stepNumber: '05',
    name: 'DISPATCH',
    title: 'Intelligent Last-Mile Carrier Allocation',
    summary: 'Algorithmic route engine matches package dimensions and thermal requirements with certified climate-controlled couriers.',
    operationalDetail: 'Vehicle cold-vault parameters locked and synced to central dispatch telematics.',
    icon: 'Truck',
    metricLabel: 'Dispatch Time',
    metricValue: '< 6 min from QC'
  },
  {
    stepNumber: '06',
    name: 'LIVE DELIVERY',
    title: 'Sub-Second Telemetry & Real-Time Customer Visibility',
    summary: 'Customer monitors courier GPS position, compartment thermal status, and accurate down-to-the-minute ETA.',
    operationalDetail: 'Continuous cellular IoT relay updates temperature, humidity, and courier distance every 2 seconds.',
    icon: 'MapPin',
    metricLabel: 'Tracking Update',
    metricValue: '2.0s Live Ping'
  },
  {
    stepNumber: '07',
    name: 'DOORSTEP',
    title: 'Secure OTP Handover & Digital Administration Guidance',
    summary: 'Medicine handed directly to verified recipient with digital signature and personalized dosage instructions via app.',
    operationalDetail: 'Prescription closed out in the cloud; automated refill schedule synchronized to patient calendar.',
    icon: 'CheckCircle2',
    metricLabel: 'Handover Security',
    metricValue: 'Dual-Factor OTP Auth'
  }
];

// -------------------------------------------------------------
// 3. LIVE ORDER SIMULATION DATA (#MV-20481)
// -------------------------------------------------------------
export const SIMULATED_LIVE_ORDER = {
  orderNumber: 'MV-20481',
  customerName: 'Amina Al-Falasi',
  recipientRole: 'Verified Patient',
  destinationAddress: 'Villa 14, Palm Jumeirah Crescent, Dubai, UAE',
  pharmacyHub: 'MEDIVANTA Central Micro-Hub #04 (Al Quoz / Downtown)',
  courierName: 'Zayd K. (Certified Medical Logistics)',
  courierVehicle: 'Climate-Controlled Electric Fleet #DXB-914',
  currentStatus: 'OUT FOR DELIVERY',
  estimatedArrival: '11:42 AM (14 min remaining)',
  temperatureStatus: '4.8°C (Optimal Range: 2°C – 8°C)',
  batteryReserve: '94%',
  totalItems: 3,
  items: [
    { name: 'CardioFlow XR 10mg/160mg', qty: '1 Pack (28 Tabs)', type: 'Prescription Rx' },
    { name: 'RespiClear Inhaler 125mcg', qty: '1 Unit', type: 'Cold-Chain Rx' },
    { name: 'ImmunoCore Plus', qty: '1 Box (30 Sachets)', type: 'Wellness' }
  ],
  timeline: [
    {
      time: '10:15 AM',
      title: 'Prescription Uploaded & Ingested',
      desc: 'Digital Rx scan received with verified doctor DHA license.',
      completed: true
    },
    {
      time: '10:21 AM',
      title: 'Pharmacist Clinical Verification',
      desc: 'Dr. Tariq M. (PharmD) approved dosage & drug interaction matrix.',
      completed: true
    },
    {
      time: '10:38 AM',
      title: 'Automated Dispensing & Cold-Pack Seal',
      desc: 'RFID batch #MED-8819 sealed in calibrated PCM cold-vault.',
      completed: true
    },
    {
      time: '10:52 AM',
      title: 'Dispatched with Electric Courier',
      desc: 'Departed Central Hub #04 on optimized coastal route.',
      completed: true
    },
    {
      time: '11:28 AM',
      title: 'Out for Delivery (Current)',
      desc: 'Courier approaching destination zone via Sheikh Zayed Rd / Palm Gateway.',
      completed: true,
      current: true
    },
    {
      time: '11:42 AM',
      title: 'Doorstep Handover (Estimated)',
      desc: 'Dual-Factor OTP verification upon recipient arrival.',
      completed: false
    }
  ]
};

// -------------------------------------------------------------
// 4. INVENTORY NODES (SIMULATION)
// -------------------------------------------------------------
export const INVENTORY_HUBS: InventoryNode[] = [
  {
    id: 'hub-downtown',
    hubName: 'Downtown & DIFC Micro-Hub',
    location: 'Dubai Healthcare City 2',
    temperatureZone: 'Ambient 21°C / Cold 4°C',
    skuCount: 4200,
    coldChainIntegrity: 99.98,
    dispatchReadiness: '< 3.5 min',
    capacityUtilization: 72,
    activeCouriers: 18
  },
  {
    id: 'hub-marina',
    hubName: 'Marina & Palm Jumeirah Hub',
    location: 'Al Sufouh Logistics Center',
    temperatureZone: 'Ambient 20°C / Cold 3.8°C',
    skuCount: 3850,
    coldChainIntegrity: 99.99,
    dispatchReadiness: '< 4.0 min',
    capacityUtilization: 68,
    activeCouriers: 14
  },
  {
    id: 'hub-abudhabi',
    hubName: 'Abu Dhabi Capital Hub',
    location: 'Al Maryah Island Medical Hub',
    temperatureZone: 'Ambient 21°C / Cold 4.2°C',
    skuCount: 5100,
    coldChainIntegrity: 99.97,
    dispatchReadiness: '< 3.8 min',
    capacityUtilization: 81,
    activeCouriers: 22
  },
  {
    id: 'hub-sharjah',
    hubName: 'Northern Emirates Express Hub',
    location: 'Sharjah Innovation Park',
    temperatureZone: 'Ambient 22°C / Cold 4.0°C',
    skuCount: 2900,
    coldChainIntegrity: 99.95,
    dispatchReadiness: '< 4.5 min',
    capacityUtilization: 59,
    activeCouriers: 12
  }
];

// -------------------------------------------------------------
// 5. MEDIVANTA CAPABILITIES (8 MODULES)
// -------------------------------------------------------------
export const MEDIVANTA_CAPABILITIES: MedivantaCapability[] = [
  {
    id: 'prescription-fulfillment',
    tag: 'CAPABILITY 01',
    title: 'Prescription Fulfillment Engine',
    subtitle: 'End-to-End OCR & Clinical Pharmacist Workflow',
    description: 'Intelligent digital prescription validation that extracts molecular compounds, verifies doctor credentials, and checks for polypharmacy interactions.',
    icon: 'FileText',
    impactMetric: '100% Licensed Pharmacist Review',
    features: [
      'Multi-format prescription ingestion (camera, PDF, clinic EHR)',
      'Real-time national pharmaceutical database cross-referencing',
      'Automated contraindication & allergy flag engine',
      'Encrypted digital pharmacist sign-off protocol'
    ],
    operationalLayer: 'Clinical Verification'
  },
  {
    id: 'medicine-ordering',
    tag: 'CAPABILITY 02',
    title: 'Intuitive Medicine Ordering',
    subtitle: 'Fast, Accessible & Transparent Digital Pharmacy',
    description: 'Designed for patients, caregivers, and families with clear dosage guidance, transparent pricing in AED, and instant stock verification.',
    icon: 'ShoppingBag',
    impactMetric: '< 45s Re-Order Flow',
    features: [
      'Predictive chronic medication refill scheduling',
      'Transparent generic vs. brand-name comparative pricing',
      'Multi-patient household account management',
      'Instant insurance co-pay eligibility estimator'
    ],
    operationalLayer: 'Patient Experience'
  },
  {
    id: 'door-to-door',
    tag: 'CAPABILITY 03',
    title: 'Door-to-Door Healthcare Logistics',
    subtitle: 'Urban Micro-Hub Distribution Across UAE Metro Areas',
    description: 'Strategically positioned cold-storage micro-fulfillment centers engineered to reach any residential or business location in under 30 minutes.',
    icon: 'Truck',
    impactMetric: '< 28 min Average Transit Time',
    features: [
      'Sub-30 minute STAT emergency medicine delivery',
      'Scheduled recurring subscription drop-offs',
      'Dedicated concierge handover for vulnerable patients',
      'Geofenced secure locker and villa drop integration'
    ],
    operationalLayer: 'Logistics Orchestration'
  },
  {
    id: 'live-tracking',
    tag: 'CAPABILITY 04',
    title: 'Live Telemetry & Thermal Tracking',
    subtitle: 'Sub-Second Cold-Chain Surveillance in Transit',
    description: 'Unbroken visibility into the courier location, vehicle speed, compartment temperature, and exact arrival estimates updated every 2 seconds.',
    icon: 'MapPin',
    impactMetric: '2.0s Telemetry Refresh',
    features: [
      'Continuous IoT compartment temperature & humidity logging',
      'Real-time traffic-adjusted ETA calculation',
      'Automatic patient notification when 5 minutes away',
      'Visual interactive route map with courier identity verification'
    ],
    operationalLayer: 'Telemetry & IoT'
  },
  {
    id: 'smart-inventory',
    tag: 'CAPABILITY 05',
    title: 'Smart Inventory & Demand Signals',
    subtitle: 'Predictive Stocking & Zero Stock-Out Architecture',
    description: 'Machine learning demand forecasting analyzes regional epidemiological trends, seasonal patterns, and chronic refill cycles to ensure critical medicine availability.',
    icon: 'BarChart2',
    impactMetric: '99.8% Inventory Availability',
    features: [
      'Automated supplier reorder triggers based on velocity',
      'Batch expiration surveillance & FIFO rotation',
      'Multi-hub stock rebalancing without delivery delays',
      'Cold-storage power backup and environmental alerts'
    ],
    operationalLayer: 'Supply Chain Intelligence'
  },
  {
    id: 'order-management',
    tag: 'CAPABILITY 06',
    title: 'Centralized Order Lifecycle',
    subtitle: 'Unified Operational Dashboard for Dispatch & Support',
    description: 'Pharmacy operators, couriers, and customer care teams coordinate seamlessly on a single real-time operations console with zero blind spots.',
    icon: 'Layers',
    impactMetric: 'Zero Lost Orders',
    features: [
      'Automated courier matching based on vehicle climate capacity',
      'Exception management for address changes or patient rescheduling',
      'Bidirectional chat between pharmacist and patient',
      'Comprehensive digital audit log for regulatory compliance'
    ],
    operationalLayer: 'Operations Management'
  },
  {
    id: 'patient-notifications',
    tag: 'CAPABILITY 07',
    title: 'Care-First Patient Notifications',
    subtitle: 'Proactive Delivery, Dosage & Refill Updates',
    description: 'Multi-channel SMS, WhatsApp, and push alerts keeping patients informed of preparation milestones, live courier departures, and post-delivery administration tips.',
    icon: 'Bell',
    impactMetric: '100% Milestone Visibility',
    features: [
      'Automated WhatsApp delivery tracking link generation',
      'Smart refill alerts 5 days prior to prescription expiration',
      'Digital pill reminder integration with dosage schedule',
      'Multi-language English and Arabic communication support'
    ],
    operationalLayer: 'Customer Communication'
  },
  {
    id: 'healthcare-logistics',
    tag: 'CAPABILITY 08',
    title: 'Healthcare Logistics Infrastructure',
    subtitle: 'Sovereign UAE Compliance & Dual-Factor Verification',
    description: 'Certified medical couriers, tamper-evident security packaging, and dual-factor OTP verification at the doorstep to ensure controlled medications reach the intended patient.',
    icon: 'Shield',
    impactMetric: 'Zero Delivery Misplacement',
    features: [
      'Background-checked & medically certified delivery personnel',
      'Cryptographically sealed tamper-evident delivery pouches',
      'Secure SMS OTP required for delivery sign-off',
      'Compliant with UAE Ministry of Health & Prevention standards'
    ],
    operationalLayer: 'Trust & Governance'
  }
];

// -------------------------------------------------------------
// 6. MEDIVANTA METADATA
// -------------------------------------------------------------
export const MEDIVANTA_METADATA = {
  projectNumber: 73,
  brandName: 'MEDIVANTA',
  positioning: 'Intelligent Medicine Delivery Network',
  tagline: 'Healthcare, Delivered With Precision.',
  eyebrow: 'INTELLIGENT MEDICINE DELIVERY',
  headline: 'Healthcare, Delivered With Precision.',
  heroDescription: 'From verified prescriptions to your doorstep — a smarter medicine supply experience designed around reliability, visibility, and care.',
  journeyNotice: 'Prescription → Verification → Fulfillment → Quality Checked → Dispatch → Live Delivery → Doorstep',
  conceptualNotice: 'DELIVERY SIMULATION • CONCEPTUAL HEALTHCARE LOGISTICS • ALL TRACKING & INVENTORY DATA IS FOR SYSTEM DEMONSTRATION ONLY',
  uaeAnchor: 'Dubai, Abu Dhabi & Northern Emirates Logistics • Cold-Chain Precision Standard • Sub-30 Minute Metro Delivery Model'
};
