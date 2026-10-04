export interface Destination {
  id: string;
  name: string;
  country: string;
  region: 'Asia' | 'Europe' | 'Middle East' | 'Americas' | 'Africa & Islands' | 'Oceania' | 'Polar';
  description: string;
  bestSeason: string;
  priceFromAED: number;
  duration: string;
  flightTimeFromDXB: string;
  directEmirates: boolean;
  visaForUAEResidents: string;
  style: string;
  highlights: string[];
  luxuryHotels: string[];
  image: string;
  gallery: string[];
  climate: string;
}

export interface TravelPackage {
  id: string;
  title: string;
  destination: string;
  region: string;
  durationNights: number;
  priceFromAED: number;
  hotelCategory: string;
  flightClass: 'First Class Emirates / Etihad' | 'Business Class' | 'Private Jet Charter (Optional)';
  included: string[];
  excluded: string[];
  transfersIncluded: boolean;
  flightsIncluded: boolean;
  bestFor: string;
  image: string;
  itinerary: { day: number; title: string; desc: string; meals: string; activity: string }[];
  featured?: boolean;
}

export interface LuxuryHotel {
  id: string;
  name: string;
  destination: string;
  country: string;
  category: string;
  pricePerNightAED: number;
  roomType: string;
  amenities: string[];
  rating: number;
  signatureExperience: string;
  image: string;
  exclusivePerks: string[];
}

export interface PrivateExperience {
  id: string;
  title: string;
  destination: string;
  priceAED: number;
  duration: string;
  category: 'Aviation' | 'Nautical' | 'Culinary' | 'Wilderness' | 'Wellness';
  description: string;
  included: string[];
  image: string;
  badge?: string;
}

export interface PrivateJetOption {
  category: string;
  model: string;
  pax: string;
  range: string;
  hourlyRateAED: number;
  features: string[];
  image: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  author: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface TravelReview {
  id: string;
  clientName: string;
  city: string;
  tripTaken: string;
  rating: number;
  date: string;
  review: string;
  avatar: string;
  verifiedBooking: boolean;
}

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: 'dest-maldives',
    name: 'Maldives Private Atolls & Overwater Sanctuaries',
    country: 'Maldives',
    region: 'Africa & Islands',
    description: 'Secluded multi-bedroom water reserves, private seaplane transfers, bioluminescent sandbars, and Michelin-starred underwater cellars in the pristine Baa and Noonu Atolls.',
    bestSeason: 'November to May (Year-round tropical)',
    priceFromAED: 24500,
    duration: '5 to 8 Nights',
    flightTimeFromDXB: '4h 10m Direct (Emirates / FlyDubai)',
    directEmirates: true,
    visaForUAEResidents: '30-Day Free Visa on Arrival',
    style: 'Overwater Luxury & Coral Reef Sanctuary',
    highlights: [
      'Private 4-bedroom water reserve with retractable roof',
      'Champagne dolphin cruise on 85ft Sunseeker yacht',
      'Underwater wine cellar tasting with master sommelier',
      'Private sandbank candlelit dining under the stars'
    ],
    luxuryHotels: ['Soneva Jani', 'One&Only Reethi Rah', 'The Ritz-Carlton Fari Islands', 'Cheval Blanc Randheli'],
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop'
    ],
    climate: '28°C – 31°C Tropical Breeze'
  },
  {
    id: 'dest-switzerland',
    name: 'Swiss Alpine Luxury & Glacier Express',
    country: 'Switzerland',
    region: 'Europe',
    description: 'Panoramic Excellence Class train journeys, private ski-in/ski-out chalets with dedicated chefs, and thermal alpine spas nestled between St. Moritz, Zermatt, and Lake Lucerne.',
    bestSeason: 'Dec–Mar (Winter Ski) / Jun–Sep (Alpine Summer)',
    priceFromAED: 38900,
    duration: '7 to 10 Nights',
    flightTimeFromDXB: '6h 35m Direct to Zurich / Geneva',
    directEmirates: true,
    visaForUAEResidents: 'Schengen Visa (Concierge Fast-Track)',
    style: 'Alpine Chalet & Panoramic Luxury Rail',
    highlights: [
      'Exclusively chartered Glacier Express panoramic carriage',
      'Helicopter Matterhorn summit fly-by with glacier landing',
      'Private thermal spa buyout in Vals & Bad Ragaz',
      'Michelin 3-Star private chalet dining in St. Moritz'
    ],
    luxuryHotels: ['Badrutt’s Palace St. Moritz', 'The Chedi Andermatt', 'The Omnia Zermatt', 'Bürgenstock Resort'],
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop'
    ],
    climate: '-2°C to 8°C (Winter) / 18°C to 24°C (Summer)'
  },
  {
    id: 'dest-amalfi',
    name: 'Amalfi Coast, Capri & Tuscan Private Estates',
    country: 'Italy',
    region: 'Europe',
    description: 'Private Riva motorboat charters between Positano and Capri, clifftop palazzo retreats, and vintage Ferrari drives through Chianti vineyards.',
    bestSeason: 'May to October',
    priceFromAED: 34500,
    duration: '7 to 9 Nights',
    flightTimeFromDXB: '6h 15m Direct to Rome / Milan',
    directEmirates: true,
    visaForUAEResidents: 'Schengen Visa Fast-Track',
    style: 'Mediterranean Glamour & Clifftop Estates',
    highlights: [
      'Private Riva Aquarama charter around Faraglioni rocks',
      'Helicopter transfer from Naples to Positano clifftop helipad',
      'Private after-hours tour of Pompeii with head archaeologist',
      'Wine harvest and truffle tasting at 14th-century Tuscan castle'
    ],
    luxuryHotels: ['Le Sirenuse Positano', 'Belmond Hotel Caruso Ravello', 'Capri Palace Jumeirah', 'Rosewood Castiglion del Bosco'],
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?q=80&w=1200&auto=format&fit=crop'
    ],
    climate: '22°C – 29°C Mediterranean Sun'
  },
  {
    id: 'dest-japan',
    name: 'Kyoto Ryokans, Tokyo Penthouse & Mt. Fuji Helitours',
    country: 'Japan',
    region: 'Asia',
    description: 'Centuries-old private onsen ryokans in Kyoto, imperial tea ceremonies with grandmasters, sushi omakase with 3-Michelin star chefs, and high-altitude Fuji helicopter expeditions.',
    bestSeason: 'Mar–May (Cherry Blossom) / Oct–Dec (Autumn Foliage)',
    priceFromAED: 46000,
    duration: '8 to 12 Nights',
    flightTimeFromDXB: '9h 15m Direct to Tokyo Haneda / Narita',
    directEmirates: true,
    visaForUAEResidents: 'eVisa (3-day processing)',
    style: 'Heritage Zen & Ultra-Modern Gastronomy',
    highlights: [
      'Private tea pavilion ceremony with 15th-generation Urasenke master',
      'First-class Shinkansen bullet train Gran Class cabin',
      'Private temple illumination and meditation in Kyoto after hours',
      'Tokyo helicopter skyline transit and Ginza private shopping suite'
    ],
    luxuryHotels: ['Aman Tokyo', 'Hoshinoya Kyoto', 'Four Seasons Hotel Kyoto', 'The Ritz-Carlton Nikko'],
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1528164344705-475426879c0d?q=80&w=1200&auto=format&fit=crop'
    ],
    climate: '14°C – 22°C Crisp Seasonal'
  },
  {
    id: 'dest-serengeti',
    name: 'Serengeti & Ngorongoro Private Tented Safari',
    country: 'Tanzania & Kenya',
    region: 'Africa & Islands',
    description: 'Exclusive-use luxury mobile safari camps, private bush planes, sunrise hot air balloon safaris over the Great Migration, and Maasai warrior guided bush walks.',
    bestSeason: 'July to October (Great Migration) / Jan–Feb (Calving)',
    priceFromAED: 52000,
    duration: '7 to 10 Nights',
    flightTimeFromDXB: '5h 15m Direct to Dar es Salaam / Nairobi',
    directEmirates: true,
    visaForUAEResidents: 'Instant eVisa on Arrival',
    style: 'Untamed Safari & Private Aviation',
    highlights: [
      'Daily private bush flights landing on private camp airstrips',
      'Hot air balloon dawn ascent with champagne bush breakfast',
      'Private photographic vehicle equipped with pro camera rigs',
      'Direct tracking of Big Five with veteran private rangers'
    ],
    luxuryHotels: ['Singita Sasakwa Lodge', 'Four Seasons Safari Lodge Serengeti', 'andBeyond Ngorongoro Crater Lodge', 'Elewana Migration Camp'],
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop'
    ],
    climate: '24°C Daytime / 14°C Savanna Night'
  },
  {
    id: 'dest-monaco',
    name: 'French Riviera, Monaco & Superyacht Haven',
    country: 'France & Monaco',
    region: 'Europe',
    description: 'VIP Grand Prix balcony suites, private helicopter hops between Nice and Monte-Carlo, Michelin dining at Le Louis XV, and private mega-yacht days in Saint-Tropez.',
    bestSeason: 'May to September',
    priceFromAED: 41000,
    duration: '6 to 8 Nights',
    flightTimeFromDXB: '6h 50m Direct to Nice (Emirates A380)',
    directEmirates: true,
    visaForUAEResidents: 'Schengen Fast-Track',
    style: 'Superyacht Glamour & Haute Gastronomy',
    highlights: [
      '7-minute Monaco Heli-Shuttle direct from Nice airport tarmac',
      'Private 40m yacht charter to Pampelonne Beach Saint-Tropez',
      'VIP table reservations at Casino de Monte-Carlo private salons',
      'Private perfume compounding workshop in Grasse with master nose'
    ],
    luxuryHotels: ['Hôtel de Paris Monte-Carlo', 'Grand-Hôtel du Cap-Ferrat Four Seasons', 'Hotel du Cap-Eden-Roc', 'Cheval Blanc Saint-Tropez'],
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop'
    ],
    climate: '24°C – 30°C Mediterranean Breeze'
  }
];

export const LUXURY_PACKAGES_DATA: TravelPackage[] = [
  {
    id: 'pkg-maldives-royal',
    title: 'The Soneva Sovereign: Maldives Ultra-Luxe Water Reserve',
    destination: 'Maldives Private Atoll',
    region: 'Africa & Islands',
    durationNights: 7,
    priceFromAED: 68500,
    hotelCategory: '5-Star Ultra-Luxury Island Sanctuary',
    flightClass: 'First Class Emirates / Etihad',
    included: [
      'Round-trip First Class Flights (Emirates DXB–MLE) with Chauffeur',
      'VIP CIP Lounge Meet & Assist at Male Airport',
      'Private seaplane charter direct to Soneva Jani lagoon',
      '7 Nights in 1-Bedroom Water Reserve with Private Pool & Water Slide',
      'Dedicated 24/7 Mr./Ms. Friday Private Butler',
      'Daily Michelin-curated breakfast, lunch & dinner',
      'Unlimited vintage wine pairings from resort sommelier',
      'Complimentary 60-minute daily Ayurvedic spa treatments for two',
      'Private stargazing dinner with resident astronomer'
    ],
    excluded: [
      'Personal boutique shopping',
      'Deep-sea scuba certification courses'
    ],
    transfersIncluded: true,
    flightsIncluded: true,
    bestFor: 'Couples & Honeymooners seeking absolute privacy',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    itinerary: [
      { day: 1, title: 'VIP Arrival & Water Reserve Check-In', desc: 'Emirates First Class touch down at Male. CIP fast-track to private Soneva VIP seaplane. Arrive at your overwater sanctuary with personalized welcome champagne.', meals: 'Dinner Included', activity: 'Sunset villa orientation & stargazing' },
      { day: 2, title: 'Coral Reef Snorkel & Marine Biologist Dive', desc: 'Morning private guided excursion to Turtle Point. Afternoon bespoke spa ritual in overwater pavilion.', meals: 'All Inclusive', activity: 'Private reef safari' },
      { day: 3, title: 'Private Sandbank Castaway Lunch', desc: 'Speedboat transfer to a deserted powdery sandbank for a private chef barbecue prepared on the spot with chilled Dom Pérignon.', meals: 'All Inclusive', activity: 'Castaway private island picnic' },
      { day: 4, title: 'Cinema Paradiso & Overwater Starlight Dining', desc: 'Relaxation day. In the evening, enjoy private overwater screening of your favorite film with artisanal popcorn and Japanese tapas.', meals: 'All Inclusive', activity: 'Private overwater cinema' },
      { day: 5, title: 'Deep-Sea Dolphin Sunset Cruise', desc: 'Board the resort’s private 85ft motor yacht for sunset dolphin watching with canapés and vintage champagne.', meals: 'All Inclusive', activity: 'Luxury yacht cruise' },
      { day: 6, title: 'Ayurvedic Wellness & Chef’s Table', desc: 'Holistic wellness immersion followed by an exclusive 7-course tasting menu paired with rare grand cru vintages.', meals: 'All Inclusive', activity: 'Michelin-starred tasting table' },
      { day: 7, title: 'Private Seaplane Departure & DXB Return', desc: 'Champagne floating breakfast in your private infinity pool. Afternoon private seaplane transfer to Male for First Class return to Dubai.', meals: 'Breakfast Included', activity: 'Chauffeured return to UAE residence' }
    ]
  },
  {
    id: 'pkg-swiss-grandeur',
    title: 'The Imperial Alpine: St. Moritz, Zermatt & Glacier Express',
    destination: 'Switzerland (Zurich – St. Moritz – Zermatt)',
    region: 'Europe',
    durationNights: 8,
    priceFromAED: 84000,
    hotelCategory: 'Palatial 5-Star Historic Hotels & Chalets',
    flightClass: 'First Class Emirates / Etihad',
    included: [
      'Round-trip First Class Flights (DXB–ZRH / GVA–DXB)',
      'VIP Tarmac Meet & Greet with Mercedes Maybach Chauffeur',
      'Excellence Class Glacier Express Private Compartment',
      '4 Nights at Badrutt’s Palace St. Moritz (Signature Suite)',
      '4 Nights at The Omnia Zermatt (Matterhorn View Suite)',
      'Private helicopter flight around the Matterhorn peak',
      'Private ski instructor / alpine hiking guide for duration',
      'Daily Michelin-starred dining experiences included',
      'Schengen VIP fast-track concierge assistance in UAE'
    ],
    excluded: [
      'Ski gear purchase (rental included)',
      'High-altitude alpine climbing permits'
    ],
    transfersIncluded: true,
    flightsIncluded: true,
    bestFor: 'Luxury Skiers, Winter Romance & Panoramic Rail Connoisseurs',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    itinerary: [
      { day: 1, title: 'First Class Touchdown in Zurich & Maybach Transfer', desc: 'Arrive in Zurich via Emirates First Class. Private Maybach transfer to St. Moritz through scenic alpine passes.', meals: 'Dinner Included', activity: 'Palace welcome dinner' },
      { day: 2, title: 'Corviglia Private Skiing & Alpine Fondue', desc: 'Private ski guide access to Corviglia slopes. Lunch at private mountain club with traditional truffle fondue.', meals: 'All Inclusive', activity: 'Private ski guiding' },
      { day: 3, title: 'Helicopter Alpine Tour & Thermal Spa', desc: 'Private helicopter flight over the Bernina Massif followed by exclusive buyout of Palace thermal suite.', meals: 'All Inclusive', activity: 'Helicopter flight & wellness' },
      { day: 4, title: 'Glacier Express Excellence Class to Zermatt', desc: 'Board the world’s most luxurious train in a private 20-seat carriage with 5-course wine pairing journey through 291 bridges.', meals: 'All Inclusive', activity: 'Glacier Express rail journey' },
      { day: 5, title: 'Matterhorn Summit Fly-By & Glacier Landing', desc: 'Helicopter ascent around the Matterhorn summit with landing on the Theodul Glacier for champagne toast.', meals: 'All Inclusive', activity: 'Matterhorn glacier landing' },
      { day: 6, title: 'Zermatt Village & Private Raclette Chalet', desc: 'Horse-drawn carriage tour of car-free Zermatt followed by dining at an authentic 18th-century private chalet.', meals: 'All Inclusive', activity: 'Private chalet dinner' },
      { day: 7, title: 'Gornergrat Panoramic Rail & Farewell Gala', desc: 'Cogwheel railway ascent to 3,089m with 360-degree panorama of 29 four-thousander peaks.', meals: 'All Inclusive', activity: 'Gornergrat alpine summit' },
      { day: 8, title: 'Geneva Maybach Transfer & Emirates Return', desc: 'Private chauffeur transfer to Geneva airport. VIP lounge access and Emirates First Class flight back to Dubai.', meals: 'Breakfast Included', activity: 'First class return flight' }
    ]
  },
  {
    id: 'pkg-japan-zen',
    title: 'The Imperial Shogun: Tokyo, Kyoto & Aman Onsen Sanctuary',
    destination: 'Japan (Tokyo – Kyoto – Hakone)',
    region: 'Asia',
    durationNights: 10,
    priceFromAED: 96000,
    hotelCategory: 'Ultra-Luxury Ryokan & 5-Star Tokyo Penthouse',
    flightClass: 'First Class Emirates / Etihad',
    included: [
      'Round-trip First Class Flights (DXB–HND / NRT–DXB)',
      'VIP Fast-Track Immigration & Private Alphard Chauffeur',
      '4 Nights in Aman Tokyo (Corner Suite overlooking Imperial Gardens)',
      '3 Nights in Hoshinoya Kyoto (Riverside Traditional Villa)',
      '3 Nights in Gora Kadan Hakone (Private Onsen Suite with Garden)',
      'Shinkansen Gran Class Bullet Train Transfers',
      '3-Michelin Star Sushi Omakase at Sukiyabashi Jiro / Ginza Kojyu',
      'Private Geisha banquet dinner in historic Gion teahouse',
      'Private helicopter tour around Mount Fuji'
    ],
    excluded: [
      'Personal antiques purchases in Kyoto',
      'International travel insurance'
    ],
    transfersIncluded: true,
    flightsIncluded: true,
    bestFor: 'Culture Enthusiasts, Michelin Gourmands & Zen Luxury Travelers',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    itinerary: [
      { day: 1, title: 'First Class Arrival in Tokyo & Aman Penthouse', desc: 'Arrival at Tokyo Haneda. Private escort to Aman Tokyo. Evening sake tasting overlooking Tokyo Skytree.', meals: 'Dinner Included', activity: 'Aman Tokyo suite check-in' },
      { day: 2, title: 'Ginza Private Shopping & 3-Star Sushi Omakase', desc: 'Exclusive VIP access to Ginza high-jewelry houses followed by private 18-course sushi omakase counter.', meals: 'All Inclusive', activity: 'Michelin sushi dining' },
      { day: 3, title: 'Helicopter Fly-By of Mount Fuji & Hakone Onsen', desc: 'Private helicopter flight across Lake Ashi and Mount Fuji, landing in Hakone for private hot spring retreat.', meals: 'All Inclusive', activity: 'Mt Fuji helicopter flight' },
      { day: 4, title: 'Shinkansen Gran Class Bullet Train to Kyoto', desc: 'Board the Gran Class bullet train to Kyoto. Wooden boat transfer up Oi River to Hoshinoya Kyoto.', meals: 'All Inclusive', activity: 'Gran class bullet train' },
      { day: 5, title: 'Private Bamboo Grove & Temple Meditation', desc: 'Early morning private opening of Arashiyama Bamboo Grove before public hours, guided by Zen monk.', meals: 'All Inclusive', activity: 'Private temple meditation' },
      { day: 6, title: 'Gion Exclusive Geisha & Kaiseki Dinner', desc: 'Exclusive access to a centuries-old tea house in Gion for private musical performance and 10-course Kaiseki.', meals: 'All Inclusive', activity: 'Private Gion Geisha banquet' },
      { day: 7, title: 'Kyoto Swordcraft & Artisanal Gold Leaf Studio', desc: 'Hands-on private masterclass with certified master katana swordsmith and gold leaf artisan.', meals: 'All Inclusive', activity: 'Master artisan atelier' },
      { day: 8, title: 'Nara Deer Park & Ancient Cedar Forest', desc: 'Private chauffeur excursion to Todaiji temple and private tea ceremony in ancient cedar grove.', meals: 'All Inclusive', activity: 'Private Nara tour' },
      { day: 9, title: 'Return to Tokyo & Roppongi Arts Night', desc: 'Bullet train back to Tokyo. Private after-hours tour of Mori Art Museum and farewell dinner at Ginza Ukai-Tei.', meals: 'All Inclusive', activity: 'Private art museum tour' },
      { day: 10, title: 'First Class Return Flight to Dubai (DXB)', desc: 'Morning private tea ceremony in Aman lounge. VIP escort to Haneda for Emirates First Class suite flight home.', meals: 'Breakfast Included', activity: 'First class return flight' }
    ]
  }
];

export const LUXURY_HOTELS_DATA: LuxuryHotel[] = [
  {
    id: 'hotel-soneva-jani',
    name: 'Soneva Jani Overwater Reserves',
    destination: 'Noonu Atoll',
    country: 'Maldives',
    category: 'Ultra-Luxury Island Resort',
    pricePerNightAED: 14500,
    roomType: '1-Bedroom Water Reserve with Pool & Slide',
    amenities: ['Private Infinity Pool', 'Retractable Roof for Stargazing', 'Private Water Slide into Lagoon', '24/7 Butler Service', 'Overwater Cinema'],
    rating: 4.98,
    signatureExperience: 'Retractable master bedroom ceiling that opens to the night sky at the touch of a button.',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop',
    exclusivePerks: ['Free seaplane upgrade for 7+ night stays', 'Complimentary daily 60min spa treatment', 'Private beach dinner for two']
  },
  {
    id: 'hotel-badrutts-palace',
    name: 'Badrutt’s Palace Hotel',
    destination: 'St. Moritz',
    country: 'Switzerland',
    category: 'Historic 5-Star Palace & Alpine Resort',
    pricePerNightAED: 9800,
    roomType: 'Beau Rivage Suite with Lake View',
    amenities: ['Palace Spa & Heated Infinity Pool', 'Rolls-Royce Chauffeur Transfer', 'Ski-in / Ski-out Concierge', 'Matsuhisa Japanese Restaurant', 'King’s Social House'],
    rating: 4.95,
    signatureExperience: 'Vintage Rolls-Royce Phantom station transfer followed by private fondue in a converted 19th-century wine vault.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop',
    exclusivePerks: ['Complimentary bottle of Krug champagne on arrival', 'VIP ski lift priority passes', 'Guaranteed late 4 PM checkout']
  },
  {
    id: 'hotel-aman-tokyo',
    name: 'Aman Tokyo Penthouse',
    destination: 'Otemachi, Tokyo',
    country: 'Japan',
    category: 'Ultra-Luxury Urban Sanctuary',
    pricePerNightAED: 11200,
    roomType: 'Aman Suite with Imperial Palace Garden View',
    amenities: ['30m Sky High Heated Pool', 'Aman Onsen Spa Suites', 'Traditional Japanese Furo Bathtubs', 'Private Wine & Cigar Cellar', 'Musashi Sushi Bar'],
    rating: 4.97,
    signatureExperience: 'High-altitude morning yoga in a 33-floor high atrium with uninterrupted views of Mount Fuji.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
    exclusivePerks: ['Exclusive priority reservation at 3-star sushi omakase', 'Daily complimentary Japanese breakfast', 'Complimentary round-trip airport limousine']
  },
  {
    id: 'hotel-le-sirenuse',
    name: 'Le Sirenuse Positano',
    destination: 'Positano, Amalfi Coast',
    country: 'Italy',
    category: '5-Star Clifftop Luxury Boutique',
    pricePerNightAED: 12500,
    roomType: 'Sea View Suite with Private Balcony',
    amenities: ['Franco’s Bar VIP Priority Table', 'Private Riva Boat Excursions', 'La Sponda Michelin Restaurant', 'Aveda Wellness Spa', 'Heated Lemon-Grove Pool'],
    rating: 4.96,
    signatureExperience: 'Dining by the light of 400 candles under bougainvillea arches at Michelin-starred La Sponda.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
    exclusivePerks: ['Complimentary 2-hour sunset cruise on private wooden motorboat', 'Daily Italian breakfast on private balcony', 'Welcome bottle of Franciacorta']
  },
  {
    id: 'hotel-singita-sasakwa',
    name: 'Singita Sasakwa Lodge',
    destination: 'Grumeti Reserve, Serengeti',
    country: 'Tanzania',
    category: 'Private Safari Manor & Wildlife Sanctuary',
    pricePerNightAED: 18500,
    roomType: 'Cottage Suite with Private Heated Plunge Pool',
    amenities: ['Private Bush Airstrip Access', 'Custom 4x4 Safari Vehicles', 'Singita Premier Wine Cellar', 'Tennis Courts & Equestrian Center', 'Private Bush Dinners'],
    rating: 4.99,
    signatureExperience: 'Panoramic sunset cocktail reception overlooking the endless Serengeti plains from an Edwardian manor bluff.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop',
    exclusivePerks: ['All safari game drives and private vehicle included', 'Full board with vintage wine cellar collection', 'Complimentary laundry and bush concierge']
  },
  {
    id: 'hotel-hotel-de-paris',
    name: 'Hôtel de Paris Monte-Carlo',
    destination: 'Place du Casino, Monaco',
    country: 'Monaco',
    category: 'Palatial 5-Star Landmark',
    pricePerNightAED: 15800,
    roomType: 'Princess Grace Suite with Sea & Casino View',
    amenities: ['Direct Access to Thermes Marins Spa', 'Le Louis XV Alain Ducasse (3 Michelin Stars)', 'Private Beach Access at Monte-Carlo Beach', 'Private Wine Cellar with 350,000 Bottles'],
    rating: 4.94,
    signatureExperience: 'Private after-hours tour of the world’s largest hotel wine cellar followed by tasting of 1982 Château Margaux.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
    exclusivePerks: ['Helicopter transfer from Nice airport tarmac to Monaco helipad', 'VIP table at Le Bar Américain', 'Complimentary access to private casino gaming salons']
  }
];

export const PRIVATE_EXPERIENCES_DATA: PrivateExperience[] = [
  {
    id: 'exp-matterhorn-heli',
    title: 'Matterhorn Summit Helicopter Champagne Landing',
    destination: 'Zermatt, Switzerland',
    priceAED: 18500,
    duration: '3.5 Hours',
    category: 'Aviation',
    description: 'Private charter Eurocopter ascending past the iconic North Face of the Matterhorn, landing on the Monte Rosa glacier at 3,800m for caviar and vintage Dom Pérignon served on the ice.',
    included: ['Private helicopter charter for up to 4 guests', 'Glacier mountain guide & safety crew', 'Vintage champagne & Sevruga caviar service', 'High-definition 4K aerial video documentation'],
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop',
    badge: 'Signature VIP'
  },
  {
    id: 'exp-riva-amalfi',
    title: 'Private Riva Yacht Capri & Faraglioni Sunset Cruise',
    destination: 'Amalfi Coast & Capri, Italy',
    priceAED: 14200,
    duration: 'Full Day (8 Hours)',
    category: 'Nautical',
    description: 'Cruise the crystalline Tyrrhenian waters on a pristine 38ft Riva Rivamare yacht. Swim in the secluded Green Grotto, dock at Capri Marina Grande, and dine at clifftop Il Riccio.',
    included: ['Private yacht charter with dedicated captain & deckhand', 'Chilled Prosecco, fresh Amalfi fruits & gourmet appetizers', 'Snorkeling equipment & Seabob underwater scooters', 'Priority reservation at Il Riccio Beach Club'],
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
    badge: 'Trending'
  },
  {
    id: 'exp-jiro-sushi',
    title: 'Private 3-Star Michelin Sushi Counter Buyout',
    destination: 'Ginza, Tokyo, Japan',
    priceAED: 22000,
    duration: '3 Hours',
    category: 'Culinary',
    description: 'Complete private buyout of an ultra-exclusive 8-seat Ginza sushi counter for your party. Hand-selected seasonal seafood procured at dawn from Toyosu market by the master chef.',
    included: ['Exclusive 8-seat restaurant buyout', '22-course bespoke sushi omakase menu', 'Curated rare seasonal sake pairings by grand sommelier', 'Private translator and culinary historian guide'],
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
    badge: 'Exclusive'
  },
  {
    id: 'exp-balloon-serengeti',
    title: 'Serengeti Dawn Balloon Safari & Bush Breakfast',
    destination: 'Serengeti National Park, Tanzania',
    priceAED: 9800,
    duration: '4 Hours',
    category: 'Wilderness',
    description: 'Drift silently over the acacia canopy as the African sun rises over millions of migrating wildebeest and zebras. Touch down on the savanna for an elegant silver-service breakfast.',
    included: ['Private basket hot air balloon flight', 'Full English silver-service breakfast cooked on savanna coals', 'Vintage Moët & Chandon champagne celebration', 'Commemorative flight certificate signed by pilot'],
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop',
    badge: 'Bucket List'
  },
  {
    id: 'exp-submarine-maldives',
    title: 'Deep Ocean Submarine Dive & Coral Trench Exploration',
    destination: 'Baa Atoll, Maldives',
    priceAED: 28500,
    duration: '2.5 Hours',
    category: 'Nautical',
    description: 'Descend to 150 meters beneath the Indian Ocean inside a state-of-the-art Triton 3300/3 personal submarine to explore uncharted coral canyons and bioluminescent marine ecosystems.',
    included: ['Private submarine dive for 2 guests with certified sub pilot', 'Pre-dive briefing and oceanographic briefing with marine biologist', 'Underwater 4K footage and personalized dive map', 'Champagne celebration upon surfacing'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    badge: 'Ultra-Exclusive'
  },
  {
    id: 'exp-f1-monaco-yacht',
    title: 'Monaco Grand Prix VIP Superyacht Trackside Hospitality',
    destination: 'Port Hercule, Monaco',
    priceAED: 65000,
    duration: '3-Day Race Weekend',
    category: 'Aviation',
    description: 'Trackside superyacht mooring in Zone 1 of Port Hercule for the Monaco Grand Prix. Front-row views of the chicane, open champagne bar, and VIP driver after-party invitations.',
    included: ['3-day superyacht hospitality pass with trackside views', 'All-day gourmet catering by Michelin-starred chef team', 'Unlimited Dom Pérignon, Belvedere, and fine wines', 'Live commentary, giant video wall, and driver Q&A session'],
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
    badge: 'VIP Event'
  }
];

export const PRIVATE_JET_FLEET: PrivateJetOption[] = [
  {
    category: 'Midsize Jet',
    model: 'Cessna Citation Latitude',
    pax: 'Up to 8 Passengers',
    range: '5,000 km (Dubai to Maldives / Cairo / Athens)',
    hourlyRateAED: 18500,
    features: ['Stand-up flat floor cabin', 'High-speed Ka-band satellite Wi-Fi', 'Complimentary luxury catering & bar', 'Direct tarmac boarding at Dubai DWC'],
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop'
  },
  {
    category: 'Super Midsize Jet',
    model: 'Bombardier Challenger 3500',
    pax: 'Up to 9 Passengers',
    range: '6,300 km (Dubai to London / Zurich / Geneva / Paris)',
    hourlyRateAED: 26500,
    features: ['Zero-gravity patented Nuage seats', 'Lowest cabin altitude in class for zero jetlag', 'Full hot galley & private aft lavatory', 'Pet-friendly cabin configuration'],
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop'
  },
  {
    category: 'Ultra Long Range Jet',
    model: 'Gulfstream G650ER',
    pax: 'Up to 14 Passengers',
    range: '13,890 km (Dubai to Tokyo / New York / Los Angeles / Sydney Direct)',
    hourlyRateAED: 44000,
    features: ['4 separate living zones with private master stateroom', '100% fresh air replenishment every 2 minutes', 'High-definition entertainment suites', 'Dedicated private flight attendant & personal chef'],
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop'
  }
];

export const UAE_DEPARTURE_SERVICES = [
  {
    title: 'DXB / DWC Private Terminal VIP Chauffeur',
    description: 'Chauffeured Rolls-Royce Phantom or Mercedes-Maybach transfer from your doorstep anywhere in Dubai, Abu Dhabi, or Sharjah directly to the VIP private jet terminal tarmac.',
    badge: 'Included in All VIP Itineraries'
  },
  {
    title: 'Ahlan First Class Lounge Meet & Assist at DXB Terminal 3',
    description: 'Personal concierge greeting at curbside, baggage handling, dedicated private passport control counter, and direct buggy escort to Emirates First Class Boarding Gate.',
    badge: 'Fast-Track 3-Minute Clearance'
  },
  {
    title: 'Schengen & Global Visa VIP Fast-Track Support',
    description: 'Dedicated in-house visa concierge managing biometric appointments, expedited processing, and door-to-door passport delivery for UAE citizens and golden visa holders.',
    badge: '100% Approval Record'
  },
  {
    title: '24/7 Dedicated UAE Flight Operations Desk',
    description: 'Round-the-clock WhatsApp support with senior luxury travel advisors managing instant rebookings, private jet positioning, and last-minute Michelin reservations.',
    badge: 'Instant Response Guarantee'
  }
];

export const TRAVEL_ARTICLES_DATA: Article[] = [
  {
    id: 'art-maldives-guide-2026',
    title: 'The Definitive UAE Guide to the Maldives: Choosing Between Baa, Noonu & North Male Atolls',
    category: 'Island Escapes',
    readTime: '6 min read',
    date: 'February 2026',
    excerpt: 'An insider comparison of overwater reserves, marine biodiversity, and direct seaplane transfers for discerning UAE travelers seeking absolute seclusion.',
    author: 'Tariq Al-Sabah, Senior Luxury Advisor',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop',
    content: [
      'The Maldives remains the quintessential quick-escape paradise for UAE residents, with direct flights from Dubai (DXB) and Abu Dhabi (AUH) taking just four hours. However, choosing the right atoll is crucial for matching your personal travel style.',
      'Baa Atoll, a UNESCO Biosphere Reserve, is globally celebrated for Hanifaru Bay where hundreds of manta rays and whale sharks congregate between May and November. Luxury properties like Soneva Fushi and The Nautilus offer private marine biologist-led expeditions.',
      'Noonu Atoll is home to the revolutionary water reserves of Soneva Jani and Cheval Blanc Randheli. Here, multi-bedroom residences feature retractable roofs, overwater water slides, and private lagoons with unmatched privacy.',
      'For shorter 4-night Eid weekend breaks, North Male and South Male atolls provide swift 40-minute luxury speedboat transfers straight from Velana International Airport, avoiding seaplane waiting times.'
    ]
  },
  {
    id: 'art-swiss-ski-chalets',
    title: 'Alpine Elegance: Private Ski Chalets & Glacier Express Excellence Class in St. Moritz',
    category: 'Alpine Luxury',
    readTime: '8 min read',
    date: 'January 2026',
    excerpt: 'How to experience the Swiss Alps with zero compromise: private helicopter Matterhorn landings, Michelin-starred chalet chefs, and panoramic luxury rail.',
    author: 'Elena Von Berg, European Travel Director',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1200&auto=format&fit=crop',
    content: [
      'Switzerland has long held a special place in the hearts of Gulf travelers. The combination of pristine snowcapped peaks, impeccable hospitality, and Michelin-starred culinary culture creates an unmatched winter retreat.',
      'St. Moritz stands as the birthplace of alpine winter tourism. Badrutt’s Palace and The Kulm continue to set the global standard for white-glove hospitality, where vintage Rolls-Royce fleet cars meet guests at the railway station.',
      'The Glacier Express Excellence Class connects St. Moritz with Zermatt in an extraordinary 8-hour panoramic rail journey through 91 tunnels and across 291 bridges, featuring a 5-course wine-paired lunch served at your private window seat.'
    ]
  },
  {
    id: 'art-japan-autumn-zen',
    title: 'Zen in the Autumn Foliage: Kyoto Ryokan Rituals & Private Tokyo Omakase',
    category: 'Cultural Journeys',
    readTime: '7 min read',
    date: 'December 2025',
    excerpt: 'Unlocking after-hours temple access, authentic geisha banquets in Gion, and high-speed Shinkansen Gran Class luxury across Japan.',
    author: 'Kenji Takahashi, Japan Destination Specialist',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop',
    content: [
      'Japan is an extraordinary synthesis of ancient spiritual tradition and cutting-edge modernity. For travelers from Dubai, direct Emirates flights into Tokyo Haneda offer seamless entry.',
      'In Kyoto, staying in a centuries-old wooden ryokan with a private hot spring onsen allows you to experience the Japanese philosophy of Omotenashi (selfless hospitality) at its pinnacle.',
      'Our private access allows guests to enter world-famous temples like Kiyomizu-dera and the Arashiyama Bamboo Grove before public opening hours, accompanied by a resident Zen monk who leads private mindfulness meditation.'
    ]
  }
];

export const TRAVEL_FAQS: FaqItem[] = [
  {
    question: 'How do you customize bespoke luxury itineraries for UAE families and couples?',
    answer: 'Every journey begins with a private 1-on-1 consultation with a senior luxury travel director. We analyze your preferred flight class (Emirates First Class, Etihad The Residence, or Private Jet Charter), family dynamics, dietary requirements (Halal-certified catering), and private security preferences before drafting a day-by-day tailored proposal in AED.',
    category: 'Bespoke Planning'
  },
  {
    question: 'Do all packages include door-to-door UAE chauffeur and DXB/AUH airport VIP services?',
    answer: 'Yes. All signature and ultra-luxe packages include complimentary Mercedes-Maybach or Rolls-Royce chauffeur transfers from your UAE residence to DXB or AUH airports, accompanied by Ahlan / Marhaba VIP Meet & Greet with fast-track passport control.',
    category: 'UAE Departures'
  },
  {
    question: 'Can you arrange private jet charters and luxury superyacht rentals worldwide?',
    answer: 'Absolutely. We operate a direct aviation desk chartering Light, Midsize, and Ultra-Long Range private jets (Citation Latitude, Challenger 3500, Gulfstream G650ER) departing directly from Dubai DWC Al Maktoum or Abu Dhabi Bateen Executive Airport, alongside crewed superyacht charters in the Mediterranean and Maldives.',
    category: 'Private Aviation'
  },
  {
    question: 'What is your cancellation and rebooking policy for luxury bookings?',
    answer: 'We maintain exclusive flexible booking agreements with premier hotel partners (Aman, Soneva, One&Only, Four Seasons, Belmond). In case of scheduling changes, our 24/7 concierge handles date modifications with minimal or zero penalties subject to hotel fare rules.',
    category: 'Policies'
  },
  {
    question: 'How do you handle visa processing for UAE residents and Golden Visa holders?',
    answer: 'Our in-house visa concierge manages expedited Schengen, UK, USA, Japan, and European visa appointments, ensuring fast document preparation, premium VIP lounge biometrics, and door-to-door passport return.',
    category: 'Visas'
  }
];

export const TRAVEL_REVIEWS_DATA: TravelReview[] = [
  {
    id: 'rev-1',
    clientName: 'H.E. Mansoor Al-Ketbi',
    city: 'Dubai (Emirates Hills)',
    tripTaken: 'The Soneva Sovereign — Maldives Water Reserve',
    rating: 5,
    date: 'January 2026',
    review: 'AURELIA Travel delivered an immaculate Maldives holiday for my family. The private seaplane was waiting the moment our Emirates flight touched down at Male, and the 4-bedroom water reserve exceeded all expectations. Flawless white-glove execution.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    verifiedBooking: true
  },
  {
    id: 'rev-2',
    clientName: 'Fatima & Dr. Rashed Al-Nuaimi',
    city: 'Abu Dhabi (Al Bateen)',
    tripTaken: 'Swiss Grandeur & Glacier Express Excellence Class',
    rating: 5,
    date: 'December 2025',
    review: 'The Glacier Express Excellence Class and helicopter flight around the Matterhorn peak were unforgettable. Every hotel suite was upgraded upon arrival with personalized welcome gifts. Truly the finest travel agency in the UAE.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    verifiedBooking: true
  },
  {
    id: 'rev-3',
    clientName: 'Alexander & Maria Voronov',
    city: 'Dubai (Palm Jumeirah)',
    tripTaken: 'Imperial Shogun — Tokyo, Kyoto & Aman Fuji Heli',
    rating: 5,
    date: 'November 2025',
    review: 'Securing reservations at 3-star Michelin sushi counters in Ginza and private after-hours temple meditation in Kyoto was something no other concierge could achieve. The 24/7 WhatsApp support was instantaneous.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    verifiedBooking: true
  }
];

export const TRAVEL_METRICS = [
  {
    label: 'Curated VIP Itineraries Delivered',
    value: '4,850+',
    subtext: 'Across 62 Ultra-Luxury Global Destinations',
    badge: 'Audited Track Record'
  },
  {
    label: 'Private Jet & Yacht Dispatch SLA',
    value: '< 3 Hours',
    subtext: 'Direct from Dubai DWC & Abu Dhabi Bateen',
    badge: 'Rapid Positioning'
  },
  {
    label: 'Client Satisfaction Rating',
    value: '99.8%',
    subtext: 'Verified 5-Star Reviews from GCC VIPs',
    badge: 'Flawless Standard'
  },
  {
    label: 'Annualized Travel Volume',
    value: 'AED 120M+',
    subtext: 'Managed for Royal & HNW UAE Clients',
    badge: 'Premier Partner Tier'
  }
];
