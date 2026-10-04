export interface VetService {
  id: string;
  name: string;
  category: 'General' | 'Preventive' | 'Dental' | 'Diagnostics' | 'Specialist' | 'Emergency';
  description: string;
  price: number;
  duration: string;
  suitablePets: string;
  included: string[];
  preparation: string;
  aftercare: string;
  image: string;
  badge?: string;
}

export interface GroomingService {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  suitablePets: string;
  included: string[];
  image: string;
  isPopular?: boolean;
}

export interface Veterinarian {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  qualifications: string;
  languages: string[];
  petTypes: string[];
  consultationFee: number;
  availability: string;
  bio: string;
  image: string;
  rating: number;
  reviewsCount: number;
  certifications: string[];
}

export interface BoardingSuite {
  id: string;
  name: string;
  category: 'Canine' | 'Feline' | 'Exotic' | 'Medical ICU';
  tagline: string;
  pricePerNight: number;
  size: string;
  description: string;
  amenities: string[];
  image: string;
  features: { label: string; value: string }[];
  isPopular?: boolean;
}

export interface PetProduct {
  id: string;
  name: string;
  category: 'Food' | 'Treats' | 'Supplements' | 'Grooming' | 'Toys' | 'Accessories' | 'Wellness';
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  size: string;
  targetPet: 'Dogs' | 'Cats' | 'All Pets' | 'Birds';
  brand: string;
  prescriptionRequired?: boolean;
  inStock: boolean;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ClinicLocation {
  id: string;
  name: string;
  emirate: 'Dubai' | 'Abu Dhabi' | 'Sharjah';
  address: string;
  phone: string;
  emergencyPhone: string;
  hours: string;
  facilities: string[];
  image: string;
  is24h: boolean;
}

export const CLINIC_LOCATIONS: ClinicLocation[] = [
  {
    id: 'dubai-jumeirah',
    name: 'Jumeirah Flagship 24/7 Hospital & Surgical Center',
    emirate: 'Dubai',
    address: 'Villa 412, Al Wasl Road, Jumeirah 2, Dubai, UAE',
    phone: '+971 4 388 9200',
    emergencyPhone: '+971 52 339 4001',
    hours: 'Open 24 Hours • 7 Days a Week • 365 Days',
    facilities: ['Level 1 ICU Trauma Center', '128-Slice CT Scanner', '2 Positive-Pressure Surgical Suites', 'Hydrotherapy Rehab Pool', 'Cat-Only Fear-Free Ward'],
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop',
    is24h: true
  },
  {
    id: 'dubai-hills',
    name: 'Dubai Hills Wellness & Luxury Boarding Sanctuary',
    emirate: 'Dubai',
    address: 'Clubhouse Pavilion, Dubai Hills Boulevard, Dubai, UAE',
    phone: '+971 4 455 8100',
    emergencyPhone: '+971 52 339 4001',
    hours: '8:00 AM – 11:00 PM Daily (24/7 On-Call)',
    facilities: ['Luxury Presidential Suites', 'Aroma Spa Grooming Lounge', 'Ultrasound & X-Ray Suite', 'Outdoor Grass Play Haven'],
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=800&auto=format&fit=crop',
    is24h: false
  },
  {
    id: 'abu-dhabi-bateen',
    name: 'Al Bateen Specialist Medical & Cardiac Center',
    emirate: 'Abu Dhabi',
    address: 'Bateen Marina Promenade, Sector 34, Abu Dhabi, UAE',
    phone: '+971 2 688 4300',
    emergencyPhone: '+971 50 882 1999',
    hours: 'Open 24 Hours • 7 Days a Week',
    facilities: ['Cardiac Diagnostics & Doppler', 'Endoscopy & Laparoscopy', 'Feline Luxury Villas', 'Avian & Falconry Diagnostics'],
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop',
    is24h: true
  },
  {
    id: 'sharjah-waterfront',
    name: 'Sharjah Al Majaz Emergency & Dental Clinic',
    emirate: 'Sharjah',
    address: 'Corniche Street, Al Majaz 2 Waterfront, Sharjah, UAE',
    phone: '+971 6 522 1900',
    emergencyPhone: '+971 52 339 4001',
    hours: '24/7 Emergency & Outpatient',
    facilities: ['Digital Dental Radiography', 'Laser Therapy Clinic', 'Emergency Oxygen Incubators', 'Microchip ID Registration'],
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop',
    is24h: true
  }
];

export const VET_SERVICES_DATA: VetService[] = [
  {
    id: 'vet-consult',
    name: 'Comprehensive Nose-to-Tail Medical Consultation',
    category: 'General',
    description: 'Thorough head-to-tail physical assessment including cardiovascular auscultation, otoscopy, ophthalmic inspection, dental grading, vital palpation, and tailored nutrition plan.',
    price: 195,
    duration: '30 min',
    suitablePets: 'Dogs, Cats, Rabbits, Guinea Pigs & Small Mammals',
    included: [
      'Complete body physical exam & vital telemetry',
      'Cardiopulmonary auscultation & weight curve audit',
      'High-resolution otoscopic & ophthalmic inspection',
      'MOCCAE Health Record digital update & prescription review'
    ],
    preparation: 'Bring previous medical history & UAE vaccination book if new patient',
    aftercare: 'Personalized wellness summary delivered via WhatsApp within 1 hour',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop',
    badge: 'Most Booked'
  },
  {
    id: 'vet-vaccine',
    name: 'Core Annual Immunization & UAE Passport Certification',
    category: 'Preventive',
    description: 'Essential core protective vaccinations (Rabies, DHPPi-L for dogs / FVRCP-FeLV for cats) plus pre-vaccine vitals screen and official Dubai Municipality digital passport endorsement.',
    price: 240,
    duration: '25 min',
    suitablePets: 'Canines & Felines of all ages',
    included: [
      'Pre-immunization clinical temperature & vitals screen',
      'Cold-chain certified core vaccination administration',
      'Dubai Municipality & MOCCAE digital microchip verification',
      'Official UAE Veterinary Passport stamping'
    ],
    preparation: 'Ensure pet is fever-free and active on day of consultation',
    aftercare: 'Mild lethargy for 12-24h is normal; keep in air-conditioned room',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop',
    badge: 'Ministry Approved'
  },
  {
    id: 'vet-emergency-icu',
    name: '24/7 Level-1 Emergency Trauma & Critical Care ICU',
    category: 'Emergency',
    description: 'Immediate rapid-response emergency stabilization for vehicular trauma, acute heat stroke, toxin ingestion, respiratory distress, and bloat/GDV with continuous ICU monitoring.',
    price: 450,
    duration: 'Immediate Triage',
    suitablePets: 'All companion animals & avian species',
    included: [
      'Zero-wait immediate triage in positive-pressure trauma bay',
      'Continuous multiparameter ECG, SpO2 & blood pressure telemetry',
      'Emergency high-flow oxygen canopy & IV crystalloid resuscitation',
      'Immediate STAT blood gas analysis & FAST ultrasound'
    ],
    preparation: 'Call emergency hotline (+971 52 339 4001) while en route for bay prep',
    aftercare: '24/7 ICU continuous round-the-clock veterinary surveillance',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop',
    badge: '24/7 Priority Bay'
  },
  {
    id: 'vet-dental',
    name: 'Ultrasonic Dental Scaling, Polishing & Digital X-Ray',
    category: 'Dental',
    description: 'Full veterinary dental prophylaxis under gentle sevoflurane anesthesia. Removes calculus subgingivally, polishes enamel, and captures sub-surface dental pathology via digital radiographs.',
    price: 650,
    duration: '60 – 90 min',
    suitablePets: 'Dogs & Cats over 1 year of age',
    included: [
      'Pre-anesthetic comprehensive organ biochemistry profile',
      'Full-mouth digital dental radiography',
      'Subgingival ultrasonic ultrasonic calculus curettage',
      'High-speed fluoride polishing and barrier sealant'
    ],
    preparation: 'Strict 8-hour fasting prior to admission; water allowed up to 2 hours prior',
    aftercare: 'Soft diet for 3 days; complimentary post-op dental check in 7 days',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop',
    badge: 'Zero Pain Protocol'
  },
  {
    id: 'vet-ultrasound-ct',
    name: 'High-Resolution Abdominal Ultrasound & 128-Slice CT',
    category: 'Diagnostics',
    description: 'Advanced diagnostic imaging performed by RCVS board-certified radiologists. Evaluates liver, kidneys, pancreas, gastrointestinal tract, and thoracic cavity with sub-millimeter precision.',
    price: 780,
    duration: '45 min',
    suitablePets: 'All species requiring internal organ staging',
    included: [
      'Comprehensive organ Doppler vascular imaging',
      'Real-time color Doppler echocardiography assessment',
      'Digital DICOM images transferred to client cloud portal',
      'Same-day formal specialist radiology audit report'
    ],
    preparation: 'Fast pet for 8 hours prior to maximize gallbladder and intestinal visualization',
    aftercare: 'Zero downtime; pet resumes regular meals immediately',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop',
    badge: 'Same-Day Report'
  },
  {
    id: 'vet-orthopedic-surgery',
    name: 'Minimally Invasive Orthopedic & Soft Tissue Surgery',
    category: 'Specialist',
    description: 'Specialized cruciate ligament repair (TPLO), patellar luxation correction, fracture plating, and laparoscopy performed in ultra-sterile positive-pressure operating theaters.',
    price: 2800,
    duration: '2 – 4 hours',
    suitablePets: 'Canines and felines with orthopedic injury or joint dysplasia',
    included: [
      'Pre-operative cardiac clearance and blood workup',
      'Orthopedic implant hardware & fluoroscopic verification',
      'Multimodal CRI pain management protocol',
      'Post-operative overnight ICU suite stay with continuous monitoring'
    ],
    preparation: 'Consultation with orthopedic surgeon required prior to booking date',
    aftercare: 'Includes 4 complimentary post-op physical rehabilitation sessions',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop',
    badge: 'Board-Certified Surgeons'
  },
  {
    id: 'vet-travel-passport',
    name: 'UAE Pet Relocation & International Travel Clearance',
    category: 'Preventive',
    description: 'Full international pet travel documentation including Rabies Titre RNATT blood sampling, DEFRA/USDA/EU compliance certifications, and MOCCAE export permit issuance.',
    price: 850,
    duration: '40 min',
    suitablePets: 'Relocating pets traveling out of UAE or GCC',
    included: [
      'ISO 11784/11785 compliant microchip verification',
      'Rabies Neutralizing Antibody Titre (RNATT) serum testing',
      'Official MOCCAE government export health certificate submission',
      'IATA approved crate dimensioning and fitness-to-fly exam'
    ],
    preparation: 'Book at least 30 to 90 days before your intended travel date',
    aftercare: 'Flight day calming supplements and hydration guide provided',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=800&auto=format&fit=crop',
    badge: '100% Export Approval'
  },
  {
    id: 'vet-hydrotherapy-rehab',
    name: 'Canine Aquatic Hydrotherapy & Laser Physical Rehab',
    category: 'Specialist',
    description: 'Heated underwater treadmill therapy, Class-IV regenerative laser therapy, and active joint mobilization designed for post-op recovery, arthritis, and elderly vitality.',
    price: 320,
    duration: '45 min',
    suitablePets: 'Post-op pets, arthritic dogs, working K9s, and weight loss patients',
    included: [
      'Heated 32°C sanitized aquatic treadmill session with certified physio',
      'Class-IV deep tissue regenerative laser therapy',
      'Goniometric joint range of motion measurement',
      'Blow dry & conditioning coat finish'
    ],
    preparation: 'Avoid feeding large meal within 2 hours prior to hydrotherapy',
    aftercare: 'High-protein hydration broth provided post-swim',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop',
    badge: 'Regenerative Physio'
  }
];

export const GROOMING_SERVICES_DATA: GroomingService[] = [
  {
    id: 'groom-royal-spa',
    name: 'The Royal Sovereign Spa & Aromatherapy Groom',
    description: 'Ultimate hydro-massage warm bath with organic dead sea minerals, double blueberry facial scrub, paw pad botanical balm, sanitary clip, hand scissor finish, and signature fragrance.',
    price: 280,
    duration: '90 min',
    suitablePets: 'Dogs of all breeds (Small to Giant)',
    included: [
      'Hydro-massage bath with hypo-allergenic botanicals',
      'Blueberry tear-stain cleansing facial',
      'Nail trimming & precision diamond file rounding',
      'Ear cleansing & gentle hair plucking',
      'Hand scissor coat styling by master groomer'
    ],
    image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: 'groom-feline-luxury',
    name: 'Fear-Free Feline Luxury Silk Bath & Lion Cut',
    description: 'Stress-free dedicated cat-only grooming sanctuary with pheromone diffusion. Includes degreasing silk bath, lion trim or teddy bear clip, sanitary hygiene, and claw smoothing.',
    price: 240,
    duration: '60 min',
    suitablePets: 'Persian, British Shorthair, Ragdoll, Maine Coon & all cats',
    included: [
      'Feliway-infused quiet cat grooming suite',
      'Degreasing silk protein shampoo & deep conditioner',
      'Mat dematting and precision scissor styling',
      'Claw clipping and ear sanitization'
    ],
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop',
    isPopular: false
  },
  {
    id: 'groom-ozone-therapy',
    name: 'Medical Ozone Jacuzzi & Coat Deshedding Treatment',
    description: 'Deep micro-bubble ozone spa that eliminates bacteria, soothes allergic dermatitis, opens skin pores, and extracts loose undercoat with high-velocity blow dry.',
    price: 350,
    duration: '75 min',
    suitablePets: 'Husky, Golden Retriever, German Shepherd & heavy shedders',
    included: [
      'Ozone microbubble therapeutic jacuzzi soak',
      'Furminator deep undercoat deshedding extraction',
      'Aloe vera soothing skin dermal rinse',
      'Teeth enzyme gel brushing & breath freshening'
    ],
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=800&auto=format&fit=crop',
    isPopular: true
  }
];

export const VETERINARIANS_DATA: Veterinarian[] = [
  {
    id: 'dr-sarah-al-falasi',
    name: 'Dr. Sarah Al-Falasi, BVM&S, MRCVS',
    title: 'Chief Medical Director & Soft Tissue Surgeon',
    specialty: 'Soft Tissue Surgery & Laparoscopy',
    experience: '14+ Years Clinical Leadership',
    qualifications: 'Royal Veterinary College (London) • Board Certified MRCVS',
    languages: ['Arabic', 'English', 'French'],
    petTypes: ['Dogs', 'Cats', 'Falconry & Avian'],
    consultationFee: 295,
    availability: 'Mon, Tue, Thu, Sat (Jumeirah Flagship)',
    bio: 'Pioneered minimally invasive laparoscopic surgery for companion animals in the UAE. Awarded UAE Veterinary Excellence Medal for feline welfare advocacy.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop',
    rating: 4.98,
    reviewsCount: 384,
    certifications: ['RCVS Certified', 'MOCCAE Licensed', 'Fear-Free Certified Professional']
  },
  {
    id: 'dr-marcus-vance',
    name: 'Dr. Marcus Vance, DVM, DACVS',
    title: 'Head of Orthopedics & Spinal Neurosurgery',
    specialty: 'Orthopedic Joint Repair & TPLO',
    experience: '18+ Years Surgical Expertise',
    qualifications: 'University of California, Davis • Diplomate ACVS',
    languages: ['English', 'German'],
    petTypes: ['Canines', 'Large Working Breeds', 'Felines'],
    consultationFee: 350,
    availability: 'Wed, Fri, Sun (Dubai Hills & Abu Dhabi)',
    bio: 'International authority on canine cruciate biomechanics and regenerative stem cell joint therapies. Over 2,400 successful TPLO surgeries conducted.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop',
    rating: 4.99,
    reviewsCount: 420,
    certifications: ['Diplomate ACVS', 'AOVET Faculty Member', 'DED Surgical Specialist']
  },
  {
    id: 'dr-elena-rostova',
    name: 'Dr. Elena Rostova, DVM, Ph.D.',
    title: 'Director of Cardiology & Internal Medicine',
    specialty: 'Cardiopulmonary & Echocardiography',
    experience: '12+ Years Cardiology Practice',
    qualifications: 'Zurich University Veterinary Hospital • Ph.D. Internal Medicine',
    languages: ['English', 'Russian', 'German'],
    petTypes: ['Felines', 'Canines', 'Senior Geriatric Pets'],
    consultationFee: 280,
    availability: 'Daily 24/7 On-Call (Jumeirah & Bateen)',
    bio: 'Specializes in feline hypertrophic cardiomyopathy (HCM) screening and geriatric canine cardiac failure management with sub-millimeter ultrasound telemetry.',
    image: 'https://images.unsplash.com/photo-1594824813584-f725a3a6b5a3?q=80&w=800&auto=format&fit=crop',
    rating: 4.97,
    reviewsCount: 290,
    certifications: ['European Cardiology Society', 'Feline Friendly Gold Vet', 'UAE Lic. 2014']
  },
  {
    id: 'dr-tariq-mansoori',
    name: 'Dr. Tariq Mansoori, B.Sc., DVM',
    title: 'Senior 24/7 Trauma & Emergency Physician',
    specialty: 'Emergency ICU & Toxin Toxicology',
    experience: '10+ Years Trauma Medicine',
    qualifications: 'University of Melbourne • Emergency Critical Care Fellowship',
    languages: ['Arabic', 'English'],
    petTypes: ['All Companion & Exotic Species'],
    consultationFee: 240,
    availability: '24/7 Emergency Rotation (All Hubs)',
    bio: 'Leading our 24/7 rapid response trauma division. Expert in snake envenomation, acute heat hyperthermia protocols, and multi-organ resuscitation.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop',
    rating: 4.96,
    reviewsCount: 315,
    certifications: ['VECCS Member', 'Advanced Life Support Certified', 'Dubai Municipality Registered']
  }
];

export const BOARDING_SUITES_DATA: BoardingSuite[] = [
  {
    id: 'presidential-canine-villa',
    name: 'Presidential Royal Canine Villa',
    category: 'Canine',
    tagline: 'Private 120 sq.ft. Garden Suite with HD Webcam & Private Splash Session',
    pricePerNight: 280,
    size: '120 sq. ft. Private Villa',
    description: 'Ultra-luxurious climate-controlled private suite featuring Tempur-Pedic orthopedic bedding, 24/7 private HD live-stream camera access for parents, 4 daily outdoor grass excursions, and evening bedtime story cuddle.',
    amenities: [
      '24/7 Private HD Webcam Access on Mobile App',
      'Personalized Gourmet Chef Organic Meal Prep',
      'Orthopedic Memory Foam Bed with Fresh Linens Daily',
      'Private 30-min Daily Splash Pool Session',
      'Dedicated Certified Veterinary Nurse Supervision'
    ],
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?q=80&w=800&auto=format&fit=crop',
    features: [
      { label: 'Suite Size', value: '120 sq. ft.' },
      { label: 'Air Con', value: 'HEPA Climatized 21°C' },
      { label: 'Daily Walks', value: '4 Grass Sessions' },
      { label: 'Webcam', value: '24/7 4K Live Stream' }
    ],
    isPopular: true
  },
  {
    id: 'royal-feline-penthouse',
    name: 'Royal Feline Penthouse Sanctuary',
    category: 'Feline',
    tagline: 'Multi-Level Vertical Playground with Aquarium View & Catnip Lounge',
    pricePerNight: 190,
    size: '75 sq. ft. Multi-Tier Villa',
    description: 'Calm, soundproofed cat-only villa far from canine wards. Equipped with ceiling-height climbing trees, bird-feeder window views, soft velvet hammocks, and continuous Feliway pheromone soothing.',
    amenities: [
      'Sound-Isolated Fear-Free Feline Only Wing',
      'Multi-Level Birch Climbing Tower & Hammocks',
      'Continuous Feliway Pheromone Relaxation Vapor',
      'Organic Cat Grass & Interactive Laser Play',
      'Daily Coat Brushing & Wellness Telemetry Check'
    ],
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop',
    features: [
      { label: 'Suite Size', value: '75 sq. ft.' },
      { label: 'Acoustic', value: '100% Soundproofed' },
      { label: 'Playtime', value: 'Individual Laser & Brush' },
      { label: 'Comfort', value: 'Velvet Heated Loungers' }
    ],
    isPopular: false
  },
  {
    id: 'medical-post-op-icu-suite',
    name: 'Specialist Post-Op ICU Recovery Suite',
    category: 'Medical ICU',
    tagline: 'Oxygen-Enriched Heated Suite with 24/7 Direct Vet Nurse Monitoring',
    pricePerNight: 350,
    size: 'Clinical Recovery Bay',
    description: 'Designed for pets recovering from major surgery, orthopedics, or managing chronic illnesses like diabetes. Features continuous telemetry vitals, programmed IV fluid delivery, and scheduled medication by vet nurses.',
    amenities: [
      'Continuous Vital Telemetry (SpO2, ECG, Temp)',
      '24/7 Dedicated Registered Veterinary Nurse at Bay',
      'Programmed IV Fluid Therapy & Injectable Meds',
      'Soft Low-Impact Orthopedic Positioning Mattresses',
      'Daily Morning & Evening Doctor Progress Rounds'
    ],
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=800&auto=format&fit=crop',
    features: [
      { label: 'Monitoring', value: '24/7 Continuous Telemetry' },
      { label: 'Staffing', value: '1-on-1 Vet Nurse' },
      { label: 'Oxygen', value: 'Medical High-Flow Port' },
      { label: 'Physio', value: 'Passive Range of Motion' }
    ],
    isPopular: false
  }
];

export const PET_PRODUCTS_DATA: PetProduct[] = [
  {
    id: 'prod-royal-canin-gastro',
    name: 'Royal Canin Veterinary Diet Gastrointestinal Low Fat (12kg)',
    category: 'Food',
    price: 365,
    rating: 4.9,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?q=80&w=800&auto=format&fit=crop',
    description: 'Highly digestible formula with balanced fibers and prebiotics to support healthy canine digestion during acute digestive disorders.',
    size: '12 kg Bag',
    targetPet: 'Dogs',
    brand: 'Royal Canin Veterinary',
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: 'prod-hills-urinary-cd',
    name: 'Hill’s Prescription Diet c/d Multicare Feline Urinary Care (5kg)',
    category: 'Food',
    price: 245,
    rating: 4.95,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?q=80&w=800&auto=format&fit=crop',
    description: 'Clinically tested nutrition to dissolve struvite stones and reduce the risk of calcium oxalate stone recurrence in cats.',
    size: '5 kg Bag',
    targetPet: 'Cats',
    brand: "Hill's Prescription Diet",
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: 'prod-yumove-joint-plus',
    name: 'YuMOVE Joint Care PLUS Max Strength for Senior Dogs (120 Tablets)',
    category: 'Supplements',
    price: 285,
    rating: 5.0,
    reviews: 215,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
    description: 'Triple-action high-strength Green Lipped Mussel formula to soothe stiff joints, aid mobility, and support long-term cartilage health.',
    size: '120 Chewable Tabs',
    targetPet: 'Dogs',
    brand: 'Lintbells YuMOVE UK',
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: 'prod-feliway-optimum',
    name: 'Feliway Optimum Enhanced Feline Calming Diffuser & 30-Day Refill',
    category: 'Wellness',
    price: 185,
    rating: 4.88,
    reviews: 160,
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=800&auto=format&fit=crop',
    description: 'Advanced new feline pheromone complex that helps reduce common signs of feline stress including spraying, scratching, and hiding.',
    size: '48ml Diffuser + Plug',
    targetPet: 'Cats',
    brand: 'Ceva Animal Health',
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: 'prod-virbac-cetc-chews',
    name: 'Virbac C.E.T. VeggieDent Fr3sh Enzymatic Dental Chews',
    category: 'Treats',
    price: 110,
    rating: 4.92,
    reviews: 87,
    image: 'https://images.unsplash.com/photo-1535294435445-d7249524ef2e?q=80&w=800&auto=format&fit=crop',
    description: 'Patented Z-shape dental chews with FR3SH technology targeting oral, digestive, and breath freshness with clinically proven tartar control.',
    size: '30 Chews (Medium 10-30kg)',
    targetPet: 'Dogs',
    brand: 'Virbac France',
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: 'prod-nexgard-spectra',
    name: 'NexGard SPECTRA Flea, Tick, Heartworm & Intestinal Worm Treatment',
    category: 'Wellness',
    price: 210,
    rating: 4.98,
    reviews: 310,
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=800&auto=format&fit=crop',
    description: 'Complete all-in-one monthly tasty chewable providing rapid flea/tick elimination and internal parasite protection for UAE dogs.',
    size: '3 Chews (3 Month Supply)',
    targetPet: 'Dogs',
    brand: 'Boehringer Ingelheim',
    prescriptionRequired: false,
    inStock: true
  }
];

export const PET_FAQS_DATA: FaqItem[] = [
  {
    category: 'Emergency & Hospital',
    question: 'How does your 24/7 Emergency Triage operate?',
    answer: 'Our Level-1 Emergency ICU operates 24 hours a day, 365 days a year across our Jumeirah Flagship and Al Bateen Abu Dhabi hospitals. Zero booking is required for emergencies. When you arrive or call our direct emergency hotline (+971 52 339 4001), our triage team immediately preps the trauma bay with high-flow oxygen, IV fluid resuscitation, and emergency ultrasound.'
  },
  {
    category: 'Pricing & Insurance',
    question: 'Are veterinary bills covered by UAE pet insurance providers?',
    answer: 'Yes. Paws & Claws Clinic is officially accredited with all major UAE and international pet health insurance providers including MetLife UAE, Sukoon Pet Insurance, and Alliance Medical. We provide direct digital claims processing, itemized diagnostic receipts, and medical history export to facilitate rapid reimbursement.'
  },
  {
    category: 'Relocation & Travel',
    question: 'What is required to export my pet from the UAE internationally?',
    answer: 'International export requires an ISO microchip, up-to-date Rabies and core vaccines, a Rabies Neutralizing Antibody Titre Test (RNATT) from an authorized EU/UK/US lab, an internal/external parasite treatment certificate within 48-120 hours of departure, and an official MOCCAE Government Export Permit. Our pet travel concierge handles the entire timeline end-to-end.'
  },
  {
    category: 'Boarding & Hotel',
    question: 'What vaccinations are required before boarding in your luxury suites?',
    answer: 'For the safety of all guests, dogs must have verified Rabies, DHPPi-L, and Kennel Cough (Bordetella) vaccinations. Cats require Rabies and FVRCP-FeLV. Vaccinations must have been administered at least 7 days prior to check-in. All guests receive a complimentary entry physical exam by our veterinary nurse upon arrival.'
  },
  {
    category: 'General Clinical',
    question: 'What makes your clinic "Fear-Free Certified"?',
    answer: 'Our hospital is designed from the ground up to minimize sensory stress. We feature separate canine and feline entrances and waiting lounges, acoustic soundproofing, Feliway & Adaptil pheromone diffusers in examination rooms, slip-free warm examination mats, gentle low-stress handling techniques, and species-separated hospital recovery wards.'
  }
];

export const PET_REVIEWS_DATA = [
  {
    id: 'rev-1',
    author: 'Mansoor Al-Maktoum',
    location: 'Emirates Hills, Dubai',
    pet: 'Kaiser (German Shepherd, 4 yrs)',
    service: 'TPLO Cruciate Knee Surgery',
    rating: 5,
    text: 'Dr. Marcus Vance and the surgical team gave Kaiser his life back after a severe cruciate ligament tear. From the 128-slice CT scan to the post-op hydrotherapy pool sessions, the care was beyond world-class. He is running pain-free again.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: 'rev-2',
    author: 'Charlotte & James Sterling',
    location: 'Palm Jumeirah, Dubai',
    pet: 'Milo & Cleo (Ragdoll Cats)',
    service: 'Royal Feline Penthouse Boarding',
    rating: 5,
    text: 'We travel frequently for business and leaving our cats was always stressful until we found Paws & Claws. The 24/7 4K webcam on the mobile app, daily veterinary nurse wellness reports, and quiet cat-only wing gave us 100% peace of mind.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: 'rev-3',
    author: 'Dr. Hessa Al-Qassimi',
    location: 'Al Bateen, Abu Dhabi',
    pet: 'Zeus (Golden Retriever, 7 yrs)',
    service: 'Emergency Heat Stroke ICU Care',
    rating: 5,
    text: 'When Zeus suffered acute heat exhaustion during a desert morning walk, the 24/7 emergency response in Jumeirah was lightning fast. They had cooling baths and oxygen ready the second we pulled into the bay. Truly saved his life.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop'
  }
];
