export interface BarakahProduct {
  id: string;
  name: string;
  arabicName: string;
  category: 'FRUITS' | 'VEGETABLES' | 'SPICES' | 'PULSES' | 'RICE & GRAINS' | 'DRY FOOD';
  unit: string;
  price: number;
  previousPrice: number;
  changePercent: number;
  marketStatus: 'STABLE' | 'UP' | 'DOWN' | 'LIMITED';
  lastUpdated: string;
  origin: string;
  image: string;
  description: string;
  packaging: string;
  minOrderQuantity: string;
  grade?: string;
  variety?: string;
  size?: string;
  packagingUnit?: string;
  packagingDetails?: string;
  netWeightKg?: number | null;
}

export interface BarakahLeader {
  name: string;
  role: string;
  experience: string;
  specialization: string;
  image: string;
}

export interface BarakahInsight {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  image: string;
}

export const BARAKAH_BRAND = {
  name: "BARAKAH AL RIZQ FOODSTUFF TRADING L.L.C",
  shortName: "BARAKAH AL RIZQ",
  tagline: "Quality You Can Trust, Service You Can Rely On.",
  subheading: "Leading UAE-based foodstuff import, export, wholesale, and bulk supply enterprise operating out of Al Aweer Vegetable Market, Ras Al Khor, Dubai.",
  mdName: "MD HABEER KHAN",
  mdRole: "Managing Director",
  address: "Office No. M02, Building No. 3, Above Zam Zam Supermarket, Al Aweer Veg Market, Ras Al Khor, Dubai, United Arab Emirates",
  phones: [
    "+971 56 944 8850",
    "+971 56 953 8741",
    "+971 4 576 4169"
  ],
  whatsapp: "https://wa.me/971569448850?text=Hello%20Barakah%20Al%20Rizq%20Foodstuff,%20I%20would%20like%20to%20inquire%20about%20wholesale%20foodstuff%20pricing.",
  email: "barakahalrizquae@gmail.com",
  website: "barakahalrizquae.com",
  logo: "/images/barakah-logo.png",
  marketHub: "Al Aweer Vegetable Market, Ras Al Khor, Dubai",
  dailyTonnage: "150+ Tons Daily",
  importOrigins: "25+ Countries",
  clientNetwork: "850+ Supermarkets & Outlets",
};

export const BARAKAH_BADGES = [
  { name: "DIRECT IMPORTER", badge: "Farm-to-Market Sourcing" },
  { name: "AL AWEER MARKET HQ", badge: "Ras Al Khor Dubai Hub" },
  { name: "COLD CHAIN LOGISTICS", badge: "Temperature-Controlled Storage" },
  { name: "BULK WHOLESALE SLA", badge: "Daily Supermarket Supply" },
  { name: "RE-EXPORT CAPABLE", badge: "GCC & International Shipping" },
  { name: "QUALITY ASSURED", badge: "Strict UAE Food Safety Compliance" }
];

export const INITIAL_PRODUCTS: BarakahProduct[] = [
  {
    id: "tomato-fresh",
    name: "Fresh Red Tomato",
    arabicName: "طماطم طازجة",
    category: "VEGETABLES",
    unit: "AED / KG",
    price: 4.50,
    previousPrice: 4.35,
    changePercent: +3.4,
    marketStatus: "UP",
    lastUpdated: "2 mins ago",
    origin: "UAE / Jordan / Egypt",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=800&auto=format&fit=crop",
    description: "Premium vine-ripened red tomatoes sourced daily for maximum firmness, sweetness, and shelf-life.",
    packaging: "6kg Wooden Box / 10kg Plastic Crate",
    minOrderQuantity: "500 KG"
  },
  {
    id: "potato-yellow",
    name: "Fresh Yellow Potato",
    arabicName: "بطاطس طازجة",
    category: "VEGETABLES",
    unit: "AED / KG",
    price: 3.20,
    previousPrice: 3.20,
    changePercent: 0.0,
    marketStatus: "STABLE",
    lastUpdated: "5 mins ago",
    origin: "Egypt / Pakistan / Holland",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=800&auto=format&fit=crop",
    description: "High-density washing potatoes ideal for commercial frying, cooking, and supermarket retail packaging.",
    packaging: "10kg Mesh Bag / 25kg Jute Bag",
    minOrderQuantity: "1,000 KG"
  },
  {
    id: "onion-red",
    name: "Fresh Red & White Onion",
    arabicName: "بصل أحمر وأبيض",
    category: "VEGETABLES",
    unit: "AED / KG",
    price: 2.80,
    previousPrice: 2.95,
    changePercent: -5.1,
    marketStatus: "DOWN",
    lastUpdated: "3 mins ago",
    origin: "India / Egypt / Turkey",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cf?q=80&w=800&auto=format&fit=crop",
    description: "Firm, pungency-graded red and white onions selected for long storage stability and bulk commercial use.",
    packaging: "10kg Mesh Bag / 20kg Mesh Bag",
    minOrderQuantity: "1,000 KG"
  },
  {
    id: "carrot-orange",
    name: "Fresh Orange Carrot",
    arabicName: "جزر طازج",
    category: "VEGETABLES",
    unit: "AED / KG",
    price: 3.80,
    previousPrice: 3.70,
    changePercent: +2.7,
    marketStatus: "UP",
    lastUpdated: "4 mins ago",
    origin: "China / Australia / Egypt",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=800&auto=format&fit=crop",
    description: "Washed sweet orange carrots with high crunch, rich beta-carotene, and uniform size sorting.",
    packaging: "10kg Polybag Carton",
    minOrderQuantity: "500 KG"
  },
  {
    id: "cucumber-green",
    name: "Farm Fresh Green Cucumber",
    arabicName: "خيار طازج",
    category: "VEGETABLES",
    unit: "AED / KG",
    price: 3.50,
    previousPrice: 3.50,
    changePercent: 0.0,
    marketStatus: "STABLE",
    lastUpdated: "1 min ago",
    origin: "UAE Greenhouse / Oman",
    image: "https://images.unsplash.com/photo-1447175008436-084170c0e708?q=80&w=800&auto=format&fit=crop",
    description: "Hydroponic and greenhouse green cucumbers harvested early morning for crisp texture and freshness.",
    packaging: "5kg Carton / 8kg Plastic Box",
    minOrderQuantity: "300 KG"
  },
  {
    id: "capsicum-mixed",
    name: "Green & Colored Capsicum",
    arabicName: "فلفل رومي ملون",
    category: "VEGETABLES",
    unit: "AED / KG",
    price: 6.50,
    previousPrice: 6.20,
    changePercent: +4.8,
    marketStatus: "UP",
    lastUpdated: "6 mins ago",
    origin: "UAE / Jordan / Netherlands",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=800&auto=format&fit=crop",
    description: "Vibrant green, red, and yellow bell peppers with thick walls and long shelf retention.",
    packaging: "5kg Corrugated Box",
    minOrderQuantity: "250 KG"
  },
  {
    id: "lemon-yellow",
    name: "Fresh Yellow Lemon",
    arabicName: "ليمون أصفر طازج",
    category: "FRUITS",
    unit: "AED / KG",
    price: 5.20,
    previousPrice: 5.40,
    changePercent: -3.7,
    marketStatus: "DOWN",
    lastUpdated: "2 mins ago",
    origin: "South Africa / Turkey / Egypt",
    image: "https://images.unsplash.com/photo-1534531141161-e4ecc2c46369?q=80&w=800&auto=format&fit=crop",
    description: "High-juice seedless and thin-skinned yellow lemons sorted by count sizes 100/120/140.",
    packaging: "15kg Telescopic Master Carton",
    minOrderQuantity: "500 KG"
  },
  {
    id: "orange-valencia",
    name: "Valencia Sweet Orange",
    arabicName: "برتقال فالنسيا",
    category: "FRUITS",
    unit: "AED / KG",
    price: 4.80,
    previousPrice: 4.80,
    changePercent: 0.0,
    marketStatus: "STABLE",
    lastUpdated: "8 mins ago",
    origin: "Egypt / South Africa",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=800&auto=format&fit=crop",
    description: "Premium juicing oranges with high sugar content, thin rind, and golden citrus aroma.",
    packaging: "15kg Open Top Carton",
    minOrderQuantity: "1,000 KG"
  },
  {
    id: "apple-fuji",
    name: "Crisp Fuji & Gala Apple",
    arabicName: "تفاح فوجي وجالا",
    category: "FRUITS",
    unit: "AED / KG",
    price: 6.80,
    previousPrice: 6.50,
    changePercent: +4.6,
    marketStatus: "UP",
    lastUpdated: "5 mins ago",
    origin: "Chile / Italy / South Africa",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=800&auto=format&fit=crop",
    description: "Grade-A red Fuji and Gala apples sorted for high pressure, sweet crunch, and vibrant skin color.",
    packaging: "18kg Bushel Box (Layer Packed)",
    minOrderQuantity: "500 KG"
  },
  {
    id: "banana-cavendish",
    name: "Cavendish Green & Yellow Banana",
    arabicName: "موز كافنديش",
    category: "FRUITS",
    unit: "AED / Box",
    price: 48.00,
    previousPrice: 50.00,
    changePercent: -4.0,
    marketStatus: "DOWN",
    lastUpdated: "3 mins ago",
    origin: "Ecuador / Philippines / India",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=800&auto=format&fit=crop",
    description: "Class-1 premium Cavendish bananas calibrated for uniform cluster size and controlled ripening.",
    packaging: "13.5kg Standard Banana Box",
    minOrderQuantity: "100 Boxes"
  },
  {
    id: "garlic-white",
    name: "Fresh White Garlic",
    arabicName: "ثوم أبيض طازج",
    category: "VEGETABLES",
    unit: "AED / KG",
    price: 7.50,
    previousPrice: 7.50,
    changePercent: 0.0,
    marketStatus: "STABLE",
    lastUpdated: "7 mins ago",
    origin: "China / India",
    image: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=800&auto=format&fit=crop",
    description: "High-clove white garlic bulbs with tight skins and strong aromatic flavor profile.",
    packaging: "10kg Mesh Bag / 10kg Carton",
    minOrderQuantity: "500 KG"
  },
  {
    id: "ginger-fresh",
    name: "Fresh Chinese & Indian Ginger",
    arabicName: "زنجبيل طازج",
    category: "VEGETABLES",
    unit: "AED / KG",
    price: 8.20,
    previousPrice: 7.90,
    changePercent: +3.8,
    marketStatus: "UP",
    lastUpdated: "4 mins ago",
    origin: "China / India",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800&auto=format&fit=crop",
    description: "Clean plump ginger roots with smooth skin, rich oleoresin, and strong spicy punch.",
    packaging: "10kg PVC Carton",
    minOrderQuantity: "300 KG"
  },
  {
    id: "chilli-green",
    name: "Fresh Green Chilli",
    arabicName: "فلفل أخضر حار",
    category: "VEGETABLES",
    unit: "AED / KG",
    price: 5.80,
    previousPrice: 6.00,
    changePercent: -3.3,
    marketStatus: "DOWN",
    lastUpdated: "2 mins ago",
    origin: "India / Oman / UAE",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=800&auto=format&fit=crop",
    description: "Slender pungent green chillies picked fresh for restaurant curry bases and hotel kitchens.",
    packaging: "4kg Corrugated Box",
    minOrderQuantity: "200 KG"
  },
  {
    id: "cauliflower-fresh",
    name: "Fresh White Cauliflower",
    arabicName: "قرنبيط طازج",
    category: "VEGETABLES",
    unit: "AED / KG",
    price: 4.20,
    previousPrice: 4.20,
    changePercent: 0.0,
    marketStatus: "STABLE",
    lastUpdated: "9 mins ago",
    origin: "UAE / Jordan / Spain",
    image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?q=80&w=800&auto=format&fit=crop",
    description: "Compact white curds wrapped in protective jacket leaves for maximum transit freshness.",
    packaging: "8kg Plastic Crate",
    minOrderQuantity: "300 KG"
  },
  {
    id: "cabbage-green",
    name: "Fresh Green Drumhead Cabbage",
    arabicName: "ملفوف أخضر",
    category: "VEGETABLES",
    unit: "AED / KG",
    price: 2.40,
    previousPrice: 2.30,
    changePercent: +4.3,
    marketStatus: "UP",
    lastUpdated: "5 mins ago",
    origin: "UAE / Oman",
    image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?q=80&w=800&auto=format&fit=crop",
    description: "Heavy solid green cabbage heads harvested daily from local and regional partner farms.",
    packaging: "15kg Mesh Bag / Mesh Sacks",
    minOrderQuantity: "500 KG"
  },
  {
    id: "eggplant-purple",
    name: "Fresh Purple Eggplant",
    arabicName: "باذنجان أسود",
    category: "VEGETABLES",
    unit: "AED / KG",
    price: 3.90,
    previousPrice: 4.10,
    changePercent: -4.8,
    marketStatus: "DOWN",
    lastUpdated: "3 mins ago",
    origin: "UAE / Jordan",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800&auto=format&fit=crop",
    description: "Glossy deep purple aubergines harvested at tender maturity with low seed count.",
    packaging: "6kg Wooden Box",
    minOrderQuantity: "300 KG"
  },
  {
    id: "lentils-yellow-red",
    name: "Yellow & Red Football Lentils",
    arabicName: "عدس أصفر وأحمر",
    category: "PULSES",
    unit: "AED / Bag (25KG)",
    price: 95.00,
    previousPrice: 95.00,
    changePercent: 0.0,
    marketStatus: "STABLE",
    lastUpdated: "12 mins ago",
    origin: "Canada / Australia",
    image: "https://images.unsplash.com/photo-1585992677323-5e65093a3c91?q=80&w=800&auto=format&fit=crop",
    description: "Polished high-protein red split and yellow lentils sorted by laser color sorting machines.",
    packaging: "25kg Woven PP Bag",
    minOrderQuantity: "20 Bags (500 KG)"
  },
  {
    id: "chickpeas-kabuli",
    name: "Whole Kabuli Chickpeas (8mm/9mm)",
    arabicName: "حمص كابولي",
    category: "PULSES",
    unit: "AED / Bag (25KG)",
    price: 110.00,
    previousPrice: 105.00,
    changePercent: +4.7,
    marketStatus: "UP",
    lastUpdated: "10 mins ago",
    origin: "India / Mexico / Turkey",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?q=80&w=800&auto=format&fit=crop",
    description: "Large 8mm and 9mm uniform cream-colored Kabuli chickpeas for hummus and canned food production.",
    packaging: "25kg Woven Polypropylene Bag",
    minOrderQuantity: "20 Bags (500 KG)"
  },
  {
    id: "rice-basmati-1121",
    name: "XL 1121 Steam Basmati Rice",
    arabicName: "أرز بسمتي 1121 ستيم",
    category: "RICE & GRAINS",
    unit: "AED / Bag (20KG)",
    price: 135.00,
    previousPrice: 138.00,
    changePercent: -2.1,
    marketStatus: "DOWN",
    lastUpdated: "15 mins ago",
    origin: "India / Pakistan",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop",
    description: "Aged 1121 steam Basmati rice with extra-long grain elongation (8.35mm average grain length) and rich aroma.",
    packaging: "20kg Non-Woven / Jute Bag",
    minOrderQuantity: "50 Bags (1,000 KG)"
  },
  {
    id: "spices-red-chilli-whole",
    name: "Whole Red Chilli & Spices",
    arabicName: "فلفل أحمر حار جاف وبهارات",
    category: "SPICES",
    unit: "AED / KG",
    price: 14.50,
    previousPrice: 14.00,
    changePercent: +3.5,
    marketStatus: "UP",
    lastUpdated: "6 mins ago",
    origin: "India (Guntur)",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop",
    description: "Sun-dried stemless red chillies with intense color value (ASTA 100+) and spicy heat profile.",
    packaging: "25kg Jute Bag / 10kg Carton",
    minOrderQuantity: "200 KG"
  },
  {
    id: "spices-black-pepper",
    name: "Whole Malabar Black Pepper",
    arabicName: "فلفل أسود حب",
    category: "SPICES",
    unit: "AED / KG",
    price: 24.00,
    previousPrice: 24.00,
    changePercent: 0.0,
    marketStatus: "STABLE",
    lastUpdated: "14 mins ago",
    origin: "India / Vietnam",
    image: "https://images.unsplash.com/photo-1509358271058-acd05cc93228?q=80&w=800&auto=format&fit=crop",
    description: "550g/l density whole black pepper corn with rich volatile oil content and bold pungent aroma.",
    packaging: "25kg PP Bag",
    minOrderQuantity: "100 KG"
  },
  {
    id: "dry-nuts-cashew-almond",
    name: "Whole Cashews & Almonds",
    arabicName: "كاجو ولوز فاخر",
    category: "DRY FOOD",
    unit: "AED / KG",
    price: 36.00,
    previousPrice: 35.00,
    changePercent: +2.8,
    marketStatus: "UP",
    lastUpdated: "11 mins ago",
    origin: "India / Vietnam / USA",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
    description: "W240/W320 size whole cashews and Nonpareil California almonds double-vacuum sealed for freshness.",
    packaging: "10kg Vacuum Carton",
    minOrderQuantity: "100 KG"
  }
];

export const BARAKAH_LEADERS: BarakahLeader[] = [
  {
    name: "MD HABEER KHAN",
    role: "Managing Director & Founder",
    experience: "20+ Yrs UAE & International Foodstuff Trading",
    specialization: "Global Produce Sourcing & Wholesale Distribution",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Tariq Al-Mansoori",
    role: "Head of Import & Logistics",
    experience: "15+ Yrs Customs Clearance & Cold Chain Logistics",
    specialization: "Port Jebel Ali & Al Aweer Port Operations",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Sarih Bin Rashed",
    role: "Head of Wholesale Sales & Accounts",
    experience: "12+ Yrs Supermarket & Hotel Supply Networks",
    specialization: "B2B Contractual Supply SLAs",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Zayn Vance",
    role: "Head of Quality Control & Inspection",
    experience: "14+ Yrs Food Safety & Phytosanitary Compliance",
    specialization: "GSO & Dubai Municipality Compliance",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
  }
];

export const BARAKAH_INSIGHTS: BarakahInsight[] = [
  {
    id: "dubai-food-trading-hub",
    title: "Why Dubai Al Aweer is the Middle East's Produce Capital",
    category: "Market Logistics",
    readTime: "4 min read",
    summary: "How Ras Al Khor Al Aweer Fruit & Vegetable Market serves as the prime distribution node for the entire GCC.",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "cold-chain-management-uae",
    title: "Maintaining Cold Chain Integrity in UAE Summer Heat",
    category: "Quality Assurance",
    readTime: "5 min read",
    summary: "Strict temperature monitoring protocols preventing spoilage during re-refrigerated transport from port to warehouse.",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "basmati-rice-grading-guide",
    title: "Understanding Basmati Rice Grain Grading (1121 vs Super)",
    category: "Grain Standards",
    readTime: "5 min read",
    summary: "Grain length, elongation ratio, steam processing, and aroma tests for commercial restaurant kitchens.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "b2b-foodstuff-procurement-tips",
    title: "5 Strategies for Hotel & Restaurant Bulk Procurement",
    category: "B2B Supply",
    readTime: "4 min read",
    summary: "Locking in seasonal contract prices, schedule deliveries, and managing inventory buffer stocks.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "spices-import-dubai-municipality",
    title: "Dubai Municipality Phytosanitary Rules for Spice Imports",
    category: "Regulations",
    readTime: "5 min read",
    summary: "Lab testing, moisture limits, aflatoxin checks, and labeling requirements for imported whole spices.",
    image: "https://images.unsplash.com/photo-1509358271058-acd05cc93228?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "global-produce-sourcing-seasons",
    title: "Seasonal Citrus & Vegetable Import Calendars for 2026",
    category: "Sourcing Calendar",
    readTime: "4 min read",
    summary: "Navigating crop harvest windows across Egypt, India, Turkey, Spain, and South Africa for continuous supply.",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=600&auto=format&fit=crop"
  }
];

export const BARAKAH_FAQS = [
  {
    question: "Where is Barakah Al Rizq Foodstuff Trading located?",
    answer: "Our primary office and wholesale distribution center is located at Office No. M02, Building No. 3, Above Zam Zam Supermarket, Al Aweer Veg Market, Ras Al Khor, Dubai, UAE."
  },
  {
    question: "Do you supply supermarkets, hotels, restaurants, and catering companies?",
    answer: "Yes! We specialize in wholesale bulk supply for hypermarkets, supermarket chains, hotels, fine-dining restaurants, industrial catering companies, and food re-exporters."
  },
  {
    question: "Can I place custom import orders for specific origins?",
    answer: "Yes. We directly import fruits, vegetables, pulses, rice, and spices from over 25 countries including Egypt, India, Pakistan, Canada, Holland, Turkey, and Chile."
  },
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer: "MOQs vary by product category. Fresh produce starts from 300kg - 500kg, while rice and pulses start from 20 to 50 bags (500kg - 1,000kg). Mixed pallet orders are available for local UAE clients."
  },
  {
    question: "How are live market prices updated on your platform?",
    answer: "Our live market price feed reflects daily morning trading rates at Al Aweer Market and international spot prices. The system is built with a dynamic data service architecture ready for direct API integration."
  },
  {
    question: "Do you offer temperature-controlled delivery across all emirates?",
    answer: "Yes. We maintain a fleet of reefer trucks operating daily deliveries across Dubai, Abu Dhabi, Sharjah, Ajman, RAK, and Fujairah."
  },
  {
    question: "Are all your products compliant with Dubai Municipality and GSO food safety standards?",
    answer: "100% yes. Every batch is certified with official Phytosanitary certificates, Dubai Municipality Zabeel lab tests, and GSO labeling standards."
  },
  {
    question: "Can we set up a long-term commercial supply contract with fixed credit terms?",
    answer: "Yes. We offer contractual credit facilities and fixed price term agreements for approved corporate accounts and supermarket chains."
  },
  {
    question: "Do you export or re-export produce to other GCC countries?",
    answer: "Yes. We handle re-export customs documentation, health certificates, and reefer container transport across Saudi Arabia, Oman, Qatar, Kuwait, and Bahrain."
  },
  {
    question: "How do I request an immediate bulk wholesale quotation?",
    answer: "Click our 'Request a Quote' button, call our sales office at +971 4 576 4169 / +971 56 944 8850, or message our Managing Director MD HABEER KHAN directly on WhatsApp."
  }
];
export const BARAKAH_SERVICES = [
  {
    id: "import",
    title: "Direct Foodstuff Import",
    description: "Maritime reefer container shipments directly imported from top agricultural hubs in Egypt, India, Turkey, Holland, and Chile.",
    highlights: ["Customs Phytosanitary clearance", "Port Jebel Ali dock handling", "Cold-chain reefer warehousing"]
  },
  {
    id: "export",
    title: "GCC Re-Export Operations",
    description: "Re-export logistics and health certification for wholesale produce distribution across Saudi Arabia, Oman, Qatar, Kuwait, and Bahrain.",
    highlights: ["Official Health Certificates", "Cross-border land transport", "GCC customs documentation"]
  },
  {
    id: "wholesale",
    title: "Supermarket & B2B Supply",
    description: "Contractual daily wholesale supply for major UAE hypermarkets, supermarket chains, fine-dining hotels, and industrial caterers.",
    highlights: ["Fixed term credit terms", "Guaranteed morning delivery", "Zero-spoilage SLAs"]
  },
  {
    id: "supply",
    title: "Al Aweer Spot Market Supply",
    description: "Fresh daily arrivals at Al Aweer Fruit & Vegetable Market in Ras Al Khor, Dubai with spot wholesale pricing for local traders.",
    highlights: ["Live daily price feed", "Bulk pallet packaging", "Immediate truck dispatch"]
  }
];

export const BARAKAH_WHY_US = [
  {
    title: "Dubai Municipality Certified",
    description: "100% compliant with Zabeel lab food safety testing, Phytosanitary standards, and GSO quality specifications."
  },
  {
    title: "Direct Grower Sourcing",
    description: "Eliminating middleman markups by contracting directly with farms and packing houses in over 25 countries."
  },
  {
    title: "Cold Chain Reefer Fleet",
    description: "Temperature-controlled reefer trucks ensuring fresh produce arrives at optimal crispness in summer heat."
  },
  {
    title: "Al Aweer Market Headquarters",
    description: "Strategically located at the heart of Dubai's wholesale produce hub for fast order fulfillment."
  },
  {
    title: "MD HABEER KHAN Leadership",
    description: "Over 20 years of UAE foodstuff trading expertise, establishing deep international supplier relationships."
  },
  {
    title: "Transparent Spot Pricing",
    description: "Daily updated live market pricing reflecting real wholesale spot rates with clear bulk volume tiers."
  }
];
