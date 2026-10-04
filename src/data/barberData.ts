export interface BarberService {
  id: string;
  name: string;
  category: 'Hair' | 'Beard' | 'Shave' | 'Skin' | 'Wellness' | 'Packages';
  description: string;
  price: number;
  duration: string;
  included: string[];
  suitableFor: string;
  preparation: string;
  aftercare: string;
  image: string;
}

export interface Barber {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  qualifications?: string;
  languages: string[];
  rating: number;
  signatureService: string;
  bio: string;
  availability: string;
  image: string;
}

export interface GroomingProduct {
  id: string;
  name: string;
  category: 'Hair' | 'Beard' | 'Skin' | 'Tools';
  price: number;
  image: string;
  description: string;
  size: string;
  hold?: string;
  shine?: string;
}

export interface TransformationCase {
  id: string;
  title: string;
  category: string;
  serviceUsed: string;
  beforeImage: string;
  afterImage: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SERVICES_DATA: BarberService[] = [
  {
    id: 'classic-cut',
    name: 'Classic Gentleman Haircut',
    category: 'Hair',
    description: 'Precision scissor and clipper haircut tailored to your head structure, finished with a razor neck clean and hot towel rinse.',
    price: 95,
    duration: '45 min',
    included: ['Personalized style consultation', 'Scalp wash & conditioning', 'Precision cut & razor lineup', 'Styling with matte clay'],
    suitableFor: 'Gentlemen seeking timeless, refined business and casual cuts',
    preparation: 'Come with clean, dry hair',
    aftercare: 'Style daily with light pomade',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'skin-fade',
    name: 'Precision Skin Fade',
    category: 'Hair',
    description: 'Seamless low, mid, or high skin fade executed with foil shavers, foil detailers, and razor-sharp lineup.',
    price: 120,
    duration: '45 min',
    included: ['Foil shaver skin blend', 'Top texturizing', 'Bevel razor outline', 'Scalp invigorating tonic'],
    suitableFor: 'Clients wanting sharp, ultra-clean gradient fades',
    preparation: 'None required',
    aftercare: 'Maintain fade every 10-14 days',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'beard-sculpt',
    name: 'Architectural Beard Sculpt & Trim',
    category: 'Beard',
    description: 'Custom cheek and neck line shaping, bulk reduction, foil detailing, and hot towel essential oil steam treatment.',
    price: 75,
    duration: '30 min',
    included: ['Clipper & scissor bulk sculpting', 'Hot towel steam prep', 'Straight razor edge sharpening', 'Organic beard balm massage'],
    suitableFor: 'Bearded gentlemen maintaining full, medium, or stubble shape',
    preparation: 'Avoid trimming 3 days prior',
    aftercare: 'Apply daily beard oil',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'cut-and-beard',
    name: 'Signature Haircut + Beard Sculpt',
    category: 'Packages',
    description: 'Our most popular combination: full precision haircut, hot towel beard sculpting, scalp massage, and styling.',
    price: 165,
    duration: '60 min',
    included: ['Classic or fade haircut', 'Hot towel beard sculpt & lineup', 'Shampoo & scalp massage', 'Matte finish styling'],
    suitableFor: 'The complete fortnightly grooming refresh',
    preparation: 'None required',
    aftercare: 'Daily styling & beard hydration',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'hot-shave',
    name: 'Traditional Hot Towel Shave',
    category: 'Shave',
    description: 'Classic Turkish & Italian straight-razor shave with pre-shave oil, double hot towels, rich warm lather, and cold towel finish.',
    price: 85,
    duration: '35 min',
    included: ['Pre-shave sandalwood oil', 'Double hot towel wrap', 'Warm badger brush lathering', 'Straight razor pass', 'Post-shave balm'],
    suitableFor: 'Gentlemen desiring a clean, baby-smooth shave experience',
    preparation: 'Shave not required',
    aftercare: 'Apply soothing post-shave moisturizer',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'royal-grooming',
    name: 'Royal Grooming Ritual',
    category: 'Packages',
    description: 'Luxury 90-minute package including haircut, hot towel shave or beard sculpt, charcoal deep cleansing facial, and scalp treatment.',
    price: 250,
    duration: '90 min',
    included: ['Signature haircut & razor finish', 'Hot towel shave / beard sculpt', 'Deep detox facial mask', '15-min head & shoulder massage'],
    suitableFor: 'Pre-event grooming, weekend relaxation, or VIP treatment',
    preparation: 'Arrive 10 minutes early for lounge espresso',
    aftercare: 'Use hydrating face moisturizer',
    image: 'https://images.unsplash.com/photo-1517832606589-71574620396d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'executive-grooming',
    name: 'Executive Full Suite Ritual',
    category: 'Packages',
    description: 'Complete 2-hour head-to-toe grooming ritual inside a private VIP suite with complimentary single-malt refreshments.',
    price: 350,
    duration: '120 min',
    included: ['Bespoke haircut & style', 'Beard trim / hot shave', 'Anti-aging caviar facial', 'Scalp detox treatment', 'Hand & nail care'],
    suitableFor: 'Executives, grooms, and VIP guests',
    preparation: 'Private suite reservation required',
    aftercare: 'Complete home routine kit provided',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'scalp-treatment',
    name: 'Revitalizing Scalp & Hair Therapy',
    category: 'Wellness',
    description: 'Scalp exfoliation scrub, tea tree infusion, and steam treatment designed to clear follicle buildup and stimulate growth.',
    price: 150,
    duration: '40 min',
    included: ['Micro-exfoliating scalp scrub', 'Warm steam mask treatment', 'Scalp acupressure massage', 'Biotin tonic application'],
    suitableFor: 'Men experiencing dry scalp, dandruff, or thinning hair',
    preparation: 'None',
    aftercare: 'Use sulfate-free shampoo',
    image: 'https://images.unsplash.com/photo-1517832606589-71574620396d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'facial-grooming',
    name: 'Charcoal Detox Men’s Facial',
    category: 'Skin',
    description: 'Deep pore cleansing, ultrasonic blackhead clearing, activated charcoal mask, and cold stone facial massage.',
    price: 180,
    duration: '45 min',
    included: ['Steam pore opening', 'Charcoal detox mask', 'Ultrasonic skin scrubbing', 'Hyaluronic acid hydration'],
    suitableFor: 'Men wanting clear, refreshed, non-greasy skin in Dubai weather',
    preparation: 'None',
    aftercare: 'Daily SPF 50 sunscreen',
    image: 'https://images.unsplash.com/photo-1512290900673-7002ddb92112?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'kids-cut',
    name: 'Junior Gentleman Haircut',
    category: 'Hair',
    description: 'Patient, gentle haircut experience for boys aged 3 to 12 with styled finish and juice box.',
    price: 70,
    duration: '30 min',
    included: ['Gentle scissor/clipper cut', 'Kid-safe water wash', 'Light styling cream'],
    suitableFor: 'Boys under 12 years',
    preparation: 'None',
    aftercare: 'Easy wash-out styling',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=800&auto=format&fit=crop'
  }
];

export const BARBERS_DATA: Barber[] = [
  {
    id: 'barber-leo',
    name: 'Leo Vance',
    title: 'Master Barber & Founder',
    specialty: 'Precision Skin Fades & Executive Scissors',
    experience: '16 Years',
    qualifications: 'Master Barber Certification (London)',
    languages: ['English', 'French'],
    rating: 4.98,
    signatureService: 'Executive Haircut + Beard Sculpt',
    bio: 'Formally trained in Mayfair, London. Leo brings 16 years of high-end international barbering experience to Dubai, crafting sharp architectural fades and bespoke classic cuts.',
    availability: 'Mon, Tue, Thu, Fri, Sat',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'barber-tariq',
    name: 'Tariq Al-Maktoum',
    title: 'Senior Beard Specialist',
    specialty: 'Beard Sculpting & Traditional Hot Shaves',
    experience: '12 Years',
    qualifications: 'Traditional Ottoman Shave Master',
    languages: ['Arabic', 'English'],
    rating: 4.95,
    signatureService: 'Traditional Hot Towel Shave',
    bio: 'Specialist in precision beard geometry and traditional hot towel razor techniques. Expert in crafting tailored beard lines that complement jaw structure.',
    availability: 'Sun, Mon, Wed, Thu, Sat',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'barber-antoine',
    name: 'Antoine Dubois',
    title: 'Style Specialist & Colorist',
    specialty: 'Textured Crops, Pompadours & Beard Camo',
    experience: '10 Years',
    qualifications: 'Paris Hair Design Academy',
    languages: ['French', 'English'],
    rating: 4.92,
    signatureService: 'Royal Grooming Ritual',
    bio: 'Artistic stylist specializing in modern textured crops, classic pompadours, and subtle beard grey blending.',
    availability: 'Tue to Sat',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'barber-marcus',
    name: 'Marcus Silva',
    title: 'Senior Fade Specialist',
    specialty: 'Low/Mid/High Skin Fades & Razor Lineups',
    experience: '11 Years',
    qualifications: 'Brazilian Barber Guild Fellow',
    languages: ['English', 'Portuguese', 'Spanish'],
    rating: 4.96,
    signatureService: 'Precision Skin Fade',
    bio: 'Renowned for ultra-smooth gradient skin fades and razor-sharp hairline detailing with flawless surgical precision.',
    availability: 'Mon to Wed, Fri, Sun',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'
  }
];

export const PRODUCTS_DATA: GroomingProduct[] = [
  { id: 'prod-matte-clay', name: 'Matte Craft Styling Clay', category: 'Hair', price: 110, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop', description: 'High hold, zero shine natural matte finish clay infused with bentonite clay and cedarwood.', size: '100g', hold: 'High Hold', shine: 'Zero Shine' },
  { id: 'prod-beard-oil', name: 'Sandalwood & Argan Beard Oil', category: 'Beard', price: 95, image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop', description: 'Nourishing blend of pure Moroccan argan oil and Moroccan sandalwood to soften beard wire.', size: '50ml' },
  { id: 'prod-sea-salt', name: 'Volumizing Sea Salt Spray', category: 'Hair', price: 85, image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=600&auto=format&fit=crop', description: 'Adds effortless beach texture and natural lift for medium to long hair styles.', size: '150ml', hold: 'Light Hold', shine: 'Natural Finish' },
  { id: 'prod-charcoal-cleanser', name: 'Detoxifying Charcoal Face Wash', category: 'Skin', price: 120, image: 'https://images.unsplash.com/photo-1512290900673-7002ddb92112?q=80&w=600&auto=format&fit=crop', description: 'Activated charcoal cleanser removing Dubai dust, excess oil, and impurities without drying skin.', size: '150ml' }
];

export const TRANSFORMATIONS_DATA: TransformationCase[] = [
  { id: 'trans-1', title: 'Executive Fade & Beard Overhaul', category: 'Full Grooming', serviceUsed: 'Signature Haircut + Beard Sculpt', beforeImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop', afterImage: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop' },
  { id: 'trans-2', title: 'Low Skin Fade & Razor Lineup', category: 'Hair Cut', serviceUsed: 'Precision Skin Fade', beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop', afterImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop' }
];

export const ARTICLES_DATA: Article[] = [
  { id: 'art-1', title: 'How to Choose the Right Fade for Your Face Shape', category: 'Hair Styling', readTime: '4 min read', excerpt: 'Understanding low, mid, high, and drop fades to balance round, square, or oval facial features.', content: 'Fades are not one-size-fits-all. A low fade preserves weight around the temples for long narrow faces, while a high skin fade creates vertical length for rounder faces...', image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop' },
  { id: 'art-2', title: 'Beard Care Essentials in the Dubai Climate', category: 'Beard Health', readTime: '5 min read', excerpt: 'Combating heat, humidity, and AC dehydration with proper beard wash and argan oil routines.', content: 'Dubai air conditioning strips natural sebum from beard hair follicles, making beard hair brittle and itchy. Daily application of cold-pressed argan oil keeps beard hair soft...', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop' },
  { id: 'art-3', title: 'Grooming Guide for Your Wedding Day', category: 'Gentleman Tips', readTime: '5 min read', excerpt: 'Timing your haircut, skin treatment, and beard trim 48 hours prior for flawless wedding photos.', content: 'Never get a haircut on the morning of your wedding day. Schedule your major haircut and beard sculpt 2 days prior to allow natural hairline settling...', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop' }
];

export const FAQS_DATA: FaqItem[] = [
  { question: 'How do I book an appointment at THE GENTLEMEN\'S ROOM?', answer: 'You can book online via our booking wizard, call our concierge desk, or send a direct message via WhatsApp to +971 52 339 4001.' },
  { question: 'What is the price of a haircut and beard trim in Dubai?', answer: 'Our Classic Gentleman Haircut starts at AED 95, Beard Sculpting at AED 75, and our popular Signature Haircut + Beard package is AED 165.' },
  { question: 'Do you accept walk-ins?', answer: 'While we accommodate walk-in guests when slots permit, we highly recommend booking in advance to guarantee your preferred barber and time.' },
  { question: 'What is included in the Royal Grooming Ritual?', answer: 'The Royal Grooming Ritual (AED 250) includes a haircut, hot towel shave or beard sculpt, deep detox facial mask, and 15-minute head & shoulder massage.' },
  { question: 'Where are your studio locations in Dubai?', answer: 'Our barber studios are located in DIFC, Downtown Dubai (Boulevard), Dubai Marina, Jumeirah, and Business Bay with valet parking.' },
  { question: 'What memberships do you offer?', answer: 'We offer monthly memberships starting at AED 299/mo (Essential), AED 499/mo (Gentleman), and AED 799/mo (Elite) with priority booking and unlimited trims.' }
];
