'use client';

import frozenCatalogJson from './frozenSupplyCatalog.json';

export interface TierPrice {
  minQuantity: number;
  priceAED: number;
  discountPercent: number;
  label: string;
}

export interface FrozenProduct {
  id: string;
  sku: string;
  name: string;
  nameAr?: string;
  category: string;
  categorySlug: string;
  subcategory: string;
  subcategoryAr?: string;
  priceAED: number;
  originalPriceAED?: number;
  pricePerKgAED: number;
  unit: string;
  packSize: string;
  weightKg: number;
  moq: number;
  origin: string;
  brand: string;
  storageTemp: string;
  packaging: string;
  shelfLife: string;
  certifications: string[];
  image: string;
  gallery: string[];
  description: string;
  descriptionAr?: string;
  shortDescription: string;
  features: string[];
  specifications: Record<string, string>;
  tierPricing: TierPrice[];
  isFeatured: boolean;
  isBestseller: boolean;
  isNewArrival: boolean;
  inStock: boolean;
  stockCartonsAvailable: number;
}

export interface SupplyRequestItem {
  product: FrozenProduct;
  quantity: number;
  selectedTierPrice: number;
  customNotes?: string;
}

export interface CategoryInfo {
  id: string;
  name: string;
  nameAr?: string;
  tagline: string;
  taglineAr?: string;
  tempZone: string;
  iconName: string;
  itemCount: number;
  featuredImage: string;
  description: string;
  descriptionAr?: string;
  subcategories?: string[];
}

export const FROZEN_BRAND = {
  name: 'FROZEN SUPPLY CO.',
  nameAr: 'شركة الإمداد المجمد',
  tagline: 'UAE Commercial Cold-Chain & Foodservice Supply',
  taglineAr: 'توريد الأغذية المجمدة وسلسلة التبريد التجارية في الإمارات',
  heroHeading: 'Precision Cold-Chain Supply for UAE Foodservice & Retail',
  heroHeadingAr: 'إمداد وسلسلة تبريد دقيقة للمطاعم والفنادق وقطاع التجزئة',
  heroSubheading: 'Direct wholesale distribution of certified poultry, prime meats, seafood, IQF produce, and bakery goods. Monitored sub-zero cold-chain across all 7 Emirates.',
  heroSubheadingAr: 'توزيع مباشر بالجملة للدواجن واللحوم والمأكولات البحرية والخضروات والمخبوزات مع مراقبة حرارية مستمرة لكافة الإمارات السبع.',
  headquarters: 'Dubai Industrial City (DIC) • Cold Logistics Terminal 4',
  headquartersAr: 'مدينة دبي الصناعية • مبنى الخدمات اللوجستية المبردة 4',
  hubs: [
    { city: 'Dubai', cityAr: 'دبي', hub: 'Dubai Industrial City & Al Aweer Logistics Center', temp: '-22°C Deep Vault' },
    { city: 'Abu Dhabi', cityAr: 'أبوظبي', hub: 'ICAD Industrial Zone & Mina Zayed Cold Terminal', temp: '-20°C Vault' },
    { city: 'Sharjah & Northern Emirates', cityAr: 'الشارقة والإمارات الشمالية', hub: 'Al Sajaa Cold Distribution Hub', temp: '-22°C Vault' }
  ],
  phone: '+971 4 882 7400',
  whatsapp: 'https://wa.me/971508827400?text=Hello%20Frozen%20Supply%20Co.,%20I%20would%20like%20to%20request%20a%20wholesale%20commercial%20quotation.',
  email: 'procurement@frozensupply.ae',
  minOrderAed: 1500,
  freeDeliveryThresholdAed: 3500,
  fleetCount: '48 Dedicated Multi-Temp Reefer Trucks',
  fleetCountAr: '48 شاحنة مبردة متعددة درجات التبريد',
  deliveryWindow: 'Same-Day Dubai & 24h UAE-Wide Scheduled Delivery',
  deliveryWindowAr: 'توصيل في نفس اليوم لدبي وخلال 24 ساعة لكافة الإمارات'
};

export const FROZEN_CATEGORIES: CategoryInfo[] = [
  {
    id: 'frozen-poultry',
    name: 'Poultry & Chicken',
    nameAr: 'الدواجن والدجاج',
    tagline: 'Grade A Brazilian & European Whole Birds & Custom Cuts',
    taglineAr: 'دجاج كامل وقطع مجهزة درجة أولى من البرازيل وأوروبا',
    tempZone: '-18°C to -22°C',
    iconName: 'Poultry',
    itemCount: 27,
    featuredImage: 'https://images.unsplash.com/photo-1587593810167-a84920ea0781?auto=format&fit=crop&w=800&q=80',
    description: 'Whole griller birds, skinless boneless breast fillets, drumsticks, shawarma cones, and marinated wings calibrated for high-volume foodservice.',
    descriptionAr: 'دجاج كامل مجمد، صدور دجاج منزوعة العظم والجلد، أفخاذ، أسياخ شاورما وأجنحة متبلة للمطابخ التجارية والفنادق.'
  },
  {
    id: 'frozen-beef-veal',
    name: 'Prime Beef & Veal',
    nameAr: 'اللحوم البقرية والعجول',
    tagline: 'Australian & South American Grain/Grass-Fed Primal Cuts',
    taglineAr: 'قطع لحوم فاخرة مغذاة على الحبوب والأعشاب من أستراليا وأمريكا الجنوبية',
    tempZone: '-18°C to -24°C',
    iconName: 'Beef',
    itemCount: 27,
    featuredImage: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80',
    description: 'Vacuum-sealed ribeyes, striploins, tenderloins, calibrated burger patties, and foodservice ground beef with certified Halal traceability.',
    descriptionAr: 'ريب آي مفرغ من الهواء، ستريب لوين، تندرلوين، برجر لحم معاير، ولحم مفروم معتمد حلال مع تتبع كامل.'
  },
  {
    id: 'frozen-seafood',
    name: 'Seafood & Fish',
    nameAr: 'المأكولات البحرية والأسماك',
    tagline: 'Norwegian Salmon, Vannamei Prawns & White Fish Fillets',
    taglineAr: 'سلمون نرويجي، روبيان فانامي، وفيليه أسماك بيضاء فاخرة',
    tempZone: '-20°C to -26°C',
    iconName: 'Fish',
    itemCount: 27,
    featuredImage: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    description: 'Deep-sea IQF salmon portions, peeled and tail-on prawns, calamari rings, lobster tails, and breaded seafood engineered for culinary precision.',
    descriptionAr: 'قطع سلمون مجمدة فردياً، روبيان مقشر وذيل، حلقات كالاماري، ذيول كركند، ومأكولات بحرية متبلة.'
  },
  {
    id: 'frozen-vegetables',
    name: 'IQF Vegetables',
    nameAr: 'الخضروات المجمدة IQF',
    tagline: 'European Flash-Frozen Sweet Corn, Peas & Potato Specialties',
    taglineAr: 'ذرة حلوة، بازلاء وبطاطس بلجيكية مجمدة بالتبريد الفوري',
    tempZone: '-18°C to -20°C',
    iconName: 'Vegetable',
    itemCount: 27,
    featuredImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    description: 'Zero-clump Individually Quick Frozen vegetables, 4-way mixes, Belgian cut french fries, broccoli florets, and pre-diced kitchen staples.',
    descriptionAr: 'خضار مشكل مجمد فردياً بدون تكتل، بطاطس مقلية مستوردة، زهرات بروكلي، وخضروات مقطعة جاهزة للطبخ.'
  },
  {
    id: 'frozen-fruits-purees',
    name: 'Fruits & Purees',
    nameAr: 'الفواكه والبوريه المجمد',
    tagline: 'High-Brix Wild Berries, Tropical Chunks & Beverage Purees',
    taglineAr: 'توت بري طبيعي، قطع فواكه استوائية، وهريس للمشروبات والحلويات',
    tempZone: '-18°C to -22°C',
    iconName: 'Fruit',
    itemCount: 27,
    featuredImage: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=800&q=80',
    description: 'Grade A IQF blueberries, raspberries, açaí pulp slabs, mango chunks, and 100% natural fruit puree tubs for pastry chefs and juice bars.',
    descriptionAr: 'توت أزرق وأحمر نخب أول، لب آساي برازيلي، مكعبات مانجو، وهريس فواكه طبيعي 100% لصناع الحلويات والعصائر.'
  },
  {
    id: 'ready-to-cook-appetizers',
    name: 'Ready-to-Cook',
    nameAr: 'المقبلات الجاهزة للطهي',
    tagline: 'Fast-Service Tempura, Spring Rolls, Sambousek & Finger Foods',
    taglineAr: 'سمبوسك بالجبن، كبة شامية، سبرينغ رولز وتمبورا مجهزة للخدمة السريعة',
    tempZone: '-18°C to -20°C',
    iconName: 'Appetizer',
    itemCount: 27,
    featuredImage: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
    description: 'Consistent portion-controlled breaded tenders, mozzarella sticks, authentic cheese sambousek, kibbeh, and Asian dim sum for quick operations.',
    descriptionAr: 'أصابع دجاج مقرمشة، أصابع موزاريلا، سمبوسك جبن ولحم، كبة عربية وديم سوم عالي الجودة للخدمة الفندقية.'
  },
  {
    id: 'frozen-bakery-pastries',
    name: 'Bakery & Par-Baked',
    nameAr: 'المخبوزات ونصف المخبوزة',
    tagline: 'French Butter Croissants, Artisan Bread & Pastry Sheets',
    taglineAr: 'كرواسون زبدة فرنسي، خبز باجيت ارتيزان، وعجائن مجمدة جاهزة للخبز',
    tempZone: '-18°C to -20°C',
    iconName: 'Bakery',
    itemCount: 27,
    featuredImage: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    description: 'Pre-proofed frozen croissants, par-baked baguettes, gourmet brioche burger buns, puff pastry rolls, and pizza dough balls.',
    descriptionAr: 'كرواسون فرنسي خام مخمر، خبز باجيت نصف مخبوز، خبز بريوش للبرجر، عجينة بف باستري وكرات عجين بيتزا.'
  },
  {
    id: 'dairy-frozen-creams',
    name: 'Dairy & Frozen Creams',
    nameAr: 'منتجات الألبان والأجبان المجمدة',
    tagline: 'Bulk Unsalted Butter, Mozzarella Blocks & Heavy Creams',
    taglineAr: 'زبدة غير مملحة كتل، جبنة موزاريلا مبشورة وكتل وكريمة خفق',
    tempZone: '-18°C to -22°C',
    iconName: 'Dairy',
    itemCount: 27,
    featuredImage: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80',
    description: '25kg dairy butter blocks, shredded mozzarella blends, pasteurized frozen egg whites, and high-fat foodservice whipping creams.',
    descriptionAr: 'كتل زبدة طبيعية 25 كغ، موزاريلا مبشورة للبيتزا، بياض بيض مبستر مجمد، وكريمة خفق أوروبية للمطابخ.'
  }
];

export const FROZEN_PRODUCTS: FrozenProduct[] = frozenCatalogJson as FrozenProduct[];

export const COLD_CHAIN_JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Certified Origin Sourcing',
    titleAr: 'التوريد المعتمد من بلد المنشأ',
    subtitle: 'Global Producers & Farm Inspections',
    subtitleAr: 'فحص مزارع ومسالخ عالمية معتمدة',
    desc: 'Direct container procurement from accredited abattoirs and farms in Brazil, Australia, Norway, and Europe with strict ESMA Halal certification compliance.',
    descAr: 'استيراد حاويات مباشرة من مسالخ ومزارع معتمدة في البرازيل، أستراليا، النرويج وأوروبا مع مطابقة تامة لمعايير الحلال الإماراتية ESMA.',
    tempBadge: 'Pre-Shipment QA',
    tempBadgeAr: 'فحص الجودة المسبق',
    icon: 'ShieldCheck'
  },
  {
    step: '02',
    title: 'IQF Deep Blast Freezing',
    titleAr: 'التجميد السريع العميق IQF',
    subtitle: 'Ultra-Fast -40°C Micro-Crystal Lock',
    subtitleAr: 'تجميد فوري فائق عند -40° م لحفظ الأنسجة',
    desc: 'Individually Quick Frozen within hours of harvest/slaughter. Micro-crystals prevent cellular damage, preserving genuine texture, color, and natural flavor upon thaw.',
    descAr: 'تجميد فردي سريع خلال ساعات من الذبح أو الحصاد لمنع تلف الخلايا والحفاظ على القوام والنكهة الطبيعية عند الطهي.',
    tempBadge: '-40°C Blast Freeze',
    tempBadgeAr: '-40° م تجميد فوري',
    icon: 'Snowflake'
  },
  {
    step: '03',
    title: 'Automated Deep Cold Vaults',
    titleAr: 'مستودعات التبريد الآلية الفائقة',
    subtitle: 'Dubai Industrial City & ICAD Hubs',
    subtitleAr: 'مستودعات مدينة دبي الصناعية وأبوظبي',
    desc: 'Stored in 35,000-pallet high-bay automated sub-zero warehouses monitored 24/7 with continuous digital NIST calibrated telemetry sensors.',
    descAr: 'تخزين في مستودعات آلية بسعة 35,000 طبلية مع مراقبة مستمرة على مدار الساعة بحساسات رقمية دقيقة.',
    tempBadge: '-22°C Continuous',
    tempBadgeAr: '-22° م تبريد مستمر',
    icon: 'Building2'
  },
  {
    step: '04',
    title: 'Multi-Temp Reefer Transport',
    titleAr: 'أسطول النقل المبرد متعدد الحرارات',
    subtitle: '48 GPS-Tracked Refrigerator Fleets',
    subtitleAr: '48 شاحنة تبريد مزودة بتتبع GPS ومجسات حرارة',
    desc: 'Loaded through sealed cold-dock bellows directly into Euro-6 temperature-controlled trucks equipped with real-time temperature loggers and door-seal tripwires.',
    descAr: 'تحميل مباشر عبر منصات شحن معزولة ومبردة إلى شاحنات يورو 6 مزودة بسجلات حرارية فورية وأجهزة إنذار للأبواب.',
    tempBadge: '-18°C Reefer Fleet',
    tempBadgeAr: '-18° م أسطول مبرد',
    icon: 'Truck'
  },
  {
    step: '05',
    title: 'Guaranteed Doorstep Delivery',
    titleAr: 'التسليم الموثق لباب المنشأة',
    subtitle: 'HORECA, Supermarkets & Central Kitchens',
    subtitleAr: 'للفنادق والمطاعم والمطابخ المركزية ومراكز التسوق',
    desc: 'Direct transfer to client walk-in freezers across Dubai, Abu Dhabi, Sharjah, and Northern Emirates with verified temperature readout receipts.',
    descAr: 'نقل مباشر إلى غرف التجميد لدى العميل في دبي، أبوظبي، الشارقة والإمارات الشمالية مع إيصال قراءة حرارية معتمد.',
    tempBadge: 'Verified Receipt',
    tempBadgeAr: 'إيصال حراري موثق',
    icon: 'CheckCircle2'
  }
];

export const FROZEN_METRICS = [
  { value: '216+', label: 'Commercial SKUs in Stock', labelAr: 'صنف تجاري متوفر بالمستودع' },
  { value: '-22°C', label: 'Guaranteed Cold-Chain', labelAr: 'سلسلة تبريد مضمونة ومعايرة' },
  { value: '48 Units', label: 'UAE Reefer Fleet', labelAr: 'شاحنة مبردة في الأسطول' },
  { value: '100%', label: 'Halal & ESMA Certified', labelAr: 'معتمد 100% حلال و ESMA' },
  { value: '7 Emirates', label: 'Scheduled Daily Deliveries', labelAr: 'توصيل يومي لكافة الإمارات السبع' }
];

export const FROZEN_FAQS = [
  {
    q: 'What is the Minimum Order Quantity (MOQ) for commercial frozen supply?',
    qAr: 'ما هو الحد الأدنى للطلب (MOQ) لتوريد الأغذية المجمدة بالجملة؟',
    a: 'Our standard Minimum Order Value across Dubai and Sharjah is AED 1,500 (or 5–10 master cartons per SKU). Orders exceeding AED 3,500 qualify for complimentary cold-chain reefer delivery.',
    aAr: 'الحد الأدنى المعتاد للطلب داخل دبي والشارقة هو 1,500 درهم (أو 5 إلى 10 كراتين لكل صنف). الطلبات التي تتجاوز 3,500 درهم مؤهلة للتوصيل المبرد المجاني.'
  },
  {
    q: 'How do you guarantee cold-chain temperature integrity during delivery?',
    qAr: 'كيف تضمنون ثبات درجة الحرارة وسلسلة التبريد أثناء النقل؟',
    a: 'All 48 vehicles in our fleet are equipped with dual-compressor Carrier and Thermo King refrigeration units set to -18°C to -22°C. Live GPS telemetry and digital temperature logs are printed upon delivery for your HACCP compliance records.',
    aAr: 'كافة شاحناتنا الـ 48 مزودة بوحدات تبريد Carrier و Thermo King مزدوجة الضواغط بدرجة -18° م إلى -22° م مع سجل حراري رقمي مباشر يسلم عند الاستلام.'
  },
  {
    q: 'Are all meat and poultry products 100% Halal certified in the UAE?',
    qAr: 'هل جميع منتجات اللحوم والدواجن معتمدة حلال 100% في الإمارات؟',
    a: 'Yes. Every batch of poultry, beef, and veal is accompanied by official UAE ESMA approved Halal slaughter certificates, municipal veterinary inspection seals, and Dubai Municipality Food Watch verification.',
    aAr: 'نعم، جميع شحنات الدواجن واللحوم مرفقة بشهادات ذبح حلال رسمية معتمدة من هيئة المواصفات والمقاييس ESMA وتفتيش بلدية دبي وموثقة عبر Food Watch.'
  },
  {
    q: 'What are your delivery lead times across the UAE and GCC?',
    qAr: 'ما هي مواعيد وجداول التوصيل عبر الإمارات ودول الخليج؟',
    a: 'For Dubai, Sharjah, and Ajman, we offer next-day scheduled morning delivery for orders finalized before 5:00 PM. Deliveries to Abu Dhabi, Al Ain, RAK, and Fujairah run on 48-hour fixed schedules. Cross-border GCC reefer exports (Saudi Arabia, Oman, Qatar) are coordinated through our JAFZA cold hub.',
    aAr: 'نوفر التوصيل الصباحي في اليوم التالي لدبي والشارقة وعجمان للطلبات المؤكدة قبل 5 مساءً، وتوصيل خلال 48 ساعة لأبوظبي والعين ورأس الخيمة والفجيرة، ونقل خليجي عبر جافزا.'
  },
  {
    q: 'Can we set up recurring commercial supply contracts with tiered wholesale pricing?',
    qAr: 'هل يمكن توقيع عقود توريد دورية مع أسعار تفضيلية حسب الكميات؟',
    a: 'Yes. We provide monthly and quarterly supply agreements for hotel groups, restaurant chains, catering companies, and supermarkets with guaranteed stock reservation and volume tier discounts up to 14% off standard wholesale rates.',
    aAr: 'نعم، نقدم اتفاقيات توريد شهرية وربع سنوية لسلاسل الفنادق والمطاعم مع حجز مسبق للمخزون وخصومات كميات تصل إلى 14% من سعر الجملة.'
  },
  {
    q: 'What payment terms are available for verified B2B corporate accounts?',
    qAr: 'ما هي التسهيلات وشروط الدفع المتاحة للشركات والمؤسسات التجارية؟',
    a: 'New corporate clients begin on Advance Bank Transfer or Cash/Card on Delivery. Following credit assessment, established UAE commercial entities can apply for 30-day or 60-day credit facilities.',
    aAr: 'يبدأ العملاء الجدد بالتحويل البنكي أو الدفع عند الاستلام، وبعد التحقق والتقييم الائتماني يمكن الحصول على تسهيلات سداد لمدة 30 أو 60 يوماً.'
  }
];

export const TRUST_CERTIFICATIONS = [
  { name: 'UAE ESMA Halal Certified', nameAr: 'معتمد حلال من هيئة المواصفات ESMA', desc: 'Compliant with UAE 2055-1 standards for Islamic slaughter', descAr: 'مطابق للمواصفة القياسية الإماراتية للذبح الحلال' },
  { name: 'HACCP Codex Alimentarius', nameAr: 'شهادة الهاسب HACCP الدولية', desc: 'Hazard analysis and critical control points certified facilities', descAr: 'نظام تحليل المخاطر وضبط نقاط التحكم الحرجة' },
  { name: 'ISO 22000:2018', nameAr: 'أيزو سلامة الغذاء ISO 22000', desc: 'Global food safety management system accreditation', descAr: 'نظام إدارة سلامة الغذاء المعتمد دولياً' },
  { name: 'Dubai Municipality Food Watch', nameAr: 'برنامج فود ووتش - بلدية دبي', desc: '100% digital batch traceability and compliance verified', descAr: 'تتبع رقمي موثق لكافة الشحنات والمنتجات' }
];
