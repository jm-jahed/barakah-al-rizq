export interface NestoraCatalogService {
  id: string;
  code: string;
  title: string;
  category: 'Residential Management' | 'Commercial & Retail' | 'RERA & Legal Compliance' | 'Preventive Maintenance & AMC' | 'Tenant Lifecycle & Leasing' | 'Holiday Home & Short-Term' | 'Financial & Asset Accounting' | 'Snagging & Handover';
  subCategory: string;
  reraStandard: string;
  description: string;
  deliverables: string[];
  timeframe: string;
  pricing: {
    aed: number;
    billingType: 'Annual % of Rent' | 'Fixed Annual Fee' | 'Per Incident' | 'Per Unit Handover';
    label: string;
  };
  propertyType: 'Apartment' | 'Villa / Townhouse' | 'Commercial Office' | 'Retail Shop' | 'Full Building Portfolio';
  popular?: boolean;
}

export const NESTORA_CATALOG_CATEGORIES = [
  'All Asset Disciplines',
  'Residential Management',
  'Commercial & Retail',
  'RERA & Legal Compliance',
  'Preventive Maintenance & AMC',
  'Tenant Lifecycle & Leasing',
  'Holiday Home & Short-Term',
  'Financial & Asset Accounting',
  'Snagging & Handover'
] as const;

export type NestoraCategoryFilter = (typeof NESTORA_CATALOG_CATEGORIES)[number];

// 222 Granular UAE Property Management, Maintenance, Legal & Asset Optimization Services Catalog
export const NESTORA_200_CATALOG: NestoraCatalogService[] = [
  {
    "id": "res-001",
    "code": "NST-RES01",
    "title": "Full Turnkey Landlord Asset Management (Apartments)",
    "category": "Residential Management",
    "subCategory": "Single Unit Residential",
    "reraStandard": "RERA Lic. No. 22891 / DLD Certified",
    "description": "Complete hands-off property management for individual residential apartments across Dubai and Abu Dhabi including tenant screening, Ejari registration, rent collection, and 24/7 maintenance dispatch.",
    "deliverables": [
      "Dedicated Asset Manager & Tenant Helpdesk",
      "RERA-Compliant Tenancy Contract Drafting",
      "Automated UAE Central Bank Direct Debit (UAEDDS) / PDC Vaulting",
      "Quarterly Condition Audits with High-Res Photo Dossiers"
    ],
    "timeframe": "Annual Management Contract",
    "pricing": {
      "aed": 5,
      "billingType": "Annual % of Rent",
      "label": "5% of Annual Rent (Min. AED 4,500/yr)"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "res-002",
    "code": "NST-RES02",
    "title": "Luxury Villa & Townhouse Full Asset Management",
    "category": "Residential Management",
    "subCategory": "Luxury Residential",
    "reraStandard": "RERA Master Community Guidelines",
    "description": "Bespoke management for luxury villas in Palm Jumeirah, Emirates Hills, Dubai Hills Estate, and Saadiyat Island covering garden, pool, MEP maintenance, and high-net-worth tenant relations.",
    "deliverables": [
      "Bi-Monthly Comprehensive MEP & Structural Audits",
      "Master Community NOC & Security Pass Handling",
      "Swimming Pool & Landscaping Contractor Supervision",
      "Dedicated 24/7 Priority Emergency Dispatch"
    ],
    "timeframe": "Annual Management Contract",
    "pricing": {
      "aed": 6,
      "billingType": "Annual % of Rent",
      "label": "6% of Annual Rent (Min. AED 12,000/yr)"
    },
    "propertyType": "Villa / Townhouse",
    "popular": true
  },
  {
    "id": "res-003",
    "code": "NST-RES03",
    "title": "Multi-Unit Residential Building Portfolio Management",
    "category": "Residential Management",
    "subCategory": "Portfolio & Full Buildings",
    "reraStandard": "DLD Full Building License Standards",
    "description": "Institutional-grade asset management for private family offices and institutional owners holding entire residential towers (20 to 300+ units) in Dubai and Abu Dhabi.",
    "deliverables": [
      "On-Site Concierge & Facilities Staff Management",
      "Dynamic Yield Pricing & Bulk Tenancy Rollouts",
      "Automated Utility Common Area Billing Allocation",
      "Monthly Board-Level Audited Income Statements"
    ],
    "timeframe": "Annual Institutional Mandate",
    "pricing": {
      "aed": 4,
      "billingType": "Annual % of Rent",
      "label": "3.5%–4.5% of Gross Rental Income"
    },
    "propertyType": "Full Building Portfolio",
    "popular": true
  },
  {
    "id": "res-004",
    "code": "NST-RES04",
    "title": "Overseas Landlord Complete Remote Oversight Service",
    "category": "Residential Management",
    "subCategory": "Remote Investors",
    "reraStandard": "UAE Power of Attorney (POA) Protocols",
    "description": "Designed for international property owners residing outside the UAE. We act under legal PoA to manage all government notarizations, bank transfers, utility activations, and owner tax reports.",
    "deliverables": [
      "Cross-Border International Wire Remittances (Multi-Currency)",
      "DEWA / ADDC Remote Connection & Final Bill Clearance",
      "Virtual Video Walkthroughs for Unit Inspections",
      "End-of-Year Country-Specific Tax Depreciation Summaries"
    ],
    "timeframe": "Annual Management Contract",
    "pricing": {
      "aed": 6,
      "billingType": "Annual % of Rent",
      "label": "6% of Annual Rent"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "res-005",
    "code": "NST-RES05",
    "title": "Ultra-Luxury Penthouse & Branded Residence Concierge Care",
    "category": "Residential Management",
    "subCategory": "Branded Residences",
    "reraStandard": "Luxury Hospitality Management Standards",
    "description": "Specialized management for penthouses in Bulgari Residences, Atlantis The Royal, Dorchester Collection, and One Za’abeel with bespoke interior curation and VIP tenant management.",
    "deliverables": [
      "White-Glove VIP Tenant Screening & Protocol",
      "Bespoke Marble, Wood & Fine Art Care Supervision",
      "Direct Liaison with Branded Residence Concierge General Manager",
      "Quarterly Infrared MEP & Acoustic Seal Inspections"
    ],
    "timeframe": "Annual Bespoke Mandate",
    "pricing": {
      "aed": 7,
      "billingType": "Annual % of Rent",
      "label": "7% of Annual Rent (Min. AED 25,000/yr)"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "res-006",
    "code": "NST-RES06",
    "title": "Private Island & Waterfront Estate Asset Stewardship",
    "category": "Residential Management",
    "subCategory": "Waterfront Estates",
    "reraStandard": "Marine & Waterfront Environmental Guidelines",
    "description": "High-touch asset care for beachfront mansions in Jumeirah Bay Island, Pearl Jumeirah, and Nurai Island, including private jetty, desalination, and marine salt air corrosion defense.",
    "deliverables": [
      "Marine Corrosion Prevention & Seawall Inspections",
      "Private Jetty & Pontoon Safety Compliance",
      "HVAC Humidity & Salt-Air Filtration Servicing",
      "High-Profile Security & Privacy Protocol Enforcement"
    ],
    "timeframe": "Annual Bespoke Mandate",
    "pricing": {
      "aed": 8,
      "billingType": "Annual % of Rent",
      "label": "8% of Annual Rent"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "res-007",
    "code": "NST-RES07",
    "title": "Student Housing & Co-Living Multi-Door Management",
    "category": "Residential Management",
    "subCategory": "Co-Living Assets",
    "reraStandard": "Dubai Academic City & DLD Guidelines",
    "description": "High-density residential operations for co-living clusters and student dormitories in Dubai Academic City and Knowledge Park with automated room-level billing and curfew management.",
    "deliverables": [
      "Individual Room Digital Keyless Access Protocols",
      "Sub-metered Power & Water Billing Allocation",
      "Weekly Common Area Deep Sanitation Oversight",
      "Student Community Portal & Dispute Management"
    ],
    "timeframe": "Annual Management Contract",
    "pricing": {
      "aed": 5,
      "billingType": "Annual % of Rent",
      "label": "5% of Gross Collections"
    },
    "propertyType": "Full Building Portfolio",
    "popular": false
  },
  {
    "id": "res-008",
    "code": "NST-RES08",
    "title": "Staff Accommodation & Corporate Housing Operations",
    "category": "Residential Management",
    "subCategory": "Corporate Housing",
    "reraStandard": "MOHRE & Municipality Labour Accommodation Standards",
    "description": "Compliant management of corporate staff quarters and hospitality staff residences in Al Quoz, Jebel Ali, and Sonapur with full civil defense and health inspection adherence.",
    "deliverables": [
      "Civil Defense Smoke Detector & Escape Route Audits",
      "Monthly Dubai Municipality Hygiene Certifications",
      "Bulk Corporate Tenancy Renewals & Security Badging",
      "24/7 Rapid Emergency Response for MEP Incidents"
    ],
    "timeframe": "Annual Corporate Contract",
    "pricing": {
      "aed": 4,
      "billingType": "Annual % of Rent",
      "label": "4% of Annual Lease Value"
    },
    "propertyType": "Full Building Portfolio",
    "popular": false
  },
  {
    "id": "res-009",
    "code": "NST-RES09",
    "title": "Duplex & Loft Specialized Interior Asset Management",
    "category": "Residential Management",
    "subCategory": "Specialty Architecture",
    "reraStandard": "DLD Structural Modification Guidelines",
    "description": "Dedicated management for double-height loft and duplex residences in DIFC, City Walk, and JBR featuring architectural glass, mezzanine structural checks, and motorized curtain maintenance.",
    "deliverables": [
      "Double-Height Glazing & Motorized Blind Servicing",
      "Mezzanine Structural Load & Railing Safety Audits",
      "Acoustic Barrier & Floor Vibration Assessments",
      "Tailored VIP Tenant Onboarding & Orientation"
    ],
    "timeframe": "Annual Management Contract",
    "pricing": {
      "aed": 5.5,
      "billingType": "Annual % of Rent",
      "label": "5.5% of Annual Rent"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "res-010",
    "code": "NST-RES10",
    "title": "Golf Course Frontage Villa Dedicated Asset Oversight",
    "category": "Residential Management",
    "subCategory": "Golf Estates",
    "reraStandard": "Master Community Landscaping Codes",
    "description": "Specialized management for villas overlooking golf courses in Dubai Hills Club, JGE, and Arabian Ranches with boundary safety netting and turf drainage maintenance.",
    "deliverables": [
      "Golf Course Perimeter Safety & Netting Inspections",
      "Sub-surface Drainage & Landscape Root Barrier Checks",
      "Exterior Facade Jet Washing & Sandstorm Remediation",
      "Community HOA Architectural Compliance Liaison"
    ],
    "timeframe": "Annual Management Contract",
    "pricing": {
      "aed": 6,
      "billingType": "Annual % of Rent",
      "label": "6% of Annual Rent"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "res-011",
    "code": "NST-RES11",
    "title": "Off-Grid & Desert Eco-Villa Management",
    "category": "Residential Management",
    "subCategory": "Sustainable Assets",
    "reraStandard": "Dubai Green Building Regulations (Al Sa'fat)",
    "description": "Specialist operations for solar-powered luxury desert retreats in Al Barari, Al Lisaili, and equestrian estates with greywater recycling and solar array maintenance.",
    "deliverables": [
      "Solar Photovoltaic Panel Efficiency & Cleaning AMCs",
      "Greywater Irrigation Filtration & Tank Audits",
      "Equestrian Stable Structural & Perimeter Care",
      "Back-up Generator Load Testing & Fuel Delivery"
    ],
    "timeframe": "Annual Management Contract",
    "pricing": {
      "aed": 7,
      "billingType": "Annual % of Rent",
      "label": "7% of Annual Rent"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "res-012",
    "code": "NST-RES12",
    "title": "Historic & Heritage Property Conservation Management",
    "category": "Residential Management",
    "subCategory": "Heritage Assets",
    "reraStandard": "Dubai Architectural Heritage Department Codes",
    "description": "Conservation-grade stewardship for restored heritage and coral-stone properties in Al Fahidi, Deira, and Sharjah Heritage Heart.",
    "deliverables": [
      "Traditional Windtower (Barjeel) Structural Care",
      "Lime Plaster & Non-Invasive Termite Protection",
      "Government Heritage Department Inspection Liaison",
      "Bespoke Low-Impact Tenant Operational Rules"
    ],
    "timeframe": "Annual Management Contract",
    "pricing": {
      "aed": 7.5,
      "billingType": "Annual % of Rent",
      "label": "7.5% of Annual Rent"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "res-013",
    "code": "NST-RES13",
    "title": "Micro-Apartment & Studio High-Yield Portfolio Management",
    "category": "Residential Management",
    "subCategory": "High Yield Urban",
    "reraStandard": "DLD Studio Unit Occupancy Regulations",
    "description": "High-turnover management for studio and 1-bedroom investment clusters in JVC, Business Bay, and Arjan engineered to maximize net yield and minimize vacancy.",
    "deliverables": [
      "Rapid 7-Day Tenant Replacement Turnaround",
      "Standardized Wear-and-Tear Refurbishment Kits",
      "Smart Meter Electricity & Water Telemetry",
      "Zero-Arrears Automated PDC Cashing Engine"
    ],
    "timeframe": "Annual Management Contract",
    "pricing": {
      "aed": 5,
      "billingType": "Annual % of Rent",
      "label": "5% of Annual Rent"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "res-014",
    "code": "NST-RES14",
    "title": "Executive Relocation Residence Management",
    "category": "Residential Management",
    "subCategory": "Executive Corporate",
    "reraStandard": "RERA Standard Tenancy Regulations",
    "description": "Dedicated asset management for properties tenanted by multinational corporate C-suite executives with bespoke lease covenants and white-glove onboarding.",
    "deliverables": [
      "Corporate HR Direct Lease & Payment Guarantee",
      "Bespoke Furniture Swatch & Styling Delivery",
      "Dedicated 24/7 Executive Concierge Helpline",
      "Direct DEWA & Chiller Registration Without Tenant Delay"
    ],
    "timeframe": "Annual Management Contract",
    "pricing": {
      "aed": 5.5,
      "billingType": "Annual % of Rent",
      "label": "5.5% of Annual Rent"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "res-015",
    "code": "NST-RES15",
    "title": "Triplex & Sky Mansion Vertical Estate Management",
    "category": "Residential Management",
    "subCategory": "Ultra-Luxury Mansions",
    "reraStandard": "High-Rise Luxury Residential Standards",
    "description": "Full vertical estate operations for multi-level sky mansions with private infinity pools, internal elevators, and car lifts in Downtown Dubai and Dubai Canal.",
    "deliverables": [
      "Private Internal Elevator Annual AMC & Safety Certs",
      "Suspended Infinity Pool Leak Telemetry & Chemistry",
      "Private Car Lift Mechanism Diagnostics",
      "Specialized Glazing Wind-Pressure Sensor Audits"
    ],
    "timeframe": "Annual Bespoke Mandate",
    "pricing": {
      "aed": 8,
      "billingType": "Annual % of Rent",
      "label": "8% of Annual Rent (Min. AED 45,000/yr)"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "res-016",
    "code": "NST-RES16",
    "title": "Furnished Short-to-Mid Term Flex Lease Management",
    "category": "Residential Management",
    "subCategory": "Flexible Term",
    "reraStandard": "DLD Short-to-Long Term Hybrid Guidelines",
    "description": "Hybrid lease management transitioning seamlessly between 1-3 month seasonal tenancies and annual corporate contracts to capture high-season premiums.",
    "deliverables": [
      "Seasonal Yield Dynamic Pricing Matrix",
      "Inventory Condition Verification between Tenants",
      "Comprehensive Linen & Soft Furnishing Refresh",
      "Instant Interim Tenant Sourcing Funnel"
    ],
    "timeframe": "Annual Management Contract",
    "pricing": {
      "aed": 7,
      "billingType": "Annual % of Rent",
      "label": "7% of Gross Rental Revenue"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "res-017",
    "code": "NST-RES17",
    "title": "Distressed Asset & Delayed Handover Turnaround Service",
    "category": "Residential Management",
    "subCategory": "Asset Recovery",
    "reraStandard": "DLD Project Registration & RERA Dispute Rules",
    "description": "Turnaround management for previously neglected, vacated, or disputed residential properties requiring deep rectification, legal clearing, and re-tenanting.",
    "deliverables": [
      "Complete Structural & MEP Diagnostic Audit",
      "DLD Overdue Service Charge Clearing Negotiations",
      "Full Cosmetic Refurbishment & Re-painting Oversight",
      "Aggressive Re-marketing at Current Dubai Market Peak"
    ],
    "timeframe": "6 to 12-Month Recovery Mandate",
    "pricing": {
      "aed": 6500,
      "billingType": "Fixed Annual Fee",
      "label": "AED 6,500 Base + 5% of Rent"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "res-018",
    "code": "NST-RES18",
    "title": "Vacant Property Caretaking & Security Watch (Lock & Leave)",
    "category": "Residential Management",
    "subCategory": "Vacant Asset Care",
    "reraStandard": "UAE Private Property Security Guidelines",
    "description": "Comprehensive maintenance, security, and air-conditioning humidity management for secondary homes and vacant investment properties between tenancies.",
    "deliverables": [
      "Weekly Physical Property Walkthrough & Flush Tests",
      "AC Humidity Regulation to Prevent Mould/Mildew",
      "Mail & Utility Notice Collection & Digitization",
      "Sand & Dust Ingress Deep Cleaning Inspections"
    ],
    "timeframe": "Quarterly or Annual Retainer",
    "pricing": {
      "aed": 850,
      "billingType": "Fixed Annual Fee",
      "label": "AED 850 / Month (Billed Quarterly)"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "res-019",
    "code": "NST-RES19",
    "title": "Joint Ownership & Family Fractional Asset Administration",
    "category": "Residential Management",
    "subCategory": "Fractional Ownership",
    "reraStandard": "DLD Fractional Title Deed System",
    "description": "Impartial administration of residential assets owned jointly by multiple heirs or investment syndicate partners with proportionate dividend disbursements.",
    "deliverables": [
      "Pro-Rata Net Dividend Bank Wire Distribution",
      "Transparent Multi-Owner Shared Portal Access",
      "Quarterly Co-Owner Unanimous Resolution Management",
      "Consolidated Tax & Audit Statements"
    ],
    "timeframe": "Annual Management Contract",
    "pricing": {
      "aed": 6,
      "billingType": "Annual % of Rent",
      "label": "6% of Annual Rent"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "res-020",
    "code": "NST-RES20",
    "title": "Smart Home Automation & IoT Property Oversight",
    "category": "Residential Management",
    "subCategory": "Smart Residences",
    "reraStandard": "Dubai Smart City IoT Protocols",
    "description": "Management of technology-enabled residences featuring Crestron, Lutron, Control4, and smart energy optimization systems with automated fault alerting.",
    "deliverables": [
      "Smart Sensor Water Leak Alert Diagnostics",
      "Lutron & Crestron System Firmware Maintenance",
      "Automated Chiller Optimization Algorithms",
      "Remote Keyless Access Code Revocation & Handover"
    ],
    "timeframe": "Annual Management Contract",
    "pricing": {
      "aed": 6,
      "billingType": "Annual % of Rent",
      "label": "6% of Annual Rent"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "res-021",
    "code": "NST-RES21",
    "title": "Townhouse Community Portfolio Asset Administration",
    "category": "Residential Management",
    "subCategory": "Townhouse Clusters",
    "reraStandard": "RERA Jointly Owned Property Law No. 6/2019",
    "description": "Coordinated management for investors holding clusters of 5 to 20 townhouses in Damac Hills 2, Villanova, and Arabian Ranches 3.",
    "deliverables": [
      "Bulk Maintenance Contract Cost Reductions",
      "Harmonized Community Tenant Rules Enforcement",
      "Unified Monthly Cash Flow Reporting",
      "Dedicated Cluster Property Supervisor"
    ],
    "timeframe": "Annual Management Mandate",
    "pricing": {
      "aed": 4.5,
      "billingType": "Annual % of Rent",
      "label": "4.5% of Gross Collections"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "res-022",
    "code": "NST-RES22",
    "title": "High-Net-Worth Diplomatic Residence Management",
    "category": "Residential Management",
    "subCategory": "Diplomatic Properties",
    "reraStandard": "UAE Ministry of Foreign Affairs Protocol",
    "description": "Discreet and secure asset management for residences leased to embassy staff, diplomats, and consular officials in Abu Dhabi and Dubai.",
    "deliverables": [
      "Embassy Protocol Lease Drafting & Diplomatic Clauses",
      "Enhanced Perimeter & Surveillance Coordination",
      "Pre-Clearance Background Verification",
      "Dedicated Bilingual English/Arabic Protocol Officer"
    ],
    "timeframe": "Annual Bespoke Mandate",
    "pricing": {
      "aed": 6.5,
      "billingType": "Annual % of Rent",
      "label": "6.5% of Annual Rent"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "res-023",
    "code": "NST-RES23",
    "title": "Furnished Apartment Turnover & Interior Staging Service",
    "category": "Residential Management",
    "subCategory": "Interior Optimization",
    "reraStandard": "DLD Property Staging Standards",
    "description": "Rapid aesthetic and functional refresh between tenants, including minor carpentry, touch-up painting, soft decor styling, and luxury photography.",
    "deliverables": [
      "48-Hour Rapid Turnaround Makeover",
      "High-Impact Architectural Photography & Video",
      "Complete Soft Furnishing Replacement Swatches",
      "Expected 10-15% Rental Value Premium Realization"
    ],
    "timeframe": "Per Turnover Project",
    "pricing": {
      "aed": 3500,
      "billingType": "Per Incident",
      "label": "Starting from AED 3,500 / Turn"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "res-024",
    "code": "NST-RES24",
    "title": "Waterfront Marina Berth & Residence Combined Care",
    "category": "Residential Management",
    "subCategory": "Marina Waterfront",
    "reraStandard": "Dubai Maritime City Authority Regulations",
    "description": "Combined asset administration for Dubai Marina and Creek Harbour residences paired with dedicated private marina vessel berths.",
    "deliverables": [
      "Marina Berth Water & Power Pedestal Inspections",
      "Shore-Power Connection Safety Verification",
      "Vessel Moorings & Cleat Tension Diagnostics",
      "Integrated Berth & Apartment Tenancy Bundling"
    ],
    "timeframe": "Annual Management Contract",
    "pricing": {
      "aed": 7,
      "billingType": "Annual % of Rent",
      "label": "7% of Combined Rental Value"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "res-025",
    "code": "NST-RES25",
    "title": "Residential Sub-Leasing Compliance & Risk Prevention",
    "category": "Residential Management",
    "subCategory": "Sub-Leasing Auditing",
    "reraStandard": "Dubai Law No. 26/2007 Article 24",
    "description": "Rigorous enforcement against unauthorized partition walls, illegal holiday subletting, and overcrowding across residential investment properties.",
    "deliverables": [
      "Unannounced Periodic Occupancy Headcount Checks",
      "Illegal Partition Wall Detection & Removal Orders",
      "DEWA Water Spike Telemetry Monitoring",
      "Immediate Legal Breach Notice Formulation"
    ],
    "timeframe": "Annual Preventive Monitoring",
    "pricing": {
      "aed": 1200,
      "billingType": "Fixed Annual Fee",
      "label": "AED 1,200 / Year (or Included in Full PM)"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "res-026",
    "code": "NST-RES26",
    "title": "Abu Dhabi Tawtheeq Residential Asset Stewardship",
    "category": "Residential Management",
    "subCategory": "Abu Dhabi Residential",
    "reraStandard": "Abu Dhabi DMT Tawtheeq System & Law No. 20/2006",
    "description": "Full property management tailored specifically for Abu Dhabi residential properties in Al Reem Island, Yas Island, Al Raha Beach, and Saadiyat Island.",
    "deliverables": [
      "ADDC Direct Connection & Bill Clearing",
      "Abu Dhabi DMT Tawtheeq Registration & Attestation",
      "Abu Dhabi Rental Dispute Settlement Assistance",
      "Saadiyat & Aldar Master Community Liaison"
    ],
    "timeframe": "Annual Management Contract",
    "pricing": {
      "aed": 5,
      "billingType": "Annual % of Rent",
      "label": "5% of Annual Rent (Min. AED 5,000)"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "res-027",
    "code": "NST-RES27",
    "title": "Sharjah & Northern Emirates Residential Asset Care",
    "category": "Residential Management",
    "subCategory": "Northern Emirates",
    "reraStandard": "Sharjah Municipality Tenancy Regulations",
    "description": "Dedicated management for residential assets in Sharjah Al Majaz, Al Zahia, Ajman Corniche, and Ras Al Khaimah Al Marjan Island.",
    "deliverables": [
      "Sharjah Municipality Tenancy Attestation (Tasdeeq)",
      "SEWA Electricity & Water Connection Verification",
      "Local Dispute Committee Representation",
      "Inter-Emirate Cheque Clearance Administration"
    ],
    "timeframe": "Annual Management Contract",
    "pricing": {
      "aed": 5,
      "billingType": "Annual % of Rent",
      "label": "5% of Annual Rent"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "res-028",
    "code": "NST-RES28",
    "title": "Expat Golden Visa Property Investment Oversight",
    "category": "Residential Management",
    "subCategory": "Golden Visa Portfolios",
    "reraStandard": "UAE ICP & DLD Golden Visa Criteria (AED 2M+)",
    "description": "Structured management ensuring high-value residential properties continuously meet the regulatory requirements for UAE 10-Year Golden Visa holders.",
    "deliverables": [
      "DLD Golden Visa Valuation Attestation Support",
      "Zero-Arrears Rent Record Maintenance for Visa Renewals",
      "Mortgage Clearance & Title Deed Endorsement",
      "Consolidated Property Wealth Dossiers"
    ],
    "timeframe": "Annual Management Contract",
    "pricing": {
      "aed": 5,
      "billingType": "Annual % of Rent",
      "label": "5% of Annual Rent"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "res-029",
    "code": "NST-RES29",
    "title": "Equestrian & Ranch Residential Estate Management",
    "category": "Residential Management",
    "subCategory": "Equestrian Assets",
    "reraStandard": "Dubai Polo & Equestrian Club Safety Standards",
    "description": "Comprehensive asset administration for ranch properties and equestrian estates in Al Habtoor Polo Resort, Desert Palm, and Al Ruwayyah.",
    "deliverables": [
      "Paddock & Sand Arena Maintenance Oversight",
      "Stall Mechanical Ventilation & Pest Defense",
      "Specialist Waste Disposal & Municipality Compliance",
      "Equestrian Tenant Lease Agreement Protocols"
    ],
    "timeframe": "Annual Bespoke Mandate",
    "pricing": {
      "aed": 7.5,
      "billingType": "Annual % of Rent",
      "label": "7.5% of Annual Rent"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "res-030",
    "code": "NST-RES30",
    "title": "Sustainable LEED-Certified Green Residence Operations",
    "category": "Residential Management",
    "subCategory": "Green Buildings",
    "reraStandard": "USGBC LEED / Dubai Green Building Standards",
    "description": "Specialized management for eco-conscious residences in Dubai Sustainable City and Masdar City focused on zero-waste protocols and solar export credits.",
    "deliverables": [
      "DEWA Shams Dubai Solar Net-Metering Audits",
      "Organic Waste Composting & Urban Farming Liaison",
      "High-Efficiency VRF Chiller Telemetry Monitoring",
      "Sustainability Performance Reports for Owners"
    ],
    "timeframe": "Annual Management Contract",
    "pricing": {
      "aed": 5.5,
      "billingType": "Annual % of Rent",
      "label": "5.5% of Annual Rent"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "com-001",
    "code": "NST-COM01",
    "title": "Grade-A Commercial Office Suite Management",
    "category": "Commercial & Retail",
    "subCategory": "Corporate Office",
    "reraStandard": "DIFC & DLD Commercial Tenancy Standards",
    "description": "Full-service management for prime commercial office spaces in DIFC, Downtown, and Business Bay including fit-out approval, service charge audits, and multinational corporate tenant liaison.",
    "deliverables": [
      "Building Management System (BMS) Interface & Chiller Logs",
      "Corporate Fit-Out NOC & Security Bond Escrow Handling",
      "UAE VAT 5% Invoicing & Tax Point Documentation",
      "Dedicated Commercial Facilities Escalation Desk"
    ],
    "timeframe": "Annual Commercial Mandate",
    "pricing": {
      "aed": 4.5,
      "billingType": "Annual % of Rent",
      "label": "4.5% of Annual Lease"
    },
    "propertyType": "Commercial Office",
    "popular": true
  },
  {
    "id": "com-002",
    "code": "NST-COM02",
    "title": "High-Street Prime Retail & F&B Unit Asset Care",
    "category": "Commercial & Retail",
    "subCategory": "Retail & Gastronomy",
    "reraStandard": "Dubai Municipality & Civil Defense Food Safety",
    "description": "Specialized asset oversight for high-footfall retail and F&B restaurant units in City Walk, JBR, and Dubai Marina including grease trap, exhaust duct, and gas pipeline safety audits.",
    "deliverables": [
      "Quarterly Kitchen Exhaust & Grease Trap Compliance Audits",
      "Civil Defense Gas Leak Detector Testing Protocols",
      "Turnover-Based Base vs Overage Rent Calculations",
      "Outdoor Seating Municipality Permit Renewals"
    ],
    "timeframe": "Annual Commercial Mandate",
    "pricing": {
      "aed": 5,
      "billingType": "Annual % of Rent",
      "label": "5% of Gross Turnover Rent"
    },
    "propertyType": "Retail Shop",
    "popular": true
  },
  {
    "id": "com-003",
    "code": "NST-COM03",
    "title": "Industrial Logistics & Cold-Chain Warehouse Operations",
    "category": "Commercial & Retail",
    "subCategory": "Industrial & Warehousing",
    "reraStandard": "Dubai South & JAFZA Industrial Standards",
    "description": "Comprehensive management for multi-bay warehousing and refrigerated logistics storage in Dubai Industrial City, JAFZA, and Dubai South.",
    "deliverables": [
      "Heavy Vehicle Loading Bay & Shutter Door Maintenance AMCs",
      "Three-Phase High Voltage Transformer & Load Audits",
      "Environmental Hazmat Storage Compliance Reviews",
      "Civil Defense High-Density Sprinkler Matrix Checks"
    ],
    "timeframe": "Annual Institutional Mandate",
    "pricing": {
      "aed": 3.5,
      "billingType": "Annual % of Rent",
      "label": "3.5% of Annual Lease"
    },
    "propertyType": "Commercial Office",
    "popular": false
  },
  {
    "id": "com-004",
    "code": "NST-COM04",
    "title": "Private Medical Clinic & Dental Center Asset Oversight",
    "category": "Commercial & Retail",
    "subCategory": "Healthcare Facilities",
    "reraStandard": "Dubai Health Authority (DHA) Facility Guidelines",
    "description": "Stringent asset stewardship for clinical healthcare suites in Dubai Healthcare City (DHCC) and Jumeirah complying with DHA clinical infrastructure mandates.",
    "deliverables": [
      "Biomedical Waste Disposal Protocol Compliance",
      "Negative Pressure Cleanroom HVAC System Checks",
      "Lead-Lined X-Ray Room Radiation Safety Audits",
      "DHA Annual Facility Renewal Pre-Inspection Dossiers"
    ],
    "timeframe": "Annual Healthcare Mandate",
    "pricing": {
      "aed": 5.5,
      "billingType": "Annual % of Rent",
      "label": "5.5% of Annual Rent"
    },
    "propertyType": "Commercial Office",
    "popular": false
  },
  {
    "id": "com-005",
    "code": "NST-COM05",
    "title": "Commercial Business Center & Serviced Co-Working Floors",
    "category": "Commercial & Retail",
    "subCategory": "Flexible Office Spaces",
    "reraStandard": "DET Business Center Licensing Standards",
    "description": "Operational management of multi-suite executive business centers with shared boardroom, reception, and individual trade license sub-ejari issuance.",
    "deliverables": [
      "DET Sub-Ejari Multi-Desk Allocation System",
      "High-Speed Enterprise Bandwidth Telemetry & Firewall AMCs",
      "Automated Meeting Room Credit & Billing Logs",
      "Bilingual Executive Receptionist Supervision"
    ],
    "timeframe": "Annual Management Contract",
    "pricing": {
      "aed": 4.5,
      "billingType": "Annual % of Rent",
      "label": "4.5% of Gross Collections"
    },
    "propertyType": "Commercial Office",
    "popular": false
  },
  {
    "id": "com-006",
    "code": "NST-COM06",
    "title": "Automotive Showroom & Service Center Asset Stewardship",
    "category": "Commercial & Retail",
    "subCategory": "Automotive Commercial",
    "reraStandard": "RTA & Dubai Civil Defense Commercial Codes",
    "description": "Specialized facilities management for flagship automotive showrooms and workshops along Sheikh Zayed Road and Al Quoz.",
    "deliverables": [
      "Hydraulic Ramp & Pit Environmental Safety Certifications",
      "Oil-Water Separator Drainage Inspection AMCs",
      "Floor Coating Chemical Resistance & Heavy Load Audits",
      "High-Output LED Lighting & Solar Canopy Maintenance"
    ],
    "timeframe": "Annual Corporate Mandate",
    "pricing": {
      "aed": 4,
      "billingType": "Annual % of Rent",
      "label": "4% of Annual Lease"
    },
    "propertyType": "Retail Shop",
    "popular": false
  },
  {
    "id": "com-007",
    "code": "NST-COM07",
    "title": "Cloud Kitchen & Delivery Hub Facility Management",
    "category": "Commercial & Retail",
    "subCategory": "Cloud Kitchens",
    "reraStandard": "Dubai Municipality Foodwatch Standards",
    "description": "Management for commercial multi-brand delivery cloud kitchens in Al Barsha and Business Bay with continuous water, power, and gas redundancy.",
    "deliverables": [
      "Continuous Foodwatch Temperature Telemetry Audits",
      "Industrial Make-Up Air (MUA) HVAC Balancing",
      "Grease Interceptor Weekly Pumping Oversight",
      "Shared Rider Dispatch Bay Traffic Flow Coordination"
    ],
    "timeframe": "Annual Commercial Mandate",
    "pricing": {
      "aed": 5,
      "billingType": "Annual % of Rent",
      "label": "5% of Annual Lease"
    },
    "propertyType": "Retail Shop",
    "popular": false
  },
  {
    "id": "com-008",
    "code": "NST-COM08",
    "title": "Boutique Hotel & Branded Serviced Suites Operations",
    "category": "Commercial & Retail",
    "subCategory": "Hospitality Assets",
    "reraStandard": "Dubai DET 4-Star & 5-Star Hotel Classifications",
    "description": "Owner-side asset management for boutique hotel properties, auditing operator performance, FF&E reserve funds, and RevPAR revenue benchmarks.",
    "deliverables": [
      "Operator Performance vs HVS Benchmarking Audits",
      "FF&E Reserve Fund Drawdown Verifications",
      "Capital Expenditure (CapEx) Multi-Year Phasing Plans",
      "Third-Party Brand Franchise Agreement Compliance"
    ],
    "timeframe": "Annual Asset Management Retainer",
    "pricing": {
      "aed": 3,
      "billingType": "Annual % of Rent",
      "label": "3% of Gross Operating Profit"
    },
    "propertyType": "Full Building Portfolio",
    "popular": false
  },
  {
    "id": "com-009",
    "code": "NST-COM09",
    "title": "Private K-12 School & Nursery Campus Asset Care",
    "category": "Commercial & Retail",
    "subCategory": "Educational Infrastructure",
    "reraStandard": "KHDA & ADEK Educational Infrastructure Codes",
    "description": "Stewardship of private school campuses and early learning preschool buildings covering playground safety, swimming pool chlorination, and campus access control.",
    "deliverables": [
      "KHDA Campus Health & Safety Pre-Inspection Verification",
      "Playground Impact-Absorbing Flooring Safety Audits",
      "School Bus Staging & Traffic Marshalling Oversight",
      "Anti-Scald Thermostatic Water Valve Testing"
    ],
    "timeframe": "Annual Institutional Mandate",
    "pricing": {
      "aed": 3.5,
      "billingType": "Annual % of Rent",
      "label": "3.5% of Annual Lease Value"
    },
    "propertyType": "Full Building Portfolio",
    "popular": false
  },
  {
    "id": "com-010",
    "code": "NST-COM10",
    "title": "Data Center & Telecom Edge Facility Stewardship",
    "category": "Commercial & Retail",
    "subCategory": "Mission-Critical Tech",
    "reraStandard": "Uptime Institute Tier III Standards / TRA UAE",
    "description": "Mission-critical asset management for carrier-neutral server colocation facilities with N+1 power redundancy, precision cooling, and biometric perimeter access.",
    "deliverables": [
      "CRAC Precision Cooling Chilled Water Balance Audits",
      "Dual-Feed UPS Battery String Impedance Testing",
      "FM-200 / Novec 1230 Clean Agent Fire Suppression AMCs",
      "24/7 Security Airlock & Biometric Access Telemetry"
    ],
    "timeframe": "Annual Critical Mandate",
    "pricing": {
      "aed": 4.5,
      "billingType": "Annual % of Rent",
      "label": "4.5% of Base Lease"
    },
    "propertyType": "Commercial Office",
    "popular": false
  },
  {
    "id": "com-011",
    "code": "NST-COM11",
    "title": "Community Shopping Strip & Neighbourhood Retail Center",
    "category": "Commercial & Retail",
    "subCategory": "Neighborhood Retail",
    "reraStandard": "DLD Commercial Retail Community Guidelines",
    "description": "Asset management for community strip malls (10 to 30 retail shops) in Jumeirah, Mirdif, and Khalifa City including tenant mix curation and common area maintenance.",
    "deliverables": [
      "Tenant Mix Anchor vs Specialty Store Yield Modeling",
      "Common Area Maintenance (CAM) True-Up Calculations",
      "Surface & Basement Customer Parking Lot Management",
      "Promotional Event Space Permitting & Licensing"
    ],
    "timeframe": "Annual Institutional Mandate",
    "pricing": {
      "aed": 4,
      "billingType": "Annual % of Rent",
      "label": "4% of Gross Collections"
    },
    "propertyType": "Full Building Portfolio",
    "popular": true
  },
  {
    "id": "com-012",
    "code": "NST-COM12",
    "title": "Luxury Art Gallery & Haute Joaillerie Showroom Asset Care",
    "category": "Commercial & Retail",
    "subCategory": "Luxury High-Security Retail",
    "reraStandard": "SIRA High-Security Commercial Vault Regulations",
    "description": "Asset oversight for high-value jewelry boutiques and art galleries in DIFC Gate Village and Dubai Mall requiring SIRA-certified vaults and specialized lighting.",
    "deliverables": [
      "SIRA-Approved Vault & Panic Alarm Annual Certifications",
      "UV-Filtered Museum-Grade Glazing & Lighting Checks",
      "Climate & Relative Humidity Curation for Artwork Preservation",
      "Discrete VIP Security Escort & Rear Loading Protocol"
    ],
    "timeframe": "Annual Luxury Mandate",
    "pricing": {
      "aed": 6,
      "billingType": "Annual % of Rent",
      "label": "6% of Annual Lease"
    },
    "propertyType": "Retail Shop",
    "popular": false
  },
  {
    "id": "com-013",
    "code": "NST-COM13",
    "title": "Fitness Gym & Luxury Wellness Sanctuary Facility Care",
    "category": "Commercial & Retail",
    "subCategory": "Sports & Wellness",
    "reraStandard": "Dubai Sports Council & Municipality Standards",
    "description": "Management for boutique fitness centers, pilates studios, and day spas including acoustic vibration dampening, sauna/steam room safety, and heavy locker room plumbing.",
    "deliverables": [
      "Acoustic Deadening & Drop-Weight Floor Integrity Audits",
      "Sauna, Steam Room & Cold Plunge Thermal Sensor AMCs",
      "Legionella Water Testing in Commercial Shower Banks",
      "Fresh Air CFM Air-Exchange Ventilation Telemetry"
    ],
    "timeframe": "Annual Commercial Mandate",
    "pricing": {
      "aed": 5,
      "billingType": "Annual % of Rent",
      "label": "5% of Annual Lease"
    },
    "propertyType": "Commercial Office",
    "popular": false
  },
  {
    "id": "com-014",
    "code": "NST-COM14",
    "title": "Corporate Headquarters Standalone Commercial Building",
    "category": "Commercial & Retail",
    "subCategory": "Single-Tenant Corporate",
    "reraStandard": "DLD Corporate Real Estate Framework",
    "description": "Full institutional management for standalone corporate HQ buildings in Business Bay, Greens, and Masdar City under long-term single-tenant institutional triple-net leases.",
    "deliverables": [
      "Triple-Net (NNN) Lease Covenant Compliance Auditing",
      "Comprehensive Building Envelope Thermal Loss Scans",
      "Facade Cleaning Cradle & BMU Semi-Annual Certification",
      "Boardroom AV & Fiber Backbone Infrastructure Maintenance"
    ],
    "timeframe": "Annual Institutional Mandate",
    "pricing": {
      "aed": 3,
      "billingType": "Annual % of Rent",
      "label": "3% of Annual Rent"
    },
    "propertyType": "Full Building Portfolio",
    "popular": false
  },
  {
    "id": "com-015",
    "code": "NST-COM15",
    "title": "Commercial Kitchen & Central Bakery Production Facility",
    "category": "Commercial & Retail",
    "subCategory": "Food Manufacturing",
    "reraStandard": "HACCP & ISO 22000 Facility Requirements",
    "description": "Specialized management for industrial bakeries and food prep factories in DIP and Al Aweer with blast chiller electrical loads and grease drainage management.",
    "deliverables": [
      "Industrial Blast Chiller & Cold Room Temperature Logging",
      "Steam Boiler Pressure Vessel Civil Defense Inspections",
      "Central Chemical Sanitization Station Plumbing AMCs",
      "HACCP Structural Hygiene Pre-Audit Inspections"
    ],
    "timeframe": "Annual Commercial Mandate",
    "pricing": {
      "aed": 4.5,
      "billingType": "Annual % of Rent",
      "label": "4.5% of Annual Lease"
    },
    "propertyType": "Commercial Office",
    "popular": false
  },
  {
    "id": "com-016",
    "code": "NST-COM16",
    "title": "Film Production Studio & Soundstage Facility Care",
    "category": "Commercial & Retail",
    "subCategory": "Media & Entertainment",
    "reraStandard": "Dubai Media City (DMC) & DDA Standards",
    "description": "Asset stewardship for acoustically isolated soundstages and media studios in Dubai Studio City with high-tonnage silent HVAC and gantry truss safety inspections.",
    "deliverables": [
      "NC-20 Silent Air Conditioning Performance Audits",
      "Overhead Lighting Rigging & Gantry Load Certification",
      "Acoustic Soundproofing Seal Integrity Diagnostics",
      "High-Ampere Generator Direct Tie-In Protocol Checks"
    ],
    "timeframe": "Annual Media Mandate",
    "pricing": {
      "aed": 5,
      "billingType": "Annual % of Rent",
      "label": "5% of Annual Lease"
    },
    "propertyType": "Commercial Office",
    "popular": false
  },
  {
    "id": "com-017",
    "code": "NST-COM17",
    "title": "Commercial Bank Branch & Cash Center Security Care",
    "category": "Commercial & Retail",
    "subCategory": "Financial Institutions",
    "reraStandard": "UAE Central Bank & SIRA Bank Security Standards",
    "description": "Specialized facilities management for retail banking branches and ATM vestibules in Dubai and Abu Dhabi with anti-ram raid bollards and bullet-resistant glazing checks.",
    "deliverables": [
      "SIRA Grade-1 Safe Room & Armored Vault Inspections",
      "Anti-Ram Raid Kinetic Security Bollard Maintenance",
      "ATM Chilled Air & Redundant Power Line Monitoring",
      "Secure Armored Cash Transport Bay Logistics Audits"
    ],
    "timeframe": "Annual Banking Mandate",
    "pricing": {
      "aed": 5,
      "billingType": "Annual % of Rent",
      "label": "5% of Annual Lease"
    },
    "propertyType": "Retail Shop",
    "popular": false
  },
  {
    "id": "com-018",
    "code": "NST-COM18",
    "title": "Commercial Freezone Sub-Leasing & Dual-Licensing Compliance",
    "category": "Commercial & Retail",
    "subCategory": "Freezone Regulatory",
    "reraStandard": "DDA / JAFZA / DWC Dual Licensing Regulations",
    "description": "Regulatory and leasing administration enabling mainland UAE and Freezone entities to operate harmoniously under dual-license branch agreements.",
    "deliverables": [
      "Freezone Authority NOC & Mainland DED Approval Dossier",
      "Dual-Tenancy Demarcation Floor Plan Attestation",
      "Ejari & Freezone Lease Harmonization Agreement",
      "Annual Freezone Sub-Lease Renewal Filing"
    ],
    "timeframe": "Per Licensing Registration",
    "pricing": {
      "aed": 4500,
      "billingType": "Fixed Annual Fee",
      "label": "AED 4,500 Fixed Fee"
    },
    "propertyType": "Commercial Office",
    "popular": false
  },
  {
    "id": "com-019",
    "code": "NST-COM19",
    "title": "Commercial Parking Structure & Valet Operations Care",
    "category": "Commercial & Retail",
    "subCategory": "Parking Assets",
    "reraStandard": "RTA Commercial Parking Guidelines",
    "description": "Operations for multi-deck commercial parking structures in DIFC and Downtown with ANPR automated license plate recognition, ticketless payment, and epoxy flooring.",
    "deliverables": [
      "ANPR Smart Camera & Fast Barrier Gate AMCs",
      "Basement Carbon Monoxide (CO) Exhaust Fan Testing",
      "Heavy-Duty Epoxy Floor Crack & Anti-Skid Audits",
      "RTA Public Parking Signage & Tariff Compliance"
    ],
    "timeframe": "Annual Parking Mandate",
    "pricing": {
      "aed": 4,
      "billingType": "Annual % of Rent",
      "label": "4% of Net Parking Revenue"
    },
    "propertyType": "Full Building Portfolio",
    "popular": false
  },
  {
    "id": "com-020",
    "code": "NST-COM20",
    "title": "Commercial Rooftop & Billboard Advertising Asset Care",
    "category": "Commercial & Retail",
    "subCategory": "Out-Of-Home Media",
    "reraStandard": "Dubai Municipality Outdoor Advertising By-Law",
    "description": "Monetization and structural maintenance for commercial building rooftops and highway facade LED advertising unipoles along Sheikh Zayed Road.",
    "deliverables": [
      "Structural Wind-Load Steel Truss Stress Testing",
      "Dubai Municipality Ad Permit & Fee Clearing",
      "High-Output LED Video Panel Power Surge Protection",
      "Dedicated Electric Sub-Meter Consumption True-Up"
    ],
    "timeframe": "Annual Ad Revenue Mandate",
    "pricing": {
      "aed": 7.5,
      "billingType": "Annual % of Rent",
      "label": "7.5% of Ad Revenue"
    },
    "propertyType": "Commercial Office",
    "popular": false
  },
  {
    "id": "com-021",
    "code": "NST-COM21",
    "title": "Veterinary Hospital & Pet Care Commercial Facility Care",
    "category": "Commercial & Retail",
    "subCategory": "Animal Healthcare",
    "reraStandard": "Ministry of Climate Change & Environment (MOCCAE)",
    "description": "Management for commercial veterinary clinics and animal boarding facilities with specialized acoustic sound isolation, surgical suites, and animal waste systems.",
    "deliverables": [
      "Surgical Autoclave & Medical Gas Line Inspections",
      "Kennel Acoustic Sound Barrier Integrity Audits",
      "Specialized Biological Drain Enzyme Treatment AMCs",
      "MOCCAE Animal Welfare Facility Standard Compliance"
    ],
    "timeframe": "Annual Healthcare Mandate",
    "pricing": {
      "aed": 5,
      "billingType": "Annual % of Rent",
      "label": "5% of Annual Lease"
    },
    "propertyType": "Commercial Office",
    "popular": false
  },
  {
    "id": "com-022",
    "code": "NST-COM22",
    "title": "Commercial Co-Working Kitchen & Ghost Food Hall",
    "category": "Commercial & Retail",
    "subCategory": "Ghost Kitchens",
    "reraStandard": "Dubai Municipality Health Regulations",
    "description": "High-density multi-tenant kitchen hub management covering shared dishwashing plants, grease filtration centrifuges, and continuous fire-suppression telemetry.",
    "deliverables": [
      "Automated Wet Chemical Ansul R-102 Fire System Checks",
      "Commercial Pot-Washer Water Softener Salt Level AMCs",
      "Individual Kitchen Exhaust Air Balancing Certifications",
      "Shared Delivery Courier Traffic Flow Management"
    ],
    "timeframe": "Annual Commercial Mandate",
    "pricing": {
      "aed": 5,
      "billingType": "Annual % of Rent",
      "label": "5% of Gross Billing"
    },
    "propertyType": "Retail Shop",
    "popular": false
  },
  {
    "id": "com-023",
    "code": "NST-COM23",
    "title": "Pharma Cold-Storage & Vaccine Warehouse Stewardship",
    "category": "Commercial & Retail",
    "subCategory": "Pharma Logistics",
    "reraStandard": "Ministry of Health & Prevention (MOHAP) GDP Rules",
    "description": "Good Distribution Practice (GDP) compliant management for pharmaceutical warehouses in Dubai South with calibrated 2°C to 8°C cold rooms and SMS alert systems.",
    "deliverables": [
      "NIST-Traceable Calibrated Temperature Sensor Validation",
      "Dual Redundant Refrigeration Auto-Failover Testing",
      "Emergency Diesel Generator Automated Transfer Switch AMCs",
      "MOHAP Annual Warehouse Audit Pre-Clearance Dossiers"
    ],
    "timeframe": "Annual Pharma Mandate",
    "pricing": {
      "aed": 4.5,
      "billingType": "Annual % of Rent",
      "label": "4.5% of Base Lease"
    },
    "propertyType": "Commercial Office",
    "popular": false
  },
  {
    "id": "com-024",
    "code": "NST-COM24",
    "title": "Marina Promenade Retail Kiosk & Pop-Up Asset Care",
    "category": "Commercial & Retail",
    "subCategory": "Retail Kiosks",
    "reraStandard": "Dubai Maritime City Authority & DLD Guidelines",
    "description": "Management for waterfront modular retail kiosks and seasonal luxury pop-up structures along Dubai Marina and Palm Jumeirah West Beach boardwalks.",
    "deliverables": [
      "Modular Quick-Connect Water & Power Line Inspections",
      "Weatherproof Marine-Grade Exterior Casing Maintenance",
      "Nightly Security Shutter & Lockout Verification",
      "Seasonal Master Community Pop-Up License Filing"
    ],
    "timeframe": "Seasonal or Annual Mandate",
    "pricing": {
      "aed": 6,
      "billingType": "Annual % of Rent",
      "label": "6% of Turnover Rent"
    },
    "propertyType": "Retail Shop",
    "popular": false
  },
  {
    "id": "com-025",
    "code": "NST-COM25",
    "title": "Commercial Building Chiller Plant Sub-Metering Optimization",
    "category": "Commercial & Retail",
    "subCategory": "Energy Management",
    "reraStandard": "Dubai Supreme Council of Energy Directives",
    "description": "Tenant sub-metering reconciliation for commercial office towers with chilled water BTU meters, recovering accurate cooling costs and optimizing central chillers.",
    "deliverables": [
      "Ultrasonic BTU Chilled Water Meter Accuracy Calibration",
      "Automated Monthly Tenant Chiller Consumption Invoicing",
      "Empower / Tabreed District Cooling Bill True-Up Analysis",
      "Chiller Delta-T Optimization & Efficiency Recommendations"
    ],
    "timeframe": "Annual Energy Mandate",
    "pricing": {
      "aed": 3500,
      "billingType": "Fixed Annual Fee",
      "label": "AED 3,500/mo Retainer"
    },
    "propertyType": "Full Building Portfolio",
    "popular": false
  },
  {
    "id": "com-026",
    "code": "NST-COM26",
    "title": "Commercial Tenancy Fit-Out Demolition & Re-Instatement",
    "category": "Commercial & Retail",
    "subCategory": "Commercial Reinstatement",
    "reraStandard": "DLD Commercial Lease Handover Standards",
    "description": "Management of end-of-lease dilapidation works, dismantling partitioned office walls, restoring ceilings to open-plan, and reclaiming tenant security deposits.",
    "deliverables": [
      "Comprehensive Move-Out Dilapidation Report & Cost Matrix",
      "Civil Defense Approved Contractor Demolition Supervision",
      "Sprinkler & Smoke Detector Grid Re-Alignment to Base Build",
      "Final Landlord Sign-Off & Security Deposit Release Voucher"
    ],
    "timeframe": "Per Demolition Project",
    "pricing": {
      "aed": 8500,
      "billingType": "Per Incident",
      "label": "Starting from AED 8,500"
    },
    "propertyType": "Commercial Office",
    "popular": false
  },
  {
    "id": "com-027",
    "code": "NST-COM27",
    "title": "Commercial Roof Solar PV Lease & PPA Stewardship",
    "category": "Commercial & Retail",
    "subCategory": "Renewable Commercial",
    "reraStandard": "DEWA Shams Dubai Framework",
    "description": "Administration of Power Purchase Agreements (PPAs) and solar lease contracts on commercial warehouse rooftops with automated green energy credit invoicing.",
    "deliverables": [
      "Solar Generation vs Grid Export Reconciliation Statements",
      "DEWA Shams Dubai Tariff Credit Verification",
      "Solar Panel Cleaning Drone & Robotic AMC Supervision",
      "Tenant Green Energy Consumption Billing Allocation"
    ],
    "timeframe": "Annual PPA Administration",
    "pricing": {
      "aed": 1500,
      "billingType": "Fixed Annual Fee",
      "label": "AED 1,500/mo Retainer"
    },
    "propertyType": "Commercial Office",
    "popular": false
  },
  {
    "id": "com-028",
    "code": "NST-COM28",
    "title": "Full Commercial Tower Facilities & Tenancy Master Mandate",
    "category": "Commercial & Retail",
    "subCategory": "Commercial Towers",
    "reraStandard": "RERA Jointly Owned Property Law & DLD Grade-A",
    "description": "Institutional master asset and property management for entire Grade-A commercial office towers (15 to 50 floors) across Dubai and Abu Dhabi financial districts.",
    "deliverables": [
      "Full-Time On-Site Property Manager & Engineering Team",
      "High-Rise Elevator Destination Control Optimization",
      "Unified Mollak / DMT Service Charge Budget Formulation",
      "Quarterly Institutional Investor Dividend & CapEx Meetings"
    ],
    "timeframe": "Annual Institutional Mandate",
    "pricing": {
      "aed": 3.25,
      "billingType": "Annual % of Rent",
      "label": "3.25% of Gross Collections"
    },
    "propertyType": "Full Building Portfolio",
    "popular": true
  },
  {
    "id": "leg-001",
    "code": "NST-LEG01",
    "title": "Official RERA Ejari Registration & Contract Formulation",
    "category": "RERA & Legal Compliance",
    "subCategory": "Statutory Registration",
    "reraStandard": "Dubai Law No. 26/2007 & Law No. 33/2008",
    "description": "Instant formulation of unified RERA tenancy agreements and government attestation through Dubai REST & Ejari portal with official QR-coded certificates.",
    "deliverables": [
      "Unified RERA Tenancy Contract with Custom Landlord Protection Clauses",
      "Instant DLD Ejari Certificate Generation with QR Code",
      "DEWA Premise Number Automatic Linkage",
      "Electronic Signature Handling via UAE Pass"
    ],
    "timeframe": "24-Hour Express Turnaround",
    "pricing": {
      "aed": 350,
      "billingType": "Per Incident",
      "label": "AED 350 / Registration"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "leg-002",
    "code": "NST-LEG02",
    "title": "RERA Decree No. 43/2013 Rent Increase 90-Day Formal Notice",
    "category": "RERA & Legal Compliance",
    "subCategory": "Rent Increase Legal Notices",
    "reraStandard": "Dubai Decree No. 43 of 2013 on Rental Increases",
    "description": "Legally binding drafting and formal notary public / registered delivery of rent increase notices calculated against the official RERA Rental Calculator exactly 90 days before renewal.",
    "deliverables": [
      "Official RERA Rental Index Calculation & Screenshot Evidence Dossier",
      "Bilingual English/Arabic 90-Day Statutory Notice Drafting",
      "Proof of Registered Mail / Courier / Notary Service for Court Admissibility",
      "Tenant Negotiation & Revised Ejari Tenancy Execution"
    ],
    "timeframe": "3 Business Days Pre-Notice",
    "pricing": {
      "aed": 450,
      "billingType": "Per Incident",
      "label": "AED 450 / Notice"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "leg-003",
    "code": "NST-LEG03",
    "title": "12-Month Notarized Eviction Notice Service (Law No. 33/2008)",
    "category": "RERA & Legal Compliance",
    "subCategory": "Eviction Legal Notices",
    "reraStandard": "Dubai Law No. 33 of 2008 Article 25",
    "description": "Full legal execution of 12-month eviction notices via Dubai Courts Notary Public for reasons of personal use, sale of property, or extensive demolition/renovation.",
    "deliverables": [
      "Statutory Eviction Grounds Assessment & Verification",
      "Dubai Courts Notary Public Bilingual Drafting & Submission",
      "Official Aramex / Emirates Post Court Process Service Confirmation",
      "12-Month Timeline Tracking & Renewal Bar Notification to DLD"
    ],
    "timeframe": "5 Business Days for Court Notarization",
    "pricing": {
      "aed": 1800,
      "billingType": "Per Incident",
      "label": "AED 1,800 + Court Fees"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "leg-004",
    "code": "NST-LEG04",
    "title": "Rental Dispute Center (RDC) Case Filing & Dispute Settlement",
    "category": "RERA & Legal Compliance",
    "subCategory": "Judicial Representation",
    "reraStandard": "Dubai Rental Dispute Center (RDC) Law No. 26/2013",
    "description": "Preparation of case files, statement of claim, and representation through accredited legal partners at the RDC for rent defaults, bounced cheques, and unauthorized modifications.",
    "deliverables": [
      "Comprehensive Evidence Chronology & Account Ledger Formulation",
      "Arabic Statement of Claim Translation & Case Registration",
      "First-Instance & Appellate Hearing Strategy Documentation",
      "Enforcement Order Execution for Asset Freeze / Eviction Writ"
    ],
    "timeframe": "Full RDC Case Lifecycle",
    "pricing": {
      "aed": 3500,
      "billingType": "Per Incident",
      "label": "AED 3,500 Base + Judicial Fees"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "leg-005",
    "code": "NST-LEG05",
    "title": "Abu Dhabi DMT Tawtheeq Registration & Attestation",
    "category": "RERA & Legal Compliance",
    "subCategory": "Abu Dhabi Statutory",
    "reraStandard": "Abu Dhabi Law No. 20 of 2006 & DMT Directives",
    "description": "Complete registration and municipal attestation of residential and commercial lease contracts in Abu Dhabi through the Department of Municipalities and Transport (DMT) Tawtheeq system.",
    "deliverables": [
      "DMT Tawtheeq Municipal Attestation Certificate",
      "ADDC Electricity & Water Direct Profile Binding",
      "Aldar / Saadiyat Island Master Community Move-In Authorization",
      "Annual Automated Tawtheeq Renewal Triggering"
    ],
    "timeframe": "24-48 Hour Turnaround",
    "pricing": {
      "aed": 350,
      "billingType": "Per Incident",
      "label": "AED 350 / Contract"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "leg-006",
    "code": "NST-LEG06",
    "title": "Bounced Rent Cheque Execution Order Service (UAE Commercial Law)",
    "category": "RERA & Legal Compliance",
    "subCategory": "Cheque Recovery",
    "reraStandard": "Federal Decree-Law No. 14 of 2020 on Commercial Transactions",
    "description": "Direct civil execution through UAE Courts for bounced rental cheques as an executive writ without waiting for a lengthy trial, obtaining bank account attachment within 14 days.",
    "deliverables": [
      "Bank Cheque Return Memo Analysis & Legal Qualification",
      "Direct UAE Courts Executive Judge Writ Petition Formulation",
      "Central Bank Account Freeze & Travel Ban Application Support",
      "Immediate Settlement Negotiation Desk with Defaulting Tenant"
    ],
    "timeframe": "7-14 Days Civil Execution",
    "pricing": {
      "aed": 2200,
      "billingType": "Per Incident",
      "label": "AED 2,200 + Filing Fees"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "leg-007",
    "code": "NST-LEG07",
    "title": "DLD Title Deed Endorsement & Dubai REST Profile Sync",
    "category": "RERA & Legal Compliance",
    "subCategory": "Ownership Title Services",
    "reraStandard": "Dubai Land Department Ownership Registry",
    "description": "Resolution of title deed mismatches, updating owner passport/Emirates ID details, electronic title deed generation, and full integration into the Dubai REST application.",
    "deliverables": [
      "Electronic Title Deed (E-Title Deed) Generation & QR Verification",
      "Dubai REST Smart Wallet Property Binding",
      "Owner Contact & KYC Profile Update with DLD Registry",
      "Mortgage Discharge & Charge Removal Endorsement"
    ],
    "timeframe": "2-3 Business Days",
    "pricing": {
      "aed": 750,
      "billingType": "Per Incident",
      "label": "AED 750 / Property"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "leg-008",
    "code": "NST-LEG08",
    "title": "UAE Power of Attorney (POA) Property Management Registration",
    "category": "RERA & Legal Compliance",
    "subCategory": "Legal Representation",
    "reraStandard": "Dubai Courts Notary Public & UAE Ministry of Justice",
    "description": "Drafting, legal translation, and registration of specialized property management Powers of Attorney allowing overseas landlords to delegate full management authority.",
    "deliverables": [
      "Bilingual Property Management Specific POA Text Formulation",
      "Dubai Courts E-Notary Remote Video Attestation Coordination",
      "Ministry of Foreign Affairs (MOFA) Apostille Coordination for Overseas POA",
      "DLD Property Registry Authorized Agent Profile Binding"
    ],
    "timeframe": "3 Business Days (Digital via UAE Pass)",
    "pricing": {
      "aed": 1500,
      "billingType": "Per Incident",
      "label": "AED 1,500 + Notary Fees"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "leg-009",
    "code": "NST-LEG09",
    "title": "RERA Mollak Service Charge Audit & Dispute Filing",
    "category": "RERA & Legal Compliance",
    "subCategory": "Service Charge Compliance",
    "reraStandard": "Dubai Law No. 6 of 2019 on Jointly Owned Property",
    "description": "Audit of developer and Owners Association service charge invoices against the official RERA approved Mollak rate to eliminate unauthorized fees.",
    "deliverables": [
      "RERA Mollak Approved Budget & Unit Invoice Comparison Matrix",
      "Identification of Unauthorized Chiller / Sinking Fund Add-ons",
      "Formal RERA Mollak Compliance Dispute Formulation",
      "Overpayment Credit Recovery from Owners Association Management"
    ],
    "timeframe": "5 Business Days",
    "pricing": {
      "aed": 950,
      "billingType": "Per Incident",
      "label": "AED 950 / Audit"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "leg-010",
    "code": "NST-LEG10",
    "title": "Tenant Bankruptcy & Company Liquidation Rent Recovery",
    "category": "RERA & Legal Compliance",
    "subCategory": "Insolvency Recovery",
    "reraStandard": "Federal Decree-Law No. 9 of 2016 on Bankruptcy",
    "description": "Filing landlord priority creditor claims with appointed liquidators and bankruptcy trustees when commercial tenants declare insolvency or dissolve trade licenses.",
    "deliverables": [
      "Landlord Secured Creditor Proof of Debt Dossier Compilation",
      "Formal Claim Registration with UAE Bankruptcy Court Trustee",
      "Expedited Repossession Writ for Vacating Premises",
      "Forfeited Fit-Out Asset Auction Proceeds Recovery Support"
    ],
    "timeframe": "Duration of Insolvency Proceedings",
    "pricing": {
      "aed": 4500,
      "billingType": "Per Incident",
      "label": "AED 4,500 Base Fee"
    },
    "propertyType": "Commercial Office",
    "popular": false
  },
  {
    "id": "leg-011",
    "code": "NST-LEG11",
    "title": "Unauthorized Alteration & Structural Breach Legal Notice",
    "category": "RERA & Legal Compliance",
    "subCategory": "Covenant Enforcement",
    "reraStandard": "Dubai Law No. 26/2007 Article 19",
    "description": "Immediate formal notice and legal stop-work injunction against tenants conducting unauthorized structural demolition, interior partitioning, or civil work without DLD/Developer NOC.",
    "deliverables": [
      "Engineering Photographic Breach Inspection Dossier",
      "Bilingual 30-Day Rectification Legal Notice Drafting",
      "DLD Building Inspection Section Escalation",
      "Security Deposit Forfeiture & Reinstatement Claim Formulation"
    ],
    "timeframe": "24-Hour Emergency Delivery",
    "pricing": {
      "aed": 850,
      "billingType": "Per Incident",
      "label": "AED 850 / Notice"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "leg-012",
    "code": "NST-LEG12",
    "title": "Sub-Lease & Partition Wall Detection Municipal Enforcement",
    "category": "RERA & Legal Compliance",
    "subCategory": "Illegal Partitioning",
    "reraStandard": "Dubai Municipality Order No. 3/1999 & DLD Guidelines",
    "description": "Coordinated action with Dubai Municipality and RERA building inspectors to raid and dismantle illegal internal room partitioning, bunk beds, and overcrowded subletting.",
    "deliverables": [
      "Municipal Inspector Joint Property Raid Coordination",
      "Official Municipality Eviction Order & Fining Protocol Support",
      "Demolition & Disposal of Gypsum Partitions by Licensed Contractor",
      "Immediate Re-Keying & Single-Family Tenancy Re-establishment"
    ],
    "timeframe": "3 to 7 Days Action",
    "pricing": {
      "aed": 1500,
      "billingType": "Per Incident",
      "label": "AED 1,500 Base Enforcement"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "leg-013",
    "code": "NST-LEG13",
    "title": "Abandonment & Unreachable Tenant Lockout Legal Process",
    "category": "RERA & Legal Compliance",
    "subCategory": "Property Abandonment",
    "reraStandard": "Dubai Rental Dispute Center Abandonment Procedures",
    "description": "Legal petition to RDC for official site inspection, inventory of left-behind belongings, and legal handover of properties abandoned by absconded tenants.",
    "deliverables": [
      "Utility Disconnection & Non-Payment Evidence File",
      "RDC Urgent Matters Judge Site Inspection Petition",
      "Court Bailiff Inventory & Storage of Abandoned Goods",
      "Legal Lockout Re-Keying & Right to Re-Lease Issuance"
    ],
    "timeframe": "14 to 21 Days Judgement",
    "pricing": {
      "aed": 3200,
      "billingType": "Per Incident",
      "label": "AED 3,200 + Court Fees"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "leg-014",
    "code": "NST-LEG14",
    "title": "Corporate Tenancy Guarantee & Parent Company Surety Drafting",
    "category": "RERA & Legal Compliance",
    "subCategory": "Corporate Guarantees",
    "reraStandard": "UAE Civil Transactions Law Federal Law No. 5/1985",
    "description": "Drafting enforceable unconditional corporate guarantee deeds and cross-indemnities binding foreign parent entities for high-value commercial and executive leases.",
    "deliverables": [
      "Unconditional Joint and Several Corporate Guarantee Contract",
      "Board Resolution of Parent Entity Authorization Verification",
      "Direct Bank Execution Clause Alignment with UAE Law",
      "Cross-Border Jurisdiction & Enforcement Mechanism Formulation"
    ],
    "timeframe": "2 Business Days",
    "pricing": {
      "aed": 1800,
      "billingType": "Per Incident",
      "label": "AED 1,800 / Agreement"
    },
    "propertyType": "Commercial Office",
    "popular": false
  },
  {
    "id": "leg-015",
    "code": "NST-LEG15",
    "title": "Jointly Owned Property (JOP) Owners Committee Representation",
    "category": "RERA & Legal Compliance",
    "subCategory": "Owners Committee",
    "reraStandard": "Dubai Law No. 6 of 2019 on Jointly Owned Property",
    "description": "Representing absentee and institutional landlords at mandatory annual general meetings (AGM) and Owners Committees to scrutinize service budgets and OA management.",
    "deliverables": [
      "Formal Landlord Voting Proxy Drafting & DLD Submission",
      "Independent Audit of Proposed Annual Maintenance Budget",
      "Active Scrutiny of Common Area Sinking Fund Allocations",
      "Written Executive Summary & Voting Outcome Dossier"
    ],
    "timeframe": "Per AGM Session & Proxy Filing",
    "pricing": {
      "aed": 1200,
      "billingType": "Per Incident",
      "label": "AED 1,200 / AGM Session"
    },
    "propertyType": "Full Building Portfolio",
    "popular": false
  },
  {
    "id": "leg-016",
    "code": "NST-LEG16",
    "title": "Holiday Home Short-Term Sub-Leasing Landlord Consent Deed",
    "category": "RERA & Legal Compliance",
    "subCategory": "Short-Term Licensing Consent",
    "reraStandard": "Dubai DET Executive Resolution No. 49 of 2014",
    "description": "Drafting strictly bounded NOCs permitting tenants or management operators to list properties on Airbnb with explicit indemnities against fines and HOA violations.",
    "deliverables": [
      "DET Permit Conditioned Landlord Consent Agreement",
      "Strict Party & Noise Violation Indemnity Clauses",
      "Compulsory AED 2,000,000 Third-Party Liability Insurance Mandate",
      "Right of Immediate Revocation for Community Rule Breaches"
    ],
    "timeframe": "24 Hours",
    "pricing": {
      "aed": 650,
      "billingType": "Per Incident",
      "label": "AED 650 / Consent Deed"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "leg-017",
    "code": "NST-LEG17",
    "title": "Security Deposit Escrow Dispute Conciliation & Settlement",
    "category": "RERA & Legal Compliance",
    "subCategory": "Deposit Disputes",
    "reraStandard": "Dubai Law No. 26/2007 Article 20",
    "description": "Impartial third-party assessment of move-out dilapidations, itemized contractor quotes, and binding deposit deduction settlement without reaching court.",
    "deliverables": [
      "Move-In vs Move-Out Check-In Photographic Comparison Matrix",
      "Independent Cost Estimate for Tenant-Caused Damage",
      "Binding Bilingual Deposit Settlement Agreement",
      "Direct Escrow Refund & Contractor Payment Execution"
    ],
    "timeframe": "3 Business Days",
    "pricing": {
      "aed": 500,
      "billingType": "Per Incident",
      "label": "AED 500 / Conciliation"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "leg-018",
    "code": "NST-LEG18",
    "title": "Civil Defense & Fire Safety Legal Compliance Audit",
    "category": "RERA & Legal Compliance",
    "subCategory": "Life Safety Compliance",
    "reraStandard": "UAE Fire & Life Safety Code of Practice",
    "description": "Comprehensive legal audit ensuring commercial and multi-unit residential properties possess valid Civil Defense certificates, AMC contracts, and Hassantuk telemetry.",
    "deliverables": [
      "Civil Defense Annual Maintenance Contract (AMC) Audit",
      "Hassantuk 24/7 Fire Alarm System Connectivity Verification",
      "Emergency Exit Signage & Clear Pathway Inspection",
      "Landlord Civil Defense Liability Shield Certification"
    ],
    "timeframe": "5 Business Days",
    "pricing": {
      "aed": 2500,
      "billingType": "Fixed Annual Fee",
      "label": "AED 2,500 / Property"
    },
    "propertyType": "Full Building Portfolio",
    "popular": false
  },
  {
    "id": "leg-019",
    "code": "NST-LEG19",
    "title": "DLD Green Building Regulations (Al Sa'fat) Compliance Filing",
    "category": "RERA & Legal Compliance",
    "subCategory": "Environmental Regulatory",
    "reraStandard": "Dubai Green Building Regulations (Al Sa'fat)",
    "description": "Audit and formal certification of residential and commercial properties meeting Dubai mandatory energy conservation, water reduction, and indoor air quality standards.",
    "deliverables": [
      "Al Sa'fat Silver/Gold Requirement Matrix Verification",
      "HVAC Energy Efficiency Ratio (EER) Inspection",
      "Low-Flow Sanitary Fixture Water Consumption Audit",
      "Dubai Municipality Green Compliance Dossier Submission"
    ],
    "timeframe": "7 Business Days",
    "pricing": {
      "aed": 3000,
      "billingType": "Fixed Annual Fee",
      "label": "AED 3,000 / Audit"
    },
    "propertyType": "Commercial Office",
    "popular": false
  },
  {
    "id": "leg-020",
    "code": "NST-LEG20",
    "title": "Sharjah Tasdeeq Tenancy Attestation & Dispute Service",
    "category": "RERA & Legal Compliance",
    "subCategory": "Sharjah Legal",
    "reraStandard": "Sharjah Tenancy Law No. 2 of 2007",
    "description": "Full-service municipal contract attestation (Tasdeeq) and representation at Sharjah Rental Dispute Committee in Al Majaz for properties located in Sharjah emirate.",
    "deliverables": [
      "Sharjah Municipality Tasdeeq Attestation Certificate",
      "SEWA Utility Account Binding Verification",
      "Sharjah 3-Year Rent Freeze Rule Compliance Audit",
      "Sharjah Rental Dispute Committee Statement of Claim Drafting"
    ],
    "timeframe": "2 Business Days",
    "pricing": {
      "aed": 400,
      "billingType": "Per Incident",
      "label": "AED 400 / Contract"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "leg-021",
    "code": "NST-LEG21",
    "title": "Ajman & Ras Al Khaimah Municipality Lease Attestation",
    "category": "RERA & Legal Compliance",
    "subCategory": "Northern Emirates Legal",
    "reraStandard": "Ajman Decree No. 2/2017 & RAK Municipality Law",
    "description": "Municipal lease attestation and dispute mediation services for properties in Ajman Corniche, Al Nuaimiya, and RAK Al Hamra / Al Marjan Island.",
    "deliverables": [
      "Ajman Tasdeeq / RAK Municipality Attestation Registration",
      "FEWA / Etihad Water & Electricity Account Linking",
      "Standardized Municipality Lease Agreement Formatting",
      "Local Dispute Settlement Resolution Liaison"
    ],
    "timeframe": "2-3 Business Days",
    "pricing": {
      "aed": 350,
      "billingType": "Per Incident",
      "label": "AED 350 / Contract"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "leg-022",
    "code": "NST-LEG22",
    "title": "Commercial Lease Assignment & Key Money Legal Protocol",
    "category": "RERA & Legal Compliance",
    "subCategory": "Commercial Assignment",
    "reraStandard": "Dubai Commercial Tenancy Guidelines",
    "description": "Drafting tripartite assignment deeds transferring existing commercial leases and fit-outs between outgoing and incoming commercial operators with landlord consent.",
    "deliverables": [
      "Tripartite Landlord-Assignor-Assignee Legal Deed",
      "Assignee Financial Worthiness & AECB Credit Verification",
      "Security Deposit Transfer & Replacement Cheque Settlement",
      "Revised Ejari Issuance in Incoming Business Entity Name"
    ],
    "timeframe": "3-5 Business Days",
    "pricing": {
      "aed": 2500,
      "billingType": "Per Incident",
      "label": "AED 2,500 / Assignment"
    },
    "propertyType": "Retail Shop",
    "popular": false
  },
  {
    "id": "leg-023",
    "code": "NST-LEG23",
    "title": "Mortgage Non-Objection Certificate (NOC) Property Lease Clearance",
    "category": "RERA & Legal Compliance",
    "subCategory": "Banking Compliance",
    "reraStandard": "UAE Central Bank Banking & Property Regulations",
    "description": "Securing mandatory formal non-objection certificates from financing UAE banks allowing landlords to lease mortgaged properties without covenant breaches.",
    "deliverables": [
      "Bank Mortgage Agreement Lease Clause Audit",
      "Official Bank Mortgagee NOC Application Compilation",
      "Rent Direct Deposit Account Alignment with Bank Escrow",
      "DLD Title Deed Mortgage Note Compliance Verification"
    ],
    "timeframe": "3 Business Days",
    "pricing": {
      "aed": 750,
      "billingType": "Per Incident",
      "label": "AED 750 / Property"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "leg-024",
    "code": "NST-LEG24",
    "title": "DLD Rental Index Rent Harmonization Strategy Audit",
    "category": "RERA & Legal Compliance",
    "subCategory": "Rental Index Optimization",
    "reraStandard": "Official RERA Smart Rental Index 2026 Updates",
    "description": "Comprehensive benchmarking analysis comparing existing portfolio rental rates against the latest building-by-building updated RERA Smart Rental Index.",
    "deliverables": [
      "Building-Specific Official RERA Smart Index Data Extraction",
      "Tenant-by-Tenant Maximum Allowable Increase Matrix",
      "90-Day Renewal Schedule & Automated Notice Dispatch Plan",
      "Portfolio Gross Yield Revenue Upside Modeling Report"
    ],
    "timeframe": "3 Business Days",
    "pricing": {
      "aed": 1500,
      "billingType": "Fixed Annual Fee",
      "label": "AED 1,500 / Portfolio"
    },
    "propertyType": "Full Building Portfolio",
    "popular": false
  },
  {
    "id": "leg-025",
    "code": "NST-LEG25",
    "title": "Master Community Rules & HOA Penalty Defense Liaison",
    "category": "RERA & Legal Compliance",
    "subCategory": "HOA Legal Defense",
    "reraStandard": "Emaar / Nakheel / Damac Master Community Declarations",
    "description": "Defending landlords against unjustified fines and notices issued by master community managers regarding landscaping, exterior modifications, or guest parking.",
    "deliverables": [
      "Master Community Declaration Covenant Review",
      "Photographic & Factual Appeal Dossier Preparation",
      "Direct Representation at Community Management Hearings",
      "Fine Waiver or Reduction Negotiation and Clearing"
    ],
    "timeframe": "2 Business Days",
    "pricing": {
      "aed": 650,
      "billingType": "Per Incident",
      "label": "AED 650 / Appeal"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "leg-026",
    "code": "NST-LEG26",
    "title": "Cross-Border Real Estate Estate Planning & DIFC Will Binding",
    "category": "RERA & Legal Compliance",
    "subCategory": "Inheritance & Succession",
    "reraStandard": "DIFC Wills Service Centre Rules & UAE Civil Code",
    "description": "Coordination with certified legal practitioners to register property-specific DIFC Wills ensuring non-Muslim property inheritance follows testator wishes without Sharia freeze.",
    "deliverables": [
      "Property Title Deed Portfolio Schedule Compilation for DIFC Will",
      "DIFC Wills Registry Appointment & Video Attestation Support",
      "DLD Succession Clause Alignment Review",
      "Heir Succession Smooth Handover Protocol Documentation"
    ],
    "timeframe": "5 Business Days",
    "pricing": {
      "aed": 3000,
      "billingType": "Fixed Annual Fee",
      "label": "AED 3,000 Base Coordination"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "leg-027",
    "code": "NST-LEG27",
    "title": "Landlord Legal Insurance & Rent Default Protection Policy",
    "category": "RERA & Legal Compliance",
    "subCategory": "Insurance Risk Management",
    "reraStandard": "UAE Insurance Authority Real Estate Coverage",
    "description": "Structuring comprehensive landlord insurance coverage safeguarding against tenant non-payment, malicious structural damage, legal defence fees, and loss of rent.",
    "deliverables": [
      "Up to AED 100,000 Rent Default Guarantee Policy Sourcing",
      "AED 50,000 Malicious Damage & Vandalism Coverage",
      "AED 25,000 RDC Legal Defense Fee Indemnity",
      "Expedited Insurance Claim Management Desk"
    ],
    "timeframe": "Annual Policy Underwriting",
    "pricing": {
      "aed": 850,
      "billingType": "Fixed Annual Fee",
      "label": "AED 850 / Year Policy"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "leg-028",
    "code": "NST-LEG28",
    "title": "Full-Scope Annual Landlord Legal & RERA Retainer Mandate",
    "category": "RERA & Legal Compliance",
    "subCategory": "Annual Legal Retainer",
    "reraStandard": "Comprehensive UAE Real Estate Statutory Framework",
    "description": "All-inclusive annual legal support covering unlimited Ejari registrations, 90-day notices, tenancy drafting, RDC conciliation, and continuous regulatory advisory.",
    "deliverables": [
      "Unlimited Ejari Registrations & Contract Drafts",
      "Guaranteed 24-Hour Legal Notice Formulation",
      "Priority Rental Dispute Center Mediation Handling",
      "Quarterly UAE Property Law Update Briefings"
    ],
    "timeframe": "Annual Dedicated Retainer",
    "pricing": {
      "aed": 4800,
      "billingType": "Fixed Annual Fee",
      "label": "AED 4,800 / Year"
    },
    "propertyType": "Full Building Portfolio",
    "popular": true
  },
  {
    "id": "amc-001",
    "code": "NST-AMC01",
    "title": "Comprehensive Annual HVAC & Chiller AMC (Apartments)",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "HVAC Maintenance",
    "reraStandard": "ASHRAE & UAE Climate Engineering Standards",
    "description": "Year-round preventive maintenance for ducted split, VRF, and chilled water fan coil units (FCU) including quarterly deep coil cleaning, filter change, thermostat calibration, and gas recharge.",
    "deliverables": [
      "Quarterly Evaporator & Condenser Coil Deep Sanitization",
      "Thermostat Micro-Calibration & PCB Sensor Diagnostics",
      "Refrigerant R410A / R32 Pressure Level Verification",
      "Guaranteed 60-Minute Emergency Breakdown Dispatch"
    ],
    "timeframe": "Annual Preventive AMC",
    "pricing": {
      "aed": 1850,
      "billingType": "Fixed Annual Fee",
      "label": "AED 1,850 / Year (4 Visits + Emergency Calls)"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "amc-002",
    "code": "NST-AMC02",
    "title": "Luxury Villa Full Comprehensive MEP Annual Maintenance Contract",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Full MEP Package",
    "reraStandard": "DEWA & Estidama Engineering Guidelines",
    "description": "All-inclusive mechanical, electrical, and plumbing stewardship for villas covering HVAC, water pumps, distribution boards, water heaters, and drainage sumps.",
    "deliverables": [
      "Unlimited 24/7 Emergency MEP Callouts (No Hidden Labour Fee)",
      "6 Bi-Monthly Comprehensive Multi-Point MEP Services",
      "Thermal Imaging of Electrical Distribution Boards (DB)",
      "Central Water Heater Sacrificial Anode & Element Servicing"
    ],
    "timeframe": "Annual Preventive AMC",
    "pricing": {
      "aed": 4200,
      "billingType": "Fixed Annual Fee",
      "label": "Starting from AED 4,200 / Year"
    },
    "propertyType": "Villa / Townhouse",
    "popular": true
  },
  {
    "id": "amc-003",
    "code": "NST-AMC03",
    "title": "Swimming Pool Filtration & Chemical Water Treatment AMC",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Pool & Water Features",
    "reraStandard": "Dubai Municipality Health & Safety Pool Standards",
    "description": "Twice-weekly swimming pool maintenance for private villas including vacuuming, pH/chlorine balancing, pump strainer basket clearance, and sand filter backwashing.",
    "deliverables": [
      "Twice-Weekly On-Site Pool Technician Visits",
      "Commercial Grade Chlorine, Algaecide & pH Balancer Chemicals",
      "Pool Pump, Strainer & Multiport Valve Mechanical AMC",
      "Underwater LED Lighting & Transformer Inspection"
    ],
    "timeframe": "Annual Service Contract",
    "pricing": {
      "aed": 3600,
      "billingType": "Fixed Annual Fee",
      "label": "AED 3,600 / Year (AED 300 / Month)"
    },
    "propertyType": "Villa / Townhouse",
    "popular": true
  },
  {
    "id": "amc-004",
    "code": "NST-AMC04",
    "title": "Villa Landscape & Smart Automated Irrigation Care AMC",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Landscaping & Horticulture",
    "reraStandard": "UAE Water Conservation Directives",
    "description": "Professional horticultural care for private gardens, palm trees, grass lawns, and automated drip irrigation controllers with seasonal fertilizer scheduling.",
    "deliverables": [
      "Weekly Lawn Mowing, Hedge Trimming & Palm Pruning",
      "Automated Irrigation Controller & Solenoid Valve Maintenance",
      "Soil Conditioning & Organic Season Fertilizer Enrichment",
      "Drip Line Flush & Emitter Clog Remediation"
    ],
    "timeframe": "Annual Landscape AMC",
    "pricing": {
      "aed": 3800,
      "billingType": "Fixed Annual Fee",
      "label": "AED 3,800 / Year"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "amc-005",
    "code": "NST-AMC05",
    "title": "Dubai Municipality Approved Water Tank Cleaning & Lab Testing",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Water Tank Sanitization",
    "reraStandard": "Dubai Municipality Food Safety & Health Directives",
    "description": "Semi-annual high-pressure cleaning and chlorination of underground concrete and GRP rooftop water tanks with official accredited laboratory water sample certification.",
    "deliverables": [
      "Complete Water Tank Draining, Sludge Removal & Scrubbing",
      "High-Pressure Sodium Hypochlorite Disinfection",
      "Accredited Laboratory Microbiological & Legionella Testing Dossier",
      "Dubai Municipality Compliance Water Purity Certificate"
    ],
    "timeframe": "Semi-Annual Mandatory Service",
    "pricing": {
      "aed": 850,
      "billingType": "Per Incident",
      "label": "AED 850 / Bi-Annual Service"
    },
    "propertyType": "Villa / Townhouse",
    "popular": true
  },
  {
    "id": "amc-006",
    "code": "NST-AMC06",
    "title": "Municipality Certified Pest Control & Termite Defense AMC",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Pest Control & Termite",
    "reraStandard": "Dubai Municipality Public Health Pest Control Section",
    "description": "Quarterly eco-friendly, child- and pet-safe pest eradication targeting cockroaches, ants, bedbugs, and subterranean termites using approved German gel and micro-emulsions.",
    "deliverables": [
      "Quarterly Comprehensive Internal Gel Baiting & Barrier Sprays",
      "Exterior Perimeter Foundation Barrier Insecticide Treatments",
      "Eco-Friendly Odorless & Non-Toxic Chemicals (Dubai Approved)",
      "Free Emergency Re-Treatment Guarantee Between Visits"
    ],
    "timeframe": "Annual Preventive AMC",
    "pricing": {
      "aed": 1100,
      "billingType": "Fixed Annual Fee",
      "label": "AED 1,100 / Year (4 Visits)"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "amc-007",
    "code": "NST-AMC07",
    "title": "Electrical Distribution Board (DB) Thermal Imaging Diagnostic",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Electrical Safety",
    "reraStandard": "DEWA Wiring Regulations & NFPA 70B",
    "description": "Infrared thermographic scanning of main and sub-distribution boards to detect loose connections, imbalanced phases, harmonic overheating, and fire risks before failure.",
    "deliverables": [
      "FLIR Calibrated High-Resolution Thermal Radiometric Scan",
      "Full Engineering Hotspot Report with Temperature Delta Analysis",
      "Torquing of Main Breakers, Neutral Bars & Earth Terminals",
      "DEWA Safety Certificate Endorsement Support"
    ],
    "timeframe": "Per Diagnostic Audit",
    "pricing": {
      "aed": 650,
      "billingType": "Per Incident",
      "label": "AED 650 / Audit"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "amc-008",
    "code": "NST-AMC08",
    "title": "Central Plumbing & Ultrasonic Acoustic Leak Detection",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Leak Detection",
    "reraStandard": "Plumbing Engineering Codes of Practice",
    "description": "Non-destructive acoustic and tracer gas leak pinpointing for hidden water pipe bursts beneath marble floors, behind drywall, or under garden soil without unnecessary digging.",
    "deliverables": [
      "Ultrasonic Acoustic Frequency Ground Microphone Scanning",
      "Hydrogen/Nitrogen Forming Gas Pressurization Pipe Testing",
      "Precision Leak Coordinates Mapping with Minimum Core Cut",
      "DEWA High Water Bill Adjustment Leak Repair Certificate"
    ],
    "timeframe": "Per Leak Detection Event",
    "pricing": {
      "aed": 1200,
      "billingType": "Per Incident",
      "label": "AED 1,200 / Inspection"
    },
    "propertyType": "Villa / Townhouse",
    "popular": true
  },
  {
    "id": "amc-009",
    "code": "NST-AMC09",
    "title": "Solar Water Heater & Thermosyphon System Annual Servicing",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Solar Heating",
    "reraStandard": "Dubai Green Building Regulations",
    "description": "Annual chemical descaling, collector glass cleaning, thermostatic mixing valve replacement, and auxiliary electrical booster element check on rooftop solar water heaters.",
    "deliverables": [
      "Solar Collector Panel High-Efficiency Descaling & Cleaning",
      "Thermostatic Anti-Scald Mixing Valve Calibration",
      "Pressure Relief Valve (PRV) & Expansion Vessel Testing",
      "Electrical Backup Element & Thermostat Function Verification"
    ],
    "timeframe": "Annual Service",
    "pricing": {
      "aed": 750,
      "billingType": "Per Incident",
      "label": "AED 750 / Service"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "amc-010",
    "code": "NST-AMC10",
    "title": "Civil Defense Fire Alarm & Smoke Detector Testing AMC",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Life Safety AMCs",
    "reraStandard": "UAE Fire & Life Safety Code / Hassantuk",
    "description": "Annual functional smoke generator testing, heat detector response verification, fire blanket check, and 2kg/6kg DCP/CO2 fire extinguisher hydrostatic certification.",
    "deliverables": [
      "Aerosol Smoke & Heat Detector Chamber Response Testing",
      "Fire Extinguisher Pressure Gauge Check & Annual Tagging",
      "Hassantuk Residential Transmitter Signal Verification",
      "Landlord Fire Life Safety Certificate Issuance"
    ],
    "timeframe": "Annual Safety AMC",
    "pricing": {
      "aed": 950,
      "billingType": "Fixed Annual Fee",
      "label": "AED 950 / Year"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "amc-011",
    "code": "NST-AMC11",
    "title": "Private Elevator & Home Lift Safety Maintenance AMC",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Vertical Transportation",
    "reraStandard": "Dubai Civil Defense & Lift Safety Standards",
    "description": "Monthly elevator mechanical lubrication, governor overspeed test, landing door interlocks, and emergency cabin phone line checks for private villas.",
    "deliverables": [
      "12 Monthly On-Site Elevator Technician Inspections",
      "Traction Cable Wear & Guide Shoe Lubrication Service",
      "Emergency Lowering Device & Backup Battery Testing",
      "Annual Civil Defense Third-Party Safety Certificate Filing"
    ],
    "timeframe": "Annual Lift AMC",
    "pricing": {
      "aed": 4800,
      "billingType": "Fixed Annual Fee",
      "label": "AED 4,800 / Year"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "amc-012",
    "code": "NST-AMC12",
    "title": "Exterior Facade High-Pressure Jet Washing & Glass Cleaning",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Facade Care",
    "reraStandard": "Dubai Municipality Building Appearance By-Laws",
    "description": "Restoration of exterior villa facade, sandstone cladding, and double-glazed windows removing baked-in sand, bird droppings, and desert humidity residue.",
    "deliverables": [
      "High-Pressure Rotary Surface Cleaners for Walkways & Cladding",
      "Pure De-Ionized Water Reach-and-Wash Window Pole System",
      "Biodegradable Stain Removal for Mineral Efflorescence",
      "Before and After Photographic Cleanliness Report"
    ],
    "timeframe": "Per Service Project",
    "pricing": {
      "aed": 1600,
      "billingType": "Per Incident",
      "label": "Starting from AED 1,600"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "amc-013",
    "code": "NST-AMC13",
    "title": "Rooftop Waterproofing Membrane & Thermal Insulation Renewal",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Waterproofing & Roofing",
    "reraStandard": "DLD Building Maintenance Codes",
    "description": "Application of high-elastomeric polyurethane waterproofing membranes, geotextile fleece, and UV reflective topcoats over flat roofs to prevent monsoon water leaks.",
    "deliverables": [
      "Thermal Moisture Scan of Existing Roof Screed & Tiles",
      "Polyurethane Liquid Elastomeric Waterproofing System (10-Yr)",
      "Parapet Flashing & Rainwater Downspout Sealing",
      "10-Year Waterproofing Warranty Certificate"
    ],
    "timeframe": "Per Project Mandate",
    "pricing": {
      "aed": 45,
      "billingType": "Per Unit Handover",
      "label": "AED 45 / Sq. Metre"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "amc-014",
    "code": "NST-AMC14",
    "title": "Marble Floor Diamond Pad Grinding, Polishing & Crystallization",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Stone Care",
    "reraStandard": "Natural Stone Institute Standards",
    "description": "Restoration of dull, scratched, or etched Italian Botticino, Crema Marfil, and Carrara marble floors using progressive diamond resin pads and Italian chemical crystallization.",
    "deliverables": [
      "Rotary Machine Progressive Diamond Grinding (Grits 200-3000)",
      "Italian Klindex Crystallizer Fluid Application",
      "High-Gloss Wet-Look Polish & Protective Impregnating Sealer",
      "Complete Edge Detail & Baseboard Restoration"
    ],
    "timeframe": "Per Project Mandate",
    "pricing": {
      "aed": 35,
      "billingType": "Per Unit Handover",
      "label": "AED 35 / Sq. Metre"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "amc-015",
    "code": "NST-AMC15",
    "title": "Parquet, Engineered Oak & Teak Wood Floor Re-Oiling & Sanding",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Wood Flooring",
    "reraStandard": "NWFA Hardwood Standards",
    "description": "Refurbishment of solid teak and engineered oak floors in luxury villas, including dustless orbital sanding, stain matching, and application of high-traffic Bona polyurethane lacquer.",
    "deliverables": [
      "Dust-Free Multi-Disc Sanding to Bare Timber",
      "Colour Tone Staining & Gap Resin Filling",
      "Three Coats of Heavy-Traffic Bona Traffic HD Lacquer",
      "Moisture Barrier Expansion Joint Check"
    ],
    "timeframe": "Per Project Mandate",
    "pricing": {
      "aed": 55,
      "billingType": "Per Unit Handover",
      "label": "AED 55 / Sq. Metre"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "amc-016",
    "code": "NST-AMC16",
    "title": "Central Air Duct Sanitization & Antimicrobial Fogging",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Indoor Air Quality",
    "reraStandard": "NADCA ACR Standards",
    "description": "Rotary brush robotic vacuuming of internal AC supply and return ductwork, evaporator coil cleaning, and ultra-fine fogging with EPA-registered antimicrobial biocides.",
    "deliverables": [
      "Robotic Visual Duct Inspection with High-Def Camera",
      "Rotary Brush Mechanical Scrubbing with HEPA Extraction",
      "Antimicrobial Hospital-Grade Fogging (EPA Approved)",
      "Before & After Internal Duct Photographic Evidence Dossier"
    ],
    "timeframe": "Per AC System Service",
    "pricing": {
      "aed": 1400,
      "billingType": "Per Incident",
      "label": "AED 1,400 / Ducted System"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "amc-017",
    "code": "NST-AMC17",
    "title": "Smart Thermostat Upgrade (Nest / Ecobee) & Energy Tuning",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Smart HVAC",
    "reraStandard": "Dubai Demand-Side Management Standards",
    "description": "Replacement of outdated analog thermostats with smart learning WiFi thermostats, optimizing cooling schedules and lowering DEWA bills by up to 22%.",
    "deliverables": [
      "Supply & Precision Installation of Smart Thermostat Unit",
      "24V Transformer Step-Down Integration & Wiring",
      "Mobile App Remote Scheduling & Energy Telemetry Setup",
      "Geo-Fencing Auto-Eco Mode Configuration"
    ],
    "timeframe": "Supply & Installation",
    "pricing": {
      "aed": 850,
      "billingType": "Per Incident",
      "label": "AED 850 / Thermostat Installed"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "amc-018",
    "code": "NST-AMC18",
    "title": "Water Booster Pump & Inverter Variable Speed Drive (VSD) AMC",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Plumbing Pumps",
    "reraStandard": "DEWA Water Pumping Regulations",
    "description": "Quarterly inspection of Grundfos / DAB multi-stage booster pumps, mechanical shaft seals, diaphragm expansion tanks, and pressure sensor recalibration.",
    "deliverables": [
      "Quarterly Pressure Vessel Pre-Charge Pressure Adjustment",
      "Mechanical Seal & Bearing Vibration Diagnostics",
      "Inverter VSD Drive Current & Modulation Check",
      "Automatic Failover Dual-Pump Alternation Verification"
    ],
    "timeframe": "Annual Pump AMC",
    "pricing": {
      "aed": 1200,
      "billingType": "Fixed Annual Fee",
      "label": "AED 1,200 / Year"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "amc-019",
    "code": "NST-AMC19",
    "title": "Greywater Submersible Sump Pump & Pit De-Sludging",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Drainage Systems",
    "reraStandard": "Dubai Municipality Drainage Standards",
    "description": "Bi-annual pump testing, float switch cleaning, and vacuum tanker extraction of grease, sand, and debris from basement drainage pits.",
    "deliverables": [
      "Heavy-Duty Submersible Sump Pump Electrical Diagnostics",
      "Float Switch Level Controller Descaling & Testing",
      "High-Capacity Vacuum Tanker Sludge Evacuation",
      "High-Level Water Alarm System Operational Test"
    ],
    "timeframe": "Semi-Annual Service",
    "pricing": {
      "aed": 1500,
      "billingType": "Per Incident",
      "label": "AED 1,500 / Visit"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "amc-020",
    "code": "NST-AMC20",
    "title": "Intercom, Access Control & Automatic Gate Motor AMC",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Access Security",
    "reraStandard": "SIRA Residential Access Guidelines",
    "description": "Preventive maintenance for sliding/swing gate motorized actuators, safety photoelectric beams, magnetic door locks, and IP video door phone intercom stations.",
    "deliverables": [
      "Quarterly Gate Motor Gearbox Lubrication & Limit Switch Check",
      "Safety Infrared Anti-Crush Sensor Calibration",
      "IP Video Intercom Firmware & Mobile App Link Testing",
      "Emergency Manual Key Override Function Check"
    ],
    "timeframe": "Annual Access AMC",
    "pricing": {
      "aed": 1100,
      "billingType": "Fixed Annual Fee",
      "label": "AED 1,100 / Year"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "amc-021",
    "code": "NST-AMC21",
    "title": "CCTV Surveillance System Maintenance & SIRA Compliance",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Surveillance AMC",
    "reraStandard": "SIRA (Security Industry Regulatory Agency) Standards",
    "description": "Annual maintenance for multi-camera 4K IP CCTV systems, NVR hard disk health verification, camera lens cleaning, and night-vision IR illuminator tests.",
    "deliverables": [
      "Semi-Annual Camera Lens Cleaning & Angle Re-Adjustment",
      "NVR Hard Drive S.M.A.R.T. Health Diagnostic & Storage Check",
      "Network PoE Switch & UPS Battery Backup Power Testing",
      "Mobile Remote Live Streaming Bandwidth Optimization"
    ],
    "timeframe": "Annual CCTV AMC",
    "pricing": {
      "aed": 1400,
      "billingType": "Fixed Annual Fee",
      "label": "AED 1,400 / Year"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "amc-022",
    "code": "NST-AMC22",
    "title": "Motorized Curtain & Automated Roller Blind Servicing",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Motorized Shading",
    "reraStandard": "Somfy & Lutron Technical Specifications",
    "description": "Inspection and tension adjustment of Somfy and Lutron motorized drapery tracks, tubular motors, remote control pairing, and fabric realignment.",
    "deliverables": [
      "Motor Torque Limit Calibration & End-Stop Resetting",
      "Track Pulley & Drive Belt Lubrication with Dry Silicone",
      "Remote Controller Channel Re-Programming",
      "Fabric Seam & Weighted Hem Straightening"
    ],
    "timeframe": "Per Service Visit",
    "pricing": {
      "aed": 600,
      "billingType": "Per Incident",
      "label": "AED 600 / System Check"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "amc-023",
    "code": "NST-AMC23",
    "title": "Reverse Osmosis (RO) Drinking Water Filtration Plant Servicing",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Water Purification",
    "reraStandard": "NSF/ANSI Standard 58",
    "description": "Quarterly filter cartridge replacements (Sediment, Carbon, Post-Carbon), semi-annual RO membrane replacement, and TDS mineral remineralizer recharges.",
    "deliverables": [
      "Quarterly 3-Stage Pre-Filter Cartridge Replacement",
      "RO Membrane Desalination Efficiency TDS Metering",
      "UV Disinfection Lamp Function & Ballast Verification",
      "Sanitization of Pressurized Water Storage Tank"
    ],
    "timeframe": "Annual Water Care Package",
    "pricing": {
      "aed": 850,
      "billingType": "Fixed Annual Fee",
      "label": "AED 850 / Year (Includes Filters)"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "amc-024",
    "code": "NST-AMC24",
    "title": "Garage Door Overhead Sectional Motor & Spring Balancing",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Garage Doors",
    "reraStandard": "DORMA / Henderson Garage Standards",
    "description": "Torsion spring tension balancing, track roller ball-bearing lubrication, safety breakaway cable inspection, and remote transmitter programming.",
    "deliverables": [
      "High-Tension Torsion Spring Load Re-Balancing",
      "Heavy-Duty Track Roller Lubrication with Lithium Grease",
      "Bottom Weatherstrip Rubber Seal Replacement",
      "Auto-Reverse Obstacle Sensitivity Safety Testing"
    ],
    "timeframe": "Annual Service",
    "pricing": {
      "aed": 650,
      "billingType": "Per Incident",
      "label": "AED 650 / Service"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "amc-025",
    "code": "NST-AMC25",
    "title": "Acoustic Window Weatherstrip & Perimeter Seal Replacement",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Soundproofing & Dust",
    "reraStandard": "Building Envelope Acoustic Standards",
    "description": "Replacement of perished EPDM rubber gaskets and perimeter silicone around aluminium window frames to block street traffic noise and sandstorm infiltration.",
    "deliverables": [
      "Removal of Hardened Weathered Rubber Window Gaskets",
      "Installation of High-Grade Dual-Lip Silicone EPDM Seals",
      "Structural Aluminium Frame Window Alignment & Latches",
      "Up to 8-12 dB Traffic Noise Reduction Realization"
    ],
    "timeframe": "Per Property Project",
    "pricing": {
      "aed": 1200,
      "billingType": "Per Incident",
      "label": "Starting from AED 1,200"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "amc-026",
    "code": "NST-AMC26",
    "title": "Emergency MEP 24/7 Rapid Response Retainer (Subscribers Only)",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Emergency Retainer",
    "reraStandard": "Nestora 45-Minute SLA Guarantee",
    "description": "Dedicated standby emergency squad dispatched within 45 minutes for critical incidents: electrical blackouts, burst water mains, and AC failure during Dubai summer.",
    "deliverables": [
      "Guaranteed Sub-45 Minute On-Site Arrival in Dubai/Abu Dhabi",
      "Dedicated Emergency Dispatch Phone Line & App SOS Trigger",
      "Initial Emergency Isolation & Make-Safe Guarantee",
      "Comprehensive Post-Incident Engineering Root Cause Dossier"
    ],
    "timeframe": "Annual Emergency Retainer",
    "pricing": {
      "aed": 1500,
      "billingType": "Fixed Annual Fee",
      "label": "AED 1,500 / Year (Included Free in Full PM)"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "amc-027",
    "code": "NST-AMC27",
    "title": "Sofa, Mattress & Upholstery Deep Steam & UV Extraction",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Soft Furnishing Care",
    "reraStandard": "IICRC Upholstery Cleaning Standards",
    "description": "Deep extraction steam cleaning at 140°C removing allergens, dust mites, and stains from luxury fabric sofas, dining chairs, and master mattresses between tenancies.",
    "deliverables": [
      "High-Pressure Heated Water Extraction Machine Treatment",
      "Hospital-Grade Antimicrobial UV-C Light Wand Sterilization",
      "Fabric pH Neutralizing Rinse Preventing Residue Stiffness",
      "Rapid 3-Hour Fast-Dry Air Blower Acceleration"
    ],
    "timeframe": "Per Clean Session",
    "pricing": {
      "aed": 750,
      "billingType": "Per Incident",
      "label": "AED 750 / Full Set"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "amc-028",
    "code": "NST-AMC28",
    "title": "Balcony Glass Balustrade & Handrail Rigidity Inspection",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Structural Safety",
    "reraStandard": "Dubai Municipality Balcony Safety Regulations",
    "description": "Structural testing of tempered glass balcony panels, stainless steel spigots, and anchor bolts to ensure 100% child-safe structural stability against wind loads.",
    "deliverables": [
      "Anchor Bolt Torque & Tensile Load Verification",
      "Tempered Laminated Glass Delamination & Chip Audit",
      "Stainless Steel Grade 316 Rust Passivation Treatment",
      "Official Balcony Structural Safety Certificate"
    ],
    "timeframe": "Per Safety Audit",
    "pricing": {
      "aed": 550,
      "billingType": "Per Incident",
      "label": "AED 550 / Inspection"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "amc-029",
    "code": "NST-AMC29",
    "title": "Smart Keyless Door Lock (Yale/August/Aqara) Supply & Installation",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Smart Access Locks",
    "reraStandard": "BHMA Grade 2 Lock Standards",
    "description": "Replacement of standard Euro-cylinder door locks with smart biometric fingerprint, RFID, PIN code, and mobile app locks with temporary access code generation for guests.",
    "deliverables": [
      "Precision Installation of Smart Lock on Timber/Steel Doors",
      "Biometric Fingerprint & Master Card Enrollment",
      "Airbnb API Integration for Automatic Guest Passcode Generation",
      "Emergency Mechanical Key & USB Jump-Start Training"
    ],
    "timeframe": "Supply & Installation",
    "pricing": {
      "aed": 1150,
      "billingType": "Per Incident",
      "label": "AED 1,150 / Lock Installed"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "amc-030",
    "code": "NST-AMC30",
    "title": "Full Pre-Summer AC Performance Stress Audit & Chemical Wash",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Summer AC Readiness",
    "reraStandard": "UAE Climate Peak Load Protocols",
    "description": "Comprehensive pre-summer thermal audit before peak 48°C July weather, pressure-washing outdoor condensers and clearing condensate drain lines.",
    "deliverables": [
      "High-Pressure Coil Chemical Cleansing Dissolving Sand Encrustation",
      "Condensate Drain Line Nitrogen Purge Preventing Water Overflow",
      "Capacitor & Compressor Ampere Draw Under Load Testing",
      "Temperature Differential (Delta-T) 10-12°C Performance Verification"
    ],
    "timeframe": "Annual Pre-Summer Audit",
    "pricing": {
      "aed": 550,
      "billingType": "Per Incident",
      "label": "AED 550 / System"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "amc-031",
    "code": "NST-AMC31",
    "title": "Villa Perimeter Wall Crack Repair & Elastomeric Repainting",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "Masonry & Painting",
    "reraStandard": "Exterior Architectural Coating Codes",
    "description": "Epoxy injection repair of settlement hairline cracks in boundary walls, application of alkali-resistant primer, and two coats of weather-resistant Jotun Jotashield paint.",
    "deliverables": [
      "V-Grooving & Epoxy Mortar Injection of Concrete Cracks",
      "Jotun Alkyd Anti-Fungal Primer Undercoat",
      "Two Finishing Coats of Jotashield Extreme UV Paint",
      "5-Year Colour Retention & Flaking Warranty"
    ],
    "timeframe": "Per Project Mandate",
    "pricing": {
      "aed": 4200,
      "billingType": "Per Incident",
      "label": "Starting from AED 4,200"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "amc-032",
    "code": "NST-AMC32",
    "title": "Master Community NOC & Permitted Contractor Pass Management",
    "category": "Preventive Maintenance & AMC",
    "subCategory": "HOA Contractor Permits",
    "reraStandard": "Emaar / Nakheel / Damac Security Portals",
    "description": "End-to-end processing of contractor security entry permits, third-party liability insurance submissions, and refundable security deposits with master developers.",
    "deliverables": [
      "Developer Online Security Portal Submission & Fee Clearing",
      "Valid Workman Compensation & Third-Party Insurance Filing",
      "Daily Security Gate Pass Issuance for Specialized Contractors",
      "100% Refundable Security Deposit Recovery Upon Completion"
    ],
    "timeframe": "Per Contractor NOC",
    "pricing": {
      "aed": 350,
      "billingType": "Per Incident",
      "label": "AED 350 / Project NOC"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "ten-001",
    "code": "NST-TEN01",
    "title": "Comprehensive Tenant Background, KYC & AECB Credit Check",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Tenant Screening",
    "reraStandard": "Al Etihad Credit Bureau (AECB) Standards",
    "description": "Deep institutional screening of prospective tenants including AECB credit scoring, UAE salary verification, court litigation history, and prior landlord references.",
    "deliverables": [
      "Official Al Etihad Credit Bureau (AECB) Score Report",
      "HR Employer Salary Attestation & Employment Verification",
      "Dubai Courts Case Registry Litigation Check",
      "Prior Landlord Rent Payment History Confirmation"
    ],
    "timeframe": "24-Hour Express Report",
    "pricing": {
      "aed": 350,
      "billingType": "Per Incident",
      "label": "AED 350 / Applicant"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "ten-002",
    "code": "NST-TEN02",
    "title": "Matterport 3D 4K Virtual Property Tour & Floor Plan Mapping",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Digital Marketing",
    "reraStandard": "Matterport Pro3 High-Precision Standards",
    "description": "Creation of immersive interactive 3D digital twins and laser-accurate architectural 2D floor plans allowing overseas and local high-net-worth tenants to tour 24/7.",
    "deliverables": [
      "Matterport 3D Dollhouse & First-Person Virtual Walkthrough",
      "Laser-Measured Architectural 2D Schematic Floor Plan (PDF/PNG)",
      "High-Definition 4K HDR Still Photographs for Portals",
      "12-Month Cloud Hosting & Embed Code for Property Portals"
    ],
    "timeframe": "Per Property Capture",
    "pricing": {
      "aed": 950,
      "billingType": "Per Incident",
      "label": "AED 950 / Property"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "ten-003",
    "code": "NST-TEN03",
    "title": "Strategic Multi-Portal Marketing & Luxury Portal Showcase",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Listing Syndication",
    "reraStandard": "Property Finder, Bayut & Dubizzle VIP Standards",
    "description": "Syndication across UAE tier-1 portals with verified badge (TruCheck / TruBroker), video reels, social media campaigns, and direct private client investor network marketing.",
    "deliverables": [
      "Property Finder TruCheck™ Verified Listing Badge",
      "Bayut TruBroker™ Featured Spotting & Top Placement",
      "Social Media Instagram / TikTok Architectural Reel Production",
      "Direct Campaign Blast to 15,000+ Verified UAE Tenants Database"
    ],
    "timeframe": "Included in Leasing Mandate",
    "pricing": {
      "aed": 5,
      "billingType": "Annual % of Rent",
      "label": "Standard 5% Leasing Commission"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "ten-004",
    "code": "NST-TEN04",
    "title": "100-Point Move-In Condition Audit & Photographic Dossier",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Check-In Inventory",
    "reraStandard": "RICS Condition Reporting Guidelines",
    "description": "Thorough pre-tenancy inspection recording high-resolution photographic evidence of every room, appliance serial numbers, meter readings, and existing cosmetic blemishes.",
    "deliverables": [
      "100+ Timestamped High-Res Photographic Inspection Report",
      "DEWA & Chiller Final Meter Reading Documentation",
      "Full Appliance Functional & Serial Number Inventory",
      "Digital Multi-Signature Landlord & Tenant Acceptance Portal"
    ],
    "timeframe": "Per Check-In Audit",
    "pricing": {
      "aed": 550,
      "billingType": "Per Incident",
      "label": "AED 550 / Inspection"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "ten-005",
    "code": "NST-TEN05",
    "title": "Key Handover & Tenant Move-In Concierge Assistance",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Tenant Onboarding",
    "reraStandard": "Nestora White-Glove Onboarding Protocol",
    "description": "Seamless move-in coordination including master developer move-in permit NOC, security access cards, parking tag handover, and DEWA activation liaison.",
    "deliverables": [
      "Master Developer Move-In Permit NOC Generation",
      "Access Key, FOB & Parking Remote Handover Protocol",
      "DEWA & Chiller Connection Tenant Assistance",
      "Comprehensive Tenant Neighborhood Welcome & Utility Guidebook"
    ],
    "timeframe": "Per Handover",
    "pricing": {
      "aed": 450,
      "billingType": "Per Incident",
      "label": "AED 450 / Handover"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "ten-006",
    "code": "NST-TEN06",
    "title": "Lease Renewal Negotiation & Market Yield Benchmarking",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Lease Renewal",
    "reraStandard": "RERA Decree No. 43/2013 Calculation",
    "description": "Proactive lease renewal negotiations initiated 100 days before expiration, maximizing allowable RERA rent increases and executing updated Ejari contracts.",
    "deliverables": [
      "RERA Smart Rental Index Rent Comparison Benchmark",
      "Formal 90-Day Renewal Proposal Formulated & Sent",
      "Negotiation Management Balancing Yield vs Vacancy Cost",
      "Updated Ejari Registration & Cheque Collection Handover"
    ],
    "timeframe": "Per Renewal Contract",
    "pricing": {
      "aed": 750,
      "billingType": "Per Incident",
      "label": "AED 750 / Renewal (Free in Full PM)"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "ten-007",
    "code": "NST-TEN07",
    "title": "100-Point Move-Out Dilapidation Audit & Deposit Settlement",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Check-Out Inventory",
    "reraStandard": "DLD Deposit Recovery Guidelines",
    "description": "Meticulous move-out check comparing condition against initial check-in dossier, itemizing tenant-caused damage, and calculating fair deductions.",
    "deliverables": [
      "Side-by-Side Photographic Before & After Comparison Dossier",
      "Contractor Itemized Rectification Cost Estimate",
      "Formal Move-Out Dilapidation Settlement Document",
      "DEWA Final Bill Clearance & Key Recovery Sign-Off"
    ],
    "timeframe": "Per Check-Out Audit",
    "pricing": {
      "aed": 650,
      "billingType": "Per Incident",
      "label": "AED 650 / Audit"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "ten-008",
    "code": "NST-TEN08",
    "title": "Multinational Corporate Tenant Placement Mandate",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Corporate Leasing",
    "reraStandard": "Fortune 500 Relocation Standards",
    "description": "Targeted placement of multinational corporations (Fortune 500, embassies, banks) providing single-cheque corporate guarantees and long-term tenancy stability.",
    "deliverables": [
      "Direct Placement Through Corporate Relocation Agencies",
      "Single-Cheque or UAEDDS Corporate Wire Lease Terms",
      "Standardized Corporate Maintenance & Repair Threshold Clauses",
      "Senior HR Contact Protocol & Dedicated Relationship Manager"
    ],
    "timeframe": "Per Corporate Lease",
    "pricing": {
      "aed": 5,
      "billingType": "Annual % of Rent",
      "label": "5% of Annual Lease Value"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "ten-009",
    "code": "NST-TEN09",
    "title": "Automated UAE Direct Debit System (UAEDDS) Setup",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Payment Automation",
    "reraStandard": "UAE Central Bank Direct Debit Framework",
    "description": "Modern paperless rent collection replacing traditional paper cheques with automated monthly, quarterly, or bi-annual direct debits from tenant bank accounts.",
    "deliverables": [
      "Central Bank UAEDDS Electronic Mandate Origination",
      "Direct Bank-to-Bank Automated Debit Execution",
      "Automated Tenant SMS & Email Reminders Before Debit",
      "Zero Cheque Bounce Risk & Instant Failure Alerting"
    ],
    "timeframe": "Setup per Tenancy",
    "pricing": {
      "aed": 250,
      "billingType": "Per Incident",
      "label": "AED 250 / Mandate Setup"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "ten-010",
    "code": "NST-TEN10",
    "title": "PDC Rental Cheque Safe Custody & Bank Clearance Engine",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Cheque Management",
    "reraStandard": "Central Bank Cheque Clearing Standards",
    "description": "Fireproof safe custody of post-dated rental cheques with insured armored transport and automated bank deposit scheduling on exact due dates.",
    "deliverables": [
      "Insured Fireproof Safe Custody of Post-Dated Cheques",
      "Automated 7-Day Pre-Deposit Notification to Tenant",
      "Direct Bank Clearance Tracking & Wire Settlement to Owner",
      "Immediate Formal Cheque Return Legal Escalation on Default"
    ],
    "timeframe": "Annual PM Feature",
    "pricing": {
      "aed": 450,
      "billingType": "Fixed Annual Fee",
      "label": "AED 450 / Year (Included in Full PM)"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "ten-011",
    "code": "NST-TEN11",
    "title": "Tenant Loyalty & Low-Churn Renewal Incentive Program",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Tenant Retention",
    "reraStandard": "Tenant Lifecycle Optimization",
    "description": "Structured retention campaigns reducing costly vacant turnover periods through timely tenant satisfaction check-ins and preventive maintenance perks.",
    "deliverables": [
      "Mid-Term 6-Month Tenant Satisfaction Check-In Survey",
      "Complimentary AC Deep Clean Reward on 2-Year Renewal",
      "Zero-Friction 1-Click Digital Lease Extension",
      "Portfolio Average Vacancy Duration Reduced to Sub-12 Days"
    ],
    "timeframe": "Annual Retainer Feature",
    "pricing": {
      "aed": 500,
      "billingType": "Fixed Annual Fee",
      "label": "Included in Full PM"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "ten-012",
    "code": "NST-TEN12",
    "title": "Emergency Tenant Lockout & Key Replacement Assistance",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Tenant Assistance",
    "reraStandard": "24/7 Concierge Protocol",
    "description": "24/7 emergency response for tenants locked out of residences, utilizing duplicate master keys in safe vault or dispatching certified master locksmiths.",
    "deliverables": [
      "24/7 Rapid Key Replacement Dispatch (Sub-45 Mins)",
      "Authorized Master Locksmith Non-Destructive Door Opening",
      "Immediate Key Re-Duplication & Vault Log Update",
      "Tenant Identity Verification Pre-Entry Enforcement"
    ],
    "timeframe": "Per Emergency Incident",
    "pricing": {
      "aed": 350,
      "billingType": "Per Incident",
      "label": "AED 350 / Incident"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "ten-013",
    "code": "NST-TEN13",
    "title": "Bespoke High-End Furniture Leasing & Staging Package",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Furnished Rentals",
    "reraStandard": "Luxury Interior Staging Standards",
    "description": "Curated furnishing packages (Eichholtz, Pottery Barn, West Elm) transforming bare apartments into high-yield luxury rental showcases.",
    "deliverables": [
      "Turnkey Living, Dining & Master Bedroom Furniture Suite",
      "Luxury Mattress, Linens, Curtains & Cutlery Full Set",
      "Professional Lighting & Contemporary Artwork Installation",
      "Estimated +25% Rental Yield Uplift Realization"
    ],
    "timeframe": "Per Furnishing Project",
    "pricing": {
      "aed": 25000,
      "billingType": "Per Unit Handover",
      "label": "Starting from AED 25,000 / Unit"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "ten-014",
    "code": "NST-TEN14",
    "title": "Tenant Sub-Meter Chiller & Electricity Billing Recovery",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Utility Cost Recovery",
    "reraStandard": "Empower / Tabreed Direct Recovery Rules",
    "description": "Monthly metering, invoicing, and collection of chilled water cooling and power charges from tenants for buildings without direct individual billing.",
    "deliverables": [
      "Monthly Ultrasonic BTU Meter Consumption Data Extraction",
      "Individualized Tenant Chiller Invoices with Tariff Breakdowns",
      "Direct Rent Portal Payment Collection & Utility Clearing",
      "Zero Landlord Utility Subsidy Guarantee"
    ],
    "timeframe": "Monthly Fee per Unit",
    "pricing": {
      "aed": 120,
      "billingType": "Fixed Annual Fee",
      "label": "AED 120 / Month per Unit"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "ten-015",
    "code": "NST-TEN15",
    "title": "Diplomatic & Embassy VIP Tenant Protocol Management",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Diplomatic Protocol",
    "reraStandard": "UAE MOFA Tenancy Standards",
    "description": "Discreet leasing and management for senior diplomats and foreign embassy staff with customized diplomatic termination clauses and protocol clearances.",
    "deliverables": [
      "Embassy Diplomatic Clause Formulation (War/Recall Protection)",
      "Tax-Exempt Diplomatic Invoicing & Official Documentation",
      "High-Security Background Verification Liaison",
      "Bespoke Multi-Currency Rent Wire Processing"
    ],
    "timeframe": "Per Diplomatic Lease",
    "pricing": {
      "aed": 6,
      "billingType": "Annual % of Rent",
      "label": "6% of Annual Rent"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "ten-016",
    "code": "NST-TEN16",
    "title": "Pet-Friendly Tenancy Policy & Pet Deposit Escrow Framework",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Pet Policy Management",
    "reraStandard": "UAE Animal Welfare & Community Codes",
    "description": "Structuring pet-friendly leases with mandatory extra security deposit escrow, professional move-out ozonation, and flea treatment covenants.",
    "deliverables": [
      "Pet Registration Dossier with Veterinary Vaccination Records",
      "Additional AED 2,000 to AED 5,000 Pet Security Deposit Escrow",
      "Mandatory Professional Move-Out Ozonation & Steam Clean",
      "HOA Community Dog Breed & Leash Regulation Enforcement"
    ],
    "timeframe": "Per Tenancy Agreement",
    "pricing": {
      "aed": 300,
      "billingType": "Per Incident",
      "label": "AED 300 / Agreement"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "ten-017",
    "code": "NST-TEN17",
    "title": "Expat Remote Virtual Video Lease Signing & Handover",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Remote Leasing",
    "reraStandard": "UAE Pass Digital Identity Framework",
    "description": "End-to-end leasing for overseas expatriates moving to UAE, including live 4K video walkthroughs, digital lease signing, and ready-to-live setup.",
    "deliverables": [
      "Live Interactive 4K Video Tour with Dedicated Leasing Consultant",
      "UAE Pass / DocuSign Legally Binding Digital Execution",
      "Advance Supermarket Welcome Hamper & Water Restocking",
      "Late-Night Flight Airport Handover Keybox Provision"
    ],
    "timeframe": "Per Remote Tenancy",
    "pricing": {
      "aed": 650,
      "billingType": "Per Incident",
      "label": "AED 650 / Handover"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "ten-018",
    "code": "NST-TEN18",
    "title": "Commercial Tenant Fit-Out Plan Review & Landlord NOC",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Fit-Out Supervision",
    "reraStandard": "Dubai Municipality & Civil Defense Fit-Out Rules",
    "description": "Review of commercial tenant architectural, MEP, and civil engineering drawings ensuring structural integrity before granting official landlord NOC.",
    "deliverables": [
      "Architectural & MEP Drawing Structural Integrity Audit",
      "Civil Defense Fire Sprinkler & Egress Compliance Review",
      "Fit-Out Contractor Security Deposit Escrow Administration",
      "Final Post-Fit-Out As-Built Inspection & Clearance"
    ],
    "timeframe": "Per Fit-Out Review",
    "pricing": {
      "aed": 2500,
      "billingType": "Per Incident",
      "label": "AED 2,500 / Fit-Out Project"
    },
    "propertyType": "Commercial Office",
    "popular": false
  },
  {
    "id": "ten-019",
    "code": "NST-TEN19",
    "title": "Tenant Community Rules & Noise Dispute Mediation Desk",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Dispute Mediation",
    "reraStandard": "Master Community Noise & Nuisance By-Laws",
    "description": "Impartial mediation and formal warning notice escalation for tenant noise complaints, unauthorized parties, or common area violations.",
    "deliverables": [
      "Formal Written First & Final Breach Notice Formulation",
      "Direct Tenant Mediation Video Call or Site Meeting",
      "HOA Master Community Fine Avoidance Liaison",
      "Documented Evidence File for RDC Eviction if Non-Compliant"
    ],
    "timeframe": "Per Dispute Mediation",
    "pricing": {
      "aed": 400,
      "billingType": "Per Incident",
      "label": "AED 400 / Mediation File"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "ten-020",
    "code": "NST-TEN20",
    "title": "Early Lease Termination Settlement & Re-Leasing Protocol",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Lease Break Management",
    "reraStandard": "DLD Standard Lease Break Protocols",
    "description": "Structuring mutual lease termination agreements when tenants relocate early, ensuring statutory penalty recovery (typically 2 months rent) and instant re-marketing.",
    "deliverables": [
      "Early Termination Deed Formulation & Penalty Calculation",
      "Advance Re-Marketing Launch 30 Days Prior to Vacancy",
      "Seamless Back-to-Back New Tenant Move-In Transition",
      "Zero Days Rental Void Loss Strategy Execution"
    ],
    "timeframe": "Per Termination Settlement",
    "pricing": {
      "aed": 850,
      "billingType": "Per Incident",
      "label": "AED 850 / Settlement"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "ten-021",
    "code": "NST-TEN21",
    "title": "High-Volume Multi-Unit Bulk Leasing Campaign (New Developments)",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Bulk Handover Leasing",
    "reraStandard": "DLD Project Absorption Framework",
    "description": "Fast-track marketing and tenant onboarding for new residential towers absorbing 50 to 200+ units within 60 to 90 days from completion.",
    "deliverables": [
      "On-Site Pop-Up Leasing Office Setup & Staffing",
      "Phased Price Release Strategy Preventing Market Flooding",
      "Standardized Bulk Tenancy Contract Formulation",
      "Dedicated Bulk Move-In Elevator & Logistics Scheduling"
    ],
    "timeframe": "Institutional Mandate",
    "pricing": {
      "aed": 4,
      "billingType": "Annual % of Rent",
      "label": "3.5%–4.5% of Gross Rollout"
    },
    "propertyType": "Full Building Portfolio",
    "popular": true
  },
  {
    "id": "ten-022",
    "code": "NST-TEN22",
    "title": "Tenant Rent Assistance Program & Micro-Installment Financing",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Rent Financing",
    "reraStandard": "Fintech UAE Payment Integrations",
    "description": "Partnering with licensed UAE fintech lenders (Tabby, Cashew, Keyper) allowing tenants to pay rent in 12 monthly installments while landlord receives 100% upfront.",
    "deliverables": [
      "Landlord 100% Guaranteed Upfront Annual Rent Payout",
      "Tenant 12-Month Automated Card Installment Schedule",
      "Zero Default Credit Risk Borne by Landlord",
      "Increased Rental Demand and +5-8% Price Premium Realization"
    ],
    "timeframe": "Per Tenancy Integration",
    "pricing": {
      "aed": 2,
      "billingType": "Annual % of Rent",
      "label": "2% Fintech Facilitation"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "ten-023",
    "code": "NST-TEN23",
    "title": "Key Worker & Healthcare Staff Corporate Housing Program",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Corporate Housing",
    "reraStandard": "DHA & Ministry Healthcare Partnerships",
    "description": "Long-term master leasing agreements with UAE healthcare networks and educational institutions placing certified nurses, doctors, and faculty.",
    "deliverables": [
      "Master Corporate Tenancy Agreement with Institutional Backing",
      "Zero Vacancy Risk Under Multi-Year Corporate Leases",
      "Standardized Move-In and Move-Out Institutional Inspections",
      "Automated Monthly Direct Wire Remittances"
    ],
    "timeframe": "Annual Corporate Mandate",
    "pricing": {
      "aed": 4.5,
      "billingType": "Annual % of Rent",
      "label": "4.5% of Annual Lease"
    },
    "propertyType": "Full Building Portfolio",
    "popular": false
  },
  {
    "id": "ten-024",
    "code": "NST-TEN24",
    "title": "Pre-Tenancy Deep Sanitization & Move-In Sparkle Clean",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Pre-Tenancy Cleaning",
    "reraStandard": "British Institute of Cleaning Science (BICS)",
    "description": "Hospital-grade deep cleaning of bathrooms, kitchen cabinetry, grease removal, floor scrubbing, and interior window polishing before tenant arrival.",
    "deliverables": [
      "Industrial Kitchen Degreasing & Oven Interior Scrubbing",
      "Bathroom Descaling, Anti-Bacterial Sanitization & Grout Wash",
      "Internal Cupboard, Wardrobe & Baseboard Dust Removal",
      "Move-In Ready Cleanliness Seal Placed on Entrance Door"
    ],
    "timeframe": "Per Clean Session",
    "pricing": {
      "aed": 650,
      "billingType": "Per Incident",
      "label": "Starting from AED 650 / Unit"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "ten-025",
    "code": "NST-TEN25",
    "title": "VIP Concierge Tenant Welcome Hamper & Smart Gift Set",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Tenant Experience",
    "reraStandard": "Luxury Hospitality Standards",
    "description": "High-touch luxury welcome package placed in property on move-in day containing artisanal goods, luxury toiletries, and local insider guidebooks.",
    "deliverables": [
      "Artisanal UAE Gourmet Honey, Dates & Organic Coffee Hamper",
      "Luxury Aesop / Diptyque Bathroom Toiletries Starter Set",
      "Bespoke Leather Key Ring & Property Quick Reference Card",
      "Measurable 40% Increase in Positive Landlord Relations"
    ],
    "timeframe": "Per Hamper Set",
    "pricing": {
      "aed": 450,
      "billingType": "Per Incident",
      "label": "AED 450 / Hamper"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "ten-026",
    "code": "NST-TEN26",
    "title": "Tenancy Lease Modification & Tenant Addition/Removal Addendum",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Contract Addendums",
    "reraStandard": "RERA Legal Tenancy Addendum Guidelines",
    "description": "Formal drafting and Ejari update when adding roommates, changing company signatory names, or updating registered occupants on active leases.",
    "deliverables": [
      "Bilingual Legal Tenancy Addendum Drafting",
      "New Occupant Emirates ID & Passport Verification",
      "DLD Ejari System Record Update & Endorsement",
      "Security Deposit Custody & Responsibility Re-Balancing"
    ],
    "timeframe": "Per Addendum Execution",
    "pricing": {
      "aed": 400,
      "billingType": "Per Incident",
      "label": "AED 400 / Addendum"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "ten-027",
    "code": "NST-TEN27",
    "title": "Seasonal Student Lease Administration (9-Month Terms)",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Academic Leasing",
    "reraStandard": "KHDA Academic Calendar Standards",
    "description": "Specialized 9-month tenancy contracts tailored to academic university semesters in Dubai International Academic City and Knowledge Village.",
    "deliverables": [
      "Academic Year Synchronized 9-Month Tenancy Agreements",
      "Advance 3-Month Summer Subletting Landlord Option",
      "Strict Student Code of Conduct & Co-Signer Guarantees",
      "Annual Academic Cycle Repeat Tenant Sourcing"
    ],
    "timeframe": "Per Academic Lease",
    "pricing": {
      "aed": 5,
      "billingType": "Annual % of Rent",
      "label": "5% of Lease Value"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "ten-028",
    "code": "NST-TEN28",
    "title": "Full-Cycle End-to-End Tenant Lifecycle Master Retainer",
    "category": "Tenant Lifecycle & Leasing",
    "subCategory": "Master Leasing Retainer",
    "reraStandard": "Nestora Institutional Tenancy Framework",
    "description": "Complete 360-degree tenant lifecycle management covering marketing, screening, move-in, rent collection, emergency support, renewals, and deposit settlement.",
    "deliverables": [
      "Unlimited Tenant Sourcing & Portal Premium Placements",
      "All Ejari Formulations, Renewals & 90-Day Legal Notices Included",
      "Automated UAEDDS / PDC Vaulting & Wire Payouts",
      "100-Point Move-In and Move-Out Dilapidation Audits Included"
    ],
    "timeframe": "Annual Master Mandate",
    "pricing": {
      "aed": 6,
      "billingType": "Annual % of Rent",
      "label": "6% of Gross Rental Revenue"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "hol-001",
    "code": "NST-HOL01",
    "title": "Dubai DET Holiday Home Operating Permit Licensing",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Statutory DET Licensing",
    "reraStandard": "Dubai Department of Economy & Tourism (DET) Regulations",
    "description": "Securing official DET holiday home individual unit permits, QR code certification, and tourism classification for short-term luxury rentals.",
    "deliverables": [
      "DET Official Holiday Home Permit Application & Processing",
      "Unit Inspection Preparation to DET 4-Star / Deluxe Standard",
      "Official DET QR Code Placed on Entrance Door",
      "Annual Holiday Home Permit Renewal Management"
    ],
    "timeframe": "3-5 Business Days",
    "pricing": {
      "aed": 1500,
      "billingType": "Fixed Annual Fee",
      "label": "AED 1,500 / Year + Govt Fees"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "hol-002",
    "code": "NST-HOL02",
    "title": "Dynamic Multi-Channel Algorithmic Pricing & Revenue Optimization",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Yield Management",
    "reraStandard": "PriceLabs & Guesty AI Revenue Engine",
    "description": "Continuous real-time algorithmic rate adjustments across Airbnb, Booking.com, VRBO, and Marriott Homes & Villas based on local events and demand spikes.",
    "deliverables": [
      "Daily Algorithmic Dynamic Rate Re-Pricing (24/7 AI Engine)",
      "Major Event Surge Pricing Optimization (COP, F1, Gitex, NYE)",
      "Multi-Platform Instant Calendar Synchronization (Zero Double-Booking)",
      "Historically 25% to 35% Higher Net Yield vs Long-Term Rent"
    ],
    "timeframe": "Full Management Tier",
    "pricing": {
      "aed": 18,
      "billingType": "Annual % of Rent",
      "label": "18%–20% of Net Booking Revenue"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "hol-003",
    "code": "NST-HOL03",
    "title": "Hotel-Grade Luxury Linen & 5-Star Turnover Housekeeping",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Turnover Housekeeping",
    "reraStandard": "Luxury 5-Star Hotel Housekeeping Protocols",
    "description": "Full turnaround cleaning between guest stays including 400-thread count Egyptian cotton linens, plush towels, toiletries restocking, and hygiene inspection.",
    "deliverables": [
      "400-Thread Count Sateen Cotton Linens & Towels Rental Service",
      "Hospital-Grade Sanitization of Kitchen, Beds & Bathrooms",
      "Restocking of Eco-Friendly Hotel Shampoos, Soaps & Coffee Pods",
      "Timestamped 30-Point Photographic Housekeeping Audit"
    ],
    "timeframe": "Per Turnover Clean",
    "pricing": {
      "aed": 180,
      "billingType": "Per Incident",
      "label": "Starting from AED 180 / Turnover"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "hol-004",
    "code": "NST-HOL04",
    "title": "24/7 Smart Keyless Access & Guest Digital Check-In Desk",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Guest Check-In",
    "reraStandard": "DET Guest Registration Protocols",
    "description": "Automated guest check-in via smart locks and 24/7 multilingual guest messaging concierge answering inquiries, maintenance requests, and local recommendations.",
    "deliverables": [
      "Automated Smart Lock Passcode Active Only for Booking Window",
      "24/7 Guest Concierge Chat Support (English, Arabic, Russian, French)",
      "Digital Welcome Tablet with WiFi, House Rules & Guidebook",
      "Instant Guest Escalation Dispatch for AC or Plumbing Requests"
    ],
    "timeframe": "Included in Full Holiday PM",
    "pricing": {
      "aed": 18,
      "billingType": "Annual % of Rent",
      "label": "Included in 18% Management Fee"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "hol-005",
    "code": "NST-HOL05",
    "title": "Dubai DET Guest Passport Registration & Tourism Dirham Filing",
    "category": "Holiday Home & Short-Term",
    "subCategory": "DET Compliance",
    "reraStandard": "Dubai Tourism Dirham Executive Resolution",
    "description": "Mandatory compliance uploading guest passports to Dubai DET security portal within 24 hours of arrival, and calculating monthly Tourism Dirham tax returns.",
    "deliverables": [
      "24-Hour Mandatory DET Guest Passport Uploading",
      "Monthly Tourism Dirham Fee Collection & Remittance to DET",
      "Quarterly Municipality Short-Term Compliance Audit Dossiers",
      "Zero Landlord Fine Guarantee for Tourism Regulations"
    ],
    "timeframe": "Monthly Statutory Filing",
    "pricing": {
      "aed": 350,
      "billingType": "Fixed Annual Fee",
      "label": "AED 350 / Month (Free in Full PM)"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "hol-006",
    "code": "NST-HOL06",
    "title": "Short-Term Luxury Interior Staging & Photogenic Styling",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Interior Staging",
    "reraStandard": "Airbnb Plus & Luxe Curation Standards",
    "description": "Transforming residential properties into Instagrammable holiday homes with luxury accent furniture, statement art, plush rugs, and ambient warm lighting.",
    "deliverables": [
      "Complete FF&E Design Concept & Item Sourcing",
      "High-Impact Feature Wall & Luxury Lighting Installations",
      "Hotel-Grade Kitchenware, Nespresso Machines & Wine Glasses",
      "Expected 4.95+ Star Guest Review Rating Foundation"
    ],
    "timeframe": "Per Staging Mandate",
    "pricing": {
      "aed": 18000,
      "billingType": "Per Unit Handover",
      "label": "Starting from AED 18,000 / Property"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "hol-007",
    "code": "NST-HOL07",
    "title": "Professional High-Dynamic-Range (HDR) Architectural Photography",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Visual Assets",
    "reraStandard": "Architectural Digest Photography Standards",
    "description": "Sunset and golden-hour wide-angle HDR photography and drone aerials showcasing prime views of Burj Khalifa, Palm Jumeirah, or Dubai Marina.",
    "deliverables": [
      "25+ Professionally Retouched HDR Interior & Exterior Photos",
      "Twilight / Golden-Hour Balcony Skyline Feature Photos",
      "Drone Aerial Photography Capturing Community Amenities",
      "Optimized Aspect Ratios for Airbnb & Booking.com Algorithms"
    ],
    "timeframe": "Per Photo Shoot",
    "pricing": {
      "aed": 1200,
      "billingType": "Per Incident",
      "label": "AED 1,200 / Shoot"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "hol-008",
    "code": "NST-HOL08",
    "title": "Guest Damage Protection & AirCover Escrow Claims Processing",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Damage Protection",
    "reraStandard": "Airbnb AirCover & Third-Party Host Insurance",
    "description": "Instant documentation and fast-track recovery of repair costs from platforms or insurance when guests cause accidental damage or break house rules.",
    "deliverables": [
      "Immediate Pre-Checkout Photographic Damage Evidence Collection",
      "Contractor Itemized Repair Quote Generation Within 24 Hours",
      "AirCover & Booking.com Host Guarantee Claim Submission",
      "100% Landlord Asset Value Protection Guarantee"
    ],
    "timeframe": "Per Damage Claim",
    "pricing": {
      "aed": 450,
      "billingType": "Per Incident",
      "label": "AED 450 / Claim (Free in Full PM)"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "hol-009",
    "code": "NST-HOL09",
    "title": "Mid-Term 1 to 6 Month Executive Corporate Flex Leasing",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Mid-Term Flex",
    "reraStandard": "Corporate Executive Mobility Standards",
    "description": "Targeted marketing to digital nomads, relocating executives, and winter snowbirds booking 30 to 180-day stays with zero vacancy and premium rates.",
    "deliverables": [
      "30+ Day Extended Stay Corporate Placement",
      "Monthly Advance Wire Payments with Zero Default Risk",
      "Bi-Weekly Housekeeping & Linen Change Schedules",
      "Utilities Included with Reasonable Consumption Fair-Use Caps"
    ],
    "timeframe": "Mid-Term Management",
    "pricing": {
      "aed": 14,
      "billingType": "Annual % of Rent",
      "label": "14% of Monthly Revenue"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "hol-010",
    "code": "NST-HOL10",
    "title": "Holiday Home Luxury Villa Private Pool & Garden Care Program",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Villa Short-Term Care",
    "reraStandard": "Luxury Villa Hospitality Protocols",
    "description": "Specialized rapid-response pool heating/cooling checks, BBQ gas refills, and outdoor patio furniture cleaning between luxury villa guest arrivals.",
    "deliverables": [
      "Daily Outdoor Terrace & Sunbed Pressure Clean Checks",
      "Pool Temperature Pre-Heating to 29°C Prior to Guest Arrival",
      "BBQ Grill Cleaning & Gas Cylinder Replacement",
      "Outdoor Sound System Bluetooth Pairing Verification"
    ],
    "timeframe": "Per Villa Stay",
    "pricing": {
      "aed": 350,
      "billingType": "Per Incident",
      "label": "AED 350 / Stay"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "hol-011",
    "code": "NST-HOL11",
    "title": "Ultra-Luxury Super-Host VIP Guest Concierge Service",
    "category": "Holiday Home & Short-Term",
    "subCategory": "VIP Concierge",
    "reraStandard": "Les Clefs d'Or Concierge Standards",
    "description": "Dedicated on-demand concierge for high-net-worth guests arranging private chauffeur transfers, yacht charters, private chefs, and VIP club bookings.",
    "deliverables": [
      "Private Luxury Chauffeur Airport Pick-Up & Drop-Off",
      "In-Villa Private Chef & Butler Booking Coordination",
      "VIP Desert Safari & Luxury Yacht Charter Reservations",
      "Bespoke Personalized Itinerary Curation"
    ],
    "timeframe": "On-Demand VIP Service",
    "pricing": {
      "aed": 15,
      "billingType": "Annual % of Rent",
      "label": "15% Service Markup"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "hol-012",
    "code": "NST-HOL12",
    "title": "Monthly Audited Owner Short-Term Revenue & Payout Statement",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Financial Reporting",
    "reraStandard": "IFRS Short-Term Hospitality Accounting",
    "description": "Transparent monthly financial statements detailing every booking, ADR (Average Daily Rate), RevPAR, cleaning fees, VAT, and net profit wire transfers.",
    "deliverables": [
      "Comprehensive Booking-by-Booking Revenue Ledger",
      "Gross Revenue, Platform Fees & Net Owner Payout Breakdown",
      "Official VAT 5% & Tourism Dirham Tax Schedules",
      "Direct Multi-Currency Bank Wire by 7th of Every Month"
    ],
    "timeframe": "Monthly Owner Report",
    "pricing": {
      "aed": 250,
      "billingType": "Fixed Annual Fee",
      "label": "Included in Full PM"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "hol-013",
    "code": "NST-HOL13",
    "title": "Holiday Home VAT 5% FTA Compliance & Electronic Filing",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Tax Compliance",
    "reraStandard": "Federal Tax Authority (FTA) E-Services",
    "description": "Complete bookkeeping and quarterly VAT return filings with the Federal Tax Authority for short-term rental properties exceeding mandatory thresholds.",
    "deliverables": [
      "Quarterly FTA VAT Return Computation & Submission",
      "Input Tax Credit Recovery on Linen & Cleaning Expenses",
      "Tax Invoice Generation for Corporate Guest Bookings",
      "Official FTA Audit-Proof Digital Record Archive"
    ],
    "timeframe": "Quarterly VAT Filing",
    "pricing": {
      "aed": 750,
      "billingType": "Fixed Annual Fee",
      "label": "AED 750 / Quarter"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "hol-014",
    "code": "NST-HOL14",
    "title": "Holiday Home Winter Season Pre-Booking Strategy (Oct–Apr)",
    "category": "Holiday Home & Short-Term",
    "subCategory": "High-Season Yield",
    "reraStandard": "Dubai Tourism Peak Season Index",
    "description": "Strategic advance rate locking for winter peak tourism months, securing high-paying international guests and maximizing gross annual revenues.",
    "deliverables": [
      "6-Month Advance Yield Optimization Matrix Execution",
      "Premium Minimum Stay Rules (5-7 Nights) Over Festive Holidays",
      "Pre-Booked Revenue Guarantees for Prime Waterfront Units",
      "Capture of 60% of Annual Revenue in 5 Winter Months"
    ],
    "timeframe": "Seasonal Campaign",
    "pricing": {
      "aed": 18,
      "billingType": "Annual % of Rent",
      "label": "Included in 18% Management Tier"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "hol-015",
    "code": "NST-HOL15",
    "title": "Holiday Home Summer Long-Stay Bridge Strategy (Jun–Aug)",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Low-Season Yield",
    "reraStandard": "Dubai Summer Hospitality Tactics",
    "description": "Mitigating summer occupancy drops by transitioning to 1-2 month discounted stays for GCC tourists, renovation decants, and medical tourists.",
    "deliverables": [
      "Automated Transition to 30-Day Monthly Rates for Summer",
      "Targeted GCC Marketing for Summer Family Visitors",
      "Utility Subsidy Fair-Usage Cap Activation",
      "Year-Round 82%+ Average Occupancy Rate Realization"
    ],
    "timeframe": "Seasonal Campaign",
    "pricing": {
      "aed": 15,
      "billingType": "Annual % of Rent",
      "label": "Included in Full PM"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "hol-016",
    "code": "NST-HOL16",
    "title": "Smart Noise & Party Sensor Monitoring (Minut / NoiseAware)",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Party Prevention",
    "reraStandard": "Master Community Noise Regulations",
    "description": "Installation and 24/7 monitoring of privacy-safe noise decibel sensors that alert the dispatch team before neighbors complain about unauthorized parties.",
    "deliverables": [
      "100% Privacy-Compliant Decibel (dB) Monitoring (No Audio Recording)",
      "Automated SMS Warning to Guests When Sound Exceeds Threshold",
      "Security Dispatch Call to Property Within 15 Minutes if Ignored",
      "Elimination of HOA Noise Fines and Community Disputes"
    ],
    "timeframe": "Supply & Annual Monitoring",
    "pricing": {
      "aed": 850,
      "billingType": "Fixed Annual Fee",
      "label": "AED 850 / Year"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "hol-017",
    "code": "NST-HOL17",
    "title": "Luggage Storage & Early Check-In / Late Check-Out Service",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Guest Convenience",
    "reraStandard": "Hospitality Logistics Protocols",
    "description": "Convenient luggage drop-off facilities and algorithmic gap monetization selling early arrivals (10 AM) and late departures (6 PM) to guests.",
    "deliverables": [
      "Automated Unoccupied Hours Gap Monetization Engine",
      "Secure Digital Locker Luggage Storage Coordination",
      "Same-Day Housekeeping Rescheduling for Early Check-Ins",
      "Additional 5% Incremental Revenue Generation for Landlords"
    ],
    "timeframe": "Per Add-On Request",
    "pricing": {
      "aed": 150,
      "billingType": "Per Incident",
      "label": "AED 150 / Request"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "hol-018",
    "code": "NST-HOL18",
    "title": "Holiday Home Kitchenware & Crockery Full Replenishment Set",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Kitchen Inventory",
    "reraStandard": "Holiday Rental Kitchen Standards",
    "description": "Complete replacement of scratched pans, chipped mugs, cutlery, and wine glasses ensuring every new guest experiences pristine 5-star dining ware.",
    "deliverables": [
      "Non-Stick Granite Cookware Set (Pots, Pans & Lids)",
      "Porcelain Dinnerware Set for 6-8 Persons",
      "Full Stainless Steel Cutlery & Chef Knife Block",
      "Nespresso Compatible Coffee Machine & Electric Kettle"
    ],
    "timeframe": "Turnkey Replacement Kit",
    "pricing": {
      "aed": 1850,
      "billingType": "Per Incident",
      "label": "AED 1,850 / Complete Kit"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "hol-019",
    "code": "NST-HOL19",
    "title": "Baby & Family Amenity Kit (Crib, Highchair & Stroller)",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Family Friendly",
    "reraStandard": "EU/US Juvenile Safety Standards",
    "description": "Providing certified clean baby cribs, highchairs, safety gates, and strollers for family travelers, increasing family booking rates by 28%.",
    "deliverables": [
      "Safety-Certified Wooden Folding Baby Crib with Fresh Mattress",
      "Sanitized Adjustable Baby Highchair with Safety Harness",
      "Lightweight City Stroller Available on Demand",
      "Socket Safety Plugs & Corner Edge Protectors Installed"
    ],
    "timeframe": "Per Booking Rental",
    "pricing": {
      "aed": 120,
      "billingType": "Per Incident",
      "label": "AED 120 / Stay"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "hol-020",
    "code": "NST-HOL20",
    "title": "Guest Welcome Digital Tablet (TouchStay) Hardware & SaaS",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Digital Concierge",
    "reraStandard": "Interactive Smart Tablet Standards",
    "description": "Wall-mounted or tabletop interactive Android tablet with 1-click WiFi connection, air-conditioning guides, emergency numbers, and local food delivery.",
    "deliverables": [
      "Custom Branded TouchStay Interactive Guidebook Tablet",
      "Instant QR Code Connection to High-Speed WiFi",
      "Building Amenities (Pool, Gym) Access Cards & Hours Guide",
      "Direct Emergency WhatsApp Dispatch Button"
    ],
    "timeframe": "Supply & Setup",
    "pricing": {
      "aed": 950,
      "billingType": "Per Incident",
      "label": "AED 950 / Tablet Installed"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "hol-021",
    "code": "NST-HOL21",
    "title": "Holiday Home Commercial General Liability Insurance (AED 5M)",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Short-Term Insurance",
    "reraStandard": "UAE Insurance Authority Short-Term Mandates",
    "description": "Comprehensive commercial general liability policy covering guest bodily injury, pool accidents, accidental fire, and water overflow damage.",
    "deliverables": [
      "AED 5,000,000 Third-Party Bodily Injury & Property Damage Cover",
      "Swimming Pool & Balcony Accidental Fall Protection",
      "Accidental Fire & Water Leak Damage to Neighboring Units",
      "Direct Legal Defense & Settlement Representation"
    ],
    "timeframe": "Annual Insurance Policy",
    "pricing": {
      "aed": 1650,
      "billingType": "Fixed Annual Fee",
      "label": "AED 1,650 / Year"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "hol-022",
    "code": "NST-HOL22",
    "title": "Multi-Unit Aparthotel & Short-Term Building Master Mandate",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Full Building Short-Term",
    "reraStandard": "DET Serviced Apartment License Standards",
    "description": "Operating entire boutique residential buildings as high-yield serviced aparthotels with centralized reception, luggage desk, and daily linen logistics.",
    "deliverables": [
      "Centralized Ground Floor Lobby Reception Desk Staffing",
      "Commercial Laundry & Bulk Linen Logistics Coordination",
      "Unified Multi-Channel Channel Manager Engine",
      "Institutional Monthly EBITDA Distribution Statements"
    ],
    "timeframe": "Institutional Short-Term Mandate",
    "pricing": {
      "aed": 16,
      "billingType": "Annual % of Rent",
      "label": "15%–18% of Gross Revenue"
    },
    "propertyType": "Full Building Portfolio",
    "popular": true
  },
  {
    "id": "hol-023",
    "code": "NST-HOL23",
    "title": "Luxury Welcome Wine, Cheese & Fruit Basket Service",
    "category": "Holiday Home & Short-Term",
    "subCategory": "VIP Amenities",
    "reraStandard": "Luxury Villa Welcome Protocols",
    "description": "Curated sparkling fruit juices, European artisan cheeses, exotic fruits, and Belgian chocolates prepared prior to VIP guest arrival.",
    "deliverables": [
      "Imported Sparkling Juice & Non-Alcoholic Champagne Bottles",
      "Artisanal Cheese Board with Crackers & Dried Figs",
      "Fresh Exotic Fruit Basket (Mangos, Berries, Grapes)",
      "Bespoke Handwritten Welcome Card with Owner Compliments"
    ],
    "timeframe": "Per VIP Arrival",
    "pricing": {
      "aed": 280,
      "billingType": "Per Incident",
      "label": "AED 280 / Basket"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "hol-024",
    "code": "NST-HOL24",
    "title": "Holiday Home Smoke, Carbon Monoxide & Gas Leak Safety Kit",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Guest Safety",
    "reraStandard": "Civil Defense & International Host Standards",
    "description": "Installation of interconnected wireless photoelectric smoke alarms, carbon monoxide detectors in kitchens, gas leak sensors, and fire blankets.",
    "deliverables": [
      "Interconnected Optical Smoke Detectors in Every Bedroom",
      "Digital Carbon Monoxide (CO) Detector Near Boilers/Kitchen",
      "Kitchen Fire Blanket & 2kg Dry Powder Extinguisher",
      "Emergency Floor Egress Map Placed on Bedroom Doors"
    ],
    "timeframe": "Supply & Installation",
    "pricing": {
      "aed": 750,
      "billingType": "Per Incident",
      "label": "AED 750 / Full Kit"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "hol-025",
    "code": "NST-HOL25",
    "title": "Off-Peak Seasonal Maintenance & Deep Refurbishment Month",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Asset Longevity",
    "reraStandard": "Nestora Preventive Refurbishment Cycle",
    "description": "Scheduling annual 10-day maintenance blocks during low-demand July/August to deep clean grout, repaint scuffed walls, and descale AC coils without lost income.",
    "deliverables": [
      "Full Interior Re-Painting of Scuffed Walls & Baseboards",
      "Deep Marble Floor Crystallization & Grout Bleaching",
      "Complete AC Evaporator Coil Chemical Cleansing",
      "Upholstery & Mattress Sanitization at 140°C"
    ],
    "timeframe": "Annual Refurbishment",
    "pricing": {
      "aed": 2800,
      "billingType": "Per Incident",
      "label": "Starting from AED 2,800"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "hol-026",
    "code": "NST-HOL26",
    "title": "Full Hands-Off Holiday Home Master Asset Stewardship",
    "category": "Holiday Home & Short-Term",
    "subCategory": "Master Holiday Mandate",
    "reraStandard": "Nestora Premium Holiday Flagship",
    "description": "Complete end-to-end management combining DET licensing, 24/7 pricing algorithms, 5-star housekeeping, guest concierge, and monthly tax filings.",
    "deliverables": [
      "All DET Permits, QR Codes & Tourism Dirham Filings Managed",
      "Listing Syndication Across Airbnb, Booking.com, VRBO & Marriott",
      "Hotel-Grade Linens, Housekeeping & Smart Keyless Lock System",
      "Monthly Net Revenue Wire Remittances with Full P&L Ledgers"
    ],
    "timeframe": "Annual Master Mandate",
    "pricing": {
      "aed": 18,
      "billingType": "Annual % of Rent",
      "label": "18% of Gross Rental Revenue"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "fin-001",
    "code": "NST-FIN01",
    "title": "Automated Monthly Landlord Income & Expense P&L Statement",
    "category": "Financial & Asset Accounting",
    "subCategory": "Financial Reporting",
    "reraStandard": "IFRS & UAE Financial Reporting Standards",
    "description": "Comprehensive monthly financial reporting itemizing gross rental receipts, service charges, maintenance expenses, and net profit with electronic bank disbursement.",
    "deliverables": [
      "Itemized Monthly Income Statement with Invoice Attachments",
      "Automated Bank Transfer of Net Rent by 5th of Each Month",
      "Year-to-Date Cashflow Comparison vs Historical Benchmarks",
      "Secure 24/7 Digital Landlord Financial Dashboard Access"
    ],
    "timeframe": "Monthly Accounting Service",
    "pricing": {
      "aed": 250,
      "billingType": "Fixed Annual Fee",
      "label": "Included Free in Full PM"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "fin-002",
    "code": "NST-FIN02",
    "title": "UAE Corporate Tax (9%) Real Estate Investment Assessment",
    "category": "Financial & Asset Accounting",
    "subCategory": "Corporate Tax 9%",
    "reraStandard": "Federal Decree-Law No. 47/2022 on Corporate Tax",
    "description": "Tax classification analysis for corporate and high-net-worth individual landlords to determine whether real estate income is taxable or exempt under Cabinet Decision No. 49/2023.",
    "deliverables": [
      "Natural Person vs Commercial Business Activity Qualification Check",
      "Cabinet Decision No. 49/2023 Individual Real Estate Exemption Audit",
      "AED 375,000 Statutory Profit Exemption Modeling",
      "Corporate Tax Registration & Annual Filing Pre-Clearance Dossier"
    ],
    "timeframe": "Per Tax Assessment",
    "pricing": {
      "aed": 1800,
      "billingType": "Per Incident",
      "label": "AED 1,800 / Evaluation"
    },
    "propertyType": "Commercial Office",
    "popular": true
  },
  {
    "id": "fin-003",
    "code": "NST-FIN03",
    "title": "Commercial Lease VAT 5% Invoicing & FTA Return Filing",
    "category": "Financial & Asset Accounting",
    "subCategory": "VAT Accounting",
    "reraStandard": "Federal Decree-Law No. 8 of 2017 on Value Added Tax",
    "description": "Generation of FTA-compliant Tax Invoices for commercial offices, warehouses, and retail leases, including quarterly VAT return submissions and input tax reclamation.",
    "deliverables": [
      "Compliant Tax Invoice Generation with Landlord TRN Number",
      "Quarterly FTA VAT 201 Return Calculation & Electronic Filing",
      "Input VAT Recovery on Maintenance, AMC & Fit-Out Expenses",
      "Audited FTA Tax Invoice Digital Archive Maintenance"
    ],
    "timeframe": "Quarterly VAT Accounting",
    "pricing": {
      "aed": 850,
      "billingType": "Fixed Annual Fee",
      "label": "AED 850 / Quarter"
    },
    "propertyType": "Commercial Office",
    "popular": true
  },
  {
    "id": "fin-004",
    "code": "NST-FIN04",
    "title": "RERA Mollak System Service Charge Verification & Reconciliation",
    "category": "Financial & Asset Accounting",
    "subCategory": "Mollak Accounting",
    "reraStandard": "Dubai Law No. 6 of 2019 on Jointly Owned Property",
    "description": "Verification of developer and Owners Association service charge statements against the approved RERA Mollak index before authorizing landlord payment.",
    "deliverables": [
      "Official RERA Mollak Approved Rate per Sqft Cross-Check",
      "Identification of Unauthorized Chiller & Sinking Fund Overcharges",
      "Direct Payment Processing to Mollak Escrow Account",
      "Service Charge Overpayment Credit Note Recovery from OA"
    ],
    "timeframe": "Annual Service Charge Audit",
    "pricing": {
      "aed": 450,
      "billingType": "Per Incident",
      "label": "AED 450 / Property"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "fin-005",
    "code": "NST-FIN05",
    "title": "Multi-Currency Cross-Border Landlord Wire Remittance Engine",
    "category": "Financial & Asset Accounting",
    "subCategory": "International Banking",
    "reraStandard": "UAE Central Bank AML/CFT Regulations",
    "description": "Seamless automated conversion of AED rental proceeds into USD, EUR, GBP, or CHF with institutional-grade FX exchange rates and low-cost SWIFT wires.",
    "deliverables": [
      "Institutional Wholesale FX Conversion Rates (Sub-0.25% Spread)",
      "Automated SWIFT Wire Remittances to Global Landlord Accounts",
      "Full Central Bank AML/KYC Source of Funds Documentation",
      "Zero Receiving Bank Intermediary Deduction Optimizations"
    ],
    "timeframe": "Per Wire Remittance",
    "pricing": {
      "aed": 75,
      "billingType": "Per Incident",
      "label": "AED 75 / Wire Transfer"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "fin-006",
    "code": "NST-FIN06",
    "title": "Landlord Security Deposit Escrow Account Administration",
    "category": "Financial & Asset Accounting",
    "subCategory": "Deposit Escrow",
    "reraStandard": "Dubai Law No. 26/2007 Article 20",
    "description": "Segregated ring-fenced bank escrow custody of tenant security deposits ensuring funds are secure, auditable, and released swiftly upon legal move-out sign-off.",
    "deliverables": [
      "Dedicated Ring-Fenced Escrow Account Deposit Custody",
      "Automated Electronic Deposit Receipt Issuance to Tenants",
      "Itemized Dilapidation Deductions Accounting with Photo Proof",
      "Instant Wire Refund to Outgoing Tenant Upon Landlord Sign-Off"
    ],
    "timeframe": "Per Tenancy Lifecycle",
    "pricing": {
      "aed": 150,
      "billingType": "Per Incident",
      "label": "Included in Full PM"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "fin-007",
    "code": "NST-FIN07",
    "title": "Annual Multi-Year Capital Expenditure (CapEx) Reserve Planning",
    "category": "Financial & Asset Accounting",
    "subCategory": "CapEx Reserve Planning",
    "reraStandard": "RICS Property Life Cycle Costing Standards",
    "description": "Strategic 5 to 10-year capital expenditure forecast modeling required replacements for HVAC chillers, elevators, roofs, and exterior repainting.",
    "deliverables": [
      "10-Year Component Life Expectancy & Depreciation Schedule",
      "Annual Sinking Fund Contribution Recommendation Matrix",
      "Life Cycle Cost Optimization Lowering Total Ownership Expense",
      "Emergency Unplanned CapEx Contingency Allocation Strategy"
    ],
    "timeframe": "Per Property Study",
    "pricing": {
      "aed": 2200,
      "billingType": "Per Incident",
      "label": "AED 2,200 / Asset Study"
    },
    "propertyType": "Full Building Portfolio",
    "popular": false
  },
  {
    "id": "fin-008",
    "code": "NST-FIN08",
    "title": "Tenant Rent Payment Arrears Recovery & Default Debt Desk",
    "category": "Financial & Asset Accounting",
    "subCategory": "Debt Recovery",
    "reraStandard": "UAE Civil Debt Recovery Legal Framework",
    "description": "Rigorous automated reminders, telephone follow-ups, and formal demand letters collecting delayed rental payments and late penalty fees.",
    "deliverables": [
      "Day-1 Automated SMS & Email Overdue Payment Reminders",
      "Day-7 Dedicated Credit Controller Direct Telephone Engagement",
      "Day-15 Formal Legal Demand Letter Formulation",
      "99.2% On-Time Rent Collection Success Rate Across Portfolios"
    ],
    "timeframe": "Default Debt Desk",
    "pricing": {
      "aed": 5,
      "billingType": "Annual % of Rent",
      "label": "5% of Recovered Delinquent Sum"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "fin-009",
    "code": "NST-FIN09",
    "title": "Overseas Landlord Tax Country-Specific Depreciation Report",
    "category": "Financial & Asset Accounting",
    "subCategory": "International Tax",
    "reraStandard": "UK HMRC / US IRS / EU Real Estate Tax Frameworks",
    "description": "End-of-year standardized accounting schedules formatted for overseas accountants (e.g., UK Non-Resident Landlord Scheme, US Schedule E, French LMNP).",
    "deliverables": [
      "Country-Specific Itemized Expense & Depreciation Schedule",
      "UK HMRC Self-Assessment Non-Resident Landlord Summary",
      "US IRS Schedule E Form 1040 Compatible Tax Dossier",
      "Official Certified Statement of Gross and Net Rental Revenue"
    ],
    "timeframe": "Annual Tax Dossier",
    "pricing": {
      "aed": 1200,
      "billingType": "Per Incident",
      "label": "AED 1,200 / Tax Year"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "fin-010",
    "code": "NST-FIN10",
    "title": "Commercial Tenant Turnover Rent & Overage Audit Verification",
    "category": "Financial & Asset Accounting",
    "subCategory": "Retail Revenue Audits",
    "reraStandard": "International Council of Shopping Centers (ICSC)",
    "description": "Auditing Point-of-Sale (POS) cash register records and audited sales statements for retail and F&B tenants paying base rent plus percentage of sales.",
    "deliverables": [
      "Quarterly POS Gross Sales Ledger Audit & Data Extraction",
      "Base Rent vs Percentage Overage Mathematical Calculation",
      "Formal Overage Rent Invoice Formulation and Collection",
      "Independent Spot-Check Audit of Tenant VAT Return Records"
    ],
    "timeframe": "Quarterly Turnover Audit",
    "pricing": {
      "aed": 1500,
      "billingType": "Fixed Annual Fee",
      "label": "AED 1,500 / Quarter"
    },
    "propertyType": "Retail Shop",
    "popular": false
  },
  {
    "id": "fin-011",
    "code": "NST-FIN11",
    "title": "Commercial Property Utility Sub-Meter Reconciliation Engine",
    "category": "Financial & Asset Accounting",
    "subCategory": "Sub-Meter Accounting",
    "reraStandard": "District Cooling Regulatory Guidelines",
    "description": "Accurate mathematical allocation of bulk building DEWA power, domestic water, and district cooling invoices across multiple tenant sub-meters.",
    "deliverables": [
      "Monthly Sub-Meter Pulse & BTU Meter Reading Data Verification",
      "Pro-Rata Common Area Utility Factor Allocation Calculations",
      "Direct Tenant Billing & Revenue Recovery Collection",
      "Zero Energy Cost Slippage for Property Owners"
    ],
    "timeframe": "Monthly Reconciliation",
    "pricing": {
      "aed": 450,
      "billingType": "Fixed Annual Fee",
      "label": "AED 450 / Month per Building"
    },
    "propertyType": "Commercial Office",
    "popular": false
  },
  {
    "id": "fin-012",
    "code": "NST-FIN12",
    "title": "Annual Portfolio Valuation & Net Asset Value (NAV) Benchmarking",
    "category": "Financial & Asset Accounting",
    "subCategory": "Asset Valuation",
    "reraStandard": "RICS Red Book Global Valuation Standards",
    "description": "Formal portfolio valuation assessing capital appreciation, current market liquidation value, and yield compression trends across UAE holdings.",
    "deliverables": [
      "RICS-Compliant Comparative Market Analysis (CMA) Report",
      "Discounted Cash Flow (DCF) 10-Year Yield Modeling",
      "Bank Re-Financing & Equity Extraction Valuation Support",
      "Consolidated Net Asset Value (NAV) Executive Presentation"
    ],
    "timeframe": "Annual Portfolio Audit",
    "pricing": {
      "aed": 3500,
      "billingType": "Per Incident",
      "label": "Starting from AED 3,500"
    },
    "propertyType": "Full Building Portfolio",
    "popular": false
  },
  {
    "id": "fin-013",
    "code": "NST-FIN13",
    "title": "Mortgage Refinancing & Equity Release Financial Modeling",
    "category": "Financial & Asset Accounting",
    "subCategory": "Debt Optimization",
    "reraStandard": "UAE Central Bank Loan-to-Value (LTV) Rules",
    "description": "Financial analysis comparing existing mortgage terms against prime UAE bank offers, modeling interest savings and cash-out equity release for reinvestment.",
    "deliverables": [
      "Current Mortgage Amortization Schedule & EIBOR Spread Review",
      "Comparative Matrix of Top 5 UAE Commercial Mortgage Lenders",
      "Net Cash Savings & Equity Release Capacity Modeling Dossier",
      "Bank Mortgage Application Financial File Compilation Support"
    ],
    "timeframe": "Per Refinancing Mandate",
    "pricing": {
      "aed": 2500,
      "billingType": "Per Incident",
      "label": "AED 2,500 Base + Success Fee"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "fin-014",
    "code": "NST-FIN14",
    "title": "Joint Venture & Syndicate Investor Dividend Waterfall Accounting",
    "category": "Financial & Asset Accounting",
    "subCategory": "Syndicate Distribution",
    "reraStandard": "Private Equity Real Estate Standards",
    "description": "Complex multi-tier equity waterfall distribution calculations (preferred return, catch-up, and carried interest splits) for property investment syndicates.",
    "deliverables": [
      "Multi-Tier Preferred Return & Carried Interest Waterfall Modeling",
      "Individual Investor Capital Account & Tax Ledger Maintenance",
      "Automated Pro-Rata Dividend Bank Wire Distribution",
      "Quarterly General Partner (GP) / Limited Partner (LP) Reports"
    ],
    "timeframe": "Quarterly Syndicate Accounting",
    "pricing": {
      "aed": 2800,
      "billingType": "Fixed Annual Fee",
      "label": "AED 2,800 / Quarter"
    },
    "propertyType": "Full Building Portfolio",
    "popular": false
  },
  {
    "id": "fin-015",
    "code": "NST-FIN15",
    "title": "Property Insurance Premium Sourcing & Claim Recovery Accounting",
    "category": "Financial & Asset Accounting",
    "subCategory": "Insurance Administration",
    "reraStandard": "UAE Insurance Authority Directives",
    "description": "Annual competitive tendering of property building and loss-of-rent insurance policies, and full financial accounting of damage claim reimbursements.",
    "deliverables": [
      "Annual 3-Quote Competitive Insurance Premium Tendering",
      "Comprehensive Property All-Risk & Loss of Rent Policy Sourcing",
      "Insurance Adjuster Financial Loss Dossier Compilation",
      "100% Tracking of Insurance Claim Payouts to Landlord Bank"
    ],
    "timeframe": "Annual Insurance Mandate",
    "pricing": {
      "aed": 650,
      "billingType": "Fixed Annual Fee",
      "label": "AED 650 / Year (Free in Full PM)"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "fin-016",
    "code": "NST-FIN16",
    "title": "Landlord Estate Succession & Inheritance Asset Valuation",
    "category": "Financial & Asset Accounting",
    "subCategory": "Estate Succession",
    "reraStandard": "Dubai Courts & DIFC Probate Rules",
    "description": "Certified asset valuation and ledger compilation required for Dubai Courts or DIFC Courts probate execution when transferring properties to legal heirs.",
    "deliverables": [
      "Certified Dubai Court-Admissible Real Estate Valuation Dossier",
      "Historical Rental Income & Asset Debt Ledger Compilation",
      "DLD Transfer Fee & Municipal Fee Financial Estimation",
      "Smooth Succession Bank Account Unfreezing Financial File"
    ],
    "timeframe": "Per Estate File",
    "pricing": {
      "aed": 3000,
      "billingType": "Per Incident",
      "label": "AED 3,000 / Estate File"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "fin-017",
    "code": "NST-FIN17",
    "title": "Tenancy Advance Rent Discounting & Accelerated Cashout",
    "category": "Financial & Asset Accounting",
    "subCategory": "Rent Advance Liquidity",
    "reraStandard": "UAE Fintech Working Capital Framework",
    "description": "Unlocking 100% of annual rental revenue upfront in a single lump-sum payout, eliminating reliance on multi-cheque waiting periods.",
    "deliverables": [
      "Instant Upfront 100% Annual Rent Lump-Sum Disbursement",
      "Tenant Continuous Multi-Cheque / Direct Debit Servicing",
      "Immediate Liquidity for Landlord Reinvestment or CapEx Needs",
      "Transparent Fixed Factoring Fee with Zero Hidden Interest"
    ],
    "timeframe": "Per Financing Transaction",
    "pricing": {
      "aed": 3.5,
      "billingType": "Annual % of Rent",
      "label": "3.5% Factoring Discount Fee"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "fin-018",
    "code": "NST-FIN18",
    "title": "Commercial Fit-Out Security Deposit & Restoration Bond Escrow",
    "category": "Financial & Asset Accounting",
    "subCategory": "Fit-Out Bond Escrow",
    "reraStandard": "Commercial Leasing Standards",
    "description": "Management of tenant fit-out security deposits, conducting milestone inspections before releasing contractor funds upon approved completion.",
    "deliverables": [
      "Fit-Out Security Bond Ring-Fenced Escrow Account Custody",
      "Pre-Fit-Out & Post-Fit-Out Milestone Architectural Inspections",
      "Itemized Deduction for Common Area Corridor/Lift Damage",
      "Formal Security Deposit Clearance Certificate & Wire Refund"
    ],
    "timeframe": "Per Fit-Out Mandate",
    "pricing": {
      "aed": 850,
      "billingType": "Per Incident",
      "label": "AED 850 / Project"
    },
    "propertyType": "Commercial Office",
    "popular": false
  },
  {
    "id": "fin-019",
    "code": "NST-FIN19",
    "title": "DLD Service Charge Overpayment Legal Recovery Action",
    "category": "Financial & Asset Accounting",
    "subCategory": "Service Charge Recovery",
    "reraStandard": "RERA Mollak Law No. 6/2019",
    "description": "Formal accounting audit and legal petition recovering historic unauthorized service charges and chiller fees billed by developers over the past 3 years.",
    "deliverables": [
      "3-Year Historic Service Charge Invoice & Mollak Index Forensic Audit",
      "Quantification of Unauthorized Chiller & Sinking Fund Charges",
      "Formal Demand Filing with DLD Jointly Owned Property Section",
      "Direct Credit Note or Cash Refund Enforcement Support"
    ],
    "timeframe": "Per Recovery Audit",
    "pricing": {
      "aed": 1500,
      "billingType": "Per Incident",
      "label": "AED 1,500 + 10% Recovery Fee"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "fin-020",
    "code": "NST-FIN20",
    "title": "Year-End Audited Financial Statements for Family Offices",
    "category": "Financial & Asset Accounting",
    "subCategory": "Institutional Audit",
    "reraStandard": "Big-4 Audit Compliance Standards",
    "description": "Consolidated balance sheet, income statement, and notes to accounts prepared for third-party external auditors (PwC, KPMG, EY, Deloitte).",
    "deliverables": [
      "Complete General Ledger & Trial Balance Preparation",
      "Bank Reconciliation Statements & Cheque Clearing Verification",
      "Fixed Asset Register with Straight-Line Depreciation Schedules",
      "Direct Liaison with Appointed Independent External Auditor"
    ],
    "timeframe": "Annual Audit Mandate",
    "pricing": {
      "aed": 4500,
      "billingType": "Fixed Annual Fee",
      "label": "AED 4,500 / Portfolio"
    },
    "propertyType": "Full Building Portfolio",
    "popular": true
  },
  {
    "id": "fin-021",
    "code": "NST-FIN21",
    "title": "Abu Dhabi Property Municipality Fee & ADDC Reconciliation",
    "category": "Financial & Asset Accounting",
    "subCategory": "Abu Dhabi Accounting",
    "reraStandard": "Abu Dhabi Department of Finance Directives",
    "description": "Monthly verification and payment of Abu Dhabi Municipality 5% residential fee, ADDC utility bills, and Aldar master community infrastructure charges.",
    "deliverables": [
      "ADDC Water & Electricity Automated Bill Audit & Payment",
      "Abu Dhabi Municipality 5% Expat Housing Fee Reconciliation",
      "Aldar / Master Developer Infrastructure Fee Verification",
      "Unified Monthly Abu Dhabi Asset Cashflow Dossier"
    ],
    "timeframe": "Monthly Accounting Service",
    "pricing": {
      "aed": 200,
      "billingType": "Fixed Annual Fee",
      "label": "AED 200 / Month"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "fin-022",
    "code": "NST-FIN22",
    "title": "Commercial Multi-Tenant CAM (Common Area Maintenance) True-Up",
    "category": "Financial & Asset Accounting",
    "subCategory": "CAM Accounting",
    "reraStandard": "BOMA Standard Methods of Floor Measurement",
    "description": "Annual true-up calculations reconciling budgeted vs actual common area expenses (security, cleaning, landscaping) across office and retail tenants.",
    "deliverables": [
      "Year-End Actual vs Budgeted CAM Expenditure Audit",
      "Tenant-by-Tenant Leasable Square Footage Ratio Allocation",
      "Formal CAM True-Up Invoicing for Shortfalls / Credits for Surpluses",
      "Transparent Audit-Proof Supporting Invoices Dossier"
    ],
    "timeframe": "Annual CAM True-Up",
    "pricing": {
      "aed": 1800,
      "billingType": "Fixed Annual Fee",
      "label": "AED 1,800 / Building"
    },
    "propertyType": "Commercial Office",
    "popular": false
  },
  {
    "id": "fin-023",
    "code": "NST-FIN23",
    "title": "Landlord Real Estate Holding Company (SPV) Corporate Setup",
    "category": "Financial & Asset Accounting",
    "subCategory": "Holding SPV Structuring",
    "reraStandard": "ADGM / DIFC / RAK ICC Corporate Framework",
    "description": "Financial and corporate structuring to hold UAE property portfolios inside ADGM, DIFC, or RAK ICC Special Purpose Vehicles for asset protection and succession.",
    "deliverables": [
      "ADGM / DIFC / RAK ICC Real Estate Holding SPV Structuring",
      "DLD Real Estate Holding Company Corporate Registration",
      "Asset Transfer & Title Deed Consolidation Tax Planning",
      "Enhanced Corporate Asset Protection Shield Execution"
    ],
    "timeframe": "Per SPV Setup",
    "pricing": {
      "aed": 12500,
      "billingType": "Per Incident",
      "label": "Starting from AED 12,500 + Govt Fees"
    },
    "propertyType": "Full Building Portfolio",
    "popular": true
  },
  {
    "id": "fin-024",
    "code": "NST-FIN24",
    "title": "Property Management Performance KPI & Yield Benchmarking",
    "category": "Financial & Asset Accounting",
    "subCategory": "Asset Intelligence",
    "reraStandard": "Real Estate Financial Modeling (REFM)",
    "description": "Quarterly executive performance reports comparing portfolio occupancy, rent per sqft, expense ratios, and net yields against Dubai market top percentiles.",
    "deliverables": [
      "Quarterly Gross Yield, Net Yield & Expense Ratio Metrics",
      "Submarket Rent/Sqft Benchmarking vs REIDIN / CBRE Indices",
      "Actionable Recommendations to Compress Operating Expenses",
      "Executive KPI Slide Deck for Board of Directors"
    ],
    "timeframe": "Quarterly KPI Report",
    "pricing": {
      "aed": 950,
      "billingType": "Fixed Annual Fee",
      "label": "AED 950 / Quarter (Free in Full PM)"
    },
    "propertyType": "Full Building Portfolio",
    "popular": false
  },
  {
    "id": "fin-025",
    "code": "NST-FIN25",
    "title": "Multi-Building Consolidated Treasury & Cash Management",
    "category": "Financial & Asset Accounting",
    "subCategory": "Corporate Treasury",
    "reraStandard": "Institutional Cash Management",
    "description": "Centralized treasury management optimizing liquidity, automated PDC banking sweeps, and high-yield Islamic term deposit placements for excess cash reserves.",
    "deliverables": [
      "Daily Cash Position Reporting Across Multi-Property Accounts",
      "Automated Banking Sweeps to High-Yield Corporate Escrow",
      "Short-Term Islamic Term Deposit Yield Optimization (4.5%+ APY)",
      "Strict Segregation of Operating Cash vs Sinking Fund Reserves"
    ],
    "timeframe": "Annual Treasury Mandate",
    "pricing": {
      "aed": 3600,
      "billingType": "Fixed Annual Fee",
      "label": "AED 3,600 / Year"
    },
    "propertyType": "Full Building Portfolio",
    "popular": false
  },
  {
    "id": "fin-026",
    "code": "NST-FIN26",
    "title": "Full-Scope Institutional Asset Accounting Master Mandate",
    "category": "Financial & Asset Accounting",
    "subCategory": "Master Accounting",
    "reraStandard": "Complete UAE Institutional Standards",
    "description": "All-inclusive financial management covering monthly P&Ls, Corporate Tax 9% pre-audit, VAT 5% filing, UAEDDS direct debits, and annual audited dossiers.",
    "deliverables": [
      "All Monthly Landlord P&L Reports & Net Wire Remittances",
      "Full Corporate Tax 9% & VAT 5% Compliance Accounting",
      "Mollak Service Charge & DEWA Sub-Metering Reconciliations",
      "Year-End Audit-Ready Balance Sheet & Fixed Asset Registers"
    ],
    "timeframe": "Annual Master Mandate",
    "pricing": {
      "aed": 4500,
      "billingType": "Fixed Annual Fee",
      "label": "AED 4,500 / Year (or Included in Full PM)"
    },
    "propertyType": "Full Building Portfolio",
    "popular": true
  },
  {
    "id": "sng-001",
    "code": "NST-SNG01",
    "title": "Comprehensive 250-Point Pre-Handover Snagging Inspection",
    "category": "Snagging & Handover",
    "subCategory": "Off-Plan Handover Snagging",
    "reraStandard": "RICS & International Building Code (IBC) Standards",
    "description": "Rigorous pre-handover architectural, MEP, and cosmetic inspection of newly completed off-plan properties before signing developer final handover papers.",
    "deliverables": [
      "250+ Checklist Items Scanned (Joinery, Marble, Plumbing, HVAC)",
      "FLIR Thermal Radiometric Scan for Thermal Leakage & Insulation Gaps",
      "Socket Polarity, Grounding & Voltage Drop Digital Testing",
      "Official RICS-Standard Photographic Snagging Dossier with GPS Data"
    ],
    "timeframe": "24-Hour Express Report",
    "pricing": {
      "aed": 1450,
      "billingType": "Per Unit Handover",
      "label": "AED 1,450 (Apartments) / AED 2,450 (Villas)"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "sng-002",
    "code": "NST-SNG02",
    "title": "Official Developer De-Snagging & Rectification Verification Audit",
    "category": "Snagging & Handover",
    "subCategory": "De-Snagging Verification",
    "reraStandard": "Developer Handover Standards",
    "description": "Follow-up site inspection verifying whether the developer contractor has properly resolved all defects noted in the initial snagging report prior to key collection.",
    "deliverables": [
      "Side-by-Side Verification of Every Initial Defect Item",
      "Sign-Off on Rectified Paint, Joinery & MEP Workmanship",
      "Unresolved Defects Secondary Notice Formulation to Developer",
      "Final Move-In Readiness Endorsement for Property Owner"
    ],
    "timeframe": "Within 48 Hours of Notification",
    "pricing": {
      "aed": 650,
      "billingType": "Per Unit Handover",
      "label": "AED 650 / Verification Visit"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "sng-003",
    "code": "NST-SNG03",
    "title": "Thermal Imaging Infrared Scan for Insulation & Water Ingress",
    "category": "Snagging & Handover",
    "subCategory": "Infrared Diagnostic",
    "reraStandard": "ASTM C1060 Thermal Inspection Standards",
    "description": "Non-destructive thermal imaging identifying hidden water pipe leaks, missing ceiling insulation, window air leakage, and electrical circuit overheating.",
    "deliverables": [
      "Calibrated FLIR High-Resolution Thermal Image Mapping",
      "Building Envelope Thermal Bridge & Cold-Air Loss Quantification",
      "Ceiling & Wall Hidden Moisture Infiltration Level Metering",
      "Comprehensive Thermal Engineering Report with Temperature Deltas"
    ],
    "timeframe": "Same-Day Reporting",
    "pricing": {
      "aed": 650,
      "billingType": "Per Unit Handover",
      "label": "AED 650 / Inspection"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "sng-004",
    "code": "NST-SNG04",
    "title": "Luxury Villa Structural, Roof & Waterproofing Handover Audit",
    "category": "Snagging & Handover",
    "subCategory": "Villa Handover Snagging",
    "reraStandard": "DLD Building Quality Directives",
    "description": "Comprehensive structural inspection for luxury villas covering flat roof ponding, boundary wall expansion joints, swimming pool waterproofing, and garage motors.",
    "deliverables": [
      "Rooftop Waterproofing Membrane & Rainwater Drainage Audit",
      "Villa Perimeter Boundary Wall & Structural Column Crack Scans",
      "Swimming Pool Shell, Skimmers & Pump Room Mechanical Check",
      "Exterior Facade Stone Cladding Mechanical Anchor Testing"
    ],
    "timeframe": "48-Hour Detailed Dossier",
    "pricing": {
      "aed": 2800,
      "billingType": "Per Unit Handover",
      "label": "Starting from AED 2,800 / Villa"
    },
    "propertyType": "Villa / Townhouse",
    "popular": true
  },
  {
    "id": "sng-005",
    "code": "NST-SNG05",
    "title": "Developer 1-Year Defect Liability Period (DLP) Warranty Claims",
    "category": "Snagging & Handover",
    "subCategory": "DLP Warranty Management",
    "reraStandard": "UAE Civil Code Article 880 (1-Year DLP)",
    "description": "Managing all warranty claims during the developer statutory 12-month DLP period, compelling the developer contractor to fix emerging cracks and MEP failures for free.",
    "deliverables": [
      "Quarterly Comprehensive DLP On-Site Warranty Inspection Audits",
      "Formal Legal Defect Claim Dossiers Submitted to Developer",
      "Coordination & Supervision of Developer Contractor Rectification Teams",
      "Final Month-11 Pre-DLP Expiration Comprehensive Exit Audit"
    ],
    "timeframe": "Annual DLP Mandate",
    "pricing": {
      "aed": 2200,
      "billingType": "Fixed Annual Fee",
      "label": "AED 2,200 / Year"
    },
    "propertyType": "Apartment",
    "popular": true
  },
  {
    "id": "sng-006",
    "code": "NST-SNG06",
    "title": "10-Year Decennial Structural Latent Defect Audit (UAE Civil Code)",
    "category": "Snagging & Handover",
    "subCategory": "Decennial Liability",
    "reraStandard": "UAE Civil Transactions Law Article 880 (Decennial Liability)",
    "description": "Engineering assessment of structural integrity, foundation settlement, concrete carbonation, and load-bearing walls holding developers liable for 10 years.",
    "deliverables": [
      "Concrete Foundation Settlement & Core Crack Ultrasonic Testing",
      "Rebar Corrosion & Carbonation Depth Electrochemical Testing",
      "Load-Bearing Slab Deflection & Balcony Cantilever Load Audits",
      "Court-Admissible Decennial Engineering Liability File"
    ],
    "timeframe": "Per Structural Audit",
    "pricing": {
      "aed": 4500,
      "billingType": "Per Incident",
      "label": "AED 4,500 / Structural Audit"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "sng-007",
    "code": "NST-SNG07",
    "title": "HVAC Airflow Balancing (CFM) & Duct Static Pressure Testing",
    "category": "Snagging & Handover",
    "subCategory": "HVAC Commissioning",
    "reraStandard": "NEBB / TAB Standards",
    "description": "Measurement of cubic feet per minute (CFM) airflow, static duct pressure, and diffuser balancing ensuring equal cooling across every bedroom.",
    "deliverables": [
      "Anemometer CFM Airflow Measurement at Every Supply Diffuser",
      "Static Duct Pressure & Air Leakage Quantification",
      "AC Thermostat Temperature Drop Differential (Delta-T) Audit",
      "Elimination of Hot Spots and High-Humidity Condensation Zones"
    ],
    "timeframe": "Per AC System",
    "pricing": {
      "aed": 750,
      "billingType": "Per Unit Handover",
      "label": "AED 750 / System"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "sng-008",
    "code": "NST-SNG08",
    "title": "Plumbing Acoustic Hydrostatic Pressure & Drain Scope Camera",
    "category": "Snagging & Handover",
    "subCategory": "Plumbing Commissioning",
    "reraStandard": "IPC (International Plumbing Code)",
    "description": "High-resolution sewer scope camera inspection of drain pipes beneath floors, identifying construction debris, cement clogs, and reverse slope traps.",
    "deliverables": [
      "Rigid Sewer Camera Video Scope Inside All Main Drain Lines",
      "Hydrostatic Water Line Pressure Testing (10 Bar Hold for 2 Hours)",
      "Water Heater Anti-Scald Valve & Pressure Relief Function Check",
      "Detection of Trapped Construction Debris & Reverse Slope Drainage"
    ],
    "timeframe": "Per Drain Inspection",
    "pricing": {
      "aed": 850,
      "billingType": "Per Unit Handover",
      "label": "AED 850 / Inspection"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "sng-009",
    "code": "NST-SNG09",
    "title": "Electrical Circuit Safety, RCD Trip & Polarity Commissioning",
    "category": "Snagging & Handover",
    "subCategory": "Electrical Commissioning",
    "reraStandard": "DEWA Wiring Regulations & IET 18th Edition",
    "description": "Testing every electrical socket for phase-neutral-earth polarity, residual current device (RCD) trip times (sub-30ms), and earth loop impedance.",
    "deliverables": [
      "RCD Residual Current Trip Timing Test (Sub-30ms Verification)",
      "Socket Polarity, Ground Continuity & Voltage Drop Scan",
      "Electrical DB Wire Sizing & Circuit Breaker Ampere Rating Cross-Check",
      "Earthing Pit Resistance Ohms Measurement (Below 1 Ohm DEWA Rule)"
    ],
    "timeframe": "Per Property Check",
    "pricing": {
      "aed": 550,
      "billingType": "Per Unit Handover",
      "label": "AED 550 / Inspection"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "sng-010",
    "code": "NST-SNG10",
    "title": "Paint Finish, Plaster & Joinery Workmanship Quality Audit",
    "category": "Snagging & Handover",
    "subCategory": "Cosmetic Snagging",
    "reraStandard": "Finishing Trades Quality Standards",
    "description": "Ultra-detailed optical surface inspection under high-lumen grazing light identifying hollow tiles, uneven paint, scratched glass, and misaligned cabinets.",
    "deliverables": [
      "High-Lumen Grazing Light Surface Defect Detection",
      "Acoustic Tapping Rod Inspection for Hollow Wall & Floor Tiles",
      "Kitchen & Wardrobe Soft-Close Hinge & Alignment Checks",
      "Glass Scratch & Pitting Inspection under Industry ASTM C1036"
    ],
    "timeframe": "Included in Full Snagging",
    "pricing": {
      "aed": 1200,
      "billingType": "Per Unit Handover",
      "label": "Included in 250-Point Snagging"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "sng-011",
    "code": "NST-SNG11",
    "title": "DLD Title Deed Collection & Utility Meter Connection Handoff",
    "category": "Snagging & Handover",
    "subCategory": "Handover Admin",
    "reraStandard": "DLD Handover Protocols",
    "description": "Full administrative representation handling final developer balance clearance, DLD title deed collection, and DEWA/chiller utility meter activation.",
    "deliverables": [
      "Developer Final Statement of Account Audit & Balance Clearance",
      "DLD Title Deed Collection & Official Registration Coordination",
      "DEWA Electricity & Water Connection Registration with Premise Number",
      "Chiller District Cooling Connection Deposit & Activation Handling"
    ],
    "timeframe": "Per Handover Mandate",
    "pricing": {
      "aed": 1200,
      "billingType": "Per Incident",
      "label": "AED 1,200 / Property"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "sng-012",
    "code": "NST-SNG12",
    "title": "Commercial Office & Retail Core-and-Shell Handover Snagging",
    "category": "Snagging & Handover",
    "subCategory": "Commercial Handover",
    "reraStandard": "BOMA & Grade-A Commercial Standards",
    "description": "Specialized handover inspection for commercial shell-and-core and fitted office spaces in DIFC, Downtown, and Business Bay.",
    "deliverables": [
      "Floor Loading Capacity & Concrete Screed Level Verification",
      "Chilled Water BTU Flow Valves & Make-Up Air Stub Connections",
      "Civil Defense Main Sprinkler Grid & Main Distribution Board Isolation",
      "Emergency Exit Stairwell Pressurization & Egress Audit"
    ],
    "timeframe": "Per Commercial Unit",
    "pricing": {
      "aed": 2200,
      "billingType": "Per Unit Handover",
      "label": "Starting from AED 2,200 / Unit"
    },
    "propertyType": "Commercial Office",
    "popular": false
  },
  {
    "id": "sng-013",
    "code": "NST-SNG13",
    "title": "Acoustic Sound Insulation & Wall Decibel (dB) Transmission Test",
    "category": "Snagging & Handover",
    "subCategory": "Acoustic Testing",
    "reraStandard": "ISO 16283 Building Acoustics Standards",
    "description": "Acoustic sound generator testing measuring inter-apartment partition wall sound transmission class (STC) ensuring quiet residential living.",
    "deliverables": [
      "Calibrated Sound Level Meter Inter-Wall Sound Transmission Testing",
      "Impact Sound Insulation Testing on Tiled & Timber Floors",
      "Door & Window Acoustic Perimeter Gasket Seal Verification",
      "Compliance Check against Dubai Green Building Noise Standards"
    ],
    "timeframe": "Per Acoustic Audit",
    "pricing": {
      "aed": 1100,
      "billingType": "Per Unit Handover",
      "label": "AED 1,100 / Audit"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "sng-014",
    "code": "NST-SNG14",
    "title": "Off-Plan Handover Power of Attorney (POA) Representation",
    "category": "Snagging & Handover",
    "subCategory": "Remote Handover",
    "reraStandard": "Dubai Courts E-Notary Framework",
    "description": "Acting as authorized legal representative under Power of Attorney to conduct key collection, developer inspection, and title deed registration for overseas owners.",
    "deliverables": [
      "Physical Representation at Developer Handover Suite in Dubai",
      "On-Site Snagging Supervision & Direct Video Call with Owner",
      "Official Key & Access Card Collection and Safe Custody",
      "Immediate DEWA Connection & Transition into Rental Management"
    ],
    "timeframe": "Per POA Handover",
    "pricing": {
      "aed": 1800,
      "billingType": "Per Incident",
      "label": "AED 1,800 + Govt Fees"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "sng-015",
    "code": "NST-SNG15",
    "title": "Swimming Pool & Water Feature Handover Commissioning",
    "category": "Snagging & Handover",
    "subCategory": "Pool Commissioning",
    "reraStandard": "Swimming Pool Engineering Codes",
    "description": "Inspection of newly built private swimming pools, Jacuzzis, and water features checking waterproof plaster, underwater lighting, and pump filtration.",
    "deliverables": [
      "Pool Shell Hydrostatic 72-Hour Water Level Drop Test",
      "Underwater LED Transformer Safety & GFI Breaker Trip Tests",
      "Sand Filter, Variable Speed Pump & Multiport Valve Pressure Check",
      "Salt Chlorinator / Chemical Dosing System Calibration"
    ],
    "timeframe": "Per Pool Commissioning",
    "pricing": {
      "aed": 950,
      "billingType": "Per Unit Handover",
      "label": "AED 950 / Pool"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "sng-016",
    "code": "NST-SNG16",
    "title": "Landscaping & Automated Drip Irrigation Handover Audit",
    "category": "Snagging & Handover",
    "subCategory": "Landscape Handover",
    "reraStandard": "Landscape Irrigation Standards",
    "description": "Inspection of newly installed garden turf, mature palm tree root stabilization, underground drainage channels, and computerized irrigation solenoids.",
    "deliverables": [
      "Computerized Irrigation Controller Station Sequencing Test",
      "Drip Line Pressure & Sub-Surface Emitter Flow Rate Check",
      "Palm Tree Root Anchor Stability & Soil Compaction Audit",
      "Garden Drainage Soakaway & Stormwater Runoff Testing"
    ],
    "timeframe": "Per Landscape Audit",
    "pricing": {
      "aed": 850,
      "billingType": "Per Unit Handover",
      "label": "AED 850 / Garden"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "sng-017",
    "code": "NST-SNG17",
    "title": "Elevator & Private Lift Pre-Handover Safety Certification",
    "category": "Snagging & Handover",
    "subCategory": "Lift Commissioning",
    "reraStandard": "EN 81 Lift Safety Standards",
    "description": "Pre-handover audit of private villa elevators and high-rise elevators verifying smooth leveling, safety brake gears, and emergency alarm dialers.",
    "deliverables": [
      "Cabin Floor Leveling Accuracy within +/- 2mm at Every Floor",
      "Overspeed Governor & Mechanical Safety Brake Gear Verification",
      "Emergency Power Battery Lowering Mechanism Live Test",
      "Emergency Two-Way Communication Dialer Line Check"
    ],
    "timeframe": "Per Lift Inspection",
    "pricing": {
      "aed": 1200,
      "billingType": "Per Unit Handover",
      "label": "AED 1,200 / Lift"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "sng-018",
    "code": "NST-SNG18",
    "title": "Smart Home System Automation Handover & Scene Configuration",
    "category": "Snagging & Handover",
    "subCategory": "Smart Home Handover",
    "reraStandard": "KNX & Control4 Certified Standards",
    "description": "Commissioning of lighting automation, smart climate thermostats, motorized shades, and audio zones ensuring seamless app control for owners.",
    "deliverables": [
      "KNX / Control4 / Crestron System Gateway Diagnostic Scan",
      "Individual Lighting Channel Dimming & Scene Button Programming",
      "Motorized Curtain Limit Switches & App Trigger Integration",
      "Owner Remote App Configuration & Cloud Access Handoff"
    ],
    "timeframe": "Per Smart Home Setup",
    "pricing": {
      "aed": 1500,
      "billingType": "Per Unit Handover",
      "label": "AED 1,500 / Setup"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "sng-019",
    "code": "NST-SNG19",
    "title": "Balcony & Terrace Drainage Flood Simulation Test",
    "category": "Snagging & Handover",
    "subCategory": "Waterproofing Test",
    "reraStandard": "ASTM Balcony Drainage Standards",
    "description": "Controlled water flooding test on balcony tiles and floor gully drains verifying that slope directs water to drain without pooling or overflowing.",
    "deliverables": [
      "Controlled Water Flooding Test Verifying Drainage Flow Velocity",
      "Threshold Upstand Height Verification Preventing Interior Water Ingress",
      "Tile Slope Fall Gradient Cross-Check (Min 1:100 Ratio)",
      "Perimeter Flashing & Drip Edge Water Barrier Verification"
    ],
    "timeframe": "Per Balcony Test",
    "pricing": {
      "aed": 450,
      "billingType": "Per Unit Handover",
      "label": "AED 450 / Balcony"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "sng-020",
    "code": "NST-SNG20",
    "title": "Marble Cladding & Granite Facade Ultrasonic Thickness & Anchor Audit",
    "category": "Snagging & Handover",
    "subCategory": "Facade Structural",
    "reraStandard": "Stone Cladding Engineering Standards",
    "description": "Non-destructive acoustic testing of heavy marble exterior cladding panels, verifying stainless steel undercut anchor brackets and anti-drop safety pins.",
    "deliverables": [
      "Ultrasonic Stone Cladding Thickness & Delamination Scan",
      "Mechanical Undercut Anchor Bracket Stainless Steel Grade Audit",
      "Mastic Expansion Joint Elasticity & Weather Seal Integrity",
      "High-Wind Load Resistance & Safety Fall Hazard Elimination"
    ],
    "timeframe": "Per Facade Audit",
    "pricing": {
      "aed": 1800,
      "billingType": "Per Unit Handover",
      "label": "Starting from AED 1,800"
    },
    "propertyType": "Villa / Townhouse",
    "popular": false
  },
  {
    "id": "sng-021",
    "code": "NST-SNG21",
    "title": "Central Chilled Water District Cooling BTU Meter Commissioning",
    "category": "Snagging & Handover",
    "subCategory": "District Cooling Handover",
    "reraStandard": "Empower / Tabreed / Marafeq Standards",
    "description": "Verification of ultrasonic BTU meters, temperature sensors (supply/return delta-T), and motorized 2-way modulating chilled water valves.",
    "deliverables": [
      "Ultrasonic Flow Sensor Calibration Accuracy Verification",
      "Supply & Return Water Temperature Sensor Precision Check",
      "Motorized 2-Way Modulating Control Valve Actuator Test",
      "Empower / Tabreed Direct Registration & Zero Past Debt Clearance"
    ],
    "timeframe": "Per Meter Audit",
    "pricing": {
      "aed": 550,
      "billingType": "Per Unit Handover",
      "label": "AED 550 / Meter"
    },
    "propertyType": "Apartment",
    "popular": false
  },
  {
    "id": "sng-022",
    "code": "NST-SNG22",
    "title": "Civil Defense Smoke Extraction & Pressurization Handover Audit",
    "category": "Snagging & Handover",
    "subCategory": "Civil Defense Handover",
    "reraStandard": "UAE Fire & Life Safety Code",
    "description": "Commissioning of smoke evacuation fans, motorized smoke dampers, and staircase stair pressurization fans in residential towers.",
    "deliverables": [
      "Motorized Smoke Damper 24V Fire Signal Trip & Reset Test",
      "Staircase Pressurization Fan CFM Airflow & Pressure Gauge Check",
      "Corridor Make-Up Air Velocity Preventing Smoke Ingress",
      "Civil Defense Direct Signal Relaying to Central Fire Panel"
    ],
    "timeframe": "Per Commercial Floor",
    "pricing": {
      "aed": 1800,
      "billingType": "Per Incident",
      "label": "AED 1,800 / Floor"
    },
    "propertyType": "Full Building Portfolio",
    "popular": false
  },
  {
    "id": "sng-023",
    "code": "NST-SNG23",
    "title": "Common Area Handover Audit for Owners Associations (OA)",
    "category": "Snagging & Handover",
    "subCategory": "Jointly Owned Property Snagging",
    "reraStandard": "Dubai Law No. 6/2019 Jointly Owned Property",
    "description": "Comprehensive defect inspection of entire building common areas (lobbies, corridors, roofs, pump rooms, elevators, substations) before developer handover.",
    "deliverables": [
      "Full Multi-Floor Common Area Finishing & MEP Asset Cataloging",
      "Central Chiller Plant, Water Filtration & Fire Pump Room Audits",
      "Basement Parking Sump Pumps, Epoxy Flooring & Ventilation Checks",
      "Developer Defect Rectification Escrow Claim File Compilation"
    ],
    "timeframe": "Institutional OA Mandate",
    "pricing": {
      "aed": 15000,
      "billingType": "Per Incident",
      "label": "Starting from AED 15,000 / Tower"
    },
    "propertyType": "Full Building Portfolio",
    "popular": true
  },
  {
    "id": "sng-024",
    "code": "NST-SNG24",
    "title": "Turnkey Complete Snagging, Handover & Leasing Master Package",
    "category": "Snagging & Handover",
    "subCategory": "Turnkey Handover Package",
    "reraStandard": "Nestora Flagship Handover Experience",
    "description": "The ultimate all-in-one package: 250-point pre-handover snagging, de-snagging verification, DLD title deed collection, DEWA connection, and immediate tenant placement.",
    "deliverables": [
      "250-Point RICS Pre-Handover Snagging + Follow-Up De-Snagging Audit",
      "Developer Account Clearance, Title Deed Collection & DEWA Linkage",
      "High-Definition 3D Virtual Tour & Luxury Portal Marketing",
      "Immediate Tenant Sourcing with Sub-14 Day Move-In SLA"
    ],
    "timeframe": "Turnkey Master Package",
    "pricing": {
      "aed": 2850,
      "billingType": "Per Unit Handover",
      "label": "AED 2,850 Turnkey Handover + 5% Leasing"
    },
    "propertyType": "Apartment",
    "popular": true
  }
];

export function filterNestoraCatalog(
  services: NestoraCatalogService[],
  searchQuery: string,
  category: NestoraCategoryFilter,
  propertyType: string
): NestoraCatalogService[] {
  return services.filter((srv) => {
    // 1. Category Filter
    if (category !== 'All Asset Disciplines' && srv.category !== category) {
      return false;
    }

    // 2. Property Type Filter
    if (propertyType !== 'All Property Types' && srv.propertyType !== propertyType) {
      return false;
    }

    // 3. Search Query Filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      const matchCode = srv.code.toLowerCase().includes(q);
      const matchTitle = srv.title.toLowerCase().includes(q);
      const matchSub = srv.subCategory.toLowerCase().includes(q);
      const matchDesc = srv.description.toLowerCase().includes(q);
      const matchRera = srv.reraStandard.toLowerCase().includes(q);
      const matchDeliverable = srv.deliverables.some((d) => d.toLowerCase().includes(q));

      if (!matchCode && !matchTitle && !matchSub && !matchDesc && !matchRera && !matchDeliverable) {
        return false;
      }
    }

    return true;
  });
}
