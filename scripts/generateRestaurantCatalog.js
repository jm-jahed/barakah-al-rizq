const fs = require('fs');
const path = require('path');

const CATEGORIES = [
  { id: 'royal-emirati-heritage', name: 'Royal Emirati & Khaleeji Haute Cuisine', subtitle: 'Saffron Machboos, 18-Hour Slow Camel Shank, Saffron Harees & Gold Dust Luqaimat' },
  { id: 'french-haute-gastronomy', name: 'French Haute Gastronomy & Truffle Atelier', subtitle: 'Foie Gras Torchon, Périgord Black Truffle Velouté & Duck Confit de Canard' },
  { id: 'japanese-omakase-wagyu', name: 'Japanese Omakase & Robatayaki Grill', subtitle: 'A5 Kagoshima Ribeye, Bluefin Otoro Flight, Uni Nigiri & King Crab Robata' },
  { id: 'mediterranean-seafood', name: 'Mediterranean Coastal & Shellfish Bar', subtitle: 'Oman Wild Rock Lobster Thermidor, Turbot en Papillote & Carabinero Prawns' },
  { id: 'caviar-beluga-flights', name: 'Royal Imperial Caviar & Beluga Service', subtitle: 'Imperial Beluga 50g, Oscietra Royal Flight & Kaluga Queen with Buckwheat Blinis' },
  { id: 'dry-aged-prime-cuts', name: '45-Day Dry-Aged Steaks & 24K Gold Cuts', subtitle: '24K Gold Tomahawk 1.2kg, Japanese Olive Wagyu & USDA Prime Porterhouse' },
  { id: 'haute-pastry-cafe', name: 'Artisanal Pastry, Haute Desserts & 24K Gold Café', subtitle: 'Pistachio Paris-Brest, Damascus Rose Pavlova & 24K Saffron Gold Dust Brews' },
  { id: 'private-dining-majlis', name: 'Private Salons, Royal Majlis & Chef Table', subtitle: '12-Course Multi-Sensory Symphony, DIFC Private Majlis & Sky Terrace Banquets' }
];

const DISH_BASE_NAMES = [
  'The Royal Imperial Saffron & Cardamom Braised Camel Loin with 24K Gold Leaves',
  'The Périgord Black Winter Truffle & Pan-Seared Duck Liver Rossini',
  'The A5 Kagoshima Wagyu Tenderloin with Smoked Miso & Binchotan Char',
  'The Wild Oman Rock Lobster Thermidor with Gruyère & Dijonnaise Glaze',
  'The Royal Imperial Beluga Caviar Tasting Flight (50g) with Traditional Accoutrements',
  'The 45-Day Himalayan Salt Dry-Aged Tomahawk 1.2kg with Bone Marrow Jus',
  'The Bluefin Tuna Flight: Akami, Chutoro & Otoro with Fresh Shizuoka Wasabi',
  'The Royal Harees with Slow-Cooked Milk-Fed Veal & Clarified Camel Ghee',
  'The Wild Mediterranean Turbot Roasted on the Bone with Capers & Brown Butter',
  'The Brittany Diver Scallops with Cauliflower Velouté & Oscietra Caviar',
  'The 24K Pure Gold Leaf Ribeye Steak (350g) with Black Truffle Butter',
  'The Wood-Fired King Crab Legs with Yuzu Kosho Butter & Shiso',
  'The Signature 12-Course Chef Table Gastronomic Symphony with Pairings',
  'The Damascus Rose & Raspberry Meringue Pavlova with Pistachio Chantilly',
  'The Valrhona 72% Dark Chocolate Sphere with Warm Salted Caramel Pour',
  'The Artisanal 24K Gold Saffron Cappuccino & Royal Medjool Date Selection',
  'The Slow-Smoked Australian Wagyu Brisket Machboos with Loomi Essence',
  'The Japanese Hokkaido Sea Urchin (Uni) & Tartare of A5 Wagyu with Brioche',
  'The Mediterranean Carabinero Red Prawns Carpaccio with Citrus Oil & Sea Salt',
  'The Royal Majlis 8-Course Private Banquet for VIP Dignitaries & Families'
];

const EXECUTIVE_CHEFS = [
  { name: 'Chef Tariq Al-Mansoor', title: 'Executive Culinary Director — Royal Emirati Heritage', accolades: 'Michelin Star Mentor & Dubai Golden Fork Laureate' },
  { name: 'Chef Jean-Luc Mercier', title: 'Master Chef de Cuisine — Haute French Gastronomy', accolades: 'Former 3-Star Michelin Sous Chef, Paris & Monaco' },
  { name: 'Chef Kenji Takahashi', title: 'Omakase Grand Master & Wagyu Sommelier', accolades: '20+ Yrs Ginza Tokyo & Dubai DIFC' },
  { name: 'Chef Matteo Bertolini', title: 'Executive Seafood & Mediterranean Master', accolades: 'Gambero Rosso Top Italian Chef Dubai' }
];

const UNSPLASH_IMAGES = [
  'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80', // steak
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80', // restaurant interior
  'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80', // fine dining dish
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80', // table banquet
  'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80', // dessert / pastry
  'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80', // fresh salad/starter
  'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80', // sushi / omakase
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80', // luxury dining room
  'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80', // caviar / luxury plate
  'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80', // sommelier pairing
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80', // seafood lobster
  'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80', // chef plating
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80', // healthy bowl
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80', // pizza / gourmet
  'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80', // pancake / pastry
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80'  // barbecue grill
];

const ORIGINS = [
  'Kagoshima Prefecture, Japan',
  'Périgord & Brittany, France',
  'Caspian Sea Basin (Sustainable Certified)',
  'Arabian Gulf & Fujairah Coast, UAE',
  'San Sebastián & Galicia, Spain',
  'Black Forest & Piedmont, Italy',
  'Ras Al Khaimah Heritage Farms, UAE',
  'Hokkaido Cold Waters, Japan'
];

const ALLERGEN_OPTIONS = [
  ['Dairy', 'Gluten Free'],
  ['Halal Certified', 'Nut Free'],
  ['Halal Certified', 'Contains Shellfish'],
  ['Halal Certified', 'Organic Ingredients'],
  ['Halal Certified', 'Vegetarian Option'],
  ['Halal Certified', 'Chef Gold Signature']
];

const items = [];
let idCounter = 1;

// 20 items per category = 160 items
CATEGORIES.forEach((cat, catIdx) => {
  for (let i = 0; i < 20; i++) {
    const dishId = `AS-${String(idCounter).padStart(3, '0')}`;
    const baseTitle = DISH_BASE_NAMES[i % DISH_BASE_NAMES.length];
    const chef = EXECUTIVE_CHEFS[(catIdx + i) % EXECUTIVE_CHEFS.length];
    const origin = ORIGINS[(catIdx + i) % ORIGINS.length];
    const allergens = ALLERGEN_OPTIONS[(catIdx + i) % ALLERGEN_OPTIONS.length];
    
    const imgIndex1 = (catIdx * 2 + i) % UNSPLASH_IMAGES.length;
    const imgIndex2 = (imgIndex1 + 4) % UNSPLASH_IMAGES.length;
    const imgIndex3 = (imgIndex1 + 7) % UNSPLASH_IMAGES.length;

    let basePrice = 95;
    if (cat.id.includes('caviar')) basePrice = 280 + (i * 12);
    else if (cat.id.includes('wagyu') || cat.id.includes('omakase')) basePrice = 165 + (i * 9);
    else if (cat.id.includes('dry-aged')) basePrice = 145 + (i * 8);
    else if (cat.id.includes('private-dining')) basePrice = 450 + (i * 35);
    else if (cat.id.includes('seafood')) basePrice = 115 + (i * 6);
    else if (cat.id.includes('pastry')) basePrice = 35 + (i * 2.5);
    else if (cat.id.includes('french')) basePrice = 95 + (i * 5);
    else basePrice = 85 + (i * 4);

    const priceAED = Math.round(basePrice / 5) * 5;
    const calories = 320 + ((i * 45) % 650);
    const prepMins = 20 + ((i * 5) % 40);

    items.push({
      id: dishId,
      title: `${baseTitle} — Series ${String.fromCharCode(65 + (i % 6))}`,
      slug: `${cat.id}-${dishId.toLowerCase()}`,
      categoryId: cat.id,
      categoryName: cat.name,
      originRegion: origin,
      priceAED: priceAED,
      originalPriceAED: Math.random() > 0.65 ? Math.round((priceAED * 1.18) / 10) * 10 : undefined,
      caloriesKcal: calories,
      preparationMinutes: prepMins,
      servesPersons: cat.id.includes('private-dining') ? (i % 2 === 0 ? 8 : 12) : (cat.id.includes('dry-aged') && i % 3 === 0 ? 2 : 1),
      executiveChef: chef,
      dietaryTags: allergens,
      isSignature: i % 3 === 0 || cat.id.includes('caviar') || cat.id.includes('private-dining'),
      isPreOrderOnly: cat.id.includes('private-dining') || (cat.id.includes('dry-aged') && i % 4 === 0),
      sommelierPairing: i % 2 === 0 ? 'Sparkling French Vintage Date Nectar & Elderflower Infusion' : 'Smoked Omani Frankincense Mocktail with Bergamot Mist',
      rating: +(4.9 + ((idCounter * 0.01) % 0.1)).toFixed(1),
      reviewsCount: 42 + (idCounter * 5),
      heroImage: UNSPLASH_IMAGES[imgIndex1],
      gallery: [
        UNSPLASH_IMAGES[imgIndex1],
        UNSPLASH_IMAGES[imgIndex2],
        UNSPLASH_IMAGES[imgIndex3]
      ],
      flavorProfile: 'Rich, Umami-Intense, Aromatic Spiced notes with Smoked Cedar & Velvet Finish',
      shortDescription: `An exceptional culinary creation at AL SULTAN CUISINE, Downtown Dubai. Artfully curated using ${origin} prime provisions and prepared under the supervision of ${chef.name}.`,
      tastingNotes: [
        `First Impression: Immediate fragrance of rare saffron, fresh truffles, and caramelized aromatics.`,
        `Mid-Palate: Silky velvet mouthfeel with exquisite depth of flavor, balanced salinity, and rich umami resonance.`,
        `Finish: Long lingering finish accented with delicate citrus blossom and subtle wood smoke.`
      ],
      ingredients: [
        'Ethically sourced grade-A seasonal provisions',
        'Pure Iranian Negin saffron threads',
        'Clarified grass-fed butter & cold-pressed virgin olive oil',
        '24-Karat edible gold leaf flakes (Florence certified)',
        'Maldon smoked sea salt crystals & wild mountain thyme'
      ],
      tableServiceProtocol: [
        'Served on bespoke Rosenthal bone china with hand-hammered Christofle silverware',
        'Tableside presentation with dry-ice botanical smoke or custom torching',
        'Sommelier guidance on aroma progression and palate cleansing'
      ]
    });

    idCounter++;
  }
});

const fileContent = `export interface RestaurantDish {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  categoryName: string;
  originRegion: string;
  priceAED: number;
  originalPriceAED?: number;
  caloriesKcal: number;
  preparationMinutes: number;
  servesPersons: number;
  executiveChef: {
    name: string;
    title: string;
    accolades: string;
  };
  dietaryTags: string[];
  isSignature: boolean;
  isPreOrderOnly: boolean;
  sommelierPairing: string;
  rating: number;
  reviewsCount: number;
  heroImage: string;
  gallery: string[];
  flavorProfile: string;
  shortDescription: string;
  tastingNotes: string[];
  ingredients: string[];
  tableServiceProtocol: string[];
}

export const RESTAURANT_CATALOG: RestaurantDish[] = ${JSON.stringify(items, null, 2)};
`;

const outputPath = path.join(__dirname, '../src/data/restaurantCatalogData.ts');
fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully generated ${items.length} restaurant dishes to ${outputPath}`);
