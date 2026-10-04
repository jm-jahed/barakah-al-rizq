export type AutovantaLanguage = 'en' | 'ar';

export interface AutovantaTranslationEntry {
  en: string;
  ar: string;
}

export const AUTOVANTA_TRANSLATIONS: Record<string, AutovantaTranslationEntry> = {
  // Brand & Navigation
  brandName: { en: 'AUTOVANTA', ar: 'أوتوفانتا' },
  brandTagline: { en: 'Precision Service. Every Time.', ar: 'دقة لا تضاهى في صيانة السيارات.' },
  brandSubtitle: { en: 'CERTIFIED AUTO SERVICE & FLEET REPAIR CENTER', ar: 'مركز معتمد لصيانة السيارات وإصلاح الأساطيل التجارية' },
  navServices: { en: 'Services', ar: 'خدمات الصيانة' },
  navCalculator: { en: 'Instant Quote', ar: 'حاسبة التكلفة' },
  navFleet: { en: 'Fleet Care', ar: 'صيانة الأساطيل' },
  navProcess: { en: 'Workflow', ar: 'خطوات العمل' },
  navWhyUs: { en: 'Why Autovanta', ar: 'لماذا أوتوفانتا' },
  navLocations: { en: 'Workshops', ar: 'مراكز الخدمة' },
  navFAQ: { en: 'FAQ', ar: 'الأسئلة الشائعة' },
  navBookService: { en: 'Book Service', ar: 'حجز موعد صيانة' },
  backToPortfolio: { en: 'Back to Portfolio', ar: 'العودة لمعرض الأعمال' },
  callWorkshop: { en: 'Call Al Quoz Workshop', ar: 'اتصل بورشة القوز' },
  whatsappBooking: { en: 'WhatsApp Service Advisor', ar: 'مستشار الصيانة عبر واتساب' },

  // Hero Section
  heroBadge: { en: 'GERMAN & JAPANESE OEM SPECIALISTS • 18,000+ VEHICLES SERVICED', ar: 'متخصصون معتمدون للسيارات الألمانية واليابانية • ١٨,٠٠٠+ مركبة تمت صيانتها' },
  heroTitleLine1: { en: 'Dealership-Grade Auto Care,', ar: 'صيانة بمستوى الوكالة المعتمدة،' },
  heroTitleHighlight: { en: 'Transparent Upfront Pricing.', ar: 'بأسعار شفافة وضمان معتمد.' },
  heroDesc: {
    en: 'Dubai and Sharjah’s premier automotive service facility. From computer diagnostics and 50°C summer AC overhauls to transmission rebuilds and commercial fleet contracts — backed by genuine parts and 12-month warranties.',
    ar: 'الوجهة الرائدة لصيانة وإصلاح السيارات في دبي والشارقة. من الفحص الكمبيوتري وتبريد المكيف لدرجات حرارة الصيف (٥٠° مئوية) إلى توضيب المحركات والأساطيل التجارية — بقطع أصلية وضمان لمدة ١٢ شهراً.'
  },
  heroCtaQuote: { en: 'Calculate Instant Service Cost', ar: 'احسب تكلفة صيانة سيارتك فوراً' },
  heroCtaBook: { en: 'Schedule Workshop Drop-Off', ar: 'حجز موعد تسليم السيارة' },

  // Stats / Badges
  statVehiclesServiced: { en: 'Vehicles Repaired & Serviced', ar: 'سيارة تمت صيانتها بنجاح' },
  statCustomerRating: { en: 'Verified Customer Rating', ar: 'تقييم العملاء المعتمد' },
  statWarrantyMonths: { en: 'Months Parts & Labor Warranty', ar: 'شهراً ضمان على القطع والأجور' },
  statServiceBays: { en: 'High-Tech Diagnostic Bays', ar: 'منصة فحص وصيانة متطورة' },

  // Trust Strip
  trustTitle: { en: 'TRUSTED FLEET & OEM PARTS PARTNERS', ar: 'شركاء قطع الغيار الأصلية وإدارة الأساطيل' },

  // Service Estimator / Quote Tool
  quoteBadge: { en: 'TRANSPARENT PRICING CALCULATOR', ar: 'حاسبة التكاليف والأسعار الشفافة' },
  quoteTitle: { en: 'Instant Auto Service Price Estimator', ar: 'احسب تكلفة صيانة سيارتك التقديرية بدقة' },
  quoteSubtitle: {
    en: 'Select your car make, model year, and required service category for upfront estimates with 0 hidden charges.',
    ar: 'اختر نوع سيارتك، سنة الصنع، ونوع الخدمة المطلوبة للحصول على تسعيرة فورية بدون أي رسوم خفية.'
  },
  quoteMakeLabel: { en: 'Vehicle Manufacturer', ar: 'الشركة المصنعة للسيارة' },
  quoteServiceTypeLabel: { en: 'Primary Service Required', ar: 'نوع الخدمة المطلوبة' },
  quoteModelYearLabel: { en: 'Model Year', ar: 'سنة الصنع' },
  quoteEstimatedTotal: { en: 'Estimated Total Cost (AED)', ar: 'إجمالي التكلفة التقديرية (درهم)' },
  quoteEstimatedTime: { en: 'Estimated Turnaround Time', ar: 'الوقت التقديري للإنجاز' },
  quoteWarrantyLabel: { en: 'Included Warranty Coverage', ar: 'الضمان المشمول مع الخدمة' },
  quoteBookThisService: { en: 'Book This Service at Estimated Price', ar: 'حجز الموعد بالسعر التقديري' },

  // Services Section
  servicesBadge: { en: 'FULL-SPECTRUM WORKSHOP CAPABILITIES', ar: 'خدمات شاملة تحت سقف واحد' },
  servicesTitle: { en: 'Precision Automotive Solutions', ar: 'حلول صيانة السيارات الاحترافية' },
  servicesSubtitle: {
    en: 'Master technicians equipped with dealer-level diagnostics, hydraulic hoists, and factory tooling.',
    ar: 'فنيون ومهندسون معتمدون مجهزون بأحدث أجهزة الفحص المعتمدة من الوكالات ورافعات هيدروليكية متطورة.'
  },
  viewServiceDetails: { en: 'View Technical Specifications', ar: 'عرض التفاصيل الفنية للخدمة' },
  turnaround: { en: 'Turnaround', ar: 'مدة الإنجاز' },

  // How We Work / Workflow
  processBadge: { en: 'TRANSPARENT 4-STEP PROTOCOL', ar: 'منهجية عمل شفافة من ٤ خطوات' },
  processTitle: { en: 'How We Service Your Vehicle', ar: 'كيف تتم صيانة سيارتك خطوة بخطوة' },

  // Fleet Services
  fleetBadge: { en: 'B2B FLEET MAINTENANCE CONTRACTS', ar: 'عقود صيانة الأساطيل والشركات' },
  fleetTitle: { en: 'Minimize Fleet Downtime. Protect ROI.', ar: 'تقليل أعطال الأساطيل ومضاعفة الكفاءة التشغيلية' },
  fleetSubtitle: {
    en: 'Dedicated priority service bays, scheduled night maintenance, consolidated monthly billing, and full telematics integration for UAE commercial fleets.',
    ar: 'مسارات صيانة مخصصة ذات أولوية، صيانة ليلية دورية، فواتير شهرية مجمعة، وربط كامل مع أنظمة تتبع المركبات لأساطيل الشركات في الإمارات.'
  },
  fleetCta: { en: 'Request Fleet Proposal', ar: 'طلب عرض أسعار للأساطيل' },

  // Case Study
  caseStudyBadge: { en: 'FLEET TRANSFORMATION STUDY', ar: 'دراسة حالة لأحد أساطيل الشركات' },
  caseStudyTitle: { en: 'How Nova Logistics Reduced Fleet Breakdown by 62%', ar: 'كيف خفضت شركة نوفا للخدمات اللوجستية أعطال أسطولها بنسبة ٦٢٪' },
  caseStudySubtitle: {
    en: 'Migrating 85 delivery vans from ad-hoc garage repairs to AUTOVANTA scheduled preventative maintenance.',
    ar: 'تحويل ٨٥ مركبة توصيل من الإصلاحات العشوائية إلى الصيانة الوقائية المجدولة مع أوتوفانتا.'
  },
  beforeDowntime: { en: 'Previous Average Monthly Downtime', ar: 'متوسط توقف المركبات الشهري سابقاً' },
  afterDowntime: { en: 'Current Monthly Fleet Downtime', ar: 'متوسط التوقف الحالي مع أوتوفانتا' },
  downtimeReduction: { en: 'Downtime Reduction', ar: 'نسبة انخفاض الأعطال' },
  vehiclesContract: { en: 'Commercial Vans Under SLA', ar: 'مركبة تحت عقد الصيانة المباشر' },

  // Why Autovanta
  whyBadge: { en: 'THE AUTOVANTA ADVANTAGE', ar: 'المزايا التنافسية لأوتوفانتا' },
  whyTitle: { en: 'Why UAE Drivers Choose AUTOVANTA', ar: 'لماذا يثق بنا سائقو وملاك السيارات في الإمارات' },
  whySubtitle: {
    en: 'We eliminate the hassle, inflated costs, and guesswork of automotive repairs.',
    ar: 'نخلصك تماماً من التكاليف المبالغ فيها والمواعيد غير الملتزمة في صيانة السيارات.'
  },

  // Leadership Team
  teamBadge: { en: 'MASTER MECHANICS & ADVISORS', ar: 'كبار المهندسين والخبراء المعتمدين' },
  teamTitle: { en: 'Automotive Engineering Leaders', ar: 'فريق هندسة وإدارة صيانة السيارات' },

  // Workshop Locations
  locationsBadge: { en: 'STRATEGIC WORKSHOP HUBS', ar: 'فروع ومراكز الخدمة' },
  locationsTitle: { en: 'Visit Our High-Tech UAE Workshops', ar: 'تفضل بزيارة مراكزنا في دبي والشارقة' },
  locationsSubtitle: {
    en: 'Modern air-conditioned customer lounges with high-speed WiFi, espresso bars, and live video feeds of your car in the service bay.',
    ar: 'صالات استراحة فاخرة ومكيفة للعملاء مع إنترنت سريع، قهوة مجانية، وشاشات بث مباشر لمتابعة صيانة سيارتك في الورشة.'
  },

  // Testimonials
  testimonialsBadge: { en: 'CLIENT EXPERIENCES', ar: 'آراء وتقييمات العملاء' },
  testimonialsTitle: { en: 'What Car Owners & Fleet Managers Say', ar: 'ماذا يقول ملاك السيارات ومدراء الأساطيل' },

  // FAQ
  faqBadge: { en: 'SERVICE & WARRANTY QUESTIONS', ar: 'الأسئلة الشائعة والضمان' },
  faqTitle: { en: 'Frequently Asked Questions', ar: 'كل ما تود معرفته عن خدماتنا وضماناتنا' },

  // Final CTA
  finalCtaTitle: { en: 'Ready to Experience Precision Auto Service?', ar: 'جاهز لتجربة صيانة سيارات احترافية وموثوقة؟' },
  finalCtaSubtitle: {
    en: 'Book an appointment today or get a free diagnostic check with our certified service advisors.',
    ar: 'احجز موعدك اليوم أو احصل على فحص كمبيوتري مجاني مع مستشاري الصيانة المعتمدين لدينا.'
  },
  finalCtaButton: { en: 'Book Service Appointment', ar: 'احجز موعد الصيانة الآن' },
  finalCtaWhatsapp: { en: 'WhatsApp Service Desk (+971 52)', ar: 'محادثة عبر واتساب (+٩٧١ ٥٢)' },

  // Footer
  footerDesc: {
    en: 'Premier UAE auto service and mechanical repair center. Certified diagnostics, extreme-heat AC services, and corporate fleet solutions.',
    ar: 'المركز الرائد لصيانة وإصلاح السيارات في الإمارات. فحص كمبيوتري معتمد، صيانة مكيفات لدرجات الحرارة القصوى، وحلول متكاملة للأساطيل.'
  },
  footerQuickLinks: { en: 'SERVICES', ar: 'خدمات الصيانة' },
  footerFleetNav: { en: 'FLEET & COMMERCIAL', ar: 'الأساطيل والشركات' },
  footerLocationsNav: { en: 'WORKSHOPS', ar: 'الفروع ومراكز الخدمة' },
  footerDisclaimerNotice: {
    en: 'PORTFOLIO SHOWCASE DEMO NOTICE: AUTOVANTA UAE is a high-grade agency concept digital product for WebStudio AE portfolio presentation. All prices in AED and specs reflect UAE market benchmarks.',
    ar: 'إشعار توضيحي لمحفظة الأعمال: "أوتوفانتا الإمارات" نموذج تطبيقي فاخر مصمم لأغراض العرض الرقمي للوكالة. جميع الأسعار بالدرهم الإماراتي تمثل معايير سوق صيانة السيارات بالدولة.'
  },
  footerCopyright: {
    en: '© 2026 AUTOVANTA UAE Auto Service. All rights reserved. Portfolio Build #38.',
    ar: '© ٢٠٢٦ أوتوفانتا لصيانة السيارات في الإمارات. جميع الحقوق محفوظة. مشروع رقم #٣٨.'
  },

  // Modal
  modalTitle: { en: 'Schedule Your Auto Service', ar: 'حجز موعد صيانة لسيارتك' },
  modalSubtitle: { en: 'Select your preferred date, workshop branch, and required service.', ar: 'حدد التاريخ المناسب، الفرع المفضل، ونوع الصيانة المطلوبة.' },
  modalFullName: { en: 'Full Name *', ar: 'الاسم الكامل *' },
  modalPhone: { en: 'UAE Phone / WhatsApp *', ar: 'رقم الهاتف / واتساب في الإمارات *' },
  modalCarMake: { en: 'Car Make & Model *', ar: 'نوع وموديل السيارة *' },
  modalPlateNumber: { en: 'Plate Number / Emirate', ar: 'رقم اللوحة / الإمارة' },
  modalBranch: { en: 'Select Preferred Workshop', ar: 'اختر فرع الورشة المفضل' },
  modalBranchDubai: { en: 'Dubai — Al Quoz Industrial 3', ar: 'دبي — القوز الصناعية ٣' },
  modalBranchSharjah: { en: 'Sharjah — Industrial Area 12', ar: 'الشارقة — المنطقة الصناعية ١٢' },
  modalServiceType: { en: 'Service Package', ar: 'باقة الخدمة المطلوبة' },
  modalDate: { en: 'Preferred Date', ar: 'التاريخ المفضل' },
  modalNotes: { en: 'Specific Issues or Symptoms', ar: 'أعراض العطل أو ملاحظات إضافية' },
  modalSubmit: { en: 'Confirm Service Booking', ar: 'تأكيد حجز موعد الصيانة' },
  modalSuccessTitle: { en: 'Service Booking Confirmed!', ar: 'تم تأكيد طلب الحجز بنجاح!' },
  modalSuccessDesc: { en: 'Our service advisor will contact you within 15 minutes to confirm your drop-off slot.', ar: 'سيتواصل معك مستشار الصيانة خلال ١٥ دقيقة لتأكيد موعد استلام السيارة.' },
  modalSendWhatsapp: { en: 'Send Details via WhatsApp', ar: 'إرسال بيانات الحجز عبر واتساب' },
  modalClose: { en: 'Close Window', ar: 'إغلاق النافذة' }
};
