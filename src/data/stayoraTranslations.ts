export type StayoraLanguage = 'en' | 'ar';

export interface StayoraTranslationEntry {
  en: string;
  ar: string;
}

export const STAYORA_TRANSLATIONS: Record<string, StayoraTranslationEntry> = {
  // Brand & Navigation
  brandName: { en: 'STAYORA', ar: 'ستايورا' },
  brandTagline: { en: 'Your Home, Working Harder.', ar: 'عقارك، يعمل بكفاءة وأرباح أعلى.' },
  brandSubtitle: { en: 'UAE HOLIDAY HOME & ASSET MANAGEMENT', ar: 'إدارة بيوت العطلات والإيجار قصير الأجل في الإمارات' },
  navServices: { en: 'Services', ar: 'خدمات الإدارة' },
  navEstimator: { en: 'Income Estimator', ar: 'حاسبة الأرباح' },
  navProperties: { en: 'Managed Portfolio', ar: 'محفظة العقارات' },
  navWhyUs: { en: 'Why Stayora', ar: 'لماذا ستايورا' },
  navCaseStudies: { en: 'Owner Case Study', ar: 'قصص نجاح الملاك' },
  navProcess: { en: 'How It Works', ar: 'كيف نعمل' },
  navLocations: { en: 'UAE Hubs', ar: 'مكاتب الإمارات' },
  navFAQ: { en: 'FAQ', ar: 'الأسئلة الشائعة' },
  estimateEarningsBtn: { en: 'Free Earnings Audit', ar: 'حساب دخل عقارك مجاناً' },
  backToPortfolio: { en: 'Back to Portfolio', ar: 'العودة لمعرض الأعمال' },
  whatsappQuickChat: { en: 'WhatsApp Consultation', ar: 'استشارة واتساب فورية' },
  callUs: { en: 'Call Operations Desk', ar: 'اتصل بمكتب العمليات' },

  // Hero Section
  heroBadge: { en: 'DUBAI DTCM & ABU DHABI DCT LICENSED OPERATOR • 450+ PROPERTIES MANAGED', ar: 'مشغل مرخص رسمياً من دائرة الاقتصاد والسياحة بدبي وأبوظبي • ٤٥٠+ عقار مُدار' },
  heroTitleLine1: { en: 'Turn Your UAE Property Into a', ar: 'حوّل عقارك في الإمارات إلى' },
  heroTitleHighlight: { en: 'High-Yield Holiday Home.', ar: 'استثمار عالي العوائد لبيوت العطلات.' },
  heroDesc: {
    en: 'Full-service short-term rental management across Dubai, Abu Dhabi, and Ras Al Khaimah. We handle 100% of guest concierge, 5-star hotel cleaning, DTCM permits, and dynamic pricing while depositing net profits directly into your bank account.',
    ar: 'إدارة متكاملة وشاملة للإيجارات قصيرة الأجل وبيوت العطلات عبر دبي، أبوظبي، ورأس الخيمة. نتولى بالكامل خدمة النزلاء، النظافة الفندقية ٥ نجوم، تراخيص السياحة، والتسعير الذكي مع تحويل صافي أرباحك لحسابك البنكي شهرياً.'
  },
  heroCtaCalculate: { en: 'Calculate Your Property Revenue', ar: 'احسب إيرادات عقارك التقديرية' },
  heroCtaSpeak: { en: 'Schedule Free Owner Strategy Call', ar: 'احجز استشارة مجانية مع خبير العوائد' },

  // Stats / Hero Badges
  statManagedProperties: { en: 'Properties Managed', ar: 'عقار فاخر تحت الإدارة' },
  statRevenueGenerated: { en: 'Owner Revenue Distributed', ar: 'إجمالي أرباح وُزعت للملاك' },
  statAvgOccupancy: { en: 'Average Annual Occupancy', ar: 'متوسط نسبة الإشغال السنوي' },
  statResponseTime: { en: 'Average Guest Response Time', ar: 'متوسط سرعة الرد على النزلاء' },

  // Trust Strip
  trustTitle: { en: 'LISTED ACROSS PREMIER GLOBAL TRAVEL CHANNELS', ar: 'توزيع وتسويق متزامن عبر كبرى منصات السفر العالمية' },

  // Revenue Estimator Section
  calcBadge: { en: 'AI-POWERED REVENUE CALCULATOR', ar: 'حاسبة الإيرادات الذكية المدعومة بالبيانات' },
  calcTitle: { en: 'Estimate Your Short-Term Rental Income', ar: 'احسب العائد المتوقع من تأجير عقارك كبيت عطلات' },
  calcSubtitle: {
    en: 'Compare fixed annual tenant contracts against dynamic holiday home pricing across Dubai Marina, Downtown, Palm Jumeirah, and Saadiyat Island.',
    ar: 'قارن بين عقود الإيجار السنوية الثابتة وبين عوائد بيوت العطلات اليومية في دبي مارينا، داون تاون، نخلة جميرا، وجزيرة السعديات.'
  },
  calcLocationLabel: { en: 'Property Location / Community', ar: 'موقع العقار / المنطقة' },
  calcTypeLabel: { en: 'Property Type & Size', ar: 'نوع وحجم العقار' },
  calcOccupancyLabel: { en: 'Estimated Annual Occupancy Rate', ar: 'نسبة الإشغال السنوية المتوقعة' },
  calcProjectedAnnual: { en: 'Projected Gross Annual Revenue', ar: 'إجمالي الإيرادات السنوية المتوقعة' },
  calcLongTermBenchmark: { en: 'Standard Long-Term Annual Lease', ar: 'عقد الإيجار السنوي التقليدي' },
  calcProjectedUplift: { en: 'Short-Term Income Uplift', ar: 'نسبة الزيادة في الأرباح' },
  calcNightlyRateAvg: { en: 'Estimated Avg Nightly Rate:', ar: 'متوسط السعر لليلة الواحدة:' },
  calcNetPayoutEstimate: { en: 'Estimated Monthly Net Payout to Owner:', ar: 'صافي العائد الشهري التقريبي للمالك:' },
  calcGetCustomReport: { en: 'Request Full 12-Month Revenue Forecast', ar: 'طلب تقرير تدقيق العوائد السنوي المفصل' },

  // Services Section
  servicesBadge: { en: 'END-TO-END MANAGEMENT SUITE', ar: 'منظومة إدارة متكاملة من الألف إلى الياء' },
  servicesTitle: { en: 'Everything We Handle For You', ar: 'كل ما نتكفل به لإدارة عقارك بنجاح' },
  servicesSubtitle: {
    en: 'From legal DTCM permits and editorial staging to 24/7 multilingual guest care and monthly bank deposits.',
    ar: 'من التراخيص الحكومية والتصوير الاحترافي إلى خدمة النزلاء على مدار الساعة والتحويلات البنكية الشهرية.'
  },

  // Properties Showcase
  propertiesBadge: { en: 'PORTFOLIO HIGHLIGHTS', ar: 'نماذج من محفظة عقاراتنا المُدارة' },
  propertiesTitle: { en: 'Luxury Residences Managed by STAYORA', ar: 'عقارات فاخرة تُدار بعناية فائقة' },
  propertiesSubtitle: {
    en: 'Real properties achieving 80%+ occupancy and top-tier guest reviews across the UAE’s highest-demand tourist districts.',
    ar: 'عقارات حقيقية تحقق نسب إشغال تفوق ٨٠٪ وتقييمات استثنائية في أكثر مناطق الجذب السياحي طلباً في الإمارات.'
  },
  filterAllEmirates: { en: 'All UAE Emirates', ar: 'كافة إمارات الدولة' },
  nightlyRate: { en: 'night', ar: 'ليلة' },
  guests: { en: 'Guests', ar: 'ضيوف' },
  bedrooms: { en: 'Bedrooms', ar: 'غرف نوم' },
  occupancy: { en: 'Occupancy', ar: 'إشغال' },
  reviews: { en: 'Reviews', ar: 'تقييم' },
  viewPropertyDetails: { en: 'Property Performance Breakdown', ar: 'تفاصيل أداء وإيرادات العقار' },

  // Case Study Section
  caseStudyBadge: { en: 'REAL OWNER TRANSFORMATION', ar: 'دراسة حالة واقعية لأحد الملاك' },
  caseStudyTitle: { en: 'How a Marina Owner Boosted Net Income by +77%', ar: 'كيف ضاعف مالك شقة في دبي مارينا أرباحه بنسبة +٧٧٪' },
  caseStudySubtitle: {
    en: 'Transitioning from a below-market annual lease to STAYORA’s dynamic short-term management.',
    ar: 'التحول من عقد إيجار سنوي منخفض إلى إدارة بيوت العطلات الذكية مع ستايورا.'
  },
  beforeAnnualRent: { en: 'Previous Long-Term Rent (Yearly)', ar: 'الإيجار السنوي التقليدي السابق' },
  afterStayoraRent: { en: 'STAYORA Short-Term Revenue (Yearly)', ar: 'عوائد ستايورا السنوية كبيت عطلات' },
  revenueIncrease: { en: 'Annual Net Increase', ar: 'الزيادة الصافية في الدخل' },

  // Why Stayora / Key Pillars
  whyBadge: { en: 'THE STAYORA ADVANTAGE', ar: 'المزايا التنافسية لستايورا' },
  whyTitle: { en: 'Why UAE Property Owners Trust STAYORA', ar: 'لماذا يختارنا نخبة المستثمرين وملاك العقارات' },
  whySubtitle: {
    en: 'Built on transparent data, hotel-grade operations, and an obsession with maximizing property value.',
    ar: 'قائم على الشفافية المالية المطلقة، معايير الضيافة الفندقية، والتركيز على مضاعفة العائد الاستثماري.'
  },

  // How We Work / Process
  processBadge: { en: 'SEAMLESS ONBOARDING', ar: 'خطوات انضمام سريعة وسلسة' },
  processTitle: { en: 'From Consultation to First Booking in 7 Days', ar: 'من الاستشارة إلى أول حجز خلال ٧ أيام فقط' },

  // Leadership Team
  teamBadge: { en: 'EXECUTIVE LEADERSHIP', ar: 'فريق القيادة والخبراء' },
  teamTitle: { en: 'Hospitality & Yield Pioneers', ar: 'رواد الضيافة الفاخرة وإدارة العوائد' },

  // Locations / Hubs
  locationsBadge: { en: 'LOCAL PRESENCE', ar: 'مكاتبنا الميدانية في الإمارات' },
  locationsTitle: { en: 'Strategically Located Across 3 Emirates', ar: 'حضور ميداني مباشر في ٣ إمارات رئيسية' },
  locationsSubtitle: {
    en: 'Dedicated regional inspection and concierge teams stationed in Dubai Marina, Al Reem Island, and Al Marjan Island.',
    ar: 'فرق عمليات وتفتيش ميدانية متمركزة في دبي مارينا، جزيرة الريم في أبوظبي، وجزيرة المرجان في رأس الخيمة.'
  },

  // Testimonials
  testimonialsBadge: { en: 'INVESTOR TRUST', ar: 'شهادات الملاك والمستثمرين' },
  testimonialsTitle: { en: 'What Property Owners Say About Us', ar: 'ماذا يقول ملاك العقارات عن شراكتهم معنا' },

  // FAQ
  faqBadge: { en: 'COMMONLY ASKED QUESTIONS', ar: 'الأسئلة الأكثر شيوعاً' },
  faqTitle: { en: 'Frequently Asked Questions', ar: 'كل ما تود معرفته حول إدارة بيوت العطلات' },

  // Final CTA
  finalCtaTitle: { en: 'Ready to Maximize Your Property Revenue?', ar: 'هل أنت مستعد لزيادة أرباح عقارك بنسبة ٤٠٪–٨٠٪؟' },
  finalCtaSubtitle: {
    en: 'Get a zero-obligation rental revenue appraisal from our senior UAE yield directors today.',
    ar: 'احصل على تقرير تدقيق مالي مجاني لعقارك مع دراسة شاملة للعوائد المتوقعة من خبرائنا المعتمدين.'
  },
  finalCtaButton: { en: 'Request Free Property Appraisal', ar: 'اطلب دراسة الجدوى لعقارك مجاناً' },
  finalCtaWhatsapp: { en: 'Chat on WhatsApp (+971 52)', ar: 'تحدث معنا عبر واتساب (+٩٧١ ٥٢)' },

  // Footer
  footerDesc: {
    en: 'Licensed holiday home operator providing premier short-term property management across Dubai, Abu Dhabi, and Ras Al Khaimah.',
    ar: 'مشغل مرخص لبيوت العطلات يقدم أرقى خدمات الإدارة والتشغيل السياحي للعقارات في دبي، أبوظبي، ورأس الخيمة.'
  },
  footerQuickLinks: { en: 'QUICK NAVIGATION', ar: 'روابط سريعة' },
  footerLegal: { en: 'PERMITS & COMPLIANCE', ar: 'التراخيص والامتثال' },
  footerHubs: { en: 'REGIONAL OFFICES', ar: 'المكاتب الإقليمية' },
  footerDisclaimerNotice: {
    en: 'PORTFOLIO SHOWCASE DEMO NOTICE: STAYORA UAE is a high-grade concept digital platform designed for digital agency portfolio presentation. All figures in AED and properties reflect authentic UAE luxury market benchmarks.',
    ar: 'إشعار توضيحي لمحفظة الأعمال: "ستايورا الإمارات" نموذج تطبيقي فاخر مصمم لأغراض العرض الرقمي للوكالة. جميع الأرقام والأسعار بالدرهم الإماراتي تمثل بيانات حقيقية ومدروسة لسوق بيوت العطلات في الدولة.'
  },
  footerCopyright: {
    en: '© 2026 STAYORA UAE Holiday Home Management. All rights reserved. Portfolio Build #37.',
    ar: '© ٢٠٢٦ ستايورا لإدارة بيوت العطلات في الإمارات. جميع الحقوق محفوظة. مشروع رقم #٣٧.'
  },

  // Modal
  modalTitle: { en: 'Get a Free Property Income Appraisal', ar: 'طلب دراسة الجدوى المالية لعقارك' },
  modalSubtitle: { en: 'Our revenue team will analyze local market comps and deliver a custom 12-month projection.', ar: 'سيقوم فريق العوائد بتحليل العقارات المجاورة وتقديم تقرير تدقيق إيرادات مفصل لعقارك.' },
  modalFullName: { en: 'Full Name *', ar: 'الاسم الكامل *' },
  modalPhone: { en: 'Phone / WhatsApp *', ar: 'رقم الهاتف / واتساب *' },
  modalEmail: { en: 'Email Address *', ar: 'البريد الإلكتروني *' },
  modalEmirate: { en: 'Emirate *', ar: 'الإمارة *' },
  modalCommunity: { en: 'Community / Tower Name *', ar: 'اسم البرج / المنطقة *' },
  modalBedrooms: { en: 'Bedrooms *', ar: 'عدد الغرف *' },
  modalStatus: { en: 'Property Furnishing Status', ar: 'حالة الفرش والديكور' },
  modalFurnished: { en: 'Fully Furnished (Ready for Guests)', ar: 'مفروشة بالكامل (جاهزة للنزلاء)' },
  modalUnfurnished: { en: 'Unfurnished (Needs Styling)', ar: 'غير مفروشة (تحتاج تأثيث)' },
  modalSubmit: { en: 'Generate My Free Income Forecast', ar: 'إرسال واستلام تقرير الأرباح مجاناً' },
  modalSuccessTitle: { en: 'Appraisal Request Received!', ar: 'تم استلام طلبك بنجاح!' },
  modalSuccessDesc: { en: 'Our UAE revenue manager will reach out within 2 hours with your custom 12-month rental forecast.', ar: 'سيتواصل معك خبير العوائد المخصص خلال ساعتين ومعه التقرير المالي الشامل لعقارك.' },
  modalSendWhatsapp: { en: 'Send Details Directly via WhatsApp', ar: 'إرسال بيانات العقار فوراً عبر واتساب' },
  modalClose: { en: 'Close & Continue', ar: 'إغلاق ومتابعة التصفح' }
};
