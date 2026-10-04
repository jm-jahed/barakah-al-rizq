export interface EmberwildStay {
  id: string;
  name: string;
  location: string;
  destinationType: 'Forest' | 'Mountain' | 'Desert' | 'Lakeside' | 'Coastal' | 'Valley';
  stayType: 'Luxury Tent' | 'Glass Dome' | 'Forest Cabin' | 'Treehouse' | 'Safari Lodge' | 'Desert Camp' | 'Private Villa' | 'Wilderness Pod';
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  pricePerNightAED: number;
  rating: number;
  reviewsCount: number;
  experienceTags: string[];
  tripMoods: ('REST' | 'EXPLORE' | 'ESCAPE' | 'CONNECT' | 'DISCOVER')[];
  amenities: string[];
  features: {
    privateFirepit: boolean;
    privateBathroom: boolean;
    stargazingRoof: boolean;
    woodStove: boolean;
    outdoorHotTub: boolean;
    chefKitchen: boolean;
    panoramicView: string;
    wiFi: boolean;
    petFriendly: boolean;
    breakfastIncluded: boolean;
  };
  availabilityState: 'Available' | 'Few Dates Left' | 'Reserved This Weekend';
  elevation: string;
  coordinates: string;
}

export interface EmberwildExperience {
  id: string;
  title: string;
  category: 'ADVENTURE' | 'SLOW' | 'NIGHT' | 'WELLNESS';
  duration: string;
  groupSize: string;
  priceAED: number;
  image: string;
  shortDescription: string;
  fullDescription: string;
  included: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  timeOfDay: 'Dawn' | 'Morning' | 'Afternoon' | 'Dusk' | 'Night';
}

export interface ExperienceAddon {
  id: string;
  name: string;
  category: string;
  duration: string;
  priceAED: number;
  icon: string;
  description: string;
}

export const EMBERWILD_METADATA = {
  name: 'EMBERWILD',
  eyebrow: 'WILDERNESS, REFINED',
  tagline: 'Stay Close to Wild.',
  positioning: 'Luxury Wilderness Stays & Outdoor Experiences',
  subheading: 'Discover extraordinary stays, private camps, and unforgettable outdoor experiences — designed for those who want nature without compromising comfort.',
  location: 'Hajar Mountain Escapes, Al Qudra Desert Dunes & Secret Coastal Fjords, UAE',
  demoNotice: 'EMBERWILD WILDERNESS PORTAL · Fictional Outdoor Hospitality & Booking Experience'
};

// -------------------------------------------------------------
// 24 DISTINCT WILDERNESS STAYS
// -------------------------------------------------------------
export const EMBERWILD_STAYS: EmberwildStay[] = [
  {
    id: 'stay-01',
    name: 'Ember Ridge Dome',
    location: 'Hatta Mountain Ridge, Dubai',
    destinationType: 'Mountain',
    stayType: 'Glass Dome',
    description: 'Geodesic climate-controlled glass dome with 270° views across craggy mountain ridges and midnight starfields.',
    longDescription: 'Perched high along the ridgeline of the Hatta crags, Ember Ridge Dome pairs high-tech thermal glass insulation with raw timber interior craftsmanship. Wake up to golden sunrise mist rolling through the canyon and fall asleep directly beneath unobstructed celestial constellations.',
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    pricePerNightAED: 1650,
    rating: 4.96,
    reviewsCount: 48,
    experienceTags: ['Stargazing', 'Romance', 'Hiking', 'Wellness'],
    tripMoods: ['ESCAPE', 'REST', 'DISCOVER'],
    amenities: ['King Featherbed', 'Private Sunken Firepit', 'Ensuite Copper Bath', 'Espresso Bar', 'Telescope', 'Solar Climate Control', 'Artisanal Breakfast Basket'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: true,
      woodStove: false,
      outdoorHotTub: true,
      chefKitchen: false,
      panoramicView: '270° Mountain Crest & Canyon View',
      wiFi: true,
      petFriendly: false,
      breakfastIncluded: true
    },
    availabilityState: 'Few Dates Left',
    elevation: '890m above sea level',
    coordinates: '24.8167° N, 56.1333° E'
  },
  {
    id: 'stay-02',
    name: 'Wildpine Cabin',
    location: 'Wadi Shawkah Forest Valley, Ras Al Khaimah',
    destinationType: 'Forest',
    stayType: 'Forest Cabin',
    description: 'Blackened cedar architectural sanctuary tucked deep inside ancient acacia and ghaf forest canopies.',
    longDescription: 'Designed with Japanese Shou Sugi Ban charred timber, Wildpine Cabin provides absolute seclusion. Listen to the soothing breeze through the canopy from your cedar soaking tub, or gather around the granite hearth as twilight descends.',
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: 4,
    bedrooms: 2,
    bathrooms: 2,
    pricePerNightAED: 2200,
    rating: 4.98,
    reviewsCount: 62,
    experienceTags: ['Campfire', 'Digital Detox', 'Hiking', 'Wildlife'],
    tripMoods: ['REST', 'CONNECT', 'ESCAPE'],
    amenities: ['Cast Iron Wood Stove', 'Outdoor Forest Shower', 'Nordic Cedar Hot Tub', 'Chef Kitchenette', 'Marshall Sound System', 'Private Trail Access'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: false,
      woodStove: true,
      outdoorHotTub: true,
      chefKitchen: true,
      panoramicView: 'Private Woodland Glade',
      wiFi: true,
      petFriendly: true,
      breakfastIncluded: true
    },
    availabilityState: 'Available',
    elevation: '420m above sea level',
    coordinates: '25.1025° N, 56.0289° E'
  },
  {
    id: 'stay-03',
    name: 'Moonstone Camp',
    location: 'Rub Al Khali Silk Dunes, Abu Dhabi',
    destinationType: 'Desert',
    stayType: 'Desert Camp',
    description: 'Ultra-luxury custom canvas pavilion nestled in deep red dunes with private plunge pool and astronomical lounge.',
    longDescription: 'Moonstone Camp is an oasis of silence. Hand-woven bedouin textiles meet modern climate architecture. Watch shadows lengthen across endless copper dunes before enjoying a candlelit multi-course desert dinner cooked over open desert embers.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    pricePerNightAED: 2850,
    rating: 4.99,
    reviewsCount: 39,
    experienceTags: ['Stargazing', 'Romance', 'Adventure', 'Campfire'],
    tripMoods: ['ESCAPE', 'DISCOVER', 'REST'],
    amenities: ['Private Desert Dune Plunge Pool', 'Astronomer Reflector Telescope', 'Bedouin Hearth', 'Linen Daybeds', 'Clay Water Amphora', 'Private Butler Service'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: true,
      woodStove: false,
      outdoorHotTub: true,
      chefKitchen: false,
      panoramicView: 'Infinite Red Dune Horizons',
      wiFi: true,
      petFriendly: false,
      breakfastIncluded: true
    },
    availabilityState: 'Few Dates Left',
    elevation: '120m above sea level',
    coordinates: '22.9821° N, 54.1290° E'
  },
  {
    id: 'stay-04',
    name: 'Cedar Veil Retreat',
    location: 'Jebel Jais Highlands, Ras Al Khaimah',
    destinationType: 'Mountain',
    stayType: 'Luxury Tent',
    description: 'Double-walled safari canvas suite with cantilevered timber deck over sheer limestone cliffs.',
    longDescription: 'Suspended above the clouds at 1,400 meters, Cedar Veil blends authentic expedition canvas aesthetics with heated radiant slate floors, copper rainhead showers, and a private mountain fire circle.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: 3,
    bedrooms: 1,
    bathrooms: 1,
    pricePerNightAED: 1890,
    rating: 4.94,
    reviewsCount: 51,
    experienceTags: ['Hiking', 'Adventure', 'Campfire', 'Stargazing'],
    tripMoods: ['EXPLORE', 'ESCAPE'],
    amenities: ['Cantilevered Viewing Deck', 'Radiant Slate Heating', 'Artisan Coffee Roasts', 'Mountain Trekking Poles', 'Cast Iron Cookware'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: false,
      woodStove: true,
      outdoorHotTub: false,
      chefKitchen: false,
      panoramicView: '1,400m Cloud Inversion Valley',
      wiFi: true,
      petFriendly: true,
      breakfastIncluded: true
    },
    availabilityState: 'Available',
    elevation: '1,420m above sea level',
    coordinates: '25.9540° N, 56.1415° E'
  },
  {
    id: 'stay-05',
    name: 'Solstice Dome',
    location: 'Fossil Rock Dunes, Mleiha, Sharjah',
    destinationType: 'Desert',
    stayType: 'Glass Dome',
    description: 'Mirrored solar glass pod reflecting golden sands by day and completely translucent to the Milky Way by night.',
    longDescription: 'Located near prehistoric fossil formations, Solstice Dome features optical smart-tint glass that turns completely crystal clear with the touch of a button. Experience the profound stillness of the archaeological desert.',
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    pricePerNightAED: 1950,
    rating: 4.97,
    reviewsCount: 34,
    experienceTags: ['Stargazing', 'Romance', 'Digital Detox'],
    tripMoods: ['REST', 'ESCAPE'],
    amenities: ['Smart Optical Glass', 'Zero Gravity Bed', 'Sunken Dune Seating', 'Organic Skincare Amenities', 'Sunset Tea Ceremony'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: true,
      woodStove: false,
      outdoorHotTub: true,
      chefKitchen: false,
      panoramicView: 'Fossil Rock & Ochre Dunes',
      wiFi: false,
      petFriendly: false,
      breakfastIncluded: true
    },
    availabilityState: 'Reserved This Weekend',
    elevation: '210m above sea level',
    coordinates: '25.1384° N, 55.8576° E'
  },
  {
    id: 'stay-06',
    name: 'Highland Ember Lodge',
    location: 'Masfout Ridge, Ajman Highlands',
    destinationType: 'Mountain',
    stayType: 'Safari Lodge',
    description: 'Hand-carved limestone and weathered timber mountain lodge with panoramic infinity jacuzzi pool.',
    longDescription: 'The pinnacle of mountain luxury, Highland Ember Lodge caters to those seeking space and commanding views. Features an open stone fireplace, private outdoor kitchen, and heated basalt swimming pool facing the craggy skyline.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: 6,
    bedrooms: 3,
    bathrooms: 3,
    pricePerNightAED: 3800,
    rating: 4.99,
    reviewsCount: 29,
    experienceTags: ['Family Escape', 'Campfire', 'Hiking', 'Wellness'],
    tripMoods: ['CONNECT', 'EXPLORE', 'REST'],
    amenities: ['Private Basalt Infinity Pool', 'Stone Fireplace', 'Outdoor Woodfire Pizza Oven', 'Wine Cooler', 'Private Chef On Request'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: false,
      woodStove: true,
      outdoorHotTub: true,
      chefKitchen: true,
      panoramicView: '360° Mountain Escarpment',
      wiFi: true,
      petFriendly: true,
      breakfastIncluded: true
    },
    availabilityState: 'Available',
    elevation: '720m above sea level',
    coordinates: '24.8197° N, 56.0964° E'
  },
  {
    id: 'stay-07',
    name: 'Nomad Hearth Camp',
    location: 'Al Marmoom Desert Reserve, Dubai',
    destinationType: 'Desert',
    stayType: 'Safari Lodge',
    description: 'Heritage canvas encampment facing natural desert lakes with roving Arabian gazelles and wild oryx.',
    longDescription: 'Immerse yourself in wildlife conservation at Nomad Hearth Camp. Nestled beside the lake sanctuary, this stay combines spacious canvas salons with curated sunset camel treks and bespoke outdoor cinema nights.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: 4,
    bedrooms: 2,
    bathrooms: 2,
    pricePerNightAED: 2400,
    rating: 4.92,
    reviewsCount: 44,
    experienceTags: ['Wildlife', 'Campfire', 'Family Escape', 'Stargazing'],
    tripMoods: ['DISCOVER', 'CONNECT'],
    amenities: ['Desert Lake Access', 'Outdoor Cinema Projector', 'Handmade Wool Rugs', 'Binoculars for Wildlife', 'Bonfire Pit'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: false,
      woodStove: false,
      outdoorHotTub: false,
      chefKitchen: false,
      panoramicView: 'Oryx Lake & Desert Savanna',
      wiFi: true,
      petFriendly: false,
      breakfastIncluded: true
    },
    availabilityState: 'Few Dates Left',
    elevation: '85m above sea level',
    coordinates: '24.8624° N, 55.2891° E'
  },
  {
    id: 'stay-08',
    name: 'Whisper Valley Cabin',
    location: 'Wadi Wurayah Biosphere, Fujairah',
    destinationType: 'Valley',
    stayType: 'Forest Cabin',
    description: 'Eco-architectural lodge beside a secluded freshwater rock pool and natural mountain springs.',
    longDescription: 'Protected inside the UNESCO Biosphere reserve, Whisper Valley Cabin is powered 100% by silent solar storage and offers direct access to emerald water pools, endemic orchid species, and mountain hiking trails.',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: 4,
    bedrooms: 2,
    bathrooms: 1,
    pricePerNightAED: 2150,
    rating: 4.95,
    reviewsCount: 38,
    experienceTags: ['Hiking', 'Wildlife', 'Digital Detox', 'Wellness'],
    tripMoods: ['REST', 'EXPLORE', 'ESCAPE'],
    amenities: ['Natural Rock Pool Access', 'Timber Hammocks', 'Fresh Spring Water Tap', 'Yoga Mats & Bolsters', 'Solar Kitchenette'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: false,
      woodStove: true,
      outdoorHotTub: false,
      chefKitchen: true,
      panoramicView: 'Granite Canyon & Waterfalls',
      wiFi: false,
      petFriendly: true,
      breakfastIncluded: true
    },
    availabilityState: 'Available',
    elevation: '310m above sea level',
    coordinates: '25.3956° N, 56.2736° E'
  },
  {
    id: 'stay-09',
    name: 'Nightfall Glass House',
    location: 'Liwa Crescent Desert, Abu Dhabi',
    destinationType: 'Desert',
    stayType: 'Wilderness Pod',
    description: 'Minimalist all-glass architectural pavilion situated at the crest of the legendary Moreeb Dune.',
    longDescription: 'An architectural marvel set amidst 300-meter golden sand dunes. Nightfall Glass House combines ultra-low iron acoustic glass with bespoke brushed brass finishes and a private sunken conversation firepit.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    pricePerNightAED: 3200,
    rating: 4.99,
    reviewsCount: 27,
    experienceTags: ['Romance', 'Stargazing', 'Adventure'],
    tripMoods: ['ESCAPE', 'DISCOVER'],
    amenities: ['Sunken Conversation Firepit', 'Under-Floor Cooling', 'Celestron Smart Scope', 'Freestanding Stone Tub', 'Artisan Desert Gin Bar'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: true,
      woodStove: false,
      outdoorHotTub: true,
      chefKitchen: false,
      panoramicView: 'Moreeb Mega Dune Panorama',
      wiFi: true,
      petFriendly: false,
      breakfastIncluded: true
    },
    availabilityState: 'Few Dates Left',
    elevation: '180m above sea level',
    coordinates: '22.9760° N, 53.7912° E'
  },
  {
    id: 'stay-10',
    name: 'Fern & Fire Retreat',
    location: 'Kalba Mangrove Sanctuary, Sharjah',
    destinationType: 'Coastal',
    stayType: 'Treehouse',
    description: 'Elevated luxury timber treehouse perched above coastal mangrove waterways and kingfisher habitats.',
    longDescription: 'Glide directly to your retreat via private wooden kayak. Elevated 6 meters in the ancient mangroves, Fern & Fire provides open-air living pavilions, suspended rope daybeds, and private dusk paddleboards.',
    image: 'https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1488441770602-aed21fc49bd5?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    pricePerNightAED: 2350,
    rating: 4.93,
    reviewsCount: 31,
    experienceTags: ['Kayaking', 'Wildlife', 'Romance', 'Wellness'],
    tripMoods: ['REST', 'DISCOVER', 'ESCAPE'],
    amenities: ['Private Wooden Kayaks', 'Suspended Net Daybed', 'Rainwater Soaking Basin', 'Organic Herb Garden', 'Sunrise Breakfast Tray'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: false,
      woodStove: false,
      outdoorHotTub: false,
      chefKitchen: false,
      panoramicView: 'Tidal Lagoon & Mangrove Forest',
      wiFi: true,
      petFriendly: false,
      breakfastIncluded: true
    },
    availabilityState: 'Available',
    elevation: '6m above sea level',
    coordinates: '25.0118° N, 56.3582° E'
  },
  {
    id: 'stay-11',
    name: 'Silver Lake Camp',
    location: 'Al Qudra Desert Lakes, Dubai',
    destinationType: 'Lakeside',
    stayType: 'Luxury Tent',
    description: 'Spacious safari bell tents set along shimmering freshwater desert lakes frequented by black swans.',
    longDescription: 'A quick escape from Dubai city life. Silver Lake Camp features luxury double canvas structures with plush Persian carpets, private campfire setups, and morning cycling trails along the Al Qudra track.',
    image: 'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: 4,
    bedrooms: 2,
    bathrooms: 1,
    pricePerNightAED: 1450,
    rating: 4.89,
    reviewsCount: 78,
    experienceTags: ['Campfire', 'Family Escape', 'Wildlife', 'Stargazing'],
    tripMoods: ['CONNECT', 'REST'],
    amenities: ['Fat-Tire Desert Bikes', 'Cast-Iron Fire Grate', 'Plush Linens', 'Gourmet Smores Kit', 'Bluetooth Ambient Audio'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: false,
      woodStove: false,
      outdoorHotTub: false,
      chefKitchen: false,
      panoramicView: 'Lake Waters & Sunset Dunes',
      wiFi: true,
      petFriendly: true,
      breakfastIncluded: true
    },
    availabilityState: 'Available',
    elevation: '90m above sea level',
    coordinates: '24.8456° N, 55.3621° E'
  },
  {
    id: 'stay-12',
    name: 'Wildstone Lodge',
    location: 'Jebel Hafeet Foothills, Al Ain',
    destinationType: 'Mountain',
    stayType: 'Private Villa',
    description: 'Monolithic desert villa sculpted from local limestone with thermal hot-spring plunge pool.',
    longDescription: 'Set against the dramatic ridge of Jebel Hafeet, Wildstone Lodge offers private mineral hot-spring baths, expansive sun decks, and private desert garden courtyard filled with native date palms.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    capacity: 6,
    bedrooms: 3,
    bathrooms: 3,
    pricePerNightAED: 4200,
    rating: 4.98,
    reviewsCount: 22,
    experienceTags: ['Wellness', 'Romance', 'Family Escape'],
    tripMoods: ['REST', 'CONNECT'],
    amenities: ['Thermal Mineral Plunge Pool', 'Outdoor Courtyard Fireplace', 'Chef Kitchen', 'Steam Sauna', 'Private Yoga Deck'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: false,
      woodStove: true,
      outdoorHotTub: true,
      chefKitchen: true,
      panoramicView: 'Jebel Hafeet Ridge Silhouette',
      wiFi: true,
      petFriendly: true,
      breakfastIncluded: true
    },
    availabilityState: 'Few Dates Left',
    elevation: '480m above sea level',
    coordinates: '24.0578° N, 55.7725° E'
  },
  {
    id: 'stay-13',
    name: 'Aurora Ridge Dome',
    location: 'Khorfakkan Mountain Pass, Sharjah',
    destinationType: 'Mountain',
    stayType: 'Glass Dome',
    description: 'High-altitude panoramic dome overlooking the Gulf of Oman coastline and mountain gorges.',
    longDescription: 'Where the mountains crash into the sea. Aurora Ridge Dome combines glass roof architecture with sea mist breezes and private cliffside woodfire saunas.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'],
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    pricePerNightAED: 1780,
    rating: 4.95,
    reviewsCount: 36,
    experienceTags: ['Stargazing', 'Romance', 'Hiking'],
    tripMoods: ['ESCAPE', 'DISCOVER'],
    amenities: ['Cliffside Woodfire Sauna', 'Stargazing Glass Ceiling', 'Copper Bathtub', 'Handmade Espresso Machine'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: true,
      woodStove: true,
      outdoorHotTub: true,
      chefKitchen: false,
      panoramicView: 'Dual Mountain & Ocean Horizon',
      wiFi: true,
      petFriendly: false,
      breakfastIncluded: true
    },
    availabilityState: 'Available',
    elevation: '650m above sea level',
    coordinates: '25.3340° N, 56.3420° E'
  },
  {
    id: 'stay-14',
    name: 'Desert Ember Camp',
    location: 'Sweihan Star Dunes, Abu Dhabi',
    destinationType: 'Desert',
    stayType: 'Desert Camp',
    description: 'Nomadic luxury desert tent camp focused on astronomical photography and dark sky conservation.',
    longDescription: 'Located within UAE’s darkest certified sky zones. Desert Ember Camp provides professional telescope rigs, astro-photography guidance, and slow evenings around crackling acacia root fires.',
    image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=1200&q=80'],
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    pricePerNightAED: 2100,
    rating: 4.97,
    reviewsCount: 41,
    experienceTags: ['Stargazing', 'Campfire', 'Digital Detox'],
    tripMoods: ['ESCAPE', 'REST'],
    amenities: ['Equatorial Telescope Mount', 'Astro Red-Light Lighting', 'Hand-Crafted Low Seating', 'Bedouin Coffee Kit'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: true,
      woodStove: false,
      outdoorHotTub: false,
      chefKitchen: false,
      panoramicView: '360° Zero-Light Pollution Horizon',
      wiFi: false,
      petFriendly: false,
      breakfastIncluded: true
    },
    availabilityState: 'Available',
    elevation: '140m above sea level',
    coordinates: '24.4667° N, 55.3333° E'
  },
  {
    id: 'stay-15',
    name: 'Mosswood Hideaway',
    location: 'Wadi Asimah Secret Oasis, Ras Al Khaimah',
    destinationType: 'Forest',
    stayType: 'Forest Cabin',
    description: 'Rustic timber sanctuary enveloped by wild mountain figs and shaded citrus groves.',
    longDescription: 'Secluded in an ancient mountain farming pocket, Mosswood Hideaway offers direct farm-to-table breakfast picking, cold mountain stream baths, and evenings listening to mountain nightingales.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80'],
    capacity: 3,
    bedrooms: 1,
    bathrooms: 1,
    pricePerNightAED: 1600,
    rating: 4.91,
    reviewsCount: 28,
    experienceTags: ['Hiking', 'Digital Detox', 'Wellness'],
    tripMoods: ['REST', 'EXPLORE'],
    amenities: ['Citrus Orchard Access', 'Outdoor Copper Tub', 'Hand-Hewn Dining Table', 'Wood Burning Stove'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: false,
      woodStove: true,
      outdoorHotTub: false,
      chefKitchen: true,
      panoramicView: 'Private Fig & Palm Grove',
      wiFi: true,
      petFriendly: true,
      breakfastIncluded: true
    },
    availabilityState: 'Available',
    elevation: '390m above sea level',
    coordinates: '25.3890° N, 56.1245° E'
  },
  {
    id: 'stay-16',
    name: 'Canyon Light Retreat',
    location: 'Wadi Bih Grand Canyon, Ras Al Khaimah',
    destinationType: 'Mountain',
    stayType: 'Wilderness Pod',
    description: 'Futuristic cantilevered steel and timber pod hanging over the sheer limestone walls of Wadi Bih.',
    longDescription: 'An adrenaline-infused luxury stay. Walk out onto a glass cantilever balcony suspended 200 meters above the canyon floor and enjoy sunset climbing trails right outside your door.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80'],
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    pricePerNightAED: 2600,
    rating: 4.98,
    reviewsCount: 19,
    experienceTags: ['Adventure', 'Hiking', 'Stargazing'],
    tripMoods: ['EXPLORE', 'DISCOVER'],
    amenities: ['Glass Floor Balcony', 'Climbing Gear Rack', 'Underfloor Heating', 'Espresso Roastery Station'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: true,
      woodStove: false,
      outdoorHotTub: true,
      chefKitchen: false,
      panoramicView: 'Wadi Bih 1,000m Canyon Walls',
      wiFi: true,
      petFriendly: false,
      breakfastIncluded: true
    },
    availabilityState: 'Few Dates Left',
    elevation: '1,050m above sea level',
    coordinates: '25.8123° N, 56.0912° E'
  },
  {
    id: 'stay-17',
    name: 'Timber Moon Cabin',
    location: 'Al Hajar Foothills, Fujairah',
    destinationType: 'Forest',
    stayType: 'Forest Cabin',
    description: 'Double-height cedar lodge with glass gable wall facing mountain peaks and evening star fields.',
    longDescription: 'Built with sustainably sourced Douglas fir and local slate stone, Timber Moon Cabin blends Scandinavian minimalism with Arabian hospitality warmth.',
    image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1200&q=80'],
    capacity: 4,
    bedrooms: 2,
    bathrooms: 2,
    pricePerNightAED: 2450,
    rating: 4.96,
    reviewsCount: 52,
    experienceTags: ['Campfire', 'Romance', 'Family Escape'],
    tripMoods: ['CONNECT', 'REST'],
    amenities: ['Double Height Glass Wall', 'Cast Iron Hearth', 'Outdoor Forest Deck', 'Full Gourmet Kitchen'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: true,
      woodStove: true,
      outdoorHotTub: true,
      chefKitchen: true,
      panoramicView: 'Valley Pine & Mountain Peak',
      wiFi: true,
      petFriendly: true,
      breakfastIncluded: true
    },
    availabilityState: 'Available',
    elevation: '520m above sea level',
    coordinates: '25.2156° N, 56.1840° E'
  },
  {
    id: 'stay-18',
    name: 'Starlight Meadow',
    location: 'Jebel Yanas Plateau, Ras Al Khaimah',
    destinationType: 'Mountain',
    stayType: 'Luxury Tent',
    description: 'Expedition bell tent pitched in wild lavender and mountain thyme plateau.',
    longDescription: 'Surrounded by fragrant wild flora and sweeping mountain vistas, Starlight Meadow offers an unplugged sanctuary for quiet meditation and unhurried conversation.',
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80'],
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    pricePerNightAED: 1350,
    rating: 4.90,
    reviewsCount: 65,
    experienceTags: ['Wellness', 'Campfire', 'Digital Detox'],
    tripMoods: ['REST', 'ESCAPE'],
    amenities: ['Wildflower Meadow Deck', 'Outdoor Solar Shower', 'Aromatherapy Diffusers', 'Linen Daybeds'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: false,
      woodStove: false,
      outdoorHotTub: false,
      chefKitchen: false,
      panoramicView: 'High Plateau & Mountain Meadow',
      wiFi: false,
      petFriendly: true,
      breakfastIncluded: true
    },
    availabilityState: 'Available',
    elevation: '1,100m above sea level',
    coordinates: '25.7654° N, 56.1200° E'
  },
  {
    id: 'stay-19',
    name: 'Hidden Creek Camp',
    location: 'Wadi Tayyibah, Dibba, Fujairah',
    destinationType: 'Valley',
    stayType: 'Luxury Tent',
    description: 'Canvas safari suites along a tranquil flowing seasonal creek lined with date palms.',
    longDescription: 'Hidden in a lush wadi corridor, enjoy the gentle murmur of flowing water, private stone barbecue pits, and shaded hiking paths leading to heritage watchtowers.',
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80'],
    capacity: 4,
    bedrooms: 2,
    bathrooms: 1,
    pricePerNightAED: 1550,
    rating: 4.92,
    reviewsCount: 43,
    experienceTags: ['Hiking', 'Wildlife', 'Family Escape'],
    tripMoods: ['EXPLORE', 'CONNECT'],
    amenities: ['Creek Side Seating', 'Stone BBQ Pit', 'Outdoor Hammocks', 'Complimentary Mountain Bikes'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: false,
      woodStove: false,
      outdoorHotTub: false,
      chefKitchen: false,
      panoramicView: 'Wadi Stream & Date Groves',
      wiFi: true,
      petFriendly: true,
      breakfastIncluded: true
    },
    availabilityState: 'Available',
    elevation: '280m above sea level',
    coordinates: '25.6012° N, 56.2410° E'
  },
  {
    id: 'stay-20',
    name: 'Golden Pine Retreat',
    location: 'Al Dhaid Nature Reserve, Sharjah',
    destinationType: 'Forest',
    stayType: 'Treehouse',
    description: 'Modernist cedar treehouse raised above private pine and eucalyptus woodlands.',
    longDescription: 'A sanctuary in the sky with 360-degree glass windows, private outdoor suspension bridges, and a secluded wood-fired cedar hot tub hidden in the trees.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80'],
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    pricePerNightAED: 2100,
    rating: 4.97,
    reviewsCount: 37,
    experienceTags: ['Romance', 'Wellness', 'Digital Detox'],
    tripMoods: ['REST', 'ESCAPE'],
    amenities: ['Wood Fired Cedar Hot Tub', 'Canopy Suspension Bridge', 'Organic Breakfast Basket', 'Gramophone Record Player'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: true,
      woodStove: true,
      outdoorHotTub: true,
      chefKitchen: false,
      panoramicView: 'Eucalyptus Canopy & Sunset',
      wiFi: true,
      petFriendly: false,
      breakfastIncluded: true
    },
    availabilityState: 'Reserved This Weekend',
    elevation: '170m above sea level',
    coordinates: '25.2890° N, 55.8820° E'
  },
  {
    id: 'stay-21',
    name: 'Wild Horizon Lodge',
    location: 'Sir Bani Yas Island Coastal Bluffs, Abu Dhabi',
    destinationType: 'Coastal',
    stayType: 'Safari Lodge',
    description: 'Exclusive seaside safari pavilion overlooking turquoise Arabian waters and roaming free-range wildlife.',
    longDescription: 'Located on Sir Bani Yas nature reserve island. Watch Arabian Oryx, cheetahs, and flamingos roam freely while relaxing on your oceanfront infinity terrace.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80'],
    capacity: 4,
    bedrooms: 2,
    bathrooms: 2,
    pricePerNightAED: 3600,
    rating: 4.99,
    reviewsCount: 46,
    experienceTags: ['Wildlife', 'Adventure', 'Family Escape', 'Romance'],
    tripMoods: ['DISCOVER', 'CONNECT'],
    amenities: ['Seaside Infinity Pool', 'Wildlife Safari Vehicle Included', 'Private Sunset Deck', 'Marine Kayaks'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: false,
      woodStove: false,
      outdoorHotTub: true,
      chefKitchen: true,
      panoramicView: 'Arabian Gulf Coastline & Savanna',
      wiFi: true,
      petFriendly: false,
      breakfastIncluded: true
    },
    availabilityState: 'Available',
    elevation: '15m above sea level',
    coordinates: '24.3167° N, 52.6000° E'
  },
  {
    id: 'stay-22',
    name: 'Riverstone Escape',
    location: 'Wadi Abadilah Ravine, Fujairah',
    destinationType: 'Valley',
    stayType: 'Forest Cabin',
    description: 'Black timber cabin overlooking natural boulder streams and emerald natural pools.',
    longDescription: 'Immerse yourself in lush wadi greenery. Steps away from the UAE’s favorite wadi walking trail, Riverstone Escape offers pure relaxation and campfire camaraderie.',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80'],
    capacity: 4,
    bedrooms: 2,
    bathrooms: 1,
    pricePerNightAED: 1850,
    rating: 4.93,
    reviewsCount: 39,
    experienceTags: ['Hiking', 'Wildlife', 'Campfire'],
    tripMoods: ['EXPLORE', 'CONNECT'],
    amenities: ['Private Boulder Firepit', 'Outdoor Cold Dip Tank', 'Cast Iron Skillet Set', 'Trail Maps & Walking Sticks'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: false,
      woodStove: true,
      outdoorHotTub: false,
      chefKitchen: true,
      panoramicView: 'River Stones & Mountain Ravine',
      wiFi: true,
      petFriendly: true,
      breakfastIncluded: true
    },
    availabilityState: 'Available',
    elevation: '340m above sea level',
    coordinates: '25.4120° N, 56.1950° E'
  },
  {
    id: 'stay-23',
    name: 'Moonlit Grove',
    location: 'Al Madam Desert Forest, Sharjah',
    destinationType: 'Desert',
    stayType: 'Glass Dome',
    description: 'Stargazer dome surrounded by the famous ghost village dunes and ghaf tree forests.',
    longDescription: 'Set beside the shifting sands of the abandoned Al Madam village, Moonlit Grove offers unmatched nocturnal beauty, private fire bowls, and sunset quad excursions.',
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80'],
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    pricePerNightAED: 1750,
    rating: 4.92,
    reviewsCount: 31,
    experienceTags: ['Stargazing', 'Adventure', 'Romance'],
    tripMoods: ['ESCAPE', 'DISCOVER'],
    amenities: ['Panoramic Star Dome', 'Desert Hearth', 'Sunken Daybed', 'Organic Date Platter'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: true,
      woodStove: false,
      outdoorHotTub: false,
      chefKitchen: false,
      panoramicView: 'Ghost Village Dunes & Ghaf Grove',
      wiFi: true,
      petFriendly: false,
      breakfastIncluded: true
    },
    availabilityState: 'Available',
    elevation: '130m above sea level',
    coordinates: '24.8940° N, 55.7620° E'
  },
  {
    id: 'stay-24',
    name: 'Ember Lake House',
    location: 'Hatta Dam Waters, Dubai',
    destinationType: 'Lakeside',
    stayType: 'Private Villa',
    description: 'Architectural floating villa anchored on the turquoise mountain waters of Hatta Dam reservoir.',
    longDescription: 'The crown jewel of lakeside escapes. Step directly from your master bedroom into private electric kayaks, swim in pristine mountain waters, and dine on your floating rooftop deck.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    gallery: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'],
    capacity: 6,
    bedrooms: 3,
    bathrooms: 3,
    pricePerNightAED: 4600,
    rating: 5.0,
    reviewsCount: 54,
    experienceTags: ['Kayaking', 'Romance', 'Family Escape', 'Wellness'],
    tripMoods: ['REST', 'CONNECT', 'DISCOVER'],
    amenities: ['Private Electric Boat', 'Rooftop Stargazing Deck', 'Floating Swim Platform', 'Gourmet Kitchen', 'Sound System'],
    features: {
      privateFirepit: true,
      privateBathroom: true,
      stargazingRoof: true,
      woodStove: false,
      outdoorHotTub: true,
      chefKitchen: true,
      panoramicView: 'Turquoise Hatta Dam Waters & Jagged Peaks',
      wiFi: true,
      petFriendly: false,
      breakfastIncluded: true
    },
    availabilityState: 'Few Dates Left',
    elevation: '320m above sea level',
    coordinates: '24.7850° N, 56.1150° E'
  }
];

// -------------------------------------------------------------
// 6 DESTINATION CATEGORIES
// -------------------------------------------------------------
export const EMBERWILD_DESTINATIONS = [
  {
    id: 'dest-forest',
    type: 'Forest',
    title: 'FOREST',
    tagline: 'Deep woodland retreats.',
    description: 'Charred timber cabins and treehouses tucked within ancient acacia canopies and green wadi forests.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80',
    staysCount: '4 Stays Available',
    avgTemp: '24°C',
    elevation: '300m–500m'
  },
  {
    id: 'dest-mountain',
    type: 'Mountain',
    title: 'MOUNTAIN',
    tagline: 'High-altitude escapes.',
    description: 'Geodesic domes and cliffside safari lodges towering high above cloud inversions in the rugged Hajar range.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',
    staysCount: '6 Stays Available',
    avgTemp: '18°C',
    elevation: '800m–1,400m'
  },
  {
    id: 'dest-desert',
    type: 'Desert',
    title: 'DESERT',
    tagline: 'Silence, stars and open horizons.',
    description: 'Luxury canvas pavilions and optical glass pods nestled in the stillness of deep copper and silk sand dunes.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80',
    staysCount: '6 Stays Available',
    avgTemp: '26°C',
    elevation: '80m–200m'
  },
  {
    id: 'dest-lakeside',
    type: 'Lakeside',
    title: 'LAKESIDE',
    tagline: 'Water, fire and stillness.',
    description: 'Floating water villas and lakeside bell tents resting along turquoise mountain reservoirs and desert waters.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    staysCount: '2 Stays Available',
    avgTemp: '22°C',
    elevation: '90m–320m'
  },
  {
    id: 'dest-coastal',
    type: 'Coastal',
    title: 'COASTAL',
    tagline: 'Wild coastline experiences.',
    description: 'Elevated mangrove treehouses and island bluffs where turquoise sea tides meet wild nature reserves.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    staysCount: '2 Stays Available',
    avgTemp: '25°C',
    elevation: '5m–30m'
  },
  {
    id: 'dest-valley',
    type: 'Valley',
    title: 'VALLEY',
    tagline: 'Secluded natural landscapes.',
    description: 'Hidden boulder lodges and stream-side safari suites nestled deep within protected canyon corridors.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80',
    staysCount: '4 Stays Available',
    avgTemp: '21°C',
    elevation: '250m–400m'
  }
];

// -------------------------------------------------------------
// 10 EXPERIENCE ADDONS (For Experience Builder)
// -------------------------------------------------------------
export const EXPERIENCE_ADDONS: ExperienceAddon[] = [
  {
    id: 'add-campfire',
    name: 'Private Ember Campfire & S’mores',
    category: 'Night',
    duration: '2 Hours',
    priceAED: 250,
    icon: 'Flame',
    description: 'Sustainably harvested ghaf & olive firewood stack, artisan handmade marshmallows, gourmet chocolate & fire master setup.'
  },
  {
    id: 'add-hike',
    name: 'Guided Geological Ridge Hike',
    category: 'Adventure',
    duration: '3.5 Hours',
    priceAED: 380,
    icon: 'Mountain',
    description: 'Certified wilderness guide, trekking poles, botanical flora identification & panoramic summit tea ceremony.'
  },
  {
    id: 'add-stargaze',
    name: 'Astronomical Stargazing & Celestron Scope',
    category: 'Night',
    duration: '2 Hours',
    priceAED: 450,
    icon: 'ShieldCheck',
    description: 'High-magnification computerized telescope session with deep-sky astronomy guide exploring Saturn’s rings & nebulae.'
  },
  {
    id: 'add-breakfast',
    name: 'Artisan Wilderness Breakfast Basket',
    category: 'Slow',
    duration: 'Morning',
    priceAED: 180,
    icon: 'Coffee',
    description: 'Warm freshly baked sourdough, local mountain honey, organic farm eggs, cold-pressed juices & chemex coffee beans.'
  },
  {
    id: 'add-picnic',
    name: 'Sunset Dune Picnic Setup',
    category: 'Romance',
    duration: '2.5 Hours',
    priceAED: 520,
    icon: 'Sun',
    description: 'Hand-woven kilim rugs, linen cushions, brass lanterns, charcuterie & artisanal mocktail pairings over twilight dunes.'
  },
  {
    id: 'add-wildlife',
    name: 'Arabian Oryx & Gazelle Safari Drive',
    category: 'Wildlife',
    duration: '2.5 Hours',
    priceAED: 490,
    icon: 'Compass',
    description: 'Conservationist-led silent electric 4x4 excursion tracking free-roaming desert wildlife and bird habitats.'
  },
  {
    id: 'add-kayak',
    name: 'Turquoise Lake Kayaking & Paddleboards',
    category: 'Adventure',
    duration: 'Half Day',
    priceAED: 320,
    icon: 'Waves',
    description: 'Premium wooden touring kayaks, life vests, dry bags & access to hidden water canyon inlets.'
  },
  {
    id: 'add-dinner',
    name: 'Private Chef Open-Fire Wilderness Dinner',
    category: 'Romance',
    duration: '3 Hours',
    priceAED: 850,
    icon: 'Utensils',
    description: '4-course bespoke menu cooked directly over live olive-wood embers beside your private retreat.'
  },
  {
    id: 'add-wellness',
    name: 'Breathwork & Nature Meditation Session',
    category: 'Wellness',
    duration: '75 Mins',
    priceAED: 350,
    icon: 'Wind',
    description: 'Guided grounding breathwork, acoustic sound bowls & sensory mindfulness amidst natural mountain stillness.'
  },
  {
    id: 'add-photo',
    name: 'Landscape & Night Astrophotography Masterclass',
    category: 'Adventure',
    duration: '3 Hours',
    priceAED: 600,
    icon: 'Camera',
    description: 'Master long-exposure star trails, milky way tracking, and RAW post-processing with an award-winning outdoor photographer.'
  }
];

// -------------------------------------------------------------
// 16 EXPERIENCES IN OUTDOOR LIBRARY
// -------------------------------------------------------------
export const OUTDOOR_EXPERIENCES: EmberwildExperience[] = [
  // ADVENTURE
  {
    id: 'exp-01',
    title: 'Hajar Mountain Ridge Traversing',
    category: 'ADVENTURE',
    duration: '4 Hours',
    groupSize: 'Max 6 Guests',
    priceAED: 420,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Traverse limestone knife-edge ridges with professional mountain guides.',
    fullDescription: 'An exhilarating guided ridge hike traversing ancient camel routes across the upper crest of Jebel Jais. Experience breathtaking 1,200m vertical canyon drops and panoramic perspectives reaching the Arabian Gulf.',
    included: ['Certified Guide', 'Safety Harnesses', 'Trekking Poles', 'Hydration Pack', 'Summit Snack'],
    difficulty: 'Moderate',
    timeOfDay: 'Morning'
  },
  {
    id: 'exp-02',
    title: 'Wadi Canyon Boulder Scramble',
    category: 'ADVENTURE',
    duration: '3 Hours',
    groupSize: 'Max 8 Guests',
    priceAED: 350,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Navigate hidden freshwater pools and natural granite gorges.',
    fullDescription: 'Explore deep canyon fissures in Wadi Shawkah, navigating polished limestone boulders and crystal clear wadi pools under the shade of ancient mountain flora.',
    included: ['Wadi Guide', 'Water Shoes', 'Dry Bags', 'Energy Packs'],
    difficulty: 'Moderate',
    timeOfDay: 'Morning'
  },
  {
    id: 'exp-03',
    title: 'Off-Road Desert Navigation Excursion',
    category: 'ADVENTURE',
    duration: '3.5 Hours',
    groupSize: 'Max 4 Guests',
    priceAED: 650,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Master dune crest reading and desert survival navigation skills.',
    fullDescription: 'Led by veteran desert marshals, learn authentic sand driving physics, GPS waypoint orienteering, and self-recovery techniques across the untouched dunes of Sweihan.',
    included: ['Custom 4x4 Rig', 'Deflation Tools', 'Recovery Gear', 'Desert Instructor'],
    difficulty: 'Challenging',
    timeOfDay: 'Afternoon'
  },
  {
    id: 'exp-04',
    title: 'Hatta Dam Kayaking & Water Trail',
    category: 'ADVENTURE',
    duration: '2.5 Hours',
    groupSize: 'Max 10 Guests',
    priceAED: 280,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Paddle across turquoise mountain reservoir fjords.',
    fullDescription: 'Glide peacefully across the still waters of Hatta Dam surrounded by dramatic craggy peaks. Access hidden inlets and mountain viewing platforms unreachable by land.',
    included: ['Sea Kayak', 'Carbon Paddle', 'Buoyancy Aid', 'Waterproof Case'],
    difficulty: 'Easy',
    timeOfDay: 'Dawn'
  },

  // SLOW
  {
    id: 'exp-05',
    title: 'Ancient Ghaf Forest Nature Walk',
    category: 'SLOW',
    duration: '2 Hours',
    groupSize: 'Max 8 Guests',
    priceAED: 220,
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Unhurried botanical walk under the canopy of protected national trees.',
    fullDescription: 'A gentle, contemplative walk learning about the 500-year-old Ghaf tree ecosystem, desert medicinal herbs, and the remarkable subterranean root networks that stabilize the UAE sands.',
    included: ['Botanist Guide', 'Field Journal', 'Herb Tea Tasting'],
    difficulty: 'Easy',
    timeOfDay: 'Morning'
  },
  {
    id: 'exp-06',
    title: 'Sunrise Ridge Breakfast & Brew Bar',
    category: 'SLOW',
    duration: '2 Hours',
    groupSize: 'Max 6 Guests',
    priceAED: 310,
    image: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Hand-ground single-origin coffee brewed at the sunrise peak.',
    fullDescription: 'Arrive at the mountain crest just as the first amber rays illuminate the peaks. Enjoy hand-poured Chemex brews, warm cardamom brioche, and complete acoustic silence.',
    included: ['Specialty Coffee Barista', 'Pastry Spread', 'Linen Blankets'],
    difficulty: 'Easy',
    timeOfDay: 'Dawn'
  },
  {
    id: 'exp-07',
    title: 'Silent Valley Reading & Solitude Retreat',
    category: 'SLOW',
    duration: 'Self-Paced',
    groupSize: 'Private',
    priceAED: 180,
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Curated wilderness book collection and shaded hammock glade.',
    fullDescription: 'We set up your private reading sanctuary with a suspended canvas hammock, curated nature literature, noise-canceling headphones with ambient earth recordings, and fresh botanical cordials.',
    included: ['Curated Book Set', 'Canvas Hammock', 'Fresh Cordials', 'Wool Throw'],
    difficulty: 'Easy',
    timeOfDay: 'Afternoon'
  },
  {
    id: 'exp-08',
    title: 'Mountain Orchard Hammock Afternoon',
    category: 'SLOW',
    duration: '3 Hours',
    groupSize: 'Private (2 Guests)',
    priceAED: 260,
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Relax among organic date palms, citrus blossoms, and mountain breeze.',
    fullDescription: 'Spend an unhurried afternoon in a secluded terraced orchard in Masfout. Pick your own citrus and figs, listen to natural irrigation falaj channels, and unwind completely.',
    included: ['Harvest Basket', 'Shaded Loungers', 'Herb Infusions'],
    difficulty: 'Easy',
    timeOfDay: 'Afternoon'
  },

  // NIGHT
  {
    id: 'exp-09',
    title: 'Deep Sky Astronomy & Constellation Reading',
    category: 'NIGHT',
    duration: '2.5 Hours',
    groupSize: 'Max 8 Guests',
    priceAED: 450,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'High-powered computerized telescope exploration of deep space.',
    fullDescription: 'Guided by our resident astrophysicist, explore the Andromeda Galaxy, the Ring Nebula, lunar craters, and Arabian mythological constellations in a designated dark-sky preserve.',
    included: ['Celestron 11" Schmidt-Cassegrain Telescope', 'Laser Pointer Tour', 'Hot Spiced Apple Cider'],
    difficulty: 'Easy',
    timeOfDay: 'Night'
  },
  {
    id: 'exp-10',
    title: 'The Great Hearth: Firelight & Storytelling',
    category: 'NIGHT',
    duration: '2 Hours',
    groupSize: 'Open Campfire',
    priceAED: 220,
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Acoustic storytelling and open-ember gathering beneath the stars.',
    fullDescription: 'Gather around a roaring olive-wood campfire for traditional Bedouin storytelling, desert folklore, acoustic folk guitar, and artisanal fire-roasted chestnuts.',
    included: ['Olive-Wood Hearth', 'Herbal Brews', 'Artisan Treats'],
    difficulty: 'Easy',
    timeOfDay: 'Dusk'
  },
  {
    id: 'exp-11',
    title: 'Nocturnal Astro & Star Trail Photography',
    category: 'NIGHT',
    duration: '3 Hours',
    groupSize: 'Max 5 Guests',
    priceAED: 550,
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Capture long-exposure Milky Way arcs and dune silhouettes.',
    fullDescription: 'Learn wide-aperture night photography, intervalometer setup for star-trail composites, and foreground light painting techniques under the guidance of a published pro.',
    included: ['Carbon Fiber Tripods', 'Lens Heaters', 'Light Painting Wands', 'RAW Workflow Guide'],
    difficulty: 'Moderate',
    timeOfDay: 'Night'
  },
  {
    id: 'exp-12',
    title: 'Candlelit Open-Flame Dune Dining',
    category: 'NIGHT',
    duration: '3 Hours',
    groupSize: 'Private (2 Guests)',
    priceAED: 890,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Private multi-course dinner prepared over olive wood embers.',
    fullDescription: 'A table set upon the crest of a private sand dune illuminated by 50 beeswax torches. Savor slow-roasted lamb shank, ember-charred wild mushrooms, and pomegranate reductions.',
    included: ['Private Chef', '4-Course Tasting Menu', 'Beverage Pairings', 'Torches & Blankets'],
    difficulty: 'Easy',
    timeOfDay: 'Dusk'
  },

  // WELLNESS
  {
    id: 'exp-13',
    title: 'Pranayama Breathwork at Mountain Ridge',
    category: 'WELLNESS',
    duration: '75 Mins',
    groupSize: 'Max 8 Guests',
    priceAED: 320,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Conscious diaphragmatic breathing in pure high-altitude mountain air.',
    fullDescription: 'Harness the revitalizing power of mountain oxygen. Learn diaphragmatic rhythms and box breathing practices that calm the nervous system and dissolve urban mental fatigue.',
    included: ['Organic Cork Yoga Mat', 'Eye Pillow', 'Warm Herbal Tonic'],
    difficulty: 'Easy',
    timeOfDay: 'Dawn'
  },
  {
    id: 'exp-14',
    title: 'Sunset Dune Yoga & Vinyasa Flow',
    category: 'WELLNESS',
    duration: '60 Mins',
    groupSize: 'Max 10 Guests',
    priceAED: 280,
    image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Flow through sun salutations facing the crimson desert sunset.',
    fullDescription: 'Practice mindful movement with barefoot grounding on warm desert sands as the sky transitions through shades of amber, violet, and indigo.',
    included: ['Eco Mat', 'Aromatherapy Sprays', 'Infused Coconut Water'],
    difficulty: 'Easy',
    timeOfDay: 'Dusk'
  },
  {
    id: 'exp-15',
    title: 'Nature Meditation & Sensory Immersion',
    category: 'WELLNESS',
    duration: '60 Mins',
    groupSize: 'Max 6 Guests',
    priceAED: 250,
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Acoustic mindfulness guided by forest sounds and Tibetan bowls.',
    fullDescription: 'Tune your senses to the subtle frequencies of nature: rustling leaves, canyon breezes, and melodic bird calls harmonized with resonant Tibetan brass singing bowls.',
    included: ['Meditation Cushion', 'Acoustic Bowls Guide', 'Mindfulness Journal'],
    difficulty: 'Easy',
    timeOfDay: 'Morning'
  },
  {
    id: 'exp-16',
    title: 'Nordic Woodfire Sauna & Cold Dip Ritual',
    category: 'WELLNESS',
    duration: '90 Mins',
    groupSize: 'Private (2-4 Guests)',
    priceAED: 480,
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Contrast thermal therapy overlooking panoramic mountain ridges.',
    fullDescription: 'Alternate between a 90°C cedar barrel sauna with eucalyptus steam and a 10°C fresh mountain plunge pool for deep vascular stimulation and muscle recovery.',
    included: ['Cedar Sauna Access', 'Cold Dip Basin', 'Linen Bathrobes', 'Electrolyte Infusion'],
    difficulty: 'Moderate',
    timeOfDay: 'Afternoon'
  }
];

// -------------------------------------------------------------
// LIVE WILDERNESS OPERATIONS TELEMETRY (Demo Data)
// -------------------------------------------------------------
export const EMBERWILD_OPERATIONS = {
  currentOccupancy: '87.5%',
  activeGuests: 58,
  arrivalsToday: 14,
  departuresToday: 11,
  availableStays: 3,
  activeExperiencesBooked: 29,
  weatherStatus: 'Clear Night Sky · 21°C · Wind 8 km/h NW',
  maintenanceStatus: 'All 24 Stays 100% Operational',
  firepitSafetyCondition: 'Low Fire Hazard · Permitted',
  lastSyncTime: '2 mins ago · Real-Time Sensor Node Active'
};

// -------------------------------------------------------------
// SMART PACKING RECOMMENDATIONS DATABASE
// -------------------------------------------------------------
export const PACKING_DATABASE = {
  essentials: [
    { name: 'Sturdy Hiking Boots / Trail Shoes', reason: 'Rugged terrain & rocky ridge paths' },
    { name: 'Warm Insulating Fleece or Down Jacket', reason: 'Desert & mountain temperatures drop rapidly after dark' },
    { name: 'High-Lumen Rechargeable Headlamp (with Red Mode)', reason: 'Night stargazing & unlit camp pathways' },
    { name: 'Reusable Stainless Steel Water Canteen', reason: 'Eco-friendly hydration across all trailheads' },
    { name: 'Wide-Brim Sun Hat & UV Sunglasses', reason: 'High-altitude daytime sun protection' },
    { name: 'Natural Mineral Sunscreen & Lip Balm', reason: 'Dry desert wind & UV defense' }
  ],
  desertAddons: [
    { name: 'Breathable Cotton Scarf / Shemagh', reason: 'Windblown sand protection' },
    { name: 'Compact Binoculars', reason: 'Distant wildlife & oryx spotting' },
    { name: 'Sand-Resistant Camera Pouch', reason: 'Protect electronics from fine particles' }
  ],
  mountainAddons: [
    { name: 'Telescopic Trekking Poles', reason: 'Stability on steep scree trails' },
    { name: 'Thermal Base Layer (Merino Wool)', reason: '1,400m altitude nighttime chill' },
    { name: 'Light Windproof Shell', reason: 'Canyon gust protection' }
  ],
  waterAddons: [
    { name: 'Quick-Dry Water Shoes', reason: 'Wadi rock walking & freshwater pools' },
    { name: 'Dry Bag (15L)', reason: 'Keep valuables safe during kayaking' },
    { name: 'Microfiber Pack Towel', reason: 'Fast drying after wild swimming' }
  ]
};
