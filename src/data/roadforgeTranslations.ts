export type RoadforgeLanguage = 'en' | 'ar';

export interface RoadforgeTranslationEntry {
  en: string;
  ar: string;
}

export const ROADFORGE_TRANSLATIONS: Record<string, RoadforgeTranslationEntry> = {
  // Brand & Navigation
  brandName: { en: 'ROADFORGE', ar: 'رودفورج' },
  brandTagline: { en: 'Help, Wherever the Road Takes You.', ar: 'نجدة فورية أينما تأخذك الطريق.' },
  brandSubtitle: { en: '24/7 UAE CAR RECOVERY & ROADSIDE ASSISTANCE', ar: 'خدمات سحب وإنقاذ السيارات والمساعدة على الطريق ٢٤/٧ في الإمارات' },
  navServices: { en: 'Recovery Services', ar: 'خدمات الإنقاذ' },
  navDispatcher: { en: 'Emergency Dispatch', ar: 'طلب النجدة الفوري' },
  navCoverage: { en: 'Highway Radar', ar: 'تغطية الطرق السريعة' },
  navWorkflow: { en: 'Response Protocol', ar: 'سرعة الاستجابة' },
  navFleetPartners: { en: 'Fleet & Insurance', ar: 'الأساطيل والتأمين' },
  navLocations: { en: 'Dispatch Bases', ar: 'مراكز الانطلاق' },
  navFAQ: { en: 'FAQ', ar: 'الأسئلة الشائعة' },
  backToPortfolio: { en: 'Back to Portfolio', ar: 'العودة لمعرض الأعمال' },
  emergencyHotline: { en: '24/7 Hotline: 800-ROADS', ar: 'الخط الساخن: 800-ROADS' },
  dispatchNow: { en: 'Dispatch Flatbed Now', ar: 'طلب سطحة فورية' },
  whatsappSos: { en: 'WhatsApp GPS SOS', ar: 'إرسال موقعك عبر واتساب' },

  // Hero Section
  heroBadge: { en: '24/7 EMERGENCY DISPATCH • AVG RESPONSE UNDER 24 MINS', ar: 'عمليات إنقاذ على مدار الساعة • متوسط سرعة الاستجابة أقل من ٢٤ دقيقة' },
  heroTitleLine1: { en: 'Fast, Reliable 24/7 Recovery,', ar: 'إنقاذ وسحب سريع وموثوق على مدار الساعة،' },
  heroTitleHighlight: { en: 'Across Every UAE Highway.', ar: 'على كافة طرق وإمارات الدولة.' },
  heroDesc: {
    en: 'Flatbed recovery, emergency battery jumpstart, tyre blowout replacement, and highway fuel delivery across Dubai, Abu Dhabi, Sharjah, and major transit routes (E11, E311, E611). Help arrives in 20–25 minutes.',
    ar: 'سطحات هيدروليكية مجهزة لسحب السيارات الفارهة، اشتراك وتبديل البطاريات، تبديل الإطارات، وتزويد الوقود الطارئ في دبي وأبوظبي والشارقة والطرق السريعة (E11, E311, E611) خلال ٢٠–٢٥ دقيقة فقط.'
  },
  heroCtaDispatch: { en: 'Request Emergency Recovery', ar: 'طلب نجدة وإنقاذ فوري' },
  heroCtaCall: { en: 'Call 24/7 Dispatch Control', ar: 'اتصال بمركز العمليات ٢٤/٧' },

  // Stats / Badges
  statRecoveriesCompleted: { en: 'Successful Roadside Recoveries', ar: 'عملية إنقاذ وسحب تمت بنجاح' },
  statAvgResponseTime: { en: 'Average Highway ETA', ar: 'متوسط وقت الوصول للموقع' },
  statAvailability: { en: 'Operational Readiness', ar: 'جاهزية على مدار الساعة' },
  statFlatbedFleet: { en: 'GPS Tracked Recovery Units', ar: 'سطحة ورافعة مجهزة بنظام التتبع' },

  // Trust Strip
  trustTitle: { en: 'OFFICIAL FLEET RECOVERY & INSURANCE SLA PARTNER', ar: 'شريك الإنقاذ المعتمد لشركات التأمين والأساطيل في الإمارات' },

  // Quick Dispatch / Calculator Tool
  quickToolBadge: { en: 'LIVE EMERGENCY RADAR', ar: 'نظام حجز وتحديد السطحات الفوري' },
  quickToolTitle: { en: 'Instant Roadside Recovery Dispatcher', ar: 'اطلب سطحة أو مساعدة على الطريق فوراً' },
  quickToolSubtitle: {
    en: 'Select your breakdown location, highway corridor, and required service to see live ETA and upfront pricing in AED.',
    ar: 'حدد موقعك أو الطريق السريع ونوع الخدمة المطلوبة لمعرفة وقت الوصول التقديري والتكلفة المحددة مسبقاً بالدرهم.'
  },
  quickLocationLabel: { en: 'Breakdown Location / Highway', ar: 'موقع السيارة / الطريق السريع' },
  quickServiceLabel: { en: 'Type of Roadside Assistance', ar: 'نوع المساعدة المطلوبة' },
  quickVehicleTypeLabel: { en: 'Vehicle Category', ar: 'فئة ونوع المركبة' },
  quickEtaResult: { en: 'Estimated Flatbed Arrival Time', ar: 'الوقت التقديري لوصول السطحة' },
  quickPriceResult: { en: 'Upfront Service Price', ar: 'التكلفة المعتمدة للخدمة' },
  quickDispatchBtn: { en: 'Dispatch Nearest Recovery Unit', ar: 'إرسال أقرب سطحة إلى موقعي' },

  // Services
  servicesBadge: { en: '24/7 ROADSIDE INTERVENTION', ar: 'خدمات التدخل والإنقاذ السريع' },
  servicesTitle: { en: 'Complete Roadside Capabilities', ar: 'حلول متكاملة لإنقاذ وسحب السيارات' },
  servicesSubtitle: {
    en: 'Equipped with hydraulic low-angle flatbeds, digital booster packs, torque tools, and certified recovery commanders.',
    ar: 'مجهزون بسطحات هيدروليكية مخصصة للسيارات الفاخرة، أجهزة فحص وبطاريات رقمية، وأطقم فنية مدربة على أعلى معايير السلامة.'
  },
  responseTime: { en: 'Response Time', ar: 'سرعة الوصول' },
  viewServiceSpecs: { en: 'View Technical Capabilities', ar: 'تفاصيل ومعدات الخدمة' },

  // Coverage Map
  coverageBadge: { en: 'STRATEGIC HIGHWAY RADAR', ar: 'خريطة تغطية الطرق السريعة' },
  coverageTitle: { en: 'UAE Highway & City Rapid Response Zones', ar: 'تغطية شاملة لكافة المحاور الرئيسية بالدولة' },
  coverageSubtitle: {
    en: 'Strategically stationed recovery units positioned along critical transport corridors for under 25-minute dispatch.',
    ar: 'دوريات سطحات متمركزة على طول الطرق السريعة الحيوية لضمان الوصول لموقعك في أقل من ٢٥ دقيقة.'
  },

  // Process / Workflow
  processBadge: { en: 'RAPID RESPONSE TIMELINE', ar: 'بروتوكول الاستجابة السريعة' },
  processTitle: { en: 'From Emergency Call to Safe Recovery', ar: 'من لحظة الاتصال إلى وصول السطحة وتأمين مركبتك' },

  // Fleet & Insurance
  fleetInsuranceBadge: { en: 'B2B FLEET & INSURANCE SLAS', ar: 'عقود الشركات وشركات التأمين' },
  fleetInsuranceTitle: { en: 'Guaranteed SLAs for Fleets & Insurers', ar: 'اتفاقيات مستوى خدمة مضمونة للأساطيل والتأمين' },
  fleetInsuranceSubtitle: {
    en: 'Priority dispatch queues, automated GPS tracking links, consolidated corporate billing, and dedicated dispatchers.',
    ar: 'أولوية قصوى لمركبات الشركات، روابط تتبع حية للعملاء، فواتير موحدة، ومدير عمليات مخصص على مدار الساعة.'
  },
  fleetInsuranceCta: { en: 'Inquire Corporate Recovery Contract', ar: 'طلب عقد صيانة وإنقاذ للأساطيل' },

  // Case Study
  caseStudyBadge: { en: 'HIGHWAY SLA CASE STUDY', ar: 'دراسة حالة: إنقاذ الطرق السريعة' },
  caseStudyTitle: { en: 'How We Reduced Insurer Breakdown Response by 51%', ar: 'كيف قلصنا زمن استجابة حوادث التأمين بنسبة ٥١٪' },
  caseStudySubtitle: {
    en: 'Deploying dedicated highway corridor flatbed hubs across E11 and E311 for a major UAE insurance provider.',
    ar: 'نشر شبكة سطحات ذكية متمركزة على طريقي E11 و E311 لكبرى شركات التأمين في الإمارات.'
  },

  // Why Roadforge
  whyBadge: { en: 'THE ROADFORGE STANDARD', ar: 'معايير التميز في رودفورج' },
  whyTitle: { en: 'Why UAE Drivers Depend on ROADFORGE', ar: 'لماذا يعتمد علينا آلاف السائقين في الإمارات' },
  whySubtitle: {
    en: 'Fast response, damage-free recovery, upfront pricing, and absolute reliability when you need it most.',
    ar: 'سرعة قياسية، سحب آمن بدون خدوش، تسعير محدد مسبقاً، واحترافية تامة في أصعب المواقف.'
  },

  // Leadership Team
  teamBadge: { en: 'DISPATCH COMMANDERS', ar: 'فريق العمليات والإنقاذ' },
  teamTitle: { en: 'Emergency Fleet Leadership', ar: 'قادة غرف العمليات والتحكم الميداني' },

  // Dispatch Bases
  basesBadge: { en: 'REGIONAL DISPATCH HUBS', ar: 'مراكز ونقاط الانطلاق' },
  basesTitle: { en: 'Strategically Stationed Across 3 Emirates', ar: 'نقاط تمركز حيوية في ٣ إمارات' },

  // Testimonials
  testimonialsBadge: { en: 'MOTORIST REVIEWS', ar: 'شهادات السائقين والعملاء' },
  testimonialsTitle: { en: 'Real Highway Recovery Experiences', ar: 'تجارب واقعية لعمليات إنقاذ على طرق الإمارات' },

  // FAQ
  faqBadge: { en: 'EMERGENCY RECOVERY FAQ', ar: 'الأسئلة الشائعة حول سحب المركبات' },
  faqTitle: { en: 'Frequently Asked Questions', ar: 'كل ما تود معرفته حول خدمات الإنقاذ والسطحات' },

  // Final CTA
  finalCtaTitle: { en: 'Stranded on the Road? Help is Minutes Away.', ar: 'هل تعطلت سيارتك على الطريق؟ النجدة قادمة إليك خلال دقائق.' },
  finalCtaSubtitle: {
    en: 'Call our 24/7 toll-free dispatch line or request an instant flatbed pickup via WhatsApp GPS.',
    ar: 'اتصل بخط الطوارئ المباشر أو أرسل موقعك الجغرافي فوراً عبر واتساب لتصلك أقرب سطحة.'
  },
  finalCtaCallBtn: { en: 'Call Dispatch Desk (800-ROADS)', ar: 'اتصال بمركز الطوارئ (800-ROADS)' },
  finalCtaWhatsappBtn: { en: 'Send Live Location on WhatsApp (+971 52)', ar: 'إرسال الموقع المباشر عبر واتساب (+٩٧١ ٥٢)' },

  // Footer
  footerDesc: {
    en: 'Premium 24/7 UAE car recovery and roadside assistance. Flatbed towing, battery jumpstarts, tyre repairs, and emergency highway fuel across Dubai, Abu Dhabi, and Sharjah.',
    ar: 'خدمات إنقاذ وسحب السيارات والمساعدة على الطريق ٢٤/٧ في الإمارات. سطحات هيدروليكية، اشتراك وبطاريات، تبديل إطارات، ووقود طارئ في دبي وأبوظبي والشارقة.'
  },
  footerQuickLinks: { en: 'RECOVERY SERVICES', ar: 'خدمات الإنقاذ' },
  footerBasesNav: { en: 'HIGHWAY BASES', ar: 'نقاط تمركز السطحات' },
  footerCorridorsNav: { en: 'COVERED HIGHWAYS', ar: 'الطرق السريعة المغطاة' },
  footerDisclaimerNotice: {
    en: 'PORTFOLIO SHOWCASE DEMO NOTICE: ROADFORGE UAE is a high-grade agency concept digital product for WebStudio AE portfolio presentation. All prices in AED and specs reflect UAE market benchmarks.',
    ar: 'إشعار توضيحي لمحفظة الأعمال: "رودفورج الإمارات" نموذج تطبيقي فاخر مصمم لأغراض العرض الرقمي للوكالة. جميع الأسعار بالدرهم الإماراتي تمثل معايير سوق الإنقاذ وسحب المركبات بالدولة.'
  },
  footerCopyright: {
    en: '© 2026 ROADFORGE UAE Recovery & Roadside Assistance. All rights reserved. Portfolio Build #40.',
    ar: '© ٢٠٢٦ رودفورج لإنقاذ وسحب السيارات في الإمارات. جميع الحقوق محفوظة. مشروع رقم #٤٠.'
  },

  // Modal
  modalTitle: { en: 'Emergency Roadside Dispatch Request', ar: 'طلب سطحة ونجدة طارئة على الطريق' },
  modalSubtitle: { en: 'Share your vehicle and location details. A flatbed will be dispatched immediately.', ar: 'أدخل بيانات السيارة وموقعك الحالي، وسيتم توجيه أقرب سطحة فوراً.' },
  modalFullName: { en: 'Your Name *', ar: 'الاسم الكريم *' },
  modalPhone: { en: 'Active Phone / WhatsApp *', ar: 'رقم الهاتف المتاح / واتساب *' },
  modalVehicleMake: { en: 'Vehicle Make & Model *', ar: 'نوع وموديل المركبة *' },
  modalLocation: { en: 'Current Location / Landmark / Highway *', ar: 'الموقع الحالي / أقرب معلم / الطريق *' },
  modalServiceType: { en: 'Required Assistance', ar: 'نوع المساعدة المطلوبة' },
  modalDestination: { en: 'Drop-off Destination (Garage / Home)', ar: 'وجهة نقل السيارة (الورشة / المنزل)' },
  modalSubmit: { en: 'DISPATCH RECOVERY UNIT NOW', ar: 'إرسال السطحة إلى موقعي فوراً' },
  modalSuccessTitle: { en: 'Dispatch Request Activated!', ar: 'تم استلام وتفعيل طلب الإنقاذ!' },
  modalSuccessDesc: { en: 'Our nearest recovery operator has been assigned and is heading to your location. ETA 18–24 mins.', ar: 'تم توجيه أقرب سطحة إلى موقعك وهي في الطريق الآن. وقت الوصول المتوقع ١٨–٢٤ دقيقة.' },
  modalSendWhatsapp: { en: 'Send Live GPS Coordinates via WhatsApp', ar: 'إرسال الإحداثيات المباشرة عبر واتساب' },
  modalClose: { en: 'Close Window', ar: 'إغلاق النافذة' }
};
