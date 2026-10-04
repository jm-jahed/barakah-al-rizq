const fs = require('fs');
const path = require('path');

const DISCIPLINES = [
  {
    id: 'sunrise-vinyasa-ashtanga',
    name: 'Dynamic Vinyasa & Ashtanga',
    tagline: 'Breath-Synchronized Movement, Heat-Building Sequences & Inversions',
    basePrice: 160,
    priceSpan: 240,
    duration: '75 Minutes',
    intensity: 'High Intensity Flow',
    target: 'Strength, Flexibility & Mind Focus'
  },
  {
    id: 'reformer-tower-pilates',
    name: 'Precision Reformer & Tower Pilates',
    tagline: 'Custom Allegro 2 Reformers, Core Centering & Somatic Posture Alignment',
    basePrice: 220,
    priceSpan: 380,
    duration: '60 Minutes',
    intensity: 'Targeted Muscular Endurance',
    target: 'Spinal Decompression & Core Power'
  },
  {
    id: 'crystal-sound-baths-gongs',
    name: 'Alchemy Crystal Sound & Gong Baths',
    tagline: '99.9% Pure Quartz Crystal Singing Bowls, 432Hz Tuning & Planetary Gongs',
    basePrice: 195,
    priceSpan: 320,
    duration: '60 Minutes',
    intensity: 'Deep Theta Wave Rest',
    target: 'Nervous System Reset & Cellular Repair'
  },
  {
    id: 'somatic-pranayama-breathwork',
    name: 'Somatic Breathwork & Wim Hof',
    tagline: 'Conscious Connected Breathing, Vagus Nerve Activation & Oxygen Depletion',
    basePrice: 180,
    priceSpan: 290,
    duration: '60 Minutes',
    intensity: 'Transformative Breath',
    target: 'Emotional Release & Clarity'
  },
  {
    id: 'hot-infrared-detox-yoga',
    name: 'Infrared Heated Detox Yoga (38°C)',
    tagline: 'Radiant Far-Infrared Heating Panels, Lymphatic Drainage & Deep Joint Release',
    basePrice: 175,
    priceSpan: 260,
    duration: '60 Minutes',
    intensity: 'Sweat & Thermal Reset',
    target: 'Cellular Detoxification'
  },
  {
    id: 'restorative-yin-myofascial',
    name: 'Yin Yoga & Myofascial Release',
    tagline: '5-Minute Passive Asana Holds, Cork Roller Trigger Points & Acupressure',
    basePrice: 160,
    priceSpan: 240,
    duration: '75 Minutes',
    intensity: 'Deep Parasympathetic Calm',
    target: 'Connective Tissue Hydration'
  },
  {
    id: 'private-vip-sound-reiki',
    name: 'Private 1-on-1 Sanctuary Immersion',
    tagline: 'Bespoke Somatic Assessment, Personalized Reiki Healing & Singing Bowls',
    basePrice: 650,
    priceSpan: 1400,
    duration: '90 Minutes',
    intensity: 'Tailored 1-on-1 Practice',
    target: 'Comprehensive Biofield Realignment'
  },
  {
    id: 'weekend-desert-wellness-retreat',
    name: 'Luxury Desert & Sound Retreats',
    tagline: 'Al Maha Dune Sunset Flows, Stargazing Meditation & Herbal Banqueting',
    basePrice: 1450,
    priceSpan: 3600,
    duration: 'Full Day / Overnight',
    intensity: 'Holistic Immersion',
    target: 'Sacred Reconnection'
  }
];

const CURATED_WELLNESS_IMAGES = [
  'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552196563-5524e3a89028?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540206395-68808572332f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524863479829-916d8e77f114?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579126038374-6064e9370f0f?q=80&w=1200&auto=format&fit=crop'
];

const INSTRUCTORS = [
  'Elena Rostova (500-RYT Mysore Certified)',
  'Marcus Thorne (Master Pilates Reformer Educator)',
  'Dr. Priya Sharma (Ayurvedic Somatic Practitioner)',
  'Kai Sterling (Sound Alchemist & Gong Master)',
  'Soraia Al Mansoori (Breathwork & Vagus Nerve Specialist)',
  'Lucie de Montmirail (Infrared Sculpt & Mobility Director)'
];

const ITEMS_PER_CATEGORY = 20; // 8 * 20 = 160 items
const catalog = [];
let counter = 1;

DISCIPLINES.forEach((cat) => {
  for (let i = 1; i <= ITEMS_PER_CATEGORY; i++) {
    const idNum = String(counter).padStart(3, '0');
    const id = `AURA-WELLNESS-${idNum}`;
    const imgIndex = (counter - 1) % CURATED_WELLNESS_IMAGES.length;
    const secondaryImgIndex = (counter + 3) % CURATED_WELLNESS_IMAGES.length;
    const instructor = INSTRUCTORS[(counter - 1) % INSTRUCTORS.length];

    const priceStep = Math.round(cat.priceSpan / ITEMS_PER_CATEGORY);
    const priceAED = cat.basePrice + (i - 1) * priceStep;
    const originalPriceAED = Math.round(priceAED * 1.18);

    let title = '';
    let subtitle = '';

    if (cat.id === 'sunrise-vinyasa-ashtanga') {
      const names = [
        'Sunrise Prana Vinyasa Flow',
        'Ashtanga Primary Series Immersion',
        'Golden Hour Sunset Power Vinyasa',
        'Mandala Flow & Hip Opening Journey',
        'Arm Balance & Inversion Mastery',
        'Chakra Awakening Dynamic Flow',
        'Slow Burn Strength & Balance Vinyasa',
        'Dharana Concentrated Flow Practice',
        'DIFC Executive Alignment Vinyasa',
        'Sacred Geometric Flow & Transitions'
      ];
      title = `${names[(i - 1) % names.length]} — Session ${i}`;
      subtitle = `${cat.duration} • ${cat.intensity}`;
    } else if (cat.id === 'reformer-tower-pilates') {
      const names = [
        'Allegro 2 Precision Core Sculpt',
        'Spinal Articulation & Tower Springs',
        'Athletic Reformer Jumpboard Cardio',
        'Postural Restoration Reformer Flow',
        'Reformer Glute & Hamstring Lineage',
        'Cadillac Trapeze & Core Suspension',
        'Advanced Reformer Control Balance',
        'Low-Impact Joint Rehabilitation Pilates',
        'Reformer Precision Oblique Sculpt',
        'Masterclass Reformer Dynamic Control'
      ];
      title = `${names[(i - 1) % names.length]} — Class ${i}`;
      subtitle = `${cat.duration} • Max 8 Participants`;
    } else if (cat.id === 'crystal-sound-baths-gongs') {
      const names = [
        'Alchemy 432Hz Quartz Bowl Sound Bath',
        'Cosmic Planetary Gong Frequency Journey',
        'Tibetan Singing Bowl Cellular Rebalance',
        'Full Moon Sound Immersion & Meditation',
        'Heart Chakra Rose Quartz Sound Sanctuary',
        'Theta Wave Hypnogogic Gong Bath',
        'Chime & Crystal Shamanic Soundscape',
        'Sunset Sound Bath on Downtown Terrace',
        'Zero-Gravity Hammock Sound Immersion',
        'Vagus Nerve Acoustic Sound Alignment'
      ];
      title = `${names[(i - 1) % names.length]} — Journey ${i}`;
      subtitle = `${cat.duration} • Restorative Sound`;
    } else if (cat.id === 'somatic-pranayama-breathwork') {
      const names = [
        'Conscious Connected Somatic Breathwork',
        'Wim Hof Method Oxygenation & Ice Immersion',
        'Pranayama Vitality & Kundalini Breath',
        'Nervous System Somatic Trauma Release',
        'Box Breathing & High-Performance Focus',
        'Anxiety De-escalation Diaphragmatic Flow',
        'Holotropic Breath & Ambient Soundscape',
        'Morning Agni Fire Breath Activation',
        'Coherence Heart-Brain Rhythm Breathing',
        'Transformational Breathwork Sanctuary'
      ];
      title = `${names[(i - 1) % names.length]} — Protocol ${i}`;
      subtitle = `${cat.duration} • Somatic Breath`;
    } else if (cat.id === 'hot-infrared-detox-yoga') {
      const names = [
        'Infrared Heated 38°C Detox Flow',
        'Thermal Hot Sculpt & Isometric Core',
        'Infrared Mobility & Fascial Release',
        'Hot Bikanir Posture Alignment Series',
        'Radiant Heat Flow & Deep Twisting',
        'Far-Infrared Joint Decompression Yoga',
        'Cardiovascular Thermal Flow 60',
        'Metabolic Boost Infrared Yoga Series',
        'Hot Candlelit Flow & Lavender Towels',
        'Cellular Detox Thermal Yoga Sequence'
      ];
      title = `${names[(i - 1) % names.length]} — Sequence ${i}`;
      subtitle = `${cat.duration} • 38°C Far-Infrared`;
    } else if (cat.id === 'restorative-yin-myofascial') {
      const names = [
        'Candlelight Yin Yoga & Deep Fascial Release',
        'Acupressure & Long-Hold Restorative Yin',
        'Cork Roller Myofascial Tension Melt',
        'Sleep Architecture Restorative Immersion',
        'Psoas & Pelvic Basin Gentle Yin Yoga',
        'Meridian Line Alignment & Bolster Therapy',
        'Deep Connective Tissue Hydration Yin',
        'Spinal Traction Passive Restorative Yoga',
        'Neuro-Muscular Reset Yin & Essential Oils',
        'Sacred Silence Passive Floor Sequence'
      ];
      title = `${names[(i - 1) % names.length]} — Practice ${i}`;
      subtitle = `${cat.duration} • Parasympathetic Reset`;
    } else if (cat.id === 'private-vip-sound-reiki') {
      const names = [
        'Private 1-on-1 Bespoke Somatic Assessment',
        'Executive Private Sound Bath & Reiki',
        'VIP Reformer Movement Therapy Consultation',
        'Private Breathwork & Cold Plunge Protocol',
        'Postural Biomechanics & Spinal Realignment',
        'Couples Sound Ceremony & Heart Opening',
        'Private Prenatal Somatic Movement Therapy',
        'VIP Stress Decompression Sanctuary Session',
        'Individualized Ayurvedic Dosha Yoga Therapy',
        'Holistic Energy Realignment & Chakra Bath'
      ];
      title = `${names[(i - 1) % names.length]} — Immersion ${i}`;
      subtitle = `${cat.duration} • 100% Private Studio`;
    } else {
      const names = [
        'Al Maha Desert Dune Sunrise Yoga Retreat',
        'Bab Al Shams Stargazing Sound Bath & Dinner',
        'Hatta Mountain Mindfulness & Breath Retreat',
        'Jumeirah Beachfront Sunrise Sound Retreat',
        'Weekend Nervous System Reset Sanctuary Camp',
        'Full Day Urban Sanctuary Retreat & Spa Day',
        'Desert Moon Equinox Sound & Yoga Pilgrimage',
        'Holistic Longevity & Somatic Health Retreat',
        'Luxury Private Oasis Yoga & Herbal Dining',
        'Emirates Silence & Sound Meditation Retreat'
      ];
      title = `${names[(i - 1) % names.length]} — Retreat ${i}`;
      subtitle = `Weekend Sanctuary • All-Inclusive UAE`;
    }

    catalog.push({
      id,
      name: title,
      title,
      subtitle,
      disciplineId: cat.id,
      disciplineName: cat.name,
      category: 'Sanctuary Practice & Immersion',
      priceAED,
      originalPriceAED,
      duration: cat.duration,
      intensity: cat.intensity,
      instructor,
      capacity: cat.id.includes('private') ? '1-on-1 Private' : (cat.id.includes('retreat') ? 'Max 12 Guests' : 'Max 14 Mats'),
      level: 'All Levels Welcomed • Props Provided',
      included: 'Organic Manduka Pro Mat, Crystal Water, Chilled Organic Towels & Sound Isolation',
      studioZone: 'Downtown Dubai • Sanctuary Pavilion Level 2',
      inStock: true,
      isBestseller: i % 4 === 1,
      isDrop: i % 5 === 0,
      isNewArrival: i % 6 === 2,
      heroImage: CURATED_WELLNESS_IMAGES[imgIndex],
      images: [
        CURATED_WELLNESS_IMAGES[imgIndex],
        CURATED_WELLNESS_IMAGES[secondaryImgIndex]
      ],
      description: `Aura Sanctuary practice ${title}. Led by ${instructor}. Formulated to recalibrate the nervous system and foster physical resilience through ${cat.tagline}.`,
      benefits: [
        'Deep parasympathetic nervous system reactivation',
        'Cortisol reduction and optimized sleep architecture',
        'Enhanced muscular elasticity and postural alignment',
        'Full access to luxury thermal amenities and herbal lounge'
      ],
      bookingInfo: 'Instant reservation with complimentary cancelation up to 12 hours prior.'
    });

    counter++;
  }
});

const fileHeader = `// AURA WELLNESS SANCTUARY DUBAI — 160 PRACTICES & RETREATS
// Authentic UAE AED Pricing & Downtown Dubai Private Studio Schedule

export interface WellnessCatalogItem {
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
  intensity: string;
  instructor: string;
  capacity: string;
  level: string;
  included: string;
  studioZone: string;
  inStock: boolean;
  isBestseller?: boolean;
  isDrop?: boolean;
  isNewArrival?: boolean;
  heroImage: string;
  images: string[];
  description: string;
  benefits: string[];
  bookingInfo: string;
}

export const AURA_WELLNESS_CATALOG: WellnessCatalogItem[] = ${JSON.stringify(catalog, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/wellnessCatalogData.ts'), fileHeader);
console.log('Successfully generated 160 Aura Wellness Sanctuary catalog items for Project 16!');
