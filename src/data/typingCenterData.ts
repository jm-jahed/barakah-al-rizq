export type Language = 'en' | 'ar';

export interface ServiceItem {
  id: string;
  slug: string;
  nameEn: string;
  nameAr: string;
  category: 'visa' | 'emirates-id' | 'tasheel' | 'business' | 'documents' | 'translation' | 'ejari' | 'family' | 'golden-visa';
  categoryLabelEn: string;
  categoryLabelAr: string;
  authority: string;
  authorityAr: string;
  shortDescEn: string;
  shortDescAr: string;
  descriptionEn: string;
  descriptionAr: string;
  govtFeeMin: number;
  govtFeeMax: number;
  typingFeeMin: number;
  typingFeeMax: number;
  expressFee: number;
  processingTimeEn: string;
  processingTimeAr: string;
  emirateAvailability: string[];
  requirementsEn: string[];
  requirementsAr: string[];
  whoNeedsItEn: string;
  whoNeedsItAr: string;
  nextStepsEn: string[];
  nextStepsAr: string[];
  featured?: boolean;
}

export interface EmirateInfo {
  id: string;
  nameEn: string;
  nameAr: string;
  primaryAuthorityEn: string;
  primaryAuthorityAr: string;
  serviceHighlightsEn: string[];
  serviceHighlightsAr: string[];
  popularServices: string[];
  centreHoursEn: string;
  centreHoursAr: string;
}

export interface AuthorityInfo {
  id: string;
  code: string;
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  jurisdictionEn: string;
  jurisdictionAr: string;
  iconName: string;
}

export interface RenewalAlert {
  id: string;
  titleEn: string;
  titleAr: string;
  type: 'visa' | 'eid' | 'license' | 'labour';
  daysLeft: number;
  holderName: string;
  companyName?: string;
  urgency: 'high' | 'medium' | 'normal';
}

export const TYPING_SERVICES_DATA: ServiceItem[] = [
  // EMIRATES ID
  {
    id: 'eid-renewal',
    slug: 'emirates-id-renewal',
    nameEn: 'Emirates ID Renewal',
    nameAr: 'تجديد بطاقة الهوية الإماراتية',
    category: 'emirates-id',
    categoryLabelEn: 'Emirates ID',
    categoryLabelAr: 'الهوية الإماراتية',
    authority: 'Federal Authority for Identity, Citizenship, Customs & Port Security (ICP)',
    authorityAr: 'الهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ',
    shortDescEn: 'Accurate form typing and biometric schedule assistance for UAE Nationals and Expats.',
    shortDescAr: 'طباعة استمارة التجديد بدقة ومتابعة مواعيد البصمة للمواطنين والمقيمين.',
    descriptionEn: 'Comprehensive Emirates ID renewal typing service across all UAE Emirates. We verify your residency data, draft the official ICP electronic application, schedule biometric appointments if required, and track the card issuance to your designated delivery point.',
    descriptionAr: 'خدمة طباعة تجديد بطاقة الهوية الإماراتية لجميع الإمارات مع التحقق الكامل من البيانات، حجز مواعيد البصمة وتتبع استلام البطاقة حتى باب منزلك.',
    govtFeeMin: 170,
    govtFeeMax: 370,
    typingFeeMin: 65,
    typingFeeMax: 120,
    expressFee: 150,
    processingTimeEn: '24 - 48 Hours (Standard) / Same Day (VIP)',
    processingTimeAr: '24 - 48 ساعة (عادي) / نفس اليوم (VIP)',
    emirateAvailability: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'],
    requirementsEn: [
      'Original Passport Copy & Residency Visa',
      'Old Emirates ID Card or Card Number',
      'High-Resolution White Background Passport Photo',
      'Valid Unified Number (UID)'
    ],
    requirementsAr: [
      'نسخة من جواز السفر والإقامة السارية',
      'بطاقة الهوية السابقة أو رقم الهوية',
      'صورة شخصية حديثة بخلفية بيضاء عالية الدقة',
      'الرقم الموحد (UID) ساري المفعول'
    ],
    whoNeedsItEn: 'UAE Residents whose Emirates ID has expired or is within the 30-day grace period before or after expiry.',
    whoNeedsItAr: 'المقيمون في دولة الإمارات الذين انتهت هويتهم أو ضمن فترة السماح (30 يوماً).',
    nextStepsEn: [
      'Submit passport and old ID copy online or via WhatsApp',
      'Review generated ICP application draft & pay fees',
      'Receive biometric appointment slip (if applicable)',
      'Digital E-ID active within 24 hours; physical card dispatched via courier'
    ],
    nextStepsAr: [
      'إرسال صورة الجواز والهوية عبر الموقع أو الواتساب',
      'مراجعة طلب الهيئة الاتحادية وسداد الرسوم',
      'استلام موعد البصمة إن لزم الأمر',
      'تفعيل الهوية الرقمية خلال 24 ساعة وتسليم البطاقة عبر الشحن'
    ],
    featured: true
  },
  {
    id: 'eid-new',
    slug: 'new-emirates-id-application',
    nameEn: 'New Emirates ID (First Time)',
    nameAr: 'إصدار بطاقة هوية إماراتية جديدة',
    category: 'emirates-id',
    categoryLabelEn: 'Emirates ID',
    categoryLabelAr: 'الهوية الإماراتية',
    authority: 'ICP UAE',
    authorityAr: 'الهيئة الاتحادية للهوية والجنسية',
    shortDescEn: 'First-time registration typing and biometric center appointment coordination.',
    shortDescAr: 'طباعة طلب إصدار الهوية لأول مرة مع حجز وتنسيق مواعيد مركز البصمة.',
    descriptionEn: 'Essential first step for new UAE residents and newborn family members. Includes accurate electronic data entry matching your entry permit, photo specification verification, and biometric appointment scheduling at your nearest ICP customer happiness center.',
    descriptionAr: 'الخطوة الأساسية للمقيمين الجدد والمواليد الجدد في الإمارات، تشمل تدقيق البيانات ومطابقتها مع إذن الدخول وحجز موعد البصمة بأقرب مركز سعادة متعاملين.',
    govtFeeMin: 170,
    govtFeeMax: 470,
    typingFeeMin: 80,
    typingFeeMax: 140,
    expressFee: 150,
    processingTimeEn: '2 - 3 Working Days post-biometrics',
    processingTimeAr: '2 - 3 أيام عمل بعد استكمال البصمة',
    emirateAvailability: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'],
    requirementsEn: [
      'Original Passport & Valid Entry Permit / Stamped Visa',
      'Official Medical Fitness Test Result',
      'Personal Photo (35x45mm, white background)',
      'Birth Certificate (for newborns attested by MOFA)'
    ],
    requirementsAr: [
      'أصل جواز السفر مع إذن الدخول الساري أو الإقامة',
      'نتيجة فحص اللياقة الطبية الصادرة والمعتمدة',
      'صورة شخصية بالمواصفات المعتمدة (35x45 ملم)',
      'شهادة الميلاد (للمواليد الجدد مصدقة من الخارجية)'
    ],
    whoNeedsItEn: 'New expatriates entering on employment, partner, or family visas, and UAE newborn babies.',
    whoNeedsItAr: 'الوافدون الجدد بتأشيرة عمل أو مستثمر أو عائلية، والمواليد الجدد.',
    nextStepsEn: [
      'Upload entry permit and medical certificate',
      'We generate the official ICP application form',
      'Attend biometric capture with our pre-booked appointment',
      'Receive official Emirates ID tracking number'
    ],
    nextStepsAr: [
      'رفع إذن الدخول وشهادة الفحص الطبي',
      'إصدار استمارة الطلب الرسمية من الهيئة',
      'حضور موعد التبصيم في المركز المعتمد',
      'استلام رقم التتبع الرسمي للبطاقة'
    ]
  },
  {
    id: 'eid-replacement',
    slug: 'lost-damaged-emirates-id',
    nameEn: 'Lost or Damaged Emirates ID Replacement',
    nameAr: 'استخراج بدل فاقد أو تالف لبطاقة الهوية',
    category: 'emirates-id',
    categoryLabelEn: 'Emirates ID',
    categoryLabelAr: 'الهوية الإماراتية',
    authority: 'ICP UAE',
    authorityAr: 'الهيئة الاتحادية للهوية والجنسية',
    shortDescEn: 'Urgent replacement application typing with fast-track card reprint.',
    shortDescAr: 'طباعة طلب عاجل لبدل فاقد أو تالف مع إعادة إصدار سريعة للبطاقة.',
    descriptionEn: 'Immediate support when your ID card is lost, stolen, or physically damaged. We submit the replacement application, facilitate the incident declaration, and expedite card re-issuance.',
    descriptionAr: 'دعم فوري عند فقدان أو تلف بطاقة الهوية لتقديم طلب البدل الفاقد إلكترونياً وتسريع إعادة طباعة البطاقة وشحنها.',
    govtFeeMin: 370,
    govtFeeMax: 470,
    typingFeeMin: 75,
    typingFeeMax: 130,
    expressFee: 150,
    processingTimeEn: '24 Hours (Urgent) / 48 Hours (Standard)',
    processingTimeAr: '24 ساعة (عاجل) / 48 ساعة (عادي)',
    emirateAvailability: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'],
    requirementsEn: [
      'Passport Copy & Emirates ID Number',
      'Police Report (for lost cards if requested by ICP)',
      'Photo with white background'
    ],
    requirementsAr: [
      'نسخة الجواز ورقم الهوية المفقودة أو التالفة',
      'تقرير الشرطة (في حال طلب الهيئة للبطاقات المفقودة)',
      'صورة شخصية حديثة'
    ],
    whoNeedsItEn: 'Anyone whose physical card is misplaced, damaged, or stolen.',
    whoNeedsItAr: 'أي شخص فقد بطاقة الهوية أو تعرضت للتلف.',
    nextStepsEn: [
      'Provide ID number and passport details',
      'ICP electronic replacement submission within 30 minutes',
      'Card dispatched to chosen delivery locker or address'
    ],
    nextStepsAr: [
      'تزويدنا برقم الهوية وتفاصيل الجواز',
      'تقديم الطلب عبر النظام خلال 30 دقيقة',
      'شحن البطاقة إلى موقعك المفضل'
    ]
  },

  // VISA & RESIDENCY
  {
    id: 'residence-visa-renewal',
    slug: 'residence-visa-renewal',
    nameEn: 'Residence Visa Renewal (Dubai & UAE)',
    nameAr: 'تجديد الإقامة (دبي وكافة الإمارات)',
    category: 'visa',
    categoryLabelEn: 'Visa & Immigration',
    categoryLabelAr: 'التأشيرات والإقامة',
    authority: 'GDRFA Dubai / ICP Federal',
    authorityAr: 'الإدارة العامة للإقامة وشؤون الأجانب / الهيئة الاتحادية',
    shortDescEn: 'Complete end-to-end visa renewal including medical typing and insurance integration.',
    shortDescAr: 'تجديد شامل للإقامة يشمل الفحص الطبي، التأمين الصحي والهوية.',
    descriptionEn: 'Seamless residency renewal process handling medical fitness typing, mandatory health insurance validation, Emirates ID renewal typing, and final electronic residency permit issuance without disruption to your stay.',
    descriptionAr: 'معاملة تجديد الإقامة الشاملة، تتضمن طباعة فحص اللياقة الطبية، التأمين الصحي الإلزامي، تجديد الهوية وإصدار الإقامة الإلكترونية المعتمدة.',
    govtFeeMin: 450,
    govtFeeMax: 950,
    typingFeeMin: 120,
    typingFeeMax: 250,
    expressFee: 200,
    processingTimeEn: '24 - 48 Hours',
    processingTimeAr: '24 - 48 ساعة عمل',
    emirateAvailability: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'],
    requirementsEn: [
      'Original Passport (min 6 months validity)',
      'Current Visa Copy & Emirates ID',
      'Medical Fitness Certificate',
      'Approved UAE Health Insurance Certificate',
      'Company Labour Card / Trade License (if employment or partner visa)'
    ],
    requirementsAr: [
      'أصل جواز السفر (ساري لـ 6 أشهر على الأقل)',
      'نسخة الإقامة الحالية وبطاقة الهوية',
      'شهادة اللياقة الطبية الصادرة',
      'وثيقة التأمين الصحي المعتمدة في الدولة',
      'بطاقة العمل أو الرخصة التجارية (لإقامات العمل والشركاء)'
    ],
    whoNeedsItEn: 'Employed professionals, investors, and family dependents residing in the UAE.',
    whoNeedsItAr: 'الموظفون والشركاء والمستثمرون وأفراد الأسرة المكفولون في الإمارات.',
    nextStepsEn: [
      'Send passport & current visa copy',
      'Medical typing & appointment setup',
      'ICP / GDRFA electronic submission',
      'Digital residency delivered with updated UID & status'
    ],
    nextStepsAr: [
      'إرسال صورة الجواز والإقامة الحالية',
      'طباعة طلب الفحص الطبي وحجز الموعد',
      'التقديم الإلكتروني عبر نظام الإقامة المعتمد',
      'استلام الإقامة الإلكترونية المحدثة'
    ],
    featured: true
  },
  {
    id: 'family-visa-sponsorship',
    slug: 'family-visa-sponsorship',
    nameEn: 'Family Visa Sponsorship (Spouse & Children)',
    nameAr: 'إصدار وتجديد إقامة الأسرة (الزوجة والأبناء)',
    category: 'family',
    categoryLabelEn: 'Family & Residency',
    categoryLabelAr: 'إقامة الأسرة',
    authority: 'GDRFA Dubai / ICP UAE',
    authorityAr: 'إقامة دبي / الهيئة الاتحادية',
    shortDescEn: 'Sponsor your spouse and children smoothly with full document preparation.',
    shortDescAr: 'كفالة الزوجة والأبناء مع إعداد كافة العقود والترجمات والشهادات المطلوبة.',
    descriptionEn: 'Turnkey family sponsorship typing service. We guide sponsors through salary certificate requirements, Ejari tenancy contract verification, attested marriage and birth certificates, entry permit typing, status change, and medical/ID coordination.',
    descriptionAr: 'خدمة كفالة الأسرة المتكاملة: تدقيق شهادة الراتب وعقد إيجاري الموثق، تصديق وترجمة شهادات الزواج والميلاد، إصدار إذن الدخول، وتعديل الوضع.',
    govtFeeMin: 650,
    govtFeeMax: 1450,
    typingFeeMin: 150,
    typingFeeMax: 300,
    expressFee: 250,
    processingTimeEn: '2 - 4 Working Days',
    processingTimeAr: '2 - 4 أيام عمل',
    emirateAvailability: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'],
    requirementsEn: [
      'Sponsor Passport, Visa, Emirates ID & Salary Certificate / Labour Contract',
      'Attested Ejari Tenancy Contract & Electricity Bill',
      'Attested Marriage Certificate (MOFA & Arabic Translation)',
      'Attested Birth Certificate for Children (MOFA & Arabic Translation)',
      'Sponsored Family Passports (6 months validity)'
    ],
    requirementsAr: [
      'جواز الكفيل وإقامته وهوية الإمارات وشهادة الراتب / عقد العمل',
      'عقد إيجاري موثق وفاتورة هيئة الكهرباء والمياه',
      'عقد الزواج مصدق من الخارجية مع ترجمة قانونية عربية',
      'شهادات ميلاد الأبناء مصدقة ومترجمة',
      'جوازات سفر أفراد الأسرة (سارية لـ 6 أشهر)'
    ],
    whoNeedsItEn: 'UAE residents meeting the minimum monthly salary criterion (typically AED 4,000 or AED 3,000 + accommodation).',
    whoNeedsItAr: 'المقيمون المستوفون لشرط الراتب الشهري (4,000 درهم أو 3,000 درهم + السكن).',
    nextStepsEn: [
      'Document review and eligibility check',
      'Entry permit application typing and approval',
      'Inside-country status change (if already in UAE)',
      'Medical test & Emirates ID typing',
      'Residence visa e-sticker issuance'
    ],
    nextStepsAr: [
      'مراجعة الأوراق والتحقق من الشروط',
      'طباعة طلب إذن الدخول واستلام الموافقة',
      'تعديل الوضع داخل الدولة (إن وجدوا في الإمارات)',
      'طباعة الفحص الطبي والهوية',
      'إصدار الإقامة الإلكترونية المعتمدة'
    ],
    featured: true
  },
  {
    id: 'status-change-inside-country',
    slug: 'inside-country-status-change',
    nameEn: 'Inside-Country Visa Status Change',
    nameAr: 'تعديل وضع التأشيرة داخل الدولة دون مغادرة',
    category: 'visa',
    categoryLabelEn: 'Visa & Immigration',
    categoryLabelAr: 'التأشيرات والإقامة',
    authority: 'GDRFA / ICP',
    authorityAr: 'إقامة دبي / الهيئة الاتحادية',
    shortDescEn: 'Change from tourist/visit visa or cancelled visa to residency without exiting the UAE.',
    shortDescAr: 'تعديل الوضع من زيارة أو إقامة ملغاة إلى إقامة جديدة دون الحاجة لمغادرة الدولة.',
    descriptionEn: 'Legally switch your visa status from tourist visa, on-arrival permit, or previous cancelled residency to your new employment, partner, or investor visa directly inside the UAE without flight exits.',
    descriptionAr: 'تعديل الوضع القانوني للتأشيرة من تأشيرة سياحية أو زيارة أو إقامة سابقة ملغاة إلى الإقامة الجديدة داخل الدولة دون الحاجة للسفر خارج الإمارات.',
    govtFeeMin: 550,
    govtFeeMax: 700,
    typingFeeMin: 100,
    typingFeeMax: 180,
    expressFee: 150,
    processingTimeEn: '2 - 6 Hours',
    processingTimeAr: '2 - 6 ساعات عمل',
    emirateAvailability: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'],
    requirementsEn: [
      'Passport Copy',
      'Current Visit Visa / Cancellation Paper',
      'New Approved Entry Permit / eVisa Copy'
    ],
    requirementsAr: [
      'صورة جواز السفر',
      'تأشيرة الزيارة الحالية أو ورقة إلغاء الإقامة السابقة',
      'نسخة إذن الدخول الجديد المعتمد'
    ],
    whoNeedsItEn: 'Individuals in UAE switching from tourist visa to residency, or transitioning between employers.',
    whoNeedsItAr: 'المتواجدون في الدولة للانتقال من زيارة إلى إقامة أو الانتقال بين شركتين.',
    nextStepsEn: [
      'Issue new Entry Permit',
      'Submit status change application',
      'Receive official status change approval slip',
      'Proceed immediately to medical fitness typing'
    ],
    nextStepsAr: [
      'إصدار إذن الدخول الجديد',
      'تقديم طلب تعديل الوضع',
      'استلام إشعار تعديل الوضع الرسمي',
      'المتابعة فوراً لإجراء الفحص الطبي'
    ]
  },
  {
    id: 'golden-visa-guidance',
    slug: 'golden-visa-eligibility-assistance',
    nameEn: 'Golden Visa (10-Year) Eligibility & Application Assistance',
    nameAr: 'مساعدة وتقديم الإقامة الذهبية (10 سنوات)',
    category: 'golden-visa',
    categoryLabelEn: 'Golden Visa / Green Visa',
    categoryLabelAr: 'الإقامة الذهبية والخضراء',
    authority: 'ICP / GDRFA Dubai / DED',
    authorityAr: 'الهيئة الاتحادية / إقامة دبي / دائرة الاقتصاد والسياحة',
    shortDescEn: 'Comprehensive document audit, nomination submission, and 10-year visa issuance.',
    shortDescAr: 'تدقيق الأهلية وتقديم طلب الترشيح واستكمال الإقامة الذهبية لـ 10 سنوات.',
    descriptionEn: 'Professional advisory and application typing for UAE 10-Year Golden Visa across Real Estate Investors (AED 2M+), Skilled Professionals (AED 30k+ salary), Entrepreneurs, Scientists, and Exceptional Talents. Transparent guidance with 0 false promises.',
    descriptionAr: 'خدمة استشارية وتطبيقية متكاملة للتقديم على الإقامة الذهبية للمستثمرين العقاريين (2 مليون درهم فما فوق)، أصحاب الكفاءات التخصصية، والمديرين التنفيذيين والعلماء.',
    govtFeeMin: 2800,
    govtFeeMax: 4200,
    typingFeeMin: 500,
    typingFeeMax: 1200,
    expressFee: 400,
    processingTimeEn: '3 - 7 Working Days (Nomination + Issuance)',
    processingTimeAr: '3 - 7 أيام عمل (الترشيح والإصدار)',
    emirateAvailability: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'],
    requirementsEn: [
      'Real Estate: Title Deed showing AED 2M+ value from Land Dept / Oqood',
      'Skilled Talent: Attested Bachelor Degree, MoHRE Labour Contract (AED 30k+ salary), 6-month Bank Statement',
      'Passport & Current UAE Visa / Entry Record',
      'Health Insurance Coverage'
    ],
    requirementsAr: [
      'المستثمر العقاري: سند ملكية عقار بقيمة 2 مليون درهم فأكثر من دائرة الأراضي',
      'الكفاءات التخصصية: شهادة جامعية مصدقة، عقد عمل براتب 30 ألف درهم فأكثر، كشف حساب 6 أشهر',
      'جواز السفر والإقامة الحالية سارية',
      'وثيقة التأمين الصحي الشامل'
    ],
    whoNeedsItEn: 'Property buyers with AED 2M+ equity, executive managers earning AED 30,000+, scientists, and business founders.',
    whoNeedsItAr: 'ملاك العقارات بقيمة 2 مليون فأكثر، والمدراء التنفيذيون براتب 30,000 درهم فأكثر والمبتكرون.',
    nextStepsEn: [
      'Initial document audit and eligibility evaluation',
      'Submit Golden Visa nomination to GDRFA / ICP',
      'Receive official approval to proceed',
      'VIP medical test & 10-year Emirates ID typing'
    ],
    nextStepsAr: [
      'تدقيق المستندات والتحقق من الاستحقاق',
      'تقديم طلب الترشيح للهيئة المعنية',
      'استلام الموافقة المبدئية',
      'إجراء الفحص الطبي VIP وطباعة الهوية لـ 10 سنوات'
    ],
    featured: true
  },

  // TASHEEL / MOHRE LABOUR SERVICES
  {
    id: 'new-work-permit-tasheel',
    slug: 'new-work-permit-tasheel',
    nameEn: 'New Work Permit (Tasheel / MOHRE)',
    nameAr: 'إصدار تصريح عمل جديد (تسهيل / وزارة الموارد البشرية)',
    category: 'tasheel',
    categoryLabelEn: 'Tasheel / MOHRE',
    categoryLabelAr: 'تسهيل / وزارة العمل',
    authority: 'Ministry of Human Resources & Emiratisation (MOHRE)',
    authorityAr: 'وزارة الموارد البشرية والتوطين',
    shortDescEn: 'Electronic work permit quota typing, offer letter submission, and labour approval.',
    shortDescAr: 'طباعة تصريح العمل الإلكتروني وعرض العمل واعتماد وزارة العمل.',
    descriptionEn: 'End-to-end corporate labour quota and work permit processing via Tasheel. We prepare standardized MOHRE offer letters, calculate exact fee tiers according to company classification (Category 1, 2, or 3), and secure electronic work permit issuance.',
    descriptionAr: 'معاملات تصاريح العمل الإلكترونية للشركات عبر منظومة تسهيل: إعداد عروض العمل الموحدة، احتساب فئات المنشأة (الفئة الأولى، الثانية أو الثالثة) وإصدار التصريح.',
    govtFeeMin: 250,
    govtFeeMax: 3200,
    typingFeeMin: 120,
    typingFeeMax: 220,
    expressFee: 150,
    processingTimeEn: '24 - 48 Hours',
    processingTimeAr: '24 - 48 ساعة عمل',
    emirateAvailability: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'],
    requirementsEn: [
      'Valid Company Trade License & Establishment Card',
      'Applicant Passport Copy & Personal Photo',
      'Attested Educational Degree (for skill levels 1-3)',
      'Signed Standard MOHRE Job Offer Letter'
    ],
    requirementsAr: [
      'رخصة تجارية سارية وبطاقة المنشأة',
      'صورة جواز سفر الموظف والصورة الشخصية',
      'مؤهل علمي مصدق (للمستويات المهارية 1-3)',
      'عرض العمل الموحد موقع من الطرفين'
    ],
    whoNeedsItEn: 'UAE mainland companies hiring new international or local staff.',
    whoNeedsItAr: 'الشركات داخل الدولة لتعيين موظفين جدد من داخل أو خارج الدولة.',
    nextStepsEn: [
      'Quota check and Job Offer submission',
      'Candidate e-signature on official offer',
      'Work permit fee payment based on company category',
      'Work permit approval slip issued for Entry Permit'
    ],
    nextStepsAr: [
      'التحقق من الكوتة وتقديم عرض العمل',
      'توقيع المرشح إلكترونياً على العرض',
      'سداد رسوم التصريح حسب تصنيف الشركة',
      'استلام إشعار موافقة تصريح العمل'
    ],
    featured: true
  },
  {
    id: 'labour-contract-modification',
    slug: 'labour-contract-submission-modification',
    nameEn: 'Labour Contract Submission & Modification',
    nameAr: 'طباعة وتعديل وتصديق عقد العمل (تسهيل)',
    category: 'tasheel',
    categoryLabelEn: 'Tasheel / MOHRE',
    categoryLabelAr: 'تسهيل / وزارة العمل',
    authority: 'MOHRE UAE',
    authorityAr: 'وزارة الموارد البشرية والتوطين',
    shortDescEn: 'Draft, amend salary, job title, and submit contracts to MOHRE online.',
    shortDescAr: 'صياغة وتعديل الراتب والمسمى الوظيفي واعتماد عقد العمل إلكترونياً.',
    descriptionEn: 'Fast typing for new employment contracts, salary amendments for WPS compliance, job title upgrades, and contract renewals aligned with UAE Federal Decree-Law No. 33 of 2021 on the Regulation of Labour Relations.',
    descriptionAr: 'طباعة عقود العمل الموحدة، تعديل الرواتب لمطابقة نظام حماية الأجور (WPS)، تعديل المسميات الوظيفية وتجديد العقود حسب قانون العمل الاتحادي.',
    govtFeeMin: 100,
    govtFeeMax: 300,
    typingFeeMin: 80,
    typingFeeMax: 150,
    expressFee: 100,
    processingTimeEn: '24 Hours',
    processingTimeAr: '24 ساعة عمل',
    emirateAvailability: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'],
    requirementsEn: [
      'Company Establishment Card & PRO Credentials',
      'Employee Emirates ID & Passport Copy',
      'New Job Description or Salary Breakdown',
      'Signed Modification Request form'
    ],
    requirementsAr: [
      'بطاقة المنشأة واعتماد المندوب',
      'هوية وجواز سفر الموظف',
      'بيانات المسمى الجديد أو تفاصيل الراتب',
      'طلب التعديل موقع من الطرفين'
    ],
    whoNeedsItEn: 'Companies updating employee terms, promoting staff, or correcting WPS wage disparities.',
    whoNeedsItAr: 'الشركات الراغبة بتعديل شروط التعاقد أو تعديل الأجور وتجنب مخالفات حماية الأجور.',
    nextStepsEn: [
      'Submit contract amendment application',
      'Digital signature by authorized signatory and employee',
      'MOHRE approval and updated electronic contract record'
    ],
    nextStepsAr: [
      'تقديم طلب التعديل إلكترونياً',
      'التوقيع الرقمي من المفوض والموظف',
      'اعتماد الوزارة وتحديث بيانات العقد'
    ]
  },
  {
    id: 'establishment-card-pro',
    slug: 'establishment-card-opening-renewal',
    nameEn: 'Establishment Card (Immigration & Labour)',
    nameAr: 'إصدار وتجديد بطاقة المنشأة (الجوازات والعمل)',
    category: 'business',
    categoryLabelEn: 'Business & PRO Services',
    categoryLabelAr: 'خدمات الشركات والعلاقات العامة',
    authority: 'GDRFA / ICP & MOHRE',
    authorityAr: 'الجوازات ووزارة الموارد البشرية',
    shortDescEn: 'Open or renew company immigration files and MOHRE establishment profiles.',
    shortDescAr: 'فتح وتجديد ملف المنشأة لدى الجوازات وبطاقة العمل للشركات.',
    descriptionEn: 'Essential institutional service for newly incorporated businesses and renewing companies. We open immigration establishment files, renew labour establishment cards, update authorized signatories, and ensure quota readiness.',
    descriptionAr: 'خدمة أساسية لتأسيس ملف الشركة لدى الإدارة العامة للإقامة وشؤون الأجانب وتجديد بطاقة المنشأة في وزارة العمل وتحديث صلاحيات التوقيع.',
    govtFeeMin: 750,
    govtFeeMax: 2200,
    typingFeeMin: 150,
    typingFeeMax: 300,
    expressFee: 200,
    processingTimeEn: '24 - 48 Hours',
    processingTimeAr: '24 - 48 ساعة عمل',
    emirateAvailability: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'],
    requirementsEn: [
      'Valid Trade License Copy',
      'Memorandum of Association (MOA) / Local Service Agent Agreement',
      'Partners / Signatories Passports & Emirates IDs',
      'Attested Ejari / Commercial Lease Agreement'
    ],
    requirementsAr: [
      'نسخة الرخصة التجارية سارية المفعول',
      'عقد التأسيس أو اتفاقية وكيل الخدمات',
      'جوازات وهوية الشركاء والمفوضين بالتوقيع',
      'عقد إيجاري تجاري موثق'
    ],
    whoNeedsItEn: 'New company owners, business founders, and corporate entities renewing commercial records.',
    whoNeedsItAr: 'أصحاب الشركات الجديدة والمنشآت المجددة لسجلاتها التجارية.',
    nextStepsEn: [
      'Verify company legal records',
      'Draft electronic application with Immigration & Labour portals',
      'Upload authorized signatory documentation',
      'Receive official active Establishment Card'
    ],
    nextStepsAr: [
      'تدقيق الوثائق القانونية للشركة',
      'طباعة الطلب عبر بوابات الإقامة والعمل',
      'رفع بيانات المفوضين بالتوقيع',
      'استلام بطاقة المنشأة المعتمدة'
    ]
  },

  // TRANSLATION & ATTESTATION
  {
    id: 'mofa-attestation',
    slug: 'mofa-document-attestation',
    nameEn: 'MOFA UAE Document Attestation',
    nameAr: 'تصديق المستندات من وزارة الخارجية والتعاون الدولي',
    category: 'translation',
    categoryLabelEn: 'Translation & Attestation',
    categoryLabelAr: 'الترجمة والتصديقات',
    authority: 'Ministry of Foreign Affairs (MOFA UAE)',
    authorityAr: 'وزارة الخارجية والتعاون الدولي',
    shortDescEn: 'Official digital e-attestation and physical QR certification for international papers.',
    shortDescAr: 'التصديق الرقمي الرسمي ورمز الاستجابة السريعة (QR) للوثائق الدولية.',
    descriptionEn: 'Fast-track document legalization with the UAE Ministry of Foreign Affairs for foreign degree certificates, birth/marriage certificates, corporate board resolutions, powers of attorney, and commercial contracts.',
    descriptionAr: 'تصديق رسمي للمستندات من وزارة الخارجية الإماراتية للشهادات التعليمية، عقود الزواج والميلاد، والوكالات القانونية والقرارات التجارية الصادرة من الخارج.',
    govtFeeMin: 150,
    govtFeeMax: 2000,
    typingFeeMin: 80,
    typingFeeMax: 180,
    expressFee: 120,
    processingTimeEn: '24 Hours (Digital e-Attestation) / 48h (Physical Stamp)',
    processingTimeAr: '24 ساعة (تصديق رقمي) / 48 ساعة (ختم فعلي)',
    emirateAvailability: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'],
    requirementsEn: [
      'Original Document or certified true copy',
      'Home country Ministry of Foreign Affairs stamp & UAE Embassy stamp (for foreign papers)',
      'Applicant Emirates ID / Passport copy'
    ],
    requirementsAr: [
      'أصل المستند أو نسخة طبق الأصل مصدقة',
      'ختم خارجية بلد المنشأ وختم سفارة الإمارات (للوثائق الأجنبية)',
      'صورة الهوية أو جواز السفر'
    ],
    whoNeedsItEn: 'Residents sponsoring families, professionals submitting educational certificates to MOHRE, and corporate legal teams.',
    whoNeedsItAr: 'المقيمون لكفالة الأسرة، المهنيون لتقديم المؤهلات لوزارة العمل، والشركات.',
    nextStepsEn: [
      'Verify prior embassy stamps on document',
      'Submit to official MOFA electronic portal',
      'Receive official MOFA digital verification QR code',
      'Deliver physical paper or digital attestation slip'
    ],
    nextStepsAr: [
      'التحقق من أختام السفارة المسبقة',
      'التقديم عبر بوابة وزارة الخارجية الرسمية',
      'استلام رمز التحقق الرقمي الرسمي (QR)',
      'تسليم المستند المصدق'
    ],
    featured: true
  },
  {
    id: 'legal-translation-arabic',
    slug: 'certified-legal-translation-arabic-english',
    nameEn: 'Certified Legal Translation (Arabic ↔ English & 15+ Languages)',
    nameAr: 'ترجمة قانونية معتمدة (عربي ↔ إنجليزي ولغات متعددة)',
    category: 'translation',
    categoryLabelEn: 'Translation & Attestation',
    categoryLabelAr: 'الترجمة والتصديقات',
    authority: 'Ministry of Justice (MOJ UAE)',
    authorityAr: 'وزارة العدل الإماراتية',
    shortDescEn: 'Sworn translators certified by the Ministry of Justice for all UAE courts & ministries.',
    shortDescAr: 'مترجمون محلفون معتمدون من وزارة العدل لكافة المحاكم والوزارات في الدولة.',
    descriptionEn: 'Certified translation for legal, corporate, immigration, and educational documents recognized by UAE Courts, Notary Public, GDRFA, MOHRE, and Embassies. Stamped with sworn Ministry of Justice seals.',
    descriptionAr: 'ترجمة معتمدة لكافة الوثائق القانونية، التجارية، وتأشيرات الإقامة معترف بها لدى محاكم الدولة، الكاتب العدل، الجوازات، والوزارات مع ختم المترجم القانوني.',
    govtFeeMin: 0,
    govtFeeMax: 50,
    typingFeeMin: 90,
    typingFeeMax: 200,
    expressFee: 80,
    processingTimeEn: '2 - 6 Hours (Standard) / 1 Hour (Express)',
    processingTimeAr: '2 - 6 ساعات (عادي) / ساعة واحدة (فوري)',
    emirateAvailability: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'],
    requirementsEn: [
      'High-quality scan or photo of original document',
      'Passport name spelling preference (to match visa records perfectly)'
    ],
    requirementsAr: [
      'مسح ضوئي عالي الجودة أو صورة واضحة للمستند الأصلي',
      'الاسم بالإنجليزية والعربية لمطابقة الجواز تماماً'
    ],
    whoNeedsItEn: 'Anyone submitting foreign language certificates, court filings, contracts, or marriage/birth papers in the UAE.',
    whoNeedsItAr: 'أي شخص يقدم وثائق بلغة أجنبية للجهات الحكومية أو القضائية في الدولة.',
    nextStepsEn: [
      'Send document via WhatsApp or web uploader',
      'Certified translation produced by licensed MOJ translator',
      'Stamped soft copy delivered instantly + hard copies with courier option'
    ],
    nextStepsAr: [
      'إرسال المستند عبر الواتساب أو الموقع',
      'إنجاز الترجمة من مترجم معتمد من وزارة العدل',
      'استلام النسخة الإلكترونية المختومة مع إمكانية التوصيل'
    ]
  },

  // EJARI / PROPERTY
  {
    id: 'ejari-registration',
    slug: 'ejari-tenancy-contract-registration',
    nameEn: 'Ejari Registration & Certificate Typing',
    nameAr: 'تسجيل وتوثيق عقد الإيجار (إيجاري دبي)',
    category: 'ejari',
    categoryLabelEn: 'Ejari & Property',
    categoryLabelAr: 'إيجاري والعقارات',
    authority: 'Dubai Land Department (DLD) / Real Estate Regulatory Agency (RERA)',
    authorityAr: 'دائرة الأراضي والأملاك في دبي / ريرا',
    shortDescEn: 'Instant official Ejari registration for residential & commercial leases in Dubai.',
    shortDescAr: 'توثيق فوري لعقد الإيجار السكني والتجاري وإصدار شهادة إيجاري الرسمية.',
    descriptionEn: 'Quick electronic Ejari registration service connecting tenant, landlord, and DEWA accounts. Essential for family visa sponsorship, trade license renewals, and legal lease validity.',
    descriptionAr: 'خدمة التوثيق الإلكتروني السريع لعقود الإيجار السكنية والتجارية، وربطها الفوري مع حسابات هيئة كهرباء ومياه دبي (ديوا) لكفالة الأسرة وتجديد الرخص.',
    govtFeeMin: 175,
    govtFeeMax: 220,
    typingFeeMin: 70,
    typingFeeMax: 130,
    expressFee: 80,
    processingTimeEn: '1 - 3 Hours',
    processingTimeAr: '1 - 3 ساعات عمل',
    emirateAvailability: ['Dubai'],
    requirementsEn: [
      'Signed Unified Tenancy Contract',
      'Tenant Passport, Visa, Emirates ID Copy',
      'Landlord Passport Copy / Trade License (if corporate landlord)',
      'Title Deed (Oqood/Deed) & Premises 9-digit DEWA Number'
    ],
    requirementsAr: [
      'عقد الإيجار الموحد موقع من الطرفين',
      'صورة جواز وهوية وإقامة المستأجر',
      'صورة جواز المالك أو الرخصة التجارية (إذا كان المالك شركة)',
      'سند ملكية العقار ورقم المبنى/المقدمة لدى ديوا (9 أرقام)'
    ],
    whoNeedsItEn: 'Tenants in Dubai needing Ejari for family visas, DEWA connection, or company trade licensing.',
    whoNeedsItAr: 'المستأجرون في دبي لكفالة العائلة أو تفعيل الكهرباء أو رخص الشركات.',
    nextStepsEn: [
      'Upload signed contract & title deed',
      'We register data directly on DLD Ejari portal',
      'Receive official Ejari Certificate with QR code and DEWA move-in activation'
    ],
    nextStepsAr: [
      'رفع العقد وسند الملكية',
      'تسجيل البيانات مباشرة عبر بوابة أراضي دبي',
      'استلام شهادة إيجاري الرسمية مع رمز QR وتفعيل ديوا'
    ]
  },

  // LEGAL & DOCUMENT PREPARATION
  {
    id: 'power-of-attorney-typing',
    slug: 'power-of-attorney-drafting-notary',
    nameEn: 'Power of Attorney (POA) Drafting & Notary Typing',
    nameAr: 'صياغة وطباعة الوكالات القانونية للكاتب العدل',
    category: 'documents',
    categoryLabelEn: 'Document Services',
    categoryLabelAr: 'خدمات المستندات',
    authority: 'Dubai Courts / Abu Dhabi Judicial Department (ADJD)',
    authorityAr: 'محاكم دبي / دائرة القضاء أبوظبي',
    shortDescEn: 'Bilingual legal drafting for general, vehicle, property, and corporate powers of attorney.',
    shortDescAr: 'صياغة قانونية ثنائية اللغة للوكالات العامة والخاصة وتصرفات العقارات والمركبات.',
    descriptionEn: 'Professional bilingual legal drafting of General Powers of Attorney, Special POAs for Real Estate, Vehicle Management, Business Management, and Court Representation formatted for instant remote or in-person Notary Public attestation.',
    descriptionAr: 'صياغة قانونية دقيقة للوكالات العامة والخاصة (إدارة عقارات، بيع وشراء مركبات، إدارة شركات، تمثيل قضائي) مطابقة لمتطلبات الكاتب العدل الرقمي.',
    govtFeeMin: 250,
    govtFeeMax: 1200,
    typingFeeMin: 120,
    typingFeeMax: 280,
    expressFee: 150,
    processingTimeEn: '2 - 4 Hours',
    processingTimeAr: '2 - 4 ساعات',
    emirateAvailability: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'],
    requirementsEn: [
      'Principal (Grantor) Passport & Emirates ID',
      'Attorney (Agent) Passport & Emirates ID',
      'Property / Asset details (Title Deed or Vehicle Mulkiya if special POA)'
    ],
    requirementsAr: [
      'جواز وهوية الموكل',
      'جواز وهوية الوكيل',
      'بيانات العقار أو المركبة (سند الملكية أو الملكية إن كانت وكالة خاصة)'
    ],
    whoNeedsItEn: 'Individuals delegating property management, business partners traveling abroad, and corporate directors.',
    whoNeedsItAr: 'المستثمرون والأفراد الراغبون بتوكيل إدارة أملاكهم أو تسيير أعمالهم أثناء السفر.',
    nextStepsEn: [
      'Consultation on required powers & scope',
      'Bilingual Arabic/English legal draft generated',
      'Submit to Remote Digital Notary Public video session or in-person booking',
      'Receive official stamped electronic POA'
    ],
    nextStepsAr: [
      'تحديد نطاق وصلاحيات الوكالة المطلوبة',
      'إعداد الصيغة القانونية باللغتين العربية والإنجليزية',
      'التقديم لجلسة الكاتب العدل الرقمي عن بُعد أو حجز موعد حضوري',
      'استلام الوكالة الرسمية المعتمدة إلكترونياً'
    ]
  },
  {
    id: 'trade-license-renewal-typing',
    slug: 'trade-license-renewal-assistance',
    nameEn: 'Trade License Renewal & Voucher Typing',
    nameAr: 'تجديد الرخصة التجارية وطباعة إذن الدفع',
    category: 'business',
    categoryLabelEn: 'Business & PRO Services',
    categoryLabelAr: 'خدمات الشركات والعلاقات العامة',
    authority: 'Dubai Economy and Tourism (DET) / Abu Dhabi DED / Sharjah SEDD',
    authorityAr: 'دائرة الاقتصاد والسياحة بدبي / دوائر التنمية الاقتصادية',
    shortDescEn: 'Commercial license renewal, lease voucher verification, and business continuity.',
    shortDescAr: 'تجديد الرخصة التجارية وتدقيق إذن الدفع وتوثيق عقود الإيجار.',
    descriptionEn: 'Full support for mainland commercial, professional, and industrial trade license renewals. We coordinate Ejari validation, external government approvals (Civil Defense, Municipality), and generate payment vouchers.',
    descriptionAr: 'تجديد الرخص التجارية والمهنية والصناعية في الدوائر الاقتصادية مع مطابقة عقد إيجاري والموافقات الخارجية (الدفاع المدني، البلدية) وطباعة إذن الدفع.',
    govtFeeMin: 3000,
    govtFeeMax: 18000,
    typingFeeMin: 180,
    typingFeeMax: 450,
    expressFee: 250,
    processingTimeEn: '24 Hours',
    processingTimeAr: '24 ساعة عمل',
    emirateAvailability: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Al Ain'],
    requirementsEn: [
      'Copy of current Trade License',
      'Valid Ejari / Commercial Tenancy Contract',
      'Partners / Local Sponsor Emirates IDs',
      'External Approvals (if industry-specific)'
    ],
    requirementsAr: [
      'نسخة الرخصة التجارية الحالية',
      'عقد إيجاري تجاري ساري المفعول',
      'هويات الشركاء ووكيل الخدمات المحلي',
      'الموافقات الخارجية إن وجدت'
    ],
    whoNeedsItEn: 'Mainland business owners and corporate entities in the UAE.',
    whoNeedsItAr: 'أصحاب الشركات والمؤسسات التجارية في البر الرئيسي بدولة الإمارات.',
    nextStepsEn: [
      'Review license and verify Ejari expiry',
      'Submit renewal request to relevant Economic Department',
      'Generate official government payment voucher',
      'Deliver updated renewed license copy'
    ],
    nextStepsAr: [
      'تدقيق الرخصة والتحقق من صلاحية إيجاري',
      'تقديم طلب التجديد للدائرة الاقتصادية',
      'طباعة إذن الدفع الحكومي الرسمي',
      'تسليم الرخصة التجارية المجددة'
    ]
  }
];

export const EMIRATES_DATA: EmirateInfo[] = [
  {
    id: 'dubai',
    nameEn: 'Dubai',
    nameAr: 'دبي',
    primaryAuthorityEn: 'GDRFA Dubai / Amer / Tasheel / DLD',
    primaryAuthorityAr: 'إقامة دبي / آمر / تسهيل / أراضي دبي',
    serviceHighlightsEn: ['Amer Residency Services', 'Ejari Online Certification', 'Tasheel Labour Portals', 'VIP Medical Typing'],
    serviceHighlightsAr: ['خدمات آمر وتأشيرات دبي', 'توثيق إيجاري الفوري', 'معاملات تسهيل للشركات', 'طباعة الفحص الطبي VIP'],
    popularServices: ['eid-renewal', 'residence-visa-renewal', 'ejari-registration', 'golden-visa-guidance'],
    centreHoursEn: 'Mon - Fri: 8:00 AM - 8:00 PM | Sat - Sun: 9:00 AM - 6:00 PM',
    centreHoursAr: 'الإثنين - الجمعة: 8:00 ص - 8:00 م | السبت - الأحد: 9:00 ص - 6:00 م'
  },
  {
    id: 'abu-dhabi',
    nameEn: 'Abu Dhabi',
    nameAr: 'أبوظبي',
    primaryAuthorityEn: 'ICP UAE / TAMM / Abu Dhabi Judicial Dept',
    primaryAuthorityAr: 'الهيئة الاتحادية / تم / دائرة القضاء',
    serviceHighlightsEn: ['ICP Smart Services', 'TAMM Government Integrations', 'Golden Visa Abu Dhabi', 'ADJD Notary Typing'],
    serviceHighlightsAr: ['منظومة الهيئة الاتحادية الذكية', 'خدمات منصة تَم الحكومية', 'الإقامة الذهبية بأبوظبي', 'وكالات دائرة القضاء'],
    popularServices: ['eid-renewal', 'eid-new', 'golden-visa-guidance', 'mofa-attestation'],
    centreHoursEn: 'Mon - Fri: 8:00 AM - 7:30 PM | Sat: 9:00 AM - 5:00 PM',
    centreHoursAr: 'الإثنين - الجمعة: 8:00 ص - 7:30 م | السبت: 9:00 ص - 5:00 م'
  },
  {
    id: 'sharjah',
    nameEn: 'Sharjah',
    nameAr: 'الشارقة',
    primaryAuthorityEn: 'ICP Sharjah / SEDD / Sharjah Tasheel',
    primaryAuthorityAr: 'الهيئة الاتحادية بالشارقة / التنمية الاقتصادية / تسهيل',
    serviceHighlightsEn: ['Family Residency Sponsorship', 'MOHRE Work Permits', 'SEDD License Typing', 'Legal Arabic Translations'],
    serviceHighlightsAr: ['كفالة وإقامات الأسرة', 'تصاريح عمل تسهيل', 'طباعة رخص التنمية الاقتصادية', 'الترجمة القانونية المعتمدة'],
    popularServices: ['residence-visa-renewal', 'family-visa-sponsorship', 'new-work-permit-tasheel', 'legal-translation-arabic'],
    centreHoursEn: 'Mon - Fri: 8:00 AM - 7:00 PM | Sat: 9:00 AM - 4:00 PM',
    centreHoursAr: 'الإثنين - الجمعة: 8:00 ص - 7:00 م | السبت: 9:00 ص - 4:00 م'
  },
  {
    id: 'ajman',
    nameEn: 'Ajman',
    nameAr: 'عجمان',
    primaryAuthorityEn: 'ICP Ajman / Ajman DED / Tasheel',
    primaryAuthorityAr: 'الهيئة الاتحادية بعجمان / اقتصادية عجمان / تسهيل',
    serviceHighlightsEn: ['Express Emirates ID', 'Commercial PRO Services', 'Tasheel Labour Contracts', 'Attestation Handling'],
    serviceHighlightsAr: ['طباعة الهوية الفورية', 'خدمات الشركات والعلاقات العامة', 'عقود العمل بتسهيل', 'تصديقات وزارة الخارجية'],
    popularServices: ['eid-renewal', 'new-work-permit-tasheel', 'mofa-attestation'],
    centreHoursEn: 'Mon - Fri: 8:30 AM - 6:30 PM',
    centreHoursAr: 'الإثنين - الجمعة: 8:30 ص - 6:30 م'
  },
  {
    id: 'ras-al-khaimah',
    nameEn: 'Ras Al Khaimah',
    nameAr: 'رأس الخيمة',
    primaryAuthorityEn: 'ICP RAK / RAK DED / Tasheel',
    primaryAuthorityAr: 'الهيئة الاتحادية برأس الخيمة / اقتصادية رأس الخيمة',
    serviceHighlightsEn: ['Residency Issuance & Renewal', 'Corporate Labour Typing', 'POA Drafting', 'Family Sponsorship'],
    serviceHighlightsAr: ['إصدار وتجديد الإقامات', 'طباعة معاملات العمالة', 'صياغة الوكالات القانونية', 'كفالة العائلات'],
    popularServices: ['residence-visa-renewal', 'family-visa-sponsorship', 'power-of-attorney-typing'],
    centreHoursEn: 'Mon - Fri: 8:30 AM - 6:00 PM',
    centreHoursAr: 'الإثنين - الجمعة: 8:30 ص - 6:00 م'
  },
  {
    id: 'fujairah',
    nameEn: 'Fujairah',
    nameAr: 'الفجيرة',
    primaryAuthorityEn: 'ICP Fujairah / Fujairah Municipality / Tasheel',
    primaryAuthorityAr: 'الهيئة الاتحادية بالفجيرة / بلدية الفجيرة',
    serviceHighlightsEn: ['Immigration File Services', 'Tasheel Quota Applications', 'Emirates ID Biometrics Prep'],
    serviceHighlightsAr: ['خدمات ملفات الإقامة', 'طلبات كوتة تسهيل', 'تنسيق مواعيد بصمة الهوية'],
    popularServices: ['eid-new', 'residence-visa-renewal', 'new-work-permit-tasheel'],
    centreHoursEn: 'Mon - Fri: 8:30 AM - 5:30 PM',
    centreHoursAr: 'الإثنين - الجمعة: 8:30 ص - 5:30 م'
  },
  {
    id: 'umm-al-quwain',
    nameEn: 'Umm Al Quwain',
    nameAr: 'أم القيوين',
    primaryAuthorityEn: 'ICP UAQ / UAQ DED / Tasheel',
    primaryAuthorityAr: 'الهيئة الاتحادية بأم القيوين / اقتصادية أم القيوين',
    serviceHighlightsEn: ['Establishment Card Updates', 'Fast Visa Extensions', 'Document Translation'],
    serviceHighlightsAr: ['تحديث بطاقات المنشأة', 'تمديد الزيارات وتعديل الوضع', 'الترجمة القانونية'],
    popularServices: ['establishment-card-pro', 'status-change-inside-country', 'legal-translation-arabic'],
    centreHoursEn: 'Mon - Fri: 8:30 AM - 5:30 PM',
    centreHoursAr: 'الإثنين - الجمعة: 8:30 ص - 5:30 م'
  },
  {
    id: 'al-ain',
    nameEn: 'Al Ain',
    nameAr: 'العين',
    primaryAuthorityEn: 'ICP Al Ain / TAMM Regional Center',
    primaryAuthorityAr: 'الهيئة الاتحادية بالعين / مركز تم الإقليمي',
    serviceHighlightsEn: ['Eastern Region Family Visas', 'ICP Biometrics Coordination', 'Judicial Powers of Attorney'],
    serviceHighlightsAr: ['إقامات الأسرة بالمنطقة الشرقية', 'تنسيق مواعيد الهوية', 'وكالات الكاتب العدل'],
    popularServices: ['eid-renewal', 'family-visa-sponsorship', 'power-of-attorney-typing'],
    centreHoursEn: 'Mon - Fri: 8:00 AM - 6:30 PM',
    centreHoursAr: 'الإثنين - الجمعة: 8:00 ص - 6:30 م'
  }
];

export const AUTHORITIES_DIRECTORY: AuthorityInfo[] = [
  {
    id: 'icp',
    code: 'ICP UAE',
    nameEn: 'Federal Authority for Identity, Citizenship, Customs & Port Security',
    nameAr: 'الهيئة الاتحادية للهوية والجنسية والجمارك وأمن المنافذ',
    roleEn: 'Issues Emirates IDs, Federal Residency permits, entry visas, and UAE passport services.',
    roleAr: 'إصدار بطاقات الهوية، الإقامات الاتحادية، أذونات الدخول وخدمات الجوازات.',
    jurisdictionEn: 'Federal (Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, UAQ & Federal Dubai)',
    jurisdictionAr: 'اتحادي (أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، أم القيوين ودبي)',
    iconName: 'ShieldCheck'
  },
  {
    id: 'gdrfa',
    code: 'GDRFA Dubai / Amer',
    nameEn: 'General Directorate of Residency and Foreigners Affairs Dubai',
    nameAr: 'الإدارة العامة للإقامة وشؤون الأجانب - دبي',
    roleEn: 'Governs Dubai entry permits, Golden Visas, residence visas, and establishment immigration files.',
    roleAr: 'المسؤولة عن تأشيرات وإقامات دبي، الإقامة الذهبية وملفات إقامة الشركات.',
    jurisdictionEn: 'Emirate of Dubai',
    jurisdictionAr: 'إمارة دبي',
    iconName: 'Building'
  },
  {
    id: 'mohre',
    code: 'MOHRE / Tasheel',
    nameEn: 'Ministry of Human Resources and Emiratisation',
    nameAr: 'وزارة الموارد البشرية والتوطين (تسهيل)',
    roleEn: 'Regulates mainland employment contracts, work permits, labour disputes, and WPS compliance.',
    roleAr: 'تنظيم عقود العمل في البر الرئيسي، تصاريح العمل، نظام حماية الأجور والمنازعات العمالية.',
    jurisdictionEn: 'UAE Mainland Nationwide',
    jurisdictionAr: 'كافة منشآت البر الرئيسي في الدولة',
    iconName: 'Briefcase'
  },
  {
    id: 'mofa',
    code: 'MOFA UAE',
    nameEn: 'Ministry of Foreign Affairs & International Cooperation',
    nameAr: 'وزارة الخارجية والتعاون الدولي',
    roleEn: 'Legalizes commercial, educational, and personal certificates for domestic and international validity.',
    roleAr: 'تصديق واعتماد الشهادات التعليمية والتجارية والشخصية لاستخدامها داخل وخارج الدولة.',
    jurisdictionEn: 'Federal UAE & Embassies Worldwide',
    jurisdictionAr: 'دولة الإمارات والبعثات الدبلوماسية',
    iconName: 'FileCheck'
  },
  {
    id: 'dld',
    code: 'DLD / Ejari',
    nameEn: 'Dubai Land Department & RERA',
    nameAr: 'دائرة الأراضي والأملاك في دبي ومؤسسة التنظيم العقاري',
    roleEn: 'Manages Ejari tenancy contract attestation, title deed registry, and property legal validation.',
    roleAr: 'إدارة وتوثيق عقود الإيجار (إيجاري)، سجلات الملكية العقارية والنزاعات الإيجارية.',
    jurisdictionEn: 'Emirate of Dubai',
    jurisdictionAr: 'إمارة دبي',
    iconName: 'Home'
  },
  {
    id: 'moj',
    code: 'MOJ UAE',
    nameEn: 'Ministry of Justice & Notary Public',
    nameAr: 'وزارة العدل والكاتب العدل',
    roleEn: 'Licenses certified legal translators, oversees powers of attorney, and legal contract declarations.',
    roleAr: 'ترخيص المترجمين القانونيين وتوثيق الوكالات القانونية والعقود الرسمية.',
    jurisdictionEn: 'Federal Courts & Notary Divisions',
    jurisdictionAr: 'المحاكم الاتحادية ودوائر الكاتب العدل',
    iconName: 'Scale'
  }
];

export const DEMO_RENEWAL_ALERTS: RenewalAlert[] = [
  {
    id: 'alert-1',
    titleEn: 'Employee Residence Visa',
    titleAr: 'إقامة موظف سارية',
    type: 'visa',
    daysLeft: 24,
    holderName: 'Alexander Vance',
    companyName: 'Apex Capital Partners LLC',
    urgency: 'high'
  },
  {
    id: 'alert-2',
    titleEn: 'Emirates ID Renewal',
    titleAr: 'تجديد بطاقة الهوية',
    type: 'eid',
    daysLeft: 41,
    holderName: 'Fatima Al Mansoori',
    urgency: 'medium'
  },
  {
    id: 'alert-3',
    titleEn: 'Commercial Trade License',
    titleAr: 'الرخصة التجارية للمنشأة',
    type: 'license',
    daysLeft: 58,
    holderName: 'Managing Director',
    companyName: 'Vertex Engineering Services FZCO',
    urgency: 'medium'
  },
  {
    id: 'alert-4',
    titleEn: 'MOHRE Labour Card',
    titleAr: 'بطاقة عمل تسهيل',
    type: 'labour',
    daysLeft: 73,
    holderName: 'Tariq Mahmoud',
    companyName: 'Apex Capital Partners LLC',
    urgency: 'normal'
  }
];

export const TYPING_FAQS = [
  {
    qEn: 'What is the clear difference between Government Fees and Typing/Service Fees?',
    qAr: 'ما هو الفرق الواضح بين الرسوم الحكومية ورسوم الطباعة والخدمة؟',
    aEn: 'Government fees are statutory charges mandated directly by UAE authorities (such as ICP, GDRFA, MOHRE, or MOFA) for processing and issuing official permits or cards. Typing and service fees are professional charges by our center for application drafting, document audit, translation, biometric scheduling, error-checking, and continuous tracking until completion.',
    aAr: 'الرسوم الحكومية هي الرسوم الرسمية المقررة من الجهات الحكومية (مثل الهيئة الاتحادية، إقامة دبي، وزارة العمل أو الخارجية) لإصدار الوثائق. أما رسوم الطباعة والخدمة فهي أتعاب المركز مقابل تدقيق المستندات، الترجمة، صياغة الطلب، حجز المواعيد والمتابعة المستمرة حتى التسليم.'
  },
  {
    qEn: 'How much does Emirates ID renewal typing cost in the UAE?',
    qAr: 'كم تبلغ تكلفة طباعة تجديد بطاقة الهوية الإماراتية في الدولة؟',
    aEn: 'Typical professional typing fees range from AED 50 to AED 120 depending on the application complexity and speed requirements. The official ICP government fee is separate (typically AED 170 for 1 year, AED 270 for 2 years, or AED 370 for 3 years for expatriates).',
    aAr: 'تتراوح رسوم الطباعة المعتادة بين 50 إلى 120 درهماً حسب متطلبات الخدمة وسرعتها. وتُحتسب الرسوم الحكومية للهيئة الاتحادية بشكل منفصل (عادة 170 درهماً لسنة واحدة، 270 درهماً لسنتين، أو 370 درهماً لـ 3 سنوات للمقيمين).'
  },
  {
    qEn: 'Can I renew or switch my UAE visa without leaving the country?',
    qAr: 'هل يمكنني تجديد أو تعديل وضع التأشيرة دون الحاجة للسفر خارج الإمارات؟',
    aEn: 'Yes. Inside-country visa status changes allow individuals transitioning from tourist visas or cancelled residencies to activate new entry permits without airport departures. Official government status change fees and typing fees apply.',
    aAr: 'نعم، تتيح خدمة تعديل الوضع الداخلي الانتقال من التأشيرات السياحية أو الإقامات الملغاة إلى إذن الدخول الجديد مباشرة دون الحاجة لمغادرة الدولة عبر المطارات والمنافذ.'
  },
  {
    qEn: 'What documents are required to sponsor my family (wife and children)?',
    qAr: 'ما هي المستندات المطلوبة لكفالة الأسرة (الزوجة والأولاد)؟',
    aEn: 'Key requirements include: Sponsor passport, valid residency, Emirates ID, official salary certificate/labour contract (min salary AED 4,000 or AED 3,000 + accommodation), attested Ejari tenancy contract, electricity bill, and MOFA-attested marriage and birth certificates with certified Arabic legal translation.',
    aAr: 'تشمل المتطلبات الأساسية: جواز وهوية وإقامة الكفيل، شهادة الراتب المعتمدة أو عقد العمل (الحد الأدنى 4,000 درهم أو 3,000 درهم + السكن)، عقد إيجاري موثق وفاتورة ديوا، وشهادات الزواج والميلاد مصدقة من الخارجية مع ترجمة قانونية عربية.'
  },
  {
    qEn: 'How do you assist with the 10-Year Golden Visa application?',
    qAr: 'كيف تساعدون في التقديم على الإقامة الذهبية لـ 10 سنوات؟',
    aEn: 'We conduct a thorough preliminary audit of your eligibility criteria (Real Estate AED 2M+, Executive Professionals AED 30k+ salary, Specialized Talents, or Entrepreneurs), assemble the required verified documentation, draft the nomination application to GDRFA or ICP, and coordinate your VIP medical fitness and 10-year Emirates ID typing upon approval. We never make false claims of automatic approval, ensuring 100% regulatory compliance.',
    aAr: 'نقوم بالتدقيق الأولي لشرط الأهلية (مستثمر عقاري 2 مليون فأكثر، مدير تنفيذي براتب 30 ألف فأكثر، أو كفاءة تخصصية)، تجهيز وتدقيق الملف، التقديم للهيئة المعنية ومتابعة الفحص الطبي VIP وطباعة الهوية لـ 10 سنوات دون تقديم وعود وهمية.'
  }
];

export const FEE_STRUCTURE_BREAKDOWN = [
  {
    feeTypeEn: 'Government Authority Fee',
    feeTypeAr: 'الرسوم الحكومية الرسمية',
    meaningEn: 'Official statutory fee charged directly by UAE government ministries (ICP, GDRFA, MOHRE, MOFA, DED).',
    meaningAr: 'الرسوم الرسمية المقررة من الجهات والوزارات الحكومية في الدولة.',
    payerNoteEn: 'Non-negotiable statutory charge',
    payerNoteAr: 'رسوم حكومية إلزامية ومحددة بالقانون'
  },
  {
    feeTypeEn: 'Typing & Application Fee',
    feeTypeAr: 'رسوم الطباعة والتدقيق',
    meaningEn: 'Fee for electronic data drafting, requirements verification, system upload, and error-proofing.',
    meaningAr: 'أتعاب إدخال البيانات إلكترونياً، تدقيق الوثائق، وتجنب أخطاء الرفض.',
    payerNoteEn: 'Transparent centre service charge',
    payerNoteAr: 'أتعاب المركز الواضحة والشفافة'
  },
  {
    feeTypeEn: 'PRO & Processing Support Fee',
    feeTypeAr: 'رسوم خدمات العلاقات العامة (PRO)',
    meaningEn: 'Dedicated corporate liaison handling complex department submissions, quotas, and follow-ups.',
    meaningAr: 'متابعة المعاملات المعقدة وتخليص الإجراءات للمنشآت والمؤسسات.',
    payerNoteEn: 'Corporate retainer or per-transaction',
    payerNoteAr: 'حسب المعاملة أو بعقد شهري'
  },
  {
    feeTypeEn: 'Optional Express / VIP Handling',
    feeTypeAr: 'خدمة المسار السريع / VIP الاختيارية',
    meaningEn: 'Priority drafting within 60 minutes, dedicated concierge coordinator, and courier dispatch.',
    meaningAr: 'إنجاز فوري خلال 60 دقيقة مع منسق مخصص وتوصيل المستندات.',
    payerNoteEn: 'Optional convenience tier',
    payerNoteAr: 'خدمة اختيارية لسرعة الإنجاز'
  },
  {
    feeTypeEn: 'Medical Fitness Examination Fee',
    feeTypeAr: 'رسوم فحص اللياقة الطبية',
    meaningEn: 'Statutory fee charged by accredited UAE health authorities (DHA, EHS, SEHA) for residency medicals.',
    meaningAr: 'رسوم الفحص الطبي للإقامة الصادرة من الجهات الصحية المعتمدة (هيئة الصحة، صحة).',
    payerNoteEn: 'Paid directly to health authority',
    payerNoteAr: 'تُسدد للجهة الصحية المعتمدة'
  },
  {
    feeTypeEn: 'Secure Doorstep Courier Delivery',
    feeTypeAr: 'خدمة التوصيل الآمن للمستندات',
    meaningEn: 'Optional insured doorstep pickup and physical return of original passports, cards, and legal papers.',
    meaningAr: 'استلام وتسليم المستندات الأصلية وبطاقات الهوية حتى باب منزلك أو مكتبك.',
    payerNoteEn: 'Optional standard UAE courier rate',
    payerNoteAr: 'خدمة اختيارية للشحن والتوصيل'
  }
];
