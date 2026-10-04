export type Language = 'en' | 'ar';

export interface Translations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

export const FROZEN_TRANSLATIONS: Translations = {
  // Brand & Nav
  brandName: { en: 'FROZEN SUPPLY CO.', ar: 'شركة الإمداد المجمد' },
  brandTagline: { en: 'UAE Commercial Cold-Chain & Foodservice Supply', ar: 'توريد الأغذية المجمدة وسلسلة التبريد التجارية في الإمارات' },
  navCategories: { en: 'Categories', ar: 'الأقسام' },
  navCatalog: { en: 'Master Catalog', ar: 'الكتالوج الكامل' },
  navColdChain: { en: 'Cold-Chain Journey', ar: 'سلسلة التبريد' },
  navTrustFaq: { en: 'Certifications & FAQ', ar: 'الشهادات والأسئلة' },
  navCompare: { en: 'Compare', ar: 'مقارنة' },
  navRequestQuote: { en: 'Supply Request', ar: 'طلب التوريد' },
  searchPlaceholder: { en: 'Search 216+ frozen products, cuts, brands...', ar: 'ابحث في أكثر من 216 منتج مجمد، لحوم، دواجن...' },
  topBarHub: { en: 'Dubai Central Cold Vault: -22°C Live Telemetry Active', ar: 'مستودع دبي المركزي للتبريد: -22° م القياس المباشر نشط' },
  topBarDelivery: { en: 'Same-Day Dubai & 24h UAE-Wide Scheduled Delivery', ar: 'توصيل في نفس اليوم لدبي وخلال 24 ساعة لكافة الإمارات' },
  
  // Hero
  heroBadge: { en: 'UAE COMMERCIAL FOODSERVICE & RETAIL B2B', ar: 'توريد تجاري للمطاعم والفنادق وقطاع التجزئة في الإمارات' },
  heroTitle1: { en: 'Sub-Zero Precision.', ar: 'دقة فائقة تحت الصفر.' },
  heroTitle2: { en: 'Unbroken Cold-Chain Supply.', ar: 'سلسلة تبريد متكاملة ومضمونة.' },
  heroDesc: { en: 'Direct wholesale distribution of certified poultry, prime beef, wild seafood, IQF vegetables, and artisan frozen bakery for UAE commercial kitchens, luxury hospitality, and supermarkets.', ar: 'توزيع بالجملة للدواجن المعتمدة، اللحوم الفاخرة، المأكولات البحرية، الخضروات المجمدة، والمخبوزات للمطابخ التجارية والفنادق ومراكز التسوق في الإمارات.' },
  heroExploreCatalog: { en: 'Explore 216+ SKUs', ar: 'استكشف 216+ صنف' },
  heroRequestRfq: { en: 'Build Supply Request', ar: 'إنشاء طلب توريد تجاري' },
  
  // Telemetry & Stats
  statSkus: { en: '216+ Commercial SKUs', ar: '216+ صنف تجاري' },
  statSkusDesc: { en: 'Across 8 Foodservice Sectors', ar: 'عبر 8 قطاعات تموين' },
  statTemp: { en: '-25°C to -18°C', ar: '-25° م إلى -18° م' },
  statTempDesc: { en: 'Calibrated Storage & Transit', ar: 'تخزين ونقل مبرد ومعاير' },
  statDispatch: { en: 'Same-Day / 24h', ar: 'نفس اليوم / 24 ساعة' },
  statDispatchDesc: { en: 'Dedicated UAE Multi-Temp Fleet', ar: 'أسطول شاحنات مبردة مخصص' },
  statHalal: { en: '100% Halal & ESMA', ar: '100% حلال ومعتمد ESMA' },
  statHalalDesc: { en: 'Dubai Municipality Approved', ar: 'معتمد من بلدية دبي' },
  
  // Categories Section
  categoriesTitle: { en: 'Wholesale Product Sectors', ar: 'قطاعات المنتجات بالجملة' },
  categoriesSubtitle: { en: 'Calibrated for UAE hotels, restaurant chains, catering operations, and retailers.', ar: 'مخصصة للفنادق، وسلاسل المطاعم، وشركات التموين، ومتاجر التجزئة في الإمارات.' },
  viewSector: { en: 'View Products', ar: 'عرض المنتجات' },
  allCategories: { en: 'All 8 Sectors', ar: 'كافة القطاعات (8)' },
  
  // Catalog Section
  catalogTitle: { en: 'Commercial Cold-Chain Master Catalog', ar: 'الكتالوج التجاري الموحد للمنتجات المجمدة' },
  catalogSubtitle: { en: 'Filter by cut, temperature zone, MOQ, and origin. Direct pallet & carton wholesale pricing in AED.', ar: 'تصفح حسب نوع القطع، درجة التبريد، الحد الأدنى للطلب، والمنشأ. أسعار الجملة المباشرة بالدرهم الإماراتي.' },
  showingProducts: { en: 'Showing', ar: 'عرض' },
  ofProducts: { en: 'of', ar: 'من أصل' },
  productsWord: { en: 'commercial products', ar: 'منتج تجاري' },
  sortBy: { en: 'Sort by:', ar: 'ترتيب حسب:' },
  sortFeatured: { en: 'Featured & Bestsellers', ar: 'المميزة والأكثر طلباً' },
  sortPriceAsc: { en: 'Price: Low to High', ar: 'السعر: من الأقل للأعلى' },
  sortPriceDesc: { en: 'Price: High to Low', ar: 'السعر: من الأعلى للأقل' },
  sortMoqAsc: { en: 'Lowest MOQ', ar: 'أقل كمية للطلب (MOQ)' },
  sortNameAsc: { en: 'Product Name (A-Z)', ar: 'اسم المنتج (أ-ي)' },
  filterOrigin: { en: 'Origin', ar: 'بلد المنشأ' },
  allOrigins: { en: 'All Origins', ar: 'كافة البلدان' },
  filterPriceRange: { en: 'Carton Price Range', ar: 'نطاق سعر الكرتون' },
  filterStockOnly: { en: 'In Stock Only', ar: 'المتوفر في المستودع فقط' },
  clearFilters: { en: 'Reset Filters', ar: 'إعادة ضبط التصفية' },
  noProductsFound: { en: 'No matching commercial products found.', ar: 'لم يتم العثور على منتجات مطابقة لخيارات البحث.' },
  
  // Product Card
  moqBadge: { en: 'MOQ:', ar: 'الحد الأدنى:' },
  cartons: { en: 'Cartons', ar: 'كرتون' },
  pricePerKg: { en: 'per kg', ar: 'لكل كغ' },
  cartonPrice: { en: 'Carton', ar: 'الكرتون' },
  inStockBadge: { en: 'In Vault', ar: 'متوفر بالمستودع' },
  halalCertified: { en: 'Halal Certified', ar: 'حلال معتمد' },
  quickView: { en: 'Quick Specs', ar: 'المواصفات السريعة' },
  addToQuote: { en: 'Add to Supply Request', ar: 'إضافة لطلب التوريد' },
  addedToQuote: { en: 'Added to Request', ar: 'تمت الإضافة للطلب' },
  compareProduct: { en: 'Compare', ar: 'مقارنة' },
  comparing: { en: 'Comparing', ar: 'قيد المقارنة' },
  
  // Product Modal
  productSpecs: { en: 'Technical Specifications', ar: 'المواصفات الفنية' },
  tierPricingTitle: { en: 'Volume Tier Pricing Matrix (AED)', ar: 'مصفوفة أسعار الكميات بالجملة (درهم)' },
  tierQuantity: { en: 'Order Quantity', ar: 'كمية الطلب' },
  tierUnitRate: { en: 'Rate per Carton', ar: 'سعر الكرتون' },
  tierDiscount: { en: 'Savings', ar: 'نسبة التوفير' },
  coldChainSpecs: { en: 'Cold-Chain & Storage Compliance', ar: 'معايير التخزين وسلسلة التبريد' },
  certificationsTitle: { en: 'Safety & Quality Certifications', ar: 'شهادات الجودة والسلامة الغذائية' },
  defrostGuide: { en: 'Commercial Defrost & Preparation Protocol', ar: 'إرشادات إذابة التجميد والتحضير' },
  
  // Request Drawer
  drawerTitle: { en: 'Commercial Supply Request (RFQ)', ar: 'طلب التوريد التجاري وعرض الأسعار' },
  drawerSubtitle: { en: 'Generate formal wholesale quote with volume tiers and delivery schedule.', ar: 'احصل على عرض أسعار رسمي مع تخفيضات الكميات وجدول التوريد.' },
  emptyDrawer: { en: 'Your supply request is currently empty.', ar: 'قائمة طلبات التوريد فارغة حالياً.' },
  emptyDrawerDesc: { en: 'Browse our 216+ master catalog and add products to compose your commercial procurement schedule.', ar: 'تصفح الكتالوج الكامل (216+ صنف) وأضف المنتجات لتجهيز جدول التوريد لمؤسستك.' },
  itemQty: { en: 'Quantity (Cartons):', ar: 'الكمية (كرتون):' },
  activeTierApplied: { en: 'Volume Tier Applied:', ar: 'شريحة الخصم المطبقة:' },
  deliveryDetails: { en: 'Business & Delivery Details', ar: 'بيانات المؤسسة والتوصيل' },
  businessName: { en: 'Company / Establishment Name', ar: 'اسم الشركة / المؤسسة' },
  contactPerson: { en: 'Procurement Officer Name', ar: 'اسم مسؤول المشتريات' },
  phoneLabel: { en: 'UAE Phone Number', ar: 'رقم الهاتف في الإمارات' },
  emailLabel: { en: 'Official Business Email', ar: 'البريد الإلكتروني للعمل' },
  emirateLabel: { en: 'Delivery Emirate', ar: 'إمارة التوصيل' },
  addressLabel: { en: 'Receiving Dock / Facility Address', ar: 'عنوان موقع الاستلام / المستودع' },
  trnLabel: { en: 'TRN Tax Number (Optional)', ar: 'الرقم الضريبي TRN (اختياري)' },
  deliverySlotLabel: { en: 'Preferred Delivery Window', ar: 'فترة التوصيل المفضلة' },
  slotMorning: { en: 'Morning Slot (06:00 – 11:00)', ar: 'الفترة الصباحية (06:00 – 11:00)' },
  slotAfternoon: { en: 'Afternoon Slot (12:00 – 17:00)', ar: 'فترة الظهيرة (12:00 – 17:00)' },
  slotNight: { en: 'Night Dock Receiving (22:00 – 04:00)', ar: 'استلام ليلي للمستودعات (22:00 – 04:00)' },
  specialNotes: { en: 'Custom Palletizing or Stacking Notes', ar: 'ملاحظات الرص وتجهيز الطبليات' },
  orderSummary: { en: 'Supply Summary', ar: 'ملخص التوريد' },
  totalCartons: { en: 'Total Cartons:', ar: 'إجمالي الكراتين:' },
  estWeight: { en: 'Estimated Net Weight:', ar: 'الوزن الصافي التقريبي:' },
  subtotalAed: { en: 'Subtotal (Excl. VAT):', ar: 'المجموع (غير شامل الضريبة):' },
  vatAed: { en: 'UAE VAT (5%):', ar: 'ضريبة القيمة المضافة (5%):' },
  deliveryFee: { en: 'Reefer Freight Dispatch:', ar: 'شحن ونقل مبرد:' },
  freeDelivery: { en: 'FREE (Threshold Reached)', ar: 'مجاناً (تم بلوغ الحد الأدنى)' },
  estimatedTotal: { en: 'Total Supply Quote:', ar: 'إجمالي عرض التوريد:' },
  submitRfqBtn: { en: 'Submit Commercial RFQ', ar: 'إرسال طلب التوريد التجاري' },
  whatsappRfqBtn: { en: 'Instant Quote via WhatsApp (+971 4 882 7400)', ar: 'عرض سعر فوري عبر واتساب (+971 4 882 7400)' },
  
  // Cold Chain Section
  coldChainTitle: { en: '6-Stage Sub-Zero Telemetry Pipeline', ar: 'مراحل سلسلة التبريد الست تحت الصفر' },
  coldChainSubtitle: { en: 'Uninterrupted temperature logging from global port arrivals to your hotel or commercial kitchen dock.', ar: 'تسجيل حراري متواصل ودقيق من وصول الشحنات للموانئ حتى تسليمها لمنشأتكم.' },
  
  // Trust & FAQ Section
  trustTitle: { en: 'Accreditations, Vaults & Operations', ar: 'الاعتمادات والمستودعات والعمليات' },
  faqTitle: { en: 'Commercial Supply FAQ', ar: 'الأسئلة الشائعة حول التوريد' },
  faqSubtitle: { en: 'Everything you need to know about credit terms, cold-chain standards, and delivery schedules in the UAE.', ar: 'كل ما تود معرفته عن التسهيلات الائتمانية، معايير التبريد، ومواعيد التوصيل في الإمارات.' },
  
  // Final CTA
  ctaTitle: { en: 'Ready to Calibrate Your Foodservice Supply?', ar: 'هل ترغب في تنظيم وتأمين توريد الأغذية المجمدة لمنشأتك؟' },
  ctaDesc: { en: 'Join 350+ leading UAE hotels, restaurants, and catering operations with guaranteed uninterrupted cold-chain and volume tier wholesale pricing.', ar: 'انضم لأكثر من 350 فندق ومطعم ومؤسسة تموين في الإمارات مع ضمان الجودة وسلسلة التبريد وأفضل أسعار الجملة.' },
  ctaCall: { en: 'Call Procurement Desk', ar: 'اتصل بقسم المشتريات' },
  ctaWhatsApp: { en: 'Chat with Trade Specialist', ar: 'تحدث مع خبير التوريد عبر واتساب' },
  ctaCatalog: { en: 'Download PDF Catalog Spec', ar: 'تحميل مواصفات الكتالوج PDF' },
  
  // Footer
  footerRights: { en: 'All Rights Reserved • UAE Commercial Cold-Chain Operations', ar: 'جميع الحقوق محفوظة • عمليات سلسلة التبريد التجارية في الإمارات' },
  footerDisclaimer: { en: 'Food safety monitored under Dubai Municipality Food Watch standards.', ar: 'تخضع سلامة الأغذية لمعايير برنامج فود ووتش التابع لبلدية دبي.' }
};
