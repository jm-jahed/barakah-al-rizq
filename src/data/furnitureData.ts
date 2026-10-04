export interface ColorOption {
  name: string;
  hex: string;
  image?: string;
}

export interface MaterialOption {
  label: string;
  priceDelta: number;
}

export interface FurnitureProduct {
  id: string;
  name: string;
  category: string;
  room: string;
  collection: string;
  material: string;
  finish: string;
  dimensions: string;
  price: number; // in AED
  originalPrice?: number; // in AED
  discount?: number; // %
  availability: string;
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewCount: number;
  isFeatured?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  badge?: string;
  shortDescription: string;
  longDescription: string;
  specifications: Record<string, string>;
  colorOptions: ColorOption[];
  materialOptions: MaterialOption[];
  images: string[];
  tags: string[];
  craftsmanshipNotes: string[];
  whatsInTheBox: string[];
}

export interface FurnitureRoom {
  id: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  count: number;
}

export interface FurnitureMaterial {
  id: string;
  name: string;
  tagline: string;
  description: string;
  textureImage: string;
  origin: string;
  tactileFeel: string;
  highlightProductIds: string[];
}

export interface JournalEssay {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
  coverImage: string;
  excerpt: string;
  content: string[];
  featuredProductIds: string[];
}

export interface ShowroomAtelier {
  id: string;
  city: string;
  name: string;
  location: string;
  hours: string;
  phone: string;
  whatsapp: string;
  features: string[];
  image: string;
}

export const FURNITURE_ROOMS: FurnitureRoom[] = [
  {
    id: 'living-room',
    name: 'Living Room',
    tagline: 'Designed for conversation & quiet contemplation',
    description: 'Sculptural curved sofas, solid travertine coffee blocks, and acoustic bouclé armchairs anchored in architectural proportion.',
    heroImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    count: 48
  },
  {
    id: 'dining-room',
    name: 'Dining Room',
    tagline: 'Designed for lingering gatherings & ceremony',
    description: 'Bookmatched American walnut tables, fluted stone pedestals, and ergonomic saddle leather dining chairs.',
    heroImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
    count: 36
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    tagline: 'Designed for stillness & restorative luxury',
    description: 'Floating cantilevered beds, soft acoustic headboards, and tactile cedar-lined walnut dressers.',
    heroImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    count: 32
  },
  {
    id: 'home-office',
    name: 'Home Office',
    tagline: 'Designed for architectural clarity & deep focus',
    description: 'Executive walnut desks with leather inlays, synchronous ergonomic task seating, and discreet storage.',
    heroImage: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80',
    count: 28
  },
  {
    id: 'outdoor-terrace',
    name: 'Outdoor & Terrace',
    tagline: 'Designed for al fresco serenity & UAE living',
    description: 'Marine-grade Burmese teak lounges, fiber-concrete dining tables, and Sunbrella weatherproof textiles.',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    count: 30
  },
  {
    id: 'lighting-objects',
    name: 'Lighting & Objects',
    tagline: 'Sculptural light & tactile art objects',
    description: 'Spanish alabaster stone columns, hand-knotted wool rugs, and brutalist travertine mirrors.',
    heroImage: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80',
    count: 34
  }
];

export const FURNITURE_MATERIALS: FurnitureMaterial[] = [
  {
    id: 'roman-travertine',
    name: 'Roman Navona Travertine',
    tagline: 'Warm. Porous. Monolithic.',
    description: 'Quarried from ancient limestone beds outside Rome. Each slab features organic mineral veining, open pores, and a soft, velvety honed touch.',
    textureImage: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80',
    origin: 'Tivoli & Rome, Italy',
    tactileFeel: 'Cool, gently pitted, earthy matte stone',
    highlightProductIds: ['fur-tbl-01', 'fur-dtbl-02', 'fur-dec-02']
  },
  {
    id: 'american-walnut',
    name: 'Solid American Black Walnut',
    tagline: 'Rich. Deep. Hand-Rubbed.',
    description: 'Sustainably harvested from mature hardwood forests in Pennsylvania. Characterized by deep chocolate tones, undulating grain flow, and warm natural luster.',
    textureImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80',
    origin: 'Appalachian Highlands, USA',
    tactileFeel: 'Silky smooth, warm organic grain',
    highlightProductIds: ['fur-dtbl-01', 'fur-chair-01', 'fur-desk-01']
  },
  {
    id: 'italian-leather',
    name: 'Full-Grain Semi-Aniline Leather',
    tagline: 'Supple. Breathable. Timeless.',
    description: 'Tanned in Arzignano using vegetable extracts. Preserves natural hide grain variations and develops a rich patina with use.',
    textureImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    origin: 'Tuscany & Veneto, Italy',
    tactileFeel: 'Buttery soft, buttery flexibility, natural warmth',
    highlightProductIds: ['fur-sofa-03', 'fur-dchr-01', 'fur-ochr-01']
  },
  {
    id: 'wool-boucle',
    name: 'Italian Textured Wool Bouclé',
    tagline: 'Tactile. Cloud-like. Acoustic.',
    description: 'Woven with looped alpaca and virgin wool yarns in Biella. Offers natural acoustic dampening and cloud-like dimensional texture.',
    textureImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    origin: 'Biella, Northern Italy',
    tactileFeel: 'Plush, looped texture, cocooning comfort',
    highlightProductIds: ['fur-sofa-01', 'fur-bed-01', 'fur-dchr-02']
  },
  {
    id: 'calacatta-marble',
    name: 'Calacatta Viola & Gold Marble',
    tagline: 'Dramatic. Sculptural. Rare.',
    description: 'Extracted from Carrara quarries with vivid purple and ochre breccia veining set against crystalline creamy white backgrounds.',
    textureImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    origin: 'Carrara, Italy',
    tactileFeel: 'Silky polished stone with micro-crystalline depth',
    highlightProductIds: ['fur-tbl-03', 'fur-sbd-01', 'fur-dtbl-03']
  },
  {
    id: 'champagne-brass',
    name: 'Solid Brushed Champagne Brass',
    tagline: 'Subtle. Architectural. Refined.',
    description: 'Precision-machined billet brass hand-finished with directional satin wire brushes and protected with an ultra-thin matte micro-wax sealant.',
    textureImage: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    origin: 'Brescia, Italy',
    tactileFeel: 'Substantial, satin micro-textured metallic',
    highlightProductIds: ['fur-dec-01', 'fur-med-01', 'fur-bed-02']
  },
  {
    id: 'european-oak',
    name: 'European White Oak & Smoked Ash',
    tagline: 'Honest. Structural. Enduring.',
    description: 'Quarter-sawn solid white oak treated with white pigmented oils or thermal smoking to accentuate straight medullary ray grain lines.',
    textureImage: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=800&q=80',
    origin: 'Bavarian Forest, Germany',
    tactileFeel: 'Wire-brushed authentic timber relief',
    highlightProductIds: ['fur-dtbl-04', 'fur-med-01', 'fur-bed-03']
  }
];

export const JOURNAL_ESSAYS: JournalEssay[] = [
  {
    id: 'architecture-of-stillness',
    title: 'The Architecture of Stillness: Designing UAE Residences for Quiet Luxury',
    subtitle: 'How natural materials, low-slung horizontal proportions, and acoustic textiles soften the desert light and create sanctuaries.',
    category: 'Interior Architecture',
    author: 'Matteo Vianelli — Creative Director',
    readTime: '6 min read',
    date: 'September 2026',
    coverImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'In a region defined by towering glass and perpetual motion, the luxury home must act as an acoustic counterweight — grounding the inhabitant through raw stone and honest timber.',
    content: [
      'When designing residential interiors across Palm Jumeirah, Emirates Hills, and Saadiyat Island, the natural sunlight is the defining architectural collaborator. Harsh midday rays reflecting off pale limestone require interiors that absorb and diffuse rather than reflect.',
      'By selecting unfilled Roman travertine and hand-rubbed smoked oak, we introduce microscopic surface relief that softens shadows. Coupled with low-slung seating profiles (under 75cm overall height), sightlines remain uninterrupted toward garden courtyards and infinite sea horizons.',
      'Acoustic comfort is paramount. Hard marble flooring necessitates dense hand-knotted wool rugs and bouclé upholstery that absorb reverberation, restoring conversational intimacy to expansive 6-meter ceiling reception salons.'
    ],
    featuredProductIds: ['fur-sofa-01', 'fur-tbl-01', 'fur-chair-01']
  },
  {
    id: 'monolithic-travertine',
    title: 'Monolithic Stone: Why Roman Travertine Belongs in Contemporary Spaces',
    subtitle: 'From the Colosseum to modern villa salons: the timeless permanence of unfilled Italian limestone.',
    category: 'Material Science',
    author: 'Dr. Sofia Bernardi — Master Stone Conservator',
    readTime: '5 min read',
    date: 'August 2026',
    coverImage: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Travertine is not merely stone; it is crystallized time. Its natural voids tell the story of geothermal waters that flowed thousands of years ago.',
    content: [
      'Unlike synthetic sintered stones that repeat artificial printed veins, every block of Roman Navona travertine is completely unique. The porous voids, when left unfilled and honed to a matte finish, create a tactile experience that connects the human hand directly to geological history.',
      'In our Treviso atelier, each monolithic coffee table and dining pedestal is carved with 5-axis CNC diamond blades before being hand-dressed by second-generation stonecutters to achieve 15mm chamfered radius bevels.'
    ],
    featuredProductIds: ['fur-tbl-01', 'fur-dtbl-02', 'fur-dec-02']
  },
  {
    id: 'bespoke-craftsmanship-joinery',
    title: 'Mortise, Tenon & Time: The Preservation of True European Joinery',
    subtitle: 'Why invisible mechanical woodcraft outlasts modern metal fasteners by centuries.',
    category: 'Craftsmanship',
    author: 'Kaelen Drake — Master Woodwright',
    readTime: '7 min read',
    date: 'July 2026',
    coverImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'True luxury is invisible. It lives inside the interlocking wood joints that expand and contract in harmony with seasonal humidity without ever loosening.',
    content: [
      'In mass production, screws and glue blocks provide quick structural rigidity that fatigues over a decade. In our heirloom dining tables, solid timber components are united using traditional blind mortise and tenon joints locked with walnut dowels.',
      'Timber breathes. In the UAE climate, where air-conditioned interiors alternate with ambient desert heat, wood must be kiln-dried slowly over 14 weeks to 8% internal moisture content before joinery begins.'
    ],
    featuredProductIds: ['fur-dtbl-01', 'fur-sbd-01', 'fur-desk-01']
  }
];

export const SHOWROOM_ATELIERS: ShowroomAtelier[] = [
  {
    id: 'd3-dubai',
    city: 'Dubai',
    name: 'FORMA ATELIER — Dubai Design District (d3)',
    location: 'Building 6, Ground Floor & Mezzanine Suite 102',
    hours: '10:00 AM – 09:00 PM (Daily)',
    phone: '+971 4 394 8800',
    whatsapp: '+971 52 339 4001',
    features: ['Material Library & Custom Stone Slab Gallery', 'Full-Scale Master Suite & Living Room Mockups', 'Interior Designer VIP Project Lounge', 'Private Valet Parking'],
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'al-quoz-atelier',
    city: 'Dubai',
    name: 'FORMA CRAFT STUDIO — Al Quoz Creative Zone',
    location: 'Street 8, Alserkal Cultural Quarter Annex',
    hours: '09:00 AM – 07:00 PM (Sun – Fri)',
    phone: '+971 4 482 1100',
    whatsapp: '+971 52 339 4001',
    features: ['Live Bespoke Joinery & Finishing Workshop', 'Architectural Timber & Leather Hide Vault', 'Bespoke Customization Consultation Pods', 'Complimentary Specialty Coffee Bar'],
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'saadiyat-abu-dhabi',
    city: 'Abu Dhabi',
    name: 'FORMA RESIDENTIAL GALLERY — Saadiyat Island',
    location: 'Cultural District Pavilion, Mamsha Al Saadiyat',
    hours: '10:00 AM – 10:00 PM (Daily)',
    phone: '+971 2 612 9900',
    whatsapp: '+971 52 339 4001',
    features: ['Sea-Facing Living & Terrace Furniture Pavilions', 'Private Client Villa Planning Suite', 'White-Glove In-Home Curatorial Advisory', 'VIP Valet & Concierge'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  }
];

export { ALL_FURNITURE_PRODUCTS, ALL_FURNITURE_PRODUCTS as ALL_PRODUCTS } from './furnitureCatalogData';
