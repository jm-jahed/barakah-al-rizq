export interface FashionProduct {
  id: string;
  name: string;
  category: 'New Arrivals' | 'Women' | 'Men' | 'Dresses' | 'Abayas' | 'Tops' | 'Bottoms' | 'Outerwear' | 'Accessories' | 'Occasion Wear';
  price: number;
  oldPrice?: number;
  description: string;
  images: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  material: string;
  fit: string;
  care: string;
  availability: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  isNewArrival?: boolean;
  isBestseller?: boolean;
  isFeatured?: boolean;
}

export interface LookbookItem {
  id: string;
  title: string;
  season: 'Spring/Summer' | 'Autumn/Winter' | 'Resort' | 'Occasion Edit';
  image: string;
  tagline: string;
  featuredProductIds: string[];
}

export interface FashionArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface FashionReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  purchasedItem: string;
}

export const FASHION_PRODUCTS: FashionProduct[] = [
  {
    id: "elane-silk-wrap-dress",
    name: "Sienna Silk Wrap Dress",
    category: "Dresses",
    price: 499,
    oldPrice: 650,
    description: "Flowing mulberry silk blend wrap dress with sculpted kimono sleeves and a flattering cinched waist tie.",
    images: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Champagne", hex: "#E8D8C8" },
      { name: "Midnight Black", hex: "#1A1A1A" },
      { name: "Emerald", hex: "#1A4331" }
    ],
    material: "70% Mulberry Silk, 30% Fine Viscose",
    fit: "Fluid Wrap Fit — Fits true to size",
    care: "Dry clean only. Steam gently on low heat.",
    availability: "In Stock — Dispatches within 24h",
    tags: ["Evening", "Silk", "Best Seller"],
    rating: 4.9,
    reviewCount: 38,
    isBestseller: true,
    isFeatured: true
  },
  {
    id: "atelier-minimal-abaya",
    name: "Noura Open Linen Abaya",
    category: "Abayas",
    price: 599,
    oldPrice: 750,
    description: "Modern minimalist open-front abaya tailored in premium breathable French linen with subtle tonal stitch accents.",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["52", "54", "56", "58", "60"],
    colors: [
      { name: "Oatmeal Beige", hex: "#D6C7B2" },
      { name: "Charcoal", hex: "#2C2C2C" },
      { name: "Soft Blush", hex: "#E8D0D0" }
    ],
    material: "100% Organic French Linen",
    fit: "Relaxed Oversized Fit",
    care: "Machine wash cold gentle cycle. Hang dry.",
    availability: "In Stock — Concept Demo Store",
    tags: ["Abaya", "Linen", "Dubai Edit"],
    rating: 4.8,
    reviewCount: 42,
    isFeatured: true
  },
  {
    id: "structured-tailored-blazer",
    name: "Aurelia Double-Breasted Blazer",
    category: "Outerwear",
    price: 699,
    oldPrice: 899,
    description: "Impeccably sharp double-breasted blazer with padded shoulders, horn buttons, and a tapered waist silhouette.",
    images: [
      "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Ivory", hex: "#F5F2EB" },
      { name: "Onyx", hex: "#111111" }
    ],
    material: "Fine Wool Crepe & Satin Lining",
    fit: "Tailored Structure",
    care: "Professional dry clean.",
    availability: "Limited Edition Stock",
    tags: ["Tailoring", "Workwear", "Blazer"],
    rating: 5.0,
    reviewCount: 19,
    isNewArrival: true
  },
  {
    id: "pleated-satin-midi-skirt",
    name: "Celeste Pleated Satin Skirt",
    category: "Bottoms",
    price: 349,
    description: "High-waisted accordion pleated midi skirt in radiant liquid satin with an elasticized inner waistband.",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Bronze Gold", hex: "#C59B63" },
      { name: "Black", hex: "#000000" }
    ],
    material: "100% Recycled Poly Satin",
    fit: "High Waisted Flowing Fit",
    care: "Hand wash cold. Line dry.",
    availability: "In Stock",
    tags: ["Skirt", "Satin", "Occasion"],
    rating: 4.7,
    reviewCount: 27
  },
  {
    id: "mens-tailored-linen-shirt",
    name: "Élan Men's Grandad Linen Shirt",
    category: "Men",
    price: 249,
    oldPrice: 320,
    description: "Band-collar grandad shirt in premium garment-dyed European linen, tailored for effortlessly refined warm-weather dressing.",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Off-White", hex: "#FAF8F5" },
      { name: "Sand", hex: "#D4C5B3" },
      { name: "Navy", hex: "#1C2D42" }
    ],
    material: "100% Pure European Linen",
    fit: "Regular Modern Fit",
    care: "Warm machine wash. Iron while damp.",
    availability: "In Stock",
    tags: ["Menswear", "Linen", "Resort"],
    rating: 4.9,
    reviewCount: 31,
    isBestseller: true
  },
  {
    id: "draped-chiffon-evening-gown",
    name: "Valentina Draped Evening Gown",
    category: "Occasion Wear",
    price: 899,
    oldPrice: 1200,
    description: "Dramatic floor-sweeping evening gown in sheer layered chiffon with asymmetrical shoulder draping and a thigh-high slit.",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Burgundy Wine", hex: "#581825" },
      { name: "Midnight Navy", hex: "#0F1A2A" }
    ],
    material: "Silk Chiffon & Satin Lining",
    fit: "Statuesque Evening Fit",
    care: "Dry clean only.",
    availability: "Concept Atelier Exclusive",
    tags: ["Gown", "Red Carpet", "Occasion"],
    rating: 5.0,
    reviewCount: 15,
    isFeatured: true
  },
  {
    id: "mens-wool-cashmere-overcoat",
    name: "Kensington Wool-Cashmere Trench",
    category: "Men",
    price: 999,
    oldPrice: 1400,
    description: "Single-breasted minimal overcoat woven from a heavy virgin wool and cashmere blend with horn button closures.",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["M", "L", "XL"],
    colors: [
      { name: "Camel", hex: "#C19A6B" },
      { name: "Dark Grey", hex: "#3A3A3A" }
    ],
    material: "80% Virgin Wool, 20% Cashmere",
    fit: "Overcoat Tailored Fit",
    care: "Specialist dry clean.",
    availability: "In Stock",
    tags: ["Outerwear", "Cashmere", "Menswear"],
    rating: 4.9,
    reviewCount: 22
  },
  {
    id: "ribbed-knit-co-ord-set",
    name: "Aria Ribbed Cashmere Co-Ord Set",
    category: "Tops",
    price: 449,
    oldPrice: 599,
    description: "Ultra-soft 2-piece ribbed knit lounge set featuring a dropped-shoulder sweater and wide-leg drawstring trousers.",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["S/M", "L/XL"],
    colors: [
      { name: "Cream", hex: "#F7F5EE" },
      { name: "Taupe", hex: "#8A7E72" }
    ],
    material: "90% Merino Wool, 10% Cashmere",
    fit: "Relaxed Loungewear Fit",
    care: "Hand wash cold. Lay flat to dry.",
    availability: "In Stock",
    tags: ["Co-Ord", "Knitwear", "Loungewear"],
    rating: 4.8,
    reviewCount: 45,
    isBestseller: true
  },
  {
    id: "sculptural-leather-tote",
    name: "Élane Atelier Calfskin Tote Bag",
    category: "Accessories",
    price: 799,
    oldPrice: 1100,
    description: "Architectural structured tote handbag in full-grain Italian calfskin leather with polished champagne gold hardware.",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Black Noir", hex: "#111111" },
      { name: "Cognac Tan", hex: "#8B4513" }
    ],
    material: "100% Full Grain Italian Calfskin",
    fit: "Dimensions: 34cm x 28cm x 14cm",
    care: "Wipe with soft leather conditioner.",
    availability: "In Stock — Demo Store",
    tags: ["Leather", "Handbag", "Luxury"],
    rating: 5.0,
    reviewCount: 50,
    isFeatured: true
  },
  {
    id: "oversized-poplin-shirt",
    name: "Classic Crisp Poplin Boyfriend Shirt",
    category: "Tops",
    price: 199,
    oldPrice: 280,
    description: "Essential oversized organic cotton poplin button-down shirt with elongated cuffs and mother-of-pearl buttons.",
    images: [
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Sky Blue", hex: "#C6D9E8" }
    ],
    material: "100% Organic Cotton Poplin",
    fit: "Relaxed Oversized",
    care: "Machine wash 40°C. Medium iron.",
    availability: "In Stock",
    tags: ["Shirt", "Cotton", "Essential"],
    rating: 4.6,
    reviewCount: 64
  },
  {
    id: "embroidered-silk-kaftan",
    name: "Soraya Gold Embroidered Silk Kaftan",
    category: "Occasion Wear",
    price: 799,
    oldPrice: 1050,
    description: "Opulent floor-length silk crepe kaftan decorated with hand-applied metallic gold thread Zardozi embroidery along collar and cuffs.",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["Free Size (54-58)"],
    colors: [
      { name: "Royal Emerald", hex: "#0B3C26" },
      { name: "Ivory Gold", hex: "#F2E8CF" }
    ],
    material: "100% Silk Crepe de Chine",
    fit: "Fluid Elegant Drape",
    care: "Specialist dry clean only.",
    availability: "In Stock",
    tags: ["Kaftan", "Embroidery", "Ramadan Edit"],
    rating: 4.9,
    reviewCount: 29
  },
  {
    id: "tailored-wide-leg-trousers",
    name: "Paloma Wide-Leg Tailored Trousers",
    category: "Bottoms",
    price: 299,
    oldPrice: 399,
    description: "High-rise pleated wide-leg pants crafted in heavy fluid viscose with side slant pockets and sharp front press creases.",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop"
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Sand Beige", hex: "#E3D5C5" },
      { name: "Black", hex: "#111111" }
    ],
    material: "65% Polyester, 35% Viscose",
    fit: "High Waisted Wide Leg",
    care: "Machine wash cold. Cool iron.",
    availability: "In Stock",
    tags: ["Trousers", "Tailored", "Workwear"],
    rating: 4.7,
    reviewCount: 40
  }
];

export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: "lb-1",
    title: "The Desert Sanctuary",
    season: "Autumn/Winter",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop",
    tagline: "Sculptural outerwear & soft cashmere knits framed against Dubai dune silhouettes.",
    featuredProductIds: ["elane-silk-wrap-dress", "atelier-minimal-abaya"]
  },
  {
    id: "lb-2",
    title: "Atelier Riviera",
    season: "Resort",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
    tagline: "Fluid silk wraps, unlined French linen shirting & sun-bleached neutral hues.",
    featuredProductIds: ["mens-tailored-linen-shirt", "pleated-satin-midi-skirt"]
  },
  {
    id: "lb-3",
    title: "Soirée Étoilée",
    season: "Occasion Edit",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop",
    tagline: "Dramatic floor-sweeping gowns and hand-embellished silk kaftans for evening affairs.",
    featuredProductIds: ["draped-chiffon-evening-gown", "embroidered-silk-kaftan"]
  }
];

export const FASHION_ARTICLES: FashionArticle[] = [
  {
    id: "art-1",
    title: "How to Build a 12-Piece UAE Capsule Wardrobe",
    category: "Style Guide",
    readTime: "5 min read",
    date: "August 29, 2026",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    excerpt: "Transition effortlessly between air-conditioned interiors and sunlit boulevards with versatile layering pieces."
  },
  {
    id: "art-2",
    title: "The Modern Abaya: Reimagining Heritage Silhouettes",
    category: "Design Journal",
    readTime: "4 min read",
    date: "August 22, 2026",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800&auto=format&fit=crop",
    excerpt: "Discover how French linen and minimalist tailored cuts bring a fresh architectural lens to traditional modesty."
  },
  {
    id: "art-3",
    title: "Mastering Evening Dressing: Silk vs. Crepe de Chine",
    category: "Fabric Guide",
    readTime: "6 min read",
    date: "August 15, 2026",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop",
    excerpt: "Understanding weave density, sheen reflection, and body drape when selecting gowns for galas."
  }
];

export const FASHION_REVIEWS: FashionReview[] = [
  {
    id: "rev-1",
    author: "Reem Al-Hassan (Sample Review)",
    location: "Dubai Marina, UAE",
    rating: 5,
    date: "August 2026",
    comment: "Sample Review — Concept Project. The Noura linen abaya fits impeccably. The texture of the French linen is sublime for summer.",
    purchasedItem: "Noura Open Linen Abaya"
  },
  {
    id: "rev-2",
    author: "Camille Dupont (Sample Review)",
    location: "Downtown Dubai",
    rating: 5,
    date: "August 2026",
    comment: "Sample Review — Concept Project. The Sienna silk wrap dress drapes like liquid gold. Truly agency-grade fashion presentation.",
    purchasedItem: "Sienna Silk Wrap Dress"
  },
  {
    id: "rev-3",
    author: "Tariq Mansoor (Sample Review)",
    location: "Abu Dhabi, UAE",
    rating: 5,
    date: "July 2026",
    comment: "Sample Review — Concept Project. Great breathability on the grandad linen shirt. Dispatched next day to Abu Dhabi.",
    purchasedItem: "Élan Men's Grandad Linen Shirt"
  }
];

export const FASHION_FAQS = [
  {
    q: "Do you offer same-day delivery in Dubai?",
    a: "Yes. Same-day delivery is available in Dubai for orders placed before 1:00 PM GST. Standard UAE courier dispatches within 24 hours."
  },
  {
    q: "What is your return & exchange window?",
    a: "We offer a complimentary 14-day return and exchange policy across the UAE. Returned items must be unworn with original atelier tags attached."
  },
  {
    q: "How do I choose the correct abaya length?",
    a: "Abaya sizes (52, 54, 56, 58, 60) correspond directly to overall height in inches from shoulder to hem. Refer to our interactive size calculator."
  },
  {
    q: "Can I book a private personal styling session?",
    a: "Absolutely. You can schedule a 1-on-1 private appointment at our Dubai atelier or request a virtual video styling consultation."
  },
  {
    q: "Are custom alterations available?",
    a: "Complimentary hem and waist alterations are included for all ready-to-wear pieces purchased at our concept studio."
  },
  {
    q: "Which payment options are supported?",
    a: "We accept Visa, Mastercard, Apple Pay, Tabby split payments, and Cash on Delivery across the UAE."
  }
];
