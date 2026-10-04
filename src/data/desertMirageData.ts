export interface Expedition {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  capacity: string;
  departureTime: string;
  experienceLevel: 'Relaxed Luxury' | 'Thrilling Adventure' | 'Ultra-Exclusive' | 'Culinary Focus';
  basePriceAED: number;
  privatePriceAED: number;
  availability: 'AVAILABLE' | 'LIMITED' | 'PRIVATE ONLY' | 'FILLING FAST';
  image: string;
  features: string[];
  highlights: { label: string; value: string }[];
}

export interface TimelineMilestone {
  time: string;
  title: string;
  location: string;
  description: string;
  atmosphere: string;
  icon: string;
}

export interface MenuItem {
  category: 'Starter' | 'Main Course' | 'Dessert' | 'Arabian Coffee & Tea';
  title: string;
  arabicName: string;
  description: string;
  dietary: string[];
}

export interface DesertStory {
  id: string;
  title: string;
  readTime: string;
  category: string;
  excerpt: string;
  author: string;
  image: string;
}

export interface DesertRegion {
  id: string;
  name: string;
  arabicName: string;
  terrainType: string;
  distanceFromDubai: string;
  highlight: string;
  description: string;
}

export interface AddonOption {
  id: string;
  name: string;
  priceAED: number;
  description: string;
  category: 'Vehicle' | 'Dining' | 'Activity' | 'Hospitality';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  origin: string;
  experience: string;
  date: string;
}

/* =========================================================================
   DESERT MIRAGE BRAND DATASET
========================================================================= */

export const DESERT_MIRAGE_BRAND = {
  name: 'DESERT MIRAGE',
  legalName: 'Desert Mirage Luxury Safaris & Expeditions LLC',
  tagline: 'Luxury Desert Expeditions • Dubai, UAE',
  heroHeadline: 'THE DESERT, AFTER DARK.',
  positioning: 'A bespoke Arabian desert sanctuary engineered for discerning travellers seeking total privacy, cinematic dune mastery, and Michelin-calibre hospitality beneath the stars.',
  location: 'Dubai Desert Conservation Reserve & Al Marmoom Heritage Oasis, Dubai, UAE',
  conciergePhone: '+971 4 399 8200',
  whatsappDirect: '+971523394001',
  whatsappDisplay: '+971 52 339 4001',
  conciergeEmail: 'concierge@desertmirage.ae',
  foundedYear: '2024',
  fleet: 'Custom Bespoke Range Rover Autobiography & Land Cruiser 300 Heritage 4x4s'
};

export const EXPEDITIONS: Expedition[] = [
  {
    id: 'dune-ascent',
    tag: 'EXPEDITION 01',
    title: 'DUNE ASCENT',
    subtitle: 'Private High-Performance 4x4 Dune Expedition',
    description: 'An adrenaline-infused private traversal across the iconic sweeping red dunes of Lahbab, piloted by championship desert master drivers in modified luxury off-roaders.',
    duration: '5.5 Hours',
    capacity: 'Up to 4 Guests / Vehicle',
    departureTime: '15:30 Daily',
    experienceLevel: 'Thrilling Adventure',
    basePriceAED: 1850,
    privatePriceAED: 3400,
    availability: 'AVAILABLE',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Bespoke Modified V8 Off-Road Vehicle with Active Suspension',
      'Professional Licensed Desert Master Navigator',
      'High-Ridge Dune Bashing & Sandboarding Experience',
      'Chilled Camel Milk & Cold-Pressed Date Refreshments on Sunset Crest',
      'Chilled Towels, Artisan Water & VIP Doorstep Chauffeur Pickup'
    ],
    highlights: [
      { label: 'Dune Incline', value: 'Up to 48° Ridge' },
      { label: 'Duration', value: '3.5h Active Sand' },
      { label: 'Vehicle', value: 'V8 Supercharged 4x4' }
    ]
  },
  {
    id: 'golden-hour',
    tag: 'EXPEDITION 02',
    title: 'GOLDEN HOUR',
    subtitle: 'Sunset Desert Photography & Twilight Horizon Journey',
    description: 'A serene visual expedition timed to capture the magical transformation of the Arabian sands as the sun dips beneath the crimson horizon, concluding with private falconry demonstration.',
    duration: '6.0 Hours',
    capacity: 'Up to 4 Guests',
    departureTime: '16:00 Daily',
    experienceLevel: 'Relaxed Luxury',
    basePriceAED: 2200,
    privatePriceAED: 4100,
    availability: 'LIMITED',
    image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Dedicated Professional Desert Landscape & Portrait Photographer',
      'Private Royal Falconry Flight Demonstration with Master Falconer',
      'Sunset Champagne & Premium Sparkling Date Juice Pavilion',
      'Handcrafted Wool Bedouin Carpets & Low Velvet Majlis Seating',
      'Complimentary 4K Edited Photo Album Delivered within 24 Hours'
    ],
    highlights: [
      { label: 'Sunset Slot', value: '18:15 - 19:00' },
      { label: 'Falconry', value: 'Gyrfalcon Flight' },
      { label: 'Media', value: '4K High-Res Gallery' }
    ]
  },
  {
    id: 'nomad-night',
    tag: 'EXPEDITION 03',
    title: 'NOMAD NIGHT',
    subtitle: 'Private Overnight Desert Sanctuary & Astronomy Retreat',
    description: 'Immerse yourself in total wilderness stillness. Sleep under a canopy of 100,000 stars in custom handcrafted canvas pavilions with temperature-controlled silk bedding and ensuite open-air showers.',
    duration: '18.0 Hours (Overnight)',
    capacity: '2 to 6 Guests',
    departureTime: '16:30 Check-in',
    experienceLevel: 'Ultra-Exclusive',
    basePriceAED: 4800,
    privatePriceAED: 8900,
    availability: 'PRIVATE ONLY',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Private Luxury Bedouin Pavilion with 800-Thread Count Egyptian Cotton',
      'Ensuite Outdoor Rain Shower & Diptyque Paris Amenities',
      'Night-Vision Dune Safari Tracking Arabian Oryx & Gazelles',
      'Deep Sky Astronomical Telescope Session with Resident Astronomer',
      'Gourmet Sunrise Breakfast with Freshly Baked Organic Breads'
    ],
    highlights: [
      { label: 'Stays', value: 'Private 1-of-4 Tent' },
      { label: 'Acoustics', value: 'Zero Light/Noise Pollution' },
      { label: 'Breakfast', value: 'Chef Table Sunrise' }
    ]
  },
  {
    id: 'royal-oasis',
    tag: 'EXPEDITION 04',
    title: 'ROYAL OASIS',
    subtitle: 'Ultra-Luxury Private Conservation Safari & Helicopter Entry',
    description: 'The pinnacle of private desert hospitality. Arrive via private helicopter landing directly on our secluded desert helipad, followed by vintage Land Rover wildlife tracking and 7-course private chef gastronomy.',
    duration: '8.0 Hours',
    capacity: '2 to 8 Guests',
    departureTime: 'Bespoke Timing',
    experienceLevel: 'Ultra-Exclusive',
    basePriceAED: 9500,
    privatePriceAED: 16500,
    availability: 'LIMITED',
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Optional Private Helicopter Transfer from Dubai Police Academy / DWC',
      'Restored Museum-Grade 1950s Vintage Land Rover Wildlife Patrol',
      'Exclusive Access to Protected Dubai Desert Conservation Reserve Core',
      '7-Course Gourmet Tasting Menu by Michelin-Starred Resident Chef',
      'Personal 24/7 Desert Butler & Dedicated Safari Concierge'
    ],
    highlights: [
      { label: 'Helipad Access', value: 'Direct Landing' },
      { label: 'Dining', value: '7-Course Tasting' },
      { label: 'Privacy', value: '100% Reserved Dunes' }
    ]
  },
  {
    id: 'arabian-table',
    tag: 'EXPEDITION 05',
    title: 'ARABIAN TABLE',
    subtitle: 'Private Sand Dune Gastronomy & Firepit Feast',
    description: 'A multi-sensory culinary voyage served on an isolated natural dune amphitheater illuminated by 200 flickering lanterns, accompanied by live Oud melodies and embers of aromatic Oud wood.',
    duration: '5.0 Hours',
    capacity: '2 to 14 Guests',
    departureTime: '18:00 Daily',
    experienceLevel: 'Culinary Focus',
    basePriceAED: 2800,
    privatePriceAED: 5200,
    availability: 'AVAILABLE',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Private Custom-Built Sunken Majlis Dune Lounge with Wool Throws',
      'Live Charcoal Grills: Australian Wagyu Ribeye & Gulf Tiger Prawns',
      'Traditional Slow-Cooked Lamb Ouzi Prepared in Underground Sand Oven',
      'Live Master Oud & Nay Player Creating Atmospheric Arabian Melodies',
      'Artisan Shisha Lounge with Exotic Tobacco Blends & Herbal Teas'
    ],
    highlights: [
      { label: 'Cuisine', value: 'Modern Emirati & Levant' },
      { label: 'Lighting', value: '200 Ambient Lanterns' },
      { label: 'Ambience', value: 'Live Classical Oud' }
    ]
  },
  {
    id: 'desert-flyover',
    tag: 'EXPEDITION 06',
    title: 'DESERT FLYOVER',
    subtitle: 'Sunrise Hot Air Balloon & Paramotor Aerial Safari',
    description: 'Soar 4,000 feet above the rippling sand sea at dawn while watching the sunrise paint the dunes in liquid amber, followed by an in-flight falcon release and champagne landing toast.',
    duration: '4.5 Hours',
    capacity: '2 to 10 Guests',
    departureTime: '04:45 Daily (Sunrise)',
    experienceLevel: 'Thrilling Adventure',
    basePriceAED: 3100,
    privatePriceAED: 6800,
    availability: 'FILLING FAST',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    features: [
      'First-Class Hot Air Balloon Basket with Padded Suede Railings',
      'World-Exclusive High-Altitude Falcon Flight from the Balloon Basket',
      'Flight Certificate Signed by Chief Pilot & Master Falconer',
      'Post-Flight Gourmet Breakfast Feast with Smoked Salmon & Truffle Eggs',
      'GoPro 360° Aerial Video of the Full Ascent Included'
    ],
    highlights: [
      { label: 'Altitude', value: '4,000 ft Above Dunes' },
      { label: 'Time', value: 'Dawn Sunrise Flight' },
      { label: 'Special', value: 'In-Flight Falconry' }
    ]
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    time: '17:30',
    title: 'PRIVATE ROLLS-ROYCE / RANGE ROVER DEPARTURE',
    location: 'Your Dubai Residence or Hotel',
    description: 'Your private expedition chauffeur arrives in a blackened Range Rover Autobiography equipped with cold towels, mineral water, and curated Arabian soundscapes.',
    atmosphere: 'Urban Skyline Transition',
    icon: 'Car'
  },
  {
    time: '18:25',
    title: 'DESERT SANCTUARY GATE ARRIVAL',
    location: 'Dubai Desert Conservation Reserve Gate',
    description: 'Leave the tarmac behind. Tire pressures are adjusted while guests enjoy chilled cardamom iced tea and warm moist towels scented with Taif rose.',
    atmosphere: 'Threshold of Wilderness',
    icon: 'Compass'
  },
  {
    time: '18:50',
    title: 'HIGH-CREST DUNE NAVIGATION',
    location: 'Lahbab Red Sand Waves',
    description: 'Conquer sweeping ridge crests as our master driver choreographs a thrilling yet silky-smooth ascent up 300-foot dunes.',
    atmosphere: 'Adrenaline & Golden Light',
    icon: 'Wind'
  },
  {
    time: '19:30',
    title: 'SUNSET CREST CHAMPAGNE & FALCONRY',
    location: 'Mirage Ridge 42',
    description: 'Step out onto untouched virgin sands. Watch an elite Gyrfalcon swoop across the amber sky as the sun melts behind distant desert mountains.',
    atmosphere: 'Liquid Amber Twilight',
    icon: 'Sun'
  },
  {
    time: '20:15',
    title: 'LANTERN-LIT OASIS CAMP ARRIVAL',
    location: 'The Nomad Sanctuary',
    description: 'Walk down candlelit sand pathways into an isolated private majlis surrounded by roaring olive-wood firepits and plush Persian carpets.',
    atmosphere: 'Atmospheric Camp Sanctuary',
    icon: 'Flame'
  },
  {
    time: '21:00',
    title: 'PRIVATE CHEF SEVEN-COURSE FEAST',
    location: 'The Dune Pavilion Table',
    description: 'Savor underground pit-roasted lamb Ouzi, charcoal-grilled gulf lobster, and saffron cardamom crème brûlée under an open sky.',
    atmosphere: 'Culinary Masterclass',
    icon: 'Utensils'
  },
  {
    time: '22:30',
    title: 'CELESTIAL ASTRONOMY & STARGAZING',
    location: 'The Celestial Deck',
    description: 'All camp lights are extinguished. Peer through our Meade 14-inch Schmidt-Cassegrain telescope to inspect the rings of Saturn and the Andromeda galaxy.',
    atmosphere: 'Deep Cosmic Stillness',
    icon: 'Moon'
  },
  {
    time: '23:45',
    title: 'TRANQUIL RETURN CHAUFFEUR',
    location: 'En Route to Downtown Dubai / Palm Jumeirah',
    description: 'Relax in reclining leather seats as the vehicle glides back toward the glittering city lights, arriving seamlessly at your doorstep.',
    atmosphere: 'Silent Nocturnal Return',
    icon: 'ShieldCheck'
  }
];

export const DESERT_MENU: MenuItem[] = [
  {
    category: 'Starter',
    title: 'Truffle-Infused Smoked Mutabal & Heritage Hummus',
    arabicName: 'متبل مدخن بالكمأة وحمص بالصنوبر',
    description: 'Charred eggplants with black winter truffle oil, pomegranate molasses, micro-mint, and freshly baked Zaatar flatbreads.',
    dietary: ['Vegetarian', 'Gluten-Free Option']
  },
  {
    category: 'Starter',
    title: 'Gulf Prawn & Citrus Fattoush',
    arabicName: 'فتوش بالجمبري والرمان',
    description: 'Crispy sumac pita crisps, heirloom cucumbers, blood orange pearls, and wood-grilled jumbo prawns from the Arabian Gulf.',
    dietary: ['Seafood', 'Dairy-Free']
  },
  {
    category: 'Main Course',
    title: '14-Hour Underground Pit-Roasted Lamb Ouzi',
    arabicName: 'قوزي لحم غنم مطهو تحت الرمال',
    description: 'Locally spiced Australian lamb shoulder slow-roasted beneath hot desert embers for 14 hours, served over aromatic saffron and pine-nut Bukhari rice.',
    dietary: ['Signature Dish', 'Halal Certified', 'Nut-Free on Request']
  },
  {
    category: 'Main Course',
    title: 'Wood-Fired Wagyu Ribeye & Charred Desert Leeks',
    arabicName: 'ستيك واغيو مشوي على الحطب',
    description: 'MB8+ Australian Wagyu beef glazed with date syrup reduction, smoked sea salt, and baby root vegetables.',
    dietary: ['High Protein', 'Gluten-Free']
  },
  {
    category: 'Dessert',
    title: 'Saffron & Cardamom Milk Cake with Camel Milk Ice Cream',
    arabicName: 'كيك الزعفران مع آيس كريم حليب الإبل',
    description: 'Delicate sponge soaked in triple saffron milk, topped with artisanal camel milk pistachio gelato and edible 24-karat gold leaf.',
    dietary: ['Vegetarian', 'Gold Leaf Garnish']
  },
  {
    category: 'Arabian Coffee & Tea',
    title: 'Traditional Royal Gahwa & Fresh Medjool Dates',
    arabicName: 'قهوة عربية أصيلة مع تمور المجهول',
    description: 'Freshly roasted green coffee beans infused with organic cardamom, saffron, and cloves, paired with stuffed Medjool dates and candied ginger.',
    dietary: ['Organic', 'Sugar-Free']
  }
];

export const DESERT_REGIONS: DesertRegion[] = [
  {
    id: 'ddcr',
    name: 'Dubai Desert Conservation Reserve (DDCR)',
    arabicName: 'محمية دبي الصحراوية',
    terrainType: 'Pristine Protected Dunes & Ghaf Forests',
    distanceFromDubai: '45 mins from Downtown Dubai',
    highlight: 'Home to 800+ Arabian Oryx & Gazelles',
    description: 'The UAE’s premier protected national park, spanning 225 square kilometers of untamed flora, golden rolling hills, and strictly limited vehicle access.'
  },
  {
    id: 'lahbab',
    name: 'Lahbab High Crimson Dunes (Big Red)',
    arabicName: 'كثبان لهباب الحمراء',
    terrainType: 'High-Incline Deep Red Dunes (Up to 300ft)',
    distanceFromDubai: '40 mins from Downtown Dubai',
    highlight: 'World-Renowned 4x4 Off-Road Playground',
    description: 'Famous for its rich terracotta-red sands with deep, razor-sharp slipfaces that offer the most exhilarating dune driving and sandboarding in the GCC.'
  },
  {
    id: 'marmoom',
    name: 'Al Marmoom Desert Conservation Reserve',
    arabicName: 'محمية المرموم الصحراوية',
    terrainType: 'Desert Lakes & Wetland Sanctuary',
    distanceFromDubai: '35 mins from Downtown Dubai',
    highlight: 'Stargazing Dark Sky & Falcon Sanctuary',
    description: 'The largest unfenced natural reserve in the UAE, famous for tranquil man-made desert lakes, migratory bird watching, and unpolluted night skies.'
  },
  {
    id: 'liwa',
    name: 'The Empty Quarter (Rub Al Khali / Liwa)',
    arabicName: 'صحراء الربع الخالي — ليوا',
    terrainType: 'Towering Mega-Dunes (Up to 1,000ft)',
    distanceFromDubai: '3.5 hrs / Helicopter 45 mins',
    highlight: 'The World’s Largest Continuous Sand Sea',
    description: 'The ultimate desert frontier featuring the legendary Moreeb Dune, surreal silence, and cinematic landscapes stretching beyond the horizon into Saudi Arabia.'
  }
];

export const DESERT_STORIES: DesertStory[] = [
  {
    id: 'story-dune-driving',
    title: 'The Art of Reading Sand: Secrets of the Desert Master Navigator',
    readTime: '5 Min Read',
    category: 'Mastery & Technique',
    excerpt: 'How our championship drivers read the micro-shadows on dune crests to conquer 300-foot slipfaces with effortless mathematical precision.',
    author: 'Captain Rashid Al-Nuaimi',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'story-night-sky',
    title: 'Nights Beneath the Arabian Sky: Navigating by the Bedouin Stars',
    readTime: '6 Min Read',
    category: 'Astronomy & Heritage',
    excerpt: 'Before GPS and compasses, ancient Arabian nomads mapped the trade routes of the Middle East using the alignment of Polaris and the Pleiades.',
    author: 'Dr. Soraya Malek (Astronomer)',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'story-bedouin-table',
    title: 'The Modern Bedouin Table: Reinterpreting 1,000 Years of Sand Cooking',
    readTime: '4 Min Read',
    category: 'Culinary Craft',
    excerpt: 'Why cooking beneath subterranean desert embers creates a depth of caramelization and tenderness that no modern commercial oven can replicate.',
    author: 'Chef Julien Laurent',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'story-desert-silence',
    title: 'Why Desert Silence Feels Physically Different',
    readTime: '4 Min Read',
    category: 'Mindfulness & Nature',
    excerpt: 'Acoustic studies show fine silica grains absorb 98% of ambient sound wave reflections, creating an acoustic sensory reset found nowhere else on earth.',
    author: 'Elena Vance (Travel Editor)',
    image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=800&q=80'
  }
];

export const ADDON_OPTIONS: AddonOption[] = [
  {
    id: 'private-rangerover',
    name: 'Upgrade to Private Range Rover Autobiography',
    priceAED: 1600,
    description: 'Guaranteed exclusive vehicle for up to 4 guests with personalized refreshment minibar.',
    category: 'Vehicle'
  },
  {
    id: 'falconry-exclusive',
    name: 'Private Royal Falconry & Golden Eagle Session',
    priceAED: 1200,
    description: 'Personal 30-minute private interaction and glove-flight experience with champion falcons.',
    category: 'Activity'
  },
  {
    id: 'chef-table-ouzi',
    name: 'Private Chef Lamb Ouzi Underground Pit Upgrade',
    priceAED: 1800,
    description: 'Whole organic slow-cooked lamb prepared exclusively for your dining party with live carving.',
    category: 'Dining'
  },
  {
    id: 'telescope-private',
    name: 'Dedicated 14-Inch Telescope & Private Astronomer',
    priceAED: 950,
    description: 'Dedicated 60-minute deep-space astrophotography session with 4K planetary captures.',
    category: 'Activity'
  },
  {
    id: 'helicopter-transit',
    name: 'Helicopter Transfer (Dubai Helipad to Mirage Dunes)',
    priceAED: 6800,
    description: '18-minute scenic aerial flight landing directly at our private desert helipad.',
    category: 'Vehicle'
  },
  {
    id: 'private-tent-suite',
    name: 'Day-Use Luxury Bedouin Majlis Tent Suite',
    priceAED: 1400,
    description: 'Air-conditioned private tent suite with private lounge, ensuite shower, and daybed.',
    category: 'Hospitality'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't-1',
    quote: "Dubai disappeared behind us in 40 minutes. By sunset, sitting on a private dune crest with a chilled glass and complete silence, it felt as though we had entered an entirely separate universe of luxury.",
    author: "Lord Alexander Cavendish",
    origin: "London, United Kingdom",
    experience: "Nomad Night Overnight Expedition",
    date: "February 2026"
  },
  {
    id: 't-2',
    quote: "I have booked desert safaris across Morocco, Oman, and Qatar. Nothing matches the precision, Michelin-quality pit gastronomy, and bespoke Range Rover craftsmanship of Desert Mirage.",
    author: "Marcella & Henri Dubois",
    origin: "Geneva, Switzerland",
    experience: "Royal Oasis VIP Safari",
    date: "January 2026"
  },
  {
    id: 't-3',
    quote: "We hosted 16 international tech executives for a private sunset retreat. The transition from high-adrenaline dune navigation to a lantern-lit acoustic Oud dinner was executed with flawless five-star grace.",
    author: "Vikram Malhotra",
    origin: "Singapore & Dubai (DIFC)",
    experience: "Arabian Table Corporate Retreat",
    date: "December 2025"
  }
];

export const SAFETY_STANDARDS = [
  {
    title: 'Certified Desert Master Navigators',
    subtitle: 'RTA & DTCM Desert Licensed',
    description: 'Every pilot possesses minimum 8+ years of high-incline desert navigation, advanced first-aid certifications, and defensive sand driving training.'
  },
  {
    title: 'Bespoke Desert Fleet Engineering',
    subtitle: 'Reinforced Roll Cages & Telemetry',
    description: 'All vehicles feature reinforced chassis, Fox 2.5 internal bypass active suspension, dual battery systems, and sub-zero cabin climate control.'
  },
  {
    title: 'Satellite GPS & Emergency Tracking',
    subtitle: 'Iridium Satellite Connected',
    description: 'Live telemetry stream directly to our Dubai 24/7 Operations Hub with satellite beacon locator and immediate paramedic response standby.'
  },
  {
    title: 'Environmental Stewardship',
    subtitle: 'Zero Single-Use Plastic Policy',
    description: '100% of carbon emissions offset via local Ghaf tree planting initiatives, adhering to strict Dubai Desert Conservation Reserve regulations.'
  }
];
