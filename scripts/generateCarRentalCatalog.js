const fs = require('fs');
const path = require('path');

const CATEGORIES = [
  { id: 'supercars', name: 'Supercars & Track Weapons', subtitle: 'Ferrari, Lamborghini, McLaren & Porsche GT' },
  { id: 'ultra-luxury', name: 'Ultra-Luxury Limousines', subtitle: 'Rolls-Royce Phantom, Ghost & Maybach S680' },
  { id: 'performance-suv', name: 'High-Performance Luxury SUVs', subtitle: 'Lamborghini Urus, G63 AMG, Cullinan & DBX707' },
  { id: 'hypercars-exotic', name: 'Hypercars & Sovereign Exotics', subtitle: 'Ferrari SF90, Revuelto, 750S & Porsche 918' },
  { id: 'convertibles', name: 'Convertible & Coastline Cruisers', subtitle: 'Ferrari Roma Spider, Bentley GTC & 911 Targa' },
  { id: 'executive-sedans', name: 'Executive & Diplomatic Sedans', subtitle: 'Mercedes S580, BMW 760Li & Audi S8' },
  { id: 'chauffeur-vip', name: 'Chauffeur & VIP Tarmac Fleet', subtitle: 'Cadillac Escalade ESV, Maybach GLS & V-Class VIP' },
  { id: 'electric-hyper', name: 'Next-Gen Electric Performance', subtitle: 'Porsche Taycan Turbo S, Lotus Eletre & Tesla Plaid' }
];

const BRANDS = [
  'Rolls-Royce', 'Ferrari', 'Lamborghini', 'Bentley', 'Porsche', 'Mercedes-Maybach', 'Mercedes-AMG', 'McLaren', 'Aston Martin', 'Range Rover', 'BMW M Power', 'Audi Sport'
];

const CAR_MODELS = [
  { brand: 'Rolls-Royce', model: 'Spectre Ultra-Luxury Electric Coupe', hp: 577, zeroHundred: '4.5s', topSpeed: '250 km/h', basePrice: 4500 },
  { brand: 'Rolls-Royce', model: 'Phantom VIII Extended Wheelbase', hp: 563, zeroHundred: '5.3s', topSpeed: '250 km/h', basePrice: 5500 },
  { brand: 'Rolls-Royce', model: 'Cullinan Black Badge SUV', hp: 600, zeroHundred: '4.9s', topSpeed: '250 km/h', basePrice: 4800 },
  { brand: 'Ferrari', model: 'SF90 Stradale Assetto Fiorano Hybrid', hp: 986, zeroHundred: '2.5s', topSpeed: '340 km/h', basePrice: 6500 },
  { brand: 'Ferrari', model: '296 GTB Twin-Turbo V6 Hybrid', hp: 819, zeroHundred: '2.9s', topSpeed: '330 km/h', basePrice: 4200 },
  { brand: 'Ferrari', model: 'Purosangue V12 Super SUV', hp: 715, zeroHundred: '3.3s', topSpeed: '310 km/h', basePrice: 7000 },
  { brand: 'Lamborghini', model: 'Revuelto V12 Hybrid Hypercar', hp: 1001, zeroHundred: '2.5s', topSpeed: '350 km/h', basePrice: 8500 },
  { brand: 'Lamborghini', model: 'Huracán STO Track Edition', hp: 631, zeroHundred: '3.0s', topSpeed: '310 km/h', basePrice: 4000 },
  { brand: 'Lamborghini', model: 'Urus Performante Edition', hp: 657, zeroHundred: '3.3s', topSpeed: '306 km/h', basePrice: 3800 },
  { brand: 'McLaren', model: '750S Spider Twin-Turbo V8', hp: 740, zeroHundred: '2.8s', topSpeed: '332 km/h', basePrice: 4600 },
  { brand: 'McLaren', model: 'Artura Hybrid Supercar', hp: 671, zeroHundred: '3.0s', topSpeed: '330 km/h', basePrice: 3600 },
  { brand: 'Bentley', model: 'Continental GT Speed W12', hp: 650, zeroHundred: '3.5s', topSpeed: '335 km/h', basePrice: 3400 },
  { brand: 'Bentley', model: 'Flying Spur Mulliner W12', hp: 626, zeroHundred: '3.7s', topSpeed: '333 km/h', basePrice: 3600 },
  { brand: 'Porsche', model: '911 GT3 RS Weissach Package', hp: 518, zeroHundred: '3.0s', topSpeed: '296 km/h', basePrice: 4200 },
  { brand: 'Porsche', model: '911 Turbo S Cabriolet', hp: 640, zeroHundred: '2.6s', topSpeed: '330 km/h', basePrice: 3200 },
  { brand: 'Mercedes-Maybach', model: 'S680 4MATIC V12 Edition 100', hp: 621, zeroHundred: '4.4s', topSpeed: '250 km/h', basePrice: 3800 },
  { brand: 'Mercedes-AMG', model: 'G63 Grand Edition Bi-Turbo', hp: 577, zeroHundred: '4.5s', topSpeed: '240 km/h', basePrice: 2800 },
  { brand: 'Aston Martin', model: 'DBS 770 Ultimate Super GT', hp: 759, zeroHundred: '3.2s', topSpeed: '340 km/h', basePrice: 4800 },
  { brand: 'Aston Martin', model: 'DBX707 Super Luxury SUV', hp: 697, zeroHundred: '3.3s', topSpeed: '310 km/h', basePrice: 3200 },
  { brand: 'Range Rover', model: 'SV Autobiography Long Wheelbase V8', hp: 606, zeroHundred: '4.4s', topSpeed: '261 km/h', basePrice: 2600 }
];

const UNSPLASH_IMAGES = [
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1400&q=85',
  'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1400&q=85'
];

const vehicles = [];
let idCounter = 1;

// 24 unique luxury exotics per category = 192 exotic vehicles
CATEGORIES.forEach((cat, catIdx) => {
  for (let i = 0; i < 24; i++) {
    const vId = `EX-${String(idCounter).padStart(3, '0')}`;
    const modelTemplate = CAR_MODELS[(catIdx * 3 + i) % CAR_MODELS.length];
    const imgIndex1 = (catIdx * 2 + i) % UNSPLASH_IMAGES.length;
    const imgIndex2 = (imgIndex1 + 3) % UNSPLASH_IMAGES.length;
    const imgIndex3 = (imgIndex1 + 6) % UNSPLASH_IMAGES.length;

    let dailyPrice = modelTemplate.basePrice + (i % 5) * 200;
    let weeklyPrice = Math.round(dailyPrice * 6 * 0.8 / 100) * 100; // 20% weekly discount
    let monthlyPrice = Math.round(dailyPrice * 24 * 0.6 / 500) * 500; // 40% monthly discount

    vehicles.push({
      id: vId,
      title: `${modelTemplate.brand} ${modelTemplate.model} — Edition ${String.fromCharCode(65 + (i % 8))}`,
      slug: `${cat.id}-${vId.toLowerCase()}`,
      brand: modelTemplate.brand,
      model: modelTemplate.model,
      categoryId: cat.id,
      categoryName: cat.name,
      year: 2025 + (i % 2),
      dailyPriceAED: dailyPrice,
      weeklyPriceAED: weeklyPrice,
      monthlyPriceAED: monthlyPrice,
      horsepower: modelTemplate.hp,
      acceleration0100: modelTemplate.zeroHundred,
      topSpeed: modelTemplate.topSpeed,
      engineType: modelTemplate.model.includes('Electric') ? 'Dual Permanent Magnet E-Motors' : (modelTemplate.model.includes('Hybrid') ? 'V8 Bi-Turbo Twin-Electric Hybrid' : 'V12 Twin-Turbocharger Engine'),
      transmission: '8-Speed Dual-Clutch F1 Paddle Shift',
      seats: modelTemplate.model.includes('Cullinan') || modelTemplate.model.includes('Urus') || modelTemplate.model.includes('G63') || modelTemplate.model.includes('DBX') || modelTemplate.model.includes('Range Rover') ? 5 : (modelTemplate.model.includes('Phantom') || modelTemplate.model.includes('Maybach') || modelTemplate.model.includes('Flying Spur') ? 4 : 2),
      doors: modelTemplate.model.includes('SUV') || modelTemplate.model.includes('Sedan') || modelTemplate.model.includes('Phantom') || modelTemplate.model.includes('Maybach') ? 4 : 2,
      freeDailyKm: 250,
      securityDepositAED: 0, // 0 Deposit Guarantee
      insuranceIncluded: 'Comprehensive Full Comprehensive Cover with Zero Excess Option',
      chauffeurAvailable: true,
      tarmacDelivery: 'Dubai Airport (DXB & DWC) VIP Terminal 3 Direct Tarmac Handover',
      deliverySpeed: 'Under 30 Minutes Anywhere in Dubai (Palm, Downtown, Marina)',
      heroImage: UNSPLASH_IMAGES[imgIndex1],
      gallery: [
        UNSPLASH_IMAGES[imgIndex1],
        UNSPLASH_IMAGES[imgIndex2],
        UNSPLASH_IMAGES[imgIndex3]
      ],
      isExclusiveReserve: i % 4 === 0,
      isFeatured: i < 3,
      rating: +(4.9 + ((idCounter * 0.01) % 0.1)).toFixed(1),
      reviewsCount: 42 + (idCounter * 4),
      description: `Experience supreme automotive exhilaration with this immaculate ${modelTemplate.brand} ${modelTemplate.model}. Engineered to deliver ${modelTemplate.hp} HP and blistering ${modelTemplate.zeroHundred} 0-100 km/h acceleration, this flagship vehicle features bespoke hand-stitched leather, advanced telemetry, sports exhaust acoustics, and seamless 0-deposit RTA-compliant leasing in Dubai.`,
      features: [
        'Akrapovič / Active Sport Valved Titanium Exhaust System',
        'Carbon Fiber Aerodynamic Package & Ceramic Composite Brakes',
        'Burmester / Bang & Olufsen 3D Bespoke Surround Sound',
        'Apple CarPlay Wireless, 360° Surround Camera & Night Vision',
        'Custom Diamond Quilted Italian Alcantara & Nappa Leather Interior',
        'VIP Chauffeur Option with Police-Cleared British & Multilingual Drivers'
      ],
      rentalTerms: [
        'Valid Passport / Emirates ID & GCC or International Driving Permit (IDP)',
        'Minimum Age: 21 Years (25 for Track Supercars)',
        'Zero Cash Deposit option available with Card Pre-Authorization or Crypto',
        'Complimentary 250 KM per day allowance with rollover on weekly leases'
      ]
    });

    idCounter++;
  }
});

const fileContent = `export interface ExoticVehicle {
  id: string;
  title: string;
  slug: string;
  brand: string;
  model: string;
  categoryId: string;
  categoryName: string;
  year: number;
  dailyPriceAED: number;
  weeklyPriceAED: number;
  monthlyPriceAED: number;
  horsepower: number;
  acceleration0100: string;
  topSpeed: string;
  engineType: string;
  transmission: string;
  seats: number;
  doors: number;
  freeDailyKm: number;
  securityDepositAED: number;
  insuranceIncluded: string;
  chauffeurAvailable: boolean;
  tarmacDelivery: string;
  deliverySpeed: string;
  heroImage: string;
  gallery: string[];
  isExclusiveReserve: boolean;
  isFeatured: boolean;
  rating: number;
  reviewsCount: number;
  description: string;
  features: string[];
  rentalTerms: string[];
}

export const EXOTIC_VEHICLES_CATALOG: ExoticVehicle[] = ${JSON.stringify(vehicles, null, 2)};
`;

const outputPath = path.join(__dirname, '../src/data/carRentalCatalogData.ts');
fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully generated ${vehicles.length} exotic vehicles to ${outputPath}`);
