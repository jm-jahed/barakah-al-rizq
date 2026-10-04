export interface RoadforgeService {
  id: string;
  tag: string;
  title: string;
  titleAr: string;
  shortDescription: string;
  shortDescriptionAr: string;
  fullDescription: string;
  fullDescriptionAr: string;
  responseTime: string;
  responseTimeAr: string;
  outcomes: string[];
  outcomesAr: string[];
  iconName: string;
  startingPriceAED: number;
}

export interface RoadforgeCaseStudy {
  clientTitle: string;
  clientTitleAr: string;
  location: string;
  locationAr: string;
  challenge: string;
  challengeAr: string;
  solution: string;
  solutionAr: string;
  metrics: {
    responseTimeReduction: string;
    responseTimeReductionAr: string;
    slaCompliance: string;
    slaComplianceAr: string;
    emiratesCovered: string;
    emiratesCoveredAr: string;
  };
  image: string;
}

export interface RoadforgeLeader {
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

export interface RoadforgeInsight {
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

export interface RoadforgeBase {
  city: string;
  cityAr: string;
  area: string;
  areaAr: string;
  description: string;
  descriptionAr: string;
  address: string;
  addressAr: string;
  phone: string;
  avgResponseTime: string;
  avgResponseTimeAr: string;
}

export const ROADFORGE_BRAND = {
  name: "ROADFORGE",
  nameAr: "رودفورج",
  tagline: "Help, Wherever the Road Takes You.",
  taglineAr: "نجدة فورية أينما تأخذك الطريق.",
  subheading: "Premium 24/7 UAE vehicle recovery, flatbed towing, battery jumpstart, and roadside assistance across Dubai, Abu Dhabi, Sharjah, and major highway corridors (E11, E311, E611). Average response time under 25 minutes.",
  subheadingAr: "خدمات إنقاذ وسحب السيارات، سطحات هيدروليكية، اشتراك وبطاريات، وتزويد الوقود الطارئ على مدار الساعة في دبي، أبوظبي، الشارقة، وكافة الطرق السريعة (E11, E311, E611) بمتوسط وصول أقل من ٢٥ دقيقة.",
  phone: "+971 800 736743", // 800-ROADS
  whatsapp: "https://wa.me/971529988776?text=Emergency!%20I%20need%20immediate%20roadside%20recovery%20assistance.",
  email: "dispatch@roadforge.ae",
  recoveriesCompleted: "35,000+",
  avgResponseMinutes: "24 Mins",
  availability: "24/7/365",
  emiratesCovered: 3,
  flatbedsInFleet: 28,
};

export const ROADFORGE_BADGES = [
  { name: "SHIELD ASSURE", nameAr: "شيلد أشور للتأمين", badge: "Insurance SLA Partner", badgeAr: "شريك إنقاذ معتمد للتأمين" },
  { name: "ORBIT LOGISTICS", nameAr: "أوربت اللوجستية", badge: "Corporate Fleet Recovery", badgeAr: "شريك طوارئ الأساطيل" },
  { name: "VANTAGE EXPRESS", nameAr: "فانتيدج إكسبريس", badge: "Delivery Van Fleet SLA", badgeAr: "إنقاذ سيارات التوصيل السريع" },
  { name: "GPS AUTO-DISPATCH", nameAr: "توجيه إلكتروني ذكي", badge: "Live Radar Tracking", badgeAr: "تتبع الموقع بالأقمار الصناعية" },
  { name: "HYDRAULIC FLATBEDS", nameAr: "سطحات هيدروليكية نازلة", badge: "Supercar & 4x4 Safe", badgeAr: "آمنة للسيارات الفارهة والدفع الرباعي" },
  { name: "UAE HIGHWAY FLEET", nameAr: "أسطول الطرق السريعة", badge: "E11, E311, E611 Corridors", badgeAr: "تغطية E11, E311, E611" }
];

export const ROADFORGE_SERVICES: RoadforgeService[] = [
  {
    id: "towing-recovery",
    tag: "01",
    title: "24/7 Vehicle Recovery & Flatbed Towing",
    titleAr: "سحب وإنقاذ السيارات بسطحات هيدروليكية حديثة",
    shortDescription: "Heavy-duty flatbed towing for luxury cars, supercars, SUVs, and commercial vans stranded on highways or city roads.",
    shortDescriptionAr: "سطحات هيدروليكية منخفضة الزاوية لسحب السيارات الفاخرة، والرياضية المنخفضة، وسيارات الدفع الرباعي دون أي احتكاك أو خدوش.",
    fullDescription: "Equipped with specialized low-angle hydraulic flatbeds suitable for low-ground clearance supercars, 4x4s, and commercial vans. Operates 24/7 across all major UAE routes.",
    fullDescriptionAr: "مجهزة برافعات هيدروليكية تنزل بالكامل على مستوى الأرض لحماية الصدامات والزوائد الرياضية، مع أحزمة تثبيت معتمدة وتغطية تأمينية كاملة أثناء النقل.",
    responseTime: "20 to 25 Mins",
    responseTimeAr: "٢٠ إلى ٢٥ دقيقة",
    outcomes: ["Hydraulic Low-Angle Flatbeds", "Zero-Damage Tie-Down Straps", "Inter-Emirate Transport Available"],
    outcomesAr: ["سطحات هيدروليكية نازلة بالكامل", "أحزمة تثبيت قماشية آمنة للجنوط", "خدمة النقل بين كافة إمارات الدولة"],
    iconName: "Truck",
    startingPriceAED: 250
  },
  {
    id: "battery-jumpstart",
    tag: "02",
    title: "Battery Jumpstart & On-Site Replacement",
    titleAr: "اشتراك البطارية وتبديلها فوراً في موقعك",
    shortDescription: "Immediate on-site battery testing, booster jumpstarts, and AGM battery replacements under extreme UAE summer heat.",
    shortDescriptionAr: "فحص إلكتروني فوري لحالة البطارية والدينامو، اشتراك بجهاز شحن قوي، وتوفير بطاريات AGM الأصلية وتركيبها في مكانك.",
    fullDescription: "UAE summer heat causes sudden battery cell failure. Our mobile recovery units carry heavy-duty digital boosters and original AGM replacement batteries.",
    fullDescriptionAr: "الحرارة الشديدة تؤدي لتلف خلايا البطارية فجأة. دورياتنا المتنقلة مزودة ببطاريات فارتا وبوش الأصلية مع فحص كمبيوتر وتصفير العدادات بضمان ١٢ شهراً.",
    responseTime: "15 to 20 Mins",
    responseTimeAr: "١٥ إلى ٢٠ دقيقة",
    outcomes: ["12V Digital Battery Diagnostics", "Genuine AGM Replacements", "12-Month Battery Warranty"],
    outcomesAr: ["فحص إلكتروني دقيق لقوة الشحن", "بطاريات AGM أصلية متطابقة", "ضمان رسمي لمدة ١٢ شهراً"],
    iconName: "Activity",
    startingPriceAED: 150
  },
  {
    id: "flat-tyre",
    tag: "03",
    title: "Flat Tyre Replacement & Mobile Repair",
    titleAr: "تبديل الإطارات المثقوبة ورقعها على الطريق",
    shortDescription: "Fast roadside tyre swapping with your spare, high-pressure inflations, and puncture plugs.",
    shortDescriptionAr: "تبديل الإطار التالف بالإطار الاحتياطي بسرعة وأمان، وتعبئة الهواء بالضغط المناسب، وإصلاح الرقع الفورية على الطريق السريع.",
    fullDescription: "Tyre blowouts on Sheikh Zayed Road or E11 require fast, safe emergency response. Our technicians handle wheel removal, spare installation, and torque checks.",
    fullDescriptionAr: "انفجار الإطارات على شارع الشيخ زايد أو E311 يتطلب استجابة آمنة وسريعة. فنيونا مجهزون بدريلات فك احترافية ورافعات هيدروليكية لتبديل الإطار في دقائق.",
    responseTime: "20 to 25 Mins",
    responseTimeAr: "٢٠ إلى ٢٥ دقيقة",
    outcomes: ["Heavy Impact Wrench Removal", "Puncture Plug Repair", "Wheel Lock Key Extraction"],
    outcomesAr: ["مفكات عزم هوائية سريعة", "رقع فورية للثقوب البسيطة", "فك براغي الأمان المقفلة"],
    iconName: "Disc",
    startingPriceAED: 150
  },
  {
    id: "fuel-delivery",
    tag: "04",
    title: "Emergency Highway Fuel Delivery",
    titleAr: "توصيل البنزين والديزل في حالات الطوارئ",
    shortDescription: "Stranded with an empty tank? Rapid emergency delivery of 10 to 20 liters of Special 95, Super 98, or Diesel.",
    shortDescriptionAr: "نفد الوقود وأنت على الطريق السريع؟ نوصل لك عبوة وقود مغلقة ومطابقة (خصوصي ٩٥ أو ممتاز ٩٨ أو ديزل) لتصل لأقرب محطة بأمان.",
    fullDescription: "We deliver sealed fuel canisters directly to your location on the highway or desert road so you can reach the nearest service station safely.",
    fullDescriptionAr: "خدمة آمنة ومعتمدة تضمن وصول الوقود المناسب لسيارتك أينما كنت دون الحاجة لترك سيارتك على جانب الطريق السريع المزدحم.",
    responseTime: "15 to 20 Mins",
    responseTimeAr: "١٥ إلى ٢٠ دقيقة",
    outcomes: ["Special 95 / Super 98 / Diesel", "10-Liter Emergency Supply", "Safe Highway Refueling"],
    outcomesAr: ["بنزين خصوصي ٩٥ وممتاز ٩٨ وديزل", "عبوة طوارئ سعة ١٠ إلى ٢٠ لتراً", "تعبئة آمنة مع إشارات تحذيرية"],
    iconName: "Fuel",
    startingPriceAED: 140
  },
  {
    id: "lockout-assistance",
    tag: "05",
    title: "Vehicle Lockout & Key Unlocking",
    titleAr: "فتح أبواب السيارات المقفلة بدون أي خدوش",
    shortDescription: "Non-destructive professional door unlocking when keys are accidentally locked inside your vehicle.",
    shortDescriptionAr: "فتح أقفال الأبواب باحترافية تامة عند نسيان المفاتيح داخل السيارة باستخدام وسائد هوائية خاصة دون أي ضرر للصبغ أو الزجاج.",
    fullDescription: "Using non-marring air wedges and specialized locksmith picks, our operators unlock vehicle doors without damaging paintwork, glass, or door seals.",
    fullDescriptionAr: "فنيون متخصصون بأدوات حديثة لفتح أبواب كافة السيارات الأمريكية والألمانية واليابانية والفاخرة بدون كسر الزجاج أو تجريح الربلات.",
    responseTime: "20 to 25 Mins",
    responseTimeAr: "٢٠ إلى ٢٥ دقيقة",
    outcomes: ["100% Non-Destructive Entry", "Air Wedge & Long-Reach Pick", "Key Fob Signal Testing"],
    outcomesAr: ["فتح آمن بدون خدوش بنسبة ١٠٠٪", "وسائد هوائية خاصة لحماية الباب", "فحص إشارة المفتاح الذكي"],
    iconName: "Key",
    startingPriceAED: 180
  },
  {
    id: "accident-recovery",
    tag: "06",
    title: "Accident Recovery & Sand Winching",
    titleAr: "إنقاذ الحوادث وسحب السيارات المغرزة في الرمال",
    shortDescription: "Specialized recovery winching for collision-damaged vehicles, sand traps, or off-road embankment roll-offs.",
    shortDescriptionAr: "سحب وإنقاذ للمركبات المتضررة من الحوادث وسحب السيارات العالقة في الرمال والمناطق الصحراوية بروافع ونش هيدروليكية قوية.",
    fullDescription: "Equipped with heavy-duty 10-ton hydraulic winches and boom lifts. Coordinates directly with UAE Traffic Police and insurance partners.",
    fullDescriptionAr: "روافع ونش هيدروليكية سعة ١٠ أطنان مع معدات سحب متطورة للتعامل مع الحوادث والتنسيق المباشر مع دوريات المرور ونقل السيارة لورش التصليح.",
    responseTime: "15 to 25 Mins",
    responseTimeAr: "١٥ إلى ٢٥ دقيقة",
    outcomes: ["10-Ton Hydraulic Winch Boom", "Traffic Police Site Clearance", "Direct Insurance Claims Dispatch"],
    outcomesAr: ["ونش سحب هيدروليكي قوي ١٠ أطنان", "تأمين موقع الحادث مع المرور", "إيصالات معتمدة لشركات التأمين"],
    iconName: "AlertTriangle",
    startingPriceAED: 350
  },
  {
    id: "long-distance-towing",
    tag: "07",
    title: "Long-Distance & Inter-Emirate Towing",
    titleAr: "نقل وسحب السيارات بين كافة إمارات الدولة",
    shortDescription: "Scheduled or emergency inter-city vehicle transport between Dubai, Abu Dhabi, Sharjah, RAK, and Al Ain.",
    shortDescriptionAr: "نقل سريع ومجدول للسيارات بين دبي، أبوظبي، الشارقة، رأس الخيمة، العين، والفجيرة مع تغطية تأمينية كاملة أثناء الرحلة.",
    fullDescription: "Transport single or multiple vehicles across emirates with full cargo insurance and GPS tracking updates sent directly to your phone.",
    fullDescriptionAr: "خدمة نقل مريحة وآمنة للسيارات العاطلة أو الجديدة أو الرياضية مع رابط تتبع مباشر لمسار السطحة حتى وصولها للوجهة المحددة.",
    responseTime: "Scheduled / Rapid",
    responseTimeAr: "مجدول / فوري سريع",
    outcomes: ["Full Transit Cargo Insurance", "GPS Real-Time Location Link", "Inter-City Door-to-Door Delivery"],
    outcomesAr: ["تأمين شامل على المركبة أثناء النقل", "رابط تتبع GPS مباشر على هاتفك", "تسليم مباشر من الباب إلى الباب"],
    iconName: "MapPin",
    startingPriceAED: 450
  },
  {
    id: "fleet-insurance-response",
    tag: "08",
    title: "Fleet & Insurance Partner SLA Response",
    titleAr: "عقود إنقاذ وسحب للأساطيل وشركات التأمين",
    shortDescription: "Contractual priority roadside dispatch for commercial van fleets, car rentals, and insurance policyholders.",
    shortDescriptionAr: "اتفاقيات مستوى خدمة SLA ذات أولوية لأساطيل شركات التوصيل وتأجير السيارات وحاملي وثائق التأمين الشامل.",
    fullDescription: "Dedicated fleet dispatch portal with strict 25-minute SLA guarantees, consolidated monthly billing, and full digital recovery logs.",
    fullDescriptionAr: "بوابة رقمية مخصصة للأساطيل تتيح طلب السطحات بضغطة زر مع الالتزام بالوصول خلال ٢٥ دقيقة وفواتير شهرية مجمعة للشركات.",
    responseTime: "Guaranteed SLA < 25 Mins",
    responseTimeAr: "استجابة مضمونة < ٢٥ دقيقة",
    outcomes: ["Contractual Response Time SLA", "Digital Recovery Dashboard", "Consolidated Monthly Invoicing"],
    outcomesAr: ["عقد استجابة ملزم بوقت قياسي", "لوحة تحكم وسجل رقمي للبلاغات", "فواتير ضريبية شهرية موحدة"],
    iconName: "ShieldCheck",
    startingPriceAED: 500
  }
];

export const ROADFORGE_CASE_STUDY: RoadforgeCaseStudy = {
  clientTitle: "Regional Insurance Partner — 24/7 Highway Emergency Recovery",
  clientTitleAr: "شركة تأمين كبرى بالإمارات — عقد الاستجابة الطارئة على الطرق السريعة",
  location: "Dubai, Abu Dhabi & Sharjah Corridors",
  locationAr: "محاور دبي، أبوظبي، والشارقة",
  challenge: "The insurer experienced high policyholder dissatisfaction due to 45-minute average recovery delays and inconsistent provider coverage during peak summer heatwaves.",
  challengeAr: "عانت شركة التأمين من شكاوى العملاء بسبب تأخر السطحات لأكثر من ٤٥ دقيقة وعدم تغطية بعض الطرق الخارجية خلال فترات حرارة الصيف الشديدة.",
  solution: "ROADFORGE deployed a dedicated 18-flatbed fleet integrated with GPS automated dispatch, guaranteeing under 25-minute response across E11 and E311 highways.",
  solutionAr: "نشرت رودفورج أسطولاً مخصصاً من ١٨ سطحة مزودة بنظام التوجيه التلقائي بالأقمار الصناعية، مما ضمن الوصول لموقع العميل خلال أقل من ٢٥ دقيقة على طريقي E11 و E311.",
  metrics: {
    responseTimeReduction: "-51% Response Delay",
    responseTimeReductionAr: "تقليص زمن الانتظار بنسبة -٥١٪",
    slaCompliance: "99.2% SLA Compliance",
    slaComplianceAr: "٩٩.٢٪ التزام بالوقت المحدد",
    emiratesCovered: "3 Emirates 24/7",
    emiratesCoveredAr: "تغطية ٣ إمارات ٢٤/٧"
  },
  image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200&auto=format&fit=crop"
};

export const ROADFORGE_LEADERS: RoadforgeLeader[] = [
  {
    name: "Tariq Al-Mansoori",
    nameAr: "طارق المنصوري",
    role: "Founder & Operations Director",
    roleAr: "المؤسس ومدير العمليات العامة",
    experience: "18+ Yrs UAE Logistics & Emergency Fleet Management",
    experienceAr: "١٨+ عاماً في لوجستيات الطوارئ وإدارة الأساطيل",
    specialization: "Ex-RTA Logistics Fleet Advisor",
    specializationAr: "مستشار لوجستي سابق في هيئة الطرق والمواصلات",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Sultan Bin Rashed",
    nameAr: "سلطان بن راشد",
    role: "Head of Emergency Dispatch Control",
    roleAr: "رئيس مركز التحكم والتوجيه الميداني",
    experience: "14+ Yrs GPS Control Center Operations",
    experienceAr: "١٤+ عاماً في إدارة غرف العمليات والتتبع الذكي",
    specialization: "Automated Fleet Dispatch & Route Optimization",
    specializationAr: "خبير توجيه الأساطيل واختيار المسارات السريعة",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Zayn Al-Hassan",
    nameAr: "زين الحسن",
    role: "Head of Fleet & Insurance Partnerships",
    roleAr: "رئيس شراكات التأمين والأساطيل التجارية",
    experience: "12+ Yrs B2B Commercial SLA Management",
    experienceAr: "١٢+ عاماً في إدارة عقود الشركات والتأمين",
    specialization: "Insurance Policyholder Recovery Contracts",
    specializationAr: "تطوير اتفاقيات مستوى الخدمة لشركات التأمين",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Rashid Vance",
    nameAr: "راشد فانس",
    role: "Head of Field Recovery Operations",
    roleAr: "مسؤول عمليات الإنقاذ الميداني والونش",
    experience: "15+ Yrs Master Winching & Highway Clearance",
    experienceAr: "١٥+ عاماً في الإنقاذ السريع والتعامل مع الحوادث",
    specialization: "Supercar Flatbed & Winch Safety Specialist",
    specializationAr: "أخصائي سحب السيارات الفارهة وتأمين مواقع الحوادث",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
  }
];

export const ROADFORGE_INSIGHTS: RoadforgeInsight[] = [
  {
    id: "highway-breakdown-guide",
    title: "What to Do If Your Car Breaks Down on UAE Highways",
    titleAr: "ماذا تفعل في حال تعطلت سيارتك على الطرق السريعة في الإمارات؟",
    category: "Highway Safety",
    categoryAr: "سلامة الطرق",
    readTime: "4 min read",
    readTimeAr: "٤ دقائق قراءة",
    summary: "Safety protocol for pulling over on Sheikh Zayed Road (E11) or E311, hazard positioning, and calling emergency recovery.",
    summaryAr: "خطوات التوقف الآمن على شارع الشيخ زايد أو E311، تشغيل أضواء التحذير، والتواصل مع غرف الطوارئ.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "summer-battery-failures",
    title: "Why UAE Summers Cause More Battery Failures",
    titleAr: "لماذا تزيد أعطال البطاريات المفاجئة خلال فصل الصيف؟",
    category: "Vehicle Care",
    categoryAr: "العناية بالسيارة",
    readTime: "5 min read",
    readTimeAr: "٥ دقائق قراءة",
    summary: "How ambient temperatures above 45°C accelerate battery acid evaporation and internal cell degradation.",
    summaryAr: "كيف تتسبب درجات الحرارة فوق ٤٥° مئوية في تسريع جفاف حمض البطارية وتلف الشرائح الداخلية.",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "understanding-roadside-coverage",
    title: "Understanding Roadside Assistance Coverage",
    titleAr: "دليلك لفهم تغطية المساعدة على الطريق ووثائق التأمين",
    category: "Insurance",
    categoryAr: "التأمين",
    readTime: "4 min read",
    readTimeAr: "٤ دقائق قراءة",
    summary: "Key differences between basic policy towing inclusions, inter-city transport, and dedicated private recovery contracts.",
    summaryAr: "الفروق الجوهرية بين السحب المشمول بالتأمين، النقل بين الإمارات، وعقود الإنقاذ الخاصة الفورية.",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "emergency-car-kit-uae",
    title: "Preparing an Emergency Car Kit for UAE Driving",
    titleAr: "حقيبة الطوارئ الأساسية التي يجب أن يحتفظ بها كل سائق في الإمارات",
    category: "Driver Essentials",
    categoryAr: "إرشادات السائقين",
    readTime: "5 min read",
    readTimeAr: "٥ دقائق قراءة",
    summary: "Essential items every UAE driver should keep in their trunk: reflective vest, water, jumper cables, and tyre pressure gauge.",
    summaryAr: "أدوات ضرورية في صندوق سيارتك: السترة العاكسة، مياه الشرب، كابلات الاشتراك، ومقياس ضغط الإطارات.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop"
  }
];

export const ROADFORGE_BASES: RoadforgeBase[] = [
  {
    city: "DUBAI",
    cityAr: "دبي",
    area: "Al Quoz Central Base — Main Dispatch Control",
    areaAr: "مركز القوز الرئيسي — غرفة التحكم والمتابعة",
    description: "Equipped with 10 flatbed recovery units positioned near Sheikh Zayed Road (E11) and Al Khail Road (E44).",
    descriptionAr: "يضم ١٠ سطحات متمركزة بالقرب من شارع الشيخ زايد (E11) وشارع الخيل (E44) لسرعة الحركة.",
    address: "Street 12, Al Quoz Industrial 3, Dubai, UAE",
    addressAr: "شارع ١٢، القوز الصناعية ٣، دبي، الإمارات",
    phone: "+971 800 736743",
    avgResponseTime: "18 to 22 Mins",
    avgResponseTimeAr: "١٨ إلى ٢٢ دقيقة"
  },
  {
    city: "ABU DHABI",
    cityAr: "أبوظبي",
    area: "Mussafah Dispatch Base — Capital Hub",
    areaAr: "مركز مصفح — نقطة انطلاق العاصمة",
    description: "Positioned at Mussafah Industrial Area to serve E11 Abu Dhabi–Dubai highway, Yas Island, and Al Ain Road.",
    descriptionAr: "نقطة تمركز تخدم طريق أبوظبي–دبي السريع E11 وجزيرة ياس وطريق العين.",
    address: "Sector M-10, Mussafah Industrial Area, Abu Dhabi, UAE",
    addressAr: "القطاع M-10، مصفح الصناعية، أبوظبي، الإمارات",
    phone: "+971 2 688 4100",
    avgResponseTime: "22 to 25 Mins",
    avgResponseTimeAr: "٢٢ إلى ٢٥ دقيقة"
  },
  {
    city: "SHARJAH",
    cityAr: "الشارقة",
    area: "Industrial Area 6 — Northern Corridors Base",
    areaAr: "المنطقة الصناعية ٦ — قاعدة المحاور الشمالية",
    description: "Rapid recovery units covering E311 Sheikh Mohammed Bin Zayed Road and E611 Emirates Road corridors.",
    descriptionAr: "دوريات سريعة تغطي طريقي الشيخ محمد بن زايد (E311) وشارع الإمارات (E611).",
    address: "Industrial Area 6, Sharjah, UAE",
    addressAr: "المنطقة الصناعية ٦، الشارقة، الإمارات",
    phone: "+971 6 544 9200",
    avgResponseTime: "20 to 24 Mins",
    avgResponseTimeAr: "٢٠ إلى ٢٤ دقيقة"
  }
];

export const ROADFORGE_TESTIMONIALS = [
  {
    quote: "Broke down on Sheikh Zayed Road at midnight with a blown tyre — ROADFORGE flatbed arrived in 20 minutes flat. Exceptional speed.",
    quoteAr: "تعطلت سيارتي على شارع الشيخ زايد في منتصف الليل بسبب انفجار إطار — وصلت سطحة رودفورج خلال ٢٠ دقيقة فقط. سرعة استثنائية.",
    clientName: "Hassan Al Kaabi",
    clientNameAr: "حسن الكعبي",
    vehicle: "BMW M5 Competition",
    vehicleAr: "بي إم دبليو M5 كومبيتيشن",
    location: "Dubai (E11 Highway)",
    locationAr: "دبي (طريق E11 السريع)",
    rating: 5
  },
  {
    quote: "Our delivery fleet of 25 vans depends on ROADFORGE. Their battery replacement and towing SLAs keep our logistics running without delay.",
    quoteAr: "أسطول التوصيل لدينا المكون من ٢٥ شاحنة يعتمد كلياً على رودفورج. التزامهم بتبديل البطاريات والسحب الفوري يضمن استمرار أعمالنا.",
    clientName: "Mark Robinson",
    clientNameAr: "مارك روبنسون",
    vehicle: "Fleet Manager, Vantage Logistics",
    vehicleAr: "مدير أسطول، فانتيدج للخدمات اللوجستية",
    location: "Dubai & Sharjah",
    locationAr: "دبي والشارقة",
    rating: 5
  },
  {
    quote: "Dead battery at Mall of the Emirates parking. Their technician arrived in 15 minutes and installed a fresh AGM battery on the spot.",
    quoteAr: "نفدت بطاريتي في مواقف مول الإمارات. وصل الفني خلال ١٥ دقيقة وقام بتركيب بطارية AGM جديدة في نفس اللحظة.",
    clientName: "Mariam Al-Suwaidi",
    clientNameAr: "مريم السويدي",
    vehicle: "Range Rover Sport",
    vehicleAr: "رينج روفر سبورت",
    location: "Dubai",
    locationAr: "دبي",
    rating: 5
  },
  {
    quote: "Towed my Porsche GT3 from Abu Dhabi to Dubai after a cooling hose leak. Zero damage flatbed loading. Highly professional operators.",
    quoteAr: "قاموا بنقل سيارتي البورشه GT3 من أبوظبي إلى دبي بعد تسريب في رديتر التبريد. تحميل احترافي بالسطحة الهيدروليكية بدون أي خدش.",
    clientName: "Khalfan Al-Mazrouei",
    clientNameAr: "خلفان المزروعي",
    vehicle: "Porsche 911 GT3",
    vehicleAr: "بورشه 911 GT3",
    location: "Abu Dhabi to Dubai",
    locationAr: "من أبوظبي إلى دبي",
    rating: 5
  }
];

export const ROADFORGE_FAQS = [
  {
    question: "How fast is your average recovery response time across the UAE?",
    questionAr: "كم يستغرق متوسط وقت وصول السطحة أو فريق الإنقاذ لموقعي؟",
    answer: "Our average response time across Dubai, Abu Dhabi, and Sharjah city limits and major highways (E11, E311, E611) is under 24 minutes.",
    answerAr: "متوسط وقت الاستجابة والوصول في مدن دبي وأبوظبي والشارقة والطرق السريعة الرئيسية (E11, E311, E611) أقل من ٢٤ دقيقة."
  },
  {
    question: "Do you operate 24/7 including weekends and public holidays?",
    questionAr: "هل تعملون على مدار ٢٤ ساعة طوال أيام الأسبوع والعطلات الرسمية؟",
    answer: "Yes! Our dispatch center and recovery operators work 24 hours a day, 365 days a year without interruption.",
    answerAr: "نعم! غرفة العمليات وأسطول السطحات وفرق التدخل السريع تعمل ٢٤ ساعة يومياً، ٣٦٥ يوماً في السنة دون توقف."
  },
  {
    question: "Do you tow long-distance between different emirates?",
    questionAr: "هل تقدمون خدمات النقل والسحب لمسافات طويلة بين مختلف الإمارات؟",
    answer: "Yes. We offer scheduled and emergency inter-city flatbed towing between Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Fujairah, and Al Ain.",
    answerAr: "نعم، نوفر سطحات لنقل السيارات بين دبي، أبوظبي، الشارقة، رأس الخيمة، الفجيرة، والعين سواء للحالات الطارئة أو النقل المجدول."
  },
  {
    question: "Can you assist with accident recovery and traffic police coordination?",
    questionAr: "هل تساعدون في سحب سيارات الحوادث والتنسيق مع شرطة المرور؟",
    answer: "Yes. Our operators are trained in winching and accident recovery, working directly alongside UAE Traffic Police to clear accident sites safely.",
    answerAr: "نعم، أطقمنا مدربة على استخدام الروافع الهيدروليكية وتأمين مواقع الحوادث بالتعاون مع دوريات المرور ونقل المركبة بسلام."
  },
  {
    question: "Do you provide official invoices accepted by insurance companies?",
    questionAr: "هل تصدرون فواتير رسمية مقبولة لدى شركات التأمين في الدولة؟",
    answer: "Yes. We provide official itemized VAT invoices and digital recovery receipts accepted by all major UAE auto insurance providers.",
    answerAr: "نعم، نزودك بفاتورة ضريبية إلكترونية رسمية مفصلة مقبولة لدى كافة شركات التأمين في دولة الإمارات للمطالبات والتعويض."
  },
  {
    question: "How much does roadside assistance or flatbed towing cost?",
    questionAr: "كم تبلغ تكلفة سحب السيارة أو خدمات المساعدة على الطريق؟",
    answer: "Basic jumpstarts and fuel delivery start from AED 140–150. Local flatbed towing starts from AED 250 depending on distance and vehicle type.",
    answerAr: "تبدأ خدمات اشتراك البطارية وتوصيل الوقود من ١٤٠–١٥٠ درهم، وتبدأ السطحات الهيدروليكية المحلية من ٢٥٠ درهم حسب المسافة ونوع السيارة."
  }
];