export type SkyvaultLanguage = 'en' | 'ar';

export interface SkyvaultTranslationItem {
  en: string;
  ar: string;
}

export const SKYVAULT_TRANSLATIONS: Record<string, SkyvaultTranslationItem> = {
  // Navigation
  'nav.services': { en: 'Management Modules', ar: 'برامج إدارة الطائرات' },
  'nav.calculator': { en: 'Yield Calculator', ar: 'حاسبة العائد والتشغيل' },
  'nav.camo': { en: 'CAMO & Safety', ar: 'صلاحية الطيران والسلامة' },
  'nav.hangar': { en: 'Hangar & Ground', ar: 'الهناجر والخدمات الأرضية' },
  'nav.bases': { en: 'UAE Bases', ar: 'قواعد العمليات' },
  'nav.casestudy': { en: 'Case Study', ar: 'دراسة حالة' },
  'nav.faq': { en: 'FAQ', ar: 'الأسئلة الشائعة' },
  'nav.requestProposal': { en: 'REQUEST PROPOSAL', ar: 'طلب عرض إدارة مخصص' },
  'nav.whatsapp': { en: 'WhatsApp Desk', ar: 'مكتب واتساب' },
  'nav.portfolioBack': { en: 'Agency Portfolio', ar: 'محفظة الوكالة' },
  'nav.callDesk': { en: 'Executive Desk', ar: 'المكتب التنفيذي' },

  // Hero
  'hero.tag': { en: 'GCAA & EASA APPROVED CAMO AIRCRAFT MANAGEMENT', ar: 'إدارة طائرات وصلاحية طيران معتمدة من GCAA و EASA' },
  'hero.title1': { en: 'Aviation Management,', ar: 'إدارة طائرات خاصة،' },
  'hero.title2': { en: 'Elevated.', ar: 'بأعلى معايير الدقة.' },
  'hero.ctaProposal': { en: 'REQUEST MANAGEMENT PROPOSAL', ar: 'طلب مقترح إدارة الطائرة' },
  'hero.ctaModules': { en: 'Explore Management Modules', ar: 'استكشاف برامج الإدارة' },
  'hero.managedFleet': { en: 'Managed Jet Fleet', ar: 'طائرة تحت الإدارة' },
  'hero.flightHours': { en: 'Flight Hours Managed', ar: 'ساعة طيران مدارة' },
  'hero.camoCert': { en: 'CAMO Certification', ar: 'اعتماد صلاحية الطيران' },
  'hero.basesLabel': { en: 'DUBAI (DWC EXECUJET HANGAR) • ABU DHABI (AL BATEEN BAY)', ar: 'دبي (هناجر إكسيكوجيت DWC) • أبوظبي (قاعدة البطين)' },
  'hero.yieldBadge': { en: 'CHARTER YIELD PROGRAM', ar: 'برنامج تعويض تكاليف التشغيل' },
  'hero.yieldDesc': { en: 'Up to 70% Offset on Fixed Ownership Costs', ar: 'تعويض حتى ٧٠٪ من تكاليف الملكية الثابتة' },

  // Trust Strip
  'trust.gcaa': { en: 'GCAA CAMO AWR-048', ar: 'اعتماد GCAA CAMO AWR-048' },
  'trust.gcaaSub': { en: 'Approved Airworthiness', ar: 'صلاحية طيران معتمدة رسمياً' },
  'trust.easa': { en: 'EASA PART-M', ar: 'معايير EASA PART-M' },
  'trust.easaSub': { en: 'European Safety Standard', ar: 'معايير السلامة الأوروبية' },
  'trust.hangar': { en: 'DWC VIP HANGAR', ar: 'هناجر DWC المكيفة' },
  'trust.hangarSub': { en: '8,000 m² Climate Bay', ar: 'مساحة ٨,٠٠٠ م² مكيفة' },
  'trust.isbao': { en: 'IS-BAO STAGE III', ar: 'شهادة IS-BAO المستوى الثالث' },
  'trust.isbaoSub': { en: 'Highest Operational Safety', ar: 'أعلى تصنيف سلامة عمليات' },
  'trust.offset': { en: 'CHARTER YIELD OFFSET', ar: 'عوائد التأجير التجاري' },
  'trust.offsetSub': { en: 'Maximized Owner Returns', ar: 'تعظيم عوائد المالك' },
  'trust.crew': { en: 'VIP CREW STAFFING', ar: 'أطقم طيران معتمدة' },
  'trust.crewSub': { en: 'Type-Rated Captains', ar: 'قباطنة مرخصون على الطراز' },

  // Services / Modules
  'services.tag': { en: 'EXECUTIVE AVIATION MODULES', ar: 'برامج إدارة الطيران التنفيذي' },
  'services.title': { en: 'Aircraft Management & CAMO Modules', ar: 'حلول إدارة الطائرات وصلاحية الطيران' },
  'services.subtitle': { en: 'Engineered to reduce ownership friction, preserve asset resale value, and monetize idle flight hours.', ar: 'مصممة خصيصاً لتقليل أعباء التملك، الحفاظ على القيمة السوقية للطائرة، وتحقيق عوائد من ساعات التوقف.' },
  'services.details': { en: 'MODULE DETAILS', ar: 'تفاصيل البرنامج' },
  'services.deliverables': { en: 'KEY OPERATIONAL DELIVERABLES', ar: 'المخرجات والخدمات التشغيلية' },
  'services.inquire': { en: 'INQUIRE ABOUT THIS MODULE', ar: 'طلب تفاصيل هذا البرنامج' },

  // Calculator
  'calc.tag': { en: 'CHARTER YIELD REVENUE CALCULATOR', ar: 'حاسبة عوائد التأجير والتشغيل' },
  'calc.title': { en: 'Calculate Charter Revenue Offset', ar: 'احسب تعويض تكاليف التشغيل السنوية' },
  'calc.subtitle': { en: 'Monetize idle hangar hours by enrolling your jet in our GCAA AOC charter program to offset annual fixed operating expenses.', ar: 'استثمر ساعات توقف الطائرة بالهنجر عبر إدراجها في رخصة التأجير الجوي (AOC) لتعويض نفقات الصيانة والطاقم.' },
  'calc.section1': { en: '1. AIRCRAFT PROFILE & UTILIZATION', ar: '١. طراز الطائرة ومعدل الاستخدام السنوي' },
  'calc.selectModel': { en: 'Select Jet Category / Model', ar: 'اختر فئة وطراز الطائرة' },
  'calc.annualHours': { en: 'Available Annual Charter Hours:', ar: 'ساعات التأجير التجاري المتاحة سنوياً:' },
  'calc.hoursLabel': { en: 'Charter Hours/Yr', ar: 'ساعة تأجير / سنة' },
  'calc.projection': { en: 'FINANCIAL YIELD PROJECTION', ar: 'النتائج المالية والوفر المتوقع' },
  'calc.netOffset': { en: 'ESTIMATED OWNER NET REVENUE OFFSET', ar: 'صافي العائد المالي السنوي المقدر للمالك' },
  'calc.fixedBudget': { en: 'Fixed Annual Operating Budget:', ar: 'الميزانية التشغيلية الثابتة:' },
  'calc.reduction': { en: 'Net Cost Reduction:', ar: 'نسبة الوفر والتخفيض:' },
  'calc.remainingCost': { en: 'Remaining Net Annual Cost:', ar: 'صافي التكلفة المتبقية على المالك:' },
  'calc.cta': { en: 'REQUEST CONFIDENTIAL OWNER ANALYSIS', ar: 'طلب دراسة مالية وتشغيلية سرية' },
  'calc.disclaimer': { en: 'Illustrative model based on typical UAE market charter rates and standard operating assumptions.', ar: 'نموذج استرشادي يستند إلى متوسط أسعار التأجير في سوق الإمارات والافتراضات التشغيلية القياسية.' },

  // Workflow / How We Work
  'workflow.tag': { en: 'THE SKYVAULT MANAGEMENT WORKFLOW', ar: 'منهجية إدارة الأصول الجوية' },
  'workflow.title': { en: 'Four-Stage Management Lifecycle', ar: 'دورة إدارة الطائرة عبر ٤ مراحل' },
  'workflow.subtitle': { en: 'A structured 4-phase aircraft management framework protecting safety, compliance, and asset resale value.', ar: 'إطار عمل تشغيلي محكم يضمن أعلى معايير السلامة، الامتثال للأنظمة، واستدامة القيمة الاستثمارية.' },
  'workflow.stage': { en: 'STAGE', ar: 'المرحلة' },
  'workflow.of': { en: 'OF 04', ar: 'من ٠٤' },

  // Ground Services & Hangar
  'ground.tag': { en: 'VIP GROUND & HANGARAGE SERVICES', ar: 'خدمات الهناجر والمناولة الأرضية' },
  'ground.title': { en: 'VIP Hangarage & Ground Support.', ar: 'هناجر خاصة ودعم أرضي متكامل.' },
  'ground.subtitle': { en: 'We provide dedicated climate-controlled hangar space, VIP FBO tarmac handling, and luxury aircraft detailing in Dubai DWC and Abu Dhabi.', ar: 'نوفر مساحات هناجر مكيفة بالكامل، خدمات مناولة التارماك بصالات كبار الشخصيات، وعناية شاملة بالطائرات في دبي وأبوظبي.' },
  'ground.cta': { en: 'RESERVE HANGAR BAY', ar: 'حجز موقع في الهنجر' },
  'ground.badge': { en: 'CLIMATE CONTROLLED BAY', ar: 'هناجر مكيفة ومحمية' },
  'ground.badgeSub': { en: '24/7 Ramp Security & Detailing Crew', ar: 'حراسة مدرج ٢٤/٧ وفريق عناية وتلميع متخصص' },

  // Case Study
  'case.tag': { en: 'FEATURED MANAGEMENT CASE STUDY', ar: 'دراسة حالة واقعية لإدارة الأصول' },
  'case.solutionTag': { en: 'SKYVAULT CAMO & YIELD SOLUTION', ar: 'حلول إيروفولت لصلاحية الطيران والعوائد' },
  'case.costRed': { en: 'Net Cost Reduction', ar: 'نسبة الوفر في التكاليف' },
  'case.uptime': { en: 'Dispatch Reliability', ar: 'جاهزية الإقلاع الفوري' },
  'case.audit': { en: 'GCAA Audit Score', ar: 'تقييم تدقيق هيئة الطيران' },
  'case.cta': { en: 'REQUEST MANAGEMENT PROPOSAL', ar: 'طلب دراسة إدارة مماثلة' },

  // Advantages
  'why.tag': { en: 'THE SKYVAULT ADVANTAGE', ar: 'مزايا إيروفولت الحصرية' },
  'why.title': { en: 'Why Aircraft Owners Choose SKYVAULT', ar: 'لماذا يثق ملاك الطائرات في إيروفولت الإمارات' },
  'why.subtitle': { en: 'We combine rigorous GCAA CAMO airworthiness oversight with high-yield charter monetization.', ar: 'نجمع بين الامتثال الصارم لصلاحية الطيران والقدرة على تحقيق أعلى عوائد مالية من التأجير.' },

  // Leadership
  'team.tag': { en: 'EXECUTIVE AVIATION DIRECTORS', ar: 'قيادة الطيران التنفيذي' },
  'team.title': { en: 'Meet Our Aviation Leadership', ar: 'فريق إدارة العمليات وصلاحية الطيران' },
  'team.subtitle': { en: 'Ex-presidential flight leads, licensed aeronautical CAMO engineers, and commercial charter directors.', ar: 'قباطنة طيران رئاسي سابقون، مهندسو طيران مرخصون، وخبراء إدارة عوائد الأساطيل الجوية.' },

  // Knowledge Base
  'insights.tag': { en: 'AVIATION MANAGEMENT KNOWLEDGE BASE', ar: 'دليل ومعرفة إدارة الطيران' },
  'insights.title': { en: 'Executive Aircraft Ownership Guides', ar: 'أدلة وإرشادات تملك وإدارة الطائرات' },
  'insights.subtitle': { en: 'Expert intelligence on CAMO airworthiness, charter revenue offsets, DWC hangarage, and flight crew staffing.', ar: 'معلومات تفصيلية حول صلاحية الطيران، عوائد التأجير، هناجر دبي المكيفة، وتوظيف الأطقم الجوية.' },
  'insights.read': { en: 'READ INTELLIGENCE REPORT', ar: 'قراءة التقرير الكامل' },

  // Bases
  'bases.tag': { en: 'CAMO & HANGARAGE OPERATIONAL BASES', ar: 'قواعد العمليات والهناجر' },
  'bases.title': { en: 'Our Management Bases', ar: 'قواعدنا في مطارات الدولة' },
  'bases.subtitle': { en: 'Stationed CAMO offices and climate-controlled hangar bays at ExecuJet DWC and Al Bateen Executive Airport.', ar: 'مكاتب صلاحية طيران متواجدة على مدار الساعة وهناجر خاصة في مطار آل مكتوم DWC ومطار البطين بأبوظبي.' },
  'bases.call': { en: 'CALL EXECUTIVE DESK', ar: 'الاتصال بالمكتب التنفيذي' },

  // Testimonials / Reviews
  'reviews.tag': { en: 'VERIFIED AIRCRAFT OWNER REVIEWS', ar: 'شهادات وتقييمات ملاك الطائرات' },
  'reviews.title': { en: 'What Aircraft Owners Say', ar: 'آراء وتقييمات عملائنا' },
  'reviews.subtitle': { en: 'Direct feedback from family offices, corporate flight departments, and UHNW jet owners across the UAE.', ar: 'تجارب واقعية من المكاتب العائلية، إدارات طيران الشركات، وملاك الطائرات الخاصة بدولة الإمارات.' },

  // FAQ
  'faq.tag': { en: 'FREQUENTLY ASKED QUESTIONS', ar: 'الأسئلة الشائعة والأجوبة' },
  'faq.title': { en: 'Aircraft Management & CAMO FAQ', ar: 'كل ما تود معرفته عن إدارة الطائرات' },
  'faq.subtitle': { en: 'Comprehensive details on turnkey management, charter offsets, calendar priority, CAMO approvals, and fees.', ar: 'إجابات وافية حول الإدارة المتكاملة، عوائد التأجير، أولوية استخدام المالك، وتراخيص صلاحية الطيران.' },

  // Final CTA
  'final.tag': { en: 'MAXIMIZE ASSET VALUE · ZERO OPERATIONAL FRICTION', ar: 'تعظيم قيمة الأصول · تشغيل سلس بدون أعباء' },
  'final.title': { en: 'Protect Your Aircraft Asset.', ar: 'احمِ استثمارك الجوي بأعلى معايير الإدارة.' },
  'final.subtitle': { en: 'Request a confidential management proposal tailored to your aircraft model, annual flight profile, and revenue goals.', ar: 'اطلب مقترح إدارة مخصصاً وسرياً لطائرتك يوضح خطط الصيانة، تكاليف التشغيل، وعوائد التأجير المتوقعة.' },
  'final.ctaProposal': { en: 'REQUEST CONFIDENTIAL PROPOSAL', ar: 'طلب مقترح إدارة سري' },
  'final.ctaWhatsapp': { en: 'WhatsApp Aviation Director', ar: 'محادثة مدير العمليات عبر واتساب' },

  // Proposal Modal Form
  'modal.tag': { en: 'SKYVAULT MANAGEMENT DESK', ar: 'مكتب إدارة الطائرات' },
  'modal.title': { en: 'Request Aircraft Management Proposal', ar: 'طلب عرض إدارة طائرة خاصة' },
  'modal.subtitle': { en: 'Submit your aircraft details for a confidential GCAA CAMO airworthiness & revenue yield assessment.', ar: 'شاركنا بيانات طائرتك لإعداد تقرير مالي وفني سري حول صلاحية الطيران والعوائد المتوقعة.' },
  'modal.name': { en: 'Your Name / Title *', ar: 'الاسم الكامل / المسمى *' },
  'modal.phone': { en: 'UAE Phone / WhatsApp *', ar: 'رقم الهاتف / واتساب *' },
  'modal.aircraft': { en: 'Aircraft Make & Model *', ar: 'طراز ونوع الطائرة *' },
  'modal.module': { en: 'Target Management Module', ar: 'برنامج الإدارة المطلوب' },
  'modal.notes': { en: 'Current Base & Operational Requirements', ar: 'مطار التمركز الحالي وأي متطلبات إضافية' },
  'modal.submit': { en: 'REQUEST CONFIDENTIAL PROPOSAL', ar: 'إرسال طلب المقترح السري' },
  'modal.urgent': { en: 'Urgent advisory request?', ar: 'هل تحتاج استشارة عاجلة ومباشرة؟' },
  'modal.whatsappDirect': { en: 'WhatsApp Executive Aviation Lead Directly', ar: 'محادثة مدير الطيران التنفيذي عبر واتساب مباشرة' },
  'modal.successTitle': { en: 'Management Proposal Requested!', ar: 'تم استلام طلب المقترح بنجاح!' },
  'modal.successDesc': { en: 'Thank you. Our Managing Director will contact you under strict NDA to review your aircraft profile and CAMO options.', ar: 'شكراً لتواصلك. سيتواصل معك مديرنا العام بموجب اتفاقية سرية تامة (NDA) لبحث تفاصيل طائرتك وبرامج الإدارة المتاحة.' },
  'modal.close': { en: 'CLOSE WINDOW', ar: 'إغلاق النافذة' },

  // Footer
  'footer.brandDesc': {
    en: 'SKYVAULT UAE — "Aviation Management, Elevated." GCAA CAMO-certified executive aircraft management firm protecting asset value and operating charter offset programs for VIP owners in Dubai & Abu Dhabi.',
    ar: 'إيروفولت الإمارات (SKYVAULT UAE) — "إدارة طائرات خاصة بأعلى معايير الدقة." شركة إدارة طائرات خاصة معتمدة بصلاحية GCAA CAMO لحماية القيمة الاستثمارية للطائرات وتشغيل برامج تعويض التكاليف بدبي وأبوظبي.'
  },
  'footer.colModules': { en: 'MANAGEMENT MODULES', ar: 'برامج الإدارة' },
  'footer.colAirworthiness': { en: 'CAMO & AIRWORTHINESS', ar: 'صلاحية الطيران والتراخيص' },
  'footer.colLegal': { en: 'REGULATORY & SAFETY', ar: 'اللوائح والسلامة الجوية' },
  'footer.copyright': {
    en: '© 2026 SKYVAULT UAE. WebStudio AE agency portfolio showcase. GCAA CAMO certified aircraft management broker & operations consultant.',
    ar: '© ٢٠٢٦ إيروفولت الإمارات (SKYVAULT UAE). نموذج استعراض محفظة وكالة WebStudio AE. استشارات ووساطة إدارة الطائرات الخاصة وصلاحية الطيران المعتمدة.'
  },
  'footer.backToPortfolio': { en: '← Back to Main Agency Portfolio', ar: '← العودة للموقع الرئيسي للوكالة' }
};
