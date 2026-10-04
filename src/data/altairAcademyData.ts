export interface SchoolStage {
  id: string;
  num: string;
  title: string;
  titleAr: string;
  yearRange: string;
  yearRangeAr: string;
  ageRange: string;
  ageRangeAr: string;
  curriculum: string;
  curriculumAr: string;
  learningFocus: string;
  learningFocusAr: string;
  enrichment: { en: string; ar: string }[];
  priceRange: string;
  priceRangeAr: string;
  baseAnnualPrice: number;
  overview: string;
  overviewAr: string;
  coreSubjects: { en: string; ar: string }[];
  facultyRatio: string;
  facultyRatioAr: string;
}

export interface AcademicPillar {
  id: string;
  num: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  highlights: { en: string; ar: string }[];
  icon: string;
}

export interface JourneyStep {
  step: string;
  stepAr: string;
  title: string;
  titleAr: string;
  desc: string;
  descAr: string;
  duration: string;
  durationAr: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  desc: string;
  descAr: string;
  metrics: string;
  metricsAr: string;
  image: string;
}

export interface LeadershipMember {
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  credentials: string;
  credentialsAr: string;
  bio: string;
  bioAr: string;
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
  studentTrack: string;
  studentTrackAr: string;
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

export const ALTAIR_ACADEMY_DATA = {
  brand: "ALTAIR ACADEMY",
  brandAr: "أكاديمية ألتير",
  tagline: "Educating Tomorrow's Leaders.",
  taglineAr: "نُعد قادة الغد للمستقبل العالمي.",
  positioning: "Premium UAE K–12 Private School",
  positioningAr: "مدرسة خاصة متميزة من الروضة حتى الثاني عشر في الإمارات",
  phone: "+971 4 500 89100",
  whatsapp: "https://wa.me/9715050089100",
  whatsappNumber: "+971 50 500 89100",
  email: "admissions@altairacademy.ae",

  trustLogos: [
    { name: "AL BARSHA", tag: "Dubai Flagship Campus", tagAr: "فرع البرشاء الرئيسي بدبي" },
    { name: "KHALIFA CITY", tag: "Abu Dhabi Capital Campus", tagAr: "فرع مدينة خليفة بأبوظبي" },
    { name: "IB & A-LEVEL TRACK", tag: "Dual Diploma Pathways", tagAr: "مسارات دبلوم مزدوجة معتمدة" },
    { name: "PARENT COUNCIL", tag: "Active Family Community", tagAr: "مجلس أولياء الأمور المترابط" }
  ],

  stages: [
    {
      id: "foundation",
      num: "01",
      title: "Foundation Stage (Early Years)",
      titleAr: "مرحلة التأسيس (الطفولة المبكرة)",
      yearRange: "FS1 – FS2",
      yearRangeAr: "مرحلة الروضة الأولى والثانية (FS1 - FS2)",
      ageRange: "Ages 3 – 5 Years",
      ageRangeAr: "الأعمار ٣ إلى ٥ سنوات",
      curriculum: "British EYFS & Reggio-Inspired Inquiry",
      curriculumAr: "المنهاج البريطاني EYFS والتعلم الاستقصائي",
      learningFocus: "Bilingual Phonics, Sensory STEM Exploration, Early Numeracy & Emotional Agility",
      learningFocusAr: "الوعي الصوتي الثنائي، استكشاف STEM الحسي، الحساب المبكر والمرونة العاطفية",
      enrichment: [
        { en: "Bilingual Arabic & French Immersion", ar: "انغماس لغوي بالعربية والفرنسية" },
        { en: "Shaded Splash-Pad & Motor Agility Soft Gym", ar: "منطقة ألعاب مائية وصالة جيم حركي مظللة" },
        { en: "Junior Coding & Tactile Robotics Blocks", ar: "مكعبات البرمجة التفاعلية والروبوتات للأطفال" },
        { en: "Orff Percussion & Acoustic Movement", ar: "إيقاعات أورف الموسيقية والحركة الإيقاعية" }
      ],
      priceRange: "AED 44,000 – 48,000 / year",
      priceRangeAr: "٤٤,٠٠٠ - ٤٨,٠٠٠ د.إ / سنوياً",
      baseAnnualPrice: 46000,
      facultyRatio: "1:6 Care Ratio",
      facultyRatioAr: "نسبة رعاية ١:٦",
      overview: "A warm, sensory-rich sanctuary where young learners cultivate foundational communication fluency, curiosity, and early numerical confidence in purpose-built suites.",
      overviewAr: "بيئة تعليمية دافئة وغنية بالمثيرات الحسية يكتسب فيها الأطفال الصغار الطلاقة اللغوية، والشغف بالاستكشاف، والثقة الرياضية في أجنحة مجهزة خصيصاً.",
      coreSubjects: [
        { en: "Early English Literacy & Synthetic Phonics", ar: "القراءة والكتابة والوعي الصوتي التأسيسي" },
        { en: "Arabic Language & Islamic / Cultural Appreciation", ar: "اللغة العربية والتربية الإسلامية والثقافة" },
        { en: "Spatial Mathematics & Pattern Logic", ar: "الرياضيات المكانية ومنطق الأنماط" },
        { en: "Nature Exploration & Sensory Botany", ar: "استكشاف الطبيعة والعلوم النباتية الحسية" }
      ]
    },
    {
      id: "primary",
      num: "02",
      title: "Primary School",
      titleAr: "المرحلة الابتدائية",
      yearRange: "Years 1 – 6",
      yearRangeAr: "السنوات ١ إلى ٦ (الصف الأول إلى الخامس)",
      ageRange: "Ages 5 – 11 Years",
      ageRangeAr: "الأعمار ٥ إلى ١١ عاماً",
      curriculum: "Enriched National Curriculum for England & Singapore Math",
      curriculumAr: "المنهاج الوطني الإنجليزي المعزز ورياضيات سنغافورة",
      learningFocus: "Conceptual Mathematics, Scientific Inquiry, English Literature & Digital Competence",
      learningFocusAr: "الرياضيات المفاهيمية، الاستقصاء العلمي، الأدب الإنجليزي والكفاءة الرقمية",
      enrichment: [
        { en: "Competitive Swimming Academy & FIFA Turf Football", ar: "أكاديمية السباحة التنافسية وكرة القدم في ملاعب FIFA" },
        { en: "Symphony Orchestra, Strings & Piano Ensemble", ar: "الأوركسترا السيمفونية وعزف البيانو والوتريات" },
        { en: "Debate Society & Model United Nations Jr.", ar: "جمعية المناظرات ونموذج الأمم المتحدة للناشئين" },
        { en: "Environmental Eco-Council & Botanical Hydroponics", ar: "المجلس البيئي ومختبر الزراعة المائية المتقدم" }
      ],
      priceRange: "AED 56,000 – 66,000 / year",
      priceRangeAr: "٥٦,٠٠٠ - ٦٦,٠٠٠ د.إ / سنوياً",
      baseAnnualPrice: 61000,
      facultyRatio: "1:8 Educator Ratio",
      facultyRatioAr: "نسبة معلم لكل ٨ طلاب",
      overview: "Fostering analytical discipline, intellectual resilience, and leadership through rigorous thematic projects, experimental science laboratories, and creative arts.",
      overviewAr: "تنمية الانضباط التحليلي، والمرونة الفكرية، والمهارات القيادية عبر مشاريع استكشافية متقدمة ومختبرات علمية تجريبية وفنون إبداعية.",
      coreSubjects: [
        { en: "Advanced Mathematics & Problem Solving", ar: "الرياضيات المتقدمة وحل المشكلات المعقدة" },
        { en: "English Language, Grammar & Literature", ar: "اللغة الإنجليزية وقواعدها والأدب العالمي" },
        { en: "Experimental Physics, Chemistry & Biology Labs", ar: "مختبرات الفيزياء والكيمياء والأحياء التطبيقية" },
        { en: "Arabic A/B, Islamic Studies & UAE Social Studies", ar: "اللغة العربية والتربية الإسلامية والدراسات الاجتماعية" }
      ]
    },
    {
      id: "secondary",
      num: "03",
      title: "Secondary School (Middle & Upper)",
      titleAr: "المرحلة الثانوية المتوسطة (IGCSE)",
      yearRange: "Years 7 – 11",
      yearRangeAr: "السنوات ٧ إلى ١١ (الصف السادس إلى العاشر)",
      ageRange: "Ages 11 – 16 Years",
      ageRangeAr: "الأعمار ١١ إلى ١٦ عاماً",
      curriculum: "Cambridge & Edexcel International GCSE (IGCSE)",
      curriculumAr: "منهاج كامبريدج وإدكسل الدولي IGCSE",
      learningFocus: "Specialized Sciences, Advanced Computing & AI, Global Perspectives & Rhetoric",
      learningFocusAr: "العلوم التخصصية، الحوسبة المتقدمة والذكاء الاصطناعي، والرؤى العالمية والبلاغة",
      enrichment: [
        { en: "F1 in Schools Engineering & CAD Wind Tunnel Lab", ar: "مشروع فورمولا ١ المدرسي ومختبر نفق الرياح للتصميم CAD" },
        { en: "Duke of Edinburgh's International Gold Award", ar: "جائزة دوق إدنبرة الدولية الذهبية للريادة" },
        { en: "High School Mock Trial & Legal Moot Court", ar: "المحكمة الصورية ونوادي القانون والمحاماة" },
        { en: "VEX Robotics World Championship Delegation", ar: "فريق الروبوتات المنافس ببطولة العالم VEX" }
      ],
      priceRange: "AED 72,000 – 82,000 / year",
      priceRangeAr: "٧٢,٠٠٠ - ٨٢,٠٠٠ د.إ / سنوياً",
      baseAnnualPrice: 77000,
      facultyRatio: "1:7 Faculty Ratio",
      facultyRatioAr: "نسبة كادر تعليمي ١:٧",
      overview: "Rigorous preparation for IGCSE board examinations combined with personalized career pathways, global student summits, and enterprise incubator modules.",
      overviewAr: "تأهيل أكاديمي صارم لامتحانات IGCSE الدولية مع مسارات مهنية مخصصة ومؤتمرات طلابية دولية وحاضنة مشاريع ريادية.",
      coreSubjects: [
        { en: "Pure Mathematics, Further Mechanics & Statistics", ar: "الرياضيات البحتة والميكانيكا والإحصاء" },
        { en: "Triple Sciences: Biology, Chemistry, Physics", ar: "العلوم الثلاثية: الأحياء، الكيمياء، الفيزياء" },
        { en: "Computer Science, Python & Neural AI Systems", ar: "علوم الحاسوب ولغة بايثون وأنظمة الذكاء الاصطناعي" },
        { en: "Economics, Business Studies & Global History", ar: "الاقتصاد، دراسات الأعمال والتاريخ العالمي" }
      ]
    },
    {
      id: "sixth-form",
      num: "04",
      title: "Sixth Form (Pre-University College)",
      titleAr: "المرحلة الجامعية التحضيرية (السكث فورم)",
      yearRange: "Years 12 – 13",
      yearRangeAr: "السنوات ١٢ إلى ١٣ (الصف ١١ و١٢)",
      ageRange: "Ages 16 – 18 Years",
      ageRangeAr: "الأعمار ١٦ إلى ١٨ عاماً",
      curriculum: "International Baccalaureate (IB) Diploma & Cambridge A-Levels",
      curriculumAr: "دبلوما البكالوريا الدولية (IB) ومستويات كامبريدج A-Levels",
      learningFocus: "University Dissertation Research, Theory of Knowledge, Advanced Calculus & Oxbridge Prep",
      learningFocusAr: "بحوث الأطروحة الجامعية، نظرية المعرفة TOK، التفاضل والتكامل، والتأهيل لأكسفورد وهارفارد",
      enrichment: [
        { en: "Dedicated Oxbridge & Ivy League Admissions Fellowship", ar: "برنامج زمالة التأهيل والقبول لجامعات أكسفورد وآيفي ليج" },
        { en: "Clinical Medicine & Engineering Shadowing Internships", ar: "تدريب عملي طبي وهندسي في كبرى مستشفيات وشركات الدولة" },
        { en: "Extended Essay (EE) 4,000-Word Academic Publication", ar: "نشر بحث الأطروحة الأكاديمية الموسعة (٤,٠٠٠ كلمة)" },
        { en: "Harvard Model Congress & International Diplomatic Delegations", ar: "مؤتمر نموذج هارفارد والبعثات الدبلوماسية الدولية" }
      ],
      priceRange: "AED 86,000 – 96,000 / year",
      priceRangeAr: "٨٦,٠٠٠ - ٩٦,٠٠٠ د.إ / سنوياً",
      baseAnnualPrice: 91000,
      facultyRatio: "1:5 Master Scholar Ratio",
      facultyRatioAr: "نسبة أستاذ باحث لكل ٥ طلاب",
      overview: "An elite pre-university environment delivering unmatched university placement results across Russell Group, Ivy League, and top global tier-1 medical and law faculties.",
      overviewAr: "بيئة جامعية نخبوية تحقق أعلى معدلات القبول في جامعات مجموعة راسل، ورابطة اللبلاب (Ivy League)، وكليات الطب والقانون المرموقة عالمياً.",
      coreSubjects: [
        { en: "IB Higher Level / A-Level Mathematics & Physics", ar: "الرياضيات والفيزياء بالمستوى العالي (HL/A-Level)" },
        { en: "Organic Chemistry, Biochemistry & Cellular Biology", ar: "الكيمياء العضوية والكيمياء الحيوية والأحياء الخلوية" },
        { en: "Macroeconomics, Global Politics & International Law", ar: "الاقتصاد الكلي، السياسة الدولية والقانون الدولي" },
        { en: "Theory of Knowledge (TOK) & Academic Epistemology", ar: "نظرية المعرفة (TOK) وفلسفة العلوم الإنسانية" }
      ]
    }
  ],

  academicPillars: [
    {
      id: "stem-ai",
      num: "01",
      title: "STEM & Applied AI Innovation",
      titleAr: "العلوم المتقدمة والابتكار في الذكاء الاصطناعي",
      description: "Equipping scholars with industry-grade software, CAD design labs, quantum machine learning simulators, and robotics engineering from Grade 1 through Grade 12.",
      descriptionAr: "تزويد الطلاب بمختبرات برمجة احترافية، وتصميم CAD، ومحاكيات الذكاء الاصطناعي، وهندسة الروبوتات من الصف الأول حتى الثاني عشر.",
      highlights: [
        { en: "Dedicated AI & Quantum Computing Sandbox", ar: "مختبر مخصص للذكاء الاصطناعي والحوسبة الكمية" },
        { en: "Silicon-Valley Grade 3D Rapid Prototyping Lab", ar: "مختبر نمذجة ثلاثية الأبعاد متطور بمواصفات سيليكون فالي" },
        { en: "Python, PyTorch & Autonomous Systems Curriculum", ar: "منهاج لغة بايثون ومكتبات التعلم الآلي والأنظمة الذاتية" }
      ],
      icon: "cpu"
    },
    {
      id: "humanities-rhetoric",
      num: "02",
      title: "Humanities, Law & Global Rhetoric",
      titleAr: "العلوم الإنسانية والقانون والبلاغة العالمية",
      description: "Cultivating persuasive public speakers, critical philosophers, and ethical diplomats through rigorous Socratic seminars, Model UN summits, and constitutional debate.",
      descriptionAr: "صقل مهارات الخطابة والإقناع والفلسفة النقدية والدبلوماسية الأخلاقية عبر الحلقات السقراطية ومؤتمرات الأمم المتحدة والمناظرات القانونية.",
      highlights: [
        { en: "Full-Scale Judicial Moot Court & Mock Trial Chamber", ar: "قاعة محكمة صورية كاملة لتدريب المحاماة والمرافعات" },
        { en: "Bespoke Philosophy & Theory of Knowledge Seminars", ar: "ندوات متخصصة في الفلسفة ونظرية المعرفة الإنسانية" },
        { en: "Global Economics & World Affairs Publication Hub", ar: "مركز أبحاث ونشر الاقتصاد العالمي والعلاقات الدولية" }
      ],
      icon: "book"
    },
    {
      id: "performing-arts",
      num: "03",
      title: "Performing Arts & Symphony Orchestra",
      titleAr: "الفنون الأدائية والأوركسترا السيمفونية",
      description: "Inspiring artistic mastery through our 800-seat professional theater auditorium, Steinway grand pianos, acoustic recording studios, and conservatory-level vocal coaching.",
      descriptionAr: "إلهام الإتقان الفني من خلال مسرح احترافي يتسع لـ ٨٠٠ مقعد، وبيانو شتاينواي، واستوديوهات تسجيل صوتي، وتدريب أوبرالي وموسيقي رفيع.",
      highlights: [
        { en: "800-Seat Proscenium Arch Performing Arts Center", ar: "مركز فنون أدائية ومسرح متكامل يتسع لـ ٨٠٠ مقعد" },
        { en: "Royal Conservatory Affiliated Music Academy", ar: "أكاديمية موسيقية تابعة للمعهد الملكي للموسيقى" },
        { en: "Black Box Experimental Drama Studio", ar: "استوديو الصندوق الأسود (Black Box) للدراما التجريبية" }
      ],
      icon: "music"
    },
    {
      id: "athletics-olympic",
      num: "04",
      title: "Olympic Athletics & Competitive Sports",
      titleAr: "الرياضة الأولمبية والأكاديميات التنافسية",
      description: "Building physical endurance, sportsmanship, and grit across our 50m Olympic swimming pool, FIFA-grade turf stadium, and multi-court air-conditioned sports arena.",
      descriptionAr: "بناء اللياقة البدنية والروح الرياضية والعزيمة عبر مسبح أولمبي بطول ٥٠ متراً، وملعب عشب معتمد من FIFA، ومجمع صالات رياضية مغطاة ومكيفة.",
      highlights: [
        { en: "8-Lane 50-Meter Olympic Regulated Swimming Complex", ar: "مجمع سباحة أولمبي ٨ حارات بطول ٥٠ متراً" },
        { en: "Full-Size FIFA Certified Football & Rugby Stadium", ar: "استاد كرة قدم ورغبي كامل معتمد دولياً من FIFA" },
        { en: "Strength & Conditioning Sports Science Lab", ar: "مختبر علوم الرياضة والتأهيل واللياقة البدنية المتخصص" }
      ],
      icon: "trophy"
    }
  ],

  journeySteps: [
    {
      step: "01",
      stepAr: "٠١",
      title: "Online Inquiry & Registration",
      titleAr: "التسجيل وتقديم الطلب الإلكتروني",
      desc: "Submit academic transcripts, passport/EID records, and recent school reports via our secure admissions portal.",
      descAr: "تقديم السجلات الأكاديمية السابقة وجوازات السفر وبطاقات الهوية عبر بوابة القبول الإلكترونية المؤمنة.",
      duration: "10 Minutes",
      durationAr: "١٠ دقائق"
    },
    {
      step: "02",
      stepAr: "٠٢",
      title: "Campus Discovery Walkthrough",
      titleAr: "الجولة التعريفية الخاصة بالحرم",
      desc: "Private guided tour with our Academic Dean, visiting state-of-the-art laboratories, sports academies, and arts studios.",
      descAr: "جولة خاصة برفقة عميد الكلية الأكاديمي للاطلاع على المختبرات والمجمع الرياضي واستوديوهات الفنون.",
      duration: "45 Minutes",
      durationAr: "٤٥ دقيقة"
    },
    {
      step: "03",
      stepAr: "٠٣",
      title: "Interactive Scholar Assessment",
      titleAr: "التقييم التفاعلي واختبار القدرات",
      desc: "Age-appropriate CAT4 cognitive diagnostic, English/Math evaluation, and pastoral interview assessing individual potential.",
      descAr: "اختبار تشخيصي للقدرات المعرفية CAT4، وتقييم اللغة والرياضيات، ومقابلة تربوية لتقييم إمكانات الطالب.",
      duration: "60-90 Minutes",
      durationAr: "٦٠-٩٠ دقيقة"
    },
    {
      step: "04",
      stepAr: "٠٤",
      title: "Admissions Offer & Seat Allocation",
      titleAr: "صدور خطاب القبول وتخصيص المقعد",
      desc: "Formal Letter of Offer issued within 48 hours detailing academic track placement, house assignment, and orientation schedule.",
      descAr: "إصدار خطاب القبول الرسمي خلال ٤٨ ساعة موضحاً المسار الأكاديمي والبيت المدرسي وجدول التهيئة.",
      duration: "Within 48 Hours",
      durationAr: "خلال ٤٨ ساعة"
    },
    {
      step: "05",
      stepAr: "٠٥",
      title: "Welcome Orientation & House Induction",
      titleAr: "اليوم التعريفي والانضمام للبيوت المدرسية",
      desc: "Scholars meet their House Masters, receive IT devices and uniforms, and integrate seamlessly into our supportive student community.",
      descAr: "الالتقاء بمسؤولي البيوت المدرسية واستلام الأجهزة والزي المدرسي والاندماج في المجتمع الطلابي.",
      duration: "Orientation Day",
      durationAr: "يوم التهيئة"
    }
  ],

  facilities: [
    {
      id: "pool",
      title: "50m Olympic Regulated Aquatics Center",
      titleAr: "مجمع السباحة الأولمبي بطول ٥٠ متراً",
      category: "Olympic Athletics",
      categoryAr: "الرياضة الأولمبية",
      desc: "Temperature-controlled 8-lane racing pool with digital Omega timing touchpads and high-diving boards.",
      descAr: "مسبح سباق مكيف ومتحكم بحرارته ٨ حارات مع لوحات توقيت أوميغا الرقمية ومنصات قفز مائية.",
      metrics: "50m • 8 Lanes • Omega Timing",
      metricsAr: "٥٠ متراً • ٨ حارات • توقيت أوميغا",
      image: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "theater",
      title: "800-Seat Proscenium Performing Arts Auditorium",
      titleAr: "مسرح الفنون الأدائية بسعة ٨٠٠ مقعد",
      category: "Creative Arts",
      categoryAr: "الفنون الإبداعية",
      desc: "Acoustically engineered proscenium theater featuring motorized fly towers, digital mixing consoles, and Steinway grand pianos.",
      descAr: "مسرح مدرج بهندسة صوتية متطورة مع أبراج إضاءة متحركة وأجهزة مزج صوتية وبيانو شتاينواي الفاخر.",
      metrics: "800 Seats • Dolby Atmos Audio",
      metricsAr: "٨٠٠ مقعد • نظام صوت دولبي أتموس",
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "stem-hub",
      title: "Advanced Quantum & AI Robotics Sandbox",
      titleAr: "مختبر الروبوتات والذكاء الاصطناعي المتقدم",
      category: "STEM & Tech",
      categoryAr: "العلوم والتكنولوجيا",
      desc: "Multi-disciplinary engineering hub with CNC milling, laser cutters, drone testing arenas, and Nvidia GPU AI training nodes.",
      descAr: "مجمع هندسي متكامل يضم آلات CNC، وقواطع ليزر، وحلبات اختبار الطائرات بدون طيار، ووحدات تدريب Nvidia للذكاء الاصطناعي.",
      metrics: "32 CAD Workstations • 12 3D Printers",
      metricsAr: "٣٢ محطة عمل CAD • ١٢ طابعة ثلاثية الأبعاد",
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "library",
      title: "3-Tier Bilingual Millennium Library",
      titleAr: "مكتبة الألفية ثنائية اللغة المكونة من ٣ طوابق",
      category: "Academic Research",
      categoryAr: "البحث الأكاديمي",
      desc: "Over 45,000 physical volumes, private silent research carrels, JSTOR database terminals, and panoramic study balconies.",
      descAr: "تضم أكثر من ٤٥,٠٠٠ كتاب مطبوع، وغرف بحث صامتة خاصة، واشتراكات بقواعد بيانات JSTOR وشرفات دراسية بانورامية.",
      metrics: "45,000+ Volumes • JSTOR Access",
      metricsAr: "+٤٥,٠٠٠ كتاب • اشتراك بقواعد JSTOR",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80"
    }
  ],

  caseStudy: {
    client: "Sara Al Nuaimi (Class of 2025)",
    clientAr: "سارة النعيمي (دفعة ٢٠٢٥)",
    scenario: "Admitted to the University of Oxford (BA Jurisprudence / Law) with Full Academic Scholarship",
    scenarioAr: "تم قبولها بكلية الحقوق بجامعة أكسفورد (BA Jurisprudence) بمنحة أكاديمية كاملة",
    challenge: "Aiming for hyper-competitive entry to Oxford Law while balancing rigorous IB Higher Level mathematics and physics with high-school legal moot court commitments.",
    challengeAr: "السعي لتحقيق قبول تنافسي فائق بكلية الحقوق بأكسفورد مع الموازنة بين متطلبات البكالوريا الدولية الصعبة والمشاركات في المناظرات القانونية.",
    before: "Predicted 41 points on standard track; required elite Oxbridge entrance exam (LNAT) coaching, interview simulation, and legal research mentorship.",
    beforeAr: "معدل متوقع ٤١ نقطة، وكانت بحاجة لتدريب متخصص على اختبار LNAT ومحاكاة المقابلات الشخصية الصعبة في أكسفورد.",
    after: "Achieved an extraordinary 44/45 in her IB Diploma, captained Altair's Moot Court team to GCC victory, and secured a 100% scholarship at St John's College, Oxford.",
    afterAr: "حققت معدل ٤٤ / ٤٥ في البكالوريا الدولية، وقادت فريق ألتير للمحكمة الصورية للفوز ببطولة الخليج، ونالت منحة كاملة بكلية سانت جونز بجامعة أكسفورد.",
    metrics: [
      { value: "44 / 45", valueAr: "٤٤ / ٤٥", label: "Final IB Diploma Score", labelAr: "معدل البكالوريا الدولية النهائي" },
      { value: "Top 1%", valueAr: "أعلى ١٪", label: "Global LNAT Entrance Exam", labelAr: "في اختبار القبول العالمي LNAT" },
      { value: "100%", valueAr: "١٠٠٪", label: "Full Oxford Scholarship", labelAr: "منحة دراسية كاملة بأكسفورد" }
    ]
  },

  whyAltair: [
    {
      title: "Dual British & IB Accreditation",
      titleAr: "اعتماد مزدوج للمنهاج البريطاني والبكالوريا الدولية",
      desc: "Flexible academic pathways allowing scholars to choose between IGCSE / A-Levels or the full International Baccalaureate (IB) Diploma.",
      descAr: "مسارات أكاديمية مرنة تتيح للطلاب الاختيار بين مستويات A-Levels البريطانية أو دبلوم البكالوريا الدولية (IB) بالكامل.",
      icon: "award"
    },
    {
      title: "Unmatched University Placements",
      titleAr: "سجل قبول جامعي استثنائي عالمياً",
      desc: "96% of graduates gain admission to their top-choice university across Oxbridge, Ivy League, Russell Group, and top European medical faculties.",
      descAr: "٩٦٪ من خريجينا يلتحقون بخيارهم الجامعي الأول في أكسفورد وكامبريدج ورابطة اللبلاب الأمريكية وكليات الطب الأوروبية.",
      icon: "graduation-cap"
    },
    {
      title: "Elite Faculty & 1:8 Ratio",
      titleAr: "كادر تدريسي عالمي ونسبة ١:٨",
      desc: "Over 85% of educators hold Master's or PhD credentials from UK, US, and world-renowned teacher training institutes.",
      descAr: "أكثر من ٨٥٪ من المعلمين يحملون درجات الماجستير والدكتوراه من كبرى الجامعات البريطانية والأمريكية المرموقة.",
      icon: "users"
    },
    {
      title: "Championship Olympic Athletics",
      titleAr: "مرافق رياضية أولمبية فائزة بالبطولات",
      desc: "50m Olympic pool, FIFA turf stadium, professional coaches, and full participation in DASSA & international school leagues.",
      descAr: "مسبح أولمبي ٥٠ متراً، واستاد معتمد من FIFA، ومدربون محترفون ومشاركات مستمرة في بطولات DASSA والبطولات الدولية.",
      icon: "trophy"
    },
    {
      title: "Applied AI & Innovation Labs",
      titleAr: "مختبرات الذكاء الاصطناعي والابتكار التطبيقي",
      desc: "Cutting-edge coding studios, robotics championships, CAD 3D prototyping, and enterprise incubator funding for student startups.",
      descAr: "استوديوهات برمجة متقدمة، ومشاركات ببطولات الروبوتات، وتصميم ثلاثي الأبعاد وحاضنة أعمال لدعم مشاريع الطلاب الناشئة.",
      icon: "cpu"
    },
    {
      title: "Pastoral Care & Well-Being Hub",
      titleAr: "منظومة رعاية تربوية وصحة نفسية متكاملة",
      desc: "Full-time licensed psychologists, medical doctors, House Masters, and mindfulness spaces ensuring every child thrives emotionally.",
      descAr: "أخصائيون نفسيون وأطباء مرخصون ومسؤولو بيوت طلابية لضمان النمو النفسي والوجداني السليم لكل طالب.",
      icon: "heart"
    }
  ],

  leadership: [
    {
      name: "Dr. Alistair Montgomery",
      nameAr: "د. أليستير مونتغمري",
      role: "Executive Headmaster & Director of Schools",
      roleAr: "المدير التنفيذي العام للمدارس",
      credentials: "PhD Educational Leadership (University of Cambridge, 25+ Yrs Exp)",
      credentialsAr: "دكتوراه في القيادة التربوية، جامعة كامبريدج (أكثر من ٢٥ عاماً خبرة)",
      bio: "Former Headmaster of leading British boarding schools who has spearheaded educational excellence in the UAE for over a decade.",
      bioAr: "مدير سابق لكبرى المدارس الداخلية البريطانية قاد مسيرة التميز التعليمي في دولة الإمارات لأكثر من عقد كامل.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Fatima Al-Hosani",
      nameAr: "د. فاطمة الحوسني",
      role: "Dean of Academic Affairs & Arabic Excellence",
      roleAr: "عميدة الشؤون الأكاديمية والتميز باللغة العربية",
      credentials: "PhD Comparative Linguistics (Oxford / UAEU)",
      credentialsAr: "دكتوراه في اللغويات المقارنة، جامعة أكسفورد وجامعة الإمارات",
      bio: "Pioneer in bilingual cognitive immersion, blending rigorous national identity curricula with international IB academic rigor.",
      bioAr: "رائدة في برامج الانغماس اللغوي الثنائي، تجمع بين ترسيخ الهوية الوطنية ومناهج البكالوريا الدولية المتقدمة.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Edward Vance, FRSA",
      nameAr: "إدوارد فانس",
      role: "Head of Sixth Form & University Counseling",
      roleAr: "رئيس مرحلة السكث فورم والتوجيه الجامعي",
      credentials: "MA (Oxon), Fellow of Royal Society of Arts",
      credentialsAr: "ماجستير من جامعة أكسفورد، زميل الجمعية الملكية للفنون",
      bio: "Admissions advisor who has guided over 1,200 scholars into Oxford, Cambridge, Harvard, MIT, and Stanford programs.",
      bioAr: "مستشار قبول أكاديمي أشرف على توجيه وقبول أكثر من ١,٢٠٠ طالب في جامعات أكسفورد، كامبريدج، هارفارد، وستانفورد.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Victoria Sinclair",
      nameAr: "فيكتوريا سنكلير",
      role: "Director of Olympic Athletics & Co-Curricular",
      roleAr: "مديرة الأكاديميات الرياضية الأولمبية والأنشطة",
      credentials: "Former Olympic Swimmer, MSc Sports Science",
      credentialsAr: "سباحة أولمبية سابقة، ماجستير في علوم الرياضة",
      bio: "Leads our competitive sports academies, high-performance athletic coaching, and student physical health initiatives.",
      bioAr: "تشرف على الأكاديميات الرياضية التنافسية، وتدريب الأداء العالي، ومبادرات اللياقة والصحة البدنية للطلاب.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
    }
  ],

  insights: [
    {
      id: "1",
      title: "IB Diploma vs. A-Levels: Which Pathway is Best for Your Child?",
      titleAr: "المقارنة بين البكالوريا الدولية (IB) ومستويات A-Levels: أي المسارين هو الأنسب لطفلك؟",
      category: "Academic Pathways",
      categoryAr: "المسارات الأكاديمية",
      readTime: "6 min read",
      readTimeAr: "٦ دقائق قراءة",
      date: "May 2026",
      dateAr: "مايو ٢٠٢٦",
      summary: "A definitive guide to curricular differences, university recognition, assessment formats, and matching your child's learning profile.",
      summaryAr: "دليل شامل يوضح الفروق الجوهرية والاعتراف الجامعي وطبيعة التقييمات لاختيار المسار الأكاديمي الأمثل.",
      content: [
        "Choosing between the International Baccalaureate (IB) Diploma Program and Cambridge A-Levels is one of the most significant strategic decisions families make in Year 11. Both qualifications represent gold standards in global secondary education, but they suit distinct learning temperaments.",
        "The IB Diploma is an all-around, holistic curriculum requiring six subjects across sciences, languages, mathematics, and humanities, combined with the Theory of Knowledge (TOK) course, Creativity/Activity/Service (CAS), and a 4,000-word Extended Essay. It is ideal for intellectually curious students who excel across multiple disciplines and thrive on critical research.",
        "A-Levels, on the other hand, offer deep specialization, allowing students to focus intensively on 3 or 4 subjects directly related to their intended university degree (e.g., Mathematics, Further Math, and Physics for Engineering). It is particularly effective for students with clear, focused vocational aspirations.",
        "At Altair Academy, our dual-track structure ensures students receive expert diagnostic counseling in Year 10 to select the curriculum track that maximizes their academic strengths and university admissions advantages."
      ],
      contentAr: [
        "يُعد الاختيار بين برنامج دبلوم البكالوريا الدولية (IB) ومستويات كامبريدج A-Levels أحد أهم القرارات التعليمية الاستراتيجية في الصف العاشر. يمثل كلا المسارين المعيار الذهبي للتعليم الثانوي عالمياً، لكنهما يناسبان شخصيات دراسية مختلفة.",
        "يتميز برنامج البكالوريا الدولية (IB) بالشمولية والتكامل؛ حيث يدرس الطالب ٦ مواد متنوعة بين العلوم واللغات والرياضيات والإنسانيات، بالإضافة لمساق نظرية المعرفة (TOK)، ومشاريع الإبداع والخدمة المجتمعية (CAS)، وبحث الأطروحة الموسعة (٤,٠٠٠ كلمة). إنه مسار مثالي للطلاب متعددي الاهتمامات الذين يبرعون في البحث والتحليل المتكامل.",
        "في المقابل، يركز نظام A-Levels على التخصص المعمق في ٣ أو ٤ مواد ترتبط مباشرة بالتخصص الجامعي المستهدف (مثل الرياضيات المتقدمة والفيزياء للهندسة). وهو ممتاز للطلاب ذوي الأهداف الأكاديمية المحددة بدقة.",
        "في مدرسة ألتير، تتيح بنيتنا التعليمية المزدوجة جلسات استشارية تشخيصية مسبقة لمساعدة كل طالب على اختيار المسار الذي يحقق له أعلى درجات التفوق والقبول الجامعي."
      ],
      keyTakeaways: [
        "IB develops multi-disciplinary breadth, research methodology, and critical epistemology.",
        "A-Levels provide deep subject specialization suited for defined university degrees.",
        "Top global universities (Ivy League, Oxbridge) highly value both qualifications."
      ],
      keyTakeawaysAr: [
        "تنمي البكالوريا الدولية الشمولية المعرفية ومنهجية البحث والتفكير النقدي.",
        "توفر مستويات A-Levels تخصصاً عميقاً يناسب الكليات العلمية والهندسية الدقيقة.",
        "تحظى كلتا الشهادتين بأعلى درجات التقدير والقبول في أعرق جامعات العالم."
      ]
    },
    {
      id: "2",
      title: "Artificial Intelligence in the Classroom: Fostering Creators, Not Consumers",
      titleAr: "الذكاء الاصطناعي في الفصول الدراسية: إعداد مبتكرين ومطورين لا مجرد مستهلكين للتقنية",
      category: "STEM & Future Skills",
      categoryAr: "العلوم ومهارات المستقبل",
      readTime: "5 min read",
      readTimeAr: "٥ دقائق قراءة",
      date: "Apr 2026",
      dateAr: "أبريل ٢٠٢٦",
      summary: "How Altair integrates quantum sandbox simulations and generative AI ethics into K-12 learning.",
      summaryAr: "كيف تدمج مدرسة ألتير محاكيات الذكاء الاصطناعي وأخلاقيات التكنولوجيا في المراحل الدراسية المختلفة.",
      content: [
        "In the era of autonomous intelligence, passive memorization is obsolete. At Altair Academy, our pedagogical philosophy approaches Artificial Intelligence not as a shortcut, but as a cognitive amplifier and critical design tool.",
        "From Year 5 onwards, students are introduced to computational thinking, Python coding, and algorithmic logic. By Secondary School, scholars engage directly with neural network concepts, supervised machine learning models, and ethical AI frameworks.",
        "We emphasize intellectual integrity: teaching students how large language models function, where bias emerges in datasets, and how human discernment and ethical empathy must govern technological applications.",
        "Our graduates enter university not merely familiar with digital tools, but equipped to lead the research and architectural design of tomorrow's sovereign intelligent systems."
      ],
      contentAr: [
        "في عصر الذكاء الاصطناعي والأنظمة الذاتية، أصبح الحفظ والتلقين التقليدي غير ذي جدوى. في أكاديمية ألتير، نعتبر التكنولوجيا والذكاء الاصطناعي أداة لتعزيز التفكير والابتكار لا مجرد بديل سريع.",
        "بدءاً من الصف الخامس، يتعلم الطلاب التفكير الحوسبي، والبرمجة بلغة بايثون، والمنطق الخوارزمي. وبحلول المرحلة الثانوية، يتعامل الطلاب مع مفاهيم الشبكات العصبية، ونماذج التعلم الآلي، والأطر الأخلاقية للتقنية.",
        "نغرس في طلابنا الأمانة الفكرية؛ حيث يفهمون كيفية عمل نماذج الذكاء الاصطناعي ومصادر التحيز في البيانات، وأهمية الإشراف الأخلاقي والإنساني على مخرجات التكنولوجيا.",
        "يتخرج طلابنا وهم ليسوا فقط مستخدمين للتقنية، بل مبتكرين قادرين على قيادة وتطوير الأنظمة الذكية السيادية للمستقبل."
      ],
      keyTakeaways: [
        "Integrate Python coding and algorithmic logic from Primary School.",
        "Teach ethics, dataset bias, and critical verification alongside tech usage.",
        "Empower students as engineers and architects of technological solutions."
      ],
      keyTakeawaysAr: [
        "دمج البرمجة بلغة بايثون والتفكير الخوارزمي منذ المرحلة الابتدائية.",
        "تعليم الأخلاقيات ونقد البيانات والتحقق العلمي بالتوازي مع استخدام التقنية.",
        "تمكين الطلاب ليكونوا مهندسين ومبتكرين للحلول لا مجرد مستهلكين لها."
      ]
    },
    {
      id: "3",
      title: "Winning Ivy League & Oxbridge Admissions: The 4-Year Strategic Blueprint",
      titleAr: "استراتيجية القبول في جامعات أكسفورد وكامبريدج وآيفي ليج: خارطة طريق الـ ٤ سنوات",
      category: "University Admissions",
      categoryAr: "القبول والتوجيه الجامعي",
      readTime: "7 min read",
      readTimeAr: "٧ دقائق قراءة",
      date: "Apr 2026",
      dateAr: "أبريل ٢٠٢٦",
      summary: "Inside our specialized university counseling framework that consistently yields 96% top-choice acceptance rates.",
      summaryAr: "نظرة متعمقة على منظومة الإرشاد الجامعي في ألتير التي تحقق نسبة ٩٦٪ قبول بالرغبة الأولى.",
      content: [
        "Admissions to institutions like Oxford, Cambridge, Harvard, and Stanford have reached historic competitiveness, with acceptance rates hovering below 4%. In this environment, stellar grades are merely the baseline expectation.",
        "What distinguishes successful candidates is 'intellectual angularity'—evidence of deep, self-directed academic passion outside the classroom. At Altair, university mentorship begins in Year 9, identifying each scholar's unique intellectual spark.",
        "We guide students to build substantial portfolios: conducting peer-reviewed research papers, competing in global Olympiads, founding purposeful NGOs, and interning with medical or financial leaders in the UAE.",
        "Combined with mock interview panels led by Oxbridge alumni and intensive LNAT/UCAT/SAT test preparation, our scholars present narratives that admissions deans cannot ignore."
      ],
      contentAr: [
        "شهدت معدلات القبول في جامعات النخبة مثل أكسفورد وكامبريدج وهارفارد وستانفورد تنافسية غير مسبوقة، حيث انخفضت نسب القبول إلى ما دون ٤٪. في هذا المناخ، أصبحت الدرجات العالية مجرد شرط أساسي أولي.",
        "إن ما يميز المرشح المقبول هو 'التميز الفكري المتخصص'—أي تقديم أدلة حقيقية على شغف أكاديمي عميق ومستقل يتجاوز المناهج الدراسية العادية. في ألتير، تبدأ خطة التوجيه الجامعي منذ الصف التاسع لاكتشاف شغف كل طالب.",
        "نوجه الطلاب لبناء ملفات إنجاز استثنائية: كنشر أوراق بحثية محكمة، والمنافسة بالأولمبيادات العالمية، وتأسيس مبادرات مجتمعية مؤثرة، والتدريب في كبرى المستشفيات والمؤسسات المالية بالدولة.",
        "وبالدمج مع لجان المقابلات التجريبية التي يقودها خريجو أكسفورد والتدريب المكثف على اختبارات LNAT/UCAT/SAT، يتقدم طلابنا بملفات تبهر لجان القبول الدولية."
      ],
      keyTakeaways: [
        "Start strategic university planning in Year 9, not Year 12.",
        "Demonstrate deep academic focus through independent research and Olympiads.",
        "Practice interview simulations with graduates of targeted universities."
      ],
      keyTakeawaysAr: [
        "بدء التخطيط الجامعي الاستراتيجي منذ الصف التاسع وليس في السنة الأخيرة.",
        "إبراز التميز الأكاديمي المستقل عبر الأبحاث المنشورة والمنافسات الدولية.",
        "محاكاة المقابلات الشخصية مع خريجي الجامعات المستهدفة لاكتساب الثقة."
      ]
    },
    {
      id: "4",
      title: "Balancing High Academic Rigor with Mental Well-Being and Character",
      titleAr: "التوازن بين الصرامة الأكاديمية العالية والصحة النفسية وبناء الشخصية",
      category: "Student Well-Being",
      categoryAr: "الصحة النفسية والتربية",
      readTime: "5 min read",
      readTimeAr: "٥ دقائق قراءة",
      date: "Mar 2026",
      dateAr: "مارس ٢٠٢٦",
      summary: "How our House System, pastoral counselors, and mindfulness hubs safeguard student mental resilience during exam seasons.",
      summaryAr: "كيف يحمي نظام البيوت المدرسية والأخصائيون التربويون المرونة النفسية للطلاب خلال فترات الامتحانات.",
      content: [
        "Academic excellence should never come at the expense of a child's psychological health. At Altair Academy, we view emotional well-being not as an afterthought, but as the indispensable prerequisite for sustained intellectual achievement.",
        "Our centuries-old British House System creates small, close-knit family units within our large school community. Every student belongs to a House overseen by a dedicated House Master who monitors academic pacing, peer relationships, and emotional balance.",
        "We integrate daily mindfulness breathwork, scheduled digital detox windows, and mandatory physical athletics to ensure cognitive stress is naturally alleviated.",
        "By fostering psychological safety, our scholars learn to view intellectual setbacks not as failures, but as essential iterative steps toward mastery."
      ],
      contentAr: [
        "لا ينبغي أبداً أن يأتي التميز الأكاديمي على حساب الصحة النفسية للطالب. في مدرسة ألتير، نؤمن بأن الاتزان العاطفي هو الأساس الذي لا غنى عنه لتحقيق التفوق الفكري المستدام.",
        "يوفر نظام البيوت المدرسية البريطاني بيئة أسرية مترابطة وداعمة داخل المجتمع المدرسي الكبير. ينتمي كل طالب لبيت مدرسي يشرف عليه مسؤول متخصص يتابع وتيرة التحصيل الدراسي والعلاقات الاجتماعية والاستقرار النفسي.",
        "ندمج تمارين التأمل والتنفس اليومية، وفترات انقطاع رقمي مجدولة، والأنشطة الرياضية الإلزامية لتبديد الضغوط الذهنية بشكل طبيعي وصحي.",
        "من خلال توفير بيئة يسودها الأمان النفسي، يتعلم طلابنا النظر إلى التحديات الدراسية ليس كإخفاقات، بل كمحطات ضرورية للتعلم والنمو."
      ],
      keyTakeaways: [
        "Emotional well-being is the essential foundation for top academic performance.",
        "The House System provides personalized pastoral care and peer mentorship.",
        "Mindfulness and physical athletics are integrated into daily routines."
      ],
      keyTakeawaysAr: [
        "الصحة النفسية والاتزان العاطفي هما الركيزة الأساسية للتحصيل الأكاديمي المتفوق.",
        "يوفر نظام البيوت المدرسية رعاية تربوية وثيقة ودعماً مستمراً للأقران.",
        "دمج تمارين التأمل والرياضة البدنية كعنصر أساسي في الروتين اليومي."
      ]
    }
  ],

  locations: [
    {
      id: "barsha",
      city: "DUBAI",
      cityAr: "دبي",
      district: "Al Barsha",
      districtAr: "البرشاء",
      name: "Dubai Al Barsha Flagship Campus",
      nameAr: "فرع البرشاء الرئيسي بدبي",
      address: "Al Barsha South 2, Street 18, Dubai",
      addressAr: "البرشاء جنوب ٢، شارع ١٨، دبي",
      phone: "+971 4 500 89100",
      email: "dubai@altairacademy.ae",
      googleMapsUrl: "https://maps.google.com/?q=Al+Barsha+South+Dubai",
      image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80",
      operatingHours: { en: "Mon - Fri: 7:30 AM - 4:30 PM", ar: "الإثنين إلى الجمعة: ٧:٣٠ ص - ٤:٣٠ م" },
      features: [
        { en: "50m Olympic Regulated 8-Lane Pool Complex", ar: "مجمع سباحة أولمبي بطول ٥٠ متراً و٨ حارات" },
        { en: "800-Seat Proscenium Performing Arts Theater", ar: "مسرح فنون أدائية مدرج يتسع لـ ٨٠٠ مقعد" },
        { en: "Nvidia AI Quantum Sandbox & Drone Arena", ar: "مختبر ذكاء اصطناعي Nvidia وحلبة طائرات درون" },
        { en: "FIFA Certified Full-Turf Football Stadium", ar: "استاد كرة قدم عشب كامل معتمد من FIFA" }
      ]
    },
    {
      id: "khalifa",
      city: "ABU DHABI",
      cityAr: "أبوظبي",
      district: "Khalifa City",
      districtAr: "مدينة خليفة",
      name: "Abu Dhabi Khalifa City Capital Campus",
      nameAr: "فرع مدينة خليفة بالعاصمة أبوظبي",
      address: "Sector 12, Khalifa City A, Abu Dhabi",
      addressAr: "القطاع ١٢، مدينة خليفة أ، أبوظبي",
      phone: "+971 2 500 99200",
      email: "abudhabi@altairacademy.ae",
      googleMapsUrl: "https://maps.google.com/?q=Khalifa+City+Abu+Dhabi",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
      operatingHours: { en: "Mon - Fri: 7:30 AM - 4:30 PM", ar: "الإثنين إلى الجمعة: ٧:٣٠ ص - ٤:٣٠ م" },
      features: [
        { en: "Architectural Solar-Powered Sky Atrium", ar: "بهو علوي معماري يعمل بالطاقة الشمسية المستدامة" },
        { en: "Biotechnology & Hydroponic Greenhouse Lab", ar: "مختبر تقنية حيوية ودفيئة زراعية مائية متطورة" },
        { en: "Indoor Air-Conditioned Multi-Sport Dome", ar: "قبة رياضية مكيفة متعددة الاستخدامات والملاعب" },
        { en: "Extensive Millennium Library with 40k Volumes", ar: "مكتبة الألفية الشاملة التي تضم أكثر من ٤٠ ألف كتاب" }
      ]
    }
  ],

  testimonials: [
    {
      quote: "Altair Academy provided our daughter with the intellectual rigor and confidence to secure admission into Oxford Law with a full scholarship. The faculty's mentorship is unparalleled in the UAE.",
      quoteAr: "منحت مدرسة ألتير ابنتنا الصرامة الفكرية والثقة الكاملة لنيل القبول في كلية الحقوق بأكسفورد بمنحة كاملة. إشراف وتفاني الكادر التدريسي لا مثيل له في الإمارات.",
      author: "H.E. Sheikh Sultan Al Qasimi",
      authorAr: "سعادة الشيخ سلطان القاسمي",
      relation: "Parent of Sara (Class of 2025)",
      relationAr: "والد الخريجة سارة (دفعة ٢٠٢٥)",
      location: "Dubai Al Barsha Campus",
      locationAr: "فرع البرشاء بدبي",
      rating: 5,
      studentTrack: "IB Diploma (44/45 Score) → Oxford Law",
      studentTrackAr: "البكالوريا الدولية (٤٤ / ٤٥) ← حقوق أكسفورد"
    },
    {
      quote: "The dual British and IB pathways allowed our sons to pursue their distinct passions—one in Cambridge A-Level Engineering and the other in the IB Arts program. Both thrived tremendously.",
      quoteAr: "أتاح المسار المزدوج بين المنهاج البريطاني والبكالوريا الدولية لابنيّ اتباع شغفيهما المختلفين؛ أحدهما في هندسة A-Level والآخر في فنون IB. وكلاهما حقق تفوقاً مبهراً.",
      author: "Dr. Evelyn Vance-Sinclair",
      authorAr: "د. إيفلين فانس سنكلير",
      relation: "Parent of Marcus & Leo (Years 10 & 13)",
      relationAr: "والدة ماركوس وليو (الصفين التاسع والثاني عشر)",
      location: "Abu Dhabi Khalifa City Campus",
      locationAr: "فرع مدينة خليفة بأبوظبي",
      rating: 5,
      studentTrack: "A-Level Engineering & IB Arts",
      studentTrackAr: "هندسة A-Level وفنون البكالوريا"
    },
    {
      quote: "From the Olympic swimming pool to the robotics sandbox, the campus facilities rival world-class university campuses. My daughter loves going to school every single morning.",
      quoteAr: "من المسبح الأولمبي إلى مختبرات الروبوتات، تضاهي مرافق الحرم المدرسي أرقى الجامعات العالمية. ابنتي تعشق الذهاب للمدرسة كل صباح بحماس.",
      author: "Mansoor Al Mazrouei",
      authorAr: "منصور المزروعي",
      relation: "Parent of Mariam (Primary Year 4)",
      relationAr: "والد مريم (الصف الثالث الابتدائي)",
      location: "Dubai Al Barsha Campus",
      locationAr: "فرع البرشاء بدبي",
      rating: 5,
      studentTrack: "Primary Gifted & Talented Cohort",
      studentTrackAr: "برنامج الموهوبين والمتفوقين بالابتدائي"
    },
    {
      quote: "The warmth of the British House System combined with strong Arabic language and cultural pride makes Altair the ideal school for Emirati families seeking international excellence.",
      quoteAr: "إن الدفء التربوي لنظام البيوت المدرسية البريطاني مع ترسيخ اللغة العربية والاعتزاز بالهوية الوطنية يجعل ألتير الخيار المثالي للعائلات الإماراتية الباحثة عن العالمية.",
      author: "Sheikha Reem Al Nuaimi",
      authorAr: "الشيخة ريم النعيمي",
      relation: "Parent of Rashid (Secondary Year 8)",
      relationAr: "والدة راشد (الصف السابع الثانوي)",
      location: "Abu Dhabi Khalifa City Campus",
      locationAr: "فرع مدينة خليفة بأبوظبي",
      rating: 5,
      studentTrack: "Secondary Bilingual STEM Track",
      studentTrackAr: "المسار الثانوي الثنائي لعلوم STEM"
    }
  ],

  faq: [
    {
      question: "What curriculum frameworks does Altair Academy offer?",
      questionAr: "ما هي المناهج والمسارات التعليمية المعتمدة في مدرسة ألتير؟",
      category: "Curriculum",
      categoryAr: "المناهج والمسارات",
      answer: "We offer an enriched British National Curriculum (EYFS to IGCSE) culminating in dual Sixth Form pathways: Cambridge International A-Levels or the full International Baccalaureate (IB) Diploma Program.",
      answerAr: "نقدم المنهاج البريطاني الوطني المعزز (من الروضة حتى IGCSE)، وصولاً لمسارين اختياريين في السكث فورم: مستويات A-Levels البريطانية أو دبلوم البكالوريا الدولية (IB) بالكامل."
    },
    {
      question: "What is your KHDA and ADEK inspection rating?",
      questionAr: "ما هو تصنيف المدرسة في تقييمات هيئة المعرفة (KHDA) ودائرة التعليم والمعرفة (ADEK)؟",
      category: "Accreditation",
      categoryAr: "الاعتمادات والتصنيف",
      answer: "Altair Academy is rated 'Outstanding' across core academic categories, including student achievement, curriculum design, pastoral care, and leadership, and is fully accredited by British Schools Overseas (BSO).",
      answerAr: "حازت أكاديمية ألتير على تصنيف 'متميز' (Outstanding) في المعايير الأساسية لجودة التعليم، وتطوير المنهاج، والرعاية التربوية، وهي معتمدة من هيئة المدارس البريطانية بالخارج (BSO)."
    },
    {
      question: "How does the entrance assessment process work?",
      questionAr: "كيف يتم إجراء اختبار وتقييم القبول للطلاب الجدد؟",
      category: "Admissions",
      categoryAr: "القبول والتسجيل",
      answer: "Applicants complete a standardized CAT4 cognitive assessment, English language reading comprehension, and a mathematics diagnostic, followed by an informal pastoral interview with our Head of Stage.",
      answerAr: "يخضع المتقدمون لاختبار CAT4 للقدرات المعرفية، وتقييم استيعاب القراءة باللغة الإنجليزية، واختبار تشخيصي في الرياضيات، يليه مقابلة تربوية ودية مع رئيس المرحلة."
    },
    {
      question: "What are your annual tuition fees and payment options?",
      questionAr: "ما هي الرسوم الدراسية السنوية وخيارات السداد المتاحة؟",
      category: "Tuition",
      categoryAr: "الرسوم وطرق الدفع",
      answer: "Tuition ranges from AED 44,000 in Foundation Stage to AED 96,000 in Sixth Form. Fees can be settled annually or across 3 termly installments, with tuition fee coverage for books, laboratories, and core sports.",
      answerAr: "تتراوح الرسوم من ٤٤,٠٠٠ د.إ لمرحلة التأسيس حتى ٩٦,٠٠٠ د.إ في السكث فورم، ويمكن سدادها سنوياً أو على ٣ أقساط فصلية ميسرة، وتشمل الرسوم الكتب والمختبرات والأنشطة الرياضية."
    },
    {
      question: "Do you offer sibling discounts or scholarships?",
      questionAr: "هل تقدم المدرسة خصومات للإخوة أو منحاً دراسية للمتفوقين؟",
      category: "Tuition",
      categoryAr: "الرسوم والخصومات",
      answer: "Yes. We provide a 10% tuition discount for the second enrolled sibling and 15% for the third. We also award competitive academic, athletic, and performing arts scholarships for exceptional scholars.",
      answerAr: "نعم. نقدم خصماً بنسبة ١٠٪ للطفل الثاني و١٥٪ للطفل الثالث، بالإضافة لمنح التميز الأكاديمي والرياضي والفني للطلاب الموهوبين المتفوقين."
    },
    {
      question: "What sports and co-curricular programs are available?",
      questionAr: "ما هي الأنشطة الرياضية والنوادي اللاصفية المتاحة للطلاب؟",
      category: "Campus Life",
      categoryAr: "الحياة المدرسية والرياضة",
      answer: "Our facilities include a 50m Olympic pool, FIFA turf stadium, robotics labs, and 40+ student clubs including Model UN, orchestra, competitive debate, equestrian training, and the Duke of Edinburgh Award.",
      answerAr: "تشمل مرافقنا مسبحاً أولمبياً ٥٠ متراً، واستاد FIFA، ومختبرات روبوتات، وأكثر من ٤٠ نادياً طلابياً تشمل نموذج الأمم المتحدة، والأوركسترا، والفروسية، وجائزة دوق إدنبرة."
    },
    {
      question: "How does Altair support university placements?",
      questionAr: "كيف تدعم المدرسة الطلاب في إجراءات القبول بالجامعات العالمية؟",
      category: "University Placements",
      categoryAr: "القبول الجامعي",
      answer: "Our full-time Oxbridge and Ivy League counseling team begins personalized guidance in Year 9, overseeing SAT/LNAT prep, personal statement coaching, research publications, and alumni interview simulations.",
      answerAr: "يبدأ فريق الإرشاد الجامعي المتخصص التوجيه الفردي منذ الصف التاسع، ويشرف على اختبارات SAT/LNAT، وصياغة الخطابات الشخصية، ونشر الأبحاث ومحاكاة مقابلات القبول الجامعية."
    },
    {
      question: "What bus transportation routes do you service?",
      questionAr: "ما هي مسارات الحافلات المدرسية المتاحة لنقل الطلاب؟",
      category: "Transport",
      categoryAr: "المواصلات المدرسية",
      answer: "We operate modern, GPS-tracked, seatbelt-equipped school buses servicing all major residential districts across Dubai (Barsha, Emirates Hills, Downtown, Mirdif) and Abu Dhabi (Khalifa City, Reem, Saadiyat).",
      answerAr: "نوفر أسطول حافلات حديثاً ومزوداً بتتبع GPS وأحزمة أمان لجميع مناطق دبي السكنية (البرشاء، تلال الإمارات، داون تاون، مردف) وأبوظبي (مدينة خليفة، جزيرة الريم، السعديات)."
    },
    {
      question: "How do I schedule a private campus tour?",
      questionAr: "كيف يمكنني حجز جولة تعريفية خاصة في أحد الفروع؟",
      category: "Tours",
      categoryAr: "الجولات المدرسية",
      answer: "Click 'Book Campus Tour' on our website, call our admissions desk at +971 4 500 89100, or send us a WhatsApp message. Private tours are conducted Monday through Friday.",
      answerAr: "يمكنك الضغط على 'حجز جولة' في الموقع، أو الاتصال بالاستقبال على 89100 500 4 971+، أو مراسلتنا عبر واتساب. تُقام الجولات من الإثنين إلى الجمعة."
    },
    {
      question: "What documents are required for application?",
      questionAr: "ما هي الأوراق والمستندات المطلوبة لتقديم طلب الالتحاق؟",
      category: "Admissions",
      categoryAr: "القبول والتسجيل",
      answer: "Required documents: Student & Parent Passport and Emirates ID copies, Birth Certificate, the last 2 years of official school report cards, and vaccination/health immunization records.",
      answerAr: "المستندات المطلوبة: صورة جواز السفر والهوية الإماراتية للطالب والوالدين، وشهادة الميلاد، والشهادات المدرسية لآخر سنتين دراسيتين، وسجل التطعيمات الصحي."
    }
  ]
};

export const ALTAIR_DATA = ALTAIR_ACADEMY_DATA;
