export interface AutovantaService {
  id: string;
  tag: string;
  title: string;
  titleAr: string;
  shortDescription: string;
  shortDescriptionAr: string;
  fullDescription: string;
  fullDescriptionAr: string;
  turnaroundTime: string;
  turnaroundTimeAr: string;
  outcomes: string[];
  outcomesAr: string[];
  iconName: string;
  startingPriceAED: number;
}

export interface AutovantaCaseStudy {
  clientTitle: string;
  clientTitleAr: string;
  fleetSize: string;
  fleetSizeAr: string;
  challenge: string;
  challengeAr: string;
  beforeDowntime: string;
  beforeDowntimeAr: string;
  afterDowntime: string;
  afterDowntimeAr: string;
  reductionPercent: number;
  vehiclesUnderContract: number;
  complianceRate: string;
  complianceRateAr: string;
  image: string;
}

export interface AutovantaLeader {
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

export interface AutovantaInsight {
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

export interface AutovantaLocation {
  city: string;
  cityAr: string;
  area: string;
  areaAr: string;
  description: string;
  descriptionAr: string;
  address: string;
  addressAr: string;
  phone: string;
  hours: string;
  hoursAr: string;
}

export const AUTOVANTA_BRAND = {
  name: "AUTOVANTA",
  nameAr: "أوتوفانتا",
  tagline: "Precision Service. Every Time.",
  taglineAr: "دقة لا تضاهى في صيانة السيارات.",
  subheading: "Certified auto servicing, diagnostics, and repairs for every make and model in Dubai and Sharjah — backed by transparent upfront pricing and 12-month warranties.",
  subheadingAr: "مركز معتمد لصيانة وفحص وإصلاح كافة أنواع وموديلات السيارات في دبي والشارقة — بأسعار شفافة محددة مسبقاً وضمان ١٢ شهراً.",
  phone: "+971 4 341 8920",
  whatsapp: "https://wa.me/971523394001?text=Hello%20AUTOVANTA,%20I%20would%20like%20to%20get%20a%20service%20quote%20for%20my%20car.",
  email: "service@autovanta.ae",
  vehiclesServicedCount: "18,000+",
  avgRating: 4.9,
  locationsCount: 2,
  warrantyMonths: 12,
  serviceBaysCount: 24,
};

export const AUTOVANTA_FLEET_CLIENTS = [
  { name: "NOVA LOGISTICS", nameAr: "نوفا للخدمات اللوجستية", badge: "Fleet Logistics Partner", badgeAr: "شريك صيانة الأساطيل" },
  { name: "VANTAGE RETAIL", nameAr: "فانتيدج للتجزئة", badge: "Corporate Fleet Client", badgeAr: "أسطول سيارات الشركات" },
  { name: "ORBIT TECH MOBILITY", nameAr: "أوربت تك للتنقل", badge: "Mobility Fleet Client", badgeAr: "شريك التنقل الذكي" },
  { name: "EXPRESS CARGO UAE", nameAr: "إكسبريس للشحن السريع", badge: "Delivery Fleet Partner", badgeAr: "شريك أسطول التوصيل" },
  { name: "AMANA TRANSPORT", nameAr: "أمانة لنقل البضائع", badge: "Commercial Client", badgeAr: "شريك تجاري معتمد" },
];

export const AUTOVANTA_SERVICES: AutovantaService[] = [
  {
    id: "general-servicing",
    tag: "01",
    title: "General Servicing & Maintenance",
    titleAr: "الصيانة الدورية الشاملة وتبديل الزيوت",
    shortDescription: "Comprehensive 50-point inspection, synthetic oil change, fluid top-ups, filter replacements, and reset of service indicators.",
    shortDescriptionAr: "فحص شامل من ٥٠ نقطة، تبديل زيت المحرك التخليقي بالكامل، تبديل الفلاتر، وتصفير عداد الصيانة وبرمجته.",
    fullDescription: "From minor lube services to major 60,000km interval maintenance. We utilize high-grade Mobil1 & Liqui Moly synthetic lubricants tailored for UAE extreme desert heat.",
    fullDescriptionAr: "من الصيانة الدورية البسيطة إلى الصيانة الكبرى لمسافة ٦٠,٠٠٠ كم. نستخدم زيوت تخليقية بالكامل من موبيل ١ وليكوي مولي مصممة لتحمل حرارة الصيف الشديدة.",
    turnaroundTime: "2 to 4 Hours",
    turnaroundTimeAr: "٢ إلى ٤ ساعات",
    outcomes: ["50-Point RTA-Ready Check", "Full Synthetic Engine Oil Change", "Computer Diagnostic Scan"],
    outcomesAr: ["فحص ٥٠ نقطة مطابق لمعايير هيئة الطرق", "تغيير زيت المحرك التخليقي بالكامل", "فحص كمبيوتري شامل لكامل الأنظمة"],
    iconName: "Wrench",
    startingPriceAED: 350
  },
  {
    id: "engine-transmission",
    tag: "02",
    title: "Engine & Transmission Repair",
    titleAr: "صيانة وتوضيب المحركات وناقل الحركة (الجير)",
    shortDescription: "Precision diagnostic troubleshooting, head gasket overhaul, timing chain renewal, and automatic gearbox rebuilding.",
    shortDescriptionAr: "فحص دقيق للأعطال، استبدال وجوه الرأس، تغيير سيور وجنازير التايمنج، وتوضيب وصيانة نواقل الحركة الأوتوماتيكية.",
    fullDescription: "Our master mechanics utilize dealer-level OBD3 diagnostic computers to pin-point check engine lights, transmission gear slippage, and internal oil leaks.",
    fullDescriptionAr: "مهندسون معتمدون بأحدث أجهزة الفحص المعتمدة من الوكالات لتحديد أسباب لمبة المحرك، تفويت التروس، وتسريبات الزيوت بدقة متناهية.",
    turnaroundTime: "1 to 3 Days",
    turnaroundTimeAr: "١ إلى ٣ أيام",
    outcomes: ["Dealer-Level Diagnostics", "Complete Gasket Overhaul", "Transmission Fluid Flush"],
    outcomesAr: ["فحص كمبيوتر بمستوى الوكالة", "توضيب وجوانات أصلية بالكامل", "غسيل وتبديل زيت ناقل الحركة مع الفلتر"],
    iconName: "Cpu",
    startingPriceAED: 1200
  },
  {
    id: "brakes-suspension",
    tag: "03",
    title: "Brake & Suspension Services",
    titleAr: "صيانة المكابح والمساعدات ونظام التعليق",
    shortDescription: "OEM ceramic brake pad replacements, rotor machining, shock absorber renewals, and steering rack overhauls.",
    shortDescriptionAr: "تبديل فحمات الفرامل السيراميكية الأصلية، خرط وتنعيم الهوبات (الأقراص)، تجديد المساعدات ومجمع عجلة القيادة.",
    fullDescription: "Ensure maximum stopping power and highway stability. We install low-dust ceramic brake pads, skim warped brake discs, and align control arm bushings.",
    fullDescriptionAr: "نضمن لك أعلى قوة كبح وثبات تام على الطرق السريعة بتركيب فحمات سيراميك أصلية خالية من الغبار، وخرط دقيق للأقراص واستبدال جلب المقصات.",
    turnaroundTime: "2 to 5 Hours",
    turnaroundTimeAr: "٢ إلى ٥ ساعات",
    outcomes: ["Brembo & OEM Ceramic Pads", "Rotor Disc Resurfacing", "Shock Absorber Renewal"],
    outcomesAr: ["فحمات بريمبو وقطع أصلية OEM", "خرط دقيق لأقراص الفرامل بالليزر", "استبدال وتجديد المساعدات والمقصات"],
    iconName: "Shield",
    startingPriceAED: 450
  },
  {
    id: "ac-repair-diagnostics",
    tag: "04",
    title: "AC Repair & Extreme-Heat Diagnostics",
    titleAr: "إصلاح تكييف السيارات وفحص كفاءة التبريد في الصيف",
    shortDescription: "UAE 50°C heat-proof AC gas evacuation, compressor overhauls, leak detection, and cabin anti-bacterial flushing.",
    shortDescriptionAr: "تفريغ وتعبئة غاز المكيف الأصلي لتحمل درجات الحرارة (٥٠° مئوية)، توضيب الكمبروسر، كشف التسريب بالنيتروجين، وتعقيم نظام التكييف.",
    fullDescription: "Beat the summer heat. We pressure test your air conditioning loop with nitrogen gas, replace faulty AC compressors, and purge mold from evaporator coils.",
    fullDescriptionAr: "تغلب على حرارة الصيف الشديدة. نفحص دورة التكييف بضغط النيتروجين، ونستبدل ضواغط المكيف المعطوبة مع تنظيف كامل للمبخر وتطهير الهواء.",
    turnaroundTime: "2 to 6 Hours",
    turnaroundTimeAr: "٢ إلى ٦ ساعات",
    outcomes: ["Sub-5°C Air Vent Discharge", "R134a & R1234yf Refrigerant", "UV Dye Leak Detection"],
    outcomesAr: ["برودة هواء تصل لأقل من ٥ درجات", "شحن غاز تبريد أصلي R134a / R1234yf", "كشف التسريبات بالصبغة فوق البنفسجية"],
    iconName: "Wind",
    startingPriceAED: 380
  },
  {
    id: "electrical-battery",
    tag: "05",
    title: "Electrical & Battery Services",
    titleAr: "فحص وبرمجة الكهرباء وتبديل البطاريات AGM",
    shortDescription: "High-amperage AGM battery testing, alternator replacement, starter motor overhauls, and complex wire harness repairs.",
    shortDescriptionAr: "فحص كفاءة بطاريات AGM المتطورة، استبدال الدينامو، توضيب السلف، وإصلاح الضفائر الكهربائية والحساسات المعقدة.",
    fullDescription: "Extreme summer heat degrades batteries rapidly in the UAE. We carry VARTA and Bosch AGM batteries with 18-month warranties and instant roadside fitting.",
    fullDescriptionAr: "الحرارة الشديدة تضعف البطاريات في الإمارات بسرعة. نوفر بطاريات فارتا وبوش الأصلية بتقنية AGM بضمان ١٨ شهراً مع الفحص والبرمجة الفورية.",
    turnaroundTime: "1 to 2 Hours",
    turnaroundTimeAr: "١ إلى ٢ ساعة",
    outcomes: ["Bosch & VARTA AGM Stocked", "Alternator Output Test", "Zero Voltage Parasitic Scan"],
    outcomesAr: ["بطاريات بوش وفارتا AGM متوفرة", "فحص دقيق لشحن الدينامو", "كشف تهريب الكهرباء وتفريغ البطارية"],
    iconName: "Activity",
    startingPriceAED: 290
  },
  {
    id: "wheel-alignment",
    tag: "06",
    title: "3D Wheel Alignment & Balancing",
    titleAr: "ميزان ليزر ثلاثي الأبعاد وترصيص العجلات",
    shortDescription: "Laser 3D camera wheel alignment, high-speed computerized wheel balancing, and tire tread depth audits.",
    shortDescriptionAr: "ضبط زوايا العجلات بكاميرات الليزر ثلاثية الأبعاد، ترصيص كمبيوتري ديناميكي للسرعات العالية، وفحص عمق وتآكل الإطارات.",
    fullDescription: "Prevent uneven tire wear and steering pull. Our Hunter 3D laser alignment rack calibrates your camber, caster, and toe-in to factory specifications.",
    fullDescriptionAr: "احمِ إطاراتك من التآكل غير المتساوي وانحراف المقود. نستخدم أجهزة هنتر Hunter 3D الأمريكية لمعايرة الزوايا بدقة تامة وفق مواصفات المصنع.",
    turnaroundTime: "45 Minutes",
    turnaroundTimeAr: "٤٥ دقيقة",
    outcomes: ["Hunter 3D Laser Alignment", "High-Speed Dynamic Balance", "Tyre Wear Pattern Audit"],
    outcomesAr: ["ميزان ليزر هنتر 3D الأمريكي", "ترصيص إلكتروني عالي السرعة", "تقرير شامل لحالة وتآكل الإطارات"],
    iconName: "Disc",
    startingPriceAED: 180
  },
  {
    id: "pre-purchase-inspection",
    tag: "07",
    title: "Pre-Purchase Vehicle Inspection (PPI)",
    titleAr: "فحص شامل قبل شراء السيارات المستعملة (PPI)",
    shortDescription: "Unbiased 120-point mechanical, structural chassis, paint thickness, OBD computer scan, and test drive audit before buying.",
    shortDescriptionAr: "فحص محايد وشامل من ١٢٠ نقطة يشمل المحرك، الشاسيه، قياس سماكة الصبغ وكشف الحوادث، فحص الكمبيوتر، وتجربة القيادة.",
    fullDescription: "Buying a used car in Dubai? Avoid costly surprises with our thorough PPI report detailing past accident repairs, flood damage, and hidden mechanical faults.",
    fullDescriptionAr: "تخطط لشراء سيارة مستعملة في دبي؟ تجنب المفاجآت المكلفة بتقرير فحص رقمي مفصل يوضح إصلاحات الحوادث السابقة، أضرار الغرق، والأعطال المخفية.",
    turnaroundTime: "2 Hours",
    turnaroundTimeAr: "ساعتان",
    outcomes: ["120-Point Digital Report", "Paint Gauge Accident Check", "Actual Market Repair Estimate"],
    outcomesAr: ["تقرير رقمي شامل من ١٢٠ نقطة", "فحص سماكة الصبغ بجهاز إلكتروني", "تقدير تكاليف الإصلاحات الفعلية إن وجدت"],
    iconName: "FileCheck",
    startingPriceAED: 490
  },
  {
    id: "fleet-maintenance",
    tag: "08",
    title: "Commercial Fleet Maintenance Contracts",
    titleAr: "عقود صيانة الأساطيل والشركات التجارية",
    shortDescription: "Customized service contracts for corporate fleets, delivery vans, and rental companies with priority bay access and volume pricing.",
    shortDescriptionAr: "عقود صيانة مخصصة لأساطيل الشركات وسيارات التوصيل وشركات التأجير مع مسارات خدمة مخصصة وأسعار تفضيلية.",
    fullDescription: "Keep your commercial vehicles on the road. Includes dedicated fleet managers, monthly consolidated invoicing, priority weekend servicing, and vehicle pickup.",
    fullDescriptionAr: "حافظ على جاهزية أسطولك التجاري على مدار الساعة مع مدير حساب مخصص، فواتير شهرية موحدة، صيانة ليلية وعطلات نهاية الأسبوع، وخدمة نقل المركبات.",
    turnaroundTime: "Priority Bay Access",
    turnaroundTimeAr: "أولوية دخول فورية",
    outcomes: ["-75% Fleet Breakdown Rate", "Consolidated Monthly Billing", "Dedicated Account Manager"],
    outcomesAr: ["انخفاض الأعطال المفاجئة بنسبة ٧٥٪", "فواتير شهرية مجمعة للشركات", "مدير حساب معتمد لمتابعة الأسطول"],
    iconName: "Truck",
    startingPriceAED: 850
  }
];

export const AUTOVANTA_CASE_STUDY: AutovantaCaseStudy = {
  clientTitle: "Nova Logistics — 40 Van Servicing Program",
  clientTitleAr: "شركة نوفا للخدمات اللوجستية — برنامج صيانة ٤٠ شاحنة توصيل",
  fleetSize: "40 Commercial Vans & Delivery Trucks",
  fleetSizeAr: "٤٠ مركبة وشاحنة توصيل تجارية",
  challenge: "Unplanned engine breakdowns and AC failures during peak summer heat were causing up to 12% monthly vehicle downtime, resulting in delivery penalties and missed SLAs.",
  challengeAr: "أعطال المحركات والمكيفات المفاجئة خلال ذروة حرارة الصيف كانت تتسبب بتوقف ١٢٪ من مركبات الأسطول شهرياً، مما كبد الشركة غرامات تأخير في مواعيد التسليم.",
  beforeDowntime: "12% Monthly Breakdown Downtime",
  beforeDowntimeAr: "١٢٪ نسبة توقف الأسطول شهرياً بسبب الأعطال",
  afterDowntime: "3% Monthly Planned Servicing",
  afterDowntimeAr: "٣٪ فقط نسبة توقف مجدول للصيانة الدورية",
  reductionPercent: 75,
  vehiclesUnderContract: 40,
  complianceRate: "100% On-Time Servicing",
  complianceRateAr: "١٠٠٪ التزام بمواعيد تسليم المركبات",
  image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop"
};

export const AUTOVANTA_LEADERS: AutovantaLeader[] = [
  {
    name: "Vikram Rathore",
    nameAr: "فيكرام راثور",
    role: "Founder & Master Diagnostic Technician",
    roleAr: "المؤسس وكبير مهندسي الفحص والتشخيص",
    experience: "18+ Yrs German & Japanese Auto Repair",
    experienceAr: "١٨+ عاماً في صيانة السيارات الألمانية واليابانية",
    specialization: "ASE Certified & Porsche Master Specialist",
    specializationAr: "شهادة ASE وخبير معتمد في سيارات بورشه",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Rashid Al-Khouri",
    nameAr: "راشد الخوري",
    role: "Head of Workshop Operations",
    roleAr: "مدير العمليات وإدارة الورش",
    experience: "15+ Yrs UAE Multi-Garage Management",
    experienceAr: "١٥+ عاماً في إدارة مراكز الصيانة بالإمارات",
    specialization: "Ex-Al Tayer Motors Service Director",
    specializationAr: "مدير صيانة سابق لدى الطاير للسيارات",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Johann Meyer",
    nameAr: "يوهان ماير",
    role: "Head of Electrical & AC Systems",
    roleAr: "رئيس قسم الكهرباء وتبريد التكييف",
    experience: "14+ Yrs European Luxury Vehicle Electrics",
    experienceAr: "١٤+ عاماً في كهرباء وبرمجة السيارات الأوروبية",
    specialization: "Bosch Automotive Electrical Specialist",
    specializationAr: "أخصائي معتمد في منظومات بوش الكهربائية",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Sariha Mansoor",
    nameAr: "سريحة منصور",
    role: "Head of Customer Experience & Fleets",
    roleAr: "رئيسة تجربة العملاء وعلاقات الأساطيل",
    experience: "10+ Yrs Auto Aftersales & Fleet Relations",
    experienceAr: "١٠+ أعوام في خدمات ما بعد البيع وإدارة الأساطيل",
    specialization: "Service Transparency & Warranty Audits",
    specializationAr: "تدقيق معايير الجودة والضمان والشفافية",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  }
];

export const AUTOVANTA_INSIGHTS: AutovantaInsight[] = [
  {
    id: "service-frequency-uae-heat",
    title: "How Often Should You Service Your Car in UAE Heat?",
    titleAr: "كم مرة يجب صيانة سيارتك وتغيير الزيت في طقس الإمارات؟",
    category: "Maintenance Tips",
    categoryAr: "نصائح الصيانة",
    readTime: "4 min read",
    readTimeAr: "٤ دقائق قراءة",
    summary: "Why extreme summer temperatures require shorter oil change intervals and heavy-duty synthetic engine lubricants.",
    summaryAr: "لماذا تفرض درجات الحرارة المرتفعة فترات تغيير زيت أقصر واعتماد زيوت تخليقية عالية التحمل.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "ac-system-warnings",
    title: "Signs Your AC System Needs Immediate Attention",
    titleAr: "علامات تحذيرية تدل على حاجة مكيف سيارتك للصيانة العاجلة",
    category: "AC Diagnostics",
    categoryAr: "فحص التكييف",
    readTime: "5 min read",
    readTimeAr: "٥ دقائق قراءة",
    summary: "Recognizing warm vent discharge, strange compressor noises, and moldy cabin smells before a complete AC failure.",
    summaryAr: "كيفية تمييز هواء المكيف الدافئ وأصوات الكمبروسر الغريبة قبل تعطل نظام التبريد بالكامل.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "pre-purchase-inspection-guide",
    title: "Pre-Purchase Inspection: What to Check Before Buying a Used UAE Car",
    titleAr: "الفحص قبل الشراء: أمور يجب التحقق منها قبل شراء سيارة مستعملة",
    category: "Buying Guide",
    categoryAr: "دليل الشراء",
    readTime: "6 min read",
    readTimeAr: "٦ دقائق قراءة",
    summary: "Essential mechanical, electrical, chassis frame, and paint depth checks to avoid buying a flood-damaged or crash-repaired vehicle.",
    summaryAr: "الفحوصات الميكانيكية والهيكلية الأساسية وسماكة الصبغ لتجنب شراء سيارات تعرضت للغرق أو الحوادث الجسيمة.",
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "transmission-repair-vs-replace",
    title: "When to Repair vs Replace Your Automatic Transmission",
    titleAr: "متى يجب توضيب ناقل الحركة (الجير) ومتى يفضل استبداله؟",
    category: "Gearbox Repair",
    categoryAr: "صيانة الجير",
    readTime: "6 min read",
    readTimeAr: "٦ دقائق قراءة",
    summary: "Understanding diagnostic fault codes, torque converter slipping, and fluid flush solutions vs full gearbox rebuilds.",
    summaryAr: "قراءة أكواد الأعطال، تفويت التروس، وتغيير الزيت مقابل توضيب الجير بالكامل.",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop"
  }
];

export const AUTOVANTA_LOCATIONS: AutovantaLocation[] = [
  {
    city: "DUBAI",
    cityAr: "دبي",
    area: "Al Quoz Industrial 3 — Main Workshop Hub",
    areaAr: "القوز الصناعية ٣ — المركز الرئيسي لصيانة السيارات",
    description: "State-of-the-art 16-bay service workshop equipped with Hunter 3D alignment, dealer diagnostic computers, and customer lounge.",
    descriptionAr: "مركز متطور يضم ١٦ مسار صيانة مجهز بأجهزة هنتر 3D لضبط الزوايا، أجهزة فحص الوكالة، وصالة استراحة فاخرة للعملاء.",
    address: "Street 8, Al Quoz Industrial 3, Near Mall of the Emirates, Dubai, UAE",
    addressAr: "شارع ٨، القوز الصناعية ٣، بالقرب من مول الإمارات، دبي، الإمارات",
    phone: "+971 4 341 8920",
    hours: "Sat - Thu: 8:00 AM - 8:00 PM | Fri: Closed",
    hoursAr: "السبت - الخميس: ٨:٠٠ ص - ٨:٠٠ م | الجمعة: مغلق"
  },
  {
    city: "SHARJAH",
    cityAr: "الشارقة",
    area: "Industrial Area 12 — Fleet & Heavy Diagnostics",
    areaAr: "المنطقة الصناعية ١٢ — مركز صيانة الأساطيل والمحركات",
    description: "Heavy-duty commercial service facility specializing in rapid fleet maintenance, engine overhauls, and RTA inspection prep.",
    descriptionAr: "مركز متخصص لصيانة الأساطيل التجارية، توضيب المحركات والجير، والتجهيز المسبق لفحص هيئة الطرق والمرور.",
    address: "Double Cola Road, Industrial Area 12, Sharjah, UAE",
    addressAr: "شارع دبل كولا، المنطقة الصناعية ١٢، الشارقة، الإمارات",
    phone: "+971 6 533 4110",
    hours: "Sat - Thu: 8:00 AM - 7:30 PM | Fri: Closed",
    hoursAr: "السبت - الخميس: ٨:٠٠ ص - ٧:٣٠ م | الجمعة: مغلق"
  }
];

export const AUTOVANTA_TESTIMONIALS = [
  {
    quote: "AUTOVANTA gave me a clear written quote before touching my Land Cruiser — no surprise extra charges, and the AC repair was completed same day.",
    quoteAr: "أوتوفانتا زودوني بتقرير تسعير واضح ومكتوب قبل لمس اللاندكروزر — بدون أي رسوم مفاجئة، وتم إصلاح التكييف في نفس اليوم.",
    clientName: "Yusuf Al Balushi",
    clientNameAr: "يوسف البلوشي",
    vehicle: "Toyota Land Cruiser V8",
    vehicleAr: "تويوتا لاندكروزر V8",
    location: "Dubai",
    locationAr: "دبي",
    rating: 5
  },
  {
    quote: "As a delivery company running 40 vans, minimizing breakdown downtime is critical. AUTOVANTA handles our entire scheduled servicing with priority weekend slots.",
    quoteAr: "كشركة شحن وتوصيل تدير ٤٠ سيارة، تقليل الأعطال أمر حاسم لنا. أوتوفانتا تتولى كامل الصيانة الدورية مع توفير مواعيد عطلات ذات أولوية.",
    clientName: "David Sterling",
    clientNameAr: "ديفيد ستيرلينغ",
    vehicle: "Fleet Logistics Director",
    vehicleAr: "مدير العمليات اللوجستية للأساطيل",
    location: "Sharjah & Dubai Fleet",
    locationAr: "أسطول دبي والشارقة",
    rating: 5
  },
  {
    quote: "Their Pre-Purchase Inspection saved me from buying a BMW X5 that had hidden chassis damage and an overheating gearbox. Worth every single dirham.",
    quoteAr: "فحص ما قبل الشراء أنقذني من شراء سيارة بي إم دبليو X5 كانت بها أضرار مخفية في الشاسيه وارتفاع حرارة الجير. فحص يستحق كل درهم.",
    clientName: "Sariha Al-Hassan",
    clientNameAr: "سريحة الحسن",
    vehicle: "BMW X5 Buyer",
    vehicleAr: "مشترية بي إم دبليو X5",
    location: "Dubai Marina",
    locationAr: "دبي مارينا",
    rating: 5
  },
  {
    quote: "Dealer wanted AED 14,000 for a new AC compressor. AUTOVANTA repaired the electromagnetic clutch assembly for AED 2,800. AC is blowing sub-4°C ice cold!",
    quoteAr: "الوكالة طلبت ١٤,٠٠٠ درهم لاستبدال الكمبروسر. أوتوفانتا قامت بإصلاح الكلتش الكهرومغناطيسي بتكلفة ٢,٨٠٠ درهم فقط، والتبريد الآن ممتاز جداً!",
    clientName: "Tariq Mansoor",
    clientNameAr: "طارق منصور",
    vehicle: "Mercedes E-Class",
    vehicleAr: "مرسيدس E-Class",
    location: "Al Barsha, Dubai",
    locationAr: "البرشاء، دبي",
    rating: 5
  }
];

export const AUTOVANTA_FAQS = [
  {
    question: "Do you service all vehicle makes and models in Dubai & Sharjah?",
    questionAr: "هل تقدمون خدمات الصيانة لجميع أنواع وموديلات السيارات في دبي والشارقة؟",
    answer: "Yes. AUTOVANTA is a certified multi-brand service center equipped with specialized diagnostic software for European (BMW, Mercedes, Audi, Porsche, Range Rover), Japanese (Toyota, Nissan, Lexus, Honda), American (Ford, Chevrolet, GMC, Jeep), and Korean vehicles.",
    answerAr: "نعم، أوتوفانتا مركز صيانة معتمد متعدد العلامات مجهز ببرمجيات فحص متخصصة للسيارات الأوروبية (مرسيدس، بي إم دبليو، أودي، بورشه، رينج روفر)، اليابانية (تويوتا، نيسان، لكزس، هوندا)، الأمريكية (فورد، جي إم سي، شفروليه، جيب)، والكورية."
  },
  {
    question: "How long does a typical minor or major service take?",
    questionAr: "كم يستغرق وقت الصيانة الدورية البسيطة أو الكبرى؟",
    answer: "Minor servicing (oil, filter, 50-point inspection) takes 2 to 3 hours. Major servicing takes 4 to 6 hours. We offer customer lounge access or WhatsApp updates when your vehicle is ready for pickup.",
    answerAr: "الصيانة البسيطة (زيت وفلتر وفحص ٥٠ نقطة) تستغرق من ٢ إلى ٣ ساعات. أما الصيانة الكبرى فتستغرق من ٤ إلى ٦ ساعات، مع إمكانية الاستراحة في صالة العملاء أو استلام إشعارات واتساب عند جاهزية السيارة."
  },
  {
    question: "Do you offer vehicle pickup and flatbed drop-off service?",
    questionAr: "هل توفرون خدمة استلام وتسليم السيارة من وإلى المنزل أو المكتب؟",
    answer: "Yes! We provide complimentary flatbed or driver pickup and drop-off across Dubai and Sharjah for major servicing and repair jobs.",
    answerAr: "نعم! نوفر خدمة استلام وتسليم السيارة عبر رافعة (سطحة) أو سائق معتمد في كافة مناطق دبي والشارقة لأعمال الصيانة والإصلاحات الرئيسية."
  },
  {
    question: "Is there a warranty on repairs and replacement parts?",
    questionAr: "هل يوجد ضمان معتمد على الإصلاحات وقطع الغيار المركبة؟",
    answer: "All repairs and parts installed by AUTOVANTA come with a 12-month / 20,000km warranty covering both parts and labor.",
    answerAr: "كافة الإصلاحات وقطع الغيار المركبة في أوتوفانتا مشمولة بضمان رسمي لمدة ١٢ شهراً أو ٢٠,٠٠٠ كم يشمل القطع وأجور اليد العاملة."
  },
  {
    question: "Do you use genuine OEM replacement parts?",
    questionAr: "هل تستخدمون قطع غيار أصلية ومطابقة لمواصفات الوكالة؟",
    answer: "We use 100% genuine OEM parts or high-performance German parts (Bosch, Brembo, Mann, Mobil1) according to your preference and budget.",
    answerAr: "نستخدم قطع غيار أصلية ١٠٠٪ OEM أو قطع ألمانية عالية الأداء (Bosch, Brembo, Mann, Mobil1) مع فواتير رسمية حسب اختيارك وميزانيتك."
  },
  {
    question: "Can I get an upfront price quote before work begins?",
    questionAr: "هل أحصل على تسعيرة واضحة وموافقة مسبقة قبل بدء أي تصليحات؟",
    answer: "Absolutely. We provide a detailed itemized estimate after diagnostic inspection. No work is started without your explicit written or WhatsApp approval.",
    answerAr: "بكل تأكيد. نزودك بتقرير فحص وتسعيرة مفصلة لكل قطعة وأجر يد قبل البدء. لا يتم إجراء أي تصليح إلا بعد موافقتك الصريحة خطياً أو عبر واتساب."
  },
  {
    question: "Do you offer commercial fleet maintenance contracts?",
    questionAr: "هل تقدمون عقود صيانة سنوية مخصصة لأساطيل الشركات؟",
    answer: "Yes. We manage fleets from 5 to 100+ vehicles with custom SLAs, dedicated account managers, priority bay access, and monthly consolidated invoicing.",
    answerAr: "نعم، ندير أساطيل تجارية من ٥ إلى ١٠٠+ مركبة مع اتفاقيات مستوى خدمة محددة، مدير حساب مخصص، أولوية في الورشة، وفواتير شهرية مجمعة."
  }
];