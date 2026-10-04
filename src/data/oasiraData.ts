export interface OasiraResort {
  id: string;
  name: string;
  emirate: 'Dubai' | 'Abu Dhabi' | 'Ras Al Khaimah' | 'Fujairah' | 'Sharjah' | 'Al Ain' | 'Ajman' | 'Umm Al Quwain';
  locationDetail: string;
  type: 'Beach' | 'Desert' | 'Mountain' | 'Waterfront' | 'Wellness';
  rating: number;
  reviewsCount: number;
  startingPriceAED: number;
  image: string;
  gallery: string[];
  tagline: string;
  description: string;
  amenities: string[];
  isFeatured?: boolean;
}

export interface OasiraRoom {
  id: string;
  name: string;
  sizeSqM: number;
  maxGuests: number;
  bedType: string;
  pricePerNightAED: number;
  view: string;
  image: string;
  amenities: string[];
}

export interface OasiraStaycationOffer {
  id: string;
  title: string;
  nights: number;
  emirate: string;
  packagePriceAED: number;
  includes: string[];
  image: string;
  badge: string;
}

export interface OasiraExperience {
  id: string;
  title: string;
  emirate: string;
  duration: string;
  priceAED: number;
  priceType: 'per guest' | 'per group';
  image: string;
  category: string;
}

export const OASIRA_BRAND = {
  name: 'OASIRA',
  tagline: 'Escape Without Leaving the UAE.',
  subheading: 'Curated luxury resorts, beachfront staycations, desert retreats, and private island escapes across the 7 Emirates.',
  whatsapp: 'https://wa.me/971509988440?text=Hello%20OASIRA%20Concierge,%20I%20would%20like%20to%20plan%20a%20UAE%20staycation!',
  phone: '+971 4 800 6274',
  email: 'concierge@oasira.ae',
  headquarters: 'DIFC Gate Precinct 4, Level 7, Dubai, UAE'
};

export const OASIRA_RESORTS: OasiraResort[] = [
  {
    id: 'azure-palm',
    name: 'Azure Palm Resort & Beach Club',
    emirate: 'Dubai',
    locationDetail: 'Palm Jumeirah East Crescent, Dubai',
    type: 'Beach',
    rating: 4.9,
    reviewsCount: 2842,
    startingPriceAED: 1250,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop'
    ],
    tagline: 'Private white-sand beach and cliffside ocean pools',
    description: 'Overlooking the Dubai skyline and Persian Gulf, Azure Palm offers 300 meters of secluded private beach, 4 fine dining restaurants, an infinity pool deck, and signature Dior Spa.',
    amenities: ['Private Beach', '4 Restaurants', 'Infinity Pool', 'Dior Spa', 'Kids Club', 'Yacht Dock'],
    isFeatured: true
  },
  {
    id: 'dune-mirage',
    name: 'Dune Mirage Desert Sanctuary',
    emirate: 'Ras Al Khaimah',
    locationDetail: 'Al Wadi Desert Reserve, Ras Al Khaimah',
    type: 'Desert',
    rating: 4.9,
    reviewsCount: 1940,
    startingPriceAED: 890,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop'
    ],
    tagline: 'Private pool villas surrounded by rolling red dunes',
    description: 'An intimate desert sanctuary featuring tented pool villas, falconry experiences, stargazing dinners under Arabian skies, and camel trekking.',
    amenities: ['Private Pool', 'Desert Safari', 'Stargazing Lounge', 'Hydrotherapy Spa', 'Falconry'],
    isFeatured: true
  },
  {
    id: 'pearl-bay',
    name: 'Pearl Bay Luxury Island Resort',
    emirate: 'Abu Dhabi',
    locationDetail: 'Saadiyat Island Cultural District, Abu Dhabi',
    type: 'Beach',
    rating: 4.8,
    reviewsCount: 1520,
    startingPriceAED: 1150,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop'
    ],
    tagline: 'Natural turquoise lagoon and turtle nesting beach',
    description: 'Situated on the pristine natural shores of Saadiyat Island, minutes from the Louvre Abu Dhabi, featuring sea-view villas and organic beach dining.',
    amenities: ['Natural Lagoon', 'Turtle Beach', 'Golf Course Access', 'Spa Sanctuary', 'Valet Yacht Transfer'],
    isFeatured: true
  },
  {
    id: 'cove-fujairah',
    name: 'Cove Fujairah Ocean & Mountain Resort',
    emirate: 'Fujairah',
    locationDetail: 'Al Aqah Beach, Fujairah Coast',
    type: 'Waterfront',
    rating: 4.7,
    reviewsCount: 1180,
    startingPriceAED: 780,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop'
    ],
    tagline: 'Where Hajar Mountains meet the Indian Ocean',
    description: 'Nestled between dramatic mountain peaks and crystal-clear snorkeling waters, offering coral diving, cliffside yoga, and seafood grills.',
    amenities: ['PADI Dive Center', 'Mountain Views', 'Seafood Grill', 'Temperature Pools', 'Kayaking'],
    isFeatured: true
  },
  {
    id: 'royal-sands',
    name: 'Royal Sands Jumeirah Resort',
    emirate: 'Dubai',
    locationDetail: 'Jumeirah Beach Residence, Dubai',
    type: 'Beach',
    rating: 4.9,
    reviewsCount: 3100,
    startingPriceAED: 1480,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop'
    ],
    tagline: 'Palatial luxury with private temperature-controlled pools',
    description: 'An iconic Arabian palace resort on Jumeirah Beach with private butler service, Michelin-star dining, and private beach cabanas.',
    amenities: ['Private Butler', 'Private Pool Cabanas', 'Michelin Dining', 'Adults-Only Pool', 'Helipad Access'],
    isFeatured: true
  },
  {
    id: 'wadi-escape',
    name: 'Wadi Escape Oasis & Heritage Lodge',
    emirate: 'Al Ain',
    locationDetail: 'Jebel Hafeet Foothills, Al Ain Oasis',
    type: 'Mountain',
    rating: 4.6,
    reviewsCount: 840,
    startingPriceAED: 620,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop'
    ],
    tagline: 'Peaceful date-palm groves and mineral springs',
    description: 'A serene mountain oasis nestled under Jebel Hafeet, surrounded by ancient irrigation falaj streams, thermal mineral springs, and date gardens.',
    amenities: ['Thermal Springs', 'Mountain Trails', 'Date Palm Garden', 'Heritage Dining', 'Organic Spa'],
    isFeatured: false
  },
  {
    id: 'lagoona-retreat',
    name: 'Lagoona Mangrove Resort & Spa',
    emirate: 'Umm Al Quwain',
    locationDetail: 'UAQ Islands & Mangroves Reserve',
    type: 'Waterfront',
    rating: 4.6,
    reviewsCount: 620,
    startingPriceAED: 690,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop'
    ],
    tagline: 'Eco-luxury water chalets over flamingo mangroves',
    description: 'Quiet water villas hovering over natural mangrove channels, featuring flamingo birdwatching, paddleboarding, and organic detox dining.',
    amenities: ['Overwater Chalets', 'Mangrove Kayaking', 'Birdwatching Deck', 'Detox Spa', 'Private Pier'],
    isFeatured: false
  },
  {
    id: 'jebel-haven',
    name: 'Jebel Haven Peak Resort',
    emirate: 'Ras Al Khaimah',
    locationDetail: 'Jebel Jais Summit Road, Ras Al Khaimah',
    type: 'Mountain',
    rating: 4.9,
    reviewsCount: 1430,
    startingPriceAED: 980,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop'
    ],
    tagline: 'High altitude mountain retreat with infinity cloud pool',
    description: 'Perched 1,400 meters above sea level on Jebel Jais, offering crisp mountain air, infinity edge cloud swimming, and zip-line access.',
    amenities: ['Cloud Infinity Pool', 'Zipline Access', 'Stargazing Deck', 'Firepit Lounges', 'Helipad'],
    isFeatured: false
  }
];

export const OASIRA_ROOMS: OasiraRoom[] = [
  {
    id: 'room-deluxe-sea',
    name: 'Deluxe Sea View Room',
    sizeSqM: 42,
    maxGuests: 2,
    bedType: 'King Bed or Twin Beds',
    pricePerNightAED: 1250,
    view: 'Persian Gulf Panoramic View',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    amenities: ['Private Balcony', 'Marble Bathroom', 'Nespresso Bar', '24/7 Room Service', 'High-Speed Wi-Fi']
  },
  {
    id: 'room-ocean-suite',
    name: 'Ocean Sunset Suite',
    sizeSqM: 68,
    maxGuests: 2,
    bedType: 'Super King Bed',
    pricePerNightAED: 1850,
    view: 'Full Sunset & Lagoon View',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
    amenities: ['Living Lounge Area', 'Freestanding Soaking Tub', 'Daily Sunset Aperitivo', 'Butler Service']
  },
  {
    id: 'room-family-residence',
    name: 'Grand Family Residence',
    sizeSqM: 110,
    maxGuests: 5,
    bedType: '2 King Beds + Daybed',
    pricePerNightAED: 2400,
    view: 'Resort Gardens & Beach',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
    amenities: ['2 En-Suite Bedrooms', 'Kitchenette', 'Kids Play Area', 'Direct Garden Access']
  },
  {
    id: 'room-pool-villa',
    name: 'Private Pool Beach Villa',
    sizeSqM: 180,
    maxGuests: 6,
    bedType: '2 King Beds',
    pricePerNightAED: 3200,
    view: 'Direct Ocean & Private Pool',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    amenities: ['Private Infinity Pool', 'Direct Beach Gate', 'Outdoor Sunbed Deck', 'Dedicated Host']
  },
  {
    id: 'room-royal-beach-villa',
    name: 'Royal Beach Sanctuary Villa',
    sizeSqM: 320,
    maxGuests: 8,
    bedType: '3 King Bedrooms',
    pricePerNightAED: 5800,
    view: '270° Panoramic Ocean Access',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop',
    amenities: ['Private Beach Cove', 'Personal Chef Included', 'Private Spa Room', 'Riva Boat Access']
  }
];

export const OASIRA_STAYCATIONS: OasiraStaycationOffer[] = [
  {
    id: 'offer-dubai-weekend',
    title: 'DUBAI WEEKEND LUXURY ESCAPE',
    nights: 2,
    emirate: 'Dubai (Palm Jumeirah)',
    packagePriceAED: 2490,
    includes: ['2 Nights Stay at Azure Palm', 'Daily Gourmet Buffet Breakfast', 'AED 400 Resort Spa Credit', 'Late 4 PM Checkout'],
    badge: 'POPULAR STAYCATION',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'offer-rak-desert',
    title: 'RAK DESERT RESET & STARGAZING',
    nights: 2,
    emirate: 'Ras Al Khaimah',
    packagePriceAED: 1790,
    includes: ['2 Nights in Dune Mirage Pool Villa', 'Organic Breakfast', 'Sunset Camel Safari & Dinner', 'Stargazing Session'],
    badge: 'DESERT ESCAPE',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'offer-fujairah-sea',
    title: 'FUJAIRAH SEA & DIVING BREAK',
    nights: 3,
    emirate: 'Fujairah',
    packagePriceAED: 2350,
    includes: ['3 Nights Beachfront Room at Cove', 'Daily Breakfast', 'Complimentary Snorkeling Boat Trip', 'Private Beach Access'],
    badge: 'COASTAL BREAK',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'offer-abudhabi-family',
    title: 'ABU DHABI FAMILY ISLAND ESCAPE',
    nights: 2,
    emirate: 'Abu Dhabi (Saadiyat)',
    packagePriceAED: 2150,
    includes: ['2 Nights Family Residence at Pearl Bay', 'Breakfast for 2 Adults + 2 Kids', 'Louvre Abu Dhabi Museum Passes', 'Kids Club Access'],
    badge: 'FAMILY DEAL',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop'
  }
];

export const OASIRA_EXPERIENCES: OasiraExperience[] = [
  {
    id: 'exp-desert-safari',
    title: 'VIP Desert Safari & Vintage Land Rover',
    emirate: 'Dubai / RAK',
    duration: '6 Hours',
    priceAED: 295,
    priceType: 'per guest',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop',
    category: 'Desert'
  },
  {
    id: 'exp-sunset-yacht',
    title: 'Private Sunset Yacht Charter (44ft)',
    emirate: 'Dubai / Abu Dhabi',
    duration: '3 Hours',
    priceAED: 1450,
    priceType: 'per group',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    category: 'Yacht'
  },
  {
    id: 'exp-fujairah-diving',
    title: 'Snoopy Island Coral Diving & Snorkel',
    emirate: 'Fujairah',
    duration: '4 Hours',
    priceAED: 420,
    priceType: 'per guest',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    category: 'Diving'
  },
  {
    id: 'exp-dubai-flight',
    title: 'Dubai Scenic Helicopter Skyline Tour',
    emirate: 'Dubai',
    duration: '22 Minutes',
    priceAED: 1250,
    priceType: 'per guest',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
    category: 'Aerial'
  },
  {
    id: 'exp-desert-dinner',
    title: 'Royal Dunes Candlelight BBQ Dinner',
    emirate: 'Ras Al Khaimah',
    duration: '4 Hours',
    priceAED: 350,
    priceType: 'per guest',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop',
    category: 'Dining'
  },
  {
    id: 'exp-wellness-reset',
    title: 'Private Hammam & Sommelier Detox',
    emirate: 'Abu Dhabi / Dubai',
    duration: '2.5 Hours',
    priceAED: 550,
    priceType: 'per guest',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
    category: 'Wellness'
  }
];

export const OASIRA_REWARDS_TIERS = [
  { pointsNeeded: 500, reward: 'AED 50 Stay Credit at check-out', icon: 'Tag' },
  { pointsNeeded: 1500, reward: 'Complimentary Daily Champagne Breakfast', icon: 'Coffee' },
  { pointsNeeded: 3000, reward: 'AED 250 Resort Spa & Dining Voucher', icon: 'Award' },
  { pointsNeeded: 5000, reward: '1 Complimentary Night in Deluxe Sea Room', icon: 'Crown' }
];

export const OASIRA_ARTICLES = [
  {
    id: 'art-1',
    title: '7 Best UAE Staycation Spots for a 48-Hour Weekend Escape',
    category: 'Staycation Guide',
    readTime: '4 min read',
    date: 'August 2026',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    snippet: 'No airport queues required. Discover cliffside infinity pools, dune retreats, and tranquil lagoons within 90 minutes of Dubai.'
  },
  {
    id: 'art-2',
    title: 'RAK vs Fujairah: Which Coastal Escape Fits Your Vibe?',
    category: 'Destinations',
    readTime: '5 min read',
    date: 'July 2026',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    snippet: 'Compare high-altitude cloud pools on Jebel Jais with Indian Ocean diving and coral reefs on Fujairah coast.'
  },
  {
    id: 'art-3',
    title: 'The Ultimate UAE Romantic Getaway Guide for Couples',
    category: 'Couples Travel',
    readTime: '3 min read',
    date: 'June 2026',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1200&auto=format&fit=crop',
    snippet: 'Private desert pool villas, sunset yacht charters, and candlelit dune dinners curated for anniversaries.'
  }
];

export const OASIRA_FAQS = [
  {
    question: 'Can I book UAE staycations directly through OASIRA?',
    answer: 'Yes! OASIRA is built specifically for UAE residents and travelers seeking luxury resort staycations, weekend getaways, and private experiences across Dubai, Abu Dhabi, RAK, Fujairah, and all 7 Emirates.'
  },
  {
    question: 'Are all prices displayed in AED (UAE Dirham)?',
    answer: 'Yes. All room rates, staycation packages, resort fees, and experiences are transparently displayed in AED (UAE Dirham) with no hidden conversion markups.'
  },
  {
    question: 'How does WhatsApp Concierge booking assistance work?',
    answer: 'Simply click any WhatsApp Concierge button to connect directly with our dedicated UAE concierge desk (+971 50 998 8440) for custom staycation quotes, room upgrades, and instant booking assistance.'
  },
  {
    question: 'Are taxes, service charges, and Tourism Dirham fees included?',
    answer: 'Our price breakdown calculator explicitly calculates 5% UAE VAT, 10% Service Fee, and Municipality/Tourism Dirham fees so you know the exact final price before confirming.'
  },
  {
    question: 'Can I add experiences and airport transfers to my resort booking?',
    answer: 'Yes! You can bundle private desert safaris, yacht charters, spa treatments, and Mercedes airport transfers during our 7-step booking drawer process.'
  }
];
