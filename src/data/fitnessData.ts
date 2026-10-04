export interface Trainer {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experienceYears: number;
  certifications: string[];
  bio: string;
  philosophy: string;
  specialtiesList: string[];
  image: string;
  rating: number;
  clientCount: number;
  availability: string;
  whatsappMessage: string;
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  category: 'Strength' | 'Transformation' | 'Athletic' | 'Women' | 'Combat' | 'Recovery' | 'Executive';
  durationWeeks: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  sessionsPerWeek: number;
  startingPriceAED: number;
  trainerName: string;
  image: string;
  description: string;
  keyBenefits: string[];
  weeklyStructure: string[];
  idealCustomer: string;
}

export interface FitnessClass {
  id: string;
  name: string;
  category: 'HIIT' | 'Strength' | 'Boxing' | 'Pilates' | 'Yoga' | 'Functional' | 'Spin' | 'Mobility' | 'Recovery';
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  time: string;
  durationMinutes: number;
  trainerName: string;
  capacity: number;
  bookedCount: number;
  intensity: 'Medium' | 'High' | 'Extreme' | 'Restorative';
  locationRoom: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  priceAEDMonthly: number;
  priceAEDAnnualMonthly: number;
  isPopular?: boolean;
  features: string[];
  notIncluded?: string[];
  accessHours: string;
  guestPassesPerMonth: number;
  personalTrainingSessions: number;
}

export interface TransformationResult {
  id: string;
  memberName: string;
  age: number;
  occupation: string;
  programName: string;
  durationWeeks: number;
  weightChangeKg: string;
  bodyFatChange: string;
  story: string;
  beforeImage: string;
  afterImage: string;
  trainerName: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  content: string[];
}

export const FITNESS_TRAINERS: Trainer[] = [
  {
    id: "alex-morgan",
    name: "Alex Morgan",
    title: "Performance Director & Head Strength Coach",
    specialty: "Hypertrophy & Elite Strength",
    experienceYears: 12,
    certifications: ["CSCS (NSCA)", "EXOS Performance Specialist", "PN Level 2 Nutrition"],
    bio: "Former collegiate athlete with over 12 years of experience coaching executive clients and professional athletes in Dubai and London.",
    philosophy: "Progressive overload combined with biomechanical precision is the cornerstone of sustainable physique transformation.",
    specialtiesList: ["Powerlifting & Squat Mechanics", "Body Composition Transformation", "Postural Realignment"],
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
    rating: 5.0,
    clientCount: 140,
    availability: "Mon – Fri (06:00 – 14:00)",
    whatsappMessage: "Hi Alex! I would like to book a private strength consultation at APEX ATHLETICS."
  },
  {
    id: "sofia-laurent",
    name: "Sofia Laurent",
    title: "Reformer Pilates & Mobility Specialist",
    specialty: "Core Architecture & Postural Care",
    experienceYears: 9,
    certifications: ["STOTT Pilates Lead Trainer", "FMS Certified", "Functional Mobility Coach"],
    bio: "Specializing in low-impact resistance training, dynamic spinal alignment, and athletic movement flow for total body stability.",
    philosophy: "Core strength is not just about aesthetics—it is the functional engine for overall movement longevity.",
    specialtiesList: ["Reformer Pilates", "Post-Rehab Conditioning", "Pelvic Floor & Spinal Health"],
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    clientCount: 115,
    availability: "Sun – Thu (08:00 – 16:00)",
    whatsappMessage: "Hi Sofia! I would like to inquire about private Reformer Pilates sessions."
  },
  {
    id: "omar-hassan",
    name: "Omar Hassan",
    title: "Boxing & Combat Fitness Head Coach",
    specialty: "Strikeforce Conditioning & Agility",
    experienceYears: 10,
    certifications: ["Pro Boxing Coach License", "Functional Movement Systems", "USA Weightlifting"],
    bio: "Former regional amateur champion combining technical boxing footwork with high-octane metabolic conditioning workouts.",
    philosophy: "The ring teaches discipline, mental focus, and cardiovascular endurance like no other discipline.",
    specialtiesList: ["Mit Work & Heavy Bag Conditioning", "Footwork & Reflex Drill", "Fat Loss Conditioning"],
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
    rating: 5.0,
    clientCount: 160,
    availability: "Mon – Sat (14:00 – 21:00)",
    whatsappMessage: "Hi Omar! I am interested in joining your Boxing & Combat Fitness program."
  },
  {
    id: "daniel-carter",
    name: "Daniel Carter",
    title: "Athletic Performance & Speed Coach",
    specialty: "Explosive Power & Plyometrics",
    experienceYears: 8,
    certifications: ["ASCA Level 2", "NASM-PES", "Kinstretch Mobility"],
    bio: "Passionate about bridging the gap between gym performance and real-world athletic speed, deceleration, and power.",
    philosophy: "Move fast, land heavy, and build armor around your joints.",
    specialtiesList: ["Sprinting Mechanics", "Jump & Plyometric Training", "ACL Injury Prevention"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    clientCount: 95,
    availability: "Mon – Fri (07:00 – 15:00)",
    whatsappMessage: "Hi Daniel! I want to book an Athletic Performance assessment."
  },
  {
    id: "maya-bennett",
    name: "Maya Bennett",
    title: "Women's Physique & Glute Hypertrophy Specialist",
    specialty: "Female Body Recomposition",
    experienceYears: 7,
    certifications: ["NCSM Certified Trainer", "Pre & Postnatal Fitness Specialist", "Precision Nutrition"],
    bio: "Dedicated to empowering women through progressive heavy resistance training, metabolic circuits, and evidence-based nutrition.",
    philosophy: "Lifting heavy weights transforms female body composition faster and more effectively than endless cardio.",
    specialtiesList: ["Glute Hypertrophy Programming", "Female Hormone & Metabolic Support", "Strength Coaching"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    clientCount: 130,
    availability: "Sun – Thu (09:00 – 17:00)",
    whatsappMessage: "Hi Maya! I would love to start a Women's Transformation program with you."
  },
  {
    id: "karim-nasser",
    name: "Karim Nasser",
    title: "Executive Physique & Metabolic Recomposition Coach",
    specialty: "High-Performance Lifestyle Coaching",
    experienceYears: 11,
    certifications: ["ISSA Master Trainer", "CISSN Sports Nutritionist", "BioSignature Practitioner"],
    bio: "Coaching C-suite executives and busy founders to achieve peak body composition while managing demanding travel and meeting schedules.",
    philosophy: "Efficiency over exhaustion. 45 targeted minutes beats 2 mindless hours in the gym every single time.",
    specialtiesList: ["Time-Efficient HIIT & Strength", "Circadian & Sleep Optimization", "Travel Nutrition Strategies"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    rating: 5.0,
    clientCount: 180,
    availability: "Mon – Fri (06:00 – 12:00)",
    whatsappMessage: "Hi Karim! I would like to discuss your Executive Fitness Coaching package."
  },
  {
    id: "lina-moretti",
    name: "Lina Moretti",
    title: "Recovery & Sports Massage Specialist",
    specialty: "Myofascial Release & Cryo-Recovery",
    experienceYears: 8,
    certifications: ["Licensed Sports Therapist", "Cupping & Dry Needling", "Functional Range Conditioning"],
    bio: "Focusing on muscular decompression, lymphatic drainage, and nervous system down-regulation to accelerate recovery.",
    philosophy: "You can only train as hard as you can recover.",
    specialtiesList: ["Deep Tissue Sports Massage", "Contrast Bath & Cryo Recovery", "Hyper-Mobility Reset"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    clientCount: 110,
    availability: "Mon – Sat (10:00 – 19:00)",
    whatsappMessage: "Hi Lina! I would like to schedule a Recovery & Mobility session."
  },
  {
    id: "ryan-cole",
    name: "Ryan Cole",
    title: "Functional Fitness & Hybrid Conditioning Coach",
    specialty: "HYROX & Multi-Discipline Endurance",
    experienceYears: 9,
    certifications: ["CrossFit Level 3", "HYROX Master Coach", "Aerobic Capacity Certified"],
    bio: "Preparing members for HYROX races, obstacle endurance challenges, and complete functional stamina.",
    philosophy: "Build a physique that performs as impressively as it looks.",
    specialtiesList: ["HYROX Race Prep", "Rowing & Sled Conditioning", "Engine Building"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    clientCount: 125,
    availability: "Mon – Sat (06:00 – 13:00)",
    whatsappMessage: "Hi Ryan! I want to prepare for HYROX and hybrid functional conditioning."
  }
];

export const FITNESS_PROGRAMS: Program[] = [
  {
    id: "strength-lab",
    title: "Strength Lab 360",
    subtitle: "Heavy Compound Barbell & Hypertrophy Architecture",
    category: "Strength",
    durationWeeks: 12,
    difficulty: "Intermediate",
    sessionsPerWeek: 4,
    startingPriceAED: 1899,
    trainerName: "Alex Morgan",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    description: "Periodized 12-week program focusing on deadlift, squat, bench press, and overhead press strength progression combined with muscular density accessory work.",
    keyBenefits: [
      "Significant increase in 1RM strength metrics",
      "Lean muscle mass hypertrophy",
      "Improved joint integrity and tendon resilience",
      "Full bio-mechanical video breakdown of main lifts"
    ],
    weeklyStructure: [
      "Day 1: Lower Body Squat & Quad Focus",
      "Day 2: Upper Body Bench & Chest/Triceps",
      "Day 3: Rest & Recovery Protocol",
      "Day 4: Lower Body Deadlift & Posterior Chain",
      "Day 5: Upper Body Overhead Press & Back/Biceps",
      "Day 6 & 7: Active Recovery & Sauna Zone"
    ],
    idealCustomer: "Lifters with at least 6 months experience wanting structured strength gains."
  },
  {
    id: "transformation-12",
    title: "12-Week Body Recomposition",
    subtitle: "Aggressive Fat Loss & Lean Muscle Preservation",
    category: "Transformation",
    durationWeeks: 12,
    difficulty: "All Levels",
    sessionsPerWeek: 5,
    startingPriceAED: 2499,
    trainerName: "Karim Nasser",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
    description: "Our premier signature 90-day transformation protocol combining 1-on-1 personal training, custom macro coaching, weekly DEXA scan tracking, and metabolic conditioning.",
    keyBenefits: [
      "Average 6-10kg fat loss while preserving lean mass",
      "Full custom nutrition macro blueprint",
      "Bi-weekly DEXA body composition scan analysis",
      "24/7 direct WhatsApp access to your master coach"
    ],
    weeklyStructure: [
      "3 Strength Resistance Sessions",
      "2 High-Intensity Metabolic Conditioning Sessions",
      "Daily NEAT Step Count Target (10,000 steps)",
      "Weekly Progress Photo & Caliper Audits"
    ],
    idealCustomer: "Busy professionals seeking a dramatic 90-day physical transformation."
  },
  {
    id: "athletic-performance",
    title: "Pro-Athletic Speed & Power",
    subtitle: "Explosive Acceleration, Vertical Jump & Agility",
    category: "Athletic",
    durationWeeks: 8,
    difficulty: "Advanced",
    sessionsPerWeek: 4,
    startingPriceAED: 1999,
    trainerName: "Daniel Carter",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    description: "High-level athletic development program utilizing force plates, sprint timing gates, plyometric boxes, and Olympic lifting variations.",
    keyBenefits: [
      "Improved vertical jump and explosive power output",
      "Faster first-step sprint acceleration",
      "Reduced sports injury risk through eccentric braking strength"
    ],
    weeklyStructure: [
      "Day 1: Rate of Force Development (RFD) & Acceleration",
      "Day 2: Upper Body Power & Medicine Ball Throws",
      "Day 3: Deceleration & Change of Direction (COD)",
      "Day 4: Full Body Olympic Lifts & Elasticity"
    ],
    idealCustomer: "Footballers, basketball players, and competitive athletes in Dubai."
  },
  {
    id: "boxing-club",
    title: "Strikeforce Boxing Academy",
    subtitle: "Technical Boxing Mit Work & High-Volume Cardio",
    category: "Combat",
    durationWeeks: 8,
    difficulty: "All Levels",
    sessionsPerWeek: 3,
    startingPriceAED: 1499,
    trainerName: "Omar Hassan",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=800&auto=format&fit=crop",
    description: "Learn genuine boxing punch mechanics, defensive slips, and footwork while burning up to 800 calories per 50-minute session.",
    keyBenefits: [
      "Rapid cardiovascular fat burning and stamina build",
      "Enhanced hand-eye coordination & mental stress release",
      "Authentic mitt work and heavy bag technical skills"
    ],
    weeklyStructure: [
      "Session 1: Stance, Jab-Cross Combinations & Footwork",
      "Session 2: Hook-Upper Combinations & Slip Rope Drills",
      "Session 3: Heavy Bag Intervals & Core Abdominal Conditioning"
    ],
    idealCustomer: "Anyone looking for fun, high-energy stress relief and cardiovascular conditioning."
  }
];

export const FITNESS_CLASSES: FitnessClass[] = [
  {
    id: "class-1",
    name: "HYROX Conditioning Engine",
    category: "HIIT",
    day: "Monday",
    time: "07:00 AM",
    durationMinutes: 50,
    trainerName: "Ryan Cole",
    capacity: 16,
    bookedCount: 14,
    intensity: "High",
    locationRoom: "Functional Turf Area"
  },
  {
    id: "class-2",
    name: "Barbell Heavy Strength",
    category: "Strength",
    day: "Monday",
    time: "09:00 AM",
    durationMinutes: 60,
    trainerName: "Alex Morgan",
    capacity: 12,
    bookedCount: 11,
    intensity: "High",
    locationRoom: "Strength Rig Floor"
  },
  {
    id: "class-3",
    name: "Reformer Core Architecture",
    category: "Pilates",
    day: "Monday",
    time: "10:30 AM",
    durationMinutes: 50,
    trainerName: "Sofia Laurent",
    capacity: 8,
    bookedCount: 8,
    intensity: "Medium",
    locationRoom: "Pilates Studio 1"
  },
  {
    id: "class-4",
    name: "Knockout Boxing Mitts",
    category: "Boxing",
    day: "Tuesday",
    time: "06:30 PM",
    durationMinutes: 50,
    trainerName: "Omar Hassan",
    capacity: 15,
    bookedCount: 12,
    intensity: "Extreme",
    locationRoom: "Boxing Ring Zone"
  },
  {
    id: "class-5",
    name: "Athletic Mobility & Flow",
    category: "Mobility",
    day: "Wednesday",
    time: "08:00 AM",
    durationMinutes: 45,
    trainerName: "Lina Moretti",
    capacity: 14,
    bookedCount: 9,
    intensity: "Restorative",
    locationRoom: "Recovery Lounge"
  },
  {
    id: "class-6",
    name: "Female Sculpt & Glute Lab",
    category: "Strength",
    day: "Thursday",
    time: "05:00 PM",
    durationMinutes: 55,
    trainerName: "Maya Bennett",
    capacity: 12,
    bookedCount: 10,
    intensity: "High",
    locationRoom: "Studio 2"
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "essential",
    name: "Essential Performance",
    tagline: "Access to state-of-the-art strength & cardio floors",
    priceAEDMonthly: 299,
    priceAEDAnnualMonthly: 249,
    accessHours: "Standard Hours (06:00 – 22:00)",
    features: [
      "Full access to strength, cardio & functional floors",
      "Complimentary initial movement assessment",
      "Locker room & infrared sauna access",
      "2 monthly group fitness class credits",
      "APEX Mobile App workout tracking"
    ],
    notIncluded: ["1-on-1 Personal Training", "Cold Plunge Recovery Access"],
    guestPassesPerMonth: 1,
    personalTrainingSessions: 0
  },
  {
    id: "performance",
    name: "Performance Club",
    tagline: "Unlimited group classes + full recovery suite access",
    priceAEDMonthly: 499,
    priceAEDAnnualMonthly: 419,
    isPopular: true,
    accessHours: "24/7 VIP Access",
    features: [
      "24/7 Unlimited gym & facility access",
      "Unlimited access to ALL group fitness classes (Boxing, Reformer, HIIT)",
      "Full Cryo-Plunge & Hydrothermal Sauna recovery suite",
      "Monthly InBody 770 Body Composition Scan",
      "2 monthly Personal Training trial sessions",
      "Complimentary towel service & valet parking"
    ],
    guestPassesPerMonth: 3,
    personalTrainingSessions: 2
  },
  {
    id: "elite",
    name: "Elite Performance",
    tagline: "Total transformation experience with dedicated 1-on-1 coaching",
    priceAEDMonthly: 799,
    priceAEDAnnualMonthly: 679,
    accessHours: "24/7 VIP Priority Access",
    features: [
      "All Performance Club benefits included",
      "4 monthly 1-on-1 Personal Training sessions with senior coach",
      "Custom precision nutrition & macro coaching plan",
      "Priority online booking window for Reformer Pilates & Boxing",
      "Dedicated luxury locker & permanent kit laundry service",
      "Free access to monthly masterclasses & HYROX camps"
    ],
    guestPassesPerMonth: 5,
    personalTrainingSessions: 4
  },
  {
    id: "private-coaching",
    name: "Private Coaching Tier",
    tagline: "Dedicated master trainer, custom DEXA plan & 1-on-1 focus",
    priceAEDMonthly: 1499,
    priceAEDAnnualMonthly: 1299,
    accessHours: "24/7 VIP All-Access + Private Studio Suite",
    features: [
      "12 monthly 1-on-1 private training sessions (3x per week)",
      "Exclusive access to Private Training Studio Suite",
      "Full custom DEXA scan analysis every 30 days",
      "Direct 24/7 WhatsApp channel with your designated Master Coach",
      "Custom sports massage & physical recovery session per month"
    ],
    guestPassesPerMonth: 8,
    personalTrainingSessions: 12
  }
];

export const TRANSFORMATION_RESULTS: TransformationResult[] = [
  {
    id: "trans-1",
    memberName: "Tariq Al-Maktoum (Sample Result)",
    age: 36,
    occupation: "Managing Director",
    programName: "12-Week Body Recomposition",
    durationWeeks: 12,
    weightChangeKg: "-11.5 kg Fat",
    bodyFatChange: "24% → 12%",
    story: "Sample Result — Concept Build. 'Working 60 hours a week, I had lost my physical momentum. Karim's structured 45-minute morning sessions completely re-energized my body and mindset.'",
    beforeImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop",
    trainerName: "Karim Nasser"
  },
  {
    id: "trans-2",
    memberName: "Elena Rostova (Sample Result)",
    age: 31,
    occupation: "Architect",
    programName: "Strength & Glute Hypertrophy",
    durationWeeks: 16,
    weightChangeKg: "+4.2 kg Muscle",
    bodyFatChange: "22% → 17%",
    story: "Sample Result — Concept Build. 'Maya taught me how to squat and deadlift heavy with bulletproof form. I gained 4kg of muscle and doubled my energy level.'",
    beforeImage: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=600&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    trainerName: "Maya Bennett"
  }
];

export const FITNESS_FAQS = [
  {
    q: "Can I book a complimentary Free Trial before joining?",
    a: "Yes! We invite all prospective members to experience APEX ATHLETICS with a complimentary day pass which includes a movement screening assessment and full access to our facilities."
  },
  {
    q: "Where is APEX ATHLETICS located in Dubai?",
    a: "Our flaghship club is located in Downtown Dubai / DIFC area with dedicated valet parking for all members."
  },
  {
    q: "What is included in the Performance Club membership?",
    a: "Performance Club includes 24/7 facility access, unlimited group classes (Reformer Pilates, Boxing, HIIT), full cryo/sauna recovery suite access, and InBody body composition scans."
  },
  {
    q: "How do personal training sessions work?",
    a: "After an initial movement screen and goal setting session, your dedicated coach designs a tailored program, tracks your weights every workout, and guides your nutrition."
  },
  {
    q: "Do you offer female-only training areas or trainers?",
    a: "Yes, we have dedicated female master coaches (like Maya Bennett & Sofia Laurent) and private studio spaces for female members."
  },
  {
    q: "What is the cancellation policy for monthly memberships?",
    a: "Monthly memberships require a 30-day notice period. No long-term lock-in contract is required on standard monthly tiers."
  },
  {
    q: "Can I freeze my membership if I travel out of the UAE?",
    a: "Yes, members can freeze their account for up to 60 days per calendar year free of charge."
  },
  {
    q: "Is parking available at the gym?",
    a: "Complimentary VIP valet parking is available for all Performance, Elite, and Private Coaching members."
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: "building-strength-dubai",
    title: "Building Sustainable Muscle Mass While Managing Executive Travel",
    category: "Training Science",
    readTime: "5 min read",
    date: "August 30, 2026",
    author: "Alex Morgan",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    excerpt: "How to maintain strength gains when flying frequently through strategic hotel bodyweight workouts and protein planning.",
    content: [
      "Traveling frequently for business can easily derail fitness progress if you rely on rigid gym routines.",
      "By focusing on rate-of-perceived-exertion (RPE) rather than fixed weights, you can adjust intensity based on jet lag.",
      "Prioritize compound tension exercises like Bulgarian split squats, push-up deficits, and isometric core holds."
    ]
  },
  {
    id: "recovery-cryo-sauna",
    title: "The Science of Contrast Therapy: Cold Plunge vs Thermal Sauna",
    category: "Recovery & Health",
    readTime: "6 min read",
    date: "August 22, 2026",
    author: "Lina Moretti",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    excerpt: "Understanding how alternating between 14°C cold plunge tubs and 85°C Finnish saunas flushes metabolic waste.",
    content: [
      "Vasoconstriction from cold water immersion reduces acute inflammation post-workout.",
      "Heat shock proteins produced in saunas stimulate growth factor release and cardiovascular circulation.",
      "We recommend 3 rounds of 15 minutes sauna followed by 3 minutes cold plunge for optimal nervous system reset."
    ]
  }
];
