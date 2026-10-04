const fs = require('fs');
const path = require('path');

const DISCIPLINES = [
  {
    id: 'royal-haircut-styling',
    name: 'Royal Hair Architecture & Fade',
    tagline: 'Precision Scissor Silhouette, Low/Mid/High Taper Skin Fade & Scalp Steam Wash',
    basePrice: 180,
    priceSpan: 420,
    duration: '45 - 60 Mins',
    barber: 'Master Barber Tariq Al-Sayed (14 yrs Dubai DIFC)',
    badge: 'Signature DIFC Cut'
  },
  {
    id: 'traditional-hot-towel-shave',
    name: 'Traditional Cut-Throat Shave',
    tagline: 'Damascus Steel Straight Razor, 3-Stage Eucalyptus Hot Towels & Aftershave Balm',
    basePrice: 140,
    priceSpan: 280,
    duration: '40 - 50 Mins',
    barber: 'Senior Barber Marco Rossi (Milan Master Barber)',
    badge: 'Damascus Steel Razor'
  },
  {
    id: 'beard-sculpting-contour',
    name: 'Executive Beard Sculpting',
    tagline: 'Cheekbone Razor Line-Up, Organic Argan Hot Oil Treatment & Ozonated Steam',
    basePrice: 120,
    priceSpan: 260,
    duration: '35 - 45 Mins',
    barber: 'Master Barber Ahmed Khalil (Beard Specialist)',
    badge: 'Organic Argan Oil Infusion'
  },
  {
    id: 'vip-gentlemans-rituals',
    name: 'Sovereign VIP Grooming Rituals',
    tagline: 'The Royal Sovereign Full-Works: Haircut, Hot Towel Shave, Black Mask & Head Massage',
    basePrice: 450,
    priceSpan: 950,
    duration: '90 - 120 Mins',
    barber: 'Creative Director Tariq & Master Barber Marco',
    badge: 'Private VIP Suite Experience'
  },
  {
    id: 'charcoal-facial-skin-therapy',
    name: 'Men’s Detox Facial & Skin Care',
    tagline: 'Dead Sea Mud Peel, Deep Pore Charcoal Scrub & Cold Cryo Orb Skin Tightening',
    basePrice: 220,
    priceSpan: 480,
    duration: '45 - 60 Mins',
    barber: 'Clinical Grooming Aesthetician Dr. Youssef',
    badge: 'Cryo Orb Skin Recovery'
  },
  {
    id: 'hair-strengthening-spa',
    name: 'Scalp Detox & Hair Revitalizer',
    tagline: 'Rosemary Stem Cell Infusion, High-Frequency Scalp Stimulation & Protein Mask',
    basePrice: 260,
    priceSpan: 540,
    duration: '45 - 60 Mins',
    barber: 'Scalp Therapist Elena Petrova',
    badge: 'High-Frequency Microcurrent'
  },
  {
    id: 'executive-manicure-pedicure',
    name: 'Executive Hand & Foot Care',
    tagline: 'Paraffin Wax Hand Treatment, Deep Cuticle Precision & Foot Pressure Reflexology',
    basePrice: 190,
    priceSpan: 390,
    duration: '50 - 70 Mins',
    barber: 'Spa Specialist Chen Wei',
    badge: 'Paraffin Heat Therapy'
  },
  {
    id: 'exclusive-grooming-products',
    name: 'Artisanal Pomades & Elixirs',
    tagline: 'Sandalwood Matte Clay, Oud Beard Elixirs & Hand-Crafted Horn Grooming Combs',
    basePrice: 95,
    priceSpan: 320,
    duration: 'Retail Express Delivery',
    barber: 'The Gentlemen’s Room Apothecary',
    badge: '100% Organic Dubai Blend'
  }
];

const CURATED_BARBER_IMAGES = [
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517832606589-7629c33971a3?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=1200&auto=format&fit=crop'
];

const items = [];
let itemIdx = 1;

DISCIPLINES.forEach((dept, deptIdx) => {
  for (let i = 1; i <= 20; i++) {
    const id = `GENT-BARB-${String(itemIdx).padStart(3, '0')}`;
    const price = dept.basePrice + Math.round((i * dept.priceSpan) / 20);
    const originalPrice = Math.round(price * 1.15);
    const heroImage = CURATED_BARBER_IMAGES[(itemIdx + i) % CURATED_BARBER_IMAGES.length];
    const secondaryImage = CURATED_BARBER_IMAGES[(itemIdx + i + 1) % CURATED_BARBER_IMAGES.length];

    items.push({
      id,
      name: `${dept.name} — Ritual ${i}`,
      title: `${dept.name.split('&')[0].trim()} Sovereign Service ${i}`,
      subtitle: `${dept.duration} • ${dept.barber.split('(')[0].trim()}`,
      disciplineId: dept.id,
      disciplineName: dept.name,
      category: 'Gentlemen Grooming & Barbering',
      priceAED: price,
      originalPriceAED: originalPrice,
      duration: dept.duration,
      doctor: dept.barber,
      insuranceBadge: dept.badge,
      clinicWing: `The Gentlemen's Room • Chair ${i % 8 + 1} (DIFC Salon)`,
      inStock: true,
      isBestseller: i === 1 || i === 4 || i === 8,
      isDrop: i % 4 === 0,
      isNewArrival: i > 15,
      heroImage,
      images: [heroImage, secondaryImage],
      description: `The Gentlemen's Room bespoke ritual ${dept.name} — Execution ${i}. Administered in our DIFC luxury parlor with hot towel compression, Japanese Takara Belmont leather chairs, and hand-blended organic grooming oils.`,
      clinicalFeatures: [
        'Complimentary single-origin espresso or Moroccan mint tea ceremony',
        'Custom straight-edge razor line clean-up & hot lather neck shave',
        'Head, neck, and shoulder pressure point acupressure massage',
        'Cold eucalyptus towel finish with artisanal sandalwood aftershave splash'
      ],
      patientNotice: 'Valet parking available at DIFC Gate Precinct 4. Instant WhatsApp appointment booking with dedicated chair reservation.'
    });

    itemIdx++;
  }
});

const outputFilePath = path.join(__dirname, '..', 'src', 'data', 'barberCatalogData.ts');

const fileContent = `// THE GENTLEMEN'S ROOM BARBER STUDIO DIFC • DUBAI — 160 EXECUTIVE GROOMING RITUALS
// Japanese Belmont Recliners, Damascus Steel Razors & UAE AED Pricing

export interface BarberCatalogItem {
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

export const GENTLEMEN_BARBER_CATALOG: BarberCatalogItem[] = ${JSON.stringify(items, null, 2)};
`;

fs.writeFileSync(outputFilePath, fileContent, 'utf-8');
console.log(`Successfully generated ${items.length} Gentlemen's Room Barber rituals for Project 20!`);
