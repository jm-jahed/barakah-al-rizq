export interface SkyvaultService {
  id: string;
  tag: string;
  title: string;
  titleAr: string;
  shortDescription: string;
  shortDescriptionAr: string;
  fullDescription: string;
  fullDescriptionAr: string;
  deliverables: string[];
  deliverablesAr: string[];
  iconName: string;
}

export interface SkyvaultCaseStudy {
  clientTitle: string;
  clientTitleAr: string;
  location: string;
  locationAr: string;
  challenge: string;
  challengeAr: string;
  solution: string;
  solutionAr: string;
  metrics: {
    operatingCostReduction: string;
    operatingCostReductionAr: string;
    fleetUptime: string;
    fleetUptimeAr: string;
    regulatoryAuditScore: string;
    regulatoryAuditScoreAr: string;
  };
  image: string;
}

export interface SkyvaultLeader {
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  experience: string;
  experienceAr: string;
  specialization: string;
  specializationAr: string;
  image: string;
}

export interface SkyvaultInsight {
  id: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  readTime: string;
  readTimeAr: string;
  summary: string;
  summaryAr: string;
  image: string;
}

export interface SkyvaultBase {
  city: string;
  cityAr: string;
  base: string;
  baseAr: string;
  description: string;
  descriptionAr: string;
  address: string;
  addressAr: string;
  phone: string;
  cam: string;
  camAr: string;
}

export interface SkyvaultAircraftIntelligence {
  id: string;
  name: string;
  nameAr: string;
  category: string;
  categoryAr: string;
  fixedAnnualCostAED: number;
  fixedAnnualCostUSD: number;
  hourlyCharterYieldAED: number;
  hourlyCharterYieldUSD: number;
  maxCharterHours: number;
  image: string;
  specs: {
    passengers: number;
    rangeKm: number;
    cruiseSpeedKm: number;
    cabinHeightFt: number;
  };
}

export const SKYVAULT_BRAND = {
  name: "SKYVAULT UAE",
  nameAr: "إيروفولت لإدارة الطيران الخاص",
  tagline: "Aviation Management, Elevated.",
  taglineAr: "إدارة طيران تنفيذي بأعلى معايير الدقة.",
  subheading: "Comprehensive private aircraft management, GCAA / EASA CAMO airworthiness oversight, flight operations, hangarage, crew staffing, and charter revenue offset for VIP owners in Dubai and Abu Dhabi.",
  subheadingAr: "إدارة شاملة ومتكاملة للطائرات الخاصة، رقابة مستمرة على صلاحية الطيران بمعايير GCAA و EASA، توفير أطقم الطيران، مساحات الهناجر المكيفة، وبرامج تعويض التكاليف من عوائد التأجير بدبي وأبوظبي.",
  phone: "+971 4 388 9911",
  whatsapp: "https://wa.me/971503889922?text=Hello%20SKYVAULT%20UAE,%20I%20would%20like%20to%20inquire%20about%20aircraft%20management.",
  email: "management@skyvault.ae",
  aircraftManaged: "38 Jet Fleet",
  aircraftManagedAr: "٣٨ طائرة نفاثة",
  flightHoursManaged: "18,500+ Hrs",
  flightHoursManagedAr: "١٨,٥٠٠+ ساعة",
  gccaApproved: "GCAA & EASA CAMO",
  gccaApprovedAr: "اعتماد GCAA و EASA",
  locationsCount: 2,
};

export const SKYVAULT_BADGES = [
  { name: "GCAA CAMO AWR-048", nameAr: "اعتماد GCAA CAMO AWR-048", badge: "GCAA Approved Airworthiness", badgeAr: "صلاحية طيران معتمدة رسمياً" },
  { name: "EASA PART-M", nameAr: "معايير EASA PART-M", badge: "European Safety Approval", badgeAr: "معايير سلامة طيران أوروبية" },
  { name: "EXECUJET HANGAR", nameAr: "هناجر إكسيكوجيت DWC", badge: "DWC Dedicated Hangarage", badgeAr: "هناجر مخصصة ومكيفة" },
  { name: "CHARTER REVENUE OFFSET", nameAr: "عوائد التأجير التجاري", badge: "Maximized Owner Yield", badgeAr: "تعظيم العائد المالي للمالك" },
  { name: "IS-BAO STAGE III", nameAr: "شهادة IS-BAO المستوى الثالث", badge: "Highest Operational Safety", badgeAr: "أعلى تصنيف سلامة عمليات" },
  { name: "VIP CREW RECRUITMENT", nameAr: "توظيف أطقم الطيران", badge: "Type-Rated Captain Staffing", badgeAr: "قباطنة مرخصون على الطراز" }
];

export const SKYVAULT_AIRCRAFT: SkyvaultAircraftIntelligence[] = [
  {
    id: "phenom",
    name: "Embraer Phenom 300E",
    nameAr: "إمبراير فينوم ٣٠٠ إي",
    category: "Light Jet",
    categoryAr: "نفاثة خفيفة",
    fixedAnnualCostAED: 2380000,
    fixedAnnualCostUSD: 650000,
    hourlyCharterYieldAED: 14000,
    hourlyCharterYieldUSD: 3800,
    maxCharterHours: 350,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop",
    specs: { passengers: 7, rangeKm: 3650, cruiseSpeedKm: 839, cabinHeightFt: 4.9 }
  },
  {
    id: "challenger",
    name: "Bombardier Challenger 650",
    nameAr: "بومباردييه تشالنجر ٦٥٠",
    category: "Super Midsize",
    categoryAr: "متوسطة ممتازة",
    fixedAnnualCostAED: 4040000,
    fixedAnnualCostUSD: 1100000,
    hourlyCharterYieldAED: 24000,
    hourlyCharterYieldUSD: 6500,
    maxCharterHours: 400,
    image: "https://images.unsplash.com/photo-1519074069444-1ba4eaa16746?q=80&w=1200&auto=format&fit=crop",
    specs: { passengers: 12, rangeKm: 7400, cruiseSpeedKm: 870, cabinHeightFt: 6.0 }
  },
  {
    id: "g650er",
    name: "Gulfstream G650ER",
    nameAr: "جلف ستريم G650ER",
    category: "Ultra Long Range",
    categoryAr: "فائقة المدى بعيدة المدى",
    fixedAnnualCostAED: 6790000,
    fixedAnnualCostUSD: 1850000,
    hourlyCharterYieldAED: 39500,
    hourlyCharterYieldUSD: 10800,
    maxCharterHours: 450,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=1200&auto=format&fit=crop",
    specs: { passengers: 16, rangeKm: 13890, cruiseSpeedKm: 956, cabinHeightFt: 6.4 }
  },
  {
    id: "global",
    name: "Bombardier Global 7500",
    nameAr: "بومباردييه جلوبال ٧٥٠٠",
    category: "Flagship Ultra Long Range",
    categoryAr: "فائقة المدى الرائدة عالمياً",
    fixedAnnualCostAED: 7160000,
    fixedAnnualCostUSD: 1950000,
    hourlyCharterYieldAED: 42000,
    hourlyCharterYieldUSD: 11500,
    maxCharterHours: 500,
    image: "https://images.unsplash.com/photo-1559689408-9c16fc01c402?q=80&w=1200&auto=format&fit=crop",
    specs: { passengers: 19, rangeKm: 14260, cruiseSpeedKm: 955, cabinHeightFt: 6.2 }
  }
];

export const SKYVAULT_SERVICES: SkyvaultService[] = [
  {
    id: "full-aircraft-management",
    tag: "01",
    title: "Full Turnkey Aircraft Management",
    titleAr: "الإدارة التشغيلية الشاملة للطائرة (Turnkey)",
    shortDescription: "Complete operational, technical, crew, and administrative management for private jet owners.",
    shortDescriptionAr: "إدارة متكاملة تشمل العمليات الجوية، الصيانة الفنية، توظيف الأطقم، والشؤون الإدارية لملاك الطائرات.",
    fullDescription: "We handle every aspect of your aircraft's lifecycle — from flight planning and flight crew employment to hangarage, insurance negotiation, and fuel discount contracts.",
    fullDescriptionAr: "نتولى كافة تفاصيل دورة حياة طائرتك — بدءاً من تخطيط مسارات الرحلات وإدارة عقود الطيارين وحتى حجز الهناجر، التفاوض على التأمين، وعقود الوقود المخفضة.",
    deliverables: ["Dedicated Flight Coordinator", "Crew Hiring & Recurrent Training", "Global Fuel Discount Access"],
    deliverablesAr: ["منسق رحلات جوية مخصص ٢٤/٧", "توظيف وتدريب الطيارين بمحاكيات CAE", "أسعار وقود مخفضة بدون هوامش ربحية"],
    iconName: "ShieldCheck"
  },
  {
    id: "camo-airworthiness",
    tag: "02",
    title: "GCAA / EASA CAMO Airworthiness",
    titleAr: "صلاحية الطيران المستمرة (GCAA & EASA CAMO)",
    shortDescription: "Regulatory maintenance tracking, airworthiness management, and ARC renewals under GCAA and EASA approvals.",
    shortDescriptionAr: "متابعة جداول الصيانة، إدارة شهادات الصلاحية، وتجديد اعتمادات ARC بموجب تراخيص هيئات الطيران.",
    fullDescription: "Continuous airworthiness management organization (CAMO) oversight protecting asset resale value and ensuring 100% compliance with UAE GCAA and international civil aviation authorities.",
    fullDescriptionAr: "إشراف هندسي وتنظيمي يحمي القيمة السوقية للطائرة ويضمن امتثالها الكامل للوائح الهيئة العامة للطيران المدني بدولة الإمارات (GCAA) وهيئة سلامة الطيران الأوروبية (EASA).",
    deliverables: ["GCAA & EASA CAMO Certification", "Maintenance Program (AMP) Audit", "ARC Airworthiness Renewal"],
    deliverablesAr: ["إدارة معتمدة بترخيص GCAA AWR-048", "تدقيق وتحديث برنامج الصيانة المعتمد (AMP)", "تجديد سنوي لشهادات صلاحية الطيران ARC"],
    iconName: "FileCheck"
  },
  {
    id: "charter-revenue-offset",
    tag: "03",
    title: "Charter Revenue Offset Program",
    titleAr: "برنامج تعويض التكاليف من عوائد التأجير",
    shortDescription: "Monetize idle hangar hours by placing your jet on our GCAA AOC for selective third-party charter revenue.",
    shortDescriptionAr: "استثمار ساعات توقف الطائرة عبر إدراجها برخصة النقل الجوي (AOC) لتحقيق عوائد مالية مجزية للمالك.",
    fullDescription: "Offset up to 70% of annual fixed ownership costs by making your aircraft available for vetted third-party charter flights when not in personal use.",
    fullDescriptionAr: "تعويض ما يصل إلى ٧٠٪ من تكاليف الملكية الثابتة السنوية من خلال تأجير الطائرة لعملاء نخبة وموثوقين أثناء فترات عدم الاستخدام الشخصي.",
    deliverables: ["Maximized Hourly Charter Yield", "Owner Calendar Priority Override", "Monthly Revenue Distribution"],
    deliverablesAr: ["أعلى عائد تأجير ساعي في السوق", "أولوية مطلقة للمالك لإلغاء أي حجز شخصي", "توزيع شهري شفاف للعوائد المالية"],
    iconName: "DollarSign"
  },
  {
    id: "hangarage-ground-support",
    tag: "04",
    title: "VIP Hangarage & Tarmac Ground Support",
    titleAr: "الهناجر المكيفة والدعم الأرضي الفاخر",
    shortDescription: "Climate-controlled private hangarage at Dubai DWC and Al Bateen with dedicated ramp handling.",
    shortDescriptionAr: "مساحات هناجر مكيفة في مطار آل مكتوم DWC ومطار البطين مع خدمات مناولة المدرج المتكاملة.",
    fullDescription: "Protect your aircraft paintwork and avionics from UAE heat and dust with 24/7 access to our climate-controlled hangars, tug towing, and GPU power units.",
    fullDescriptionAr: "حماية طلاء الطائرة وأجهزتها الإلكترونية الدقيقة من حرارة وغبار الصيف عبر هناجرنا المكيفة مع توفير عربات السحب ووحدات الطاقة الأرضية (GPU).",
    deliverables: ["Climate-Controlled Hangar Bays", "Towing & GPU Ramp Equipment", "Detailing & Interior Preservation"],
    deliverablesAr: ["هناجر مكيفة بمساحة ٨,٠٠٠ م²", "معدات سحب وتزويد طاقة GPU على مدار الساعة", "عناية دورية بالطلاء وحماية الجلود الداخلية"],
    iconName: "Building2"
  },
  {
    id: "flight-crew-staffing",
    tag: "05",
    title: "Flight Crew Recruitment & Staffing",
    titleAr: "استقطاب وإدارة أطقم الطيران والضيافة",
    shortDescription: "Type-rated captains, first officers, and VIP flight attendants managed under compliant UAE contracts.",
    shortDescriptionAr: "قباطنة مرخصون على الطراز، مساعدو طيار، ومضيفات كبار الشخصيات بعقود قانونية وإقامات عمل بالإمارات.",
    fullDescription: "We recruit, vet, employ, and manage Type-Rated Captains (Bombardier, Gulfstream, Embraer, Dassault) with recurrent simulator training at CAE and FlightSafety.",
    fullDescriptionAr: "نوظف ونشرف على طياري طائرات (جلف ستريم، بومباردييه، إمبراير، وداسو) مع إخضاعهم لتدريبات المحاكاة نصف السنوية بأكاديميات CAE و FlightSafety.",
    deliverables: ["Type-Rated Captain Sourcing", "CAE / FlightSafety Sim Recurrent", "Medical & Visa Contract Management"],
    deliverablesAr: ["استقطاب قباطنة بخبرة لا تقل عن ٣,٠٠٠ ساعة", "تدريب دوري في محاكيات الطيران المتقدمة", "إدارة التأشيرات، التأمين الطبي، والتراخيص"],
    iconName: "Users"
  },
  {
    id: "aircraft-acquisition-sales",
    tag: "06",
    title: "Aircraft Acquisition & Pre-Purchase Advisory",
    titleAr: "استشارات شراء الطائرات والفحص الفني (PPI)",
    shortDescription: "Independent technical advisory for buying, inspecting, and registering new or pre-owned business jets.",
    shortDescriptionAr: "استشارات فنية وقانونية محايدة لشراء، فحص، وتسجيل الطائرات الخاصة الجديدة والمستعملة.",
    fullDescription: "From pre-purchase technical inspections (PPI) to structural audits, registry transfer (A6- registration), and tax optimization for corporate aircraft buyers.",
    fullDescriptionAr: "فحص فني شامل للهيكل والمحركات قبل الشراء (PPI)، نقل الملكية والتسجيل بسجل الطائرات الإماراتي A6-، وضمان سلامة العقود الاستثمارية.",
    deliverables: ["Pre-Purchase Technical Audit", "GCAA A6- Registration Escrow", "Global Aircraft Sourcing"],
    deliverablesAr: ["تدقيق شامل للمحركات وسجلات الصيانة", "إتمام التسجيل لدى هيئة الطيران GCAA وحسابات الضمان", "البحث والتفاوض في أسواق الطيران العالمية"],
    iconName: "Plane"
  }
];

export const SKYVAULT_CASE_STUDY: SkyvaultCaseStudy = {
  clientTitle: "Ultra Long Range Gulfstream G650ER — Management & Revenue Offset",
  clientTitleAr: "جلف ستريم G650ER فائقة المدى — إدارة شاملة وتعويض تكاليف",
  location: "Dubai DWC FBO Hangar & Global Routes",
  locationAr: "هناجر مطار آل مكتوم DWC والمسارات الدولية",
  challenge: "An owner was under-utilizing their G650ER (only 120 hours/yr) while incurring full annual fixed management costs of $1.85M USD.",
  challengeAr: "كان مالك الطائرة يعاني من انخفاض معدل الاستخدام الشخصي (١٢٠ ساعة فقط سنوياً) مع تحمله نفقات ملكية وإدارة ثابتة بلغت ١.٨٥ مليون دولار سنوياً.",
  solution: "Placed aircraft under SKYVAULT CAMO management and enrolled in selective charter revenue offset, generating 320 charter hours per year.",
  solutionAr: "تم وضع الطائرة تحت إدارة إيروفولت لصلاحية الطيران وإدراجها ببرنامج التأجير الانتقائي، محققة ٣٢٠ ساعة تأجير تجاري سنوي لصالح المالك.",
  metrics: {
    operatingCostReduction: "-62% Net Cost Reduction",
    operatingCostReductionAr: "-٦٢٪ وفر في التكاليف الصافية",
    fleetUptime: "99.6% Fleet Dispatch Reliability",
    fleetUptimeAr: "٩٩.٦٪ جاهزية إقلاع فوري",
    regulatoryAuditScore: "100% GCAA Audit Score",
    regulatoryAuditScoreAr: "١٠٠٪ تقييم تدقيق هيئة الطيران GCAA"
  },
  image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop"
};

export const SKYVAULT_LEADERS: SkyvaultLeader[] = [
  {
    name: "Capt. Mansoor Al-Maktoum",
    nameAr: "القبطان منصور المكتوم",
    role: "Founder & Managing Director",
    roleAr: "المؤسس والمدير التنفيذي",
    experience: "25+ Yrs VIP Aviation (Ex-Presidential Flight Lead)",
    experienceAr: "خبرة تفوق ٢٥ عاماً في الطيران الخاص والرئاسي",
    specialization: "GCAA Regulatory Approvals & Fleet Management",
    specializationAr: "الاعتمادات التنظيمية لهيئة الطيران وإدارة الأساطيل",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Tariq Bin Rashed",
    nameAr: "طارق بن راشد",
    role: "Head of CAMO & Airworthiness",
    roleAr: "رئيس قسم صلاحية الطيران والهندسة",
    experience: "18+ Yrs Licensed Aeronautical Engineer",
    experienceAr: "١٨+ عاماً كمهندس طيران معتمد",
    specialization: "GCAA & EASA Part-M Airworthiness Management",
    specializationAr: "إدارة برامج الصيانة والامتثال لمعايير GCAA و EASA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Elena Rostova",
    nameAr: "إيلينا روستوفا",
    role: "Head of Charter Revenue Yield",
    roleAr: "مديرة عوائد التأجير التجاري للأساطيل",
    experience: "14+ Yrs Commercial Jet Optimization",
    experienceAr: "١٤+ عاماً في تعظيم عوائد الطائرات الخاصة",
    specialization: "AOC Charter Placement & Revenue Offsets",
    specializationAr: "إدراج الطائرات برخص النقل الجوي وتحقيق عوائد الملاك",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Sultan Vance",
    nameAr: "سلطان فانس",
    role: "Head of Flight Crew Operations",
    roleAr: "مدير عمليات وتدريب الطيارين",
    experience: "16+ Yrs Senior Captain & Sim Instructor",
    experienceAr: "١٦+ عاماً كقبطان ومدرب محاكيات طيران",
    specialization: "Gulfstream & Bombardier Crew Standards",
    specializationAr: "معايير تدريب طياري جلف ستريم وبومباردييه",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
  }
];

export const SKYVAULT_INSIGHTS: SkyvaultInsight[] = [
  {
    id: "aircraft-management-explained",
    title: "What to Expect from Full Turnkey Aircraft Management",
    titleAr: "الدليل الشامل: ماذا تشمل الإدارة المتكاملة للطائرات الخاصة؟",
    category: "Management Guide",
    categoryAr: "دليل الإدارة",
    readTime: "5 min read",
    readTimeAr: "٥ دقائق قراءة",
    summary: "Breaking down maintenance CAMO, crew salaries, hangar fees, and operational cost savings.",
    summaryAr: "تفصيل دقيق حول إدارة صلاحية الطيران، رواتب الطيارين، رسوم الهناجر، وفرق التكاليف التشغيلية.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "charter-revenue-offset-calculator",
    title: "How Charter Revenue Offsets Reduce Fixed Aircraft Costs",
    titleAr: "كيف تعوض عوائد التأجير التجاري تكاليف ملكية الطائرة؟",
    category: "Yield Strategy",
    categoryAr: "استراتيجية العوائد",
    readTime: "5 min read",
    readTimeAr: "٥ دقائق قراءة",
    summary: "How enrolling idle flight hours into a GCAA AOC charter program generates net owner revenue.",
    summaryAr: "كيف يساهم تشغيل الطائرة في فترات التوقف عبر رخصة AOC في توليد تدفقات نقدية تغطي نفقات الصيانة.",
    image: "https://images.unsplash.com/photo-1519074069444-1ba4eaa16746?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "gcaa-camo-importance",
    title: "Why GCAA & EASA CAMO Compliance Protects Resale Value",
    titleAr: "أهمية اعتماد CAMO في حماية القيمة الاستثمارية للطائرة عند إعادة البيع",
    category: "Airworthiness",
    categoryAr: "صلاحية الطيران",
    readTime: "4 min read",
    readTimeAr: "٤ دقائق قراءة",
    summary: "Proper maintenance tracking, digital logs, and structural inspections retain jet market value.",
    summaryAr: "التوثيق الرقمي لجداول الصيانة والفحوصات الهيكلية الدورية يحافظ على سعر الطائرة في السوق العالمي.",
    image: "https://images.unsplash.com/photo-1559689408-9c16fc01c402?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "buying-preowned-business-jet",
    title: "Pre-Purchase Inspection Checklist for Buying a Jet",
    titleAr: "قائمة الفحص الفني المسبق (PPI) قبل شراء طائرة خاصة مستعملة",
    category: "Acquisitions",
    categoryAr: "شراء الطائرات",
    readTime: "6 min read",
    readTimeAr: "٦ دقائق قراءة",
    summary: "Engine overhaul status, avionics upgrades, corrosion checks in UAE climate, and title history.",
    summaryAr: "حالة المحركات، تحديثات إلكترونيات الطيران، فحص التآكل الناتج عن رطوبة الخليج، وسجل الملكية.",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "selecting-hangarage-dubai",
    title: "Choosing Climate-Controlled Hangarage in Dubai & Abu Dhabi",
    titleAr: "أهمية الهناجر المكيفة في الحفاظ على الطائرات في مناخ دبي وأبوظبي",
    category: "Hangarage",
    categoryAr: "الهناجر والدعم",
    readTime: "4 min read",
    readTimeAr: "٤ دقائق قراءة",
    summary: "Protecting composite fuselages, cabin leather, and avionics from 45°C summer heat and dust.",
    summaryAr: "حماية هياكل الكربون، الفرش الجلدي الفاخر، وشاشات قمرة القيادة من درجات الحرارة المرتفعة والغبار.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "flight-crew-recruitment-uae",
    title: "Recruiting and Retaining Top VIP Flight Crew in the UAE",
    titleAr: "معايير استقطاب وتوظيف قباطنة الطيران الخاص في دولة الإمارات",
    category: "Crew Staffing",
    categoryAr: "أطقم الطيران",
    readTime: "5 min read",
    readTimeAr: "٥ دقائق قراءة",
    summary: "Type-rating simulator standards, competitive UAE salary packages, and recurrent training.",
    summaryAr: "ساعات الطيران المطلوبة، تدريبات المحاكاة المتقدمة، وباقات الرواتب والمزايا الجاذبة للطيارين.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop"
  }
];

export const SKYVAULT_BASES: SkyvaultBase[] = [
  {
    city: "DUBAI (DWC)",
    cityAr: "دبي (DWC)",
    base: "ExecuJet Hangar Complex — DWC Airport",
    baseAr: "مجمع هناجر إكسيكوجيت — مطار آل مكتوم الدولي",
    description: "Flagship 8,000 m² climate-controlled hangarage and CAMO airworthiness office at Dubai Al Maktoum International.",
    descriptionAr: "المقر الرئيسي للهناجر المكيفة بمساحة ٨,٠٠٠ م² ومكتب إدارة صلاحية الطيران بمطار آل مكتوم DWC.",
    address: "Executive Aviation District, DWC Airport, Dubai, UAE",
    addressAr: "منطقة الطيران التنفيذي، مطار آل مكتوم DWC، دبي، الإمارات",
    phone: "+971 4 388 9911",
    cam: "GCAA Approved CAMO AWR-048",
    camAr: "صلاحية طيران معتمدة AWR-048"
  },
  {
    city: "ABU DHABI (AUH)",
    cityAr: "أبوظبي (AUH)",
    base: "Al Bateen Executive Airport Hangar",
    baseAr: "هناجر مطار البطين للطيران الخاص",
    description: "Dedicated capital maintenance bay and crew dispatch office at Al Bateen Executive Airport.",
    descriptionAr: "موقع صيانة مخصص ومكتب عمليات وتنسيق طواقم الطيران في مطار البطين التنفيذي.",
    address: "Al Bateen Executive Airport, Abu Dhabi, UAE",
    addressAr: "مطار البطين للطيران الخاص، أبوظبي، الإمارات",
    phone: "+971 2 599 3322",
    cam: "GCAA & EASA Part-M Approved",
    camAr: "معتمد من GCAA و EASA Part-M"
  }
];

export const SKYVAULT_TESTIMONIALS = [
  {
    quote: "SKYVAULT's CAMO airworthiness team reduced our annual Gulfstream G650 net ownership costs by 62% through charter revenue offsets while maintaining flawless safety.",
    quoteAr: "نجح فريق إيروفولت في خفض تكاليف ملكية طائرتنا جلف ستريم G650 بنسبة ٦٢٪ عبر عوائد التأجير التجاري مع الحفاظ على أعلى معايير السلامة وصلاحية الطيران.",
    clientName: "Private Family Office Lead",
    clientNameAr: "مدير مكتب عائلي استثماري",
    vehicle: "Gulfstream G650ER",
    vehicleAr: "جلف ستريم G650ER",
    location: "Dubai DWC Base",
    locationAr: "قاعدة دبي DWC",
    rating: 5
  },
  {
    quote: "Their crew staffing and CAE simulator training standards give us total peace of mind every time we fly transcontinental.",
    quoteAr: "معاييرهم الصارمة في اختيار الطيارين وتدريبهم المستمر في محاكيات CAE تمنحنا راحة بال واطمئناناً تاماً في رحلاتنا عابرة القارات.",
    clientName: "Khalid Al Hashemi",
    clientNameAr: "خالد الهاشمي",
    vehicle: "Bombardier Global 7500",
    vehicleAr: "بومباردييه جلوبال ٧٥٠٠",
    location: "Abu Dhabi",
    locationAr: "أبوظبي",
    rating: 5
  },
  {
    quote: "Clean, climate-controlled hangarage at DWC ExecuJet kept our jet in showroom condition during peak summer heat.",
    quoteAr: "الهناجر المكيفة في إكسيكوجيت DWC تحافظ على طائرتنا بحالة المصنع الاستثنائية بعيداً عن حرارة وغبار الصيف الشديد.",
    clientName: "Soraya Vane",
    clientNameAr: "ثريا فانس",
    vehicle: "Challenger 650",
    vehicleAr: "تشالنجر ٦٥٠",
    location: "Dubai",
    locationAr: "دبي",
    rating: 5
  },
  {
    quote: "Pre-purchase technical inspection saved us $450k on an engine overhaul issue before closing the aircraft acquisition.",
    quoteAr: "وفر علينا الفحص الفني المسبق (PPI) مبلغ ٤٥٠ ألف دولار بعد اكتشاف مشكلة في المحرك قبل إتمام عملية شراء الطائرة.",
    clientName: "Arthur Pendelton",
    clientNameAr: "آرثر بندلتون",
    vehicle: "Embraer Legacy 650",
    vehicleAr: "إمبراير ليجاسي ٦٥٠",
    location: "International Buyer",
    locationAr: "مستثمر دولي",
    rating: 5
  },
  {
    quote: "Exceptional aircraft management transparency. Monthly itemized reporting with zero hidden markup fees.",
    quoteAr: "شفافية مالية استثنائية وإدارة منقطعة النظير. تقارير شهرية مفصلة بدون أي رسوم خفية أو هوامش إضافية على الصيانة والوقود.",
    clientName: "Tariq Al Maktoum",
    clientNameAr: "طارق المكتوم",
    vehicle: "Phenom 300E",
    vehicleAr: "إمبراير فينوم ٣٠٠ إي",
    location: "Dubai",
    locationAr: "دبي",
    rating: 5
  }
];

export const SKYVAULT_FAQS = [
  {
    question: "What is included in full turnkey aircraft management?",
    questionAr: "ما الذي تشمله الإدارة التشغيلية المتكاملة للطائرة الخاصة (Turnkey)؟",
    answer: "Our turnkey management includes GCAA/EASA CAMO airworthiness tracking, flight crew hiring and simulator training, hangarage, insurance negotiation, fuel discounts, and 24/7 flight coordination.",
    answerAr: "تشمل الإدارة المتكاملة متابعة صلاحية الطيران GCAA/EASA CAMO، توظيف وتدريب الطيارين، حجز الهناجر، التفاوض على التأمين، أسعار الوقود المخفضة، والتنسيق الجوي على مدار الساعة."
  },
  {
    question: "How does the Charter Revenue Offset Program work?",
    questionAr: "كيف يعمل برنامج تعويض تكاليف الملكية من عوائد التأجير التجاري؟",
    answer: "By placing your jet on our GCAA AOC charter license, we charter your aircraft to vetted third parties when you're not using it. Revenue generated offsets your fixed maintenance and crew expenses.",
    answerAr: "عبر إدراج طائرتك في رخصة النقل الجوي (AOC)، نقوم بتأجيرها لعملاء موثوقين أثناء فترات عدم استخدامك لها، مما يحقق عوائد تغطي نفقات الصيانة الثابتة ورواتب الطاقم."
  },
  {
    question: "Can I override charter flights if I need my aircraft unexpectedly?",
    questionAr: "هل أستطيع إلغاء أي رحلة تأجير تجاري إذا احتجت طائرتي بشكل طارئ؟",
    answer: "Yes! Owners always retain 100% calendar priority override. We set guaranteed owner blackout dates and flexible notice rules.",
    answerAr: "نعم بكل تأكيد! يحتفظ مالك الطائرة بأولوية مطلقة بنسبة ١٠٠٪ لاستخدام طائرته في أي وقت مع مرونة كاملة في تحديد أيام الحظر المسبق."
  },
  {
    question: "What airworthiness approvals does SKYVAULT hold?",
    questionAr: "ما هي اعتمادات وتراخيص صلاحية الطيران التي تحملها إيروفولت؟",
    answer: "We hold full GCAA CAMO approval (AWR-048) and EASA Part-M certifications for UAE A6- registered and international N- or M- registered aircraft.",
    answerAr: "نحمل اعتماد الهيئة العامة للطيران المدني GCAA CAMO (ترخيص AWR-048) وشهادات EASA Part-M للطائرات المسجلة في الإمارات A6- أو السجلات الدولية N- و M-."
  },
  {
    question: "Where are your climate-controlled hangars located?",
    questionAr: "أين تقع هناجركم المكيفة للطائرات الخاصة في دولة الإمارات؟",
    answer: "Our primary climate-controlled hangar bays are located at ExecuJet DWC (Dubai Al Maktoum International) and Al Bateen Executive Airport in Abu Dhabi.",
    answerAr: "تقع هناجرنا المكيفة الرئيسية في مجمع إكسيكوجيت بمطار آل مكتوم الدولي DWC بدبي ومطار البطين للطيران الخاص بأبوظبي."
  },
  {
    question: "Do you assist with buying or selling pre-owned business jets?",
    questionAr: "هل تقدمون خدمات الاستشارة والفحص عند شراء أو بيع الطائرات الخاصة؟",
    answer: "Yes. Our acquisitions team conducts technical pre-purchase inspections (PPI), title searches, GCAA A6- registration transfer, and escrow management.",
    answerAr: "نعم، يقدم فريق الاستحواذ لدينا الفحص الفني المسبق (PPI)، تدقيق سجلات المحركات، إنهاء إجراءات التسجيل بسجل A6- الإماراتي، وإدارة حسابات الضمان المالي."
  },
  {
    question: "How do you recruit and train flight crew?",
    questionAr: "كيف يتم اختيار وتدريب قباطنة وطواقم الطيران؟",
    answer: "We recruit Type-Rated Captains and First Officers with minimum 3,000 flight hours, requiring bi-annual simulator training at CAE or FlightSafety International.",
    answerAr: "نستقطب طيارين مرخصين على الطراز بخبرة لا تقل عن ٣,٠٠٠ ساعة طيران، مع إلزامهم بالتدريب نصف السنوي في محاكيات CAE و FlightSafety الدولية."
  },
  {
    question: "How are aircraft management fees structured?",
    questionAr: "كيف يتم احتساب وهيكلة رسوم إدارة الطائرة؟",
    answer: "We charge a transparent fixed monthly management fee with zero markup on maintenance parts, fuel, or hangarage costs.",
    answerAr: "نعتمد رسوماً شهرية إدارية ثابتة وواضحة بدون أي هوامش ربحية إضافية على قطع الغيار، فواتير الوقود، أو رسوم الهناجر والمطارات."
  },
  {
    question: "What types of aircraft do you manage?",
    questionAr: "ما هي فئات وطرازات الطائرات التي تتولون إدارتها؟",
    answer: "We manage light jets (Phenom 300), super-midsize (Challenger 650), heavy jets (Legacy 650), ultra-long-range jets (Global 7500, Gulfstream G650ER), and VIP corporate airliners.",
    answerAr: "ندير مختلف الفئات: النفاثات الخفيفة (فينوم ٣٠٠)، المتوسطة (تشالنجر ٦٥٠)، الثقيلة (ليجاسي ٦٥٠)، فائقة المدى (جلوبال ٧٥٠٠ وجلف ستريم G650ER)، وطائرات الركاب الرئاسية VIP."
  },
  {
    question: "How do I request an aircraft management proposal for my jet?",
    questionAr: "كيف يمكنني طلب دراسة ومقترح إدارة خاص بطائرتي؟",
    answer: "Click our 'Request Management Proposal' button, call our executive desk at +971 4 388 9911, or message our aviation directors on WhatsApp.",
    answerAr: "اضغط على زر 'طلب مقترح إدارة'، أو اتصل بمكتبنا التنفيذي على 9911 388 4 971+، أو راسل مدراء العمليات عبر واتساب مباشرة."
  }
];