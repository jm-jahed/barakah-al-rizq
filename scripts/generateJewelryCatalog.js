const fs = require('fs');
const path = require('path');

const DISCIPLINES = [
  {
    id: 'solitaire-bridal-suite',
    name: 'High Solitaire & Imperial Bridal Rings',
    material: '18K Yellow Gold',
    gemstone: 'Diamond',
    priceBase: 12500,
    priceRange: 45000,
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop'
    ],
    prefixes: [
      'Aurelia Royal Solitaire', 'Sovereign Radiant Halo Ring', 'Elysian Pear-Cut Diamond Suite',
      'Constellation Oval Pavé Band', 'DIFC Empress Diamond Crown', 'L’Éternité Emerald-Cut Solitaire',
      'Palm Grandeur Platinum Ring', 'Mirage Cushion-Cut Diamond Solitaire', 'Céleste Cushion Tri-Stone Ring',
      'Opus Marquise Diamond Symphony'
    ]
  },
  {
    id: 'haute-collier-necklaces',
    name: 'Haute Joaillerie Diamond Colliers & Pendants',
    material: '18K White Gold',
    gemstone: 'Diamond',
    priceBase: 18000,
    priceRange: 95000,
    images: [
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611591475879-1c99131a9dc9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=1200&auto=format&fit=crop'
    ],
    prefixes: [
      'Cascade Rivière Diamond Collier', 'Astris Celestial Chandelier Pendant', 'Imperial Saffron Gold Torc',
      'Aura Floating Solitaire Choker', 'Palais Royal Graduated Diamond Line', 'Étoile Brilliant Lariat Necklace',
      'Dauphine Marquise Diamond Collar', 'Nocturne Multi-Strand Diamond Drop', 'Sovereign Mirage Diamond Mesh',
      'Symphonie D’Or Diamond Fringe'
    ]
  },
  {
    id: 'colombian-emeralds-rubies',
    name: 'Rare Colored Gems: Muzo Emeralds & Burmese Rubies',
    material: '18K Yellow Gold',
    gemstone: 'Emerald',
    priceBase: 24000,
    priceRange: 140000,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=1200&auto=format&fit=crop'
    ],
    prefixes: [
      'Muzo Imperial Emerald Cocktail Ring', 'Pigeon Blood Burmese Ruby Suite', 'Royal Kashmir Sapphire Pendant',
      'Verdant Oasis Emerald Drop Earrings', 'Crimson Sovereign Ruby Eternity Band', 'Ceylon Azure Sapphire Chandelier',
      'Sultana Colombian Emerald Cuff', 'Flamme Éternelle Ruby Choker', 'Arcadia Emerald Cut-Corner Ring',
      'Majestic Star Sapphire Sovereign Ring'
    ]
  },
  {
    id: 'diamond-tennis-bracelets',
    name: 'Tennis Bracelets & Sculptural Gold Cuffs',
    material: '18K Rose Gold',
    gemstone: 'Diamond',
    priceBase: 14000,
    priceRange: 65000,
    images: [
      'https://images.unsplash.com/photo-1611591475879-1c99131a9dc9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop'
    ],
    prefixes: [
      'Sovereign 10-Carat Diamond Tennis Line', 'Luxe Dubai Twisted Gold Bangle', 'Pavé Silhouette Hinged Cuff',
      'D’Or Geometric Fluted Armlet', 'Radiant Double-Row Diamond Line', 'Marina Wave Diamond Bangle',
      'Empress Gold Mesh Link Bracelet', 'Bespoke Bezel-Set Tennis Bracelet', 'Sleek Baguette Diamond Bar Cuff',
      'Royal Majlis Braided 18K Chain'
    ]
  },
  {
    id: 'grand-complication-timepieces',
    name: 'High Complication Watches & Diamond Bezels',
    material: 'Platinum',
    gemstone: 'Diamond',
    priceBase: 48000,
    priceRange: 280000,
    images: [
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1547996160-71dfabbce5fa?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop'
    ],
    prefixes: [
      'Tourbillon Céleste Skeleton 42mm', 'Chrono-Regulateur Baguette Diamond Edition', 'Perpetual Calendar Moonphase Platinum',
      'Atelier陀飞轮 Flying Tourbillon Rose Gold', 'Chronographe Monopusher Diamond Dial', 'Sovereign Minute Repeater 18K',
      'DIFC Executive Double-Axis Tourbillon', 'Astronomique Star-Map High Complication', 'Nautique Offshore Diamond Masterpiece',
      'Chronos Skeleton Diamond-Pavé Bezel'
    ]
  },
  {
    id: 'statement-chandelier-earrings',
    name: 'Diamond Chandelier & Cascade Drop Earrings',
    material: '18K White Gold',
    gemstone: 'Diamond',
    priceBase: 9500,
    priceRange: 42000,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1200&auto=format&fit=crop'
    ],
    prefixes: [
      'Cascading Pear Diamond Drops', 'Art Deco Baguette Chandelier Earrings', 'Aura Floating Diamond Huggies',
      'Palais Vendôme Diamond Tassel Drops', 'L’Aurore Sunburst Cluster Studs', 'Flèche D’Or Diamond Ear Jackets',
      'Elysian Triple-Drop Emerald Earrings', 'Starlight Diamond Crawler Earrings', 'Opéra Garnier Chandelier Studs',
      'Sovereign Solitaire Diamond Studs 2.0ct'
    ]
  },
  {
    id: 'arabian-gulf-natural-pearls',
    name: 'Arabian Gulf Basra & South Sea Natural Pearls',
    material: '18K Yellow Gold',
    gemstone: 'Pearl',
    priceBase: 8500,
    priceRange: 55000,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611591475879-1c99131a9dc9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop'
    ],
    prefixes: [
      'Royal Basra Natural Pearl Choker', 'Golden South Sea Pearl Diamond Ring', 'Tahitian Peacock Pearl Pendant',
      'Arabian Heritage Pearl Rope 36-inch', 'Keshi Pearl Floating Diamond Earrings', 'Baroque Pearl Sculptural Gold Brooch',
      'Gulf Pearl & Diamond Tiara Motif', 'Lustre D’Orient Pearl Cufflinks', 'Celestial Pearl & Diamond Torc',
      'Empress Basra Triple-Strand Collier'
    ]
  },
  {
    id: 'bespoke-sovereign-masterpieces',
    name: 'Bespoke Imperial Parures & High Jewels',
    material: 'Platinum',
    gemstone: 'Diamond',
    priceBase: 65000,
    priceRange: 320000,
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop'
    ],
    prefixes: [
      'The Sovereign Palm Imperial Parure', 'Desert Sun 25-Carat Yellow Diamond Ring', 'Crown of Dubai Diamond Diadem',
      'Heritage Al-Qasr Emerald & Diamond Suite', 'The Burj High-Jewelry Diamond Collar', 'Orchid D’Or Platinum & Pink Diamond Cuff',
      'Le Grand Saphir Royal Parure', 'Celestial Cosmos 15-Carat Diamond Solitaire', 'Sovereign Dynasty Ruby & Diamond Tiara',
      'The Dubai Gate Imperial Diamond Masterpiece'
    ]
  }
];

const catalog = [];
let counter = 1;

DISCIPLINES.forEach((disc) => {
  for (let i = 0; i < 20; i++) {
    const id = `MAISON-${String(counter).padStart(3, '0')}`;
    const basePrefix = disc.prefixes[i % disc.prefixes.length];
    const variationNum = Math.floor(i / disc.prefixes.length) + 1;
    const title = variationNum > 1 ? `${basePrefix} — Edition ${variationNum}` : `${basePrefix} — No. ${counter}`;
    
    const priceAED = Math.round((disc.priceBase + (i * (disc.priceRange / 20))) / 100) * 100;
    const heroImage = disc.images[i % disc.images.length];
    const gallery = [
      heroImage,
      disc.images[(i + 1) % disc.images.length],
      disc.images[(i + 2) % disc.images.length]
    ];

    const carats = (0.75 + (i * 0.35)).toFixed(2) + ' ct';
    const weightGrams = (3.5 + (i * 0.8)).toFixed(1) + 'g';
    const certLab = (i % 3 === 0) ? 'GIA Origin Dossier' : (i % 3 === 1) ? 'HRD Antwerp Certified' : 'Gübelin Gem Lab Report';

    catalog.push({
      id,
      name: title,
      title: title,
      subtitle: `${disc.name} • ${disc.material}`,
      disciplineId: disc.id,
      disciplineName: disc.name,
      category: disc.id.includes('ring') ? 'Rings' : disc.id.includes('necklace') ? 'Necklaces' : disc.id.includes('timepieces') ? 'Watches' : disc.id.includes('earrings') ? 'Earrings' : disc.id.includes('bracelets') ? 'Bracelets' : 'High Jewelry',
      priceAED,
      originalPriceAED: Math.round(priceAED * 1.15),
      material: disc.material,
      gemstone: disc.gemstone,
      caratWeight: carats,
      certificationLab: certLab,
      dimensions: `Diameter: ${(14 + (i % 8))}mm • Profile: ${(2.2 + (i % 4) * 0.4).toFixed(1)}mm`,
      weightGrams,
      availableSizes: ['US 5', 'US 6', 'US 7', 'US 8', 'US 9', 'Custom UAE Quarter-Size'],
      inStock: true,
      isBestseller: i % 4 === 0,
      isNewArrival: i % 5 === 0,
      isSignature: i % 3 === 0,
      isVaultExclusive: priceAED > 80000,
      heroImage,
      images: gallery,
      gallery,
      boutiqueZone: (i % 2 === 0) ? 'DIFC Gate Village Salon' : 'Dubai Mall Fashion Avenue VIP Suite',
      description: `An exquisite sovereign piece from Maison D’Or Dubai, sculpted in solid ${disc.material} and set with natural ${disc.gemstone.toLowerCase()}s accompanied by a certified ${certLab}. Delivered across the UAE via armored courier.`,
      craftsmanship: `Hand-forged over ${(45 + i * 5)} hours by master goldsmiths and certified gem setters in Dubai. Every prong is microscopically calibrated for light dispersion.`,
      careInstructions: 'Avoid contact with harsh perfumes and chemicals. Store in Maison D’Or velvet cedarwood case. Complimentary lifetime ultrasonic cleaning at our DIFC salon.',
      shippingInfo: 'Armored VIP courier delivery within 24 hours across Dubai & Abu Dhabi. Accompanied by white-glove security guard and GIA origin dossier.'
    });

    counter++;
  }
});

const fileContent = `export interface JewelryItem {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  disciplineId: string;
  disciplineName: string;
  category: string;
  priceAED: number;
  originalPriceAED?: number;
  material: string;
  gemstone: string;
  caratWeight: string;
  certificationLab: string;
  dimensions: string;
  weightGrams: string;
  availableSizes: string[];
  inStock: boolean;
  isBestseller?: boolean;
  isNewArrival?: boolean;
  isSignature?: boolean;
  isVaultExclusive?: boolean;
  heroImage: string;
  images: string[];
  gallery: string[];
  boutiqueZone: string;
  description: string;
  craftsmanship: string;
  careInstructions: string;
  shippingInfo: string;
}

export const JEWELRY_CATALOG: JewelryItem[] = ${JSON.stringify(catalog, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/jewelryCatalogData.ts'), fileContent);
console.log(`Generated ${catalog.length} high jewelry pieces!`);
