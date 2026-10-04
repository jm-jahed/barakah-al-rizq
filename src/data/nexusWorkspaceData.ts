export interface OfficeOption {
  id: string;
  title: string;
  category: 'Private Suite' | 'Executive Office' | 'Flexi Desk' | 'Boardroom' | 'License Ready' | 'Enterprise Floorplate';
  capacity: string;
  capacityNumber: number;
  areaSqFt: number;
  areaSqM: number;
  startingPriceMonthlyAed: number;
  priceFormatted: string;
  ejariQuota: string;
  description: string;
  image: string;
  gallery: string[];
  features: string[];
  includedAmenities: string[];
  acousticRating: string;
  itSpecs: string;
  floorLevel: string;
  viewOrientation: string;
  depositMonths: number;
}

export interface BusinessCenterLocation {
  id: string;
  name: string;
  city: 'Dubai' | 'Abu Dhabi';
  district: string;
  tower: string;
  address: string;
  totalFloors: string;
  totalSuites: number;
  availableSuites: number;
  occupancyPercentage: number;
  coordinates: string;
  description: string;
  image: string;
  highlights: string[];
  metroProximity: string;
  parkingSpecs: string;
  phone: string;
  email: string;
  googleMapQuery: string;
}

export interface LicenseTier {
  id: string;
  jurisdiction: string;
  type: string;
  visaAllocationPerDesk: string;
  ejariProcessingHours: string;
  complianceBody: string;
  features: string[];
}

export const NEXUS_BRAND = {
  name: 'NEXUS WORKSPACE',
  legalName: 'NEXUS BUSINESS CENTERS & SERVICED OFFICES LLC',
  tagline: 'Sovereign Serviced Offices & Executive Suites',
  positioning: 'Ultra-Prime UAE Serviced Offices, Business Centers & DED Ejari Hubs',
  phone: '+971 4 455 8800',
  tollFree: '800-NEXUS (800-63987)',
  whatsapp: '+971 50 882 1122',
  email: 'inquiries@nexusworkspace.ae',
  headquarters: {
    address: 'Level 14 & 15, Burj Daman Tower, DIFC / Downtown, Dubai, UAE',
    coordinates: '25.2048° N, 55.2708° E'
  },
  regulatory: [
    { title: 'Dubai DET Licensed Business Center', ref: 'DET-BC-2026-9081' },
    { title: 'DED Ejari Certified Leasing Entity', ref: 'EJARI-DED-NEXUS-88' },
    { title: 'DIFC Registered Workspace Operator', ref: 'DIFC-NEX-4410' },
    { title: 'ADGM Approved Business Hub', ref: 'ADGM-BC-7720' }
  ]
};

export const NEXUS_OFFICES: OfficeOption[] = [
  {
    id: 'office-1',
    title: 'Executive Private Corner Suite',
    category: 'Private Suite',
    capacity: '4 - 8 Workstations',
    capacityNumber: 8,
    areaSqFt: 420,
    areaSqM: 39,
    startingPriceMonthlyAed: 11500,
    priceFormatted: 'AED 11,500 / month',
    ejariQuota: 'Up to 5 UAE Resident Visa Allocations',
    description: 'Soundproof executive corner office suite featuring floor-to-ceiling panoramic city views, Herman Miller ergonomic chairs, electrified height-adjustable desks, and dedicated direct-dial telephone lines.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80'
    ],
    features: [
      '24/7/365 Biometric & Smartphone Mobile Keycard Access',
      'Dedicated UAE Landline (+971 4) with Bilingual Receptionist Call Answering',
      '10 Hours Monthly Boardroom & Conference Suite Credits Included',
      'Complimentary Daily Housekeeping, Sanitization & Nightly Bin Clearing'
    ],
    includedAmenities: [
      'Unlimited Artisan Barista Espresso & Organic Tea Lounge',
      'High-Speed 1Gbps Symmetric Fiber Wi-Fi 6E & Hardwired CAT6A',
      'Free Black & White + Color Laser Cloud Printing Quota',
      'DED Ejari Registration Certificate & Physical Inspection Readiness'
    ],
    acousticRating: 'STC 48 Acoustic Soundproof Double Glazing',
    itSpecs: 'Cisco Meraki Dedicated Private VLAN & Dual Redundant Dark Fiber',
    floorLevel: 'Level 14 & 15 Corner Aspect',
    viewOrientation: 'Burj Khalifa & Downtown Skyline Panoramic View',
    depositMonths: 1
  },
  {
    id: 'office-2',
    title: 'Presidential C-Suite Headquarters',
    category: 'Executive Office',
    capacity: '12 - 25 Workstations',
    capacityNumber: 25,
    areaSqFt: 1150,
    areaSqM: 107,
    startingPriceMonthlyAed: 26500,
    priceFormatted: 'AED 26,500 / month',
    ejariQuota: 'Up to 15 UAE Resident Visa Allocations',
    description: 'Turnkey flagship corporate headquarters suite for regional leadership teams, financial advisory firms, and family offices. Includes an internal private meeting salon, CEO executive office, internal kitchenette, and dedicated receptionist desk.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1000&q=80'
    ],
    features: [
      'Internal 8-Person Private Glass Meeting Room with 75-inch 4K Display',
      'Custom Acrylic Company Logo Signage at Suite Entrance & Digital Directory',
      'Dedicated Executive Floor Receptionist & Guest White-Glove Hospitality',
      '2x Reserved VIP Basement Parking Passes Included with EV Charging'
    ],
    includedAmenities: [
      'Unrestricted 24/7 Access for Entire Corporate Staff',
      'Dedicated Server Rack Space in Tier III On-Premises Data Center',
      'Daily Full Office Turn-Down & Executive Barista Service',
      'Official DED Commercial Lease Contract (Ejari) for Maximum Visa Quota'
    ],
    acousticRating: 'STC 52 Sovereign-Grade Double Laminated Acoustic Glass',
    itSpecs: 'Private Subnet, Static Public IP, 10Gbps Internal Backbone',
    floorLevel: 'Level 15 Executive Penthouse Floor',
    viewOrientation: 'DIFC Gate District & Arabian Gulf Skyline',
    depositMonths: 2
  },
  {
    id: 'office-3',
    title: 'DED Trade-License-Ready Suite',
    category: 'License Ready',
    capacity: '1 - 3 Workstations',
    capacityNumber: 3,
    areaSqFt: 220,
    areaSqM: 20,
    startingPriceMonthlyAed: 5200,
    priceFormatted: 'AED 5,200 / month',
    ejariQuota: 'Compliant for 100% Mainland LLC License Issuance',
    description: 'Fully compliant, lockable private office suite engineered specifically for fast-track Dubai Economy and Tourism (DET) and Abu Dhabi DED trade license approvals. Includes immediate Ejari contract generation and on-site government inspection support.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80'
    ],
    features: [
      'Instant DED Ejari Certificate Issued Within 2 Hours of Lease Signing',
      'Official UAE Postal P.O. Box & Corporate Mail/Courier Handling',
      'Dedicated PRO & Government Liaison Desk for Visa & Emirates ID Processing',
      'Zero Hidden Utility Bills — DEWA Electricity, Chiller AC & High-Speed Wi-Fi Included'
    ],
    includedAmenities: [
      'Meeting Room Hourly Credits',
      'Professional Business Address at Burj Daman or Opus Tower',
      'Flexible 6 to 12-Month Renewable Leases in AED',
      'Direct Bank Account Opening Introduction with UAE Tier-1 Banks'
    ],
    acousticRating: 'STC 44 Acoustic Partitioning',
    itSpecs: 'Cisco Meraki Secure Wi-Fi 6E',
    floorLevel: 'Level 14 Corporate Wing',
    viewOrientation: 'City Center Atrium & Financial Avenue',
    depositMonths: 1
  },
  {
    id: 'office-4',
    title: 'Dedicated Enterprise Hot-Desk Hub',
    category: 'Flexi Desk',
    capacity: '1 Workstation',
    capacityNumber: 1,
    areaSqFt: 85,
    areaSqM: 8,
    startingPriceMonthlyAed: 2200,
    priceFormatted: 'AED 2,200 / month',
    ejariQuota: 'Flexi-Desk Quota / 1 Visa Allocation',
    description: 'Ergonomic dedicated desk in our premium executive co-working lounge. Includes lockable pedestal storage, high-speed fiber internet, cloud printing, and access to private acoustic phone booths for confidential calls.',
    image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1000&q=80'
    ],
    features: [
      'Reserved Fixed Workstation with Ergonomic Steelcase Task Chair',
      'Private Lockable Storage Cabinet with Digital Combination Lock',
      'Acoustic Soundproof Single-Person Zoom Phone Pods',
      'Access to All 5 NEXUS Business Center Locations Across Dubai & Abu Dhabi'
    ],
    includedAmenities: [
      'Barista Specialty Coffee & Artisan Tea Bar',
      'Enterprise Network Security with 802.1X Authentication',
      'Networking Access to Monthly Executive Investor Mixers',
      'Month-to-Month Flexible Commitments'
    ],
    acousticRating: 'Acoustic Sound Masking System Active',
    itSpecs: 'Enterprise Wi-Fi 6E with 500 Mbps Burst Speeds',
    floorLevel: 'Level 14 Co-Working Plaza',
    viewOrientation: 'Open-Plan Skylight Atrium',
    depositMonths: 1
  },
  {
    id: 'office-5',
    title: 'Royal Boardroom & Video Conference Suite',
    category: 'Boardroom',
    capacity: 'Up to 24 Delegates',
    capacityNumber: 24,
    areaSqFt: 680,
    areaSqM: 63,
    startingPriceMonthlyAed: 450,
    priceFormatted: 'AED 450 / hour (or AED 3,200 / day)',
    ejariQuota: 'Boardroom Hire & Delegation Hospitality',
    description: 'High-stakes boardroom equipped with dual 85-inch 4K displays, Polycom Studio X70 intelligent video tracking, acoustic ceiling baffling, leather executive swivel armchairs, and white-glove catering service.',
    image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80'
    ],
    features: [
      'Dual 85-inch 4K HDR Presentation Screens with Wireless Screen Sharing',
      'Polycom Studio X70 Dual-Lens AI Camera with Speaker Auto-Framing',
      'Biamp Ceiling Microphone Array for 360-Degree Crystal Clear Audio Pickup',
      'On-Site Dedicated IT Support Technician & White-Glove Tea/Catering Service'
    ],
    includedAmenities: [
      'Gourmet Pastries, Artisan Coffees & Mineral Water Service',
      'Digital Smart Whiteboard with Cloud Exporting',
      'High-Security Encrypted Conference Lines',
      'Direct Elevator Access for External VIP Guests'
    ],
    acousticRating: 'STC 55 Broadcast-Grade Acoustic Isolation',
    itSpecs: 'Dedicated 1Gbps Symmetric Video-Conferencing Line',
    floorLevel: 'Level 15 VIP Conference Wing',
    viewOrientation: 'Panoramic Dubai Skyline',
    depositMonths: 0
  },
  {
    id: 'office-6',
    title: 'Full-Floor Managed Enterprise Plate',
    category: 'Enterprise Floorplate',
    capacity: '40 - 100 Workstations',
    capacityNumber: 100,
    areaSqFt: 4800,
    areaSqM: 446,
    startingPriceMonthlyAed: 95000,
    priceFormatted: 'AED 95,000 / month',
    ejariQuota: 'Up to 60 UAE Resident Visa Allocations',
    description: 'Custom-built, fully managed private full floorplate for multinational corporations, regional headquarters, and technology scale-ups. Custom architectural branding, private executive boardrooms, wellness suites, and dedicated IT server rooms.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80'
    ],
    features: [
      'Entire Dedicated Private Floor with Independent Biometric Turnstile Access',
      'Custom Interior Architecture & Corporate Brand Palette Integration',
      'Dedicated On-Site Facility Manager & Full-Time Day Porters',
      'Private Server Room with Independent HVAC Precision Cooling'
    ],
    includedAmenities: [
      'Full Turnkey Operational Management (Maintenance, Cleaning, IT, Pantry)',
      '10x Reserved VIP Basement Parking Bays',
      'Master DED / Free Zone Commercial Lease Agreement',
      'Flexible 12 to 36-Month Lease Structures in AED'
    ],
    acousticRating: 'STC 52 Whole-Floor Acoustic Design',
    itSpecs: 'Dedicated Tier III Datacenter Rack with Dual 10Gbps Dark Fiber Feeds',
    floorLevel: 'Whole Private Dedicated Floor (Level 18)',
    viewOrientation: '360° Unobstructed Dubai Metropolis View',
    depositMonths: 3
  }
];

export const NEXUS_LOCATIONS: BusinessCenterLocation[] = [
  {
    id: 'loc-downtown',
    name: 'Downtown Burj Daman Tower',
    city: 'Dubai',
    district: 'DIFC / Downtown Dubai',
    tower: 'Burj Daman Tower (Level 14 & 15)',
    address: 'Al Sa\'ada St, DIFC / Downtown Dubai, UAE',
    totalFloors: '2 Full Floors (35,000 sq.ft)',
    totalSuites: 42,
    availableSuites: 5,
    occupancyPercentage: 88,
    coordinates: '25.2048° N, 55.2708° E',
    description: 'Located at the prestigious nexus of DIFC and Downtown Dubai. Walk directly to Gate Village and DIFC financial institutions, featuring panoramic views of Burj Khalifa and the Dubai Financial Center skyline.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Direct DIFC Gate Walkway', 'Waldorf Astoria Hotel in Building', 'Covered VIP Valet & Visitor Parking', '24/7 Security & Concierge'],
    metroProximity: '4 Minutes Walk to Financial Centre Metro Station',
    parkingSpecs: '4 Levels of Reserved Basement Parking with EV Chargers',
    phone: '+971 4 455 8801',
    email: 'downtown@nexusworkspace.ae',
    googleMapQuery: 'Burj+Daman+Tower+DIFC+Dubai'
  },
  {
    id: 'loc-businessbay',
    name: 'The Opus by Zaha Hadid',
    city: 'Dubai',
    district: 'Business Bay Commercial Hub',
    tower: 'The Opus Commercial Tower (Level 9)',
    address: 'Al A\'amal St, Business Bay, Dubai, UAE',
    totalFloors: '1 Full Floor (18,000 sq.ft)',
    totalSuites: 28,
    availableSuites: 2,
    occupancyPercentage: 93,
    coordinates: '25.1887° N, 55.2638° E',
    description: 'World-famous architectural triumph designed by Dame Zaha Hadid. Ultra-contemporary creative and corporate workspace minutes from Dubai Canal, featuring on-site Michelin dining (Roka, ME Dubai).',
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Zaha Hadid Architectural Icon', 'On-Site Michelin Star Dining', 'Dubai Canal Promenade Access', 'VIP Executive Club Lounge'],
    metroProximity: '6 Minutes to Business Bay Metro Station',
    parkingSpecs: 'Smart Automated Underground Parking System',
    phone: '+971 4 455 8802',
    email: 'opus@nexusworkspace.ae',
    googleMapQuery: 'The+Opus+by+Omniyat+Business+Bay+Dubai'
  },
  {
    id: 'loc-difc',
    name: 'DIFC Gate Precinct 4',
    city: 'Dubai',
    district: 'Dubai International Financial Centre',
    tower: 'Gate Precinct Building 4 (Level 5 & 6)',
    address: 'Gate Precinct, DIFC, Dubai, UAE',
    totalFloors: '2 Floors (24,000 sq.ft)',
    totalSuites: 36,
    availableSuites: 3,
    occupancyPercentage: 92,
    coordinates: '25.2105° N, 55.2810° E',
    description: 'Directly in the heart of DIFC’s regulatory financial zone. Fully compliant for DFSA regulated entities, venture capital funds, and international legal practices.',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    highlights: ['DFSA Regulatory Compliance Ready', 'DIFC Marble Walk Access', 'Private Banker Meeting Suites', 'High-Speed Metro Connection'],
    metroProximity: 'Direct Air-Conditioned Bridge to Emirates Towers Metro',
    parkingSpecs: 'DIFC Gate Precinct Reserved Tenant Parking',
    phone: '+971 4 455 8803',
    email: 'difc@nexusworkspace.ae',
    googleMapQuery: 'DIFC+Gate+Precinct+Building+4+Dubai'
  },
  {
    id: 'loc-marina',
    name: 'Dubai Marina Silverene Tower',
    city: 'Dubai',
    district: 'Dubai Marina Waterfront',
    tower: 'Silverene Tower B (Level 12)',
    address: 'Marina Promenade, Dubai Marina, Dubai, UAE',
    totalFloors: '1 Floor (16,000 sq.ft)',
    totalSuites: 24,
    availableSuites: 4,
    occupancyPercentage: 84,
    coordinates: '25.0772° N, 55.1398° E',
    description: 'Prime waterfront business center directly overlooking the Dubai Marina yacht basin. Steps from Dubai Marina Mall with floor-to-ceiling sea and yacht views.',
    image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f35?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Panoramic Yacht Marina Views', 'Steps to Dubai Marina Mall', 'Direct Tram & Metro Connectivity', 'Marina Walk Dining & Coffee Bars'],
    metroProximity: '3 Minutes to DMCC Metro Station & Tram',
    parkingSpecs: 'Silverene Covered Commercial Parking',
    phone: '+971 4 455 8804',
    email: 'marina@nexusworkspace.ae',
    googleMapQuery: 'Silverene+Towers+Dubai+Marina'
  },
  {
    id: 'loc-abudhabi',
    name: 'Abu Dhabi ADGM Al Sila Tower',
    city: 'Abu Dhabi',
    district: 'ADGM Square, Al Maryah Island',
    tower: 'Al Sila Tower (Level 18 & 19)',
    address: 'ADGM Square, Al Maryah Island, Abu Dhabi, UAE',
    totalFloors: '2 Floors (30,000 sq.ft)',
    totalSuites: 40,
    availableSuites: 4,
    occupancyPercentage: 90,
    coordinates: '24.4984° N, 54.3892° E',
    description: 'Abu Dhabi’s international financial free zone headquarters. Direct proximity to ADGM Courts, sovereign wealth funds, global private equity firms, and luxury Galleria Mall.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    highlights: ['ADGM Financial Freezone License Ready', 'The Galleria Luxury Mall Link', 'Rosewood & Four Seasons Access', 'Sovereign Wealth Executive Hub'],
    metroProximity: 'Central Al Maryah Transit Hub',
    parkingSpecs: 'ADGM Square Multi-Storey VIP Parking with Valet',
    phone: '+971 2 694 8800',
    email: 'adgm@nexusworkspace.ae',
    googleMapQuery: 'Al+Sila+Tower+ADGM+Square+Abu+Dhabi'
  }
];

export const LICENSE_TIERS: LicenseTier[] = [
  {
    id: 'lic-mainland',
    jurisdiction: 'Dubai Economy & Tourism (DET / DED Mainland)',
    type: 'Commercial / Professional LLC Mainland License',
    visaAllocationPerDesk: '1 Visa per 80 sq.ft (Up to 15 Visas per Suite)',
    ejariProcessingHours: 'Instant (2 to 4 Hours Approval)',
    complianceBody: 'Dubai Department of Economy & Tourism',
    features: [
      '100% Foreign Ownership on Mainland LLC activities',
      'No Restrictions on UAE Government Tenders & Local Trade',
      'Instant DED Ejari Certificate Issued on Dubai Land Department System',
      'Physical Office Inspection Support by Nexus PRO Team'
    ]
  },
  {
    id: 'lic-difc',
    jurisdiction: 'DIFC Financial Free Zone',
    type: 'DFSA Regulated Financial & Non-Financial License',
    visaAllocationPerDesk: '1 Visa per 80 sq.ft + Partner Visa Entitlements',
    ejariProcessingHours: '24 Hours DIFC Lease Registration',
    complianceBody: 'DIFC Authority & DFSA',
    features: [
      '0% Corporate & Personal Tax Guarantees for 50 Years',
      'Independent English Common Law Courts (DIFC Courts)',
      '100% Capital Repatriation with No Currency Restrictions',
      'Pre-Approved Commercial Space for Category 1-4 DFSA Licenses'
    ]
  },
  {
    id: 'lic-adgm',
    jurisdiction: 'Abu Dhabi Global Market (ADGM)',
    type: 'ADGM Financial / SPV / Asset Management License',
    visaAllocationPerDesk: 'Customized Visa Allocation Quota',
    ejariProcessingHours: '24 Hours ADGM Registration',
    complianceBody: 'ADGM Registration Authority (RA)',
    features: [
      'Direct English Common Law Legal Framework',
      'Special Purpose Vehicles (SPVs) & Sovereign Holding Structures',
      'Direct Access to Abu Dhabi Institutional Capital & Family Offices',
      'Turnkey Al Sila Tower Lease Registered on ADGM Portal'
    ]
  },
  {
    id: 'lic-freezone',
    jurisdiction: 'DMCC / DWTC / Dubai South Free Zones',
    type: 'Commodities, Tech & International Services Freezone License',
    visaAllocationPerDesk: '1 to 6 Visas per Flexi / Private Suite',
    ejariProcessingHours: 'Same-Day Freezone Tenancy Agreement',
    complianceBody: 'Free Zone Authorities (DMCC / DCCA / DWTC)',
    features: [
      '100% Foreign Ownership & Duty-Free Customs Privileges',
      'Dual License Option (Mainland Branch Setup Eligibility)',
      'Simplified Corporate Bank Account Opening Protocols',
      'Flexible Month-to-Month Shared & Dedicated Desk Packages'
    ]
  }
];

export const FAQ_NEXUS = [
  {
    question: 'What is included in the monthly serviced office lease in AED?',
    answer: 'All NEXUS WORKSPACE monthly leases are 100% all-inclusive. Your monthly fee in AED covers fully furnished high-spec office suites (Herman Miller seating, desks, storage), DEWA electricity and central chiller AC utilities, symmetric fiber internet (Wi-Fi 6E and hardwired CAT6A), daily housekeeping and nightly sanitization, mail and courier reception, professional bilingual phone answering in your company name, and monthly complimentary boardroom credits.'
  },
  {
    question: 'How fast can we get an Ejari certificate for DED trade license registration?',
    answer: 'Because all NEXUS WORKSPACE facilities are pre-approved and certified by the Dubai Department of Economy and Tourism (DET) and Dubai Land Department (DLD), an official Ejari certificate is generated within 2 to 4 hours of lease execution. Our on-site PRO team handles the digital submission and coordinates government physical site inspections.'
  },
  {
    question: 'What are the minimum lease terms and deposit requirements?',
    answer: 'We offer flexible lease commitments from 1 month (flexi desks) to 12, 24, or 36-month corporate agreements for private suites and full floorplates. Standard security deposits are 1 to 2 months of the lease value in AED, held transparently in escrow and refunded upon lease conclusion.'
  },
  {
    question: 'Can we expand or downsize as our team grows?',
    answer: 'Yes. Our agile workspace agreement allows you to upgrade from a 2-desk suite to a 10-desk corner office or full 50-desk floorplate across any of our 5 locations in Dubai or Abu Dhabi at any time during your lease tenure without early termination penalties.'
  },
  {
    question: 'Is 24/7 access and building parking included?',
    answer: 'Yes. Private office suite clients have unrestricted 24/7/365 access via personalized biometric credentials and smartphone app keycards. Reserved basement parking spaces with EV charging stations are included with Executive and C-Suite packages, with additional monthly parking passes available.'
  }
];

export const TESTIMONIALS_NEXUS = [
  {
    id: 'test-1',
    author: 'Tariq Al-Maktoum',
    title: 'Managing Director, Falcon Crest Capital',
    location: 'Burj Daman Tower, DIFC',
    content: 'NEXUS provided our private wealth advisory team with a flawless turnkey executive suite in DIFC within 24 hours. The Ejari approval for our DET commercial license took less than 3 hours, and our clients are consistently impressed by the boardroom facilities.',
    rating: 5,
    tenure: 'Client since 2024 (25-Desk Suite)'
  },
  {
    id: 'test-2',
    author: 'Elena Rostova',
    title: 'Head of MENA Operations, Apex Global FinTech',
    location: 'The Opus by Zaha Hadid, Business Bay',
    content: 'The architectural presence at The Opus gives our brand immediate credibility. The dark fiber connectivity, private VLAN isolation, and ultra-quiet STC 52 acoustic glass allow our 14 engineers and traders to work without disruption.',
    rating: 5,
    tenure: 'Client since 2025 (Corner Suite)'
  },
  {
    id: 'test-3',
    author: 'Marcus Sterling',
    title: 'Senior Partner, Sterling & Vance Legal',
    location: 'Al Sila Tower, ADGM Abu Dhabi',
    content: 'Setting up our Abu Dhabi Global Market office through NEXUS saved us over 3 months of fit-out delays and hundreds of thousands of Dirhams in upfront capital expenditure. Exceptional concierge and executive hospitality.',
    rating: 5,
    tenure: 'Client since 2024 (Executive Wing)'
  }
];

export const CASE_STUDIES_NEXUS = [
  {
    id: 'case-1',
    company: 'Vanguard Global Quantitative Fund',
    challenge: 'Required rapid 14-day setup for 22 analysts and partners in DIFC with DFSA compliance and Tier-III server rack.',
    solution: 'Turnkey Presidential C-Suite at Burj Daman with custom secure comms, dedicated dark fiber loop, and 15 investor visa approvals.',
    result: '100% on-time deployment with zero capital expenditure on interior fit-out; estimated AED 380,000 saved.',
    metric: 'AED 380K CapEx Saved'
  },
  {
    id: 'case-2',
    company: 'Hyperion AI Middle East',
    challenge: 'European AI unicorn expanding into UAE requiring DED mainland trade license, Ejari, and fast expansion capacity.',
    solution: 'Started with 6-desk suite at The Opus, expanded to 18 desks within 6 months with zero relocation penalties.',
    result: 'Ejari issued in 2 hours; 18 UAE residency visas stamped in 10 business days.',
    metric: '2-Hour Ejari Approval'
  }
];

// Complete backwards-compatible bridge object
export const NEXUS_DATA = {
  brand: NEXUS_BRAND,
  hero: {
    eyebrow: 'Ultra-Prime UAE Serviced Offices & DED Business Centers',
    title: 'Your UAE Corporate Office, Fully Ready Today.',
    subtitle: 'Step into pre-fitted, luxury serviced offices with instant DED Ejari contracts, 24/7 biometric access, tier-1 fiber, and executive barista service across Dubai and Abu Dhabi.',
    ctaPrimary: 'Book Private Viewing',
    ctaSecondary: 'Calculate Workspace & Ejari'
  },
  offices: NEXUS_OFFICES.map(o => ({
    ...o,
    area: `${o.areaSqFt} sq.ft (${o.areaSqM} m²)`,
    startingPrice: o.priceFormatted
  })),
  locations: NEXUS_LOCATIONS,
  licenses: LICENSE_TIERS,
  faqs: FAQ_NEXUS,
  testimonials: TESTIMONIALS_NEXUS,
  caseStudies: CASE_STUDIES_NEXUS
};
