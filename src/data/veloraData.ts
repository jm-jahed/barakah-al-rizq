export interface WellnessRitual {
  id: string;
  name: string;
  subtitle: string;
  category: 'Signature Massage' | 'Deep Recovery' | 'Facial Rituals' | 'Body Treatments' | 'Hydrotherapy' | 'Aromatherapy' | 'Thermal Experiences' | 'Couples Rituals' | 'Private Wellness';
  durationMinutes: number;
  durationLabel: string;
  priceAED: number;
  intention: 'RESTORE' | 'REBALANCE' | 'RENEW' | 'RELEASE' | 'AWAKEN';
  idealFor: string;
  description: string;
  whatToExpect: string[];
  preparation: string;
  aftercare: string;
  image: string;
  badge?: string;
  featured?: boolean;
}

export interface WellnessIntention {
  id: string;
  key: 'RESTORE' | 'REBALANCE' | 'RENEW' | 'RELEASE' | 'AWAKEN';
  name: string;
  subtitle: string;
  description: string;
  botanicalElement: string;
  ambientTone: string;
  recommendedRitualIds: string[];
}

export interface PrivateSuite {
  id: string;
  name: string;
  tagline: string;
  sqm: number;
  features: string[];
  description: string;
  image: string;
  pricePerSessionAED: number;
}

export interface MembershipTier {
  id: string;
  name: string;
  tagline: string;
  monthlyAED: number;
  annualAED: number;
  features: string[];
  idealFor: string;
  badge?: string;
}

export interface VeloraCapability {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
}

// -------------------------------------------------------------
// METADATA
// -------------------------------------------------------------
export const VELORA_METADATA = {
  name: 'VELORA',
  eyebrow: 'PRIVATE WELLNESS SANCTUARY',
  tagline: 'Return to Yourself.',
  positioning: 'Private Wellness & Recovery Sanctuary',
  locationLabel: 'VELORA · WELLNESS / RECOVERY / RITUAL',
  subheading: 'A private world of restorative rituals, intelligent wellness, and deeply considered experiences designed to bring you back to balance.',
  conceptualNotice: 'VELORA PORTFOLIO DEMONSTRATION · Fictional Luxury Wellness Concept · Simulated Bookings Only'
};

// -------------------------------------------------------------
// 5 WELLNESS INTENTIONS
// -------------------------------------------------------------
export const VELORA_INTENTIONS: WellnessIntention[] = [
  {
    id: 'int-restore',
    key: 'RESTORE',
    name: 'Restore',
    subtitle: 'Deep relaxation and cellular recovery.',
    description: 'Slow, grounding touch and warm basalt stone immersion crafted to calm the nervous system and dissolve exhaustion.',
    botanicalElement: 'Wild Vetiver & Warm Sandalwood',
    ambientTone: 'Candlelit amber glow & deep acoustic resonance',
    recommendedRitualIds: ['rit-silent-hour', 'rit-stone-reset', 'rit-deep-grounding']
  },
  {
    id: 'int-rebalance',
    key: 'REBALANCE',
    name: 'Rebalance',
    subtitle: 'Mind and body reset.',
    description: 'Harmonizing rhythmic hydrotherapy and cranial alignment to center your thoughts and restore natural circadian flow.',
    botanicalElement: 'White Cedar & Bergamot Blossom',
    ambientTone: 'Flowing water murmur & warm stone stillness',
    recommendedRitualIds: ['rit-cranial-flow', 'rit-moonlit-facial', 'rit-thermal-immersion']
  },
  {
    id: 'int-renew',
    key: 'RENEW',
    name: 'Renew',
    subtitle: 'A refreshing wellness experience.',
    description: 'Enzymatic botanical body polishing and oxygenating facials that revive skin texture and elevate subtle vitality.',
    botanicalElement: 'Japanese Yuzu & Damascus Rose Water',
    ambientTone: 'Soft botanical shadows & morning light filtration',
    recommendedRitualIds: ['rit-moonlit-facial', 'rit-botanical-polish', 'rit-radiance-sculpt']
  },
  {
    id: 'int-release',
    key: 'RELEASE',
    name: 'Release',
    subtitle: 'Designed around tension relief.',
    description: 'Targeted myofascial decompression and therapeutic thermal contrasts that untie muscular constriction and stiffness.',
    botanicalElement: 'Camphor Bark & Alpine Juniper',
    ambientTone: 'Subtle steam mist & warm eucalyptus air',
    recommendedRitualIds: ['rit-stone-reset', 'rit-myofascial-release', 'rit-contrast-bath']
  },
  {
    id: 'int-awaken',
    key: 'AWAKEN',
    name: 'Awaken',
    subtitle: 'Energy and renewed focus.',
    description: 'Vigorous lymphatic drainage, cold plunge circulation pulses, and invigorating aromatherapy to clarify the mind.',
    botanicalElement: 'Sweet Neroli & Crisp Petitgrain',
    ambientTone: 'Crisp morning air & radiant quartz reflections',
    recommendedRitualIds: ['rit-lymphatic-surge', 'rit-sound-bath', 'rit-solar-vitality']
  }
];

// -------------------------------------------------------------
// 20+ WELLNESS RITUALS (DEMO DATA)
// -------------------------------------------------------------
export const VELORA_RITUALS: WellnessRitual[] = [
  {
    id: 'rit-silent-hour',
    name: 'The Silent Hour',
    subtitle: 'Restorative sensory decompression & full-body grounding',
    category: 'Signature Massage',
    durationMinutes: 90,
    durationLabel: '90 Minutes',
    priceAED: 1150,
    intention: 'RESTORE',
    idealFor: 'Overstimulated minds, deep fatigue, and digital exhaustion',
    description: 'A completely uninterrupted sanctuary ritual combining slow neuromuscular flowing strokes, warm botanical compresses, and sensory deprivation eye pillows.',
    whatToExpect: [
      'Preliminary warm botanical foot cleansing ritual',
      'Continuous 75-minute slow rhythm full-body grounding massage',
      'Heated herbal flaxseed pack application along the spine',
      'Gentle Tibetan bell awakening & private rest lounge transition'
    ],
    preparation: 'Arrive 20 minutes before to enjoy our private cedarwood tea lounge.',
    aftercare: 'Sip warm organic chamomile infusion and avoid screen exposure for 2 hours.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    badge: 'SIGNATURE RITUAL',
    featured: true
  },
  {
    id: 'rit-stone-reset',
    name: 'The Stone Reset',
    subtitle: 'Volcanic basalt alignment & deep muscle easing',
    category: 'Deep Recovery',
    durationMinutes: 75,
    durationLabel: '75 Minutes',
    priceAED: 980,
    intention: 'RELEASE',
    idealFor: 'Chronic lower-back tension, athletic tightness, and postural stiffness',
    description: 'Hand-shaped volcanic basalt stones heated to precise therapeutic temperatures, glide rhythmically to release structural tightness deep beneath surface fascia.',
    whatToExpect: [
      'Aromatherapeutic inhalation with organic pine and camphor oil',
      'Placement of heated river stones along chakra energy meridians',
      'Targeted deep pressure using oiled basalt stones and forearm strokes',
      'Chilled marble stone placement to close pores and seal circulation'
    ],
    preparation: 'Hydrate adequately before your session.',
    aftercare: 'Rest in our thermal tepidarium and drink warm electrolyte water.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=80',
    badge: 'MOST REQUESTED',
    featured: true
  },
  {
    id: 'rit-moonlit-facial',
    name: 'Moonlit Facial',
    subtitle: 'Intracellular hydration & sculptured jade lymphatic lifting',
    category: 'Facial Rituals',
    durationMinutes: 60,
    durationLabel: '60 Minutes',
    priceAED: 850,
    intention: 'RENEW',
    idealFor: 'Dull complexion, puffiness, and skin seeking radiant nourishment',
    description: 'An architectural facial ritual utilizing cooling white nephrite jade gua sha, peptide-dense botanical serums, and gentle buccal acupressure.',
    whatToExpect: [
      'Double enzymatic oil & floral water steam cleansing',
      'Sculptural facial massage using chilled nephrite jade stones',
      'Application of high-potency marine collagen and hyaluronic mask',
      'Cooling botanical mist and cellular barrier protective balm'
    ],
    preparation: 'Avoid intensive sun exposure or retinoid treatments 24 hours prior.',
    aftercare: 'Maintain bare skin for 6 hours to allow peptide absorption.',
    image: 'https://images.unsplash.com/photo-1512290900672-1f5be1c68e1a?auto=format&fit=crop&w=1200&q=80',
    badge: 'EDITORIAL PICK',
    featured: true
  },
  {
    id: 'rit-cranial-flow',
    name: 'Cranial Flow & Scalp Elixir',
    subtitle: 'Shirodhara-inspired warm oil flow & cervical decompression',
    category: 'Signature Massage',
    durationMinutes: 60,
    durationLabel: '60 Minutes',
    priceAED: 780,
    intention: 'REBALANCE',
    idealFor: 'Migraine relief, mental overactivity, and sleep fragmentation',
    description: 'A continuous stream of warm herbalized sesame and brahmi oil poured gently across the forehead, followed by meticulous cervical and scalp acupressure.',
    whatToExpect: [
      'Upper shoulder and cervical spine tension release in seated posture',
      'Continuous soothing oil stream over third-eye energy point',
      'Deep cranial pressure-point massage releasing scalp fascia',
      'Warm towel cocoon and soothing ginger-cardamom tea service'
    ],
    preparation: 'Wear comfortable clothing and avoid hair styling products.',
    aftercare: 'Keep hair covered and let oils nourish the scalp for at least 2 hours.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'rit-thermal-immersion',
    name: 'Thermal Steam & Ice Bath Journey',
    subtitle: 'Vascular vitality & private thermal contrast circuit',
    category: 'Thermal Experiences',
    durationMinutes: 90,
    durationLabel: '90 Minutes',
    priceAED: 920,
    intention: 'AWAKEN',
    idealFor: 'Immune resilience, systemic inflammation recovery, and cellular energy',
    description: 'Guided contrast therapy alternating between a 90°C Finnish stone sauna, a private 4°C chilled vitality plunge, and eucalyptus steam chamber rest.',
    whatToExpect: [
      'Initial 15-minute dry heat preparation in private cedar sauna',
      'Guided 2-minute immersion in filtered sub-zero vitality plunge',
      'Eucalyptus steam sanctuary breathing restoration',
      'Acoustic sound relaxation in private thermal lounger'
    ],
    preparation: 'Do not eat heavy meals within 90 minutes of the ritual.',
    aftercare: 'Rehydrate with mineralized coconut water provided in the lounge.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    badge: 'CONTRAST CIRCUIT'
  },
  {
    id: 'rit-couples-sanctuary',
    name: 'Duet Stillness: Couples Ritual',
    subtitle: 'Synchronized private suite massage & private rose petal bath',
    category: 'Couples Rituals',
    durationMinutes: 120,
    durationLabel: '120 Minutes',
    priceAED: 2400,
    intention: 'RESTORE',
    idealFor: 'Partners seeking shared relaxation, anniversaries, and tranquil retreats',
    description: 'Exclusive use of our Grand Sanctuary Suite with side-by-side bespoke restorative massages, private thermal steam room, and handcrafted organic tea pairing.',
    whatToExpect: [
      'Private suite welcome with warm yuzu foot cleansing',
      '80-minute synchronized full-body aromatherapy massage',
      'Private soak in our sunken travertine stone soaking tub',
      'Artisanal tea ceremony and delicate honeyed dates in private lounge'
    ],
    preparation: 'Arrive 30 minutes early to enjoy the private suite atmosphere.',
    aftercare: 'Unwind at leisure in the private suite relaxation garden.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
    badge: 'PRIVATE SUITE'
  },
  {
    id: 'rit-botanical-polish',
    name: 'Mineral Salt & Jasmine Body Polish',
    subtitle: 'Enzymatic exfoliation & golden argan body hydration',
    category: 'Body Treatments',
    durationMinutes: 60,
    durationLabel: '60 Minutes',
    priceAED: 720,
    intention: 'RENEW',
    idealFor: 'Dry, lackluster skin and pre-sun skin preparation',
    description: 'Gentle exfoliation with Dead Sea minerals and organic night-blooming jasmine flowers, followed by a warm Vichy shower and golden argan balm veil.',
    whatToExpect: [
      'Dry body brushing to stimulate micro-lymphatic drainage',
      'Full body scrub with floral oils and pulverized mineral salts',
      'Hydrothermal rain shower rinse',
      'Silken botanical balm application over arms, legs, and back'
    ],
    preparation: 'Avoid shaving or waxing 24 hours prior to prevent skin sensitivity.',
    aftercare: 'Avoid direct sun tanning for 24 hours.',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'rit-lymphatic-surge',
    name: 'Lymphatic Drainage Sculpt',
    subtitle: 'Rhythmic feathering & metabolic flow activation',
    category: 'Deep Recovery',
    durationMinutes: 75,
    durationLabel: '75 Minutes',
    priceAED: 950,
    intention: 'AWAKEN',
    idealFor: 'Post-flight water retention, heavy legs, and sluggish metabolism',
    description: 'Precise, light-pressure rhythmic pumping strokes directed along anatomical lymphatic pathways to drain excess fluid and reduce tissue swelling.',
    whatToExpect: [
      'Abdominal breathing pacing to open central thoracic lymphatic ducts',
      'Light, precise rhythmic pumping strokes along limbs and lymph nodes',
      'Application of cooling cypress and juniper detoxifying gel',
      'Elevation rest in our zero-gravity ergonomic relaxation chair'
    ],
    preparation: 'Drink 500ml of clean spring water 1 hour prior.',
    aftercare: 'Continue drinking water throughout the day to support fluid clearance.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'rit-myofascial-release',
    name: 'Structural Fascia Decompression',
    subtitle: 'Slow myofascial shearing & postural realignment',
    category: 'Deep Recovery',
    durationMinutes: 90,
    durationLabel: '90 Minutes',
    priceAED: 1100,
    intention: 'RELEASE',
    idealFor: 'Desk-related cervical tightness, rounded shoulders, and hip tightness',
    description: 'Oil-free deep structural bodywork targeting the connective tissue matrix to unwind chronic holding patterns and re-expand natural mobility.',
    whatToExpect: [
      'Static and dynamic postural mobility assessment',
      'Deep sustained cross-fiber friction and slow fascial unwinding',
      'Passive assisted spinal traction and joint mobility stretches',
      'Hot towel compresses infused with arnica and wintergreen'
    ],
    preparation: 'Wear loose, flexible clothing.',
    aftercare: 'Take a warm epsom salt bath in the evening to maintain tissue suppleness.',
    image: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'rit-sound-bath',
    name: 'Harmonic Quartz Sound Sanctuary',
    subtitle: 'Alchemical crystal singing bowls & resonant frequency bath',
    category: 'Private Wellness',
    durationMinutes: 60,
    durationLabel: '60 Minutes',
    priceAED: 650,
    intention: 'AWAKEN',
    idealFor: 'Anxiety, creative blockages, and non-tactile deep meditation',
    description: 'Submerge into the acoustic frequencies of 99.9% pure quartz crystal singing bowls tuned to 432Hz in our acoustically isolated reflection chamber.',
    whatToExpect: [
      'Settling onto a heated cashmere memory-foam treatment bed',
      'Guided breathwork pacing to settle brainwave frequencies into Theta state',
      '45 minutes of continuous pure crystal bowl resonant harmonics',
      'Gradual grounding with warm grounding tea and botanical grounding oil'
    ],
    preparation: 'Silence all personal mobile devices before entering the chamber.',
    aftercare: 'Allow yourself 15 minutes of silent reflection in our garden courtyard.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'rit-deep-grounding',
    name: 'Earth & Amber Deep Grounding',
    subtitle: 'Warm cedar compress & deep pressure foot reflexology',
    category: 'Signature Massage',
    durationMinutes: 75,
    durationLabel: '75 Minutes',
    priceAED: 890,
    intention: 'RESTORE',
    idealFor: 'Jetlag, root fatigue, and scattered mental energy',
    description: 'A deeply soothing sequence starting with thermal cedarwood foot immersion, followed by comprehensive sole reflexology and slow grounding back pressure.',
    whatToExpect: [
      'Cedarwood tub foot soak with sea salt and rosemary branches',
      'Intensive Thai reflexology stick & thumb pressure on sole meridians',
      'Deep slow back massage with amber resin infused balm',
      'Hot compress wrap on lower spine and calves'
    ],
    preparation: 'Comfortable clothing recommended.',
    aftercare: 'Walk barefoot on grass or clean stone if possible after leaving.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'rit-radiance-sculpt',
    name: 'Radiance Lifting Gua Sha',
    subtitle: 'Rose quartz facial contouring & botanical enzyme peel',
    category: 'Facial Rituals',
    durationMinutes: 75,
    durationLabel: '75 Minutes',
    priceAED: 980,
    intention: 'RENEW',
    idealFor: 'Special occasions, facial definition, and skin rejuvenation',
    description: 'Sculptural facial technique combining organic fruit enzyme radiance peeling with precision rose-quartz wing stones to lift jawline and brow contours.',
    whatToExpect: [
      'Gentle papaya enzyme exfoliation under warm steam',
      'Rhythmic lymphatic facial strokes with carved rose quartz wings',
      'Neck and décolleté tension relief massage',
      'Cooling bio-cellulose gold-infused firming mask'
    ],
    preparation: 'Come with minimal makeup if possible.',
    aftercare: 'Avoid direct makeup for 4 hours; apply SPF50+ sunscreen.',
    image: 'https://images.unsplash.com/photo-1512290900672-1f5be1c68e1a?auto=format&fit=crop&w=1200&q=80'
  }
];

// -------------------------------------------------------------
// PRIVATE SUITES
// -------------------------------------------------------------
export const VELORA_PRIVATE_SUITES: PrivateSuite[] = [
  {
    id: 'ste-grand',
    name: 'The Grand Sanctuary Suite',
    tagline: 'An architectural private world within the sanctuary.',
    sqm: 145,
    features: [
      'Dual oversized heated treatment beds',
      'Private cedarwood steam hammam & ice fountain',
      'Sunken volcanic travertine bath with hydro-jets',
      'Private garden terrace & acoustic daybed lounge',
      'Dedicated personal wellness butler & tea master'
    ],
    description: 'Designed for absolute exclusivity. A complete private spa villa featuring internal thermal chambers, open-air garden relaxation, and custom atmospheric lighting.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    pricePerSessionAED: 3800
  },
  {
    id: 'ste-thermal',
    name: 'The Hydro & Thermal Suite',
    tagline: 'Dedicated to vascular recovery and hydrotherapy immersion.',
    sqm: 95,
    features: [
      'Private 90°C Finnish sauna & 4°C vitality plunge',
      'Single/Dual treatment area with starry night fiber optics',
      'Chromotherapy monsoon rain shower',
      'Zero-gravity rest loungers & oxygen bar'
    ],
    description: 'An intimate architectural space dedicated to contrast therapy circuits, quiet rest, and deep cellular recovery.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    pricePerSessionAED: 2600
  }
];

// -------------------------------------------------------------
// MEMBERSHIP TIERS
// -------------------------------------------------------------
export const VELORA_MEMBERSHIPS: MembershipTier[] = [
  {
    id: 'mem-essential',
    name: 'Essential Sanctuary',
    tagline: 'Monthly restorative rhythm for personal balance.',
    monthlyAED: 1850,
    annualAED: 19800,
    idealFor: 'Professionals seeking structured monthly decompression',
    features: [
      '2 × 75-Minute Bespoke Rituals per month',
      'Unlimited access to Thermal Suite & Ice Plunge circuits',
      'Priority booking window (7 days in advance)',
      '10% preferred rate on all additional rituals & retail',
      'Complimentary valet parking & wellness concierge access'
    ]
  },
  {
    id: 'mem-signature',
    name: 'Signature Patron',
    tagline: 'Comprehensive wellness integration with private suite privileges.',
    monthlyAED: 3400,
    annualAED: 36000,
    idealFor: 'Those prioritizing intentional health and private recovery',
    badge: 'MOST POPULAR',
    features: [
      '4 × 90-Minute Signature Rituals per month',
      'Monthly complimentary Private Suite Session (2 Hours)',
      'Unlimited thermal, steam, and quartz sound room access',
      'Dedicated wellness concierge & priority 14-day reservation window',
      '1 complimentary guest pass per month',
      '15% preferred rate across all spa services'
    ]
  },
  {
    id: 'mem-private',
    name: 'Private Circle Residence',
    tagline: 'Ultimate bespoke wellness sanctuary access.',
    monthlyAED: 6800,
    annualAED: 72000,
    idealFor: 'VIPs, couples, and individuals seeking total exclusivity',
    badge: 'BY INVITATION',
    features: [
      'Unlimited bespoke rituals with dedicated master therapist',
      'Guaranteed private suite availability on 24-hour notice',
      'Private chauffeur service within Dubai & Abu Dhabi',
      'Bespoke in-suite culinary tea & wellness tasting menu',
      'Complete confidentiality & private biometric VIP access'
    ]
  }
];

// -------------------------------------------------------------
// 8 CORE CAPABILITIES
// -------------------------------------------------------------
export const VELORA_CAPABILITIES: VeloraCapability[] = [
  {
    id: 'cap-1',
    number: '01',
    title: 'Intention-Driven Rituals',
    tagline: 'Restore, Rebalance, Renew, Release, Awaken',
    description: 'Every session is matched directly to your current emotional and physical state rather than a generic menu.',
    features: ['5 Core Emotional Intentions', 'Botanical Formulation Pairing', 'Adaptive Pressure Mapping']
  },
  {
    id: 'cap-2',
    number: '02',
    title: 'Private Suite Sanctuary',
    tagline: 'Architectural seclusion in 145m² private villas',
    description: 'Private thermal hammams, sunken stone baths, and acoustic chambers ensuring 100% private wellness immersion.',
    features: ['Private Cedar Steam Room', 'Travertine Soaking Bath', 'Personal Wellness Butler']
  },
  {
    id: 'cap-3',
    number: '03',
    title: 'Thermal & Contrast Circuits',
    tagline: 'Heat, water, cold plunge, and stillness',
    description: 'Calibrated vascular recovery circuits alternating between 90°C dry sauna, 4°C ice vitality plunge, and mist chambers.',
    features: ['4°C Cold Vitality Plunge', 'Finnish Pine Stone Sauna', 'Eucalyptus Steam Chamber']
  },
  {
    id: 'cap-4',
    number: '04',
    title: 'Digital Reservation Engine',
    tagline: 'Frictionless booking in under 60 seconds',
    description: 'Instant time slot selection, custom add-on configuration, and 72-hour guaranteed appointment hold.',
    features: ['Real-Time Time Slots', 'Bespoke Add-On Pairing', 'Encrypted Client Privacy']
  },
  {
    id: 'cap-5',
    number: '05',
    title: 'Smart Wellness Match',
    tagline: 'AI-guided personal consultation',
    description: 'Interactive consultation tool evaluating current energy, time constraints, and tension points to reveal your ideal ritual.',
    features: ['Mood State Analysis', 'Time-Optimized Matching', 'Immediate Consultation Summary']
  },
  {
    id: 'cap-6',
    number: '06',
    title: 'Couples & Duet Journeys',
    tagline: 'Shared tranquil retreats and synchronized touch',
    description: 'Side-by-side treatments in grand suites featuring private rose baths, acoustic sound sessions, and artisan tea pairing.',
    features: ['Synchronized Dual Therapists', 'Private Suite Soaking Tub', 'Artisan Tea Ceremony']
  },
  {
    id: 'cap-7',
    number: '07',
    title: 'Exclusive Memberships',
    tagline: 'Structured recurring wellness rhythms in AED',
    description: 'Monthly and annual wellness access designed to cultivate long-term mental clarity and physical restoration.',
    features: ['Priority Booking Windows', 'Complimentary Suite Access', 'Dedicated Concierge']
  },
  {
    id: 'cap-8',
    number: '08',
    title: 'Bespoke Spa Concierge',
    tagline: 'Meticulous personalized moment planning',
    description: 'Full-service coordination for private wellness days, anniversary celebrations, and bespoke botanical compounding.',
    features: ['Custom Wellness Day Curation', 'Chauffeur Coordination', 'In-Suite Private Dining']
  }
];

// Aliases for unified component imports
export const WELLNESS_INTENTIONS = VELORA_INTENTIONS;
export const PRIVATE_SUITES = VELORA_PRIVATE_SUITES;
export const MEMBERSHIP_TIERS = VELORA_MEMBERSHIPS;

// -------------------------------------------------------------
// WELLNESS COLLECTIONS
// -------------------------------------------------------------
export const WELLNESS_COLLECTIONS = [
  {
    id: 'rest-collection',
    name: 'The Rest Collection',
    tagline: 'Slow, quiet, restorative experiences.',
    description: 'Designed for deep nervous system decompression, acoustic stillness, and cellular relaxation.',
    ritualIds: ['rit-silent-hour', 'rit-cranial-flow', 'rit-stone-reset']
  },
  {
    id: 'recovery-collection',
    name: 'The Recovery Collection',
    tagline: 'Body-focused wellness and musculoskeletal reset.',
    description: 'Targeted myofascial work, thermal basalt application, and tension relief.',
    ritualIds: ['rit-stone-reset', 'rit-lymphatic-surge', 'rit-thermal-immersion']
  },
  {
    id: 'beauty-collection',
    name: 'The Beauty Collection',
    tagline: 'Sculptural facial and skin-care rituals.',
    description: 'Lymphatic drainage, mineral enzyme peels, and botanical radiance treatments.',
    ritualIds: ['rit-moonlit-facial', 'rit-botanical-polish', 'rit-silent-hour']
  },
  {
    id: 'private-collection',
    name: 'The Private Collection',
    tagline: 'Exclusive private pavilion immersions.',
    description: 'Multi-hour private sanctuary suites featuring dedicated master therapists and hammams.',
    ritualIds: ['rit-couples-sanctuary', 'rit-silent-hour']
  },
  {
    id: 'couples-collection',
    name: 'The Couples Collection',
    tagline: 'Shared wellness journeys in total seclusion.',
    description: 'Side-by-side synchronized bodywork, floral soaking baths, and artisan tea rituals.',
    ritualIds: ['rit-couples-sanctuary', 'rit-stone-reset']
  }
];

// -------------------------------------------------------------
// THERMAL PROGRESSION PILLARS
// -------------------------------------------------------------
export const THERMAL_PILLARS = [
  {
    id: 'steam',
    name: 'Eucalyptus Steam',
    subtitle: 'Vascular dilation & respiratory opening',
    tempRange: '45°C · 100% Humidity',
    recommendedDuration: '15 Minutes',
    description: 'Aromatherapy steam chamber infused with mountain eucalyptus and Mediterranean salt vapor.',
    benefit: 'Opens pores, relaxes muscular tightness, and prepares the body for deeper sensory reception.'
  },
  {
    id: 'warmth',
    name: 'Warm Travertine Loungers',
    subtitle: 'Gentle infrared radiant warmth',
    tempRange: '38°C Calibrated Stone',
    recommendedDuration: '20 Minutes',
    description: 'Ergonomically carved travertine stone beds that radiate gentle penetrating warmth along the spine.',
    benefit: 'Soothes autonomic nervous tension and induces meditative alpha-wave calm.'
  },
  {
    id: 'cold',
    name: 'Vitality Ice Plunge',
    subtitle: 'Vascular contraction & neuro-reset',
    tempRange: '4°C Vitality Water',
    recommendedDuration: '2–3 Minutes',
    description: 'Sub-zero crystal plunge pool with crushed botanical ice fountains and cold rain cascade.',
    benefit: 'Triggers mitochondrial energy production, reduces muscular inflammation, and sharpens alertness.'
  },
  {
    id: 'water',
    name: 'Submerged Mineral Bath',
    subtitle: 'Dead Sea magnesium hydro-immersion',
    tempRange: '36°C Thermal Spring',
    recommendedDuration: '25 Minutes',
    description: 'Subterranean saline pool featuring underwater acoustic therapy and magnesium-rich waters.',
    benefit: 'Transdermal magnesium absorption enhances muscular relaxation and remineralizes skin.'
  },
  {
    id: 'rest',
    name: 'Acoustic Rest Pavilion',
    subtitle: 'Zero-gravity silence integration',
    tempRange: 'Ambient 22°C Air Flow',
    recommendedDuration: 'Unhurried Duration',
    description: 'Darkened acoustic sanctuary with velvet zero-gravity daybeds, weighted blankets, and herbal infusions.',
    benefit: 'Allows the cardiovascular system and neural pathways to fully integrate the thermal cycle.'
  }
];

// -------------------------------------------------------------
// PRIVATE JOURNEY 7 STAGES
// -------------------------------------------------------------
export const PRIVATE_JOURNEY_STAGES = [
  {
    step: '01',
    title: 'Arrival',
    subtitle: 'Subterranean discreet entrance',
    duration: '10 Min',
    details: 'Step through velvet acoustic airlocks where outside street sound drops to absolute silence. Transition into soft cashmere slippers and linen robes.'
  },
  {
    step: '02',
    title: 'Welcome Ritual',
    subtitle: 'Sensory grounding & botanical foot bath',
    duration: '15 Min',
    details: 'A calming warm cedar bowl foot immersion infused with dead sea salts, frankincense drops, and warm herbal tea service.'
  },
  {
    step: '03',
    title: 'Treatment',
    subtitle: 'Bespoke therapy & master touch',
    duration: '60–120 Min',
    details: 'Your selected restorative ritual unfolds in a climate-controlled sanctuary room with heated stone table and tailored lighting.'
  },
  {
    step: '04',
    title: 'Thermal Experience',
    subtitle: 'Steam, warmth & vitality plunge',
    duration: '30 Min',
    details: 'Contrast hydrotherapy progression through cedar steam, travertine heat benches, and mineral-infused soaking pools.'
  },
  {
    step: '05',
    title: 'Rest',
    subtitle: 'Zero-gravity stillness integration',
    duration: '20 Min',
    details: 'Quiet acoustic lounge with weighted silk blankets, soft 1800K ambient illumination, and gentle breathing soundscapes.'
  },
  {
    step: '06',
    title: 'Tea Ceremony',
    subtitle: 'Hand-blended ceremonial infusions',
    duration: '15 Min',
    details: 'Artisan silver needle white tea or roasted saffron tisane paired with organic dates and raw floral honeys.'
  },
  {
    step: '07',
    title: 'Departure',
    subtitle: 'Unrushed return to the world',
    duration: '10 Min',
    details: 'A seamless transition back with private valeting, a personalized home-care botanical tincture, and deep renewed balance.'
  }
];

// -------------------------------------------------------------
// CONCIERGE SERVICE PILLARS
// -------------------------------------------------------------
export const CONCIERGE_PILLARS = [
  {
    id: 'c1',
    title: 'Choose a Ritual',
    action: 'Guided Selection',
    description: 'Personalized guidance from our head therapist to match treatment protocols to current stress or recovery targets.'
  },
  {
    id: 'c2',
    title: 'Prepare a Private Suite',
    action: 'Exclusive Villa Setup',
    description: 'Custom lighting, aromatherapy preferences, bath botanicals, and bespoke music curated prior to arrival.'
  },
  {
    id: 'c3',
    title: 'Plan a Couples Experience',
    action: 'Dual Retreat Coordination',
    description: 'Side-by-side treatments, private floral plunge baths, and ceremonial tea tastings for two.'
  },
  {
    id: 'c4',
    title: 'Arrange a Wellness Day',
    action: 'Full Day Immersion',
    description: 'Multi-stage 4 to 6-hour restorative retreat combining hydrotherapy, bodywork, facials, and light culinary nourishment.'
  },
  {
    id: 'c5',
    title: 'Ask the Concierge',
    action: 'Direct Inquiry',
    description: 'Special requests, private VIP transport, biometric discretion, and bespoke botanical compounding.'
  }
];

// -------------------------------------------------------------
// WELLNESS ARCHITECTURE 5 STEPS
// -------------------------------------------------------------
export const WELLNESS_ARCHITECTURE_STEPS = [
  {
    step: '01',
    title: 'Intention',
    description: 'Aligning with emotional and energetic goals: Restore, Rebalance, Renew, Release, Awaken.'
  },
  {
    step: '02',
    title: 'Ritual',
    description: 'Calibrated master bodywork, rhythmic strokes, and bespoke botanical compounding.'
  },
  {
    step: '03',
    title: 'Environment',
    description: 'Architectural acoustics, warm travertine stone, filtered air, and 1800K candlelight.'
  },
  {
    step: '04',
    title: 'Experience',
    description: 'Unhurried sensory transitions without artificial time pressure or abrupt disruptions.'
  },
  {
    step: '05',
    title: 'Restoration',
    description: 'Biological equilibrium, lowered cortisol, restored circadian rhythm, and deep calm.'
  }
];

