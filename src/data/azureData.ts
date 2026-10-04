export interface AzureYacht {
  id: string;
  name: string;
  nameAr: string;
  lengthFt: number;
  guestCapacity: number;
  cabins: number;
  hourlyRateAED: number;
  dailyRateAED: number;
  occasionType: string;
  occasionTypeAr: string;
  image: string;
  amenities: string[];
  amenitiesAr: string[];
  specs: {
    speedKnots: string;
    speedKnotsAr: string;
    crewMembers: number;
    builder: string;
  };
}

export interface AzureExperience {
  id: string;
  title: string;
  titleAr: string;
  idealFor: string;
  idealForAr: string;
  duration: string;
  durationAr: string;
  description: string;
  descriptionAr: string;
  sampleItinerary: string[];
  sampleItineraryAr: string[];
  image: string;
}

export interface AzureCaseStudy {
  clientTitle: string;
  clientTitleAr: string;
  location: string;
  locationAr: string;
  challenge: string;
  challengeAr: string;
  solution: string;
  solutionAr: string;
  metrics: {
    guestsHosted: string;
    guestsHostedAr: string;
    yachtsCoordinated: string;
    yachtsCoordinatedAr: string;
    satisfactionScore: string;
    satisfactionScoreAr: string;
  };
  image: string;
}

export interface AzureLeader {
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

export interface AzureInsight {
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

export interface AzureLocation {
  city: string;
  cityAr: string;
  marina: string;
  marinaAr: string;
  description: string;
  descriptionAr: string;
  address: string;
  addressAr: string;
  phone: string;
  hours: string;
  hoursAr: string;
}

export const AZURE_BRAND = {
  name: "AZURE YACHTS",
  nameAr: "أزور لليخوت الفاخرة",
  tagline: "The Sea, On Your Terms.",
  taglineAr: "رحلات بحرية فاخرة بمعايير استثنائية.",
  subheading: "Premium UAE luxury yacht charters in Dubai Marina and Abu Dhabi Corniche for sunset cruises, private celebrations, corporate hospitality, and fishing charters.",
  subheadingAr: "تأجير اليخوت والسوبر يخت الفاخرة في دبي مارينا وكورنيش أبوظبي لجولات الغروب، الاحتفالات الخاصة، الفعاليات المؤسسية، ورحلات الصيد البحري.",
  phone: "+971 4 456 9988",
  whatsapp: "https://wa.me/971509988112?text=Hello%20AZURE%20YACHTS,%20I%20would%20like%20to%20check%20yacht%20charter%20availability.",
  email: "charter@azureyachts.ae",
  fleetCount: "24",
  chartersCompleted: "8,500+",
  guestRating: "4.9",
  locationsCount: 2,
};

export const AZURE_BADGES = [
  { name: "GRANDEUR EVENTS", nameAr: "جراندور إيفنتس", badge: "VIP Hospitality Partner", badgeAr: "شريك الضيافة لكبار الشخصيات" },
  { name: "VELORA HOUSE", nameAr: "فيلورا هاوس", badge: "Luxury Concierge Partner", badgeAr: "شريك الكونسيرج الفاخر" },
  { name: "VIVANTA EVENTS", nameAr: "فيفانتا إيفنتس", badge: "Corporate Charter SLA", badgeAr: "عقود فعاليات الشركات" },
  { name: "DUBAI MARINA HQ", nameAr: "مقر دبي مارينا", badge: "Flagship Berth Pier 7", badgeAr: "المرسى الرئيسي بيير ٧" },
  { name: "FULL CREW & CHEF", nameAr: "طاقم كامل وطهاة", badge: "Licensed Captain & Crew", badgeAr: "قباطنة وطواقم مرخصة" },
  { name: "ALL-IN PRICING", nameAr: "تسعير شامل بالكامل", badge: "Fuel, Crew & Refreshments", badgeAr: "الوقود والطاقم والمشروبات" }
];

export const AZURE_YACHTS: AzureYacht[] = [
  {
    id: "azure-52",
    name: "AZURE Royal 52",
    nameAr: "أزور رويال ٥٢",
    lengthFt: 52,
    guestCapacity: 12,
    cabins: 2,
    hourlyRateAED: 1200,
    dailyRateAED: 9500,
    occasionType: "Sunset Cruise & Small Group",
    occasionTypeAr: "رحلات الغروب والمجموعات الخاصة",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1200&auto=format&fit=crop",
    amenities: ["Flybridge Sunbed", "Bluetooth Sound System", "Air-Conditioned Saloon", "Complimentary Ice & Soft Drinks"],
    amenitiesAr: ["منصة تشمس علوية (فلاي بريدج)", "نظام صوتي متطور مع بلوتوث", "صالون داخلي مكيف بالكامل", "ثلج ومشروبات منعشة مجانية"],
    specs: { speedKnots: "24 Knots", speedKnotsAr: "٢٤ عقدة", crewMembers: 2, builder: "Azimut Marine" }
  },
  {
    id: "azure-68",
    name: "AZURE Sovereign 68",
    nameAr: "أزور سوفرين ٦٨",
    lengthFt: 68,
    guestCapacity: 22,
    cabins: 3,
    hourlyRateAED: 2200,
    dailyRateAED: 16000,
    occasionType: "Birthday & Party Celebration",
    occasionTypeAr: "أعياد الميلاد وحفلات المناسبات",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
    amenities: ["Jacuzzi Sundeck", "Bose Outdoor Surround", "Teak Swim Platform", "Gourmet Kitchen & BBQ Station"],
    amenitiesAr: ["جاكوزي على سطح التشمس", "سماعات محيطية خارجية من بوز", "منصة سباحة خشبية خلفية", "مطبخ مجهز ومحطة مشاوي حية"],
    specs: { speedKnots: "28 Knots", speedKnotsAr: "٢٨ عقدة", crewMembers: 3, builder: "Sunseeker Yacht" }
  },
  {
    id: "azure-84",
    name: "AZURE Majesty 84",
    nameAr: "أزور ماجستي ٨٤",
    lengthFt: 84,
    guestCapacity: 35,
    cabins: 4,
    hourlyRateAED: 3800,
    dailyRateAED: 28000,
    occasionType: "Corporate Event & Hospitality",
    occasionTypeAr: "فعاليات الشركات وضيافة كبار الشخصيات",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=1200&auto=format&fit=crop",
    amenities: ["Master Ocean Suite", "Onboard Executive Chef Option", "Jet Ski & Seabob Deck", "Full VIP Saloon"],
    amenitiesAr: ["جناح ملكي بإطلالة بانورامية", "خيار طاهٍ تنفيذي خاص على المتن", "منصة جت سكي وسيبوب مائي", "صالون كبار الشخصيات الفاخر"],
    specs: { speedKnots: "26 Knots", speedKnotsAr: "٢٦ عقدة", crewMembers: 4, builder: "Gulf Craft Majesty" }
  },
  {
    id: "azure-105",
    name: "AZURE Emperor 105 Superyacht",
    nameAr: "أزور إمبيرور ١٠٥ سوبر يخت",
    lengthFt: 105,
    guestCapacity: 50,
    cabins: 5,
    hourlyRateAED: 6500,
    dailyRateAED: 48000,
    occasionType: "Corporate Event & Luxury Wedding",
    occasionTypeAr: "حفلات الزفاف الفاخرة وإطلاق المنتجات",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
    amenities: ["Sky Lounge Bar", "Helipad Deck Option", "3-Deck Luxury Dining", "Water Slide & Tender Boat"],
    amenitiesAr: ["سكاي لاونج وبار علوي", "منصة هبوط طائرات هليكوبتر", "تناول طعام فاخر عبر ٣ طوابق", "زلاقة مائية عملاقة وقارب سريع"],
    specs: { speedKnots: "22 Knots", speedKnotsAr: "٢٢ عقدة", crewMembers: 6, builder: "Benetti Yachts" }
  },
  {
    id: "azure-44",
    name: "AZURE Gulf Sport 44",
    nameAr: "أزور جلف سبورت ٤٤",
    lengthFt: 44,
    guestCapacity: 8,
    cabins: 1,
    hourlyRateAED: 950,
    dailyRateAED: 7200,
    occasionType: "Deep Sea Fishing & Adventure",
    occasionTypeAr: "صيد الأسماك في الأعماق والمغامرات",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
    amenities: ["Professional Fish Finder Sonar", "Outriggers & Live Bait Tank", "Shaded Seating Deck", "Catch Cleaning Service"],
    amenitiesAr: ["سونار متقدم لرصد الأسماك بالأعماق", "صنانير احترافية وحوض طعم حي", "جلسات خارجية مظللة ومريحة", "خدمة تنظيف وشواء الصيد فوراً"],
    specs: { speedKnots: "32 Knots", speedKnotsAr: "٣٢ عقدة", crewMembers: 2, builder: "Silvercraft Sport" }
  },
  {
    id: "azure-120",
    name: "AZURE Oceanis 120 Mega Yacht",
    nameAr: "أزور أوشينيس ١٢٠ ميجا يخت",
    lengthFt: 120,
    guestCapacity: 75,
    cabins: 6,
    hourlyRateAED: 9500,
    dailyRateAED: 75000,
    occasionType: "Multi-Day & VIP Mega Charter",
    occasionTypeAr: "رحلات الميجا يخت لعدة أيام وكبار الشخصيات",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    amenities: ["Full Deck Cinema & DJ Booth", "Spa & Beach Club Stern", "Michelin-Trained Chef Onboard", "VIP Butler Service"],
    amenitiesAr: ["سينما كاملة على السطح ومنصة دي جي", "نادي صحي (سبا) وبيتش كلوب خلفي", "طاهٍ عالمي حاصل على تصنيف ميشلان", "خدمة المساعد الشخصي (كبير الخدم VIP)"],
    specs: { speedKnots: "20 Knots", speedKnotsAr: "٢٠ عقدة", crewMembers: 8, builder: "Heesen Yachts" }
  }
];

export const AZURE_EXPERIENCES: AzureExperience[] = [
  {
    id: "sunset-cruise",
    title: "Dubai Marina Sunset & Skyline Cruise",
    titleAr: "جولة الغروب وأفق دبي مارينا الساحر",
    idealFor: "Couples & Small Groups",
    idealForAr: "الأزواج والعائلات والمجموعات الخاصة",
    duration: "2 to 3 Hours",
    durationAr: "من ساعتين إلى ٣ ساعات",
    description: "Cruise past Dubai Marina, Ain Dubai on Bluewaters Island, and Burj Al Arab as the golden sun sets into the Arabian Gulf.",
    descriptionAr: "إبحار بانورامي بمحاذاة قناة دبي مارينا، عين دبي في جزيرة بلوواترز، وبرج العرب مع مغيب الشمس الذهبي في مياه الخليج العربي.",
    sampleItinerary: [
      "Boarding at Dubai Marina Walk Berth",
      "Sailing through Bluewaters & Ain Dubai Wheel",
      "Anchor at JBR Lagoon for sunset photos",
      "Return cruise along illuminated Marina canal"
    ],
    sampleItineraryAr: [
      "الصعود على المتن في مرسى ممشى دبي مارينا",
      "الإبحار بجوار جزيرة بلوواترز وعجلة عين دبي",
      "الرسو في بحيرة جي بي آر لالتقاط صور الغروب والسباحة",
      "رحلة العودة عبر قناة المارينا المتلألئة بالأضواء"
    ],
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "birthday-celebration",
    title: "Private Birthday & Yacht Party",
    titleAr: "حفلات أعياد الميلاد والمناسبات الخاصة",
    idealFor: "Friends & Family Celebrations",
    idealForAr: "احتفالات الأصدقاء والعائلات والذكرى السنوية",
    duration: "4 Hours",
    durationAr: "٤ ساعات",
    description: "Celebrate with onboard DJ sound systems, custom balloon decorations, live BBQ catering, and swimming in Palm Jumeirah lagoon.",
    descriptionAr: "احتفل بأروع اللحظات مع أنظمة صوتية دي جي، تزيين بالبالونات والديكور المخصص، بوفيه مشاوي حية، والسباحة في مياه نخلة جميرا.",
    sampleItinerary: [
      "Welcome mocktails and red carpet boarding",
      "Anchor near Palm Jumeirah Atlantis for swimming",
      "Live BBQ dining on the flybridge",
      "Sunset party music and birthday cake presentation"
    ],
    sampleItineraryAr: [
      "عصائر ترحيبية منعشة وسجادة حمراء عند الصعود",
      "الرسو بالقرب من أتلانتس نخلة جميرا لممارسة السباحة",
      "تناول المشاوي الحية الطازجة على السطح العلوي",
      "موسيقى احتفالية وتقديم كعكة عيد الميلاد عند الغروب"
    ],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "corporate-event",
    title: "Corporate Hospitality & Product Launch",
    titleAr: "فعاليات الشركات والاجتماعات الراقية",
    idealFor: "Corporate Clients & HNWI Guests",
    idealForAr: "الشركات الكبرى، الوفود الرسمية، وكبار الشخصيات",
    duration: "4 to 8 Hours",
    durationAr: "من ٤ إلى ٨ ساعات",
    description: "Host executives, product launches, or client networking events on our 84ft to 120ft superyachts with full catering and branding.",
    descriptionAr: "استضف كبار التنفيذيين، تدشين المنتجات، أو جلسات التعارف على متن سوبر يخت من ٨٤ إلى ١٢٠ قدماً مع ضيافة فاخرة وتجهيز شعار شركتك.",
    sampleItinerary: [
      "Branded deck setup and executive seating",
      "Canapé and champagne reception",
      "Coastal cruise along Dubai shoreline",
      "Network lounge and sunset dinner"
    ],
    sampleItineraryAr: [
      "تجهيز السطح بهوية الشركة وجلسات تنفيذية مريحة",
      "استقبال بمقبلات الكانابيه والمشروبات الترحيبية",
      "جولة إبحار بطول سواحل دبي الساحرة",
      "لاونج للتواصل وعشاء فاخر متكامل على ضوء الغروب"
    ],
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "fishing-charter",
    title: "Deep Sea Fishing & Gulf Adventure",
    titleAr: "رحلات صيد الأسماك في أعماق الخليج",
    idealFor: "Fishing Enthusiasts & Families",
    idealForAr: "هواة الصيد البحري والمغامرات العائلية",
    duration: "4 Hours",
    durationAr: "٤ ساعات",
    description: "Head 12 miles offshore with professional fish-finding sonar, heavy tackle rods, live bait, and experienced captain guidance.",
    descriptionAr: "انطلق لمسافة ١٢ ميلاً بحرياً مع سونار متطور لرصد الأسماك، معدات صيد احترافية، طعم حي، وتوجيه من قبطان خبير بالصيد في دبي.",
    sampleItinerary: [
      "Early morning 6:00 AM departure from Dubai Marina",
      "Navigation to offshore deep sea fishing reefs",
      "Trolling for Kingfish, Barracuda & Hammour",
      "Catch cleaning and optional onboard grill"
    ],
    sampleItineraryAr: [
      "الانطلاق المبكر الساعة ٦:٠٠ صباحاً من دبي مارينا",
      "الإبحار إلى أفضل الشعب المرجانية والمناطق الغنية بالأسماك",
      "الصيد بالجر لسمك الكنعد، الباراكودا، والهامور",
      "تنظيف الصيد مع خيار الشواء المباشر على متن اليخت"
    ],
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "multi-day-charter",
    title: "Multi-Day GCC Island Voyage",
    titleAr: "رحلات الجزر لعدة أيام في الخليج العربي",
    idealFor: "Exotic Private Expeditions",
    idealForAr: "الرحلات الاستكشافية الفاخرة والعطلات الخاصة",
    duration: "2 to 5 Days",
    durationAr: "من يومين إلى ٥ أيام",
    description: "Overnight luxury yacht voyages exploring Sir Bani Yas Island, Abu Dhabi Corniche, and hidden Gulf coves in complete privacy.",
    descriptionAr: "رحلات بحرية فاخرة مع مبيت لاستكشاف جزيرة صير بني ياس، كورنيش أبوظبي، والجزر الهادئة بأعلى درجات الخصوصية والرفاهية.",
    sampleItinerary: [
      "Dubai to Abu Dhabi coastal passage",
      "Overnight anchor at Sir Bani Yas Island reserve",
      "Water sports, jet skis & gourmet dining onboard",
      "Return cruise to Dubai Marina berth"
    ],
    sampleItineraryAr: [
      "المسار الساحلي الممتد من دبي إلى العاصمة أبوظبي",
      "الرسو والمبيت بجوار محمية جزيرة صير بني ياس الطبيعية",
      "رياضات مائية، جت سكي، ووجبات طعام فاخرة طوال اليوم",
      "رحلة العودة والإرساء في مرسى دبي مارينا"
    ],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop"
  }
];

export const AZURE_CASE_STUDY: AzureCaseStudy = {
  clientTitle: "International Luxury Tech Brand — 60-Guest Product Launch",
  clientTitleAr: "إطلاق منتج لعلامة تقنية فاخرة عالمية (٦٠ ضيفاً)",
  location: "Dubai Marina & Palm Jumeirah Coastline",
  locationAr: "دبي مارينا وسواحل نخلة جميرا",
  challenge: "Needed a unique luxury venue for a 60-guest VIP product launch requiring seamless branding, audio-visual setups, and high-end catering.",
  challengeAr: "الحاجة إلى موقع فاخر واستثنائي لإطلاق منتج تقني جديد بحضور ٦٠ ضيفاً رفيع المستوى مع دمج الهوية البصرية وأنظمة صوت متقدمة وضيافة متكاملة.",
  solution: "Coordinated a dual-yacht formation using AZURE Majesty 84 and Emperor 105 with synchronized cruising, onboard catering chef, and branded sundecks.",
  solutionAr: "تنسيق تشكيل بحري متزامن باستخدام يختين سوبر يخت (أزور ماجستي ٨٤ وإمبيرور ١٠٥) مع مسار إبحار منسق، طهاة ضيافة على المتن، وأسطح مخصصة للهوية.",
  metrics: {
    guestsHosted: "60 VIP Guests",
    guestsHostedAr: "٦٠ ضيفاً من كبار الشخصيات",
    yachtsCoordinated: "2 Superyachts",
    yachtsCoordinatedAr: "٢ سوبر يخت متزامن",
    satisfactionScore: "100% Client Rating",
    satisfactionScoreAr: "١٠٠٪ رضا العميل والضيوف"
  },
  image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop"
};

export const AZURE_LEADERS: AzureLeader[] = [
  {
    name: "Capt. Hamdan Al-Zaabi",
    nameAr: "القبطان حمدان الزعابي",
    role: "Founder & Fleet Commodore",
    roleAr: "المؤسس ورئيس الأسطول البحري",
    experience: "20+ Yrs Master Captain (MCA 3000GT Licensed)",
    experienceAr: "خبرة تفوق ٢٠ عاماً كقبطان معتمد (ترخيص MCA 3000GT)",
    specialization: "Arabian Gulf Coastal Navigation & Superyachts",
    specializationAr: "الملاحة الساحلية في الخليج العربي وقيادة السوبر يخت",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Soraya Vane",
    nameAr: "ثريا فان",
    role: "Head of Charter Operations",
    roleAr: "مديرة عمليات وتنسيق الرحلات",
    experience: "14+ Yrs Luxury Yacht Concierge & Booking",
    experienceAr: "١٤+ عاماً في حجوزات وكونسيرج اليخوت الفاخرة",
    specialization: "Ex-Monaco Yacht Show VIP Director",
    specializationAr: "مديرة علاقات كبار الشخصيات السابقة بمعرض موناكو لليخوت",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Chef Jean-Luc Moreau",
    nameAr: "الشيف جان لوك مورو",
    role: "Head of Onboard Culinary & Catering",
    roleAr: "رئيس الطهاة والضيافة البحرية",
    experience: "15+ Yrs Executive Chef (Michelin Star Trained)",
    experienceAr: "١٥+ عاماً رئيس طهاة (تدرب في مطاعم ميشلان)",
    specialization: "Gourmet Mediterranean & Seafood Menus",
    specializationAr: "قوائم الطعام المتوسطية الراقية والمأكولات البحرية الطازجة",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Tariq Al-Farsi",
    nameAr: "طارق الفارسي",
    role: "Head of Events & Private Celebrations",
    roleAr: "مدير الفعاليات والاحتفالات الخاصة",
    experience: "12+ Yrs High-End UAE Event Production",
    experienceAr: "١٢+ عاماً في تنظيم وإنتاج أضخم الفعاليات بالإمارات",
    specialization: "Corporate Hospitality & Sunset Weddings",
    specializationAr: "ضيافة الشركات، حفلات الزفاف، وإطلاق المنتجات الحصرية",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
  }
];

export const AZURE_INSIGHTS: AzureInsight[] = [
  {
    id: "yacht-size-guide",
    title: "Choosing the Right Yacht Size for Your Group",
    titleAr: "كيف تختار حجم اليخت المناسب لعدد ضيوفك",
    category: "Charter Guide",
    categoryAr: "دليل الحجوزات",
    readTime: "4 min read",
    readTimeAr: "٤ دقائق قراءة",
    summary: "How to match guest capacity, flybridge deck space, and cabin layouts for 8 to 75 guests.",
    summaryAr: "دليل مفصل لاختيار السعة المناسبة، مساحات الأسطح، وتوزيع الكابينات من ٨ وحتى ٧٥ ضيفاً.",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "best-time-dubai-charter",
    title: "The Best Time of Day for a Dubai Yacht Charter",
    titleAr: "أفضل أوقات اليوم للإبحار في دبي مارينا",
    category: "Route Tips",
    categoryAr: "نصائح المسارات",
    readTime: "5 min read",
    readTimeAr: "٥ دقائق قراءة",
    summary: "Comparing morning calm waters, golden sunset skyline views, and night city light cruises.",
    summaryAr: "مقارنة شاملة بين هدوء الصباح المبكر، سحر الغروب الذهبي، وجولات المساء بين أضواء المدينة.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "planning-corporate-yacht-event",
    title: "Planning a Corporate Event on the Water",
    titleAr: "تنظيم فعاليات واجتماعات الشركات على متن اليخت",
    category: "Corporate",
    categoryAr: "فعاليات الشركات",
    readTime: "5 min read",
    readTimeAr: "٥ دقائق قراءة",
    summary: "AV setups, branded decks, security protocol, and gourmet catering for C-suite networking.",
    summaryAr: "تجهيز الشاشات والصوتيات، تخصيص الهوية، بروتوكولات الأمان، وقوائم الطعام للتنفيذيين.",
    image: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "whats-included-in-charter",
    title: "What's Included in a Private Yacht Charter?",
    titleAr: "ما الذي تشمله أسعار تأجير اليخوت الخاصة؟",
    category: "Inclusions",
    categoryAr: "الخدمات المشمولة",
    readTime: "3 min read",
    readTimeAr: "٣ دقائق قراءة",
    summary: "Understanding fuel, licensed captain, crew, ice, soft drinks, safety gear, and optional add-ons.",
    summaryAr: "توضيح كامل للوقود، القبطان المرخص، الطاقم، المشروبات، معدات السلامة، والإضافات الاختيارية.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "top-dubai-charter-routes",
    title: "Top Yacht Charter Routes Around Dubai",
    titleAr: "أجمل مسارات ووجهات الإبحار في دبي",
    category: "Itineraries",
    categoryAr: "خطوط السير",
    readTime: "5 min read",
    readTimeAr: "٥ دقائق قراءة",
    summary: "Cruising Dubai Marina Canal, JBR Lagoon, Atlantis Palm Jumeirah, and World Islands.",
    summaryAr: "مسار قناة دبي مارينا، بحيرة جي بي آر، فندق أتلانتس نخلة جميرا، وجزر العالم الخلابة.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "yacht-etiquette-tips",
    title: "Yacht Etiquette: What Guests Should Know",
    titleAr: "إتيكيت وقواعد الإبحار على متن اليخوت الفاخرة",
    category: "Guest Guide",
    categoryAr: "إرشادات الضيوف",
    readTime: "4 min read",
    readTimeAr: "٤ دقائق قراءة",
    summary: "Barefoot rules on deck, captain authority, safety briefings, and tipping recommendations.",
    summaryAr: "إرشادات الأحذية على السطح الخشبي، تعليمات السلامة للقبطان، والإكراميات المستحبة للطاقم.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop"
  }
];

export const AZURE_LOCATIONS: AzureLocation[] = [
  {
    city: "DUBAI",
    cityAr: "دبي",
    marina: "Dubai Marina Walk — Pier 7 Berth",
    marinaAr: "ممشى دبي مارينا — مرسى بيير ٧",
    description: "Flagship departure marina located directly at Pier 7 with VIP valet parking, guest lounge, and direct canal access.",
    descriptionAr: "المرسى الرئيسي للانطلاق بجوار بيير ٧ مع خدمة صف السيارات لكبار الشخصيات، صالة ضيافة مكيفة، وخروج فوري للبحر.",
    address: "Pier 7 Marina Promenade, Dubai Marina, Dubai, UAE",
    addressAr: "ممشى مارينا بيير ٧، دبي مارينا، دبي، الإمارات",
    phone: "+971 4 456 9988",
    hours: "Daily: 8:00 AM - 11:00 PM",
    hoursAr: "يومياً: من ٨:٠٠ صباحاً حتى ١١:٠٠ مساءً"
  },
  {
    city: "ABU DHABI",
    cityAr: "أبوظبي",
    marina: "Abu Dhabi Corniche Marina",
    marinaAr: "مرسى كورنيش أبوظبي",
    description: "Capital departure point situated along the Corniche with immediate access to Lulu Island and Yas Marina.",
    descriptionAr: "نقطة الانطلاق في العاصمة على كورنيش أبوظبي مع إبحار مباشر وسريع نحو جزيرة لولو وجزيرة ياس.",
    address: "Corniche Marina Pier B, Abu Dhabi, UAE",
    addressAr: "مرسى الكورنيش رصيف B، أبوظبي، الإمارات",
    phone: "+971 2 677 3344",
    hours: "Daily: 8:00 AM - 10:00 PM",
    hoursAr: "يومياً: من ٨:٠٠ صباحاً حتى ١٠:٠٠ مساءً"
  }
];

export const AZURE_TESTIMONIALS = [
  {
    quote: "AZURE made my sister's birthday unforgettable — the crew, the sunset, the catering, the whole experience was 5-star perfection.",
    quoteAr: "جعلت أزور عيد ميلاد أختي تجربة لا تُنسى — الطاقم، إطلالة الغروب، المشاوي والضيافة، كانت الرحلة متكاملة بمستوى ٥ نجوم.",
    clientName: "Noora Al Zaabi",
    clientNameAr: "نورة الزعابي",
    vehicle: "AZURE Sovereign 68",
    vehicleAr: "أزور سوفرين ٦٨",
    location: "Dubai Marina",
    locationAr: "دبي مارينا",
    rating: 5
  },
  {
    quote: "We hosted 50 VIP clients for our tech product launch. The Majesty 84 superyacht was stunning and the staff handled everything flawlessly.",
    quoteAr: "استضفنا ٥٠ عميلاً بارزاً لإطلاق منتجنا الجديد. كان سوبر يخت ماجستي ٨٤ مبهراً وقام الطاقم بإدارة الحفل والضيافة بأعلى احترافية.",
    clientName: "Jonathan Sterling",
    clientNameAr: "جوناثان ستيرلينغ",
    vehicle: "AZURE Majesty 84",
    vehicleAr: "أزور ماجستي ٨٤",
    location: "Dubai Coastline",
    locationAr: "سواحل دبي",
    rating: 5
  },
  {
    quote: "Deep sea fishing trip was fantastic. We caught Kingfish and Barracuda, and the captain grilled our catch fresh on deck.",
    quoteAr: "رحلة صيد أعماق ممتازة جداً. اصطدنا سمك الكنعد والباراكودا، وقام القبطان بشواء الصيد طازجاً لنا على متن اليخت مباشرة.",
    clientName: "Sarih Al-Hassan",
    clientNameAr: "صريح الحسن",
    vehicle: "AZURE Gulf Sport 44",
    vehicleAr: "أزور جلف سبورت ٤٤",
    location: "Dubai Offshore",
    locationAr: "أعماق دبي",
    rating: 5
  },
  {
    quote: "Sunset cruise around Palm Jumeirah and Ain Dubai was the highlight of our trip to Dubai. Smooth booking on WhatsApp.",
    quoteAr: "كانت جولة الغروب حول نخلة جميرا وعين دبي أجمل ما عشناه خلال زيارتنا لدبي. الحجز عبر واتساب كان سريعاً ومريحاً للغاية.",
    clientName: "Claire Dupont",
    clientNameAr: "كلير دوبونت",
    vehicle: "AZURE Royal 52",
    vehicleAr: "أزور رويال ٥٢",
    location: "Bluewaters Dubai",
    locationAr: "بلوواترز دبي",
    rating: 5
  },
  {
    quote: "Exceptional multi-day charter to Sir Bani Yas Island. Full luxury service, gourmet food, and absolute privacy.",
    quoteAr: "رحلة استثنائية لعدة أيام إلى جزيرة صير بني ياس. خدمة فندقية فائقة، طعام فاخر، وخصوصية تامة لا مثيل لها.",
    clientName: "Fahad Al-Maktoum",
    clientNameAr: "فهد المكتوم",
    vehicle: "AZURE Oceanis 120",
    vehicleAr: "أزور أوشينيس ١٢٠",
    location: "Abu Dhabi",
    locationAr: "أبوظبي",
    rating: 5
  }
];

export const AZURE_FAQS = [
  {
    question: "How many guests can your yachts accommodate?",
    questionAr: "كم عدد الضيوف الذي تستوعبه يخوتكم؟",
    answer: "Our fleet ranges from 44ft sports boats for 8 guests up to 120ft mega yachts accommodating up to 75 guests for private celebrations and corporate events.",
    answerAr: "يتراوح أسطولنا من قوارب الصيد ٤٤ قدماً لـ ٨ ضيوف وحتى الميجا يخت ١٢٠ قدماً التي تتسع لـ ٧٥ ضيفاً للاحتفالات الخاصة وفعاليات الشركات الكبرى."
  },
  {
    question: "Is catering included in the yacht charter price?",
    questionAr: "هل يشمل سعر تأجير اليخت المأكولات والضيافة؟",
    answer: "All charters include complimentary ice, water, and soft drinks. Gourmet live BBQ catering, canapés, or Michelin-trained chef dining can be added upon request.",
    answerAr: "تشمل جميع الرحلات المياه المعدنية والثلج والمشروبات المنعشة مجاناً. كما يمكن إضافة بوفيه المشاوي الحية، المقبلات الفاخرة، أو طهاة ميشلان حسب رغبتكم."
  },
  {
    question: "Can I bring my own food, drinks, or decorations onboard?",
    questionAr: "هل يُسمح بإحضار الأطعمة والمشروبات أو زينة الحفلات الخاصة بنا؟",
    answer: "Yes! Guests are welcome to bring their own food, beverages, and celebration cake. Custom balloon and theme decor can also be arranged by our team.",
    answerAr: "نعم بكل تأكيد! نرحب بإحضاركم للأطعمة والمشروبات المفضلة وكعكة الاحتفال. كما يسر فريقنا تجهيز ديكور البالونات والزينة الخاصة بناءً على طلبكم."
  },
  {
    question: "Do you offer multi-day charters to other emirates?",
    questionAr: "هل تقدمون رحلات بحرية لعدة أيام إلى الإمارات الأخرى؟",
    answer: "Yes. We arrange overnight and multi-day GCC luxury charters exploring Abu Dhabi, Sir Bani Yas Island, and coastal coves with master cabins and crew.",
    answerAr: "نعم، ننظم رحلات بحرية فاخرة مع المبيت لعدة أيام لاستكشاف أبوظبي، جزيرة صير بني ياس، والجزر والخلجان الهادئة مع كابينات نوم فاخرة وطاقم متكامل."
  },
  {
    question: "What happens in case of bad weather or high sea swells?",
    questionAr: "ما الإجراء المتبع في حال سوء الأحوال الجوية أو ارتفاع الأمواج؟",
    answer: "Safety is our priority. If marine authorities issue a sea warning or weather prevents safe sailing, your booking will be rescheduled or refunded.",
    answerAr: "سلامتكم هي أولويتنا القصوى. في حال أصدرت السلطات البحرية تحذيراً ملاحياً، يتم إعادة جدولة موعد رحلتكم بكل مرونة أو استرداد المبلغ بالكامل."
  },
  {
    question: "Is a licensed captain and professional crew included in the price?",
    questionAr: "هل القبطان المرخص والطاقم البحري مشمولان في السعر؟",
    answer: "Yes! Every charter comes with a fully licensed master captain and professional crew to handle navigation, safety, hospitality, and anchor management.",
    answerAr: "نعم! تضم كل رحلة قبطاناً رئيسياً مرخصاً وطاقماً بحرياً محترفاً لتولي الملاحة، إجراءات الأمان والسلامة، الضيافة، وإرساء اليخت."
  },
  {
    question: "Can I charter a yacht for a corporate product launch or wedding?",
    questionAr: "هل يمكن استئجار يخت لإطلاق المنتجات أو حفلات الزفاف؟",
    answer: "Yes. We specialize in corporate hospitality, executive launches, and intimate sunset weddings with sound systems, branding, and catering.",
    answerAr: "نعم، نحن متخصصون في استضافة فعاليات الشركات، تدشين المنتجات، وحفلات الزفاف مع توفير أنظمة الصوت والإضاءة وتجهيز الهوية والضيافة."
  },
  {
    question: "How far in advance should I book my yacht charter?",
    questionAr: "كم من الوقت المسبق يُفضل لحجز الرحلة؟",
    answer: "We recommend booking 3 to 7 days in advance for weekend sunset slots and 2 to 4 weeks in advance for large superyachts and corporate events.",
    answerAr: "نوصي بالحجز قبل ٣ إلى ٧ أيام لمواعيد الغروب خلال عطلة نهاية الأسبوع، وقبل أسبوعين إلى ٤ أسابيع للسوبر يخت وفعاليات الشركات الكبرى."
  },
  {
    question: "Do you offer deep sea fishing charters?",
    questionAr: "هل توفرون رحلات مخصصة لصيد الأسماك في الأعماق؟",
    answer: "Yes! Our AZURE Gulf Sport 44 is fully equipped with fish-finder sonar, trolling rods, live bait tanks, and an experienced fishing captain.",
    answerAr: "نعم! يخت أزور جلف سبورت ٤٤ مجهز بالكامل بسونار كشف الأسماك، ومعدات الصيد الثقيلة، وأحواض الطعم الحي مع قبطان متمرس في الصيد."
  },
  {
    question: "How do I check live yacht availability right now?",
    questionAr: "كيف يمكنني معرفة المواعيد المتاحة لليخوت الآن؟",
    answer: "Click our 'Check Availability' button or message our Dubai Marina charter concierge directly on WhatsApp for real-time fleet schedules.",
    answerAr: "اضغط على زر 'فحص التوافر' أو راسل مستشار حجوزات دبي مارينا مباشرة عبر واتساب لمعرفة جدول الأسطول المتاح لحظياً."
  }
];