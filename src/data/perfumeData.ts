export interface PerfumeProduct {
  id: string;
  name: string;
  category: 'Men' | 'Women' | 'Unisex' | 'Oud';
  tagline: string;
  price: number;
  sizes: string[];
  fragranceFamily: 'Oud' | 'Woody' | 'Floral' | 'Fresh' | 'Citrus' | 'Amber' | 'Gourmand' | 'Oriental';
  concentration: 'Eau de Parfum' | 'Extrait de Parfum' | 'Attar Oil';
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  longevityHours: string;
  projectionRating: 'Moderate' | 'Heavy' | 'Enormous';
  occasion: string[];
  season: string[];
  description: string;
  image: string;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  stockStatus: 'In Stock' | 'Low Stock' | 'Pre-Order';
  sampleNotice: string;
}

export interface PerfumeIngredient {
  id: string;
  name: string;
  category: 'Resin & Wood' | 'Floral' | 'Citrus & Fresh' | 'Spices' | 'Balsamic & Sweet';
  scentCharacter: string;
  origin: string;
  pairedWith: string[];
  image: string;
}

export interface PerfumeJournalArticle {
  id: string;
  title: string;
  category: 'Guide' | 'Craftsmanship' | 'Heritage' | 'Masterclass';
  readingTime: string;
  excerpt: string;
  fullContent: string[];
  image: string;
}

export interface PerfumeCreator {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experienceYears: number;
  image: string;
  signatureCreations: string[];
  sampleNotice: string;
}

export interface PerfumeFaq {
  id: string;
  question: string;
  answer: string;
}

export const PERFUME_BRAND_INFO = {
  name: "MAISON DE L'AMBRE",
  subName: "NOIR & OUD HAUTE PARFUMERIE",
  tagline: "Haute Parfumerie & Arabian Oud Masterpieces",
  phone: "+971 4 800 7880",
  whatsapp: "https://wa.me/971500000000?text=Hello%20Maison%20De%20L'Ambre,%20I%20would%20like%20to%20consult%20a%20fragrance%20specialist.",
  email: "concierge@maisondelambre.ae",
  address: "The Dubai Mall — Fashion Avenue, Level 1 • Dubai, UAE",
  hours: "Daily: 10:00 AM – 11:00 PM • Weekend: 10:00 AM – Midnight",
  conceptNotice: "CONCEPT PROJECT — Premium AED 2,499 Package Luxury Perfume E-Commerce Demo",
  sampleBuildBadge: "Sample Build #11",
};

export const PERFUME_PRODUCTS: PerfumeProduct[] = [
  {
    id: "midnight-oud",
    name: "Midnight Oud Extrait",
    category: "Oud",
    tagline: "A majestic fusion of Cambodian agarwood, dark damask rose, and smoldering amber resin.",
    price: 399,
    sizes: ["50ml", "100ml"],
    fragranceFamily: "Oud",
    concentration: "Extrait de Parfum",
    topNotes: ["Saffron", "Bergamot", "Cardamom"],
    heartNotes: ["Damask Rose", "Smoked Incense", "Patchouli"],
    baseNotes: ["Cambodian Oud", "Amber Resin", "Leather"],
    longevityHours: "14+ Hours",
    projectionRating: "Enormous",
    occasion: ["Evening Galas", "Royal Gatherings", "Special Occasions"],
    season: ["Autumn", "Winter"],
    description: "Handcrafted in small batches using rare 30-year aged Cambodian agarwood oil. Midnight Oud opens with warm spicy saffron before deepening into a dark velvety rose and rich resinous oud base.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    isBestseller: true,
    isNewArrival: true,
    stockStatus: "In Stock",
    sampleNotice: "Sample Product — Concept Build #11"
  },
  {
    id: "noir-sovereign",
    name: "Noir Sovereign",
    category: "Men",
    tagline: "Commanding cedarwood, smoked vetiver, and crisp Italian bergamot.",
    price: 329,
    sizes: ["50ml", "100ml"],
    fragranceFamily: "Woody",
    concentration: "Eau de Parfum",
    topNotes: ["Italian Bergamot", "Pink Pepper", "Grapefruit"],
    heartNotes: ["Haitian Vetiver", "Cedarwood", "Geranium"],
    baseNotes: ["Oakmoss", "Black Amber", "Tonka Bean"],
    longevityHours: "10+ Hours",
    projectionRating: "Heavy",
    occasion: ["Executive Meetings", "Formal Evening", "Black Tie"],
    season: ["Autumn", "Winter", "Spring"],
    description: "Designed for the modern leader. Noir Sovereign marries sharp citrus top notes with a deep woody spine of cedarwood and smoked Haitian vetiver.",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop",
    isBestseller: true,
    stockStatus: "In Stock",
    sampleNotice: "Sample Product — Concept Build #11"
  },
  {
    id: "rose-elan",
    name: "Rose Élan",
    category: "Women",
    tagline: "Blooming Grasse rose petals wrapped in soft white musk and sparkling lychee.",
    price: 289,
    sizes: ["50ml", "100ml"],
    fragranceFamily: "Floral",
    concentration: "Eau de Parfum",
    topNotes: ["Lychee", "Mandarin", "Pink Peony"],
    heartNotes: ["Grasse Centifolia Rose", "Lily of the Valley", "Iris"],
    baseNotes: ["White Musk", "Soft Sandalwood", "Vanilla Bean"],
    longevityHours: "8+ Hours",
    projectionRating: "Moderate",
    occasion: ["Daytime Elegance", "Romantic Evenings", "Weddings"],
    season: ["Spring", "Summer"],
    description: "An ode to timeless femininity. Rose Élan sparkles with juicy lychee and peony before unfolding into a lush heart of May rose and powdery iris.",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    isBestseller: true,
    stockStatus: "In Stock",
    sampleNotice: "Sample Product — Concept Build #11"
  },
  {
    id: "santal-27",
    name: "Santal 27",
    category: "Unisex",
    tagline: "Creamy Australian sandalwood, papyrus, cardamom, and soft violet leaves.",
    price: 349,
    sizes: ["50ml", "100ml"],
    fragranceFamily: "Woody",
    concentration: "Eau de Parfum",
    topNotes: ["Cardamom", "Violet Leaf", "Iris"],
    heartNotes: ["Papyrus", "Cedar", "Leather"],
    baseNotes: ["Australian Sandalwood", "Ambergris", "Musk"],
    longevityHours: "12+ Hours",
    projectionRating: "Heavy",
    occasion: ["Signature Daily", "Art Galleries", "Boutique Dinners"],
    season: ["All Seasons"],
    description: "An iconic minimalist masterpiece. Santal 27 wraps creamy sandalwood in spicy cardamom and papyrus smoke for an intoxicating unisex aura.",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop",
    isBestseller: true,
    stockStatus: "In Stock",
    sampleNotice: "Sample Product — Concept Build #11"
  },
  {
    id: "velvet-bloom",
    name: "Velvet Bloom",
    category: "Women",
    tagline: "Sensual tuberose, night-blooming jasmine, and warm Madagascar bourbon vanilla.",
    price: 269,
    sizes: ["50ml", "100ml"],
    fragranceFamily: "Gourmand",
    concentration: "Eau de Parfum",
    topNotes: ["Orange Blossom", "Pear", "Bergamot"],
    heartNotes: ["Tuberose", "Sambac Jasmine", "Ylang-Ylang"],
    baseNotes: ["Bourbon Vanilla", "White Amber", "Cashmere Wood"],
    longevityHours: "9+ Hours",
    projectionRating: "Heavy",
    occasion: ["Date Night", "Cocktail Parties", "Evening Out"],
    season: ["Autumn", "Winter"],
    description: "Opulent and addictive. Velvet Bloom surrounds white floral tuberose and sambac jasmine with creamy Madagascar bourbon vanilla.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    isNewArrival: true,
    stockStatus: "In Stock",
    sampleNotice: "Sample Product — Concept Build #11"
  },
  {
    id: "cedar-royale",
    name: "Cedar Royale",
    category: "Men",
    tagline: "Noble Atlas cedarwood, black pepper, juniper berries, and smoked incense.",
    price: 299,
    sizes: ["50ml", "100ml"],
    fragranceFamily: "Woody",
    concentration: "Eau de Parfum",
    topNotes: ["Juniper Berry", "Black Pepper", "Lemon Zest"],
    heartNotes: ["Atlas Cedarwood", "Pine Needles", "Clary Sage"],
    baseNotes: ["Smoked Frankincense", "Vetiver", "Leather"],
    longevityHours: "10+ Hours",
    projectionRating: "Heavy",
    occasion: ["Business", "Outdoor Galas", "Autumn Gatherings"],
    season: ["Autumn", "Winter"],
    description: "Evoking crisp mountain pine forests and royal cedar groves. Cedar Royale pairs sharp juniper with dry incense smoke and Atlas cedar.",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop",
    stockStatus: "In Stock",
    sampleNotice: "Sample Product — Concept Build #11"
  },
  {
    id: "amber-muse",
    name: "Amber Muse",
    category: "Unisex",
    tagline: "Golden amber accord, dark benzoin, tonka bean, and warm cinnamon bark.",
    price: 319,
    sizes: ["50ml", "100ml"],
    fragranceFamily: "Amber",
    concentration: "Extrait de Parfum",
    topNotes: ["Cinnamon Bark", "Nutmeg", "Coriander"],
    heartNotes: ["Labdanum", "Benzoin", "Myrrh"],
    baseNotes: ["Golden Amber", "Tonka Bean", "Madagascar Vanilla"],
    longevityHours: "13+ Hours",
    projectionRating: "Enormous",
    occasion: ["Special Events", "Intimate Dinners", "Winter Evenings"],
    season: ["Autumn", "Winter"],
    description: "A liquid gold elixir. Amber Muse envelopes the senses in warm cinnamon, sweet benzoin, labdanum resin, and glowing amber warmth.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    isNewArrival: true,
    stockStatus: "In Stock",
    sampleNotice: "Sample Product — Concept Build #11"
  },
  {
    id: "azure-homme",
    name: "Azure Homme",
    category: "Men",
    tagline: "Invigorating marine sea spray, Sicilian bergamot, and sun-bleached driftwood.",
    price: 249,
    sizes: ["50ml", "100ml"],
    fragranceFamily: "Citrus",
    concentration: "Eau de Parfum",
    topNotes: ["Sicilian Bergamot", "Sea Salt Accord", "Green Apple"],
    heartNotes: ["Rosemary", "Lavender", "Water Lotus"],
    baseNotes: ["Driftwood", "Ambroxan", "White Musk"],
    longevityHours: "7+ Hours",
    projectionRating: "Moderate",
    occasion: ["Daily Summer", "Yacht Trips", "Casual Meetings"],
    season: ["Spring", "Summer"],
    description: "A breath of Mediterranean sea breeze. Azure Homme combines crisp ocean minerals with zesty bergamot and sun-baked driftwood.",
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop",
    stockStatus: "In Stock",
    sampleNotice: "Sample Product — Concept Build #11"
  },
  {
    id: "desert-smoke",
    name: "Desert Smoke",
    category: "Oud",
    tagline: "Rare Taif rose, roasted coffee beans, smoked frankincense, and dark royal oud.",
    price: 389,
    sizes: ["50ml", "100ml"],
    fragranceFamily: "Oud",
    concentration: "Extrait de Parfum",
    topNotes: ["Roasted Coffee Bean", "Cardamom", "Saffron"],
    heartNotes: ["Taif Rose", "Smoked Olibanum", "Clove"],
    baseNotes: ["Dark Royal Oud", "Tobacco Leaf", "Civet Accord"],
    longevityHours: "15+ Hours",
    projectionRating: "Enormous",
    occasion: ["Majlis Evenings", "Royal Weddings", "Winter Gatherings"],
    season: ["Autumn", "Winter"],
    description: "A homage to Arabian hospitality and desert bonfires. Blending Arabic coffee, rare Taif rose petals, frankincense smoke, and aged dark oud oil.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    isBestseller: true,
    stockStatus: "Low Stock",
    sampleNotice: "Sample Product — Concept Build #11"
  },
  {
    id: "fleur-noire",
    name: "Fleur Noire",
    category: "Women",
    tagline: "Mysterious black orchid, dark plum, patchouli, and bittersweet dark chocolate.",
    price: 299,
    sizes: ["50ml", "100ml"],
    fragranceFamily: "Oriental",
    concentration: "Eau de Parfum",
    topNotes: ["Black Plum", "Truffle", "Bergamot"],
    heartNotes: ["Black Orchid", "Lotus", "Spiced Rose"],
    baseNotes: ["Dark Chocolate", "Patchouli", "Sandalwood", "Incense"],
    longevityHours: "11+ Hours",
    projectionRating: "Heavy",
    occasion: ["Gothic Elegance", "Nightclubs", "Private Dinners"],
    season: ["Autumn", "Winter"],
    description: "Seductive and mysterious. Fleur Noire combines rare black orchid with dark plum, bitter cocoa, and patchouli.",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
    stockStatus: "In Stock",
    sampleNotice: "Sample Product — Concept Build #11"
  },
  {
    id: "white-amber",
    name: "White Amber & Silk",
    category: "Unisex",
    tagline: "Luminous white amber, sparkling pear, cashmere silk, and clean cedarwood.",
    price: 279,
    sizes: ["50ml", "100ml"],
    fragranceFamily: "Fresh",
    concentration: "Eau de Parfum",
    topNotes: ["Anjou Pear", "Ambrette Seed", "Mandarin"],
    heartNotes: ["White Amber", "Orris Concrete", "Silk Accord"],
    baseNotes: ["Cashmere Wood", "Clean Cedar", "Musk"],
    longevityHours: "9+ Hours",
    projectionRating: "Moderate",
    occasion: ["Minimalist Daily", "Office", "Weekend Brunch"],
    season: ["Spring", "Summer", "Autumn"],
    description: "Pure tactile luxury. White Amber & Silk feels like crisp white linen sheets warming under golden morning sunlight.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    isNewArrival: true,
    stockStatus: "In Stock",
    sampleNotice: "Sample Product — Concept Build #11"
  },
  {
    id: "attar-oud-royal",
    name: "Attar Oud Royal",
    category: "Oud",
    tagline: "100% pure undiluted perfume oil with Dehn Al Oud, saffron, and deer musk accord.",
    price: 399,
    sizes: ["12ml Attar Bottle"],
    fragranceFamily: "Oud",
    concentration: "Attar Oil",
    topNotes: ["Wild Saffron", "Rose Otto"],
    heartNotes: ["Dehn Al Oud Hindi", "Ambergris"],
    baseNotes: ["Musk Accord", "Sandalwood Oil"],
    longevityHours: "24+ Hours",
    projectionRating: "Enormous",
    occasion: ["Traditional Ceremonies", "Eid", "Royal Majlis"],
    season: ["All Seasons"],
    description: "The peak of traditional Arabian perfumery. 100% pure alcohol-free concentrated oil applied via glass wand.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    isBestseller: true,
    stockStatus: "Low Stock",
    sampleNotice: "Sample Product — Concept Build #11"
  }
];

export const PERFUME_INGREDIENTS: PerfumeIngredient[] = [
  {
    id: "ing-1",
    name: "Cambodian Agarwood (Oud)",
    category: "Resin & Wood",
    scentCharacter: "Deeply resinous, woody, animalic, warm, and balsamic.",
    origin: "Koh Kong, Cambodia",
    pairedWith: ["Damask Rose", "Saffron", "Amber", "Leather"],
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ing-2",
    name: "Grasse Centifolia Rose",
    category: "Floral",
    scentCharacter: "Velvety, honeyed, rich floral, slightly sweet, and powdery.",
    origin: "Grasse, France",
    pairedWith: ["Oud", "Patchouli", "Vanilla", "Bergamot"],
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ing-3",
    name: "Royal Wild Saffron",
    category: "Spices",
    scentCharacter: "Warm, bittersweet, leathery, metallic, and opulent.",
    origin: "Khorasan, Iran",
    pairedWith: ["Rose", "Oud", "Cardamom", "Sandalwood"],
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ing-4",
    name: "Australian Sandalwood",
    category: "Resin & Wood",
    scentCharacter: "Creamy, smooth, buttery wood, warm, and calming.",
    origin: "Western Australia",
    pairedWith: ["Violet Leaf", "Cardamom", "Cedar", "Iris"],
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ing-5",
    name: "Madagascar Bourbon Vanilla",
    category: "Balsamic & Sweet",
    scentCharacter: "Rich, sweet, dark gourmand, woody, and comforting.",
    origin: "Sava Region, Madagascar",
    pairedWith: ["Tuberose", "Amber", "Tonka Bean", "Cocoa"],
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ing-6",
    name: "Calabrian Bergamot",
    category: "Citrus & Fresh",
    scentCharacter: "Zesty, sparkling citrus, slightly floral, and uplifting.",
    origin: "Calabria, Italy",
    pairedWith: ["Vetiver", "Sea Salt", "Tea", "Cedar"],
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop"
  }
];

export const PERFUME_CREATORS: PerfumeCreator[] = [
  {
    id: "creator-1",
    name: "Master Perfumer Henri Laurent",
    role: "Head of Olfactory Creation — Sample Profile",
    specialization: "Haute French Parfumerie & Rose Absolute Extraction",
    experienceYears: 28,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    signatureCreations: ["Rose Élan", "White Amber & Silk"],
    sampleNotice: "Sample Perfumer Profile — Concept Build"
  },
  {
    id: "creator-2",
    name: "Master Attar Craftsman Al-Sayed Tariq",
    role: "Royal Oud Specialist — Sample Profile",
    specialization: "Dehn Al Oud Distillation & Aged Amber Resin Blends",
    experienceYears: 32,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    signatureCreations: ["Midnight Oud", "Desert Smoke", "Attar Oud Royal"],
    sampleNotice: "Sample Craftsman Profile — Concept Build"
  },
  {
    id: "creator-3",
    name: "Elena Rostova",
    role: "Niche Fragrance Architect — Sample Profile",
    specialization: "Minimalist Sandalwood & Ambergris Accords",
    experienceYears: 18,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    signatureCreations: ["Santal 27", "Amber Muse"],
    sampleNotice: "Sample Designer Profile — Concept Build"
  }
];

export const PERFUME_JOURNAL_ARTICLES: PerfumeJournalArticle[] = [
  {
    id: "art-1",
    title: "How To Choose Your Signature Scent in Dubai",
    category: "Guide",
    readingTime: "5 Min Read",
    excerpt: "Understanding fragrance families, skin chemistry, weather impact, and finding a scent that embodies your character.",
    fullContent: [
      "Choosing a signature scent is an intimate journey of self-expression. In the Middle Eastern climate, heat and humidity affect how perfume molecules evaporate.",
      "Opt for high concentration Extraits de Parfum or rich resinous bases like Cambodian Oud, Vetiver, and Amber that blossom under warmth rather than evaporating quickly."
    ],
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "art-2",
    title: "Understanding Oud: The Liquid Gold of Perfumery",
    category: "Heritage",
    readingTime: "7 Min Read",
    excerpt: "Exploring the history, distillation process, and grades of rare Aquilaria agarwood from Assam to Koh Kong.",
    fullContent: [
      "Oud is formed when Aquilaria trees produce a dark aromatic resin in response to natural infection. Aged for decades, pure Dehn Al Oud possesses complex animalic, woody, and honeyed facets.",
      "Discover why pure Cambodian and Hindi oud oils are treasured above gold across Arabian palaces."
    ],
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "art-3",
    title: "The Art of Fragrance Layering (Al-Bukhoor & Attar)",
    category: "Masterclass",
    readingTime: "6 Min Read",
    excerpt: "Step-by-step guide to layering scented oils, bukhoor incense smoke, and French spray perfume.",
    fullContent: [
      "Middle Eastern fragrance layering is a sacred daily ritual. Begin with a hydrating body lotion, apply concentrated Attar oil to pulse points, infuse garments with bukhoor smoke, and finish with a spray of Eau de Parfum."
    ],
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop"
  }
];

export const PERFUME_FAQS: PerfumeFaq[] = [
  {
    id: "pf-1",
    question: "What is the difference between Eau de Parfum and Extrait de Parfum?",
    answer: "Eau de Parfum contains 15–20% perfume oil concentration, lasting 8–10 hours. Extrait de Parfum contains 25–35% pure oil concentration, offering 12–16+ hours of intense longevity and rich projection."
  },
  {
    id: "pf-2",
    question: "Are your fragrances manufactured with authentic Cambodian Oud?",
    answer: "Yes, our Midnight Oud and Desert Smoke formulations utilize 100% natural 30-year aged Cambodian agarwood oil sourced directly from sustainable plantations."
  },
  {
    id: "pf-3",
    question: "Can I order a Discovery Set before purchasing a full 100ml bottle?",
    answer: "Yes, our Signature Discovery Collection includes 6 × 2ml atomizer sprays (AED 129) along with a AED 100 voucher redeemable toward any full-size bottle."
  },
  {
    id: "pf-4",
    question: "Do you deliver same-day across Dubai and next-day across the UAE?",
    answer: "Yes, orders placed before 2:00 PM receive same-day concierge courier delivery in Dubai, and guaranteed next-day delivery across Abu Dhabi, Sharjah, and Al Ain."
  },
  {
    id: "pf-5",
    question: "How should I store my luxury perfume to preserve its scent?",
    answer: "Keep your fragrance bottles away from direct sunlight, extreme heat, and humidity. Storing them inside their velvet-lined presentation box at room temperature (20°C) preserves top notes for years."
  },
  {
    id: "pf-6",
    question: "Do you offer bottle engraving for personalized gifts?",
    answer: "Yes, we provide custom laser engraving (up to 3 initials or a special date) on metallic caps and glass bottles."
  },
  {
    id: "pf-7",
    question: "Can I speak directly with a Fragrance Concierge on WhatsApp?",
    answer: "Yes, click our WhatsApp Concierge button to consult directly with an olfactory specialist for personalized scent recommendations."
  },
  {
    id: "pf-8",
    question: "What is Attar oil and how is it applied?",
    answer: "Attar is a 100% pure alcohol-free concentrated perfume oil applied using a delicate glass wand directly onto pulse points (wrists, neck, behind ears)."
  },
  {
    id: "pf-9",
    question: "Do you provide luxury gift wrapping?",
    answer: "Every order arrives in our signature gold-embossed black magnetic box with hand-tied satin ribbon and a wax-sealed gift note."
  },
  {
    id: "pf-10",
    question: "Is checkout safe on this website?",
    answer: "This website is a concept project demonstration. All checkout forms and orders are sample builds with zero real financial processing."
  }
];

export const DEMO_PERFUME_METRICS = [
  { val: "12 Fragrances", label: "Masterpiece Offerings", sub: "Men, Women, Unisex & Royal Oud" },
  { val: "8 Scent Families", label: "Olfactory Palettes", sub: "Oud, Woody, Floral, Amber & Citrus" },
  { val: "20+ Ingredients", label: "Raw Botanical Library", sub: "Grasse rose, Cambodian oud & saffron" },
  { val: "6 Samples", label: "Discovery Collection", sub: "2ml atomizer sprays with voucher" },
];
