import rawCatalog from './supermarketCatalog.json';

export interface SupermarketProduct {
  id: string;
  slug: string;
  nameEn: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  category: string;
  categoryAr: string;
  categorySlug: string;
  brand: string;
  origin: string;
  unit: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  discountAmount: number;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  stockQuantity: number;
  badge: string | null;
  featured: boolean;
  bestseller: boolean;
  isNew: boolean;
  isUnder10: boolean;
  isUnder20: boolean;
  isUaeLocal: boolean;
  image: string;
}

export interface CategoryInfo {
  id: string;
  slug: string;
  nameEn: string;
  nameAr: string;
  icon: string;
  itemCount: number;
  image: string;
}

export interface WeeklyBundle {
  id: string;
  nameEn: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  itemsEn: string[];
  itemsAr: string[];
  originalPrice: number;
  bundlePrice: number;
  savings: number;
  image: string;
  tagEn: string;
  tagAr: string;
}

export const SUPERMARKET_PRODUCTS: SupermarketProduct[] = rawCatalog as SupermarketProduct[];

// 40 Defined Categories
export const SUPERMARKET_CATEGORIES: CategoryInfo[] = [
  { id: 'cat-01', slug: 'fruits-vegetables', nameEn: 'Fruits & Vegetables', nameAr: 'الفواكه والخضروات', icon: 'Apple', itemCount: 28, image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-02', slug: 'meat-poultry', nameEn: 'Meat & Poultry', nameAr: 'اللحوم والدواجن', icon: 'Beef', itemCount: 26, image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-03', slug: 'seafood', nameEn: 'Seafood', nameAr: 'المأكولات البحرية', icon: 'Fish', itemCount: 26, image: 'https://images.unsplash.com/photo-1534948216015-843149f72be3?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-04', slug: 'dairy-eggs', nameEn: 'Dairy & Eggs', nameAr: 'الألبان والبيض', icon: 'Milk', itemCount: 26, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-05', slug: 'bakery', nameEn: 'Bakery', nameAr: 'المخبوزات', icon: 'Croissant', itemCount: 25, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-06', slug: 'rice-pasta-grains', nameEn: 'Rice, Pasta & Grains', nameAr: 'الأرز والمعكرونة والحبوب', icon: 'Wheat', itemCount: 27, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-07', slug: 'canned-jarred-food', nameEn: 'Canned & Jarred Food', nameAr: 'الأطعمة المعلبة', icon: 'Box', itemCount: 27, image: 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-08', slug: 'cooking-oils', nameEn: 'Cooking Oils', nameAr: 'زيوت الطبخ', icon: 'Droplet', itemCount: 27, image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-09', slug: 'spices-seasonings', nameEn: 'Spices & Seasonings', nameAr: 'التوابل والبهارات', icon: 'Flame', itemCount: 27, image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-10', slug: 'sauces-condiments', nameEn: 'Sauces & Condiments', nameAr: 'الصلصات والتتبيلات', icon: 'Soup', itemCount: 27, image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-11', slug: 'breakfast-cereals', nameEn: 'Breakfast & Cereals', nameAr: 'الفطور وحبوب الإفطار', icon: 'Sun', itemCount: 27, image: 'https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-12', slug: 'tea-coffee', nameEn: 'Tea & Coffee', nameAr: 'الشاي والقهوة', icon: 'Coffee', itemCount: 27, image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-13', slug: 'water-juices', nameEn: 'Water & Juices', nameAr: 'المياه والعصائر', icon: 'GlassWater', itemCount: 27, image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-14', slug: 'soft-drinks-beverages', nameEn: 'Soft Drinks & Beverages', nameAr: 'المشروبات الغازية', icon: 'CupSoda', itemCount: 27, image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-15', slug: 'snacks', nameEn: 'Snacks', nameAr: 'الوجبات الخفيفة', icon: 'Cookie', itemCount: 27, image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-16', slug: 'biscuits-cookies', nameEn: 'Biscuits & Cookies', nameAr: 'البسكويت', icon: 'Cookie', itemCount: 27, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-17', slug: 'chocolates-sweets', nameEn: 'Chocolates & Sweets', nameAr: 'الشوكولاتة والحلويات', icon: 'Candy', itemCount: 27, image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-18', slug: 'frozen-food', nameEn: 'Frozen Food', nameAr: 'الأطعمة المجمدة', icon: 'Snowflake', itemCount: 27, image: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-19', slug: 'ice-cream', nameEn: 'Ice Cream', nameAr: 'الآيس كريم', icon: 'IceCream', itemCount: 27, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-20', slug: 'baby-food', nameEn: 'Baby Food', nameAr: 'أغذية الأطفال', icon: 'Baby', itemCount: 27, image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-21', slug: 'baby-care', nameEn: 'Baby Care', nameAr: 'العناية بالأطفال', icon: 'HeartHandshake', itemCount: 27, image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-22', slug: 'personal-care', nameEn: 'Personal Care', nameAr: 'العناية الشخصية', icon: 'UserCheck', itemCount: 27, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-23', slug: 'beauty-skincare', nameEn: 'Beauty & Skincare', nameAr: 'الجمال والعناية بالبشرة', icon: 'Sparkle', itemCount: 27, image: 'https://images.unsplash.com/photo-1608248597359-58d3d0f0c0ec?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-24', slug: 'oral-care', nameEn: 'Oral Care', nameAr: 'العناية بالفم والأسنان', icon: 'Smile', itemCount: 27, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-25', slug: 'health-wellness', nameEn: 'Health & Wellness', nameAr: 'الصحة والعافية', icon: 'ShieldCheck', itemCount: 27, image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-26', slug: 'household-cleaning', nameEn: 'Household Cleaning', nameAr: 'تنظيف المنزل', icon: 'SprayCan', itemCount: 27, image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-27', slug: 'laundry', nameEn: 'Laundry', nameAr: 'الغسيل', icon: 'Shirt', itemCount: 27, image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-28', slug: 'kitchen-essentials', nameEn: 'Kitchen Essentials', nameAr: 'أساسيات المطبخ', icon: 'UtensilsCrossed', itemCount: 27, image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-29', slug: 'paper-tissue', nameEn: 'Paper & Tissue', nameAr: 'الورق والمناديل', icon: 'Layers', itemCount: 27, image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-30', slug: 'pet-food-care', nameEn: 'Pet Food & Care', nameAr: 'طعام الحيوانات الأليفة', icon: 'PawPrint', itemCount: 27, image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-31', slug: 'home-essentials', nameEn: 'Home Essentials', nameAr: 'أساسيات المنزل', icon: 'Home', itemCount: 27, image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-32', slug: 'small-appliances', nameEn: 'Small Appliances', nameAr: 'الأجهزة المنزلية الصغيرة', icon: 'Plug', itemCount: 27, image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-33', slug: 'electronics', nameEn: 'Electronics', nameAr: 'الإلكترونيات', icon: 'Tv', itemCount: 27, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-34', slug: 'stationery', nameEn: 'Stationery', nameAr: 'القرطاسية', icon: 'BookOpen', itemCount: 27, image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-35', slug: 'organic-healthy', nameEn: 'Organic & Healthy', nameAr: 'المنتجات العضوية والصحية', icon: 'Leaf', itemCount: 27, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-36', slug: 'international-foods', nameEn: 'International Foods', nameAr: 'الأطعمة العالمية', icon: 'Globe', itemCount: 27, image: 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-37', slug: 'premium-imported', nameEn: 'Premium & Imported', nameAr: 'المنتجات الفاخرة والمستوردة', icon: 'Crown', itemCount: 27, image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-38', slug: 'uae-local-products', nameEn: 'UAE Local Products', nameAr: 'المنتجات المحلية الإماراتية', icon: 'Flag', itemCount: 27, image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-39', slug: 'ramadan-seasonal', nameEn: 'Ramadan & Seasonal', nameAr: 'رمضان والمواسم', icon: 'Moon', itemCount: 27, image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=400&q=80' },
  { id: 'cat-40', slug: 'offers-clearance', nameEn: 'Offers & Clearance', nameAr: 'العروض والتخفيضات', icon: 'Percent', itemCount: 27, image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80' },
];

// Curated Family Bundles with Real 1-Click Savings
export const WEEKLY_BUNDLES: WeeklyBundle[] = [
  {
    id: 'bundle-family-basket',
    nameEn: 'Complete Weekly Family Basket',
    nameAr: 'سلة العائلة الأسبوعية المتكاملة',
    descEn: 'Covers essential weekly dairy, farm eggs, fresh vegetables, fresh poultry, rice and pure cooking oil.',
    descAr: 'تغطي الاحتياجات الأسبوعية الأساسية من الألبان، بيض المزارع، الخضروات، الدواجن الطازجة، الأرز والزيت النقي.',
    itemsEn: ['Al Rawabi Milk 2L', 'Al Ain 30 Farm Eggs', 'UAE Tomatoes 1kg', 'UAE Cucumbers 1kg', 'Fresh Whole Chicken 1000g', 'Basmati Rice 5kg', 'Sunflower Oil 1.5L'],
    itemsAr: ['حليب الروابي 2 لتر', 'بيض العين 30 بيضة', 'طماطم إماراتية 1 كجم', 'خيار محلي 1 كجم', 'دجاج كامل طازج 1000 جم', 'أرز بسمتي 5 كجم', 'زيت دوار الشمس 1.5 لتر'],
    originalPrice: 118.50,
    bundlePrice: 89.00,
    savings: 29.50,
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
    tagEn: 'Save 25%',
    tagAr: 'وفر 25%'
  },
  {
    id: 'bundle-breakfast-master',
    nameEn: 'Morning Breakfast & Pantry Pack',
    nameAr: 'باقة الفطور الصباحي المتكاملة',
    descEn: 'Lurpak butter, fresh Lebanese pita, Turkish labneh, gourmet cheese, premium tea and natural honey.',
    descAr: 'زبدة لورباك، خبز عربي طازج، لبنة تركية، جبنة فاخرة، شاي أسود وعسل طبيعي.',
    itemsEn: ['Lurpak Butter 400g', 'Pinar Turkish Labneh 400g', 'Kraft Cheddar Cheese', 'Arabic Pita Bread 2 Packs', 'Lipton Tea 100 Bags', 'Orange Juice 1L'],
    itemsAr: ['زبدة لورباك 400 جم', 'لبنة بينار 400 جم', 'جبنة شيدر كرافت', 'خبز عربي عبوتين', 'شاي ليبتون 100 كيس', 'عصير برتقال 1 لتر'],
    originalPrice: 78.50,
    bundlePrice: 59.00,
    savings: 19.50,
    image: 'https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=600&q=80',
    tagEn: 'Best Seller',
    tagAr: 'الأكثر طلباً'
  },
  {
    id: 'bundle-home-hygiene',
    nameEn: 'Total Home Hygiene & Cleaning Bundle',
    nameAr: 'مجموعة النظافة والتعقيم المنزلي الشاملة',
    descEn: 'Dettol disinfectant, Ariel automatic gel, Fairy lemon dishwash, and jumbo tissue rolls.',
    descAr: 'مطهر ديتول، جل اريال للغسيل الأوتوماتيك، سائل فيري بالليمون، ومحارم رول حجم كبير.',
    itemsEn: ['Ariel Washing Gel 3L', 'Fairy Dishwashing Liquid 1L', 'Dettol Multi-surface 1.8L', 'Fine Facial Tissue 5x150s', 'Kitchen Towels 4 Rolls'],
    itemsAr: ['جل غسيل اريال 3 لتر', 'سائل فيري 1 لتر', 'مطهر ديتول 1.8 لتر', 'مناديل فاين 5 عبوات', 'محارم مطبخ 4 رولات'],
    originalPrice: 94.00,
    bundlePrice: 69.50,
    savings: 24.50,
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80',
    tagEn: 'Top Value',
    tagAr: 'قيمة قصوى'
  },
  {
    id: 'bundle-ramadan-pantry',
    nameEn: 'Ramadan & Festive Family Basket',
    nameAr: 'سلة رمضان والخيرات العائلية',
    descEn: 'Premium Medjool dates, Vimto cordial, samosa pastry sheets, custard powder, oats and Qamaruddin.',
    descAr: 'تمر مجهول فاخر، شراب فيمتو، رقائق سمبوسة، مسحوق كاسترد، شوفان وقمر الدين السوري.',
    itemsEn: ['Medjool Royal Dates 1kg', 'Vimto Cordial 710ml', 'Switz Samosa Sheets 500g', 'Foster Clark Custard 300g', 'Quaker White Oats 500g', 'Al Rawabi Mango Juice 1.75L'],
    itemsAr: ['تمر مجهول ملكي 1 كجم', 'شراب فيمتو 710 مل', 'رقائق سمبوسة سويتز 500 جم', 'كاسترد فوستر كلاركس', 'شوفان كويكر 500 جم', 'عصير مانجو الروابي 1.75 لتر'],
    originalPrice: 88.00,
    bundlePrice: 65.00,
    savings: 23.00,
    image: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?auto=format&fit=crop&w=600&q=80',
    tagEn: 'Seasonal Special',
    tagAr: 'عرض خاص'
  }
];

// UAE Emirates & Zones
export const UAE_ZONES = [
  { id: 'dxb', nameEn: 'Dubai — All Areas (Express 45-60 min)', nameAr: 'دبي — كافة المناطق (توصيل سريع 45-60 دقيقة)' },
  { id: 'auh', nameEn: 'Abu Dhabi — Downtown & Suburbs', nameAr: 'أبوظبي — المدينة وضواحيها' },
  { id: 'shj', nameEn: 'Sharjah — Express Delivery', nameAr: 'الشارقة — توصيل سريع' },
  { id: 'ajm', nameEn: 'Ajman — Central Delivery', nameAr: 'عجمان — التوصيل المركزي' },
  { id: 'rak', nameEn: 'Ras Al Khaimah', nameAr: 'رأس الخيمة' },
  { id: 'fuj', nameEn: 'Fujairah & East Coast', nameAr: 'الفجيرة والساحل الشرقي' },
  { id: 'uaq', nameEn: 'Umm Al Quwain', nameAr: 'أم القيوين' },
  { id: 'aln', nameEn: 'Al Ain Oasis & City', nameAr: 'العين والواحات' },
];

export const POPULAR_BRANDS = [
  { name: 'Al Rawabi', ar: 'الروابي', origin: 'UAE', logo: '🥛' },
  { name: 'Al Ain Farms', ar: 'مزارع العين', origin: 'UAE', logo: '🥬' },
  { name: 'Almarai', ar: 'المراعي', origin: 'KSA', logo: '🧀' },
  { name: 'Mai Dubai', ar: 'ماي دبي', origin: 'UAE', logo: '💧' },
  { name: 'Masafi', ar: 'مسافي', origin: 'UAE', logo: '🏔️' },
  { name: 'Sadia', ar: 'ساديا', origin: 'Brazil', logo: '🍗' },
  { name: 'Americana', ar: 'أمريكانا', origin: 'Kuwait', logo: '🍔' },
  { name: 'Bayara', ar: 'بيارة', origin: 'UAE', logo: '🥜' },
  { name: 'Lurpak', ar: 'لورباك', origin: 'Denmark', logo: '🧈' },
  { name: 'Puck', ar: 'بوك', origin: 'Denmark', logo: '🍯' },
  { name: 'Ariel', ar: 'اريال', origin: 'Global', logo: '🧺' },
  { name: 'Dettol', ar: 'ديتول', origin: 'UK', logo: '🛡️' },
];

// Comprehensive Bilingual UI Translations
export const TRANSLATIONS = {
  en: {
    brandName: 'AL MIRQAB HYPERMARKET',
    brandTagline: 'Fresh Every Day. Priced for Every Family.',
    deliveringTo: 'Delivering to:',
    selectLocation: 'Select Emirates Zone',
    expressTag: 'Express Delivery in 45-60 Mins',
    searchPlaceholder: 'Search 1,000+ fresh groceries, brands, categories...',
    allCategories: 'All Categories',
    deals: 'Today\'s Deals',
    freshMarket: 'Fresh Market',
    under10: 'Under AED 10',
    under20: 'Under AED 20',
    familyBundles: 'Family Bundles',
    uaeLocal: 'UAE Local Farms',
    brands: 'Brands',
    bestsellers: 'Bestsellers',
    offers: 'Super Clearance',
    newArrivals: 'New Arrivals',
    account: 'Account',
    wishlist: 'Wishlist',
    cart: 'Cart',
    viewAll: 'View All',
    addToCart: 'Add to Cart',
    added: 'Added',
    save: 'Save',
    off: 'OFF',
    inStock: 'In Stock',
    outOfStock: 'Out of Stock',
    freeDeliveryProgress: 'Add AED {amount} more for FREE Express Delivery!',
    freeDeliveryReached: '🎉 You qualified for FREE UAE Express Delivery!',
    cartEmpty: 'Your shopping cart is empty',
    cartEmptyDesc: 'Discover 1,000+ fresh groceries with unbeatable AED everyday prices.',
    subtotal: 'Subtotal',
    deliveryFee: 'Delivery Fee',
    free: 'FREE',
    discount: 'Discount Savings',
    total: 'Total Amount',
    checkout: 'Proceed to Checkout',
    havePromoCode: 'Have a promo code?',
    apply: 'Apply',
    promoPlaceholder: 'Try MIRQAB10',
    promoApplied: '10% UAE Supermarket Discount Applied!',
    checkoutTitle: 'Secure UAE Checkout',
    step1: '1. Delivery Address',
    step2: '2. Delivery Time Slot',
    step3: '3. Payment Method',
    step4: '4. Order Review',
    fullName: 'Full Name',
    phone: 'UAE Mobile (+971 50 / 55 / 58)',
    emirate: 'Emirate / City',
    street: 'Street, Villa / Building & Apt #',
    timeSlotExpress: '⚡ Express Delivery (Within 60 Mins)',
    timeSlotMorning: '🌅 Morning Slot (9:00 AM - 12:00 PM)',
    timeSlotEvening: '🌇 Evening Slot (5:00 PM - 9:00 PM)',
    payCard: '💳 Credit / Debit Card (Visa, Mastercard)',
    payApplePay: '🍎 Apple Pay / Google Pay',
    payCod: '💵 Cash on Delivery (AED)',
    payTabby: '🛍️ Tabby (Split in 4 Interest-Free Payments)',
    placeOrder: 'Place Order & Pay',
    orderConfirmed: 'Order Confirmed Successfully!',
    orderPlacedText: 'Thank you for shopping with Al Mirqab Hypermarket. Your fresh items are being packed in temperature-controlled boxes.',
    orderNumber: 'Order #',
    estimatedTime: 'Estimated Arrival',
    quickView: 'Quick View',
    origin: 'Country of Origin',
    unitSize: 'Unit / Size',
    verifiedRating: 'Verified Customer Rating',
    shareDeal: 'Share Deal',
    filterBy: 'Filter By',
    sortBy: 'Sort By',
    sortFeatured: 'Featured & Recommended',
    sortPriceLow: 'Price: Low to High',
    sortPriceHigh: 'Price: High to Low',
    sortDiscount: 'Biggest Savings (%)',
    sortRating: 'Highest Customer Rating',
    priceRange: 'Price Range (AED)',
    clearFilters: 'Clear All Filters',
    matchingProducts: 'Matching Products Found',
    noProductsFound: 'No products match your current filters.',
    trust1Title: 'UAE Farm Fresh Guaranteed',
    trust1Desc: 'Directly sourced from local greenhouse farms daily with 100% freshness inspection.',
    trust2Title: 'Cold-Chain Express Delivery',
    trust2Desc: 'Temperature-controlled chilled vans ensure dairy, meat and seafood arrive frozen & fresh.',
    trust3Title: 'Best UAE Everyday Prices',
    trust3Desc: 'Guaranteed lowest supermarket prices across Dubai, Abu Dhabi and Northern Emirates.',
    trust4Title: 'Instant WhatsApp Support',
    trust4Desc: '24/7 dedicated customer service in Arabic & English with zero hassle returns.',
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Everything you need to know about shopping with Al Mirqab Hypermarket.',
    reviewsTitle: 'Trusted by 45,000+ UAE Families',
    reviewsSubtitle: 'Real reviews from shoppers in Dubai, Abu Dhabi, Sharjah and across the Emirates.',
    footerAbout: 'Al Mirqab Hypermarket is the premier digital supermarket platform in the United Arab Emirates, delivering over 1,000+ daily essentials, fresh farm produce, butchery, dairy, and household goods at affordable AED prices.',
  },
  ar: {
    brandName: 'سوق المرقاب المركزي',
    brandTagline: 'طازج كل يوم. بأسعار تناسب كل عائلة.',
    deliveringTo: 'التوصيل إلى:',
    selectLocation: 'اختر منطقة التوصيل في الإمارات',
    expressTag: 'توصيل سريع خلال 45-60 دقيقة',
    searchPlaceholder: 'ابحث في أكثر من 1,000 منتج طازج، علامة تجارية، تصنيف...',
    allCategories: 'جميع الأقسام',
    deals: 'عروض اليوم',
    freshMarket: 'سوق الطازج',
    under10: 'أقل من 10 دراهم',
    under20: 'أقل من 20 درهم',
    familyBundles: 'الباقات العائلية',
    uaeLocal: 'مزارع الإمارات المحلية',
    brands: 'العلامات التجارية',
    bestsellers: 'الأكثر مبيعاً',
    offers: 'تخفيضات كبرى',
    newArrivals: 'وصل حديثاً',
    account: 'حسابي',
    wishlist: 'المفضلة',
    cart: 'السلة',
    viewAll: 'عرض الكل',
    addToCart: 'أضف للسلة',
    added: 'تمت الإضافة',
    save: 'وفر',
    off: 'خصم',
    inStock: 'متوفر بالمخزون',
    outOfStock: 'غير متوفر',
    freeDeliveryProgress: 'أضف بقيمة {amount} درهم إضافية للحصول على توصيل مجاني!',
    freeDeliveryReached: '🎉 مبروك! حصلت على توصيل سريع مجاني لكافة مناطق الإمارات!',
    cartEmpty: 'سلة التسوق فارغة حالياً',
    cartEmptyDesc: 'استكشف أكثر من 1,000 منتج بقالة طازج بأفضل الأسعار التنافسية بالدرهم الإماراتي.',
    subtotal: 'المجموع الفرعي',
    deliveryFee: 'رسوم التوصيل',
    free: 'مجاناً',
    discount: 'قيمة التوفير والخصم',
    total: 'المبلغ الإجمالي',
    checkout: 'متابعة الدفع الآمن',
    havePromoCode: 'هل لديك كود خصم؟',
    apply: 'تطبيق',
    promoPlaceholder: 'جرب كود MIRQAB10',
    promoApplied: 'تم تطبيق خصم السوبرماركت 10% بنجاح!',
    checkoutTitle: 'إتمام الطلب والدفع الآمن',
    step1: '1. عنوان التوصيل',
    step2: '2. موعد التوصيل المفضل',
    step3: '3. طريقة الدفع',
    step4: '4. مراجعة الطلب',
    fullName: 'الاسم بالكامل',
    phone: 'رقم الهاتف الإماراتي (+971 50 / 55 / 58)',
    emirate: 'الإمارة / المدينة',
    street: 'الشارع، الفيلا أو البناية ورقم الشقة',
    timeSlotExpress: '⚡ توصيل فوري فائق السرعة (خلال 60 دقيقة)',
    timeSlotMorning: '🌅 الفترة الصباحية (9:00 ص - 12:00 م)',
    timeSlotEvening: '🌇 الفترة المسائية (5:00 م - 9:00 م)',
    payCard: '💳 بطاقة ائتمان / خصم مباشر (فيزا، ماستركارد)',
    payApplePay: '🍎 أبل باي / جوجل باي',
    payCod: '💵 الدفع نقداً عند الاستلام (درهم إماراتي)',
    payTabby: '🛍️ تابي (قسّمها على 4 دفعات بدون فوائد)',
    placeOrder: 'تأكيد الطلب والدفع',
    orderConfirmed: 'تم تأكيد طلبك بنجاح!',
    orderPlacedText: 'شكراً لتسوقك من سوق المرقاب المركزي. جاري تجهيز منتجاتك الطازجة في صناديق مبردة للحفاظ على أعلى درجات الجودة.',
    orderNumber: 'رقم الطلب #',
    estimatedTime: 'موعد الوصول المتوقع',
    quickView: 'نظرة سريعة',
    origin: 'بلد المنشأ',
    unitSize: 'الحجم / العبوة',
    verifiedRating: 'تقييم العملاء المعتمد',
    shareDeal: 'مشاركة العرض',
    filterBy: 'تصفية المنتجات',
    sortBy: 'ترتيب حسب',
    sortFeatured: 'الموصى به والمميز',
    sortPriceLow: 'السعر: من الأقل للأعلى',
    sortPriceHigh: 'السعر: من الأعلى للأقل',
    sortDiscount: 'أعلى نسبة توفير (%)',
    sortRating: 'أعلى تقييم للعملاء',
    priceRange: 'نطاق السعر (درهم إماراتي)',
    clearFilters: 'إعادة ضبط التصفية',
    matchingProducts: 'منتجات مطابقة تم العثور عليها',
    noProductsFound: 'لم يتم العثور على منتجات تطابق خيارات التصفية.',
    trust1Title: 'ضمان طزاجة المزارع الإماراتية',
    trust1Desc: 'توريد يومي مباشر من مزارع البيوت المحمية المحلية مع فحص جودة صارم بنسبة 100%.',
    trust2Title: 'سلسلة تبريد متطورة للنقل السريع',
    trust2Desc: 'سيارات مجهزة بأنظمة تبريد وتجميد تضمن وصول اللحوم، الألبان، والأسماك طازجة تماماً.',
    trust3Title: 'أفضل أسعار التوفير في الإمارات',
    trust3Desc: 'أسعار جملة وتجزئة تنافسية ومضمونة عبر دبي، أبوظبي، وكافة الإمارات الشمالية.',
    trust4Title: 'خدمة عملاء ودعم فوري عبر واتساب',
    trust4Desc: 'فريق دعم متواجد على مدار الساعة بالعربية والإنجليزية مع ضمان استرجاع فوري وسلس.',
    faqTitle: 'الأسئلة الشائعة',
    faqSubtitle: 'كل ما تود معرفته حول تجربة التسوق والتوصيل من سوق المرقاب المركزي.',
    reviewsTitle: 'موثوق به من أكثر من 45,000 عائلة في الإمارات',
    reviewsSubtitle: 'تقييمات حقيقية من متسوقينا في دبي، أبوظبي، الشارقة ومختلف أرجاء الدولة.',
    footerAbout: 'سوق المرقاب المركزي هو المنصة الرقمية الرائدة للتسوق الغذائي في دولة الإمارات العربية المتحدة، موفراً أكثر من 1,000 منتج أساسي من المزارع، الملحمة، المخبز والمنظفات بأسعار تنافسية بالدرهم.',
  }
};
