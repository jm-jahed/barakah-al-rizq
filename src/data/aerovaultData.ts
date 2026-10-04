export interface AerovaultJet {
  id: string;
  name: string;
  nameAr: string;
  category: string;
  categoryAr: string;
  passengers: number;
  rangeKm: number;
  hourlyRateAED: number;
  hourlyRateUSD: number;
  cabinHeightFt: number;
  image: string;
  specs: {
    cruiseSpeedKm: number;
    luggageCapM3: string;
    wifi: string;
    wifiAr: string;
  };
  amenities: string[];
  amenitiesAr: string[];
}

export interface AerovaultEmptyLeg {
  id: string;
  route: string;
  routeAr: string;
  aircraft: string;
  aircraftAr: string;
  date: string;
  dateAr: string;
  regularPriceAED: number;
  dealPriceAED: number;
  savings: string;
  savingsAr: string;
}

export interface AerovaultJetCardTier {
  id: string;
  title: string;
  titleAr: string;
  hours: number;
  aircraftType: string;
  aircraftTypeAr: string;
  priceAED: number;
  fixedHourlyAED: number;
  dispatchNotice: string;
  dispatchNoticeAr: string;
  features: string[];
  featuresAr: string[];
}

export interface AerovaultCaseStudy {
  clientTitle: string;
  clientTitleAr: string;
  location: string;
  locationAr: string;
  challenge: string;
  challengeAr: string;
  solution: string;
  solutionAr: string;
  metrics: {
    dispatchTime: string;
    dispatchTimeAr: string;
    passengers: string;
    passengersAr: string;
    privacyRating: string;
    privacyRatingAr: string;
  };
  image: string;
}

export interface AerovaultLeader {
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

export interface AerovaultInsight {
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

export interface AerovaultDesk {
  city: string;
  cityAr: string;
  airport: string;
  airportAr: string;
  terminal: string;
  terminalAr: string;
  address: string;
  addressAr: string;
  phone: string;
  availability: string;
  availabilityAr: string;
}

export const AEROVAULT_BRAND = {
  name: "AEROVAULT",
  nameAr: "إيروفولت للطيران الخاص",
  tagline: "Private Aviation, Precisely Arranged.",
  taglineAr: "طيران تنفيذي فاخر بدقة مطلقة.",
  subheading: "Premium UAE private jet charter broker connecting business leaders, HNWIs, and diplomatic delegations to global destinations from Dubai (DXB / DWC) and Abu Dhabi (AUH) FBO VIP terminals.",
  subheadingAr: "وساطة وتأجير الطائرات الخاصة الفاخرة بدولة الإمارات لربط قادة الأعمال، الوفود الدبلوماسية، والمسافرين بأكثر من ٥,٠٠٠ مطار حول العالم من صالات كبار الشخصيات بمطاري دبي وأبوظبي.",
  phone: "+971 4 299 8800",
  whatsapp: "https://wa.me/971502998811?text=Hello%20AEROVAULT,%20I%20would%20like%20to%20request%20a%20private%20jet%20flight%20quote.",
  email: "charter@aerovault.ae",
  flightsCompleted: "4,200+",
  airportsAccessible: "5,000+",
  dispatchMins: "90 Mins",
  fleetAccessCount: "150+ Jets",
};

export const AEROVAULT_BADGES = [
  { name: "EXECUJET FBO", nameAr: "إكسيكوجيت FBO", badge: "VIP Terminal Partner", badgeAr: "شريك صالات كبار الشخصيات" },
  { name: "JETEX FLIGHT", nameAr: "جتكس للطيران", badge: "Ground Handling Partner", badgeAr: "خدمات المناولة الأرضية الخاصة" },
  { name: "ARGUS GOLD", nameAr: "شهادة ARGUS الذهبية", badge: "Safety Standard Certified", badgeAr: "معايير سلامة طيران معتمدة" },
  { name: "DUBAI DWC FBO", nameAr: "مطار آل مكتوم DWC", badge: "Al Maktoum Jet Hub", badgeAr: "مركز الطيران التنفيذي" },
  { name: "EMPTY LEG OFFERS", nameAr: "عروض الرحلات الفارغة", badge: "Up to 60% Discount", badgeAr: "خصم يصل حتى ٦٠٪" },
  { name: "JET CARD PROGRAM", nameAr: "برنامج بطاقة الطيران", badge: "Fixed Rate Hour Guarantee", badgeAr: "ضمان أسعار ساعات طيران ثابتة" }
];

export const AEROVAULT_JETS: AerovaultJet[] = [
  {
    id: "phenom-300e",
    name: "Embraer Phenom 300E",
    nameAr: "إمبراير فينوم ٣٠٠ إي",
    category: "Light Jet",
    categoryAr: "نفاثة خفيفة",
    passengers: 7,
    rangeKm: 3650,
    hourlyRateAED: 14000,
    hourlyRateUSD: 3800,
    cabinHeightFt: 4.9,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop",
    specs: { cruiseSpeedKm: 839, luggageCapM3: "2.4 m³", wifi: "High-Speed Ka-Band", wifiAr: "إنترنت عالي السرعة Ka-Band" },
    amenities: ["Enclosed Lavatory", "Leather Executive Chairs", "Satellite Phone", "Refreshment Galley"],
    amenitiesAr: ["مرحاض مغلق خاص", "مقاعد جلدية تنفيذية مريحة", "هاتف متصل بالأقمار الصناعية", "مطبخ مصغر للمشروبات والوجبات"]
  },
  {
    id: "challenger-650",
    name: "Bombardier Challenger 650",
    nameAr: "بومباردييه تشالنجر ٦٥٠",
    category: "Super Midsize",
    categoryAr: "متوسطة ممتازة",
    passengers: 12,
    rangeKm: 7400,
    hourlyRateAED: 24000,
    hourlyRateUSD: 6500,
    cabinHeightFt: 6.0,
    image: "https://images.unsplash.com/photo-1519074069444-1ba4eaa16746?q=80&w=1200&auto=format&fit=crop",
    specs: { cruiseSpeedKm: 870, luggageCapM3: "3.2 m³", wifi: "SwiftBroadband VIP", wifiAr: "واي فاي فضائي SwiftBroadband VIP" },
    amenities: ["Stand-Up Full Cabin", "Gourmet Hot Galley", "Convertible Bed Seats", "HD Entertainment Screen"],
    amenitiesAr: ["مقصورة كاملة بارتفاع وقوف مريح", "مطبخ متكامل للوجبات الساخنة", "مقاعد قابلة للتحول لسرير نوم", "شاشات ترفيه عالية الدقة"]
  },
  {
    id: "legacy-650",
    name: "Embraer Legacy 650E",
    nameAr: "إمبراير ليجاسي ٦٥٠ إي",
    category: "Heavy Jet",
    categoryAr: "طائرة نفاثة ثقيلة",
    passengers: 14,
    rangeKm: 7220,
    hourlyRateAED: 26500,
    hourlyRateUSD: 7200,
    cabinHeightFt: 6.0,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
    specs: { cruiseSpeedKm: 850, luggageCapM3: "6.8 m³ (Largest in Class)", wifi: "VIP Wi-Fi System", wifiAr: "نظام واي فاي VIP متقدم" },
    amenities: ["3 Distinct Cabin Zones", "Walk-In Baggage Access", "Hot Dining Galley", "Dual Lavatories"],
    amenitiesAr: ["٣ مناطق معيشة مستقلة في المقصورة", "وصول مباشر للأمتعة أثناء الطيران", "مطبخ فاخر للولائم الساخنة", "دورتي مياه منفصلتين"]
  },
  {
    id: "gulfstream-g650er",
    name: "Gulfstream G650ER",
    nameAr: "جلف ستريم G650ER",
    category: "Ultra Long Range",
    categoryAr: "فائقة المدى بعيدة المدى",
    passengers: 16,
    rangeKm: 13890,
    hourlyRateAED: 39500,
    hourlyRateUSD: 10800,
    cabinHeightFt: 6.4,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=1200&auto=format&fit=crop",
    specs: { cruiseSpeedKm: 956, luggageCapM3: "5.5 m³", wifi: "Inmarsat JetConneX", wifiAr: "إنترنت الأقمار الصناعية JetConneX" },
    amenities: ["16 Panoramic Oval Windows", "100% Fresh Air Circulation", "State Room Suite", "Private Flight Attendant"],
    amenitiesAr: ["١٦ نافذة بيضاوية بانورامية عملاقة", "تجديد هواء نقي ١٠٠٪ كل دقيقتين", "جناح رئاسي خاص للنوم والعمل", "مضيفة طيران خاصة مكرسة لخدمتكم"]
  },
  {
    id: "global-7500",
    name: "Bombardier Global 7500",
    nameAr: "بومباردييه جلوبال ٧٥٠٠",
    category: "Ultra Long Range",
    categoryAr: "فائقة المدى الرائدة عالمياً",
    passengers: 19,
    rangeKm: 14260,
    hourlyRateAED: 42000,
    hourlyRateUSD: 11500,
    cabinHeightFt: 6.2,
    image: "https://images.unsplash.com/photo-1559689408-9c16fc01c402?q=80&w=1200&auto=format&fit=crop",
    specs: { cruiseSpeedKm: 955, luggageCapM3: "5.5 m³", wifi: "Ka-Band Ultra Speed", wifiAr: "أسرع إنترنت فضائي Ka-Band" },
    amenities: ["Master Suite with Permanent Bed", "4 Living Zones", "Dedicated Crew Rest Area", "Full Gourmet Dining Room"],
    amenitiesAr: ["جناح ماستر مع سرير مزدوج دائم", "٤ مناطق معيشة فندقية منفصلة", "مقصورة مخصصة لاستراحة الطاقم", "غرفة طعام فاخرة كاملة لاجتماعات العمل"]
  },
  {
    id: "boeing-bbj",
    name: "Boeing Business Jet (BBJ 737)",
    nameAr: "بوينغ بيزنس جيت (BBJ 737)",
    category: "VIP Corporate Airliner",
    categoryAr: "طائرة ركاب تنفيذية كبار الشخصيات",
    passengers: 30,
    rangeKm: 11500,
    hourlyRateAED: 60000,
    hourlyRateUSD: 16500,
    cabinHeightFt: 7.0,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    specs: { cruiseSpeedKm: 870, luggageCapM3: "18.0 m³", wifi: "Global Satellite Internet", wifiAr: "إنترنت الأقمار الصناعية العالمي" },
    amenities: ["Private Master Bedroom & Shower", "Executive Boardroom Table", "VIP Lounge", "Private Security Escort Berth"],
    amenitiesAr: ["غرفة نوم رئيسية خاصة مع حمام وشاور", "طاولة اجتماعات تنفيذية لمجلس الإدارة", "صالة لاونج كبار الشخصيات VIP", "أماكن مخصصة للمرافقين والحراسة الأمنية"]
  }
];

export const AEROVAULT_EMPTY_LEGS: AerovaultEmptyLeg[] = [
  {
    id: "el-1",
    route: "Dubai (DWC) ➔ London Stansted (STN)",
    routeAr: "دبي (DWC) ➔ لندن ستانستد (STN)",
    aircraft: "Bombardier Global 7500",
    aircraftAr: "بومباردييه جلوبال ٧٥٠٠",
    date: "14 Oct 2026",
    dateAr: "١٤ أكتوبر ٢٠٢٦",
    regularPriceAED: 310000,
    dealPriceAED: 140000,
    savings: "55% OFF",
    savingsAr: "خصم ٥٥٪"
  },
  {
    id: "el-2",
    route: "Abu Dhabi (AUH) ➔ Riyadh (RUH)",
    routeAr: "أبوظبي (AUH) ➔ الرياض (RUH)",
    aircraft: "Embraer Phenom 300E",
    aircraftAr: "إمبراير فينوم ٣٠٠ إي",
    date: "18 Oct 2026",
    dateAr: "١٨ أكتوبر ٢٠٢٦",
    regularPriceAED: 66000,
    dealPriceAED: 27500,
    savings: "58% OFF",
    savingsAr: "خصم ٥٨٪"
  },
  {
    id: "el-3",
    route: "Dubai (DXB) ➔ Geneva (GVA)",
    routeAr: "دبي (DXB) ➔ جنيف (GVA)",
    aircraft: "Gulfstream G650ER",
    aircraftAr: "جلف ستريم G650ER",
    date: "22 Oct 2026",
    dateAr: "٢٢ أكتوبر ٢٠٢٦",
    regularPriceAED: 338000,
    dealPriceAED: 154000,
    savings: "54% OFF",
    savingsAr: "خصم ٥٤٪"
  },
  {
    id: "el-4",
    route: "Dubai (DWC) ➔ Mumbai (BOM)",
    routeAr: "دبي (DWC) ➔ مومباي (BOM)",
    aircraft: "Bombardier Challenger 650",
    aircraftAr: "بومباردييه تشالنجر ٦٥٠",
    date: "25 Oct 2026",
    dateAr: "٢٥ أكتوبر ٢٠٢٦",
    regularPriceAED: 128000,
    dealPriceAED: 51000,
    savings: "60% OFF",
    savingsAr: "خصم ٦٠٪"
  }
];

export const AEROVAULT_JET_CARD_TIERS: AerovaultJetCardTier[] = [
  {
    id: "tier-25",
    title: "25-Hour Light Jet Card",
    titleAr: "بطاقة ٢٥ ساعة طيران نفاثة خفيفة",
    hours: 25,
    aircraftType: "Phenom 300E / Light Jet Class",
    aircraftTypeAr: "فينوم ٣٠٠ إي / فئة النفاثات الخفيفة",
    priceAED: 350000,
    fixedHourlyAED: 14000,
    dispatchNotice: "12 Hours Guaranteed",
    dispatchNoticeAr: "تأكيد الطائرة خلال ١٢ ساعة فقط",
    features: [
      "Fixed hourly rates with zero repositioning fees",
      "Guaranteed aircraft availability 365 days a year",
      "Complimentary standard VIP catering & Wi-Fi",
      "ExecuJet & Jetex VIP Terminal access"
    ],
    featuresAr: [
      "سعر ساعة ثابت بدون أي رسوم تموضع أو عودة",
      "ضمان توفر الطائرة على مدار ٣٦٥ يوماً بالعام",
      "شامل الضيافة الفاخرة والإنترنت الفضائي مجاناً",
      "دخول مجاني لصالات إكسيكوجيت وجتكس VIP"
    ]
  },
  {
    id: "tier-50",
    title: "50-Hour Midsize Executive Card",
    titleAr: "بطاقة ٥٠ ساعة تنفيذية متوسطة",
    hours: 50,
    aircraftType: "Challenger 650 / Super Midsize",
    aircraftTypeAr: "تشالنجر ٦٥٠ / فئة السوبر متوسطة",
    priceAED: 1200000,
    fixedHourlyAED: 24000,
    dispatchNotice: "10 Hours Guaranteed",
    dispatchNoticeAr: "تأكيد الطائرة خلال ١٠ ساعات فقط",
    features: [
      "Transcontinental range without fuel stops",
      "Dedicated Flight Account Director 24/7",
      "Custom hot gourmet catering & fine tea selection",
      "Tarmac private vehicle transfer to aircraft"
    ],
    featuresAr: [
      "مدى طيران عابر للقارات بدون توقف للتزود بالوقود",
      "مدير حسابات طيران تنفيذي مكرس على مدار الساعة",
      "قوائم طعام ساخنة فاخرة ومشروبات مميزة",
      "خدمة نقل بالسيارة الفاخرة حتى سلم الطائرة"
    ]
  },
  {
    id: "tier-100",
    title: "100-Hour Sovereign Ultra Long Card",
    titleAr: "بطاقة ١٠٠ ساعة سيادية فائقة المدى",
    hours: 100,
    aircraftType: "Gulfstream G650ER / Global 7500",
    aircraftTypeAr: "جلف ستريم G650ER / جلوبال ٧٥٠٠",
    priceAED: 3950000,
    fixedHourlyAED: 39500,
    dispatchNotice: "6 Hours Guaranteed (Emergency SLA)",
    dispatchNoticeAr: "تأكيد الطائرة خلال ٦ ساعات فقط (طوارئ)",
    features: [
      "Global non-stop capability (Dubai to NYC / Tokyo)",
      "Priority diplomatic & overflight permit expediting",
      "Private bedroom suite & dedicated flight attendant",
      "Helicopter transfer from Dubai/Abu Dhabi helipads"
    ],
    featuresAr: [
      "طيران مباشر حول العالم (دبي إلى نيويورك / طوكيو)",
      "تسريع استخراج التصاريح الدبلوماسية والعبور الجوي",
      "جناح نوم ماستر مستقل ومضيفة طيران مخصصة",
      "خدمة نقل مجانية بطائرة هليكوبتر من مهابط دبي وأبوظبي"
    ]
  }
];

export const AEROVAULT_CASE_STUDY: AerovaultCaseStudy = {
  clientTitle: "Diplomatic Emergency Flight — 90-Minute Urgent Dispatch",
  clientTitleAr: "رحلة دبلوماسية طارئة — إقلاع خلال ٩٠ دقيقة فقط",
  location: "Dubai DWC FBO Terminal ➔ Zurich Airport",
  locationAr: "صالة كبار الشخصيات DWC دبي ➔ مطار زيورخ الدولي",
  challenge: "Urgent diplomatic mission required 12 delegates dispatched on a non-stop transcontinental flight within 90 minutes of initial call.",
  challengeAr: "مهمة دبلوماسية رفيعة المستوى استدعت نقل وفد من ١٢ شخصية على رحلة عابرة للقارات بدون توقف مع جاهزية إقلاع خلال ٩٠ دقيقة فقط من تلقي الاتصال.",
  solution: "AEROVAULT secured an en-route Bombardier Global 7500 at ExecuJet DWC Terminal with fast-track diplomatic passport clearance in 65 minutes.",
  solutionAr: "قامت إيروفولت بتجهيز طائرة بومباردييه جلوبال ٧٥٠٠ بصالة إكسيكوجيت بمطار آل مكتوم، وإنهاء تصاريح الركاب الدبلوماسية والإقلاع الفعلي في ٦٥ دقيقة فقط.",
  metrics: {
    dispatchTime: "65 Mins En-Route",
    dispatchTimeAr: "٦٥ دقيقة زمن الإقلاع",
    passengers: "12 VIP Delegates",
    passengersAr: "١٢ دبلوماسياً رفيع المستوى",
    privacyRating: "100% Confidentiality",
    privacyRatingAr: "١٠٠٪ سرية وأمان تام"
  },
  image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop"
};

export const AEROVAULT_LEADERS: AerovaultLeader[] = [
  {
    name: "Capt. Alexander Vance",
    nameAr: "القبطان ألكسندر فانس",
    role: "Founder & Chief Aviation Officer",
    roleAr: "المؤسس والرئيس التنفيذي للعمليات الجوية",
    experience: "22+ Yrs Business Aviation & Airline Transport Pilot",
    experienceAr: "خبرة تفوق ٢٢ عاماً في الطيران الخاص وقيادة الطائرات",
    specialization: "Transcontinental Aircraft Leasing & FBO Logistics",
    specializationAr: "إدارة أساطيل الطيران العابرة للقارات ولوجستيات صالات VIP",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Mariam Al-Maktoum",
    nameAr: "مريم المكتوم",
    role: "Head of VIP Concierge & Flight Desks",
    roleAr: "مديرة كونسيرج ومكاتب كبار الشخصيات",
    experience: "15+ Yrs Private Jet Charter Operations",
    experienceAr: "١٥+ عاماً في عمليات وإدارة رحلات الطيران الخاص",
    specialization: "HNWI Flight Support & Diplomatic Protocols",
    specializationAr: "بروتوكولات الوفود الرسمية والدبلوماسية وخدمة كبار الشخصيات",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Tariq Al-Hashemi",
    nameAr: "طارق الهاشمي",
    role: "Head of Jet Card & Fleet Brokerage",
    roleAr: "مدير برامج بطاقات الطيران ووساطة الأساطيل",
    experience: "12+ Yrs Aircraft Brokerage & Corporate Accounts",
    experienceAr: "١٢+ عاماً في وساطة الطائرات وحسابات الشركات الكبرى",
    specialization: "Corporate Flight Programs & Empty Leg Trading",
    specializationAr: "حسابات طيران الشركات وتداول عروض الرحلات الفارغة",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Chef David Sterling",
    nameAr: "الشيف ديفيد ستيرلينغ",
    role: "Head of VIP In-Flight Gastronomy",
    roleAr: "رئيس طهاة الضيافة الجوية الفاخرة",
    experience: "16+ Yrs High-Altitude Fine Dining Chef",
    experienceAr: "١٦+ عاماً في ابتكار قوائم الطعام لارتفاعات ٤٠ ألف قدم",
    specialization: "Altitude-Balanced Culinary Menus & Caviar Service",
    specializationAr: "قوائم الطعام الراقية لارتفاعات الطيران وخدمة الكافيار الملكي",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
  }
];

export const AEROVAULT_INSIGHTS: AerovaultInsight[] = [
  {
    id: "private-jet-vs-first-class",
    title: "Private Jet Charter vs Commercial First Class: The True Value",
    titleAr: "مقارنة حقيقية: استئجار طائرة خاصة مقابل الدرجة الأولى التجارية",
    category: "Aviation Guide",
    categoryAr: "دليل الطيران",
    readTime: "5 min read",
    readTimeAr: "٥ دقائق قراءة",
    summary: "Time saved, FBO lounge fast-tracking, privacy, and direct route access vs commercial airline scheduling.",
    summaryAr: "توفير الوقت، سرعة الإجراءات بصالات كبار الشخصيات، الخصوصية المطلقة، والوصول المباشر دون توقف.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "empty-leg-charters-explained",
    title: "How Empty Leg Jet Charters Can Save You Up to 60%",
    titleAr: "كيف توفر حتى ٦٠٪ عند حجز الرحلات الخاصة الفارغة (Empty Legs)",
    category: "Deals Guide",
    categoryAr: "عروض الرحلات",
    readTime: "4 min read",
    readTimeAr: "٤ دقائق قراءة",
    summary: "Understanding repositioning flights, flexible departure windows, and how to snag empty leg deals.",
    summaryAr: "فهم آلية رحلات العودة، مرونة مواعيد الإقلاع، وكيفية حجز نفس الرفاهية بنصف التكلفة.",
    image: "https://images.unsplash.com/photo-1519074069444-1ba4eaa16746?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "understanding-jet-cards",
    title: "Jet Cards vs On-Demand Charter: Which Is Right for You?",
    titleAr: "بطاقات الطيران أم الاستئجار عند الطلب: أيهما أنسب لجدولك؟",
    category: "Membership",
    categoryAr: "برامج العضوية",
    readTime: "5 min read",
    readTimeAr: "٥ دقائق قراءة",
    summary: "Comparing fixed hourly rates, guaranteed availability windows, and pay-as-you-fly flexibility.",
    summaryAr: "مقارنة دقيقة بين تثبيت سعر الساعة وضمان توافر الطائرة خلال ساعات مقابل الدفع عند كل رحلة.",
    image: "https://images.unsplash.com/photo-1559689408-9c16fc01c402?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "fbo-terminals-dubai",
    title: "Inside Dubai’s Executive FBO Terminals (DXB & DWC)",
    titleAr: "جولة داخل أفخم صالات الطيران الخاص في دبي (DXB و DWC)",
    category: "Terminals",
    categoryAr: "الصالات والمطارات",
    readTime: "4 min read",
    readTimeAr: "٤ دقائق قراءة",
    summary: "ExecuJet, Jetex, and DC Aviation VIP lounges, private customs clearance, and tarmac limousine service.",
    summaryAr: "صالات إكسيكوجيت وجتكس ودي سي للطيران، إنهاء الجوازات بخصوصية تامة، والنقل بسيارات الليموزين.",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "onboard-catering-altitude",
    title: "Fine Dining at 40,000 Feet: VIP In-Flight Catering",
    titleAr: "المأكولات الفاخرة على ارتفاع ٤٠ ألف قدم: أسرار الضيافة الجوية",
    category: "Hospitality",
    categoryAr: "الضيافة الجوية",
    readTime: "4 min read",
    readTimeAr: "٤ دقائق قراءة",
    summary: "How ambient pressure alters taste buds and why specialized VIP jet catering requires custom preparation.",
    summaryAr: "كيف يؤثر الضغط الجوي على حاسة التذوق ولماذا يتطلب طعام الطائرات الخاصة تحضيراً خاصاً ومدروساً.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "flying-pets-private-jet",
    title: "Flying with Pets on a Private Jet in the UAE",
    titleAr: "السفر مع الحيوانات الأليفة على متن الطائرات الخاصة في الإمارات",
    category: "Pet Travel",
    categoryAr: "سفر الحيوانات",
    readTime: "5 min read",
    readTimeAr: "٥ دقائق قراءة",
    summary: "Cabin pet freedom, import/export permits, and stress-free international travel for family pets.",
    summaryAr: "حرية الحيوان الأليف داخل المقصورة، استخراج تصاريح السفر، وتجربة سفر عائلية مريحة وخالية من التوتر.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop"
  }
];

export const AEROVAULT_DESKS: AerovaultDesk[] = [
  {
    city: "DUBAI (DWC / DXB)",
    cityAr: "دبي (DWC / DXB)",
    airport: "Al Maktoum International (DWC) & Dubai International (DXB)",
    airportAr: "مطار آل مكتوم الدولي (DWC) ومطار دبي الدولي (DXB)",
    terminal: "ExecuJet VIP Terminal & Jetex VIP Lounge",
    terminalAr: "صالة إكسيكوجيت وصالة جتكس لكبار الشخصيات",
    address: "Executive Aviation District, DWC Airport, Dubai, UAE",
    addressAr: "منطقة الطيران التنفيذي، مطار آل مكتوم DWC، دبي، الإمارات",
    phone: "+971 4 299 8800",
    availability: "24/7/365 Direct Flight Desk",
    availabilityAr: "مكتب عمليات مباشر على مدار ٢٤/٧/٣٦٥"
  },
  {
    city: "ABU DHABI (AUH)",
    cityAr: "أبوظبي (AUH)",
    airport: "Zayed International Airport (AUH) & Al Bateen Executive",
    airportAr: "مطار زايد الدولي ومطار البطين للطيران التنفيذي",
    terminal: "Al Bateen Executive Airport & Presidential Terminal",
    terminalAr: "مطار البطين التنفيذي والصالة الرئاسية",
    address: "Al Bateen Executive District, Abu Dhabi, UAE",
    addressAr: "منطقة البطين للطيران الخاص، أبوظبي، الإمارات",
    phone: "+971 2 699 4400",
    availability: "24/7/365 Direct Flight Desk",
    availabilityAr: "مكتب عمليات مباشر على مدار ٢٤/٧/٣٦٥"
  }
];

export const AEROVAULT_TESTIMONIALS = [
  {
    quote: "AEROVAULT dispatched a Global 7500 within 70 minutes for an urgent London meeting. Pristine cabin, stellar service, complete privacy.",
    quoteAr: "قامت إيروفولت بتجهيز طائرة جلوبال ٧٥٠٠ في ٧٠ دقيقة فقط لاجتماع طارئ في لندن. مقصورة لا تشوبها شائبة، وخدمة استثنائية وسرية تامة.",
    clientName: "Sultan Al Qassimi",
    clientNameAr: "سلطان القاسمي",
    vehicle: "Bombardier Global 7500",
    vehicleAr: "بومباردييه جلوبال ٧٥٠٠",
    location: "Dubai to London",
    locationAr: "دبي إلى لندن",
    rating: 5
  },
  {
    quote: "Our corporate executive team uses AEROVAULT Jet Cards exclusively. Fixed hourly rates, zero hassle, and guaranteed aircraft availability.",
    quoteAr: "يعتمد مجلس إدارتنا التنفيذي حصرياً على بطاقات طيران إيروفولت. أسعار ساعات ثابتة، وتأكيد فوري للطائرة بدون أي عناء.",
    clientName: "Marcus Vance",
    clientNameAr: "ماركوس فانس",
    vehicle: "CEO, Horizon Holdings",
    vehicleAr: "الرئيس التنفيذي، هورايزون القابضة",
    location: "UAE & GCC Routes",
    locationAr: "رحلات الإمارات والخليج",
    rating: 5
  },
  {
    quote: "Snagged an Empty Leg flight from Abu Dhabi to Riyadh for less than half price. Outstanding luxury experience at incredible value.",
    quoteAr: "حجزت رحلة فارغة (Empty Leg) من أبوظبي إلى الرياض بأقل من نصف السعر المعتاد. تجربة طيران فاخرة وقيمة لا تُضاهى.",
    clientName: "Fahad Al-Hassan",
    clientNameAr: "فهد الحسن",
    vehicle: "Phenom 300E Light Jet",
    vehicleAr: "إمبراير فينوم ٣٠٠ إي",
    location: "Abu Dhabi to Riyadh",
    locationAr: "أبوظبي إلى الرياض",
    rating: 5
  },
  {
    quote: "The onboard catering and pet-friendly cabin policy made our international family relocation completely stress-free.",
    quoteAr: "كانت الضيافة الفاخرة وسفر كلب العائلة معنا داخل المقصورة سبباً في جعل انتقالنا الدولي سلساً ومريحاً للغاية.",
    clientName: "Elena Rostova",
    clientNameAr: "إيلينا روستوفا",
    vehicle: "Gulfstream G650ER",
    vehicleAr: "جلف ستريم G650ER",
    location: "Dubai to Geneva",
    locationAr: "دبي إلى جنيف",
    rating: 5
  },
  {
    quote: "Exceptional FBO terminal handling at DWC ExecuJet. Drive up right to the aircraft steps in 5 minutes.",
    quoteAr: "خدمة صالة كبار الشخصيات في إكسيكوجيت DWC تفوق التوقعات. وصلت بسيارتي إلى سلم الطائرة مباشرة خلال ٥ دقائق فقط.",
    clientName: "Tariq Al-Maktoum",
    clientNameAr: "طارق المكتوم",
    vehicle: "Challenger 650",
    vehicleAr: "تشالنجر ٦٥٠",
    location: "Dubai FBO Terminal",
    locationAr: "صالة طيران دبي الخاصة",
    rating: 5
  }
];

export const AEROVAULT_FAQS = [
  {
    question: "How fast can you dispatch a private jet for an urgent trip?",
    questionAr: "كم يستغرق تجهيز وإقلاع طائرة خاصة لرحلة طارئة؟",
    answer: "Our average emergency dispatch time from Dubai (DWC/DXB) or Abu Dhabi (AUH) FBO VIP terminals is 90 minutes from flight confirmation.",
    answerAr: "متوسط وقت الجاهزية للإقلاع الطارئ من صالات كبار الشخصيات بمطاري دبي (DWC/DXB) أو أبوظبي (AUH) هو ٩٠ دقيقة فقط من تأكيد الحجز."
  },
  {
    question: "What is included in a private jet charter quote?",
    questionAr: "ما الذي تشمله تسعيرة استئجار الطائرة الخاصة؟",
    answer: "Our quotes are 100% all-inclusive — aircraft rental, dual-pilot flight crew, landing permits, fuel, VIP FBO terminal access, and standard VIP catering.",
    answerAr: "تسعيراتنا شاملة بنسبة ١٠٠٪ — إيجار الطائرة، طاقم قبطانين معتمدين، تصاريح الهبوط الدولية، الوقود، دخول صالات VIP، والضيافة الجوية الفاخرة."
  },
  {
    question: "What are Empty Leg flights and how do they work?",
    questionAr: "ما هي رحلات (Empty Legs) وكيف تعمل؟",
    answer: "Empty legs occur when an aircraft returns empty to home base after a one-way flight. You can book these one-way trips at discounts of up to 60% off.",
    answerAr: "تحدث الرحلات الفارغة عندما تعود الطائرة إلى قاعدتها بعد رحلة باتجاه واحد. يمكنك حجز هذه الرحلات والاستمتاع بنفس الفخامة بخصم يصل حتى ٦٠٪."
  },
  {
    question: "How does the AEROVAULT Jet Card membership work?",
    questionAr: "كيف يعمل برنامج عضوية بطاقة طيران إيروفولت؟",
    answer: "Our Jet Card allows you to pre-purchase flight hours at guaranteed fixed rates with guaranteed aircraft availability in as little as 10 to 12 hours notice.",
    answerAr: "تتيح لك بطاقة الطيران شراء ساعات طيران مسبقاً بأسعار ثابتة ومضمونة، مع تأكيد توفر الطائرة بإشعار يتراوح بين ٦ إلى ١٢ ساعة فقط."
  },
  {
    question: "Can I bring pets inside the cabin with me?",
    questionAr: "هل يُسمح باصطحاب الحيوانات الأليفة داخل المقصورة؟",
    answer: "Yes! On private jet charters, your pets travel right beside you in the climate-controlled cabin with full freedom rather than in cargo.",
    answerAr: "نعم بكل تأكيد! في رحلات الطيران الخاص تسافر الحيوانات الأليفة بجوارك بحرية تامة داخل المقصورة المكيفة دون الحاجة لإيداعها في الشحن."
  },
  {
    question: "Which Dubai and Abu Dhabi airports do you operate from?",
    questionAr: "من أي مطارات تعملون في دبي وأبوظبي؟",
    answer: "We operate out of Dubai Al Maktoum International (DWC ExecuJet/Jetex FBO), Dubai International (DXB Terminal 2 FBO), and Abu Dhabi Al Bateen Executive Airport.",
    answerAr: "نعمل من مطار آل مكتوم الدولي (صالات إكسيكوجيت وجتكس DWC)، مطار دبي الدولي (صالة كبار الشخصيات DXB)، ومطار البطين للطيران الخاص بأبوظبي."
  },
  {
    question: "Is custom fine dining and catering available onboard?",
    questionAr: "هل تتوفر قوائم طعام وضيافة خاصة حسب الطلب؟",
    answer: "Yes! Custom gourmet menus, sushi, caviar, dietary specific meals, and premium beverages can be ordered through our VIP flight concierge.",
    answerAr: "نعم! نوفر قوائم طعام راقية ومخصصة تشمل السوشي، الكافيار، الأطباق النباتية أو الخالية من الجلوتين، والمشروبات الفاخرة عبر كونسيرج الطيران."
  },
  {
    question: "How many luggage pieces can be loaded on a private jet?",
    questionAr: "ما هو حجم وسعة الأمتعة المسموح بها على متن الطائرة؟",
    answer: "Luggage capacity depends on aircraft size. Light jets hold 6 to 8 suitcases, while Heavy Jets (Legacy 650, Global 7500) accommodate up to 20+ large suitcases.",
    answerAr: "تعتمد سعة الأمتعة على فئة الطائرة. تستوعب النفاثات الخفيفة ٦-٨ حقائب، بينما تستوعب الطائرات الثقيلة وفائقة المدى (مثل جلوبال ٧٥٠٠) أكثر من ٢٠ حقيبة كبيرة."
  },
  {
    question: "What safety accreditations do your charter aircraft carry?",
    questionAr: "ما هي شهادات واعتمادات الأمان التي تحملها طائراتكم؟",
    answer: "Every operator in our global network holds ARGUS Gold/Platinum or IS-BAO safety certifications with dual-pilot captain command.",
    answerAr: "يحمل جميع مشغلي شبكتنا شهادات السلامة الجوية المعتمدة عالمياً من ARGUS الذهبية/البلاتينية و IS-BAO مع قيادة ثنائية بقبطانين مرخصين."
  },
  {
    question: "How do I request an immediate private jet flight quote?",
    questionAr: "كيف يمكنني طلب تسعيرة فورية وتأكيد حجز طائرة خاصة الآن؟",
    answer: "Use our Instant Flight Quote Tool, call our 24/7 Charter Desk at +971 4 299 8800, or send our flight desk a message on WhatsApp.",
    answerAr: "استخدم حاسبة الطيران الفورية بالموقع، أو اتصل بمكتب الطيران ٢٤/٧ على 8800 299 4 971+، أو راسلنا مباشرة عبر واتساب."
  }
];