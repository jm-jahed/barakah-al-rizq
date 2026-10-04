const fs = require('fs');
const path = require('path');

const categories = [
  {
    id: 'frozen-poultry',
    name: 'Frozen Poultry & Chicken',
    subcategories: ['Whole Frozen Chicken', 'Chicken Breast Fillet', 'Chicken Thighs & Drumsticks', 'Chicken Wings (3-Joint/Mid-Joint)', 'Chicken Shawarma Cones', 'Smoked & Seasoned Poultry'],
    tempRange: '-18°C to -22°C',
    defaultOrigin: 'Brazil',
    images: [
      'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'frozen-beef-veal',
    name: 'Prime Beef & Veal Cuts',
    subcategories: ['Ribeye & Striploin Steaks', 'Tenderloin Portions', 'Beef Brisket & Short Ribs', 'Minced Beef (80/20 & 90/10)', 'Beef Burger Patties (Homestyle)', 'Veal Shanks & Chops'],
    tempRange: '-18°C to -24°C',
    defaultOrigin: 'Australia',
    images: [
      'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'frozen-seafood',
    name: 'Commercial Seafood & Fish',
    subcategories: ['Atlantic Salmon Fillets', 'Vannamei Tiger Prawns', 'White Fish Fillets (Cod/Haddock/Basa)', 'Squid Rings & Whole Calamari', 'Lobster Tails & Crab Portions', 'Breaded Fish Portions'],
    tempRange: '-20°C to -26°C',
    defaultOrigin: 'Norway',
    images: [
      'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579631542720-3a87824fff86?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'frozen-vegetables',
    name: 'IQF Vegetables & Mixes',
    subcategories: ['Green Peas & Sweet Corn', 'Mixed Vegetables (4-Way / 5-Way)', 'Broccoli & Cauliflower Florets', 'French Fries & Potato Wedges', 'Chopped Spinach & Okra', 'Diced Onions & Garlic Puree'],
    tempRange: '-18°C to -20°C',
    defaultOrigin: 'Belgium',
    images: [
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566842600175-97dca489844f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'frozen-fruits-purees',
    name: 'IQF Fruits & Fruit Purees',
    subcategories: ['Wild Blueberries & Raspberries', 'IQF Strawberries & Blackberries', 'Mango Chunks & Passion Fruit', 'Avocado Halves & Guacamole Base', 'Açaí Berry Puree Frozen Packs', 'Citrus Segments & Fruit Puree Tubs'],
    tempRange: '-18°C to -22°C',
    defaultOrigin: 'Poland',
    images: [
      'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508736793122-f516e3ba5569?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563746098160-569df5d918ea?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'ready-to-cook-appetizers',
    name: 'Ready-to-Cook & Appetizers',
    subcategories: ['Crispy Chicken Nuggets & Tenders', 'Meat & Veggie Spring Rolls', 'Arabic Cheese & Meat Sambousek', 'Breaded Mozzarella Sticks', 'Falafel Patties & Kibbeh', 'Dim Sum & Vegetable Gyoza'],
    tempRange: '-18°C to -20°C',
    defaultOrigin: 'UAE',
    images: [
      'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'frozen-bakery-pastries',
    name: 'Frozen Bakery & Par-Baked',
    subcategories: ['Butter Croissants & Pain au Chocolat', 'Par-Baked Artisan Baguettes', 'Puff Pastry Sheets & Tart Shells', 'Gourmet Burger Buns & Brioche', 'Frozen Pizza Crusts & Flatbreads', 'Donuts & Danish Pastry Mixes'],
    tempRange: '-18°C to -20°C',
    defaultOrigin: 'France',
    images: [
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511018556340-d16986a1c194?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'dairy-frozen-creams',
    name: 'Dairy & Frozen Creams',
    subcategories: ['Cooking & Whipping Cream (Frozen)', 'Mozzarella & Cheddar Block (Frozen)', 'Unsalted Butter Blocks (25kg)', 'Greek Yogurt Base (Frozen Foodservice)', 'Frozen Pasteurized Egg Whites', 'Ice Cream Base & Soft Serve Mixes'],
    tempRange: '-18°C to -22°C',
    defaultOrigin: 'New Zealand',
    images: [
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

const originsList = ['UAE', 'Brazil', 'Australia', 'Norway', 'France', 'Belgium', 'Poland', 'New Zealand', 'USA', 'India', 'Egypt', 'Thailand', 'Spain', 'Ireland'];
const packagingTypes = ['IQF Master Carton', 'Vacuum-Sealed Polylined Carton', 'Foodservice Inner Bags in Master Case', 'Bulk Palletized Boxes', 'Tamper-Evident Foodservice Pail'];
const certifications = ['100% Halal Certified (ESMA UAE)', 'HACCP Certified Processing', 'ISO 22000 Food Safety', 'Dubai Municipality Food Watch Verified'];

const allProducts = [];
let globalId = 1;

categories.forEach((cat) => {
  // Generate 27 items per category = 8 * 27 = 216 items total
  const itemsPerCategory = 27;

  for (let i = 0; i < itemsPerCategory; i++) {
    const sub = cat.subcategories[i % cat.subcategories.length];
    const imageIdx = i % cat.images.length;
    const secondaryIdx = (i + 1) % cat.images.length;
    const thirdIdx = (i + 2) % cat.images.length;
    const origin = originsList[(i + categories.indexOf(cat)) % originsList.length];
    
    // Realistic pack sizes
    const packSizes = [
      { unit: 'Carton', size: '10 x 1 kg Bags (10 kg Master Carton)', weightKg: 10, moq: 5 },
      { unit: 'Carton', size: '4 x 2.5 kg Packs (10 kg Master Case)', weightKg: 10, moq: 5 },
      { unit: 'Carton', size: '12 x 900 g Tray Packs (10.8 kg Box)', weightKg: 10.8, moq: 10 },
      { unit: 'Box', size: '6 x 2 kg Foodservice Pouches (12 kg Box)', weightKg: 12, moq: 4 },
      { unit: 'Bulk Carton', size: '1 x 15 kg Polylined Bulk Case', weightKg: 15, moq: 10 },
      { unit: 'Master Case', size: '20 x 500 g Retail Ready Packs (10 kg)', weightKg: 10, moq: 15 }
    ];
    const pack = packSizes[i % packSizes.length];

    // Realistic UAE AED prices
    const basePricePerKg = 14 + ((globalId * 7) % 65) + (cat.id === 'frozen-beef-veal' ? 45 : cat.id === 'frozen-seafood' ? 35 : 0);
    const pricePerCarton = Math.round(basePricePerKg * pack.weightKg);
    const originalPrice = Math.round(pricePerCarton * 1.18);

    const isFeatured = i < 3;
    const isBestseller = i === 0 || i === 4 || i === 8;
    const isPromo = i % 5 === 0;

    const sku = `FS-${cat.id.substring(0, 3).toUpperCase()}-${String(globalId).padStart(4, '0')}`;
    const name = `${sub} — ${origin} Origin Grade A (${pack.size.split('(')[0].trim()})`;

    allProducts.push({
      id: `prod-${cat.id}-${i + 1}`,
      sku: sku,
      name: name,
      category: cat.name,
      categorySlug: cat.id,
      subcategory: sub,
      priceAED: pricePerCarton,
      originalPriceAED: isPromo ? originalPrice : undefined,
      pricePerKgAED: Math.round(basePricePerKg * 10) / 10,
      unit: pack.unit,
      packSize: pack.size,
      weightKg: pack.weightKg,
      moq: pack.moq,
      origin: origin,
      brand: origin === 'UAE' ? 'Al Khazna / Arctic Choice' : origin === 'Brazil' ? 'Seara / Sadia Foodservice' : origin === 'Australia' ? 'Silver Fern / Stanbroke' : origin === 'Norway' ? 'Lerøy Fjord Select' : 'Global Cold Harvest',
      storageTemp: cat.tempRange,
      packaging: packagingTypes[i % packagingTypes.length],
      shelfLife: '18–24 Months from Production Date',
      certifications: certifications,
      image: cat.images[imageIdx],
      gallery: [
        cat.images[imageIdx],
        cat.images[secondaryIdx],
        cat.images[thirdIdx]
      ],
      description: `Premium commercial-grade ${sub.toLowerCase()} sourced from certified producers in ${origin}. Individually Quick Frozen (IQF) immediately after preparation to seal in natural cellular moisture, peak protein integrity, and clean flavor profile. Formatted specifically for UAE commercial kitchens, fine dining hotels, airline caterers, and high-volume retail supply chains.`,
      shortDescription: `Grade A ${sub} packed in ${pack.size} with full cold-chain traceability maintained at ${cat.tempRange}.`,
      features: [
        'Individually Quick Frozen (IQF) for instant portion control with zero clump defrosting',
        'Guaranteed uninterrupted cold-chain compliance (-18°C temperature logging from source to dock)',
        '100% Halal certified by UAE ESMA approved Islamic slaughter inspection authorities',
        'Uniform piece calibration minimizing kitchen preparation labor and plate yield variance'
      ],
      specifications: {
        'Origin Country': origin,
        'Storage Temperature': cat.tempRange,
        'Shelf Life': '24 Months at -18°C',
        'Pack Format': pack.size,
        'Gross Weight': `${(pack.weightKg * 1.05).toFixed(1)} kg`,
        'Net Weight': `${pack.weightKg} kg`,
        'Pallet Layer (Ti/Hi)': '10 Cartons / Layer • 8 Layers (80 Cartons/Pallet)',
        'Minimum Order Quantity': `${pack.moq} ${pack.unit}s`,
        'Defrost Recommendation': 'Thaw under refrigeration at 2°C to 4°C for 12–18 hours before cooking. Do not refreeze.'
      },
      tierPricing: [
        { minQuantity: pack.moq, priceAED: pricePerCarton, discountPercent: 0, label: 'Standard Wholesale' },
        { minQuantity: pack.moq * 4, priceAED: Math.round(pricePerCarton * 0.94), discountPercent: 6, label: 'Tier 1 Commercial (4+ Master Packs)' },
        { minQuantity: pack.moq * 10, priceAED: Math.round(pricePerCarton * 0.88), discountPercent: 12, label: 'Tier 2 Pallet Rate (10+ Master Packs)' }
      ],
      isFeatured: isFeatured,
      isBestseller: isBestseller,
      isNewArrival: i % 7 === 0,
      inStock: true,
      stockCartonsAvailable: 240 + ((globalId * 37) % 850)
    });

    globalId++;
  }
});

const outputDir = path.join(__dirname, '..', 'src', 'data');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'frozenSupplyCatalog.json'), JSON.stringify(allProducts, null, 2), 'utf8');
console.log(`Successfully generated ${allProducts.length} commercial frozen supply products to frozenSupplyCatalog.json!`);
