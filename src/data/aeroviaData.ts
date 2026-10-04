export interface FlightResult {
  id: string;
  airline: string;
  airlineCode: string;
  flightNumber: string;
  origin: string;
  originCode: string;
  destination: string;
  destinationCode: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  stops: number;
  stopDetails?: string;
  cabinClass: 'Economy' | 'Premium Economy' | 'Business Class' | 'First Class';
  baggage: string;
  priceAED: number;
  aircraft: string;
  carbonOffsetKg: number;
  onTimeRating: string;
  featured?: boolean;
}

export interface HotelProperty {
  id: string;
  name: string;
  destination: string;
  destinationCode: string;
  neighborhood: string;
  propertyCategory: 'Ultra-Luxury Resort' | 'Boutique Hotel' | 'Skyline Luxury' | 'Heritage Palace' | 'Private Overwater Villa';
  starRating: number;
  guestRating: number;
  reviewCount: number;
  roomType: string;
  pricePerNightAED: number;
  totalStayAED: number;
  stayNights: number;
  amenities: string[];
  image: string;
  description: string;
  badge?: string;
}

export interface DestinationItem {
  id: string;
  name: string;
  country: string;
  region: string;
  tagline: string;
  bestTimeToVisit: string;
  flightHoursFromDXB: string;
  image: string;
  curatedStyles: string[];
  startingFlightAED: number;
  startingHotelNightAED: number;
  highlights: string[];
}

export interface AeroviaCapability {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  impactMetric: string;
  features: string[];
  travelLayer: string;
}

export interface ActiveJourneyAlert {
  id: string;
  code: string;
  title: string;
  severity: 'nominal' | 'advisory' | 'gate_change';
  location: string;
  impact: string;
  time: string;
}

export interface AirportLocation {
  id: string;
  code: string;
  city: string;
  country: string;
  airportName: string;
  region: 'UAE & GCC' | 'Europe' | 'Asia-Pacific' | 'Americas' | 'Africa & Islands';
  popular?: boolean;
}

// -------------------------------------------------------------
// 20 GLOBAL ORIGIN AIRPORTS (UAE, GCC & WORLD HUBS)
// -------------------------------------------------------------
export const AEROVIA_ORIGIN_AIRPORTS: AirportLocation[] = [
  { id: 'dxb', code: 'DXB', city: 'Dubai', country: 'United Arab Emirates', airportName: 'Dubai International', region: 'UAE & GCC', popular: true },
  { id: 'dwc', code: 'DWC', city: 'Dubai World Central', country: 'United Arab Emirates', airportName: 'Al Maktoum International', region: 'UAE & GCC', popular: true },
  { id: 'auh', code: 'AUH', city: 'Abu Dhabi', country: 'United Arab Emirates', airportName: 'Zayed International', region: 'UAE & GCC', popular: true },
  { id: 'shj', code: 'SHJ', city: 'Sharjah', country: 'United Arab Emirates', airportName: 'Sharjah International', region: 'UAE & GCC' },
  { id: 'rkt', code: 'RKT', city: 'Ras Al Khaimah', country: 'United Arab Emirates', airportName: 'Ras Al Khaimah International', region: 'UAE & GCC' },
  { id: 'doh', code: 'DOH', city: 'Doha', country: 'Qatar', airportName: 'Hamad International', region: 'UAE & GCC', popular: true },
  { id: 'ruh', code: 'RUH', city: 'Riyadh', country: 'Saudi Arabia', airportName: 'King Khalid International', region: 'UAE & GCC', popular: true },
  { id: 'jed', code: 'JED', city: 'Jeddah', country: 'Saudi Arabia', airportName: 'King Abdulaziz International', region: 'UAE & GCC' },
  { id: 'kwi', code: 'KWI', city: 'Kuwait City', country: 'Kuwait', airportName: 'Kuwait International', region: 'UAE & GCC' },
  { id: 'mct', code: 'MCT', city: 'Muscat', country: 'Oman', airportName: 'Muscat International', region: 'UAE & GCC' },
  { id: 'bah', code: 'BAH', city: 'Manama', country: 'Bahrain', airportName: 'Bahrain International', region: 'UAE & GCC' },
  { id: 'lhr', code: 'LHR', city: 'London', country: 'United Kingdom', airportName: 'London Heathrow', region: 'Europe', popular: true },
  { id: 'cdg', code: 'CDG', city: 'Paris', country: 'France', airportName: 'Paris Charles de Gaulle', region: 'Europe', popular: true },
  { id: 'fra', code: 'FRA', city: 'Frankfurt', country: 'Germany', airportName: 'Frankfurt am Main', region: 'Europe' },
  { id: 'zrh', code: 'ZRH', city: 'Zurich', country: 'Switzerland', airportName: 'Zurich Kloten', region: 'Europe', popular: true },
  { id: 'jfk', code: 'JFK', city: 'New York', country: 'United States', airportName: 'John F. Kennedy International', region: 'Americas', popular: true },
  { id: 'sin', code: 'SIN', city: 'Singapore', country: 'Singapore', airportName: 'Singapore Changi', region: 'Asia-Pacific', popular: true },
  { id: 'hnd', code: 'HND', city: 'Tokyo', country: 'Japan', airportName: 'Tokyo Haneda', region: 'Asia-Pacific', popular: true },
  { id: 'hkg', code: 'HKG', city: 'Hong Kong', country: 'Hong Kong SAR', airportName: 'Hong Kong International', region: 'Asia-Pacific' },
  { id: 'syd', code: 'SYD', city: 'Sydney', country: 'Australia', airportName: 'Kingsford Smith', region: 'Asia-Pacific' },
];
export const AEROVIA_ORIGINS = AEROVIA_ORIGIN_AIRPORTS;

// -------------------------------------------------------------
// 20 GLOBAL DESTINATION AIRPORTS (LUXURY & KEY CAPITALS)
// -------------------------------------------------------------
export const AEROVIA_DESTINATION_AIRPORTS: AirportLocation[] = [
  { id: 'dst-hnd', code: 'HND', city: 'Tokyo', country: 'Japan', airportName: 'Tokyo Haneda International', region: 'Asia-Pacific', popular: true },
  { id: 'dst-nrt', code: 'NRT', city: 'Tokyo', country: 'Japan', airportName: 'Tokyo Narita International', region: 'Asia-Pacific' },
  { id: 'dst-cdg', code: 'CDG', city: 'Paris', country: 'France', airportName: 'Paris Charles de Gaulle', region: 'Europe', popular: true },
  { id: 'dst-lhr', code: 'LHR', city: 'London', country: 'United Kingdom', airportName: 'London Heathrow', region: 'Europe', popular: true },
  { id: 'dst-mle', code: 'MLE', city: 'Malé / Atolls', country: 'Maldives', airportName: 'Velana International', region: 'Africa & Islands', popular: true },
  { id: 'dst-sin', code: 'SIN', city: 'Singapore', country: 'Singapore', airportName: 'Singapore Changi', region: 'Asia-Pacific', popular: true },
  { id: 'dst-jfk', code: 'JFK', city: 'New York', country: 'United States', airportName: 'John F. Kennedy International', region: 'Americas', popular: true },
  { id: 'dst-lax', code: 'LAX', city: 'Los Angeles', country: 'United States', airportName: 'Los Angeles International', region: 'Americas', popular: true },
  { id: 'dst-bkk', code: 'BKK', city: 'Bangkok', country: 'Thailand', airportName: 'Suvarnabhumi International', region: 'Asia-Pacific', popular: true },
  { id: 'dst-dps', code: 'DPS', city: 'Bali', country: 'Indonesia', airportName: 'Ngurah Rai (Denpasar)', region: 'Asia-Pacific', popular: true },
  { id: 'dst-fco', code: 'FCO', city: 'Rome', country: 'Italy', airportName: 'Rome Fiumicino Leonardo da Vinci', region: 'Europe', popular: true },
  { id: 'dst-mxp', code: 'MXP', city: 'Milan', country: 'Italy', airportName: 'Milan Malpensa', region: 'Europe' },
  { id: 'dst-zrh', code: 'ZRH', city: 'Zurich', country: 'Switzerland', airportName: 'Zurich Kloten', region: 'Europe', popular: true },
  { id: 'dst-gva', code: 'GVA', city: 'Geneva', country: 'Switzerland', airportName: 'Geneva Cointrin', region: 'Europe' },
  { id: 'dst-ist', code: 'IST', city: 'Istanbul', country: 'Turkey', airportName: 'Istanbul International', region: 'Europe', popular: true },
  { id: 'dst-bcn', code: 'BCN', city: 'Barcelona', country: 'Spain', airportName: 'Barcelona El Prat', region: 'Europe' },
  { id: 'dst-icn', code: 'ICN', city: 'Seoul', country: 'South Korea', airportName: 'Seoul Incheon International', region: 'Asia-Pacific', popular: true },
  { id: 'dst-syd', code: 'SYD', city: 'Sydney', country: 'Australia', airportName: 'Kingsford Smith', region: 'Asia-Pacific' },
  { id: 'dst-cpt', code: 'CPT', city: 'Cape Town', country: 'South Africa', airportName: 'Cape Town International', region: 'Africa & Islands', popular: true },
  { id: 'dst-sez', code: 'SEZ', city: 'Mahé / Victoria', country: 'Seychelles', airportName: 'Seychelles International', region: 'Africa & Islands', popular: true },
];

// -------------------------------------------------------------
// 1. FLIGHT RESULTS (22+ DEMO FLIGHTS)
// -------------------------------------------------------------
export const AEROVIA_FLIGHTS: FlightResult[] = [
  {
    id: 'fl-201',
    airline: 'AEROVA Flagship',
    airlineCode: 'AV',
    flightNumber: 'AV 204',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'Tokyo Haneda (HND)',
    destinationCode: 'HND',
    departureTime: '08:20 AM',
    arrivalTime: '10:45 PM',
    duration: '09h 25m',
    stops: 0,
    cabinClass: 'First Class',
    baggage: '3 × 32kg + Private Suite Lounge',
    priceAED: 14850,
    aircraft: 'Airbus A380-800 Royal Suite',
    carbonOffsetKg: 380,
    onTimeRating: '99.4%',
    featured: true
  },
  {
    id: 'fl-202',
    airline: 'SKYRIN Global',
    airlineCode: 'SK',
    flightNumber: 'SK 718',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'Tokyo Haneda (HND)',
    destinationCode: 'HND',
    departureTime: '11:40 AM',
    arrivalTime: '02:10 AM (+1)',
    duration: '09h 30m',
    stops: 0,
    cabinClass: 'Business Class',
    baggage: '2 × 32kg + Sky Bed',
    priceAED: 8420,
    aircraft: 'Boeing 787-10 Dreamliner',
    carbonOffsetKg: 420,
    onTimeRating: '98.6%',
    featured: true
  },
  {
    id: 'fl-203',
    airline: 'NOVAIR Skylink',
    airlineCode: 'NV',
    flightNumber: 'NV 431',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'Tokyo Narita (NRT)',
    destinationCode: 'NRT',
    departureTime: '02:15 PM',
    arrivalTime: '05:00 AM (+1)',
    duration: '09h 45m',
    stops: 0,
    cabinClass: 'Premium Economy',
    baggage: '2 × 23kg',
    priceAED: 4950,
    aircraft: 'Airbus A350-1000 Ultra',
    carbonOffsetKg: 310,
    onTimeRating: '97.9%'
  },
  {
    id: 'fl-204',
    airline: 'ORBIS Connect',
    airlineCode: 'OB',
    flightNumber: 'OB 925',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'Tokyo Haneda (HND)',
    destinationCode: 'HND',
    departureTime: '06:10 PM',
    arrivalTime: '11:20 AM (+1)',
    duration: '12h 10m',
    stops: 1,
    stopDetails: '1h 25m transit in Doha (DOH)',
    cabinClass: 'Economy',
    baggage: '1 × 23kg',
    priceAED: 2840,
    aircraft: 'Boeing 777-300ER',
    carbonOffsetKg: 280,
    onTimeRating: '96.5%'
  },
  {
    id: 'fl-205',
    airline: 'AEROVIA SkySuite',
    airlineCode: 'AVS',
    flightNumber: 'AVS 101',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'London Heathrow (LHR)',
    destinationCode: 'LHR',
    departureTime: '07:30 AM',
    arrivalTime: '12:10 PM',
    duration: '07h 40m',
    stops: 0,
    cabinClass: 'First Class',
    baggage: '3 × 32kg + Chauffeur Drive',
    priceAED: 16200,
    aircraft: 'Airbus A380-800 Private Stateroom',
    carbonOffsetKg: 350,
    onTimeRating: '99.8%',
    featured: true
  },
  {
    id: 'fl-206',
    airline: 'CELESTIAL Air',
    airlineCode: 'CA',
    flightNumber: 'CA 512',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'London Heathrow (LHR)',
    destinationCode: 'LHR',
    departureTime: '01:50 PM',
    arrivalTime: '06:45 PM',
    duration: '07h 55m',
    stops: 0,
    cabinClass: 'Business Class',
    baggage: '2 × 32kg + Fast Track',
    priceAED: 9150,
    aircraft: 'Boeing 777-9 Custom',
    carbonOffsetKg: 390,
    onTimeRating: '98.2%'
  },
  {
    id: 'fl-207',
    airline: 'SOLARIA Jets',
    airlineCode: 'SJ',
    flightNumber: 'SJ 304',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'London Heathrow (LHR)',
    destinationCode: 'LHR',
    departureTime: '05:40 PM',
    arrivalTime: '10:50 PM',
    duration: '08h 10m',
    stops: 0,
    cabinClass: 'Premium Economy',
    baggage: '2 × 23kg',
    priceAED: 5200,
    aircraft: 'Airbus A350-900',
    carbonOffsetKg: 290,
    onTimeRating: '97.5%'
  },
  {
    id: 'fl-208',
    airline: 'GULFSTREAM Air',
    airlineCode: 'GA',
    flightNumber: 'GA 880',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'London Heathrow (LHR)',
    destinationCode: 'LHR',
    departureTime: '10:30 PM',
    arrivalTime: '06:00 AM (+1)',
    duration: '10h 30m',
    stops: 1,
    stopDetails: '1h 10m transit in Istanbul (IST)',
    cabinClass: 'Economy',
    baggage: '1 × 23kg',
    priceAED: 2450,
    aircraft: 'Airbus A321XLR',
    carbonOffsetKg: 220,
    onTimeRating: '95.8%'
  },
  {
    id: 'fl-209',
    airline: 'PACIFICA Global',
    airlineCode: 'PG',
    flightNumber: 'PG 620',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'Paris Charles de Gaulle (CDG)',
    destinationCode: 'CDG',
    departureTime: '08:45 AM',
    arrivalTime: '02:00 PM',
    duration: '07h 15m',
    stops: 0,
    cabinClass: 'First Class',
    baggage: '3 × 32kg + Hermès Amenities',
    priceAED: 15400,
    aircraft: 'Airbus A380-800 Custom Suite',
    carbonOffsetKg: 340,
    onTimeRating: '99.2%',
    featured: true
  },
  {
    id: 'fl-210',
    airline: 'STRATOLUX Executive',
    airlineCode: 'SX',
    flightNumber: 'SX 702',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'Paris Charles de Gaulle (CDG)',
    destinationCode: 'CDG',
    departureTime: '02:40 PM',
    arrivalTime: '07:55 PM',
    duration: '07h 15m',
    stops: 0,
    cabinClass: 'Business Class',
    baggage: '2 × 32kg',
    priceAED: 8750,
    aircraft: 'Boeing 787-9 Dreamliner',
    carbonOffsetKg: 360,
    onTimeRating: '98.5%'
  },
  {
    id: 'fl-211',
    airline: 'AEROVA Regional',
    airlineCode: 'AV',
    flightNumber: 'AV 410',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'Paris Charles de Gaulle (CDG)',
    destinationCode: 'CDG',
    departureTime: '11:15 PM',
    arrivalTime: '05:30 AM (+1)',
    duration: '07h 45m',
    stops: 0,
    cabinClass: 'Economy',
    baggage: '1 × 23kg',
    priceAED: 3120,
    aircraft: 'Airbus A330neo',
    carbonOffsetKg: 240,
    onTimeRating: '96.8%'
  },
  {
    id: 'fl-212',
    airline: 'ISLANDIA Airways',
    airlineCode: 'IS',
    flightNumber: 'IS 108',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'Malé Velana (MLE)',
    destinationCode: 'MLE',
    departureTime: '09:20 AM',
    arrivalTime: '02:30 PM',
    duration: '04h 10m',
    stops: 0,
    cabinClass: 'First Class',
    baggage: '2 × 32kg + Seaplane Included',
    priceAED: 8900,
    aircraft: 'Airbus A321LR VIP',
    carbonOffsetKg: 180,
    onTimeRating: '99.5%',
    featured: true
  },
  {
    id: 'fl-213',
    airline: 'NOVAIR Island',
    airlineCode: 'NV',
    flightNumber: 'NV 225',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'Malé Velana (MLE)',
    destinationCode: 'MLE',
    departureTime: '01:40 PM',
    arrivalTime: '06:55 PM',
    duration: '04h 15m',
    stops: 0,
    cabinClass: 'Business Class',
    baggage: '2 × 32kg',
    priceAED: 5600,
    aircraft: 'Boeing 787-8 Dreamliner',
    carbonOffsetKg: 200,
    onTimeRating: '98.1%'
  },
  {
    id: 'fl-214',
    airline: 'SKYRIN Air',
    airlineCode: 'SK',
    flightNumber: 'SK 319',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'Malé Velana (MLE)',
    destinationCode: 'MLE',
    departureTime: '11:50 PM',
    arrivalTime: '05:20 AM (+1)',
    duration: '04h 30m',
    stops: 0,
    cabinClass: 'Premium Economy',
    baggage: '1 × 23kg',
    priceAED: 3450,
    aircraft: 'Airbus A320neo',
    carbonOffsetKg: 160,
    onTimeRating: '97.2%'
  },
  {
    id: 'fl-215',
    airline: 'ORBIS Asia',
    airlineCode: 'OB',
    flightNumber: 'OB 840',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'Singapore Changi (SIN)',
    destinationCode: 'SIN',
    departureTime: '08:15 AM',
    arrivalTime: '07:50 PM',
    duration: '07h 35m',
    stops: 0,
    cabinClass: 'Business Class',
    baggage: '2 × 32kg',
    priceAED: 7200,
    aircraft: 'Airbus A350-1000',
    carbonOffsetKg: 310,
    onTimeRating: '98.8%'
  },
  {
    id: 'fl-216',
    airline: 'CELESTIAL Express',
    airlineCode: 'CA',
    flightNumber: 'CA 911',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'Singapore Changi (SIN)',
    destinationCode: 'SIN',
    departureTime: '10:45 PM',
    arrivalTime: '10:15 AM (+1)',
    duration: '07h 30m',
    stops: 0,
    cabinClass: 'Economy',
    baggage: '1 × 23kg',
    priceAED: 2380,
    aircraft: 'Boeing 777-300ER',
    carbonOffsetKg: 250,
    onTimeRating: '96.2%'
  },
  {
    id: 'fl-217',
    airline: 'AEROVIA SkySuite',
    airlineCode: 'AVS',
    flightNumber: 'AVS 505',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'New York JFK (JFK)',
    destinationCode: 'JFK',
    departureTime: '02:30 AM',
    arrivalTime: '08:50 AM',
    duration: '14h 20m',
    stops: 0,
    cabinClass: 'First Class',
    baggage: '3 × 32kg + Private Lounge Shower',
    priceAED: 24500,
    aircraft: 'Airbus A380-800 Custom Residence',
    carbonOffsetKg: 680,
    onTimeRating: '99.6%',
    featured: true
  },
  {
    id: 'fl-218',
    airline: 'STRATOLUX Executive',
    airlineCode: 'SX',
    flightNumber: 'SX 114',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'New York JFK (JFK)',
    destinationCode: 'JFK',
    departureTime: '08:30 AM',
    arrivalTime: '03:15 PM',
    duration: '14h 45m',
    stops: 0,
    cabinClass: 'Business Class',
    baggage: '2 × 32kg',
    priceAED: 12800,
    aircraft: 'Boeing 787-10 Dreamliner',
    carbonOffsetKg: 620,
    onTimeRating: '97.9%'
  },
  {
    id: 'fl-219',
    airline: 'PACIFICA Global',
    airlineCode: 'PG',
    flightNumber: 'PG 808',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'Rome Fiumicino (FCO)',
    destinationCode: 'FCO',
    departureTime: '09:10 AM',
    arrivalTime: '01:25 PM',
    duration: '06h 15m',
    stops: 0,
    cabinClass: 'Business Class',
    baggage: '2 × 32kg',
    priceAED: 7650,
    aircraft: 'Airbus A350-900',
    carbonOffsetKg: 290,
    onTimeRating: '98.3%'
  },
  {
    id: 'fl-220',
    airline: 'SOLARIA Jets',
    airlineCode: 'SJ',
    flightNumber: 'SJ 614',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'Zurich Kloten (ZRH)',
    destinationCode: 'ZRH',
    departureTime: '08:50 AM',
    arrivalTime: '01:30 PM',
    duration: '06h 40m',
    stops: 0,
    cabinClass: 'First Class',
    baggage: '3 × 32kg',
    priceAED: 13900,
    aircraft: 'Boeing 777-9 Private Stateroom',
    carbonOffsetKg: 310,
    onTimeRating: '99.4%'
  },
  {
    id: 'fl-221',
    airline: 'AEROVA Island',
    airlineCode: 'AV',
    flightNumber: 'AV 330',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'Bali Ngurah Rai (DPS)',
    destinationCode: 'DPS',
    departureTime: '10:15 AM',
    arrivalTime: '11:20 PM',
    duration: '09h 05m',
    stops: 0,
    cabinClass: 'Business Class',
    baggage: '2 × 32kg',
    priceAED: 8100,
    aircraft: 'Airbus A350-1000',
    carbonOffsetKg: 360,
    onTimeRating: '97.8%'
  },
  {
    id: 'fl-222',
    airline: 'SKYRIN Continental',
    airlineCode: 'SK',
    flightNumber: 'SK 442',
    origin: 'Dubai Intl (DXB)',
    originCode: 'DXB',
    destination: 'Bangkok Suvarnabhumi (BKK)',
    destinationCode: 'BKK',
    departureTime: '03:30 PM',
    arrivalTime: '01:10 AM (+1)',
    duration: '06h 20m',
    stops: 0,
    cabinClass: 'Premium Economy',
    baggage: '2 × 23kg',
    priceAED: 3850,
    aircraft: 'Boeing 787-9',
    carbonOffsetKg: 260,
    onTimeRating: '98.1%'
  }
];

// -------------------------------------------------------------
// 2. LUXURY HOTEL PROPERTIES (22+ DEMO PROPERTIES)
// -------------------------------------------------------------
export const AEROVIA_HOTELS: HotelProperty[] = [
  {
    id: 'ht-tokyo-1',
    name: 'Aman Tokyo & Sky Sanctuary',
    destination: 'Tokyo',
    destinationCode: 'HND',
    neighborhood: 'Otemachi Financial District',
    propertyCategory: 'Skyline Luxury',
    starRating: 5,
    guestRating: 9.8,
    reviewCount: 428,
    roomType: 'Premier Grand Room (Imperial Palace View)',
    pricePerNightAED: 3450,
    totalStayAED: 17250,
    stayNights: 5,
    amenities: ['34th-Floor Infinity Pool', 'Private Onsen Spa', 'Michelin Kaiseki Dining', 'Dedicated Chauffeur'],
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
    description: 'An urban sanctuary hovering 38 storeys above Tokyo, combining traditional basalt rock architecture with breathtaking views of Mt. Fuji.',
    badge: 'AEROVIA SIGNATURE'
  },
  {
    id: 'ht-tokyo-2',
    name: 'The Ritz Imperial Otemachi',
    destination: 'Tokyo',
    destinationCode: 'HND',
    neighborhood: 'Marunouchi / Tokyo Station',
    propertyCategory: 'Skyline Luxury',
    starRating: 5,
    guestRating: 9.7,
    reviewCount: 384,
    roomType: 'Club Executive Skyline Suite',
    pricePerNightAED: 2890,
    totalStayAED: 14450,
    stayNights: 5,
    amenities: ['Club Lounge Access', 'Sushi Bar', 'Spa by ESPA', 'Rolls-Royce Ghost Transfer'],
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
    description: 'Refined contemporary elegance with panoramic views over the Imperial Palace gardens and Ginza skyline.'
  },
  {
    id: 'ht-tokyo-3',
    name: 'Hoshinoya Shinjuku Ryokan',
    destination: 'Tokyo',
    destinationCode: 'HND',
    neighborhood: 'Otemachi Old Quarter',
    propertyCategory: 'Heritage Palace',
    starRating: 5,
    guestRating: 9.6,
    reviewCount: 290,
    roomType: 'Yuri Grand Tatami Suite',
    pricePerNightAED: 2450,
    totalStayAED: 12250,
    stayNights: 5,
    amenities: ['Rooftop Open-Air Onsen', 'Tea Ceremony Master', 'Kaiseki Breakfast', 'Shoji Living Room'],
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    description: 'A vertical 17-storey luxury Ryokan sanctuary where footwear is removed at entry for authentic Japanese tranquility.'
  },
  {
    id: 'ht-tokyo-4',
    name: 'Palace Hotel Marunouchi',
    destination: 'Tokyo',
    destinationCode: 'HND',
    neighborhood: 'Marunouchi Waterfront',
    propertyCategory: 'Boutique Hotel',
    starRating: 5,
    guestRating: 9.5,
    reviewCount: 512,
    roomType: 'Deluxe Balcony Suite',
    pricePerNightAED: 1980,
    totalStayAED: 9900,
    stayNights: 5,
    amenities: ['Private Balcony', 'Evian Spa', '7 Gourmet Restaurants', 'Lobby Lounge'],
    image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?auto=format&fit=crop&w=1200&q=80',
    description: 'Iconic independent luxury hotel featuring private open balconies overlooking the Imperial moat.'
  },
  {
    id: 'ht-paris-1',
    name: 'Hôtel de Crillon, Rosewood Heritage',
    destination: 'Paris',
    destinationCode: 'CDG',
    neighborhood: 'Place de la Concorde / 8th Arr.',
    propertyCategory: 'Heritage Palace',
    starRating: 5,
    guestRating: 9.9,
    reviewCount: 512,
    roomType: 'Duc de Crillon Suite',
    pricePerNightAED: 4900,
    totalStayAED: 19600,
    stayNights: 4,
    amenities: ['Private Butler', 'L’Ecrin 1-Star Dining', 'Sense Spa', 'Hermès In-Suite Amenities'],
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    description: 'An 18th-century royal palace embodying Parisian elegance, overlooking the fountains of Place de la Concorde.',
    badge: 'PALACE DISTINCTION'
  },
  {
    id: 'ht-paris-2',
    name: 'Le Bristol Champs-Élysées',
    destination: 'Paris',
    destinationCode: 'CDG',
    neighborhood: 'Rue du Faubourg Saint-Honoré',
    propertyCategory: 'Heritage Palace',
    starRating: 5,
    guestRating: 9.8,
    reviewCount: 440,
    roomType: 'Prestige Garden Suite',
    pricePerNightAED: 4200,
    totalStayAED: 16800,
    stayNights: 4,
    amenities: ['Rooftop Yacht Swimming Pool', 'Epicure 3-Star Dining', 'Private Courtyard Garden', 'La Prairie Spa'],
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
    description: 'The pinnacle of French art de vivre with iconic 1,200m² French gardens and 3-Michelin-star gastronomy.'
  },
  {
    id: 'ht-paris-3',
    name: 'Cheval Blanc Paris Seine',
    destination: 'Paris',
    destinationCode: 'CDG',
    neighborhood: 'Pont-Neuf / 1st Arr.',
    propertyCategory: 'Ultra-Luxury Resort',
    starRating: 5,
    guestRating: 9.9,
    reviewCount: 310,
    roomType: 'Seine Riverfront Stateroom',
    pricePerNightAED: 5600,
    totalStayAED: 22400,
    stayNights: 4,
    amenities: ['Dior Spa Cheval Blanc', 'Plénitude 3-Star Dining', 'Private Seine Yacht', 'Curated Art Collection'],
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1200&q=80',
    description: 'Peter Marino-designed riverside haven situated right on the banks of the Seine overlooking Pont-Neuf.',
    badge: 'ULTRA-EXCLUSIVE'
  },
  {
    id: 'ht-paris-4',
    name: 'Shangri-La Eiffel Tower Palace',
    destination: 'Paris',
    destinationCode: 'CDG',
    neighborhood: '16th Arrondissement',
    propertyCategory: 'Skyline Luxury',
    starRating: 5,
    guestRating: 9.6,
    reviewCount: 620,
    roomType: 'Eiffel View Terrace Suite',
    pricePerNightAED: 3650,
    totalStayAED: 14600,
    stayNights: 4,
    amenities: ['Private Eiffel Terrace', 'Shang Palace Dining', 'CHI Spa Pool', 'Former Prince Bonaparte Residence'],
    image: 'https://images.unsplash.com/photo-1520939817895-060bdef4d18f?auto=format&fit=crop&w=1200&q=80',
    description: 'Former home of Prince Roland Bonaparte offering direct, unobstructed front-row views of the Eiffel Tower.'
  },
  {
    id: 'ht-mle-1',
    name: 'Cheval Blanc Randheli Atoll',
    destination: 'Maldives',
    destinationCode: 'MLE',
    neighborhood: 'Noonu Atoll Private Island',
    propertyCategory: 'Private Overwater Villa',
    starRating: 5,
    guestRating: 9.9,
    reviewCount: 310,
    roomType: 'Water Villa with 12.5m Private Lagoon Pool',
    pricePerNightAED: 7800,
    totalStayAED: 31200,
    stayNights: 4,
    amenities: ['Private Dhoni Boat', 'Guerlain Island Spa', 'Le 1947 Fine Dining', 'Dedicated Alchemist Butler'],
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    description: 'An exclusive haven designed by Jean-Michel Gathy, surrounded by turquoise coral lagoons and pristine white sands.',
    badge: 'ULTRA-EXCLUSIVE'
  },
  {
    id: 'ht-mle-2',
    name: 'Soneva Jani Reserve & Water Slides',
    destination: 'Maldives',
    destinationCode: 'MLE',
    neighborhood: 'Medhufaru Lagoon / Noonu',
    propertyCategory: 'Private Overwater Villa',
    starRating: 5,
    guestRating: 9.8,
    reviewCount: 280,
    roomType: '1-Bedroom Water Retreat with Curved Slide',
    pricePerNightAED: 6900,
    totalStayAED: 27600,
    stayNights: 4,
    amenities: ['Lagoon Water Slide', 'Retractable Stargazing Roof', 'Barefoot Butler', 'Cinema Paradiso Overwater'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    description: 'Legendary sustainable luxury villas featuring motorized roofs for stargazing and private slides straight into the ocean.'
  },
  {
    id: 'ht-mle-3',
    name: 'Velaa Private Island Sanctuary',
    destination: 'Maldives',
    destinationCode: 'MLE',
    neighborhood: 'Noonu Atoll Ultra-Private',
    propertyCategory: 'Ultra-Luxury Resort',
    starRating: 5,
    guestRating: 9.9,
    reviewCount: 195,
    roomType: 'Romantic Ocean Pool Villa',
    pricePerNightAED: 8400,
    totalStayAED: 33600,
    stayNights: 4,
    amenities: ['Snow Room in Spa', 'Private Submarine', 'Tavaru Teppanyaki Tower', 'Championship Golf Academy'],
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80',
    description: 'The ultimate definition of privacy, crafted with no expense spared for ultra-high-net-worth travelers.'
  },
  {
    id: 'ht-mle-4',
    name: 'Waldorf Astoria Ithaafushi',
    destination: 'Maldives',
    destinationCode: 'MLE',
    neighborhood: 'South Malé Atoll',
    propertyCategory: 'Private Overwater Villa',
    starRating: 5,
    guestRating: 9.7,
    reviewCount: 420,
    roomType: 'King Grand Overwater Villa with Pool',
    pricePerNightAED: 5900,
    totalStayAED: 23600,
    stayNights: 4,
    amenities: ['11 Dining Venues', 'Terra Tree-Top Pod Dining', 'Aqua Wellness Spa', '40m Yacht Transfer'],
    image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80',
    description: 'Spanning across three interconnected islands with elevated treetop bamboo dining pods.'
  },
  {
    id: 'ht-lhr-1',
    name: 'The Connaught Mayfair & Butler Suite',
    destination: 'London',
    destinationCode: 'LHR',
    neighborhood: 'Carlos Place / Mayfair',
    propertyCategory: 'Heritage Palace',
    starRating: 5,
    guestRating: 9.8,
    reviewCount: 480,
    roomType: 'The Mews Heritage Suite',
    pricePerNightAED: 4100,
    totalStayAED: 16400,
    stayNights: 4,
    amenities: ['Aman Spa London', 'Hélène Darroze 3-Star Dining', 'Connaught Martini Bar', 'Private 24h Butler'],
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    description: 'Mayfair’s most distinguished discreet address, celebrated for bespoke 24-hour butler service and 3-star dining.'
  },
  {
    id: 'ht-lhr-2',
    name: "Claridge's Art Deco Stateroom",
    destination: 'London',
    destinationCode: 'LHR',
    neighborhood: 'Brook Street / Mayfair',
    propertyCategory: 'Heritage Palace',
    starRating: 5,
    guestRating: 9.7,
    reviewCount: 520,
    roomType: 'Art Deco Studio Suite',
    pricePerNightAED: 3850,
    totalStayAED: 15400,
    stayNights: 4,
    amenities: ['Afternoon Tea in The Foyer', 'Subterranean Spa', 'Art Deco Fumoir', 'Chauffeur Bentley'],
    image: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=1200&q=80',
    description: 'An emblem of timeless English sophistication frequented by royalty and statesmen since 1856.'
  },
  {
    id: 'ht-lhr-3',
    name: 'The Peninsula Hyde Park',
    destination: 'London',
    destinationCode: 'LHR',
    neighborhood: '1 Grosvenor Place / Belgravia',
    propertyCategory: 'Skyline Luxury',
    starRating: 5,
    guestRating: 9.6,
    reviewCount: 310,
    roomType: 'Grand Premier Park View Room',
    pricePerNightAED: 3400,
    totalStayAED: 13600,
    stayNights: 4,
    amenities: ['Brooklands Rooftop Aviation Dining', 'Peninsula Spa', 'Custom Rolls-Royce Fleet', 'Hyde Park Views'],
    image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=1200&q=80',
    description: 'Brand-new architectural landmark facing Wellington Arch and Hyde Park Corner in Belgravia.'
  },
  {
    id: 'ht-jfk-1',
    name: 'Aman New York 57th Street',
    destination: 'New York',
    destinationCode: 'JFK',
    neighborhood: 'Crown Building / 57th & 5th Ave',
    propertyCategory: 'Skyline Luxury',
    starRating: 5,
    guestRating: 9.9,
    reviewCount: 260,
    roomType: 'Grand 5th Avenue Suite with Working Fireplace',
    pricePerNightAED: 6200,
    totalStayAED: 24800,
    stayNights: 4,
    amenities: ['3-Floor Flagship Aman Spa', 'Wraparound Garden Terrace', 'Jazz Club Underground', 'Arva Dining'],
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80',
    description: 'An urban sanctuary inside the historic Crown Building on Fifth Avenue, bringing Eastern tranquility to Manhattan.',
    badge: 'AEROVIA SIGNATURE'
  },
  {
    id: 'ht-jfk-2',
    name: 'The Carlyle, A Rosewood Landmark',
    destination: 'New York',
    destinationCode: 'JFK',
    neighborhood: 'Madison Avenue / Upper East Side',
    propertyCategory: 'Heritage Palace',
    starRating: 5,
    guestRating: 9.7,
    reviewCount: 490,
    roomType: 'Central Park View Premier Suite',
    pricePerNightAED: 4500,
    totalStayAED: 18000,
    stayNights: 4,
    amenities: ['Bemelmans Piano Bar', 'Valmont Spa', 'The Carlyle Restaurant', 'Central Park Chauffeur'],
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    description: 'The quintessential Upper East Side grand hotel, home to the legendary Bemelmans Bar.'
  },
  {
    id: 'ht-sin-1',
    name: 'Raffles Hotel Singapore Heritage Suite',
    destination: 'Singapore',
    destinationCode: 'SIN',
    neighborhood: 'Colonial Civic District',
    propertyCategory: 'Heritage Palace',
    starRating: 5,
    guestRating: 9.8,
    reviewCount: 560,
    roomType: 'Courtyard Personality Suite',
    pricePerNightAED: 3950,
    totalStayAED: 15800,
    stayNights: 4,
    amenities: ['Legendary Long Bar', 'Raffles Butler Service', 'Raffles Spa', '14ft High Ceilings & Verandahs'],
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
    description: 'An 1887 colonial icon meticulously restored to offer unparalleled 24-hour butler hospitality in the heart of Singapore.'
  },
  {
    id: 'ht-sin-2',
    name: 'Capella Sentosa Island Rainforest',
    destination: 'Singapore',
    destinationCode: 'SIN',
    neighborhood: 'Sentosa Island Rainforest',
    propertyCategory: 'Ultra-Luxury Resort',
    starRating: 5,
    guestRating: 9.7,
    reviewCount: 380,
    roomType: 'Premier Sea View Villa with Plunge Pool',
    pricePerNightAED: 3200,
    totalStayAED: 12800,
    stayNights: 4,
    amenities: ['Cascading Tiered Pools', 'Auriga Spa', 'Cassia Cantonese Fine Dining', 'Private Buggy Service'],
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80',
    description: 'Norman Foster-designed sanctuary harmonizing historic colonial manors with lush coastal rainforest.'
  },
  {
    id: 'ht-zrh-1',
    name: 'The Dolder Grand Alpine Sanctuary',
    destination: 'Zurich',
    destinationCode: 'ZRH',
    neighborhood: 'Adlisberg Hillside / Lake Zurich',
    propertyCategory: 'Heritage Palace',
    starRating: 5,
    guestRating: 9.8,
    reviewCount: 330,
    roomType: 'Junior Suite Superior (Lake & Alps View)',
    pricePerNightAED: 4400,
    totalStayAED: 17600,
    stayNights: 4,
    amenities: ['4,000m² European Spa', 'The Restaurant 2-Star Dining', '100+ Piece Museum Art Collection', 'Alpine Terrace'],
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    description: 'A fairy-tale castle perched high above Lake Zurich with a 4,000m² spa and works by Warhol and Dalí.'
  },
  {
    id: 'ht-dps-1',
    name: 'Bulgari Resort Cliffside Villa',
    destination: 'Bali',
    destinationCode: 'DPS',
    neighborhood: 'Uluwatu Clifftop / Indian Ocean',
    propertyCategory: 'Ultra-Luxury Resort',
    starRating: 5,
    guestRating: 9.9,
    reviewCount: 410,
    roomType: 'Ocean Cliff Villa with Private Infinity Plunge',
    pricePerNightAED: 5100,
    totalStayAED: 20400,
    stayNights: 4,
    amenities: ['Private Clifftop Incline Elevator', 'Il Ristorante Luca Fantin', 'Bulgari Spa Ocean Pavilion', 'Helipad'],
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    description: 'Dramatic 150m cliffside luxury fusing contemporary Italian design with hand-carved Balinese volcanic stone.'
  },
  {
    id: 'ht-bkk-1',
    name: 'The Siam Chao Phraya Riverside',
    destination: 'Bangkok',
    destinationCode: 'BKK',
    neighborhood: 'Dusit Royal District / Chao Phraya',
    propertyCategory: 'Boutique Hotel',
    starRating: 5,
    guestRating: 9.7,
    reviewCount: 295,
    roomType: 'Courtyard Pool Villa with Sunken Bathtub',
    pricePerNightAED: 2650,
    totalStayAED: 10600,
    stayNights: 4,
    amenities: ['Private Teak Wood Speedboat', 'Opium Spa by Sodashi', 'Muay Thai Clifftop Ring', 'Antiques Collection'],
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80',
    description: 'Bill Bensley art deco masterpiece situated along the serene banks of the Chao Phraya River with private pool villas.'
  }
];

// -------------------------------------------------------------
// 3. CURATED DESTINATIONS (DISCOVERY)
// -------------------------------------------------------------
export const AEROVIA_DESTINATIONS: DestinationItem[] = [
  {
    id: 'dest-tokyo',
    name: 'Tokyo',
    country: 'Japan',
    region: 'East Asia',
    tagline: 'Futuristic Innovation Meets Imperial Zen',
    bestTimeToVisit: 'March — May & October — November',
    flightHoursFromDXB: '09h 25m Direct',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
    curatedStyles: ['Culture', 'Design & Architecture', 'Culinary & Nightlife'],
    startingFlightAED: 3850,
    startingHotelNightAED: 1650,
    highlights: ['Omotesando Haute Couture', 'Tsukiji Outer Market Tasting', 'Private Shinto Shrine Ceremonies']
  },
  {
    id: 'dest-paris',
    name: 'Paris',
    country: 'France',
    region: 'Western Europe',
    tagline: 'Timeless Haute Horlogerie, Art & Palace Hospitality',
    bestTimeToVisit: 'April — June & September — October',
    flightHoursFromDXB: '07h 15m Direct',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    curatedStyles: ['Romance', 'Fine Arts', 'Michelin Gastronomy'],
    startingFlightAED: 3200,
    startingHotelNightAED: 1850,
    highlights: ['Private Louvre After-Hours Access', 'Seine Vintage Yacht Cruise', 'Place Vendôme VIP Salons']
  },
  {
    id: 'dest-maldives',
    name: 'Maldives',
    country: 'Maldives',
    region: 'Indian Ocean',
    tagline: 'Pure Turquoise Lagoons & Overwater Solitude',
    bestTimeToVisit: 'November — April',
    flightHoursFromDXB: '04h 20m Direct',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    curatedStyles: ['Relax', 'Marine Biology', 'Romance'],
    startingFlightAED: 2450,
    startingHotelNightAED: 3200,
    highlights: ['Bioluminescent Bay Snorkeling', 'Subaquatic Wine Cellar Tastings', 'Private Sandbank Dining']
  },
  {
    id: 'dest-singapore',
    name: 'Singapore',
    country: 'Singapore',
    region: 'Southeast Asia',
    tagline: 'Biophilic Mega-Structures & Asian Gastronomic Capital',
    bestTimeToVisit: 'All Year (Equatorial Tropical)',
    flightHoursFromDXB: '07h 35m Direct',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
    curatedStyles: ['Business', 'Explore', 'Botanical Innovation'],
    startingFlightAED: 2980,
    startingHotelNightAED: 1400,
    highlights: ['Gardens by the Bay Skyway', 'Marina Bay Night Grand Prix Walk', 'Private Sentosa Cove Charters']
  },
  {
    id: 'dest-newyork',
    name: 'New York City',
    country: 'United States',
    region: 'North America',
    tagline: 'The Capital of Ambition, Theater & Sky-High Architecture',
    bestTimeToVisit: 'September — November & April — June',
    flightHoursFromDXB: '14h 15m Direct',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80',
    curatedStyles: ['Explore', 'Broadway & Stage', 'Contemporary Art'],
    startingFlightAED: 4950,
    startingHotelNightAED: 2100,
    highlights: ['MoMA Private Curatorial Tour', 'Broadway Box Seats Access', 'Hudson River Helicopter Charter']
  },
  {
    id: 'dest-istanbul',
    name: 'Istanbul',
    country: 'Turkey',
    region: 'Eurasia',
    tagline: 'Where Continents Collide Across the Golden Bosphorus',
    bestTimeToVisit: 'April — May & September — November',
    flightHoursFromDXB: '04h 45m Direct',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80',
    curatedStyles: ['Culture', 'Bosphorus Yachting', 'Ottoman Heritage'],
    startingFlightAED: 1850,
    startingHotelNightAED: 1100,
    highlights: ['Private Bosphorus Sunset Cruise', 'Bespoke Grand Bazaar Connoisseur', 'Historic Hammam Rituals']
  }
];

// -------------------------------------------------------------
// 4. SAMPLE DIGITAL ITINERARY (DUBAI -> TOKYO 5-DAY)
// -------------------------------------------------------------
export const SAMPLE_TOKYO_ITINERARY = {
  journeyCode: 'AER-TYO-8820',
  title: 'Tokyo: Modernist Architecture & Zen Culture',
  duration: '5 Days / 4 Nights',
  travelers: '2 Adults (First / Business)',
  dates: '12 Nov — 17 Nov 2026',
  flightSummary: {
    outbound: 'EK 318 • DXB → HND • 08:20 AM Departure (Airbus A380 Suite)',
    inbound: 'EK 319 • HND → DXB • 11:30 PM Departure (Airbus A380 Suite)'
  },
  hotelSummary: {
    name: 'Aman Tokyo & Sky Sanctuary',
    room: 'Premier Grand Room',
    nights: '5 Nights',
    board: 'Artisanal Breakfast & Private Onsen Access Included'
  },
  days: [
    {
      dayNumber: 'DAY 01',
      title: 'Arrival in Tokyo & Skyline Check-In',
      location: 'Haneda Airport (HND) → Aman Tokyo (Otemachi)',
      schedule: [
        { time: '10:45 PM', event: 'Touchdown at Tokyo Haneda; VIP Fast-Track Customs' },
        { time: '11:30 PM', event: 'Mercedes-Maybach Chauffeur Transfer to Aman Tokyo' },
        { time: '12:15 AM', event: 'In-Suite Check-in with Welcome Ceremonial Matcha' }
      ]
    },
    {
      dayNumber: 'DAY 02',
      title: 'Modern Architecture & Omotesando Design',
      location: 'Ginza & Aoyama / Omotesando',
      schedule: [
        { time: '09:00 AM', event: 'Artisanal Japanese Breakfast overlooking Mt. Fuji' },
        { time: '11:00 AM', event: 'Private Architecture Tour of Herzog & de Meuron Prada Flagship' },
        { time: '01:30 PM', event: 'Omakase Lunch at Sushi Yoshitake (3 Michelin Stars)' },
        { time: '05:00 PM', event: 'Sunset Cocktails at The Lounge by Aman' }
      ]
    },
    {
      dayNumber: 'DAY 03',
      title: 'Ancient Shinto Traditions & Tea Masters',
      location: 'Asakusa & Yanaka Historic Enclave',
      schedule: [
        { time: '08:30 AM', event: 'VIP Private Access to Meiji Jingu Inner Shrine before public opening' },
        { time: '12:00 PM', event: 'Private Tea Ceremony with 14th-Generation Urasenke Master' },
        { time: '03:30 PM', event: 'Bespoke Ceramic Atelier Exploration in Yanaka' },
        { time: '07:30 PM', event: 'Kaiseki Dinner at Ryugin with Master Seiji Yamamoto' }
      ]
    },
    {
      dayNumber: 'DAY 04',
      title: 'Contemporary Digital Art & Nightlife',
      location: 'Toyosu & Roppongi Hills',
      schedule: [
        { time: '10:00 AM', event: 'Private Guided Entry to teamLab Planets Digital Art Enclave' },
        { time: '02:00 PM', event: 'Mori Art Museum Panoramic Gallery Tour' },
        { time: '08:00 PM', event: 'Bar Trench Cocktail Tasting & Secret Ginza Jazz Room' }
      ]
    },
    {
      dayNumber: 'DAY 05',
      title: 'Artisan Shopping & Chauffeur Transfer to Haneda',
      location: 'Nihonbashi & Haneda Airport (HND)',
      schedule: [
        { time: '10:00 AM', event: 'Late Check-out; Traditional Washi Paper & Knife Shopping' },
        { time: '03:00 PM', event: 'Final Afternoon Spa Ritual at Aman Tokyo Onsen' },
        { time: '08:30 PM', event: 'Chauffeur Departure for Haneda First Class Lounge' },
        { time: '11:30 PM', event: 'Boarding Flight EK 319 returning to Dubai (DXB)' }
      ]
    }
  ],
  pricingBreakdown: {
    flightTotalAED: 8420,
    hotelTotalAED: 17250,
    experiencesAED: 4800,
    taxesAndFeesAED: 1450,
    totalJourneyAED: 31920
  }
};

// -------------------------------------------------------------
// 5. AEROVIA CAPABILITIES (8 MODULES)
// -------------------------------------------------------------
export const AEROVIA_CAPABILITIES: AeroviaCapability[] = [
  {
    id: 'flight-discovery',
    tag: 'CAPABILITY 01',
    title: 'Global Flight Engine',
    subtitle: 'Direct Multi-GDS & Private Jet Aggregation',
    description: 'Real-time search across 500+ commercial carriers, lie-flat business suites, and on-demand charter positioning with sub-second latency.',
    icon: 'Plane',
    impactMetric: '< 450ms Global Query Response',
    features: [
      'Multi-city and open-jaw smart routing',
      'Cabin seat map & lie-flat bed angle verification',
      'Real-time baggage allowance & lounge access indicators',
      'Transparent carbon offset calculation per passenger'
    ],
    travelLayer: 'Flight Discovery'
  },
  {
    id: 'hotel-discovery',
    tag: 'CAPABILITY 02',
    title: 'Curated Luxury Stays',
    subtitle: 'Editorial Hotel Discovery & Palace Distinction',
    description: 'Hand-selected portfolio of five-star resorts, overwater villas, and boutique heritage palaces with guaranteed VIP amenities and room upgrades.',
    icon: 'Building2',
    impactMetric: '100% Curated 5-Star Portfolio',
    features: [
      'Guaranteed early check-in & 4 PM late check-out',
      'Complimentary daily artisanal breakfast for two',
      'USD 100 / AED 370 hotel dining & spa credits',
      'Direct integration with luxury hospitality chains'
    ],
    travelLayer: 'Hospitality Stays'
  },
  {
    id: 'journey-builder',
    tag: 'CAPABILITY 03',
    title: 'Intelligent Journey Builder',
    subtitle: 'Synchronized Flights + Hotels + Concierge Experiences',
    description: 'Compose complete multi-destination itineraries in a unified drag-and-drop timeline that automatically recalculates transit times and layover buffers.',
    icon: 'Layers',
    impactMetric: 'Zero Fragmented Bookings',
    features: [
      'Dynamic timeline linking flights, hotels, and chauffeurs',
      'Automated schedule clash detection & connection verification',
      'One-click shared itinerary links for traveling companions',
      'Instant aggregate price lock in AED with no hidden fees'
    ],
    travelLayer: 'Journey Composition'
  },
  {
    id: 'smart-recommendations',
    tag: 'CAPABILITY 04',
    title: 'Destination Intelligence',
    subtitle: 'AI-Powered Lifestyle & Travel Style Matching',
    description: 'Generate bespoke travel recommendations tailored to your exact travel duration, preferred pace, culinary taste, and seasonal weather patterns.',
    icon: 'Compass',
    impactMetric: '96% Style-Alignment Index',
    features: [
      '6 distinct travel style filters (Culture, Romance, Wellness, etc.)',
      'Historical seasonal climate & crowd density forecasts',
      'Curated private local guides and off-the-grid ateliers',
      'Real-time visa requirement and entry advisory checks'
    ],
    travelLayer: 'Travel Recommendations'
  },
  {
    id: 'digital-itinerary',
    tag: 'CAPABILITY 05',
    title: 'Live Digital Itinerary',
    subtitle: 'Day-by-Day Interactive Travel Command',
    description: 'A living digital itinerary accessible offline on any mobile device with real-time gate notifications, chauffeur dispatch updates, and offline city maps.',
    icon: 'Calendar',
    impactMetric: 'Offline Mobile Sync Enabled',
    features: [
      'Chronological day-by-day event breakdown with map anchors',
      'One-tap directions to restaurants, museums, and hotels',
      'Synchronized calendar export (Apple, Google, Outlook)',
      'Digital boarding pass and voucher wallet integration'
    ],
    travelLayer: 'Itinerary Management'
  },
  {
    id: 'booking-orchestration',
    tag: 'CAPABILITY 06',
    title: 'Unified Booking Management',
    subtitle: 'Centralized Reservation & Document Repository',
    description: 'Manage current, past, and upcoming travel in a unified customer vault. Modify flight dates, change room categories, and cancel with transparent terms.',
    icon: 'FileText',
    impactMetric: '1-Click Reservation Rescheduling',
    features: [
      'Centralized e-ticket and invoice retrieval',
      'Automated frequent flyer mileage loyalty crediting',
      'Multi-passenger passport & visa document vault',
      'Transparent refund calculation and instant travel credits'
    ],
    travelLayer: 'Booking Management'
  },
  {
    id: 'price-intelligence',
    tag: 'CAPABILITY 07',
    title: 'Price Intelligence & Fare Lock',
    subtitle: 'Predictive Price Curves & 72-Hour Fare Protection',
    description: 'Track historical flight and hotel price trends. Lock in favorable rates for 72 hours while coordinating travel schedules with friends and family.',
    icon: 'TrendingDown',
    impactMetric: '72-Hour Zero-Risk Fare Lock',
    features: [
      'Transparent AED price breakdowns with all taxes included',
      'Fare comparison matrix across Essential, Flex, and Premium',
      'Historical price trend indicators (Book Now vs. Wait)',
      'Zero credit card surcharge guarantee on all global bookings'
    ],
    travelLayer: 'Pricing Intelligence'
  },
  {
    id: 'travel-concierge',
    tag: 'CAPABILITY 08',
    title: '24/7 Global Travel Concierge',
    subtitle: 'Proactive Flight Disruption Monitoring & Re-Booking',
    description: 'Our dedicated travel operations center monitors air traffic, weather diversions, and missed connections to rebook alternative suites automatically.',
    icon: 'ShieldCheck',
    impactMetric: '< 60s Live Human Response',
    features: [
      'Proactive re-routing during severe weather delays',
      'Dedicated WhatsApp VIP concierge for during-trip requests',
      'Bespoke restaurant reservations at fully-booked Michelin venues',
      'Emergency medical travel assistance and evacuation coordination'
    ],
    travelLayer: 'Traveler Support'
  }
];

// -------------------------------------------------------------
// 6. ACTIVE TRAVEL ALERTS (SIMULATION)
// -------------------------------------------------------------
export const AEROVIA_TRAVEL_ALERTS: ActiveJourneyAlert[] = [
  {
    id: 'alt-01',
    code: 'HND-WX-04',
    title: 'Tokyo Haneda Airspace Clear & Nominal',
    severity: 'nominal',
    location: 'Tokyo (HND)',
    impact: 'All inbound Dubai flights operating on scheduled runway slots.',
    time: 'Updated 4 min ago'
  },
  {
    id: 'alt-02',
    code: 'CDG-GATE-12',
    title: 'Paris CDG Terminal 2E Fast-Track Lounge Open',
    severity: 'nominal',
    location: 'Paris (CDG)',
    impact: 'Dedicated private customs clearance operating normally.',
    time: 'Updated 12 min ago'
  },
  {
    id: 'alt-03',
    code: 'SIN-FLOW-88',
    title: 'Singapore Changi Jewel Skybridge Transit Active',
    severity: 'nominal',
    location: 'Singapore (SIN)',
    impact: 'Smooth airside inter-terminal transfer running at < 10 min transit.',
    time: 'Updated 18 min ago'
  }
];

// -------------------------------------------------------------
// 7. AEROVIA METADATA
// -------------------------------------------------------------
export const AEROVIA_METADATA = {
  projectNumber: 74,
  brandName: 'AEROVIA',
  positioning: 'Intelligent Global Travel Platform',
  tagline: 'Go Further. Stay Better.',
  eyebrow: 'GLOBAL TRAVEL PLATFORM',
  headline: 'Go Further. Stay Better.',
  heroDescription: 'Flights, stays, and complete journeys — intelligently brought together in one seamless travel experience.',
  journeyNotice: 'Discover → Compare → Compose → Book → Travel',
  conceptualNotice: 'TRAVEL SYSTEM SIMULATION • CONCEPTUAL GLOBAL TRAVEL PLATFORM • ALL FLIGHT SCHEDULES & HOTEL PRICING ARE FOR DEMONSTRATION ONLY',
  uaeAnchor: 'Dubai, Abu Dhabi & GCC Departure Hub • Luxury Aviation Standard • Seamless Worldwide Itineraries in AED'
};
