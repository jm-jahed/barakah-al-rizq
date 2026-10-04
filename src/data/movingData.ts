export interface MoveTypeOption {
  id: string;
  code: string;
  name: string;
  tagline: string;
  recommendedCrew: string;
  typicalDuration: string;
  startingPrice: string;
  truckType: string;
  features: string[];
  image: string;
}

export interface MovingServiceItem {
  id: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  startingPriceAED: number;
  pricingUnit: string;
  badge: string;
  slaTime: string;
  recommendedFor: string[];
}

export interface UAELocationItem {
  id: string;
  city: string;
  emirate: string;
  availability: string;
  responseTime: string;
  localTeamSize: string;
  startingPrice: string;
  permitRequirements: string;
  popularAreas: string[];
}

export interface InternationalRouteItem {
  id: string;
  origin: string;
  destination: string;
  flag: string;
  transitTime: string;
  containerOptions: string;
  customsSupport: string;
  startingPriceAED: number;
  image: string;
}

export interface ChecklistTask {
  id: string;
  category: '4 Weeks Before' | '2 Weeks Before' | '1 Week Before' | 'Moving Day' | 'After Moving';
  title: string;
  description: string;
  completed: boolean;
}

export interface MovingGuideArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  snippet: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role?: string;
  moveType: string;
  route: string;
  rating: number;
  avatar: string;
}

export const NESTMOVE_BRAND = {
  name: 'NESTMOVE',
  legalName: 'NestMove Luxury Relocations UAE LLC',
  tagline: 'Precision Relocations. Seamless Transitions.',
  subheading: 'UAE’s premier residential home, corporate enterprise office, and worldwide international relocation agency. 100% stress-free moving with zero damage guarantee.',
  phone: '+971 4 800 6378',
  phoneDisplay: '800-NESTMOVE (Toll Free)',
  whatsapp: 'https://wa.me/971508924110?text=Hello%20NestMove,%20I%20would%20like%20to%20request%20a%20free%20luxury%20relocation%20quote.',
  email: 'concierge@nestmove.ae',
  address: 'NestMove Relocation Pavilion, Al Quoz Industrial 3, Sheikh Zayed Road, Dubai, UAE',
  metrics: {
    movesCompleted: '14,850+',
    rating: '4.98 / 5.0',
    damageFreeRate: '99.85%',
    experienceYears: '16+ Years in UAE',
    trucksInFleet: '65+ Padded Trucks',
    carpenterCrew: '120+ Master Artisans'
  }
};

export const MOVE_TYPES: MoveTypeOption[] = [
  {
    id: 'apartment',
    code: '01',
    name: 'Luxury Apartment & Penthouse',
    tagline: 'Seamless high-rise relocation for studios, 1-3BR apartments, and duplex penthouses.',
    recommendedCrew: '3 - 5 Professional Movers + 1 Master Carpenter',
    typicalDuration: '4 - 7 Hours',
    startingPrice: 'AED 750',
    truckType: '14ft / 18ft Padded Moving Truck with Liftgate',
    features: [
      'Elevator and corridor wall protective cladding',
      'Hanging wardrobe boxes for designer apparel directly from closets',
      'Mattress hypoallergenic vacuum sealing and Italian furniture blankets',
      'Emaar / Nakheel / DAMAC building move-in permit documentation support'
    ],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'villa',
    code: '02',
    name: 'Prestige Villa & Mansion',
    tagline: 'Complete white-glove turnkey relocation for 3-7+ bedroom villas, townhouses & royal residences.',
    recommendedCrew: '6 - 12 Professional Movers + 2 Master Carpenters + Dedicated Move Lead',
    typicalDuration: '1 - 2 Days',
    startingPrice: 'AED 1,850',
    truckType: 'Multiple 24ft Enclosed Climate-Controlled Trucks',
    features: [
      'Dedicated On-Site Senior Move Concierge Lead',
      'Garden, patio, BBQ, and outdoor pergola furniture wrapping',
      'Custom plywood crating for crystal chandeliers, marble tables, and fine art',
      'Complete room-by-room unpack, wardrobe re-hanging, and maid styling'
    ],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'office',
    code: '03',
    name: 'Corporate & DIFC Office Relocation',
    tagline: 'Zero-downtime commercial moving engineered for financial institutions, law firms & tech hubs.',
    recommendedCrew: '8 - 20 Specialist Commercial Movers + IT Riggers',
    typicalDuration: 'Overnight / Weekend Cutover',
    startingPrice: 'AED 2,800',
    truckType: 'Heavy Commercial Fleet with Tail-Lift Trucks',
    features: [
      'Color-coded sequential workstation and IT server tagging',
      'Anti-static bubble wrap and custom screen flight cases',
      'Executive boardroom table & modular furniture dismantling',
      'Confidential document security crates with tamper-evident serial seals'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'international',
    code: '04',
    name: 'Worldwide Global Relocation',
    tagline: 'Door-to-door overseas moving across UK, Europe, GCC, USA, Singapore & Australia.',
    recommendedCrew: 'Dedicated International Move Coordinator',
    typicalDuration: 'Air Express (4-7 Days) / Ocean Sea Freight (18-35 Days)',
    startingPrice: 'AED 5,400',
    truckType: 'Export Liftvans & 20ft/40ft Ocean ISO Containers',
    features: [
      'Comprehensive export packing with 5-ply reinforced corrugated materials',
      'Customs clearance, duty exemptions, and consular documentation handling',
      'Full Container Load (FCL) & Shared Groupage (LCL) options',
      'All-risk marine transit insurance up to AED 1,000,000'
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'single-item',
    code: '05',
    name: 'Fine Art, Piano & Safe Rigging',
    tagline: 'Precision specialty moving for grand pianos, antique safes, marble sculptures & fine artworks.',
    recommendedCrew: '3 Specialist Rigging Movers',
    typicalDuration: '2 - 3 Hours',
    startingPrice: 'AED 450',
    truckType: 'Climate-Controlled Air-Ride Tailgate Truck',
    features: [
      'Custom wooden crating built to millimetric item dimensions',
      'Heavy-duty electric stairclimber crawler machines',
      'Vibration damping and acoustic piano blankets',
      'Direct point-to-point dedicated VIP transport'
    ],
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1200&auto=format&fit=crop'
  }
];

export const MOVING_SERVICES: MovingServiceItem[] = [
  {
    id: 'residential-move',
    code: '01',
    title: 'Turnkey Residential Home Move',
    tagline: 'Full pack, transport, disassembly, and room-of-choice setup across all 7 Emirates.',
    description: 'Our uniformed crew arrives with padded trucks, protective floor runners, and premium packing boxes to handle your entire home move from start to finish.',
    icon: 'Home',
    features: [
      'Floor, doorway, and elevator wall padding protection',
      'Hanging wardrobe boxes for clothes directly from closets',
      'Mattress hygenic wrapping and furniture blanket protection',
      'Room-by-room box labeling and precise furniture placement'
    ],
    startingPriceAED: 750,
    pricingUnit: 'starting rate',
    badge: 'MOST POPULAR',
    slaTime: 'Same-Day Turnaround',
    recommendedFor: ['Apartments', 'Villas', 'Townhouses']
  },
  {
    id: 'office-move',
    code: '02',
    title: 'Corporate Office Relocation',
    tagline: 'Overnight and weekend office moves with zero business downtime and IT hardware protection.',
    description: 'We move office furniture, IT infrastructure, monitors, and confidential archives overnight or during weekends to ensure your business opens on time.',
    icon: 'Briefcase',
    features: [
      'Sequential color-coded desk & crate labeling',
      'Anti-static bubble wrap for monitors & IT hardware',
      'Modular workstation dismantling and re-erection',
      'Building security management pass clearance'
    ],
    startingPriceAED: 2800,
    pricingUnit: 'per office floor',
    badge: 'ZERO DOWNTIME',
    slaTime: 'Weekend Overnight',
    recommendedFor: ['DIFC Firms', 'Tech Hubs', 'Law Offices']
  },
  {
    id: 'fine-art-crating',
    code: '03',
    title: 'Fine Art & Chandelier Custom Crating',
    tagline: 'Museum-grade plywood crating with shock absorption and foam corner cradles.',
    description: 'Custom on-site carpentry builds bespoke wooden crates for oil paintings, bronze statues, crystal chandeliers, and delicate marble dining tables.',
    icon: 'Sparkles',
    features: [
      'Heat-treated ISPM-15 export certified timber crates',
      'High-density archival foam inserts and acid-free tissue',
      'Multi-axis shock sensor data loggers',
      'Full transit insurance valuation up to AED 500,000'
    ],
    startingPriceAED: 450,
    pricingUnit: 'per bespoke crate',
    badge: 'MUSEUM GRADE',
    slaTime: 'Pre-Move Survey',
    recommendedFor: ['Art Collectors', 'Galleries', 'Luxury Mansions']
  },
  {
    id: 'handyman-assembly',
    code: '04',
    title: 'Master Carpentry & Wall Mounting',
    tagline: 'Expert dismantling of Italian wardrobes, IKEA systems, and precision TV/curtain mounting.',
    description: 'Certified carpenters and technicians handle all drilling, curtain rod installation, 85-inch OLED TV wall bracket mounting, and chandelier reconnection.',
    icon: 'Wrench',
    features: [
      'Heavy-duty wall anchors for concrete and drywall',
      'Laser level alignment for art frames and mirrors',
      'Organized hardware bags labeled by room',
      'Testing of all motorized beds and modular cabinetry'
    ],
    startingPriceAED: 350,
    pricingUnit: 'included or add-on',
    badge: 'CARPENTRY INCLUDED',
    slaTime: 'On Moving Day',
    recommendedFor: ['All Homes', 'Complex Furniture', 'AV Setups']
  },
  {
    id: 'climate-storage',
    code: '05',
    title: 'Climate-Controlled 24/7 Storage Pods',
    tagline: 'Air-conditioned 23°C private vaults in Dubai Al Quoz & Abu Dhabi Mussafah.',
    description: 'Need temporary storage between leases or during home renovation? Keep your furniture in our 24/7 CCTV monitored, biometric access storage vaults.',
    icon: 'Warehouse',
    features: [
      '23°C constant temperature & 50% relative humidity control',
      'Individual locked wooden storage vaults & private rooms',
      'CCTV surveillance & biometric access control',
      'Flexible weekly, monthly or annual storage plans'
    ],
    startingPriceAED: 350,
    pricingUnit: 'per month',
    badge: '24/7 CCTV',
    slaTime: 'Flexible Lease',
    recommendedFor: ['Home Renovations', 'In-Between Leases', 'Expats']
  },
  {
    id: 'international-freight',
    code: '06',
    title: 'Global Door-to-Door Overseas Relocation',
    tagline: 'FCL / LCL container shipping and express air freight to 140+ countries worldwide.',
    description: 'Comprehensive international moving including export packing, customs clearance, sea container loading, and delivery by accredited global partners.',
    icon: 'Globe',
    features: [
      'FIDI-FAIM & IAM accredited international partner network',
      'Complete export packing with heavy 5-ply corrugated board',
      'Origin customs export filing and destination customs clearance',
      'Door-to-door delivery with debris uncrating and removal'
    ],
    startingPriceAED: 5400,
    pricingUnit: 'per shipment',
    badge: 'GLOBAL NETWORK',
    slaTime: 'Scheduled Shipping',
    recommendedFor: ['Relocating Expats', 'Diplomats', 'Global Executives']
  },
  {
    id: 'deep-cleaning-pest',
    code: '07',
    title: 'Post-Move Deep Cleaning & Sanitization',
    tagline: 'Hospital-grade steam cleaning, kitchen degreasing, and Dubai Municipality pest control.',
    description: 'Leave your old property spotless for 100% security deposit return, and move into your new home completely sanitized, fresh, and pest-free.',
    icon: 'ShieldCheck',
    features: [
      'Deep steam sanitation of bathrooms, ovens, and tiles',
      'Dubai Municipality approved anti-cockroach/ant pest treatment',
      'Window cleaning and AC vent filter vacuuming',
      'Landlord handover inspection guarantee'
    ],
    startingPriceAED: 490,
    pricingUnit: 'per apartment / villa',
    badge: 'DEPOSIT BACK',
    slaTime: 'Move-in / Move-out',
    recommendedFor: ['Tenants', 'Landlords', 'New Homeowners']
  },
  {
    id: 'green-eco-totes',
    code: '08',
    title: 'Reusable Green Eco-Tote Box Rental',
    tagline: 'Zero-waste heavy-duty plastic moving crates delivered 1 week before your move.',
    description: 'Eliminate cardboard waste with crush-proof, waterproof stackable plastic totes delivered to your doorstep and picked up after unpacking.',
    icon: 'Package',
    features: [
      'Heavy-duty recycled plastic crates with attached lockable lids',
      'Free delivery 7 days before move & pickup 7 days after',
      'Includes tamper-evident security zip ties and pre-printed labels',
      'Zero cardboard disposal hassle and 100% waterproof protection'
    ],
    startingPriceAED: 220,
    pricingUnit: 'per package (25 totes)',
    badge: 'ECO FRIENDLY',
    slaTime: '7-Day Rental',
    recommendedFor: ['Eco-Conscious', 'Modern Apartments', 'Quick Unpacks']
  }
];

export const UAE_COMMUNITIES: UAELocationItem[] = [
  {
    id: 'dubai-palm',
    city: 'Dubai',
    emirate: 'Dubai',
    availability: 'Daily Service',
    responseTime: '< 2 Hours',
    localTeamSize: '15 Dedicated Crews',
    startingPrice: 'AED 850',
    permitRequirements: 'Nakheel Move-In / Move-Out Permit & Ejari Required',
    popularAreas: ['Palm Jumeirah Fronds', 'Shoreline Apartments', 'Royal Atlantis Residences', 'Marina & JBR']
  },
  {
    id: 'dubai-hills-emirates',
    city: 'Dubai',
    emirate: 'Dubai',
    availability: 'Daily Service',
    responseTime: '< 2 Hours',
    localTeamSize: '20 Dedicated Crews',
    startingPrice: 'AED 950',
    permitRequirements: 'Emaar Move Permit (Sakani Portal) + Security Clear',
    popularAreas: ['Emirates Hills', 'Dubai Hills Estate', 'Arabian Ranches I, II & III', 'The Meadows & Springs']
  },
  {
    id: 'dubai-downtown-difc',
    city: 'Dubai',
    emirate: 'Dubai',
    availability: 'Daily Service (24/7 Elevator Clearance)',
    responseTime: '< 90 Mins',
    localTeamSize: '12 Commercial Crews',
    startingPrice: 'AED 750',
    permitRequirements: 'Tower Management Loading Bay & Lift Booking Token',
    popularAreas: ['Burj Khalifa Residences', 'DIFC Gate Precinct', 'Downtown Boulevard', 'Business Bay Towers']
  },
  {
    id: 'abu-dhabi-saadiyat',
    city: 'Abu Dhabi',
    emirate: 'Abu Dhabi',
    availability: 'Daily Service',
    responseTime: '< 3 Hours',
    localTeamSize: '10 Dedicated Crews',
    startingPrice: 'AED 1,200',
    permitRequirements: 'Aldar / Musanada Community Access Approval',
    popularAreas: ['Saadiyat Beach Villas', 'Yas Island Water\'s Edge', 'Al Maryah Island', 'Al Reem Island']
  },
  {
    id: 'sharjah-northern',
    city: 'Sharjah & RAK',
    emirate: 'Sharjah',
    availability: 'Daily Service',
    responseTime: '< 3 Hours',
    localTeamSize: '8 Dedicated Crews',
    startingPrice: 'AED 650',
    permitRequirements: 'Standard Tenancy & Building Gatepass',
    popularAreas: ['Al Zahia Sharjah', 'Al Mamsha', 'Al Hamra Village RAK', 'Mina Al Arab']
  }
];

export const INTERNATIONAL_ROUTES: InternationalRouteItem[] = [
  {
    id: 'uae-uk',
    origin: 'Dubai / Abu Dhabi, UAE',
    destination: 'London & Nationwide, United Kingdom',
    flag: '🇬🇧',
    transitTime: 'Ocean: 21-28 Days | Air: 4-6 Days',
    containerOptions: '20ft FCL / 40ft FCL / Groupage Liftvan',
    customsSupport: 'UK ToR1 (Transfer of Residence) Duty Free Exemption',
    startingPriceAED: 7800,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'uae-ksa',
    origin: 'Dubai / Abu Dhabi, UAE',
    destination: 'Riyadh & Jeddah, Saudi Arabia',
    flag: '🇸🇦',
    transitTime: 'Direct Overland Truck: 48-72 Hours',
    containerOptions: 'Dedicated 40ft Bonded Air-Ride Truck',
    customsSupport: 'Bayan Saudi Customs & SABER Household Exemption',
    startingPriceAED: 5900,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'uae-europe',
    origin: 'Dubai / Abu Dhabi, UAE',
    destination: 'Zurich / Geneva / Frankfurt / Paris, Europe',
    flag: '🇪🇺',
    transitTime: 'Ocean: 24-32 Days | Air: 4-6 Days',
    containerOptions: 'Full ISO Container / Air Cargo Pallet',
    customsSupport: 'EU Household Goods Customs Declaration 0300',
    startingPriceAED: 8400,
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'uae-singapore',
    origin: 'Dubai / Abu Dhabi, UAE',
    destination: 'Singapore & Southeast Asia',
    flag: '🇸🇬',
    transitTime: 'Ocean: 16-22 Days | Air: 3-5 Days',
    containerOptions: '20ft FCL / 40ft FCL',
    customsSupport: 'Singapore GST Relief for Used Personal Effects',
    startingPriceAED: 7200,
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=800&auto=format&fit=crop'
  }
];

export const MOCK_MOVE_DASHBOARD = {
  moveId: 'NM-84920',
  status: 'Moving Day — Final Unpacking & Carpentry',
  customerName: 'H.E. Tariq Al-Mansoori',
  pickupLocation: 'Downtown Dubai, Boulevard Point, Penthouse 4201',
  deliveryLocation: 'Saadiyat Beach Villas, Villa 18, Abu Dhabi',
  assignedLead: 'Captain Rashid Al-Ketbi',
  driverPhone: '+971 50 892 4110',
  crewCount: '8 Master Movers + 2 Carpenters',
  trucksDispatched: '2x 24ft Climate-Controlled Vans (Fleet #14 & #18)',
  boxCount: '78 Packaged Totes & 6 Wooden Crates',
  progressPercent: 85,
  telemetry: {
    originPermit: 'Emaar Sakani Verified',
    destinationPermit: 'Aldar Community Gate Approved',
    fragileCrates: '6/6 Inspected & Secured',
    etaDestination: 'Completed On-Site Setup'
  },
  timeline: [
    { time: '08:00 AM', title: 'Crew Arrival & Protective Floor Padding Cladding', status: 'completed' },
    { time: '09:30 AM', title: 'Wardrobe Box Packing & Chandelier Wooden Crating', status: 'completed' },
    { time: '12:15 PM', title: 'Loading 24ft Climate Trucks & E11 Highway Transit', status: 'completed' },
    { time: '02:45 PM', title: 'Arrival at Saadiyat Villa & Gate Security Clear', status: 'completed' },
    { time: '04:30 PM', title: 'Room-by-Room Unpack, Bed Assembly & TV Mounting', status: 'in-progress' },
    { time: '06:00 PM', title: 'Debris Removal & Final Client Walkthrough Signoff', status: 'pending' },
  ]
};

export const MOVING_CHECKLIST_DATA: ChecklistTask[] = [
  { id: 'c1', category: '4 Weeks Before', title: 'Apply for Move-Out / Move-In Permits', description: 'Submit Sakani (Emaar), Nakheel, or Aldar online building gatepass clearance.', completed: true },
  { id: 'c2', category: '4 Weeks Before', title: 'Confirm New Property Ejari & Tenancy Contract', description: 'Ensure Ejari registration certificate is active for DEWA utility transfer.', completed: true },
  { id: 'c3', category: '2 Weeks Before', title: 'Schedule NestMove Home Survey or Instant Quote', description: 'Lock in moving date, truck size, and custom wooden crating for art & pianos.', completed: true },
  { id: 'c4', category: '2 Weeks Before', title: 'Schedule DEWA / Addc Final Bill & Disconnection', description: 'Schedule electricity/water meter reading for your handover day.', completed: false },
  { id: 'c5', category: '1 Week Before', title: 'Transfer Du / Etisalat Home Internet Line', description: 'Book telecom technician for day-after move-in to avoid internet downtime.', completed: false },
  { id: 'c6', category: 'Moving Day', title: 'Keep Essential Documents & Valuables in Handbag', description: 'Passports, jewelry, deeds, and laptops should be transported with you.', completed: false },
  { id: 'c7', category: 'After Moving', title: 'Debris Removal & Deep Clean Deposit Handover', description: 'NestMove team removes all boxes for a clean, peaceful first night.', completed: false },
];

export interface MovingFAQItem {
  question: string;
  answer: string;
  q: string;
  a: string;
}

export const MOVING_FAQS: MovingFAQItem[] = [
  {
    question: 'How are moving rates calculated in the UAE?',
    answer: 'Our transparent pricing in AED is calculated based on your home size (number of bedrooms), total volume (CBM), required crew size, distance between emirates, and optional add-ons (custom wooden crating, TV wall mounting, maid unpacking, or climate storage). We provide binding quotes with zero hidden charges.',
    q: 'How are moving rates calculated in the UAE?',
    a: 'Our transparent pricing in AED is calculated based on your home size (number of bedrooms), total volume (CBM), required crew size, distance between emirates, and optional add-ons (custom wooden crating, TV wall mounting, maid unpacking, or climate storage). We provide binding quotes with zero hidden charges.'
  },
  {
    question: 'Do you assist with building move-in and move-out permits (Emaar, Nakheel, Aldar)?',
    answer: 'Yes. We provide all necessary contractor documents—including public liability insurance certificates, trade license copies, and driver Emirates ID copies—required by major developers (Emaar Sakani, Nakheel, DAMAC, Aldar, Dubai Holding) to ensure your gate pass is approved smoothly.',
    q: 'Do you assist with building move-in and move-out permits (Emaar, Nakheel, Aldar)?',
    a: 'Yes. We provide all necessary contractor documents—including public liability insurance certificates, trade license copies, and driver Emirates ID copies—required by major developers (Emaar Sakani, Nakheel, DAMAC, Aldar, Dubai Holding) to ensure your gate pass is approved smoothly.'
  },
  {
    question: 'Are my valuable belongings and delicate furniture insured during the move?',
    answer: 'Every move includes complimentary basic goods-in-transit protection. We also offer comprehensive All-Risk Transit Insurance covering high-value items, fine art, crystal chandeliers, and electronics up to AED 1,000,000 with zero deductible.',
    q: 'Are my valuable belongings and delicate furniture insured during the move?',
    a: 'Every move includes complimentary basic goods-in-transit protection. We also offer comprehensive All-Risk Transit Insurance covering high-value items, fine art, crystal chandeliers, and electronics up to AED 1,000,000 with zero deductible.'
  },
  {
    question: 'Do you provide furniture disassembly, carpentry, and TV wall mounting?',
    answer: 'Yes. Every NestMove crew includes qualified master carpenters who dismantle and reassemble Italian wardrobes, modular beds, dining tables, and IKEA furniture. Our handymen also handle TV wall mounting, curtain rails, and mirror hanging.',
    q: 'Do you provide furniture disassembly, carpentry, and TV wall mounting?',
    a: 'Yes. Every NestMove crew includes qualified master carpenters who dismantle and reassemble Italian wardrobes, modular beds, dining tables, and IKEA furniture. Our handymen also handle TV wall mounting, curtain rails, and mirror hanging.'
  },
  {
    question: 'How far in advance should I book my Dubai/UAE move?',
    answer: 'We recommend booking 5 to 7 days in advance for local Dubai & UAE moves to ensure optimal crew assignment and move-in/out developer permit approvals. However, we also support urgent same-day and 24-hour emergency relocations subject to fleet availability.',
    q: 'How far in advance should I book my Dubai/UAE move?',
    a: 'We recommend booking 5 to 7 days in advance for local Dubai & UAE moves to ensure optimal crew assignment and move-in/out developer permit approvals. However, we also support urgent same-day and 24-hour emergency relocations subject to fleet availability.'
  },
  {
    question: 'What makes your international relocation service different?',
    answer: 'We offer end-to-end door-to-door overseas relocation with export-grade 5-ply corrugated packing, origin & destination customs clearance, and global partner coordination in the UK, Europe, KSA, Singapore, USA, and Australia.',
    q: 'What makes your international relocation service different?',
    a: 'We offer end-to-end door-to-door overseas relocation with export-grade 5-ply corrugated packing, origin & destination customs clearance, and global partner coordination in the UK, Europe, KSA, Singapore, USA, and Australia.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    author: 'Sarah & Mark Harrington',
    role: 'Managing Director, Barclays DIFC',
    moveType: '5-Bedroom Villa Relocation',
    route: 'Downtown Dubai ➔ Emirates Hills',
    rating: 5,
    quote: 'NestMove handled our 5-bedroom move with military precision. Their carpenters dismantled our custom Italian wardrobes without a single scratch, and by 6 PM our entire villa was unpacked and styled. Worth every single Dirham.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 't2',
    author: 'Khalid Al-Hashemi',
    role: 'Partner, Sovereign Capital Advisors',
    moveType: 'Corporate Office Relocation (45 Desks)',
    route: 'DIFC Gate Village ➔ ADGM Al Maryah Island',
    rating: 5,
    quote: 'Relocating our financial advisory firm over the weekend without losing a single hour of trading was our number one requirement. NestMove tagged all 45 IT setups and server racks on Friday night—we were live in Abu Dhabi Monday 8 AM.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 't3',
    author: 'Dr. Elena Rostova',
    role: 'Private Collector & Neurologist',
    moveType: 'Fine Art & Penthouse Move',
    route: 'Palm Jumeirah ➔ Saadiyat Beach Villa',
    rating: 5,
    quote: 'They built custom wooden crates for my oil paintings and crystal chandelier right in front of me. Their white-glove respect for fragile luxury items is unmatched in the UAE.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
  }
];

export const MOVING_CASE_STUDY = {
  title: 'Relocating a 14,000 Sq Ft Emirates Hills Royal Mansion with 200+ Fragile Artworks',
  client: 'Private Sovereign Family, Emirates Hills Sector E',
  scope: '7-Bedroom Palace, 12 Master Walk-In Closets, 14-Seat Cinema, and 24 Custom Glass Chandeliers',
  duration: '36 Hours Turnkey (Zero Damage)',
  metrics: [
    { label: 'Damage-Free Rate', value: '100.0%' },
    { label: 'Bespoke Crates Built', value: '42 Crates' },
    { label: 'Dedicated Crew Size', value: '24 Movers + 4 Carpenters' },
    { label: 'Client Handover Time', value: 'Ahead of Schedule' }
  ],
  challenge: 'Client required discrete, high-security packing of antique Murano crystal chandeliers, grand piano, temperature-sensitive wine collection, and high-end wardrobe items without public disruption.',
  solution: 'Deployed 4 climate-controlled trucks, on-site carpentry shop for tailored crating, barcode itemization, and a team of 4 professional housekeepers who color-coordinated every closet in the new residence.'
};

export const MOVING_GUIDES: MovingGuideArticle[] = [
  {
    id: 'g1',
    title: 'How to Obtain Emaar & Nakheel Move-In Permits in 24 Hours',
    category: 'Permits & Paperwork',
    readTime: '4 Min Read',
    date: 'Updated March 2026',
    snippet: 'Step-by-step instructions for submitting Sakani portal documents, contractor insurance certificates, and avoiding move-day gate delays.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'g2',
    title: 'Packing Fragile Crystal Chandeliers & Oil Paintings for Dubai Summer Moves',
    category: 'Packing Techniques',
    readTime: '6 Min Read',
    date: 'Updated March 2026',
    snippet: 'The professional secret to bespoke ISPM-15 wooden crating, archival tissue paper, and climate-controlled transport during +45°C weather.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'g3',
    title: 'DEWA Disconnection & Ejari Utility Transfer Master Checklist',
    category: 'Utilities & Moving',
    readTime: '5 Min Read',
    date: 'Updated March 2026',
    snippet: 'How to schedule your final DEWA smart meter reading, transfer Du/Etisalat internet, and ensure 100% security deposit return from your landlord.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop'
  }
];

export const PACKING_MATERIALS = [
  {
    name: '5-Ply Corrugated Double-Wall Boxes',
    desc: 'Heavy-duty crush-proof cartons engineered to support up to 45kg stacking loads during transit.'
  },
  {
    name: 'Acid-Free Archival Tissue Paper',
    desc: 'Non-abrasive wrapping preserving crystal glass, silver dinnerware, and delicate gold leaf decor.'
  },
  {
    name: 'Air-Cap Heavy Bubble Wrap',
    desc: 'Micro-cushioned multi-layer air barriers absorbing road vibrations and sudden g-force impacts.'
  },
  {
    name: 'Bespoke ISPM-15 Wooden Crates',
    desc: 'Custom heat-treated timber crates custom-built on-site for oil paintings and crystal chandeliers.'
  },
  {
    name: 'Hygienic Mattress & Sofa Bags',
    desc: 'Heavy gauge sealed polyethylene wraps guarding against Dubai sand dust and humidity.'
  },
  {
    name: 'Wardrobe Rail Boxes',
    desc: 'Direct closet-to-carton hanging boxes keeping designer suits and royal abayas wrinkle-free.'
  }
];

// Aliases for compatibility
export const DEFAULT_CHECKLIST = MOVING_CHECKLIST_DATA;
export const FEATURED_CASE_STUDY = MOVING_CASE_STUDY;
export const UAE_LOCATIONS = UAE_COMMUNITIES;


