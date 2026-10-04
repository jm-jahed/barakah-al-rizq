export interface YogaClass {
  id: string;
  name: string;
  category: 'Yoga' | 'Pilates' | 'Meditation' | 'Mobility' | 'Recovery' | 'Breathwork';
  level: 'All Levels' | 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  instructor: string;
  description: string;
  benefits: string[];
  effort: string; // e.g., 'Low', 'Moderate', 'High'
  equipment: string[];
  schedule: string;
  priceSingle: number;
  image: string;
  featured?: boolean;
}

export interface WellnessInstructor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  certifications: string[];
  languages: string[];
  biography: string;
  classes: string[];
  image: string;
}

export interface WellnessProgram {
  id: string;
  title: string;
  duration: string;
  goal: string;
  weeklyStructure: string;
  sessionsCount: number;
  benefits: string[];
  suitableFor: string;
  price: number;
  image: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  cadence: string;
  popular?: boolean;
  tagline: string;
  features: string[];
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const CLASSES_DATA: YogaClass[] = [
  {
    id: 'sunrise-vinyasa',
    name: 'Sunrise Vinyasa Flow',
    category: 'Yoga',
    level: 'All Levels',
    duration: '60 min',
    instructor: 'Maya Lin',
    description: 'Energetic morning fluid sequence linking movement with conscious breath to awaken spinal mobility, core heat, and mental clarity.',
    benefits: ['Full-body activation', 'Spinal alignment', 'Morning mental clarity', 'Cardiovascular warming'],
    effort: 'Moderate',
    equipment: ['Yoga Mat', 'Cork Blocks', 'Strap'],
    schedule: 'Mon, Wed, Fri • 07:00 AM',
    priceSingle: 85,
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop',
    featured: true
  },
  {
    id: 'slow-flow-restore',
    name: 'Slow Flow & Restore',
    category: 'Yoga',
    level: 'Beginner',
    duration: '60 min',
    instructor: 'Aria Sterling',
    description: 'A mindful, gentle pace focusing on alignment, hip opening, and extended holds to release deep-seated myofascial tension.',
    benefits: ['Stress reduction', 'Deep hip mobility', 'Nervous system soothing', 'Improved posture'],
    effort: 'Low',
    equipment: ['Yoga Mat', 'Bolster', 'Blanket'],
    schedule: 'Tue, Thu • 09:30 AM',
    priceSingle: 85,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
    featured: true
  },
  {
    id: 'power-sculpt-yoga',
    name: 'Power Sculpt Yoga',
    category: 'Yoga',
    level: 'Intermediate',
    duration: '60 min',
    instructor: 'Liam Vance',
    description: 'Dynamic athletic sequence incorporating bodyweight resistance, arm balances, and core conditioning for endurance.',
    benefits: ['Functional muscle strength', 'Caloric burn', 'Core stability', 'Balance & focus'],
    effort: 'High',
    equipment: ['Yoga Mat', 'Light Dumbbells'],
    schedule: 'Mon, Wed, Sat • 05:30 PM',
    priceSingle: 95,
    image: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'yin-deep-release',
    name: 'Yin & Deep Release',
    category: 'Yoga',
    level: 'All Levels',
    duration: '75 min',
    instructor: 'Elena Rostova',
    description: 'Floor-based meditative practice with 3 to 5-minute passive holds targeting connective tissues, ligaments, and joints.',
    benefits: ['Joint health', 'Deep connective tissue release', 'Parasympathetic activation', 'Enhanced flexibility'],
    effort: 'Low',
    equipment: ['Bolster', 'Blocks', 'Weighted Blanket'],
    schedule: 'Daily • 07:30 PM',
    priceSingle: 90,
    image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=800&auto=format&fit=crop',
    featured: true
  },
  {
    id: 'reformer-pilates-core',
    name: 'Reformer Pilates Core',
    category: 'Pilates',
    level: 'Intermediate',
    duration: '50 min',
    instructor: 'Sofia Laurent',
    description: 'Precision spring-loaded carriage training targeting deep transverse abdominis, glutes, and scapular stability.',
    benefits: ['Lean muscle toning', 'Postural correction', 'Low-impact strength', 'Spinal lengthening'],
    effort: 'Moderate',
    equipment: ['Allegro 2 Reformer', 'Grip Socks'],
    schedule: 'Mon, Tue, Thu • 08:30 AM',
    priceSingle: 140,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
    featured: true
  },
  {
    id: 'mat-pilates-sculpt',
    name: 'Mat Pilates Sculpt',
    category: 'Pilates',
    level: 'All Levels',
    duration: '50 min',
    instructor: 'Sofia Laurent',
    description: 'Joseph Pilates classical mat sequence enhanced with resistance rings, mini-balls, and resistance bands.',
    benefits: ['Abdominal hollow strength', 'Pelvic floor control', 'Glute activation', 'Body alignment'],
    effort: 'Moderate',
    equipment: ['Mat', 'Pilates Ring', 'Mini Ball'],
    schedule: 'Wed, Fri, Sun • 10:00 AM',
    priceSingle: 90,
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'pranayama-breathwork',
    name: 'Pranayama & Somatic Breathwork',
    category: 'Breathwork',
    level: 'All Levels',
    duration: '45 min',
    instructor: 'Kaelen Thorne',
    description: 'Rhythmic conscious breathing patterns (box breathing, 4-7-8, circular breath) to regulate vagus nerve tone and clear mental fog.',
    benefits: ['Vagus nerve stimulation', 'Cortisol reduction', 'Enhanced lung capacity', 'Emotional release'],
    effort: 'Low',
    equipment: ['Meditation Cushion', 'Eye Pillow'],
    schedule: 'Tue, Thu • 06:30 PM',
    priceSingle: 85,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'sound-bath-meditation',
    name: 'Crystal Bowl Sound Bath',
    category: 'Meditation',
    level: 'All Levels',
    duration: '60 min',
    instructor: 'Nadia Al-Mansoor',
    description: 'Immersive auditory journey using 432Hz quartz crystal bowls, Tibetan gongs, and chimes to induce deep brainwave relaxation.',
    benefits: ['Theta brainwave state', 'Cellular frequency resonance', 'Anxiety release', 'Restful sleep improvement'],
    effort: 'Low',
    equipment: ['Zero-gravity Mat', 'Eye Mask', 'Cashmere Blanket'],
    schedule: 'Fri, Sun • 06:00 PM',
    priceSingle: 120,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
    featured: true
  },
  {
    id: 'functional-mobility-reset',
    name: 'Functional Mobility & Kinstretch',
    category: 'Mobility',
    level: 'All Levels',
    duration: '60 min',
    instructor: 'Liam Vance',
    description: 'Active end-range joint control using CARs (Controlled Articular Rotations) and PAILs/RAILs isometric conditioning.',
    benefits: ['Injury prevention', 'Active joint range of motion', 'Athletic longevity', 'Tendon strengthening'],
    effort: 'Moderate',
    equipment: ['Mobility Sticks', 'Yoga Blocks'],
    schedule: 'Mon, Thu • 04:00 PM',
    priceSingle: 90,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'assisted-stretch-recovery',
    name: 'Assisted Fascial Stretch',
    category: 'Recovery',
    level: 'All Levels',
    duration: '45 min',
    instructor: 'Aria Sterling',
    description: '1-on-1 therapist-guided neuromuscular stretching designed to decompress spinal vertebrae and release stubborn hamstrings.',
    benefits: ['Decompressed vertebrae', 'Immediate ROM boost', 'Lymphatic drainage', 'Lactic acid flushing'],
    effort: 'Low',
    equipment: ['Stretching Table', 'Compression Boots'],
    schedule: 'Daily By Appointment',
    priceSingle: 175,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'prenatal-gentle-flow',
    name: 'Prenatal & Postnatal Flow',
    category: 'Yoga',
    level: 'Beginner',
    duration: '50 min',
    instructor: 'Maya Lin',
    description: 'Safe, supportive sequences strengthening pelvic floor muscles, easing lower back pressure, and preparing body for birth.',
    benefits: ['Pelvic floor conditioning', 'Lumbar strain relief', 'Motherhood community support', 'Calming breath techniques'],
    effort: 'Low',
    equipment: ['Pregnancy Bolster', 'Chair Support'],
    schedule: 'Sat, Sun • 11:00 AM',
    priceSingle: 90,
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'executive-reset-session',
    name: 'Executive De-Stress Express',
    category: 'Breathwork',
    level: 'All Levels',
    duration: '35 min',
    instructor: 'Kaelen Thorne',
    description: 'Lunchtime express session blending neck/shoulder mobility rolls with targeted anti-burnout parasympathetic breathing.',
    benefits: ['Instant neck/shoulder release', 'Mid-day focus boost', 'Burnout mitigation', 'Zero sweat required'],
    effort: 'Low',
    equipment: ['Ergonomic Chair', 'Diffuser'],
    schedule: 'Mon to Fri • 01:00 PM',
    priceSingle: 75,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop'
  }
];

export const INSTRUCTORS_DATA: WellnessInstructor[] = [
  {
    id: 'maya-lin',
    name: 'Maya Lin',
    role: 'Lead Vinyasa & Prenatal Specialist',
    specialty: 'Ashtanga Vinyasa, Postural Realignment',
    experience: '12 Years',
    certifications: ['E-RYT 500', 'RPYT Prenatal Certified', 'FRC Mobility Specialist'],
    languages: ['English', 'Mandarin'],
    biography: 'Trained in Mysore, India and Bali, Maya blends classical Indian lineage with modern biomechanical alignment to create empowering, fluid practices.',
    classes: ['Sunrise Vinyasa Flow', 'Prenatal & Postnatal Flow'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'sofia-laurent',
    name: 'Sofia Laurent',
    role: 'Master Reformer Pilates Director',
    specialty: 'Reformer Mechanics, Sculpt & Posture',
    experience: '10 Years',
    certifications: ['Stott Pilates Certified', 'Polestar Reformer Educator', 'Barre Master'],
    languages: ['English', 'French', 'Italian'],
    biography: 'Former classical dancer from Paris, Sofia approaches Pilates as an art form of muscular symmetry, core strength, and graceful posture.',
    classes: ['Reformer Pilates Core', 'Mat Pilates Sculpt'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'kaelen-thorne',
    name: 'Kaelen Thorne',
    role: 'Somatic Breathwork & Meditation Lead',
    specialty: 'Pranayama, Vagus Nerve Regulation',
    experience: '8 Years',
    certifications: ['Wim Hof Method Facilitator', 'Oxygen Advantage Coach', 'Vipassana Meditation'],
    languages: ['English', 'German'],
    biography: 'Kaelen helps high-performing executives regulate stress through science-backed respiratory physiology and deep somatic breathwork techniques.',
    classes: ['Pranayama & Somatic Breathwork', 'Executive De-Stress Express'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'aria-sterling',
    name: 'Aria Sterling',
    role: 'Yin & Assisted Stretch Therapist',
    specialty: 'Fascial Release, Chronic Pain Management',
    experience: '9 Years',
    certifications: ['Yin Yoga 300HR', 'Fascial Stretch Therapy (FST Level II)', 'Reiki Master'],
    languages: ['English', 'Spanish'],
    biography: 'Aria synthesizes Eastern energy meridian knowledge with Western manual stretch therapy to relieve joint stiffness and emotional stress.',
    classes: ['Slow Flow & Restore', 'Assisted Fascial Stretch'],
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'liam-vance',
    name: 'Liam Vance',
    role: 'Functional Mobility & Power Coach',
    specialty: 'Kinstretch, Athletic Conditioning',
    experience: '11 Years',
    certifications: ['FRCms Certified', 'NSCA Strength Coach', 'Power Yoga 200HR'],
    languages: ['English'],
    biography: 'Liam bridges the gap between athletic strength training and joint longevity, helping clients move pain-free and build functional power.',
    classes: ['Power Sculpt Yoga', 'Functional Mobility & Kinstretch'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'nadia-al-mansoor',
    name: 'Nadia Al-Mansoor',
    role: 'Sound Alchemist & Mindfulness Coach',
    specialty: 'Quartz Crystal Sound Bath, Theta Healing',
    experience: '7 Years',
    certifications: ['Sound Healing Academy Practitioner', 'Mindfulness Based Stress Reduction (MBSR)'],
    languages: ['English', 'Arabic'],
    biography: 'Nadia curates immersive auditory relaxation sessions designed to balance nervous system frequencies and promote deep restorative sleep.',
    classes: ['Crystal Bowl Sound Bath'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'Restorative & Somatic Movement Specialist',
    specialty: 'Myofascial Release, Neuro-Plastic Movement',
    experience: '14 Years',
    certifications: ['E-RYT 500', 'Somatic Movement Educator', 'Yoga Therapy C-IAYT'],
    languages: ['English', 'Russian'],
    biography: 'With over 14 years of international teaching, Elena guides students to tune into subtle bodily cues and heal structural imbalances.',
    classes: ['Yin & Deep Release'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'tariq-hassan',
    name: 'Tariq Hassan',
    role: 'Holistic Fitness & Personal Coach',
    specialty: '1-on-1 Fitness Transformation & Habit Design',
    experience: '10 Years',
    certifications: ['ACE Certified Personal Trainer', 'Precision Nutrition Level 2'],
    languages: ['English', 'Arabic'],
    biography: 'Tariq empowers executive clients to harmonize intense professional careers with sustainable exercise, nutrition, and recovery routines.',
    classes: ['Private Wellness Coaching'],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop'
  }
];

export const PROGRAMS_DATA: WellnessProgram[] = [
  {
    id: '30-day-reset',
    title: '30-Day Total Body & Mind Reset',
    duration: '4 Weeks',
    goal: 'Reboot energy levels, establish consistent daily movement, and reduce systemic inflammation.',
    weeklyStructure: '3 Vinyasa Classes + 1 Reformer Pilates + 1 Sound Bath + Weekly Check-in',
    sessionsCount: 20,
    benefits: ['Increased stamina', 'Established habit routine', 'Sustained daily energy', 'Improved digestion'],
    suitableFor: 'Anyone seeking a structured lifestyle transformation',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'stress-sleep-recovery',
    title: 'Stress & Sleep Recovery Protocol',
    duration: '6 Weeks',
    goal: 'Calm overactive nervous system, lower cortisol, and restore deep restorative REM sleep cycles.',
    weeklyStructure: '2 Yin Yoga + 2 Somatic Breathwork + 1 Sound Bath Therapy',
    sessionsCount: 30,
    benefits: ['Deep uninterrupted sleep', 'Lowered resting heart rate', 'Emotional equilibrium', 'Reduced anxiety'],
    suitableFor: 'Busy executives, burnout recovery, insomnia sufferers',
    price: 1699,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'flexibility-journey',
    title: 'Flexibility & Spine Longevity',
    duration: '8 Weeks',
    goal: 'Open tight hips, lengthen hamstrings, and decompress lumbar spine compression.',
    weeklyStructure: '2 Slow Flow + 2 Functional Mobility + 1 Assisted Stretch Session',
    sessionsCount: 40,
    benefits: ['Increased hamstring ROM', 'Reduced lower back pain', 'Improved stride mechanics', 'Spinal fluidity'],
    suitableFor: 'Desk workers, runners, lifting enthusiasts with stiffness',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'strength-mobility-hybrid',
    title: 'Strength + Functional Mobility Hybrid',
    duration: '6 Weeks',
    goal: 'Build lean core muscle strength while expanding active joint mobility and power.',
    weeklyStructure: '2 Reformer Pilates + 2 Power Sculpt Yoga + 1 Kinstretch',
    sessionsCount: 30,
    benefits: ['Core firmness', 'Scapular stability', 'Active rotational power', 'Joint resilience'],
    suitableFor: 'Athletes & fitness lovers seeking low-impact strength',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'beginner-foundations',
    title: 'Yoga & Pilates Beginner Foundations',
    duration: '3 Weeks',
    goal: 'Master fundamental poses, breath-movement coordination, and reformer machine setups confidently.',
    weeklyStructure: '2 Beginner Flow + 1 Reformer Basics + 1 Alignment Clinic',
    sessionsCount: 12,
    benefits: ['Pose alignment confidence', 'Injury-free movement', 'Breath control mastery', 'Studio familiarization'],
    suitableFor: 'Absolute beginners to yoga or reformer pilates',
    price: 899,
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'womens-wellness-sanctuary',
    title: "Women's Hormonal & Vitality Sanctuary",
    duration: '6 Weeks',
    goal: 'Harmonize pelvic health, ease cycle symptoms, and foster supportive sisterhood wellness.',
    weeklyStructure: '2 Gentle Flow + 1 Pelvic Floor Pilates + 1 Breathwork & Journaling Circle',
    sessionsCount: 24,
    benefits: ['Hormonal balance support', 'Enhanced pelvic vitality', 'Stress resilience', 'Community bond'],
    suitableFor: 'Women in all life stages seeking holistic vitality',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'executive-burnout-mitigation',
    title: 'Executive Burnout Mitigation',
    duration: '4 Weeks',
    goal: 'Rapid 35-minute mid-day sessions designed for immediate neural reset and posture correction.',
    weeklyStructure: '4 Executive De-Stress Express + 1 VIP 1-on-1 Stretch',
    sessionsCount: 20,
    benefits: ['Zero-downtime recharge', 'Postural correction', 'Enhanced executive focus', 'Reduced tension headaches'],
    suitableFor: 'DIFC & Downtown Dubai corporate leaders',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'private-concierge-coaching',
    title: 'Bespoke 1-on-1 Private Wellness Coaching',
    duration: 'Monthly Retainer',
    goal: 'Tailored private home or studio 1-on-1 instruction custom-matched to your health goals.',
    weeklyStructure: '3 Private Sessions/Week + Personalized Nutrition & Biometric Tracking',
    sessionsCount: 12,
    benefits: ['100% personalized curriculum', 'Flexible private scheduling', 'Private suite access', 'Direct trainer WhatsApp'],
    suitableFor: 'UHNW individuals & privacy-focused clients',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop'
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'essential',
    name: 'Essential Pass',
    price: 299,
    cadence: 'month',
    tagline: 'Ideal for establishing a consistent weekly movement ritual.',
    features: [
      '4 Studio Classes Per Month',
      'Mat & Props Included Free',
      'Access to Online On-Demand Library',
      '1 Guest Pass Per Month',
      '10% Off Workshop Bookings'
    ]
  },
  {
    id: 'unlimited',
    name: 'Unlimited Pass',
    price: 499,
    cadence: 'month',
    popular: true,
    tagline: 'Unlimited access to all Yoga, Mat Pilates, Breathwork & Meditation sessions.',
    features: [
      'Unlimited Studio Yoga & Mat Classes',
      '2 Reformer Pilates Classes Per Month',
      'Priority Booking Window (7 Days Ahead)',
      '2 Complimentary Guest Passes/Month',
      '15% Off Private Coaching & Sound Baths',
      'Free Herbal Tea & Lounge Access'
    ]
  },
  {
    id: 'premium',
    name: 'VIP Reformer & Wellness',
    price: 799,
    cadence: 'month',
    tagline: 'The ultimate studio experience with unlimited Reformer Pilates & Recovery Suite.',
    features: [
      'Unlimited Yoga, Mat & Reformer Pilates',
      'Weekly Crystal Bowl Sound Bath Included',
      '1 Monthly 45-Min Assisted Stretch Session',
      '14-Day Advance Class Booking Priority',
      'Complimentary Locker & Premium Towels',
      '20% Discount on Retainers & Corporate Gifting'
    ]
  },
  {
    id: 'private-coaching-tier',
    name: 'Private Sanctuary Retainer',
    price: 1499,
    cadence: 'month',
    tagline: 'Bespoke 1-on-1 private coaching in our dedicated VIP sanctuary room.',
    features: [
      '4 Private 1-on-1 Sessions Per Month',
      'Unlimited Studio Group Classes Included',
      'Custom Biometric & Posture Tracking',
      'Direct WhatsApp Access with Master Trainer',
      'Private Suite & Valet Parking Included',
      'Custom Nutrition & Supplement Plan'
    ]
  }
];

export const ARTICLES_DATA: JournalArticle[] = [
  {
    id: 'art-1',
    title: 'The Science of Somatic Breathwork & Cortisol Reduction',
    category: 'Breathwork',
    readTime: '4 min read',
    date: 'August 2026',
    excerpt: 'How controlled 4-7-8 and box breathing patterns stimulate the vagus nerve to switch your nervous system into parasympathetic recovery.',
    content: 'In our fast-paced urban environment, the sympathetic nervous system often remains perpetually triggered. Somatic breathwork acts as a physiological brake pedal, signaling the brain stem to reduce heart rate, dilate blood vessels, and suppress excessive cortisol secretion...',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art-2',
    title: 'Reformer vs Mat Pilates: Which Is Right for Your Core?',
    category: 'Pilates',
    readTime: '5 min read',
    date: 'August 2026',
    excerpt: 'Understanding the key differences in muscular engagement between spring-loaded carriage resistance and gravity-defying mat precision.',
    content: 'While both modalities honor Joseph Pilates principles of core stability and alignment, the Reformer provides variable spring tension that can assist injured joints or dramatically challenge muscular endurance at maximum extension...',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art-3',
    title: 'Why 432Hz Sound Vibration Enhances Theta Brainwave States',
    category: 'Mindfulness',
    readTime: '6 min read',
    date: 'July 2026',
    excerpt: 'Exploring the auditory physics of quartz crystal bowls and their proven ability to induce deep meditative brain states.',
    content: 'Sound healing is not pseudoscience; it is bio-acoustics. When pure quartz crystal bowls are sounded at 432Hz, the brain neural firing patterns synchronize with the sound wave frequency, shifting from high-beta stress waves into restorative theta waves...',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art-4',
    title: '5 Postural Fixes for Desk Bound Executives in Dubai',
    category: 'Movement',
    readTime: '4 min read',
    date: 'July 2026',
    excerpt: 'Simple 3-minute mobility drills to reverse forward head posture, tight hip flexors, and rounded shoulder syndrome.',
    content: 'Sitting for 8 to 10 hours daily causes thoracic spine stiffness and glute amnesia. By integrating Controlled Articular Rotations (CARs) into your workday, you maintain joint capsule hydration and prevent long-term spinal degeneration...',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art-5',
    title: 'Yin Yoga for Athletic Recovery and Connective Tissue Health',
    category: 'Yoga',
    readTime: '5 min read',
    date: 'June 2026',
    excerpt: 'Why high-intensity athletes need slow passive long holds to maintain tendon resilience and prevent overuse tears.',
    content: 'Muscles respond to active contraction, but fascia and ligaments require steady, passive traction held for 3 to 5 minutes. Yin Yoga applies gentle pressure to fascia, stimulating hyaluronic acid production for lubricated, pain-free joint movement...',
    image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art-6',
    title: 'Creating a Sacred Morning Ritual in Your Home',
    category: 'Mindfulness',
    readTime: '3 min read',
    date: 'June 2026',
    excerpt: 'Step-by-step guidance on setting up a dedicated meditation space, morning hydration, and intention-setting routines.',
    content: 'Before checking emails or opening social feeds, the first 20 minutes upon awakening set your neurological trajectory for the entire day. Designing a clean, uncluttered corner with a comfortable cushion and natural light invites quiet presence...',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art-7',
    title: 'Hydration & Post-Practice Electrolyte Replenishment',
    category: 'Nutrition',
    readTime: '4 min read',
    date: 'May 2026',
    excerpt: 'Optimizing cell hydration after hot vinyasa or intense reformer sessions with natural sea salt, magnesium, and coconut water.',
    content: 'Water alone is not enough to hydrate muscular tissue after sweating in Dubai humidity. Adding trace minerals like Celtic sea salt, potassium, and magnesium ensures optimal nerve impulse transmission and prevents muscular cramping...',
    image: 'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art-8',
    title: 'The Art of Mindful Eating and Mind-Gut Connection',
    category: 'Nutrition',
    readTime: '5 min read',
    date: 'May 2026',
    excerpt: 'Connecting vagal tone with digestive enzyme secretion for improved gut microbiome health and reduced bloating.',
    content: 'Eating in a stressed, hurried state forces blood away from the gastrointestinal tract toward skeletal muscles. Practicing three deep diaphragmatic breaths before meals shifts the body into rest-and-digest mode, optimizing nutrient absorption...',
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=800&auto=format&fit=crop'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: 'Is AURA Wellness suitable for absolute beginners?',
    answer: 'Yes! Over 40% of our members start their journey as beginners. We offer dedicated "Foundations" classes and all instructors provide multi-level options and modifications in every class.'
  },
  {
    question: 'What should I bring to my first class?',
    answer: 'We provide complimentary premium Manduka yoga mats, cork blocks, straps, and chilled towels. You only need to wear comfortable grip socks (for Reformer Pilates) or bring your reusable water bottle.'
  },
  {
    question: 'Do I need to book in advance?',
    answer: 'Yes, to maintain a quiet, spacious environment, studio capacity is strictly capped at 12 participants per class. We recommend booking via our online portal or WhatsApp at least 24 hours prior.'
  },
  {
    question: 'Can I try one single class before committing to a membership?',
    answer: 'Absolutely! You can purchase a Single Class Drop-In for AED 85 or an Intro 3-Class Trial Pack for AED 199.'
  },
  {
    question: 'What is included in the Unlimited Membership Pass?',
    answer: 'Unlimited Pass includes all studio Yoga, Mat Pilates, Somatic Breathwork, and Meditation classes, plus 2 Reformer Pilates passes/month, lounge access, and 15% off workshops.'
  },
  {
    question: 'Can I freeze or pause my monthly membership if I travel?',
    answer: 'Yes, members can pause their membership for up to 30 days per calendar year free of charge with 7 days advance notice.'
  },
  {
    question: 'Do you offer private 1-on-1 instruction?',
    answer: 'Yes, we have 3 private sanctuary suites for 1-on-1 custom coaching in Yoga, Reformer Pilates, Somatic Breathwork, and Assisted Stretching.'
  },
  {
    question: 'Do you offer corporate wellness programs for UAE companies?',
    answer: 'Yes! We design custom corporate wellness packages including office desk yoga, executive burnout breathwork, and off-site team wellness days across Dubai and Abu Dhabi.'
  },
  {
    question: 'What is your cancellation policy for classes?',
    answer: 'Class cancellations made up to 4 hours prior to class start time will automatically refund your class credit. Late cancellations or no-shows forfeit the credit.'
  },
  {
    question: 'Is there parking available at the studio?',
    answer: 'Yes! Free underground valet parking is available for all AURA Wellness members and guests at our Downtown Dubai studio entrance.'
  },
  {
    question: 'What are the benefits of Crystal Bowl Sound Baths?',
    answer: 'Sound vibration helps synchronize brainwaves into deep theta and delta relaxation frequencies, reducing mental anxiety, lowering blood pressure, and encouraging restorative sleep.'
  },
  {
    question: 'Can I book classes directly via WhatsApp?',
    answer: 'Yes! You can instantly inquire, book sessions, or consult with our studio concierge directly through WhatsApp at +971 52 339 4001.'
  }
];
