export interface SecurityService {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: 'Personnel' | 'Executive' | 'Physical' | 'Advisory' | 'Technology';
  shortDescription: string;
  fullDescription: string;
  keyApplications: string[];
  operationalCapabilities: string[];
  deploymentSpeed: string;
  complianceStandard: string;
  iconName: string;
  image: string;
}

export interface SecurityTechnology {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  application: string;
  keyBenefit: string;
  specs: string[];
  icon: string;
}

export interface SecurityPersonnelProfile {
  id: string;
  title: string;
  roleCategory: string;
  experienceLevel: string;
  trainingDisciplines: string[];
  operationalScope: string;
  deploymentRatio: string;
  image: string;
}

export interface IndustrySector {
  id: string;
  name: string;
  badge: string;
  headline: string;
  threatMatrix: string;
  solutions: string[];
  caseRef: string;
  image: string;
}

export interface SecurityCaseStudy {
  id: string;
  title: string;
  sector: string;
  location: string;
  challenge: string;
  approach: string;
  implementation: string;
  qualitativeOutcome: string;
  metrics: { label: string; value: string }[];
  image: string;
}

export interface RegionCoverage {
  id: string;
  city: string;
  emirate: string;
  commandNode: string;
  rapidResponseTime: string;
  patrolCoverage: string;
  activeDeployments: string;
  coordinates: { x: number; y: number };
  sectorsCovered: string[];
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  keyTakeaways: string[];
  image: string;
}

export const AEGIS_BRAND = {
  name: 'AEGIS SOVEREIGN',
  legalName: 'AEGIS SOVEREIGN SECURITY & EXECUTIVE PROTECTION SERVICES LLC',
  tagline: 'Protection, Engineered Around You.',
  subheading: 'Advanced security solutions built around people, assets, environments, and the moments that matter most across Dubai, Abu Dhabi, and the United Arab Emirates.',
  phone: '+971 4 399 8820',
  hotline247: '+971 50 771 9900',
  whatsapp: 'https://wa.me/971507719900?text=Hello%20AEGIS%20SOVEREIGN,%20I%20would%20like%20to%20request%20a%20confidential%20security%20assessment.',
  email: 'command@aegis-sovereign.ae',
  headquarters: {
    address: 'Level 24, ICD Brookfield Place, DIFC, Dubai, UAE',
    operationsCenter: 'Sector E-48, Yas Bay Command Center, Abu Dhabi, UAE'
  },
  regulatory: [
    { title: 'SIRA Dubai Certified Security Operator', ref: 'SIRA-SEC-2026-8812' },
    { title: 'UAE Ministry of Interior (MOI) Licensed', ref: 'MOI-PSS-9041' },
    { title: 'PSBD Abu Dhabi Security Approved', ref: 'PSBD-AD-7740' },
    { title: 'ISO 27001 & ISO 9001 Quality Certified', ref: 'BSI-SEC-4402' }
  ]
};

export const AEGIS_SERVICES: SecurityService[] = [
  {
    id: 'manned-guarding',
    number: '01',
    title: 'Manned Guarding & Physical Security',
    tagline: 'Vigilant, disciplined physical security personnel',
    category: 'Personnel',
    shortDescription: 'Professional, highly trained security officers for corporate headquarters, luxury residential communities, commercial hubs, and critical infrastructure.',
    fullDescription: 'Our manned guarding teams represent the highest echelon of discipline, situational awareness, and customer hospitality. Rigorously vetted under SIRA and MOI guidelines, officers undergo continuous training in conflict de-escalation, emergency first aid, perimeter integrity, and modern surveillance coordination.',
    keyApplications: [
      'Corporate Headquarters & Financial Institutions',
      'Luxury Residential Communities & Private Compounds',
      'Commercial Towers & Business Campuses',
      'Industrial Facilities & Logistics Hubs',
      'High-End Retail & Flagship Luxury Boutiques',
      'Construction & Mega-Development Sites'
    ],
    operationalCapabilities: [
      '24/7 Static & Dynamic Perimeter Patrols',
      'Digital Checkpoint RFID & QR Patrol Logging',
      'Access Authorization & Visitor Screening',
      'Immediate Escalation to Central Command'
    ],
    deploymentSpeed: 'Deployment within 24 to 48 Hours',
    complianceStandard: 'SIRA Dubai Grade-A & MOI Certified',
    iconName: 'Shield',
    image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'executive-protection',
    number: '02',
    title: 'Executive Protection & VIP Close Security',
    tagline: 'Discreet, high-tier close protection for leaders & delegations',
    category: 'Executive',
    shortDescription: 'Uncompromising, low-profile close protection officers (CPOs) and armored transport details for high-net-worth individuals, diplomats, and executive delegations.',
    fullDescription: 'Tailored for sovereign leaders, Fortune 500 C-suite executives, and family offices. Our Close Protection Officers combine background training from elite defense and international protective services with deep knowledge of UAE protocol, advance route reconnaissance, and counter-surveillance tactics.',
    keyApplications: [
      'C-Suite Executives & Multinational Board Delegations',
      'High-Net-Worth Families & Private Principals',
      'Visiting Foreign Dignitaries & Trade Envoys',
      'Private Aircraft & Superyacht Land Transfers'
    ],
    operationalCapabilities: [
      'Advance Route Reconnaissance & Safe Haven Planning',
      'Armored B6/B7 Level Luxury Convoy Logistics',
      'Close-Quarters Medical First Response (Tactical EMT)',
      'Direct Real-Time Satellite Telemetry with Command HQ'
    ],
    deploymentSpeed: 'Immediate / 4-Hour Rapid Executive Mobilization',
    complianceStandard: 'International Executive Protection Standards & SIRA VIP License',
    iconName: 'UserCheck',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'event-security',
    number: '03',
    title: 'Event Security & Crowd Dynamics',
    tagline: 'Flawless crowd control & VIP management for major gatherings',
    category: 'Personnel',
    shortDescription: 'End-to-end security planning, access credentialing, and discreet crowd management for international conferences, galas, and mega-gatherings.',
    fullDescription: 'From high-stakes government summits at Dubai World Trade Centre to private luxury galas on Palm Jumeirah, our event security division executes meticulous risk assessments, access zoning, bag inspection protocols, and discreet emergency evacuation contingency plans.',
    keyApplications: [
      'International Economic Forums & Tech Summits',
      'Luxury Brand Launches & High-Jewelry Exhibitions',
      'Private Island & Superyacht Galas',
      'Global Sporting & Entertainment Tournaments'
    ],
    operationalCapabilities: [
      'Biometric E-Gate Access & Digital Pass Verification',
      'K9 Explosive & Pyrotechnic Detection Sweeps',
      'Dynamic Crowd Density Heat-Map Monitoring',
      'On-Site Tactical Command Post Coordination'
    ],
    deploymentSpeed: 'Full Event Security Blueprint in 72 Hours',
    complianceStandard: 'UAE Civil Defense & Police Event Security Standards',
    iconName: 'Users',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'corporate-security',
    number: '04',
    title: 'Corporate Security & Facility Resilience',
    tagline: 'Integrated protection for enterprise headquarters & campuses',
    category: 'Physical',
    shortDescription: 'Holistic physical security, receptionist front-of-house guarding, and intellectual property defense for corporate campuses and financial institutions.',
    fullDescription: 'Designed for institutions where corporate espionage, unauthorized physical breaches, and operational disruptions carry extreme financial risks. We deploy dual-role concierge-security personnel, smart badge readers, and automated perimeter intrusion alarms.',
    keyApplications: [
      'DIFC & ADGM Financial Institutions',
      'Regional Corporate Headquarters in Business Bay & Downtown',
      'Data Centers & Critical Cloud Hubs',
      'R&D Centers & Proprietary Laboratories'
    ],
    operationalCapabilities: [
      'Concierge Security Front-of-House Protocol',
      'Server Room Multi-Factor Biometric Isolation',
      'Visitor Escort & Non-Disclosure Audit Compliance',
      'Automated Incident Logging & Threat Dashboard'
    ],
    deploymentSpeed: 'Turnkey Contract Mobilization within 5 Business Days',
    complianceStandard: 'ISO 27001 Facility Physical Security Alignment',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'residential-security',
    number: '05',
    title: 'Residential & Private Estate Security',
    tagline: 'Unobtrusive sanctuary defense for luxury estates & villas',
    category: 'Personnel',
    shortDescription: '24/7 dedicated estate guarding, automated smart perimeter surveillance, and rapid response for luxury villas in Palm Jumeirah, Emirates Hills, and Al Barari.',
    fullDescription: 'We provide private estate owners with total peace of mind. Our residential security teams are trained to maintain an impeccably discreet, family-friendly demeanor while upholding strict perimeter defense, thermal night-vision patrols, and visitor verification.',
    keyApplications: [
      'Private Palaces & Waterfront Villas on Palm Jumeirah',
      'Gated Community Enclaves in Emirates Hills & Jumeirah Golf Estates',
      'Penthouse Towers in Downtown & Dubai Marina',
      'Private Sovereign Ranches & Desert Retreats'
    ],
    operationalCapabilities: [
      'Thermal Imaging & Infrared Perimeter Beam Triggers',
      'Smart Intercom & Number-Plate Recognition (ANPR)',
      'Panic Room Telemetry & Direct Armed Police Link',
      'VIP Valet & Contractor Screening Protocol'
    ],
    deploymentSpeed: 'Dedicated Estate Team Deployed in 48 Hours',
    complianceStandard: 'SIRA Residential Master Operator Standard',
    iconName: 'Home',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'retail-security',
    number: '06',
    title: 'Luxury Retail & Boutique Asset Protection',
    tagline: 'High-end loss prevention with five-star customer etiquette',
    category: 'Personnel',
    shortDescription: 'Elegantly attired, highly observant security officers protecting high-value jewelry, haute horlogerie, and luxury fashion boutiques against organized loss.',
    fullDescription: 'Our retail security officers blend seamlessly into ultra-luxury shopping environments like The Dubai Mall Fashion Avenue and Galleria Mall Abu Dhabi. They deliver polite customer greeting while maintaining razor-sharp vigilance over asset handling and vault access.',
    keyApplications: [
      'Fine Jewelry & High Horology Boutiques',
      'Haute Couture & Designer Flagship Stores',
      'Art Galleries & Private Auction Houses',
      'High-Value Luxury Warehousing'
    ],
    operationalCapabilities: [
      'Discreet Anti-Shoplifting & Sweethearting Audits',
      'High-Value Asset Vault Transit Escorts',
      'Discrete Store Opening & Closing Security Protocols',
      'Instant Panic & Silent Alarm Dispatch Integration'
    ],
    deploymentSpeed: 'Immediate Roster Setup in 48 Hours',
    complianceStandard: 'SIRA Luxury Retail Loss Prevention Certified',
    iconName: 'ShoppingBag',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'construction-security',
    number: '07',
    title: 'Construction & Mega-Project Security',
    tagline: 'Heavy asset, material & perimeter defense for developments',
    category: 'Physical',
    shortDescription: 'Rigorous turnstile access control, material theft prevention, and 24/7 site perimeter patrol for UAE infrastructure and mega-real-estate projects.',
    fullDescription: 'Large-scale construction sites are vulnerable to material diversion, copper theft, and unauthorized trespassing. We implement heavy-duty turnstiles, biometric worker time-and-attendance tracking, perimeter CCTV towers with AI intrusion analytics, and round-the-clock roving patrols.',
    keyApplications: [
      'Skyscraper & High-Rise Tower Developments',
      'Master-Planned Community Infrastructure',
      'Industrial Plant Construction & Solar Parks',
      'Airport & Marine Port Expansion Zones'
    ],
    operationalCapabilities: [
      'Biometric Turnstile Worker Face-ID Access Gates',
      'Vehicle Weighbridge & Delivery Manifest Inspections',
      'Solar-Powered Mobile AI CCTV Surveillance Towers',
      'Night-Vision K9 Site Perimeter Security'
    ],
    deploymentSpeed: 'Full Site Mobilization within 72 Hours',
    complianceStandard: 'UAE EHS & Civil Defense Site Safety Certified',
    iconName: 'HardHat',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'security-consultancy',
    number: '08',
    title: 'Security Consultancy & Threat Assessment',
    tagline: 'Strategic vulnerability audits & master security planning',
    category: 'Advisory',
    shortDescription: 'Independent risk engineering, physical security audits, crisis response planning, and technical RFP specification by certified international security consultants.',
    fullDescription: 'Before deploying personnel or hardware, our senior advisors conduct comprehensive threat, vulnerability, and risk assessments (TVRA). We provide board-level risk reports, architectural security integration guidance, and business continuity playbooks tailored to UAE regulatory standards.',
    keyApplications: [
      'New Architectural Master-Planning & SIRA Approvals',
      'Enterprise Corporate Risk & Kidnap/Ransom Advisory',
      'Supply Chain & Cargo Security Vulnerability Audits',
      'Crisis Management & Emergency Evacuation Drills'
    ],
    operationalCapabilities: [
      'Quantitative Threat & Vulnerability Matrix Scoring',
      'SIRA & PSBD Regulatory Compliance Gap Audits',
      'Red-Team Physical Penetration Testing',
      'Executive Evacuation & Emergency Continuity Manuals'
    ],
    deploymentSpeed: 'Consultancy Engagement Initiated within 48 Hours',
    complianceStandard: 'ASIS International CPP & PSP Certified Standards',
    iconName: 'FileSearch',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'surveillance-monitoring',
    number: '09',
    title: 'AI Surveillance & Remote 24/7 Monitoring',
    tagline: 'Next-generation remote video verification & central operations',
    category: 'Technology',
    shortDescription: '24/7 centralized video operations center (SOC) monitoring AI-equipped CCTV feeds, automated thermal tripwires, and instant security patrol dispatch.',
    fullDescription: 'Our state-of-the-art UAE Security Operations Center (SOC) operates 24/7/365. Powered by intelligent neural analytics, our systems automatically flag perimeter breaches, unattended packages, loitering, and fire smoke hazards in milliseconds, instantly dispatching local patrol units.',
    keyApplications: [
      'Multi-Site Retail & Commercial Portfolios',
      'Remote Solar Plants & Industrial Warehouses',
      'Unmanned Critical Infrastructure Stations',
      'Residential Estate Perimeter Video Verifications'
    ],
    operationalCapabilities: [
      'AI Video Analytics (LPR, Line Crossing, Facial Recognition)',
      'Sub-15 Second Incident Verification & Audio Voice-Down',
      'Encrypted Cloud & SIRA-Compliant 90-Day Video Storage',
      'Automated Rapid Response Patrol Dispatch Protocol'
    ],
    deploymentSpeed: 'Remote Network Integration in 24 to 72 Hours',
    complianceStandard: 'SIRA VSS (Video Surveillance System) Approved',
    iconName: 'Video',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'access-control',
    number: '10',
    title: 'Access Control & Perimeter Technology',
    tagline: 'Seamless identity verification & high-security barrier systems',
    category: 'Technology',
    shortDescription: 'Enterprise contactless biometrics, mobile NFC credentialing, automated anti-ram bollards, and unified visitor management systems.',
    fullDescription: 'Control and audit every point of entry across your enterprise. We engineer, install, and manage unified access control ecosystems incorporating touchless iris scanners, automated license plate recognition (ANPR) speed gates, and cloud-synced visitor registration tablets.',
    keyApplications: [
      'High-Security Government & Diplomatic Enclaves',
      'Commercial Towers & Enterprise Elevators',
      'Tier-III Data Centers & Server Rooms',
      'Gated Community Barrier Systems with Fast-Track QR'
    ],
    operationalCapabilities: [
      'Touchless Facial Recognition & Iris Bio-Scanners',
      'Smartphone BLE/NFC Digital Credential Issuance',
      'Crash-Rated PAS 68 / IWA 14 Anti-Ram Bollards',
      'Cloud Visitor Pre-Registration & Host Notification'
    ],
    deploymentSpeed: 'Turnkey Hardware & Software Deployment in 5-10 Days',
    complianceStandard: 'SIRA & MOI Electronic Security Certified',
    iconName: 'Key',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80'
  }
];

export const AEGIS_TECHNOLOGIES: SecurityTechnology[] = [
  {
    id: 'tech-cctv',
    name: 'AI Neural CCTV & Thermal Analytics',
    category: 'Optical Surveillance',
    shortDesc: 'Deep-learning optical & thermal cameras capable of 360-degree perimeter intrusion detection in total darkness.',
    fullDesc: 'Equipped with onboard neural processing units that distinguish between human intruders, vehicles, and environmental noise (wind, animals) with 99.4% accuracy.',
    application: 'Perimeter fencing, multi-acre estates, and logistics warehousing.',
    keyBenefit: 'Eliminates 98% of false alarms and enables instant threat alerts.',
    specs: ['4K Ultra HD Sensor', 'Long-Range Thermal Sensor (up to 1.2km)', 'Auto PTZ Tracking', 'IP67 Weatherproof'],
    icon: 'Camera'
  },
  {
    id: 'tech-biometrics',
    name: 'Multi-Modal Biometric Access Nodes',
    category: 'Identity Verification',
    shortDesc: 'Touchless iris, facial geometry, and palm vein scanning with liveness detection to prevent spoofing.',
    fullDesc: 'Processes entry authorizations in under 0.3 seconds per individual while interfacing directly with SIRA visitor logs and enterprise Active Directory.',
    application: 'Executive floors, server data rooms, and trading floor entry.',
    keyBenefit: 'Zero credential sharing or badge cloning vulnerabilities.',
    specs: ['< 0.3s Scan Time', 'Anti-Spoofing Liveness Engine', '100,000 Local Template Capacity', 'Wiegand / OSDP Protocol'],
    icon: 'Fingerprint'
  },
  {
    id: 'tech-rfid-patrol',
    name: 'Digital RFID Patrol Guard Telemetry',
    category: 'Personnel Verification',
    shortDesc: 'Live GPS and RFID-tagged patrol verification tracking guard presence at every checkpoint in real time.',
    fullDesc: 'Officers scan military-grade NFC tokens along custom patrol routes. Incident logs, photos of insecure doors, and timestamped checklists stream live to Central Command.',
    application: 'Commercial towers, shopping destinations, and residential communities.',
    keyBenefit: '100% indisputable accountability with digital audit trail.',
    specs: ['Real-Time 4G/5G Live Uplink', 'Geofence Tamper Alert', 'SOS Lone-Worker Tilt Sensor', 'PDF Daily Audit Export'],
    icon: 'Radio'
  },
  {
    id: 'tech-anpr',
    name: 'Automated Number Plate Recognition (ANPR)',
    category: 'Perimeter Traffic',
    shortDesc: 'High-speed AI vehicle license plate reading system recognizing GCC and international plates instantly.',
    fullDesc: 'Automatically opens speed gates for registered residents and authorized corporate fleets, while triggering alert prompts for unrecognized or blacklisted vehicles.',
    application: 'Corporate parking basements, residential gatehouses, and port barriers.',
    keyBenefit: 'Reduces peak-hour entry congestion by 70% while improving gate security.',
    specs: ['99.2% Plate Read Accuracy', 'Works up to 120 km/h', 'Integrated Barrier Relays', 'UAE Police Database Sync Capability'],
    icon: 'Cpu'
  },
  {
    id: 'tech-visitor',
    name: 'Cloud Visitor & Pass Management',
    category: 'Software Ecosystem',
    shortDesc: 'Paperless digital visitor pre-registration with automated QR access codes and host SMS notifications.',
    fullDesc: 'Replaces archaic paper logbooks with sleek iPad kiosks. Visitors sign NDAs, scan Emirates IDs, and receive timed QR passes directly to their smartphones.',
    application: 'Corporate headquarters, law firms, and multi-tenant commercial towers.',
    keyBenefit: 'Professional first impression + instant evacuation manifest.',
    specs: ['Emirates ID Optical Scanner', 'Digital NDA Signature Storage', 'Host WhatsApp / Slack Notification', 'Automated Pass Expiry'],
    icon: 'QrCode'
  },
  {
    id: 'tech-alarms',
    name: 'Class-IV Wireless Intrusion Alarms',
    category: 'Physical Security',
    shortDesc: 'Grade-4 wireless and fiber-hardwired intrusion detection with anti-masking and dual-frequency jamming defense.',
    fullDesc: 'Instant notification of door forced open (DFO), glass break acoustic signatures, seismic safe vibrations, and rooftop motion triggers.',
    application: 'Jewelry vaults, luxury penthouses, and embassy compounds.',
    keyBenefit: 'Sub-second alarm propagation to central monitoring and local authorities.',
    specs: ['Triple-Path Comms (Ethernet + 5G + Mesh)', 'Dual Glass Break Acoustic Tech', '10-Year Battery Life Backup', 'Encrypted AES-256 Protocol'],
    icon: 'Bell'
  }
];

export const AEGIS_REGIONS: RegionCoverage[] = [
  {
    id: 'cov-dubai',
    city: 'Dubai',
    emirate: 'Emirate of Dubai',
    commandNode: 'DIFC Central Operations Hub',
    rapidResponseTime: 'Under 8 Minutes Rapid Dispatch',
    patrolCoverage: '100% Dedicated 24/7 Mobile Units',
    activeDeployments: '180+ Enterprise & Residential Sites',
    coordinates: { x: 55, y: 35 },
    sectorsCovered: ['DIFC', 'Downtown', 'Business Bay', 'Palm Jumeirah', 'Dubai Marina', 'Al Quoz', 'Jebel Ali']
  },
  {
    id: 'cov-abudhabi',
    city: 'Abu Dhabi',
    emirate: 'Emirate of Abu Dhabi',
    commandNode: 'Yas Island & ADGM Operations Base',
    rapidResponseTime: 'Under 9 Minutes Rapid Dispatch',
    patrolCoverage: 'Sovereign & Diplomatic Protocol Fleet',
    activeDeployments: '120+ Corporate & Diplomatic Sites',
    coordinates: { x: 40, y: 65 },
    sectorsCovered: ['ADGM', 'Al Maryah Island', 'Saadiyat Island', 'Yas Bay', 'Corniche', 'Mussafah', 'Khalifa City']
  },
  {
    id: 'cov-alain',
    city: 'Al Ain',
    emirate: 'Eastern Region (Abu Dhabi)',
    commandNode: 'Al Ain Industrial & Estate Command',
    rapidResponseTime: 'Under 11 Minutes Dispatch',
    patrolCoverage: 'Private Compound & Estate Patrols',
    activeDeployments: '45+ Heritage & Estate Deployments',
    coordinates: { x: 65, y: 78 },
    sectorsCovered: ['Al Jimi', 'Al Foah', 'Zakhir', 'Industrial Area', 'Private Sovereign Estates']
  },
  {
    id: 'cov-sharjah',
    city: 'Sharjah',
    emirate: 'Emirate of Sharjah',
    commandNode: 'Al Majaz & SAIF Zone Hub',
    rapidResponseTime: 'Under 9 Minutes Dispatch',
    patrolCoverage: 'Commercial & Industrial Security Grid',
    activeDeployments: '65+ Commercial & Industrial Sites',
    coordinates: { x: 68, y: 30 },
    sectorsCovered: ['SAIF Zone', 'Al Majaz', 'Hamriyah Free Zone', 'Muwaileh Commercial']
  },
  {
    id: 'cov-rak',
    city: 'Ras Al Khaimah',
    emirate: 'Emirate of Ras Al Khaimah',
    commandNode: 'Al Marjan & RAKEZ Command Desk',
    rapidResponseTime: 'Under 10 Minutes Dispatch',
    patrolCoverage: 'Resort, Coastal & Industrial Units',
    activeDeployments: '40+ Resort & Freezone Deployments',
    coordinates: { x: 80, y: 15 },
    sectorsCovered: ['Al Marjan Island', 'Mina Al Arab', 'RAKEZ Business Zones', 'Al Hamra']
  },
  {
    id: 'cov-ajman',
    city: 'Ajman',
    emirate: 'Emirate of Ajman',
    commandNode: 'Ajman Free Zone Security Station',
    rapidResponseTime: 'Under 9 Minutes Dispatch',
    patrolCoverage: 'Retail & Free Zone Guarding Fleet',
    activeDeployments: '30+ Commercial Deployments',
    coordinates: { x: 62, y: 25 },
    sectorsCovered: ['Ajman Free Zone', 'Corniche Road', 'Al Jurf Industrial']
  },
  {
    id: 'cov-fujairah',
    city: 'Fujairah',
    emirate: 'Emirate of Fujairah',
    commandNode: 'Fujairah Port & Energy Command Base',
    rapidResponseTime: 'Under 10 Minutes Dispatch',
    patrolCoverage: 'Maritime Port & Energy Bunkering Guarding',
    activeDeployments: '25+ Critical Infrastructure Sites',
    coordinates: { x: 88, y: 40 },
    sectorsCovered: ['Port of Fujairah', 'Oil Bunkering Terminals', 'Fujairah Free Zone']
  },
  {
    id: 'cov-uaq',
    city: 'Umm Al Quwain',
    emirate: 'Emirate of Umm Al Quwain',
    commandNode: 'UAQ Industrial & Marina Unit',
    rapidResponseTime: 'Under 10 Minutes Dispatch',
    patrolCoverage: 'Maritime & Industrial Park Units',
    activeDeployments: '18+ Industrial Sites',
    coordinates: { x: 72, y: 20 },
    sectorsCovered: ['UAQ Free Trade Zone', 'Al Salamah', 'Industrial Area']
  }
];

export const AEGIS_INDUSTRIES: IndustrySector[] = [
  {
    id: 'ind-corporate',
    name: 'Corporate & Headquarters',
    badge: 'Enterprise Security',
    headline: 'Protecting Global Headquarters & Multinational Campuses',
    threatMatrix: 'Unauthorized physical intrusion, IP espionage, high-volume visitor flow, executive vulnerabilities.',
    solutions: [
      'Dual-role concierge security officers in bespoke business attire',
      'Optical turnstile integration with automated visitor pre-clearance',
      '24/7 dedicated control room monitoring with SIRA live feeds',
      'Crisis evacuation planning & regular executive emergency drills'
    ],
    caseRef: 'DIFC Tier-1 Asset Management Tower',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ind-financial',
    name: 'Banking & Financial Institutions',
    badge: 'High-Resilience Vaults',
    headline: 'Bank-Grade Physical & Vault Protection in DIFC & ADGM',
    threatMatrix: 'Targeted physical breaches, armed threats, high-value bullion and cash in transit, regulatory compliance.',
    solutions: [
      'Armed/tactical escort coordination for high-value asset transfers',
      'Class-IV seismic and thermal vault alarm sensors',
      'Strict dual-custody access verification protocols',
      'Continuous counter-surveillance sweeps around perimeter'
    ],
    caseRef: 'ADGM Private Wealth & Gold Bullion Depository',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ind-residential',
    name: 'Residential & Luxury Estates',
    badge: 'Sanctuary Defense',
    headline: 'Discreet, Flawless Protection for High-Profile Families',
    threatMatrix: 'Paparazzi, unvetted service staff, perimeter breaches, home invasion threats, privacy infringements.',
    solutions: [
      'Vetted, background-cleared residential security guards',
      'Thermal perimeter tripwires and smart license plate scanners',
      'Panic room monitoring with encrypted silent distress channels',
      'Contractor and maintenance staff escort protocols'
    ],
    caseRef: 'Palm Jumeirah Signature Beachfront Compound',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ind-hospitality',
    name: 'Boutique Hotels & Luxury Resorts',
    badge: '5-Star Guest Safety',
    headline: 'Protecting VIP Guests While Upholding World-Class Hospitality',
    threatMatrix: 'Unregistered visitors, pool/beach perimeter intrusions, VIP safety during major galas, baggage security.',
    solutions: [
      'Hospitality-trained security ambassadors with multilingual skills',
      'Discreet CCTV surveillance of public zones without guest discomfort',
      'Private beach and marina access control gates',
      'Fast-track medical response and on-site CPR certified officers'
    ],
    caseRef: 'Ultra-Luxury Jumeirah Coastline Beach Resort',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ind-retail',
    name: 'Luxury Boutiques & Haute Horlogerie',
    badge: 'Loss Prevention',
    headline: 'Preventing High-Value Theft in Flagship Luxury Retail',
    threatMatrix: 'Organized retail smash-and-grab, distraction theft, staff collusion, counterfeit returns.',
    solutions: [
      'Suit-attired door hosts providing dignified presence and deterrence',
      'High-resolution micro-cameras over display vitrines and vaults',
      'Silent foot-pedal duress alarms linked to Mall security and Police',
      'Daily opening and closing double-blind inventory verification'
    ],
    caseRef: 'Dubai Mall Fashion Avenue Haute Horlogerie Flagship',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ind-construction',
    name: 'Construction & Critical Infrastructure',
    badge: 'Site Asset Integrity',
    headline: 'Protecting Mega-Developments, Machinery & Materials',
    threatMatrix: 'Copper and raw material theft, unauthorized site access, worker safety compliance, sabotage.',
    solutions: [
      'Full-height turnstiles with biometric fingerprint/face scanners',
      'Solar-powered mobile CCTV towers with AI night-vision analytics',
      'K9 perimeter patrols across expansive multi-hectare perimeters',
      'Strict material gate passes and truck load inspection logs'
    ],
    caseRef: 'Dubai Creek Super-Tall Tower Construction Site',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80'
  }
];

export const AEGIS_CASE_STUDIES: SecurityCaseStudy[] = [
  {
    id: 'case-1',
    title: 'DIFC Multi-Tenant Commercial Tower',
    sector: 'Corporate & Finance',
    location: 'DIFC, Dubai',
    challenge: 'A 45-storey landmark commercial tower in DIFC suffered from long visitor registration queues, frequent unauthorized access to upper executive floors, and inconsistent security guard presentation.',
    approach: 'AEGIS implemented a unified security transformation combining SIRA-compliant biometric speed gates, digital visitor pre-registration, and a team of 18 bilingual concierge-security officers in tailored suits.',
    implementation: 'Deployed dual-factor access gates, integrated ANPR basement barrier system, centralized all 180 CCTV cameras into a 24/7 on-site command station, and conducted staff active-threat drills.',
    qualitativeOutcome: 'Visitor processing time dropped from 4 minutes to under 20 seconds with 100% elimination of unauthorized floor trespassing. Tenant satisfaction scores reached 99.4%.',
    metrics: [
      { label: 'Visitor Processing Speed', value: '< 20 Seconds' },
      { label: 'Unauthorized Ingress', value: 'Zero Breaches' },
      { label: 'Tenant Trust Rating', value: '99.4% Positive' }
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'case-2',
    title: 'Global Energy Summit & Ministerial Gala',
    sector: 'Event & Delegation Protection',
    location: 'Abu Dhabi National Exhibition Centre (ADNEC)',
    challenge: 'High-profile 3-day ministerial conference hosting 42 foreign ministers, 180 CEOs, and 4,000 delegates requiring discrete protection without compromising summit elegance.',
    approach: 'Designed a multi-layered ring-fencing security architecture: outer traffic perimeter screening, middle credential checkpoints, and inner VIP close protection teams.',
    implementation: 'Coordinated with Abu Dhabi Police, deployed 65 trained event security officers, 4 K9 explosive detection units, and 8 armored B6 luxury escort convoys.',
    qualitativeOutcome: 'Flawless zero-incident execution praised by diplomatic security attachés. Seamless transition between formal plenary halls and private bilateral dinner salons.',
    metrics: [
      { label: 'Diplomatic Delegations Protected', value: '42 Ministers' },
      { label: 'Event Incident Rate', value: '0 Incidents' },
      { label: 'K9 Sweeps Completed', value: '100% Cleared' }
    ],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80'
  }
];

export const AEGIS_PERSONNEL_PROFILES: SecurityPersonnelProfile[] = [
  {
    id: 'per-cpo',
    title: 'Close Protection Officer (CPO)',
    roleCategory: 'Executive Protection & Diplomatic Escort',
    experienceLevel: 'Minimum 8+ Years Protective & Military / Police Background',
    trainingDisciplines: [
      'Advanced Defensive & Evasive Driving (B6/B7 Armored)',
      'Tactical Combat Casualty Care (TCCC) / First Responder',
      'Close-Quarter Counter-Ambush & Protective Formations',
      'SIRA Executive Close Protection Licensed'
    ],
    operationalScope: 'VIPs, sovereign delegations, family offices, high-threat overseas travel.',
    deploymentRatio: '1:1 to 4:1 Principal-to-Officer Protection Cells',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'per-corporate',
    title: 'Corporate Concierge Security Officer',
    roleCategory: 'Front-of-House & Enterprise Headquarters',
    experienceLevel: 'Minimum 5+ Years Luxury Commercial & SIRA Certified',
    trainingDisciplines: [
      'Conflict De-Escalation & Verbal Judo',
      'Advanced Access Control & Visitor Screening Systems',
      'Fire Safety & Emergency Evacuation Marshaling',
      'Five-Star Executive Hospitality Etiquette'
    ],
    operationalScope: 'DIFC/ADGM towers, financial institutions, tech headquarters.',
    deploymentRatio: '24/7 Continuous Static & Reception Shift Teams',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'per-soc',
    title: 'Central Command & SOC Operations Specialist',
    roleCategory: 'Remote Surveillance & Emergency Dispatch',
    experienceLevel: 'Minimum 6+ Years Control Room & Cybersecurity Coordination',
    trainingDisciplines: [
      'AI Video Analytics & Multi-Feed Telemetry Monitoring',
      'Emergency Services (Police / Civil Defense) Direct Dispatch',
      'Intrusion Alarm Threat Triage & Incident Classification',
      'SIRA CCTV & VSS Operations Certified'
    ],
    operationalScope: 'Central Operations Center, 24/7 video monitoring, panic alarm response.',
    deploymentRatio: 'Dual-Operator Active Watch Shifts with Automated AI Assistance',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
  }
];

export const AEGIS_JOURNAL: JournalArticle[] = [
  {
    id: 'art-1',
    title: 'The Evolution of Executive Protection in Dubai: High-Tech vs Low-Profile',
    category: 'Executive Security',
    readTime: '6 min read',
    date: 'September 2026',
    summary: 'Why traditional conspicuous bodyguards are being replaced by discrete, intelligence-led protective surveillance details across the GCC.',
    keyTakeaways: [
      'Low-profile protective details draw 80% less unwanted public attention',
      'Integration with real-time route telemetry prevents traffic bottleneck ambushes',
      'Advance reconnaissance remains the decisive factor in executive safety'
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'art-2',
    title: 'SIRA VSS Compliance 2026: Mandatory Video Surveillance Standards for UAE Commercial Buildings',
    category: 'Regulatory Guide',
    readTime: '8 min read',
    date: 'August 2026',
    summary: 'A comprehensive engineering breakdown of Dubai SIRA camera resolution requirements, 90-day retention policies, and cloud integration protocols.',
    keyTakeaways: [
      '1080p minimum resolution at all entry points with 30fps recording',
      'Mandatory uninterrupted power supply (UPS) for at least 4 hours',
      'Direct secure fiber interconnect for emergency government audits'
    ],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'art-3',
    title: 'AI in Physical Security: How Neural Vision Is Eliminating False Alarms on Mega-Sites',
    category: 'Security Tech',
    readTime: '5 min read',
    date: 'July 2026',
    summary: 'Exploring how on-edge AI chips differentiate between desert sand storms, wildlife, and genuine perimeter breaching attempts in milliseconds.',
    keyTakeaways: [
      'False positive alarm rates reduced from 35% to under 0.6%',
      'Automated PTZ cameras track intruder vectors without human operator lag',
      'Thermal optics ensure clear target acquisition even in dense fog or sandstorms'
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
  }
];

export const AEGIS_FAQS = [
  {
    question: 'Are all AEGIS security officers licensed by SIRA and the UAE Ministry of Interior?',
    answer: 'Yes. 100% of AEGIS security personnel undergo rigorous background checks, biometric security clearances, and official certification through the Security Industry Regulatory Agency (SIRA) in Dubai, Private Security Business Department (PSBD) in Abu Dhabi, and the UAE Ministry of Interior (MOI).'
  },
  {
    question: 'How quickly can you deploy security guards or an executive protection detail?',
    answer: 'For emergency or urgent executive protection requirements, our rapid response team can mobilize within 4 hours in Dubai and Abu Dhabi. Standard static manned guarding deployments for corporate offices or residential communities are typically initiated within 24 to 48 hours following site assessment.'
  },
  {
    question: 'What is included in a Comprehensive Security Risk Assessment?',
    answer: 'Our senior certified security consultants conduct a full physical site survey, analyze historical threat vectors, audit existing CCTV and access control hardware, evaluate perimeter vulnerabilities, and deliver an actionable board-level risk mitigation report with SIRA compliance gap analysis.'
  },
  {
    question: 'Can you provide armored vehicles and protective convoys for VIP delegations?',
    answer: 'Yes. Our executive protection fleet includes luxury armored Mercedes-Maybach, Range Rover Sentinel, and Cadillac Escalade vehicles rated up to European VPAM B6/B7 ballistic standards, operated exclusively by certified defensive-tactical drivers.'
  },
  {
    question: 'Do you operate a 24/7 Security Operations Center (SOC)?',
    answer: 'Yes. Our sovereign Central Command SOC operates around the clock 365 days a year, monitoring video streams, alarm triggers, and officer patrol GPS coordinates across all 7 Emirates with automated failover and direct emergency services dispatch protocols.'
  }
];
