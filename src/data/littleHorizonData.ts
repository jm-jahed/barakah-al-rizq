export interface NurseryProgram {
  id: string;
  num: string;
  title: string;
  titleAr: string;
  ageRange: string;
  ageRangeAr: string;
  schedule: string;
  scheduleAr: string;
  price: string;
  numericPrice: number;
  pricePeriod: 'month' | 'week';
  ratio: string;
  ratioAr: string;
  overview: string;
  overviewAr: string;
  learningFocus: string;
  learningFocusAr: string;
  idealFor: string;
  idealForAr: string;
  dailyRoutine: { time: string; activity: string; activityAr: string }[];
  outcomes: { en: string; ar: string }[];
  highlights: { en: string; ar: string }[];
}

export interface LeadershipMember {
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  bio: string;
  bioAr: string;
  credentials: string;
  credentialsAr: string;
  image: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  readTime: string;
  readTimeAr: string;
  date: string;
  dateAr: string;
  summary: string;
  summaryAr: string;
  content: string[];
  contentAr: string[];
  keyTakeaways: string[];
  keyTakeawaysAr: string[];
}

export interface Testimonial {
  quote: string;
  quoteAr: string;
  author: string;
  authorAr: string;
  relation: string;
  relationAr: string;
  location: string;
  locationAr: string;
  rating: number;
  program: string;
  programAr: string;
  childName: string;
  childAge: string;
}

export interface FAQItem {
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
  category: string;
  categoryAr: string;
}

export interface CampusLocation {
  id: string;
  city: string;
  cityAr: string;
  district: string;
  districtAr: string;
  name: string;
  nameAr: string;
  address: string;
  addressAr: string;
  phone: string;
  email: string;
  googleMapsUrl: string;
  features: { en: string; ar: string }[];
  operatingHours: { en: string; ar: string };
  image: string;
}

export const LITTLE_HORIZON_DATA = {
  brand: "LITTLE HORIZON",
  brandAr: "ليتل هورايزون",
  tagline: "Where Curiosity Takes Its First Steps.",
  taglineAr: "حيث يخطو الفضول أولى خطواته المفعمة بالدهشة.",
  positioning: "Premium UAE Nursery & Early-Years Preschool",
  positioningAr: "حضانة وروضة أطفال متميزة في دولة الإمارات",
  phone: "+971 4 300 45810",
  whatsapp: "https://wa.me/9715030045810",
  whatsappNumber: "+971 50 300 45810",
  email: "admissions@littlehorizon.ae",

  trustLogos: [
    { name: "ARABIAN RANCHES", tag: "Dubai Family Hub", tagAr: "مركز العائلات بدبي" },
    { name: "JUMEIRAH COASTAL", tag: "Dubai Coastal Campus", tagAr: "فرع جميرا الساحلي" },
    { name: "AL REEM ISLAND", tag: "Abu Dhabi Flagship", tagAr: "فرع جزيرة الريم بأبوظبي" },
    { name: "PARENTS ALLIANCE", tag: "Active Family Community", tagAr: "مجتمع العائلات المترابط" }
  ],

  programs: [
    {
      id: "baby-room",
      num: "01",
      title: "Baby Room",
      titleAr: "جناح الرضع (بيبي روم)",
      ageRange: "6 – 18 Months",
      ageRangeAr: "٦ إلى ١٨ شهراً",
      schedule: "Full-Day (7:30 AM - 5:00 PM) / Half-Day",
      scheduleAr: "دوام كامل (٧:٣٠ ص - ٥:٠٠ م) / نصف دوام",
      price: "AED 3,200 / month",
      numericPrice: 3200,
      pricePeriod: "month" as const,
      ratio: "1:3 Care Ratio",
      ratioAr: "نسبة رعاية ١:٣ فائقة",
      overview: "A serene, sensory-rich nursery environment designed for gentle exploration, milestone tracking, and bonding with UK-certified early-years pediatric nurses.",
      overviewAr: "بيئة هادئة وغنية بالمثيرات الحسية مصممة للرضع لاستكشاف العالم وتتبع مؤشرات النمو بإشراف ممرضات أطفال معتمدات.",
      learningFocus: "Sensory Development, Motor Coordination & Emotional Security",
      learningFocusAr: "النمو الحسي، التناسق الحركي والأمان العاطفي",
      idealFor: "Infants transitioning from home care into their first nurturing social nursery setting.",
      idealForAr: "الرضع الذين ينتقلون من الرعاية المنزلية إلى أول بيئة حضانة اجتماعية آمنة.",
      dailyRoutine: [
        { time: "07:30 AM", activity: "Gentle Arrival & Morning Cuddles with Key Nurse", activityAr: "استقبال هادئ واحتضان صباحي مع الممرضة المخصصة" },
        { time: "09:00 AM", activity: "Sensory Texture Exploration & Tummy Time", activityAr: "استكشاف الملامس الحسية وتمارين تقوية العضلات (Tummy Time)" },
        { time: "11:00 AM", activity: "Organic Pureed Lunch & Nurturing Rest in Darkened Nursery", activityAr: "وجبة هريس عضوية طازجة وفترة قيلولة هادئة" },
        { time: "02:00 PM", activity: "Soft Acoustic Music, Movement & Storytelling Circle", activityAr: "موسيقى هادئة، حركات إيقاعية وجلسة قراءة قصص مبسطة" },
        { time: "04:00 PM", activity: "Afternoon Refreshment, Milestone Log & Parent Handover", activityAr: "وجبة خفيفة، تسجيل تقرير النمو والتسليم للأهل" }
      ],
      outcomes: [
        { en: "Head control, crawling confidence & physical coordination", ar: "التحكم بالرأس، ثقة الزحف والتناسق الحركي المبكر" },
        { en: "Secure emotional attachment with primary key caregivers", ar: "ارتباط عاطفي آمن ومستقر مع المربيات الرئيسيات" },
        { en: "Auditory, visual and tactile sensory stimulus tracking", ar: "تتبع وتفاعل سليم مع المثيرات السمعية والبصرية واللمسية" },
        { en: "Real-time daily digital mobile app logs with photos for parents", ar: "تقارير مصورة ولحظية يومياً للأهل عبر التطبيق الذكي" }
      ],
      highlights: [
        { en: "1:3 Nurse-to-Infant Ratio", ar: "نسبة ممرضة لكل ٣ رضع" },
        { en: "Medical-Grade Air Filtration", ar: "تنقية هواء طبية متطورة" },
        { en: "Custom Weaning Menus", ar: "قوائم فطام غذائي مخصصة" }
      ]
    },
    {
      id: "toddler-program",
      num: "02",
      title: "Toddler Program",
      titleAr: "برنامج البراعم (تودلرز)",
      ageRange: "18 Months – 3 Years",
      ageRangeAr: "١٨ شهراً إلى ٣ سنوات",
      schedule: "Full-Day (7:30 AM - 5:00 PM) / Half-Day",
      scheduleAr: "دوام كامل (٧:٣٠ ص - ٥:٠٠ م) / نصف دوام",
      price: "AED 3,800 / month",
      numericPrice: 3800,
      pricePeriod: "month" as const,
      ratio: "1:5 Care Ratio",
      ratioAr: "نسبة رعاية ١:٥",
      overview: "Active play-based discovery encouraging bilingual language acquisition, creative expression, outdoor nature discovery, and early peer collaboration.",
      overviewAr: "استكشاف نشط قائم على اللعب يحفز اكتساب اللغتين، والتعبير الفني، واللعب الخارجي في أحضان الطبيعة، والتفاعل الإيجابي مع الأقران.",
      learningFocus: "Language Acquisition, Self-Expression & Fine Motor Precision",
      learningFocusAr: "اكتساب اللغة، التعبير عن الذات والمهارات الحركية الدقيقة",
      idealFor: "Energetic toddlers developing early independence, speech fluency, and curiosity.",
      idealForAr: "الأطفال الصغار الشغوفين باكتشاف محيطهم وتطوير استقلاليتهم ومهارات التحدث.",
      dailyRoutine: [
        { time: "08:00 AM", activity: "Bilingual Welcome Circle & Morning Song", activityAr: "حلقة ترحيبية ثنائية اللغة وأنشودة الصباح" },
        { time: "09:30 AM", activity: "Messy Sensory Play: Finger Painting, Water & Clay", activityAr: "لعب حسي حر: رسم بالأصابع، استكشاف الماء والطين الطبيعي" },
        { time: "11:30 AM", activity: "Nutritious Chef-Prepared Warm Lunch & Table Etiquette", activityAr: "وجبة غداء ساخنة متوازنة من الطاهي وتدريب آداب المائدة" },
        { time: "01:00 PM", activity: "Soothing Quiet Rest Period with Classical Lullabies", activityAr: "فترة استرخاء ونوم هادئة مع مقطوعات كلاسيكية لطيفة" },
        { time: "03:00 PM", activity: "Outdoor Shaded Garden Discovery & Splash Pad Agility", activityAr: "استكشاف الحديقة المظللة ولعب مائي تفاعلي" }
      ],
      outcomes: [
        { en: "Rapid bilingual vocabulary expansion (Arabic & English)", ar: "توسع سريع في الحصيلة اللغوية باللغتين العربية والإنجليزية" },
        { en: "Gentle toilet learning & personal hygiene independence", ar: "دعم تدريجي للاستغناء عن الحفاض والاعتماد على النفس" },
        { en: "Sharing, turn-taking & positive emotional regulation", ar: "المشاركة وتبادل الأدوار وضبط المشاعر الإيجابي" },
        { en: "Fine motor control with paint brushes, blocks & wooden puzzles", ar: "تحكم حركي دقيق باستخدام الفرش والمكعبات والأحاجي الخشبية" }
      ],
      highlights: [
        { en: "Dual Language Immersion", ar: "انغماس لغوي ثنائي" },
        { en: "Dedicated Potty-Training Suite", ar: "جناح مخصص للتدريب على النظافة" },
        { en: "Daily Outdoor Play", ar: "أنشطة خارجية مظللة يومياً" }
      ]
    },
    {
      id: "pre-kindergarten",
      num: "03",
      title: "Pre-Kindergarten (Pre-K)",
      titleAr: "الروضة التمهيدية (ما قبل الروضة)",
      ageRange: "3 – 4 Years",
      ageRangeAr: "٣ إلى ٤ سنوات",
      schedule: "Full-Day (7:30 AM - 4:00 PM) / Extended to 5:30 PM",
      scheduleAr: "دوام مدرسي (٧:٣٠ ص - ٤:٠٠ م) / ممتد حتى ٥:٣٠ م",
      price: "AED 4,400 / month",
      numericPrice: 4400,
      pricePeriod: "month" as const,
      ratio: "1:6 Educator Ratio",
      ratioAr: "نسبة معلمة لكل ٦ أطفال",
      overview: "Comprehensive early academic preparation fostering phonic readiness, mathematical patterns, scientific inquiry, and school interview confidence.",
      overviewAr: "إعداد أكاديمي واجتماعي شامل يعزز الاستعداد الصوتي والقراءة المبكرة والمفاهيم الحسابية والثقة التامة في اختبارات قبول المدارس.",
      learningFocus: "Early Literacy, Number Concepts & Collaborative Leadership",
      learningFocusAr: "القراءة المبكرة، المفاهيم العددية والقيادة التعاونية",
      idealFor: "Preschoolers preparing for entrance assessments at top British, IB, and American schools in UAE.",
      idealForAr: "الأطفال الذين يستعدون لاختبارات القبول في المدارس الدولية المرموقة بالدولة.",
      dailyRoutine: [
        { time: "08:00 AM", activity: "Phonics Sound Recognition & Rhyme Workshop", activityAr: "ورشة التمييز الصوتي للحروف والقوافي التعبيرية" },
        { time: "09:30 AM", activity: "Early STEM Lab: Wooden Engineering & Coding Blocks", activityAr: "مختبر STEM المبكر: الهندسة الخشبية ومكعبات البرمجة التفاعلية" },
        { time: "11:30 AM", activity: "Family-Style Organic Lunch & Social Conversation", activityAr: "غداء عضوي جماعي ومحادثات اجتماعية هادفة" },
        { time: "01:00 PM", activity: "Theatrical Drama, Costume Roleplay & Language Immersion", activityAr: "مسرح تمثيلي وتقمص الأدوار لتعزيز الطلاقة اللغوية" },
        { time: "03:00 PM", activity: "Sports Agility, Tricycle Circuit & Gymnastics", activityAr: "لياقة بدنية، مضمار دراجات وتمارين جمباز مبسطة" }
      ],
      outcomes: [
        { en: "Phonetic letter tracing, sound matching & emergent reading", ar: "تتبع الحروف الهجائية ومطابقة الأصوات وبدايات القراءة" },
        { en: "Pattern recognition, spatial geometry & counting beyond 20", ar: "تمييز الأنماط والهندسة الفضائية والعد فوق الرقم ٢٠" },
        { en: "Public speaking confidence presenting projects to peers", ar: "الثقة في التحدث وعرض المشاريع أمام الزملاء والمعلمات" },
        { en: "100% historical acceptance rate in UAE top tier schools", ar: "سجل قبول بنسبة ١٠٠٪ في المدارس الدولية المتميزة بالإمارات" }
      ],
      highlights: [
        { en: "Primary School Transition Prep", ar: "تأهيل لاختبارات المدارس الابتدائية" },
        { en: "Hands-on STEM Lab", ar: "مختبر علوم واستكشاف عملي" },
        { en: "Weekly Field Projects", ar: "مشاريع استكشافية أسبوعية" }
      ]
    },
    {
      id: "summer-camps",
      num: "04",
      title: "Summer & Seasonal Camps",
      titleAr: "المخيمات الصيفية والموسمية",
      ageRange: "1 – 4 Years",
      ageRangeAr: "١ إلى ٤ سنوات",
      schedule: "Weekly / Monthly Flexible Packages",
      scheduleAr: "باقات مرنة أسبوعية وشهرية",
      price: "AED 950 / week",
      numericPrice: 950,
      pricePeriod: "week" as const,
      ratio: "1:5 Care Ratio",
      ratioAr: "نسبة رعاية ١:٥",
      overview: "Exciting holiday adventure programs featuring splash-pad water play, junior culinary workshops, sensory science labs, and theatrical dress-up days.",
      overviewAr: "برامج مغامرات عطلات شيقة تشمل الألعاب المائية المنعشة، وورش الطاهي الصغير، وتجارب العلوم الحسية، والاحتفالات التنكرية.",
      learningFocus: "Creative Adventure, Splash Agility & Holiday Social Bonding",
      learningFocusAr: "المغامرة الإبداعية، الرشاقة المائية وبناء الصداقات",
      idealFor: "Children seeking rich, air-conditioned and outdoor shaded sensory entertainment during school breaks.",
      idealForAr: "الأطفال الباحثين عن أنشطة مرحة ومكيفة ومظللة خلال العطل المدرسية بالدولة.",
      dailyRoutine: [
        { time: "08:30 AM", activity: "Theme-of-the-Day Adventure Kickoff & Costume Parade", activityAr: "انطلاق مغامرة اليوم وعرض الأزياء التنكرية المبهجة" },
        { time: "10:00 AM", activity: "Temperature-Regulated Splash Pad & Water Games", activityAr: "ألعاب مائية ممتعة في حديقة الرذاذ المنعشة" },
        { time: "11:30 AM", activity: "Junior MasterChef: Organic Baking & Fruit Sculpting", activityAr: "ورشة الطاهي الصغير: خبز صحي وتشكيل الفواكه العضوية" },
        { time: "01:30 PM", activity: "Giant Bubble Science & Sensory Slime Laboratory", activityAr: "مختبر الفقاعات العملاقة وسلايم العلوم الطبيعي" },
        { time: "03:30 PM", activity: "Daily Camper Certificate & Family Photo Capture", activityAr: "شهادة إنجاز المخيم وتوثيق الصور التذكارية للعائلة" }
      ],
      outcomes: [
        { en: "Zero summer learning loss with continuous social interaction", ar: "استمرارية التفاعل الاجتماعي والنمو الذهني دون انقطاع" },
        { en: "High water confidence with daily supervised splash agility", ar: "ثقة عالية في التعامل مع الماء تحت إشراف متخصص" },
        { en: "Exploration of novel sensory arts, clay sculpting & culinary crafts", ar: "اكتشاف هوايات إبداعية جديدة في النحت والفنون والطهي" },
        { en: "Flexible week-by-week booking accommodating family travels", ar: "مرونة حجز أسبوعية تناسب جداول سفر العائلات" }
      ],
      highlights: [
        { en: "Climate-Controlled Splash Arena", ar: "منطقة ألعاب مائية مكيفة ومظللة" },
        { en: "Nutritious Holiday Menus", ar: "وجبات عطلات صحية متكاملة" },
        { en: "Flexible Weekly Passes", ar: "اشتراكات أسبوعية مرنة" }
      ]
    }
  ],

  curriculumTabs: [
    {
      id: "language",
      title: "Language & Bilingual Immersion",
      titleAr: "اللغة والانغماس الثنائي (عربي / إنجليزي)",
      description: "Dual-language immersion (English & Arabic) through interactive storytelling, rhyming songs, and phonics to foster natural bilingual fluency from infancy.",
      descriptionAr: "انغماس لغوي متوازن باللغتين العربية والإنجليزية من خلال القصص التفاعلية، والأناشيد، والوعي الصوتي لترسيخ الفصاحة الطبيعية منذ الصغر.",
      activities: [
        "Bilingual Circle Time with Native Educators",
        "Interactive Puppet Theatre & Character Roleplay",
        "Tactile Letter Tracing & Phonetic Sound Rhymes",
        "Cozy Multi-Language Story Corner"
      ],
      activitiesAr: [
        "حلقة صباحية ثنائية اللغة مع معلمات لغة أم",
        "مسرح الدمى التفاعلي وتقمص الشخصيات",
        "تتبع الحروف بالملامس وأناشيد الحروف الصوتية",
        "ركن القراءة الهادئ بكتب عربية وإنجليزية مختارة"
      ],
      focus: "Verbal Expression & Phonic Literacy",
      focusAr: "الطلاقة التعبيرية والوعي الصوتي التأسيسي",
      benefit: "Builds early cognitive flexibility and cultural appreciation across both Arabic and English.",
      benefitAr: "يعزز المرونة الإدراكية المبكرة والاعتزاز بالهوية العربية مع إتقان اللغة الإنجليزية."
    },
    {
      id: "social",
      title: "Social-Emotional Resilience",
      titleAr: "الذكاء العاطفي والمرونة الاجتماعية",
      description: "Nurturing self-awareness, deep empathy, and collaborative conflict resolution through supportive Reggio-Emilia inspired group projects.",
      descriptionAr: "غرس الوعي الذاتي، والتعاطف العميق، وحل الخلافات الإيجابي من خلال مشاريع جماعية مستوحاة من فلسفة ريجيو إميليا الإيطالية.",
      activities: [
        "Emotion Expression Mirror & Flashcards",
        "Collaborative Turn-Taking & Sharing Games",
        "Mindful Calm-Down Sensory Corners",
        "Daily 'Helping Hands' Classroom Roles"
      ],
      activitiesAr: [
        "مرآة التعرف على المشاعر وبطاقات التعبير",
        "ألعاب المشاركة وانتظار الدور التعاونية",
        "أركان الهدوء الحسي للتأمل والاسترخاء",
        "مهام 'الأيدي المساعدة' اليومية لتعزيز المسؤولية"
      ],
      focus: "Empathy, Cooperation & Self-Regulation",
      focusAr: "التعاطف، التعاون وضبط الانفعالات",
      benefit: "Creates confident children who can articulate their feelings and form enduring peer friendships.",
      benefitAr: "يُنشئ أطفالاً واثقين قادرين على التعبير عن مشاعرهم وتكوين صداقات إيجابية متينة."
    },
    {
      id: "creative",
      title: "Creative Arts & Sensory Expression",
      titleAr: "الفنون الإبداعية والتعبير الحسي",
      description: "Unlocking innate imagination through tactile messy arts, natural clay sculpting, Orff percussion rhythms, and open-ended loose parts play.",
      descriptionAr: "إطلاق العنان للخيال الفطري عبر الفنون الحسية، وتشكيل الطين الطبيعي، وإيقاعات أورف الموسيقية، واللعب بالمواد الطبيعية المفتوحة.",
      activities: [
        "Easel Studio with Washable Non-Toxic Pigments",
        "Orff Percussion & Acoustic Movement",
        "Costume Roleplay & Theatrical Drama Arena",
        "Natural Loose-Parts Sculpting & Wood Crafts"
      ],
      activitiesAr: [
        "استوديو الرسم بأصباغ طبيعية آمنة وقابلة للغسل",
        "إيقاعات أورف الموسيقية والحركة التعبيرية",
        "مسرح الأزياء والدراما التمثيلية المفتوحة",
        "نحت بالمواد الطبيعية والأخشاب المعالجة"
      ],
      focus: "Unbounded Imagination & Fine Motor Skills",
      focusAr: "الخيال اللامحدود والمهارات الحركية الدقيقة",
      benefit: "Encourages original problem solving and self-trust through unconstrained creative exploration.",
      benefitAr: "يحفز التفكير الإبداعي وحل المشكلات غير التقليدي وبناء الثقة الفنية بالنفس."
    },
    {
      id: "stem",
      title: "Early STEM & Scientific Discovery",
      titleAr: "الاستكشاف العلمي والهندسي المبكر (STEM)",
      description: "Hands-on discovery of physics, water hydraulics, botanical life cycles, and geometric architecture that sparks genuine scientific inquiry.",
      descriptionAr: "اكتشاف تطبيقي لقوانين الفيزياء، وتدفق السوائل، ودورات حياة النباتات، والبناء الهندسي لإشعال شغف التساؤل العلمي.",
      activities: [
        "Fluid Dynamics & Water Channel Tables",
        "Architectural Wooden Block Engineering",
        "Campus Botanical Garden Planting & Herb Care",
        "Light Box Prism Geometry & Pattern Sorting"
      ],
      activitiesAr: [
        "طاولات حركة وتدفق المياه التفاعلية",
        "الهندسة المعمارية بالمكعبات الخشبية المتوازنة",
        "زراعة ورعاية النباتات والأعشاب في حديقة الحرم",
        "طاولات الضوء والمناشير الزجاجية لفرز الأنماط"
      ],
      focus: "Logic, Hypothesis Testing & Spatial Reasoning",
      focusAr: "التفكير المنطقي، اختبار الفرضيات والتصور الفضائي",
      benefit: "Lays rigorous foundations for mathematical confidence and systematic logical deduction.",
      benefitAr: "يضع ركائز متينة للثقة الرياضية والحسابية والاستنتاج المنطقي السليم."
    },
    {
      id: "physical",
      title: "Physical Agility & Nature Movement",
      titleAr: "اللياقة الحركية والحركة في الطبيعة",
      description: "Developing robust gross-motor agility, balance, and spatial awareness across custom timber play towers, splash arenas, and toddler yoga.",
      descriptionAr: "تطوير المهارات الحركية الكبرى، والتوازن، والإدراك المكاني عبر أبراج التسلق الخشبية، ومناطق الرذاذ المائي، ويوغا الأطفال.",
      activities: [
        "UV-Shaded Natural Wood Outdoor Play Towers",
        "Padded Indoor Soft-Play Agility Gym",
        "Temperature-Regulated Water Splash Pad",
        "Toddler Animal Yoga & Balance Stepping Stones"
      ],
      activitiesAr: [
        "أبراج تسلق خشبية خارجية مظللة من الأشعة فوق البنفسجية",
        "صالة جيم داخلية مبطنة لتمارين الرشاقة والمرونة",
        "منطقة ألعاب رذاذ مائي آمنة ومنعشة",
        "يوغا الأطفال لمحاكاة حركات الحيوانات ومسارات التوازن"
      ],
      focus: "Vestibular Balance, Stamina & Body Control",
      focusAr: "التوازن الدهليزي، اللياقة البدنية والتحكم بالجسم",
      benefit: "Promotes cardiovascular health, restful sleep cycles, and physical self-confidence.",
      benefitAr: "يعزز صحة القلب، وجودة النوم العميق، والشجاعة البدنية الواثقة."
    }
  ],

  dayTimeline: [
    {
      step: "01",
      time: "07:30 AM",
      title: "Warm Welcome & Sensory Exploration",
      titleAr: "استقبال دافئ واستكشاف حسي حر",
      desc: "Gentle greeting by key educators, cozy reading corners, and self-directed sensory discovery.",
      descAr: "استقبال حنون من المعلمة المخصصة، وأركان قراءة هادئة، واستكشاف حسي ذاتي لبدء اليوم براحة."
    },
    {
      step: "02",
      time: "08:30 AM",
      title: "Bilingual Morning Circle & Music",
      titleAr: "حلقة الصباح الثنائية والموسيقى",
      desc: "Good morning songs in Arabic and English, calendar weather check, and phonics games.",
      descAr: "أناشيد الصباح باللغتين العربية والإنجليزية، وتفقد أحوال الطقس، وألعاب التعرف الصوتي على الحروف."
    },
    {
      step: "03",
      time: "09:30 AM",
      title: "Focused Learning & STEM Workshops",
      titleAr: "ورش العمل التنموية واستكشاف STEM",
      desc: "Small-group literacy, mathematical patterns, tactile clay sculpting, and coding blocks.",
      descAr: "مجموعات صغيرة تركز على القراءة المبكرة، والأنماط الحسابية، وتشكيل الطين، ومكعبات البرمجة."
    },
    {
      step: "04",
      time: "10:30 AM",
      title: "Outdoor Splash & Garden Agility",
      titleAr: "اللعب الخارجي والحديقة المائية",
      desc: "UV-protected shaded playground adventure, tricycle circuit, and splash pad agility games.",
      descAr: "مغامرة في ساحة الألعاب المظللة، ومضمار الدراجات، وألعاب الرشاقة في حديقة الرذاذ المائي."
    },
    {
      step: "05",
      time: "11:30 AM",
      title: "Chef-Prepared Organic Lunch",
      titleAr: "غداء عضوي ساخن من طاهي الحضانة",
      desc: "Nutritious, nut-free, hot organic meal served family-style with table manners guidance.",
      descAr: "وجبة غداء عضوية ساخنة وخالية تماماً من المكسرات، تُقدم بأسلوب عائلي لتعلم آداب المائدة."
    },
    {
      step: "06",
      time: "12:30 PM",
      title: "Restful Nap & Acoustic Storytime",
      titleAr: "قيلولة هادئة وقراءة قصص مريحة",
      desc: "Darkened peaceful sleeping suites with white noise and gentle lullaby acoustic sounds.",
      descAr: "أجنحة نوم معتمة وهادئة مزودة بأصوات الطبيعة المهدئة والتهويدات الموسيقية الخافتة."
    },
    {
      step: "07",
      time: "02:30 PM",
      title: "Afternoon Creative Studio & Baking",
      titleAr: "استوديو الإبداع المسائي والخبز الصغير",
      desc: "Junior organic baking, theatrical costume roleplay, and sensory science experiments.",
      descAr: "ورشة إعداد المخبوزات الصحية، والمسرح التنكري، وتجارب العلوم الحسية الممتعة."
    },
    {
      step: "08",
      time: "04:30 PM",
      title: "Parent Handover & Daily Digital Log",
      titleAr: "تسليم الأطفال والتقرير الرقمي اليومي",
      desc: "Warm farewells, teacher debrief, and instant mobile app synchronization of daily milestones.",
      descAr: "وداع دافئ، وتحدث موجز مع المعلمة، ومزامنة فورية للتقرير اليومي والصور عبر تطبيق الهاتف."
    }
  ],

  caseStudy: {
    client: "The Al Marzooqi Family (Dubai)",
    clientAr: "عائلة المرزوقي (دبي)",
    scenario: "Transitioning 22-Month-Old Layla into Nursery",
    scenarioAr: "تهيئة الطفلة ليلى (٢٢ شهراً) لأول تجربة حضانة",
    challenge: "First-time parents Layla & Rashid wanted a zero-distress, emotionally gentle transition for their daughter, who had only experienced home care with grandparents.",
    challengeAr: "أراد الوالدان راشد وليلى انتقالاً سلساً وخالياً تماماً من البكاء والقلق لابنتهما ليلى التي لم تعتد الابتعاد عن المنزل ورعاية الجدة.",
    before: "Severe separation anxiety, reluctance around unfamiliar children, and non-verbal hesitation.",
    beforeAr: "قلق شديد من الانفصال، تردد عند لقاء أطفال جدد، وحذر لغوي في التعبير.",
    after: "Enrolled in Toddler Program with our gradual 2-week settling protocol. Layla now runs into class with joy, leads bilingual circle songs, and speaks fluently in English and Arabic.",
    afterAr: "التحقت ببرنامج التودلرز مع خطة تهيئة تدريجية لأسبوعين. أصبحت ليلى تركض للحضانة كل صباح بحماس، وتشارك في الأناشيد بطلاقة باللغتين.",
    metrics: [
      { value: "2 Weeks", valueAr: "أسبوعان", label: "Gradual Settling Protocol", labelAr: "مدة خطة التهيئة التدريجية" },
      { value: "100%", valueAr: "١٠٠٪", label: "Zero-Tears Morning Drop-off", labelAr: "استقبال صباحي بدون دموع" },
      { value: "Daily", valueAr: "يومياً", label: "Real-Time Video App Updates", labelAr: "تحديثات فيديو مصورة مباشرة" }
    ]
  },

  whyLittleHorizon: [
    {
      title: "Ultra-Low Teacher Ratios",
      titleAr: "نسب رعاية فائقة الخصوصية",
      desc: "Dedicated 1:3 ratio in Baby Room and 1:5/1:6 in Toddler & Pre-K ensuring individual emotional attunement and safety.",
      descAr: "نسبة ١:٣ في جناح الرضع و١:٥ في فصول البراعم والروضة لضمان اهتمام عاطفي وتعليمي استثنائي بكل طفل.",
      icon: "users"
    },
    {
      title: "UK-Certified Early Educators",
      titleAr: "معلمات معتمدات وممرضات مرخصات",
      desc: "CACHE-certified early childhood specialists and full-time on-site DHA/DOH registered pediatric nurses.",
      descAr: "معلمات حاصلات على شهادات CACHE البريطانية وممرضات أطفال مرخصات من هيئة الصحة بدبي وأبوظبي متواجدات بدوام كامل.",
      icon: "award"
    },
    {
      title: "Biometric Secure Campuses",
      titleAr: "مبانٍ آمنة ببوابات بيومترية",
      desc: "UV-shaded play parks, indoor HEPA air purification, full CCTV coverage, and biometric parent check-in security.",
      descAr: "حدائق مظللة من الأشعة فوق البنفسجية، فلاتر هواء HEPA طبية، كاميرات مراقبة وبوابات دخول بيومترية مؤمنة.",
      icon: "shield"
    },
    {
      title: "100% Organic Chef Nutrition",
      titleAr: "وجبات عضوية طازجة من الطاهي",
      desc: "Nut-free, organic gourmet menus prepared daily in our on-site commercial kitchen by certified pediatric chefs.",
      descAr: "وجبات خالية تماماً من المكسرات ومحضرة بمكونات عضوية طازجة يومياً في مطبخنا الخاص بإشراف أخصائيي تغذية.",
      icon: "heart"
    },
    {
      title: "Live Mobile App Updates",
      titleAr: "تحديثات حية عبر التطبيق الذكي",
      desc: "Live meal logs, diaper/potty reports, nap recordings, photo albums, and direct messaging with your child’s key teacher.",
      descAr: "متابعة لحظية للوجبات، القيلولة، التدريب على النظافة، وصور يومية ومحادثة مباشرة مع معلمة طفلك.",
      icon: "smartphone"
    },
    {
      title: "Top-Tier School Admissions",
      titleAr: "سجل قبول متميز بالمدارس الكبرى",
      desc: "Graduates routinely excel in primary school entry assessments for British, IB, and American institutions across the UAE.",
      descAr: "يجتاز خريجونا اختبارات القبول لأرقى المدارس البريطانية والبكالوريا الدولية والأمريكية في الدولة بسهولة وثقة.",
      icon: "check"
    }
  ],

  leadership: [
    {
      name: "Charlotte Sterling",
      nameAr: "شارلوت ستيرلينغ",
      role: "Founder & Educational Director",
      roleAr: "المؤسسة والمديرة الأكاديمية",
      credentials: "MA Early Childhood Education, London (20+ Years Exp)",
      credentialsAr: "ماجستير في تربية الطفولة المبكرة من لندن (أكثر من ٢٠ عاماً خبرة)",
      bio: "Former British EYFS inspector and early years consultant who has guided nursery establishments across the UK and the GCC for over two decades.",
      bioAr: "مفتشة سابقة للمنهاج البريطاني ومستشارة طفولة مبكرة أشرفت على تطوير أرقى الحضانات في بريطانيا والخليج لأكثر من عقدين.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Amira Al-Hassan",
      nameAr: "د. أميرة الحسن",
      role: "Head of Bilingual Curriculum",
      roleAr: "رئيسة المنهاج والانغماس اللغوي",
      credentials: "PhD Cognitive Child Development (Harvard / UAEU)",
      credentialsAr: "دكتوراه في التطور المعرفي للطفل (هارفارد / جامعة الإمارات)",
      bio: "Leading specialist in early language acquisition and dual Arabic-English cognitive development in multicultural UAE environments.",
      bioAr: "أخصائية بارزة في اكتساب اللغة المبكرة والتطور المعرفي الثنائي (عربي/إنجليزي) للأطفال في بيئات الإمارات متعددة الثقافات.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Grace O'Connor",
      nameAr: "غريس أوكونور",
      role: "Head of Pediatric Pastoral Care",
      roleAr: "رئيسة الرعاية التمريضية والصحية",
      credentials: "Registered Pediatric Nurse (DHA & UK NMC Licensed)",
      credentialsAr: "ممرضة أطفال معتمدة (مرخصة من هيئة الصحة بدبي ومجلس التمريض البريطاني)",
      bio: "Oversees medical-grade campus hygiene, allergy management, growth milestone health screenings, and infant emergency protocols.",
      bioAr: "تشرف على أعلى معايير النظافة والتعقيم، وإدارة الحساسية الغذائية، ومتابعة المؤشرات الصحية الحيوية للأطفال.",
      image: "https://images.unsplash.com/photo-1594824813566-88855ce78961?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Mariam Al-Kaabi",
      nameAr: "مريم الكعبي",
      role: "Arabian Ranches Campus Principal",
      roleAr: "مديرة فرع المرابع العربية بدبي",
      credentials: "PGCE Early Years, University of Cambridge",
      credentialsAr: "دبلوم تأهيل تربوي لمعلمات الطفولة، جامعة كامبريدج",
      bio: "Passionate educator who fosters deeply welcoming, collaborative family partnerships and parent community engagement.",
      bioAr: "تربوية شغوفة بتعزيز الشراكة الإيجابية بين الأسرة والحضانة وبناء مجتمع عائلي متكامل وداعم لنمو الطفل.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    }
  ],

  insights: [
    {
      id: "1",
      title: "Choosing the Right Nursery: What UAE Parents Must Look For",
      titleAr: "اختيار الحضانة المثالية: أهم المعايير التي تبحث عنها العائلات في الإمارات",
      category: "Parenting Guide",
      categoryAr: "دليل أولياء الأمور",
      readTime: "5 min read",
      readTimeAr: "٥ دقائق قراءة",
      date: "May 2026",
      dateAr: "مايو ٢٠٢٦",
      summary: "Essential criteria when evaluating nurse ratios, CCTV policies, air filtration, and curriculum authenticity in Dubai & Abu Dhabi.",
      summaryAr: "دليل شامل لتقييم نسب الرعاية، وسياسات المراقبة، ونقاء الهواء، وجودة المناهج في دبي وأبوظبي.",
      content: [
        "Choosing your child's first early-learning environment is one of the most consequential decisions you will make. In the UAE's vibrant educational landscape, parents are often presented with diverse marketing claims, making it vital to discern genuine pedagogical quality from cosmetic appeal.",
        "First, scrutinize the actual staff-to-child ratios in the classroom. While regulatory standards establish maximum limits, premium centers like Little Horizon operate significantly lower ratios (1:3 in infant suites and 1:5 in toddler rooms) to ensure emotional attunement and rapid developmental intervention.",
        "Second, inspect campus health and air infrastructure. In hot climates where indoor play is frequent during summer months, look for medical-grade HEPA filtration, non-toxic organic finishes, and dedicated shaded outdoor zones with cooling mist systems.",
        "Finally, examine parent communication transparency. You should have access to live daily updates, dietary logs, and periodic face-to-face milestone conferences with your child's primary educator."
      ],
      contentAr: [
        "يُعد اختيار أول بيئة تعليمية لطفلك أحد أهم القرارات الأسرية. في بيئة الإمارات التعليمية المتطورة، يتلقى الوالدان عروضاً متنوعة، مما يتطلب معرفة المعايير الحقيقية لجودة التعليم والرعاية.",
        "أولاً، دقق في النسبة الحقيقية لعدد المعلمات والممرضات مقابل الأطفال. في حين تحدد الهيئات التنظيمية الحد الأقصى، تلتزم الحضانات المتميزة بنسب أقل بكثير (١:٣ للرضع و١:٥ للأطفال الأكبر) لضمان الأمان النفسي والمتابعة الفردية الدقيقة.",
        "ثانياً، تأكد من معايير الصحة ونقاء الهواء. في المناخ الدافئ حيث يقضي الأطفال وقتاً في الصالات المغلقة صيفاً، ابحث عن أجهزة تنقية الهواء الطبية HEPA ومواد اللعب الخشبية الطبيعية والحدائق المظللة المزودة برذاذ التبريد.",
        "أخيراً، قيّم شفافية التواصل مع الحضانة من خلال وجود تطبيق ذكي يوفر تقارير وصور يومية وجلسات استشارية دورية مع المعلمة المسؤولة."
      ],
      keyTakeaways: [
        "Always demand verified 1:3 or 1:5 teacher-to-child care ratios.",
        "Check for medical-grade HEPA filtration in all sleep and play zones.",
        "Ensure full-time licensed pediatric nurses are stationed on-site."
      ],
      keyTakeawaysAr: [
        "تأكد دائماً من نسب رعاية حقيقية لا تتجاوز ١:٣ للرضع و١:٥ للأطفال.",
        "تحقق من وجود فلاتر HEPA الطبية في جميع غرف النوم واللعب.",
        "احرص على تواجد ممرضات أطفال مرخصات بدوام كامل داخل الحرم."
      ]
    },
    {
      id: "2",
      title: "How to Settle Your Child Into Nursery Without Tears or Distress",
      titleAr: "كيف تُهيئ طفلك للحضانة بهدوء ودون دموع أو قلق انفصال",
      category: "Settling-In",
      categoryAr: "التهيئة والاستقرار",
      readTime: "4 min read",
      readTimeAr: "٤ دقائق قراءة",
      date: "Apr 2026",
      dateAr: "أبريل ٢٠٢٦",
      summary: "A gentle step-by-step roadmap for parents navigating separation anxiety, comfort anchors, and gradual drop-offs.",
      summaryAr: "خطة تدريجية للأمهات والآباء للتغلب على قلق الانفصال وبناء الثقة في الأيام الأولى للحضانة.",
      content: [
        "Separation anxiety is a completely normal, healthy milestone in early childhood development. It signifies that your child has formed a secure, loving attachment with you. However, with the right settling-in strategy, this transition can become an empowering experience.",
        "At Little Horizon, we practice a gradual two-week settling schedule. On Day 1 and 2, parents accompany their child for a short 45-minute interactive play session without separation. This allows the child's brain to register the new environment as safe because their secure base is present.",
        "By Day 4, parents transition to our dedicated parent lounge for short 30-minute intervals while the child bonds with their key teacher. Predictable, cheerful goodbyes with physical high-fives or special handshakes work significantly better than prolonged hesitant lingering.",
        "Always avoid sneaking away when your child is distracted. Trust is built when the child knows you will say goodbye and, most importantly, that you will always return when you say you will."
      ],
      contentAr: [
        "يُعد قلق الانفصال مرحلة طبيعية وصحية في تطور الطفل، ويدل على وجود ارتباط عاطفي سليم مع الوالدين. ومع ذلك، باتباع خطة تهيئة علمية، يمكن تحويل هذه التجربة إلى خطوة استقلالية مبهجة.",
        "في ليتل هورايزون، نطبق جدول تهيئة تدريجي على مدار أسبوعين. في اليومين الأول والثاني، يقضي الوالدان ٤٥ دقيقة من اللعب المشترك مع الطفل داخل الفصل، مما يمنح الطفل شعوراً فورياً بالأمان.",
        "بحلول اليوم الرابع، ينتقل الوالد إلى استراحة أولياء الأمور لفترات قصيرة (٣٠ دقيقة) بينما تتفاعل المعلمة مع الطفل. وداع سريع ومبهج مع لمسة يد خاصة يمنح الطفل طمأنينة أكبر من التردد الطويل.",
        "تجنب تماماً التسلل والمغادرة دون إعلام طفلك؛ فالثقة تُبنى عندما يعلم الطفل أنك تودعه بابتسامة وأنك ستعود لاصطحابه حتماً في الموعد المحدد."
      ],
      keyTakeaways: [
        "Adopt a gentle 2-week gradual adaptation schedule.",
        "Never sneak out—consistent honest farewells build lasting emotional trust.",
        "Bring a familiar comfort blanket or soft toy during the first week."
      ],
      keyTakeawaysAr: [
        "اتبع جدول تهيئة متدرج على مدار أسبوعين كاملين.",
        "لا تتسلل أبداً—الوداع الصادق المبتسم يبني ثقة الطفل واستقراره.",
        "احرص على إحضار دمية أو بطانية مفضلة للطفل خلال الأسبوع الأول."
      ]
    },
    {
      id: "3",
      title: "The Power of Play-Based Learning in Early Brain Architecture",
      titleAr: "قوة التعلم القائم على اللعب في بناء الروابط العصبية لدماغ الطفل",
      category: "Curriculum & Science",
      categoryAr: "المنهاج والعلوم العصبية",
      readTime: "6 min read",
      readTimeAr: "٦ دقائق قراءة",
      date: "Apr 2026",
      dateAr: "أبريل ٢٠٢٦",
      summary: "Neuroscience reveals why open-ended exploration builds stronger executive function than early rote memorization.",
      summaryAr: "ماذا تكشف أحدث أبحاث علم الأعصاب حول تفوق الاستكشاف الحسي واللعب على التلقين المبكر.",
      content: [
        "During the first five years of life, a child's brain forms over 1 million new neural connections every second—a pace never repeated again in human life. Modern neuroscience confirms that experiential, multi-sensory play is the single most powerful catalyst for synaptic formation.",
        "When a toddler stacks wooden blocks, tests water channels, or squishes natural clay, their brain is engaged in active hypothesis testing. They are not merely playing; they are acting as young scientists observing cause, effect, spatial gravity, and balance.",
        "By contrast, premature rote memorization of flashcards forces passive recall without deep semantic comprehension, often causing early cognitive fatigue. In our Reggio-inspired studios, children lead their own inquiries while trained educators scaffold literacy and mathematical concepts naturally.",
        "The result is high executive function: the ability to self-regulate, focus attention, solve novel problems, and persevere through frustration—the very skills that predict long-term academic excellence."
      ],
      contentAr: [
        "خلال السنوات الخمس الأولى، يبني دماغ الطفل أكثر من مليون رابط عصبي جديد كل ثانية، وهو معدل لا يتكرر في أي مرحلة عمرية لاحقة. وتؤكد أبحاث الأعصاب الحديثة أن اللعب الحسي متعدد المثيرات هو المحفز الأقوى لتكوين هذه الروابط.",
        "عندما يرتب الطفل المكعبات الخشبية، أو يختبر تدفق الماء، أو يشكل الطين، يقوم دماغه بتجربة فرضيات علمية حقيقية لفهم السبب والنتيجة، والجاذبية، والتوازن الفضائي.",
        "على النقيض من ذلك، فإن التلقين المبكر للبطاقات يحصر تفكير الطفل في الحفظ الآلي دون استيعاب حقيقي. في بيئتنا المستوحاة من ريجيو إميليا، يقود الطفل استكشافه بنفسه بينما توجه المعلمة المفاهيم اللغوية والرياضية بسلاسة.",
        "تُثمر هذه التجربة وظائف تنفيذية عالية في الدماغ: كالقدرة على ضبط النفس، والتركيز، وحل المشكلات، والمثابرة—وهي المهارات الأهم للنجاح الأكاديمي المستقبلي."
      ],
      keyTakeaways: [
        "Sensory exploration builds over 1 million neural connections per second.",
        "Play develops foundational executive function, focus, and grit.",
        "Open-ended materials foster higher creativity than electronic toys."
      ],
      keyTakeawaysAr: [
        "يبني الاستكشاف الحسي أكثر من مليون رابط عصبي كل ثانية في الدماغ.",
        "يطور اللعب الوظائف التنفيذية، والتركيز، والشغف بالتعلم الذاتي.",
        "المواد الطبيعية المفتوحة تنمي الإبداع بشكل يفوق الألعاب الإلكترونية بكثير."
      ]
    },
    {
      id: "4",
      title: "School Readiness: Preparing Your Toddler for UAE Primary Entrance",
      titleAr: "الجاهزية المدرسية: كيف نُعد طفلك لاجتياز اختبارات قبول المدارس في الإمارات",
      category: "School Readiness",
      categoryAr: "الجاهزية المدرسية",
      readTime: "5 min read",
      readTimeAr: "٥ دقائق قراءة",
      date: "Mar 2026",
      dateAr: "مارس ٢٠٢٦",
      summary: "The critical social, emotional, and communication benchmarks top international schools look for during preschool entry assessments.",
      summaryAr: "المعايير الاجتماعية واللغوية والسلوكية التي تركز عليها لجان القبول في المدارس الدولية المتميزة.",
      content: [
        "In the UAE, admissions to competitive British, IB, and American primary schools involve interactive assessments for Foundation Stage 1/2 or Kindergarten. Many parents assume these assessments test advanced reading or mathematics, but the reality is quite different.",
        "Admissions teams are primarily observing social-emotional maturity: Can the child follow two-step verbal instructions? Do they engage comfortably with an unfamiliar educator? How do they handle sharing toys with peers? Are they independent in personal self-care and communication?",
        "At Little Horizon, our Pre-Kindergarten curriculum systematically cultivates these capabilities through collaborative project tables, gentle structured listening circles, and confidence-building presentation times.",
        "Our graduates demonstrate 100% assessment success rates across leading UAE educational groups because they enter assessments feeling self-assured, articulate, and excited to interact."
      ],
      contentAr: [
        "في دولة الإمارات، تتطلب المدارس الدولية المرموقة تقييماً تفاعلياً للأطفال المتقدمين للمرحلة التأسيسية أو الروضة. يعتقد الكثير من الوالدين أن التقييم يركز على القراءة الصعبة، بينما الواقع يركز على المهارات السلوكية والاجتماعية.",
        "تبحث لجان القبول عن النضج العاطفي: هل يستطيع الطفل اتباع توجيهات مركبة؟ هل يتواصل بارتياح مع معلم جديد؟ كيف يتعامل مع المشاركة مع أقرانه؟ وهل يعتمد على نفسه في استخدام الحمام والتعبير عن احتياجاته؟",
        "في ليتل هورايزون، يركز برنامج الروضة التمهيدي على هذه المهارات من خلال مشاريع جماعية، وحلقات استماع منتظمة، وفرص تحدث أمام الفصل لبناء الثقة.",
        "يحقق خريجونا نسبة قبول ١٠٠٪ في كبرى المدارس لأنهم يدخلون المقابلة بشخصية متزنة وفصيحة ومحبة للمشاركة."
      ],
      keyTakeaways: [
        "Assessments evaluate social confidence and instruction following, not just academic drill.",
        "Independent toilet training and self-dressing are essential entry criteria.",
        "Bilingual communication gives children a distinct developmental edge."
      ],
      keyTakeawaysAr: [
        "تركز تقييمات المدارس على الثقة الاجتماعية واتباع التوجيهات أكثر من الحفظ.",
        "الاستقلال التام في استخدام الحمام وارتداء الملابس معيار أساسي للقبول.",
        "التواصل اللغوي الثنائي يمنح الطفل تميزاً إدراكياً واضحاً في المقابلات."
      ]
    }
  ],

  locations: [
    {
      id: "ranches",
      city: "DUBAI",
      cityAr: "دبي",
      district: "Arabian Ranches",
      districtAr: "المرابع العربية",
      name: "Arabian Ranches Main Campus",
      nameAr: "فرع المرابع العربية الرئيسي",
      address: "Villa Community Hub, Street 4, Arabian Ranches 2, Dubai",
      addressAr: "مجمع الفلل السكني، شارع ٤، المرابع العربية ٢، دبي",
      phone: "+971 4 300 45810",
      email: "ranches@littlehorizon.ae",
      googleMapsUrl: "https://maps.google.com/?q=Arabian+Ranches+Dubai",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
      operatingHours: { en: "Mon - Fri: 7:30 AM - 5:30 PM", ar: "الإثنين إلى الجمعة: ٧:٣٠ ص - ٥:٣٠ م" },
      features: [
        { en: "Expansive 1,200 sqm Shaded Botanical Garden", ar: "حديقة نباتية مظللة واسعة بمساحة ١,٢٠٠ متر مربع" },
        { en: "Temperature-Regulated Splash Water Arena", ar: "منطقة ألعاب مائية ورذاذ مكيّفة ومنعشة" },
        { en: "Dedicated Infant Sensory & Sleeping Suites", ar: "أجنحة حسية ونوم هادئة ومخصصة للرضع" },
        { en: "Valet Parent Drop-Off & Biometric Gates", ar: "خدمة صف السيارات واستلام الأطفال وبوابات بيومترية" }
      ]
    },
    {
      id: "jumeirah",
      city: "DUBAI",
      cityAr: "دبي",
      district: "Jumeirah Coastal",
      districtAr: "جميرا الساحلي",
      name: "Jumeirah Coastal Flagship Campus",
      nameAr: "فرع جميرا الساحلي الرائد",
      address: "Jumeirah Beach Road, Villa 42, Jumeirah 3, Dubai",
      addressAr: "شارع شاطئ جميرا، فيلا ٤٢، جميرا ٣، دبي",
      phone: "+971 4 300 45820",
      email: "jumeirah@littlehorizon.ae",
      googleMapsUrl: "https://maps.google.com/?q=Jumeirah+3+Dubai",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      operatingHours: { en: "Mon - Fri: 7:30 AM - 5:30 PM", ar: "الإثنين إلى الجمعة: ٧:٣٠ ص - ٥:٣٠ م" },
      features: [
        { en: "Natural European Beechwood Play Towers", ar: "أبراج لعب مصنوعة من خشب الزان الأوروبي الطبيعي" },
        { en: "On-Site Organic Demonstration Kitchen", ar: "مطبخ تعليمي عضوي لتحضير وجبات الأطفال الصحية" },
        { en: "Indoor Soft-Gym Agility Course", ar: "صالة جيم مبطنة للألعاب الحركية وتطوير الرشاقة" },
        { en: "Private Parent Lounge & Observation Glass", ar: "استراحة أولياء أمور ونوافذ مراقبة هادئة" }
      ]
    },
    {
      id: "reem",
      city: "ABU DHABI",
      cityAr: "أبوظبي",
      district: "Al Reem Island",
      districtAr: "جزيرة الريم",
      name: "Al Reem Island Capital Campus",
      nameAr: "فرع جزيرة الريم بالعاصمة أبوظبي",
      address: "Shams Tower Podium, Level 1, Al Reem Island, Abu Dhabi",
      addressAr: "منصة برج شمس، الطابق الأول، جزيرة الريم، أبوظبي",
      phone: "+971 2 400 67100",
      email: "reem@littlehorizon.ae",
      googleMapsUrl: "https://maps.google.com/?q=Al+Reem+Island+Abu+Dhabi",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      operatingHours: { en: "Mon - Fri: 7:30 AM - 5:30 PM", ar: "الإثنين إلى الجمعة: ٧:٣٠ ص - ٥:٣٠ م" },
      features: [
        { en: "Climate-Controlled Multi-Sensory Sky Atrium", ar: "بهو علوي مكيف ومتعدد المثيرات الحسية للأطفال" },
        { en: "Junior Robotics & Coding Block Studio", ar: "استوديو روبوتات مبكرة ومكعبات برمجة تفاعلية" },
        { en: "Bilingual Arabic & English Story Library", ar: "مكتبة قصص ثنائية اللغة تضم أكثر من ١,٥٠٠ كتاب" },
        { en: "24/7 Security & Direct Covered Parking Access", ar: "حراسة أمنية متواصلة ومواقف سيارات مغطاة ومريحة" }
      ]
    }
  ],

  testimonials: [
    {
      quote: "My daughter settled in within days and now runs to the door every morning with a beaming smile. The educators genuinely treat every child like their own family.",
      quoteAr: "استقرت ابنتي خلال أيام قليلة وأصبحت تركض نحو باب الحضانة كل صباح بابتسامة مشرقة. المعلمات يعاملن الأطفال كأفراد من عائلتهن بحب حقيقي.",
      author: "Hessa Al-Marzooqi",
      authorAr: "حصة المرزوقي",
      relation: "Mother of Layla (Toddler Program)",
      relationAr: "والدة ليلى (برنامج البراعم)",
      location: "Arabian Ranches Campus",
      locationAr: "فرع المرابع العربية",
      rating: 5,
      program: "Toddler Program",
      programAr: "برنامج البراعم",
      childName: "Layla",
      childAge: "2.5 Years"
    },
    {
      quote: "The 1:3 nurse ratio in the Baby Room gave my wife and me complete peace of mind when returning to corporate work. The daily video updates are pure joy.",
      quoteAr: "نسبة ممرضة لكل ٣ أطفال في جناح الرضع منحتني وزوجتي راحة بال مطلقة عند عودتنا للعمل. التحديثات اليومية المصورة عبر التطبيق تبهج يومنا.",
      author: "Marcus Vance",
      authorAr: "ماركوس فانس",
      relation: "Father of Noah (Baby Room)",
      relationAr: "والد نوح (جناح الرضع)",
      location: "Jumeirah Coastal Campus",
      locationAr: "فرع جميرا الساحلي",
      rating: 5,
      program: "Baby Room",
      programAr: "جناح الرضع",
      childName: "Noah",
      childAge: "11 Months"
    },
    {
      quote: "The Pre-K program prepared our son so well for primary school interviews. He passed his entrance assessment at a top British school without any anxiety whatsoever.",
      quoteAr: "أهّل برنامج الروضة التمهيدي ابننا بشكل رائع لمقابلات المدرسة. اجتاز تقييم القبول في إحدى أعرق المدارس البريطانية بكل ثقة ودون أي قلق.",
      author: "Fatima Al-Sayed",
      authorAr: "فاطمة السيد",
      relation: "Mother of Zaid (Pre-K)",
      relationAr: "والدة زيد (الروضة التمهيدية)",
      location: "Al Reem Island Campus",
      locationAr: "فرع جزيرة الريم",
      rating: 5,
      program: "Pre-Kindergarten",
      programAr: "الروضة التمهيدية",
      childName: "Zaid",
      childAge: "3.8 Years"
    },
    {
      quote: "The organic hot meals cooked on-site and the shaded splash pad make Little Horizon stand out miles ahead of every other nursery in Dubai.",
      quoteAr: "الوجبات العضوية الطازجة المحضرة في الحضانة ومنطقة الألعاب المائية المظللة تجعل ليتل هورايزون تتفوق بسنوات ضوئية على أي حضانة أخرى في دبي.",
      author: "Elena Rostova",
      authorAr: "إيلينا روستوفا",
      relation: "Mother of Sofia (Toddler Program)",
      relationAr: "والدة صوفيا (برنامج البراعم)",
      location: "Arabian Ranches Campus",
      locationAr: "فرع المرابع العربية",
      rating: 5,
      program: "Toddler Program",
      programAr: "برنامج البراعم",
      childName: "Sofia",
      childAge: "2 Years"
    },
    {
      quote: "Spotless hygiene, warm British and bilingual educators, and transparent communication every single day. We couldn't ask for a better foundation for our son.",
      quoteAr: "نظافة فائقة، كادر بريطاني وثنائي اللغة في غاية الود، وتواصل شفاف يومياً. لم نكن لنحلم ببيئة تأسيسية أفضل لابننا.",
      author: "Dr. Tariq Mansoor",
      authorAr: "د. طارق منصور",
      relation: "Father of Adam (Pre-K)",
      relationAr: "والد آدم (الروضة التمهيدية)",
      location: "Al Reem Island Campus",
      locationAr: "فرع جزيرة الريم",
      rating: 5,
      program: "Pre-Kindergarten",
      programAr: "الروضة التمهيدية",
      childName: "Adam",
      childAge: "3.5 Years"
    }
  ],

  faq: [
    {
      question: "What age groups do you accept across Little Horizon campuses?",
      questionAr: "ما هي الفئات العمرية المقبولة في فروع ليتل هورايزون؟",
      category: "Admissions",
      categoryAr: "القبول والتسجيل",
      answer: "We welcome infants and young children aged 6 months to 4 years old across our Baby Room (6-18 months), Toddler Program (18 months - 3 years), and Pre-Kindergarten (3 - 4 years).",
      answerAr: "نستقبل الأطفال والرضع من عمر ٦ أشهر حتى ٤ سنوات، موزعين على جناح الرضع (٦-١٨ شهراً)، برنامج البراعم (١٨ شهراً - ٣ سنوات)، والروضة التمهيدية (٣-٤ سنوات)."
    },
    {
      question: "What are your exact teacher-to-child care ratios?",
      questionAr: "ما هي نسب الرعاية المحددة لعدد المعلمات مقابل الأطفال؟",
      category: "Care & Ratios",
      categoryAr: "الرعاية والنسب",
      answer: "We maintain ultra-low ratios exceeding regulatory mandates: 1:3 in our Baby Room with dedicated registered nurses, 1:5 in our Toddler Program, and 1:6 in Pre-Kindergarten.",
      answerAr: "نلتزم بنسب رعاية استثنائية تفوق المتطلبات الرسمية: ١:٣ في جناح الرضع بإشراف ممرضات مؤهلات، و١:٥ في فصول البراعم، و١:٦ في الروضة التمهيدية."
    },
    {
      question: "What schedules do you offer for working families?",
      questionAr: "ما هي أوقات الدوام المتاحة للعائلات العاملة؟",
      category: "Schedules",
      categoryAr: "الدوام والمواعيد",
      answer: "We offer flexible attendance options: Morning Half-Day (7:30 AM - 1:00 PM), Standard Full-Day (7:30 AM - 4:00 PM), and Extended Day (7:30 AM - 5:30 PM) across 3, 4, or 5-day week packages.",
      answerAr: "نوفر جداول مرنة: نصف دوام صباحي (٧:٣٠ ص - ١:٠٠ م)، دوام كامل أساسي (٧:٣٠ ص - ٤:٠٠ م)، ودوام ممتد (٧:٣٠ ص - ٥:٣٠ م) على مدار ٣ أو ٤ أو ٥ أيام أسبوعياً."
    },
    {
      question: "Are daily organic meals included in the tuition fee?",
      questionAr: "هل الوجبات الصحية العضوية مشمولة ضمن الرسوم الدراسية؟",
      category: "Nutrition",
      categoryAr: "التغذية والصحة",
      answer: "Yes. All tuition rates include a fresh organic breakfast, hot chef-prepared lunch, and afternoon fruit & bakery snacks prepared in our nut-free on-site commercial kitchen.",
      answerAr: "نعم. تشمل كافة الرسوم وجبة إفطار عضوية طازجة، وغداء ساخن يعده طاهي الحضانة، ووجبات فواكه ومخبوزات خفيفة في مطبخنا الخالي تماماً من المكسرات."
    },
    {
      question: "How does the 2-week gentle settling-in process work?",
      questionAr: "كيف يتم تطبيق برنامج التهيئة والاستقرار التدريجي خلال أسبوعين؟",
      category: "Settling-In",
      categoryAr: "التهيئة والاستقرار",
      answer: "We believe zero distress is the foundation for learning. Parents attend short stay-and-play sessions initially, transitioning to parent-lounge stays as the child naturally builds trust with their key educator.",
      answerAr: "نؤمن بأن غياب القلق هو أساس التعلم. يحضر الوالدان في البداية جلسات لعب مشتركة قصيرة، ثم ينتقلان لاستراحة أولياء الأمور تدريجياً مع بناء الطفل لرابطة ثقة مع معلمته."
    },
    {
      question: "Do you offer sibling discounts and corporate rates?",
      questionAr: "هل توجد خصومات للإخوة أو شراكات للشركات؟",
      category: "Tuition & Fees",
      categoryAr: "الرسوم والخصومات",
      answer: "Yes. We offer a 10% tuition discount for the second enrolled child and 15% for third siblings. We also have corporate partnerships with major UAE employers.",
      answerAr: "نعم. نقدم خصماً بنسبة ١٠٪ للطفل الثاني و١٥٪ للطفل الثالث الملتحقين في نفس الوقت، بالإضافة إلى شراكات لخصومات موظفي كبرى المؤسسات بالدولة."
    },
    {
      question: "What medical and hygiene standards are maintained on campus?",
      questionAr: "ما هي المعايير الطبية وإجراءات التعقيم المتبعة بالحرم؟",
      category: "Health & Safety",
      categoryAr: "الصحة والسلامة",
      answer: "Each campus has full-time DHA/DOH licensed pediatric registered nurses, medical-grade HEPA air purifiers, hospital-grade daily sterilization, and continuous biometric access control.",
      answerAr: "يضم كل فرع ممرضات أطفال مرخصات بدوام كامل، وأجهزة تنقية هواء طبية HEPA، وتعقيم يومي عالي المستوى، وبوابات دخول بيومترية مؤمنة بالكامل."
    },
    {
      question: "Are your campuses operational during school holidays and summer?",
      questionAr: "هل تستمر الحضانة بالعمل خلال العطل المدرسية وأشهر الصيف؟",
      category: "Camps",
      categoryAr: "المخيمات والعطلات",
      answer: "Yes. We operate temperature-controlled Summer, Winter, and Spring Discovery Camps with splash games, young chef labs, and sensory robotics throughout all school break periods.",
      answerAr: "نعم. ننظم مخيمات استكشاف صيفية وشتوية وربيعية مكيفة تشمل ألعاب الرذاذ المائي، وورش الطهي الصغير، وروبوتات العلوم خلال كافة فترات العطل."
    },
    {
      question: "How do I schedule a private guided campus tour?",
      questionAr: "كيف يمكنني حجز جولة تعريفية خاصة في أحد الفروع؟",
      category: "Tours",
      categoryAr: "الجولات والزيارات",
      answer: "You can book directly via our online booking modal, contact our admissions hotline (+971 4 300 45810), or send a message via WhatsApp. Tours are conducted Monday to Friday.",
      answerAr: "يمكنك الحجز مباشرة عبر الموقع، أو الاتصال بخط القبول (+971 4 300 45810)، أو إرسال رسالة واتساب. تُقام الجولات من الإثنين إلى الجمعة."
    },
    {
      question: "What documents are required to complete enrollment?",
      questionAr: "ما هي المستندات المطلوبة لاستكمال إجراءات التسجيل النهائي؟",
      category: "Admissions",
      categoryAr: "القبول والتسجيل",
      answer: "Requirements include: Child's Passport & Emirates ID copies, Parent Passport & Emirates ID copies, Child's Birth Certificate, and updated Immunization/Vaccination Records.",
      answerAr: "تشمل المستندات: صورة جواز سفر وبطاقة الهوية الإماراتية للطفل، وصور هويات الوالدين، وشهادة ميلاد الطفل، وسجل التطعيمات واللقاحات المحدث."
    }
  ]
};

export const LH_DATA = LITTLE_HORIZON_DATA;
