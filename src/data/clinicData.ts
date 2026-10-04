export interface Department {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  role: string;
  experience: string;
  certifications?: string[];
  languages: string[];
  bio: string;
  availableDays: string;
  consultationFee: number;
  image: string;
}

export interface MedicalService {
  id: string;
  name: string;
  departmentId: string;
  departmentName: string;
  description: string;
  duration: string;
  price: number;
  suitableFor: string;
  whatToExpect: string;
  preparation: string;
  image: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const DEPARTMENTS_DATA: Department[] = [
  { id: 'general', name: 'General Medicine', description: 'Comprehensive primary care, health screenings, and preventative wellness consultations.', iconName: 'Stethoscope', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop' },
  { id: 'dermatology', name: 'Dermatology', description: 'Advanced clinical dermatology, skin health reviews, and aesthetic dermatology care.', iconName: 'Award', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop' },
  { id: 'dental', name: 'Dental Care', description: 'Preventative checkups, cosmetic dentistry, hygiene cleaning, and restorative oral care.', iconName: 'Smile', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop' },
  { id: 'women', name: "Women's Health", description: 'Specialized gynecology consultations, reproductive health reviews, and wellness checkups.', iconName: 'Heart', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop' },
  { id: 'pediatrics', name: 'Pediatrics', description: 'Child wellness assessments, growth monitoring, and pediatric medical consultations.', iconName: 'Baby', image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop' },
  { id: 'orthopedics', name: 'Orthopedics', description: 'Musculoskeletal evaluation, joint health reviews, and spinal mobility assessments.', iconName: 'Activity', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop' },
  { id: 'physiotherapy', name: 'Physiotherapy & Rehab', description: 'Neuromuscular rehabilitation, posture correction, and sports injury mobility sessions.', iconName: 'Shield', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop' },
  { id: 'nutrition', name: 'Nutrition & Lifestyle', description: 'Personalized dietary planning, metabolic health consultations, and longevity coaching.', iconName: 'Apple', image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop' }
];

export const DOCTORS_DATA: Doctor[] = [
  {
    id: 'dr-maya-rahman',
    name: 'Dr. Maya Rahman',
    specialty: 'General Medicine',
    role: 'Lead General Practitioner',
    experience: '14 Years',
    languages: ['English', 'Arabic'],
    bio: 'Educated at King’s College London, Dr. Maya focuses on preventative health, early disease detection, and holistic lifestyle medicine.',
    availableDays: 'Mon to Thu, Sat',
    consultationFee: 350,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'dr-daniel-carter',
    name: 'Dr. Daniel Carter',
    specialty: 'Dermatology',
    role: 'Consultant Dermatologist',
    experience: '12 Years',
    languages: ['English', 'French'],
    bio: 'Specializing in medical skin health, acne therapy, and non-invasive aesthetic treatments using state-of-the-art laser technology.',
    availableDays: 'Mon, Wed, Fri',
    consultationFee: 500,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'dr-sara-malik',
    name: 'Dr. Sara Malik',
    specialty: "Women's Health",
    role: 'Gynecology & Wellness Specialist',
    experience: '16 Years',
    certifications: ['MRCOG (UK)', 'Board Certified Gyn'],
    languages: ['English', 'Arabic', 'Urdu'],
    bio: 'Dedicated to compassionate, comprehensive healthcare for women in all stages of life, focusing on preventive screening and hormone health.',
    availableDays: 'Sun to Wed',
    consultationFee: 450,
    image: 'https://images.unsplash.com/photo-1594824813572-c2e34f6b4e72?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'dr-omar-hassan',
    name: 'Dr. Omar Hassan',
    specialty: 'Orthopedics',
    role: 'Orthopedic & Sports Injury Consultant',
    experience: '15 Years',
    languages: ['English', 'Arabic'],
    bio: 'Fellowship trained in joint preservation and sports medicine, assisting patients with back pain, joint stiffness, and athletic rehabilitation.',
    availableDays: 'Mon, Tue, Thu',
    consultationFee: 550,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'dr-lina-moretti',
    name: 'Dr. Lina Moretti',
    specialty: 'Pediatrics',
    role: 'Consultant Pediatrician',
    experience: '11 Years',
    languages: ['English', 'Italian', 'Spanish'],
    bio: 'Providing gentle, thorough pediatric consultations, routine growth assessments, and childhood preventive health reviews.',
    availableDays: 'Mon to Sat',
    consultationFee: 400,
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'dr-adam-noor',
    name: 'Dr. Adam Noor',
    specialty: 'Dental Care',
    role: 'Cosmetic & Restorative Dentist',
    experience: '13 Years',
    languages: ['English', 'Arabic'],
    bio: 'Focused on painless dentistry, oral hygiene maintenance, teeth whitening, and precision aesthetic smile reviews.',
    availableDays: 'Mon to Thu, Sun',
    consultationFee: 400,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'dr-nadia-karim',
    name: 'Dr. Nadia Karim',
    specialty: 'Physiotherapy',
    role: 'Lead Physiotherapy Specialist',
    experience: '10 Years',
    languages: ['English', 'Arabic'],
    bio: 'Expert in spinal alignment, postural correction, and post-surgical rehabilitation using evidence-based manual movement therapy.',
    availableDays: 'Daily By Appointment',
    consultationFee: 450,
    image: 'https://images.unsplash.com/photo-1594824813572-c2e34f6b4e72?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'dr-elena-rossi',
    name: 'Dr. Elena Rossi',
    specialty: 'Nutrition & Wellness',
    role: 'Clinical Nutrition Consultant',
    experience: '9 Years',
    languages: ['English', 'Italian'],
    bio: 'Empowering executive clients with tailored anti-inflammatory nutrition plans, metabolic health reviews, and gut health optimization.',
    availableDays: 'Tue, Thu, Sat',
    consultationFee: 380,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop'
  }
];

export const SERVICES_DATA: MedicalService[] = [
  // General Medicine
  { id: 'gen-consult', name: 'General GP Medical Consultation', departmentId: 'general', departmentName: 'General Medicine', description: 'Comprehensive health consultation addressing acute symptoms, prescription reviews, and general wellness guidance.', duration: '30 min', price: 350, suitableFor: 'Adults seeking routine medical guidance or symptom evaluation', whatToExpect: 'Detailed history review, physical vitals check, and customized wellness recommendation.', preparation: 'Bring any recent bloodwork or medication lists.', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop' },
  { id: 'gen-executive-review', name: 'Executive Preventive Wellness Review', departmentId: 'general', departmentName: 'General Medicine', description: 'In-depth health audit evaluating cardiovascular health, blood sugar, lipid profiles, and metabolic biomarkers.', duration: '60 min', price: 850, suitableFor: 'Busy professionals seeking a proactive health audit', whatToExpect: 'Comprehensive consultation, biometric screening, and personalized health roadmap.', preparation: 'Fasting 8 hours prior if blood samples are drawn.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop' },
  { id: 'gen-vaccination-review', name: 'Travel & Preventive Health Screening', departmentId: 'general', departmentName: 'General Medicine', description: 'Pre-travel health consultation and preventive screening tailored to international travel destinations.', duration: '30 min', price: 300, suitableFor: 'International travelers and corporate executives', whatToExpect: 'Destination health risk review and customized guidance.', preparation: 'Bring travel itinerary details.', image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop' },

  // Dermatology
  { id: 'derm-consult', name: 'Clinical Dermatology Consultation', departmentId: 'dermatology', departmentName: 'Dermatology', description: 'Expert evaluation of skin conditions including eczema, psoriasis, rosacea, and mole assessments.', duration: '40 min', price: 500, suitableFor: 'Patients experiencing skin irritation, rashes, or seeking mole checks', whatToExpect: 'Dermatoscope skin inspection and targeted treatment protocol.', preparation: 'Remove heavy makeup prior to consultation.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop' },
  { id: 'derm-acne', name: 'Acne & Skin Clarity Assessment', departmentId: 'dermatology', departmentName: 'Dermatology', description: 'Specialized consultation addressing stubborn acne breakouts, hormonal skin changes, and post-acne scarring.', duration: '40 min', price: 450, suitableFor: 'Adults and teens experiencing persistent acne', whatToExpect: 'Sebum analysis, pore audit, and topical/oral management plan.', preparation: 'Bring list of current skincare products.', image: 'https://images.unsplash.com/photo-1512290900673-70024421193d?q=80&w=800&auto=format&fit=crop' },
  { id: 'derm-aesthetic-review', name: 'Cosmetic Skin & Aesthetic Review', departmentId: 'dermatology', departmentName: 'Dermatology', description: 'Non-invasive facial rejuvenation consultation, collagen health review, and hyperpigmentation planning.', duration: '45 min', price: 600, suitableFor: 'Clients interested in skin texture, tone, and collagen maintenance', whatToExpect: '3D facial scan review and customized aesthetic plan.', preparation: 'No special prep needed.', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop' },

  // Dental
  { id: 'dental-consult', name: 'Comprehensive Dental Consultation & Checkup', departmentId: 'dental', departmentName: 'Dental Care', description: 'Detailed oral health assessment, intraoral camera audit, and gentle gum health review.', duration: '30 min', price: 400, suitableFor: 'Routine annual dental checkups for all ages', whatToExpect: 'Intraoral exam, digital cavity check, and preventive advice.', preparation: 'Brush and floss before appointment.', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop' },
  { id: 'dental-cleaning', name: 'Ultrasonic Dental Scale & Polish', departmentId: 'dental', departmentName: 'Dental Care', description: 'Gentle ultrasonic tartar removal, stain polishing, and enamel fluoride strengthening.', duration: '45 min', price: 450, suitableFor: 'Patients needing plaque removal and surface stain polishing', whatToExpect: 'Painless ultrasonic plaque clearing followed by mint polishing.', preparation: 'None required.', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop' },
  { id: 'dental-whitening-review', name: 'Smile Brightening & Whitening Review', departmentId: 'dental', departmentName: 'Dental Care', description: 'Evaluation of enamel shade, sensitivity risk, and tailored teeth whitening consultation.', duration: '30 min', price: 350, suitableFor: 'Patients considering professional in-office enamel brightening', whatToExpect: 'Enamel shade match and sensitivity testing.', preparation: 'None.', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop' },

  // Women's Health
  { id: 'women-wellness-consult', name: "Women's Wellness & Gynecology Review", departmentId: 'women', departmentName: "Women's Health", description: 'Private, comprehensive consultation focusing on reproductive health, pelvic wellness, and hormonal balance.', duration: '45 min', price: 450, suitableFor: 'Women seeking routine annual wellness checkups', whatToExpect: 'Gentle consultation, symptom review, and preventive guidance.', preparation: 'Note date of last menstrual cycle.', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop' },
  { id: 'women-hormone-review', name: 'Hormonal Balance & Perimenopause Review', departmentId: 'women', departmentName: "Women's Health", description: 'Targeted assessment of hormonal fluctuations, mood changes, and fatigue management.', duration: '45 min', price: 500, suitableFor: 'Women experiencing fatigue, thermal regulation issues, or mood shifts', whatToExpect: 'Detailed symptom audit and blood marker review recommendations.', preparation: 'Bring previous lab results if available.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },

  // Pediatrics
  { id: 'peds-consult', name: 'Pediatric Medical Consultation', departmentId: 'pediatrics', departmentName: 'Pediatrics', description: 'Gentle, child-friendly consultation addressing fever, cough, ear discomfort, or general pediatric concerns.', duration: '30 min', price: 400, suitableFor: 'Infants, children, and adolescents up to 16 years', whatToExpect: 'Calm physical checkup, weight/height tracking, and parent reassurance.', preparation: 'Bring child medical history records.', image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop' },
  { id: 'peds-growth-audit', name: 'Child Development & Growth Review', departmentId: 'pediatrics', departmentName: 'Pediatrics', description: 'Comprehensive milestone assessment checking physical growth velocity, motor skills, and nutritional intake.', duration: '40 min', price: 420, suitableFor: 'Parents seeking annual developmental milestone tracking', whatToExpect: 'Growth chart review and developmental milestone check.', preparation: 'Bring growth booklet.', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop' },

  // Orthopedics
  { id: 'ortho-joint-consult', name: 'Orthopedic Joint & Musculoskeletal Review', departmentId: 'orthopedics', departmentName: 'Orthopedics', description: 'Specialized assessment for knee discomfort, shoulder stiffness, hip pain, and spinal misalignment.', duration: '45 min', price: 550, suitableFor: 'Adults with chronic joint pain or acute mobility restrictions', whatToExpect: 'Range of motion assessment, joint stability testing, and image review.', preparation: 'Wear loose clothing for movement testing.', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop' },
  { id: 'ortho-spine-review', name: 'Lumbar Spine & Posture Assessment', departmentId: 'orthopedics', departmentName: 'Orthopedics', description: 'Evaluation of lower back tightness, sciatica symptoms, and ergonomic desk-related spinal strain.', duration: '45 min', price: 500, suitableFor: 'Desk workers experiencing persistent back or neck tightness', whatToExpect: 'Posture grid alignment test and nerve sensation checks.', preparation: 'None.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop' },

  // Physiotherapy
  { id: 'physio-initial-eval', name: 'Physiotherapy Initial Evaluation & Plan', departmentId: 'physiotherapy', departmentName: 'Physiotherapy & Rehab', description: 'Complete biomechanical movement audit, muscle imbalance testing, and custom rehab plan design.', duration: '50 min', price: 450, suitableFor: 'Patients recovering from sports injuries or muscle strain', whatToExpect: 'Movement screening, manual palpation, and initial therapeutic exercises.', preparation: 'Wear athletic clothing.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop' },
  { id: 'physio-session', name: 'Focused Manual Therapy & Mobility Session', departmentId: 'physiotherapy', departmentName: 'Physiotherapy & Rehab', description: 'Targeted manual soft tissue release, joint mobilization, and guided neuromuscular re-education.', duration: '45 min', price: 380, suitableFor: 'Follow-up rehabilitation for existing physiotherapy patients', whatToExpect: 'Hands-on soft tissue therapy and movement exercises.', preparation: 'Comfortable clothing.', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop' },

  // Nutrition
  { id: 'nutri-consult', name: 'Clinical Nutrition & Diet Consultation', departmentId: 'nutrition', departmentName: 'Nutrition & Lifestyle', description: 'In-depth nutritional analysis evaluating dietary habits, energy levels, digestive comfort, and metabolic goals.', duration: '50 min', price: 380, suitableFor: 'Individuals seeking weight management or gut health guidance', whatToExpect: '3-day food diary audit and realistic meal structure plan.', preparation: 'Keep a 3-day food log prior to session.', image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop' },
  { id: 'nutri-metabolic-review', name: 'Metabolic & Anti-Inflammatory Plan', departmentId: 'nutrition', departmentName: 'Nutrition & Lifestyle', description: 'Specialized dietary regimen focusing on blood sugar stabilization, reducing gut inflammation, and sustainable vitality.', duration: '50 min', price: 420, suitableFor: 'Clients aiming to lower systemic inflammation through whole foods', whatToExpect: 'Custom grocery list, recipe framework, and habit tracking setup.', preparation: 'None.', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop' }
];

export const ARTICLES_DATA: JournalArticle[] = [
  {
    id: 'art-1',
    title: 'Understanding Annual Executive Health Screenings in Dubai',
    category: 'Preventative Care',
    readTime: '4 min read',
    date: 'August 2026',
    excerpt: 'Why proactive biometric screenings and lipid panel reviews help detect early metabolic shifts before symptoms manifest.',
    content: 'Preventative medicine is moving away from reactive treatment toward early biomarker tracking. Annual health reviews evaluate resting blood pressure, fasting glucose, liver enzyme markers, and systemic inflammation indicators...',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art-2',
    title: '5 Daily Habits to Protect Your Lumbar Spine at Your Desk',
    category: 'Orthopedics',
    readTime: '5 min read',
    date: 'August 2026',
    excerpt: 'Ergonomic seat adjustments, thoracic extension breaks, and core bracing techniques to prevent desk-related back strain.',
    content: 'Prolonged sitting in unsupportive office chairs applies up to 180kg of static pressure onto lumbar intervertebral discs. By setting a 45-minute movement timer and adjusting monitor height to eye level, you significantly reduce lumbar shearing forces...',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art-3',
    title: 'The Role of Hydration in Maintaining Skin Barrier Function',
    category: 'Dermatology',
    readTime: '3 min read',
    date: 'July 2026',
    excerpt: 'How air conditioning and desert climates affect transepidermal water loss and ceramic lipid levels in your skin.',
    content: 'Air-conditioned indoor environments lower relative humidity to under 30%, pulling moisture directly from the stratum corneum. Using barrier-repairing creams containing ceramides and hyaluronic acid helps retain cellular moisture...',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art-4',
    title: 'Childhood Growth Milestones: What Parents Should Know',
    category: 'Pediatrics',
    readTime: '5 min read',
    date: 'July 2026',
    excerpt: 'Key indicators of healthy motor skill development, speech progression, and nutritional intake for ages 1 to 5.',
    content: 'Every child develops at their own natural pace, but monitoring motor milestones like balance, grip, and social engagement provides reassurance and allows early guidance when extra support is helpful...',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art-5',
    title: 'Gentle Oral Hygiene Habits for Healthy Tooth Enamel',
    category: 'Dental Care',
    readTime: '4 min read',
    date: 'June 2026',
    excerpt: 'Why soft-bristled toothbrush techniques and non-abrasive fluoride toothpaste preserve enamel thickness over time.',
    content: 'Brushing too vigorously with hard bristles can wear down protective enamel near the gumline, exposing sensitive dentin tubules. Dentists recommend soft circular motions angled at 45 degrees toward the gums...',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art-6',
    title: 'Balancing Hormones & Energy Levels in Modern Life',
    category: "Women's Health",
    readTime: '5 min read',
    date: 'June 2026',
    excerpt: 'Understanding the relationship between sleep quality, thyroid health, and cortisol regulation in busy women.',
    content: 'Chronic stress triggers elevated adrenal cortisol release, which can disrupt delicate thyroid and reproductive hormone balance. Prioritizing 7 to 8 hours of dark sleep and nutrient-dense whole foods supports natural hormonal equilibrium...',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art-7',
    title: 'Anti-Inflammatory Nutrition Principles for Active Adults',
    category: 'Nutrition',
    readTime: '4 min read',
    date: 'May 2026',
    excerpt: 'Incorporating omega-3 fatty acids, colorful polyphenols, and fiber to support joint comfort and recovery.',
    content: 'Dietary inflammation can exacerbate joint stiffness and digestive sluggishness. Consuming wild salmon, extra virgin olive oil, berries, and leafy green vegetables delivers powerful antioxidants that neutralize oxidative stress...',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art-8',
    title: 'Physiotherapy Drills for Neck & Shoulder Tension',
    category: 'Physiotherapy',
    readTime: '4 min read',
    date: 'May 2026',
    excerpt: 'Simple levator scapulae and upper trapezius stretches to alleviate tension headaches from mobile phone usage.',
    content: 'Forward head posture adds up to 12kg of extra strain onto the cervical spine. Performing gentle chin tucks and scapular retractions throughout the day helps realign neck vertebrae and relieve muscular tightness...',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop'
  }
];

export const FAQS_DATA: FaqItem[] = [
  { question: 'How do I book an appointment at NOVA Private Clinic?', answer: 'You can easily book online via our interactive appointment finder, by calling our clinic reception, or via WhatsApp at +971 52 339 4001.' },
  { question: 'Can I choose my preferred specialist or doctor?', answer: 'Yes! You can view detailed doctor profiles, available days, and specialties, and request your specific physician during booking.' },
  { question: 'What are the consultation fees at the clinic?', answer: 'General GP consultations start from AED 350, and specialist consultations range between AED 400 and AED 550. All fees are clearly disclosed prior to booking.' },
  { question: 'Do you accept insurance or provide reimbursement receipts?', answer: 'We operate on a direct self-pay model with transparent AED pricing, and provide detailed itemized medical receipts suitable for insurance claim reimbursement.' },
  { question: 'Where is the clinic located in Dubai?', answer: 'Our modern facility is located on Level 3, Al Wasl Medical Tower, Jumeirah 1, Dubai, UAE, with complimentary valet parking for all patients.' },
  { question: 'What should I bring to my first appointment?', answer: 'Please bring a valid Emirates ID or Passport, any previous medical records or recent lab results, and a list of current medications.' },
  { question: 'Do you offer teleconsultation services?', answer: 'Yes, we offer secure video teleconsultations for follow-up reviews, prescription renewals, and general medical advice from home.' },
  { question: 'Are walk-in appointments available?', answer: 'While we recommend booking in advance to minimize waiting times, we keep dedicated daily slots open for urgent walk-in consultations.' },
  { question: 'How long does a typical specialist consultation last?', answer: 'Standard consultations are scheduled for 30 to 45 minutes, ensuring ample unhurried time with your doctor.' },
  { question: 'Do you offer corporate health & wellness packages for UAE companies?', answer: 'Yes, we provide tailored corporate executive checkups, workplace wellness screenings, and team health consultations.' },
  { question: 'Can I reschedule or cancel my appointment?', answer: 'Yes, appointments can be rescheduled or cancelled free of charge up to 4 hours prior to your scheduled time via phone or WhatsApp.' },
  { question: 'What safety and sanitation measures are practiced at the clinic?', answer: 'We maintain hospital-grade air filtration, strict single-use sterile medical instruments, and continuous sanitization between every patient visit.' },
  { question: 'Do you provide dental cleaning and cosmetic consultations?', answer: 'Yes, our dental department provides ultrasonic scaling, polishing, teeth whitening reviews, and preventative checkups.' },
  { question: 'How do I receive my lab results or prescription after a visit?', answer: 'Digital copies of your visit summary and lab results are uploaded to your secure Patient Portal preview or sent via encrypted WhatsApp/email.' },
  { question: 'Is there parking available at the clinic?', answer: 'Yes, free underground valet parking is available for all NOVA Private Clinic patients at the main tower entrance.' }
];
