export type RestaurantLanguage = 'en' | 'ar';

export interface RestaurantTranslations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

export const RESTAURANT_TRANSLATIONS: RestaurantTranslations = {
  // Brand & Slogan
  brandName: { en: 'AL SULTAN', ar: 'السلطان' },
  brandSubtitle: { en: 'HAUTE CUISINE & ROYAL MAJLIS', ar: 'المطبخ الملكي الرفيع والمجلس الفاخر' },
  dubaiTag: { en: 'DUBAI', ar: 'دبي' },
  
  // Navigation
  navDisciplines: { en: 'Disciplines', ar: 'الروافد الطهوية' },
  navCatalog: { en: '160 Dishes Catalog', ar: 'قائمة الـ ١٦٠ صنفاً' },
  navBanquets: { en: 'Private Banquets', ar: 'المآدب والمجالس الخاصة' },
  navChefs: { en: 'Executive Chefs', ar: 'كبار الطهاة التنفيذيين' },
  navSalons: { en: 'Dubai Salons', ar: 'فروع وصالونات دبي' },
  navSearchPlaceholder: { en: 'Search 160 dishes...', ar: 'ابحث في ١٦٠ ابتكاراً طهوياً...' },
  navReserveTable: { en: 'Reserve Table', ar: 'حجز طاولة أو مجلس' },
  navBookShort: { en: 'Book', ar: 'احجز' },
  
  // Hero Section
  heroCredentialBadge: { en: 'DUBAI DIFC • PALM JUMEIRAH • DOWNTOWN', ar: 'دبي مركز دبي المالي • نخلة جميرا • وسط المدينة' },
  heroMichelin: { en: 'MICHELIN GUIDE RECOGNIZED', ar: 'مُعتمد ومُدرج في دليل ميشلان دبي' },
  heroTitle1: { en: 'Sovereign Flavors,', ar: 'نكهات ملوكية خالدة،' },
  heroTitle2: { en: 'Architected for Royalty.', ar: 'صُممت لأصحاب الذوق الرفيع.' },
  heroSubtitle: {
    en: 'An unprecedented convergence of 18-hour Royal Emirati banquets, Tokyo-calibrated A5 Wagyu robata, and Périgord black truffle haute gastronomy. 160 bespoke creations served across Dubai’s most prestigious private salons.',
    ar: 'التقاء استثنائي يجمع بين المآدب الإماراتية الملكية المطهوة ببطء على مدى ١٨ ساعة، وروباتا لحم الواغيو الياباني A5، وفنون الترفل الأسود الفرنسي. أكثر من ١٦٠ ابتكاراً طهوياً مخصصاً يُقدم في أرقى صالونات ومجالس دبي الخاصة.'
  },
  heroReserveBtn: { en: 'Reserve Royal Salon', ar: 'حجز صالون ملكي خاص' },
  heroSimulatorBtn: { en: 'Private Banquet Simulator', ar: 'حاسبة المآدب والضيافة الخاصة' },
  heroExploreBtn: { en: 'Explore 160 Dishes', ar: 'تصفح قائمة الـ ١٦٠ صنفاً' },
  
  // Live Telemetry Bar
  telemetryDishesTitle: { en: '160 Unique', ar: '١٦٠ ابتكاراً' },
  telemetryDishesSub: { en: 'Tasting Creations', ar: 'طهوياً فريداً' },
  telemetryCertTitle: { en: 'Grade A+ Certified', ar: 'تصنيف ممتاز A+' },
  telemetryCertSub: { en: 'Dubai Municipality', ar: 'بلدية دبي للصحة والسلامة' },
  telemetrySalonsTitle: { en: '3 Private Salons', ar: '٣ صالونات ملكية' },
  telemetrySalonsSub: { en: 'DIFC, Palm & Downtown', ar: 'المركز المالي، النخلة، وسط المدينة' },
  telemetryChefsTitle: { en: '4 Master Chefs', ar: '٤ كبار طهاة عالميين' },
  telemetryChefsSub: { en: 'Paris, Tokyo & Dubai', ar: 'من باريس، طوكيو، ودبي' },

  // Disciplines Explorer
  disciplinesBadge: { en: 'Culinary Disciplines & Salons', ar: 'الروافد والمدارس الطهوية' },
  disciplinesTitle: { en: 'Eight Pillars of Sovereign Gastronomy', ar: 'أركان فنون الطهي الملكي الثمانية' },
  disciplinesSubtitle: {
    en: 'From 18-hour slow-cooked Royal Emirati banquets to Tokyo-calibrated A5 Wagyu robata and imperial Caspian caviar service, explore 160+ curated tasting creations across Dubai.',
    ar: 'من المآدب الإماراتية الملكية المطهوة ببطء إلى شواية الروباتا اليابانية للواغيو A5 وخدمة كافيار قزوين الإمبراطوري، استكشف أكثر من ١٦٠ ابتكاراً طهوياً فائق الفخامة في دبي.'
  },
  exploreTastingMenu: { en: 'Explore Tasting Menu', ar: 'استكشف قائمة التذوق' },
  activeDisciplineFilter: { en: 'Active Discipline Filter', ar: 'التصفية مفعلة حالياً' },
  dishesCount: { en: '{count} Dishes', ar: '{count} أصناف' },

  // Menu Discovery & Catalog
  catalogTitle: { en: 'The Complete 160 Haute Creations Registry', ar: 'سجل الـ ١٦٠ ابتكاراً طهوياً كاملاً' },
  catalogSubtitle: { en: 'Filter and discover our sovereign culinary creations by terroir, dietary protocol, and sommelier pairing.', ar: 'ابحث واستكشف إبداعاتنا الملكية حسب المنطقة الجغرافية، والاشتراطات الغذائية، وتوليفات المشروبات المبتكرة.' },
  searchPlaceholderCatalog: { en: 'Search by dish name, caviar, truffle, wagyu, chef...', ar: 'ابحث باسم الطبق، الكافيار، الترفل، الواغيو، الشيف...' },
  filterByMaxPrice: { en: 'Maximum Tasting Price', ar: 'الحد الأقصى لسعر الطبق' },
  onlySignaturesLabel: { en: 'Chef Signatures Only ⭐', ar: 'أطباق الشيف المميزة فقط ⭐' },
  dietaryFilterTitle: { en: 'Dietary & Terroir Verification', ar: 'الاشتراطات الغذائية والمعايير الصحية' },
  sortByTitle: { en: 'Sort By', ar: 'ترتيب حسب' },
  sortFeatured: { en: 'Featured & Sommelier Curated', ar: 'الموصى به من كبار الطهاة' },
  sortPriceAsc: { en: 'Price: Modest to Sovereign', ar: 'السعر: من الأقل للأعلى' },
  sortPriceDesc: { en: 'Price: Sovereign to Modest', ar: 'السعر: من الأعلى للأقل' },
  sortCalories: { en: 'Calories: Lowest to Highest', ar: 'السعرات: من الأقل للأعلى' },
  sortRating: { en: 'Highest Guest Rating', ar: 'الأعلى تقييماً من الضيوف' },
  sortPrepTime: { en: 'Preparation Time: Quickest', ar: 'وقت التحضير: الأسرع' },
  showingCountLabel: { en: 'Displaying {count} of {total} Sovereign Creations', ar: 'عرض {count} من أصل {total} ابتكاراً ملكياً' },
  noDishesFound: { en: 'No culinary creations matching your selected criteria.', ar: 'لم يتم العثور على أطباق تطابق معايير البحث المحددة.' },
  resetFiltersBtn: { en: 'Reset Filters', ar: 'إعادة ضبط التصفية' },
  loadMoreBtn: { en: 'Load Next 16 Haute Creations', ar: 'عرض ١٦ صنفاً إضافياً' },

  // Dish Card & Modals
  tastingPriceLabel: { en: 'Tasting Price', ar: 'سعر التجربة' },
  detailsBtn: { en: 'Details', ar: 'التفاصيل' },
  reserveBtn: { en: 'Reserve', ar: 'احجز' },
  chefSignatureBadge: { en: 'Chef Signature', ar: 'توقيع الشيف الخاص' },
  servesLabel: { en: 'Serves {count}', ar: 'يكفي {count}' },
  personSingular: { en: 'Person', ar: 'شخص' },
  personPlural: { en: 'Persons', ar: 'أشخاص' },
  sommelierPairingLabel: { en: 'Sommelier Recommended Pairing:', ar: 'توصية خبير المشروبات التوليفية:' },
  tastingNotesTitle: { en: 'Tasting Progression & Palate Notes', ar: 'مراحل التذوق وتناغم النكهات' },
  masterIngredientsTitle: { en: 'Master Ingredients', ar: 'المكونات الملكية الفاخرة' },
  tableServiceProtocolTitle: { en: 'Table Service Protocol', ar: 'بروتوكول وطقوس التقديم الملوكية' },
  compareBtn: { en: 'Compare', ar: 'مقارنة' },
  comparedBtn: { en: 'Compared', ar: 'تمت الإضافة للمقارنة' },
  saveBtn: { en: 'Save', ar: 'حفظ' },
  savedBtn: { en: 'Saved', ar: 'محفوظ في القائمة' },
  reserveForDishBtn: { en: 'Reserve Table For This Dish', ar: 'حجز طاولة لتذوق هذا الطبق' },
  exclusiveVatNotice: { en: '(Exclusive of 5% VAT)', ar: '(غير شامل ٥٪ ضريبة القيمة المضافة)' },

  // Comparator
  comparatorTitle: { en: 'Side-by-Side Tasting Comparison', ar: 'مقارنة أطباق التذوق جنباً إلى جنب' },
  comparatorSubtitle: { en: 'Gastronomy Matrix', ar: 'مصفوفة التقييم والتحليل الطهوي' },
  clearAllBtn: { en: 'Clear All', ar: 'مسح الكل' },
  emptySlot: { en: 'Empty Slot', ar: 'خانة شاغرة' },
  emptySlotDesc: { en: 'Select dish from menu with (+) button to compare', ar: 'اختر طبقاً من القائمة باستخدام زر (+) للمقارنة' },
  compCategory: { en: 'Category', ar: 'التصنيف' },
  compOrigin: { en: 'Origin / Terroir', ar: 'المصدر / المنطقة' },
  compPrice: { en: 'Price (AED)', ar: 'السعر (درهم)' },
  compCalories: { en: 'Calories (kcal)', ar: 'السعرات الحرارية' },
  compPrepTime: { en: 'Preparation Time', ar: 'وقت التحضير' },
  compServes: { en: 'Serves', ar: 'عدد الأشخاص' },
  compChef: { en: 'Executive Chef', ar: 'الشيف المسؤول' },
  compPairing: { en: 'Sommelier Pairing', ar: 'التوليفة المصاحبة' },
  compAction: { en: 'Action', ar: 'الإجراء' },

  // Private Dining Estimator
  estimatorBadge: { en: 'VIP BANQUET ESTIMATOR & SIMULATOR', ar: 'حاسبة المآدب الملكية والمناسبات الخاصة' },
  estimatorTitle: { en: 'Simulate Your Sovereign Private Banquet', ar: 'صمم مأدبتك الملكية واحسب التكلفة بدقة' },
  estimatorSubtitle: {
    en: 'Calculate transparent multi-course degustation pricing for private salons, diplomatic delegations, yacht charters, and VIP royal gatherings.',
    ar: 'احسب بدقة وشفافية تكلفة تجارب التذوق متعددة الأطباق للصالونات الخاصة، الوفود الدبلوماسية، اليخوت الفاخرة، والاحتفالات الملكية في دبي.'
  },
  step1Venue: { en: 'Step 1: Select Private Dining Salon or Yacht', ar: 'الخطوة ١: اختر الصالون الملكي أو اليخت الفاخر' },
  step2Guests: { en: 'Step 2: Number of Honored Guests', ar: 'الخطوة ٢: عدد الضيوف الكرام' },
  step3Tier: { en: 'Step 3: Multi-Course Degustation Tier', ar: 'الخطوة ٣: مستوى قائمة التذوق الملكية' },
  step4Addons: { en: 'Step 4: Bespoke Royal Enhancements', ar: 'الخطوة ٤: الإضافات والخدمات الملوكية الحصرية' },
  maxGuestsNotice: { en: 'Capacity: Up to {count} Guests', ar: 'السعة: حتى {count} ضيف' },
  guestsSliderLabel: { en: '{count} Distinguished Guests', ar: '{count} من الضيوف الكرام' },
  baseVenueFeeLabel: { en: 'Salon Private Buyout Fee', ar: 'رسوم حجز الصالون الخاص' },
  coursesCountLabel: { en: '{count} Master Courses', ar: '{count} أطباق فاخرة' },
  perPersonLabel: { en: 'per person', ar: 'لكل ضيف' },
  flatFeeLabel: { en: 'flat fee', ar: 'رسوم ثابتة' },
  liveQuoteSummaryTitle: { en: 'Live Banquet Estimate', ar: 'ملخص التقدير المالي الفوري' },
  venueFeeRow: { en: 'Private Salon Buyout:', ar: 'حجز الصالون الخاص:' },
  gastronomyTotalRow: { en: 'Haute Gastronomy ({count} Guests):', ar: 'قائمة الطعام ({count} ضيوف):' },
  addonsTotalRow: { en: 'Bespoke Enhancements:', ar: 'الخدمات والإضافات الملكية:' },
  subtotalRow: { en: 'Subtotal:', ar: 'المجموع الفرعي:' },
  serviceFeeRow: { en: 'VIP Butler & Sommelier Service (10%):', ar: 'خدمة البتلر والضيافة الملكية (١٠٪):' },
  vatRow: { en: 'UAE Statutory VAT (5%):', ar: 'ضريبة القيمة المضافة الاتحادية (٥٪):' },
  grandTotalRow: { en: 'TOTAL ALL-INCLUSIVE ESTIMATE:', ar: 'إجمالي التكلفة الشاملة:' },
  perGuestCostLabel: { en: 'Cost Per Guest: {amount}', ar: 'التكلفة لكل ضيف: {amount}' },
  proceedToReservationBtn: { en: 'Lock In Date & Reserve Salon', ar: 'تثبيت الموعد وحجز الصالون' },

  // Reservation Drawer
  reservationDrawerTitle: { en: 'VIP Table & Majlis Reservation', ar: 'حجز طاولة أو مجلس كبار الشخصيات' },
  reservationPriorityDish: { en: 'Priority Tasting Dish', ar: 'الطبق الرئيسي المطلوب مسبقاً' },
  reservationPrivateBanquet: { en: 'Private Salon Banquet', ar: 'مأدبة صالون خاص' },
  resLocationLabel: { en: 'Dining Salon Location', ar: 'فرع الصالون المفضل' },
  resDateLabel: { en: 'Date', ar: 'التاريخ' },
  resTimeLabel: { en: 'Seating Slot', ar: 'فترة الجلوس' },
  resGuestCountLabel: { en: 'Guest Count', ar: 'عدد الضيوف' },
  resFullNameLabel: { en: 'Full Name *', ar: 'الاسم الكامل *' },
  resPhoneLabel: { en: 'Mobile / WhatsApp (+971) *', ar: 'رقم الهاتف / واتساب (+971) *' },
  resEmailLabel: { en: 'Email Address *', ar: 'البريد الإلكتروني *' },
  resNotesLabel: { en: 'Special Dietary Protocols & Royal Notes', ar: 'ملاحظات خاصة والاشتراطات الغذائية' },
  resSubmitBtn: { en: 'Confirm Sovereign Reservation', ar: 'تأكيد الحجز الملكي الفوري' },
  resSuccessTitle: { en: 'Reservation Confirmed & Logged', ar: 'تم تأكيد وتسجيل حجزكم الملكي بنجاح!' },
  resSuccessDesc: {
    en: 'Your reservation has been transferred to Executive Chief Concierge. A formal bilingual confirmation with dedicated entrance instructions has been dispatched.',
    ar: 'تم تحويل حجزكم إلى كبير مسؤولي الضيافة والكونسيرج. تم إرسال رسالة التأكيد المعتمدة مع تعليمات الوصول والمدخل الخاص لكبار الشخصيات.'
  },
  resSummaryRef: { en: 'Booking Reference:', ar: 'رقم مرجع الحجز:' },
  resSummarySalon: { en: 'Salon Venue:', ar: 'الصالون والموقع:' },
  resSummarySchedule: { en: 'Date & Seating:', ar: 'الموعد وفترة الجلوس:' },
  resSummaryParty: { en: 'Party Size:', ar: 'عدد الضيوف:' },
  resCloseBtn: { en: 'Close Confirmation', ar: 'إغلاق نافذة التأكيد' },

  // Saved Menu Drawer
  shortlistTitle: { en: 'Tasting Shortlist ({count})', ar: 'قائمة أطباق التذوق المفضلة ({count})' },
  shortlistEmptyTitle: { en: 'Your tasting shortlist is empty', ar: 'قائمة الأطباق المفضلة فارغة حالياً' },
  shortlistEmptyDesc: {
    en: 'Click the heart icon on any of our 160 culinary dishes to curate your personalized tasting itinerary.',
    ar: 'انقر على أيقونة القلب في أي من الأطباق الـ ١٦٠ لتصميم برنامج التذوق الملكي المخصص لك.'
  },
  shortlistTotalLabel: { en: 'Tasting Menu Total', ar: 'إجمالي قائمة التذوق' },
  reserveAllBtn: { en: 'Reserve Table for Shortlist', ar: 'حجز طاولة لتقديم هذه الأطباق' },
  whatsappShortlistBtn: { en: 'WhatsApp Shortlist to Concierge', ar: 'إرسال القائمة للكونسيرج عبر واتساب' },

  // Search Overlay
  searchOverlayTitle: { en: 'Curated Chef Recommendations', ar: 'توصيات كبار الطهاة المختارة' },
  searchOverlayFound: { en: 'Found {count} Matches', ar: 'تم العثور على {count} نتيجة' },
  searchOverlayEmpty: { en: 'No matching culinary dishes found.', ar: 'لم يتم العثور على أطباق مطابقة.' },
  searchOverlayFooter: { en: 'AL SULTAN DUBAI • 160 SIGNATURE CREATIONS', ar: 'السلطان دبي • ١٦٠ ابتكاراً طهوياً ملوكياً' },
  searchOverlayEsc: { en: 'PRESS ESC TO CLOSE', ar: 'اضغط ESC للإغلاق' },

  // Footer
  footerAbout: {
    en: 'AL SULTAN CUISINE & ROYAL MAJLIS is Dubai’s benchmark for bespoke haute gastronomy, combining 18-hour slow-cooked Emirati heritage traditions with Paris-trained technique and Japanese master omakase.',
    ar: 'يُعد مطعم ومجلس السلطان المعيار الأرقى للطهو الرفيع المخصص في دبي، حيث يجمع بين التقاليد الإماراتية المطهوة ببطء على مدى ١٨ ساعة وفنون الطهي الفرنسي وتجارب الأوماكاسي اليابانية.'
  },
  footerConcierge: { en: '+971 4 888 7777 / +971 50 888 9999', ar: '٩٧١ ٤ ٨٨٨ ٧٧٧٧+ / ٩٧١ ٥٠ ٨٨٨ ٩٩٩٩+' },
  footerEmail: { en: 'concierge@alsultan-dubai.ae', ar: 'concierge@alsultan-dubai.ae' },
  footerColDisciplines: { en: 'Gastronomy Disciplines', ar: 'الروافد والمدارس الطهوية' },
  footerColPrivate: { en: 'Private Dining & VIP', ar: 'الضيافة والمجالس الخاصة' },
  footerColPermits: { en: 'Statutory UAE Permits', ar: 'التراخيص والاعتمادات الرسمية' },
  footerPermit1: { en: 'Dubai Municipality Health & Safety Grade A+ (#DM-FD-2026-9921)', ar: 'بلدية دبي للصحة والسلامة الغذائية تصنيف ممتاز A+ (ترخيص #DM-FD-2026-9921)' },
  footerPermit2: { en: 'ESMA 100% Halal Slaughterhouse Certified', ar: 'شهادة ذبح حلال معتمدة ١٠٠٪ من هيئة الإمارات للمواصفات والمقاييس (مواصفات)' },
  footerPermit3: { en: 'DET Luxury Fine Dining Commercial License #774029', ar: 'رخصة تجارية للمطاعم الفاخرة من دائرة الاقتصاد والسياحة بدبي #774029' },
  footerRights: { en: '© 2026 AL SULTAN CUISINE DUBAI LLC. ALL RIGHTS RESERVED.', ar: 'جميع الحقوق محفوظة © ٢٠٢٦ شركة مطعم السلطان دبي ش.ذ.م.م.' },
  footerAedNotice: { en: 'ALL PRICES QUOTED IN UAE DIRHAM (AED)', ar: 'جميع الأسعار بالدرهم الإماراتي (د.إ)' },
  footerShowcaseTag: { en: 'PORTFOLIO FLAGSHIP #08', ar: 'المشروع النموذجي الرائد #08' },

  // Currency
  currency: { en: 'AED', ar: 'د.إ' },
  currencyFull: { en: 'UAE Dirhams', ar: 'درهم إماراتي' },
};

export const RESTAURANT_DISCIPLINES_AR: Record<string, {
  name: string;
  subtitle: string;
  highlight: string;
}> = {
  'royal-emirati-heritage': {
    name: 'المطبخ الإماراتي والخليجي الملكي',
    subtitle: 'مجبوس الزعفران، ساق الجمل المطهو ١٨ ساعة، ولقيمات الذهب عيار ٢٤',
    highlight: 'الخيار الأول للوفود والعائلات المرموقة'
  },
  'french-haute-gastronomy': {
    name: 'فن الطهي الفرنسي الرفيع والترفل',
    subtitle: 'تورشون كبد البط، الترفل الأسود من بيريغورد، وكونفي البط الفاخر',
    highlight: 'تنفيذ استثنائي بمعايير نجوم ميشلان'
  },
  'japanese-omakase-wagyu': {
    name: 'أوماكاسي وروباتا الواغيو الياباني',
    subtitle: 'ريب آي واغيو كاجوشيما A5، أوتورو التونة، ويوني هوكايدو البحري',
    highlight: 'شحن جوي أسبوعي طازج من سوق تويوسو بطوكيو'
  },
  'mediterranean-seafood': {
    name: 'مأكولات البحر المتوسط ومحارة الساحل',
    subtitle: 'كركند صخري عماني ثيرميدور وروبيان كارابينيرو الإسباني النادر',
    highlight: 'صيد بحري طازج من الخليج العربي وبريتاني'
  },
  'caviar-beluga-flights': {
    name: 'الكافيار الإمبراطوري وبيلوغا قزوين',
    subtitle: 'بيلوغا إمبريال ٥٠ جم، أوسيترا رويال، وتشكيلة كالوكا كوين الملكية',
    highlight: 'طقوس تقديم خاصة بملاعق عرق اللؤلؤ'
  },
  'dry-aged-prime-cuts': {
    name: 'لحوم معتقة ٤٥ يوماً وشرائح الذهب',
    subtitle: 'توماهوك الذهب عيار ٢٤ بوزن ١.٢ كجم، واغيو الزيتون، ونخاع العظم',
    highlight: 'معتقة في غرف الملح الصخري الهيمالاي'
  },
  'haute-pastry-cafe': {
    name: 'الحلويات الراقية ومقهى الذهب ٢٤ قيراط',
    subtitle: 'باريس بريست بالفستق، الورد الدمشقي، والقهوة بزعفران نيغين',
    highlight: 'شوكولاتة جراند كرو نقية المصدر'
  },
  'private-dining-majlis': {
    name: 'الصالونات والمجالس الخاصة وطاولة الشيف',
    subtitle: 'تجربة تذوق حسية من ١٢ صنفاً ومآدب أفقية في أعالي السحاب',
    highlight: 'بتلر وخبير ضيافة ملكي خاص وحصري'
  }
};

export const RESTAURANT_CATEGORIES_AR: Record<string, string> = {
  'all': 'كافة الـ ١٦٠ صنفاً',
  'royal-emirati-heritage': 'المطبخ الإماراتي والخليجي الملكي',
  'royal-emirates-heritage': 'المطبخ الإماراتي والخليجي الملكي',
  'french-haute-gastronomy': 'فن الطهي الفرنسي والترفل',
  'japanese-omakase-wagyu': 'أوماكاسي وروباتا الواغيو',
  'mediterranean-seafood': 'مأكولات البحر المتوسط والأسماك',
  'levant-coastal-seafood': 'مأكولات البحر والساحل الشامي',
  'caviar-beluga-flights': 'الكافيار الإمبراطوري وبيلوغا',
  'dry-aged-prime-cuts': 'اللحوم المعتقة وشرائح الذهب',
  'persian-saffron-grills': 'المشاوي بالزعفران الفارسي',
  'haute-pastry-cafe': 'الحلويات الفاخرة ومقهى الذهب',
  'ottoman-palace-meze': 'مقبلات القصور العثمانية',
  'artisanal-flatbreads': 'المخبوزات والخبز الحرفي',
  'majlis-confectionery': 'حلويات ومشروبات المجلس',
  'botanical-infusions-mocktails': 'التوليفات العشبية والموكتيلات',
  'private-dining-majlis': 'الصالونات والمجالس الخاصة',
  'private-imperial-banqueting': 'المآدب الإمبراطورية الخاصة'
};

export const RESTAURANT_DIETARY_AR: Record<string, string> = {
  'Halal Certified': 'حلال معتمد ١٠٠٪',
  'Gluten Free': 'خالٍ من الغلوتين',
  'Contains Shellfish': 'يحتوي على قشريات بحرية',
  'Organic Ingredients': 'مكونات عضوية طبيعية',
  'Vegetarian Option': 'خيار نباتي متاح',
  'Dairy': 'مشتقات الحليب الفاخرة',
  'Nuts': 'يحتوي على مكسرات',
  'Raw Fish': 'أسماك نيئة فاخرة (ساشيمي)',
  'Contains Caviar': 'يحتوي على كافيار إمبراطوري',
  '24K Gold Plated': 'موشح بالذهب الصالح للأكل عيار ٢٤'
};

export const RESTAURANT_VENUES_AR: Record<string, {
  name: string;
  location: string;
  description: string;
}> = {
  'difc-crystal-salon': {
    name: 'صالون الكريستال الملكي - مركز دبي المالي',
    location: 'قرية البوابة، مبنى ٠٨، مركز دبي المالي العالمي، دبي',
    description: 'صالون خاص بجدران كريستالية مع خط طهي خاص، قبو للمشروبات التوليفية، ومدخل خاص لخدمة صف السيارات الفاخرة.'
  },
  'palm-terrace-majlis': {
    name: 'مجلس التراس البحري - نخلة جميرا',
    location: 'الهلال الغربي، نخلة جميرا، دبي',
    description: 'مجلس وتراس مائي فسيح يطل على أفق دبي مارينا مع موقد حطب مفتوح وردهة استرخاء ملكية خاصة.'
  },
  'skyview-penthouse-salon': {
    name: 'صالون سكاي فيو بنتهاوس - وسط مدينة دبي',
    location: 'حي الأوبرا، وسط مدينة دبي',
    description: 'ملاذ ضيافة فائق الفخامة في الطابق ٥٤ مع إطلالات بانورامية ساحرة على برج خليفة ومجلس دبلوماسي مخصص.'
  },
  'superyacht-charter-dining': {
    name: 'ضيافة اليخت السوبر الملكي VIP',
    location: 'نادي دبي لليخوت، دبي هاربر',
    description: 'طاقم طهاة وخدمة فندقية متكاملة على متن يخت فاخر بطول ١٢٠ قدماً يبحر على طول ساحل دبي الساحر.'
  }
};

export const RESTAURANT_TIERS_AR: Record<string, {
  name: string;
  highlights: string;
}> = {
  '5-course': {
    name: 'قائمة ٥ أطباق: التراث الإماراتي والتوقيع الفرنسي',
    highlights: 'تشمل حساء الترفل الأسود من بيريغورد، ريب آي الواغيو، وبافلوفا الورد الدمشقي'
  },
  '8-course': {
    name: 'قائمة ٨ أطباق: رحلة التذوق الملكية الكبرى',
    highlights: 'تشمل تارتليت كافيار أوسيترا، كركند صخور عمان، وواغيو كاجوشيما A5 الياباني'
  },
  '12-course': {
    name: 'قائمة ١٢ طبقاً: السيمفونية الإمبراطورية السيادية',
    highlights: 'طاولة شيف حسية متكاملة مع كافيار بيلوغا إمبريال، شرائح الذهب عيار ٢٤، ومختبر الحلويات النادرة'
  }
};

export const RESTAURANT_ADDONS_AR: Record<string, {
  name: string;
  description: string;
}> = {
  'caviar-upgrade': {
    name: 'خدمة طاولة كافيار بيلوغا الإمبراطوري (٥٠ جم)',
    description: 'يُقدم على قاعدة منحوتة من الجليد مع ملاعق عرق اللؤلؤ وخبز البليني الطازج'
  },
  'gold-leaf-service': {
    name: 'توشيح الطبق الرئيسي بأوراق الذهب عيار ٢٤ الخالص',
    description: 'رقائق ذهب عيار ٢٤ صالحة للأكل معتمدة من فلورنسا توضع مباشرة أمام الضيوف'
  },
  'sommelier-pairings': {
    name: 'توليفة المشروبات العشبية والتعتيق الفاخرة',
    description: 'موكتيلات نادرة وخلاصات تمر معتقة ومستخلصات زهور وأعشاب برية'
  },
  'live-oud-lutenist': {
    name: 'عازف عود كلاسيكي وموسيقى أندلسية حية',
    description: 'ألحان خليجية وأندلسية كلاسيكية هادئة تضفي أجواءً من السكينة والسمو'
  },
  'tableside-flambe': {
    name: 'عروض الفلامبيه وإشعال اللهب المباشر من الشيف التنفيذي',
    description: 'تقنيات طهي وحرق مباشرة أمام الطاولة بلمسات نارية ساحرة'
  }
};
