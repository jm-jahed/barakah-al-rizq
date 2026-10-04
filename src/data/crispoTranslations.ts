export type CrispoLanguage = 'en' | 'ar';

export interface CrispoTranslations {
  [key: string]: {
    en: string;
    ar: string;
  };
}

export const CRISPO_TRANSLATIONS: CrispoTranslations = {
  // Brand & Slogan
  brandName: { en: 'CRISPO', ar: 'كريسبو' },
  brandTagline: { en: 'CRAVE. CRUNCH. REPEAT.', ar: 'قرمشة لا تُقاوم. لذة تتكرر.' },
  brandSubheading: { 
    en: 'Golden, extra-crispy, hand-breaded fried chicken, gourmet burgers, loaded fries, and signature dips made fresh to order.', 
    ar: 'دجاج مقلي مقرمش ومتبل يدوياً، برجر فاخر، بطاطس مقرمشة محملة بالجبن، وصلصات حصرية تُحضر طازجة عند الطلب.' 
  },
  
  // Navigation
  navHome: { en: 'Home', ar: 'الرئيسية' },
  navMenu: { en: 'Menu', ar: 'القائمة' },
  navCombos: { en: 'Combos & Meals', ar: 'الوجبات والكومبو' },
  navOffers: { en: 'Offers', ar: 'العروض' },
  navMealBuilder: { en: 'Build Your Box', ar: 'صمم وجبتك' },
  navTracking: { en: 'Live Tracking', ar: 'تتبع الطلب' },
  navRewards: { en: 'Rewards', ar: 'المكافآت' },
  navLocations: { en: 'Branches', ar: 'الفروع' },
  navAbout: { en: 'Quality Story', ar: 'معايير الجودة' },
  navCart: { en: 'Cart', ar: 'السلة' },
  navOrderNow: { en: 'Order Now', ar: 'اطلب الآن' },
  navSearchPlaceholder: { en: 'Search burgers, fried chicken, wings, combos...', ar: 'ابحث عن البرجر، الدجاج المقرمش، الأجنحة، الوجبات...' },
  
  // Order Modes
  orderModeDelivery: { en: 'Delivery', ar: 'توصيل للمنزل' },
  orderModePickup: { en: 'Pickup', ar: 'استلام من الفرع' },
  orderModeDineIn: { en: 'Dine-In', ar: 'تناول بالفرع' },
  deliveryTimeTo: { en: 'Delivering to:', ar: 'التوصيل إلى:' },
  pickupFrom: { en: 'Pickup from:', ar: 'الاستلام من:' },
  avgDeliveryTime: { en: '28 Mins Express', ar: 'توصيل خلال ٢٨ دقيقة' },
  startOrderBtn: { en: 'Start Order', ar: 'ابدأ الطلب' },
  changeBranch: { en: 'Change Branch', ar: 'تغيير الفرع' },
  
  // Hero
  heroBadge: { en: 'DUBAI’S CRUNCHIEST FRIED CHICKEN', ar: 'أقرمش دجاج مقلي في دبي والإمارات' },
  heroTitle1: { en: 'GOLDEN CRUNCH.', ar: 'قرمشة ذهبية.' },
  heroTitle2: { en: 'MAXIMUM FLAVOR.', ar: 'طعم يفوق الخيال.' },
  heroDesc: { 
    en: '100% farm-fresh Halal chicken, hand-breaded in our 11-spice secret blend, fried to golden perfection with signature dips. Delivered in 28 minutes.', 
    ar: 'دجاج حلال طازج ١٠٠٪ من المزرعة يومياً، متبل بالخلطة السرية المكونة من ١١ بهاراً، ومقلي حتى القرمشة الذهبية مع صلصات مبتكرة وتوصيل في ٢٨ دقيقة.' 
  },
  heroOrderDelivery: { en: 'Order Fast Delivery', ar: 'اطلب التوصيل السريع' },
  heroExploreMenu: { en: 'Explore Full Menu', ar: 'تصفح القائمة كاملة' },
  heroStatRating: { en: '4.9 ★ Rating (18k+ Reviews)', ar: '٤.٩ ★ تقييم (أكثر من ١٨ ألف عميل)' },
  heroStatTime: { en: '28 Mins Average Delivery', ar: 'متوسط وقت التوصيل ٢٨ دقيقة' },
  heroStatFresh: { en: '100% Fresh Never Frozen', ar: 'طازج ١٠٠٪ غير مجمد إطلاقاً' },
  heroHotBadge: { en: 'HOT & FRESH GUARANTEE', ar: 'ضمان وصول الطلب ساخناً وطازجاً' },

  // Menu Categories
  catAll: { en: 'All Menu', ar: 'كافة الأصناف' },
  catChicken: { en: 'Crispy Chicken', ar: 'الدجاج المقرمش' },
  catBurgers: { en: 'Burgers', ar: 'البرجر الفاخر' },
  catWings: { en: 'Wings', ar: 'الأجنحة الحارة' },
  catTenders: { en: 'Tenders & Strips', ar: 'الستربس والتندرز' },
  catBuckets: { en: 'Family Buckets', ar: 'البوكسات العائلية' },
  catCombos: { en: 'Combos & Meals', ar: 'وجبات الكومبو' },
  catSides: { en: 'Sides & Fries', ar: 'المقبلات والبطاطس' },
  catDesserts: { en: 'Desserts', ar: 'الحلويات' },
  catDrinks: { en: 'Beverages', ar: 'المشروبات' },

  // Best Sellers & Menu Section
  bestSellersTitle: { en: 'Fan Favorites & Best Sellers', ar: 'الأكثر طلباً والأعلى تقييماً' },
  bestSellersSubtitle: { en: 'The most craved crispy chicken boxes and loaded burgers ordered right now.', ar: 'الوجبات الأكثر عشقاً وطلباً من عشاق القرمشة والبرجر في الإمارات.' },
  fullMenuTitle: { en: 'Explore the Full CRISPO Menu', ar: 'قائمة وجبات كريسبو الكاملة' },
  fullMenuSubtitle: { en: 'Every item hand-prepared fresh upon your order. Hot, crispy, and packed with flavor.', ar: 'كل قطعة تُحضر طازجة لحظة طلبك. ساخنة، مقرمشة، ومليئة بالنكهة.' },
  searchMenu: { en: 'Search menu items...', ar: 'ابحث في القائمة...' },
  spicyOnly: { en: 'Spicy Only 🌶️', ar: 'الحار فقط 🌶️' },
  showingCount: { en: 'Showing {count} items', ar: 'عرض {count} صنف' },
  noItemsFound: { en: 'No crispy items found matching your search', ar: 'لم يتم العثور على وجبات مطابقة لبحثك' },
  resetFilters: { en: 'Reset Filters', ar: 'إعادة ضبط التصفية' },
  
  // Product Card & Modal
  addToCart: { en: 'Add to Cart', ar: 'أضف إلى السلة' },
  customizeOrder: { en: 'Customize', ar: 'تخصيص الوجبة' },
  caloriesLabel: { en: 'kcal', ar: 'سعرة' },
  spicyBadge: { en: 'Fiery Spicy', ar: 'حار ومقرمش' },
  bestSellerBadge: { en: 'Best Seller', ar: 'الأكثر مبيعاً' },
  secretMarinade: { en: 'Secret 11-Spice Recipe', ar: 'خلطة البهارات السرية الـ ١١' },
  ingredientsTitle: { en: 'Fresh Ingredients', ar: 'المكونات الطازجة' },
  allergensTitle: { en: 'Allergen Information', ar: 'معلومات الحساسية' },
  selectQuantity: { en: 'Quantity', ar: 'الكمية' },
  chooseAddons: { en: 'Add Extra Dips & Toppings', ar: 'أضف صلصات وإضافات إضافية' },
  totalItemPrice: { en: 'Total Price', ar: 'المبلغ الإجمالي' },
  addedToCartSuccess: { en: 'Added to your bag!', ar: 'تمت الإضافة إلى السلة بنجاح!' },

  // Combos Section
  combosTitle: { en: 'Signature Value Combos', ar: 'عروض الوجبات والكومبو المميزة' },
  combosSubtitle: { en: 'More crunch for less AED. Complete meals with seasoned fries and drinks included.', ar: 'قرمشة أكثر وتوفير أكبر. وجبات متكاملة مع البطاطس والمشروبات المنعشة.' },
  saveBadge: { en: 'SAVE {amount}', ar: 'وفر {amount}' },
  comboIncludes: { en: 'Combo includes:', ar: 'تشمل الوجبة:' },
  addComboBtn: { en: 'Add Combo to Bag', ar: 'أضف الوجبة للسلة' },

  // Offer Banner
  offerBannerTitle: { en: 'MEGA CRUNCH MIDWEEK DEAL', ar: 'عرض منتصف الأسبوع الخارق' },
  offerBannerDesc: { en: 'Buy 1 Signature Crispo Burger & Get 1 FREE + Free Loaded Fries with code', ar: 'اشترِ برجر كريسبو المميز واحصل على الثاني مجاناً + بطاطس بالجبن مجانية باستخدام الكود' },
  codeCopied: { en: 'Copied!', ar: 'تم النسخ!' },
  copyCode: { en: 'Copy Code', ar: 'نسخ الكود' },
  claimOfferNow: { en: 'Claim Deal Now', ar: 'استفد من العرض الآن' },
  expiresIn: { en: 'Deal ends in:', ar: 'ينتهي العرض خلال:' },
  hours: { en: 'Hours', ar: 'ساعة' },
  minutes: { en: 'Mins', ar: 'دقيقة' },
  seconds: { en: 'Secs', ar: 'ثانية' },

  // Meal Builder
  mealBuilderTitle: { en: 'Custom Box Builder Studio', ar: 'استوديو تصميم وجبتك المخصصة' },
  mealBuilderSubtitle: { en: 'Build your dream crispy box step-by-step with your favorite cuts, spice levels, sides, and signature dips.', ar: 'صمم بوكس القرمشة الخاص بك خطوة بخطوة مع قطع الدجاج المفضلة ودرجة الحرارة والمقبلات والصلصات.' },
  mbStep1: { en: '1. Select Chicken Base', ar: '١. اختر نوع الدجاج' },
  mbStep2: { en: '2. Flavor & Spiciness', ar: '٢. النكهة ودرجة الحرارة' },
  mbStep3: { en: '3. Choose Hot Side', ar: '٣. اختر المقبلات والبطاطس' },
  mbStep4: { en: '4. Drinks & Signature Dip', ar: '٤. المشروب والصلصة' },
  mbTotal: { en: 'Custom Box Total:', ar: 'إجمالي البوكس المخصص:' },
  mbAddBtn: { en: 'Add Custom Box to Bag', ar: 'إضافة البوكس المخصص للسلة' },

  // Family & Kids
  familyTitle: { en: 'Family Feasts & Mega Gatherings', ar: 'الوجبات العائلية وتجمعات الأصدقاء' },
  familySubtitle: { en: 'Generous 10, 14, and 18-piece buckets packed with golden chicken, large sides, and ice-cold drinks.', ar: 'بوكسات وفيرة من ١٠ و ١٤ و ١٨ قطعة دجاج مقرمش مع بطاطس كبيرة ومشروبات عائلية منعشة.' },
  kidsTitle: { en: 'Kids Happy Crunch Combos', ar: 'وجبات الأطفال السعيدة المقرمشة' },
  kidsSubtitle: { en: 'Mild crispy tenders, mini chicken burgers, golden fries, 100% pure apple juice, and a collectible toy.', ar: 'قطع تندرز مقرمشة خفيفة، ميني برجر دجاج، بطاطس ذهبية، عصير تفاح طبيعي، ولعبة مميزة.' },

  // Delivery & Tracking
  deliveryTitle: { en: 'Guaranteed 28-Minute Dubai Delivery', ar: 'توصيل مضمون خلال ٢٨ دقيقة في دبي' },
  deliverySubtitle: { en: 'Heat-retaining Fresh-Lock thermal boxes ensure your chicken arrives sizzling hot and ultra-crispy.', ar: 'علب حرارية مخصصة لحفظ الحرارة والقرمشة لضمان وصول وجبتك ساخنة ومقرمشة خلال ٢٨ دقيقة.' },
  sla1: { en: '28-Min Fast Dispatch', ar: 'تجهيز وتوصيل فوري خلال ٢٨ دقيقة' },
  sla2: { en: 'Fresh-Lock Thermal Boxes', ar: 'تغليف حراري ذكي يحافظ على القرمشة' },
  sla3: { en: 'Real-time GPS Tracking', ar: 'تتبع مباشر لموقع السائق عبر الخريطة' },
  sla4: { en: 'Zero Contact Safe Delivery', ar: 'توصيل آمن وبدون تلامس عند الباب' },
  
  trackingTitle: { en: 'Live Kitchen & Rider Tracking', ar: 'تتبع المطبخ والسائق المباشر' },
  trackingOrderId: { en: 'Order ID:', ar: 'رقم الطلب:' },
  trackingStatus: { en: 'Status:', ar: 'الحالة:' },
  trackingEstArrival: { en: 'Estimated Arrival:', ar: 'موعد الوصول المتوقع:' },
  trackingDriver: { en: 'Assigned Courier:', ar: 'مندوب التوصيل:' },
  trackingCallDriver: { en: 'Call Courier', ar: 'اتصال بالمندوب' },

  // Rewards Club
  rewardsTitle: { en: 'CRISPO Crunch Rewards Club', ar: 'نادي مكافآت ونقاط كريسبو' },
  rewardsSubtitle: { en: 'Earn 1 Crunch Point for every AED 1 spent. Unlock free burgers, loaded fries, and family buckets.', ar: 'اكسب نقطة قرمشة مقابل كل ١ درهم تنفقه. استبدل نقاطك بوجبات برجر وبطاطس وبوكسات عائلية مجانية.' },
  rewardsBalance: { en: 'Your Crunch Points Balance:', ar: 'رصيد نقاط القرمشة الخاص بك:' },
  rewardsTier: { en: 'VIP Gold Member', ar: 'عضوية VIP الذهبية' },
  redeemPoints: { en: 'Redeem for {pts} Pts', ar: 'استبدل بـ {pts} نقطة' },

  // Branches & Locator
  branchesTitle: { en: 'Our Dubai Flagship Branches', ar: 'فروعنا الرئيسية في دبي' },
  branchesSubtitle: { en: 'Dine-in, takeaway, or express delivery hubs operating late night across Dubai.', ar: 'صالات طعام واستلام وتوصيل تعمل حتى ساعات الفجر في أرقى مناطق دبي.' },
  openNow: { en: 'Open Now', ar: 'مفتوح الآن' },
  orderFromHere: { en: 'Order From This Branch', ar: 'اطلب من هذا الفرع' },

  // Quality & FAQ
  qualityTitle: { en: 'The CRISPO Quality Promise', ar: 'وعد الجودة من كريسبو' },
  qualityHalal: { en: '100% Farm Fresh Halal', ar: 'دجاج حلال طازج من المزرعة ١٠٠٪' },
  qualityOil: { en: 'Filtered Pure Vegetable Oil', ar: 'زيت نباتي نقي مصفى يومياً' },
  qualityPrep: { en: 'Hand Breaded Per Order', ar: 'تتبيل وقلي يدوي لكل طلب على حدة' },
  
  faqTitle: { en: 'Frequently Asked Questions', ar: 'الأسئلة الأكثر شيوعاً' },
  faqSubtitle: { en: 'Everything you need to know about delivery times, Halal certification, party catering, and rewards.', ar: 'كل ما تود معرفته عن سرعة التوصيل، شهادات الحلال، الحفلات، واستبدال النقاط.' },

  // Final CTA & Footer
  finalCtaTitle: { en: 'Craving That Unstoppable Crunch?', ar: 'جاهز لألذ وأقرمش تجربة دجاج مقلي؟' },
  finalCtaDesc: { en: 'Order now online or via our hotline. Hot and crispy at your doorstep in under 28 minutes.', ar: 'اطلب الآن عبر الموقع أو الخط الساخن. وجبتك ساخنة ومقرمشة عند باب منزلك في أقل من ٢٨ دقيقة.' },
  hotline: { en: 'Toll-Free Hotline: 600 588 900', ar: 'الخط الساخن: ٦٠٠ ٥٨٨ ٩٠٠' },
  whatsappOrder: { en: 'WhatsApp Order (+971 50)', ar: 'الطلب عبر واتساب (٩٧١ ٥٠+)' },
  
  footerAbout: { en: 'CRISPO is Dubai’s premier fast-food destination for golden, hand-breaded crispy fried chicken, loaded burgers, and secret-recipe sides.', ar: 'كريسبو هي وجهة الوجبات السريعة الأولى في دبي للدجاج المقلي المقرمش المحضر يدوياً والبرجر الفاخر والصلصات الحصرية.' },
  footerLinks: { en: 'Quick Links', ar: 'روابط سريعة' },
  footerMenu: { en: 'Menu Categories', ar: 'أقسام القائمة' },
  footerBranches: { en: 'Dubai Branches', ar: 'فروع دبي' },
  footerRights: { en: '© 2026 CRISPO UAE. All rights reserved. Portfolio Showcase #26.', ar: 'جميع الحقوق محفوظة © ٢٠٢٦ كريسبو الإمارات. نموذج أعمال رقم #٢٦.' },
  fictionalNotice: { en: 'DEMO NOTICE: CRISPO is a fictional digital portfolio demonstration created for modern fast-food e-commerce and QSR ordering systems.', ar: 'إشعار النموذج التجريبي: كريسبو هو مشروع رقمي استعراضي تم تصميمه لعرض حلول التجارة الإلكترونية وأنظمة طلب الوجبات السريعة الحديثة.' },

  // Cart Drawer & Checkout
  cartTitle: { en: 'Your Crunch Bag', ar: 'سلة الطلبات' },
  cartEmpty: { en: 'Your bag is empty', ar: 'سلة الطلبات فارغة حالياً' },
  cartEmptyDesc: { en: 'Add your favorite crispy chicken, burgers, and combos to start your order.', ar: 'أضف وجباتك المفضلة من الدجاج المقرمش والبرجر والمشروبات لبدء طلبك.' },
  subtotal: { en: 'Subtotal', ar: 'المجموع الفرعي' },
  deliveryFee: { en: 'Delivery Fee', ar: 'رسوم التوصيل' },
  vat5: { en: 'UAE VAT (5%)', ar: 'ضريبة القيمة المضافة (٥٪)' },
  totalAmount: { en: 'Total Amount', ar: 'المبلغ الإجمالي' },
  freeDeliveryThreshold: { en: 'Add {amount} AED more for FREE Delivery!', ar: 'أضف بقيمة {amount} د.إ للحصول على توصيل مجاني!' },
  freeDeliveryUnlocked: { en: '✓ Qualified for FREE Delivery!', ar: '✓ مؤهل للتوصيل المجاني!' },
  proceedToCheckout: { en: 'Proceed to Checkout', ar: 'متابعة إتمام الطلب' },
  continueOrdering: { en: 'Continue Ordering', ar: 'متابعة اختيار الوجبات' },
  promoCodePlaceholder: { en: 'Promo Code (BOGOMON / CRUNCH20)', ar: 'كود الخصم (BOGOMON / CRUNCH20)' },
  applyPromo: { en: 'Apply', ar: 'تطبيق' },
  
  // Checkout Modal
  checkoutTitle: { en: 'Complete Your Order', ar: 'إتمام وتأكيد الطلب' },
  checkoutSubtitle: { en: 'Enter your delivery address and payment preference', ar: 'أدخل عنوان التوصيل وطريقة الدفع المفضلة' },
  fullName: { en: 'Full Name *', ar: 'الاسم الكامل *' },
  phoneNumber: { en: 'Phone / WhatsApp *', ar: 'رقم الهاتف / واتساب *' },
  deliveryAddress: { en: 'Delivery Address / Villa / Apartment *', ar: 'عنوان التوصيل / الفيلا / الشقة *' },
  selectEmirate: { en: 'Emirate / City', ar: 'الإمارة / المدينة' },
  deliveryInstructions: { en: 'Special Delivery Instructions (Optional)', ar: 'ملاحظات خاصة للتوصيل (اختياري)' },
  paymentMethod: { en: 'Payment Method', ar: 'طريقة الدفع' },
  payCard: { en: 'Credit / Debit Card', ar: 'بطاقة بنكية / فيزا' },
  payApple: { en: 'Apple Pay', ar: 'أبل باي (Apple Pay)' },
  payTabby: { en: 'Tabby (4 Payments)', ar: 'تابي (٤ دفعات ميسرة)' },
  payCash: { en: 'Cash on Delivery (COD)', ar: 'الدفع نقداً عند الاستلام' },
  confirmOrderBtn: { en: 'Confirm Order ({price})', ar: 'تأكيد الطلب ({price})' },
  orderSuccessTitle: { en: 'Order Placed & In Kitchen!', ar: 'تم استلام طلبك وبدأ المطبخ في تحضيره!' },
  orderSuccessDesc: { en: 'Your crispy meal is now being freshly fried and packed in our thermal box. Driver will arrive in 28 minutes.', ar: 'وجبتك المقرمشة تُقلى وتُجهز الآن طازجة في المطبخ وستصلك ساخنة خلال ٢٨ دقيقة.' },
  orderTrackNow: { en: 'Track My Delivery Live', ar: 'تتبع سائق التوصيل الآن' },
  closeBtn: { en: 'Close', ar: 'إغلاق' },

  // Currency
  currency: { en: 'AED', ar: 'د.إ' },
  currencyFull: { en: 'UAE Dirhams', ar: 'درهم إماراتي' },
};

// Bilingual Product Translations
export const CRISPO_PRODUCTS_AR: Record<string, {
  name: string;
  description: string;
  category: string;
  ingredients: string[];
}> = {
  'orig-crunch-4': {
    name: 'وجبة كرانش بوكس الأصلية (٤ قطع)',
    description: '٤ قطع دجاج مقلي مقرمش محضر يدوياً مع بطاطس ذهبية، سلطة كولسلو طازجة، وصلصة من اختيارك.',
    category: 'الدجاج المقرمش',
    ingredients: ['دجاج طازج من مزارع الإمارات', 'تتبيلة كريسبو السرية من ١١ بهاراً', 'طبقة قرمشة ذهبية مضاعفة']
  },
  'spicy-crunch-4': {
    name: 'وجبة دجاج جحيم النار الحار (٤ قطع)',
    description: '٤ قطع دجاج مقلي حار ومقرمش متبل بفلفل الهابانيرو مع صلصة حارة وبطاطس مبهرة.',
    category: 'الدجاج المقرمش',
    ingredients: ['دجاج طازج', 'تتبيلة فلفل الشبح والهابانيرو', 'خلطة طحين كريسبو الحارة']
  },
  'crunch-strips-6': {
    name: 'أصابع ستريبس وتندرز ذهبية (٦ قطع)',
    description: '٦ أصابع من صدور الدجاج الصافية منزوعة العظم منقوعة باللبن ومقلية حتى القرمشة مع صلصتين.',
    category: 'الستربس والتندرز',
    ingredients: ['صدور دجاج كاملة صافية', 'تتبيلة اللبن الرائب', 'بقسماط بانكو الذهبي المقرمش']
  },
  'crispo-burger-classic': {
    name: 'برجر كريسبو الكلاسيكي الأصلي',
    description: 'قطعة فيليه دجاج مقرمشة جامبو مع جبنة شيدر ذائبة، مخلل شبت، وصلصة مايونيز كريسبو الخاصة في خبز بريوش محمص.',
    category: 'البرجر الفاخر',
    ingredients: ['فيليه دجاج فخذ مقرمش', 'جبنة شيدر صفراء معتقة', 'مخلل شبت مقرمش', 'خبز بريوش طازج']
  },
  'fire-burger-double': {
    name: 'دبل فاير كرانش برجر الحار',
    description: 'قطعتان من فيليه الدجاج الحار مع قطع الهالبينو، جبنة بيبر جاك، صوص العسل الحار، ومايونيز حار.',
    category: 'البرجر الفاخر',
    ingredients: ['قطعتان فيليه دجاج حار', 'قطع هالبينو طازجة', 'جبنة بيبر جاك', 'مايونيز العسل الحار']
  },
  'smokey-bbq-burger': {
    name: 'برجر الدجاج المقرمش مع باربيكيو وبيكون',
    description: 'فيليه دجاج مقرمش مغطى ببيكون بقري مدخن، حلقات بصل مقرمشة، صوص باربيكيو غني، وجبن ذائب.',
    category: 'البرجر الفاخر',
    ingredients: ['فيليه دجاج مقرمش', 'بيكون بقري مدخن', 'صلصة باربيكيو تكساس', 'حلقات بصل']
  },
  'hot-wings-8': {
    name: 'أجنحة دجاج بافلو الحارة (٨ قطع)',
    description: '٨ أجنحة دجاج مقرمشة جامبو مغطاة بصلصة البافلو الحارة أو مبهرة بالخلطة الحارة الجافة.',
    category: 'الأجنحة الحارة',
    ingredients: ['أجنحة دجاج جامبو', 'تتبيلة صوص الكايين والبافلو', 'غموس الجبنة الزرقاء']
  },
  'bbq-glaze-wings-8': {
    name: 'أجنحة دجاج باربيكيو بالعسل والثوم (٨ قطع)',
    description: '٨ أجنحة دجاج جامبو مغطاة بصلصة العسل والثوم اللزجة اللذيذة ومرشوشة بالسمسم المحمص.',
    category: 'الأجنحة الحارة',
    ingredients: ['أجنحة دجاج جامبو', 'صلصة باربيكيو بالعسل والثوم', 'سمسم محمص']
  },
  'family-bucket-10': {
    name: 'بوكس كرانش العائلي (١٠ قطع)',
    description: '١٠ قطع دجاج مقرمش، ٤ بطاطس مقلية، ٢ كولسلو كبير، و ٤ مشروبات باردة منعشة.',
    category: 'البوكسات العائلية',
    ingredients: ['١٠ قطع دجاج مشكل (أفخاذ وصدور ودبابيس)', '٤ بطاطس مبهرة', '٢ سلطة كولسلو كبيرة', '٤ مشروبات']
  },
  'mega-party-bucket-18': {
    name: 'بوكس فيست الحفلات الضخم (١٨ قطعة)',
    description: '١٨ قطعة دجاج مقرمش مشكل، ١٢ جناح دجاج حار، ٤ بطاطس جامبو، ٤ كولسلو، وقارورة مشروب عائلية ٢ لتر.',
    category: 'البوكسات العائلية',
    ingredients: ['١٨ قطعة دجاج مقرمش', '١٢ جناح دجاج حار', '٤ بطاطس حجم كبير', 'مشروب عائلي ٢ لتر']
  },
  'loaded-cheese-fries': {
    name: 'بطاطس مقلية محملة بالجبن والتندرز',
    description: 'بطاطس مقرمشة مغطاة بجبنة الشيدر السائلة الساخنة، قطع دجاج مقرمش، هالبينو، وصلصة الرانش.',
    category: 'المقبلات والبطاطس',
    ingredients: ['بطاطس مقلية بقشرتها', 'صلصة جبن شيدر سائلة', 'قطع تندرز مقرمشة', 'هالبينو', 'صلصة رانش']
  },
  'crispy-onion-rings': {
    name: 'حلقات البصل الذهبية المقرمشة',
    description: 'حلقات بصل حلو مقطعة سميكة ومقلية بعجينة مقرمشة مع صلصة المايونيز بالثوم.',
    category: 'المقبلات والبطاطس',
    ingredients: ['بصل إسباني حلو', 'خلطة قرمشة خاصة', 'مايونيز بالثوم']
  },
  'creamy-coleslaw': {
    name: 'سلطة كولسلو كريمية كلاسيكية',
    description: 'ملفوف وجزر طازج مبشور مع صلصة المايونيز الكريمية اللذيذة المحضرة يومياً.',
    category: 'المقبلات والبطاطس',
    ingredients: ['ملفوف أخضر طازج', 'جزر مبشور', 'تتبيلة مايونيز خاصة']
  },
  'chocolate-lava-cake': {
    name: 'كيك الشوكولاتة البلجيكية الذائبة (لافا كيك)',
    description: 'كيك شوكولاتة فادج دافئ مع قلب من الشوكولاتة البلجيكية الساخنة الذائبة يقدم مع آيس كريم الفانيليا.',
    category: 'الحلويات',
    ingredients: ['شوكولاتة بلجيكية داكنة', 'آيس كريم فانيليا', 'بودرة كاكاو فاخرة']
  },
  'churro-bites-6': {
    name: 'لقيمات التشوروز بالقرفة والسكر (٦ قطع)',
    description: '٦ قطع تشوروز إسباني مقرمشة مغطاة بسكر القرفة وتقدم مع غموس كراميل دولسي دي ليتشي الدافئ.',
    category: 'الحلويات',
    ingredients: ['عجينة تشوروز مقرمشة', 'سكر وقرفة ناعمة', 'صلصة كراميل دولسي دي ليتشي']
  },
  'crispo-lemonade-shake': {
    name: 'عصير ليموناضة بالنعناع الطازج (حجم كبير)',
    description: 'ليمون طازج معصور مع أوراق النعناع الطازجة والثلج المجروش لمذاق منعش.',
    category: 'المشروبات',
    ingredients: ['عصير ليمون طبيعي', 'أوراق نعناع طازجة', 'سكر القصب', 'ثلج مجروش']
  },
  'soft-drink-large': {
    name: 'مشروب غازي مثلج كبير (بيبسي / سفن أب)',
    description: 'مشروب غازي بارد ومنعش من اختيارك في كوب كبير ٥٠٠ مل.',
    category: 'المشروبات',
    ingredients: ['مياه غازية', 'نكهة مختارة', 'ثلج']
  }
};

// Bilingual Combos Translations
export const CRISPO_COMBOS_AR: Record<string, {
  name: string;
  includes: string[];
  badge: string;
}> = {
  'combo-crispo-box': {
    name: 'وجبة بوكس كريسبو الفردية',
    includes: ['قطعتان دجاج مقرمش', 'جناحان دجاج حار', 'بطاطس مقلية عادية', 'مشروب بارد'],
    badge: 'توفير فردي'
  },
  'combo-family-feast': {
    name: 'وليمة كرانش العائلية الكبرى',
    includes: ['٨ قطع دجاج مقرمش', '٤ بطاطس مقلية', '٤ مشروبات باردة', '٢ سلطة كولسلو كبيرة'],
    badge: 'الخيار العائلي الأكثر طلباً'
  },
  'combo-ultimate-crunch': {
    name: 'بوكس الحفلات ألتيميت كرانش',
    includes: ['٤ قطع دجاج مقرمش', '٤ أجنحة حارة', '٢ برجر كريسبو', '٢ بطاطس بالجبن', '٤ مشروبات'],
    badge: 'أقصى توفير'
  }
};

// Bilingual Offers Translations
export const CRISPO_OFFERS_AR: Record<string, {
  title: string;
  tagline: string;
  discount: string;
  validity: string;
}> = {
  'off-1': {
    title: 'عرض الاثنين: اشترِ ١ واحصل على ١ مجاناً',
    tagline: 'اشترِ برجر كريسبو المميز واحصل على الثاني مجاناً كل يوم اثنين بعد الساعة ٦ مساءً!',
    discount: 'اشترِ ١ واحصل على ١ مجاناً',
    validity: 'ساري كل يوم اثنين'
  },
  'off-2': {
    title: 'خصم الجمعة العائلي ٢٠٪',
    tagline: 'احصل على خصم ٢٠٪ على جميع البوكسات العائلية ١٠ قطع و ١٨ قطعة لطلبات عطلة نهاية الأسبوع.',
    discount: 'خصم ٢٠٪',
    validity: 'ساري من الجمعة إلى الأحد'
  },
  'off-3': {
    title: 'بطاطس بالجبن مجاناً في السهرات المتأخرة',
    tagline: 'بطاطس محملة بالجبن مجاناً مع كل طلب يتجاوز ٦٠ درهماً يتم تسجيله بعد الساعة ١٠:٠٠ مساءً.',
    discount: 'بطاطس مجانية',
    validity: 'ساري يومياً من ١٠ م إلى ٣ ص'
  }
};

// Bilingual Locations Translations
export const CRISPO_LOCATIONS_AR: Record<string, {
  name: string;
  address: string;
  distanceKm: string;
  deliveryTimeMins: string;
  closingTime: string;
}> = {
  'loc-downtown': {
    name: 'كريسبو - وسط مدينة دبي',
    address: 'برج بوليفارد بلازا ٢، بوليفارد الشيخ محمد بن راشد، دبي',
    distanceKm: '١.٨ كم',
    deliveryTimeMins: '٢٠–٣٠ دقيقة',
    closingTime: 'مفتوح حتى الساعة ٠٣:٠٠ فجراً'
  },
  'loc-marina': {
    name: 'كريسبو - دبي مارينا',
    address: 'ممشى مارينا ووك، الطابق الأرضي، ممشى ١٤، دبي مارينا',
    distanceKm: '٤.٢ كم',
    deliveryTimeMins: '٢٥–٣٥ دقيقة',
    closingTime: 'مفتوح حتى الساعة ٠٢:٠٠ فجراً'
  },
  'loc-mirdif': {
    name: 'كريسبو - مردف سيتي سنتر',
    address: 'ردهة المطاعم، الطابق الأول، سيتي سنتر مردف، دبي',
    distanceKm: '٨.٥ كم',
    deliveryTimeMins: '٣٠–٤٠ دقيقة',
    closingTime: 'مفتوح حتى الساعة ١٢:٠٠ منتصف الليل'
  }
};

// Bilingual Reviews Translations
export const CUSTOMER_REVIEWS_AR = [
  {
    id: 'rev-1',
    name: 'عمر الحسن',
    rating: 5,
    location: 'دبي مارينا',
    review: 'بكل صراحة أقرمش وألذ دجاج مقلي في دبي! وصل الطلب ساخناً جداً في ٢٢ دقيقة فقط. البطاطس المحملة بالجبن لا تُقاوم.',
    orderType: 'توصيل بوكس عائلي'
  },
  {
    id: 'rev-2',
    name: 'سارة عبد الله',
    rating: 5,
    location: 'وسط مدينة دبي',
    review: 'دبل فاير كرانش برجر رائع بشكل لا يُصدق! مقرمش من الخارج وطري ولذيذ من الداخل وصوص العسل الحار حكاية أخرى.',
    orderType: 'استلام برجر وأجنحة'
  },
  {
    id: 'rev-3',
    name: 'عائلة طارق الشامسي',
    rating: 5,
    location: 'مردف',
    review: 'نطلب بوكس الـ ١٨ قطعة ميجا بارتي كل ليلة جمعة. دائماً طازج وطعم الزيت نظيف جداً، والأطفال يعشقون التشوروز.',
    orderType: 'وليمة عائلية في الصالة'
  }
];

// Bilingual FAQs Translations
export const CRISPO_FAQS_AR = [
  {
    question: 'كيف يمكنني طلب التوصيل من مطعم كريسبو؟',
    answer: 'يمكنك الطلب مباشرة من خلال قائمتنا التفاعلية واختيار وجباتك المفضلة وتخصيص الصلصات والإضافات، ثم الانتقال لصفحة إتمام الطلب للتوصيل الفوري إلى باب منزلك.'
  },
  {
    question: 'ما هي سرعة توصيل طلبات كريسبو في دبي؟',
    answer: 'متوسط سرعة التوصيل لدينا هو ٢٨ دقيقة. يتم تغليف كافة الوجبات في علب حرارية ذكية محكمة الإغلاق لضمان وصول الدجاج ساخناً ومقرمشاً إلى باب منزلك.'
  },
  {
    question: 'هل جميع دجاج كريسبو حلال وطازج ١٠٠٪؟',
    answer: 'نعم بالتأكيد! نحصل على دجاج حلال طازج يومياً من مزارع محلية معتمدة. دجاجنا غير مجمد أبداً، يُتبل بالخلطة السرية المكونة من ١١ بهاراً ويُقلى طازجاً لكل طلب.'
  },
  {
    question: 'كيف يعمل برنامج مكافآت ونقاط كريسبو؟',
    answer: 'تكسب نقطة كرانش واحدة مقابل كل درهم تنفقه على طلبات التوصيل أو الاستلام. يمكنك تجميع النقاط واستبدالها بمشروبات وبطاطس بالجبن وبرجر وبوكسات عائلية مجانية.'
  },
  {
    question: 'هل يمكنني تخصيص مكونات البرجر أو الوجبات؟',
    answer: 'بالتأكيد! يتيح لك استوديو تصميم الوجبات المخصص ونافذة تفاصيل المنتج إضافة جبن إضافي، صوص حار مضاعف، ترقية البطاطس، أو مضاعفة قطع الدجاج.'
  }
];

