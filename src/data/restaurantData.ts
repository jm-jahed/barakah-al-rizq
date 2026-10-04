export interface MenuItem {
  id: string;
  name: string;
  arabicName?: string;
  category: 'Signature' | 'Starters' | 'Mains' | 'Grills' | 'Seafood' | 'Vegetarian' | 'Desserts' | 'Coffee' | 'Beverages';
  description: string;
  ingredients: string[];
  dietary: ('Vegetarian' | 'Vegan' | 'Gluten-Free' | 'Chef Special' | 'Nut-Free' | 'Halal' | 'Dairy-Free' | 'Spicy')[];
  spiceLevel?: 0 | 1 | 2 | 3;
  price: number;
  portionSize?: string;
  image: string;
  chefNote?: string;
  prepTime?: string;
  calories?: string;
  isBestseller?: boolean;
  isNewArrival?: boolean;
}

export interface IngredientItem {
  id: string;
  name: string;
  category: 'Spices & Herbs' | 'Proteins' | 'Produce' | 'Sweets & Aromatics';
  flavorProfile: string;
  origin: string;
  commonPairings: string[];
  image: string;
}

export interface DiningExperience {
  id: string;
  title: string;
  subtitle?: string;
  tagline: string;
  duration: string;
  timing?: string;
  samplePrice: number;
  idealFor: string;
  image: string;
  highlights: string[];
  highlight?: string;
  description?: string;
}

export interface ChefProfile {
  name: string;
  role: string;
  experienceYears: number;
  philosophy: string;
  signatureDish: string;
  biography?: string;
  specialties?: string[];
  signatureDishes?: string[];
  image: string;
  awardsSample: string[];
  sampleNotice: string;
}

export interface RestaurantReview {
  id: string;
  guestName: string;
  occasion: string;
  rating: number;
  date: string;
  comment: string;
  favoriteDish: string;
  notice: string;
}

export interface RestaurantFaq {
  id: string;
  question: string;
  answer: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  category: 'Culinary Heritage' | 'Spices' | 'Pairings' | 'Masterclass';
  readTime: string;
  excerpt: string;
  fullContent: string[];
  image: string;
}

export const RESTAURANT_BRAND_INFO = {
  name: "AL-MAJLIS CUISINE & CAFÉ",
  subName: "NOIR CONTEMPORARY ARABIC DINING",
  tagline: "Modern Middle Eastern Hospitality, Open-Fire Grills & Specialty Coffee in Dubai",
  phone: "+971 4 800 9940",
  whatsapp: "https://wa.me/971500000000?text=Hello%20Al-Majlis,%20I%20would%20like%20to%20reserve%20a%20table.",
  email: "reservations@almajlis-dining.ae",
  address: "DIFC Gate Village, Building 03, Podium Level • Dubai, UAE",
  hours: {
    lunch: "12:00 PM – 3:30 PM",
    dinner: "6:00 PM – 11:30 PM",
    weekend: "12:00 PM – Midnight (Fri–Sun)"
  },
  conceptNotice: "CONCEPT PROJECT — Premium AED 2,499 Package Restaurant Platform Demo",
  sampleBuildBadge: "Sample Build #12",
};

export const RESTAURANT_MENU_ITEMS: MenuItem[] = [
  // Signature
  {
    id: "sig-1",
    name: "24K Gold Dust Wagyu Ribeye Kebabs",
    arabicName: "كباب كوت دي بوف واغيو",
    category: "Signature",
    description: "Grade M9+ Australian Wagyu beef skewers infused with saffron oil, charred over oak charcoal, and dusted with edible 24K gold leaf.",
    ingredients: ["M9+ Wagyu Beef", "Royal Saffron", "Oak Charcoal", "24K Gold Leaf", "Pomegranate Reduction"],
    dietary: ["Chef Special", "Halal", "Gluten-Free"],
    spiceLevel: 1,
    price: 185,
    portionSize: "350g",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    chefNote: "Charred over 400°C oak coals to lock in rich marbling juices.",
    prepTime: "25 Mins",
    calories: "680 kcal",
    isBestseller: true
  },
  {
    id: "sig-2",
    name: "Smoked Lamb Shank Mandi in Clay Pot",
    arabicName: "مندي لحم ضأن مبخر",
    category: "Signature",
    description: "Slow-roasted 12-hour local milk-fed lamb shank served over aromatic smoked basmati rice with pine nuts, raisins, and green shatta sauce.",
    ingredients: ["Milk-Fed Lamb", "Basmati Rice", "Cardamom", "Pine Nuts", "Green Shatta"],
    dietary: ["Chef Special", "Halal", "Gluten-Free", "Dairy-Free"],
    spiceLevel: 2,
    price: 165,
    portionSize: "500g",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
    prepTime: "20 Mins",
    calories: "820 kcal",
    isBestseller: true
  },
  {
    id: "sig-3",
    name: "Pan-Seared Mediterranean Sea Bass",
    arabicName: "سمك القاروص الأبيض المشوي",
    category: "Signature",
    description: "Wild Mediterranean sea bass fillet crisp-seared in za'atar infused olive oil, served over smoked eggplant puree and lemon tahini emulsion.",
    ingredients: ["Wild Sea Bass", "Za'atar", "Smoked Eggplant", "Tahini Emulsion", "Pomegranate Seeds"],
    dietary: ["Chef Special", "Halal", "Gluten-Free", "Dairy-Free"],
    spiceLevel: 0,
    price: 145,
    portionSize: "280g",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
    prepTime: "18 Mins",
    calories: "520 kcal"
  },

  // Starters
  {
    id: "star-1",
    name: "Truffle & Smoked Hummus",
    arabicName: "حمص بالتروفل والدخان",
    category: "Starters",
    description: "Velvety chickpea puree laced with black winter truffle oil, crispy chickpeas, and served with freshly baked wood-fired pita bread.",
    ingredients: ["Chickpeas", "Tahini", "Black Truffle Oil", "Wood-Fired Pita"],
    dietary: ["Vegetarian", "Vegan", "Halal", "Dairy-Free"],
    spiceLevel: 0,
    price: 48,
    portionSize: "200g",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=800&auto=format&fit=crop",
    calories: "340 kcal",
    isBestseller: true
  },
  {
    id: "star-2",
    name: "Crispy Halloumi Fingers with Honey & Sumac",
    arabicName: "أصابع حلومي مقرمشة",
    category: "Starters",
    description: "Golden fried Cypriot halloumi cheese drizzled with wild mountain honey, toasted sesame, and tangy wild sumac powder.",
    ingredients: ["Halloumi Cheese", "Mountain Honey", "Sumac", "Toasted Sesame"],
    dietary: ["Vegetarian", "Halal"],
    spiceLevel: 0,
    price: 45,
    portionSize: "180g",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop",
    calories: "410 kcal"
  },
  {
    id: "star-3",
    name: "Flame-Roasted Eggplant Moutabal",
    arabicName: "متبل باذنجان مشوي",
    category: "Starters",
    description: "Charcoal-smoked aubergine whipped with tahini, garlic, fresh pomegranate arils, and extra virgin Greek olive oil.",
    ingredients: ["Eggplant", "Tahini", "Pomegranate Arils", "Greek Olive Oil"],
    dietary: ["Vegetarian", "Vegan", "Gluten-Free", "Halal", "Dairy-Free"],
    spiceLevel: 0,
    price: 42,
    portionSize: "200g",
    image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800&auto=format&fit=crop",
    calories: "280 kcal"
  },
  {
    id: "star-4",
    name: "Spiced Wagyu Beef Kibbeh (4 Pcs)",
    arabicName: "كبة لحم واغيو مقلية",
    category: "Starters",
    description: "Crispy bulgur shell stuffed with spiced minced Wagyu beef, toasted pine nuts, and caramelized onions served with pomegranate molasses dip.",
    ingredients: ["Wagyu Mince", "Bulgur Wheat", "Pine Nuts", "Pomegranate Molasses"],
    dietary: ["Halal", "Dairy-Free"],
    spiceLevel: 1,
    price: 52,
    portionSize: "4 Pieces",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    calories: "450 kcal"
  },

  // Mains & Grills
  {
    id: "grill-1",
    name: "Al-Majlis Mixed Grill Platter",
    arabicName: "مشاوي المجلس المشكلة",
    category: "Grills",
    description: "Tender shish tawook, spiced lamb kofta, beef tenderloin cubes, and grilled lamb chops over wood-fire bread with garlic toum.",
    ingredients: ["Chicken Tawook", "Lamb Kofta", "Beef Tenderloin", "Lamb Chops", "Garlic Toum"],
    dietary: ["Halal", "Gluten-Free", "Dairy-Free"],
    spiceLevel: 1,
    price: 175,
    portionSize: "550g",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
    isBestseller: true
  },
  {
    id: "grill-2",
    name: "Saffron Shish Tawook Skewers",
    arabicName: "شيش طاووق بالزعفران",
    category: "Grills",
    description: "Corn-fed chicken breast marinated in Greek yogurt, saffron, lemon, and garlic, grilled over mesquite wood coals.",
    ingredients: ["Corn-Fed Chicken", "Greek Yogurt", "Saffron", "Garlic Toum"],
    dietary: ["Halal", "Gluten-Free"],
    spiceLevel: 1,
    price: 95,
    portionSize: "320g",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800&auto=format&fit=crop",
    calories: "510 kcal"
  },
  {
    id: "grill-3",
    name: "Charred Tiger Prawns with Harissa Butter",
    arabicName: "روبيان جامبو مشوي بالهريسة",
    category: "Seafood",
    description: "Jumbo Arabian Gulf tiger prawns grilled with spicy North African harissa butter, fresh cilantro, and charred lime.",
    ingredients: ["Jumbo Tiger Prawns", "Harissa Butter", "Cilantro", "Lime"],
    dietary: ["Halal", "Gluten-Free", "Spicy"],
    spiceLevel: 2,
    price: 155,
    portionSize: "350g",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop",
    calories: "430 kcal"
  },

  // Vegetarian
  {
    id: "veg-1",
    name: "Slow-Baked Pumpkin & Goat Cheese Fatteh",
    arabicName: "فتة اليقطين وجبن الماعز",
    category: "Vegetarian",
    description: "Roasted butternut squash layered with crispy pita chips, warm garlic yogurt sauce, toasted pine nuts, and pomegranate seeds.",
    ingredients: ["Butternut Squash", "Pita Chips", "Garlic Yogurt", "Goat Cheese", "Pine Nuts"],
    dietary: ["Vegetarian", "Halal"],
    spiceLevel: 0,
    price: 68,
    portionSize: "300g",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
    calories: "420 kcal"
  },

  // Desserts
  {
    id: "des-1",
    name: "Signature Pistachio Kunafa with Rose Ice Cream",
    arabicName: "كنافة الفستق مع آيس كريم الورد",
    category: "Desserts",
    description: "Crispy golden kataifi pastry filled with stretchy Nabulsi cheese, soaked in orange blossom syrup, topped with ground pistachios and rose petal gelato.",
    ingredients: ["Kataifi Pastry", "Nabulsi Cheese", "Orange Blossom Syrup", "Pistachio", "Rose Gelato"],
    dietary: ["Vegetarian", "Halal", "Chef Special"],
    spiceLevel: 0,
    price: 58,
    portionSize: "220g",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=800&auto=format&fit=crop",
    isBestseller: true
  },
  {
    id: "des-2",
    name: "Warm Chocolate Saffron Fondant",
    arabicName: "فوندان الشوكولاتة والزعفران",
    category: "Desserts",
    description: "Molten Valrhona 70% dark chocolate cake infused with cardamom and saffron, served with cardamom pod ice cream.",
    ingredients: ["Valrhona Chocolate", "Cardamom", "Saffron", "Cardamom Gelato"],
    dietary: ["Vegetarian", "Halal"],
    spiceLevel: 0,
    price: 52,
    portionSize: "180g",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop",
    calories: "520 kcal"
  },

  // Coffee & Drinks
  {
    id: "cof-1",
    name: "Traditional Arabic Cardamom Coffee (Dallah)",
    arabicName: "دلة قهوة عربية بالهيل",
    category: "Coffee",
    description: "Lightly roasted Ethiopian Arabica beans brewed with green cardamom pods and saffron, served in a brass Dallah with premium Medjool dates.",
    ingredients: ["Arabica Coffee", "Green Cardamom", "Saffron", "Medjool Dates"],
    dietary: ["Vegetarian", "Vegan", "Gluten-Free", "Halal", "Dairy-Free"],
    spiceLevel: 0,
    price: 38,
    portionSize: "Pot for 2",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    isBestseller: true
  },
  {
    id: "bev-1",
    name: "Pomegranate Rose Mocktail",
    arabicName: "موكتيل الرمان والورد",
    category: "Beverages",
    description: "Freshly squeezed Yemeni pomegranate juice blended with rose water, crushed mint, lime, and sparkling soda.",
    ingredients: ["Pomegranate Juice", "Rose Water", "Fresh Mint", "Lime", "Soda"],
    dietary: ["Vegetarian", "Vegan", "Gluten-Free", "Halal", "Dairy-Free"],
    spiceLevel: 0,
    price: 32,
    portionSize: "350ml",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop"
  }
];

export const INGREDIENT_ITEMS: IngredientItem[] = [
  {
    id: "ing-1",
    name: "Khorasan Royal Saffron",
    category: "Spices & Herbs",
    flavorProfile: "Warm, aromatic, honeyed, floral, and luxurious.",
    origin: "Khorasan, Iran",
    commonPairings: ["Wagyu Kebabs", "Cardamom Coffee", "Kunafa Syrup"],
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ing-2",
    name: "Wild Mountain Sumac",
    category: "Spices & Herbs",
    flavorProfile: "Tart, citrusy, earthy, and vibrant purple.",
    origin: "Lebanon Mountains",
    commonPairings: ["Fattoush Salad", "Grilled Lamb Chops", "Halloumi"],
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ing-3",
    name: "Grade M9+ Australian Wagyu",
    category: "Proteins",
    flavorProfile: "Rich, intensely marbled, buttery, and melt-in-mouth.",
    origin: "Darling Downs, Australia",
    commonPairings: ["Oak Charcoal", "Gold Leaf", "Truffle Oil"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ing-4",
    name: "Medjool Organic Dates",
    category: "Sweets & Aromatics",
    flavorProfile: "Caramel-like, chewy, rich, natural sweetness.",
    origin: "Al Ain, UAE",
    commonPairings: ["Arabic Coffee", "Tahini Gelato", "Pistachio"],
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop"
  }
];

export const DINING_EXPERIENCES: DiningExperience[] = [
  {
    id: "exp-1",
    title: "Signature Royal Dinner Experience",
    subtitle: "A 5-Course Culinary Tour Across Modern Arabia",
    tagline: "Indulge in 24K Gold Wagyu Kebabs, Truffle Hummus, and Kunafa with rose ice cream.",
    duration: "2.5 Hours",
    timing: "Daily: 6:00 PM – 11:30 PM",
    samplePrice: 165,
    idealFor: "Couples, Celebrations & VIP Dinners",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    highlights: ["5 Signature Courses", "Welcome Saffron Mocktail", "Window or Terrace Seating", "Live Cardamom Dallah Service"]
  },
  {
    id: "exp-2",
    title: "DIFC Sunset Terrace Lounge",
    subtitle: "Golden Hour Mocktails & Wood-Fired Mezze",
    tagline: "Watch the Dubai skyline light up while enjoying chilled pomegranate rose mocktails.",
    duration: "2 Hours",
    timing: "Daily: 5:00 PM – 8:00 PM",
    samplePrice: 110,
    idealFor: "After-Work Lounge & Sunset Meetings",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    highlights: ["3 Cold & Warm Mezze", "Signature Sunset Mocktail", "Prime Skyline Terrace Views"]
  },
  {
    id: "exp-3",
    title: "Chef's Table 7-Course Tasting Menu",
    subtitle: "An Exclusive Open-Kitchen Culinary Showcase",
    tagline: "Sit directly at Executive Chef Omar Rahman's table for a private 7-course journey.",
    duration: "3 Hours",
    timing: "Wednesdays & Saturdays: 8:00 PM",
    samplePrice: 295,
    idealFor: "Food Enthusiasts & Private Group Booking",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
    highlights: ["7 Masterpiece Courses", "Chef Interaction & Dish Lore", "Bespoke Off-Menu Creations", "Limited 8 Seats Per Night"]
  }
];

export const CHEF_PROFILE: ChefProfile = {
  name: "Executive Chef Omar Rahman",
  role: "Head of Culinary Direction — Sample Profile",
  experienceYears: 22,
  philosophy: "Reinterpreting ancestral Middle Eastern open-fire grilling with refined contemporary French techniques.",
  signatureDish: "24K Gold Dust Wagyu Kebabs & Smoked Mandi",
  biography: "Classically trained in Lyon and Dubai, Chef Omar brings 22 years of mastery in mesquite wood charcoal roasting and saffron marinades.",
  specialties: ["Open-Fire Oak Grilling", "Spiced Lamb Slow-Roasting", "Modern Middle Eastern Pastry"],
  signatureDishes: ["24K Gold Wagyu Kebabs", "Smoked Lamb Shank Mandi", "Pistachio Kunafa"],
  image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop",
  awardsSample: ["Best Modern Middle Eastern Concept (Demo)", "Chef of the Year Showcase (Demo)"],
  sampleNotice: "Sample Chef Profile — Concept Build #12"
};

export const RESTAURANT_REVIEWS: RestaurantReview[] = [
  {
    id: "rev-1",
    guestName: "His Highness Sheikh Rashid Al-Maktoum",
    occasion: "Family Celebration Dinner",
    rating: 5,
    date: "August 2026",
    comment: "The 24K Gold Wagyu Kebabs and Truffle Hummus were outstanding. The atmosphere on the DIFC terrace made for an unforgettable evening.",
    favoriteDish: "24K Gold Wagyu Kebabs",
    notice: "Sample Review — Concept Project"
  },
  {
    id: "rev-2",
    guestName: "Sophia Martinez",
    occasion: "Date Night",
    rating: 5,
    date: "August 2026",
    comment: "The Pistachio Kunafa with Rose Ice Cream is hands down the best dessert in Dubai. Incredible hospitality and service.",
    favoriteDish: "Signature Pistachio Kunafa",
    notice: "Sample Review — Concept Project"
  },
  {
    id: "rev-3",
    guestName: "David Sterling",
    occasion: "Business Lunch",
    rating: 5,
    date: "August 2026",
    comment: "Flawless business dining experience. Fast service, quiet indoor booths, and excellent smoked sea bass.",
    favoriteDish: "Pan-Seared Mediterranean Sea Bass",
    notice: "Sample Review — Concept Project"
  }
];

export const RESTAURANT_FAQS: RestaurantFaq[] = [
  {
    id: "rf-1",
    question: "Do you accept table reservations online?",
    answer: "Yes, click 'Reserve a Table' to request indoor booth or DIFC skyline terrace seating."
  },
  {
    id: "rf-2",
    question: "Is your entire menu 100% Halal?",
    answer: "Yes, all meats, poultry, and ingredients served at Al-Majlis are 100% certified Halal."
  },
  {
    id: "rf-3",
    question: "Do you offer vegetarian, vegan, and gluten-free options?",
    answer: "Yes, our menu features clear dietary tags including Truffle Hummus, Moutabal, Pumpkin Fatteh, and gluten-free grilled sea bass."
  },
  {
    id: "rf-4",
    question: "Do you offer online food delivery in Dubai?",
    answer: "Yes, we deliver to DIFC, Downtown Dubai, Business Bay, Dubai Marina, Jumeirah, and Dubai Hills via hot insulated courier."
  },
  {
    id: "rf-5",
    question: "What are your opening hours?",
    answer: "Lunch: 12:00 PM – 3:30 PM | Dinner: 6:00 PM – 11:30 PM (Until Midnight on weekends)."
  },
  {
    id: "rf-6",
    question: "Do you have private dining rooms for corporate events?",
    answer: "Yes, our Royal Majlis Private Dining Suite accommodates up to 24 guests with dedicated waiter service."
  },
  {
    id: "rf-7",
    question: "Is valet parking available at DIFC Gate Village?",
    answer: "Yes, complimentary valet parking is available at Building 03 entrance for all dining guests."
  },
  {
    id: "rf-8",
    question: "Can I order or inquire via WhatsApp?",
    answer: "Yes, click our WhatsApp Restaurant button for instant concierge communication."
  },
  {
    id: "rf-9",
    question: "Do you offer dining gift cards?",
    answer: "Yes, we offer digital gift cards starting from AED 150 up to AED 1,000."
  },
  {
    id: "rf-10",
    question: "What is included in the Chef's Table experience?",
    answer: "The Chef's Table includes 7 master courses, interactive chef storytelling, and welcome saffron mocktails (@ AED 295/person)."
  },
  {
    id: "rf-11",
    question: "Can I request birthday or anniversary dessert setups?",
    answer: "Yes, specify special occasions during reservation for complimentary candle & sparkler presentation."
  },
  {
    id: "rf-12",
    question: "Is this a real restaurant?",
    answer: "This is a concept project build created for agency portfolio demonstration. No real reservations or orders are processed."
  }
];

export const DEMO_RESTAURANT_METRICS = [
  { val: "30+ Dishes", label: "Contemporary Arabic Menu", sub: "Signature Wagyu, Grills & Kunafa" },
  { val: "5 Experiences", label: "Hospitality Offerings", sub: "Chef's Table, Sunset Terrace & Private Majlis" },
  { val: "25+ Ingredients", label: "Botanical & Spice Library", sub: "Khorasan Saffron, Sumac & Medjool Dates" },
  { val: "100% Halal", label: "Certified Ingredients", sub: "Grade M9+ Wagyu & Fresh Sea Bass" },
];

export const GIFT_CARD_OPTIONS = [
  { amount: 150, title: "Café & Dessert Experience", desc: "Perfect for coffee, mocktails & pistachio kunafa." },
  { amount: 250, title: "Classic Dinner for Two", desc: "Covers signature starters, grills & mocktails." },
  { amount: 500, title: "Royal Majlis Experience", desc: "Full 5-course signature dinner with VIP seating." },
  { amount: 1000, title: "Grand VIP Dining Suite", desc: "Private dining room & Chef's Table access." },
];
