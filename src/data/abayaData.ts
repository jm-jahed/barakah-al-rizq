export interface AbayaProduct {
  id: string;
  name: string;
  category: 'Ramadan Edition' | 'Luxury Evening' | 'Everyday Minimal' | 'Embroidered Couture' | 'Silk & Satin' | 'Kimono Style';
  priceAED: number;
  originalPriceAED?: number;
  color: string;
  fabric: 'Dubai Nida' | 'Raw Silk' | 'French Chiffon' | 'Natural Linen' | 'Liquid Satin' | 'Organza';
  sizes: ('XS' | 'S' | 'M' | 'L' | 'XL' | 'Custom Fit')[];
  rating: number;
  reviewsCount: number;
  image: string;
  secondaryImages: string[];
  description: string;
  details: string[];
  isNewArrival?: boolean;
  isBestseller?: boolean;
  inStock: boolean;
  occasion: 'Eid & Ramadan' | 'Formal Evening' | 'Casual Luxury' | 'Work & Travel';
}

export interface AbayaCategoryInfo {
  id: string;
  name: string;
  description: string;
  bannerImage: string;
}

export const ABAYA_BRAND = {
  name: 'NOURA ABAYA',
  tagline: 'Elegance Woven in Dubai.',
  positioning: 'Haute Couture Abayas & Modest Luxury',
  whatsapp: 'https://wa.me/971509988440?text=Hello%20NOURA%20ABAYA,%20I%20would%20like%20to%20inquire%20about%20your%20latest%20couture%20collection.',
  phone: '+971 4 399 8000',
  email: 'concierge@nouraabaya.ae',
  boutiqueAddress: 'Boutique #14, Fashion Avenue, The Dubai Mall, Downtown Dubai, UAE',
  flagshipShowroom: 'Galleria Mall, Al Maryah Island, Abu Dhabi, UAE'
};

export const ABAYA_STATS = [
  { label: 'Boutique Designs Crafting', value: '100+' },
  { label: 'UAE Same-Day Deliveries', value: '10,000+' },
  { label: 'Client Satisfaction Rate', value: '99.4%' },
  { label: 'Emirates Served', value: 'All 7 UAE' }
];

export const ABAYA_COLLECTIONS: AbayaCategoryInfo[] = [
  {
    id: 'ramadan-edition',
    name: 'Ramadan & Eid Edition',
    description: 'Opulent gold-embroidered kaftans and floor-length organza abayas designed for sacred evening gatherings.',
    bannerImage: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'luxury-evening',
    name: 'Luxury Evening Couture',
    description: 'Black velvet, hand-beaded crystals, and dramatic cape silhouetted abayas for high-profile galas and weddings.',
    bannerImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'everyday-minimal',
    name: 'Everyday Minimal Chic',
    description: 'Breathable Japanese Nida fabric abayas in neutral taupe, olive, sand, and deep black for effortless daily poise.',
    bannerImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'silk-satin',
    name: 'Liquid Silk & Satin',
    description: 'Lustrous mulberry silk and shimmering satin open-front layered abayas that catch Dubai twilight reflections.',
    bannerImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1200&auto=format&fit=crop'
  }
];

// Generates 100 unique, non-duplicated abaya products
const generate100Products = (): AbayaProduct[] => {
  const categories: AbayaProduct['category'][] = [
    'Ramadan Edition',
    'Luxury Evening',
    'Everyday Minimal',
    'Embroidered Couture',
    'Silk & Satin',
    'Kimono Style'
  ];

  const fabrics: AbayaProduct['fabric'][] = [
    'Dubai Nida',
    'Raw Silk',
    'French Chiffon',
    'Natural Linen',
    'Liquid Satin',
    'Organza'
  ];

  const colors = [
    'Midnight Black',
    'Onyx Gold',
    'Desert Sand',
    'Champagne Pearl',
    'Dusty Rose',
    'Sage Green',
    'Emerald Velvet',
    'Royal Navy',
    'Ivory Cream',
    'Mocha Brown'
  ];

  const occasions: AbayaProduct['occasion'][] = [
    'Eid & Ramadan',
    'Formal Evening',
    'Casual Luxury',
    'Work & Travel'
  ];

  // Curated modest fashion, abaya, kaftan & Arabian dress image IDs (Olive III UAE luxury aesthetic)
  const imageIds = [
    'photo-1583391733956-3750e0ff4e8b', 'photo-1509631179647-0177331693ae', 'photo-1515886657613-9f3515b0c78f',
    'photo-1539571696357-5a69c17a67c6', 'photo-1566174053879-31528523f8ae', 'photo-1558769132-cb1aea458c5e',
    'photo-1572804013309-59a88b7e92f1', 'photo-1534528741775-53994a69daeb', 'photo-1517841905240-472988babdf9',
    'photo-1524504388940-b1c1722653e1', 'photo-1490481651871-ab68de25d43d', 'photo-1496747611176-843222e1e57c',
    'photo-1529139574466-a303027c1d8b', 'photo-1580489944761-15a19d654956', 'photo-1573496359142-b8d87734a5a2',
    'photo-1567532939604-b6b5b0db2604', 'photo-1548142813-c348350df52b', 'photo-1520813792240-56fc4a3765a7',
    'photo-1531123897727-8f129e1688ce', 'photo-1506863530036-1efeddceb993', 'photo-1513956589380-bad6acb9b9d4',
    'photo-1502823403499-6ccfcf4fb453', 'photo-1494790108377-be9c29b29330', 'photo-1543083477-4f785aeafaa9',
    'photo-1522075469751-3a6694fb2f61', 'photo-1514315384763-ba401779410f', 'photo-1529626455594-4ff0802cfb7e',
    'photo-1516585117242-7efef06b9b3f', 'photo-1485230895905-ec40ba36b9bc', 'photo-1526510747491-58f928ec870f'
  ];

  const titles = [
    'The Royal Golden Thread Abaya', 'The Midnight Velvet Cape Abaya', 'The Sand Dune Pleated Linen Abaya',
    'The Champagne Silk Open-Front Kaftan', 'The Emerald Crystal Trimmed Abaya', 'The French Chiffon Tiered Abaya',
    'The Imperial Black Nida Abaya', 'The Dubai Skyline Metallic Beaded Abaya', 'The Pearls & Organza Bridal Abaya',
    'The Minimalist Kimono Cut Abaya', 'The Heritage Zari Embroidered Abaya', 'The Desert Rose Silk Satin Abaya',
    'The Onyx Hand-Draped Silhouette Abaya', 'The Royal Navy Crepe Abaya', 'The Ivory Gold Brocade Abaya',
    'The Twilight Sheer Overlay Abaya', 'The Business Executive Tailored Abaya', 'The Golden Crescent Eid Abaya',
    'The Silk Velvet Evening Abaya', 'The Modern Wrap Kimono Abaya', 'The Artisan Lace Inset Abaya',
    'The Pearl Buttoned Linen Abaya', 'The Gold Thread Lattice Abaya', 'The Fluid Satin Cascade Abaya',
    'The Heritage Geometric Trim Abaya', 'The Obsidian Metallic Jacquard Abaya', 'The Royal Courtyard Draped Abaya',
    'The Sapphire Blue Satin Abaya', 'The Diamond Sparkle Organza Abaya', 'The Sandstone Textured Cotton Abaya',
    'The Midnight Shimmer Plissé Abaya', 'The Vintage Gold Embroidery Abaya', 'The Silk Chiffon Layered Abaya',
    'The Modernist High-Neck Abaya', 'The Crystal Embellished Sleeve Abaya', 'The Emerald Satin Kimono Abaya',
    'The Desert Oasis Linen Abaya', 'The Imperial Black Velvet Abaya', 'The Gold Tassel Trimmed Abaya',
    'The Royal Family Heritage Abaya', 'The Fluid Motion Silk Abaya', 'The Onyx Crystal Waterfall Abaya',
    'The Ivory Silk Sheer Abaya', 'The Rose Gold Thread Abaya', 'The Executive Tailored Nida Abaya',
    'The Celestial Star Beaded Abaya', 'The Golden Leaf Appliqué Abaya', 'The Silk Satin Wrap Abaya',
    'The Plissé Bronze Shimmer Abaya', 'The Royal Crest Embroidered Abaya'
  ];

  const items: AbayaProduct[] = [];

  for (let i = 1; i <= 100; i++) {
    const titleBase = titles[(i - 1) % titles.length];
    const name = i > 50 ? `${titleBase} (Couture Edition)` : titleBase;
    const cat = categories[(i - 1) % categories.length];
    const fab = fabrics[(i - 1) % fabrics.length];
    const col = colors[(i - 1) % colors.length];
    const occ = occasions[(i - 1) % occasions.length];

    // Price calculation: 650 to 3,450 AED
    const priceAED = 650 + ((i * 27) % 2800);
    const originalPriceAED = i % 3 === 0 ? priceAED + 350 : undefined;

    const mainImgId = imageIds[(i - 1) % imageIds.length];
    const altImgId1 = imageIds[(i * 3) % imageIds.length];
    const altImgId2 = imageIds[(i * 7) % imageIds.length];

    const mainImg = `https://images.unsplash.com/${mainImgId}?q=80&w=1000&auto=format&fit=crop`;
    const altImg1 = `https://images.unsplash.com/${altImgId1}?q=80&w=1000&auto=format&fit=crop`;
    const altImg2 = `https://images.unsplash.com/${altImgId2}?q=80&w=1000&auto=format&fit=crop`;

    items.push({
      id: `abaya-prod-${i}`,
      name: `${name} #${i}`,
      category: cat,
      priceAED,
      originalPriceAED,
      color: col,
      fabric: fab,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'Custom Fit'],
      rating: 4.8 + ((i % 3) * 0.1),
      reviewsCount: 12 + (i * 3),
      image: mainImg,
      secondaryImages: [mainImg, altImg1, altImg2],
      description: `Handcrafted in Dubai from authentic ${fab}, inspired by Olive III high-fashion UAE modest silhouette. Features fluid floor-length drape, delicate hand-embroidered detailing, and matching Sheila hijab.`,
      details: [
        `Fabric: 100% Authentic ${fab}`,
        `Color: ${col}`,
        `Includes matching chiffon Sheila hijab`,
        `Made in Dubai, United Arab Emirates`,
        `Dry clean only`
      ],
      isNewArrival: i <= 20,
      isBestseller: i % 4 === 0,
      inStock: true,
      occasion: occ
    });
  }

  return items;
};

export const ALL_100_ABAYA_PRODUCTS: AbayaProduct[] = generate100Products();

export const ABAYA_FAQS = [
  {
    question: 'How fast is delivery within Dubai and Abu Dhabi?',
    answer: 'We offer same-day delivery in Dubai and Abu Dhabi for orders placed before 1:00 PM. Express 24-hour delivery is available across Sharjah, Ajman, Al Ain, Ras Al Khaimah, Fujairah, and Umm Al Quwain.'
  },
  {
    question: 'Are matching Sheila hijabs included with each abaya?',
    answer: 'Yes! Every NOURA abaya comes complimentary with a color-matched, premium French Chiffon or Nida Sheila hijab.'
  },
  {
    question: 'Do you offer custom tailoring and bespoke length adjustments?',
    answer: 'Yes. We offer custom length hem adjustments (50" to 62") and sleeve alterations free of charge. Simply select "Custom Fit" at checkout or message our WhatsApp tailoring desk.'
  },
  {
    question: 'What is your exchange and return policy in the UAE?',
    answer: 'We offer a complimentary 7-day home exchange across all UAE Emirates. Our courier will collect the item directly from your doorstep.'
  },
  {
    question: 'How can I pay for my order?',
    answer: 'We accept Credit/Debit Cards, Tabby (4 interest-free payments), Apple Pay, and Cash on Delivery (COD) across all UAE regions.'
  }
];
