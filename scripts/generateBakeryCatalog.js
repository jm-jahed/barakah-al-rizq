const fs = require('fs');
const path = require('path');

const CATEGORIES = [
  {
    id: 'grand-celebration-cakes',
    name: 'Grand Celebration Cakes',
    tagline: 'Multi-Tiered Architectural Masterpieces & Gold Leaf Works',
    basePrice: 650,
    priceSpan: 1200,
    prepTime: '24-48h Advance Order',
    dietaryOptions: ['Vegetarian', 'Halal', 'Chef Special']
  },
  {
    id: 'royal-wedding-parures',
    name: 'Royal Wedding & Pavilion Cakes',
    tagline: 'Hand-Piped Sugar Lace, Basra Pearls & Edible 24K Leaf',
    basePrice: 1800,
    priceSpan: 4200,
    prepTime: '72h Advance Order',
    dietaryOptions: ['Halal', 'Chef Special', 'Nut-Free']
  },
  {
    id: 'parisian-haute-entremets',
    name: 'Parisian Haute Entremets',
    tagline: 'Mirror-Glazed Valrhona Mousse & Exotic Fruit Compotes',
    basePrice: 280,
    priceSpan: 450,
    prepTime: 'Same Day (4 Hours)',
    dietaryOptions: ['Halal', 'Egg-Free', 'Chef Special']
  },
  {
    id: 'artisanal-viennoiserie',
    name: 'Artisanal Viennoiserie & Cruffins',
    tagline: '48-Hour Fermented Normandy Butter & Pistachio Frangipane',
    basePrice: 85,
    priceSpan: 180,
    prepTime: 'Freshly Baked Daily at 6 AM',
    dietaryOptions: ['Halal', 'Vegetarian']
  },
  {
    id: 'exclusive-macaron-coffrets',
    name: 'Sovereign Macaron Coffrets',
    tagline: 'Infused with Taif Rose, Iranian Saffron & Madagascar Vanilla',
    basePrice: 195,
    priceSpan: 550,
    prepTime: 'Ready for Immediate Dispatch',
    dietaryOptions: ['Gluten-Free', 'Halal', 'Chef Special']
  },
  {
    id: 'signature-tartes-fines',
    name: 'Signature Tartes & Mille-Feuilles',
    tagline: 'Caramelized Arlette Puff Pastry & Tahitian Bean Diplomat',
    basePrice: 220,
    priceSpan: 380,
    prepTime: 'Same Day (3 Hours)',
    dietaryOptions: ['Vegetarian', 'Halal']
  },
  {
    id: 'dubai-majlis-dessert-towers',
    name: 'Majlis Dessert Towers & Hampers',
    tagline: 'Medjool Date Financiers, Cardamom Truffles & Amber Ganache',
    basePrice: 850,
    priceSpan: 2400,
    prepTime: '24h Advance Order',
    dietaryOptions: ['Halal', 'Chef Special', 'Nut-Free']
  },
  {
    id: 'bespoke-fondant-sculptures',
    name: 'Bespoke Haute Couture Sculptures',
    tagline: 'Architectural Gravity-Defying Sculptures Handcrafted for Dubai VIPs',
    basePrice: 2200,
    priceSpan: 5800,
    prepTime: '5 Days Advance Order',
    dietaryOptions: ['Halal', 'Chef Special']
  }
];

const CURATED_IMAGES = [
  'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549576490-b0b4831dd60a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514056052883-d017fddd0426?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519915028121-7d346bda2476?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1200&auto=format&fit=crop'
];

const FLAVORS = [
  '70% Valrhona Guanaja Dark Chocolate & Gold Feuillantine',
  'Madagascar Bourbon Vanilla Bean & Whipped Ganache',
  'Taif Rose Water, Turkish Pistachio & Wild Raspberry Compote',
  'Iranian Saffron Cream, Cardamom & Medjool Date Caramel',
  'Piedmont Hazelnut Praliné & Fleur de Sel Arlette',
  'Alphonso Mango, Passion Fruit Crémeux & Kaffir Lime',
  'Sicilian Lemon Curd, Wild Strawberry & Italian Meringue',
  'Japanese Ceremonial Uji Matcha & White Peach Gelee',
  'Normandy Salted Butter Caramel & Roasted Pecan Crunch',
  'Espresso Arabica Infusion & Mascarpone Gianduja'
];

const ITEMS_PER_CATEGORY = 20; // 8 * 20 = 160 items
const items = [];

let counter = 1;

CATEGORIES.forEach((cat, catIdx) => {
  for (let i = 1; i <= ITEMS_PER_CATEGORY; i++) {
    const idNum = String(counter).padStart(3, '0');
    const id = `MC-CAKE-${idNum}`;
    const imgIndex = (counter - 1) % CURATED_IMAGES.length;
    const secondaryImgIndex = (counter + 3) % CURATED_IMAGES.length;
    const flavor = FLAVORS[(counter - 1) % FLAVORS.length];
    
    // Realistic price scaling
    const priceStep = Math.round(cat.priceSpan / ITEMS_PER_CATEGORY);
    const priceAED = cat.basePrice + (i - 1) * priceStep;
    const originalPriceAED = Math.round(priceAED * 1.15);

    let title = '';
    let subtitle = '';

    if (cat.id === 'grand-celebration-cakes') {
      const names = [
        'L\'Or Impérial 24K Gold Celebration Cake',
        'Velours Noir Valrhona Grand Tier',
        'Le Jardin Secret Floral Tiered Cake',
        'Opera Royal Majestic Layered Cake',
        'Sovereign Pistachio & Taif Rose Tower',
        'L\'Étoile de Dubai Golden Pearl Cake',
        'Couronne Céleste White Chocolate Crown',
        'Amber Glow Salted Caramel Gateau',
        'Palais Royal Vanilla Bean Masterpiece',
        'Sultana Saffron & Date Prestige Tier'
      ];
      title = `${names[(i - 1) % names.length]} — Edition ${i}`;
      subtitle = `Haute Celebration Cake • ${flavor.split('&')[0].trim()}`;
    } else if (cat.id === 'royal-wedding-parures') {
      const names = [
        'Versailles White Lace 5-Tier Wedding Cake',
        'The Palm Jumeirah Imperial Royal Pavilion',
        'Chantilly Cascading Sugar Orchid Wedding Gateau',
        'L\'Amour Eternel 24K Gold Leaf Bridal Tower',
        'Emirates Palace Pearl & Silk Ribbon Cake',
        'Fontainebleau Baroque Sculpted Wedding Cake',
        'DIFC Sovereign Monochrome Tiered Cake',
        'Symphonie Blanche Sugar Flower Monogram',
        'Mirage d\'Or Golden Filigree Wedding Cake',
        'The Burj Royal Diamond Tiered Centerpiece'
      ];
      title = `${names[(i - 1) % names.length]} — Edition ${i}`;
      subtitle = `Haute Couture Wedding Cake • ${3 + (i % 4)} Tiers`;
    } else if (cat.id === 'parisian-haute-entremets') {
      const names = [
        'Miroir Rubis Raspberry & Vanilla Entremet',
        'Éclipse Chocolat Noir 70% Mirror Glaze',
        'Soleil d\'Or Exotic Passion Mango Entremet',
        'Perle Noire Truffle & Tonka Bean Entremet',
        'Jade de Pistache Whipped Ganache Dome',
        'Nuage de Rose Taif Petal Mousse Entremet',
        'Caramel Fleuri Salted Toffee Entremet',
        'Améthyste Wild Blackberry Velvet Entremet',
        'Noisette Impériale Praline Crunch Dome',
        'Zenith Matcha & Yuzu Mirror Entremet'
      ];
      title = `${names[(i - 1) % names.length]} — Edition ${i}`;
      subtitle = `Parisian Mirror-Glaze Entremet • Serves 8-10`;
    } else if (cat.id === 'artisanal-viennoiserie') {
      const names = [
        'Croissant Pur Beurre de Normandie (Set of 6)',
        'Pain au Chocolat Gianduja Double Bâton',
        'Pistachio Supreme Cruffin with Taif Rose Glaze',
        'Cardamom Kouign-Amann with Amber Caramel',
        'Almond Frangipane Flaked Croissant Box',
        'Truffle Honey & Gruyère Savory Brioche',
        'Valrhona Dark Pain Suisse Feuilleté',
        'Vanilla Bean Escargot with Golden Raisins',
        'Danish Aux Framboises Sauvages & Crème',
        'Brioche Tressée Fleur d\'Oranger Prestige'
      ];
      title = `${names[(i - 1) % names.length]} — Edition ${i}`;
      subtitle = `48-Hour Fermented Viennoiserie • Artisanal Batch`;
    } else if (cat.id === 'exclusive-macaron-coffrets') {
      const names = [
        'Coffret Impérial 24-Macaron Golden Box',
        'Taif Rose & Saffron Heritage Macaron Box',
        'Valrhona Grand Cru Chocolate Macaron Suite',
        'Pistachio di Bronte & Cardamom Macaron Box',
        'Passion Fruit & Tahitian Vanilla Macaron Set',
        'Salted Butter Caramel & Fleur de Sel Coffret',
        'Matcha Imperial & White Peach Macaron Box',
        'Black Truffle & Acacia Honey Macaron Suite',
        'Royal Blue Raspberry & Gold Flake Macaron Box',
        'Coffret Prestige 48-Piece Dubai Reception Box'
      ];
      title = `${names[(i - 1) % names.length]} — Edition ${i}`;
      subtitle = `Sovereign French Macarons • Temperature Controlled`;
    } else if (cat.id === 'signature-tartes-fines') {
      const names = [
        'Mille-Feuille Caramel Vanille Bourdonnante',
        'Tartelette Citron Meringuée Flambée',
        'Tarte Bourdaloue Poires Pochées & Amandes',
        'Tartelette Fraises des Bois & Pistache',
        'Tarte Tatin aux Pommes Golden & Crème Isigny',
        'Mille-Feuille Gianduja & Noisettes Torréfiées',
        'Tarte Chocolat Guanaja & Fleur de Sel',
        'Tartelette Mangue Alphonso en Rosace',
        'Flan Pâtissier Parisien à la Vanille de Tahiti',
        'Saint-Honoré Caramel & Crème Chiboust Royal'
      ];
      title = `${names[(i - 1) % names.length]} — Edition ${i}`;
      subtitle = `Hand-Rolled French Tarte & Feuilleté Masterpiece`;
    } else if (cat.id === 'dubai-majlis-dessert-towers') {
      const names = [
        'Majlis Al Sultan Grand Dessert Stand',
        'Royal Ramadan & Eid Imperial Sweet Hamper',
        'Medjool Date & Cardamom Financier Tower',
        'Golden Palm Petit Four Sovereign Tray (60 pcs)',
        'Taif Rose & Saffron Eclair Reception Platter',
        'Amber Ganache & Gold Dust Truffle Coffret',
        'DIFC VIP Executive Hospitality Dessert Trunk',
        'Burj Al Arab Sunset Tea Selection Tower',
        'Emirati Heritage Spiced Biscuit & Halwa Chest',
        'Jumeirah Beach Luxury Gifting Pyramid'
      ];
      title = `${names[(i - 1) % names.length]} — Edition ${i}`;
      subtitle = `Dubai Majlis Hospitality Suite • Up to 35 Guests`;
    } else {
      const names = [
        'Gravity-Defying Floating Cake Sculpture',
        'The Golden Falcon Royal Fondant Monument',
        'Crystal Chandelier Illuminated Wedding Centerpiece',
        'Palais Garnier Opera Sugar Replica Cake',
        'Modernist Geometric 24K Cube Sculpture Cake',
        'Sovereign Pearl Oyster Marine Haute Sculpture',
        'Golden Desert Rose Architectural Fondant Gateau',
        'Crown Jewels Velvet & Sugar Ruby Monument',
        'The DIFC Skyline Hand-Painted Fondant Cake',
        'Emirates Royal Falcon Crest Celebration Sculpture'
      ];
      title = `${names[(i - 1) % names.length]} — Edition ${i}`;
      subtitle = `Bespoke Haute Couture Fondant • Museum Grade`;
    }

    items.push({
      id,
      name: title,
      title,
      subtitle,
      disciplineId: cat.id,
      disciplineName: cat.name,
      category: 'Haute Pâtisserie',
      priceAED,
      originalPriceAED,
      flavor,
      prepTime: cat.prepTime,
      dietary: cat.dietaryOptions,
      servingSize: cat.id === 'royal-wedding-parures' ? '50-150 Guests' : (cat.id === 'dubai-majlis-dessert-towers' ? '25-40 Guests' : '8-14 Guests'),
      weightGrams: cat.id === 'royal-wedding-parures' ? '8.5kg - 18kg' : '1.2kg - 2.8kg',
      leadTime: cat.prepTime,
      inStock: true,
      isBestseller: i % 4 === 1,
      isSignature: i % 5 === 0,
      isNewArrival: i % 6 === 2,
      heroImage: CURATED_IMAGES[imgIndex],
      images: [
        CURATED_IMAGES[imgIndex],
        CURATED_IMAGES[secondaryImgIndex]
      ],
      description: `Maison Crème creation ${title}. Crafted in our DIFC Dubai laboratory with imported French AOP Isigny Sainte-Mère butter, Valrhona single-origin chocolates, and delicate gold foil touches.`,
      craftsmanship: 'Handcrafted across 48 hours by master pastry chefs under the direction of Executive Pâtissier Jean-Luc Delacroix.',
      preservation: 'Keep refrigerated at 4°C. Consume within 48 hours for optimal textural nuance.',
      deliveryZone: 'Dubai, Abu Dhabi & Sharjah refrigerated courier hand delivery.'
    });

    counter++;
  }
});

const fileHeader = `// MAISON CRÈME PARIS • DUBAI — 160 HAUTE PÂTISSERIE CREATIONS
// Handcrafted with French AOP Normandy butter, Valrhona Grands Crus & UAE Bespoke Gifting Standards

export interface BakeryCatalogItem {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  disciplineId: string;
  disciplineName: string;
  category: string;
  priceAED: number;
  originalPriceAED?: number;
  flavor: string;
  prepTime: string;
  dietary: string[];
  servingSize: string;
  weightGrams: string;
  leadTime: string;
  inStock: boolean;
  isBestseller?: boolean;
  isSignature?: boolean;
  isNewArrival?: boolean;
  heroImage: string;
  images: string[];
  description: string;
  craftsmanship: string;
  preservation: string;
  deliveryZone: string;
}

export const BAKERY_CATALOG: BakeryCatalogItem[] = ${JSON.stringify(items, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/bakeryCatalogData.ts'), fileHeader);
console.log('Successfully generated 160 Haute Pâtisserie catalog items!');
