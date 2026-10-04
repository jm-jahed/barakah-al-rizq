const fs = require('fs');
const path = require('path');

const CATEGORIES = [
  { id: 'villa-deep-cleaning', name: 'Ultra-Luxury Villa Deep Clean', subtitle: 'Comprehensive 7-Phase Sanitization for Mansions & Estates' },
  { id: 'move-in-out-handover', name: 'Move-In & Handover Detailing', subtitle: 'Dubai Municipality Approved Ready-to-Occupy Cleansing' },
  { id: 'post-construction', name: 'Post-Construction Bio-Sanitization', subtitle: 'HEPA Fine Dust Extraction, Grout De-Hazing & Debris Removal' },
  { id: 'marble-crystallization', name: 'Marble Honing & Italian Diamond Polishing', subtitle: 'Klindex Precision Restoration for Statuario & Calacatta Marble' },
  { id: 'chandelier-crystal', name: 'Chandelier & Crystal Restoration', subtitle: 'Ultrasonic Hand-Detailing for Swarovski & Murano Fixtures' },
  { id: 'upholstery-silk-carpet', name: 'Luxury Upholstery, Silk & Persian Rug Care', subtitle: 'Dry Extraction & Temperature-Controlled Steam Sanitization' },
  { id: 'hvac-air-duct', name: 'HVAC Air Duct & Indoor Air Quality Sanitization', subtitle: 'Robotic Rotary Brushing & Medical-Grade Fogging' },
  { id: 'commercial-clinic-fm', name: 'Corporate, Clinic & Retail Facility Management', subtitle: 'DHA-Sterilization & High-Traffic Corporate Protocols' }
];

const SERVICE_TITLES = [
  'The Sovereign Royal Villa Deep Clean & UV Decontamination',
  'The Elysian Move-In Handover & Bio-Seal Detailing',
  'The Master Diamond Marble Honing & Crystallization Program',
  'The Murano & Swarovski Crystal Chandelier Ultrasonic Restoration',
  'The Medical-Grade HVAC Air Duct & Coil Disinfection Protocol',
  'The Persian Silk & Hand-Knotted Wool Carpet Extraction Service',
  'The Full Architectural Glass & High-Rise Abseiling Detailing',
  'The Subterranean Garage & Epoxy Floor Hydro-Scrub Program',
  'The Private Superyacht Interior Detailing & Teak Restoration',
  'The Commercial Clinic DHA-Certified Bio-Decontamination Service',
  'The Luxury Infinity Pool & Outdoor Patio Hydro-Jet Detailing',
  'The Bespoke Italian Kitchen Degreasing & Appliance Steam Restoration',
  'The Fine Leather Furniture Nourishment & Anti-Microbial Treatment',
  'The Rooftop Solarium & Solar Panel Robotic Dry Cleaning',
  'The Wine Cellar Climate-Controlled Dust & Mold Sanitization',
  'The Luxury Wardrobe & Walk-in Dressing Salon Sanitization',
  'The Spa & Private Hammam Descaling & Anti-Fungal Treatment',
  'The Move-Out Deposit Return Guaranteed Complete Deep Clean',
  'The High-Rise Penthouse 360° Curtain Wall Glass Wash',
  'The Green-Certified Eco-Botanical Allergy Relief Sanitization'
];

const PROPERTY_TYPES = ['Signature Villa / Mansion', 'Sky Penthouse', 'Luxury Apartment', 'Commercial Office', 'Medical Clinic', 'Superyacht Interior', 'Retail Showroom'];

const LOCATIONS = ['Palm Jumeirah', 'Emirates Hills', 'Jumeirah Bay Island', 'Downtown Dubai', 'Dubai Hills Estate', 'Saadiyat Island', 'Al Barari', 'DIFC', 'Bluewaters Island', 'Dubai Marina'];

const EQUIPMENT_OPTIONS = [
  ['Kärcher Professional Puzzi 30/4', 'Klindex Levighetor Diamond Grinder', 'HEPA Class H14 Air Scrubbers', 'Thermoclean 180°C Dry Steam Jet'],
  ['Nilfisk Industrial Ride-On Scrubber', 'UVC Surface Sterilizer Wand', 'Bio-Fogger Ultra Low Volume Mister', 'Ghibli & Wirbel Commercial Extractor'],
  ['Klindex Diamond Resin Pads (400-3000 Grit)', 'Rotovac 360 Carpet Restoration Engine', 'Bissell BigGreen Pro Commercial', 'Laser Particulate Sensor Meter'],
  ['SkyWash Water-Fed Carbon Fiber Poles', 'Electrostatic EPA-Registered Sprayer', 'Ultrasonic Micro-Component Bath', 'Diversey Taski Nano Micro-Scrubber']
];

const CHEMICAL_CERTS = [
  'Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)',
  'Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners',
  'DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)',
  'Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)'
];

const UNSPLASH_IMAGES = [
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85'
];

const services = [];
let idCounter = 1;

// Generate 20 unique services per category = 160 luxury services
CATEGORIES.forEach((cat, catIdx) => {
  for (let i = 0; i < 20; i++) {
    const sId = `PR-${String(idCounter).padStart(3, '0')}`;
    const baseTitle = SERVICE_TITLES[i % SERVICE_TITLES.length];
    const propertyType = PROPERTY_TYPES[(catIdx + i) % PROPERTY_TYPES.length];
    const loc = LOCATIONS[(catIdx + i) % LOCATIONS.length];
    const equip = EQUIPMENT_OPTIONS[(catIdx + i) % EQUIPMENT_OPTIONS.length];
    const chemCert = CHEMICAL_CERTS[(catIdx + i) % CHEMICAL_CERTS.length];
    
    // Pricing in AED based on category depth
    let basePrice = 650;
    if (cat.id.includes('villa')) basePrice = 1850 + (i * 150);
    else if (cat.id.includes('marble')) basePrice = 2400 + (i * 220);
    else if (cat.id.includes('post-construction')) basePrice = 2200 + (i * 180);
    else if (cat.id.includes('chandelier')) basePrice = 1200 + (i * 110);
    else if (cat.id.includes('hvac')) basePrice = 1450 + (i * 130);
    else if (cat.id.includes('commercial')) basePrice = 3200 + (i * 250);
    else basePrice = 850 + (i * 80);

    const priceAED = Math.round(basePrice / 50) * 50;
    const durationHours = 3 + (i % 6);
    const crewSize = 2 + (i % 5);
    const imgIndex1 = (catIdx * 2 + i) % UNSPLASH_IMAGES.length;
    const imgIndex2 = (imgIndex1 + 3) % UNSPLASH_IMAGES.length;

    services.push({
      id: sId,
      title: `${baseTitle} — ${cat.name.split(' ')[0]} Edition`,
      slug: `${cat.id}-${sId.toLowerCase()}`,
      categoryId: cat.id,
      categoryName: cat.name,
      propertyType: propertyType,
      recommendedFor: `Ideal for ${propertyType}s in ${loc} requiring flawless execution and certified non-toxic standards.`,
      priceAED: priceAED,
      originalPriceAED: Math.random() > 0.6 ? Math.round((priceAED * 1.2) / 50) * 50 : undefined,
      durationHours: durationHours,
      crewSize: crewSize,
      sqftCoverage: 1500 + (i * 600),
      turnaroundSpeed: i % 2 === 0 ? 'Same-Day VIP Priority (Within 2 Hours)' : 'Next-Day Scheduled Dispatch',
      chemicalCertification: chemCert,
      equipment: equip,
      guarantee: '100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted',
      rating: +(4.9 + ((idCounter * 0.01) % 0.1)).toFixed(1),
      reviewsCount: 38 + (idCounter * 3),
      heroImage: UNSPLASH_IMAGES[imgIndex1],
      beforeImage: UNSPLASH_IMAGES[imgIndex1],
      afterImage: UNSPLASH_IMAGES[imgIndex2],
      isPopular: i < 3,
      isCorporateEligible: cat.id.includes('commercial') || i % 4 === 0,
      description: `A meticulous, BICSc-certified cleaning operation engineered for high-value properties in ${loc}. Delivered by background-checked British-trained supervisors utilizing industrial ${equip[0]} and ${chemCert.toLowerCase()}. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.`,
      deliverables: [
        'Detailed high-level vacuuming and HEPA air scrubbing',
        'Deep steam extraction of all soft surfaces and mattresses',
        'Hospital-grade sterilization of bathrooms, vanity units, and mirrors',
        'Double-stage degreasing of luxury kitchen joinery and internal appliances',
        'Machine scrubbing and pH-neutral conditioning of tile and wood floors',
        'Comprehensive touchpoint bio-sanitization (handles, remotes, switches)'
      ],
      methodology: [
        { phase: '1. Surface & Air Quality Inspection', description: 'LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions.' },
        { phase: '2. High-Level Dust & HEPA Extraction', description: 'Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris.' },
        { phase: '3. Thermoclean Bio-Steam Treatment', description: '180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria.' },
        { phase: '4. Diamond Polish & Material Conditioning', description: 'Application of bespoke protective sealant on natural stone, marble, and hardwood.' },
        { phase: '5. Quality Audit & Sign-off', description: 'White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor.' }
      ]
    });

    idCounter++;
  }
});

const fileContent = `export interface CleaningService {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  categoryName: string;
  propertyType: string;
  recommendedFor: string;
  priceAED: number;
  originalPriceAED?: number;
  durationHours: number;
  crewSize: number;
  sqftCoverage: number;
  turnaroundSpeed: string;
  chemicalCertification: string;
  equipment: string[];
  guarantee: string;
  rating: number;
  reviewsCount: number;
  heroImage: string;
  beforeImage: string;
  afterImage: string;
  isPopular: boolean;
  isCorporateEligible: boolean;
  description: string;
  deliverables: string[];
  methodology: { phase: string; description: string }[];
}

export const CLEANING_CATALOG: CleaningService[] = ${JSON.stringify(services, null, 2)};
`;

const outputPath = path.join(__dirname, '../src/data/cleaningCatalogData.ts');
fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully generated ${services.length} luxury cleaning services to ${outputPath}`);
