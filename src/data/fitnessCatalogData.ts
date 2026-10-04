export interface FitnessProgram {
  id: string;
  title: string;
  slug: string;
  disciplineId: string;
  disciplineName: string;
  priceAED: number;
  originalPriceAED?: number;
  durationMinutes: number;
  caloriesBurnEstimate: number;
  intensityLevel: string;
  masterCoach: {
    name: string;
    title: string;
    credentials: string;
  };
  rating: number;
  reviewsCount: number;
  isBlackTierExclusive: boolean;
  isComplimentaryAssessment: boolean;
  heroImage: string;
  gallery: string[];
  facilityZone: string;
  shortDescription: string;
  keyOutcomes: string[];
  equipmentUtilized: string[];
  sessionProtocol: string[];
}

export const FITNESS_CATALOG: FitnessProgram[] = [
  {
    "id": "KA-001",
    "title": "Hypertrophy Velocity-Based Barbell Mastery — Protocol A",
    "slug": "olympic-strength-conditioning-ka-001",
    "disciplineId": "olympic-strength-conditioning",
    "disciplineName": "Olympic Strength & Power Conditioning",
    "priceAED": 150,
    "originalPriceAED": 180,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 350,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 4.9,
    "reviewsCount": 41,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-002",
    "title": "Advanced Dynamic Reformer Core Sculpt & Cadillac Flow — Protocol B",
    "slug": "olympic-strength-conditioning-ka-002",
    "disciplineId": "olympic-strength-conditioning",
    "disciplineName": "Olympic Strength & Power Conditioning",
    "priceAED": 160,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 390,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 4.9,
    "reviewsCount": 46,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-003",
    "title": "Heavyweight Championship Boxing & Ring Strategy — Protocol C",
    "slug": "olympic-strength-conditioning-ka-003",
    "disciplineId": "olympic-strength-conditioning",
    "disciplineName": "Olympic Strength & Power Conditioning",
    "priceAED": 170,
    "originalPriceAED": 205,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 430,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 4.9,
    "reviewsCount": 51,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-004",
    "title": "Official HYROX Competition Race Prep & Sled Assault — Protocol D",
    "slug": "olympic-strength-conditioning-ka-004",
    "disciplineId": "olympic-strength-conditioning",
    "disciplineName": "Olympic Strength & Power Conditioning",
    "priceAED": 180,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 470,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 4.9,
    "reviewsCount": 56,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-005",
    "title": "Sub-Zero -110°C Cryo & Hyperbaric Oxygen Cellular Recovery — Protocol E",
    "slug": "olympic-strength-conditioning-ka-005",
    "disciplineId": "olympic-strength-conditioning",
    "disciplineName": "Olympic Strength & Power Conditioning",
    "priceAED": 190,
    "originalPriceAED": 230,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 510,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 61,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-006",
    "title": "VIP 1-on-1 Master Performance Coaching & EMG Telemetry — Protocol F",
    "slug": "olympic-strength-conditioning-ka-006",
    "disciplineId": "olympic-strength-conditioning",
    "disciplineName": "Olympic Strength & Power Conditioning",
    "priceAED": 200,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 550,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 66,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-007",
    "title": "DEXA Clinical Scan & Metabolic VO2 Max Benchmark — Protocol A",
    "slug": "olympic-strength-conditioning-ka-007",
    "disciplineId": "olympic-strength-conditioning",
    "disciplineName": "Olympic Strength & Power Conditioning",
    "priceAED": 210,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 590,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 5,
    "reviewsCount": 71,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-008",
    "title": "Sovereign Black-Tier Unlimited Monthly Club Access — Protocol B",
    "slug": "olympic-strength-conditioning-ka-008",
    "disciplineId": "olympic-strength-conditioning",
    "disciplineName": "Olympic Strength & Power Conditioning",
    "priceAED": 220,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 630,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 76,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-009",
    "title": "Olympic Snatch & Clean & Jerk Technical Lab — Protocol C",
    "slug": "olympic-strength-conditioning-ka-009",
    "disciplineId": "olympic-strength-conditioning",
    "disciplineName": "Olympic Strength & Power Conditioning",
    "priceAED": 230,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 670,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 81,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-010",
    "title": "Athletic Mobility, Fascial Release & Contrast Therapy — Protocol D",
    "slug": "olympic-strength-conditioning-ka-010",
    "disciplineId": "olympic-strength-conditioning",
    "disciplineName": "Olympic Strength & Power Conditioning",
    "priceAED": 240,
    "originalPriceAED": 290,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 710,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 4.9,
    "reviewsCount": 86,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-011",
    "title": "High-Intensity Altitude MetCon & Lactate Threshold — Protocol E",
    "slug": "olympic-strength-conditioning-ka-011",
    "disciplineId": "olympic-strength-conditioning",
    "disciplineName": "Olympic Strength & Power Conditioning",
    "priceAED": 250,
    "originalPriceAED": 300,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 750,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 4.9,
    "reviewsCount": 91,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-012",
    "title": "Muay Thai Striking, Clinch Control & Heavy Bag Circuit — Protocol F",
    "slug": "olympic-strength-conditioning-ka-012",
    "disciplineId": "olympic-strength-conditioning",
    "disciplineName": "Olympic Strength & Power Conditioning",
    "priceAED": 260,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 790,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 4.9,
    "reviewsCount": 96,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-013",
    "title": "Prenatal & Postural Pilates Core Rehabilitation — Protocol A",
    "slug": "olympic-strength-conditioning-ka-013",
    "disciplineId": "olympic-strength-conditioning",
    "disciplineName": "Olympic Strength & Power Conditioning",
    "priceAED": 270,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 830,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 4.9,
    "reviewsCount": 101,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-014",
    "title": "Contrast Therapy: 4°C Ice Bath & 90°C Finnish Cedar Sauna — Protocol B",
    "slug": "olympic-strength-conditioning-ka-014",
    "disciplineId": "olympic-strength-conditioning",
    "disciplineName": "Olympic Strength & Power Conditioning",
    "priceAED": 280,
    "originalPriceAED": 335,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 870,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 4.9,
    "reviewsCount": 106,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-015",
    "title": "Endurance Row & SkiErg Power Output Optimization — Protocol C",
    "slug": "olympic-strength-conditioning-ka-015",
    "disciplineId": "olympic-strength-conditioning",
    "disciplineName": "Olympic Strength & Power Conditioning",
    "priceAED": 290,
    "originalPriceAED": 350,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 360,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 5,
    "reviewsCount": 111,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-016",
    "title": "Executive Longevity & Biomarker Optimization Protocol — Protocol D",
    "slug": "olympic-strength-conditioning-ka-016",
    "disciplineId": "olympic-strength-conditioning",
    "disciplineName": "Olympic Strength & Power Conditioning",
    "priceAED": 300,
    "originalPriceAED": 360,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 400,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 116,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-017",
    "title": "Custom Sports Macro Nutrition & Daily Meal Delivery Sync — Protocol E",
    "slug": "olympic-strength-conditioning-ka-017",
    "disciplineId": "olympic-strength-conditioning",
    "disciplineName": "Olympic Strength & Power Conditioning",
    "priceAED": 310,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 440,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 121,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-018",
    "title": "Kettlebell Sport Ballistics & Grip Strength Conditioning — Protocol F",
    "slug": "olympic-strength-conditioning-ka-018",
    "disciplineId": "olympic-strength-conditioning",
    "disciplineName": "Olympic Strength & Power Conditioning",
    "priceAED": 320,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 480,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 126,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-019",
    "title": "Spinal Decompression & Deep Tissue Percussive Therapy — Protocol A",
    "slug": "olympic-strength-conditioning-ka-019",
    "disciplineId": "olympic-strength-conditioning",
    "disciplineName": "Olympic Strength & Power Conditioning",
    "priceAED": 330,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 520,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 5,
    "reviewsCount": 131,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-020",
    "title": "Annual Black Tier VIP Membership with Private Locker — Protocol B",
    "slug": "olympic-strength-conditioning-ka-020",
    "disciplineId": "olympic-strength-conditioning",
    "disciplineName": "Olympic Strength & Power Conditioning",
    "priceAED": 340,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 560,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 4.9,
    "reviewsCount": 136,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-021",
    "title": "Hypertrophy Velocity-Based Barbell Mastery — Protocol A",
    "slug": "reformer-pilates-biomechanics-ka-021",
    "disciplineId": "reformer-pilates-biomechanics",
    "disciplineName": "Reformer Pilates & Spinal Biomechanics",
    "priceAED": 180,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 350,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 4.9,
    "reviewsCount": 141,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Reformer Sanctuary 02",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-022",
    "title": "Advanced Dynamic Reformer Core Sculpt & Cadillac Flow — Protocol B",
    "slug": "reformer-pilates-biomechanics-ka-022",
    "disciplineId": "reformer-pilates-biomechanics",
    "disciplineName": "Reformer Pilates & Spinal Biomechanics",
    "priceAED": 190,
    "originalPriceAED": 230,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 390,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 4.9,
    "reviewsCount": 146,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Reformer Sanctuary 02",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-023",
    "title": "Heavyweight Championship Boxing & Ring Strategy — Protocol C",
    "slug": "reformer-pilates-biomechanics-ka-023",
    "disciplineId": "reformer-pilates-biomechanics",
    "disciplineName": "Reformer Pilates & Spinal Biomechanics",
    "priceAED": 205,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 430,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 4.9,
    "reviewsCount": 151,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Reformer Sanctuary 02",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-024",
    "title": "Official HYROX Competition Race Prep & Sled Assault — Protocol D",
    "slug": "reformer-pilates-biomechanics-ka-024",
    "disciplineId": "reformer-pilates-biomechanics",
    "disciplineName": "Reformer Pilates & Spinal Biomechanics",
    "priceAED": 215,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 470,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 4.9,
    "reviewsCount": 156,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Reformer Sanctuary 02",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-025",
    "title": "Sub-Zero -110°C Cryo & Hyperbaric Oxygen Cellular Recovery — Protocol E",
    "slug": "reformer-pilates-biomechanics-ka-025",
    "disciplineId": "reformer-pilates-biomechanics",
    "disciplineName": "Reformer Pilates & Spinal Biomechanics",
    "priceAED": 230,
    "originalPriceAED": 275,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 510,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 161,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Reformer Sanctuary 02",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-026",
    "title": "VIP 1-on-1 Master Performance Coaching & EMG Telemetry — Protocol F",
    "slug": "reformer-pilates-biomechanics-ka-026",
    "disciplineId": "reformer-pilates-biomechanics",
    "disciplineName": "Reformer Pilates & Spinal Biomechanics",
    "priceAED": 240,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 550,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 5,
    "reviewsCount": 166,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Reformer Sanctuary 02",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-027",
    "title": "DEXA Clinical Scan & Metabolic VO2 Max Benchmark — Protocol A",
    "slug": "reformer-pilates-biomechanics-ka-027",
    "disciplineId": "reformer-pilates-biomechanics",
    "disciplineName": "Reformer Pilates & Spinal Biomechanics",
    "priceAED": 250,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 590,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 171,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Reformer Sanctuary 02",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-028",
    "title": "Sovereign Black-Tier Unlimited Monthly Club Access — Protocol B",
    "slug": "reformer-pilates-biomechanics-ka-028",
    "disciplineId": "reformer-pilates-biomechanics",
    "disciplineName": "Reformer Pilates & Spinal Biomechanics",
    "priceAED": 265,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 630,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 176,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Reformer Sanctuary 02",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-029",
    "title": "Olympic Snatch & Clean & Jerk Technical Lab — Protocol C",
    "slug": "reformer-pilates-biomechanics-ka-029",
    "disciplineId": "reformer-pilates-biomechanics",
    "disciplineName": "Reformer Pilates & Spinal Biomechanics",
    "priceAED": 275,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 670,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 181,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Reformer Sanctuary 02",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-030",
    "title": "Athletic Mobility, Fascial Release & Contrast Therapy — Protocol D",
    "slug": "reformer-pilates-biomechanics-ka-030",
    "disciplineId": "reformer-pilates-biomechanics",
    "disciplineName": "Reformer Pilates & Spinal Biomechanics",
    "priceAED": 290,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 710,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 5,
    "reviewsCount": 186,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Reformer Sanctuary 02",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-031",
    "title": "High-Intensity Altitude MetCon & Lactate Threshold — Protocol E",
    "slug": "reformer-pilates-biomechanics-ka-031",
    "disciplineId": "reformer-pilates-biomechanics",
    "disciplineName": "Reformer Pilates & Spinal Biomechanics",
    "priceAED": 300,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 750,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 4.9,
    "reviewsCount": 191,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Reformer Sanctuary 02",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-032",
    "title": "Muay Thai Striking, Clinch Control & Heavy Bag Circuit — Protocol F",
    "slug": "reformer-pilates-biomechanics-ka-032",
    "disciplineId": "reformer-pilates-biomechanics",
    "disciplineName": "Reformer Pilates & Spinal Biomechanics",
    "priceAED": 310,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 790,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 4.9,
    "reviewsCount": 196,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Reformer Sanctuary 02",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-033",
    "title": "Prenatal & Postural Pilates Core Rehabilitation — Protocol A",
    "slug": "reformer-pilates-biomechanics-ka-033",
    "disciplineId": "reformer-pilates-biomechanics",
    "disciplineName": "Reformer Pilates & Spinal Biomechanics",
    "priceAED": 325,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 830,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 4.9,
    "reviewsCount": 201,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Reformer Sanctuary 02",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-034",
    "title": "Contrast Therapy: 4°C Ice Bath & 90°C Finnish Cedar Sauna — Protocol B",
    "slug": "reformer-pilates-biomechanics-ka-034",
    "disciplineId": "reformer-pilates-biomechanics",
    "disciplineName": "Reformer Pilates & Spinal Biomechanics",
    "priceAED": 335,
    "originalPriceAED": 400,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 870,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 4.9,
    "reviewsCount": 206,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Reformer Sanctuary 02",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-035",
    "title": "Endurance Row & SkiErg Power Output Optimization — Protocol C",
    "slug": "reformer-pilates-biomechanics-ka-035",
    "disciplineId": "reformer-pilates-biomechanics",
    "disciplineName": "Reformer Pilates & Spinal Biomechanics",
    "priceAED": 350,
    "originalPriceAED": 420,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 360,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 211,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Reformer Sanctuary 02",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-036",
    "title": "Executive Longevity & Biomarker Optimization Protocol — Protocol D",
    "slug": "reformer-pilates-biomechanics-ka-036",
    "disciplineId": "reformer-pilates-biomechanics",
    "disciplineName": "Reformer Pilates & Spinal Biomechanics",
    "priceAED": 360,
    "originalPriceAED": 430,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 400,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 216,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Reformer Sanctuary 02",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-037",
    "title": "Custom Sports Macro Nutrition & Daily Meal Delivery Sync — Protocol E",
    "slug": "reformer-pilates-biomechanics-ka-037",
    "disciplineId": "reformer-pilates-biomechanics",
    "disciplineName": "Reformer Pilates & Spinal Biomechanics",
    "priceAED": 370,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 440,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 221,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Reformer Sanctuary 02",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-038",
    "title": "Kettlebell Sport Ballistics & Grip Strength Conditioning — Protocol F",
    "slug": "reformer-pilates-biomechanics-ka-038",
    "disciplineId": "reformer-pilates-biomechanics",
    "disciplineName": "Reformer Pilates & Spinal Biomechanics",
    "priceAED": 385,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 480,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 5,
    "reviewsCount": 226,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Reformer Sanctuary 02",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-039",
    "title": "Spinal Decompression & Deep Tissue Percussive Therapy — Protocol A",
    "slug": "reformer-pilates-biomechanics-ka-039",
    "disciplineId": "reformer-pilates-biomechanics",
    "disciplineName": "Reformer Pilates & Spinal Biomechanics",
    "priceAED": 395,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 520,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 231,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Reformer Sanctuary 02",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-040",
    "title": "Annual Black Tier VIP Membership with Private Locker — Protocol B",
    "slug": "reformer-pilates-biomechanics-ka-040",
    "disciplineId": "reformer-pilates-biomechanics",
    "disciplineName": "Reformer Pilates & Spinal Biomechanics",
    "priceAED": 410,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 560,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 4.9,
    "reviewsCount": 236,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Reformer Sanctuary 02",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-041",
    "title": "Hypertrophy Velocity-Based Barbell Mastery — Protocol A",
    "slug": "championship-combat-boxing-ka-041",
    "disciplineId": "championship-combat-boxing",
    "disciplineName": "Championship Boxing & Combat Athletics",
    "priceAED": 195,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 350,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 4.9,
    "reviewsCount": 241,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Octagon Combat Ring",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-042",
    "title": "Advanced Dynamic Reformer Core Sculpt & Cadillac Flow — Protocol B",
    "slug": "championship-combat-boxing-ka-042",
    "disciplineId": "championship-combat-boxing",
    "disciplineName": "Championship Boxing & Combat Athletics",
    "priceAED": 210,
    "originalPriceAED": 250,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 390,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 4.9,
    "reviewsCount": 246,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Octagon Combat Ring",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-043",
    "title": "Heavyweight Championship Boxing & Ring Strategy — Protocol C",
    "slug": "championship-combat-boxing-ka-043",
    "disciplineId": "championship-combat-boxing",
    "disciplineName": "Championship Boxing & Combat Athletics",
    "priceAED": 225,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 430,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 4.9,
    "reviewsCount": 251,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Octagon Combat Ring",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-044",
    "title": "Official HYROX Competition Race Prep & Sled Assault — Protocol D",
    "slug": "championship-combat-boxing-ka-044",
    "disciplineId": "championship-combat-boxing",
    "disciplineName": "Championship Boxing & Combat Athletics",
    "priceAED": 240,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 470,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 4.9,
    "reviewsCount": 256,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Octagon Combat Ring",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-045",
    "title": "Sub-Zero -110°C Cryo & Hyperbaric Oxygen Cellular Recovery — Protocol E",
    "slug": "championship-combat-boxing-ka-045",
    "disciplineId": "championship-combat-boxing",
    "disciplineName": "Championship Boxing & Combat Athletics",
    "priceAED": 255,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 510,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 5,
    "reviewsCount": 261,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Octagon Combat Ring",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-046",
    "title": "VIP 1-on-1 Master Performance Coaching & EMG Telemetry — Protocol F",
    "slug": "championship-combat-boxing-ka-046",
    "disciplineId": "championship-combat-boxing",
    "disciplineName": "Championship Boxing & Combat Athletics",
    "priceAED": 270,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 550,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 266,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Octagon Combat Ring",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-047",
    "title": "DEXA Clinical Scan & Metabolic VO2 Max Benchmark — Protocol A",
    "slug": "championship-combat-boxing-ka-047",
    "disciplineId": "championship-combat-boxing",
    "disciplineName": "Championship Boxing & Combat Athletics",
    "priceAED": 285,
    "originalPriceAED": 340,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 590,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 271,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Octagon Combat Ring",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-048",
    "title": "Sovereign Black-Tier Unlimited Monthly Club Access — Protocol B",
    "slug": "championship-combat-boxing-ka-048",
    "disciplineId": "championship-combat-boxing",
    "disciplineName": "Championship Boxing & Combat Athletics",
    "priceAED": 300,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 630,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 276,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Octagon Combat Ring",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-049",
    "title": "Olympic Snatch & Clean & Jerk Technical Lab — Protocol C",
    "slug": "championship-combat-boxing-ka-049",
    "disciplineId": "championship-combat-boxing",
    "disciplineName": "Championship Boxing & Combat Athletics",
    "priceAED": 315,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 670,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 5,
    "reviewsCount": 281,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Octagon Combat Ring",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-050",
    "title": "Athletic Mobility, Fascial Release & Contrast Therapy — Protocol D",
    "slug": "championship-combat-boxing-ka-050",
    "disciplineId": "championship-combat-boxing",
    "disciplineName": "Championship Boxing & Combat Athletics",
    "priceAED": 330,
    "originalPriceAED": 395,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 710,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 286,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Octagon Combat Ring",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-051",
    "title": "High-Intensity Altitude MetCon & Lactate Threshold — Protocol E",
    "slug": "championship-combat-boxing-ka-051",
    "disciplineId": "championship-combat-boxing",
    "disciplineName": "Championship Boxing & Combat Athletics",
    "priceAED": 345,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 750,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 4.9,
    "reviewsCount": 291,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Octagon Combat Ring",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-052",
    "title": "Muay Thai Striking, Clinch Control & Heavy Bag Circuit — Protocol F",
    "slug": "championship-combat-boxing-ka-052",
    "disciplineId": "championship-combat-boxing",
    "disciplineName": "Championship Boxing & Combat Athletics",
    "priceAED": 360,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 790,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 4.9,
    "reviewsCount": 296,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Octagon Combat Ring",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-053",
    "title": "Prenatal & Postural Pilates Core Rehabilitation — Protocol A",
    "slug": "championship-combat-boxing-ka-053",
    "disciplineId": "championship-combat-boxing",
    "disciplineName": "Championship Boxing & Combat Athletics",
    "priceAED": 375,
    "originalPriceAED": 450,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 830,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 4.9,
    "reviewsCount": 301,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Octagon Combat Ring",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-054",
    "title": "Contrast Therapy: 4°C Ice Bath & 90°C Finnish Cedar Sauna — Protocol B",
    "slug": "championship-combat-boxing-ka-054",
    "disciplineId": "championship-combat-boxing",
    "disciplineName": "Championship Boxing & Combat Athletics",
    "priceAED": 390,
    "originalPriceAED": 470,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 870,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 4.9,
    "reviewsCount": 306,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Octagon Combat Ring",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-055",
    "title": "Endurance Row & SkiErg Power Output Optimization — Protocol C",
    "slug": "championship-combat-boxing-ka-055",
    "disciplineId": "championship-combat-boxing",
    "disciplineName": "Championship Boxing & Combat Athletics",
    "priceAED": 405,
    "originalPriceAED": 485,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 360,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 311,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Octagon Combat Ring",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-056",
    "title": "Executive Longevity & Biomarker Optimization Protocol — Protocol D",
    "slug": "championship-combat-boxing-ka-056",
    "disciplineId": "championship-combat-boxing",
    "disciplineName": "Championship Boxing & Combat Athletics",
    "priceAED": 420,
    "originalPriceAED": 505,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 400,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 316,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Octagon Combat Ring",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-057",
    "title": "Custom Sports Macro Nutrition & Daily Meal Delivery Sync — Protocol E",
    "slug": "championship-combat-boxing-ka-057",
    "disciplineId": "championship-combat-boxing",
    "disciplineName": "Championship Boxing & Combat Athletics",
    "priceAED": 435,
    "originalPriceAED": 520,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 440,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 5,
    "reviewsCount": 321,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Octagon Combat Ring",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-058",
    "title": "Kettlebell Sport Ballistics & Grip Strength Conditioning — Protocol F",
    "slug": "championship-combat-boxing-ka-058",
    "disciplineId": "championship-combat-boxing",
    "disciplineName": "Championship Boxing & Combat Athletics",
    "priceAED": 450,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 480,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 326,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Octagon Combat Ring",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-059",
    "title": "Spinal Decompression & Deep Tissue Percussive Therapy — Protocol A",
    "slug": "championship-combat-boxing-ka-059",
    "disciplineId": "championship-combat-boxing",
    "disciplineName": "Championship Boxing & Combat Athletics",
    "priceAED": 465,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 520,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 331,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Octagon Combat Ring",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-060",
    "title": "Annual Black Tier VIP Membership with Private Locker — Protocol B",
    "slug": "championship-combat-boxing-ka-060",
    "disciplineId": "championship-combat-boxing",
    "disciplineName": "Championship Boxing & Combat Athletics",
    "priceAED": 480,
    "originalPriceAED": 575,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 560,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 336,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Octagon Combat Ring",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-061",
    "title": "Hypertrophy Velocity-Based Barbell Mastery — Protocol A",
    "slug": "hyrox-endurance-metcon-ka-061",
    "disciplineId": "hyrox-endurance-metcon",
    "disciplineName": "HYROX Official & High-Altitude MetCon",
    "priceAED": 165,
    "originalPriceAED": 200,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 350,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 4.9,
    "reviewsCount": 341,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-062",
    "title": "Advanced Dynamic Reformer Core Sculpt & Cadillac Flow — Protocol B",
    "slug": "hyrox-endurance-metcon-ka-062",
    "disciplineId": "hyrox-endurance-metcon",
    "disciplineName": "HYROX Official & High-Altitude MetCon",
    "priceAED": 175,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 390,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 4.9,
    "reviewsCount": 346,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-063",
    "title": "Heavyweight Championship Boxing & Ring Strategy — Protocol C",
    "slug": "hyrox-endurance-metcon-ka-063",
    "disciplineId": "hyrox-endurance-metcon",
    "disciplineName": "HYROX Official & High-Altitude MetCon",
    "priceAED": 185,
    "originalPriceAED": 220,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 430,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 4.9,
    "reviewsCount": 351,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-064",
    "title": "Official HYROX Competition Race Prep & Sled Assault — Protocol D",
    "slug": "hyrox-endurance-metcon-ka-064",
    "disciplineId": "hyrox-endurance-metcon",
    "disciplineName": "HYROX Official & High-Altitude MetCon",
    "priceAED": 195,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 470,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 4.9,
    "reviewsCount": 356,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-065",
    "title": "Sub-Zero -110°C Cryo & Hyperbaric Oxygen Cellular Recovery — Protocol E",
    "slug": "hyrox-endurance-metcon-ka-065",
    "disciplineId": "hyrox-endurance-metcon",
    "disciplineName": "HYROX Official & High-Altitude MetCon",
    "priceAED": 205,
    "originalPriceAED": 245,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 510,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 361,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-066",
    "title": "VIP 1-on-1 Master Performance Coaching & EMG Telemetry — Protocol F",
    "slug": "hyrox-endurance-metcon-ka-066",
    "disciplineId": "hyrox-endurance-metcon",
    "disciplineName": "HYROX Official & High-Altitude MetCon",
    "priceAED": 215,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 550,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 366,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-067",
    "title": "DEXA Clinical Scan & Metabolic VO2 Max Benchmark — Protocol A",
    "slug": "hyrox-endurance-metcon-ka-067",
    "disciplineId": "hyrox-endurance-metcon",
    "disciplineName": "HYROX Official & High-Altitude MetCon",
    "priceAED": 225,
    "originalPriceAED": 270,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 590,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 371,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-068",
    "title": "Sovereign Black-Tier Unlimited Monthly Club Access — Protocol B",
    "slug": "hyrox-endurance-metcon-ka-068",
    "disciplineId": "hyrox-endurance-metcon",
    "disciplineName": "HYROX Official & High-Altitude MetCon",
    "priceAED": 235,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 630,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 5,
    "reviewsCount": 376,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-069",
    "title": "Olympic Snatch & Clean & Jerk Technical Lab — Protocol C",
    "slug": "hyrox-endurance-metcon-ka-069",
    "disciplineId": "hyrox-endurance-metcon",
    "disciplineName": "HYROX Official & High-Altitude MetCon",
    "priceAED": 245,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 670,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 381,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-070",
    "title": "Athletic Mobility, Fascial Release & Contrast Therapy — Protocol D",
    "slug": "hyrox-endurance-metcon-ka-070",
    "disciplineId": "hyrox-endurance-metcon",
    "disciplineName": "HYROX Official & High-Altitude MetCon",
    "priceAED": 255,
    "originalPriceAED": 305,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 710,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 4.9,
    "reviewsCount": 386,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-071",
    "title": "High-Intensity Altitude MetCon & Lactate Threshold — Protocol E",
    "slug": "hyrox-endurance-metcon-ka-071",
    "disciplineId": "hyrox-endurance-metcon",
    "disciplineName": "HYROX Official & High-Altitude MetCon",
    "priceAED": 265,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 750,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 4.9,
    "reviewsCount": 391,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-072",
    "title": "Muay Thai Striking, Clinch Control & Heavy Bag Circuit — Protocol F",
    "slug": "hyrox-endurance-metcon-ka-072",
    "disciplineId": "hyrox-endurance-metcon",
    "disciplineName": "HYROX Official & High-Altitude MetCon",
    "priceAED": 275,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 790,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 4.9,
    "reviewsCount": 396,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-073",
    "title": "Prenatal & Postural Pilates Core Rehabilitation — Protocol A",
    "slug": "hyrox-endurance-metcon-ka-073",
    "disciplineId": "hyrox-endurance-metcon",
    "disciplineName": "HYROX Official & High-Altitude MetCon",
    "priceAED": 285,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 830,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 4.9,
    "reviewsCount": 401,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-074",
    "title": "Contrast Therapy: 4°C Ice Bath & 90°C Finnish Cedar Sauna — Protocol B",
    "slug": "hyrox-endurance-metcon-ka-074",
    "disciplineId": "hyrox-endurance-metcon",
    "disciplineName": "HYROX Official & High-Altitude MetCon",
    "priceAED": 295,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 870,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 4.9,
    "reviewsCount": 406,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-075",
    "title": "Endurance Row & SkiErg Power Output Optimization — Protocol C",
    "slug": "hyrox-endurance-metcon-ka-075",
    "disciplineId": "hyrox-endurance-metcon",
    "disciplineName": "HYROX Official & High-Altitude MetCon",
    "priceAED": 305,
    "originalPriceAED": 365,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 360,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 411,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-076",
    "title": "Executive Longevity & Biomarker Optimization Protocol — Protocol D",
    "slug": "hyrox-endurance-metcon-ka-076",
    "disciplineId": "hyrox-endurance-metcon",
    "disciplineName": "HYROX Official & High-Altitude MetCon",
    "priceAED": 315,
    "originalPriceAED": 380,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 400,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 5,
    "reviewsCount": 416,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-077",
    "title": "Custom Sports Macro Nutrition & Daily Meal Delivery Sync — Protocol E",
    "slug": "hyrox-endurance-metcon-ka-077",
    "disciplineId": "hyrox-endurance-metcon",
    "disciplineName": "HYROX Official & High-Altitude MetCon",
    "priceAED": 325,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 440,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 421,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-078",
    "title": "Kettlebell Sport Ballistics & Grip Strength Conditioning — Protocol F",
    "slug": "hyrox-endurance-metcon-ka-078",
    "disciplineId": "hyrox-endurance-metcon",
    "disciplineName": "HYROX Official & High-Altitude MetCon",
    "priceAED": 335,
    "originalPriceAED": 400,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 480,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 426,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-079",
    "title": "Spinal Decompression & Deep Tissue Percussive Therapy — Protocol A",
    "slug": "hyrox-endurance-metcon-ka-079",
    "disciplineId": "hyrox-endurance-metcon",
    "disciplineName": "HYROX Official & High-Altitude MetCon",
    "priceAED": 345,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 520,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 431,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-080",
    "title": "Annual Black Tier VIP Membership with Private Locker — Protocol B",
    "slug": "hyrox-endurance-metcon-ka-080",
    "disciplineId": "hyrox-endurance-metcon",
    "disciplineName": "HYROX Official & High-Altitude MetCon",
    "priceAED": 355,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 560,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 4.9,
    "reviewsCount": 436,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-081",
    "title": "Hypertrophy Velocity-Based Barbell Mastery — Protocol A",
    "slug": "biohacking-cryo-recovery-ka-081",
    "disciplineId": "biohacking-cryo-recovery",
    "disciplineName": "Biohacking, -110°C Cryo & Infrared Recovery",
    "priceAED": 280,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 350,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 4.9,
    "reviewsCount": 441,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Cryo & Hyperbaric Pods",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-082",
    "title": "Advanced Dynamic Reformer Core Sculpt & Cadillac Flow — Protocol B",
    "slug": "biohacking-cryo-recovery-ka-082",
    "disciplineId": "biohacking-cryo-recovery",
    "disciplineName": "Biohacking, -110°C Cryo & Infrared Recovery",
    "priceAED": 300,
    "originalPriceAED": 360,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 390,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 4.9,
    "reviewsCount": 446,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Cryo & Hyperbaric Pods",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-083",
    "title": "Heavyweight Championship Boxing & Ring Strategy — Protocol C",
    "slug": "biohacking-cryo-recovery-ka-083",
    "disciplineId": "biohacking-cryo-recovery",
    "disciplineName": "Biohacking, -110°C Cryo & Infrared Recovery",
    "priceAED": 320,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 430,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 4.9,
    "reviewsCount": 451,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Cryo & Hyperbaric Pods",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-084",
    "title": "Official HYROX Competition Race Prep & Sled Assault — Protocol D",
    "slug": "biohacking-cryo-recovery-ka-084",
    "disciplineId": "biohacking-cryo-recovery",
    "disciplineName": "Biohacking, -110°C Cryo & Infrared Recovery",
    "priceAED": 340,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 470,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 4.9,
    "reviewsCount": 456,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Cryo & Hyperbaric Pods",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-085",
    "title": "Sub-Zero -110°C Cryo & Hyperbaric Oxygen Cellular Recovery — Protocol E",
    "slug": "biohacking-cryo-recovery-ka-085",
    "disciplineId": "biohacking-cryo-recovery",
    "disciplineName": "Biohacking, -110°C Cryo & Infrared Recovery",
    "priceAED": 360,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 510,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 461,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Cryo & Hyperbaric Pods",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-086",
    "title": "VIP 1-on-1 Master Performance Coaching & EMG Telemetry — Protocol F",
    "slug": "biohacking-cryo-recovery-ka-086",
    "disciplineId": "biohacking-cryo-recovery",
    "disciplineName": "Biohacking, -110°C Cryo & Infrared Recovery",
    "priceAED": 380,
    "originalPriceAED": 455,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 550,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 466,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Cryo & Hyperbaric Pods",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-087",
    "title": "DEXA Clinical Scan & Metabolic VO2 Max Benchmark — Protocol A",
    "slug": "biohacking-cryo-recovery-ka-087",
    "disciplineId": "biohacking-cryo-recovery",
    "disciplineName": "Biohacking, -110°C Cryo & Infrared Recovery",
    "priceAED": 400,
    "originalPriceAED": 480,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 590,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 5,
    "reviewsCount": 471,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Cryo & Hyperbaric Pods",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-088",
    "title": "Sovereign Black-Tier Unlimited Monthly Club Access — Protocol B",
    "slug": "biohacking-cryo-recovery-ka-088",
    "disciplineId": "biohacking-cryo-recovery",
    "disciplineName": "Biohacking, -110°C Cryo & Infrared Recovery",
    "priceAED": 420,
    "originalPriceAED": 505,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 630,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 476,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Cryo & Hyperbaric Pods",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-089",
    "title": "Olympic Snatch & Clean & Jerk Technical Lab — Protocol C",
    "slug": "biohacking-cryo-recovery-ka-089",
    "disciplineId": "biohacking-cryo-recovery",
    "disciplineName": "Biohacking, -110°C Cryo & Infrared Recovery",
    "priceAED": 440,
    "originalPriceAED": 530,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 670,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 481,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Cryo & Hyperbaric Pods",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-090",
    "title": "Athletic Mobility, Fascial Release & Contrast Therapy — Protocol D",
    "slug": "biohacking-cryo-recovery-ka-090",
    "disciplineId": "biohacking-cryo-recovery",
    "disciplineName": "Biohacking, -110°C Cryo & Infrared Recovery",
    "priceAED": 460,
    "originalPriceAED": 550,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 710,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 486,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Cryo & Hyperbaric Pods",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-091",
    "title": "High-Intensity Altitude MetCon & Lactate Threshold — Protocol E",
    "slug": "biohacking-cryo-recovery-ka-091",
    "disciplineId": "biohacking-cryo-recovery",
    "disciplineName": "Biohacking, -110°C Cryo & Infrared Recovery",
    "priceAED": 480,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 750,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 4.9,
    "reviewsCount": 491,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Cryo & Hyperbaric Pods",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-092",
    "title": "Muay Thai Striking, Clinch Control & Heavy Bag Circuit — Protocol F",
    "slug": "biohacking-cryo-recovery-ka-092",
    "disciplineId": "biohacking-cryo-recovery",
    "disciplineName": "Biohacking, -110°C Cryo & Infrared Recovery",
    "priceAED": 500,
    "originalPriceAED": 600,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 790,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 4.9,
    "reviewsCount": 496,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Cryo & Hyperbaric Pods",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-093",
    "title": "Prenatal & Postural Pilates Core Rehabilitation — Protocol A",
    "slug": "biohacking-cryo-recovery-ka-093",
    "disciplineId": "biohacking-cryo-recovery",
    "disciplineName": "Biohacking, -110°C Cryo & Infrared Recovery",
    "priceAED": 520,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 830,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 4.9,
    "reviewsCount": 501,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Cryo & Hyperbaric Pods",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-094",
    "title": "Contrast Therapy: 4°C Ice Bath & 90°C Finnish Cedar Sauna — Protocol B",
    "slug": "biohacking-cryo-recovery-ka-094",
    "disciplineId": "biohacking-cryo-recovery",
    "disciplineName": "Biohacking, -110°C Cryo & Infrared Recovery",
    "priceAED": 540,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 870,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 4.9,
    "reviewsCount": 506,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Cryo & Hyperbaric Pods",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-095",
    "title": "Endurance Row & SkiErg Power Output Optimization — Protocol C",
    "slug": "biohacking-cryo-recovery-ka-095",
    "disciplineId": "biohacking-cryo-recovery",
    "disciplineName": "Biohacking, -110°C Cryo & Infrared Recovery",
    "priceAED": 560,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 360,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 5,
    "reviewsCount": 511,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Cryo & Hyperbaric Pods",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-096",
    "title": "Executive Longevity & Biomarker Optimization Protocol — Protocol D",
    "slug": "biohacking-cryo-recovery-ka-096",
    "disciplineId": "biohacking-cryo-recovery",
    "disciplineName": "Biohacking, -110°C Cryo & Infrared Recovery",
    "priceAED": 580,
    "originalPriceAED": 695,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 400,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 516,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Cryo & Hyperbaric Pods",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-097",
    "title": "Custom Sports Macro Nutrition & Daily Meal Delivery Sync — Protocol E",
    "slug": "biohacking-cryo-recovery-ka-097",
    "disciplineId": "biohacking-cryo-recovery",
    "disciplineName": "Biohacking, -110°C Cryo & Infrared Recovery",
    "priceAED": 600,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 440,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 521,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Cryo & Hyperbaric Pods",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-098",
    "title": "Kettlebell Sport Ballistics & Grip Strength Conditioning — Protocol F",
    "slug": "biohacking-cryo-recovery-ka-098",
    "disciplineId": "biohacking-cryo-recovery",
    "disciplineName": "Biohacking, -110°C Cryo & Infrared Recovery",
    "priceAED": 620,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 480,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 526,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Cryo & Hyperbaric Pods",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-099",
    "title": "Spinal Decompression & Deep Tissue Percussive Therapy — Protocol A",
    "slug": "biohacking-cryo-recovery-ka-099",
    "disciplineId": "biohacking-cryo-recovery",
    "disciplineName": "Biohacking, -110°C Cryo & Infrared Recovery",
    "priceAED": 640,
    "originalPriceAED": 770,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 520,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 5,
    "reviewsCount": 531,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Cryo & Hyperbaric Pods",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-100",
    "title": "Annual Black Tier VIP Membership with Private Locker — Protocol B",
    "slug": "biohacking-cryo-recovery-ka-100",
    "disciplineId": "biohacking-cryo-recovery",
    "disciplineName": "Biohacking, -110°C Cryo & Infrared Recovery",
    "priceAED": 660,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 560,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 536,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "Cryo & Hyperbaric Pods",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-101",
    "title": "Hypertrophy Velocity-Based Barbell Mastery — Protocol A",
    "slug": "executive-personal-mastery-ka-101",
    "disciplineId": "executive-personal-mastery",
    "disciplineName": "1-on-1 Master Olympic Coaches & Sports Science",
    "priceAED": 450,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 350,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 4.9,
    "reviewsCount": 541,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-102",
    "title": "Advanced Dynamic Reformer Core Sculpt & Cadillac Flow — Protocol B",
    "slug": "executive-personal-mastery-ka-102",
    "disciplineId": "executive-personal-mastery",
    "disciplineName": "1-on-1 Master Olympic Coaches & Sports Science",
    "priceAED": 480,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 390,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 4.9,
    "reviewsCount": 546,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-103",
    "title": "Heavyweight Championship Boxing & Ring Strategy — Protocol C",
    "slug": "executive-personal-mastery-ka-103",
    "disciplineId": "executive-personal-mastery",
    "disciplineName": "1-on-1 Master Olympic Coaches & Sports Science",
    "priceAED": 510,
    "originalPriceAED": 610,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 430,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 4.9,
    "reviewsCount": 551,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-104",
    "title": "Official HYROX Competition Race Prep & Sled Assault — Protocol D",
    "slug": "executive-personal-mastery-ka-104",
    "disciplineId": "executive-personal-mastery",
    "disciplineName": "1-on-1 Master Olympic Coaches & Sports Science",
    "priceAED": 540,
    "originalPriceAED": 650,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 470,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 4.9,
    "reviewsCount": 556,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-105",
    "title": "Sub-Zero -110°C Cryo & Hyperbaric Oxygen Cellular Recovery — Protocol E",
    "slug": "executive-personal-mastery-ka-105",
    "disciplineId": "executive-personal-mastery",
    "disciplineName": "1-on-1 Master Olympic Coaches & Sports Science",
    "priceAED": 570,
    "originalPriceAED": 685,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 510,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 561,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-106",
    "title": "VIP 1-on-1 Master Performance Coaching & EMG Telemetry — Protocol F",
    "slug": "executive-personal-mastery-ka-106",
    "disciplineId": "executive-personal-mastery",
    "disciplineName": "1-on-1 Master Olympic Coaches & Sports Science",
    "priceAED": 600,
    "originalPriceAED": 720,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 550,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 5,
    "reviewsCount": 566,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-107",
    "title": "DEXA Clinical Scan & Metabolic VO2 Max Benchmark — Protocol A",
    "slug": "executive-personal-mastery-ka-107",
    "disciplineId": "executive-personal-mastery",
    "disciplineName": "1-on-1 Master Olympic Coaches & Sports Science",
    "priceAED": 630,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 590,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 571,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-108",
    "title": "Sovereign Black-Tier Unlimited Monthly Club Access — Protocol B",
    "slug": "executive-personal-mastery-ka-108",
    "disciplineId": "executive-personal-mastery",
    "disciplineName": "1-on-1 Master Olympic Coaches & Sports Science",
    "priceAED": 660,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 630,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 576,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-109",
    "title": "Olympic Snatch & Clean & Jerk Technical Lab — Protocol C",
    "slug": "executive-personal-mastery-ka-109",
    "disciplineId": "executive-personal-mastery",
    "disciplineName": "1-on-1 Master Olympic Coaches & Sports Science",
    "priceAED": 690,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 670,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 581,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-110",
    "title": "Athletic Mobility, Fascial Release & Contrast Therapy — Protocol D",
    "slug": "executive-personal-mastery-ka-110",
    "disciplineId": "executive-personal-mastery",
    "disciplineName": "1-on-1 Master Olympic Coaches & Sports Science",
    "priceAED": 720,
    "originalPriceAED": 865,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 710,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 4.9,
    "reviewsCount": 586,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-111",
    "title": "High-Intensity Altitude MetCon & Lactate Threshold — Protocol E",
    "slug": "executive-personal-mastery-ka-111",
    "disciplineId": "executive-personal-mastery",
    "disciplineName": "1-on-1 Master Olympic Coaches & Sports Science",
    "priceAED": 750,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 750,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 4.9,
    "reviewsCount": 591,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-112",
    "title": "Muay Thai Striking, Clinch Control & Heavy Bag Circuit — Protocol F",
    "slug": "executive-personal-mastery-ka-112",
    "disciplineId": "executive-personal-mastery",
    "disciplineName": "1-on-1 Master Olympic Coaches & Sports Science",
    "priceAED": 780,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 790,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 4.9,
    "reviewsCount": 596,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-113",
    "title": "Prenatal & Postural Pilates Core Rehabilitation — Protocol A",
    "slug": "executive-personal-mastery-ka-113",
    "disciplineId": "executive-personal-mastery",
    "disciplineName": "1-on-1 Master Olympic Coaches & Sports Science",
    "priceAED": 810,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 830,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 4.9,
    "reviewsCount": 601,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-114",
    "title": "Contrast Therapy: 4°C Ice Bath & 90°C Finnish Cedar Sauna — Protocol B",
    "slug": "executive-personal-mastery-ka-114",
    "disciplineId": "executive-personal-mastery",
    "disciplineName": "1-on-1 Master Olympic Coaches & Sports Science",
    "priceAED": 840,
    "originalPriceAED": 1010,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 870,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 4.9,
    "reviewsCount": 606,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-115",
    "title": "Endurance Row & SkiErg Power Output Optimization — Protocol C",
    "slug": "executive-personal-mastery-ka-115",
    "disciplineId": "executive-personal-mastery",
    "disciplineName": "1-on-1 Master Olympic Coaches & Sports Science",
    "priceAED": 870,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 360,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 611,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-116",
    "title": "Executive Longevity & Biomarker Optimization Protocol — Protocol D",
    "slug": "executive-personal-mastery-ka-116",
    "disciplineId": "executive-personal-mastery",
    "disciplineName": "1-on-1 Master Olympic Coaches & Sports Science",
    "priceAED": 900,
    "originalPriceAED": 1080,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 400,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 616,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-117",
    "title": "Custom Sports Macro Nutrition & Daily Meal Delivery Sync — Protocol E",
    "slug": "executive-personal-mastery-ka-117",
    "disciplineId": "executive-personal-mastery",
    "disciplineName": "1-on-1 Master Olympic Coaches & Sports Science",
    "priceAED": 930,
    "originalPriceAED": 1115,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 440,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 621,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-118",
    "title": "Kettlebell Sport Ballistics & Grip Strength Conditioning — Protocol F",
    "slug": "executive-personal-mastery-ka-118",
    "disciplineId": "executive-personal-mastery",
    "disciplineName": "1-on-1 Master Olympic Coaches & Sports Science",
    "priceAED": 960,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 480,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 5,
    "reviewsCount": 626,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-119",
    "title": "Spinal Decompression & Deep Tissue Percussive Therapy — Protocol A",
    "slug": "executive-personal-mastery-ka-119",
    "disciplineId": "executive-personal-mastery",
    "disciplineName": "1-on-1 Master Olympic Coaches & Sports Science",
    "priceAED": 990,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 520,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 631,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-120",
    "title": "Annual Black Tier VIP Membership with Private Locker — Protocol B",
    "slug": "executive-personal-mastery-ka-120",
    "disciplineId": "executive-personal-mastery",
    "disciplineName": "1-on-1 Master Olympic Coaches & Sports Science",
    "priceAED": 1020,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 560,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 636,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-121",
    "title": "Hypertrophy Velocity-Based Barbell Mastery — Protocol A",
    "slug": "metabolic-nutrition-dexa-ka-121",
    "disciplineId": "metabolic-nutrition-dexa",
    "disciplineName": "DEXA Body Scanning & Sports Nutrition Lab",
    "priceAED": 320,
    "originalPriceAED": 385,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 350,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 4.9,
    "reviewsCount": 641,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-122",
    "title": "Advanced Dynamic Reformer Core Sculpt & Cadillac Flow — Protocol B",
    "slug": "metabolic-nutrition-dexa-ka-122",
    "disciplineId": "metabolic-nutrition-dexa",
    "disciplineName": "DEXA Body Scanning & Sports Nutrition Lab",
    "priceAED": 345,
    "originalPriceAED": 415,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 390,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 4.9,
    "reviewsCount": 646,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-123",
    "title": "Heavyweight Championship Boxing & Ring Strategy — Protocol C",
    "slug": "metabolic-nutrition-dexa-ka-123",
    "disciplineId": "metabolic-nutrition-dexa",
    "disciplineName": "DEXA Body Scanning & Sports Nutrition Lab",
    "priceAED": 370,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 430,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 4.9,
    "reviewsCount": 651,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-124",
    "title": "Official HYROX Competition Race Prep & Sled Assault — Protocol D",
    "slug": "metabolic-nutrition-dexa-ka-124",
    "disciplineId": "metabolic-nutrition-dexa",
    "disciplineName": "DEXA Body Scanning & Sports Nutrition Lab",
    "priceAED": 395,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 470,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 4.9,
    "reviewsCount": 656,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-125",
    "title": "Sub-Zero -110°C Cryo & Hyperbaric Oxygen Cellular Recovery — Protocol E",
    "slug": "metabolic-nutrition-dexa-ka-125",
    "disciplineId": "metabolic-nutrition-dexa",
    "disciplineName": "DEXA Body Scanning & Sports Nutrition Lab",
    "priceAED": 420,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 510,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 5,
    "reviewsCount": 661,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-126",
    "title": "VIP 1-on-1 Master Performance Coaching & EMG Telemetry — Protocol F",
    "slug": "metabolic-nutrition-dexa-ka-126",
    "disciplineId": "metabolic-nutrition-dexa",
    "disciplineName": "DEXA Body Scanning & Sports Nutrition Lab",
    "priceAED": 445,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 550,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 666,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-127",
    "title": "DEXA Clinical Scan & Metabolic VO2 Max Benchmark — Protocol A",
    "slug": "metabolic-nutrition-dexa-ka-127",
    "disciplineId": "metabolic-nutrition-dexa",
    "disciplineName": "DEXA Body Scanning & Sports Nutrition Lab",
    "priceAED": 470,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 590,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 671,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-128",
    "title": "Sovereign Black-Tier Unlimited Monthly Club Access — Protocol B",
    "slug": "metabolic-nutrition-dexa-ka-128",
    "disciplineId": "metabolic-nutrition-dexa",
    "disciplineName": "DEXA Body Scanning & Sports Nutrition Lab",
    "priceAED": 495,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 630,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 676,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-129",
    "title": "Olympic Snatch & Clean & Jerk Technical Lab — Protocol C",
    "slug": "metabolic-nutrition-dexa-ka-129",
    "disciplineId": "metabolic-nutrition-dexa",
    "disciplineName": "DEXA Body Scanning & Sports Nutrition Lab",
    "priceAED": 520,
    "originalPriceAED": 625,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 670,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 5,
    "reviewsCount": 681,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-130",
    "title": "Athletic Mobility, Fascial Release & Contrast Therapy — Protocol D",
    "slug": "metabolic-nutrition-dexa-ka-130",
    "disciplineId": "metabolic-nutrition-dexa",
    "disciplineName": "DEXA Body Scanning & Sports Nutrition Lab",
    "priceAED": 545,
    "originalPriceAED": 655,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 710,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 686,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-131",
    "title": "High-Intensity Altitude MetCon & Lactate Threshold — Protocol E",
    "slug": "metabolic-nutrition-dexa-ka-131",
    "disciplineId": "metabolic-nutrition-dexa",
    "disciplineName": "DEXA Body Scanning & Sports Nutrition Lab",
    "priceAED": 570,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 750,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 4.9,
    "reviewsCount": 691,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-132",
    "title": "Muay Thai Striking, Clinch Control & Heavy Bag Circuit — Protocol F",
    "slug": "metabolic-nutrition-dexa-ka-132",
    "disciplineId": "metabolic-nutrition-dexa",
    "disciplineName": "DEXA Body Scanning & Sports Nutrition Lab",
    "priceAED": 595,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 790,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 4.9,
    "reviewsCount": 696,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-133",
    "title": "Prenatal & Postural Pilates Core Rehabilitation — Protocol A",
    "slug": "metabolic-nutrition-dexa-ka-133",
    "disciplineId": "metabolic-nutrition-dexa",
    "disciplineName": "DEXA Body Scanning & Sports Nutrition Lab",
    "priceAED": 620,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 830,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 4.9,
    "reviewsCount": 701,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-134",
    "title": "Contrast Therapy: 4°C Ice Bath & 90°C Finnish Cedar Sauna — Protocol B",
    "slug": "metabolic-nutrition-dexa-ka-134",
    "disciplineId": "metabolic-nutrition-dexa",
    "disciplineName": "DEXA Body Scanning & Sports Nutrition Lab",
    "priceAED": 645,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 870,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 4.9,
    "reviewsCount": 706,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-135",
    "title": "Endurance Row & SkiErg Power Output Optimization — Protocol C",
    "slug": "metabolic-nutrition-dexa-ka-135",
    "disciplineId": "metabolic-nutrition-dexa",
    "disciplineName": "DEXA Body Scanning & Sports Nutrition Lab",
    "priceAED": 670,
    "originalPriceAED": 805,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 360,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 711,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-136",
    "title": "Executive Longevity & Biomarker Optimization Protocol — Protocol D",
    "slug": "metabolic-nutrition-dexa-ka-136",
    "disciplineId": "metabolic-nutrition-dexa",
    "disciplineName": "DEXA Body Scanning & Sports Nutrition Lab",
    "priceAED": 695,
    "originalPriceAED": 835,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 400,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 716,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-137",
    "title": "Custom Sports Macro Nutrition & Daily Meal Delivery Sync — Protocol E",
    "slug": "metabolic-nutrition-dexa-ka-137",
    "disciplineId": "metabolic-nutrition-dexa",
    "disciplineName": "DEXA Body Scanning & Sports Nutrition Lab",
    "priceAED": 720,
    "originalPriceAED": 865,
    "durationMinutes": 45,
    "caloriesBurnEstimate": 440,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 5,
    "reviewsCount": 721,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-138",
    "title": "Kettlebell Sport Ballistics & Grip Strength Conditioning — Protocol F",
    "slug": "metabolic-nutrition-dexa-ka-138",
    "disciplineId": "metabolic-nutrition-dexa",
    "disciplineName": "DEXA Body Scanning & Sports Nutrition Lab",
    "priceAED": 745,
    "originalPriceAED": 895,
    "durationMinutes": 60,
    "caloriesBurnEstimate": 480,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 726,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-139",
    "title": "Spinal Decompression & Deep Tissue Percussive Therapy — Protocol A",
    "slug": "metabolic-nutrition-dexa-ka-139",
    "disciplineId": "metabolic-nutrition-dexa",
    "disciplineName": "DEXA Body Scanning & Sports Nutrition Lab",
    "priceAED": 770,
    "durationMinutes": 75,
    "caloriesBurnEstimate": 520,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 731,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-140",
    "title": "Annual Black Tier VIP Membership with Private Locker — Protocol B",
    "slug": "metabolic-nutrition-dexa-ka-140",
    "disciplineId": "metabolic-nutrition-dexa",
    "disciplineName": "DEXA Body Scanning & Sports Nutrition Lab",
    "priceAED": 795,
    "originalPriceAED": 955,
    "durationMinutes": 90,
    "caloriesBurnEstimate": 560,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 4.9,
    "reviewsCount": 736,
    "isBlackTierExclusive": false,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-141",
    "title": "Hypertrophy Velocity-Based Barbell Mastery — Protocol A",
    "slug": "vip-black-tier-memberships-ka-141",
    "disciplineId": "vip-black-tier-memberships",
    "disciplineName": "Sovereign Black-Tier 24/7 All-Access Pass",
    "priceAED": 1250,
    "originalPriceAED": 1500,
    "durationMinutes": 30,
    "caloriesBurnEstimate": 350,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 4.9,
    "reviewsCount": 741,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-142",
    "title": "Advanced Dynamic Reformer Core Sculpt & Cadillac Flow — Protocol B",
    "slug": "vip-black-tier-memberships-ka-142",
    "disciplineId": "vip-black-tier-memberships",
    "disciplineName": "Sovereign Black-Tier 24/7 All-Access Pass",
    "priceAED": 1370,
    "durationMinutes": 30,
    "caloriesBurnEstimate": 390,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 4.9,
    "reviewsCount": 746,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-143",
    "title": "Heavyweight Championship Boxing & Ring Strategy — Protocol C",
    "slug": "vip-black-tier-memberships-ka-143",
    "disciplineId": "vip-black-tier-memberships",
    "disciplineName": "Sovereign Black-Tier 24/7 All-Access Pass",
    "priceAED": 1490,
    "durationMinutes": 30,
    "caloriesBurnEstimate": 430,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 4.9,
    "reviewsCount": 751,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-144",
    "title": "Official HYROX Competition Race Prep & Sled Assault — Protocol D",
    "slug": "vip-black-tier-memberships-ka-144",
    "disciplineId": "vip-black-tier-memberships",
    "disciplineName": "Sovereign Black-Tier 24/7 All-Access Pass",
    "priceAED": 1610,
    "durationMinutes": 30,
    "caloriesBurnEstimate": 470,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 4.9,
    "reviewsCount": 756,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-145",
    "title": "Sub-Zero -110°C Cryo & Hyperbaric Oxygen Cellular Recovery — Protocol E",
    "slug": "vip-black-tier-memberships-ka-145",
    "disciplineId": "vip-black-tier-memberships",
    "disciplineName": "Sovereign Black-Tier 24/7 All-Access Pass",
    "priceAED": 1730,
    "durationMinutes": 30,
    "caloriesBurnEstimate": 510,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 761,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-146",
    "title": "VIP 1-on-1 Master Performance Coaching & EMG Telemetry — Protocol F",
    "slug": "vip-black-tier-memberships-ka-146",
    "disciplineId": "vip-black-tier-memberships",
    "disciplineName": "Sovereign Black-Tier 24/7 All-Access Pass",
    "priceAED": 1850,
    "durationMinutes": 30,
    "caloriesBurnEstimate": 550,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 766,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-147",
    "title": "DEXA Clinical Scan & Metabolic VO2 Max Benchmark — Protocol A",
    "slug": "vip-black-tier-memberships-ka-147",
    "disciplineId": "vip-black-tier-memberships",
    "disciplineName": "Sovereign Black-Tier 24/7 All-Access Pass",
    "priceAED": 1970,
    "originalPriceAED": 2365,
    "durationMinutes": 30,
    "caloriesBurnEstimate": 590,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 771,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-148",
    "title": "Sovereign Black-Tier Unlimited Monthly Club Access — Protocol B",
    "slug": "vip-black-tier-memberships-ka-148",
    "disciplineId": "vip-black-tier-memberships",
    "disciplineName": "Sovereign Black-Tier 24/7 All-Access Pass",
    "priceAED": 2090,
    "durationMinutes": 30,
    "caloriesBurnEstimate": 630,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 5,
    "reviewsCount": 776,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-149",
    "title": "Olympic Snatch & Clean & Jerk Technical Lab — Protocol C",
    "slug": "vip-black-tier-memberships-ka-149",
    "disciplineId": "vip-black-tier-memberships",
    "disciplineName": "Sovereign Black-Tier 24/7 All-Access Pass",
    "priceAED": 2210,
    "originalPriceAED": 2650,
    "durationMinutes": 30,
    "caloriesBurnEstimate": 670,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 781,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-150",
    "title": "Athletic Mobility, Fascial Release & Contrast Therapy — Protocol D",
    "slug": "vip-black-tier-memberships-ka-150",
    "disciplineId": "vip-black-tier-memberships",
    "disciplineName": "Sovereign Black-Tier 24/7 All-Access Pass",
    "priceAED": 2330,
    "originalPriceAED": 2795,
    "durationMinutes": 30,
    "caloriesBurnEstimate": 710,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 786,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-151",
    "title": "High-Intensity Altitude MetCon & Lactate Threshold — Protocol E",
    "slug": "vip-black-tier-memberships-ka-151",
    "disciplineId": "vip-black-tier-memberships",
    "disciplineName": "Sovereign Black-Tier 24/7 All-Access Pass",
    "priceAED": 2450,
    "durationMinutes": 30,
    "caloriesBurnEstimate": 750,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 4.9,
    "reviewsCount": 791,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-152",
    "title": "Muay Thai Striking, Clinch Control & Heavy Bag Circuit — Protocol F",
    "slug": "vip-black-tier-memberships-ka-152",
    "disciplineId": "vip-black-tier-memberships",
    "disciplineName": "Sovereign Black-Tier 24/7 All-Access Pass",
    "priceAED": 2570,
    "durationMinutes": 30,
    "caloriesBurnEstimate": 790,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 4.9,
    "reviewsCount": 796,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-153",
    "title": "Prenatal & Postural Pilates Core Rehabilitation — Protocol A",
    "slug": "vip-black-tier-memberships-ka-153",
    "disciplineId": "vip-black-tier-memberships",
    "disciplineName": "Sovereign Black-Tier 24/7 All-Access Pass",
    "priceAED": 2690,
    "durationMinutes": 30,
    "caloriesBurnEstimate": 830,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 4.9,
    "reviewsCount": 801,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-154",
    "title": "Contrast Therapy: 4°C Ice Bath & 90°C Finnish Cedar Sauna — Protocol B",
    "slug": "vip-black-tier-memberships-ka-154",
    "disciplineId": "vip-black-tier-memberships",
    "disciplineName": "Sovereign Black-Tier 24/7 All-Access Pass",
    "priceAED": 2810,
    "originalPriceAED": 3370,
    "durationMinutes": 30,
    "caloriesBurnEstimate": 870,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 4.9,
    "reviewsCount": 806,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-155",
    "title": "Endurance Row & SkiErg Power Output Optimization — Protocol C",
    "slug": "vip-black-tier-memberships-ka-155",
    "disciplineId": "vip-black-tier-memberships",
    "disciplineName": "Sovereign Black-Tier 24/7 All-Access Pass",
    "priceAED": 2930,
    "durationMinutes": 30,
    "caloriesBurnEstimate": 360,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 811,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-156",
    "title": "Executive Longevity & Biomarker Optimization Protocol — Protocol D",
    "slug": "vip-black-tier-memberships-ka-156",
    "disciplineId": "vip-black-tier-memberships",
    "disciplineName": "Sovereign Black-Tier 24/7 All-Access Pass",
    "priceAED": 3050,
    "originalPriceAED": 3660,
    "durationMinutes": 30,
    "caloriesBurnEstimate": 400,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 5,
    "reviewsCount": 816,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-157",
    "title": "Custom Sports Macro Nutrition & Daily Meal Delivery Sync — Protocol E",
    "slug": "vip-black-tier-memberships-ka-157",
    "disciplineId": "vip-black-tier-memberships",
    "disciplineName": "Sovereign Black-Tier 24/7 All-Access Pass",
    "priceAED": 3170,
    "durationMinutes": 30,
    "caloriesBurnEstimate": 440,
    "intensityLevel": "All Fitness Levels",
    "masterCoach": {
      "name": "Dr. Henrik Lindqvist",
      "title": "Director of Sports Science & Biohacking",
      "credentials": "PhD in Exercise Physiology, Karolinska Institute"
    },
    "rating": 5,
    "reviewsCount": 821,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Dr. Henrik Lindqvist to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-158",
    "title": "Kettlebell Sport Ballistics & Grip Strength Conditioning — Protocol F",
    "slug": "vip-black-tier-memberships-ka-158",
    "disciplineId": "vip-black-tier-memberships",
    "disciplineName": "Sovereign Black-Tier 24/7 All-Access Pass",
    "priceAED": 3290,
    "durationMinutes": 30,
    "caloriesBurnEstimate": 480,
    "intensityLevel": "Elite Athlete",
    "masterCoach": {
      "name": "Marcus Sterling",
      "title": "Head of Strength & Olympic Performance",
      "credentials": "Ex-Olympic Weightlifting Coach, UKSCA Master Trainer"
    },
    "rating": 5,
    "reviewsCount": 826,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Marcus Sterling to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-159",
    "title": "Spinal Decompression & Deep Tissue Percussive Therapy — Protocol A",
    "slug": "vip-black-tier-memberships-ka-159",
    "disciplineId": "vip-black-tier-memberships",
    "disciplineName": "Sovereign Black-Tier 24/7 All-Access Pass",
    "priceAED": 3410,
    "durationMinutes": 30,
    "caloriesBurnEstimate": 520,
    "intensityLevel": "Advanced",
    "masterCoach": {
      "name": "Elena Rostova",
      "title": "Director of Reformer Pilates & Biomechanics",
      "credentials": "PMA Certified Master Instructor, 14+ Yrs Paris & Dubai"
    },
    "rating": 5,
    "reviewsCount": 831,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Elena Rostova to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  },
  {
    "id": "KA-160",
    "title": "Annual Black Tier VIP Membership with Private Locker — Protocol B",
    "slug": "vip-black-tier-memberships-ka-160",
    "disciplineId": "vip-black-tier-memberships",
    "disciplineName": "Sovereign Black-Tier 24/7 All-Access Pass",
    "priceAED": 3530,
    "durationMinutes": 30,
    "caloriesBurnEstimate": 560,
    "intensityLevel": "Intermediate to Advanced",
    "masterCoach": {
      "name": "Tariq Al-Hashemi",
      "title": "Head Combat & Championship Boxing Coach",
      "credentials": "Former Middleweight Champion, AIBA Level 3"
    },
    "rating": 4.9,
    "reviewsCount": 836,
    "isBlackTierExclusive": true,
    "isComplimentaryAssessment": true,
    "heroImage": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=80"
    ],
    "facilityZone": "DIFC Main Arena Floor",
    "shortDescription": "A high-performance athletic protocol engineered in Dubai DIFC. Designed under the oversight of Tariq Al-Hashemi to maximize muscular output, nervous system recovery, and functional longevity.",
    "keyOutcomes": [
      "Rapid strength & neuromuscular velocity gains",
      "Enhanced aerobic threshold and VO2 max stamina",
      "Accelerated cellular repair and lactic acid clearance",
      "Biomechanical alignment with zero joint stress"
    ],
    "equipmentUtilized": [
      "Eleiko IWF Competition Barbell & Bumper Sets",
      "Keiser Air300 Pneumatic Resistance Cables",
      "Balanced Body Allegro 2 Reformer & Cadillac",
      "M-Cryo Sub-Zero Liquid Nitrogen Pod (-110°C)"
    ],
    "sessionProtocol": [
      "Pre-workout movement screening & dynamic neural activation (10 mins)",
      "Core periodized strength/conditioning block with real-time velocity tracking (35 mins)",
      "Contrast recovery or percussive myofascial decompression (15 mins)"
    ]
  }
];
