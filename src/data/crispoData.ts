export interface CrispoProduct {
  id: string;
  code: string;
  name: string;
  category: 'Chicken' | 'Burgers' | 'Wings' | 'Tenders' | 'Buckets' | 'Combos' | 'Sides' | 'Desserts' | 'Drinks';
  description: string;
  priceAED: number;
  calories: number;
  isBestSeller?: boolean;
  isSpicy?: boolean;
  image: string;
  ingredients: string[];
  allergens: string[];
}

export interface CartItem {
  product: CrispoProduct;
  quantity: number;
  selectedAddons?: { name: string; priceAED: number }[];
  totalPrice: number;
}

export interface CrispoCombo {
  id: string;
  name: string;
  includes: string[];
  originalPriceAED: number;
  comboPriceAED: number;
  savingsAED: number;
  image: string;
  badge: string;
}

export interface CrispoOffer {
  id: string;
  title: string;
  tagline: string;
  code: string;
  discount: string;
  validity: string;
  image: string;
}

export interface CrispoLocation {
  id: string;
  name: string;
  address: string;
  distanceKm: string;
  deliveryTimeMins: string;
  closingTime: string;
  phone: string;
  isOpen: boolean;
}

export const CRISPO_BRAND = {
  name: 'CRISPO',
  tagline: 'CRAVE. CRUNCH. REPEAT.',
  subheading: 'Golden, extra-crispy, hand-breaded fried chicken, gourmet burgers, loaded fries, and signature dips made fresh to order.',
  phone: '600 588 900',
  whatsapp: 'https://wa.me/971509988112?text=Hello%20Crispo,%20I%20would%20like%20to%20order%20fried%20chicken!',
  appDownloadAndroid: '#',
  appDownloadIOS: '#',
  deliveryFeeAED: 7,
  taxRate: 0.05,
  avgDeliveryTimeMinutes: '28 Mins',
  satisfactionRate: '99.4%'
};

export const CRISPO_PRODUCTS: CrispoProduct[] = [
  // CHICKEN
  {
    id: 'orig-crunch-4',
    code: 'C-01',
    name: 'Original Crunch Box (4 Pcs)',
    category: 'Chicken',
    description: '4 pieces of signature hand-breaded crispy fried chicken, golden fries, fresh coleslaw, and 1 dip.',
    priceAED: 39,
    calories: 840,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1200&auto=format&fit=crop',
    ingredients: ['Fresh UAE Farmed Chicken', 'Crispo 11-Spice Secret Marinade', 'Double-Crust Floury Coating'],
    allergens: ['Gluten', 'Egg', 'Dairy']
  },
  {
    id: 'spicy-crunch-4',
    code: 'C-02',
    name: 'Fiery Inferno Chicken (4 Pcs)',
    category: 'Chicken',
    description: '4 pieces of hot & spicy habanero infused crispy fried chicken with spicy dip and seasoned fries.',
    priceAED: 42,
    calories: 890,
    isSpicy: true,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1200&auto=format&fit=crop',
    ingredients: ['Fresh Chicken', 'Ghost Pepper & Habanero Rub', 'Spicy Crispo Flour'],
    allergens: ['Gluten', 'Capsaicin']
  },
  {
    id: 'crunch-strips-6',
    code: 'C-03',
    name: 'Crispo Golden Tenders (6 Pcs)',
    category: 'Tenders',
    description: '6 100% boneless chicken breast tenders dipped in buttermilk, fried golden with 2 dipping sauces.',
    priceAED: 34,
    calories: 620,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=1200&auto=format&fit=crop',
    ingredients: ['Whole Breast Fillet', 'Buttermilk Marinade', 'Golden Panko Crust'],
    allergens: ['Gluten', 'Dairy']
  },

  // BURGERS
  {
    id: 'crispo-burger-classic',
    code: 'B-01',
    name: 'The Original Crispo Burger',
    category: 'Burgers',
    description: 'Jumbo extra-crispy chicken thigh fillet, melted cheddar cheese, dill pickles, and Crispo secret mayo on toasted brioche.',
    priceAED: 29,
    calories: 720,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=1200&auto=format&fit=crop',
    ingredients: ['Crispy Thigh Fillet', 'Aged Yellow Cheddar', 'Dill Pickles', 'Brioche Bun'],
    allergens: ['Gluten', 'Dairy', 'Egg', 'Sesame']
  },
  {
    id: 'fire-burger-double',
    code: 'B-02',
    name: 'Double Fire Crunch Burger',
    category: 'Burgers',
    description: 'Two fiery spicy fillets stacked high with jalapeños, pepperjack cheese, hot honey glaze, and spicy mayo.',
    priceAED: 38,
    calories: 980,
    isSpicy: true,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop',
    ingredients: ['Double Spicy Fillets', 'Jalapeños', 'Pepperjack Cheese', 'Hot Honey Mayo'],
    allergens: ['Gluten', 'Dairy', 'Capsaicin']
  },
  {
    id: 'smokey-bbq-burger',
    code: 'B-03',
    name: 'Smokey Bacon & BBQ Burger',
    category: 'Burgers',
    description: 'Crispy chicken fillet topped with smoked beef bacon, crispy onion rings, BBQ drizzle, and melted cheese.',
    priceAED: 35,
    calories: 860,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1200&auto=format&fit=crop',
    ingredients: ['Crispy Fillet', 'Crispy Beef Bacon', 'Smokey Texas BBQ', 'Onion Rings'],
    allergens: ['Gluten', 'Dairy', 'Soy']
  },

  // WINGS
  {
    id: 'hot-wings-8',
    code: 'W-01',
    name: 'Hot & Spicy Wings (8 Pcs)',
    category: 'Wings',
    description: '8 crispy fried jumbo wings tossed in buffalo hot sauce or served dry rub spicy.',
    priceAED: 32,
    calories: 680,
    isSpicy: true,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=1200&auto=format&fit=crop',
    ingredients: ['Jumbo Chicken Wings', 'Buffalo Cayenne Glaze', 'Blue Cheese Dip'],
    allergens: ['Gluten', 'Dairy']
  },
  {
    id: 'bbq-glaze-wings-8',
    code: 'W-02',
    name: 'Honey BBQ Wings (8 Pcs)',
    category: 'Wings',
    description: '8 jumbo wings coated in sticky honey garlic glaze and sprinkled with toasted sesame seeds.',
    priceAED: 34,
    calories: 710,
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=1200&auto=format&fit=crop',
    ingredients: ['Jumbo Wings', 'Sticky Honey Garlic Glaze', 'Toasted Sesame'],
    allergens: ['Gluten', 'Sesame', 'Soy']
  },

  // BUCKETS
  {
    id: 'family-bucket-10',
    code: 'BK-01',
    name: 'Family Crunch Bucket (10 Pcs)',
    category: 'Buckets',
    description: '10 pieces of crispy chicken, 4 regular fries, 2 large coleslaw bowls, and 4 soft drinks.',
    priceAED: 89,
    calories: 2800,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1200&auto=format&fit=crop',
    ingredients: ['10 Pcs Chicken (Mix of Thigh, Drumstick, Breast)', '4x Seasoned Fries', '2x Coleslaw', '4x Drinks'],
    allergens: ['Gluten', 'Dairy', 'Egg']
  },
  {
    id: 'mega-party-bucket-18',
    code: 'BK-02',
    name: 'Mega Party Feast Bucket (18 Pcs)',
    category: 'Buckets',
    description: '18 pieces of mixed chicken, 12 hot wings, 4 jumbo fries, 4 coleslaws, and 2L drink bottle.',
    priceAED: 149,
    calories: 4600,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1200&auto=format&fit=crop',
    ingredients: ['18 Pcs Crispy Chicken', '12 Hot Wings', '4 Large Fries', '2L Pepsi/Coca-Cola'],
    allergens: ['Gluten', 'Dairy', 'Egg']
  },

  // SIDES
  {
    id: 'loaded-cheese-fries',
    code: 'S-01',
    name: 'Ultimate Loaded Cheese Fries',
    category: 'Sides',
    description: 'Golden skin-on fries smothered in hot liquid cheddar, crispy chicken tender bits, jalapeños, and ranch.',
    priceAED: 24,
    calories: 640,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=1200&auto=format&fit=crop',
    ingredients: ['Skin-on Potato Fries', 'Liquid Cheddar Sauce', 'Chicken Bits', 'Jalapeños', 'Ranch'],
    allergens: ['Dairy', 'Gluten']
  },
  {
    id: 'crispy-onion-rings',
    code: 'S-02',
    name: 'Beer-Battered Onion Rings',
    category: 'Sides',
    description: 'Thick cut sweet onion rings fried in extra-crunchy batter served with garlic mayo dip.',
    priceAED: 16,
    calories: 380,
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=1200&auto=format&fit=crop',
    ingredients: ['Sweet Spanish Onions', 'Crispy Batter', 'Garlic Aioli'],
    allergens: ['Gluten', 'Egg']
  },
  {
    id: 'creamy-coleslaw',
    code: 'S-03',
    name: 'Classic Creamy Coleslaw',
    category: 'Sides',
    description: 'Fresh shredded cabbage and carrots tossed in sweet house-made mayo dressing.',
    priceAED: 10,
    calories: 180,
    image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?q=80&w=1200&auto=format&fit=crop',
    ingredients: ['Green Cabbage', 'Carrots', 'House Mayo Dressing'],
    allergens: ['Egg']
  },

  // DESSERTS & DRINKS
  {
    id: 'chocolate-lava-cake',
    code: 'D-01',
    name: 'Hot Chocolate Lava Cake',
    category: 'Desserts',
    description: 'Warm chocolate fudge cake with a molten Belgian chocolate center, served with vanilla soft serve.',
    priceAED: 18,
    calories: 450,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop',
    ingredients: ['Belgian Dark Chocolate', 'Vanilla Ice Cream', 'Cocoa Powder'],
    allergens: ['Gluten', 'Dairy', 'Egg']
  },
  {
    id: 'churro-bites-6',
    code: 'D-02',
    name: 'Cinnamon Sugar Churro Bites',
    category: 'Desserts',
    description: '6 crispy Spanish churro bites dusted in cinnamon sugar served with warm dulce de leche dip.',
    priceAED: 16,
    calories: 390,
    image: 'https://images.unsplash.com/photo-1624371414361-e670edf4898d?q=80&w=1200&auto=format&fit=crop',
    ingredients: ['Churro Dough', 'Cinnamon Sugar', 'Dulce de Leche Caramel'],
    allergens: ['Gluten', 'Dairy']
  },
  {
    id: 'crispo-lemonade-shake',
    code: 'DR-01',
    name: 'Fresh Mint Lemonade (Large)',
    category: 'Drinks',
    description: 'Freshly squeezed lemons crushed with fresh mint leaves and crushed ice.',
    priceAED: 14,
    calories: 140,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop',
    ingredients: ['Fresh Lemon Juice', 'Fresh Mint', 'Cane Sugar', 'Crushed Ice'],
    allergens: []
  },
  {
    id: 'soft-drink-large',
    code: 'DR-02',
    name: 'Fountain Soft Drink (Pepsi / 7UP)',
    category: 'Drinks',
    description: 'Chilled fountain drink of choice in a large 500ml cup.',
    priceAED: 9,
    calories: 190,
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=1200&auto=format&fit=crop',
    ingredients: ['Carbonated Water', 'Flavor Syrup', 'Ice'],
    allergens: []
  }
];

export const CRISPO_COMBOS: CrispoCombo[] = [
  {
    id: 'combo-crispo-box',
    name: 'CRISPO SOLO BOX',
    includes: ['2 Pcs Crispy Chicken', '2 Spicy Hot Wings', 'Regular Fries', 'Chilled Drink'],
    originalPriceAED: 44,
    comboPriceAED: 35,
    savingsAED: 9,
    badge: 'SOLO VALUE',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'combo-family-feast',
    name: 'FAMILY CRUNCH FEAST',
    includes: ['8 Pcs Chicken', '4 Regular Fries', '4 Chilled Drinks', '2 Coleslaw Bowls'],
    originalPriceAED: 98,
    comboPriceAED: 79,
    savingsAED: 19,
    badge: 'POPULAR FAMILY CHOICE',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'combo-ultimate-crunch',
    name: 'ULTIMATE PARTY CRUNCH',
    includes: ['4 Pcs Chicken', '4 Hot Wings', '2 Crispo Burgers', '2 Loaded Fries', '4 Drinks'],
    originalPriceAED: 145,
    comboPriceAED: 119,
    savingsAED: 26,
    badge: 'MEGA SAVINGS',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=1200&auto=format&fit=crop'
  }
];

export const CRISPO_OFFERS: CrispoOffer[] = [
  {
    id: 'off-1',
    title: 'MONDAY CRUNCH BOGO',
    tagline: 'Buy 1 Signature Crispo Burger & Get 1 FREE every Monday after 6 PM!',
    code: 'BOGOMON',
    discount: 'BUY 1 GET 1',
    validity: 'Valid Every Monday',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'off-2',
    title: 'FAMILY FRIDAY 20% OFF',
    tagline: 'Get 20% off all 10-piece and 18-piece Family Buckets for weekend delivery.',
    code: 'CRUNCH20',
    discount: '20% OFF',
    validity: 'Valid Fri - Sun',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'off-3',
    title: 'LATE NIGHT FREE FRIES',
    tagline: 'Free Loaded Cheese Fries on all orders over AED 60 placed after 10:00 PM.',
    code: 'NIGHTCRUNCH',
    discount: 'FREE FRIES',
    validity: 'Valid Daily 10 PM - 3 AM',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=1200&auto=format&fit=crop'
  }
];

export const CRISPO_LOCATIONS: CrispoLocation[] = [
  {
    id: 'loc-downtown',
    name: 'CRISPO Downtown Dubai',
    address: 'Boulevard Plaza Tower 2, Sheikh Mohammed bin Rashid Blvd, Dubai',
    distanceKm: '1.8 km',
    deliveryTimeMins: '20–30 Mins',
    closingTime: 'Open until 03:00 AM',
    phone: '+971 4 399 2010',
    isOpen: true
  },
  {
    id: 'loc-marina',
    name: 'CRISPO Dubai Marina',
    address: 'Marina Walk, Ground Floor, Promenade 14, Dubai Marina',
    distanceKm: '4.2 km',
    deliveryTimeMins: '25–35 Mins',
    closingTime: 'Open until 02:00 AM',
    phone: '+971 4 455 3020',
    isOpen: true
  },
  {
    id: 'loc-mirdif',
    name: 'CRISPO Mirdif City Center',
    address: 'Food Court Level 1, City Centre Mirdif, Dubai',
    distanceKm: '8.5 km',
    deliveryTimeMins: '30–40 Mins',
    closingTime: 'Open until 12:00 AM Midnight',
    phone: '+971 4 288 4030',
    isOpen: true
  }
];

export const MOCK_ORDER_TRACKING = {
  orderId: 'CRP-48291',
  customerName: 'Sultan Al-Amri',
  deliveryAddress: 'Business Bay, Executive Towers, Tower B, Apt 1408',
  status: 'Out for Delivery',
  driverName: 'Alex Driver',
  driverPhone: '+971 50 771 9021',
  estimatedArrival: '18:42 GST (In 14 Mins)',
  itemSummary: '1x Family Crunch Bucket, 1x Loaded Cheese Fries, 4x Pepsi',
  progressSteps: [
    { title: 'Order Confirmed', time: '18:14', completed: true },
    { title: 'Kitchen Fresh Prep', time: '18:18', completed: true },
    { title: 'Fresh-Lock Packing', time: '18:24', completed: true },
    { title: 'Picked Up by Driver Alex', time: '18:28', completed: true },
    { title: 'Out for Delivery', time: '18:32', completed: true },
    { title: 'Delivered to Doorstep', time: 'Est. 18:42', completed: false },
  ]
};

export const REWARDS_REDEEM_TIERS = [
  { pointsNeeded: 100, reward: 'Free Large Mint Lemonade or Soft Drink', icon: 'CupSoda' },
  { pointsNeeded: 250, reward: 'Free Loaded Cheese Fries', icon: 'Utensils' },
  { pointsNeeded: 500, reward: 'Free Signature Crispo Burger', icon: 'Sandwich' },
  { pointsNeeded: 1000, reward: 'Free 10-Piece Family Crunch Bucket', icon: 'Gift' }
];

export const CUSTOMER_REVIEWS = [
  {
    id: 'rev-1',
    name: 'Omar Al-Hassan',
    rating: 5,
    location: 'Dubai Marina',
    review: 'Hands down the crispiest fried chicken in Dubai! Arrived steaming hot in 22 minutes. The loaded cheese fries are addictive.',
    orderType: 'Family Bucket Delivery'
  },
  {
    id: 'rev-2',
    name: 'Sarah Jenkins',
    rating: 5,
    location: 'Downtown Dubai',
    review: 'The Crispo Double Fire Burger is insane! Crispy on the outside, juicy inside, and the hot honey sauce is incredible.',
    orderType: 'Burger & Wings Pickup'
  },
  {
    id: 'rev-3',
    name: 'Tariq & Family',
    rating: 5,
    location: 'Mirdif',
    review: 'We order the 18-piece Mega Party Feast every Friday night. Always fresh, clean oil taste, and the kids love the churro bites.',
    orderType: 'Dine-In Family Feast'
  }
];

export const CRISPO_FAQS = [
  {
    question: 'How can I place a delivery order on CRISPO?',
    answer: 'You can order directly through our interactive online menu, select your preferred items, customize your dips and addons, and proceed to checkout for instant home delivery.'
  },
  {
    question: 'How fast is CRISPO delivery in Dubai?',
    answer: 'Our average delivery time is 28 minutes. All food is packed in heat-retaining Fresh-Lock thermal boxes to ensure your chicken arrives piping hot and crispy.'
  },
  {
    question: 'Is all CRISPO chicken 100% Halal and fresh?',
    answer: 'Yes! We source 100% farm-fresh Halal chicken daily. Our chicken is never frozen, marinated in our secret 11-spice blend, and hand-breaded fresh per order.'
  },
  {
    question: 'How does the CRISPO Rewards program work?',
    answer: 'You earn 1 Crunch Point for every AED 1 spent on delivery or pickup orders. Accumulate points to unlock free drinks, loaded fries, burgers, and family buckets.'
  },
  {
    question: 'Can I customize my burger or meal options?',
    answer: 'Absolutely! Our interactive Meal Builder and product modal allow you to add extra cheese, extra hot sauce, upgrade to loaded fries, or double your chicken fillets.'
  }
];
