export interface WaterZone {
  id: string;
  name: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Hospitality' | 'Critical Infrastructure';
  flowRateM3H: number;
  pressureBar: number;
  status: 'Optimal' | 'Balancing' | 'High-Demand';
  dailyConsumptionM3: string;
  activeSensors: number;
  waterQualityIndex: number;
  description: string;
  uaeDeploymentArea: string;
}

export interface ReservoirNode {
  id: string;
  name: string;
  currentLevelPct: number;
  capacityMegaLitres: number;
  inflowM3H: number;
  outflowM3H: number;
  status: 'Balanced' | 'Filling' | 'Discharging';
  forecastDemand24h: string;
  location: string;
}

export interface WaterJourneyStage {
  step: string;
  name: string;
  title: string;
  description: string;
  subDescription: string;
  technicalMechanism: string;
  icon: string;
  metric: { label: string; value: string };
}

export interface WaterQualityIndicator {
  id: string;
  parameter: string;
  currentValue: string;
  targetRange: string;
  status: 'Optimal' | 'Normal' | 'Calibrating';
  sensorId: string;
  unit: string;
  description: string;
}

export interface SmartDistributionStep {
  stepNumber: number;
  label: string;
  title: string;
  action: string;
  automatedResponse: string;
  timeDelta: string;
}

export interface LeakAnomalySignal {
  id: string;
  pipelineSegment: string;
  severity: 'Minor Flow Deviation' | 'Pressure Variance' | 'Normal Telemetry';
  detectedPressureDropBar: number;
  flowVariancePct: string;
  zone: string;
  estimatedLocation: string;
  status: 'INVESTIGATING' | 'MONITORING' | 'RESOLVED';
}

export interface WaterCapability {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  impactMetric: string;
  features: string[];
  techStack: string[];
}

export interface CriticalInfraSector {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  resilienceStandard: string;
  priorityLevel: 'Tier 1 Critical' | 'High Priority' | 'Essential';
  failoverMechanism: string;
}

export interface WaterArchitectureTier {
  tierId: string;
  tierNumber: string;
  name: string;
  role: string;
  summary: string;
  deepDive: string;
  technologies: string[];
}

// -------------------------------------------------------------
// 1. SMART WATER NETWORK ZONES
// -------------------------------------------------------------
export const AQUAVANTA_ZONES: WaterZone[] = [
  {
    id: 'residential-core',
    name: 'District Residential Alpha',
    category: 'Residential',
    flowRateM3H: 4250,
    pressureBar: 3.8,
    status: 'Optimal',
    dailyConsumptionM3: '98,400 m³',
    activeSensors: 1420,
    waterQualityIndex: 99.4,
    description: 'High-density smart residential community with automated household smart meters and dynamic pressure balancing.',
    uaeDeploymentArea: 'Dubai Marina & Jumeirah Beach Residence Corridor'
  },
  {
    id: 'commercial-downtown',
    name: 'Metropolitan Commercial Core',
    category: 'Commercial',
    flowRateM3H: 3180,
    pressureBar: 4.2,
    status: 'Optimal',
    dailyConsumptionM3: '74,200 m³',
    activeSensors: 980,
    waterQualityIndex: 99.7,
    description: 'Commercial high-rises and corporate headquarters requiring precision pressure regulation for vertical cooling towers.',
    uaeDeploymentArea: 'DIFC, Business Bay & Downtown Dubai'
  },
  {
    id: 'hospitality-coastal',
    name: 'Coastal Hospitality Hub',
    category: 'Hospitality',
    flowRateM3H: 2640,
    pressureBar: 3.9,
    status: 'Balancing',
    dailyConsumptionM3: '58,900 m³',
    activeSensors: 740,
    waterQualityIndex: 99.8,
    description: 'Luxury beachfront resorts and leisure water facilities with fluctuating peak weekend demand curves.',
    uaeDeploymentArea: 'Palm Jumeirah & Abu Dhabi Saadiyat Island'
  },
  {
    id: 'industrial-logistics',
    name: 'Industrial & Manufacturing Zone',
    category: 'Industrial',
    flowRateM3H: 5800,
    pressureBar: 5.1,
    status: 'Optimal',
    dailyConsumptionM3: '135,000 m³',
    activeSensors: 1650,
    waterQualityIndex: 98.9,
    description: 'Heavy manufacturing, concrete curing, and chemical processing facilities utilizing recycled greywater and potable grids.',
    uaeDeploymentArea: 'Jebel Ali Industrial Area & KIZAD Abu Dhabi'
  },
  {
    id: 'critical-medical',
    name: 'Medical & Healthcare District',
    category: 'Critical Infrastructure',
    flowRateM3H: 1450,
    pressureBar: 4.0,
    status: 'Optimal',
    dailyConsumptionM3: '32,400 m³',
    activeSensors: 620,
    waterQualityIndex: 99.9,
    description: 'Hospitals, emergency surgical clinics, and laboratory sterilization facilities backed by dual-redundant ring mains.',
    uaeDeploymentArea: 'Dubai Healthcare City & Sheikh Shakhbout Medical City'
  }
];

// -------------------------------------------------------------
// 2. RESERVOIR INTELLIGENCE NODES
// -------------------------------------------------------------
export const RESERVOIR_NODES: ReservoirNode[] = [
  {
    id: 'res-alpha',
    name: 'Al Marmoom Central Reservoir #01',
    currentLevelPct: 88.4,
    capacityMegaLitres: 450,
    inflowM3H: 18500,
    outflowM3H: 17200,
    status: 'Balanced',
    forecastDemand24h: '+4.2% Tomorrow Morning',
    location: 'Dubai South Strategic Reserve'
  },
  {
    id: 'res-beta',
    name: 'Al Taweelah Strategic Coastal Vault',
    currentLevelPct: 92.1,
    capacityMegaLitres: 600,
    inflowM3H: 24000,
    outflowM3H: 21500,
    status: 'Filling',
    forecastDemand24h: 'Nominal Commercial Inflow',
    location: 'Abu Dhabi Coastal Interconnect'
  },
  {
    id: 'res-gamma',
    name: 'Hatta Mountain Elevated Storage',
    currentLevelPct: 76.5,
    capacityMegaLitres: 280,
    inflowM3H: 9200,
    outflowM3H: 11400,
    status: 'Discharging',
    forecastDemand24h: 'Hydro-Power & Local Grid Balancing',
    location: 'Hatta Mountain Strategic Reserve'
  }
];

// -------------------------------------------------------------
// 3. THE WATER JOURNEY (FROM SOURCE TO CITY)
// -------------------------------------------------------------
export const WATER_JOURNEY_STAGES: WaterJourneyStage[] = [
  {
    step: '01',
    name: 'SOURCE',
    title: 'Precision Extraction & Desalination Ingress',
    description: 'Seawater reverse osmosis (SWRO) and natural aquifer sources enter the smart intake system with automated salinity and temperature logging.',
    subDescription: 'Ultra-low energy recovery pressure exchangers optimize energy efficiency at ingress.',
    technicalMechanism: 'Continuous multi-spectral spectrophotometry at main intake valves.',
    icon: 'Droplets',
    metric: { label: 'Intake Velocity', value: '42,000 m³/hr' }
  },
  {
    step: '02',
    name: 'TREATMENT',
    title: 'Multi-Stage Advanced Purification & Quality Control',
    description: 'Water passes through ultrafiltration, mineralization remineralization, and UV disinfection with real-time chemical balance adjustments.',
    subDescription: 'Automated micro-dosing systems maintain optimal mineral balance for pure drinking water.',
    technicalMechanism: 'Closed-loop PLC control with dual-redundant chlorine sensor arrays.',
    icon: 'Filter',
    metric: { label: 'Purity Standard', value: '99.98% WHO Standard' }
  },
  {
    step: '03',
    name: 'STORAGE',
    title: 'Dynamic Strategic Reservoirs & Enclosed Vaults',
    description: 'Water is pumped to covered strategic reservoirs equipped with acoustic water-level meters and robotic internal inspection drones.',
    subDescription: 'Predictive machine-learning algorithms calculate 48-hour municipal demand to prevent stagnation.',
    technicalMechanism: 'Acoustic resonance level detection with automated turnover cycles.',
    icon: 'Database',
    metric: { label: 'Strategic Reserve', value: '1,330 MegaLitres' }
  },
  {
    step: '04',
    name: 'DISTRIBUTION',
    title: 'Smart Pressure-Managed Pipeline Grid',
    description: 'High-efficiency variable frequency drive (VFD) booster pumps and autonomous PRVs route water through looped district metering areas (DMAs).',
    subDescription: 'Looped ring architectures guarantee uninterrupted flow even during localized maintenance.',
    technicalMechanism: 'eBPF-synchronized SCADA telemetry with automated valve modulation.',
    icon: 'Network',
    metric: { label: 'Pipeline Network', value: '8,450 km Active Mains' }
  },
  {
    step: '05',
    name: 'MONITORING',
    title: 'Dense IoT Sensor Mesh & Real-Time Telemetry',
    description: 'Sub-second acoustic hydrophones, electromagnetic flowmeters, and pressure transducers continuously stream network health indicators.',
    subDescription: 'Over 24,000 telemetry nodes identify microscopic anomalies before they turn into bursts.',
    technicalMechanism: 'LoRaWAN and NB-IoT telemetry backhauled to central operations.',
    icon: 'Activity',
    metric: { label: 'Active Telemetry Nodes', value: '24,800 Sensors' }
  },
  {
    step: '06',
    name: 'DELIVERY',
    title: 'Precision End-Point Delivery & Consumption Analytics',
    description: 'Water arrives at homes, commercial skyscrapers, and industrial parks with guaranteed pressure, temperature, and microbiological safety.',
    subDescription: 'Ultrasonic smart meters provide consumers with real-time consumption visibility.',
    metric: { label: 'Customer Endpoints', value: '450,000+ Connections' },
    technicalMechanism: 'Bi-directional AMI smart meters communicating on 15-minute intervals.',
    icon: 'Home'
  }
];

// -------------------------------------------------------------
// 4. WATER QUALITY INDICATORS (ILLUSTRATIVE DATA)
// -------------------------------------------------------------
export const WATER_QUALITY_INDICATORS: WaterQualityIndicator[] = [
  {
    id: 'turbidity',
    parameter: 'Turbidity (Clarity)',
    currentValue: '0.12',
    unit: 'NTU',
    targetRange: '< 0.5 NTU',
    status: 'Optimal',
    sensorId: 'TURB-DXB-409',
    description: 'Laser nephelometry optical sensor verifying zero suspended particulates.'
  },
  {
    id: 'ph-level',
    parameter: 'pH Balance',
    currentValue: '7.42',
    unit: 'pH',
    targetRange: '7.2 – 7.8 pH',
    status: 'Optimal',
    sensorId: 'PH-DXB-102',
    description: 'Glass electrode sensor measuring neutral alkalinity balance.'
  },
  {
    id: 'free-chlorine',
    parameter: 'Free Residual Chlorine',
    currentValue: '0.45',
    unit: 'mg/L',
    targetRange: '0.2 – 0.6 mg/L',
    status: 'Optimal',
    sensorId: 'CL-DXB-883',
    description: 'Amperometric sensor ensuring active microbiological protection throughout the pipeline.'
  },
  {
    id: 'conductivity',
    parameter: 'Total Dissolved Solids (TDS)',
    currentValue: '118',
    unit: 'ppm',
    targetRange: '100 – 150 ppm',
    status: 'Optimal',
    sensorId: 'TDS-DXB-501',
    description: 'Toroidal conductivity meter verifying balanced calcium and magnesium remineralization.'
  },
  {
    id: 'temperature',
    parameter: 'Distribution Temperature',
    currentValue: '21.8',
    unit: '°C',
    targetRange: '18 – 24 °C',
    status: 'Optimal',
    sensorId: 'TEMP-DXB-214',
    description: 'Thermal RTD probe ensuring cold water circulation in insulated subterranean conduits.'
  },
  {
    id: 'sensor-health',
    parameter: 'Electrochemical Sensor Health',
    currentValue: '99.8',
    unit: '%',
    targetRange: '> 99.0%',
    status: 'Optimal',
    sensorId: 'DIAG-MESH-01',
    description: 'Automated self-calibration and sensor diagnostic verification.'
  }
];

// -------------------------------------------------------------
// 5. SMART DISTRIBUTION ADAPTIVE FLOW
// -------------------------------------------------------------
export const SMART_DISTRIBUTION_FLOW: SmartDistributionStep[] = [
  {
    stepNumber: 1,
    label: 'STAGE 01',
    title: 'Demand Detected',
    action: 'Morning surge detected across residential sector; smart meters log 35% increase in withdrawal velocity.',
    automatedResponse: 'Trigger predictive distribution profile #AM-R4',
    timeDelta: '+0.0s'
  },
  {
    stepNumber: 2,
    label: 'STAGE 02',
    title: 'Network Conditions Evaluated',
    action: 'Central SCADA engine scans line pressure across 12 District Metering Areas (DMAs).',
    automatedResponse: 'Acoustic hydrophone telemetry confirms zero friction anomalies',
    timeDelta: '+0.4s'
  },
  {
    stepNumber: 3,
    label: 'STAGE 03',
    title: 'Pressure Optimized',
    action: 'Variable Frequency Drive (VFD) pumps at Al Marmoom ramp to 62 Hz to counteract frictional head loss.',
    automatedResponse: 'Downstream Pressure Reducing Valves (PRVs) modulate by 4.2%',
    timeDelta: '+1.2s'
  },
  {
    stepNumber: 4,
    label: 'STAGE 04',
    title: 'Flow Rebalanced',
    action: 'Secondary feeder lines open to deliver supplementary 850 m³/h to high-demand residential sectors.',
    automatedResponse: 'Looped ring switches prevent pressure transients and water hammer',
    timeDelta: '+2.8s'
  },
  {
    stepNumber: 5,
    label: 'STAGE 05',
    title: 'Distribution Updated',
    action: 'Pressure stabilizes at 3.85 bar across all high-rise booster manifolds.',
    automatedResponse: 'Smart meters confirm uniform delivery across 45,000 households',
    timeDelta: '+4.5s'
  },
  {
    stepNumber: 6,
    label: 'STAGE 06',
    title: 'Network Stabilized',
    action: 'Continuous closed-loop control maintains equilibrium with zero energy waste or line over-pressurization.',
    automatedResponse: 'System logs steady-state telemetry into operations archive',
    timeDelta: '+6.0s'
  }
];

// -------------------------------------------------------------
// 6. LEAK INTELLIGENCE & ANOMALY DETECTION
// -------------------------------------------------------------
export const LEAK_ANOMALY_SIGNALS: LeakAnomalySignal[] = [
  {
    id: 'leak-101',
    pipelineSegment: 'Pipeline Trunk Section #48-B',
    severity: 'Pressure Variance',
    detectedPressureDropBar: 0.28,
    flowVariancePct: '+3.4% Differential',
    zone: 'Industrial Sector 3 (Jebel Ali Grid)',
    estimatedLocation: 'KM 14.8 Subterranean Feeder',
    status: 'INVESTIGATING'
  },
  {
    id: 'leak-102',
    pipelineSegment: 'Coastal Ring Main #12-A',
    severity: 'Normal Telemetry',
    detectedPressureDropBar: 0.02,
    flowVariancePct: '0.0% Nominal',
    zone: 'Palm Jumeirah Distribution Ring',
    estimatedLocation: 'Subsea Main Interconnect',
    status: 'RESOLVED'
  },
  {
    id: 'leak-103',
    pipelineSegment: 'Downtown High-Pressure Feeder #04',
    severity: 'Minor Flow Deviation',
    detectedPressureDropBar: 0.12,
    flowVariancePct: '+1.1% Differential',
    zone: 'Business Bay Commercial Zone',
    estimatedLocation: 'Junction Node 88',
    status: 'MONITORING'
  }
];

// -------------------------------------------------------------
// 7. INFRASTRUCTURE CAPABILITIES (8 MODULES)
// -------------------------------------------------------------
export const AQUAVANTA_CAPABILITIES: WaterCapability[] = [
  {
    id: 'network-intelligence',
    tag: 'CAPABILITY 01',
    title: 'Network Intelligence',
    subtitle: 'Real-Time Telemetry Across Thousands of Subterranean Nodes',
    description: 'Gain holistic visibility into pressure dynamics, flow velocity, and water quality parameters with sub-second IoT telemetry.',
    icon: 'Activity',
    impactMetric: '<500ms Signal Latency',
    features: [
      'Sub-second SCADA integration',
      'LoRaWAN & NB-IoT sensor backhaul',
      'Continuous hydraulic model reconciliation',
      'Acoustic resonance pipeline health scanning'
    ],
    techStack: ['SCADA', 'LoRaWAN', 'GIS', 'Time-Series DB']
  },
  {
    id: 'flow-management',
    tag: 'CAPABILITY 02',
    title: 'Flow Management',
    subtitle: 'Autonomous Pressure Management & Looped Grid Routing',
    description: 'Balance flow across complex District Metering Areas (DMAs) using intelligent pressure reducing valves and variable-speed pumping stations.',
    icon: 'Network',
    impactMetric: 'Zero Water Hammer Transients',
    features: [
      'Automated PRV modulation algorithms',
      'Dynamic District Metering Area (DMA) zoning',
      'Variable Frequency Drive (VFD) pump optimization',
      'Multi-source blended flow management'
    ],
    techStack: ['Hydraulic Models', 'VFD Control', 'Modbus TCP', 'PLC Automation']
  },
  {
    id: 'leak-detection',
    tag: 'CAPABILITY 03',
    title: 'Leak Intelligence',
    subtitle: 'Acoustic Anomaly Detection & Non-Revenue Water Reduction',
    description: 'Pinpoint microscopic subterranean pipeline fissures before surfacing using machine-learning acoustic correlation and pressure gradient analytics.',
    icon: 'Radio',
    impactMetric: 'Sub-Meter Pinpoint Accuracy',
    features: [
      'Cross-correlation acoustic hydrophone analysis',
      'Transient pressure wave anomaly tracking',
      'Automated Non-Revenue Water (NRW) accounting',
      'Priority maintenance dispatch integration'
    ],
    techStack: ['Acoustic ML', 'Wavelet Transform', 'Pressure Wave Analytics']
  },
  {
    id: 'water-quality',
    tag: 'CAPABILITY 04',
    title: 'Water Quality',
    subtitle: 'Continuous Chemical & Microbiological Safety Monitoring',
    description: 'Multi-parameter electrochemical probes monitor chlorine residual, pH, turbidity, and mineral balance continuously across the distribution grid.',
    icon: 'ShieldCheck',
    impactMetric: '100% WHO Potability Standard',
    features: [
      'Laser nephelometry turbidity sensing',
      'Amperometric free chlorine monitoring',
      'Total Dissolved Solids (TDS) mineral tracking',
      'Automated flush valve actuation on quality variance'
    ],
    techStack: ['Spectrophotometry', 'Amperometry', 'IoT Telemetry']
  },
  {
    id: 'demand-forecasting',
    tag: 'CAPABILITY 05',
    title: 'Demand Forecasting',
    subtitle: 'Predictive Resource Planning & Weather-Aware Modeling',
    description: 'Machine-learning models anticipate municipal water consumption 24 to 72 hours in advance based on historical patterns, weather forecasts, and calendar events.',
    icon: 'TrendingUp',
    impactMetric: '98.4% Forecast Precision',
    features: [
      'Weather-correlated diurnal consumption curves',
      'Hospitality & tourism peak event planning',
      'Automated reservoir recharge scheduling',
      'Energy tariff-aware pumping optimization'
    ],
    techStack: ['LSTM Networks', 'Weather APIs', 'Predictive Optimization']
  },
  {
    id: 'asset-monitoring',
    tag: 'CAPABILITY 06',
    title: 'Asset Monitoring',
    subtitle: 'Predictive Maintenance for Pumps, Valves & Treatment Assets',
    description: 'Track the vibration, temperature, and operating hours of heavy mechanical assets to perform condition-based maintenance before failure occurs.',
    icon: 'Wrench',
    impactMetric: '+40% Extended Asset Lifespan',
    features: [
      'Vibration frequency analysis on main turbine pumps',
      'Motor winding temperature surveillance',
      'Valve seat wear prediction',
      'Automated spare parts work-order generation'
    ],
    techStack: ['Vibration FFT', 'Predictive Maintenance', 'Asset Management APIs']
  },
  {
    id: 'emergency-response',
    tag: 'CAPABILITY 07',
    title: 'Emergency Response',
    subtitle: 'Rapid Isolation & Disaster-Resilient Dual-Ring Architecture',
    description: 'Isolate compromised pipeline sections in seconds using automated actuated boundary valves while maintaining supply to critical healthcare facilities.',
    icon: 'AlertTriangle',
    impactMetric: '<30s Automated Section Isolation',
    features: [
      'One-click automated DMA boundary isolation',
      'Priority water routing to hospitals and emergency hubs',
      'Emergency mobile reservoir dispatch integration',
      'Automated citizen & utility notification dispatch'
    ],
    techStack: ['SCADA Failover', 'Actuator Control', 'Incident Management']
  },
  {
    id: 'analytics',
    tag: 'CAPABILITY 08',
    title: 'Operational Analytics',
    subtitle: 'Executive Telemetry & Carbon-Neutral Energy Footprint',
    description: 'Convert billions of sensor readings into actionable operational intelligence, carbon footprint metrics, and resource efficiency reports.',
    icon: 'BarChart3',
    impactMetric: '100% Network Traceability',
    features: [
      'KWh per cubic meter energy efficiency index',
      'Comprehensive non-revenue water ledgering',
      'Executive KPI reporting dashboards',
      'Direct integration with municipal billing engines'
    ],
    techStack: ['Grafana', 'PostgreSQL', 'Columnar Analytics', 'REST APIs']
  }
];

// -------------------------------------------------------------
// 8. CRITICAL INFRASTRUCTURE PROTECTION
// -------------------------------------------------------------
export const CRITICAL_INFRA_SECTORS: CriticalInfraSector[] = [
  {
    id: 'healthcare',
    title: 'Hospitals & Medical Sanctuaries',
    tagline: 'Zero-Interruption Sterile Water Supply',
    description: 'Direct dual-feed pipeline connections with automated microbial quality lock to safeguard dialysis units, surgical suites, and sterilization hubs.',
    icon: 'Cross',
    resilienceStandard: '99.999% Uninterrupted Uptime',
    priorityLevel: 'Tier 1 Critical',
    failoverMechanism: 'Instant autonomous failover to dedicated reserve tanks within 15 seconds.'
  },
  {
    id: 'commercial',
    title: 'Skyscrapers & Commercial Hubs',
    tagline: 'High-Elevation Pressure Regulation',
    description: 'Precision multi-stage vertical booster pumping to power heating, ventilation, and cooling (HVAC) chillers in 100+ story towers.',
    icon: 'Building2',
    resilienceStandard: 'Continuous Dynamic Pressure',
    priorityLevel: 'High Priority',
    failoverMechanism: 'Secondary ring feeder activation on pressure deviation.'
  },
  {
    id: 'hospitality',
    title: 'Luxury Resorts & Hospitality',
    tagline: 'Peak Season Demand Equilibrium',
    description: 'Intelligent buffering and greywater recycling integration to support luxury pools, landscaping, and guest suites without municipal grid strain.',
    icon: 'Palmtree',
    resilienceStandard: 'Real-Time Load Balancing',
    priorityLevel: 'High Priority',
    failoverMechanism: 'Predictive reservoir drawdown buffering.'
  },
  {
    id: 'industrial',
    title: 'Manufacturing & Heavy Industry',
    tagline: 'High-Volume Process & Cooling Grids',
    description: 'High-capacity industrial water mains delivering treated water for power generation, chemical formulation, and cement manufacturing.',
    icon: 'Factory',
    resilienceStandard: 'High-Volume Capacity Guarantee',
    priorityLevel: 'Essential',
    failoverMechanism: 'Dedicated secondary trunk line interconnection.'
  }
];

// -------------------------------------------------------------
// 9. INTERACTIVE TECHNICAL ARCHITECTURE (8 TIERS)
// -------------------------------------------------------------
export const WATER_ARCHITECTURE_TIERS: WaterArchitectureTier[] = [
  {
    tierId: 'sources',
    tierNumber: 'TIER 01',
    name: 'WATER SOURCES',
    role: 'Seawater Desalination (SWRO), Brackish Aquifers & Deep Wells',
    summary: 'The initial physical entrypoint: reverse osmosis desalination plants and natural groundwater aquifers.',
    deepDive: 'High-pressure membrane filtration units extract potable water while acoustic meters track inflow salinity, temperature, and microbiological metrics.',
    technologies: ['SWRO Desalination', 'High-Pressure RO', 'Turbine Energy Recovery', 'Optical Salinity Sensors']
  },
  {
    tierId: 'treatment',
    tierNumber: 'TIER 02',
    name: 'TREATMENT',
    role: 'Multi-Barrier Purification, Remineralization & Disinfection',
    summary: 'Water purification facilities standardizing pH, mineral balance, and microbiological safety.',
    deepDive: 'Continuous automated dosing adjusts calcium, magnesium, and sodium bicarbonate balance to exceed international WHO and UAE GSO potability standards.',
    technologies: ['Ultrafiltration (UF)', 'UV Disinfection', 'Calcite Remineralization', 'Amperometric Cl2 Controllers']
  },
  {
    tierId: 'storage',
    tierNumber: 'TIER 03',
    name: 'STORAGE',
    role: 'Covered Strategic Reservoirs & High-Elevation Water Towers',
    summary: 'Enclosed municipal reservoirs designed for 48-hour emergency strategic reserves.',
    deepDive: 'Reservoirs feature robotic internal inspection drones, automated circulation to prevent thermal stratification, and acoustic level monitoring.',
    technologies: ['Acoustic Level Gauges', 'Anti-Stratification Aerators', 'Robotic Inspection Drones']
  },
  {
    tierId: 'smart-distribution',
    tierNumber: 'TIER 04',
    name: 'SMART DISTRIBUTION',
    role: 'Looped District Metering Areas (DMAs) & Pressure Managed Mains',
    summary: 'The subterranean arterial highway delivering water through looped pipeline networks.',
    deepDive: 'VFD booster pump stations and modulated PRVs maintain constant pressure across varying topography and elevation.',
    technologies: ['Variable Frequency Drives (VFD)', 'Pressure Reducing Valves (PRV)', 'Ductile Iron & HDPE Mains']
  },
  {
    tierId: 'sensor-network',
    tierNumber: 'TIER 05',
    name: 'SENSOR NETWORK',
    role: 'IoT Hydrophones, Flow Transducers & Water Quality Probes',
    summary: 'Dense IoT layer measuring pressure, flow, and quality every few hundred meters.',
    deepDive: 'Over 24,000 wireless battery-powered IoT transmitters transmit telemetry via LoRaWAN and cellular NB-IoT with 10-year battery life.',
    technologies: ['Acoustic Hydrophones', 'Electromagnetic Flowmeters', 'LoRaWAN Transmitters', 'NB-IoT Gateways']
  },
  {
    tierId: 'data-platform',
    tierNumber: 'TIER 06',
    name: 'DATA PLATFORM',
    role: 'Time-Series Telemetry Engine & Hydraulic Twin Simulation',
    summary: 'Cloud-native data pipeline processing millions of sensor events every minute.',
    deepDive: 'EPANET-synchronized hydraulic modeling software evaluates real-time telemetry against simulated physics to spot micro-leaks and friction anomalies.',
    technologies: ['EPANET Engine', 'Apache Kafka', 'TimescaleDB', 'PostGIS Geographic Engine']
  },
  {
    tierId: 'operations-center',
    tierNumber: 'TIER 07',
    name: 'OPERATIONS COMMAND CENTER',
    role: 'Central SCADA Mission Control & Predictive Machine Learning',
    summary: '24/7 central dispatch and autonomous machine-learning control room.',
    deepDive: 'Human operators oversee autonomous AI agents that handle diurnal pressure modulation and dispatch maintenance crews to exact pipeline coordinates.',
    technologies: ['SCADA HMI', 'Predictive ML Engine', 'Automated Work-Order Dispatch', 'Incident GIS Mapping']
  },
  {
    tierId: 'customer-endpoints',
    tierNumber: 'TIER 08',
    name: 'CITY / CUSTOMER',
    role: 'Smart Household Meters, Commercial Inlets & Industrial Flanges',
    summary: 'The final destination: clean, pressurized drinking water delivered directly to users.',
    deepDive: 'Bi-directional smart meters detect household leaks and empower consumers with instant hourly water usage tracking.',
    technologies: ['Ultrasonic Smart Meters', 'NFC & Wireless M-Bus', 'Mobile Consumer Portal', 'Automated Billing APIs']
  }
];

// -------------------------------------------------------------
// 10. AQUAVANTA METADATA
// -------------------------------------------------------------
export const AQUAVANTA_METADATA = {
  projectNumber: 71,
  brandName: 'AQUAVANTA',
  positioning: 'Intelligent Water Infrastructure',
  tagline: 'Every Drop. Precisely Delivered.',
  headline: 'Every Drop. Precisely Delivered.',
  eyebrow: 'SMART WATER INFRASTRUCTURE',
  heroDescription: "A connected water infrastructure platform designed to monitor, manage, and intelligently distribute one of the world's most essential resources.",
  conceptualNotice: 'PLATFORM SIMULATION • CONCEPTUAL SMART WATER INFRASTRUCTURE • ALL METRICS FOR DEMONSTRATION & HYDRAULIC DESIGN VISUALIZATION ONLY',
  uaeAnchor: 'Dubai & Abu Dhabi Smart Water Infrastructure Concept • Sustainable Resource Management • Water Security Standard'
};
