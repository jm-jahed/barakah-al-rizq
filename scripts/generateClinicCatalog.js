const fs = require('fs');
const path = require('path');

const DEPARTMENTS = [
  {
    id: 'executive-longevity-health',
    name: 'Executive Health & Longevity',
    tagline: 'Comprehensive Bio-Markers, DNA Age Profiling & Full-Body MRI',
    basePrice: 1200,
    priceSpan: 4800,
    duration: '90 - 180 Minutes',
    specialistRole: 'Executive Health Physician',
    insuranceBadge: 'Direct Billing Available'
  },
  {
    id: 'advanced-aesthetic-dermatology',
    name: 'Clinical & Aesthetic Dermatology',
    tagline: 'HydraFacial Elite, Pico Laser Resurfacing & Skin Cancer Dermoscopy',
    basePrice: 650,
    priceSpan: 2600,
    duration: '45 - 60 Minutes',
    specialistRole: 'Consultant Dermatologist',
    insuranceBadge: 'DHA Licensed Aesthetician'
  },
  {
    id: 'cosmetic-implant-dentistry',
    name: 'Cosmetic & Digital Dentistry',
    tagline: 'Ceramic E-Max Veneers, 3D Guided Dental Implants & Zoom Whitening',
    basePrice: 450,
    priceSpan: 5500,
    duration: '45 - 90 Minutes',
    specialistRole: 'Consultant Implantologist',
    insuranceBadge: 'Insurance & Installments'
  },
  {
    id: 'womens-health-gynecology',
    name: 'Women’s Health & Wellness',
    tagline: 'Well-Woman Health Screening, 4D Ultrasound & Hormonal Optimization',
    basePrice: 550,
    priceSpan: 1800,
    duration: '45 - 60 Minutes',
    specialistRole: 'Consultant Gynecologist',
    insuranceBadge: 'Direct Billing Available'
  },
  {
    id: 'pediatrics-child-health',
    name: 'Pediatrics & Adolescent Care',
    tagline: 'Newborn Health Audits, Growth Metrics & Pediatric Immunizations',
    basePrice: 420,
    priceSpan: 1200,
    duration: '30 - 45 Minutes',
    specialistRole: 'Consultant Pediatrician',
    insuranceBadge: 'DHA Approved Vaccine Center'
  },
  {
    id: 'orthopedics-sports-medicine',
    name: 'Orthopedics & Joint Health',
    tagline: 'Stem Cell PRP Therapy, Rotator Cuff Arthroscopy & Joint Injections',
    basePrice: 750,
    priceSpan: 3200,
    duration: '45 - 60 Minutes',
    specialistRole: 'Consultant Orthopedic Surgeon',
    insuranceBadge: 'Direct Billing Available'
  },
  {
    id: 'physiotherapy-spine-rehab',
    name: 'Physiotherapy & Spine Rehab',
    tagline: 'Tecar Therapy, Spinal Decompression & Dry Needling Sports Rehab',
    basePrice: 380,
    priceSpan: 950,
    duration: '60 Minutes',
    specialistRole: 'Lead Physiotherapist',
    insuranceBadge: 'Covered by Most UAE Insurers'
  },
  {
    id: 'telehealth-vip-home-care',
    name: 'VIP Home Care & Telehealth',
    tagline: 'Doctor Home Visit in Jumeirah, IV Vitamin Infusions & Mobile Lab',
    basePrice: 650,
    priceSpan: 1900,
    duration: '45 - 90 Minutes',
    specialistRole: 'VIP Mobile Clinical Team',
    insuranceBadge: 'On-Demand 60-Min Dispatch'
  }
];

const CURATED_CLINIC_IMAGES = [
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583912267670-6575ad472688?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop'
];

const CONSULTANTS = [
  'Dr. Alexander Vance (FRCP London, Internal Medicine)',
  'Dr. Sarah Al Nuaimi (American Board of Dermatology)',
  'Dr. Julian Sterling (BDS, MSc Implantology Frankfurt)',
  'Dr. Maya Lin (FRCOG UK, Obstetrics & Gynecology)',
  'Dr. Tariq Mansoor (FAAP American Board of Pediatrics)',
  'Dr. Elena Moreau (MD Orthopedic Sports Surgeon)'
];

const ITEMS_PER_CATEGORY = 20; // 8 * 20 = 160 items
const catalog = [];
let counter = 1;

DEPARTMENTS.forEach((cat) => {
  for (let i = 1; i <= ITEMS_PER_CATEGORY; i++) {
    const idNum = String(counter).padStart(3, '0');
    const id = `NOVA-CLINIC-${idNum}`;
    const imgIndex = (counter - 1) % CURATED_CLINIC_IMAGES.length;
    const secondaryImgIndex = (counter + 3) % CURATED_CLINIC_IMAGES.length;
    const consultant = CONSULTANTS[(counter - 1) % CONSULTANTS.length];

    const priceStep = Math.round(cat.priceSpan / ITEMS_PER_CATEGORY);
    const priceAED = cat.basePrice + (i - 1) * priceStep;
    const originalPriceAED = Math.round(priceAED * 1.15);

    let title = '';
    let subtitle = '';

    if (cat.id === 'executive-longevity-health') {
      const names = [
        'Platinum Executive Health Longevity Checkup',
        'Advanced Cardiovascular Calcium Scoring & CT',
        'DNA Biological Age & Telomere Assessment',
        'Full Body Preventive Oncology Screening',
        'Executive Metabolic & Insulin Sensitivity Panel',
        'Hormonal Optimization & Endocrine Review',
        'Heavy Metal Toxicity & Micro-Nutrient Panel',
        'Gut Microbiome Genomic Health Assessment',
        'Cognitive Neuro-Performance Health Audit',
        'Comprehensive 120-Biomarker Longevity Suite'
      ];
      title = `${names[(i - 1) % names.length]} — Protocol ${i}`;
      subtitle = `${cat.duration} • ${consultant.split('(')[0].trim()}`;
    } else if (cat.id === 'advanced-aesthetic-dermatology') {
      const names = [
        'HydraFacial Elite MD Platinum Experience',
        'PicoSure Laser Melasma & Pigmentation Removal',
        'Morpheus8 RF Deep Collagen Remodeling',
        'Full-Body Digital Dermoscopy Mole Mapping',
        'PRP Vampire Facial with Micro-Needling',
        'Profhilo Bio-Remodeling Hyaluronic Injection',
        'Exosome Cellular Skin Regeneration Therapy',
        'Fractional CO2 Laser Skin Rejuvenation',
        'Rosacea & Vascular Pulsed-Dye Laser Therapy',
        'Consultant Dermatology Comprehensive Skin Audit'
      ];
      title = `${names[(i - 1) % names.length]} — Session ${i}`;
      subtitle = `${cat.duration} • Clinical Aesthetic`;
    } else if (cat.id === 'cosmetic-implant-dentistry') {
      const names = [
        'Custom E-Max Porcelain Veneer Consultation',
        '3D Guided Straumann Titanium Dental Implant',
        'Philips Zoom WhiteSpeed In-Office Whitening',
        'Invisalign Clear Aligner Digital 3D Scan',
        'Airflow Guided Biofilm Therapy Dental Hygiene',
        'Laser Gum Contouring & Smile Architecture',
        'Porcelain Crown CAD/CAM Same-Day Restoration',
        'Complete Smile Makeover Photographic Analysis',
        'Digital Bite Alignment & Bruxism Nightguard',
        'Comprehensive Oral Cancer & Periodontal Audit'
      ];
      title = `${names[(i - 1) % names.length]} — Treatment ${i}`;
      subtitle = `${cat.duration} • Digital Oral Health`;
    } else if (cat.id === 'womens-health-gynecology') {
      const names = [
        'Well-Woman Comprehensive Health Checkup',
        'High-Definition 4D Pelvic Ultrasound Review',
        'Perimenopause & Menopause Bio-Identical Panel',
        'Cervical Cancer ThinPrep Pap Smear & HPV DNA',
        'Fertility Workup & Ovarian Reserve Assessment',
        'PCOS Comprehensive Endocrine Consultation',
        'Breast Health Digital Ultrasound & Examination',
        'Prenatal Trimester Comprehensive Consultation',
        'Postnatal Pelvic Floor Health Restoration',
        'Routine Gynecological Annual Health Audit'
      ];
      title = `${names[(i - 1) % names.length]} — Consultation ${i}`;
      subtitle = `${cat.duration} • Dedicated Women's Wing`;
    } else if (cat.id === 'pediatrics-child-health') {
      const names = [
        'Newborn Comprehensive Growth & Wellness Exam',
        'DHA Pediatric Developmental Milestone Audit',
        'Childhood Food Allergy & Skin Prick Testing',
        'Pediatric Asthma & Respiratory Health Review',
        'School Entry Health & Vision Screening',
        'Pediatric Nutrition & Growth Velocity Assessment',
        'Adolescent Health & Hormonal Consultation',
        'Infant Sleep & Colic Pediatric Consultation',
        'Travel Immunization & Pediatric Health Plan',
        'Same-Day Acute Pediatric Illness Consultation'
      ];
      title = `${names[(i - 1) % names.length]} — Appointment ${i}`;
      subtitle = `${cat.duration} • Child-Friendly Suite`;
    } else if (cat.id === 'orthopedics-sports-medicine') {
      const names = [
        'Consultant Orthopedic Joint Consultation',
        'Autologous Platelet-Rich Plasma (PRP) Injection',
        'Digital Musculoskeletal Ultrasound & Diagnosis',
        'Knee Osteoarthritis Hyaluronic Acid Injection',
        'Rotator Cuff Impingement Clinical Review',
        'Lumbar Spine & Sciatica Orthopedic Assessment',
        'Runner’s Gait Biomechanics & Kinetic Analysis',
        'Shockwave Therapy for Tendinopathy & Plantar Fascia',
        'Sports Injury Return-to-Play Medical Clearance',
        'Post-Surgical Orthopedic Progress Evaluation'
      ];
      title = `${names[(i - 1) % names.length]} — Assessment ${i}`;
      subtitle = `${cat.duration} • Sports Specialist`;
    } else if (cat.id === 'physiotherapy-spine-rehab') {
      const names = [
        'Tecar Cellular Diathermy Physical Therapy',
        'Dry Needling Myofascial Trigger Point Relief',
        'Computerized Spinal Decompression Therapy',
        'Post-Operative ACL Rehabilitation Protocol',
        'Cervical Neck & Posture Ergonomic Realignment',
        'Sports Performance Mobility & Fascial Release',
        'Vestibular & Balance Rehabilitation Session',
        'Manual Therapy Joint Mobilization Treatment',
        'Sciatica & Disc Bulge Physical Rehabilitation',
        'Hydrotherapy & Resistance Rehabilitation'
      ];
      title = `${names[(i - 1) % names.length]} — Session ${i}`;
      subtitle = `${cat.duration} • 1-on-1 Physiotherapist`;
    } else {
      const names = [
        'VIP Doctor Home Visit in Jumeirah & Downtown',
        'Myers Cocktail High-Dose IV Vitamin Infusion',
        'NAD+ Longevity & Cellular Energy IV Drip',
        'Mobile Clinical Blood Draw & Lab Panel at Home',
        'Immunity Boost Glutathione & Zinc IV Therapy',
        'Executive Telehealth Consultation with Consultant',
        'Post-Travel Hydration & Jetlag Recovery Drip',
        'At-Home Nursing & Wound Care Concierge',
        'Senior Citizen At-Home Health Evaluation',
        'On-Demand 60-Minute Urgent Doctor Dispatch'
      ];
      title = `${names[(i - 1) % names.length]} — Service ${i}`;
      subtitle = `${cat.duration} • VIP Mobile Care`;
    }

    catalog.push({
      id,
      name: title,
      title,
      subtitle,
      disciplineId: cat.id,
      disciplineName: cat.name,
      category: 'Private Medical Service',
      priceAED,
      originalPriceAED,
      duration: cat.duration,
      doctor: consultant,
      insuranceBadge: cat.insuranceBadge,
      clinicWing: 'Nova Private Clinic Jumeirah • Wing B',
      inStock: true,
      isBestseller: i % 4 === 1,
      isDrop: i % 5 === 0,
      isNewArrival: i % 6 === 2,
      heroImage: CURATED_CLINIC_IMAGES[imgIndex],
      images: [
        CURATED_CLINIC_IMAGES[imgIndex],
        CURATED_CLINIC_IMAGES[secondaryImgIndex]
      ],
      description: `Nova Private Clinic service ${title}. Led by ${consultant}. Formulated under Dubai Health Authority (DHA) protocols with ${cat.tagline}.`,
      clinicalFeatures: [
        'DHA Licensed Consultant Physician examination',
        'Direct billing coordination with major UAE health insurers',
        'Digital laboratory and imaging report via patient portal',
        'VIP private consultation suite with valet parking'
      ],
      patientNotice: 'Complimentary rescheduling up to 6 hours prior. Teleconsultation follow-up included.'
    });

    counter++;
  }
});

const fileHeader = `// NOVA PRIVATE CLINIC JUMEIRAH • DUBAI — 160 MEDICAL SERVICES
// DHA Accredited Healthcare, Direct Insurance Billing & UAE AED Pricing

export interface ClinicCatalogItem {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  disciplineId: string;
  disciplineName: string;
  category: string;
  priceAED: number;
  originalPriceAED?: number;
  duration: string;
  doctor: string;
  insuranceBadge: string;
  clinicWing: string;
  inStock: boolean;
  isBestseller?: boolean;
  isDrop?: boolean;
  isNewArrival?: boolean;
  heroImage: string;
  images: string[];
  description: string;
  clinicalFeatures: string[];
  patientNotice: string;
}

export const NOVA_CLINIC_CATALOG: ClinicCatalogItem[] = ${JSON.stringify(catalog, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/clinicCatalogData.ts'), fileHeader);
console.log('Successfully generated 160 Nova Private Clinic medical services for Project 17!');
