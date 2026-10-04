export type AzureLanguage = 'en' | 'ar';

export interface AzureTranslationEntry {
  en: string;
  ar: string;
}

export const AZURE_TRANSLATIONS: Record<string, AzureTranslationEntry> = {
  // Brand & Navigation
  brandName: { en: 'AZURE YACHTS', ar: 'أزور لليخوت الفاخرة' },
  brandTagline: { en: 'The Sea, On Your Terms.', ar: 'رحلات بحرية فاخرة بمعايير استثنائية.' },
  brandSubtitle: { en: 'LUXURY YACHT CHARTERS • DUBAI MARINA & ABU DHABI', ar: 'تأجير اليخوت الفاخرة • دبي مارينا وكورنيش أبوظبي' },
  navFleet: { en: 'Yacht Fleet', ar: 'أسطول اليخوت' },
  navPlanner: { en: 'Charter Planner', ar: 'حاسبة الرحلات' },
  navExperiences: { en: 'Experiences', ar: 'الباقات والرحلات' },
  navProcess: { en: 'Workflow', ar: 'طريقة الحجز' },
  navWhyUs: { en: 'Why Azure', ar: 'لماذا أزور' },
  navMarinas: { en: 'Marinas', ar: 'المراسي' },
  navFAQ: { en: 'FAQ', ar: 'الأسئلة الشائعة' },
  navBookCharter: { en: 'Book Charter', ar: 'حجز يخت' },
  backToPortfolio: { en: 'Back to Portfolio', ar: 'العودة لمعرض الأعمال' },
  callMarina: { en: 'Call Marina Berth', ar: 'اتصل بمرسى دبي مارينا' },
  whatsappBooking: { en: 'WhatsApp Concierge', ar: 'مستشار الحجوزات عبر واتساب' },

  // Hero Section
  heroBadge: { en: '24 LUXURY YACHTS • DUBAI MARINA PIER 7 & ABU DHABI CORNICHE', ar: '٢٤ يختاً وسوبر يخت فاخر • دبي مارينا بيير ٧ وكورنيش أبوظبي' },
  heroTitleLine1: { en: 'Private Superyacht Charters,', ar: 'استئجار يخوت وسوبر يخت خاصة،' },
  heroTitleHighlight: { en: 'Unrivaled Arabian Gulf Luxury.', ar: 'بقمة الفخامة في الخليج العربي.' },
  heroDesc: {
    en: 'Experience the ultimate Dubai and Abu Dhabi coastline voyages. From 52ft sunset skyline cruises past Ain Dubai to 120ft mega yacht celebrations with licensed captains, onboard gourmet chefs, and bespoke 5-star hospitality.',
    ar: 'عِش أرقى التجارب البحرية على سواحل دبي وأبوظبي. من جولات الغروب على متن يخوت ٥٢ قدماً بجوار عين دبي وبرج العرب، إلى احتفالات السوبر يخت ١٢٠ قدماً مع قبطان مرخص، طهاة عالميين، وخدمات فندقية ٥ نجوم.'
  },
  heroCtaPlanner: { en: 'Plan Custom Yacht Charter', ar: 'صمم وحاسب رحلتك البحرية' },
  heroCtaFleet: { en: 'Explore Yacht Fleet (24)', ar: 'استعرض أسطول اليخوت (٢٤)' },

  // Stats / Badges
  statFleetCount: { en: 'Luxury Yacht Fleet', ar: 'أسطول يخوت وسوبر يخت' },
  statChartersCompleted: { en: 'VIP Charters Completed', ar: 'رحلة بحرية كبار الشخصيات' },
  statGuestRating: { en: '5-Star Verified Rating', ar: 'تقييم العملاء المعتمد' },
  statCrewExperience: { en: 'Licensed Masters & Crew', ar: 'قباطنة وطواقم بحرية مرخصة' },

  // Trust Strip
  trustTitle: { en: 'TRUSTED BY GLOBAL VIP CONCIERGES & LUXURY EVENT PRODUCERS', ar: 'موثوق من كبرى شركات إدارة الفعاليات الفاخرة وخدمات الكونسيرج العالمية' },

  // Fleet Showcase
  fleetBadge: { en: 'CURATED YACHT FLEET', ar: 'أسطول اليخوت المعتمد' },
  fleetTitle: { en: 'Explore Our Luxury Fleet', ar: 'استعرض نخبة اليخوت الفاخرة' },
  fleetSubtitle: {
    en: 'From 44ft deep sea fishing cruisers to 120ft mega superyachts berthed at Dubai Marina Walk Pier 7 & Abu Dhabi Corniche.',
    ar: 'من يخوت الصيد الرياضية ٤٤ قدماً إلى الميجا يخت الفاخرة ١٢٠ قدماً الراسية في دبي مارينا بيير ٧ وكورنيش أبوظبي.'
  },
  fleetFilterAll: { en: 'All Fleet (24)', ar: 'كامل الأسطول (٢٤)' },
  fleetFilterSmall: { en: 'Small (44ft–55ft)', ar: 'صغيرة (٤٤-٥٥ قدماً)' },
  fleetFilterMedium: { en: 'Medium (68ft–85ft)', ar: 'متوسطة (٦٨-٨٥ قدماً)' },
  fleetFilterSuper: { en: 'Superyacht (105ft+)', ar: 'سوبر يخت (١٠٥+ قدماً)' },
  fleetHourlyRate: { en: 'HOURLY RATE', ar: 'سعر الساعة' },
  fleetFullDay: { en: 'FULL DAY (8 HR)', ar: 'يوم كامل (٨ ساعات)' },
  fleetViewSpecs: { en: 'VIEW SPECS', ar: 'المواصفات' },
  fleetCharterBtn: { en: 'CHARTER', ar: 'احجز الآن' },
  fleetFt: { en: 'FT', ar: 'قدم' },
  fleetGuests: { en: 'GUESTS', ar: 'ضيوف' },
  fleetCapacity: { en: 'CAPACITY', ar: 'السعة' },
  fleetCabins: { en: 'CABINS', ar: 'الكابينات' },
  fleetMaxSpeed: { en: 'MAX SPEED', ar: 'السرعة القصوى' },
  fleetAmenitiesInclusions: { en: 'ONBOARD AMENITIES & INCLUSIONS', ar: 'المزايا والخدمات المشمولة على المتن' },
  fleetBookThisYacht: { en: 'BOOK CHARTER ON THIS YACHT', ar: 'حجز رحلة على متن هذا اليخت' },

  // Charter Planner (Interactive Calculator)
  plannerBadge: { en: 'INTERACTIVE YACHT CHARTER PLANNER', ar: 'حاسبة وتخطيط الرحلات البحرية' },
  plannerTitle: { en: 'Plan Your Charter Experience', ar: 'صمم رحلتك البحرية واحسب تكلفتها' },
  plannerSubtitle: {
    en: 'Select your occasion, expected guest count, and cruise duration to generate instant yacht recommendations and all-inclusive pricing in AED.',
    ar: 'حدد نوع المناسبة، عدد الضيوف، والمدة بالساعات للحصول على توصية فورية باليخت المناسب وحساب التكلفة الشاملة بالدرهم.'
  },
  plannerParamsTitle: { en: '1. CHARTER PARAMETERS', ar: '١. تفاصيل ومواصفات الرحلة' },
  plannerOccasionLabel: { en: 'Select Occasion / Experience', ar: 'نوع المناسبة أو الرحلة' },
  plannerGuestLabel: { en: 'Expected Guest Count:', ar: 'عدد الضيوف المتوقع:' },
  plannerDurationLabel: { en: 'Charter Duration:', ar: 'مدة الإبحار المطلوبة:' },
  plannerHours: { en: 'Hours', ar: 'ساعات' },
  plannerGuestsCount: { en: 'Guests', ar: 'ضيوف' },
  plannerProjectionTitle: { en: 'CHARTER PROJECTION', ar: 'ملخص وتكلفة الرحلة' },
  plannerRecommendedYacht: { en: 'RECOMMENDED YACHT', ar: 'اليخت الموصى به' },
  plannerEstimatedPriceRange: { en: 'ESTIMATED PRICE RANGE', ar: 'نطاق السعر التقديري' },
  plannerIncludedAddons: { en: 'INCLUDED INCLUSIONS & AMENITIES', ar: 'الخدمات والتجهيزات المشمولة' },
  plannerCtaQuote: { en: 'REQUEST CUSTOM QUOTE', ar: 'طلب تسعيرة وتأكيد الحجز' },

  // Occasions list
  occSunset: { en: '🌅 Sunset Skyline Cruise', ar: '🌅 جولة الغروب وأفق دبي' },
  occBirthday: { en: '🎂 Birthday & Private Party', ar: '🎂 أعياد الميلاد والحفلات الخاصة' },
  occCorporate: { en: '👔 Corporate Event & VIP', ar: '👔 الفعاليات والاجتماعات للشركات' },
  occFishing: { en: '🎣 Deep Sea Fishing Trip', ar: '🎣 رحلات صيد الأسماك في الأعماق' },
  occMultiday: { en: '🏝️ Multi-Day Island Charter', ar: '🏝️ رحلات الجزر لعدة أيام' },

  // Experiences Section
  expBadge: { en: 'SIGNATURE ITINERARIES', ar: 'تجارب ورحلات مميزة' },
  expTitle: { en: 'Curated Marine Experiences', ar: 'باقات بحرية استثنائية' },
  expSubtitle: {
    en: 'Whether sailing past Dubai Marina skyline or anchoring in secluded Abu Dhabi coves, every route is tailored to perfection.',
    ar: 'سواء كنت تبحر بمحاذاة أفق دبي مارينا أو ترسو في خلجان أبوظبي الهادئة، نصمم كل خط سير بدقة لا تضاهى.'
  },
  expIdealFor: { en: 'IDEAL FOR', ar: 'مثالية لـ' },
  expDuration: { en: 'DURATION', ar: 'المدة' },
  expSampleItinerary: { en: 'SAMPLE ITINERARY', ar: 'مسار الرحلة النموذجي' },
  expBookExperience: { en: 'Book This Experience', ar: 'حجز هذه التجربة' },

  // How We Work
  processBadge: { en: 'SEAMLESS BOOKING PROTOCOL', ar: 'خطوات حجز سريعة وسلسة' },
  processTitle: { en: 'How Your Yacht Charter Works', ar: 'كيف تسير عملية حجز رحلتك' },
  processSubtitle: {
    en: 'From your initial inquiry to champagne boarding at Dubai Marina Pier 7, we handle all navigation permits and hospitality.',
    ar: 'من اللحظة الأولى لاستفسارك وحتى الصعود على المتن في دبي مارينا بيير ٧، نتولى جميع التصاريح البحرية والضيافة.'
  },
  step1Num: { en: '01', ar: '٠١' },
  step1Title: { en: 'Select Yacht & Occasion', ar: 'اختيار اليخت والمناسبة' },
  step1Desc: { en: 'Browse our 24 yachts or use our interactive planner to find the perfect capacity and deck layout.', ar: 'استعرض أسطولنا المكون من ٢٤ يختاً أو استخدم الحاسبة لاختيار اليخت والمساحة المناسبة لضيوفك.' },
  step2Num: { en: '02', ar: '٠٢' },
  step2Title: { en: 'Customize Catering & Route', ar: 'تخصيص الضيافة ومسار الإبحار' },
  step2Desc: { en: 'Add live BBQ, gourmet Michelin chef menus, DJ sound setups, water sports, or balloon decorations.', ar: 'أضف بوفيه مشاوي حية، طهاة عالميين، منسق موسيقى، ألعاب مائية نفاثة، أو تزيين كامل للحفلات.' },
  step3Num: { en: '03', ar: '٠٣' },
  step3Title: { en: 'Coast Guard & Berth Clearance', ar: 'تصاريح خفر السواحل والمرسى' },
  step3Desc: { en: 'We process all marine passenger manifests, fuel, and security clearances ahead of your arrival.', ar: 'ننهي جميع تصاريح الركاب مع خفر السواحل وتجهيز الوقود والمرسى لضمان انطلاق فوري وبأعلى أمان.' },
  step4Num: { en: '04', ar: '٠٤' },
  step4Title: { en: 'VIP Boarding & Sail', ar: 'الاستقبال الملكي والإبحار' },
  step4Desc: { en: 'Arrive at Pier 7 VIP valet, meet your captain, and embark on a world-class Arabian Gulf charter.', ar: 'الوصول إلى خدمة صف السيارات في بيير ٧، لقاء القبطان، وبدء رحلة بحرية فاخرة لا تُنسى.' },

  // Case Study Section
  caseBadge: { en: 'FEATURED VIP CHARTER CASE STUDY', ar: 'دراسة حالة: تنظيم فعالية حصرية' },
  caseTitle: { en: 'Global Tech Brand 60-Guest Product Launch', ar: 'إطلاق منتج حصري لشركة تقنية عالمية (٦٠ ضيفاً)' },
  caseChallenge: { en: 'THE CHALLENGE', ar: 'التحدي' },
  caseSolution: { en: 'OUR SOLUTION', ar: 'الحل المنفذ' },
  caseMetricsGuests: { en: 'VIP Guests Hosted', ar: 'ضيفاً من كبار الشخصيات' },
  caseMetricsYachts: { en: 'Synchronized Superyachts', ar: 'يخوت سوبر يخت متزامنة' },
  caseMetricsRating: { en: 'Client Satisfaction Score', ar: 'نسبة رضا وتقييم العميل' },

  // Why Azure
  whyBadge: { en: 'THE AZURE DIFFERENCE', ar: 'لماذا تختار أزور لليخوت' },
  whyTitle: { en: 'Uncompromising Maritime Excellence', ar: 'تميز بحري لا يقبل المساومة' },
  whySubtitle: {
    en: 'Why VIPs, multinational corporations, and discerning families choose AZURE for their Arabian Gulf charters.',
    ar: 'السبب وراء اختيار كبار الشخصيات، الشركات العالمية، والعائلات الراقية لأزور لخوض رحلاتهم البحرية.'
  },
  why1Title: { en: '100% Owned & Maintained Fleet', ar: 'أسطول مملوك ومفحوص بالكامل' },
  why1Desc: { en: 'Direct owner booking with zero middleman markups and immaculate marine engineering maintenance.', ar: 'حجز مباشر من مالك الأسطول بدون أي وسيط مع صيانة ميكانيكية دورية وفق أعلى المعايير الدولية.' },
  why2Title: { en: 'Licensed Master Captains', ar: 'قباطنة معتمدون ومحترفون' },
  why2Desc: { en: 'MCA & UAE Coast Guard certified master captains with decades of Gulf navigation experience.', ar: 'قباطنة مرخصون من خفر السواحل الإماراتي والمنظمات البحرية العالمية بخبرة تفوق عشرين عاماً.' },
  why3Title: { en: 'All-Inclusive Transparent Rates', ar: 'أسعار شاملة وشفافة بالكامل' },
  why3Desc: { en: 'Fuel, licensed crew, soft drinks, ice, towels, and sound systems included with 0 hidden berth fees.', ar: 'الوقود، الطاقم، المشروبات الباردة، الثلج، المناشف، وأنظمة الصوت مشمولة بدون رسوم مفاجئة.' },
  why4Title: { en: 'Prime Pier 7 Marina Berths', ar: 'أرقى المراسي في بيير ٧ دبي مارينا' },
  why4Desc: { en: 'Central luxury departure locations with valet parking, air-conditioned guest lounges, and fast canal exit.', ar: 'مواقع انطلاق ممتازة مع خدمة صف سيارات كبار الشخصيات وصالات انتظار مكيفة وسرعة وصول للبحر.' },
  why5Title: { en: 'Gourmet Culinary Options', ar: 'خيارات ضيافة ومأكولات فاخرة' },
  why5Desc: { en: 'From casual live BBQ burgers to 5-course seated banquets curated by Michelin-trained onboard chefs.', ar: 'من بوفيهات المشاوي الحية إلى ولائم فاخرة من ٥ أطباق يعدها طهاة متمرسون على متن اليخت.' },
  why6Title: { en: 'Water Toys & Jet Skis', ar: 'ألعاب مائية وجت سكي فاخر' },
  why6Desc: { en: 'Seabob underwater scooters, Yamaha jet skis, inflatable slides, and donut rides available on demand.', ar: 'سكوترات سيبوب تحت الماء، جت سكي ياماها، زلاقات مائية ضخمة، وألعاب سحب ممتعة لجميع الأعمار.' },

  // Leadership
  teamBadge: { en: 'MARITIME COMMAND', ar: 'فريق القيادة البحرية' },
  teamTitle: { en: 'Meet Our Fleet Command & Concierge', ar: 'تعرف على قادتنا ومستشارينا البحريين' },
  teamSubtitle: {
    en: 'Decades of combined master captaincy, Monaco yacht hospitality, and luxury event production.',
    ar: 'عقود من الخبرة القيادية في الملاحة البحرية، كونسيرج موناكو، وتنظيم الفعاليات الفاخرة.'
  },

  // Insights
  insightsBadge: { en: 'MARITIME JOURNAL', ar: 'دليل الإبحار واليخوت' },
  insightsTitle: { en: 'Yachting Guides & Dubai Marine Tips', ar: 'نصائح وتوجيهات الإبحار في دبي' },
  insightsSubtitle: {
    en: 'Expert advice on charter planning, route recommendations, and yacht etiquette in the UAE.',
    ar: 'إرشادات الخبراء لتخطيط الرحلات البحرية، أفضل المسارات، وقواعد الإتيكيت على متن اليخوت.'
  },

  // Marinas / Locations
  marinasBadge: { en: 'FLAGSHIP BERTHS', ar: 'مراسينا الرئيسية' },
  marinasTitle: { en: 'Strategic Marina Locations', ar: 'مواقع الانطلاق في دبي وأبوظبي' },
  marinasSubtitle: {
    en: 'Direct boarding access in the most prestigious marine locations in the UAE.',
    ar: 'وصول مباشر للإبحار من أرقى الواجهات البحرية في دولة الإمارات.'
  },
  marinaAddress: { en: 'Address:', ar: 'العنوان:' },
  marinaHours: { en: 'Berth Hours:', ar: 'ساعات العمل:' },
  marinaPhone: { en: 'Concierge Desk:', ar: 'مكتب الكونسيرج:' },

  // Testimonials
  reviewsBadge: { en: 'VERIFIED GUEST EXPERIENCES', ar: 'تجارب وآراء الضيوف المعتمدة' },
  reviewsTitle: { en: 'What Our Charter Guests Say', ar: 'ماذا يقول ضيوف رحلاتنا' },
  reviewsSubtitle: {
    en: 'Read authentic reviews from families, couples, and corporate clients who chartered with AZURE.',
    ar: 'اقرأ تجارب حقيقية لعائلات، مناسبات خاصة، وشركات كبرى استمتعوا برحلاتهم مع أزور.'
  },

  // FAQ
  faqBadge: { en: 'FREQUENTLY ASKED QUESTIONS', ar: 'الأسئلة الشائعة' },
  faqTitle: { en: 'Everything You Need to Know', ar: 'كل ما تحتاج لمعرفته قبل الحجز' },
  faqSubtitle: {
    en: 'Clear answers on capacity, food & drink policy, weather guarantees, and safety regulations.',
    ar: 'إجابات واضحة حول سعة اليخوت، سياسة الأطعمة والمشروبات، ضمانات الطقس، وإجراءات السلامة.'
  },

  // Final CTA
  finalCtaBadge: { en: 'READY TO SET SAIL? • REAL-TIME MARINA SLOTS', ar: 'هل أنت جاهز للإبحار؟ • مواعيد متاحة فوراً' },
  finalCtaTitle: { en: 'Book Your Luxury Yacht Charter Today', ar: 'احجز رحلتك البحرية الفاخرة اليوم' },
  finalCtaSubtitle: {
    en: 'Speak with our Dubai Marina charter concierge on WhatsApp or submit your booking details for instant confirmation.',
    ar: 'تواصل مباشرة مع مستشار الحجوزات في دبي مارينا عبر واتساب أو أرسل تفاصيل رحلتك لتأكيد فوري.'
  },
  finalCtaCallBtn: { en: 'CALL MARINA DESK NOW', ar: 'اتصل بمكتب المرسى الآن' },
  finalCtaWhatsappBtn: { en: 'WHATSAPP CHARTER CONCIERGE', ar: 'محادثة مستشار الحجوزات عبر واتساب' },
  finalCtaModalBtn: { en: 'CHECK LIVE AVAILABILITY', ar: 'فحص المواعيد المتاحة فوراً' },

  // Footer
  footerDesc: {
    en: 'AZURE YACHTS is the UAE’s premier luxury yacht charter operator, delivering bespoke sunset cruises, private celebrations, corporate hospitality, and deep sea fishing adventures.',
    ar: 'أزور لليخوت هي الشركة الرائدة في تأجير اليخوت الفاخرة بدولة الإمارات، وتقدم جولات الغروب، الاحتفالات الخاصة، الفعاليات المؤسسية، ورحلات الصيد البحري.'
  },
  footerQuickLinks: { en: 'Quick Navigation', ar: 'روابط سريعة' },
  footerFleetLinks: { en: 'Fleet Categories', ar: 'فئات الأسطول' },
  footerContact: { en: 'Marina Concierge', ar: 'التواصل والحجوزات' },
  footerRights: { en: 'AZURE YACHTS UAE. All rights reserved.', ar: 'أزور لليخوت الإمارات. جميع الحقوق محفوظة.' },
  footerLicensing: { en: 'Licensed by Dubai Maritime Authority & UAE Coast Guard.', ar: 'مرخص من سلطة دبي البحرية وخفر السواحل الإماراتي.' },

  // Booking Modal
  modalTitle: { en: 'Check Yacht Availability', ar: 'فحص مواعيد وتوافر اليخوت' },
  modalSubtitle: {
    en: 'Submit your charter details below to verify berth slot availability and receive an all-inclusive quote.',
    ar: 'أدخل تفاصيل رحلتك البحرية للتحقق من المواعيد المتاحة في المرسى والحصول على تسعيرة فورية شاملة.'
  },
  modalNameLabel: { en: 'Your Name *', ar: 'الاسم الكريم *' },
  modalNamePlaceholder: { en: 'e.g. Noora Al Zaabi', ar: 'مثال: نورة الزعابي' },
  modalPhoneLabel: { en: 'UAE Phone / WhatsApp *', ar: 'رقم الهاتف / واتساب الإمارات *' },
  modalPhonePlaceholder: { en: '+971 50 123 4567', ar: '+971 50 123 4567' },
  modalYachtSelectLabel: { en: 'Select Yacht / Size', ar: 'اختيار اليخت / الحجم' },
  modalOccasionLabel: { en: 'Occasion / Event Type', ar: 'نوع المناسبة / الرحلة' },
  modalDateLabel: { en: 'Preferred Date', ar: 'تاريخ الرحلة المفضل' },
  modalDurationLabel: { en: 'Duration (Hours)', ar: 'المدة المطلوبة (ساعات)' },
  modalGuestsLabel: { en: 'Expected Guests Count', ar: 'عدد الضيوف المتوقع' },
  modalNotesLabel: { en: 'Special Requests & Catering Add-ons', ar: 'طلبات خاصة، ضيافة، أو ديكور' },
  modalNotesPlaceholder: {
    en: 'e.g. 15 guests, BBQ catering, balloon decor, 3-hour sunset cruise past Ain Dubai.',
    ar: 'مثال: ١٥ ضيفاً، بوفيه مشاوي حية، تزيين بالبالونات، رحلة غروب لمدة ٣ ساعات بجوار عين دبي.'
  },
  modalSubmitBtn: { en: 'CHECK AVAILABILITY & GET QUOTE', ar: 'فحص التوافر والحصول على التسعيرة' },
  modalSuccessTitle: { en: 'Availability Request Sent!', ar: 'تم إرسال طلب الحجز بنجاح!' },
  modalSuccessDesc: {
    en: 'Thank you. Our Dubai Marina charter desk will check the berth schedule and contact you shortly on WhatsApp with confirmed pricing.',
    ar: 'شكراً لك. سيقوم مكتب حجوزات دبي مارينا بفحص جدول المرسى والتواصل معك سريعاً عبر واتساب بالتسعيرة المؤكدة.'
  },
  modalCloseBtn: { en: 'CLOSE WINDOW', ar: 'إغلاق النافذة' },
  modalNeedImmediate: { en: 'Need immediate booking confirmation?', ar: 'هل تحتاج إلى تأكيد فوري ومباشر؟' },
  modalWhatsappDirect: { en: 'WhatsApp Marina Concierge Directly', ar: 'تواصل مباشرة عبر واتساب مع المرسى' },
};
