export type NouraLanguage = 'ar' | 'en';

export interface NouraTranslations {
  [key: string]: {
    ar: string;
    en: string;
  };
}

export const NOURA_TRANSLATIONS: NouraTranslations = {
  // Brand & Utility
  brandName: { ar: 'نورة عباية', en: 'NOURA ABAYA' },
  brandTagline: { ar: 'أزياء راقية وعبايات إماراتية فاخرة', en: 'Arabian Haute Couture & Luxury Modestwear' },
  brandCity: { ar: 'حي دبي للتصميم (d3) • مبنى 7 • أتيليه دبي', en: 'Dubai Design District (d3), Building 7 • Downtown Atelier' },
  topBarDelivery: { ar: 'توصيل مجاني لجميع إمارات الدولة للطلبات فوق 350 د.إ • خدمة التفصيل الخاص', en: 'Complimentary UAE Delivery on orders above AED 350 • Bespoke Tailoring' },
  topBarConsultation: { ar: 'حجز جلسة قياس خاصة في الأتيليه: +971 4 388 9000', en: 'VIP Private Fitting Consultation: +971 4 388 9000' },
  
  // Navigation
  navHome: { ar: 'الرئيسية', en: 'Home' },
  navCollections: { ar: 'المجموعات', en: 'Collections' },
  navNewArrivals: { ar: 'وصل حديثاً', en: 'New Arrivals' },
  navCatalog: { ar: 'الكتالوج الكامل (248+)', en: 'Master Catalog (248+)' },
  navBespoke: { ar: 'استوديو التفصيل', en: 'Bespoke Studio' },
  navLookbook: { ar: 'كتالوج الإطلالات', en: 'Lookbook' },
  navAtelier: { ar: 'حجز موعد الأتيليه', en: 'Book Atelier' },
  navAbout: { ar: 'قصة الدار', en: 'Brand Story' },
  navFaq: { ar: 'الأسئلة الشائعة', en: 'FAQ' },
  navSearchPlaceholder: { ar: 'ابحثي عن عبايتك المفضلة، القماش، القصة، أو اللون...', en: 'Search 248+ luxury abayas, fabrics, cuts, colors...' },
  navCart: { ar: 'حقيبة التسوق', en: 'Shopping Bag' },
  navWishlist: { ar: 'المفضلة', en: 'Wishlist' },
  
  // Hero
  heroBadge: { ar: 'المجموعة الحصرية لعام 2026 • كوتور إماراتي أصيل', en: 'EXCLUSIVELY CRAFTED FOR 2026 • EMIRATI COUTURE' },
  heroTitle1: { ar: 'أناقة عربية راقية،', en: 'Arabian Elegance,' },
  heroTitle2: { ar: 'بلمسة عصرية خالدة.', en: 'Reimagined For Today.' },
  heroDesc: { ar: 'مجموعة متميزة من العبايات الفاخرة المصنوعة يدوياً من حرير النيدو الياباني الأصلي والكريب الملكي والأورجانزا الفرنسية بتطريزات الزري التراثية.', en: 'Handcrafted contemporary abayas and luxury occasionwear crafted from genuine Japanese Royal Nida, raw silks, and French organza with heirloom zari embellishments.' },
  heroShopBtn: { ar: 'تسوقي المجموعة الكاملة', en: 'Explore Collection' },
  heroNewArrivalsBtn: { ar: 'تشكيلة الموسم الجديد', en: 'New Season Drops' },
  heroCustomizerBtn: { ar: 'صممي عبايتك الخاصة', en: 'Bespoke Studio' },
  heroLookbookBtn: { ar: 'إطلالات الموسم', en: 'Editorial Lookbook' },
  heroQuickInspect: { ar: 'معاينة سريعة', en: 'Quick View' },
  
  // Stats
  statDesigns: { ar: '248+ تصميم فاخر', en: '248+ Verified Designs' },
  statDesignsDesc: { ar: 'تشكيلات متجددة باستمرار', en: 'Continuous New Drops' },
  statAtelier: { ar: 'أتيليه دبي للتصميم', en: 'Dubai Design Atelier' },
  statAtelierDesc: { ar: 'خياطة يدوية وتفصيل دقيق', en: 'Handmade Craftsmanship' },
  statDelivery: { ar: 'توصيل في نفس اليوم', en: 'Same-Day Express' },
  statDeliveryDesc: { ar: 'لكافة إمارات الدولة السبع', en: 'Across All 7 Emirates' },
  statRating: { ar: '4.9 ★ تقييم العملاء', en: '4.9 ★ Luxury Rating' },
  statRatingDesc: { ar: 'أكثر من 4,800 سيدة راقية', en: 'Over 4,800 UAE Clients' },
  
  // Collections Section
  collectionsTitle: { ar: 'تشكيلات الدار المختارة', en: 'Curated Collections' },
  collectionsSubtitle: { ar: 'قصات وتصاميم متنوعة تناسب الإطلالات اليومية والعملية والمناسبات الفخمة والأعياد.', en: 'Diverse silhouettes engineered for everyday refinement, high-profile events, and festive celebrations.' },
  viewCollection: { ar: 'تصفح التشكيلة', en: 'Explore Collection' },
  
  // Section Headers
  newArrivalsTitle: { ar: 'أحدث إبداعات الموسم', en: 'New Season Arrivals' },
  newArrivalsSubtitle: { ar: 'إصدارات جديدة تجمع بين الأقمشة الخفيفة والتطريزات اليدوية الناعمة.', en: 'Fresh drops blending breathable lightweight drapes with delicate handcrafted embroidery.' },
  
  catalogTitle: { ar: 'كتالوج العبايات الفاخرة', en: 'Master Abaya Catalog' },
  catalogSubtitle: { ar: 'تصفحي 248+ تصميماً من العبايات الكلوش والقصات المستقيمة والمطرزة مع طرحة متناسقة مجاناً.', en: 'Browse 248+ verified cuts, fabrics, and silhouettes. Every abaya includes a color-matched luxury Sheila.' },
  
  signatureTitle: { ar: 'تشكيلة التوقيع الملكي', en: 'Signature Atelier Line' },
  signatureSubtitle: { ar: 'عبايات النيدو الأسود الأيقونية مع لمسات الشك اليدوي وقصات الكلوش الانسيابية.', en: 'Iconic deep black Nida silhouettes with handcrafted crystal beadwork and fluid drapes.' },
  
  occasionTitle: { ar: 'إطلالات المناسبات والأعياد', en: 'Festive & Occasion Edit' },
  occasionSubtitle: { ar: 'فساتين وقفاطين راقية وتصاميم مميزة لسهرات رمضان وحفلات العيد والمناسبات الخاصة.', en: 'Opulent kaftans, embroidered overlays, and evening abayas tailored for Ramadan and Eid gatherings.' },
  
  // Filters & Sorting
  filterCategory: { ar: 'التصنيف', en: 'Category' },
  filterAllCategories: { ar: 'كافة التصنيفات', en: 'All Categories' },
  filterCollection: { ar: 'المجموعة', en: 'Collection' },
  filterAllCollections: { ar: 'كافة المجموعات', en: 'All Collections' },
  filterFabric: { ar: 'نوع القماش', en: 'Fabric' },
  filterAllFabrics: { ar: 'كافة الأقمشة', en: 'All Fabrics' },
  filterOccasion: { ar: 'المناسبة', en: 'Occasion' },
  filterAllOccasions: { ar: 'كافة المناسبات', en: 'All Occasions' },
  filterPriceRange: { ar: 'نطاق السعر', en: 'Price Range' },
  filterInStockOnly: { ar: 'المتوفر في المتجر فقط', en: 'In Stock Only' },
  clearFilters: { ar: 'إعادة ضبط الفلاتر', en: 'Reset Filters' },
  showingProducts: { ar: 'عرض', en: 'Showing' },
  ofProducts: { ar: 'من أصل', en: 'of' },
  productsWord: { ar: 'عباية فاخرة', en: 'luxury abayas' },
  sortBy: { ar: 'ترتيب حسب:', en: 'Sort by:' },
  sortFeatured: { ar: 'المميزة والأكثر طلباً', en: 'Featured & Bestsellers' },
  sortPriceAsc: { ar: 'السعر: من الأقل للأعلى', en: 'Price: Low to High' },
  sortPriceDesc: { ar: 'السعر: من الأعلى للأقل', en: 'Price: High to Low' },
  sortNewest: { ar: 'وصل حديثاً', en: 'Newest Arrivals' },
  sortRating: { ar: 'الأعلى تقييماً', en: 'Top Rated' },
  noProductsFound: { ar: 'لم يتم العثور على عبايات مطابقة لبحثك', en: 'No matching luxury abayas found' },
  noProductsDesc: { ar: 'جربي تعديل خيارات التصفية أو البحث بكلمات أخرى.', en: 'Try adjusting your filter selection or search for another cut or fabric.' },
  
  // Product Card & Actions
  currency: { ar: 'د.إ', en: 'AED' },
  currencyFull: { ar: 'درهم إماراتي', en: 'UAE Dirhams' },
  addToCart: { ar: 'أضف إلى السلة', en: 'Add to Bag' },
  addedToCart: { ar: 'تمت الإضافة للسلة', en: 'Added to Bag' },
  quickView: { ar: 'معاينة سريعة', en: 'Quick View' },
  viewDetails: { ar: 'تفاصيل العباية', en: 'View Details' },
  selectSize: { ar: 'المقاس:', en: 'Size:' },
  selectColor: { ar: 'اللون:', en: 'Color:' },
  inStock: { ar: 'متوفر للتوصيل الفوري', en: 'In Stock for Immediate Dispatch' },
  freeSheilaBadge: { ar: 'شامل طرحة مجانية مطابقة', en: 'Free Matching Sheila Included' },
  customFitAvailable: { ar: 'إمكانية تعديل الطول مجاناً', en: 'Complimentary Length Customization' },
  
  // Product Detail & Modal
  productOverview: { ar: 'نظرة عامة على التصميم', en: 'Design Overview' },
  fabricAndCare: { ar: 'القماش وإرشادات العناية', en: 'Fabric & Care Guidelines' },
  finishingDetails: { ar: 'التفاصيل واللمسات النهائية', en: 'Finishing & Atelier Details' },
  sizeGuide: { ar: 'دليل المقاسات الإماراتي', en: 'Emirati Size Guide' },
  sizeGuideDesc: { ar: 'المقاسات المعتمدة لطول العباية من الكتف إلى الأسفل بالبوصة (50 إلى 60 بوصة).', en: 'Standard length measurement from shoulder to floor in inches (50" to 60").' },
  tailoringNotes: { ar: 'ملاحظات التفصيل:', en: 'Bespoke Notes:' },
  tailoringNotesPlaceholder: { ar: 'اكتبي أي تعديل خاص بالطول أو الأكمام أو إضافة طقطق إضافي...', en: 'Add specific notes regarding length, sleeve alteration, or extra snaps...' },
  quantity: { ar: 'الكمية:', en: 'Quantity:' },
  buyNow: { ar: 'شراء الآن', en: 'Buy Now' },
  deliveryInfoTitle: { ar: 'الشحن والتوصيل في الإمارات', en: 'UAE Delivery & Fitting Promise' },
  deliveryInfoDesc: { ar: 'توصيل سريع في نفس اليوم لدبي، وخلال 24 ساعة لباقي الإمارات. إمكانية الاستبدال السهل خلال 7 أيام.', en: 'Same-day delivery in Dubai, 24 hours across all other Emirates. 7-day hassle-free doorstep exchange.' },
  relatedProducts: { ar: 'تصاميم قد تنال إعجابك', en: 'You May Also Adore' },
  
  // Bespoke Customizer
  customizerTitle: { ar: 'استوديو التفصيل والتخصيص الفاخر', en: 'Bespoke Customizer Studio' },
  customizerSubtitle: { ar: 'صممي عبايتك بالمقاسات والقصات والتطريزات التي تعكس ذوقك الخاص.', en: 'Craft your custom abaya with personalized measurements, sleeve cuffs, and embroidery accents.' },
  customStep1: { ar: '1. اختيار القصة الأساسية', en: '1. Choose Silhouette' },
  customStep2: { ar: '2. نوع القماش الفاخر', en: '2. Select Luxury Fabric' },
  customStep3: { ar: '3. تفاصيل الأكمام والياقة', en: '3. Sleeves & Cuffs' },
  customStep4: { ar: '4. المقاس والطول بالبوصة', en: '4. Exact Length in Inches' },
  customStep5: { ar: '5. تطريز الحروف الأولى (مونوغرام)', en: '5. Monogram Initials' },
  customTotalEstimate: { ar: 'سعر التفصيل التقديري:', en: 'Estimated Bespoke Total:' },
  addToCartCustom: { ar: 'اعتماد التصميم وإضافته للسلة', en: 'Confirm Design & Add to Bag' },
  
  // Lookbook Drawer
  lookbookTitle: { ar: 'كتالوج إطلالات الموسم • دبي', en: 'Editorial Lookbook • Dubai' },
  lookbookSubtitle: { ar: 'تنسيقات وإطلالات راقية مستوحاة من فخامة المرأة الإماراتية المعاصرة.', en: 'Curated styling ensembles celebrating the graceful elegance of the modern Emirati woman.' },
  shopTheLook: { ar: 'تسوقي هذه الإطلالة', en: 'Shop This Ensemble' },
  
  // Atelier Booking Modal
  bookingTitle: { ar: 'حجز جلسة قياس خاصة في الأتيليه', en: 'VIP Private Atelier Consultation' },
  bookingSubtitle: { ar: 'تفضلي بزيارتنا في حي دبي للتصميم (d3) لتجربة أحدث التشكيلات وتفصيل قطعتك الخاصة.', en: 'Visit our flagship atelier at Dubai Design District (d3) for bespoke fittings and styling consultations.' },
  bookingName: { ar: 'الاسم الكريم', en: 'Full Name' },
  bookingPhone: { ar: 'رقم الهاتف / واتساب (+971)', en: 'UAE Mobile / WhatsApp (+971)' },
  bookingEmail: { ar: 'البريد الإلكتروني', en: 'Email Address' },
  bookingDate: { ar: 'تاريخ الموعد المفضل', en: 'Preferred Date' },
  bookingTimeSlot: { ar: 'الفترة المفضلة', en: 'Preferred Time Slot' },
  bookingTimeMorning: { ar: 'الفترة الصباحية (10:00 ص – 01:00 م)', en: 'Morning Slot (10:00 AM – 01:00 PM)' },
  bookingTimeAfternoon: { ar: 'فترة بعد الظهر (02:00 م – 06:00 م)', en: 'Afternoon Slot (02:00 PM – 06:00 PM)' },
  bookingTimeEvening: { ar: 'الفترة المسائية (06:00 م – 09:00 م)', en: 'Evening Slot (06:00 PM – 09:00 PM)' },
  bookingGuests: { ar: 'عدد الضيوف المرافقين', en: 'Accompanying Guests' },
  bookingNotes: { ar: 'أي تفضيلات أو مناسبة خاصة تودين مناقشتها', en: 'Special Requests or Occasion Details' },
  bookingSubmit: { ar: 'تأكيد حجز الموعد', en: 'Confirm VIP Appointment' },
  bookingSuccessTitle: { ar: 'تم تأكيد موعدكِ بنجاح', en: 'VIP Appointment Confirmed' },
  bookingSuccessDesc: { ar: 'تتطلع مستشارتنا الخاصة للأزياء لاستقبالكِ في أتيليه حي دبي للتصميم. سيتم إرسال تفاصيل الموعد عبر واتساب.', en: 'Our senior couture stylist looks forward to welcoming you at Dubai Design District. Confirmation details sent via WhatsApp.' },
  
  // Cart Drawer
  cartTitle: { ar: 'حقيبة التسوق', en: 'Shopping Bag' },
  cartEmpty: { ar: 'حقيبة التسوق فارغة حالياً', en: 'Your Shopping Bag is Empty' },
  cartEmptyDesc: { ar: 'تصفحي مجموعتنا المتميزة من العبايات الفاخرة وأضيفي قطعك المفضلة.', en: 'Explore our 248+ luxury abaya collection and curate your personal modest wardrobe.' },
  cartContinueShopping: { ar: 'متابعة التسوق', en: 'Continue Shopping' },
  cartSubtotal: { ar: 'الإجمالي الفرعي:', en: 'Subtotal:' },
  cartVat: { ar: 'ضريبة القيمة المضافة (5%):', en: 'UAE VAT (5%):' },
  cartDelivery: { ar: 'الشحن والتوصيل:', en: 'Doorstep Delivery:' },
  cartFreeDelivery: { ar: 'مجاني (تم بلوغ الحد)', en: 'COMPLIMENTARY (Threshold Met)' },
  cartTotal: { ar: 'المجموع الكلي:', en: 'Total Amount:' },
  cartFreeProgress: { ar: 'أضيفي بقيمة {amount} د.إ للحصول على توصيل مجاني', en: 'Add {amount} AED more for complimentary UAE delivery' },
  cartFreeUnlocked: { ar: '✓ تهانينا! حصلتِ على توصيل مجاني لكافة الإمارات', en: '✓ Unlocked! You have qualified for FREE UAE delivery' },
  cartTabbyNotice: { ar: 'أو قسّميها على 4 دفعات بدون فوائد مع تابي (Tabby)', en: 'Or split into 4 interest-free payments with Tabby' },
  cartCheckoutBtn: { ar: 'إتمام الطلب والدفع الآمن', en: 'Proceed to Secure Checkout' },
  cartWhatsappCheckout: { ar: 'إتمام الطلب عبر واتساب (+971 50)', en: 'Order Directly via WhatsApp (+971 50)' },
  
  // UAE Delivery Banner
  deliveryBannerTitle: { ar: 'خدمة التوصيل الفاخر إلى باب منزلك في الإمارات', en: 'White-Glove Doorstep Delivery Across the UAE' },
  deliveryDubai: { ar: 'دبي والشارقة: توصيل في نفس اليوم للطلبات المؤكدة قبل 2:00 ظهراً', en: 'Dubai & Sharjah: Same-Day Delivery for orders before 2:00 PM' },
  deliveryAbuDhabi: { ar: 'أبوظبي، العين، وعجمان: توصيل خلال 24 ساعة بعناية تامة', en: 'Abu Dhabi, Al Ain & Ajman: Guaranteed 24-Hour Express' },
  deliveryNorthern: { ar: 'رأس الخيمة، الفجيرة، وأم القيوين: توصيل سريع وجدول يومي', en: 'RAK, Fujairah & UAQ: Dedicated Daily Doorstep Routes' },
  deliveryPackaging: { ar: 'تغليف فاخر بصندوق هدايا يحمل شعار الدار وكيس قماشي واقٍ', en: 'Signature luxury presentation box with protective dust bag included' },
  
  // Brand Story
  storyTitle: { ar: 'حكاية الدار • عراقة الحرفة الإماراتية', en: 'The Atelier Heritage • Emirati Craftsmanship' },
  storyDesc1: { ar: 'تأسست دار نورة للعبايات في دبي لتجسيد أصالة الحشمة العربية برؤية معاصرة ترتقي بالعباية من مجرد رداء تقليدي إلى قطعة فنية راقية تعبر عن هوية المرأة الخليجية الواثقة.', en: 'NOURA ABAYA was founded in Dubai to elevate modestwear into contemporary haute couture, celebrating the poise and identity of the modern Arabian woman.' },
  storyDesc2: { ar: 'نختار أجود خيوط الحرير وأقمشة النيدو اليابانية الفاخرة، ونشرف على أدق تفاصيل الحياكة والشك اليدوي داخل أتيليه الدار في حي دبي للتصميم (d3).', en: 'We source the finest Japanese Royal Nida and European silks, meticulously tailoring each silhouette within our flagship Dubai Design District atelier.' },
  
  // FAQ
  faqSectionTitle: { ar: 'الأسئلة الأكثر شيوعاً', en: 'Frequently Asked Questions' },
  faqSectionSubtitle: { ar: 'كل ما تودين معرفته حول المقاسات، الشحن، الاستبدال، والتفصيل الخاص.', en: 'Everything you need to know about sizes, delivery, bespoke tailoring, and exchanges in the UAE.' },
  
  // Final CTA
  ctaTitle: { ar: 'تألقي بإطلالة تفيض بالفخامة والاحتشام', en: 'Adorn Yourself in Timeless Emirati Splendor' },
  ctaDesc: { ar: 'اكتشفي تشكيلاتنا الحصرية وتألقي بعبايات تجمع بين روعة التصميم ودقة التفصيل.', en: 'Discover our verified bespoke collections, handcrafted to perfection with complimentary same-day UAE delivery.' },
  
  // Footer
  footerAbout: { ar: 'دار نورة للعبايات الفاخرة • تصاميم مستوحاة من سحر التراث العربي ومصممة خصيصاً للمرأة الأنيقة في الإمارات والخليج.', en: 'NOURA ABAYA • Luxury Emirati Haute Couture & bespoke modestwear designed for the discerning woman across the UAE and GCC.' },
  footerLinksTitle: { ar: 'روابط سريعة', en: 'Quick Links' },
  footerCategoriesTitle: { ar: 'أقسام العبايات', en: 'Abaya Categories' },
  footerContactTitle: { ar: 'التواصل والخدمة', en: 'Concierge & Atelier' },
  footerRights: { ar: 'جميع الحقوق محفوظة © 2026 دار نورة للعبايات • دبي، الإمارات العربية المتحدة', en: 'All Rights Reserved © 2026 NOURA ABAYA • Dubai, United Arab Emirates' },
  footerPaymentMethods: { ar: 'طرق الدفع المعتمدة: فيزا، ماستركارد، أبل باي، تابي، والدفع عند الاستلام داخل الإمارات', en: 'Payment Methods: Visa, MasterCard, Apple Pay, Tabby, Cash on Delivery' }
};

// Arabic translations for Categories, Fabrics, Occasions, and Colors
export const ARABIC_CATEGORY_NAMES: Record<string, string> = {
  'Embroidered Abayas': 'عبايات مطرزة',
  'Luxury Abayas': 'عبايات فاخرة ومناسبات',
  'Linen & Crepe Abayas': 'عبايات كريب وكتان',
  'Classic Black Abayas': 'عبايات سوداء كلاسيكية',
  'Silk & Organza Abayas': 'عبايات حرير وأورجانزا',
  'Casual & Daily Wear': 'عبايات يومية وعملية',
  'Kaftans & Dresses': 'قفاطين وفساتين عيد',
  'Eid & Festive Edition': 'تشكيلة الأعياد والاحتفالات'
};

export const ARABIC_COLLECTION_NAMES: Record<string, string> = {
  'EID COLLECTION': 'تشكيلة العيد الفاخرة',
  'NEW ARRIVALS': 'وصل حديثاً',
  'SIGNATURE ABAYAS': 'عبايات التوقيع الملكي',
  'RAMADAN EDIT': 'تشكيلة رمضان المبارك'
};

export const ARABIC_FABRIC_NAMES: Record<string, string> = {
  'Japanese Royal Nida': 'حرير نيدو ياباني ملكي',
  'Dubai Luxury Crepe': 'كريب دبي الفاخر',
  'French Crushed Organza': 'أورجانزا فرنسية ناعمة',
  'Pure Raw Silk': 'حرير خام طبيعي',
  'Natural Washed Linen': 'كتان مغسول طبيعي',
  'Italian Shimmer Chiffon': 'شيفون إيطالي لامع',
  'Crushed Velvet & Silk': 'مخمل ملكي مع حرير'
};

export const ARABIC_OCCASION_NAMES: Record<string, string> = {
  'Casual Elegance & Special Gatherings': 'أناقة يومية ومناسبات راقية',
  'Daily Wear & Work': 'استخدام يومي ودوام عمل',
  'Evening Galas & Weddings': 'سهرات وأعراس ومناسبات كبرى',
  'Eid & Ramadan Gatherings': 'سهرات رمضان وتجمعات العيد'
};

export const ARABIC_FIT_NAMES: Record<string, string> = {
  'Relaxed Modest Cut': 'قصة كلوش انسيابية مريحة',
  'Flared Klosh Cut': 'قصة كلوش ملكية واسعة',
  'A-Line Tailored Cut': 'قصة إيه لاين (A-Line) عصرية',
  'Straight Elegant Fit': 'قصة مستقيمة كلاسيكية'
};

export const ARABIC_COLOR_NAMES: Record<string, string> = {
  'Classic Black': 'أسود ملكي فاخر',
  'Midnight Black': 'أسود ليلي كلاسيكي',
  'Royal Navy': 'كحلي ملكي',
  'Deep Emerald': 'زمردي داكن',
  'Dusty Rose': 'وردي ترابي ناعم',
  'Mocha Brown': 'بني موكا دافئ',
  'Pearl White': 'أبيض لؤلؤي',
  'Burgundy': 'عنابي فاخر',
  'Sage Green': 'أخضر ميرمية',
  'Warm Beige': 'بيج دافئ',
  'Slate Grey': 'رمادي صخري',
  'Champagne Gold': 'ذهبي شامبين'
};

export function translateColorName(color: string): string {
  return ARABIC_COLOR_NAMES[color] || color;
}

export function translateProductName(englishName: string): string {
  if (!englishName) return '';

  let name = englishName;

  // Specific high-frequency abaya title mappings
  const colorMap: [RegExp, string][] = [
    [/\bBlack\b/gi, 'سوداء'],
    [/\bBlue\b/gi, 'زرقاء'],
    [/\bMaroon\b/gi, 'عنابية'],
    [/\bGreen\b/gi, 'خضراء'],
    [/\bBeige\b/gi, 'بيج'],
    [/\bPink\b/gi, 'وردية'],
    [/\bPurple\b/gi, 'بنفسجية'],
    [/\bNavy\b/gi, 'كحلية'],
    [/\bBrown\b/gi, 'بنية'],
    [/\bGrey\b/gi, 'رمادية'],
    [/\bWhite\b/gi, 'بيضاء'],
    [/\bBurgundy\b/gi, 'عنابية داكنة']
  ];

  // Specific known named lines
  if (name.includes('Blue Reem Nada Abaya, Embroidery Detail')) return 'عباية ريم كحلي نيدو بتطريز يدوي راقٍ';
  if (name.includes('Black Deema Nada Abaya, Lace Detail')) return 'عباية ديما سوداء نيدو بلمسات الدانتيل الناعم';
  if (name.includes('Maroon Amani Nada Abaya, Lace Detail')) return 'عباية أماني عنابية نيدو بتفاصيل الدانتيل';
  if (name.includes('Blue Reem Nada Abaya, Lace Detail')) return 'عباية ريم زرقاء نيدو مع دانتيل فاخر';
  if (name.includes('Green Amani Nada Abaya, Lace Detail')) return 'عباية أماني خضراء نيدو بتطريز الدانتيل';
  if (name.includes('Black Atlas Crepe Abaya, Seam Lines')) return 'عباية أطلس سوداء كريب بخطوط درز هندسية';
  if (name.includes('Blue Cool Crepe Abaya, Seam Lines')) return 'عباية زرقاء كول كريب بخطوط خياطة أنيقة';
  if (name.includes('Pink Cool Crepe Abaya, Seam Lines')) return 'عباية وردية كول كريب بقصة انسيابية';
  if (name.includes('Purple Cool Crepe Abaya, Seam Lines')) return 'عباية بنفسجية كول كريب بخطوط درز ناعمة';
  if (name.includes('Blue Alya Nada Abaya, Lace Detail')) return 'عباية علياء زرقاء نيدو بلمسات الدانتيل';
  if (name.includes('Beige Alya Nada Abaya, Lace Detail')) return 'عباية علياء بيج نيدو بتفاصيل دانتيل راقية';
  if (name.includes('Custom Sleek Curve Bead Flare Chiffon Custom Black Abaya')) return 'عباية كلوش سوداء شيفون بتطريز خرز منحني راقٍ';
  if (name.includes('Black Jaime Crepe Custom Abaya with Organza Border and Crystal Bead Embellishment')) return 'عباية جايم كريب سوداء بحواف أورجانزا وشك كريستال';
  if (name.includes('Black Wave Crepe Custom Abaya, Front Beadwork')) return 'عباية ويف كريب سوداء بشك خرز أمامي فاخر';
  if (name.includes('Black Claire Crepe Custom  Abaya with Front Beadwork')) return 'عباية كلير كريب سوداء بتطريز خرز يدوي';

  // General transformation
  let arabic = name;
  arabic = arabic.replace(/Custom\s+/gi, 'فاخرة ');
  arabic = arabic.replace(/Abaya/gi, 'عباية');
  arabic = arabic.replace(/with Organza Border/gi, 'بحواف أورجانزا');
  arabic = arabic.replace(/with Crystal Bead Embellishment/gi, 'وشك كريستال');
  arabic = arabic.replace(/with Front Beadwork/gi, 'بتطريز خرز أمامي');
  arabic = arabic.replace(/Lace Detail/gi, 'بتفاصيل الدانتيل');
  arabic = arabic.replace(/Embroidery Detail/gi, 'بتطريز يدوي');
  arabic = arabic.replace(/Seam Lines/gi, 'بخطوط درز أنيقة');
  arabic = arabic.replace(/Crepe/gi, 'كريب');
  arabic = arabic.replace(/Nada|Nida/gi, 'نيدو ياباني');
  arabic = arabic.replace(/Chiffon/gi, 'شيفون');
  arabic = arabic.replace(/Organza/gi, 'أورجانزا');
  arabic = arabic.replace(/Silk/gi, 'حرير');
  arabic = arabic.replace(/Linen/gi, 'كتان');
  arabic = arabic.replace(/Kaftan/gi, 'قفطان');
  arabic = arabic.replace(/Dress/gi, 'فستان');
  arabic = arabic.replace(/Flare|Flared/gi, 'كلوش');

  for (const [engRegex, arbColor] of colorMap) {
    if (engRegex.test(arabic)) {
      arabic = arabic.replace(engRegex, arbColor);
    }
  }

  // Ensure "عباية" is at the front if not already
  if (!arabic.startsWith('عباية') && !arabic.startsWith('قفطان') && !arabic.startsWith('فستان')) {
    arabic = `عباية ${arabic}`;
  }

  return arabic.trim();
}

export function translateProductOverview(englishOverview: string): string {
  if (!englishOverview) {
    return 'عباية راقية مصنوعة بعناية فائقة من أجود الأقمشة الفاخرة لتمنحكِ إطلالة محتشمة وأنيقة في جميع المناسبات. تشمل طرحة مجانية مطابقة.';
  }

  return 'تصميم فاخر وعصري يجمع بين انسيابية القماش وخفة الوزن ومقاومة التجعد. تمت حياكتها بأعلى معايير الأتيليه الإماراتي لتناسب الإطلالات اليومية والمناسبات الراقية مع طرحة مجانية مطابقة.';
}

