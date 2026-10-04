export interface SneakerItem {
  id: string;
  name: string;
  brand: 'Nike' | 'Jordan' | 'Adidas' | 'New Balance' | 'ASICS' | 'Puma' | 'Converse' | 'Vans';
  category: 'New Releases' | 'Sneakers' | 'Running' | 'Basketball' | 'Lifestyle' | 'Skate' | 'High Top' | 'Low Top' | 'Limited Edition';
  priceAED: number;
  originalPriceAED?: number;
  discount?: string;
  images: string[];
  sizes: string[];
  availableSizes: string[];
  colors: string[];
  material: string;
  gender: 'Men' | 'Women' | 'Unisex';
  description: string;
  features: string[];
  rating: number;
  reviewCount: number;
  stockStatus: string;
  badge?: string;
  releaseDate: string;
  SKU: string;
  shippingInfo: string;
  tags: string[];
  isDrop?: boolean;
  isFeatured?: boolean;
  isBestseller?: boolean;
}

export interface StreetwearItem {
  id: string;
  name: string;
  category: 'Oversized T-Shirts' | 'Hoodies' | 'Cargo Pants' | 'Jackets' | 'Caps' | 'Socks' | 'Bags' | 'Accessories';
  priceAED: number;
  originalPriceAED?: number;
  images: string[];
  sizes: string[];
  colors: string[];
  material: string;
  fit: string;
  description: string;
  badge?: string;
}

export const SNEAKER_CATALOG: SneakerItem[] = [
  {
    id: "sole-jordan-1-chicago",
    brand: "Jordan",
    name: "Air Jordan 1 Retro High OG 'Lost & Found'",
    category: "High Top",
    priceAED: 1299,
    originalPriceAED: 1499,
    discount: "13% OFF",
    images: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["US 7", "US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11", "US 12"],
    availableSizes: ["US 8", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    colors: ["Varsity Red", "Black", "Sail White"],
    material: "Aged Cracked Leather Upper & Rubber Cupsole",
    gender: "Unisex",
    description: "The legendary 1985 silhouette reimagined with vintage pre-cracked collar leather and classic Chicago color blocking.",
    features: [
      "Encapsulated Nike Air cushioning",
      "Padded high-cut collar for ankle stability",
      "Solid rubber outsole with deep flex grooves",
      "Includes vintage retail receipt packaging replica"
    ],
    rating: 5.0,
    reviewCount: 142,
    stockStatus: "Low Stock — 4 Pairs Remaining",
    badge: "HEAT DROP",
    releaseDate: "2026",
    SKU: "DZ5485-612",
    shippingInfo: "Dispatches within 24h across UAE. Signature required.",
    tags: ["High Top", "Jordan", "Chicago", "Grail"],
    isDrop: true,
    isFeatured: true,
    isBestseller: true
  },
  {
    id: "sole-dunk-low-panda",
    brand: "Nike",
    name: "Nike Dunk Low Retro 'Panda'",
    category: "Low Top",
    priceAED: 499,
    originalPriceAED: 599,
    discount: "16% OFF",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["US 6", "US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    availableSizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
    colors: ["White", "Black"],
    material: "Crisp Smooth Leather & Rubber Sole",
    gender: "Unisex",
    description: "The staple rotation low-top engineered with iconic monochrome colorways and foam midsoles.",
    features: [
      "Crisp full-grain leather construction",
      "Padded low-cut collar for sleek mobility",
      "Perforated toe box for thermal breathability"
    ],
    rating: 4.8,
    reviewCount: 310,
    stockStatus: "In Stock — Ready to Ship",
    badge: "ROTATION STAPLE",
    releaseDate: "2026",
    SKU: "DD1391-100",
    shippingInfo: "Complimentary UAE Express Delivery",
    tags: ["Low Top", "Nike", "Dunk", "Panda"],
    isBestseller: true,
    isFeatured: true
  },
  {
    id: "sole-nb-2002r-rain-cloud",
    brand: "New Balance",
    name: "New Balance 2002R 'Protection Pack'",
    category: "Lifestyle",
    priceAED: 799,
    originalPriceAED: 899,
    images: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 11"],
    availableSizes: ["US 8", "US 9", "US 10", "US 11"],
    colors: ["Rain Cloud Grey", "Magnet", "White"],
    material: "Deconstructed Jagged Suede & Open Mesh",
    gender: "Unisex",
    description: "Jagged suede overlays draped over N-ergy tech midsoles for avant-garde street comfort.",
    features: [
      "ABZORB midsole absorbs impact through a combination of cushioning and compression resistance",
      "N-ergy outsole provides superior shock absorption",
      "Stability Web outsole technology provides added arch support"
    ],
    rating: 4.9,
    reviewCount: 95,
    stockStatus: "In Stock",
    badge: "NEW ARRIVAL",
    releaseDate: "2026",
    SKU: "M2002RDA",
    shippingInfo: "Dispatches within 24h across UAE",
    tags: ["New Balance", "2002R", "Grey", "Tech Runner"],
    isFeatured: true
  },
  {
    id: "sole-asics-kayano-14-silver",
    brand: "ASICS",
    name: "ASICS GEL-Kayano 14 'Metallic Silver'",
    category: "Running",
    priceAED: 699,
    images: [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["US 7.5", "US 8.5", "US 9.5", "US 10.5", "US 11.5"],
    availableSizes: ["US 8.5", "US 9.5", "US 10.5"],
    colors: ["Metallic Silver", "Cream", "Pure Gold"],
    material: "Synthetic Metallic Overlays & Breathable Mesh",
    gender: "Unisex",
    description: "2000s technical runner built with GEL cushioning pods and structural TRUSSTIC support.",
    features: [
      "GEL technology cushioning pod system",
      "TRUSSTIC system for midfoot integrity",
      "Retro 2000s metallic runner mesh panels"
    ],
    rating: 4.9,
    reviewCount: 88,
    stockStatus: "In Stock",
    badge: "BESTSELLER",
    releaseDate: "2026",
    SKU: "1201A019-107",
    shippingInfo: "Free UAE Shipping",
    tags: ["ASICS", "Kayano", "Silver", "Y2K"],
    isBestseller: true
  },
  {
    id: "sole-adidas-samba-white",
    brand: "Adidas",
    name: "Adidas Samba OG 'Cloud White'",
    category: "Low Top",
    priceAED: 449,
    originalPriceAED: 499,
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["US 6", "US 7", "US 8", "US 9", "US 10", "US 11"],
    availableSizes: ["US 7", "US 8", "US 9", "US 10"],
    colors: ["Cloud White", "Core Black", "Gum Brown"],
    material: "Full-Grain Leather with Suede T-Toe",
    gender: "Unisex",
    description: "The classic terrace silhouette featuring gold foil Samba branding and a low-profile gum outsole.",
    features: [
      "Full grain leather upper with gritty suede overlay",
      "Synthetic leather lining",
      "Low-profile gum rubber outsole"
    ],
    rating: 4.9,
    reviewCount: 340,
    stockStatus: "In Stock",
    badge: "TERRACE ICON",
    releaseDate: "2026",
    SKU: "B75806",
    shippingInfo: "Free UAE Delivery",
    tags: ["Adidas", "Samba", "White", "Terrace"],
    isBestseller: true
  },
  {
    id: "sole-jordan-4-military-blue",
    brand: "Jordan",
    name: "Air Jordan 4 Retro 'Industrial Blue'",
    category: "Basketball",
    priceAED: 1199,
    originalPriceAED: 1350,
    images: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["US 8", "US 9", "US 10", "US 11", "US 12"],
    availableSizes: ["US 8", "US 9", "US 10", "US 11"],
    colors: ["Industrial Blue", "Off White", "Neutral Grey"],
    material: "Smooth Leather & Molded TPU Eyestays",
    gender: "Men",
    description: "Re-crafted to original 1989 specifications featuring Nike Air heel branding and mesh side netting.",
    features: [
      "Air-Sole units in heel and forefoot",
      "Genuine leather and mesh upper",
      "Rubber outsole with herringbone traction pattern"
    ],
    rating: 5.0,
    reviewCount: 112,
    stockStatus: "Low Stock",
    badge: "RARE DROP",
    releaseDate: "2026",
    SKU: "FV5029-141",
    shippingInfo: "Dispatches within 24h",
    tags: ["Jordan 4", "Military Blue", "High Heat"],
    isDrop: true,
    isFeatured: true
  },
  {
    id: "sole-yeezy-350-onyx",
    brand: "Adidas",
    name: "Yeezy Boost 350 V2 'Onyx'",
    category: "Limited Edition",
    priceAED: 1399,
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["US 8", "US 8.5", "US 9", "US 10", "US 11"],
    availableSizes: ["US 8.5", "US 9", "US 10"],
    colors: ["Onyx Charcoal"],
    material: "Primeknit Upper & TPU Boost Enclosure",
    gender: "Unisex",
    description: "Monochromatic dark charcoal Primeknit housing full-length BOOST responsive cushioning.",
    features: [
      "Full-length BOOST midsole",
      "Re-engineered Primeknit upper",
      "Semi-translucent TPU side stripe"
    ],
    rating: 4.8,
    reviewCount: 190,
    stockStatus: "In Stock",
    badge: "GRAIL",
    releaseDate: "2026",
    SKU: "HQ4540",
    shippingInfo: "Insured UAE Shipping",
    tags: ["Yeezy", "Boost", "Onyx", "Black"]
  },
  {
    id: "sole-af1-triple-white",
    brand: "Nike",
    name: "Nike Air Force 1 '07 'Triple White'",
    category: "Lifestyle",
    priceAED: 449,
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    availableSizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    colors: ["Triple White"],
    material: "Crisp Stitched Leather Overlays",
    gender: "Unisex",
    description: "The world's iconic white sneaker with padded collars, perforated toe box, and Nike Air cushioning.",
    features: [
      "Stitched leather overlays for heritage style",
      "Nike Air cushioning for lightweight comfort",
      "Non-marking rubber sole"
    ],
    rating: 4.9,
    reviewCount: 510,
    stockStatus: "In Stock",
    badge: "DAILY ESSENTIAL",
    releaseDate: "2026",
    SKU: "CW2288-111",
    shippingInfo: "Same-Day Delivery in Dubai",
    tags: ["Air Force 1", "White", "Nike", "Essential"],
    isBestseller: true
  }
];

export const STREETWEAR_CATALOG: StreetwearItem[] = [
  {
    id: "sole-french-terry-hoodie-black",
    name: "SOLE//DISTRICT Heavyweight 480GSM Hoodie",
    category: "Hoodies",
    priceAED: 349,
    originalPriceAED: 449,
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Washed Black", "Heather Grey", "Sand Beige"],
    material: "100% Organic Heavyweight French Terry Cotton",
    fit: "Boxy Dropped-Shoulder Fit",
    description: "Ultra-dense 480GSM custom milled French terry hoodie with seamless double-layered hood.",
    badge: "HEAVYWEIGHT"
  },
  {
    id: "sole-tactical-cargo-khaki",
    name: "Tactical Multi-Pocket Ripstop Cargo Pants",
    category: "Cargo Pants",
    priceAED: 399,
    originalPriceAED: 499,
    images: [
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["S (30)", "M (32)", "L (34)", "XL (36)"],
    colors: ["Military Khaki", "Stealth Black"],
    material: "100% Cotton Ripstop",
    fit: "Relaxed Straight Cut with Hem Drawstrings",
    description: "8-pocket tactical cargo trousers engineered for modern street utility."
  },
  {
    id: "sole-archive-puff-tee",
    name: "SOLE//DISTRICT 260GSM Puff Print Graphic Tee",
    category: "Oversized T-Shirts",
    priceAED: 189,
    images: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Off-White Vintage", "Acid Wash Black"],
    material: "100% Combed Heavy Cotton",
    fit: "Oversized Streetwear Cut",
    description: "Custom vintage washed cotton tee with raised 3D puff print typography."
  },
  {
    id: "sole-flight-bomber-olive",
    name: "MA-1 Flight Satin Bomber Jacket",
    category: "Jackets",
    priceAED: 599,
    originalPriceAED: 799,
    images: [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["M", "L", "XL"],
    colors: ["Olive Green", "Onyx Black"],
    material: "Water-Resistant Satin Flight Nylon",
    fit: "Cropped MA-1 Flight Fit",
    description: "Classic military bomber lined with emergency orange satin interior and utility sleeve zip pocket."
  }
];

export const SNEAKER_FAQS = [
  {
    q: "How does SOLE//DISTRICT verify sneaker authenticity?",
    a: "Every sneaker undergoes a rigorous physical 12-point authentication process by our master authenticators in Dubai. We examine UV stitching, box labels, scent, materials, and outsole molds."
  },
  {
    q: "What are the UAE delivery times and fees?",
    a: "We offer Same-Day Express Delivery in Dubai for orders placed before 2 PM. Delivery across Abu Dhabi, Sharjah, and all 7 Emirates takes 24-48 hours. Orders over AED 500 receive free shipping."
  },
  {
    q: "What is your size exchange and return policy?",
    a: "We provide a 14-day hassle-free size exchange policy across the UAE. Items must remain unworn with security authentication tags intact."
  },
  {
    q: "Is Cash on Delivery (COD) available?",
    a: "Yes! Cash on Delivery is supported for all UAE orders up to AED 3,500."
  },
  {
    q: "What does 'Concept Product / Sample Build' mean on this site?",
    a: "This platform is an advanced agency portfolio demonstration build for SOLE//DISTRICT. Product catalog entries and prices represent sample retail values in AED."
  }
];
