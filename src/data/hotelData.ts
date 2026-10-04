export interface RoomType {
  id: string;
  code: string;
  name: string;
  tagline: string;
  sizeSqM: number;
  bedType: string;
  maxGuests: number;
  view: string;
  pricePerNightAED: number;
  pricePerNightEuro?: number;
  amenities: string[];
  description: string;
  image: string;
  galleryImages: string[];
  features?: string[];
  floor?: string;
  butlerIncluded?: boolean;
}

export interface ChefDish {
  id: string;
  name: string;
  category: string;
  description: string;
  ingredients: string;
  winePairing: string;
  chefNote: string;
  image: string;
  priceAED: number;
}

export interface ExperienceItem {
  id: string;
  code: string;
  title: string;
  tagline: string;
  duration: string;
  priceAED: number;
  priceEuro?: number;
  groupSize: string;
  departureTime: string;
  description: string;
  included: string[];
  image: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'ROOMS' | 'DINING' | 'SPA' | 'ARCHITECTURE' | 'EXPERIENCES';
  url: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  guestName: string;
  location: string;
  stayType: string;
  rating: number;
  date: string;
  avatar?: string;
}

export const VELORA_BRAND = {
  name: 'VELORA PALACE & OASIS RESORT',
  tagline: 'Stay Somewhere Extraordinary.',
  subheading: 'An ultra-exclusive architectural sanctuary and boutique beachfront palace perched on Jumeirah Bay Island and Palm Jumeirah, Dubai.',
  location: 'Jumeirah Bay Island & Palm Jumeirah, Dubai, UAE',
  coordinates: '25.2048° N, 55.2708° E',
  establishedYear: '2026',
  phone: '+971 4 800 83567',
  whatsapp: 'https://wa.me/971508924110?text=Hello%20Velora%20Palace,%20I%20would%20like%20to%20reserve%20a%20private%20luxury%20suite.',
  email: 'concierge@velorapalace.ae',
  address: 'Velora Private Island Crescent, Jumeirah Bay Island, Dubai, UAE',
  stats: {
    totalRooms: 42,
    suitesCount: 18,
    privateVillasCount: 8,
    restaurantsCount: 3,
    michelinRating: '2 Michelin-Starred Signature Dining Rooms',
    butlerService: '24/7 Dedicated Royal Butler',
    beachfrontLength: '850m Private Coral Beach'
  }
};

export const HOTEL_ROOMS: RoomType[] = [
  {
    id: 'ocean-terrace-suite',
    code: '01',
    name: 'Ocean Terrace Executive Suite',
    tagline: 'Panoramic Arabian Gulf horizon vistas with private infinity sun deck.',
    sizeSqM: 68,
    bedType: 'Custom Handcrafted Super King Featherbed',
    maxGuests: 2,
    view: 'Unobstructed Arabian Gulf & Dubai Skyline Horizon',
    pricePerNightAED: 2450,
    pricePerNightEuro: 610,
    floor: 'Floor 3 - 5',
    butlerIncluded: true,
    amenities: [
      'Private 25m² marble terrace with sunset daybeds',
      'Italian Calacatta marble bathroom with freestanding soaking tub',
      'Diptyque Paris 24K gold-leaf bath & spa amenities',
      'Artisan mini bar stocked with organic Emirati dates & champagne',
      'Bang & Olufsen bespoke acoustic soundstage',
      'High-speed dedicated Wi-Fi 7 connectivity',
      '24/7 Royal butler unpacking & pressing service'
    ],
    features: ['Sunset view', 'Private terrace', 'Freestanding tub', '24/7 Butler'],
    description: 'Designed as a serene coastal sanctuary, the Ocean Terrace Suite features floor-to-ceiling panoramic glass walls, honed travertine limestone, and private teak daybeds suspended over the azure sea.',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'jumeirah-bay-penthouse',
    code: '02',
    name: 'Jumeirah Bay Royal Duplex Penthouse',
    tagline: 'Multi-level palatial duplex featuring private heated rooftop plunge pool.',
    sizeSqM: 145,
    bedType: 'Dual Master Super King Suites',
    maxGuests: 4,
    view: '360° Dubai Marina, Palm Jumeirah & Burj Al Arab',
    pricePerNightAED: 5800,
    pricePerNightEuro: 1450,
    floor: 'Penthouse Floors 7 & 8',
    butlerIncluded: true,
    amenities: [
      'Private heated rooftop freshwater plunge pool & cabana',
      'Double-height ceiling grand salon with Steinway piano',
      'Private chef prep kitchen & 8-seat formal dining majlis',
      'Walk-in dressing rooms with bespoke cedarwood cabinetry',
      'Dyson Supersonic styling stations & Diptyque VIP hampers',
      'Complimentary airport Rolls-Royce Ghost transfer included',
      'Priority superyacht berth at Velora Private Marina'
    ],
    features: ['Private rooftop pool', 'Duplex layout', 'Rolls-Royce transfer', 'Private marina berth'],
    description: 'The pinnacle of architectural opulence. Spanning two sun-drenched levels, this penthouse boasts double-height glass atriums, a private rooftop pool overlooking the Burj Al Arab, and 24/7 dedicated butler service.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'palm-pool-villa',
    code: '03',
    name: 'Palace Private Beachfront Pool Villa',
    tagline: 'Secluded standalone villa with private infinity pool and direct beach gate.',
    sizeSqM: 220,
    bedType: '3 En-Suite Super King Royal Bedrooms',
    maxGuests: 6,
    view: 'Direct Coral Beachfront & Atlantis The Royal',
    pricePerNightAED: 9200,
    pricePerNightEuro: 2300,
    floor: 'Ground Beachfront',
    butlerIncluded: true,
    amenities: [
      'Private 12m temperature-controlled infinity pool & Jacuzzi',
      'Direct private footbridge to secluded white coral beach',
      'Private outdoor Teppanyaki grill & dining pavilion',
      'En-suite marble bathrooms with rain showers and outdoor stone tubs',
      'Dedicated executive chef for bespoke in-villa dining',
      '24/7 Private security detail & discrete VIP courtyard entry',
      'Daily 90-minute complimentary in-villa Hammam spa treatment'
    ],
    features: ['12m private pool', 'Direct beach access', 'Private chef', 'Daily Hammam included'],
    description: 'An oasis of discretion and barefoot luxury. Nestled directly on the pristine sands of Palm Jumeirah, this private residence features lush tropical gardens, a private infinity pool, and personal butler team.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'desert-sanctuary-suite',
    code: '04',
    name: 'Al Maha Heritage Desert Oasis Suite',
    tagline: 'Intimate sand dune sanctuary surrounded by native Arabian gazelles.',
    sizeSqM: 85,
    bedType: 'Custom Hand-Carved Royal Bed',
    maxGuests: 2,
    view: 'Endless Crimson Sand Dunes & Dubai Desert Conservation',
    pricePerNightAED: 3600,
    pricePerNightEuro: 900,
    floor: 'Desert Reserve Pavilion',
    butlerIncluded: true,
    amenities: [
      'Private infinity plunge pool overlooking natural desert reserve',
      'Handcrafted Bedouin antique majlis and brass lantern decor',
      'Custom telescope for private starlight astrology viewings',
      'Bespoke falconry demonstration on your private wooden deck',
      'Organic camel milk & saffron luxury bath amenities',
      'Sunset vintage champagne camel trek included daily'
    ],
    features: ['Desert reserve view', 'Infinity plunge pool', 'Private telescope', 'Sunset camel trek'],
    description: 'Perched amid the rolling dunes of the Dubai Desert Reserve, this suite merges traditional Arabian royal majlis architecture with five-star contemporary elegance and complete natural solitude.',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop'
    ]
  }
];

export const CHEF_SIGNATURE_DISHES: ChefDish[] = [
  {
    id: 'dish-1',
    name: 'French Black Truffle & A5 Miyazaki Wagyu Carpaccio',
    category: 'Haute Gastronomy',
    description: 'Thinly shaved Japanese A5 Wagyu with 48-month Parmigiano Reggiano crisp, Périgord black truffle emulsion, and 24K edible gold leaf flakes.',
    ingredients: 'Miyazaki A5 Wagyu, Périgord Winter Truffle, 24K Gold Leaf, Aged Balsamico di Modena',
    winePairing: 'Château Margaux Premier Grand Cru Classé 2015',
    chefNote: 'Our flagship signature dish celebrating the balance between rich marbling and earthy forest aromas.',
    priceAED: 480,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'dish-2',
    name: 'Alaskan King Crab & Royal Oscietra Caviar',
    category: 'Seafood Masterpiece',
    description: 'Charred Alaskan king crab leg poached in cultured Breton butter, topped with 30g Royal Imperial Oscietra Caviar and citrus yuzu foam.',
    ingredients: 'Alaskan King Crab, Royal Oscietra Caviar, Breton Butter, Yuzu Kosho',
    winePairing: 'Dom Pérignon Vintage Champagne 2013',
    chefNote: 'Delicate ocean sweetness elevated with saline caviar popping pearls.',
    priceAED: 620,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'dish-3',
    name: 'Slow-Braised Royal Emirati Milk-Fed Lamb Shank',
    category: 'Heritage Emirati Gourmet',
    description: '14-hour slow braised in aromatic Bezare spices, saffron fumet, served over aged smoked basmati rice with caramelised barberries and pine nuts.',
    ingredients: 'Local Milk-Fed Lamb, Bezare Spices, Iranian Saffron, Aged Basmati Rice',
    winePairing: 'Super Tuscan Sassicaia Tenuta San Guido 2018',
    chefNote: 'A contemporary tribute to ancient royal Emirati banquets in Dubai and Abu Dhabi.',
    priceAED: 380,
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop'
  }
];

export const CHEF_DISHES = CHEF_SIGNATURE_DISHES;

export const HOTEL_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'yacht-sunset',
    code: '01',
    title: 'Private 85ft Superyacht Sunset Cruise',
    tagline: 'Champagne & oysters cruising past Palm Jumeirah & Burj Al Arab.',
    duration: '4 Hours',
    priceAED: 4500,
    priceEuro: 1125,
    groupSize: 'Up to 8 Guests',
    departureTime: '16:00 Daily from Velora Marina',
    description: 'Board our private 85ft Majesty Superyacht with personal captain, hostess, and private sushi chef. Glide past Dubai Harbour and anchor at the foot of Atlantis The Palm for sunset cocktails.',
    included: [
      'Private 85ft superyacht with 3-person professional crew',
      'Chilled vintage Dom Pérignon champagne & beluga caviar service',
      'Live omakase sushi & sashimi preparation on deck',
      'Seabob water scooters & swimming stop in calm turquoise waters'
    ],
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'desert-falconry',
    code: '02',
    title: 'Royal Falconry & Desert Stargazing Safari',
    tagline: 'Private heritage expedition into the Dubai Desert Conservation Reserve.',
    duration: '5 Hours',
    priceAED: 2200,
    priceEuro: 550,
    groupSize: 'Up to 4 Guests',
    departureTime: '15:30 Daily',
    description: 'Travel in vintage 1950s Land Rovers across private royal dunes. Experience interactive hunting falcon demonstrations and enjoy a 5-course lantern-lit majlis dinner beneath the desert stars.',
    included: [
      'Private chauffeured vintage Land Rover or Range Rover SV',
      'Exclusive falconry flight demonstration with royal master trainer',
      '5-course torchlit desert majlis banquet prepared by private chef',
      'Professional astronomy telescope session with dark-sky astronomer'
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'helicopter-sky',
    code: '03',
    title: 'Atlantis to Burj Khalifa Skyline Heli-Tour',
    tagline: 'VIP panoramic flight over World Islands, Downtown & Dubai Creek.',
    duration: '25 Minutes',
    priceAED: 1850,
    priceEuro: 460,
    groupSize: 'Up to 5 Guests',
    departureTime: '11:00 & 15:00 Daily',
    description: 'Take off from the private Velora helipad and soar over Dubai’s architectural wonders including the Palm Jumeirah, The World Islands, Dubai Frame, and the soaring spire of Burj Khalifa.',
    included: [
      'VIP lounge check-in with artisan refreshments',
      'Guaranteed window seating with noise-canceling Bose headsets',
      'High-definition in-flight 4K video recording provided on USB',
      'Private hotel transfer in Rolls-Royce Ghost'
    ],
    image: 'https://images.unsplash.com/photo-1519074069444-1ba4eff56024?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'gold-hammam-spa',
    code: '04',
    title: '24K Gold Luxury Royal Hammam & Caviar Facial',
    tagline: 'Sublime Moroccan marble spa ritual with 24-karat gold leaf wrap.',
    duration: '120 Minutes',
    priceAED: 1450,
    priceEuro: 360,
    groupSize: 'Individual or Couples',
    departureTime: '10:00 - 20:00 Daily',
    description: 'Immerse in heated volcanic eucalyptus steam, black olive soap exfoliation with Kessa glove, golden rhassoul clay mask, and pure 24K gold foil facial regeneration.',
    included: [
      'Private marble steam dome with aromatic eucalyptus herbal vapors',
      'Deep kessa scrub & 24K gold nourishing body wrap',
      'Valmont Switzerland luxury caviar lifting facial treatment',
      'Complimentary herbal tisane & Moroccan mint tea in relaxation lounge'
    ],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'gal-1', title: 'Royal Pool Villa Infinity Pool', category: 'ROOMS', url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop' },
  { id: 'gal-2', title: 'Duplex Penthouse Living Room', category: 'ROOMS', url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop' },
  { id: 'gal-3', title: 'Michelin Dining Terrace', category: 'DINING', url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop' },
  { id: 'gal-4', title: '24K Gold Royal Hammam Suite', category: 'SPA', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop' },
  { id: 'gal-5', title: 'Private Superyacht Marina Deck', category: 'EXPERIENCES', url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop' },
  { id: 'gal-6', title: 'Sunset Desert Reserve Horizon', category: 'ARCHITECTURE', url: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1200&auto=format&fit=crop' }
];

export const HOTEL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    quote: 'From the Rolls-Royce airport greeting to the private pool villa on Palm Jumeirah, Velora Palace is in a class of its own. Our butler Tariq anticipated every desire before we even asked.',
    guestName: 'H.E. Lord Arthur Pendelton',
    location: 'London, United Kingdom',
    stayType: 'Palace Beachfront Pool Villa (5 Nights)',
    rating: 5,
    date: 'February 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'rev-2',
    quote: 'The Michelin dining was extraordinary—the black truffle A5 Wagyu carpaccio and Dom Pérignon sunset yacht charter made our 10th wedding anniversary unforgettable. 10/10.',
    guestName: 'Princess Elena Von Hohenlohe',
    location: 'Zurich, Switzerland',
    stayType: 'Jumeirah Bay Royal Duplex Penthouse (4 Nights)',
    rating: 5,
    date: 'January 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'rev-3',
    quote: 'The 24K Gold Hammam and private desert stargazing safari were pure magic. True discrete luxury that honors the rich Emirati heritage of Dubai.',
    guestName: 'Mansoor Al-Falasi',
    location: 'Abu Dhabi, UAE',
    stayType: 'Al Maha Heritage Desert Oasis Suite (3 Nights)',
    rating: 5,
    date: 'March 2026',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop'
  }
];

export const GUEST_REVIEWS = HOTEL_REVIEWS;

export const HOTEL_FAQS = [
  {
    question: 'What is included with suite and villa bookings at Velora Palace?',
    answer: 'Every reservation includes 24/7 dedicated royal butler service, daily gourmet breakfast served in-suite or at our beachfront restaurant, complimentary airport transfers in our Rolls-Royce Ghost fleet (from DXB / AUH / DWC), Diptyque Paris bath amenities, and full access to our private coral beach and hydrothermal spa circuits.',
    q: 'What is included with suite and villa bookings at Velora Palace?',
    a: 'Every reservation includes 24/7 dedicated royal butler service, daily gourmet breakfast served in-suite or at our beachfront restaurant, complimentary airport transfers in our Rolls-Royce Ghost fleet (from DXB / AUH / DWC), Diptyque Paris bath amenities, and full access to our private coral beach and hydrothermal spa circuits.'
  },
  {
    question: 'Can we book private superyacht charters and helicopter transfers directly?',
    answer: 'Yes. Our private marina accommodates vessels up to 120ft, and we operate an on-site private helipad with direct transfers to Atlantis The Palm, Burj Al Arab, and Dubai International Airport (DXB).',
    q: 'Can we book private superyacht charters and helicopter transfers directly?',
    a: 'Yes. Our private marina accommodates vessels up to 120ft, and we operate an on-site private helipad with direct transfers to Atlantis The Palm, Burj Al Arab, and Dubai International Airport (DXB).'
  },
  {
    question: 'What are the check-in and check-out times?',
    answer: 'Standard check-in is at 15:00 and check-out is at 12:00. For our Penthouse and Villa guests, we provide flexible VIP check-in/out based on your private flight arrival schedule at zero extra fee.',
    q: 'What are the check-in and check-out times?',
    a: 'Standard check-in is at 15:00 and check-out is at 12:00. For our Penthouse and Villa guests, we provide flexible VIP check-in/out based on your private flight arrival schedule at zero extra fee.'
  },
  {
    question: 'Are all dietary requirements catered for in your dining venues?',
    answer: 'Our Michelin-starred executive chefs craft tailored menus for Halal, vegetarian, vegan, gluten-free, and kosher requirements with advance notice.',
    q: 'Are all dietary requirements catered for in your dining venues?',
    a: 'Our Michelin-starred executive chefs craft tailored menus for Halal, vegetarian, vegan, gluten-free, and kosher requirements with advance notice.'
  }
];

export const HOTEL_RECOGNITION = [
  { publication: 'Condé Nast Traveler Gold List', award: 'Best Ultra-Luxury Palace Resort Middle East (2026)' },
  { publication: 'Forbes Travel Guide', award: '5-Star Hospitality & Royal Butler Rating' },
  { publication: 'Michelin Guide Dubai', award: '2 Michelin Stars — Restaurant ORA' },
  { publication: 'World Spa Awards', award: 'Best 24K Gold Hammam & Hydrotherapy Suite (2026)' }
];


