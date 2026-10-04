export interface SalonTreatment {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  categoryName: string;
  brandProduct: string;
  durationMinutes: number;
  priceAED: number;
  originalPriceAED?: number;
  assignedStylist: {
    name: string;
    title: string;
    experience: string;
  };
  isVipSuiteEligible: boolean;
  isOrganicCertified: boolean;
  rating: number;
  reviewsCount: number;
  heroImage: string;
  beforeImage: string;
  afterImage: string;
  gallery: string[];
  description: string;
  includedSteps: string[];
  aftercareAdvice: string[];
}

export const SALON_TREATMENTS_CATALOG: SalonTreatment[] = [
  {
    "id": "VT-001",
    "title": "The Sovereign 24K Pure Gold Infusion Facial & Cryo Lift — Signature Haute",
    "slug": "haute-coiffure-vt-001",
    "categoryId": "haute-coiffure",
    "categoryName": "Haute Coiffure & Bespoke Color",
    "brandProduct": "Biologique Recherche Paris",
    "durationMinutes": 45,
    "priceAED": 650,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 39,
    "heroImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Biologique Recherche Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Biologique Recherche Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Biologique Recherche Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-002",
    "title": "The Parisian French Balayage & Gloss Glaze Architecture — Signature Haute",
    "slug": "haute-coiffure-vt-002",
    "categoryId": "haute-coiffure",
    "categoryName": "Haute Coiffure & Bespoke Color",
    "brandProduct": "Valmont Switzerland",
    "durationMinutes": 60,
    "priceAED": 700,
    "originalPriceAED": 850,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 43,
    "heroImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Valmont Switzerland active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Valmont Switzerland active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Valmont Switzerland home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-003",
    "title": "The Kérastase Chronologiste Caviar Hair Immersion Ritual — Signature Haute",
    "slug": "haute-coiffure-vt-003",
    "categoryId": "haute-coiffure",
    "categoryName": "Haute Coiffure & Bespoke Color",
    "brandProduct": "Kérastase Paris",
    "durationMinutes": 75,
    "priceAED": 775,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 47,
    "heroImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Kérastase Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Kérastase Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Kérastase Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-004",
    "title": "The Russian Dry E-File Diamond Manicure & Builder Gel — Signature Haute",
    "slug": "haute-coiffure-vt-004",
    "categoryId": "haute-coiffure",
    "categoryName": "Haute Coiffure & Bespoke Color",
    "brandProduct": "Oribe Luxury",
    "durationMinutes": 90,
    "priceAED": 825,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 51,
    "heroImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Oribe Luxury active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Oribe Luxury active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Oribe Luxury home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-005",
    "title": "The Royal Imperial Moroccan Hammam & Amber Body Polish — Signature Haute",
    "slug": "haute-coiffure-vt-005",
    "categoryId": "haute-coiffure",
    "categoryName": "Haute Coiffure & Bespoke Color",
    "brandProduct": "Dyson Pro",
    "durationMinutes": 105,
    "priceAED": 900,
    "originalPriceAED": 1075,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 55,
    "heroImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Dyson Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Dyson Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Dyson Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-006",
    "title": "The Cashmere Russian 6D Volume Lash Extension Set — Signature Haute",
    "slug": "haute-coiffure-vt-006",
    "categoryId": "haute-coiffure",
    "categoryName": "Haute Coiffure & Bespoke Color",
    "brandProduct": "Guinot Paris",
    "durationMinutes": 120,
    "priceAED": 950,
    "originalPriceAED": 1150,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 59,
    "heroImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Guinot Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Guinot Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Guinot Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-007",
    "title": "The High-Definition Bridal Airbrush & Editorial Crown Styling — Signature Haute",
    "slug": "haute-coiffure-vt-007",
    "categoryId": "haute-coiffure",
    "categoryName": "Haute Coiffure & Bespoke Color",
    "brandProduct": "OPI Pro",
    "durationMinutes": 45,
    "priceAED": 1000,
    "originalPriceAED": 1200,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 63,
    "heroImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic OPI Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with OPI Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended OPI Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-008",
    "title": "The Swiss Valmont Cellular Hydration & Collagen Matrix Treatment — Signature Haute",
    "slug": "haute-coiffure-vt-008",
    "categoryId": "haute-coiffure",
    "categoryName": "Haute Coiffure & Bespoke Color",
    "brandProduct": "Leonor Greyl Paris",
    "durationMinutes": 60,
    "priceAED": 1075,
    "originalPriceAED": 1300,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 67,
    "heroImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Leonor Greyl Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Leonor Greyl Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Leonor Greyl Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-009",
    "title": "The Brazilian Lymphatic Drainage & Detox Wood Therapy — Signature Haute",
    "slug": "haute-coiffure-vt-009",
    "categoryId": "haute-coiffure",
    "categoryName": "Haute Coiffure & Bespoke Color",
    "brandProduct": "Biologique Recherche Paris",
    "durationMinutes": 75,
    "priceAED": 1125,
    "originalPriceAED": 1350,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 71,
    "heroImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Biologique Recherche Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Biologique Recherche Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Biologique Recherche Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-010",
    "title": "The Biologique Recherche Remodeling Face & P50 Exfoliation — Signature Haute",
    "slug": "haute-coiffure-vt-010",
    "categoryId": "haute-coiffure",
    "categoryName": "Haute Coiffure & Bespoke Color",
    "brandProduct": "Valmont Switzerland",
    "durationMinutes": 90,
    "priceAED": 1200,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 75,
    "heroImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Valmont Switzerland active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Valmont Switzerland active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Valmont Switzerland home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-011",
    "title": "The Luxury Pedicure with Volcanic Hot Stone & Paraffin Mask — Signature Haute",
    "slug": "haute-coiffure-vt-011",
    "categoryId": "haute-coiffure",
    "categoryName": "Haute Coiffure & Bespoke Color",
    "brandProduct": "Kérastase Paris",
    "durationMinutes": 105,
    "priceAED": 1250,
    "originalPriceAED": 1500,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 79,
    "heroImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Kérastase Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Kérastase Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Kérastase Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-012",
    "title": "The Nanoplastia Organic Silk Protein Hair Straightening — Signature Haute",
    "slug": "haute-coiffure-vt-012",
    "categoryId": "haute-coiffure",
    "categoryName": "Haute Coiffure & Bespoke Color",
    "brandProduct": "Oribe Luxury",
    "durationMinutes": 120,
    "priceAED": 1300,
    "originalPriceAED": 1550,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 83,
    "heroImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Oribe Luxury active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Oribe Luxury active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Oribe Luxury home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-013",
    "title": "The 24K Gold Dust Scalp Detox & Micro-Mist Steam Therapy — Signature Haute",
    "slug": "haute-coiffure-vt-013",
    "categoryId": "haute-coiffure",
    "categoryName": "Haute Coiffure & Bespoke Color",
    "brandProduct": "Dyson Pro",
    "durationMinutes": 45,
    "priceAED": 1375,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 87,
    "heroImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Dyson Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Dyson Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Dyson Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-014",
    "title": "The Bespoke HD Brow Micro-Lamination & Henna Sculpt — Signature Haute",
    "slug": "haute-coiffure-vt-014",
    "categoryId": "haute-coiffure",
    "categoryName": "Haute Coiffure & Bespoke Color",
    "brandProduct": "Guinot Paris",
    "durationMinutes": 60,
    "priceAED": 1425,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 91,
    "heroImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Guinot Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Guinot Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Guinot Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-015",
    "title": "The Pre-Gala Red Carpet Glow Radiance & Oxygen Blast — Signature Haute",
    "slug": "haute-coiffure-vt-015",
    "categoryId": "haute-coiffure",
    "categoryName": "Haute Coiffure & Bespoke Color",
    "brandProduct": "OPI Pro",
    "durationMinutes": 75,
    "priceAED": 1500,
    "originalPriceAED": 1800,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 95,
    "heroImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic OPI Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with OPI Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended OPI Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-016",
    "title": "The Luxury Champagne Private Suite 4-Handed Hair & Nail Ritual — Signature Haute",
    "slug": "haute-coiffure-vt-016",
    "categoryId": "haute-coiffure",
    "categoryName": "Haute Coiffure & Bespoke Color",
    "brandProduct": "Leonor Greyl Paris",
    "durationMinutes": 90,
    "priceAED": 1550,
    "originalPriceAED": 1850,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 99,
    "heroImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Leonor Greyl Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Leonor Greyl Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Leonor Greyl Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-017",
    "title": "The Aromatherapy Hot Oil Deep Tissue Tension Relief — Signature Haute",
    "slug": "haute-coiffure-vt-017",
    "categoryId": "haute-coiffure",
    "categoryName": "Haute Coiffure & Bespoke Color",
    "brandProduct": "Biologique Recherche Paris",
    "durationMinutes": 105,
    "priceAED": 1600,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 103,
    "heroImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Biologique Recherche Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Biologique Recherche Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Biologique Recherche Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-018",
    "title": "The Velvet Lip Blush & Semi-Permanent Pigment Contour — Signature Haute",
    "slug": "haute-coiffure-vt-018",
    "categoryId": "haute-coiffure",
    "categoryName": "Haute Coiffure & Bespoke Color",
    "brandProduct": "Valmont Switzerland",
    "durationMinutes": 120,
    "priceAED": 1675,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 107,
    "heroImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Valmont Switzerland active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Valmont Switzerland active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Valmont Switzerland home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-019",
    "title": "The Japanese Head Spa & Herbal Waterfall Scalp Rejuvenation — Signature Haute",
    "slug": "haute-coiffure-vt-019",
    "categoryId": "haute-coiffure",
    "categoryName": "Haute Coiffure & Bespoke Color",
    "brandProduct": "Kérastase Paris",
    "durationMinutes": 45,
    "priceAED": 1725,
    "originalPriceAED": 2075,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 111,
    "heroImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Kérastase Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Kérastase Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Kérastase Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-020",
    "title": "The 100% Organic Botanical Vegan Hair Gloss & Keratin Boost — Signature Haute",
    "slug": "haute-coiffure-vt-020",
    "categoryId": "haute-coiffure",
    "categoryName": "Haute Coiffure & Bespoke Color",
    "brandProduct": "Oribe Luxury",
    "durationMinutes": 60,
    "priceAED": 1800,
    "originalPriceAED": 2150,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 115,
    "heroImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Oribe Luxury active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Oribe Luxury active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Oribe Luxury home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-021",
    "title": "The Sovereign 24K Pure Gold Infusion Facial & Cryo Lift — Signature 24K",
    "slug": "facial-aesthetics-vt-021",
    "categoryId": "facial-aesthetics",
    "categoryName": "24K Gold, Caviar & Cellular Facials",
    "brandProduct": "Valmont Switzerland",
    "durationMinutes": 45,
    "priceAED": 950,
    "originalPriceAED": 1150,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 119,
    "heroImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Valmont Switzerland active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Valmont Switzerland active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Valmont Switzerland home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-022",
    "title": "The Parisian French Balayage & Gloss Glaze Architecture — Signature 24K",
    "slug": "facial-aesthetics-vt-022",
    "categoryId": "facial-aesthetics",
    "categoryName": "24K Gold, Caviar & Cellular Facials",
    "brandProduct": "Kérastase Paris",
    "durationMinutes": 60,
    "priceAED": 1050,
    "originalPriceAED": 1250,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 123,
    "heroImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Kérastase Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Kérastase Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Kérastase Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-023",
    "title": "The Kérastase Chronologiste Caviar Hair Immersion Ritual — Signature 24K",
    "slug": "facial-aesthetics-vt-023",
    "categoryId": "facial-aesthetics",
    "categoryName": "24K Gold, Caviar & Cellular Facials",
    "brandProduct": "Oribe Luxury",
    "durationMinutes": 75,
    "priceAED": 1125,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 127,
    "heroImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Oribe Luxury active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Oribe Luxury active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Oribe Luxury home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-024",
    "title": "The Russian Dry E-File Diamond Manicure & Builder Gel — Signature 24K",
    "slug": "facial-aesthetics-vt-024",
    "categoryId": "facial-aesthetics",
    "categoryName": "24K Gold, Caviar & Cellular Facials",
    "brandProduct": "Dyson Pro",
    "durationMinutes": 90,
    "priceAED": 1225,
    "originalPriceAED": 1475,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 131,
    "heroImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Dyson Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Dyson Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Dyson Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-025",
    "title": "The Royal Imperial Moroccan Hammam & Amber Body Polish — Signature 24K",
    "slug": "facial-aesthetics-vt-025",
    "categoryId": "facial-aesthetics",
    "categoryName": "24K Gold, Caviar & Cellular Facials",
    "brandProduct": "Guinot Paris",
    "durationMinutes": 105,
    "priceAED": 1300,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 135,
    "heroImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Guinot Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Guinot Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Guinot Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-026",
    "title": "The Cashmere Russian 6D Volume Lash Extension Set — Signature 24K",
    "slug": "facial-aesthetics-vt-026",
    "categoryId": "facial-aesthetics",
    "categoryName": "24K Gold, Caviar & Cellular Facials",
    "brandProduct": "OPI Pro",
    "durationMinutes": 120,
    "priceAED": 1400,
    "originalPriceAED": 1675,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 139,
    "heroImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic OPI Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with OPI Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended OPI Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-027",
    "title": "The High-Definition Bridal Airbrush & Editorial Crown Styling — Signature 24K",
    "slug": "facial-aesthetics-vt-027",
    "categoryId": "facial-aesthetics",
    "categoryName": "24K Gold, Caviar & Cellular Facials",
    "brandProduct": "Leonor Greyl Paris",
    "durationMinutes": 45,
    "priceAED": 1500,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 143,
    "heroImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Leonor Greyl Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Leonor Greyl Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Leonor Greyl Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-028",
    "title": "The Swiss Valmont Cellular Hydration & Collagen Matrix Treatment — Signature 24K",
    "slug": "facial-aesthetics-vt-028",
    "categoryId": "facial-aesthetics",
    "categoryName": "24K Gold, Caviar & Cellular Facials",
    "brandProduct": "Biologique Recherche Paris",
    "durationMinutes": 60,
    "priceAED": 1575,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 147,
    "heroImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Biologique Recherche Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Biologique Recherche Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Biologique Recherche Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-029",
    "title": "The Brazilian Lymphatic Drainage & Detox Wood Therapy — Signature 24K",
    "slug": "facial-aesthetics-vt-029",
    "categoryId": "facial-aesthetics",
    "categoryName": "24K Gold, Caviar & Cellular Facials",
    "brandProduct": "Valmont Switzerland",
    "durationMinutes": 75,
    "priceAED": 1675,
    "originalPriceAED": 2000,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 151,
    "heroImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Valmont Switzerland active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Valmont Switzerland active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Valmont Switzerland home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-030",
    "title": "The Biologique Recherche Remodeling Face & P50 Exfoliation — Signature 24K",
    "slug": "facial-aesthetics-vt-030",
    "categoryId": "facial-aesthetics",
    "categoryName": "24K Gold, Caviar & Cellular Facials",
    "brandProduct": "Kérastase Paris",
    "durationMinutes": 90,
    "priceAED": 1750,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 155,
    "heroImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Kérastase Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Kérastase Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Kérastase Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-031",
    "title": "The Luxury Pedicure with Volcanic Hot Stone & Paraffin Mask — Signature 24K",
    "slug": "facial-aesthetics-vt-031",
    "categoryId": "facial-aesthetics",
    "categoryName": "24K Gold, Caviar & Cellular Facials",
    "brandProduct": "Oribe Luxury",
    "durationMinutes": 105,
    "priceAED": 1850,
    "originalPriceAED": 2225,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 159,
    "heroImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Oribe Luxury active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Oribe Luxury active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Oribe Luxury home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-032",
    "title": "The Nanoplastia Organic Silk Protein Hair Straightening — Signature 24K",
    "slug": "facial-aesthetics-vt-032",
    "categoryId": "facial-aesthetics",
    "categoryName": "24K Gold, Caviar & Cellular Facials",
    "brandProduct": "Dyson Pro",
    "durationMinutes": 120,
    "priceAED": 1950,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 163,
    "heroImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Dyson Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Dyson Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Dyson Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-033",
    "title": "The 24K Gold Dust Scalp Detox & Micro-Mist Steam Therapy — Signature 24K",
    "slug": "facial-aesthetics-vt-033",
    "categoryId": "facial-aesthetics",
    "categoryName": "24K Gold, Caviar & Cellular Facials",
    "brandProduct": "Guinot Paris",
    "durationMinutes": 45,
    "priceAED": 2025,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 167,
    "heroImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Guinot Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Guinot Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Guinot Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-034",
    "title": "The Bespoke HD Brow Micro-Lamination & Henna Sculpt — Signature 24K",
    "slug": "facial-aesthetics-vt-034",
    "categoryId": "facial-aesthetics",
    "categoryName": "24K Gold, Caviar & Cellular Facials",
    "brandProduct": "OPI Pro",
    "durationMinutes": 60,
    "priceAED": 2125,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 171,
    "heroImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic OPI Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with OPI Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended OPI Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-035",
    "title": "The Pre-Gala Red Carpet Glow Radiance & Oxygen Blast — Signature 24K",
    "slug": "facial-aesthetics-vt-035",
    "categoryId": "facial-aesthetics",
    "categoryName": "24K Gold, Caviar & Cellular Facials",
    "brandProduct": "Leonor Greyl Paris",
    "durationMinutes": 75,
    "priceAED": 2200,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 175,
    "heroImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Leonor Greyl Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Leonor Greyl Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Leonor Greyl Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-036",
    "title": "The Luxury Champagne Private Suite 4-Handed Hair & Nail Ritual — Signature 24K",
    "slug": "facial-aesthetics-vt-036",
    "categoryId": "facial-aesthetics",
    "categoryName": "24K Gold, Caviar & Cellular Facials",
    "brandProduct": "Biologique Recherche Paris",
    "durationMinutes": 90,
    "priceAED": 2300,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 179,
    "heroImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Biologique Recherche Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Biologique Recherche Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Biologique Recherche Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-037",
    "title": "The Aromatherapy Hot Oil Deep Tissue Tension Relief — Signature 24K",
    "slug": "facial-aesthetics-vt-037",
    "categoryId": "facial-aesthetics",
    "categoryName": "24K Gold, Caviar & Cellular Facials",
    "brandProduct": "Valmont Switzerland",
    "durationMinutes": 105,
    "priceAED": 2400,
    "originalPriceAED": 2875,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 183,
    "heroImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Valmont Switzerland active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Valmont Switzerland active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Valmont Switzerland home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-038",
    "title": "The Velvet Lip Blush & Semi-Permanent Pigment Contour — Signature 24K",
    "slug": "facial-aesthetics-vt-038",
    "categoryId": "facial-aesthetics",
    "categoryName": "24K Gold, Caviar & Cellular Facials",
    "brandProduct": "Kérastase Paris",
    "durationMinutes": 120,
    "priceAED": 2475,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 187,
    "heroImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Kérastase Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Kérastase Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Kérastase Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-039",
    "title": "The Japanese Head Spa & Herbal Waterfall Scalp Rejuvenation — Signature 24K",
    "slug": "facial-aesthetics-vt-039",
    "categoryId": "facial-aesthetics",
    "categoryName": "24K Gold, Caviar & Cellular Facials",
    "brandProduct": "Oribe Luxury",
    "durationMinutes": 45,
    "priceAED": 2575,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 191,
    "heroImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Oribe Luxury active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Oribe Luxury active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Oribe Luxury home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-040",
    "title": "The 100% Organic Botanical Vegan Hair Gloss & Keratin Boost — Signature 24K",
    "slug": "facial-aesthetics-vt-040",
    "categoryId": "facial-aesthetics",
    "categoryName": "24K Gold, Caviar & Cellular Facials",
    "brandProduct": "Dyson Pro",
    "durationMinutes": 60,
    "priceAED": 2650,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 195,
    "heroImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Dyson Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Dyson Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Dyson Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-041",
    "title": "The Sovereign 24K Pure Gold Infusion Facial & Cryo Lift — Signature Russian",
    "slug": "nail-architecture-vt-041",
    "categoryId": "nail-architecture",
    "categoryName": "Russian Manicure & Nail Couture",
    "brandProduct": "Kérastase Paris",
    "durationMinutes": 45,
    "priceAED": 400,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 199,
    "heroImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Kérastase Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Kérastase Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Kérastase Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-042",
    "title": "The Parisian French Balayage & Gloss Glaze Architecture — Signature Russian",
    "slug": "nail-architecture-vt-042",
    "categoryId": "nail-architecture",
    "categoryName": "Russian Manicure & Nail Couture",
    "brandProduct": "Oribe Luxury",
    "durationMinutes": 60,
    "priceAED": 450,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 203,
    "heroImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Oribe Luxury active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Oribe Luxury active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Oribe Luxury home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-043",
    "title": "The Kérastase Chronologiste Caviar Hair Immersion Ritual — Signature Russian",
    "slug": "nail-architecture-vt-043",
    "categoryId": "nail-architecture",
    "categoryName": "Russian Manicure & Nail Couture",
    "brandProduct": "Dyson Pro",
    "durationMinutes": 75,
    "priceAED": 475,
    "originalPriceAED": 575,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 207,
    "heroImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Dyson Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Dyson Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Dyson Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-044",
    "title": "The Russian Dry E-File Diamond Manicure & Builder Gel — Signature Russian",
    "slug": "nail-architecture-vt-044",
    "categoryId": "nail-architecture",
    "categoryName": "Russian Manicure & Nail Couture",
    "brandProduct": "Guinot Paris",
    "durationMinutes": 90,
    "priceAED": 525,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 211,
    "heroImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Guinot Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Guinot Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Guinot Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-045",
    "title": "The Royal Imperial Moroccan Hammam & Amber Body Polish — Signature Russian",
    "slug": "nail-architecture-vt-045",
    "categoryId": "nail-architecture",
    "categoryName": "Russian Manicure & Nail Couture",
    "brandProduct": "OPI Pro",
    "durationMinutes": 105,
    "priceAED": 550,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 215,
    "heroImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic OPI Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with OPI Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended OPI Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-046",
    "title": "The Cashmere Russian 6D Volume Lash Extension Set — Signature Russian",
    "slug": "nail-architecture-vt-046",
    "categoryId": "nail-architecture",
    "categoryName": "Russian Manicure & Nail Couture",
    "brandProduct": "Leonor Greyl Paris",
    "durationMinutes": 120,
    "priceAED": 600,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 219,
    "heroImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Leonor Greyl Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Leonor Greyl Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Leonor Greyl Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-047",
    "title": "The High-Definition Bridal Airbrush & Editorial Crown Styling — Signature Russian",
    "slug": "nail-architecture-vt-047",
    "categoryId": "nail-architecture",
    "categoryName": "Russian Manicure & Nail Couture",
    "brandProduct": "Biologique Recherche Paris",
    "durationMinutes": 45,
    "priceAED": 650,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 223,
    "heroImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Biologique Recherche Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Biologique Recherche Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Biologique Recherche Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-048",
    "title": "The Swiss Valmont Cellular Hydration & Collagen Matrix Treatment — Signature Russian",
    "slug": "nail-architecture-vt-048",
    "categoryId": "nail-architecture",
    "categoryName": "Russian Manicure & Nail Couture",
    "brandProduct": "Valmont Switzerland",
    "durationMinutes": 60,
    "priceAED": 675,
    "originalPriceAED": 800,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 227,
    "heroImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Valmont Switzerland active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Valmont Switzerland active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Valmont Switzerland home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-049",
    "title": "The Brazilian Lymphatic Drainage & Detox Wood Therapy — Signature Russian",
    "slug": "nail-architecture-vt-049",
    "categoryId": "nail-architecture",
    "categoryName": "Russian Manicure & Nail Couture",
    "brandProduct": "Kérastase Paris",
    "durationMinutes": 75,
    "priceAED": 725,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 231,
    "heroImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Kérastase Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Kérastase Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Kérastase Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-050",
    "title": "The Biologique Recherche Remodeling Face & P50 Exfoliation — Signature Russian",
    "slug": "nail-architecture-vt-050",
    "categoryId": "nail-architecture",
    "categoryName": "Russian Manicure & Nail Couture",
    "brandProduct": "Oribe Luxury",
    "durationMinutes": 90,
    "priceAED": 750,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 235,
    "heroImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Oribe Luxury active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Oribe Luxury active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Oribe Luxury home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-051",
    "title": "The Luxury Pedicure with Volcanic Hot Stone & Paraffin Mask — Signature Russian",
    "slug": "nail-architecture-vt-051",
    "categoryId": "nail-architecture",
    "categoryName": "Russian Manicure & Nail Couture",
    "brandProduct": "Dyson Pro",
    "durationMinutes": 105,
    "priceAED": 800,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 239,
    "heroImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Dyson Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Dyson Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Dyson Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-052",
    "title": "The Nanoplastia Organic Silk Protein Hair Straightening — Signature Russian",
    "slug": "nail-architecture-vt-052",
    "categoryId": "nail-architecture",
    "categoryName": "Russian Manicure & Nail Couture",
    "brandProduct": "Guinot Paris",
    "durationMinutes": 120,
    "priceAED": 850,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 243,
    "heroImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Guinot Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Guinot Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Guinot Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-053",
    "title": "The 24K Gold Dust Scalp Detox & Micro-Mist Steam Therapy — Signature Russian",
    "slug": "nail-architecture-vt-053",
    "categoryId": "nail-architecture",
    "categoryName": "Russian Manicure & Nail Couture",
    "brandProduct": "OPI Pro",
    "durationMinutes": 45,
    "priceAED": 875,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 247,
    "heroImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic OPI Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with OPI Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended OPI Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-054",
    "title": "The Bespoke HD Brow Micro-Lamination & Henna Sculpt — Signature Russian",
    "slug": "nail-architecture-vt-054",
    "categoryId": "nail-architecture",
    "categoryName": "Russian Manicure & Nail Couture",
    "brandProduct": "Leonor Greyl Paris",
    "durationMinutes": 60,
    "priceAED": 925,
    "originalPriceAED": 1100,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 251,
    "heroImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Leonor Greyl Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Leonor Greyl Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Leonor Greyl Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-055",
    "title": "The Pre-Gala Red Carpet Glow Radiance & Oxygen Blast — Signature Russian",
    "slug": "nail-architecture-vt-055",
    "categoryId": "nail-architecture",
    "categoryName": "Russian Manicure & Nail Couture",
    "brandProduct": "Biologique Recherche Paris",
    "durationMinutes": 75,
    "priceAED": 950,
    "originalPriceAED": 1150,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 255,
    "heroImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Biologique Recherche Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Biologique Recherche Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Biologique Recherche Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-056",
    "title": "The Luxury Champagne Private Suite 4-Handed Hair & Nail Ritual — Signature Russian",
    "slug": "nail-architecture-vt-056",
    "categoryId": "nail-architecture",
    "categoryName": "Russian Manicure & Nail Couture",
    "brandProduct": "Valmont Switzerland",
    "durationMinutes": 90,
    "priceAED": 1000,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 259,
    "heroImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Valmont Switzerland active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Valmont Switzerland active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Valmont Switzerland home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-057",
    "title": "The Aromatherapy Hot Oil Deep Tissue Tension Relief — Signature Russian",
    "slug": "nail-architecture-vt-057",
    "categoryId": "nail-architecture",
    "categoryName": "Russian Manicure & Nail Couture",
    "brandProduct": "Kérastase Paris",
    "durationMinutes": 105,
    "priceAED": 1050,
    "originalPriceAED": 1250,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 263,
    "heroImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Kérastase Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Kérastase Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Kérastase Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-058",
    "title": "The Velvet Lip Blush & Semi-Permanent Pigment Contour — Signature Russian",
    "slug": "nail-architecture-vt-058",
    "categoryId": "nail-architecture",
    "categoryName": "Russian Manicure & Nail Couture",
    "brandProduct": "Oribe Luxury",
    "durationMinutes": 120,
    "priceAED": 1075,
    "originalPriceAED": 1300,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 267,
    "heroImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Oribe Luxury active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Oribe Luxury active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Oribe Luxury home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-059",
    "title": "The Japanese Head Spa & Herbal Waterfall Scalp Rejuvenation — Signature Russian",
    "slug": "nail-architecture-vt-059",
    "categoryId": "nail-architecture",
    "categoryName": "Russian Manicure & Nail Couture",
    "brandProduct": "Dyson Pro",
    "durationMinutes": 45,
    "priceAED": 1125,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 271,
    "heroImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Dyson Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Dyson Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Dyson Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-060",
    "title": "The 100% Organic Botanical Vegan Hair Gloss & Keratin Boost — Signature Russian",
    "slug": "nail-architecture-vt-060",
    "categoryId": "nail-architecture",
    "categoryName": "Russian Manicure & Nail Couture",
    "brandProduct": "Guinot Paris",
    "durationMinutes": 60,
    "priceAED": 1150,
    "originalPriceAED": 1375,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 275,
    "heroImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Guinot Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Guinot Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Guinot Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-061",
    "title": "The Sovereign 24K Pure Gold Infusion Facial & Cryo Lift — Signature Royal",
    "slug": "royal-hammam-spa-vt-061",
    "categoryId": "royal-hammam-spa",
    "categoryName": "Royal Moroccan Hammam & Hydrotherapy",
    "brandProduct": "Oribe Luxury",
    "durationMinutes": 45,
    "priceAED": 750,
    "originalPriceAED": 900,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 279,
    "heroImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Oribe Luxury active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Oribe Luxury active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Oribe Luxury home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-062",
    "title": "The Parisian French Balayage & Gloss Glaze Architecture — Signature Royal",
    "slug": "royal-hammam-spa-vt-062",
    "categoryId": "royal-hammam-spa",
    "categoryName": "Royal Moroccan Hammam & Hydrotherapy",
    "brandProduct": "Dyson Pro",
    "durationMinutes": 60,
    "priceAED": 825,
    "originalPriceAED": 1000,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 283,
    "heroImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Dyson Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Dyson Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Dyson Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-063",
    "title": "The Kérastase Chronologiste Caviar Hair Immersion Ritual — Signature Royal",
    "slug": "royal-hammam-spa-vt-063",
    "categoryId": "royal-hammam-spa",
    "categoryName": "Royal Moroccan Hammam & Hydrotherapy",
    "brandProduct": "Guinot Paris",
    "durationMinutes": 75,
    "priceAED": 900,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 287,
    "heroImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Guinot Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Guinot Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Guinot Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-064",
    "title": "The Russian Dry E-File Diamond Manicure & Builder Gel — Signature Royal",
    "slug": "royal-hammam-spa-vt-064",
    "categoryId": "royal-hammam-spa",
    "categoryName": "Royal Moroccan Hammam & Hydrotherapy",
    "brandProduct": "OPI Pro",
    "durationMinutes": 90,
    "priceAED": 950,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 291,
    "heroImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic OPI Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with OPI Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended OPI Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-065",
    "title": "The Royal Imperial Moroccan Hammam & Amber Body Polish — Signature Royal",
    "slug": "royal-hammam-spa-vt-065",
    "categoryId": "royal-hammam-spa",
    "categoryName": "Royal Moroccan Hammam & Hydrotherapy",
    "brandProduct": "Leonor Greyl Paris",
    "durationMinutes": 105,
    "priceAED": 1025,
    "originalPriceAED": 1225,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 295,
    "heroImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Leonor Greyl Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Leonor Greyl Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Leonor Greyl Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-066",
    "title": "The Cashmere Russian 6D Volume Lash Extension Set — Signature Royal",
    "slug": "royal-hammam-spa-vt-066",
    "categoryId": "royal-hammam-spa",
    "categoryName": "Royal Moroccan Hammam & Hydrotherapy",
    "brandProduct": "Biologique Recherche Paris",
    "durationMinutes": 120,
    "priceAED": 1100,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 299,
    "heroImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Biologique Recherche Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Biologique Recherche Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Biologique Recherche Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-067",
    "title": "The High-Definition Bridal Airbrush & Editorial Crown Styling — Signature Royal",
    "slug": "royal-hammam-spa-vt-067",
    "categoryId": "royal-hammam-spa",
    "categoryName": "Royal Moroccan Hammam & Hydrotherapy",
    "brandProduct": "Valmont Switzerland",
    "durationMinutes": 45,
    "priceAED": 1175,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 303,
    "heroImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Valmont Switzerland active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Valmont Switzerland active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Valmont Switzerland home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-068",
    "title": "The Swiss Valmont Cellular Hydration & Collagen Matrix Treatment — Signature Royal",
    "slug": "royal-hammam-spa-vt-068",
    "categoryId": "royal-hammam-spa",
    "categoryName": "Royal Moroccan Hammam & Hydrotherapy",
    "brandProduct": "Kérastase Paris",
    "durationMinutes": 60,
    "priceAED": 1250,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 307,
    "heroImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Kérastase Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Kérastase Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Kérastase Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-069",
    "title": "The Brazilian Lymphatic Drainage & Detox Wood Therapy — Signature Royal",
    "slug": "royal-hammam-spa-vt-069",
    "categoryId": "royal-hammam-spa",
    "categoryName": "Royal Moroccan Hammam & Hydrotherapy",
    "brandProduct": "Oribe Luxury",
    "durationMinutes": 75,
    "priceAED": 1300,
    "originalPriceAED": 1550,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 311,
    "heroImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Oribe Luxury active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Oribe Luxury active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Oribe Luxury home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-070",
    "title": "The Biologique Recherche Remodeling Face & P50 Exfoliation — Signature Royal",
    "slug": "royal-hammam-spa-vt-070",
    "categoryId": "royal-hammam-spa",
    "categoryName": "Royal Moroccan Hammam & Hydrotherapy",
    "brandProduct": "Dyson Pro",
    "durationMinutes": 90,
    "priceAED": 1375,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 315,
    "heroImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Dyson Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Dyson Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Dyson Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-071",
    "title": "The Luxury Pedicure with Volcanic Hot Stone & Paraffin Mask — Signature Royal",
    "slug": "royal-hammam-spa-vt-071",
    "categoryId": "royal-hammam-spa",
    "categoryName": "Royal Moroccan Hammam & Hydrotherapy",
    "brandProduct": "Guinot Paris",
    "durationMinutes": 105,
    "priceAED": 1450,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 319,
    "heroImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Guinot Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Guinot Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Guinot Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-072",
    "title": "The Nanoplastia Organic Silk Protein Hair Straightening — Signature Royal",
    "slug": "royal-hammam-spa-vt-072",
    "categoryId": "royal-hammam-spa",
    "categoryName": "Royal Moroccan Hammam & Hydrotherapy",
    "brandProduct": "OPI Pro",
    "durationMinutes": 120,
    "priceAED": 1525,
    "originalPriceAED": 1825,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 323,
    "heroImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic OPI Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with OPI Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended OPI Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-073",
    "title": "The 24K Gold Dust Scalp Detox & Micro-Mist Steam Therapy — Signature Royal",
    "slug": "royal-hammam-spa-vt-073",
    "categoryId": "royal-hammam-spa",
    "categoryName": "Royal Moroccan Hammam & Hydrotherapy",
    "brandProduct": "Leonor Greyl Paris",
    "durationMinutes": 45,
    "priceAED": 1600,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 327,
    "heroImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Leonor Greyl Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Leonor Greyl Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Leonor Greyl Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-074",
    "title": "The Bespoke HD Brow Micro-Lamination & Henna Sculpt — Signature Royal",
    "slug": "royal-hammam-spa-vt-074",
    "categoryId": "royal-hammam-spa",
    "categoryName": "Royal Moroccan Hammam & Hydrotherapy",
    "brandProduct": "Biologique Recherche Paris",
    "durationMinutes": 60,
    "priceAED": 1650,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 331,
    "heroImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Biologique Recherche Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Biologique Recherche Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Biologique Recherche Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-075",
    "title": "The Pre-Gala Red Carpet Glow Radiance & Oxygen Blast — Signature Royal",
    "slug": "royal-hammam-spa-vt-075",
    "categoryId": "royal-hammam-spa",
    "categoryName": "Royal Moroccan Hammam & Hydrotherapy",
    "brandProduct": "Valmont Switzerland",
    "durationMinutes": 75,
    "priceAED": 1725,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 335,
    "heroImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Valmont Switzerland active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Valmont Switzerland active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Valmont Switzerland home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-076",
    "title": "The Luxury Champagne Private Suite 4-Handed Hair & Nail Ritual — Signature Royal",
    "slug": "royal-hammam-spa-vt-076",
    "categoryId": "royal-hammam-spa",
    "categoryName": "Royal Moroccan Hammam & Hydrotherapy",
    "brandProduct": "Kérastase Paris",
    "durationMinutes": 90,
    "priceAED": 1800,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 339,
    "heroImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Kérastase Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Kérastase Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Kérastase Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-077",
    "title": "The Aromatherapy Hot Oil Deep Tissue Tension Relief — Signature Royal",
    "slug": "royal-hammam-spa-vt-077",
    "categoryId": "royal-hammam-spa",
    "categoryName": "Royal Moroccan Hammam & Hydrotherapy",
    "brandProduct": "Oribe Luxury",
    "durationMinutes": 105,
    "priceAED": 1875,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 343,
    "heroImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Oribe Luxury active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Oribe Luxury active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Oribe Luxury home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-078",
    "title": "The Velvet Lip Blush & Semi-Permanent Pigment Contour — Signature Royal",
    "slug": "royal-hammam-spa-vt-078",
    "categoryId": "royal-hammam-spa",
    "categoryName": "Royal Moroccan Hammam & Hydrotherapy",
    "brandProduct": "Dyson Pro",
    "durationMinutes": 120,
    "priceAED": 1950,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 347,
    "heroImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Dyson Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Dyson Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Dyson Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-079",
    "title": "The Japanese Head Spa & Herbal Waterfall Scalp Rejuvenation — Signature Royal",
    "slug": "royal-hammam-spa-vt-079",
    "categoryId": "royal-hammam-spa",
    "categoryName": "Royal Moroccan Hammam & Hydrotherapy",
    "brandProduct": "Guinot Paris",
    "durationMinutes": 45,
    "priceAED": 2000,
    "originalPriceAED": 2400,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 351,
    "heroImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Guinot Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Guinot Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Guinot Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-080",
    "title": "The 100% Organic Botanical Vegan Hair Gloss & Keratin Boost — Signature Royal",
    "slug": "royal-hammam-spa-vt-080",
    "categoryId": "royal-hammam-spa",
    "categoryName": "Royal Moroccan Hammam & Hydrotherapy",
    "brandProduct": "OPI Pro",
    "durationMinutes": 60,
    "priceAED": 2075,
    "originalPriceAED": 2500,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 355,
    "heroImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic OPI Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with OPI Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended OPI Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-081",
    "title": "The Sovereign 24K Pure Gold Infusion Facial & Cryo Lift — Signature Lash",
    "slug": "lash-brow-sculpting-vt-081",
    "categoryId": "lash-brow-sculpting",
    "categoryName": "Lash Architecture & Brow Lamination",
    "brandProduct": "Dyson Pro",
    "durationMinutes": 45,
    "priceAED": 400,
    "originalPriceAED": 475,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 359,
    "heroImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Dyson Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Dyson Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Dyson Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-082",
    "title": "The Parisian French Balayage & Gloss Glaze Architecture — Signature Lash",
    "slug": "lash-brow-sculpting-vt-082",
    "categoryId": "lash-brow-sculpting",
    "categoryName": "Lash Architecture & Brow Lamination",
    "brandProduct": "Guinot Paris",
    "durationMinutes": 60,
    "priceAED": 450,
    "originalPriceAED": 550,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 363,
    "heroImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Guinot Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Guinot Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Guinot Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-083",
    "title": "The Kérastase Chronologiste Caviar Hair Immersion Ritual — Signature Lash",
    "slug": "lash-brow-sculpting-vt-083",
    "categoryId": "lash-brow-sculpting",
    "categoryName": "Lash Architecture & Brow Lamination",
    "brandProduct": "OPI Pro",
    "durationMinutes": 75,
    "priceAED": 475,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 367,
    "heroImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic OPI Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with OPI Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended OPI Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-084",
    "title": "The Russian Dry E-File Diamond Manicure & Builder Gel — Signature Lash",
    "slug": "lash-brow-sculpting-vt-084",
    "categoryId": "lash-brow-sculpting",
    "categoryName": "Lash Architecture & Brow Lamination",
    "brandProduct": "Leonor Greyl Paris",
    "durationMinutes": 90,
    "priceAED": 525,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 371,
    "heroImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Leonor Greyl Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Leonor Greyl Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Leonor Greyl Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-085",
    "title": "The Royal Imperial Moroccan Hammam & Amber Body Polish — Signature Lash",
    "slug": "lash-brow-sculpting-vt-085",
    "categoryId": "lash-brow-sculpting",
    "categoryName": "Lash Architecture & Brow Lamination",
    "brandProduct": "Biologique Recherche Paris",
    "durationMinutes": 105,
    "priceAED": 550,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 375,
    "heroImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Biologique Recherche Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Biologique Recherche Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Biologique Recherche Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-086",
    "title": "The Cashmere Russian 6D Volume Lash Extension Set — Signature Lash",
    "slug": "lash-brow-sculpting-vt-086",
    "categoryId": "lash-brow-sculpting",
    "categoryName": "Lash Architecture & Brow Lamination",
    "brandProduct": "Valmont Switzerland",
    "durationMinutes": 120,
    "priceAED": 600,
    "originalPriceAED": 725,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 379,
    "heroImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Valmont Switzerland active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Valmont Switzerland active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Valmont Switzerland home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-087",
    "title": "The High-Definition Bridal Airbrush & Editorial Crown Styling — Signature Lash",
    "slug": "lash-brow-sculpting-vt-087",
    "categoryId": "lash-brow-sculpting",
    "categoryName": "Lash Architecture & Brow Lamination",
    "brandProduct": "Kérastase Paris",
    "durationMinutes": 45,
    "priceAED": 650,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 383,
    "heroImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Kérastase Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Kérastase Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Kérastase Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-088",
    "title": "The Swiss Valmont Cellular Hydration & Collagen Matrix Treatment — Signature Lash",
    "slug": "lash-brow-sculpting-vt-088",
    "categoryId": "lash-brow-sculpting",
    "categoryName": "Lash Architecture & Brow Lamination",
    "brandProduct": "Oribe Luxury",
    "durationMinutes": 60,
    "priceAED": 675,
    "originalPriceAED": 800,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 387,
    "heroImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Oribe Luxury active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Oribe Luxury active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Oribe Luxury home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-089",
    "title": "The Brazilian Lymphatic Drainage & Detox Wood Therapy — Signature Lash",
    "slug": "lash-brow-sculpting-vt-089",
    "categoryId": "lash-brow-sculpting",
    "categoryName": "Lash Architecture & Brow Lamination",
    "brandProduct": "Dyson Pro",
    "durationMinutes": 75,
    "priceAED": 725,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 391,
    "heroImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Dyson Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Dyson Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Dyson Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-090",
    "title": "The Biologique Recherche Remodeling Face & P50 Exfoliation — Signature Lash",
    "slug": "lash-brow-sculpting-vt-090",
    "categoryId": "lash-brow-sculpting",
    "categoryName": "Lash Architecture & Brow Lamination",
    "brandProduct": "Guinot Paris",
    "durationMinutes": 90,
    "priceAED": 750,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 395,
    "heroImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Guinot Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Guinot Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Guinot Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-091",
    "title": "The Luxury Pedicure with Volcanic Hot Stone & Paraffin Mask — Signature Lash",
    "slug": "lash-brow-sculpting-vt-091",
    "categoryId": "lash-brow-sculpting",
    "categoryName": "Lash Architecture & Brow Lamination",
    "brandProduct": "OPI Pro",
    "durationMinutes": 105,
    "priceAED": 800,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 399,
    "heroImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic OPI Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with OPI Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended OPI Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-092",
    "title": "The Nanoplastia Organic Silk Protein Hair Straightening — Signature Lash",
    "slug": "lash-brow-sculpting-vt-092",
    "categoryId": "lash-brow-sculpting",
    "categoryName": "Lash Architecture & Brow Lamination",
    "brandProduct": "Leonor Greyl Paris",
    "durationMinutes": 120,
    "priceAED": 850,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 403,
    "heroImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Leonor Greyl Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Leonor Greyl Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Leonor Greyl Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-093",
    "title": "The 24K Gold Dust Scalp Detox & Micro-Mist Steam Therapy — Signature Lash",
    "slug": "lash-brow-sculpting-vt-093",
    "categoryId": "lash-brow-sculpting",
    "categoryName": "Lash Architecture & Brow Lamination",
    "brandProduct": "Biologique Recherche Paris",
    "durationMinutes": 45,
    "priceAED": 875,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 407,
    "heroImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Biologique Recherche Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Biologique Recherche Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Biologique Recherche Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-094",
    "title": "The Bespoke HD Brow Micro-Lamination & Henna Sculpt — Signature Lash",
    "slug": "lash-brow-sculpting-vt-094",
    "categoryId": "lash-brow-sculpting",
    "categoryName": "Lash Architecture & Brow Lamination",
    "brandProduct": "Valmont Switzerland",
    "durationMinutes": 60,
    "priceAED": 925,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 411,
    "heroImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Valmont Switzerland active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Valmont Switzerland active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Valmont Switzerland home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-095",
    "title": "The Pre-Gala Red Carpet Glow Radiance & Oxygen Blast — Signature Lash",
    "slug": "lash-brow-sculpting-vt-095",
    "categoryId": "lash-brow-sculpting",
    "categoryName": "Lash Architecture & Brow Lamination",
    "brandProduct": "Kérastase Paris",
    "durationMinutes": 75,
    "priceAED": 950,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 415,
    "heroImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Kérastase Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Kérastase Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Kérastase Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-096",
    "title": "The Luxury Champagne Private Suite 4-Handed Hair & Nail Ritual — Signature Lash",
    "slug": "lash-brow-sculpting-vt-096",
    "categoryId": "lash-brow-sculpting",
    "categoryName": "Lash Architecture & Brow Lamination",
    "brandProduct": "Oribe Luxury",
    "durationMinutes": 90,
    "priceAED": 1000,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 419,
    "heroImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Oribe Luxury active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Oribe Luxury active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Oribe Luxury home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-097",
    "title": "The Aromatherapy Hot Oil Deep Tissue Tension Relief — Signature Lash",
    "slug": "lash-brow-sculpting-vt-097",
    "categoryId": "lash-brow-sculpting",
    "categoryName": "Lash Architecture & Brow Lamination",
    "brandProduct": "Dyson Pro",
    "durationMinutes": 105,
    "priceAED": 1050,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 423,
    "heroImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Dyson Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Dyson Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Dyson Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-098",
    "title": "The Velvet Lip Blush & Semi-Permanent Pigment Contour — Signature Lash",
    "slug": "lash-brow-sculpting-vt-098",
    "categoryId": "lash-brow-sculpting",
    "categoryName": "Lash Architecture & Brow Lamination",
    "brandProduct": "Guinot Paris",
    "durationMinutes": 120,
    "priceAED": 1075,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 427,
    "heroImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Guinot Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Guinot Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Guinot Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-099",
    "title": "The Japanese Head Spa & Herbal Waterfall Scalp Rejuvenation — Signature Lash",
    "slug": "lash-brow-sculpting-vt-099",
    "categoryId": "lash-brow-sculpting",
    "categoryName": "Lash Architecture & Brow Lamination",
    "brandProduct": "OPI Pro",
    "durationMinutes": 45,
    "priceAED": 1125,
    "originalPriceAED": 1350,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 431,
    "heroImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic OPI Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with OPI Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended OPI Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-100",
    "title": "The 100% Organic Botanical Vegan Hair Gloss & Keratin Boost — Signature Lash",
    "slug": "lash-brow-sculpting-vt-100",
    "categoryId": "lash-brow-sculpting",
    "categoryName": "Lash Architecture & Brow Lamination",
    "brandProduct": "Leonor Greyl Paris",
    "durationMinutes": 60,
    "priceAED": 1150,
    "originalPriceAED": 1375,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 435,
    "heroImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Leonor Greyl Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Leonor Greyl Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Leonor Greyl Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-101",
    "title": "The Sovereign 24K Pure Gold Infusion Facial & Cryo Lift — Signature Bridal",
    "slug": "bridal-gala-glamour-vt-101",
    "categoryId": "bridal-gala-glamour",
    "categoryName": "Bridal Couture & Red Carpet Artistry",
    "brandProduct": "Guinot Paris",
    "durationMinutes": 45,
    "priceAED": 2200,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 439,
    "heroImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Guinot Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Guinot Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Guinot Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-102",
    "title": "The Parisian French Balayage & Gloss Glaze Architecture — Signature Bridal",
    "slug": "bridal-gala-glamour-vt-102",
    "categoryId": "bridal-gala-glamour",
    "categoryName": "Bridal Couture & Red Carpet Artistry",
    "brandProduct": "OPI Pro",
    "durationMinutes": 60,
    "priceAED": 2375,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 443,
    "heroImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic OPI Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with OPI Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended OPI Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-103",
    "title": "The Kérastase Chronologiste Caviar Hair Immersion Ritual — Signature Bridal",
    "slug": "bridal-gala-glamour-vt-103",
    "categoryId": "bridal-gala-glamour",
    "categoryName": "Bridal Couture & Red Carpet Artistry",
    "brandProduct": "Leonor Greyl Paris",
    "durationMinutes": 75,
    "priceAED": 2550,
    "originalPriceAED": 3050,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 447,
    "heroImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Leonor Greyl Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Leonor Greyl Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Leonor Greyl Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-104",
    "title": "The Russian Dry E-File Diamond Manicure & Builder Gel — Signature Bridal",
    "slug": "bridal-gala-glamour-vt-104",
    "categoryId": "bridal-gala-glamour",
    "categoryName": "Bridal Couture & Red Carpet Artistry",
    "brandProduct": "Biologique Recherche Paris",
    "durationMinutes": 90,
    "priceAED": 2750,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 451,
    "heroImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Biologique Recherche Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Biologique Recherche Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Biologique Recherche Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-105",
    "title": "The Royal Imperial Moroccan Hammam & Amber Body Polish — Signature Bridal",
    "slug": "bridal-gala-glamour-vt-105",
    "categoryId": "bridal-gala-glamour",
    "categoryName": "Bridal Couture & Red Carpet Artistry",
    "brandProduct": "Valmont Switzerland",
    "durationMinutes": 105,
    "priceAED": 2925,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 455,
    "heroImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Valmont Switzerland active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Valmont Switzerland active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Valmont Switzerland home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-106",
    "title": "The Cashmere Russian 6D Volume Lash Extension Set — Signature Bridal",
    "slug": "bridal-gala-glamour-vt-106",
    "categoryId": "bridal-gala-glamour",
    "categoryName": "Bridal Couture & Red Carpet Artistry",
    "brandProduct": "Kérastase Paris",
    "durationMinutes": 120,
    "priceAED": 3100,
    "originalPriceAED": 3725,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 459,
    "heroImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Kérastase Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Kérastase Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Kérastase Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-107",
    "title": "The High-Definition Bridal Airbrush & Editorial Crown Styling — Signature Bridal",
    "slug": "bridal-gala-glamour-vt-107",
    "categoryId": "bridal-gala-glamour",
    "categoryName": "Bridal Couture & Red Carpet Artistry",
    "brandProduct": "Oribe Luxury",
    "durationMinutes": 45,
    "priceAED": 3275,
    "originalPriceAED": 3925,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 463,
    "heroImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Oribe Luxury active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Oribe Luxury active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Oribe Luxury home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-108",
    "title": "The Swiss Valmont Cellular Hydration & Collagen Matrix Treatment — Signature Bridal",
    "slug": "bridal-gala-glamour-vt-108",
    "categoryId": "bridal-gala-glamour",
    "categoryName": "Bridal Couture & Red Carpet Artistry",
    "brandProduct": "Dyson Pro",
    "durationMinutes": 60,
    "priceAED": 3450,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 467,
    "heroImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Dyson Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Dyson Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Dyson Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-109",
    "title": "The Brazilian Lymphatic Drainage & Detox Wood Therapy — Signature Bridal",
    "slug": "bridal-gala-glamour-vt-109",
    "categoryId": "bridal-gala-glamour",
    "categoryName": "Bridal Couture & Red Carpet Artistry",
    "brandProduct": "Guinot Paris",
    "durationMinutes": 75,
    "priceAED": 3650,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 471,
    "heroImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Guinot Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Guinot Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Guinot Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-110",
    "title": "The Biologique Recherche Remodeling Face & P50 Exfoliation — Signature Bridal",
    "slug": "bridal-gala-glamour-vt-110",
    "categoryId": "bridal-gala-glamour",
    "categoryName": "Bridal Couture & Red Carpet Artistry",
    "brandProduct": "OPI Pro",
    "durationMinutes": 90,
    "priceAED": 3825,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 475,
    "heroImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic OPI Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with OPI Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended OPI Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-111",
    "title": "The Luxury Pedicure with Volcanic Hot Stone & Paraffin Mask — Signature Bridal",
    "slug": "bridal-gala-glamour-vt-111",
    "categoryId": "bridal-gala-glamour",
    "categoryName": "Bridal Couture & Red Carpet Artistry",
    "brandProduct": "Leonor Greyl Paris",
    "durationMinutes": 105,
    "priceAED": 4000,
    "originalPriceAED": 4800,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 479,
    "heroImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Leonor Greyl Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Leonor Greyl Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Leonor Greyl Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-112",
    "title": "The Nanoplastia Organic Silk Protein Hair Straightening — Signature Bridal",
    "slug": "bridal-gala-glamour-vt-112",
    "categoryId": "bridal-gala-glamour",
    "categoryName": "Bridal Couture & Red Carpet Artistry",
    "brandProduct": "Biologique Recherche Paris",
    "durationMinutes": 120,
    "priceAED": 4175,
    "originalPriceAED": 5000,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 483,
    "heroImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Biologique Recherche Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Biologique Recherche Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Biologique Recherche Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-113",
    "title": "The 24K Gold Dust Scalp Detox & Micro-Mist Steam Therapy — Signature Bridal",
    "slug": "bridal-gala-glamour-vt-113",
    "categoryId": "bridal-gala-glamour",
    "categoryName": "Bridal Couture & Red Carpet Artistry",
    "brandProduct": "Valmont Switzerland",
    "durationMinutes": 45,
    "priceAED": 4350,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 487,
    "heroImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Valmont Switzerland active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Valmont Switzerland active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Valmont Switzerland home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-114",
    "title": "The Bespoke HD Brow Micro-Lamination & Henna Sculpt — Signature Bridal",
    "slug": "bridal-gala-glamour-vt-114",
    "categoryId": "bridal-gala-glamour",
    "categoryName": "Bridal Couture & Red Carpet Artistry",
    "brandProduct": "Kérastase Paris",
    "durationMinutes": 60,
    "priceAED": 4550,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 491,
    "heroImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Kérastase Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Kérastase Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Kérastase Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-115",
    "title": "The Pre-Gala Red Carpet Glow Radiance & Oxygen Blast — Signature Bridal",
    "slug": "bridal-gala-glamour-vt-115",
    "categoryId": "bridal-gala-glamour",
    "categoryName": "Bridal Couture & Red Carpet Artistry",
    "brandProduct": "Oribe Luxury",
    "durationMinutes": 75,
    "priceAED": 4725,
    "originalPriceAED": 5675,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 495,
    "heroImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Oribe Luxury active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Oribe Luxury active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Oribe Luxury home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-116",
    "title": "The Luxury Champagne Private Suite 4-Handed Hair & Nail Ritual — Signature Bridal",
    "slug": "bridal-gala-glamour-vt-116",
    "categoryId": "bridal-gala-glamour",
    "categoryName": "Bridal Couture & Red Carpet Artistry",
    "brandProduct": "Dyson Pro",
    "durationMinutes": 90,
    "priceAED": 4900,
    "originalPriceAED": 5875,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 499,
    "heroImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Dyson Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Dyson Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Dyson Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-117",
    "title": "The Aromatherapy Hot Oil Deep Tissue Tension Relief — Signature Bridal",
    "slug": "bridal-gala-glamour-vt-117",
    "categoryId": "bridal-gala-glamour",
    "categoryName": "Bridal Couture & Red Carpet Artistry",
    "brandProduct": "Guinot Paris",
    "durationMinutes": 105,
    "priceAED": 5075,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 503,
    "heroImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Guinot Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Guinot Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Guinot Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-118",
    "title": "The Velvet Lip Blush & Semi-Permanent Pigment Contour — Signature Bridal",
    "slug": "bridal-gala-glamour-vt-118",
    "categoryId": "bridal-gala-glamour",
    "categoryName": "Bridal Couture & Red Carpet Artistry",
    "brandProduct": "OPI Pro",
    "durationMinutes": 120,
    "priceAED": 5250,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 507,
    "heroImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic OPI Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with OPI Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended OPI Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-119",
    "title": "The Japanese Head Spa & Herbal Waterfall Scalp Rejuvenation — Signature Bridal",
    "slug": "bridal-gala-glamour-vt-119",
    "categoryId": "bridal-gala-glamour",
    "categoryName": "Bridal Couture & Red Carpet Artistry",
    "brandProduct": "Leonor Greyl Paris",
    "durationMinutes": 45,
    "priceAED": 5450,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 511,
    "heroImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Leonor Greyl Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Leonor Greyl Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Leonor Greyl Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-120",
    "title": "The 100% Organic Botanical Vegan Hair Gloss & Keratin Boost — Signature Bridal",
    "slug": "bridal-gala-glamour-vt-120",
    "categoryId": "bridal-gala-glamour",
    "categoryName": "Bridal Couture & Red Carpet Artistry",
    "brandProduct": "Biologique Recherche Paris",
    "durationMinutes": 60,
    "priceAED": 5625,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 515,
    "heroImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Biologique Recherche Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Biologique Recherche Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Biologique Recherche Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-121",
    "title": "The Sovereign 24K Pure Gold Infusion Facial & Cryo Lift — Signature Lymphatic",
    "slug": "body-contouring-vt-121",
    "categoryId": "body-contouring",
    "categoryName": "Lymphatic Drainage & Body Sculpting",
    "brandProduct": "OPI Pro",
    "durationMinutes": 45,
    "priceAED": 400,
    "originalPriceAED": 475,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 519,
    "heroImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic OPI Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with OPI Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended OPI Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-122",
    "title": "The Parisian French Balayage & Gloss Glaze Architecture — Signature Lymphatic",
    "slug": "body-contouring-vt-122",
    "categoryId": "body-contouring",
    "categoryName": "Lymphatic Drainage & Body Sculpting",
    "brandProduct": "Leonor Greyl Paris",
    "durationMinutes": 60,
    "priceAED": 450,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 523,
    "heroImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Leonor Greyl Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Leonor Greyl Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Leonor Greyl Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-123",
    "title": "The Kérastase Chronologiste Caviar Hair Immersion Ritual — Signature Lymphatic",
    "slug": "body-contouring-vt-123",
    "categoryId": "body-contouring",
    "categoryName": "Lymphatic Drainage & Body Sculpting",
    "brandProduct": "Biologique Recherche Paris",
    "durationMinutes": 75,
    "priceAED": 475,
    "originalPriceAED": 575,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 527,
    "heroImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Biologique Recherche Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Biologique Recherche Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Biologique Recherche Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-124",
    "title": "The Russian Dry E-File Diamond Manicure & Builder Gel — Signature Lymphatic",
    "slug": "body-contouring-vt-124",
    "categoryId": "body-contouring",
    "categoryName": "Lymphatic Drainage & Body Sculpting",
    "brandProduct": "Valmont Switzerland",
    "durationMinutes": 90,
    "priceAED": 525,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 531,
    "heroImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Valmont Switzerland active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Valmont Switzerland active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Valmont Switzerland home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-125",
    "title": "The Royal Imperial Moroccan Hammam & Amber Body Polish — Signature Lymphatic",
    "slug": "body-contouring-vt-125",
    "categoryId": "body-contouring",
    "categoryName": "Lymphatic Drainage & Body Sculpting",
    "brandProduct": "Kérastase Paris",
    "durationMinutes": 105,
    "priceAED": 550,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 535,
    "heroImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Kérastase Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Kérastase Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Kérastase Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-126",
    "title": "The Cashmere Russian 6D Volume Lash Extension Set — Signature Lymphatic",
    "slug": "body-contouring-vt-126",
    "categoryId": "body-contouring",
    "categoryName": "Lymphatic Drainage & Body Sculpting",
    "brandProduct": "Oribe Luxury",
    "durationMinutes": 120,
    "priceAED": 600,
    "originalPriceAED": 725,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 539,
    "heroImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Oribe Luxury active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Oribe Luxury active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Oribe Luxury home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-127",
    "title": "The High-Definition Bridal Airbrush & Editorial Crown Styling — Signature Lymphatic",
    "slug": "body-contouring-vt-127",
    "categoryId": "body-contouring",
    "categoryName": "Lymphatic Drainage & Body Sculpting",
    "brandProduct": "Dyson Pro",
    "durationMinutes": 45,
    "priceAED": 650,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 543,
    "heroImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Dyson Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Dyson Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Dyson Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-128",
    "title": "The Swiss Valmont Cellular Hydration & Collagen Matrix Treatment — Signature Lymphatic",
    "slug": "body-contouring-vt-128",
    "categoryId": "body-contouring",
    "categoryName": "Lymphatic Drainage & Body Sculpting",
    "brandProduct": "Guinot Paris",
    "durationMinutes": 60,
    "priceAED": 675,
    "originalPriceAED": 800,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 547,
    "heroImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Guinot Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Guinot Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Guinot Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-129",
    "title": "The Brazilian Lymphatic Drainage & Detox Wood Therapy — Signature Lymphatic",
    "slug": "body-contouring-vt-129",
    "categoryId": "body-contouring",
    "categoryName": "Lymphatic Drainage & Body Sculpting",
    "brandProduct": "OPI Pro",
    "durationMinutes": 75,
    "priceAED": 725,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 551,
    "heroImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic OPI Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with OPI Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended OPI Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-130",
    "title": "The Biologique Recherche Remodeling Face & P50 Exfoliation — Signature Lymphatic",
    "slug": "body-contouring-vt-130",
    "categoryId": "body-contouring",
    "categoryName": "Lymphatic Drainage & Body Sculpting",
    "brandProduct": "Leonor Greyl Paris",
    "durationMinutes": 90,
    "priceAED": 750,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 555,
    "heroImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Leonor Greyl Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Leonor Greyl Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Leonor Greyl Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-131",
    "title": "The Luxury Pedicure with Volcanic Hot Stone & Paraffin Mask — Signature Lymphatic",
    "slug": "body-contouring-vt-131",
    "categoryId": "body-contouring",
    "categoryName": "Lymphatic Drainage & Body Sculpting",
    "brandProduct": "Biologique Recherche Paris",
    "durationMinutes": 105,
    "priceAED": 800,
    "originalPriceAED": 950,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 559,
    "heroImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Biologique Recherche Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Biologique Recherche Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Biologique Recherche Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-132",
    "title": "The Nanoplastia Organic Silk Protein Hair Straightening — Signature Lymphatic",
    "slug": "body-contouring-vt-132",
    "categoryId": "body-contouring",
    "categoryName": "Lymphatic Drainage & Body Sculpting",
    "brandProduct": "Valmont Switzerland",
    "durationMinutes": 120,
    "priceAED": 850,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 563,
    "heroImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Valmont Switzerland active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Valmont Switzerland active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Valmont Switzerland home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-133",
    "title": "The 24K Gold Dust Scalp Detox & Micro-Mist Steam Therapy — Signature Lymphatic",
    "slug": "body-contouring-vt-133",
    "categoryId": "body-contouring",
    "categoryName": "Lymphatic Drainage & Body Sculpting",
    "brandProduct": "Kérastase Paris",
    "durationMinutes": 45,
    "priceAED": 875,
    "originalPriceAED": 1050,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 567,
    "heroImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Kérastase Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Kérastase Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Kérastase Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-134",
    "title": "The Bespoke HD Brow Micro-Lamination & Henna Sculpt — Signature Lymphatic",
    "slug": "body-contouring-vt-134",
    "categoryId": "body-contouring",
    "categoryName": "Lymphatic Drainage & Body Sculpting",
    "brandProduct": "Oribe Luxury",
    "durationMinutes": 60,
    "priceAED": 925,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 571,
    "heroImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Oribe Luxury active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Oribe Luxury active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Oribe Luxury home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-135",
    "title": "The Pre-Gala Red Carpet Glow Radiance & Oxygen Blast — Signature Lymphatic",
    "slug": "body-contouring-vt-135",
    "categoryId": "body-contouring",
    "categoryName": "Lymphatic Drainage & Body Sculpting",
    "brandProduct": "Dyson Pro",
    "durationMinutes": 75,
    "priceAED": 950,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 575,
    "heroImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Dyson Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Dyson Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Dyson Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-136",
    "title": "The Luxury Champagne Private Suite 4-Handed Hair & Nail Ritual — Signature Lymphatic",
    "slug": "body-contouring-vt-136",
    "categoryId": "body-contouring",
    "categoryName": "Lymphatic Drainage & Body Sculpting",
    "brandProduct": "Guinot Paris",
    "durationMinutes": 90,
    "priceAED": 1000,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 579,
    "heroImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Guinot Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Guinot Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Guinot Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-137",
    "title": "The Aromatherapy Hot Oil Deep Tissue Tension Relief — Signature Lymphatic",
    "slug": "body-contouring-vt-137",
    "categoryId": "body-contouring",
    "categoryName": "Lymphatic Drainage & Body Sculpting",
    "brandProduct": "OPI Pro",
    "durationMinutes": 105,
    "priceAED": 1050,
    "originalPriceAED": 1250,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 583,
    "heroImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic OPI Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with OPI Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended OPI Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-138",
    "title": "The Velvet Lip Blush & Semi-Permanent Pigment Contour — Signature Lymphatic",
    "slug": "body-contouring-vt-138",
    "categoryId": "body-contouring",
    "categoryName": "Lymphatic Drainage & Body Sculpting",
    "brandProduct": "Leonor Greyl Paris",
    "durationMinutes": 120,
    "priceAED": 1075,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 587,
    "heroImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Leonor Greyl Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Leonor Greyl Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Leonor Greyl Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-139",
    "title": "The Japanese Head Spa & Herbal Waterfall Scalp Rejuvenation — Signature Lymphatic",
    "slug": "body-contouring-vt-139",
    "categoryId": "body-contouring",
    "categoryName": "Lymphatic Drainage & Body Sculpting",
    "brandProduct": "Biologique Recherche Paris",
    "durationMinutes": 45,
    "priceAED": 1125,
    "originalPriceAED": 1350,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 591,
    "heroImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Biologique Recherche Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Biologique Recherche Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Biologique Recherche Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-140",
    "title": "The 100% Organic Botanical Vegan Hair Gloss & Keratin Boost — Signature Lymphatic",
    "slug": "body-contouring-vt-140",
    "categoryId": "body-contouring",
    "categoryName": "Lymphatic Drainage & Body Sculpting",
    "brandProduct": "Valmont Switzerland",
    "durationMinutes": 60,
    "priceAED": 1150,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": false,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 595,
    "heroImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Valmont Switzerland active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Valmont Switzerland active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Valmont Switzerland home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-141",
    "title": "The Sovereign 24K Pure Gold Infusion Facial & Cryo Lift — Signature Private",
    "slug": "vip-private-suite-vt-141",
    "categoryId": "vip-private-suite",
    "categoryName": "Private VIP Champagne Suites",
    "brandProduct": "Leonor Greyl Paris",
    "durationMinutes": 45,
    "priceAED": 1850,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 599,
    "heroImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Leonor Greyl Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Leonor Greyl Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Leonor Greyl Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-142",
    "title": "The Parisian French Balayage & Gloss Glaze Architecture — Signature Private",
    "slug": "vip-private-suite-vt-142",
    "categoryId": "vip-private-suite",
    "categoryName": "Private VIP Champagne Suites",
    "brandProduct": "Biologique Recherche Paris",
    "durationMinutes": 60,
    "priceAED": 2000,
    "originalPriceAED": 2400,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 603,
    "heroImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Biologique Recherche Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Biologique Recherche Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Biologique Recherche Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-143",
    "title": "The Kérastase Chronologiste Caviar Hair Immersion Ritual — Signature Private",
    "slug": "vip-private-suite-vt-143",
    "categoryId": "vip-private-suite",
    "categoryName": "Private VIP Champagne Suites",
    "brandProduct": "Valmont Switzerland",
    "durationMinutes": 75,
    "priceAED": 2150,
    "originalPriceAED": 2575,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 607,
    "heroImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Valmont Switzerland active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Valmont Switzerland active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Valmont Switzerland home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-144",
    "title": "The Russian Dry E-File Diamond Manicure & Builder Gel — Signature Private",
    "slug": "vip-private-suite-vt-144",
    "categoryId": "vip-private-suite",
    "categoryName": "Private VIP Champagne Suites",
    "brandProduct": "Kérastase Paris",
    "durationMinutes": 90,
    "priceAED": 2300,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 611,
    "heroImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Kérastase Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Kérastase Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Kérastase Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-145",
    "title": "The Royal Imperial Moroccan Hammam & Amber Body Polish — Signature Private",
    "slug": "vip-private-suite-vt-145",
    "categoryId": "vip-private-suite",
    "categoryName": "Private VIP Champagne Suites",
    "brandProduct": "Oribe Luxury",
    "durationMinutes": 105,
    "priceAED": 2450,
    "originalPriceAED": 2950,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 615,
    "heroImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Oribe Luxury active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Oribe Luxury active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Oribe Luxury home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-146",
    "title": "The Cashmere Russian 6D Volume Lash Extension Set — Signature Private",
    "slug": "vip-private-suite-vt-146",
    "categoryId": "vip-private-suite",
    "categoryName": "Private VIP Champagne Suites",
    "brandProduct": "Dyson Pro",
    "durationMinutes": 120,
    "priceAED": 2600,
    "originalPriceAED": 3125,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 619,
    "heroImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Dyson Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Dyson Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Dyson Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-147",
    "title": "The High-Definition Bridal Airbrush & Editorial Crown Styling — Signature Private",
    "slug": "vip-private-suite-vt-147",
    "categoryId": "vip-private-suite",
    "categoryName": "Private VIP Champagne Suites",
    "brandProduct": "Guinot Paris",
    "durationMinutes": 45,
    "priceAED": 2750,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 623,
    "heroImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Guinot Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Guinot Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Guinot Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-148",
    "title": "The Swiss Valmont Cellular Hydration & Collagen Matrix Treatment — Signature Private",
    "slug": "vip-private-suite-vt-148",
    "categoryId": "vip-private-suite",
    "categoryName": "Private VIP Champagne Suites",
    "brandProduct": "OPI Pro",
    "durationMinutes": 60,
    "priceAED": 2900,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 627,
    "heroImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic OPI Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with OPI Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended OPI Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-149",
    "title": "The Brazilian Lymphatic Drainage & Detox Wood Therapy — Signature Private",
    "slug": "vip-private-suite-vt-149",
    "categoryId": "vip-private-suite",
    "categoryName": "Private VIP Champagne Suites",
    "brandProduct": "Leonor Greyl Paris",
    "durationMinutes": 75,
    "priceAED": 3050,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 631,
    "heroImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Leonor Greyl Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Leonor Greyl Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Leonor Greyl Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-150",
    "title": "The Biologique Recherche Remodeling Face & P50 Exfoliation — Signature Private",
    "slug": "vip-private-suite-vt-150",
    "categoryId": "vip-private-suite",
    "categoryName": "Private VIP Champagne Suites",
    "brandProduct": "Biologique Recherche Paris",
    "durationMinutes": 90,
    "priceAED": 3200,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 635,
    "heroImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Biologique Recherche Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Biologique Recherche Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Biologique Recherche Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-151",
    "title": "The Luxury Pedicure with Volcanic Hot Stone & Paraffin Mask — Signature Private",
    "slug": "vip-private-suite-vt-151",
    "categoryId": "vip-private-suite",
    "categoryName": "Private VIP Champagne Suites",
    "brandProduct": "Valmont Switzerland",
    "durationMinutes": 105,
    "priceAED": 3350,
    "originalPriceAED": 4025,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 639,
    "heroImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Valmont Switzerland active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Valmont Switzerland active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Valmont Switzerland home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-152",
    "title": "The Nanoplastia Organic Silk Protein Hair Straightening — Signature Private",
    "slug": "vip-private-suite-vt-152",
    "categoryId": "vip-private-suite",
    "categoryName": "Private VIP Champagne Suites",
    "brandProduct": "Kérastase Paris",
    "durationMinutes": 120,
    "priceAED": 3500,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 643,
    "heroImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Kérastase Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Kérastase Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Kérastase Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-153",
    "title": "The 24K Gold Dust Scalp Detox & Micro-Mist Steam Therapy — Signature Private",
    "slug": "vip-private-suite-vt-153",
    "categoryId": "vip-private-suite",
    "categoryName": "Private VIP Champagne Suites",
    "brandProduct": "Oribe Luxury",
    "durationMinutes": 45,
    "priceAED": 3650,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 4.9,
    "reviewsCount": 647,
    "heroImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Oribe Luxury active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Oribe Luxury active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Oribe Luxury home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-154",
    "title": "The Bespoke HD Brow Micro-Lamination & Henna Sculpt — Signature Private",
    "slug": "vip-private-suite-vt-154",
    "categoryId": "vip-private-suite",
    "categoryName": "Private VIP Champagne Suites",
    "brandProduct": "Dyson Pro",
    "durationMinutes": 60,
    "priceAED": 3800,
    "originalPriceAED": 4550,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 651,
    "heroImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Dyson Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Dyson Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Dyson Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-155",
    "title": "The Pre-Gala Red Carpet Glow Radiance & Oxygen Blast — Signature Private",
    "slug": "vip-private-suite-vt-155",
    "categoryId": "vip-private-suite",
    "categoryName": "Private VIP Champagne Suites",
    "brandProduct": "Guinot Paris",
    "durationMinutes": 75,
    "priceAED": 3950,
    "originalPriceAED": 4750,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 655,
    "heroImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Guinot Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Guinot Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Guinot Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-156",
    "title": "The Luxury Champagne Private Suite 4-Handed Hair & Nail Ritual — Signature Private",
    "slug": "vip-private-suite-vt-156",
    "categoryId": "vip-private-suite",
    "categoryName": "Private VIP Champagne Suites",
    "brandProduct": "OPI Pro",
    "durationMinutes": 90,
    "priceAED": 4100,
    "originalPriceAED": 4925,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 659,
    "heroImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic OPI Pro active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with OPI Pro active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended OPI Pro home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-157",
    "title": "The Aromatherapy Hot Oil Deep Tissue Tension Relief — Signature Private",
    "slug": "vip-private-suite-vt-157",
    "categoryId": "vip-private-suite",
    "categoryName": "Private VIP Champagne Suites",
    "brandProduct": "Leonor Greyl Paris",
    "durationMinutes": 105,
    "priceAED": 4250,
    "assignedStylist": {
      "name": "Camilla Rossi",
      "title": "Lead Bridal & Red Carpet Makeup Director",
      "experience": "11+ Yrs Milan & Cannes Red Carpet"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 663,
    "heroImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Leonor Greyl Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Camilla Rossi.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Leonor Greyl Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Leonor Greyl Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-158",
    "title": "The Velvet Lip Blush & Semi-Permanent Pigment Contour — Signature Private",
    "slug": "vip-private-suite-vt-158",
    "categoryId": "vip-private-suite",
    "categoryName": "Private VIP Champagne Suites",
    "brandProduct": "Biologique Recherche Paris",
    "durationMinutes": 120,
    "priceAED": 4400,
    "originalPriceAED": 5275,
    "assignedStylist": {
      "name": "Genevieve Laurent",
      "title": "Creative Director — Paris Haute Coiffure",
      "experience": "14+ Yrs Paris & Dubai Fashion Week"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 5,
    "reviewsCount": 667,
    "heroImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Biologique Recherche Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Genevieve Laurent.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Biologique Recherche Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Biologique Recherche Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-159",
    "title": "The Japanese Head Spa & Herbal Waterfall Scalp Rejuvenation — Signature Private",
    "slug": "vip-private-suite-vt-159",
    "categoryId": "vip-private-suite",
    "categoryName": "Private VIP Champagne Suites",
    "brandProduct": "Valmont Switzerland",
    "durationMinutes": 45,
    "priceAED": 4550,
    "originalPriceAED": 5450,
    "assignedStylist": {
      "name": "Anastasia Volkova",
      "title": "Master Nail Artist & Russian E-File Specialist",
      "experience": "10+ Yrs Master Instructor"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": true,
    "rating": 5,
    "reviewsCount": 671,
    "heroImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Valmont Switzerland active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Anastasia Volkova.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Valmont Switzerland active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Valmont Switzerland home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  },
  {
    "id": "VT-160",
    "title": "The 100% Organic Botanical Vegan Hair Gloss & Keratin Boost — Signature Private",
    "slug": "vip-private-suite-vt-160",
    "categoryId": "vip-private-suite",
    "categoryName": "Private VIP Champagne Suites",
    "brandProduct": "Kérastase Paris",
    "durationMinutes": 60,
    "priceAED": 4700,
    "originalPriceAED": 5650,
    "assignedStylist": {
      "name": "Nour Al-Sabah",
      "title": "Senior Aesthetician & Valmont Certified Specialist",
      "experience": "12+ Yrs Swiss Cellular Skin"
    },
    "isVipSuiteEligible": true,
    "isOrganicCertified": false,
    "rating": 4.9,
    "reviewsCount": 675,
    "heroImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
    "gallery": [
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85"
    ],
    "description": "An exquisite haute beauty ritual performed in our Dubai Design District (d3) atelier. Formulated with authentic Kérastase Paris active complexes, this treatment delivers transformative radiance, cellular rejuvenation, and customized aesthetic perfection administered by Nour Al-Sabah.",
    "includedSteps": [
      "Personalized diagnostic skin/hair texture analysis & lifestyle consultation",
      "Deep clarifying prep with Kérastase Paris active botanical extracts",
      "Targeted master aesthetic technique with ultrasonic or micro-current technology",
      "Soothing cold-stone cryo therapy & custom nutrient-infusion seal",
      "Signature blowout or finishing polish with take-home aftercare protocol"
    ],
    "aftercareAdvice": [
      "Avoid thermal heat, swimming pools & direct UV exposure for 24 hours",
      "Maintain optimal longevity with recommended Kérastase Paris home regime",
      "Schedule maintenance visit within 4 to 6 weeks for sustained radiance"
    ]
  }
];
