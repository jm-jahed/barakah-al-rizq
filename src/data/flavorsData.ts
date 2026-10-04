// ============================================================
// FLAVORS — Premium Sweets & Bakers
// Bangladesh Market | BDT (৳) Currency Only
// Data: Brand Identity, Branches, Reviews, Occasions, Collections
// NOTE: All branch data is placeholder — update with actual client data
// ============================================================

export interface FlavorsBranch {
  id: string;
  name: string;
  shortName: string;
  area: string;
  address: string;
  phone: string;
  whatsapp: string;
  hours: {
    weekdays: string;
    weekends: string;
    friday?: string;
    note?: string;
  };
  deliveryAvailable: boolean;
  pickupAvailable: boolean;
  deliveryRadius: string;
  estimatedDelivery: string;
  deliveryFee: number;
  isMainBranch?: boolean;
  mapLink?: string;
}

export interface FlavorsReview {
  id: string;
  customerName: string;
  rating: number;
  reviewText: string;
  productPurchased: string;
  category: 'Cakes' | 'Sweets' | 'Bakery' | 'Frozen' | 'Corporate' | 'General';
  date: string;
  branch: string;
  verified: boolean;
}

export interface FlavorsOccasion {
  id: string;
  name: string;
  emoji: string;
  description: string;
  suggestedCategoryIds: string[];
  color: string;
}

export interface FlavorsCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  productCount?: number;
}

export interface FlavorsCollection {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  categoryIds: string[];
  badge?: string;
  accentColor: string;
}

export interface FlavorsEditorialArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  date: string;
}

export interface CakeBuilderOption {
  id: string;
  label: string;
  value: string;
  priceModifier: number;
  icon?: string;
}

export interface CakeBuilderStep {
  id: string;
  step: number;
  title: string;
  options: CakeBuilderOption[];
}

// ============================================================
// BRAND
// ============================================================

export const FLAVORS_BRAND = {
  name: 'FLAVORS',
  tagline: 'Premium Sweets & Bakers',
  description: 'Bangladesh\'s premier destination for luxury celebration cakes, authentic Bengali sweets, and artisanal bakery products. Crafted with passion, delivered with care.',
  mission: 'To elevate every celebration in Bangladesh with uncompromising quality and authentic taste.',
  phone: '+880 9600-000000',
  whatsapp: 'https://wa.me/8801700000000',
  email: 'hello@flavors.com.bd',
  website: 'www.flavors.com.bd',
  founded: '2008',
  branchCount: 15,
  productCount: '200+',
  currency: '৳',
  currencyCode: 'BDT',
  defaultDeliveryFee: 100,
  freeDeliveryAbove: 1500,
  socialMedia: {
    facebook: 'https://facebook.com/flavors.bd',
    instagram: 'https://instagram.com/flavors.bd',
    tiktok: 'https://tiktok.com/@flavors.bd',
  },
};

// ============================================================
// 15 BRANCHES — PLACEHOLDER DATA (UPDATE WITH ACTUAL CLIENT DATA)
// ============================================================

export const FLAVORS_BRANCHES: FlavorsBranch[] = [
  {
    id: 'gulshan-1',
    name: 'FLAVORS Gulshan-1',
    shortName: 'Gulshan-1',
    area: 'Gulshan',
    address: 'House 42, Road 11, Gulshan-1, Dhaka-1212',
    phone: '+880 1700-000001',
    whatsapp: 'https://wa.me/8801700000001',
    hours: {
      weekdays: '8:00 AM – 10:00 PM',
      weekends: '8:00 AM – 11:00 PM',
      friday: '2:00 PM – 11:00 PM',
    },
    deliveryAvailable: true,
    pickupAvailable: true,
    deliveryRadius: 'Gulshan, Banani, Baridhara, Niketan',
    estimatedDelivery: '40–60 min',
    deliveryFee: 100,
    isMainBranch: true,
    mapLink: 'https://maps.google.com/?q=Gulshan-1+Dhaka',
  },
  {
    id: 'gulshan-2',
    name: 'FLAVORS Gulshan-2',
    shortName: 'Gulshan-2',
    area: 'Gulshan',
    address: 'Shop 8, Gulshan Avenue, Gulshan-2 Circle, Dhaka-1212',
    phone: '+880 1700-000002',
    whatsapp: 'https://wa.me/8801700000002',
    hours: {
      weekdays: '8:00 AM – 10:00 PM',
      weekends: '8:00 AM – 11:00 PM',
      friday: '2:00 PM – 11:00 PM',
    },
    deliveryAvailable: true,
    pickupAvailable: true,
    deliveryRadius: 'Gulshan-2, DOHS, Baridhara DOHS',
    estimatedDelivery: '40–60 min',
    deliveryFee: 100,
    mapLink: 'https://maps.google.com/?q=Gulshan-2+Dhaka',
  },
  {
    id: 'banani',
    name: 'FLAVORS Banani',
    shortName: 'Banani',
    area: 'Banani',
    address: 'House 15, Road 7, Banani, Dhaka-1213',
    phone: '+880 1700-000003',
    whatsapp: 'https://wa.me/8801700000003',
    hours: {
      weekdays: '8:00 AM – 10:00 PM',
      weekends: '8:00 AM – 11:00 PM',
      friday: '2:00 PM – 11:00 PM',
    },
    deliveryAvailable: true,
    pickupAvailable: true,
    deliveryRadius: 'Banani, Mohakhali, Tejgaon',
    estimatedDelivery: '35–55 min',
    deliveryFee: 100,
    mapLink: 'https://maps.google.com/?q=Banani+Dhaka',
  },
  {
    id: 'dhanmondi-27',
    name: 'FLAVORS Dhanmondi 27',
    shortName: 'Dhanmondi 27',
    area: 'Dhanmondi',
    address: 'House 7, Road 27 (Old), Dhanmondi, Dhaka-1209',
    phone: '+880 1700-000004',
    whatsapp: 'https://wa.me/8801700000004',
    hours: {
      weekdays: '8:00 AM – 10:00 PM',
      weekends: '8:00 AM – 11:00 PM',
      friday: '2:00 PM – 11:00 PM',
    },
    deliveryAvailable: true,
    pickupAvailable: true,
    deliveryRadius: 'Dhanmondi, Lalmatia, Kalabagan',
    estimatedDelivery: '40–60 min',
    deliveryFee: 100,
    mapLink: 'https://maps.google.com/?q=Dhanmondi+27+Dhaka',
  },
  {
    id: 'dhanmondi-15',
    name: 'FLAVORS Dhanmondi 15',
    shortName: 'Dhanmondi 15',
    area: 'Dhanmondi',
    address: 'House 3, Road 15, Dhanmondi, Dhaka-1209',
    phone: '+880 1700-000005',
    whatsapp: 'https://wa.me/8801700000005',
    hours: {
      weekdays: '8:00 AM – 10:00 PM',
      weekends: '8:00 AM – 10:30 PM',
    },
    deliveryAvailable: true,
    pickupAvailable: true,
    deliveryRadius: 'Dhanmondi, Mirpur Road, Zigatola',
    estimatedDelivery: '40–60 min',
    deliveryFee: 100,
    mapLink: 'https://maps.google.com/?q=Dhanmondi+15+Dhaka',
  },
  {
    id: 'uttara',
    name: 'FLAVORS Uttara',
    shortName: 'Uttara',
    area: 'Uttara',
    address: 'House 12, Road 6, Sector 6, Uttara, Dhaka-1230',
    phone: '+880 1700-000006',
    whatsapp: 'https://wa.me/8801700000006',
    hours: {
      weekdays: '8:00 AM – 10:00 PM',
      weekends: '8:00 AM – 11:00 PM',
      friday: '2:00 PM – 11:00 PM',
    },
    deliveryAvailable: true,
    pickupAvailable: true,
    deliveryRadius: 'Uttara, Abdullahpur, Turag, Airport Road',
    estimatedDelivery: '45–70 min',
    deliveryFee: 120,
    mapLink: 'https://maps.google.com/?q=Uttara+Dhaka',
  },
  {
    id: 'mirpur-10',
    name: 'FLAVORS Mirpur 10',
    shortName: 'Mirpur-10',
    area: 'Mirpur',
    address: 'Shop 5, Mirpur-10 Circle, Mirpur, Dhaka-1216',
    phone: '+880 1700-000007',
    whatsapp: 'https://wa.me/8801700000007',
    hours: {
      weekdays: '8:00 AM – 10:00 PM',
      weekends: '8:00 AM – 10:30 PM',
    },
    deliveryAvailable: true,
    pickupAvailable: true,
    deliveryRadius: 'Mirpur-1 to 13, Pallabi, Kafrul',
    estimatedDelivery: '40–60 min',
    deliveryFee: 100,
    mapLink: 'https://maps.google.com/?q=Mirpur-10+Dhaka',
  },
  {
    id: 'mohammadpur',
    name: 'FLAVORS Mohammadpur',
    shortName: 'Mohammadpur',
    area: 'Mohammadpur',
    address: 'House 28, Town Hall Road, Mohammadpur, Dhaka-1207',
    phone: '+880 1700-000008',
    whatsapp: 'https://wa.me/8801700000008',
    hours: {
      weekdays: '8:00 AM – 10:00 PM',
      weekends: '8:00 AM – 10:30 PM',
    },
    deliveryAvailable: true,
    pickupAvailable: true,
    deliveryRadius: 'Mohammadpur, Adabar, Shyamoli, Bosila',
    estimatedDelivery: '40–60 min',
    deliveryFee: 100,
    mapLink: 'https://maps.google.com/?q=Mohammadpur+Dhaka',
  },
  {
    id: 'bashundhara',
    name: 'FLAVORS Bashundhara',
    shortName: 'Bashundhara',
    area: 'Bashundhara',
    address: 'Block B, Road 5, Bashundhara R/A, Dhaka-1229',
    phone: '+880 1700-000009',
    whatsapp: 'https://wa.me/8801700000009',
    hours: {
      weekdays: '8:00 AM – 10:00 PM',
      weekends: '8:00 AM – 11:00 PM',
      friday: '2:00 PM – 11:00 PM',
    },
    deliveryAvailable: true,
    pickupAvailable: true,
    deliveryRadius: 'Bashundhara, Baridhara, Aftabnagar',
    estimatedDelivery: '45–65 min',
    deliveryFee: 120,
    mapLink: 'https://maps.google.com/?q=Bashundhara+RA+Dhaka',
  },
  {
    id: 'baridhara',
    name: 'FLAVORS Baridhara',
    shortName: 'Baridhara',
    area: 'Baridhara',
    address: 'House 4, Road 2, DOHS Baridhara, Dhaka-1206',
    phone: '+880 1700-000010',
    whatsapp: 'https://wa.me/8801700000010',
    hours: {
      weekdays: '9:00 AM – 10:00 PM',
      weekends: '9:00 AM – 11:00 PM',
    },
    deliveryAvailable: true,
    pickupAvailable: true,
    deliveryRadius: 'Baridhara DOHS, Gulshan, Banani DOHS',
    estimatedDelivery: '40–55 min',
    deliveryFee: 100,
    mapLink: 'https://maps.google.com/?q=Baridhara+Dhaka',
  },
  {
    id: 'motijheel',
    name: 'FLAVORS Motijheel',
    shortName: 'Motijheel',
    area: 'Motijheel',
    address: '45 Motijheel C/A, Dhaka-1000',
    phone: '+880 1700-000011',
    whatsapp: 'https://wa.me/8801700000011',
    hours: {
      weekdays: '8:00 AM – 9:00 PM',
      weekends: '9:00 AM – 9:00 PM',
      note: 'Early closing on government holidays',
    },
    deliveryAvailable: true,
    pickupAvailable: true,
    deliveryRadius: 'Motijheel, Paltan, Dilkusha, Segunbagicha',
    estimatedDelivery: '35–50 min',
    deliveryFee: 100,
    mapLink: 'https://maps.google.com/?q=Motijheel+Dhaka',
  },
  {
    id: 'old-dhaka',
    name: 'FLAVORS Old Dhaka',
    shortName: 'Old Dhaka',
    area: 'Old Dhaka',
    address: 'Shakhari Patti Road, Laxmi Bazar, Old Dhaka, Dhaka-1100',
    phone: '+880 1700-000012',
    whatsapp: 'https://wa.me/8801700000012',
    hours: {
      weekdays: '8:00 AM – 9:00 PM',
      weekends: '8:00 AM – 10:00 PM',
    },
    deliveryAvailable: true,
    pickupAvailable: true,
    deliveryRadius: 'Old Dhaka, Lalbagh, Chawkbazar, Sutrapur',
    estimatedDelivery: '35–50 min',
    deliveryFee: 100,
    mapLink: 'https://maps.google.com/?q=Laxmi+Bazar+Dhaka',
  },
  {
    id: 'badda',
    name: 'FLAVORS Badda',
    shortName: 'Badda',
    area: 'Badda',
    address: 'South Badda Main Road, Dhaka-1212',
    phone: '+880 1700-000013',
    whatsapp: 'https://wa.me/8801700000013',
    hours: {
      weekdays: '8:00 AM – 10:00 PM',
      weekends: '8:00 AM – 10:30 PM',
    },
    deliveryAvailable: true,
    pickupAvailable: true,
    deliveryRadius: 'Badda, Aftabnagar, Rampura, Natun Bazar',
    estimatedDelivery: '40–60 min',
    deliveryFee: 100,
    mapLink: 'https://maps.google.com/?q=Badda+Dhaka',
  },
  {
    id: 'rampura',
    name: 'FLAVORS Rampura',
    shortName: 'Rampura',
    area: 'Rampura',
    address: 'Rampura TV Road, East Rampura, Dhaka-1219',
    phone: '+880 1700-000014',
    whatsapp: 'https://wa.me/8801700000014',
    hours: {
      weekdays: '8:00 AM – 10:00 PM',
      weekends: '8:00 AM – 10:30 PM',
    },
    deliveryAvailable: true,
    pickupAvailable: true,
    deliveryRadius: 'Rampura, Malibagh, Mouchak, Shantinagar',
    estimatedDelivery: '40–60 min',
    deliveryFee: 100,
    mapLink: 'https://maps.google.com/?q=Rampura+Dhaka',
  },
  {
    id: 'narayanganj',
    name: 'FLAVORS Narayanganj',
    shortName: 'Narayanganj',
    area: 'Narayanganj',
    address: '2/1 S.M. Maleh Road, Tanbazar, Narayanganj-1400',
    phone: '+880 1700-000015',
    whatsapp: 'https://wa.me/8801700000015',
    hours: {
      weekdays: '8:00 AM – 9:30 PM',
      weekends: '8:00 AM – 10:00 PM',
    },
    deliveryAvailable: true,
    pickupAvailable: true,
    deliveryRadius: 'Narayanganj City, Siddhirganj, Fatullah',
    estimatedDelivery: '45–65 min',
    deliveryFee: 150,
    mapLink: 'https://maps.google.com/?q=Narayanganj+Bangladesh',
  },
];

// ============================================================
// PRODUCT CATEGORIES
// ============================================================

export const FLAVORS_CATEGORIES: FlavorsCategory[] = [
  { id: 'all', name: 'All Products', description: 'Browse all 200+ FLAVORS products', icon: '🌟' },
  { id: 'celebration-cakes', name: 'Celebration Cakes', description: 'Grand cakes for every milestone', icon: '🎂' },
  { id: 'birthday-cakes', name: 'Birthday Cakes', description: 'Make every birthday unforgettable', icon: '🎉' },
  { id: 'wedding-cakes', name: 'Wedding Cakes', description: 'Elegant multi-tier wedding masterpieces', icon: '💍' },
  { id: 'anniversary-cakes', name: 'Anniversary Cakes', description: 'Celebrate your love story', icon: '❤️' },
  { id: 'custom-cakes', name: 'Custom Cakes', description: 'Your vision, our craft', icon: '✨' },
  { id: 'premium-cakes', name: 'Premium Cakes', description: 'Finest ingredients, extraordinary results', icon: '👑' },
  { id: 'chocolate-cakes', name: 'Chocolate Cakes', description: 'Indulgent chocolate creations', icon: '🍫' },
  { id: 'vanilla-cakes', name: 'Vanilla Cakes', description: 'Classic and timeless vanilla', icon: '🍦' },
  { id: 'fruit-cakes', name: 'Fruit Cakes', description: 'Fresh seasonal fruit creations', icon: '🍓' },
  { id: 'red-velvet', name: 'Red Velvet', description: 'Signature red velvet collection', icon: '🌹' },
  { id: 'cheesecakes', name: 'Cheesecakes', description: 'Rich and creamy cheesecakes', icon: '🧀' },
  { id: 'pastries', name: 'Pastries', description: 'Freshly baked pastries daily', icon: '🥐' },
  { id: 'cupcakes', name: 'Cupcakes', description: 'Individually crafted cupcakes', icon: '🧁' },
  { id: 'brownies', name: 'Brownies', description: 'Fudgy, dense chocolate brownies', icon: '🍫' },
  { id: 'desserts', name: 'Desserts', description: 'Premium plated desserts and cups', icon: '🍮' },
  { id: 'bengali-sweets', name: 'Bengali Sweets', description: 'Authentic traditional mishti', icon: '🍬' },
  { id: 'premium-sweets', name: 'Premium Sweets', description: 'Elevated traditional sweets', icon: '💎' },
  { id: 'cookies', name: 'Cookies', description: 'Artisan cookie collections', icon: '🍪' },
  { id: 'biscuits', name: 'Biscuits', description: 'Freshly baked bakery biscuits', icon: '🫙' },
  { id: 'breads', name: 'Breads', description: 'Wholesome daily breads', icon: '🍞' },
  { id: 'tea-cakes', name: 'Tea Cakes', description: 'Perfect companions for tea time', icon: '🫖' },
  { id: 'savory-snacks', name: 'Savoury Snacks', description: 'Freshly made savoury treats', icon: '🥟' },
  { id: 'frozen-foods', name: 'Frozen Foods', description: 'Premium frozen convenience foods', icon: '❄️' },
  { id: 'gift-boxes', name: 'Gift Boxes', description: 'Beautifully curated gift hampers', icon: '🎁' },
  { id: 'corporate-gifts', name: 'Corporate Gifts', description: 'Professional gifting solutions', icon: '🏢' },
  { id: 'eid-collection', name: 'Eid Collection', description: 'Special festive Eid creations', icon: '🌙' },
  { id: 'kids-collection', name: 'Kids Collection', description: 'Fun and colourful for children', icon: '🎈' },
];

// ============================================================
// COLLECTIONS
// ============================================================

export const FLAVORS_COLLECTIONS: FlavorsCollection[] = [
  {
    id: 'signature-cakes',
    name: 'Signature Cakes',
    tagline: 'Crafted for the extraordinary',
    description: 'Our most celebrated cake creations, each a masterpiece of flavour and artistry.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80',
    categoryIds: ['celebration-cakes', 'premium-cakes', 'wedding-cakes'],
    badge: 'Bestsellers',
    accentColor: '#f5c518',
  },
  {
    id: 'premium-sweets',
    name: 'Premium Sweets',
    tagline: 'Tradition elevated to perfection',
    description: 'The finest Bengali sweets and premium confections for every occasion.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80',
    categoryIds: ['bengali-sweets', 'premium-sweets'],
    badge: 'Traditional',
    accentColor: '#c9963b',
  },
  {
    id: 'bakery-essentials',
    name: 'Bakery Essentials',
    tagline: 'Fresh from our ovens daily',
    description: 'Breads, pastries, cookies and everything you love from a premium bakery.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80',
    categoryIds: ['breads', 'pastries', 'cookies', 'biscuits', 'tea-cakes'],
    badge: 'Fresh Daily',
    accentColor: '#8b5e3c',
  },
  {
    id: 'frozen-favorites',
    name: 'Frozen Favorites',
    tagline: 'FLAVORS quality, ready when you are',
    description: 'Premium frozen snacks and convenience foods from the FLAVORS kitchen.',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80',
    categoryIds: ['frozen-foods', 'savory-snacks'],
    badge: 'New Range',
    accentColor: '#3d7dd4',
  },
  {
    id: 'celebration-collection',
    name: 'Celebration Collection',
    tagline: 'Every occasion deserves something special',
    description: 'Curated collections for birthdays, weddings, anniversaries and every milestone.',
    image: 'https://images.unsplash.com/photo-1535141192574-5f9b33d07b27?auto=format&fit=crop&w=1200&q=80',
    categoryIds: ['birthday-cakes', 'anniversary-cakes', 'gift-boxes', 'eid-collection'],
    badge: 'Occasions',
    accentColor: '#e05a7c',
  },
  {
    id: 'corporate-gifting',
    name: 'Corporate Gifting',
    tagline: 'Gifts that leave a lasting impression',
    description: 'Premium corporate gift solutions for companies, events and client relationships.',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746072788e?auto=format&fit=crop&w=1200&q=80',
    categoryIds: ['corporate-gifts', 'gift-boxes'],
    badge: 'Corporate',
    accentColor: '#1a3c2a',
  },
];

// ============================================================
// OCCASIONS
// ============================================================

export const FLAVORS_OCCASIONS: FlavorsOccasion[] = [
  {
    id: 'birthday',
    name: 'Birthday',
    emoji: '🎂',
    description: 'Make their birthday unforgettable',
    suggestedCategoryIds: ['birthday-cakes', 'cupcakes', 'celebration-cakes', 'gift-boxes'],
    color: '#f5c518',
  },
  {
    id: 'wedding',
    name: 'Wedding',
    emoji: '💍',
    description: 'Your perfect wedding sweets',
    suggestedCategoryIds: ['wedding-cakes', 'premium-sweets', 'gift-boxes'],
    color: '#e8c4d8',
  },
  {
    id: 'anniversary',
    name: 'Anniversary',
    emoji: '❤️',
    description: 'Celebrate your love story',
    suggestedCategoryIds: ['anniversary-cakes', 'premium-cakes', 'gift-boxes'],
    color: '#e05a7c',
  },
  {
    id: 'corporate',
    name: 'Corporate',
    emoji: '🏢',
    description: 'Professional gifting & events',
    suggestedCategoryIds: ['corporate-gifts', 'gift-boxes', 'premium-sweets'],
    color: '#3d7dd4',
  },
  {
    id: 'eid',
    name: 'Eid',
    emoji: '🌙',
    description: 'Eid Mubarak special collection',
    suggestedCategoryIds: ['eid-collection', 'bengali-sweets', 'gift-boxes'],
    color: '#4caf7d',
  },
  {
    id: 'ramadan',
    name: 'Ramadan',
    emoji: '✨',
    description: 'Iftar and Sehri specials',
    suggestedCategoryIds: ['bengali-sweets', 'pastries', 'breads'],
    color: '#9b59b6',
  },
  {
    id: 'family',
    name: 'Family Gathering',
    emoji: '🏠',
    description: 'Feeds the whole family',
    suggestedCategoryIds: ['bengali-sweets', 'breads', 'savory-snacks', 'gift-boxes'],
    color: '#e67e22',
  },
  {
    id: 'gift',
    name: 'Gifting',
    emoji: '🎁',
    description: 'The perfect sweet gift',
    suggestedCategoryIds: ['gift-boxes', 'premium-sweets', 'cookies'],
    color: '#c9963b',
  },
  {
    id: 'tea-time',
    name: 'Tea Time',
    emoji: '🫖',
    description: 'Perfectly paired with your tea',
    suggestedCategoryIds: ['tea-cakes', 'cookies', 'biscuits', 'pastries'],
    color: '#8b5e3c',
  },
  {
    id: 'everyday',
    name: 'Everyday Treat',
    emoji: '🌟',
    description: 'A little luxury every day',
    suggestedCategoryIds: ['pastries', 'breads', 'cookies', 'brownies'],
    color: '#27ae60',
  },
];

// ============================================================
// REVIEWS
// ============================================================

export const FLAVORS_REVIEWS: FlavorsReview[] = [
  {
    id: 'r-001',
    customerName: 'Tasnia Rahman',
    rating: 5,
    reviewText: 'The wedding cake was absolutely stunning. Three tiers of pure perfection. All our guests were amazed by both the presentation and the taste. FLAVORS exceeded every expectation.',
    productPurchased: 'Royal 3-Tier Wedding Cake',
    category: 'Cakes',
    date: '2026-08-15',
    branch: 'Gulshan-1',
    verified: true,
  },
  {
    id: 'r-002',
    customerName: 'Md. Rafiqul Islam',
    rating: 5,
    reviewText: 'Ordered the Rasgulla and Chamcham for Eid. Fresh, perfectly sweet, and the packaging was beautiful. Will definitely order again every occasion.',
    productPurchased: 'Bengali Sweets Assorted Box',
    category: 'Sweets',
    date: '2026-07-20',
    branch: 'Dhanmondi 27',
    verified: true,
  },
  {
    id: 'r-003',
    customerName: 'Nusrat Jahan',
    rating: 5,
    reviewText: 'The croissants are better than anything I have had in Dhaka. Perfectly flaky, buttery and fresh every morning. This is my daily bakery now.',
    productPurchased: 'Butter Croissant',
    category: 'Bakery',
    date: '2026-09-01',
    branch: 'Banani',
    verified: true,
  },
  {
    id: 'r-004',
    customerName: 'Arif Hossain',
    rating: 4,
    reviewText: 'Ordered 200 pcs Chicken Spring Roll for our office iftar. Quality was excellent, delivery was on time. Minor delay but overall fantastic service.',
    productPurchased: 'Frozen Chicken Spring Roll (Bulk)',
    category: 'Frozen',
    date: '2026-03-22',
    branch: 'Motijheel',
    verified: true,
  },
  {
    id: 'r-005',
    customerName: 'Sabrina Akter',
    rating: 5,
    reviewText: 'My daughter\'s birthday cake was a princess dream come true. The details, the flowers, the flavour — everything was perfect. She cried happy tears!',
    productPurchased: 'Princess Fantasy Birthday Cake',
    category: 'Cakes',
    date: '2026-08-28',
    branch: 'Bashundhara',
    verified: true,
  },
  {
    id: 'r-006',
    customerName: 'Rezaul Karim',
    rating: 5,
    reviewText: 'Corporate gift packages for our client appreciation event. FLAVORS branded boxes looked incredibly professional. Clients were impressed. Will use again.',
    productPurchased: 'Executive Corporate Gift Box',
    category: 'Corporate',
    date: '2026-07-10',
    branch: 'Gulshan-2',
    verified: true,
  },
  {
    id: 'r-007',
    customerName: 'Farhana Begum',
    rating: 5,
    reviewText: 'The Red Velvet Cake is out of this world. Moist, rich cream cheese frosting, perfect every single time. I order it almost every week!',
    productPurchased: 'Classic Red Velvet Cake',
    category: 'Cakes',
    date: '2026-09-05',
    branch: 'Uttara',
    verified: true,
  },
  {
    id: 'r-008',
    customerName: 'Mamunur Rashid',
    rating: 5,
    reviewText: 'Whole wheat bread is fresh, wholesome and absolutely delicious. I have switched entirely from other bakeries. FLAVORS quality is unmatched in Dhaka.',
    productPurchased: 'Whole Wheat Bread',
    category: 'Bakery',
    date: '2026-08-10',
    branch: 'Mirpur-10',
    verified: true,
  },
  {
    id: 'r-009',
    customerName: 'Shahida Khatun',
    rating: 5,
    reviewText: 'The Chocolate Fudge Birthday Cake had everyone at the party asking where it was from. Perfectly moist with that rich chocolate ganache. Absolutely loved it!',
    productPurchased: 'Chocolate Fudge Birthday Cake',
    category: 'Cakes',
    date: '2026-08-18',
    branch: 'Dhanmondi 15',
    verified: true,
  },
  {
    id: 'r-010',
    customerName: 'Tanvir Ahmed',
    rating: 4,
    reviewText: 'Frozen wontons are a lifesaver for quick dinners. The quality is premium — you can tell these are made with real ingredients. Happy customer!',
    productPurchased: 'Frozen Chicken Wonton',
    category: 'Frozen',
    date: '2026-07-30',
    branch: 'Badda',
    verified: true,
  },
  {
    id: 'r-011',
    customerName: 'Poly Chowdhury',
    rating: 5,
    reviewText: 'Mishti Doi and Sandesh for our wedding reception. Everyone kept complimenting the quality. Our guests from Kolkata said it reminded them of authentic mishti!',
    productPurchased: 'Mishti Doi + Sandesh Combo',
    category: 'Sweets',
    date: '2026-06-25',
    branch: 'Old Dhaka',
    verified: true,
  },
  {
    id: 'r-012',
    customerName: 'Jakir Hasan',
    rating: 5,
    reviewText: 'The Tiramisu Cup is absolutely divine. Just the right balance of coffee, mascarpone and cocoa. I am officially addicted to FLAVORS desserts.',
    productPurchased: 'Tiramisu Cup',
    category: 'Cakes',
    date: '2026-09-03',
    branch: 'Baridhara',
    verified: true,
  },
  {
    id: 'r-013',
    customerName: 'Rukhsana Islam',
    rating: 5,
    reviewText: 'Placed a bulk order of samosas for a corporate seminar — 300 pieces, delivered on time, perfectly hot and crispy. FLAVORS corporate service is excellent.',
    productPurchased: 'Keema Samosa (Bulk Order)',
    category: 'Corporate',
    date: '2026-07-15',
    branch: 'Motijheel',
    verified: true,
  },
  {
    id: 'r-014',
    customerName: 'Minhaj Uddin',
    rating: 5,
    reviewText: 'The Chocolate Chip Cookies tin is a gift that everyone loves. Premium quality, great packaging, and the taste is exceptional. My go-to gift for all occasions.',
    productPurchased: 'Chocolate Chip Cookie Tin',
    category: 'Bakery',
    date: '2026-08-22',
    branch: 'Rampura',
    verified: true,
  },
  {
    id: 'r-015',
    customerName: 'Dilruba Nasrin',
    rating: 5,
    reviewText: 'Custom cake builder worked perfectly. I designed my dream anniversary cake online and it arrived looking exactly as I imagined. Truly premium experience.',
    productPurchased: 'Custom Anniversary Cake',
    category: 'Cakes',
    date: '2026-08-30',
    branch: 'Gulshan-1',
    verified: true,
  },
  {
    id: 'r-016',
    customerName: 'Zahid Hasan',
    rating: 5,
    reviewText: 'Our company\'s Eid gifting was handled entirely by FLAVORS. The boxes were premium, the sweets were fresh, and delivery was flawless across multiple addresses.',
    productPurchased: 'Eid Corporate Gift Package',
    category: 'Corporate',
    date: '2026-04-10',
    branch: 'Gulshan-2',
    verified: true,
  },
  {
    id: 'r-017',
    customerName: 'Sharmin Sultana',
    rating: 5,
    reviewText: 'The Kids Unicorn Cake for my daughter was absolutely magical. She loved every bit of it. The colours were vibrant, the fondant was detailed, and it tasted amazing!',
    productPurchased: 'Rainbow Unicorn Cake',
    category: 'Cakes',
    date: '2026-09-07',
    branch: 'Uttara',
    verified: true,
  },
  {
    id: 'r-018',
    customerName: 'Anisur Rahman',
    rating: 4,
    reviewText: 'Very happy with the Narayanganj branch. Fresh bread every morning, consistent quality. The honey oat bread is particularly great with morning tea.',
    productPurchased: 'Honey Oat Bread',
    category: 'Bakery',
    date: '2026-08-05',
    branch: 'Narayanganj',
    verified: true,
  },
];

// ============================================================
// CUSTOM CAKE BUILDER STEPS
// ============================================================

export const CAKE_BUILDER_STEPS: CakeBuilderStep[] = [
  {
    id: 'type',
    step: 1,
    title: 'Cake Type',
    options: [
      { id: 'round', label: 'Round Cake', value: 'round', priceModifier: 0, icon: '⭕' },
      { id: 'square', label: 'Square Cake', value: 'square', priceModifier: 100, icon: '⬜' },
      { id: 'heart', label: 'Heart Shape', value: 'heart', priceModifier: 200, icon: '❤️' },
      { id: 'tiered', label: '2-Tier', value: 'tiered', priceModifier: 800, icon: '🏛️' },
      { id: 'sculpted', label: 'Sculpted/3D', value: 'sculpted', priceModifier: 1500, icon: '🎭' },
    ],
  },
  {
    id: 'flavor',
    step: 2,
    title: 'Cake Flavour',
    options: [
      { id: 'vanilla', label: 'Classic Vanilla', value: 'vanilla', priceModifier: 0 },
      { id: 'chocolate', label: 'Dark Chocolate', value: 'chocolate', priceModifier: 150 },
      { id: 'red-velvet', label: 'Red Velvet', value: 'red-velvet', priceModifier: 200 },
      { id: 'strawberry', label: 'Strawberry', value: 'strawberry', priceModifier: 150 },
      { id: 'lemon', label: 'Lemon', value: 'lemon', priceModifier: 100 },
      { id: 'mango', label: 'Mango', value: 'mango', priceModifier: 200 },
      { id: 'coffee', label: 'Coffee Mocha', value: 'coffee', priceModifier: 200 },
      { id: 'black-forest', label: 'Black Forest', value: 'black-forest', priceModifier: 300 },
    ],
  },
  {
    id: 'size',
    step: 3,
    title: 'Cake Size',
    options: [
      { id: 'half-kg', label: '½ kg (4–6 pax)', value: 'half-kg', priceModifier: 0 },
      { id: 'one-kg', label: '1 kg (8–12 pax)', value: 'one-kg', priceModifier: 500 },
      { id: 'one-half-kg', label: '1.5 kg (12–16 pax)', value: 'one-half-kg', priceModifier: 900 },
      { id: 'two-kg', label: '2 kg (16–22 pax)', value: 'two-kg', priceModifier: 1400 },
      { id: 'three-kg', label: '3 kg (24–30 pax)', value: 'three-kg', priceModifier: 2200 },
    ],
  },
  {
    id: 'layers',
    step: 4,
    title: 'Layers',
    options: [
      { id: 'single', label: 'Single Layer', value: 'single', priceModifier: 0 },
      { id: 'double', label: 'Double Layer', value: 'double', priceModifier: 200 },
      { id: 'triple', label: 'Triple Layer', value: 'triple', priceModifier: 400 },
    ],
  },
  {
    id: 'filling',
    step: 5,
    title: 'Filling',
    options: [
      { id: 'fresh-cream', label: 'Fresh Cream', value: 'fresh-cream', priceModifier: 0 },
      { id: 'chocolate-ganache', label: 'Chocolate Ganache', value: 'chocolate-ganache', priceModifier: 150 },
      { id: 'strawberry-jam', label: 'Strawberry Jam', value: 'strawberry-jam', priceModifier: 100 },
      { id: 'caramel', label: 'Salted Caramel', value: 'caramel', priceModifier: 200 },
      { id: 'lemon-curd', label: 'Lemon Curd', value: 'lemon-curd', priceModifier: 150 },
      { id: 'nutella', label: 'Hazelnut Spread', value: 'nutella', priceModifier: 250 },
    ],
  },
  {
    id: 'cream',
    step: 6,
    title: 'Frosting',
    options: [
      { id: 'buttercream', label: 'Buttercream', value: 'buttercream', priceModifier: 0 },
      { id: 'fresh-cream', label: 'Fresh Whipped Cream', value: 'fresh-cream', priceModifier: 100 },
      { id: 'fondant', label: 'Smooth Fondant', value: 'fondant', priceModifier: 300 },
      { id: 'cream-cheese', label: 'Cream Cheese', value: 'cream-cheese', priceModifier: 200 },
      { id: 'mirror-glaze', label: 'Mirror Glaze', value: 'mirror-glaze', priceModifier: 400 },
    ],
  },
  {
    id: 'decoration',
    step: 7,
    title: 'Decoration Style',
    options: [
      { id: 'simple', label: 'Simple & Elegant', value: 'simple', priceModifier: 0 },
      { id: 'floral', label: 'Fresh Flowers', value: 'floral', priceModifier: 400 },
      { id: 'drip', label: 'Chocolate Drip', value: 'drip', priceModifier: 200 },
      { id: 'fondant-art', label: 'Fondant Figurines', value: 'fondant-art', priceModifier: 600 },
      { id: 'edible-print', label: 'Edible Photo Print', value: 'edible-print', priceModifier: 350 },
      { id: 'sprinkles', label: 'Sprinkles & Fun', value: 'sprinkles', priceModifier: 100 },
    ],
  },
  {
    id: 'occasion',
    step: 8,
    title: 'Occasion',
    options: [
      { id: 'birthday', label: 'Birthday', value: 'birthday', priceModifier: 0 },
      { id: 'wedding', label: 'Wedding', value: 'wedding', priceModifier: 0 },
      { id: 'anniversary', label: 'Anniversary', value: 'anniversary', priceModifier: 0 },
      { id: 'corporate', label: 'Corporate', value: 'corporate', priceModifier: 0 },
      { id: 'graduation', label: 'Graduation', value: 'graduation', priceModifier: 0 },
      { id: 'eid', label: 'Eid Celebration', value: 'eid', priceModifier: 0 },
      { id: 'other', label: 'Other / Surprise', value: 'other', priceModifier: 0 },
    ],
  },
];

export const CAKE_BUILDER_BASE_PRICE = 650; // ৳

// ============================================================
// EDITORIAL CONTENT
// ============================================================

export const FLAVORS_ARTICLES: FlavorsEditorialArticle[] = [
  {
    id: 'art-001',
    title: 'The Art of the Perfect Bengali Wedding Cake',
    excerpt: 'How FLAVORS combines traditional mishti culture with modern European patisserie to create unforgettable wedding experiences.',
    category: 'Cake Stories',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=800&q=80',
    date: 'September 2026',
  },
  {
    id: 'art-002',
    title: 'A Guide to FLAVORS Gift Boxes for Every Occasion',
    excerpt: 'From Eid Mubarak to corporate celebrations — discover how to choose the perfect FLAVORS gift for everyone.',
    category: 'Gift Guides',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746072788e?auto=format&fit=crop&w=800&q=80',
    date: 'August 2026',
  },
  {
    id: 'art-003',
    title: 'Traditional Bengali Mishti: A Story of Sweetness',
    excerpt: 'Rasgulla, Chamcham, Sandesh — how FLAVORS preserves authentic flavours while bringing them to a modern audience.',
    category: 'Bengali Sweets',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    date: 'July 2026',
  },
  {
    id: 'art-004',
    title: 'Corporate Gifting Done Right: The FLAVORS Way',
    excerpt: 'Why leading Dhaka companies trust FLAVORS for their employee appreciation, client gifts and corporate events.',
    category: 'Corporate Gifting',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746072788e?auto=format&fit=crop&w=800&q=80',
    date: 'June 2026',
  },
  {
    id: 'art-005',
    title: 'Eid at FLAVORS: Our Most Special Season',
    excerpt: 'Behind the scenes of how FLAVORS prepares thousands of Eid gift boxes, cakes and special sweet collections every year.',
    category: 'Seasonal Collections',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1535141192574-5f9b33d07b27?auto=format&fit=crop&w=800&q=80',
    date: 'May 2026',
  },
  {
    id: 'art-006',
    title: 'Fresh Bread, Every Morning: The FLAVORS Bakery Promise',
    excerpt: 'How our bakers start at 4 AM every day to ensure fresh bread and pastries are in every branch by opening time.',
    category: 'Baking',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80',
    date: 'April 2026',
  },
];

// ============================================================
// CORPORATE PACKAGES
// ============================================================

export interface CorporatePackage {
  id: string;
  name: string;
  description: string;
  minQuantity: number;
  pricePerUnit: number;
  includes: string[];
  badge?: string;
}

export const CORPORATE_PACKAGES: CorporatePackage[] = [
  {
    id: 'corp-starter',
    name: 'Starter Package',
    description: 'Perfect for small team celebrations and client appreciation',
    minQuantity: 10,
    pricePerUnit: 850,
    includes: [
      'Assorted premium sweets box',
      'Branded FLAVORS packaging',
      'Personalized message card',
      'Free delivery for 10+ orders',
    ],
    badge: 'Min. 10 pcs',
  },
  {
    id: 'corp-business',
    name: 'Business Package',
    description: 'Ideal for office events, seminars and mid-scale corporate gifting',
    minQuantity: 25,
    pricePerUnit: 1200,
    includes: [
      'Premium cake + sweets combo box',
      'Custom branded packaging',
      'Individual name labels',
      'Scheduled delivery with tracking',
      'Dedicated account manager',
    ],
    badge: 'Min. 25 pcs',
  },
  {
    id: 'corp-enterprise',
    name: 'Enterprise Package',
    description: 'Full-scale corporate gifting for large companies and major events',
    minQuantity: 50,
    pricePerUnit: 1800,
    includes: [
      'Fully custom gift curation',
      'Company logo on packaging',
      'Handwritten luxury cards',
      'Multi-location delivery',
      'Priority preparation guarantee',
      'Post-delivery satisfaction report',
    ],
    badge: 'Min. 50 pcs',
  },
];
