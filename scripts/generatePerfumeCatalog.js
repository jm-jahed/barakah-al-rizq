const fs = require('fs');
const path = require('path');

const CATEGORIES = [
  { id: 'royal-aged-oud', name: 'Royal Aged Dehn Al Oud & Pure Oils', subtitle: '30-Year Kalakassi, Vintage Hindi & Wild Cambodian Agarwood Extraits' },
  { id: 'french-oriental-extrait', name: 'French Oriental Extraits de Parfum', subtitle: 'Grasse Centifolia Rose, Ambergris & 40% Haute Concentration Blends' },
  { id: 'taif-damascus-rose', name: 'Taif Mountain Rose & Saffron Attars', subtitle: 'First-Harvest Taif Petals, Kashmiri Saffron & Golden Amber Attars' },
  { id: 'smoky-leather-frankincense', name: 'Royal Hojari Frankincense & Tuscan Leather', subtitle: 'Omani Green Hojari, Birch Tar, Italian Suede & Smoked Labdanum' },
  { id: 'gourmand-amber-vanilla', name: 'Madagascar Bourbon Vanilla & Warm Ambers', subtitle: 'Spiced Cardamom Pods, Tonka Bean, Benzoin & Velvet Cashmere' },
  { id: 'woody-sandalwood-cedar', name: 'Mysore Sandalwood & Atlas Mountain Cedar', subtitle: 'Sustainable Indian Mysore, Virginian Cedar & White Musk Silk' },
  { id: 'royal-bakhoor-incense', name: 'Royal Agarwood Muattar & Saffron Bakhoor', subtitle: 'Triple-A Grade Wild Chips, Crystal Burners & Majlis Aromatics' },
  { id: 'bespoke-flacon-coffrets', name: '24K Gold Inlaid Flacons & Master Coffrets', subtitle: 'Hand-Blown Bohemian Crystal, Personalized Engravings & Master Sets' }
];

const PERFUME_BASE_TITLES = [
  'Oud Al-Sultan 30-Year Vintage Kalakassi Extrait',
  'Rose Impériale de Grasse & Saffron Velvet',
  'Ambre Royal de la Reine 40% Haute Extrait',
  'Hojari Noir Smoked Frankincense & Cuir',
  'Dehn Al Oud Hindi Qadeem Pure Tola',
  'Santal Blanc de Mysore & Silk Cashmere',
  'Vanille Bourbon Royale & Tonka Absolue',
  'Taif Bloom & Golden Kashmiri Saffron Attar',
  'Cuir Saharien Smoked Leather & Ambergris',
  'Bakhoor Al-Majlis Royal Wild Agarwood Muattar',
  'Nuit d’Arabie 24K Gold Infused Extrait Flacon',
  'Fleur de Tabac & Smoked Cedarwood',
  'Cambodian Wild Agarwood Oil 1994 Harvest',
  'Musk Al-Ghazal Royal Black Ambergris Elixir',
  'Damascus Rose Water & White Oud Mist',
  'Leathery Oud & Bergamot Twilight Extrait',
  'Prestige Crystal Coffret 4-Piece Master Discovery',
  'Smoky Birch Tar & Royal Frankincense Tears',
  'Soleil d’Orient Cardamom & Saffron Breeze',
  'Imperial Sovereign 24K Hand-Blown Crystal Decanter 100ml'
];

const MASTER_PERFUMERS = [
  { name: 'Antoine Maisondieu', title: 'Master Parfumeur — Grasse & Paris', accolades: 'Prix François Coty Laureate' },
  { name: 'Nasser Al-Ghamdi', title: 'Grand Master Attar Alchemist — Taif & Dubai', accolades: '4th Generation Gulf Distiller' },
  { name: 'Dominique Ropion', title: 'Grand Master of Modern Oriental Extraits', accolades: 'Chevalier de l’Ordre des Arts et des Lettres' },
  { name: 'Aurelien Guichard', title: 'Founder & 7th-Generation Grasse Perfumer', accolades: 'World Perfumery Congress Keynote Master' }
];

const UNSPLASH_IMAGES = [
  'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1592945403407-9cf43f3db39c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1594913785162-e678a0c23ccb?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?auto=format&fit=crop&w=1200&q=80'
];

const SCENT_PROFILES = [
  'Rich, Dark Resin, Smoked Leather, Saffron & 30-Year Agarwood',
  'Velvety Crimson Rose, Golden Amber, Creamy Vanilla & Cashmeran',
  'Smoky Omani Frankincense, Birch Bark, Cistus Labdanum & Spices',
  'Warm Spiced Cardamom, Roasted Tonka, Madagascar Vanilla & Benzoin',
  'Creamy Mysore Sandalwood, Orris Butter, White Cedar & Clean Musks',
  'Aromatic Green Citrus, Bergamot, Pink Peppercorn & Ambergris'
];

const items = [];
let idCounter = 1;

// 20 items per category = 160 items
CATEGORIES.forEach((cat, catIdx) => {
  for (let i = 0; i < 20; i++) {
    const pId = `OR-${String(idCounter).padStart(3, '0')}`;
    const baseTitle = PERFUME_BASE_TITLES[i % PERFUME_BASE_TITLES.length];
    const perfumer = MASTER_PERFUMERS[(catIdx + i) % MASTER_PERFUMERS.length];
    const profile = SCENT_PROFILES[(catIdx + i) % SCENT_PROFILES.length];
    
    const imgIndex1 = (catIdx * 2 + i) % UNSPLASH_IMAGES.length;
    const imgIndex2 = (imgIndex1 + 3) % UNSPLASH_IMAGES.length;
    const imgIndex3 = (imgIndex1 + 6) % UNSPLASH_IMAGES.length;

    let basePrice = 650;
    if (cat.id.includes('aged-oud')) basePrice = 2800 + (i * 240);
    else if (cat.id.includes('coffrets')) basePrice = 4500 + (i * 350);
    else if (cat.id.includes('french-oriental')) basePrice = 1450 + (i * 90);
    else if (cat.id.includes('bakhoor')) basePrice = 750 + (i * 60);
    else if (cat.id.includes('taif')) basePrice = 1200 + (i * 80);
    else basePrice = 850 + (i * 65);

    const priceAED = Math.round(basePrice / 25) * 25;
    const concentration = cat.id.includes('aged-oud') ? '100% Pure Distilled Oil (Tola)' : (cat.id.includes('coffrets') ? 'High-Concentration Extrait (42%)' : (cat.id.includes('bakhoor') ? 'A-Grade Muattar Chips' : 'Extrait de Parfum (35%)'));
    const bottleVolume = cat.id.includes('aged-oud') ? '12ml Pure Tola' : (cat.id.includes('bakhoor') ? '100g Crystal Jar' : (cat.id.includes('coffrets') ? '4 x 30ml Coffret' : (i % 2 === 0 ? '100ml Flacon' : '50ml Flacon')));
    const longevityHours = 14 + ((i * 3) % 30);
    const sillage = i % 3 === 0 ? 'Monumental / Nuclear' : (i % 2 === 0 ? 'Enveloping & Heavy' : 'Sophisticated & Intimate');

    items.push({
      id: pId,
      title: `${baseTitle} — Edition ${String.fromCharCode(65 + (i % 8))}`,
      slug: `${cat.id}-${pId.toLowerCase()}`,
      categoryId: cat.id,
      categoryName: cat.name,
      priceAED: priceAED,
      originalPriceAED: Math.random() > 0.65 ? Math.round((priceAED * 1.2) / 25) * 25 : undefined,
      bottleVolume: bottleVolume,
      concentration: concentration,
      longevityHours: longevityHours,
      sillage: sillage,
      masterPerfumer: perfumer,
      rating: +(4.9 + ((idCounter * 0.01) % 0.1)).toFixed(1),
      reviewsCount: 38 + (idCounter * 6),
      isBestseller: i % 4 === 0,
      isLimitedEdition: cat.id.includes('coffrets') || cat.id.includes('aged-oud') || i % 3 === 0,
      isComplimentaryEngraving: true,
      heroImage: UNSPLASH_IMAGES[imgIndex1],
      gallery: [
        UNSPLASH_IMAGES[imgIndex1],
        UNSPLASH_IMAGES[imgIndex2],
        UNSPLASH_IMAGES[imgIndex3]
      ],
      scentFamily: cat.name.split('&')[0].trim(),
      scentProfile: profile,
      shortDescription: `A masterwork of sovereign perfumery distilled for royal collectors. Created with rare sustainable botanicals and formulated in Grasse and Dubai under the direction of ${perfumer.name}.`,
      pyramid: {
        topNotes: ['Bergamot Reggio', 'Saffron Threads', 'Pink Peppercorn', 'Cardamom Pods'],
        heartNotes: ['Taif Centifolia Rose', 'Smoked Frankincense Tears', 'Cistus Labdanum', 'Orris Butter'],
        baseNotes: ['30-Year Kalakassi Oud', 'Ambergris Tincture', 'Mysore Sandalwood', 'Madagascar Bourbon Vanilla']
      },
      layeringRecommendation: 'Pair with Royal Saffron Attar or Smoked Hojari Frankincense for unmatched depth and majestic sillage.',
      packagingSpecs: [
        'Hand-blown heavy Bohemian crystal flacon with 24-Karat gold-plated magnetic zamak cap',
        'Signature silk-lined wooden presentation box with gold foil stamping',
        'Custom calligraphy brass nameplate with optional complimentary engraving'
      ]
    });

    idCounter++;
  }
});

const fileContent = `export interface PerfumeItem {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  categoryName: string;
  priceAED: number;
  originalPriceAED?: number;
  bottleVolume: string;
  concentration: string;
  longevityHours: number;
  sillage: string;
  masterPerfumer: {
    name: string;
    title: string;
    accolades: string;
  };
  rating: number;
  reviewsCount: number;
  isBestseller: boolean;
  isLimitedEdition: boolean;
  isComplimentaryEngraving: boolean;
  heroImage: string;
  gallery: string[];
  scentFamily: string;
  scentProfile: string;
  shortDescription: string;
  pyramid: {
    topNotes: string[];
    heartNotes: string[];
    baseNotes: string[];
  };
  layeringRecommendation: string;
  packagingSpecs: string[];
}

export const PERFUME_CATALOG: PerfumeItem[] = ${JSON.stringify(items, null, 2)};
`;

const outputPath = path.join(__dirname, '../src/data/perfumeCatalogData.ts');
fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully generated ${items.length} perfume items to ${outputPath}`);
