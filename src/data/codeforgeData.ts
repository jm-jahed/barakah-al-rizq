export interface TechProgram {
  id: string;
  num: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  duration: string;
  durationAr: string;
  mode: string;
  modeAr: string;
  price: string;
  numericPrice: number;
  description: string;
  descriptionAr: string;
  outcome: string;
  outcomeAr: string;
  techStack: string[];
  modules: string[];
  modulesAr: string[];
  recommendedFor: string[];
}

export interface LeadershipMember {
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  bio: string;
  bioAr: string;
  image: string;
  specialization: string;
  specializationAr: string;
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
}

export interface Testimonial {
  quote: string;
  quoteAr: string;
  author: string;
  authorAr: string;
  role: string;
  roleAr: string;
  company: string;
  location: string;
  locationAr: string;
  rating: number;
  program: string;
  programAr: string;
  salaryOutcome: string;
  salaryOutcomeAr: string;
}

export interface FAQItem {
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
  category: string;
}

export interface InstitutionalPillar {
  number: string;
  title: string;
  titleAr: string;
  desc: string;
  descAr: string;
  devAdvantage: string;
  devAdvantageAr: string;
  employerImpact: string;
  employerImpactAr: string;
}

export interface CampusLocation {
  id: string;
  city: string;
  cityAr: string;
  name: string;
  nameAr: string;
  address: string;
  addressAr: string;
  phone: string;
  hours: string;
  hoursAr: string;
  features: string[];
  featuresAr: string[];
}

export const CODEFORGE_DATA = {
  brand: "CODEFORGE UAE",
  brandAr: "كود فورج الإمارات",
  tagline: "Code Your Next Career.",
  taglineAr: "ابنِ مسارك المهني القادم في قطاع البرمجة والتقنية.",
  positioning: "Premium UAE Tech & Coding Bootcamp Academy",
  positioningAr: "الأكاديمية الرائدة لمعسكرات البرمجة والذكاء الاصطناعي في دولة الإمارات",
  phone: "+971 4 700 89120",
  whatsapp: "https://wa.me/9715070089120",
  whatsappNumber: "+971 50 700 89120",
  email: "admissions@codeforge.ae",

  trustLogos: [
    { name: "CLOUDSCALE UAE", tag: "Enterprise Cloud Systems", tagAr: "أنظمة سحابية مؤسسية" },
    { name: "FINEDGE", tag: "Dubai FinTech Platform", tagAr: "منصة تقنية مالية بدبي" },
    { name: "NEXUS LABS", tag: "AI Product Studio", tagAr: "استوديو منتجات الذكاء الاصطناعي" },
    { name: "VERTEX AI", tag: "Machine Learning Solutions", tagAr: "حلول تعلم الآلة المتقدمة" }
  ],

  programs: [
    {
      id: "fullstack-eng",
      num: "01",
      title: "Full-Stack Software Engineering",
      titleAr: "هندسة البرمجيات وتطبيقات الويب المتكاملة (Full-Stack)",
      category: "Software Engineering",
      categoryAr: "هندسة البرمجيات",
      duration: "16 Weeks (Full-Time)",
      durationAr: "١٦ أسبوعاً (دوام كامل)",
      mode: "In-Person / Hybrid",
      modeAr: "حضوري / مدمج",
      price: "AED 18,500",
      numericPrice: 18500,
      description: "Master modern web development from TypeScript & React fundamentals to Next.js App Router, Node.js microservices, PostgreSQL with Prisma ORM, Docker containers, and automated AWS cloud deployment.",
      descriptionAr: "إتقان تطوير تطبيقات الويب الحديثة من أساسيات TypeScript و React إلى معمارية Next.js، وخوادم Node.js، وقواعد بيانات PostgreSQL مع Prisma ORM، وحاويات Docker، والنشر السحابي على AWS.",
      outcome: "Build and deploy 4 production-grade SaaS applications ready to clear senior technical live-coding interviews.",
      outcomeAr: "بناء ونشر ٤ تطبيقات سحابية حقيقية للإنتاج واجتياز اختبارات البرمجة الحية للشركات التقنية.",
      techStack: ["TypeScript", "Next.js", "React", "Node.js", "PostgreSQL", "Prisma", "Docker", "AWS", "TailwindCSS"],
      modules: [
        "Module 1: Advanced TypeScript, Algorithms & Git Team Workflows",
        "Module 2: React Component Architecture & Next.js App Router Mastery",
        "Module 3: Scalable RESTful & GraphQL APIs with Node.js & Express",
        "Module 4: Relational Databases: PostgreSQL, Prisma ORM & Redis Caching",
        "Module 5: Docker Containerization, CI/CD Pipelines & AWS Cloud Deployment",
        "Module 6: Capstone SaaS Product Build & Technical Live-Coding Interview Prep"
      ],
      modulesAr: [
        "الوحدة الأولى: البرمجة المتقدمة بـ TypeScript، الخوارزميات، وإدارة فروع Git",
        "الوحدة الثانية: معمارية مكونات React وإتقان مسارات Next.js الحديثة",
        "الوحدة الثالثة: بناء واجهات برمجة التطبيقات (APIs) بـ Node.js و Express",
        "الوحدة الرابعة: قواعد البيانات العلائقية: PostgreSQL و Prisma والتخزين المؤقت بـ Redis",
        "الوحدة الخامسة: حاويات Docker، وأنابيب النشر المستمر (CI/CD)، والنشر على AWS",
        "الوحدة السادسة: بناء ونشر مشروع تخرج حقيقي ومحاكاة مقابلات البرمجة الحية"
      ],
      recommendedFor: ["softwareEng", "completeBeginner", "stemDegree", "juniorDev"]
    },
    {
      id: "datascience-ai",
      num: "02",
      title: "Data Science & Generative AI Engineering",
      titleAr: "علوم البيانات وهندسة الذكاء الاصطناعي التوليدي",
      category: "Artificial Intelligence",
      categoryAr: "الذكاء الاصطناعي",
      duration: "14 Weeks (Full-Time)",
      durationAr: "١٤ أسبوعاً (دوام كامل)",
      mode: "Online / Hybrid",
      modeAr: "عبر الإنترنت / مدمج",
      price: "AED 19,800",
      numericPrice: 19800,
      description: "Learn Python data analysis, statistical modeling, machine learning with scikit-learn, deep learning with PyTorch, and building enterprise LLM Retrieval-Augmented Generation (RAG) agents with LangChain and FastAPI.",
      descriptionAr: "تعلم تحليل البيانات بـ Python، والنمذجة الإحصائية، وخوارزميات تعلم الآلة، والتعلم العميق بـ PyTorch، وبناء وكلاء الذكاء الاصطناعي التوليدي (RAG) بـ LangChain و FastAPI.",
      outcome: "Deploy live machine learning pipelines, predictive dashboards, and autonomous LLM agents for enterprise analytics teams.",
      outcomeAr: "بناء ونشر نماذج تعلم الآلة، ولوحات البيانات التنبؤية، وتطبيقات الذكاء الاصطناعي التوليدي للشركات.",
      techStack: ["Python", "Pandas", "Scikit-Learn", "PyTorch", "FastAPI", "LangChain", "OpenAI API", "PostgreSQL pgvector"],
      modules: [
        "Module 1: Python for Data Science, Vectorized Math & Data Cleansing",
        "Module 2: Exploratory Data Analysis & Statistical Inference",
        "Module 3: Supervised & Unsupervised Machine Learning Algorithms",
        "Module 4: Deep Learning Foundations & Neural Networks with PyTorch",
        "Module 5: Generative AI, Prompt Engineering, RAG & Vector Databases",
        "Module 6: Enterprise AI Capstone Deployment & Live Demonstration"
      ],
      modulesAr: [
        "الوحدة الأولى: بايثون لعلوم البيانات، العمليات الشعاعية ومعالجة البيانات",
        "الوحدة الثانية: تحليل البيانات الاستكشافي والاستدلال الإحصائي المتقدم",
        "الوحدة الثالثة: خوارزميات تعلم الآلة الخاضعة وغير الخاضعة للإشراف",
        "الوحدة الرابعة: أسس التعلم العميق والشبكات العصبية باستخدام PyTorch",
        "الوحدة الخامسة: الذكاء الاصطناعي التوليدي وهندسة التلقين ونظم RAG وقواعد البيانات الشعاعية",
        "الوحدة السادسة: نشر مشروع تخرج ذكاء اصطناعي مؤسسي وعرضه على لجان التقييم"
      ],
      recommendedFor: ["aiData", "stemDegree", "techAdjacent"]
    },
    {
      id: "cybersecurity-cloud",
      num: "03",
      title: "Cyber Security & Cloud Infrastructure DevOps",
      titleAr: "الأمن السيبراني وهندسة الحوسبة السحابية (DevOps)",
      category: "Cloud & Security",
      categoryAr: "السحابة والأمن السيبراني",
      duration: "12 Weeks (Part-Time)",
      durationAr: "١٢ أسبوعاً (دوام جزئي)",
      mode: "In-Person / Evening",
      modeAr: "حضوري / مسائي",
      price: "AED 16,500",
      numericPrice: 16500,
      description: "Ethical hacking, network security auditing, AWS cloud infrastructure architecture, Kubernetes container orchestration, Terraform infrastructure-as-code, and automated threat incident response.",
      descriptionAr: "الاختراق الأخلاقي، وتدقيق أمن الشبكات، وهندسة بنية AWS السحابية، وإدارة حاويات Kubernetes، والبنية التحتية ككود عبر Terraform، والاستجابة التلقائية للتهديدات.",
      outcome: "Harden enterprise cloud infrastructures against zero-day exploits and orchestrate zero-downtime CI/CD delivery pipelines.",
      outcomeAr: "حماية الأنظمة السحابية للشركات، وسد الثغرات الأمنية، وإدارة خطوط النشر التلقائي بدون انقطاع.",
      techStack: ["AWS", "Kubernetes", "Docker", "Linux", "Terraform", "Wireshark", "Python Security", "Ansible"],
      modules: [
        "Module 1: Linux Kernel Administration, Shell Scripting & Network Protocols",
        "Module 2: AWS Well-Architected Cloud Frameworks & Identity (IAM)",
        "Module 3: Ethical Hacking, Vulnerability Scanning & Penetration Testing",
        "Module 4: Cloud Security Compliance, Encryption & SOC Architecture",
        "Module 5: Kubernetes Orchestration, Terraform & Automated CI/CD",
        "Module 6: Live Cyber Incident Defense Simulation & Security Audit Capstone"
      ],
      modulesAr: [
        "الوحدة الأولى: إدارة خوادم لينكس، السكربتات الطرفية، وبروتوكولات الشبكات",
        "الوحدة الثانية: أطر عمل AWS السحابية وإدارة الهويات والوصول (IAM)",
        "الوحدة الثالثة: الاختراق الأخلاقي، فحص الثغرات واختبارات الاختراق العملي",
        "الوحدة الرابعة: أمن السحابة والتشفير ومعمارية مراكز العمليات الأمنية (SOC)",
        "الوحدة الخامسة: إدارة الحاويات بـ Kubernetes وأتمتة البنية التحتية بـ Terraform",
        "الوحدة السادسة: محاكاة التصدي لهجوم سيبراني حي ومشروع التدقيق الأمني الشامل"
      ],
      recommendedFor: ["cyberCloud", "juniorDev", "stemDegree"]
    },
    {
      id: "uiux-product",
      num: "04",
      title: "UX/UI Design & Product Systems",
      titleAr: "تصميم تجربة وواجهة المستخدم وهندسة أنظمة المنتجات (UX/UI)",
      category: "Product & Design",
      categoryAr: "تصميم المنتجات الرقمية",
      duration: "12 Weeks (Part-Time)",
      durationAr: "١٢ أسبوعاً (دوام جزئي)",
      mode: "Online / Evening",
      modeAr: "عبر الإنترنت / مسائي",
      price: "AED 14,200",
      numericPrice: 14200,
      description: "User research methodologies, wireframing, advanced interactive prototyping in Figma, multi-brand design systems, usability testing, and frictionless developer handover practices.",
      descriptionAr: "منهجيات أبحاث المستخدمين، والهيكلة السلكية، والنماذج التفاعلية المتقدمة في Figma، وبناء أنظمة التصميم (Design Systems)، واختبار سهولة الاستخدام، وتسليم التصاميم للمطورين.",
      outcome: "Design and present an audit-ready product case study portfolio verified with real user testing data.",
      outcomeAr: "تصميم وبناء ملف أعمال (Portfolio) متكامل لتطبيقات الموبايل والويب مثبت بنتائج اختبارات المستخدمين.",
      techStack: ["Figma", "Design Systems", "Prototyping", "User Research", "HTML/CSS Basics", "Mixpanel", "Maze"],
      modules: [
        "Module 1: User Research, Customer Empathy Mapping & Information Architecture",
        "Module 2: Low-Fidelity Wireframing, Layouts & Usability Heuristics",
        "Module 3: Advanced Figma Masterclass: Auto-Layout, Variables & Component Variants",
        "Module 4: Multi-Brand Design Systems, Typography Hierarchy & Accessibility (WCAG)",
        "Module 5: Interactive Micro-Animations & Remote Usability Testing with Maze",
        "Module 6: End-to-End Mobile & Web Application Portfolio Defense"
      ],
      modulesAr: [
        "الوحدة الأولى: أبحاث المستخدمين، وخرائط التعاطف، وهيكلة المعلومات",
        "الوحدة الثانية: التخطيط السلكي (Wireframing) وقواعد سهولة الاستخدام",
        "الوحدة الثالثة: إتقان Figma: التخطيط التلقائي، المتغيرات، والمكونات الديناميكية",
        "الوحدة الرابعة: أنظمة التصميم، التسلسل البصري، ومعايير إمكانية الوصول (WCAG)",
        "الوحدة الخامسة: الحركات التفاعلية الدقيقة واختبارات الاستخدام عن بُعد",
        "الوحدة السادسة: مناقشة ملف الأعمال الشامل لتطبيقات الهواتف والويب"
      ],
      recommendedFor: ["uiuxProduct", "techAdjacent", "completeBeginner"]
    },
    {
      id: "mobile-engineering",
      num: "05",
      title: "Mobile App Engineering (React Native & Flutter)",
      titleAr: "هندسة وتطوير تطبيقات الهواتف الذكية (React Native و Flutter)",
      category: "Mobile Engineering",
      categoryAr: "هندسة تطبيقات الجوال",
      duration: "14 Weeks (Hybrid)",
      durationAr: "١٤ أسبوعاً (مدمج)",
      mode: "Hybrid",
      modeAr: "مدمج",
      price: "AED 17,900",
      numericPrice: 17900,
      description: "Cross-platform iOS and Android mobile app development using React Native with Expo, Flutter, TypeScript, state management with Zustand, Firebase backends, and App Store publishing.",
      descriptionAr: "تطوير تطبيقات الجوال لأنظمة iOS و Android باستخدام React Native و Expo و Flutter و TypeScript وإدارة الحالة بـ Zustand والربط مع Firebase ونشر التطبيقات على المتاجر الرسمية.",
      outcome: "Ship native-speed mobile applications to the Apple App Store and Google Play Store with production performance.",
      outcomeAr: "برمجة ونشر تطبيقات جوال حقيقية على متجري Apple App Store و Google Play بأعلى سرعة وأداء.",
      techStack: ["React Native", "Expo", "TypeScript", "Flutter", "Firebase", "Zustand", "App Store Connect", "Google Play Console"],
      modules: [
        "Module 1: React Native & Flutter Core Component Layout Systems",
        "Module 2: Scalable Mobile State Management (Zustand & Redux Toolkit)",
        "Module 3: Hardware Integrations: Camera, Geolocation, Biometrics & Push Alerts",
        "Module 4: Real-time Backend Integration: Firebase, Supabase & GraphQL APIs",
        "Module 5: Mobile App Performance Optimization, Memory Profiling & Offline Sync",
        "Module 6: App Store & Google Play Store Production Publishing Capstone"
      ],
      modulesAr: [
        "الوحدة الأولى: مكونات وتخطيطات واجهات React Native و Flutter",
        "الوحدة الثانية: إدارة حالة التطبيق (State Management) باستخدام Zustand",
        "الوحدة الثالثة: الوصول لأجهزة الجوال: الكاميرا، الموقع الجغرافي، والبصمة والإشعارات",
        "الوحدة الرابعة: الربط مع الخدمات السحابية: Firebase و Supabase وواجهات GraphQL",
        "الوحدة الخامسة: تحسين أداء التطبيق، إدارة الذاكرة، والمزامنة بدون إنترنت",
        "الوحدة السادسة: نشر وتجهيز التطبيق لمتجري آبل وجوجل بلاي"
      ],
      recommendedFor: ["mobileApp", "juniorDev", "softwareEng"]
    }
  ],

  howWeWork: [
    {
      step: "01",
      title: "FOUNDATIONS",
      titleAr: "الأسس والمفاهيم",
      desc: "Build rock-solid computer science fundamentals, git workflows, and command-line mastery.",
      descAr: "إتقان أسس علوم الحاسب، وهياكل البيانات، وأدوات Git الطرفية، وخوارزميات حل المشكلات."
    },
    {
      step: "02",
      title: "BUILD & REFACTOR",
      titleAr: "بناء ومراجعة الكود",
      desc: "Construct 4 progressive full-stack projects mentored by senior engineers from leading UAE tech firms.",
      descAr: "بناء ٤ تطبيقات تدريجية مع مراجعة دقيقة لطلبات الدمج (PRs) من قِبل كبار المبرمجين."
    },
    {
      step: "03",
      title: "REAL PROJECTS",
      titleAr: "مشروع الإنتاج الحقيقي",
      desc: "Collaborate in agile sprints to build production-grade web or AI software for client capstones.",
      descAr: "العمل ضمن فرق سكرام مرنة لبناء ونشر تطبيق سحابي أو ذكاء اصطناعي متكامل للإنتاج."
    },
    {
      step: "04",
      title: "CAREER LAUNCH",
      titleAr: "يوم العرض والتوظيف",
      desc: "Participate in technical interview mocks, CV optimization, and direct hiring partner demo days.",
      descAr: "محاكاة مقابلات البرمجة الحية، وتطوير السيرة الذاتية، وعرض المشاريع أمام مدراء التوظيف والتقنية."
    }
  ],

  careerOutcomes: {
    heading: "Real Career Outcomes.",
    headingAr: "نتائج مهنية حقيقية وعائد استثماري ملموس.",
    subheading: "Our graduates land software engineering and product roles at leading UAE tech hubs.",
    subheadingAr: "ينضم خريجونا لفرق الهندسة والذكاء الاصطناعي والمنتجات في كبرى شركات التقنية بالمنطقة.",
    stats: [
      {
        value: "AED 18,500/mo",
        valueAr: "١٨,٥٠٠ د.إ / شهرياً",
        label: "Average Starting Graduate Salary",
        labelAr: "متوسط الراتب الشهري المبدئي للخريجين"
      },
      {
        value: "+65%",
        valueAr: "+٦٥٪",
        label: "Average Income Increase Post-Bootcamp",
        labelAr: "متوسط الزيادة في الدخل بعد التخرج"
      },
      {
        value: "45 Days",
        valueAr: "٤٥ يوماً",
        label: "Average Time to First Job Offer",
        labelAr: "متوسط الأيام حتى استلام أول عرض وظيفي"
      }
    ]
  },

  caseStudy: {
    client: "Tariq Al-Mansoor — Software Engineer at FinTech Hub",
    clientAr: "طارق المنصور — مهندس برمجيات في منصة تقنية مالية",
    scenario: "Career Switcher from Hospitality Operations",
    scenarioAr: "تحول مهني كامل من إدارة الضيافة الفندقية إلى البرمجة",
    challenge: "Tariq worked as a hotel front-office manager with zero programming background but wanted to transition into Dubai's booming FinTech ecosystem.",
    challengeAr: "عمل طارق كمدير مكتب أمامي في قطاع الفنادق بدون أي معرفة برمجية سابقة، وسعى للتحول إلى قطاع التقنية المالية المتسارع في دبي.",
    before: "Zero coding experience, manual spreadsheet tracking, capped earning potential.",
    beforeAr: "صفر خبرة في البرمجة، إدارة تقليدية للجداول، ودخل شهري محدود بفرص نمو بطيئة.",
    after: "Completed 16-week Full-Stack Software Engineering bootcamp and hired as Frontend Engineer within 40 days.",
    afterAr: "أتم معسكر هندسة البرمجيات المتكاملة خلال ١٦ أسبوعاً وتم توظيفه كمهندس واجهات أمامية خلال ٤٠ يوماً فقط.",
    metrics: [
      { value: "16 Wks", valueAr: "١٦ أسبوعاً", label: "Bootcamp Duration", labelAr: "مدة المعسكر البرمجي" },
      { value: "AED 22,000", valueAr: "٢٢,٠٠٠ د.إ", label: "Starting Monthly Salary", labelAr: "الراتب الشهري المبدئي" },
      { value: "40 Days", valueAr: "٤٠ يوماً", label: "Time to Hired", labelAr: "المدة حتى استلام العرض" }
    ]
  },

  pillars: [
    {
      number: "01",
      title: "100% Project-Based Curriculum",
      titleAr: "منهج عملي قائم على المشاريع ١٠٠٪",
      desc: "No boring lectures. You write real code, debug real stack traces, and deploy live production sites from day one.",
      descAr: "لا دروس نظرية مملة. تكتب كوداً حقيقياً، وتصلح الأخطاء البرمجية، وتنشر مواقع وتطبيقات حية من اليوم الأول.",
      devAdvantage: "Build a GitHub repository brimming with real production commits and deployed URLs.",
      devAdvantageAr: "بناء ملف GitHub حقيقي مليء بطلبات الدمج (PRs) والروابط الحية المنشورة.",
      employerImpact: "Zero onboarding ramp-up required for new junior and mid-level hires.",
      employerImpactAr: "جاهزية فورية للعمل مع فرق التطوير دون الحاجة لفترات تدريب طويلة."
    },
    {
      number: "02",
      title: "Senior Developer Mentors",
      titleAr: "توجيه مباشر من كبار مهندسي البرمجيات",
      desc: "Learn directly from senior engineers with active experience at top Dubai and international tech firms.",
      descAr: "تعلّم مباشرة من كبار المهندسين الممارسين في كبرى شركات التقنية بدبي والعالم.",
      devAdvantage: "Weekly code PR reviews, architectural feedback, and production-grade debugging tricks.",
      devAdvantageAr: "مراجعات أسبوعية للكود، ونصائح معمارية، وحيل متقدمة لتصحيح الأخطاء البرمجية.",
      employerImpact: "Graduates adopt industry conventions, clean architecture, and test-driven habits.",
      employerImpactAr: "يكتسب الخريجون عادات الكود النظيف، وهياكل التصميم القياسية، والاختبار الآلي."
    },
    {
      number: "03",
      title: "1-on-1 Career Coaching",
      titleAr: "تدريب وتوجيه مهني فردي (1-on-1)",
      desc: "Personalized mock technical interviews, whiteboarding practice, and resume tuning for the UAE job market.",
      descAr: "محاكاة مقابلات تقنية مخصصة، تدريب على السبورة البيضاء، وتطوير السيرة الذاتية لسوق الإمارات.",
      devAdvantage: "Overcome interview anxiety and master live LeetCode-style algorithm problems.",
      devAdvantageAr: "التغلب على رهبة المقابلات وإتقان حل المسائل الخوارزمية الحية بثقة تامة.",
      employerImpact: "Candidates who communicate technical trade-offs with clarity and composure.",
      employerImpactAr: "مرشحون قادرون على شرح القرارات الهندسية والمفاضلات التقنية بوضوح باهر."
    },
    {
      number: "04",
      title: "Capstone Hiring Showcase",
      titleAr: "يوم عرض المشاريع والتوظيف (Demo Day)",
      desc: "Present your capstone project to hiring managers and CTOs during our private quarterly Demo Days.",
      descAr: "اعرض مشروع تخرجك النهائي أمام مسؤولي التوظيف ومدراء التقنية خلال يوم العرض الفصلي الخاص.",
      devAdvantage: "Direct access to CTOs without going through generic recruiter resume filters.",
      devAdvantageAr: "تواصل مباشر مع مدراء التقنية التنفيذيين دون المرور بفلاتر السير الذاتية التقليدية.",
      employerImpact: "Fast-track talent evaluation by seeing candidates defend live production architectures.",
      employerImpactAr: "تقييم سريع للمواهب من خلال مشاهدة المطور يشرح ويدافع عن معماريته البرمجية."
    },
    {
      number: "05",
      title: "Agile Team Sprints",
      titleAr: "العمل ضمن فرق سكرام مرنة (Agile Sprints)",
      desc: "Work in Scrum teams using Jira, Git PR code reviews, and CI/CD pipelines to mirror real workplace workflows.",
      descAr: "العمل ضمن فرق سكرام باستخدام Jira ومراجعات Git وأنابيب CI/CD لمحاكاة بيئات العمل الحقيقية.",
      devAdvantage: "Experience collaborating with designers, backend devs, and product managers.",
      devAdvantageAr: "اكتساب خبرة التعاون مع المصممين ومطوري الواجهات الخلفية ومدراء المنتجات.",
      employerImpact: "Seamless team integration from Day 1 in modern sprint-based engineering departments.",
      employerImpactAr: "اندماج فوري وسلس في فرق العمل الهندسية القائمة على دورات السبرنت."
    },
    {
      number: "06",
      title: "Lifetime Alumni Network",
      titleAr: "شبكة خريجين مدى الحياة",
      desc: "Access continuous alumni upskilling workshops, private Discord job channels, and networking meetups.",
      descAr: "الاستفادة من ورش العمل المستمرة، وقنوات الوظائف الحصرية على ديسكورد، واللقاءات التقنية.",
      devAdvantage: "Lifelong technical community and continuous career advancement support.",
      devAdvantageAr: "مجتمع تقني داعم مدى الحياة وفرص مستمرة للتطور المهني والترقيات.",
      employerImpact: "Access to a vetted talent pipeline spanning junior to senior engineering levels.",
      employerImpactAr: "الوصول لقاعدة مواهب موثوقة تغطي مختلف مستويات الخبرة البرمجية."
    }
  ],

  leadership: [
    {
      name: "Alex Vane",
      nameAr: "أليكس فاين",
      role: "Founder & Chief Instructor",
      roleAr: "المؤسس وكبير المدربين البرمجيين",
      bio: "Former Staff Engineer at European tech scaleups with 12+ years in distributed systems, Next.js, and cloud architecture.",
      bioAr: "مهندس برمجيات سابق في شركات تقنية أوروبية ناشئة بخبرة ١٢+ عاماً في الأنظمة الموزعة ومعمارية السحابة.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      specialization: "Full-Stack & Cloud Architecture",
      specializationAr: "تطوير الويب وهندسة السحابة"
    },
    {
      name: "Dr. Laila Al Hashimi",
      nameAr: "د. ليلى الهاشمي",
      role: "Head of AI Curriculum",
      roleAr: "رئيسة المناهج الأكاديمية للذكاء الاصطناعي",
      bio: "PhD in Machine Learning from Imperial College, specializing in LLM deployment, NLP pipelines, and autonomous AI agents.",
      bioAr: "دكتوراه في تعلم الآلة من إمبريال كوليدج، متخصصة في نشر نماذج اللغات الكبيرة ووكلاء الذكاء الاصطناعي.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      specialization: "Generative AI & LLM Systems",
      specializationAr: "الذكاء الاصطناعي التوليدي والتعلم العميق"
    },
    {
      name: "Karim Zaki",
      nameAr: "كريم زكي",
      role: "Head of Career Placement",
      roleAr: "رئيس قطاع التوظيف والشراكات التقنية",
      bio: "Tech recruiter with 8+ years connecting software engineering talent with Dubai Internet City, DIFC, and Hub71 firms.",
      bioAr: "خبير توظيف تقني بخبرة ٨+ سنوات في ربط الكفاءات البرمجية بشركات مدينة دبي للإنترنت ومركز دبي المالي العالمي.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      specialization: "Tech Recruitment & Interview Prep",
      specializationAr: "التوظيف التقني والإعداد للمقابلات"
    },
    {
      name: "Sarah Jenkins",
      nameAr: "سارة جنكينز",
      role: "Lead UX & Design Systems Mentor",
      roleAr: "كبيرة موجهي تصميم المنتجات وأنظمة الواجهات",
      bio: "Ex-Design Lead with 10+ years shaping high-growth consumer apps and design systems across Europe and Middle East.",
      bioAr: "قائدة تصميم سابقة بخبرة ١٠+ سنوات في بناء تطبيقات الهواتف وأنظمة الواجهات في أوروبا والشرق الأوسط.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
      specialization: "UX Research & Design Systems",
      specializationAr: "أبحاث تجربة المستخدم وأنظمة التصميم"
    }
  ],

  insights: [
    {
      id: "1",
      title: "Top Programming Languages Demanded by UAE Tech Recruiters in 2026",
      titleAr: "أبرز لغات البرمجة الأكثر طلباً من قِبل شركات التقنية بالإمارات في ٢٠٢٦",
      category: "Market Trends",
      categoryAr: "اتجاهات السوق",
      readTime: "5 min read",
      readTimeAr: "٥ دقائق للقراءة",
      date: "May 2026",
      dateAr: "مايو ٢٠٢٦",
      summary: "An in-depth analysis of hiring demand across TypeScript, Python, Go, and SQL in Dubai Internet City and Abu Dhabi Hub71.",
      summaryAr: "تحليل دقيق لطلب التوظيف على لغات TypeScript و Python و Go و SQL في مدينة دبي للإنترنت و Hub71 بأبوظبي.",
      content: [
        "The UAE's aggressive push toward an AI-driven digital economy has dramatically increased demand for developers who master TypeScript and Python.",
        "TypeScript has become the non-negotiable standard for frontend and full-stack web roles, while Python powers the rapid adoption of enterprise AI and data pipelines.",
        "Companies in DIFC and ADGM are actively seeking engineers who understand modern cloud deployment (Docker, AWS, Kubernetes) alongside core coding skills.",
        "Candidates with deployed full-stack portfolio projects command starting salary premiums of 30% to 45% over applicants with only theoretical backgrounds."
      ],
      contentAr: [
        "أدى التوجه المتسارع لدولة الإمارات نحو الاقتصاد الرقمي المدعوم بالذكاء الاصطناعي إلى قفزة نوعية في الطلب على مطوري TypeScript و Python.",
        "أصبحت لغة TypeScript المعيار الأساسي لتطوير تطبيقات الويب الحديثة، بينما تقود Python مشهد حلول الذكاء الاصطناعي وخطوط معالجة البيانات.",
        "تبحث الشركات في مركز دبي المالي العالمي وسوق أبوظبي العالمي عن مهندسين يجمعون بين إتقان الكود وخبرات النشر السحابي (Docker و AWS).",
        "يحظى المتقدمون الذين يمتلكون ملفات أعمال برمجية بمشاريع حية منشورة بزيادات في الرواتب المبدئية تتراوح بين ٣٠٪ إلى ٤٥٪ مقارنة بالخريجين التقليديين."
      ]
    },
    {
      id: "2",
      title: "How to Switch Careers to Software Engineering Without a CS Degree",
      titleAr: "كيف تنتقل لمهنة هندسة البرمجيات بنجاح دون الحاجة لشهادة علوم حاسب",
      category: "Career Switchers",
      categoryAr: "التحول المهني",
      readTime: "6 min read",
      readTimeAr: "٦ دقائق للقراءة",
      date: "Apr 2026",
      dateAr: "أبريل ٢٠٢٦",
      summary: "A practical roadmap for professionals making the jump into tech via immersive bootcamps, git commits, and deployed capstones.",
      summaryAr: "خارطة طريق عملية للمهنيين للانتقال إلى قطاع التقنية عبر المعسكرات المكثفة وبناء ملف مشاريع برمجية حقيقي.",
      content: [
        "Modern tech companies evaluate engineering candidates on proof of capability—clean GitHub code, live web apps, and problem-solving agility—rather than paper degrees.",
        "The fastest path to job-readiness is an immersive, sprint-based bootcamp that mirrors real agile workplace dynamics.",
        "Focus on building deep proficiency in one modern stack (such as Next.js and TypeScript) before expanding into auxiliary tools.",
        "Pair technical skills with deliberate mock interview practice to articulate architectural trade-offs during live technical rounds."
      ],
      contentAr: [
        "تعتمد شركات التقنية الحديثة في تقييم المبرمجين على إثبات الكفاءة العملية—كود GitHub النظيف، التطبيقات الحية، وحل المشكلات—بدلاً من الشهادات الورقية.",
        "المسار الأسرع للجاهزية الوظيفية هو المعسكرات التدريبية المكثفة التي تحاكي بيئات العمل الحقيقية ودورات السبرنت المرنة.",
        "ركز على بناء إتقان عميق لحزمة تقنية حديثة واحدة (مثل Next.js و TypeScript) قبل التشتت في أدوات متعددة.",
        "ادمج المهارات البرمجية مع التدريب المكثف على مقابلات البرمجة الحية لشرح اختياراتك المعمارية بثقة أمام مدراء التقنية."
      ]
    },
    {
      id: "3",
      title: "How to Ace the Technical Live-Coding Interview in Dubai",
      titleAr: "كيف تجتاز المقابلة البرمجية الحية (Live Coding) في دبي بنجاح تام",
      category: "Interview Prep",
      categoryAr: "إعداد المقابلات",
      readTime: "4 min read",
      readTimeAr: "٤ دقائق للقراءة",
      date: "Apr 2026",
      dateAr: "أبريل ٢٠٢٦",
      summary: "Strategies for tackling whiteboarding, algorithm puzzles, and system design questions at GCC tech companies.",
      summaryAr: "استراتيجيات عملية للتعامل مع البرمجة على السبورة البيضاء، وحل الألغاز الخوارزمية، وأسئلة تصميم الأنظمة بالخليج.",
      content: [
        "Live technical interviews are designed to observe how you think through ambiguity, handle edge cases, and communicate with your peers.",
        "Always talk out loud while coding: state your assumptions, explain your chosen data structures, and discuss time/space complexity (Big-O).",
        "Write modular, readable code with clean variable naming rather than attempting overly clever one-liners.",
        "At CODEFORGE, every student completes over 20 hours of simulated technical whiteboarding interviews before attending their first hiring round."
      ],
      contentAr: [
        "صُممت المقابلات البرمجية الحية لمعاينة طريقة تفكيرك تحت الضغط، وكيفية تعاملك مع الحالات النادرة (Edge cases)، والتواصل مع الفريق.",
        "تحدث بصوت مسموع أثناء كتابة الكود: وضّح افتراضاتك، وبرر اختيارك لهياكل البيانات، وناقش التعقيد الزمني والمكاني (Big-O).",
        "اكتب كوداً مقروءاً ومقسماً لوحدات بأسماء متغيرات واضحة بدلاً من محاولة كتابة سطور معقدة يصعب تتبعها.",
        "في كود فورج، يجتاز كل طالب أكثر من ٢٠ ساعة من محاكاة المقابلات الحية والبرمجة على السبورة البيضاء قبل التقديم على الوظائف."
      ]
    },
    {
      id: "4",
      title: "Building a Standout GitHub Portfolio That Hiring Managers Notice",
      titleAr: "بناء ملف أعمال GitHub احترافي يلفت أنظار مدراء التوظيف والتقنية",
      category: "Portfolio Guide",
      categoryAr: "دليل ملف الأعمال",
      readTime: "7 min read",
      readTimeAr: "٧ دقائق للقراءة",
      date: "Mar 2026",
      dateAr: "مارس ٢٠٢٦",
      summary: "Why clean commit logs, deployed live URLs, and comprehensive READMEs make your developer application stand out immediately.",
      summaryAr: "لماذا تمنحك سجلات الالتزام المنظمة (Commits) والروابط الحية وملفات README المفصلة ميزة تنافسية كبرى.",
      content: [
        "Hiring managers spend less than 90 seconds scanning a junior developer's portfolio before deciding whether to invite them for an interview.",
        "Ensure every project has a working live demo link, responsive mobile layouts, and a comprehensive README detailing architecture, tech stack, and setup steps.",
        "Include video walkthroughs or GIFs showing complex user flows and database interactions directly in your repository.",
        "Maintain a green contribution graph with meaningful, atomic commit messages that prove continuous coding consistency."
      ],
      contentAr: [
        "يقضي مدراء التوظيف أقل من ٩٠ ثانية في مراجعة ملف أعمال المطور قبل اتخاذ قرار دعوته للمقابلة التقنية.",
        "تأكد من وجود رابط تجريبي حي لكل مشروع، وتصميم متجاوب مع الهواتف، وملف README تفصيلي يوضح المعمارية وخطوات التشغيل.",
        "أضف مقاطع فيديو قصيرة أو صور متحركة (GIFs) توضح تجربة المستخدم وتفاعل قواعد البيانات داخل المستودع البرمجي.",
        "حافظ على سجل مساهمات برمجية نشط برسائل التزام (Commits) واضحة تثبت استمرارية شغفك وتطورك البرمجي."
      ]
    },
    {
      id: "5",
      title: "The Rise of AI Engineering Roles Across the Middle East",
      titleAr: "النمو المتسارع لوظائف هندسة الذكاء الاصطناعي في الشرق الأوسط",
      category: "AI & Data",
      categoryAr: "الذكاء الاصطناعي",
      readTime: "5 min read",
      readTimeAr: "٥ دقائق للقراءة",
      date: "Mar 2026",
      dateAr: "مارس ٢٠٢٦",
      summary: "How generative AI, LangChain, and LLM integrations are opening lucrative new technical career pathways for developers.",
      summaryAr: "كيف تفتح أدوات الذكاء الاصطناعي التوليدي و LangChain ودمج النماذج اللغوية مسارات وظيفية مجزية للمطورين.",
      content: [
        "Enterprises across Dubai and Abu Dhabi are racing to deploy custom AI agents, automated customer chatbots, and internal knowledge retrieval systems.",
        "AI Engineers who know how to connect LLMs to company databases via LangChain, FastAPI, and vector search (pgvector) are seeing unprecedented demand.",
        "These roles bridge the gap between traditional software engineering and pure data science, commanding top compensation packages in the region.",
        "CODEFORGE's Data Science & AI track dedicates 6 full weeks to generative AI workflows, agent building, and model evaluation."
      ],
      contentAr: [
        "تتسابق الشركات في دبي وأبوظبي لنشر وكلاء ذكاء اصطناعي مخصصين، وروبوتات محادثة ذكية، وأنظمة استرجاع المعرفة المؤسسية.",
        "يشهد مهندسو الذكاء الاصطناعي القادرون على ربط النماذج اللغوية بقواعد البيانات عبر LangChain و FastAPI طلباً غير مسبوق.",
        "تجمع هذه الوظائف بين هندسة البرمجيات التقليدية وعلوم البيانات، وتحظى بأعلى حزم الرواتب والمكافآت في المنطقة.",
        "يخصص مسار الذكاء الاصطناعي في كود فورج ٦ أسابيع كاملة لتطبيقات الذكاء الاصطناعي التوليدي وبناء الوكلاء وتقييم النماذج."
      ]
    },
    {
      id: "6",
      title: "Full-Time vs Part-Time Bootcamp: Which Fits Your Schedule?",
      titleAr: "المعسكر المكثف بدوام كامل مقابل الدوام الجزئي: أيهما أنسب لجدولك؟",
      category: "Learning Strategy",
      categoryAr: "استراتيجيات التعلم",
      readTime: "4 min read",
      readTimeAr: "٤ دقائق للقراءة",
      date: "Feb 2026",
      dateAr: "فبراير ٢٠٢٦",
      summary: "Comparing intensive 16-week immersive bootcamps with flexible 24-week evening tracks for working professionals.",
      summaryAr: "مقارنة شاملة بين المعسكرات المكثفة لمدة ١٦ أسبوعاً والمسارات المسائية المرنة لمدة ٢٤ أسبوعاً للموظفين.",
      content: [
        "Choosing between full-time immersion and part-time evening study depends primarily on your financial runway and daily work commitments.",
        "Full-time bootcamps offer intense, distraction-free immersion (40+ hours/week) that compresses 2 years of learning into 4 months.",
        "Part-time tracks allow working professionals to upskill and build a portfolio without quitting their current job, spreading the curriculum over evening labs.",
        "Both formats receive the exact same 1-on-1 code reviews, capstone showcase opportunities, and dedicated career placement support."
      ],
      contentAr: [
        "يعتمد الاختيار بين التفرغ التام للمعسكر والدراسة المسائية الجزئية على التزاماتك المالية والوظيفية اليومية.",
        "توفر المعسكرات بدوام كامل تجربة غامرة ومكثفة (٤٠+ ساعة أسبوعياً) تختصر عامين من التعلم الذاتي في ٤ أشهر فقط.",
        "تتيح المسارات المسائية للموظفين تطوير مهاراتهم وبناء ملف أعمالهم البرمجية دون الحاجة لترك وظائفهم الحالية.",
        "يحصل كلا المسارين على نفس جودة مراجعات الكود الفردية، وفرص عرض المشاريع، والدعم الكامل للتوظيف المهني."
      ]
    }
  ],

  locations: [
    {
      id: "dubai",
      city: "DUBAI",
      cityAr: "دبي",
      name: "Internet City — Tech Campus",
      nameAr: "مدينة دبي للإنترنت — المقر التقني الرئيسي",
      address: "Building 3, Level 2, Dubai Internet City, Dubai, UAE",
      addressAr: "المبنى ٣، الطابق الثاني، مدينة دبي للإنترنت، دبي، الإمارات",
      phone: "+971 4 700 89120",
      hours: "Mon – Fri: 8:30 AM – 9:00 PM | Sat: 9:00 AM – 6:00 PM",
      hoursAr: "الإثنين – الجمعة: ٨:٣٠ ص – ٩:٠٠ م | السبت: ٩:٠٠ ص – ٦:٠٠ م",
      features: [
        "High-Spec Developer Workstations (32GB RAM)",
        "Dual 4K Monitor Developer Pods",
        "Fiber Gigabit Ultra-Fast Campus Wi-Fi",
        "Direct Dubai Metro Red Line Access",
        "Dedicated Pair-Programming Booths",
        "24/7 Hacker Lounge & Free Flow Coffee"
      ],
      featuresAr: [
        "محطات عمل برمجية فائقة الأداء (٣٢ جيجابايت رام)",
        "شاشات 4K مزدوجة لكل مطور",
        "إنترنت فائق السرعة عبر الألياف الضوئية",
        "موقع استراتيجي متصل بمترو دبي (الخط الأحمر)",
        "كبائن مخصصة للبرمجة الثنائية (Pair Programming)",
        "صالة مطورين مفتوحة على مدار الساعة مع قهوة مجانية"
      ]
    },
    {
      id: "abudhabi",
      city: "ABU DHABI",
      cityAr: "أبوظبي",
      name: "Hub71 Innovation Center",
      nameAr: "مركز Hub71 للابتكار والتقنية",
      address: "Al Khatem Tower, Level 15, ADGM Square, Al Maryah Island, Abu Dhabi, UAE",
      addressAr: "برج الخاتم، الطابق ١٥، مربعة سوق أبوظبي العالمي، جزيرة المارية، أبوظبي، الإمارات",
      phone: "+971 2 500 78200",
      hours: "Mon – Fri: 8:30 AM – 9:00 PM | Sat: 9:00 AM – 6:00 PM",
      hoursAr: "الإثنين – الجمعة: ٨:٣٠ ص – ٩:٠٠ م | السبت: ٩:٠٠ ص – ٦:٠٠ م",
      features: [
        "Tech Startup & Scaleup Ecosystem",
        "Private Hackathon Simulation Suites",
        "High-Definition Tech Keynote Theater",
        "Panoramic Financial District Views",
        "Direct ADGM Tech Founder Networking",
        "Valet Parking & Executive Concierge"
      ],
      featuresAr: [
        "بيئة محفزة وسط الشركات التقنية الناشئة والصاعدة",
        "أجنحة خاصة لمحاكاة مسابقات الهاكاثون البرمجية",
        "مسرح عروض تقنية مجهز بأحدث أنظمة البث",
        "إطلالات بانورامية على المركز المالي بأبوظبي",
        "تواصل مباشر مع مؤسسي الشركات التقنية في ADGM",
        "خدمة صف السيارات ومكتب استقبال مخصص"
      ]
    }
  ],

  testimonials: [
    {
      quote: "CODEFORGE completely changed my career trajectory. I went from zero coding knowledge to landing a Software Engineer role at a Dubai FinTech within 40 days of graduation.",
      quoteAr: "غيّر كود فورج مساري المهني بالكامل. تحولت من صفر معرفة بالبرمجة إلى وظيفة مهندس برمجيات في منصة تقنية مالية بدبي خلال ٤٠ يوماً من التخرج.",
      author: "Tariq Al-Mansoor",
      authorAr: "طارق المنصور",
      role: "Software Engineer",
      roleAr: "مهندس برمجيات",
      company: "FinEdge UAE",
      location: "Dubai Internet City",
      locationAr: "مقر دبي للإنترنت",
      rating: 5,
      program: "Full-Stack Software Engineering",
      programAr: "هندسة البرمجيات المتكاملة",
      salaryOutcome: "AED 22,000 / mo",
      salaryOutcomeAr: "٢٢,٠٠٠ د.إ / شهرياً"
    },
    {
      quote: "The AI & Data Science bootcamp was intense, practical, and highly focused on production ML pipelines. The career team helped me polish my GitHub and portfolio immensely.",
      quoteAr: "كان معسكر الذكاء الاصطناعي مكثفاً وعملياً ويركز على بناء خطوط تعلم الآلة الحقيقية. ساعدني فريق التوظيف على تطوير ملف GitHub وسيرتي الذاتية بشكل مذهل.",
      author: "Elena Rostova",
      authorAr: "إيلينا روستوفا",
      role: "AI & Data Scientist",
      roleAr: "عالمة بيانات وذكاء اصطناعي",
      company: "Vertex AI",
      location: "Abu Dhabi Hub71",
      locationAr: "مركز Hub71 بأبوظبي",
      rating: 5,
      program: "Data Science & AI Engineering",
      programAr: "علوم البيانات والذكاء الاصطناعي",
      salaryOutcome: "AED 24,500 / mo",
      salaryOutcomeAr: "٢٤,٥٠٠ د.إ / شهرياً"
    },
    {
      quote: "Working in agile sprint teams during the capstone gave me exact real-world project experience. I passed my technical live-coding interview on the first attempt!",
      quoteAr: "منحني العمل ضمن فرق سكرام في مشروع التخرج خبرة بيئة العمل الحقيقية بدقة. اجتزت المقابلة التقنية الحية من أول محاولة دون أي تردد!",
      author: "Marcus Vance",
      authorAr: "ماركوس فانس",
      role: "Frontend Engineer",
      roleAr: "مهندس واجهات أمامية",
      company: "CloudScale UAE",
      location: "Hybrid Track",
      locationAr: "المسار المدمج",
      rating: 5,
      program: "Full-Stack Software Engineering",
      programAr: "هندسة البرمجيات المتكاملة",
      salaryOutcome: "AED 19,000 / mo",
      salaryOutcomeAr: "١٩,٠٠٠ د.إ / شهرياً"
    },
    {
      quote: "As a product manager, taking the UX/UI course helped me communicate effectively with engineers and design world-class mobile app wireframes in Figma.",
      quoteAr: "كمديرة منتج، ساعدني معسكر UX/UI على التواصل بفعالية عالية مع المطورين وتصميم نماذج تفاعلية بمعايير عالمية على Figma.",
      author: "Reem Al Hashimi",
      authorAr: "ريم الهاشمي",
      role: "Senior Product Manager",
      roleAr: "مديرة منتجات أولى",
      company: "Orbit Tech",
      location: "Online Track",
      locationAr: "المسار الافتراضي",
      rating: 5,
      program: "UX/UI Design & Product Systems",
      programAr: "تصميم تجربة وواجهة المستخدم",
      salaryOutcome: "AED 26,000 / mo",
      salaryOutcomeAr: "٢٦,٠٠٠ د.إ / شهرياً"
    },
    {
      quote: "The 1-on-1 mentorship from active senior developers was worth every dirham. They reviewed my code PRs and taught me production cloud architecture best practices.",
      quoteAr: "كان التوجيه الفردي من كبار المطورين يستحق كل درهم. راجعوا طلبات الدمج (PRs) الخاصة بي وعلّموني أفضل ممارسات معمارية السحابة في بيئات الإنتاج.",
      author: "David Chen",
      authorAr: "ديفيد تشن",
      role: "DevOps & Cloud Associate",
      roleAr: "أخصائي الحوسبة السحابية و DevOps",
      company: "Nexus Labs",
      location: "Dubai Campus",
      locationAr: "مقر دبي",
      rating: 5,
      program: "Cyber Security & Cloud Ops",
      programAr: "الأمن السيبراني وعمليات السحابة",
      salaryOutcome: "AED 20,500 / mo",
      salaryOutcomeAr: "٢٠,٥٠٠ د.إ / شهرياً"
    }
  ],

  faq: [
    {
      category: "Prerequisites & Entry",
      question: "Do I need prior coding experience to join CODEFORGE?",
      questionAr: "هل أحتاج إلى خبرة برمجية سابقة للانضمام إلى كود فورج؟",
      answer: "No. Our Full-Stack Engineering and UX/UI programs are beginner-friendly and start with fundamental programming concepts before advancing to production frameworks. We provide a pre-bootcamp prep module to get everyone up to speed.",
      answerAr: "لا. صُممت برامج هندسة البرمجيات وتصميم الواجهات لتناسب المبتدئين تماماً، حيث تبدأ من المفاهيم الأساسية قبل الانتقال لأطر العمل الإنتاجية. كما نوفر وحدة تحضيرية تسبق المعسكر لضمان انطلاقة متساوية للجميع."
    },
    {
      category: "Placement & Outcomes",
      question: "What is your graduate job placement rate?",
      questionAr: "كم تبلغ نسبة توظيف الخريجين في الوظائف التقنية؟",
      answer: "88% of our job-seeking graduates secure full-time software engineering or tech roles within 180 days of graduation, with an average starting monthly salary of AED 18,500.",
      answerAr: "يحصل ٨٨٪ من خريجينا الباحثين عن عمل على وظائف هندسية وتقنية بدوام كامل خلال ١٨٠ يوماً من التخرج، بمتوسط راتب شهري مبدئي يبلغ ١٨,٥٠٠ درهم إماراتي."
    },
    {
      category: "Tuition & Installments",
      question: "Do you offer flexible payment plans or 0% tuition installments?",
      questionAr: "هل توفرون خطط سداد ميسرة أو تقسيط الرسوم بدون أي فوائد؟",
      answer: "Yes. We offer 0% interest monthly installment plans (up to 6 months) through UAE banking partners, as well as employer sponsorship options.",
      answerAr: "نعم. نوفر خطط تقسيط شهرية بدون أي فوائد (تصل حتى ٦ أشهر) عبر شركائنا من البنوك في الدولة، بالإضافة إلى خيارات رعاية جهات العمل."
    },
    {
      category: "Schedule & Formats",
      question: "What is the difference between Full-Time and Part-Time bootcamps?",
      questionAr: "ما هو الفرق بين المعسكرات بدوام كامل والدوام الجزئي؟",
      answer: "Full-Time bootcamps run 5 days a week (9:00 AM - 5:00 PM) for 12-16 weeks. Part-Time bootcamps run on weekday evenings and weekends for 12-14 weeks, allowing you to learn while keeping your current job.",
      answerAr: "تعمل المعسكرات بدوام كامل ٥ أيام أسبوعياً (٩:٠٠ ص - ٥:٠٠ م) لمدة ١٢-١٦ أسبوعاً. بينما تُعقد معسكرات الدوام الجزئي في الأمسيات وعطلات نهاية الأسبوع، مما يتيح لك التعلم دون ترك وظيفتك الحالية."
    },
    {
      category: "Hardware Requirements",
      question: "Do I need my own laptop for coding labs?",
      questionAr: "هل يجب أن أحضر جهازي المحمول الخاص لحضور المختبرات؟",
      answer: "Yes. Students are required to bring a modern laptop (macOS, Windows 11, or Linux) with at least 16GB RAM for local development and Docker containerization environments.",
      answerAr: "نعم. يُشترط إحضار جهاز كمبيوتر محمول حديث (نظام macOS أو Windows 11 أو Linux) بذاكرة وصول عشوائي (RAM) لا تقل عن ١٦ جيجابايت لتشغيل بيئات التطوير وحاويات Docker."
    },
    {
      category: "Campus & Modalities",
      question: "Are courses taught in-person or live online?",
      questionAr: "هل يُقدم التدريب حضورياً في المقر أم عبر البث المباشر؟",
      answer: "We offer both! You can attend in-person at our Dubai Internet City campus or Abu Dhabi Hub71 center, or join our live interactive virtual cohorts with real-time screen sharing and pair programming.",
      answerAr: "نوفر كلا الخيارين! يمكنك الحضور في قاعاتنا بمدينة دبي للإنترنت أو مركز Hub71 بأبوظبي، أو الانضمام للبث التفاعلي المباشر مع مشاركة الشاشات والبرمجة الثنائية."
    },
    {
      category: "Mentors & Faculty",
      question: "Who are the instructors and mentors?",
      questionAr: "من هم المدربون والموجهون المشرفون على المعسكرات؟",
      answer: "Our instructors are active senior software engineers, data scientists, and design leads from top UAE and international tech companies with 8+ years of production experience.",
      answerAr: "مدربونا هم كبار مهندسي البرمجيات وعلماء البيانات ومدراء التصميم الممارسون في كبرى شركات التقنية بالدولة بخبرة ميدانية نشطة تتجاوز ٨ سنوات."
    },
    {
      category: "Credentials",
      question: "Will I receive an official certificate upon graduation?",
      questionAr: "هل سأحصل على شهادة معتمدة ورسمية عند التخرج؟",
      answer: "Yes. Graduates who complete all sprint projects, pass code reviews, and present a final production capstone receive an official CODEFORGE Professional Technology Certification and LinkedIn credential.",
      answerAr: "نعم. يحصل الخريجون الذين يتمون كافة مشاريع السبرنت ويجتازون مراجعات الكود ويناقشون مشروع التخرج على شهادة كود فورج المهنية المعتمدة وشارة رقمية لملف لينكد إن."
    },
    {
      category: "Career Support",
      question: "How does the 1-on-1 Career Support work?",
      questionAr: "كيف تعمل خدمة الدعم والتوجيه المهني الفردي؟",
      answer: "Our dedicated tech career coaches provide 1-on-1 resume reviews, GitHub portfolio audits, mock live-coding whiteboarding interviews, and direct introductions to our hiring partner network.",
      answerAr: "يقدم مستشارونا المهنيون جلسات فردية لمراجعة السيرة الذاتية، وتدقيق ملفات GitHub، ومحاكاة المقابلات البرمجية، وتسهيل المقابلات المباشرة مع شبكة شركاء التوظيف."
    },
    {
      category: "Admissions Process",
      question: "How do I apply for an upcoming cohort?",
      questionAr: "كيف أقدم طلبي لحجز مقعد في الدفعة القادمة؟",
      answer: "Click 'Apply Now', choose your engineering track of interest, and submit the brief application. Our admissions team will reach out within 2 hours to schedule your technical readiness conversation.",
      answerAr: "اضغط على 'التقديم الآن'، واختر المسار البرمجي المناسب، وأرسل النموذج. سيتواصل معك فريق القبول خلال ساعتين لتحديد موعد مكالمة الجاهزية والتقييم الأولي."
    }
  ]
};
