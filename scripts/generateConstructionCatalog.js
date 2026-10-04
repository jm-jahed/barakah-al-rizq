// scripts/generateConstructionCatalog.js
const fs = require('fs');
const path = require('path');

const DISCIPLINES = [
  {
    id: 'villa-architecture-build',
    name: 'Ground-Up Ultra-Luxury Villa Construction',
    categoryName: 'Ground-Up Ultra-Luxury Villa Construction',
    scopeType: 'Turnkey Architectural Construction',
    basePriceAED: 4500000,
    pricePerSqFtAED: 650,
    typicalTimeline: '12 - 18 Months',
    materials: ['Italian Calacatta Borghini Marble', 'Reinforced Swiss Glazing', 'Slavonian White Oak', 'Daikin VRV MEP']
  },
  {
    id: 'corporate-fitout-difc',
    name: 'Grade-A Corporate & DIFC Office Fit-Out',
    categoryName: 'Grade-A Corporate & DIFC Office Fit-Out',
    scopeType: 'Commercial Turnkey Fit-Out',
    basePriceAED: 850000,
    pricePerSqFtAED: 420,
    typicalTimeline: '3 - 6 Months',
    materials: ['Acoustic Micro-Perforated Timber', 'Rimadesio Glass Partitions', 'Interface Carbon-Neutral Flooring', 'Lutron Lighting']
  },
  {
    id: 'penthouse-renovation',
    name: 'Super-Prime Penthouse Complete Overhaul',
    categoryName: 'Super-Prime Penthouse Complete Overhaul',
    scopeType: 'Bespoke Luxury Renovation',
    basePriceAED: 1650000,
    pricePerSqFtAED: 580,
    typicalTimeline: '4 - 8 Months',
    materials: ['Bookmatched Statuario Marble', 'Poliform Custom Wardrobes', 'Boffi Kitchen Joinery', 'Smart Home KNX']
  },
  {
    id: 'mep-authority-approvals',
    name: 'MEP Infrastructure & Municipality Approvals',
    categoryName: 'MEP Infrastructure & Municipality Approvals',
    scopeType: 'Engineering & Permitting Matrix',
    basePriceAED: 380000,
    pricePerSqFtAED: 180,
    typicalTimeline: '2 - 4 Months',
    materials: ['DEWA Approved Heavy Switchgear', 'Dubai Civil Defense Fire Suppression', 'HVAC Fresh Air Heat Exchangers']
  },
  {
    id: 'hospitality-restaurant-fitout',
    name: 'Fine Dining Restaurant & Boutique Hospitality',
    categoryName: 'Fine Dining Restaurant & Boutique Hospitality',
    scopeType: 'Hospitality Turnkey Execution',
    basePriceAED: 2200000,
    pricePerSqFtAED: 750,
    typicalTimeline: '4 - 7 Months',
    materials: ['Antiqued Brushed Brass', 'Terrazzo Custom Cast Flooring', 'Commercial Kitchen Electrolux Pro', 'Flos Custom Lighting']
  },
  {
    id: 'bespoke-joinery-marble',
    name: 'Artisanal Joinery & Custom Marble Masonry',
    categoryName: 'Artisanal Joinery & Custom Marble Masonry',
    scopeType: 'Architectural Millwork & Stonework',
    basePriceAED: 650000,
    pricePerSqFtAED: 490,
    typicalTimeline: '2 - 5 Months',
    materials: ['Nero Marquina & Onyx Backlit', 'Canaletto Walnut Paneling', 'Champagne Bronze Metal Trims', 'Soft-Close Blum Movento']
  },
  {
    id: 'landscape-pool-outdoor',
    name: 'Luxury Landscape Architecture & Infinity Pools',
    categoryName: 'Luxury Landscape Architecture & Infinity Pools',
    scopeType: 'Exterior Construction & Oasis',
    basePriceAED: 950000,
    pricePerSqFtAED: 380,
    typicalTimeline: '3 - 6 Months',
    materials: ['Balinese Sukabumi Pool Stone', 'Thermal Ash Decking', 'Bioclimatic Renson Pergolas', 'Desert Flora & Olive Trees']
  },
  {
    id: 'smart-knx-automation',
    name: 'KNX Smart Home Automation & Acoustic Theatres',
    categoryName: 'KNX Smart Home Automation & Acoustic Theatres',
    scopeType: 'Integrated IoT & Audio-Visual',
    basePriceAED: 520000,
    pricePerSqFtAED: 240,
    typicalTimeline: '2 - 4 Months',
    materials: ['Crestron Home OS 4', 'Basalte Belgian Touch Keypads', 'Wisdom Audio Architectural Speakers', 'Barco 4K Cinema Laser']
  }
];

const LOCATIONS = [
  'Palm Jumeirah (Billionaires Row), Dubai',
  'Emirates Hills Sector E, Dubai',
  'DIFC Gate Precinct 4, Dubai',
  'Downtown Dubai (Burj Crown Penthouses)',
  'Pearl Jumeirah Waterfront Mansions',
  'Al Barari Botanical Reserve, Dubai',
  'Saadiyat Cultural District, Abu Dhabi',
  'Dubai Hills Estate (Golf Mansions)',
  'Jumeirah Bay Island (Bulgari Resort Vicinity)',
  'Bluewaters Island Luxury Residences'
];

const IMAGES = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80'
];

const catalog = [];
let idCounter = 1;

DISCIPLINES.forEach((disc) => {
  for (let i = 1; i <= 20; i++) {
    const paddedId = String(idCounter).padStart(3, '0');
    const id = `VX-${paddedId}`;
    const location = LOCATIONS[(idCounter + i) % LOCATIONS.length];
    const imgIndex = (idCounter + i) % IMAGES.length;
    const buaSqFt = 2500 + (i * 650);

    let customTitle = '';
    if (disc.id === 'villa-architecture-build') {
      const types = [
        'Palatial Modernist 7-Bedroom Waterfront Villa Construction',
        'Bespoke Contemporary Mediterranean Architectural Residence',
        'Minimalist Monolithic Concrete & Glass Villa Build',
        'Ultra-Luxury Signature Golf Course Estate Ground-Up Build',
        'Neo-Classical Imperial Villa with Private Underground Gallery'
      ];
      customTitle = `${types[i % types.length]} — ${location.split(',')[0]}`;
    } else if (disc.id === 'corporate-fitout-difc') {
      const types = [
        'DIFC Sovereign Wealth Fund Executive Headquarters Fit-Out',
        'Tier-1 Private Equity Trading Floor & Boardroom Suite',
        'High-Security Crypto Asset Management Hub & Lounge',
        'International Law Chambers Acoustic Glass Suite',
        'Bespoke Family Office Private Wealth Sanctuary'
      ];
      customTitle = `${types[i % types.length]} (${location.split(',')[0]})`;
    } else if (disc.id === 'penthouse-renovation') {
      const types = [
        'Full Triplex Sky Penthouse Structural Stripping & Italian Fit-Out',
        'Waterfront Duplex Penthouse Luxury Marble Transformation',
        'Panoramic Burj Khalifa View Sky Palace Overhaul',
        'Super-Prime Marina Penthouse with Cantilevered Glass Pool',
        'Bespoke Royal Penthouse Complete Architectural Transformation'
      ];
      customTitle = `${types[i % types.length]} — ${location.split(',')[0]}`;
    } else if (disc.id === 'mep-authority-approvals') {
      const types = [
        'Dubai Municipality & Civil Defense Fast-Track Permit Matrix',
        'DEWA High-Capacity Electrical Substation & MEP Retrofit',
        'Trakhees & DDA Industrial Structural Engineering Sign-Off',
        'Comprehensive Central HVAC VRV & Air Sterilization Grid',
        'Structural Load-Bearing Modification & Carbon-Fiber Reinforcement'
      ];
      customTitle = `${types[i % types.length]} (${location.split(',')[0]})`;
    } else if (disc.id === 'hospitality-restaurant-fitout') {
      const types = [
        'Michelin-Star Contemporary Japanese Fine-Dining Fit-Out',
        'Haute French Riviera Beach Club & Pergola Architecture',
        'Rooftop Speakeasy Lounge with Acoustic Brass Cladding',
        'Artisanal Italian Trattoria & Wood-Fired Hearth Suite',
        'Boutique Luxury Hotel Lobby & Champagne Bar Fit-Out'
      ];
      customTitle = `${types[i % types.length]} — ${location.split(',')[0]}`;
    } else if (disc.id === 'bespoke-joinery-marble') {
      const types = [
        'Bookmatched Calacatta Gold Feature Walls & Floating Stairs',
        'Master Walk-in Dressing Suite in Canaletto Walnut & Suede',
        'Solid Slavonian Oak Kitchen with Integrated Gaggenau 400',
        'Backlit Exotic Patagonia Quartzite Bar & Wine Cellar',
        'Architectural Fluted Timber Paneling & Concealed Pivot Doors'
      ];
      customTitle = `${types[i % types.length]} (${location.split(',')[0]})`;
    } else if (disc.id === 'landscape-pool-outdoor') {
      const types = [
        'Heated Glass-Edge Infinity Pool with Sunken Fire Pit',
        'Bioclimatic Motorized Pergola with Misting & Outdoor Kitchen',
        'Mediterranean Olive Grove & Japanese Zen Water Garden',
        'Private Championship Padel Court & Pool Pavilion',
        'Cantilevered Sunset Deck with Arabian Gulf Vistas'
      ];
      customTitle = `${types[i % types.length]} — ${location.split(',')[0]}`;
    } else {
      const types = [
        'Full-Residence KNX Smart Automation & Lutron Palladiom System',
        'Dolby Atmos 9.4.6 Private Acoustic Cinema & Laser Projection',
        'Biometric Facial Recognition & Thermal Perimeter Shield',
        'Circadian Lighting & Smart Climate Energy Management Grid',
        'Audiophile High-Fidelity Multi-Room Fiber Audio Architecture'
      ];
      customTitle = `${types[i % types.length]} (${location.split(',')[0]})`;
    }

    const priceAED = Math.round(disc.basePriceAED + (buaSqFt * disc.pricePerSqFtAED * 0.45));
    const originalPriceAED = Math.round(priceAED * 1.18);

    catalog.push({
      id,
      title: customTitle,
      slug: `${disc.id}-${id.toLowerCase()}`,
      categoryId: disc.id,
      categoryName: disc.categoryName,
      location,
      buaSqFt,
      scopeType: disc.scopeType,
      materials: disc.materials,
      timelineMonths: disc.typicalTimeline,
      priceAED,
      originalPriceAED,
      pricePerSqFtAED: Math.round(priceAED / buaSqFt),
      heroImage: IMAGES[imgIndex],
      description: `Engineered by Dubai Municipality certified chartered engineers and master Italian craftsmen. Includes full structural execution, MEP engineering, statutory Dubai Municipality permits, and turnkey handover.`,
      deliverables: [
        `Complete architectural schematics & 3D photorealistic BIM modeling`,
        `Turnkey structural, MEP, and interior joinery execution`,
        `100% Dubai Municipality, Civil Defense & DEWA permit clearances`,
        `Dedicated UAE Senior Chartered Project Director on-site daily`,
        `10-Year Structural Defect Warranty & 2-Year Complimentary Maintenance`
      ],
      authorityPermits: ['Dubai Municipality', 'Dubai Civil Defense (DCD)', 'DEWA', 'DDA / Trakhees'],
      warrantyNotice: '10-Year Structural Integrity Warranty • 100% Transparent Bill of Quantities (BOQ)'
    });

    idCounter++;
  }
});

const fileContent = `// Auto-generated 160+ Enterprise Contracting & Turnkey Interior Scopes for VERTEX CONTRACTING UAE
export interface ConstructionScope {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  categoryName: string;
  location: string;
  buaSqFt: number;
  scopeType: string;
  materials: string[];
  timelineMonths: string;
  priceAED: number;
  originalPriceAED?: number;
  pricePerSqFtAED: number;
  heroImage: string;
  description: string;
  deliverables: string[];
  authorityPermits: string[];
  warrantyNotice: string;
}

export const CONSTRUCTION_SCOPES_CATALOG: ConstructionScope[] = ${JSON.stringify(catalog, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/constructionCatalogData.ts'), fileContent, 'utf8');
console.log(`Successfully generated ${catalog.length} construction scopes in src/data/constructionCatalogData.ts!`);
