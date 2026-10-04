const fs = require('fs');
const path = require('path');

// 12 Prime UAE Communities
const COMMUNITIES = [
  { id: 'palm-jumeirah', name: 'Palm Jumeirah', emirate: 'Dubai', avgSqftPrice: 3850, type: 'Waterfront / Ultra-Luxury Island' },
  { id: 'emirates-hills', name: 'Emirates Hills', emirate: 'Dubai', avgSqftPrice: 4200, type: 'Golf Estate / Private Sanctuary' },
  { id: 'jumeirah-bay-island', name: 'Jumeirah Bay Island', emirate: 'Dubai', avgSqftPrice: 6500, type: 'Ultra-Exclusive Island / Bulgari Enclave' },
  { id: 'downtown-dubai', name: 'Downtown Dubai', emirate: 'Dubai', avgSqftPrice: 3100, type: 'Metropolitan / Burj Khalifa District' },
  { id: 'dubai-hills-estate', name: 'Dubai Hills Estate', emirate: 'Dubai', avgSqftPrice: 2450, type: 'Green Heart / Championship Golf' },
  { id: 'saadiyat-island', name: 'Saadiyat Island', emirate: 'Abu Dhabi', avgSqftPrice: 2800, type: 'Cultural District / Louvre & Guggenheim' },
  { id: 'al-barari', name: 'Al Barari', emirate: 'Dubai', avgSqftPrice: 2200, type: 'Botanical Oasis / Private Green Sanctuaries' },
  { id: 'difc', name: 'DIFC & Downtown Financial', emirate: 'Dubai', avgSqftPrice: 3400, type: 'Financial & Art District / High-Rise Penthouses' },
  { id: 'bluewaters-island', name: 'Bluewaters Island', emirate: 'Dubai', avgSqftPrice: 3600, type: 'Island Lifestyle / Ain Dubai Waterfront' },
  { id: 'palm-jebel-ali', name: 'Palm Jebel Ali', emirate: 'Dubai', avgSqftPrice: 2950, type: 'Next-Gen Mega Island / Future Super Prime' },
  { id: 'pearl-jumeirah', name: 'Pearl Jumeirah', emirate: 'Dubai', avgSqftPrice: 3300, type: 'Bespoke Coastal / Nikki Beach Enclave' },
  { id: 'dubai-marina', name: 'Dubai Marina & Harbour', emirate: 'Dubai', avgSqftPrice: 2600, type: 'Superyacht Marina / High-Rise Skylines' }
];

const DEVELOPERS = ['Emaar Properties', 'Omniyat Ultra-Luxury', 'Nakheel Signature', 'Aldar Properties', 'Sobha Realty', 'Meraas Luxury', 'Select Group', 'Ellington Properties'];

const PROPERTY_TYPES = ['Villa', 'Penthouse', 'Mansion', 'Sky Villa', 'Duplex', 'Waterfront Estate'];
const VIEWS = ['Full Arabian Gulf & Horizon', 'Burj Khalifa & Downtown Skyline', 'Championship Golf Course', 'Private Lagoon & Beachfront', 'Dubai Marina Superyacht Basin', 'Saadiyat Cultural & Louvre View', 'Al Barari Botanical Sanctuary', 'Ain Dubai & Island Skyline'];
const STATUSES = ['Ready for Occupancy', 'Off-Plan Q4 2026', 'Off-Plan Q2 2027', 'Off-Plan Q4 2027', 'Off-Plan Q1 2028', 'Ready for Handover'];

const UNSPLASH_IMAGES = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1502005229762-ee1b2da9c40f?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85'
];

const ARCHITECTURAL_TITLES = [
  'The Sovereign Horizon Waterfront Villa',
  'The Elysian Crest Sky Penthouse',
  'The Solaris Royal Palm Estate',
  'The Aurelia Crown Sanctuary',
  'The Lumina Mirrored Golf Residence',
  'The Zenith Saadiyat Lagoon Haven',
  'The Grand Opus Triplex Penthouse',
  'The Azure Bay Signature Villa',
  'The Seraphim Botanic Palace',
  'The Celestia Super-Prime Sky Villa',
  'The Mirage Riviera Beachfront Manor',
  'The Obsidian Ultra-Luxury Penthouse',
  'The Valhalla Private Peninsula Mansion',
  'The Bellagio Palm Island Estate',
  'The Horizon Crest Marina Penthouse',
  'The Imperial Garden Sanctuary',
  'The Paramount Marina Skyline Sky Duplex',
  'The Platinum Saadiyat Beach Palace'
];

const BROKERS = [
  { name: 'Alexander Vance', phone: '+971 50 882 1944', email: 'a.vance@luxestate.ae', brn: 'BRN-48291' },
  { name: 'Elena Rostova', phone: '+971 52 441 9023', email: 'e.rostova@luxestate.ae', brn: 'BRN-39104' },
  { name: 'Tariq Al-Mansoor', phone: '+971 55 901 8832', email: 't.almansoor@luxestate.ae', brn: 'BRN-51209' },
  { name: 'Sophia Sterling', phone: '+971 58 319 7721', email: 's.sterling@luxestate.ae', brn: 'BRN-62840' }
];

const LUXURY_AMENITIES = [
  'Private Infinity Pool',
  'Private Beach Access',
  'Superyacht Berth / Marina Dock',
  'Subterranean 6-Car Gallery',
  'Private Wellness Spa & Hammam',
  'Rooftop Stargazing Lounge',
  'Cinema Room with Dolby Atmos',
  'Private Temperature-Controlled Wine Cellar',
  'Dual Professional Chef Kitchens',
  'Private High-Speed Elevator',
  'Smart Home Automation (Crestron / Lutron)',
  'Dedicated Staff Quarters (Maid + Driver)',
  'Bespoke Italian Marble Finishes',
  'Zen Landscaped Gardens & Waterfalls'
];

function getRandomItems(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const properties = [];
let idCounter = 1;

// Generate exactly 18 properties for each of the 12 communities = 216 luxury properties
COMMUNITIES.forEach((comm, cIndex) => {
  for (let i = 0; i < 18; i++) {
    const propId = `LX-${String(idCounter).padStart(3, '0')}`;
    const baseTitle = ARCHITECTURAL_TITLES[i % ARCHITECTURAL_TITLES.length];
    const type = PROPERTY_TYPES[i % PROPERTY_TYPES.length];
    const developer = DEVELOPERS[(cIndex + i) % DEVELOPERS.length];
    const broker = BROKERS[(cIndex + i) % BROKERS.length];
    const status = STATUSES[(cIndex + i) % STATUSES.length];
    const view = VIEWS[(cIndex + i) % VIEWS.length];
    
    // Realistic AED pricing based on luxury tiers
    let bedrooms = 3 + (i % 6); // 3 to 8 bedrooms
    let bathrooms = bedrooms + (i % 3); // 3 to 10 bathrooms
    let builtUpAreaSqft = 4500 + (i * 750) + (cIndex * 400); // 4,500 to 22,000 sqft
    let plotAreaSqft = type.includes('Villa') || type.includes('Mansion') || type.includes('Estate') 
      ? builtUpAreaSqft + 3500 + (i * 500) 
      : 0;
    
    let pricePerSqft = comm.avgSqftPrice + Math.floor((Math.sin(idCounter) * 400));
    let rawPrice = builtUpAreaSqft * pricePerSqft;
    // Round to nearest 250k AED
    let priceAED = Math.round(rawPrice / 250000) * 250000;
    if (priceAED < 8500000) priceAED = 8500000 + (i * 650000);
    
    let originalPrice = Math.random() > 0.6 ? Math.round((priceAED * 1.08) / 250000) * 250000 : undefined;
    let rentalYieldPct = +(5.2 + ((idCounter * 0.17) % 3.4)).toFixed(1);
    let capitalAppreciation1Yr = +(12.5 + ((idCounter * 0.31) % 11.2)).toFixed(1);

    const imgIndex1 = (cIndex * 2 + i) % UNSPLASH_IMAGES.length;
    const imgIndex2 = (imgIndex1 + 3) % UNSPLASH_IMAGES.length;
    const imgIndex3 = (imgIndex1 + 7) % UNSPLASH_IMAGES.length;
    const imgIndex4 = (imgIndex1 + 11) % UNSPLASH_IMAGES.length;

    const property = {
      id: propId,
      title: `${baseTitle} — Frond ${String.fromCharCode(65 + (i % 16))}`,
      slug: `${comm.id}-${propId.toLowerCase()}`,
      communityId: comm.id,
      communityName: comm.name,
      emirate: comm.emirate,
      type: type,
      developer: developer,
      status: status,
      priceAED: priceAED,
      originalPriceAED: originalPrice,
      pricePerSqftAED: Math.round(priceAED / builtUpAreaSqft),
      bedrooms: bedrooms,
      bathrooms: bathrooms,
      builtUpAreaSqft: builtUpAreaSqft,
      plotAreaSqft: plotAreaSqft,
      view: view,
      furnishing: i % 3 === 0 ? 'Bespoke Poliform / Minotti Fully Furnished' : (i % 3 === 1 ? 'Designer Fitted by Versace Home' : 'Turnkey Luxury Unfurnished'),
      parkingSpaces: 2 + (bedrooms > 5 ? 4 : 2),
      goldenVisaEligible: priceAED >= 2000000,
      dldEscrowSecured: true,
      serviceChargeSqftAED: 18 + (i % 12),
      completionDate: status.includes('Ready') ? 'Completed & Handed Over' : status.replace('Off-Plan ', ''),
      rentalYieldPct: rentalYieldPct,
      capitalAppreciation1Yr: capitalAppreciation1Yr,
      featured: i < 3,
      isExclusive: i % 4 === 0,
      isWaterfront: comm.type.includes('Waterfront') || comm.type.includes('Island') || i % 2 === 0,
      heroImage: UNSPLASH_IMAGES[imgIndex1],
      gallery: [
        UNSPLASH_IMAGES[imgIndex1],
        UNSPLASH_IMAGES[imgIndex2],
        UNSPLASH_IMAGES[imgIndex3],
        UNSPLASH_IMAGES[imgIndex4]
      ],
      description: `A monumental architectural triumph situated in the prestigious enclave of ${comm.name}, ${comm.emirate}. This ultra-prime ${type.toLowerCase()} showcases bespoke Italian marble flooring, soaring double-height ceilings with triple-glazed floor-to-ceiling glass, and breathtaking views of ${view.toLowerCase()}. Designed with uncompromising craftsmanship, the estate features expansive indoor-outdoor entertaining terraces, an Olympic-length private infinity pool, a dedicated wellness sanctuary, and master-level security automation.`,
      architecturalHighlights: [
        'Custom floor-to-ceiling Schuco triple-glazed thermal curtain walls',
        'Bookmatched Statuario and Calacatta Oro Italian marble slabs',
        'Gaggenau 400 Series and Sub-Zero master chef kitchen appliances',
        'Bespoke custom joinery with integrated ambient perimeter lighting',
        'Bio-climatic automated pergola with integrated mist cooling system',
        'Integrated multi-zone Crestron home intelligence with biometric entry'
      ],
      amenities: getRandomItems(LUXURY_AMENITIES, 8),
      assignedBroker: broker,
      floorPlans: [
        {
          level: 'Ground Floor',
          areaSqft: Math.round(builtUpAreaSqft * 0.45),
          description: 'Formal reception salon, family living atrium, show kitchen, preparation chef kitchen, guest suite, powder room, staff quarters, and terrace deck.'
        },
        {
          level: 'First Floor',
          areaSqft: Math.round(builtUpAreaSqft * 0.38),
          description: 'Master bedroom suite with dual walk-in dressing salons, 3 junior ensuite bedrooms, private study, and sunset reading gallery.'
        },
        {
          level: 'Rooftop Observatory & Deck',
          areaSqft: Math.round(builtUpAreaSqft * 0.17),
          description: 'Sky lounge, plunge jacuzzi, outdoor teppanyaki bar, and panoramic 360-degree skyline observation terrace.'
        }
      ],
      paymentPlan: status.includes('Ready') ? [
        { milestone: 'Down Payment on Reservation', percentage: 20, dueTiming: 'Immediate' },
        { milestone: 'Title Deed Transfer & Balance', percentage: 80, dueTiming: 'Within 30 Days' }
      ] : [
        { milestone: 'Booking Deposit', percentage: 10, dueTiming: 'Immediate' },
        { milestone: 'During Construction (Linked to DLD Milestones)', percentage: 50, dueTiming: 'Over 24 Months' },
        { milestone: 'Upon 100% Construction Completion & Key Handover', percentage: 40, dueTiming: 'Handover Date' }
      ]
    };

    properties.push(property);
    idCounter++;
  }
});

const fileContent = `import { LuxuryProperty } from './realEstateData';

export const LUXURY_PROPERTIES_CATALOG: LuxuryProperty[] = ${JSON.stringify(properties, null, 2)};
`;

const outputPath = path.join(__dirname, '../src/data/realEstateCatalogData.ts');
fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully generated ${properties.length} luxury properties to ${outputPath}`);
