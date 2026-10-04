const fs = require('fs');
const path = require('path');

const DISCIPLINES = [
  {
    id: 'luxury-optical-frames',
    name: 'Handcrafted Optical Frames',
    tagline: 'Mazzucchelli Italian Acetate, Aerospace Beta-Titanium & Bespoke Bridge Fit',
    basePrice: 650,
    priceSpan: 1600,
    material: 'Italian Acetate',
    badge: 'Handmade in Cadore, Italy'
  },
  {
    id: 'haute-sunglasses',
    name: 'Haute Polarized Sunglasses',
    tagline: 'Zeiss Hydrophobic Lenses, 24K Gold Plated Accents & 100% UVA/UVB Filter',
    basePrice: 850,
    priceSpan: 2400,
    material: 'Titanium & Gold Plate',
    badge: 'Carl Zeiss Polarized'
  },
  {
    id: 'blue-light-digital-defense',
    name: 'Blue-Light Digital Defense',
    tagline: 'Crizal Prevencia Anti-Reflective, High-Index HEV Blue Filter & Eye Comfort',
    basePrice: 480,
    priceSpan: 980,
    material: 'TR90 Ultra-Flex',
    badge: '99.4% HEV Blue Light Block'
  },
  {
    id: 'bespoke-titanium-silhouette',
    name: 'Bespoke Titanium Silhouettes',
    tagline: 'Pure Japanese Featherlight Titanium (under 10g), Screwless Hinge Architecture',
    basePrice: 1200,
    priceSpan: 3100,
    material: 'Japanese Pure Titanium',
    badge: 'Ultra-Light 9.2 Grams'
  },
  {
    id: 'sports-performance-eyewear',
    name: 'Sports & Adventure Performance',
    tagline: 'Impact-Resistant Polycarbonate, Hydrophilic Grip & Panoramic Curved Shield',
    basePrice: 590,
    priceSpan: 1300,
    material: 'Grilamid TR90',
    badge: 'ANSI Z87.1 High-Velocity'
  },
  {
    id: 'kids-adolescent-eyewear',
    name: 'Kids & Teens Precision Frames',
    tagline: 'Unbreakable BPA-Free Silicone Bridges, Shatterproof Lenses & Vibrant Colors',
    basePrice: 380,
    priceSpan: 720,
    material: 'Bio-Based Flex Polymer',
    badge: 'Child Safe & Shatterproof'
  },
  {
    id: 'precision-rx-lens-packages',
    name: 'Prescription Digital Freeform Lenses',
    tagline: 'German Rodenstock Digital Surfacing, Anti-Scratch Nano-Diamond & Photochromic',
    basePrice: 550,
    priceSpan: 2200,
    material: 'High-Index 1.74 Organic',
    badge: 'German Digital Freeform'
  },
  {
    id: 'vip-optometric-diagnostics',
    name: 'VIP Clinical Optometry & Fundus',
    tagline: 'Zeiss OCT Retinal Angiography, Glaucoma Corneal Pachymetry & Dry Eye Spa',
    basePrice: 400,
    priceSpan: 1200,
    material: 'Clinical Diagnostic Protocol',
    badge: 'DHA Licensed Optometrist'
  }
];

const CURATED_OPTICAL_IMAGES = [
  'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509695503492-413009d1369c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582142839970-2b9da0c3fa4f?q=80&w=1200&auto=format&fit=crop'
];

const items = [];
let itemIdx = 1;

DISCIPLINES.forEach((dept, deptIdx) => {
  for (let i = 1; i <= 20; i++) {
    const id = `VISTA-OPT-${String(itemIdx).padStart(3, '0')}`;
    const price = dept.basePrice + Math.round((i * dept.priceSpan) / 20);
    const originalPrice = Math.round(price * 1.15);
    const heroImage = CURATED_OPTICAL_IMAGES[(itemIdx + i) % CURATED_OPTICAL_IMAGES.length];
    const secondaryImage = CURATED_OPTICAL_IMAGES[(itemIdx + i + 1) % CURATED_OPTICAL_IMAGES.length];

    items.push({
      id,
      name: `${dept.name} — Edition ${i}`,
      title: `${dept.name.split('&')[0].trim()} Sovereign Frame ${i}`,
      subtitle: `${dept.material} • Dubai City Walk Atelier`,
      disciplineId: dept.id,
      disciplineName: dept.name,
      category: 'Luxury Optical & Eyewear',
      priceAED: price,
      originalPriceAED: originalPrice,
      duration: 'Same-Day Dubai Fitting',
      doctor: 'Dr. Sarah Al Hashimi (BSc Optom London, Lead Optometrist)',
      insuranceBadge: dept.badge,
      clinicWing: `VistaÉye Pavilion • Suite ${String.fromCharCode(65 + (i % 3))}`,
      inStock: true,
      isBestseller: i === 1 || i === 4 || i === 9,
      isDrop: i % 5 === 0,
      isNewArrival: i > 15,
      heroImage,
      images: [heroImage, secondaryImage],
      description: `VistaÉye Optical Studio collection ${dept.name} — Creation ${i}. Engineered with ${dept.material} and outfitted with anti-reflective ultraviolet coated optics. Assembled with precision German hardware for effortless everyday luxury.`,
      clinicalFeatures: [
        'Free 15-minute digital corneal mapping & Pupillary Distance (PD) measurement',
        'Zeiss or Rodenstock precision digital lens compatibility',
        'Direct billing coordination with UAE health & optical insurers',
        'Complimentary luxury hard case, microfiber cloth & lifetime adjustments'
      ],
      patientNotice: 'Free 2-hour express delivery across Dubai for in-stock prescription orders. 30-day perfect vision guarantee.'
    });

    itemIdx++;
  }
});

const outputFilePath = path.join(__dirname, '..', 'src', 'data', 'opticalCatalogData.ts');

const fileContent = `// VISTAÉYE OPTICAL ATELIER CITY WALK • DUBAI — 160 EYEWEAR & CLINICAL OPTOMETRY PROTOCOLS
// Handcrafted Italian & Japanese Frames, Zeiss Optics & UAE AED Pricing

export interface OpticalCatalogItem {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  disciplineId: string;
  disciplineName: string;
  category: string;
  priceAED: number;
  originalPriceAED?: number;
  duration: string;
  doctor: string;
  insuranceBadge: string;
  clinicWing: string;
  inStock: boolean;
  isBestseller?: boolean;
  isDrop?: boolean;
  isNewArrival?: boolean;
  heroImage: string;
  images: string[];
  description: string;
  clinicalFeatures: string[];
  patientNotice: string;
}

export const VISTA_OPTICAL_CATALOG: OpticalCatalogItem[] = ${JSON.stringify(items, null, 2)};
`;

fs.writeFileSync(outputFilePath, fileContent, 'utf-8');
console.log(`Successfully generated ${items.length} VistaÉye Optical services for Project 19!`);
