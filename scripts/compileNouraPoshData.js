const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '..', 'src', 'data', 'poshAbayaCatalog.json');
const targetPath = path.join(__dirname, '..', 'src', 'data', 'nouraAbayaData.ts');

const poshProducts = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

console.log(`Loaded ${poshProducts.length} Posh Abaya products.`);

const fileContent = `'use client';

export interface ColorOption {
  name: string;
  hex: string;
}

export interface NouraProduct {
  id: string;
  name: string;
  category: string;
  collection: string;
  priceAED: number;
  originalPriceAED?: number;
  badge?: 'NEW' | 'NEW ARRIVAL' | 'BESTSELLER' | 'LIMITED' | 'EXCLUSIVE' | 'RAMADAN EDIT' | 'EID EDITION';
  colorOptions: ColorOption[];
  sizes: string[];
  fabric: string;
  fit: string;
  closure: string;
  finishingDetails: string;
  occasion: string;
  care: string;
  rating: number;
  reviewsCount: number;
  image: string;
  secondaryImages: string[];
  overview: string;
  isNewArrival: boolean;
  isBestseller: boolean;
  inStock: boolean;
}

export const NOURA_BRAND = {
  name: 'NOURA ABAYA',
  tagline: 'Arabian Haute Couture & Luxury Modestwear',
  supporting: 'Bespoke Emirati Abayas & Luxury Modestwear Handcrafted in Dubai',
  dubaiFlagship: 'Dubai Design District (d3), Building 7 • Downtown Atelier',
  email: 'concierge@nouraabaya.ae',
  location: 'Downtown Dubai Atelier • UAE',
  phone: '+971 4 388 9000',
  whatsapp: 'https://wa.me/971508889900?text=Hello%20NOURA%20ABAYA,%20I%20am%20inquiring%20about%20your%20luxury%20couture%20collection.',
  freeDeliveryThreshold: 350,
};

export const NOURA_STATS = [
  { value: '${poshProducts.length}+', label: 'Verified Posh Abaya Designs' },
  { value: '100%', label: 'Authentic Emirati Atelier' },
  { value: '7 Emirates', label: 'Doorstep Same-Day Delivery' },
  { value: '4.9 ★', label: 'UAE Luxury Client Rating' },
];

export const NOURA_COLLECTIONS_INFO = [
  {
    id: 'eid-collection',
    name: 'EID COLLECTION',
    count: '60+ Eid Dresses & Kaftans',
    image: '${poshProducts[0] ? poshProducts[0].image : "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop"}',
    desc: 'Festive Eid dresses featuring gold zari embroidery, crystal cuffs, and luxury silk kaftans.',
    description: 'Festive Eid dresses featuring gold zari embroidery, crystal cuffs, and luxury silk kaftans.'
  },
  {
    id: 'new-arrivals',
    name: 'NEW ARRIVALS',
    count: '40+ Fresh Season Drops',
    image: '${poshProducts[1] ? poshProducts[1].image : "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop"}',
    desc: 'Fresh seasonal drops featuring Japanese Nida, organza sleeves, and bespoke Emirati embroidery.',
    description: 'Fresh seasonal drops featuring Japanese Nida, organza sleeves, and bespoke Emirati embroidery.'
  },
  {
    id: 'signature-abayas',
    name: 'SIGNATURE ABAYAS',
    count: '80+ Iconic Silhouettes',
    image: '${poshProducts[2] ? poshProducts[2].image : "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1200&auto=format&fit=crop"}',
    desc: 'Time-honored black Nida silhouettes with handcrafted zari finishing and fluid drapes.',
    description: 'Time-honored black Nida silhouettes with handcrafted zari finishing and fluid drapes.'
  },
  {
    id: 'ramadan-edit',
    name: 'RAMADAN EDIT',
    count: '50+ Festive Suhoor Pieces',
    image: '${poshProducts[3] ? poshProducts[3].image : "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop"}',
    desc: 'Fluid silk kaftans, embroidered overlays, and modest eveningwear crafted for Holy Month gatherings.',
    description: 'Fluid silk kaftans, embroidered overlays, and modest eveningwear crafted for Holy Month gatherings.'
  }
];

export const NOURA_FAQS = [
  {
    question: 'How fast is delivery across the UAE Emirates?',
    answer: 'We offer Same-Day Express Delivery across Dubai & Sharjah for orders placed before 2:00 PM. Deliveries to Abu Dhabi, Ajman, RAK, Fujairah, and Umm Al Quwain arrive within 24 hours.'
  },
  {
    question: 'Is a matching Sheila (headscarf) included with each abaya?',
    answer: 'Yes! Every NOURA ABAYA includes a complimentary, color-matched luxury Sheila crafted from matching chiffon or Nida fabric with coordinated edge piping.'
  },
  {
    question: 'Can I request custom length adjustments or bespoke measurements?',
    answer: 'Yes. You can customize your exact length (50" to 62") directly via our online Bespoke Studio or book a private fitting consultation at our Dubai Design District (d3) Atelier.'
  },
  {
    question: 'What payment options are available?',
    answer: 'We accept all major credit/debit cards (Visa, MasterCard, Amex), Apple Pay, Tabby (split into 4 interest-free payments), and Cash on Delivery (COD) across the UAE.'
  },
  {
    question: 'What is your exchange and return policy in the UAE?',
    answer: 'We offer hassle-free 7-day doorstep exchanges across all 7 Emirates. Our courier will pick up the item directly from your home or office.'
  }
];

export function getDiverseAbayaImage(productOrIdOrUrl?: NouraProduct | string | null, index?: number): string {
  if (!productOrIdOrUrl) {
    const fallback = [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop'
    ];
    return fallback[(index || 0) % fallback.length];
  }

  let prod: NouraProduct | undefined;
  if (typeof productOrIdOrUrl === 'object') {
    prod = productOrIdOrUrl;
  } else if (typeof productOrIdOrUrl === 'string') {
    if (productOrIdOrUrl.startsWith('http://') || productOrIdOrUrl.startsWith('https://')) {
      return productOrIdOrUrl;
    }
    prod = NOURA_PRODUCTS.find(p => p.id === productOrIdOrUrl);
  }

  if (prod) {
    const idx = index || 0;
    if (idx === 0) return prod.image;
    if (prod.secondaryImages && prod.secondaryImages[idx - 1]) {
      return prod.secondaryImages[idx - 1];
    }
    if (prod.secondaryImages && prod.secondaryImages[0]) {
      return prod.secondaryImages[0];
    }
    return prod.image;
  }

  const fallback = [
    'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop'
  ];
  return fallback[(index || 0) % fallback.length];
}

export const NOURA_PRODUCTS: NouraProduct[] = ${JSON.stringify(poshProducts, null, 2)};

export const ALL_100_NOURA_PRODUCTS: NouraProduct[] = NOURA_PRODUCTS;

export const POSH_ABAYA_PRODUCTS: NouraProduct[] = NOURA_PRODUCTS;

export const NOURA_TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'Sheikha Maryam Al Nahyan',
    city: 'Abu Dhabi, UAE',
    rating: 5,
    comment: 'The craftsmanship of the Japanese Nida abaya is exceptional. The matching Sheila and gold zari embroidery exceeded my expectations for the Eid gala.',
    date: 'March 2026'
  },
  {
    id: 'test-2',
    name: 'Dr. Reem Al Suwaidi',
    city: 'Dubai (Downtown), UAE',
    rating: 5,
    comment: 'Ordered at 10 AM, delivered to my villa in Jumeirah by 4 PM. Beautiful luxury packaging, flawless stitching, and perfect length 56".',
    date: 'February 2026'
  },
  {
    id: 'test-3',
    name: 'Fatima Al Mansoori',
    city: 'Sharjah, UAE',
    rating: 5,
    comment: 'The bespoke Farasha cut has the most elegant fall. I have received endless compliments at the gallery opening in d3.',
    date: 'January 2026'
  }
];
`;

fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log('Compiled nouraAbayaData.ts with NOURA_FAQS and getDiverseAbayaImage!');
