const fs = require('fs');
const path = require('path');

const CATEGORIES = [
  { id: 'haute-coiffure', name: 'Haute Coiffure & Bespoke Color', subtitle: 'French Balayage, Kérastase Caviar & Precision Shears' },
  { id: 'facial-aesthetics', name: '24K Gold, Caviar & Cellular Facials', subtitle: 'Biologique Recherche & Valmont Swiss Rejuvenation' },
  { id: 'nail-architecture', name: 'Russian Manicure & Nail Couture', subtitle: 'Dry E-File Cuticle Precision & BIAB Builder Gel' },
  { id: 'royal-hammam-spa', name: 'Royal Moroccan Hammam & Hydrotherapy', subtitle: 'Beldi Black Soap, Eucalyptus Steam & Rose Clay Body Wrap' },
  { id: 'lash-brow-sculpting', name: 'Lash Architecture & Brow Lamination', subtitle: 'Cashmere Russian Volume & Micro-Feather Tinting' },
  { id: 'bridal-gala-glamour', name: 'Bridal Couture & Red Carpet Artistry', subtitle: 'Airbrush High-Definition & Swarovski Crystal Placement' },
  { id: 'body-contouring', name: 'Lymphatic Drainage & Body Sculpting', subtitle: 'Brazilian Sculpting Technique & Radio-Frequency Firming' },
  { id: 'vip-private-suite', name: 'Private VIP Champagne Suites', subtitle: 'Discreet Valet Entry, Private Stylist & Caviar Service' }
];

const TREATMENT_TITLES = [
  'The Sovereign 24K Pure Gold Infusion Facial & Cryo Lift',
  'The Parisian French Balayage & Gloss Glaze Architecture',
  'The Kérastase Chronologiste Caviar Hair Immersion Ritual',
  'The Russian Dry E-File Diamond Manicure & Builder Gel',
  'The Royal Imperial Moroccan Hammam & Amber Body Polish',
  'The Cashmere Russian 6D Volume Lash Extension Set',
  'The High-Definition Bridal Airbrush & Editorial Crown Styling',
  'The Swiss Valmont Cellular Hydration & Collagen Matrix Treatment',
  'The Brazilian Lymphatic Drainage & Detox Wood Therapy',
  'The Biologique Recherche Remodeling Face & P50 Exfoliation',
  'The Luxury Pedicure with Volcanic Hot Stone & Paraffin Mask',
  'The Nanoplastia Organic Silk Protein Hair Straightening',
  'The 24K Gold Dust Scalp Detox & Micro-Mist Steam Therapy',
  'The Bespoke HD Brow Micro-Lamination & Henna Sculpt',
  'The Pre-Gala Red Carpet Glow Radiance & Oxygen Blast',
  'The Luxury Champagne Private Suite 4-Handed Hair & Nail Ritual',
  'The Aromatherapy Hot Oil Deep Tissue Tension Relief',
  'The Velvet Lip Blush & Semi-Permanent Pigment Contour',
  'The Japanese Head Spa & Herbal Waterfall Scalp Rejuvenation',
  'The 100% Organic Botanical Vegan Hair Gloss & Keratin Boost'
];

const BRANDS = ['Biologique Recherche Paris', 'Valmont Switzerland', 'Kérastase Paris', 'Oribe Luxury', 'Dyson Pro', 'Guinot Paris', 'OPI Pro', 'Leonor Greyl Paris'];

const MASTER_STYLISTS = [
  { name: 'Genevieve Laurent', title: 'Creative Director — Paris Haute Coiffure', experience: '14+ Yrs Paris & Dubai Fashion Week' },
  { name: 'Anastasia Volkova', title: 'Master Nail Artist & Russian E-File Specialist', experience: '10+ Yrs Master Instructor' },
  { name: 'Nour Al-Sabah', title: 'Senior Aesthetician & Valmont Certified Specialist', experience: '12+ Yrs Swiss Cellular Skin' },
  { name: 'Camilla Rossi', title: 'Lead Bridal & Red Carpet Makeup Director', experience: '11+ Yrs Milan & Cannes Red Carpet' }
];

const UNSPLASH_IMAGES = [
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85'
];

const treatments = [];
let idCounter = 1;

// 20 unique luxury treatments per category = 160 treatments
CATEGORIES.forEach((cat, catIdx) => {
  for (let i = 0; i < 20; i++) {
    const tId = `VT-${String(idCounter).padStart(3, '0')}`;
    const baseTitle = TREATMENT_TITLES[i % TREATMENT_TITLES.length];
    const brand = BRANDS[(catIdx + i) % BRANDS.length];
    const stylist = MASTER_STYLISTS[(catIdx + i) % MASTER_STYLISTS.length];
    const imgIndex1 = (catIdx * 2 + i) % UNSPLASH_IMAGES.length;
    const imgIndex2 = (imgIndex1 + 3) % UNSPLASH_IMAGES.length;
    const imgIndex3 = (imgIndex1 + 6) % UNSPLASH_IMAGES.length;

    let basePrice = 350;
    if (cat.id.includes('facial')) basePrice = 950 + (i * 90);
    else if (cat.id.includes('bridal')) basePrice = 2200 + (i * 180);
    else if (cat.id.includes('haute')) basePrice = 650 + (i * 60);
    else if (cat.id.includes('royal')) basePrice = 750 + (i * 70);
    else if (cat.id.includes('vip')) basePrice = 1850 + (i * 150);
    else basePrice = 400 + (i * 40);

    const priceAED = Math.round(basePrice / 25) * 25;
    const durationMins = 45 + (i % 6) * 15;

    treatments.push({
      id: tId,
      title: `${baseTitle} — Signature ${cat.name.split(' ')[0]}`,
      slug: `${cat.id}-${tId.toLowerCase()}`,
      categoryId: cat.id,
      categoryName: cat.name,
      brandProduct: brand,
      durationMinutes: durationMins,
      priceAED: priceAED,
      originalPriceAED: Math.random() > 0.6 ? Math.round((priceAED * 1.2) / 25) * 25 : undefined,
      assignedStylist: stylist,
      isVipSuiteEligible: cat.id.includes('vip') || i % 3 === 0,
      isOrganicCertified: i % 2 === 0,
      rating: +(4.9 + ((idCounter * 0.01) % 0.1)).toFixed(1),
      reviewsCount: 35 + (idCounter * 4),
      heroImage: UNSPLASH_IMAGES[imgIndex1],
      beforeImage: UNSPLASH_IMAGES[imgIndex1],
      afterImage: UNSPLASH_IMAGES[imgIndex2],
      gallery: [
        UNSPLASH_IMAGES[imgIndex1],
        UNSPLASH_IMAGES[imgIndex2],
        UNSPLASH_IMAGES[imgIndex3]
      ],
      description: `An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic ${brand} active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by ${stylist.name}.`,
      includedSteps: [
        'Personalized diagnostic skin/hair texture analysis & lifestyle consultation',
        `Deep clarifying prep with ${brand} active botanical extracts`,
        'Targeted master aesthetic technique with ultrasonic or micro-current technology',
        'Soothing cold-stone cryo therapy & custom nutrient-infusion seal',
        'Signature blowout or finishing polish with take-home aftercare protocol'
      ],
      aftercareAdvice: [
        'Avoid thermal heat, swimming pools & direct UV exposure for 24 hours',
        `Maintain optimal longevity with recommended ${brand} home regime`,
        'Schedule maintenance visit within 4 to 6 weeks for sustained radiance'
      ]
    });

    idCounter++;
  }
});

const fileContent = `export interface SalonTreatment {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  categoryName: string;
  brandProduct: string;
  durationMinutes: number;
  priceAED: number;
  originalPriceAED?: number;
  assignedStylist: {
    name: string;
    title: string;
    experience: string;
  };
  isVipSuiteEligible: boolean;
  isOrganicCertified: boolean;
  rating: number;
  reviewsCount: number;
  heroImage: string;
  beforeImage: string;
  afterImage: string;
  gallery: string[];
  description: string;
  includedSteps: string[];
  aftercareAdvice: string[];
}

export const SALON_TREATMENTS_CATALOG: SalonTreatment[] = ${JSON.stringify(treatments, null, 2)};
`;

const outputPath = path.join(__dirname, '../src/data/salonCatalogData.ts');
fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully generated ${treatments.length} salon treatments to ${outputPath}`);
