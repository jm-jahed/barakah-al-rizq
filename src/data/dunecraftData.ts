export interface DunecraftExperience {
  id: string;
  name: string;
  category: string;
  duration: string;
  priceAED: string;
  highlights: string[];
  description: string;
  image: string;
  itinerary: string[];
}

export interface DunecraftCaseStudy {
  clientTitle: string;
  location: string;
  challenge: string;
  solution: string;
  metrics: {
    guestsHosted: string;
    onTimeLogistics: string;
    feedbackRating: string;
  };
  image: string;
}

export interface DunecraftLeader {
  name: string;
  role: string;
  experience: string;
  specialization: string;
  image: string;
}

export interface DunecraftInsight {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  image: string;
}

export interface DunecraftLocation {
  city: string;
  reserve: string;
  description: string;
  address: string;
  phone: string;
  hours: string;
}

export const DUNECRAFT_BRAND = {
  name: "DUNECRAFT",
  tagline: "Where the Desert Comes Alive.",
  subheading: "Premium UAE desert safaris, dune bashing adventures, overnight Bedouin camping, quad biking, and corporate desert events across Dubai Al Awir and Abu Dhabi Al Khatim reserves.",
  phone: "+971 4 887 3322",
  whatsapp: "https://wa.me/971508877665?text=Hello%20DUNECRAFT,%20I%20would%20like%20to%20book%20a%20desert%20safari%20experience.",
  email: "safari@dunecraft.ae",
  guestsHosted: "60,000+",
  guestRating: "4.9★",
  experiencesCount: "15+",
  locationsCount: 2,
};

export const DUNECRAFT_BADGES = [
  { name: "AURELIA TRAVEL", badge: "VIP Tourism Partner" },
  { name: "VELORA HOUSE", badge: "Luxury Concierge Partner" },
  { name: "OASIRA", badge: "Eco Desert Reserve Partner" },
  { name: "DUBAI AL AWIR", badge: "Red Dunes Gateway" },
  { name: "ABU DHABI AL KHATIM", badge: "Conservation Reserve" },
  { name: "LICENSED GUIDES", badge: "RTA Certified Safari Leads" }
];

export const DUNECRAFT_EXPERIENCES: DunecraftExperience[] = [
  {
    id: "sunset-dune-safari",
    name: "Red Dune Sunset Safari & Bedouin Camp",
    category: "Sunset & Culture",
    duration: "6 Hours",
    priceAED: "320",
    highlights: ["45-Min Dune Bashing in 4x4 Land Cruiser", "Sunset Sandboarding & Camel Ride", "Gourmet Live BBQ Buffet & Tanoura Show", "Shisha Lounge & Henna Tattooing"],
    description: "Our signature desert safari across Dubai's Lahbab Red Dunes followed by a star-lit evening at our luxury Bedouin camp.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop",
    itinerary: ["3:00 PM Hotel Pickup in 4x4 Land Cruiser", "4:00 PM Red Dunes Bashing & Sandboarding", "6:00 PM Sunset Photoshoot & Camel Ride", "7:00 PM Bedouin Camp BBQ & Live Entertainment", "9:00 PM Hotel Return Drop-off"]
  },
  {
    id: "private-vip-safari",
    name: "Private VIP Royal Desert Safari",
    category: "VIP & Private",
    duration: "7 Hours",
    priceAED: "1,450",
    highlights: ["Private 4x4 Vehicle for Your Group", "Exclusive Air-Conditioned VIP Pavilion", "5-Course Table Service Dinner", "Private Falconry & Star-Gazing Guide"],
    description: "An exclusive royal desert experience designed for families, VIPs, and couples seeking complete privacy and luxury service.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    itinerary: ["Private Pick-up from Residence/Hotel", "Exclusive Dune Route with Master Safari Driver", "Private Falconry Show & Sunset Drinks", "5-Course Gourmet Table Dining in VIP Tent", "Return Transport with Chauffeur"]
  },
  {
    id: "overnight-camping",
    name: "Overnight Glamping & Stargazing Safari",
    category: "Overnight & Camping",
    duration: "16 Hours (Overnight)",
    priceAED: "750",
    highlights: ["Luxury Air-Conditioned Bedouin Tent", "Campfire Stargazing & Acoustic Oud", "Fresh Arabian Breakfast at Sunrise", "Morning Camel Trek Across Dunes"],
    description: "Sleep under the clear desert stars in our air-conditioned luxury tents and wake up to a breathtaking desert sunrise.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    itinerary: ["Day 1 3:30 PM Pickup & Evening Safari", "Day 1 9:30 PM Campfire Stargazing & Tent Check-in", "Day 2 6:00 AM Sunrise Camel Trek", "Day 2 7:30 AM Fresh Breakfast", "Day 2 9:30 AM Hotel Return"]
  },
  {
    id: "quad-biking-adventure",
    name: "Extreme Dune Quad Biking & Sandboarding",
    category: "Extreme Thrills",
    duration: "4 Hours",
    priceAED: "450",
    highlights: ["60-Min Self-Drive Yamaha Quad Bike", "Guided Trail across Open Desert Dunes", "Sandboarding Down 100ft Red Dunes", "Helmet & Safety Gear Included"],
    description: "High-octane self-drive quad biking expedition across open desert terrain with professional safety marshals.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
    itinerary: ["8:00 AM Hotel Pickup", "9:00 AM Quad Bike Safety Briefing & Gear Up", "9:15 AM Guided Quad Trail & Sandboarding", "11:30 AM Return Hotel Drop-off"]
  },
  {
    id: "sunrise-camel-trekking",
    name: "Sunrise Desert Oasis & Camel Trek",
    category: "Morning & Wildlife",
    duration: "4 Hours",
    priceAED: "280",
    highlights: ["Peaceful Sunrise Camel Caravan Trek", "Desert Oryx & Gazelle Wildlife Spotting", "Traditional Emirati Breakfast & Karak Tea", "Falcon Photo Opportunity"],
    description: "Experience the tranquil early morning desert breeze, wild gazelles, and a serene camel trek across golden dunes.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    itinerary: ["5:00 AM Hotel Pickup", "6:00 AM Sunrise Camel Caravan", "7:15 AM Wildlife Spotting at Reserve Oasis", "8:00 AM Emirati Breakfast & Return"]
  },
  {
    id: "corporate-desert-event",
    name: "Corporate Desert Event & Private Camp Buyout",
    category: "Corporate & Groups",
    duration: "6 to 8 Hours",
    priceAED: "650",
    highlights: ["Exclusive Full Camp Buyout (up to 200 Guests)", "Team-Building Dune Rally & Quad Races", "Stage, Sound & Live Arabian Music", "Custom Branded Camp Decor & Catering"],
    description: "Tailor-made corporate offsites, team-building rallies, and gala dinners in our private desert reserve camp.",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1200&auto=format&fit=crop",
    itinerary: ["Convoys of 4x4 Land Cruisers Pick-up", "Team Dune Rally & Sandboarding Challenges", "Private Sunset Cocktail Reception", "Gala Dinner & Awards Presentation"]
  }
];

export const DUNECRAFT_CASE_STUDY: DunecraftCaseStudy = {
  clientTitle: "International Tech Company Offsite — 85 Employee Desert Gala",
  location: "Dubai Al Awir Conservation Reserve Camp",
  challenge: "Logistics-heavy team offsite for 85 international delegates requiring seamless 15-vehicle convoy transport, team activities, and branded gala dinner.",
  solution: "Provided full camp buyout with coordinated 4x4 Land Cruiser convoys, quad biking trails, live BBQ buffet, camel trekking, and stage entertainment.",
  metrics: {
    guestsHosted: "85 Delegates",
    onTimeLogistics: "100% On-Time Convoy",
    feedbackRating: "4.9★ Guest Rating"
  },
  image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop"
};

export const DUNECRAFT_LEADERS: DunecraftLeader[] = [
  {
    name: "Rashid Al-Farsi",
    role: "Founder & Master Safari Guide",
    experience: "17+ Yrs UAE Desert Expedition Lead",
    specialization: "Red Dune Navigation & Arabian Wildlife",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Sarih Bin Rashed",
    role: "Head of Safari Operations",
    experience: "14+ Yrs 4x4 Fleet Management & Safety",
    specialization: "Off-Road Vehicle Fleet Maintenance",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Zaid Vance",
    role: "Head of Corporate & VIP Events",
    experience: "12+ Yrs Hospitality Event Production",
    specialization: "Private Camp Buyouts & Gala Dinners",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Amina Al-Nuaimi",
    role: "Head of Bedouin Camp Experience",
    experience: "10+ Yrs Cultural Hospitality & Culinary",
    specialization: "Authentic Arabian Gastronomy & Arts",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  }
];

export const DUNECRAFT_INSIGHTS: DunecraftInsight[] = [
  {
    id: "best-time-desert-safari",
    title: "Best Time of Year for a UAE Desert Safari",
    category: "Seasonality",
    readTime: "4 min read",
    summary: "Navigating October to April peak desert weather, cooler evening temperatures, and sunset timing.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "what-to-wear-desert",
    title: "What to Wear and Bring on a Desert Adventure",
    category: "Packing Guide",
    readTime: "4 min read",
    summary: "Breathable clothing, footwear for dune sandboarding, sunglasses, and camera essentials.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "sunrise-vs-sunset-safari",
    title: "Sunrise vs Sunset Safari: Which to Choose?",
    category: "Comparisons",
    readTime: "5 min read",
    summary: "Comparing early morning wildlife spotting and calm winds against golden hour sunset photos and camp entertainment.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "planning-corporate-desert-event",
    title: "Planning a Corporate Desert Event in Dubai",
    category: "Corporate",
    readTime: "5 min read",
    summary: "Logistics, vehicle convoys, camp branding, safety marshals, and team-building activities.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "bedouin-camp-traditions",
    title: "The Cultural Story Behind Bedouin Desert Camps",
    category: "Culture",
    readTime: "5 min read",
    summary: "Falconry heritage, Arabian coffee rituals, Henna art, and traditional Tanoura folk dance.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "family-desert-experiences",
    title: "Family-Friendly Desert Experiences in the UAE",
    category: "Family Guide",
    readTime: "4 min read",
    summary: "Gentle dune drives, child-safe camel rides, sandboarding, and kid-friendly camp dining.",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=600&auto=format&fit=crop"
  }
];

export const DUNECRAFT_LOCATIONS: DunecraftLocation[] = [
  {
    city: "DUBAI",
    reserve: "Al Awir Red Dunes Reserve Gateway",
    description: "Main departure gateway for Lahbab High Red Dunes safaris, quad biking trails, and our flagship Bedouin camp.",
    address: "Al Awir Desert Reserve, Dubai, UAE (Hotel Pickup Included)",
    phone: "+971 4 887 3322",
    hours: "Daily Pickup: 6:00 AM & 3:00 PM"
  },
  {
    city: "ABU DHABI",
    reserve: "Al Khatim Conservation Reserve Gateway",
    description: "Capital desert gateway providing pristine sweeping sand dunes, gazelle wildlife spotting, and VIP private tents.",
    address: "Al Khatim Desert Reserve, Abu Dhabi, UAE (Hotel Pickup Included)",
    phone: "+971 2 449 8811",
    hours: "Daily Pickup: 6:30 AM & 3:30 PM"
  }
];

export const DUNECRAFT_TESTIMONIALS = [
  {
    quote: "DUNECRAFT gave our family the most memorable evening of our entire UAE trip — the sunset over the red dunes, camel ride, and BBQ dinner were incredible.",
    clientName: "The Anderson Family",
    vehicle: "Red Dune Sunset Safari",
    location: "Visiting from UK",
    rating: 5
  },
  {
    quote: "Our corporate offsite of 85 staff was handled flawlessly. Convoy pick-up on time, private camp buyout, and amazing quad biking.",
    clientName: "David Miller",
    vehicle: "Corporate Camp Buyout",
    location: "Dubai",
    rating: 5
  },
  {
    quote: "The private VIP royal safari was worth every dirham. Private tent, 5-course dinner table service, and zero crowds.",
    clientName: "Rashid Al Nuaimi",
    vehicle: "Private VIP Royal Safari",
    location: "Abu Dhabi",
    rating: 5
  },
  {
    quote: "Quad biking over 100ft dunes was high-octane fun! Safety marshals were top notch and the sandboarding was a blast.",
    clientName: "Marco Rossi",
    vehicle: "Extreme Dune Quad Biking",
    location: "Dubai Al Awir",
    rating: 5
  },
  {
    quote: "Waking up in a luxury air-conditioned Bedouin tent to a desert sunrise was peaceful and magical. Highly recommend DUNECRAFT.",
    clientName: "Sarah Jenkins",
    vehicle: "Overnight Glamping Safari",
    location: "Al Khatim Reserve",
    rating: 5
  }
];

export const DUNECRAFT_FAQS = [
  {
    question: "Is dune bashing safe for young children and elderly guests?",
    answer: "We offer both high-thrill red dune bashing for adults and gentle, smooth desert drives specifically for families with young children or pregnant/elderly guests."
  },
  {
    question: "What should I wear on a desert safari?",
    answer: "We recommend comfortable loose cotton clothing, sandals or sneakers suitable for walking on sand, sunglasses, and a light jacket for winter evenings."
  },
  {
    question: "Do you provide hotel pickup and drop-off?",
    answer: "Yes! All safari packages include complimentary door-to-door pickup and return transport in air-conditioned 4x4 Land Cruisers from any Dubai or Abu Dhabi hotel/residence."
  },
  {
    question: "Can I book a private VIP safari just for my group?",
    answer: "Yes. Our Private VIP Royal Safari provides an exclusive 4x4 vehicle, private master driver, and air-conditioned VIP pavilion with table service dining."
  },
  {
    question: "Do you cater to vegetarian and dietary restrictions at camp dinners?",
    answer: "Yes. Our live BBQ buffet includes extensive vegetarian, vegan, gluten-free, and Halal options clearly labeled."
  },
  {
    question: "Is overnight glamping camping available?",
    answer: "Yes. Our Overnight Safari includes luxury air-conditioned tents with real beds, campfire stargazing, acoustic oud, and sunrise camel trekking with fresh breakfast."
  },
  {
    question: "Can DUNECRAFT host large corporate groups?",
    answer: "Yes. We accommodate corporate events of up to 200+ guests with private camp buyouts, 4x4 convoy logistics, stage AV, team-building rallies, and branding."
  },
  {
    question: "What happens if weather or sandstorm conditions are poor?",
    answer: "If heavy weather or sandstorms affect safety, your booking will be rescheduled to another date or fully refunded without penalty."
  },
  {
    question: "Do you offer professional photography during the safari?",
    answer: "Yes. Our guides assist with sunset dune photos, camel rides, and falconry photo opportunities included in your package."
  },
  {
    question: "How do I book my desert safari experience?",
    answer: "Click our 'Book Your Safari' button, use our interactive Safari Planner tool, or message our safari concierge directly on WhatsApp."
  }
];