export interface Translations {
  nav: {
    backToPortfolio: string;
    brandTagline: string;
    programs: string;
    matcher: string;
    journey: string;
    outcomes: string;
    whyCodeforge: string;
    faculty: string;
    campuses: string;
    insights: string;
    faq: string;
    whatsappAdvisor: string;
    applyNow: string;
    phone: string;
    switchLang: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    exploreCta: string;
    advisorCta: string;
    syllabiCta: string;
    statsHired: string;
    statsHiredLabel: string;
    statsPlacement: string;
    statsPlacementLabel: string;
    statsDuration: string;
    statsDurationLabel: string;
    statsCampuses: string;
    statsCampusesLabel: string;
    fictionalNotice: string;
  };
  trustStrip: {
    trustedBy: string;
    subtext: string;
  };
  catalog: {
    badge: string;
    title: string;
    subtitle: string;
    filterAllCategories: string;
    filterAllModes: string;
    filterDiscipline: string;
    filterMode: string;
    filterBudget: string;
    filterSearchPlaceholder: string;
    showingResults: string;
    resetFilters: string;
    viewCurriculum: string;
    weeks: string;
    fullTime: string;
    partTime: string;
    hybrid: string;
    online: string;
    noResultsTitle: string;
    noResultsSubtitle: string;
    modalOverview: string;
    modalOutcome: string;
    modalTechStack: string;
    modalCurriculum: string;
    modalTuition: string;
    modalApply: string;
    modalClose: string;
    techStackLabel: string;
  };
  matcher: {
    badge: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    nextStep: string;
    prevStep: string;
    findMatches: string;
    resetFinder: string;
    recommendedTrack: string;
    whyThisTrack: string;
    applyTrack: string;
    ambitions: {
      softwareEng: string;
      softwareEngDesc: string;
      aiData: string;
      aiDataDesc: string;
      cyberCloud: string;
      cyberCloudDesc: string;
      uiuxProduct: string;
      uiuxProductDesc: string;
      mobileApp: string;
      mobileAppDesc: string;
    };
    backgrounds: {
      completeBeginner: string;
      techAdjacent: string;
      stemDegree: string;
      juniorDev: string;
    };
    schedules: {
      fullTimeImmersive: string;
      partTimeEvening: string;
      hybridFlex: string;
    };
  };
  journey: {
    badge: string;
    title: string;
    subtitle: string;
    step1: string;
    step1Title: string;
    step1Desc: string;
    step2: string;
    step2Title: string;
    step2Desc: string;
    step3: string;
    step3Title: string;
    step3Desc: string;
    step4: string;
    step4Title: string;
    step4Desc: string;
  };
  outcomes: {
    badge: string;
    title: string;
    subtitle: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    hiringPartnersTitle: string;
    careerSupportTitle: string;
    careerSupportDesc: string;
  };
  caseStudy: {
    badge: string;
    title: string;
    subtitle: string;
    clientLabel: string;
    scenarioLabel: string;
    challengeTitle: string;
    baselineTitle: string;
    interventionTitle: string;
    outcomesTitle: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
    demoNote: string;
  };
  pillars: {
    badge: string;
    title: string;
    subtitle: string;
    devAdvantage: string;
    employerImpact: string;
  };
  leadership: {
    badge: string;
    title: string;
    subtitle: string;
  };
  insights: {
    badge: string;
    title: string;
    subtitle: string;
    readArticle: string;
    minRead: string;
    publishedIn: string;
    modalClose: string;
  };
  campuses: {
    badge: string;
    title: string;
    subtitle: string;
    scheduleTour: string;
    modalTitle: string;
    modalSubtitle: string;
    selectCampus: string;
    preferredDate: string;
    fullName: string;
    email: string;
    phone: string;
    trackInterest: string;
    submitTour: string;
    tourConfirmedTitle: string;
    tourConfirmedDesc: string;
  };
  reviews: {
    badge: string;
    title: string;
    subtitle: string;
    verifiedGraduate: string;
    careerOutcome: string;
    prevReview: string;
    nextReview: string;
  };
  admissions: {
    badge: string;
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
    step1Title: string;
    step2Title: string;
    step3Title: string;
    step4Title: string;
    step5Title: string;
    fullName: string;
    email: string;
    phone: string;
    selectTrack: string;
    selectSchedule: string;
    paymentPlan: string;
    backgroundNotes: string;
    submitApplication: string;
    next: string;
    back: string;
    whatsappDirect: string;
    successTitle: string;
    successDesc: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
  };
  cta: {
    badge: string;
    title: string;
    subtitle: string;
    buttonPrimary: string;
    buttonSecondary: string;
    hotline: string;
  };
  footer: {
    brandBio: string;
    quickLinks: string;
    tracks: string;
    campuses: string;
    contactUs: string;
    rights: string;
    disclaimer: string;
    dubaiCampus: string;
    abudhabiCampus: string;
  };
}

export const translations: Record<'en' | 'ar', Translations> = {
  en: {
    nav: {
      backToPortfolio: "← Back to Portfolio",
      brandTagline: "UAE CODING & TECH BOOTCAMP",
      programs: "Bootcamp Tracks",
      matcher: "Track Matcher",
      journey: "How It Works",
      outcomes: "Career Outcomes",
      whyCodeforge: "Why CODEFORGE",
      faculty: "Instructors",
      campuses: "Campuses",
      insights: "Tech Insights",
      faq: "FAQ",
      whatsappAdvisor: "WhatsApp Admissions",
      applyNow: "Apply for Cohort",
      phone: "+971 4 700 89120",
      switchLang: "العربية"
    },
    hero: {
      badge: "Next Cohort Admissions Open • 100% Industry Project-Based",
      titleLine1: "Code Your Next",
      titleHighlight: "Tech Career.",
      subtitle: "Immersive software engineering, data science, and cloud bootcamps engineered specifically for the UAE & GCC tech hiring market.",
      exploreCta: "EXPLORE BOOTCAMPS",
      advisorCta: "TALK TO ADMISSIONS",
      syllabiCta: "DOWNLOAD SYLLABI",
      statsHired: "850+",
      statsHiredLabel: "Graduates Hired",
      statsPlacement: "88%",
      statsPlacementLabel: "Placement Rate",
      statsDuration: "12–16 Wks",
      statsDurationLabel: "Immersive Duration",
      statsCampuses: "Dubai • Abu Dhabi",
      statsCampusesLabel: "Campus Hubs",
      fictionalNotice: "Portfolio Demonstration Concept • CODEFORGE UAE"
    },
    trustStrip: {
      trustedBy: "Hiring Network & Industry Tech Ecosystem",
      subtext: "Graduates hired across Dubai Internet City, DIFC FinTech hubs, and Abu Dhabi tech scaleups."
    },
    catalog: {
      badge: "Core Engineering Tracks",
      title: "Intensive Tech Bootcamps",
      subtitle: "Hands-on, production-grade curricula taught by senior engineers from top GCC tech firms.",
      filterAllCategories: "All Disciplines",
      filterAllModes: "All Formats",
      filterDiscipline: "Tech Domain",
      filterMode: "Learning Schedule",
      filterBudget: "Max Tuition",
      filterSearchPlaceholder: "Search by language, framework, or skill (e.g. Next.js, Python, AWS)...",
      showingResults: "Showing {count} bootcamps",
      resetFilters: "Reset Filters",
      viewCurriculum: "VIEW DETAILED CURRICULUM",
      weeks: "Weeks",
      fullTime: "Full-Time Immersive",
      partTime: "Part-Time Evening",
      hybrid: "Hybrid Blend",
      online: "Live Online",
      noResultsTitle: "No bootcamp tracks match your search filters",
      noResultsSubtitle: "Try adjusting your budget, format, or technology filters to explore all available cohorts.",
      modalOverview: "Curriculum Overview",
      modalOutcome: "Target Career Placement",
      modalTechStack: "Production Tech Stack Mastered",
      modalCurriculum: "6-Module Sprint Roadmap",
      modalTuition: "Tuition & 0% Installment Options",
      modalApply: "Apply for This Track",
      modalClose: "Close",
      techStackLabel: "Core Stack:"
    },
    matcher: {
      badge: "Interactive Career Matcher",
      title: "Find Your Ideal Tech Track",
      subtitle: "Answer 3 quick questions to identify the software engineering or AI track that fits your background and career ambition.",
      step1Title: "Step 01: What is your primary career ambition in tech?",
      step1Desc: "Select the professional role you want to land within the next 4–6 months.",
      step2Title: "Step 02: What is your current coding background?",
      step2Desc: "Tell us your existing experience level to calibrate the right starting curriculum.",
      step3Title: "Step 03: What is your preferred study schedule?",
      step3Desc: "Choose the format that matches your daily availability and commitments.",
      nextStep: "Continue",
      prevStep: "Back",
      findMatches: "Generate Career Recommendation",
      resetFinder: "Retake Career Assessment",
      recommendedTrack: "Recommended Bootcamp Track",
      whyThisTrack: "Why This Track Fits Your Ambition",
      applyTrack: "Apply for Recommended Track",
      ambitions: {
        softwareEng: "Full-Stack Software Engineer",
        softwareEngDesc: "Build and scale modern web apps with TypeScript, React, Next.js, and Node.js.",
        aiData: "Data Scientist & AI Engineer",
        aiDataDesc: "Deploy machine learning pipelines, NLP models, and generative AI agents.",
        cyberCloud: "Cloud DevOps & Cybersecurity Specialist",
        cyberCloudDesc: "Architect AWS infrastructure, Docker/K8s clusters, and defend against cyber threats.",
        uiuxProduct: "UX/UI Designer & Product Specialist",
        uiuxProductDesc: "Design pixel-perfect design systems, interactive prototypes, and user funnels.",
        mobileApp: "Mobile App Engineer (iOS & Android)",
        mobileAppDesc: "Ship cross-platform mobile apps with React Native, Flutter, and Firebase."
      },
      backgrounds: {
        completeBeginner: "Complete Beginner (No prior coding knowledge)",
        techAdjacent: "Tech-Adjacent (Design, Product, or Marketing)",
        stemDegree: "STEM / Business Degree (Analytical mindset)",
        juniorDev: "Self-Taught / Junior Developer (Seeking production rigor)"
      },
      schedules: {
        fullTimeImmersive: "Full-Time Immersive (Mon–Fri, 9 AM – 5 PM)",
        partTimeEvening: "Part-Time Evening & Weekend (Flexible for workers)",
        hybridFlex: "Hybrid Blend (Campus Labs + Remote Sprints)"
      }
    },
    journey: {
      badge: "Methodology",
      title: "The Four-Stage Developer Roadmap",
      subtitle: "How CODEFORGE transforms motivated learners into production-ready engineers in 12–16 weeks.",
      step1: "STAGE 01",
      step1Title: "FOUNDATIONS",
      step1Desc: "Build rock-solid computer science fundamentals, git workflows, and command-line terminal mastery.",
      step2: "STAGE 02",
      step2Title: "BUILD & REFACTOR",
      step2Desc: "Construct 4 progressive full-stack applications with senior engineer code reviews and PR critiques.",
      step3: "STAGE 03",
      step3Title: "REAL PRODUCTION CAPSTONE",
      step3Desc: "Collaborate in agile Scrum pods to architect and deploy a production-grade SaaS or AI solution.",
      step4: "STAGE 04",
      step4Title: "CAREER LAUNCH & DEMO DAY",
      step4Desc: "Participate in live coding interview mocks, whiteboarding, and showcase projects to CTOs on Demo Day."
    },
    outcomes: {
      badge: "Placement Record",
      title: "Real Career Outcomes & ROI",
      subtitle: "Our graduates join software engineering, AI, and product teams at top regional tech employers.",
      stat1Label: "Average Starting Monthly Salary",
      stat2Label: "Average Income Increase Post-Bootcamp",
      stat3Label: "Average Days to First Job Offer",
      hiringPartnersTitle: "Hiring Partners & Placement Ecosystem",
      careerSupportTitle: "Dedicated 1-on-1 Career Support",
      careerSupportDesc: "Every student is paired with a technical career coach for resume tuning, GitHub portfolio curation, live whiteboarding interview simulations, and direct introductions to hiring CTOs."
    },
    caseStudy: {
      badge: "Alumni Transformation",
      title: "Graduate Success Story",
      subtitle: "How Tariq transitioned from hospitality management to a full-time software engineering role in Dubai.",
      clientLabel: "GRADUATE PROFILE",
      scenarioLabel: "CAREER TRANSITION",
      challengeTitle: "The Baseline Challenge",
      baselineTitle: "Starting Situation",
      interventionTitle: "CODEFORGE Intensive Immersion",
      outcomesTitle: "Placement Result",
      stat1Label: "Bootcamp Duration",
      stat2Label: "Starting Monthly Salary",
      stat3Label: "Time to First Offer",
      demoNote: "Alumni figures represent portfolio demonstration benchmarks."
    },
    pillars: {
      badge: "Our Philosophy",
      title: "Six Pillars of the CODEFORGE Experience",
      subtitle: "Built to deliver real engineering muscle rather than shallow theoretical tutorials.",
      devAdvantage: "Student Advantage:",
      employerImpact: "Hiring Team Value:"
    },
    leadership: {
      badge: "Senior Faculty",
      title: "Instructional Leadership & Mentors",
      subtitle: "Taught exclusively by active senior engineers and tech directors from leading GCC tech scaleups."
    },
    insights: {
      badge: "Tech Intelligence",
      title: "Engineering Insights & Career Guides",
      subtitle: "Practical articles on technical interviewing, emerging tech stacks, and UAE engineering recruitment.",
      readArticle: "Read Tech Briefing →",
      minRead: "min read",
      publishedIn: "Published",
      modalClose: "Close Briefing"
    },
    campuses: {
      badge: "Campus Infrastructure",
      title: "State-of-the-Art Tech Hubs",
      subtitle: "High-spec developer labs located at Dubai Internet City and Abu Dhabi Hub71.",
      scheduleTour: "SCHEDULE CAMPUS TOUR",
      modalTitle: "Schedule a Campus Tour & Code Session",
      modalSubtitle: "Visit our developer workstations, meet an instructor, and audit a live coding lab.",
      selectCampus: "Select Campus Hub",
      preferredDate: "Preferred Visit Date",
      fullName: "Your Full Name",
      email: "Email Address",
      phone: "Phone / WhatsApp Number (+971)",
      trackInterest: "Track of Interest",
      submitTour: "Confirm Campus Visit Appointment",
      tourConfirmedTitle: "Campus Visit Request Received",
      tourConfirmedDesc: "An admissions coordinator will reach out to confirm your developer lab tour and demo slot."
    },
    reviews: {
      badge: "Alumni Feedback",
      title: "What Our Graduates Say",
      subtitle: "Unfiltered reviews from career changers and upskillers who launched tech careers through CODEFORGE.",
      verifiedGraduate: "Verified Graduate",
      careerOutcome: "HIRED AS",
      prevReview: "Previous Review",
      nextReview: "Next Review"
    },
    admissions: {
      badge: "Admissions & Enrollment",
      title: "Apply for the Upcoming Cohort",
      subtitle: "Spaces are limited to 20 students per cohort to guarantee personalized code reviews and mentoring.",
      step1: "01. Personal Info",
      step2: "02. Select Track",
      step3: "03. Schedule Format",
      step4: "04. Background",
      step5: "05. Verification",
      step1Title: "Contact & Identification",
      step2Title: "Choose Your Bootcamp Track",
      step3Title: "Preferred Study Schedule",
      step4Title: "Background & Financing",
      step5Title: "Review & Submit Application",
      fullName: "Full Name (as per Emirates ID / Passport)",
      email: "Email Address",
      phone: "UAE Mobile Number (+971 50 / 55 / 58)",
      selectTrack: "Select Target Engineering Track",
      selectSchedule: "Select Schedule Mode",
      paymentPlan: "Payment & Tuition Preference",
      backgroundNotes: "Tell us about your background and motivation to code",
      submitApplication: "SUBMIT ADMISSIONS APPLICATION",
      next: "Continue",
      back: "Back",
      whatsappDirect: "Fast Track via WhatsApp Admissions",
      successTitle: "Admissions Application Submitted",
      successDesc: "Thank you for applying. An Admissions Officer will review your application and contact you within 2 business hours to schedule your technical readiness call."
    },
    faq: {
      badge: "Clarity & Confidence",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about prerequisites, 0% installments, laptops, and career placement."
    },
    cta: {
      badge: "Launch Your Tech Career",
      title: "Ready to Build the Future in Code?",
      subtitle: "Join over 850 graduates who transformed their careers with CODEFORGE’s industry-grade bootcamps.",
      buttonPrimary: "EXPLORE ALL TRACKS",
      buttonSecondary: "TALK TO ADMISSIONS",
      hotline: "Admissions Hotline: +971 4 700 89120 (Dubai) • +971 2 500 78200 (Abu Dhabi)"
    },
    footer: {
      brandBio: "CODEFORGE UAE is the premier coding and tech bootcamp academy in the Middle East, delivering rigorous project-based training in software engineering, AI, cybersecurity, and product design.",
      quickLinks: "Navigation",
      tracks: "Bootcamp Tracks",
      campuses: "Campus Hubs",
      contactUs: "Admissions & Support",
      rights: "All rights reserved.",
      disclaimer: "Portfolio Demonstration: CODEFORGE UAE is a conceptual tech education institute portfolio showcase designed by WebStudio AE. All graduate figures, salaries, and company names are for portfolio demonstration purposes.",
      dubaiCampus: "Building 3, Level 2, Dubai Internet City, Dubai, UAE",
      abudhabiCampus: "Al Khatem Tower, Level 15, ADGM Square, Al Maryah Island, Abu Dhabi, UAE"
    }
  },
  ar: {
    nav: {
      backToPortfolio: "← العودة إلى سابقة الأعمال",
      brandTagline: "أكاديمية ومعسكرات البرمجة والتقنية في الإمارات",
      programs: "المعسكرات التدريبية",
      matcher: "مكتشف المسار",
      journey: "منهجية التعلم",
      outcomes: "التوظيف والنتائج",
      whyCodeforge: "لماذا كود فورج",
      faculty: "المدربون والخبراء",
      campuses: "المقرات والمختبرات",
      insights: "الرؤى التقنية",
      faq: "الأسئلة الشائعة",
      whatsappAdvisor: "واتساب القبول",
      applyNow: "التقديم على الدفعة",
      phone: "٠٤٧٠٠٨٩١٢٠ ٩٧١+",
      switchLang: "English"
    },
    hero: {
      badge: "التسجيل مفتوح للدفعة القادمة • تدريب عملي ١٠٠٪ قائم على المشاريع",
      titleLine1: "ابنِ مسارك المهني القادم",
      titleHighlight: "في قطاع البرمجة والتقنية.",
      subtitle: "معسكرات تدريبية مكثفة وتطبيقية في هندسة البرمجيات، وعلوم البيانات، والذكاء الاصطناعي، والحوسبة السحابية مصممة خصيصاً لتلبية متطلبات التوظيف التقني في الإمارات والخليج.",
      exploreCta: "استكشف المعسكرات",
      advisorCta: "تحدث مع مسؤول القبول",
      syllabiCta: "تحميل الخطة الدراسية",
      statsHired: "+٨٥٠",
      statsHiredLabel: "خريج تم توظيفهم",
      statsPlacement: "٨٨٪",
      statsPlacementLabel: "معدل التوظيف التقني",
      statsDuration: "١٢-١٦ أسبوعاً",
      statsDurationLabel: "مدة المعسكر المكثف",
      statsCampuses: "دبي • أبوظبي",
      statsCampusesLabel: "مقرات ومختبرات التدريب",
      fictionalNotice: "مشروع استعراضي تعريفي • كود فورج الإمارات"
    },
    trustStrip: {
      trustedBy: "شبكة التوظيف والمنظومة التقنية في دولة الإمارات",
      subtext: "خريجونا يعملون في كبرى شركات مدينة دبي للإنترنت، ومنصات التقنية المالية، وشركات Hub71 بأبوظبي."
    },
    catalog: {
      badge: "المسارات الهندسية الرئيسية",
      title: "معسكرات البرمجة والتقنية المكثفة",
      subtitle: "مناهج برمجية متطورة تُحاكي بيئات الإنتاج الحقيقية ويقودها كبار المهندسين في كبرى شركات التقنية.",
      filterAllCategories: "كافة التخصصات",
      filterAllModes: "كافة صيغ الدوام",
      filterDiscipline: "المجال التقني",
      filterMode: "صيغة الدوام",
      filterBudget: "أقصى ميزانية",
      filterSearchPlaceholder: "ابحث بلغة البرمجة، أو الإطار، أو المهارة (مثل Next.js، Python، AWS)...",
      showingResults: "عرض {count} معسكرات تدريبية",
      resetFilters: "إعادة ضبط التصفية",
      viewCurriculum: "عرض الخطة الدراسية التفصيلية",
      weeks: "أسابيع",
      fullTime: "دوام كامل مكثف",
      partTime: "دوام جزئي مسائي",
      hybrid: "مدمج (حضوري + عن بُعد)",
      online: "عبر الإنترنت (مباشر)",
      noResultsTitle: "لا توجد مسارات تطابق خيارات التصفية الحالية",
      noResultsSubtitle: "جرّب تعديل معايير الميزانية أو صيغة الدوام لاكتشاف كافة المسارات المتاحة.",
      modalOverview: "نظرة عامة على المنهج",
      modalOutcome: "المسمى الوظيفي المستهدف للتخرج",
      modalTechStack: "التقنيات والأدوات البرمجية المكتسبة",
      modalCurriculum: "خارطة الوحدات والمشاريع (٦ وحدات)",
      modalTuition: "الرسوم وخيارات التقسيط بدون فوائد",
      modalApply: "التقديم على هذا المسار",
      modalClose: "إغلاق",
      techStackLabel: "حزمة التقنيات:"
    },
    matcher: {
      badge: "المكتشف التفاعلي للمسار التقني",
      title: "اكتشف المسار البرمجي الأنسب لك",
      subtitle: "أجب عن ٣ أسئلة سريعة لتحديد تخصص هندسة البرمجيات أو الذكاء الاصطناعي الذي يطابق خلفيتك وطموحك.",
      step1Title: "الخطوة ٠١: ما هو طموحك المهني الأساسي في قطاع التقنية؟",
      step1Desc: "اختر الدور الوظيفي الذي تسعى للعمل به خلال الـ ٤ إلى ٦ أشهر القادمة.",
      step2Title: "الخطوة ٠٢: ما هي خلفيتك الحالية في البرمجة؟",
      step2Desc: "حدد مستوى خبرتك الحالي لضبط المنهج الأنسب لنقطة انطلاقك.",
      step3Title: "الخطوة ٠٣: ما هو جدول الدراسة والدوام المفضل لديك؟",
      step3Desc: "اختر الصيغة التي تلائم التزاماتك اليومية وجدول أعمالك.",
      nextStep: "المتابعة",
      prevStep: "السابق",
      findMatches: "عرض التوصية البرمجية",
      resetFinder: "إعادة التقييم",
      recommendedTrack: "المسار التدريبي الموصى به",
      whyThisTrack: "لماذا يناسب هذا المسار طموحك المهني؟",
      applyTrack: "التقديم على المسار الموصى به",
      ambitions: {
        softwareEng: "مهندس برمجيات وتطبيقات الويب (Full-Stack)",
        softwareEngDesc: "بناء وتطوير تطبيقات الويب الحديثة باستخدام TypeScript و React و Next.js و Node.js.",
        aiData: "عالم بيانات ومهندس ذكاء اصطناعي",
        aiDataDesc: "بناء نماذج تعلم الآلة، ومعالجة اللغات الطبيعية، ووكلاء الذكاء الاصطناعي التوليدي.",
        cyberCloud: "أخصائي الحوسبة السحابية والأمن السيبراني",
        cyberCloudDesc: "هندسة بنية AWS السحابية، وحاويات Docker/K8s، والتصدي للهجمات السيبرانية.",
        uiuxProduct: "مصمم تجربة وواجهة المستخدم (UX/UI)",
        uiuxProductDesc: "تصميم أنظمة واجهات متكاملة في Figma ونماذج تفاعلية واختبار سهولة الاستخدام.",
        mobileApp: "مهندس تطبيقات الهواتف الذكية (iOS و Android)",
        mobileAppDesc: "برمجة تطبيقات الهواتف الذكية عالية الأداء باستخدام React Native و Flutter و Firebase."
      },
      backgrounds: {
        completeBeginner: "مبتدئ تماماً (بدون أي خلفية برمجية سابقة)",
        techAdjacent: "مجال قريب من التقنية (تصميم، تسويق، أو إدارة منتجات)",
        stemDegree: "خلفية علمية أو هندسية أو تجارية (تفكير تحليلي)",
        juniorDev: "مبرمج مبتدئ / تعلم ذاتي (أسعى لاكتساب خبرة بيئة العمل الحقيقية)"
      },
      schedules: {
        fullTimeImmersive: "دوام كامل مكثف (الإثنين – الجمعة، ٩ ص – ٥ م)",
        partTimeEvening: "دوام جزئي مسائي وعطلات (مرن للموظفين)",
        hybridFlex: "نمط مدمج (مختبرات حضورية + مشاريع عن بُعد)"
      }
    },
    journey: {
      badge: "منهجية التدريب",
      title: "المراحل الأربع لبناء مهندس البرمجيات",
      subtitle: "كيف تحول كود فورج المبتدئين إلى مهندسي برمجيات جاهزين لبيئة الإنتاج خلال ١٢-١٦ أسبوعاً.",
      step1: "المرحلة ٠١",
      step1Title: "الأسس والمفاهيم الجوهرية",
      step1Desc: "إتقان أسس علوم الحاسب، وهياكل البيانات، وأدوات Git الطرفية، وخوارزميات حل المشكلات.",
      step2: "المرحلة ٠٢",
      step2Title: "بناء المشاريع ومراجعة الكود",
      step2Desc: "بناء ٤ تطبيقات تدريجية مع مراجعة دقيقة لطلبات الدمج (PRs) من قِبل كبار المبرمجين.",
      step3: "المرحلة ٠٣",
      step3Title: "مشروع التخرج المؤسسي الحقيقي",
      step3Desc: "العمل ضمن فرق سكرام مرنة لبناء ونشر تطبيق سحابي أو ذكاء اصطناعي متكامل للإنتاج.",
      step4: "المرحلة ٠٤",
      step4Title: "يوم العرض والتوظيف (Demo Day)",
      step4Desc: "محاكاة مقابلات البرمجة الحية، وتطوير السيرة الذاتية، وعرض المشاريع أمام مدراء التوظيف والتقنية."
    },
    outcomes: {
      badge: "سجل التوظيف والنتائج",
      title: "نتائج مهنية حقيقية وعائد استثماري ملموس",
      subtitle: "ينضم خريجونا لفرق الهندسة والذكاء الاصطناعي والمنتجات في كبرى شركات التقنية بالمنطقة.",
      stat1Label: "متوسط الراتب الشهري المبدئي للخريجين",
      stat2Label: "متوسط الزيادة في الدخل بعد التخرج",
      stat3Label: "متوسط الأيام حتى استلام أول عرض وظيفي",
      hiringPartnersTitle: "شبكة شركاء التوظيف والبيئة التقنية",
      careerSupportTitle: "دعم وتوجيه مهني فردي (1-on-1)",
      careerSupportDesc: "يتم تعيين مستشار مهني تقني مخصص لكل طالب لتحسين ملف GitHub، وإجراء مقابلات المحاكاة على السبورة البيضاء، وتسهيل المقابلات المباشرة مع مدراء التوظيف."
    },
    caseStudy: {
      badge: "قصة نجاح الخريجين",
      title: "قصة نجاح وتحول مهني ملهمة",
      subtitle: "كيف تحول طارق من إدارة الضيافة الفندقية إلى مهندس برمجيات بدوام كامل في دبي.",
      clientLabel: "ملف الخريج",
      scenarioLabel: "التحول المهني",
      challengeTitle: "التحدي الأولي قبل المعسكر",
      baselineTitle: "نقطة البداية",
      interventionTitle: "التدريب المكثف في كود فورج",
      outcomesTitle: "نتيجة التوظيف",
      stat1Label: "مدة المعسكر البرمجي",
      stat2Label: "الراتب الشهري المبدئي",
      stat3Label: "المدة حتى استلام العرض",
      demoNote: "أرقام دراسة الحالة تمثل معايير استعراضية ونماذج سابقة أعمال."
    },
    pillars: {
      badge: "فلسفتنا التعليمية",
      title: "الركائز الست لتجربة كود فورج",
      subtitle: "صُممت لبناء قدرات برمجية وهندسية عميقة بدلاً من مجرد دروس نظرية سطحية.",
      devAdvantage: "الميزة للمتدرب:",
      employerImpact: "القيمة لمدراء التوظيف:"
    },
    leadership: {
      badge: "الهيئة التدريسية",
      title: "الخبراء والمدربون وكبار المهندسين",
      subtitle: "يقدم المعسكرات نخبة من كبار مهندسي البرمجيات ومدراء التقنية في كبرى شركات الخليج."
    },
    insights: {
      badge: "المعرفة التقنية",
      title: "الرؤى البرمجية والأدلة المهنية",
      subtitle: "مقالات عملية حول مقابلات البرمجة الحية، والتقنيات الصاعدة، وسوق التوظيف الهندسي في الإمارات.",
      readArticle: "قراءة المقال التقني ←",
      minRead: "دقائق للقراءة",
      publishedIn: "تاريخ النشر",
      modalClose: "إغلاق المقال"
    },
    campuses: {
      badge: "بيئة ومختبرات التدريب",
      title: "مقراتنا ومختبراتنا التقنية الحديثة",
      subtitle: "مختبرات برمجية متطورة بمواصفات عالية تقع في مدينة دبي للإنترنت وجزيرة المارية بأبوظبي.",
      scheduleTour: "حجز جولة في المختبرات",
      modalTitle: "حجز موعد جولة في المختبر وجلسة كود تجريبية",
      modalSubtitle: "تفضل بزيارة محطات عمل المطورين، وقابل أحد المدربين، واحضر جانباً من مختبر برمجي حي.",
      selectCampus: "اختر مقر المختبر التقني",
      preferredDate: "تاريخ الزيارة المفضل",
      fullName: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف / واتساب (٩٧١+)",
      trackInterest: "المسار التدريبي المستهدف",
      submitTour: "تأكيد موعد الجولة التقنية",
      tourConfirmedTitle: "تم استلام طلب زيارة المقر",
      tourConfirmedDesc: "سيتواصل معك منسق القبول لتأكيد موعد جولتك واستقبالك في المختبر المحدد."
    },
    reviews: {
      badge: "آراء الخريجين",
      title: "ماذا يقول خريجو كود فورج",
      subtitle: "تجارب وتقييمات حقيقية من مهنيين انطلقوا في عالم التقنية والبرمجة عبر معسكراتنا.",
      verifiedGraduate: "خريج معتمد",
      careerOutcome: "تم توظيفه كـ",
      prevReview: "التقييم السابق",
      nextReview: "التقييم التالي"
    },
    admissions: {
      badge: "التقديم والقبول",
      title: "قدّم الآن للالتحاق بالدفعة القادمة",
      subtitle: "المقاعد محدودة بـ ٢٠ طالباً فقط في كل دفعة لضمان مراجعة الكود والإرشاد الفردي المركز.",
      step1: "٠١. البيانات الشخصية",
      step2: "٠٢. اختيار المسار",
      step3: "٠٣. صيغة الدوام",
      step4: "٠٤. الخلفية والتمويل",
      step5: "٠٥. المراجعة والإرسال",
      step1Title: "معلومات الاتصال والهوية",
      step2Title: "اختر المسار البرمجي المستهدف",
      step3Title: "صيغة وجدول الدراسة المفضل",
      step4Title: "خلفيتك السابقة وخطة السداد",
      step5Title: "مراجعة وتأكيد طلب الالتحاق",
      fullName: "الاسم الكامل (كما في الهوية أو جواز السفر)",
      email: "البريد الإلكتروني",
      phone: "رقم هاتف الإمارات (٠٥٠ / ٠٥٥ / ٠٥٨ ٩٧١+)",
      selectTrack: "اختر المسار الهندسي المستهدف",
      selectSchedule: "اختر صيغة الدوام",
      paymentPlan: "طريقة سداد الرسوم الدراسية",
      backgroundNotes: "أخبرنا بإيجاز عن خلفيتك ودوافعك لتعلم البرمجة",
      submitApplication: "إرسال طلب القبول النهائي",
      next: "المتابعة",
      back: "الرجوع",
      whatsappDirect: "التواصل السريع عبر واتساب القبول",
      successTitle: "تم إرسال طلبك بنجاح",
      successDesc: "شكراً لاهتمامك. سيقوم مسؤول القبول بمراجعة ملفك والتواصل معك خلال ساعتي عمل لتحديد موعد مكالمة الجاهزية التقنية."
    },
    faq: {
      badge: "الشفافية والثقة",
      title: "الأسئلة الشائعة والأكثر تكراراً",
      subtitle: "كل ما تحتاج معرفته عن المتطلبات السابقة، خطط التقسيط بدون فوائد، الأجهزة المحمولة، ودعم التوظيف."
    },
    cta: {
      badge: "انطلق في عالم البرمجة",
      title: "هل أنت مستعد لبناء مستقبلك بأكواد برمجية؟",
      subtitle: "انضم لأكثر من ٨٥٠ خريجاً أحدثوا تحولاً جذرياً في مسيرتهم المهنية عبر معسكرات كود فورج التطبيقية.",
      buttonPrimary: "استكشف كافة المسارات",
      buttonSecondary: "تحدث مع مسؤول القبول",
      hotline: "خط القبول المباشر: ٠٤٧٠٠٨٩١٢٠ ٩٧١+ (دبي) • ٠٢٥٠٠٧٨٢٠٠ ٩٧١+ (أبوظبي)"
    },
    footer: {
      brandBio: "كود فورج الإمارات هي الأكاديمية الرائدة لمعسكرات البرمجة والتقنية في الشرق الأوسط، حيث تقدم تدريباً هندسياً مكثفاً قائماً على المشاريع في تطوير البرمجيات، والذكاء الاصطناعي، والأمن السيبراني، وتصميم المنتجات.",
      quickLinks: "روابط سريعة",
      tracks: "المسارات التدريبية",
      campuses: "المقرات والمختبرات",
      contactUs: "القبول والدعم",
      rights: "جميع الحقوق محفوظة.",
      disclaimer: "مشروع استعراضي تعريفي: كود فورج الإمارات هو نموذج لأكاديمية برمجة تنفيذية تم تطويره بواسطة WebStudio AE لعرض سابقة الأعمال. جميع أرقام الخريجين والرواتب والأسماء هي لأغراض العرض التوضيحي.",
      dubaiCampus: "المبنى ٣، الطابق ٢، مدينة دبي للإنترنت، دبي، الإمارات",
      abudhabiCampus: "برج الخاتم، الطابق ١٥، مربعة سوق أبوظبي العالمي، جزيرة المارية، أبوظبي، الإمارات"
    }
  }
};
