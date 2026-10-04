export interface CleaningService {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  categoryName: string;
  propertyType: string;
  recommendedFor: string;
  priceAED: number;
  originalPriceAED?: number;
  durationHours: number;
  crewSize: number;
  sqftCoverage: number;
  turnaroundSpeed: string;
  chemicalCertification: string;
  equipment: string[];
  guarantee: string;
  rating: number;
  reviewsCount: number;
  heroImage: string;
  beforeImage: string;
  afterImage: string;
  isPopular: boolean;
  isCorporateEligible: boolean;
  description: string;
  deliverables: string[];
  methodology: { phase: string; description: string }[];
}

export const CLEANING_CATALOG: CleaningService[] = [
  {
    "id": "PR-001",
    "title": "The Sovereign Royal Villa Deep Clean & UV Decontamination — Ultra-Luxury Edition",
    "slug": "villa-deep-cleaning-pr-001",
    "categoryId": "villa-deep-cleaning",
    "categoryName": "Ultra-Luxury Villa Deep Clean",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in Palm Jumeirah requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1850,
    "durationHours": 3,
    "crewSize": 2,
    "sqftCoverage": 1500,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 41,
    "heroImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Palm Jumeirah. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-002",
    "title": "The Elysian Move-In Handover & Bio-Seal Detailing — Ultra-Luxury Edition",
    "slug": "villa-deep-cleaning-pr-002",
    "categoryId": "villa-deep-cleaning",
    "categoryName": "Ultra-Luxury Villa Deep Clean",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Emirates Hills requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2000,
    "durationHours": 4,
    "crewSize": 3,
    "sqftCoverage": 2100,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 44,
    "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Emirates Hills. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-003",
    "title": "The Master Diamond Marble Honing & Crystallization Program — Ultra-Luxury Edition",
    "slug": "villa-deep-cleaning-pr-003",
    "categoryId": "villa-deep-cleaning",
    "categoryName": "Ultra-Luxury Villa Deep Clean",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Jumeirah Bay Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2150,
    "durationHours": 5,
    "crewSize": 4,
    "sqftCoverage": 2700,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 47,
    "heroImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Jumeirah Bay Island. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-004",
    "title": "The Murano & Swarovski Crystal Chandelier Ultrasonic Restoration — Ultra-Luxury Edition",
    "slug": "villa-deep-cleaning-pr-004",
    "categoryId": "villa-deep-cleaning",
    "categoryName": "Ultra-Luxury Villa Deep Clean",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in Downtown Dubai requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2300,
    "durationHours": 6,
    "crewSize": 5,
    "sqftCoverage": 3300,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 50,
    "heroImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Downtown Dubai. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-005",
    "title": "The Medical-Grade HVAC Air Duct & Coil Disinfection Protocol — Ultra-Luxury Edition",
    "slug": "villa-deep-cleaning-pr-005",
    "categoryId": "villa-deep-cleaning",
    "categoryName": "Ultra-Luxury Villa Deep Clean",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Dubai Hills Estate requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2450,
    "durationHours": 7,
    "crewSize": 6,
    "sqftCoverage": 3900,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 53,
    "heroImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Hills Estate. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-006",
    "title": "The Persian Silk & Hand-Knotted Wool Carpet Extraction Service — Ultra-Luxury Edition",
    "slug": "villa-deep-cleaning-pr-006",
    "categoryId": "villa-deep-cleaning",
    "categoryName": "Ultra-Luxury Villa Deep Clean",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Saadiyat Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2600,
    "durationHours": 8,
    "crewSize": 2,
    "sqftCoverage": 4500,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 56,
    "heroImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Saadiyat Island. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-007",
    "title": "The Full Architectural Glass & High-Rise Abseiling Detailing — Ultra-Luxury Edition",
    "slug": "villa-deep-cleaning-pr-007",
    "categoryId": "villa-deep-cleaning",
    "categoryName": "Ultra-Luxury Villa Deep Clean",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Al Barari requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2750,
    "durationHours": 3,
    "crewSize": 3,
    "sqftCoverage": 5100,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 59,
    "heroImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Al Barari. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-008",
    "title": "The Subterranean Garage & Epoxy Floor Hydro-Scrub Program — Ultra-Luxury Edition",
    "slug": "villa-deep-cleaning-pr-008",
    "categoryId": "villa-deep-cleaning",
    "categoryName": "Ultra-Luxury Villa Deep Clean",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in DIFC requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2900,
    "durationHours": 4,
    "crewSize": 4,
    "sqftCoverage": 5700,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 62,
    "heroImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in DIFC. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-009",
    "title": "The Private Superyacht Interior Detailing & Teak Restoration — Ultra-Luxury Edition",
    "slug": "villa-deep-cleaning-pr-009",
    "categoryId": "villa-deep-cleaning",
    "categoryName": "Ultra-Luxury Villa Deep Clean",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Bluewaters Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3050,
    "originalPriceAED": 3650,
    "durationHours": 5,
    "crewSize": 5,
    "sqftCoverage": 6300,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 65,
    "heroImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Bluewaters Island. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-010",
    "title": "The Commercial Clinic DHA-Certified Bio-Decontamination Service — Ultra-Luxury Edition",
    "slug": "villa-deep-cleaning-pr-010",
    "categoryId": "villa-deep-cleaning",
    "categoryName": "Ultra-Luxury Villa Deep Clean",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Dubai Marina requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3200,
    "durationHours": 6,
    "crewSize": 6,
    "sqftCoverage": 6900,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 68,
    "heroImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Marina. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-011",
    "title": "The Luxury Infinity Pool & Outdoor Patio Hydro-Jet Detailing — Ultra-Luxury Edition",
    "slug": "villa-deep-cleaning-pr-011",
    "categoryId": "villa-deep-cleaning",
    "categoryName": "Ultra-Luxury Villa Deep Clean",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in Palm Jumeirah requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3350,
    "originalPriceAED": 4000,
    "durationHours": 7,
    "crewSize": 2,
    "sqftCoverage": 7500,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 71,
    "heroImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Palm Jumeirah. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-012",
    "title": "The Bespoke Italian Kitchen Degreasing & Appliance Steam Restoration — Ultra-Luxury Edition",
    "slug": "villa-deep-cleaning-pr-012",
    "categoryId": "villa-deep-cleaning",
    "categoryName": "Ultra-Luxury Villa Deep Clean",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Emirates Hills requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3500,
    "durationHours": 8,
    "crewSize": 3,
    "sqftCoverage": 8100,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 74,
    "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Emirates Hills. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-013",
    "title": "The Fine Leather Furniture Nourishment & Anti-Microbial Treatment — Ultra-Luxury Edition",
    "slug": "villa-deep-cleaning-pr-013",
    "categoryId": "villa-deep-cleaning",
    "categoryName": "Ultra-Luxury Villa Deep Clean",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Jumeirah Bay Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3650,
    "durationHours": 3,
    "crewSize": 4,
    "sqftCoverage": 8700,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 77,
    "heroImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Jumeirah Bay Island. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-014",
    "title": "The Rooftop Solarium & Solar Panel Robotic Dry Cleaning — Ultra-Luxury Edition",
    "slug": "villa-deep-cleaning-pr-014",
    "categoryId": "villa-deep-cleaning",
    "categoryName": "Ultra-Luxury Villa Deep Clean",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Downtown Dubai requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3800,
    "durationHours": 4,
    "crewSize": 5,
    "sqftCoverage": 9300,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 80,
    "heroImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Downtown Dubai. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-015",
    "title": "The Wine Cellar Climate-Controlled Dust & Mold Sanitization — Ultra-Luxury Edition",
    "slug": "villa-deep-cleaning-pr-015",
    "categoryId": "villa-deep-cleaning",
    "categoryName": "Ultra-Luxury Villa Deep Clean",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in Dubai Hills Estate requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3950,
    "originalPriceAED": 4750,
    "durationHours": 5,
    "crewSize": 6,
    "sqftCoverage": 9900,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 83,
    "heroImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Hills Estate. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-016",
    "title": "The Luxury Wardrobe & Walk-in Dressing Salon Sanitization — Ultra-Luxury Edition",
    "slug": "villa-deep-cleaning-pr-016",
    "categoryId": "villa-deep-cleaning",
    "categoryName": "Ultra-Luxury Villa Deep Clean",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Saadiyat Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 4100,
    "originalPriceAED": 4900,
    "durationHours": 6,
    "crewSize": 2,
    "sqftCoverage": 10500,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 86,
    "heroImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Saadiyat Island. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-017",
    "title": "The Spa & Private Hammam Descaling & Anti-Fungal Treatment — Ultra-Luxury Edition",
    "slug": "villa-deep-cleaning-pr-017",
    "categoryId": "villa-deep-cleaning",
    "categoryName": "Ultra-Luxury Villa Deep Clean",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Al Barari requiring flawless execution and certified non-toxic standards.",
    "priceAED": 4250,
    "originalPriceAED": 5100,
    "durationHours": 7,
    "crewSize": 3,
    "sqftCoverage": 11100,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 89,
    "heroImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Al Barari. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-018",
    "title": "The Move-Out Deposit Return Guaranteed Complete Deep Clean — Ultra-Luxury Edition",
    "slug": "villa-deep-cleaning-pr-018",
    "categoryId": "villa-deep-cleaning",
    "categoryName": "Ultra-Luxury Villa Deep Clean",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in DIFC requiring flawless execution and certified non-toxic standards.",
    "priceAED": 4400,
    "originalPriceAED": 5300,
    "durationHours": 8,
    "crewSize": 4,
    "sqftCoverage": 11700,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 92,
    "heroImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in DIFC. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-019",
    "title": "The High-Rise Penthouse 360° Curtain Wall Glass Wash — Ultra-Luxury Edition",
    "slug": "villa-deep-cleaning-pr-019",
    "categoryId": "villa-deep-cleaning",
    "categoryName": "Ultra-Luxury Villa Deep Clean",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Bluewaters Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 4550,
    "durationHours": 3,
    "crewSize": 5,
    "sqftCoverage": 12300,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 95,
    "heroImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Bluewaters Island. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-020",
    "title": "The Green-Certified Eco-Botanical Allergy Relief Sanitization — Ultra-Luxury Edition",
    "slug": "villa-deep-cleaning-pr-020",
    "categoryId": "villa-deep-cleaning",
    "categoryName": "Ultra-Luxury Villa Deep Clean",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Dubai Marina requiring flawless execution and certified non-toxic standards.",
    "priceAED": 4700,
    "durationHours": 4,
    "crewSize": 6,
    "sqftCoverage": 12900,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 98,
    "heroImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Marina. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-021",
    "title": "The Sovereign Royal Villa Deep Clean & UV Decontamination — Move-In Edition",
    "slug": "move-in-out-handover-pr-021",
    "categoryId": "move-in-out-handover",
    "categoryName": "Move-In & Handover Detailing",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Emirates Hills requiring flawless execution and certified non-toxic standards.",
    "priceAED": 850,
    "durationHours": 3,
    "crewSize": 2,
    "sqftCoverage": 1500,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 101,
    "heroImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Emirates Hills. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-022",
    "title": "The Elysian Move-In Handover & Bio-Seal Detailing — Move-In Edition",
    "slug": "move-in-out-handover-pr-022",
    "categoryId": "move-in-out-handover",
    "categoryName": "Move-In & Handover Detailing",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Jumeirah Bay Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 950,
    "originalPriceAED": 1150,
    "durationHours": 4,
    "crewSize": 3,
    "sqftCoverage": 2100,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 104,
    "heroImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Jumeirah Bay Island. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-023",
    "title": "The Master Diamond Marble Honing & Crystallization Program — Move-In Edition",
    "slug": "move-in-out-handover-pr-023",
    "categoryId": "move-in-out-handover",
    "categoryName": "Move-In & Handover Detailing",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in Downtown Dubai requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1000,
    "originalPriceAED": 1200,
    "durationHours": 5,
    "crewSize": 4,
    "sqftCoverage": 2700,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 107,
    "heroImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Downtown Dubai. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-024",
    "title": "The Murano & Swarovski Crystal Chandelier Ultrasonic Restoration — Move-In Edition",
    "slug": "move-in-out-handover-pr-024",
    "categoryId": "move-in-out-handover",
    "categoryName": "Move-In & Handover Detailing",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Dubai Hills Estate requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1100,
    "durationHours": 6,
    "crewSize": 5,
    "sqftCoverage": 3300,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 110,
    "heroImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Hills Estate. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-025",
    "title": "The Medical-Grade HVAC Air Duct & Coil Disinfection Protocol — Move-In Edition",
    "slug": "move-in-out-handover-pr-025",
    "categoryId": "move-in-out-handover",
    "categoryName": "Move-In & Handover Detailing",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Saadiyat Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1150,
    "durationHours": 7,
    "crewSize": 6,
    "sqftCoverage": 3900,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 113,
    "heroImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Saadiyat Island. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-026",
    "title": "The Persian Silk & Hand-Knotted Wool Carpet Extraction Service — Move-In Edition",
    "slug": "move-in-out-handover-pr-026",
    "categoryId": "move-in-out-handover",
    "categoryName": "Move-In & Handover Detailing",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Al Barari requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1250,
    "durationHours": 8,
    "crewSize": 2,
    "sqftCoverage": 4500,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 116,
    "heroImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Al Barari. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-027",
    "title": "The Full Architectural Glass & High-Rise Abseiling Detailing — Move-In Edition",
    "slug": "move-in-out-handover-pr-027",
    "categoryId": "move-in-out-handover",
    "categoryName": "Move-In & Handover Detailing",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in DIFC requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1350,
    "durationHours": 3,
    "crewSize": 3,
    "sqftCoverage": 5100,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 119,
    "heroImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in DIFC. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-028",
    "title": "The Subterranean Garage & Epoxy Floor Hydro-Scrub Program — Move-In Edition",
    "slug": "move-in-out-handover-pr-028",
    "categoryId": "move-in-out-handover",
    "categoryName": "Move-In & Handover Detailing",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Bluewaters Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1400,
    "originalPriceAED": 1700,
    "durationHours": 4,
    "crewSize": 4,
    "sqftCoverage": 5700,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 122,
    "heroImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Bluewaters Island. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-029",
    "title": "The Private Superyacht Interior Detailing & Teak Restoration — Move-In Edition",
    "slug": "move-in-out-handover-pr-029",
    "categoryId": "move-in-out-handover",
    "categoryName": "Move-In & Handover Detailing",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Dubai Marina requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1500,
    "durationHours": 5,
    "crewSize": 5,
    "sqftCoverage": 6300,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 125,
    "heroImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Marina. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-030",
    "title": "The Commercial Clinic DHA-Certified Bio-Decontamination Service — Move-In Edition",
    "slug": "move-in-out-handover-pr-030",
    "categoryId": "move-in-out-handover",
    "categoryName": "Move-In & Handover Detailing",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in Palm Jumeirah requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1550,
    "originalPriceAED": 1850,
    "durationHours": 6,
    "crewSize": 6,
    "sqftCoverage": 6900,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 128,
    "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Palm Jumeirah. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-031",
    "title": "The Luxury Infinity Pool & Outdoor Patio Hydro-Jet Detailing — Move-In Edition",
    "slug": "move-in-out-handover-pr-031",
    "categoryId": "move-in-out-handover",
    "categoryName": "Move-In & Handover Detailing",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Emirates Hills requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1650,
    "originalPriceAED": 2000,
    "durationHours": 7,
    "crewSize": 2,
    "sqftCoverage": 7500,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 131,
    "heroImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Emirates Hills. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-032",
    "title": "The Bespoke Italian Kitchen Degreasing & Appliance Steam Restoration — Move-In Edition",
    "slug": "move-in-out-handover-pr-032",
    "categoryId": "move-in-out-handover",
    "categoryName": "Move-In & Handover Detailing",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Jumeirah Bay Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1750,
    "originalPriceAED": 2100,
    "durationHours": 8,
    "crewSize": 3,
    "sqftCoverage": 8100,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 134,
    "heroImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Jumeirah Bay Island. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-033",
    "title": "The Fine Leather Furniture Nourishment & Anti-Microbial Treatment — Move-In Edition",
    "slug": "move-in-out-handover-pr-033",
    "categoryId": "move-in-out-handover",
    "categoryName": "Move-In & Handover Detailing",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Downtown Dubai requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1800,
    "originalPriceAED": 2150,
    "durationHours": 3,
    "crewSize": 4,
    "sqftCoverage": 8700,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 137,
    "heroImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Downtown Dubai. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-034",
    "title": "The Rooftop Solarium & Solar Panel Robotic Dry Cleaning — Move-In Edition",
    "slug": "move-in-out-handover-pr-034",
    "categoryId": "move-in-out-handover",
    "categoryName": "Move-In & Handover Detailing",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in Dubai Hills Estate requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1900,
    "originalPriceAED": 2300,
    "durationHours": 4,
    "crewSize": 5,
    "sqftCoverage": 9300,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 140,
    "heroImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Hills Estate. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-035",
    "title": "The Wine Cellar Climate-Controlled Dust & Mold Sanitization — Move-In Edition",
    "slug": "move-in-out-handover-pr-035",
    "categoryId": "move-in-out-handover",
    "categoryName": "Move-In & Handover Detailing",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Saadiyat Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1950,
    "durationHours": 5,
    "crewSize": 6,
    "sqftCoverage": 9900,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 143,
    "heroImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Saadiyat Island. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-036",
    "title": "The Luxury Wardrobe & Walk-in Dressing Salon Sanitization — Move-In Edition",
    "slug": "move-in-out-handover-pr-036",
    "categoryId": "move-in-out-handover",
    "categoryName": "Move-In & Handover Detailing",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Al Barari requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2050,
    "durationHours": 6,
    "crewSize": 2,
    "sqftCoverage": 10500,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 146,
    "heroImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Al Barari. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-037",
    "title": "The Spa & Private Hammam Descaling & Anti-Fungal Treatment — Move-In Edition",
    "slug": "move-in-out-handover-pr-037",
    "categoryId": "move-in-out-handover",
    "categoryName": "Move-In & Handover Detailing",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in DIFC requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2150,
    "originalPriceAED": 2600,
    "durationHours": 7,
    "crewSize": 3,
    "sqftCoverage": 11100,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 149,
    "heroImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in DIFC. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-038",
    "title": "The Move-Out Deposit Return Guaranteed Complete Deep Clean — Move-In Edition",
    "slug": "move-in-out-handover-pr-038",
    "categoryId": "move-in-out-handover",
    "categoryName": "Move-In & Handover Detailing",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Bluewaters Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2200,
    "originalPriceAED": 2650,
    "durationHours": 8,
    "crewSize": 4,
    "sqftCoverage": 11700,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 152,
    "heroImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Bluewaters Island. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-039",
    "title": "The High-Rise Penthouse 360° Curtain Wall Glass Wash — Move-In Edition",
    "slug": "move-in-out-handover-pr-039",
    "categoryId": "move-in-out-handover",
    "categoryName": "Move-In & Handover Detailing",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Dubai Marina requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2300,
    "durationHours": 3,
    "crewSize": 5,
    "sqftCoverage": 12300,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 155,
    "heroImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Marina. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-040",
    "title": "The Green-Certified Eco-Botanical Allergy Relief Sanitization — Move-In Edition",
    "slug": "move-in-out-handover-pr-040",
    "categoryId": "move-in-out-handover",
    "categoryName": "Move-In & Handover Detailing",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Palm Jumeirah requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2350,
    "originalPriceAED": 2800,
    "durationHours": 4,
    "crewSize": 6,
    "sqftCoverage": 12900,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 158,
    "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Palm Jumeirah. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-041",
    "title": "The Sovereign Royal Villa Deep Clean & UV Decontamination — Post-Construction Edition",
    "slug": "post-construction-pr-041",
    "categoryId": "post-construction",
    "categoryName": "Post-Construction Bio-Sanitization",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Jumeirah Bay Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2200,
    "originalPriceAED": 2650,
    "durationHours": 3,
    "crewSize": 2,
    "sqftCoverage": 1500,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 161,
    "heroImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Jumeirah Bay Island. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-042",
    "title": "The Elysian Move-In Handover & Bio-Seal Detailing — Post-Construction Edition",
    "slug": "post-construction-pr-042",
    "categoryId": "post-construction",
    "categoryName": "Post-Construction Bio-Sanitization",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in Downtown Dubai requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2400,
    "originalPriceAED": 2900,
    "durationHours": 4,
    "crewSize": 3,
    "sqftCoverage": 2100,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 164,
    "heroImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Downtown Dubai. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-043",
    "title": "The Master Diamond Marble Honing & Crystallization Program — Post-Construction Edition",
    "slug": "post-construction-pr-043",
    "categoryId": "post-construction",
    "categoryName": "Post-Construction Bio-Sanitization",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Dubai Hills Estate requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2550,
    "originalPriceAED": 3050,
    "durationHours": 5,
    "crewSize": 4,
    "sqftCoverage": 2700,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 167,
    "heroImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Hills Estate. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-044",
    "title": "The Murano & Swarovski Crystal Chandelier Ultrasonic Restoration — Post-Construction Edition",
    "slug": "post-construction-pr-044",
    "categoryId": "post-construction",
    "categoryName": "Post-Construction Bio-Sanitization",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Saadiyat Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2750,
    "durationHours": 6,
    "crewSize": 5,
    "sqftCoverage": 3300,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 170,
    "heroImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Saadiyat Island. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-045",
    "title": "The Medical-Grade HVAC Air Duct & Coil Disinfection Protocol — Post-Construction Edition",
    "slug": "post-construction-pr-045",
    "categoryId": "post-construction",
    "categoryName": "Post-Construction Bio-Sanitization",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Al Barari requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2900,
    "durationHours": 7,
    "crewSize": 6,
    "sqftCoverage": 3900,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 173,
    "heroImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Al Barari. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-046",
    "title": "The Persian Silk & Hand-Knotted Wool Carpet Extraction Service — Post-Construction Edition",
    "slug": "post-construction-pr-046",
    "categoryId": "post-construction",
    "categoryName": "Post-Construction Bio-Sanitization",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in DIFC requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3100,
    "originalPriceAED": 3700,
    "durationHours": 8,
    "crewSize": 2,
    "sqftCoverage": 4500,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 176,
    "heroImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in DIFC. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-047",
    "title": "The Full Architectural Glass & High-Rise Abseiling Detailing — Post-Construction Edition",
    "slug": "post-construction-pr-047",
    "categoryId": "post-construction",
    "categoryName": "Post-Construction Bio-Sanitization",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Bluewaters Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3300,
    "originalPriceAED": 3950,
    "durationHours": 3,
    "crewSize": 3,
    "sqftCoverage": 5100,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 179,
    "heroImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Bluewaters Island. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-048",
    "title": "The Subterranean Garage & Epoxy Floor Hydro-Scrub Program — Post-Construction Edition",
    "slug": "post-construction-pr-048",
    "categoryId": "post-construction",
    "categoryName": "Post-Construction Bio-Sanitization",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Dubai Marina requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3450,
    "originalPriceAED": 4150,
    "durationHours": 4,
    "crewSize": 4,
    "sqftCoverage": 5700,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 182,
    "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Marina. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-049",
    "title": "The Private Superyacht Interior Detailing & Teak Restoration — Post-Construction Edition",
    "slug": "post-construction-pr-049",
    "categoryId": "post-construction",
    "categoryName": "Post-Construction Bio-Sanitization",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in Palm Jumeirah requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3650,
    "durationHours": 5,
    "crewSize": 5,
    "sqftCoverage": 6300,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 185,
    "heroImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Palm Jumeirah. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-050",
    "title": "The Commercial Clinic DHA-Certified Bio-Decontamination Service — Post-Construction Edition",
    "slug": "post-construction-pr-050",
    "categoryId": "post-construction",
    "categoryName": "Post-Construction Bio-Sanitization",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Emirates Hills requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3800,
    "durationHours": 6,
    "crewSize": 6,
    "sqftCoverage": 6900,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 188,
    "heroImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Emirates Hills. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-051",
    "title": "The Luxury Infinity Pool & Outdoor Patio Hydro-Jet Detailing — Post-Construction Edition",
    "slug": "post-construction-pr-051",
    "categoryId": "post-construction",
    "categoryName": "Post-Construction Bio-Sanitization",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Jumeirah Bay Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 4000,
    "originalPriceAED": 4800,
    "durationHours": 7,
    "crewSize": 2,
    "sqftCoverage": 7500,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 191,
    "heroImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Jumeirah Bay Island. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-052",
    "title": "The Bespoke Italian Kitchen Degreasing & Appliance Steam Restoration — Post-Construction Edition",
    "slug": "post-construction-pr-052",
    "categoryId": "post-construction",
    "categoryName": "Post-Construction Bio-Sanitization",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Downtown Dubai requiring flawless execution and certified non-toxic standards.",
    "priceAED": 4200,
    "durationHours": 8,
    "crewSize": 3,
    "sqftCoverage": 8100,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 194,
    "heroImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Downtown Dubai. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-053",
    "title": "The Fine Leather Furniture Nourishment & Anti-Microbial Treatment — Post-Construction Edition",
    "slug": "post-construction-pr-053",
    "categoryId": "post-construction",
    "categoryName": "Post-Construction Bio-Sanitization",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in Dubai Hills Estate requiring flawless execution and certified non-toxic standards.",
    "priceAED": 4350,
    "originalPriceAED": 5200,
    "durationHours": 3,
    "crewSize": 4,
    "sqftCoverage": 8700,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 197,
    "heroImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Hills Estate. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-054",
    "title": "The Rooftop Solarium & Solar Panel Robotic Dry Cleaning — Post-Construction Edition",
    "slug": "post-construction-pr-054",
    "categoryId": "post-construction",
    "categoryName": "Post-Construction Bio-Sanitization",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Saadiyat Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 4550,
    "durationHours": 4,
    "crewSize": 5,
    "sqftCoverage": 9300,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 200,
    "heroImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Saadiyat Island. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-055",
    "title": "The Wine Cellar Climate-Controlled Dust & Mold Sanitization — Post-Construction Edition",
    "slug": "post-construction-pr-055",
    "categoryId": "post-construction",
    "categoryName": "Post-Construction Bio-Sanitization",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Al Barari requiring flawless execution and certified non-toxic standards.",
    "priceAED": 4700,
    "durationHours": 5,
    "crewSize": 6,
    "sqftCoverage": 9900,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 203,
    "heroImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Al Barari. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-056",
    "title": "The Luxury Wardrobe & Walk-in Dressing Salon Sanitization — Post-Construction Edition",
    "slug": "post-construction-pr-056",
    "categoryId": "post-construction",
    "categoryName": "Post-Construction Bio-Sanitization",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in DIFC requiring flawless execution and certified non-toxic standards.",
    "priceAED": 4900,
    "durationHours": 6,
    "crewSize": 2,
    "sqftCoverage": 10500,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 206,
    "heroImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in DIFC. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-057",
    "title": "The Spa & Private Hammam Descaling & Anti-Fungal Treatment — Post-Construction Edition",
    "slug": "post-construction-pr-057",
    "categoryId": "post-construction",
    "categoryName": "Post-Construction Bio-Sanitization",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Bluewaters Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 5100,
    "originalPriceAED": 6100,
    "durationHours": 7,
    "crewSize": 3,
    "sqftCoverage": 11100,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 209,
    "heroImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Bluewaters Island. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-058",
    "title": "The Move-Out Deposit Return Guaranteed Complete Deep Clean — Post-Construction Edition",
    "slug": "post-construction-pr-058",
    "categoryId": "post-construction",
    "categoryName": "Post-Construction Bio-Sanitization",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Dubai Marina requiring flawless execution and certified non-toxic standards.",
    "priceAED": 5250,
    "durationHours": 8,
    "crewSize": 4,
    "sqftCoverage": 11700,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 212,
    "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Marina. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-059",
    "title": "The High-Rise Penthouse 360° Curtain Wall Glass Wash — Post-Construction Edition",
    "slug": "post-construction-pr-059",
    "categoryId": "post-construction",
    "categoryName": "Post-Construction Bio-Sanitization",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Palm Jumeirah requiring flawless execution and certified non-toxic standards.",
    "priceAED": 5450,
    "durationHours": 3,
    "crewSize": 5,
    "sqftCoverage": 12300,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 215,
    "heroImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Palm Jumeirah. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-060",
    "title": "The Green-Certified Eco-Botanical Allergy Relief Sanitization — Post-Construction Edition",
    "slug": "post-construction-pr-060",
    "categoryId": "post-construction",
    "categoryName": "Post-Construction Bio-Sanitization",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in Emirates Hills requiring flawless execution and certified non-toxic standards.",
    "priceAED": 5600,
    "durationHours": 4,
    "crewSize": 6,
    "sqftCoverage": 12900,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 218,
    "heroImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Emirates Hills. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-061",
    "title": "The Sovereign Royal Villa Deep Clean & UV Decontamination — Marble Edition",
    "slug": "marble-crystallization-pr-061",
    "categoryId": "marble-crystallization",
    "categoryName": "Marble Honing & Italian Diamond Polishing",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in Downtown Dubai requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2400,
    "durationHours": 3,
    "crewSize": 2,
    "sqftCoverage": 1500,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 221,
    "heroImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Downtown Dubai. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-062",
    "title": "The Elysian Move-In Handover & Bio-Seal Detailing — Marble Edition",
    "slug": "marble-crystallization-pr-062",
    "categoryId": "marble-crystallization",
    "categoryName": "Marble Honing & Italian Diamond Polishing",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Dubai Hills Estate requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2600,
    "originalPriceAED": 3100,
    "durationHours": 4,
    "crewSize": 3,
    "sqftCoverage": 2100,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 224,
    "heroImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Hills Estate. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-063",
    "title": "The Master Diamond Marble Honing & Crystallization Program — Marble Edition",
    "slug": "marble-crystallization-pr-063",
    "categoryId": "marble-crystallization",
    "categoryName": "Marble Honing & Italian Diamond Polishing",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Saadiyat Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2850,
    "durationHours": 5,
    "crewSize": 4,
    "sqftCoverage": 2700,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 227,
    "heroImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Saadiyat Island. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-064",
    "title": "The Murano & Swarovski Crystal Chandelier Ultrasonic Restoration — Marble Edition",
    "slug": "marble-crystallization-pr-064",
    "categoryId": "marble-crystallization",
    "categoryName": "Marble Honing & Italian Diamond Polishing",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Al Barari requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3050,
    "durationHours": 6,
    "crewSize": 5,
    "sqftCoverage": 3300,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 230,
    "heroImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Al Barari. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-065",
    "title": "The Medical-Grade HVAC Air Duct & Coil Disinfection Protocol — Marble Edition",
    "slug": "marble-crystallization-pr-065",
    "categoryId": "marble-crystallization",
    "categoryName": "Marble Honing & Italian Diamond Polishing",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in DIFC requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3300,
    "originalPriceAED": 3950,
    "durationHours": 7,
    "crewSize": 6,
    "sqftCoverage": 3900,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 233,
    "heroImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in DIFC. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-066",
    "title": "The Persian Silk & Hand-Knotted Wool Carpet Extraction Service — Marble Edition",
    "slug": "marble-crystallization-pr-066",
    "categoryId": "marble-crystallization",
    "categoryName": "Marble Honing & Italian Diamond Polishing",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Bluewaters Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3500,
    "durationHours": 8,
    "crewSize": 2,
    "sqftCoverage": 4500,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 236,
    "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Bluewaters Island. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-067",
    "title": "The Full Architectural Glass & High-Rise Abseiling Detailing — Marble Edition",
    "slug": "marble-crystallization-pr-067",
    "categoryId": "marble-crystallization",
    "categoryName": "Marble Honing & Italian Diamond Polishing",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Dubai Marina requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3700,
    "durationHours": 3,
    "crewSize": 3,
    "sqftCoverage": 5100,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 239,
    "heroImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Marina. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-068",
    "title": "The Subterranean Garage & Epoxy Floor Hydro-Scrub Program — Marble Edition",
    "slug": "marble-crystallization-pr-068",
    "categoryId": "marble-crystallization",
    "categoryName": "Marble Honing & Italian Diamond Polishing",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in Palm Jumeirah requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3950,
    "originalPriceAED": 4750,
    "durationHours": 4,
    "crewSize": 4,
    "sqftCoverage": 5700,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 242,
    "heroImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Palm Jumeirah. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-069",
    "title": "The Private Superyacht Interior Detailing & Teak Restoration — Marble Edition",
    "slug": "marble-crystallization-pr-069",
    "categoryId": "marble-crystallization",
    "categoryName": "Marble Honing & Italian Diamond Polishing",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Emirates Hills requiring flawless execution and certified non-toxic standards.",
    "priceAED": 4150,
    "originalPriceAED": 5000,
    "durationHours": 5,
    "crewSize": 5,
    "sqftCoverage": 6300,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 245,
    "heroImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Emirates Hills. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-070",
    "title": "The Commercial Clinic DHA-Certified Bio-Decontamination Service — Marble Edition",
    "slug": "marble-crystallization-pr-070",
    "categoryId": "marble-crystallization",
    "categoryName": "Marble Honing & Italian Diamond Polishing",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Jumeirah Bay Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 4400,
    "originalPriceAED": 5300,
    "durationHours": 6,
    "crewSize": 6,
    "sqftCoverage": 6900,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 248,
    "heroImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Jumeirah Bay Island. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-071",
    "title": "The Luxury Infinity Pool & Outdoor Patio Hydro-Jet Detailing — Marble Edition",
    "slug": "marble-crystallization-pr-071",
    "categoryId": "marble-crystallization",
    "categoryName": "Marble Honing & Italian Diamond Polishing",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Downtown Dubai requiring flawless execution and certified non-toxic standards.",
    "priceAED": 4600,
    "durationHours": 7,
    "crewSize": 2,
    "sqftCoverage": 7500,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 251,
    "heroImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Downtown Dubai. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-072",
    "title": "The Bespoke Italian Kitchen Degreasing & Appliance Steam Restoration — Marble Edition",
    "slug": "marble-crystallization-pr-072",
    "categoryId": "marble-crystallization",
    "categoryName": "Marble Honing & Italian Diamond Polishing",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in Dubai Hills Estate requiring flawless execution and certified non-toxic standards.",
    "priceAED": 4800,
    "durationHours": 8,
    "crewSize": 3,
    "sqftCoverage": 8100,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 254,
    "heroImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Hills Estate. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-073",
    "title": "The Fine Leather Furniture Nourishment & Anti-Microbial Treatment — Marble Edition",
    "slug": "marble-crystallization-pr-073",
    "categoryId": "marble-crystallization",
    "categoryName": "Marble Honing & Italian Diamond Polishing",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Saadiyat Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 5050,
    "durationHours": 3,
    "crewSize": 4,
    "sqftCoverage": 8700,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 257,
    "heroImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Saadiyat Island. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-074",
    "title": "The Rooftop Solarium & Solar Panel Robotic Dry Cleaning — Marble Edition",
    "slug": "marble-crystallization-pr-074",
    "categoryId": "marble-crystallization",
    "categoryName": "Marble Honing & Italian Diamond Polishing",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Al Barari requiring flawless execution and certified non-toxic standards.",
    "priceAED": 5250,
    "durationHours": 4,
    "crewSize": 5,
    "sqftCoverage": 9300,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 260,
    "heroImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Al Barari. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-075",
    "title": "The Wine Cellar Climate-Controlled Dust & Mold Sanitization — Marble Edition",
    "slug": "marble-crystallization-pr-075",
    "categoryId": "marble-crystallization",
    "categoryName": "Marble Honing & Italian Diamond Polishing",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in DIFC requiring flawless execution and certified non-toxic standards.",
    "priceAED": 5500,
    "durationHours": 5,
    "crewSize": 6,
    "sqftCoverage": 9900,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 263,
    "heroImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in DIFC. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-076",
    "title": "The Luxury Wardrobe & Walk-in Dressing Salon Sanitization — Marble Edition",
    "slug": "marble-crystallization-pr-076",
    "categoryId": "marble-crystallization",
    "categoryName": "Marble Honing & Italian Diamond Polishing",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Bluewaters Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 5700,
    "durationHours": 6,
    "crewSize": 2,
    "sqftCoverage": 10500,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 266,
    "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Bluewaters Island. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-077",
    "title": "The Spa & Private Hammam Descaling & Anti-Fungal Treatment — Marble Edition",
    "slug": "marble-crystallization-pr-077",
    "categoryId": "marble-crystallization",
    "categoryName": "Marble Honing & Italian Diamond Polishing",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Dubai Marina requiring flawless execution and certified non-toxic standards.",
    "priceAED": 5900,
    "originalPriceAED": 7100,
    "durationHours": 7,
    "crewSize": 3,
    "sqftCoverage": 11100,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 269,
    "heroImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Marina. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-078",
    "title": "The Move-Out Deposit Return Guaranteed Complete Deep Clean — Marble Edition",
    "slug": "marble-crystallization-pr-078",
    "categoryId": "marble-crystallization",
    "categoryName": "Marble Honing & Italian Diamond Polishing",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Palm Jumeirah requiring flawless execution and certified non-toxic standards.",
    "priceAED": 6150,
    "durationHours": 8,
    "crewSize": 4,
    "sqftCoverage": 11700,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 272,
    "heroImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Palm Jumeirah. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-079",
    "title": "The High-Rise Penthouse 360° Curtain Wall Glass Wash — Marble Edition",
    "slug": "marble-crystallization-pr-079",
    "categoryId": "marble-crystallization",
    "categoryName": "Marble Honing & Italian Diamond Polishing",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in Emirates Hills requiring flawless execution and certified non-toxic standards.",
    "priceAED": 6350,
    "originalPriceAED": 7600,
    "durationHours": 3,
    "crewSize": 5,
    "sqftCoverage": 12300,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 275,
    "heroImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Emirates Hills. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-080",
    "title": "The Green-Certified Eco-Botanical Allergy Relief Sanitization — Marble Edition",
    "slug": "marble-crystallization-pr-080",
    "categoryId": "marble-crystallization",
    "categoryName": "Marble Honing & Italian Diamond Polishing",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Jumeirah Bay Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 6600,
    "durationHours": 4,
    "crewSize": 6,
    "sqftCoverage": 12900,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 278,
    "heroImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Jumeirah Bay Island. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-081",
    "title": "The Sovereign Royal Villa Deep Clean & UV Decontamination — Chandelier Edition",
    "slug": "chandelier-crystal-pr-081",
    "categoryId": "chandelier-crystal",
    "categoryName": "Chandelier & Crystal Restoration",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Dubai Hills Estate requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1200,
    "originalPriceAED": 1450,
    "durationHours": 3,
    "crewSize": 2,
    "sqftCoverage": 1500,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 281,
    "heroImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Hills Estate. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-082",
    "title": "The Elysian Move-In Handover & Bio-Seal Detailing — Chandelier Edition",
    "slug": "chandelier-crystal-pr-082",
    "categoryId": "chandelier-crystal",
    "categoryName": "Chandelier & Crystal Restoration",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Saadiyat Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1300,
    "durationHours": 4,
    "crewSize": 3,
    "sqftCoverage": 2100,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 284,
    "heroImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Saadiyat Island. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-083",
    "title": "The Master Diamond Marble Honing & Crystallization Program — Chandelier Edition",
    "slug": "chandelier-crystal-pr-083",
    "categoryId": "chandelier-crystal",
    "categoryName": "Chandelier & Crystal Restoration",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Al Barari requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1400,
    "originalPriceAED": 1700,
    "durationHours": 5,
    "crewSize": 4,
    "sqftCoverage": 2700,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 287,
    "heroImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Al Barari. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-084",
    "title": "The Murano & Swarovski Crystal Chandelier Ultrasonic Restoration — Chandelier Edition",
    "slug": "chandelier-crystal-pr-084",
    "categoryId": "chandelier-crystal",
    "categoryName": "Chandelier & Crystal Restoration",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in DIFC requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1550,
    "durationHours": 6,
    "crewSize": 5,
    "sqftCoverage": 3300,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 290,
    "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in DIFC. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-085",
    "title": "The Medical-Grade HVAC Air Duct & Coil Disinfection Protocol — Chandelier Edition",
    "slug": "chandelier-crystal-pr-085",
    "categoryId": "chandelier-crystal",
    "categoryName": "Chandelier & Crystal Restoration",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Bluewaters Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1650,
    "durationHours": 7,
    "crewSize": 6,
    "sqftCoverage": 3900,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 293,
    "heroImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Bluewaters Island. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-086",
    "title": "The Persian Silk & Hand-Knotted Wool Carpet Extraction Service — Chandelier Edition",
    "slug": "chandelier-crystal-pr-086",
    "categoryId": "chandelier-crystal",
    "categoryName": "Chandelier & Crystal Restoration",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Dubai Marina requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1750,
    "durationHours": 8,
    "crewSize": 2,
    "sqftCoverage": 4500,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 296,
    "heroImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Marina. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-087",
    "title": "The Full Architectural Glass & High-Rise Abseiling Detailing — Chandelier Edition",
    "slug": "chandelier-crystal-pr-087",
    "categoryId": "chandelier-crystal",
    "categoryName": "Chandelier & Crystal Restoration",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in Palm Jumeirah requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1850,
    "originalPriceAED": 2200,
    "durationHours": 3,
    "crewSize": 3,
    "sqftCoverage": 5100,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 299,
    "heroImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Palm Jumeirah. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-088",
    "title": "The Subterranean Garage & Epoxy Floor Hydro-Scrub Program — Chandelier Edition",
    "slug": "chandelier-crystal-pr-088",
    "categoryId": "chandelier-crystal",
    "categoryName": "Chandelier & Crystal Restoration",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Emirates Hills requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1950,
    "durationHours": 4,
    "crewSize": 4,
    "sqftCoverage": 5700,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 302,
    "heroImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Emirates Hills. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-089",
    "title": "The Private Superyacht Interior Detailing & Teak Restoration — Chandelier Edition",
    "slug": "chandelier-crystal-pr-089",
    "categoryId": "chandelier-crystal",
    "categoryName": "Chandelier & Crystal Restoration",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Jumeirah Bay Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2100,
    "originalPriceAED": 2500,
    "durationHours": 5,
    "crewSize": 5,
    "sqftCoverage": 6300,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 305,
    "heroImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Jumeirah Bay Island. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-090",
    "title": "The Commercial Clinic DHA-Certified Bio-Decontamination Service — Chandelier Edition",
    "slug": "chandelier-crystal-pr-090",
    "categoryId": "chandelier-crystal",
    "categoryName": "Chandelier & Crystal Restoration",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Downtown Dubai requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2200,
    "originalPriceAED": 2650,
    "durationHours": 6,
    "crewSize": 6,
    "sqftCoverage": 6900,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 308,
    "heroImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Downtown Dubai. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-091",
    "title": "The Luxury Infinity Pool & Outdoor Patio Hydro-Jet Detailing — Chandelier Edition",
    "slug": "chandelier-crystal-pr-091",
    "categoryId": "chandelier-crystal",
    "categoryName": "Chandelier & Crystal Restoration",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in Dubai Hills Estate requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2300,
    "originalPriceAED": 2750,
    "durationHours": 7,
    "crewSize": 2,
    "sqftCoverage": 7500,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 311,
    "heroImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Hills Estate. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-092",
    "title": "The Bespoke Italian Kitchen Degreasing & Appliance Steam Restoration — Chandelier Edition",
    "slug": "chandelier-crystal-pr-092",
    "categoryId": "chandelier-crystal",
    "categoryName": "Chandelier & Crystal Restoration",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Saadiyat Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2400,
    "durationHours": 8,
    "crewSize": 3,
    "sqftCoverage": 8100,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 314,
    "heroImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Saadiyat Island. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-093",
    "title": "The Fine Leather Furniture Nourishment & Anti-Microbial Treatment — Chandelier Edition",
    "slug": "chandelier-crystal-pr-093",
    "categoryId": "chandelier-crystal",
    "categoryName": "Chandelier & Crystal Restoration",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Al Barari requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2500,
    "durationHours": 3,
    "crewSize": 4,
    "sqftCoverage": 8700,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 317,
    "heroImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Al Barari. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-094",
    "title": "The Rooftop Solarium & Solar Panel Robotic Dry Cleaning — Chandelier Edition",
    "slug": "chandelier-crystal-pr-094",
    "categoryId": "chandelier-crystal",
    "categoryName": "Chandelier & Crystal Restoration",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in DIFC requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2650,
    "originalPriceAED": 3200,
    "durationHours": 4,
    "crewSize": 5,
    "sqftCoverage": 9300,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 320,
    "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in DIFC. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-095",
    "title": "The Wine Cellar Climate-Controlled Dust & Mold Sanitization — Chandelier Edition",
    "slug": "chandelier-crystal-pr-095",
    "categoryId": "chandelier-crystal",
    "categoryName": "Chandelier & Crystal Restoration",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Bluewaters Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2750,
    "durationHours": 5,
    "crewSize": 6,
    "sqftCoverage": 9900,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 323,
    "heroImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Bluewaters Island. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-096",
    "title": "The Luxury Wardrobe & Walk-in Dressing Salon Sanitization — Chandelier Edition",
    "slug": "chandelier-crystal-pr-096",
    "categoryId": "chandelier-crystal",
    "categoryName": "Chandelier & Crystal Restoration",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Dubai Marina requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2850,
    "originalPriceAED": 3400,
    "durationHours": 6,
    "crewSize": 2,
    "sqftCoverage": 10500,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 326,
    "heroImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Marina. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-097",
    "title": "The Spa & Private Hammam Descaling & Anti-Fungal Treatment — Chandelier Edition",
    "slug": "chandelier-crystal-pr-097",
    "categoryId": "chandelier-crystal",
    "categoryName": "Chandelier & Crystal Restoration",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Palm Jumeirah requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2950,
    "originalPriceAED": 3550,
    "durationHours": 7,
    "crewSize": 3,
    "sqftCoverage": 11100,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 329,
    "heroImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Palm Jumeirah. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-098",
    "title": "The Move-Out Deposit Return Guaranteed Complete Deep Clean — Chandelier Edition",
    "slug": "chandelier-crystal-pr-098",
    "categoryId": "chandelier-crystal",
    "categoryName": "Chandelier & Crystal Restoration",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in Emirates Hills requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3050,
    "durationHours": 8,
    "crewSize": 4,
    "sqftCoverage": 11700,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 332,
    "heroImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Emirates Hills. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-099",
    "title": "The High-Rise Penthouse 360° Curtain Wall Glass Wash — Chandelier Edition",
    "slug": "chandelier-crystal-pr-099",
    "categoryId": "chandelier-crystal",
    "categoryName": "Chandelier & Crystal Restoration",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Jumeirah Bay Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3200,
    "durationHours": 3,
    "crewSize": 5,
    "sqftCoverage": 12300,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 335,
    "heroImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Jumeirah Bay Island. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-100",
    "title": "The Green-Certified Eco-Botanical Allergy Relief Sanitization — Chandelier Edition",
    "slug": "chandelier-crystal-pr-100",
    "categoryId": "chandelier-crystal",
    "categoryName": "Chandelier & Crystal Restoration",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Downtown Dubai requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3300,
    "originalPriceAED": 3950,
    "durationHours": 4,
    "crewSize": 6,
    "sqftCoverage": 12900,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 338,
    "heroImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Downtown Dubai. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-101",
    "title": "The Sovereign Royal Villa Deep Clean & UV Decontamination — Luxury Edition",
    "slug": "upholstery-silk-carpet-pr-101",
    "categoryId": "upholstery-silk-carpet",
    "categoryName": "Luxury Upholstery, Silk & Persian Rug Care",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Saadiyat Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 850,
    "durationHours": 3,
    "crewSize": 2,
    "sqftCoverage": 1500,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 341,
    "heroImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Saadiyat Island. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-102",
    "title": "The Elysian Move-In Handover & Bio-Seal Detailing — Luxury Edition",
    "slug": "upholstery-silk-carpet-pr-102",
    "categoryId": "upholstery-silk-carpet",
    "categoryName": "Luxury Upholstery, Silk & Persian Rug Care",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Al Barari requiring flawless execution and certified non-toxic standards.",
    "priceAED": 950,
    "durationHours": 4,
    "crewSize": 3,
    "sqftCoverage": 2100,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 344,
    "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Al Barari. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-103",
    "title": "The Master Diamond Marble Honing & Crystallization Program — Luxury Edition",
    "slug": "upholstery-silk-carpet-pr-103",
    "categoryId": "upholstery-silk-carpet",
    "categoryName": "Luxury Upholstery, Silk & Persian Rug Care",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in DIFC requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1000,
    "originalPriceAED": 1200,
    "durationHours": 5,
    "crewSize": 4,
    "sqftCoverage": 2700,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 347,
    "heroImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in DIFC. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-104",
    "title": "The Murano & Swarovski Crystal Chandelier Ultrasonic Restoration — Luxury Edition",
    "slug": "upholstery-silk-carpet-pr-104",
    "categoryId": "upholstery-silk-carpet",
    "categoryName": "Luxury Upholstery, Silk & Persian Rug Care",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Bluewaters Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1100,
    "durationHours": 6,
    "crewSize": 5,
    "sqftCoverage": 3300,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 350,
    "heroImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Bluewaters Island. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-105",
    "title": "The Medical-Grade HVAC Air Duct & Coil Disinfection Protocol — Luxury Edition",
    "slug": "upholstery-silk-carpet-pr-105",
    "categoryId": "upholstery-silk-carpet",
    "categoryName": "Luxury Upholstery, Silk & Persian Rug Care",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Dubai Marina requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1150,
    "originalPriceAED": 1400,
    "durationHours": 7,
    "crewSize": 6,
    "sqftCoverage": 3900,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 353,
    "heroImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Marina. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-106",
    "title": "The Persian Silk & Hand-Knotted Wool Carpet Extraction Service — Luxury Edition",
    "slug": "upholstery-silk-carpet-pr-106",
    "categoryId": "upholstery-silk-carpet",
    "categoryName": "Luxury Upholstery, Silk & Persian Rug Care",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in Palm Jumeirah requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1250,
    "originalPriceAED": 1500,
    "durationHours": 8,
    "crewSize": 2,
    "sqftCoverage": 4500,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 356,
    "heroImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Palm Jumeirah. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-107",
    "title": "The Full Architectural Glass & High-Rise Abseiling Detailing — Luxury Edition",
    "slug": "upholstery-silk-carpet-pr-107",
    "categoryId": "upholstery-silk-carpet",
    "categoryName": "Luxury Upholstery, Silk & Persian Rug Care",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Emirates Hills requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1350,
    "durationHours": 3,
    "crewSize": 3,
    "sqftCoverage": 5100,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 359,
    "heroImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Emirates Hills. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-108",
    "title": "The Subterranean Garage & Epoxy Floor Hydro-Scrub Program — Luxury Edition",
    "slug": "upholstery-silk-carpet-pr-108",
    "categoryId": "upholstery-silk-carpet",
    "categoryName": "Luxury Upholstery, Silk & Persian Rug Care",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Jumeirah Bay Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1400,
    "durationHours": 4,
    "crewSize": 4,
    "sqftCoverage": 5700,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 362,
    "heroImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Jumeirah Bay Island. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-109",
    "title": "The Private Superyacht Interior Detailing & Teak Restoration — Luxury Edition",
    "slug": "upholstery-silk-carpet-pr-109",
    "categoryId": "upholstery-silk-carpet",
    "categoryName": "Luxury Upholstery, Silk & Persian Rug Care",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Downtown Dubai requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1500,
    "originalPriceAED": 1800,
    "durationHours": 5,
    "crewSize": 5,
    "sqftCoverage": 6300,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 365,
    "heroImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Downtown Dubai. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-110",
    "title": "The Commercial Clinic DHA-Certified Bio-Decontamination Service — Luxury Edition",
    "slug": "upholstery-silk-carpet-pr-110",
    "categoryId": "upholstery-silk-carpet",
    "categoryName": "Luxury Upholstery, Silk & Persian Rug Care",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in Dubai Hills Estate requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1550,
    "durationHours": 6,
    "crewSize": 6,
    "sqftCoverage": 6900,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 368,
    "heroImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Hills Estate. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-111",
    "title": "The Luxury Infinity Pool & Outdoor Patio Hydro-Jet Detailing — Luxury Edition",
    "slug": "upholstery-silk-carpet-pr-111",
    "categoryId": "upholstery-silk-carpet",
    "categoryName": "Luxury Upholstery, Silk & Persian Rug Care",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Saadiyat Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1650,
    "originalPriceAED": 2000,
    "durationHours": 7,
    "crewSize": 2,
    "sqftCoverage": 7500,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 371,
    "heroImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Saadiyat Island. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-112",
    "title": "The Bespoke Italian Kitchen Degreasing & Appliance Steam Restoration — Luxury Edition",
    "slug": "upholstery-silk-carpet-pr-112",
    "categoryId": "upholstery-silk-carpet",
    "categoryName": "Luxury Upholstery, Silk & Persian Rug Care",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Al Barari requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1750,
    "originalPriceAED": 2100,
    "durationHours": 8,
    "crewSize": 3,
    "sqftCoverage": 8100,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 374,
    "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Al Barari. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-113",
    "title": "The Fine Leather Furniture Nourishment & Anti-Microbial Treatment — Luxury Edition",
    "slug": "upholstery-silk-carpet-pr-113",
    "categoryId": "upholstery-silk-carpet",
    "categoryName": "Luxury Upholstery, Silk & Persian Rug Care",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in DIFC requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1800,
    "durationHours": 3,
    "crewSize": 4,
    "sqftCoverage": 8700,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 377,
    "heroImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in DIFC. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-114",
    "title": "The Rooftop Solarium & Solar Panel Robotic Dry Cleaning — Luxury Edition",
    "slug": "upholstery-silk-carpet-pr-114",
    "categoryId": "upholstery-silk-carpet",
    "categoryName": "Luxury Upholstery, Silk & Persian Rug Care",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Bluewaters Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1900,
    "durationHours": 4,
    "crewSize": 5,
    "sqftCoverage": 9300,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 380,
    "heroImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Bluewaters Island. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-115",
    "title": "The Wine Cellar Climate-Controlled Dust & Mold Sanitization — Luxury Edition",
    "slug": "upholstery-silk-carpet-pr-115",
    "categoryId": "upholstery-silk-carpet",
    "categoryName": "Luxury Upholstery, Silk & Persian Rug Care",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Dubai Marina requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1950,
    "originalPriceAED": 2350,
    "durationHours": 5,
    "crewSize": 6,
    "sqftCoverage": 9900,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 383,
    "heroImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Marina. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-116",
    "title": "The Luxury Wardrobe & Walk-in Dressing Salon Sanitization — Luxury Edition",
    "slug": "upholstery-silk-carpet-pr-116",
    "categoryId": "upholstery-silk-carpet",
    "categoryName": "Luxury Upholstery, Silk & Persian Rug Care",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Palm Jumeirah requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2050,
    "durationHours": 6,
    "crewSize": 2,
    "sqftCoverage": 10500,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 386,
    "heroImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Palm Jumeirah. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-117",
    "title": "The Spa & Private Hammam Descaling & Anti-Fungal Treatment — Luxury Edition",
    "slug": "upholstery-silk-carpet-pr-117",
    "categoryId": "upholstery-silk-carpet",
    "categoryName": "Luxury Upholstery, Silk & Persian Rug Care",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in Emirates Hills requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2150,
    "originalPriceAED": 2600,
    "durationHours": 7,
    "crewSize": 3,
    "sqftCoverage": 11100,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 389,
    "heroImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Emirates Hills. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-118",
    "title": "The Move-Out Deposit Return Guaranteed Complete Deep Clean — Luxury Edition",
    "slug": "upholstery-silk-carpet-pr-118",
    "categoryId": "upholstery-silk-carpet",
    "categoryName": "Luxury Upholstery, Silk & Persian Rug Care",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Jumeirah Bay Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2200,
    "originalPriceAED": 2650,
    "durationHours": 8,
    "crewSize": 4,
    "sqftCoverage": 11700,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 392,
    "heroImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Jumeirah Bay Island. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-119",
    "title": "The High-Rise Penthouse 360° Curtain Wall Glass Wash — Luxury Edition",
    "slug": "upholstery-silk-carpet-pr-119",
    "categoryId": "upholstery-silk-carpet",
    "categoryName": "Luxury Upholstery, Silk & Persian Rug Care",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Downtown Dubai requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2300,
    "durationHours": 3,
    "crewSize": 5,
    "sqftCoverage": 12300,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 395,
    "heroImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Downtown Dubai. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-120",
    "title": "The Green-Certified Eco-Botanical Allergy Relief Sanitization — Luxury Edition",
    "slug": "upholstery-silk-carpet-pr-120",
    "categoryId": "upholstery-silk-carpet",
    "categoryName": "Luxury Upholstery, Silk & Persian Rug Care",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in Dubai Hills Estate requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2350,
    "originalPriceAED": 2800,
    "durationHours": 4,
    "crewSize": 6,
    "sqftCoverage": 12900,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 398,
    "heroImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Hills Estate. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-121",
    "title": "The Sovereign Royal Villa Deep Clean & UV Decontamination — HVAC Edition",
    "slug": "hvac-air-duct-pr-121",
    "categoryId": "hvac-air-duct",
    "categoryName": "HVAC Air Duct & Indoor Air Quality Sanitization",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Al Barari requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1450,
    "originalPriceAED": 1750,
    "durationHours": 3,
    "crewSize": 2,
    "sqftCoverage": 1500,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 401,
    "heroImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Al Barari. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-122",
    "title": "The Elysian Move-In Handover & Bio-Seal Detailing — HVAC Edition",
    "slug": "hvac-air-duct-pr-122",
    "categoryId": "hvac-air-duct",
    "categoryName": "HVAC Air Duct & Indoor Air Quality Sanitization",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in DIFC requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1600,
    "durationHours": 4,
    "crewSize": 3,
    "sqftCoverage": 2100,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 404,
    "heroImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in DIFC. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-123",
    "title": "The Master Diamond Marble Honing & Crystallization Program — HVAC Edition",
    "slug": "hvac-air-duct-pr-123",
    "categoryId": "hvac-air-duct",
    "categoryName": "HVAC Air Duct & Indoor Air Quality Sanitization",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Bluewaters Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1700,
    "durationHours": 5,
    "crewSize": 4,
    "sqftCoverage": 2700,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 407,
    "heroImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Bluewaters Island. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-124",
    "title": "The Murano & Swarovski Crystal Chandelier Ultrasonic Restoration — HVAC Edition",
    "slug": "hvac-air-duct-pr-124",
    "categoryId": "hvac-air-duct",
    "categoryName": "HVAC Air Duct & Indoor Air Quality Sanitization",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Dubai Marina requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1850,
    "durationHours": 6,
    "crewSize": 5,
    "sqftCoverage": 3300,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 410,
    "heroImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Marina. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-125",
    "title": "The Medical-Grade HVAC Air Duct & Coil Disinfection Protocol — HVAC Edition",
    "slug": "hvac-air-duct-pr-125",
    "categoryId": "hvac-air-duct",
    "categoryName": "HVAC Air Duct & Indoor Air Quality Sanitization",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in Palm Jumeirah requiring flawless execution and certified non-toxic standards.",
    "priceAED": 1950,
    "durationHours": 7,
    "crewSize": 6,
    "sqftCoverage": 3900,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 413,
    "heroImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Palm Jumeirah. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-126",
    "title": "The Persian Silk & Hand-Knotted Wool Carpet Extraction Service — HVAC Edition",
    "slug": "hvac-air-duct-pr-126",
    "categoryId": "hvac-air-duct",
    "categoryName": "HVAC Air Duct & Indoor Air Quality Sanitization",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Emirates Hills requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2100,
    "durationHours": 8,
    "crewSize": 2,
    "sqftCoverage": 4500,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 416,
    "heroImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Emirates Hills. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-127",
    "title": "The Full Architectural Glass & High-Rise Abseiling Detailing — HVAC Edition",
    "slug": "hvac-air-duct-pr-127",
    "categoryId": "hvac-air-duct",
    "categoryName": "HVAC Air Duct & Indoor Air Quality Sanitization",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Jumeirah Bay Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2250,
    "originalPriceAED": 2700,
    "durationHours": 3,
    "crewSize": 3,
    "sqftCoverage": 5100,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 419,
    "heroImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Jumeirah Bay Island. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-128",
    "title": "The Subterranean Garage & Epoxy Floor Hydro-Scrub Program — HVAC Edition",
    "slug": "hvac-air-duct-pr-128",
    "categoryId": "hvac-air-duct",
    "categoryName": "HVAC Air Duct & Indoor Air Quality Sanitization",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Downtown Dubai requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2350,
    "durationHours": 4,
    "crewSize": 4,
    "sqftCoverage": 5700,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 422,
    "heroImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Downtown Dubai. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-129",
    "title": "The Private Superyacht Interior Detailing & Teak Restoration — HVAC Edition",
    "slug": "hvac-air-duct-pr-129",
    "categoryId": "hvac-air-duct",
    "categoryName": "HVAC Air Duct & Indoor Air Quality Sanitization",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in Dubai Hills Estate requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2500,
    "originalPriceAED": 3000,
    "durationHours": 5,
    "crewSize": 5,
    "sqftCoverage": 6300,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 425,
    "heroImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Hills Estate. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-130",
    "title": "The Commercial Clinic DHA-Certified Bio-Decontamination Service — HVAC Edition",
    "slug": "hvac-air-duct-pr-130",
    "categoryId": "hvac-air-duct",
    "categoryName": "HVAC Air Duct & Indoor Air Quality Sanitization",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Saadiyat Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2600,
    "durationHours": 6,
    "crewSize": 6,
    "sqftCoverage": 6900,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 428,
    "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Saadiyat Island. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-131",
    "title": "The Luxury Infinity Pool & Outdoor Patio Hydro-Jet Detailing — HVAC Edition",
    "slug": "hvac-air-duct-pr-131",
    "categoryId": "hvac-air-duct",
    "categoryName": "HVAC Air Duct & Indoor Air Quality Sanitization",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Al Barari requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2750,
    "durationHours": 7,
    "crewSize": 2,
    "sqftCoverage": 7500,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 431,
    "heroImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Al Barari. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-132",
    "title": "The Bespoke Italian Kitchen Degreasing & Appliance Steam Restoration — HVAC Edition",
    "slug": "hvac-air-duct-pr-132",
    "categoryId": "hvac-air-duct",
    "categoryName": "HVAC Air Duct & Indoor Air Quality Sanitization",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in DIFC requiring flawless execution and certified non-toxic standards.",
    "priceAED": 2900,
    "durationHours": 8,
    "crewSize": 3,
    "sqftCoverage": 8100,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 434,
    "heroImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in DIFC. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-133",
    "title": "The Fine Leather Furniture Nourishment & Anti-Microbial Treatment — HVAC Edition",
    "slug": "hvac-air-duct-pr-133",
    "categoryId": "hvac-air-duct",
    "categoryName": "HVAC Air Duct & Indoor Air Quality Sanitization",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Bluewaters Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3000,
    "durationHours": 3,
    "crewSize": 4,
    "sqftCoverage": 8700,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 437,
    "heroImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Bluewaters Island. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-134",
    "title": "The Rooftop Solarium & Solar Panel Robotic Dry Cleaning — HVAC Edition",
    "slug": "hvac-air-duct-pr-134",
    "categoryId": "hvac-air-duct",
    "categoryName": "HVAC Air Duct & Indoor Air Quality Sanitization",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Dubai Marina requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3150,
    "originalPriceAED": 3800,
    "durationHours": 4,
    "crewSize": 5,
    "sqftCoverage": 9300,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 440,
    "heroImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Marina. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-135",
    "title": "The Wine Cellar Climate-Controlled Dust & Mold Sanitization — HVAC Edition",
    "slug": "hvac-air-duct-pr-135",
    "categoryId": "hvac-air-duct",
    "categoryName": "HVAC Air Duct & Indoor Air Quality Sanitization",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Palm Jumeirah requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3250,
    "originalPriceAED": 3900,
    "durationHours": 5,
    "crewSize": 6,
    "sqftCoverage": 9900,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 443,
    "heroImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Palm Jumeirah. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-136",
    "title": "The Luxury Wardrobe & Walk-in Dressing Salon Sanitization — HVAC Edition",
    "slug": "hvac-air-duct-pr-136",
    "categoryId": "hvac-air-duct",
    "categoryName": "HVAC Air Duct & Indoor Air Quality Sanitization",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in Emirates Hills requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3400,
    "durationHours": 6,
    "crewSize": 2,
    "sqftCoverage": 10500,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 446,
    "heroImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Emirates Hills. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-137",
    "title": "The Spa & Private Hammam Descaling & Anti-Fungal Treatment — HVAC Edition",
    "slug": "hvac-air-duct-pr-137",
    "categoryId": "hvac-air-duct",
    "categoryName": "HVAC Air Duct & Indoor Air Quality Sanitization",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Jumeirah Bay Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3550,
    "originalPriceAED": 4250,
    "durationHours": 7,
    "crewSize": 3,
    "sqftCoverage": 11100,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 449,
    "heroImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Jumeirah Bay Island. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-138",
    "title": "The Move-Out Deposit Return Guaranteed Complete Deep Clean — HVAC Edition",
    "slug": "hvac-air-duct-pr-138",
    "categoryId": "hvac-air-duct",
    "categoryName": "HVAC Air Duct & Indoor Air Quality Sanitization",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Downtown Dubai requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3650,
    "originalPriceAED": 4400,
    "durationHours": 8,
    "crewSize": 4,
    "sqftCoverage": 11700,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 452,
    "heroImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Downtown Dubai. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-139",
    "title": "The High-Rise Penthouse 360° Curtain Wall Glass Wash — HVAC Edition",
    "slug": "hvac-air-duct-pr-139",
    "categoryId": "hvac-air-duct",
    "categoryName": "HVAC Air Duct & Indoor Air Quality Sanitization",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in Dubai Hills Estate requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3800,
    "originalPriceAED": 4550,
    "durationHours": 3,
    "crewSize": 5,
    "sqftCoverage": 12300,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 455,
    "heroImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Hills Estate. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-140",
    "title": "The Green-Certified Eco-Botanical Allergy Relief Sanitization — HVAC Edition",
    "slug": "hvac-air-duct-pr-140",
    "categoryId": "hvac-air-duct",
    "categoryName": "HVAC Air Duct & Indoor Air Quality Sanitization",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Saadiyat Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3900,
    "durationHours": 4,
    "crewSize": 6,
    "sqftCoverage": 12900,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 458,
    "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": false,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Saadiyat Island. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-141",
    "title": "The Sovereign Royal Villa Deep Clean & UV Decontamination — Corporate, Edition",
    "slug": "commercial-clinic-fm-pr-141",
    "categoryId": "commercial-clinic-fm",
    "categoryName": "Corporate, Clinic & Retail Facility Management",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in DIFC requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3200,
    "durationHours": 3,
    "crewSize": 2,
    "sqftCoverage": 1500,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 461,
    "heroImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in DIFC. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-142",
    "title": "The Elysian Move-In Handover & Bio-Seal Detailing — Corporate, Edition",
    "slug": "commercial-clinic-fm-pr-142",
    "categoryId": "commercial-clinic-fm",
    "categoryName": "Corporate, Clinic & Retail Facility Management",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Bluewaters Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3450,
    "originalPriceAED": 4150,
    "durationHours": 4,
    "crewSize": 3,
    "sqftCoverage": 2100,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 464,
    "heroImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Bluewaters Island. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-143",
    "title": "The Master Diamond Marble Honing & Crystallization Program — Corporate, Edition",
    "slug": "commercial-clinic-fm-pr-143",
    "categoryId": "commercial-clinic-fm",
    "categoryName": "Corporate, Clinic & Retail Facility Management",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Dubai Marina requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3700,
    "originalPriceAED": 4450,
    "durationHours": 5,
    "crewSize": 4,
    "sqftCoverage": 2700,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 467,
    "heroImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "isPopular": true,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Marina. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-144",
    "title": "The Murano & Swarovski Crystal Chandelier Ultrasonic Restoration — Corporate, Edition",
    "slug": "commercial-clinic-fm-pr-144",
    "categoryId": "commercial-clinic-fm",
    "categoryName": "Corporate, Clinic & Retail Facility Management",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in Palm Jumeirah requiring flawless execution and certified non-toxic standards.",
    "priceAED": 3950,
    "durationHours": 6,
    "crewSize": 5,
    "sqftCoverage": 3300,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 470,
    "heroImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Palm Jumeirah. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-145",
    "title": "The Medical-Grade HVAC Air Duct & Coil Disinfection Protocol — Corporate, Edition",
    "slug": "commercial-clinic-fm-pr-145",
    "categoryId": "commercial-clinic-fm",
    "categoryName": "Corporate, Clinic & Retail Facility Management",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Emirates Hills requiring flawless execution and certified non-toxic standards.",
    "priceAED": 4200,
    "durationHours": 7,
    "crewSize": 6,
    "sqftCoverage": 3900,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 473,
    "heroImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Emirates Hills. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-146",
    "title": "The Persian Silk & Hand-Knotted Wool Carpet Extraction Service — Corporate, Edition",
    "slug": "commercial-clinic-fm-pr-146",
    "categoryId": "commercial-clinic-fm",
    "categoryName": "Corporate, Clinic & Retail Facility Management",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Jumeirah Bay Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 4450,
    "originalPriceAED": 5350,
    "durationHours": 8,
    "crewSize": 2,
    "sqftCoverage": 4500,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 476,
    "heroImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Jumeirah Bay Island. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-147",
    "title": "The Full Architectural Glass & High-Rise Abseiling Detailing — Corporate, Edition",
    "slug": "commercial-clinic-fm-pr-147",
    "categoryId": "commercial-clinic-fm",
    "categoryName": "Corporate, Clinic & Retail Facility Management",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Downtown Dubai requiring flawless execution and certified non-toxic standards.",
    "priceAED": 4700,
    "originalPriceAED": 5650,
    "durationHours": 3,
    "crewSize": 3,
    "sqftCoverage": 5100,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 479,
    "heroImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Downtown Dubai. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-148",
    "title": "The Subterranean Garage & Epoxy Floor Hydro-Scrub Program — Corporate, Edition",
    "slug": "commercial-clinic-fm-pr-148",
    "categoryId": "commercial-clinic-fm",
    "categoryName": "Corporate, Clinic & Retail Facility Management",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in Dubai Hills Estate requiring flawless execution and certified non-toxic standards.",
    "priceAED": 4950,
    "durationHours": 4,
    "crewSize": 4,
    "sqftCoverage": 5700,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 482,
    "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Hills Estate. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-149",
    "title": "The Private Superyacht Interior Detailing & Teak Restoration — Corporate, Edition",
    "slug": "commercial-clinic-fm-pr-149",
    "categoryId": "commercial-clinic-fm",
    "categoryName": "Corporate, Clinic & Retail Facility Management",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Saadiyat Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 5200,
    "originalPriceAED": 6250,
    "durationHours": 5,
    "crewSize": 5,
    "sqftCoverage": 6300,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 485,
    "heroImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Saadiyat Island. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-150",
    "title": "The Commercial Clinic DHA-Certified Bio-Decontamination Service — Corporate, Edition",
    "slug": "commercial-clinic-fm-pr-150",
    "categoryId": "commercial-clinic-fm",
    "categoryName": "Corporate, Clinic & Retail Facility Management",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Al Barari requiring flawless execution and certified non-toxic standards.",
    "priceAED": 5450,
    "durationHours": 6,
    "crewSize": 6,
    "sqftCoverage": 6900,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 488,
    "heroImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Al Barari. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-151",
    "title": "The Luxury Infinity Pool & Outdoor Patio Hydro-Jet Detailing — Corporate, Edition",
    "slug": "commercial-clinic-fm-pr-151",
    "categoryId": "commercial-clinic-fm",
    "categoryName": "Corporate, Clinic & Retail Facility Management",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in DIFC requiring flawless execution and certified non-toxic standards.",
    "priceAED": 5700,
    "originalPriceAED": 6850,
    "durationHours": 7,
    "crewSize": 2,
    "sqftCoverage": 7500,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 491,
    "heroImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in DIFC. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-152",
    "title": "The Bespoke Italian Kitchen Degreasing & Appliance Steam Restoration — Corporate, Edition",
    "slug": "commercial-clinic-fm-pr-152",
    "categoryId": "commercial-clinic-fm",
    "categoryName": "Corporate, Clinic & Retail Facility Management",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Bluewaters Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 5950,
    "durationHours": 8,
    "crewSize": 3,
    "sqftCoverage": 8100,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 494,
    "heroImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Bluewaters Island. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-153",
    "title": "The Fine Leather Furniture Nourishment & Anti-Microbial Treatment — Corporate, Edition",
    "slug": "commercial-clinic-fm-pr-153",
    "categoryId": "commercial-clinic-fm",
    "categoryName": "Corporate, Clinic & Retail Facility Management",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Dubai Marina requiring flawless execution and certified non-toxic standards.",
    "priceAED": 6200,
    "originalPriceAED": 7450,
    "durationHours": 3,
    "crewSize": 4,
    "sqftCoverage": 8700,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 497,
    "heroImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Marina. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-154",
    "title": "The Rooftop Solarium & Solar Panel Robotic Dry Cleaning — Corporate, Edition",
    "slug": "commercial-clinic-fm-pr-154",
    "categoryId": "commercial-clinic-fm",
    "categoryName": "Corporate, Clinic & Retail Facility Management",
    "propertyType": "Retail Showroom",
    "recommendedFor": "Ideal for Retail Showrooms in Palm Jumeirah requiring flawless execution and certified non-toxic standards.",
    "priceAED": 6450,
    "originalPriceAED": 7750,
    "durationHours": 4,
    "crewSize": 5,
    "sqftCoverage": 9300,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 500,
    "heroImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Palm Jumeirah. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-155",
    "title": "The Wine Cellar Climate-Controlled Dust & Mold Sanitization — Corporate, Edition",
    "slug": "commercial-clinic-fm-pr-155",
    "categoryId": "commercial-clinic-fm",
    "categoryName": "Corporate, Clinic & Retail Facility Management",
    "propertyType": "Signature Villa / Mansion",
    "recommendedFor": "Ideal for Signature Villa / Mansions in Emirates Hills requiring flawless execution and certified non-toxic standards.",
    "priceAED": 6700,
    "durationHours": 5,
    "crewSize": 6,
    "sqftCoverage": 9900,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 503,
    "heroImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Emirates Hills. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-156",
    "title": "The Luxury Wardrobe & Walk-in Dressing Salon Sanitization — Corporate, Edition",
    "slug": "commercial-clinic-fm-pr-156",
    "categoryId": "commercial-clinic-fm",
    "categoryName": "Corporate, Clinic & Retail Facility Management",
    "propertyType": "Sky Penthouse",
    "recommendedFor": "Ideal for Sky Penthouses in Jumeirah Bay Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 6950,
    "originalPriceAED": 8350,
    "durationHours": 6,
    "crewSize": 2,
    "sqftCoverage": 10500,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 506,
    "heroImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Jumeirah Bay Island. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-157",
    "title": "The Spa & Private Hammam Descaling & Anti-Fungal Treatment — Corporate, Edition",
    "slug": "commercial-clinic-fm-pr-157",
    "categoryId": "commercial-clinic-fm",
    "categoryName": "Corporate, Clinic & Retail Facility Management",
    "propertyType": "Luxury Apartment",
    "recommendedFor": "Ideal for Luxury Apartments in Downtown Dubai requiring flawless execution and certified non-toxic standards.",
    "priceAED": 7200,
    "durationHours": 7,
    "crewSize": 3,
    "sqftCoverage": 11100,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Klindex Marble Crystallizer KP85 (Acid-Free Italian Formula)",
    "equipment": [
      "SkyWash Water-Fed Carbon Fiber Poles",
      "Electrostatic EPA-Registered Sprayer",
      "Ultrasonic Micro-Component Bath",
      "Diversey Taski Nano Micro-Scrubber"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 509,
    "heroImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Downtown Dubai. Delivered by background-checked British-trained supervisors utilizing industrial SkyWash Water-Fed Carbon Fiber Poles and klindex marble crystallizer kp85 (acid-free italian formula). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-158",
    "title": "The Move-Out Deposit Return Guaranteed Complete Deep Clean — Corporate, Edition",
    "slug": "commercial-clinic-fm-pr-158",
    "categoryId": "commercial-clinic-fm",
    "categoryName": "Corporate, Clinic & Retail Facility Management",
    "propertyType": "Commercial Office",
    "recommendedFor": "Ideal for Commercial Offices in Dubai Hills Estate requiring flawless execution and certified non-toxic standards.",
    "priceAED": 7450,
    "durationHours": 8,
    "crewSize": 4,
    "sqftCoverage": 11700,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "Dubai Municipality Approved Eco-Biocide (100% Non-Toxic & Pet Safe)",
    "equipment": [
      "Kärcher Professional Puzzi 30/4",
      "Klindex Levighetor Diamond Grinder",
      "HEPA Class H14 Air Scrubbers",
      "Thermoclean 180°C Dry Steam Jet"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 512,
    "heroImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Dubai Hills Estate. Delivered by background-checked British-trained supervisors utilizing industrial Kärcher Professional Puzzi 30/4 and dubai municipality approved eco-biocide (100% non-toxic & pet safe). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-159",
    "title": "The High-Rise Penthouse 360° Curtain Wall Glass Wash — Corporate, Edition",
    "slug": "commercial-clinic-fm-pr-159",
    "categoryId": "commercial-clinic-fm",
    "categoryName": "Corporate, Clinic & Retail Facility Management",
    "propertyType": "Medical Clinic",
    "recommendedFor": "Ideal for Medical Clinics in Saadiyat Island requiring flawless execution and certified non-toxic standards.",
    "priceAED": 7700,
    "originalPriceAED": 9250,
    "durationHours": 3,
    "crewSize": 5,
    "sqftCoverage": 12300,
    "turnaroundSpeed": "Same-Day VIP Priority (Within 2 Hours)",
    "chemicalCertification": "Green Seal & EU Ecolabel Certified Plant-Based Enzymatic Cleaners",
    "equipment": [
      "Nilfisk Industrial Ride-On Scrubber",
      "UVC Surface Sterilizer Wand",
      "Bio-Fogger Ultra Low Volume Mister",
      "Ghibli & Wirbel Commercial Extractor"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 5,
    "reviewsCount": 515,
    "heroImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Saadiyat Island. Delivered by background-checked British-trained supervisors utilizing industrial Nilfisk Industrial Ride-On Scrubber and green seal & eu ecolabel certified plant-based enzymatic cleaners. Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  },
  {
    "id": "PR-160",
    "title": "The Green-Certified Eco-Botanical Allergy Relief Sanitization — Corporate, Edition",
    "slug": "commercial-clinic-fm-pr-160",
    "categoryId": "commercial-clinic-fm",
    "categoryName": "Corporate, Clinic & Retail Facility Management",
    "propertyType": "Superyacht Interior",
    "recommendedFor": "Ideal for Superyacht Interiors in Al Barari requiring flawless execution and certified non-toxic standards.",
    "priceAED": 7950,
    "originalPriceAED": 9550,
    "durationHours": 4,
    "crewSize": 6,
    "sqftCoverage": 12900,
    "turnaroundSpeed": "Next-Day Scheduled Dispatch",
    "chemicalCertification": "DHA Medical-Grade Hospital Disinfectant (Kills 99.999% Pathogens)",
    "equipment": [
      "Klindex Diamond Resin Pads (400-3000 Grit)",
      "Rotovac 360 Carpet Restoration Engine",
      "Bissell BigGreen Pro Commercial",
      "Laser Particulate Sensor Meter"
    ],
    "guarantee": "100% Free Re-Clean Guarantee Within 48 Hours If Not Delighted",
    "rating": 4.9,
    "reviewsCount": 518,
    "heroImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "beforeImage": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1400&q=85",
    "afterImage": "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85",
    "isPopular": false,
    "isCorporateEligible": true,
    "description": "A meticulous, BICSc-certified cleaning operation engineered for high-value properties in Al Barari. Delivered by background-checked British-trained supervisors utilizing industrial Klindex Diamond Resin Pads (400-3000 Grit) and dha medical-grade hospital disinfectant (kills 99.999% pathogens). Eliminates 99.9% of allergens, micro-dust, and stubborn stains without damaging delicate natural stone or luxury Italian joinery.",
    "deliverables": [
      "Detailed high-level vacuuming and HEPA air scrubbing",
      "Deep steam extraction of all soft surfaces and mattresses",
      "Hospital-grade sterilization of bathrooms, vanity units, and mirrors",
      "Double-stage degreasing of luxury kitchen joinery and internal appliances",
      "Machine scrubbing and pH-neutral conditioning of tile and wood floors",
      "Comprehensive touchpoint bio-sanitization (handles, remotes, switches)"
    ],
    "methodology": [
      {
        "phase": "1. Surface & Air Quality Inspection",
        "description": "LiDAR and air particulate assessment to calibrate optimal PSI steam and pH-balanced solutions."
      },
      {
        "phase": "2. High-Level Dust & HEPA Extraction",
        "description": "Complete ceiling-to-floor dry filtration capturing dust mites and microscopic debris."
      },
      {
        "phase": "3. Thermoclean Bio-Steam Treatment",
        "description": "180°C micro-steam injection dissolving stubborn grease and eliminating microbial bacteria."
      },
      {
        "phase": "4. Diamond Polish & Material Conditioning",
        "description": "Application of bespoke protective sealant on natural stone, marble, and hardwood."
      },
      {
        "phase": "5. Quality Audit & Sign-off",
        "description": "White-glove ultraviolet inspection conducted by our RERA & BICSc certified lead supervisor."
      }
    ]
  }
];
