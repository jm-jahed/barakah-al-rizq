export type AerovaultLanguage = 'en' | 'ar';

export interface AerovaultTranslationEntry {
  en: string;
  ar: string;
}

export const AEROVAULT_TRANSLATIONS: Record<string, AerovaultTranslationEntry> = {
  // Brand & Nav
  brandName: { en: 'AEROVAULT', ar: 'إيروفولت للطيران الخاص' },
  brandTagline: { en: 'Private Aviation, Precisely Arranged.', ar: 'طيران تنفيذي فاخر بدقة مطلقة.' },
  brandSubtitle: { en: 'PRIVATE JET CHARTER BROKER • DUBAI & ABU DHABI', ar: 'وساطة واستئجار الطائرات الخاصة • دبي وأبوظبي' },
  navFleet: { en: 'Aircraft Fleet', ar: 'أسطول الطائرات' },
  navCalculator: { en: 'Flight Calculator', ar: 'حاسبة الرحلات' },
  navEmptyLegs: { en: 'Empty Legs', ar: 'الرحلات الفارغة' },
  navJetCard: { en: 'Jet Card', ar: 'بطاقة العضوية' },
  navProcess: { en: 'Workflow', ar: 'بروتوكول السفر' },
  navWhyUs: { en: 'Why Aerovault', ar: 'لماذا إيروفولت' },
  navDesks: { en: 'FBO Terminals', ar: 'صالات كبار الشخصيات' },
  navFAQ: { en: 'FAQ', ar: 'الأسئلة الشائعة' },
  navRequestFlight: { en: 'Request Flight', ar: 'طلب حجز طائرة' },
  backToPortfolio: { en: 'Back to Portfolio', ar: 'العودة لمعرض الأعمال' },
  callFlightDesk: { en: 'Call 24/7 Flight Desk', ar: 'مكتب الطيران على مدار الساعة' },
  whatsappBooking: { en: 'WhatsApp Charter Broker', ar: 'وسيط الطيران عبر واتساب' },

  // Hero Section
  heroBadge: { en: '150+ ACCREDITED JETS • DUBAI DWC & ABU DHABI VIP FBO HUBS', ar: '١٥٠+ طائرة نفاثة معتمدة • صالات كبار الشخصيات بمطاري دبي وأبوظبي' },
  heroTitleLine1: { en: 'Private Aviation,', ar: 'طيران تنفيذي خاص،' },
  heroTitleHighlight: { en: 'Precisely Arranged.', ar: 'بأعلى معايير الخصوصية والدقة.' },
  heroDesc: {
    en: 'Connecting business leaders, sovereign delegations, and UHNW travelers to 5,000+ global airports. Direct tarmac limousine boarding, 90-minute urgent dispatch, ARGUS-certified safety, and bespoke in-flight gastronomy from Dubai (DWC / DXB) and Abu Dhabi.',
    ar: 'نربط قادة الأعمال، الوفود الدبلوماسية، ونخبة المسافرين بأكثر من ٥,٠٠٠ مطار حول العالم. صعود مباشر بجوار مدرج الطائرات، جاهزية إقلاع خلال ٩٠ دقيقة، معايير أمان معتمدة من ARGUS، وضيافة طيران راقية من دبي وأبوظبي.'
  },
  heroCtaCalculate: { en: 'Calculate Flight Quote', ar: 'احسب تكلفة رحلتك فوراً' },
  heroCtaFleet: { en: 'Explore Aircraft Fleet', ar: 'استعرض أسطول الطائرات' },

  // Hero Stats
  statFleetAccess: { en: 'Global Aircraft Access', ar: 'طائرة نفاثة خاصة عالمياً' },
  statAirportsCount: { en: 'Direct Global Airports', ar: 'مطار دولي متاح للهبوط' },
  statDispatchTime: { en: 'Urgent Dispatch SLA', ar: 'جاهزية إقلاع للطوارئ' },
  statSafetyRating: { en: 'Dual-Pilot Safety SLA', ar: 'معايير أمان معتمدة عالمياً' },

  // Trust Strip
  trustTitle: { en: 'ACCREDITED BY GLOBAL AVIATION AUTHORITIES & VIP FBO OPERATORS', ar: 'شراكات معتمدة مع أرقى صالات الطيران الخاص وهيئات السلامة الجوية' },

  // Flight Route & Price Estimator
  calcBadge: { en: 'INTERACTIVE FLIGHT CALCULATOR', ar: 'حاسبة مسارات وتكاليف الطيران' },
  calcTitle: { en: 'Calculate Private Flight Cost', ar: 'احسب تكلفة رحلتك الجوية بدقة' },
  calcSubtitle: {
    en: 'Select departure FBO terminal, international destination, passenger count, and jet category for instant flight duration and all-inclusive pricing.',
    ar: 'حدد صالة الانطلاق لكبار الشخصيات، وجهتك الدولية، عدد الركاب، وفئة الطائرة للحصول على تقدير فوري للزمن والتكلفة الشاملة.'
  },
  calcParamsTitle: { en: '1. ROUTE & AIRCRAFT PARAMETERS', ar: '١. تفاصيل المسار وفئة الطائرة' },
  calcOriginLabel: { en: 'Departure FBO Terminal', ar: 'مطار وصالة المغادرة (FBO)' },
  calcDestLabel: { en: 'Destination Airport', ar: 'مطار الوجهة المقصودة' },
  calcPassengersLabel: { en: 'Passenger Count:', ar: 'عدد الركاب المسافرين:' },
  calcJetCategoryLabel: { en: 'Preferred Aircraft Category', ar: 'فئة الطائرة المفضلة' },
  calcProjectionTitle: { en: 'FLIGHT CHARTER PROJECTION', ar: 'ملخص وتكلفة الرحلة التقديرية' },
  calcRecommendedJet: { en: 'RECOMMENDED AIRCRAFT', ar: 'الطائرة الموصى بها' },
  calcFlightTime: { en: 'ESTIMATED FLIGHT TIME', ar: 'الوقت التقديري للرحلة' },
  calcEstimatedCost: { en: 'ESTIMATED CHARTER COST', ar: 'التكلفة الإجمالية التقديرية' },
  calcInclusionsTitle: { en: 'ALL-INCLUSIVE GUARANTEE', ar: 'الضمانات المشمولة في السعر' },
  calcInc1: { en: 'Complete fuel, dual-captain crew & international landing permits', ar: 'شامل الوقود، قبطانين معتمدين، وتصاريح الهبوط الدولية' },
  calcInc2: { en: 'VIP FBO lounge terminal access with private customs & limousine', ar: 'دخول صالات كبار الشخصيات مع إنهاء الجوازات وخدمة الليموزين' },
  calcInc3: { en: 'Complimentary high-altitude gourmet dining & beverage service', ar: 'ضيافة طعام ومشروبات فاخرة مجانية على متن الطائرة' },
  calcCtaQuote: { en: 'LOCK IN OFFICIAL FLIGHT QUOTE', ar: 'طلب التسعيرة الرسمية وتأكيد الحجز' },

  // Jet Categories
  catLightJet: { en: '🛩️ Light Jet (1-7 Pax)', ar: '🛩️ نفاثة خفيفة (١-٧ ركاب)' },
  catSuperMidsize: { en: '✈️ Super Midsize (8-12 Pax)', ar: '✈️ متوسطة ممتازة (٨-١٢ راكباً)' },
  catUltraLong: { en: '🚀 Ultra Long Range (12-19 Pax)', ar: '🚀 بعيدة المدى (١٢-١٩ راكباً)' },

  // Fleet Showcase
  fleetBadge: { en: 'CURATED AIRCRAFT INVENTORY', ar: 'أسطول الطائرات المتاح' },
  fleetTitle: { en: 'Explore Our Private Jet Fleet', ar: 'استعرض أسطول الطائرات النفاثة' },
  fleetSubtitle: {
    en: 'From nimble Light Jets for GCC regional hops to ultra-long-range intercontinental flagships and VIP corporate airliners.',
    ar: 'من الطائرات الخفيفة للرحلات الإقليمية السريعة في دول الخليج إلى السوبر جيت العابرة للقارات وطائرات رجال الأعمال الفاخرة.'
  },
  fleetFilterAll: { en: 'All Aircraft (150+)', ar: 'كامل الأسطول (١٥٠+)' },
  fleetFilterLight: { en: 'Light Jets', ar: 'نفاثات خفيفة' },
  fleetFilterMid: { en: 'Super Midsize', ar: 'متوسطة ممتازة' },
  fleetFilterHeavy: { en: 'Heavy & Ultra Long', ar: 'طويلة المدى وفائقة' },
  fleetFilterAirliner: { en: 'VIP Airliners', ar: 'طائرات كبار الشخصيات' },
  fleetHourlyRate: { en: 'HOURLY RATE', ar: 'سعر الساعة' },
  fleetRange: { en: 'NON-STOP RANGE', ar: 'المدى بدون توقف' },
  fleetViewSpecs: { en: 'VIEW SPECS', ar: 'المواصفات' },
  fleetCharterBtn: { en: 'CHARTER AIRCRAFT', ar: 'طلب هذه الطائرة' },
  fleetPax: { en: 'PASSENGERS', ar: 'ركاب' },
  fleetSpeed: { en: 'CRUISE SPEED', ar: 'سرعة الطيران' },
  fleetLuggage: { en: 'BAGGAGE CAPACITY', ar: 'سعة الأمتعة' },
  fleetCabinHeight: { en: 'CABIN HEIGHT', ar: 'ارتفاع المقصورة' },
  fleetAmenitiesInclusions: { en: 'CABIN CHARACTERISTICS & AMENITIES', ar: 'مواصفات وتجهيزات المقصورة' },

  // Empty Leg Deals
  emptyBadge: { en: 'EXCLUSIVE ONE-WAY SAVINGS', ar: 'عروض الرحلات الفارغة (Empty Legs)' },
  emptyTitle: { en: 'Live Empty Leg Opportunities', ar: 'رحلات فارغة متاحة بخصم حتى ٦٠٪' },
  emptySubtitle: {
    en: 'Take advantage of one-way repositioning flights on luxury private aircraft at a fraction of standard charter rates.',
    ar: 'استفد من رحلات عودة الطائرات الخاصة باتجاه واحد واستمتع بنفس الفخامة والخصوصية بخصومات استثنائية.'
  },
  emptyStandardPrice: { en: 'STANDARD CHARTER', ar: 'السعر المعتاد' },
  emptyDealPrice: { en: 'EMPTY LEG RATE', ar: 'سعر العرض' },
  emptyBookBtn: { en: 'CLAIM THIS EMPTY LEG', ar: 'حجز هذه الرحلة' },

  // Jet Card Membership
  jetCardBadge: { en: 'GUARANTEED AVAILABILITY PROGRAM', ar: 'برنامج عضوية بطاقة الطيران' },
  jetCardTitle: { en: 'AEROVAULT Jet Card Memberships', ar: 'عضويات بطاقة طيران إيروفولت' },
  jetCardSubtitle: {
    en: 'Fixed hourly rates, guaranteed aircraft availability with 12 hours notice, zero repositioning fees, and dedicated flight concierge.',
    ar: 'أسعار ساعات طيران ثابتة ومضمونة، تأكيد توفر الطائرة بإشعار ١٢ ساعة فقط، بدون رسوم تموضع، ومدير حسابات خاص.'
  },
  jetCardTier25: { en: '25-Hour Jet Card', ar: 'بطاقة ٢٥ ساعة طيران' },
  jetCardTier50: { en: '50-Hour Executive Card', ar: 'بطاقة ٥٠ ساعة تنفيذية' },
  jetCardTier100: { en: '100-Hour Sovereign Card', ar: 'بطاقة ١٠٠ ساعة سيادية' },
  jetCardHours: { en: 'Pre-Purchased Hours', ar: 'ساعات طيران مدفوعة مسبقاً' },
  jetCardGuaranteeNotice: { en: 'Guaranteed Dispatch Notice', ar: 'إشعار الحجز المضمون' },
  jetCardApplyBtn: { en: 'APPLY FOR JET CARD', ar: 'التقديم على العضوية' },

  // How We Work (Workflow)
  processBadge: { en: 'FLAWLESS FLIGHT PROTOCOL', ar: 'بروتوكول الطيران التنفيذي' },
  processTitle: { en: 'How Your Private Charter Works', ar: 'خطوات تنظيم رحلتك الخاصة' },
  processSubtitle: {
    en: 'From your initial flight inquiry to tarmac limousine arrival, our operations desk orchestrates every detail with military precision.',
    ar: 'من لحظة استفسارك الأول وحتى الوصول إلى مدرج الطائرات، يدير فريق العمليات كل تفصيلة بدقة متناهية.'
  },
  step1Num: { en: '01', ar: '٠١' },
  step1Title: { en: 'Submit Flight Request', ar: 'تحديد المسار والجدول' },
  step1Desc: { en: 'Provide departure, destination, schedule, and passenger preferences via our tool, WhatsApp, or phone.', ar: 'شارك نقطة الانطلاق، الوجهة، الموعد، وتفضيلات الركاب عبر الموقع أو واتساب أو الاتصال المباشر.' },
  step2Num: { en: '02', ar: '٠٢' },
  step2Title: { en: 'Aircraft Match & Quote', ar: 'اختيار الطائرة والتسعيرة' },
  step2Desc: { en: 'Receive tailored aircraft options with transparent all-inclusive pricing within 15 minutes.', ar: 'نقدم لك خيارات الطائرات المناسبة مع أسعار شفافة وشاملة بالكامل خلال ١٥ دقيقة.' },
  step3Num: { en: '03', ar: '٠٣' },
  step3Title: { en: 'VIP FBO Clearance', ar: 'تصاريح الهبوط وصالات كبار الشخصيات' },
  step3Desc: { en: 'Our flight ops secure overflight permits, landing slots, custom in-flight catering, and terminal VIP handling.', ar: 'نستخرج جميع تصاريح العبور والهبوط وتجهيز الوجبات الخاصة واستقبال صالة كبار الشخصيات.' },
  step4Num: { en: '04', ar: '٠٤' },
  step4Title: { en: 'Tarmac Board & Depart', ar: 'الصعود المباشر والإقلاع' },
  step4Desc: { en: 'Arrive 15 minutes before departure, bypass commercial crowds, and step directly onto your private jet.', ar: 'الوصول قبل ١٥ دقيقة فقط من الإقلاع، تجاوز طوابير الانتظار، والصعود فوراً إلى طائرتك الخاصة.' },

  // Case Study Section
  caseBadge: { en: 'MISSION CRITICAL DISPATCH', ar: 'دراسة حالة: مهمة طيران عاجلة' },
  caseTitle: { en: '90-Minute Urgent Diplomatic Mission Dispatch', ar: 'إقلاع طارئ لوفد دبلوماسي خلال ٩٠ دقيقة' },
  caseChallenge: { en: 'THE CHALLENGE', ar: 'التحدي' },
  caseSolution: { en: 'AEROVAULT SOLUTION', ar: 'الحل المنفذ' },
  caseMetricsTime: { en: 'En-Route Dispatch Time', ar: 'زمن الجاهزية للإقلاع' },
  caseMetricsPax: { en: 'Diplomatic Delegates', ar: 'دبلوماسياً من كبار الشخصيات' },
  caseMetricsRating: { en: 'Discretion & Privacy', ar: 'مستوى السرية والأمان' },

  // Why Aerovault
  whyBadge: { en: 'THE AEROVAULT STANDARD', ar: 'معايير إيروفولت' },
  whyTitle: { en: 'Aviation Refined for UHNW & Executive Travel', ar: 'طيران تنفيذي مصمم لمتطلبات القادة وكبار الشخصيات' },
  whySubtitle: {
    en: 'Why heads of state, corporate conglomerates, and family offices trust AEROVAULT for mission-critical private flights.',
    ar: 'السبب وراء اعتماد الشركات العالمية، الوفود الرسمية، والمكاتب العائلية على إيروفولت لرحلاتهم الجوية.'
  },
  why1Title: { en: 'ARGUS Gold & IS-BAO Safety Audited', ar: 'سلامة معتمدة من ARGUS و IS-BAO' },
  why1Desc: { en: 'We only deploy aircraft operated under stringent Part 135/Air Operator Certificates with dual ATP-rated captains.', ar: 'نعتمد فقط طائرات حاصلة على أعلى شهادات المشغل الجوي الدولية مع قبطانين معتمدين لكل رحلة.' },
  why2Title: { en: '90-Minute Rapid Dispatch SLA', ar: 'جاهزية إقلاع طارئة خلال ٩٠ دقيقة' },
  why2Desc: { en: 'Aircraft pre-positioned across Dubai DWC, DXB, and Abu Dhabi for immediate executive and medical deployments.', ar: 'طائرات متمركزة بمطارات دبي وأبوظبي للاستجابة الفورية للمهام الطارئة والتنفيذية.' },
  why3Title: { en: 'Exclusive VIP FBO Terminal Access', ar: 'دخول صالات كبار الشخصيات الخاصة' },
  why3Desc: { en: 'Drive up directly to the aircraft steps at ExecuJet and Jetex private terminals with 5-minute passport processing.', ar: 'الوصول بسيارتك حتى سلم الطائرة في صالات إكسيكوجيت وجتكس مع إنهاء الجوازات في ٥ دقائق.' },
  why4Title: { en: '100% Pet-Friendly Cabin Freedom', ar: 'سفر الحيوانات الأليفة داخل المقصورة' },
  why4Desc: { en: 'Family pets travel stress-free right beside you in the climate-controlled cabin rather than in cargo.', ar: 'تسافر الحيوانات الأليفة بحرية تامة بجوارك في المقصورة المكيفة دون الحاجة للشحن الجوي.' },
  why5Title: { en: 'Bespoke In-Flight Gastronomy', ar: 'قوائم طعام فاخرة معدة على يد طهاة' },
  why5Desc: { en: 'Custom altitude-balanced dining, Beluga caviar, fine teas, and dietary-specific cuisine curated for your flight.', ar: 'وجبات فاخرة متوازنة لارتفاعات الطيران، كافيار بيلوغا، وأطباق مخصصة حسب رغبتكم.' },
  why6Title: { en: 'Transparent All-Inclusive Billing', ar: 'أسعار شاملة وشفافة بدون مفاجآت' },
  why6Desc: { en: 'No hidden airport fees, fuel escalations, or de-icing surcharges. Your quoted rate is your final invoice.', ar: 'بدون أي رسوم مطارات خفية أو زيادات وقود مفاجئة. التسعيرة المعتمدة هي قيمتك النهائية.' },

  // Leadership
  teamBadge: { en: 'FLIGHT COMMAND & BROKERAGE', ar: 'فريق القيادة والعمليات الجوية' },
  teamTitle: { en: 'Meet Our Aviation Directors', ar: 'تعرف على قادة العمليات والوساطة الجوية' },
  teamSubtitle: {
    en: 'Decades of combined commercial aviation command, NetJets operations, and diplomatic flight protocols.',
    ar: 'عقود من الخبرة القيادية في قيادة الطائرات، إدارة عمليات الطيران الخاص، والبروتوكولات الدبلوماسية.'
  },

  // Insights
  insightsBadge: { en: 'EXECUTIVE FLIGHT JOURNAL', ar: 'دليل ومقالات الطيران الخاص' },
  insightsTitle: { en: 'Private Aviation Intelligence & Guides', ar: 'رؤى وإرشادات الطيران التنفيذي' },
  insightsSubtitle: {
    en: 'Essential reading on jet selection, Empty Leg strategies, FBO protocols, and corporate aviation economics.',
    ar: 'مقالات مفصلة حول اختيار الطائرات، استراتيجيات الرحلات الفارغة، واقتصاديات الطيران الخاص.'
  },

  // Flight Desks (Terminals)
  desksBadge: { en: 'VIP FBO HUBS', ar: 'صالات كبار الشخصيات' },
  desksTitle: { en: 'Executive Departure Terminals', ar: 'صالات ومقرات الانطلاق في الإمارات' },
  desksSubtitle: {
    en: 'Dedicated 24/7 flight operations desks located at the UAE’s premier business aviation airports.',
    ar: 'مكاتب عمليات طيران تعمل على مدار الساعة في أرقى مطارات الطيران الخاص بالدولة.'
  },
  deskTerminalLabel: { en: 'Terminal:', ar: 'الصالة:' },
  deskAddressLabel: { en: 'Address:', ar: 'الموقع:' },
  deskPhoneLabel: { en: 'Direct Flight Desk:', ar: 'مكتب الطيران المباشر:' },

  // Testimonials
  reviewsBadge: { en: 'VERIFIED PASSENGER EXPERIENCES', ar: 'تجارب وآراء المسافرين المعتمدة' },
  reviewsTitle: { en: 'Trusted by Leaders & Global Travelers', ar: 'ثقة قادة الأعمال ونخبة المسافرين' },
  reviewsSubtitle: {
    en: 'Read authentic feedback from corporate executives, diplomatic attachés, and private clients.',
    ar: 'اقرأ تجارب حقيقية لكبار التنفيذيين، المستشارين الدبلوماسيين، ورجال الأعمال.'
  },

  // FAQ
  faqBadge: { en: 'FREQUENTLY ASKED QUESTIONS', ar: 'الأسئلة الشائعة' },
  faqTitle: { en: 'Everything You Need to Know', ar: 'كل ما تحتاج لمعرفته حول حجز الطائرات' },
  faqSubtitle: {
    en: 'Clear answers on dispatch timelines, pet travel, luggage capacity, safety standards, and pricing.',
    ar: 'إجابات واضحة حول أوقات الجاهزية، سفر الحيوانات، سعة الأمتعة، معايير الأمان، والتسعير.'
  },

  // Final CTA
  finalCtaBadge: { en: '24/7 PRIVATE AVIATION DESK • INSTANT DISPATCH', ar: 'مكتب الطيران متاح ٢٤/٧ • جاهزية إقلاع فورية' },
  finalCtaTitle: { en: 'Your Journey, Arranged Around You.', ar: 'رحلتك الجوية القادمة، مصممة حول جدولك الخاص.' },
  finalCtaSubtitle: {
    en: 'Speak directly with our Dubai FBO charter desk on WhatsApp or submit your itinerary for guaranteed aircraft availability in 15 minutes.',
    ar: 'تواصل مباشرة مع مكتب حجوزات الطيران في دبي عبر واتساب أو أرسل تفاصيل مسارك لتأكيد الطائرة خلال ١٥ دقيقة.'
  },
  finalCtaCallBtn: { en: 'CALL FLIGHT DESK NOW', ar: 'اتصل بمكتب الطيران الآن' },
  finalCtaWhatsappBtn: { en: 'WHATSAPP CHARTER BROKER', ar: 'محادثة وسيط الطيران عبر واتساب' },
  finalCtaModalBtn: { en: 'REQUEST FORMAL FLIGHT QUOTE', ar: 'طلب تسعيرة الرحلة الرسمية' },

  // Footer
  footerDesc: {
    en: 'AEROVAULT is the UAE’s premier private jet charter brokerage, orchestrating on-demand executive flights, empty legs, and Jet Card memberships with global FBO terminal access.',
    ar: 'إيروفولت هي الشركة الرائدة في وساطة وتأجير الطائرات الخاصة بدولة الإمارات، وتقدم رحلات الطيران التنفيذي، عروض الرحلات الفارغة، وعضويات بطاقات الطيران.'
  },
  footerAircraftLinks: { en: 'Aircraft Classes', ar: 'فئات الطائرات' },
  footerServicesLinks: { en: 'Aviation Services', ar: 'خدمات الطيران' },
  footerQuickLinks: { en: 'Quick Links', ar: 'روابط سريعة' },
  footerRights: { en: 'AEROVAULT AVIATION UAE. All rights reserved.', ar: 'إيروفولت للطيران الخاص الإمارات. جميع الحقوق محفوظة.' },
  footerLicensing: { en: 'Operating in accordance with GCAA and international ICAO business aviation regulations.', ar: 'نعمل وفق لوائح الهيئة العامة للطيران المدني بدولة الإمارات ومنظمة الطيران المدني الدولي ICAO.' },

  // Quote Modal
  modalTitle: { en: 'Request a Private Jet Charter', ar: 'طلب حجز واستئجار طائرة خاصة' },
  modalSubtitle: {
    en: 'Submit your flight details below for 90-minute guaranteed aircraft availability and an all-inclusive quote.',
    ar: 'أدخل تفاصيل رحلتك للحصول على تأكيد توفر الطائرة وتسعيرة شاملة بالكامل خلال ١٥ دقيقة.'
  },
  modalNameLabel: { en: 'Full Name / Title *', ar: 'الاسم الكريم / اللقب *' },
  modalNamePlaceholder: { en: 'e.g. Sultan Al Qassimi', ar: 'مثال: سلطان القاسمي' },
  modalPhoneLabel: { en: 'UAE Phone / WhatsApp *', ar: 'رقم الهاتف / واتساب الإمارات *' },
  modalPhonePlaceholder: { en: '+971 50 123 4567', ar: '+971 50 123 4567' },
  modalOriginLabel: { en: 'Origin FBO Airport *', ar: 'مطار وصالة المغادرة *' },
  modalDestLabel: { en: 'Destination Airport *', ar: 'مطار الوجهة المقصودة *' },
  modalJetSelectLabel: { en: 'Preferred Aircraft / Category', ar: 'فئة أو نوع الطائرة المفضلة' },
  modalTripTypeLabel: { en: 'Flight Type', ar: 'نوع الرحلة' },
  modalTripOneWay: { en: 'One-Way Flight', ar: 'ذهاب فقط' },
  modalTripRound: { en: 'Round-Trip Flight', ar: 'ذهاب وعودة' },
  modalDateLabel: { en: 'Departure Date', ar: 'تاريخ الإقلاع المفضل' },
  modalPaxLabel: { en: 'Passenger Count', ar: 'عدد الركاب' },
  modalNotesLabel: { en: 'Special In-Flight Catering, Pets or Luggage Requests', ar: 'طلبات خاصة، وجبات طيران، حيوانات أليفة، أو أمتعة إضافية' },
  modalNotesPlaceholder: {
    en: 'e.g. 8 passengers, Beluga caviar & champagne, family pet in cabin, departure Oct 24 at 10:00 AM.',
    ar: 'مثال: ٨ ركاب، كافيار ومشروبات فاخرة، حيوان أليف بالمقصورة، الإقلاع ٢٤ أكتوبر الساعة ١٠:٠٠ صباحاً.'
  },
  modalSubmitBtn: { en: 'REQUEST FLIGHT QUOTE & AVAILABILITY', ar: 'طلب التسعيرة وفحص توفر الطائرة' },
  modalSuccessTitle: { en: 'Flight Quote Request Received!', ar: 'تم استلام طلب الرحلة بنجاح!' },
  modalSuccessDesc: {
    en: 'Thank you. Our ExecuJet DWC flight operations broker will review aircraft positioning and contact your phone on WhatsApp with confirmed pricing within 15 minutes.',
    ar: 'شكراً لك. سيقوم وسيط العمليات بمراجعة موقع الطائرات والتواصل معك فوراً عبر واتساب بالتسعيرة والتأكيد خلال ١٥ دقيقة.'
  },
  modalCloseBtn: { en: 'CLOSE WINDOW', ar: 'إغلاق النافذة' },
  modalNeedImmediate: { en: 'Urgent 90-minute emergency departure required?', ar: 'هل تحتاج إلى إقلاع طارئ خلال ٩٠ دقيقة؟' },
  modalWhatsappDirect: { en: 'WhatsApp VIP Charter Desk Directly', ar: 'تواصل فوراً مع مكتب العمليات عبر واتساب' },
};
