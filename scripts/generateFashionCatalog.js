const fs = require('fs');
const path = require('path');

const DISCIPLINES = [
  {
    id: 'haute-couture-evening-gowns',
    name: 'Haute Couture Evening Gowns',
    tagline: 'Hand-Pleated Mulberry Silk, French Chantilly Lace & Crystal Drops',
    basePrice: 4800,
    priceSpan: 9500,
    materials: ['Mulberry Silk Chiffon', 'French Chantilly Lace', 'Duchess Satin', 'Crystal Beading'],
    leadTime: 'Bespoke Fitting (7 Days)',
    colors: ['Onyx Black', 'Imperial Emerald', 'Royal Sapphire', 'Champagne Gold']
  },
  {
    id: 'emirati-royal-abayas',
    name: 'Sovereign Royal Abayas',
    tagline: 'Japanese Crepe, French Velvet Trim & Hand-Embroidered Zari Metallic Thread',
    basePrice: 2400,
    priceSpan: 5200,
    materials: ['Imported Japanese Crepe', 'Silk Organza', 'Lyocell Velvet', 'Zari Gold Thread'],
    leadTime: 'Same-Day Dispatch',
    colors: ['Midnight Obsidian', 'Desert Sand', 'Oud Smoke', 'Rich Navy']
  },
  {
    id: 'bespoke-tailored-blazers',
    name: 'Architectural Suiting & Blazers',
    tagline: 'Super 160s English Wool, Milanese Buttonholes & Sculpted Shoulder Pads',
    basePrice: 3200,
    priceSpan: 6800,
    materials: ['Super 160s Merino Wool', 'Italian Silk Crepe', 'Cashmere Blend', 'Horn Buttons'],
    leadTime: '48h Tailoring Adjustments',
    colors: ['Charcoal Slate', 'Pure Cream', 'Chocolate Brown', 'Camel']
  },
  {
    id: 'resort-silk-kimonos',
    name: 'Riviera & Palm Resort Silks',
    tagline: 'Sandwashed Habotai Silk, Fluid Drapes & Mediterranean Palm Prints',
    basePrice: 1850,
    priceSpan: 3900,
    materials: ['Sandwashed Habotai Silk', 'Organic French Linen', 'Cupro Satin'],
    leadTime: 'Immediate Dispatch',
    colors: ['Terracotta Sun', 'Olive Grove', 'Azure Coast', 'Warm Ivory']
  },
  {
    id: 'contemporary-knitwear-cashmere',
    name: 'Mongolian Cashmere & Fine Knits',
    tagline: 'Grade-A Inner Mongolian Cashmere, 18-Gauge Fineness & Cloud-Soft Feel',
    basePrice: 2200,
    priceSpan: 4600,
    materials: ['100% Grade-A Cashmere', 'Silk-Cashmere Blend', 'Extra-Fine Merino'],
    leadTime: 'Ready to Wear',
    colors: ['Heather Oatmeal', 'Deep Espresso', 'Muted Sage', 'Cloud White']
  },
  {
    id: 'handcrafted-leather-goods',
    name: 'Atelier Leather Goods & Minaudières',
    tagline: 'French Calfskin, Hand-Stitched Saddle Seams & 24K Gold Plated Hardware',
    basePrice: 2800,
    priceSpan: 7800,
    materials: ['Full-Grain French Calfskin', 'Nappa Lambskin', '24K Gold Hardware'],
    leadTime: 'Gift Boxed Immediately',
    colors: ['Cognac Tan', 'Noir Gloss', 'Burgundy Wine', 'Forest Green']
  },
  {
    id: 'sartorial-mens-linen-silks',
    name: 'Sartorial Men’s Linens & Silks',
    tagline: 'Neapolitan Tailored Safari Jackets, Irish Linen Shirts & Silk Polos',
    basePrice: 1650,
    priceSpan: 4200,
    materials: ['Baird McNutt Irish Linen', 'Mulberry Silk Knit', 'Sea Island Cotton'],
    leadTime: 'Complimentary UAE Delivery',
    colors: ['Sandstone', 'Navy Blue', 'Olive Linen', 'Crisp White']
  },
  {
    id: 'monogram-cashmere-capes',
    name: 'Monogram Cashmere Capes & Furs',
    tagline: 'Double-Faced Cashmere Robes, Fox Fur Trim & Hand-Sewn Leather Clasps',
    basePrice: 5600,
    priceSpan: 12500,
    materials: ['Double-Faced Cashmere', 'Saga Furs Trim', 'Nappa Leather Clasps'],
    leadTime: 'Private Salon Delivery',
    colors: ['Camel Heather', 'Onyx Black', 'Pearl Gray', 'Truffle Taupe']
  }
];

const CURATED_IMAGES = [
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550639525-c97d455acf70?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=1200&auto=format&fit=crop'
];

const ITEMS_PER_CATEGORY = 20; // 8 * 20 = 160 items
const catalog = [];
let counter = 1;

DISCIPLINES.forEach((cat) => {
  for (let i = 1; i <= ITEMS_PER_CATEGORY; i++) {
    const idNum = String(counter).padStart(3, '0');
    const id = `ELANE-FASHION-${idNum}`;
    const imgIndex = (counter - 1) % CURATED_IMAGES.length;
    const secondaryImgIndex = (counter + 4) % CURATED_IMAGES.length;
    const material = cat.materials[(counter - 1) % cat.materials.length];
    const color = cat.colors[(counter - 1) % cat.colors.length];

    const priceStep = Math.round(cat.priceSpan / ITEMS_PER_CATEGORY);
    const priceAED = cat.basePrice + (i - 1) * priceStep;
    const originalPriceAED = Math.round(priceAED * 1.15);

    let title = '';
    let subtitle = '';

    if (cat.id === 'haute-couture-evening-gowns') {
      const names = [
        'L\'Aura Imperiale Silk Column Gown',
        'Nocturne Fluted Chantilly Lace Dress',
        'Soleil de Minuit Crystal Draped Gown',
        'Palais Royal Asymmetric Velvet Gown',
        'Étoile Scintillante Plissé Cape Gown',
        'Mirage d\'Or Golden Filigree Gown',
        'Vendôme Dramatic Corset Ballgown',
        'Sérénité Draped Halter Backless Gown',
        'Opéra Garnier Cascading Silk Gown',
        'L\'Impératrice Embroidered Mermaid Gown'
      ];
      title = `${names[(i - 1) % names.length]} — Edition ${i}`;
      subtitle = `Haute Couture Evening • ${material}`;
    } else if (cat.id === 'emirati-royal-abayas') {
      const names = [
        'Al Majlis Imperial Open Abaya',
        'Sovereign Japanese Crepe Royal Coat',
        'Velours Noir Embroidered Silk Abaya',
        'Zari Gold Piped Evening Abaya',
        'L\'Ombre Dubai Flared Kimono Abaya',
        'Desert Mirage Organza Layered Abaya',
        'Palm Royal Scalloped Cuff Abaya',
        'Oud Noir Minimalist Structured Abaya',
        'DIFC Sovereign Monochrome Abaya',
        'Chantilly Lace Trimmed Royal Abaya'
      ];
      title = `${names[(i - 1) % names.length]} — Edition ${i}`;
      subtitle = `Emirati Sovereign Abaya • ${color}`;
    } else if (cat.id === 'bespoke-tailored-blazers') {
      const names = [
        'The DIFC Power Hour Double-Breasted Blazer',
        'Sartorial Hourglass Wool Crepe Jacket',
        'Milanese Lapel Tailored Tuxedo Blazer',
        'L\'Architecte Structured Silk Crepe Blazer',
        'Vendôme Peak Lapel Single-Button Jacket',
        'The Riviera Unstructured Cashmere Blazer',
        'Imperial Horn Button Merino Suiting Jacket',
        'Contour Sculpted Wool Peplum Jacket',
        'Sovereign Camel Wool Over-Blazer',
        'The Executive Tuxedo Cape Jacket'
      ];
      title = `${names[(i - 1) % names.length]} — Edition ${i}`;
      subtitle = `Bespoke Tailored Suiting • Super 160s`;
    } else if (cat.id === 'resort-silk-kimonos') {
      const names = [
        'The Palm Jumeirah Silk Draped Kimono',
        'Riviera Sun Bleached Linen Caftan',
        'Sandwashed Habotai Sunset Robe',
        'Cannes Coast Halter Maxi Sundress',
        'Azure Beachside Fluid Silk Kimono',
        'Portofino Relaxed Belted Silk Tunic',
        'Sahara Oasis Hand-Printed Silk Caftan',
        'L\'Horizon Draped Silk Crepe Kimono',
        'St. Tropez Linen Safari Shirt Dress',
        'Breeze of Dubai Flowing Silk Caftan'
      ];
      title = `${names[(i - 1) % names.length]} — Edition ${i}`;
      subtitle = `Resort Wear • Sandwashed Silk`;
    } else if (cat.id === 'contemporary-knitwear-cashmere') {
      const names = [
        'The Cloud Cocoon Pure Cashmere Cardigan',
        'Grade-A Mongolian Cashmere Turtleneck',
        'Silk-Cashmere Fine Ribbed Knit Dress',
        'Bespoke Cashmere Relaxed Polo Sweater',
        'Double-Knit Cashmere Lounge Trousers',
        'Vendôme Heavy-Gauge Fisherman Cardigan',
        'Featherlight Cashmere V-Neck Jumper',
        'Seamless 18-Gauge Cashmere Knit Top',
        'Draped Cashmere Asymmetric Tunic',
        'The Executive Cashmere Wrap Sweater'
      ];
      title = `${names[(i - 1) % names.length]} — Edition ${i}`;
      subtitle = `100% Grade-A Mongolian Cashmere`;
    } else if (cat.id === 'handcrafted-leather-goods') {
      const names = [
        'The Élane Minaudière 24K Gold Clasp',
        'Atelier Saddle-Stitched Calfskin Tote',
        'L\'Impérial Sculpted Top Handle Bag',
        'French Calfskin Structured Evening Clutch',
        'The DIFC Executive Leather Document Flap',
        'Crocodile-Embossed Nappa Shoulder Bag',
        'Sovereign Gold Chain Crossbody Bag',
        'Handcrafted Woven Leather Pouch Bag',
        'The Vendôme Geometric Box Clutch',
        'Heritage Calfskin Envelope Bag'
      ];
      title = `${names[(i - 1) % names.length]} — Edition ${i}`;
      subtitle = `French Calfskin & 24K Gold Hardware`;
    } else if (cat.id === 'sartorial-mens-linen-silks') {
      const names = [
        'Sartorial Neapolitan Safari Jacket',
        'Baird McNutt Pure Irish Linen Shirt',
        'Silk-Cotton Milanese Open Collar Polo',
        'Pleated High-Waist Linen Trouser',
        'Double-Breasted Linen-Silk Summer Suit',
        'Casual Elegance Silk Camp-Collar Shirt',
        'Fine Sea Island Cotton Poplin Shirt',
        'Unlined Summer Cashmere Overshirt',
        'Tailored Drawstring Linen Pant',
        'Mediterranean Relaxed Linen Overshirt'
      ];
      title = `${names[(i - 1) % names.length]} — Edition ${i}`;
      subtitle = `Sartorial Men's Luxury • Natural Fibers`;
    } else {
      const names = [
        'The Sovereign Double-Faced Cashmere Cape',
        'Saga Royal Fox Fur Collar Cashmere Robe',
        'Vendôme Monogrammed Hooded Cashmere Wrap',
        'Alps Winter White Shearling & Silk Coat',
        'L\'Impératrice Dramatic Floor-Length Cape',
        'Hand-Sewn Leather Clasp Cashmere Poncho',
        'Double-Weave Cashmere Stole with Leather Fringe',
        'Nordic Mink Trimmed Cashmere Coat',
        'The Desert Twilight Reversible Cape',
        'Royal Palace Monogram Embroidered Cape'
      ];
      title = `${names[(i - 1) % names.length]} — Edition ${i}`;
      subtitle = `Double-Faced Cashmere & Bespoke Trims`;
    }

    catalog.push({
      id,
      name: title,
      title,
      subtitle,
      disciplineId: cat.id,
      disciplineName: cat.name,
      category: 'Haute Couture & Luxury Apparel',
      priceAED,
      originalPriceAED,
      material,
      color,
      availableSizes: ['FR 34 / US 2', 'FR 36 / US 4', 'FR 38 / US 6', 'FR 40 / US 8', 'FR 42 / US 10', 'Bespoke Custom Made'],
      fit: 'Precision Tailored Haute Silhouette',
      care: 'Specialist Dry Clean Only • Atelier Care Service',
      origin: 'Place Vendôme, Paris & Dubai Design District (d3) Atelier',
      leadTime: cat.leadTime,
      inStock: true,
      isBestseller: i % 4 === 1,
      isSignature: i % 5 === 0,
      isNewArrival: i % 6 === 2,
      heroImage: CURATED_IMAGES[imgIndex],
      images: [
        CURATED_IMAGES[imgIndex],
        CURATED_IMAGES[secondaryImgIndex]
      ],
      description: `Élane Atelier masterpiece ${title}. Sculpted in our Dubai Design District (d3) atelier with ${material}. Features bespoke hand-finishing, French seams, and customized tailored measurements.`,
      craftsmanship: 'Hand-sewn and individually numbered in the Élane Haute Couture Register.',
      deliveryZone: 'Complimentary private courier delivery across Dubai, Abu Dhabi, and UAE.'
    });

    counter++;
  }
});

const fileHeader = `// ÉLANE ATELIER PARIS • DUBAI — 160 HAUTE COUTURE & LUXURY APPAREL CREATIONS
// Handcrafted in Dubai Design District (d3) & Place Vendôme with Authentic UAE AED Pricing

export interface FashionCatalogItem {
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
  color: string;
  availableSizes: string[];
  fit: string;
  care: string;
  origin: string;
  leadTime: string;
  inStock: boolean;
  isBestseller?: boolean;
  isSignature?: boolean;
  isNewArrival?: boolean;
  heroImage: string;
  images: string[];
  description: string;
  craftsmanship: string;
  deliveryZone: string;
}

export const FASHION_CATALOG: FashionCatalogItem[] = ${JSON.stringify(catalog, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/fashionCatalogData.ts'), fileHeader);
console.log('Successfully generated 160 Haute Couture catalog items for Project 13!');
