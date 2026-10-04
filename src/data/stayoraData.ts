export interface StayoraProperty {
  id: string;
  title: string;
  titleAr: string;
  community: string;
  communityAr: string;
  emirate: string;
  emirateAr: string;
  bedrooms: string;
  bedroomsAr: string;
  guests: number;
  avgNightlyRateAED: number;
  rating: number;
  reviewsCount: number;
  occupancyRate: number;
  image: string;
  features: string[];
  featuresAr: string[];
}

export interface StayoraService {
  id: string;
  tag: string;
  title: string;
  titleAr: string;
  shortDescription: string;
  shortDescriptionAr: string;
  fullDescription: string;
  fullDescriptionAr: string;
  outcomes: string[];
  outcomesAr: string[];
  iconName: string;
}

export interface StayoraCaseStudy {
  clientTitle: string;
  clientTitleAr: string;
  location: string;
  locationAr: string;
  propertyType: string;
  propertyTypeAr: string;
  challenge: string;
  challengeAr: string;
  beforeLongTermAED: number;
  afterShortTermAED: number;
  increasePercent: number;
  occupancyPercent: number;
  rating: number;
  image: string;
}

export interface StayoraLeader {
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

export interface StayoraInsight {
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

export interface StayoraLocation {
  city: string;
  cityAr: string;
  area: string;
  areaAr: string;
  description: string;
  descriptionAr: string;
  address: string;
  addressAr: string;
  phone: string;
}

export interface StayoraTestimonial {
  quote: string;
  quoteAr: string;
  clientName: string;
  clientNameAr: string;
  role: string;
  roleAr: string;
  location: string;
  locationAr: string;
  rating: number;
}

export interface StayoraFAQ {
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
}

export const STAYORA_BRAND = {
  name: "STAYORA",
  nameAr: "ستايورا",
  tagline: "Your Home, Working Harder.",
  taglineAr: "عقارك، يعمل بكفاءة وأرباح أعلى.",
  subheading: "Full-service short-term rental & Airbnb management in Dubai, Abu Dhabi, and Ras Al Khaimah that maximizes property income while you do nothing.",
  subheadingAr: "إدارة متكاملة لبيوت العطلات والإيجارات قصيرة الأجل في دبي وأبوظبي ورأس الخيمة تضاعف أرباحك دون أي عناء.",
  phone: "+971 4 889 5420",
  whatsapp: "https://wa.me/971523394001?text=Hello%20STAYORA,%20I%20would%20like%20a%20free%20short-term%20income%20estimate%20for%20my%20property.",
  email: "owners@stayora.ae",
  managedPropertiesCount: 450,
  revenueGeneratedAED: "62M+",
  revenueGeneratedAEDAr: "٦٢ مليون+",
  avgOccupancyPercent: 82,
  emiratesCovered: ["Dubai", "Abu Dhabi", "Ras Al Khaimah"],
  emiratesCoveredAr: ["دبي", "أبوظبي", "رأس الخيمة"],
};

export const STAYORA_PLATFORMS = [
  { name: "Airbnb Superhost", nameAr: "مضيف متميز سوبرهوست", badge: "Superhost Verified", badgeAr: "معتمد سوبرهوست" },
  { name: "Booking.com Preferred", nameAr: "شريك بوكينج المفضل", badge: "Preferred Partner", badgeAr: "شريك معتمد" },
  { name: "Vrbo Premier", nameAr: "مضيف فيربو المميز", badge: "Premier Host", badgeAr: "مضيف رئيسي" },
  { name: "NOVA GROUP", nameAr: "مجموعة نوفا", badge: "Asset Partner", badgeAr: "شريك أصول" },
  { name: "ALTA HOLDINGS", nameAr: "ألتا القابضة", badge: "Portfolio Partner", badgeAr: "شريك محافظ" },
  { name: "VANTAGE RETAIL", nameAr: "فانتيدج هوسبيتاليتي", badge: "Hospitality Partner", badgeAr: "شريك ضيافة" },
];

export const STAYORA_SERVICES: StayoraService[] = [
  {
    id: "listing-management",
    tag: "01",
    title: "Listing Optimization & Copy",
    titleAr: "تحسين القوائم وصياغة المحتوى التسويقي",
    shortDescription: "High-converting SEO descriptions, professional editorial photography, and multi-language copywriting tailored for high-ticket travelers.",
    shortDescriptionAr: "نصوص تسويقية متوافقة مع محركات البحث، تصوير معماري فاخر، وترجمة بعدة لغات لجذب كبار السياح ورجال الأعمال.",
    fullDescription: "We engineer bespoke listings that capture top search positions on Airbnb, Booking.com, and Vrbo. Our content team crafts compelling narratives highlighting your property's unique aesthetic and luxury amenities.",
    fullDescriptionAr: "نصمم قوائم مخصصة تضمن تصدر عقارك أعلى نتائج البحث في منصات إيربنب وبوكينج. يسلط فريقنا الضوء على تفاصيل الفخامة والإطلالات الاستثنائية.",
    outcomes: ["+45% Listing Impression Rate", "Top 5% Search Visibility", "Multi-Language Guest Targeting"],
    outcomesAr: ["+٤٥٪ زيادة في مشاهدات القائمة", "ضمن أعلى ٥٪ في نتائج البحث", "استهداف نزلاء بعدة لغات عالمية"],
    iconName: "FileText"
  },
  {
    id: "dynamic-pricing",
    tag: "02",
    title: "Dynamic Pricing & Revenue Yield",
    titleAr: "التسعير الذكي وإدارة العوائد المتقدمة",
    shortDescription: "AI-driven algorithms combined with local yield management experts to optimize nightly rates per event, season, and market demand.",
    shortDescriptionAr: "خوارزميات تسعير ذكية تتكيف آلياً مع فعاليات الإمارات ومواسم السياحة لرفع متوسط سعر الليلة لأقصى حد.",
    fullDescription: "Rates update automatically multiple times per day based on Dubai Expo events, Formula 1 weekend surges, holiday rushes, and neighborhood competitor inventory.",
    fullDescriptionAr: "يتم تحديث الأسعار عدة مرات يومياً بناءً على مواسم الأعياد، عطلة نهاية أسبوع الفورمولا ١ في أبوظبي، وحجم الطلب في المنطقة المحيطة.",
    outcomes: ["+38% Average Nightly Rate Surge", "82%+ Year-Round Occupancy", "Daily Automated Yield Adjustment"],
    outcomesAr: ["+٣٨٪ ارتفاع في متوسط سعر الليلة", "نسبة إشغال سنوي تفوق ٨٢٪", "تعديل يومي مؤتمت للأسعار"],
    iconName: "TrendingUp"
  },
  {
    id: "guest-communication",
    tag: "03",
    title: "24/7 Guest Relations & Check-In",
    titleAr: "خدمة النزلاء والاستقبال الذكي على مدار الساعة",
    shortDescription: "Multilingual concierge team responding to inquiries within 3 minutes, managing digital keypads, and providing 5-star host assistance.",
    shortDescriptionAr: "فريق كونسيرج متعدد اللغات يرد على استفسارات الضيوف خلال ٣ دقائق، مع دخول ذكي بالأقفال الرقمية وخدمة فندقية شاملة.",
    fullDescription: "From pre-arrival passport registration to personalized airport transfers and in-stay concierge requests, we ensure seamless guest satisfaction that earns 4.9+ star reviews.",
    fullDescriptionAr: "نتولى تسجيل جوازات السفر قبل الوصول، وتنسيق الاستقبال، وتلبية طلبات النزلاء أثناء الإقامة لضمان تقييم ٥ نجوم مستمر.",
    outcomes: ["Sub-3 Min Response Guarantee", "4.95 Average Star Review", "Instant Digital Self Check-In"],
    outcomesAr: ["ضمان الرد في أقل من ٣ دقائق", "متوسط تقييم ٤.٩٥ من ٥", "دخول ذاتي فوري بالأقفال الذكية"],
    iconName: "MessageSquare"
  },
  {
    id: "cleaning-turnover",
    tag: "04",
    title: "Five-Star Cleaning & Linen Service",
    titleAr: "النظافة الفندقية الفاخرة وتبديل البياضات",
    shortDescription: "Hotel-grade housekeeping between stays, crisp 300-thread Egyptian cotton linens, and luxury bathroom amenity replenishments.",
    shortDescriptionAr: "تنظيف وتعقيم فندقي شامل بعد كل إقامة، مع بياضات قطنية مصرية فاخرة ومستلزمات عناية شخصية عضوية راقية.",
    fullDescription: "Dedicated hospitality cleaners inspect every corner before guest arrival. We provide premium bathrobes, organic toiletries, fresh towels, and welcome luxury snack baskets.",
    fullDescriptionAr: "فريق نظافة مدرب يفحص أدق تفاصيل العقار قبل وصول الضيف، مع توفير مناشف معقمة، أرواب استحمام، وسلال ضيافة ترحيبية.",
    outcomes: ["100% Sanitation Guarantee", "Hotel-Grade Linens Included", "Pre-Check-In Quality Audit"],
    outcomesAr: ["ضمان تعقيم ونظافة ١٠٠٪", "بياضات ومفارش فندقية فاخرة", "فحص جودة شامل قبل كل حجز"],
    iconName: "ShieldCheck"
  },
  {
    id: "photography-styling",
    tag: "05",
    title: "Interior Styling & Photography",
    titleAr: "التأثيث والتنسيق الداخلي والتصوير المعماري",
    shortDescription: "Editorial interior styling, high-res HDR architectural photography, and 3D virtual walkthroughs that make your property pop.",
    shortDescriptionAr: "تنسيق ديكور راقٍ، جلسات تصوير فوتوغرافي بتقنية HDR، وجولات افتراضية ثلاثية الأبعاد تبرز جمال العقار.",
    fullDescription: "Our interior design specialists furnish and accent your property with contemporary UAE decor that photographs brilliantly and appeals directly to premium vacationers.",
    fullDescriptionAr: "يقوم مصممونا بإضافة لمسات ديكور عصرية تتناسب مع ذوق السياح الباحثين عن الفخامة في دبي وأبوظبي، مع تصوير احترافي فائق الوضوح.",
    outcomes: ["Professional HDR Photo Suite", "3D Virtual Property Tour", "High-Converting Hero Visuals"],
    outcomesAr: ["ألبوم صور HDR احترافي", "جولة افتراضية تفاعلية 3D", "صور رئيسية ترفع معدل الحجز"],
    iconName: "Camera"
  },
  {
    id: "dtcm-permit",
    tag: "06",
    title: "DTCM Permit & Legal Support",
    titleAr: "إصدار تراخيص السياحة والامتثال الحكومي",
    shortDescription: "Complete handling of Dubai DTCM, Abu Dhabi DCT, and RAK RAKTA holiday home permits and guest registration.",
    shortDescriptionAr: "إدارة كاملة لتصاريح دائرة الاقتصاد والسياحة بدبي (DTCM) وهيئة أبوظبي للتراث والسياحة وتراخيص رأس الخيمة.",
    fullDescription: "We navigate all government paperwork, tourism dirham tax collections, mandatory guest passport uploads, and annual permit renewals on your behalf.",
    fullDescriptionAr: "نتولى كافة الإجراءات الرسمية، تحصيل وتوريد رسوم درهم السياحة، تحميل بيانات النزلاء الأمنية، وتجديد التراخيص سنوياً.",
    outcomes: ["100% DTCM & DCT Compliance", "Zero Licensing Hassle", "Automated Tourism Tax Submissions"],
    outcomesAr: ["امتثال تام ١٠٠٪ لتعليمات السياحة", "راحة بال بدون أي تعقيدات قانونية", "توريد آلي لرسوم درهم السياحة"],
    iconName: "ShieldCheck"
  },
  {
    id: "multi-platform",
    tag: "07",
    title: "Multi-Platform Distribution",
    titleAr: "التوزيع والتسويق المتزامن عبر المنصات",
    shortDescription: "Synchronized calendar distribution across 15+ global booking portals to eliminate double bookings and maximize exposure.",
    shortDescriptionAr: "ربط متزامن ومباشر لتقويم الحجوزات عبر أكثر من ١٥ منصة عالمية لمنع التضارب وضمان أعلى نسبة إشغال.",
    fullDescription: "Your property is listed simultaneously on Airbnb, Booking.com, Vrbo, Agoda, Expedia, and STAYORA Direct Booking Channel for corporate stays.",
    fullDescriptionAr: "يتم تسويق عقارك بالتوازي على Airbnb، Booking.com، Vrbo، Agoda، Expedia، بالإضافة إلى منصة الحجز المباشر لستايورا للشركات.",
    outcomes: ["Real-Time Calendar Sync", "15+ Global Booking Portals", "Direct Corporate Client Access"],
    outcomesAr: ["تزامن فوري لتقويم الحجوزات", "انتشار في ١٥+ موقع سفر عالمي", "وصول مباشر لعملاء الشركات الكبرى"],
    iconName: "Share2"
  },
  {
    id: "owner-reporting",
    tag: "08",
    title: "Transparent Owner Portal & Payouts",
    titleAr: "بوابة الملاك الإلكترونية والتحويلات الشهرية",
    shortDescription: "Real-time owner dashboard tracking booking calendars, monthly revenue statements, maintenance receipts, and direct bank payouts.",
    shortDescriptionAr: "لوحة تحكم مباشرة تتيح لك متابعة الحجوزات لحظياً، فواتير الإيرادات، وسجلات الصيانة، مع تحويل بنكي شهري في موعد محدد.",
    fullDescription: "Complete financial transparency. View your exact monthly gross income, platform fees, maintenance logs, and receive net payouts directly into your UAE bank account on the 10th of every month.",
    fullDescriptionAr: "شفافية مالية مطلقة. اطلع على إجمالي الإيرادات، العمولات، وتقارير الصيانة الدورية مع تحويل صافي أرباحك لحسابك البنكي في يوم ١٠ من كل شهر.",
    outcomes: ["Direct Bank Payouts on 10th", "24/7 Mobile Dashboard Access", "Detailed Expense Itemization"],
    outcomesAr: ["تحويل بنكي مباشر في ١٠ من كل شهر", "متابعة مباشرة عبر الجوال ٢٤/٧", "كشف حساب مفصل ومعتمد"],
    iconName: "PieChart"
  }
];

export const STAYORA_PROPERTIES: StayoraProperty[] = [
  {
    id: "marina-skyline-suite",
    title: "The Marina Pinnacle Skyline Suite",
    titleAr: "جناح مارينا بينيكل البانورامي",
    community: "Dubai Marina",
    communityAr: "دبي مارينا",
    emirate: "Dubai",
    emirateAr: "دبي",
    bedrooms: "2 Bedrooms",
    bedroomsAr: "غرفتا نوم",
    guests: 5,
    avgNightlyRateAED: 850,
    rating: 4.95,
    reviewsCount: 142,
    occupancyRate: 86,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    features: ["Panoramic Sea Views", "Private Jacuzzi Balcony", "Direct Marina Walk Access"],
    featuresAr: ["إطلالة بانورامية على البحر", "شرفة خاصة مع جاكوزي", "دخول مباشر لممشى المارينا"]
  },
  {
    id: "downtown-burj-residence",
    title: "Burj Vista Royal Penthouse",
    titleAr: "بنتهاوس برج فيستا الملكي",
    community: "Downtown Dubai",
    communityAr: "وسط مدينة دبي (داون تاون)",
    emirate: "Dubai",
    emirateAr: "دبي",
    bedrooms: "3 Bedrooms",
    bedroomsAr: "٣ غرف نوم",
    guests: 7,
    avgNightlyRateAED: 1650,
    rating: 4.98,
    reviewsCount: 98,
    occupancyRate: 88,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    features: ["Full Burj Khalifa View", "Private Elevator Access", "Walk to Dubai Mall"],
    featuresAr: ["إطلالة كاملة على برج خليفة", "مصعد خاص مباشر", "خطوات من دبي مول"]
  },
  {
    id: "palm-jumeirah-beach-villa",
    title: "Palm Jumeirah Sunset Beach Villa",
    titleAr: "فيلا الشاطئ والغروب في نخلة جميرا",
    community: "Palm Jumeirah",
    communityAr: "نخلة جميرا",
    emirate: "Dubai",
    emirateAr: "دبي",
    bedrooms: "4 Bedrooms",
    bedroomsAr: "٤ غرف نوم",
    guests: 10,
    avgNightlyRateAED: 3400,
    rating: 4.97,
    reviewsCount: 64,
    occupancyRate: 81,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
    features: ["Private Sandy Beach", "Infinity Heated Pool", "Dedicated Butler Service"],
    featuresAr: ["شاطئ رملي خاص", "مسبح إنفينيتي دافئ", "خدمة مضيف خاص"]
  },
  {
    id: "reem-island-waterfront",
    title: "Radiant Bay Waterfront Apartment",
    titleAr: "شقة الواجهة المائية في جزيرة الريم",
    community: "Al Reem Island",
    communityAr: "جزيرة الريم",
    emirate: "Abu Dhabi",
    emirateAr: "أبوظبي",
    bedrooms: "1 Bedroom",
    bedroomsAr: "غرفة نوم واحدة",
    guests: 3,
    avgNightlyRateAED: 490,
    rating: 4.91,
    reviewsCount: 86,
    occupancyRate: 84,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
    features: ["Canal Promenade Views", "Olympic Swimming Pool", "Fast WiFi 500Mbps"],
    featuresAr: ["إطلالة على الممشى المائي", "مسبح أولمبي فاخر", "إنترنت فائق السرعة ٥٠٠ ميجابت"]
  },
  {
    id: "marjan-island-beach-residence",
    title: "Mina Al Arab Oceanfront Residence",
    titleAr: "شقة ميناء العرب المطلة على المحيط",
    community: "Al Marjan Island",
    communityAr: "جزيرة المرجان",
    emirate: "Ras Al Khaimah",
    emirateAr: "رأس الخيمة",
    bedrooms: "2 Bedrooms",
    bedroomsAr: "غرفتا نوم",
    guests: 6,
    avgNightlyRateAED: 680,
    rating: 4.93,
    reviewsCount: 110,
    occupancyRate: 79,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
    features: ["Private Lagoon Access", "Sunset Terrace", "Family Resort Amenities"],
    featuresAr: ["وصول خاص للبحيرة الشاطئية", "تراس بإطلالة الغروب", "مرافق منتجع عائلي متكاملة"]
  },
  {
    id: "jbr-beach-haven",
    title: "Sadaf JBR Beachfront Haven",
    titleAr: "شقة صدف الفاخرة على شاطئ جي بي آر",
    community: "Jumeirah Beach Residence (JBR)",
    communityAr: "جميرا بيتش ريزيدنس (JBR)",
    emirate: "Dubai",
    emirateAr: "دبي",
    bedrooms: "2 Bedrooms",
    bedroomsAr: "غرفتا نوم",
    guests: 6,
    avgNightlyRateAED: 920,
    rating: 4.94,
    reviewsCount: 175,
    occupancyRate: 87,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1200&auto=format&fit=crop",
    features: ["Direct Beach Walk", "Ain Dubai Ferris View", "100+ Dining Outlets Steps Away"],
    featuresAr: ["دخول مباشر للشاطئ", "إطلالة على عين دبي", "أكثر من ١٠٠ مطعم ومقهى بالجوار"]
  }
];

export const STAYORA_CASE_STUDY: StayoraCaseStudy = {
  clientTitle: "Marina Crown 2BR Apartment — Owner Yield Transformation",
  clientTitleAr: "شقة غرفتين في مارينا كراون — مضاعفة عوائد المالك بنسبة +٧٧٪",
  location: "Dubai Marina, Dubai",
  locationAr: "دبي مارينا، دبي",
  propertyType: "2 Bedroom Luxury Apartment",
  propertyTypeAr: "شقة فاخرة مكونة من غرفتي نوم",
  challenge: "The property owner was earning AED 95,000/year under a standard annual tenant lease. Rental defaults, maintenance disputes, and below-market rent lock-in were suppressing annual net returns.",
  challengeAr: "كان مالك العقار يحصل على ٩٥,٠٠٠ درهم سنوياً فقط بموجب عقد إيجار سنوي تقليدي، مع معاناته من تأخر دفعات الإيجار ونزاعات الصيانة وتجميد العائد دون مواكبة نمو السوق.",
  beforeLongTermAED: 95000,
  afterShortTermAED: 168000,
  increasePercent: 77,
  occupancyPercent: 83,
  rating: 4.92,
  image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop"
};

export const STAYORA_LEADERS: StayoraLeader[] = [
  {
    name: "Tariq Al-Maktoum",
    nameAr: "طارق آل مكتوم",
    role: "Founder & Managing Director",
    roleAr: "المؤسس والرئيس التنفيذي",
    experience: "14+ Yrs Hospitality & UAE Real Estate",
    experienceAr: "١٤+ عاماً في الضيافة الفاخرة والعقارات",
    specialization: "Former Asset Director at Emaar Hospitality",
    specializationAr: "مدير أصول سابق في إعمار للضيافة",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Elena Rostova",
    nameAr: "إيلينا روستوفا",
    role: "Head of Dynamic Yield Analytics",
    roleAr: "رئيسة قسم إدارة العوائد والتسعير الذكي",
    experience: "11+ Yrs Dynamic Yield Analytics",
    experienceAr: "١١+ عاماً في تحليلات الإيرادات الفندقية",
    specialization: "Ex-Marriott International Yield Strategist",
    specializationAr: "مستشارة سابقة في فنادق ماريوت الدولية",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Zaid Bin Mansoor",
    nameAr: "زيد بن منصور",
    role: "Head of Property Operations & DTCM",
    roleAr: "رئيس العمليات والتراخيص الحكومية",
    experience: "10+ Yrs DTCM Compliance & Turnover",
    experienceAr: "١٠+ أعوام في الامتثال وإدارة العمليات",
    specialization: "Managed 800+ UAE Luxury Residences",
    specializationAr: "أدار بنجاح أكثر من ٨٠٠ وحدة سكنية فاخرة",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Sophia Sterling",
    nameAr: "صوفيا ستيرلينغ",
    role: "Head of 5-Star Guest Experience",
    roleAr: "رئيسة تجربة وخدمة النزلاء ٥ نجوم",
    experience: "9+ Yrs Boutique Hotel Concierge",
    experienceAr: "٩+ أعوام في الكونسيرج الفندقي الفاخر",
    specialization: "5-Star Hospitality Audit & Standards",
    specializationAr: "خبيرة معايير الضيافة والتقييم الفندقي",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
  }
];

export const STAYORA_INSIGHTS: StayoraInsight[] = [
  {
    id: "short-vs-long-term",
    title: "Short-Term vs Long-Term Rental: A 2026 UAE Income Comparison",
    titleAr: "الإيجار قصير الأجل مقابل السنوي: دراسة مقارنة لعوائد الإمارات ٢٠٢٦",
    category: "Market Yield",
    categoryAr: "عوائد السوق",
    readTime: "5 min read",
    readTimeAr: "٥ دقائق قراءة",
    summary: "Detailed financial breakdown comparing fixed annual leases against dynamic holiday home returns across Dubai Marina, Downtown, and Palm Jumeirah.",
    summaryAr: "تحليل مالي مفصل يقارن العقود السنوية الثابتة بعوائد بيوت العطلات اليومية في دبي مارينا، الداون تاون، ونخلة جميرا.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "dtcm-permits-guide",
    title: "Understanding DTCM Holiday Home Permits in Dubai",
    titleAr: "دليلك الشامل لتراخيص بيوت العطلات (DTCM) في دبي",
    category: "Legal & Permits",
    categoryAr: "التراخيص والامتثال",
    readTime: "7 min read",
    readTimeAr: "٧ دقائق قراءة",
    summary: "Step-by-step guide to legal compliance, tourism dirham tax registration, safety audits, and required building operator approvals.",
    summaryAr: "خطوات الامتثال القانوني، تسجيل رسوم درهم السياحة، واشتراطات السلامة وموافقات المطور العقاري.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "dynamic-pricing-secrets",
    title: "How Dynamic Pricing Maximizes Short-Term Rental Income",
    titleAr: "أسرار التسعير الذكي في مضاعفة أرباح بيوت العطلات",
    category: "Revenue Tech",
    categoryAr: "تقنيات العوائد",
    readTime: "4 min read",
    readTimeAr: "٤ دقائق قراءة",
    summary: "Why fixed nightly rates lose up to 40% of potential revenue during Dubai peak holiday seasons and Formula 1 week.",
    summaryAr: "لماذا تفقد الأسعار الثابتة حتى ٤٠٪ من الأرباح المحتملة خلال مواسم الأعياد وسباقات الفورمولا في أبوظبي.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "preparing-your-property",
    title: "Preparing Your Property for Short-Term Guests: Styling Tips",
    titleAr: "تجهيز وتأثيث عقارك لاستقبال النزلاء: نصائح الديكور الاحترافي",
    category: "Interior Design",
    categoryAr: "التصميم الداخلي",
    readTime: "6 min read",
    readTimeAr: "٦ دقائق قراءة",
    summary: "Key interior staging adjustments that convert casual browsers into instant booking guests on Airbnb and Booking.com.",
    summaryAr: "لمسات ديكور وتأثيث ذكية تحول متصفحي المنصات إلى نزلاء فعليين فوريين في إيربنب وبوكينج.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop"
  }
];

export const STAYORA_LOCATIONS: StayoraLocation[] = [
  {
    city: "DUBAI",
    cityAr: "دبي",
    area: "Dubai Marina — Operations HQ",
    areaAr: "دبي مارينا — المقر الرئيسي للعمليات",
    description: "Our main UAE headquarters managing over 320 properties in Dubai Marina, JBR, Downtown, Palm Jumeirah, and Business Bay.",
    descriptionAr: "مقرنا الإقليمي الرئيسي الذي يدير أكثر من ٣٢٠ عقاراً في دبي مارينا، جي بي آر، الداون تاون، نخلة جميرا، والخليج التجاري.",
    address: "Level 28, Marina Plaza Tower, Dubai Marina, Dubai, UAE",
    addressAr: "الطابق ٢٨، برج مارينا بلازا، دبي مارينا، دبي، الإمارات",
    phone: "+971 4 889 5420"
  },
  {
    city: "ABU DHABI",
    cityAr: "أبوظبي",
    area: "Al Reem Island — Guest Services Office",
    areaAr: "جزيرة الريم — مكتب خدمات النزلاء",
    description: "Dedicated capital team managing luxury apartments and beach villas across Al Reem Island, Saadiyat, and Yas Island.",
    descriptionAr: "فريق متخصص في العاصمة يدير الشقق الفاخرة والفلل الشاطئية في جزيرة الريم، السعديات، وجزيرة ياس.",
    address: "Addax Tower, Level 14, Al Reem Island, Abu Dhabi, UAE",
    addressAr: "برج أداكس، الطابق ١٤، جزيرة الريم، أبوظبي، الإمارات",
    phone: "+971 2 678 9110"
  },
  {
    city: "RAS AL KHAIMAH",
    cityAr: "رأس الخيمة",
    area: "Al Marjan Island — Coastal Properties Desk",
    areaAr: "جزيرة المرجان — مكتب العقارات الشاطئية",
    description: "Specialized resort desk servicing oceanfront holiday homes on Al Marjan Island and Mina Al Arab.",
    descriptionAr: "مكتب متخصص في إدارة بيوت العطلات الساحلية والمنتجعات الفاخرة في جزيرة المرجان وميناء العرب.",
    address: "Pacific Residences Plaza, Al Marjan Island, RAK, UAE",
    addressAr: "ساحة باسيفيك ريزيدنسز، جزيرة المرجان، رأس الخيمة، الإمارات",
    phone: "+971 7 244 8920"
  }
];

export const STAYORA_TESTIMONIALS: StayoraTestimonial[] = [
  {
    quote: "STAYORA nearly doubled my rental income in Dubai Marina and I haven't had to speak to a single guest myself. The DTCM permit and monthly bank payouts are seamless.",
    quoteAr: "ستايورا ضاعفت تقريباً أرباح شقتي في دبي مارينا دون أن أضطر للتحدث مع أي نزيل شخصياً. تراخيص السياحة والتحويلات البنكية الشهرية تتم بمنتهى الدقة والسلاسة.",
    clientName: "Lena Novak",
    clientNameAr: "لينا نوفاك",
    role: "Property Owner",
    roleAr: "مالكة شقة في دبي",
    location: "Dubai Marina (2BR)",
    locationAr: "دبي مارينا (شقة غرفتين)",
    rating: 5
  },
  {
    quote: "I live in London and was skeptical about renting my Downtown apartment short-term. STAYORA manages everything from check-in to cleaning. My net yield is up 64%.",
    quoteAr: "أقيم في لندن وكنت متردداً في البداية بشأن الإيجار قصير الأجل لشقتي في الداون تاون. ستايورا تدير كل شيء من الدخول إلى التنظيف، وارتفع صافي عائدي بنسبة ٦٤٪.",
    clientName: "Marcus Vance",
    clientNameAr: "ماركوس فانس",
    role: "Overseas Investor",
    roleAr: "مستثمر مقيم بالخارج",
    location: "Downtown Dubai (3BR)",
    locationAr: "داون تاون دبي (شقة ٣ غرف)",
    rating: 5
  },
  {
    quote: "The owner dashboard gives me 100% clear transparency. I get my net money direct in my Emirates NBD account every month on the 10th without fail.",
    quoteAr: "لوحة تحكم الملاك توفر لي وضوحاً وشفافية بنسبة ١٠٠٪. أستلم صافي أرباحي في حسابي ببنك الإمارات دبي الوطني يوم ١٠ من كل شهر بانتظام.",
    clientName: "Tariq Al-Suwaidi",
    clientNameAr: "طارق السويدي",
    role: "Portfolio Owner (4 Units)",
    roleAr: "مالك محفظة عقارية (٤ وحدات)",
    location: "Palm Jumeirah & JBR",
    locationAr: "نخلة جميرا وجي بي آر",
    rating: 5
  },
  {
    quote: "Their dynamic pricing software increased our average nightly rate during the Abu Dhabi F1 week by 140%. Excellent yield strategy and guest reviews.",
    quoteAr: "برنامج التسعير الذكي لديهم رفع متوسط سعر الليلة لشقتنا خلال أسبوع سباق الفورمولا ١ في أبوظبي بنسبة ١٤٠٪. استراتيجية عوائد وتقييمات ممتازة.",
    clientName: "Fatima Al-Hassan",
    clientNameAr: "فاطمة الحسن",
    role: "Property Owner",
    roleAr: "مالكة عقار",
    location: "Al Reem Island, Abu Dhabi",
    locationAr: "جزيرة الريم، أبوظبي",
    rating: 5
  }
];

export const STAYORA_FAQS: StayoraFAQ[] = [
  {
    question: "Is short-term rental legal in my building in Dubai / UAE?",
    questionAr: "هل تأجير العقار كبيت عطلات قانوني في مبناي في دبي والإمارات؟",
    answer: "Yes, short-term rental is fully legal in Dubai under the Department of Economy and Tourism (DTCM) regulations, as well as in Abu Dhabi (DCT) and Ras Al Khaimah (RAKTA). Certain master developments require specific operator approvals, which STAYORA handles completely.",
    answerAr: "نعم، تأجير بيوت العطلات قانوني تماماً ومصرح به في دبي تحت إشراف دائرة الاقتصاد والسياحة (DTCM)، وكذلك في أبوظبي (DCT) ورأس الخيمة (RAKTA). وتتولى ستايورا كافة الموافقات اللازمة."
  },
  {
    question: "Do you handle DTCM permits and tourism taxes for me?",
    questionAr: "هل تتكفل ستايورا بإصدار تصاريح السياحة (DTCM) ودفع الرسوم الضريبية؟",
    answer: "Absolutely. STAYORA applies for and manages your official DTCM holiday home permit, uploads guest passports to government security portals, and automatically submits monthly Tourism Dirham taxes on your behalf.",
    answerAr: "بالتأكيد. ستايورا تقدم على ترخيص بيت العطلات وتديره بالكامل، وترفع بيانات جوازات السفر للمنظومة الأمنية، وتقوم بتوريد رسوم درهم السياحة الشهرية آلياً نيابة عنك."
  },
  {
    question: "How is nightly pricing set for my property?",
    questionAr: "كيف يتم تحديد سعر الليلة الفندقية لعقاري؟",
    answer: "We utilize algorithmic revenue management software that adjusts your nightly rate multiple times per day based on local event surges, holiday demand, competitor occupancy, and weather patterns to maximize total monthly yield.",
    answerAr: "نستخدم برمجيات تسعير ذكية تقوم بتحديث أسعار الليلة آلياً عدة مرات يومياً استناداً إلى مواسم الفعاليات السياحية ونسب الإشغال في المنطقة لتحقيق أعلى عائد شهري."
  },
  {
    question: "Who cleans the property between guests?",
    questionAr: "من يتولى تنظيف وتجهيز العقار بين إقامات النزلاء؟",
    answer: "We employ a dedicated in-house hospitality team that conducts 5-star hotel-grade turnovers after every stay. This includes complete deep cleaning, linen laundry, bathroom restocking, and a 20-point quality audit.",
    answerAr: "لدينا فريق ضيافة فندقي مخصص يقوم بتنظيف شامل وتعقيم وتغيير البياضات وتوفير مستلزمات العناية وإجراء فحص جودة من ٢٠ نقطة بعد مغادرة كل نزيل."
  },
  {
    question: "How and when do I get paid?",
    questionAr: "كيف ومتى أستلم أرباحي الصافية؟",
    answer: "Net rental earnings are wired directly to your UAE or international bank account on the 10th of every month, accompanied by a detailed revenue statement in your online owner portal.",
    answerAr: "يتم تحويل صافي أرباح الإيجار مباشرة إلى حسابك البنكي في الإمارات أو دولياً في يوم ١٠ من كل شهر، مرفقة بكشف حساب مفصل في بوابتك الإلكترونية."
  },
  {
    question: "Can I block dates for my own personal or family use?",
    questionAr: "هل يمكنني حجز وإغلاق تواريخ لإقامتي الشخصية أو عائلتي؟",
    answer: "Yes! You retain 100% flexibility to block out personal stay dates anytime via your owner portal with zero penalties or restrictions.",
    answerAr: "نعم بكل تأكيد! تحتفظ بالمرونة الكاملة لتحديد تواريخ إقامتك الخاصة في أي وقت عبر بوابة الملاك بدون أي قيود أو رسوم إضافية."
  },
  {
    question: "What happens if a guest damages the property?",
    questionAr: "ماذا يحدث في حال تسبب أحد النزلاء بأي أضرار في العقار؟",
    answer: "Every reservation is covered by platform host protection policies (such as Airbnb AirCover up to $3M) plus STAYORA's pre-authorization security deposit system and mandatory guest identity verification.",
    answerAr: "جميع الحجوزات مشمولة بتأمين المضيفين الشامل (مثل تأمين إيربنب AirCover حتى ٣ ملايين دولار)، بالإضافة إلى نظام الوديعة التأمينية والتحقق الإلزامي من هوية الضيوف."
  }
];