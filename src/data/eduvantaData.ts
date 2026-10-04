export interface CourseItem {
  id: string;
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  duration: string;
  durationAr: string;
  hours: number;
  format: 'Hybrid' | 'In-Person' | 'Online';
  price: string;
  numericPrice: number;
  description: string;
  descriptionAr: string;
  outcome: string;
  outcomeAr: string;
  targetAudience: string;
  targetAudienceAr: string;
  syllabus: string[];
  syllabusAr: string[];
  certification: string;
  certificationAr: string;
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
  title: string;
  titleAr: string;
  location: string;
  locationAr: string;
  rating: number;
  course: string;
  courseAr: string;
  outcomeMetric: string;
  outcomeMetricAr: string;
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
  learnerAdvantage: string;
  learnerAdvantageAr: string;
  enterpriseValue: string;
  enterpriseValueAr: string;
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

export const EDUVANTA_DATA = {
  brand: "EDUVANTA",
  brandAr: "إدوفانتا",
  tagline: "Skills That Move Careers Forward.",
  taglineAr: "مهارات تدفع مسارك المهني للأمام فعلياً.",
  positioning: "Premium UAE Professional Training & Certification Institute",
  positioningAr: "المعهد الرائد للتدريب والشهادات المهنية والتعليم التنفيذي في دولة الإمارات",
  phone: "+971 4 900 78210",
  phoneDisplay: "+971 4 900 78210",
  whatsapp: "https://wa.me/9715090078210",
  whatsappNumber: "+971 50 900 78210",
  email: "admissions@eduvanta.ae",
  
  trustLogos: [
    { name: "NOVA GROUP", tag: "Enterprise Retail UAE", tagAr: "مجموعة تجزئة كبرى بالإمارات" },
    { name: "PEOPLEWORKS", tag: "Human Resources Advisory", tagAr: "استشارات الموارد البشرية" },
    { name: "ORBIT TECH", tag: "Cloud Solutions GCC", tagAr: "حلول الحوسبة السحابية بالخليج" },
    { name: "NEXUS IT", tag: "Digital Transformation", tagAr: "التحول الرقمي المؤسسي" }
  ],

  courses: [
    {
      id: "pm-prep",
      title: "Project Management Certification Prep",
      titleAr: "الإعداد لشهادة إدارة المشاريع الاحترافية",
      category: "Project Management",
      categoryAr: "إدارة المشاريع",
      duration: "6 Weeks (48 Hours)",
      durationAr: "٦ أسابيع (٤٨ ساعة)",
      hours: 48,
      format: "Hybrid" as const,
      price: "AED 4,500",
      numericPrice: 4500,
      description: "Comprehensive preparation covering Agile frameworks, risk governance, procurement control, and stakeholder alignment tailored to UAE infrastructure and high-velocity tech initiatives.",
      descriptionAr: "برنامج إعداد متكامل يغطي أطر عمل الأجايل، وحوكمة المخاطر، وإدارة المشتريات والتواصل مع أصحاب المصلحة، مصمم خصيصاً لمشاريع البنية التحتية والتقنية في الإمارات.",
      outcome: "Equips project managers to direct multi-million AED budgets with audit-grade delivery standards.",
      outcomeAr: "يؤهل مديري المشاريع لقيادة ميزانيات بملايين الدراهم وفق أعلى معايير الحوكمة والتسليم.",
      targetAudience: "Project Managers, Site Engineers, Scrum Masters, PMO Specialists",
      targetAudienceAr: "مديرو المشاريع، مهندسو المواقع، ممارسو السكرام، وأخصائيو مكاتب إدارة المشاريع (PMO)",
      syllabus: [
        "Module 1: Project Integration & Scope Definition Frameworks",
        "Module 2: Schedule, Budget & Cost Control in UAE Enterprise Context",
        "Module 3: Enterprise Risk Assessment & Risk Matrix Modeling",
        "Module 4: Hybrid Agile vs Waterfall Delivery Strategies",
        "Module 5: Stakeholder Diplomacy, Contracts & Procurement Governance",
        "Module 6: Mock Examination & Live Multi-Phased Capstone Defense"
      ],
      syllabusAr: [
        "الوحدة الأولى: تكامل المشاريع وأطر تحديد النطاق المؤسسي",
        "الوحدة الثانية: الجدولة الزمنية، وإدارة التكاليف في سياق الشركات الإماراتية",
        "الوحدة الثالثة: تقييم المخاطر المؤسسية ونمذجة مصفوفات التحوط",
        "الوحدة الرابعة: استراتيجيات التسليم الهجين (بين الأجايل والشلال)",
        "الوحدة الخامسة: التفاوض مع أصحاب المصلحة وحوكمة العقود والمشتريات",
        "الوحدة السادسة: محاكاة الامتحان الشامل ومناقشة مشروع التخرج التطبيقي"
      ],
      certification: "EDUVANTA Certified Project Practitioner (ECPP)",
      certificationAr: "شهادة ممارس إدارة المشاريع المعتمد من إدوفانتا (ECPP)",
      recommendedFor: ["promotion", "certification", "operations", "tech"]
    },
    {
      id: "leadership-exec",
      title: "Leadership & Executive Management Diploma",
      titleAr: "دبلوم القيادة والإدارة التنفيذية المتقدمة",
      category: "Leadership",
      categoryAr: "القيادة والإدارة",
      duration: "8 Weeks (64 Hours)",
      durationAr: "٨ أسابيع (٦٤ ساعة)",
      hours: 64,
      format: "In-Person" as const,
      price: "AED 6,800",
      numericPrice: 6800,
      description: "Advanced executive leadership track focusing on strategic decision-making, organizational resilience, change management, and cross-cultural GCC boardroom stewardship.",
      descriptionAr: "مسار قيادي تنفيذي متقدم يركز على اتخاذ القرارات الاستراتيجية، والمرونة المؤسسية، وإدارة التغيير، وقيادة فرق العمل متعددة الثقافات في بيئات الأعمال الخليجية.",
      outcome: "Prepares senior department managers for direct C-suite advancement and regional business unit leadership.",
      outcomeAr: "يُعد مديري الإدارات ورؤساء الأقسام للترقي المباشر إلى المناصب التنفيذية العليا ومجالس الإدارة.",
      targetAudience: "Department Heads, General Managers, Directors, C-Suite Successors",
      targetAudienceAr: "رؤساء الأقسام، المديرون العامون، أعضاء الإدارة العليا، ونواب الرؤساء التنفيذيين",
      syllabus: [
        "Module 1: Strategic Visioning & GCC Market Positioning Architecture",
        "Module 2: Emotional Intelligence & High-Performance Team Culture",
        "Module 3: Change Leadership & Organizational Turnaround Strategy",
        "Module 4: Financial Stewardship & P&L Mastery for Non-Finance Leaders",
        "Module 5: Negotiation, Persuasion & Boardroom Communication Mastery",
        "Module 6: 1-on-1 Executive Coaching & Personal Leadership Blueprint"
      ],
      syllabusAr: [
        "الوحدة الأولى: صياغة الرؤية الاستراتيجية والتموضع في السوق الخليجي",
        "الوحدة الثانية: الذكاء العاطفي وبناء ثقافة الأداء الاستثنائي",
        "الوحدة الثالثة: قيادة التغيير واستراتيجيات التحول المؤسسي",
        "الوحدة الرابعة: الإدارة المالية وقراءة الميزانيات للقادة غير الماليين",
        "الوحدة الخامسة: فنون التفاوض والإقناع وعرض الاستراتيجيات أمام مجلس الإدارة",
        "الوحدة السادسة: جلسات توجيه تنفيذي فردية وصياغة المخطط القيادي الشخصي"
      ],
      certification: "EDUVANTA Executive Leadership Diploma (EELD)",
      certificationAr: "دبلوم القيادة التنفيذية العليا من إدوفانتا (EELD)",
      recommendedFor: ["leadership", "promotion", "business", "operations"]
    },
    {
      id: "digital-marketing-growth",
      title: "Digital Marketing & Growth Certification",
      titleAr: "شهادة التسويق الرقمي ونمو المبيعات المتسارع",
      category: "Digital Marketing",
      categoryAr: "التسويق الرقمي",
      duration: "5 Weeks (35 Hours)",
      durationAr: "٥ أسابيع (٣٥ ساعة)",
      hours: 35,
      format: "Online" as const,
      price: "AED 3,900",
      numericPrice: 3900,
      description: "Hands-on growth marketing certification covering paid acquisition across GCC channels, SEO, conversion rate optimization (CRO), GA4 analytics, and customer retention systems.",
      descriptionAr: "شهادة عملية في استراتيجيات النمو الرقمي تغطي الحملات الإعلانية المدفوعة في الخليج، وتحسين محركات البحث، ومعدل التحويل (CRO)، وتحليلات GA4 المتقدمة.",
      outcome: "Empowers marketers to scale customer acquisition channels with positive unit economics and measurable ROAS.",
      outcomeAr: "تمكّن مديري التسويق من مضاعفة قنوات استقطاب العملاء وتحقيق أعلى عائد على الإنفاق الإعلاني (ROAS).",
      targetAudience: "Marketing Managers, Growth Specialists, E-Commerce Directors, Founders",
      targetAudienceAr: "مديرو التسويق، أخصائيو النمو الرقمي، مديرو المتاجر الإلكترونية، ورواد الأعمال",
      syllabus: [
        "Module 1: Performance Media Buying (Meta, TikTok & Google Ads in GCC)",
        "Module 2: Technical SEO, Content Architecture & AI Workflow Integration",
        "Module 3: Conversion Rate Optimization (CRO), Heatmaps & Funnel Auditing",
        "Module 4: GA4 Analytics, Attribution Modeling & Multi-Touch Data Strategy",
        "Module 5: CRM Lifecycle Automation, Email Flows & WhatsApp Marketing",
        "Module 6: Live Growth Strategy Capstone Campaign Defense"
      ],
      syllabusAr: [
        "الوحدة الأولى: إدارة الحملات الإعلانية الممولة (ميتا، تيك توك، وجوجل في الخليج)",
        "الوحدة الثانية: السيو التقني وهيكلة المحتوى ودمج أدوات الذكاء الاصطناعي",
        "الوحدة الثالثة: تحسين معدل التحويل (CRO) وتدقيق مسارات الشراء (Funnels)",
        "الوحدة الرابعة: تحليلات GA4 المتقدمة ونماذج إسناد الإيرادات (Attribution)",
        "الوحدة الخامسة: أتمتة دورة حياة العملاء والتسويق عبر البريد والواتساب",
        "الوحدة السادسة: إطلاق ومناقشة حملة تسويقية حية لقياس نمو الأعمال"
      ],
      certification: "EDUVANTA Digital Growth Specialist (EDGS)",
      certificationAr: "شهادة أخصائي النمو الرقمي المعتمد من إدوفانتا (EDGS)",
      recommendedFor: ["techSkills", "careerChange", "marketing", "tech"]
    },
    {
      id: "corp-finance",
      title: "Corporate Finance & Financial Modeling",
      titleAr: "المالية المؤسسية وبناء النماذج المالية المتقدمة",
      category: "Finance",
      categoryAr: "المالية والمحاسبة",
      duration: "6 Weeks (42 Hours)",
      durationAr: "٦ أسابيع (٤٢ ساعة)",
      hours: 42,
      format: "In-Person" as const,
      price: "AED 5,200",
      numericPrice: 5200,
      description: "Master financial statement deconstruction, discounted cash flow (DCF) valuation, M&A transaction structuring, and UAE Corporate Tax & VAT financial compliance.",
      descriptionAr: "إتقان تحليل القوائم المالية، والتقييم بالتدفقات النقدية المخصومة (DCF)، وهيكلة صفقات الاستحواذ والاندماج، والامتثال لضريبة الشركات في دولة الإمارات.",
      outcome: "Build boardroom-ready dynamic financial models that guide high-stakes capital allocation decisions.",
      outcomeAr: "بناء نماذج مالية ديناميكية جاهزة لمجالس الإدارة لدعم قرارات الاستثمار والتمويل الاستراتيجي.",
      targetAudience: "Financial Analysts, Senior Accountants, Investment Associates, FP&A Leads",
      targetAudienceAr: "المحللون الماليون، كبار المحاسبين، مسؤولو الاستثمار، ومديرو التخطيط المالي (FP&A)",
      syllabus: [
        "Module 1: Advanced Financial Statement Analysis & Ratio Deconstruction",
        "Module 2: Dynamic 3-Statement Excel Financial Modeling Best Practices",
        "Module 3: Valuation Methodologies (DCF, Trading Multiples, LBO Analysis)",
        "Module 4: UAE Corporate Tax (9%), VAT Accounting & Tax Shield Modeling",
        "Module 5: Working Capital Optimization, Debt Structuring & Treasury Strategy",
        "Module 6: Live Acquisition Deal Financial Model & Valuation Defense"
      ],
      syllabusAr: [
        "الوحدة الأولى: التحليل المالي المتقدم وتفكيك المؤشرات والنسب المحاسبية",
        "الوحدة الثانية: بناء النماذج المالية الثلاثية الديناميكية على إكسل",
        "الوحدة الثالثة: منهجيات تقييم الشركات (DCF، مضاعفات السوق، وصفقات LBO)",
        "الوحدة الرابعة: ضريبة الشركات في الإمارات (٩٪) وحسابات القيمة المضافة والدرع الضريبي",
        "الوحدة الخامسة: إدارة رأس المال العامل وهيكلة الديون وإدارة الخزينة",
        "الوحدة السادسة: بناء ومناقشة نموذج مالي متكامل لصفقة استحواذ واقعية"
      ],
      certification: "EDUVANTA Certified Financial Analyst (ECFA)",
      certificationAr: "شهادة المحلل المالي المؤسسي المعتمد من إدوفانتا (ECFA)",
      recommendedFor: ["promotion", "certification", "finance", "business"]
    },
    {
      id: "hr-management",
      title: "Strategic HR & Talent Management Certification",
      titleAr: "الموارد البشرية الاستراتيجية وإدارة المواهب",
      category: "HR",
      categoryAr: "الموارد البشرية",
      duration: "4 Weeks (28 Hours)",
      durationAr: "٤ أسابيع (٢٨ ساعة)",
      hours: 28,
      format: "Online" as const,
      price: "AED 3,600",
      numericPrice: 3600,
      description: "Modern people operations encompassing UAE Labor Law & MoHRE compliance, strategic workforce planning, Emiratization targets, and HR analytics.",
      descriptionAr: "إدارة حديثة لرأس المال البشري تشمل الامتثال لقانون العمل الإماراتي ولوائح وزارة الموارد البشرية والتوطين، والتخطيط الاستراتيجي للقوى العاملة، وتحليلات الموارد البشرية.",
      outcome: "Equips HR professionals to modernize talent pipelines and navigate regional labor legalities with zero liability.",
      outcomeAr: "يؤهل مسؤولي الموارد البشرية لتطوير استقطاب المواهب وإدارة الامتثال القانوني بكفاءة مطلقة.",
      targetAudience: "HR Generalists, Talent Acquisition Specialists, People Operations Heads",
      targetAudienceAr: "أخصائيو الموارد البشرية، مسؤولو استقطاب المواهب، ومديرو العمليات المؤسسية",
      syllabus: [
        "Module 1: UAE Labor Law Frameworks, Contracts & MoHRE Regulations",
        "Module 2: Strategic Workforce Planning, Succession & Emiratization Strategy",
        "Module 3: Total Rewards, KPI Architecture & Performance Management",
        "Module 4: People Analytics, HRIS Modernization & Digital HR Operations",
        "Module 5: Employee Experience, Engagement Strategy & Workplace Wellness",
        "Module 6: Comprehensive Corporate HR Audit & Policy Design Capstone"
      ],
      syllabusAr: [
        "الوحدة الأولى: أطر قانون العمل الإماراتي، العقود ولوائح وزارة الموارد البشرية والتوطين",
        "الوحدة الثانية: التخطيط الاستراتيجي للقوى العاملة، الإحلال الوظيفي ومستهدفات التوطين",
        "الوحدة الثالثة: هيكلة المزايا والتعويضات، ومؤشرات الأداء، وتقييم الكفاءات",
        "الوحدة الرابعة: تحليلات الموارد البشرية (People Analytics) ورقمنة العمليات",
        "الوحدة الخامسة: تعزيز تجربة الموظف، واستراتيجيات الولاء الوظيفي وبيئة العمل",
        "الوحدة السادسة: إعداد خطة تدقيق شاملة لسياسات الموارد البشرية المؤسسية"
      ],
      certification: "EDUVANTA Certified HR Professional (ECHRP)",
      certificationAr: "شهادة محترف الموارد البشرية المعتمد من إدوفانتا (ECHRP)",
      recommendedFor: ["careerChange", "certification", "hr", "business"]
    },
    {
      id: "agile-scrum",
      title: "Agile & Professional Scrum Master Track",
      titleAr: "المنهجيات المرنة وإعداد قائد السكرام المعتمد (Scrum Master)",
      category: "Project Management",
      categoryAr: "إدارة المشاريع",
      duration: "3 Weeks (21 Hours)",
      durationAr: "٣ أسابيع (٢١ ساعة)",
      hours: 21,
      format: "Online" as const,
      price: "AED 2,900",
      numericPrice: 2900,
      description: "Intensive Scrum Master track covering sprint architecture, backlog refinement, sprint retrospectives, velocity metrics, and enterprise Agile transformation.",
      descriptionAr: "برنامج تدريبي مكثف لقادة السكرام يغطي تخطيط دورات التطوير (Sprints)، وتنقيح سجل المهام، وإدارة جلسات المراجعة، ومقاييس سرعة الإنجاز والتحول الرقمي المرن.",
      outcome: "Enables facilitators to lead high-velocity software engineering and product teams with world-class Scrum practices.",
      outcomeAr: "يُمكّن قادة الفرق من إدارة وتوجيه فرق تطوير البرمجيات والمنتجات بأعلى سرعة وكفاءة.",
      targetAudience: "Scrum Masters, Product Owners, Engineering Team Leads, Project Leads",
      targetAudienceAr: "قادة السكرام، مالكو المنتجات الرقمية، قادة الفرق الهندسية، ومنسقو المشاريع",
      syllabus: [
        "Module 1: Agile Manifesto Core Values & Empirical Process Control",
        "Module 2: Roles & Accountabilities: Scrum Master, Product Owner & Developers",
        "Module 3: Sprint Ceremonies: Planning, Daily Standups, Reviews & Retros",
        "Module 4: Agile Metrics: Velocity Tracking, Burndown Charts & Release Forecasting",
        "Module 5: Scaling Agile Frameworks (Nexus / SAFe) in Enterprise Environments",
        "Module 6: Certified Scrum Master Practice Exam & Live Simulation"
      ],
      syllabusAr: [
        "الوحدة الأولى: المبادئ الجوهرية لمنهجية الأجايل والتحكم التجريبي في العمليات",
        "الوحدة الثانية: الأدوار والمسؤوليات: قائد السكرام، مالك المنتج، وفريق التطوير",
        "الوحدة الثالثة: الفعاليات الدورية: التخطيط، اللقاءات اليومية، المراجعة والاسترجاع",
        "الوحدة الرابعة: مقاييس الأجايل: تتبع سرعة الإنجاز والمنحنيات البيانية وتوقع الإصدارات",
        "الوحدة الخامسة: توسيع نطاق الأجايل في الشركات والمؤسسات الكبرى (Nexus / SAFe)",
        "الوحدة السادسة: محاكاة عملية شاملة واختبار تجريبي لنيل الشهادة المهنية"
      ],
      certification: "EDUVANTA Certified Scrum Master (ECSM)",
      certificationAr: "شهادة قائد السكرام المعتمد من إدوفانتا (ECSM)",
      recommendedFor: ["techSkills", "certification", "tech", "operations"]
    },
    {
      id: "soft-skills-comm",
      title: "Executive Presence & Boardroom Communication",
      titleAr: "الحضور التنفيذي وفنون التواصل أمام مجالس الإدارة",
      category: "Leadership",
      categoryAr: "القيادة والإدارة",
      duration: "3 Weeks (18 Hours)",
      durationAr: "٣ أسابيع (١٨ ساعة)",
      hours: 18,
      format: "Hybrid" as const,
      price: "AED 2,500",
      numericPrice: 2500,
      description: "Master high-stakes persuasive speaking, concise executive briefing writing, cross-cultural diplomacy, and confident objection handling for corporate leaders.",
      descriptionAr: "إتقان الإلقاء والتأثير في الاجتماعات المصيرية، وكتابة الملخصات التنفيذية الدقيقة، والدبلوماسية المؤسسية، والرد المقنع على الاعتراضات لكبار المديرين.",
      outcome: "Commands boardroom authority and articulates complex strategic initiatives with compelling clarity.",
      outcomeAr: "يمنحك حضوراً واثقاً في الاجتماعات القيادية والقدرة على شرح الخطط الاستراتيجية بوضوح باهر.",
      targetAudience: "Senior Managers, Business Development Heads, Strategy Consultants",
      targetAudienceAr: "كبار المديرين، رؤساء تطوير الأعمال، مستشارو الاستراتيجية، وممثلو الشركات",
      syllabus: [
        "Module 1: High-Stakes Public Speaking & Executive Voice Projection",
        "Module 2: Pyramidal Executive Writing & 1-Page Strategy Briefings",
        "Module 3: Cross-Cultural Diplomacy in the GCC Executive Ecosystem",
        "Module 4: High-Pressure Crisis Communication & Boardroom Negotiation",
        "Module 5: Dynamic Slide Deck Visual Storytelling for Keynotes",
        "Module 6: Live 10-Minute Executive Keynote Presentation & Video Critique"
      ],
      syllabusAr: [
        "الوحدة الأولى: الإلقاء والتحدث أمام الجمهور والتحكم بنبرة الصوت القيادية",
        "الوحدة الثانية: الكتابة التنفيذية بالهيكل الهرمي وإعداد ملخصات الصفحة الواحدة",
        "الوحدة الثالثة: الدبلوماسية المؤسسية والتواصل متعدد الثقافات في بيئات الخليج",
        "الوحدة الرابعة: إدارة التواصل أثناء الأزمات والتفاوض تحت الضغط العالي",
        "الوحدة الخامسة: السرد القصصي البصري وتصميم العروض التقديمية الاحترافية",
        "الوحدة السادسة: تقديم عرض تنفيذي مباشر مدته ١٠ دقائق مع تحليل نقدي بالفيديو"
      ],
      certification: "EDUVANTA Business Communication Specialist",
      certificationAr: "شهادة أخصائي التواصل التنفيذي المعتمد من إدوفانتا",
      recommendedFor: ["promotion", "leadership", "business", "marketing"]
    },
    {
      id: "fintech-blockchain",
      title: "FinTech & Digital Banking Architecture",
      titleAr: "التقنية المالية وهندسة البنوك الرقمية",
      category: "Finance",
      categoryAr: "المالية والمحاسبة",
      duration: "5 Weeks (35 Hours)",
      durationAr: "٥ أسابيع (٣٥ ساعة)",
      hours: 35,
      format: "Hybrid" as const,
      price: "AED 4,800",
      numericPrice: 4800,
      description: "Explore open banking APIs, payment rails, digital assets, and Central Bank of UAE (CBUAE) / DFSA / FSRA regulatory sandbox compliance.",
      descriptionAr: "استكشاف واجهات البنوك المفتوحة (Open Banking APIs)، وبوابات الدفع الرقمية، والأصول المشفرة، والامتثال لأطر البيئة التجريبية للبنك المركزي وسلطة دبي للخدمات المالية.",
      outcome: "Positions finance and tech professionals at the leading edge of Middle East digital banking transformation.",
      outcomeAr: "يضع المتدرب في طليعة مشهد التحول المصرفي الرقمي والابتكار المالي في الشرق الأوسط.",
      targetAudience: "FinTech Founders, Banking Officers, Solution Architects, Product Directors",
      targetAudienceAr: "مؤسسو شركات التقنية المالية، المصرفيون، مهندسو الحلول الرقمية، ومديرو المنتجات",
      syllabus: [
        "Module 1: GCC FinTech Landscape & Regulatory Sandbox Frameworks",
        "Module 2: Open Banking APIs, Card Schemes & Instant Payment Rails",
        "Module 3: Blockchain Applications, Smart Contracts & Trade Finance",
        "Module 4: Machine Learning & AI in Credit Risk & AML Scoring",
        "Module 5: Cyber Resilience & Fraud Prevention in Digital Wallets",
        "Module 6: FinTech Product Architecture Blueprint Capstone Presentation"
      ],
      syllabusAr: [
        "الوحدة الأولى: مشهد التقنية المالية بالخليج وأطر البيئات الرقابية التجريبية",
        "الوحدة الثانية: واجهات الخدمات المصرفية المفتوحة وشبكات الدفع الفوري",
        "الوحدة الثالثة: تطبيقات البلوكشين، العقود الذكية وتمويل التجارة الدولية",
        "الوحدة الرابعة: الذكاء الاصطناعي في تقييم الجدارة الائتمانية ومكافحة غسل الأموال",
        "الوحدة الخامسة: الأمن السيبراني ومكافحة الاحتيال في المحافظ الرقمية",
        "الوحدة السادسة: تقديم المخطط الهندسي لمنتج تقنية مالية متكامل أمام لجنة التحكيم"
      ],
      certification: "EDUVANTA Certified FinTech Professional",
      certificationAr: "شهادة محترف التقنية المالية المعتمد من إدوفانتا",
      recommendedFor: ["techSkills", "careerChange", "finance", "tech"]
    }
  ],

  howWeWork: [
    {
      step: "01",
      title: "EXPLORE",
      titleAr: "استكشف",
      desc: "Browse our industry-aligned course catalog and consult with an academic advisor to map your career trajectory.",
      descAr: "تصفح كتالوج البرامج المتوافقة مع متطلبات السوق واستشر مستشاراً أكاديمياً لتحديد مسارك بدقة."
    },
    {
      step: "02",
      title: "ENROLL",
      titleAr: "سجّل",
      desc: "Select your preferred format (In-Person, Online, or Hybrid), complete streamlined registration, and secure your seat.",
      descAr: "اختر صيغة الحضور المناسبة (حضوري، عن بُعد، أو مدمج)، وأكمل إجراءات التسجيل وحجز مقعدك فوراً."
    },
    {
      step: "03",
      title: "LEARN",
      titleAr: "تعلّم",
      desc: "Participate in hands-on masterclasses led by senior UAE industry practitioners with live corporate case simulations.",
      descAr: "شارك في ورش عمل تطبيقية ومحاكاة لقضايا حقيقية يقودها كبار الخبراء التنفيذيين في الإمارات."
    },
    {
      step: "04",
      title: "CERTIFY",
      titleAr: "اعتمِد",
      desc: "Complete practical capstone assessments, receive your EDUVANTA credential, and unlock immediate career advancement.",
      descAr: "اجتز تقييمات التخرج والمشاريع العملية واحصل على شهادتك المهنية المعتمدة لتعزيز مسيرتك."
    }
  ],

  corporateTraining: {
    heading: "Upskill Your Entire Team.",
    headingAr: "طوّر كفاءة فريق عملك بالكامل.",
    subheading: "Custom corporate learning solutions tailored to your company's strategic KPIs, delivering measurable capability improvement.",
    subheadingAr: "برامج تدريب مؤسسية مصممة خصيصاً لتحقيق مؤشرات الأداء الاستراتيجية لشركتك ورفع إنتاجية الفرق.",
    benefits: [
      {
        en: "Custom-Tailored Curriculum Aligned to Corporate KPIs",
        ar: "مناهج تدريبية مخصصة بالكامل لمطابقة مؤشرات الأداء الاستراتيجية لشركتك"
      },
      {
        en: "On-Site Delivery at Your UAE Headquarters or Campus Suites",
        ar: "تقديم التدريب حضورياً في مقر شركتك أو في قاعاتنا التنفيذية"
      },
      {
        en: "Flexible Virtual & Hybrid Interactive Executive Workshops",
        ar: "ورش عمل تفاعلية مرنة تجمع بين البث الافتراضي والحضور المباشر"
      },
      {
        en: "Volume Pricing & Dedicated Corporate L&D Account Manager",
        ar: "خصومات خاصة بالمجموعات وتعيين مدير حسابات مخصص لتطوير الكفاءات"
      },
      {
        en: "Comprehensive Progress Reporting & Executive Analytics Dashboard",
        ar: "تقارير أداء دورية ولوحة مؤشرات تحليلية للإدارة العليا"
      },
      {
        en: "Post-Training Implementation Coaching & Skill Assessments",
        ar: "جلسات متابعة وتوجيه بعد انتهاء الدورة لضمان تطبيق المهارات في بيئة العمل"
      }
    ]
  },

  caseStudy: {
    client: "Mid-Size Regional Enterprise — 120 Employees",
    clientAr: "شركة خدمات إقليمية متوسطة الحجم — ١٢٠ موظفاً",
    scenario: "Leadership Pipeline Bottlenecks & Operational Delays",
    scenarioAr: "اختناقات في القيادات الوسطى وتأخر في تسليم المشاريع التشغيلية",
    challenge: "Fast-growing regional services firm lacked structured management frameworks, leading to inconsistent project delivery, siloed communication, and a 42% management turnover rate across department leads.",
    challengeAr: "عانت شركة خدمات إقليمية سريعة النمو من غياب أطر الإدارة المنهجية، مما أدى لعدم انتظام تسليم المشاريع، وضعف التواصل بين الأقسام، وارتفاع معدل دوران المديرين إلى ٤٢٪.",
    before: "No structured leadership track, fragmented workflows, 42% management turnover, delayed client project handovers.",
    beforeAr: "غياب أي مسار تدريب قيادي منظم، تشتت في الإجراءات، دوران وظيفي بنسبة ٤٢٪، وتأخير متكرر في تسليم المشاريع.",
    after: "Custom 6-month executive leadership track delivered for 25 department heads with 1-on-1 performance coaching.",
    afterAr: "تصميم وتنفيذ مسار قيادي تنفيذي مخصص لمدة ٦ أشهر لـ ٢٥ مدير قسم مع جلسات توجيه أداء فردية.",
    metrics: [
      { value: "25", valueAr: "٢٥", label: "Managers Certified", labelAr: "مديراً تم تأهيلهم واعتمادهم" },
      { value: "92%", valueAr: "٩٢٪", label: "Program Completion Rate", labelAr: "نسبة إتمام البرنامج بنجاح" },
      { value: "3.5x", valueAr: "٣.٥x", label: "Measured Promotion Readiness", labelAr: "مؤشر الجاهزية للترقيات القيادية" }
    ]
  },

  pillars: [
    {
      number: "01",
      title: "Industry-Aligned Curriculum",
      titleAr: "مناهج متوافقة مع متطلبات السوق",
      desc: "Courses updated quarterly to reflect active UAE hiring requirements, technology adoption, and legal regulations.",
      descAr: "محتوى يتم تحديثه كل ثلاثة أشهر ليعكس المتطلبات الفعلية للتوظيف في الإمارات، وأحدث التقنيات واللوائح القانونية.",
      learnerAdvantage: "Directly applicable skills from Day 1 without abstract textbook theories.",
      learnerAdvantageAr: "مهارات عملية قابلة للتطبيق الفوري في بيئة العمل دون نظريات مجردة.",
      enterpriseValue: "Rapid employee capability ramp-up and zero downtime in workflow adoption.",
      enterpriseValueAr: "رفع كفاءة الموظفين بسرعة وتقليل فترات التعلم في بيئة العمل."
    },
    {
      number: "02",
      title: "Experienced Practitioner Instructors",
      titleAr: "هيئة تدريسية من كبار الممارسين",
      desc: "Taught exclusively by senior GCC industry executives with 10+ years of active market experience.",
      descAr: "يقدم الدورات نخبة من كبار التنفيذيين في الخليج بخبرة ميدانية نشطة تزيد عن ١٠ سنوات.",
      learnerAdvantage: "Mentorship and real case teardowns from executives who have executed multi-million AED budgets.",
      learnerAdvantageAr: "إرشاد مهني وتحليل تجارب حقيقية من قادة أداروا ميزانيات بملايين الدراهم.",
      enterpriseValue: "Knowledge transfer rooted in regional business realities, not academic hypotheses.",
      enterpriseValueAr: "نقل خبرات مستمدة من واقع السوق الخليجي وليس مجرد فرضيات."
    },
    {
      number: "03",
      title: "Flexible Learning Formats",
      titleAr: "صيغ تعلم مرنة تناسب أوقاتك",
      desc: "Choose between weekend in-person sessions, evening online webinars, or flexible hybrid self-paced tracks.",
      descAr: "اختر بين جلسات نهاية الأسبوع الحضورية، أو الندوات المسائية التفاعلية عن بُعد، أو المسار المدمج.",
      learnerAdvantage: "Pursue career-defining credentials without compromising your full-time executive schedule.",
      learnerAdvantageAr: "الحصول على شهادات مهنية رفيعة دون التأثير على مسؤولياتك الوظيفية اليومية.",
      enterpriseValue: "Zero business disruption while upskilling mission-critical department staff.",
      enterpriseValueAr: "تطوير مهارات الكفاءات الأساسية دون أي انقطاع عن أداء واجباتهم المؤسسية."
    },
    {
      number: "04",
      title: "Recognized Certification Pathways",
      titleAr: "شهادات مهنية ذات قيمة وموثوقية",
      desc: "Professional credentials that demonstrate practical job-readiness to enterprise employers across the Middle East.",
      descAr: "مؤهلات مهنية تثبت جاهزيتك الميدانية لكبرى الشركات وجهات التوظيف في الشرق الأوسط.",
      learnerAdvantage: "Demonstrable credibility on CV and LinkedIn that speeds up promotion and hiring decisions.",
      learnerAdvantageAr: "إضافة قوية للسيرة الذاتية وملف لينكد إن تسرّع قرارات الترقية والتوظيف.",
      enterpriseValue: "Clear benchmark for talent audit and internal career progression matrices.",
      enterpriseValueAr: "معيار واضح لتقييم الكفاءات ومصفوفات التطور الوظيفي الداخلي."
    },
    {
      number: "05",
      title: "Corporate Training Customization",
      titleAr: "حلول تدريب مؤسسي مفصلة",
      desc: "Bespoke workshop design for enterprise teams seeking targeted skill development and team alignment.",
      descAr: "تصميم ورش عمل مخصصة لفرق العمل المؤسسية لتعزيز الكفاءات وتحقيق التجانس التشغيلي.",
      learnerAdvantage: "Shared team vocabulary and streamlined cross-department execution.",
      learnerAdvantageAr: "توحيد لغة العمل بين أعضاء الفريق ورفع التنسيق بين الإدارات المختلفة.",
      enterpriseValue: "Immediate ROI through problem-solving applied directly to active corporate challenges.",
      enterpriseValueAr: "عائد فوري على الاستثمار من خلال حل تحديات قائمة بالفعل داخل المؤسسة."
    },
    {
      number: "06",
      title: "Strong Career Outcomes",
      titleAr: "مخرجات ونتائج مهنية ملموسة",
      desc: "94% completion rate with direct alumni promotion and career advancement tracking.",
      descAr: "معدل إتمام ٩٤٪ مع متابعة دقيقة لقصص ترقي الخريجين وتطورهم الوظيفي.",
      learnerAdvantage: "Access to the EDUVANTA alumni network and career advisory services across the GCC.",
      learnerAdvantageAr: "الانضمام لشبكة خريجي إدوفانتا والاستفادة من خدمات الاستشارات المهنية في الخليج.",
      enterpriseValue: "Retention of top talent through clear professional growth pathways.",
      enterpriseValueAr: "الحفاظ على المواهب والكفاءات المتميزة عبر توفير مسارات نمو وظيفي واضحة."
    }
  ],

  leadership: [
    {
      name: "Dr. Tariq Al Qasimi",
      nameAr: "د. طارق القاسمي",
      role: "Founder & Academic Director",
      roleAr: "المؤسس والمدير الأكاديمي",
      bio: "Former Dean of Executive Education with 20+ years in GCC higher education leadership and institutional governance.",
      bioAr: "عميد سابق لقطاع التعليم التنفيذي بخبرة تتجاوز ٢٠ عاماً في قيادة التعليم العالي والحوكمة المؤسسية في الخليج.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      specialization: "Executive Strategy & Governance",
      specializationAr: "الاستراتيجية التنفيذية والحوكمة"
    },
    {
      name: "Nadia Mansour",
      nameAr: "نادية منصور",
      role: "Head of Corporate Training",
      roleAr: "رئيسة قطاع تدريب الشركات",
      bio: "Ex-McKinsey L&D consultant specializing in enterprise workforce transformation and executive capability scaling across UAE.",
      bioAr: "مستشارة سابقة في ماكينزي متخصصة في التحول المؤسسي وتطوير الكفاءات التنفيذية في كبرى شركات الإمارات.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      specialization: "Enterprise L&D & Change Management",
      specializationAr: "تطوير رأس المال البشري وإدارة التغيير"
    },
    {
      name: "Rashid Farooq",
      nameAr: "راشد فاروق",
      role: "Head of Curriculum Design",
      roleAr: "رئيس تصميم المناهج الأكاديمية",
      bio: "Instructional designer focused on high-retention, case-study-driven adult learning methodologies and simulation exercises.",
      bioAr: "مصمم تعليمي متخصص في منهجيات تدريب الكبار القائمة على دراسات الحالة ومحاكاة بيئات الأعمال الواقعية.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      specialization: "Pedagogy & Case Method Design",
      specializationAr: "طرق التدريس وتصميم دراسات الحالة"
    },
    {
      name: "Sana Iqbal",
      nameAr: "سناء إقبال",
      role: "Head of Student Success",
      roleAr: "رئيسة شؤون وتوجيه المتدربين",
      bio: "Dedicated career strategist assisting professionals with cohort selection, career mapping, and corporate networking.",
      bioAr: "مستشارة مهنية متخصصة في مساعدة المتدربين على اختيار المسار المناسب والتخطيط للنمو الوظيفي والتواصل المؤسسي.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
      specialization: "Career Advisory & Alumni Network",
      specializationAr: "الاستشارات المهنية وشبكة الخريجين"
    }
  ],

  insights: [
    {
      id: "1",
      title: "Which Professional Certification Is Right for Your Career?",
      titleAr: "أي شهادة مهنية هي الأنسب لمسارك الوظيفي؟",
      category: "Career Strategy",
      categoryAr: "استراتيجية المهنة",
      readTime: "5 min read",
      readTimeAr: "٥ دقائق للقراءة",
      date: "May 2026",
      dateAr: "مايو ٢٠٢٦",
      summary: "A practical decision framework for professionals evaluating Project Management vs Executive Leadership vs Digital Growth diplomas in the UAE job market.",
      summaryAr: "إطار عمل منهجي للمهنيين للمفاضلة بين شهادات إدارة المشاريع، والقيادة التنفيذية، والتسويق الرقمي في سوق العمل الإماراتي.",
      content: [
        "In a fast-evolving GCC economy, choosing the right professional certification requires understanding the exact competency gaps enterprise recruiters are prioritizing.",
        "For operational professionals, the Certified Project Practitioner credential provides immediate governance credibility over large budgets and complex stakeholder networks.",
        "For managers aspiring to C-suite roles, strategic leadership diplomas bridge the gap between departmental management and broader P&L stewardship.",
        "Evaluate your 24-month career target: if your objective is specialized execution, focus on functional tracks; if your goal is organizational influence, prioritize executive leadership."
      ],
      contentAr: [
        "في ظل اقتصاد خليجي سريع التطور، يتطلب اختيار الشهادة المهنية المناسبة فهماً دقيقاً للفجوات المهارية التي توليها جهات التوظيف الأولوية القصوى.",
        "بالنسبة للمهنيين في قطاع العمليات، تمنح شهادة ممارس إدارة المشاريع مصداقية فورية في حوكمة الميزانيات الضخمة وشبكات أصحاب المصلحة المعقدة.",
        "أما للمديرين الطامحين لمناصب الإدارة العليا، فإن دبلومات القيادة الاستراتيجية تسد الفجوة بين إدارة الأقسام والمسؤولية الكاملة عن الأرباح والخسائر.",
        "قيّم هدفك المهني خلال الـ ٢٤ شهراً القادمة: إذا كان هدفك التميز التخصصي فركز على المسارات الوظيفية الدقيقة، وإذا كان هدفك التأثير المؤسسي فالأولوية للقيادة التنفيذية."
      ]
    },
    {
      id: "2",
      title: "How Corporate Training Directly Improves Employee Retention",
      titleAr: "كيف يساهم تدريب الشركات في تعزيز ولاء واستبقاء الموظفين",
      category: "Corporate L&D",
      categoryAr: "تدريب الشركات",
      readTime: "6 min read",
      readTimeAr: "٦ دقائق للقراءة",
      date: "Apr 2026",
      dateAr: "أبريل ٢٠٢٦",
      summary: "Data-backed analysis showing how structured upskilling reduces senior turnover and boosts cross-department alignment in GCC firms.",
      summaryAr: "تحليل قائم على البيانات يوضح كيف يقلل التدريب المنظم من دوران الكفاءات ويعزز التجانس بين الأقسام في الشركات الخليجية.",
      content: [
        "High management turnover is frequently cited as one of the costliest operational drains for mid-to-large enterprises across the UAE.",
        "When companies invest in structured cohort training, employees perceive a clear pathway to advancement within the organization.",
        "Furthermore, training cohort members together establishes an aligned operational vocabulary, significantly reducing internal friction and cross-department handoff delays.",
        "Executive teams that maintain regular L&D budgets report 30% higher employee engagement and an average 3.5x promotion readiness among senior managers."
      ],
      contentAr: [
        "يُعد ارتفاع معدل دوران المديرين أحد أكبر التحديات المالية والتشغيلية التي تواجه الشركات المتوسطة والكبرى في دولة الإمارات.",
        "عندما تستثمر الشركات في برامج تدريب جماعية منظمة، يشعر الموظفون بوجود مسار حقيقي ومستدام للنمو والترقي داخل المؤسسة.",
        "بالإضافة إلى ذلك، فإن تدريب فرق العمل معاً يخلق لغة عمل موحدة، مما يقلل بشكل ملموس من الاحتكاكات الداخلية والتأخير في تسليم المهام.",
        "تشير الدراسات إلى أن الشركات التي تخصص ميزانيات مستمرة للتعلم والتطوير تحقق زيادة بنسبة ٣٠٪ في اندماج الموظفين ومضاعفة الجاهزية للترقية ٣.٥ مرات."
      ]
    },
    {
      id: "3",
      title: "Online vs In-Person Learning: What Works Best for Executives?",
      titleAr: "التعلم عن بُعد مقابل الحضور المباشر: أيهما أفضل للمديرين التنفيذيين؟",
      category: "Learning Strategy",
      categoryAr: "استراتيجيات التعلم",
      readTime: "4 min read",
      readTimeAr: "٤ دقائق للقراءة",
      date: "Apr 2026",
      dateAr: "أبريل ٢٠٢٦",
      summary: "Evaluating peer networking, engagement, and time efficiency between evening webinars and weekend campus masterclasses.",
      summaryAr: "مقارنة شاملة بين التواصل المباشر، ومستوى التفاعل، وكفاءة الوقت بين الندوات المسائية الافتراضية وورش العمل الحضورية في عطلة الأسبوع.",
      content: [
        "Executive education requires balancing demanding professional schedules with the depth of peer interaction needed for true skill transformation.",
        "In-person campus learning offers unparalleled executive networking and intense case discussions that mirror boardroom deliberations.",
        "Online formats excel in delivering technical knowledge with maximum schedule flexibility, ideal for professionals with extensive regional travel.",
        "The Hybrid model frequently emerges as the optimal compromise, marrying hands-on campus workshops with flexible digital modules."
      ],
      contentAr: [
        "يتطلب التعليم التنفيذي تحقيق توازن دقيق بين جداول العمل المزدحمة وعمق التفاعل مع الأقران اللازم لاكتساب المهارات الحقيقية.",
        "يوفر التعلم الحضوري في الحرم التدريبي شبكة علاقات تنفيذية لا مثيل لها ونقاشات معمقة تحاكي اجتماعات مجالس الإدارة.",
        "في المقابل، تمتاز صيغ التعلم عن بُعد بالمرونة العالية في استيعاب المفاهيم التقنية وملاءمتها للمهنيين دائمي السفر.",
        "لذلك يبرز النمط المدمج كخيار مثالي يجمع بين ورش العمل التطبيقية في الحرم التدريبي والدراسة الرقمية المرنة."
      ]
    },
    {
      id: "4",
      title: "Building a Sustainable Leadership Pipeline in Your Organization",
      titleAr: "بناء مسار قيادي مستدام وموثوق داخل مؤسستك",
      category: "Talent Development",
      categoryAr: "تطوير المواهب",
      readTime: "7 min read",
      readTimeAr: "٧ دقائق للقراءة",
      date: "Mar 2026",
      dateAr: "مارس ٢٠٢٦",
      summary: "How to identify high-potential mid-level managers and prepare them for strategic executive responsibility in competitive markets.",
      summaryAr: "كيفية تحديد المديرين الواعدين وإعدادهم لتحمل المسؤوليات التنفيذية الاستراتيجية في الأسواق التنافسية.",
      content: [
        "Relying solely on external hiring for senior executive roles creates cultural friction and significant recruiting overhead.",
        "A structured leadership pipeline identifies high-potential department leads early and equips them with financial, strategic, and communication competencies.",
        "Implementing formal case study simulations enables leadership candidates to test strategic assumptions in a controlled, risk-free setting.",
        "Organizations with mature internal leadership pipelines experience faster project turnarounds and superior executive retention."
      ],
      contentAr: [
        "الاعتماد الكامل على التوظيف الخارجي للمناصب القيادية العليا يتسبب في صعوبات بالتأقلم وتكاليف توظيف باهظة.",
        "بناء مسار قيادي داخلي يتيح اكتشاف الكفاءات الواعدة مبكراً وتزويدها بمهارات التخطيط المالي والاستراتيجي والتواصل القيادي.",
        "تطبيق محاكاة دراسات الحالة الواقعية يُمكّن المرشحين للقيادة من اختبار قراراتهم الاستراتيجية في بيئة تعليمية آمنة.",
        "تتميز المؤسسات التي تمتلك مسارات قيادية داخلية بسرعة تنفيذ المشاريع واستقرار الهياكل الإدارية العليا."
      ]
    },
    {
      id: "5",
      title: "Top Skills UAE Employers Are Actively Seeking in 2026",
      titleAr: "أبرز المهارات التي تبحث عنها كبرى شركات الإمارات في ٢٠٢٦",
      category: "Market Insights",
      categoryAr: "رؤى السوق",
      readTime: "5 min read",
      readTimeAr: "٥ دقائق للقراءة",
      date: "Mar 2026",
      dateAr: "مارس ٢٠٢٦",
      summary: "Key competencies demanded by enterprise recruiters in Dubai and Abu Dhabi across tech, finance, and people operations.",
      summaryAr: "أهم الكفاءات والمهارات التي يطلبها مسؤولو التوظيف في دبي وأبوظبي في قطاعات التقنية، المالية، وإدارة الكفاءات.",
      content: [
        "The UAE economic expansion has shifted hiring focus toward professionals who combine technical domain mastery with strategic communication.",
        "Financial modeling expertise aligned with UAE Corporate Tax regulations has become an indispensable requirement across corporate finance departments.",
        "In technology and operations, enterprise Agile and Scrum certifications command strong premiums as companies accelerate digital roadmaps.",
        "HR professionals with strong analytics and MoHRE compliance expertise are critical to driving nationalization and talent retention goals."
      ],
      contentAr: [
        "شهد سوق العمل الإماراتي تحولاً نوعياً نحو استقطاب المحترفين الذين يجمعون بين التمكن التخصصي ومهارات التواصل الاستراتيجي.",
        "أصبحت خبرات النمذجة المالية والامتثال لضريبة الشركات في الإمارات من أهم المتطلبات في الإدارات المالية والمحاسبية.",
        "في قطاع التقنية والعمليات، تحظى شهادات الأجايل وإدارة المشاريع بقيمة سوقية عالية لتسريع خطط التحول الرقمي.",
        "كما تشكل كفاءات الموارد البشرية القادرة على تحليل البيانات وإدارة ملفات التوطين والامتثال ركيزة لا غنى عنها للشركات الكبرى."
      ]
    },
    {
      id: "6",
      title: "Preparing for a Strategic Career Change Without Losing Seniority",
      titleAr: "كيف تخطط لتحول مهني استراتيجي دون أن تفقد درجتك الوظيفية",
      category: "Career Switchers",
      categoryAr: "التحول المهني",
      readTime: "4 min read",
      readTimeAr: "٤ دقائق للقراءة",
      date: "Feb 2026",
      dateAr: "فبراير ٢٠٢٦",
      summary: "Practical steps for transitioning into project management or digital growth without resetting your professional trajectory.",
      summaryAr: "خطوات عملية للانتقال إلى مجالات إدارة المشاريع أو النمو الرقمي والاستفادة من خبراتك السابقة للانطلاق من مستوى قيادي.",
      content: [
        "Transitioning into a new industry does not mean starting over from entry level if you strategically leverage your transferable competencies.",
        "Acquiring an industry-standard credential validates your technical domain knowledge while your past managerial experience provides immediate credibility.",
        "Focus your capstone project on a cross-industry challenge that showcases your problem-solving ability to potential employers.",
        "Leverage EDUVANTA's career advisory team to reshape your professional narrative and highlight high-value transferable assets on your CV."
      ],
      contentAr: [
        "الانتقال إلى مجال جديد لا يعني البدء من الصفر إذا أحسنت استثمار مهاراتك القيادية وخبراتك السابقة القابلة للنقل.",
        "الحصول على شهادة مهنية معتمدة يثبت تمكنك من الأدوات التخصصية الجديدة، بينما تمنحك خبرتك السابقة مصداقية قيادية فورية.",
        "اختر مشروع تخرج يركز على حل تحدٍ تشغيلي واقعي يبرز قدرتك على التحليل وحل المشكلات لأصحاب العمل الجدد.",
        "استفد من استشارات فريق إدوفانتا لإعادة صياغة سيرتك الذاتية وإبراز نقاط قوتك التنافسية بثقة تامة."
      ]
    }
  ],

  locations: [
    {
      id: "dubai",
      city: "DUBAI",
      cityAr: "دبي",
      name: "Knowledge Park — Main Campus",
      nameAr: "مجمع دبي للمعرفة — الحرم الرئيسي",
      address: "Block 2B, Level 4, Dubai Knowledge Park, Dubai, UAE",
      addressAr: "المبنى 2B، الطابق الرابع، مجمع دبي للمعرفة، دبي، الإمارات",
      phone: "+971 4 900 78210",
      hours: "Sun – Thu: 8:00 AM – 9:00 PM | Sat: 9:00 AM – 6:00 PM",
      hoursAr: "الأحد – الخميس: ٨:٠٠ ص – ٩:٠٠ م | السبت: ٩:٠٠ ص – ٦:٠٠ م",
      features: [
        "State-of-the-Art Executive Classrooms",
        "Private Executive Networking Lounge",
        "High-Speed Gigabit Campus Wi-Fi",
        "Direct Dubai Tram & Metro Access",
        "Dedicated Case Study Breakout Rooms",
        "Complimentary Multi-Story Parking"
      ],
      featuresAr: [
        "قاعات تدريب تنفيذية مجهزة بأحدث الشاشات التفاعلية",
        "صالة استراحة تنفيذية وشبكة علاقات للمتدربين",
        "إنترنت فائق السرعة في كافة مرافق المقر",
        "موقع استراتيجي قرب محطات مترو وترام دبي",
        "غرف عمل جماعية مخصصة لمناقشة دراسات الحالة",
        "مواقف سيارات مجانية متعددة الطوابق"
      ]
    },
    {
      id: "abudhabi",
      city: "ABU DHABI",
      cityAr: "أبوظبي",
      name: "Al Maryah Island — Corporate Training Center",
      nameAr: "جزيرة المارية — مركز تدريب الشركات والقيادة",
      address: "Sowwah Square, Tower 3, Level 9, Al Maryah Island, Abu Dhabi, UAE",
      addressAr: "مربعة الصوة، البرج ٣، الطابق التاسع، جزيرة المارية، أبوظبي، الإمارات",
      phone: "+971 2 600 89100",
      hours: "Sun – Thu: 8:00 AM – 9:00 PM | Sat: 9:00 AM – 6:00 PM",
      hoursAr: "الأحد – الخميس: ٨:٠٠ ص – ٩:٠٠ م | السبت: ٩:٠٠ ص – ٦:٠٠ م",
      features: [
        "Corporate Boardroom Simulation Suites",
        "High-Definition Video Recording Studio",
        "Private VIP Executive Catering Lounge",
        "Panoramic Financial District Views",
        "Dedicated Corporate L&D Suites",
        "Valet Parking & Executive Concierge"
      ],
      featuresAr: [
        "أجنحة محاكاة لاجتماعات مجالس الإدارة التنفيذية",
        "استوديو تسجيل فيديو عالي الدقة لجلسات التدريب",
        "صالة ضيافة خاصة لوفود الشركات وكبار الشخصيات",
        "إطلالات بانورامية على المركز المالي للعاصمة",
        "قاعات مخصصة لبرامج تدريب وتطوير الشركات",
        "خدمة صف السيارات ومكتب استقبال تنفيذي"
      ]
    }
  ],

  testimonials: [
    {
      quote: "EDUVANTA's Project Management certification directly helped me lead a major AED 45M infrastructure project and earn a promotion to Senior Project Lead within 4 months.",
      quoteAr: "ساهمت شهادة إدارة المشاريع من إدوفانتا بشكل مباشر في تمكيني من قيادة مشروع بنية تحتية بقيمة ٤٥ مليون درهم ونيل ترقية لمنصب رئيس مشاريع أول خلال ٤ أشهر فقط.",
      author: "Sana Iqbal",
      authorAr: "سناء إقبال",
      title: "Senior Project Lead",
      titleAr: "رئيسة مشاريع أولى",
      location: "Dubai Knowledge Park",
      locationAr: "حرم دبي للمعرفة",
      rating: 5,
      course: "Project Management Cert Prep",
      courseAr: "الإعداد لشهادة إدارة المشاريع",
      outcomeMetric: "+35% Responsibility Scope",
      outcomeMetricAr: "+٣٥٪ توسع في نطاق المسؤولية"
    },
    {
      quote: "We enrolled 20 of our department heads in EDUVANTA's Executive Leadership track. The capability improvement, cross-department alignment, and project delivery consistency were immediate.",
      quoteAr: "ألحقنا ٢٠ من رؤساء الأقسام بمسار القيادة التنفيذية في إدوفانتا. كان التحسن في الأداء المؤسسي والتجانس بين الإدارات ملموساً وفورياً في كافة المشاريع.",
      author: "Khaled Al Shamsi",
      authorAr: "خالد الشامسي",
      title: "VP of Human Capital",
      titleAr: "نائب الرئيس لرأس المال البشري",
      location: "Abu Dhabi Campus",
      locationAr: "مركز أبوظبي",
      rating: 5,
      course: "Executive Leadership Diploma",
      courseAr: "دبلوم القيادة التنفيذية",
      outcomeMetric: "92% Retention & Alignment",
      outcomeMetricAr: "٩٢٪ استبقاء وتجانس تشغيلي"
    },
    {
      quote: "The Digital Growth certification gave me practical Meta, TikTok, and GA4 attribution frameworks that doubled our e-commerce ROAS in less than 60 days.",
      quoteAr: "منحتني شهادة النمو الرقمي أطر عمل عملية لإعلانات ميتا وتيك توك ونماذج GA4 ساهمت في مضاعفة العائد على الإنفاق الإعلاني لمتجرنا خلال أقل من ٦٠ يوماً.",
      author: "Maya Lin",
      authorAr: "مايا لين",
      title: "Growth Marketing Lead",
      titleAr: "مديرة النمو والتسويق الرقمي",
      location: "Online Executive Track",
      locationAr: "المسار الافتراضي المباشر",
      rating: 5,
      course: "Digital Marketing & Growth",
      courseAr: "التسويق الرقمي ونمو المبيعات",
      outcomeMetric: "2.1x ROAS Improvement",
      outcomeMetricAr: "٢.١x مضاعفة العائد الإعلاني"
    },
    {
      quote: "The Corporate Finance course deconstructed complex DCF valuation and UAE Corporate Tax models effortlessly. The instructor was an active UAE M&A practitioner who shared real deal blueprints.",
      quoteAr: "قدّم كورس المالية المؤسسية نماذج تقييم الشركات والضريبة الإماراتية بأسلوب عملي رائع. كان المدرب خبيراً ممارساً في صفقات الاستحواذ وشاركنا نماذج واقعية.",
      author: "Omar Farooq",
      authorAr: "عمر فاروق",
      title: "Senior Financial Analyst",
      titleAr: "محلل مالي أول",
      location: "Dubai Knowledge Park",
      locationAr: "حرم دبي للمعرفة",
      rating: 5,
      course: "Corporate Finance & Modeling",
      courseAr: "المالية المؤسسية والنمذجة المالية",
      outcomeMetric: "Board-Approved M&A Valuation",
      outcomeMetricAr: "اعتماد تقييم صفقة استحواذ كبرى"
    },
    {
      quote: "As a professional transitioning into Strategic HR, EDUVANTA's MoHRE and UAE Labor Law modules gave me total confidence to pass competitive senior interviews on the first attempt.",
      quoteAr: "كمهنية انتقلت حديثاً لقطاع الموارد البشرية، منحتني وحدات قانون العمل الإماراتي ولوائح وزارة الموارد البشرية ثقة مطلقة لاجتياز المقابلات القيادية من أول محاولة.",
      author: "Elena Rostova",
      authorAr: "إيلينا روستوفا",
      title: "Senior People Operations Lead",
      titleAr: "مديرة أولى لعمليات الموارد البشرية",
      location: "Hybrid Track",
      locationAr: "المسار المدمج",
      rating: 5,
      course: "Strategic HR Management",
      courseAr: "الموارد البشرية الاستراتيجية",
      outcomeMetric: "Fast-Track Senior Placement",
      outcomeMetricAr: "توظيف قيادي مباشر"
    }
  ],

  faq: [
    {
      category: "Accreditation & Value",
      question: "Are your certifications recognized by employers across the UAE and GCC?",
      questionAr: "هل شهاداتكم معترف بها من قِبل جهات التوظيف والشركات في الإمارات والخليج؟",
      answer: "Yes. EDUVANTA professional certifications are engineered around active UAE industry competency frameworks and demonstrate practical, audit-grade capabilities directly respected by HR leaders and executive recruiters across the GCC.",
      answerAr: "نعم. تم تصميم وتطوير شهادات إدوفانتا المهنية وفقاً لأحدث أطر الكفاءات المطلوبة في سوق العمل الإماراتي والخليجي، وتُبرز مهارات تطبيقية موثوقة تحظى بتقدير مديري التوظيف ورؤساء الموارد البشرية."
    },
    {
      category: "Schedules & Modalities",
      question: "Do you offer weekend or evening options for working executives?",
      questionAr: "هل توفرون خيارات تدريبية في عطلات نهاية الأسبوع أو الفترات المسائية للمديرين والموظفين؟",
      answer: "Yes. All EDUVANTA programs are structured specifically for working professionals. We offer Saturday campus masterclasses, live weekday evening webinars (7:00 PM – 9:30 PM), and self-paced hybrid options.",
      answerAr: "نعم، صُممت كافة برامج إدوفانتا خصيصاً لتناسب جداول المهنيين العاملين. نوفر ورش عمل حضورية يوم السبت، وندوات مسائية مباشرة عبر الإنترنت (٧:٠٠ م – ٩:٣٠ م)، ومسارات مدمجة مرنة."
    },
    {
      category: "Tuition & Installments",
      question: "Can I pay for my program tuition in monthly installments?",
      questionAr: "هل يمكنني سداد الرسوم الدراسية عبر خطط تقسيط شهرية ميسرة؟",
      answer: "Yes. We partner with leading UAE financial institutions to provide 0% interest monthly installment plans (3 or 6 monthly payments) for individual self-funded professionals.",
      answerAr: "نعم. نتعاون مع كبرى المؤسسات المالية في الدولة لتوفير خطط تقسيط شهرية بدون أي فوائد (على ٣ أو ٦ أشهر) للمتدربين الذين يسددون الرسوم بشكل ذاتي."
    },
    {
      category: "Corporate Packages",
      question: "Do you offer corporate group training and customized workshops for enterprises?",
      questionAr: "هل تقدمون باقات تدريب مخصصة للشركات والمجموعات المؤسسية؟",
      answer: "Absolutely. Our Corporate Learning Advisory team designs bespoke enterprise curriculum delivered at your headquarters or at our Dubai/Abu Dhabi campuses with volume pricing and executive reporting.",
      answerAr: "بالتأكيد. يصمم فريق استشارات تدريب الشركات برامج مخصصة بالكامل تُقدم في مقر شركتكم أو في قاعاتنا التنفيذية بدبي وأبوظبي مع خصومات خاصة بالمجموعات ولوحات متابعة للإدارة العليا."
    },
    {
      category: "Duration & Assessments",
      question: "How long do professional programs take to complete?",
      questionAr: "كم تبلغ المدة الزمنية المعتادة لإتمام البرامج التدريبية؟",
      answer: "Programs range from 3 weeks for intensive credentials (such as Scrum Master or Boardroom Communication) to 8 weeks for comprehensive Executive Leadership Diplomas.",
      answerAr: "تتراوح مدة البرامج بين ٣ أسابيع للشهادات التخصصية المكثفة (مثل سكرام ماستر والتواصل القيادي) وحتى ٨ أسابيع للدبلومات التنفيذية المتقدمة."
    },
    {
      category: "Assessment & Exam",
      question: "Is there a mandatory final exam or practical capstone project?",
      questionAr: "هل هناك اختبار نهائي إلزامي أو مشروع تخرج عملي لنيل الشهادة؟",
      answer: "Yes. To uphold rigorous professional integrity, learners complete practical case study simulations and a capstone assessment evaluated by active industry practitioners.",
      answerAr: "نعم. لضمان أعلى معايير الجودة والنزاهة المهنية، يجتاز المتدرب تقييمات عملية ومشاريع تخرج تحاكي بيئات العمل الواقعية ويتم تقييمها من قِبل كبار الخبراء."
    },
    {
      category: "Format Switches",
      question: "Can I switch learning formats (e.g., from In-Person to Online) after enrolling?",
      questionAr: "هل يمكنني تغيير صيغة الحضور (مثل التحويل من الحضور المباشر إلى التعلم عن بُعد) بعد التسجيل؟",
      answer: "Yes. Students can request a format transition prior to the start of Module 2 without incurring any administrative fee or scheduling penalty.",
      answerAr: "نعم. يتاح للمتدربين تقديم طلب لتغيير صيغة الحضور قبل بدء الوحدة التدريبية الثانية دون أي رسوم إدارية أو غرامات."
    },
    {
      category: "Career Support",
      question: "Do enrolled professionals receive CV review and career advisory support?",
      questionAr: "هل يحصل المتدربون على دعم وتوجيه للسيرة الذاتية وتطوير المسار الوظيفي؟",
      answer: "Yes. All enrolled learners gain direct access to our Student Success team for LinkedIn optimization, executive resume audits, and UAE market career coaching.",
      answerAr: "نعم. يحصل جميع المتدربين على جلسات استشارية مع فريق شؤون المتدربين لمراجعة السيرة الذاتية وتطوير ملف لينكد إن والتوجيه لسوق العمل في الإمارات."
    },
    {
      category: "Missed Sessions",
      question: "What happens if I miss a live scheduled masterclass?",
      questionAr: "ماذا يحدث في حال فاتني حضور إحدى الجلسات المباشرة المقررة؟",
      answer: "All live online masterclasses are recorded in HD and available on the EDUVANTA Portal within 24 hours. In-person students may attend equivalent makeup sessions during the subsequent cohort.",
      answerAr: "يتم تسجيل كافة الجلسات الافتراضية المباشرة بجودة عالية وإتاحتها على منصة إدوفانتا خلال ٢٤ ساعة. كما يمكن لطلاب المسار الحضوري حضور جلسات تعويضية مع الدفعة التالية."
    },
    {
      category: "Admissions Process",
      question: "What is the fastest way to secure admission in an upcoming cohort?",
      questionAr: "ما هي أسرع طريقة لتأكيد القبول وحجز مقعد في الدفعة التدريبية القادمة؟",
      answer: "Submit an application via our online advisory form or connect directly with an Admissions Officer via WhatsApp (+971 50 900 78210). Response times average under 2 business hours.",
      answerAr: "يمكنك تقديم طلب عبر نموذج الاستشارة الإلكتروني أو التواصل مباشرة مع مسؤول القبول عبر واتساب (٠٥٠٩٠٠٧٨٢١٠ ٩٧١+)، حيث يتم الرد والتأكيد خلال أقل من ساعتي عمل."
    }
  ]
};
