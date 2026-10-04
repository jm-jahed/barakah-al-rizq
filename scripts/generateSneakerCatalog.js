const fs = require('fs');
const path = require('path');

const DISCIPLINES = [
  {
    id: 'retro-grail-high-tops',
    name: 'Retro Grail High-Tops',
    tagline: 'Deadstock Air Jordan 1s, 85 Cut Retros & OG Colorways',
    basePrice: 1250,
    priceSpan: 3400,
    brands: ['Jordan', 'Nike', 'Converse'],
    silhouette: 'High Top Grail',
    authentication: '12-Point RFID & UV Check Verified'
  },
  {
    id: 'collab-heat-drops',
    name: 'Collaborations & Heat Drops',
    tagline: 'Travis Scott Reverse Mochas, Off-White Virgil & Sacai Hybrids',
    basePrice: 2800,
    priceSpan: 6200,
    brands: ['Nike x Travis Scott', 'Off-White x Nike', 'Adidas x Wales Bonner', 'Tiffany & Co. x Nike'],
    silhouette: 'Limited Drop',
    authentication: 'Chipped Authenticity Tag & Proof of Purchase'
  },
  {
    id: 'performance-running-runners',
    name: 'Y2K & Performance Runners',
    tagline: 'ASICS GEL-Kayano 14, New Balance 990v6 & Salomon XT-6 Techwear',
    basePrice: 650,
    priceSpan: 1100,
    brands: ['ASICS', 'New Balance', 'Salomon', 'Nike'],
    silhouette: 'Technical Runner',
    authentication: 'Factory Direct & Local Dubai Verified'
  },
  {
    id: 'classic-lows-skate',
    name: 'Classic Lows & Skate Icons',
    tagline: 'Nike Dunk Low SB, Adidas Samba OG & Campus 00s Suede Classics',
    basePrice: 420,
    priceSpan: 890,
    brands: ['Nike SB', 'Adidas Originals', 'Vans Vault'],
    silhouette: 'Low Top Street Classic',
    authentication: '100% Deadstock Guarantee'
  },
  {
    id: 'dubai-heavyweight-hoodies',
    name: 'Heavyweight Streetwear Hoodies',
    tagline: '520GSM French Terry Cotton, Distressed Washes & Puffed Silkscreen',
    basePrice: 380,
    priceSpan: 750,
    brands: ['Sole Vault Studio', 'Represent', 'Fear of God Essentials'],
    silhouette: 'Boxy Heavyweight Cut',
    authentication: 'Custom Woven d3 Labels & Metal Eyelets'
  },
  {
    id: 'oversized-vintage-tees',
    name: 'Oversized Washed Graphic Tees',
    tagline: '280GSM Pre-Shrunk Combed Cotton, Acid Wash & Vintage Motorsport Prints',
    basePrice: 195,
    priceSpan: 390,
    brands: ['Sole Vault Studio', 'Stüssy', 'Kith Dubai'],
    silhouette: 'Dropped Shoulder Oversized',
    authentication: 'Enzyme-Washed Cotton Guarantee'
  },
  {
    id: 'tactical-cargo-trackpants',
    name: 'Tactical Cargos & Utility Trackpants',
    tagline: 'Water-Repellent Ripstop Nylon, Cobrax Hardware & Articulated Knees',
    basePrice: 450,
    priceSpan: 980,
    brands: ['Sole Vault Studio', 'Techwear d3', 'Carhartt WIP'],
    silhouette: 'Adjustable Bungee Hem',
    authentication: 'YKK Waterproof Zippers & Heavy Bartacks'
  },
  {
    id: 'vault-caps-accessories',
    name: 'Collector Caps & Sneaker Care',
    tagline: 'Heavy Corduroy Fitteds, 24K Metal Pin Badges & Reshoevn8r Kits',
    basePrice: 160,
    priceSpan: 420,
    brands: ['Sole Vault Exclusive', 'New Era Dubai', 'Crep Protect'],
    silhouette: 'Collector Edition',
    authentication: 'Holographic Verification Stamp'
  }
];

const CURATED_SNEAKER_IMAGES = [
  'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=1200&auto=format&fit=crop'
];

const ITEMS_PER_CATEGORY = 20; // 8 * 20 = 160 items
const catalog = [];
let counter = 1;

DISCIPLINES.forEach((cat) => {
  for (let i = 1; i <= ITEMS_PER_CATEGORY; i++) {
    const idNum = String(counter).padStart(3, '0');
    const id = `SOLE-VAULT-${idNum}`;
    const imgIndex = (counter - 1) % CURATED_SNEAKER_IMAGES.length;
    const secondaryImgIndex = (counter + 3) % CURATED_SNEAKER_IMAGES.length;
    const brand = cat.brands[(counter - 1) % cat.brands.length];

    const priceStep = Math.round(cat.priceSpan / ITEMS_PER_CATEGORY);
    const priceAED = cat.basePrice + (i - 1) * priceStep;
    const originalPriceAED = Math.round(priceAED * 1.15);

    let title = '';
    let subtitle = '';

    if (cat.id === 'retro-grail-high-tops') {
      const names = [
        'Air Jordan 1 Retro High OG Lost & Found',
        'Air Jordan 1 High 85 Georgetown Navy',
        'Air Jordan 4 Retro Military Blue 2024',
        'Air Jordan 3 Retro Reimagined White Cement',
        'Air Jordan 1 High OG Patent Bred',
        'Air Jordan 11 Retro Concord Space Jam',
        'Air Jordan 1 Retro High Royal Reimagined',
        'Air Jordan 5 Retro Metallic Black OG',
        'Air Jordan 6 Retro Infrared Classic',
        'Air Jordan 1 High OG Shadow 2.0 Edition'
      ];
      title = `${names[(i - 1) % names.length]} — Pair ${i}`;
      subtitle = `${brand} • ${cat.silhouette}`;
    } else if (cat.id === 'collab-heat-drops') {
      const names = [
        'Air Jordan 1 Low Travis Scott Reverse Mocha',
        'Off-White x Nike Dunk Low Dear Summer Lot 01',
        'Travis Scott x Air Jordan 1 Low Olive Retro',
        'Tiffany & Co. x Nike Air Force 1 1837',
        'Off-White x Air Jordan 4 Sail Virgil Abloh',
        'Sacai x Nike VaporWaffle Black White',
        'A Ma Maniére x Air Jordan 3 Violet Ore',
        'Adidas x Bad Bunny Campus Deep Brown',
        'Wales Bonner x Adidas Samba Leopard Hair',
        'Travis Scott x Nike Mac Attack SP Grail'
      ];
      title = `${names[(i - 1) % names.length]} — Edition ${i}`;
      subtitle = `${brand} • Heat Release`;
    } else if (cat.id === 'performance-running-runners') {
      const names = [
        'ASICS GEL-Kayano 14 Metallic Plum Silver',
        'New Balance 990v6 Made in USA Castlerock',
        'Salomon XT-6 Gore-Tex Black Phantom Tech',
        'New Balance 1906R Protection Pack Castlerock',
        'ASICS GT-2160 Cream Pure Silver Runner',
        'Nike Zoom Vomero 5 Oatmeal Cobblestone',
        'Salomon ACS Pro Advanced Metal Vanilla',
        'New Balance 2002R Rain Cloud Refined Pack',
        'ASICS GEL-1130 White Clay Canyon Sport',
        'On Cloudtilt Loewe Khaki Green Collab'
      ];
      title = `${names[(i - 1) % names.length]} — Edition ${i}`;
      subtitle = `${brand} • Technical Footwear`;
    } else if (cat.id === 'classic-lows-skate') {
      const names = [
        'Nike Dunk Low Retro Panda White Black',
        'Adidas Samba OG Cloud White Core Black',
        'Nike SB Dunk Low Pro White Gum Sole',
        'Adidas Gazelle Indoor Bold Orange Green',
        'Nike Dunk Low Retro Grey Fog Classic',
        'Adidas Campus 00s Core Black White Fat Lace',
        'Nike SB Dunk Low Classic Green Skate',
        'Vans Vault Old Skool LX Black White Suede',
        'Adidas Handball Spezial Light Blue Gum',
        'Converse Chuck 70 High Top Parchment Canvas'
      ];
      title = `${names[(i - 1) % names.length]} — Batch ${i}`;
      subtitle = `${brand} • Daily Street Icon`;
    } else if (cat.id === 'dubai-heavyweight-hoodies') {
      const names = [
        'Vault Heavyweight 520GSM French Terry Hoodie',
        'Dubai Design District Oversized Acid Box Hoodie',
        'Vintage Washed Sun-Faded Charcoal Pullover',
        'Double-Layered Hooded Thermal Sweatshirt',
        'Emirati Monogram High-Density Puff Print Hoodie',
        'Sovereign Blackout Metal-Tipped Drawstring Hoodie',
        'Distressed Raw-Hem 480GSM Street Pullover',
        'Sandstorm Dune Washed Oversized Heavy Hoodie',
        'Midnight Noir Minimalist Heavy Cotton Hoodie',
        'Palm Jumeirah Sunset Ombre Vintage Hoodie'
      ];
      title = `${names[(i - 1) % names.length]} — Drop ${i}`;
      subtitle = `Sole Vault Streetwear • 520GSM Cotton`;
    } else if (cat.id === 'oversized-vintage-tees') {
      const names = [
        'Boxy 280GSM Vintage Motorsport Graphic Tee',
        'Distressed Heavy Cotton Acid Wash Pocket Tee',
        'Dubai Underground Culture Monogram Heavy Tee',
        'Sun-Bleached Sandstone Drop-Shoulder Tee',
        'Enzyme-Washed Thick Ribbed Collar Street Tee',
        'Cyberpunk Neon Graffiti Dubai Oversized Tee',
        'Super-Heavyweight Blank Studio Tee in Obsidian',
        'Archive Collection Screen-Printed Washed Tee',
        'Desert Camo Distressed Streetwear Heavyweight Tee',
        'Retro Sneakerhead Blueprint Vintage Graphic Tee'
      ];
      title = `${names[(i - 1) % names.length]} — Series ${i}`;
      subtitle = `Sole Vault Streetwear • 280GSM Heavy`;
    } else if (cat.id === 'tactical-cargo-trackpants') {
      const names = [
        'Tactical Multi-Pocket Ripstop Cargo Pants',
        'Articulated Knee Technical Bungee Trackpants',
        'Waterproof Cordura Utility Cargo Trouser',
        'Pleated Relaxed Wide-Leg Streetwear Pant',
        'Heavyweight French Terry Cuffed Sweatpants',
        'Snap-Button Side Tearaway Street Trackpants',
        'Modular Zip-Off Pocket Techwear Cargo',
        'Desert Tactical Sand Double-Knee Pants',
        'Cobalt Blue Technical Shell Running Pant',
        'Monochrome Obsidian Minimalist Cargo Trousers'
      ];
      title = `${names[(i - 1) % names.length]} — Drop ${i}`;
      subtitle = `Utility & Tactical Streetwear • Cobrax Hardware`;
    } else {
      const names = [
        'Heavy Vintage Corduroy 6-Panel Vault Cap',
        'Metal Pin Dubai Skyline Trucker Snapback',
        'Reshoevn8r Ultimate Sneaker Cleaning Kit',
        'Magnetic Clear Drop-Front Sneaker Display Box (Set of 6)',
        'Heavyweight Cotton 3-Pack Vault Crew Socks',
        'Tactical Ripstop Crossbody Sneaker Bag',
        'Reflective 3M Rope Laces Replacement Pack',
        'Sole Vault Dubai Gold-Plated Enamel Pin',
        'Water-Repellent Nano Spray Sneaker Guard',
        'Collector Leather Sneaker Travel Duffle'
      ];
      title = `${names[(i - 1) % names.length]} — Edition ${i}`;
      subtitle = `Vault Accessories & Sneaker Care`;
    }

    catalog.push({
      id,
      name: title,
      title,
      subtitle,
      disciplineId: cat.id,
      disciplineName: cat.name,
      category: 'Sneakers & Streetwear',
      priceAED,
      originalPriceAED,
      brand,
      silhouette: cat.silhouette,
      availableSizes: cat.id.includes('hoodies') || cat.id.includes('tees') || cat.id.includes('cargos')
        ? ['Small', 'Medium', 'Large', 'X-Large', 'XX-Large (Oversized)']
        : (cat.id.includes('caps') ? ['One Size (Adjustable)'] : ['US 7.5', 'US 8', 'US 8.5', 'US 9', 'US 9.5', 'US 10', 'US 10.5', 'US 11', 'US 12']),
      condition: 'Deadstock • 100% Verified Authentic',
      authentication: cat.authentication,
      stockStatus: 'Ready in Dubai Vault for Immediate Dispatch',
      leadTime: 'Same-Day Dispatch (4 Hours across Dubai)',
      inStock: true,
      isBestseller: i % 4 === 1,
      isDrop: i % 5 === 0,
      isNewArrival: i % 6 === 2,
      heroImage: CURATED_SNEAKER_IMAGES[imgIndex],
      images: [
        CURATED_SNEAKER_IMAGES[imgIndex],
        CURATED_SNEAKER_IMAGES[secondaryImgIndex]
      ],
      description: `Sole Vault grail ${title}. Inspected under multi-spectrum UV light and microscopic stitching audit in our Dubai Alserkal Avenue vault. Packaged with serialized RFID security seal.`,
      specs: `${cat.tagline}. Authentic receipt & factory packaging intact.`,
      deliveryZone: 'Express 4-Hour Dubai Van Delivery / 24-Hour Abu Dhabi & Sharjah.'
    });

    counter++;
  }
});

const fileHeader = `// SOLE VAULT DUBAI — 160 SNEAKERS, GRAILS & HEAVYWEIGHT STREETWEAR
// Verified 12-Point RFID Authentication & Authentic UAE AED Pricing

export interface SoleVaultCatalogItem {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  disciplineId: string;
  disciplineName: string;
  category: string;
  priceAED: number;
  originalPriceAED?: number;
  brand: string;
  silhouette: string;
  availableSizes: string[];
  condition: string;
  authentication: string;
  stockStatus: string;
  leadTime: string;
  inStock: boolean;
  isBestseller?: boolean;
  isDrop?: boolean;
  isNewArrival?: boolean;
  heroImage: string;
  images: string[];
  description: string;
  specs: string;
  deliveryZone: string;
}

export const SOLE_VAULT_CATALOG: SoleVaultCatalogItem[] = ${JSON.stringify(catalog, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/sneakerCatalogData.ts'), fileHeader);
console.log('Successfully generated 160 Sole Vault catalog items for Project 14!');
