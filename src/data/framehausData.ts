export interface PortfolioItem {
  id: string;
  title: { en: string; ar: string };
  category: string;
  categoryLabel: { en: string; ar: string };
  location: { en: string; ar: string };
  year: string;
  description: { en: string; ar: string };
  image: string;
  client: string;
  specs: {
    camera: string;
    lens: string;
    lighting: string;
    deliverables: { en: string; ar: string };
  };
}

export interface StudioService {
  id: string;
  title: { en: string; ar: string };
  category: string;
  shortDesc: { en: string; ar: string };
  deliverables: { en: string[]; ar: string[] };
  gearRoster: { en: string[]; ar: string[] };
  idealFor: { en: string; ar: string };
  turnaround: { en: string; ar: string };
  startingRate: number;
  image: string;
  featured: boolean;
}

export interface InsightArticle {
  id: string;
  title: { en: string; ar: string };
  category: { en: string; ar: string };
  readTime: { en: string; ar: string };
  date: { en: string; ar: string };
  summary: { en: string; ar: string };
  content: {
    en: { section: string; body: string }[];
    ar: { section: string; body: string }[];
  };
  image: string;
  author: { en: string; ar: string };
}

export interface Testimonial {
  id: string;
  quote: { en: string; ar: string };
  author: { en: string; ar: string };
  role: { en: string; ar: string };
  company: { en: string; ar: string };
  rating: number;
  verifiedTag: { en: string; ar: string };
  avatar: string;
}

export interface FAQItem {
  id: string;
  category: 'booking' | 'production' | 'licensing' | 'turnaround';
  question: { en: string; ar: string };
  answer: { en: string; ar: string };
}

export interface EstimatorOption {
  id: string;
  label: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  basePrice: number;
}

export interface StudioLocationData {
  id: string;
  city: { en: string; ar: string };
  district: { en: string; ar: string };
  name: { en: string; ar: string };
  address: { en: string; ar: string };
  phone: string;
  hours: { en: string; ar: string };
  specs: { en: string[]; ar: string[] };
  image: string;
  mapCoords: string;
}

export const ESTIMATOR_DISCIPLINES: EstimatorOption[] = [
  {
    id: 'commercial',
    label: { en: 'Commercial Brand Campaign', ar: 'حملة إعلانية تجارية للعلامة' },
    subtitle: { en: 'Billboards, key visual ads, digital banners & retail', ar: 'اللوحات الإعلانية والإعلانات الرقمية ومواد المتاجر' },
    basePrice: 8500,
  },
  {
    id: 'architecture',
    label: { en: 'Architecture & Real Estate', ar: 'الهندسة المعمارية والعقارات' },
    subtitle: { en: 'Daylight, twilight, drone aerials & interior spaces', ar: 'لقطات نهارية وغروب وتصوير درون والمساحات الداخلية' },
    basePrice: 7500,
  },
  {
    id: 'product',
    label: { en: 'Luxury Product & Jewelry Macro', ar: 'المنتجات الفاخرة وماكرو المجوهرات' },
    subtitle: { en: 'Focus-stacked macro, tabletop luxury & clean cuts', ar: 'تصوير مجهري مكدس، منتجات الطاولة وخلفيات معزولة' },
    basePrice: 6500,
  },
  {
    id: 'fashion',
    label: { en: 'High-Fashion & Haute Couture Editorial', ar: 'الأزياء الراقية والافتتاحيات الفاخرة' },
    subtitle: { en: 'Model lookbooks, couture abayas & desert locations', ar: 'كتالوجات العارضين، عبايات الهوت كوتور ومواقع الصحراء' },
    basePrice: 9500,
  },
  {
    id: 'hospitality',
    label: { en: 'Fine Dining & Hospitality', ar: 'المطاعم الراقية والضيافة الفندقية' },
    subtitle: { en: 'Chef plating, restaurant ambience & bar mixology', ar: 'أطباق الطهاة الفاخرة، أجواء المطاعم والمشروبات' },
    basePrice: 6800,
  },
  {
    id: 'portraits',
    label: { en: 'Executive & C-Suite Portraiture', ar: 'الصور الشخصية والقيادات التنفيذية' },
    subtitle: { en: 'Corporate roster, board profiles & editorial portraits', ar: 'ملفات أعضاء مجلس الإدارة وصور القيادات الصحفية' },
    basePrice: 5500,
  },
  {
    id: 'motion',
    label: { en: 'Cinematic 8K Motion & Reels Hybrid', ar: 'فيديو سينمائي 8K ومقاطع ريلز متزامنة' },
    subtitle: { en: 'Dual stills and dynamic vertical video production', ar: 'إنتاج فوتوغرافي متزامن مع مقاطع فيديو عمودية سريعة' },
    basePrice: 12000,
  },
];

export const ESTIMATOR_SETTINGS = [
  {
    id: 'studio-dubai',
    label: { en: 'Dubai Studio (Al Quoz Cyc)', ar: 'استوديو دبي (سايك القوز)' },
    subtitle: { en: '3,500 sqft infinity cyc wall, Broncolor strobes, VIP suite', ar: 'جدار سايك ٣,٥٠٠ قدم²، فلاشات برونكولور، صالة VIP' },
    priceMultiplier: 1.0,
    surcharge: 0,
  },
  {
    id: 'studio-abudhabi',
    label: { en: 'Abu Dhabi Soundstage (Mussafah)', ar: 'ساوند ستيج أبوظبي (مصفح)' },
    subtitle: { en: '5,000 sqft drive-in soundstage for automotive & motion', ar: 'استوديو ٥,٠٠٠ قدم² مع مدخل سيارات وعزل صوتي' },
    priceMultiplier: 1.1,
    surcharge: 500,
  },
  {
    id: 'location-uae',
    label: { en: 'UAE On-Location (Dubai / Abu Dhabi / Dunes)', ar: 'موقع خارجي في الإمارات (دبي / أبوظبي / الصحراء)' },
    subtitle: { en: 'Includes generator trucks, mobile grips & location permits', ar: 'يشمل شاحنات المولدات، معدات متنقلة وتصاريح التصوير' },
    priceMultiplier: 1.25,
    surcharge: 1500,
  },
];

export const ESTIMATOR_DURATIONS = [
  { id: 'half', label: { en: 'Half Day (4 Hours)', ar: 'نصف يوم (٤ ساعات)' }, multiplier: 0.7 },
  { id: 'full', label: { en: 'Full Day (8 Hours)', ar: 'يوم كامل (٨ ساعات)' }, multiplier: 1.0 },
  { id: 'two-day', label: { en: '2-Day Production (16 Hours)', ar: 'يومان إنتاج (١٦ ساعة)' }, multiplier: 1.85 },
];

export const ESTIMATOR_ADDONS = [
  {
    id: 'stylist-hair-makeup',
    label: { en: 'Lead Hair & Makeup Artist on Set', ar: 'خبير تجميل وشعر رئيسي في موقع التصوير' },
    price: 1800,
  },
  {
    id: 'wardrobe-stylist',
    label: { en: 'High-Fashion Wardrobe Stylist & Steaming', ar: 'منسق أزياء وافتتاحيات مع كي وتجهيز الملابس' },
    price: 2400,
  },
  {
    id: 'art-director',
    label: { en: 'Dedicated Art Director & Moodboard Curation', ar: 'مخرج فني مخصص وإدارة الموودبورد' },
    price: 3200,
  },
  {
    id: 'drone-aerial',
    label: { en: 'Licensed DCAA 4K Drone Aerial Stills & Video', ar: 'تصوير درون 4K بتصريح هيئة الطيران المدني' },
    price: 2200,
  },
  {
    id: 'rush-proofs',
    label: { en: '24-Hour Express Proof Selects Delivery', ar: 'تسليم المسودات السريعة خلال ٢٤ ساعة' },
    price: 1200,
  },
  {
    id: 'high-end-retouch',
    label: { en: 'Master 16-bit Retouching (10 Extra Images)', ar: 'معالجة فوتوغرافية فائقة الدقة (١٠ صور إضافية)' },
    price: 2000,
  },
  {
    id: 'social-reels-cut',
    label: { en: '3x Color-Graded 4K Social Video Reels', ar: '٣ مقاطع ريلز 4K ملونة ومعالجة لإنستغرام' },
    price: 3500,
  },
];

export const FRAMEHAUS_DATA = {
  brand: 'FRAMEHAUS',
  tagline: 'Every Frame Tells a Story.',
  positioning: 'Premium UAE Photography & Creative Studio',
  phone: '+971 4 600 9200',
  whatsapp: 'https://wa.me/971506009200',
  heroStats: [
    { value: '480+', label: { en: 'Commercial Campaigns', ar: 'حملة إعلانية' } },
    { value: '24', label: { en: 'Industry Awards', ar: 'جائزة إقليمية وعالمية' } },
    { value: '150 MP', label: { en: 'Sensor Resolution', ar: 'دقة حساس الكاميرا' } },
    { value: '48 Hrs', label: { en: 'Proof Turnaround', ar: 'تسليم المسودات' } },
  ],
  trustLogos: [
    { name: 'EMAAR PROPERTIES', tag: 'Luxury Real Estate' },
    { name: 'CHALHOUB GROUP', tag: 'Haute Horlogerie & Fashion' },
    { name: 'JUMEIRAH HOTELS', tag: 'Ultra-Luxury Hospitality' },
    { name: 'NAKHEEL DEVELOPMENTS', tag: 'Waterfront Mega-Projects' },
    { name: 'PORSCHE MIDDLE EAST', tag: 'Automotive Track & Launch' },
    { name: 'DUBAI TOURISM (DET)', tag: 'Government Campaign Stills' },
    { name: 'BLOOMINGDALE’S DUBAI', tag: 'Couture Editorial' },
    { name: 'MAJID AL FUTTAIM', tag: 'Retail & Commercial Visuals' },
  ],

  portfolio: [
    {
      id: 'arch-1',
      title: { en: 'Minimalist Desert Monolith', ar: 'صرح صحراوي معاصر' },
      category: 'architecture',
      categoryLabel: { en: 'Architecture & Spaces', ar: 'العمارة والمساحات' },
      location: { en: 'Al Barari, Dubai', ar: 'البراري، دبي' },
      year: '2026',
      description: {
        en: 'Architectural study of a travertine limestone ultra-luxury villa capturing dramatic twilight shadow geometry.',
        ar: 'دراسة معمارية لفيلا فائقة الفخامة من حجر الترافرتين تبرز تباين الظلال عند الغروب.',
      },
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      client: 'Vanguard Luxury Real Estate',
      specs: {
        camera: 'Phase One IQ4 150MP Achromatic Back',
        lens: 'Rodenstock HR Digaron-W 32mm f/4 Tilt-Shift',
        lighting: 'Ambient Twilight + Broncolor Move 1200L Fill',
        deliverables: { en: '28 Master TIFFs + 4K Drone Stills', ar: '٢٨ ملف TIFF ماستر + صور درون 4K' },
      },
    },
    {
      id: 'hosp-1',
      title: { en: 'DIFC After Dark Mixology', ar: 'أجواء الكوكتيلات الراقية في مركز دبي المالي' },
      category: 'hospitality',
      categoryLabel: { en: 'Hospitality & F&B', ar: 'الضيافة والمطاعم' },
      location: { en: 'DIFC Gate Village, Dubai', ar: 'قرية البوابة، مركز دبي المالي العالمي' },
      year: '2026',
      description: {
        en: 'Sensory cocktail and interior atmosphere capture for an exclusive Michelin-starred rooftop lounge.',
        ar: 'التقاط بصري حسي لتفاصيل المشروبات والتصميم الداخلي لردهة سقف حائزة على نجمة ميشلان.',
      },
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
      client: 'Nectar DIFC Hospitality',
      specs: {
        camera: 'Sony A1 High-Resolution Sensor',
        lens: 'Sony FE 50mm f/1.2 GM + 24-70mm GM II',
        lighting: 'Profoto B10X Plus with OCF Softbox Grid',
        deliverables: { en: '45 Menu Plates & Ambient Shots + 3 Reels', ar: '٤٥ صورة قائمة وأجواء + ٣ ريلز' },
      },
    },
    {
      id: 'prod-1',
      title: { en: 'Chronograph Precision Macro', ar: 'دقة الماكرو للساعات السويسرية' },
      category: 'product',
      categoryLabel: { en: 'Product & Jewelry', ar: 'المنتجات والمجوهرات' },
      location: { en: 'Al Quoz Studio, Dubai', ar: 'استوديو القوز، دبي' },
      year: '2026',
      description: {
        en: 'Focus-stacked commercial macro campaign highlighting tourbillon escapement mechanics and guilloché dial.',
        ar: 'حملة تصوير ماكرو مكدس تبرز آلية التوربيون والنقوش الدقيقة لميناء الساعة الفاخرة.',
      },
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
      client: 'Aethelgard Horlogerie Genève',
      specs: {
        camera: 'Hasselblad H6D-100c Medium Format',
        lens: 'HC 120mm f/4 II Macro Optics',
        lighting: 'Broncolor Scoro 3200S + Strip Diffuser Boxes',
        deliverables: { en: '12 Focus-Stacked Master Prints (16-bit)', ar: '١٢ صورة ماستر مكدسة التركيز (16-bit)' },
      },
    },
    {
      id: 'fash-1',
      title: { en: 'Haute Abaya Desert Mirage', ar: 'سراب الصحراء وأزياء العباءة الراقية' },
      category: 'fashion',
      categoryLabel: { en: 'Fashion & Editorial', ar: 'الأزياء والموضة' },
      location: { en: 'Lahbab Red Dunes, Dubai', ar: 'كثبان لهباب الحمراء، دبي' },
      year: '2026',
      description: {
        en: 'High-fashion editorial campaign blending flowing black silk textiles with golden hour desert terrain.',
        ar: 'جلسة تصوير افتتاحية تمزج بين الحرير الأسود الانسيابي وتضاريس الصحراء في الساعة الذهبية.',
      },
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
      client: 'Noura Al-Husseini Couture',
      specs: {
        camera: 'Phase One XF IQ4 150MP',
        lens: 'Schneider Kreuznach 110mm f/2.8 Leaf Shutter',
        lighting: 'Sun Key + 2x Broncolor Para 220 FB Fill',
        deliverables: { en: '22 Magazine Double-Page Spreads', ar: '٢٢ صورة مزدوجة للمجلات الإقليمية' },
      },
    },
    {
      id: 'port-1',
      title: { en: 'Sovereign Wealth Leadership', ar: 'القيادات التنفيذية وصناديق الثروة' },
      category: 'portraits',
      categoryLabel: { en: 'Executive & Portraits', ar: 'الشخصيات والقيادات' },
      location: { en: 'Abu Dhabi Global Market (ADGM)', ar: 'سوق أبوظبي العالمي' },
      year: '2026',
      description: {
        en: 'Authoritative environmental executive portraits for venture partners in an ultra-modern boardroom.',
        ar: 'صور قيادية بيئية تعكس الهيبة والوقار لشركاء الاستثمار في قاعة اجتماعات بانورامية.',
      },
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
      client: 'Vanguard Capital Partners ADGM',
      specs: {
        camera: 'Sony A7R V (61MP High Res)',
        lens: 'Sony FE 85mm f/1.4 GM',
        lighting: 'Profoto D2 1000W with 5ft Octa Softbox',
        deliverables: { en: '15 C-Suite Retouched Profiles + LinkedIn Formats', ar: '١٥ صورة قيادية معالجة + صيغ لينكد إن' },
      },
    },
    {
      id: 'auto-1',
      title: { en: 'Hypercar Soundstage Track Session', ar: 'جلسة استوديو للسيارات الخارقة والحلبات' },
      category: 'automotive',
      categoryLabel: { en: 'Automotive & Motion', ar: 'السيارات والحركة' },
      location: { en: 'Mussafah Soundstage 2, Abu Dhabi', ar: 'ساوند ستيج مصفح ٢، أبوظبي' },
      year: '2026',
      description: {
        en: 'Dynamic carbon fiber vehicle studio shoot and rolling track shots at Yas Marina Circuit.',
        ar: 'تصوير استوديو متقدم لهياكل ألياف الكربون مع لقطات متحركة على حلبة مرسى ياس.',
      },
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      client: 'Valkyrie Motorsport UAE',
      specs: {
        camera: 'RED V-Raptor 8K VV + Hasselblad H6D',
        lens: 'Cooke Anamorphic /i Prime Cine Lenses',
        lighting: '100kW Overhead Light Box Array',
        deliverables: { en: '30 Billboard Assets + 60s Launch Film', ar: '٣٠ صورة للوحات الإعلانية + فيلم إطلاق ٦٠ ثانية' },
      },
    },
    {
      id: 'food-1',
      title: { en: 'Michelin Star Culinary Canvas', ar: 'لوحة الطهي الحائزة على نجمة ميشلان' },
      category: 'hospitality',
      categoryLabel: { en: 'Hospitality & F&B', ar: 'الضيافة والمطاعم' },
      location: { en: 'Palm Jumeirah, Dubai', ar: 'نخلة جميرا، دبي' },
      year: '2026',
      description: {
        en: 'High-end organic farm-to-table plating captured with organic side lighting and textural depth.',
        ar: 'أطباق طعام عضوية راقية ملتقطة بإضاءة جانبية طبيعية تبرز تباين قوام المكونات الطازجة.',
      },
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
      client: 'L’Orangerie Fine Dining',
      specs: {
        camera: 'Sony A1 50MP Full Frame',
        lens: 'Sony FE 90mm f/2.8 Macro G OSS',
        lighting: 'Profoto B10X with 3ft Beauty Dish Diffuser',
        deliverables: { en: '35 Master Menu Cards + Social Library', ar: '٣٥ صورة لقائمة الطعام + مكتبة للسوشيال ميديا' },
      },
    },
    {
      id: 'arch-2',
      title: { en: 'Waterfront Penthouse Skyline', ar: 'بنتهاوس الواجهة البحرية وأفق دبي' },
      category: 'architecture',
      categoryLabel: { en: 'Architecture & Spaces', ar: 'العمارة والمساحات' },
      location: { en: 'Dubai Marina & Bluewaters', ar: 'دبي مارينا وبلوواترز' },
      year: '2026',
      description: {
        en: 'Expansive penthouse terrace twilight photography highlighting the infinity pool and Marina skyline.',
        ar: 'تصوير شرفة بنتهاوس فسيحة وقت الغسق تبرز بركة السباحة اللانهائية وأفق دبي مارينا.',
      },
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      client: 'Select Group Developments',
      specs: {
        camera: 'Phase One IQ4 150MP',
        lens: 'Rodenstock HR Digaron 23mm Ultra-Wide',
        lighting: 'Natural Twilight + Architectural Interior Balance',
        deliverables: { en: '20 Ultra-High-Res Architectural Prints', ar: '٢٠ لوحة معمارية فائقة الدقة' },
      },
    },
  ],

  services: [
    {
      id: 'comm-photo',
      title: { en: 'Commercial Brand & Billboard Photography', ar: 'التصوير الإعلاني التجاري واللوحات الضخمة' },
      category: 'Commercial',
      shortDesc: {
        en: 'High-impact key visual advertising photography crafted for national billboards, digital banners, and luxury PR campaigns.',
        ar: 'تصوير إعلاني عالي التأثير مصمم للوحات الإعلانات الطرقية والحملات الرقمية والعلاقات العامة.',
      },
      deliverables: {
        en: [
          'Full-Resolution 150MP 16-bit Master TIFF files',
          'Full GCC & Global Digital + Print Commercial Buyout',
          'Tethered live client monitoring on calibrated EIZO 4K screens',
          'Full DCAA / DFTVC permit logistics and production coordination',
        ],
        ar: [
          'ملفات ماستر TIFF بدقة ١٥٠ ميغابكسل ونظام 16-bit',
          'حقوق ترخيص تجاري كاملة في الخليج والعالم للطباعة والرقمي',
          'بث مباشر لتجارب التصوير للعميل على شاشات EIZO 4K',
          'استخراج وتنسيق كافة تصاريح لجنة دبي للإنتاج وهيئة الطيران',
        ],
      },
      gearRoster: {
        en: ['Phase One IQ4 150MP', 'Broncolor Scoro 3200S Strobe Arrays', 'EIZO ColorEdge 4K Displays'],
        ar: ['Phase One IQ4 بدقة ١٥٠ ميغابكسل', 'مصفوفات فلاشات Broncolor Scoro', 'شاشات EIZO ColorEdge 4K المعايرة'],
      },
      idealFor: {
        en: 'Corporate brands, retail giants, automotive marques, and luxury consumer goods launching major UAE campaigns.',
        ar: 'الشركات الكبرى، دور التجزئة، شركات السيارات والسلع الفاخرة التي تدشن حملات كبرى في الإمارات.',
      },
      turnaround: { en: '48h proof selects • 5-7 business days final delivery', ar: 'مسودات خلال ٤٨ ساعة • تسليم نهائي ٥-٧ أيام عمل' },
      startingRate: 8500,
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80',
      featured: true,
    },
    {
      id: 'arch-photo',
      title: { en: 'Architecture, Interior & Real Estate', ar: 'الهندسة المعمارية والتطوير العقاري' },
      category: 'Architecture',
      shortDesc: {
        en: 'Museum-grade architectural photography capturing structural symmetry, ambient twilight luminosity, and interior design craftsmanship.',
        ar: 'تصوير معماري بمستوى المتاحف يبرز التماثل الهندسي، وإضاءة الغروب، وإتقان التصميم الداخلي.',
      },
      deliverables: {
        en: [
          'Perspective-corrected tilt-shift exterior & interior stills',
          'Golden hour & blue hour twilight atmospheric sequences',
          'DCAA licensed 4K aerial drone perspectives',
          'High dynamic range multi-exposure composite processing',
        ],
        ar: [
          'لقطات معمارية داخلية وخارجية بعدسات Tilt-Shift لتصحيح الأبعاد',
          'سلاسل صور في الساعة الذهبية وغسق المساء الأزرق',
          'تصوير جوي بطائرات الدرون بدقة 4K معتمدة من هيئة الطيران',
          'معالجة مركبة متعددة التعريضات لمدى ديناميكي واسع HDR',
        ],
      },
      gearRoster: {
        en: ['Phase One 150MP', 'Rodenstock Tilt-Shift Lenses (23mm, 32mm, 70mm)', 'DJI Inspire 3 Cine Drone'],
        ar: ['Phase One بدقة ١٥٠ ميغابكسل', 'عدسات Rodenstock Tilt-Shift', 'طائرة درون سينمائية DJI Inspire 3'],
      },
      idealFor: {
        en: 'Real estate developers, architects, luxury interior design studios, and master community planners in the UAE.',
        ar: 'المطورين العقاريين، المكاتب الهندسية، استوديوهات التصميم الداخلي، ومخططي المشاريع الكبرى في الإمارات.',
      },
      turnaround: { en: '48h proof selects • 5 business days final delivery', ar: 'مسودات خلال ٤٨ ساعة • تسليم نهائي ٥ أيام عمل' },
      startingRate: 7500,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      featured: true,
    },
    {
      id: 'prod-photo',
      title: { en: 'Luxury Product, Watches & High Jewelry', ar: 'المنتجات الفاخرة، الساعات والمجوهرات' },
      category: 'Product',
      shortDesc: {
        en: 'Precision macro lighting and focus stacking that highlights gemstone facets, metal finishes, and micro-mechanical movements with zero optical aberration.',
        ar: 'إضاءة ماكرو دقيقة وتكديس بؤري يبرز تفاصيل الأحجار الكريمة، ولمعان المعادن، والتروس الميكانيكية الدقيقة.',
      },
      deliverables: {
        en: [
          'Automated robotic focus-stacked master stills',
          'Seamless pure white e-commerce cuts and luxury lifestyle vignettes',
          '360-degree rotating interactive product spins',
          'Flawless surface dust, scratch & reflection digital retouching',
        ],
        ar: [
          'لقطات ماكرو مكدسة التركيز آلياً لأعلى درجات الوضوح',
          'خلفيات بيضاء نقية للمتاجر الإلكترونية مع مشاهد أسلوب حياة فاخرة',
          'صور تفاعلية بدوران ٣٦٠ درجة للمنتجات',
          'معالجة رقمية متقدمة لإزالة الأتربة والخدوش وانعكاسات الإضاءة',
        ],
      },
      gearRoster: {
        en: ['Hasselblad H6D-100c', 'HC 120mm Macro Optics', 'Broncolor Fiber Optic Micro Lights'],
        ar: ['Hasselblad H6D-100c', 'عدسات HC 120mm ماكرو', 'ألياف ضوئية دقيقة Broncolor Fiber Optic'],
      },
      idealFor: {
        en: 'Swiss watchmakers, high-jewelry houses, luxury fragrance ateliers, and premium cosmetic brands in Dubai & GCC.',
        ar: 'صناع الساعات السويسرية، دور المجوهرات الراقية، بيوت العطور ومستحضرات التجميل الفاخرة.',
      },
      turnaround: { en: '3-5 business days delivery', ar: 'تسليم نهائي خلال ٣-٥ أيام عمل' },
      startingRate: 6500,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      featured: true,
    },
    {
      id: 'fash-photo',
      title: { en: 'High-Fashion, Lookbooks & Editorial', ar: 'الأزياء الراقية، الكتالوجات والافتتاحيات' },
      category: 'Fashion',
      shortDesc: {
        en: 'High-energy editorial direction blending couture styling, casting excellence, and dramatic UAE desert and architectural settings.',
        ar: 'إخراج فني افتتاحيات الأزياء يدمج بين تنسيق الهوت كوتور، واختيار العارضين، والمواقع الصحراوية والمعمارية الباهرة.',
      },
      deliverables: {
        en: [
          'Campaign hero visual suite + seasonal lookbook catalogs',
          'High-end 16-bit beauty retouching with skin texture preservation',
          'On-set hair, makeup, wardrobe styling & steam management',
          'Dedicated desert generator setups and shaded client tents',
        ],
        ar: [
          'باقة الصور الرئيسية للحملات وكتالوجات المجموعات الموسمية',
          'معالجة جمالية فائقة بنظام 16-bit مع الحفاظ على ملمس البشرة الطبيعي',
          'إدارة كاملة للشعر والمكياج وتنسيق الملابس في موقع التصوير',
          'تجهيزات المولدات وخيام الاستراحة المكيفة للعملاء في الصحراء',
        ],
      },
      gearRoster: {
        en: ['Phase One IQ4 150MP', 'Broncolor Para 220 FB Reflector Arrays', 'Profoto Pro-11 Generators'],
        ar: ['Phase One IQ4 150MP', 'عاكسات Broncolor Para 220 FB الضخمة', 'مولدات إضاءة Profoto Pro-11'],
      },
      idealFor: {
        en: 'Haute couture fashion houses, abaya designers, luxury department stores, and international fashion magazines.',
        ar: 'دور الأزياء العالمية، مصممي العبايات الراقية، المتاجر الكبرى ومجلات الموضة الدولية.',
      },
      turnaround: { en: '48h proof selects • 5-7 business days final delivery', ar: 'مسودات خلال ٤٨ ساعة • تسليم نهائي ٥-٧ أيام عمل' },
      startingRate: 9500,
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
      featured: false,
    },
    {
      id: 'motion-vid',
      title: { en: 'Cinematic 8K Video & Social Reels', ar: 'فيديو 8K سينمائي ومقاطع ريلز احترافية' },
      category: 'Video & Motion',
      shortDesc: {
        en: 'Social-first short-form video production and cinematic commercial reels with master sound design and DaVinci Resolve color grading.',
        ar: 'إنتاج مقاطع فيديو قصيرة مخصصة لمنصات التواصل ومقاطع سينمائية مع هندسة صوتية وتلوين عبر DaVinci Resolve.',
      },
      deliverables: {
        en: [
          '8K Master raw capture delivered in 4K UHD 16:9 & 9:16 vertical cuts',
          'Color-graded LUT profiles tailored to brand guidelines',
          'Full licensed soundtrack scoring & atmospheric sound design',
          'Same-day b-roll snippet exports for social media teams',
        ],
        ar: [
          'تصوير خام بدقة 8K يتم تسليمه بصيغ 4K للشاشات والريلز العمودية',
          'معالجة ألوان سينمائية مخصصة لهوية العلامة التجارية',
          'موسيقى مرخصة بالكامل وهندسة مؤثرات صوتية محيطية',
          'تصدير مقاطع سريعة في نفس يوم التصوير لفرق السوشيال ميديا',
        ],
      },
      gearRoster: {
        en: ['RED V-Raptor 8K VV', 'Sony Venice 2 / FX9 Rigs', 'Ronin 2 Gimbal & Motorized Car Mounts'],
        ar: ['كاميرا RED V-Raptor 8K', 'كاميرات Sony Venice 2 و FX9', 'مانع اهتزاز Ronin 2 ومثبتات سيارات'],
      },
      idealFor: {
        en: 'Brands seeking immersive, high-velocity social media engagement across Instagram, TikTok, YouTube, and digital DOOH screens.',
        ar: 'العلامات التجارية الساعية لتفاعل قياسي عبر إنستغرام وتيك توك ويوتيوب وشاشات العرض الرقمية الخارجية.',
      },
      turnaround: { en: '5-7 business days final cut delivery', ar: 'تسليم المونتاج النهائي خلال ٥-٧ أيام عمل' },
      startingRate: 12000,
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
      featured: false,
    },
    {
      id: 'port-photo',
      title: { en: 'Executive Portraiture & Leadership Profiles', ar: 'تصوير القيادات وصور مجالس الإدارة' },
      category: 'Portraits',
      shortDesc: {
        en: 'Polished executive headshots and authentic boardroom portraits capturing authority, approachable charisma, and corporate prestige.',
        ar: 'صور تنفيذية مصقولة ولقطات بيئية لمجالس الإدارة تعكس الهيبة القيادية والوقار المهني الرفيع.',
      },
      deliverables: {
        en: [
          'On-location corporate pop-up studio setup at your headquarters',
          'Instant on-site photo selection on mobile iPad kiosks',
          'Corporate brand style guide matching for regional and global teams',
          'Express 24-hour turnaround option for urgent press releases',
        ],
        ar: [
          'تجهيز استوديو تصوير متنقل داخل المقر الرئيسي لشركتكم',
          'اختيار فوري للصور في نفس الموقع عبر أجهزة آيباد تفاعلية',
          'مطابقة تامة لدليل الهوية البصرية للفرق المحلية والعالمية',
          'خيار التسليم السريع خلال ٢٤ ساعة للبيانات الصحفية العاجلة',
        ],
      },
      gearRoster: {
        en: ['Sony A7R V High-Res', 'Profoto B10X Location Lighting', 'Tether Tools Pro Hub System'],
        ar: ['Sony A7R V فائقة الدقة', 'إضاءة متنقلة Profoto B10X', 'منظومة الربط المباشر Tether Tools Pro'],
      },
      idealFor: {
        en: 'C-Suite leaders, sovereign wealth funds, banking institutions, law firms, and consulting executives across Dubai & Abu Dhabi.',
        ar: 'الرؤساء التنفيذيون، صناديق الاستثمار السيادية، البنوك، مكاتب المحاماة والشركات الاستشارية في دبي وأبوظبي.',
      },
      turnaround: { en: '24-48h express delivery options', ar: 'خيارات تسليم سريعة خلال ٢٤-٤٨ ساعة' },
      startingRate: 5500,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      featured: false,
    },
  ],

  studios: [
    {
      id: 'dubai-alquoz',
      city: { en: 'DUBAI', ar: 'دبي' },
      district: { en: 'Al Quoz Creative Zone (Next to Alserkal Avenue)', ar: 'منطقة القوز الإبداعية (بجوار السركال أفينيو)' },
      name: { en: 'Studio 1 — Dubai Infinity Cyclorama Hub', ar: 'استوديو ١ — مركز السايك اللانهائي بدبي' },
      address: { en: 'Warehouse 14, Street 8, Al Quoz 1, Dubai, UAE', ar: 'مستودع ١٤، شارع ٨، القوز ١، دبي، الإمارات' },
      phone: '+971 4 600 9200',
      hours: { en: 'Sat – Thu: 08:00 AM – 10:00 PM (24/7 for active shoots)', ar: 'السبت – الخميس: ٠٨:٠٠ ص – ١٠:٠٠ م (٢٤/٧ لأيام التصوير)' },
      specs: {
        en: [
          '3,500 sqft total air-conditioned creative space',
          '12m wide x 10m deep x 6m high 2-wall seamless white infinity cyclorama',
          'Full overhead motorized Broncolor & Profoto lighting grid',
          'Private VIP client lounge, hair/makeup salon & barista kitchen',
          'Direct ground floor loading dock for set construction & large props',
        ],
        ar: [
          'مساحة إبداعية مكيفة بالكامل بمساحة ٣,٥٠٠ قدم²',
          'جدار سايك أبيض لانهائي مزدوج بطول ١٢م × عمق ١٠م × ارتفاع ٦م',
          'شبكة إضاءة علوية آلية مجهزة بفلاشات Broncolor و Profoto',
          'صالة كبار شخصيات خاصة، صالون تجميل ومكياج ومطبخ باريستا',
          'رصيف تحميل أرضي مباشر لتجهيز الديكورات والمجسمات الكبيرة',
        ],
      },
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
      mapCoords: '25.1384° N, 55.2289° E',
    },
    {
      id: 'abudhabi-mussafah',
      city: { en: 'ABU DHABI', ar: 'أبوظبي' },
      district: { en: 'Mussafah Industrial Media Corridor (M-12)', ar: 'مجمع مصفح الإعلامي الصناعي (M-12)' },
      name: { en: 'Soundstage 2 — Abu Dhabi Automotive & Motion Stage', ar: 'ساوند ستيج ٢ — استوديو السيارات والإنتاج السينمائي بأبوظبي' },
      address: { en: 'Unit 9, Sector M-12, Industrial Media Zone, Abu Dhabi, UAE', ar: 'وحدة ٩، القطاع M-12، المنطقة الإعلامية، أبوظبي، الإمارات' },
      phone: '+971 2 500 8100',
      hours: { en: 'Mon – Sat: 08:00 AM – 09:00 PM (24/7 drive-in availability)', ar: 'الإثنين – السبت: ٠٨:٠٠ ص – ٠٩:٠٠ م (مدخل السيارات متاح ٢٤/٧)' },
      specs: {
        en: [
          '5,000 sqft heavy-duty soundproofed soundstage',
          'Drive-in vehicle access bay for luxury hypercars and commercial trucks',
          '100kW 3-phase industrial power with camlock distribution',
          'Acoustically isolated audio recording & digital color suite on-site',
          'Dedicated green room, production offices, and 24/7 secure equipment storage',
        ],
        ar: [
          'استوديو تصوير معزول صوتياً للإنتاج الثقيل بمساحة ٥,٠٠٠ قدم²',
          'مدخل مخصص لقيادة السيارات الفاخرة والشاحنات التجارية لداخل الاستوديو',
          'طاقة صناعية ثلاثية الطور ١٠٠ كيلوواط مع لوحات توزيع متطورة',
          'غرفة تسجيل صوتي معزولة واستوديو تلوين رقمي في الموقع',
          'غرفة استراحة للنجوم ومكاتب إنتاج ومخازن معدات آمنة على مدار الساعة',
        ],
      },
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1000&q=80',
      mapCoords: '24.3521° N, 54.5123° E',
    },
  ],

  insights: [
    {
      id: 'guide-luxury-brand-identity',
      title: {
        en: 'Engineering Visual Authority: How Lighting & Color Science Drive UAE Luxury Conversions',
        ar: 'هندسة الهيبة البصرية: كيف يؤدي علم الإضاءة والألوان إلى مضاعفة مبيعات المنتجات الفاخرة',
      },
      category: { en: 'Brand Strategy', ar: 'استراتيجية العلامة' },
      readTime: { en: '6 min read', ar: '٦ دقائق قراءة' },
      date: { en: 'May 2026', ar: 'مايو ٢٠٢٦' },
      summary: {
        en: 'A deep dive into why medium format sensor resolution, 16-bit color gamuts, and precise specular highlight control elevate perceived brand value across the Middle East.',
        ar: 'تحليل معمق لأهمية حساسات الميديام فورمات، ومجال ألوان 16-bit، والتحكم في انعكاسات الإضاءة لترسيخ القيمة الفاخرة للعلامات التجارية.',
      },
      author: { en: 'Alexander Reed, Creative Director', ar: 'ألكسندر ريد، المدير الإبداعي' },
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      content: {
        en: [
          {
            section: 'The Optical Psychology of Luxury',
            body: 'In luxury retail, consumers do not merely inspect products; they evaluate craftsmanship through visual texture. When photographing haute horlogerie or fine jewelry, the transition between shadow and specular highlight must mimic natural eye accommodation without harsh digital clipping.',
          },
          {
            section: 'Why 16-Bit RAW Matters for Middle East Print & Billboards',
            body: 'Standard 8-bit or 10-bit color spaces produce banding when scaled to 50-meter highway billboards on Sheikh Zayed Road. Our 16-bit ProPhoto RGB capture preserves 65,536 tonal levels per channel, ensuring seamless gradients in gold, platinum, and deep desert sunset hues.',
          },
          {
            section: 'Synchronizing Stills with Vertical 8K Reels',
            body: 'Modern campaigns demand multi-format readiness. By establishing continuous lighting foundations combined with high-speed strobe sync, we capture billboard-ready still frames and cinematic 9:16 Instagram Reels simultaneously, cutting client production costs by 40%.',
          },
        ],
        ar: [
          {
            section: 'علم النفس البصري للمنتجات الفاخرة',
            body: 'في قطاع السلع الفاخرة، لا يكتفي المتسوق برؤية المنتج، بل يستشعر جودة الصنع من خلال الملمس البصري. عند تصوير الساعات الراقية أو المجوهرات، يجب أن يكون التدرج بين الظل والضوء ناعماً وطبيعياً للغاية دون أي تشويه رقمي حاد.',
          },
          {
            section: 'أهمية نظام 16-Bit للوحات الإعلانية الضخمة في الإمارات',
            body: 'تؤدي أنظمة الألوان العادية إلى تكسر تدرج الألوان عند تكبير الصور للوحات الإعلانية بطول ٥٠ متراً على شارع الشيخ زايد. يضمن نظامنا بنقاء 16-bit حفظ ٦٥,٥٣٦ مستوى لوني لكل قناة لضمان تدرجات انسيابية مذهلة للذهب والأحجار الكريمة وسماء الصحراء.',
          },
          {
            section: 'المواءمة بين الصور الثابتة ومقاطع الريلز 8K',
            body: 'تتطلب الحملات الحديثة مرونة عبر جميع المنصات. عبر دمج الإضاءة المستمرة مع فلاشات السرعة العالية، نلتقط صور اللوحات المطبوعة بالتزامن مع مقاطع الفيديو العمودية لإنستغرام، مما يوفر ٤٠٪ من تكلفة أيام الإنتاج المنفصلة.',
          },
        ],
      },
    },
    {
      id: 'guide-architectural-twilight',
      title: {
        en: 'The Twilight Window: Mastering Architectural Lighting in Dubai and Abu Dhabi',
        ar: 'نافذة الغسق الذهبية: أسرار التصوير المعماري الاحترافي في دبي وأبوظبي',
      },
      category: { en: 'Architecture', ar: 'العمارة' },
      readTime: { en: '5 min read', ar: '٥ دقائق قراءة' },
      date: { en: 'April 2026', ar: 'أبريل ٢٠٢٦' },
      summary: {
        en: 'How to balance extreme UAE desert atmospheric haze with interior lighting design during the critical 18-minute twilight blue hour.',
        ar: 'كيفية موازنة الضباب الجوي الصحراوي مع إضاءات التصميم الداخلي خلال نافذة الـ ١٨ دقيقة الحرجة لساعة الغسق الزرقاء.',
      },
      author: { en: 'Layla Al-Noor, Director of Photography', ar: 'ليلى النور، مديرة التصوير' },
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      content: {
        en: [
          {
            section: 'The 18-Minute Architectural Window',
            body: 'In the Gulf region, the transition between harsh sunlight and deep night happens rapidly. The ideal balance—where ambient sky luminance matches interior warm halogen lighting—lasts approximately 18 minutes.',
          },
          {
            section: 'Tilt-Shift Precision vs Post-Perspective Correction',
            body: 'Software perspective corrections stretch pixel data and degrade corner sharpness. Using optical Rodenstock tilt-shift lenses on medium format cameras keeps vertical lines perfectly parallel on the physical sensor plane without pixel interpolation.',
          },
        ],
        ar: [
          {
            section: 'نافذة الـ ١٨ دقيقة المعمارية الحرجة',
            body: 'في منطقة الخليج، يحدث الانتقال بين أشعة الشمس الساطعة وظلام الليل بسرعة كبيرة. يستمر التوازن المثالي بين إضاءة السماء الزرقاء وتوهج الإضاءات الداخلية الدافئة لمدة تقارب ١٨ دقيقة فقط.',
          },
          {
            section: 'عدسات Tilt-Shift البصرية مقابل التعديل الرقمي',
            body: 'يؤدي تعديل الأبعاد ببرامج الكمبيوتر إلى تمديد البكسلات وفقدان الحدة في الحواف. بينما يضمن استخدام عدسات Tilt-Shift المادية على حساسات الميديام فورمات بقاء الخطوط المعمارية متوازية تماماً بأعلى دقة ممكنة.',
          },
        ],
      },
    },
    {
      id: 'guide-ecommerce-product-macro',
      title: {
        en: 'Macro Texture Science: Why High-Jewelry Focus Stacking Doubles Online Conversion',
        ar: 'علم ملمس الماكرو: كيف يضاعف تكديس التركيز للمجوهرات والساعات مبيعات المتاجر الرقمية',
      },
      category: { en: 'E-Commerce', ar: 'التجارة الإلكترونية' },
      readTime: { en: '4 min read', ar: '٤ دقائق قراءة' },
      date: { en: 'March 2026', ar: 'مارس ٢٠٢٦' },
      summary: {
        en: 'Why depth-of-field limitations in macro photography require automated motorized rail focus stacking for luxury e-commerce.',
        ar: 'لماذا تفرض محدودية عمق الميدان في تصوير الماكرو استخدام سكك آلية لتكديس التركيز لمنتجات التجارة الإلكترونية الفاخرة.',
      },
      author: { en: 'Marcus Vance, Automotive & Tech Lead', ar: 'ماركوس فانس، رئيس قسم التقنية والحركة' },
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      content: {
        en: [
          {
            section: 'Overcoming Physical Diffraction at Extreme Magnification',
            body: 'Stopping down a lens to f/22 causes optical diffraction, rendering fine diamond facets soft. By shooting 40 individual frames at the lens sweet spot (f/5.6) on a motorized 10-micron rail and blending in post, we achieve edge-to-edge razor sharpness.',
          },
        ],
        ar: [
          {
            section: 'التغلب على الانحراف الضوئي عند التكبير الفائق',
            body: 'تضييق فتحة العدسة إلى f/22 يسبب انكساراً ضوئياً يجعل بريق الألماس باهتاً. بينما يتيح تصوير ٤٠ لقطة متتالية عند أفضل فتحة للعدسة (f/5.6) على سكة آلية بدقة ١٠ ميكرون ودمجها رقمياً الحصول على حدة فائقة في كل مليمتر من القطعة.',
          },
        ],
      },
    },
  ],

  testimonials: [
    {
      id: 't-1',
      quote: {
        en: 'FRAMEHAUS transformed our ultra-luxury villa launch. The twilight architectural shots and dynamic 4K video reels generated over AED 120M in off-plan buyer inquiries within 3 weeks of campaign rollout.',
        ar: 'أحدث استوديو فريم هاوس تحولاً جذرياً في إطلاق مشروع الفلل الفاخرة. حققت الصور المعمارية الغروبية ومقاطع الفيديو استفسارات مبيعات تجاوزت ١٢٠ مليون درهم خلال ٣ أسابيع.',
      },
      author: { en: 'Rashid Al-Mansoori', ar: 'راشد المنصوري' },
      role: { en: 'Chief Marketing Officer', ar: 'رئيس قطاع التسويق' },
      company: { en: 'Vanguard Luxury Real Estate Dubai', ar: 'فانغارد للعقارات الفاخرة دبي' },
      rating: 5,
      verifiedTag: { en: 'Verified Real Estate Campaign', ar: 'حملة عقارية معتمدة' },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 't-2',
      quote: {
        en: 'The macro clarity on our 18k diamond and tourbillon watch campaign was exceptional. Our Swiss partners were astonished by the 150MP print fidelity on our Dubai Mall flagship billboards.',
        ar: 'كانت دقة تصوير الماكرو لحملة ساعات التوربيون والألماس استثنائية بكل المقاييس. أبدى شركاؤنا في سويسرا إعجابهم الشديد بنقاء طباعة الصور على لوحات فرعنا في دبي مول.',
      },
      author: { en: 'Elena Rostova', ar: 'إيلينا روستوفا' },
      role: { en: 'Head of Brand & Communications', ar: 'مديرة العلامة التجارية والاتصال' },
      company: { en: 'Lumina Haute Horlogerie UAE', ar: 'لومينا للساعات الفاخرة الإمارات' },
      rating: 5,
      verifiedTag: { en: 'Verified Luxury Retail Campaign', ar: 'حملة تجزئة فاخرة معتمدة' },
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 't-3',
      quote: {
        en: 'From obtaining DCAA drone permits to executing complex red dune desert lighting rigs, the FRAMEHAUS team operated with military precision. Initial proof selects were in our inbox in 36 hours.',
        ar: 'من استخراج تصاريح الدرون وحتى إدارة منصات الإضاءة المعقدة في كثبان الصحراء، عمل فريق فريم هاوس بانضباط واحترافية مطلقة. تسلمنا مسودات الصور خلال ٣٦ ساعة فقط.',
      },
      author: { en: 'Fatima Al-Sayed', ar: 'فاطمة السيد' },
      role: { en: 'Creative Director', ar: 'المديرة الإبداعية' },
      company: { en: 'Al-Sayed Haute Couture Fashion', ar: 'مجموعة السيد للأزياء الراقية' },
      rating: 5,
      verifiedTag: { en: 'Verified Fashion Editorial', ar: 'جلسة تصوير أزياء معتمدة' },
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
  ],

  faqs: [
    {
      id: 'faq-1',
      category: 'booking',
      question: {
        en: 'How do I book a studio or on-location shoot with FRAMEHAUS?',
        ar: 'كيف يمكنني حجز استوديو أو جلسة تصوير خارجية مع فريم هاوس؟',
      },
      answer: {
        en: 'You can use our Interactive Quote Estimator, submit our Project Inquiry Form, or contact our VIP desk via WhatsApp. Our executive producer will review your brief and issue a detailed itemized production proposal within 4 business hours.',
        ar: 'يمكنك استخدام حاسبة التكلفة التفاعلية، أو تعبئة نموذج طلب الإنتاج، أو التواصل مع مكتب كبار الشخصيات عبر واتساب. سيقوم المنتج التنفيذي بمراجعة طلبك وإرسال عرض رسمي مفصل خلال ٤ ساعات عمل.',
      },
    },
    {
      id: 'faq-2',
      category: 'turnaround',
      question: {
        en: 'What is your turnaround time for proofs and final retouched deliverables?',
        ar: 'ما هي مدة تسليم المسودات والملفات النهائية المعالجة؟',
      },
      answer: {
        en: 'Initial proof selects are provided via our private cloud gallery within 48 hours of shooting (24-hour rush available). Final master 16-bit retouched TIFFs and high-res JPEGs are delivered within 5 to 7 business days.',
        ar: 'يتم تسليم المسودات الأولية عبر بوابتنا السحابية الخاصة خلال ٤٨ ساعة من التصوير (يتوفر خيار التسليم العاجل خلال ٢٤ ساعة). ويتم تسليم الملفات الماستر النهائية المعالجة خلال ٥ إلى ٧ أيام عمل.',
      },
    },
    {
      id: 'faq-3',
      category: 'licensing',
      question: {
        en: 'What commercial licensing rights are included with our shoot?',
        ar: 'ما هي حقوق التراخيص التجارية المشمولة في جلسة التصوير؟',
      },
      answer: {
        en: 'All standard commercial packages include full GCC and global digital, social media, web, and print advertising usage rights in perpetuity with zero hidden recurring royalties or licensing renewals.',
        ar: 'تشمل جميع الباقات التجارية القياسية حقوق ترخيص كاملة للاستخدام الرقمي، ومواقع التواصل، والويب، واللوحات الإعلانية المطبوعة في دول الخليج والعالم مدى الحياة دون أي رسوم تجديد دورية خفية.',
      },
    },
    {
      id: 'faq-4',
      category: 'production',
      question: {
        en: 'Do you handle UAE government shooting permits and location scouting?',
        ar: 'هل تتولون استخراج تصاريح التصوير الحكومية ومعاينة المواقع في الإمارات؟',
      },
      answer: {
        en: 'Yes. We are registered with the Dubai Film & TV Commission (DFTVC) and civil aviation authorities. We manage all location permits, police coordination, drone flight clearances (DCAA), and desert reserve authorizations.',
        ar: 'نعم، استوديو فريم هاوس مسجل لدى لجنة دبي للإنتاج التلفزيوني والسينمائي وهيئات الطيران المدني. نتولى استخراج كافة التصاريح، وتنسيق إغلاق الطرق مع الشرطة، وتصاريح الدرون، والمحميات الصحراوية.',
      },
    },
    {
      id: 'faq-5',
      category: 'production',
      question: {
        en: 'What camera and lighting systems do you operate in-house?',
        ar: 'ما هي أنظمة الكاميرات والإضاءة المتوفرة لديكم داخل الاستوديو؟',
      },
      answer: {
        en: 'We own and operate Phase One IQ4 150MP digital backs, Hasselblad H6D-100c medium format systems, RED V-Raptor 8K cinema cameras, Broncolor Scoro 3200S flash generators, and Profoto Pro-11 lighting arrays.',
        ar: 'نمتلك ونشغل كاميرات Phase One IQ4 بدقة ١٥٠ ميغابكسل، ومنظومة Hasselblad H6D-100c ميديام فورمات، وكاميرات RED V-Raptor 8K السينمائية، ومولدات فلاشات Broncolor Scoro 3200S وProfoto Pro-11.',
      },
    },
    {
      id: 'faq-6',
      category: 'booking',
      question: {
        en: 'Can we rent your studio spaces without hiring your photography crew?',
        ar: 'هل يمكن استئجار مساحات الاستوديو فقط دون حجز طاقم المصورين؟',
      },
      answer: {
        en: 'Yes. Both our 3,500 sqft Al Quoz Cyclorama Studio and 5,000 sqft Abu Dhabi Soundstage are available for dry-hire by visiting international production crews, agencies, and independent cinematographers with full grip packages.',
        ar: 'نعم، يتوفر كل من استوديو السايك بالقوز بمساحة ٣,٥٠٠ قدم² وساوند ستيج أبوظبي بمساحة ٥,٠٠٠ قدم² للإيجار المباشر لفرق الإنتاج الدولية والوكالات الإعلانية والمخرجين المستقلين مع حزم المعدات الكاملة.',
      },
    },
    {
      id: 'faq-7',
      category: 'turnaround',
      question: {
        en: 'Can our marketing team attend and review images live during the shoot?',
        ar: 'هل يمكن لفريق التسويق لدينا الحضور ومراجعة الصور مباشرة أثناء التصوير؟',
      },
      answer: {
        en: 'Absolutely. All productions feature live tethered capture directly into Capture One Pro displayed on 4K calibrated EIZO monitors in our private client suites or mobile location production carts.',
        ar: 'بالتأكيد، تدعم جميع جلساتنا البث المباشر المربوط فورياً ببرنامج Capture One Pro والمعروض على شاشات EIZO 4K المعايرة داخل صالات كبار الشخصيات أو عربات الإنتاج المتنقلة بالمواقع الخارجية.',
      },
    },
    {
      id: 'faq-8',
      category: 'production',
      question: {
        en: 'Do you produce vertical social media video reels during the same shoot?',
        ar: 'هل تقومون بتصوير مقاطع ريلز عمودية للسوشيال ميديا في نفس الجلسة؟',
      },
      answer: {
        en: 'Yes. Our hybrid production teams capture cinematic 4K/8K vertical b-roll clips alongside primary stills, delivering finished color-graded social reels ready for immediate marketing deployment.',
        ar: 'نعم، تقوم فرق الإنتاج الهجينة بالتقاط مقاطع فيديو عمودية سينمائية بدقة 4K/8K بالتزامن مع الصور الثابتة، مع تسليم مقاطع ريلز ملونة وجاهزة للنشر الفوري على منصاتكم.',
      },
    },
    {
      id: 'faq-9',
      category: 'booking',
      question: {
        en: 'What is your deposit and billing structure?',
        ar: 'ما هي هيكلة الدفعات وجدول السداد المعتمد؟',
      },
      answer: {
        en: 'A 50% deposit secures your studio booking and production dates, with the remaining 50% invoiced upon final delivery and client approval of retouched master assets. Corporate 30-day terms are available for approved enterprise accounts.',
        ar: 'تضمن دفعة مقدمة بنسبة ٥٠٪ حجز مواعيد الاستوديو والطاقم، ويتم سداد الـ ٥٠٪ المتبقية عند التسليم النهائي واعتماد الملفات الماستر. تتوفر تسهيلات دفع ٣٠ يوماً للشركات والمؤسسات المعتمدة.',
      },
    },
    {
      id: 'faq-10',
      category: 'turnaround',
      question: {
        en: 'How many revision rounds are included in post-production?',
        ar: 'كم عدد جولات التعديل المشمولة في مرحلة المعالجة الرقمية؟',
      },
      answer: {
        en: 'Two comprehensive rounds of digital retouching and color grading feedback are included in every standard project scope to ensure absolute alignment with your brand standards.',
        ar: 'تتضمن كل باقة قياسية جولتين كاملتين من مراجعات المعالجة الرقمية وضبط درجات الألوان لضمان التطابق التام مع معايير هويتكم البصرية.',
      },
    },
  ],
};
