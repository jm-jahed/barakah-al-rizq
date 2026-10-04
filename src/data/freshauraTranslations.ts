export type FreshauraLanguage = 'en' | 'ar';

export interface FreshauraTranslationEntry {
  en: string;
  ar: string;
}

export const FRESHAURA_TRANSLATIONS: Record<string, FreshauraTranslationEntry> = {
  // Brand & Nav
  brandName: { en: 'FRESHAURA', ar: 'فريش أورا' },
  brandSubtitle: { en: 'FARM FRESH • UAE ORGANIC HARVEST', ar: 'حصاد المزارع الطازج • منتجات عضوية الإمارات' },
  tagline: { en: 'Farm Freshness, Delivered Daily.', ar: 'طزاجة المزارع، تصلكم يومياً.' },
  
  // Navigation Links
  navProduce: { en: 'All Produce', ar: 'كافة المنتجات' },
  navCategories: { en: 'Categories', ar: 'الأقسام' },
  navFruitBoxes: { en: 'Fruit Box Builder', ar: 'صمم صندوق فواكهك' },
  navVegBoxes: { en: 'Family Veg Boxes', ar: 'صناديق الخضار العائلية' },
  navDailyDeals: { en: 'Daily Deals', ar: 'عروض الحصاد اليومية' },
  navWholesale: { en: 'B2B & Wholesale', ar: 'التوريد للشركات والمطاعم' },
  navDelivery: { en: 'UAE Delivery', ar: 'التوصيل في الإمارات' },
  navFAQ: { en: 'FAQs', ar: 'الأسئلة الشائعة' },

  // Header utilities
  searchPlaceholder: { en: 'Search 200+ farm-fresh fruits, vegetables, berries, herbs...', ar: 'ابحث في أكثر من ٢٠٠ صنف من الفواكه، الخضار، التوتيات والأعشاب...' },
  selectCity: { en: 'Select Emirate', ar: 'اختر الإمارة' },
  deliveringTo: { en: 'Delivering to:', ar: 'التوصيل إلى:' },
  expressSlot: { en: 'Express Delivery in 2 Hours', ar: 'توصيل سريع خلال ساعتين' },
  cart: { en: 'Cart', ar: 'السلة' },
  wishlist: { en: 'Saved', ar: 'المفضلة' },
  freeDeliveryBadge: { en: 'FREE DELIVERY OVER AED 75', ar: 'توصيل مجاني للطلبات فوق ٧٥ د.إ' },
  coldChainBadge: { en: '4°C REFRIGERATED COLD-CHAIN FLEET', ar: 'أسطول شاحنات مبردة بدرجة ٤ مئوية' },

  // Hero
  heroPill: { en: '100% PURE FARM-FRESH PRODUCE • HARVESTED AT 4:00 AM', ar: 'منتجات طازجة ١٠٠٪ من المزرعة • حُصدت في الـ ٤:٠٠ فجراً' },
  heroTitleLine1: { en: 'The Freshest Fruits & Vegetables in the UAE,', ar: 'أجود الفواكه والخضروات الطازجة في الإمارات،' },
  heroTitleLine2: { en: 'Delivered from Farm to Door in 2 Hours.', ar: 'تصلكم من المزرعة إلى بابكم خلال ساعتين.' },
  heroDesc: {
    en: 'Sustainably grown Al Ain hydroponic greens, sweet Mediterranean berries, handpicked organic fruits, and premium exotic harvests kept in strict 4°C temperature control across Dubai, Abu Dhabi, Sharjah & all 7 Emirates.',
    ar: 'ورقيات طازجة من مزارع العين المائية، توتيات البحر المتوسط الفاخرة، فواكه عضوية منتقاة بعناية، ومحاصيل استوائية محفوظة بنظام تبريد صارم بدرجة ٤ مئوية مع التوصيل لكافة إمارات الدولة.'
  },
  heroCtaShop: { en: 'Shop 200+ Fresh Items', ar: 'تسوق أكثر من ٢٠٠ صنف طازج' },
  heroCtaBox: { en: 'Build Custom Fruit Box', ar: 'صمم صندوق فواكه مخصص' },
  heroCtaWhatsapp: { en: 'Quick WhatsApp Order', ar: 'طلب سريع عبر واتساب' },

  // Stats Bar
  statOrders: { en: 'Fresh UAE Orders Delivered', ar: 'طلب طازج تم توصيله' },
  statProducts: { en: 'Curated Produce Items', ar: 'صنف زراعي طازج' },
  statSatisfaction: { en: 'Customer Satisfaction', ar: 'نسبة رضا العملاء' },
  statDeliveryTime: { en: 'Average Delivery Time', ar: 'متوسط سرعة التوصيل' },

  // Categories Section
  catSectionTitle: { en: 'Explore by Harvest Category', ar: 'تصفح حسب أقسام المحاصيل' },
  catSectionSubtitle: { en: '200+ farm-fresh items hand-selected each morning for maximum sweetness, crisp texture, and zero bruising.', ar: 'أكثر من ٢٠٠ صنف طازج يتم فرزها يدوياً كل صباح لضمان أعلى مستويات الحلاوة والنضارة.' },
  viewAllCategories: { en: 'View All 10 Categories', ar: 'عرض كافة الأقسام العشرة' },

  // Product Catalog Section
  catalogTitle: { en: 'Fresh Harvest Marketplace', ar: 'سوق المحاصيل والمنتجات الطازجة' },
  catalogSubtitle: { en: 'Live inventory from local UAE hydroponic greenhouses and certified international organic orchards.', ar: 'مخزون مباشر ومحدث من البيوت المحمية الإماراتية وبساتين الفواكه العضوية المعتمدة عالمياً.' },
  filterAll: { en: 'All 200+ Items', ar: 'كافة الـ ٢٠٠ صنف' },
  filterOrganic: { en: '100% Organic Only', ar: 'عضوي معتمد فقط' },
  filterLocal: { en: 'UAE Local Farms', ar: 'مزارع الإمارات المحلية' },
  filterBestsellers: { en: 'Bestsellers', ar: 'الأكثر طلباً' },
  filterDeals: { en: 'Daily Deals', ar: 'عروض اليوم' },
  searchInCatalog: { en: 'Filter by item name or origin...', ar: 'تصفية حسب الاسم أو بلد المنشأ...' },
  sortBy: { en: 'Sort by:', ar: 'ترتيب حسب:' },
  sortFeatured: { en: 'Featured Harvest', ar: 'محاصيل مختارة' },
  sortPriceAsc: { en: 'Price: Low to High', ar: 'السعر: من الأقل للأعلى' },
  sortPriceDesc: { en: 'Price: High to Low', ar: 'السعر: من الأعلى للأقل' },
  sortRating: { en: 'Highest Rated', ar: 'الأعلى تقييماً' },
  displayingCount: { en: 'Displaying', ar: 'عرض' },
  ofTotal: { en: 'of', ar: 'من أصل' },
  freshItems: { en: 'farm-fresh produce items', ar: 'صنفاً طازجاً' },
  loadMore: { en: 'Load More Items', ar: 'عرض المزيد من الأصناف' },
  showAll: { en: 'Show All 200+ Produce', ar: 'عرض كافة الـ ٢٠٠ صنف' },
  allLoaded: { en: 'All 200+ Farm-Fresh Items Loaded', ar: 'تم عرض كافة المحاصيل الـ ٢٠٠' },
  noProductsFound: { en: 'No fresh produce items match your criteria.', ar: 'لم يتم العثور على منتجات مطابقة لمعايير البحث.' },
  resetFilters: { en: 'Reset All Filters', ar: 'إعادة ضبط التصفية' },

  // Product Card & Quick View
  addToCart: { en: 'Add to Cart', ar: 'أضف للسلة' },
  added: { en: 'Added', ar: 'تمت الإضافة' },
  quickView: { en: 'Quick View', ar: 'نظرة سريعة' },
  saveWishlist: { en: 'Save', ar: 'حفظ' },
  saved: { en: 'Saved', ar: 'محفوظ' },
  inStock: { en: 'In Stock (Fresh Today)', ar: 'متوفر (طازج اليوم)' },
  harvestOrigin: { en: 'Origin:', ar: 'بلد المنشأ:' },
  storageTemp: { en: 'Storage Temperature:', ar: 'درجة حرارة الحفظ:' },
  freshnessGuarantee: { en: '100% Bruise-Free Freshness Guarantee', ar: 'ضمان النضارة التامة والخلو من العيوب ١٠٠٪' },
  harvestNotes: { en: 'Harvest & Cold-Chain Protocol:', ar: 'بروتوكول الحصاد وسلسلة التبريد:' },
  nutritionalHighlights: { en: 'Nutritional Value & Benefits:', ar: 'القيمة الغذائية والفوائد الصحية:' },
  relatedProduce: { en: 'Pairs Well With & Related Produce:', ar: 'أصناف يُنصح بإضافتها:' },
  orderViaWhatsAppDirect: { en: 'Order This via WhatsApp', ar: 'اطلب هذا الصنف عبر واتساب' },

  // Fruit Box Builder
  builderBadge: { en: 'CUSTOM HARVEST ATELIER', ar: 'صمم صندوق فواكهك المخصص' },
  builderTitle: { en: 'Build Your Custom Farm Fruit Box', ar: 'اختر فواكهك المفضلة واستمتع بخصم فوري' },
  builderSubtitle: {
    en: 'Pick your desired box capacity, select fresh seasonal and exotic fruits, and get them delivered in a luxury ventilated wooden-style keepsake box.',
    ar: 'اختر حجم الصندوق المناسب، حدد تشكيلة الفواكه الموسمية والاستوائية التي تفضلها، وسنقوم بتوصيلها في صندوق فاخر مهوى يحفظ النضارة.'
  },
  boxSizeSmall: { en: 'Weekly Essentials Box (3.5 KG)', ar: 'صندوق الاحتياج الأسبوعي (٣.٥ كجم)' },
  boxSizeMedium: { en: 'Family Harvest Box (7.0 KG)', ar: 'صندوق الحصاد العائلي (٧.٠ كجم)' },
  boxSizeLarge: { en: 'Imperial Luxury Box (12.0 KG)', ar: 'صندوق الضيافة الملكي الفاخر (١٢.٠ كجم)' },
  selectedFruitsCount: { en: 'Selected Fruits:', ar: 'الفواكه المختارة:' },
  boxTotalWeight: { en: 'Estimated Weight:', ar: 'الوزن التقريبي:' },
  boxPrice: { en: 'Custom Box Price:', ar: 'سعر الصندوق المخصص:' },
  boxSavings: { en: 'Bundle Savings:', ar: 'التوفير مقارنة بالشراء الفردي:' },
  addCustomBoxToCart: { en: 'Add Custom Box to Shopping Cart', ar: 'أضف الصندوق المخصص لسلة التسوق' },
  minFruitsRequired: { en: 'Please select at least 3 fruits for this box size', ar: 'يرجى اختيار ٣ فواكه على الأقل لهذا الحجم' },

  // Pre-Built Veg Boxes
  vegBoxesBadge: { en: 'FARM-TO-TABLE BUNDLES', ar: 'صناديق الخضار العائلية الجاهزة' },
  vegBoxesTitle: { en: 'Curated Fresh Vegetable & Cooking Boxes', ar: 'صناديق الخضار المشكلة لوجبات الأسبوع' },
  vegBoxesSubtitle: {
    en: 'Save up to 30% with pre-packed vegetable assortments for daily UAE family cooking, salads, and healthy juicing.',
    ar: 'وفر حتى ٣٠٪ مع تشكيلات الخضار المتكاملة المعبأة خصيصاً للطبخ المنزلي والسلطات والعصائر الصحية.'
  },
  includesItems: { en: 'Includes Fresh Items:', ar: 'يحتوي على الأصناف التالية:' },
  addVegBoxToCart: { en: 'Add Box to Cart', ar: 'أضف الصندوق للسلة' },

  // Deals Section
  dealsBadge: { en: 'LIMITED MORNING HARVEST', ar: 'عروض الحصاد الصباحي المحدودة' },
  dealsTitle: { en: 'Today’s Flash Deals & Volume Discounts', ar: 'عروض اليوم الحصرية وتخفيضات الكميات' },
  dealsSubtitle: { en: 'Air-freighted specialty produce with special promotional pricing valid for today’s delivery slots only.', ar: 'محاصيل منتقاة بأسعار ترويجية خاصة متاحة لفترات التوصيل اليوم فقط.' },
  dealEndsIn: { en: 'Deal ends in:', ar: 'ينتهي العرض خلال:' },
  hours: { en: 'Hours', ar: 'ساعات' },
  mins: { en: 'Mins', ar: 'دقائق' },
  secs: { en: 'Secs', ar: 'ثواني' },

  // Freshness Guarantee 4 Pillars
  pillar1Title: { en: '4:00 AM Dawn Harvest', ar: 'حصاد الفجر ٤:٠٠ صباحاً' },
  pillar1Desc: { en: 'Local greens and vegetables harvested before sunrise from hydroponic farms in Al Ain & RAK to preserve peak crispness and vitamins.', ar: 'حصاد يومي قبل شروق الشمس من مزارع العين ورأس الخيمة المائية لحفظ الفيتامينات والقرمشة الطبيعية.' },
  pillar2Title: { en: 'Strict 4°C Cold Chain', ar: 'سلسلة تبريد صارمة ٤° مئوية' },
  pillar2Desc: { en: 'Transported and sorted in refrigerated hubs. Our dedicated temperature-controlled vans ensure produce never gets warm in UAE heat.', ar: 'فرز ونقل في منشآت مبردة وشاحنات مجهزة تمنع تعرض المنتجات لحرارة الصيف.' },
  pillar3Title: { en: 'Zero Plastic Eco Packs', ar: 'تغليف بيئي خالٍ من البلاستيك' },
  pillar3Desc: { en: 'Ventilated micro-perforated biodegradable kraft paper bags and recyclable corrugated boxes allow produce to breathe naturally.', ar: 'أكياس ورقية قابلة للتحلل وصناديق كرتونية مهواة تمنع تراكم الرطوبة وتحافظ على النضارة.' },
  pillar4Title: { en: '100% Bruise-Free Refund', ar: 'ضمان الاستبدال الفوري ١٠٠٪' },
  pillar4Desc: { en: 'If any single fruit or vegetable fails your quality expectation, message us on WhatsApp for an instant credit or replacement.', ar: 'إذا لم يعجبك أي صنف، راسلنا على واتساب لاستبداله فوراً أو استرداد قيمته دون أي تعقيد.' },

  // UAE Delivery Route Simulator
  deliveryBadge: { en: 'TEMPERATURE-CONTROLLED FLEET', ar: 'توصيل مبرد لجميع إمارات الدولة' },
  deliveryTitle: { en: 'UAE Delivery Schedule & Coverage', ar: 'جدول التوصيل والتغطية في الإمارات' },
  deliverySubtitle: { en: 'Select your Emirate to check real-time delivery cut-offs, minimum orders, and available morning/evening windows.', ar: 'اختر إمارتك لمعرفة مواعيد التوصيل، الحد الأدنى للطلب، والفترات المتاحة صباحاً ومساءً.' },
  freeDeliveryOver: { en: 'FREE Delivery on orders over', ar: 'توصيل مجاني للطلبات فوق' },
  minOrderRequirement: { en: 'Minimum order:', ar: 'الحد الأدنى للطلب:' },
  deliverySlotsAvailable: { en: 'Available Delivery Windows:', ar: 'الفترات الزمنية المتاحة:' },
  simulateAddressBtn: { en: 'Check Area Coverage & Timeslot', ar: 'تحقق من تغطية منطقتك وفترة التوصيل' },

  // B2B & Wholesale Section
  wholesaleBadge: { en: 'HORECA & B2B PROCUREMENT', ar: 'توريد الفنادق والمطاعم والشركات' },
  wholesaleTitle: { en: 'Wholesale Farm Produce for Restaurants, Hotels & Cafes', ar: 'توريد الخضار والفواكه بالجملة للمطاعم والفنادق' },
  wholesaleDesc: {
    en: 'We supply over 140 leading fine-dining kitchens, luxury hotels, luxury cafes, and corporate offices across Dubai and Abu Dhabi with customized daily bulk produce crates, pre-cut vegetables, and exotic culinary imports.',
    ar: 'نزود أكثر من ١٤٠ مطبخاً راقياً وفندقاً فاخراً ومقهى ومقراً للشركات في دبي وأبوظبي باحتياجاتهم اليومية من الخضار والفواكه الطازجة بالجملة مع جداول تسليم مخصصة.'
  },
  wholesaleFeature1: { en: 'Dedicated Account Manager & Customized Invoicing', ar: 'مدير حسابات مخصص وفواتير ضريبية معتمدة' },
  wholesaleFeature2: { en: 'Custom Pre-cut, Peeled & Vacuum-Sealed Vegetables', ar: 'خضار مقطعة ومقشرة ومغلفة بالتفريغ الهوائي حسب الطلب' },
  wholesaleFeature3: { en: 'Guaranteed 5:00 AM Morning Kitchen Delivery', ar: 'ضمان التسليم الصباحي للمطابخ في تمام الـ ٥:٠٠ فجراً' },
  wholesaleFeature4: { en: 'Credit Facilities & Volume Tiered Pricing', ar: 'تسهيلات ائتمانية وأسعار تفضيلية حسب حجم الطلب' },
  requestWholesaleQuote: { en: 'Request Wholesale HORECA Catalog', ar: 'طلب كتالوج وقائمة أسعار الجملة' },
  wholesaleWhatsapp: { en: 'WhatsApp B2B Procurement Desk', ar: 'التواصل مع قسم مبيعات الجملة عبر واتساب' },

  // Cart Drawer & Checkout
  cartTitle: { en: 'Your Fresh Produce Basket', ar: 'سلة المنتجات الطازجة' },
  cartEmptyTitle: { en: 'Your basket is currently empty', ar: 'سلتك فارغة حالياً' },
  cartEmptyDesc: { en: 'Explore our 200+ farm-fresh fruits, vegetables, and curated harvest boxes to start filling your basket.', ar: 'تصفح أكثر من ٢٠٠ صنف من الخضار والفواكه والصناديق العائلية وابدأ بملء سلتك.' },
  itemsInCart: { en: 'items', ar: 'أصناف' },
  subtotal: { en: 'Produce Subtotal:', ar: 'المجموع الفرعي:' },
  deliveryFee: { en: 'Temperature-Controlled Delivery:', ar: 'رسوم التوصيل المبرد:' },
  freeDelivery: { en: 'FREE', ar: 'مجاناً' },
  totalToPay: { en: 'Total Amount (Incl. 5% VAT):', ar: 'الإجمالي (شاملاً ضريبة القيمة المضافة ٥٪):' },
  awayFromFreeDelivery: { en: 'Add {amount} more for FREE Delivery!', ar: 'أضف {amount} إضافية للحصول على توصيل مجاني!' },
  freeDeliveryUnlocked: { en: '🎉 You have unlocked FREE Express Delivery!', ar: '🎉 تهانينا! حصلت على توصيل سريع مجاني!' },
  selectDeliveryDate: { en: 'Select Preferred Delivery Date:', ar: 'اختر تاريخ التوصيل المفضل:' },
  selectDeliverySlot: { en: 'Select 2-Hour Delivery Window:', ar: 'اختر فترة التوصيل (نافذة ساعتين):' },
  enterCustomerName: { en: 'Recipient Full Name *', ar: 'اسم المستلم بالكامل *' },
  enterCustomerPhone: { en: 'UAE WhatsApp / Mobile Number (+971) *', ar: 'رقم الهاتف / واتساب في الإمارات (+971) *' },
  enterCustomerAddress: { en: 'Building, Villa, Street & Area in UAE *', ar: 'البناية، الفيلا، الشارع والمنطقة في الإمارات *' },
  paymentMethod: { en: 'Payment Method:', ar: 'طريقة الدفع:' },
  payCardOnline: { en: 'Credit/Debit Card (Online Payment)', ar: 'بطاقة ائتمان / مدى (دفع إلكتروني آمن)' },
  payCod: { en: 'Cash on Delivery (Refrigerated Van)', ar: 'الدفع نقداً عند الاستلام' },
  payCardOnDelivery: { en: 'Card on Delivery (POS Machine)', ar: 'الدفع بالبطاقة عند الاستلام' },
  payApplePay: { en: 'Apple Pay / Google Pay', ar: 'أبل باي / جوجل باي' },
  specialInstructions: { en: 'Notes for Driver (e.g. Leave at door, ring bell):', ar: 'ملاحظات للسائق (مثال: ترك الطلب عند الباب):' },
  proceedToCheckout: { en: 'Proceed to Checkout', ar: 'متابعة إتمام الطلب' },
  confirmAndPlaceOrder: { en: 'Confirm & Place Fresh Order', ar: 'تأكيد وإرسال الطلب الآن' },
  checkoutWithWhatsApp: { en: 'Express Checkout via WhatsApp', ar: 'إتمام الطلب السريع عبر واتساب' },
  clearBasket: { en: 'Clear Basket', ar: 'إفراغ السلة' },
  orderSuccessTitle: { en: 'Fresh Harvest Order Confirmed!', ar: 'تم تأكيد طلبك بنجاح!' },
  orderSuccessDesc: {
    en: 'Thank you! Your fresh fruits and vegetables are being packed in our 4°C cold facility in Al Quoz and will be dispatched in our refrigerated fleet.',
    ar: 'شكراً لك! يتم حالياً تجهيز طلبك في مستودعنا المبرد بدرجة ٤ مئوية في القوز بدبي وسيتم تسليمه عبر أسطولنا المبرد.'
  },
  orderReference: { en: 'Order Reference:', ar: 'رقم مرجع الطلب:' },
  trackViaWhatsApp: { en: 'Track Order & Message Care Team via WhatsApp', ar: 'تتبع الطلب والتواصل مع خدمة العملاء عبر واتساب' },
  closeCart: { en: 'Continue Shopping', ar: 'متابعة التسوق' },

  // FAQ Section
  faqTitle: { en: 'Frequently Asked Questions', ar: 'الأسئلة الأكثر شيوعاً' },
  faqSubtitle: { en: 'Everything you need to know about our daily harvest, 4°C cold chain, delivery schedules, and freshness guarantee.', ar: 'كل ما تود معرفته عن الحصاد اليومي، سلسلة التبريد، مواعيد التوصيل، وضمان النضارة.' },

  // Footer
  footerAbout: {
    en: 'FRESHAURA is the UAE’s benchmark online farm produce destination. Sourcing directly from Al Ain greenhouses, RAK farms, and organic growers worldwide to bring uncompromised freshness to your kitchen table.',
    ar: 'فريش أورا هي الوجهة الرائدة لتوصيل الخضار والفواكه الطازجة في الإمارات. نتزود مباشرة من بيوت العين المحمية ومزارع رأس الخيمة وبساتين العالم العضوية لنصلك بأعلى مستويات النضارة.'
  },
  footerQuickLinks: { en: 'Quick Links', ar: 'روابط سريعة' },
  footerCategories: { en: 'Produce Categories', ar: 'أقسام المنتجات' },
  footerCompliance: { en: 'UAE Licensure & Permits', ar: 'التراخيص والاعتمادات الرسمية' },
  permitDm: { en: 'Dubai Municipality Food Safety Grade A+ (#DM-FS-2026-4418)', ar: 'بلدية دبي — تصنيف سلامة الغذاء فئة A+ (ترخيص #DM-FS-2026-4418)' },
  permitMoiat: { en: 'Ministry of Climate Change & Environment Organic Certified', ar: 'وزارة التغير المناخي والبيئة — شهادة اعتماد المنتجات العضوية' },
  permitDet: { en: 'Dubai Economy & Tourism Commercial License #982104', ar: 'دائرة الاقتصاد والسياحة بدبي — رخصة تجارية رقم ٩٨٢١٠٤' },
  footerCopyright: { en: 'FRESHAURA PRODUCE & GROCERY TRADING LLC. ALL RIGHTS RESERVED.', ar: 'شركة فريش أورا لتجارة الخضار والفواكه ذ.م.م. جميع الحقوق محفوظة.' },
  footerCurrency: { en: 'ALL PRICES QUOTED IN UAE DIRHAM (AED)', ar: 'جميع الأسعار المعروضة بالدرهم الإماراتي (د.إ)' },
  footerPortfolio: { en: 'WEBSTUDIO AE SHOWCASE #33', ar: 'نموذج معرض أعمال ويب ستوديو الإمارات #٣٣' }
};
