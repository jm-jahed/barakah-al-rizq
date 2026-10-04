const fs = require('fs');
const path = require('path');

const DISCIPLINES = [
  { id: 'olympic-strength-conditioning', name: 'Olympic Strength & Power Conditioning', subtitle: 'Eleiko IWF Platforms, Keiser Pneumatics & Velocity-Based Barbell Training' },
  { id: 'reformer-pilates-biomechanics', name: 'Reformer Pilates & Spinal Biomechanics', subtitle: 'Allegro 2 Reformers, Tower Cadillacs & Core Structural Decompression' },
  { id: 'championship-combat-boxing', name: 'Championship Boxing & Combat Athletics', subtitle: 'Regulation Ring Sparring, Cleto Reyes Striking & Footwork Calisthenics' },
  { id: 'hyrox-endurance-metcon', name: 'HYROX Official & High-Altitude MetCon', subtitle: 'SkiErg, Sled Push, Rogue Echo Bikes & Simulated 2500m Altitude Chamber' },
  { id: 'biohacking-cryo-recovery', name: 'Biohacking, -110°C Cryo & Infrared Recovery', subtitle: 'Sub-Zero Nitrogen Chamber, Hyperbaric Oxygen (HBOT) & Normatec Compression' },
  { id: 'executive-personal-mastery', name: '1-on-1 Master Olympic Coaches & Sports Science', subtitle: 'Dedicated Ex-Olympian Mentors, EMG Muscle Telemetry & Biomechanical Audits' },
  { id: 'metabolic-nutrition-dexa', name: 'DEXA Body Scanning & Sports Nutrition Lab', subtitle: 'Clinical InBody 970 Analysis, VO2 Max Testing & Tailored UAE Meal Regimes' },
  { id: 'vip-black-tier-memberships', name: 'Sovereign Black-Tier 24/7 All-Access Pass', subtitle: 'DIFC & Palm Jumeirah Sanctuary, Valet, Rooftop Pool & Private Recovery Suites' }
];

const PROGRAM_BASE_TITLES = [
  'Hypertrophy Velocity-Based Barbell Mastery',
  'Advanced Dynamic Reformer Core Sculpt & Cadillac Flow',
  'Heavyweight Championship Boxing & Ring Strategy',
  'Official HYROX Competition Race Prep & Sled Assault',
  'Sub-Zero -110°C Cryo & Hyperbaric Oxygen Cellular Recovery',
  'VIP 1-on-1 Master Performance Coaching & EMG Telemetry',
  'DEXA Clinical Scan & Metabolic VO2 Max Benchmark',
  'Sovereign Black-Tier Unlimited Monthly Club Access',
  'Olympic Snatch & Clean & Jerk Technical Lab',
  'Athletic Mobility, Fascial Release & Contrast Therapy',
  'High-Intensity Altitude MetCon & Lactate Threshold',
  'Muay Thai Striking, Clinch Control & Heavy Bag Circuit',
  'Prenatal & Postural Pilates Core Rehabilitation',
  'Contrast Therapy: 4°C Ice Bath & 90°C Finnish Cedar Sauna',
  'Endurance Row & SkiErg Power Output Optimization',
  'Executive Longevity & Biomarker Optimization Protocol',
  'Custom Sports Macro Nutrition & Daily Meal Delivery Sync',
  'Kettlebell Sport Ballistics & Grip Strength Conditioning',
  'Spinal Decompression & Deep Tissue Percussive Therapy',
  'Annual Black Tier VIP Membership with Private Locker'
];

const MASTER_COACHES = [
  { name: 'Marcus Sterling', title: 'Head of Strength & Olympic Performance', credentials: 'Ex-Olympic Weightlifting Coach, UKSCA Master Trainer' },
  { name: 'Elena Rostova', title: 'Director of Reformer Pilates & Biomechanics', credentials: 'PMA Certified Master Instructor, 14+ Yrs Paris & Dubai' },
  { name: 'Tariq Al-Hashemi', title: 'Head Combat & Championship Boxing Coach', credentials: 'Former Middleweight Champion, AIBA Level 3' },
  { name: 'Dr. Henrik Lindqvist', title: 'Director of Sports Science & Biohacking', credentials: 'PhD in Exercise Physiology, Karolinska Institute' }
];

const UNSPLASH_IMAGES = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80'
];

const INTENSITY_LEVELS = ['Elite Athlete', 'Advanced', 'Intermediate to Advanced', 'All Fitness Levels'];

const items = [];
let idCounter = 1;

// 20 items per discipline = 160 items
DISCIPLINES.forEach((disc, discIdx) => {
  for (let i = 0; i < 20; i++) {
    const pId = `KA-${String(idCounter).padStart(3, '0')}`;
    const baseTitle = PROGRAM_BASE_TITLES[i % PROGRAM_BASE_TITLES.length];
    const coach = MASTER_COACHES[(discIdx + i) % MASTER_COACHES.length];
    const intensity = INTENSITY_LEVELS[(discIdx + i) % INTENSITY_LEVELS.length];
    
    const imgIndex1 = (discIdx * 2 + i) % UNSPLASH_IMAGES.length;
    const imgIndex2 = (imgIndex1 + 4) % UNSPLASH_IMAGES.length;
    const imgIndex3 = (imgIndex1 + 7) % UNSPLASH_IMAGES.length;

    let basePrice = 160;
    if (disc.id.includes('memberships')) basePrice = 1250 + (i * 120);
    else if (disc.id.includes('executive-personal')) basePrice = 450 + (i * 30);
    else if (disc.id.includes('biohacking')) basePrice = 280 + (i * 20);
    else if (disc.id.includes('reformer')) basePrice = 180 + (i * 12);
    else if (disc.id.includes('combat')) basePrice = 195 + (i * 15);
    else if (disc.id.includes('metabolic')) basePrice = 320 + (i * 25);
    else if (disc.id.includes('hyrox')) basePrice = 165 + (i * 10);
    else basePrice = 150 + (i * 10);

    const priceAED = Math.round(basePrice / 5) * 5;
    const durationMins = disc.id.includes('memberships') ? 30 : (45 + (i % 4) * 15);
    const caloriesBurn = 350 + ((i * 40) % 550);

    items.push({
      id: pId,
      title: `${baseTitle} — Protocol ${String.fromCharCode(65 + (i % 6))}`,
      slug: `${disc.id}-${pId.toLowerCase()}`,
      disciplineId: disc.id,
      disciplineName: disc.name,
      priceAED: priceAED,
      originalPriceAED: Math.random() > 0.65 ? Math.round((priceAED * 1.2) / 5) * 5 : undefined,
      durationMinutes: durationMins,
      caloriesBurnEstimate: caloriesBurn,
      intensityLevel: intensity,
      masterCoach: coach,
      rating: +(4.9 + ((idCounter * 0.01) % 0.1)).toFixed(1),
      reviewsCount: 36 + (idCounter * 5),
      isBlackTierExclusive: disc.id.includes('memberships') || i % 4 === 0,
      isComplimentaryAssessment: true,
      heroImage: UNSPLASH_IMAGES[imgIndex1],
      gallery: [
        UNSPLASH_IMAGES[imgIndex1],
        UNSPLASH_IMAGES[imgIndex2],
        UNSPLASH_IMAGES[imgIndex3]
      ],
      facilityZone: disc.id.includes('reformer') ? 'Reformer Sanctuary 02' : (disc.id.includes('combat') ? 'Octagon Combat Ring' : (disc.id.includes('biohacking') ? 'Cryo & Hyperbaric Pods' : 'DIFC Main Arena Floor')),
      shortDescription: `A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of ${coach.name} to maximize muscular output, nervous system recovery, and functional longevity.`,
      keyOutcomes: [
        'Rapid strength & neuromuscular velocity gains',
        'Enhanced aerobic threshold and VO2 max stamina',
        'Accelerated cellular repair and lactic acid clearance',
        'Biomechanical alignment with zero joint stress'
      ],
      equipmentUtilized: [
        'Eleiko IWF Competition Barbell & Bumper Sets',
        'Keiser Air300 Pneumatic Resistance Cables',
        'Balanced Body Allegro 2 Reformer & Cadillac',
        'M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)'
      ],
      sessionProtocol: [
        'Pre-workout movement screening & dynamic neural activation (10 mins)',
        'Core periodized strength/conditioning block with real-time velocity tracking (35 mins)',
        'Contrast recovery or percussive myofascial decompression (15 mins)'
      ]
    });

    idCounter++;
  }
});

const fileContent = `export interface FitnessProgram {
  id: string;
  title: string;
  slug: string;
  disciplineId: string;
  disciplineName: string;
  priceAED: number;
  originalPriceAED?: number;
  durationMinutes: number;
  caloriesBurnEstimate: number;
  intensityLevel: string;
  masterCoach: {
    name: string;
    title: string;
    credentials: string;
  };
  rating: number;
  reviewsCount: number;
  isBlackTierExclusive: boolean;
  isComplimentaryAssessment: boolean;
  heroImage: string;
  gallery: string[];
  facilityZone: string;
  shortDescription: string;
  keyOutcomes: string[];
  equipmentUtilized: string[];
  sessionProtocol: string[];
}

export const FITNESS_CATALOG: FitnessProgram[] = ${JSON.stringify(items, null, 2)};
`;

const outputPath = path.join(__dirname, '../src/data/fitnessCatalogData.ts');
fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully generated ${items.length} fitness programs to ${outputPath}`);
